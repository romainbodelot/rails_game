/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(a){"use strict";function d(e){a(o).remove(),a(p).each(function(){var o=s(a(this)),t={relatedTarget:this};o.hasClass("open")&&(o.trigger(e=a.Event("hide.bs.dropdown",t)),e.isDefaultPrevented()||o.removeClass("open").trigger("hidden.bs.dropdown",t))})}function s(o){var t=o.attr("data-target");t||(t=(t=o.attr("href"))&&/#[A-Za-z]/.test(t)&&t.replace(/.*(?=#[^\s]*$)/,""));var e=t&&a(t);return e&&e.length?e:o.parent()}var o=".dropdown-backdrop",p='[data-toggle="dropdown"]',n=function(o){a(o).on("click.bs.dropdown",this.toggle)};n.prototype.toggle=function(o){var t=a(this);if(!t.is(".disabled, :disabled")){var e=s(t),n=e.hasClass("open");if(d(),!n){"ontouchstart"in document.documentElement&&!e.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",d);var r={relatedTarget:this};if(e.trigger(o=a.Event("show.bs.dropdown",r)),o.isDefaultPrevented())return;t.trigger("focus"),e.toggleClass("open").trigger("shown.bs.dropdown",r)}return!1}},n.prototype.keydown=function(o){if(/(38|40|27)/.test(o.keyCode)){var t=a(this);if(o.preventDefault(),o.stopPropagation(),!t.is(".disabled, :disabled")){var e=s(t),n=e.hasClass("open");if(!n||n&&27==o.keyCode)return 27==o.which&&e.find(p).trigger("focus"),t.trigger("click");var r=" li:not(.divider):visible a",d=e.find('[role="menu"]'+r+', [role="listbox"]'+r);if(d.length){var i=d.index(d.filter(":focus"));38==o.keyCode&&0<i&&i--,40==o.keyCode&&i<d.length-1&&i++,~i||(i=0),d.eq(i).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function(e){return this.each(function(){var o=a(this),t=o.data("bs.dropdown");t||o.data("bs.dropdown",t=new n(this)),"string"==typeof e&&t[e].call(o)})},a.fn.dropdown.Constructor=n,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(o){o.stopPropagation()}).on("click.bs.dropdown.data-api",p,n.prototype.toggle).on("keydown.bs.dropdown.data-api",p+', [role="menu"], [role="listbox"]',n.prototype.keydown)}(jQuery);