/**
 * jQPlaceholder - https://github.com/pedrochaves/jQPlaceholder
 * 
 * A jQuery plugin to simulate the HTML5 placeholder in browsers
 * that don't support it
 * 
 * @author Pedro Chaves (https://github.com/pedrochaves/)
 */

(function(d,b){var e=function(a){var b=a.attr("type"),c=a.attr("placeholder")||a.attr("value");if("password"===b||"placeholder"in d.document.createElement("input")&&a.attr("placeholder"))return!1;!a.attr("value")&&"text"===b&&a.attr("value",c);a.live({"focus.jqplaceholder":function(){a.attr("value")===c&&a.attr("value","")},"blur.jqplaceholder":function(){a.attr("value")||a.attr("value",c)}})};b.jQPlaceholder=function(){b("input[placeholder], input[value]").jQPlaceholder()};b.fn.jQPlaceholder=function(){return this.each(function(){e(b(this))})}})(window,
jQuery);
