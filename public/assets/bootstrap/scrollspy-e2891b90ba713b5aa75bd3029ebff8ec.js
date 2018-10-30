/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(r){"use strict";function i(t,s){var e,o=r.proxy(this.process,this);this.$element=r(t).is("body")?r(window):r(t),this.$body=r("body"),this.$scrollElement=this.$element.on("scroll.bs.scrollspy",o),this.options=r.extend({},i.DEFAULTS,s),this.selector=(this.options.target||(e=r(t).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=r([]),this.targets=r([]),this.activeTarget=null,this.refresh(),this.process()}i.DEFAULTS={offset:10},i.prototype.refresh=function(){var o=this.$element[0]==window?"offset":"position";this.offsets=r([]),this.targets=r([]);var i=this;this.$body.find(this.selector).map(function(){var t=r(this),s=t.data("target")||t.attr("href"),e=/^#./.test(s)&&r(s);return e&&e.length&&e.is(":visible")&&[[e[o]().top+(!r.isWindow(i.$scrollElement.get(0))&&i.$scrollElement.scrollTop()),s]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},i.prototype.process=function(){var t,s=this.$scrollElement.scrollTop()+this.options.offset,e=(this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight))-this.$scrollElement.height(),o=this.offsets,i=this.targets,r=this.activeTarget;if(e<=s)return r!=(t=i.last()[0])&&this.activate(t);if(r&&s<=o[0])return r!=(t=i[0])&&this.activate(t);for(t=o.length;t--;)r!=i[t]&&s>=o[t]&&(!o[t+1]||s<=o[t+1])&&this.activate(i[t])},i.prototype.activate=function(t){this.activeTarget=t,r(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var s=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',e=r(s).parents("li").addClass("active");e.parent(".dropdown-menu").length&&(e=e.closest("li.dropdown").addClass("active")),e.trigger("activate.bs.scrollspy")};var t=r.fn.scrollspy;r.fn.scrollspy=function(o){return this.each(function(){var t=r(this),s=t.data("bs.scrollspy"),e="object"==typeof o&&o;s||t.data("bs.scrollspy",s=new i(this,e)),"string"==typeof o&&s[o]()})},r.fn.scrollspy.Constructor=i,r.fn.scrollspy.noConflict=function(){return r.fn.scrollspy=t,this},r(window).on("load.bs.scrollspy.data-api",function(){r('[data-spy="scroll"]').each(function(){var t=r(this);t.scrollspy(t.data())})})}(jQuery);