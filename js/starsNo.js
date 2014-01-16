/**
 * 
 * @authors gezhi (computerwolf@sina.com)
 * @date    2013-06-07 09:16:52
 * @version $Id$
 */
(function($){
	$.fn.starsRates=function(options){
		var stars=$(this).find('img'),stars_notes=$(this).find('span'),no_star=stars.attr('src');
		var settings=$.extend({
			low_pic:'images/start-low.png',
			high_pic:'images/start-high.png'
		},options);
		this.mouseover(function(){
			$.each(stars, function(i) {
				$(stars[i]).hover(function() {
					stars_notes.parent().show();
					$(stars_notes[i]).siblings('span').removeClass('disb');
					$(stars_notes[i]).addClass('disb');
					var temporary_times = Number($(this).attr('alt'));
					for (j = 0; j <= temporary_times; j++) {
						if (temporary_times < 2) {
							$(stars[j]).attr('src', settings.low_pic);
						} else {
							$(stars[j]).attr('src', settings.high_pic);
						}
					}
					for (temporary_times; temporary_times <= 4; temporary_times++) {
						$(stars[temporary_times + 1]).attr('src', no_star);
					}
				});
				$(stars[i]).click(function() {
					var click_times = Number($(this).attr('alt'));
					countTimes(click_times,stars);
					$(this).siblings('.score').val(click_times+1);
				});
		});
	});
	this.children('.rates').mouseleave(function() {
			$(this).siblings('.rates-note').hide();
			var origin_times = Number($(this).children('.score').val());
			if(origin_times){
			countTimes(origin_times-1,stars);
		}else{
			stars.attr('src', no_star);
		}
		});
	function countTimes(click_times,stars){
			for(j=0;j<=click_times;j++){
					if(click_times<2){
					$(stars[j]).attr('src',settings.low_pic);
				}else{
					$(stars[j]).attr('src',settings.high_pic);
				}
				}
				for(click_times;click_times<=4;click_times++){
					$(stars[click_times+1]).attr('src',no_star);
				}
		}
}
}(jQuery));