(function(window, $){
	var DOCUMENT  = window.document,
		TEXTCOLOR = '#999';
	
	var _initPlaceholder = function(){
		// if the browser supports HTML5's placeholder, do nothing
		if('placeholder' in DOCUMENT.createElement('input')){
			return false;
		}
		
		var self = $(this),
			placeholder = self.attr('placeholder');
		
		// Setting up initial value
		if(!self.attr('value')){
			self.attr('value', placeholder);
		}
		
		// Focus and blur events
		self
			.bind({
				'focus': function(event){
					if(self.attr('value') === placeholder){
						self.attr('value', '');
					}
				},
				'blur': function(event){
					if(!self.attr('value')){
						self.attr('value', placeholder);
					}
				}
			})
		;
	};
	
	// General, standalone way to use it
	$.jQPlaceholder = function(){
		$('input[placeholder]').each(_initPlaceholder);
	};
	
	// Here is the plugin :)
	$.fn.jQPlaceholder = function(){
		return this.each(_initPlaceholder);
	};
}(window, jQuery));
