"use strict";var bootstrapModule=function(e){function t(e){this._queue=e||[],this._delayTimer=null}function i(e,t,i){var n={},o=0,a=0,s=0,r=1;for(var l in e)a++;if(0===a)return void(t&&t(n));for(var u in e)n[u]=new Image,n[u].onload=function(){++o>=a&&t&&t(n)},n[u].onerror=function(){++s>=r&&i&&i()},n[u].src=e[u]}function n(e,t,i){e.show().removeClass(t+" animated").addClass(t+" animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass(t+" animated"),i&&i()})}function o(e){this.conf={},$.extend(this.conf,e),this.swiper=null,this.loaderProgress=null,this.init()}return t.prototype.constructor=t,t.prototype.queueAll=function(e){var t=this,i=t._queue;!function n(){if(i.length>0){var o=i.shift(),a=o.fn,s=o.delay;t._delayTimer=setTimeout(function(){a.apply(e||{},[n].concat(Array.prototype.slice.call(arguments,0)))},s)}}()},t.prototype.clearQueue=function(){this._queue=[],clearTimeout(this._delayTimer)},o.prototype={constructor:o,init:function(){this.getUsefulElements(),this.initStyle(),this.showLoaderProgress(),i(this.conf.resources,$.proxy(this.loadPage,this))},getUsefulElements:function(){var e=this.conf.$el;this.$elements={$swiperContainer:$(".swiper-container",e).hide(),$loader:$(".loader",e),$progressText:$(".loader_progress",e),$swiperPage:$(".swiper-page",e)},this.$elements.$swiperPage.children().hide()},initStyle:function(){var e=this.conf.$el,t=e.width(),i=e.height(),n=1,o=t/360,a=i/600;n=a>o?o:a,n>2&&(n=2),this.ratio=n,this.$elements.$swiperPage.css("zoom",n)},loadPage:function(e){this.hideLoaderProgress(),n(this.$elements.$swiperContainer,"fadeIn"),this.initSwiper()},showLoaderProgress:function(){var e=3,t=this;t.loaderProgress=setInterval(function(){e+=25,t.$elements.$progressText.text(e+"%"),e>=77&&clearInterval(t.loaderProgress)},400)},hideLoaderProgress:function(){var e=this,t=e.$elements;setTimeout(function(){clearInterval(e.loaderProgress),t.$progressText.text("100%"),t.$loader.addClass("scaleOut"),setTimeout(function(){t.$loader.remove()},900)},300)},initSwiper:function(){var e=this;e.swiper||(e.swiper=new Swiper(".swiper-container",{speed:400,direction:"vertical",effect:"slide",swipeToNext:!1,simulateTouch:!0,mousewheelControl:!0,onInit:function(t){setTimeout(function(){e.playPageAnimate(1)},800)},onSlideChangeEnd:function(t){e.hidePageElements(t.previousIndex+1),e.playPageAnimate(t.activeIndex+1)}}))},playPageAnimate:function(e,i){var n=this.conf.animateQueueList,o=[],a=[];n&&n.length>0&&(a=n[e-1],o=a.slice(0),this["page"+e+"AnimateQueue"]=new t(o),this["page"+e+"AnimateQueue"].queueAll())},hidePageElements:function(e,t){var i=this.$elements,n=$(i.$swiperPage[e-1]).children(),o=this["page"+e+"AnimateQueue"];o&&"clearQueue"in o&&o.clearQueue(),n.hide()}},{Bootstrap:o,playAnimate:n}}(window,void 0);!function(e){var t={$el:$(".container"),resources:{sampleImg1:"images/sample_img1.jpg",sampleImg2:"images/sample_img2.jpg",sampleImg3:"images/sample_img3.jpg",sampleImg4:"images/sample_img4.jpg"},animateQueueList:[[{delay:500,fn:function(e){bootstrapModule.playAnimate($("#sample_img1"),"fadeInLeft"),e()}},{delay:500,fn:function(){bootstrapModule.playAnimate($("#sample_img2"),"bounceInUp")}}],[{delay:500,fn:function(e){bootstrapModule.playAnimate($("#sample_img3"),"zoomInRight"),e()}},{delay:500,fn:function(){bootstrapModule.playAnimate($("#sample_img4"),"bounceInUp")}}]]};new bootstrapModule.Bootstrap(t)}(window,void 0);