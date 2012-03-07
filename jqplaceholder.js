/**
 * jQPlaceholder - https://github.com/pedrochaves/jQPlaceholder
 * 
 * A jQuery plugin to simulate the HTML5 placeholder in browsers
 * that don't support it
 * 
 * @author Pedro Chaves (https://github.com/pedrochaves/)
 */

(function(window, $){
    /**
     * Initiates the plugin
     */
    var _init = function (self) {
        var type        = self.attr("type"),
            placeholder = self.attr("placeholder") || self.attr("value");
        
        if (type === "password") {
            return false;
        }
        
        // if the browser supports HTML5 placeholder and the attribute
        // placeholder exists, do nothing
        if("placeholder" in window.document.createElement("input")){
            if (self.attr("placeholder")) {
                return false;
            }
        }
        
        // Setting up initial value
        if(!self.attr("value") && type === "text"){
            self.attr("value", placeholder);
        }
        
        self.live({
            "focus.jqplaceholder": function () {
                if(self.attr("value") === placeholder){
                    self.attr("value", "");
                }
            },
            "blur.jqplaceholder": function () {
                if(!self.attr("value")){
                    self.attr("value", placeholder);
                }
            }
        });
    };

    // General, standalone way to use it
    $.jQPlaceholder = function () {
        $("input[placeholder], input[value]").jQPlaceholder();
    };

    // Here is the plugin :)
    $.fn.jQPlaceholder = function () {
        return this.each(function () {
            _init($(this));
        });
    };

}(window, jQuery));
