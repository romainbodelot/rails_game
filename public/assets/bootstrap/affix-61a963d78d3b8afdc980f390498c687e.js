/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(p){"use strict";var c=function(t,i){this.options=p.extend({},c.DEFAULTS,i),this.$window=p(window).on("scroll.bs.affix.data-api",p.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",p.proxy(this.checkPositionWithEventLoop,this)),this.$element=p(t),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var t=this.$window.scrollTop(),i=this.$element.offset();return this.pinnedOffset=i.top-t},c.prototype.checkPositionWithEventLoop=function(){setTimeout(p.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=p(document).height(),i=this.$window.scrollTop(),e=this.$element.offset(),o=this.options.offset,f=o.top,n=o.bottom;"top"==this.affixed&&(e.top+=i),"object"!=typeof o&&(n=f=o),"function"==typeof f&&(f=o.top(this.$element)),"function"==typeof n&&(n=o.bottom(this.$element));var s=!(null!=this.unpin&&i+this.unpin<=e.top)&&(null!=n&&e.top+this.$element.height()>=t-n?"bottom":null!=f&&i<=f&&"top");if(this.affixed!==s){this.unpin&&this.$element.css("top","");var h="affix"+(s?"-"+s:""),a=p.Event(h+".bs.affix");this.$element.trigger(a),a.isDefaultPrevented()||(this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(h).trigger(p.Event(h.replace("affix","affixed"))),"bottom"==s&&this.$element.offset({top:t-n-this.$element.height()}))}}};var t=p.fn.affix;p.fn.affix=function(o){return this.each(function(){var t=p(this),i=t.data("bs.affix"),e="object"==typeof o&&o;i||t.data("bs.affix",i=new c(this,e)),"string"==typeof o&&i[o]()})},p.fn.affix.Constructor=c,p.fn.affix.noConflict=function(){return p.fn.affix=t,this},p(window).on("load",function(){p('[data-spy="affix"]').each(function(){var t=p(this),i=t.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),t.affix(i)})})}(jQuery);