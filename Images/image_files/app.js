/*
 *  Remodal - v0.2.0
 *  Flat, responsive, lightweight, easy customizable modal window plugin with declarative state notation and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
;(function ($) {
    "use strict";

    /**
     * Remodal settings
     */
    var pluginName = "remodal",
        defaults = {
            hashTracking: true,
            closeOnConfirm: true,
            closeOnCancel: true
        };

    /**
     * Special plugin object for instances.
     * @type {Object}
     */
    $[pluginName] = {
        lookup: []
    };

    var current, // current modal
        scrollTop; // scroll position

    /**
     * Get transition duration in ms
     * @return {Number}
     */
    var getTransitionDuration = function ($elem) {
        var duration = $elem.css("transition-duration") ||
            $elem.css("-webkit-transition-duration") ||
            $elem.css("-moz-transition-duration") ||
            $elem.css("-o-transition-duration") ||
            $elem.css("-ms-transition-duration") ||
            0;
        var delay = $elem.css("transition-delay") ||
            $elem.css("-webkit-transition-delay") ||
            $elem.css("-moz-transition-delay") ||
            $elem.css("-o-transition-delay") ||
            $elem.css("-ms-transition-delay") ||
            0;

        return (parseFloat(duration) + parseFloat(delay)) * 1000;
    };

    /**
     * Get a scrollbar width
     * @return {Number}
     */
    var getScrollbarWidth = function () {
        if ($(document.body).height() <= $(window).height()) {
            return 0;
        }

        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        var widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
    };

    /**
     * Lock screen
     */
    var lockScreen = function () {
        $(document.body).css("padding-right", "+=" + getScrollbarWidth());
        $("html, body").addClass(pluginName + "_lock");
    };

    /**
     * Unlock screen
     */
    var unlockScreen = function () {
        $(document.body).css("padding-right", "-=" + getScrollbarWidth());
        $("html, body").removeClass(pluginName + "_lock");
    };

    /**
     * Parse string with options
     * @param str
     * @returns {Object}
     */
    var parseOptions = function (str) {
        var obj = {}, clearedStr, arr;

        // remove spaces before and after delimiters
        clearedStr = str.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",");

        // parse string
        arr = clearedStr.split(",");
        var i, len, val;
        for (i = 0, len = arr.length; i < len; i++) {
            arr[i] = arr[i].split(":");
            val = arr[i][1];

            // convert string value if it is like a boolean
            if (typeof val === "string" || val instanceof String) {
                val = val === "true" || (val === "false" ? false : val);
            }

            // convert string value if it is like a number
            if (typeof val === "string" || val instanceof String) {
                val = !isNaN(val) ? +val : val;
            }

            obj[arr[i][0]] = val;
        }

        return obj;
    };

    /**
     * Remodal constructor
     */
    function Remodal(modal, options) {
        this.settings = $.extend({}, defaults, options);
        this.modal = modal;
        this.buildDOM();
        this.addEventListeners();
        this.index = $[pluginName].lookup.push(this) - 1;
        this.busy = false;
    }

    /**
     * Build required DOM
     */
    Remodal.prototype.buildDOM = function () {
        this.body = $(document.body);
        this.bg = $("." + pluginName + "-bg");
        this.modalClose = $("<a href='#'>").addClass(pluginName + "-close");
        this.overlay = $("<div>").addClass(pluginName + "-overlay");
        if (!this.modal.hasClass(pluginName)) {
            this.modal.addClass(pluginName);
        }

        this.modal.css("visibility", "visible");
        this.modal.append(this.modalClose);
        this.overlay.append(this.modal);
        this.body.append(this.overlay);

        this.confirm = this.modal.find("." + pluginName + "-confirm");
        this.cancel = this.modal.find("." + pluginName + "-cancel");

        var tdOverlay = getTransitionDuration(this.overlay),
            tdModal = getTransitionDuration(this.modal),
            tdBg = getTransitionDuration(this.bg);
        this.td = tdModal > tdOverlay ? tdModal : tdOverlay;
        this.td = tdBg > this.td ? tdBg : this.td;
    };

    /**
     * Add event listeners to the current modal window
     */
    Remodal.prototype.addEventListeners = function () {
        var self = this;

        this.modalClose.bind("click." + pluginName, function (e) {
            e.preventDefault();
            self.close();
        });

        this.cancel.bind("click." + pluginName, function (e) {
            e.preventDefault();
            self.modal.trigger("cancel");
            if (self.settings.closeOnCancel) {
                self.close();
            }
        });

        this.confirm.bind("click." + pluginName, function (e) {
            e.preventDefault();
            self.modal.trigger("confirm");
            if (self.settings.closeOnConfirm) {
                self.close();
            }
        });

        $(document).bind("keyup." + pluginName, function (e) {
            if (e.keyCode === 27) {
                self.close();
            }
        });

        this.overlay.bind("click." + pluginName, function (e) {
            var $target = $(e.target);
            if (!$target.hasClass(pluginName + "-overlay")) {
                return;
            }

            self.close();
        });
    };

    /**
     * Open modal window
     */
    Remodal.prototype.open = function () {
        // check if animation is complete
        if (this.busy) {
            return;
        }
        this.busy = true;

        this.modal.trigger("open");

        var id = this.modal.attr("data-" + pluginName + "-id");
        if (id && this.settings.hashTracking) {
            scrollTop = $(window).scrollTop();
            location.hash = id;
        }

        if (current && current !== this) {
            current.overlay.hide();
            current.body.removeClass(pluginName + "_active");
        }
        current = this;

        lockScreen();
        this.overlay.show();

        var self = this;
        setTimeout(function () {
            self.body.addClass(pluginName + "_active");

            setTimeout(function () {
                self.busy = false;
                self.modal.trigger("opened");
            }, self.td + 50);
        }, 25);
    };

    /**
     * Close modal window
     */
    Remodal.prototype.close = function () {
        // check if animation is complete
        if (this.busy) {
            return;
        }
        this.busy = true;

        this.modal.trigger("close");

        if (this.settings.hashTracking &&
            this.modal.attr("data-" + pluginName + "-id") === location.hash.substr(1)) {
            location.hash = "";
            $(window).scrollTop(scrollTop);
        }

        this.body.removeClass(pluginName + "_active");

        var self = this;
        setTimeout(function () {
            self.overlay.hide();
            unlockScreen();

            self.busy = false;
            self.modal.trigger("closed");
        }, self.td + 50);
    };

    if ($) {
        $.fn[pluginName] = function (opts) {
            var instance;
            this.each(function (i, e) {
                var $e = $(e);
                if ($e.data(pluginName) == null) {
                    instance = new Remodal($e, opts);
                    $e.data(pluginName, instance.index);

                    if (instance.settings.hashTracking &&
                        $e.attr("data-" + pluginName + "-id") === location.hash.substr(1)) {
                        instance.open();
                    }
                }
            });

            return instance;
        };
    }

    $(document).ready(function () {
        /**
         * data-remodal-target opens a modal window with a special id without hash change.
         */
        $(document).on("click", "[data-" + pluginName + "-target]", function (e) {
            e.preventDefault();

            var elem = e.currentTarget,
                id = elem.getAttribute("data-" + pluginName + "-target"),
                $target = $("[data-" + pluginName + "-id=" + id + "]");

            $[pluginName].lookup[$target.data(pluginName)].open();
        });

        /**
         * Auto initialization of modal windows.
         * They should have the 'remodal' class attribute.
         * Also you can pass params into the modal throw the data-remodal-options attribute.
         * data-remodal-options must be a valid JSON string.
         */
        $(document).find("." + pluginName).each(function (i, container) {
            var $container = $(container),
                options = $container.data(pluginName + "-options");

            if (!options) {
                options = {};
            } else if (typeof options === "string" || options instanceof String) {
                options = parseOptions(options);
            }

            $container[pluginName](options);
        });
    });

    /**
     * Hashchange handling to show a modal with a special id.
     */
    var hashHandler = function (e, closeOnEmptyHash) {
        var id = location.hash.replace("#", "");

        if (typeof closeOnEmptyHash === "undefined") {
            closeOnEmptyHash = true;
        }

        if (!id) {
            if (closeOnEmptyHash) {
                // check if we have currently opened modal and animation is complete
                if (current && !current.busy && current.settings.hashTracking) {
                    current.close();
                }
            }
        } else {
            var $elem;

            // Catch syntax error if your hash is bad
            try {
                $elem = $("[data-" + pluginName + "-id=" + id.replace(new RegExp("/", "g"), "\\/") + "]");
            } catch (e) {}

            if ($elem && $elem.length) {
                var instance = $[pluginName].lookup[$elem.data(pluginName)];

                if (instance && instance.settings.hashTracking) {
                    instance.open();
                }
            }

        }
    };
    $(window).bind("hashchange." + pluginName, hashHandler);
})(window.jQuery || window.Zepto);

/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-generatedcontent-csstransforms-csstransforms3d-csstransitions-hashchange-video-touch-shiv-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function B(a){j.cssText=a}function C(a,b){return B(n.join(a+";")+(b||""))}function D(a,b){return typeof a===b}function E(a,b){return!!~(""+a).indexOf(b)}function F(a,b){for(var d in a){var e=a[d];if(!E(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function G(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:D(f,"function")?f.bind(d||b):f}return!1}function H(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return D(b,"string")||D(b,"undefined")?F(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),G(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=D(e[d],"function"),D(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),z={}.hasOwnProperty,A;!D(z,"undefined")&&!D(z.call,"undefined")?A=function(a,b){return z.call(a,b)}:A=function(a,b){return b in a&&D(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:x(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},r.hashchange=function(){return y("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},r.cssanimations=function(){return H("animationName")},r.csstransforms=function(){return!!H("transform")},r.csstransforms3d=function(){var a=!!H("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return H("transition")},r.generatedcontent=function(){var a;return x(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},r.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c};for(var I in r)A(r,I)&&(w=I.toLowerCase(),e[w]=r[I](),u.push((e[w]?"":"no-")+w));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)A(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},B(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.hasEvent=y,e.testProp=function(a){return F([a])},e.testAllProps=H,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document);

/*! Picturefill - v2.1.0 - 2014-07-25
* http://scottjehl.github.io/picturefill
* Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {
    "use strict";

    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = (window.styleMedia || window.media);

    // For those that don't support matchMedium
    if (!styleMedia) {
        var style       = document.createElement('style'),
            script      = document.getElementsByTagName('script')[0],
            info        = null;

        style.type  = 'text/css';
        style.id    = 'matchmediajs-test';

        script.parentNode.insertBefore(style, script);

        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) {
                    style.styleSheet.cssText = text;
                } else {
                    style.textContent = text;
                }

                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }

    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());
/*! Picturefill - Responsive Images that work today.
*  Author: Scott Jehl, Filament Group, 2012 ( new proposal implemented by Shawn Jansepar )
*  License: MIT/GPLv2
*  Spec: http://picture.responsiveimages.org/
*/
(function( w, doc ) {
    // Enable strict mode
    "use strict";

    // If picture is supported, well, that's awesome. Let's get outta here...
    if ( w.HTMLPictureElement ) {
        w.picturefill = function() { };
        return;
    }

    // HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
    doc.createElement( "picture" );

    // local object for method references and testing exposure
    var pf = {};

    // namespace
    pf.ns = "picturefill";

    // srcset support test
    pf.srcsetSupported = "srcset" in doc.createElement( "img" );
    pf.sizesSupported = w.HTMLImageElement.sizes;

    // just a string trim workaround
    pf.trim = function( str ) {
        return str.trim ? str.trim() : str.replace( /^\s+|\s+$/g, "" );
    };

    // just a string endsWith workaround
    pf.endsWith = function( str, suffix ) {
        return str.endsWith ? str.endsWith( suffix ) : str.indexOf( suffix, str.length - suffix.length ) !== -1;
    };

    /**
     * Shortcut method for matchMedia ( for easy overriding in tests )
     */
    pf.matchesMedia = function( media ) {
        return w.matchMedia && w.matchMedia( media ).matches;
    };

    /**
     * Shortcut method for `devicePixelRatio` ( for easy overriding in tests )
     */
    pf.getDpr = function() {
        return ( w.devicePixelRatio || 1 );
    };

    /**
     * Get width in css pixel value from a "length" value
     * http://dev.w3.org/csswg/css-values-3/#length-value
     */
    pf.getWidthFromLength = function( length ) {
        // If no length was specified, or it is 0 or negative, default to `100vw` (per the spec).
        length = length && ( parseFloat( length ) > 0 || length.indexOf( "calc(" ) > -1 ) ? length : "100vw";

        /**
        * If length is specified in  `vw` units, use `%` instead since the div we’re measuring
        * is injected at the top of the document.
        *
        * TODO: maybe we should put this behind a feature test for `vw`?
        */
        length = length.replace( "vw", "%" );

        // Create a cached element for getting length value widths
        if ( !pf.lengthEl ) {
            pf.lengthEl = doc.createElement( "div" );
            doc.documentElement.insertBefore( pf.lengthEl, doc.documentElement.firstChild );
        }

        // Positioning styles help prevent padding/margin/width on `html` from throwing calculations off.
        pf.lengthEl.style.cssText = "position: absolute; left: 0; width: " + length + ";";

        if ( pf.lengthEl.offsetWidth <= 0 ) {
            // Something has gone wrong. `calc()` is in use and unsupported, most likely. Default to `100vw` (`100%`, for broader support.):
            pf.lengthEl.style.cssText = "width: 100%;";
        }

        return pf.lengthEl.offsetWidth;
    };

    // container of supported mime types that one might need to qualify before using
    pf.types =  {};

    // Add support for standard mime types.
    pf.types["image/jpeg"] = true;
    pf.types["image/gif"] = true;
    pf.types["image/png"] = true;

    // test svg support
    pf.types[ "image/svg+xml" ] = doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");

    // test webp support, only when the markup calls for it
    pf.types[ "image/webp" ] = function() {
        // based on Modernizr's lossless img-webp test
        // note: asynchronous
        var img = new w.Image(),
            type = "image/webp";

        img.onerror = function() {
            pf.types[ type ] = false;
            picturefill();
        };
        img.onload = function() {
            pf.types[ type ] = img.width === 1;
            picturefill();
        };
        img.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
    };

    /**
     * Takes a source element and checks if its type attribute is present and if so, supported
     * Note: for type tests that require a async logic,
     * you can define them as a function that'll run only if that type needs to be tested. Just make the test function call picturefill again when it is complete.
     * see the async webp test above for example
     */
    pf.verifyTypeSupport = function( source ) {
        var type = source.getAttribute( "type" );
        // if type attribute exists, return test result, otherwise return true
        if ( type === null || type === "" ) {
            return true;
        } else {
            // if the type test is a function, run it and return "pending" status. The function will rerun picturefill on pending elements once finished.
            if ( typeof( pf.types[ type ] ) === "function" ) {
                pf.types[ type ]();
                return "pending";
            } else {
                return pf.types[ type ];
            }
        }
    };

    /**
    * Parses an individual `size` and returns the length, and optional media query
    */
    pf.parseSize = function( sourceSizeStr ) {
        var match = /(\([^)]+\))?\s*(.+)/g.exec( sourceSizeStr );
        return {
            media: match && match[1],
            length: match && match[2]
        };
    };

    /**
     * Takes a string of sizes and returns the width in pixels as a number
     */
    pf.findWidthFromSourceSize = function( sourceSizeListStr ) {
        // Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
        //                            or (min-width:30em) calc(30% - 15px)
        var sourceSizeList = pf.trim( sourceSizeListStr ).split( /\s*,\s*/ ),
            winningLength;

        for ( var i = 0, len = sourceSizeList.length; i < len; i++ ) {
            // Match <media-condition>? length, ie ( min-width: 50em ) 100%
            var sourceSize = sourceSizeList[ i ],
                // Split "( min-width: 50em ) 100%" into separate strings
                parsedSize = pf.parseSize( sourceSize ),
                length = parsedSize.length,
                media = parsedSize.media;

            if ( !length ) {
                continue;
            }
            if ( !media || pf.matchesMedia( media ) ) {
                // if there is no media query or it matches, choose this as our winning length
                // and end algorithm
                winningLength = length;
                break;
            }
        }

        // pass the length to a method that can properly determine length
        // in pixels based on these formats: http://dev.w3.org/csswg/css-values-3/#length-value
        return pf.getWidthFromLength( winningLength );
    };

    pf.parseSrcset = function( srcset ) {
        /**
        * A lot of this was pulled from Boris Smus’ parser for the now-defunct WHATWG `srcset`
        * https://github.com/borismus/srcset-polyfill/blob/master/js/srcset-info.js
        *
        * 1. Let input (`srcset`) be the value passed to this algorithm.
        * 2. Let position be a pointer into input, initially pointing at the start of the string.
        * 3. Let raw candidates be an initially empty ordered list of URLs with associated
        *    unparsed descriptors. The order of entries in the list is the order in which entries
        *    are added to the list.
        */
        var candidates = [];

        while ( srcset !== "" ) {
            srcset = srcset.replace(/^\s+/g,"");

            // 5. Collect a sequence of characters that are not space characters, and let that be url.
            var pos = srcset.search(/\s/g),
                url, descriptor = null;

            if ( pos !== -1 ) {
                url = srcset.slice( 0, pos );

                var last = url[ url.length - 1 ];

                // 6. If url ends with a U+002C COMMA character (,), remove that character from url
                // and let descriptors be the empty string. Otherwise, follow these substeps
                // 6.1. If url is empty, then jump to the step labeled descriptor parser.

                if ( last === "," || url === "" ) {
                    url = url.replace(/,+$/, "");
                    descriptor = "";
                }
                srcset = srcset.slice( pos + 1 );

                // 6.2. Collect a sequence of characters that are not U+002C COMMA characters (,), and
                // let that be descriptors.
                if ( descriptor === null ) {
                    var descpos = srcset.indexOf(",");
                    if ( descpos !== -1 ) {
                        descriptor = srcset.slice( 0, descpos );
                        srcset = srcset.slice( descpos + 1 );
                    } else {
                        descriptor = srcset;
                        srcset = "";
                    }
                }
            } else {
                url = srcset;
                srcset = "";
            }

            // 7. Add url to raw candidates, associated with descriptors.
            if ( url || descriptor ) {
                candidates.push({
                    url: url,
                    descriptor: descriptor
                });
            }
        }
        return candidates;
    };

    pf.parseDescriptor = function( descriptor, sizesattr ) {
        // 11. Descriptor parser: Let candidates be an initially empty source set. The order of entries in the list
        // is the order in which entries are added to the list.
        var sizes = sizesattr || "100vw",
            sizeDescriptor = descriptor && descriptor.replace(/(^\s+|\s+$)/g, ""),
            widthInCssPixels = pf.findWidthFromSourceSize( sizes ),
            resCandidate;

            if ( sizeDescriptor ) {
                var splitDescriptor = sizeDescriptor.split(" ");

                for (var i = splitDescriptor.length + 1; i >= 0; i--) {
                    if ( splitDescriptor[ i ] !== undefined ) {
                        var curr = splitDescriptor[ i ],
                            lastchar = curr && curr.slice( curr.length - 1 );

                        if ( ( lastchar === "h" || lastchar === "w" ) && !pf.sizesSupported ) {
                            resCandidate = parseFloat( ( parseInt( curr, 10 ) / widthInCssPixels ) );
                        } else if ( lastchar === "x" ) {
                            var res = curr && parseFloat( curr, 10 );
                            resCandidate = res && !isNaN( res ) ? res : 1;
                        }
                    }
                }
            }
        return resCandidate || 1;
    };

    /**
     * Takes a srcset in the form of url/
     * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
     *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
     *     "images/pic-small.png"
     * Get an array of image candidates in the form of
     *      {url: "/foo/bar.png", resolution: 1}
     * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
     * If sizes is specified, resolution is calculated
     */
    pf.getCandidatesFromSourceSet = function( srcset, sizes ) {
        var candidates = pf.parseSrcset( srcset ),
            formattedCandidates = [];

        for ( var i = 0, len = candidates.length; i < len; i++ ) {
            var candidate = candidates[ i ];

            formattedCandidates.push({
                url: candidate.url,
                resolution: pf.parseDescriptor( candidate.descriptor, sizes )
            });
        }
        return formattedCandidates;
    };

    /*
     * if it's an img element and it has a srcset property,
     * we need to remove the attribute so we can manipulate src
     * (the property's existence infers native srcset support, and a srcset-supporting browser will prioritize srcset's value over our winning picture candidate)
     * this moves srcset's value to memory for later use and removes the attr
     */
    pf.dodgeSrcset = function( img ) {
        if ( img.srcset ) {
            img[ pf.ns ].srcset = img.srcset;
            img.removeAttribute( "srcset" );
        }
    };

    /*
     * Accept a source or img element and process its srcset and sizes attrs
     */
    pf.processSourceSet = function( el ) {
        var srcset = el.getAttribute( "srcset" ),
            sizes = el.getAttribute( "sizes" ),
            candidates = [];

        // if it's an img element, use the cached srcset property (defined or not)
        if ( el.nodeName.toUpperCase() === "IMG" && el[ pf.ns ] && el[ pf.ns ].srcset ) {
            srcset = el[ pf.ns ].srcset;
        }

        if ( srcset ) {
            candidates = pf.getCandidatesFromSourceSet( srcset, sizes );
        }
        return candidates;
    };

    pf.applyBestCandidate = function( candidates, picImg ) {
        var candidate,
            length,
            bestCandidate;

        candidates.sort( pf.ascendingSort );

        length = candidates.length;
        bestCandidate = candidates[ length - 1 ];

        for ( var i = 0; i < length; i++ ) {
            candidate = candidates[ i ];
            if ( candidate.resolution >= pf.getDpr() ) {
                bestCandidate = candidate;
                break;
            }
        }

        if ( bestCandidate && !pf.endsWith( picImg.src, bestCandidate.url ) ) {
            picImg.src = bestCandidate.url;
            // currentSrc attribute and property to match
            // http://picture.responsiveimages.org/#the-img-element
            picImg.currentSrc = picImg.src;
        }
    };

    pf.ascendingSort = function( a, b ) {
        return a.resolution - b.resolution;
    };

    /*
     * In IE9, <source> elements get removed if they aren't children of
     * video elements. Thus, we conditionally wrap source elements
     * using <!--[if IE 9]><video style="display: none;"><![endif]-->
     * and must account for that here by moving those source elements
     * back into the picture element.
     */
    pf.removeVideoShim = function( picture ) {
        var videos = picture.getElementsByTagName( "video" );
        if ( videos.length ) {
            var video = videos[ 0 ],
                vsources = video.getElementsByTagName( "source" );
            while ( vsources.length ) {
                picture.insertBefore( vsources[ 0 ], video );
            }
            // Remove the video element once we're finished removing its children
            video.parentNode.removeChild( video );
        }
    };

    /*
     * Find all `img` elements, and add them to the candidate list if they have
     * a `picture` parent, a `sizes` attribute in basic `srcset` supporting browsers,
     * a `srcset` attribute at all, and they haven’t been evaluated already.
     */
    pf.getAllElements = function() {
        var elems = [],
            imgs = doc.getElementsByTagName( "img" );

        for ( var h = 0, len = imgs.length; h < len; h++ ) {
            var currImg = imgs[ h ];

            if ( currImg.parentNode.nodeName.toUpperCase() === "PICTURE" ||
                ( currImg.getAttribute( "srcset" ) !== null ) || currImg[ pf.ns ] && currImg[ pf.ns ].srcset !== null ) {
                    elems.push( currImg );
            }
        }
        return elems;
    };

    pf.getMatch = function( img, picture ) {
        var sources = picture.childNodes,
            match;

        // Go through each child, and if they have media queries, evaluate them
        for ( var j = 0, slen = sources.length; j < slen; j++ ) {
            var source = sources[ j ];

            // ignore non-element nodes
            if ( source.nodeType !== 1 ) {
                continue;
            }

            // Hitting the `img` element that started everything stops the search for `sources`.
            // If no previous `source` matches, the `img` itself is evaluated later.
            if ( source === img ) {
                return match;
            }

            // ignore non-`source` nodes
            if ( source.nodeName.toUpperCase() !== "SOURCE" ) {
                continue;
            }
            // if it's a source element that has the `src` property set, throw a warning in the console
            if ( source.getAttribute( "src" ) !== null && typeof console !== undefined ){
                console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
            }

            var media = source.getAttribute( "media" );

            // if source does not have a srcset attribute, skip
            if ( !source.getAttribute( "srcset" ) ) {
                continue;
            }

            // if there's no media specified, OR w.matchMedia is supported
            if ( ( !media || pf.matchesMedia( media ) ) ) {
                var typeSupported = pf.verifyTypeSupport( source );

                if ( typeSupported === true ) {
                    match = source;
                    break;
                } else if ( typeSupported === "pending" ) {
                    return false;
                }
            }
        }

        return match;
    };

    function picturefill( opt ) {
        var elements,
            element,
            parent,
            firstMatch,
            candidates,

        options = opt || {};
        elements = options.elements || pf.getAllElements();

        // Loop through all elements
        for ( var i = 0, plen = elements.length; i < plen; i++ ) {
            element = elements[ i ];
            parent = element.parentNode;
            firstMatch = undefined;
            candidates = undefined;

            // expando for caching data on the img
            if ( !element[ pf.ns ] ) {
                element[ pf.ns ] = {};
            }

            // if the element has already been evaluated, skip it
            // unless `options.force` is set to true ( this, for example,
            // is set to true when running `picturefill` on `resize` ).
            if ( !options.reevaluate && element[ pf.ns ].evaluated ) {
                continue;
            }

            // if `img` is in a `picture` element
            if ( parent.nodeName.toUpperCase() === "PICTURE" ) {

                // IE9 video workaround
                pf.removeVideoShim( parent );

                // return the first match which might undefined
                // returns false if there is a pending source
                // TODO the return type here is brutal, cleanup
                firstMatch = pf.getMatch( element, parent );

                // if any sources are pending in this picture due to async type test(s)
                // remove the evaluated attr and skip for now ( the pending test will
                // rerun picturefill on this element when complete)
                if ( firstMatch === false ) {
                    continue;
                }
            } else {
                firstMatch = undefined;
            }

            // Cache and remove `srcset` if present and we’re going to be doing `picture`/`srcset`/`sizes` polyfilling to it.
            if ( parent.nodeName.toUpperCase() === "PICTURE" ||
            ( element.srcset && !pf.srcsetSupported ) ||
            ( !pf.sizesSupported && ( element.srcset && element.srcset.indexOf("w") > -1 ) ) ) {
                pf.dodgeSrcset( element );
            }

            if ( firstMatch ) {
                candidates = pf.processSourceSet( firstMatch );
                pf.applyBestCandidate( candidates, element );
            } else {
                // No sources matched, so we’re down to processing the inner `img` as a source.
                candidates = pf.processSourceSet( element );

                if ( element.srcset === undefined || element[ pf.ns ].srcset ) {
                    // Either `srcset` is completely unsupported, or we need to polyfill `sizes` functionality.
                    pf.applyBestCandidate( candidates, element );
                } // Else, resolution-only `srcset` is supported natively.
            }

            // set evaluated to true to avoid unnecessary reparsing
            element[ pf.ns ].evaluated = true;
        }
    }

    /**
     * Sets up picture polyfill by polling the document and running
     * the polyfill every 250ms until the document is ready.
     * Also attaches picturefill on resize
     */
    function runPicturefill() {
        picturefill();
        var intervalId = setInterval( function() {
            // When the document has finished loading, stop checking for new images
            // https://github.com/ded/domready/blob/master/ready.js#L15
            picturefill();
            if ( /^loaded|^i|^c/.test( doc.readyState ) ) {
                clearInterval( intervalId );
                return;
            }
        }, 250 );
        if ( w.addEventListener ) {
            var resizeThrottle;
            w.addEventListener( "resize", function() {
                if (!w._picturefillWorking) {
                    w._picturefillWorking = true;
                    w.clearTimeout( resizeThrottle );
                    resizeThrottle = w.setTimeout( function() {
                        picturefill({ reevaluate: true });
                        w._picturefillWorking = false;
                    }, 60 );
                }
            }, false );
        }
    }

    runPicturefill();

    /* expose methods for testing */
    picturefill._ = pf;

    /* expose picturefill */
    if ( typeof module === "object" && typeof module.exports === "object" ) {
        // CommonJS, just export
        module.exports = picturefill;
    } else if ( typeof define === "function" && define.amd ){
        // AMD support
        define( function() { return picturefill; } );
    } else if ( typeof w === "object" ) {
        // If no AMD and we are in the browser, attach to window
        w.picturefill = picturefill;
    }

} )( this, this.document );

/*! ResponsiveSlides.js v1.54
 * http://responsiveslides.com
 * http://viljamis.com
 *
 * Copyright (c) 2011-2012 @viljamis
 * Available under the MIT license
 */

/*jslint browser: true, sloppy: true, vars: true, plusplus: true, indent: 2 */

(function ($, window, i) {
  $.fn.responsiveSlides = function (options) {

    // Default settings
    var settings = $.extend({
      "auto": true,             // Boolean: Animate automatically, true or false
      "speed": 500,             // Integer: Speed of the transition, in milliseconds
      "timeout": 4000,          // Integer: Time between slide transitions, in milliseconds
      "pager": false,           // Boolean: Show pager, true or false
      "nav": false,             // Boolean: Show navigation, true or false
      "random": false,          // Boolean: Randomize the order of the slides, true or false
      "pause": false,           // Boolean: Pause on hover, true or false
      "pauseControls": true,    // Boolean: Pause when hovering controls, true or false
      "prevText": "Previous",   // String: Text for the "previous" button
      "nextText": "Next",       // String: Text for the "next" button
      "maxwidth": "",           // Integer: Max-width of the slideshow, in pixels
      "navContainer": "",       // Selector: Where auto generated controls should be appended to, default is after the <ul>
      "manualControls": "",     // Selector: Declare custom pager navigation
      "namespace": "rslides",   // String: change the default namespace used
      "before": $.noop,         // Function: Before callback
      "after": $.noop           // Function: After callback
    }, options);

    return this.each(function () {

      // Index for namespacing
      i++;

      var $this = $(this),

        // Local variables
        vendor,
        selectTab,
        startCycle,
        restartCycle,
        rotate,
        $tabs,

        // Helpers
        index = 0,
        $slide = $this.children(),
        length = $slide.size(),
        fadeTime = parseFloat(settings.speed),
        waitTime = parseFloat(settings.timeout),
        maxw = parseFloat(settings.maxwidth),

        // Namespacing
        namespace = settings.namespace,
        namespaceIdx = namespace + i,

        // Classes
        navClass = namespace + "_nav " + namespaceIdx + "_nav",
        activeClass = namespace + "_here",
        visibleClass = namespaceIdx + "_on",
        slideClassPrefix = namespaceIdx + "_s",

        // Pager
        $pager = $("<ul class='" + namespace + "_tabs " + namespaceIdx + "_tabs' />"),

        // Styles for visible and hidden slides
        visible = {"float": "left", "position": "relative", "opacity": 1, "zIndex": 2},
        hidden = {"float": "none", "position": "absolute", "opacity": 0, "zIndex": 1},

        // Detect transition support
        supportsTransitions = (function () {
          var docBody = document.body || document.documentElement;
          var styles = docBody.style;
          var prop = "transition";
          if (typeof styles[prop] === "string") {
            return true;
          }
          // Tests for vendor specific prop
          vendor = ["Moz", "Webkit", "Khtml", "O", "ms"];
          prop = prop.charAt(0).toUpperCase() + prop.substr(1);
          var i;
          for (i = 0; i < vendor.length; i++) {
            if (typeof styles[vendor[i] + prop] === "string") {
              return true;
            }
          }
          return false;
        })(),

        // Fading animation
        slideTo = function (idx) {
          settings.before(idx);
          // If CSS3 transitions are supported
          if (supportsTransitions) {
            $slide
              .removeClass(visibleClass)
              .css(hidden)
              .eq(idx)
              .addClass(visibleClass)
              .css(visible);
            index = idx;
            setTimeout(function () {
              settings.after(idx);
            }, fadeTime);
          // If not, use jQuery fallback
          } else {
            $slide
              .stop()
              .fadeOut(fadeTime, function () {
                $(this)
                  .removeClass(visibleClass)
                  .css(hidden)
                  .css("opacity", 1);
              })
              .eq(idx)
              .fadeIn(fadeTime, function () {
                $(this)
                  .addClass(visibleClass)
                  .css(visible);
                settings.after(idx);
                index = idx;
              });
          }
        };

      // Random order
      if (settings.random) {
        $slide.sort(function () {
          return (Math.round(Math.random()) - 0.5);
        });
        $this
          .empty()
          .append($slide);
      }

      // Add ID's to each slide
      $slide.each(function (i) {
        this.id = slideClassPrefix + i;
      });

      // Add max-width and classes
      $this.addClass(namespace + " " + namespaceIdx);
      if (options && options.maxwidth) {
        $this.css("max-width", maxw);
      }

      // Hide all slides, then show first one
      $slide
        .hide()
        .css(hidden)
        .eq(0)
        .addClass(visibleClass)
        .css(visible)
        .show();

      // CSS transitions
      if (supportsTransitions) {
        $slide
          .show()
          .css({
            // -ms prefix isn't needed as IE10 uses prefix free version
            "-webkit-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-moz-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-o-transition": "opacity " + fadeTime + "ms ease-in-out",
            "transition": "opacity " + fadeTime + "ms ease-in-out"
          });
      }

      // Only run if there's more than one slide
      if ($slide.size() > 1) {

        // Make sure the timeout is at least 100ms longer than the fade
        if (waitTime < fadeTime + 100) {
          return;
        }

        // Pager
        if (settings.pager && !settings.manualControls) {
          var tabMarkup = [];
          $slide.each(function (i) {
            var n = i + 1;
            tabMarkup +=
              "<li>" +
              "<a href='#' class='" + slideClassPrefix + n + "'>" + n + "</a>" +
              "</li>";
          });
          $pager.append(tabMarkup);

          // Inject pager
          if (options.navContainer) {
            $(settings.navContainer).append($pager);
          } else {
            $this.after($pager);
          }
        }

        // Manual pager controls
        if (settings.manualControls) {
          $pager = $(settings.manualControls);
          $pager.addClass(namespace + "_tabs " + namespaceIdx + "_tabs");
        }

        // Add pager slide class prefixes
        if (settings.pager || settings.manualControls) {
          $pager.find('li').each(function (i) {
            $(this).addClass(slideClassPrefix + (i + 1));
          });
        }

        // If we have a pager, we need to set up the selectTab function
        if (settings.pager || settings.manualControls) {
          $tabs = $pager.find('a');

          // Select pager item
          selectTab = function (idx) {
            $tabs
              .closest("li")
              .removeClass(activeClass)
              .eq(idx)
              .addClass(activeClass);
          };
        }

        // Auto cycle
        if (settings.auto) {

          startCycle = function () {
            rotate = setInterval(function () {

              // Clear the event queue
              $slide.stop(true, true);

              var idx = index + 1 < length ? index + 1 : 0;

              // Remove active state and set new if pager is set
              if (settings.pager || settings.manualControls) {
                selectTab(idx);
              }

              slideTo(idx);
            }, waitTime);
          };

          // Init cycle
          startCycle();
        }

        // Restarting cycle
        restartCycle = function () {
          if (settings.auto) {
            // Stop
            clearInterval(rotate);
            // Restart
            startCycle();
          }
        };

        // Pause on hover
        if (settings.pause) {
          $this.hover(function () {
            clearInterval(rotate);
          }, function () {
            restartCycle();
          });
        }

        // Pager click event handler
        if (settings.pager || settings.manualControls) {
          $tabs.bind("click", function (e) {
            e.preventDefault();

            if (!settings.pauseControls) {
              restartCycle();
            }

            // Get index of clicked tab
            var idx = $tabs.index(this);

            // Break if element is already active or currently animated
            if (index === idx || $("." + visibleClass).queue('fx').length) {
              return;
            }

            // Remove active state from old tab and set new one
            selectTab(idx);

            // Do the animation
            slideTo(idx);
          })
            .eq(0)
            .closest("li")
            .addClass(activeClass);

          // Pause when hovering pager
          if (settings.pauseControls) {
            $tabs.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

        // Navigation
        if (settings.nav) {
          var navMarkup =
            "<a href='#' class='" + navClass + " prev'>" + settings.prevText + "</a>" +
            "<a href='#' class='" + navClass + " next'>" + settings.nextText + "</a>";

          // Inject navigation
          if (options.navContainer) {
            $(settings.navContainer).append(navMarkup);
          } else {
            $this.after(navMarkup);
          }

          var $trigger = $("." + namespaceIdx + "_nav"),
            $prev = $trigger.filter(".prev");

          // Click event handler
          $trigger.bind("click", function (e) {
            e.preventDefault();

            var $visibleClass = $("." + visibleClass);

            // Prevent clicking if currently animated
            if ($visibleClass.queue('fx').length) {
              return;
            }

            //  Adds active class during slide animation
            //  $(this)
            //    .addClass(namespace + "_active")
            //    .delay(fadeTime)
            //    .queue(function (next) {
            //      $(this).removeClass(namespace + "_active");
            //      next();
            //  });

            // Determine where to slide
            var idx = $slide.index($visibleClass),
              prevIdx = idx - 1,
              nextIdx = idx + 1 < length ? index + 1 : 0;

            // Go to slide
            slideTo($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            if (settings.pager || settings.manualControls) {
              selectTab($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            }

            if (!settings.pauseControls) {
              restartCycle();
            }
          });

          // Pause when hovering navigation
          if (settings.pauseControls) {
            $trigger.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

      }

      // Max-width fallback
      if (typeof document.body.style.maxWidth === "undefined" && options.maxwidth) {
        var widthSupport = function () {
          $this.css("width", "100%");
          if ($this.width() > maxw) {
            $this.css("width", maxw);
          }
        };

        // Init fallback
        widthSupport();
        $(window).bind("resize", function () {
          widthSupport();
        });
      }

    });

  };
})(jQuery, this, 0);

(function($){
var App;

App = (function ($) {
  'use strict';

  var self = {
    allowBgVideo: (!Modernizr.touch && Modernizr.video),
    globalVideoModal: $('#modal-video').remodal(),
    playerOptions: {
      autohide: 1,
      autoplay: 1,
      color: 'white',
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      iv_load_policy: 3,
      loop: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      wmode: 'transparent'
    }
  },
  pollVideoLoad;

  if (Modernizr.touch) {
    self.playerOptions.autohide = 0;
    self.playerOptions.autoplay = 0;
    self.playerOptions.controls = 1;
  }

  var tag = document.createElement('script');
  //tag.src = "//www.youtube.com/player_api";
  tag.src = '//www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //window.onYouTubePlayerAPIReady = function () {
  window.onYouTubeIframeAPIReady = function () {

    if( ! rr_isChinese() ) {
      self.globalVideoPlayer = new YT.Player($('#modal-video').find('.video')[0], {
        playerVars: self.playerOptions
      });
    }

    $('.m-content-has-video').each(function () {
      var video = new App.Video({ $el: $(this) });
      video.initialize();
    });

    $(document).on('close', '.remodal', function () {

      if( !rr_isChinese() ) {
          self.globalVideoPlayer.pauseVideo ();
      }

      if (typeof self.pageVideoPlayer !== 'undefined') {
        self.pageVideoPlayer.playVideo();
      }
    });

    $('#main a[href*="youtube"]:not(.button-play), a[href*="youtu.be"]:not(.button-play), .lg-floating .button-play, .touch .button-play').on('click', function (e) {
      if( 'https://www.youtube.com/user/RethinkRobotics' == $(this).attr('href') ) return true;

    if( rr_isChinese() ) {
            var videoURL = $(this).attr('href');
            if( videoURL && videoURL.indexOf('youku.com') >= 0 ) {
             $('#modal-video .video').remove();
                 $('#modal-video').append('<iframe class="video" height="360" width="640" src="' + videoURL + '" frameborder=0 allowfullscreen></iframe>');
                  App.globalVideoModal.open();
            }

        $('#modal-video').on('click', '.remodal-close', function(e) {
                  e.preventDefault();
                  $('#modal-video').find('iframe.video').attr('src', '');
                  App.globalVideoModal.close();
               });
        return false;
    }

      e.preventDefault();
      var href = $(this).attr('href'),
      youtubeId = href.split('v=')[1],
      timestamp = href.split('t=')[1],
      minutes = 0,
      seconds = 0,
      totalSeconds = 0;
      if( typeof timestamp != 'undefined' ) {
        minutes = timestamp.split('m')[0] || 0;
        seconds = timestamp.split('m')[1].split('s')[0] || 0;
        if( minutes > 0 ) { totalSeconds += parseInt(minutes) * 60; }
        if( seconds > 0 ) { totalSeconds += parseInt(seconds); }
      }

      if (typeof youtubeId === 'undefined') {
        youtubeId = href.split('youtu.be/')[1].split('?')[0];
      }

      self.globalVideoModal.open();

      if (Modernizr.touch) {
        self.globalVideoPlayer.cueVideoById(youtubeId, totalSeconds);
      } else {
        pollVideoLoad(youtubeId, totalSeconds);
      }
    });
  };

  pollVideoLoad = function (youtubeId, totalSeconds) {
    var ts = totalSeconds || 0;
    if (typeof self.globalVideoPlayer.loadVideoById !== 'undefined') {
      self.globalVideoPlayer.loadVideoById(youtubeId, ts);
      //self.globalVideoPlayer.cueVideoById(youtubeId, ts);
    } else {
      setTimeout(function () {
        pollVideoLoad(youtubeId,ts);
      }, 200);
    }
  };

  self.initialize = function () {
    var nav = new App.Nav();
    $('.slideshow').responsiveSlides();
  };

  return self;
})(jQuery);

    $(function () {
      App.initialize();
    });

    App.Nav = (function () {
      'use strict';

      var self = {},
      $el = $('#nav');

      $el.find('.menu-item-has-children').find('> a').on('click', function (e) {
        e.preventDefault();

        $(this).closest('.menu-item-has-children').toggleClass('show-sub-menu');
      });

      $(document).mouseup(function (e) {
        var $link = $el.find('.menu-item-has-children').find('> a');

        if (!$link.is(e.target) && $link.has(e.target).length === 0) {
          $link.closest('.menu-item-has-children').removeClass('show-sub-menu');
        }
      });

      $(document).keyup(function(e) {
        if (e.keyCode == 27) {
          $el.find('.menu-item-has-children').removeClass('show-sub-menu');
        }
      });

      return self;
    });

    //***************************************************************************
    //
    //***************************************************************************
    function populateConfirmation(){
        var html = '',
            total = 0,
            date = new Date(),
            $summary = $('.gform_page:last').find('.gform_fields');

        $('.gform_wrapper .ginput_quantity').each(function(){
            var $this = $(this),
                 val = parseFloat($this.val().replace(/[^0-9]/g, '')),
                 id = $this.attr('id').replace(/ginput_quantity_/, '');

            if ( isNaN(val) || val === 0 ) {
                return;
            }

            var price = $this.siblings('[id^="ginput_base_price_"]').val(),
                 itemName = $this.siblings('.gform_hidden:first').val(),
                 itemDesc = $this.parents('.gfield').find('.gfield_description');
                 lineTotal = val * gformToNumber(price);

            total += lineTotal;

            // Does this product have any options?
            var $opts = $('.gfield_option_'+ id),
                lineHtml;
            if ( $opts.length ) {
                var $opt = $opts.find(':checked'),
                     valParts = $opt.val().split('|'),
                     optName = valParts[0],
                     optPrice = gformToNumber(valParts[1]) * val;

                     lineHtml = ''+
                            '<li class="'+ $this.parents('.gfield').attr('class') +'">' +
                                '<div class="quote-row">' +
                                    '<div class="qty label">'+ val +'</div>' +
                                    '<div class="item">'+ itemName +'<br /><span>'+ itemDesc.html() +'</span></div>' +
                                '</div>' +
                                '<div class="quote-row">' +
                                    '<div class="qty">'+ val +'</div>' +
                                    '<div class="item option">'+ optName +'</div>' +
                                '</div>' +
                            '</li>';

                total += optPrice;
            }
            else {
                lineHtml = ''+
                            '<li class="'+ $this.parents('.gfield').attr('class') +'">' +
                                '<div class="quote-row">' +
                                    '<div class="qty label">'+ val +'</div>' +
                                    '<div class="item">'+ itemName +'<br /><span>'+ itemDesc.html() +'</span></div>' +
                                '</div>' +
                            '</li>';
            }

            html += lineHtml;
        });

        $summary.prepend(html);
    } // populateConfirmation

    function rethinkStripDecimal( price ) {
        price = price.replace(new RegExp('\\.00$'), '');
        price = price.replace(new RegExp(',00$'), '');
        return price;
    }

    function rr_getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // load video modal from query string
    $(window).load(function(){
        var videoParam = rr_getParameterByName( 'video' );
        if( videoParam.length ) {
            $('a[href*="' + videoParam + '"]').first().trigger('click');
        }
    });

    function rr_isChinese() {
      if( 'zh-cn' == $('html').attr('lang') ) {
        return true;
      }
      return false;
    }

    App.dropownOpen = function( trigger ) {
        trigger.attr('aria-expanded', 'true')
                .closest('.dropdown')
                .addClass('is-open')
                .find('.dropdown__menu')
                .attr('aria-hidden', 'false')
                .find('a')
                .attr('tabindex', 0)
                .first()
                .focus();
    };

    App.dropownClose = function( trigger ) {
        trigger.attr('aria-expanded', 'false')
                .closest('.dropdown')
                .removeClass('is-open')
                .find('.dropdown__menu')
                .attr('aria-hidden', 'true')
                .find('a')
                .attr('tabindex', -1);
        trigger.focus();
    };

    App.initDropdowns = function() {
        var $menuTrigger = $('.dropdown__trigger'),
            $menuLinks = $menuTrigger.closest('.dropdown').find('.dropdown__menu a');

        $menuTrigger.on('keydown', function(e){
                if( 13 == e.keyCode || 32 == e.keyCode ) { // Return / Space
                    e.preventDefault();
                    App.dropownOpen( $(this) );
                }
                else
                if( e.keyCode == 27 ) { // Escape
                    e.preventDefault();
                    App.dropownClose( $(this) );
                }
        }).on('click', function(e){
            e.preventDefault();
            if( $(this).closest('.dropdown').hasClass('is-open') ) {
                App.dropownClose( $(this) );
            }
            else {
                App.dropownOpen( $(this) );
            }
        });

        $menuLinks.on('keydown', function(e){
            if( e.keyCode == 27 ) { // Escape
                e.preventDefault();
                App.dropownClose( $menuTrigger );
            }
        });

        $('.dropdown__menu a').on('click', function(e){
            var $trigger = $(this).closest( '.dropdown' ).find( '.dropdown__trigger' );
            App.dropownClose( $trigger );
        });
    };


    //***************************************************************************
    //
    //***************************************************************************
    $(function() {
        $('.gform_wrapper').siblings().addClass('noprint');

        // Quantity + and - buttons
        $('.ginput_quantity').before('<a class="btn-plus-minus minus" href="javascript:;" />').after('<a class="btn-plus-minus plus" href="javascript:;" />');

        $('.btn-plus-minus.minus').on('click', function(e){
            e.preventDefault();
            var $this = $(this),
                 $input = $this.next('input'),
                 val = parseFloat($input.val().replace(/[^0-9]/g, ''));

            if ( isNaN(val) ) val = 0;

            if ( val > 0 ) {
                $input.val(val-1);
            }
        });

        $('.btn-plus-minus.plus').on('click', function(e){
            e.preventDefault();
            var $this = $(this),
                 $input = $this.prev('input'),
                 val = parseFloat($input.val().replace(/[^0-9]/g, ''));

            if ( isNaN(val) )
                val = 0;

            $input.val(val+1);
        });


        if ( $('.quote-form').length > 0 && $('[name^="gform_target_page_number_"]').val() != '2' ) {
            populateConfirmation();
        }

        $('.ginput_product_price').each(function(){
            var price = rethinkStripDecimal( $(this).text() );
            $(this).text(price);
        });


        App.initDropdowns();

        // Small screen menu toggle
        $('.nav-menu-toggle').on('click', function(e) {
         e.preventDefault();

         var $self = $(this),
             $body = $('body'),
             targetId = $self.attr('aria-controls'),
             $targetZone = $('#' + targetId);

         if( $body.hasClass('nav-is-active') ) {
           $body.removeClass('nav-is-active');
           $targetZone.attr('aria-expanded', 'false');
         } else {
           $body.addClass('nav-is-active');
           $targetZone.attr('aria-expanded', 'true').focus();
         }
        }); // nav-menu-toggle

        $('.js-video-categories .dropdown__menu a').on('click', function(e){
            e.preventDefault();
            $('.video-wrapper').addClass( 'is-hidden' );
            $( $(this).attr('href') ).removeClass( 'is-hidden' );

            if(history.pushState) {
                history.pushState(null, null, $(this).attr('href'));
            }
            else {
                location.hash = '#myhash';
            }
        });

        $('.js-all-videos').on('click', function(e){
            e.preventDefault();
            $('.video-wrapper').removeClass( 'is-hidden' );
            location.hash = '';

            if( $('.subnav .dropdown').hasClass( 'is-open' ) ) {
                App.dropownClose( $('.subnav .dropdown').find('.dropdown__trigger') );
            }
        });

        var urlHash = window.location.hash;
        if( urlHash ) {
            if (urlHash.match("^#video-")) {
                $('.video-wrapper').addClass( 'is-hidden' );
                $( urlHash ).removeClass( 'is-hidden' );
            }
        }
    });

    App.Video = (function (options) {
      'use strict';

      var self = {},
      $module = options.$el,
      onPlayerReady,
      onPlayerStateChange;

      self.initialize = function () {

        if( rr_isChinese() ) {
            $module.find('.button-play').on('click', function (e) {
              e.preventDefault();
              var videoURL = $(this).attr('href');
              if( videoURL && videoURL.indexOf('youku.com') >= 0 ) {
                $('#modal-video .video').remove();
            $('#modal-video').append('<iframe class="video" height="360" width="640" src="' + videoURL + '" frameborder=0 allowfullscreen></iframe>');
            App.globalVideoModal.open();
              }
            });

        $('#modal-video').on('click', '.remodal-close', function(e) {
              e.preventDefault();
              $('#modal-video').find('iframe.video').attr('src', '');
              App.globalVideoModal.close();
            });
            return;
        } // if rr_isChinese

        if (App.allowBgVideo) {
          App.pageVideoPlayer = new YT.Player($module.find('.m-content-video')[0], {
            playerVars: App.playerOptions,
            videoId: $module.data('bgVideo'),
            events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange
            }
          });

          $module.find('.button-play').on('click', function (e) {
            e.preventDefault();

            if (typeof App.pageVideoPlayer !== 'undefined') {
              App.pageVideoPlayer.pauseVideo();
            }

            if (App.allowBgVideo && $module.hasClass('lg-full')) {
              $module.addClass('is-playing-video');
              // Unmute for fg videos
              //App.pageVideoPlayer.unMute();
              App.pageVideoPlayer.loadVideoById({
                videoId: $module.data('contentVideo'),
                startSeconds: 0
              });
            }
          });

          $module.find('.button-close').on('click', function (e) {
            e.preventDefault();
            $module.removeClass('is-playing-video');
            // Mute again on close for bg videos
            //App.pageVideoPlayer.mute();
            App.pageVideoPlayer.loadVideoById({
              videoId: $module.data('bgVideo'),
              startSeconds: 0
            });
          });
        }
      };

      onPlayerReady = function (event) {
        // Mute play for bg videos
        //App.pageVideoPlayer.mute();
      };

      onPlayerStateChange = function (event) {
        if (event.data === 0) {
          $module.find('.button-close').trigger('click');
        }
      };

      return self;
    });

    //***************************************************************************
    // Tabs Module
    //***************************************************************************
    //$('.tab-module').find( '> ul');
    var $tabNav = $('.tab-nav');
    if( $tabNav.length ) {
        $tabNav.find( 'a' ).each(function() {
            $(this).attr({
                'aria-controls' : $(this).attr('href').substring(1),
                'role'          : 'tab',
                'tabindex'      : '-1'
            });
        });

        $tabNav.find( 'li:first-child a' ).attr({
            'aria-selected' : 'true',
            'tabindex' : '0'
        });
    }

    // Make first child of each panel focusable programmatically
    $('[role="tabpanel"] > *:first-child').attr({'tabindex' : '0'});

    // Make all but the first section hidden (ARIA state and display CSS)
    $('[role="tabpanel"]:not(:first-of-type)').attr({'aria-hidden' : 'true'});

    // Change focus between tabs with arrow keys
    $('[role="tab"]').on('keydown', function(e) {
        var $original = $(this),
            $prev = $original.parents('li').prev().children('[role="tab"]'),
            $next = $original.parents('li').next().children('[role="tab"]'),
            $target;

        // find the direction (prev or next)
        switch (e.keyCode) {
            case 37: $target = $prev; break;
            case 39: $target = $next; break;
            default: $target = false; break;
        }

        if( $target.length ) {
            $original.attr({
                'aria-selected' : null,
                'tabindex'      : '-1'
            });

            $target.attr({
                'aria-selected' : true,
                'tabindex'      : '0'
            }).focus();
        }

        // Hide panels
        $('[role="tabpanel"]').attr('aria-hidden', 'true');

        // Show panel which corresponds to target
        $('#' + $(document.activeElement).attr('href').substring(1)).attr('aria-hidden', null);
    });


    // Handle click on tab to show + focus tabpanel
    $('[role="tab"]').on('click', function(e) {
        e.preventDefault();

        $('[role="tab"]').attr({
            'aria-selected' : null,
            'tabindex'      : '-1'
        });

        $(this).attr({
            'aria-selected' : true,
            'tabindex'      : '0'
        });

        $('[role="tabpanel"]').attr('aria-hidden', 'true');
        $('#' + $(this).attr('href').substring(1)).attr('aria-hidden', null);
    });

    // Slick carousel
    if( $('.slider').length ) {
        $('.slider').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

})(jQuery);
