

(function($) {
	$.fn.highlight_link = function(options) {
		var defaults = {
			mouseover_color: 'red',
			mouseover_size: '30px',
			mouseout_color: 'white',
			mouseout_size: '15px'
		};
		var settings = $.extend(defaults, options);
		this.mouseover(function(){
			$(this).css('color', settings.mouseover_color);
			$(this).css('font-size', settings.mouseover_size);
		});
		this.mouseout(function(){
			$(this).css('color', settings.mouseout_color);
			$(this).css('font-size', settings.mouseout_size);
		});
		return this;
	}
}(jQuery));