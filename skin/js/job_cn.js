
/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.2.1
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!function(e,n){var o=e();e.fn.dropdownHover=function(t){return"ontouchstart"in document?this:(o=o.add(this.parent()),this.each(function(){function r(){d.parents(".navbar").find(".navbar-toggle").is(":visible")||(n.clearTimeout(a),n.clearTimeout(i),i=n.setTimeout(function(){o.find(":focus").blur(),v.instantlyCloseOthers===!0&&o.removeClass("open"),n.clearTimeout(i),d.attr("aria-expanded","true"),s.addClass("open"),d.trigger(h)},v.hoverDelay))}var a,i,d=e(this),s=d.parent(),u={delay:500,hoverDelay:0,instantlyCloseOthers:!0},l={delay:e(this).data("delay"),hoverDelay:e(this).data("hover-delay"),instantlyCloseOthers:e(this).data("close-others")},h="show.bs.dropdown",c="hide.bs.dropdown",v=e.extend(!0,{},u,t,l);s.hover(function(e){return s.hasClass("open")||d.is(e.target)?void r(e):!0},function(){n.clearTimeout(i),a=n.setTimeout(function(){d.attr("aria-expanded","false"),s.removeClass("open"),d.trigger(c)},v.delay)}),d.hover(function(e){return s.hasClass("open")||s.is(e.target)?void r(e):!0}),s.find(".dropdown-submenu").each(function(){var o,t=e(this);t.hover(function(){n.clearTimeout(o),t.children(".dropdown-menu").show(),t.siblings().children(".dropdown-menu").hide()},function(){var e=t.children(".dropdown-menu");o=n.setTimeout(function(){e.hide()},v.delay)})})}))},e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window);
/*!
 * VERSION: 1.20.2
 * DATE: 2017-06-30
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.20.2",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.2",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f=this.duration()>99999999999?this.recent().endTime(!1):this._duration,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7&&a>=0)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.2",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7&&a>=0)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<p&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),q!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";
for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.0",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h="none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,
m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},q.config=b.config=function(a,c){return new b(a,c)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p=f.length,s=p;--p>-1;)(l=q[f[p]]||new r(f[p],[])).gsClass?(i[p]=l.gsClass,s--):j&&l.sc.push(this);if(0===s&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){p=a||1/m,q=Math.min(b,p,0)},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,X){j||i.wake();var c=this.vars.useFrames?W:X;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&"hidden"!==d.visibilityState&&i.wake();var a=setTimeout(E,2e3);a.unref&&a.unref()};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Z(),this.render(a,b,!1),J.length&&Z())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||m,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),
a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?V[G.defaultOverwrite]:"number"==typeof i?i>>0:V[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=$(f,this,!1),1===i&&this._siblings[e].length>1&&aa(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=$(b,this,!1),1===i&&this._siblings.length>1&&aa(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)U[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!R[c]||R[c]&&R[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.20.2",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/[\+-]=-?[\.\d]/,N=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},O=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=N,M.test(b)&&(l.end=0),l},P=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=O(m,n?parseFloat(o.s)+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},Q=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:O},R=G._plugins={},S=Q.tweenLookup={},T=0,U=Q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},W=D._rootFramesTimeline=new F,X=D._rootTimeline=new F,Y=30,Z=Q.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};X._startTime=i.time,W._startTime=i.frame,X._active=W._active=!0,setTimeout(Z,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Z(),X.render((i.time-X._startTime)*X._timeScale,!1,!1),W.render((i.frame-W._startTime)*W._timeScale,!1,!1),J.length&&Z(),i.frame>=Y){Y=i.frame+(parseInt(G.autoSleep,10)||120);for(c in S){for(b=S[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete S[c]}if(c=X._first,(!c||c._paused)&&G.autoSleep&&!W._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var $=function(a,b,c){var d,e,f=a._gsTweenID;if(S[f||(a._gsTweenID=f="t"+T++)]||(S[f]={target:a,tweens:[]}),b&&(d=S[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return S[f].tweens},_=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},aa=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ba(b,0,o),0===ba(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!_(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ba=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)U[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Z(),this.vars.css||b.style&&b!==a&&b.nodeType&&R.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],U[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(R[g]&&(j=new R[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=P.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&aa(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!_(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=$(d[c],this,!0);else this._siblings=$(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=$(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ca=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ca.prototype},!0);if(h=ca.prototype,ca.version="1.19.0",ca.API=2,h._firstPT=null,h._addTween=P,h.setRatio=N,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ca.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ca.API&&(R[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ca.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ca(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ca.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/**
 * jquery-s2t v0.1.0
 *
 * https://github.com/hustlzp/jquery-s2t
 * A jQuery plugin to convert between Simplified Chinese and Traditional Chinese.
 * Tested in IE6+, Chrome, Firefox.
 *
 * Copyright 2013-2014 hustlzp
 * Released under the MIT license
 */

(function($) {

    // 共收录2553条简繁对照
    // 尚未考证是否正确、重复、完整

    /**
     * 简体字
     * @const
     */
    var S = new String('万与丑专业丛东丝丢两严丧个丬丰临为丽举么义乌乐乔习乡书买乱争于亏云亘亚产亩亲亵亸亿仅从仑仓仪们价众优伙会伛伞伟传伤伥伦伧伪伫体余佣佥侠侣侥侦侧侨侩侪侬俣俦俨俩俪俭债倾偬偻偾偿傥傧储傩儿兑兖党兰关兴兹养兽冁内冈册写军农冢冯冲决况冻净凄凉凌减凑凛几凤凫凭凯击凼凿刍划刘则刚创删别刬刭刽刿剀剂剐剑剥剧劝办务劢动励劲劳势勋勐勚匀匦匮区医华协单卖卢卤卧卫却卺厂厅历厉压厌厍厕厢厣厦厨厩厮县参叆叇双发变叙叠叶号叹叽吁后吓吕吗吣吨听启吴呒呓呕呖呗员呙呛呜咏咔咙咛咝咤咴咸哌响哑哒哓哔哕哗哙哜哝哟唛唝唠唡唢唣唤唿啧啬啭啮啰啴啸喷喽喾嗫呵嗳嘘嘤嘱噜噼嚣嚯团园囱围囵国图圆圣圹场坂坏块坚坛坜坝坞坟坠垄垅垆垒垦垧垩垫垭垯垱垲垴埘埙埚埝埯堑堕塆墙壮声壳壶壸处备复够头夸夹夺奁奂奋奖奥妆妇妈妩妪妫姗姜娄娅娆娇娈娱娲娴婳婴婵婶媪嫒嫔嫱嬷孙学孪宁宝实宠审宪宫宽宾寝对寻导寿将尔尘尧尴尸尽层屃屉届属屡屦屿岁岂岖岗岘岙岚岛岭岳岽岿峃峄峡峣峤峥峦崂崃崄崭嵘嵚嵛嵝嵴巅巩巯币帅师帏帐帘帜带帧帮帱帻帼幂幞干并广庄庆庐庑库应庙庞废庼廪开异弃张弥弪弯弹强归当录彟彦彻径徕御忆忏忧忾怀态怂怃怄怅怆怜总怼怿恋恳恶恸恹恺恻恼恽悦悫悬悭悯惊惧惨惩惫惬惭惮惯愍愠愤愦愿慑慭憷懑懒懔戆戋戏戗战戬户扎扑扦执扩扪扫扬扰抚抛抟抠抡抢护报担拟拢拣拥拦拧拨择挂挚挛挜挝挞挟挠挡挢挣挤挥挦捞损捡换捣据捻掳掴掷掸掺掼揸揽揿搀搁搂搅携摄摅摆摇摈摊撄撑撵撷撸撺擞攒敌敛数斋斓斗斩断无旧时旷旸昙昼昽显晋晒晓晔晕晖暂暧札术朴机杀杂权条来杨杩杰极构枞枢枣枥枧枨枪枫枭柜柠柽栀栅标栈栉栊栋栌栎栏树栖样栾桊桠桡桢档桤桥桦桧桨桩梦梼梾检棂椁椟椠椤椭楼榄榇榈榉槚槛槟槠横樯樱橥橱橹橼檐檩欢欤欧歼殁殇残殒殓殚殡殴毁毂毕毙毡毵氇气氢氩氲汇汉污汤汹沓沟没沣沤沥沦沧沨沩沪沵泞泪泶泷泸泺泻泼泽泾洁洒洼浃浅浆浇浈浉浊测浍济浏浐浑浒浓浔浕涂涌涛涝涞涟涠涡涢涣涤润涧涨涩淀渊渌渍渎渐渑渔渖渗温游湾湿溃溅溆溇滗滚滞滟滠满滢滤滥滦滨滩滪漤潆潇潋潍潜潴澜濑濒灏灭灯灵灾灿炀炉炖炜炝点炼炽烁烂烃烛烟烦烧烨烩烫烬热焕焖焘煅煳熘爱爷牍牦牵牺犊犟状犷犸犹狈狍狝狞独狭狮狯狰狱狲猃猎猕猡猪猫猬献獭玑玙玚玛玮环现玱玺珉珏珐珑珰珲琎琏琐琼瑶瑷璇璎瓒瓮瓯电画畅畲畴疖疗疟疠疡疬疮疯疱疴痈痉痒痖痨痪痫痴瘅瘆瘗瘘瘪瘫瘾瘿癞癣癫癯皑皱皲盏盐监盖盗盘眍眦眬着睁睐睑瞒瞩矫矶矾矿砀码砖砗砚砜砺砻砾础硁硅硕硖硗硙硚确硷碍碛碜碱碹磙礼祎祢祯祷祸禀禄禅离秃秆种积称秽秾稆税稣稳穑穷窃窍窑窜窝窥窦窭竖竞笃笋笔笕笺笼笾筑筚筛筜筝筹签简箓箦箧箨箩箪箫篑篓篮篱簖籁籴类籼粜粝粤粪粮糁糇紧絷纟纠纡红纣纤纥约级纨纩纪纫纬纭纮纯纰纱纲纳纴纵纶纷纸纹纺纻纼纽纾线绀绁绂练组绅细织终绉绊绋绌绍绎经绐绑绒结绔绕绖绗绘给绚绛络绝绞统绠绡绢绣绤绥绦继绨绩绪绫绬续绮绯绰绱绲绳维绵绶绷绸绹绺绻综绽绾绿缀缁缂缃缄缅缆缇缈缉缊缋缌缍缎缏缐缑缒缓缔缕编缗缘缙缚缛缜缝缞缟缠缡缢缣缤缥缦缧缨缩缪缫缬缭缮缯缰缱缲缳缴缵罂网罗罚罢罴羁羟羡翘翙翚耢耧耸耻聂聋职聍联聩聪肃肠肤肷肾肿胀胁胆胜胧胨胪胫胶脉脍脏脐脑脓脔脚脱脶脸腊腌腘腭腻腼腽腾膑臜舆舣舰舱舻艰艳艹艺节芈芗芜芦苁苇苈苋苌苍苎苏苘苹茎茏茑茔茕茧荆荐荙荚荛荜荞荟荠荡荣荤荥荦荧荨荩荪荫荬荭荮药莅莜莱莲莳莴莶获莸莹莺莼萚萝萤营萦萧萨葱蒇蒉蒋蒌蓝蓟蓠蓣蓥蓦蔷蔹蔺蔼蕲蕴薮藁藓虏虑虚虫虬虮虽虾虿蚀蚁蚂蚕蚝蚬蛊蛎蛏蛮蛰蛱蛲蛳蛴蜕蜗蜡蝇蝈蝉蝎蝼蝾螀螨蟏衅衔补衬衮袄袅袆袜袭袯装裆裈裢裣裤裥褛褴襁襕见观觃规觅视觇览觉觊觋觌觍觎觏觐觑觞触觯詟誉誊讠计订讣认讥讦讧讨让讪讫训议讯记讱讲讳讴讵讶讷许讹论讻讼讽设访诀证诂诃评诅识诇诈诉诊诋诌词诎诏诐译诒诓诔试诖诗诘诙诚诛诜话诞诟诠诡询诣诤该详诧诨诩诪诫诬语诮误诰诱诲诳说诵诶请诸诹诺读诼诽课诿谀谁谂调谄谅谆谇谈谊谋谌谍谎谏谐谑谒谓谔谕谖谗谘谙谚谛谜谝谞谟谠谡谢谣谤谥谦谧谨谩谪谫谬谭谮谯谰谱谲谳谴谵谶谷豮贝贞负贠贡财责贤败账货质贩贪贫贬购贮贯贰贱贲贳贴贵贶贷贸费贺贻贼贽贾贿赀赁赂赃资赅赆赇赈赉赊赋赌赍赎赏赐赑赒赓赔赕赖赗赘赙赚赛赜赝赞赟赠赡赢赣赪赵赶趋趱趸跃跄跖跞践跶跷跸跹跻踊踌踪踬踯蹑蹒蹰蹿躏躜躯车轧轨轩轪轫转轭轮软轰轱轲轳轴轵轶轷轸轹轺轻轼载轾轿辀辁辂较辄辅辆辇辈辉辊辋辌辍辎辏辐辑辒输辔辕辖辗辘辙辚辞辩辫边辽达迁过迈运还这进远违连迟迩迳迹适选逊递逦逻遗遥邓邝邬邮邹邺邻郁郄郏郐郑郓郦郧郸酝酦酱酽酾酿释里鉅鉴銮錾钆钇针钉钊钋钌钍钎钏钐钑钒钓钔钕钖钗钘钙钚钛钝钞钟钠钡钢钣钤钥钦钧钨钩钪钫钬钭钮钯钰钱钲钳钴钵钶钷钸钹钺钻钼钽钾钿铀铁铂铃铄铅铆铈铉铊铋铍铎铏铐铑铒铕铗铘铙铚铛铜铝铞铟铠铡铢铣铤铥铦铧铨铪铫铬铭铮铯铰铱铲铳铴铵银铷铸铹铺铻铼铽链铿销锁锂锃锄锅锆锇锈锉锊锋锌锍锎锏锐锑锒锓锔锕锖锗错锚锜锞锟锠锡锢锣锤锥锦锨锩锫锬锭键锯锰锱锲锳锴锵锶锷锸锹锺锻锼锽锾锿镀镁镂镃镆镇镈镉镊镌镍镎镏镐镑镒镕镖镗镙镚镛镜镝镞镟镠镡镢镣镤镥镦镧镨镩镪镫镬镭镮镯镰镱镲镳镴镶长门闩闪闫闬闭问闯闰闱闲闳间闵闶闷闸闹闺闻闼闽闾闿阀阁阂阃阄阅阆阇阈阉阊阋阌阍阎阏阐阑阒阓阔阕阖阗阘阙阚阛队阳阴阵阶际陆陇陈陉陕陧陨险随隐隶隽难雏雠雳雾霁霉霭靓静靥鞑鞒鞯鞴韦韧韨韩韪韫韬韵页顶顷顸项顺须顼顽顾顿颀颁颂颃预颅领颇颈颉颊颋颌颍颎颏颐频颒颓颔颕颖颗题颙颚颛颜额颞颟颠颡颢颣颤颥颦颧风飏飐飑飒飓飔飕飖飗飘飙飚飞飨餍饤饥饦饧饨饩饪饫饬饭饮饯饰饱饲饳饴饵饶饷饸饹饺饻饼饽饾饿馀馁馂馃馄馅馆馇馈馉馊馋馌馍馎馏馐馑馒馓馔馕马驭驮驯驰驱驲驳驴驵驶驷驸驹驺驻驼驽驾驿骀骁骂骃骄骅骆骇骈骉骊骋验骍骎骏骐骑骒骓骔骕骖骗骘骙骚骛骜骝骞骟骠骡骢骣骤骥骦骧髅髋髌鬓魇魉鱼鱽鱾鱿鲀鲁鲂鲄鲅鲆鲇鲈鲉鲊鲋鲌鲍鲎鲏鲐鲑鲒鲓鲔鲕鲖鲗鲘鲙鲚鲛鲜鲝鲞鲟鲠鲡鲢鲣鲤鲥鲦鲧鲨鲩鲪鲫鲬鲭鲮鲯鲰鲱鲲鲳鲴鲵鲶鲷鲸鲹鲺鲻鲼鲽鲾鲿鳀鳁鳂鳃鳄鳅鳆鳇鳈鳉鳊鳋鳌鳍鳎鳏鳐鳑鳒鳓鳔鳕鳖鳗鳘鳙鳛鳜鳝鳞鳟鳠鳡鳢鳣鸟鸠鸡鸢鸣鸤鸥鸦鸧鸨鸩鸪鸫鸬鸭鸮鸯鸰鸱鸲鸳鸴鸵鸶鸷鸸鸹鸺鸻鸼鸽鸾鸿鹀鹁鹂鹃鹄鹅鹆鹇鹈鹉鹊鹋鹌鹍鹎鹏鹐鹑鹒鹓鹔鹕鹖鹗鹘鹚鹛鹜鹝鹞鹟鹠鹡鹢鹣鹤鹥鹦鹧鹨鹩鹪鹫鹬鹭鹯鹰鹱鹲鹳鹴鹾麦麸黄黉黡黩黪黾鼋鼌鼍鼗鼹齄齐齑齿龀龁龂龃龄龅龆龇龈龉龊龋龌龙龚龛龟志制咨只里系范松没尝尝闹面准钟别闲干尽脏拼');

    /**
     * 繁体字
     * @const
     */
    var T = new String('萬與醜專業叢東絲丟兩嚴喪個爿豐臨為麗舉麼義烏樂喬習鄉書買亂爭於虧雲亙亞產畝親褻嚲億僅從侖倉儀們價眾優夥會傴傘偉傳傷倀倫傖偽佇體餘傭僉俠侶僥偵側僑儈儕儂俁儔儼倆儷儉債傾傯僂僨償儻儐儲儺兒兌兗黨蘭關興茲養獸囅內岡冊寫軍農塚馮衝決況凍淨淒涼淩減湊凜幾鳳鳧憑凱擊氹鑿芻劃劉則剛創刪別剗剄劊劌剴劑剮劍剝劇勸辦務勱動勵勁勞勢勳猛勩勻匭匱區醫華協單賣盧鹵臥衛卻巹廠廳曆厲壓厭厙廁廂厴廈廚廄廝縣參靉靆雙發變敘疊葉號歎嘰籲後嚇呂嗎唚噸聽啟吳嘸囈嘔嚦唄員咼嗆嗚詠哢嚨嚀噝吒噅鹹呱響啞噠嘵嗶噦嘩噲嚌噥喲嘜嗊嘮啢嗩唕喚呼嘖嗇囀齧囉嘽嘯噴嘍嚳囁嗬噯噓嚶囑嚕劈囂謔團園囪圍圇國圖圓聖壙場阪壞塊堅壇壢壩塢墳墜壟壟壚壘墾坰堊墊埡墶壋塏堖塒塤堝墊垵塹墮壪牆壯聲殼壺壼處備複夠頭誇夾奪奩奐奮獎奧妝婦媽嫵嫗媯姍薑婁婭嬈嬌孌娛媧嫻嫿嬰嬋嬸媼嬡嬪嬙嬤孫學孿寧寶實寵審憲宮寬賓寢對尋導壽將爾塵堯尷屍盡層屭屜屆屬屢屨嶼歲豈嶇崗峴嶴嵐島嶺嶽崠巋嶨嶧峽嶢嶠崢巒嶗崍嶮嶄嶸嶔崳嶁脊巔鞏巰幣帥師幃帳簾幟帶幀幫幬幘幗冪襆幹並廣莊慶廬廡庫應廟龐廢廎廩開異棄張彌弳彎彈強歸當錄彠彥徹徑徠禦憶懺憂愾懷態慫憮慪悵愴憐總懟懌戀懇惡慟懨愷惻惱惲悅愨懸慳憫驚懼慘懲憊愜慚憚慣湣慍憤憒願懾憖怵懣懶懍戇戔戲戧戰戩戶紮撲扡執擴捫掃揚擾撫拋摶摳掄搶護報擔擬攏揀擁攔擰撥擇掛摯攣掗撾撻挾撓擋撟掙擠揮撏撈損撿換搗據撚擄摑擲撣摻摜摣攬撳攙擱摟攪攜攝攄擺搖擯攤攖撐攆擷擼攛擻攢敵斂數齋斕鬥斬斷無舊時曠暘曇晝曨顯晉曬曉曄暈暉暫曖劄術樸機殺雜權條來楊榪傑極構樅樞棗櫪梘棖槍楓梟櫃檸檉梔柵標棧櫛櫳棟櫨櫟欄樹棲樣欒棬椏橈楨檔榿橋樺檜槳樁夢檮棶檢欞槨櫝槧欏橢樓欖櫬櫚櫸檟檻檳櫧橫檣櫻櫫櫥櫓櫞簷檁歡歟歐殲歿殤殘殞殮殫殯毆毀轂畢斃氈毿氌氣氫氬氳彙漢汙湯洶遝溝沒灃漚瀝淪滄渢溈滬濔濘淚澩瀧瀘濼瀉潑澤涇潔灑窪浹淺漿澆湞溮濁測澮濟瀏滻渾滸濃潯濜塗湧濤澇淶漣潿渦溳渙滌潤澗漲澀澱淵淥漬瀆漸澠漁瀋滲溫遊灣濕潰濺漵漊潷滾滯灩灄滿瀅濾濫灤濱灘澦濫瀠瀟瀲濰潛瀦瀾瀨瀕灝滅燈靈災燦煬爐燉煒熗點煉熾爍爛烴燭煙煩燒燁燴燙燼熱煥燜燾煆糊溜愛爺牘犛牽犧犢強狀獷獁猶狽麅獮獰獨狹獅獪猙獄猻獫獵獼玀豬貓蝟獻獺璣璵瑒瑪瑋環現瑲璽瑉玨琺瓏璫琿璡璉瑣瓊瑤璦璿瓔瓚甕甌電畫暢佘疇癤療瘧癘瘍鬁瘡瘋皰屙癰痙癢瘂癆瘓癇癡癉瘮瘞瘺癟癱癮癭癩癬癲臒皚皺皸盞鹽監蓋盜盤瞘眥矓著睜睞瞼瞞矚矯磯礬礦碭碼磚硨硯碸礪礱礫礎硜矽碩硤磽磑礄確鹼礙磧磣堿镟滾禮禕禰禎禱禍稟祿禪離禿稈種積稱穢穠穭稅穌穩穡窮竊竅窯竄窩窺竇窶豎競篤筍筆筧箋籠籩築篳篩簹箏籌簽簡籙簀篋籜籮簞簫簣簍籃籬籪籟糴類秈糶糲粵糞糧糝餱緊縶糸糾紆紅紂纖紇約級紈纊紀紉緯紜紘純紕紗綱納紝縱綸紛紙紋紡紵紖紐紓線紺絏紱練組紳細織終縐絆紼絀紹繹經紿綁絨結絝繞絰絎繪給絢絳絡絕絞統綆綃絹繡綌綏絛繼綈績緒綾緓續綺緋綽緔緄繩維綿綬繃綢綯綹綣綜綻綰綠綴緇緙緗緘緬纜緹緲緝縕繢緦綞緞緶線緱縋緩締縷編緡緣縉縛縟縝縫縗縞纏縭縊縑繽縹縵縲纓縮繆繅纈繚繕繒韁繾繰繯繳纘罌網羅罰罷羆羈羥羨翹翽翬耮耬聳恥聶聾職聹聯聵聰肅腸膚膁腎腫脹脅膽勝朧腖臚脛膠脈膾髒臍腦膿臠腳脫腡臉臘醃膕齶膩靦膃騰臏臢輿艤艦艙艫艱豔艸藝節羋薌蕪蘆蓯葦藶莧萇蒼苧蘇檾蘋莖蘢蔦塋煢繭荊薦薘莢蕘蓽蕎薈薺蕩榮葷滎犖熒蕁藎蓀蔭蕒葒葤藥蒞蓧萊蓮蒔萵薟獲蕕瑩鶯蓴蘀蘿螢營縈蕭薩蔥蕆蕢蔣蔞藍薊蘺蕷鎣驀薔蘞藺藹蘄蘊藪槁蘚虜慮虛蟲虯蟣雖蝦蠆蝕蟻螞蠶蠔蜆蠱蠣蟶蠻蟄蛺蟯螄蠐蛻蝸蠟蠅蟈蟬蠍螻蠑螿蟎蠨釁銜補襯袞襖嫋褘襪襲襏裝襠褌褳襝褲襇褸襤繈襴見觀覎規覓視覘覽覺覬覡覿覥覦覯覲覷觴觸觶讋譽謄訁計訂訃認譏訐訌討讓訕訖訓議訊記訒講諱謳詎訝訥許訛論訩訟諷設訪訣證詁訶評詛識詗詐訴診詆謅詞詘詔詖譯詒誆誄試詿詩詰詼誠誅詵話誕詬詮詭詢詣諍該詳詫諢詡譸誡誣語誚誤誥誘誨誑說誦誒請諸諏諾讀諑誹課諉諛誰諗調諂諒諄誶談誼謀諶諜謊諫諧謔謁謂諤諭諼讒諮諳諺諦謎諞諝謨讜謖謝謠謗諡謙謐謹謾謫譾謬譚譖譙讕譜譎讞譴譫讖穀豶貝貞負貟貢財責賢敗賬貨質販貪貧貶購貯貫貳賤賁貰貼貴貺貸貿費賀貽賊贄賈賄貲賃賂贓資賅贐賕賑賚賒賦賭齎贖賞賜贔賙賡賠賧賴賵贅賻賺賽賾贗讚贇贈贍贏贛赬趙趕趨趲躉躍蹌蹠躒踐躂蹺蹕躚躋踴躊蹤躓躑躡蹣躕躥躪躦軀車軋軌軒軑軔轉軛輪軟轟軲軻轤軸軹軼軤軫轢軺輕軾載輊轎輈輇輅較輒輔輛輦輩輝輥輞輬輟輜輳輻輯轀輸轡轅轄輾轆轍轔辭辯辮邊遼達遷過邁運還這進遠違連遲邇逕跡適選遜遞邐邏遺遙鄧鄺鄔郵鄒鄴鄰鬱郤郟鄶鄭鄆酈鄖鄲醞醱醬釅釃釀釋裏钜鑒鑾鏨釓釔針釘釗釙釕釷釺釧釤鈒釩釣鍆釹鍚釵鈃鈣鈈鈦鈍鈔鍾鈉鋇鋼鈑鈐鑰欽鈞鎢鉤鈧鈁鈥鈄鈕鈀鈺錢鉦鉗鈷缽鈳鉕鈽鈸鉞鑽鉬鉭鉀鈿鈾鐵鉑鈴鑠鉛鉚鈰鉉鉈鉍鈹鐸鉶銬銠鉺銪鋏鋣鐃銍鐺銅鋁銱銦鎧鍘銖銑鋌銩銛鏵銓鉿銚鉻銘錚銫鉸銥鏟銃鐋銨銀銣鑄鐒鋪鋙錸鋱鏈鏗銷鎖鋰鋥鋤鍋鋯鋨鏽銼鋝鋒鋅鋶鐦鐧銳銻鋃鋟鋦錒錆鍺錯錨錡錁錕錩錫錮鑼錘錐錦鍁錈錇錟錠鍵鋸錳錙鍥鍈鍇鏘鍶鍔鍤鍬鍾鍛鎪鍠鍰鎄鍍鎂鏤鎡鏌鎮鎛鎘鑷鐫鎳鎿鎦鎬鎊鎰鎔鏢鏜鏍鏰鏞鏡鏑鏃鏇鏐鐔钁鐐鏷鑥鐓鑭鐠鑹鏹鐙鑊鐳鐶鐲鐮鐿鑔鑣鑞鑲長門閂閃閆閈閉問闖閏闈閑閎間閔閌悶閘鬧閨聞闥閩閭闓閥閣閡閫鬮閱閬闍閾閹閶鬩閿閽閻閼闡闌闃闠闊闋闔闐闒闕闞闤隊陽陰陣階際陸隴陳陘陝隉隕險隨隱隸雋難雛讎靂霧霽黴靄靚靜靨韃鞽韉韝韋韌韍韓韙韞韜韻頁頂頃頇項順須頊頑顧頓頎頒頌頏預顱領頗頸頡頰頲頜潁熲頦頤頻頮頹頷頴穎顆題顒顎顓顏額顳顢顛顙顥纇顫顬顰顴風颺颭颮颯颶颸颼颻飀飄飆飆飛饗饜飣饑飥餳飩餼飪飫飭飯飲餞飾飽飼飿飴餌饒餉餄餎餃餏餅餑餖餓餘餒餕餜餛餡館餷饋餶餿饞饁饃餺餾饈饉饅饊饌饢馬馭馱馴馳驅馹駁驢駔駛駟駙駒騶駐駝駑駕驛駘驍罵駰驕驊駱駭駢驫驪騁驗騂駸駿騏騎騍騅騌驌驂騙騭騤騷騖驁騮騫騸驃騾驄驏驟驥驦驤髏髖髕鬢魘魎魚魛魢魷魨魯魴魺鮁鮃鯰鱸鮋鮓鮒鮊鮑鱟鮍鮐鮭鮚鮳鮪鮞鮦鰂鮜鱠鱭鮫鮮鮺鯗鱘鯁鱺鰱鰹鯉鰣鰷鯀鯊鯇鮶鯽鯒鯖鯪鯕鯫鯡鯤鯧鯝鯢鯰鯛鯨鯵鯴鯔鱝鰈鰏鱨鯷鰮鰃鰓鱷鰍鰒鰉鰁鱂鯿鰠鼇鰭鰨鰥鰩鰟鰜鰳鰾鱈鱉鰻鰵鱅鰼鱖鱔鱗鱒鱯鱤鱧鱣鳥鳩雞鳶鳴鳲鷗鴉鶬鴇鴆鴣鶇鸕鴨鴞鴦鴒鴟鴝鴛鴬鴕鷥鷙鴯鴰鵂鴴鵃鴿鸞鴻鵐鵓鸝鵑鵠鵝鵒鷳鵜鵡鵲鶓鵪鶤鵯鵬鵮鶉鶊鵷鷫鶘鶡鶚鶻鶿鶥鶩鷊鷂鶲鶹鶺鷁鶼鶴鷖鸚鷓鷚鷯鷦鷲鷸鷺鸇鷹鸌鸏鸛鸘鹺麥麩黃黌黶黷黲黽黿鼂鼉鞀鼴齇齊齏齒齔齕齗齟齡齙齠齜齦齬齪齲齷龍龔龕龜誌製谘隻裡係範鬆冇嚐嘗鬨麵準鐘彆閒乾儘臟拚');

    /**
     * 转换文本
     * @param {String} str - 待转换的文本
     * @param {Boolean} toT - 是否转换成繁体
     * @returns {String} - 转换结果
     */
    function tranStr(str, toT) {
        var i;
        var letter;
        var code;
        var isChinese;
        var index;
        var src, des;
        var result = '';

        if (toT) {
            src = S;
            des = T;
        } else {
            src = T;
            des = S;
        }

        if (typeof str !== "string") {
            return str;
        }

        for (i = 0; i < str.length; i++) {
            letter = str.charAt(i);
            code = str.charCodeAt(i); 
            
            // 根据字符的Unicode判断是否为汉字，以提高性能
            // 参考:
            // [1] http://www.unicode.org
            // [2] http://zh.wikipedia.org/wiki/Unicode%E5%AD%97%E7%AC%A6%E5%88%97%E8%A1%A8
            // [3] http://xylonwang.iteye.com/blog/519552
            isChinese = (code > 0x3400 && code < 0x9FC3) || (code > 0xF900 && code < 0xFA6A);

            if (!isChinese) {
                result += letter;
                continue;
            }

            index = src.indexOf(letter);

            if (index !== -1) {
                result += des.charAt(index);
            } else {
                result += letter;
            }
        }

        return result;
    }

    /**
     * 转换HTML Element属性
     * @param {Element} element - 待转换的HTML Element节点
     * @param {String|Array} attr - 待转换的属性/属性列表
     * @param {Boolean} toT - 是否转换成繁体
     */
    function tranAttr(element, attr, toT) {
        var i, attrValue;

        if (attr instanceof Array) {
            for(i = 0; i < attr.length; i++) {
                tranAttr(element, attr[i], toT);
            }
        } else {
            attrValue = element.getAttribute(attr);

            if (attrValue !== "" && attrValue !== null) {
                element.setAttribute(attr, tranStr(attrValue, toT));
            }
        }
    }

    /**
     * 转换HTML Element节点
     * @param {Element} element - 待转换的HTML Element节点
     * @param {Boolean} toT - 是否转换成繁体
     */
    function tranElement(element, toT) {
        var i;
        var childNodes;

        if (element.nodeType !== 1) {
            return;
        }

        childNodes = element.childNodes;

        for (i = 0; i < childNodes.length; i++) {
            var childNode = childNodes.item(i);

            // 若为HTML Element节点
            if (childNode.nodeType === 1) {
                // 对以下标签不做处理
                if ("|BR|HR|TEXTAREA|SCRIPT|OBJECT|EMBED|".indexOf("|" + childNode.tagName + "|") !== -1) {
                    continue;
                }
                
                tranAttr(childNode, ['title', 'data-original-title', 'alt', 'placeholder'], toT);

                // input 标签
                // 对text类型的input输入框不做处理
                if (childNode.tagName === "INPUT"
                    && childNode.value !== ""
                    && childNode.type !== "text"
                    && childNode.type !== "hidden")
                {
                    childNode.value = tranStr(childNode.value, toT);
                }

                // 继续递归调用
                tranElement(childNode, toT);
            } else if (childNode.nodeType === 3) {  // 若为文本节点
                childNode.data = tranStr(childNode.data, toT);
            }
        }
    }

    // 扩展jQuery全局方法
    $.extend({
        /**
         * 文本简转繁
         * @param {String} str - 待转换的文本
         * @returns {String} 转换结果
         */
        s2t: function(str) {
            return tranStr(str, true);
        },

        /**
         * 文本繁转简
         * @param {String} str - 待转换的文本
         * @returns {String} 转换结果
         */
        t2s: function(str) {
            return tranStr(str, false);
        }
    });

    // 扩展jQuery对象方法
    $.fn.extend({
        /**
         * jQuery Objects简转繁
         * @this {jQuery Objects} 待转换的jQuery Objects
         */
        s2t: function() {
            return this.each(function() {
                tranElement(this, true);
            });
        },

        /**
         * jQuery Objects繁转简
         * @this {jQuery Objects} 待转换的jQuery Objects
         */
        t2s: function() {
            return this.each(function() {
                tranElement(this, false);
            });
        }
    });
}) (jQuery);

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function(elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

! function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
        function c(c, d) {
            var f, e = this;
            e.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: a(c),
                appendDots: a(c),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
                },
                dots: !0,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                placeHolder: met_lazyloadbg,
                lazyloadPrevNext:!1,
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, e.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
        }
        var b = 0;
        return c
    }(), b.prototype.activateADA = function() {
        var a = this;
        a.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null;
        else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({
                height: b
            }, a.options.speed)
        }
    }, b.prototype.animateSlide = function(b, c) {
        var d = {},
            e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
            left: b
        }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
            top: b
        }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
            animStart: e.currentLeft
        }).animate({
            animStart: b
        }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.getNavTarget = function() {
        var b = this,
            c = b.options.asNavFor;
        return c && null !== c && (c = a(c).not(b.$slider)), c
    }, b.prototype.asNavFor = function(b) {
        var c = this,
            d = c.getNavTarget();
        null !== d && "object" == typeof d && d.each(function() {
            var c = a(this).slick("getSlick");
            c.unslicked || c.slideHandler(b, !0)
        })
    }, b.prototype.applyTransition = function(a) {
        var b = this,
            c = {};
        b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function() {
        var a = this;
        a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function() {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function() {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;
        a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
    }, b.prototype.buildArrows = function() {
        var b = this;
        b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, b.prototype.buildDots = function() {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, b.prototype.buildOut = function() {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.buildRows = function() {
        var b, c, d, e, f, g, h, a = this;
        if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");
                for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");
                    for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);
                        g.get(k) && j.appendChild(g.get(k))
                    }
                    i.appendChild(j)
                }
                e.appendChild(i)
            }
            a.$slider.empty().append(e), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, b.prototype.checkResponsive = function(b, c) {
        var e, f, g, d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();
        if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;
            for (e in d.breakpoints) d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
        }
    }, b.prototype.changeSlide = function(b, c) {
        var f, g, h, d = this,
            e = a(b.currentTarget);
        switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function(a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];
        else
            for (var e in c) {
                if (a < c[e]) {
                    a = d;
                    break
                }
                d = c[e]
            }
        return a
    }, b.prototype.cleanUpEvents = function() {
        var b = this;
        b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.cleanUpSlideEvents = function() {
        var b = this;
        b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.cleanUpRows = function() {
        var b, a = this;
        a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
    }, b.prototype.clickHandler = function(a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function(b) {
        var c = this;
        c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            a(this).attr("style", a(this).data("originalStyling"))
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
    }, b.prototype.disableTransition = function(a) {
        var b = this,
            c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function(a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({
            zIndex: c.options.zIndex
        }), c.$slides.eq(a).animate({
            opacity: 1
        }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: c.options.zIndex
        }), b && setTimeout(function() {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.fadeSlideOut = function(a) {
        var b = this;
        b.cssTransitions === !1 ? b.$slides.eq(a).animate({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
            opacity: 0,
            zIndex: b.options.zIndex - 2
        }))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
        var b = this;
        null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.focusHandler = function() {
        var b = this;
        b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
            c.stopImmediatePropagation();
            var d = a(this);
            setTimeout(function() {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
            }, 0)
        })
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function() {
        var a = this,
            b = 0,
            c = 0,
            d = 0;
        if (a.options.infinite === !0)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else if (a.options.centerMode === !0) d = a.slideCount;
        else if (a.options.asNavFor)
            for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
        return d - 1
    }, b.prototype.getLeft = function(a) {
        var c, d, f, b = this,
            e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function() {
        var e, a = this,
            b = 0,
            c = 0,
            d = [];
        for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function() {
        return this
    }, b.prototype.getSlideCount = function() {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function(c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
        var c = this;
        c.changeSlide({
            data: {
                message: "index",
                index: parseInt(a)
            }
        }, b)
    }, b.prototype.init = function(b) {
        var c = this;
        a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
    }, b.prototype.initADA = function() {
        var b = this;
        b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
            a(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + b.instanceUid + c
            })
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
            a(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + b.instanceUid + c,
                id: "slick-slide" + b.instanceUid + c
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
    }, b.prototype.initArrowEvents = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, a.changeSlide))
    }, b.prototype.initDotEvents = function() {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
            message: "index"
        }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
    }, b.prototype.initSlideEvents = function() {
        var b = this;
        b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
    }, b.prototype.initializeEvents = function() {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
    }, b.prototype.keyHandler = function(a) {
        var b = this;
        a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
            data: {
                message: b.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }, b.prototype.lazyLoad = function() {
        function g(c) {
            a("img[data-lazy]", c).each(function() {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    ds = a(this).attr("data-srcset"),
                    e = document.createElement("img");
                c.animate({
                    opacity: 0
                }, 100, function() {
                    c.attr({
                        src: d,
                        srcset: ds
                    }).removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").animate({
                        opacity: 1
                    }, 200), b.$slider.trigger("lazyLoaded", [b, c, d])
                });
                e.onerror = function() {
                    c.removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
                }
            })
        }
        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
        if(b.options.lazyloadPrevNext && b.$slideTrack.find('.slick-slide').length>2){
            var slide_index=b.$slideTrack.find('.slick-active').index(),
                slide_prevnext_order=[slide_index-1,slide_index+1];
            for (var i = 0; i < 2; i++) {
                b.$slideTrack.find('.slick-slide:eq('+slide_prevnext_order[i]+') img').each(function(){
                    if($(this).attr('data-lazy')) $(this).attr({src:$(this).data('lazy')}).removeAttr('data-lazy').removeClass('slick-loading');
                    if($(this).attr('data-srcset')) $(this).attr({srcset:$(this).data('srcset')}).removeAttr('data-srcset');
                })
            }
        }
    }, b.prototype.loadSlider = function() {
        var a = this;
        if (a.options.placeHolder){
            a.$slideTrack.find('img[data-lazy]').each(function(index, el) {
                $(this).attr({src:a.options.placeHolder});
            });
        };
        a.setPosition(), a.$slideTrack.css({
            opacity: 1
        }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "next"
            }
        })
    }, b.prototype.orientationChange = function() {
        var a = this;
        a.checkResponsive(), a.setPosition()
    }, b.prototype.pause = b.prototype.slickPause = function() {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function() {
        var a = this;
        a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
    }, b.prototype.postSlide = function(a) {
        var b = this;
        b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
    }, b.prototype.prev = b.prototype.slickPrev = function() {
        var a = this;
        a.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, b.prototype.preventDefault = function(a) {
        a.preventDefault()
    }, b.prototype.progressiveLazyLoad = function(b) {
        b = b || 1;
        var e, f, fs, g, c = this,
            d = a("img[data-lazy]", c.$slider);
        d.length ? (e = d.first(), f = e.attr("data-lazy"), fs = e.attr("data-srcset"), g = document.createElement("img"), g.onload = function() {
            e.attr({
                src: f,
                srcset: fs
            }).removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
        }, g.onerror = function() {
            3 > b ? setTimeout(function() {
                c.progressiveLazyLoad(b + 1)
            }, 500) : (e.removeAttr("data-lazy").removeAttr("data-srcset").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
    }, b.prototype.refresh = function(b) {
        var d, e, c = this;
        e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
            currentSlide: d
        }), c.init(), b || c.changeSlide({
            data: {
                message: "index",
                index: d
            }
        }, !1)
    }, b.prototype.registerBreakpoints = function() {
        var c, d, e, b = this,
            f = b.options.responsive || null;
        if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";
            for (c in f)
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
                }
            b.breakpoints.sort(function(a, c) {
                return b.options.mobileFirst ? a - c : c - a
            })
        }
    }, b.prototype.reinit = function() {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
    }, b.prototype.resize = function() {
        var b = this;
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
        }, 50))
    }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
    }, b.prototype.setCSS = function(a) {
        var d, e, b = this,
            c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function() {
        var a = this;
        a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
            padding: "0px " + a.options.centerPadding
        }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
            padding: a.options.centerPadding + " 0px"
        })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
        var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    }, b.prototype.setFade = function() {
        var c, b = this;
        b.$slides.each(function(d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            }) : a(e).css({
                position: "relative",
                left: c,
                top: 0,
                zIndex: b.options.zIndex - 2,
                opacity: 0
            })
        }), b.$slides.eq(b.currentSlide).css({
            zIndex: b.options.zIndex - 1,
            opacity: 1
        })
    }, b.prototype.setHeight = function() {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function() {
        var c, d, e, f, h, b = this,
            g = !1;
        if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;
        else if ("multiple" === h) a.each(e, function(a, c) {
            b.options[a] = c
        });
        else if ("responsive" === h)
            for (d in f)
                if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];
                else {
                    for (c = b.options.responsive.length - 1; c >= 0;) b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                    b.options.responsive.push(f[d])
                }
        g && (b.unload(), b.reinit())
    }, b.prototype.setPosition = function() {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function() {
        var a = this,
            b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function(a) {
        var c, d, e, f, b = this;
        d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function() {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned").find('img').height('').removeAttr('height');
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned").find('img').height('').removeAttr('height');
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.interrupt = function(a) {
        var b = this;
        a || b.autoPlay(), b.interrupted = a
    }, b.prototype.selectHandler = function(b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));
        return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
    }, b.prototype.slideHandler = function(a, b, c) {
        var d, e, f, g, j, h = null,
            i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function() {
            i.postSlide(d)
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function() {
            i.postSlide(e)
        })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function() {
            i.postSlide(e)
        }) : i.postSlide(e))))
    }, b.prototype.startLoad = function() {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function() {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
    }, b.prototype.swipeEnd = function(a) {
        var c, d, b = this;
        if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {
                case "left":
                case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
            }
            "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function(a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
            case "start":
                b.swipeStart(a);
                break;
            case "move":
                b.swipeMove(a);
                break;
            case "end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function(a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
    }, b.prototype.swipeStart = function(a) {
        var c, b = this;
        return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function() {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, b.prototype.unslick = function(a) {
        var b = this;
        b.$slider.trigger("unslick", [b, a]), b.destroy()
    }, b.prototype.updateArrows = function() {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, b.prototype.updateDots = function() {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, b.prototype.visibility = function() {
        var a = this;
        a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
    }, a.fn.slick = function() {
        var f, g, a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;
        for (f = 0; e > f; f++)
            if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }
});
window.met_prevarrow='<button type="button" class="slick-prev"><i class="iconfont icon-prev"></i></button>',
    met_nextarrow='<button type="button" class="slick-next"><i class="iconfont icon-next"></i></button>';
/*!
 * Masonry PACKAGED v4.1.1
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,z=d&&s,b=t(r.width);b!==!1&&(a.width=b+(z?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(z?0:g+E)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+E),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),r=Math.min.apply(Math,o),s=o.indexOf(r),a={x:this.columnWidth*s,y:r},h=r+t.size.outerHeight,u=this.cols+1-o.length,d=0;u>d;d++)this.colYs[s+d]=h;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
/*
 *  webui popover plugin  - v1.2.17
 *  A lightWeight popover plugin with jquery ,enchance the  popover plugin of bootstrap with some awesome new features. It works well with bootstrap ,but bootstrap is not necessary!
 *  https://github.com/sandywalker/webui-popover
 *
 *  Made by Sandy Duan
 *  Under MIT License
 */
!function(a,b,c){"use strict";!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):b(a.jQuery)}(function(d){function e(a,b){return this.$element=d(a),b&&("string"===d.type(b.delay)||"number"===d.type(b.delay))&&(b.delay={show:b.delay,hide:b.delay}),this.options=d.extend({},i,b),this._defaults=i,this._name=f,this._targetclick=!1,this.init(),k.push(this.$element),this}var f="webuiPopover",g="webui-popover",h="webui.popover",i={placement:"auto",container:null,width:"auto",height:"auto",trigger:"click",style:"",selector:!1,delay:{show:null,hide:300},async:{type:"GET",before:null,success:null,error:null},cache:!0,multi:!1,arrow:!0,title:"",content:"",closeable:!1,padding:!0,url:"",type:"html",direction:"",animation:null,template:'<div class="webui-popover"><div class="webui-arrow"></div><div class="webui-popover-inner"><a href="#" class="close"></a><h3 class="webui-popover-title"></h3><div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div></div></div>',backdrop:!1,dismissible:!0,onShow:null,onHide:null,abortXHR:!0,autoHide:!1,offsetTop:0,offsetLeft:0,iframeOptions:{frameborder:"0",allowtransparency:"true",id:"",name:"",scrolling:"",onload:"",height:"",width:""},hideEmpty:!1},j=g+"-rtl",k=[],l=d('<div class="webui-popover-backdrop"></div>'),m=0,n=!1,o=-2e3,p=d(b),q=function(a,b){return isNaN(a)?b||0:Number(a)},r=function(a){return a.data("plugin_"+f)},s=function(){for(var a=null,b=0;b<k.length;b++)a=r(k[b]),a&&a.hide(!0);p.trigger("hiddenAll."+h)},t=function(a){for(var b=null,c=0;c<k.length;c++)b=r(k[c]),b&&b.id!==a.id&&b.hide(!0);p.trigger("hiddenAll."+h)},u="ontouchstart"in b.documentElement&&/Mobi/.test(navigator.userAgent),v=function(a){var b={x:0,y:0};if("touchstart"===a.type||"touchmove"===a.type||"touchend"===a.type||"touchcancel"===a.type){var c=a.originalEvent.touches[0]||a.originalEvent.changedTouches[0];b.x=c.pageX,b.y=c.pageY}else("mousedown"===a.type||"mouseup"===a.type||"click"===a.type)&&(b.x=a.pageX,b.y=a.pageY);return b};e.prototype={init:function(){if(this.$element[0]instanceof b.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");"manual"!==this.getTrigger()&&(u?this.$element.off("touchend",this.options.selector).on("touchend",this.options.selector,d.proxy(this.toggle,this)):"click"===this.getTrigger()?this.$element.off("click",this.options.selector).on("click",this.options.selector,d.proxy(this.toggle,this)):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave click",this.options.selector).on("mouseenter",this.options.selector,d.proxy(this.mouseenterHandler,this)).on("mouseleave",this.options.selector,d.proxy(this.mouseleaveHandler,this))),this._poped=!1,this._inited=!0,this._opened=!1,this._idSeed=m,this.id=f+this._idSeed,this.options.container=d(this.options.container||b.body).first(),this.options.backdrop&&l.appendTo(this.options.container).hide(),m++,"sticky"===this.getTrigger()&&this.show(),this.options.selector&&(this._options=d.extend({},this.options,{selector:""}))},destroy:function(){for(var a=-1,b=0;b<k.length;b++)if(k[b]===this.$element){a=b;break}k.splice(a,1),this.hide(),this.$element.data("plugin_"+f,null),"click"===this.getTrigger()?this.$element.off("click"):"hover"===this.getTrigger()&&this.$element.off("mouseenter mouseleave"),this.$target&&this.$target.remove()},getDelegateOptions:function(){var a={};return this._options&&d.each(this._options,function(b,c){i[b]!==c&&(a[b]=c)}),a},hide:function(a,b){if((a||"sticky"!==this.getTrigger())&&this._opened){b&&(b.preventDefault(),b.stopPropagation()),this.xhr&&this.options.abortXHR===!0&&(this.xhr.abort(),this.xhr=null);var c=d.Event("hide."+h);if(this.$element.trigger(c,[this.$target]),this.$target){this.$target.removeClass("in").addClass(this.getHideAnimation());var e=this;setTimeout(function(){e.$target.hide(),e.getCache()||e.$target.remove()},e.getHideDelay())}this.options.backdrop&&l.hide(),this._opened=!1,this.$element.trigger("hidden."+h,[this.$target]),this.options.onHide&&this.options.onHide(this.$target)}},resetAutoHide:function(){var a=this,b=a.getAutoHide();b&&(a.autoHideHandler&&clearTimeout(a.autoHideHandler),a.autoHideHandler=setTimeout(function(){a.hide()},b))},delegate:function(a){var b=d(a).data("plugin_"+f);return b||(b=new e(a,this.getDelegateOptions()),d(a).data("plugin_"+f,b)),b},toggle:function(a){var b=this;a&&(a.preventDefault(),a.stopPropagation(),this.options.selector&&(b=this.delegate(a.currentTarget))),b[b.getTarget().hasClass("in")?"hide":"show"]()},hideAll:function(){s()},hideOthers:function(){t(this)},show:function(){if(!this._opened){var a=this.getTarget().removeClass().addClass(g).addClass(this._customTargetClass);if(this.options.multi||this.hideOthers(),!this.getCache()||!this._poped||""===this.content){if(this.content="",this.setTitle(this.getTitle()),this.options.closeable||a.find(".close").off("click").remove(),this.isAsync()?this.setContentASync(this.options.content):this.setContent(this.getContent()),this.canEmptyHide()&&""===this.content)return;a.show()}this.displayContent(),this.options.onShow&&this.options.onShow(a),this.bindBodyEvents(),this.options.backdrop&&l.show(),this._opened=!0,this.resetAutoHide()}},displayContent:function(){var a=this.getElementPosition(),b=this.getTarget().removeClass().addClass(g).addClass(this._customTargetClass),c=this.getContentElement(),e=b[0].offsetWidth,f=b[0].offsetHeight,i="bottom",k=d.Event("show."+h);if(this.canEmptyHide()){var l=c.children().html();if(null!==l&&0===l.trim().length)return}this.$element.trigger(k,[b]);var m=this.$element.data("width")||this.options.width;""===m&&(m=this._defaults.width),"auto"!==m&&b.width(m);var n=this.$element.data("height")||this.options.height;""===n&&(n=this._defaults.height),"auto"!==n&&c.height(n),this.options.style&&this.$target.addClass(g+"-"+this.options.style),"rtl"!==this.options.direction||c.hasClass(j)||c.addClass(j),this.options.arrow||b.find(".webui-arrow").remove(),b.detach().css({top:o,left:o,display:"block"}),this.getAnimation()&&b.addClass(this.getAnimation()),b.appendTo(this.options.container),i=this.getPlacement(a),this.$element.trigger("added."+h),this.initTargetEvents(),this.options.padding||("auto"!==this.options.height&&c.css("height",c.outerHeight()),this.$target.addClass("webui-no-padding")),this.options.maxHeight&&c.css("maxHeight",this.options.maxHeight),this.options.maxWidth&&c.css("maxWidth",this.options.maxWidth),e=b[0].offsetWidth,f=b[0].offsetHeight;var p=this.getTargetPositin(a,i,e,f);if(this.$target.css(p.position).addClass(i).addClass("in"),"iframe"===this.options.type){var q=b.find("iframe"),r=b.width(),s=q.parent().height();""!==this.options.iframeOptions.width&&"auto"!==this.options.iframeOptions.width&&(r=this.options.iframeOptions.width),""!==this.options.iframeOptions.height&&"auto"!==this.options.iframeOptions.height&&(s=this.options.iframeOptions.height),q.width(r).height(s)}if(this.options.arrow||this.$target.css({margin:0}),this.options.arrow){var t=this.$target.find(".webui-arrow");t.removeAttr("style"),"left"===i||"right"===i?t.css({top:this.$target.height()/2}):("top"===i||"bottom"===i)&&t.css({left:this.$target.width()/2}),p.arrowOffset&&(-1===p.arrowOffset.left||-1===p.arrowOffset.top?t.hide():t.css(p.arrowOffset))}this._poped=!0,this.$element.trigger("shown."+h,[this.$target])},isTargetLoaded:function(){return 0===this.getTarget().find("i.glyphicon-refresh").length},getTriggerElement:function(){return this.$element},getTarget:function(){if(!this.$target){var a=f+this._idSeed;this.$target=d(this.options.template).attr("id",a),this._customTargetClass=this.$target.attr("class")!==g?this.$target.attr("class"):null,this.getTriggerElement().attr("data-target",a)}return this.$target.data("trigger-element")||this.$target.data("trigger-element",this.getTriggerElement()),this.$target},removeTarget:function(){this.$target.remove(),this.$target=null,this.$contentElement=null},getTitleElement:function(){return this.getTarget().find("."+g+"-title")},getContentElement:function(){return this.$contentElement||(this.$contentElement=this.getTarget().find("."+g+"-content")),this.$contentElement},getTitle:function(){return this.$element.attr("data-title")||this.options.title||this.$element.attr("title")},getUrl:function(){return this.$element.attr("data-url")||this.options.url},getAutoHide:function(){return this.$element.attr("data-auto-hide")||this.options.autoHide},getOffsetTop:function(){return q(this.$element.attr("data-offset-top"))||this.options.offsetTop},getOffsetLeft:function(){return q(this.$element.attr("data-offset-left"))||this.options.offsetLeft},getCache:function(){var a=this.$element.attr("data-cache");if("undefined"!=typeof a)switch(a.toLowerCase()){case"true":case"yes":case"1":return!0;case"false":case"no":case"0":return!1}return this.options.cache},getTrigger:function(){return this.$element.attr("data-trigger")||this.options.trigger},getDelayShow:function(){var a=this.$element.attr("data-delay-show");return"undefined"!=typeof a?a:0===this.options.delay.show?0:this.options.delay.show||100},getHideDelay:function(){var a=this.$element.attr("data-delay-hide");return"undefined"!=typeof a?a:0===this.options.delay.hide?0:this.options.delay.hide||100},getAnimation:function(){var a=this.$element.attr("data-animation");return a||this.options.animation},getHideAnimation:function(){var a=this.getAnimation();return a?a+"-out":"out"},setTitle:function(a){var b=this.getTitleElement();a?("rtl"!==this.options.direction||b.hasClass(j)||b.addClass(j),b.html(a)):b.remove()},hasContent:function(){return this.getContent()},canEmptyHide:function(){return this.options.hideEmpty&&"html"===this.options.type},getIframe:function(){var a=d("<iframe></iframe>").attr("src",this.getUrl()),b=this;return d.each(this._defaults.iframeOptions,function(c){"undefined"!=typeof b.options.iframeOptions[c]&&a.attr(c,b.options.iframeOptions[c])}),a},getContent:function(){if(this.getUrl())switch(this.options.type){case"iframe":this.content=this.getIframe();break;case"html":try{this.content=d(this.getUrl()),this.content.is(":visible")||this.content.show()}catch(a){throw new Error("Unable to get popover content. Invalid selector specified.")}}else if(!this.content){var b="";if(b=d.isFunction(this.options.content)?this.options.content.apply(this.$element[0],[this]):this.options.content,this.content=this.$element.attr("data-content")||b,!this.content){var c=this.$element.next();c&&c.hasClass(g+"-content")&&(this.content=c)}}return this.content},setContent:function(a){var b=this.getTarget(),c=this.getContentElement();"string"==typeof a?c.html(a):a instanceof d&&(c.html(""),this.options.cache?a.removeClass(g+"-content").appendTo(c):a.clone(!0,!0).removeClass(g+"-content").appendTo(c)),this.$target=b},isAsync:function(){return"async"===this.options.type},setContentASync:function(a){var b=this;this.xhr||(this.xhr=d.ajax({url:this.getUrl(),type:this.options.async.type,cache:this.getCache(),beforeSend:function(a,c){b.options.async.before&&b.options.async.before(b,a,c)},success:function(c){b.bindBodyEvents(),a&&d.isFunction(a)?b.content=a.apply(b.$element[0],[c]):b.content=c,b.setContent(b.content);var e=b.getContentElement();e.removeAttr("style"),b.displayContent(),b.options.async.success&&b.options.async.success(b,c)},complete:function(){b.xhr=null},error:function(a,c){b.options.async.error&&b.options.async.error(b,a,c)}}))},bindBodyEvents:function(){n||(this.options.dismissible&&"click"===this.getTrigger()?u?p.off("touchstart.webui-popover").on("touchstart.webui-popover",d.proxy(this.bodyTouchStartHandler,this)):(p.off("keyup.webui-popover").on("keyup.webui-popover",d.proxy(this.escapeHandler,this)),p.off("click.webui-popover").on("click.webui-popover",d.proxy(this.bodyClickHandler,this))):"hover"===this.getTrigger()&&p.off("touchend.webui-popover").on("touchend.webui-popover",d.proxy(this.bodyClickHandler,this)))},mouseenterHandler:function(a){var b=this;a&&this.options.selector&&(b=this.delegate(a.currentTarget)),b._timeout&&clearTimeout(b._timeout),b._enterTimeout=setTimeout(function(){b.getTarget().is(":visible")||b.show()},this.getDelayShow())},mouseleaveHandler:function(){var a=this;clearTimeout(a._enterTimeout),a._timeout=setTimeout(function(){a.hide()},this.getHideDelay())},escapeHandler:function(a){27===a.keyCode&&this.hideAll()},bodyTouchStartHandler:function(a){var b=this,c=d(a.currentTarget);c.on("touchend",function(a){b.bodyClickHandler(a),c.off("touchend")}),c.on("touchmove",function(){c.off("touchend")})},bodyClickHandler:function(a){n=!0;for(var b=!0,c=0;c<k.length;c++){var d=r(k[c]);if(d&&d._opened){var e=d.getTarget().offset(),f=e.left,g=e.top,h=e.left+d.getTarget().width(),i=e.top+d.getTarget().height(),j=v(a),l=j.x>=f&&j.x<=h&&j.y>=g&&j.y<=i;if(l){b=!1;break}}}b&&s()},initTargetEvents:function(){"hover"===this.getTrigger()&&this.$target.off("mouseenter mouseleave").on("mouseenter",d.proxy(this.mouseenterHandler,this)).on("mouseleave",d.proxy(this.mouseleaveHandler,this)),this.$target.find(".close").off("click").on("click",d.proxy(this.hide,this,!0))},getPlacement:function(a){var b,c=this.options.container,d=c.innerWidth(),e=c.innerHeight(),f=c.scrollTop(),g=c.scrollLeft(),h=Math.max(0,a.left-g),i=Math.max(0,a.top-f);b="function"==typeof this.options.placement?this.options.placement.call(this,this.getTarget()[0],this.$element[0]):this.$element.data("placement")||this.options.placement;var j="horizontal"===b,k="vertical"===b,l="auto"===b||j||k;return l?b=d/3>h?e/3>i?j?"right-bottom":"bottom-right":2*e/3>i?k?e/2>=i?"bottom-right":"top-right":"right":j?"right-top":"top-right":2*d/3>h?e/3>i?j?d/2>=h?"right-bottom":"left-bottom":"bottom":2*e/3>i?j?d/2>=h?"right":"left":e/2>=i?"bottom":"top":j?d/2>=h?"right-top":"left-top":"top":e/3>i?j?"left-bottom":"bottom-left":2*e/3>i?k?e/2>=i?"bottom-left":"top-left":"left":j?"left-top":"top-left":"auto-top"===b?b=d/3>h?"top-right":2*d/3>h?"top":"top-left":"auto-bottom"===b?b=d/3>h?"bottom-right":2*d/3>h?"bottom":"bottom-left":"auto-left"===b?b=e/3>i?"left-top":2*e/3>i?"left":"left-bottom":"auto-right"===b&&(b=e/3>i?"right-bottom":2*e/3>i?"right":"right-top"),b},getElementPosition:function(){var a=this.$element[0].getBoundingClientRect(),c=this.options.container,e=c.css("position");if(c.is(b.body)||"static"===e)return d.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth||a.width,height:this.$element[0].offsetHeight||a.height});if("fixed"===e){var f=c[0].getBoundingClientRect();return{top:a.top-f.top+c.scrollTop(),left:a.left-f.left+c.scrollLeft(),width:a.width,height:a.height}}return"relative"===e?{top:this.$element.offset().top-c.offset().top,left:this.$element.offset().left-c.offset().left,width:this.$element[0].offsetWidth||a.width,height:this.$element[0].offsetHeight||a.height}:void 0},getTargetPositin:function(a,c,d,e){var f=a,g=this.options.container,h=this.$element.outerWidth(),i=this.$element.outerHeight(),j=b.documentElement.scrollTop+g.scrollTop(),k=b.documentElement.scrollLeft+g.scrollLeft(),l={},m=null,n=this.options.arrow?20:0,p=10,q=n+p>h?n:0,r=n+p>i?n:0,s=0,t=b.documentElement.clientHeight+j,u=b.documentElement.clientWidth+k,v=f.left+f.width/2-q>0,w=f.left+f.width/2+q<u,x=f.top+f.height/2-r>0,y=f.top+f.height/2+r<t;switch(c){case"bottom":l={top:f.top+f.height,left:f.left+f.width/2-d/2};break;case"top":l={top:f.top-e,left:f.left+f.width/2-d/2};break;case"left":l={top:f.top+f.height/2-e/2,left:f.left-d};break;case"right":l={top:f.top+f.height/2-e/2,left:f.left+f.width};break;case"top-right":l={top:f.top-e,left:v?f.left-q:p},m={left:v?Math.min(h,d)/2+q:o};break;case"top-left":s=w?q:-p,l={top:f.top-e,left:f.left-d+f.width+s},m={left:w?d-Math.min(h,d)/2-q:o};break;case"bottom-right":l={top:f.top+f.height,left:v?f.left-q:p},m={left:v?Math.min(h,d)/2+q:o};break;case"bottom-left":s=w?q:-p,l={top:f.top+f.height,left:f.left-d+f.width+s},m={left:w?d-Math.min(h,d)/2-q:o};break;case"right-top":s=y?r:-p,l={top:f.top-e+f.height+s,left:f.left+f.width},m={top:y?e-Math.min(i,e)/2-r:o};break;case"right-bottom":l={top:x?f.top-r:p,left:f.left+f.width},m={top:x?Math.min(i,e)/2+r:o};break;case"left-top":s=y?r:-p,l={top:f.top-e+f.height+s,left:f.left-d},m={top:y?e-Math.min(i,e)/2-r:o};break;case"left-bottom":l={top:x?f.top-r:p,left:f.left-d},m={top:x?Math.min(i,e)/2+r:o}}return l.top+=this.getOffsetTop(),l.left+=this.getOffsetLeft(),{position:l,arrowOffset:m}}},d.fn[f]=function(a,b){var c=[],g=this.each(function(){var g=d.data(this,"plugin_"+f);g?"destroy"===a?g.destroy():"string"==typeof a&&c.push(g[a]()):(a?"string"==typeof a?"destroy"!==a&&(b||(g=new e(this,null),c.push(g[a]()))):"object"==typeof a&&(g=new e(this,a)):g=new e(this,null),d.data(this,"plugin_"+f,g))});return c.length?c:g};var w=function(){var a=function(){s()},b=function(a,b){b=b||{},d(a).webuiPopover(b)},e=function(a){var b=!0;return d(a).each(function(a,e){b=b&&d(e).data("plugin_"+f)!==c}),b},g=function(a,b){b?d(a).webuiPopover(b).webuiPopover("show"):d(a).webuiPopover("show")},h=function(a){d(a).webuiPopover("hide")},j=function(a){i=d.extend({},i,a)},k=function(a,b){var c=d(a).data("plugin_"+f);if(c){var e=c.getCache();c.options.cache=!1,c.options.content=b,c._opened?(c._opened=!1,c.show()):c.isAsync()?c.setContentASync(b):c.setContent(b),c.options.cache=e}},l=function(a,b){var c=d(a).data("plugin_"+f);if(c){var e=c.getCache(),g=c.options.type;c.options.cache=!1,c.options.url=b,c._opened?(c._opened=!1,c.show()):(c.options.type="async",c.setContentASync(c.content)),c.options.cache=e,c.options.type=g}};return{show:g,hide:h,create:b,isCreated:e,hideAll:a,updateContent:k,updateContentAsync:l,setDefaultOptions:j}}();a.WebuiPopovers=w})}(window,document);
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/webui-popover",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginWebuiPopover=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="webuiPopover",WebuiPopover=function(_Plugin){function WebuiPopover(){return babelHelpers.classCallCheck(this,WebuiPopover),babelHelpers.possibleConstructorReturn(this,(WebuiPopover.__proto__||Object.getPrototypeOf(WebuiPopover)).apply(this,arguments))}return babelHelpers.inherits(WebuiPopover,_Plugin),babelHelpers.createClass(WebuiPopover,[{key:"getName",value:function(){return NAME}}],[{key:"getDefaults",value:function(){return{trigger:"click",width:320,multi:!0,cloaseable:!1,style:"",delay:300,padding:!0}}}]),WebuiPopover}(_Plugin3.default);_Plugin3.default.register(NAME,WebuiPopover),exports.default=WebuiPopover});
/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 7, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var s;return e(this).each(function(){var e=new t(this,a);s||(s=e)}),s}}var a,t=function(e,s){function r(e){return Math.floor(e)}function i(){y.autoplayTimeoutId=setTimeout(function(){y.params.loop?(y.fixLoop(),y._slideNext(),y.emit("onAutoplay",y)):y.isEnd?s.autoplayStopOnLast?y.stopAutoplay():(y._slideTo(0),y.emit("onAutoplay",y)):(y._slideNext(),y.emit("onAutoplay",y))},y.params.autoplay)}function n(e,t){var s=a(e.target);if(!s.is(t))if("string"==typeof t)s=s.parents(t);else if(t.nodeType){var r;return s.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==s.length)return s[0]}function o(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,s=new t(function(e){e.forEach(function(e){y.onResize(!0),y.emit("onObserverUpdate",y,e)})});s.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),y.observers.push(s)}function l(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!y.params.allowSwipeToNext&&(y.isHorizontal()&&39===a||!y.isHorizontal()&&40===a))return!1;if(!y.params.allowSwipeToPrev&&(y.isHorizontal()&&37===a||!y.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(y.container.parents(".swiper-slide").length>0&&0===y.container.parents(".swiper-slide-active").length)return;var s={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,i=window.innerHeight,n=y.container.offset();y.rtl&&(n.left=n.left-y.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+y.width,n.top],[n.left,n.top+y.height],[n.left+y.width,n.top+y.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=s.left&&p[0]<=s.left+r&&p[1]>=s.top&&p[1]<=s.top+i&&(t=!0)}if(!t)return}y.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!y.rtl||37===a&&y.rtl)&&y.slideNext(),(37===a&&!y.rtl||39===a&&y.rtl)&&y.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&y.slideNext(),38===a&&y.slidePrev())}}function p(e){e.originalEvent&&(e=e.originalEvent);var a=y.mousewheel.event,t=0,s=y.rtl?-1:1;if("mousewheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*s}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*s:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(y.params.mousewheelForceToAxis)if(y.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*s}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*s:-e.deltaY;if(0!==t){if(y.params.mousewheelInvert&&(t=-t),y.params.freeMode){var r=y.getWrapperTranslate()+t*y.params.mousewheelSensitivity,i=y.isBeginning,n=y.isEnd;if(r>=y.minTranslate()&&(r=y.minTranslate()),r<=y.maxTranslate()&&(r=y.maxTranslate()),y.setWrapperTransition(0),y.setWrapperTranslate(r),y.updateProgress(),y.updateActiveIndex(),(!i&&y.isBeginning||!n&&y.isEnd)&&y.updateClasses(),y.params.freeModeSticky?(clearTimeout(y.mousewheel.timeout),y.mousewheel.timeout=setTimeout(function(){y.slideReset()},300)):y.params.lazyLoading&&y.lazy&&y.lazy.load(),0===r||r===y.maxTranslate())return}else{if((new window.Date).getTime()-y.mousewheel.lastScrollTime>60)if(0>t)if(y.isEnd&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slideNext();else if(y.isBeginning&&!y.params.loop||y.animating){if(y.params.mousewheelReleaseOnEdges)return!0}else y.slidePrev();y.mousewheel.lastScrollTime=(new window.Date).getTime()}return y.params.autoplay&&y.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function d(e,t){e=a(e);var s,r,i,n=y.rtl?-1:1;s=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),i=e.attr("data-swiper-parallax-y"),r||i?(r=r||"0",i=i||"0"):y.isHorizontal()?(r=s,i="0"):(i=s,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",i=i.indexOf("%")>=0?parseInt(i,10)*t+"%":i*t+"px",e.transform("translate3d("+r+", "+i+",0px)")}function u(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,s);var c={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},m=s&&s.virtualTranslate;s=s||{};var f={};for(var g in s)if("object"!=typeof s[g]||null===s[g]||(s[g].nodeType||s[g]===window||s[g]===document||"undefined"!=typeof Dom7&&s[g]instanceof Dom7||"undefined"!=typeof jQuery&&s[g]instanceof jQuery))f[g]=s[g];else{f[g]={};for(var h in s[g])f[g][h]=s[g][h]}for(var v in c)if("undefined"==typeof s[v])s[v]=c[v];else if("object"==typeof s[v])for(var w in c[v])"undefined"==typeof s[v][w]&&(s[v][w]=c[v][w]);var y=this;if(y.params=s,y.originalParams=f,y.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof Dom7&&(a=Dom7),("undefined"!=typeof a||(a="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(y.$=a,y.currentBreakpoint=void 0,y.getActiveBreakpoint=function(){if(!y.params.breakpoints)return!1;var e,a=!1,t=[];for(e in y.params.breakpoints)y.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var s=0;s<t.length;s++)e=t[s],e>=window.innerWidth&&!a&&(a=e);return a||"max"},y.setBreakpoint=function(){var e=y.getActiveBreakpoint();if(e&&y.currentBreakpoint!==e){var a=e in y.params.breakpoints?y.params.breakpoints[e]:y.originalParams,t=y.params.loop&&a.slidesPerView!==y.params.slidesPerView;for(var s in a)y.params[s]=a[s];y.currentBreakpoint=e,t&&y.destroyLoop&&y.reLoop(!0)}},y.params.breakpoints&&y.setBreakpoint(),y.container=a(e),0!==y.container.length)){if(y.container.length>1){var b=[];return y.container.each(function(){b.push(new t(this,s))}),b}y.container[0].swiper=y,y.container.data("swiper",y),y.classNames.push("swiper-container-"+y.params.direction),y.params.freeMode&&y.classNames.push("swiper-container-free-mode"),y.support.flexbox||(y.classNames.push("swiper-container-no-flexbox"),y.params.slidesPerColumn=1),y.params.autoHeight&&y.classNames.push("swiper-container-autoheight"),(y.params.parallax||y.params.watchSlidesVisibility)&&(y.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(y.params.effect)>=0&&(y.support.transforms3d?(y.params.watchSlidesProgress=!0,y.classNames.push("swiper-container-3d")):y.params.effect="slide"),"slide"!==y.params.effect&&y.classNames.push("swiper-container-"+y.params.effect),"cube"===y.params.effect&&(y.params.resistanceRatio=0,y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.centeredSlides=!1,y.params.spaceBetween=0,y.params.virtualTranslate=!0,y.params.setWrapperSize=!1),("fade"===y.params.effect||"flip"===y.params.effect)&&(y.params.slidesPerView=1,y.params.slidesPerColumn=1,y.params.slidesPerGroup=1,y.params.watchSlidesProgress=!0,y.params.spaceBetween=0,y.params.setWrapperSize=!1,"undefined"==typeof m&&(y.params.virtualTranslate=!0)),y.params.grabCursor&&y.support.touch&&(y.params.grabCursor=!1),y.wrapper=y.container.children("."+y.params.wrapperClass),y.params.pagination&&(y.paginationContainer=a(y.params.pagination),y.params.uniqueNavElements&&"string"==typeof y.params.pagination&&y.paginationContainer.length>1&&1===y.container.find(y.params.pagination).length&&(y.paginationContainer=y.container.find(y.params.pagination)),"bullets"===y.params.paginationType&&y.params.paginationClickable?y.paginationContainer.addClass("swiper-pagination-clickable"):y.params.paginationClickable=!1,y.paginationContainer.addClass("swiper-pagination-"+y.params.paginationType)),(y.params.nextButton||y.params.prevButton)&&(y.params.nextButton&&(y.nextButton=a(y.params.nextButton),y.params.uniqueNavElements&&"string"==typeof y.params.nextButton&&y.nextButton.length>1&&1===y.container.find(y.params.nextButton).length&&(y.nextButton=y.container.find(y.params.nextButton))),y.params.prevButton&&(y.prevButton=a(y.params.prevButton),y.params.uniqueNavElements&&"string"==typeof y.params.prevButton&&y.prevButton.length>1&&1===y.container.find(y.params.prevButton).length&&(y.prevButton=y.container.find(y.params.prevButton)))),y.isHorizontal=function(){return"horizontal"===y.params.direction},y.rtl=y.isHorizontal()&&("rtl"===y.container[0].dir.toLowerCase()||"rtl"===y.container.css("direction")),y.rtl&&y.classNames.push("swiper-container-rtl"),y.rtl&&(y.wrongRTL="-webkit-box"===y.wrapper.css("display")),y.params.slidesPerColumn>1&&y.classNames.push("swiper-container-multirow"),y.device.android&&y.classNames.push("swiper-container-android"),y.container.addClass(y.classNames.join(" ")),y.translate=0,y.progress=0,y.velocity=0,y.lockSwipeToNext=function(){y.params.allowSwipeToNext=!1},y.lockSwipeToPrev=function(){y.params.allowSwipeToPrev=!1},y.lockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!1},y.unlockSwipeToNext=function(){y.params.allowSwipeToNext=!0},y.unlockSwipeToPrev=function(){y.params.allowSwipeToPrev=!0},y.unlockSwipes=function(){y.params.allowSwipeToNext=y.params.allowSwipeToPrev=!0},y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab"),y.imagesToLoad=[],y.imagesLoaded=0,y.loadImage=function(e,a,t,s,r){function i(){r&&r()}var n;e.complete&&s?i():a?(n=new window.Image,n.onload=i,n.onerror=i,t&&(n.srcset=t),a&&(n.src=a)):i()},y.preloadImages=function(){function e(){"undefined"!=typeof y&&null!==y&&(void 0!==y.imagesLoaded&&y.imagesLoaded++,y.imagesLoaded===y.imagesToLoad.length&&(y.params.updateOnImagesReady&&y.update(),y.emit("onImagesReady",y)))}y.imagesToLoad=y.container.find("img");for(var a=0;a<y.imagesToLoad.length;a++)y.loadImage(y.imagesToLoad[a],y.imagesToLoad[a].currentSrc||y.imagesToLoad[a].getAttribute("src"),y.imagesToLoad[a].srcset||y.imagesToLoad[a].getAttribute("srcset"),!0,e)},y.autoplayTimeoutId=void 0,y.autoplaying=!1,y.autoplayPaused=!1,y.startAutoplay=function(){return"undefined"!=typeof y.autoplayTimeoutId?!1:y.params.autoplay?y.autoplaying?!1:(y.autoplaying=!0,y.emit("onAutoplayStart",y),void i()):!1},y.stopAutoplay=function(e){y.autoplayTimeoutId&&(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplaying=!1,y.autoplayTimeoutId=void 0,y.emit("onAutoplayStop",y))},y.pauseAutoplay=function(e){y.autoplayPaused||(y.autoplayTimeoutId&&clearTimeout(y.autoplayTimeoutId),y.autoplayPaused=!0,0===e?(y.autoplayPaused=!1,i()):y.wrapper.transitionEnd(function(){y&&(y.autoplayPaused=!1,y.autoplaying?i():y.stopAutoplay())}))},y.minTranslate=function(){return-y.snapGrid[0]},y.maxTranslate=function(){return-y.snapGrid[y.snapGrid.length-1]},y.updateAutoHeight=function(){var e=y.slides.eq(y.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&y.wrapper.css("height",a+"px")}},y.updateContainerSize=function(){var e,a;e="undefined"!=typeof y.params.width?y.params.width:y.container[0].clientWidth,a="undefined"!=typeof y.params.height?y.params.height:y.container[0].clientHeight,0===e&&y.isHorizontal()||0===a&&!y.isHorizontal()||(e=e-parseInt(y.container.css("padding-left"),10)-parseInt(y.container.css("padding-right"),10),a=a-parseInt(y.container.css("padding-top"),10)-parseInt(y.container.css("padding-bottom"),10),y.width=e,y.height=a,y.size=y.isHorizontal()?y.width:y.height)},y.updateSlidesSize=function(){y.slides=y.wrapper.children("."+y.params.slideClass),y.snapGrid=[],y.slidesGrid=[],y.slidesSizesGrid=[];var e,a=y.params.spaceBetween,t=-y.params.slidesOffsetBefore,s=0,i=0;if("undefined"!=typeof y.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*y.size),y.virtualSize=-a,y.rtl?y.slides.css({marginLeft:"",marginTop:""}):y.slides.css({marginRight:"",marginBottom:""});var n;y.params.slidesPerColumn>1&&(n=Math.floor(y.slides.length/y.params.slidesPerColumn)===y.slides.length/y.params.slidesPerColumn?y.slides.length:Math.ceil(y.slides.length/y.params.slidesPerColumn)*y.params.slidesPerColumn,"auto"!==y.params.slidesPerView&&"row"===y.params.slidesPerColumnFill&&(n=Math.max(n,y.params.slidesPerView*y.params.slidesPerColumn)));var o,l=y.params.slidesPerColumn,p=n/l,d=p-(y.params.slidesPerColumn*p-y.slides.length);for(e=0;e<y.slides.length;e++){o=0;var u=y.slides.eq(e);if(y.params.slidesPerColumn>1){var c,m,f;"column"===y.params.slidesPerColumnFill?(m=Math.floor(e/l),f=e-m*l,(m>d||m===d&&f===l-1)&&++f>=l&&(f=0,m++),c=m+f*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(f=Math.floor(e/p),m=e-f*p),u.css({"margin-top":0!==f&&y.params.spaceBetween&&y.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",f)}"none"!==u.css("display")&&("auto"===y.params.slidesPerView?(o=y.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),y.params.roundLengths&&(o=r(o))):(o=(y.size-(y.params.slidesPerView-1)*a)/y.params.slidesPerView,y.params.roundLengths&&(o=r(o)),y.isHorizontal()?y.slides[e].style.width=o+"px":y.slides[e].style.height=o+"px"),y.slides[e].swiperSlideSize=o,y.slidesSizesGrid.push(o),y.params.centeredSlides?(t=t+o/2+s/2+a,0===e&&(t=t-y.size/2-a),Math.abs(t)<.001&&(t=0),i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t)):(i%y.params.slidesPerGroup===0&&y.snapGrid.push(t),y.slidesGrid.push(t),t=t+o+a),y.virtualSize+=o+a,s=o,i++)}y.virtualSize=Math.max(y.virtualSize,y.size)+y.params.slidesOffsetAfter;var g;if(y.rtl&&y.wrongRTL&&("slide"===y.params.effect||"coverflow"===y.params.effect)&&y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),(!y.support.flexbox||y.params.setWrapperSize)&&(y.isHorizontal()?y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}):y.wrapper.css({height:y.virtualSize+y.params.spaceBetween+"px"})),y.params.slidesPerColumn>1&&(y.virtualSize=(o+y.params.spaceBetween)*n,y.virtualSize=Math.ceil(y.virtualSize/y.params.slidesPerColumn)-y.params.spaceBetween,y.wrapper.css({width:y.virtualSize+y.params.spaceBetween+"px"}),y.params.centeredSlides)){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<y.virtualSize+y.snapGrid[0]&&g.push(y.snapGrid[e]);y.snapGrid=g}if(!y.params.centeredSlides){for(g=[],e=0;e<y.snapGrid.length;e++)y.snapGrid[e]<=y.virtualSize-y.size&&g.push(y.snapGrid[e]);y.snapGrid=g,Math.floor(y.virtualSize-y.size)-Math.floor(y.snapGrid[y.snapGrid.length-1])>1&&y.snapGrid.push(y.virtualSize-y.size)}0===y.snapGrid.length&&(y.snapGrid=[0]),0!==y.params.spaceBetween&&(y.isHorizontal()?y.rtl?y.slides.css({marginLeft:a+"px"}):y.slides.css({marginRight:a+"px"}):y.slides.css({marginBottom:a+"px"})),y.params.watchSlidesProgress&&y.updateSlidesOffset()}},y.updateSlidesOffset=function(){for(var e=0;e<y.slides.length;e++)y.slides[e].swiperSlideOffset=y.isHorizontal()?y.slides[e].offsetLeft:y.slides[e].offsetTop},y.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=y.translate||0),0!==y.slides.length){"undefined"==typeof y.slides[0].swiperSlideOffset&&y.updateSlidesOffset();var a=-e;y.rtl&&(a=e),y.slides.removeClass(y.params.slideVisibleClass);for(var t=0;t<y.slides.length;t++){var s=y.slides[t],r=(a-s.swiperSlideOffset)/(s.swiperSlideSize+y.params.spaceBetween);if(y.params.watchSlidesVisibility){var i=-(a-s.swiperSlideOffset),n=i+y.slidesSizesGrid[t],o=i>=0&&i<y.size||n>0&&n<=y.size||0>=i&&n>=y.size;o&&y.slides.eq(t).addClass(y.params.slideVisibleClass)}s.progress=y.rtl?-r:r}}},y.updateProgress=function(e){"undefined"==typeof e&&(e=y.translate||0);var a=y.maxTranslate()-y.minTranslate(),t=y.isBeginning,s=y.isEnd;0===a?(y.progress=0,y.isBeginning=y.isEnd=!0):(y.progress=(e-y.minTranslate())/a,y.isBeginning=y.progress<=0,y.isEnd=y.progress>=1),y.isBeginning&&!t&&y.emit("onReachBeginning",y),y.isEnd&&!s&&y.emit("onReachEnd",y),y.params.watchSlidesProgress&&y.updateSlidesProgress(e),y.emit("onProgress",y,y.progress)},y.updateActiveIndex=function(){var e,a,t,s=y.rtl?y.translate:-y.translate;for(a=0;a<y.slidesGrid.length;a++)"undefined"!=typeof y.slidesGrid[a+1]?s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]-(y.slidesGrid[a+1]-y.slidesGrid[a])/2?e=a:s>=y.slidesGrid[a]&&s<y.slidesGrid[a+1]&&(e=a+1):s>=y.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/y.params.slidesPerGroup),t>=y.snapGrid.length&&(t=y.snapGrid.length-1),e!==y.activeIndex&&(y.snapIndex=t,y.previousIndex=y.activeIndex,y.activeIndex=e,y.updateClasses())},y.updateClasses=function(){y.slides.removeClass(y.params.slideActiveClass+" "+y.params.slideNextClass+" "+y.params.slidePrevClass);var e=y.slides.eq(y.activeIndex);e.addClass(y.params.slideActiveClass);var t=e.next("."+y.params.slideClass).addClass(y.params.slideNextClass);y.params.loop&&0===t.length&&y.slides.eq(0).addClass(y.params.slideNextClass);var s=e.prev("."+y.params.slideClass).addClass(y.params.slidePrevClass);if(y.params.loop&&0===s.length&&y.slides.eq(-1).addClass(y.params.slidePrevClass),y.paginationContainer&&y.paginationContainer.length>0){var r,i=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length;if(y.params.loop?(r=Math.ceil((y.activeIndex-y.loopedSlides)/y.params.slidesPerGroup),r>y.slides.length-1-2*y.loopedSlides&&(r-=y.slides.length-2*y.loopedSlides),r>i-1&&(r-=i),0>r&&"bullets"!==y.params.paginationType&&(r=i+r)):r="undefined"!=typeof y.snapIndex?y.snapIndex:y.activeIndex||0,"bullets"===y.params.paginationType&&y.bullets&&y.bullets.length>0&&(y.bullets.removeClass(y.params.bulletActiveClass),y.paginationContainer.length>1?y.bullets.each(function(){a(this).index()===r&&a(this).addClass(y.params.bulletActiveClass)}):y.bullets.eq(r).addClass(y.params.bulletActiveClass)),"fraction"===y.params.paginationType&&(y.paginationContainer.find("."+y.params.paginationCurrentClass).text(r+1),y.paginationContainer.find("."+y.params.paginationTotalClass).text(i)),"progress"===y.params.paginationType){var n=(r+1)/i,o=n,l=1;y.isHorizontal()||(l=n,o=1),y.paginationContainer.find("."+y.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+l+")").transition(y.params.speed)}"custom"===y.params.paginationType&&y.params.paginationCustomRender&&(y.paginationContainer.html(y.params.paginationCustomRender(y,r+1,i)),y.emit("onPaginationRendered",y,y.paginationContainer[0]))}y.params.loop||(y.params.prevButton&&y.prevButton&&y.prevButton.length>0&&(y.isBeginning?(y.prevButton.addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(y.prevButton)):(y.prevButton.removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(y.prevButton))),y.params.nextButton&&y.nextButton&&y.nextButton.length>0&&(y.isEnd?(y.nextButton.addClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.disable(y.nextButton)):(y.nextButton.removeClass(y.params.buttonDisabledClass),y.params.a11y&&y.a11y&&y.a11y.enable(y.nextButton))))},y.updatePagination=function(){if(y.params.pagination&&y.paginationContainer&&y.paginationContainer.length>0){var e="";if("bullets"===y.params.paginationType){for(var a=y.params.loop?Math.ceil((y.slides.length-2*y.loopedSlides)/y.params.slidesPerGroup):y.snapGrid.length,t=0;a>t;t++)e+=y.params.paginationBulletRender?y.params.paginationBulletRender(t,y.params.bulletClass):"<"+y.params.paginationElement+' class="'+y.params.bulletClass+'"></'+y.params.paginationElement+">";y.paginationContainer.html(e),y.bullets=y.paginationContainer.find("."+y.params.bulletClass),y.params.paginationClickable&&y.params.a11y&&y.a11y&&y.a11y.initPagination()}"fraction"===y.params.paginationType&&(e=y.params.paginationFractionRender?y.params.paginationFractionRender(y,y.params.paginationCurrentClass,y.params.paginationTotalClass):'<span class="'+y.params.paginationCurrentClass+'"></span> / <span class="'+y.params.paginationTotalClass+'"></span>',y.paginationContainer.html(e)),"progress"===y.params.paginationType&&(e=y.params.paginationProgressRender?y.params.paginationProgressRender(y,y.params.paginationProgressbarClass):'<span class="'+y.params.paginationProgressbarClass+'"></span>',y.paginationContainer.html(e)),"custom"!==y.params.paginationType&&y.emit("onPaginationRendered",y,y.paginationContainer[0])}},y.update=function(e){function a(){s=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate()),y.setWrapperTranslate(s),y.updateActiveIndex(),y.updateClasses()}if(y.updateContainerSize(),y.updateSlidesSize(),y.updateProgress(),y.updatePagination(),y.updateClasses(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),e){var t,s;y.controller&&y.controller.spline&&(y.controller.spline=void 0),y.params.freeMode?(a(),y.params.autoHeight&&y.updateAutoHeight()):(t=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0),t||a())}else y.params.autoHeight&&y.updateAutoHeight()},y.onResize=function(e){y.params.breakpoints&&y.setBreakpoint();var a=y.params.allowSwipeToPrev,t=y.params.allowSwipeToNext;y.params.allowSwipeToPrev=y.params.allowSwipeToNext=!0,y.updateContainerSize(),y.updateSlidesSize(),("auto"===y.params.slidesPerView||y.params.freeMode||e)&&y.updatePagination(),y.params.scrollbar&&y.scrollbar&&y.scrollbar.set(),y.controller&&y.controller.spline&&(y.controller.spline=void 0);var s=!1;if(y.params.freeMode){var r=Math.min(Math.max(y.translate,y.maxTranslate()),y.minTranslate());y.setWrapperTranslate(r),y.updateActiveIndex(),y.updateClasses(),y.params.autoHeight&&y.updateAutoHeight()}else y.updateClasses(),s=("auto"===y.params.slidesPerView||y.params.slidesPerView>1)&&y.isEnd&&!y.params.centeredSlides?y.slideTo(y.slides.length-1,0,!1,!0):y.slideTo(y.activeIndex,0,!1,!0);y.params.lazyLoading&&!s&&y.lazy&&y.lazy.load(),y.params.allowSwipeToPrev=a,y.params.allowSwipeToNext=t};var x=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?x=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(x=["MSPointerDown","MSPointerMove","MSPointerUp"]),y.touchEvents={start:y.support.touch||!y.params.simulateTouch?"touchstart":x[0],move:y.support.touch||!y.params.simulateTouch?"touchmove":x[1],end:y.support.touch||!y.params.simulateTouch?"touchend":x[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===y.params.touchEventsTarget?y.container:y.wrapper).addClass("swiper-wp8-"+y.params.direction),y.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===y.params.touchEventsTarget?y.container[0]:y.wrapper[0],i=y.support.touch?r:document,n=y.params.nested?!0:!1;y.browser.ie?(r[t](y.touchEvents.start,y.onTouchStart,!1),i[t](y.touchEvents.move,y.onTouchMove,n),i[t](y.touchEvents.end,y.onTouchEnd,!1)):(y.support.touch&&(r[t](y.touchEvents.start,y.onTouchStart,!1),r[t](y.touchEvents.move,y.onTouchMove,n),r[t](y.touchEvents.end,y.onTouchEnd,!1)),!s.simulateTouch||y.device.ios||y.device.android||(r[t]("mousedown",y.onTouchStart,!1),document[t]("mousemove",y.onTouchMove,n),document[t]("mouseup",y.onTouchEnd,!1))),window[t]("resize",y.onResize),y.params.nextButton&&y.nextButton&&y.nextButton.length>0&&(y.nextButton[a]("click",y.onClickNext),y.params.a11y&&y.a11y&&y.nextButton[a]("keydown",y.a11y.onEnterKey)),y.params.prevButton&&y.prevButton&&y.prevButton.length>0&&(y.prevButton[a]("click",y.onClickPrev),y.params.a11y&&y.a11y&&y.prevButton[a]("keydown",y.a11y.onEnterKey)),y.params.pagination&&y.params.paginationClickable&&(y.paginationContainer[a]("click","."+y.params.bulletClass,y.onClickIndex),y.params.a11y&&y.a11y&&y.paginationContainer[a]("keydown","."+y.params.bulletClass,y.a11y.onEnterKey)),(y.params.preventClicks||y.params.preventClicksPropagation)&&r[t]("click",y.preventClicks,!0)},y.attachEvents=function(){y.initEvents()},y.detachEvents=function(){y.initEvents(!0)},y.allowClick=!0,y.preventClicks=function(e){y.allowClick||(y.params.preventClicks&&e.preventDefault(),y.params.preventClicksPropagation&&y.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},y.onClickNext=function(e){e.preventDefault(),(!y.isEnd||y.params.loop)&&y.slideNext()},y.onClickPrev=function(e){e.preventDefault(),(!y.isBeginning||y.params.loop)&&y.slidePrev()},y.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*y.params.slidesPerGroup;y.params.loop&&(t+=y.loopedSlides),y.slideTo(t)},y.updateClickedSlide=function(e){var t=n(e,"."+y.params.slideClass),s=!1;if(t)for(var r=0;r<y.slides.length;r++)y.slides[r]===t&&(s=!0);if(!t||!s)return y.clickedSlide=void 0,void(y.clickedIndex=void 0);if(y.clickedSlide=t,y.clickedIndex=a(t).index(),y.params.slideToClickedSlide&&void 0!==y.clickedIndex&&y.clickedIndex!==y.activeIndex){var i,o=y.clickedIndex;if(y.params.loop){if(y.animating)return;i=a(y.clickedSlide).attr("data-swiper-slide-index"),y.params.centeredSlides?o<y.loopedSlides-y.params.slidesPerView/2||o>y.slides.length-y.loopedSlides+y.params.slidesPerView/2?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o):o>y.slides.length-y.params.slidesPerView?(y.fixLoop(),o=y.wrapper.children("."+y.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){y.slideTo(o)},0)):y.slideTo(o)}else y.slideTo(o)}};var T,S,C,z,M,P,I,k,E,B,D="input, select, textarea, button",L=Date.now(),H=[];y.animating=!1,y.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,A;if(y.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(y.params.noSwiping&&n(e,"."+y.params.noSwipingClass))return void(y.allowClick=!0);if(!y.params.swipeHandler||n(e,y.params.swipeHandler)){var t=y.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,s=y.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(y.device.ios&&y.params.iOSEdgeSwipeDetection&&t<=y.params.iOSEdgeSwipeThreshold)){if(T=!0,S=!1,C=!0,M=void 0,A=void 0,y.touches.startX=t,y.touches.startY=s,z=Date.now(),y.allowClick=!0,y.updateContainerSize(),y.swipeDirection=void 0,y.params.threshold>0&&(k=!1),"touchstart"!==e.type){var r=!0;a(e.target).is(D)&&(r=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),r&&e.preventDefault()}y.emit("onTouchStart",y,e)}}}},y.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!G||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return y.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(y.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(y.params.onlyExternal)return y.allowClick=!1,void(T&&(y.touches.startX=y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.startY=y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,z=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return S=!0,void(y.allowClick=!1);if(C&&y.emit("onTouchMove",y,e),!(e.targetTouches&&e.targetTouches.length>1)){if(y.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,y.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof M){var t=180*Math.atan2(Math.abs(y.touches.currentY-y.touches.startY),Math.abs(y.touches.currentX-y.touches.startX))/Math.PI;M=y.isHorizontal()?t>y.params.touchAngle:90-t>y.params.touchAngle}if(M&&y.emit("onTouchMoveOpposite",y,e),"undefined"==typeof A&&y.browser.ieTouch&&(y.touches.currentX!==y.touches.startX||y.touches.currentY!==y.touches.startY)&&(A=!0),T){if(M)return void(T=!1);if(A||!y.browser.ieTouch){y.allowClick=!1,y.emit("onSliderMove",y,e),e.preventDefault(),y.params.touchMoveStopPropagation&&!y.params.nested&&e.stopPropagation(),S||(s.loop&&y.fixLoop(),I=y.getWrapperTranslate(),y.setWrapperTransition(0),y.animating&&y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),y.params.autoplay&&y.autoplaying&&(y.params.autoplayDisableOnInteraction?y.stopAutoplay():y.pauseAutoplay()),B=!1,y.params.grabCursor&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grabbing",y.container[0].style.cursor="-moz-grabbin",y.container[0].style.cursor="grabbing")),S=!0;var r=y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY;r*=y.params.touchRatio,y.rtl&&(r=-r),y.swipeDirection=r>0?"prev":"next",P=r+I;var i=!0;if(r>0&&P>y.minTranslate()?(i=!1,y.params.resistance&&(P=y.minTranslate()-1+Math.pow(-y.minTranslate()+I+r,y.params.resistanceRatio))):0>r&&P<y.maxTranslate()&&(i=!1,y.params.resistance&&(P=y.maxTranslate()+1-Math.pow(y.maxTranslate()-I-r,y.params.resistanceRatio))),i&&(e.preventedByNestedSwiper=!0),!y.params.allowSwipeToNext&&"next"===y.swipeDirection&&I>P&&(P=I),!y.params.allowSwipeToPrev&&"prev"===y.swipeDirection&&P>I&&(P=I),y.params.followFinger){if(y.params.threshold>0){if(!(Math.abs(r)>y.params.threshold||k))return void(P=I);if(!k)return k=!0,y.touches.startX=y.touches.currentX,y.touches.startY=y.touches.currentY,P=I,void(y.touches.diff=y.isHorizontal()?y.touches.currentX-y.touches.startX:y.touches.currentY-y.touches.startY)}(y.params.freeMode||y.params.watchSlidesProgress)&&y.updateActiveIndex(),y.params.freeMode&&(0===H.length&&H.push({position:y.touches[y.isHorizontal()?"startX":"startY"],time:z}),H.push({position:y.touches[y.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),y.updateProgress(P),y.setWrapperTranslate(P)}}}}}},y.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),C&&y.emit("onTouchEnd",y,e),C=!1,T){y.params.grabCursor&&S&&T&&(y.container[0].style.cursor="move",y.container[0].style.cursor="-webkit-grab",y.container[0].style.cursor="-moz-grab",y.container[0].style.cursor="grab");var t=Date.now(),s=t-z;if(y.allowClick&&(y.updateClickedSlide(e),y.emit("onTap",y,e),300>s&&t-L>300&&(E&&clearTimeout(E),E=setTimeout(function(){y&&(y.params.paginationHide&&y.paginationContainer.length>0&&!a(e.target).hasClass(y.params.bulletClass)&&y.paginationContainer.toggleClass(y.params.paginationHiddenClass),y.emit("onClick",y,e))},300)),300>s&&300>t-L&&(E&&clearTimeout(E),y.emit("onDoubleTap",y,e))),L=Date.now(),setTimeout(function(){y&&(y.allowClick=!0)},0),!T||!S||!y.swipeDirection||0===y.touches.diff||P===I)return void(T=S=!1);T=S=!1;var r;if(r=y.params.followFinger?y.rtl?y.translate:-y.translate:-P,y.params.freeMode){if(r<-y.minTranslate())return void y.slideTo(y.activeIndex);if(r>-y.maxTranslate())return void(y.slides.length<y.snapGrid.length?y.slideTo(y.snapGrid.length-1):y.slideTo(y.slides.length-1));if(y.params.freeModeMomentum){if(H.length>1){var i=H.pop(),n=H.pop(),o=i.position-n.position,l=i.time-n.time;y.velocity=o/l,y.velocity=y.velocity/2,Math.abs(y.velocity)<y.params.freeModeMinimumVelocity&&(y.velocity=0),(l>150||(new window.Date).getTime()-i.time>300)&&(y.velocity=0)}else y.velocity=0;H.length=0;var p=1e3*y.params.freeModeMomentumRatio,d=y.velocity*p,u=y.translate+d;y.rtl&&(u=-u);var c,m=!1,f=20*Math.abs(y.velocity)*y.params.freeModeMomentumBounceRatio;if(u<y.maxTranslate())y.params.freeModeMomentumBounce?(u+y.maxTranslate()<-f&&(u=y.maxTranslate()-f),c=y.maxTranslate(),m=!0,B=!0):u=y.maxTranslate();else if(u>y.minTranslate())y.params.freeModeMomentumBounce?(u-y.minTranslate()>f&&(u=y.minTranslate()+f),c=y.minTranslate(),m=!0,B=!0):u=y.minTranslate();else if(y.params.freeModeSticky){var g,h=0;for(h=0;h<y.snapGrid.length;h+=1)if(y.snapGrid[h]>-u){g=h;break}u=Math.abs(y.snapGrid[g]-u)<Math.abs(y.snapGrid[g-1]-u)||"next"===y.swipeDirection?y.snapGrid[g]:y.snapGrid[g-1],y.rtl||(u=-u)}if(0!==y.velocity)p=y.rtl?Math.abs((-u-y.translate)/y.velocity):Math.abs((u-y.translate)/y.velocity);else if(y.params.freeModeSticky)return void y.slideReset();y.params.freeModeMomentumBounce&&m?(y.updateProgress(c),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating=!0,y.wrapper.transitionEnd(function(){y&&B&&(y.emit("onMomentumBounce",y),y.setWrapperTransition(y.params.speed),y.setWrapperTranslate(c),y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))})):y.velocity?(y.updateProgress(u),y.setWrapperTransition(p),y.setWrapperTranslate(u),y.onTransitionStart(),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd()}))):y.updateProgress(u),y.updateActiveIndex()}return void((!y.params.freeModeMomentum||s>=y.params.longSwipesMs)&&(y.updateProgress(),y.updateActiveIndex()))}var v,w=0,b=y.slidesSizesGrid[0];for(v=0;v<y.slidesGrid.length;v+=y.params.slidesPerGroup)"undefined"!=typeof y.slidesGrid[v+y.params.slidesPerGroup]?r>=y.slidesGrid[v]&&r<y.slidesGrid[v+y.params.slidesPerGroup]&&(w=v,b=y.slidesGrid[v+y.params.slidesPerGroup]-y.slidesGrid[v]):r>=y.slidesGrid[v]&&(w=v,b=y.slidesGrid[y.slidesGrid.length-1]-y.slidesGrid[y.slidesGrid.length-2]);var x=(r-y.slidesGrid[w])/b;if(s>y.params.longSwipesMs){if(!y.params.longSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&(x>=y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w)),"prev"===y.swipeDirection&&(x>1-y.params.longSwipesRatio?y.slideTo(w+y.params.slidesPerGroup):y.slideTo(w))}else{if(!y.params.shortSwipes)return void y.slideTo(y.activeIndex);"next"===y.swipeDirection&&y.slideTo(w+y.params.slidesPerGroup),"prev"===y.swipeDirection&&y.slideTo(w)}}},y._slideTo=function(e,a){return y.slideTo(e,a,!0,!0)},y.slideTo=function(e,a,t,s){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),y.snapIndex=Math.floor(e/y.params.slidesPerGroup),y.snapIndex>=y.snapGrid.length&&(y.snapIndex=y.snapGrid.length-1);var r=-y.snapGrid[y.snapIndex];y.params.autoplay&&y.autoplaying&&(s||!y.params.autoplayDisableOnInteraction?y.pauseAutoplay(a):y.stopAutoplay()),y.updateProgress(r);for(var i=0;i<y.slidesGrid.length;i++)-Math.floor(100*r)>=Math.floor(100*y.slidesGrid[i])&&(e=i);return!y.params.allowSwipeToNext&&r<y.translate&&r<y.minTranslate()?!1:!y.params.allowSwipeToPrev&&r>y.translate&&r>y.maxTranslate()&&(y.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=y.params.speed),y.previousIndex=y.activeIndex||0,y.activeIndex=e,y.rtl&&-r===y.translate||!y.rtl&&r===y.translate?(y.params.autoHeight&&y.updateAutoHeight(),y.updateClasses(),"slide"!==y.params.effect&&y.setWrapperTranslate(r),!1):(y.updateClasses(),y.onTransitionStart(t),0===a?(y.setWrapperTranslate(r),y.setWrapperTransition(0),y.onTransitionEnd(t)):(y.setWrapperTranslate(r),y.setWrapperTransition(a),y.animating||(y.animating=!0,y.wrapper.transitionEnd(function(){y&&y.onTransitionEnd(t)}))),!0))},y.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),y.params.autoHeight&&y.updateAutoHeight(),y.lazy&&y.lazy.onTransitionStart(),e&&(y.emit("onTransitionStart",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeStart",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextStart",y):y.emit("onSlidePrevStart",y)))},y.onTransitionEnd=function(e){y.animating=!1,y.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),y.lazy&&y.lazy.onTransitionEnd(),e&&(y.emit("onTransitionEnd",y),y.activeIndex!==y.previousIndex&&(y.emit("onSlideChangeEnd",y),y.activeIndex>y.previousIndex?y.emit("onSlideNextEnd",y):y.emit("onSlidePrevEnd",y))),y.params.hashnav&&y.hashnav&&y.hashnav.setHash()},y.slideNext=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)}return y.slideTo(y.activeIndex+y.params.slidesPerGroup,a,e,t)},y._slideNext=function(e){return y.slideNext(!0,e,!0)},y.slidePrev=function(e,a,t){if(y.params.loop){if(y.animating)return!1;y.fixLoop();y.container[0].clientLeft;return y.slideTo(y.activeIndex-1,a,e,t)}return y.slideTo(y.activeIndex-1,a,e,t)},y._slidePrev=function(e){return y.slidePrev(!0,e,!0)},y.slideReset=function(e,a,t){return y.slideTo(y.activeIndex,a,e)},y.setWrapperTransition=function(e,a){y.wrapper.transition(e),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTransition(e),y.params.parallax&&y.parallax&&y.parallax.setTransition(e),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTransition(e),y.params.control&&y.controller&&y.controller.setTransition(e,a),y.emit("onSetTransition",y,e)},y.setWrapperTranslate=function(e,a,t){var s=0,i=0,n=0;y.isHorizontal()?s=y.rtl?-e:e:i=e,y.params.roundLengths&&(s=r(s),i=r(i)),y.params.virtualTranslate||(y.support.transforms3d?y.wrapper.transform("translate3d("+s+"px, "+i+"px, "+n+"px)"):y.wrapper.transform("translate("+s+"px, "+i+"px)")),y.translate=y.isHorizontal()?s:i;var o,l=y.maxTranslate()-y.minTranslate();o=0===l?0:(e-y.minTranslate())/l,o!==y.progress&&y.updateProgress(e),a&&y.updateActiveIndex(),"slide"!==y.params.effect&&y.effects[y.params.effect]&&y.effects[y.params.effect].setTranslate(y.translate),y.params.parallax&&y.parallax&&y.parallax.setTranslate(y.translate),y.params.scrollbar&&y.scrollbar&&y.scrollbar.setTranslate(y.translate),y.params.control&&y.controller&&y.controller.setTranslate(y.translate,t),y.emit("onSetTranslate",y,y.translate)},y.getTranslate=function(e,a){var t,s,r,i;return"undefined"==typeof a&&(a="x"),y.params.virtualTranslate?y.rtl?-y.translate:y.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=r.transform||r.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(s=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(s=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),y.rtl&&s&&(s=-s),s||0)},y.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=y.isHorizontal()?"x":"y"),y.getTranslate(y.wrapper[0],e)},y.observers=[],y.initObservers=function(){if(y.params.observeParents)for(var e=y.container.parents(),a=0;a<e.length;a++)o(e[a]);o(y.container[0],{childList:!1}),o(y.wrapper[0],{attributes:!1})},y.disconnectObservers=function(){for(var e=0;e<y.observers.length;e++)y.observers[e].disconnect();y.observers=[]},y.createLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove();var e=y.wrapper.children("."+y.params.slideClass);"auto"!==y.params.slidesPerView||y.params.loopedSlides||(y.params.loopedSlides=e.length),y.loopedSlides=parseInt(y.params.loopedSlides||y.params.slidesPerView,10),y.loopedSlides=y.loopedSlides+y.params.loopAdditionalSlides,y.loopedSlides>e.length&&(y.loopedSlides=e.length);var t,s=[],r=[];for(e.each(function(t,i){var n=a(this);t<y.loopedSlides&&r.push(i),t<e.length&&t>=e.length-y.loopedSlides&&s.push(i),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)y.wrapper.append(a(r[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass));for(t=s.length-1;t>=0;t--)y.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(y.params.slideDuplicateClass))},y.destroyLoop=function(){y.wrapper.children("."+y.params.slideClass+"."+y.params.slideDuplicateClass).remove(),y.slides.removeAttr("data-swiper-slide-index")},y.reLoop=function(e){var a=y.activeIndex-y.loopedSlides;y.destroyLoop(),y.createLoop(),y.updateSlidesSize(),e&&y.slideTo(a+y.loopedSlides,0,!1)},y.fixLoop=function(){var e;y.activeIndex<y.loopedSlides?(e=y.slides.length-3*y.loopedSlides+y.activeIndex,e+=y.loopedSlides,y.slideTo(e,0,!1,!0)):("auto"===y.params.slidesPerView&&y.activeIndex>=2*y.loopedSlides||y.activeIndex>y.slides.length-2*y.params.slidesPerView)&&(e=-y.slides.length+y.activeIndex+y.loopedSlides,e+=y.loopedSlides,y.slideTo(e,0,!1,!0))},y.appendSlide=function(e){if(y.params.loop&&y.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&y.wrapper.append(e[a]);else y.wrapper.append(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0)},y.prependSlide=function(e){y.params.loop&&y.destroyLoop();var a=y.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&y.wrapper.prepend(e[t]);a=y.activeIndex+e.length}else y.wrapper.prepend(e);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.slideTo(a,0,!1)},y.removeSlide=function(e){y.params.loop&&(y.destroyLoop(),y.slides=y.wrapper.children("."+y.params.slideClass));var a,t=y.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)a=e[s],y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,y.slides[a]&&y.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);y.params.loop&&y.createLoop(),y.params.observer&&y.support.observer||y.update(!0),y.params.loop?y.slideTo(t+y.loopedSlides,0,!1):y.slideTo(t,0,!1)},y.removeAllSlides=function(){for(var e=[],a=0;a<y.slides.length;a++)e.push(a);y.removeSlide(e)},y.effects={fade:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var a=y.slides.eq(e),t=a[0].swiperSlideOffset,s=-t;y.params.virtualTranslate||(s-=y.translate);var r=0;y.isHorizontal()||(r=s,s=0);var i=y.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){if(y.slides.transition(e),y.params.virtualTranslate&&0!==e){var a=!1;y.slides.transitionEnd(function(){if(!a&&y){a=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)y.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<y.slides.length;e++){var t=y.slides.eq(e),s=t[0].progress;y.params.flip.limitRotation&&(s=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,i=-180*s,n=i,o=0,l=-r,p=0;if(y.isHorizontal()?y.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(s))+y.slides.length,y.params.flip.slideShadows){var d=y.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=y.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-s,0)),u.length&&(u[0].style.opacity=Math.max(s,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.virtualTranslate&&0!==e){var t=!1;y.slides.eq(y.activeIndex).transitionEnd(function(){if(!t&&y&&a(this).hasClass(y.params.slideActiveClass)){t=!0,y.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<e.length;s++)y.wrapper.trigger(e[s])}})}}},cube:{setTranslate:function(){var e,t=0;y.params.cube.shadow&&(y.isHorizontal()?(e=y.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.wrapper.append(e)),e.css({height:y.width+"px"})):(e=y.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),y.container.append(e))));for(var s=0;s<y.slides.length;s++){var r=y.slides.eq(s),i=90*s,n=Math.floor(i/360);y.rtl&&(i=-i,n=Math.floor(-i/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;s%4===0?(l=4*-n*y.size,d=0):(s-1)%4===0?(l=0,d=4*-n*y.size):(s-2)%4===0?(l=y.size+4*n*y.size,d=y.size):(s-3)%4===0&&(l=-y.size,d=3*y.size+4*y.size*n),y.rtl&&(l=-l),y.isHorizontal()||(p=l,l=0);var u="rotateX("+(y.isHorizontal()?0:-i)+"deg) rotateY("+(y.isHorizontal()?i:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*s+90*o,y.rtl&&(t=90*-s-90*o)),r.transform(u),y.params.cube.slideShadows){var c=y.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),m=y.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),r.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),r.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(y.wrapper.css({"-webkit-transform-origin":"50% 50% -"+y.size/2+"px","-moz-transform-origin":"50% 50% -"+y.size/2+"px","-ms-transform-origin":"50% 50% -"+y.size/2+"px","transform-origin":"50% 50% -"+y.size/2+"px"}),y.params.cube.shadow)if(y.isHorizontal())e.transform("translate3d(0px, "+(y.width/2+y.params.cube.shadowOffset)+"px, "+-y.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+y.params.cube.shadowScale+")");else{var f=Math.abs(t)-90*Math.floor(Math.abs(t)/90),g=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),h=y.params.cube.shadowScale,v=y.params.cube.shadowScale/g,w=y.params.cube.shadowOffset;e.transform("scale3d("+h+", 1, "+v+") translate3d(0px, "+(y.height/2+w)+"px, "+-y.height/2/v+"px) rotateX(-90deg)")}var b=y.isSafari||y.isUiWebView?-y.size/2:0;y.wrapper.transform("translate3d(0px,0,"+b+"px) rotateX("+(y.isHorizontal()?0:t)+"deg) rotateY("+(y.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),y.params.cube.shadow&&!y.isHorizontal()&&y.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=y.translate,t=y.isHorizontal()?-e+y.width/2:-e+y.height/2,s=y.isHorizontal()?y.params.coverflow.rotate:-y.params.coverflow.rotate,r=y.params.coverflow.depth,i=0,n=y.slides.length;n>i;i++){var o=y.slides.eq(i),l=y.slidesSizesGrid[i],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*y.params.coverflow.modifier,u=y.isHorizontal()?s*d:0,c=y.isHorizontal()?0:s*d,m=-r*Math.abs(d),f=y.isHorizontal()?0:y.params.coverflow.stretch*d,g=y.isHorizontal()?y.params.coverflow.stretch*d:0;Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var h="translate3d("+g+"px,"+f+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(h),o[0].style.zIndex=-Math.abs(Math.round(d))+1,y.params.coverflow.slideShadows){var v=y.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=y.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(y.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(y.browser.ie){var b=y.wrapper[0].style;b.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){y.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},y.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==y.slides.length)){var s=y.slides.eq(e),r=s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!s.hasClass("swiper-lazy")||s.hasClass("swiper-lazy-loaded")||s.hasClass("swiper-lazy-loading")||(r=r.add(s[0])),0!==r.length&&r.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),i=e.attr("data-src"),n=e.attr("data-srcset");y.loadImage(e[0],i||r,n,!1,function(){if(r?(e.css("background-image",'url("'+r+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),i&&(e.attr("src",i),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),s.find(".swiper-lazy-preloader, .preloader").remove(),y.params.loop&&t){var a=s.attr("data-swiper-slide-index");if(s.hasClass(y.params.slideDuplicateClass)){var o=y.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+y.params.slideDuplicateClass+")");y.lazy.loadImageInSlide(o.index(),!1)}else{var l=y.wrapper.children("."+y.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');y.lazy.loadImageInSlide(l.index(),!1)}}y.emit("onLazyImageReady",y,s[0],e[0])}),y.emit("onLazyImageLoad",y,s[0],e[0])})}},load:function(){var e;if(y.params.watchSlidesVisibility)y.wrapper.children("."+y.params.slideVisibleClass).each(function(){y.lazy.loadImageInSlide(a(this).index())});else if(y.params.slidesPerView>1)for(e=y.activeIndex;e<y.activeIndex+y.params.slidesPerView;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);else y.lazy.loadImageInSlide(y.activeIndex);if(y.params.lazyLoadingInPrevNext)if(y.params.slidesPerView>1||y.params.lazyLoadingInPrevNextAmount&&y.params.lazyLoadingInPrevNextAmount>1){var t=y.params.lazyLoadingInPrevNextAmount,s=y.params.slidesPerView,r=Math.min(y.activeIndex+s+Math.max(t,s),y.slides.length),i=Math.max(y.activeIndex-Math.max(s,t),0);for(e=y.activeIndex+y.params.slidesPerView;r>e;e++)y.slides[e]&&y.lazy.loadImageInSlide(e);for(e=i;e<y.activeIndex;e++)y.slides[e]&&y.lazy.loadImageInSlide(e)}else{var n=y.wrapper.children("."+y.params.slideNextClass);n.length>0&&y.lazy.loadImageInSlide(n.index());var o=y.wrapper.children("."+y.params.slidePrevClass);o.length>0&&y.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){y.params.lazyLoading&&(y.params.lazyLoadingOnTransitionStart||!y.params.lazyLoadingOnTransitionStart&&!y.lazy.initialImageLoaded)&&y.lazy.load()},onTransitionEnd:function(){y.params.lazyLoading&&!y.params.lazyLoadingOnTransitionStart&&y.lazy.load()}},y.scrollbar={isTouched:!1,setDragPosition:function(e){var a=y.scrollbar,t=y.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=t-a.track.offset()[y.isHorizontal()?"left":"top"]-a.dragSize/2,r=-y.minTranslate()*a.moveDivider,i=-y.maxTranslate()*a.moveDivider;r>s?s=r:s>i&&(s=i),s=-s/a.moveDivider,y.updateProgress(s),y.setWrapperTranslate(s,!0)},dragStart:function(e){var a=y.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),y.params.scrollbarHide&&a.track.css("opacity",1),y.wrapper.transition(100),a.drag.transition(100),y.emit("onScrollbarDragStart",y)},dragMove:function(e){var a=y.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),y.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),y.emit("onScrollbarDragMove",y))},dragEnd:function(e){var a=y.scrollbar;a.isTouched&&(a.isTouched=!1,y.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),y.emit("onScrollbarDragEnd",y),y.params.scrollbarSnapOnRelease&&y.slideReset())},enableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).on(y.touchEvents.start,e.dragStart),a(t).on(y.touchEvents.move,e.dragMove),a(t).on(y.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=y.scrollbar,t=y.support.touch?e.track:document;a(e.track).off(y.touchEvents.start,e.dragStart),a(t).off(y.touchEvents.move,e.dragMove),a(t).off(y.touchEvents.end,e.dragEnd)},set:function(){if(y.params.scrollbar){var e=y.scrollbar;e.track=a(y.params.scrollbar),y.params.uniqueNavElements&&"string"==typeof y.params.scrollbar&&e.track.length>1&&1===y.container.find(y.params.scrollbar).length&&(e.track=y.container.find(y.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=y.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=y.size/y.virtualSize,e.moveDivider=e.divider*(e.trackSize/y.size),e.dragSize=e.trackSize*e.divider,y.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",y.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(y.params.scrollbar){var e,a=y.scrollbar,t=(y.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*y.progress,y.rtl&&y.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),y.isHorizontal()?(y.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(y.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),y.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){y.params.scrollbar&&y.scrollbar.drag.transition(e)}},y.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,s;this.x.length;this.interpolate=function(e){return e?(s=r(this.x,e),t=s-1,(e-this.x[t])*(this.y[s]-this.y[t])/(this.x[s]-this.x[t])+this.y[t]):0};var r=function(){var e,a,t;return function(s,r){for(a=-1,e=s.length;e-a>1;)s[t=e+a>>1]<=r?a=t:e=t;return e}}()},getInterpolateFunction:function(e){y.controller.spline||(y.controller.spline=y.params.loop?new y.controller.LinearSpline(y.slidesGrid,e.slidesGrid):new y.controller.LinearSpline(y.snapGrid,e.snapGrid))},setTranslate:function(e,a){function s(a){e=a.rtl&&"horizontal"===a.params.direction?-y.translate:y.translate,"slide"===y.params.controlBy&&(y.controller.getInterpolateFunction(a),i=-y.controller.spline.interpolate(-e)),i&&"container"!==y.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(y.maxTranslate()-y.minTranslate()),i=(e-y.minTranslate())*r+a.minTranslate()),y.params.controlInverse&&(i=a.maxTranslate()-i),a.updateProgress(i),a.setWrapperTranslate(i,!1,y),a.updateActiveIndex()}var r,i,n=y.params.control;if(y.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&s(n[o]);else n instanceof t&&a!==n&&s(n)},setTransition:function(e,a){function s(a){a.setWrapperTransition(e,y),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){i&&(a.params.loop&&"slide"===y.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,i=y.params.control;if(y.isArray(i))for(r=0;r<i.length;r++)i[r]!==a&&i[r]instanceof t&&s(i[r]);else i instanceof t&&a!==i&&s(i)}},y.hashnav={init:function(){if(y.params.hashnav){y.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,s=y.slides.length;s>t;t++){var r=y.slides.eq(t),i=r.attr("data-hash");if(i===e&&!r.hasClass(y.params.slideDuplicateClass)){var n=r.index();y.slideTo(n,a,y.params.runCallbacksOnInit,!0)}}}},setHash:function(){y.hashnav.initialized&&y.params.hashnav&&(document.location.hash=y.slides.eq(y.activeIndex).attr("data-hash")||"")}},y.disableKeyboardControl=function(){y.params.keyboardControl=!1,a(document).off("keydown",l)},y.enableKeyboardControl=function(){y.params.keyboardControl=!0,a(document).on("keydown",l)},y.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},y.params.mousewheelControl){try{new window.WheelEvent("wheel"),y.mousewheel.event="wheel"}catch(O){(window.WheelEvent||y.container[0]&&"wheel"in y.container[0])&&(y.mousewheel.event="wheel")}!y.mousewheel.event&&window.WheelEvent,y.mousewheel.event||void 0===document.onmousewheel||(y.mousewheel.event="mousewheel"),y.mousewheel.event||(y.mousewheel.event="DOMMouseScroll")}y.disableMousewheelControl=function(){return y.mousewheel.event?(y.container.off(y.mousewheel.event,p),!0):!1},y.enableMousewheelControl=function(){return y.mousewheel.event?(y.container.on(y.mousewheel.event,p),!0):!1},y.parallax={setTranslate:function(){y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){d(this,y.progress)}),y.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);d(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=y.params.speed),y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),s=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(s=0),t.transition(s)})}},y._plugins=[];for(var N in y.plugins){var R=y.plugins[N](y,y.params[N]);R&&y._plugins.push(R)}return y.callPlugins=function(e){for(var a=0;a<y._plugins.length;a++)e in y._plugins[a]&&y._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.emitterEventListeners={},y.emit=function(e){y.params[e]&&y.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(y.emitterEventListeners[e])for(a=0;a<y.emitterEventListeners[e].length;a++)y.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);y.callPlugins&&y.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},y.on=function(e,a){return e=u(e),y.emitterEventListeners[e]||(y.emitterEventListeners[e]=[]),y.emitterEventListeners[e].push(a),y},y.off=function(e,a){var t;if(e=u(e),"undefined"==typeof a)return y.emitterEventListeners[e]=[],y;if(y.emitterEventListeners[e]&&0!==y.emitterEventListeners[e].length){for(t=0;t<y.emitterEventListeners[e].length;t++)y.emitterEventListeners[e][t]===a&&y.emitterEventListeners[e].splice(t,1);return y}},y.once=function(e,a){e=u(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),y.off(e,t)};return y.on(e,t),y},y.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(y.params.nextButton)?(y.onClickNext(e),y.isEnd?y.a11y.notify(y.params.lastSlideMessage):y.a11y.notify(y.params.nextSlideMessage)):a(e.target).is(y.params.prevButton)&&(y.onClickPrev(e),y.isBeginning?y.a11y.notify(y.params.firstSlideMessage):y.a11y.notify(y.params.prevSlideMessage)),a(e.target).is("."+y.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=y.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){y.params.nextButton&&y.nextButton&&y.nextButton.length>0&&(y.a11y.makeFocusable(y.nextButton),y.a11y.addRole(y.nextButton,"button"),y.a11y.addLabel(y.nextButton,y.params.nextSlideMessage)),y.params.prevButton&&y.prevButton&&y.prevButton.length>0&&(y.a11y.makeFocusable(y.prevButton),y.a11y.addRole(y.prevButton,"button"),y.a11y.addLabel(y.prevButton,y.params.prevSlideMessage)),a(y.container).append(y.a11y.liveRegion)},initPagination:function(){y.params.pagination&&y.params.paginationClickable&&y.bullets&&y.bullets.length&&y.bullets.each(function(){var e=a(this);y.a11y.makeFocusable(e),y.a11y.addRole(e,"button"),y.a11y.addLabel(e,y.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){y.a11y.liveRegion&&y.a11y.liveRegion.length>0&&y.a11y.liveRegion.remove()}},y.init=function(){y.params.loop&&y.createLoop(),y.updateContainerSize(),y.updateSlidesSize(),y.updatePagination(),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.set(),y.params.scrollbarDraggable&&y.scrollbar.enableDraggable()),"slide"!==y.params.effect&&y.effects[y.params.effect]&&(y.params.loop||y.updateProgress(),y.effects[y.params.effect].setTranslate()),y.params.loop?y.slideTo(y.params.initialSlide+y.loopedSlides,0,y.params.runCallbacksOnInit):(y.slideTo(y.params.initialSlide,0,y.params.runCallbacksOnInit),0===y.params.initialSlide&&(y.parallax&&y.params.parallax&&y.parallax.setTranslate(),y.lazy&&y.params.lazyLoading&&(y.lazy.load(),y.lazy.initialImageLoaded=!0))),y.attachEvents(),y.params.observer&&y.support.observer&&y.initObservers(),y.params.preloadImages&&!y.params.lazyLoading&&y.preloadImages(),y.params.autoplay&&y.startAutoplay(),y.params.keyboardControl&&y.enableKeyboardControl&&y.enableKeyboardControl(),y.params.mousewheelControl&&y.enableMousewheelControl&&y.enableMousewheelControl(),y.params.hashnav&&y.hashnav&&y.hashnav.init(),y.params.a11y&&y.a11y&&y.a11y.init(),y.emit("onInit",y)},y.cleanupStyles=function(){y.container.removeClass(y.classNames.join(" ")).removeAttr("style"),y.wrapper.removeAttr("style"),y.slides&&y.slides.length&&y.slides.removeClass([y.params.slideVisibleClass,y.params.slideActiveClass,y.params.slideNextClass,y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),y.paginationContainer&&y.paginationContainer.length&&y.paginationContainer.removeClass(y.params.paginationHiddenClass),y.bullets&&y.bullets.length&&y.bullets.removeClass(y.params.bulletActiveClass),y.params.prevButton&&a(y.params.prevButton).removeClass(y.params.buttonDisabledClass),y.params.nextButton&&a(y.params.nextButton).removeClass(y.params.buttonDisabledClass),y.params.scrollbar&&y.scrollbar&&(y.scrollbar.track&&y.scrollbar.track.length&&y.scrollbar.track.removeAttr("style"),y.scrollbar.drag&&y.scrollbar.drag.length&&y.scrollbar.drag.removeAttr("style"))},y.destroy=function(e,a){y.detachEvents(),y.stopAutoplay(),y.params.scrollbar&&y.scrollbar&&y.params.scrollbarDraggable&&y.scrollbar.disableDraggable(),y.params.loop&&y.destroyLoop(),a&&y.cleanupStyles(),y.disconnectObservers(),y.params.keyboardControl&&y.disableKeyboardControl&&y.disableKeyboardControl(),y.params.mousewheelControl&&y.disableMousewheelControl&&y.disableMousewheelControl(),y.params.a11y&&y.a11y&&y.a11y.destroy(),y.emit("onDestroy"),e!==!1&&(y=null)},y.init(),y}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||r||s,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var s=["jQuery","Zepto","Dom7"],r=0;r<s.length;r++)window[s[r]]&&e(window[s[r]]);var i;i="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7,i&&("transitionEnd"in i.fn||(i.fn.transitionEnd=function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<s.length;t++)r.off(s[t],a)}var t,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<s.length;t++)r.on(s[t],a);return this}),"transform"in i.fn||(i.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in i.fn||(i.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.8.1, built on 2016-07-29 1:10:55 AM
 * @author      https://twitter.com/formvalidation
 * @copyright   (c) 2013 - 2016 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
if(window.FormValidation={AddOn:{},Framework:{},I18n:{},Validator:{}},"undefined"==typeof jQuery)throw new Error("FormValidation requires jQuery");!function(t){var e=t.fn.jquery.split(" ")[0].split(".");if(+e[0]<2&&+e[1]<9||1==+e[0]&&9==+e[1]&&+e[2]<1)throw new Error("FormValidation requires jQuery version 1.9.1 or higher")}(jQuery),function(t){FormValidation.Base=function(e,a,i){this.$form=t(e),this.options=t.extend({},t.fn.formValidation.DEFAULT_OPTIONS,a),this._namespace=i||"fv",this.$invalidFields=t([]),this.$submitButton=null,this.$hiddenButton=null,this.STATUS_NOT_VALIDATED="NOT_VALIDATED",this.STATUS_VALIDATING="VALIDATING",this.STATUS_INVALID="INVALID",this.STATUS_VALID="VALID",this.STATUS_IGNORED="IGNORED",this.DEFAULT_MESSAGE=t.fn.formValidation.DEFAULT_MESSAGE,this._ieVersion=function(){for(var t=3,e=document.createElement("div"),a=e.all||[];e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><br><![endif]--\x3e",a[0];);return t>4?t:document.documentMode}();var r=document.createElement("div"),n=this;this._changeEvent=9!==this._ieVersion&&"oninput"in r?"input":"keyup",this._submitIfValid=null,this._cacheFields={},function(){if("undefined"!=typeof M&&M.weburl&&"cn"!=M.plugin_lang&&"undefined"!=typeof M.validation_locale){var t=M.weburl+"app/system/include/static2/vendor/formvalidation/language/"+M.validation_locale+".js";$.cachedScript(t).done(function(t,e,a){n._init()})}else n._init()}()},FormValidation.Base.prototype={constructor:FormValidation.Base,_exceedThreshold:function(e){var a=this._namespace,i=e.attr("data-"+a+"-field"),r=this.options.fields[i].threshold||this.options.threshold;return!r||(-1!==t.inArray(e.attr("type"),["button","checkbox","file","hidden","image","radio","reset","submit"])||e.val().length>=r)},_init:function(){var e=this,a=this._namespace,i={addOns:{},autoFocus:this.$form.attr("data-"+a+"-autofocus"),button:{selector:this.$form.attr("data-"+a+"-button-selector")||this.$form.attr("data-"+a+"-submitbuttons"),disabled:this.$form.attr("data-"+a+"-button-disabled")},control:{valid:this.$form.attr("data-"+a+"-control-valid"),invalid:this.$form.attr("data-"+a+"-control-invalid")},err:{clazz:this.$form.attr("data-"+a+"-err-clazz"),container:this.$form.attr("data-"+a+"-err-container")||this.$form.attr("data-"+a+"-container"),parent:this.$form.attr("data-"+a+"-err-parent")},events:{formInit:this.$form.attr("data-"+a+"-events-form-init"),formPreValidate:this.$form.attr("data-"+a+"-events-form-prevalidate"),formError:this.$form.attr("data-"+a+"-events-form-error"),formReset:this.$form.attr("data-"+a+"-events-form-reset"),formSuccess:this.$form.attr("data-"+a+"-events-form-success"),fieldAdded:this.$form.attr("data-"+a+"-events-field-added"),fieldRemoved:this.$form.attr("data-"+a+"-events-field-removed"),fieldInit:this.$form.attr("data-"+a+"-events-field-init"),fieldError:this.$form.attr("data-"+a+"-events-field-error"),fieldReset:this.$form.attr("data-"+a+"-events-field-reset"),fieldSuccess:this.$form.attr("data-"+a+"-events-field-success"),fieldStatus:this.$form.attr("data-"+a+"-events-field-status"),localeChanged:this.$form.attr("data-"+a+"-events-locale-changed"),validatorError:this.$form.attr("data-"+a+"-events-validator-error"),validatorSuccess:this.$form.attr("data-"+a+"-events-validator-success"),validatorIgnored:this.$form.attr("data-"+a+"-events-validator-ignored")},excluded:this.$form.attr("data-"+a+"-excluded"),icon:{valid:this.$form.attr("data-"+a+"-icon-valid")||this.$form.attr("data-"+a+"-feedbackicons-valid"),invalid:this.$form.attr("data-"+a+"-icon-invalid")||this.$form.attr("data-"+a+"-feedbackicons-invalid"),validating:this.$form.attr("data-"+a+"-icon-validating")||this.$form.attr("data-"+a+"-feedbackicons-validating"),feedback:this.$form.attr("data-"+a+"-icon-feedback")},live:this.$form.attr("data-"+a+"-live"),locale:this.$form.attr("data-"+a+"-locale"),message:this.$form.attr("data-"+a+"-message"),onPreValidate:this.$form.attr("data-"+a+"-onprevalidate"),onError:this.$form.attr("data-"+a+"-onerror"),onReset:this.$form.attr("data-"+a+"-onreset"),onSuccess:this.$form.attr("data-"+a+"-onsuccess"),row:{selector:this.$form.attr("data-"+a+"-row-selector")||this.$form.attr("data-"+a+"-group"),valid:this.$form.attr("data-"+a+"-row-valid"),invalid:this.$form.attr("data-"+a+"-row-invalid"),feedback:this.$form.attr("data-"+a+"-row-feedback")},threshold:this.$form.attr("data-"+a+"-threshold"),trigger:this.$form.attr("data-"+a+"-trigger"),verbose:this.$form.attr("data-"+a+"-verbose"),fields:{}};this.$form.attr("novalidate","novalidate").addClass(this.options.elementClass).on("submit."+a,function(t){t.preventDefault(),e.validate()}).on("click."+a,this.options.button.selector,function(){e.$submitButton=t(this),e._submitIfValid=!0}),(!0===this.options.declarative||"true"===this.options.declarative)&&this.$form.find("[name], [data-"+a+"-field]").each(function(){var r=t(this),n=r.attr("name")||r.attr("data-"+a+"-field"),s=e._parseOptions(r);s&&(r.attr("data-"+a+"-field",n),i.fields[n]=t.extend({},s,i.fields[n]))}),this.options=t.extend(!0,this.options,i),"string"==typeof this.options.err.parent&&(this.options.err.parent=new RegExp(this.options.err.parent)),this.options.container&&(this.options.err.container=this.options.container,delete this.options.container),this.options.feedbackIcons&&(this.options.icon=t.extend(!0,this.options.icon,this.options.feedbackIcons),delete this.options.feedbackIcons),this.options.group&&(this.options.row.selector=this.options.group,delete this.options.group),this.options.submitButtons&&(this.options.button.selector=this.options.submitButtons,delete this.options.submitButtons),FormValidation.I18n[this.options.locale]||(this.options.locale=t.fn.formValidation.DEFAULT_OPTIONS.locale),(!0===this.options.declarative||"true"===this.options.declarative)&&(this.options=t.extend(!0,this.options,{addOns:this._parseAddOnOptions()})),this.$hiddenButton=t("<button/>").attr("type","submit").prependTo(this.$form).addClass("fv-hidden-submit").css({display:"none",width:0,height:0}),this.$form.on("click."+this._namespace,'[type="submit"]',function(a){if(!a.isDefaultPrevented()){var i=t(a.target),r=i.is('[type="submit"]')?i.eq(0):i.parent('[type="submit"]').eq(0);if(e.options.button.selector&&!r.is(e.options.button.selector)&&!r.is(e.$hiddenButton))return e.$form.off("submit."+e._namespace).submit(),!1}});for(var r in this.options.fields)this._initField(r);for(var n in this.options.addOns)"function"==typeof FormValidation.AddOn[n].init&&FormValidation.AddOn[n].init(this,this.options.addOns[n]);this.$form.trigger(t.Event(this.options.events.formInit),{bv:this,fv:this,options:this.options}),this.options.onPreValidate&&this.$form.on(this.options.events.formPreValidate,function(t){FormValidation.Helper.call(e.options.onPreValidate,[t])}),this.options.onSuccess&&this.$form.on(this.options.events.formSuccess,function(t){FormValidation.Helper.call(e.options.onSuccess,[t])}),this.options.onError&&this.$form.on(this.options.events.formError,function(t){FormValidation.Helper.call(e.options.onError,[t])}),this.options.onReset&&this.$form.on(this.options.events.formReset,function(t){FormValidation.Helper.call(e.options.onReset,[t])})},_initField:function(e){var a=this._namespace,i=t([]);switch(typeof e){case"object":i=e,e=e.attr("data-"+a+"-field");break;case"string":(i=this.getFieldElements(e)).attr("data-"+a+"-field",e)}
if(0!==i.length&&null!==this.options.fields[e]&&null!==this.options.fields[e].validators){var r,n,s=this.options.fields[e].validators;for(r in s)n=s[r].alias||r,FormValidation.Validator[n]||delete this.options.fields[e].validators[r];null===this.options.fields[e].enabled&&(this.options.fields[e].enabled=!0);for(var o=this,l=i.length,d=i.attr("type"),u=1===l||"radio"===d||"checkbox"===d,f=this._getFieldTrigger(i.eq(0)),c=this.options.err.clazz.split(" ").join("."),h=t.map(f,function(t){return t+".update."+a}).join(" "),p=0;l>p;p++){var m=i.eq(p),v=this.options.fields[e].row||this.options.row.selector,g=m.closest(v),A="function"==typeof(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container)?(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container).call(this,m,this):this.options.fields[e].container||this.options.fields[e].err||this.options.err.container,I=A&&"tooltip"!==A&&"popover"!==A?t(A):this._getMessageContainer(m,v);A&&"tooltip"!==A&&"popover"!==A&&I.addClass(this.options.err.clazz),I.find("."+c+"[data-"+a+"-validator][data-"+a+'-for="'+e+'"]').remove(),g.find("i[data-"+a+'-icon-for="'+e+'"]').remove(),m.off(h).on(h,function(){o.updateStatus(t(this),o.STATUS_NOT_VALIDATED)}),m.data(a+".messages",I);for(r in s)m.data(a+".result."+r,this.STATUS_NOT_VALIDATED),u&&p!==l-1||t("<small/>").css("display","none").addClass(this.options.err.clazz).attr("data-"+a+"-validator",r).attr("data-"+a+"-for",e).attr("data-"+a+"-result",this.STATUS_NOT_VALIDATED).html(this._getMessage(e,r)).appendTo(I),n=s[r].alias||r,"function"==typeof FormValidation.Validator[n].init&&FormValidation.Validator[n].init(this,m,this.options.fields[e].validators[r],r);if(!1!==this.options.fields[e].icon&&"false"!==this.options.fields[e].icon&&this.options.icon&&this.options.icon.valid&&this.options.icon.invalid&&this.options.icon.validating&&(!u||p===l-1)){g.addClass(this.options.row.feedback);var b=t("<i/>").css("display","none").addClass(this.options.icon.feedback).attr("data-"+a+"-icon-for",e).insertAfter(m);(u?i:m).data(a+".icon",b),("tooltip"===A||"popover"===A)&&((u?i:m).on(this.options.events.fieldError,function(){g.addClass("fv-has-tooltip")}).on(this.options.events.fieldSuccess,function(){g.removeClass("fv-has-tooltip")}),m.off("focus.container."+a).on("focus.container."+a,function(){o._showTooltip(t(this),A)}).off("blur.container."+a).on("blur.container."+a,function(){o._hideTooltip(t(this),A)})),"string"==typeof this.options.fields[e].icon&&"true"!==this.options.fields[e].icon?b.appendTo(t(this.options.fields[e].icon)):this._fixIcon(m,b)}}
var F=[];for(r in s)n=s[r].alias||r,s[r].priority=parseInt(s[r].priority||FormValidation.Validator[n].priority||1,10),F.push({validator:r,priority:s[r].priority});F=F.sort(function(t,e){return t.priority-e.priority}),i.data(a+".validators",F).on(this.options.events.fieldSuccess,function(t,e){var a=o.getOptions(e.field,null,"onSuccess");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.fieldError,function(t,e){var a=o.getOptions(e.field,null,"onError");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.fieldReset,function(t,e){var a=o.getOptions(e.field,null,"onReset");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.fieldStatus,function(t,e){var a=o.getOptions(e.field,null,"onStatus");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.validatorError,function(t,e){var a=o.getOptions(e.field,e.validator,"onError");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.validatorIgnored,function(t,e){var a=o.getOptions(e.field,e.validator,"onIgnored");a&&FormValidation.Helper.call(a,[t,e])}).on(this.options.events.validatorSuccess,function(t,e){var a=o.getOptions(e.field,e.validator,"onSuccess");a&&FormValidation.Helper.call(a,[t,e])}),this.onLiveChange(i,"live",function(){o._exceedThreshold(t(this))&&o.validateField(t(this))}),i.trigger(t.Event(this.options.events.fieldInit),{bv:this,fv:this,field:e,element:i})}},_isExcluded:function(e){var a=this._namespace,i=e.attr("data-"+a+"-excluded"),r=e.attr("data-"+a+"-field")||e.attr("name");switch(!0){case!!r&&this.options.fields&&this.options.fields[r]&&("true"===this.options.fields[r].excluded||!0===this.options.fields[r].excluded):case"true"===i:case""===i:return!0;case!!r&&this.options.fields&&this.options.fields[r]&&("false"===this.options.fields[r].excluded||!1===this.options.fields[r].excluded):case"false"===i:return!1;case!!r&&this.options.fields&&this.options.fields[r]&&"function"==typeof this.options.fields[r].excluded:return this.options.fields[r].excluded.call(this,e,this);case!!r&&this.options.fields&&this.options.fields[r]&&"string"==typeof this.options.fields[r].excluded:case i:return FormValidation.Helper.call(this.options.fields[r].excluded,[e,this]);default:if(this.options.excluded){"string"==typeof this.options.excluded&&(this.options.excluded=t.map(this.options.excluded.split(","),function(e){return t.trim(e)}));for(var n=this.options.excluded.length,s=0;n>s;s++)
if("string"==typeof this.options.excluded[s]&&e.is(this.options.excluded[s])||"function"==typeof this.options.excluded[s]&&!0===this.options.excluded[s].call(this,e,this))return!0}
return!1}},_getFieldTrigger:function(t){var e=this._namespace,a=t.data(e+".trigger");if(a)return a;var i=t.attr("type"),r=t.attr("data-"+e+"-field"),n="radio"===i||"checkbox"===i||"file"===i||"SELECT"===t.get(0).tagName||t.data('fv-remote')?"change":this._ieVersion>=10&&t.attr("placeholder")?"keyup":this._changeEvent;return a=((this.options.fields[r]?this.options.fields[r].trigger:null)||this.options.trigger||n).split(" "),t.data(e+".trigger",a),a},_getMessage:function(t,e){if(!this.options.fields[t]||!this.options.fields[t].validators)return"";var a=this.options.fields[t].validators,i=a[e]&&a[e].alias?a[e].alias:e;if(!FormValidation.Validator[i])return"";switch(!0){case!!a[e].message:return a[e].message;case!!this.options.fields[t].message:return this.options.fields[t].message;case!!this.options.message:return this.options.message;case!!FormValidation.I18n[this.options.locale]&&!!FormValidation.I18n[this.options.locale][i]&&!!FormValidation.I18n[this.options.locale][i].default:return FormValidation.I18n[this.options.locale][i].default;default:return this.DEFAULT_MESSAGE}},_getMessageContainer:function(t,e){if(!this.options.err.parent)throw new Error("The err.parent option is not defined");var a=t.parent();if(a.is(e))return a;var i=a.attr("class");return i&&this.options.err.parent.test(i)?a:this._getMessageContainer(a,e)},_parseAddOnOptions:function(){var t=this._namespace,e=this.$form.attr("data-"+t+"-addons"),a=this.options.addOns||{};if(e){e=e.replace(/\s/g,"").split(",");for(var i=0;i<e.length;i++)a[e[i]]||(a[e[i]]={})}
var r,n,s,o;for(r in a)
if(FormValidation.AddOn[r]){if(n=FormValidation.AddOn[r].html5Attributes)
for(s in n)(o=this.$form.attr("data-"+t+"-addons-"+r.toLowerCase()+"-"+s.toLowerCase()))&&(a[r][n[s]]=o)}else delete a[r];return a},_parseOptions:function(e){var a,i,r,n,s,o,l,d,u,f=this._namespace,c=e.attr("name")||e.attr("data-"+f+"-field"),h={},p=new RegExp("^data-"+f+"-([a-z]+)-alias$"),m=t.extend({},FormValidation.Validator);t.each(e.get(0).attributes,function(t,e){e.value&&p.test(e.name)&&(i=e.name.split("-")[2],m[e.value]&&(m[i]=m[e.value],m[i].alias=e.value))});for(i in m)
if(a=m[i],r="data-"+f+"-"+i.toLowerCase(),n=e.attr(r)+"",(u="function"==typeof a.enableByHtml5?a.enableByHtml5(e):null)&&"false"!==n||!0!==u&&(""===n||"true"===n||r===n.toLowerCase())){a.html5Attributes=t.extend({},{message:"message",onerror:"onError",onreset:"onReset",onsuccess:"onSuccess",priority:"priority",transformer:"transformer"},a.html5Attributes),h[i]=t.extend({},!0===u?{}:u,h[i]),a.alias&&(h[i].alias=a.alias);for(d in a.html5Attributes)s=a.html5Attributes[d],o="data-"+f+"-"+i.toLowerCase()+"-"+d,(l=e.attr(o))&&("true"===l||o===l.toLowerCase()?l=!0:"false"===l&&(l=!1),h[i][s]=l)}
var v={autoFocus:e.attr("data-"+f+"-autofocus"),err:e.attr("data-"+f+"-err-container")||e.attr("data-"+f+"-container"),enabled:e.attr("data-"+f+"-enabled"),excluded:e.attr("data-"+f+"-excluded"),icon:e.attr("data-"+f+"-icon")||e.attr("data-"+f+"-feedbackicons")||(this.options.fields&&this.options.fields[c]?this.options.fields[c].feedbackIcons:null),message:e.attr("data-"+f+"-message"),onError:e.attr("data-"+f+"-onerror"),onReset:e.attr("data-"+f+"-onreset"),onStatus:e.attr("data-"+f+"-onstatus"),onSuccess:e.attr("data-"+f+"-onsuccess"),row:e.attr("data-"+f+"-row")||e.attr("data-"+f+"-group")||(this.options.fields&&this.options.fields[c]?this.options.fields[c].group:null),selector:e.attr("data-"+f+"-selector"),threshold:e.attr("data-"+f+"-threshold"),transformer:e.attr("data-"+f+"-transformer"),trigger:e.attr("data-"+f+"-trigger"),verbose:e.attr("data-"+f+"-verbose"),validators:h},g=t.isEmptyObject(v);return!t.isEmptyObject(h)||!g&&this.options.fields&&this.options.fields[c]?v:null},_submit:function(){var e=this.isValid();if(null!==e){var a=e?this.options.events.formSuccess:this.options.events.formError,i=t.Event(a);this.$form.trigger(i),this.$submitButton&&(e?this._onSuccess(i):this._onError(i))}},_onError:function(e){if(!e.isDefaultPrevented()){if("submitted"===this.options.live){this.options.live="enabled";var a=this;for(var i in this.options.fields)!function(e){var i=a.getFieldElements(e);i.length&&a.onLiveChange(i,"live",function(){a._exceedThreshold(t(this))&&a.validateField(t(this))})}(i)}
for(var r=this._namespace,n=0;n<this.$invalidFields.length;n++){var s=this.$invalidFields.eq(n);if(this.isOptionEnabled(s.attr("data-"+r+"-field"),"autoFocus")){s.focus();break}}}},_onFieldValidated:function(e,a){var i=this._namespace,r=e.attr("data-"+i+"-field"),n=this.options.fields[r].validators,s={},o=0,l={bv:this,fv:this,field:r,element:e,validator:a,result:e.data(i+".response."+a)};if(a)switch(e.data(i+".result."+a)){case this.STATUS_INVALID:e.trigger(t.Event(this.options.events.validatorError),l);break;case this.STATUS_VALID:e.trigger(t.Event(this.options.events.validatorSuccess),l);break;case this.STATUS_IGNORED:e.trigger(t.Event(this.options.events.validatorIgnored),l)}
s[this.STATUS_NOT_VALIDATED]=0,s[this.STATUS_VALIDATING]=0,s[this.STATUS_INVALID]=0,s[this.STATUS_VALID]=0,s[this.STATUS_IGNORED]=0;for(var d in n)
if(!1!==n[d].enabled){o++;var u=e.data(i+".result."+d);u&&s[u]++}
s[this.STATUS_VALID]+s[this.STATUS_IGNORED]===o?(this.$invalidFields=this.$invalidFields.not(e),e.trigger(t.Event(this.options.events.fieldSuccess),l)):(0===s[this.STATUS_NOT_VALIDATED]||!this.isOptionEnabled(r,"verbose"))&&0===s[this.STATUS_VALIDATING]&&s[this.STATUS_INVALID]>0&&(this.$invalidFields=this.$invalidFields.add(e),e.trigger(t.Event(this.options.events.fieldError),l))},_onSuccess:function(t){t.isDefaultPrevented()||this.disableSubmitButtons(!0).defaultSubmit()},_fixIcon:function(t,e){},_createTooltip:function(t,e,a){},_destroyTooltip:function(t,e){},_hideTooltip:function(t,e){},_showTooltip:function(t,e){},defaultSubmit:function(){var e=this._namespace;this.$submitButton&&t("<input/>").attr({type:"hidden",name:this.$submitButton.attr("name")}).attr("data-"+e+"-submit-hidden","").val(this.$submitButton.val()).appendTo(this.$form),this.$form.off("submit."+e).submit()},disableSubmitButtons:function(t){return t?"disabled"!==this.options.live&&this.$form.find(this.options.button.selector).attr("disabled","disabled").addClass(this.options.button.disabled):this.$form.find(this.options.button.selector).removeAttr("disabled").removeClass(this.options.button.disabled),this},getFieldElements:function(e){if(!this._cacheFields[e])
if(this.options.fields[e]&&this.options.fields[e].selector){var a=this.$form.find(this.options.fields[e].selector);this._cacheFields[e]=a.length?a:t(this.options.fields[e].selector)}else this._cacheFields[e]=this.$form.find('[name="'+e+'"]');return this._cacheFields[e]},getFieldValue:function(t,e){var a,i=this._namespace;if("string"==typeof t){if(0===(a=this.getFieldElements(t)).length)return null}else a=t,t=a.attr("data-"+i+"-field");if(!t||!this.options.fields[t])return a.val();var r=(this.options.fields[t].validators&&this.options.fields[t].validators[e]?this.options.fields[t].validators[e].transformer:null)||this.options.fields[t].transformer;return r?FormValidation.Helper.call(r,[a,e,this]):a.val()},getNamespace:function(){return this._namespace},getOptions:function(t,e,a){var i=this._namespace;if(!t)return a?this.options[a]:this.options;if("object"==typeof t&&(t=t.attr("data-"+i+"-field")),!this.options.fields[t])return null;var r=this.options.fields[t];return e?r.validators&&r.validators[e]?a?r.validators[e][a]:r.validators[e]:null:a?r[a]:r},getStatus:function(t,e){var a=this._namespace;switch(typeof t){case"object":return t.data(a+".result."+e);case"string":default:return this.getFieldElements(t).eq(0).data(a+".result."+e)}},isOptionEnabled:function(t,e){return!(!this.options.fields[t]||"true"!==this.options.fields[t][e]&&!0!==this.options.fields[t][e])||(!this.options.fields[t]||"false"!==this.options.fields[t][e]&&!1!==this.options.fields[t][e])&&("true"===this.options[e]||!0===this.options[e])},isValid:function(){for(var t in this.options.fields){var e=this.isValidField(t);if(null===e)return null;if(!1===e)return!1}
return!0},isValidContainer:function(e){var a=this,i=this._namespace,r=[],n="string"==typeof e?t(e):e;if(0===n.length)return!0;n.find("[data-"+i+"-field]").each(function(){var e=t(this);a._isExcluded(e)||r.push(e)});for(var s=r.length,o=this.options.err.clazz.split(" ").join("."),l=0;s>l;l++){var d=r[l],u=d.attr("data-"+i+"-field"),f=d.data(i+".messages").find("."+o+"[data-"+i+"-validator][data-"+i+'-for="'+u+'"]');if(!this.options.fields||!this.options.fields[u]||"false"!==this.options.fields[u].enabled&&!1!==this.options.fields[u].enabled){if(f.filter("[data-"+i+'-result="'+this.STATUS_INVALID+'"]').length>0)return!1;if(f.filter("[data-"+i+'-result="'+this.STATUS_NOT_VALIDATED+'"]').length>0||f.filter("[data-"+i+'-result="'+this.STATUS_VALIDATING+'"]').length>0)return null}}
return!0},isValidField:function(e){var a=this._namespace,i=t([]);switch(typeof e){case"object":i=e,e=e.attr("data-"+a+"-field");break;case"string":i=this.getFieldElements(e)}
if(0===i.length||!this.options.fields[e]||"false"===this.options.fields[e].enabled||!1===this.options.fields[e].enabled)return!0;for(var r,n,s,o=i.attr("type"),l="radio"===o||"checkbox"===o?1:i.length,d=0;l>d;d++)
if(r=i.eq(d),!this._isExcluded(r))
for(n in this.options.fields[e].validators)
if(!1!==this.options.fields[e].validators[n].enabled){if((s=r.data(a+".result."+n))===this.STATUS_VALIDATING||s===this.STATUS_NOT_VALIDATED)return null;if(s===this.STATUS_INVALID)return!1}
return!0},offLiveChange:function(e,a){if(null===e||0===e.length)return this;var i=this._namespace,r=this._getFieldTrigger(e.eq(0)),n=t.map(r,function(t){return t+"."+a+"."+i}).join(" ");return e.off(n),this},onLiveChange:function(e,a,i){if(null===e||0===e.length)return this;var r=this._namespace,n=this._getFieldTrigger(e.eq(0)),s=t.map(n,function(t){return t+"."+a+"."+r}).join(" ");switch(this.options.live){case"submitted":break;case"disabled":e.off(s);break;case"enabled":default:e.off(s).on(s,function(t){i.apply(this,arguments)})}
return this},updateMessage:function(e,a,i){var r=this._namespace,n=t([]);switch(typeof e){case"object":n=e,e=e.attr("data-"+r+"-field");break;case"string":n=this.getFieldElements(e)}
var s=this.options.err.clazz.split(" ").join(".");return n.each(function(){t(this).data(r+".messages").find("."+s+"[data-"+r+'-validator="'+a+'"][data-'+r+'-for="'+e+'"]').html(i)}),this},updateStatus:function(e,a,i){var r=this._namespace,n=t([]);switch(typeof e){case"object":n=e,e=e.attr("data-"+r+"-field");break;case"string":n=this.getFieldElements(e)}
if(!e||!this.options.fields[e])return this;a===this.STATUS_NOT_VALIDATED&&(this._submitIfValid=!1);for(var s=this,o=n.attr("type"),l=this.options.fields[e].row||this.options.row.selector,d="radio"===o||"checkbox"===o?1:n.length,u=this.options.err.clazz.split(" ").join("."),f=0;d>f;f++){var c=n.eq(f);if(!this._isExcluded(c)){var h,p,m=c.closest(l),v=c.data(r+".messages").find("."+u+"[data-"+r+"-validator][data-"+r+'-for="'+e+'"]'),g=i?v.filter("[data-"+r+'-validator="'+i+'"]'):v,A=c.data(r+".icon"),I="function"==typeof(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container)?(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container).call(this,c,this):this.options.fields[e].container||this.options.fields[e].err||this.options.err.container,b=null;if(i)c.data(r+".result."+i,a);else
for(var F in this.options.fields[e].validators)c.data(r+".result."+F,a);switch(g.attr("data-"+r+"-result",a),a){case this.STATUS_VALIDATING:b=null,this.disableSubmitButtons(!0),c.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),m.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),A&&A.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).addClass(this.options.icon.validating).show();break;case this.STATUS_INVALID:b=!1,this.disableSubmitButtons(!0),c.removeClass(this.options.control.valid).addClass(this.options.control.invalid),m.removeClass(this.options.row.valid).addClass(this.options.row.invalid),A&&A.removeClass(this.options.icon.valid).removeClass(this.options.icon.validating).addClass(this.options.icon.invalid).show();break;case this.STATUS_IGNORED:case this.STATUS_VALID:h=v.filter("[data-"+r+'-result="'+this.STATUS_VALIDATING+'"]').length>0,p=v.filter("[data-"+r+'-result="'+this.STATUS_NOT_VALIDATED+'"]').length>0;var V=v.filter("[data-"+r+'-result="'+this.STATUS_IGNORED+'"]').length;b=h||p?null:v.filter("[data-"+r+'-result="'+this.STATUS_VALID+'"]').length+V===v.length,c.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),!0===b?(this.disableSubmitButtons(!1===this.isValid()),a===this.STATUS_VALID&&c.addClass(this.options.control.valid)):!1===b&&(this.disableSubmitButtons(!0),a===this.STATUS_VALID&&c.addClass(this.options.control.invalid)),A&&(A.removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).removeClass(this.options.icon.valid),(a===this.STATUS_VALID||V!==v.length)&&A.addClass(h?this.options.icon.validating:null===b?"":b?this.options.icon.valid:this.options.icon.invalid).show());var S=this.isValidContainer(m);null!==S&&(m.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),(a===this.STATUS_VALID||V!==v.length)&&m.addClass(S?this.options.row.valid:this.options.row.invalid));break;case this.STATUS_NOT_VALIDATED:default:b=null,this.disableSubmitButtons(!1),c.removeClass(this.options.control.valid).removeClass(this.options.control.invalid),m.removeClass(this.options.row.valid).removeClass(this.options.row.invalid),A&&A.removeClass(this.options.icon.valid).removeClass(this.options.icon.invalid).removeClass(this.options.icon.validating).hide()}!A||"tooltip"!==I&&"popover"!==I?a===this.STATUS_INVALID?g.show():g.hide():!1===b?this._createTooltip(c,v.filter("[data-"+r+'-result="'+s.STATUS_INVALID+'"]').eq(0).html(),I):this._destroyTooltip(c,I),c.trigger(t.Event(this.options.events.fieldStatus),{bv:this,fv:this,field:e,element:c,status:a,validator:i}),this._onFieldValidated(c,i)}}
return this},validate:function(){if(t.isEmptyObject(this.options.fields))return this._submit(),this;this.$form.trigger(t.Event(this.options.events.formPreValidate)),this.disableSubmitButtons(!0),this._submitIfValid=!1;for(var e in this.options.fields)this.validateField(e);return this._submit(),this._submitIfValid=!0,this},validateField:function(e){var a=this._namespace,i=t([]);switch(typeof e){case"object":i=e,e=e.attr("data-"+a+"-field");break;case"string":i=this.getFieldElements(e)}
if(0===i.length||!this.options.fields[e]||"false"===this.options.fields[e].enabled||!1===this.options.fields[e].enabled)return this;for(var r,n,s,o=this,l=i.attr("type"),d="radio"!==l&&"checkbox"!==l||"disabled"===this.options.live?i.length:1,u="radio"===l||"checkbox"===l,f=this.options.fields[e].validators,c=this.isOptionEnabled(e,"verbose"),h=0;d>h;h++){var p=i.eq(h);if(!this._isExcluded(p))
for(var m=!1,v=p.data(a+".validators"),g=v.length,A=0;g>A&&(r=v[A].validator,p.data(a+".dfs."+r)&&p.data(a+".dfs."+r).reject(),!m);A++){var I=p.data(a+".result."+r);if(I!==this.STATUS_VALID&&I!==this.STATUS_INVALID)
if(!1!==f[r].enabled)
if(p.data(a+".result."+r,this.STATUS_VALIDATING),n=f[r].alias||r,"object"==typeof(s=FormValidation.Validator[n].validate(this,p,f[r],r))&&s.resolve)this.updateStatus(u?e:p,this.STATUS_VALIDATING,r),p.data(a+".dfs."+r,s),s.done(function(t,e,i){t.removeData(a+".dfs."+e).data(a+".response."+e,i),i.message&&o.updateMessage(t,e,i.message),o.updateStatus(u?t.attr("data-"+a+"-field"):t,!0===i.valid?o.STATUS_VALID:!1===i.valid?o.STATUS_INVALID:o.STATUS_IGNORED,e),i.valid&&!0===o._submitIfValid?o._submit():!1!==i.valid||c||(m=!0)});else if("object"==typeof s&&void 0!==s.valid){if(p.data(a+".response."+r,s),s.message&&this.updateMessage(u?e:p,r,s.message),this.updateStatus(u?e:p,!0===s.valid?this.STATUS_VALID:!1===s.valid?this.STATUS_INVALID:this.STATUS_IGNORED,r),!1===s.valid&&!c)break}else if("boolean"==typeof s){if(p.data(a+".response."+r,s),this.updateStatus(u?e:p,s?this.STATUS_VALID:this.STATUS_INVALID,r),!s&&!c)break}else null===s&&(p.data(a+".response."+r,s),this.updateStatus(u?e:p,this.STATUS_IGNORED,r));else this.updateStatus(u?e:p,this.STATUS_IGNORED,r);else this._onFieldValidated(p,r)}}
return this},addField:function(e,a){var i=this._namespace,r=t([]);switch(typeof e){case"object":r=e,e=e.attr("data-"+i+"-field")||e.attr("name");break;case"string":delete this._cacheFields[e],r=this.getFieldElements(e)}
r.attr("data-"+i+"-field",e);for(var n=r.attr("type"),s="radio"===n||"checkbox"===n?1:r.length,o=0;s>o;o++){var l=r.eq(o),d=this._parseOptions(l);d=null===d?a:t.extend(!0,d,a),this.options.fields[e]=t.extend(!0,this.options.fields[e],d),this._cacheFields[e]=this._cacheFields[e]?this._cacheFields[e].add(l):l,this._initField("checkbox"===n||"radio"===n?e:l)}
return this.disableSubmitButtons(!1),this.$form.trigger(t.Event(this.options.events.fieldAdded),{field:e,element:r,options:this.options.fields[e]}),this},destroy:function(){var t,e,a,i,r,n,s,o,l=this._namespace;for(e in this.options.fields)
for(a=this.getFieldElements(e),t=0;t<a.length;t++){i=a.eq(t);for(r in this.options.fields[e].validators)i.data(l+".dfs."+r)&&i.data(l+".dfs."+r).reject(),i.removeData(l+".result."+r).removeData(l+".response."+r).removeData(l+".dfs."+r),o=this.options.fields[e].validators[r].alias||r,"function"==typeof FormValidation.Validator[o].destroy&&FormValidation.Validator[o].destroy(this,i,this.options.fields[e].validators[r],r)}
var d=this.options.err.clazz.split(" ").join(".");for(e in this.options.fields)
for(a=this.getFieldElements(e),s=this.options.fields[e].row||this.options.row.selector,t=0;t<a.length;t++){var u=(i=a.eq(t)).data(l+".messages");u&&u.find("."+d+"[data-"+l+"-validator][data-"+l+'-for="'+e+'"]').remove(),i.removeData(l+".messages").removeData(l+".validators").closest(s).removeClass(this.options.row.valid).removeClass(this.options.row.invalid).removeClass(this.options.row.feedback).end().off("."+l).removeAttr("data-"+l+"-field");var f="function"==typeof(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container)?(this.options.fields[e].container||this.options.fields[e].err||this.options.err.container).call(this,i,this):this.options.fields[e].container||this.options.fields[e].err||this.options.err.container;("tooltip"===f||"popover"===f)&&this._destroyTooltip(i,f),(n=i.data(l+".icon"))&&n.remove(),i.removeData(l+".icon").removeData(l+".trigger")}
for(var c in this.options.addOns)"function"==typeof FormValidation.AddOn[c].destroy&&FormValidation.AddOn[c].destroy(this,this.options.addOns[c]);this.disableSubmitButtons(!1),this.$hiddenButton.remove(),this.$form.removeClass(this.options.elementClass).off("."+l).removeData("bootstrapValidator").removeData("formValidation").find("[data-"+l+"-submit-hidden]").remove().end().find('[type="submit"]').off("click."+l)},enableFieldValidators:function(t,e,a){var i=this.options.fields[t].validators;if(a&&i&&i[a]&&i[a].enabled!==e)this.options.fields[t].validators[a].enabled=e,this.updateStatus(t,this.STATUS_NOT_VALIDATED,a);else if(!a&&this.options.fields[t].enabled!==e){this.options.fields[t].enabled=e;for(var r in i)this.enableFieldValidators(t,e,r)}
return this},getDynamicOption:function(t,e){var a="string"==typeof t?this.getFieldElements(t):t,i=a.val();if("function"==typeof e)return FormValidation.Helper.call(e,[i,this,a]);if("string"==typeof e){var r=this.getFieldElements(e);return r.length?r.val():FormValidation.Helper.call(e,[i,this,a])||e}
return null},getForm:function(){return this.$form},getInvalidFields:function(){return this.$invalidFields},getLocale:function(){return this.options.locale},getMessages:function(e,a){var i=this,r=this._namespace,n=[],s=t([]);switch(!0){case e&&"object"==typeof e:s=e;break;case e&&"string"==typeof e:var o=this.getFieldElements(e);if(o.length>0){var l=o.attr("type");s="radio"===l||"checkbox"===l?o.eq(0):o}
break;default:s=this.$invalidFields}
var d=a?"[data-"+r+'-validator="'+a+'"]':"",u=this.options.err.clazz.split(" ").join(".");return s.each(function(){n=n.concat(t(this).data(r+".messages").find("."+u+"[data-"+r+'-for="'+t(this).attr("data-"+r+"-field")+'"][data-'+r+'-result="'+i.STATUS_INVALID+'"]'+d).map(function(){var e=t(this).attr("data-"+r+"-validator"),a=t(this).attr("data-"+r+"-for");return!1===i.options.fields[a].validators[e].enabled?"":t(this).html()}).get())}),n},getSubmitButton:function(){return this.$submitButton},removeField:function(e){var a=this._namespace,i=t([]);switch(typeof e){case"object":i=e,e=e.attr("data-"+a+"-field")||e.attr("name"),i.attr("data-"+a+"-field",e);break;case"string":i=this.getFieldElements(e)}
if(0===i.length)return this;for(var r=i.attr("type"),n="radio"===r||"checkbox"===r?1:i.length,s=0;n>s;s++){var o=i.eq(s);this.$invalidFields=this.$invalidFields.not(o),this._cacheFields[e]=this._cacheFields[e].not(o)}
return this._cacheFields[e]&&0!==this._cacheFields[e].length||delete this.options.fields[e],("checkbox"===r||"radio"===r)&&this._initField(e),this.disableSubmitButtons(!1),this.$form.trigger(t.Event(this.options.events.fieldRemoved),{field:e,element:i}),this},resetField:function(e,a){var i=this._namespace,r=t([]);switch(typeof e){case"object":r=e,e=e.attr("data-"+i+"-field");break;case"string":r=this.getFieldElements(e)}
var n=0,s=r.length;if(this.options.fields[e])
for(n=0;s>n;n++)
for(var o in this.options.fields[e].validators)r.eq(n).removeData(i+".dfs."+o);if(a){var l=r.attr("type");"radio"===l||"checkbox"===l?r.prop("checked",!1).removeAttr("selected"):r.val("")}
for(this.updateStatus(e,this.STATUS_NOT_VALIDATED),n=0;s>n;n++)r.eq(n).trigger(t.Event(this.options.events.fieldReset),{fv:this,field:e,element:r.eq(n),resetValue:a});return this},resetForm:function(e){for(var a in this.options.fields)this.resetField(a,e);return this.$invalidFields=t([]),this.$submitButton=null,this.disableSubmitButtons(!1),this.$form.trigger(t.Event(this.options.events.formReset),{fv:this,resetValue:e}),this},revalidateField:function(t){return this.updateStatus(t,this.STATUS_NOT_VALIDATED).validateField(t),this},setLocale:function(e){return this.options.locale=e,this.$form.trigger(t.Event(this.options.events.localeChanged),{locale:e,bv:this,fv:this}),this},updateOption:function(t,e,a,i){var r=this._namespace;return"object"==typeof t&&(t=t.attr("data-"+r+"-field")),this.options.fields[t]&&this.options.fields[t].validators[e]&&(this.options.fields[t].validators[e][a]=i,this.updateStatus(t,this.STATUS_NOT_VALIDATED,e)),this},validateContainer:function(e){var a=this,i=this._namespace,r=[],n="string"==typeof e?t(e):e;if(0===n.length)return this;n.find("[data-"+i+"-field]").each(function(){var e=t(this);a._isExcluded(e)||r.push(e)});for(var s=r.length,o=0;s>o;o++)this.validateField(r[o]);return this}},t.fn.formValidation=function(e){var a=arguments;return this.each(function(){var i=t(this),r=i.data("formValidation"),n="object"==typeof e&&e;if(!r){var s=(n.framework||i.attr("data-fv-framework")||"bootstrap").toLowerCase(),o=s.substr(0,1).toUpperCase()+s.substr(1);if(void 0===FormValidation.Framework[o])throw new Error("The class FormValidation.Framework."+o+" is not implemented");r=new FormValidation.Framework[o](this,n),i.addClass("fv-form-"+s).data("formValidation",r)}"string"==typeof e&&r[e].apply(r,Array.prototype.slice.call(a,1))})},t.fn.formValidation.Constructor=FormValidation.Base,t.fn.formValidation.DEFAULT_MESSAGE="This value is not valid",t.fn.formValidation.DEFAULT_OPTIONS={autoFocus:!0,declarative:!0,elementClass:"fv-form",events:{formInit:"init.form.fv",formPreValidate:"prevalidate.form.fv",formError:"err.form.fv",formReset:"rst.form.fv",formSuccess:"success.form.fv",fieldAdded:"added.field.fv",fieldRemoved:"removed.field.fv",fieldInit:"init.field.fv",fieldError:"err.field.fv",fieldReset:"rst.field.fv",fieldSuccess:"success.field.fv",fieldStatus:"status.field.fv",localeChanged:"changed.locale.fv",validatorError:"err.validator.fv",validatorSuccess:"success.validator.fv",validatorIgnored:"ignored.validator.fv"},excluded:[":disabled",":hidden",":not(:visible)"],fields:null,live:"enabled",locale:"zh_CN",message:null,threshold:null,verbose:!0,button:{selector:'[type="submit"]:not([formnovalidate])',disabled:""},control:{valid:"",invalid:""},err:{clazz:"",container:null,parent:null},icon:{valid:null,invalid:null,validating:null,feedback:""},row:{selector:null,valid:"",invalid:"",feedback:""}}}(jQuery),function(t){FormValidation.Helper={call:function(t,e){if("function"==typeof t)return t.apply(this,e);if("string"==typeof t){"()"===t.substring(t.length-2)&&(t=t.substring(0,t.length-2));for(var a=t.split("."),i=a.pop(),r=window,n=0;n<a.length;n++)r=r[a[n]];return void 0===r[i]?null:r[i].apply(this,e)}},date:function(t,e,a,i){if(isNaN(t)||isNaN(e)||isNaN(a))return!1;if(a.length>2||e.length>2||t.length>4)return!1;if(a=parseInt(a,10),e=parseInt(e,10),1e3>(t=parseInt(t,10))||t>9999||0>=e||e>12)return!1;var r=[31,28,31,30,31,30,31,31,30,31,30,31];if((t%400==0||t%100!=0&&t%4==0)&&(r[1]=29),0>=a||a>r[e-1])return!1;if(!0===i){var n=new Date,s=n.getFullYear(),o=n.getMonth(),l=n.getDate();return s>t||t===s&&o>e-1||t===s&&e-1===o&&l>a}
return!0},format:function(e,a){t.isArray(a)||(a=[a]);for(var i in a)e=e.replace("%s",a[i]);return e},luhn:function(t){for(var e=t.length,a=0,i=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],r=0;e--;)r+=i[a][parseInt(t.charAt(e),10)],a^=1;return r%10==0&&r>0},mod11And10:function(t){for(var e=5,a=t.length,i=0;a>i;i++)e=(2*(e||10)%11+parseInt(t.charAt(i),10))%10;return 1===e},mod37And36:function(t,e){for(var a=(e=e||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ").length,i=t.length,r=Math.floor(a/2),n=0;i>n;n++)r=(2*(r||a)%(a+1)+e.indexOf(t.charAt(n)))%a;return 1===r}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{base64:{default:"Please enter a valid base 64 encoded"}}}),FormValidation.Validator.base64={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/.test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{between:{default:"Please enter a value between %s and %s",notInclusive:"Please enter a value between %s and %s strictly"}}}),FormValidation.Validator.between={html5Attributes:{message:"message",min:"min",max:"max",inclusive:"inclusive"},enableByHtml5:function(t){return"range"===t.attr("type")&&{min:t.attr("min"),max:t.attr("max")}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;n=this._format(n);var s=e.getLocale(),o=t.isNumeric(i.min)?i.min:e.getDynamicOption(a,i.min),l=t.isNumeric(i.max)?i.max:e.getDynamicOption(a,i.max),d=this._format(o),u=this._format(l);return!0===i.inclusive||void 0===i.inclusive?{valid:t.isNumeric(n)&&parseFloat(n)>=d&&parseFloat(n)<=u,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].between.default,[o,l])}:{valid:t.isNumeric(n)&&parseFloat(n)>d&&parseFloat(n)<u,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].between.notInclusive,[o,l])}},_format:function(t){return(t+"").replace(",",".")}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{bic:{default:"Please enter a valid BIC number"}}}),FormValidation.Validator.bic={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||/^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(r)}}}(jQuery),function(t){FormValidation.Validator.blank={validate:function(t,e,a,i){return!0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{callback:{default:"Please enter a valid value"}}}),FormValidation.Validator.callback={priority:999,html5Attributes:{message:"message",callback:"callback"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r),s=new t.Deferred,o={valid:!0};if(i.callback){var l=FormValidation.Helper.call(i.callback,[n,e,a]);o="boolean"==typeof l||null===l?{valid:l}:l}
return s.resolve(a,r,o),s}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{choice:{default:"Please enter a valid value",less:"Please choose %s options at minimum",more:"Please choose %s options at maximum",between:"Please choose %s - %s options"}}}),FormValidation.Validator.choice={html5Attributes:{message:"message",min:"min",max:"max"},validate:function(e,a,i,r){var n=e.getLocale(),s=e.getNamespace(),o=a.is("select")?e.getFieldElements(a.attr("data-"+s+"-field")).find("option").filter(":selected").length:e.getFieldElements(a.attr("data-"+s+"-field")).filter(":checked").length,l=i.min?t.isNumeric(i.min)?i.min:e.getDynamicOption(a,i.min):null,d=i.max?t.isNumeric(i.max)?i.max:e.getDynamicOption(a,i.max):null,u=!0,f=i.message||FormValidation.I18n[n].choice.default;switch((l&&o<parseInt(l,10)||d&&o>parseInt(d,10))&&(u=!1),!0){case!!l&&!!d:f=FormValidation.Helper.format(i.message||FormValidation.I18n[n].choice.between,[parseInt(l,10),parseInt(d,10)]);break;case!!l:f=FormValidation.Helper.format(i.message||FormValidation.I18n[n].choice.less,parseInt(l,10));break;case!!d:f=FormValidation.Helper.format(i.message||FormValidation.I18n[n].choice.more,parseInt(d,10))}
return{valid:u,message:f}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{color:{default:"Please enter a valid color"}}}),FormValidation.Validator.color={html5Attributes:{message:"message",type:"type"},enableByHtml5:function(t){return"color"===t.attr("type")},SUPPORTED_TYPES:["hex","rgb","rgba","hsl","hsla","keyword"],KEYWORD_COLORS:["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","transparent","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(this.enableByHtml5(a))return/^#[0-9A-F]{6}$/i.test(n);var s=i.type||this.SUPPORTED_TYPES;t.isArray(s)||(s=s.replace(/s/g,"").split(","));for(var o,l,d=!1,u=0;u<s.length;u++)
if(l=s[u],o="_"+l.toLowerCase(),d=d||this[o](n))return!0;return!1},_hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},_hsl:function(t){return/^hsl\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/.test(t)},_hsla:function(t){return/^hsla\((\s*(-?\d+)\s*,)(\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t)},_keyword:function(e){return t.inArray(e,this.KEYWORD_COLORS)>=0},_rgb:function(t){var e=/^rgb\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){2}(\s*(\b(0?\d{1,2}|100)\b%)\s*)\)$/;return/^rgb\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){2}(\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*)\)$/.test(t)||e.test(t)},_rgba:function(t){var e=/^rgba\((\s*(\b(0?\d{1,2}|100)\b%)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/;return/^rgba\((\s*(\b([01]?\d{1,2}|2[0-4]\d|25[0-5])\b)\s*,){3}(\s*(0?(\.\d+)?|1(\.0+)?)\s*)\)$/.test(t)||e.test(t)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{creditCard:{default:"Please enter a valid credit card number"}}}),FormValidation.Validator.creditCard={validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(/[^0-9-\s]+/.test(n))return!1;if(n=n.replace(/\D/g,""),!FormValidation.Helper.luhn(n))return!1;var s,o,l={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DANKORT:{length:[16],prefix:["5019"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},ELO:{length:[16],prefix:["4011","4312","4389","4514","4573","4576","5041","5066","5067","509","6277","6362","6363","650","6516","6550"]},FORBRUGSFORENINGEN:{length:[16],prefix:["600722"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","5868","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA_ELECTRON:{length:[16],prefix:["4026","417500","4405","4508","4844","4913","4917"]},VISA:{length:[16],prefix:["4"]}};for(s in l)
for(o in l[s].prefix)
if(n.substr(0,l[s].prefix[o].length)===l[s].prefix[o]&&-1!==t.inArray(n.length,l[s].length))return{valid:!0,type:s};return!1}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{cusip:{default:"Please enter a valid CUSIP number"}}}),FormValidation.Validator.cusip={validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(n=n.toUpperCase(),!/^[0-9A-Z]{9}$/.test(n))return!1;for(var s=t.map(n.split(""),function(t){var e=t.charCodeAt(0);return e>="A".charCodeAt(0)&&e<="Z".charCodeAt(0)?e-"A".charCodeAt(0)+10:t}),o=s.length,l=0,d=0;o-1>d;d++){var u=parseInt(s[d],10);d%2!=0&&(u*=2),u>9&&(u-=9),l+=u}
return(l=(10-l%10)%10)===parseInt(s[o-1],10)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{cvv:{default:"Please enter a valid CVV number"}}}),FormValidation.Validator.cvv={html5Attributes:{message:"message",ccfield:"creditCardField"},init:function(t,e,a,i){if(a.creditCardField){var r=t.getFieldElements(a.creditCardField);t.onLiveChange(r,"live_"+i,function(){t.getStatus(e,i)!==t.STATUS_NOT_VALIDATED&&t.revalidateField(e)})}},destroy:function(t,e,a,i){if(a.creditCardField){var r=t.getFieldElements(a.creditCardField);t.offLiveChange(r,"live_"+i)}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(!/^[0-9]{3,4}$/.test(n))return!1;if(!i.creditCardField)return!0;var s=e.getFieldValue(i.creditCardField,"creditCard");if(null===s||""===s)return!0;s=s.replace(/\D/g,"");var o,l,d={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DANKORT:{length:[16],prefix:["5019"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},ELO:{length:[16],prefix:["4011","4312","4389","4514","4573","4576","5041","5066","5067","509","6277","6362","6363","650","6516","6550"]},FORBRUGSFORENINGEN:{length:[16],prefix:["600722"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","5868","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA_ELECTRON:{length:[16],prefix:["4026","417500","4405","4508","4844","4913","4917"]},VISA:{length:[16],prefix:["4"]}},u=null;for(o in d)
for(l in d[o].prefix)
if(s.substr(0,d[o].prefix[l].length)===d[o].prefix[l]&&-1!==t.inArray(s.length,d[o].length)){u=o;break}
return null!==u&&("AMERICAN_EXPRESS"===u?4===n.length:3===n.length)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{date:{default:"Please enter a valid date",min:"Please enter a date after %s",max:"Please enter a date before %s",range:"Please enter a date in the range %s - %s"}}}),FormValidation.Validator.date={html5Attributes:{message:"message",format:"format",min:"min",max:"max",separator:"separator"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;i.format=i.format||"MM/DD/YYYY","date"===a.attr("type")&&(i.format="YYYY-MM-DD");var s=e.getLocale(),o=i.message||FormValidation.I18n[s].date.default,l=i.format.split(" "),d=l[0],u=l.length>1?l[1]:null,f=l.length>2?l[2]:null,c=n.split(" "),h=c[0],p=c.length>1?c[1]:null;if(l.length!==c.length)return{valid:!1,message:o};var m=i.separator;if(m||(m=-1!==h.indexOf("/")?"/":-1!==h.indexOf("-")?"-":-1!==h.indexOf(".")?".":null),null===m||-1===h.indexOf(m))return{valid:!1,message:o};if(h=h.split(m),d=d.split(m),h.length!==d.length)return{valid:!1,message:o};var v=h[t.inArray("YYYY",d)],g=h[t.inArray("MM",d)],A=h[t.inArray("DD",d)];if(!v||!g||!A||4!==v.length)return{valid:!1,message:o};var I=null,b=null,F=null;if(u){if(u=u.split(":"),p=p.split(":"),u.length!==p.length)return{valid:!1,message:o};if(b=p.length>0?p[0]:null,I=p.length>1?p[1]:null,F=p.length>2?p[2]:null,""===b||""===I||""===F)return{valid:!1,message:o};if(F){if(isNaN(F)||F.length>2)return{valid:!1,message:o};if(0>(F=parseInt(F,10))||F>60)return{valid:!1,message:o}}
if(b){if(isNaN(b)||b.length>2)return{valid:!1,message:o};if(0>(b=parseInt(b,10))||b>=24||f&&b>12)return{valid:!1,message:o}}
if(I){if(isNaN(I)||I.length>2)return{valid:!1,message:o};if(0>(I=parseInt(I,10))||I>59)return{valid:!1,message:o}}}
var V=FormValidation.Helper.date(v,g,A),S=null,E=null,T=i.min,_=i.max;switch(T&&(S=T instanceof Date?T:this._parseDate(T,d,m)||this._parseDate(e.getDynamicOption(a,T),d,m),T=this._formatDate(S,i.format)),_&&(E=_ instanceof Date?_:this._parseDate(_,d,m)||this._parseDate(e.getDynamicOption(a,_),d,m),_=this._formatDate(E,i.format)),h=new Date(v,g-1,A,b,I,F),!0){case T&&!_&&V:V=h.getTime()>=S.getTime(),o=i.message||FormValidation.Helper.format(FormValidation.I18n[s].date.min,T);break;case _&&!T&&V:V=h.getTime()<=E.getTime(),o=i.message||FormValidation.Helper.format(FormValidation.I18n[s].date.max,_);break;case _&&T&&V:V=h.getTime()<=E.getTime()&&h.getTime()>=S.getTime(),o=i.message||FormValidation.Helper.format(FormValidation.I18n[s].date.range,[T,_])}
return{valid:V,date:h,message:o}},_parseDate:function(e,a,i){if(e instanceof Date)return e;if("string"!=typeof e)return null;var r=t.inArray("YYYY",a),n=t.inArray("MM",a),s=t.inArray("DD",a);if(-1===r||-1===n||-1===s)return null;var o=0,l=0,d=0,u=e.split(" "),f=u[0].split(i);if(f.length<3)return null;if(u.length>1){var c=u[1].split(":");l=c.length>0?c[0]:null,o=c.length>1?c[1]:null,d=c.length>2?c[2]:null}
return new Date(f[r],f[n]-1,f[s],l,o,d)},_formatDate:function(t,e){var a={d:function(t){return t.getDate()},dd:function(t){var e=t.getDate();return 10>e?"0"+e:e},m:function(t){return t.getMonth()+1},mm:function(t){var e=t.getMonth()+1;return 10>e?"0"+e:e},yy:function(t){return(""+t.getFullYear()).substr(2)},yyyy:function(t){return t.getFullYear()},h:function(t){return t.getHours()%12||12},hh:function(t){var e=t.getHours()%12||12;return 10>e?"0"+e:e},H:function(t){return t.getHours()},HH:function(t){var e=t.getHours();return 10>e?"0"+e:e},M:function(t){return t.getMinutes()},MM:function(t){var e=t.getMinutes();return 10>e?"0"+e:e},s:function(t){return t.getSeconds()},ss:function(t){var e=t.getSeconds();return 10>e?"0"+e:e}};return(e=e.replace(/Y/g,"y").replace(/M/g,"m").replace(/D/g,"d").replace(/:m/g,":M").replace(/:mm/g,":MM").replace(/:S/,":s").replace(/:SS/,":ss")).replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g,function(e){return a[e]?a[e](t):e.slice(1,e.length-1)})}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{different:{default:"Please enter a different value"}}}),FormValidation.Validator.different={html5Attributes:{message:"message",field:"field"},init:function(e,a,i,r){for(var n=i.field.split(","),s=0;s<n.length;s++){var o=e.getFieldElements(t.trim(n[s]));e.onLiveChange(o,"live_"+r,function(){e.getStatus(a,r)!==e.STATUS_NOT_VALIDATED&&e.revalidateField(a)})}},destroy:function(e,a,i,r){for(var n=i.field.split(","),s=0;s<n.length;s++){var o=e.getFieldElements(t.trim(n[s]));e.offLiveChange(o,"live_"+r)}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;for(var s=i.field.split(","),o=!0,l=0;l<s.length;l++){var d=e.getFieldElements(t.trim(s[l]));if(null!=d&&0!==d.length){var u=e.getFieldValue(d,r);n===u?o=!1:""!==u&&e.updateStatus(d,e.STATUS_VALID,r)}}
return o}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{digits:{default:"Please enter only digits"}}}),FormValidation.Validator.digits={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||/^\d+$/.test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{ean:{default:"Please enter a valid EAN number"}}}),FormValidation.Validator.ean={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^(\d{8}|\d{12}|\d{13})$/.test(r))return!1;for(var n=r.length,s=0,o=8===n?[3,1]:[1,3],l=0;n-1>l;l++)s+=parseInt(r.charAt(l),10)*o[l%2];return(s=(10-s%10)%10)+""===r.charAt(n-1)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{ein:{default:"Please enter a valid EIN number"}}}),FormValidation.Validator.ein={CAMPUS:{ANDOVER:["10","12"],ATLANTA:["60","67"],AUSTIN:["50","53"],BROOKHAVEN:["01","02","03","04","05","06","11","13","14","16","21","22","23","25","34","51","52","54","55","56","57","58","59","65"],CINCINNATI:["30","32","35","36","37","38","61"],FRESNO:["15","24"],KANSAS_CITY:["40","44"],MEMPHIS:["94","95"],OGDEN:["80","90"],PHILADELPHIA:["33","39","41","42","43","48","62","63","64","66","68","71","72","73","74","75","76","77","81","82","83","84","85","86","87","88","91","92","93","98","99"],INTERNET:["20","26","27","45","46","47"],SMALL_BUSINESS_ADMINISTRATION:["31"]},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(!/^[0-9]{2}-?[0-9]{7}$/.test(n))return!1;var s=n.substr(0,2)+"";for(var o in this.CAMPUS)
if(-1!==t.inArray(s,this.CAMPUS[o]))return{valid:!0,campus:o};return!1}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{emailAddress:{default:"Please enter a valid email address"}}}),FormValidation.Validator.emailAddress={html5Attributes:{message:"message",multiple:"multiple",separator:"separator"},enableByHtml5:function(t){return"email"===t.attr("type")},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;if(!0===a.multiple||"true"===a.multiple){for(var s=a.separator||/[,;]/,o=this._splitEmailAddresses(r,s),l=0;l<o.length;l++)
if(!n.test(o[l]))return!1;return!0}
return n.test(r)},_splitEmailAddresses:function(t,e){for(var a=t.split(/"/),i=a.length,r=[],n="",s=0;i>s;s++)
if(s%2==0){var o=a[s].split(e),l=o.length;if(1===l)n+=o[0];else{r.push(n+o[0]);for(var d=1;l-1>d;d++)r.push(o[d]);n=o[l-1]}}else n+='"'+a[s],i-1>s&&(n+='"');return r.push(n),r}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{file:{default:"Please choose a valid file"}}}),FormValidation.Validator.file={Error:{EXTENSION:"EXTENSION",MAX_FILES:"MAX_FILES",MAX_SIZE:"MAX_SIZE",MAX_TOTAL_SIZE:"MAX_TOTAL_SIZE",MIN_FILES:"MIN_FILES",MIN_SIZE:"MIN_SIZE",MIN_TOTAL_SIZE:"MIN_TOTAL_SIZE",TYPE:"TYPE"},html5Attributes:{extension:"extension",maxfiles:"maxFiles",minfiles:"minFiles",maxsize:"maxSize",minsize:"minSize",maxtotalsize:"maxTotalSize",mintotalsize:"minTotalSize",message:"message",type:"type"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;var s,o=i.extension?i.extension.toLowerCase().split(","):null,l=i.type?i.type.toLowerCase().split(","):null;if(window.File&&window.FileList&&window.FileReader){var d=a.get(0).files,u=d.length,f=0;if(i.maxFiles&&u>parseInt(i.maxFiles,10))return{valid:!1,error:this.Error.MAX_FILES};if(i.minFiles&&u<parseInt(i.minFiles,10))return{valid:!1,error:this.Error.MIN_FILES};for(var c={},h=0;u>h;h++){if(f+=d[h].size,s=d[h].name.substr(d[h].name.lastIndexOf(".")+1),c={file:d[h],size:d[h].size,ext:s,type:d[h].type},i.minSize&&d[h].size<parseInt(i.minSize,10))return{valid:!1,error:this.Error.MIN_SIZE,metaData:c};if(i.maxSize&&d[h].size>parseInt(i.maxSize,10))return{valid:!1,error:this.Error.MAX_SIZE,metaData:c};if(o&&-1===t.inArray(s.toLowerCase(),o))return{valid:!1,error:this.Error.EXTENSION,metaData:c};if(d[h].type&&l&&-1===t.inArray(d[h].type.toLowerCase(),l))return{valid:!1,error:this.Error.TYPE,metaData:c}}
if(i.maxTotalSize&&f>parseInt(i.maxTotalSize,10))return{valid:!1,error:this.Error.MAX_TOTAL_SIZE,metaData:{totalSize:f}};if(i.minTotalSize&&f<parseInt(i.minTotalSize,10))return{valid:!1,error:this.Error.MIN_TOTAL_SIZE,metaData:{totalSize:f}}}else if(s=n.substr(n.lastIndexOf(".")+1),o&&-1===t.inArray(s.toLowerCase(),o))return{valid:!1,error:this.Error.EXTENSION,metaData:{ext:s}};return!0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{greaterThan:{default:"Please enter a value greater than or equal to %s",notInclusive:"Please enter a value greater than %s"}}}),FormValidation.Validator.greaterThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(t){var e=t.attr("type"),a=t.attr("min");return!(!a||"date"===e)&&{value:a}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;n=this._format(n);var s=e.getLocale(),o=t.isNumeric(i.value)?i.value:e.getDynamicOption(a,i.value),l=this._format(o);return!0===i.inclusive||void 0===i.inclusive?{valid:t.isNumeric(n)&&parseFloat(n)>=l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].greaterThan.default,o)}:{valid:t.isNumeric(n)&&parseFloat(n)>l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].greaterThan.notInclusive,o)}},_format:function(t){return(t+"").replace(",",".")}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{grid:{default:"Please enter a valid GRId number"}}}),FormValidation.Validator.grid={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||(r=r.toUpperCase(),!!/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(r)&&("GRID:"===(r=r.replace(/\s/g,"").replace(/-/g,"")).substr(0,5)&&(r=r.substr(5)),FormValidation.Helper.mod37And36(r)))}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{hex:{default:"Please enter a valid hexadecimal number"}}}),FormValidation.Validator.hex={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||/^[0-9a-fA-F]+$/.test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{iban:{default:"Please enter a valid IBAN number",country:"Please enter a valid IBAN number in %s",countries:{AD:"Andorra",AE:"United Arab Emirates",AL:"Albania",AO:"Angola",AT:"Austria",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BR:"Brazil",CH:"Switzerland",CI:"Ivory Coast",CM:"Cameroon",CR:"Costa Rica",CV:"Cape Verde",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",DO:"Dominican Republic",DZ:"Algeria",EE:"Estonia",ES:"Spain",FI:"Finland",FO:"Faroe Islands",FR:"France",GB:"United Kingdom",GE:"Georgia",GI:"Gibraltar",GL:"Greenland",GR:"Greece",GT:"Guatemala",HR:"Croatia",HU:"Hungary",IE:"Ireland",IL:"Israel",IR:"Iran",IS:"Iceland",IT:"Italy",JO:"Jordan",KW:"Kuwait",KZ:"Kazakhstan",LB:"Lebanon",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MG:"Madagascar",MK:"Macedonia",ML:"Mali",MR:"Mauritania",MT:"Malta",MU:"Mauritius",MZ:"Mozambique",NL:"Netherlands",NO:"Norway",PK:"Pakistan",PL:"Poland",PS:"Palestine",PT:"Portugal",QA:"Qatar",RO:"Romania",RS:"Serbia",SA:"Saudi Arabia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",SN:"Senegal",TL:"East Timor",TN:"Tunisia",TR:"Turkey",VG:"Virgin Islands, British",XK:"Republic of Kosovo"}}}}),FormValidation.Validator.iban={html5Attributes:{message:"message",country:"country",sepa:"sepa"},REGEX:{AD:"AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",AE:"AE[0-9]{2}[0-9]{3}[0-9]{16}",AL:"AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",AO:"AO[0-9]{2}[0-9]{21}",AT:"AT[0-9]{2}[0-9]{5}[0-9]{11}",AZ:"AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",BA:"BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",BE:"BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",BF:"BF[0-9]{2}[0-9]{23}",BG:"BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",BH:"BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",BI:"BI[0-9]{2}[0-9]{12}",BJ:"BJ[0-9]{2}[A-Z]{1}[0-9]{23}",BR:"BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",CH:"CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",CI:"CI[0-9]{2}[A-Z]{1}[0-9]{23}",CM:"CM[0-9]{2}[0-9]{23}",CR:"CR[0-9]{2}[0-9]{3}[0-9]{14}",CV:"CV[0-9]{2}[0-9]{21}",CY:"CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",CZ:"CZ[0-9]{2}[0-9]{20}",DE:"DE[0-9]{2}[0-9]{8}[0-9]{10}",DK:"DK[0-9]{2}[0-9]{14}",DO:"DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",DZ:"DZ[0-9]{2}[0-9]{20}",EE:"EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",ES:"ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",FI:"FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",FO:"FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",FR:"FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",GB:"GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",GE:"GE[0-9]{2}[A-Z]{2}[0-9]{16}",GI:"GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",GL:"GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",GR:"GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",GT:"GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",HR:"HR[0-9]{2}[0-9]{7}[0-9]{10}",HU:"HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",IE:"IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",IL:"IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",IR:"IR[0-9]{2}[0-9]{22}",IS:"IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",IT:"IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",JO:"JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",KW:"KW[0-9]{2}[A-Z]{4}[0-9]{22}",KZ:"KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LB:"LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",LI:"LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",LT:"LT[0-9]{2}[0-9]{5}[0-9]{11}",LU:"LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LV:"LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",MC:"MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",MD:"MD[0-9]{2}[A-Z0-9]{20}",ME:"ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",MG:"MG[0-9]{2}[0-9]{23}",MK:"MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",ML:"ML[0-9]{2}[A-Z]{1}[0-9]{23}",MR:"MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",MT:"MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",MU:"MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",MZ:"MZ[0-9]{2}[0-9]{21}",NL:"NL[0-9]{2}[A-Z]{4}[0-9]{10}",NO:"NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",PK:"PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",PL:"PL[0-9]{2}[0-9]{8}[0-9]{16}",PS:"PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",PT:"PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",QA:"QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",RO:"RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",RS:"RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",SA:"SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",SE:"SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",SI:"SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",SK:"SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",SM:"SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",SN:"SN[0-9]{2}[A-Z]{1}[0-9]{23}",TL:"TL38[0-9]{3}[0-9]{14}[0-9]{2}",TN:"TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",TR:"TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",VG:"VG[0-9]{2}[A-Z]{4}[0-9]{16}",XK:"XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}"},SEPA_COUNTRIES:["AT","BE","BG","CH","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GI","GR","HR","HU","IE","IS","IT","LI","LT","LU","LV","MC","MT","NL","NO","PL","PT","RO","SE","SI","SK","SM"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;n=n.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();var s=i.country;s?"string"==typeof s&&this.REGEX[s]||(s=e.getDynamicOption(a,s)):s=n.substr(0,2);var o=e.getLocale();if(!this.REGEX[s])return!1;if(void 0!==typeof i.sepa){var l=-1!==t.inArray(s,this.SEPA_COUNTRIES);if(("true"===i.sepa||!0===i.sepa)&&!l||("false"===i.sepa||!1===i.sepa)&&l)return!1}
if(!new RegExp("^"+this.REGEX[s]+"$").test(n))return{valid:!1,message:FormValidation.Helper.format(i.message||FormValidation.I18n[o].iban.country,FormValidation.I18n[o].iban.countries[s])};n=n.substr(4)+n.substr(0,4),n=(n=t.map(n.split(""),function(t){var e=t.charCodeAt(0);return e>="A".charCodeAt(0)&&e<="Z".charCodeAt(0)?e-"A".charCodeAt(0)+10:t})).join("");for(var d=parseInt(n.substr(0,1),10),u=n.length,f=1;u>f;++f)d=(10*d+parseInt(n.substr(f,1),10))%97;return{valid:1===d,message:FormValidation.Helper.format(i.message||FormValidation.I18n[o].iban.country,FormValidation.I18n[o].iban.countries[s])}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{id:{default:"Please enter a valid identification number",country:"Please enter a valid identification number in %s",countries:{BA:"Bosnia and Herzegovina",BG:"Bulgaria",BR:"Brazil",CH:"Switzerland",CL:"Chile",CN:"China",CZ:"Czech Republic",DK:"Denmark",EE:"Estonia",ES:"Spain",FI:"Finland",HR:"Croatia",IE:"Ireland",IS:"Iceland",LT:"Lithuania",LV:"Latvia",ME:"Montenegro",MK:"Macedonia",NL:"Netherlands",PL:"Poland",RO:"Romania",RS:"Serbia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",TH:"Thailand",TR:"Turkey",ZA:"South Africa"}}}}),FormValidation.Validator.id={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BA","BG","BR","CH","CL","CN","CZ","DK","EE","ES","FI","HR","IE","IS","LT","LV","ME","MK","NL","PL","RO","RS","SE","SI","SK","SM","TH","TR","ZA"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;var s=e.getLocale(),o=i.country;if(o?("string"!=typeof o||-1===t.inArray(o.toUpperCase(),this.COUNTRY_CODES))&&(o=e.getDynamicOption(a,o)):o=n.substr(0,2),-1===t.inArray(o,this.COUNTRY_CODES))return!0;var l=this[["_",o.toLowerCase()].join("")](n);return l=!0===l||!1===l?{valid:l}:l,l.message=FormValidation.Helper.format(i.message||FormValidation.I18n[s].id.country,FormValidation.I18n[s].id.countries[o.toUpperCase()]),l},_validateJMBG:function(t,e){if(!/^\d{13}$/.test(t))return!1;var a=parseInt(t.substr(0,2),10),i=parseInt(t.substr(2,2),10),r=(parseInt(t.substr(4,3),10),parseInt(t.substr(7,2),10)),n=parseInt(t.substr(12,1),10);if(a>31||i>12)return!1;for(var s=0,o=0;6>o;o++)s+=(7-o)*(parseInt(t.charAt(o),10)+parseInt(t.charAt(o+6),10));if((10===(s=11-s%11)||11===s)&&(s=0),s!==n)return!1;switch(e.toUpperCase()){case"BA":return r>=10&&19>=r;case"MK":return r>=41&&49>=r;case"ME":return r>=20&&29>=r;case"RS":return r>=70&&99>=r;case"SI":return r>=50&&59>=r;default:return!0}},_ba:function(t){return this._validateJMBG(t,"BA")},_mk:function(t){return this._validateJMBG(t,"MK")},_me:function(t){return this._validateJMBG(t,"ME")},_rs:function(t){return this._validateJMBG(t,"RS")},_si:function(t){return this._validateJMBG(t,"SI")},_bg:function(t){if(!/^\d{10}$/.test(t)&&!/^\d{6}\s\d{3}\s\d{1}$/.test(t))return!1;t=t.replace(/\s/g,"");var e=parseInt(t.substr(0,2),10)+1900,a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(a>40?(e+=100,a-=40):a>20&&(e-=100,a-=20),!FormValidation.Helper.date(e,a,i))return!1;for(var r=0,n=[2,4,8,5,10,9,7,3,6],s=0;9>s;s++)r+=parseInt(t.charAt(s),10)*n[s];return(r=r%11%10)+""===t.substr(9,1)},_br:function(t){if(t=t.replace(/\D/g,""),!/^\d{11}$/.test(t)||/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(t))return!1;for(var e=0,a=0;9>a;a++)e+=(10-a)*parseInt(t.charAt(a),10);if((10===(e=11-e%11)||11===e)&&(e=0),e+""!==t.charAt(9))return!1;var i=0;for(a=0;10>a;a++)i+=(11-a)*parseInt(t.charAt(a),10);return(10===(i=11-i%11)||11===i)&&(i=0),i+""===t.charAt(10)},_ch:function(t){if(!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(t))return!1;for(var e=(t=t.replace(/\D/g,"").substr(3)).length,a=0,i=8===e?[3,1]:[1,3],r=0;e-1>r;r++)a+=parseInt(t.charAt(r),10)*i[r%2];return(a=10-a%10)+""===t.charAt(e-1)},_cl:function(t){if(!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(t))return!1;for(t=t.replace(/\-/g,"");t.length<9;)t="0"+t;for(var e=0,a=[3,2,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e=11-e%11,11===e?e=0:10===e&&(e="K"),e+""===t.charAt(8).toUpperCase()},_cn:function(e){if(e=e.trim(),!/^\d{15}$/.test(e)&&!/^\d{17}[\dXx]{1}$/.test(e))return!1;var a={11:{0:[0],1:[[0,9],[11,17]],2:[0,28,29]},12:{0:[0],1:[[0,16]],2:[0,21,23,25]},13:{0:[0],1:[[0,5],7,8,21,[23,33],[81,85]],2:[[0,5],[7,9],[23,25],27,29,30,81,83],3:[[0,4],[21,24]],4:[[0,4],6,21,[23,35],81],5:[[0,3],[21,35],81,82],6:[[0,4],[21,38],[81,84]],7:[[0,3],5,6,[21,33]],8:[[0,4],[21,28]],9:[[0,3],[21,30],[81,84]],10:[[0,3],[22,26],28,81,82],11:[[0,2],[21,28],81,82]},14:{0:[0],1:[0,1,[5,10],[21,23],81],2:[[0,3],11,12,[21,27]],3:[[0,3],11,21,22],4:[[0,2],11,21,[23,31],81],5:[[0,2],21,22,24,25,81],6:[[0,3],[21,24]],7:[[0,2],[21,29],81],8:[[0,2],[21,30],81,82],9:[[0,2],[21,32],81],10:[[0,2],[21,34],81,82],11:[[0,2],[21,30],81,82],23:[[0,3],22,23,[25,30],32,33]},15:{0:[0],1:[[0,5],[21,25]],2:[[0,7],[21,23]],3:[[0,4]],4:[[0,4],[21,26],[28,30]],5:[[0,2],[21,26],81],6:[[0,2],[21,27]],7:[[0,3],[21,27],[81,85]],8:[[0,2],[21,26]],9:[[0,2],[21,29],81],22:[[0,2],[21,24]],25:[[0,2],[22,31]],26:[[0,2],[24,27],[29,32],34],28:[0,1,[22,27]],29:[0,[21,23]]},21:{0:[0],1:[[0,6],[11,14],[22,24],81],2:[[0,4],[11,13],24,[81,83]],3:[[0,4],11,21,23,81],4:[[0,4],11,[21,23]],5:[[0,5],21,22],6:[[0,4],24,81,82],7:[[0,3],11,26,27,81,82],8:[[0,4],11,81,82],9:[[0,5],11,21,22],10:[[0,5],11,21,81],11:[[0,3],21,22],12:[[0,2],4,21,23,24,81,82],13:[[0,3],21,22,24,81,82],14:[[0,4],21,22,81]},22:{0:[0],1:[[0,6],12,22,[81,83]],2:[[0,4],11,21,[81,84]],3:[[0,3],22,23,81,82],4:[[0,3],21,22],5:[[0,3],21,23,24,81,82],6:[[0,2],4,5,[21,23],25,81],7:[[0,2],[21,24],81],8:[[0,2],21,22,81,82],24:[[0,6],24,26]},23:{0:[0],1:[[0,12],21,[23,29],[81,84]],2:[[0,8],21,[23,25],27,[29,31],81],3:[[0,7],21,81,82],4:[[0,7],21,22],5:[[0,3],5,6,[21,24]],6:[[0,6],[21,24]],7:[[0,16],22,81],8:[[0,5],11,22,26,28,33,81,82],9:[[0,4],21],10:[[0,5],24,25,81,[83,85]],11:[[0,2],21,23,24,81,82],12:[[0,2],[21,26],[81,83]],27:[[0,4],[21,23]]},31:{0:[0],1:[0,1,[3,10],[12,20]],2:[0,30]},32:{0:[0],1:[[0,7],11,[13,18],24,25],2:[[0,6],11,81,82],3:[[0,5],11,12,[21,24],81,82],4:[[0,2],4,5,11,12,81,82],5:[[0,9],[81,85]],6:[[0,2],11,12,21,23,[81,84]],7:[0,1,3,5,6,[21,24]],8:[[0,4],11,26,[29,31]],9:[[0,3],[21,25],28,81,82],10:[[0,3],11,12,23,81,84,88],11:[[0,2],11,12,[81,83]],12:[[0,4],[81,84]],13:[[0,2],11,[21,24]]},33:{0:[0],1:[[0,6],[8,10],22,27,82,83,85],2:[0,1,[3,6],11,12,25,26,[81,83]],3:[[0,4],22,24,[26,29],81,82],4:[[0,2],11,21,24,[81,83]],5:[[0,3],[21,23]],6:[[0,2],21,24,[81,83]],7:[[0,3],23,26,27,[81,84]],8:[[0,3],22,24,25,81],9:[[0,3],21,22],10:[[0,4],[21,24],81,82],11:[[0,2],[21,27],81]},34:{0:[0],1:[[0,4],11,[21,24],81],2:[[0,4],7,8,[21,23],25],3:[[0,4],11,[21,23]],4:[[0,6],21],5:[[0,4],6,[21,23]],6:[[0,4],21],7:[[0,3],11,21],8:[[0,3],11,[22,28],81],10:[[0,4],[21,24]],11:[[0,3],22,[24,26],81,82],12:[[0,4],21,22,25,26,82],13:[[0,2],[21,24]],14:[[0,2],[21,24]],15:[[0,3],[21,25]],16:[[0,2],[21,23]],17:[[0,2],[21,23]],18:[[0,2],[21,25],81]},35:{0:[0],1:[[0,5],11,[21,25],28,81,82],2:[[0,6],[11,13]],3:[[0,5],22],4:[[0,3],21,[23,30],81],5:[[0,5],21,[24,27],[81,83]],6:[[0,3],[22,29],81],7:[[0,2],[21,25],[81,84]],8:[[0,2],[21,25],81],9:[[0,2],[21,26],81,82]},36:{0:[0],1:[[0,5],11,[21,24]],2:[[0,3],22,81],3:[[0,2],13,[21,23]],4:[[0,3],21,[23,30],81,82],5:[[0,2],21],6:[[0,2],22,81],7:[[0,2],[21,35],81,82],8:[[0,3],[21,30],81],9:[[0,2],[21,26],[81,83]],10:[[0,2],[21,30]],11:[[0,2],[21,30],81]},37:{0:[0],1:[[0,5],12,13,[24,26],81],2:[[0,3],5,[11,14],[81,85]],3:[[0,6],[21,23]],4:[[0,6],81],5:[[0,3],[21,23]],6:[[0,2],[11,13],34,[81,87]],7:[[0,5],24,25,[81,86]],8:[[0,2],11,[26,32],[81,83]],9:[[0,3],11,21,23,82,83],10:[[0,2],[81,83]],11:[[0,3],21,22],12:[[0,3]],13:[[0,2],11,12,[21,29]],14:[[0,2],[21,28],81,82],15:[[0,2],[21,26],81],16:[[0,2],[21,26]],17:[[0,2],[21,28]]},41:{0:[0],1:[[0,6],8,22,[81,85]],2:[[0,5],11,[21,25]],3:[[0,7],11,[22,29],81],4:[[0,4],11,[21,23],25,81,82],5:[[0,3],5,6,22,23,26,27,81],6:[[0,3],11,21,22],7:[[0,4],11,21,[24,28],81,82],8:[[0,4],11,[21,23],25,[81,83]],9:[[0,2],22,23,[26,28]],10:[[0,2],[23,25],81,82],11:[[0,4],[21,23]],12:[[0,2],21,22,24,81,82],13:[[0,3],[21,30],81],14:[[0,3],[21,26],81],15:[[0,3],[21,28]],16:[[0,2],[21,28],81],17:[[0,2],[21,29]],90:[0,1]},42:{0:[0],1:[[0,7],[11,17]],2:[[0,5],22,81],3:[[0,3],[21,25],81],5:[[0,6],[25,29],[81,83]],6:[[0,2],6,7,[24,26],[82,84]],7:[[0,4]],8:[[0,2],4,21,22,81],9:[[0,2],[21,23],81,82,84],10:[[0,3],[22,24],81,83,87],11:[[0,2],[21,27],81,82],12:[[0,2],[21,24],81],13:[[0,3],21,81],28:[[0,2],22,23,[25,28]],90:[0,[4,6],21]},43:{0:[0],1:[[0,5],11,12,21,22,24,81],2:[[0,4],11,21,[23,25],81],3:[[0,2],4,21,81,82],4:[0,1,[5,8],12,[21,24],26,81,82],5:[[0,3],11,[21,25],[27,29],81],6:[[0,3],11,21,23,24,26,81,82],7:[[0,3],[21,26],81],8:[[0,2],11,21,22],9:[[0,3],[21,23],81],10:[[0,3],[21,28],81],11:[[0,3],[21,29]],12:[[0,2],[21,30],81],13:[[0,2],21,22,81,82],31:[0,1,[22,27],30]},44:{0:[0],1:[[0,7],[11,16],83,84],2:[[0,5],21,22,24,29,32,33,81,82],3:[0,1,[3,8]],4:[[0,4]],5:[0,1,[6,15],23,82,83],6:[0,1,[4,8]],7:[0,1,[3,5],81,[83,85]],8:[[0,4],11,23,25,[81,83]],9:[[0,3],23,[81,83]],12:[[0,3],[23,26],83,84],13:[[0,3],[22,24],81],14:[[0,2],[21,24],26,27,81],15:[[0,2],21,23,81],16:[[0,2],[21,25]],17:[[0,2],21,23,81],18:[[0,3],21,23,[25,27],81,82],19:[0],20:[0],51:[[0,3],21,22],52:[[0,3],21,22,24,81],53:[[0,2],[21,23],81]},45:{0:[0],1:[[0,9],[21,27]],2:[[0,5],[21,26]],3:[[0,5],11,12,[21,32]],4:[0,1,[3,6],11,[21,23],81],5:[[0,3],12,21],6:[[0,3],21,81],7:[[0,3],21,22],8:[[0,4],21,81],9:[[0,3],[21,24],81],10:[[0,2],[21,31]],11:[[0,2],[21,23]],12:[[0,2],[21,29],81],13:[[0,2],[21,24],81],14:[[0,2],[21,25],81]},46:{0:[0],1:[0,1,[5,8]],2:[0,1],3:[0,[21,23]],90:[[0,3],[5,7],[21,39]]},50:{0:[0],1:[[0,19]],2:[0,[22,38],[40,43]],3:[0,[81,84]]},51:{0:[0],1:[0,1,[4,8],[12,15],[21,24],29,31,32,[81,84]],3:[[0,4],11,21,22],4:[[0,3],11,21,22],5:[[0,4],21,22,24,25],6:[0,1,3,23,26,[81,83]],7:[0,1,3,4,[22,27],81],8:[[0,2],11,12,[21,24]],9:[[0,4],[21,23]],10:[[0,2],11,24,25,28],11:[[0,2],[11,13],23,24,26,29,32,33,81],13:[[0,4],[21,25],81],14:[[0,2],[21,25]],15:[[0,3],[21,29]],16:[[0,3],[21,23],81],17:[[0,3],[21,25],81],18:[[0,3],[21,27]],19:[[0,3],[21,23]],20:[[0,2],21,22,81],32:[0,[21,33]],33:[0,[21,38]],34:[0,1,[22,37]]},52:{0:[0],1:[[0,3],[11,15],[21,23],81],2:[0,1,3,21,22],3:[[0,3],[21,30],81,82],4:[[0,2],[21,25]],5:[[0,2],[21,27]],6:[[0,3],[21,28]],22:[0,1,[22,30]],23:[0,1,[22,28]],24:[0,1,[22,28]],26:[0,1,[22,36]],27:[[0,2],22,23,[25,32]]},53:{0:[0],1:[[0,3],[11,14],21,22,[24,29],81],3:[[0,2],[21,26],28,81],4:[[0,2],[21,28]],5:[[0,2],[21,24]],6:[[0,2],[21,30]],7:[[0,2],[21,24]],8:[[0,2],[21,29]],9:[[0,2],[21,27]],23:[0,1,[22,29],31],25:[[0,4],[22,32]],26:[0,1,[21,28]],27:[0,1,[22,30]],28:[0,1,22,23],29:[0,1,[22,32]],31:[0,2,3,[22,24]],34:[0,[21,23]],33:[0,21,[23,25]],35:[0,[21,28]]},54:{0:[0],1:[[0,2],[21,27]],21:[0,[21,29],32,33],22:[0,[21,29],[31,33]],23:[0,1,[22,38]],24:[0,[21,31]],25:[0,[21,27]],26:[0,[21,27]]},61:{0:[0],1:[[0,4],[11,16],22,[24,26]],2:[[0,4],22],3:[[0,4],[21,24],[26,31]],4:[[0,4],[22,31],81],5:[[0,2],[21,28],81,82],6:[[0,2],[21,32]],7:[[0,2],[21,30]],8:[[0,2],[21,31]],9:[[0,2],[21,29]],10:[[0,2],[21,26]]},62:{0:[0],1:[[0,5],11,[21,23]],2:[0,1],3:[[0,2],21],4:[[0,3],[21,23]],5:[[0,3],[21,25]],6:[[0,2],[21,23]],7:[[0,2],[21,25]],8:[[0,2],[21,26]],9:[[0,2],[21,24],81,82],10:[[0,2],[21,27]],11:[[0,2],[21,26]],12:[[0,2],[21,28]],24:[0,21,[24,29]],26:[0,21,[23,30]],29:[0,1,[21,27]],30:[0,1,[21,27]]},63:{0:[0],1:[[0,5],[21,23]],2:[0,2,[21,25]],21:[0,[21,23],[26,28]],22:[0,[21,24]],23:[0,[21,24]],25:[0,[21,25]],26:[0,[21,26]],27:[0,1,[21,26]],28:[[0,2],[21,23]]},64:{0:[0],1:[0,1,[4,6],21,22,81],2:[[0,3],5,[21,23]],3:[[0,3],[21,24],81],4:[[0,2],[21,25]],5:[[0,2],21,22]},65:{0:[0],1:[[0,9],21],2:[[0,5]],21:[0,1,22,23],22:[0,1,22,23],23:[[0,3],[23,25],27,28],28:[0,1,[22,29]],29:[0,1,[22,29]],30:[0,1,[22,24]],31:[0,1,[21,31]],32:[0,1,[21,27]],40:[0,2,3,[21,28]],42:[[0,2],21,[23,26]],43:[0,1,[21,26]],90:[[0,4]],27:[[0,2],22,23]},71:{0:[0]},81:{0:[0]},82:{0:[0]}},i=parseInt(e.substr(0,2),10),r=parseInt(e.substr(2,2),10),n=parseInt(e.substr(4,2),10);if(!a[i]||!a[i][r])return!1;for(var s=!1,o=a[i][r],l=0;l<o.length;l++)
if(t.isArray(o[l])&&o[l][0]<=n&&n<=o[l][1]||!t.isArray(o[l])&&n===o[l]){s=!0;break}
if(!s)return!1;var d;d=18===e.length?e.substr(6,8):"19"+e.substr(6,6);var u=parseInt(d.substr(0,4),10),f=parseInt(d.substr(4,2),10),c=parseInt(d.substr(6,2),10);if(!FormValidation.Helper.date(u,f,c))return!1;if(18===e.length){var h=0,p=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];for(l=0;17>l;l++)h+=parseInt(e.charAt(l),10)*p[l];return h=(12-h%11)%11,("X"!==e.charAt(17).toUpperCase()?parseInt(e.charAt(17),10):10)===h}
return!0},_cz:function(t){if(!/^\d{9,10}$/.test(t))return!1;var e=1900+parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10)%50%20,i=parseInt(t.substr(4,2),10);if(9===t.length){if(e>=1980&&(e-=100),e>1953)return!1}else 1954>e&&(e+=100);if(!FormValidation.Helper.date(e,a,i))return!1;if(10===t.length){var r=parseInt(t.substr(0,9),10)%11;return 1985>e&&(r%=10),r+""===t.substr(9,1)}
return!0},_dk:function(t){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t))return!1;t=t.replace(/-/g,"");var e=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);switch(!0){case-1!=="5678".indexOf(t.charAt(6))&&i>=58:i+=1800;break;case-1!=="0123".indexOf(t.charAt(6)):case-1!=="49".indexOf(t.charAt(6))&&i>=37:i+=1900;break;default:i+=2e3}
return FormValidation.Helper.date(i,a,e)},_ee:function(t){return this._lt(t)},_es:function(t){var e=/^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t),a=/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(t),i=/^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(t);if(!e&&!a&&!i)return!1;t=t.replace(/-/g,"");var r,n,s=!0;if(e||a){n="DNI";var o="XYZ".indexOf(t.charAt(0));return-1!==o&&(t=o+t.substr(1)+"",n="NIE"),r=parseInt(t.substr(0,8),10),r="TRWAGMYFPDXBNJZSQVHLCKE"[r%23],{valid:r===t.substr(8,1),type:n}}
r=t.substr(1,7),n="CIF";for(var l=t[0],d=t.substr(-1),u=0,f=0;f<r.length;f++)
if(f%2!=0)u+=parseInt(r[f],10);else{var c=""+2*parseInt(r[f],10);u+=parseInt(c[0],10),2===c.length&&(u+=parseInt(c[1],10))}
var h=u-10*Math.floor(u/10);return 0!==h&&(h=10-h),s=-1!=="KQS".indexOf(l)?d==="JABCDEFGHI"[h]:-1!=="ABEH".indexOf(l)?d===""+h:d===""+h||d==="JABCDEFGHI"[h],{valid:s,type:n}},_fi:function(t){if(!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(t))return!1;var e=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(i={"+":1800,"-":1900,A:2e3}[t.charAt(6)]+i,!FormValidation.Helper.date(i,a,e))return!1;if(2>parseInt(t.substr(7,3),10))return!1;var r=t.substr(0,6)+t.substr(7,3)+"";return r=parseInt(r,10),"0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(r%31)===t.charAt(10)},_hr:function(t){return!!/^[0-9]{11}$/.test(t)&&FormValidation.Helper.mod11And10(t)},_ie:function(t){if(!/^\d{7}[A-W][AHWTX]?$/.test(t))return!1;var e=function(t){for(;t.length<7;)t="0"+t;for(var e="WABCDEFGHIJKLMNOPQRSTUV",a=0,i=0;7>i;i++)a+=parseInt(t.charAt(i),10)*(8-i);return a+=9*e.indexOf(t.substr(7)),e[a%23]};return 9!==t.length||"A"!==t.charAt(8)&&"H"!==t.charAt(8)?t.charAt(7)===e(t.substr(0,7)):t.charAt(7)===e(t.substr(0,7)+t.substr(8)+"")},_is:function(t){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t))return!1;t=t.replace(/-/g,"");var e=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10),r=parseInt(t.charAt(9),10);if(i=9===r?1900+i:100*(20+r)+i,!FormValidation.Helper.date(i,a,e,!0))return!1;for(var n=0,s=[3,2,7,6,5,4,3,2],o=0;8>o;o++)n+=parseInt(t.charAt(o),10)*s[o];return(n=11-n%11)+""===t.charAt(8)},_lt:function(t){if(!/^[0-9]{11}$/.test(t))return!1;var e=parseInt(t.charAt(0),10),a=parseInt(t.substr(1,2),10),i=parseInt(t.substr(3,2),10),r=parseInt(t.substr(5,2),10);if(a=100*(e%2==0?17+e/2:17+(e+1)/2)+a,!FormValidation.Helper.date(a,i,r,!0))return!1;for(var n=0,s=[1,2,3,4,5,6,7,8,9,1],o=0;10>o;o++)n+=parseInt(t.charAt(o),10)*s[o];if(10!==(n%=11))return n+""===t.charAt(10);for(n=0,s=[3,4,5,6,7,8,9,1,2,3],o=0;10>o;o++)n+=parseInt(t.charAt(o),10)*s[o];return 10===(n%=11)&&(n=0),n+""===t.charAt(10)},_lv:function(t){if(!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(t))return!1;t=t.replace(/\D/g,"");var e=parseInt(t.substr(0,2),10),a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(i=i+1800+100*parseInt(t.charAt(6),10),!FormValidation.Helper.date(i,a,e,!0))return!1;for(var r=0,n=[10,5,8,4,2,1,6,3,7,9],s=0;10>s;s++)r+=parseInt(t.charAt(s),10)*n[s];return(r=(r+1)%11%10)+""===t.charAt(10)},_nl:function(t){if(t.length<8)return!1;if(8===t.length&&(t="0"+t),!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(t))return!1;if(t=t.replace(/\./g,""),0===parseInt(t,10))return!1;for(var e=0,a=t.length,i=0;a-1>i;i++)e+=(9-i)*parseInt(t.charAt(i),10);return 10===(e%=11)&&(e=0),e+""===t.charAt(a-1)},_pl:function(t){if(!/^[0-9]{11}$/.test(t))return!1;for(var e=0,a=t.length,i=[1,3,7,9,1,3,7,9,1,3,7],r=0;a-1>r;r++)e+=i[r]*parseInt(t.charAt(r),10);return 0===(e%=10)&&(e=10),(e=10-e)+""===t.charAt(a-1)},_ro:function(t){if(!/^[0-9]{13}$/.test(t))return!1;var e=parseInt(t.charAt(0),10);if(0===e||7===e||8===e)return!1;var a=parseInt(t.substr(1,2),10),i=parseInt(t.substr(3,2),10),r=parseInt(t.substr(5,2),10),n={1:1900,2:1900,3:1800,4:1800,5:2e3,6:2e3};if(r>31&&i>12)return!1;if(9!==e&&(a=n[e+""]+a,!FormValidation.Helper.date(a,i,r)))return!1;for(var s=0,o=[2,7,9,1,4,6,3,5,8,2,7,9],l=t.length,d=0;l-1>d;d++)s+=parseInt(t.charAt(d),10)*o[d];return 10===(s%=11)&&(s=1),s+""===t.charAt(l-1)},_se:function(t){if(!/^[0-9]{10}$/.test(t)&&!/^[0-9]{6}[-|+][0-9]{4}$/.test(t))return!1;t=t.replace(/[^0-9]/g,"");var e=parseInt(t.substr(0,2),10)+1900,a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);return!!FormValidation.Helper.date(e,a,i)&&FormValidation.Helper.luhn(t)},_sk:function(t){return this._cz(t)},_sm:function(t){return/^\d{5}$/.test(t)},_th:function(t){if(13!==t.length)return!1;for(var e=0,a=0;12>a;a++)e+=parseInt(t.charAt(a),10)*(13-a);return(11-e%11)%10===parseInt(t.charAt(12),10)},_tr:function(t){if(11!==t.length)return!1;for(var e=0,a=0;10>a;a++)e+=parseInt(t.charAt(a),10);return e%10===parseInt(t.charAt(10),10)},_za:function(t){if(!/^[0-9]{10}[0|1][8|9][0-9]$/.test(t))return!1;var e=parseInt(t.substr(0,2),10),a=(new Date).getFullYear()%100,i=parseInt(t.substr(2,2),10),r=parseInt(t.substr(4,2),10);return e=e>=a?e+1900:e+2e3,!!FormValidation.Helper.date(e,i,r)&&FormValidation.Helper.luhn(t)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{identical:{default:"Please enter the same value"}}}),FormValidation.Validator.identical={html5Attributes:{message:"message",field:"field"},init:function(t,e,a,i){var r=t.getFieldElements(a.field);t.onLiveChange(r,"live_"+i,function(){t.getStatus(e,i)!==t.STATUS_NOT_VALIDATED&&t.revalidateField(e)})},destroy:function(t,e,a,i){var r=t.getFieldElements(a.field);t.offLiveChange(r,"live_"+i)},validate:function(t,e,a,i){var r=t.getFieldValue(e,i),n=t.getFieldElements(a.field);return null===n||0===n.length||!n.val()||!e.val()||r===t.getFieldValue(n,i)&&(t.updateStatus(n,t.STATUS_VALID,i),!0)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{imei:{default:"Please enter a valid IMEI number"}}}),FormValidation.Validator.imei={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;switch(!0){case/^\d{15}$/.test(r):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(r):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(r):return r=r.replace(/[^0-9]/g,""),FormValidation.Helper.luhn(r);case/^\d{14}$/.test(r):case/^\d{16}$/.test(r):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(r):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(r):return!0;default:return!1}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{imo:{default:"Please enter a valid IMO number"}}}),FormValidation.Validator.imo={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^IMO \d{7}$/i.test(r))return!1;for(var n=0,s=r.replace(/^.*(\d{7})$/,"$1"),o=6;o>=1;o--)n+=s.slice(6-o,-o)*(o+1);return n%10===parseInt(s.charAt(6),10)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{integer:{default:"Please enter a valid number"}}}),FormValidation.Validator.integer={html5Attributes:{message:"message",thousandsseparator:"thousandsSeparator",decimalseparator:"decimalSeparator"},enableByHtml5:function(t){return"number"===t.attr("type")&&(void 0===t.attr("step")||t.attr("step")%1==0)},validate:function(t,e,a,i){if(this.enableByHtml5(e)&&e.get(0).validity&&!0===e.get(0).validity.badInput)return!1;var r=t.getFieldValue(e,i);if(""===r)return!0;var n=a.decimalSeparator||".",s=a.thousandsSeparator||"";n="."===n?"\\.":n,s="."===s?"\\.":s;var o=new RegExp("^-?[0-9]{1,3}("+s+"[0-9]{3})*("+n+"[0-9]+)?$"),l=new RegExp(s,"g");return!!o.test(r)&&(s&&(r=r.replace(l,"")),n&&(r=r.replace(n,".")),!(isNaN(r)||!isFinite(r))&&(r=parseFloat(r),Math.floor(r)===r))}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{ip:{default:"Please enter a valid IP address",ipv4:"Please enter a valid IPv4 address",ipv6:"Please enter a valid IPv6 address"}}}),FormValidation.Validator.ip={html5Attributes:{message:"message",ipv4:"ipv4",ipv6:"ipv6"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;i=t.extend({},{ipv4:!0,ipv6:!0},i);var s,o=e.getLocale(),l=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\/([0-9]|[1-2][0-9]|3[0-2]))?$/,d=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*(\/(\d|\d\d|1[0-1]\d|12[0-8]))?$/,u=!1;switch(!0){case i.ipv4&&!i.ipv6:u=l.test(n),s=i.message||FormValidation.I18n[o].ip.ipv4;break;case!i.ipv4&&i.ipv6:u=d.test(n),s=i.message||FormValidation.I18n[o].ip.ipv6;break;case i.ipv4&&i.ipv6:default:u=l.test(n)||d.test(n),s=i.message||FormValidation.I18n[o].ip.default}
return{valid:u,message:s}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{isbn:{default:"Please enter a valid ISBN number"}}}),FormValidation.Validator.isbn={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n;switch(!0){case/^\d{9}[\dX]$/.test(r):case 13===r.length&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):case 13===r.length&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):n="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(r):case 17===r.length&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):case 17===r.length&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):n="ISBN13";break;default:return!1}
var s,o,l=(r=r.replace(/[^0-9X]/gi,"")).split(""),d=l.length,u=0;switch(n){case"ISBN10":for(u=0,s=0;d-1>s;s++)u+=parseInt(l[s],10)*(10-s);return o=11-u%11,11===o?o=0:10===o&&(o="X"),{type:n,valid:o+""===l[d-1]};case"ISBN13":for(u=0,s=0;d-1>s;s++)u+=s%2==0?parseInt(l[s],10):3*parseInt(l[s],10);return 10===(o=10-u%10)&&(o="0"),{type:n,valid:o+""===l[d-1]};default:return!1}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{isin:{default:"Please enter a valid ISIN number"}}}),FormValidation.Validator.isin={COUNTRY_CODES:"AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(r=r.toUpperCase(),!new RegExp("^("+this.COUNTRY_CODES+")[0-9A-Z]{10}$").test(r))return!1;for(var n="",s=r.length,o=0;s-1>o;o++){var l=r.charCodeAt(o);n+=l>57?(l-55).toString():r.charAt(o)}
var d="",u=n.length,f=u%2!=0?0:1;for(o=0;u>o;o++)d+=parseInt(n[o],10)*(o%2===f?2:1)+"";var c=0;for(o=0;o<d.length;o++)c+=parseInt(d.charAt(o),10);return(c=(10-c%10)%10)+""===r.charAt(s-1)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{ismn:{default:"Please enter a valid ISMN number"}}}),FormValidation.Validator.ismn={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n;switch(!0){case/^M\d{9}$/.test(r):case/^M-\d{4}-\d{4}-\d{1}$/.test(r):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(r):n="ISMN10";break;case/^9790\d{9}$/.test(r):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(r):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(r):n="ISMN13";break;default:return!1}"ISMN10"===n&&(r="9790"+r.substr(1));for(var s=(r=r.replace(/[^0-9]/gi,"")).length,o=0,l=[1,3],d=0;s-1>d;d++)o+=parseInt(r.charAt(d),10)*l[d%2];return o=10-o%10,{type:n,valid:o+""===r.charAt(s-1)}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{issn:{default:"Please enter a valid ISSN number"}}}),FormValidation.Validator.issn={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^\d{4}\-\d{3}[\dX]$/.test(r))return!1;var n=(r=r.replace(/[^0-9X]/gi,"")).split(""),s=n.length,o=0;"X"===n[7]&&(n[7]=10);for(var l=0;s>l;l++)o+=parseInt(n[l],10)*(8-l);return o%11==0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{lessThan:{default:"Please enter a value less than or equal to %s",notInclusive:"Please enter a value less than %s"}}}),FormValidation.Validator.lessThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(t){var e=t.attr("type"),a=t.attr("max");return!(!a||"date"===e)&&{value:a}},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;n=this._format(n);var s=e.getLocale(),o=t.isNumeric(i.value)?i.value:e.getDynamicOption(a,i.value),l=this._format(o);return!0===i.inclusive||void 0===i.inclusive?{valid:t.isNumeric(n)&&parseFloat(n)<=l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].lessThan.default,o)}:{valid:t.isNumeric(n)&&parseFloat(n)<l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].lessThan.notInclusive,o)}},_format:function(t){return(t+"").replace(",",".")}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{mac:{default:"Please enter a valid MAC address"}}}),FormValidation.Validator.mac={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||(/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(r)||/^([0-9A-Fa-f]{4}\.){2}([0-9A-Fa-f]{4})$/.test(r))}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{meid:{default:"Please enter a valid MEID number"}}}),FormValidation.Validator.meid={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;switch(!0){case/^[0-9A-F]{15}$/i.test(r):case/^[0-9A-F]{2}[-][0-9A-F]{6}[-][0-9A-F]{6}[-][0-9A-F]$/i.test(r):case/^\d{19}$/.test(r):case/^\d{5}[-]\d{5}[-]\d{4}[-]\d{4}[-]\d$/.test(r):var n=r.charAt(r.length-1);if((r=r.replace(/[- ]/g,"")).match(/^\d*$/i))return FormValidation.Helper.luhn(r);r=r.slice(0,-1);for(var s="",o=1;13>=o;o+=2)s+=(2*parseInt(r.charAt(o),16)).toString(16);var l=0;for(o=0;o<s.length;o++)l+=parseInt(s.charAt(o),16);return l%10==0?"0"===n:n===(2*(10*Math.floor((l+10)/10)-l)).toString(16);case/^[0-9A-F]{14}$/i.test(r):case/^[0-9A-F]{2}[-][0-9A-F]{6}[-][0-9A-F]{6}$/i.test(r):case/^\d{18}$/.test(r):case/^\d{5}[-]\d{5}[-]\d{4}[-]\d{4}$/.test(r):return!0;default:return!1}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{notEmpty:{default:"Please enter a value"}}}),FormValidation.Validator.notEmpty={enableByHtml5:function(t){var e=t.attr("required")+"";return"required"===e||"true"===e},validate:function(e,a,i,r){var n=a.attr("type");if("radio"===n||"checkbox"===n){var s=e.getNamespace();return e.getFieldElements(a.attr("data-"+s+"-field")).filter(":checked").length>0}
if("number"===n&&a.get(0).validity&&!0===a.get(0).validity.badInput)return!0;var o=e.getFieldValue(a,r);return""!==t.trim(o)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{numeric:{default:"Please enter a valid float number"}}}),FormValidation.Validator.numeric={html5Attributes:{message:"message",separator:"separator",thousandsseparator:"thousandsSeparator",decimalseparator:"decimalSeparator"},enableByHtml5:function(t){return"number"===t.attr("type")&&void 0!==t.attr("step")&&t.attr("step")%1!=0},validate:function(t,e,a,i){if(this.enableByHtml5(e)&&e.get(0).validity&&!0===e.get(0).validity.badInput)return!1;var r=t.getFieldValue(e,i);if(""===r)return!0;var n=a.separator||a.decimalSeparator||".",s=a.thousandsSeparator||"";r.substr(0,1)===n?r="0"+n+r.substr(1):r.substr(0,2)==="-"+n&&(r="-0"+n+r.substr(2)),n="."===n?"\\.":n,s="."===s?"\\.":s;var o=new RegExp("^-?[0-9]{1,3}("+s+"[0-9]{3})*("+n+"[0-9]+)?$"),l=new RegExp(s,"g");return!!o.test(r)&&(s&&(r=r.replace(l,"")),n&&(r=r.replace(n,".")),!isNaN(parseFloat(r))&&isFinite(r))}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{phone:{default:'请输入有效的电话号码',country:'请输入有效的 %s 国家或地区的电话号码',countries:{AE:'阿联酋',BG:'保加利亚',BR:'巴西',CN:'中国',CZ:'捷克共和国',DE:'德国',DK:'丹麦',ES:'西班牙',FR:'法国',GB:'英国',IN:'印度',MA:'摩洛哥',NL:'荷兰',PK:'巴基斯坦',RO:'罗马尼亚',RU:'俄罗斯',SK:'斯洛伐克',TH:'泰国',US:'美国',VE:'委内瑞拉'}}}}),FormValidation.Validator.phone={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AE","BG","BR","CN","CZ","DE","DK","ES","FR","GB","IN","MA","NL","PK","RO","RU","SK","TH","US","VE"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;var s=e.getLocale(),o=i.country||'';/*if(("string"!=typeof o||-1===t.inArray(o,this.COUNTRY_CODES))&&(o=e.getDynamicOption(a,o)),!o||-1===t.inArray(o.toUpperCase(),this.COUNTRY_CODES))return!0;*/var l=!0;switch(o.toUpperCase()){case"AE":n=t.trim(n),l=/^(((\+|00)?971[\s\.-]?(\(0\)[\s\.-]?)?|0)(\(5(0|2|5|6)\)|5(0|2|5|6)|2|3|4|6|7|9)|60)([\s\.-]?[0-9]){7}$/.test(n);break;case"BG":n=n.replace(/\+|\s|-|\/|\(|\)/gi,""),l=/^(0|359|00)(((700|900)[0-9]{5}|((800)[0-9]{5}|(800)[0-9]{4}))|(87|88|89)([0-9]{7})|((2[0-9]{7})|(([3-9][0-9])(([0-9]{6})|([0-9]{5})))))$/.test(n);break;case"BR":n=t.trim(n),l=/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(n);break;case"CN":n=t.trim(n),l=/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(n);break;case"CZ":l=/^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(n);break;case"DE":n=t.trim(n),l=/^(((((((00|\+)49[ \-\/]?)|0)[1-9][0-9]{1,4})[\-\/]?)|((((00|\+)49\()|\(0)[1-9][0-9]{1,4}\)[\-\/]?))[0-9]{1,7}([\-\/]?[0-9]{1,5})?)$/.test(n);break;case"DK":n=t.trim(n),l=/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(n);break;case"ES":n=t.trim(n),l=/^(?:(?:(?:\+|00)34\D?))?(?:5|6|7|8|9)(?:\d\D?){8}$/.test(n);break;case"FR":n=t.trim(n),l=/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(n);break;case"GB":n=t.trim(n),l=/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(n);break;case"IN":n=t.trim(n),l=/((\+?)((0[ -]+)*|(91 )*)(\d{12}|\d{10}))|\d{5}([- ]*)\d{6}/.test(n);break;case"MA":n=t.trim(n),l=/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(n);break;case"NL":n=t.trim(n),l=/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9])((\s|\s?-\s?)?[0-9])((\s|\s?-\s?)?[0-9])\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]\s?[0-9]$/gm.test(n);break;case"PK":n=t.trim(n),l=/^0?3[0-9]{2}[0-9]{7}$/.test(n);break;case"RO":l=/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(n);break;case"RU":l=/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(n);break;case"SK":l=/^(((00)([- ]?)|\+)(421)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(n);break;case"TH":l=/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(n);break;case"VE":n=t.trim(n),l=/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(n);break;case"US":default:l=/*/^(?:(1\-?)|(\+1 ?))?\(?\d{3}\)?[\-\.\s]?\d{3}[\-\.\s]?\d{4}$/*//^\s*\+?\s*(\(\s*\d+\s*\)|\d+)(\s*-?\s*(\(\s*\d+\s*\)|\s*\d+\s*))*\s*$/.test(n)}return{valid:l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].phone.country,FormValidation.I18n[s].phone.countries[o])}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{promise:{default:"Please enter a valid value"}}}),FormValidation.Validator.promise={priority:999,html5Attributes:{message:"message",promise:"promise"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r),s=new t.Deferred;return FormValidation.Helper.call(i.promise,[n,e,a]).done(function(t){s.resolve(a,r,t)}).fail(function(t){(t=t||{}).valid=!1,s.resolve(a,r,t)}),s}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{regexp:{default:"Please enter a value matching the pattern"}}}),FormValidation.Validator.regexp={html5Attributes:{message:"message",flags:"flags",regexp:"regexp"},enableByHtml5:function(t){var e=t.attr("pattern");return!!e&&{regexp:e}},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||("string"==typeof a.regexp?a.flags?new RegExp(a.regexp,a.flags):new RegExp(a.regexp):a.regexp).test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{remote:{default:"Please enter a valid value"}}}),FormValidation.Validator.remote={priority:1e3,html5Attributes:{async:"async",crossdomain:"crossDomain",data:"data",datatype:"dataType",delay:"delay",message:"message",name:"name",type:"type",url:"url",validkey:"validKey"},destroy:function(t,e,a,i){var r=t.getNamespace(),n=e.data(r+"."+i+".timer");n&&(clearTimeout(n),e.removeData(r+"."+i+".timer"))},validate:function(e,a,i,r){function n(){var e=t.ajax(h);return e.success(function(t){t.valid=!0===t[c]||"true"===t[c]||!1!==t[c]&&"false"!==t[c]&&null,l.resolve(a,r,t)}).error(function(t){l.resolve(a,r,{valid:!1})}),l.fail(function(){e.abort()}),l}
var s=e.getNamespace(),o=e.getFieldValue(a,r),l=new t.Deferred;if(""===o)return l.resolve(a,r,{valid:!0}),l;var d=a.attr("data-"+s+"-field"),u=i.data||{},f=i.url,c=i.validKey||"valid";"function"==typeof u&&(u=u.call(this,e,a,o)),"string"==typeof u&&(u=JSON.parse(u)),"function"==typeof f&&(f=f.call(this,e,a,o)),u[i.name||d]=o;var h={async:null===i.async||!0===i.async||"true"===i.async,data:u,dataType:i.dataType||"json",headers:i.headers||{},type:i.type||"GET",url:f};return null!==i.crossDomain&&(h.crossDomain=!0===i.crossDomain||"true"===i.crossDomain),i.delay?(a.data(s+"."+r+".timer")&&clearTimeout(a.data(s+"."+r+".timer")),a.data(s+"."+r+".timer",setTimeout(n,i.delay)),l):n()}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{rtn:{default:"Please enter a valid RTN number"}}}),FormValidation.Validator.rtn={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^\d{9}$/.test(r))return!1;for(var n=0,s=0;s<r.length;s+=3)n+=3*parseInt(r.charAt(s),10)+7*parseInt(r.charAt(s+1),10)+parseInt(r.charAt(s+2),10);return 0!==n&&n%10==0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{sedol:{default:"Please enter a valid SEDOL number"}}}),FormValidation.Validator.sedol={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(r=r.toUpperCase(),!/^[0-9A-Z]{7}$/.test(r))return!1;for(var n=0,s=[1,3,1,7,3,9,1],o=r.length,l=0;o-1>l;l++)n+=s[l]*parseInt(r.charAt(l),36);return(n=(10-n%10)%10)+""===r.charAt(o-1)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{siren:{default:"Please enter a valid SIREN number"}}}),FormValidation.Validator.siren={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);return""===r||!!/^\d{9}$/.test(r)&&FormValidation.Helper.luhn(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{siret:{default:"Please enter a valid SIRET number"}}}),FormValidation.Validator.siret={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;for(var n,s=0,o=r.length,l=0;o>l;l++)n=parseInt(r.charAt(l),10),l%2==0&&(n*=2)>9&&(n-=9),s+=n;return s%10==0}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{step:{default:"Please enter a valid step of %s"}}}),FormValidation.Validator.step={html5Attributes:{message:"message",base:"baseValue",step:"step"},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;if(i=t.extend({},{baseValue:0,step:1},i),n=parseFloat(n),!t.isNumeric(n))return!1;var s=function(t,e){var a=Math.pow(10,e),i=(t*=a)>0|-(0>t);return t%1==.5*i?(Math.floor(t)+(i>0))/a:Math.round(t)/a},o=e.getLocale(),l=function(t,e){if(0===e)return 1;var a=(t+"").split("."),i=(e+"").split("."),r=(1===a.length?0:a[1].length)+(1===i.length?0:i[1].length);return s(t-e*Math.floor(t/e),r)}(n-i.baseValue,i.step);return{valid:0===l||l===i.step,message:FormValidation.Helper.format(i.message||FormValidation.I18n[o].step.default,[i.step])}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{stringCase:{default:"Please enter only lowercase characters",upper:"Please enter only uppercase characters"}}}),FormValidation.Validator.stringCase={html5Attributes:{message:"message",case:"case"},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n=t.getLocale(),s=(a.case||"lower").toLowerCase();return{valid:"upper"===s?r===r.toUpperCase():r===r.toLowerCase(),message:a.message||("upper"===s?FormValidation.I18n[n].stringCase.upper:FormValidation.I18n[n].stringCase.default)}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{stringLength:{default:"Please enter a value with valid length",less:"Please enter less than %s characters",more:"Please enter more than %s characters",between:"Please enter value between %s and %s characters long"}}}),FormValidation.Validator.stringLength={html5Attributes:{message:"message",min:"min",max:"max",trim:"trim",utf8bytes:"utf8Bytes"},enableByHtml5:function(e){var a={},i=e.attr("maxlength"),r=e.attr("minlength");return i&&(a.max=parseInt(i,10)),r&&(a.min=parseInt(r,10)),!t.isEmptyObject(a)&&a},validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if((!0===i.trim||"true"===i.trim)&&(n=t.trim(n)),""===n)return!0;var s=e.getLocale(),o=t.isNumeric(i.min)?i.min:e.getDynamicOption(a,i.min),l=t.isNumeric(i.max)?i.max:e.getDynamicOption(a,i.max),d=i.utf8Bytes?function(t){for(var e=t.length,a=t.length-1;a>=0;a--){var i=t.charCodeAt(a);i>127&&2047>=i?e++:i>2047&&65535>=i&&(e+=2),i>=56320&&57343>=i&&a--}
return e}(n):n.length,u=!0,f=i.message||FormValidation.I18n[s].stringLength.default;switch((o&&d<parseInt(o,10)||l&&d>parseInt(l,10))&&(u=!1),!0){case!!o&&!!l:f=FormValidation.Helper.format(i.message||FormValidation.I18n[s].stringLength.between,[parseInt(o,10),parseInt(l,10)]);break;case!!o:f=FormValidation.Helper.format(i.message||FormValidation.I18n[s].stringLength.more,parseInt(o,10)-1);break;case!!l:f=FormValidation.Helper.format(i.message||FormValidation.I18n[s].stringLength.less,parseInt(l,10)+1)}
return{valid:u,message:f}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{uri:{default:"Please enter a valid URI"}}}),FormValidation.Validator.uri={html5Attributes:{message:"message",allowlocal:"allowLocal",allowemptyprotocol:"allowEmptyProtocol",protocol:"protocol"},enableByHtml5:function(t){return"url"===t.attr("type")},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n=!0===a.allowLocal||"true"===a.allowLocal,s=!0===a.allowEmptyProtocol||"true"===a.allowEmptyProtocol,o=(a.protocol||"http, https, ftp").split(",").join("|").replace(/\s/g,"");return new RegExp("^(?:(?:"+o+")://)"+(s?"?":"")+"(?:\\S+(?::\\S*)?@)?(?:"+(n?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(n?"?":"")+")(?::\\d{2,5})?(?:/[^\\s]*)?$","i").test(r)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{uuid:{default:"Please enter a valid UUID number",version:"Please enter a valid UUID version %s number"}}}),FormValidation.Validator.uuid={html5Attributes:{message:"message",version:"version"},validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;var n=t.getLocale(),s={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},o=a.version?a.version+"":"all";return{valid:null===s[o]||s[o].test(r),message:a.version?FormValidation.Helper.format(a.message||FormValidation.I18n[n].uuid.version,a.version):a.message||FormValidation.I18n[n].uuid.default}}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{vat:{default:"Please enter a valid VAT number",country:"Please enter a valid VAT number in %s",countries:{AT:"Austria",BE:"Belgium",BG:"Bulgaria",BR:"Brazil",CH:"Switzerland",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",EE:"Estonia",ES:"Spain",FI:"Finland",FR:"France",GB:"United Kingdom",GR:"Greek",EL:"Greek",HU:"Hungary",HR:"Croatia",IE:"Ireland",IS:"Iceland",IT:"Italy",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MT:"Malta",NL:"Netherlands",NO:"Norway",PL:"Poland",PT:"Portugal",RO:"Romania",RU:"Russia",RS:"Serbia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",VE:"Venezuela",ZA:"South Africa"}}}}),FormValidation.Validator.vat={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AT","BE","BG","BR","CH","CY","CZ","DE","DK","EE","EL","ES","FI","FR","GB","GR","HR","HU","IE","IS","IT","LT","LU","LV","MT","NL","NO","PL","PT","RO","RU","RS","SE","SK","SI","VE","ZA"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n)return!0;var s=e.getLocale(),o=i.country;if(o?("string"!=typeof o||-1===t.inArray(o.toUpperCase(),this.COUNTRY_CODES))&&(o=e.getDynamicOption(a,o)):o=n.substr(0,2),-1===t.inArray(o,this.COUNTRY_CODES))return!0;var l=this[["_",o.toLowerCase()].join("")](n);return l=!0===l||!1===l?{valid:l}:l,l.message=FormValidation.Helper.format(i.message||FormValidation.I18n[s].vat.country,FormValidation.I18n[s].vat.countries[o.toUpperCase()]),l},_at:function(t){if(/^ATU[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^U[0-9]{8}$/.test(t))return!1;t=t.substr(1);for(var e=0,a=[1,2,1,2,1,2,1],i=0,r=0;7>r;r++)(i=parseInt(t.charAt(r),10)*a[r])>9&&(i=Math.floor(i/10)+i%10),e+=i;return 10===(e=10-(e+4)%10)&&(e=0),e+""===t.substr(7,1)},_be:function(t){return/^BE[0]{0,1}[0-9]{9}$/.test(t)&&(t=t.substr(2)),!!/^[0]{0,1}[0-9]{9}$/.test(t)&&(9===t.length&&(t="0"+t),"0"!==t.substr(1,1)&&(parseInt(t.substr(0,8),10)+parseInt(t.substr(8,2),10))%97==0)},_bg:function(t){if(/^BG[0-9]{9,10}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9,10}$/.test(t))return!1;var e=0,a=0;if(9===t.length){for(a=0;8>a;a++)e+=parseInt(t.charAt(a),10)*(a+1);if(10===(e%=11))
for(e=0,a=0;8>a;a++)e+=parseInt(t.charAt(a),10)*(a+3);return(e%=10)+""===t.substr(8)}
if(10===t.length){return function(t){var e=parseInt(t.substr(0,2),10)+1900,a=parseInt(t.substr(2,2),10),i=parseInt(t.substr(4,2),10);if(a>40?(e+=100,a-=40):a>20&&(e-=100,a-=20),!FormValidation.Helper.date(e,a,i))return!1;for(var r=0,n=[2,4,8,5,10,9,7,3,6],s=0;9>s;s++)r+=parseInt(t.charAt(s),10)*n[s];return(r=r%11%10)+""===t.substr(9,1)}(t)||function(t){for(var e=0,a=[21,19,17,13,11,9,7,3,1],i=0;9>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return(e%=10)+""===t.substr(9,1)}(t)||function(t){for(var e=0,a=[4,3,2,7,6,5,4,3,2],i=0;9>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return 10!==(e=11-e%11)&&(11===e&&(e=0),e+""===t.substr(9,1))}(t)}
return!1},_br:function(t){if(""===t)return!0;var e=t.replace(/[^\d]+/g,"");if(""===e||14!==e.length)return!1;if("00000000000000"===e||"11111111111111"===e||"22222222222222"===e||"33333333333333"===e||"44444444444444"===e||"55555555555555"===e||"66666666666666"===e||"77777777777777"===e||"88888888888888"===e||"99999999999999"===e)return!1;for(var a=e.length-2,i=e.substring(0,a),r=e.substring(a),n=0,s=a-7,o=a;o>=1;o--)n+=parseInt(i.charAt(a-o),10)*s--,2>s&&(s=9);var l=2>n%11?0:11-n%11;if(l!==parseInt(r.charAt(0),10))return!1;for(a+=1,i=e.substring(0,a),n=0,s=a-7,o=a;o>=1;o--)n+=parseInt(i.charAt(a-o),10)*s--,2>s&&(s=9);return(l=2>n%11?0:11-n%11)===parseInt(r.charAt(1),10)},_ch:function(t){if(/^CHE[0-9]{9}(MWST)?$/.test(t)&&(t=t.substr(2)),!/^E[0-9]{9}(MWST)?$/.test(t))return!1;t=t.substr(1);for(var e=0,a=[5,4,3,2,7,6,5,4],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return 10!==(e=11-e%11)&&(11===e&&(e=0),e+""===t.substr(8,1))},_cy:function(t){if(/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t)&&(t=t.substr(2)),!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(t))return!1;if("12"===t.substr(0,2))return!1;for(var e=0,a={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21},i=0;8>i;i++){var r=parseInt(t.charAt(i),10);i%2==0&&(r=a[r+""]),e+=r}
return(e="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[e%26])+""===t.substr(8,1)},_cz:function(t){if(/^CZ[0-9]{8,10}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8,10}$/.test(t))return!1;var e=0,a=0;if(8===t.length){if(t.charAt(0)+""=="9")return!1;for(e=0,a=0;7>a;a++)e+=parseInt(t.charAt(a),10)*(8-a);return 10===(e=11-e%11)&&(e=0),11===e&&(e=1),e+""===t.substr(7,1)}
if(9===t.length&&t.charAt(0)+""=="6"){for(e=0,a=0;7>a;a++)e+=parseInt(t.charAt(a+1),10)*(8-a);return 10===(e=11-e%11)&&(e=0),11===e&&(e=1),(e=[8,7,6,5,4,3,2,1,0,9,10][e-1])+""===t.substr(8,1)}
if(9===t.length||10===t.length){var i=1900+parseInt(t.substr(0,2),10),r=parseInt(t.substr(2,2),10)%50%20,n=parseInt(t.substr(4,2),10);if(9===t.length){if(i>=1980&&(i-=100),i>1953)return!1}else 1954>i&&(i+=100);if(!FormValidation.Helper.date(i,r,n))return!1;if(10===t.length){var s=parseInt(t.substr(0,9),10)%11;return 1985>i&&(s%=10),s+""===t.substr(9,1)}
return!0}
return!1},_de:function(t){return/^DE[0-9]{9}$/.test(t)&&(t=t.substr(2)),!!/^[0-9]{9}$/.test(t)&&FormValidation.Helper.mod11And10(t)},_dk:function(t){if(/^DK[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8}$/.test(t))return!1;for(var e=0,a=[2,7,6,5,4,3,2,1],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%11==0},_ee:function(t){if(/^EE[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;for(var e=0,a=[3,7,1,3,7,1,3,7,1],i=0;9>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%10==0},_es:function(t){if(/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t)&&(t=t.substr(2)),!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(t))return!1;var e=t.charAt(0);return/^[0-9]$/.test(e)?{valid:function(t){var e=parseInt(t.substr(0,8),10);return(e="TRWAGMYFPDXBNJZSQVHLCKE"[e%23])+""===t.substr(8,1)}(t),type:"DNI"}:/^[XYZ]$/.test(e)?{valid:function(t){var e=["XYZ".indexOf(t.charAt(0)),t.substr(1)].join("");return e=parseInt(e,10),(e="TRWAGMYFPDXBNJZSQVHLCKE"[e%23])+""===t.substr(8,1)}(t),type:"NIE"}:{valid:function(t){var e,a=t.charAt(0);if(-1!=="KLM".indexOf(a))return e=parseInt(t.substr(1,8),10),(e="TRWAGMYFPDXBNJZSQVHLCKE"[e%23])+""===t.substr(8,1);if(-1!=="ABCDEFGHJNPQRSUVW".indexOf(a)){for(var i=0,r=[2,1,2,1,2,1,2],n=0,s=0;7>s;s++)(n=parseInt(t.charAt(s+1),10)*r[s])>9&&(n=Math.floor(n/10)+n%10),i+=n;return 10===(i=10-i%10)&&(i=0),i+""===t.substr(8,1)||"JABCDEFGHI"[i]===t.substr(8,1)}
return!1}(t),type:"CIF"}},_fi:function(t){if(/^FI[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8}$/.test(t))return!1;for(var e=0,a=[7,9,10,5,8,4,2,1],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%11==0},_fr:function(t){if(/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9A-Z]{2}[0-9]{9}$/.test(t))return!1;if(!FormValidation.Helper.luhn(t.substr(2)))return!1;if(/^[0-9]{2}$/.test(t.substr(0,2)))return t.substr(0,2)===parseInt(t.substr(2)+"12",10)%97+"";var e,a="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";return e=/^[0-9]{1}$/.test(t.charAt(0))?24*a.indexOf(t.charAt(0))+a.indexOf(t.charAt(1))-10:34*a.indexOf(t.charAt(0))+a.indexOf(t.charAt(1))-100,(parseInt(t.substr(2),10)+1+Math.floor(e/11))%11==e%11},_gb:function(t){if((/^GB[0-9]{9}$/.test(t)||/^GB[0-9]{12}$/.test(t)||/^GBGD[0-9]{3}$/.test(t)||/^GBHA[0-9]{3}$/.test(t)||/^GB(GD|HA)8888[0-9]{5}$/.test(t))&&(t=t.substr(2)),!(/^[0-9]{9}$/.test(t)||/^[0-9]{12}$/.test(t)||/^GD[0-9]{3}$/.test(t)||/^HA[0-9]{3}$/.test(t)||/^(GD|HA)8888[0-9]{5}$/.test(t)))return!1;var e=t.length;if(5===e){var a=t.substr(0,2),i=parseInt(t.substr(2),10);return"GD"===a&&500>i||"HA"===a&&i>=500}
if(11===e&&("GD8888"===t.substr(0,6)||"HA8888"===t.substr(0,6)))return!("GD"===t.substr(0,2)&&parseInt(t.substr(6,3),10)>=500||"HA"===t.substr(0,2)&&parseInt(t.substr(6,3),10)<500)&&parseInt(t.substr(6,3),10)%97===parseInt(t.substr(9,2),10);if(9===e||12===e){for(var r=0,n=[8,7,6,5,4,3,2,10,1],s=0;9>s;s++)r+=parseInt(t.charAt(s),10)*n[s];return r%=97,parseInt(t.substr(0,3),10)>=100?0===r||42===r||55===r:0===r}
return!0},_gr:function(t){if(/^(GR|EL)[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;8===t.length&&(t="0"+t);for(var e=0,a=[256,128,64,32,16,8,4,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return(e=e%11%10)+""===t.substr(8,1)},_el:function(t){return this._gr(t)},_hu:function(t){if(/^HU[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8}$/.test(t))return!1;for(var e=0,a=[9,7,3,1,9,7,3,1],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%10==0},_hr:function(t){return/^HR[0-9]{11}$/.test(t)&&(t=t.substr(2)),!!/^[0-9]{11}$/.test(t)&&FormValidation.Helper.mod11And10(t)},_ie:function(t){if(/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(t))return!1;var e=function(t){for(;t.length<7;)t="0"+t;for(var e="WABCDEFGHIJKLMNOPQRSTUV",a=0,i=0;7>i;i++)a+=parseInt(t.charAt(i),10)*(8-i);return a+=9*e.indexOf(t.substr(7)),e[a%23]};return/^[0-9]+$/.test(t.substr(0,7))?t.charAt(7)===e(t.substr(0,7)+t.substr(8)+""):-1==="ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(t.charAt(1))||t.charAt(7)===e(t.substr(2,5)+t.substr(0,1)+"")},_is:function(t){return/^IS[0-9]{5,6}$/.test(t)&&(t=t.substr(2)),/^[0-9]{5,6}$/.test(t)},_it:function(t){if(/^IT[0-9]{11}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{11}$/.test(t))return!1;if(0===parseInt(t.substr(0,7),10))return!1;var e=parseInt(t.substr(7,3),10);return!(1>e||e>201&&999!==e&&888!==e)&&FormValidation.Helper.luhn(t)},_lt:function(t){if(/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t)&&(t=t.substr(2)),!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(t))return!1;var e,a=t.length,i=0;for(e=0;a-1>e;e++)i+=parseInt(t.charAt(e),10)*(1+e%9);var r=i%11;if(10===r)
for(i=0,e=0;a-1>e;e++)i+=parseInt(t.charAt(e),10)*(1+(e+2)%9);return(r=r%11%10)+""===t.charAt(a-1)},_lu:function(t){return/^LU[0-9]{8}$/.test(t)&&(t=t.substr(2)),!!/^[0-9]{8}$/.test(t)&&parseInt(t.substr(0,6),10)%89+""===t.substr(6,2)},_lv:function(t){if(/^LV[0-9]{11}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{11}$/.test(t))return!1;var e,a=parseInt(t.charAt(0),10),i=0,r=[],n=t.length;if(a>3){for(i=0,r=[9,1,4,8,3,10,2,5,7,6,1],e=0;n>e;e++)i+=parseInt(t.charAt(e),10)*r[e];return 3===(i%=11)}
var s=parseInt(t.substr(0,2),10),o=parseInt(t.substr(2,2),10),l=parseInt(t.substr(4,2),10);if(l=l+1800+100*parseInt(t.charAt(6),10),!FormValidation.Helper.date(l,o,s))return!1;for(i=0,r=[10,5,8,4,2,1,6,3,7,9],e=0;n-1>e;e++)i+=parseInt(t.charAt(e),10)*r[e];return(i=(i+1)%11%10)+""===t.charAt(n-1)},_mt:function(t){if(/^MT[0-9]{8}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{8}$/.test(t))return!1;for(var e=0,a=[3,4,6,7,8,9,10,1],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%37==0},_nl:function(t){if(/^NL[0-9]{9}B[0-9]{2}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}B[0-9]{2}$/.test(t))return!1;for(var e=0,a=[9,8,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return(e%=11)>9&&(e=0),e+""===t.substr(8,1)},_no:function(t){if(/^NO[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;for(var e=0,a=[3,2,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return 11===(e=11-e%11)&&(e=0),e+""===t.substr(8,1)},_pl:function(t){if(/^PL[0-9]{10}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{10}$/.test(t))return!1;for(var e=0,a=[6,5,7,2,3,4,5,6,7,-1],i=0;10>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return e%11==0},_pt:function(t){if(/^PT[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;for(var e=0,a=[9,8,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i),10)*a[i];return(e=11-e%11)>9&&(e=0),e+""===t.substr(8,1)},_ro:function(t){if(/^RO[1-9][0-9]{1,9}$/.test(t)&&(t=t.substr(2)),!/^[1-9][0-9]{1,9}$/.test(t))return!1;for(var e=t.length,a=[7,5,3,2,1,7,5,3,2].slice(10-e),i=0,r=0;e-1>r;r++)i+=parseInt(t.charAt(r),10)*a[r];return(i=10*i%11%10)+""===t.substr(e-1,1)},_ru:function(t){if(/^RU([0-9]{10}|[0-9]{12})$/.test(t)&&(t=t.substr(2)),!/^([0-9]{10}|[0-9]{12})$/.test(t))return!1;var e=0;if(10===t.length){var a=0,i=[2,4,10,3,5,9,4,6,8,0];for(e=0;10>e;e++)a+=parseInt(t.charAt(e),10)*i[e];return(a%=11)>9&&(a%=10),a+""===t.substr(9,1)}
if(12===t.length){var r=0,n=[7,2,4,10,3,5,9,4,6,8,0],s=0,o=[3,7,2,4,10,3,5,9,4,6,8,0];for(e=0;11>e;e++)r+=parseInt(t.charAt(e),10)*n[e],s+=parseInt(t.charAt(e),10)*o[e];return(r%=11)>9&&(r%=10),(s%=11)>9&&(s%=10),r+""===t.substr(10,1)&&s+""===t.substr(11,1)}
return!1},_rs:function(t){if(/^RS[0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[0-9]{9}$/.test(t))return!1;for(var e=10,a=0,i=0;8>i;i++)0===(a=(parseInt(t.charAt(i),10)+e)%10)&&(a=10),e=2*a%11;return(e+parseInt(t.substr(8,1),10))%10==1},_se:function(t){return/^SE[0-9]{10}01$/.test(t)&&(t=t.substr(2)),!!/^[0-9]{10}01$/.test(t)&&(t=t.substr(0,10),FormValidation.Helper.luhn(t))},_si:function(t){var e=t.match(/^(SI)?([1-9][0-9]{7})$/);if(!e)return!1;e[1]&&(t=t.substr(2));for(var a=0,i=[8,7,6,5,4,3,2],r=0;7>r;r++)a+=parseInt(t.charAt(r),10)*i[r];return 10===(a=11-a%11)&&(a=0),a+""===t.substr(7,1)},_sk:function(t){return/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t)&&(t=t.substr(2)),!!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(t)&&parseInt(t,10)%11==0},_ve:function(t){if(/^VE[VEJPG][0-9]{9}$/.test(t)&&(t=t.substr(2)),!/^[VEJPG][0-9]{9}$/.test(t))return!1;for(var e={V:4,E:8,J:12,P:16,G:20}[t.charAt(0)],a=[3,2,7,6,5,4,3,2],i=0;8>i;i++)e+=parseInt(t.charAt(i+1),10)*a[i];return(11===(e=11-e%11)||10===e)&&(e=0),e+""===t.substr(9,1)},_za:function(t){return/^ZA4[0-9]{9}$/.test(t)&&(t=t.substr(2)),/^4[0-9]{9}$/.test(t)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{vin:{default:"Please enter a valid VIN number"}}}),FormValidation.Validator.vin={validate:function(t,e,a,i){var r=t.getFieldValue(e,i);if(""===r)return!0;if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(r))return!1;for(var n={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0},s=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],o=0,l=(r=r.toUpperCase()).length,d=0;l>d;d++)o+=n[r.charAt(d)+""]*s[d];var u=o%11;return 10===u&&(u="X"),u+""===r.charAt(8)}}}(jQuery),function(t){FormValidation.I18n=t.extend(!0,FormValidation.I18n||{},{en_US:{zipCode:{default:"Please enter a valid postal code",country:"Please enter a valid postal code in %s",countries:{AT:"Austria",BG:"Bulgaria",BR:"Brazil",CA:"Canada",CH:"Switzerland",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",ES:"Spain",FR:"France",GB:"United Kingdom",IE:"Ireland",IN:"India",IT:"Italy",MA:"Morocco",NL:"Netherlands",PL:"Poland",PT:"Portugal",RO:"Romania",RU:"Russia",SE:"Sweden",SG:"Singapore",SK:"Slovakia",US:"USA"}}}}),FormValidation.Validator.zipCode={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AT","BG","BR","CA","CH","CZ","DE","DK","ES","FR","GB","IE","IN","IT","MA","NL","PL","PT","RO","RU","SE","SG","SK","US"],validate:function(e,a,i,r){var n=e.getFieldValue(a,r);if(""===n||!i.country)return!0;var s=e.getLocale(),o=i.country;if(("string"!=typeof o||-1===t.inArray(o,this.COUNTRY_CODES))&&(o=e.getDynamicOption(a,o)),!o||-1===t.inArray(o.toUpperCase(),this.COUNTRY_CODES))return!0;var l=!1;switch(o=o.toUpperCase()){case"AT":l=/^([1-9]{1})(\d{3})$/.test(n);break;case"BG":l=/^([1-9]{1}[0-9]{3})$/.test(t.trim(n));break;case"BR":l=/^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(n);break;case"CA":l=/^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(n);break;case"CH":l=/^([1-9]{1})(\d{3})$/.test(n);break;case"CZ":l=/^(\d{3})([ ]?)(\d{2})$/.test(n);break;case"DE":l=/^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$/.test(n);break;case"DK":l=/^(DK(-|\s)?)?\d{4}$/i.test(n);break;case"ES":l=/^(?:0[1-9]|[1-4][0-9]|5[0-2])\d{3}$/.test(n);break;case"FR":l=/^[0-9]{5}$/i.test(n);break;case"GB":l=this._gb(n);break;case"IN":l=/^\d{3}\s?\d{3}$/.test(n);break;case"IE":l=/^(D6W|[ACDEFHKNPRTVWXY]\d{2})\s[0-9ACDEFHKNPRTVWXY]{4}$/.test(n);break;case"IT":l=/^(I-|IT-)?\d{5}$/i.test(n);break;case"MA":l=/^[1-9][0-9]{4}$/i.test(n);break;case"NL":l=/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(n);break;case"PL":l=/^[0-9]{2}\-[0-9]{3}$/.test(n);break;case"PT":l=/^[1-9]\d{3}-\d{3}$/.test(n);break;case"RO":l=/^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(n);break;case"RU":l=/^[0-9]{6}$/i.test(n);break;case"SE":l=/^(S-)?\d{3}\s?\d{2}$/i.test(n);break;case"SG":l=/^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(n);break;case"SK":l=/^(\d{3})([ ]?)(\d{2})$/.test(n);break;case"US":default:l=/^\d{4,5}([\-]?\d{4})?$/.test(n)}
return{valid:l,message:FormValidation.Helper.format(i.message||FormValidation.I18n[s].zipCode.country,FormValidation.I18n[s].zipCode.countries[o])}},_gb:function(t){for(var e="[ABCDEFGHIJKLMNOPRSTUWYZ]",a="[ABCDEFGHKLMNOPQRSTUVWXY]",i="[ABDEFGHJLNPQRSTUWXYZ]",r=[new RegExp("^("+e+"{1}"+a+"?[0-9]{1,2})(\\s*)([0-9]{1}"+i+"{2})$","i"),new RegExp("^("+e+"{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\\s*)([0-9]{1}"+i+"{2})$","i"),new RegExp("^("+e+"{1}"+a+"{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\\s*)([0-9]{1}"+i+"{2})$","i"),new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"),/^(GIR)(\s*)(0AA)$/i,/^(BFPO)(\s*)([0-9]{1,4})$/i,/^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,/^([A-Z]{4})(\s*)(1ZZ)$/i,/^(AI-2640)$/i],n=0;n<r.length;n++)
if(r[n].test(t))return!0;return!1}}}(jQuery);
(function ($) {
    /**
     * Simplified Chinese language package
     * Translated by @shamiao
     */
    FormValidation.I18n = $.extend(true, FormValidation.I18n, {
        'zh_CN': {
            base64: {
                'default': '请输入有效的Base64编码'
            },
            between: {
                'default': '请输入在 %s 和 %s 之间的数值',
                notInclusive: '请输入在 %s 和 %s 之间(不含两端)的数值'
            },
            bic: {
                'default': '请输入有效的BIC商品编码'
            },
            callback: {
                'default': '请输入有效的值'
            },
            choice: {
                'default': '请输入有效的值',
                less: '请至少选中 %s 个选项',
                more: '最多只能选中 %s 个选项',
                between: '请选择 %s 至 %s 个选项'
            },
            color: {
                'default': '请输入有效的颜色值'
            },
            creditCard: {
                'default': '请输入有效的信用卡号码'
            },
            cusip: {
                'default': '请输入有效的美国CUSIP代码'
            },
            cvv: {
                'default': '请输入有效的CVV代码'
            },
            date: {
                'default': '请输入有效的日期',
                min: '请输入 %s 或之后的日期',
                max: '请输入 %s 或以前的日期',
                range: '请输入 %s 和 %s 之间的日期'
            },
            different: {
                'default': '请输入不同的值'
            },
            digits: {
                'default': '请输入有效的数字'
            },
            ean: {
                'default': '请输入有效的EAN商品编码'
            },
            ein: {
                'default': '请输入有效的EIN商品编码'
            },
            emailAddress: {
                'default': '请输入有效的邮件地址'
            },
            file: {
                'default': '请选择有效的文件'
            },
            greaterThan: {
                'default': '请输入大于等于 %s 的数值',
                notInclusive: '请输入大于 %s 的数值'
            },
            grid: {
                'default': '请输入有效的GRId编码'
            },
            hex: {
                'default': '请输入有效的16进制数'
            },
            iban: {
                'default': '请输入有效的IBAN(国际银行账户)号码',
                country: '请输入有效的 %s 国家或地区的IBAN(国际银行账户)号码',
                countries: {
                    AD: '安道​​尔',
                    AE: '阿联酋',
                    AL: '阿尔巴尼亚',
                    AO: '安哥拉',
                    AT: '奥地利',
                    AZ: '阿塞拜疆',
                    BA: '波斯尼亚和黑塞哥维那',
                    BE: '比利时',
                    BF: '布基纳法索',
                    BG: '保加利亚',
                    BH: '巴林',
                    BI: '布隆迪',
                    BJ: '贝宁',
                    BR: '巴西',
                    CH: '瑞士',
                    CI: '科特迪瓦',
                    CM: '喀麦隆',
                    CR: '哥斯达黎加',
                    CV: '佛得角',
                    CY: '塞浦路斯',
                    CZ: '捷克共和国',
                    DE: '德国',
                    DK: '丹麦',
                    DO: '多米尼加共和国',
                    DZ: '阿尔及利亚',
                    EE: '爱沙尼亚',
                    ES: '西班牙',
                    FI: '芬兰',
                    FO: '法罗群岛',
                    FR: '法国',
                    GB: '英国',
                    GE: '格鲁吉亚',
                    GI: '直布罗陀',
                    GL: '格陵兰岛',
                    GR: '希腊',
                    GT: '危地马拉',
                    HR: '克罗地亚',
                    HU: '匈牙利',
                    IE: '爱尔兰',
                    IL: '以色列',
                    IR: '伊朗',
                    IS: '冰岛',
                    IT: '意大利',
                    JO: '约旦',
                    KW: '科威特',
                    KZ: '哈萨克斯坦',
                    LB: '黎巴嫩',
                    LI: '列支敦士登',
                    LT: '立陶宛',
                    LU: '卢森堡',
                    LV: '拉脱维亚',
                    MC: '摩纳哥',
                    MD: '摩尔多瓦',
                    ME: '黑山',
                    MG: '马达加斯加',
                    MK: '马其顿',
                    ML: '马里',
                    MR: '毛里塔尼亚',
                    MT: '马耳他',
                    MU: '毛里求斯',
                    MZ: '莫桑比克',
                    NL: '荷兰',
                    NO: '挪威',
                    PK: '巴基斯坦',
                    PL: '波兰',
                    PS: '巴勒斯坦',
                    PT: '葡萄牙',
                    QA: '卡塔尔',
                    RO: '罗马尼亚',
                    RS: '塞尔维亚',
                    SA: '沙特阿拉伯',
                    SE: '瑞典',
                    SI: '斯洛文尼亚',
                    SK: '斯洛伐克',
                    SM: '圣马力诺',
                    SN: '塞内加尔',
                    TL: '东帝汶',
                    TN: '突尼斯',
                    TR: '土耳其',
                    VG: '英属维尔京群岛',
                    XK: '科索沃共和国'
                }
            },
            id: {
                'default': '请输入有效的身份证件号码',
                country: '请输入有效的 %s 国家或地区的身份证件号码',
                countries: {
                    BA: '波黑',
                    BG: '保加利亚',
                    BR: '巴西',
                    CH: '瑞士',
                    CL: '智利',
                    CN: '中国',
                    CZ: '捷克共和国',
                    DK: '丹麦',
                    EE: '爱沙尼亚',
                    ES: '西班牙',
                    FI: '芬兰',
                    HR: '克罗地亚',
                    IE: '爱尔兰',
                    IS: '冰岛',
                    LT: '立陶宛',
                    LV: '拉脱维亚',
                    ME: '黑山',
                    MK: '马其顿',
                    NL: '荷兰',
                    PL: '波兰',
                    RO: '罗马尼亚',
                    RS: '塞尔维亚',
                    SE: '瑞典',
                    SI: '斯洛文尼亚',
                    SK: '斯洛伐克',
                    SM: '圣马力诺',
                    TH: '泰国',
                    TR: '土耳其',
                    ZA: '南非'
                }
            },
            identical: {
                'default': '请输入相同的值'
            },
            imei: {
                'default': '请输入有效的IMEI(手机串号)'
            },
            imo: {
                'default': '请输入有效的国际海事组织(IMO)号码'
            },
            integer: {
                'default': '请输入有效的整数值'
            },
            ip: {
                'default': '请输入有效的IP地址',
                ipv4: '请输入有效的IPv4地址',
                ipv6: '请输入有效的IPv6地址'
            },
            isbn: {
                'default': '请输入有效的ISBN(国际标准书号)'
            },
            isin: {
                'default': '请输入有效的ISIN(国际证券编码)'
            },
            ismn: {
                'default': '请输入有效的ISMN(印刷音乐作品编码)'
            },
            issn: {
                'default': '请输入有效的ISSN(国际标准杂志书号)'
            },
            lessThan: {
                'default': '请输入小于等于 %s 的数值',
                notInclusive: '请输入小于 %s 的数值'
            },
            mac: {
                'default': '请输入有效的MAC物理地址'
            },
            meid: {
                'default': '请输入有效的MEID(移动设备识别码)'
            },
            notEmpty: {
                'default': '请填写必填项目'
            },
            numeric: {
                'default': '请输入有效的数值，允许小数'
            },
            phone: {
                'default': '请输入有效的电话号码',
                country: '请输入有效的 %s 国家或地区的电话号码',
                countries: {
                    AE: '阿联酋',
                    BG: '保加利亚',
                    BR: '巴西',
                    CN: '中国',
                    CZ: '捷克共和国',
                    DE: '德国',
                    DK: '丹麦',
                    ES: '西班牙',
                    FR: '法国',
                    GB: '英国',
                    IN: '印度',
                    MA: '摩洛哥',
                    NL: '荷兰',
                    PK: '巴基斯坦',
                    RO: '罗马尼亚',
                    RU: '俄罗斯',
                    SK: '斯洛伐克',
                    TH: '泰国',
                    US: '美国',
                    VE: '委内瑞拉'
                }
            },
            promise: {
                'default': '请输入有效的值'
            },
            regexp: {
                'default': '请输入符合正则表达式限制的值'
            },
            remote: {
                'default': '请输入有效的值'
            },
            rtn: {
                'default': '请输入有效的RTN号码'
            },
            sedol: {
                'default': '请输入有效的SEDOL代码'
            },
            siren: {
                'default': '请输入有效的SIREN号码'
            },
            siret: {
                'default': '请输入有效的SIRET号码'
            },
            step: {
                'default': '请输入在基础值上，增加 %s 的整数倍的数值'
            },
            stringCase: {
                'default': '只能输入小写字母',
                upper: '只能输入大写字母'
            },
            stringLength: {
                'default': '请输入符合长度限制的值',
                less: '最多只能输入 %s 个字符',
                more: '需要输入至少 %s 个字符',
                between: '请输入 %s 至 %s 个字符'
            },
            uri: {
                'default': '请输入一个有效的URL地址'
            },
            uuid: {
                'default': '请输入有效的UUID',
                version: '请输入版本 %s 的UUID'
            },
            vat: {
                'default': '请输入有效的VAT(税号)',
                country: '请输入有效的 %s 国家或地区的VAT(税号)',
                countries: {
                    AT: '奥地利',
                    BE: '比利时',
                    BG: '保加利亚',
                    BR: '巴西',
                    CH: '瑞士',
                    CY: '塞浦路斯',
                    CZ: '捷克共和国',
                    DE: '德国',
                    DK: '丹麦',
                    EE: '爱沙尼亚',
                    ES: '西班牙',
                    FI: '芬兰',
                    FR: '法语',
                    GB: '英国',
                    GR: '希腊',
                    EL: '希腊',
                    HU: '匈牙利',
                    HR: '克罗地亚',
                    IE: '爱尔兰',
                    IS: '冰岛',
                    IT: '意大利',
                    LT: '立陶宛',
                    LU: '卢森堡',
                    LV: '拉脱维亚',
                    MT: '马耳他',
                    NL: '荷兰',
                    NO: '挪威',
                    PL: '波兰',
                    PT: '葡萄牙',
                    RO: '罗马尼亚',
                    RU: '俄罗斯',
                    RS: '塞尔维亚',
                    SE: '瑞典',
                    SI: '斯洛文尼亚',
                    SK: '斯洛伐克',
                    VE: '委内瑞拉',
                    ZA: '南非'
                }
            },
            vin: {
                'default': '请输入有效的VIN(美国车辆识别号码)'
            },
            zipCode: {
                'default': '请输入有效的邮政编码',
                country: '请输入有效的 %s 国家或地区的邮政编码',
                countries: {
                    AT: '奥地利',
                    BG: '保加利亚',
                    BR: '巴西',
                    CA: '加拿大',
                    CH: '瑞士',
                    CZ: '捷克共和国',
                    DE: '德国',
                    DK: '丹麦',
                    ES: '西班牙',
                    FR: '法国',
                    GB: '英国',
                    IE: '爱尔兰',
                    IN: '印度',
                    IT: '意大利',
                    MA: '摩洛哥',
                    NL: '荷兰',
                    PL: '波兰',
                    PT: '葡萄牙',
                    RO: '罗马尼亚',
                    RU: '俄罗斯',
                    SE: '瑞典',
                    SG: '新加坡',
                    SK: '斯洛伐克',
                    US: '美国'
                }
            }
        }
    });
}(jQuery));

/*!
 * FormValidation (http://formvalidation.io)
 * The best jQuery plugin to validate form fields. Support Bootstrap, Foundation, Pure, SemanticUI, UIKit and custom frameworks
 *
 * @version     v0.8.1, built on 2016-07-29 1:10:56 AM
 * @author      https://twitter.com/formvalidation
 * @copyright   (c) 2013 - 2016 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function(a){FormValidation.Framework.Bootstrap4=function(b,c,d){c=a.extend(!0,{button:{selector:'[type="submit"]:not([formnovalidate])',disabled:"disabled"},err:{clazz:"form-control-label",parent:"^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$"},icon:{valid:null,invalid:null,validating:null,feedback:"fv-control-feedback"},row:{selector:".form-group",valid:"has-success",invalid:"has-danger",feedback:"fv-has-feedback"}},c),FormValidation.Base.apply(this,[b,c,d])},FormValidation.Framework.Bootstrap4.prototype=a.extend({},FormValidation.Base.prototype,{_fixIcon:function(a,b){var c=this._namespace,d=a.attr("type"),e=a.attr("data-"+c+"-field"),f=this.options.fields[e].row||this.options.row.selector,g=a.closest(f);if("checkbox"===d||"radio"===d){var h=a.parent();h.hasClass("form-check")?b.insertAfter(h):h.parent().hasClass("form-check")&&b.insertAfter(h.parent())}0!==g.find(".input-group").length&&b.addClass("fv-bootstrap-icon-input-group").insertAfter(g.find(".input-group").eq(0))},_createTooltip:function(a,b,c){var d=this._namespace,e=a.data(d+".icon");if(e)switch(c){case"popover":e.css({cursor:"pointer","pointer-events":"auto"}).popover("destroy").popover({container:"body",content:b,html:!0,placement:"top",trigger:"hover click"});break;case"tooltip":default:e.css({cursor:"pointer","pointer-events":"auto"}).tooltip("dispose").tooltip({container:"body",html:!0,placement:"top",title:b})}},_destroyTooltip:function(a,b){var c=this._namespace,d=a.data(c+".icon");if(d)switch(b){case"popover":d.css({cursor:"","pointer-events":"none"}).popover("destroy");break;case"tooltip":default:d.css({cursor:"","pointer-events":"none"}).tooltip("dispose")}},_hideTooltip:function(a,b){var c=this._namespace,d=a.data(c+".icon");if(d)switch(b){case"popover":d.popover("hide");break;case"tooltip":default:d.tooltip("hide")}},_showTooltip:function(a,b){var c=this._namespace,d=a.data(c+".icon");if(d)switch(b){case"popover":d.popover("show");break;case"tooltip":default:d.tooltip("show")}}})}(jQuery);
/**
 * jQuery EnPlaceholder plug
 * EnPlaceholder是一个跨浏览器实现placeholder效果的jQuery插件
 * version 1.0
 * by Frans.Lee <dmon@foxmail.com>  http://www.ifrans.cn
 */
;(function($){$.fn.extend({"placeholder":function(options){options=$.extend({placeholderColor:'#999',isUseSpan:true},options);$(this).each(function(){var _this=this;var supportPlaceholder='placeholder'in document.createElement('input');if(!supportPlaceholder){var defaultValue=$(_this).attr('placeholder');var defaultColor=$(_this).css('color');if(options.isUseSpan==false){$(_this).focus(function(){var pattern=new RegExp("^"+defaultValue+"$|^$");pattern.test($(_this).val())&&$(_this).val('').css('color',defaultColor);}).blur(function(){if($(_this).val()==defaultValue){$(_this).css('color',defaultColor);}else if($(_this).val().length==0){$(_this).val(defaultValue).css('color',options.placeholderColor)}}).trigger('blur');}else{var $imitate=$('<span class="wrap-placeholder" style="position:absolute; display:block; overflow:hidden;z-index: 10; color:'+options.placeholderColor+'; width:'+$(_this).outerWidth()+'px; height:inherit;'+'">'+defaultValue+'</span>');$imitate.css({'margin-left':$(_this).css('margin-left'),'margin-top':$(_this).css('margin-top'),'font-size':$(_this).css('font-size'),'font-family':$(_this).css('font-family'),'font-weight':$(_this).css('font-weight'),'padding-left':$(_this).css('padding-left'),'line-height':$(_this).css('line-height'),'padding-top':$(_this).css('padding-top')});$(_this).before($imitate.click(function(){$(_this).trigger('focus');}));$(_this).val().length&&$imitate.hide();var inputChangeEvent=typeof(_this.oninput)=='object'?'input':'propertychange';$(_this).bind(inputChangeEvent,function(){if($(_this).val().length){$imitate.hide();}else{$imitate.show();}});$(_this).focus(function(){$imitate.hide();}).blur(function(){/^$/.test($(_this).val())&&$imitate.show();});}}});return this;}});})(jQuery);if($('input[placeholder],textarea[placeholder]').length)$('input[placeholder],textarea[placeholder]').placeholder();
/*
表单验证功能（需调用formvalidation插件）
 */
$(function(){
    // 验证码输入自动转为大写
    $(document).on('change keyup','.input-codeimg',function(){
        $(this).val($(this).val().toUpperCase());
    });
    // 上传文件
    $(document).on('change keyup','.input-group-file input[type="file"]',function(){
        if(!$(this).parents('.input-group-btn').find('.file-input').length){// 如果没有加载file-input插件
            // 输入框文件路径更新
            var $text=$(this).parents('.input-group-file').find('input[type="text"]'),
                value='';
            if(M['is_lteie9']){
                value=$(this).val();
            }else{
                var $input_group_file=$(this).parents('.input-group-file');
                if($(this)[0].files.length>10){
                    // 显示报错文字
                    if(!$input_group_file.next('small.form-control-label').length) $input_group_file.after('<small class="form-control-label"></small>');
                    $input_group_file.next('small.form-control-label').text('一次只能提交最多10张图片！');
                    $input_group_file.parents('.form-group').removeClass('has-success').addClass('has-danger');
                }else{
                    $.each($(this)[0].files,function(i,file){
                        value +=value?','+file.name:file.name;
                    });
                    $input_group_file.next('small.form-control-label').html('');
                    $input_group_file.parents('.form-group').removeClass('has-danger');
                }
            }
            if(value) $text.val(value);
        }
    });
    // 验证码点击刷新
    $(document).on('click',"#getcode",function(){
        var data_src=$(this).attr("data-src");
        if(!data_src){
            data_src=$(this).prop("src")+'&random=';
            $(this).attr({'data-src':data_src});
        }
        if(data_src.indexOf('&random=')<0) data_src+='&random=';
        $(this).attr({src:data_src+Math.floor(Math.random()*9999+1)});
    });
});
// 表单验证通用
$.fn.validation=function(){
    var $self=$(this),
        self_validation=$(this).formValidation({
        locale:M['validation_locale'],
        framework:'bootstrap4'
    });
    // 表单所处弹窗隐藏时重置验证
    $(this).parents('.modal').on('hide.bs.modal',function() {
        $self.data('formValidation').resetForm();
    });
    function success(fun,afterajax_ok){
        self_validation.on('success.form.fv', function(e) {
            e.preventDefault();
            var ajax_ok=typeof afterajax_ok != "undefined" ?afterajax_ok:true;
            if(ajax_ok){
                formDataAjax(e,fun);
            }else{
                $self.data('formValidation').resetForm();
                if (typeof fun==="function") window.form_data_ajax=fun(e,$self);
                setTimeout(function(){
                    if(typeof form_data_ajax =='undefined') $self.data('formValidation').defaultSubmit();
                },100)
            }
        })
    }
    function formDataAjax(e,fun){
        window.form_data_ajax=false;
        var $form    = $(e.target);
        if(M['is_lteie9']){
            var formData = $form.serializeArray(e.target),
                contentType='application/x-www-form-urlencoded',
                processData=true;
        }else{
            var formData = new FormData(e.target),
                params   = $form.serializeArray(),
                contentType=false,
                processData=false;
            // $.each(params, function(i, val) {
            //     formData.append(val.name, val.value);
            // });
        }
        $.ajax({
            url: $form.attr('action'),
            data: formData,
            cache: false,
            contentType: contentType,
            processData: processData,
            type: $form.attr('method')||'POST',
            dataType:'json',
            success: function(result) {
                $form.data('formValidation').resetForm();
                if (typeof fun==="function") return fun(result,$form);
            }
        });
    }
    // 表单提交前端处理
    success(function(e,form){
        // 多选值组合
        var checkbox_val={};
        form.find('input[type="checkbox"][name]').each(function(index, el) {
            var name=$(this).attr('name'),
                val=$(this).val();
            if(typeof checkbox_val[name] =='undefined') checkbox_val[name]='';
            if($(this).prop('checked')) checkbox_val[name]+=checkbox_val[name]!=''?('#@met@#'+val):val;
        });
        $.each(checkbox_val, function(index, val) {
            if(!form.find('[name="'+index+'"][type="hidden"]').length) form.append('<input type="hidden" name="'+index+'"/>');
            var length=form.find('[name="'+index+'"][type="hidden"]').length-1;
            form.find('[name="'+index+'"][type="hidden"]').eq(length).val(val);
        });
    },false);
    return {success:success,formDataAjax:formDataAjax};
}
// formValidation多语言选择
M['validation_locale']='';
if("undefined" != typeof M){
    M['validation_locale']=M['synchronous']+'_';
    switch(M['synchronous']){
        case 'sq':M['validation_locale']+='AL';break;
        case 'ar':M['validation_locale']+='MA';break;
        // case 'az':M['validation_locale']+='az';break;
        // case 'ga':M['validation_locale']+='ie';break;
        // case 'et':M['validation_locale']+='ee';break;
        case 'be':M['validation_locale']+='BE';break;
        case 'bg':M['validation_locale']+='BG';break;
        case 'pl':M['validation_locale']+='PL';break;
        case 'fa':M['validation_locale']+='IR';break;
        // case 'af':M['validation_locale']+='za';break;
        case 'da':M['validation_locale']+='DK';break;
        case 'de':M['validation_locale']+='DE';break;
        case 'ru':M['validation_locale']+='RU';break;
        case 'fr':M['validation_locale']+='FR';break;
        // case 'tl':M['validation_locale']+='ph';break;
        case 'fi':M['validation_locale']+='FI';break;
        // case 'ht':M['validation_locale']+='ht';break;
        // case 'ko':M['validation_locale']+='kr';break;
        case 'nl':M['validation_locale']+='NL';break;
        // case 'gl':M['validation_locale']+='es';break;
        case 'ca':M['validation_locale']+='ES';break;
        case 'cs':M['validation_locale']+='CZ';break;
        // case 'hr':M['validation_locale']+='hr';break;
        // case 'la':M['validation_locale']+='IT';break;
        // case 'lv':M['validation_locale']+='lv';break;
        // case 'lt':M['validation_locale']+='lt';break;
        case 'ro':M['validation_locale']+='RO';break;
        // case 'mt':M['validation_locale']+='mt';break;
        // case 'ms':M['validation_locale']+='ID';break;
        // case 'mk':M['validation_locale']+='mk';break;
        case 'no':M['validation_locale']+='NO';break;
        case 'pt':M['validation_locale']+='PT';break;
        case 'ja':M['validation_locale']+='JP';break;
        case 'sv':M['validation_locale']+='SE';break;
        case 'sr':M['validation_locale']+='RS';break;
        case 'sk':M['validation_locale']+='SK';break;
        // case 'sl':M['validation_locale']+='si';break;
        // case 'sw':M['validation_locale']+='tz';break;
        case 'th':M['validation_locale']+='TH';break;
        // case 'cy':M['validation_locale']+='wls';break;
        // case 'uk':M['validation_locale']+='ua';break;
        // case 'iw':M['validation_locale']+='';break;
        case 'el':M['validation_locale']+='GR';break;
        case 'eu':M['validation_locale']+='ES';break;
        case 'es':M['validation_locale']+='ES';break;
        case 'hu':M['validation_locale']+='HU';break;
        case 'it':M['validation_locale']+='IT';break;
        // case 'yi':M['validation_locale']+='de';break;
        // case 'ur':M['validation_locale']+='pk';break;
        case 'id':M['validation_locale']+='ID';break;
        case 'en':M['validation_locale']+='US';break;
        case 'vi':M['validation_locale']+='VN';break;
        case 'zh':M['validation_locale']='zh_TW';break;
        case 'cn':M['validation_locale']='zh_CN';break;
    }
}else{
    M['validation_locale']='zh_CN';
}
// 表单验证初始化
$('form').addClass('met-form-validation');
if(typeof validate =='undefined'){
    window.validate=[];
    $(".met-form-validation").each(function(index, el) {
        validate[index]=$(this).validation();
    });
}
/*
招聘模块
 */
$(function(){
	// 招聘模块表单
	$(".met-job-cvbtn").click(function(){
		$("#met-job-cv form").find('input[name="jobid"]').val($(this).data('jobid'));
	});
});
/*! Tablesaw - v2.0.2 - 2015-10-28
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2015 Filament Group; Licensed  */
/*
* tablesaw: A set of plugins for responsive tables
* Stack and Column Toggle tables
* Copyright (c) 2013 Filament Group, Inc.
* MIT License
*/
if(typeof Tablesaw==="undefined"){Tablesaw={i18n:{modes:['Stack','Swipe','Toggle'],columns:'Col<span class=\"a11y-sm\">umn</span>s',columnBtnText:'Columns',columnsDialogError:'No eligible columns.',sort:'Sort'}, mustard:'querySelector'in document&&(!window.blackberry||window.WebKitPoint)&&!window.operamini};}if(!Tablesaw.config){Tablesaw.config={};}if(Tablesaw.mustard){jQuery(document.documentElement).addClass('tablesaw-enhanced');};(function($){var pluginName="table",classes={toolbar:"tablesaw-bar"},events={create:"tablesawcreate",destroy:"tablesawdestroy",refresh:"tablesawrefresh"},defaultMode="stack",initSelector="table[data-tablesaw-mode],table[data-tablesaw-sortable]";var Table=function(element){if(!element){throw new Error("Tablesaw requires an element.");}this.table=element;this.$table=$(element);this.mode=this.$table.attr("data-tablesaw-mode")||defaultMode;this.init();};Table.prototype.init=function(){ if(!this.$table.attr("id")){this.$table.attr("id",pluginName+"-"+Math.round(Math.random()*10000));}this.createToolbar();var colstart=this._initCells();this.$table.trigger(events.create,[this,colstart]);};Table.prototype._initCells=function(){var colstart,thrs=this.table.querySelectorAll("thead tr"),self=this;$(thrs).each(function(){var coltally=0;$(this).children().each(function(){var span=parseInt(this.getAttribute("colspan"),10),sel=":nth-child("+(coltally+1)+")";colstart=coltally+1;if(span){for(var k=0;k<span-1;k++){coltally++;sel+=", :nth-child("+(coltally+1)+")";}} this.cells=self.$table.find("tr").not(thrs[0]).not(this).children().filter(sel);coltally++;});});return colstart;};Table.prototype.refresh=function(){this._initCells();this.$table.trigger(events.refresh);};Table.prototype.createToolbar=function(){var $toolbar=this.$table.prev().filter('.'+classes.toolbar);if(!$toolbar.length){$toolbar=$('<div>').addClass(classes.toolbar).insertBefore(this.$table);}this.$toolbar=$toolbar;if(this.mode){this.$toolbar.addClass('mode-'+this.mode);}};Table.prototype.destroy=function(){this.$table.prev().filter('.'+classes.toolbar).each(function(){this.className=this.className.replace(/\bmode\-\w*\b/gi,'');});var tableId=this.$table.attr('id');$(document).unbind("."+tableId);$(window).unbind("."+tableId); this.$table.trigger(events.destroy,[this]);this.$table.removeAttr('data-tablesaw-mode');this.$table.removeData(pluginName);};$.fn[pluginName]=function(){return this.each(function(){var $t=$(this);if($t.data(pluginName)){return;}var table=new Table(this);$t.data(pluginName,table);});};$(document).on("enhance.tablesaw",function(e){ if(Tablesaw.mustard){$(e.target).find(initSelector)[pluginName]();}});}(jQuery));;(function(win,$,undefined){var classes={stackTable:'tablesaw-stack',cellLabels:'tablesaw-cell-label',cellContentLabels:'tablesaw-cell-content'};var data={obj:'tablesaw-stack'};var attrs={labelless:'data-tablesaw-no-labels',hideempty:'data-tablesaw-hide-empty'};var Stack=function(element){this.$table=$(element);this.labelless=this.$table.is('['+attrs.labelless+']');this.hideempty=this.$table.is('['+attrs.hideempty+']');if(!this.labelless){ this.allHeaders=this.$table.find("th");}this.$table.data(data.obj,this);};Stack.prototype.init=function(colstart){this.$table.addClass(classes.stackTable);if(this.labelless){return;} var reverseHeaders=$(this.allHeaders);var hideempty=this.hideempty; reverseHeaders.each(function(){var $t=$(this),$cells=$(this.cells).filter(function(){return!$(this).parent().is("["+attrs.labelless+"]")&&(!hideempty||!$(this).is(":empty"));}),hierarchyClass=$cells.not(this).filter("thead th").length&&" tablesaw-cell-label-top", $sortableButton=$t.find(".tablesaw-sortable-btn"),html=$sortableButton.length?$sortableButton.html():$t.html();if(html!==""){if(hierarchyClass){var iteration=parseInt($(this).attr("colspan"),10),filter="";if(iteration){filter="td:nth-child("+iteration+"n + "+(colstart)+")";}$cells.filter(filter).prepend("<b class='"+classes.cellLabels+hierarchyClass+"'>"+html+"</b>");}else{$cells.wrapInner("<span class='"+classes.cellContentLabels+"'></span>");$cells.prepend("<b class='"+classes.cellLabels+"'>"+html+"</b>");}}});};Stack.prototype.destroy=function(){this.$table.removeClass(classes.stackTable);this.$table.find('.'+classes.cellLabels).remove();this.$table.find('.'+classes.cellContentLabels).each(function(){$(this).replaceWith(this.childNodes);});}; $(document).on("tablesawcreate",function(e,Tablesaw,colstart){if(Tablesaw.mode==='stack'){var table=new Stack(Tablesaw.table);table.init(colstart);}});$(document).on("tablesawdestroy",function(e,Tablesaw){if(Tablesaw.mode==='stack'){$(Tablesaw.table).data(data.obj).destroy();}});}(this,jQuery));;(function($){var pluginName="tablesawbtn",methods={_create:function(){return $(this).each(function(){$(this).trigger("beforecreate."+pluginName)[pluginName]("_init").trigger("create."+pluginName);});},_init:function(){var oEl=$(this),sel=this.getElementsByTagName("select")[0];if(sel){$(this).addClass("btn-select")[pluginName]("_select",sel);}return oEl;},_select:function(sel){var update=function(oEl,sel){var opts=$(sel).find("option"),label,el,children;opts.each(function(){var opt=this;if(opt.selected){label=document.createTextNode(opt.text);}});children=oEl.childNodes;if(opts.length>0){for(var i=0,l=children.length;i<l;i++){el=children[i];if(el&&el.nodeType===3){oEl.replaceChild(label,el);}}}};update(this,sel);$(this).bind("change refresh",function(){update(this,sel);});}};$.fn[pluginName]=function(arrg,a,b,c){return this.each(function(){ if(arrg&&typeof(arrg)==="string"){return $.fn[pluginName].prototype[arrg].call(this,a,b,c);} if($(this).data(pluginName+"active")){return $(this);} $(this).data(pluginName+"active",true);$.fn[pluginName].prototype._create.call(this);});}; $.extend($.fn[pluginName].prototype,methods);}(jQuery));;(function(win,$,undefined){var ColumnToggle=function(element){this.$table=$(element);this.classes={columnToggleTable:'tablesaw-columntoggle',columnBtnContain:'tablesaw-columntoggle-btnwrap tablesaw-advance',columnBtn:'tablesaw-columntoggle-btn tablesaw-nav-btn down',popup:'tablesaw-columntoggle-popup',priorityPrefix:'tablesaw-priority-', toolbar:'tablesaw-bar'};this.headers=this.$table.find('tr:first > th');this.$table.data('tablesaw-coltoggle',this);};ColumnToggle.prototype.init=function(){var tableId,id,$menuButton,$popup,$menu,$btnContain,self=this;this.$table.addClass(this.classes.columnToggleTable);tableId=this.$table.attr("id");id=tableId+"-popup";$btnContain=$("<div class='"+this.classes.columnBtnContain+"'></div>");$menuButton=$("<a href='#"+id+"' class='btn btn-micro "+this.classes.columnBtn+"' data-popup-link>"+"<span>"+Tablesaw.i18n.columnBtnText+"</span></a>");$popup=$("<div class='dialog-table-coltoggle "+this.classes.popup+"' id='"+id+"'></div>");$menu=$("<div class='btn-group'></div>");var hasNonPersistentHeaders=false;$(this.headers).not("td").each(function(){var $this=$(this),priority=$this.attr("data-tablesaw-priority"),$cells=self.$getCells(this);if(priority&&priority!=="persist"){$cells.addClass(self.classes.priorityPrefix+priority);$("<label><input type='checkbox' checked>"+$this.text()+"</label>").appendTo($menu).children(0).data("tablesaw-header",this);hasNonPersistentHeaders=true;}});if(!hasNonPersistentHeaders){$menu.append('<label>'+Tablesaw.i18n.columnsDialogError+'</label>');}$menu.appendTo($popup);$menu.find('input[type="checkbox"]').on("change",function(e){var checked=e.target.checked;self.$getCellsFromCheckbox(e.target).toggleClass("tablesaw-cell-hidden",!checked).toggleClass("tablesaw-cell-visible",checked);self.$table.trigger('tablesawcolumns');});$menuButton.appendTo($btnContain);$btnContain.appendTo(this.$table.prev().filter('.'+this.classes.toolbar));var closeTimeout;function openPopup(){$btnContain.addClass('visible');$menuButton.removeClass('down').addClass('up');$(document).unbind('click.'+tableId,closePopup);window.clearTimeout(closeTimeout);closeTimeout=window.setTimeout(function(){$(document).one('click.'+tableId,closePopup);},15);}function closePopup(event){if(event&&$(event.target).closest("."+self.classes.popup).length){return;}$(document).unbind('click.'+tableId);$menuButton.removeClass('up').addClass('down');$btnContain.removeClass('visible');}$menuButton.on("click.tablesaw",function(event){event.preventDefault();if(!$btnContain.is(".visible")){openPopup();}else{closePopup();}});$popup.appendTo($btnContain);this.$menu=$menu;$(window).on("resize."+tableId,function(){self.refreshToggle();});this.refreshToggle();};ColumnToggle.prototype.$getCells=function(th){return $(th).add(th.cells);};ColumnToggle.prototype.$getCellsFromCheckbox=function(checkbox){var th=$(checkbox).data("tablesaw-header");return this.$getCells(th);};ColumnToggle.prototype.refreshToggle=function(){var self=this;this.$menu.find("input").each(function(){this.checked=self.$getCellsFromCheckbox(this).eq(0).css("display")==="table-cell";});};ColumnToggle.prototype.refreshPriority=function(){var self=this;$(this.headers).not("td").each(function(){var $this=$(this),priority=$this.attr("data-tablesaw-priority"),$cells=$this.add(this.cells);if(priority&&priority!=="persist"){$cells.addClass(self.classes.priorityPrefix+priority);}});};ColumnToggle.prototype.destroy=function(){this.$table.removeClass(this.classes.columnToggleTable);this.$table.find('th, td').each(function(){var $cell=$(this);$cell.removeClass('tablesaw-cell-hidden').removeClass('tablesaw-cell-visible');this.className=this.className.replace(/\bui\-table\-priority\-\d\b/g,'');});}; $(document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.mode==='columntoggle'){var table=new ColumnToggle(Tablesaw.table);table.init();}});$(document).on("tablesawdestroy",function(e,Tablesaw){if(Tablesaw.mode==='columntoggle'){$(Tablesaw.table).data('tablesaw-coltoggle').destroy();}});}(this,jQuery));;(function(win,$,undefined){$.extend(Tablesaw.config,{swipe:{horizontalThreshold:15,verticalThreshold:30}});function isIE8(){var div=document.createElement('div'),all=div.getElementsByTagName('i');div.innerHTML='<!--[if lte IE 8]><i></i><![endif]-->';return!!all.length;}function createSwipeTable($table){var $btns=$("<div class='tablesaw-advance'></div>"),$prevBtn=$("<a href='#' class='tablesaw-nav-btn btn btn-micro left' title='Previous Column'></a>").appendTo($btns),$nextBtn=$("<a href='#' class='tablesaw-nav-btn btn btn-micro right' title='Next Column'></a>").appendTo($btns),hideBtn='disabled',persistWidths='tablesaw-fix-persist',$headerCells=$table.find("thead th"),$headerCellsNoPersist=$headerCells.not('[data-tablesaw-priority="persist"]'),headerWidths=[],$head=$(document.head||'head'),tableId=$table.attr('id'), supportsNthChild=!isIE8();if(!$headerCells.length){throw new Error("tablesaw swipe: no header cells found. Are you using <th> inside of <thead>?");} $table.css('width','auto');$headerCells.each(function(){headerWidths.push($(this).outerWidth());});$table.css('width','');$btns.appendTo($table.prev().filter('.tablesaw-bar'));$table.addClass("tablesaw-swipe");if(!tableId){tableId='tableswipe-'+Math.round(Math.random()*10000);$table.attr('id',tableId);}function $getCells(headerCell){return $(headerCell.cells).add(headerCell);}function showColumn(headerCell){$getCells(headerCell).removeClass('tablesaw-cell-hidden');}function hideColumn(headerCell){$getCells(headerCell).addClass('tablesaw-cell-hidden');}function persistColumn(headerCell){$getCells(headerCell).addClass('tablesaw-cell-persist');}function isPersistent(headerCell){return $(headerCell).is('[data-tablesaw-priority="persist"]');}function unmaintainWidths(){$table.removeClass(persistWidths);$('#'+tableId+'-persist').remove();}function maintainWidths(){var prefix='#'+tableId+'.tablesaw-swipe ',styles=[],tableWidth=$table.width(),hash=[],newHash;$headerCells.each(function(index){var width;if(isPersistent(this)){width=$(this).outerWidth();if(width<tableWidth*0.75){hash.push(index+'-'+width);styles.push(prefix+' .tablesaw-cell-persist:nth-child('+(index+1)+') { width: '+width+'px; }');}}});newHash=hash.join('_');$table.addClass(persistWidths);var $style=$('#'+tableId+'-persist'); if(!$style.length||$style.data('hash')!==newHash){ $style.remove();if(styles.length){$('<style>'+styles.join("\n")+'</style>').attr('id',tableId+'-persist').data('hash',newHash).appendTo($head);}}}function getNext(){var next=[],checkFound;$headerCellsNoPersist.each(function(i){var $t=$(this),isHidden=$t.css("display")==="none"||$t.is(".tablesaw-cell-hidden");if(!isHidden&&!checkFound){checkFound=true;next[0]=i;}else if(isHidden&&checkFound){next[1]=i;return false;}});return next;}function getPrev(){var next=getNext();return[next[1]-1,next[0]-1];}function nextpair(fwd){return fwd?getNext():getPrev();}function canAdvance(pair){return pair[1]>-1&&pair[1]<$headerCellsNoPersist.length;}function matchesMedia(){var matchMedia=$table.attr("data-tablesaw-swipe-media");return!matchMedia||("matchMedia"in win)&&win.matchMedia(matchMedia).matches;}function fakeBreakpoints(){if(!matchesMedia()){return;}var extraPaddingPixels=20,containerWidth=$table.parent().width(),persist=[],sum=0,sums=[],visibleNonPersistantCount=$headerCells.length;$headerCells.each(function(index){var $t=$(this),isPersist=$t.is('[data-tablesaw-priority="persist"]');persist.push(isPersist);sum+=headerWidths[index]+(isPersist?0:extraPaddingPixels);sums.push(sum); if(isPersist||sum>containerWidth){visibleNonPersistantCount--;}});var needsNonPersistentColumn=visibleNonPersistantCount===0;$headerCells.each(function(index){if(persist[index]){ persistColumn(this);return;}if(sums[index]<=containerWidth||needsNonPersistentColumn){needsNonPersistentColumn=false;showColumn(this);}else{hideColumn(this);}});if(supportsNthChild){unmaintainWidths();}$table.trigger('tablesawcolumns');}function advance(fwd){var pair=nextpair(fwd);if(canAdvance(pair)){if(isNaN(pair[0])){if(fwd){pair[0]=0;}else{pair[0]=$headerCellsNoPersist.length-1;}}if(supportsNthChild){maintainWidths();}hideColumn($headerCellsNoPersist.get(pair[0]));showColumn($headerCellsNoPersist.get(pair[1]));$table.trigger('tablesawcolumns');}}$prevBtn.add($nextBtn).click(function(e){advance(!!$(e.target).closest($nextBtn).length);e.preventDefault();});function getCoord(event,key){return(event.touches||event.originalEvent.touches)[0][key];}$table.bind("touchstart.swipetoggle",function(e){var originX=getCoord(e,'pageX'),originY=getCoord(e,'pageY'),x,y;$(win).off("resize",fakeBreakpoints);$(this).bind("touchmove",function(e){x=getCoord(e,'pageX');y=getCoord(e,'pageY');var cfg=Tablesaw.config.swipe;if(Math.abs(x-originX)>cfg.horizontalThreshold&&Math.abs(y-originY)<cfg.verticalThreshold){e.preventDefault();}}).bind("touchend.swipetoggle",function(){var cfg=Tablesaw.config.swipe;if(Math.abs(y-originY)<cfg.verticalThreshold){if(x-originX<-1*cfg.horizontalThreshold){advance(true);}if(x-originX>cfg.horizontalThreshold){advance(false);}}window.setTimeout(function(){$(win).on("resize",fakeBreakpoints);},300);$(this).unbind("touchmove touchend");});}).bind("tablesawcolumns.swipetoggle",function(){$prevBtn[canAdvance(getPrev())?"removeClass":"addClass"](hideBtn);$nextBtn[canAdvance(getNext())?"removeClass":"addClass"](hideBtn);}).bind("tablesawnext.swipetoggle",function(){advance(true);}).bind("tablesawprev.swipetoggle",function(){advance(false);}).bind("tablesawdestroy.swipetoggle",function(){var $t=$(this);$t.removeClass('tablesaw-swipe');$t.prev().filter('.tablesaw-bar').find('.tablesaw-advance').remove();$(win).off("resize",fakeBreakpoints);$t.unbind(".swipetoggle");});fakeBreakpoints();$(win).on("resize",fakeBreakpoints);} $(document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.mode==='swipe'){createSwipeTable(Tablesaw.$table);}});}(this,jQuery));;(function($){function getSortValue(cell){return $.map(cell.childNodes,function(el){var $el=$(el);if($el.is('input, select')){return $el.val();}else if($el.hasClass('tablesaw-cell-label')){return;}return $.trim($el.text());}).join('');}var pluginName="tablesaw-sortable",initSelector="table[data-"+pluginName+"]",sortableSwitchSelector="[data-"+pluginName+"-switch]",attrs={defaultCol:"data-tablesaw-sortable-default-col",numericCol:"data-tablesaw-sortable-numeric"},classes={head:pluginName+"-head",ascend:pluginName+"-ascending",descend:pluginName+"-descending",switcher:pluginName+"-switch",tableToolbar:'tablesaw-toolbar',sortButton:pluginName+"-btn"},methods={_create:function(o){return $(this).each(function(){var init=$(this).data("init"+pluginName);if(init){return false;}$(this).data("init"+pluginName,true).trigger("beforecreate."+pluginName)[pluginName]("_init",o).trigger("create."+pluginName);});},_init:function(){var el=$(this),heads,$switcher;var addClassToTable=function(){el.addClass(pluginName);},addClassToHeads=function(h){$.each(h,function(i,v){$(v).addClass(classes.head);});},makeHeadsActionable=function(h,fn){$.each(h,function(i,v){var b=$("<button class='"+classes.sortButton+"'/>");b.bind("click",{col:v},fn);$(v).wrapInner(b);});},clearOthers=function(sibs){$.each(sibs,function(i,v){var col=$(v);col.removeAttr(attrs.defaultCol);col.removeClass(classes.ascend);col.removeClass(classes.descend);});},headsOnAction=function(e){if($(e.target).is('a[href]')){return;}e.stopPropagation();var head=$(this).parent(),v=e.data.col,newSortValue=heads.index(head);clearOthers(head.siblings());if(head.hasClass(classes.descend)){el[pluginName]("sortBy",v,true);newSortValue+='_asc';}else{el[pluginName]("sortBy",v);newSortValue+='_desc';}if($switcher){$switcher.find('select').val(newSortValue).trigger('refresh');}e.preventDefault();},handleDefault=function(heads){$.each(heads,function(idx,el){var $el=$(el);if($el.is("["+attrs.defaultCol+"]")){if(!$el.hasClass(classes.descend)){$el.addClass(classes.ascend);}}});},addSwitcher=function(heads){$switcher=$('<div>').addClass(classes.switcher).addClass(classes.tableToolbar).html(function(){var html=['<label>'+Tablesaw.i18n.sort+':'];html.push('<span class="btn btn-small">&#160;<select>');heads.each(function(j){var $t=$(this);var isDefaultCol=$t.is("["+attrs.defaultCol+"]");var isDescending=$t.hasClass(classes.descend);var hasNumericAttribute=$t.is('[data-sortable-numeric]');var numericCount=0;var numericCountMax=5;$(this.cells).slice(0,numericCountMax).each(function(){if(!isNaN(parseInt(getSortValue(this),10))){numericCount++;}});var isNumeric=numericCount===numericCountMax;if(!hasNumericAttribute){$t.attr("data-sortable-numeric",isNumeric?"":"false");}html.push('<option'+(isDefaultCol&&!isDescending?' selected':'')+' value="'+j+'_asc">'+$t.text()+' '+(isNumeric?'&#x2191;':'(A-Z)')+'</option>');html.push('<option'+(isDefaultCol&&isDescending?' selected':'')+' value="'+j+'_desc">'+$t.text()+' '+(isNumeric?'&#x2193;':'(Z-A)')+'</option>');});html.push('</select></span></label>');return html.join('');});var $toolbar=el.prev().filter('.tablesaw-bar'),$firstChild=$toolbar.children().eq(0);if($firstChild.length){$switcher.insertBefore($firstChild);}else{$switcher.appendTo($toolbar);}$switcher.find('.btn').tablesawbtn();$switcher.find('select').on('change',function(){var val=$(this).val().split('_'),head=heads.eq(val[0]);clearOthers(head.siblings());el[pluginName]('sortBy',head.get(0),val[1]==='asc');});};addClassToTable();heads=el.find("thead th[data-"+pluginName+"-col]");addClassToHeads(heads);makeHeadsActionable(heads,headsOnAction);handleDefault(heads);if(el.is(sortableSwitchSelector)){addSwitcher(heads,el.find('tbody tr:nth-child(-n+3)'));}},getColumnNumber:function(col){return $(col).prevAll().length;},getTableRows:function(){return $(this).find("tbody tr");},sortRows:function(rows,colNum,ascending,col){var cells,fn,sorted;var getCells=function(rows){var cells=[];$.each(rows,function(i,r){var element=$(r).children().get(colNum);cells.push({element:element,cell:getSortValue(element),rowNum:i});});return cells;},getSortFxn=function(ascending,forceNumeric){var fn,regex=/[^\-\+\d\.]/g;if(ascending){fn=function(a,b){if(forceNumeric){return parseFloat(a.cell.replace(regex,''))-parseFloat(b.cell.replace(regex,''));}else{return a.cell.toLowerCase()>b.cell.toLowerCase()?1:-1;}};}else{fn=function(a,b){if(forceNumeric){return parseFloat(b.cell.replace(regex,''))-parseFloat(a.cell.replace(regex,''));}else{return a.cell.toLowerCase()<b.cell.toLowerCase()?1:-1;}};}return fn;},applyToRows=function(sorted,rows){var newRows=[],i,l,cur;for(i=0,l=sorted.length;i<l;i++){cur=sorted[i].rowNum;newRows.push(rows[cur]);}return newRows;};cells=getCells(rows);var customFn=$(col).data('tablesaw-sort');fn=(customFn&&typeof customFn==="function"?customFn(ascending):false)||getSortFxn(ascending,$(col).is('[data-sortable-numeric]')&&!$(col).is('[data-sortable-numeric="false"]'));sorted=cells.sort(fn);rows=applyToRows(sorted,rows);return rows;},replaceTableRows:function(rows){var el=$(this),body=el.find("tbody");body.html(rows);},makeColDefault:function(col,a){var c=$(col);c.attr(attrs.defaultCol,"true");if(a){c.removeClass(classes.descend);c.addClass(classes.ascend);}else{c.removeClass(classes.ascend);c.addClass(classes.descend);}},sortBy:function(col,ascending){var el=$(this),colNum,rows;colNum=el[pluginName]("getColumnNumber",col);rows=el[pluginName]("getTableRows");rows=el[pluginName]("sortRows",rows,colNum,ascending,col);el[pluginName]("replaceTableRows",rows);el[pluginName]("makeColDefault",col,ascending);}};$.fn[pluginName]=function(arrg){var args=Array.prototype.slice.call(arguments,1),returnVal; if(arrg&&typeof(arrg)==="string"){returnVal=$.fn[pluginName].prototype[arrg].apply(this[0],args);return(typeof returnVal!=="undefined")?returnVal:$(this);} if(!$(this).data(pluginName+"data")){$(this).data(pluginName+"active",true);$.fn[pluginName].prototype._create.call(this,arrg);}return $(this);}; $.extend($.fn[pluginName].prototype,methods);$(document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.$table.is(initSelector)){Tablesaw.$table[pluginName]();}});}(jQuery));;(function(win,$,undefined){var MM={attr:{init:'data-tablesaw-minimap'}};function createMiniMap($table){var $btns=$('<div class="tablesaw-advance minimap">'),$dotNav=$('<ul class="tablesaw-advance-dots">').appendTo($btns),hideDot='tablesaw-advance-dots-hide',$headerCells=$table.find('thead th'); $headerCells.each(function(){$dotNav.append('<li><i></i></li>');});$btns.appendTo($table.prev().filter('.tablesaw-bar'));function showMinimap($table){var mq=$table.attr(MM.attr.init);return!mq||win.matchMedia&&win.matchMedia(mq).matches;}function showHideNav(){if(!showMinimap($table)){$btns.hide();return;}$btns.show(); var dots=$dotNav.find("li").removeClass(hideDot);$table.find("thead th").each(function(i){if($(this).css("display")==="none"){dots.eq(i).addClass(hideDot);}});}showHideNav();$(win).on("resize",showHideNav);$table.bind("tablesawcolumns.minimap",function(){showHideNav();}).bind("tablesawdestroy.minimap",function(){var $t=$(this);$t.prev().filter('.tablesaw-bar').find('.tablesaw-advance').remove();$(win).off("resize",showHideNav);$t.unbind(".minimap");});} $(document).on("tablesawcreate",function(e,Tablesaw){if((Tablesaw.mode==='swipe'||Tablesaw.mode==='columntoggle')&&Tablesaw.$table.is('[ '+MM.attr.init+']')){createMiniMap(Tablesaw.$table);}});}(this,jQuery));;(function(win,$){var S={selectors:{init:'table[data-tablesaw-mode-switch]'},attributes:{excludeMode:'data-tablesaw-mode-exclude'},classes:{main:'tablesaw-modeswitch',toolbar:'tablesaw-toolbar'},modes:['stack','swipe','columntoggle'],init:function(table){var $table=$(table),ignoreMode=$table.attr(S.attributes.excludeMode),$toolbar=$table.prev().filter('.tablesaw-bar'),modeVal='',$switcher=$('<div>').addClass(S.classes.main+' '+S.classes.toolbar).html(function(){var html=['<label>'+Tablesaw.i18n.columns+':'],dataMode=$table.attr('data-tablesaw-mode'),isSelected;html.push('<span class="btn btn-small">&#160;<select>');for(var j=0,k=S.modes.length;j<k;j++){if(ignoreMode&&ignoreMode.toLowerCase()===S.modes[j]){continue;}isSelected=dataMode===S.modes[j];if(isSelected){modeVal=S.modes[j];}html.push('<option'+(isSelected?' selected':'')+' value="'+S.modes[j]+'">'+Tablesaw.i18n.modes[j]+'</option>');}html.push('</select></span></label>');return html.join('');});var $otherToolbarItems=$toolbar.find('.tablesaw-advance').eq(0);if($otherToolbarItems.length){$switcher.insertBefore($otherToolbarItems);}else{$switcher.appendTo($toolbar);}$switcher.find('.btn').tablesawbtn();$switcher.find('select').bind('change',S.onModeChange);},onModeChange:function(){var $t=$(this),$switcher=$t.closest('.'+S.classes.main),$table=$t.closest('.tablesaw-bar').nextUntil($table).eq(0),val=$t.val();$switcher.remove();$table.data('table').destroy();$table.attr('data-tablesaw-mode',val);$table.table();}};$(win.document).on("tablesawcreate",function(e,Tablesaw){if(Tablesaw.$table.is(S.selectors.init)){S.init(Tablesaw.table);}});})(this,jQuery);
/*! Tablesaw - v2.0.2 - 2015-10-28
* https://github.com/filamentgroup/tablesaw
* Copyright (c) 2015 Filament Group; Licensed  */
;(function($){ $(function(){$(document).trigger("enhance.tablesaw");});})(jQuery);
/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.PhotoSwipe = factory();
    }
})(this, function () {

    'use strict';
    var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 *
 * You're free to modify anything here as long as functionality is kept.
 *
 */
var framework = {
    features: null,
    bind: function(target, type, listener, unbind) {
        var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
        type = type.split(' ');
        for(var i = 0; i < type.length; i++) {
            if(type[i]) {
                target[methodName]( type[i], listener, false);
            }
        }
    },
    isArray: function(obj) {
        return (obj instanceof Array);
    },
    createEl: function(classes, tag) {
        var el = document.createElement(tag || 'div');
        if(classes) {
            el.className = classes;
        }
        return el;
    },
    getScrollY: function() {
        var yOffset = window.pageYOffset;
        return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
    },
    unbind: function(target, type, listener) {
        framework.bind(target,type,listener,true);
    },
    removeClass: function(el, className) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    },
    addClass: function(el, className) {
        if( !framework.hasClass(el,className) ) {
            el.className += (el.className ? ' ' : '') + className;
        }
    },
    hasClass: function(el, className) {
        return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
    },
    getChildByClass: function(parentEl, childClassName) {
        var node = parentEl.firstChild;
        while(node) {
            if( framework.hasClass(node, childClassName) ) {
                return node;
            }
            node = node.nextSibling;
        }
    },
    arraySearch: function(array, value, key) {
        var i = array.length;
        while(i--) {
            if(array[i][key] === value) {
                return i;
            }
        }
        return -1;
    },
    extend: function(o1, o2, preventOverwrite) {
        for (var prop in o2) {
            if (o2.hasOwnProperty(prop)) {
                if(preventOverwrite && o1.hasOwnProperty(prop)) {
                    continue;
                }
                o1[prop] = o2[prop];
            }
        }
    },
    easing: {
        sine: {
            out: function(k) {
                return Math.sin(k * (Math.PI / 2));
            },
            inOut: function(k) {
                return - (Math.cos(Math.PI * k) - 1) / 2;
            }
        },
        cubic: {
            out: function(k) {
                return --k * k * k + 1;
            }
        }
        /*
            elastic: {
                out: function ( k ) {

                    var s, a = 0.1, p = 0.4;
                    if ( k === 0 ) return 0;
                    if ( k === 1 ) return 1;
                    if ( !a || a < 1 ) { a = 1; s = p / 4; }
                    else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                    return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

                },
            },
            back: {
                out: function ( k ) {
                    var s = 1.70158;
                    return --k * k * ( ( s + 1 ) * k + s ) + 1;
                }
            }
        */
    },

    /**
     *
     * @return {object}
     *
     * {
     *  raf : request animation frame function
     *  caf : cancel animation frame function
     *  transfrom : transform property key (with vendor), or null if not supported
     *  oldIE : IE8 or below
     * }
     *
     */
    detectFeatures: function() {
        if(framework.features) {
            return framework.features;
        }
        var helperEl = framework.createEl(),
            helperStyle = helperEl.style,
            vendor = '',
            features = {};

        // IE8 and below
        features.oldIE = document.all && !document.addEventListener;

        features.touch = 'ontouchstart' in window;

        if(window.requestAnimationFrame) {
            features.raf = window.requestAnimationFrame;
            features.caf = window.cancelAnimationFrame;
        }

        features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

        // fix false-positive detection of old Android in new IE
        // (IE11 ua string contains "Android 4.0")

        if(!features.pointerEvent) {

            var ua = navigator.userAgent;

            // Detect if device is iPhone or iPod and if it's older than iOS 8
            // http://stackoverflow.com/a/14223920
            //
            // This detection is made because of buggy top/bottom toolbars
            // that don't trigger window.resize event.
            // For more info refer to _isFixedPosition variable in core.js

            if (/iP(hone|od)/.test(navigator.platform)) {
                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                if(v && v.length > 0) {
                    v = parseInt(v[1], 10);
                    if(v >= 1 && v < 8 ) {
                        features.isOldIOSPhone = true;
                    }
                }
            }

            // Detect old Android (before KitKat)
            // due to bugs related to position:fixed
            // http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript

            var match = ua.match(/Android\s([0-9\.]*)/);
            var androidversion =  match ? match[1] : 0;
            androidversion = parseFloat(androidversion);
            if(androidversion >= 1 ) {
                if(androidversion < 4.4) {
                    features.isOldAndroid = true; // for fixed position bug & performance
                }
                features.androidVersion = androidversion; // for touchend bug
            }
            features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

            // p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
        }

        var styleChecks = ['transform', 'perspective', 'animationName'],
            vendors = ['', 'webkit','Moz','ms','O'],
            styleCheckItem,
            styleName;

        for(var i = 0; i < 4; i++) {
            vendor = vendors[i];

            for(var a = 0; a < 3; a++) {
                styleCheckItem = styleChecks[a];

                // uppercase first letter of property name, if vendor is present
                styleName = vendor + (vendor ?
                                        styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) :
                                        styleCheckItem);

                if(!features[styleCheckItem] && styleName in helperStyle ) {
                    features[styleCheckItem] = styleName;
                }
            }

            if(vendor && !features.raf) {
                vendor = vendor.toLowerCase();
                features.raf = window[vendor+'RequestAnimationFrame'];
                if(features.raf) {
                    features.caf = window[vendor+'CancelAnimationFrame'] ||
                                    window[vendor+'CancelRequestAnimationFrame'];
                }
            }
        }

        if(!features.raf) {
            var lastTime = 0;
            features.raf = function(fn) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
            features.caf = function(id) { clearTimeout(id); };
        }

        // Detect SVG support
        features.svg = !!document.createElementNS &&
                        !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

        framework.features = features;

        return features;
    }
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

    framework.bind = function(target, type, listener, unbind) {

        type = type.split(' ');

        var methodName = (unbind ? 'detach' : 'attach') + 'Event',
            evName,
            _handleEv = function() {
                listener.handleEvent.call(listener);
            };

        for(var i = 0; i < type.length; i++) {
            evName = type[i];
            if(evName) {

                if(typeof listener === 'object' && listener.handleEvent) {
                    if(!unbind) {
                        listener['oldIE' + evName] = _handleEv;
                    } else {
                        if(!listener['oldIE' + evName]) {
                            return false;
                        }
                    }

                    target[methodName]( 'on' + evName, listener['oldIE' + evName]);
                } else {
                    target[methodName]( 'on' + evName, listener);
                }

            }
        }
    };

}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25,
    NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
    allowPanToNext:true,
    spacing: 0.05,
    bgOpacity: 1,
    mouseUsed: false,
    loop: false,
    pinchToClose: true,
    closeOnScroll: true,
    closeOnVerticalDrag: true,
    verticalDragRange: 0.75,
    hideAnimationDuration: 333,
    showAnimationDuration: 333,
    showHideOpacity: false,
    focus: true,
    escKey: true,
    arrowKeys: true,
    mainScrollEndFriction: 0.35,
    panEndFriction: 0.35,
    isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
        if(isMouseClick) {
            return 1;
        } else {
            return item.initialZoomLevel < 0.7 ? 1 : 1.33;
        }
    },
    maxSpreadZoom: 1.33,
    modal: true,

    // not fully implemented yet
    scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() {
        return {x:0,y:0};
    };

var _isOpen,
    _isDestroying,
    _closedByScroll,
    _currentItemIndex,
    _containerStyle,
    _containerShiftIndex,
    _currPanDist = _getEmptyPoint(),
    _startPanOffset = _getEmptyPoint(),
    _panOffset = _getEmptyPoint(),
    _upMoveEvents, // drag move, drag end & drag cancel events array
    _downEvents, // drag start events array
    _globalEventHandlers,
    _viewportSize = {},
    _currZoomLevel,
    _startZoomLevel,
    _translatePrefix,
    _translateSufix,
    _updateSizeInterval,
    _itemsNeedUpdate,
    _currPositionIndex = 0,
    _offset = {},
    _slideSize = _getEmptyPoint(), // size of slide area, including spacing
    _itemHolders,
    _prevItemIndex,
    _indexDiff = 0, // difference of indexes since last content update
    _dragStartEvent,
    _dragMoveEvent,
    _dragEndEvent,
    _dragCancelEvent,
    _transformKey,
    _pointerEventEnabled,
    _isFixedPosition = true,
    _likelyTouchDevice,
    _modules = [],
    _requestAF,
    _cancelAF,
    _initalClassName,
    _initalWindowScrollY,
    _oldIE,
    _currentWindowScrollY,
    _features,
    _windowVisibleSize = {},
    _renderMaxResolution = false,
    _orientationChangeTimeout,


    // Registers PhotoSWipe module (History, Controller ...)
    _registerModule = function(name, module) {
        framework.extend(self, module.publicMethods);
        _modules.push(name);
    },

    _getLoopedId = function(index) {
        var numSlides = _getNumItems();
        if(index > numSlides - 1) {
            return index - numSlides;
        } else  if(index < 0) {
            return numSlides + index;
        }
        return index;
    },

    // Micro bind/trigger
    _listeners = {},
    _listen = function(name, fn) {
        if(!_listeners[name]) {
            _listeners[name] = [];
        }
        return _listeners[name].push(fn);
    },
    _shout = function(name) {
        var listeners = _listeners[name];

        if(listeners) {
            var args = Array.prototype.slice.call(arguments);
            args.shift();

            for(var i = 0; i < listeners.length; i++) {
                listeners[i].apply(self, args);
            }
        }
    },

    _getCurrentTime = function() {
        return new Date().getTime();
    },
    _applyBgOpacity = function(opacity) {
        _bgOpacity = opacity;
        // opacity=opacity * _options.bgOpacity;
        if(opacity){
            $(self.bg).stop().animate({opacity:opacity}, 0);
        }else{
            setTimeout(function() {
                $(self.bg).stop().animate({opacity:opacity}, 100);
            },300)
        }
        // self.bg.style.opacity = opacity;
    },

    _applyZoomTransform = function(styleObj,x,y,zoom,item) {
        if(!_renderMaxResolution || (item && item !== self.currItem) ) {
            zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
        }

        styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
    },
    _applyCurrentZoomPan = function( allowRenderResolution ) {
        if(_currZoomElementStyle) {

            if(allowRenderResolution) {
                if(_currZoomLevel > self.currItem.fitRatio) {
                    if(!_renderMaxResolution) {
                        _setImageSize(self.currItem, false, true);
                        _renderMaxResolution = true;
                    }
                } else {
                    if(_renderMaxResolution) {
                        _setImageSize(self.currItem);
                        _renderMaxResolution = false;
                    }
                }
            }


            _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
        }
    },
    _applyZoomPanToItem = function(item) {
        if(item.container) {

            _applyZoomTransform(item.container.style,
                                item.initialPosition.x,
                                item.initialPosition.y,
                                item.initialZoomLevel,
                                item);
        }
    },
    _setTranslateX = function(x, elStyle) {
        elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
    },
    _moveMainScroll = function(x, dragging) {

        if(!_options.loop && dragging) {
            var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
                delta = Math.round(x - _mainScrollPos.x);

            if( (newSlideIndexOffset < 0 && delta > 0) ||
                (newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
                x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
            }
        }

        _mainScrollPos.x = x;
        _setTranslateX(x, _containerStyle);
    },
    _calculatePanOffset = function(axis, zoomLevel) {
        var m = _midZoomPoint[axis] - _offset[axis];
        return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
    },

    _equalizePoints = function(p1, p2) {
        p1.x = p2.x;
        p1.y = p2.y;
        if(p2.id) {
            p1.id = p2.id;
        }
    },
    _roundPoint = function(p) {
        p.x = Math.round(p.x);
        p.y = Math.round(p.y);
    },

    _mouseMoveTimeout = null,
    _onFirstMouseMove = function() {
        // Wait until mouse move event is fired at least twice during 100ms
        // We do this, because some mobile browsers trigger it on touchstart
        if(_mouseMoveTimeout ) {
            framework.unbind(document, 'mousemove', _onFirstMouseMove);
            framework.addClass(template, 'pswp--has_mouse');
            _options.mouseUsed = true;
            _shout('mouseUsed');
        }
        _mouseMoveTimeout = setTimeout(function() {
            _mouseMoveTimeout = null;
        }, 100);
    },

    _bindEvents = function() {
        framework.bind(document, 'keydown', self);

        if(_features.transform) {
            // don't bind click event in browsers that don't support transform (mostly IE8)
            framework.bind(self.scrollWrap, 'click', self);
        }


        if(!_options.mouseUsed) {
            framework.bind(document, 'mousemove', _onFirstMouseMove);
        }

        framework.bind(window, 'resize scroll orientationchange', self);

        _shout('bindEvents');
    },

    _unbindEvents = function() {
        framework.unbind(window, 'resize scroll orientationchange', self);
        framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
        framework.unbind(document, 'keydown', self);
        framework.unbind(document, 'mousemove', _onFirstMouseMove);

        if(_features.transform) {
            framework.unbind(self.scrollWrap, 'click', self);
        }

        if(_isDragging) {
            framework.unbind(window, _upMoveEvents, self);
        }

        clearTimeout(_orientationChangeTimeout);

        _shout('unbindEvents');
    },

    _calculatePanBounds = function(zoomLevel, update) {
        var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
        if(update) {
            _currPanBounds = bounds;
        }
        return bounds;
    },

    _getMinZoomLevel = function(item) {
        if(!item) {
            item = self.currItem;
        }
        return item.initialZoomLevel;
    },
    _getMaxZoomLevel = function(item) {
        if(!item) {
            item = self.currItem;
        }
        return item.w > 0 ? _options.maxSpreadZoom : 1;
    },

    // Return true if offset is out of the bounds
    _modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
        if(destZoomLevel === self.currItem.initialZoomLevel) {
            destPanOffset[axis] = self.currItem.initialPosition[axis];
            return true;
        } else {
            destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

            if(destPanOffset[axis] > destPanBounds.min[axis]) {
                destPanOffset[axis] = destPanBounds.min[axis];
                return true;
            } else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
                destPanOffset[axis] = destPanBounds.max[axis];
                return true;
            }
        }
        return false;
    },

    _setupTransforms = function() {

        if(_transformKey) {
            // setup 3d transforms
            var allow3dTransform = _features.perspective && !_likelyTouchDevice;
            _translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
            _translateSufix = _features.perspective ? ', 0px)' : ')';
            return;
        }

        // Override zoom/pan/move functions in case old browser is used (most likely IE)
        // (so they use left/top/width/height, instead of CSS transform)

        _transformKey = 'left';
        framework.addClass(template, 'pswp--ie');

        _setTranslateX = function(x, elStyle) {
            elStyle.left = x + 'px';
        };
        _applyZoomPanToItem = function(item) {

            var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                s = item.container.style,
                w = zoomRatio * item.w,
                h = zoomRatio * item.h;

            s.width = w + 'px';
            s.height = h + 'px';
            s.left = item.initialPosition.x + 'px';
            s.top = item.initialPosition.y + 'px';

        };
        _applyCurrentZoomPan = function() {
            if(_currZoomElementStyle) {

                var s = _currZoomElementStyle,
                    item = self.currItem,
                    zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                    w = zoomRatio * item.w,
                    h = zoomRatio * item.h;

                s.width = w + 'px';
                s.height = h + 'px';


                s.left = _panOffset.x + 'px';
                s.top = _panOffset.y + 'px';
            }

        };
    },

    _onKeyDown = function(e) {
        var keydownAction = '';
        if(_options.escKey && e.keyCode === 27) {
            keydownAction = 'close';
        } else if(_options.arrowKeys) {
            if(e.keyCode === 37) {
                keydownAction = 'prev';
            } else if(e.keyCode === 39) {
                keydownAction = 'next';
            }
        }

        if(keydownAction) {
            // don't do anything if special key pressed to prevent from overriding default browser actions
            // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
            if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
                if(e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                self[keydownAction]();
            }
        }
    },

    _onGlobalClick = function(e) {
        if(!e) {
            return;
        }

        // don't allow click event to pass through when triggering after drag or some other gesture
        if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
            e.preventDefault();
            e.stopPropagation();
        }
    },

    _updatePageScrollOffset = function() {
        self.setScrollOffset(0, framework.getScrollY());
    }
// Micro animation engine
var _animations = {},
    _numAnimations = 0,
    _stopAnimation = function(name) {
        if(_animations[name]) {
            if(_animations[name].raf) {
                _cancelAF( _animations[name].raf );
            }
            _numAnimations--;
            delete _animations[name];
        }
    },
    _registerStartAnimation = function(name) {
        if(_animations[name]) {
            _stopAnimation(name);
        }
        if(!_animations[name]) {
            _numAnimations++;
            _animations[name] = {};
        }
    },
    _stopAllAnimations = function() {
        for (var prop in _animations) {

            if( _animations.hasOwnProperty( prop ) ) {
                _stopAnimation(prop);
            }

        }
    },
    _animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
        var startAnimTime = _getCurrentTime(), t;
        _registerStartAnimation(name);

        var animloop = function(){
            if ( _animations[name] ) {

                t = _getCurrentTime() - startAnimTime; // time diff
                //b - beginning (start prop)
                //d - anim duration

                if ( t >= d ) {
                    _stopAnimation(name);
                    onUpdate(endProp);
                    if(onComplete) {
                        onComplete();
                    }
                    return;
                }
                onUpdate( (endProp - b) * easingFn(t/d) + b );

                _animations[name].raf = _requestAF(animloop);
            }
        };
        animloop();
    };



var publicMethods = {

    // make a few local variables and functions public
    shout: _shout,
    listen: _listen,
    viewportSize: _viewportSize,
    options: _options,

    isMainScrollAnimating: function() {
        return _mainScrollAnimating;
    },
    getZoomLevel: function() {
        return _currZoomLevel;
    },
    getCurrentIndex: function() {
        return _currentItemIndex;
    },
    isDragging: function() {
        return _isDragging;
    },
    isZooming: function() {
        return _isZooming;
    },
    setScrollOffset: function(x,y) {
        _offset.x = x;
        _currentWindowScrollY = _offset.y = y;
        _shout('updateScrollOffset', _offset);
    },
    applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
        _panOffset.x = panX;
        _panOffset.y = panY;
        _currZoomLevel = zoomLevel;
        _applyCurrentZoomPan( allowRenderResolution );
    },

    init: function() {

        if(_isOpen || _isDestroying) {
            return;
        }

        var i;

        self.framework = framework; // basic functionality
        self.template = template; // root DOM element of PhotoSwipe
        self.bg = framework.getChildByClass(template, 'pswp__bg');

        _initalClassName = template.className;
        _isOpen = true;

        _features = framework.detectFeatures();
        _requestAF = _features.raf;
        _cancelAF = _features.caf;
        _transformKey = _features.transform;
        _oldIE = _features.oldIE;

        self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
        self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

        _containerStyle = self.container.style; // for fast access

        // Objects that hold slides (there are only 3 in DOM)
        self.itemHolders = _itemHolders = [
            {el:self.container.children[0] , wrap:0, index: -1},
            {el:self.container.children[1] , wrap:0, index: -1},
            {el:self.container.children[2] , wrap:0, index: -1}
        ];

        // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
        _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

        _setupTransforms();

        // Setup global events
        _globalEventHandlers = {
            resize: self.updateSize,

            // Fixes: iOS 10.3 resize event
            // does not update scrollWrap.clientWidth instantly after resize
            // https://github.com/dimsemenov/PhotoSwipe/issues/1315
            orientationchange: function() {
                clearTimeout(_orientationChangeTimeout);
                _orientationChangeTimeout = setTimeout(function() {
                    if(_viewportSize.x !== self.scrollWrap.clientWidth) {
                        self.updateSize();
                    }
                }, 500);
            },
            scroll: _updatePageScrollOffset,
            keydown: _onKeyDown,
            click: _onGlobalClick
        };

        // disable show/hide effects on old browsers that don't support CSS animations or transforms,
        // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
        var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
        if(!_features.animationName || !_features.transform || oldPhone) {
            _options.showAnimationDuration = _options.hideAnimationDuration = 0;
        }

        // init modules
        for(i = 0; i < _modules.length; i++) {
            self['init' + _modules[i]]();
        }

        // init
        if(UiClass) {
            var ui = self.ui = new UiClass(self, framework);
            ui.init();
        }

        _shout('firstUpdate');
        _currentItemIndex = _currentItemIndex || _options.index || 0;
        // validate index
        if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
            _currentItemIndex = 0;
        }
        self.currItem = _getItemAt( _currentItemIndex );


        if(_features.isOldIOSPhone || _features.isOldAndroid) {
            _isFixedPosition = false;
        }

        template.setAttribute('aria-hidden', 'false');
        if(_options.modal) {
            if(!_isFixedPosition) {
                template.style.position = 'absolute';
                template.style.top = framework.getScrollY() + 'px';
            } else {
                template.style.position = 'fixed';
            }
        }

        if(_currentWindowScrollY === undefined) {
            _shout('initialLayout');
            _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
        }

        // add classes to root element of PhotoSwipe
        var rootClasses = 'pswp--open ';
        if(_options.mainClass) {
            rootClasses += _options.mainClass + ' ';
        }
        if(_options.showHideOpacity) {
            rootClasses += 'pswp--animate_opacity ';
        }
        rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
        rootClasses += _features.animationName ? ' pswp--css_animation' : '';
        rootClasses += _features.svg ? ' pswp--svg' : '';
        framework.addClass(template, rootClasses);

        self.updateSize();

        // initial update
        _containerShiftIndex = -1;
        _indexDiff = null;
        for(i = 0; i < NUM_HOLDERS; i++) {
            _setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
        }

        if(!_oldIE) {
            framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
        }

        _listen('initialZoomInEnd', function() {
            self.setContent(_itemHolders[0], _currentItemIndex-1);
            self.setContent(_itemHolders[2], _currentItemIndex+1);

            _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

            if(_options.focus) {
                // focus causes layout,
                // which causes lag during the animation,
                // that's why we delay it untill the initial zoom transition ends
                template.focus();
            }


            _bindEvents();
        });

        // set content for center slide (first time)
        self.setContent(_itemHolders[1], _currentItemIndex);

        self.updateCurrItem();

        _shout('afterInit');

        if(!_isFixedPosition) {

            // On all versions of iOS lower than 8.0, we check size of viewport every second.
            //
            // This is done to detect when Safari top & bottom bars appear,
            // as this action doesn't trigger any events (like resize).
            //
            // On iOS8 they fixed this.
            //
            // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.

            _updateSizeInterval = setInterval(function() {
                if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
                    self.updateSize();
                }
            }, 1000);
        }

        framework.addClass(template, 'pswp--visible');

        // 屏蔽滚动条滚动
        setTimeout(function(){
            $('html').css({overflow:'hidden',height:'100%'});
        },300);
    },

    // Close the gallery, then destroy it
    close: function() {
        if(!_isOpen) {
            return;
        }
        // 撤销滚动条屏蔽
        $('html').css({overflow:'',height:''});
        _isOpen = false;
        _isDestroying = true;
        _shout('close');
        _unbindEvents();

        _showOrHide(self.currItem, null, true, self.destroy);
    },

    // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
    destroy: function() {
        _shout('destroy');

        if(_showOrHideTimeout) {
            clearTimeout(_showOrHideTimeout);
        }

        template.setAttribute('aria-hidden', 'true');
        template.className = _initalClassName;

        if(_updateSizeInterval) {
            clearInterval(_updateSizeInterval);
        }

        framework.unbind(self.scrollWrap, _downEvents, self);

        // we unbind scroll event at the end, as closing animation may depend on it
        framework.unbind(window, 'scroll', self);

        _stopDragUpdateLoop();

        _stopAllAnimations();

        _listeners = null;
    },

    /**
     * Pan image to position
     * @param {Number} x
     * @param {Number} y
     * @param {Boolean} force Will ignore bounds if set to true.
     */
    panTo: function(x,y,force) {
        if(!force) {
            if(x > _currPanBounds.min.x) {
                x = _currPanBounds.min.x;
            } else if(x < _currPanBounds.max.x) {
                x = _currPanBounds.max.x;
            }

            if(y > _currPanBounds.min.y) {
                y = _currPanBounds.min.y;
            } else if(y < _currPanBounds.max.y) {
                y = _currPanBounds.max.y;
            }
        }

        _panOffset.x = x;
        _panOffset.y = y;
        _applyCurrentZoomPan();
    },

    handleEvent: function (e) {
        e = e || window.event;
        if(_globalEventHandlers[e.type]) {
            _globalEventHandlers[e.type](e);
        }
    },


    goTo: function(index) {
        var $container=$(self.container);
        $container.addClass('transition500');
        setTimeout(function(){
            $container.removeClass('transition500');
        },500)
        index = _getLoopedId(index);

        var diff = index - _currentItemIndex;
        _indexDiff = diff;

        _currentItemIndex = index;
        self.currItem = _getItemAt( _currentItemIndex );
        _currPositionIndex -= diff;

        _moveMainScroll(_slideSize.x * _currPositionIndex);


        _stopAllAnimations();
        _mainScrollAnimating = false;

        self.updateCurrItem();
    },
    next: function() {
        self.goTo( _currentItemIndex + 1);
    },
    prev: function() {
        self.goTo( _currentItemIndex - 1);
    },

    // update current zoom/pan objects
    updateCurrZoomItem: function(emulateSetContent) {
        if(emulateSetContent) {
            _shout('beforeChange', 0);
        }

        // itemHolder[1] is middle (current) item
        if(_itemHolders[1].el.children.length) {
            var zoomElement = _itemHolders[1].el.children[0];
            if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
                _currZoomElementStyle = zoomElement.style;
            } else {
                _currZoomElementStyle = null;
            }
        } else {
            _currZoomElementStyle = null;
        }

        _currPanBounds = self.currItem.bounds;
        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

        _panOffset.x = _currPanBounds.center.x;
        _panOffset.y = _currPanBounds.center.y;

        if(emulateSetContent) {
            _shout('afterChange');
        }
    },


    invalidateCurrItems: function() {
        _itemsNeedUpdate = true;
        for(var i = 0; i < NUM_HOLDERS; i++) {
            if( _itemHolders[i].item ) {
                _itemHolders[i].item.needsUpdate = true;
            }
        }
    },

    updateCurrItem: function(beforeAnimation) {

        if(_indexDiff === 0) {
            return;
        }

        var diffAbs = Math.abs(_indexDiff),
            tempHolder;

        if(beforeAnimation && diffAbs < 2) {
            return;
        }


        self.currItem = _getItemAt( _currentItemIndex );
        _renderMaxResolution = false;

        _shout('beforeChange', _indexDiff);

        if(diffAbs >= NUM_HOLDERS) {
            _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
            diffAbs = NUM_HOLDERS;
        }
        for(var i = 0; i < diffAbs; i++) {
            if(_indexDiff > 0) {
                tempHolder = _itemHolders.shift();
                _itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

                _containerShiftIndex++;
                _setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
                self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
            } else {
                tempHolder = _itemHolders.pop();
                _itemHolders.unshift( tempHolder ); // move last to first

                _containerShiftIndex--;
                _setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
                self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
            }

        }

        // reset zoom/pan on previous item
        if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

            var prevItem = _getItemAt(_prevItemIndex);
            if(prevItem.initialZoomLevel !== _currZoomLevel) {
                _calculateItemSize(prevItem , _viewportSize );
                _setImageSize(prevItem);
                _applyZoomPanToItem( prevItem );
            }

        }

        // reset diff after update
        _indexDiff = 0;

        self.updateCurrZoomItem();

        _prevItemIndex = _currentItemIndex;

        _shout('afterChange');

    },



    updateSize: function(force) {

        if(!_isFixedPosition && _options.modal) {
            var windowScrollY = framework.getScrollY();
            if(_currentWindowScrollY !== windowScrollY) {
                template.style.top = windowScrollY + 'px';
                _currentWindowScrollY = windowScrollY;
            }
            if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                return;
            }
            _windowVisibleSize.x = window.innerWidth;
            _windowVisibleSize.y = window.innerHeight;

            //template.style.width = _windowVisibleSize.x + 'px';
            template.style.height = _windowVisibleSize.y + 'px';
        }



        _viewportSize.x = self.scrollWrap.clientWidth;
        _viewportSize.y = self.scrollWrap.clientHeight;

        _updatePageScrollOffset();

        _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
        _slideSize.y = _viewportSize.y;

        _moveMainScroll(_slideSize.x * _currPositionIndex);

        _shout('beforeResize'); // even may be used for example to switch image sources


        // don't re-calculate size on inital size update
        if(_containerShiftIndex !== undefined) {

            var holder,
                item,
                hIndex;

            for(var i = 0; i < NUM_HOLDERS; i++) {
                holder = _itemHolders[i];
                _setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

                hIndex = _currentItemIndex+i-1;

                if(_options.loop && _getNumItems() > 2) {
                    hIndex = _getLoopedId(hIndex);
                }

                // update zoom level on items and refresh source (if needsUpdate)
                item = _getItemAt( hIndex );

                // re-render gallery item if `needsUpdate`,
                // or doesn't have `bounds` (entirely new slide object)
                if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

                    self.cleanSlide( item );

                    self.setContent( holder, hIndex );

                    // if "center" slide
                    if(i === 1) {
                        self.currItem = item;
                        self.updateCurrZoomItem(true);
                    }

                    item.needsUpdate = false;

                } else if(holder.index === -1 && hIndex >= 0) {
                    // add content first time
                    self.setContent( holder, hIndex );
                }
                if(item && item.container) {
                    _calculateItemSize(item, _viewportSize);
                    _setImageSize(item);
                    _applyZoomPanToItem( item );
                }

            }
            _itemsNeedUpdate = false;
        }

        _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
        _currPanBounds = self.currItem.bounds;

        if(_currPanBounds) {
            _panOffset.x = _currPanBounds.center.x;
            _panOffset.y = _currPanBounds.center.y;
            _applyCurrentZoomPan( true );
        }

        _shout('resize');
    },

    // Zoom current item to
    zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
        /*
            if(destZoomLevel === 'fit') {
                destZoomLevel = self.currItem.fitRatio;
            } else if(destZoomLevel === 'fill') {
                destZoomLevel = self.currItem.fillRatio;
            }
        */

        if(centerPoint) {
            _startZoomLevel = _currZoomLevel;
            _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
            _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
            _equalizePoints(_startPanOffset, _panOffset);
        }

        var destPanBounds = _calculatePanBounds(destZoomLevel, false),
            destPanOffset = {};

        _modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
        _modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

        var initialZoomLevel = _currZoomLevel;
        var initialPanOffset = {
            x: _panOffset.x,
            y: _panOffset.y
        };

        _roundPoint(destPanOffset);

        var onUpdate = function(now) {
            if(now === 1) {
                _currZoomLevel = destZoomLevel;
                _panOffset.x = destPanOffset.x;
                _panOffset.y = destPanOffset.y;
            } else {
                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
            }

            if(updateFn) {
                updateFn(now);
            }

            _applyCurrentZoomPan( now === 1 );
        };

        if(speed) {
            _animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
        } else {
            onUpdate(1);
        }
    },
};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 *
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
    DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
    _gestureCheckSpeedTime,

    // pool of objects that are used during dragging of zooming
    p = {}, // first point
    p2 = {}, // second point (for zoom gesture)
    delta = {},
    _currPoint = {},
    _startPoint = {},
    _currPointers = [],
    _startMainScrollPos = {},
    _releaseAnimData,
    _posPoints = [], // array of points during dragging, used to determine type of gesture
    _tempPoint = {},

    _isZoomingIn,
    _verticalDragInitiated,
    _oldAndroidTouchEndTimeout,
    _currZoomedItemIndex = 0,
    _centerPoint = _getEmptyPoint(),
    _lastReleaseTime = 0,
    _isDragging, // at least one pointer is down
    _isMultitouch, // at least two _pointers are down
    _zoomStarted, // zoom level changed during zoom gesture
    _moved,
    _dragAnimFrame,
    _mainScrollShifted,
    _currentPoints, // array of current touch points
    _isZooming,
    _currPointsDistance,
    _startPointsDistance,
    _currPanBounds,
    _mainScrollPos = _getEmptyPoint(),
    _currZoomElementStyle,
    _mainScrollAnimating, // true, if animation after swipe gesture is running
    _midZoomPoint = _getEmptyPoint(),
    _currCenterPoint = _getEmptyPoint(),
    _direction,
    _isFirstMove,
    _opacityChanged,
    _bgOpacity,
    _wasOverInitialZoom,

    _isEqualPoints = function(p1, p2) {
        return p1.x === p2.x && p1.y === p2.y;
    },
    _isNearbyPoints = function(touch0, touch1) {
        return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
    },
    _calculatePointsDistance = function(p1, p2) {
        _tempPoint.x = Math.abs( p1.x - p2.x );
        _tempPoint.y = Math.abs( p1.y - p2.y );
        return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
    },
    _stopDragUpdateLoop = function() {
        if(_dragAnimFrame) {
            _cancelAF(_dragAnimFrame);
            _dragAnimFrame = null;
        }
    },
    _dragUpdateLoop = function() {
        if(_isDragging) {
            _dragAnimFrame = _requestAF(_dragUpdateLoop);
            _renderMovement();
        }
    },
    _canPan = function() {
        return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
    },

    // find the closest parent DOM element
    _closestElement = function(el, fn) {
        if(!el || el === document) {
            return false;
        }

        // don't search elements above pswp__scroll-wrap
        if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
            return false;
        }

        if( fn(el) ) {
            return el;
        }

        return _closestElement(el.parentNode, fn);
    },

    _preventObj = {},
    _preventDefaultEventBehaviour = function(e, isDown) {
        _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

        _shout('preventDragEvent', e, isDown, _preventObj);
        return _preventObj.prevent;

    },
    _convertTouchToPoint = function(touch, p) {
        p.x = touch.pageX;
        p.y = touch.pageY;
        p.id = touch.identifier;
        return p;
    },
    _findCenterOfPoints = function(p1, p2, pCenter) {
        pCenter.x = (p1.x + p2.x) * 0.5;
        pCenter.y = (p1.y + p2.y) * 0.5;
    },
    _pushPosPoint = function(time, x, y) {
        if(time - _gestureCheckSpeedTime > 50) {
            var o = _posPoints.length > 2 ? _posPoints.shift() : {};
            o.x = x;
            o.y = y;
            _posPoints.push(o);
            _gestureCheckSpeedTime = time;
        }
    },

    _calculateVerticalDragOpacityRatio = function() {
        var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
        return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
    },


    // points pool, reused during touch events
    _ePoint1 = {},
    _ePoint2 = {},
    _tempPointsArr = [],
    _tempCounter,
    _getTouchPoints = function(e) {
        // clean up previous points, without recreating array
        while(_tempPointsArr.length > 0) {
            _tempPointsArr.pop();
        }

        if(!_pointerEventEnabled) {
            if(e.type.indexOf('touch') > -1) {

                if(e.touches && e.touches.length > 0) {
                    _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
                    if(e.touches.length > 1) {
                        _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                    }
                }

            } else {
                _ePoint1.x = e.pageX;
                _ePoint1.y = e.pageY;
                _ePoint1.id = '';
                _tempPointsArr[0] = _ePoint1;//_ePoint1;
            }
        } else {
            _tempCounter = 0;
            // we can use forEach, as pointer events are supported only in modern browsers
            _currPointers.forEach(function(p) {
                if(_tempCounter === 0) {
                    _tempPointsArr[0] = p;
                } else if(_tempCounter === 1) {
                    _tempPointsArr[1] = p;
                }
                _tempCounter++;

            });
        }
        return _tempPointsArr;
    },

    _panOrMoveMainScroll = function(axis, delta) {

        var panFriction,
            overDiff = 0,
            newOffset = _panOffset[axis] + delta[axis],
            startOverDiff,
            dir = delta[axis] > 0,
            newMainScrollPosition = _mainScrollPos.x + delta.x,
            mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
            newPanPos,
            newMainScrollPos;

        // calculate fdistance over the bounds and friction
        if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
            panFriction = _options.panEndFriction;
            // Linear increasing of friction, so at 1/4 of viewport it's at max value.
            // Looks not as nice as was expected. Left for history.
            // panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
        } else {
            panFriction = 1;
        }

        newOffset = _panOffset[axis] + delta[axis] * panFriction;

        // move main scroll or start panning
        if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


            if(!_currZoomElementStyle) {

                newMainScrollPos = newMainScrollPosition;

            } else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {

                if(dir) {
                    if(newOffset > _currPanBounds.min[axis]) {
                        panFriction = _options.panEndFriction;
                        overDiff = _currPanBounds.min[axis] - newOffset;
                        startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                    }

                    // drag right
                    if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
                        newMainScrollPos = newMainScrollPosition;
                        if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                            newMainScrollPos = _startMainScrollPos.x;
                        }
                    } else {
                        if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                            newPanPos = newOffset;
                        }

                    }

                } else {

                    if(newOffset < _currPanBounds.max[axis] ) {
                        panFriction =_options.panEndFriction;
                        overDiff = newOffset - _currPanBounds.max[axis];
                        startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                    }

                    if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
                        newMainScrollPos = newMainScrollPosition;

                        if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                            newMainScrollPos = _startMainScrollPos.x;
                        }

                    } else {
                        if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                            newPanPos = newOffset;
                        }
                    }

                }


                //
            }

            if(axis === 'x') {

                if(newMainScrollPos !== undefined) {
                    _moveMainScroll(newMainScrollPos, true);
                    if(newMainScrollPos === _startMainScrollPos.x) {
                        _mainScrollShifted = false;
                    } else {
                        _mainScrollShifted = true;
                    }
                }

                if(_currPanBounds.min.x !== _currPanBounds.max.x) {
                    if(newPanPos !== undefined) {
                        _panOffset.x = newPanPos;
                    } else if(!_mainScrollShifted) {
                        _panOffset.x += delta.x * panFriction;
                    }
                }

                return newMainScrollPos !== undefined;
            }

        }

        if(!_mainScrollAnimating) {

            if(!_mainScrollShifted) {
                if(_currZoomLevel > self.currItem.fitRatio) {
                    _panOffset[axis] += delta[axis] * panFriction;

                }
            }


        }

    },

    // Pointerdown/touchstart/mousedown handler
    _onDragStart = function(e) {

        // Allow dragging only via left mouse button.
        // As this handler is not added in IE8 - we ignore e.which
        //
        // http://www.quirksmode.org/js/events_properties.html
        // https://developer.mozilla.org/en-US/docs/Web/API/event.button
        if(e.type === 'mousedown' && e.button > 0  ) {
            return;
        }

        if(_initialZoomRunning) {
            e.preventDefault();
            return;
        }

        if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
            return;
        }

        if(_preventDefaultEventBehaviour(e, true)) {
            // if(device_type!='d'){
            //     var obj = e.srcElement ? e.srcElement : e.target;
            //     if($(obj).parents('.pswp__button--rotate-left').length) {
            //         _imgRotate('','','.pswp__item','.pswp__img:visible',1);
            //     }
            //     if($(obj).parents('.pswp__button--rotate-right').length) {
            //         _imgRotate('','','.pswp__item','.pswp__img:visible',2);
            //     }
            // }
            e.preventDefault();
        }



        _shout('pointerDown');

        if(_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
            if(pointerIndex < 0) {
                pointerIndex = _currPointers.length;
            }
            _currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
        }



        var startPointsList = _getTouchPoints(e),
            numPoints = startPointsList.length;

        _currentPoints = null;

        _stopAllAnimations();

        // init drag
        if(!_isDragging || numPoints === 1) {



            _isDragging = _isFirstMove = true;
            framework.bind(window, _upMoveEvents, self);

            _isZoomingIn =
                _wasOverInitialZoom =
                _opacityChanged =
                _verticalDragInitiated =
                _mainScrollShifted =
                _moved =
                _isMultitouch =
                _zoomStarted = false;

            _direction = null;

            _shout('firstTouchStart', startPointsList);

            _equalizePoints(_startPanOffset, _panOffset);

            _currPanDist.x = _currPanDist.y = 0;
            _equalizePoints(_currPoint, startPointsList[0]);
            _equalizePoints(_startPoint, _currPoint);

            //_equalizePoints(_startMainScrollPos, _mainScrollPos);
            _startMainScrollPos.x = _slideSize.x * _currPositionIndex;

            _posPoints = [{
                x: _currPoint.x,
                y: _currPoint.y
            }];

            _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

            //_mainScrollAnimationEnd(true);
            _calculatePanBounds( _currZoomLevel, true );

            // Start rendering
            _stopDragUpdateLoop();
            _dragUpdateLoop();

        }

        // init zoom
        if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
            _startZoomLevel = _currZoomLevel;
            _zoomStarted = false; // true if zoom changed at least once

            _isZooming = _isMultitouch = true;
            _currPanDist.y = _currPanDist.x = 0;

            _equalizePoints(_startPanOffset, _panOffset);

            _equalizePoints(p, startPointsList[0]);
            _equalizePoints(p2, startPointsList[1]);

            _findCenterOfPoints(p, p2, _currCenterPoint);

            _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
            _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
            _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
        }


    },

    // Pointermove/touchmove/mousemove handler
    _onDragMove = function(e) {

        e.preventDefault();

        if(_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
            if(pointerIndex > -1) {
                var p = _currPointers[pointerIndex];
                p.x = e.pageX;
                p.y = e.pageY;
            }
        }

        if(_isDragging) {
            var touchesList = _getTouchPoints(e);
            if(!_direction && !_moved && !_isZooming) {

                if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
                    // if main scroll position is shifted – direction is always horizontal
                    _direction = 'h';
                } else {
                    var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
                    // check the direction of movement
                    if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                        _direction = diff > 0 ? 'h' : 'v';
                        _currentPoints = touchesList;
                    }
                }

            } else {
                _currentPoints = touchesList;
            }
        }
    },
    //
    _renderMovement =  function() {

        if(!_currentPoints) {
            return;
        }

        var numPoints = _currentPoints.length;

        if(numPoints === 0) {
            return;
        }

        _equalizePoints(p, _currentPoints[0]);

        delta.x = p.x - _currPoint.x;
        delta.y = p.y - _currPoint.y;

        if(_isZooming && numPoints > 1) {
            // Handle behaviour for more than 1 point

            _currPoint.x = p.x;
            _currPoint.y = p.y;

            // check if one of two points changed
            if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
                return;
            }

            _equalizePoints(p2, _currentPoints[1]);


            if(!_zoomStarted) {
                _zoomStarted = true;
                _shout('zoomGestureStarted');
            }

            // Distance between two points
            var pointsDistance = _calculatePointsDistance(p,p2);

            var zoomLevel = _calculateZoomLevel(pointsDistance);

            // slightly over the of initial zoom level
            if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
                _wasOverInitialZoom = true;
            }

            // Apply the friction if zoom level is out of the bounds
            var zoomFriction = 1,
                minZoomLevel = _getMinZoomLevel(),
                maxZoomLevel = _getMaxZoomLevel();

            if ( zoomLevel < minZoomLevel ) {

                if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
                    // fade out background if zooming out
                    var minusDiff = minZoomLevel - zoomLevel;
                    var percent = 1 - minusDiff / (minZoomLevel / 1.2);

                    _applyBgOpacity(percent);
                    _shout('onPinchClose', percent);
                    _opacityChanged = true;
                } else {
                    zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
                    if(zoomFriction > 1) {
                        zoomFriction = 1;
                    }
                    zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
                }

            } else if ( zoomLevel > maxZoomLevel ) {
                // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
                zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
                if(zoomFriction > 1) {
                    zoomFriction = 1;
                }
                zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
            }

            if(zoomFriction < 0) {
                zoomFriction = 0;
            }

            // distance between touch points after friction is applied
            _currPointsDistance = pointsDistance;

            // _centerPoint - The point in the middle of two pointers
            _findCenterOfPoints(p, p2, _centerPoint);

            // paning with two pointers pressed
            _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
            _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
            _equalizePoints(_currCenterPoint, _centerPoint);

            _panOffset.x = _calculatePanOffset('x', zoomLevel);
            _panOffset.y = _calculatePanOffset('y', zoomLevel);

            _isZoomingIn = zoomLevel > _currZoomLevel;
            _currZoomLevel = zoomLevel;
            _applyCurrentZoomPan();

        } else {

            // handle behaviour for one point (dragging or panning)

            if(!_direction) {
                return;
            }

            if(_isFirstMove) {
                _isFirstMove = false;

                // subtract drag distance that was used during the detection direction

                if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                    delta.x -= _currentPoints[0].x - _startPoint.x;
                }

                if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                    delta.y -= _currentPoints[0].y - _startPoint.y;
                }
            }

            _currPoint.x = p.x;
            _currPoint.y = p.y;

            // do nothing if pointers position hasn't changed
            if(delta.x === 0 && delta.y === 0) {
                return;
            }

            if(_direction === 'v' && _options.closeOnVerticalDrag) {
                if(!_canPan()) {
                    _currPanDist.y += delta.y;
                    _panOffset.y += delta.y;

                    var opacityRatio = _calculateVerticalDragOpacityRatio();

                    _verticalDragInitiated = true;
                    _shout('onVerticalDrag', opacityRatio);

                    _applyBgOpacity(opacityRatio);
                    _applyCurrentZoomPan();
                    return ;
                }
            }

            _pushPosPoint(_getCurrentTime(), p.x, p.y);

            _moved = true;
            _currPanBounds = self.currItem.bounds;

            var mainScrollChanged = _panOrMoveMainScroll('x', delta);
            if(!mainScrollChanged) {
                _panOrMoveMainScroll('y', delta);

                _roundPoint(_panOffset);
                _applyCurrentZoomPan();
            }

        }

    },

    // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
    _onDragRelease = function(e) {

        if(_features.isOldAndroid ) {

            if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
                return;
            }

            // on Android (v4.1, 4.2, 4.3 & possibly older)
            // ghost mousedown/up event isn't preventable via e.preventDefault,
            // which causes fake mousedown event
            // so we block mousedown/up for 600ms
            if( e.type.indexOf('touch') > -1 ) {
                clearTimeout(_oldAndroidTouchEndTimeout);
                _oldAndroidTouchEndTimeout = setTimeout(function() {
                    _oldAndroidTouchEndTimeout = 0;
                }, 600);
            }

        }

        _shout('pointerUp');

        if(_preventDefaultEventBehaviour(e, false)) {
            e.preventDefault();
        }

        var releasePoint;

        if(_pointerEventEnabled) {
            var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

            if(pointerIndex > -1) {
                releasePoint = _currPointers.splice(pointerIndex, 1)[0];

                if(navigator.pointerEnabled) {
                    releasePoint.type = e.pointerType || 'mouse';
                } else {
                    var MSPOINTER_TYPES = {
                        4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
                        2: 'touch', // event.MSPOINTER_TYPE_TOUCH
                        3: 'pen' // event.MSPOINTER_TYPE_PEN
                    };
                    releasePoint.type = MSPOINTER_TYPES[e.pointerType];

                    if(!releasePoint.type) {
                        releasePoint.type = e.pointerType || 'mouse';
                    }
                }

            }
        }

        var touchList = _getTouchPoints(e),
            gestureType,
            numPoints = touchList.length;

        if(e.type === 'mouseup') {
            numPoints = 0;
        }

        // Do nothing if there were 3 touch points or more
        if(numPoints === 2) {
            _currentPoints = null;
            return true;
        }

        // if second pointer released
        if(numPoints === 1) {
            _equalizePoints(_startPoint, touchList[0]);
        }


        // pointer hasn't moved, send "tap release" point
        if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
            if(!releasePoint) {
                if(e.type === 'mouseup') {
                    releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
                } else if(e.changedTouches && e.changedTouches[0]) {
                    releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
                }
            }

            _shout('touchRelease', e, releasePoint);
        }

        // Difference in time between releasing of two last touch points (zoom gesture)
        var releaseTimeDiff = -1;

        // Gesture completed, no pointers left
        if(numPoints === 0) {
            _isDragging = false;
            framework.unbind(window, _upMoveEvents, self);

            _stopDragUpdateLoop();

            if(_isZooming) {
                // Two points released at the same time
                releaseTimeDiff = 0;
            } else if(_lastReleaseTime !== -1) {
                releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
            }
        }
        _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

        if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
            gestureType = 'zoom';
        } else {
            gestureType = 'swipe';
        }

        if(_isZooming && numPoints < 2) {
            _isZooming = false;

            // Only second point released
            if(numPoints === 1) {
                gestureType = 'zoomPointerUp';
            }
            _shout('zoomGestureEnded');
        }

        _currentPoints = null;
        if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
            // nothing to animate
            return;
        }

        _stopAllAnimations();


        if(!_releaseAnimData) {
            _releaseAnimData = _initDragReleaseAnimationData();
        }

        _releaseAnimData.calculateSwipeSpeed('x');


        if(_verticalDragInitiated) {

            var opacityRatio = _calculateVerticalDragOpacityRatio();

            if(opacityRatio < _options.verticalDragRange) {
                self.close();
            } else {
                var initalPanY = _panOffset.y,
                    initialBgOpacity = _bgOpacity;

                _animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {

                    _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

                    _applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
                    _applyCurrentZoomPan();
                });

                _shout('onVerticalDrag', 1);
            }

            return;
        }


        // main scroll
        if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
            var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
            if(itemChanged) {
                return;
            }
            gestureType = 'zoomPointerUp';
        }

        // prevent zoom/pan animation when main scroll animation runs
        if(_mainScrollAnimating) {
            return;
        }

        // Complete simple zoom gesture (reset zoom level if it's out of the bounds)
        if(gestureType !== 'swipe') {
            _completeZoomGesture();
            return;
        }

        // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
        if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
            _completePanGesture(_releaseAnimData);
        }
    },


    // Returns object with data about gesture
    // It's created only once and then reused
    _initDragReleaseAnimationData  = function() {
        // temp local vars
        var lastFlickDuration,
            tempReleasePos;

        // s = this
        var s = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio:  {},
            slowDownRatioReverse:  {},
            speedDecelerationRatio:  {},
            speedDecelerationRatioAbs:  {},
            distanceOffset:  {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function(axis) {


                if( _posPoints.length > 1) {
                    lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                    tempReleasePos = _posPoints[_posPoints.length-2][axis];
                } else {
                    lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
                    tempReleasePos = _startPoint[axis];
                }
                s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
                s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
                if(s.lastFlickDist[axis] > 20) {
                    s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
                } else {
                    s.lastFlickSpeed[axis] = 0;
                }
                if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
                    s.lastFlickSpeed[axis] = 0;
                }

                s.slowDownRatio[axis] = 0.95;
                s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                s.speedDecelerationRatio[axis] = 1;
            },

            calculateOverBoundsAnimOffset: function(axis, speed) {
                if(!s.backAnimStarted[axis]) {

                    if(_panOffset[axis] > _currPanBounds.min[axis]) {
                        s.backAnimDestination[axis] = _currPanBounds.min[axis];

                    } else if(_panOffset[axis] < _currPanBounds.max[axis]) {
                        s.backAnimDestination[axis] = _currPanBounds.max[axis];
                    }

                    if(s.backAnimDestination[axis] !== undefined) {
                        s.slowDownRatio[axis] = 0.7;
                        s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                        if(s.speedDecelerationRatioAbs[axis] < 0.05) {

                            s.lastFlickSpeed[axis] = 0;
                            s.backAnimStarted[axis] = true;

                            _animateProp('bounceZoomPan'+axis,_panOffset[axis],
                                s.backAnimDestination[axis],
                                speed || 300,
                                framework.easing.sine.out,
                                function(pos) {
                                    _panOffset[axis] = pos;
                                    _applyCurrentZoomPan();
                                }
                            );

                        }
                    }
                }
            },

            // Reduces the speed by slowDownRatio (per 10ms)
            calculateAnimOffset: function(axis) {
                if(!s.backAnimStarted[axis]) {
                    s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
                                                s.slowDownRatioReverse[axis] -
                                                s.slowDownRatioReverse[axis] * s.timeDiff / 10);

                    s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                    s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                    _panOffset[axis] += s.distanceOffset[axis];

                }
            },

            panAnimLoop: function() {
                if ( _animations.zoomPan ) {
                    _animations.zoomPan.raf = _requestAF(s.panAnimLoop);

                    s.now = _getCurrentTime();
                    s.timeDiff = s.now - s.lastNow;
                    s.lastNow = s.now;

                    s.calculateAnimOffset('x');
                    s.calculateAnimOffset('y');

                    _applyCurrentZoomPan();

                    s.calculateOverBoundsAnimOffset('x');
                    s.calculateOverBoundsAnimOffset('y');


                    if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

                        // round pan position
                        _panOffset.x = Math.round(_panOffset.x);
                        _panOffset.y = Math.round(_panOffset.y);
                        _applyCurrentZoomPan();

                        _stopAnimation('zoomPan');
                        return;
                    }
                }

            }
        };
        return s;
    },

    _completePanGesture = function(animData) {
        // calculate swipe speed for Y axis (paanning)
        animData.calculateSwipeSpeed('y');

        _currPanBounds = self.currItem.bounds;

        animData.backAnimDestination = {};
        animData.backAnimStarted = {};

        // Avoid acceleration animation if speed is too low
        if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
            animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

            // Run pan drag release animation. E.g. if you drag image and release finger without momentum.
            animData.calculateOverBoundsAnimOffset('x');
            animData.calculateOverBoundsAnimOffset('y');
            return true;
        }

        // Animation loop that controls the acceleration after pan gesture ends
        _registerStartAnimation('zoomPan');
        animData.lastNow = _getCurrentTime();
        animData.panAnimLoop();
    },


    _finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
        var itemChanged;
        if(!_mainScrollAnimating) {
            _currZoomedItemIndex = _currentItemIndex;
        }



        var itemsDiff;

        if(gestureType === 'swipe') {
            var totalShiftDist = _currPoint.x - _startPoint.x,
                isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

            // if container is shifted for more than MIN_SWIPE_DISTANCE,
            // and last flick gesture was in right direction
            if(totalShiftDist > MIN_SWIPE_DISTANCE &&
                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
                // go to prev item
                itemsDiff = -1;
            } else if(totalShiftDist < -MIN_SWIPE_DISTANCE &&
                (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
                // go to next item
                itemsDiff = 1;
            }
        }

        var nextCircle;

        if(itemsDiff) {

            _currentItemIndex += itemsDiff;

            if(_currentItemIndex < 0) {
                _currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
                nextCircle = true;
            } else if(_currentItemIndex >= _getNumItems()) {
                _currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
                nextCircle = true;
            }

            if(!nextCircle || _options.loop) {
                _indexDiff += itemsDiff;
                _currPositionIndex -= itemsDiff;
                itemChanged = true;
            }



        }

        var animateToX = _slideSize.x * _currPositionIndex;
        var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
        var finishAnimDuration;


        if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
            // "return to current" duration, e.g. when dragging from slide 0 to -1
            finishAnimDuration = 333;
        } else {
            finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
                                    animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
                                    333;

            finishAnimDuration = Math.min(finishAnimDuration, 400);
            finishAnimDuration = Math.max(finishAnimDuration, 250);
        }

        if(_currZoomedItemIndex === _currentItemIndex) {
            itemChanged = false;
        }

        _mainScrollAnimating = true;

        _shout('mainScrollAnimStart');

        _animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
            _moveMainScroll,
            function() {
                _stopAllAnimations();
                _mainScrollAnimating = false;
                _currZoomedItemIndex = -1;

                if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
                    self.updateCurrItem();
                }

                _shout('mainScrollAnimComplete');
            }
        );

        if(itemChanged) {
            self.updateCurrItem(true);
        }

        return itemChanged;
    },

    _calculateZoomLevel = function(touchesDistance) {
        return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
    },

    // Resets zoom if it's out of bounds
    _completeZoomGesture = function() {
        var destZoomLevel = _currZoomLevel,
            minZoomLevel = _getMinZoomLevel(),
            maxZoomLevel = _getMaxZoomLevel();

        if ( _currZoomLevel < minZoomLevel ) {
            destZoomLevel = minZoomLevel;
        } else if ( _currZoomLevel > maxZoomLevel ) {
            destZoomLevel = maxZoomLevel;
        }

        var destOpacity = 1,
            onUpdate,
            initialOpacity = _bgOpacity;

        if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
            //_closedByScroll = true;
            self.close();
            return true;
        }

        if(_opacityChanged) {
            onUpdate = function(now) {
                _applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
            };
        }

        self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
        return true;
    };


_registerModule('Gestures', {
    publicMethods: {

        initGestures: function() {

            // helper function that builds touch/pointer/mouse events
            var addEventNames = function(pref, down, move, up, cancel) {
                _dragStartEvent = pref + down;
                _dragMoveEvent = pref + move;
                _dragEndEvent = pref + up;
                if(cancel) {
                    _dragCancelEvent = pref + cancel;
                } else {
                    _dragCancelEvent = '';
                }
            };

            _pointerEventEnabled = _features.pointerEvent;
            if(_pointerEventEnabled && _features.touch) {
                // we don't need touch events, if browser supports pointer events
                _features.touch = false;
            }

            if(_pointerEventEnabled) {
                if(navigator.pointerEnabled) {
                    addEventNames('pointer', 'down', 'move', 'up', 'cancel');
                } else {
                    // IE10 pointer events are case-sensitive
                    addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
                }
            } else if(_features.touch) {
                addEventNames('touch', 'start', 'move', 'end', 'cancel');
                _likelyTouchDevice = true;
            } else {
                addEventNames('mouse', 'down', 'move', 'up');
            }

            _upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
            _downEvents = _dragStartEvent;

            if(_pointerEventEnabled && !_likelyTouchDevice) {
                _likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
            }
            // make variable public
            self.likelyTouchDevice = _likelyTouchDevice;

            _globalEventHandlers[_dragStartEvent] = _onDragStart;
            _globalEventHandlers[_dragMoveEvent] = _onDragMove;
            _globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

            if(_dragCancelEvent) {
                _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
            }

            // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
            if(_features.touch) {
                _downEvents += ' mousedown';
                _upMoveEvents += ' mousemove mouseup';
                _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
            }

            if(!_likelyTouchDevice) {
                // don't allow pan to next slide from zoomed state on Desktop
                _options.allowPanToNext = false;
            }
        }

    }
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 *
 */


var _showOrHideTimeout,
    _showOrHide = function(item, img, out, completeFn) {

        if(_showOrHideTimeout) {
            clearTimeout(_showOrHideTimeout);
        }

        _initialZoomRunning = true;
        _initialContentSet = true;

        // dimensions of small thumbnail {x:,y:,w:}.
        // Height is optional, as calculated based on large image.
        var thumbBounds;
        if(item.initialLayout) {
            thumbBounds = item.initialLayout;
            item.initialLayout = null;
        } else {
            thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
        }

        var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

        var onComplete = function() {
            _stopAnimation('initialZoom');
            if(!out) {
                _applyBgOpacity(1);
                if(img) {
                    img.style.display = 'block';
                }
                framework.addClass(template, 'pswp--animated-in');
                _shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
            } else {
                self.template.removeAttribute('style');
                self.bg.removeAttribute('style');
            }

            if(completeFn) {
                completeFn();
            }
            _initialZoomRunning = false;
        };

        // if bounds aren't provided, just open gallery without animation
        if(!duration || !thumbBounds || thumbBounds.x === undefined) {

            _shout('initialZoom' + (out ? 'Out' : 'In') );

            _currZoomLevel = item.initialZoomLevel;
            _equalizePoints(_panOffset,  item.initialPosition );
            _applyCurrentZoomPan();

            template.style.opacity = out ? 0 : 1;
            _applyBgOpacity(1);

            if(duration) {
                setTimeout(function() {
                    onComplete();
                }, duration);
            } else {
                onComplete();
            }

            return;
        }

        var startAnimation = function() {
            var closeWithRaf = _closedByScroll,
                fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;

            // apply hw-acceleration to image
            if(item.miniImg) {
                item.miniImg.style.webkitBackfaceVisibility = 'hidden';
            }

            if(!out) {
                _currZoomLevel = thumbBounds.w / item.w;
                _panOffset.x = thumbBounds.x;
                _panOffset.y = thumbBounds.y - _initalWindowScrollY;

                self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
                _applyCurrentZoomPan();
            }

            _registerStartAnimation('initialZoom');

            if(out && !closeWithRaf) {
                framework.removeClass(template, 'pswp--animated-in');
            }

            if(fadeEverything) {
                if(out) {
                    framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
                } else {
                    setTimeout(function() {
                        framework.addClass(template, 'pswp--animate_opacity');
                    }, 30);
                }
            }

            _showOrHideTimeout = setTimeout(function() {

                _shout('initialZoom' + (out ? 'Out' : 'In') );


                if(!out) {

                    // "in" animation always uses CSS transitions (instead of rAF).
                    // CSS transition work faster here,
                    // as developer may also want to animate other things,
                    // like ui on top of sliding area, which can be animated just via CSS

                    _currZoomLevel = item.initialZoomLevel;
                    _equalizePoints(_panOffset,  item.initialPosition );
                    _applyCurrentZoomPan();
                    _applyBgOpacity(1);

                    if(fadeEverything) {
                        template.style.opacity = 1;
                    } else {
                        _applyBgOpacity(1);
                    }

                    _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                } else {

                    // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
                    var destZoomLevel = thumbBounds.w / item.w,
                        initialPanOffset = {
                            x: _panOffset.x,
                            y: _panOffset.y
                        },
                        initialZoomLevel = _currZoomLevel,
                        initalBgOpacity = _bgOpacity,
                        onUpdate = function(now) {

                            if(now === 1) {
                                _currZoomLevel = destZoomLevel;
                                _panOffset.x = thumbBounds.x;
                                _panOffset.y = thumbBounds.y  - _currentWindowScrollY;
                            } else {
                                _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                                _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                                _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                            }

                            _applyCurrentZoomPan();
                            if(fadeEverything) {
                                template.style.opacity = 1 - now;
                            } else {
                                _applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
                            }
                        };

                    if(closeWithRaf) {
                        _animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                    } else {
                        onUpdate(1);
                        _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                    }
                }

            }, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
                    // create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
                    // Which avoids lag at the beginning of scale transition.
        };
        startAnimation();


    };

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
*
*/

var _items,
    _tempPanAreaSize = {},
    _imagesToAppendPool = [],
    _initialContentSet,
    _initialZoomRunning,
    _controllerDefaultOptions = {
        index: 0,
        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: false, // TODO
        preload: [1,1],
        getNumItemsFn: function() {
            return _items.length;
        }
    };


var _getItemAt,
    _getNumItems,
    _initialIsLoop,
    _getZeroBounds = function() {
        return {
            center:{x:0,y:0},
            max:{x:0,y:0},
            min:{x:0,y:0}
        };
    },
    _calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
        var bounds = item.bounds;

        // position of element when it's centered
        bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
        bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

        // maximum pan position
        bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ?
                            Math.round(_tempPanAreaSize.x - realPanElementW) :
                            bounds.center.x;

        bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ?
                            Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top :
                            bounds.center.y;

        // minimum pan position
        bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
        bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
    },
    _calculateItemSize = function(item, viewportSize, zoomLevel) {

        if (item.src && !item.loadError) {
            var isInitial = !zoomLevel;

            if(isInitial) {
                if(!item.vGap) {
                    item.vGap = {top:0,bottom:0};
                }
                // allows overriding vertical margin for individual items
                _shout('parseVerticalMargin', item);
            }


            _tempPanAreaSize.x = viewportSize.x;
            _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

            if (isInitial) {
                var hRatio = _tempPanAreaSize.x / item.w;
                var vRatio = _tempPanAreaSize.y / item.h;

                item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
                //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

                var scaleMode = _options.scaleMode;

                if (scaleMode === 'orig') {
                    zoomLevel = 1;
                } else if (scaleMode === 'fit') {
                    zoomLevel = item.fitRatio;
                }

                if (zoomLevel > 1) {
                    zoomLevel = 1;
                }

                item.initialZoomLevel = zoomLevel;

                if(!item.bounds) {
                    // reuse bounds object
                    item.bounds = _getZeroBounds();
                }
            }

            if(!zoomLevel) {
                return;
            }

            _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

            if (isInitial && zoomLevel === item.initialZoomLevel) {
                item.initialPosition = item.bounds.center;
            }

            return item.bounds;
        } else {
            item.w = item.h = 0;
            item.initialZoomLevel = item.fitRatio = 1;
            item.bounds = _getZeroBounds();
            item.initialPosition = item.bounds.center;

            // if it's not image, we return zero bounds (content is not zoomable)
            return item.bounds;
        }

    },




    _appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {


        if(item.loadError) {
            return;
        }

        if(img) {

            item.imageAppended = true;
            _setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );

            baseDiv.appendChild(img);

            if(keepPlaceholder) {
                setTimeout(function() {
                    if(item && item.loaded && item.placeholder) {
                        item.placeholder.style.display = 'none';
                        item.placeholder = null;
                    }
                }, 500);
            }
        }
    },



    _preloadImage = function(item) {
        item.loading = true;
        item.loaded = false;
        var img = item.img = framework.createEl('pswp__img', 'img');
        var onComplete = function() {
            item.loading = false;
            item.loaded = true;

            if(item.loadComplete) {
                item.loadComplete(item);
            } else {
                item.img = null; // no need to store image object
            }
            img.onload = img.onerror = null;
            img = null;
        };
        img.onload = onComplete;
        img.onerror = function() {
            item.loadError = true;
            onComplete();
        };

        img.src = item.src;// + '?a=' + Math.random();

        return img;
    },
    _checkForError = function(item, cleanUp) {
        if(item.src && item.loadError && item.container) {

            if(cleanUp) {
                item.container.innerHTML = '';
            }

            item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
            return true;

        }
    },
    _setImageSize = function(item, img, maxRes) {
        if(!item.src) {
            return;
        }

        if(!img) {
            img = item.container.lastChild;
        }

        var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
            h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

        if(item.placeholder && !item.loaded) {
            item.placeholder.style.width = w + 'px';
            item.placeholder.style.height = h + 'px';
        }

        img.style.width = w + 'px';
        img.style.height = h + 'px';
    },
    _appendImagesPool = function() {

        if(_imagesToAppendPool.length) {
            var poolItem;

            for(var i = 0; i < _imagesToAppendPool.length; i++) {
                poolItem = _imagesToAppendPool[i];
                if( poolItem.holder.index === poolItem.index ) {
                    _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
                }
            }
            _imagesToAppendPool = [];
        }
    };



_registerModule('Controller', {

    publicMethods: {

        lazyLoadItem: function(index) {
            index = _getLoopedId(index);
            var item = _getItemAt(index);

            if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
                return;
            }

            _shout('gettingData', index, item);

            if (!item.src) {
                return;
            }

            _preloadImage(item);
        },
        initController: function() {
            framework.extend(_options, _controllerDefaultOptions, true);
            self.items = _items = items;
            _getItemAt = self.getItemAt;
            _getNumItems = _options.getNumItemsFn; //self.getNumItems;



            _initialIsLoop = _options.loop;
            if(_getNumItems() < 3) {
                _options.loop = false; // disable loop if less then 3 items
            }

            _listen('beforeChange', function(diff) {

                var p = _options.preload,
                    isNext = diff === null ? true : (diff >= 0),
                    preloadBefore = Math.min(p[0], _getNumItems() ),
                    preloadAfter = Math.min(p[1], _getNumItems() ),
                    i;


                for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                    self.lazyLoadItem(_currentItemIndex+i);
                }
                for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                    self.lazyLoadItem(_currentItemIndex-i);
                }
            });

            _listen('initialLayout', function() {
                self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
            });

            _listen('mainScrollAnimComplete', _appendImagesPool);
            _listen('initialZoomInEnd', _appendImagesPool);



            _listen('destroy', function() {
                var item;
                for(var i = 0; i < _items.length; i++) {
                    item = _items[i];
                    // remove reference to DOM elements, for GC
                    if(item.container) {
                        item.container = null;
                    }
                    if(item.placeholder) {
                        item.placeholder = null;
                    }
                    if(item.img) {
                        item.img = null;
                    }
                    if(item.preloader) {
                        item.preloader = null;
                    }
                    if(item.loadError) {
                        item.loaded = item.loadError = false;
                    }
                }
                _imagesToAppendPool = null;
            });
        },


        getItemAt: function(index) {
            if (index >= 0) {
                return _items[index] !== undefined ? _items[index] : false;
            }
            return false;
        },

        allowProgressiveImg: function() {
            // 1. Progressive image loading isn't working on webkit/blink
            //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
            //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
            //
            // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
            //    That's why it's disabled on touch devices (mainly because of swipe transition)
            //
            // 3. Progressive image loading sometimes doesn't work in IE (up to 11).

            // Don't allow progressive loading on non-large touch devices
            return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
            // 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
        },

        setContent: function(holder, index) {

            if(_options.loop) {
                index = _getLoopedId(index);
            }

            var prevItem = self.getItemAt(holder.index);
            if(prevItem) {
                prevItem.container = null;
            }

            var item = self.getItemAt(index),
                img;

            if(!item) {
                holder.el.innerHTML = '';
                return;
            }

            // allow to override data
            _shout('gettingData', index, item);

            holder.index = index;
            holder.item = item;

            // base container DIV is created only once for each of 3 holders
            var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');



            if(!item.src && item.html) {
                if(item.html.tagName) {
                    baseDiv.appendChild(item.html);
                } else {
                    baseDiv.innerHTML = item.html;
                }
            }

            _checkForError(item);

            _calculateItemSize(item, _viewportSize);

            if(item.src && !item.loadError && !item.loaded) {

                item.loadComplete = function(item) {

                    // gallery closed before image finished loading
                    if(!_isOpen) {
                        return;
                    }

                    // check if holder hasn't changed while image was loading
                    if(holder && holder.index === index ) {
                        if( _checkForError(item, true) ) {
                            item.loadComplete = item.img = null;
                            _calculateItemSize(item, _viewportSize);
                            _applyZoomPanToItem(item);

                            if(holder.index === _currentItemIndex) {
                                // recalculate dimensions
                                self.updateCurrZoomItem();
                            }
                            return;
                        }
                        if( !item.imageAppended ) {
                            if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
                                _imagesToAppendPool.push({
                                    item:item,
                                    baseDiv:baseDiv,
                                    img:item.img,
                                    index:index,
                                    holder:holder,
                                    clearPlaceholder:true
                                });
                            } else {
                                _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
                            }
                        } else {
                            // remove preloader & mini-img
                            if(!_initialZoomRunning && item.placeholder) {
                                item.placeholder.style.display = 'none';
                                item.placeholder = null;
                            }
                        }
                    }

                    item.loadComplete = null;
                    item.img = null; // no need to store image element after it's added

                    _shout('imageLoadComplete', index, item);
                };

                if(framework.features.transform) {

                    var placeholderClassName = 'pswp__img pswp__img--placeholder';
                    placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

                    var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
                    if(item.src) {
                        placeholder.src = item.src;
                        placeholder.style.display='none';
                    }

                    _setImageSize(item, placeholder);
                    baseDiv.appendChild(placeholder);
                    setTimeout(function(){
                        $('.pswp__img--placeholder').fadeIn();
                    },100)
                    item.placeholder = placeholder;
                }


                if(!item.loading) {
                    _preloadImage(item);
                }


                if( self.allowProgressiveImg() ) {
                    // just append image
                    if(!_initialContentSet && _features.transform) {
                        _imagesToAppendPool.push({
                            item:item,
                            baseDiv:baseDiv,
                            img:item.img,
                            index:index,
                            holder:holder
                        });
                    } else {
                        _appendImage(index, item, baseDiv, item.img, true, true);
                    }
                }

            } else if(item.src && !item.loadError) {
                // image object is created every time, due to bugs of image loading & delay when switching images
                img = framework.createEl('pswp__img', 'img');
                img.style.opacity = 1;
                img.src = item.src;
                _setImageSize(item, img);
                _appendImage(index, item, baseDiv, img, true);
            }


            if(!_initialContentSet && index === _currentItemIndex) {
                _currZoomElementStyle = baseDiv.style;
                _showOrHide(item, (img ||item.img) );
            } else {
                _applyZoomPanToItem(item);
            }

            holder.el.innerHTML = '';
            holder.el.appendChild(baseDiv);
        },

        cleanSlide: function( item ) {
            if(item.img ) {
                item.img.onload = item.img.onerror = null;
            }
            item.loaded = item.loading = item.img = item.imageAppended = false;
        }

    }
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 *
 */

var tapTimer,
    tapReleasePoint = {},
    _dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
        var e = document.createEvent( 'CustomEvent' ),
            eDetail = {
                origEvent:origEvent,
                target:origEvent.target,
                releasePoint: releasePoint,
                pointerType:pointerType || 'touch'
            };

        e.initCustomEvent( 'pswpTap', true, true, eDetail );
        origEvent.target.dispatchEvent(e);
    };

_registerModule('Tap', {
    publicMethods: {
        initTap: function() {
            _listen('firstTouchStart', self.onTapStart);
            _listen('touchRelease', self.onTapRelease);
            _listen('destroy', function() {
                tapReleasePoint = {};
                tapTimer = null;
            });
        },
        onTapStart: function(touchList) {
            if(touchList.length > 1) {
                clearTimeout(tapTimer);
                tapTimer = null;
            }
        },
        onTapRelease: function(e, releasePoint) {
            if(!releasePoint) {
                return;
            }

            if(!_moved && !_isMultitouch && !_numAnimations) {
                var p0 = releasePoint;
                if(tapTimer) {
                    clearTimeout(tapTimer);
                    tapTimer = null;

                    // Check if taped on the same place
                    if ( _isNearbyPoints(p0, tapReleasePoint) ) {
                        _shout('doubleTap', p0);
                        return;
                    }
                }

                if(releasePoint.type === 'mouse') {
                    _dispatchTapEvent(e, releasePoint, 'mouse');
                    return;
                }

                var clickedTagName = e.target.tagName.toUpperCase();
                // avoid double tap delay on buttons and elements that have class pswp__single-tap
                if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
                    _dispatchTapEvent(e, releasePoint);
                    return;
                }

                _equalizePoints(tapReleasePoint, p0);

                tapTimer = setTimeout(function() {
                    _dispatchTapEvent(e, releasePoint);
                    tapTimer = null;
                }, 300);
            }
        }
    }
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 *
 */

var _wheelDelta;

_registerModule('DesktopZoom', {

    publicMethods: {

        initDesktopZoom: function() {

            if(_oldIE) {
                // no zoom for old IE (<=8)
                return;
            }

            if(_likelyTouchDevice) {
                // if detected hardware touch support, we wait until mouse is used,
                // and only then apply desktop-zoom features
                _listen('mouseUsed', function() {
                    self.setupDesktopZoom();
                });
            } else {
                self.setupDesktopZoom(true);
            }

        },

        setupDesktopZoom: function(onInit) {

            _wheelDelta = {};

            var events = 'wheel mousewheel DOMMouseScroll';

            _listen('bindEvents', function() {
                framework.bind(template, events,  self.handleMouseWheel);
            });

            _listen('unbindEvents', function() {
                if(_wheelDelta) {
                    framework.unbind(template, events, self.handleMouseWheel);
                }
            });

            self.mouseZoomedIn = false;

            var hasDraggingClass,
                updateZoomable = function() {
                    if(self.mouseZoomedIn) {
                        framework.removeClass(template, 'pswp--zoomed-in');
                        self.mouseZoomedIn = false;
                    }
                    // if(_currZoomLevel < 1) {
                        framework.addClass(template, 'pswp--zoom-allowed');
                    // } else {
                    //     framework.removeClass(template, 'pswp--zoom-allowed');
                    // }
                    removeDraggingClass();
                },
                removeDraggingClass = function() {
                    if(hasDraggingClass) {
                        framework.removeClass(template, 'pswp--dragging');
                        hasDraggingClass = false;
                    }
                };

            _listen('resize' , updateZoomable);
            _listen('afterChange' , updateZoomable);
            _listen('pointerDown', function() {
                if(self.mouseZoomedIn) {
                    hasDraggingClass = true;
                    framework.addClass(template, 'pswp--dragging');
                }
            });
            _listen('pointerUp', removeDraggingClass);

            if(!onInit) {
                updateZoomable();
            }

        },

        handleMouseWheel: function(e) {

            if(_currZoomLevel <= self.currItem.fitRatio) {
                if( _options.modal ) {

                    if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                        e.preventDefault();
                    } else if(_transformKey && Math.abs(e.deltaY) > 2) {
                        // close PhotoSwipe
                        // if browser supports transforms & scroll changed enough
                        _closedByScroll = true;
                        self.close();
                    }

                }
                return true;
            }

            // allow just one event to fire
            e.stopPropagation();

            // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
            _wheelDelta.x = 0;

            if('deltaX' in e) {
                if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
                    // 18 - average line height
                    _wheelDelta.x = e.deltaX * 18;
                    _wheelDelta.y = e.deltaY * 18;
                } else {
                    _wheelDelta.x = e.deltaX;
                    _wheelDelta.y = e.deltaY;
                }
            } else if('wheelDelta' in e) {
                if(e.wheelDeltaX) {
                    _wheelDelta.x = -0.16 * e.wheelDeltaX;
                }
                if(e.wheelDeltaY) {
                    _wheelDelta.y = -0.16 * e.wheelDeltaY;
                } else {
                    _wheelDelta.y = -0.16 * e.wheelDelta;
                }
            } else if('detail' in e) {
                _wheelDelta.y = e.detail;
            } else {
                return;
            }

            _calculatePanBounds(_currZoomLevel, true);

            var newPanX = _panOffset.x - _wheelDelta.x,
                newPanY = _panOffset.y - _wheelDelta.y;

            // only prevent scrolling in nonmodal mode when not at edges
            if (_options.modal ||
                (
                newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
                newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
                ) ) {
                e.preventDefault();
            }

            // TODO: use rAF instead of mousewheel?
            self.panTo(newPanX, newPanY);
        },

        toggleDesktopZoom: function(centerPoint) {
            centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

            var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
            var zoomOut = _currZoomLevel === doubleTapZoomLevel;

            self.mouseZoomedIn = !zoomOut;

            self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
            framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
        }

    }
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 *
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *
 * - Switch URL when slides change.
 *
 */


var _historyDefaultOptions = {
    history: true,
    galleryUID: 1
};

var _historyUpdateTimeout,
    _hashChangeTimeout,
    _hashAnimCheckTimeout,
    _hashChangedByScript,
    _hashChangedByHistory,
    _hashReseted,
    _initialHash,
    _historyChanged,
    _closedFromURL,
    _urlChangedOnce,
    _windowLoc,

    _supportsPushState,

    _getHash = function() {
        return _windowLoc.hash.substring(1);
    },
    _cleanHistoryTimeouts = function() {

        if(_historyUpdateTimeout) {
            clearTimeout(_historyUpdateTimeout);
        }

        if(_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
        }
    },

    // pid - Picture index
    // gid - Gallery index
    _parseItemIndexFromURL = function() {
        var hash = _getHash(),
            params = {};

        if(hash.length < 5) { // pid=1
            return params;
        }

        var i, vars = hash.split('&');
        for (i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if(_options.galleryPIDs) {
            // detect custom pid in hash and search for it among the items collection
            var searchfor = params.pid;
            params.pid = 0; // if custom pid cannot be found, fallback to the first item
            for(i = 0; i < _items.length; i++) {
                if(_items[i].pid === searchfor) {
                    params.pid = i;
                    break;
                }
            }
        } else {
            params.pid = parseInt(params.pid,10)-1;
        }
        if( params.pid < 0 ) {
            params.pid = 0;
        }
        return params;
    },
    _updateHash = function() {

        if(_hashAnimCheckTimeout) {
            clearTimeout(_hashAnimCheckTimeout);
        }


        if(_numAnimations || _isDragging) {
            // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
            // that's why we update hash only when no animations running
            _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
            return;
        }

        if(_hashChangedByScript) {
            clearTimeout(_hashChangeTimeout);
        } else {
            _hashChangedByScript = true;
        }


        var pid = (_currentItemIndex + 1);
        var item = _getItemAt( _currentItemIndex );
        if(item.hasOwnProperty('pid')) {
            // carry forward any custom pid assigned to the item
            pid = item.pid;
        }
        var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

        if(!_historyChanged) {
            if(_windowLoc.hash.indexOf(newHash) === -1) {
                _urlChangedOnce = true;
            }
            // first time - add new hisory record, then just replace
        }

        var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

        if( _supportsPushState ) {

            if('#' + newHash !== window.location.hash) {
                history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
            }

        } else {
            if(_historyChanged) {
                _windowLoc.replace( newURL );
            } else {
                _windowLoc.hash = newHash;
            }
        }



        _historyChanged = true;
        _hashChangeTimeout = setTimeout(function() {
            _hashChangedByScript = false;
        }, 60);
    };





_registerModule('History', {



    publicMethods: {
        initHistory: function() {

            framework.extend(_options, _historyDefaultOptions, true);

            if( !_options.history ) {
                return;
            }


            _windowLoc = window.location;
            _urlChangedOnce = false;
            _closedFromURL = false;
            _historyChanged = false;
            _initialHash = _getHash();
            _supportsPushState = ('pushState' in history);


            if(_initialHash.indexOf('gid=') > -1) {
                _initialHash = _initialHash.split('&gid=')[0];
                _initialHash = _initialHash.split('?gid=')[0];
            }


            _listen('afterChange', self.updateURL);
            _listen('unbindEvents', function() {
                framework.unbind(window, 'hashchange', self.onHashChange);
            });


            var returnToOriginal = function() {
                _hashReseted = true;
                if(!_closedFromURL) {

                    if(_urlChangedOnce) {
                        history.back();
                    } else {

                        if(_initialHash) {
                            _windowLoc.hash = _initialHash;
                        } else {
                            if (_supportsPushState) {

                                // remove hash from url without refreshing it or scrolling to top
                                history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
                            } else {
                                _windowLoc.hash = '';
                            }
                        }
                    }

                }

                _cleanHistoryTimeouts();
            };


            _listen('unbindEvents', function() {
                if(_closedByScroll) {
                    // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
                    // this is done to keep the scroll position
                    returnToOriginal();
                }
            });
            _listen('destroy', function() {
                if(!_hashReseted) {
                    returnToOriginal();
                }
            });
            _listen('firstUpdate', function() {
                _currentItemIndex = _parseItemIndexFromURL().pid;
            });




            var index = _initialHash.indexOf('pid=');
            if(index > -1) {
                _initialHash = _initialHash.substring(0, index);
                if(_initialHash.slice(-1) === '&') {
                    _initialHash = _initialHash.slice(0, -1);
                }
            }


            setTimeout(function() {
                if(_isOpen) { // hasn't destroyed yet
                    framework.bind(window, 'hashchange', self.onHashChange);
                }
            }, 40);

        },
        onHashChange: function() {

            if(_getHash() === _initialHash) {

                _closedFromURL = true;
                self.close();
                return;
            }
            if(!_hashChangedByScript) {

                _hashChangedByHistory = true;
                self.goTo( _parseItemIndexFromURL().pid );
                _hashChangedByHistory = false;
            }

        },
        updateURL: function() {

            // Delay the update of URL, to avoid lag during transition,
            // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often

            _cleanHistoryTimeouts();


            if(_hashChangedByHistory) {
                return;
            }

            if(!_historyChanged) {
                _updateHash(); // first time
            } else {
                _historyUpdateTimeout = setTimeout(_updateHash, 50);
            }
        }

    }
});


/*>>history*/
    framework.extend(self, publicMethods); };
    return PhotoSwipe;
});
/*! PhotoSwipe Default UI - 4.1.0 - 2015-09-04
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / "},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.className,g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>1200},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),c.href?c.hasAttribute("download")?!0:(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1):!1},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&.95>a?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&.9>b?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;f>g;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.className&&a.type.indexOf("mouse")>-1&&(d.className.indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});
$.initPhotoSwipeFromDOM = function(gallerySelector,medDom) {
    var parseThumbnailElements = function(el) {
        var thumbElements = $(medDom,el),
            numNodes = thumbElements.length,
            items = [],
            el,
            childElements,
            thumbnailEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            el = thumbElements[i];
            // include only element nodes
            if (el.nodeType !== 1) {
                continue;
            }
            childElements = el.children;
            size = el.getAttribute('data-size').split('x');
            // create slide object
            item = {
                src: el.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
                author: el.getAttribute('data-author')
            };
            item.el = el; // save link to element for getThumbBoundsFn
            if (childElements.length > 0) {
                item.msrc = childElements[0].getAttribute('src'); // thumbnail url
                if (childElements.length > 1) {
                    item.title = childElements[1].innerHTML/*childElements[0].getAttribute('alt')*/; // caption (contents of figure)
                }
            }
            var mediumSrc = el.getAttribute('data-med');
            if (mediumSrc) {
                size = el.getAttribute('data-med-size').split('x');
                // "medium-sized" image
                item.m = {
                    src: mediumSrc,
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                };
            }
            // original image
            item.o = {
                src: item.src,
                w: item.w,
                h: item.h
            };
            items.push(item);
        }
        return items;
    };
    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function(e,parents) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function(el) {
            return el.tagName === 'A';
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = parents,
            clickedListItemMed=$(clickedListItem).data('med'),
            index;
        $(medDom,parents).each(function(i, el) {
            if($(this).data('med')==clickedListItemMed){
                index=i;
                return false;
            }
        });
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) { // pid=1
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        if(!$('.pswp').length){
            var pswp_html='<div id="photoswipe-gallery" class="pswp" tabindex="-1" role="dialog" aria-hidden="true">'
                    +'<div class="pswp__bg"></div>'
                    +'<div class="pswp__scroll-wrap">'
                        +'<div class="pswp__container">'
                            +'<div class="pswp__item"></div>'
                            +'<div class="pswp__item"></div>'
                            +'<div class="pswp__item"></div>'
                        +'</div>'
                        +'<div class="pswp__ui pswp__ui--hidden">'
                            +'<div class="pswp__top-bar">'
                                +'<div class="pswp__counter"></div>'
                                +'<button class="pswp__button pswp__button--close" title="退出画廊"></button>'
                                +'<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>'
                                +'<button class="pswp__button pswp__button--zoom" title="放大 / 缩小"></button>'
                                // +'<button class="pswp__button pswp__button--rotate-left" title="逆时针旋转"><i class="icon md-rotate-ccw" aria-hidden="true"></i></button>'
                                // +'<button class="pswp__button pswp__button--rotate-right" title="顺时针旋转"><i class="icon md-rotate-cw" aria-hidden="true"></i></button>'
                                +'<div class="pswp__preloader">'
                                    +'<div class="pswp__preloader__icn">'
                                        +'<div class="pswp__preloader__cut">'
                                            +'<div class="pswp__preloader__donut"></div>'
                                        +'</div>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                             +'<div class="pswp__loading-indicator">'
                                +'<div class="pswp__loading-indicator__line"></div>'
                            +'</div>'
                            +'<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>'
                            +'<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>'
                            +'<div class="pswp__caption">'
                                +'<div class="pswp__caption__center"></div>'
                            +'</div>'
                        +'</div>'
                    +'</div>'
                +'</div>';
            $('body').append(pswp_html);
        }
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        // define options (if needed)
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function(index) {
                // See Options->getThumbBoundsFn section of docs for more info
                var thumbnail = items[index].el.children[0],
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();
                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            },
            addCaptionHTMLFn: function(item, captionEl, isFake) {
                if (!item.title) {
                    captionEl.children[0].innerText = '';
                    return false;
                }
                captionEl.children[0].innerHTML = item.title/* + '<br/><small>Photo: ' + item.author + '</small>'*/;
                return true;
            },
            closeOnScroll:false,
            tapToClose:true,
            tapToToggleControls:false,
            fullscreenEl:false,
            // captionEl:false,
            shareEl:false,
            errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">图片</a> 加载失败</div>'
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        // see: http://photoswipe.com/documentation/responsive-images.html
        var realViewportWidth,
            useLargeImages = false,
            firstResize = true,
            imageSrcWillChange;
        gallery.listen('beforeResize', function() {
            var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
            dpiRatio = Math.min(dpiRatio, 2.5);
            realViewportWidth = gallery.viewportSize.x * dpiRatio;
            if (realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200) {
                if (!useLargeImages) {
                    useLargeImages = true;
                    imageSrcWillChange = true;
                }

            } else {
                if (useLargeImages) {
                    useLargeImages = false;
                    imageSrcWillChange = true;
                }
            }
            if (imageSrcWillChange && !firstResize) {
                gallery.invalidateCurrItems();
            }
            if (firstResize) {
                firstResize = false;
            }
            imageSrcWillChange = false;
        });
        gallery.listen('gettingData', function(index, item) {
            if (useLargeImages) {
                item.src = item.o.src;
                item.w = item.o.w;
                item.h = item.o.h;
            } else {
                item.src = item.m.src;
                item.w = item.m.w;
                item.h = item.m.h;
            }
        });
        gallery.init();
    };
    // select all gallery elements
    // var galleryElements = document.querySelectorAll(gallerySelector),
    var galleryElements = $(gallerySelector),
        medDom=medDom||'[data-med]';
    $(gallerySelector).each(function(index, el) {
        $(this).attr({'data-pswp-uid':index + 1}).click(function(e) {
            onThumbnailsClick(e,this);
        });
    });
    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        // openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
        openPhotoSwipe(hashData.pid, galleryElements.eq(hashData.gid - 1), true, true);
    }
};
if(location.hash.indexOf('#&gid=')>=0 && location.hash.indexOf('&pid=')>=0) window.history.back();
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($){var selectors=[];var check_binded=false;var check_lock=false;var defaults={interval:250,force_process:false};var $window=$(window);var $prior_appeared=[];function process(){check_lock=false;for(var index=0,selectorsLength=selectors.length;index<selectorsLength;index++){var $appeared=$(selectors[index]).filter(function(){return $(this).is(':appeared');});$appeared.trigger('appear',[$appeared]);if($prior_appeared[index]){var $disappeared=$prior_appeared[index].not($appeared);$disappeared.trigger('disappear',[$disappeared]);}$prior_appeared[index]=$appeared;}};function add_selector(selector){selectors.push(selector);$prior_appeared.push();} $.expr[':']['appeared']=function(element){var $element=$(element);if(!$element.is(':visible')){return false;}var window_left=$window.scrollLeft();var window_top=$window.scrollTop();var offset=$element.offset();var left=offset.left;var top=offset.top;if(top+$element.height()>=window_top&&top-($element.data('appear-top-offset')||0)<=window_top+$window.height()&&left+$element.width()>=window_left&&left-($element.data('appear-left-offset')||0)<=window_left+$window.width()){return true;}else{return false;}};$.fn.extend({ appear:function(options){var opts=$.extend({},defaults,options||{});var selector=this.selector||this;if(!check_binded){var on_check=function(){if(check_lock){return;}check_lock=true;setTimeout(process,opts.interval);};$(window).scroll(on_check).resize(on_check);check_binded=true;}if(opts.force_process){setTimeout(process,opts.interval);}add_selector(selector);return $(selector);}});$.extend({ force_appear:function(){if(check_binded){process();return true;}return false;}});})(function(){if(typeof module!=='undefined'){ return require('jquery');}else{return jQuery;}}());
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/jquery-appear",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginJqueryAppear=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="appear",Appear=function(_Plugin){function Appear(){return babelHelpers.classCallCheck(this,Appear),babelHelpers.possibleConstructorReturn(this,(Appear.__proto__||Object.getPrototypeOf(Appear)).apply(this,arguments))}return babelHelpers.inherits(Appear,_Plugin),babelHelpers.createClass(Appear,[{key:"getName",value:function(){return NAME}},{key:"bind",value:function(){var _this2=this;this.$el.on("appear",function(){_this2.$el.hasClass("appear-no-repeat")||(_this2.$el.removeClass("invisible").addClass("animation-"+_this2.options.animate),_this2.$el.data("repeat")===!1&&_this2.$el.addClass("appear-no-repeat"))}),(0,_jquery2.default)(document).on("disappear",function(){_this2.$el.hasClass("appear-no-repeat")||_this2.$el.addClass("invisible").removeClass("animation-"+_this2.options.animate)})}},{key:"render",value:function(){_jquery2.default.fn.appear&&(this.$el.appear(this.options),this.$el.not(":appeared").addClass("invisible"),this.bind())}}]),Appear}(_Plugin3.default);_Plugin3.default.register(NAME,Appear),exports.default=Appear});
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width;if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});
/*!
 * Ladda 1.0.0 (2016-03-08, 09:31)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2016 Hakim El Hattab, http://hakim.se
 */
!function(a,b){"object"==typeof exports?module.exports=b(require("spin.js")):"function"==typeof define&&define.amd?define(["spin"],b):a.Ladda=b(a.Spinner)}(this,function(a){"use strict";function b(a){if("undefined"==typeof a)return void console.warn("Ladda button target must be defined.");if(/ladda-button/i.test(a.className)||(a.className+=" ladda-button"),a.hasAttribute("data-style")||a.setAttribute("data-style","expand-right"),!a.querySelector(".ladda-label")){var b=document.createElement("span");b.className="ladda-label",i(a,b)}var c,d=a.querySelector(".ladda-spinner");d||(d=document.createElement("span"),d.className="ladda-spinner"),a.appendChild(d);var e,f={start:function(){return c||(c=g(a)),a.setAttribute("disabled",""),a.setAttribute("data-loading",""),clearTimeout(e),c.spin(d),this.setProgress(0),this},startAfter:function(a){return clearTimeout(e),e=setTimeout(function(){f.start()},a),this},stop:function(){return a.removeAttribute("disabled"),a.removeAttribute("data-loading"),clearTimeout(e),c&&(e=setTimeout(function(){c.stop()},1e3)),this},toggle:function(){return this.isLoading()?this.stop():this.start(),this},setProgress:function(b){b=Math.max(Math.min(b,1),0);var c=a.querySelector(".ladda-progress");0===b&&c&&c.parentNode?c.parentNode.removeChild(c):(c||(c=document.createElement("div"),c.className="ladda-progress",a.appendChild(c)),c.style.width=(b||0)*a.offsetWidth+"px")},enable:function(){return this.stop(),this},disable:function(){return this.stop(),a.setAttribute("disabled",""),this},isLoading:function(){return a.hasAttribute("data-loading")},remove:function(){clearTimeout(e),a.removeAttribute("disabled",""),a.removeAttribute("data-loading",""),c&&(c.stop(),c=null);for(var b=0,d=j.length;d>b;b++)if(f===j[b]){j.splice(b,1);break}}};return j.push(f),f}function c(a,b){for(;a.parentNode&&a.tagName!==b;)a=a.parentNode;return b===a.tagName?a:void 0}function d(a){for(var b=["input","textarea","select"],c=[],d=0;d<b.length;d++)for(var e=a.getElementsByTagName(b[d]),f=0;f<e.length;f++)e[f].hasAttribute("required")&&c.push(e[f]);return c}function e(a,e){e=e||{};var f=[];"string"==typeof a?f=h(document.querySelectorAll(a)):"object"==typeof a&&"string"==typeof a.nodeName&&(f=[a]);for(var g=0,i=f.length;i>g;g++)!function(){var a=f[g];if("function"==typeof a.addEventListener){var h=b(a),i=-1;a.addEventListener("click",function(b){var f=!0,g=c(a,"FORM");if("undefined"!=typeof g)if("function"==typeof g.checkValidity)f=g.checkValidity();else for(var j=d(g),k=0;k<j.length;k++)""===j[k].value.replace(/^\s+|\s+$/g,"")&&(f=!1),"checkbox"!==j[k].type&&"radio"!==j[k].type||j[k].checked||(f=!1),"email"===j[k].type&&(f=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(j[k].value));f&&(h.startAfter(1),"number"==typeof e.timeout&&(clearTimeout(i),i=setTimeout(h.stop,e.timeout)),"function"==typeof e.callback&&e.callback.apply(null,[h]))},!1)}}()}function f(){for(var a=0,b=j.length;b>a;a++)j[a].stop()}function g(b){var c,d,e=b.offsetHeight;0===e&&(e=parseFloat(window.getComputedStyle(b).height)),e>32&&(e*=.8),b.hasAttribute("data-spinner-size")&&(e=parseInt(b.getAttribute("data-spinner-size"),10)),b.hasAttribute("data-spinner-color")&&(c=b.getAttribute("data-spinner-color")),b.hasAttribute("data-spinner-lines")&&(d=parseInt(b.getAttribute("data-spinner-lines"),10));var f=.2*e,g=.6*f,h=7>f?2:3;return new a({color:c||"#fff",lines:d||12,radius:f,length:g,width:h,zIndex:"auto",top:"auto",left:"auto",className:""})}function h(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b}function i(a,b){var c=document.createRange();c.selectNodeContents(a),c.surroundContents(b),a.appendChild(b)}var j=[];return{bind:e,create:b,stopAll:f}});
/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2016 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */
!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/ladda",["exports","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.Plugin),global.PluginLadda=mod.exports}}(this,function(exports,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="ladda",LaddaPlugin=function(_Plugin){function LaddaPlugin(){return babelHelpers.classCallCheck(this,LaddaPlugin),babelHelpers.possibleConstructorReturn(this,(LaddaPlugin.__proto__||Object.getPrototypeOf(LaddaPlugin)).apply(this,arguments))}return babelHelpers.inherits(LaddaPlugin,_Plugin),babelHelpers.createClass(LaddaPlugin,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){"undefined"!=typeof Ladda&&("progress"===this.options.type&&(this.options.callback=function(instance){var progress=0,interval=setInterval(function(){progress=Math.min(progress+.1*Math.random(),1),instance.setProgress(progress),1===progress&&(instance.stop(),clearInterval(interval))},200)}),Ladda.bind(this.$el[0],this.options))}}],[{key:"getDefaults",value:function(){return{type:"normal",timeout:2e3}}}]),LaddaPlugin}(_Plugin3.default);_Plugin3.default.register(NAME,LaddaPlugin),exports.default=LaddaPlugin});
/*
列表页翻页功能
 */
$(function(){
	// 翻页ajax加载
	if($(".met-pager-ajax").length){
		var $met_pager=$('.met_pager'),
			$metpagerajax_link=$(".met-pager-ajax-link");
		if($met_pager.length){
			if($metpagerajax_link.hasClass("hidden-md-up")){
				Breakpoints.on('xs',{
	            	enter:function(){
						metpagerajax();
					}
				});
			}else{
				metpagerajax();
			}
	        setTimeout(function(){
				$metpagerajax_link.scrollFun(function(val){
		            val.appearDiy();
				});
			},0)
		}
	}
});
// 分页脚本
function metpagerajax(){
	var $metpagerbtn=$("#met-pager-btn"),
		$metpagerajax=$(".met-pager-ajax"),
		pagemax=$(".met_pager a").length-1,
		page=$('#metPageT').val(),
		metpagerbtnText=function(){
			if(pagemax){
				if(pagemax <= page && page>1) $metpagerbtn.addClass('disabled').text('已经是最后一页了');
			}else{
				$metpagerbtn.attr({hidden:''});
			}
		};
	metpagerbtnText();
	$metpagerbtn.click(function(){
		if(!$metpagerbtn.hasClass('disabled')){
			page++;
			var pageurl=$('#metPageT').data('pageurl').split('&page=')[0];
			$.ajax({
				url:pageurl,
				type:'POST',
				data:{ajax:1,page:page},
				success:function(data){
					var $data=$(data).find('.met-pager-ajax');
					if(!$data.length){
						data='<div class="met-pager-ajax">'+data+'</div>';
						$data=$(data);
					}
					$data.find('>').addClass('page'+page).removeClass('shown');
					data=$data.html();
					$metpagerajax.append(data);
					metpagerajaxFun(page);
					metpagerbtnText();
				}
			});
		}
	});
}
// 无刷新分页获取到数据追加到页面后，可以在此方法继续处理
function metpagerajaxFun(page){
	var $metpagerajax=$('.met-pager-ajax'),
		metpager_original='.page'+page+' [data-original]';
	if($metpagerajax.find(metpager_original).length){
		// 图片高度预设
		// setTimeout(function(){
			$metpagerajax.imageSize(metpager_original);
		// },0)
		// 图片延迟加载
	    if($metpagerajax.find(metpager_original).length) $metpagerajax.find(metpager_original).lazyload({placeholder:M['lazyloadbg']});
		setTimeout(function(){
			$('html,body').stop().animate({scrollTop:$(window).scrollTop()+2},0);
	    },300)
	}
	if($('#met-grid').length){
		setTimeout(function(){
			if(typeof metAnimOnScroll != 'undefined') metAnimOnScroll('met-grid');// 产品模块瀑布流
		},100)
	}
}
/*
编辑器内容处理功能
 */
$(function(){
	// 编辑器响应式表格（需调用tablesaw插件）
	var $meteditor_table=$(".met-editor table");
	if($meteditor_table.length) $meteditor_table.tablexys();
	if(M['device_type']=='m'){
		var editorimg_gallery_open=true;
		// 编辑器画廊
		$(".met-editor").each(function(){
			if($("img",this).length && !$(this).hasClass('no-gallery')){
				// 图片画廊参数设置
				var $self=$(this),
					imgsizeset=true;
				$("img",this).one('click',function(){
					if(imgsizeset){
						$self.find('img').each(function(){
    						var src=$(this).attr('src'),
    							size='500x500';
    						if($(this).data('width')){
    							size=$(this).data('width')+'x'+$(this).data('height');
    						}else if($(this).attr('width') && $(this).attr('height')){
    							size=$(this).attr('width')+'x'+$(this).attr('height');
    						}
							if(!($(this).parents('a').length && $(this).parents('a').find('img').length==1)) $(this).wrapAll('<a class="photoswipe-a"></a>');
							$(this).parents('.photoswipe-a').attr({href:src,'data-size':size,'data-med':src,'data-med-size':size});
		    			});
		    			imgsizeset=false;
					}
	    			if(editorimg_gallery_open){
		    			$.initPhotoSwipeFromDOM('.met-editor');//（需调用PhotoSwipe插件）
						editorimg_gallery_open=false;
	    			}
	    		});
			}
		});
	}
});
METUI_FUN['head_nav_met_21_7'] = {
    name: 'head_nav_met_21_7',
    init: function() {
        $("body.met-navfixed").css({
            paddingTop:$(".head_nav_met_21_7").height()+"px"
        });
        console.log($(".met-head").height());
        /*导航点击处理*/
        var aLink = METUI['head_nav_met_21_7'].find('.dropdown a.nav-link');
        aLink.click(function() {
            if (!Breakpoints.is('xs') && !Breakpoints.is('sm')) {
                if ($(this).data("hover")) window.location.href = $(this).attr('href');
            }
        });
        $(".num-product-head-li").hover(function() {
            $(this).addClass('set').siblings('li').removeClass('set');
        }, function(){});
        $(".dat-img").hover(function(){
            console.log($(this).attr("data-img"));
            $(".num-product-img-src").attr("src",$(this).attr("data-img"));
        }, function(){});
    },
    shadow: function() {
        /*顶部固定边框阴影处理*/
        var fixed = METUI['head_nav_met_21_7'].parent();
        if (fixed) {
            $(window).scroll(function() {
                if (fixed.offset().top > 1) {
                    fixed.addClass("navbar-shadow");
                } else {
                    fixed.removeClass("navbar-shadow");
                }
            });
        }
    },
    animate: function() {
        /*动画*/
        var li = METUI['head_nav_met_21_7'].find('.nav-item');
        li.each(function(index, el) {
            var navlist2 = $(this).find('.navlist-2');
            $(this).on('mouseenter', navlist2, function(event) {
                var x = TweenMax.staggerTo(navlist2, 0.1, {
                    autoAlpha: 1,
                    y: 0,
                    ease: Power3.easeInOut,
                }, 0.02);
            });
            $(this).on('mouseleave', navlist2, function(event) {
                var x = TweenMax.staggerTo(navlist2, 0.1, {
                    autoAlpha: 0,
                    y: -10,
                    ease: Power3.easeInOut,
                }, 0.02);
            });
        });
    },
    mousewheel:function(){
        var sm=$('.secondmenu');
        if(sm.length){
            sm.mousewheel(function(event,delta,deltaX,deltaY){
                var dY=Math.ceil( $(this).position().top-deltaY*-120 );
                if(dY>0) dY=0;
                $(this).css({'transform':'translateY('+dY+'px)','transition':'0s'});
                event.stopPropagation();
                event.preventDefault();
            }).mouseleave(function(){
                $(this).removeAttr('style');
            });
        }
    },
    dropdown: function() {
        /*下拉菜单动画修复*/
        var dropdownSubmenu = METUI['head_nav_met_21_7'].find('.navlist .dropdown-submenu');
        dropdownSubmenu.hover(
            function() {
                $(this).parent('.dropdown-menu').addClass('overflow-visible');
            },
            function() {
                $(this).parent('.dropdown-menu').removeClass('overflow-visible');
            }
        );
    },
    cntotc: function() {
        //简体繁体互换
        var b = $('.head_nav_met_21_7 .btn-cntotc');
        b.on('click', function(event) {
            var lang = $(this).attr('data-tolang');
            if (lang == 'tc') {
                $('body').s2t();
                $(this).attr('data-tolang', 'cn');
                $(this).text('简体');
            } else if (lang == 'cn') {
                $('body').t2s();
                $(this).attr('data-tolang', 'tc');
                $(this).text('繁體');
            }
        });
    }
};
var x = new metui(METUI_FUN['head_nav_met_21_7']);

jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 5000,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.box-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.box-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.box-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.box-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .box-words-wrapper the width of its longest word
				var words = headline.find('.box-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.box-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.box-headline').hasClass('type')) {
			var parentSpan = $word.parent('.box-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.box-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.box-headline').hasClass('clip')) {
			$word.parents('.box-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.box-headline').hasClass('loading-bar')){
			$word.parents('.box-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.box-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.box-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.box-headline').hasClass('clip')) {
			$word.parents('.box-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.box-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.box-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});
$(window).load(function () {

    // preloader
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(550).css({
        'overflow': 'visible'
    });




    // back to top
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });

    // input
    $(".input-contact input, .textarea-contact textarea").focus(function () {
        $(this).next("span").addClass("active");
    });
    $(".input-contact input, .textarea-contact textarea").blur(function () {
        if ($(this).val() === "") {
            $(this).next("span").removeClass("active");
        }
    });
});
/*!
 * M['weburl']      网站网址
 * M['lang']        网站语言
 * M['tem']         模板目录路径
 * M['classnow']    当前栏目ID
 * M['id']          当前页面ID
 * M['module']      当前页面所属模块
 * default_placeholder 开发者自定义默认图片延迟加载方式，'base64'：灰色背景；自定义背景图片路径；'blur'：图片高斯模糊；默认为'blur'
 * met_prevarrow,met_nextarrow slick插件翻页按钮自定义html
 * device_type       客户端判断（d：PC端，t：平板端，m：手机端）
 */
METUI_FUN['banner_met_21_3'] = {
    name:'banner_met_21_3',
    init: function() {
        jQuery(document).ready(function($){
            var He = 0;
            for(var i = 0;i<$(".banner_met_21_3 .iscolor").length;i++){
                var Hec = $(".banner_met_21_3 .iscolor:eq("+i+")").height();
                    if(Hec>He){
                        He = Hec;
                    }
                var stris = $(".banner_met_21_3 .iscolor:eq("+i+")").attr("data-str");
                var strcolor = $(".banner_met_21_3 .iscolor:eq("+i+")").attr("data-color");
                for(var t = 0;t<$(".banner_met_21_3 .iscolor:eq("+i+")").children().length;t++){
                    var is = $(".banner_met_21_3 .iscolor:eq("+i+") i:eq("+t+") em").html();
                    if(stris.search(is) != -1){
                        $(".banner_met_21_3 .iscolor:eq("+i+") i:eq("+t+") em").css("color",strcolor);
                    }
                }
            }
            $(".banner_met_21_3 .box-words-wrapper").height(He);
        });
        var $metbanner=METUI['banner_met_21_3'],
        metbanner_slide='.banner_met_21_3 .slick-slide';
    if($metbanner.length){
        var img = METUI['banner_met_21_3'].find('.cover-image').eq(0);
       img.imageloadFun(function(){
            var slide = METUI['banner_met_21_3'].find('.slick-slide'),
                    bh = img.data('height').split('|');
                    for (var i = 0; i<bh.length;i++) {
                        if(bh[i]==0){
                            bh[i]='auto';
                        }
                    }
                Breakpoints.on('md lg', {
                    enter: function() {
                        METUI['banner_met_21_3'].find('.cover-image').height(bh[0]);
                    }
                })
                Breakpoints.on('sm', {
                    enter: function() {
                        METUI['banner_met_21_3'].find('.cover-image').height(bh[1]);
                    }
                })
                Breakpoints.on('xs', {
                    enter: function() {
                        METUI['banner_met_21_3'].find('.cover-image').height(bh[2]);
                    }
                })
            // 开始轮播
            var metbanner_swipe=slick_arrows=true;
            if(device_type=='d' && !Breakpoints.is('xs')) metbanner_swipe=false;
            if(Breakpoints.is('xs')) slick_arrows=false;
            if($(metbanner_slide).length>1){
                $metbanner.slick({
                    autoplay:true,
                    dots:true,
                    arrows:slick_arrows,
                    autoplaySpeed:4000,
                    swipe:metbanner_swipe,
                    prevArrow:met_prevarrow,
                    nextArrow:met_nextarrow,
                    pauseOnHover: false,
                    lazyLoad: 'ondemand',
                    cssEase: 'linear',
                }).on('setPosition',function(event,slick){
                    METUI['banner_met_21_3'].find('.cover-image').css('display', 'block');
                    $(metbanner_slide+' .banner-text').hide();
                    $(metbanner_slide+'.slick-active .banner-text').show();
                });
            }
        })
    }
    }
};
var banner=metui(METUI_FUN['banner_met_21_3']);



METUI_FUN['foot_nav_met_11_1'] = {
    name:'foot_nav_met_11_1',
    weixin: function() {
        var wx=METUI['foot_nav_met_11_1'].find('#met-weixin');
        if(wx.length){
        Breakpoints.on('xs',{
            enter:function(){
                if(wx.offset().left < 80) wx.attr({'data-placement':'right'});
                if($(window).width()-wx.offset().left-wx.outerWidth() < 80) wx.attr({'data-placement':'left'});
            }
        })
        if(wx.data('trigger')=='click'){
            wx.mouseup(function(){
                $(this).click();
            });
        }

        }

    },
    footnav:function(){
        var m=METUI['foot_nav_met_11_1'].find('.masonry-item');
        Breakpoints.get('xs').on({
            enter:function(){
                m.masonry({itemSelector:".masonry-item"});
            }
        });
    }
};
var x = new metui(METUI_FUN['foot_nav_met_11_1']);

METUI_FUN['foot_info_met_11_1'] = {
    name: 'foot_info_met_11_1',
    cntotc: function() {
        //简体繁体互换
        var b = $('.foot_info_met_11_1 .btn-cntotc');
        b.on('click', function(event) {
            var lang = $(this).attr('data-tolang');
            if (lang == 'tc') {
                $('body').s2t();
                $(this).attr('data-tolang', 'cn');
                $(this).text('简体');
            } else if (lang == 'cn') {
                $('body').t2s();
                $(this).attr('data-tolang', 'tc');
                $(this).text('繁體');
            }
        });
    }
};
var foot_info = new metui(METUI_FUN['foot_info_met_11_1']);


/*!
 * M['weburl']      网站网址
 * M['lang']        网站语言
 * M['tem']         模板目录路径
 * M['classnow']    当前栏目ID
 * M['id']          当前页面ID
 * M['module']      当前页面所属模块
 * default_placeholder 开发者自定义默认图片延迟加载方式，'base64'：灰色背景；自定义背景图片路径；'blur'：图片高斯模糊；默认为'blur'
 * met_prevarrow,met_nextarrow slick插件翻页按钮自定义html
 * device_type       客户端判断（d：PC端，t：平板端，m：手机端）
 */
METUI_FUN['back_top_met_16_1'] = {
    name:'back_top_met_16_1',
    totop: function() {
         $(".met-scroll-top").click(function(){
            $('html,body').animate({'scrollTop':0},300);
        });
        // 返回顶部按钮显示/隐藏
        $(window).scroll(function(){
            if($(this).scrollTop()>$(this).height()){
                $(".met-scroll-top").removeAttr('hidden').addClass("animation-slide-bottom");
            }else{
                $(".met-scroll-top").attr({hidden:''}).removeClass('animation-slide-bottom');
            }
        });
    }
};
var banner=metui(METUI_FUN['back_top_met_16_1']);

/*own.js*/
/*!
 * M['weburl']      网站网址
 * M['lang']        网站语言
 * M['tem']         模板目录路径
 * M['classnow']    当前栏目ID
 * M['id']          当前页面ID
 * M['module']      当前页面所属模块
 * default_placeholder 开发者自定义默认图片延迟加载方式，'base64'：灰色背景；自定义背景图片路径；'blur'：图片高斯模糊；默认为'blur'
 * met_prevarrow,met_nextarrow slick插件翻页按钮自定义html
 * device_type       客户端判断（d：PC端，t：平板端，m：手机端）
 */
METUI_FUN['subcolumn_nav_met_28_1'] = {
    name:'subcolumn_nav_met_28_1',
    init:function (){
        if(device_type!='d') $('body').wrapInner('<div class="cover"></div>');
        // 内页子栏目导航水平滚动
        var $metcolumn_nav=METUI['subcolumn_nav_met_28_1'].find('ul');
        if($metcolumn_nav.length){
            Breakpoints.on('xs',{
                enter:function(){
                    $metcolumn_nav.navtabSwiper();
                }
            })
        }
    }
};
var x = new metui(METUI_FUN['subcolumn_nav_met_28_1']);


