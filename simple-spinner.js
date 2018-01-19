(function ( $ ) {
 
 	var defaultOptions = {
 		spinnerClass: 'simplespinner',
 		iconClass: 'simplespinner__figure',
 		labelClass: 'simplespinner__label',
 		label: 'Loading...',
 		containerLoadingClass: 'simplespinner_loading'
 	}

 	var that = this;
 	var spinnerContainer = undefined;
 	var options = {};

    var spinnerMarkup = function(options) {

    	var container = $('<div />').addClass(options.spinnerClass).hide();
    	var icon = $('<div />').addClass(options.iconClass);
    	var label = $('<p />').addClass(options.labelClass).text(options.label);

    	return container.append(icon).append(label);
    }
    					 
    $.fn.simplespinner = function(userOptions) {
    	spinnerContainer = this;
    	options = $.extend(defaultOptions, userOptions);
    	$(this).append(spinnerMarkup(options));
        return that;
    };

    this.show = function(show){
    	var hide = show === false;

    	if (hide) {
    		$(spinnerContainer).find('.' + options.spinnerClass).hide();
    		$(spinnerContainer).removeClass(options.containerLoadingClass);
    	}
    	else {
			$(spinnerContainer).find('.' + options.spinnerClass).show();
			$(spinnerContainer).addClass(options.containerLoadingClass);
    	}
    }

    this.hide = this.show.bind(this, false);
 
}( jQuery ));