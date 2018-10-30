/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(s){"use strict";var e='[data-dismiss="alert"]',r=function(t){s(t).on("click",e,this.close)};r.prototype.close=function(t){function e(){n.trigger("closed.bs.alert").remove()}var a=s(this),r=a.attr("data-target");r||(r=(r=a.attr("href"))&&r.replace(/.*(?=#[^\s]*$)/,""));var n=s(r);t&&t.preventDefault(),n.length||(n=a.hasClass("alert")?a:a.parent()),n.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(n.removeClass("in"),s.support.transition&&n.hasClass("fade")?n.one(s.support.transition.end,e).emulateTransitionEnd(150):e())};var t=s.fn.alert;s.fn.alert=function(a){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new r(this)),"string"==typeof a&&e[a].call(t)})},s.fn.alert.Constructor=r,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,r.prototype.close)}(jQuery);