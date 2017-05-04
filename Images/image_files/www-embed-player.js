(function(){var l;function aa(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ca="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function da(a,b){if(b){for(var c=ca,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
da("String.prototype.startsWith",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");var b=this+"";a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),h=0;h<f&&g<e;)if(b[g++]!=a[h++])return!1;return h>=f}});
da("Reflect.apply",function(a){if(a)return a;var b=Function.prototype.apply;return function(a,d,e){return b.call(a,d,e)}});
da("Reflect.construct",function(a){return a?a:function(a,c,d){void 0===d&&(d=a);d=Object.create(d.prototype||Object.prototype);return Reflect.apply(a,d,c)||d}});
var n=this;function p(a){return void 0!==a}
function q(a,b,c){a=a.split(".");c=c||n;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&p(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
function r(a,b){for(var c=a.split("."),d=b||n,e;e=c.shift();)if(null!=d[e])d=d[e];else return null;return d}
function t(){}
function ea(a){a.ma=void 0;a.getInstance=function(){return a.ma?a.ma:a.ma=new a}}
function fa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ia(a){return"array"==fa(a)}
function ja(a){var b=fa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function u(a){return"string"==typeof a}
function ka(a){return"function"==fa(a)}
function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ma="closure_uid_"+(1E9*Math.random()>>>0),na=0;function oa(a,b,c){return a.call.apply(a.bind,arguments)}
function pa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function v(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v=oa:v=pa;return v.apply(null,arguments)}
function qa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var w=Date.now||function(){return+new Date};
function x(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ob=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var ra=document,y=window;function z(a){if(Error.captureStackTrace)Error.captureStackTrace(this,z);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
x(z,Error);z.prototype.name="CustomError";var sa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ua(a,b){return a<b?-1:a>b?1:0}
function va(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var wa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(u(a))return u(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=u(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},xa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=u(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e};
function ya(a,b){a:{var c=a.length;for(var d=u(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:u(a)?a.charAt(c):a[c]}
function za(a,b){var c=wa(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Aa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ba(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ca(a,b){this.b=p(a)?a:0;this.f=p(b)?b:0}
Ca.prototype.equals=function(a){return a instanceof Ca&&(this==a?!0:this&&a?this.b==a.b&&this.f==a.f:!1)};
Ca.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
Ca.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
Ca.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};function Da(a,b){this.width=a;this.height=b}
l=Da.prototype;l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ea(a){var b=Fa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ga(){var a=C,b;for(b in a)return!1;return!0}
function Ha(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Ia(a){var b={},c;for(c in a)b[c]=a[c];return b}
var Ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ka(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ja.length;f++)c=Ja[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function La(a){La[" "](a);return a}
La[" "]=t;function Ma(a,b){var c=Na;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;function Oa(){var a=Pa;try{var b;if(b=!!a&&null!=a.location.href)a:{try{La(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
;var Qa=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});
n.addEventListener("test",null,b)}catch(c){}return a}();var Ra=!1,Sa="";function Ta(a){a=a.match(/[\d]+/g);if(!a)return"";a.length=3;return a.join(".")}
(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(Ra=!0,a.description)){Sa=Ta(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){Ra=!0;Sa="2.0.0.11";return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],Ra=!(!a||!a.enabledPlugin))){Sa=Ta(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");Ra=!0;Sa=Ta(b.GetVariable("$version"));
return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");Ra=!0;Sa="6.0.21";return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),Ra=!0,Sa=Ta(b.GetVariable("$version"))}catch(c){}})();
var Ua=Ra,Va=Sa;var D;a:{var Wa=n.navigator;if(Wa){var Xa=Wa.userAgent;if(Xa){D=Xa;break a}}D=""}function E(a){return-1!=D.indexOf(a)}
;function Ya(){return(E("Chrome")||E("CriOS"))&&!E("Edge")}
;function Za(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;var $a=E("Opera"),F=E("Trident")||E("MSIE"),ab=E("Edge"),bb=E("Gecko")&&!(-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),cb=-1!=D.toLowerCase().indexOf("webkit")&&!E("Edge"),db=E("Macintosh"),eb=E("Windows"),fb=E("Android"),gb=Za(),hb=E("iPad"),ib=E("iPod");function jb(){var a=n.document;return a?a.documentMode:void 0}
var kb;a:{var lb="",mb=function(){var a=D;if(bb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ab)return/Edge\/([\d\.]+)/.exec(a);if(F)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(cb)return/WebKit\/(\S+)/.exec(a);if($a)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
mb&&(lb=mb?mb[1]:"");if(F){var nb=jb();if(null!=nb&&nb>parseFloat(lb)){kb=String(nb);break a}}kb=lb}var ob=kb,Na={};
function I(a){return Ma(a,function(){for(var b=0,c=sa(String(ob)).split("."),d=sa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=ua(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||ua(0==g[2].length,0==h[2].length)||ua(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var pb;var qb=n.document;pb=qb&&F?jb()||("CSS1Compat"==qb.compatMode?parseInt(ob,10):5):void 0;(function(){if(eb){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(D))?a[1]:"0"}return db?(a=/10[_.][0-9_.]+/,(a=a.exec(D))?a[0].replace(/_/g,"."):"10"):fb?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(D))?a[1]:""):gb||hb||ib?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(D))?a[1].replace(/_/g,"."):""):""})();var rb=E("Firefox"),sb=Za()||E("iPod"),tb=E("iPad"),ub=E("Android")&&!(Ya()||E("Firefox")||E("Opera")||E("Silk")),vb=Ya(),wb=E("Safari")&&!(Ya()||E("Coast")||E("Opera")||E("Edge")||E("Silk")||E("Android"))&&!(Za()||E("iPad")||E("iPod"));function xb(a){return(a=a.exec(D))?a[1]:""}
(function(){if(rb)return xb(/Firefox\/([0-9.]+)/);if(F||ab||$a)return ob;if(vb)return Za()||E("iPad")||E("iPod")?xb(/CriOS\/([0-9.]+)/):xb(/Chrome\/([0-9.]+)/);if(wb&&!(Za()||E("iPad")||E("iPod")))return xb(/Version\/([0-9.]+)/);if(sb||tb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(D);if(a)return a[1]+"."+a[2]}else if(ub)return(a=xb(/Android\s+([0-9.]+)/))?a:xb(/Version\/([0-9.]+)/);return""})();!bb&&!F||F&&9<=Number(pb)||bb&&I("1.9.1");F&&I("9");function yb(){this.b="";this.f=zb}
yb.prototype.la=!0;yb.prototype.ka=function(){return this.b};
var zb={};function Ab(){this.b="";this.f=Bb}
Ab.prototype.la=!0;Ab.prototype.ka=function(){return this.b};
function Cb(a){return a instanceof Ab&&a.constructor===Ab&&a.f===Bb?a.b:"type_error:SafeUrl"}
var Db=/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;function Eb(a){if(a instanceof Ab)return a;a=a.la?a.ka():String(a);Db.test(a)||(a="about:invalid#zClosurez");return Fb(a)}
var Bb={};function Fb(a){var b=new Ab;b.b=a;return b}
Fb("about:blank");function Gb(){this.b=""}
Gb.prototype.la=!0;Gb.prototype.ka=function(){return this.b};
function Hb(a){var b=new Gb;b.b=a;return b}
Hb("<!DOCTYPE html>");Hb("");Hb("<br>");function Ib(a,b){var c=b instanceof Ab?b:Eb(b);a.href=Cb(c)}
;function Jb(a){var b=document;return u(a)?b.getElementById(a):a}
function Kb(a){if(!a)return null;if(a.firstChild)return a.firstChild;for(;a&&!a.nextSibling;)a=a.parentNode;return a?a.nextSibling:null}
function Lb(a){if(!a)return null;if(!a.previousSibling)return a.parentNode;for(a=a.previousSibling;a&&a.lastChild;)a=a.lastChild;return a}
function Mb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Nb(a){Ob();var b=new yb;b.b=a;return b}
var Ob=t;function Pb(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Qb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(Qb)}
function Rb(a){return a?decodeURI(a):a}
function Sb(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Tb(a,b,c){if(ia(b))for(var d=0;d<b.length;d++)Tb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Ub(a,b){for(var c in b)Tb(c,b[c],a);return a}
;var Vb=!!window.google_async_iframe_id,Pa=Vb&&window.parent||window;function Wb(a,b){var c=Xb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random()}
;function Yb(a,b){this.events=[];this.f=b||n;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.events=b.google_js_reporting_queue,c=b.b);this.b=null!=c?c:Math.random()<a}
Yb.prototype.g=function(a){var b=this.f.performance;a&&b&&b.clearMarks&&(b.clearMarks("goog_"+a.uniqueId+"_start"),b.clearMarks("goog_"+a.uniqueId+"_end"))};
Yb.prototype.start=function(a,b){if(!this.b)return null;var c=new Wb(a,b),d=this.f.performance;d&&d.mark&&d.mark("goog_"+c.uniqueId+"_start");return c};
Yb.prototype.end=function(a){if(this.b){a.duration=Xb()-a.value;var b=this.f.performance;b&&b.mark&&b.mark("goog_"+a.uniqueId+"_end");this.b&&this.events.push(a)}};
function Xb(){var a=n.performance;return a&&a.now?a.now():w()}
;var Zb;if(Vb&&!Oa()){var $b="."+ra.domain;try{for(;2<$b.split(".").length&&!Oa();)ra.domain=$b=$b.substr($b.indexOf(".")+1),Pa=window.parent}catch(a){}Oa()||(Pa=window)}Zb=Pa;var ac=new Yb(1,Zb);function bc(){Zb.b||(A(ac.events,ac.g,ac),ac.events.length=0,ac.b=!1)}
if("complete"==Zb.document.readyState)bc();else if(ac.b){var cc=function(){bc()};
Zb.addEventListener?Zb.addEventListener("load",cc,Qa?void 0:!1):Zb.attachEvent&&Zb.attachEvent("onload",cc)};var dc=(new Date).getTime();function ec(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a)throw Error("Invalid URI scheme in origin");var c="",d=b.indexOf(":");if(-1!=d){var e=b.substring(d+
1),b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var fc=window,gc=document,hc=fc.location;function ic(){}
var jc=/\[native code\]/;function K(a,b,c){return a[b]=a[b]||c}
function kc(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}
function lc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function L(){var a;if((a=Object.create)&&jc.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var mc=K(fc,"gapi",{});var M;M=K(fc,"___jsl",L());K(M,"I",0);K(M,"hel",10);function nc(){var a=hc.href;if(M.dpo)var b=M.h;else{b=M.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function oc(a){var b=K(M,"PQ",[]);M.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function pc(a){return K(K(M,"H",L()),a,L())}
;function qc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;B=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];for(var d=e[1],f=e[2],h=e[3],k=e[4],m,G,c=0;80>c;c++)40>c?20>c?(m=h^d&(f^h),G=1518500249):(m=d^f^h,G=1859775393):60>c?(m=d&f|h&(d|f),G=2400959708):(m=d^f^h,G=3395469782),m=((a<<5|a>>>27)&4294967295)+m+k+G+b[c]&4294967295,k=h,h=f,f=(d<<30|d>>>2)&4294967295,d=a,a=m;e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=e[2]+f&4294967295;
e[3]=e[3]+h&4294967295;e[4]=e[4]+k&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,B+=64;for(;d<c;)if(f[m++]=a[d++],B++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,B+=64}
function d(){var a=[],d=8*B;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var k=24;0<=k;k-=8)a[d++]=e[g]>>k&255;return a}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,B;a();return{reset:a,update:c,digest:d,Fa:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function rc(a,b,c){var d=[],e=[];if(1==(ia(c)?2:1))return e=[b,a],A(d,function(a){e.push(a)}),sc(e.join(" "));
var f=[],g=[];A(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];A(d,function(a){e.push(a)});
a=sc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function sc(a){var b=qc();b.update(a);return b.Fa().toLowerCase()}
;function tc(a){this.b=a||{cookie:""}}
l=tc.prototype;l.isEnabled=function(){return navigator.cookieEnabled};
l.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');p(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(w()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
l.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=sa(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=p(this.get(a));this.set(a,"",0,b,c);return d};
l.isEmpty=function(){return!this.b.cookie};
l.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=sa(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var uc=new tc("undefined"==typeof document?null:document);uc.f=3950;function vc(){var a=[],b=ec(String(n.location.href)),c=n.__OVERRIDE_SID;null==c&&(c=(new tc(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,null==b&&(b=(new tc(document)).get(c?"SAPISID":"APISID")),b)){var c=c?"SAPISIDHASH":"APISIDHASH",d=String(n.location.href);return d&&b&&c?[c,rc(ec(d),b,a||null)].join(" "):null}return null}
;var wc=K(M,"perf",L());K(wc,"g",L());var yc=K(wc,"i",L());K(wc,"r",[]);L();L();function zc(a,b,c){b&&0<b.length&&(b=Ac(b),c&&0<c.length&&(b+="___"+Ac(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=K(yc,"_p",L()),K(b,c,L())[a]=(new Date).getTime(),b=wc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Ac(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Bc=L(),Cc=[];function O(a){throw Error("Bad hint"+(a?": "+a:""));}
Cc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?M[b]=K(M,b,[]).concat(c):K(M,b,c)}if(b=a.u)a=K(M,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Dc=/^(\/[a-zA-Z0-9_\-]+)+$/,Ec=[/\/amp\//,/\/amp$/,/^\/amp$/],Fc=/^[a-zA-Z0-9\-_\.,!]+$/,Gc=/^gapi\.loaded_[0-9]+$/,Hc=/^[a-zA-Z0-9,._-]+$/;function Ic(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Bc[f],h=null;g?h=g(e,b,c,d):O("no hint processor for: "+f);h||O("failed to generate load url");b=h;c=b.match(Jc);(d=b.match(Kc))&&1===d.length&&Lc.test(b)&&c&&1===c.length||O("failed sanity: "+a);return h}
function Mc(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=Nc(a);Gc.test(c)||O("invalid_callback");b=Oc(b);d=d&&d.length?Oc(d):null;return[encodeURIComponent(a.Za).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.qa?"/am="+e(a.qa):"",a.ya?"/rs="+e(a.ya):"",a.Ba?"/t="+e(a.Ba):"","/cb=",e(c)].join("")}
function Nc(a){"/"!==a.charAt(0)&&O("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))O("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Dc.test(b)||O("invalid_prefix");c=0;for(d=Ec.length;c<d;++c)Ec[c].test(b)&&O("invalid_prefix");c=Pc(a,
"k",!0);d=Pc(a,"am");e=Pc(a,"rs");a=Pc(a,"t");return{Za:b,version:c,qa:d,ya:e,Ba:a}}
function Oc(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Hc.test(e)&&b.push(e)}return b.join(",")}
function Pc(a,b,c){a=a[b];!a&&c&&O("missing: "+b);if(a){if(Fc.test(a))return a;O("invalid: "+b)}return null}
var Lc=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Kc=/\/cb=/g,Jc=/\/\//g;function Qc(){var a=nc();if(!a)throw Error("Bad hint");return a}
Bc.m=function(a,b,c,d){(a=a[0])||O("missing_hint");return"https://apis.google.com"+Mc(a,b,c,d)};
var Rc=decodeURI("%73cript"),Sc=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Tc(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>kc.call(b,e)&&c.push(e)}return c}
function Uc(){var a=M.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(Sc)?a:M.nonce=null;var b=K(M,"us",[]);if(!b||!b.length)return M.nonce=null;for(var c=gc.getElementsByTagName(Rc),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(Sc))return M.nonce=a}}return null}
function Vc(a){if("loading"!=gc.readyState)Wc(a);else{var b=Uc(),c="";null!==b&&(c=' nonce="'+b+'"');gc.write("<"+Rc+' src="'+encodeURI(a)+'"'+c+"></"+Rc+">")}}
function Wc(a){var b=gc.createElement(Rc);b.setAttribute("src",a);a=Uc();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=gc.getElementsByTagName(Rc)[0])?a.parentNode.insertBefore(b,a):(gc.head||gc.body||gc.documentElement).appendChild(b)}
function Xc(a,b){var c=b&&b._c;if(c)for(var d=0;d<Cc.length;d++){var e=Cc[d][0],f=Cc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Yc(a,b,c){Zc(function(){var c=b===nc()?K(mc,"_",L()):L();c=K(pc(b),"_",c);a(c)},c)}
function $c(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Xc(a,c);var d=a?a.split(":"):[],e=c.h||Qc(),f=K(M,"ah",L());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,m=g.length&&g[g.length-1]||null,B=m;m&&m.hint==k||(B={hint:k,features:[]},g.push(B));B.features.push(h)}var G=g.length;if(1<G){var N=c.callback;N&&(c.callback=function(){0==--G&&N()})}for(;d=g.shift();)ad(d.features,c,d.hint)}else ad(d||[],c,e)}
function ad(a,b,c){function d(a,b){if(G)return 0;fc.clearTimeout(B);N.push.apply(N,H);var d=((mc||{}).config||{}).update;d?d(f):f&&K(M,"cu",[]).push(f);if(b){zc("me0",a,ta);try{Yc(b,c,m)}finally{zc("me1",a,ta)}}return 1}
a=lc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,m=void 0;"function"==typeof k&&(m=k);var B=null,G=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=K(pc(c),"r",[]).sort(),N=K(pc(c),"L",[]).sort(),ta=[].concat(k);0<g&&(B=fc.setTimeout(function(){G=!0;h()},g));
var H=Tc(a,N);if(H.length){var H=Tc(a,k),ga=K(M,"CP",[]),ha=ga.length;ga[ha]=function(a){function b(){var a=ga[ha+1];a&&a()}
function c(b){ga[ha]=null;d(H,a)&&oc(function(){e&&e();b()})}
if(!a)return 0;zc("ml1",H,ta);0<ha&&ga[ha-1]?ga[ha]=function(){c(b)}:c(b)};
if(H.length){var xc="loaded_"+M.I++;mc[xc]=function(a){ga[ha](a);mc[xc]=null};
a=Ic(c,H,"gapi."+xc,k);k.push.apply(k,H);zc("ml0",H,ta);b.sync||fc.___gapisync?Vc(a):Wc(a)}else ga[ha](ic)}else d(H)&&e&&e()}
function Zc(a,b){if(M.hee&&0<M.hel)try{return a()}catch(c){b&&b(c),M.hel--,$c("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
mc.load=function(a,b){return Zc(function(){return $c(a,b)})};function bd(a,b,c){this.i=c;this.g=a;this.j=b;this.f=0;this.b=null}
bd.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function cd(a,b){a.j(b);a.f<a.i&&(a.f++,b.next=a.b,a.b=b)}
;function dd(a){n.setTimeout(function(){throw a;},0)}
var ed;
function fd(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=v(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(p(c.next)){c=c.next;var a=c.sa;c.sa=null;a()}};
return function(a){d.next={sa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){n.setTimeout(a,0)}}
;function gd(){this.f=this.b=null}
var id=new bd(function(){return new hd},function(a){a.reset()},100);
gd.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function hd(){this.next=this.scope=this.b=null}
hd.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
hd.prototype.reset=function(){this.next=this.scope=this.b=null};function jd(a,b){kd||ld();md||(kd(),md=!0);var c=nd,d=id.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var kd;function ld(){if(-1!=String(n.Promise).indexOf("[native code]")){var a=n.Promise.resolve(void 0);kd=function(){a.then(od)}}else kd=function(){var a=od;
!ka(n.setImmediate)||n.Window&&n.Window.prototype&&!E("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(ed||(ed=fd()),ed(a)):n.setImmediate(a)}}
var md=!1,nd=new gd;function od(){for(var a;a=nd.remove();){try{a.b.call(a.scope)}catch(b){dd(b)}cd(id,a)}md=!1}
;function P(){this.f=this.f;this.F=this.F}
P.prototype.f=!1;P.prototype.dispose=function(){this.f||(this.f=!0,this.o())};
function pd(a,b){a.f?p(void 0)?b.call(void 0):b():(a.F||(a.F=[]),a.F.push(p(void 0)?v(b,void 0):b))}
P.prototype.o=function(){if(this.F)for(;this.F.length;)this.F.shift()()};
function qd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function rd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];ja(d)?rd.apply(null,d):qd(d)}}
;var sd="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function td(){}
td.prototype.next=function(){throw sd;};
td.prototype.ca=function(){return this};
function ud(a){if(a instanceof td)return a;if("function"==typeof a.ca)return a.ca(!1);if(ja(a)){var b=0,c=new td;c.next=function(){for(;;){if(b>=a.length)throw sd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function vd(a,b){if(ja(a))try{A(a,b,void 0)}catch(c){if(c!==sd)throw c;}else{a=ud(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==sd)throw c;}}}
function wd(a){if(ja(a))return Aa(a);a=ud(a);var b=[];vd(a,function(a){b.push(a)});
return b}
;F&&I("9");!cb||I("528");bb&&I("1.9b")||F&&I("8")||$a&&I("9.5")||cb&&I("528");bb&&!I("8")||F&&I("9");function xd(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))}
function yd(a){a=String(a);if(xd(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}
function zd(a){var b=[];Ad(new Bd,a,b);return b.join("")}
function Bd(){}
function Ad(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ia(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ad(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Cd(d,c),c.push(":"),Ad(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Cd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Dd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ed=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function Cd(a,b){b.push('"',a.replace(Ed,function(a){var b=Dd[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Dd[a]=b);return b}),'"')}
;function Fd(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}
;function Q(a,b){this.b=0;this.w=void 0;this.i=this.f=this.g=null;this.j=this.l=!1;if(a!=t)try{var c=this;a.call(b,function(a){Gd(c,2,a)},function(a){Gd(c,3,a)})}catch(d){Gd(this,3,d)}}
function Hd(){this.next=this.context=this.f=this.g=this.b=null;this.i=!1}
Hd.prototype.reset=function(){this.context=this.f=this.g=this.b=null;this.i=!1};
var Id=new bd(function(){return new Hd},function(a){a.reset()},100);
function Jd(a,b,c){var d=Id.get();d.g=a;d.f=b;d.context=c;return d}
function Kd(a){if(a instanceof Q)return a;var b=new Q(t);Gd(b,2,a);return b}
function Ld(a){return new Q(function(b,c){c(a)})}
Q.prototype.then=function(a,b,c){return Md(this,ka(a)?a:null,ka(b)?b:null,c)};
Fd(Q);Q.prototype.cancel=function(a){0==this.b&&jd(function(){var b=new Nd(a);Od(this,b)},this)};
function Od(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.i||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?Od(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Pd(c),Qd(c,e,3,b)))}a.g=null}else Gd(a,3,b)}
function Rd(a,b){a.f||2!=a.b&&3!=a.b||Sd(a);a.i?a.i.next=b:a.f=b;a.i=b}
function Md(a,b,c,d){var e=Jd(null,null,null);e.b=new Q(function(a,g){e.g=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!p(e)&&b instanceof Nd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Rd(a,e);return e.b}
Q.prototype.C=function(a){this.b=0;Gd(this,2,a)};
Q.prototype.F=function(a){this.b=0;Gd(this,3,a)};
function Gd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.C,f=a.F;if(d instanceof Q){Rd(d,Jd(e||t,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(la(d))try{var k=d.then;if(ka(k)){Td(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.w=c,a.b=b,a.g=null,Sd(a),3!=b||c instanceof Nd||Ud(a,c))}}
function Td(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Sd(a){a.l||(a.l=!0,jd(a.B,a))}
function Pd(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.i=null);return b}
Q.prototype.B=function(){for(var a;a=Pd(this);)Qd(this,a,this.b,this.w);this.l=!1};
function Qd(a,b,c,d){if(3==c&&b.f&&!b.i)for(;a&&a.j;a=a.g)a.j=!1;if(b.b)b.b.g=null,Vd(b,c,d);else try{b.i?b.g.call(b.context):Vd(b,c,d)}catch(e){Wd.call(null,e)}cd(Id,b)}
function Vd(a,b,c){2==b?a.g.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Ud(a,b){a.j=!0;jd(function(){a.j&&Wd.call(null,b)})}
var Wd=dd;function Nd(a){z.call(this,a)}
x(Nd,z);Nd.prototype.name="cancel";function R(a){P.call(this);this.l=1;this.i=[];this.j=0;this.b=[];this.g={};this.w=!!a}
x(R,P);l=R.prototype;l.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.l;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.l=e+3;d.push(e);return e};
function Xd(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=ya(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.K(b)}}
l.K=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.j?(this.i.push(a),this.b[a+1]=t):(c&&za(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
l.V=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.w)for(e=0;e<c.length;e++){var g=c[e];Yd(this.b[g+1],this.b[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;g=this.i.pop();)this.K(g)}}return 0!=e}return!1};
function Yd(a,b,c){jd(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.g[a];b&&(A(b,this.K,this),delete this.g[a])}else this.b.length=0,this.g={}};
l.o=function(){R.A.o.call(this);this.clear();this.i.length=0};function Zd(a){this.b=a}
Zd.prototype.set=function(a,b){p(b)?this.b.set(a,zd(b)):this.b.remove(a)};
Zd.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return yd(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Zd.prototype.remove=function(a){this.b.remove(a)};function $d(a){this.b=a}
x($d,Zd);function ae(a){this.data=a}
function be(a){return!p(a)||a instanceof ae?a:new ae(a)}
$d.prototype.set=function(a,b){$d.A.set.call(this,a,be(b))};
$d.prototype.f=function(a){a=$d.A.get.call(this,a);if(!p(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
$d.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!p(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ce(a){this.b=a}
x(ce,$d);ce.prototype.set=function(a,b,c){if(b=be(b)){if(c){if(c<w()){ce.prototype.remove.call(this,a);return}b.expiration=c}b.creation=w()}ce.A.set.call(this,a,b)};
ce.prototype.f=function(a,b){var c=ce.A.f.call(this,a);if(c){var d;if(d=!b){d=c.creation;var e=c.expiration;d=!!e&&e<w()||!!d&&d>w()}if(d)ce.prototype.remove.call(this,a);else return c}};function de(a){this.b=a}
x(de,ce);function ee(){}
;function fe(){}
x(fe,ee);fe.prototype.clear=function(){var a=wd(this.ca(!0)),b=this;A(a,function(a){b.remove(a)})};function ge(a){this.b=a}
x(ge,fe);l=ge.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!u(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.ca=function(a){var b=0,c=this.b,d=new td;d.next=function(){if(b>=c.length)throw sd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!u(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function he(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
x(he,ge);function ie(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
x(ie,ge);var je=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()},ke="Microsoft Internet Explorer"==navigator.appName;
function le(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
;var me=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};q("yt.config_",me,void 0);function S(a){le(me,arguments)}
function T(a,b){return a in me?me[a]:b}
;function U(a){return T("EXPERIMENT_FLAGS",{})[a]}
;var ne={};function oe(a){return ne[a]||(ne[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function pe(a,b){return a?a.dataset?a.dataset[oe(b)]:a.getAttribute("data-"+b):null}
function qe(a){a&&(a.dataset?a.dataset[oe("loaded")]="true":a.setAttribute("data-loaded","true"))}
;function V(a,b){var c=r("yt.logging.errors.log");c?c(a,b,void 0,void 0,void 0):(c=T("ERRORS",[]),c.push([a,b,void 0,void 0,void 0]),S("ERRORS",c))}
function re(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){V(b)}}:a}
;function W(a,b){ka(a)&&(a=re(a));return window.setTimeout(a,b)}
;var se=r("ytPubsubPubsubInstance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.K;R.prototype.publish=R.prototype.V;R.prototype.clear=R.prototype.clear;q("ytPubsubPubsubInstance",se,void 0);var te=r("ytPubsubPubsubSubscribedKeys")||{};q("ytPubsubPubsubSubscribedKeys",te,void 0);var ue=r("ytPubsubPubsubTopicToKeys")||{};q("ytPubsubPubsubTopicToKeys",ue,void 0);var ve=r("ytPubsubPubsubIsSynchronous")||{};q("ytPubsubPubsubIsSynchronous",ve,void 0);
function we(a,b){var c=xe();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){te[d]&&b.apply(window,c)};
try{ve[a]?f():W(f,0)}catch(g){V(g)}},void 0);
te[d]=!0;ue[a]||(ue[a]=[]);ue[a].push(d);return d}return 0}
function xe(){return r("ytPubsubPubsubInstance")}
function ye(a){ue[a]&&(a=ue[a],A(a,function(a){te[a]&&delete te[a]}),a.length=0)}
function ze(a){var b=xe();if(b)if(b.clear(a),a)ye(a);else for(var c in ue)ye(c)}
function Ae(a,b){var c=xe();c&&c.publish.apply(c,arguments)}
function Be(a){var b=xe();b&&("number"==typeof a?a=[a]:u(a)&&(a=[parseInt(a,10)]),A(a,function(a){b.unsubscribeByKey(a);delete te[a]}))}
;var Ce=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,De=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Ee(a,b){var c=Fe(a),d=document.getElementById(c),e=d&&pe(d,"loaded"),f=d&&!e;if(e)b&&b();else{if(b){var e=we(c,b),g=""+(b[ma]||(b[ma]=++na));Ge[g]=e}f||(d=He(a,c,function(){pe(d,"loaded")||(qe(d),Ae(c),W(qa(ze,c),0))}))}}
function He(a,b,c){var d=document.createElement("script");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
d.onreadystatechange=function(){switch(d.readyState){case "loaded":case "complete":d.onload()}};
d.src=a;a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(d,a.firstChild);return d}
function Ie(a,b){if(a&&b){var c=""+(b[ma]||(b[ma]=++na));(c=Ge[c])&&Be(c)}}
function Fe(a){var b=document.createElement("a");Ib(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+va(a)}
var Ge={};function Je(a,b){if(window.spf){var c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ce,""),c=c.replace(De,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Ee(a,b)}
;var Ke=null;function Le(){var a=T("BG_I",null),b=T("BG_IU",null),c=T("BG_P",void 0);b?Je(b,function(){Me(c)}):a&&(eval(a),Me(c))}
function Me(a){Ke=new botguard.bg(a);U("botguard_periodic_refresh")?je():U("botguard_always_refresh")}
function Ne(){return null!=Ke}
function Oe(){return Ke?Ke.invoke():null}
;w();var Pe=p(XMLHttpRequest)?function(){return new XMLHttpRequest}:p(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Qe(){if(!Pe)return null;var a=Pe();return"open"in a?a:null}
function Re(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Se(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?ia(b[f])?Ba(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Te(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Se(d[1]||""),e;for(e in b)d[e]=b[e];return Sb(Ub([a],d))+c}
function Ue(a){a=Ub([],a);a[0]="";return a.join("")}
;var Ve={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};
function We(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=J(a)[1]||null,e=Rb(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Rb(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;for(var f in Ve){if((e=d=T(Ve[f]))&&!(e=c)){var g=a,e=f,h=T("CORS_HEADER_WHITELIST")||{};e=(g=Rb(J(g)[3]||null))?(h=h[g])?0<=wa(h,e):!1:!0}e&&(b[f]=d)}return b}
function Xe(a,b){var c=T("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.qb&&(!Rb(J(a)[3]||null)||b.withCredentials||Rb(J(a)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.D&&b.D[c])}
function Ye(a,b){var c=b.format||"JSON";b.Ka&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=T("XSRF_FIELD_NAME",void 0),e=T("XSRF_TOKEN",void 0),f=b.kb;f&&(f[d]&&delete f[d],a=Te(a,f||{}));var g=b.postBody||"",f=b.D;Xe(a,b)&&(f||(f={}),f[d]=e);f&&u(g)&&(d=Se(g),Ka(d,f),g=b.wa&&"JSON"==b.wa?JSON.stringify(d):Ue(d));var h=!1,k,m=Ze(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d=Re(a),e=null;if(d||400<=a.status&&
500>a.status)e=$e(c,a,b.pb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||n;d?b.J&&b.J.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.Qa&&b.Qa.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.O&&0<b.timeout&&(k=W(function(){h||(h=!0,m.abort(),window.clearTimeout(k),b.O.call(b.context||n,m))},b.timeout))}
function $e(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?af(b):null)d={},A(b.getElementsByTagName("*"),function(a){d[a.tagName]=bf(a)})}c&&cf(d);
return d}
function cf(a){if(la(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Hb(a[b]);a[c]=d}else cf(a[b])}}
function af(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function bf(a){var b="";A(a.childNodes,function(a){b+=a.nodeValue});
return b}
function df(a,b){b.method="POST";b.D||(b.D={});Ye(a,b)}
function Ze(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&re(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Qe();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=We(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var ef={},ff=0;function gf(a,b){a&&(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?Ze(a,b):hf(a,b))}
function hf(a,b){var c=new Image,d=""+ff++;ef[d]=c;c.onload=c.onerror=function(){b&&ef[d]&&b();delete ef[d]};
c.src=a}
;function jf(a,b,c,d,e){c={name:c||T("INNERTUBE_CONTEXT_CLIENT_NAME",1),version:d||T("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0)};e=window&&window.yterr||e||!1;if(a&&e&&!(5<=kf)){e=a.stacktrace;d=a.columnNumber;var f=r("window.location.href");if(u(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:f,stack:"Not available"};else{var g=!1;try{var h=a.lineNumber||a.line||"Not available"}catch(G){h="Not available",g=!0}try{var k=a.fileName||a.filename||a.sourceURL||n.$googDebugFname||
f}catch(G){k="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:k,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(d)||(h=h+":"+d);if(!(lf[a.message]||0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){k=a.fileName;b={kb:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b||"ERROR"},D:{url:T("PAGE_NAME",
window.location.href),file:k},method:"POST"};e&&(b.D.stack=e);for(var m in c)b.D["client."+m]=c[m];if(m=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var B in m)b.D[B]=m[B];Ye("/error_204",b);lf[a.message]=!0;kf++}}}
var lf={},kf=0;var mf=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};q("yt.msgs_",mf,void 0);function nf(a){le(mf,arguments)}
;function of(a,b){var c=5E3;isNaN(c)&&(c=void 0);var d=r("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):W(a,c||0)}
;var pf=[],qf=!1;function rf(){function a(){qf=!0;"google_ad_status"in window?S("DCLKSTAT",1):S("DCLKSTAT",2)}
Je("//static.doubleclick.net/instream/ad_status.js",a);pf.push(of(function(){qf||"google_ad_status"in window||(Ie("//static.doubleclick.net/instream/ad_status.js",a),S("DCLKSTAT",3))},1))}
function sf(){return parseInt(T("DCLKSTAT",0),10)}
;var tf=0,uf=r("ytDomDomGetNextId")||function(){return++tf};
q("ytDomDomGetNextId",uf,void 0);var vf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function wf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in vf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
wf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
wf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
wf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Fa=r("ytEventsEventsListeners")||{};q("ytEventsEventsListeners",Fa,void 0);var xf=r("ytEventsEventsCounter")||{count:0};q("ytEventsEventsCounter",xf,void 0);function yf(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Ea(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function zf(a,b,c){var d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=yf(a,b,c,d);if(e)return e;var e=++xf.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new wf(d);if(!Mb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new wf(b);
b.currentTarget=a;return c.call(a,b)};
g=re(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Fa[e]=[a,b,c,g,d];return e}
function Af(a){a&&("string"==typeof a&&(a=[a]),A(a,function(a){if(a in Fa){var b=Fa[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Fa[a]}}))}
;function Bf(){if(null==r("_lact",window)){var a=parseInt(T("LACT"),10),a=isFinite(a)?w()-Math.max(a,0):-1;q("_lact",a,window);q("_fact",a,window);-1==a&&Cf();zf(document,"keydown",Cf);zf(document,"keyup",Cf);zf(document,"mousedown",Cf);zf(document,"mouseup",Cf);we("page-mouse",Cf);we("page-scroll",Cf);we("page-resize",Cf)}}
function Cf(){null==r("_lact",window)&&(Bf(),r("_lact",window));var a=w();q("_lact",a,window);-1==r("_fact",window)&&q("_fact",a,window);Ae("USER_ACTIVE")}
function Df(){var a=r("_lact",window);return null==a?-1:Math.max(w()-a,0)}
var Ef=Cf;function Ff(a,b,c,d){this.f=a;this.i=b;this.g=c;this.b=d}
var Gf=1;function Hf(a){var b={};void 0!==a.f?b.trackingParams=a.f:(b.veType=a.i,null!=a.g&&(b.veCounter=a.g));void 0!==a.b&&(b.dataElement=Hf(a.b));return b}
;var If={log_event:"events",log_interaction:"interactions"},Jf={},Kf={},Lf=0,C=r("ytLoggingTransportLogPayloadsQueue_")||{};q("ytLoggingTransportLogPayloadsQueue_",C,void 0);var Mf=r("ytLoggingTransportTokensToCttTargetIds_")||{};q("ytLoggingTransportTokensToCttTargetIds_",Mf,void 0);
function Nf(a,b){Kf[a.endpoint]=b;if(a.da){var c=a.da;var d={};c.videoId?d.videoId=c.videoId:c.playlistId&&(d.playlistId=c.playlistId);Mf[a.da.token]=d;c=Of(a.endpoint,a.da.token)}else c=Of(a.endpoint);c.push(a.va);d=Number(U("web_logging_max_batch")||0)||20;c.length>=d?Pf():Qf()}
function Pf(){window.clearTimeout(Lf);if(!Ga()){for(var a in C){var b=Jf[a];if(!b){var c=Kf[a];if(!c)continue;b=new c;Jf[a]=b}var c=void 0,d=a,e=If[d];for(c in C[d]){var f=b.f();f[e]=Of(d,c);f.requestTimeMs=Math.round(je());var g=Mf[c];if(g)a:{var h=f,k=c;if(g.videoId)var m="VIDEO";else if(g.playlistId)m="PLAYLIST";else break a;h.credentialTransferTokenTargetId=g;h.context=h.context||{};h.context.user=h.context.user||{};h.context.user.credentialTransferTokens=[{token:k,scope:m}]}delete Mf[c];b.g(d,
f,{})}delete C[a]}Ga()||Qf()}}
function Qf(){window.clearTimeout(Lf);Lf=W(Pf,T("LOGGING_BATCH_TIMEOUT",1E4))}
function Of(a,b){b||(b="");C[a]=C[a]||{};C[a][b]=C[a][b]||[];return C[a][b]}
;function Rf(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||je());f[a]=b;f.context={lastActivityMs:String(Df())};Nf({endpoint:"log_event",va:f,da:e},c)}
;function Sf(a,b,c,d){Tf(a,{attachChild:{csn:b,parentVisualElement:Hf(c),visualElements:[Hf(d)]}},void 0)}
function Uf(a,b,c){c=xa(c,function(a){return Hf(a)});
Tf(a,{visibilityUpdate:{csn:b,visualElements:c}})}
function Tf(a,b,c){b.eventTimeMs=Math.round(je());b.lactMs=Df();c&&(b.clientData=Vf(c));Nf({endpoint:"log_interaction",va:b},a)}
function Vf(a){var b={};a.analyticsChannelData&&(b.analyticsDatas=xa(a.analyticsChannelData,function(a){return{tabName:a.tabName,cardName:a.cardName,isChannelScreen:a.isChannelScreen,insightId:a.insightId,externalChannelId:a.externalChannelId,externalContentOwnerId:a.externalContentOwnerId}}));
return{playbackData:{clientPlaybackNonce:a.clientPlaybackNonce},analyticsChannelData:b,externalLinkData:a.externalLinkData}}
;function Wf(){if(!Xf&&!Yf||!window.JSON)return null;try{var a=Xf.get("yt-player-two-stage-token")}catch(b){}if(!u(a))try{a=Yf.get("yt-player-two-stage-token")}catch(b){}if(!u(a))return null;try{a=JSON.parse(a,void 0)}catch(b){}return a}
var Yf,Zf=new he;Yf=Zf.isAvailable()?new de(Zf):null;var Xf,$f=new ie;Xf=$f.isAvailable()?new de($f):null;function ag(){var a=T("ROOT_VE_TYPE",void 0);return a?new Ff(void 0,a,void 0):null}
function bg(){var a=T("client-screen-nonce",void 0);a||(a=T("EVENT_ID",void 0));return a}
;function cg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=T("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){var d=a,e=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=Rb(J(window.location.href)[3]||null);f&&e.push(f);f=Rb(J(d)[3]||null);if(0<=wa(e,f)||!f&&0==d.lastIndexOf("/",0))if(U("autoescape_tempdata_url")&&(e=document.createElement("a"),Ib(e,d),d=e.href),d){var f=J(d),d=f[5],e=f[6],f=f[7],g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
bg();d="ST-"+va(d).toString(36);e=b?Ue(b):"";uc.set(""+d,e,5,"/","youtube.com");b&&(b=b.itct||b.ved,d=r("yt.logging.screen.storeParentElement"),b&&d&&d(new Ff(b)))}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var h=void 0===h?{}:h;var k=void 0===k?"":k;var m=void 0===m?window:m;c=m.location;a=Sb(Ub([a],h))+k;a=a instanceof Ab?a:Eb(a);c.href=Cb(a)}return!0}
;var dg=r("yt.abuse.botguardInitialized")||Ne;q("yt.abuse.botguardInitialized",dg,void 0);var eg=r("yt.abuse.invokeBotguard")||Oe;q("yt.abuse.invokeBotguard",eg,void 0);var fg=r("yt.abuse.dclkstatus.checkDclkStatus")||sf;q("yt.abuse.dclkstatus.checkDclkStatus",fg,void 0);var gg=r("yt.player.exports.navigate")||cg;q("yt.player.exports.navigate",gg,void 0);var hg=r("yt.util.activity.init")||Bf;q("yt.util.activity.init",hg,void 0);var ig=r("yt.util.activity.getTimeSinceActive")||Df;
q("yt.util.activity.getTimeSinceActive",ig,void 0);var jg=r("yt.util.activity.setTimestamp")||Ef;q("yt.util.activity.setTimestamp",jg,void 0);function kg(a){a={client:{hl:a.Na,gl:a.Ma,clientName:a.La,clientVersion:a.innertubeContextClientVersion}};T("DELEGATED_SESSION_ID")&&(a.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});return a}
function lg(){return{apiaryHost:T("APIARY_HOST",void 0),Da:T("APIARY_HOST_FIRSTPARTY",void 0),gapiHintOverride:!!T("GAPI_HINT_OVERRIDE",void 0),gapiHintParams:T("GAPI_HINT_PARAMS",void 0),innertubeApiKey:T("INNERTUBE_API_KEY",void 0),innertubeApiVersion:T("INNERTUBE_API_VERSION",void 0),La:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Na:T("INNERTUBE_CONTEXT_HL",void 0),Ma:T("INNERTUBE_CONTEXT_GL",void 0),xhrApiaryHost:T("XHR_APIARY_HOST",
void 0)||"",Oa:T("INNERTUBE_HOST_OVERRIDE",void 0)||""}}
function mg(a,b,c){c.context&&c.context.capabilities&&(c=c.context.capabilities,c.snapshot||c.golden)&&(a="vix");return"/youtubei/"+a+"/"+b}
;function ng(a){this.b=a||lg();og||(og=pg(this.b))}
function pg(a){return(new Q(function(b){try{var c={gapiHintOverride:a.gapiHintOverride,_c:{jsl:{h:a.gapiHintParams}},callback:b},d=ka(c)?{callback:c}:c||{};d._c&&d._c.jsl&&d._c.jsl.h||Ka(d,{_c:{jsl:{h:T("GAPI_HINT_PARAMS",void 0)}}});if(d.gapiHintOverride||T("GAPI_HINT_OVERRIDE")){var e=document.location.href;if(-1!=e.indexOf("?")){var e=(e||"").split("#")[0],f=e.split("?",2);var g=Se(1<f.length?f[1]:f[0])}else g={};var h=g.gapi_jsh;h&&Ka(d,{_c:{jsl:{h:h}}})}$c("client",d)}catch(k){V(k)}})).then(function(){})}
ng.prototype.i=function(){var a=r("gapi.config.update");a("googleapis.config/auth/useFirstPartyAuth",!0);a("googleapis.config/auth/useFirstPartyAuthV2",!0);var b=this.b.apiaryHost;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root",(-1==b.indexOf("://")?"//":"")+b);b=this.b.Da;/^[\s\xa0]*$/.test(null==b?"":String(b))||a("googleapis.config/root-1p",(-1==b.indexOf("://")?"//":"")+b);b=T("SESSION_INDEX");a("googleapis.config/sessionIndex",b);r("gapi.client.setApiKey")(this.b.innertubeApiKey)};
ng.prototype.f=function(){return{context:kg(this.b)}};
ng.prototype.g=function(a,b,c){var d,e=!1;0<c.timeout&&(d=W(function(){e||(e=!0,c.O&&c.O())},c.timeout));
qg(this,a,b,function(a){if(!e)if(e=!0,d&&window.clearTimeout(d),a)c.J&&c.J(a);else if(c.onError)c.onError()})};
function qg(a,b,c,d){var e={path:mg(a.b.innertubeApiVersion,b,c),headers:{"X-Goog-Visitor-Id":T("VISITOR_DATA")},method:"POST",body:zd(c)},f=v(a.i,a);og.then(function(){f();r("gapi.client.request")(e).execute(d||t)})}
var og=null;function rg(a){this.b=a||lg()}
rg.prototype.f=function(){return{context:kg(this.b)}};
rg.prototype.g=function(a,b,c){T("VISITOR_DATA")||V(Error("Missing VISITOR_DATA when sending innertube request."));var d={headers:{"Content-Type":"application/json","X-Goog-Visitor-Id":T("VISITOR_DATA","")},D:b,wa:"JSON",O:c.O,J:function(a,b){c.J&&c.J(b)},
onError:function(a,b){if(c.onError)c.onError(b)},
timeout:c.timeout,withCredentials:!0},e=vc();e&&(d.headers.Authorization=e,d.headers["X-Goog-AuthUser"]=T("SESSION_INDEX",0));var f=this.b.xhrApiaryHost;f&&!f.startsWith("http")&&(f="//"+f);if(U("youtubei_for_web")||U("unplugged_web_same_op_domain"))f="";var g=this.b.Oa;g&&(f=g);e&&!f&&(d.headers["x-origin"]=window.location.origin);df(""+f+mg(this.b.innertubeApiVersion,a,b)+"?alt=json&key="+this.b.innertubeApiKey,d)};function sg(){return U("enable_youtubei_innertube")?rg:ng}
;function tg(a){a=a||{};this.url=a.url||"";this.urlV9As2=a.url_v9as2||"";this.args=a.args||Ia(ug);this.assets=a.assets||{};this.attrs=a.attrs||Ia(vg);this.params=a.params||Ia(wg);this.minVersion=a.min_version||"8.0.0";this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var ug={enablejsapi:1},vg={},wg={allowscriptaccess:"always",allowfullscreen:"true",bgcolor:"#000000"};function xg(a){a instanceof tg||(a=new tg(a));return a}
function yg(a){var b=new tg,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];b[c]="object"==fa(d)?Ia(d):d}return b}
;function zg(){this.g=this.f=this.b=0;this.i="";var a=r("window.navigator.plugins"),b=r("window.navigator.mimeTypes"),a=a&&a["Shockwave Flash"],b=b&&b["application/x-shockwave-flash"],b=a&&b&&b.enabledPlugin&&a.description||"";if(a=b){var c=a.indexOf("Shockwave Flash");0<=c&&(a=a.substr(c+15));for(var c=a.split(" "),d="",a="",e=0,f=c.length;e<f;e++)if(d)if(a)break;else a=c[e];else d=c[e];d=d.split(".");c=parseInt(d[0],10)||0;d=parseInt(d[1],10)||0;e=0;if("r"==a.charAt(0)||"d"==a.charAt(0))e=parseInt(a.substr(1),
10)||0;a=[c,d,e]}else a=[0,0,0];this.i=b;b=a;this.b=b[0];this.f=b[1];this.g=b[2];if(0>=this.b){if(ke)try{var g=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(B){g=null}else{var h=document.body;var k=document.createElement("object");k.setAttribute("type","application/x-shockwave-flash");g=h.appendChild(k)}if(g&&"GetVariable"in g)try{var m=g.GetVariable("$version")}catch(B){m=""}h&&k&&h.removeChild(k);(g=m||"")?(g=g.split(" ")[1].split(","),g=[parseInt(g[0],10)||0,parseInt(g[1],10)||0,parseInt(g[2],
10)||0]):g=[0,0,0];this.b=g[0];this.f=g[1];this.g=g[2]}}
ea(zg);function Ag(a,b,c,d){b="string"==typeof b?b.split("."):[b,c,d];b[0]=parseInt(b[0],10)||0;b[1]=parseInt(b[1],10)||0;b[2]=parseInt(b[2],10)||0;return a.b>b[0]||a.b==b[0]&&a.f>b[1]||a.b==b[0]&&a.f==b[1]&&a.g>=b[2]}
;var Bg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Cg(a){if(window.spf){var b=a.match(Bg);spf.style.load(a,b?b[1]:"",void 0)}else Dg(a)}
function Dg(a){var b=Eg(a),c=document.getElementById(b),d=c&&pe(c,"loaded");d||c&&!d||(c=Fg(a,b,function(){pe(c,"loaded")||(qe(c),Ae(b),W(qa(ze,b),0))}))}
function Fg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Nb(a);d.rel="stylesheet";d.href=a instanceof yb&&a.constructor===yb&&a.f===zb?a.b:"type_error:TrustedResourceUrl";(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Eg(a){var b=document.createElement("a");Ib(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+va(a)}
;var X={},Gg=(X["api.invalidparam"]=2,X.auth=150,X["drm.auth"]=150,X["heartbeat.net"]=150,X["heartbeat.servererror"]=150,X["heartbeat.stop"]=150,X["html5.unsupportedads"]=5,X["fmt.noneavailable"]=5,X["fmt.decode"]=5,X["fmt.unplayable"]=5,X["html5.missingapi"]=5,X["html5.unsupportedlive"]=5,X["drm.unavailable"]=5,X);var Hg;var Ig=D,Ig=Ig.toLowerCase();if(-1!=Ig.indexOf("android")){var Jg=Ig.match(/android\D*(\d\.\d)[^\;|\)]*[\;\)]/);if(Jg)Hg=Number(Jg[1]);else{var Kg={cupcake:1.5,donut:1.6,eclair:2,froyo:2.2,gingerbread:2.3,honeycomb:3,"ice cream sandwich":4,jellybean:4.1,kitkat:4.4,lollipop:5.1,marshmallow:6,nougat:7.1},Lg=[],Mg=0,Ng;for(Ng in Kg)Lg[Mg++]=Ng;var Og=Ig.match("("+Lg.join("|")+")");Hg=Og?Kg[Og[0]]:0}}else Hg=void 0;var Pg=['video/mp4; codecs="avc1.42001E, mp4a.40.2"','video/webm; codecs="vp8.0, vorbis"'],Qg=['audio/mp4; codecs="mp4a.40.2"'];var Rg;var Sg=D,Tg=Sg.match(/\((iPad|iPhone|iPod)( Simulator)?;/);if(!Tg||2>Tg.length)Rg=void 0;else{var Ug=Sg.match(/\((iPad|iPhone|iPod)( Simulator)?; (U; )?CPU (iPhone )?OS (\d+_\d)[_ ]/);Rg=Ug&&6==Ug.length?Number(Ug[5].replace("_",".")):0}0<=Rg&&0<=D.search("Safari")&&D.search("Version");function Vg(a){P.call(this);this.b=[];this.g=a||this}
x(Vg,P);function Wg(a,b,c,d){d=re(v(d,a.g));d={target:b,name:c,ra:d};b.addEventListener(c,d.ra,void 0);a.b.push(d)}
function Xg(a){for(;a.b.length;){var b=a.b.pop();b.target.removeEventListener(b.name,b.ra)}}
Vg.prototype.o=function(){Xg(this);Vg.A.o.call(this)};var Yg=r("ytLoggingLatencyUsageStats_")||{};q("ytLoggingLatencyUsageStats_",Yg,void 0);var Zg=0;function $g(a){Yg[a]=Yg[a]||{count:0};var b=Yg[a];b.count++;b.time=je();Zg||(Zg=of(ah,0));return 10<b.count?(11==b.count&&jf(Error("CSI data exceeded logging limit with key: "+a)),!0):!1}
function ah(){var a=je(),b;for(b in Yg)6E4<a-Yg[b].time&&delete Yg[b];Zg=0}
;function bh(a,b){this.version=a;this.args=b}
;function ch(a){this.topic=a}
ch.prototype.toString=function(){return this.topic};var dh=r("ytPubsub2Pubsub2Instance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.K;R.prototype.publish=R.prototype.V;R.prototype.clear=R.prototype.clear;q("ytPubsub2Pubsub2Instance",dh,void 0);var eh=r("ytPubsub2Pubsub2SubscribedKeys")||{};q("ytPubsub2Pubsub2SubscribedKeys",eh,void 0);var fh=r("ytPubsub2Pubsub2TopicToKeys")||{};q("ytPubsub2Pubsub2TopicToKeys",fh,void 0);var gh=r("ytPubsub2Pubsub2IsAsync")||{};q("ytPubsub2Pubsub2IsAsync",gh,void 0);
q("ytPubsub2Pubsub2SkipSubKey",null,void 0);function hh(a){var b=ih,c=r("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,b.toString(),b,a)}
;var Y=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function jh(a,b){bh.call(this,1,arguments)}
x(jh,bh);var ih=new ch("timing-sent");var kh=w().toString();var lh={vc:!0},mh={ad_at:"adType",cpn:"clientPlaybackNonce",csn:"clientScreenNonce",is_nav:"isNavigation",yt_lt:"loadType",yt_ad:"isMonetized",yt_ad_pr:"prerollAllowed",yt_red:"isRedSubscriber",yt_vis:"isVisible",docid:"videoId",plid:"videoId",fmt:"playerInfo.itag"},nh="ap c cver ei yt_fss yt_li".split(" "),oh=["isNavigation","isMonetized","prerollAllowed","isRedSubscriber","isVisible"];
function ph(a){if("_"!=a[0]){var b=a;Y.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),Y.mark(b))}var b=qh(),c=je();b[a]&&(b["_"+a]=b["_"+a]||[b[a]],b["_"+a].push(c));b[a]=c;rh()["tick_"+a]=void 0;je();U("csi_on_gel")?(b=sh(),"_start"==a?$g("baseline_"+b)||Rf("latencyActionBaselined",{clientActionNonce:b},rg,void 0):$g("tick_"+a+"_"+b)||Rf("latencyActionTicked",{tickName:a,clientActionNonce:b},rg,void 0),a=!0):a=!1;if(a=!a)a=!r("yt.timing.pingSent_");if(a&&(b=T("TIMING_ACTION",void 0),a=qh(),r("ytglobal.timingready_")&&
b&&a._start&&th())){b=!0;c=T("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&uh()}}
function vh(){var a=wh().info.yt_lt="hot_bg";rh().info_yt_lt=a;if(U("csi_on_gel"))if("yt_lt"in mh){var b={},c=mh.yt_lt.split(".");0<=wa(oh,c)&&(a=!!a);for(var d=b,e=0;e<c.length-1;e++)d[c[e]]=d[c[e]]||{},d=d[c[e]];b[c[c.length-1]]=a;a=sh();c=Object.keys(b).join("");$g("info_"+c+"_"+a)||(b.clientActionNonce=a,Rf("latencyActionInfo",b,rg))}else 0<=wa(nh,"yt_lt")||V(Error("Unknown label yt_lt logged with GEL CSI."))}
function th(){var a=qh();if(a.aft)return a.aft;for(var b=T("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function uh(){if(!U("csi_on_gel")){var a=qh(),b=wh().info,c=a._start,d;for(d in a)if(0==d.lastIndexOf("_",0)&&ia(a[d])){var e=d.slice(1);if(e in lh){var f=xa(a[d],function(a){return Math.round(a-c)});
b["all_"+e]=f.join()}delete a[d]}e=!!b.ap;if(f=r("ytglobal.timingReportbuilder_")){if(f=f(a,b,void 0))xh(f,e),yh(),zh(),Ah(!1,void 0),T("TIMING_ACTION")&&S("PREVIOUS_ACTION",T("TIMING_ACTION")),S("TIMING_ACTION","")}else{var g=T("CSI_SERVICE_NAME","youtube");f={v:2,s:g,action:T("TIMING_ACTION",void 0)};var h=b.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var k=window.location.protocol+r("ytplayer.config.assets.js");(k=Y.getEntriesByName?Y.getEntriesByName(k)[0]:null)?b.h5jse=Math.round(b.h5jse-k.responseEnd):
delete b.h5jse}a.aft=th();Bh()&&"youtube"==g&&(vh(),g=a.vc,k=a.pbs,delete a.aft,b.aft=Math.round(k-g));for(var m in b)"_"!=m.charAt(0)&&(f[m]=b[m]);a.ps=je();b={};m=[];for(d in a)"_"!=d.charAt(0)&&(g=Math.round(a[d]-c),b[d]=g,m.push(d+"."+g));f.rt=m.join(",");(a=r("ytdebug.logTiming"))&&a(f,b);xh(f,e,void 0);hh(new jh(b.aft+(h||0),void 0))}}}
var zh=v(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||t,Y);
function xh(a,b,c){if(U("debug_csi_data")){var d=r("yt.timing.csiData");d||(d=[],q("yt.timing.csiData",d,void 0));d.push({page:location.href,time:new Date,args:a})}var d="",e;for(e in a)d+="&"+e+"="+a[e];a="/csi_204?"+d.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b)try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")||gf(a,void 0)}catch(f){gf(a,void 0)}else gf(a);Ah(!0,c)}
function sh(){var a=wh().nonce;if(!a){a:{if(window.crypto&&window.crypto.getRandomValues)try{var b=Array(16),c=new Uint8Array(16);window.crypto.getRandomValues(c);for(a=0;a<b.length;a++)b[a]=c[a];var d=b;break a}catch(e){}d=Array(16);for(b=0;16>b;b++){c=w();for(a=0;a<c%23;a++)d[b]=Math.random();d[b]=Math.floor(256*Math.random())}if(kh)for(b=1,c=0;c<kh.length;c++)d[b%16]=d[b%16]^d[(b-1)%16]/4^kh.charCodeAt(c),b++}b=[];for(c=0;c<d.length;c++)b.push("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt(d[c]&
63));a=b.join("");wh().nonce=a}return a}
function qh(){return wh().tick}
function rh(){var a=wh();"gel"in a||(a.gel={});return a.gel}
function wh(){return r("ytcsi.data_")||yh()}
function yh(){var a={tick:{},info:{}};q("ytcsi.data_",a,void 0);return a}
function Ah(a,b){q("yt.timing."+(b||"")+"pingSent_",a,void 0)}
function Bh(){var a=qh(),b=a.pbr,c=a.vc,a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==wh().info.yt_pvis}
;function Ch(a,b){P.call(this);this.w=this.l=a;this.T=b;this.C=!1;this.g={};this.Z=this.S=null;this.U=new R;pd(this,qa(qd,this.U));this.j={};this.L=this.aa=this.i=this.ha=this.b=null;this.W=!1;this.M=this.B=this.H=this.R=null;this.ba={};this.Ca=["onReady"];this.X=new Vg(this);pd(this,qa(qd,this.X));this.fa=null;this.oa=NaN;this.Y={};Dh(this);this.G("onDetailedError",v(this.Ta,this));this.G("onTabOrderChange",v(this.Ea,this));this.G("onTabAnnounce",v(this.pa,this));this.G("WATCH_LATER_VIDEO_ADDED",
v(this.Ua,this));this.G("WATCH_LATER_VIDEO_REMOVED",v(this.Va,this));rb||(this.G("onMouseWheelCapture",v(this.Ra,this)),this.G("onMouseWheelRelease",v(this.Sa,this)));this.G("onAdAnnounce",v(this.pa,this));this.N=new Vg(this);pd(this,qa(qd,this.N));this.ga=!1;this.ea=null}
x(Ch,P);var Eh=["drm.unavailable","fmt.noneavailable","html5.missingapi","html5.unsupportedads","html5.unsupportedlive"];l=Ch.prototype;l.na=function(a,b){this.f||(Fh(this,a),Gh(this,b),this.C&&Hh(this))};
function Fh(a,b){a.ha=b;a.b=yg(b);a.i=a.b.attrs.id||a.i;"video-player"==a.i&&(a.i=a.T,a.b.attrs.id=a.T);a.w.id==a.i&&(a.i+="-player",a.b.attrs.id=a.i);a.b.args.enablejsapi="1";a.b.args.playerapiid=a.T;a.aa||(a.aa=Ih(a,a.b.args.jsapicallback||"onYouTubePlayerReady"));a.b.args.jsapicallback=null;var c=a.b.attrs.width;c&&(a.w.style.width=Pb(Number(c)||c));if(c=a.b.attrs.height)a.w.style.height=Pb(Number(c)||c)}
l.Ha=function(){return this.ha};
function Hh(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.g.loadVideoByPlayerVars(a.b.args):a.g.cueVideoByPlayerVars(a.b.args))}
function Jh(a){if(!p(a.b.disable.flash)){var b=a.b.disable;var c=Ag(zg.getInstance(),a.b.minVersion);b.flash=!c}return!a.b.disable.flash}
function Kh(a,b){var c;(c=!b)||(c=5!=(Gg[b.errorCode]||5)?!1:(c=a.b&&a.b.args&&a.b.args.fflags)&&0<=c.indexOf("web_player_disable_flash_fallback=true")?!1:-1!=Eh.indexOf(b.errorCode));if(c&&Jh(a)){(c=Lh(a))&&c.stopVideo&&c.stopVideo();var d=a.b;c&&c.getUpdatedConfigurationData&&(c=c.getUpdatedConfigurationData(),d=xg(c));d.args.autoplay=1;d.args.html5_unavailable="1";Fh(a,d);Gh(a,"flash")}}
function Gh(a,b){if(!a.f){if(!b){var c;if(!(c=!a.b.html5&&Jh(a))){if(!p(a.b.disable.html5)){c=!0;void 0!=a.b.args.deviceHasDisplay&&(c=a.b.args.deviceHasDisplay);if(2.2==Hg)var d=!0;else{a:{var e=c;c=r("yt.player.utils.videoElement_");c||(c=document.createElement("VIDEO"),q("yt.player.utils.videoElement_",c,void 0));try{if(c.canPlayType)for(var e=e?Pg:Qg,f=0;f<e.length;f++)if(c.canPlayType(e[f])){d=null;break a}d="fmt.noneavailable"}catch(g){d="html5.missingapi"}}d=!d}d&&(d=Mh(a)||a.b.assets.js);
a.b.disable.html5=!d;d||(a.b.args.html5_unavailable="1")}c=!!a.b.disable.html5}b=c?Jh(a)?"flash":"unsupported":"html5"}("flash"==b?a.lb:a.mb).call(a)}}
function Mh(a){var b=!0,c=Lh(a);c&&a.b&&(a=a.b,b=pe(c,"version")==a.assets.js);return b&&!!r("yt.player.Application.create")}
l.mb=function(){if(!this.W){var a=Mh(this);if(a&&"html5"==Nh(this))this.L="html5",this.C||this.P();else if(Oh(this),this.L="html5",a&&this.H)this.l.appendChild(this.H),this.P();else{this.b.loaded=!0;var b=!1;this.R=v(function(){b=!0;var a=this.l,d=yg(this.b);r("yt.player.Application.create")(a,d);this.P()},this);
this.W=!0;a?this.R():(Je(this.b.assets.js,this.R),Cg(this.b.assets.css),Ph(this)&&!b&&q("yt.player.Application.create",null,void 0))}}};
l.lb=function(){var a=yg(this.b);if(!this.B){var b=Lh(this);b&&(this.B=document.createElement("SPAN"),this.B.tabIndex=0,Wg(this.X,this.B,"focus",this.ta),this.M=document.createElement("SPAN"),this.M.tabIndex=0,Wg(this.X,this.M,"focus",this.ta),b.parentNode&&b.parentNode.insertBefore(this.B,b),b.parentNode&&b.parentNode.insertBefore(this.M,b.nextSibling))}a.attrs.width=a.attrs.width||"100%";a.attrs.height=a.attrs.height||"100%";if("flash"==Nh(this))this.L="flash",this.C||this.P();else{Oh(this);this.L=
"flash";this.b.loaded=!0;var b=zg.getInstance(),c=(-1<b.i.indexOf("Gnash")&&-1==b.i.indexOf("AVM2")||9==b.b&&1==b.f||9==b.b&&0==b.f&&1==b.g?0:9<=b.b)||-1<navigator.userAgent.indexOf("Sony/COM2")&&!Ag(b,9,1,58)?a.url:a.urlV9As2;window!=window.top&&document.referrer&&(a.args.framer=document.referrer.substring(0,128));b=this.l;if(c){var b=u(b)?Jb(b):b,d=Ia(a.attrs);d.tabindex=0;var e=Ia(a.params);e.flashvars=Ue(a.args);if(ke){d.classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";e.movie=c;var a=document.createElement("object");
for(g in d)a.setAttribute(g,d[g]);for(var f in e){var g=document.createElement("param");g.setAttribute("name",f);g.setAttribute("value",e[f]);a.appendChild(g)}}else{d.type="application/x-shockwave-flash";d.src=c;a=document.createElement("embed");a.setAttribute("name",d.id);for(var h in d)a.setAttribute(h,d[h]);for(var k in e)a.setAttribute(k,e[k])}f=document.createElement("div");f.appendChild(a);b.innerHTML=f.innerHTML}this.P()}};
l.ta=function(){Lh(this).focus()};
function Lh(a){var b=Jb(a.i);!b&&a.w&&a.w.querySelector&&(b=a.w.querySelector("#"+a.i));return b}
l.P=function(){if(!this.f){var a=Lh(this),b=!1;try{a&&a.getApiInterface&&a.getApiInterface()&&(b=!0)}catch(f){}if(b)if(this.W=!1,a.isNotServable&&a.isNotServable(this.b.args.video_id))Kh(this);else{Dh(this);this.C=!0;a=Lh(this);a.addEventListener&&(this.S=Qh(this,a,"addEventListener"));a.removeEventListener&&(this.Z=Qh(this,a,"removeEventListener"));for(var b=a.getApiInterface(),b=b.concat(a.getInternalApiInterface()),c=0;c<b.length;c++){var d=b[c];this.g[d]||(this.g[d]=Qh(this,a,d))}for(var e in this.j)this.S(e,
this.j[e]);Hh(this);this.aa&&this.aa(this.g);this.U.V("onReady",this.g)}else this.oa=W(v(this.P,this),50)}};
function Qh(a,b,c){var d=b[c];return function(){try{return a.fa=null,d.apply(b,arguments)}catch(e){"Bad NPObject as private data!"!=e.message&&"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.fa=e,V(e,"WARNING"))}}}
function Dh(a){a.C=!1;if(a.Z)for(var b in a.j)a.Z(b,a.j[b]);for(var c in a.Y)window.clearTimeout(parseInt(c,10));a.Y={};a.S=null;a.Z=null;for(var d in a.g)a.g[d]=null;a.g.addEventListener=v(a.G,a);a.g.removeEventListener=v(a.bb,a);a.g.destroy=v(a.dispose,a);a.g.getLastError=v(a.Ia,a);a.g.getPlayerType=v(a.Ja,a);a.g.getCurrentVideoConfig=v(a.Ha,a);a.g.loadNewVideoConfig=v(a.na,a);a.g.isReady=v(a.nb,a)}
l.nb=function(){return this.C};
l.G=function(a,b){if(!this.f){var c=Ih(this,b);if(c){if(!(0<=wa(this.Ca,a)||this.j[a])){var d=Rh(this,a);this.S&&this.S(a,d)}this.U.subscribe(a,c);"onReady"==a&&this.C&&W(qa(c,this.g),0)}}};
l.bb=function(a,b){if(!this.f){var c=Ih(this,b);c&&Xd(this.U,a,c)}};
function Ih(a,b){var c=b;if("string"==typeof b){if(a.ba[b])return a.ba[b];c=function(){var a=r(b);a&&a.apply(n,arguments)};
a.ba[b]=c}return c?c:null}
function Rh(a,b){var c="ytPlayer"+b+a.T;a.j[b]=c;n[c]=function(c){var d=W(function(){if(!a.f){a.U.V(b,c);var e=a.Y,g=String(d);g in e&&delete e[g]}},0);
Ha(a.Y,String(d))};
return c}
l.Ea=function(a){a=a?Lb:Kb;for(var b=a(document.activeElement);b&&(1!=b.nodeType||b==this.B||b==this.M||(b.focus(),b!=document.activeElement));)b=a(b)};
l.pa=function(a){Ae("a11y-announce",a)};
l.Ta=function(a){Kh(this,a)};
l.Ua=function(a){Ae("WATCH_LATER_VIDEO_ADDED",a)};
l.Va=function(a){Ae("WATCH_LATER_VIDEO_REMOVED",a)};
l.Ra=function(){if(!this.ga){if(vb){var a=document,b=a.scrollingElement?a.scrollingElement:cb||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;this.ea=F&&I("10")&&a.pageYOffset!=b.scrollTop?new Ca(b.scrollLeft,b.scrollTop):new Ca(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop);Wg(this.N,window,"scroll",this.Ya);Wg(this.N,this.l,"touchmove",this.Xa)}else Wg(this.N,this.l,"mousewheel",this.ua),Wg(this.N,this.l,"wheel",this.ua);this.ga=!0}};
l.Sa=function(){Xg(this.N);this.ga=!1};
l.ua=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
l.Ya=function(){window.scrollTo(this.ea.b,this.ea.f)};
l.Xa=function(a){a.preventDefault()};
l.Ja=function(){return this.L||Nh(this)};
l.Ia=function(){return this.fa};
function Nh(a){return(a=Lh(a))?"div"==a.tagName.toLowerCase()?"html5":"flash":null}
function Oh(a){ph("dcp");a.cancel();Dh(a);a.L=null;a.b&&(a.b.loaded=!1);var b=Lh(a);"html5"==Nh(a)?Mh(a)||!Ph(a)?a.H=b:(b&&b.destroy&&b.destroy(),a.H=null):b&&b.destroy&&b.destroy();for(var b=a.l,c;c=b.firstChild;)b.removeChild(c);Xg(a.X);a.B=null;a.M=null}
l.cancel=function(){this.R&&Ie(this.b.assets.js,this.R);window.clearTimeout(this.oa);this.W=!1};
l.o=function(){Oh(this);if(this.H&&this.b)try{this.H.destroy()}catch(b){V(b)}this.ba=null;for(var a in this.j)n[this.j[a]]=null;this.ha=this.b=this.g=null;delete this.l;delete this.w;Ch.A.o.call(this)};
function Ph(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var Sh={},Th="player_uid_"+(1E9*Math.random()>>>0);function Uh(a){var b="player",b=u(b)?Jb(b):b;a=xg(a);var c=Th+"_"+(b[ma]||(b[ma]=++na)),d=Sh[c];if(d)return d.na(a),d.g;d=new Ch(b,c);Sh[c]=d;Ae("player-added",d.g);pd(d,qa(Vh,d));W(function(){d.na(a)},0);
return d.g}
function Vh(a){Sh[a.T]=null}
;function Wh(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function Xh(a,b,c){u(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return Yh(a)}
function Yh(a,b,c){if(la(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Zh(a,b,c,d){if(la(a)&&!ia(a)){c="playlist list listType index startSeconds suggestedQuality".split(" ");b={};for(d=0;d<c.length;d++){var e=c[d];a[e]&&(b[e]=a[e])}return b}b={index:b,startSeconds:c,suggestedQuality:d};u(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function $h(a){var b=a.video_id||a.videoId;if(u(b)){var c=Wf()||{},d=Wf()||{};p(void 0)?d[b]=void 0:delete d[b];var e=w()+3E5,f=Yf;if(f&&window.JSON){u(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function ai(a){P.call(this);this.g=a;this.g.subscribe("command",this.xa,this);this.i={};this.j=!1}
x(ai,P);l=ai.prototype;l.start=function(){this.j||this.f||(this.j=!0,bi(this.g,"RECEIVING"))};
l.xa=function(a,b){if(this.j&&!this.f){var c=b||{};switch(a){case "addEventListener":if(u(c.event)&&(c=c.event,!(c in this.i))){var d=v(this.eb,this,c);this.i[c]=d;this.addEventListener(c,d)}break;case "removeEventListener":u(c.event)&&ci(this,c.event);break;default:this.b.isReady()&&this.b[a]&&(c=di(a,b||{}),c=this.b[a].apply(this.b,c),(c=ei(a,c))&&this.j&&!this.f&&bi(this.g,a,c))}}};
l.eb=function(a,b){this.j&&!this.f&&bi(this.g,a,this.ia(a,b))};
l.ia=function(a,b){if(null!=b)return{value:b}};
function ci(a,b){b in a.i&&(a.removeEventListener(b,a.i[b]),delete a.i[b])}
l.o=function(){var a=this.g;a.f||Xd(a.b,"command",this.xa,this);this.g=null;for(var b in this.i)ci(this,b);ai.A.o.call(this)};function fi(a,b){ai.call(this,b);this.b=a;this.start()}
x(fi,ai);fi.prototype.addEventListener=function(a,b){this.b.addEventListener(a,b)};
fi.prototype.removeEventListener=function(a,b){this.b.removeEventListener(a,b)};
function di(a,b){switch(a){case "loadVideoById":return b=Yh(b),$h(b),[b];case "cueVideoById":return b=Yh(b),$h(b),[b];case "loadVideoByPlayerVars":return $h(b),[b];case "cueVideoByPlayerVars":return $h(b),[b];case "loadPlaylist":return b=Zh(b),$h(b),[b];case "cuePlaylist":return b=Zh(b),$h(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function ei(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
fi.prototype.ia=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return fi.A.ia.call(this,a,b)};
fi.prototype.o=function(){fi.A.o.call(this);delete this.b};function gi(a,b,c,d){P.call(this);this.g=b||null;this.B="*";this.i=c||null;this.sessionId=null;this.channel=d||null;this.H=!!a;this.w=v(this.C,this);window.addEventListener("message",this.w)}
aa(gi,P);
gi.prototype.C=function(a){if(!("*"!=this.i&&a.origin!=this.i||this.g&&a.source!=this.g)&&u(a.data)){try{var b=yd(a.data)}catch(c){return}if(!(null==b||this.H&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin?this.i=this.B=a.origin:V(Error("MessageEvent origin is null"),"WARNING");this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.j&&(this.l&&!(0<=wa(this.l,b.func))||this.j(b.func,
b.args))}}};
gi.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=zd(a);c.postMessage(d,this.B)}catch(e){V(e,"WARNING")}}};
gi.prototype.o=function(){window.removeEventListener("message",this.w);P.prototype.o.call(this)};function hi(a,b,c){gi.call(this,a,b,c||T("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.l=this.b=this.j=null}
aa(hi,gi);function ii(){var a=!!T("WIDGET_ID_ENFORCE"),a=this.f=new hi(a),b=v(this.ab,this);a.j=b;a.l=null;this.f.channel="widget";if(a=T("WIDGET_ID"))this.f.sessionId=a;this.i=[];this.l=!1;this.j={}}
l=ii.prototype;l.ab=function(a,b){if("addEventListener"==a&&b){var c=b[0];this.j[c]||"onReady"==c||(this.addEventListener(c,ji(this,c)),this.j[c]=!0)}else this.Aa(a,b)};
l.Aa=function(){};
function ji(a,b){return v(function(a){this.sendMessage(b,a)},a)}
l.addEventListener=function(){};
l.Ga=function(){this.l=!0;this.sendMessage("initialDelivery",this.ja());this.sendMessage("onReady");A(this.i,this.za,this);this.i=[]};
l.ja=function(){return null};
function ki(a,b){a.sendMessage("infoDelivery",b)}
l.za=function(a){this.l?this.f.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.za({event:a,info:void 0==b?null:b})};
l.dispose=function(){this.f=null};function li(a){ii.call(this);this.b=a;this.g=[];this.addEventListener("onReady",v(this.Wa,this));this.addEventListener("onVideoProgress",v(this.ib,this));this.addEventListener("onVolumeChange",v(this.jb,this));this.addEventListener("onApiChange",v(this.cb,this));this.addEventListener("onPlaybackQualityChange",v(this.fb,this));this.addEventListener("onPlaybackRateChange",v(this.gb,this));this.addEventListener("onStateChange",v(this.hb,this))}
x(li,ii);l=li.prototype;l.Aa=function(a,b){if(this.b[a]){b=b||[];if(0<b.length&&Wh(a)){var c=b;if(la(c[0])&&!ia(c[0]))c=c[0];else{var d={};switch(a){case "loadVideoById":case "cueVideoById":d=Yh.apply(window,c);break;case "loadVideoByUrl":case "cueVideoByUrl":d=Xh.apply(window,c);break;case "loadPlaylist":case "cuePlaylist":d=Zh.apply(window,c)}c=d}$h(c);b.length=1;b[0]=c}this.b[a].apply(this.b,b);Wh(a)&&ki(this,this.ja())}};
l.Wa=function(){var a=v(this.Ga,this);this.f.b=a};
l.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
l.ja=function(){if(!this.b)return null;var a=this.b.getApiInterface();za(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){var f=e,g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(k){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=w()/1E3;return b};
l.hb=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),videoUrl:this.b.getVideoUrl(),playlist:this.b.getPlaylist(),playlistIndex:this.b.getPlaylistIndex(),currentTimeLastUpdated_:w()/1E3,playbackRate:this.b.getPlaybackRate(),
mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());ki(this,a)};
l.fb=function(a){ki(this,{playbackQuality:a})};
l.gb=function(a){ki(this,{playbackRate:a})};
l.cb=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.b.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.jb=function(){ki(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
l.ib=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:w()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());ki(this,a)};
l.dispose=function(){li.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function mi(){P.call(this);this.b=new R;pd(this,qa(qd,this.b))}
x(mi,P);mi.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
mi.prototype.K=function(a){return this.f?!1:this.b.K(a)};
mi.prototype.l=function(a,b){this.f||this.b.V.apply(this.b,arguments)};function ni(a,b,c){mi.call(this);this.g=a;this.i=b;this.j=c}
x(ni,mi);function bi(a,b,c){if(!a.f){var d=a.g;d.f||a.i!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(zd(a),d.i))}}
ni.prototype.o=function(){this.i=this.g=null;ni.A.o.call(this)};function oi(a,b,c){P.call(this);this.b=a;this.i=c;this.j=zf(window,"message",v(this.l,this));this.g=new ni(this,a,b);pd(this,qa(qd,this.g))}
x(oi,P);oi.prototype.l=function(a){var b;if(b=!this.f)if(b=a.origin==this.i)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(a=a.data,u(a))){try{a=yd(a)}catch(d){return}a.command&&(b=this.g,b.f||b.l("command",a.command,a.data))}};
oi.prototype.o=function(){Af(this.j);this.b=null;oi.A.o.call(this)};function pi(){var a=Ia(qi);return new Q(function(b,c){a.J=function(a){Re(a)?b(a):c(new ri("Request failed, status="+a.status,"net.badstatus"))};
a.onError=function(){c(new ri("Unknown request error","net.unknown"))};
a.O=function(){c(new ri("Request timed out","net.timeout"))};
Ye("//googleads.g.doubleclick.net/pagead/id",a)})}
function ri(a,b){z.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
aa(ri,z);function si(a){z.call(this,a.message||a.description||a.name);this.Pa=a instanceof ti;this.b=a instanceof Nd}
x(si,z);si.prototype.name="BiscottiError";function ti(){z.call(this,"Biscotti ID is missing from server")}
x(ti,z);ti.prototype.name="BiscottiMissingError";function ui(a,b){this.f=a;this.b=b}
ui.prototype.then=function(a,b,c){try{if(p(this.f))return a?Kd(a.call(c,this.f)):Kd(this.f);if(p(this.b)){if(!b)return Ld(this.b);var d=b.call(c,this.b);return!p(d)&&this.b.b?Ld(this.b):Kd(d)}throw Error("Invalid Result_ state");}catch(e){return Ld(e)}};
Fd(ui);var qi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},vi=null;function wi(){if(!vi){var a=v(xi,n,2),b=pi().then(yi);vi=Md(b,null,a,void 0)}return vi}
function yi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new ti;a=JSON.parse(a.substr(4)).id;zi(a);vi=new ui(a);Ai(18E5,2);return a}
function xi(a,b){var c=new si(b);zi("");vi=new ui(void 0,c);0<a&&Ai(12E4,a-1);throw c;}
function Ai(a,b){W(function(){var a=v(xi,n,b),a=pi().then(yi,a);Md(a,null,t,void 0)},a)}
function zi(a){q("yt.ads.biscotti.lastId_",a,void 0)}
;function Bi(a){a.Pa&&Ci("")}
function Di(a){!a||r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_")||q("yt.ads.biscotti.getId_",wi,void 0);try{try{var b=r("yt.ads.biscotti.getId_")||r("yt.www.ads.biscotti.getId_");var c=b?b():wi()}catch(d){c=Ld(d)}c.then(Ci,Bi);W(Di,18E5)}catch(d){V(d)}}
var Ei=0;
function Ci(a){a:{try{var b=window.top.location.href}catch(H){b=2;break a}b=null!=b?b==window.document.location.href?0:1:2}b={dt:dc,flash:Va||"0",frm:b};b.u_tz=-(new Date).getTimezoneOffset();try{var c=y.history.length}catch(H){c=0}b.u_his=c;b.u_java=!!y.navigator&&"unknown"!==typeof y.navigator.javaEnabled&&!!y.navigator.javaEnabled&&y.navigator.javaEnabled();y.screen&&(b.u_h=y.screen.height,b.u_w=y.screen.width,b.u_ah=y.screen.availHeight,b.u_aw=y.screen.availWidth,b.u_cd=y.screen.colorDepth);y.navigator&&
y.navigator.plugins&&(b.u_nplug=y.navigator.plugins.length);y.navigator&&y.navigator.mimeTypes&&(b.u_nmime=y.navigator.mimeTypes.length);b.bid=a;b.ca_type=Ua?"flash":"image";if(U("enable_server_side_search_pyv")||U("enable_server_side_mweb_search_pyv")){a=window;try{var d=a.screenX;var e=a.screenY}catch(H){}try{var f=a.outerWidth;var g=a.outerHeight}catch(H){}try{var h=a.innerWidth;var k=a.innerHeight}catch(H){}k=[a.screenLeft,a.screenTop,d,e,a.screen?a.screen.availWidth:void 0,a.screen?a.screen.availTop:
void 0,f,g,h,k];h=window.top||y;try{if(h.document&&!h.document.body)var m=new Da(-1,-1);else{var B=(h||window).document,G="CSS1Compat"==B.compatMode?B.documentElement:B.body;m=(new Da(G.clientWidth,G.clientHeight)).round()}var N=m}catch(H){N=new Da(-12245933,-12245933)}m=0;window.SVGElement&&document.createElementNS&&(m|=1);N={bc:m,bih:N.height,biw:N.width,brdim:k.join(),vis:{visible:1,hidden:2,prerender:3,preview:4}[ra.webkitVisibilityState||ra.mozVisibilityState||ra.visibilityState||""]||0,wgl:!!y.WebGLRenderingContext};
for(var ta in N)b[ta]=N[ta]}b.bsq=Ei++;df("//www.youtube.com/ad_data_204",{Ka:!1,D:b})}
;function Fi(){this.b=T("ALT_PREF_COOKIE_NAME","PREF");var a=uc.get(""+this.b,void 0);if(a)for(var a=unescape(a).split("&"),b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}
ea(Fi);var Z=r("yt.prefs.UserPrefs.prefs_")||{};q("yt.prefs.UserPrefs.prefs_",Z,void 0);function Gi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Hi(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ii(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Fi.prototype.get=function(a,b){Hi(a);Gi(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
Fi.prototype.set=function(a,b){Hi(a);Gi(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
Fi.prototype.remove=function(a){Hi(a);Gi(a);delete Z[a]};
Fi.prototype.clear=function(){Z={}};var Ji=null,Ki=null,Li=null,Mi={};function Ni(a){Rf(a.payload_name,a.payload,U("enable_youtubei_innertube")?rg:ng,void 0,void 0)}
function Oi(a){var b=a.id;a=a.ve_type;var c=Gf++;a=new Ff(void 0,a,c,void 0);Mi[b]=a;b=bg();c=ag();b&&c&&Sf(sg(),b,c,a)}
function Pi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(S("client-screen-nonce",b),S("ROOT_VE_TYPE",a),a=ag()))for(var c in Mi){var d=Mi[c];if(d){var e=b,f=a;Sf(sg(),e,f,d)}}}
function Qi(a){Mi[a.id]=new Ff(a.tracking_params)}
function Ri(a){var b=bg();a=Mi[a.id];if(b&&a){var c=sg();Tf(c,{click:{csn:b,visualElement:Hf(a)}},void 0)}}
function Si(a){a=a.ids;var b=bg();if(b){for(var c=[],d=0;d<a.length;d++){var e=Mi[a[d]];e&&c.push(e)}c.length&&Uf(sg(),b,c)}}
function Ti(){var a=Ji;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;q("yt.setConfig",S,void 0);q("yt.config.set",S,void 0);q("yt.setMsg",nf,void 0);q("yt.msgs.set",nf,void 0);q("yt.logging.errors.log",jf,void 0);
q("writeEmbed",function(){var a=T("PLAYER_CONFIG",void 0);"1"!=a.privembed&&Di(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=T("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);T("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&$h(a.args);Ji=a=Uh(a);a.addEventListener("onScreenChanged",Pi);a.addEventListener("onLogClientVeCreated",Oi);a.addEventListener("onLogServerVeCreated",Qi);a.addEventListener("onLogToGel",
Ni);a.addEventListener("onLogVeClicked",Ri);a.addEventListener("onLogVesShown",Si);a.addEventListener("onReady",Ti);b=T("POST_MESSAGE_ID","player");T("ENABLE_JS_API")?Li=new li(a):T("ENABLE_POST_API")&&u(b)&&u(c)&&(Ki=new oi(window.parent,b,c),Li=new fi(a,Ki.g));T("BG_P")&&(T("BG_I")||T("BG_IU"))&&Le();rf()},void 0);
q("yt.www.watch.ads.restrictioncookie.spr",function(a){gf(a+"mac_204?action_fcts=1");return!0},void 0);
var Ui=re(function(){ph("ol");var a=Fi.getInstance(),b=1<window.devicePixelRatio;if(!!((Ii("f"+(Math.floor(119/31)+1))||0)&67108864)!=b){var c="f"+(Math.floor(119/31)+1),d=Ii(c)||0,d=b?d|67108864:d&-67108865;0==d?delete Z[c]:Z[c]=d.toString(16).toString();var a=a.b,b=[],e;for(e in Z)b.push(e+"="+escape(Z[e]));uc.set(""+a,b.join("&"),63072E3,"/","youtube.com")}}),Vi=re(function(){var a=Ji;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();T("PL_ATT")&&(Ke=null);for(var a=0,b=pf.length;a<b;a++){var c=pf[a];if(!isNaN(c)){var d=r("yt.scheduler.instance.cancelJob");d?d(c):window.clearTimeout(c)}}pf.length=0;a=Fe("//static.doubleclick.net/instream/ad_status.js");if(b=document.getElementById(a))ze(a),b.parentNode.removeChild(b);qf=!1;S("DCLKSTAT",0);rd(Li,Ki);if(a=Ji)a.removeEventListener("onScreenChanged",Pi),a.removeEventListener("onLogClientVeCreated",Oi),a.removeEventListener("onLogServerVeCreated",
Qi),a.removeEventListener("onLogToGel",Ni),a.removeEventListener("onLogVeClicked",Ri),a.removeEventListener("onLogVesShown",Si),a.removeEventListener("onReady",Ti),a.destroy();Mi={}});
window.addEventListener?(window.addEventListener("load",Ui),window.addEventListener("unload",Vi)):window.attachEvent&&(window.attachEvent("onload",Ui),window.attachEvent("onunload",Vi));}).call(this);
