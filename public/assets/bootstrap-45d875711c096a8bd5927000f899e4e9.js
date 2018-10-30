/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
!function(h){"use strict";var p=function(t,e){this.options=h.extend({},p.DEFAULTS,e),this.$window=h(window).on("scroll.bs.affix.data-api",h.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",h.proxy(this.checkPositionWithEventLoop,this)),this.$element=h(t),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};p.RESET="affix affix-top affix-bottom",p.DEFAULTS={offset:0},p.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(p.RESET).addClass("affix");var t=this.$window.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},p.prototype.checkPositionWithEventLoop=function(){setTimeout(h.proxy(this.checkPosition,this),1)},p.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=h(document).height(),e=this.$window.scrollTop(),i=this.$element.offset(),o=this.options.offset,n=o.top,s=o.bottom;"top"==this.affixed&&(i.top+=e),"object"!=typeof o&&(s=n=o),"function"==typeof n&&(n=o.top(this.$element)),"function"==typeof s&&(s=o.bottom(this.$element));var a=!(null!=this.unpin&&e+this.unpin<=i.top)&&(null!=s&&i.top+this.$element.height()>=t-s?"bottom":null!=n&&e<=n&&"top");if(this.affixed!==a){this.unpin&&this.$element.css("top","");var r="affix"+(a?"-"+a:""),l=h.Event(r+".bs.affix");this.$element.trigger(l),l.isDefaultPrevented()||(this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(p.RESET).addClass(r).trigger(h.Event(r.replace("affix","affixed"))),"bottom"==a&&this.$element.offset({top:t-s-this.$element.height()}))}}};var t=h.fn.affix;h.fn.affix=function(o){return this.each(function(){var t=h(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new p(this,i)),"string"==typeof o&&e[o]()})},h.fn.affix.Constructor=p,h.fn.affix.noConflict=function(){return h.fn.affix=t,this},h(window).on("load",function(){h('[data-spy="affix"]').each(function(){var t=h(this),e=t.data();e.offset=e.offset||{},e.offsetBottom&&(e.offset.bottom=e.offsetBottom),e.offsetTop&&(e.offset.top=e.offsetTop),t.affix(e)})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',o=function(t){s(t).on("click",e,this.close)};o.prototype.close=function(t){function e(){n.trigger("closed.bs.alert").remove()}var i=s(this),o=i.attr("data-target");o||(o=(o=i.attr("href"))&&o.replace(/.*(?=#[^\s]*$)/,""));var n=s(o);t&&t.preventDefault(),n.length||(n=i.hasClass("alert")?i:i.parent()),n.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(n.removeClass("in"),s.support.transition&&n.hasClass("fade")?n.one(s.support.transition.end,e).emulateTransitionEnd(150):e())};var t=s.fn.alert;s.fn.alert=function(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new o(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=o,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,o.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",n.resetText||i.data("resetText",i[o]()),i[o](n[t]||this.options[t]),setTimeout(s.proxy(function(){"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")&&(i.prop("checked")&&this.$element.hasClass("active")?t=!1:e.find(".active").removeClass("active")),t&&i.prop("checked",!this.$element.hasClass("active")).trigger("change")}t&&this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=function(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})},s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api","[data-toggle^=button]",function(t){var e=s(t.target);e.hasClass("btn")||(e=e.closest(".btn")),e.button("toggle"),t.preventDefault()})}(jQuery),function(h){"use strict";var s=function(t,e){this.$element=h(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",h.proxy(this.pause,this)).on("mouseleave",h.proxy(this.cycle,this))};s.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},s.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(h.proxy(this.next,this),this.options.interval)),this},s.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},s.prototype.to=function(t){var e=this,i=this.getActiveIndex();if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",h(this.$items[t]))},s.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&h.support.transition&&(this.$element.trigger(h.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},s.prototype.next=function(){if(!this.sliding)return this.slide("next")},s.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},s.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||i[t](),n=this.interval,s="next"==t?"left":"right",a="next"==t?"first":"last",r=this;if(!o.length){if(!this.options.wrap)return;o=this.$element.find(".item")[a]()}if(o.hasClass("active"))return this.sliding=!1;var l=h.Event("slide.bs.carousel",{relatedTarget:o[0],direction:s});return this.$element.trigger(l),l.isDefaultPrevented()?void 0:(this.sliding=!0,n&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var t=h(r.$indicators.children()[r.getActiveIndex()]);t&&t.addClass("active")})),h.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one(h.support.transition.end,function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),r.sliding=!1,setTimeout(function(){r.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*i.css("transition-duration").slice(0,-1))):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),n&&this.cycle(),this)};var t=h.fn.carousel;h.fn.carousel=function(n){return this.each(function(){var t=h(this),e=t.data("bs.carousel"),i=h.extend({},s.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new s(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})},h.fn.carousel.Constructor=s,h.fn.carousel.noConflict=function(){return h.fn.carousel=t,this},h(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(t){var e,i=h(this),o=h(i.attr("data-target")||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")),n=h.extend({},o.data(),i.data()),s=i.attr("data-slide-to");s&&(n.interval=!1),o.carousel(n),(s=i.attr("data-slide-to"))&&o.data("bs.carousel").to(s),t.preventDefault()}),h(window).on("load",function(){h('[data-ride="carousel"]').each(function(){var t=h(this);t.carousel(t.data())})})}(jQuery),function(h){"use strict";var n=function(t,e){this.$element=h(t),this.options=h.extend({},n.DEFAULTS,e),this.transitioning=null,this.options.parent&&(this.$parent=h(this.options.parent)),this.options.toggle&&this.toggle()};n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t=h.Event("show.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.$parent&&this.$parent.find("> .panel > .in");if(e&&e.length){var i=e.data("bs.collapse");if(i&&i.transitioning)return;e.collapse("hide"),i||e.data("bs.collapse",null)}var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!h.support.transition)return n.call(this);var s=h.camelCase(["scroll",o].join("-"));this.$element.one(h.support.transition.end,h.proxy(n,this)).emulateTransitionEnd(350)[o](this.$element[0][s])}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=h.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!h.support.transition)return i.call(this);this.$element[e](0).one(h.support.transition.end,h.proxy(i,this)).emulateTransitionEnd(350)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var t=h.fn.collapse;h.fn.collapse=function(o){return this.each(function(){var t=h(this),e=t.data("bs.collapse"),i=h.extend({},n.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&"show"==o&&(o=!o),e||t.data("bs.collapse",e=new n(this,i)),"string"==typeof o&&e[o]()})},h.fn.collapse.Constructor=n,h.fn.collapse.noConflict=function(){return h.fn.collapse=t,this},h(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(t){var e,i=h(this),o=i.attr("data-target")||t.preventDefault()||(e=i.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),n=h(o),s=n.data("bs.collapse"),a=s?"toggle":i.data(),r=i.attr("data-parent"),l=r&&h(r);s&&s.transitioning||(l&&l.find('[data-toggle=collapse][data-parent="'+r+'"]').not(i).addClass("collapsed"),i[n.hasClass("in")?"addClass":"removeClass"]("collapsed")),n.collapse(a)})}(jQuery),function(r){"use strict";function s(i){r(t).remove(),r(h).each(function(){var t=l(r(this)),e={relatedTarget:this};t.hasClass("open")&&(t.trigger(i=r.Event("hide.bs.dropdown",e)),i.isDefaultPrevented()||t.removeClass("open").trigger("hidden.bs.dropdown",e))})}function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i=e&&r(e);return i&&i.length?i:t.parent()}var t=".dropdown-backdrop",h="[data-toggle=dropdown]",o=function(t){r(t).on("click.bs.dropdown",this.toggle)};o.prototype.toggle=function(t){var e=r(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&r('<div class="dropdown-backdrop"/>').insertAfter(r(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=r.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;i.toggleClass("open").trigger("shown.bs.dropdown",n),e.focus()}return!1}},o.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var e=r(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o||o&&27==t.keyCode)return 27==t.which&&i.find(h).focus(),e.click();var n=" li:not(.divider):visible a",s=i.find("[role=menu]"+n+", [role=listbox]"+n);if(s.length){var a=s.index(s.filter(":focus"));38==t.keyCode&&0<a&&a--,40==t.keyCode&&a<s.length-1&&a++,~a||(a=0),s.eq(a).focus()}}}};var e=r.fn.dropdown;r.fn.dropdown=function(i){return this.each(function(){var t=r(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},r.fn.dropdown.Constructor=o,r.fn.dropdown.noConflict=function(){return r.fn.dropdown=e,this},r(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",h,o.prototype.toggle).on("keydown.bs.dropdown.data-api",h+", [role=menu], [role=listbox]",o.prototype.keydown)}(jQuery),function(a){"use strict";var o=function(t){this.element=a(t)};o.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a")[0],n=a.Event("show.bs.tab",{relatedTarget:o});if(t.trigger(n),!n.isDefaultPrevented()){var s=a(i);this.activate(t.parent("li"),e),this.activate(s,s.parent(),function(){t.trigger({type:"shown.bs.tab",relatedTarget:o})})}}},o.prototype.activate=function(t,e,i){function o(){n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),i&&i()}var n=e.find("> .active"),s=i&&a.support.transition&&n.hasClass("fade");s?n.one(a.support.transition.end,o).emulateTransitionEnd(150):o(),n.removeClass("in")};var t=a.fn.tab;a.fn.tab=function(i){return this.each(function(){var t=a(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new o(this)),"string"==typeof i&&e[i]()})},a.fn.tab.Constructor=o,a.fn.tab.noConflict=function(){return a.fn.tab=t,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),a(this).tab("show")})}(jQuery),function(o){"use strict";function t(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}o.fn.emulateTransitionEnd=function(t){var e=!1,i=this;return o(this).one(o.support.transition.end,function(){e=!0}),setTimeout(function(){e||o(i).trigger(o.support.transition.end)},t),this},o(function(){o.support.transition=t()})}(jQuery),function(s){"use strict";function n(t,e){var i,o=s.proxy(this.process,this);this.$element=s(t).is("body")?s(window):s(t),this.$body=s("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",o),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||(i=s(t).attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=s([]),this.targets=s([]),this.activeTarget=null,this.refresh(),this.process()}n.DEFAULTS={offset:10},n.prototype.refresh=function(){var o=this.$element[0]==window?"offset":"position";this.offsets=s([]),this.targets=s([]);var n=this;this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+(!s.isWindow(n.$scrollElement.get(0))&&n.$scrollElement.scrollTop()),e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){n.offsets.push(this[0]),n.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=(this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight)-this.$scrollElement.height(),o=this.offsets,n=this.targets,s=this.activeTarget;if(i<=e)return s!=(t=n.last()[0])&&this.activate(t);if(s&&e<=o[0])return s!=(t=n[0])&&this.activate(t);for(t=o.length;t--;)s!=n[t]&&e>=o[t]&&(!o[t+1]||e<=o[t+1])&&this.activate(n[t])},n.prototype.activate=function(t){this.activeTarget=t,s(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")};var t=s.fn.scrollspy;s.fn.scrollspy=function(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})},s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);t.scrollspy(t.data())})})}(jQuery),function(s){"use strict";var a=function(t,e){this.options=e,this.$element=s(t),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,s.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};a.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},a.prototype.toggle=function(t){return this[this.isShown?"hide":"show"](t)},a.prototype.show=function(i){var o=this,t=s.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',s.proxy(this.hide,this)),this.backdrop(function(){var t=s.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(document.body),o.$element.show().scrollTop(0),t&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var e=s.Event("shown.bs.modal",{relatedTarget:i});t?o.$element.find(".modal-dialog").one(s.support.transition.end,function(){o.$element.focus().trigger(e)}).emulateTransitionEnd(300):o.$element.focus().trigger(e)}))},a.prototype.hide=function(t){t&&t.preventDefault(),t=s.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),s(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),s.support.transition&&this.$element.hasClass("fade")?this.$element.one(s.support.transition.end,s.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},a.prototype.enforceFocus=function(){s(document).off("focusin.bs.modal").on("focusin.bs.modal",s.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.focus()},this))},a.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",s.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},a.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden.bs.modal")})},a.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},a.prototype.backdrop=function(t){var e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=s.support.transition&&e;if(this.$backdrop=s('<div class="modal-backdrop '+e+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",s.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;i?this.$backdrop.one(s.support.transition.end,t).emulateTransitionEnd(150):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),s.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(s.support.transition.end,t).emulateTransitionEnd(150):t()):t&&t()};var t=s.fn.modal;s.fn.modal=function(o,n){return this.each(function(){var t=s(this),e=t.data("bs.modal"),i=s.extend({},a.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new a(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})},s.fn.modal.Constructor=a,s.fn.modal.noConflict=function(){return s.fn.modal=t,this},s(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=s(this),i=e.attr("href"),o=s(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),n=o.data("bs.modal")?"toggle":s.extend({remote:!/#/.test(i)&&i},o.data(),e.data());e.is("a")&&t.preventDefault(),o.modal(n,this).one("hide",function(){e.is(":visible")&&e.focus()})}),s(document).on("show.bs.modal",".modal",function(){s(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){s(document.body).removeClass("modal-open")})}(jQuery),function(g){"use strict";var n=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},n.prototype.init=function(t,e,i){this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i);for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(t){return(t=g.extend({},this.getDefaults(),this.$element.data(),t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},n.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},n.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)},n.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)},n.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(t),t.isDefaultPrevented())return;var e=this,i=this.tip();this.setContent(),this.options.animation&&i.addClass("fade");var o="function"==typeof this.options.placement?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,n=/\s?auto?\s?/i,s=n.test(o);s&&(o=o.replace(n,"")||"top"),i.detach().css({top:0,left:0,display:"block"}).addClass(o),this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element);var a=this.getPosition(),r=i[0].offsetWidth,l=i[0].offsetHeight;if(s){var h=this.$element.parent(),p=o,d=document.documentElement.scrollTop||document.body.scrollTop,c="body"==this.options.container?window.innerWidth:h.outerWidth(),f="body"==this.options.container?window.innerHeight:h.outerHeight(),u="body"==this.options.container?0:h.offset().left;o="bottom"==o&&a.top+a.height+l-d>f?"top":"top"==o&&a.top-d-l<0?"bottom":"right"==o&&a.right+r>c?"left":"left"==o&&a.left-r<u?"right":o,i.removeClass(p).addClass(o)}var m=this.getCalculatedOffset(o,a,r,l);this.applyPlacement(m,o),this.hoverState=null;var v=function(){e.$element.trigger("shown.bs."+e.type)};g.support.transition&&this.$tip.hasClass("fade")?i.one(g.support.transition.end,v).emulateTransitionEnd(150):v()}},n.prototype.applyPlacement=function(t,e){var i,o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),t.top=t.top+a,t.left=t.left+r,g.offset.setOffset(o[0],g.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),o.addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;if("top"==e&&h!=s&&(i=!0,t.top=t.top+s-h),/bottom|top/.test(e)){var p=0;t.left<0&&(p=-2*t.left,t.left=0,o.offset(t),l=o[0].offsetWidth,h=o[0].offsetHeight),this.replaceArrow(p-n+l,l,"left")}else this.replaceArrow(h-s,h,"top");i&&o.offset(t)},n.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},n.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},n.prototype.hide=function(){function t(){"in"!=e.hoverState&&i.detach(),e.$element.trigger("hidden.bs."+e.type)}var e=this,i=this.tip(),o=g.Event("hide.bs."+this.type);if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&this.$tip.hasClass("fade")?i.one(g.support.transition.end,t).emulateTransitionEnd(150):t(),this.hoverState=null,this},n.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(){var t=this.$element[0];return g.extend({},"function"==typeof t.getBoundingClientRect?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},n.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},n.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},n.prototype.tip=function(){return this.$tip=this.$tip||g(this.options.template)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(t){var e=t?g(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;e.tip().hasClass("in")?e.leave(e):e.enter(e)},n.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var t=g.fn.tooltip;g.fn.tooltip=function(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;(e||"destroy"!=o)&&(e||t.data("bs.tooltip",e=new n(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=n,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=t,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype),(s.prototype.constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"string"==typeof i?"html":"append":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},s.prototype.tip=function(){return this.$tip||(this.$tip=n(this.options.template)),this.$tip};var t=n.fn.popover;n.fn.popover=function(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;(e||"destroy"!=o)&&(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery);