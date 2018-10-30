/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(r){"use strict";function n(){var n=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in t)if(n.style[i]!==undefined)return{end:t[i]};return!1}r.fn.emulateTransitionEnd=function(n){var t=!1,i=this;return r(this).one(r.support.transition.end,function(){t=!0}),setTimeout(function(){t||r(i).trigger(r.support.transition.end)},n),this},r(function(){r.support.transition=n()})}(jQuery);