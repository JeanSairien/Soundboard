$(document).ready(function() {
    var o = function(a) {
        $("audio").each(function() {
            var n = $(this)[0];
            n.paused || n == a || $(this).parent().hasClass("bonus") || (n.pause(), n.currentTime = 0)
        })
    };
    $(".playaudio").on("click", function() {
        var a = $(this).parent().find("audio")[0];
        o(a), a.paused ? a.play() : (a.pause(), a.currentTime = 0)
    })
    
	// var cards = $(".item");
	// for(var i = 0; i < cards.length; i++){
	//     var target = Math.floor(Math.random() * cards.length -1) + 1;
	//     var target2 = Math.floor(Math.random() * cards.length -1) +1;
	//     cards.eq(target).before(cards.eq(target2));
	// }
});
