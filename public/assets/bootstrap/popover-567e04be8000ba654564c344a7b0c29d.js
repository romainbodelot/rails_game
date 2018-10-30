/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(r){"use strict";var i=function(t,o){this.init("popover",t,o)};if(!r.fn.tooltip)throw new Error("Popover requires tooltip.js");i.DEFAULTS=r.extend({},r.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),i.prototype=r.extend({},r.fn.tooltip.Constructor.prototype),(i.prototype.constructor=i).prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.setContent=function(){var t=this.tip(),o=this.getTitle(),e=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](o),t.find(".popover-content")[this.options.html?"string"==typeof e?"html":"append":"text"](e),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},i.prototype.hasContent=function(){return this.getTitle()||this.getContent()},i.prototype.getContent=function(){var t=this.$element,o=this.options;return t.attr("data-content")||("function"==typeof o.content?o.content.call(t[0]):o.content)},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},i.prototype.tip=function(){return this.$tip||(this.$tip=r(this.options.template)),this.$tip};var t=r.fn.popover;r.fn.popover=function(n){return this.each(function(){var t=r(this),o=t.data("bs.popover"),e="object"==typeof n&&n;(o||"destroy"!=n)&&(o||t.data("bs.popover",o=new i(this,e)),"string"==typeof n&&o[n]())})},r.fn.popover.Constructor=i,r.fn.popover.noConflict=function(){return r.fn.popover=t,this}}(jQuery);