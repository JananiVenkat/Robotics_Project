function formatTweet(text){
	// parse urls
	text = text.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url){
		return '<a target="_blank" href="'+ url +'">'+ url +'</a>';
	});

	// parse usernames
	text = text.replace(/[@]+[A-Za-z0-9-_]+/g, function(u){
		var username = u.replace('@','')
		return '<a target="_blank" href="http://twitter.com/'+ username +'">'+ u +'</a>';
	});

	// parse hashtags
	text = text.replace(/[#]+[A-Za-z0-9-_]+/g, function(t){
		var tag = t.replace('#','%23')
		return '<a target="_blank" href="http://search.twitter.com/search?q='+ tag +'">'+ t +'</a>';
	});
	return text;
}

(function($){
    $(function(){
        var twitterURL = rethink.twitterURL || '';
        if( twitterURL ) {
        	$.getJSON( twitterURL, function(data){
        		$.each(data, function(index, tweet){
        			$('.twitter-text').html(formatTweet(tweet.text));
        		})
        	});
        }
    });
})(jQuery);