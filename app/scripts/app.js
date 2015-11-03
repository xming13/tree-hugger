/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},r=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},n=function(t,e,s){i.call(this,t,e,s),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=n.prototype.render},a=1e-10,o=i._internals,l=o.isSelector,h=o.isArray,_=n.prototype=i.to({},.1,{}),u=[];n.version="1.18.0",_.constructor=n,_.kill()._gc=!1,n.killTweensOf=n.killDelayedCallsTo=i.killTweensOf,n.getTweensOf=i.getTweensOf,n.lagSmoothing=i.lagSmoothing,n.ticker=i.ticker,n.render=i.render,_.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),i.prototype.invalidate.call(this)},_.updateTo=function(t,e){var s,r=this.ratio,n=this.vars.immediateRender||t.immediateRender;e&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(s in t)this.vars[s]=t[s];if(this._initted||n)if(e)this._initted=!1,n&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&i._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var a=this._time;this.render(0,!0,!1),this._initted=!1,this.render(a,!0,!1)}else if(this._time>0||n){this._initted=!1,this._init();for(var o,l=1/(1-r),h=this._firstPT;h;)o=h.s+h.c,h.c*=l,h.s=o-h.c,h=h._next}return this},_.render=function(t,e,i){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var s,r,n,l,h,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._time,m=this._totalTime,d=this._cycle,g=this._duration,v=this._rawPrevTime;if(t>=f?(this._totalTime=f,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=g,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===g&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>v||v===a)&&v!==t&&(i=!0,v>a&&(r="onReverseComplete")),this._rawPrevTime=c=!e||t||v===t?t:a)):1e-7>t?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==m||0===g&&v>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===g&&(this._initted||!this.vars.lazy||i)&&(v>=0&&(i=!0),this._rawPrevTime=c=!e||t||v===t?t:a)),this._initted||(i=!0)):(this._totalTime=this._time=t,0!==this._repeat&&(l=g+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=g-this._time),this._time>g?this._time=g:0>this._time&&(this._time=0)),this._easeType?(h=this._time/g,_=this._easeType,u=this._easePower,(1===_||3===_&&h>=.5)&&(h=1-h),3===_&&(h*=2),1===u?h*=h:2===u?h*=h*h:3===u?h*=h*h*h:4===u&&(h*=h*h*h*h),this.ratio=1===_?1-h:2===_?h:.5>this._time/g?h/2:1-h/2):this.ratio=this._ease.getRatio(this._time/g)),p===this._time&&!i&&d===this._cycle)return m!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=p,this._totalTime=m,this._rawPrevTime=v,this._cycle=d,o.lazyTweens.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/g):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==p&&t>=0&&(this._active=!0),0===m&&(2===this._initted&&t>0&&this._init(),this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===g)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&this._startTime&&this._startAt.render(t,e,i),e||(this._totalTime!==m||s)&&this._callback("onUpdate")),this._cycle!==d&&(e||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===g&&this._rawPrevTime===a&&c!==a&&(this._rawPrevTime=0))},n.to=function(t,e,i){return new n(t,e,i)},n.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new n(t,e,i)},n.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new n(t,e,s)},n.staggerTo=n.allTo=function(t,e,a,o,_,c,f){o=o||0;var p,m,d,g,v=a.delay||0,y=[],T=function(){a.onComplete&&a.onComplete.apply(a.onCompleteScope||this,arguments),_.apply(f||a.callbackScope||this,c||u)},x=a.cycle,w=a.startAt&&a.startAt.cycle;for(h(t)||("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=s(t))),t=t||[],0>o&&(t=s(t),t.reverse(),o*=-1),p=t.length-1,d=0;p>=d;d++){m={};for(g in a)m[g]=a[g];if(x&&r(m,t,d),w){w=m.startAt={};for(g in a.startAt)w[g]=a.startAt[g];r(m.startAt,t,d)}m.delay=v,d===p&&_&&(m.onComplete=T),y[d]=new n(t[d],e,m),v+=o}return y},n.staggerFrom=n.allFrom=function(t,e,i,s,r,a,o){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,n.staggerTo(t,e,i,s,r,a,o)},n.staggerFromTo=n.allFromTo=function(t,e,i,s,r,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,n.staggerTo(t,e,s,r,a,o,l)},n.delayedCall=function(t,e,i,s,r){return new n(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,useFrames:r,overwrite:0})},n.set=function(t,e){return new n(t,0,e)},n.isTweening=function(t){return i.getTweensOf(t,!0).length>0};var c=function(t,e){for(var s=[],r=0,n=t._first;n;)n instanceof i?s[r++]=n:(e&&(s[r++]=n),s=s.concat(c(n,e)),r=s.length),n=n._next;return s},f=n.getAllTweens=function(e){return c(t._rootTimeline,e).concat(c(t._rootFramesTimeline,e))};n.killAll=function(t,i,s,r){null==i&&(i=!0),null==s&&(s=!0);var n,a,o,l=f(0!=r),h=l.length,_=i&&s&&r;for(o=0;h>o;o++)a=l[o],(_||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&(t?a.totalTime(a._reversed?0:a.totalDuration()):a._enabled(!1,!1))},n.killChildTweensOf=function(t,e){if(null!=t){var r,a,_,u,c,f=o.tweenLookup;if("string"==typeof t&&(t=i.selector(t)||t),l(t)&&(t=s(t)),h(t))for(u=t.length;--u>-1;)n.killChildTweensOf(t[u],e);else{r=[];for(_ in f)for(a=f[_].target.parentNode;a;)a===t&&(r=r.concat(f[_].tweens)),a=a.parentNode;for(c=r.length,u=0;c>u;u++)e&&r[u].totalTime(r[u].totalDuration()),r[u]._enabled(!1,!1)}}};var p=function(t,i,s,r){i=i!==!1,s=s!==!1,r=r!==!1;for(var n,a,o=f(r),l=i&&s&&r,h=o.length;--h>-1;)a=o[h],(l||a instanceof e||(n=a.target===a.vars.onComplete)&&s||i&&!n)&&a.paused(t)};return n.pauseAll=function(t,e,i){p(!0,t,e,i)},n.resumeAll=function(t,e,i){p(!1,t,e,i)},n.globalTimeScale=function(e){var s=t._rootTimeline,r=i.ticker.time;return arguments.length?(e=e||a,s._startTime=r-(r-s._startTime)*s._timeScale/e,s=t._rootFramesTimeline,r=i.ticker.frame,s._startTime=r-(r-s._startTime)*s._timeScale/e,s._timeScale=t._rootTimeline._timeScale=e,e):s._timeScale},_.progress=function(t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},_.totalProgress=function(t){return arguments.length?this.totalTime(this.totalDuration()*t,!1):this._totalTime/this.totalDuration()},_.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},_.duration=function(e){return arguments.length?t.prototype.duration.call(this,e):this._duration},_.totalDuration=function(t){return arguments.length?-1===this._repeat?this:this.duration((t-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},_.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},_.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},_.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},n},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],l(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));l(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,l=n.isArray,h=n.lazyTweens,_=n.lazyRender,u=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},f=function(t,e,i){var s,r,n=t.cycle;for(s in n)r=n[s],t[s]="function"==typeof r?r.call(e[i],i):r[i%r.length];delete t.cycle},p=a.pauseCallback=function(){},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.18.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=d._hasPause=!1,d.to=function(t,e,s,r){var n=s.repeat&&u.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&u.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,l,h,_){var u,p,d=new s({onComplete:l,onCompleteParams:h,callbackScope:_,smoothChildTiming:this.smoothChildTiming}),g=r.cycle;for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),p=0;t.length>p;p++)u=c(r),u.startAt&&(u.startAt=c(u.startAt),u.startAt.cycle&&f(u.startAt,t,p)),g&&f(u,t,p),d.to(t[p],e,u,p*n);return this.add(d,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,l){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,l)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var h,_,u,c,f,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&l(r)){for(a=a||"normal",o=o||0,h=n,_=r.length,u=0;_>u;u++)l(c=r[u])&&(c=new s({tweens:c})),this.add(c,h),"string"!=typeof c&&"function"!=typeof c&&("sequence"===a?h=c._startTime+c.totalDuration()/c._timeScale:"start"===a&&(c._startTime-=c.delay())),h+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(f=this,p=f.rawTime()>r._startTime;f._timeline;)p&&f._timeline.smoothChildTiming?f.totalTime(f._totalTime,!0):f._gc&&f._enabled(!0,!1),f=f._timeline;return this},d.remove=function(e){if(e instanceof t){this._remove(e,!1);var i=e._timeline=e.vars.useFrames?t._rootFramesTimeline:t._rootTimeline;return e._startTime=(e._paused?e._pauseTime:i._time)-(e._reversed?e.totalDuration()-e._totalTime:e._totalTime)/e._timeScale,this}if(e instanceof Array||e&&e.push&&l(e)){for(var s=e.length;--s>-1;)this.remove(e[s]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,s,r||this);return n.vars.onComplete=n.vars.onReverseComplete=e,n.data="isPause",this._hasPause=!0,this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&l(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,l,u,c=this._dirty?this.totalDuration():this._totalDuration,f=this._time,p=this._startTime,m=this._timeScale,d=this._paused;if(t>=c)this._totalTime=this._time=c,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",l=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(l=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=c+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(l=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(l=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(l=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!e){if(t>=f)for(s=this._first;s&&t>=s._startTime&&!u;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(u=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!u;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(u=s),s=s._prev;u&&(this._time=t=u._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=t}if(this._time!==f&&this._first||i||l||u){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||d);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(u===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||d);){if(s._active||f>=s._startTime&&!s._paused&&!s._gc){if(u===s){for(u=s._prev;u&&u.endTime()>this._time;)u.render(u._reversed?u.totalDuration()-(t-u._startTime)*u._timeScale:(t-u._startTime)*u._timeScale,e,i),u=u._prev;u=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=a}this._onUpdate&&(e||(h.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(p===this._startTime||m!==this._timeScale)&&(0===this._time||c>=this.totalDuration())&&(n&&(h.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,n=e._internals,a=n.lazyTweens,o=n.lazyRender,l=new i(null,null,1,0),h=s.prototype=new t;return h.constructor=s,h.kill()._gc=!1,s.version="1.18.0",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},h.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},h.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},h.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},h.tweenTo=function(t,i){i=i||{};var s,r,n,a={ease:l,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)a[r]=i[r];return a.time=this._parseTimeOrLabel(t),s=Math.abs(Number(a.time)-this._time)/this._timeScale||.001,n=new e(this,s,a),a.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&n._callback("onStart")},n},h.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],callbackScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},h.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,l,h,_,u,c,f=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,m=this._time,d=this._totalTime,g=this._startTime,v=this._timeScale,y=this._rawPrevTime,T=this._paused,x=this._cycle;if(t>=f)this._locked||(this._totalTime=f,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,h="onComplete",_=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(_=!0,y>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=p,t=p+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==m||0===p&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(h="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(_=n=!0,h="onReverseComplete"):y>=0&&this._first&&(_=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=p||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(_=!0)}else if(0===p&&0>y&&(_=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=p+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,t=p+1e-4):0>this._time?this._time=t=0:t=this._time)),this._hasPause&&!this._forcingPlayhead&&!e){if(t=this._time,t>=m)for(s=this._first;s&&t>=s._startTime&&!c;)s._duration||"isPause"!==s.data||s.ratio||0===s._startTime&&0===this._rawPrevTime||(c=s),s=s._next;else for(s=this._last;s&&s._startTime>=t&&!c;)s._duration||"isPause"===s.data&&s._rawPrevTime>0&&(c=s),s=s._prev;c&&(this._time=t=c._startTime,this._totalTime=t+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==x&&!this._locked){var w=this._yoyo&&0!==(1&x),b=w===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,k=this._cycle,S=this._rawPrevTime,R=this._time;if(this._totalTime=x*p,x>this._cycle?w=!w:this._totalTime+=p,this._time=m,this._rawPrevTime=0===p?y-1e-4:y,this._cycle=x,this._locked=!0,m=w?0:p,this.render(m,e,0===p),e||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),b&&(m=w?p+1e-4:-1e-4,this.render(m,!0,!1)),this._locked=!1,this._paused&&!T)return;this._time=R,this._totalTime=P,this._cycle=k,this._rawPrevTime=S}if(!(this._time!==m&&this._first||i||_||c))return d!==this._totalTime&&this._onUpdate&&(e||this._callback("onUpdate")),void 0;if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._totalTime&&(e||this._callback("onStart")),this._time>=m)for(s=this._first;s&&(l=s._next,!this._paused||T);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(c===s&&this.pause(),s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=l;else for(s=this._last;s&&(l=s._prev,!this._paused||T);){if(s._active||m>=s._startTime&&!s._paused&&!s._gc){if(c===s){for(c=s._prev;c&&c.endTime()>this._time;)c.render(c._reversed?c.totalDuration()-(t-c._startTime)*c._timeScale:(t-c._startTime)*c._timeScale,e,i),c=c._prev;c=null,this.pause()}s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)}s=l}this._onUpdate&&(e||(a.length&&o(),this._callback("onUpdate"))),h&&(this._locked||this._gc||(g===this._startTime||v!==this._timeScale)&&(0===this._time||f>=this.totalDuration())&&(n&&(a.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this._callback(h)))},h.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,n=[],a=this.getChildren(t,e,i),o=0,l=a.length;for(s=0;l>s;s++)r=a[s],r.isActive()&&(n[o++]=r);return n},h.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},h.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},h.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},h.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},h.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},h.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},h.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},h.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},h.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},h.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),function(){var t=180/Math.PI,e=[],i=[],s=[],r={},n=_gsScope._gsDefine.globals,a=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},o=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",l=function(t,e,i,s){var r={a:t},n={},a={},o={c:s},l=(t+e)/2,h=(e+i)/2,_=(i+s)/2,u=(l+h)/2,c=(h+_)/2,f=(c-u)/8;return r.b=l+(t-l)/4,n.b=u+f,r.c=n.a=(r.b+n.b)/2,n.c=a.a=(u+c)/2,a.b=c-f,o.b=_+(s-_)/4,a.c=o.a=(a.b+o.b)/2,[r,n,a,o]},h=function(t,r,n,a,o){var h,_,u,c,f,p,m,d,g,v,y,T,x,w=t.length-1,b=0,P=t[0].a;for(h=0;w>h;h++)f=t[b],_=f.a,u=f.d,c=t[b+1].d,o?(y=e[h],T=i[h],x=.25*(T+y)*r/(a?.5:s[h]||.5),p=u-(u-_)*(a?.5*r:0!==y?x/y:0),m=u+(c-u)*(a?.5*r:0!==T?x/T:0),d=u-(p+((m-p)*(3*y/(y+T)+.5)/4||0))):(p=u-.5*(u-_)*r,m=u+.5*(c-u)*r,d=u-(p+m)/2),p+=d,m+=d,f.c=g=p,f.b=0!==h?P:P=f.a+.6*(f.c-f.a),f.da=u-_,f.ca=g-_,f.ba=P-_,n?(v=l(_,P,g,u),t.splice(b,1,v[0],v[1],v[2],v[3]),b+=4):b++,P=m;f=t[b],f.b=P,f.c=P+.4*(f.d-P),f.da=f.d-f.a,f.ca=f.c-f.a,f.ba=P-f.a,n&&(v=l(f.a,P,f.c,f.d),t.splice(b,1,v[0],v[1],v[2],v[3]))},_=function(t,s,r,n){var o,l,h,_,u,c,f=[];if(n)for(t=[n].concat(t),l=t.length;--l>-1;)"string"==typeof(c=t[l][s])&&"="===c.charAt(1)&&(t[l][s]=n[s]+Number(c.charAt(0)+c.substr(2)));if(o=t.length-2,0>o)return f[0]=new a(t[0][s],0,0,t[-1>o?0:1][s]),f;for(l=0;o>l;l++)h=t[l][s],_=t[l+1][s],f[l]=new a(h,0,0,_),r&&(u=t[l+2][s],e[l]=(e[l]||0)+(_-h)*(_-h),i[l]=(i[l]||0)+(u-_)*(u-_));return f[l]=new a(t[l][s],0,0,t[l+1][s]),f},u=function(t,n,a,l,u,c){var f,p,m,d,g,v,y,T,x={},w=[],b=c||t[0];u="string"==typeof u?","+u+",":o,null==n&&(n=1);for(p in t[0])w.push(p);if(t.length>1){for(T=t[t.length-1],y=!0,f=w.length;--f>-1;)if(p=w[f],Math.abs(b[p]-T[p])>.05){y=!1;break}y&&(t=t.concat(),c&&t.unshift(c),t.push(t[1]),c=t[t.length-3])}for(e.length=i.length=s.length=0,f=w.length;--f>-1;)p=w[f],r[p]=-1!==u.indexOf(","+p+","),x[p]=_(t,p,r[p],c);for(f=e.length;--f>-1;)e[f]=Math.sqrt(e[f]),i[f]=Math.sqrt(i[f]);if(!l){for(f=w.length;--f>-1;)if(r[p])for(m=x[w[f]],v=m.length-1,d=0;v>d;d++)g=m[d+1].da/i[d]+m[d].da/e[d],s[d]=(s[d]||0)+g*g;for(f=s.length;--f>-1;)s[f]=Math.sqrt(s[f])}for(f=w.length,d=a?4:1;--f>-1;)p=w[f],m=x[p],h(m,n,a,l,r[p]),y&&(m.splice(0,d),m.splice(m.length-d,d));return x},c=function(t,e,i){e=e||"soft";var s,r,n,o,l,h,_,u,c,f,p,m={},d="cubic"===e?3:2,g="soft"===e,v=[];if(g&&i&&(t=[i].concat(t)),null==t||d+1>t.length)throw"invalid Bezier data";for(c in t[0])v.push(c);for(h=v.length;--h>-1;){for(c=v[h],m[c]=l=[],f=0,u=t.length,_=0;u>_;_++)s=null==i?t[_][c]:"string"==typeof(p=t[_][c])&&"="===p.charAt(1)?i[c]+Number(p.charAt(0)+p.substr(2)):Number(p),g&&_>1&&u-1>_&&(l[f++]=(s+l[f-2])/2),l[f++]=s;for(u=f-d+1,f=0,_=0;u>_;_+=d)s=l[_],r=l[_+1],n=l[_+2],o=2===d?0:l[_+3],l[f++]=p=3===d?new a(s,r,n,o):new a(s,(2*r+s)/3,(2*r+n)/3,n);l.length=f}return m},f=function(t,e,i){for(var s,r,n,a,o,l,h,_,u,c,f,p=1/i,m=t.length;--m>-1;)for(c=t[m],n=c.a,a=c.d-n,o=c.c-n,l=c.b-n,s=r=0,_=1;i>=_;_++)h=p*_,u=1-h,s=r-(r=(h*h*a+3*u*(h*o+u*l))*h),f=m*i+_-1,e[f]=(e[f]||0)+s*s},p=function(t,e){e=e>>0||6;var i,s,r,n,a=[],o=[],l=0,h=0,_=e-1,u=[],c=[];for(i in t)f(t[i],a,e);for(r=a.length,s=0;r>s;s++)l+=Math.sqrt(a[s]),n=s%e,c[n]=l,n===_&&(h+=l,n=s/e>>0,u[n]=c,o[n]=h,l=0,c=[]);return{length:h,lengths:o,segments:u}},m=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,r,n,a,o,l=e.values||[],h={},_=l[0],f=e.autoRotate||i.vars.orientToBezier;this._autoRotate=f?f instanceof Array?f:[["x","y","rotation",f===!0?0:Number(f)||0]]:null;
for(s in _)this._props.push(s);for(n=this._props.length;--n>-1;)s=this._props[n],this._overwriteProps.push(s),r=this._func[s]="function"==typeof t[s],h[s]=r?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),o||h[s]!==l[0][s]&&(o=h);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?u(l,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,o):c(l,e.type,h),this._segCount=this._beziers[s].length,this._timeRes){var m=p(this._beziers,this._timeRes);this._length=m.length,this._lengths=m.lengths,this._segments=m.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(f=this._autoRotate)for(this._initialRotations=[],f[0]instanceof Array||(this._autoRotate=f=[f]),n=f.length;--n>-1;){for(a=0;3>a;a++)s=f[n][a],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=f[n][2],this._initialRotations[n]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,r,n,a,o,l,h,_,u,c=this._segCount,f=this._func,p=this._target,m=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,u=this._curSeg,e*=this._length,r=this._li,e>this._l2&&c-1>r){for(h=c-1;h>r&&e>=(this._l2=_[++r]););this._l1=_[r-1],this._li=r,this._curSeg=u=this._segments[r],this._s2=u[this._s1=this._si=0]}else if(this._l1>e&&r>0){for(;r>0&&(this._l1=_[--r])>=e;);0===r&&this._l1>e?this._l1=0:r++,this._l2=_[r],this._li=r,this._curSeg=u=this._segments[r],this._s1=u[(this._si=u.length-1)-1]||0,this._s2=u[this._si]}if(i=r,e-=this._l1,r=this._si,e>this._s2&&u.length-1>r){for(h=u.length-1;h>r&&e>=(this._s2=u[++r]););this._s1=u[r-1],this._si=r}else if(this._s1>e&&r>0){for(;r>0&&(this._s1=u[--r])>=e;);0===r&&this._s1>e?this._s1=0:r++,this._s2=u[r],this._si=r}o=(r+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?c-1:c*e>>0,o=(e-i*(1/c))*c;for(s=1-o,r=this._props.length;--r>-1;)n=this._props[r],a=this._beziers[n][i],l=(o*o*a.da+3*s*(o*a.ca+s*a.ba))*o+a.a,this._round[n]&&(l=Math.round(l)),f[n]?p[n](l):p[n]=l;if(this._autoRotate){var d,g,v,y,T,x,w,b=this._autoRotate;for(r=b.length;--r>-1;)n=b[r][2],x=b[r][3]||0,w=b[r][4]===!0?1:t,a=this._beziers[b[r][0]],d=this._beziers[b[r][1]],a&&d&&(a=a[i],d=d[i],g=a.a+(a.b-a.a)*o,y=a.b+(a.c-a.b)*o,g+=(y-g)*o,y+=(a.c+(a.d-a.c)*o-y)*o,v=d.a+(d.b-d.a)*o,T=d.b+(d.c-d.b)*o,v+=(T-v)*o,T+=(d.c+(d.d-d.c)*o-T)*o,l=m?Math.atan2(T-v,y-g)*w+x:this._initialRotations[r],f[n]?p[n](l):p[n]=l)}}}),d=m.prototype;m.bezierThrough=u,m.cubicToQuadratic=l,m._autoCSS=!0,m.quadraticToCubic=function(t,e,i){return new a(t,(2*e+t)/3,(2*e+i)/3,i)},m._cssRegister=function(){var t=n.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,n,a,o,l){e instanceof Array&&(e={values:e}),l=new m;var h,_,u,c=e.values,f=c.length-1,p=[],d={};if(0>f)return o;for(h=0;f>=h;h++)u=i(t,c[h],a,o,l,f!==h),p[h]=u.end;for(_ in e)d[_]=e[_];return d.values=p,o=new r(t,"bezier",0,0,u.pt,2),o.data=u,o.plugin=l,o.setRatio=s,0===d.autoRotate&&(d.autoRotate=!0),!d.autoRotate||d.autoRotate instanceof Array||(h=d.autoRotate===!0?0:Number(d.autoRotate),d.autoRotate=null!=u.end.left?[["left","top","rotation",h,!1]]:null!=u.end.x?[["x","y","rotation",h,!1]]:!1),d.autoRotate&&(a._transform||a._enableTransforms(!1),u.autoRotate=a._target._gsTransform),l._onInitTween(u.proxy,d,a._tween),o}})}},d._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},d._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(t,e){var i,s,r,n,a=function(){t.call(this,"css"),this._overwriteProps.length=0,this.setRatio=a.prototype.setRatio},o=_gsScope._gsDefine.globals,l={},h=a.prototype=new t("css");h.constructor=a,a.version="1.18.0",a.API=2,a.defaultTransformPerspective=0,a.defaultSkewType="compensated",a.defaultSmoothOrigin=!0,h="px",a.suffixMap={top:h,right:h,bottom:h,left:h,width:h,height:h,fontSize:h,padding:h,margin:h,perspective:h,lineHeight:""};var _,u,c,f,p,m,d=/(?:\d|\-\d|\.\d|\-\.\d)+/g,g=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,y=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,T=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,b=/alpha\(opacity *=.+?\)/i,P=/^(rgb|hsl)/,k=/([A-Z])/g,S=/-([a-z])/gi,R=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,O=function(t,e){return e.toUpperCase()},A=/(?:Left|Right|Width)/i,C=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,D=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,M=/,(?=[^\)]*(?:\(|$))/gi,z=Math.PI/180,F=180/Math.PI,I={},E=document,N=function(t){return E.createElementNS?E.createElementNS("http://www.w3.org/1999/xhtml",t):E.createElement(t)},L=N("div"),X=N("img"),B=a._internals={_specialProps:l},j=navigator.userAgent,Y=function(){var t=j.indexOf("Android"),e=N("a");return c=-1!==j.indexOf("Safari")&&-1===j.indexOf("Chrome")&&(-1===t||Number(j.substr(t+8,1))>3),p=c&&6>Number(j.substr(j.indexOf("Version/")+8,1)),f=-1!==j.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(j)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(j))&&(m=parseFloat(RegExp.$1)),e?(e.style.cssText="top:1px;opacity:.55;",/^0.55/.test(e.style.opacity)):!1}(),U=function(t){return x.test("string"==typeof t?t:(t.currentStyle?t.currentStyle.filter:t.style.filter)||"")?parseFloat(RegExp.$1)/100:1},q=function(t){window.console&&console.log(t)},V="",G="",W=function(t,e){e=e||L;var i,s,r=e.style;if(void 0!==r[t])return t;for(t=t.charAt(0).toUpperCase()+t.substr(1),i=["O","Moz","ms","Ms","Webkit"],s=5;--s>-1&&void 0===r[i[s]+t];);return s>=0?(G=3===s?"ms":i[s],V="-"+G.toLowerCase()+"-",G+t):null},Z=E.defaultView?E.defaultView.getComputedStyle:function(){},Q=a.getStyle=function(t,e,i,s,r){var n;return Y||"opacity"!==e?(!s&&t.style[e]?n=t.style[e]:(i=i||Z(t))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(k,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),null==r||n&&"none"!==n&&"auto"!==n&&"auto auto"!==n?n:r):U(t)},$=B.convertToPixels=function(t,i,s,r,n){if("px"===r||!r)return s;if("auto"===r||!s)return 0;var o,l,h,_=A.test(i),u=t,c=L.style,f=0>s;if(f&&(s=-s),"%"===r&&-1!==i.indexOf("border"))o=s/100*(_?t.clientWidth:t.clientHeight);else{if(c.cssText="border:0 solid red;position:"+Q(t,"position")+";line-height:0;","%"!==r&&u.appendChild&&"v"!==r.charAt(0)&&"rem"!==r)c[_?"borderLeftWidth":"borderTopWidth"]=s+r;else{if(u=t.parentNode||E.body,l=u._gsCache,h=e.ticker.frame,l&&_&&l.time===h)return l.width*s/100;c[_?"width":"height"]=s+r}u.appendChild(L),o=parseFloat(L[_?"offsetWidth":"offsetHeight"]),u.removeChild(L),_&&"%"===r&&a.cacheWidths!==!1&&(l=u._gsCache=u._gsCache||{},l.time=h,l.width=100*(o/s)),0!==o||n||(o=$(t,i,s,r,!0))}return f?-o:o},H=B.calculateOffset=function(t,e,i){if("absolute"!==Q(t,"position",i))return 0;var s="left"===e?"Left":"Top",r=Q(t,"margin"+s,i);return t["offset"+s]-($(t,e,parseFloat(r),r.replace(T,""))||0)},K=function(t,e){var i,s,r,n={};if(e=e||Z(t,null))if(i=e.length)for(;--i>-1;)r=e[i],(-1===r.indexOf("-transform")||ke===r)&&(n[r.replace(S,O)]=e.getPropertyValue(r));else for(i in e)(-1===i.indexOf("Transform")||Pe===i)&&(n[i]=e[i]);else if(e=t.currentStyle||t.style)for(i in e)"string"==typeof i&&void 0===n[i]&&(n[i.replace(S,O)]=e[i]);return Y||(n.opacity=U(t)),s=Ne(t,e,!1),n.rotation=s.rotation,n.skewX=s.skewX,n.scaleX=s.scaleX,n.scaleY=s.scaleY,n.x=s.x,n.y=s.y,Re&&(n.z=s.z,n.rotationX=s.rotationX,n.rotationY=s.rotationY,n.scaleZ=s.scaleZ),n.filters&&delete n.filters,n},J=function(t,e,i,s,r){var n,a,o,l={},h=t.style;for(a in i)"cssText"!==a&&"length"!==a&&isNaN(a)&&(e[a]!==(n=i[a])||r&&r[a])&&-1===a.indexOf("Origin")&&("number"==typeof n||"string"==typeof n)&&(l[a]="auto"!==n||"left"!==a&&"top"!==a?""!==n&&"auto"!==n&&"none"!==n||"string"!=typeof e[a]||""===e[a].replace(y,"")?n:0:H(t,a),void 0!==h[a]&&(o=new pe(h,a,h[a],o)));if(s)for(a in s)"className"!==a&&(l[a]=s[a]);return{difs:l,firstMPT:o}},te={width:["Left","Right"],height:["Top","Bottom"]},ee=["marginLeft","marginRight","marginTop","marginBottom"],ie=function(t,e,i){var s=parseFloat("width"===e?t.offsetWidth:t.offsetHeight),r=te[e],n=r.length;for(i=i||Z(t,null);--n>-1;)s-=parseFloat(Q(t,"padding"+r[n],i,!0))||0,s-=parseFloat(Q(t,"border"+r[n]+"Width",i,!0))||0;return s},se=function(t,e){if("contain"===t||"auto"===t||"auto auto"===t)return t+" ";(null==t||""===t)&&(t="0 0");var i=t.split(" "),s=-1!==t.indexOf("left")?"0%":-1!==t.indexOf("right")?"100%":i[0],r=-1!==t.indexOf("top")?"0%":-1!==t.indexOf("bottom")?"100%":i[1];return null==r?r="center"===s?"50%":"0":"center"===r&&(r="50%"),("center"===s||isNaN(parseFloat(s))&&-1===(s+"").indexOf("="))&&(s="50%"),t=s+" "+r+(i.length>2?" "+i[2]:""),e&&(e.oxp=-1!==s.indexOf("%"),e.oyp=-1!==r.indexOf("%"),e.oxr="="===s.charAt(1),e.oyr="="===r.charAt(1),e.ox=parseFloat(s.replace(y,"")),e.oy=parseFloat(r.replace(y,"")),e.v=t),e||t},re=function(t,e){return"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2)):parseFloat(t)-parseFloat(e)},ne=function(t,e){return null==t?e:"string"==typeof t&&"="===t.charAt(1)?parseInt(t.charAt(0)+"1",10)*parseFloat(t.substr(2))+e:parseFloat(t)},ae=function(t,e,i,s){var r,n,a,o,l,h=1e-6;return null==t?o=e:"number"==typeof t?o=t:(r=360,n=t.split("_"),l="="===t.charAt(1),a=(l?parseInt(t.charAt(0)+"1",10)*parseFloat(n[0].substr(2)):parseFloat(n[0]))*(-1===t.indexOf("rad")?1:F)-(l?0:e),n.length&&(s&&(s[i]=e+a),-1!==t.indexOf("short")&&(a%=r,a!==a%(r/2)&&(a=0>a?a+r:a-r)),-1!==t.indexOf("_cw")&&0>a?a=(a+9999999999*r)%r-(0|a/r)*r:-1!==t.indexOf("ccw")&&a>0&&(a=(a-9999999999*r)%r-(0|a/r)*r)),o=e+a),h>o&&o>-h&&(o=0),o},oe={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},le=function(t,e,i){return t=0>t?t+1:t>1?t-1:t,0|255*(1>6*t?e+6*(i-e)*t:.5>t?i:2>3*t?e+6*(i-e)*(2/3-t):e)+.5},he=a.parseColor=function(t,e){var i,s,r,n,a,o,l,h,_,u,c;if(t)if("number"==typeof t)i=[t>>16,255&t>>8,255&t];else{if(","===t.charAt(t.length-1)&&(t=t.substr(0,t.length-1)),oe[t])i=oe[t];else if("#"===t.charAt(0))4===t.length&&(s=t.charAt(1),r=t.charAt(2),n=t.charAt(3),t="#"+s+s+r+r+n+n),t=parseInt(t.substr(1),16),i=[t>>16,255&t>>8,255&t];else if("hsl"===t.substr(0,3))if(i=c=t.match(d),e){if(-1!==t.indexOf("="))return t.match(g)}else a=Number(i[0])%360/360,o=Number(i[1])/100,l=Number(i[2])/100,r=.5>=l?l*(o+1):l+o-l*o,s=2*l-r,i.length>3&&(i[3]=Number(t[3])),i[0]=le(a+1/3,s,r),i[1]=le(a,s,r),i[2]=le(a-1/3,s,r);else i=t.match(d)||oe.transparent;i[0]=Number(i[0]),i[1]=Number(i[1]),i[2]=Number(i[2]),i.length>3&&(i[3]=Number(i[3]))}else i=oe.black;return e&&!c&&(s=i[0]/255,r=i[1]/255,n=i[2]/255,h=Math.max(s,r,n),_=Math.min(s,r,n),l=(h+_)/2,h===_?a=o=0:(u=h-_,o=l>.5?u/(2-h-_):u/(h+_),a=h===s?(r-n)/u+(n>r?6:0):h===r?(n-s)/u+2:(s-r)/u+4,a*=60),i[0]=0|a+.5,i[1]=0|100*o+.5,i[2]=0|100*l+.5),i},_e=function(t,e){var i,s,r,n=t.match(ue)||[],a=0,o=n.length?"":t;for(i=0;n.length>i;i++)s=n[i],r=t.substr(a,t.indexOf(s,a)-a),a+=r.length+s.length,s=he(s,e),3===s.length&&s.push(1),o+=r+(e?"hsla("+s[0]+","+s[1]+"%,"+s[2]+"%,"+s[3]:"rgba("+s.join(","))+")";return o},ue="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";for(h in oe)ue+="|"+h+"\\b";ue=RegExp(ue+")","gi"),a.colorStringFilter=function(t){var e,i=t[0]+t[1];ue.lastIndex=0,ue.test(i)&&(e=-1!==i.indexOf("hsl(")||-1!==i.indexOf("hsla("),t[0]=_e(t[0],e),t[1]=_e(t[1],e))},e.defaultStringFilter||(e.defaultStringFilter=a.colorStringFilter);var ce=function(t,e,i,s){if(null==t)return function(t){return t};var r,n=e?(t.match(ue)||[""])[0]:"",a=t.split(n).join("").match(v)||[],o=t.substr(0,t.indexOf(a[0])),l=")"===t.charAt(t.length-1)?")":"",h=-1!==t.indexOf(" ")?" ":",",_=a.length,u=_>0?a[0].replace(d,""):"";return _?r=e?function(t){var e,c,f,p;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(p=t.replace(M,"|").split("|"),f=0;p.length>f;f++)p[f]=r(p[f]);return p.join(",")}if(e=(t.match(ue)||[n])[0],c=t.split(e).join("").match(v)||[],f=c.length,_>f--)for(;_>++f;)c[f]=i?c[0|(f-1)/2]:a[f];return o+c.join(h)+h+e+l+(-1!==t.indexOf("inset")?" inset":"")}:function(t){var e,n,c;if("number"==typeof t)t+=u;else if(s&&M.test(t)){for(n=t.replace(M,"|").split("|"),c=0;n.length>c;c++)n[c]=r(n[c]);return n.join(",")}if(e=t.match(v)||[],c=e.length,_>c--)for(;_>++c;)e[c]=i?e[0|(c-1)/2]:a[c];return o+e.join(h)+l}:function(t){return t}},fe=function(t){return t=t.split(","),function(e,i,s,r,n,a,o){var l,h=(i+"").split(" ");for(o={},l=0;4>l;l++)o[t[l]]=h[l]=h[l]||h[(l-1)/2>>0];return r.parse(e,o,n,a)}},pe=(B._setPluginRatio=function(t){this.plugin.setRatio(t);for(var e,i,s,r,n=this.data,a=n.proxy,o=n.firstMPT,l=1e-6;o;)e=a[o.v],o.r?e=Math.round(e):l>e&&e>-l&&(e=0),o.t[o.p]=e,o=o._next;if(n.autoRotate&&(n.autoRotate.rotation=a.rotation),1===t)for(o=n.firstMPT;o;){if(i=o.t,i.type){if(1===i.type){for(r=i.xs0+i.s+i.xs1,s=1;i.l>s;s++)r+=i["xn"+s]+i["xs"+(s+1)];i.e=r}}else i.e=i.s+i.xs0;o=o._next}},function(t,e,i,s,r){this.t=t,this.p=e,this.v=i,this.r=r,s&&(s._prev=this,this._next=s)}),me=(B._parseToProxy=function(t,e,i,s,r,n){var a,o,l,h,_,u=s,c={},f={},p=i._transform,m=I;for(i._transform=null,I=e,s=_=i.parse(t,e,s,r),I=m,n&&(i._transform=p,u&&(u._prev=null,u._prev&&(u._prev._next=null)));s&&s!==u;){if(1>=s.type&&(o=s.p,f[o]=s.s+s.c,c[o]=s.s,n||(h=new pe(s,"s",o,h,s.r),s.c=0),1===s.type))for(a=s.l;--a>0;)l="xn"+a,o=s.p+"_"+l,f[o]=s.data[l],c[o]=s[l],n||(h=new pe(s,l,o,h,s.rxp[l]));s=s._next}return{proxy:c,end:f,firstMPT:h,pt:_}},B.CSSPropTween=function(t,e,s,r,a,o,l,h,_,u,c){this.t=t,this.p=e,this.s=s,this.c=r,this.n=l||e,t instanceof me||n.push(this.n),this.r=h,this.type=o||0,_&&(this.pr=_,i=!0),this.b=void 0===u?s:u,this.e=void 0===c?s+r:c,a&&(this._next=a,a._prev=this)}),de=function(t,e,i,s,r,n){var a=new me(t,e,i,s-i,r,-1,n);return a.b=i,a.e=a.xs0=s,a},ge=a.parseComplex=function(t,e,i,s,r,n,a,o,l,h){i=i||n||"",a=new me(t,e,0,0,a,h?2:1,null,!1,o,i,s),s+="";var u,c,f,p,m,v,y,T,x,w,b,P,k,S=i.split(", ").join(",").split(" "),R=s.split(", ").join(",").split(" "),O=S.length,A=_!==!1;for((-1!==s.indexOf(",")||-1!==i.indexOf(","))&&(S=S.join(" ").replace(M,", ").split(" "),R=R.join(" ").replace(M,", ").split(" "),O=S.length),O!==R.length&&(S=(n||"").split(" "),O=S.length),a.plugin=l,a.setRatio=h,ue.lastIndex=0,u=0;O>u;u++)if(p=S[u],m=R[u],T=parseFloat(p),T||0===T)a.appendXtra("",T,re(m,T),m.replace(g,""),A&&-1!==m.indexOf("px"),!0);else if(r&&ue.test(p))P=","===m.charAt(m.length-1)?"),":")",k=-1!==m.indexOf("hsl")&&Y,p=he(p,k),m=he(m,k),x=p.length+m.length>6,x&&!Y&&0===m[3]?(a["xs"+a.l]+=a.l?" transparent":"transparent",a.e=a.e.split(R[u]).join("transparent")):(Y||(x=!1),k?a.appendXtra(x?"hsla(":"hsl(",p[0],re(m[0],p[0]),",",!1,!0).appendXtra("",p[1],re(m[1],p[1]),"%,",!1).appendXtra("",p[2],re(m[2],p[2]),x?"%,":"%"+P,!1):a.appendXtra(x?"rgba(":"rgb(",p[0],m[0]-p[0],",",!0,!0).appendXtra("",p[1],m[1]-p[1],",",!0).appendXtra("",p[2],m[2]-p[2],x?",":P,!0),x&&(p=4>p.length?1:p[3],a.appendXtra("",p,(4>m.length?1:m[3])-p,P,!1))),ue.lastIndex=0;else if(v=p.match(d)){if(y=m.match(g),!y||y.length!==v.length)return a;for(f=0,c=0;v.length>c;c++)b=v[c],w=p.indexOf(b,f),a.appendXtra(p.substr(f,w-f),Number(b),re(y[c],b),"",A&&"px"===p.substr(w+b.length,2),0===c),f=w+b.length;a["xs"+a.l]+=p.substr(f)}else a["xs"+a.l]+=a.l?" "+p:p;if(-1!==s.indexOf("=")&&a.data){for(P=a.xs0+a.data.s,u=1;a.l>u;u++)P+=a["xs"+u]+a.data["xn"+u];a.e=P+a["xs"+u]}return a.l||(a.type=-1,a.xs0=a.e),a.xfirst||a},ve=9;for(h=me.prototype,h.l=h.pr=0;--ve>0;)h["xn"+ve]=0,h["xs"+ve]="";h.xs0="",h._next=h._prev=h.xfirst=h.data=h.plugin=h.setRatio=h.rxp=null,h.appendXtra=function(t,e,i,s,r,n){var a=this,o=a.l;return a["xs"+o]+=n&&o?" "+t:t||"",i||0===o||a.plugin?(a.l++,a.type=a.setRatio?2:1,a["xs"+a.l]=s||"",o>0?(a.data["xn"+o]=e+i,a.rxp["xn"+o]=r,a["xn"+o]=e,a.plugin||(a.xfirst=new me(a,"xn"+o,e,i,a.xfirst||a,0,a.n,r,a.pr),a.xfirst.xs0=0),a):(a.data={s:e+i},a.rxp={},a.s=e,a.c=i,a.r=r,a)):(a["xs"+o]+=e+(s||""),a)};var ye=function(t,e){e=e||{},this.p=e.prefix?W(t)||t:t,l[t]=l[this.p]=this,this.format=e.formatter||ce(e.defaultValue,e.color,e.collapsible,e.multi),e.parser&&(this.parse=e.parser),this.clrs=e.color,this.multi=e.multi,this.keyword=e.keyword,this.dflt=e.defaultValue,this.pr=e.priority||0},Te=B._registerComplexSpecialProp=function(t,e,i){"object"!=typeof e&&(e={parser:i});var s,r,n=t.split(","),a=e.defaultValue;for(i=i||[a],s=0;n.length>s;s++)e.prefix=0===s&&e.prefix,e.defaultValue=i[s]||a,r=new ye(n[s],e)},xe=function(t){if(!l[t]){var e=t.charAt(0).toUpperCase()+t.substr(1)+"Plugin";Te(t,{parser:function(t,i,s,r,n,a,h){var _=o.com.greensock.plugins[e];return _?(_._cssRegister(),l[s].parse(t,i,s,r,n,a,h)):(q("Error: "+e+" js file not loaded."),n)}})}};h=ye.prototype,h.parseComplex=function(t,e,i,s,r,n){var a,o,l,h,_,u,c=this.keyword;if(this.multi&&(M.test(i)||M.test(e)?(o=e.replace(M,"|").split("|"),l=i.replace(M,"|").split("|")):c&&(o=[e],l=[i])),l){for(h=l.length>o.length?l.length:o.length,a=0;h>a;a++)e=o[a]=o[a]||this.dflt,i=l[a]=l[a]||this.dflt,c&&(_=e.indexOf(c),u=i.indexOf(c),_!==u&&(-1===u?o[a]=o[a].split(c).join(""):-1===_&&(o[a]+=" "+c)));e=o.join(", "),i=l.join(", ")}return ge(t,this.p,e,i,this.clrs,this.dflt,s,this.pr,r,n)},h.parse=function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,this.p,r,!1,this.dflt)),this.format(e),n,a)},a.registerSpecialProp=function(t,e,i){Te(t,{parser:function(t,s,r,n,a,o){var l=new me(t,r,0,0,a,2,r,!1,i);return l.plugin=o,l.setRatio=e(t,s,n._tween,r),l},priority:i})},a.useSVGTransformAttr=c||f;var we,be="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Pe=W("transform"),ke=V+"transform",Se=W("transformOrigin"),Re=null!==W("perspective"),Oe=B.Transform=function(){this.perspective=parseFloat(a.defaultTransformPerspective)||0,this.force3D=a.defaultForce3D!==!1&&Re?a.defaultForce3D||"auto":!1},Ae=window.SVGElement,Ce=function(t,e,i){var s,r=E.createElementNS("http://www.w3.org/2000/svg",t),n=/([a-z])([A-Z])/g;for(s in i)r.setAttributeNS(null,s.replace(n,"$1-$2").toLowerCase(),i[s]);return e.appendChild(r),r},De=E.documentElement,Me=function(){var t,e,i,s=m||/Android/i.test(j)&&!window.chrome;return E.createElementNS&&!s&&(t=Ce("svg",De),e=Ce("rect",t,{width:100,height:50,x:100}),i=e.getBoundingClientRect().width,e.style[Se]="50% 50%",e.style[Pe]="scaleX(0.5)",s=i===e.getBoundingClientRect().width&&!(f&&Re),De.removeChild(t)),s}(),ze=function(t,e,i,s,r){var n,o,l,h,_,u,c,f,p,m,d,g,v,y,T=t._gsTransform,x=Ee(t,!0);T&&(v=T.xOrigin,y=T.yOrigin),(!s||2>(n=s.split(" ")).length)&&(c=t.getBBox(),e=se(e).split(" "),n=[(-1!==e[0].indexOf("%")?parseFloat(e[0])/100*c.width:parseFloat(e[0]))+c.x,(-1!==e[1].indexOf("%")?parseFloat(e[1])/100*c.height:parseFloat(e[1]))+c.y]),i.xOrigin=h=parseFloat(n[0]),i.yOrigin=_=parseFloat(n[1]),s&&x!==Ie&&(u=x[0],c=x[1],f=x[2],p=x[3],m=x[4],d=x[5],g=u*p-c*f,o=h*(p/g)+_*(-f/g)+(f*d-p*m)/g,l=h*(-c/g)+_*(u/g)-(u*d-c*m)/g,h=i.xOrigin=n[0]=o,_=i.yOrigin=n[1]=l),T&&(r||r!==!1&&a.defaultSmoothOrigin!==!1?(o=h-v,l=_-y,T.xOffset+=o*x[0]+l*x[2]-o,T.yOffset+=o*x[1]+l*x[3]-l):T.xOffset=T.yOffset=0),t.setAttribute("data-svg-origin",n.join(" "))},Fe=function(t){return!!(Ae&&"function"==typeof t.getBBox&&t.getCTM&&(!t.parentNode||t.parentNode.getBBox&&t.parentNode.getCTM))},Ie=[1,0,0,1,0,0],Ee=function(t,e){var i,s,r,n,a,o=t._gsTransform||new Oe,l=1e5;if(Pe?s=Q(t,ke,null,!0):t.currentStyle&&(s=t.currentStyle.filter.match(C),s=s&&4===s.length?[s[0].substr(4),Number(s[2].substr(4)),Number(s[1].substr(4)),s[3].substr(4),o.x||0,o.y||0].join(","):""),i=!s||"none"===s||"matrix(1, 0, 0, 1, 0, 0)"===s,(o.svg||t.getBBox&&Fe(t))&&(i&&-1!==(t.style[Pe]+"").indexOf("matrix")&&(s=t.style[Pe],i=0),r=t.getAttribute("transform"),i&&r&&(-1!==r.indexOf("matrix")?(s=r,i=0):-1!==r.indexOf("translate")&&(s="matrix(1,0,0,1,"+r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",i=0))),i)return Ie;for(r=(s||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],ve=r.length;--ve>-1;)n=Number(r[ve]),r[ve]=(a=n-(n|=0))?(0|a*l+(0>a?-.5:.5))/l+n:n;return e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r},Ne=B.getTransform=function(t,i,s,n){if(t._gsTransform&&s&&!n)return t._gsTransform;var o,l,h,_,u,c,f=s?t._gsTransform||new Oe:new Oe,p=0>f.scaleX,m=2e-5,d=1e5,g=Re?parseFloat(Q(t,Se,i,!1,"0 0 0").split(" ")[2])||f.zOrigin||0:0,v=parseFloat(a.defaultTransformPerspective)||0;if(f.svg=!(!t.getBBox||!Fe(t)),f.svg&&(ze(t,Q(t,Se,r,!1,"50% 50%")+"",f,t.getAttribute("data-svg-origin")),we=a.useSVGTransformAttr||Me),o=Ee(t),o!==Ie){if(16===o.length){var y,T,x,w,b,P=o[0],k=o[1],S=o[2],R=o[3],O=o[4],A=o[5],C=o[6],D=o[7],M=o[8],z=o[9],I=o[10],E=o[12],N=o[13],L=o[14],X=o[11],B=Math.atan2(C,I);f.zOrigin&&(L=-f.zOrigin,E=M*L-o[12],N=z*L-o[13],L=I*L+f.zOrigin-o[14]),f.rotationX=B*F,B&&(w=Math.cos(-B),b=Math.sin(-B),y=O*w+M*b,T=A*w+z*b,x=C*w+I*b,M=O*-b+M*w,z=A*-b+z*w,I=C*-b+I*w,X=D*-b+X*w,O=y,A=T,C=x),B=Math.atan2(M,I),f.rotationY=B*F,B&&(w=Math.cos(-B),b=Math.sin(-B),y=P*w-M*b,T=k*w-z*b,x=S*w-I*b,z=k*b+z*w,I=S*b+I*w,X=R*b+X*w,P=y,k=T,S=x),B=Math.atan2(k,P),f.rotation=B*F,B&&(w=Math.cos(-B),b=Math.sin(-B),P=P*w+O*b,T=k*w+A*b,A=k*-b+A*w,C=S*-b+C*w,k=T),f.rotationX&&Math.abs(f.rotationX)+Math.abs(f.rotation)>359.9&&(f.rotationX=f.rotation=0,f.rotationY+=180),f.scaleX=(0|Math.sqrt(P*P+k*k)*d+.5)/d,f.scaleY=(0|Math.sqrt(A*A+z*z)*d+.5)/d,f.scaleZ=(0|Math.sqrt(C*C+I*I)*d+.5)/d,f.skewX=0,f.perspective=X?1/(0>X?-X:X):0,f.x=E,f.y=N,f.z=L,f.svg&&(f.x-=f.xOrigin-(f.xOrigin*P-f.yOrigin*O),f.y-=f.yOrigin-(f.yOrigin*k-f.xOrigin*A))}else if(!(Re&&!n&&o.length&&f.x===o[4]&&f.y===o[5]&&(f.rotationX||f.rotationY)||void 0!==f.x&&"none"===Q(t,"display",i))){var j=o.length>=6,Y=j?o[0]:1,U=o[1]||0,q=o[2]||0,V=j?o[3]:1;f.x=o[4]||0,f.y=o[5]||0,h=Math.sqrt(Y*Y+U*U),_=Math.sqrt(V*V+q*q),u=Y||U?Math.atan2(U,Y)*F:f.rotation||0,c=q||V?Math.atan2(q,V)*F+u:f.skewX||0,Math.abs(c)>90&&270>Math.abs(c)&&(p?(h*=-1,c+=0>=u?180:-180,u+=0>=u?180:-180):(_*=-1,c+=0>=c?180:-180)),f.scaleX=h,f.scaleY=_,f.rotation=u,f.skewX=c,Re&&(f.rotationX=f.rotationY=f.z=0,f.perspective=v,f.scaleZ=1),f.svg&&(f.x-=f.xOrigin-(f.xOrigin*Y+f.yOrigin*q),f.y-=f.yOrigin-(f.xOrigin*U+f.yOrigin*V))}f.zOrigin=g;for(l in f)m>f[l]&&f[l]>-m&&(f[l]=0)}return s&&(t._gsTransform=f,f.svg&&(we&&t.style[Pe]?e.delayedCall(.001,function(){je(t.style,Pe)}):!we&&t.getAttribute("transform")&&e.delayedCall(.001,function(){t.removeAttribute("transform")}))),f},Le=function(t){var e,i,s=this.data,r=-s.rotation*z,n=r+s.skewX*z,a=1e5,o=(0|Math.cos(r)*s.scaleX*a)/a,l=(0|Math.sin(r)*s.scaleX*a)/a,h=(0|Math.sin(n)*-s.scaleY*a)/a,_=(0|Math.cos(n)*s.scaleY*a)/a,u=this.t.style,c=this.t.currentStyle;if(c){i=l,l=-h,h=-i,e=c.filter,u.filter="";var f,p,d=this.t.offsetWidth,g=this.t.offsetHeight,v="absolute"!==c.position,y="progid:DXImageTransform.Microsoft.Matrix(M11="+o+", M12="+l+", M21="+h+", M22="+_,w=s.x+d*s.xPercent/100,b=s.y+g*s.yPercent/100;if(null!=s.ox&&(f=(s.oxp?.01*d*s.ox:s.ox)-d/2,p=(s.oyp?.01*g*s.oy:s.oy)-g/2,w+=f-(f*o+p*l),b+=p-(f*h+p*_)),v?(f=d/2,p=g/2,y+=", Dx="+(f-(f*o+p*l)+w)+", Dy="+(p-(f*h+p*_)+b)+")"):y+=", sizingMethod='auto expand')",u.filter=-1!==e.indexOf("DXImageTransform.Microsoft.Matrix(")?e.replace(D,y):y+" "+e,(0===t||1===t)&&1===o&&0===l&&0===h&&1===_&&(v&&-1===y.indexOf("Dx=0, Dy=0")||x.test(e)&&100!==parseFloat(RegExp.$1)||-1===e.indexOf("gradient("&&e.indexOf("Alpha"))&&u.removeAttribute("filter")),!v){var P,k,S,R=8>m?1:-1;for(f=s.ieOffsetX||0,p=s.ieOffsetY||0,s.ieOffsetX=Math.round((d-((0>o?-o:o)*d+(0>l?-l:l)*g))/2+w),s.ieOffsetY=Math.round((g-((0>_?-_:_)*g+(0>h?-h:h)*d))/2+b),ve=0;4>ve;ve++)k=ee[ve],P=c[k],i=-1!==P.indexOf("px")?parseFloat(P):$(this.t,k,parseFloat(P),P.replace(T,""))||0,S=i!==s[k]?2>ve?-s.ieOffsetX:-s.ieOffsetY:2>ve?f-s.ieOffsetX:p-s.ieOffsetY,u[k]=(s[k]=Math.round(i-S*(0===ve||2===ve?1:R)))+"px"}}},Xe=B.set3DTransformRatio=B.setTransformRatio=function(t){var e,i,s,r,n,a,o,l,h,_,u,c,p,m,d,g,v,y,T,x,w,b,P,k=this.data,S=this.t.style,R=k.rotation,O=k.rotationX,A=k.rotationY,C=k.scaleX,D=k.scaleY,M=k.scaleZ,F=k.x,I=k.y,E=k.z,N=k.svg,L=k.perspective,X=k.force3D;if(!(((1!==t&&0!==t||"auto"!==X||this.tween._totalTime!==this.tween._totalDuration&&this.tween._totalTime)&&X||E||L||A||O)&&(!we||!N)&&Re))return R||k.skewX||N?(R*=z,b=k.skewX*z,P=1e5,e=Math.cos(R)*C,r=Math.sin(R)*C,i=Math.sin(R-b)*-D,n=Math.cos(R-b)*D,b&&"simple"===k.skewType&&(v=Math.tan(b),v=Math.sqrt(1+v*v),i*=v,n*=v,k.skewY&&(e*=v,r*=v)),N&&(F+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,I+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset,we&&(k.xPercent||k.yPercent)&&(m=this.t.getBBox(),F+=.01*k.xPercent*m.width,I+=.01*k.yPercent*m.height),m=1e-6,m>F&&F>-m&&(F=0),m>I&&I>-m&&(I=0)),T=(0|e*P)/P+","+(0|r*P)/P+","+(0|i*P)/P+","+(0|n*P)/P+","+F+","+I+")",N&&we?this.t.setAttribute("transform","matrix("+T):S[Pe]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+T):S[Pe]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix(":"matrix(")+C+",0,0,"+D+","+F+","+I+")",void 0;if(f&&(m=1e-4,m>C&&C>-m&&(C=M=2e-5),m>D&&D>-m&&(D=M=2e-5),!L||k.z||k.rotationX||k.rotationY||(L=0)),R||k.skewX)R*=z,d=e=Math.cos(R),g=r=Math.sin(R),k.skewX&&(R-=k.skewX*z,d=Math.cos(R),g=Math.sin(R),"simple"===k.skewType&&(v=Math.tan(k.skewX*z),v=Math.sqrt(1+v*v),d*=v,g*=v,k.skewY&&(e*=v,r*=v))),i=-g,n=d;else{if(!(A||O||1!==M||L||N))return S[Pe]=(k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) translate3d(":"translate3d(")+F+"px,"+I+"px,"+E+"px)"+(1!==C||1!==D?" scale("+C+","+D+")":""),void 0;e=n=1,i=r=0}h=1,s=a=o=l=_=u=0,c=L?-1/L:0,p=k.zOrigin,m=1e-6,x=",",w="0",R=A*z,R&&(d=Math.cos(R),g=Math.sin(R),o=-g,_=c*-g,s=e*g,a=r*g,h=d,c*=d,e*=d,r*=d),R=O*z,R&&(d=Math.cos(R),g=Math.sin(R),v=i*d+s*g,y=n*d+a*g,l=h*g,u=c*g,s=i*-g+s*d,a=n*-g+a*d,h*=d,c*=d,i=v,n=y),1!==M&&(s*=M,a*=M,h*=M,c*=M),1!==D&&(i*=D,n*=D,l*=D,u*=D),1!==C&&(e*=C,r*=C,o*=C,_*=C),(p||N)&&(p&&(F+=s*-p,I+=a*-p,E+=h*-p+p),N&&(F+=k.xOrigin-(k.xOrigin*e+k.yOrigin*i)+k.xOffset,I+=k.yOrigin-(k.xOrigin*r+k.yOrigin*n)+k.yOffset),m>F&&F>-m&&(F=w),m>I&&I>-m&&(I=w),m>E&&E>-m&&(E=0)),T=k.xPercent||k.yPercent?"translate("+k.xPercent+"%,"+k.yPercent+"%) matrix3d(":"matrix3d(",T+=(m>e&&e>-m?w:e)+x+(m>r&&r>-m?w:r)+x+(m>o&&o>-m?w:o),T+=x+(m>_&&_>-m?w:_)+x+(m>i&&i>-m?w:i)+x+(m>n&&n>-m?w:n),O||A?(T+=x+(m>l&&l>-m?w:l)+x+(m>u&&u>-m?w:u)+x+(m>s&&s>-m?w:s),T+=x+(m>a&&a>-m?w:a)+x+(m>h&&h>-m?w:h)+x+(m>c&&c>-m?w:c)+x):T+=",0,0,0,0,1,0,",T+=F+x+I+x+E+x+(L?1+-E/L:1)+")",S[Pe]=T};h=Oe.prototype,h.x=h.y=h.z=h.skewX=h.skewY=h.rotation=h.rotationX=h.rotationY=h.zOrigin=h.xPercent=h.yPercent=h.xOffset=h.yOffset=0,h.scaleX=h.scaleY=h.scaleZ=1,Te("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(t,e,i,s,n,o,l){if(s._lastParsedTransform===l)return n;s._lastParsedTransform=l;var h,_,u,c,f,p,m,d,g,v,y=t._gsTransform,T=t.style,x=1e-6,w=be.length,b=l,P={},k="transformOrigin";if(l.display?(c=Q(t,"display"),T.display="block",h=Ne(t,r,!0,l.parseTransform),T.display=c):h=Ne(t,r,!0,l.parseTransform),s._transform=h,"string"==typeof b.transform&&Pe)c=L.style,c[Pe]=b.transform,c.display="block",c.position="absolute",E.body.appendChild(L),_=Ne(L,null,!1),E.body.removeChild(L),_.perspective||(_.perspective=h.perspective),null!=b.xPercent&&(_.xPercent=ne(b.xPercent,h.xPercent)),null!=b.yPercent&&(_.yPercent=ne(b.yPercent,h.yPercent));else if("object"==typeof b){if(_={scaleX:ne(null!=b.scaleX?b.scaleX:b.scale,h.scaleX),scaleY:ne(null!=b.scaleY?b.scaleY:b.scale,h.scaleY),scaleZ:ne(b.scaleZ,h.scaleZ),x:ne(b.x,h.x),y:ne(b.y,h.y),z:ne(b.z,h.z),xPercent:ne(b.xPercent,h.xPercent),yPercent:ne(b.yPercent,h.yPercent),perspective:ne(b.transformPerspective,h.perspective)},d=b.directionalRotation,null!=d)if("object"==typeof d)for(c in d)b[c]=d[c];else b.rotation=d;"string"==typeof b.x&&-1!==b.x.indexOf("%")&&(_.x=0,_.xPercent=ne(b.x,h.xPercent)),"string"==typeof b.y&&-1!==b.y.indexOf("%")&&(_.y=0,_.yPercent=ne(b.y,h.yPercent)),_.rotation=ae("rotation"in b?b.rotation:"shortRotation"in b?b.shortRotation+"_short":"rotationZ"in b?b.rotationZ:h.rotation,h.rotation,"rotation",P),Re&&(_.rotationX=ae("rotationX"in b?b.rotationX:"shortRotationX"in b?b.shortRotationX+"_short":h.rotationX||0,h.rotationX,"rotationX",P),_.rotationY=ae("rotationY"in b?b.rotationY:"shortRotationY"in b?b.shortRotationY+"_short":h.rotationY||0,h.rotationY,"rotationY",P)),_.skewX=null==b.skewX?h.skewX:ae(b.skewX,h.skewX),_.skewY=null==b.skewY?h.skewY:ae(b.skewY,h.skewY),(u=_.skewY-h.skewY)&&(_.skewX+=u,_.rotation+=u)}for(Re&&null!=b.force3D&&(h.force3D=b.force3D,m=!0),h.skewType=b.skewType||h.skewType||a.defaultSkewType,p=h.force3D||h.z||h.rotationX||h.rotationY||_.z||_.rotationX||_.rotationY||_.perspective,p||null==b.scale||(_.scaleZ=1);--w>-1;)i=be[w],f=_[i]-h[i],(f>x||-x>f||null!=b[i]||null!=I[i])&&(m=!0,n=new me(h,i,h[i],f,n),i in P&&(n.e=P[i]),n.xs0=0,n.plugin=o,s._overwriteProps.push(n.n));return f=b.transformOrigin,h.svg&&(f||b.svgOrigin)&&(g=h.xOffset,v=h.yOffset,ze(t,se(f),_,b.svgOrigin,b.smoothOrigin),n=de(h,"xOrigin",(y?h:_).xOrigin,_.xOrigin,n,k),n=de(h,"yOrigin",(y?h:_).yOrigin,_.yOrigin,n,k),(g!==h.xOffset||v!==h.yOffset)&&(n=de(h,"xOffset",y?g:h.xOffset,h.xOffset,n,k),n=de(h,"yOffset",y?v:h.yOffset,h.yOffset,n,k)),f=we?null:"0px 0px"),(f||Re&&p&&h.zOrigin)&&(Pe?(m=!0,i=Se,f=(f||Q(t,i,r,!1,"50% 50%"))+"",n=new me(T,i,0,0,n,-1,k),n.b=T[i],n.plugin=o,Re?(c=h.zOrigin,f=f.split(" "),h.zOrigin=(f.length>2&&(0===c||"0px"!==f[2])?parseFloat(f[2]):c)||0,n.xs0=n.e=f[0]+" "+(f[1]||"50%")+" 0px",n=new me(h,"zOrigin",0,0,n,-1,n.n),n.b=c,n.xs0=n.e=h.zOrigin):n.xs0=n.e=f):se(f+"",h)),m&&(s._transformType=h.svg&&we||!p&&3!==this._transformType?2:3),n},prefix:!0}),Te("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Te("borderRadius",{defaultValue:"0px",parser:function(t,e,i,n,a){e=this.format(e);var o,l,h,_,u,c,f,p,m,d,g,v,y,T,x,w,b=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],P=t.style;for(m=parseFloat(t.offsetWidth),d=parseFloat(t.offsetHeight),o=e.split(" "),l=0;b.length>l;l++)this.p.indexOf("border")&&(b[l]=W(b[l])),u=_=Q(t,b[l],r,!1,"0px"),-1!==u.indexOf(" ")&&(_=u.split(" "),u=_[0],_=_[1]),c=h=o[l],f=parseFloat(u),v=u.substr((f+"").length),y="="===c.charAt(1),y?(p=parseInt(c.charAt(0)+"1",10),c=c.substr(2),p*=parseFloat(c),g=c.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(c),g=c.substr((p+"").length)),""===g&&(g=s[i]||v),g!==v&&(T=$(t,"borderLeft",f,v),x=$(t,"borderTop",f,v),"%"===g?(u=100*(T/m)+"%",_=100*(x/d)+"%"):"em"===g?(w=$(t,"borderLeft",1,"em"),u=T/w+"em",_=x/w+"em"):(u=T+"px",_=x+"px"),y&&(c=parseFloat(u)+p+g,h=parseFloat(_)+p+g)),a=ge(P,b[l],u+" "+_,c+" "+h,!1,"0px",a);return a},prefix:!0,formatter:ce("0px 0px 0px 0px",!1,!0)}),Te("backgroundPosition",{defaultValue:"0 0",parser:function(t,e,i,s,n,a){var o,l,h,_,u,c,f="background-position",p=r||Z(t,null),d=this.format((p?m?p.getPropertyValue(f+"-x")+" "+p.getPropertyValue(f+"-y"):p.getPropertyValue(f):t.currentStyle.backgroundPositionX+" "+t.currentStyle.backgroundPositionY)||"0 0"),g=this.format(e);
if(-1!==d.indexOf("%")!=(-1!==g.indexOf("%"))&&(c=Q(t,"backgroundImage").replace(R,""),c&&"none"!==c)){for(o=d.split(" "),l=g.split(" "),X.setAttribute("src",c),h=2;--h>-1;)d=o[h],_=-1!==d.indexOf("%"),_!==(-1!==l[h].indexOf("%"))&&(u=0===h?t.offsetWidth-X.width:t.offsetHeight-X.height,o[h]=_?parseFloat(d)/100*u+"px":100*(parseFloat(d)/u)+"%");d=o.join(" ")}return this.parseComplex(t.style,d,g,n,a)},formatter:se}),Te("backgroundSize",{defaultValue:"0 0",formatter:se}),Te("perspective",{defaultValue:"0px",prefix:!0}),Te("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Te("transformStyle",{prefix:!0}),Te("backfaceVisibility",{prefix:!0}),Te("userSelect",{prefix:!0}),Te("margin",{parser:fe("marginTop,marginRight,marginBottom,marginLeft")}),Te("padding",{parser:fe("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Te("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(t,e,i,s,n,a){var o,l,h;return 9>m?(l=t.currentStyle,h=8>m?" ":",",o="rect("+l.clipTop+h+l.clipRight+h+l.clipBottom+h+l.clipLeft+")",e=this.format(e).split(",").join(h)):(o=this.format(Q(t,this.p,r,!1,this.dflt)),e=this.format(e)),this.parseComplex(t.style,o,e,n,a)}}),Te("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Te("autoRound,strictUnits",{parser:function(t,e,i,s,r){return r}}),Te("border",{defaultValue:"0px solid #000",parser:function(t,e,i,s,n,a){return this.parseComplex(t.style,this.format(Q(t,"borderTopWidth",r,!1,"0px")+" "+Q(t,"borderTopStyle",r,!1,"solid")+" "+Q(t,"borderTopColor",r,!1,"#000")),this.format(e),n,a)},color:!0,formatter:function(t){var e=t.split(" ");return e[0]+" "+(e[1]||"solid")+" "+(t.match(ue)||["#000"])[0]}}),Te("borderWidth",{parser:fe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Te("float,cssFloat,styleFloat",{parser:function(t,e,i,s,r){var n=t.style,a="cssFloat"in n?"cssFloat":"styleFloat";return new me(n,a,0,0,r,-1,i,!1,0,n[a],e)}});var Be=function(t){var e,i=this.t,s=i.filter||Q(this.data,"filter")||"",r=0|this.s+this.c*t;100===r&&(-1===s.indexOf("atrix(")&&-1===s.indexOf("radient(")&&-1===s.indexOf("oader(")?(i.removeAttribute("filter"),e=!Q(this.data,"filter")):(i.filter=s.replace(b,""),e=!0)),e||(this.xn1&&(i.filter=s=s||"alpha(opacity="+r+")"),-1===s.indexOf("pacity")?0===r&&this.xn1||(i.filter=s+" alpha(opacity="+r+")"):i.filter=s.replace(x,"opacity="+r))};Te("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(t,e,i,s,n,a){var o=parseFloat(Q(t,"opacity",r,!1,"1")),l=t.style,h="autoAlpha"===i;return"string"==typeof e&&"="===e.charAt(1)&&(e=("-"===e.charAt(0)?-1:1)*parseFloat(e.substr(2))+o),h&&1===o&&"hidden"===Q(t,"visibility",r)&&0!==e&&(o=0),Y?n=new me(l,"opacity",o,e-o,n):(n=new me(l,"opacity",100*o,100*(e-o),n),n.xn1=h?1:0,l.zoom=1,n.type=2,n.b="alpha(opacity="+n.s+")",n.e="alpha(opacity="+(n.s+n.c)+")",n.data=t,n.plugin=a,n.setRatio=Be),h&&(n=new me(l,"visibility",0,0,n,-1,null,!1,0,0!==o?"inherit":"hidden",0===e?"hidden":"inherit"),n.xs0="inherit",s._overwriteProps.push(n.n),s._overwriteProps.push(i)),n}});var je=function(t,e){e&&(t.removeProperty?(("ms"===e.substr(0,2)||"webkit"===e.substr(0,6))&&(e="-"+e),t.removeProperty(e.replace(k,"-$1").toLowerCase())):t.removeAttribute(e))},Ye=function(t){if(this.t._gsClassPT=this,1===t||0===t){this.t.setAttribute("class",0===t?this.b:this.e);for(var e=this.data,i=this.t.style;e;)e.v?i[e.p]=e.v:je(i,e.p),e=e._next;1===t&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};Te("className",{parser:function(t,e,s,n,a,o,l){var h,_,u,c,f,p=t.getAttribute("class")||"",m=t.style.cssText;if(a=n._classNamePT=new me(t,s,0,0,a,2),a.setRatio=Ye,a.pr=-11,i=!0,a.b=p,_=K(t,r),u=t._gsClassPT){for(c={},f=u.data;f;)c[f.p]=1,f=f._next;u.setRatio(1)}return t._gsClassPT=a,a.e="="!==e.charAt(1)?e:p.replace(RegExp("\\s*\\b"+e.substr(2)+"\\b"),"")+("+"===e.charAt(0)?" "+e.substr(2):""),t.setAttribute("class",a.e),h=J(t,_,K(t),l,c),t.setAttribute("class",p),a.data=h.firstMPT,t.style.cssText=m,a=a.xfirst=n.parse(t,h.difs,a,o)}});var Ue=function(t){if((1===t||0===t)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var e,i,s,r,n,a=this.t.style,o=l.transform.parse;if("all"===this.e)a.cssText="",r=!0;else for(e=this.e.split(" ").join("").split(","),s=e.length;--s>-1;)i=e[s],l[i]&&(l[i].parse===o?r=!0:i="transformOrigin"===i?Se:l[i].p),je(a,i);r&&(je(a,Pe),n=this.t._gsTransform,n&&(n.svg&&this.t.removeAttribute("data-svg-origin"),delete this.t._gsTransform))}};for(Te("clearProps",{parser:function(t,e,s,r,n){return n=new me(t,s,0,0,n,2),n.setRatio=Ue,n.e=e,n.pr=-10,n.data=r._tween,i=!0,n}}),h="bezier,throwProps,physicsProps,physics2D".split(","),ve=h.length;ve--;)xe(h[ve]);h=a.prototype,h._firstPT=h._lastParsedTransform=h._transform=null,h._onInitTween=function(t,e,o){if(!t.nodeType)return!1;this._target=t,this._tween=o,this._vars=e,_=e.autoRound,i=!1,s=e.suffixMap||a.suffixMap,r=Z(t,""),n=this._overwriteProps;var h,f,m,d,g,v,y,T,x,b=t.style;if(u&&""===b.zIndex&&(h=Q(t,"zIndex",r),("auto"===h||""===h)&&this._addLazySet(b,"zIndex",0)),"string"==typeof e&&(d=b.cssText,h=K(t,r),b.cssText=d+";"+e,h=J(t,h,K(t)).difs,!Y&&w.test(e)&&(h.opacity=parseFloat(RegExp.$1)),e=h,b.cssText=d),this._firstPT=f=e.className?l.className.parse(t,e.className,"className",this,null,null,e):this.parse(t,e,null),this._transformType){for(x=3===this._transformType,Pe?c&&(u=!0,""===b.zIndex&&(y=Q(t,"zIndex",r),("auto"===y||""===y)&&this._addLazySet(b,"zIndex",0)),p&&this._addLazySet(b,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(x?"visible":"hidden"))):b.zoom=1,m=f;m&&m._next;)m=m._next;T=new me(t,"transform",0,0,null,2),this._linkCSSP(T,null,m),T.setRatio=Pe?Xe:Le,T.data=this._transform||Ne(t,r,!0),T.tween=o,T.pr=-1,n.pop()}if(i){for(;f;){for(v=f._next,m=d;m&&m.pr>f.pr;)m=m._next;(f._prev=m?m._prev:g)?f._prev._next=f:d=f,(f._next=m)?m._prev=f:g=f,f=v}this._firstPT=d}return!0},h.parse=function(t,e,i,n){var a,o,h,u,c,f,p,m,d,g,v=t.style;for(a in e)f=e[a],o=l[a],o?i=o.parse(t,f,a,this,i,n,e):(c=Q(t,a,r)+"",d="string"==typeof f,"color"===a||"fill"===a||"stroke"===a||-1!==a.indexOf("Color")||d&&P.test(f)?(d||(f=he(f),f=(f.length>3?"rgba(":"rgb(")+f.join(",")+")"),i=ge(v,a,c,f,!0,"transparent",i,0,n)):!d||-1===f.indexOf(" ")&&-1===f.indexOf(",")?(h=parseFloat(c),p=h||0===h?c.substr((h+"").length):"",(""===c||"auto"===c)&&("width"===a||"height"===a?(h=ie(t,a,r),p="px"):"left"===a||"top"===a?(h=H(t,a,r),p="px"):(h="opacity"!==a?0:1,p="")),g=d&&"="===f.charAt(1),g?(u=parseInt(f.charAt(0)+"1",10),f=f.substr(2),u*=parseFloat(f),m=f.replace(T,"")):(u=parseFloat(f),m=d?f.replace(T,""):""),""===m&&(m=a in s?s[a]:p),f=u||0===u?(g?u+h:u)+m:e[a],p!==m&&""!==m&&(u||0===u)&&h&&(h=$(t,a,h,p),"%"===m?(h/=$(t,a,100,"%")/100,e.strictUnits!==!0&&(c=h+"%")):"em"===m||"rem"===m?h/=$(t,a,1,m):"px"!==m&&(u=$(t,a,u,m),m="px"),g&&(u||0===u)&&(f=u+h+m)),g&&(u+=h),!h&&0!==h||!u&&0!==u?void 0!==v[a]&&(f||"NaN"!=f+""&&null!=f)?(i=new me(v,a,u||h||0,0,i,-1,a,!1,0,c,f),i.xs0="none"!==f||"display"!==a&&-1===a.indexOf("Style")?f:c):q("invalid "+a+" tween value: "+e[a]):(i=new me(v,a,h,u-h,i,0,a,_!==!1&&("px"===m||"zIndex"===a),0,c,f),i.xs0=m)):i=ge(v,a,c,f,!0,null,i,0,n)),n&&i&&!i.plugin&&(i.plugin=n);return i},h.setRatio=function(t){var e,i,s,r=this._firstPT,n=1e-6;if(1!==t||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(t||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;r;){if(e=r.c*t+r.s,r.r?e=Math.round(e):n>e&&e>-n&&(e=0),r.type)if(1===r.type)if(s=r.l,2===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2;else if(3===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3;else if(4===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4;else if(5===s)r.t[r.p]=r.xs0+e+r.xs1+r.xn1+r.xs2+r.xn2+r.xs3+r.xn3+r.xs4+r.xn4+r.xs5;else{for(i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}else-1===r.type?r.t[r.p]=r.xs0:r.setRatio&&r.setRatio(t);else r.t[r.p]=e+r.xs0;r=r._next}else for(;r;)2!==r.type?r.t[r.p]=r.b:r.setRatio(t),r=r._next;else for(;r;){if(2!==r.type)if(r.r&&-1!==r.type)if(e=Math.round(r.s+r.c),r.type){if(1===r.type){for(s=r.l,i=r.xs0+e+r.xs1,s=1;r.l>s;s++)i+=r["xn"+s]+r["xs"+(s+1)];r.t[r.p]=i}}else r.t[r.p]=e+r.xs0;else r.t[r.p]=r.e;else r.setRatio(t);r=r._next}},h._enableTransforms=function(t){this._transform=this._transform||Ne(this._target,r,!0),this._transformType=this._transform.svg&&we||!t&&3!==this._transformType?2:3};var qe=function(){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};h._addLazySet=function(t,e,i){var s=this._firstPT=new me(t,e,0,0,this._firstPT,2);s.e=i,s.setRatio=qe,s.data=this},h._linkCSSP=function(t,e,i,s){return t&&(e&&(e._prev=t),t._next&&(t._next._prev=t._prev),t._prev?t._prev._next=t._next:this._firstPT===t&&(this._firstPT=t._next,s=!0),i?i._next=t:s||null!==this._firstPT||(this._firstPT=t),t._next=e,t._prev=i),t},h._kill=function(e){var i,s,r,n=e;if(e.autoAlpha||e.alpha){n={};for(s in e)n[s]=e[s];n.opacity=1,n.autoAlpha&&(n.visibility=1)}return e.className&&(i=this._classNamePT)&&(r=i.xfirst,r&&r._prev?this._linkCSSP(r._prev,i._next,r._prev._prev):r===this._firstPT&&(this._firstPT=i._next),i._next&&this._linkCSSP(i._next,i._next._next,r._prev),this._classNamePT=null),t.prototype._kill.call(this,n)};var Ve=function(t,e,i){var s,r,n,a;if(t.slice)for(r=t.length;--r>-1;)Ve(t[r],e,i);else for(s=t.childNodes,r=s.length;--r>-1;)n=s[r],a=n.type,n.style&&(e.push(K(n)),i&&i.push(n)),1!==a&&9!==a&&11!==a||!n.childNodes.length||Ve(n,e,i)};return a.cascadeTo=function(t,i,s){var r,n,a,o,l=e.to(t,i,s),h=[l],_=[],u=[],c=[],f=e._internals.reservedProps;for(t=l._targets||l.target,Ve(t,_,c),l.render(i,!0,!0),Ve(t,u),l.render(0,!0,!0),l._enabled(!0),r=c.length;--r>-1;)if(n=J(c[r],_[r],u[r]),n.firstMPT){n=n.difs;for(a in s)f[a]&&(n[a]=s[a]);o={};for(a in n)o[a]=_[r][a];h.push(e.fromTo(c[r],i,o,n))}return h},t.activate([a]),a},!0),function(){var t=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(t,e,i){return this._tween=i,!0}}),e=function(t){for(;t;)t.f||t.blob||(t.r=1),t=t._next},i=t.prototype;i._onInitAllProps=function(){for(var t,i,s,r=this._tween,n=r.vars.roundProps.join?r.vars.roundProps:r.vars.roundProps.split(","),a=n.length,o={},l=r._propLookup.roundProps;--a>-1;)o[n[a]]=1;for(a=n.length;--a>-1;)for(t=n[a],i=r._firstPT;i;)s=i._next,i.pg?i.t._roundProps(o,!0):i.n===t&&(2===i.f&&i.t?e(i.t._firstPT):(this._add(i.t,t,i.s,i.c),s&&(s._prev=i._prev),i._prev?i._prev._next=s:r._firstPT===i&&(r._firstPT=s),i._next=i._prev=null,r._propLookup[t]=l)),i=s;return!1},i._add=function(t,e,i,s){this._addTween(t,e,i,i+s,e,!0),this._overwriteProps.push(e)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(t,e){var i;if("function"!=typeof t.setAttribute)return!1;for(i in e)this._addTween(t,"setAttribute",t.getAttribute(i)+"",e[i]+"",i,!1,i),this._overwriteProps.push(i);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(t,e){"object"!=typeof e&&(e={rotation:e}),this.finals={};var i,s,r,n,a,o,l=e.useRadians===!0?2*Math.PI:360,h=1e-6;for(i in e)"useRadians"!==i&&(o=(e[i]+"").split("_"),s=o[0],r=parseFloat("function"!=typeof t[i]?t[i]:t[i.indexOf("set")||"function"!=typeof t["get"+i.substr(3)]?i:"get"+i.substr(3)]()),n=this.finals[i]="string"==typeof s&&"="===s.charAt(1)?r+parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)):Number(s)||0,a=n-r,o.length&&(s=o.join("_"),-1!==s.indexOf("short")&&(a%=l,a!==a%(l/2)&&(a=0>a?a+l:a-l)),-1!==s.indexOf("_cw")&&0>a?a=(a+9999999999*l)%l-(0|a/l)*l:-1!==s.indexOf("ccw")&&a>0&&(a=(a-9999999999*l)%l-(0|a/l)*l)),(a>h||-h>a)&&(this._addTween(t,i,r,r+a,i),this._overwriteProps.push(i)));return!0},set:function(t){var e;if(1!==t)this._super.setRatio.call(this,t);else for(e=this._firstPT;e;)e.f?e.t[e.p](this.finals[e.p]):e.t[e.p]=this.finals[e.p],e=e._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,l=n._class,h=function(e,i){var s=l("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=l("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},f=function(e,i){var s=l("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},p=u("Back",f("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),f("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),f("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=l("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=l("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=l("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,l=e.taper||"none",h=[],_=0,u=0|(e.points||20),f=u,p=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--f>-1;)i=p?Math.random():1/u*f,s=d?d.getRatio(i):i,"none"===l?r=g:"out"===l?(n=1-i,r=n*n*g):"in"===l?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),p?s+=Math.random()*r-.5*r:f%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),h[_++]={x:i,y:s};for(h.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),f=u;--f>-1;)a=h[f],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",h("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),h("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),h("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",h("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),h("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),h("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=l("easing."+e,function(t,e){this._p1=t>=1?t:1,this._p2=(e||s)/(1>t?t:1),this._p3=this._p2/a*(Math.asin(1/this._p1)||0),this._p2=a/this._p2},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*this._p2)+1},.45)),u("Expo",h("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),h("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),h("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",h("SineOut",function(t){return Math.sin(t*o)}),h("SineIn",function(t){return-Math.cos(t*o)+1}),h("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),l("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),p={},m=function(s,r,n,a){this.sc=p[s]?p[s].sc:[],p[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,c,f,d,g=r.length,v=g;--g>-1;)(_=p[r[g]]||new m(r[g],[])).gsClass?(o[g]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&n)for(u=("com.greensock."+s).split("."),c=u.pop(),f=l(u.join("."))[c]=this.gsClass=n.apply(n,o),a&&(i[c]=f,d="undefined"!=typeof module&&module.exports,!d&&"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&d&&(module.exports=f)),g=0;this.sc.length>g;g++)this.sc[g].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new m(t,e,i,s)},g=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var v=[0,0,1,1],y=[],T=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?v.concat(e):v},!0),x=T.map={},w=T.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?g("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],x[n+"."+o]=x[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=T.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,w(new T(null,null,1,r),n,"easeOut",!0),w(new T(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),w(new T(null,null,3,r),n,"easeInOut");x.linear=h.easing.Linear.easeIn,x.swing=h.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&r>n.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var P=t.requestAnimationFrame,k=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},R=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!P;)P=t[s[r]+"RequestAnimationFrame"],k=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,s,r,n,l,h=this,u=S(),f=e!==!1&&P,p=500,m=33,d="tick",g=function(t){var e,a,o=S()-R;o>p&&(u+=o-m),R+=o,h.time=(R-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(g)),a&&h.dispatchEvent(d)};b.call(h),h.time=h.frame=0,h.tick=function(){g(!0)},h.lagSmoothing=function(t,e){p=t||1/_,m=Math.min(e,p,0)},h.sleep=function(){null!=r&&(f&&k?k(r):clearTimeout(r),s=c,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(R=S()-p+5),s=0===i?c:f&&P?P:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),g(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,h.fps(i),void 0):f},h.fps(t),setTimeout(function(){f&&5>h.frame&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var O=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,W){o||a.wake();var i=this.vars.useFrames?G:W;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=O.ticker=new h.Ticker,n=O.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var A=function(){o&&S()-R>2e3&&a.wake(),setTimeout(A,2e3)};A(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n._callback=function(t){var e=this.vars;e[t].apply(e[t+"Scope"]||e.callbackScope||this,e[t+"Params"]||y)},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(F.length&&Q(),this.render(t,e,!1),F.length&&Q())}return this},n.progress=n.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(o||t||a.wake(),e=s.rawTime(),i=e-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var C=g("core.SimpleTimeline",function(t){O.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=C.prototype=new O,n.constructor=C,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var D=g("TweenLite",function(e,i,s){if(O.call(this,i,s),this.render=D.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:D.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?V[D.defaultOverwrite]:"number"==typeof l?l>>0:V[l],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=$(n,this,!1),1===l&&this._siblings[r].length>1&&K(n,this,null,1,this._siblings[r])):(n=a[r--]=D.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&K(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),M=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},z=function(t,e){var i,s={};for(i in t)q[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!j[i]||j[i]&&j[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=D.prototype=new O,n.constructor=D,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,D.version="1.18.0",D.defaultEase=n._ease=new T(null,null,1,1),D.defaultOverwrite="auto",D.ticker=a,D.autoSleep=120,D.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},D.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(D.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var F=[],I={},E=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.blob?t?this.join(""):this.start:i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},L=function(t,e,i,s){var r,n,a,o,l,h,_,u=[t,e],c=0,f="",p=0;for(u.start=t,i&&(i(u),t=u[0],e=u[1]),u.length=0,r=t.match(E)||[],n=e.match(E)||[],s&&(s._next=null,s.blob=1,u._firstPT=s),l=n.length,o=0;l>o;o++)_=n[o],h=e.substr(c,e.indexOf(_,c)-c),f+=h||!o?h:",",c+=h.length,p?p=(p+1)%5:"rgba("===h.substr(-5)&&(p=1),_===r[o]||o>=r.length?f+=_:(f&&(u.push(f),f=""),a=parseFloat(r[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*parseFloat(_.substr(2)):parseFloat(_)-a)||0,f:0,r:p&&4>p}),c+=_.length;return f+=e.substr(c),f&&u.push(f),u.setRatio=N,u},X=function(t,e,i,s,r,n,a,o){var l,h,_="get"===i?t[e]:i,u=typeof t[e],c="string"==typeof s&&"="===s.charAt(1),f={t:t,p:e,s:_,f:"function"===u,pg:0,n:r||e,r:n,pr:0,c:c?parseInt(s.charAt(0)+"1",10)*parseFloat(s.substr(2)):parseFloat(s)-_||0};return"number"!==u&&("function"===u&&"get"===i&&(h=e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),f.s=_=a?t[h](a):t[h]()),"string"==typeof _&&(a||isNaN(_))?(f.fp=a,l=L(_,s,o||D.defaultStringFilter,f),f={t:l,p:"setRatio",s:0,c:1,f:2,pg:0,n:r||e,pr:0}):c||(f.c=parseFloat(s)-parseFloat(_)||0)),f.c?((f._next=this._firstPT)&&(f._next._prev=f),this._firstPT=f,f):void 0},B=D._internals={isArray:f,isSelector:M,lazyTweens:F,blobDif:L},j=D._plugins={},Y=B.tweenLookup={},U=0,q=B.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},G=O._rootFramesTimeline=new C,W=O._rootTimeline=new C,Z=30,Q=B.lazyRender=function(){var t,e=F.length;for(I={};--e>-1;)t=F[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);F.length=0};W._startTime=a.time,G._startTime=a.frame,W._active=G._active=!0,setTimeout(Q,1),O._updateRoot=D.render=function(){var t,e,i;if(F.length&&Q(),W.render((a.time-W._startTime)*W._timeScale,!1,!1),G.render((a.frame-G._startTime)*G._timeScale,!1,!1),F.length&&Q(),a.frame>=Z){Z=a.frame+(parseInt(D.autoSleep,10)||120);
for(i in Y){for(e=Y[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete Y[i]}if(i=W._first,(!i||i._paused)&&D.autoSleep&&!G._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",O._updateRoot);var $=function(t,e,i){var s,r,n=t._gsTweenID;if(Y[n||(t._gsTweenID=n="t"+U++)]||(Y[n]={target:t,tweens:[]}),e&&(s=Y[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return Y[n].tweens},H=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=D.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},K=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,c=[],f=0,p=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||J(e,0,p),0===J(o,h,p)&&(c[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((p||!o._initted)&&2e-10>=u-o._startTime||(c[f++]=o)));for(n=f;--n>-1;)if(o=c[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!H(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},J=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=D.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)q[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=D.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof T?h:"function"==typeof h?new T(h,n.easeParams):x[h]||D.defaultEase:D.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&D._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;I[e._gsTweenID]&&Q(),this.vars.css||e.style&&e!==t&&e.nodeType&&j.css&&this.vars.autoCSS!==!1&&z(this.vars,e);for(n in this.vars)if(_=this.vars[n],q[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(j[n]&&(l=new j[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:1,n:n,pg:1,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0),h._next&&(h._next._prev=h)}else i[n]=X.call(this,e,n,"get",_,n,0,null,this.vars.stringFilter);return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&K(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(I[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_&&"isPause"!==this.data)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(h!==_||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,c=this._easeType,f=this._easePower;(1===c||3===c&&u>=.5)&&(u=1-u),3===c&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===c?1-u:2===c?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,F.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this._callback("onStart"))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._callback("onUpdate")),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this._callback(r),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:D.selector(e)||e;var s,r,n,a,o,l,h,_,u,c=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((f(e)||M(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(D.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if((u||!t)&&!H(this,i,e,u))return!1}for(n in h)(a=o[n])&&(c&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&D._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],O.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=$(s[i],this,!0);else this._siblings=$(this.target,this,!0)}return O.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?D._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},D.to=function(t,e,i){return new D(t,e,i)},D.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new D(t,e,i)},D.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new D(t,e,s)},D.delayedCall=function(t,e,i,s,r){return new D(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:r,overwrite:0})},D.set=function(t,e){return new D(t,0,e)},D.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:D.selector(t)||t;var i,s,r,n;if((f(t)||M(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(D.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=$(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},D.killTweensOf=D.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=D.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var te=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=te.prototype},!0);if(n=te.prototype,te.version="1.18.0",te.API=2,n._firstPT=null,n._addTween=X,n.setRatio=N,n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},D._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},te.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===te.API&&(j[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){te.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new te(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,te.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in p)p[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/*
 * popcorn.js version 1.5.6
 * http://popcornjs.org
 *
 * Copyright 2011, Mozilla Foundation
 * Licensed under the MIT license
 */

(function(p,e){function l(a){C.put.call(this,a)}function d(a){this.parent=a;this.byStart=[{start:-1,end:-1}];this.byEnd=[{start:-1,end:-1}];this.animating=[];this.endIndex=this.startIndex=0;this.previousUpdateTime=-1;this.count=1}function b(a,c){return function(){if(f.plugin.debug)return a.apply(this,arguments);try{return a.apply(this,arguments)}catch(n){f.plugin.errors.push({plugin:c,thrown:n,source:a.toString()});this.emit("pluginerror",f.plugin.errors)}}}if(e.addEventListener){var h=Array.prototype,
i=Object.prototype,g=h.forEach,k=h.slice,r=i.hasOwnProperty,m=i.toString,t=p.Popcorn,q=[],o=false,u={events:{hash:{},apis:{}}},E=function(){return p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame||function(a){p.setTimeout(a,16)}}(),C={put:function(a){for(var c in a)if(a.hasOwnProperty(c))this[c]=a[c]}},f=function(a,c){return new f.p.init(a,c||null)};f.version="1.5.6";f.isSupported=true;f.instances=[];f.p=f.prototype=
{init:function(a,c){var n,j=this;if(typeof a==="function")if(e.readyState==="complete")a(e,f);else{q.push(a);if(!o){o=true;var w=function(){e.removeEventListener("DOMContentLoaded",w,false);for(var F=0,v=q.length;F<v;F++)q[F].call(e,f);q=null};e.addEventListener("DOMContentLoaded",w,false)}}else{if(typeof a==="string")try{n=e.querySelector(a)}catch(x){throw Error("Popcorn.js Error: Invalid media element selector: "+a);}this.media=n||a;n=this.media.nodeName&&this.media.nodeName.toLowerCase()||"video";
this[n]=this.media;this.options=f.extend({},c)||{};this.id=this.options.id||f.guid(n);if(f.byId(this.id))throw Error("Popcorn.js Error: Cannot use duplicate ID ("+this.id+")");this.isDestroyed=false;this.data={running:{cue:[]},timeUpdate:f.nop,disabled:{},events:{},hooks:{},history:[],state:{volume:this.media.volume},trackRefs:{},trackEvents:new d(this)};f.instances.push(this);var z=function(){if(j.media.currentTime<0)j.media.currentTime=0;j.media.removeEventListener("loadedmetadata",z,false);var F,
v,L,y,s;F=j.media.duration;F=F!=F?Number.MAX_VALUE:F+1;f.addTrackEvent(j,{start:F,end:F});if(!j.isDestroyed){j.data.durationChange=function(){var B=j.media.duration,Q=B+1,K=j.data.trackEvents.byStart,M=j.data.trackEvents.byEnd;K.pop();M.pop();for(var D=M.length-1;D>0;D--)M[D].end>B&&j.removeTrackEvent(M[D]._id);for(M=0;M<K.length;M++)K[M].end>B&&j.removeTrackEvent(K[M]._id);j.data.trackEvents.byEnd.push({start:Q,end:Q});j.data.trackEvents.byStart.push({start:Q,end:Q})};j.media.addEventListener("durationchange",
j.data.durationChange,false)}if(j.options.frameAnimation){j.data.timeUpdate=function(){f.timeUpdate(j,{});f.forEach(f.manifest,function(B,Q){if(v=j.data.running[Q]){y=v.length;for(var K=0;K<y;K++){L=v[K];(s=L._natives)&&s.frame&&s.frame.call(j,{},L,j.currentTime())}}});j.emit("timeupdate");!j.isDestroyed&&E(j.data.timeUpdate)};!j.isDestroyed&&E(j.data.timeUpdate)}else{j.data.timeUpdate=function(B){f.timeUpdate(j,B)};j.isDestroyed||j.media.addEventListener("timeupdate",j.data.timeUpdate,false)}};j.media.addEventListener("error",
function(){j.error=j.media.error},false);j.media.readyState>=1?z():j.media.addEventListener("loadedmetadata",z,false);return this}}};f.p.init.prototype=f.p;f.byId=function(a){for(var c=f.instances,n=c.length,j=0;j<n;j++)if(c[j].id===a)return c[j];return null};f.forEach=function(a,c,n){if(!a||!c)return{};n=n||this;var j,w;if(g&&a.forEach===g)return a.forEach(c,n);if(m.call(a)==="[object NodeList]"){j=0;for(w=a.length;j<w;j++)c.call(n,a[j],j,a);return a}for(j in a)r.call(a,j)&&c.call(n,a[j],j,a);return a};
f.extend=function(a){var c=k.call(arguments,1);f.forEach(c,function(n){for(var j in n)a[j]=n[j]});return a};f.extend(f,{noConflict:function(a){if(a)p.Popcorn=t;return f},error:function(a){throw Error(a);},guid:function(a){f.guid.counter++;return(a?a:"")+(+new Date+f.guid.counter)},sizeOf:function(a){var c=0,n;for(n in a)c++;return c},isArray:Array.isArray||function(a){return m.call(a)==="[object Array]"},nop:function(){},position:function(a){if(!a.parentNode)return null;a=a.getBoundingClientRect();
var c={},n=e.documentElement,j=e.body,w,x,z;w=n.clientTop||j.clientTop||0;x=n.clientLeft||j.clientLeft||0;z=p.pageYOffset&&n.scrollTop||j.scrollTop;n=p.pageXOffset&&n.scrollLeft||j.scrollLeft;w=Math.ceil(a.top+z-w);x=Math.ceil(a.left+n-x);for(var F in a)c[F]=Math.round(a[F]);return f.extend({},c,{top:w,left:x})},disable:function(a,c){if(!a.data.disabled[c]){a.data.disabled[c]=true;if(c in f.registryByName&&a.data.running[c])for(var n=a.data.running[c].length-1,j;n>=0;n--){j=a.data.running[c][n];j._natives.end.call(a,
null,j);a.emit("trackend",f.extend({},j,{plugin:j.type,type:"trackend"}))}return a}},enable:function(a,c){if(a.data.disabled[c]){a.data.disabled[c]=false;if(c in f.registryByName&&a.data.running[c])for(var n=a.data.running[c].length-1,j;n>=0;n--){j=a.data.running[c][n];j._natives.start.call(a,null,j);a.emit("trackstart",f.extend({},j,{plugin:j.type,type:"trackstart",track:j}))}return a}},destroy:function(a){var c=a.data.events,n=a.data.trackEvents,j,w,x,z;for(w in c){j=c[w];for(x in j)delete j[x];
c[w]=null}for(z in f.registryByName)f.removePlugin(a,z);n.byStart.length=0;n.byEnd.length=0;if(!a.isDestroyed){a.data.timeUpdate&&a.media.removeEventListener("timeupdate",a.data.timeUpdate,false);a.isDestroyed=true}f.instances.splice(f.instances.indexOf(a),1)}});f.guid.counter=1;f.extend(f.p,function(){var a={};f.forEach("load play pause currentTime playbackRate volume duration preload playbackRate autoplay loop controls muted buffered readyState seeking paused played seekable ended".split(/\s+/g),
function(c){a[c]=function(n){var j;if(typeof this.media[c]==="function"){if(n!=null&&/play|pause/.test(c))this.media.currentTime=f.util.toSeconds(n);this.media[c]();return this}if(n!=null){j=this.media[c];this.media[c]=n;j!==n&&this.emit("attrchange",{attribute:c,previousValue:j,currentValue:n});return this}return this.media[c]}});return a}());f.forEach("enable disable".split(" "),function(a){f.p[a]=function(c){return f[a](this,c)}});f.extend(f.p,{roundTime:function(){return Math.round(this.media.currentTime)},
exec:function(a,c,n){var j=arguments.length,w="trackadded",x,z;try{z=f.util.toSeconds(a)}catch(F){}if(typeof z==="number")a=z;if(typeof a==="number"&&j===2){n=c;c=a;a=f.guid("cue")}else if(j===1)c=-1;else if(x=this.getTrackEvent(a)){this.data.trackEvents.remove(a);l.end(this,x);f.removeTrackEvent.ref(this,a);w="cuechange";if(typeof a==="string"&&j===2){if(typeof c==="number")n=x._natives.start;if(typeof c==="function"){n=c;c=x.start}}}else if(j>=2){if(typeof c==="string"){try{z=f.util.toSeconds(c)}catch(v){}c=
z}if(typeof c==="number")n=n||f.nop();if(typeof c==="function"){n=c;c=-1}}j={id:a,start:c,end:c+1,_running:false,_natives:{start:n||f.nop,end:f.nop,type:"cue"}};if(x)j=f.extend(x,j);if(w==="cuechange"){j._id=j.id||j._id||f.guid(j._natives.type);this.data.trackEvents.add(j);l.start(this,j);this.timeUpdate(this,null,true);f.addTrackEvent.ref(this,j);this.emit(w,f.extend({},j,{id:a,type:w,previousValue:{time:x.start,fn:x._natives.start},currentValue:{time:c,fn:n||f.nop},track:x}))}else f.addTrackEvent(this,
j);return this},mute:function(a){a=a==null||a===true?"muted":"unmuted";if(a==="unmuted"){this.media.muted=false;this.media.volume=this.data.state.volume}if(a==="muted"){this.data.state.volume=this.media.volume;this.media.muted=true}this.emit(a);return this},unmute:function(a){return this.mute(a==null?false:!a)},position:function(){return f.position(this.media)},toggle:function(a){return f[this.data.disabled[a]?"enable":"disable"](this,a)},defaults:function(a,c){if(f.isArray(a)){f.forEach(a,function(n){for(var j in n)this.defaults(j,
n[j])},this);return this}if(!this.options.defaults)this.options.defaults={};this.options.defaults[a]||(this.options.defaults[a]={});f.extend(this.options.defaults[a],c);return this}});f.Events={UIEvents:"blur focus focusin focusout load resize scroll unload",MouseEvents:"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave click dblclick",Events:"loadstart progress suspend emptied stalled play pause error loadedmetadata loadeddata waiting playing canplay canplaythrough seeking seeked timeupdate ended ratechange durationchange volumechange"};
f.Events.Natives=f.Events.UIEvents+" "+f.Events.MouseEvents+" "+f.Events.Events;u.events.apiTypes=["UIEvents","MouseEvents","Events"];(function(a,c){for(var n=u.events.apiTypes,j=a.Natives.split(/\s+/g),w=0,x=j.length;w<x;w++)c.hash[j[w]]=true;n.forEach(function(z){c.apis[z]={};for(var F=a[z].split(/\s+/g),v=F.length,L=0;L<v;L++)c.apis[z][F[L]]=true})})(f.Events,u.events);f.events={isNative:function(a){return!!u.events.hash[a]},getInterface:function(a){if(!f.events.isNative(a))return false;var c=
u.events,n=c.apiTypes;c=c.apis;for(var j=0,w=n.length,x,z;j<w;j++){z=n[j];if(c[z][a]){x=z;break}}return x},all:f.Events.Natives.split(/\s+/g),fn:{trigger:function(a,c){var n,j=this.data.events[a];if(j){if(n=f.events.getInterface(a)){n=e.createEvent(n);n.initEvent(a,true,true,p,1);this.media.dispatchEvent(n);return this}for(n=j.slice();n.length;)n.shift().call(this,c)}return this},listen:function(a,c){var n=this,j=true,w=f.events.hooks[a],x,z;if(typeof c!=="function")throw Error("Popcorn.js Error: Listener is not a function");
if(!this.data.events[a]){this.data.events[a]=[];j=false}if(w){w.add&&w.add.call(this,{},c);if(w.bind)a=w.bind;if(w.handler){z=c;c=function(F){w.handler.call(n,F,z)}}j=true;if(!this.data.events[a]){this.data.events[a]=[];j=false}}this.data.events[a].push(c);!j&&f.events.all.indexOf(a)>-1&&this.media.addEventListener(a,function(F){if(n.data.events[a])for(x=n.data.events[a].slice();x.length;)x.shift().call(n,F)},false);return this},unlisten:function(a,c){var n,j=this.data.events[a];if(j){if(typeof c===
"string"){for(n=0;n<j.length;n++)j[n].name===c&&j.splice(n--,1);return this}else if(typeof c==="function"){for(;n!==-1;){n=j.indexOf(c);n!==-1&&j.splice(n,1)}return this}this.data.events[a]=null;return this}}},hooks:{canplayall:{bind:"canplaythrough",add:function(a,c){var n=false;if(this.media.readyState){setTimeout(function(){c.call(this,a)}.bind(this),0);n=true}this.data.hooks.canplayall={fired:n}},handler:function(a,c){if(!this.data.hooks.canplayall.fired){c.call(this,a);this.data.hooks.canplayall.fired=
true}}}}};f.forEach([["trigger","emit"],["listen","on"],["unlisten","off"]],function(a){f.p[a[0]]=f.p[a[1]]=f.events.fn[a[0]]});l.start=function(a,c){if(c.end>a.media.currentTime&&c.start<=a.media.currentTime&&!c._running){c._running=true;a.data.running[c._natives.type].push(c);if(!a.data.disabled[c._natives.type]){c._natives.start.call(a,null,c);a.emit("trackstart",f.extend({},c,{plugin:c._natives.type,type:"trackstart",track:c}))}}};l.end=function(a,c){var n;if((c.end<=a.media.currentTime||c.start>
a.media.currentTime)&&c._running){n=a.data.running[c._natives.type];c._running=false;n.splice(n.indexOf(c),1);if(!a.data.disabled[c._natives.type]){c._natives.end.call(a,null,c);a.emit("trackend",f.extend({},c,{plugin:c._natives.type,type:"trackend",track:c}))}}};d.prototype.where=function(a){return(this.parent.getTrackEvents()||[]).filter(function(c){var n,j;if(!a)return true;for(n in a){j=a[n];if(c[n]&&c[n]===j||c._natives[n]&&c._natives[n]===j)return true}return false})};d.prototype.add=function(a){var c=
this.byStart,n=this.byEnd,j;a&&a._id&&this.parent.data.history.push(a._id);a.start=f.util.toSeconds(a.start,this.parent.options.framerate);a.end=f.util.toSeconds(a.end,this.parent.options.framerate);for(j=c.length-1;j>=0;j--)if(a.start>=c[j].start){c.splice(j+1,0,a);break}for(c=n.length-1;c>=0;c--)if(a.end>n[c].end){n.splice(c+1,0,a);break}j<=this.parent.data.trackEvents.startIndex&&a.start<=this.parent.data.trackEvents.previousUpdateTime&&this.parent.data.trackEvents.startIndex++;c<=this.parent.data.trackEvents.endIndex&&
a.end<this.parent.data.trackEvents.previousUpdateTime&&this.parent.data.trackEvents.endIndex++;this.count++};d.prototype.remove=function(a){if(a instanceof l)a=a.id;if(typeof a==="object"){this.where(a).forEach(function(y){this.removeTrackEvent(y._id)},this.parent);return this}var c,n,j;j=this.byStart.length;for(var w=0,x=0,z=[],F=[],v=[],L=[];--j>-1;){c=this.byStart[w];n=this.byEnd[w];if(!c._id){z.push(c);F.push(n)}if(c._id){c._id!==a&&z.push(c);n._id!==a&&F.push(n);if(c._id===a)x=w}w++}j=this.animating.length;
w=0;if(j)for(;--j>-1;){c=this.animating[w];c._id||v.push(c);c._id&&c._id!==a&&v.push(c);w++}x<=this.startIndex&&this.startIndex--;x<=this.endIndex&&this.endIndex--;this.byStart=z;this.byEnd=F;this.animating=v;this.count--;j=this.parent.data.history.length;for(w=0;w<j;w++)this.parent.data.history[w]!==a&&L.push(this.parent.data.history[w]);this.parent.data.history=L};f.addTrackEvent=function(a,c){var n;if(!(c instanceof l)){if((c=new l(c))&&c._natives&&c._natives.type&&a.options.defaults&&a.options.defaults[c._natives.type]){n=
f.extend({},c);f.extend(c,a.options.defaults[c._natives.type],n)}if(c._natives){c._id=c.id||c._id||f.guid(c._natives.type);if(c._natives._setup){c._natives._setup.call(a,c);a.emit("tracksetup",f.extend({},c,{plugin:c._natives.type,type:"tracksetup",track:c}))}}a.data.trackEvents.add(c);l.start(a,c);this.timeUpdate(a,null,true);c._id&&f.addTrackEvent.ref(a,c);a.emit("trackadded",f.extend({},c,c._natives?{plugin:c._natives.type}:{},{type:"trackadded",track:c}))}};f.addTrackEvent.ref=function(a,c){a.data.trackRefs[c._id]=
c;return a};f.removeTrackEvent=function(a,c){var n=a.getTrackEvent(c);if(n){n._natives._teardown&&n._natives._teardown.call(a,n);a.data.trackEvents.remove(c);f.removeTrackEvent.ref(a,c);n._natives&&a.emit("trackremoved",f.extend({},n,{plugin:n._natives.type,type:"trackremoved",track:n}))}};f.removeTrackEvent.ref=function(a,c){delete a.data.trackRefs[c];return a};f.getTrackEvents=function(a){var c=[];a=a.data.trackEvents.byStart;for(var n=a.length,j=0,w;j<n;j++){w=a[j];w._id&&c.push(w)}return c};f.getTrackEvents.ref=
function(a){return a.data.trackRefs};f.getTrackEvent=function(a,c){return a.data.trackRefs[c]};f.getTrackEvent.ref=function(a,c){return a.data.trackRefs[c]};f.getLastTrackEventId=function(a){return a.data.history[a.data.history.length-1]};f.timeUpdate=function(a,c){var n=a.media.currentTime,j=a.data.trackEvents.previousUpdateTime,w=a.data.trackEvents,x=w.endIndex,z=w.startIndex,F=w.byStart.length,v=w.byEnd.length,L=f.registryByName,y,s,B;if(j<=n){for(;w.byEnd[x]&&w.byEnd[x].end<=n;){y=w.byEnd[x];
s=(j=y._natives)&&j.type;if(!j||L[s]||a[s]){if(y._running===true){y._running=false;B=a.data.running[s];B.splice(B.indexOf(y),1);if(!a.data.disabled[s]){j.end.call(a,c,y);a.emit("trackend",f.extend({},y,{plugin:s,type:"trackend",track:y}))}}x++}else{f.removeTrackEvent(a,y._id);return}}for(;w.byStart[z]&&w.byStart[z].start<=n;){y=w.byStart[z];s=(j=y._natives)&&j.type;if(!j||L[s]||a[s]){if(y.end>n&&y._running===false){y._running=true;a.data.running[s].push(y);if(!a.data.disabled[s]){j.start.call(a,c,
y);a.emit("trackstart",f.extend({},y,{plugin:s,type:"trackstart",track:y}))}}z++}else{f.removeTrackEvent(a,y._id);return}}}else if(j>n){for(;w.byStart[z]&&w.byStart[z].start>n;){y=w.byStart[z];s=(j=y._natives)&&j.type;if(!j||L[s]||a[s]){if(y._running===true){y._running=false;B=a.data.running[s];B.splice(B.indexOf(y),1);if(!a.data.disabled[s]){j.end.call(a,c,y);a.emit("trackend",f.extend({},y,{plugin:s,type:"trackend",track:y}))}}z--}else{f.removeTrackEvent(a,y._id);return}}for(;w.byEnd[x]&&w.byEnd[x].end>
n;){y=w.byEnd[x];s=(j=y._natives)&&j.type;if(!j||L[s]||a[s]){if(y.start<=n&&y._running===false){y._running=true;a.data.running[s].push(y);if(!a.data.disabled[s]){j.start.call(a,c,y);a.emit("trackstart",f.extend({},y,{plugin:s,type:"trackstart",track:y}))}}x--}else{f.removeTrackEvent(a,y._id);return}}}w.endIndex=x;w.startIndex=z;w.previousUpdateTime=n;w.byStart.length<F&&w.startIndex--;w.byEnd.length<v&&w.endIndex--};f.extend(f.p,{getTrackEvents:function(){return f.getTrackEvents.call(null,this)},
getTrackEvent:function(a){return f.getTrackEvent.call(null,this,a)},getLastTrackEventId:function(){return f.getLastTrackEventId.call(null,this)},removeTrackEvent:function(a){f.removeTrackEvent.call(null,this,a);return this},removePlugin:function(a){f.removePlugin.call(null,this,a);return this},timeUpdate:function(a){f.timeUpdate.call(null,this,a);return this},destroy:function(){f.destroy.call(null,this);return this}});f.manifest={};f.registry=[];f.registryByName={};f.plugin=function(a,c,n){if(f.protect.natives.indexOf(a.toLowerCase())>=
0)f.error("'"+a+"' is a protected function name");else{var j=typeof c==="function",w=["start","end","type","manifest"],x=["_setup","_teardown","start","end","frame"],z={},F=function(y,s){y=y||f.nop;s=s||f.nop;return function(){y.apply(this,arguments);s.apply(this,arguments)}};f.manifest[a]=n=n||c.manifest||{};x.forEach(function(y){c[y]=b(c[y]||f.nop,a)});var v=function(y,s){if(!s)return this;if(s.ranges&&f.isArray(s.ranges)){f.forEach(s.ranges,function(M){M=f.extend({},s,M);delete M.ranges;this[a](M)},
this);return this}var B=s._natives={},Q="",K;f.extend(B,y);s._natives.type=s._natives.plugin=a;s._running=false;B.start=B.start||B["in"];B.end=B.end||B.out;if(s.once)B.end=F(B.end,function(){this.removeTrackEvent(s._id)});B._teardown=F(function(){var M=k.call(arguments),D=this.data.running[B.type];M.unshift(null);M[1]._running&&D.splice(D.indexOf(s),1)&&B.end.apply(this,M);M[1]._running=false;this.emit("trackend",f.extend({},s,{plugin:B.type,type:"trackend",track:f.getTrackEvent(this,s.id||s._id)}))},
B._teardown);B._teardown=F(B._teardown,function(){this.emit("trackteardown",f.extend({},s,{plugin:a,type:"trackteardown",track:f.getTrackEvent(this,s.id||s._id)}))});s.compose=s.compose||[];if(typeof s.compose==="string")s.compose=s.compose.split(" ");s.effect=s.effect||[];if(typeof s.effect==="string")s.effect=s.effect.split(" ");s.compose=s.compose.concat(s.effect);s.compose.forEach(function(M){Q=f.compositions[M]||{};x.forEach(function(D){B[D]=F(B[D],Q[D])})});s._natives.manifest=n;if(!("start"in
s))s.start=s["in"]||0;if(!s.end&&s.end!==0)s.end=s.out||Number.MAX_VALUE;if(!r.call(s,"toString"))s.toString=function(){var M=["start: "+s.start,"end: "+s.end,"id: "+(s.id||s._id)];s.target!=null&&M.push("target: "+s.target);return a+" ( "+M.join(", ")+" )"};if(!s.target){K="options"in n&&n.options;s.target=K&&"target"in K&&K.target}if(!s._id&&s._natives)s._id=f.guid(s._natives.type);if(s instanceof l){if(s._natives){s._id=s.id||s._id||f.guid(s._natives.type);if(s._natives._setup){s._natives._setup.call(this,
s);this.emit("tracksetup",f.extend({},s,{plugin:s._natives.type,type:"tracksetup",track:s}))}}this.data.trackEvents.add(s);l.start(this,s);this.timeUpdate(this,null,true);s._id&&f.addTrackEvent.ref(this,s)}else f.addTrackEvent(this,s);f.forEach(y,function(M,D){w.indexOf(D)===-1&&this.on(D,M)},this);return this};f.p[a]=z[a]=function(y,s){var B,Q;if(y&&!s)s=y;else if(B=this.getTrackEvent(y)){Q=s;var K={},M;for(M in B)if(r.call(Q,M)&&r.call(B,M))K[M]=B[M];if(B._natives._update){this.data.trackEvents.remove(B);
if(r.call(s,"start"))B.start=s.start;if(r.call(s,"end"))B.end=s.end;l.end(this,B);j&&c.call(this,B);B._natives._update.call(this,B,s);this.data.trackEvents.add(B);l.start(this,B)}else{f.extend(B,s);this.data.trackEvents.remove(y);B._natives._teardown&&B._natives._teardown.call(this,B);f.removeTrackEvent.ref(this,y);if(j)v.call(this,c.call(this,B),B);else{B._id=B.id||B._id||f.guid(B._natives.type);if(B._natives&&B._natives._setup){B._natives._setup.call(this,B);this.emit("tracksetup",f.extend({},B,
{plugin:B._natives.type,type:"tracksetup",track:B}))}this.data.trackEvents.add(B);l.start(this,B);this.timeUpdate(this,null,true);f.addTrackEvent.ref(this,B)}this.emit("trackchange",{id:B.id,type:"trackchange",previousValue:K,currentValue:B,track:B});return this}B._natives.type!=="cue"&&this.emit("trackchange",{id:B.id,type:"trackchange",previousValue:K,currentValue:Q,track:B});return this}else s.id=y;this.data.running[a]=this.data.running[a]||[];B=f.extend({},this.options.defaults&&this.options.defaults[a]||
{},s);v.call(this,j?c.call(this,B):c,B);return this};n&&f.extend(c,{manifest:n});var L={fn:z[a],definition:c,base:c,parents:[],name:a};f.registry.push(f.extend(z,L,{type:a}));f.registryByName[a]=L;return z}};f.plugin.errors=[];f.plugin.debug=f.version==="1.5.6";f.removePlugin=function(a,c){if(!c){c=a;a=f.p;if(f.protect.natives.indexOf(c.toLowerCase())>=0){f.error("'"+c+"' is a protected function name");return}var n=f.registry.length,j;for(j=0;j<n;j++)if(f.registry[j].name===c){f.registry.splice(j,
1);delete f.registryByName[c];delete f.manifest[c];delete a[c];return}}n=a.data.trackEvents.byStart;j=a.data.trackEvents.byEnd;var w=a.data.trackEvents.animating,x,z;x=0;for(z=n.length;x<z;x++){if(n[x]&&n[x]._natives&&n[x]._natives.type===c){n[x]._natives._teardown&&n[x]._natives._teardown.call(a,n[x]);n.splice(x,1);x--;z--;if(a.data.trackEvents.startIndex<=x){a.data.trackEvents.startIndex--;a.data.trackEvents.endIndex--}}j[x]&&j[x]._natives&&j[x]._natives.type===c&&j.splice(x,1)}x=0;for(z=w.length;x<
z;x++)if(w[x]&&w[x]._natives&&w[x]._natives.type===c){w.splice(x,1);x--;z--}};f.compositions={};f.compose=function(a,c,n){f.manifest[a]=n||c.manifest||{};f.compositions[a]=c};f.plugin.effect=f.effect=f.compose;var G=/^(?:\.|#|\[)/;f.dom={debug:false,find:function(a,c){var n=null;c=c||e;if(a){if(!G.test(a)){n=e.getElementById(a);if(n!==null)return n}try{n=c.querySelector(a)}catch(j){if(f.dom.debug)throw Error(j);}}return n}};var A=/\?/,O={ajax:null,url:"",data:"",dataType:"",success:f.nop,type:"GET",
async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8"};f.xhr=function(a){a.dataType=a.dataType&&a.dataType.toLowerCase()||null;if(a.dataType&&(a.dataType==="jsonp"||a.dataType==="script"))f.xhr.getJSONP(a.url,a.success,a.dataType==="script");else{a=f.extend({},O,a);a.ajax=new XMLHttpRequest;if(a.ajax){if(a.type==="GET"&&a.data){a.url+=(A.test(a.url)?"&":"?")+a.data;a.data=null}a.ajax.open(a.type,a.url,a.async);a.type==="POST"&&a.ajax.setRequestHeader("Content-Type",a.contentType);
a.ajax.send(a.data||null);return f.xhr.httpData(a)}}};f.xhr.httpData=function(a){var c,n=null,j,w=null;a.ajax.onreadystatechange=function(){if(a.ajax.readyState===4){try{n=JSON.parse(a.ajax.responseText)}catch(x){}c={xml:a.ajax.responseXML,text:a.ajax.responseText,json:n};if(!c.xml||!c.xml.documentElement){c.xml=null;try{j=new DOMParser;w=j.parseFromString(a.ajax.responseText,"text/xml");if(!w.getElementsByTagName("parsererror").length)c.xml=w}catch(z){}}if(a.dataType)c=c[a.dataType];a.success.call(a.ajax,
c)}};return c};f.xhr.getJSONP=function(a,c,n){var j=e.head||e.getElementsByTagName("head")[0]||e.documentElement,w=e.createElement("script"),x=false,z=[];z=/(=)\?(?=&|$)|\?\?/;var F,v;if(!n){v=a.match(/(callback=[^&]*)/);if(v!==null&&v.length){z=v[1].split("=")[1];if(z==="?")z="jsonp";F=f.guid(z);a=a.replace(/(callback=[^&]*)/,"callback="+F)}else{F=f.guid("jsonp");if(z.test(a))a=a.replace(z,"$1"+F);z=a.split(/\?(.+)?/);a=z[0]+"?";if(z[1])a+=z[1]+"&";a+="callback="+F}window[F]=function(L){c&&c(L);
x=true}}w.addEventListener("load",function(){n&&c&&c();x&&delete window[F];j.removeChild(w)},false);w.addEventListener("error",function(L){c&&c({error:L});n||delete window[F];j.removeChild(w)},false);w.src=a;j.insertBefore(w,j.firstChild)};f.getJSONP=f.xhr.getJSONP;f.getScript=f.xhr.getScript=function(a,c){return f.xhr.getJSONP(a,c,true)};f.util={toSeconds:function(a,c){var n=/^([0-9]+:){0,2}[0-9]+([.;][0-9]+)?$/,j,w,x;if(typeof a==="number")return a;typeof a==="string"&&!n.test(a)&&f.error("Invalid time format");
n=a.split(":");j=n.length-1;w=n[j];if(w.indexOf(";")>-1){w=w.split(";");x=0;if(c&&typeof c==="number")x=parseFloat(w[1],10)/c;n[j]=parseInt(w[0],10)+x}j=n[0];return{1:parseFloat(j,10),2:parseInt(j,10)*60+parseFloat(n[1],10),3:parseInt(j,10)*3600+parseInt(n[1],10)*60+parseFloat(n[2],10)}[n.length||1]}};f.p.cue=f.p.exec;f.protect={natives:function(a){return Object.keys?Object.keys(a):function(c){var n,j=[];for(n in c)r.call(c,n)&&j.push(n);return j}(a)}(f.p).map(function(a){return a.toLowerCase()})};
f.forEach({listen:"on",unlisten:"off",trigger:"emit",exec:"cue"},function(a,c){var n=f.p[c];f.p[c]=function(){if(typeof console!=="undefined"&&console.warn){console.warn("Deprecated method '"+c+"', "+(a==null?"do not use.":"use '"+a+"' instead."));f.p[c]=n}return f.p[a].apply(this,[].slice.call(arguments))}});p.Popcorn=f}else{p.Popcorn={isSupported:false};for(h="byId forEach extend effects error guid sizeOf isArray nop position disable enable destroyaddTrackEvent removeTrackEvent getTrackEvents getTrackEvent getLastTrackEventId timeUpdate plugin removePlugin compose effect xhr getJSONP getScript".split(/\s+/);h.length;)p.Popcorn[h.shift()]=
function(){}}})(window,window.document);(function(p,e){var l=p.document,d=p.location,b=/:\/\//,h=d.href.replace(d.href.split("/").slice(-1)[0],""),i=function(k,r,m){k=k||0;r=(r||k||0)+1;m=m||1;r=Math.ceil((r-k)/m)||0;var t=0,q=[];for(q.length=r;t<r;){q[t++]=k;k+=m}return q};e.sequence=function(k,r){return new e.sequence.init(k,r)};e.sequence.init=function(k,r){this.parent=l.getElementById(k);this.seqId=e.guid("__sequenced");this.queue=[];this.playlist=[];this.inOuts={ofVideos:[],ofClips:[]};this.dims={width:0,height:0};this.active=0;this.playing=
this.cycling=false;this.times={last:0};this.events={};var m=this,t=0;e.forEach(r,function(q,o){var u=l.createElement("video");u.preload="auto";u.controls=true;u.style.display=o&&"none"||"";u.id=m.seqId+"-"+o;m.queue.push(u);var E=q["in"],C=q.out;m.inOuts.ofVideos.push({"in":E!==undefined&&E||1,out:C!==undefined&&C||0});m.inOuts.ofVideos[o].out=m.inOuts.ofVideos[o].out||m.inOuts.ofVideos[o]["in"]+2;u.src=!b.test(q.src)?h+q.src:q.src;u.setAttribute("data-sequence-owner",k);u.setAttribute("data-sequence-guid",
m.seqId);u.setAttribute("data-sequence-id",o);u.setAttribute("data-sequence-clip",[m.inOuts.ofVideos[o]["in"],m.inOuts.ofVideos[o].out].join(":"));m.parent.appendChild(u);m.playlist.push(e("#"+u.id))});m.inOuts.ofVideos.forEach(function(q){q={"in":t,out:t+(q.out-q["in"])};m.inOuts.ofClips.push(q);t=q.out+1});e.forEach(this.queue,function(q,o){function u(){if(!o){m.dims.width=q.videoWidth;m.dims.height=q.videoHeight}q.currentTime=m.inOuts.ofVideos[o]["in"]-0.5;q.removeEventListener("canplaythrough",
u,false);return true}q.addEventListener("canplaythrough",u,false);q.addEventListener("play",function(){m.playing=true},false);q.addEventListener("pause",function(){m.playing=false},false);q.addEventListener("timeupdate",function(E){E=E.srcElement||E.target;E=+(E.dataset&&E.dataset.sequenceId||E.getAttribute("data-sequence-id"));var C=Math.floor(q.currentTime);if(m.times.last!==C&&E===m.active){m.times.last=C;C===m.inOuts.ofVideos[E].out&&e.sequence.cycle.call(m,E)}},false)});return this};e.sequence.init.prototype=
e.sequence.prototype;e.sequence.cycle=function(k){this.queue||e.error("Popcorn.sequence.cycle is not a public method");var r=this.queue,m=this.inOuts.ofVideos,t=r[k],q=0,o;if(r[k+1])q=k+1;if(r[k+1]){r=r[q];m=m[q];e.extend(r,{width:this.dims.width,height:this.dims.height});o=this.playlist[q];t.pause();this.active=q;this.times.last=m["in"]-1;o.currentTime(m["in"]);o[q?"play":"pause"]();this.trigger("cycle",{position:{previous:k,current:q}});if(q){t.style.display="none";r.style.display=""}this.cycling=
false}else this.playlist[k].pause();return this};var g=["timeupdate","play","pause"];e.extend(e.sequence.prototype,{eq:function(k){return this.playlist[k]},remove:function(){this.parent.innerHTML=null},clip:function(k){return this.inOuts.ofVideos[k]},duration:function(){for(var k=0,r=this.inOuts.ofClips,m=0;m<r.length;m++)k+=r[m].out-r[m]["in"]+1;return k-1},play:function(){this.playlist[this.active].play();return this},exec:function(k,r){var m=this.active;this.inOuts.ofClips.forEach(function(t,q){if(k>=
t["in"]&&k<=t.out)m=q});k+=this.inOuts.ofVideos[m]["in"]-this.inOuts.ofClips[m]["in"];e.addTrackEvent(this.playlist[m],{start:k-1,end:k,_running:false,_natives:{start:r||e.nop,end:e.nop,type:"exec"}});return this},listen:function(k,r){var m=this,t=this.playlist,q=t.length,o=0;if(!r)r=e.nop;if(e.Events.Natives.indexOf(k)>-1)e.forEach(t,function(u){u.listen(k,function(E){E.active=m;if(g.indexOf(k)>-1)r.call(u,E);else++o===q&&r.call(u,E)})});else{this.events[k]||(this.events[k]={});t=r.name||e.guid("__"+
k);this.events[k][t]=r}return this},unlisten:function(){},trigger:function(k,r){var m=this;if(!(e.Events.Natives.indexOf(k)>-1)){this.events[k]&&e.forEach(this.events[k],function(t){t.call(m,{type:k},r)});return this}}});e.forEach(e.manifest,function(k,r){e.sequence.prototype[r]=function(m){var t={},q=[],o,u,E,C,f;for(o=0;o<this.inOuts.ofClips.length;o++){q=this.inOuts.ofClips[o];u=i(q["in"],q.out);E=u.indexOf(m.start);C=u.indexOf(m.end);if(E>-1)t[o]=e.extend({},q,{start:u[E],clipIdx:E});if(C>-1)t[o]=
e.extend({},q,{end:u[C],clipIdx:C})}o=Object.keys(t).map(function(A){return+A});q=i(o[0],o[1]);for(o=0;o<q.length;o++){E={};C=q[o];var G=t[C];if(G){f=this.inOuts.ofVideos[C];u=G.clipIdx;f=i(f["in"],f.out);if(G.start){E.start=f[u];E.end=f[f.length-1]}if(G.end){E.start=f[0];E.end=f[u]}}else{E.start=this.inOuts.ofVideos[C]["in"];E.end=this.inOuts.ofVideos[C].out}this.playlist[C][r](e.extend({},m,E))}return this}})})(this,Popcorn);(function(p,e){function l(h){h=typeof h==="string"?h:[h.language,h.region].join("-");var i=h.split("-");return{iso6391:h,language:i[0]||"",region:i[1]||""}}var d=p.navigator,b=l(d.userLanguage||d.language);e.locale={get:function(){return b},set:function(h){b=l(h);e.locale.broadcast();return b},broadcast:function(h){var i=e.instances,g=i.length,k=0,r;for(h=h||"locale:changed";k<g;k++){r=i[k];h in r.data.events&&r.trigger(h)}}}})(this,this.Popcorn);(function(p){document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("[data-timeline-sources]");p.forEach(e,function(l,d){var b=e[d],h,i,g;if(!b.id)b.id=p.guid("__popcorn");if(b.nodeType&&b.nodeType===1){g=p("#"+b.id);h=(b.getAttribute("data-timeline-sources")||"").split(",");h[0]&&p.forEach(h,function(k){i=k.split("!");if(i.length===1){i=k.match(/(.*)[\/\\]([^\/\\]+\.\w+)$/)[2].split(".");i[0]="parse"+i[1].toUpperCase();i[1]=k}h[0]&&g[i[0]]&&g[i[0]](i[1])});g.autoplay()&&
g.play()}})},false)})(Popcorn);(function(p){var e=function(l,d){l=l||p.nop;d=d||p.nop;return function(){l.apply(this,arguments);d.apply(this,arguments)}};p.player=function(l,d){if(!p[l]){d=d||{};var b=function(h,i,g){g=g||{};var k=new Date/1E3,r=k,m=0,t=0,q=1,o=false,u={},E=typeof h==="string"?p.dom.find(h):h,C={};Object.prototype.__defineGetter__||(C=E||document.createElement("div"));for(var f in E)if(!(f in C))if(typeof E[f]==="object")C[f]=E[f];else if(typeof E[f]==="function")C[f]=function(A){return"length"in E[A]&&!E[A].call?
E[A]:function(){return E[A].apply(E,arguments)}}(f);else p.player.defineProperty(C,f,{get:function(A){return function(){return E[A]}}(f),set:p.nop,configurable:true});var G=function(){k=new Date/1E3;if(!C.paused){C.currentTime+=k-r;C.dispatchEvent("timeupdate");setTimeout(G,10)}r=k};C.play=function(){this.paused=false;if(C.readyState>=4){r=new Date/1E3;C.dispatchEvent("play");G()}};C.pause=function(){this.paused=true;C.dispatchEvent("pause")};p.player.defineProperty(C,"currentTime",{get:function(){return m},
set:function(A){m=+A;C.dispatchEvent("timeupdate");return m},configurable:true});p.player.defineProperty(C,"volume",{get:function(){return q},set:function(A){q=+A;C.dispatchEvent("volumechange");return q},configurable:true});p.player.defineProperty(C,"muted",{get:function(){return o},set:function(A){o=+A;C.dispatchEvent("volumechange");return o},configurable:true});p.player.defineProperty(C,"readyState",{get:function(){return t},set:function(A){return t=A},configurable:true});C.addEventListener=function(A,
O){u[A]||(u[A]=[]);u[A].push(O);return O};C.removeEventListener=function(A,O){var a,c=u[A];if(c){for(a=u[A].length-1;a>=0;a--)O===c[a]&&c.splice(a,1);return O}};C.dispatchEvent=function(A){var O,a=A.type;if(!a){a=A;if(A=p.events.getInterface(a)){O=document.createEvent(A);O.initEvent(a,true,true,window,1)}}if(u[a])for(A=u[a].length-1;A>=0;A--)u[a][A].call(this,O,this)};C.src=i||"";C.duration=0;C.paused=true;C.ended=0;g&&g.events&&p.forEach(g.events,function(A,O){C.addEventListener(O,A,false)});if(d._canPlayType(E.nodeName,
i)!==false)if(d._setup)d._setup.call(C,g);else{C.readyState=4;C.dispatchEvent("loadedmetadata");C.dispatchEvent("loadeddata");C.dispatchEvent("canplaythrough")}else setTimeout(function(){C.dispatchEvent("error")},0);h=new p.p.init(C,g);if(d._teardown)h.destroy=e(h.destroy,function(){d._teardown.call(C,g)});return h};b.canPlayType=d._canPlayType=d._canPlayType||p.nop;p[l]=p.player.registry[l]=b}};p.player.registry={};p.player.defineProperty=Object.defineProperty||function(l,d,b){l.__defineGetter__(d,
b.get||p.nop);l.__defineSetter__(d,b.set||p.nop)};p.player.playerQueue=function(){var l=[],d=false;return{next:function(){d=false;l.shift();l[0]&&l[0]()},add:function(b){l.push(function(){d=true;b&&b()});!d&&l[0]()}}};p.smart=function(l,d,b){var h=typeof l==="string"?p.dom.find(l):l,i,g,k,r,m,t="HTMLYouTubeVideoElement HTMLVimeoVideoElement HTMLSoundCloudAudioElement HTMLNullVideoElement".split(" ");if(h){d=typeof d==="string"?[d]:d;l=0;for(m=d.length;l<m;l++){i=d[l];for(g=0;g<t.length;g++)if((r=
p[t[g]])&&r._canPlaySrc(i)==="probably"){k=r(h);b=p(k,b);setTimeout(function(){k.src=i},0);return b}for(var q in p.player.registry)if(p.player.registry.hasOwnProperty(q))if(p.player.registry[q].canPlayType(h.nodeName,i))return p[q](h,i,b)}var o;q=p.guid("popcorn-video-");g=document.createElement("div");g.style.width="100%";g.style.height="100%";if(d.length===1){o=document.createElement("video");o.id=q;h.appendChild(o);setTimeout(function(){var u=document.createElement("div");u.innerHTML=d[0];o.src=
u.firstChild.nodeValue},0);return p("#"+q,b)}h.appendChild(g);t='<video id="'+q+'" preload=auto autobuffer>';l=0;for(m=d.length;l<m;l++)t+='<source src="'+d[l]+'">';t+="</video>";g.innerHTML=t;b&&b.events&&b.events.error&&h.addEventListener("error",b.events.error,false);return p("#"+q,b)}else p.error("Specified target `"+l+"` was not found.")}})(Popcorn);(function(p){var e=Object.prototype.hasOwnProperty;p.parsers={};p.parser=function(l,d,b){if(p.protect.natives.indexOf(l.toLowerCase())>=0)p.error("'"+l+"' is a protected function name");else{if(typeof d==="function"&&!b){b=d;d=""}if(!(typeof b!=="function"||typeof d!=="string")){var h={};h[l]=function(i,g,k){if(!i)return this;if(typeof g!=="function"&&!k){k=g;g=null}var r=this;p.xhr({url:i,dataType:d,success:function(m){var t,q,o=0;m=b(m,k).data||[];if(t=m.length){for(;o<t;o++){q=m[o];for(var u in q)e.call(q,
u)&&r[u]&&r[u](q[u])}g&&g()}}});return this};p.extend(p.p,h);return h}}}})(Popcorn);(function(p,e){function l(b){var h=l.options;b=h.parser[h.strictMode?"strict":"loose"].exec(b);for(var i={},g=14;g--;)i[h.key[g]]=b[g]||"";i[h.q.name]={};i[h.key[12]].replace(h.q.parser,function(k,r,m){if(r)i[h.q.name][r]=m});return i}l.options={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var d={length:0,start:p.nop,end:p.nop};window.MediaError=window.MediaError||function(){function b(h,i){this.code=h||null;this.message=i||""}b.MEDIA_ERR_NONE_ACTIVE=0;b.MEDIA_ERR_ABORTED=1;b.MEDIA_ERR_NETWORK=2;b.MEDIA_ERR_DECODE=3;b.MEDIA_ERR_NONE_SUPPORTED=4;return b}();p._MediaElementProto=function(){var b=
{},h;Object.prototype.__defineGetter__||(b=e.createElement("div"));b._util={type:"HTML5",TIMEUPDATE_MS:250,MIN_WIDTH:300,MIN_HEIGHT:150,isAttributeSet:function(i){return typeof i==="string"||i===true},parseUri:l};b.addEventListener=function(i,g,k){e.addEventListener(this._eventNamespace+i,g,k)};b.removeEventListener=function(i,g,k){e.removeEventListener(this._eventNamespace+i,g,k)};b.dispatchEvent=function(i){var g=e.createEvent("CustomEvent");g.initCustomEvent(this._eventNamespace+i,false,false,
{type:i,target:this.parentNode,data:null});e.dispatchEvent(g)};b.load=p.nop;b.canPlayType=function(){return""};b.getBoundingClientRect=function(){return h.getBoundingClientRect()};b.NETWORK_EMPTY=0;b.NETWORK_IDLE=1;b.NETWORK_LOADING=2;b.NETWORK_NO_SOURCE=3;b.HAVE_NOTHING=0;b.HAVE_METADATA=1;b.HAVE_CURRENT_DATA=2;b.HAVE_FUTURE_DATA=3;b.HAVE_ENOUGH_DATA=4;Object.defineProperties(b,{currentSrc:{get:function(){return this.src!==undefined?this.src:""},configurable:true},parentNode:{get:function(){return h},
set:function(i){h=i},configurable:true},preload:{get:function(){return"auto"},set:p.nop,configurable:true},controls:{get:function(){return true},set:p.nop,configurable:true},poster:{get:function(){return""},set:p.nop,configurable:true},crossorigin:{get:function(){return""},configurable:true},played:{get:function(){return d},configurable:true},seekable:{get:function(){return d},configurable:true},buffered:{get:function(){return d},configurable:true},defaultMuted:{get:function(){return false},configurable:true},
defaultPlaybackRate:{get:function(){return 1},configurable:true},style:{get:function(){return this.parentNode.style},configurable:true},id:{get:function(){return this.parentNode.id},configurable:true}});return b}})(Popcorn,window.document);(function(p,e,l){function d(){if(e.jwplayer){k=true;for(var t=m.length;t--;){m[t]();delete m[t]}}else setTimeout(d,100)}function b(){if(!r){if(!e.jwplayer){var t=l.createElement("script");t.src="https://jwpsrv.com/library/zaIF4JI9EeK2FSIACpYGxA.js";var q=l.getElementsByTagName("script")[0];q.parentNode.insertBefore(t,q)}r=true;d()}return k}function h(t){m.unshift(t)}function i(t){function q(P){D.unshift(P)}function o(){setTimeout(function(){v.duration=K.getDuration();z.dispatchEvent("durationchange");
v.readyState=z.HAVE_METADATA;z.dispatchEvent("loadedmetadata");z.dispatchEvent("loadeddata");v.readyState=z.HAVE_FUTURE_DATA;z.dispatchEvent("canplay");for(B=true;D.length;){D[0]();D.shift()}v.readyState=z.HAVE_ENOUGH_DATA;z.dispatchEvent("canplaythrough")},0)}function u(){if(y)y=false;else if(I){I=false;o()}else n()}function E(){if(v.seeking){v.ended=false;v.seeking=false;z.dispatchEvent("timeupdate");z.dispatchEvent("seeked");z.dispatchEvent("canplay");z.dispatchEvent("canplaythrough")}}function C(){K.onPause(u);
K.onTime(function(){if(!v.ended&&!v.seeking){v.currentTime=K.getPosition();z.dispatchEvent("timeupdate")}});K.onSeek(E);K.onPlay(function(){if(!v.ended)if(T){T=false;if(v.autoplay||!v.paused){v.paused=false;q(a);o()}else{s=I=true;K.pause(true)}}else if(s){s=false;y=true;K.pause(true)}else a()});K.onBufferChange(c);K.onComplete(j);K.play(true)}function f(P){var S={name:"MediaError"};S.message=P.message;S.code=P.code||5;v.error=S;z.dispatchEvent("error")}function G(P){if(z._canPlaySrc(P)){var S=z._util.parseUri(P).queryKey;
v.controls=S.controls=S.controls||v.controls;v.src=P;if(b()){if(L)L&&K&&K.destroy();jwplayer(F.id).setup({file:P,width:"100%",height:"100%",controls:v.controls});K=jwplayer(F.id);K.onReady(C);K.onError(f);jwplayer.utils.log=function(H,V){if(typeof console!=="undefined"&&typeof console.log!=="undefined")V?console.log(H,V):console.log(H);H==="No suitable players found and fallback enabled"&&f({message:H,code:4})};v.networkState=z.NETWORK_LOADING;z.dispatchEvent("loadstart");z.dispatchEvent("progress")}else h(function(){G(P)})}else{v.error=
{name:"MediaError",message:"Media Source Not Supported",code:MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED};z.dispatchEvent("error")}}function A(P){v.currentTime=P;if(B){O();K.seek(P)}else q(function(){O();K.seek(P)})}function O(){v.seeking=true;if(v.paused)s=true;z.dispatchEvent("seeking")}function a(){v.paused=false;if(M){M=false;if(v.loop&&!Q||!v.loop){Q=true;z.dispatchEvent("play")}z.dispatchEvent("playing")}}function c(){z.dispatchEvent("progress")}function n(){v.paused=true;if(!M){M=true;z.dispatchEvent("pause")}}
function j(){if(v.loop)A(0);else{v.ended=true;n();z.dispatchEvent("timeupdate");z.dispatchEvent("ended")}}function w(P){v.volume=P;if(B){K.setVolume(v.volume*100);z.dispatchEvent("volumechange")}else q(function(){w(v.volume)})}function x(P){v.muted=P;if(B){K.setMute(P);z.dispatchEvent("volumechange")}else q(function(){x(v.muted)})}if(!e.postMessage)throw"ERROR: HTMLJWPlayerVideoElement requires window.postMessage";var z=new p._MediaElementProto,F=typeof t==="string"?l.querySelector(t):t,v={src:g,
networkState:z.NETWORK_EMPTY,readyState:z.HAVE_NOTHING,seeking:false,autoplay:g,preload:g,controls:false,loop:false,poster:g,volume:1,muted:false,currentTime:0,duration:NaN,ended:false,paused:true,error:null},L=false,y=false,s=false,B=false,Q=false,K,M=true,D=[],T=true,I=false;z._eventNamespace=p.guid("HTMLJWPlayerVideoElement::");z.parentNode=F;z._util.type="JWPlayer";z.play=function(){z.dispatchEvent("play");v.paused=false;if(B){if(v.ended){A(0);v.ended=false}K.play(true)}else q(function(){z.play()})};
z.pause=function(){v.paused=true;B?K.pause(true):q(function(){z.pause()})};Object.defineProperties(z,{src:{get:function(){return v.src},set:function(P){P&&P!==v.src&&G(P)}},autoplay:{get:function(){return v.autoplay},set:function(P){v.autoplay=z._util.isAttributeSet(P)}},loop:{get:function(){return v.loop},set:function(P){v.loop=z._util.isAttributeSet(P)}},width:{get:function(){return z.parentNode.offsetWidth}},height:{get:function(){return z.parentNode.offsetHeight}},currentTime:{get:function(){return v.currentTime},
set:function(P){A(P)}},duration:{get:function(){return K.getDuration()}},ended:{get:function(){return v.ended}},paused:{get:function(){return v.paused}},seeking:{get:function(){return v.seeking}},readyState:{get:function(){return v.readyState}},networkState:{get:function(){return v.networkState}},volume:{get:function(){return v.volume},set:function(P){if(P<0||P>1)throw"Volume value must be between 0.0 and 1.0";w(P)}},muted:{get:function(){return v.muted},set:function(P){x(z._util.isAttributeSet(P))}},
error:{get:function(){return v.error}},buffered:{get:function(){var P={start:function(S){if(S===0)return 0;throw"INDEX_SIZE_ERR: DOM Exception 1";},end:function(S){if(S===0){S=K.getDuration();if(!S)return 0;return S*(K.getBuffer()/100)}throw"INDEX_SIZE_ERR: DOM Exception 1";}};Object.defineProperties(P,{length:{get:function(){return 1}}});return P}}});z._canPlaySrc=p.HTMLJWPlayerVideoElement._canPlaySrc;z.canPlayType=p.HTMLJWPlayerVideoElement.canPlayType;return z}var g="",k=false,r=false,m=[];p.HTMLJWPlayerVideoElement=
function(t){return new i(t)};p.HTMLJWPlayerVideoElement._canPlaySrc=function(){return"probably"};p.HTMLJWPlayerVideoElement.canPlayType=function(){return"probably"}})(Popcorn,window,document);(function(p,e){function l(i){this.startTime=0;this.currentTime=i.currentTime||0;this.duration=i.duration||NaN;this.playInterval=null;this.paused=true;this.playbackRate=this.defaultPlaybackRate=1;this.ended=i.endedCallback||p.nop}function d(i){function g(a){A.push(a)}function k(){if(!C)return 0;return f.currentTime}function r(a){if(a!==k())if(C){G.seeking=true;o.dispatchEvent("seeking");f.seekTo(a);G.ended=false;G.seeking=false;o.dispatchEvent("timeupdate");o.dispatchEvent("seeked");o.dispatchEvent("canplay");
o.dispatchEvent("canplaythrough")}else g(function(){r(a)})}function m(){o.dispatchEvent("timeupdate")}function t(){G.paused=true;clearInterval(O);o.dispatchEvent("pause")}function q(){if(G.loop){r(0);o.play()}else{G.ended=true;t();o.dispatchEvent("timeupdate");o.dispatchEvent("ended")}}var o=new p._MediaElementProto,u=typeof i==="string"?e.querySelector(i):i,E=e.createElement("div"),C=false,f,G={src:b,networkState:o.NETWORK_EMPTY,readyState:o.HAVE_NOTHING,autoplay:b,preload:b,controls:b,loop:false,
poster:b,volume:1,muted:false,width:u.width|0?u.width:o._util.MIN_WIDTH,height:u.height|0?u.height:o._util.MIN_HEIGHT,seeking:false,ended:false,paused:1,error:null},A=[],O;o._eventNamespace=p.guid("HTMLNullVideoElement::");o.parentNode=u;o._util.type="NullVideo";o.play=function(){if(C){f.play();if(G.paused){if(G.paused===1){G.paused=false;o.dispatchEvent("play");o.dispatchEvent("playing")}else{if(G.ended){r(0);G.ended=false}if(G.paused){G.paused=false;G.loop||o.dispatchEvent("play");o.dispatchEvent("playing")}}O=
setInterval(m,o._util.TIMEUPDATE_MS)}}else g(function(){o.play()})};o.pause=function(){if(C){f.pause();G.paused||t()}else g(function(){o.pause()})};Object.defineProperties(o,{src:{get:function(){return G.src},set:function(a){if(a&&a!==G.src)if(o._canPlaySrc(a)){G.src=a;if(C)if(C&&f){f.pause();f=null;u.removeChild(E);E=e.createElement("div")}E.width=G.width;E.height=G.height;u.appendChild(E);a=h.exec(a);f=new l({currentTime:+a[1],duration:+a[2],endedCallback:q});o.dispatchEvent("loadstart");o.dispatchEvent("progress");
o.dispatchEvent("durationchange");C=true;G.networkState=o.NETWORK_IDLE;G.readyState=o.HAVE_METADATA;o.dispatchEvent("loadedmetadata");o.dispatchEvent("loadeddata");G.readyState=o.HAVE_FUTURE_DATA;o.dispatchEvent("canplay");G.readyState=o.HAVE_ENOUGH_DATA;for(o.dispatchEvent("canplaythrough");A.length;){a=A.shift();a()}G.autoplay&&o.play()}else{G.error={name:"MediaError",message:"Media Source Not Supported",code:MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED};o.dispatchEvent("error")}}},autoplay:{get:function(){return G.autoplay},
set:function(a){G.autoplay=o._util.isAttributeSet(a)}},loop:{get:function(){return G.loop},set:function(a){G.loop=o._util.isAttributeSet(a)}},width:{get:function(){return E.width},set:function(a){E.width=a;G.width=E.width}},height:{get:function(){return E.height},set:function(a){E.height=a;G.height=E.height}},currentTime:{get:function(){return k()},set:function(a){r(a)}},duration:{get:function(){return f?f.duration:NaN}},ended:{get:function(){return G.ended}},paused:{get:function(){return G.paused}},
seeking:{get:function(){return G.seeking}},readyState:{get:function(){return G.readyState}},networkState:{get:function(){return G.networkState}},volume:{get:function(){return G.volume},set:function(a){if(a<0||a>1)throw"Volume value must be between 0.0 and 1.0";G.volume=a;o.dispatchEvent("volumechange")}},muted:{get:function(){return G.muted},set:function(a){a=o._util.isAttributeSet(a);G.muted=a;o.dispatchEvent("volumechange")}},playbackRate:{get:function(){return f.playbackRate},set:function(a){f.playbackRate=
a;o.dispatchEvent("ratechange")}},error:{get:function(){return G.error}}});o._canPlaySrc=p.HTMLNullVideoElement._canPlaySrc;o.canPlayType=p.HTMLNullVideoElement.canPlayType;return o}var b="",h=/#t=(\d+\.?\d*)?,?(\d+\.?\d*)/;l.prototype={play:function(){var i=this;if(this.paused){this.paused=false;this.startTime=Date.now();this.playInterval=setInterval(function(){i.currentTime+=(Date.now()-i.startTime)/(1E3/i.playbackRate);i.startTime=Date.now();if(i.currentTime>=i.duration){i.pause(i.duration);i.ended()}i.currentTime<
0&&i.pause(0)},16)}},pause:function(){if(!this.paused){this.paused=true;clearInterval(this.playInterval)}},seekTo:function(i){i=i<0?0:i;this.currentTime=i=i>this.duration?this.duration:i}};p.HTMLNullVideoElement=function(i){return new d(i)};p.HTMLNullVideoElement._canPlaySrc=function(i){return h.test(i)?"probably":b};p.HTMLNullVideoElement.canPlayType=function(i){return i==="video/x-nullvideo"?"probably":b}})(Popcorn,document);(function(p,e,l){function d(k){var r=this,m=k.src.split("?")[0];if(m.substr(0,2)==="//")m=e.location.protocol+m;"play pause paused seekTo unload getCurrentTime getDuration getVideoEmbedCode getVideoHeight getVideoWidth getVideoUrl getColor setColor setLoop getVolume setVolume addEventListener".split(" ").forEach(function(t){r[t]=function(q){q=JSON.stringify({method:t,value:q});k.contentWindow&&k.contentWindow.postMessage(q,m)}})}function b(k){function r(y){z.unshift(y)}function m(y){var s=c.duration;
if(s!==y){c.duration=y;A.dispatchEvent("durationchange");if(isNaN(s)){c.networkState=A.NETWORK_IDLE;c.readyState=A.HAVE_METADATA;A.dispatchEvent("loadedmetadata");A.dispatchEvent("loadeddata");c.readyState=A.HAVE_FUTURE_DATA;A.dispatchEvent("canplay");c.readyState=A.HAVE_ENOUGH_DATA;A.dispatchEvent("canplaythrough");c.autoplay&&A.play();for(y=z.length;y--;){z[y]();delete z[y]}}}}function t(y){if(n){c.seeking=true;A.dispatchEvent("seeking");w.seekTo(y)}else r(function(){t(y)})}function q(){A.dispatchEvent("timeupdate")}
function o(y){(c.currentTime=y)!==L&&A.dispatchEvent("timeupdate");L=c.currentTime}function u(y){if(y.origin===g){var s;try{s=JSON.parse(y.data)}catch(B){console.warn(B)}if(s.player_id==j)switch(s.event){case "ready":w=new d(a);w.addEventListener("loadProgress");w.addEventListener("pause");w.setVolume(0);w.play();break;case "loadProgress":if(parseFloat(s.data.duration)>0&&!n){n=true;w.pause()}break;case "pause":w.setVolume(1);e.removeEventListener("message",u,false);e.addEventListener("message",E,
false);w.addEventListener("loadProgress");w.addEventListener("playProgress");w.addEventListener("play");w.addEventListener("pause");w.addEventListener("finish");w.addEventListener("seek");w.getDuration();c.networkState=A.NETWORK_LOADING;A.dispatchEvent("loadstart");A.dispatchEvent("progress")}}}function E(y){if(y.origin===g){var s;try{s=JSON.parse(y.data)}catch(B){console.warn(B)}if(s.player_id==j){switch(s.method){case "getCurrentTime":o(parseFloat(s.value));break;case "getDuration":m(parseFloat(s.value));
break;case "getVolume":y=parseFloat(s.value);if(c.volume!==y){c.volume=y;A.dispatchEvent("volumechange")}}switch(s.event){case "loadProgress":A.dispatchEvent("progress");m(parseFloat(s.data.duration));break;case "playProgress":o(parseFloat(s.data.seconds));break;case "play":c.ended&&t(0);if(!v){v=setInterval(C,h);c.loop&&A.dispatchEvent("play")}F=setInterval(q,A._util.TIMEUPDATE_MS);c.paused=false;if(x){x=false;c.loop||A.dispatchEvent("play");A.dispatchEvent("playing")}break;case "pause":c.paused=
true;if(!x){x=true;clearInterval(F);A.dispatchEvent("pause")}break;case "finish":if(c.loop){t(0);A.play()}else{c.ended=true;A.dispatchEvent("ended")}break;case "seek":o(parseFloat(s.data.seconds));c.seeking=false;A.dispatchEvent("timeupdate");A.dispatchEvent("seeked");A.dispatchEvent("canplay");A.dispatchEvent("canplaythrough")}}}}function C(){w.getCurrentTime()}function f(y){c.volume=y;if(n){w.setVolume(y);A.dispatchEvent("volumechange")}else r(function(){f(y)})}function G(y){if(n)if(y){c.muted=
c.volume;f(0)}else{c.muted=0;f(c.muted)}else{c.muted=y?1:0;r(function(){G(y)})}}if(!e.postMessage)throw"ERROR: HTMLVimeoVideoElement requires window.postMessage";var A=new p._MediaElementProto,O=typeof k==="string"?p.dom.find(k):k,a=l.createElement("iframe"),c={src:i,networkState:A.NETWORK_EMPTY,readyState:A.HAVE_NOTHING,seeking:false,autoplay:i,preload:i,controls:false,loop:false,poster:i,volume:1,muted:0,currentTime:0,duration:NaN,ended:false,paused:true,error:null},n=false,j=p.guid(),w,x=true,
z=[],F,v,L=0;A._eventNamespace=p.guid("HTMLVimeoVideoElement::");A.parentNode=O;A._util.type="Vimeo";A.play=function(){c.paused=false;n?w.play():r(function(){A.play()})};A.pause=function(){c.paused=true;n?w.pause():r(function(){A.pause()})};Object.defineProperties(A,{src:{get:function(){return c.src},set:function(y){if(y&&y!==c.src)if(A._canPlaySrc(y)){c.src=y;if(n)if(n&&w){clearInterval(v);w.pause();e.removeEventListener("message",E,false);O.removeChild(a);a=l.createElement("iframe")}n=false;y=A._util.parseUri(y);
var s=y.queryKey,B,Q=["api=1","player_id="+j,"title=0","byline=0","portrait=0"];c.loop=s.loop==="1"||c.loop;delete s.loop;c.autoplay=s.autoplay==="1"||c.autoplay;delete s.autoplay;y=g+"/video/"+/\d+$/.exec(y.path)+"?";for(B in s)s.hasOwnProperty(B)&&Q.push(encodeURIComponent(B)+"="+encodeURIComponent(s[B]));y+=Q.join("&");a.id=j;a.style.width="100%";a.style.height="100%";a.frameBorder=0;a.webkitAllowFullScreen=true;a.mozAllowFullScreen=true;a.allowFullScreen=true;O.appendChild(a);a.src=y;e.addEventListener("message",
u,false)}else{c.error={name:"MediaError",message:"Media Source Not Supported",code:MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED};A.dispatchEvent("error")}}},autoplay:{get:function(){return c.autoplay},set:function(y){c.autoplay=A._util.isAttributeSet(y)}},loop:{get:function(){return c.loop},set:function(y){c.loop=A._util.isAttributeSet(y)}},width:{get:function(){return A.parentNode.offsetWidth}},height:{get:function(){return A.parentNode.offsetHeight}},currentTime:{get:function(){return c.currentTime},
set:function(y){t(y)}},duration:{get:function(){return c.duration}},ended:{get:function(){return c.ended}},paused:{get:function(){return c.paused}},seeking:{get:function(){return c.seeking}},readyState:{get:function(){return c.readyState}},networkState:{get:function(){return c.networkState}},volume:{get:function(){return c.muted>0?c.muted:c.volume},set:function(y){if(y<0||y>1)throw"Volume value must be between 0.0 and 1.0";f(y)}},muted:{get:function(){return c.muted>0},set:function(y){G(A._util.isAttributeSet(y))}},
error:{get:function(){return c.error}}});A._canPlaySrc=p.HTMLVimeoVideoElement._canPlaySrc;A.canPlayType=p.HTMLVimeoVideoElement.canPlayType;return A}var h=16,i="",g="https://player.vimeo.com";p.HTMLVimeoVideoElement=function(k){return new b(k)};p.HTMLVimeoVideoElement._canPlaySrc=function(k){return/player.vimeo.com\/video\/\d+/.test(k)||/vimeo.com\/\d+/.test(k)?"probably":i};p.HTMLVimeoVideoElement.canPlayType=function(k){return k==="video/x-vimeo"?"probably":i}})(Popcorn,window,document);(function(p,e){function l(){return"maybe"}function d(b,h){var i=typeof b==="string"?e.querySelector(b):b,g=e.createElement(h);i.appendChild(g);g._canPlaySrc=l;return g}p.HTMLVideoElement=function(b){return d(b,"video")};p.HTMLVideoElement._canPlaySrc=l;p.HTMLAudioElement=function(b){return d(b,"audio")};p.HTMLAudioElement._canPlaySrc=l})(Popcorn,window.document);(function(p,e,l){function d(){var u;if(YT.loaded)for(t=true;o.length;){u=o.shift();u()}else setTimeout(d,250)}function b(){var u;if(!q){if(e.YT)d();else{u=l.createElement("script");u.addEventListener("load",d,false);u.src="https://www.youtube.com/iframe_api";l.head.appendChild(u)}q=true}return t}function h(u){o.push(u)}function i(u){function E(J){W.push(J)}function C(){R.pauseVideo();j("play",C);n("play",K)}function f(){n("pause",M);j("pause",f)}function G(){var J=function(){if(R.isMuted()){n("play",
c);R.playVideo()}else setTimeout(J,0)};V=true;R.mute();J()}function A(J){var N={name:"MediaError"};switch(J.data){case 2:N.message="Invalid video parameter.";N.code=MediaError.MEDIA_ERR_ABORTED;break;case 5:N.message="The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";N.code=MediaError.MEDIA_ERR_DECODE;case 100:N.message="Video not found.";N.code=MediaError.MEDIA_ERR_NETWORK;break;case 101:case 150:N.message="Video not usable.";N.code=
MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED;break;default:N.message="Unknown error.";N.code=5}H.error=N;I.dispatchEvent("error")}function O(){n("play",K);n("pause",M);if(H.autoplay||!H.paused){j("play",O);H.paused=false;E(function(){H.paused||K()})}H.muted||R.unMute();H.readyState=I.HAVE_METADATA;I.dispatchEvent("loadedmetadata");aa=setInterval(v,g);I.dispatchEvent("loadeddata");H.readyState=I.HAVE_FUTURE_DATA;I.dispatchEvent("canplay");U=true;for(ba=setInterval(L,50);W.length;){W[0]();W.shift()}H.readyState=
I.HAVE_ENOUGH_DATA;I.dispatchEvent("canplaythrough")}function a(){j("pause",a);if(R.getCurrentTime()>0)setTimeout(a,0);else if(H.autoplay||!H.paused){n("play",O);R.playVideo()}else O()}function c(){j("play",c);if(R.getCurrentTime()===0)setTimeout(c,0);else{n("pause",a);R.seekTo(0);R.pauseVideo()}}function n(J,N){I.addEventListener("youtube-"+J,N,false)}function j(J,N){I.removeEventListener("youtube-"+J,N,false)}function w(J){I.dispatchEvent("youtube-"+J)}function x(){H.networkState=I.NETWORK_LOADING;
I.dispatchEvent("waiting")}function z(J){switch(J.data){case YT.PlayerState.ENDED:w("ended");break;case YT.PlayerState.PLAYING:w("play");break;case YT.PlayerState.PAUSED:R.getDuration()!==R.getCurrentTime()&&w("pause");break;case YT.PlayerState.BUFFERING:w("buffering")}J.data!==YT.PlayerState.BUFFERING&&ca===YT.PlayerState.BUFFERING&&I.dispatchEvent("progress");ca=J.data}function F(J){if(I._canPlaySrc(J)){H.src=J;if(b()){if(V)if(U){if(V&&R){j("buffering",x);j("ended",D);j("play",K);j("pause",M);M();
Z=U=false;H.currentTime=0;W=[];clearInterval(aa);clearInterval(ba);R.stopVideo();R.clearVideo();R.destroy();S=l.createElement("div")}}else{E(function(){F(J)});return}P.appendChild(S);var N=I._util.parseUri(J).queryKey;delete N.v;H.autoplay=N.autoplay==="1"||H.autoplay;delete N.autoplay;H.loop=N.loop==="1"||H.loop;delete N.loop;N.rel=N.rel||0;N.modestbranding=N.modestbranding||1;N.iv_load_policy=N.iv_load_policy||3;N.disablekb=N.disablekb||1;N.showinfo=N.showinfo||0;var ea=e.location.protocol==="file:"?
"*":e.location.protocol+"//"+e.location.host;N.origin=N.origin||ea;N.controls=N.controls||H.controls?2:0;H.controls=N.controls;N.wmode=N.wmode||"opaque";J=r.exec(J)[1];p.getJSONP("https://gdata.youtube.com/feeds/api/videos/"+J+"?v=2&alt=jsonc&callback=?",function(X){if(X.error)console.warn("failed to retreive duration data, reason: "+X.error.message);else if(X.data){H.duration=X.data.duration;I.dispatchEvent("durationchange");R=new YT.Player(S,{width:"100%",height:"100%",wmode:N.wmode,videoId:J,playerVars:N,
events:{onReady:G,onError:A,onStateChange:z}});H.networkState=I.NETWORK_LOADING;I.dispatchEvent("loadstart");I.dispatchEvent("progress")}else console.warn("failed to retreive duration data, reason: no response data")})}else h(function(){F(J)})}else{H.error={name:"MediaError",message:"Media Source Not Supported",code:MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED};I.dispatchEvent("error")}}function v(){var J=R.getCurrentTime();if(H.seeking)m(J-H.currentTime)<1&&Q();else{if(m(H.currentTime-J)>g){B();Q()}H.currentTime=
J}}function L(){var J=R.getVideoLoadedFraction();if(J&&$!==J){$=J;I.dispatchEvent("progress")}}function y(J){if(J!==H.currentTime){H.currentTime=J;if(U){B();R.seekTo(J)}else E(function(){B();R.seekTo(J)})}}function s(){I.dispatchEvent("timeupdate")}function B(){n("pause",f);j("pause",M);H.seeking=true;I.dispatchEvent("seeking")}function Q(){H.ended=false;H.seeking=false;I.dispatchEvent("timeupdate");I.dispatchEvent("seeked");I.dispatchEvent("canplay");I.dispatchEvent("canplaythrough")}function K(){if(H.ended){y(0);
H.ended=false}da=setInterval(s,I._util.TIMEUPDATE_MS);H.paused=false;if(Y){Y=false;if(H.loop&&!Z||!H.loop){Z=true;I.dispatchEvent("play")}I.dispatchEvent("playing")}}function M(){H.paused=true;if(!Y){Y=true;clearInterval(da);I.dispatchEvent("pause")}}function D(){if(H.loop){y(0);I.play()}else{H.ended=true;M();n("play",C);j("play",K);I.dispatchEvent("timeupdate");I.dispatchEvent("ended")}}function T(J){H.muted=J;if(U){R[J?"mute":"unMute"]();I.dispatchEvent("volumechange")}else E(function(){T(H.muted)})}
if(!e.postMessage)throw"ERROR: HTMLYouTubeVideoElement requires window.postMessage";var I=new p._MediaElementProto,P=typeof u==="string"?l.querySelector(u):u,S=l.createElement("div"),H={src:k,networkState:I.NETWORK_EMPTY,readyState:I.HAVE_NOTHING,seeking:false,autoplay:k,preload:k,controls:false,loop:false,poster:k,volume:1,muted:false,currentTime:0,duration:NaN,ended:false,paused:true,error:null},V=false,U=false,Z=false,R,Y=true,W=[],ca=-1,ba,$=0,aa,da;I._eventNamespace=p.guid("HTMLYouTubeVideoElement::");
I.parentNode=P;I._util.type="YouTube";n("buffering",x);n("ended",D);I.play=function(){H.paused=false;U?R.playVideo():E(function(){I.play()})};I.pause=function(){H.paused=true;if(U){f();R.pauseVideo()}else E(function(){I.pause()})};Object.defineProperties(I,{src:{get:function(){return H.src},set:function(J){J&&J!==H.src&&F(J)}},autoplay:{get:function(){return H.autoplay},set:function(J){H.autoplay=I._util.isAttributeSet(J)}},loop:{get:function(){return H.loop},set:function(J){H.loop=I._util.isAttributeSet(J)}},
width:{get:function(){return I.parentNode.offsetWidth}},height:{get:function(){return I.parentNode.offsetHeight}},currentTime:{get:function(){return H.currentTime},set:function(J){y(J)}},duration:{get:function(){return H.duration}},ended:{get:function(){return H.ended}},paused:{get:function(){return H.paused}},seeking:{get:function(){return H.seeking}},readyState:{get:function(){return H.readyState}},networkState:{get:function(){return H.networkState}},volume:{get:function(){return H.volume},set:function(J){if(J<
0||J>1)throw"Volume value must be between 0.0 and 1.0";H.volume=J;if(U){R.setVolume(H.volume*100);I.dispatchEvent("volumechange")}else E(function(){I.volume=J})}},muted:{get:function(){return H.muted},set:function(J){T(I._util.isAttributeSet(J))}},error:{get:function(){return H.error}},buffered:{get:function(){var J={start:function(N){if(N===0)return 0;throw"INDEX_SIZE_ERR: DOM Exception 1";},end:function(N){if(N===0){if(!H.duration)return 0;return H.duration*$}throw"INDEX_SIZE_ERR: DOM Exception 1";
}};Object.defineProperties(J,{length:{get:function(){return 1}}});return J},configurable:true}});I._canPlaySrc=p.HTMLYouTubeVideoElement._canPlaySrc;I.canPlayType=p.HTMLYouTubeVideoElement.canPlayType;return I}var g=10,k="",r=/^.*(?:\/|v=)(.{11})/,m=Math.abs,t=false,q=false,o=[];p.HTMLYouTubeVideoElement=function(u){return new i(u)};p.HTMLYouTubeVideoElement._canPlaySrc=function(u){return/(?:http:\/\/www\.|http:\/\/|www\.|\.|^)(youtu).*(?:\/|v=)(.{11})/.test(u)?"probably":k};p.HTMLYouTubeVideoElement.canPlayType=
function(u){return u==="video/x-youtube"?"probably":k}})(Popcorn,window,document);(function(p,e,l){function d(){if(!r){p.getScript("https://w.soundcloud.com/player/api.js",function(){p.getScript("https://connect.soundcloud.com/sdk.js",function(){k=true;SC.initialize({client_id:"PRaNFlda6Bhf5utPjUsptg"});for(var t=m.length;t--;){m[t]();delete m[t]}})});r=true}return k}function b(t){m.unshift(t)}function h(t){function q(D){B.unshift(D)}function o(){s.bind(SC.Widget.Events.LOAD_PROGRESS,function(D){O({type:"loadProgress",data:D.currentPosition/1E3})});s.bind(SC.Widget.Events.PLAY_PROGRESS,
function(D){O({type:"playProgress",data:D.currentPosition/1E3})});s.bind(SC.Widget.Events.PLAY,function(){O({type:"play"})});s.bind(SC.Widget.Events.PAUSE,function(){O({type:"pause"})});s.bind(SC.Widget.Events.SEEK,function(){s.getPosition(function(D){D=D/1E3;if(v.seeking)if(Math.floor(D)!==Math.floor(v.currentTime))s.seekTo(v.currentTime*1E3);else{v.ended=false;v.seeking=false;x.dispatchEvent("timeupdate");x.dispatchEvent("seeked");x.dispatchEvent("canplay");x.dispatchEvent("canplaythrough")}else O({type:"seek",
data:D})})});s.bind(SC.Widget.Events.FINISH,function(){O({type:"finish"})});L=true;s.getDuration(E)}function u(){s.bind(SC.Widget.Events.PLAY_PROGRESS,function(D){s.setVolume(0);if(D.currentPosition>0){s.unbind(SC.Widget.Events.PLAY_PROGRESS);s.bind(SC.Widget.Events.PAUSE,function(){s.unbind(SC.Widget.Events.PAUSE);s.setVolume(100);s.bind(SC.Widget.Events.SEEK,function(){s.unbind(SC.Widget.Events.SEEK);o()});s.seekTo(0)});s.pause()}});s.play()}function E(D){D/=1E3;var T=v.duration;if(T!==D){v.duration=
D;x.dispatchEvent("durationchange");if(isNaN(T)){v.networkState=x.NETWORK_IDLE;v.readyState=x.HAVE_METADATA;x.dispatchEvent("loadedmetadata");x.dispatchEvent("loadeddata");v.readyState=x.HAVE_FUTURE_DATA;x.dispatchEvent("canplay");v.readyState=x.HAVE_ENOUGH_DATA;x.dispatchEvent("canplaythrough");for(D=B.length;D--;){B[D]();delete B[D]}v.paused&&v.autoplay&&x.play()}}}function C(D){function T(){v.seeking=true;x.dispatchEvent("seeking");s.seekTo(D)}v.currentTime=D;D*=1E3;L?T():addMediaReadyCallback(T)}
function f(){v.paused=true;if(!y){y=true;clearInterval(Q);x.dispatchEvent("pause")}}function G(){x.dispatchEvent("timeupdate")}function A(D){v.currentTime=D;D!==M&&x.dispatchEvent("timeupdate");M=D}function O(D){switch(D.type){case "loadProgress":x.dispatchEvent("progress");break;case "playProgress":A(D.data);break;case "play":if(!K){K=setInterval(a,i);v.loop&&x.dispatchEvent("play")}Q=setInterval(G,x._util.TIMEUPDATE_MS);v.paused=false;if(y){y=false;v.loop||x.dispatchEvent("play");x.dispatchEvent("playing")}break;
case "pause":f();break;case "finish":if(v.loop){C(0);x.play()}else{v.ended=true;x.pause();f();x.dispatchEvent("timeupdate");x.dispatchEvent("ended")}break;case "seek":A(D.data)}}function a(){v.ended||s.getPosition(function(D){A(D/1E3)})}function c(D){if(x._canPlaySrc(D)){v.src=D;if(L)if(L&&s){clearInterval(K);s.pause();s.unbind(SC.Widget.Events.READY);s.unbind(SC.Widget.Events.LOAD_PROGRESS);s.unbind(SC.Widget.Events.PLAY_PROGRESS);s.unbind(SC.Widget.Events.PLAY);s.unbind(SC.Widget.Events.PAUSE);
s.unbind(SC.Widget.Events.SEEK);s.unbind(SC.Widget.Events.FINISH);z.removeChild(F);F=l.createElement("iframe")}if(d()){L=false;SC.get("/resolve",{url:D},function(T){var I;if(T.errors){I={name:"MediaError"};if(T.errors[0])if(T.errors[0].error_message==="404 - Not Found"){I.message="Video not found.";I.code=MediaError.MEDIA_ERR_NETWORK}v.error=I;x.dispatchEvent("error")}F.id=p.guid("soundcloud-");F.width=v.width;F.height=v.height;F.frameBorder=0;F.webkitAllowFullScreen=true;F.mozAllowFullScreen=true;
F.allowFullScreen=true;w(v.controls);z.appendChild(F);F.onload=function(){F.onload=null;s=SC.Widget(F);s.bind(SC.Widget.Events.READY,u);v.networkState=x.NETWORK_LOADING;x.dispatchEvent("loadstart");x.dispatchEvent("progress")};F.src="https://w.soundcloud.com/player/?url="+T.uri+"&show_artwork=false&buying=false&liking=false&sharing=false&download=false&show_comments=false&show_user=false&single_active=false"})}else b(function(){c(D)})}else{v.error={name:"MediaError",message:"Media Source Not Supported",
code:MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED};x.dispatchEvent("error")}}function n(D){v.volume=D;if(L){s.setVolume(D);x.dispatchEvent("volumechange")}else q(function(){n(D)})}function j(D){if(L)if(D){v.muted=v.volume;n(0)}else{v.muted=0;n(v.muted)}else{v.muted=D?1:0;q(function(){j(D)})}}function w(D){if(L){F.style.position="absolute";F.style.visibility=D?"visible":"hidden"}else{F.style.opacity=D?"1":"0";F.style.pointerEvents=D?"auto":"none"}v.controls=D}if(!e.postMessage)throw"ERROR: HTMLSoundCloudAudioElement requires window.postMessage";
var x=new p._MediaElementProto,z=typeof t==="string"?p.dom.find(t):t,F=l.createElement("iframe"),v={src:g,networkState:x.NETWORK_EMPTY,readyState:x.HAVE_NOTHING,seeking:false,autoplay:g,preload:g,controls:false,loop:false,poster:g,volume:100,muted:0,currentTime:0,duration:NaN,ended:false,paused:true,width:z.width|0?z.width:x._util.MIN_WIDTH,height:z.height|0?z.height:x._util.MIN_HEIGHT,error:null},L=false,y=true,s,B=[],Q,K,M=0;x._eventNamespace=p.guid("HTMLSoundCloudAudioElement::");x.parentNode=
z;x._util.type="SoundCloud";x.play=function(){v.paused=false;if(L){v.ended&&C(0);s.play()}else q(function(){x.play()})};x.pause=function(){v.paused=true;L?s.pause():q(function(){x.pause()})};Object.defineProperties(x,{src:{get:function(){return v.src},set:function(D){D&&D!==v.src&&c(D)}},autoplay:{get:function(){return v.autoplay},set:function(D){v.autoplay=x._util.isAttributeSet(D)}},loop:{get:function(){return v.loop},set:function(D){v.loop=x._util.isAttributeSet(D)}},width:{get:function(){return F.width},
set:function(D){F.width=D;v.width=F.width}},height:{get:function(){return F.height},set:function(D){F.height=D;v.height=F.height}},currentTime:{get:function(){return v.currentTime},set:function(D){C(D)}},duration:{get:function(){return v.duration}},ended:{get:function(){return v.ended}},paused:{get:function(){return v.paused}},seeking:{get:function(){return v.seeking}},readyState:{get:function(){return v.readyState}},networkState:{get:function(){return v.networkState}},volume:{get:function(){return(v.muted>
0?v.muted:v.volume)/100},set:function(D){if(D<0||D>1)throw"Volume value must be between 0.0 and 1.0";D*=100;n(D)}},muted:{get:function(){return v.muted>0},set:function(D){j(x._util.isAttributeSet(D))}},error:{get:function(){return v.error}},controls:{get:function(){return v.controls},set:function(D){w(!!D)}}});x._canPlaySrc=p.HTMLSoundCloudAudioElement._canPlaySrc;x.canPlayType=p.HTMLSoundCloudAudioElement.canPlayType;return x}var i=16,g="",k=false,r=false,m=[];p.HTMLSoundCloudAudioElement=function(t){return new h(t)};
p.HTMLSoundCloudAudioElement._canPlaySrc=function(t){return/(?:https?:\/\/www\.|https?:\/\/|www\.|\.|^)(soundcloud)/.test(t)?"probably":g};p.HTMLSoundCloudAudioElement.canPlayType=function(t){return t==="audio/x-soundcloud"?"probably":g}})(Popcorn,window,document);(function(p){var e=function(l,d){var b=0,h=0,i;p.forEach(d.classes,function(g,k){i=[];if(g==="parent")i[0]=document.querySelectorAll("#"+d.target)[0].parentNode;else i=document.querySelectorAll("#"+d.target+" "+g);b=0;for(h=i.length;b<h;b++)i[b].classList.toggle(k)})};p.compose("applyclass",{manifest:{about:{name:"Popcorn applyclass Effect",version:"0.1",author:"@scottdowne",website:"scottdowne.wordpress.com"},options:{}},_setup:function(l){l.classes={};l.applyclass=l.applyclass||"";for(var d=l.applyclass.replace(/\s/g,
"").split(","),b=[],h=0,i=d.length;h<i;h++){b=d[h].split(":");if(b[0])l.classes[b[0]]=b[1]||""}},start:e,end:e})})(Popcorn);(function(p){function e(d,b){if(d.map)d.map.div.style.display=b;else setTimeout(function(){e(d,b)},10)}var l=1;p.plugin("openmap",function(d){var b,h,i,g,k,r,m,t,q=document.getElementById(d.target);b=document.createElement("div");b.id="openmapdiv"+l;b.style.width="100%";b.style.height="100%";l++;q&&q.appendChild(b);t=function(){if(window.OpenLayers&&window.OpenLayers.Layer.Stamen){if(d.location){location=new OpenLayers.LonLat(0,0);p.getJSONP("//tinygeocoder.com/create-api.php?q="+d.location+"&callback=jsonp",
function(u){h=new OpenLayers.LonLat(u[1],u[0])})}else h=new OpenLayers.LonLat(d.lng,d.lat);d.type=d.type||"ROADMAP";switch(d.type){case "SATELLITE":d.map=new OpenLayers.Map({div:b,maxResolution:0.28125,tileSize:new OpenLayers.Size(512,512)});var o=new OpenLayers.Layer.WorldWind("LANDSAT","//worldwind25.arc.nasa.gov/tile/tile.aspx",2.25,4,{T:"105"});d.map.addLayer(o);g=new OpenLayers.Projection("EPSG:4326");i=new OpenLayers.Projection("EPSG:4326");break;case "TERRAIN":g=new OpenLayers.Projection("EPSG:4326");
i=new OpenLayers.Projection("EPSG:4326");d.map=new OpenLayers.Map({div:b,projection:i});o=new OpenLayers.Layer.WMS("USGS Terraserver","//terraserver-usa.org/ogcmap.ashx?",{layers:"DRG"});d.map.addLayer(o);break;case "STAMEN-TONER":case "STAMEN-WATERCOLOR":case "STAMEN-TERRAIN":o=d.type.replace("STAMEN-","").toLowerCase();o=new OpenLayers.Layer.Stamen(o);g=new OpenLayers.Projection("EPSG:4326");i=new OpenLayers.Projection("EPSG:900913");h=h.transform(g,i);d.map=new OpenLayers.Map({div:b,projection:i,
displayProjection:g,controls:[new OpenLayers.Control.Navigation,new OpenLayers.Control.PanPanel,new OpenLayers.Control.ZoomPanel]});d.map.addLayer(o);break;default:i=new OpenLayers.Projection("EPSG:900913");g=new OpenLayers.Projection("EPSG:4326");h=h.transform(g,i);d.map=new OpenLayers.Map({div:b,projection:i,displayProjection:g});o=new OpenLayers.Layer.OSM;d.map.addLayer(o)}if(d.map){d.map.setCenter(h,d.zoom||10);d.map.div.style.display="none"}}else setTimeout(function(){t()},50)};t();return{_setup:function(o){window.OpenLayers||
p.getScript("//openlayers.org/api/OpenLayers.js",function(){p.getScript("//maps.stamen.com/js/tile.stamen.js")});var u=function(){if(o.map){o.zoom=o.zoom||2;if(o.zoom&&typeof o.zoom!=="number")o.zoom=+o.zoom;o.map.setCenter(h,o.zoom);if(o.markers){var E=OpenLayers.Util.extend({},OpenLayers.Feature.Vector.style["default"]),C=function(j){clickedFeature=j.feature;if(clickedFeature.attributes.text){m=new OpenLayers.Popup.FramedCloud("featurePopup",clickedFeature.geometry.getBounds().getCenterLonLat(),
new OpenLayers.Size(120,250),clickedFeature.attributes.text,null,true,function(){r.unselect(this.feature)});clickedFeature.popup=m;m.feature=clickedFeature;o.map.addPopup(m)}},f=function(j){feature=j.feature;if(feature.popup){m.feature=null;o.map.removePopup(feature.popup);feature.popup.destroy();feature.popup=null}},G=function(j){p.getJSONP("//tinygeocoder.com/create-api.php?q="+j.location+"&callback=jsonp",function(w){w=(new OpenLayers.Geometry.Point(w[1],w[0])).transform(g,i);var x=OpenLayers.Util.extend({},
E);if(!j.size||isNaN(j.size))j.size=14;x.pointRadius=j.size;x.graphicOpacity=1;x.externalGraphic=j.icon;w=new OpenLayers.Feature.Vector(w,null,x);if(j.text)w.attributes={text:j.text};k.addFeatures([w])})};k=new OpenLayers.Layer.Vector("Point Layer",{style:E});o.map.addLayer(k);for(var A=0,O=o.markers.length;A<O;A++){var a=o.markers[A];if(a.text)if(!r){r=new OpenLayers.Control.SelectFeature(k);o.map.addControl(r);r.activate();k.events.on({featureselected:C,featureunselected:f})}if(a.location)G(a);
else{var c=(new OpenLayers.Geometry.Point(a.lng,a.lat)).transform(g,i),n=OpenLayers.Util.extend({},E);if(!a.size||isNaN(a.size))a.size=14;n.pointRadius=a.size;n.graphicOpacity=1;n.externalGraphic=a.icon;c=new OpenLayers.Feature.Vector(c,null,n);if(a.text)c.attributes={text:a.text};k.addFeatures([c])}}}}else setTimeout(function(){u()},13)};u()},start:function(o,u){e(u,"block")},end:function(o,u){e(u,"none")},_teardown:function(){q&&q.removeChild(b);b=map=h=i=g=k=r=m=null}}},{about:{name:"Popcorn OpenMap Plugin",
version:"0.3",author:"@mapmeld",website:"mapadelsur.blogspot.com"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},target:"map-container",type:{elem:"select",options:["ROADMAP","SATELLITE","TERRAIN"],label:"Map Type",optional:true},zoom:{elem:"input",type:"number",label:"Zoom","default":2},lat:{elem:"input",type:"text",label:"Lat",optional:true},lng:{elem:"input",type:"text",label:"Lng",optional:true},location:{elem:"input",type:"text",label:"Location",
"default":"Toronto, Ontario, Canada"},markers:{elem:"input",type:"text",label:"List Markers",optional:true}}})})(Popcorn);var wikiCallback;
(function(p){p.plugin("wikipedia",{manifest:{about:{name:"Popcorn Wikipedia Plugin",version:"0.1",author:"@annasob",website:"annasob.wordpress.com"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},lang:{elem:"input",type:"text",label:"Language","default":"english",optional:true},src:{elem:"input",type:"url",label:"Wikipedia URL","default":"http://en.wikipedia.org/wiki/Cat"},title:{elem:"input",type:"text",label:"Title","default":"Cats",optional:true},
numberofwords:{elem:"input",type:"number",label:"Number of Words","default":"200",optional:true},target:"wikipedia-container"}},_setup:function(e){var l,d=p.guid();if(!e.lang)e.lang="en";e.numberofwords=e.numberofwords||200;window["wikiCallback"+d]=function(b){e._link=document.createElement("a");e._link.setAttribute("href",e.src);e._link.setAttribute("target","_blank");e._link.innerHTML=e.title||b.parse.displaytitle;e._desc=document.createElement("p");l=b.parse.text["*"].substr(b.parse.text["*"].indexOf("<p>"));
l=l.replace(/((<(.|\n)+?>)|(\((.*?)\) )|(\[(.*?)\]))/g,"");l=l.split(" ");e._desc.innerHTML=l.slice(0,l.length>=e.numberofwords?e.numberofwords:l.length).join(" ")+" ...";e._fired=true};e.src&&p.getScript("//"+e.lang+".wikipedia.org/w/api.php?action=parse&props=text&redirects&page="+e.src.slice(e.src.lastIndexOf("/")+1)+"&format=json&callback=wikiCallback"+d);e.toString=function(){return e.src||e._natives.manifest.options.src["default"]}},start:function(e,l){var d=function(){if(l._fired){if(l._link&&
l._desc)if(document.getElementById(l.target)){document.getElementById(l.target).appendChild(l._link);document.getElementById(l.target).appendChild(l._desc);l._added=true}}else setTimeout(function(){d()},13)};d()},end:function(e,l){if(l._added){document.getElementById(l.target).removeChild(l._link);document.getElementById(l.target).removeChild(l._desc)}},_teardown:function(e){if(e._added){e._link.parentNode&&document.getElementById(e.target).removeChild(e._link);e._desc.parentNode&&document.getElementById(e.target).removeChild(e._desc);
delete e.target}}})})(Popcorn);(function(p){var e=0,l=function(d,b){var h=d.container=document.createElement("div"),i=h.style,g=d.media,k=function(){var r=d.position();i.fontSize="18px";i.width=g.offsetWidth+"px";i.top=r.top+g.offsetHeight-h.offsetHeight-40+"px";i.left=r.left+"px";setTimeout(k,10)};h.id=b||p.guid();i.position="absolute";i.color="white";i.textShadow="black 2px 2px 6px";i.fontWeight="bold";i.textAlign="center";k();d.media.parentNode.appendChild(h);return h};p.plugin("subtitle",{manifest:{about:{name:"Popcorn Subtitle Plugin",
version:"0.1",author:"Scott Downe",website:"http://scottdowne.wordpress.com/"},options:{start:{elem:"input",type:"text",label:"Start"},end:{elem:"input",type:"text",label:"End"},target:"subtitle-container",text:{elem:"input",type:"text",label:"Text"}}},_setup:function(d){var b=document.createElement("div");b.id="subtitle-"+e++;b.style.display="none";!this.container&&(!d.target||d.target==="subtitle-container")&&l(this);d.container=d.target&&d.target!=="subtitle-container"?document.getElementById(d.target)||
l(this,d.target):this.container;document.getElementById(d.container.id)&&document.getElementById(d.container.id).appendChild(b);d.innerContainer=b;d.showSubtitle=function(){d.innerContainer.innerHTML=d.text||""}},start:function(d,b){b.innerContainer.style.display="inline";b.showSubtitle(b,b.text)},end:function(d,b){b.innerContainer.style.display="none";b.innerContainer.innerHTML=""},_teardown:function(d){d.container.removeChild(d.innerContainer)}})})(Popcorn);(function(p,e){var l={};p.plugin("documentcloud",{manifest:{about:{name:"Popcorn Document Cloud Plugin",version:"0.1",author:"@humphd, @ChrisDeCairos",website:"http://vocamus.net/dave"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},target:"documentcloud-container",width:{elem:"input",type:"text",label:"Width",optional:true},height:{elem:"input",type:"text",label:"Height",optional:true},src:{elem:"input",type:"url",label:"PDF URL","default":"http://www.documentcloud.org/documents/70050-urbina-day-1-in-progress.html"},
preload:{elem:"input",type:"checkbox",label:"Preload","default":true},page:{elem:"input",type:"number",label:"Page Number",optional:true},aid:{elem:"input",type:"number",label:"Annotation Id",optional:true}}},_setup:function(d){function b(){function m(j){d._key=j.api.getId();d._changeView=function(w){d.aid?w.pageSet.showAnnotation(w.api.getAnnotation(d.aid)):w.api.setCurrentPage(d.page)}}function t(){l[d._key]={num:1,id:d._containerId};i.loaded=true}i.loaded=false;var q=d.url.replace(/\.html$/,".js"),
o=d.target,u=e.getElementById(o),E=e.createElement("div"),C=p.position(u),f=d.width||C.width;C=d.height||C.height;var G=d.sidebar||true,A=d.text||true,O=d.pdf||true,a=d.showAnnotations||true,c=d.zoom||700,n=d.search||true;if(!function(j){var w=false;p.forEach(i.viewers,function(x){if(x.api.getSchema().canonicalURL===j){m(x);x=l[d._key];d._containerId=x.id;x.num+=1;w=true;i.loaded=true}});return w}(d.url)){E.id=d._containerId=p.guid(o);o="#"+E.id;u.appendChild(E);g.trigger("documentready");i.load(q,
{width:f,height:C,sidebar:G,text:A,pdf:O,showAnnotations:a,zoom:c,search:n,container:o,afterLoad:d.page||d.aid?function(j){m(j);d._changeView(j);E.style.visibility="hidden";j.elements.pages.hide();t()}:function(j){m(j);t();E.style.visibility="hidden";j.elements.pages.hide()}})}}function h(){window.DV.loaded?b():setTimeout(h,25)}var i=window.DV=window.DV||{},g=this;if(i.loading)h();else{i.loading=true;i.recordHit="//www.documentcloud.org/pixel.gif";var k=e.createElement("link"),r=e.getElementsByTagName("head")[0];
k.rel="stylesheet";k.type="text/css";k.media="screen";k.href="//s3.documentcloud.org/viewer/viewer-datauri.css";r.appendChild(k);i.loaded=false;p.getScript("http://s3.documentcloud.org/viewer/viewer.js",function(){i.loading=false;b()})}d.toString=function(){return d.src||d._natives.manifest.options.src["default"]}},start:function(d,b){var h=e.getElementById(b._containerId),i=DV.viewers[b._key];(b.page||b.aid)&&i&&b._changeView(i);if(h&&i){h.style.visibility="visible";i.elements.pages.show()}},end:function(d,
b){var h=e.getElementById(b._containerId);if(h&&DV.viewers[b._key]){h.style.visibility="hidden";DV.viewers[b._key].elements.pages.hide()}},_teardown:function(d){var b=e.getElementById(d._containerId);if((d=d._key)&&DV.viewers[d]&&--l[d].num===0){for(DV.viewers[d].api.unload();b.hasChildNodes();)b.removeChild(b.lastChild);b.parentNode.removeChild(b)}}})})(Popcorn,window.document);(function(p){var e=/(?:http:\/\/www\.|http:\/\/|www\.|\.|^)(youtu|vimeo|soundcloud|baseplayer)/,l={},d={vimeo:false,youtube:false,soundcloud:false,module:false};Object.defineProperty(l,void 0,{get:function(){return d[void 0]},set:function(b){d[void 0]=b}});p.plugin("mediaspawner",{manifest:{about:{name:"Popcorn Media Spawner Plugin",version:"0.1",author:"Matthew Schranz, @mjschranz",website:"mschranz.wordpress.com"},options:{source:{elem:"input",type:"text",label:"Media Source","default":"http://www.youtube.com/watch?v=CXDstfD9eJ0"},
caption:{elem:"input",type:"text",label:"Media Caption","default":"Popcorn Popping",optional:true},target:"mediaspawner-container",start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},autoplay:{elem:"input",type:"checkbox",label:"Autoplay Video",optional:true},width:{elem:"input",type:"number",label:"Media Width","default":400,units:"px",optional:true},height:{elem:"input",type:"number",label:"Media Height","default":200,units:"px",optional:true}}},_setup:function(b){function h(){function t(){if(k!==
"HTML5"&&!window.Popcorn[k])setTimeout(function(){t()},300);else{b.id=b._container.id;b._container.style.width=b.width+"px";b._container.style.height=b.height+"px";b.popcorn=p.smart("#"+b.id,b.source);k==="HTML5"&&b.popcorn.controls(true);b._container.style.width="0px";b._container.style.height="0px";b._container.style.visibility="hidden";b._container.style.overflow="hidden"}}if(k!=="HTML5"&&!window.Popcorn[k]&&!l[k]){l[k]=true;p.getScript("http://popcornjs.org/code/players/"+k+"/popcorn."+k+".js",
function(){t()})}else t()}function i(){window.Popcorn.player?h():setTimeout(function(){i()},300)}var g=document.getElementById(b.target)||{},k,r,m;if(r=e.exec(b.source)){k=r[1];if(k==="youtu")k="youtube"}else k="HTML5";b._type=k;b._container=document.createElement("div");r=b._container;r.id="mediaSpawnerdiv-"+p.guid();b.width=b.width||400;b.height=b.height||200;if(b.caption){m=document.createElement("div");m.innerHTML=b.caption;m.style.display="none";b._capCont=m;r.appendChild(m)}g&&g.appendChild(r);
if(!window.Popcorn.player&&!l.module){l.module=true;p.getScript("http://popcornjs.org/code/modules/player/popcorn.player.js",i)}else i();b.toString=function(){return b.source||b._natives.manifest.options.source["default"]}},start:function(b,h){if(h._capCont)h._capCont.style.display="";h._container.style.width=h.width+"px";h._container.style.height=h.height+"px";h._container.style.visibility="visible";h._container.style.overflow="visible";h.autoplay&&h.popcorn.play()},end:function(b,h){if(h._capCont)h._capCont.style.display=
"none";h._container.style.width="0px";h._container.style.height="0px";h._container.style.visibility="hidden";h._container.style.overflow="hidden";h.popcorn.pause()},_teardown:function(b){b.popcorn&&b.popcorn.destory&&b.popcorn.destroy();document.getElementById(b.target)&&document.getElementById(b.target).removeChild(b._container)}})})(Popcorn,this);(function(p){var e=1;p.plugin("timeline",function(l){var d=document.getElementById(l.target),b=document.createElement("div"),h,i=true;if(d&&!d.firstChild){d.appendChild(h=document.createElement("div"));h.style.width="inherit";h.style.height="inherit";h.style.overflow="auto"}else h=d.firstChild;b.style.display="none";b.id="timelineDiv"+e;l.direction=l.direction||"up";if(l.direction.toLowerCase()==="down")i=false;if(d&&h)i?h.insertBefore(b,h.firstChild):h.appendChild(b);e++;b.innerHTML="<p><span id='big' style='font-size:24px; line-height: 130%;' >"+
l.title+"</span><br /><span id='mid' style='font-size: 16px;'>"+l.text+"</span><br />"+l.innerHTML;return{start:function(g,k){b.style.display="block";if(k.direction==="down")h.scrollTop=h.scrollHeight},end:function(){b.style.display="none"},_teardown:function(){h&&b&&h.removeChild(b)&&!h.firstChild&&d.removeChild(h)}}},{about:{name:"Popcorn Timeline Plugin",version:"0.1",author:"David Seifried @dcseifried",website:"dseifried.wordpress.com"},options:{start:{elem:"input",type:"number",label:"Start"},
end:{elem:"input",type:"number",label:"End"},target:"feed-container",title:{elem:"input",type:"text",label:"Title"},text:{elem:"input",type:"text",label:"Text"},innerHTML:{elem:"input",type:"text",label:"HTML Code",optional:true},direction:{elem:"select",options:["DOWN","UP"],label:"Direction",optional:true}}})})(Popcorn);(function(p){var e=0;p.plugin("flickr",function(l){var d,b=document.getElementById(l.target),h,i,g,k,r=l.numberofimages||4,m=l.height||"50px",t=l.width||"50px",q=l.padding||"5px",o=l.border||"0px";d=document.createElement("div");d.id="flickr"+e;d.style.width="100%";d.style.height="100%";d.style.display="none";e++;b&&b.appendChild(d);var u=function(){if(h)setTimeout(function(){u()},5);else{i="http://api.flickr.com/services/rest/?method=flickr.people.findByUsername&";i+="username="+l.username+"&api_key="+
l.apikey+"&format=json&jsoncallback=flickr";p.getJSONP(i,function(C){h=C.user.nsid;E()})}},E=function(){i="http://api.flickr.com/services/feeds/photos_public.gne?";if(h)i+="id="+h+"&";if(l.tags)i+="tags="+l.tags+"&";i+="lang=en-us&format=json&jsoncallback=flickr";p.xhr.getJSONP(i,function(C){var f=document.createElement("div");f.innerHTML="<p style='padding:"+q+";'>"+C.title+"<p/>";p.forEach(C.items,function(G,A){if(A<r){g=document.createElement("a");g.setAttribute("href",G.link);g.setAttribute("target",
"_blank");k=document.createElement("img");k.setAttribute("src",G.media.m);k.setAttribute("height",m);k.setAttribute("width",t);k.setAttribute("style","border:"+o+";padding:"+q);g.appendChild(k);f.appendChild(g)}else return false});d.appendChild(f)})};if(l.username&&l.apikey)u();else{h=l.userid;E()}l.toString=function(){return l.tags||l.username||"Flickr"};return{start:function(){d.style.display="inline"},end:function(){d.style.display="none"},_teardown:function(C){document.getElementById(C.target)&&
document.getElementById(C.target).removeChild(d)}}},{about:{name:"Popcorn Flickr Plugin",version:"0.2",author:"Scott Downe, Steven Weerdenburg, Annasob",website:"http://scottdowne.wordpress.com/"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},userid:{elem:"input",type:"text",label:"User ID",optional:true},tags:{elem:"input",type:"text",label:"Tags"},username:{elem:"input",type:"text",label:"Username",optional:true},apikey:{elem:"input",type:"text",
label:"API Key",optional:true},target:"flickr-container",height:{elem:"input",type:"text",label:"Height","default":"50px",optional:true},width:{elem:"input",type:"text",label:"Width","default":"50px",optional:true},padding:{elem:"input",type:"text",label:"Padding",optional:true},border:{elem:"input",type:"text",label:"Border","default":"5px",optional:true},numberofimages:{elem:"input",type:"number","default":4,label:"Number of Images"}}})})(Popcorn);(function(p){p.plugin("webpage",{manifest:{about:{name:"Popcorn Webpage Plugin",version:"0.1",author:"@annasob",website:"annasob.wordpress.com"},options:{id:{elem:"input",type:"text",label:"Id",optional:true},start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},src:{elem:"input",type:"url",label:"Webpage URL","default":"http://mozillapopcorn.org"},target:"iframe-container"}},_setup:function(e){var l=document.getElementById(e.target);e.src=e.src.replace(/^(https?:)?(\/\/)?/,
"//");e._iframe=document.createElement("iframe");e._iframe.setAttribute("width","100%");e._iframe.setAttribute("height","100%");e._iframe.id=e.id;e._iframe.src=e.src;e._iframe.style.display="none";l&&l.appendChild(e._iframe)},start:function(e,l){l._iframe.src=l.src;l._iframe.style.display="inline"},end:function(e,l){l._iframe.style.display="none"},_teardown:function(e){document.getElementById(e.target)&&document.getElementById(e.target).removeChild(e._iframe)}})})(Popcorn);(function(p){var e={},l=0,d=document.createElement("span"),b=["webkit","Moz","ms","O",""],h=["Transform","TransitionDuration","TransitionTimingFunction"],i={},g;document.getElementsByTagName("head")[0].appendChild(d);for(var k=0,r=h.length;k<r;k++)for(var m=0,t=b.length;m<t;m++){g=b[m]+h[k];if(g in d.style){i[h[k].toLowerCase()]=g;break}}document.getElementsByTagName("head")[0].appendChild(d);p.plugin("wordriver",{manifest:{about:{name:"Popcorn WordRiver Plugin"},options:{start:{elem:"input",type:"number",
label:"Start"},end:{elem:"input",type:"number",label:"End"},target:"wordriver-container",text:{elem:"input",type:"text",label:"Text","default":"Popcorn.js"},color:{elem:"input",type:"text",label:"Color","default":"Green",optional:true}}},_setup:function(q){q._duration=q.end-q.start;var o;if(!(o=e[q.target])){o=q.target;e[o]=document.createElement("div");var u=document.getElementById(o);u&&u.appendChild(e[o]);e[o].style.height="100%";e[o].style.position="relative";o=e[o]}q._container=o;q.word=document.createElement("span");
q.word.style.position="absolute";q.word.style.whiteSpace="nowrap";q.word.style.opacity=0;q.word.style.MozTransitionProperty="opacity, -moz-transform";q.word.style.webkitTransitionProperty="opacity, -webkit-transform";q.word.style.OTransitionProperty="opacity, -o-transform";q.word.style.transitionProperty="opacity, transform";q.word.style[i.transitionduration]="1s, "+q._duration+"s";q.word.style[i.transitiontimingfunction]="linear";q.word.innerHTML=q.text;q.word.style.color=q.color||"black"},start:function(q,
o){o._container.appendChild(o.word);o.word.style[i.transform]="";o.word.style.fontSize=~~(30+20*Math.random())+"px";l%=o._container.offsetWidth-o.word.offsetWidth;o.word.style.left=l+"px";l+=o.word.offsetWidth+10;o.word.style[i.transform]="translateY("+(o._container.offsetHeight-o.word.offsetHeight)+"px)";o.word.style.opacity=1;setTimeout(function(){o.word.style.opacity=0},(o.end-o.start-1||1)*1E3)},end:function(q,o){o.word.style.opacity=0},_teardown:function(q){var o=document.getElementById(q.target);
q.word.parentNode&&q._container.removeChild(q.word);e[q.target]&&!e[q.target].childElementCount&&o&&o.removeChild(e[q.target])&&delete e[q.target]}})})(Popcorn);var googleCallback;
(function(p){function e(g,k,r){g=g.type?g.type.toUpperCase():"HYBRID";var m;if(g==="STAMEN-WATERCOLOR"||g==="STAMEN-TERRAIN"||g==="STAMEN-TONER")m=g.replace("STAMEN-","").toLowerCase();r=new google.maps.Map(r,{mapTypeId:m?m:google.maps.MapTypeId[g],mapTypeControlOptions:{mapTypeIds:[]}});m&&r.mapTypes.set(m,new google.maps.StamenMapType(m));r.getDiv().style.display="none";return r}var l=1,d=false,b=false,h,i;googleCallback=function(g){if(typeof google!=="undefined"&&google.maps&&google.maps.Geocoder&&
google.maps.LatLng){h=new google.maps.Geocoder;p.getScript("//maps.stamen.com/js/tile.stamen.js",function(){b=true})}else setTimeout(function(){googleCallback(g)},1)};i=function(){if(document.body){d=true;p.getScript("//maps.google.com/maps/api/js?sensor=false&callback=googleCallback")}else setTimeout(function(){i()},1)};p.plugin("googlemap",function(g){var k,r,m,t=document.getElementById(g.target);g.type=g.type||"ROADMAP";g.zoom=g.zoom||1;g.lat=g.lat||0;g.lng=g.lng||0;d||i();k=document.createElement("div");
k.id="actualmap"+l;k.style.width=g.width||"100%";k.style.height=g.height?g.height:t&&t.clientHeight?t.clientHeight+"px":"100%";l++;t&&t.appendChild(k);var q=function(){if(b){if(k)if(g.location)h.geocode({address:g.location},function(o,u){if(k&&u===google.maps.GeocoderStatus.OK){g.lat=o[0].geometry.location.lat();g.lng=o[0].geometry.location.lng();m=new google.maps.LatLng(g.lat,g.lng);r=e(g,m,k)}});else{m=new google.maps.LatLng(g.lat,g.lng);r=e(g,m,k)}}else setTimeout(function(){q()},5)};q();g.toString=
function(){return g.location||(g.lat&&g.lng?g.lat+", "+g.lng:g._natives.manifest.options.location["default"])};return{start:function(o,u){var E=this,C,f=function(){if(r){u._map=r;r.getDiv().style.display="block";google.maps.event.trigger(r,"resize");r.setCenter(m);if(u.zoom&&typeof u.zoom!=="number")u.zoom=+u.zoom;r.setZoom(u.zoom);if(u.heading&&typeof u.heading!=="number")u.heading=+u.heading;if(u.pitch&&typeof u.pitch!=="number")u.pitch=+u.pitch;if(u.type==="STREETVIEW"){r.setStreetView(C=new google.maps.StreetViewPanorama(k,
{position:m,pov:{heading:u.heading=u.heading||0,pitch:u.pitch=u.pitch||0,zoom:u.zoom}}));var G=function(w,x){var z=google.maps.geometry.spherical.computeHeading;setTimeout(function(){var F=E.media.currentTime;if(typeof u.tween==="object"){for(var v=0,L=w.length;v<L;v++){var y=w[v];if(F>=y.interval*(v+1)/1E3&&(F<=y.interval*(v+2)/1E3||F>=y.interval*L/1E3)){n.setPosition(new google.maps.LatLng(y.position.lat,y.position.lng));n.setPov({heading:y.pov.heading||z(y,w[v+1])||0,zoom:y.pov.zoom||0,pitch:y.pov.pitch||
0})}}G(w,w[0].interval)}else{v=0;for(L=w.length;v<L;v++){y=u.interval;if(F>=y*(v+1)/1E3&&(F<=y*(v+2)/1E3||F>=y*L/1E3)){A.setPov({heading:z(w[v],w[v+1])||0,zoom:u.zoom,pitch:u.pitch||0});A.setPosition(O[v])}}G(O,u.interval)}},x)};if(u.location&&typeof u.tween==="string"){var A=C,O=[],a=new google.maps.DirectionsService,c=new google.maps.DirectionsRenderer(A);a.route({origin:u.location,destination:u.tween,travelMode:google.maps.TravelMode.DRIVING},function(w,x){if(x==google.maps.DirectionsStatus.OK){c.setDirections(w);
for(var z=w.routes[0].overview_path,F=0,v=z.length;F<v;F++)O.push(new google.maps.LatLng(z[F].lat(),z[F].lng()));u.interval=u.interval||1E3;G(O,10)}})}else if(typeof u.tween==="object"){var n=C;a=0;for(var j=u.tween.length;a<j;a++){u.tween[a].interval=u.tween[a].interval||1E3;G(u.tween,10)}}}u.onmaploaded&&u.onmaploaded(u,r)}else setTimeout(function(){f()},13)};f()},end:function(){if(r)r.getDiv().style.display="none"},_teardown:function(o){var u=document.getElementById(o.target);u&&u.removeChild(k);
k=r=m=null;o._map=null}}},{about:{name:"Popcorn Google Map Plugin",version:"0.1",author:"@annasob",website:"annasob.wordpress.com"},options:{start:{elem:"input",type:"start",label:"Start"},end:{elem:"input",type:"start",label:"End"},target:"map-container",type:{elem:"select",options:["ROADMAP","SATELLITE","STREETVIEW","HYBRID","TERRAIN","STAMEN-WATERCOLOR","STAMEN-TERRAIN","STAMEN-TONER"],label:"Map Type",optional:true},zoom:{elem:"input",type:"text",label:"Zoom","default":0,optional:true},lat:{elem:"input",
type:"text",label:"Lat",optional:true},lng:{elem:"input",type:"text",label:"Lng",optional:true},location:{elem:"input",type:"text",label:"Location","default":"Toronto, Ontario, Canada"},heading:{elem:"input",type:"text",label:"Heading","default":0,optional:true},pitch:{elem:"input",type:"text",label:"Pitch","default":1,optional:true}}})})(Popcorn);(function(p){p.plugin("mustache",function(e){var l,d,b,h;p.getScript("http://mustache.github.com/extras/mustache.js");var i=!!e.dynamic,g=typeof e.template,k=typeof e.data,r=document.getElementById(e.target);e.container=r||document.createElement("div");if(g==="function")if(i)b=e.template;else h=e.template(e);else h=g==="string"?e.template:"";if(k==="function")if(i)l=e.data;else d=e.data(e);else d=k==="string"?JSON.parse(e.data):k==="object"?e.data:"";return{start:function(m,t){var q=function(){if(window.Mustache){if(l)d=
l(t);if(b)h=b(t);var o=Mustache.to_html(h,d).replace(/^\s*/mg,"");t.container.innerHTML=o}else setTimeout(function(){q()},10)};q()},end:function(m,t){t.container.innerHTML=""},_teardown:function(){l=d=b=h=null}}},{about:{name:"Popcorn Mustache Plugin",version:"0.1",author:"David Humphrey (@humphd)",website:"http://vocamus.net/dave"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},target:"mustache-container",template:{elem:"input",type:"text",
label:"Template"},data:{elem:"input",type:"text",label:"Data"},dynamic:{elem:"input",type:"checkbox",label:"Dynamic","default":true}}})})(Popcorn);document.addEventListener("click",function(p){p=p.target;if(p.nodeName==="A"||p.parentNode&&p.parentNode.nodeName==="A")Popcorn.instances.forEach(function(e){e.options.pauseOnLinkClicked&&e.pause()})},false);(function(p){p.plugin("footnote",{manifest:{about:{name:"Popcorn Footnote Plugin",version:"0.2",author:"@annasob, @rwaldron",website:"annasob.wordpress.com"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},text:{elem:"input",type:"text",label:"Text"},target:"footnote-container"}},_setup:function(e){var l=p.dom.find(e.target);e._container=document.createElement("div");e._container.style.display="none";e._container.innerHTML=e.text;l.appendChild(e._container)},
start:function(e,l){l._container.style.display="inline"},end:function(e,l){l._container.style.display="none"},_teardown:function(e){var l=p.dom.find(e.target);l&&l.removeChild(e._container)}})})(Popcorn);(function(p){var e=1,l=false;p.plugin("googlefeed",function(d){var b=function(){var k=false,r=0,m=document.getElementsByTagName("link"),t=m.length,q=document.head||document.getElementsByTagName("head")[0],o=document.createElement("link");if(window.GFdynamicFeedControl)l=true;else p.getScript("//www.google.com/uds/solutions/dynamicfeed/gfdynamicfeedcontrol.js",function(){l=true});for(;r<t;r++)if(m[r].href==="//www.google.com/uds/solutions/dynamicfeed/gfdynamicfeedcontrol.css")k=true;if(!k){o.type=
"text/css";o.rel="stylesheet";o.href="//www.google.com/uds/solutions/dynamicfeed/gfdynamicfeedcontrol.css";q.insertBefore(o,q.firstChild)}};window.google?b():p.getScript("//www.google.com/jsapi",function(){google.load("feeds","1",{callback:function(){b()}})});var h=document.createElement("div"),i=document.getElementById(d.target),g=function(){if(l)d.feed=new GFdynamicFeedControl(d.url,h,{vertical:d.orientation.toLowerCase()==="vertical"?true:false,horizontal:d.orientation.toLowerCase()==="horizontal"?
true:false,title:d.title=d.title||"Blog"});else setTimeout(function(){g()},5)};if(!d.orientation||d.orientation.toLowerCase()!=="vertical"&&d.orientation.toLowerCase()!=="horizontal")d.orientation="vertical";h.style.display="none";h.id="_feed"+e;h.style.width="100%";h.style.height="100%";e++;i&&i.appendChild(h);g();d.toString=function(){return d.url||d._natives.manifest.options.url["default"]};return{start:function(){h.setAttribute("style","display:inline")},end:function(){h.setAttribute("style",
"display:none")},_teardown:function(k){document.getElementById(k.target)&&document.getElementById(k.target).removeChild(h);delete k.feed}}},{about:{name:"Popcorn Google Feed Plugin",version:"0.1",author:"David Seifried",website:"dseifried.wordpress.com"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},target:"feed-container",url:{elem:"input",type:"url",label:"Feed URL","default":"http://planet.mozilla.org/rss20.xml"},title:{elem:"input",type:"text",
label:"Title","default":"Planet Mozilla",optional:true},orientation:{elem:"select",options:["Vertical","Horizontal"],label:"Orientation","default":"Vertical",optional:true}}})})(Popcorn);(function(p){function e(b){return String(b).replace(/&(?!\w+;)|[<>"']/g,function(h){return d[h]||h})}function l(b,h){var i=b.container=document.createElement("div"),g=i.style,k=b.media,r=function(){var m=b.position();g.fontSize="18px";g.width=k.offsetWidth+"px";g.top=m.top+k.offsetHeight-i.offsetHeight-40+"px";g.left=m.left+"px";setTimeout(r,10)};i.id=h||"";g.position="absolute";g.color="white";g.textShadow="black 2px 2px 6px";g.fontWeight="bold";g.textAlign="center";r();b.media.parentNode.appendChild(i);
return i}var d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};p.plugin("text",{manifest:{about:{name:"Popcorn Text Plugin",version:"0.1",author:"@humphd"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},text:{elem:"input",type:"text",label:"Text","default":"Popcorn.js"},escape:{elem:"input",type:"checkbox",label:"Escape"},multiline:{elem:"input",type:"checkbox",label:"Multiline"}}},_setup:function(b){var h,i,g=b._container=document.createElement("div");
g.style.display="none";if(b.target)if(h=p.dom.find(b.target)){if(["VIDEO","AUDIO"].indexOf(h.nodeName)>-1)h=l(this,b.target+"-overlay")}else h=l(this,b.target);else h=this.container?this.container:l(this);b._target=h;i=b.escape?e(b.text):b.text;i=b.multiline?i.replace(/\r?\n/gm,"<br>"):i;g.innerHTML=i||"";h.appendChild(g);b.toString=function(){return b.text||b._natives.manifest.options.text["default"]}},start:function(b,h){h._container.style.display="inline"},end:function(b,h){h._container.style.display=
"none"},_teardown:function(b){var h=b._target;h&&h.removeChild(b._container)}})})(Popcorn);(function(p){p.plugin("code",function(e){var l=false,d=this,b=function(){var h=function(i){return function(g,k){var r=function(){l&&g.call(d,k);l&&i(r)};r()}};return window.webkitRequestAnimationFrame?h(window.webkitRequestAnimationFrame):window.mozRequestAnimationFrame?h(window.mozRequestAnimationFrame):h(function(i){window.setTimeout(i,16)})}();if(!e.onStart||typeof e.onStart!=="function")e.onStart=p.nop;if(e.onEnd&&typeof e.onEnd!=="function")e.onEnd=undefined;if(e.onFrame&&typeof e.onFrame!==
"function")e.onFrame=undefined;return{start:function(h,i){i.onStart.call(d,i);if(i.onFrame){l=true;b(i.onFrame,i)}},end:function(h,i){if(i.onFrame)l=false;i.onEnd&&i.onEnd.call(d,i)}}},{about:{name:"Popcorn Code Plugin",version:"0.1",author:"David Humphrey (@humphd)",website:"http://vocamus.net/dave"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},onStart:{elem:"input",type:"function",label:"onStart"},onFrame:{elem:"input",type:"function",label:"onFrame",
optional:true},onEnd:{elem:"input",type:"function",label:"onEnd"}}})})(Popcorn);(function(p){function e(b){function h(){var r=b.getBoundingClientRect(),m=g.getBoundingClientRect();if(m.left!==r.left)g.style.left=r.left+"px";if(m.top!==r.top)g.style.top=r.top+"px"}var i=-1,g=document.createElement("div"),k=getComputedStyle(b).zIndex;g.setAttribute("data-popcorn-helper-container",true);g.style.position="absolute";g.style.zIndex=isNaN(k)?l:k+1;document.body.appendChild(g);return{element:g,start:function(){i=setInterval(h,d)},stop:function(){clearInterval(i);i=-1},destroy:function(){document.body.removeChild(g);
i!==-1&&clearInterval(i)}}}var l=2E3,d=10;p.plugin("image",{manifest:{about:{name:"Popcorn image Plugin",version:"0.1",author:"Scott Downe",website:"http://scottdowne.wordpress.com/"},options:{start:{elem:"input",type:"number",label:"Start"},end:{elem:"input",type:"number",label:"End"},src:{elem:"input",type:"url",label:"Image URL","default":"http://mozillapopcorn.org/wp-content/themes/popcorn/images/for_developers.png"},href:{elem:"input",type:"url",label:"Link","default":"http://mozillapopcorn.org/wp-content/themes/popcorn/images/for_developers.png",
optional:true},target:"image-container",text:{elem:"input",type:"text",label:"Caption","default":"Popcorn.js",optional:true}}},_setup:function(b){var h=document.createElement("img"),i=document.getElementById(b.target);b.anchor=document.createElement("a");b.anchor.style.position="relative";b.anchor.style.textDecoration="none";b.anchor.style.display="none";if(i)if(["VIDEO","AUDIO"].indexOf(i.nodeName)>-1){b.trackedContainer=e(i);b.trackedContainer.element.appendChild(b.anchor)}else i&&i.appendChild(b.anchor);
h.addEventListener("load",function(){h.style.borderStyle="none";b.anchor.href=b.href||b.src||"#";b.anchor.target="_blank";var g,k;h.style.height=i.style.height;h.style.width=i.style.width;b.anchor.appendChild(h);if(b.text){g=h.height/12+"px";k=document.createElement("div");p.extend(k.style,{color:"black",fontSize:g,fontWeight:"bold",position:"relative",textAlign:"center",width:h.style.width||h.width+"px",zIndex:"10"});k.innerHTML=b.text||"";k.style.top=(h.style.height.replace("px","")||h.height)/
2-k.offsetHeight/2+"px";b.anchor.insertBefore(k,h)}},false);h.src=b.src;b.toString=function(){var g=b.src||b._natives.manifest.options.src["default"],k=g.replace(/.*\//g,"");return k.length?k:g}},start:function(b,h){h.anchor.style.display="inline";h.trackedContainer&&h.trackedContainer.start()},end:function(b,h){h.anchor.style.display="none";h.trackedContainer&&h.trackedContainer.stop()},_teardown:function(b){if(b.trackedContainer)b.trackedContainer.destroy();else b.anchor.parentNode&&b.anchor.parentNode.removeChild(b.anchor)}})})(Popcorn);(function(p){p.parser("parseXML","XML",function(e){var l={title:"",remote:"",data:[]},d={},b=function(m){m=m.split(":");if(m.length===1)return parseFloat(m[0],10);else if(m.length===2)return parseFloat(m[0],10)+parseFloat(m[1]/12,10);else if(m.length===3)return parseInt(m[0]*60,10)+parseFloat(m[1],10)+parseFloat(m[2]/12,10);else if(m.length===4)return parseInt(m[0]*3600,10)+parseInt(m[1]*60,10)+parseFloat(m[2],10)+parseFloat(m[3]/12,10)},h=function(m){for(var t={},q=0,o=m.length;q<o;q++){var u=m.item(q).nodeName,
E=m.item(q).nodeValue,C=d[E];if(u==="in")t.start=b(E);else if(u==="out")t.end=b(E);else if(u==="resourceid")for(var f in C){if(C.hasOwnProperty(f))if(!t[f]&&f!=="id")t[f]=C[f]}else t[u]=E}return t},i=function(m,t){var q={};q[m]=t;return q},g=function(m,t,q){var o={};p.extend(o,t,h(m.attributes),{text:m.textContent||m.text});t=m.childNodes;if(t.length<1||t.length===1&&t[0].nodeType===3)if(q)d[o.id]=o;else l.data.push(i(m.nodeName,o));else for(m=0;m<t.length;m++)t[m].nodeType===1&&g(t[m],o,q)};e=e.documentElement.childNodes;
for(var k=0,r=e.length;k<r;k++)if(e[k].nodeType===1)e[k].nodeName==="manifest"?g(e[k],{},true):g(e[k],{},false);return l})})(Popcorn);(function(p){p.parser("parseSBV",function(e){var l={title:"",remote:"",data:[]},d=[],b=0,h=0,i=function(q){q=q.split(":");var o=q.length-1,u;try{u=parseInt(q[o-1],10)*60+parseFloat(q[o],10);if(o===2)u+=parseInt(q[0],10)*3600}catch(E){throw"Bad cue";}return u},g=function(q,o){var u={};u[q]=o;return u};e=e.text.split(/(?:\r\n|\r|\n)/gm);for(h=e.length;b<h;){var k={},r=[],m=e[b++].split(",");try{k.start=i(m[0]);for(k.end=i(m[1]);b<h&&e[b];)r.push(e[b++]);k.text=r.join("<br />");d.push(g("subtitle",k))}catch(t){for(;b<
h&&e[b];)b++}for(;b<h&&!e[b];)b++}l.data=d;return l})})(Popcorn);(function(p){p.parser("parseJSON","JSON",function(e){var l={title:"",remote:"",data:[]};p.forEach(e.data,function(d){l.data.push(d)});return l})})(Popcorn);(function(p){p.parser("parseTTXT",function(e){var l={title:"",remote:"",data:[]},d=function(k){k=k.split(":");var r=0;try{return parseFloat(k[0],10)*60*60+parseFloat(k[1],10)*60+parseFloat(k[2],10)}catch(m){r=0}return r},b=function(k,r){var m={};m[k]=r;return m};e=e.xml.lastChild.lastChild;for(var h=Number.MAX_VALUE,i=[];e;){if(e.nodeType===1&&e.nodeName==="TextSample"){var g={};g.start=d(e.getAttribute("sampleTime"));g.text=e.getAttribute("text");if(g.text){g.end=h-0.0010;i.push(b("subtitle",g))}h=
g.start}e=e.previousSibling}l.data=i.reverse();return l})})(Popcorn);(function(p){function e(g,k,r){var m=g.firstChild;g=l(g,r);r=[];for(var t;m;){if(m.nodeType===1)if(m.nodeName==="p")r.push(d(m,k,g));else if(m.nodeName==="div"){t=b(m.getAttribute("begin"));if(t<0)t=k;r.push.apply(r,e(m,t,g))}m=m.nextSibling}return r}function l(g,k){var r=g.getAttribute("region");return r!==null?r:k||""}function d(g,k,r){var m={};m.text=(g.textContent||g.text).replace(h,"").replace(i,"<br />");m.id=g.getAttribute("xml:id")||g.getAttribute("id");m.start=b(g.getAttribute("begin"),k);
m.end=b(g.getAttribute("end"),k);m.target=l(g,r);if(m.end<0){m.end=b(g.getAttribute("duration"),0);if(m.end>=0)m.end+=m.start;else m.end=Number.MAX_VALUE}return{subtitle:m}}function b(g,k){var r;if(!g)return-1;try{return p.util.toSeconds(g)}catch(m){for(var t=g.length-1;t>=0&&g[t]<="9"&&g[t]>="0";)t--;r=t;t=parseFloat(g.substring(0,r));r=g.substring(r);return t*({h:3600,m:60,s:1,ms:0.0010}[r]||-1)+(k||0)}}var h=/^[\s]+|[\s]+$/gm,i=/(?:\r\n|\r|\n)/gm;p.parser("parseTTML",function(g){var k={title:"",
remote:"",data:[]};if(!g.xml||!g.xml.documentElement)return k;g=g.xml.documentElement.firstChild;if(!g)return k;for(;g.nodeName!=="body";)g=g.nextSibling;if(g)k.data=e(g,0);return k})})(Popcorn);(function(p){function e(d){var b=d.split(":");d=d.length;var h;if(d!==12&&d!==9)throw"Bad cue";d=b.length-1;try{h=parseInt(b[d-1],10)*60+parseFloat(b[d],10);if(d===2)h+=parseInt(b[0],10)*3600}catch(i){throw"Bad cue";}return h}function l(d,b){var h={};h[d]=b;return h}p.parser("parseVTT",function(d){var b={title:"",remote:"",data:[]},h=[],i=0,g=0,k,r;d=d.text.split(/(?:\r\n|\r|\n)/gm);g=d.length;if(g===0||d[0]!=="WEBVTT")return b;for(i++;i<g;){k=[];try{for(var m=i;m<g&&!d[m];)m++;i=m;var t=d[i++];m=
void 0;var q={};if(!t||t.indexOf("--\>")===-1)throw"Bad cue";m=t.replace(/--\>/," --\> ").split(/[\t ]+/);if(m.length<2)throw"Bad cue";q.id=t;q.start=e(m[0]);q.end=e(m[2]);for(r=q;i<g&&d[i];)k.push(d[i++]);r.text=k.join("<br />");h.push(l("subtitle",r))}catch(o){for(i=i;i<g&&d[i];)i++;i=i}}b.data=h;return b})})(Popcorn);(function(p){function e(b,h){var i=b.substr(10).split(","),g;g={start:l(i[h.start]),end:l(i[h.end])};if(g.start===-1||g.end===-1)throw"Invalid time";var k=q.call(m,/\{(\\[\w]+\(?([\w\d]+,?)+\)?)+\}/gi,""),r=k.replace,m;m=i.length;q=[];for(var t=h.text;t<m;t++)q.push(i[t]);m=q.join(",");var q=m.replace;g.text=r.call(k,/\\N/gi,"<br />");return g}function l(b){var h=b.split(":");if(b.length!==10||h.length<3)return-1;return parseInt(h[0],10)*3600+parseInt(h[1],10)*60+parseFloat(h[2],10)}function d(b,
h){var i={};i[b]=h;return i}p.parser("parseSSA",function(b){var h={title:"",remote:"",data:[]},i=[],g=0,k;b=b.text.split(/(?:\r\n|\r|\n)/gm);for(k=b.length;g<k&&b[g]!=="[Events]";)g++;var r=b[++g].substr(8).split(", "),m={},t,q;q=0;for(t=r.length;q<t;q++)if(r[q]==="Start")m.start=q;else if(r[q]==="End")m.end=q;else if(r[q]==="Text")m.text=q;for(;++g<k&&b[g]&&b[g][0]!=="[";)try{i.push(d("subtitle",e(b[g],m)))}catch(o){}h.data=i;return h})})(Popcorn);(function(p){function e(d,b){var h={};h[d]=b;return h}function l(d){d=d.split(":");try{var b=d[2].split(",");if(b.length===1)b=d[2].split(".");return parseFloat(d[0],10)*3600+parseFloat(d[1],10)*60+parseFloat(b[0],10)+parseFloat(b[1],10)/1E3}catch(h){return 0}}p.parser("parseSRT",function(d,b){var h={title:"",remote:"",data:[]},i=[],g=0,k=0,r,m,t,q,o;r=d.text.split(/(?:\r\n|\r|\n)/gm);for(t=r.length-1;t>=0&&!r[t];)t--;q=t+1;for(g=0;g<q;g++){o={};t=[];for(g=g;!r[g];)g++;g=g;o.id=parseInt(r[g++],10);
m=r[g++].split(/[\t ]*--\>[\t ]*/);o.start=l(m[0]);k=m[1].indexOf(" ");if(k!==-1)m[1]=m[1].substr(0,k);for(o.end=l(m[1]);g<q&&r[g];)t.push(r[g++]);o.text=t.join("\\N").replace(/\{(\\[\w]+\(?([\w\d]+,?)+\)?)+\}/gi,"");o.text=o.text.replace(/</g,"&lt;").replace(/>/g,"&gt;");o.text=o.text.replace(/&lt;(\/?(font|b|u|i|s))((\s+(\w|\w[\w\-]*\w)(\s*=\s*(?:\".*?\"|'.*?'|[^'\">\s]+))?)+\s*|\s*)(\/?)&gt;/gi,"<$1$3$7>");o.text=o.text.replace(/\\N/gi,"<br />");if(b&&b.target)o.target=b.target;i.push(e("subtitle",
o))}h.data=i;return h})})(Popcorn);(function(p,e){e.player("vimeo",{_canPlayType:function(l,d){return typeof d==="string"&&e.HTMLVimeoVideoElement._canPlaySrc(d)}});e.vimeo=function(l,d,b){typeof console!=="undefined"&&console.warn&&console.warn("Deprecated player 'vimeo'. Please use Popcorn.HTMLVimeoVideoElement directly.");var h=e.HTMLVimeoVideoElement(l);l=e(h,b);setTimeout(function(){h.src=d},0);return l}})(window,Popcorn);(function(p,e){var l=function(d,b){return typeof b==="string"&&e.HTMLYouTubeVideoElement._canPlaySrc(b)};e.player("youtube",{_canPlayType:l});e.youtube=function(d,b,h){typeof console!=="undefined"&&console.warn&&console.warn("Deprecated player 'youtube'. Please use Popcorn.HTMLYouTubeVideoElement directly.");var i=e.HTMLYouTubeVideoElement(d);d=e(i,h);setTimeout(function(){i.src=b},0);return d};e.youtube.canPlayType=l})(window,Popcorn);(function(p,e){e.player("soundcloud",{_canPlayType:function(l,d){return typeof d==="string"&&e.HTMLSoundCloudAudioElement._canPlaySrc(d)&&l.toLowerCase()!=="audio"}});e.soundcloud=function(l,d,b){typeof console!=="undefined"&&console.warn&&console.warn("Deprecated player 'soundcloud'. Please use Popcorn.HTMLSoundCloudAudioElement directly.");var h=e.HTMLSoundCloudAudioElement(l);l=e(h,b);setTimeout(function(){h.src=d},0);return l}})(window,Popcorn);

/*!
* @license CreateJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011-2015 gskinner.com, inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs=this.createjs||{},createjs.extend=function(a,b){"use strict";function c(){this.constructor=a}return c.prototype=b.prototype,a.prototype=new c},this.createjs=this.createjs||{},createjs.promote=function(a,b){"use strict";var c=a.prototype,d=Object.getPrototypeOf&&Object.getPrototypeOf(c)||c.__proto__;if(d){c[(b+="_")+"constructor"]=d.constructor;for(var e in d)c.hasOwnProperty(e)&&"function"==typeof d[e]&&(c[b+e]=d[e])}return a},this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.type=a,this.target=null,this.currentTarget=null,this.eventPhase=0,this.bubbles=!!b,this.cancelable=!!c,this.timeStamp=(new Date).getTime(),this.defaultPrevented=!1,this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.removed=!1}var b=a.prototype;b.preventDefault=function(){this.defaultPrevented=this.cancelable&&!0},b.stopPropagation=function(){this.propagationStopped=!0},b.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},b.remove=function(){this.removed=!0},b.clone=function(){return new a(this.type,this.bubbles,this.cancelable)},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[Event (type="+this.type+")]"},createjs.Event=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this._listeners=null,this._captureListeners=null}var b=a.prototype;a.initialize=function(a){a.addEventListener=b.addEventListener,a.on=b.on,a.removeEventListener=a.off=b.removeEventListener,a.removeAllEventListeners=b.removeAllEventListeners,a.hasEventListener=b.hasEventListener,a.dispatchEvent=b.dispatchEvent,a._dispatchEvent=b._dispatchEvent,a.willTrigger=b.willTrigger},b.addEventListener=function(a,b,c){var d;d=c?this._captureListeners=this._captureListeners||{}:this._listeners=this._listeners||{};var e=d[a];return e&&this.removeEventListener(a,b,c),e=d[a],e?e.push(b):d[a]=[b],b},b.on=function(a,b,c,d,e,f){return b.handleEvent&&(c=c||b,b=b.handleEvent),c=c||this,this.addEventListener(a,function(a){b.call(c,a,e),d&&a.remove()},f)},b.removeEventListener=function(a,b,c){var d=c?this._captureListeners:this._listeners;if(d){var e=d[a];if(e)for(var f=0,g=e.length;g>f;f++)if(e[f]==b){1==g?delete d[a]:e.splice(f,1);break}}},b.off=b.removeEventListener,b.removeAllEventListeners=function(a){a?(this._listeners&&delete this._listeners[a],this._captureListeners&&delete this._captureListeners[a]):this._listeners=this._captureListeners=null},b.dispatchEvent=function(a,b,c){if("string"==typeof a){var d=this._listeners;if(!(b||d&&d[a]))return!0;a=new createjs.Event(a,b,c)}else a.target&&a.clone&&(a=a.clone());try{a.target=this}catch(e){}if(a.bubbles&&this.parent){for(var f=this,g=[f];f.parent;)g.push(f=f.parent);var h,i=g.length;for(h=i-1;h>=0&&!a.propagationStopped;h--)g[h]._dispatchEvent(a,1+(0==h));for(h=1;i>h&&!a.propagationStopped;h++)g[h]._dispatchEvent(a,3)}else this._dispatchEvent(a,2);return!a.defaultPrevented},b.hasEventListener=function(a){var b=this._listeners,c=this._captureListeners;return!!(b&&b[a]||c&&c[a])},b.willTrigger=function(a){for(var b=this;b;){if(b.hasEventListener(a))return!0;b=b.parent}return!1},b.toString=function(){return"[EventDispatcher]"},b._dispatchEvent=function(a,b){var c,d=1==b?this._captureListeners:this._listeners;if(a&&d){var e=d[a.type];if(!e||!(c=e.length))return;try{a.currentTarget=this}catch(f){}try{a.eventPhase=b}catch(f){}a.removed=!1,e=e.slice();for(var g=0;c>g&&!a.immediatePropagationStopped;g++){var h=e[g];h.handleEvent?h.handleEvent(a):h(a),a.removed&&(this.off(a.type,h,1==b),a.removed=!1)}}},createjs.EventDispatcher=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ticker cannot be instantiated."}a.RAF_SYNCHED="synched",a.RAF="raf",a.TIMEOUT="timeout",a.useRAF=!1,a.timingMode=null,a.maxDelta=0,a.paused=!1,a.removeEventListener=null,a.removeAllEventListeners=null,a.dispatchEvent=null,a.hasEventListener=null,a._listeners=null,createjs.EventDispatcher.initialize(a),a._addEventListener=a.addEventListener,a.addEventListener=function(){return!a._inited&&a.init(),a._addEventListener.apply(a,arguments)},a._inited=!1,a._startTime=0,a._pausedTime=0,a._ticks=0,a._pausedTicks=0,a._interval=50,a._lastTime=0,a._times=null,a._tickTimes=null,a._timerId=null,a._raf=!0,a.setInterval=function(b){a._interval=b,a._inited&&a._setupTick()},a.getInterval=function(){return a._interval},a.setFPS=function(b){a.setInterval(1e3/b)},a.getFPS=function(){return 1e3/a._interval};try{Object.defineProperties(a,{interval:{get:a.getInterval,set:a.setInterval},framerate:{get:a.getFPS,set:a.setFPS}})}catch(b){console.log(b)}a.init=function(){a._inited||(a._inited=!0,a._times=[],a._tickTimes=[],a._startTime=a._getTime(),a._times.push(a._lastTime=0),a.interval=a._interval)},a.reset=function(){if(a._raf){var b=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;b&&b(a._timerId)}else clearTimeout(a._timerId);a.removeAllEventListeners("tick"),a._timerId=a._times=a._tickTimes=null,a._startTime=a._lastTime=a._ticks=0,a._inited=!1},a.getMeasuredTickTime=function(b){var c=0,d=a._tickTimes;if(!d||d.length<1)return-1;b=Math.min(d.length,b||0|a.getFPS());for(var e=0;b>e;e++)c+=d[e];return c/b},a.getMeasuredFPS=function(b){var c=a._times;return!c||c.length<2?-1:(b=Math.min(c.length-1,b||0|a.getFPS()),1e3/((c[0]-c[b])/b))},a.setPaused=function(b){a.paused=b},a.getPaused=function(){return a.paused},a.getTime=function(b){return a._startTime?a._getTime()-(b?a._pausedTime:0):-1},a.getEventTime=function(b){return a._startTime?(a._lastTime||a._startTime)-(b?a._pausedTime:0):-1},a.getTicks=function(b){return a._ticks-(b?a._pausedTicks:0)},a._handleSynch=function(){a._timerId=null,a._setupTick(),a._getTime()-a._lastTime>=.97*(a._interval-1)&&a._tick()},a._handleRAF=function(){a._timerId=null,a._setupTick(),a._tick()},a._handleTimeout=function(){a._timerId=null,a._setupTick(),a._tick()},a._setupTick=function(){if(null==a._timerId){var b=a.timingMode||a.useRAF&&a.RAF_SYNCHED;if(b==a.RAF_SYNCHED||b==a.RAF){var c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(c)return a._timerId=c(b==a.RAF?a._handleRAF:a._handleSynch),void(a._raf=!0)}a._raf=!1,a._timerId=setTimeout(a._handleTimeout,a._interval)}},a._tick=function(){var b=a.paused,c=a._getTime(),d=c-a._lastTime;if(a._lastTime=c,a._ticks++,b&&(a._pausedTicks++,a._pausedTime+=d),a.hasEventListener("tick")){var e=new createjs.Event("tick"),f=a.maxDelta;e.delta=f&&d>f?f:d,e.paused=b,e.time=c,e.runTime=c-a._pausedTime,a.dispatchEvent(e)}for(a._tickTimes.unshift(a._getTime()-c);a._tickTimes.length>100;)a._tickTimes.pop();for(a._times.unshift(c);a._times.length>100;)a._times.pop()};var c=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);a._getTime=function(){return(c&&c.call(performance)||(new Date).getTime())-a._startTime},createjs.Ticker=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"UID cannot be instantiated"}a._nextID=0,a.get=function(){return a._nextID++},createjs.UID=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h,i,j,k){this.Event_constructor(a,b,c),this.stageX=d,this.stageY=e,this.rawX=null==i?d:i,this.rawY=null==j?e:j,this.nativeEvent=f,this.pointerID=g,this.primary=!!h,this.relatedTarget=k}var b=createjs.extend(a,createjs.Event);b._get_localX=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).x},b._get_localY=function(){return this.currentTarget.globalToLocal(this.rawX,this.rawY).y},b._get_isTouch=function(){return-1!==this.pointerID};try{Object.defineProperties(b,{localX:{get:b._get_localX},localY:{get:b._get_localY},isTouch:{get:b._get_isTouch}})}catch(c){}b.clone=function(){return new a(this.type,this.bubbles,this.cancelable,this.stageX,this.stageY,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)},b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"},createjs.MouseEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f){this.setValues(a,b,c,d,e,f)}var b=a.prototype;a.DEG_TO_RAD=Math.PI/180,a.identity=null,b.setValues=function(a,b,c,d,e,f){return this.a=null==a?1:a,this.b=b||0,this.c=c||0,this.d=null==d?1:d,this.tx=e||0,this.ty=f||0,this},b.append=function(a,b,c,d,e,f){var g=this.a,h=this.b,i=this.c,j=this.d;return(1!=a||0!=b||0!=c||1!=d)&&(this.a=g*a+i*b,this.b=h*a+j*b,this.c=g*c+i*d,this.d=h*c+j*d),this.tx=g*e+i*f+this.tx,this.ty=h*e+j*f+this.ty,this},b.prepend=function(a,b,c,d,e,f){var g=this.a,h=this.c,i=this.tx;return this.a=a*g+c*this.b,this.b=b*g+d*this.b,this.c=a*h+c*this.d,this.d=b*h+d*this.d,this.tx=a*i+c*this.ty+e,this.ty=b*i+d*this.ty+f,this},b.appendMatrix=function(a){return this.append(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.prependMatrix=function(a){return this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.appendTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.append(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c),this.append(l*d,m*d,-m*e,l*e,0,0)):this.append(l*d,m*d,-m*e,l*e,b,c),(i||j)&&(this.tx-=i*this.a+j*this.c,this.ty-=i*this.b+j*this.d),this},b.prependTransform=function(b,c,d,e,f,g,h,i,j){if(f%360)var k=f*a.DEG_TO_RAD,l=Math.cos(k),m=Math.sin(k);else l=1,m=0;return(i||j)&&(this.tx-=i,this.ty-=j),g||h?(g*=a.DEG_TO_RAD,h*=a.DEG_TO_RAD,this.prepend(l*d,m*d,-m*e,l*e,0,0),this.prepend(Math.cos(h),Math.sin(h),-Math.sin(g),Math.cos(g),b,c)):this.prepend(l*d,m*d,-m*e,l*e,b,c),this},b.rotate=function(b){b*=a.DEG_TO_RAD;var c=Math.cos(b),d=Math.sin(b),e=this.a,f=this.b;return this.a=e*c+this.c*d,this.b=f*c+this.d*d,this.c=-e*d+this.c*c,this.d=-f*d+this.d*c,this},b.skew=function(b,c){return b*=a.DEG_TO_RAD,c*=a.DEG_TO_RAD,this.append(Math.cos(c),Math.sin(c),-Math.sin(b),Math.cos(b),0,0),this},b.scale=function(a,b){return this.a*=a,this.b*=a,this.c*=b,this.d*=b,this},b.translate=function(a,b){return this.tx+=this.a*a+this.c*b,this.ty+=this.b*a+this.d*b,this},b.identity=function(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this},b.invert=function(){var a=this.a,b=this.b,c=this.c,d=this.d,e=this.tx,f=a*d-b*c;return this.a=d/f,this.b=-b/f,this.c=-c/f,this.d=a/f,this.tx=(c*this.ty-d*e)/f,this.ty=-(a*this.ty-b*e)/f,this},b.isIdentity=function(){return 0===this.tx&&0===this.ty&&1===this.a&&0===this.b&&0===this.c&&1===this.d},b.equals=function(a){return this.tx===a.tx&&this.ty===a.ty&&this.a===a.a&&this.b===a.b&&this.c===a.c&&this.d===a.d},b.transformPoint=function(a,b,c){return c=c||{},c.x=a*this.a+b*this.c+this.tx,c.y=a*this.b+b*this.d+this.ty,c},b.decompose=function(b){null==b&&(b={}),b.x=this.tx,b.y=this.ty,b.scaleX=Math.sqrt(this.a*this.a+this.b*this.b),b.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var c=Math.atan2(-this.c,this.d),d=Math.atan2(this.b,this.a),e=Math.abs(1-c/d);return 1e-5>e?(b.rotation=d/a.DEG_TO_RAD,this.a<0&&this.d>=0&&(b.rotation+=b.rotation<=0?180:-180),b.skewX=b.skewY=0):(b.skewX=c/a.DEG_TO_RAD,b.skewY=d/a.DEG_TO_RAD),b},b.copy=function(a){return this.setValues(a.a,a.b,a.c,a.d,a.tx,a.ty)},b.clone=function(){return new a(this.a,this.b,this.c,this.d,this.tx,this.ty)},b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"},a.identity=new a,createjs.Matrix2D=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e){this.setValues(a,b,c,d,e)}var b=a.prototype;b.setValues=function(a,b,c,d,e){return this.visible=null==a?!0:!!a,this.alpha=null==b?1:b,this.shadow=c,this.compositeOperation=c,this.matrix=e||this.matrix&&this.matrix.identity()||new createjs.Matrix2D,this},b.append=function(a,b,c,d,e){return this.alpha*=b,this.shadow=c||this.shadow,this.compositeOperation=d||this.compositeOperation,this.visible=this.visible&&a,e&&this.matrix.appendMatrix(e),this},b.prepend=function(a,b,c,d,e){return this.alpha*=b,this.shadow=this.shadow||c,this.compositeOperation=this.compositeOperation||d,this.visible=this.visible&&a,e&&this.matrix.prependMatrix(e),this},b.identity=function(){return this.visible=!0,this.alpha=1,this.shadow=this.compositeOperation=null,this.matrix.identity(),this},b.clone=function(){return new a(this.alpha,this.shadow,this.compositeOperation,this.visible,this.matrix.clone())},createjs.DisplayProps=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.setValues(a,b)}var b=a.prototype;b.setValues=function(a,b){return this.x=a||0,this.y=b||0,this},b.copy=function(a){return this.x=a.x,this.y=a.y,this},b.clone=function(){return new a(this.x,this.y)},b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"},createjs.Point=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setValues(a,b,c,d)}var b=a.prototype;b.setValues=function(a,b,c,d){return this.x=a||0,this.y=b||0,this.width=c||0,this.height=d||0,this},b.extend=function(a,b,c,d){return c=c||0,d=d||0,a+c>this.x+this.width&&(this.width=a+c-this.x),b+d>this.y+this.height&&(this.height=b+d-this.y),a<this.x&&(this.width+=this.x-a,this.x=a),b<this.y&&(this.height+=this.y-b,this.y=b),this},b.pad=function(a,b,c,d){return this.x-=b,this.y-=a,this.width+=b+d,this.height+=a+c,this},b.copy=function(a){return this.setValues(a.x,a.y,a.width,a.height)},b.contains=function(a,b,c,d){return c=c||0,d=d||0,a>=this.x&&a+c<=this.x+this.width&&b>=this.y&&b+d<=this.y+this.height},b.union=function(a){return this.clone().extend(a.x,a.y,a.width,a.height)},b.intersection=function(b){var c=b.x,d=b.y,e=c+b.width,f=d+b.height;return this.x>c&&(c=this.x),this.y>d&&(d=this.y),this.x+this.width<e&&(e=this.x+this.width),this.y+this.height<f&&(f=this.y+this.height),c>=e||d>=f?null:new a(c,d,e-c,f-d)},b.intersects=function(a){return a.x<=this.x+this.width&&this.x<=a.x+a.width&&a.y<=this.y+this.height&&this.y<=a.y+a.height},b.isEmpty=function(){return this.width<=0||this.height<=0},b.clone=function(){return new a(this.x,this.y,this.width,this.height)},b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"},createjs.Rectangle=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g){a.addEventListener&&(this.target=a,this.overLabel=null==c?"over":c,this.outLabel=null==b?"out":b,this.downLabel=null==d?"down":d,this.play=e,this._isPressed=!1,this._isOver=!1,this._enabled=!1,a.mouseChildren=!1,this.enabled=!0,this.handleEvent({}),f&&(g&&(f.actionsEnabled=!1,f.gotoAndStop&&f.gotoAndStop(g)),a.hitArea=f))}var b=a.prototype;b.setEnabled=function(a){if(a!=this._enabled){var b=this.target;this._enabled=a,a?(b.cursor="pointer",b.addEventListener("rollover",this),b.addEventListener("rollout",this),b.addEventListener("mousedown",this),b.addEventListener("pressup",this),b._reset&&(b.__reset=b._reset,b._reset=this._reset)):(b.cursor=null,b.removeEventListener("rollover",this),b.removeEventListener("rollout",this),b.removeEventListener("mousedown",this),b.removeEventListener("pressup",this),b.__reset&&(b._reset=b.__reset,delete b.__reset))}},b.getEnabled=function(){return this._enabled};try{Object.defineProperties(b,{enabled:{get:b.getEnabled,set:b.setEnabled}})}catch(c){}b.toString=function(){return"[ButtonHelper]"},b.handleEvent=function(a){var b,c=this.target,d=a.type;"mousedown"==d?(this._isPressed=!0,b=this.downLabel):"pressup"==d?(this._isPressed=!1,b=this._isOver?this.overLabel:this.outLabel):"rollover"==d?(this._isOver=!0,b=this._isPressed?this.downLabel:this.overLabel):(this._isOver=!1,b=this._isPressed?this.overLabel:this.outLabel),this.play?c.gotoAndPlay&&c.gotoAndPlay(b):c.gotoAndStop&&c.gotoAndStop(b)},b._reset=function(){var a=this.paused;this.__reset(),this.paused=a},createjs.ButtonHelper=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.color=a||"black",this.offsetX=b||0,this.offsetY=c||0,this.blur=d||0}var b=a.prototype;a.identity=new a("transparent",0,0,0),b.toString=function(){return"[Shadow]"},b.clone=function(){return new a(this.color,this.offsetX,this.offsetY,this.blur)},createjs.Shadow=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.EventDispatcher_constructor(),this.complete=!0,this.framerate=0,this._animations=null,this._frames=null,this._images=null,this._data=null,this._loadCount=0,this._frameHeight=0,this._frameWidth=0,this._numFrames=0,this._regX=0,this._regY=0,this._spacing=0,this._margin=0,this._parseData(a)}var b=createjs.extend(a,createjs.EventDispatcher);b.getAnimations=function(){return this._animations.slice()};try{Object.defineProperties(b,{animations:{get:b.getAnimations}})}catch(c){}b.getNumFrames=function(a){if(null==a)return this._frames?this._frames.length:this._numFrames||0;var b=this._data[a];return null==b?0:b.frames.length},b.getAnimation=function(a){return this._data[a]},b.getFrame=function(a){var b;return this._frames&&(b=this._frames[a])?b:null},b.getFrameBounds=function(a,b){var c=this.getFrame(a);return c?(b||new createjs.Rectangle).setValues(-c.regX,-c.regY,c.rect.width,c.rect.height):null},b.toString=function(){return"[SpriteSheet]"},b.clone=function(){throw"SpriteSheet cannot be cloned."},b._parseData=function(a){var b,c,d,e;if(null!=a){if(this.framerate=a.framerate||0,a.images&&(c=a.images.length)>0)for(e=this._images=[],b=0;c>b;b++){var f=a.images[b];if("string"==typeof f){var g=f;f=document.createElement("img"),f.src=g}e.push(f),f.getContext||f.naturalWidth||(this._loadCount++,this.complete=!1,function(a){f.onload=function(){a._handleImageLoad()}}(this))}if(null==a.frames);else if(a.frames instanceof Array)for(this._frames=[],e=a.frames,b=0,c=e.length;c>b;b++){var h=e[b];this._frames.push({image:this._images[h[4]?h[4]:0],rect:new createjs.Rectangle(h[0],h[1],h[2],h[3]),regX:h[5]||0,regY:h[6]||0})}else d=a.frames,this._frameWidth=d.width,this._frameHeight=d.height,this._regX=d.regX||0,this._regY=d.regY||0,this._spacing=d.spacing||0,this._margin=d.margin||0,this._numFrames=d.count,0==this._loadCount&&this._calculateFrames();if(this._animations=[],null!=(d=a.animations)){this._data={};var i;for(i in d){var j={name:i},k=d[i];if("number"==typeof k)e=j.frames=[k];else if(k instanceof Array)if(1==k.length)j.frames=[k[0]];else for(j.speed=k[3],j.next=k[2],e=j.frames=[],b=k[0];b<=k[1];b++)e.push(b);else{j.speed=k.speed,j.next=k.next;var l=k.frames;e=j.frames="number"==typeof l?[l]:l.slice(0)}(j.next===!0||void 0===j.next)&&(j.next=i),(j.next===!1||e.length<2&&j.next==i)&&(j.next=null),j.speed||(j.speed=1),this._animations.push(i),this._data[i]=j}}}},b._handleImageLoad=function(){0==--this._loadCount&&(this._calculateFrames(),this.complete=!0,this.dispatchEvent("complete"))},b._calculateFrames=function(){if(!this._frames&&0!=this._frameWidth){this._frames=[];var a=this._numFrames||1e5,b=0,c=this._frameWidth,d=this._frameHeight,e=this._spacing,f=this._margin;a:for(var g=0,h=this._images;g<h.length;g++)for(var i=h[g],j=i.width,k=i.height,l=f;k-f-d>=l;){for(var m=f;j-f-c>=m;){if(b>=a)break a;b++,this._frames.push({image:i,rect:new createjs.Rectangle(m,l,c,d),regX:this._regX,regY:this._regY}),m+=c+e}l+=d+e}this._numFrames=b}},createjs.SpriteSheet=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.command=null,this._stroke=null,this._strokeStyle=null,this._oldStrokeStyle=null,this._strokeDash=null,this._oldStrokeDash=null,this._strokeIgnoreScale=!1,this._fill=null,this._instructions=[],this._commitIndex=0,this._activeInstructions=[],this._dirty=!1,this._storeIndex=0,this.clear()}var b=a.prototype,c=a;a.getRGB=function(a,b,c,d){return null!=a&&null==c&&(d=b,c=255&a,b=a>>8&255,a=a>>16&255),null==d?"rgb("+a+","+b+","+c+")":"rgba("+a+","+b+","+c+","+d+")"},a.getHSL=function(a,b,c,d){return null==d?"hsl("+a%360+","+b+"%,"+c+"%)":"hsla("+a%360+","+b+"%,"+c+"%,"+d+")"},a.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63},a.STROKE_CAPS_MAP=["butt","round","square"],a.STROKE_JOINTS_MAP=["miter","round","bevel"];var d=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");d.getContext&&(a._ctx=d.getContext("2d"),d.width=d.height=1),b.getInstructions=function(){return this._updateInstructions(),this._instructions};try{Object.defineProperties(b,{instructions:{get:b.getInstructions}})}catch(e){}b.isEmpty=function(){return!(this._instructions.length||this._activeInstructions.length)},b.draw=function(a,b){this._updateInstructions();for(var c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)c[d].exec(a,b)},b.drawAsPath=function(a){this._updateInstructions();for(var b,c=this._instructions,d=this._storeIndex,e=c.length;e>d;d++)(b=c[d]).path!==!1&&b.exec(a)},b.moveTo=function(a,b){return this.append(new c.MoveTo(a,b),!0)},b.lineTo=function(a,b){return this.append(new c.LineTo(a,b))},b.arcTo=function(a,b,d,e,f){return this.append(new c.ArcTo(a,b,d,e,f))},b.arc=function(a,b,d,e,f,g){return this.append(new c.Arc(a,b,d,e,f,g))},b.quadraticCurveTo=function(a,b,d,e){return this.append(new c.QuadraticCurveTo(a,b,d,e))},b.bezierCurveTo=function(a,b,d,e,f,g){return this.append(new c.BezierCurveTo(a,b,d,e,f,g))},b.rect=function(a,b,d,e){return this.append(new c.Rect(a,b,d,e))},b.closePath=function(){return this._activeInstructions.length?this.append(new c.ClosePath):this},b.clear=function(){return this._instructions.length=this._activeInstructions.length=this._commitIndex=0,this._strokeStyle=this._oldStrokeStyle=this._stroke=this._fill=this._strokeDash=this._oldStrokeDash=null,this._dirty=this._strokeIgnoreScale=!1,this},b.beginFill=function(a){return this._setFill(a?new c.Fill(a):null)},b.beginLinearGradientFill=function(a,b,d,e,f,g){return this._setFill((new c.Fill).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientFill=function(a,b,d,e,f,g,h,i){return this._setFill((new c.Fill).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapFill=function(a,b,d){return this._setFill(new c.Fill(null,d).bitmap(a,b))},b.endFill=function(){return this.beginFill()},b.setStrokeStyle=function(a,b,d,e,f){return this._updateInstructions(!0),this._strokeStyle=this.command=new c.StrokeStyle(a,b,d,e,f),this._stroke&&(this._stroke.ignoreScale=f),this._strokeIgnoreScale=f,this},b.setStrokeDash=function(a,b){return this._updateInstructions(!0),this._strokeDash=this.command=new c.StrokeDash(a,b),this},b.beginStroke=function(a){return this._setStroke(a?new c.Stroke(a):null)},b.beginLinearGradientStroke=function(a,b,d,e,f,g){return this._setStroke((new c.Stroke).linearGradient(a,b,d,e,f,g))},b.beginRadialGradientStroke=function(a,b,d,e,f,g,h,i){return this._setStroke((new c.Stroke).radialGradient(a,b,d,e,f,g,h,i))},b.beginBitmapStroke=function(a,b){return this._setStroke((new c.Stroke).bitmap(a,b))},b.endStroke=function(){return this.beginStroke()},b.curveTo=b.quadraticCurveTo,b.drawRect=b.rect,b.drawRoundRect=function(a,b,c,d,e){return this.drawRoundRectComplex(a,b,c,d,e,e,e,e)},b.drawRoundRectComplex=function(a,b,d,e,f,g,h,i){return this.append(new c.RoundRect(a,b,d,e,f,g,h,i))},b.drawCircle=function(a,b,d){return this.append(new c.Circle(a,b,d))},b.drawEllipse=function(a,b,d,e){return this.append(new c.Ellipse(a,b,d,e))},b.drawPolyStar=function(a,b,d,e,f,g){return this.append(new c.PolyStar(a,b,d,e,f,g))},b.append=function(a,b){return this._activeInstructions.push(a),this.command=a,b||(this._dirty=!0),this},b.decodePath=function(b){for(var c=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo,this.closePath],d=[2,2,4,6,0],e=0,f=b.length,g=[],h=0,i=0,j=a.BASE_64;f>e;){var k=b.charAt(e),l=j[k],m=l>>3,n=c[m];if(!n||3&l)throw"bad path data (@"+e+"): "+k;var o=d[m];m||(h=i=0),g.length=0,e++;for(var p=(l>>2&1)+2,q=0;o>q;q++){var r=j[b.charAt(e)],s=r>>5?-1:1;r=(31&r)<<6|j[b.charAt(e+1)],3==p&&(r=r<<6|j[b.charAt(e+2)]),r=s*r/10,q%2?h=r+=h:i=r+=i,g[q]=r,e+=p}n.apply(this,g)}return this},b.store=function(){return this._updateInstructions(!0),this._storeIndex=this._instructions.length,this},b.unstore=function(){return this._storeIndex=0,this},b.clone=function(){var b=new a;return b.command=this.command,b._stroke=this._stroke,b._strokeStyle=this._strokeStyle,b._strokeDash=this._strokeDash,b._strokeIgnoreScale=this._strokeIgnoreScale,b._fill=this._fill,b._instructions=this._instructions.slice(),b._commitIndex=this._commitIndex,b._activeInstructions=this._activeInstructions.slice(),b._dirty=this._dirty,b._storeIndex=this._storeIndex,b},b.toString=function(){return"[Graphics]"},b.mt=b.moveTo,b.lt=b.lineTo,b.at=b.arcTo,b.bt=b.bezierCurveTo,b.qt=b.quadraticCurveTo,b.a=b.arc,b.r=b.rect,b.cp=b.closePath,b.c=b.clear,b.f=b.beginFill,b.lf=b.beginLinearGradientFill,b.rf=b.beginRadialGradientFill,b.bf=b.beginBitmapFill,b.ef=b.endFill,b.ss=b.setStrokeStyle,b.sd=b.setStrokeDash,b.s=b.beginStroke,b.ls=b.beginLinearGradientStroke,b.rs=b.beginRadialGradientStroke,b.bs=b.beginBitmapStroke,b.es=b.endStroke,b.dr=b.drawRect,b.rr=b.drawRoundRect,b.rc=b.drawRoundRectComplex,b.dc=b.drawCircle,b.de=b.drawEllipse,b.dp=b.drawPolyStar,b.p=b.decodePath,b._updateInstructions=function(b){var c=this._instructions,d=this._activeInstructions,e=this._commitIndex;if(this._dirty&&d.length){c.length=e,c.push(a.beginCmd);var f=d.length,g=c.length;c.length=g+f;for(var h=0;f>h;h++)c[h+g]=d[h];this._fill&&c.push(this._fill),this._stroke&&(this._strokeDash!==this._oldStrokeDash&&(this._oldStrokeDash=this._strokeDash,c.push(this._strokeDash)),this._strokeStyle!==this._oldStrokeStyle&&(this._oldStrokeStyle=this._strokeStyle,c.push(this._strokeStyle)),c.push(this._stroke)),this._dirty=!1}b&&(d.length=0,this._commitIndex=c.length)},b._setFill=function(a){return this._updateInstructions(!0),this.command=this._fill=a,this},b._setStroke=function(a){return this._updateInstructions(!0),(this.command=this._stroke=a)&&(a.ignoreScale=this._strokeIgnoreScale),this},(c.LineTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.lineTo(this.x,this.y)},(c.MoveTo=function(a,b){this.x=a,this.y=b}).prototype.exec=function(a){a.moveTo(this.x,this.y)},(c.ArcTo=function(a,b,c,d,e){this.x1=a,this.y1=b,this.x2=c,this.y2=d,this.radius=e}).prototype.exec=function(a){a.arcTo(this.x1,this.y1,this.x2,this.y2,this.radius)},(c.Arc=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.startAngle=d,this.endAngle=e,this.anticlockwise=!!f}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)},(c.QuadraticCurveTo=function(a,b,c,d){this.cpx=a,this.cpy=b,this.x=c,this.y=d}).prototype.exec=function(a){a.quadraticCurveTo(this.cpx,this.cpy,this.x,this.y)},(c.BezierCurveTo=function(a,b,c,d,e,f){this.cp1x=a,this.cp1y=b,this.cp2x=c,this.cp2y=d,this.x=e,this.y=f}).prototype.exec=function(a){a.bezierCurveTo(this.cp1x,this.cp1y,this.cp2x,this.cp2y,this.x,this.y)},(c.Rect=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){a.rect(this.x,this.y,this.w,this.h)},(c.ClosePath=function(){}).prototype.exec=function(a){a.closePath()},(c.BeginPath=function(){}).prototype.exec=function(a){a.beginPath()},b=(c.Fill=function(a,b){this.style=a,this.matrix=b}).prototype,b.exec=function(a){if(this.style){a.fillStyle=this.style;var b=this.matrix;b&&(a.save(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty)),a.fill(),b&&a.restore()}},b.linearGradient=function(b,c,d,e,f,g){for(var h=this.style=a._ctx.createLinearGradient(d,e,f,g),i=0,j=b.length;j>i;i++)h.addColorStop(c[i],b[i]);return h.props={colors:b,ratios:c,x0:d,y0:e,x1:f,y1:g,type:"linear"},this},b.radialGradient=function(b,c,d,e,f,g,h,i){for(var j=this.style=a._ctx.createRadialGradient(d,e,f,g,h,i),k=0,l=b.length;l>k;k++)j.addColorStop(c[k],b[k]);return j.props={colors:b,ratios:c,x0:d,y0:e,r0:f,x1:g,y1:h,r1:i,type:"radial"},this},b.bitmap=function(b,c){if(b.naturalWidth||b.getContext||b.readyState>=2){var d=this.style=a._ctx.createPattern(b,c||"");d.props={image:b,repetition:c,type:"bitmap"}}return this},b.path=!1,b=(c.Stroke=function(a,b){this.style=a,this.ignoreScale=b}).prototype,b.exec=function(a){this.style&&(a.strokeStyle=this.style,this.ignoreScale&&(a.save(),a.setTransform(1,0,0,1,0,0)),a.stroke(),this.ignoreScale&&a.restore())},b.linearGradient=c.Fill.prototype.linearGradient,b.radialGradient=c.Fill.prototype.radialGradient,b.bitmap=c.Fill.prototype.bitmap,b.path=!1,b=(c.StrokeStyle=function(a,b,c,d){this.width=a,this.caps=b,this.joints=c,this.miterLimit=d}).prototype,b.exec=function(b){b.lineWidth=null==this.width?"1":this.width,b.lineCap=null==this.caps?"butt":isNaN(this.caps)?this.caps:a.STROKE_CAPS_MAP[this.caps],b.lineJoin=null==this.joints?"miter":isNaN(this.joints)?this.joints:a.STROKE_JOINTS_MAP[this.joints],b.miterLimit=null==this.miterLimit?"10":this.miterLimit},b.path=!1,(c.StrokeDash=function(a,b){this.segments=a,this.offset=b||0}).prototype.exec=function(a){a.setLineDash&&(a.setLineDash(this.segments||c.StrokeDash.EMPTY_SEGMENTS),a.lineDashOffset=this.offset||0)},c.StrokeDash.EMPTY_SEGMENTS=[],(c.RoundRect=function(a,b,c,d,e,f,g,h){this.x=a,this.y=b,this.w=c,this.h=d,this.radiusTL=e,this.radiusTR=f,this.radiusBR=g,this.radiusBL=h}).prototype.exec=function(a){var b=(j>i?i:j)/2,c=0,d=0,e=0,f=0,g=this.x,h=this.y,i=this.w,j=this.h,k=this.radiusTL,l=this.radiusTR,m=this.radiusBR,n=this.radiusBL;0>k&&(k*=c=-1),k>b&&(k=b),0>l&&(l*=d=-1),l>b&&(l=b),0>m&&(m*=e=-1),m>b&&(m=b),0>n&&(n*=f=-1),n>b&&(n=b),a.moveTo(g+i-l,h),a.arcTo(g+i+l*d,h-l*d,g+i,h+l,l),a.lineTo(g+i,h+j-m),a.arcTo(g+i+m*e,h+j+m*e,g+i-m,h+j,m),a.lineTo(g+n,h+j),a.arcTo(g-n*f,h+j+n*f,g,h+j-n,n),a.lineTo(g,h+k),a.arcTo(g-k*c,h-k*c,g+k,h,k),a.closePath()},(c.Circle=function(a,b,c){this.x=a,this.y=b,this.radius=c}).prototype.exec=function(a){a.arc(this.x,this.y,this.radius,0,2*Math.PI)},(c.Ellipse=function(a,b,c,d){this.x=a,this.y=b,this.w=c,this.h=d}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.w,e=this.h,f=.5522848,g=d/2*f,h=e/2*f,i=b+d,j=c+e,k=b+d/2,l=c+e/2;a.moveTo(b,l),a.bezierCurveTo(b,l-h,k-g,c,k,c),a.bezierCurveTo(k+g,c,i,l-h,i,l),a.bezierCurveTo(i,l+h,k+g,j,k,j),a.bezierCurveTo(k-g,j,b,l+h,b,l)},(c.PolyStar=function(a,b,c,d,e,f){this.x=a,this.y=b,this.radius=c,this.sides=d,this.pointSize=e,this.angle=f}).prototype.exec=function(a){var b=this.x,c=this.y,d=this.radius,e=(this.angle||0)/180*Math.PI,f=this.sides,g=1-(this.pointSize||0),h=Math.PI/f;a.moveTo(b+Math.cos(e)*d,c+Math.sin(e)*d);for(var i=0;f>i;i++)e+=h,1!=g&&a.lineTo(b+Math.cos(e)*d*g,c+Math.sin(e)*d*g),e+=h,a.lineTo(b+Math.cos(e)*d,c+Math.sin(e)*d);a.closePath()},a.beginCmd=new c.BeginPath,createjs.Graphics=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.alpha=1,this.cacheCanvas=null,this.cacheID=0,this.id=createjs.UID.get(),this.mouseEnabled=!0,this.tickEnabled=!0,this.name=null,this.parent=null,this.regX=0,this.regY=0,this.rotation=0,this.scaleX=1,this.scaleY=1,this.skewX=0,this.skewY=0,this.shadow=null,this.visible=!0,this.x=0,this.y=0,this.transformMatrix=null,this.compositeOperation=null,this.snapToPixel=!0,this.filters=null,this.mask=null,this.hitArea=null,this.cursor=null,this._cacheOffsetX=0,this._cacheOffsetY=0,this._filterOffsetX=0,this._filterOffsetY=0,this._cacheScale=1,this._cacheDataURLID=0,this._cacheDataURL=null,this._props=new createjs.DisplayProps,this._rectangle=new createjs.Rectangle,this._bounds=null;

}var b=createjs.extend(a,createjs.EventDispatcher);a._MOUSE_EVENTS=["click","dblclick","mousedown","mouseout","mouseover","pressmove","pressup","rollout","rollover"],a.suppressCrossDomainErrors=!1,a._snapToPixelEnabled=!1;var c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._hitTestCanvas=c,a._hitTestContext=c.getContext("2d"),c.width=c.height=1),a._nextCacheID=1,b.getStage=function(){for(var a=this,b=createjs.Stage;a.parent;)a=a.parent;return a instanceof b?a:null};try{Object.defineProperties(b,{stage:{get:b.getStage}})}catch(d){}b.isVisible=function(){return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY)},b.draw=function(a,b){var c=this.cacheCanvas;if(b||!c)return!1;var d=this._cacheScale;return a.drawImage(c,this._cacheOffsetX+this._filterOffsetX,this._cacheOffsetY+this._filterOffsetY,c.width/d,c.height/d),!0},b.updateContext=function(b){var c=this,d=c.mask,e=c._props.matrix;d&&d.graphics&&!d.graphics.isEmpty()&&(d.getMatrix(e),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty),d.graphics.drawAsPath(b),b.clip(),e.invert(),b.transform(e.a,e.b,e.c,e.d,e.tx,e.ty)),this.getMatrix(e);var f=e.tx,g=e.ty;a._snapToPixelEnabled&&c.snapToPixel&&(f=f+(0>f?-.5:.5)|0,g=g+(0>g?-.5:.5)|0),b.transform(e.a,e.b,e.c,e.d,f,g),b.globalAlpha*=c.alpha,c.compositeOperation&&(b.globalCompositeOperation=c.compositeOperation),c.shadow&&this._applyShadow(b,c.shadow)},b.cache=function(a,b,c,d,e){e=e||1,this.cacheCanvas||(this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),this._cacheWidth=c,this._cacheHeight=d,this._cacheOffsetX=a,this._cacheOffsetY=b,this._cacheScale=e,this.updateCache()},b.updateCache=function(b){var c=this.cacheCanvas;if(!c)throw"cache() must be called before updateCache()";var d=this._cacheScale,e=this._cacheOffsetX*d,f=this._cacheOffsetY*d,g=this._cacheWidth,h=this._cacheHeight,i=c.getContext("2d"),j=this._getFilterBounds();e+=this._filterOffsetX=j.x,f+=this._filterOffsetY=j.y,g=Math.ceil(g*d)+j.width,h=Math.ceil(h*d)+j.height,g!=c.width||h!=c.height?(c.width=g,c.height=h):b||i.clearRect(0,0,g+1,h+1),i.save(),i.globalCompositeOperation=b,i.setTransform(d,0,0,d,-e,-f),this.draw(i,!0),this._applyFilters(),i.restore(),this.cacheID=a._nextCacheID++},b.uncache=function(){this._cacheDataURL=this.cacheCanvas=null,this.cacheID=this._cacheOffsetX=this._cacheOffsetY=this._filterOffsetX=this._filterOffsetY=0,this._cacheScale=1},b.getCacheDataURL=function(){return this.cacheCanvas?(this.cacheID!=this._cacheDataURLID&&(this._cacheDataURL=this.cacheCanvas.toDataURL()),this._cacheDataURL):null},b.localToGlobal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).transformPoint(a,b,c||new createjs.Point)},b.globalToLocal=function(a,b,c){return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(a,b,c||new createjs.Point)},b.localToLocal=function(a,b,c,d){return d=this.localToGlobal(a,b,d),c.globalToLocal(d.x,d.y,d)},b.setTransform=function(a,b,c,d,e,f,g,h,i){return this.x=a||0,this.y=b||0,this.scaleX=null==c?1:c,this.scaleY=null==d?1:d,this.rotation=e||0,this.skewX=f||0,this.skewY=g||0,this.regX=h||0,this.regY=i||0,this},b.getMatrix=function(a){var b=this,c=a&&a.identity()||new createjs.Matrix2D;return b.transformMatrix?c.copy(b.transformMatrix):c.appendTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY)},b.getConcatenatedMatrix=function(a){for(var b=this,c=this.getMatrix(a);b=b.parent;)c.prependMatrix(b.getMatrix(b._props.matrix));return c},b.getConcatenatedDisplayProps=function(a){a=a?a.identity():new createjs.DisplayProps;var b=this,c=b.getMatrix(a.matrix);do a.prepend(b.visible,b.alpha,b.shadow,b.compositeOperation),b!=this&&c.prependMatrix(b.getMatrix(b._props.matrix));while(b=b.parent);return a},b.hitTest=function(b,c){var d=a._hitTestContext;d.setTransform(1,0,0,1,-b,-c),this.draw(d);var e=this._testHit(d);return d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,2,2),e},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.getBounds=function(){if(this._bounds)return this._rectangle.copy(this._bounds);var a=this.cacheCanvas;if(a){var b=this._cacheScale;return this._rectangle.setValues(this._cacheOffsetX,this._cacheOffsetY,a.width/b,a.height/b)}return null},b.getTransformedBounds=function(){return this._getBounds()},b.setBounds=function(a,b,c,d){null==a&&(this._bounds=a),this._bounds=(this._bounds||new createjs.Rectangle).setValues(a,b,c,d)},b.clone=function(){return this._cloneProps(new a)},b.toString=function(){return"[DisplayObject (name="+this.name+")]"},b._cloneProps=function(a){return a.alpha=this.alpha,a.mouseEnabled=this.mouseEnabled,a.tickEnabled=this.tickEnabled,a.name=this.name,a.regX=this.regX,a.regY=this.regY,a.rotation=this.rotation,a.scaleX=this.scaleX,a.scaleY=this.scaleY,a.shadow=this.shadow,a.skewX=this.skewX,a.skewY=this.skewY,a.visible=this.visible,a.x=this.x,a.y=this.y,a.compositeOperation=this.compositeOperation,a.snapToPixel=this.snapToPixel,a.filters=null==this.filters?null:this.filters.slice(0),a.mask=this.mask,a.hitArea=this.hitArea,a.cursor=this.cursor,a._bounds=this._bounds,a},b._applyShadow=function(a,b){b=b||Shadow.identity,a.shadowColor=b.color,a.shadowOffsetX=b.offsetX,a.shadowOffsetY=b.offsetY,a.shadowBlur=b.blur},b._tick=function(a){var b=this._listeners;b&&b.tick&&(a.target=null,a.propagationStopped=a.immediatePropagationStopped=!1,this.dispatchEvent(a))},b._testHit=function(b){try{var c=b.getImageData(0,0,1,1).data[3]>1}catch(d){if(!a.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."}return c},b._applyFilters=function(){if(this.filters&&0!=this.filters.length&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;a>e;e++)this.filters[e].applyFilter(b,0,0,c,d)},b._getFilterBounds=function(){var a,b=this.filters,c=this._rectangle.setValues(0,0,0,0);if(!b||!(a=b.length))return c;for(var d=0;a>d;d++){var e=this.filters[d];e.getBounds&&e.getBounds(c)}return c},b._getBounds=function(a,b){return this._transformBounds(this.getBounds(),a,b)},b._transformBounds=function(a,b,c){if(!a)return a;var d=a.x,e=a.y,f=a.width,g=a.height,h=this._props.matrix;h=c?h.identity():this.getMatrix(h),(d||e)&&h.appendTransform(0,0,1,1,0,0,0,-d,-e),b&&h.prependMatrix(b);var i=f*h.a,j=f*h.b,k=g*h.c,l=g*h.d,m=h.tx,n=h.ty,o=m,p=m,q=n,r=n;return(d=i+m)<o?o=d:d>p&&(p=d),(d=i+k+m)<o?o=d:d>p&&(p=d),(d=k+m)<o?o=d:d>p&&(p=d),(e=j+n)<q?q=e:e>r&&(r=e),(e=j+l+n)<q?q=e:e>r&&(r=e),(e=l+n)<q?q=e:e>r&&(r=e),a.setValues(o,q,p-o,r-q)},b._hasMouseEventListener=function(){for(var b=a._MOUSE_EVENTS,c=0,d=b.length;d>c;c++)if(this.hasEventListener(b[c]))return!0;return!!this.cursor},createjs.DisplayObject=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.DisplayObject_constructor(),this.children=[],this.mouseChildren=!0,this.tickChildren=!0}var b=createjs.extend(a,createjs.DisplayObject);b.getNumChildren=function(){return this.children.length};try{Object.defineProperties(b,{numChildren:{get:b.getNumChildren}})}catch(c){}b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.children.length;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;for(var c=this.children.slice(),d=0,e=c.length;e>d;d++){var f=c[d];f.isVisible()&&(a.save(),f.updateContext(a),f.draw(a),a.restore())}return!0},b.addChild=function(a){if(null==a)return a;var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addChild(arguments[c]);return arguments[b-1]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.push(a),a.dispatchEvent("added"),a},b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(0>d||d>this.children.length)return arguments[c-2];if(c>2){for(var e=0;c-1>e;e++)this.addChildAt(arguments[e],d+e);return arguments[c-2]}return a.parent&&a.parent.removeChild(a),a.parent=this,this.children.splice(b,0,a),a.dispatchEvent("added"),a},b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(createjs.indexOf(this.children,a))},b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;b>d;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=!0,d=0;b>d;d++)e=e&&this.removeChildAt(c[d]);return e}if(0>a||a>this.children.length-1)return!1;var f=this.children[a];return f&&(f.parent=null),this.children.splice(a,1),f.dispatchEvent("removed"),!0},b.removeAllChildren=function(){for(var a=this.children;a.length;)this.removeChildAt(0)},b.getChildAt=function(a){return this.children[a]},b.getChildByName=function(a){for(var b=this.children,c=0,d=b.length;d>c;c++)if(b[c].name==a)return b[c];return null},b.sortChildren=function(a){this.children.sort(a)},b.getChildIndex=function(a){return createjs.indexOf(this.children,a)},b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)},b.swapChildren=function(a,b){for(var c,d,e=this.children,f=0,g=e.length;g>f&&(e[f]==a&&(c=f),e[f]==b&&(d=f),null==c||null==d);f++);f!=g&&(e[c]=b,e[d]=a)},b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||0>b||b>=d)){for(var e=0;d>e&&c[e]!=a;e++);e!=d&&e!=b&&(c.splice(e,1),c.splice(b,0,a))}},b.contains=function(a){for(;a;){if(a==this)return!0;a=a.parent}return!1},b.hitTest=function(a,b){return null!=this.getObjectUnderPoint(a,b)},b.getObjectsUnderPoint=function(a,b,c){var d=[],e=this.localToGlobal(a,b);return this._getObjectsUnderPoint(e.x,e.y,d,c>0,1==c),d},b.getObjectUnderPoint=function(a,b,c){var d=this.localToGlobal(a,b);return this._getObjectsUnderPoint(d.x,d.y,null,c>0,1==c)},b.getBounds=function(){return this._getBounds(null,!0)},b.getTransformedBounds=function(){return this._getBounds()},b.clone=function(b){var c=this._cloneProps(new a);return b&&this._cloneChildren(c),c},b.toString=function(){return"[Container (name="+this.name+")]"},b._tick=function(a){if(this.tickChildren)for(var b=this.children.length-1;b>=0;b--){var c=this.children[b];c.tickEnabled&&c._tick&&c._tick(a)}this.DisplayObject__tick(a)},b._cloneChildren=function(a){a.children.length&&a.removeAllChildren();for(var b=a.children,c=0,d=this.children.length;d>c;c++){var e=this.children[c].clone(!0);e.parent=a,b.push(e)}},b._getObjectsUnderPoint=function(b,c,d,e,f,g){if(g=g||0,!g&&!this._testMask(this,b,c))return null;var h,i=createjs.DisplayObject._hitTestContext;f=f||e&&this._hasMouseEventListener();for(var j=this.children,k=j.length,l=k-1;l>=0;l--){var m=j[l],n=m.hitArea;if(m.visible&&(n||m.isVisible())&&(!e||m.mouseEnabled)&&(n||this._testMask(m,b,c)))if(!n&&m instanceof a){var o=m._getObjectsUnderPoint(b,c,d,e,f,g+1);if(!d&&o)return e&&!this.mouseChildren?this:o}else{if(e&&!f&&!m._hasMouseEventListener())continue;var p=m.getConcatenatedDisplayProps(m._props);if(h=p.matrix,n&&(h.appendMatrix(n.getMatrix(n._props.matrix)),p.alpha=n.alpha),i.globalAlpha=p.alpha,i.setTransform(h.a,h.b,h.c,h.d,h.tx-b,h.ty-c),(n||m).draw(i),!this._testHit(i))continue;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,2,2),!d)return e&&!this.mouseChildren?this:m;d.push(m)}}return null},b._testMask=function(a,b,c){var d=a.mask;if(!d||!d.graphics||d.graphics.isEmpty())return!0;var e=this._props.matrix,f=a.parent;e=f?f.getConcatenatedMatrix(e):e.identity(),e=d.getMatrix(d._props.matrix).prependMatrix(e);var g=createjs.DisplayObject._hitTestContext;return g.setTransform(e.a,e.b,e.c,e.d,e.tx-b,e.ty-c),d.graphics.drawAsPath(g),g.fillStyle="#000",g.fill(),this._testHit(g)?(g.setTransform(1,0,0,1,0,0),g.clearRect(0,0,2,2),!0):!1},b._getBounds=function(a,b){var c=this.DisplayObject_getBounds();if(c)return this._transformBounds(c,a,b);var d=this._props.matrix;d=b?d.identity():this.getMatrix(d),a&&d.prependMatrix(a);for(var e=this.children.length,f=null,g=0;e>g;g++){var h=this.children[g];h.visible&&(c=h._getBounds(d))&&(f?f.extend(c.x,c.y,c.width,c.height):f=c.clone())}return f},createjs.Container=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.Container_constructor(),this.autoClear=!0,this.canvas="string"==typeof a?document.getElementById(a):a,this.mouseX=0,this.mouseY=0,this.drawRect=null,this.snapToPixelEnabled=!1,this.mouseInBounds=!1,this.tickOnUpdate=!0,this.mouseMoveOutside=!1,this.preventSelection=!0,this._pointerData={},this._pointerCount=0,this._primaryPointerID=null,this._mouseOverIntervalID=null,this._nextStage=null,this._prevStage=null,this.enableDOMEvents(!0)}var b=createjs.extend(a,createjs.Container);b._get_nextStage=function(){return this._nextStage},b._set_nextStage=function(a){this._nextStage&&(this._nextStage._prevStage=null),a&&(a._prevStage=this),this._nextStage=a};try{Object.defineProperties(b,{nextStage:{get:b._get_nextStage,set:b._set_nextStage}})}catch(c){}b.update=function(a){if(this.canvas&&(this.tickOnUpdate&&this.tick(a),this.dispatchEvent("drawstart",!1,!0)!==!1)){createjs.DisplayObject._snapToPixelEnabled=this.snapToPixelEnabled;var b=this.drawRect,c=this.canvas.getContext("2d");c.setTransform(1,0,0,1,0,0),this.autoClear&&(b?c.clearRect(b.x,b.y,b.width,b.height):c.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)),c.save(),this.drawRect&&(c.beginPath(),c.rect(b.x,b.y,b.width,b.height),c.clip()),this.updateContext(c),this.draw(c,!1),c.restore(),this.dispatchEvent("drawend")}},b.tick=function(a){if(this.tickEnabled&&this.dispatchEvent("tickstart",!1,!0)!==!1){var b=new createjs.Event("tick");if(a)for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);this._tick(b),this.dispatchEvent("tickend")}},b.handleEvent=function(a){"tick"==a.type&&this.update(a)},b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0),a.clearRect(0,0,this.canvas.width+1,this.canvas.height+1)}},b.toDataURL=function(a,b){var c,d=this.canvas.getContext("2d"),e=this.canvas.width,f=this.canvas.height;if(a){c=d.getImageData(0,0,e,f);var g=d.globalCompositeOperation;d.globalCompositeOperation="destination-over",d.fillStyle=a,d.fillRect(0,0,e,f)}var h=this.canvas.toDataURL(b||"image/png");return a&&(d.putImageData(c,0,0),d.globalCompositeOperation=g),h},b.enableMouseOver=function(a){if(this._mouseOverIntervalID&&(clearInterval(this._mouseOverIntervalID),this._mouseOverIntervalID=null,0==a&&this._testMouseOver(!0)),null==a)a=20;else if(0>=a)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1e3/Math.min(50,a))},b.enableDOMEvents=function(a){null==a&&(a=!0);var b,c,d=this._eventListeners;if(!a&&d){for(b in d)c=d[b],c.t.removeEventListener(b,c.f,!1);this._eventListeners=null}else if(a&&!d&&this.canvas){var e=window.addEventListener?window:document,f=this;d=this._eventListeners={},d.mouseup={t:e,f:function(a){f._handleMouseUp(a)}},d.mousemove={t:e,f:function(a){f._handleMouseMove(a)}},d.dblclick={t:this.canvas,f:function(a){f._handleDoubleClick(a)}},d.mousedown={t:this.canvas,f:function(a){f._handleMouseDown(a)}};for(b in d)c=d[b],c.t.addEventListener(b,c.f,!1)}},b.clone=function(){throw"Stage cannot be cloned."},b.toString=function(){return"[Stage (name="+this.name+")]"},b._getElementRect=function(a){var b;try{b=a.getBoundingClientRect()}catch(c){b={top:a.offsetTop,left:a.offsetLeft,width:a.offsetWidth,height:a.offsetHeight}}var d=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),e=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||document.body.clientTop||0),f=window.getComputedStyle?getComputedStyle(a,null):a.currentStyle,g=parseInt(f.paddingLeft)+parseInt(f.borderLeftWidth),h=parseInt(f.paddingTop)+parseInt(f.borderTopWidth),i=parseInt(f.paddingRight)+parseInt(f.borderRightWidth),j=parseInt(f.paddingBottom)+parseInt(f.borderBottomWidth);return{left:b.left+d+g,right:b.right+d-i,top:b.top+e+h,bottom:b.bottom+e-j}},b._getPointerData=function(a){var b=this._pointerData[a];return b||(b=this._pointerData[a]={x:0,y:0}),b},b._handleMouseMove=function(a){a||(a=window.event),this._handlePointerMove(-1,a,a.pageX,a.pageY)},b._handlePointerMove=function(a,b,c,d,e){if((!this._prevStage||void 0!==e)&&this.canvas){var f=this._nextStage,g=this._getPointerData(a),h=g.inBounds;this._updatePointerPosition(a,b,c,d),(h||g.inBounds||this.mouseMoveOutside)&&(-1===a&&g.inBounds==!h&&this._dispatchMouseEvent(this,h?"mouseleave":"mouseenter",!1,a,g,b),this._dispatchMouseEvent(this,"stagemousemove",!1,a,g,b),this._dispatchMouseEvent(g.target,"pressmove",!0,a,g,b)),f&&f._handlePointerMove(a,b,c,d,null)}},b._updatePointerPosition=function(a,b,c,d){var e=this._getElementRect(this.canvas);c-=e.left,d-=e.top;var f=this.canvas.width,g=this.canvas.height;c/=(e.right-e.left)/f,d/=(e.bottom-e.top)/g;var h=this._getPointerData(a);(h.inBounds=c>=0&&d>=0&&f-1>=c&&g-1>=d)?(h.x=c,h.y=d):this.mouseMoveOutside&&(h.x=0>c?0:c>f-1?f-1:c,h.y=0>d?0:d>g-1?g-1:d),h.posEvtObj=b,h.rawX=c,h.rawY=d,(a===this._primaryPointerID||-1===a)&&(this.mouseX=h.x,this.mouseY=h.y,this.mouseInBounds=h.inBounds)},b._handleMouseUp=function(a){this._handlePointerUp(-1,a,!1)},b._handlePointerUp=function(a,b,c,d){var e=this._nextStage,f=this._getPointerData(a);if(!this._prevStage||void 0!==d){var g=null,h=f.target;d||!h&&!e||(g=this._getObjectsUnderPoint(f.x,f.y,null,!0)),f.down&&(this._dispatchMouseEvent(this,"stagemouseup",!1,a,f,b,g),f.down=!1),g==h&&this._dispatchMouseEvent(h,"click",!0,a,f,b),this._dispatchMouseEvent(h,"pressup",!0,a,f,b),c?(a==this._primaryPointerID&&(this._primaryPointerID=null),delete this._pointerData[a]):f.target=null,e&&e._handlePointerUp(a,b,c,d||g&&this)}},b._handleMouseDown=function(a){this._handlePointerDown(-1,a,a.pageX,a.pageY)},b._handlePointerDown=function(a,b,c,d,e){this.preventSelection&&b.preventDefault(),(null==this._primaryPointerID||-1===a)&&(this._primaryPointerID=a),null!=d&&this._updatePointerPosition(a,b,c,d);var f=null,g=this._nextStage,h=this._getPointerData(a);e||(f=h.target=this._getObjectsUnderPoint(h.x,h.y,null,!0)),h.inBounds&&(this._dispatchMouseEvent(this,"stagemousedown",!1,a,h,b,f),h.down=!0),this._dispatchMouseEvent(f,"mousedown",!0,a,h,b),g&&g._handlePointerDown(a,b,c,d,e||f&&this)},b._testMouseOver=function(a,b,c){if(!this._prevStage||void 0!==b){var d=this._nextStage;if(!this._mouseOverIntervalID)return void(d&&d._testMouseOver(a,b,c));var e=this._getPointerData(-1);if(e&&(a||this.mouseX!=this._mouseOverX||this.mouseY!=this._mouseOverY||!this.mouseInBounds)){var f,g,h,i=e.posEvtObj,j=c||i&&i.target==this.canvas,k=null,l=-1,m="";!b&&(a||this.mouseInBounds&&j)&&(k=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,!0),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY);var n=this._mouseOverTarget||[],o=n[n.length-1],p=this._mouseOverTarget=[];for(f=k;f;)p.unshift(f),m||(m=f.cursor),f=f.parent;for(this.canvas.style.cursor=m,!b&&c&&(c.canvas.style.cursor=m),g=0,h=p.length;h>g&&p[g]==n[g];g++)l=g;for(o!=k&&this._dispatchMouseEvent(o,"mouseout",!0,-1,e,i,k),g=n.length-1;g>l;g--)this._dispatchMouseEvent(n[g],"rollout",!1,-1,e,i,k);for(g=p.length-1;g>l;g--)this._dispatchMouseEvent(p[g],"rollover",!1,-1,e,i,o);o!=k&&this._dispatchMouseEvent(k,"mouseover",!0,-1,e,i,o),d&&d._testMouseOver(a,b||k&&this,c||j&&this)}}},b._handleDoubleClick=function(a,b){var c=null,d=this._nextStage,e=this._getPointerData(-1);b||(c=this._getObjectsUnderPoint(e.x,e.y,null,!0),this._dispatchMouseEvent(c,"dblclick",!0,-1,e,a)),d&&d._handleDoubleClick(a,b||c&&this)},b._dispatchMouseEvent=function(a,b,c,d,e,f,g){if(a&&(c||a.hasEventListener(b))){var h=new createjs.MouseEvent(b,c,!1,e.x,e.y,f,d,d===this._primaryPointerID||-1===d,e.rawX,e.rawY,g);a.dispatchEvent(h)}},createjs.Stage=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){function a(a){this.DisplayObject_constructor(),"string"==typeof a?(this.image=document.createElement("img"),this.image.src=a):this.image=a,this.sourceRect=null}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.image,b=this.cacheCanvas||a&&(a.naturalWidth||a.getContext||a.readyState>=2);return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&b)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b)||!this.image)return!0;var c=this.image,d=this.sourceRect;if(d){var e=d.x,f=d.y,g=e+d.width,h=f+d.height,i=0,j=0,k=c.width,l=c.height;0>e&&(i-=e,e=0),g>k&&(g=k),0>f&&(j-=f,f=0),h>l&&(h=l),a.drawImage(c,e,f,g-e,h-f,i,j,g-e,h-f)}else a.drawImage(c,0,0);return!0},b.getBounds=function(){var a=this.DisplayObject_getBounds();if(a)return a;var b=this.image,c=this.sourceRect||b,d=b&&(b.naturalWidth||b.getContext||b.readyState>=2);return d?this._rectangle.setValues(0,0,c.width,c.height):null},b.clone=function(){var b=new a(this.image);return this.sourceRect&&(b.sourceRect=this.sourceRect.clone()),this._cloneProps(b),b},b.toString=function(){return"[Bitmap (name="+this.name+")]"},createjs.Bitmap=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.DisplayObject_constructor(),this.currentFrame=0,this.currentAnimation=null,this.paused=!0,this.spriteSheet=a,this.currentAnimationFrame=0,this.framerate=0,this._animation=null,this._currentFrame=null,this._skipAdvance=!1,null!=b&&this.gotoAndPlay(b)}var b=createjs.extend(a,createjs.DisplayObject);b.initialize=a,b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet.complete;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;this._normalizeFrame();var c=this.spriteSheet.getFrame(0|this._currentFrame);if(!c)return!1;var d=c.rect;return d.width&&d.height&&a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height),!0},b.play=function(){this.paused=!1},b.stop=function(){this.paused=!0},b.gotoAndPlay=function(a){this.paused=!1,this._skipAdvance=!0,this._goto(a)},b.gotoAndStop=function(a){this.paused=!0,this._goto(a)},b.advance=function(a){var b=this.framerate||this.spriteSheet.framerate,c=b&&null!=a?a/(1e3/b):1;this._normalizeFrame(c)},b.getBounds=function(){return this.DisplayObject_getBounds()||this.spriteSheet.getFrameBounds(this.currentFrame,this._rectangle)},b.clone=function(){return this._cloneProps(new a(this.spriteSheet))},b.toString=function(){return"[Sprite (name="+this.name+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.currentFrame=this.currentFrame,a.currentAnimation=this.currentAnimation,a.paused=this.paused,a.currentAnimationFrame=this.currentAnimationFrame,a.framerate=this.framerate,a._animation=this._animation,a._currentFrame=this._currentFrame,a._skipAdvance=this._skipAdvance,a},b._tick=function(a){this.paused||(this._skipAdvance||this.advance(a&&a.delta),this._skipAdvance=!1),this.DisplayObject__tick(a)},b._normalizeFrame=function(a){a=a||0;var b,c=this._animation,d=this.paused,e=this._currentFrame;if(c){var f=c.speed||1,g=this.currentAnimationFrame;if(b=c.frames.length,g+a*f>=b){var h=c.next;if(this._dispatchAnimationEnd(c,e,d,h,b-1))return;if(h)return this._goto(h,a-(b-g)/f);this.paused=!0,g=c.frames.length-1}else g+=a*f;this.currentAnimationFrame=g,this._currentFrame=c.frames[0|g]}else if(e=this._currentFrame+=a,b=this.spriteSheet.getNumFrames(),e>=b&&b>0&&!this._dispatchAnimationEnd(c,e,d,b-1)&&(this._currentFrame-=b)>=b)return this._normalizeFrame();e=0|this._currentFrame,this.currentFrame!=e&&(this.currentFrame=e,this.dispatchEvent("change"))},b._dispatchAnimationEnd=function(a,b,c,d,e){var f=a?a.name:null;if(this.hasEventListener("animationend")){var g=new createjs.Event("animationend");g.name=f,g.next=d,this.dispatchEvent(g)}var h=this._animation!=a||this._currentFrame!=b;return h||c||!this.paused||(this.currentAnimationFrame=e,h=!0),h},b._goto=function(a,b){if(this.currentAnimationFrame=0,isNaN(a)){var c=this.spriteSheet.getAnimation(a);c&&(this._animation=c,this.currentAnimation=a,this._normalizeFrame(b))}else this.currentAnimation=this._animation=null,this._currentFrame=a,this._normalizeFrame()},createjs.Sprite=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),this.graphics=a?a:new createjs.Graphics}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){var a=this.cacheCanvas||this.graphics&&!this.graphics.isEmpty();return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){return this.DisplayObject_draw(a,b)?!0:(this.graphics.draw(a,this),!0)},b.clone=function(b){var c=b&&this.graphics?this.graphics.clone():this.graphics;return this._cloneProps(new a(c))},b.toString=function(){return"[Shape (name="+this.name+")]"},createjs.Shape=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.DisplayObject_constructor(),this.text=a,this.font=b,this.color=c,this.textAlign="left",this.textBaseline="top",this.maxWidth=null,this.outline=0,this.lineHeight=0,this.lineWidth=null}var b=createjs.extend(a,createjs.DisplayObject),c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c.getContext&&(a._workingContext=c.getContext("2d"),c.width=c.height=1),a.H_OFFSETS={start:0,left:0,center:-.5,end:-1,right:-1},a.V_OFFSETS={top:0,hanging:-.01,middle:-.4,alphabetic:-.8,ideographic:-.85,bottom:-1},b.isVisible=function(){var a=this.cacheCanvas||null!=this.text&&""!==this.text;return!!(this.visible&&this.alpha>0&&0!=this.scaleX&&0!=this.scaleY&&a)},b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return!0;var c=this.color||"#000";return this.outline?(a.strokeStyle=c,a.lineWidth=1*this.outline):a.fillStyle=c,this._drawText(this._prepContext(a)),!0},b.getMeasuredWidth=function(){return this._getMeasuredWidth(this.text)},b.getMeasuredLineHeight=function(){return 1.2*this._getMeasuredWidth("M")},b.getMeasuredHeight=function(){return this._drawText(null,{}).height},b.getBounds=function(){var b=this.DisplayObject_getBounds();if(b)return b;if(null==this.text||""===this.text)return null;var c=this._drawText(null,{}),d=this.maxWidth&&this.maxWidth<c.width?this.maxWidth:c.width,e=d*a.H_OFFSETS[this.textAlign||"left"],f=this.lineHeight||this.getMeasuredLineHeight(),g=f*a.V_OFFSETS[this.textBaseline||"top"];return this._rectangle.setValues(e,g,d,c.height)},b.getMetrics=function(){var b={lines:[]};return b.lineHeight=this.lineHeight||this.getMeasuredLineHeight(),b.vOffset=b.lineHeight*a.V_OFFSETS[this.textBaseline||"top"],this._drawText(null,b,b.lines)},b.clone=function(){return this._cloneProps(new a(this.text,this.font,this.color))},b.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"},b._cloneProps=function(a){return this.DisplayObject__cloneProps(a),a.textAlign=this.textAlign,a.textBaseline=this.textBaseline,a.maxWidth=this.maxWidth,a.outline=this.outline,a.lineHeight=this.lineHeight,a.lineWidth=this.lineWidth,a},b._prepContext=function(a){return a.font=this.font||"10px sans-serif",a.textAlign=this.textAlign||"left",a.textBaseline=this.textBaseline||"top",a},b._drawText=function(b,c,d){var e=!!b;e||(b=a._workingContext,b.save(),this._prepContext(b));for(var f=this.lineHeight||this.getMeasuredLineHeight(),g=0,h=0,i=String(this.text).split(/(?:\r\n|\r|\n)/),j=0,k=i.length;k>j;j++){var l=i[j],m=null;if(null!=this.lineWidth&&(m=b.measureText(l).width)>this.lineWidth){var n=l.split(/(\s)/);l=n[0],m=b.measureText(l).width;for(var o=1,p=n.length;p>o;o+=2){var q=b.measureText(n[o]+n[o+1]).width;m+q>this.lineWidth?(e&&this._drawTextLine(b,l,h*f),d&&d.push(l),m>g&&(g=m),l=n[o+1],m=b.measureText(l).width,h++):(l+=n[o]+n[o+1],m+=q)}}e&&this._drawTextLine(b,l,h*f),d&&d.push(l),c&&null==m&&(m=b.measureText(l).width),m>g&&(g=m),h++}return c&&(c.width=g,c.height=h*f),e||b.restore(),c},b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)},b._getMeasuredWidth=function(b){var c=a._workingContext;c.save();var d=this._prepContext(c).measureText(b).width;return c.restore(),d},createjs.Text=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Container_constructor(),this.text=a||"",this.spriteSheet=b,this.lineHeight=0,this.letterSpacing=0,this.spaceWidth=0,this._oldProps={text:0,spriteSheet:0,lineHeight:0,letterSpacing:0,spaceWidth:0}}var b=createjs.extend(a,createjs.Container);a.maxPoolSize=100,a._spritePool=[],b.draw=function(a,b){this.DisplayObject_draw(a,b)||(this._updateText(),this.Container_draw(a,b))},b.getBounds=function(){return this._updateText(),this.Container_getBounds()},b.isVisible=function(){var a=this.cacheCanvas||this.spriteSheet&&this.spriteSheet.complete&&this.text;return!!(this.visible&&this.alpha>0&&0!==this.scaleX&&0!==this.scaleY&&a)},b.clone=function(){return this._cloneProps(new a(this.text,this.spriteSheet))},b.addChild=b.addChildAt=b.removeChild=b.removeChildAt=b.removeAllChildren=function(){},b._cloneProps=function(a){return this.Container__cloneProps(a),a.lineHeight=this.lineHeight,a.letterSpacing=this.letterSpacing,a.spaceWidth=this.spaceWidth,a},b._getFrameIndex=function(a,b){var c,d=b.getAnimation(a);return d||(a!=(c=a.toUpperCase())||a!=(c=a.toLowerCase())||(c=null),c&&(d=b.getAnimation(c))),d&&d.frames[0]},b._getFrame=function(a,b){var c=this._getFrameIndex(a,b);return null==c?c:b.getFrame(c)},b._getLineHeight=function(a){var b=this._getFrame("1",a)||this._getFrame("T",a)||this._getFrame("L",a)||a.getFrame(0);return b?b.rect.height:1},b._getSpaceWidth=function(a){var b=this._getFrame("1",a)||this._getFrame("l",a)||this._getFrame("e",a)||this._getFrame("a",a)||a.getFrame(0);return b?b.rect.width:1},b._updateText=function(){var b,c=0,d=0,e=this._oldProps,f=!1,g=this.spaceWidth,h=this.lineHeight,i=this.spriteSheet,j=a._spritePool,k=this.children,l=0,m=k.length;for(var n in e)e[n]!=this[n]&&(e[n]=this[n],f=!0);if(f){var o=!!this._getFrame(" ",i);o||g||(g=this._getSpaceWidth(i)),h||(h=this._getLineHeight(i));for(var p=0,q=this.text.length;q>p;p++){var r=this.text.charAt(p);if(" "!=r||o)if("\n"!=r&&"\r"!=r){var s=this._getFrameIndex(r,i);null!=s&&(m>l?b=k[l]:(k.push(b=j.length?j.pop():new createjs.Sprite),b.parent=this,m++),b.spriteSheet=i,b.gotoAndStop(s),b.x=c,b.y=d,l++,c+=b.getBounds().width+this.letterSpacing)}else"\r"==r&&"\n"==this.text.charAt(p+1)&&p++,c=0,d+=h;else c+=g}for(;m>l;)j.push(b=k.pop()),b.parent=null,m--;j.length>a.maxPoolSize&&(j.length=a.maxPoolSize)}},createjs.BitmapText=createjs.promote(a,"Container")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"SpriteSheetUtils cannot be instantiated"}var b=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");b.getContext&&(a._workingCanvas=b,a._workingContext=b.getContext("2d"),b.width=b.height=1),a.addFlippedFrames=function(b,c,d,e){if(c||d||e){var f=0;c&&a._flip(b,++f,!0,!1),d&&a._flip(b,++f,!1,!0),e&&a._flip(b,++f,!0,!0)}},a.extractFrame=function(b,c){isNaN(c)&&(c=b.getAnimation(c).frames[0]);var d=b.getFrame(c);if(!d)return null;var e=d.rect,f=a._workingCanvas;f.width=e.width,f.height=e.height,a._workingContext.drawImage(d.image,e.x,e.y,e.width,e.height,0,0,e.width,e.height);var g=document.createElement("img");return g.src=f.toDataURL("image/png"),g},a.mergeAlpha=function(a,b,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")),c.width=Math.max(b.width,a.width),c.height=Math.max(b.height,a.height);var d=c.getContext("2d");return d.save(),d.drawImage(a,0,0),d.globalCompositeOperation="destination-in",d.drawImage(b,0,0),d.restore(),c},a._flip=function(b,c,d,e){for(var f=b._images,g=a._workingCanvas,h=a._workingContext,i=f.length/c,j=0;i>j;j++){var k=f[j];k.__tmp=j,
h.setTransform(1,0,0,1,0,0),h.clearRect(0,0,g.width+1,g.height+1),g.width=k.width,g.height=k.height,h.setTransform(d?-1:1,0,0,e?-1:1,d?k.width:0,e?k.height:0),h.drawImage(k,0,0);var l=document.createElement("img");l.src=g.toDataURL("image/png"),l.width=k.width,l.height=k.height,f.push(l)}var m=b._frames,n=m.length/c;for(j=0;n>j;j++){k=m[j];var o=k.rect.clone();l=f[k.image.__tmp+i*c];var p={image:l,rect:o,regX:k.regX,regY:k.regY};d&&(o.x=l.width-o.x-o.width,p.regX=o.width-k.regX),e&&(o.y=l.height-o.y-o.height,p.regY=o.height-k.regY),m.push(p)}var q="_"+(d?"h":"")+(e?"v":""),r=b._animations,s=b._data,t=r.length/c;for(j=0;t>j;j++){var u=r[j];k=s[u];var v={name:u+q,speed:k.speed,next:k.next,frames:[]};k.next&&(v.next+=q),m=k.frames;for(var w=0,x=m.length;x>w;w++)v.frames.push(m[w]+n*c);s[v.name]=v,r.push(v.name)}},createjs.SpriteSheetUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.EventDispatcher_constructor(),this.maxWidth=2048,this.maxHeight=2048,this.spriteSheet=null,this.scale=1,this.padding=1,this.timeSlice=.3,this.progress=-1,this._frames=[],this._animations={},this._data=null,this._nextFrameIndex=0,this._index=0,this._timerID=null,this._scale=1}var b=createjs.extend(a,createjs.EventDispatcher);a.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions",a.ERR_RUNNING="a build is already running",b.addFrame=function(b,c,d,e,f){if(this._data)throw a.ERR_RUNNING;var g=c||b.bounds||b.nominalBounds;return!g&&b.getBounds&&(g=b.getBounds()),g?(d=d||1,this._frames.push({source:b,sourceRect:g,scale:d,funct:e,data:f,index:this._frames.length,height:g.height*d})-1):null},b.addAnimation=function(b,c,d,e){if(this._data)throw a.ERR_RUNNING;this._animations[b]={frames:c,next:d,frequency:e}},b.addMovieClip=function(b,c,d,e,f,g){if(this._data)throw a.ERR_RUNNING;var h=b.frameBounds,i=c||b.bounds||b.nominalBounds;if(!i&&b.getBounds&&(i=b.getBounds()),i||h){var j,k,l=this._frames.length,m=b.timeline.duration;for(j=0;m>j;j++){var n=h&&h[j]?h[j]:i;this.addFrame(b,n,d,this._setupMovieClipFrame,{i:j,f:e,d:f})}var o=b.timeline._labels,p=[];for(var q in o)p.push({index:o[q],label:q});if(p.length)for(p.sort(function(a,b){return a.index-b.index}),j=0,k=p.length;k>j;j++){for(var r=p[j].label,s=l+p[j].index,t=l+(j==k-1?m:p[j+1].index),u=[],v=s;t>v;v++)u.push(v);(!g||(r=g(r,b,s,t)))&&this.addAnimation(r,u,!0)}}},b.build=function(){if(this._data)throw a.ERR_RUNNING;for(this._startBuild();this._drawNext(););return this._endBuild(),this.spriteSheet},b.buildAsync=function(b){if(this._data)throw a.ERR_RUNNING;this.timeSlice=b,this._startBuild();var c=this;this._timerID=setTimeout(function(){c._run()},50-50*Math.max(.01,Math.min(.99,this.timeSlice||.3)))},b.stopAsync=function(){clearTimeout(this._timerID),this._data=null},b.clone=function(){throw"SpriteSheetBuilder cannot be cloned."},b.toString=function(){return"[SpriteSheetBuilder]"},b._startBuild=function(){var b=this.padding||0;this.progress=0,this.spriteSheet=null,this._index=0,this._scale=this.scale;var c=[];this._data={images:[],frames:c,animations:this._animations};var d=this._frames.slice();if(d.sort(function(a,b){return a.height<=b.height?-1:1}),d[d.length-1].height+2*b>this.maxHeight)throw a.ERR_DIMENSIONS;for(var e=0,f=0,g=0;d.length;){var h=this._fillRow(d,e,g,c,b);if(h.w>f&&(f=h.w),e+=h.h,!h.h||!d.length){var i=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");i.width=this._getSize(f,this.maxWidth),i.height=this._getSize(e,this.maxHeight),this._data.images[g]=i,h.h||(f=e=0,g++)}}},b._setupMovieClipFrame=function(a,b){var c=a.actionsEnabled;a.actionsEnabled=!1,a.gotoAndStop(b.i),a.actionsEnabled=c,b.f&&b.f(a,b.d,b.i)},b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))},b._fillRow=function(b,c,d,e,f){var g=this.maxWidth,h=this.maxHeight;c+=f;for(var i=h-c,j=f,k=0,l=b.length-1;l>=0;l--){var m=b[l],n=this._scale*m.scale,o=m.sourceRect,p=m.source,q=Math.floor(n*o.x-f),r=Math.floor(n*o.y-f),s=Math.ceil(n*o.height+2*f),t=Math.ceil(n*o.width+2*f);if(t>g)throw a.ERR_DIMENSIONS;s>i||j+t>g||(m.img=d,m.rect=new createjs.Rectangle(j,c,t,s),k=k||s,b.splice(l,1),e[m.index]=[j,c,t,s,d,Math.round(-q+n*p.regX-f),Math.round(-r+n*p.regY-f)],j+=t)}return{w:j,h:k}},b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data),this._data=null,this.progress=1,this.dispatchEvent("complete")},b._run=function(){for(var a=50*Math.max(.01,Math.min(.99,this.timeSlice||.3)),b=(new Date).getTime()+a,c=!1;b>(new Date).getTime();)if(!this._drawNext()){c=!0;break}if(c)this._endBuild();else{var d=this;this._timerID=setTimeout(function(){d._run()},50-a)}var e=this.progress=this._index/this._frames.length;if(this.hasEventListener("progress")){var f=new createjs.Event("progress");f.progress=e,this.dispatchEvent(f)}},b._drawNext=function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img],f=e.getContext("2d");return a.funct&&a.funct(a.source,a.data),f.save(),f.beginPath(),f.rect(c.x,c.y,c.width,c.height),f.clip(),f.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b)),f.scale(b,b),a.source.draw(f),f.restore(),++this._index<this._frames.length},createjs.SpriteSheetBuilder=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.DisplayObject_constructor(),"string"==typeof a&&(a=document.getElementById(a)),this.mouseEnabled=!1;var b=a.style;b.position="absolute",b.transformOrigin=b.WebkitTransformOrigin=b.msTransformOrigin=b.MozTransformOrigin=b.OTransformOrigin="0% 0%",this.htmlElement=a,this._oldProps=null}var b=createjs.extend(a,createjs.DisplayObject);b.isVisible=function(){return null!=this.htmlElement},b.draw=function(){return!0},b.cache=function(){},b.uncache=function(){},b.updateCache=function(){},b.hitTest=function(){},b.localToGlobal=function(){},b.globalToLocal=function(){},b.localToLocal=function(){},b.clone=function(){throw"DOMElement cannot be cloned."},b.toString=function(){return"[DOMElement (name="+this.name+")]"},b._tick=function(a){var b=this.getStage();b&&b.on("drawend",this._handleDrawEnd,this,!0),this.DisplayObject__tick(a)},b._handleDrawEnd=function(){var a=this.htmlElement;if(a){var b=a.style,c=this.getConcatenatedDisplayProps(this._props),d=c.matrix,e=c.visible?"visible":"hidden";if(e!=b.visibility&&(b.visibility=e),c.visible){var f=this._oldProps,g=f&&f.matrix,h=1e4;if(!g||!g.equals(d)){var i="matrix("+(d.a*h|0)/h+","+(d.b*h|0)/h+","+(d.c*h|0)/h+","+(d.d*h|0)/h+","+(d.tx+.5|0);b.transform=b.WebkitTransform=b.OTransform=b.msTransform=i+","+(d.ty+.5|0)+")",b.MozTransform=i+"px,"+(d.ty+.5|0)+"px)",f||(f=this._oldProps=new createjs.DisplayProps(!0,0/0)),f.matrix.copy(d)}f.alpha!=c.alpha&&(b.opacity=""+(c.alpha*h|0)/h,f.alpha=c.alpha)}}},createjs.DOMElement=createjs.promote(a,"DisplayObject")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){}var b=a.prototype;b.getBounds=function(a){return a},b.applyFilter=function(a,b,c,d,e,f,g,h){f=f||a,null==g&&(g=b),null==h&&(h=c);try{var i=a.getImageData(b,c,d,e)}catch(j){return!1}return this._applyFilter(i)?(f.putImageData(i,g,h),!0):!1},b.toString=function(){return"[Filter]"},b.clone=function(){return new a},b._applyFilter=function(){return!0},createjs.Filter=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){(isNaN(a)||0>a)&&(a=0),(isNaN(b)||0>b)&&(b=0),(isNaN(c)||1>c)&&(c=1),this.blurX=0|a,this.blurY=0|b,this.quality=0|c}var b=createjs.extend(a,createjs.Filter);a.MUL_TABLE=[1,171,205,293,57,373,79,137,241,27,391,357,41,19,283,265,497,469,443,421,25,191,365,349,335,161,155,149,9,278,269,261,505,245,475,231,449,437,213,415,405,395,193,377,369,361,353,345,169,331,325,319,313,307,301,37,145,285,281,69,271,267,263,259,509,501,493,243,479,118,465,459,113,446,55,435,429,423,209,413,51,403,199,393,97,3,379,375,371,367,363,359,355,351,347,43,85,337,333,165,327,323,5,317,157,311,77,305,303,75,297,294,73,289,287,71,141,279,277,275,68,135,67,133,33,262,260,129,511,507,503,499,495,491,61,121,481,477,237,235,467,232,115,457,227,451,7,445,221,439,218,433,215,427,425,211,419,417,207,411,409,203,202,401,399,396,197,49,389,387,385,383,95,189,47,187,93,185,23,183,91,181,45,179,89,177,11,175,87,173,345,343,341,339,337,21,167,83,331,329,327,163,81,323,321,319,159,79,315,313,39,155,309,307,153,305,303,151,75,299,149,37,295,147,73,291,145,289,287,143,285,71,141,281,35,279,139,69,275,137,273,17,271,135,269,267,133,265,33,263,131,261,130,259,129,257,1],a.SHG_TABLE=[0,9,10,11,9,12,10,11,12,9,13,13,10,9,13,13,14,14,14,14,10,13,14,14,14,13,13,13,9,14,14,14,15,14,15,14,15,15,14,15,15,15,14,15,15,15,15,15,14,15,15,15,15,15,15,12,14,15,15,13,15,15,15,15,16,16,16,15,16,14,16,16,14,16,13,16,16,16,15,16,13,16,15,16,14,9,16,16,16,16,16,16,16,16,16,13,14,16,16,15,16,16,10,16,15,16,14,16,16,14,16,16,14,16,16,14,15,16,16,16,14,15,14,15,13,16,16,15,17,17,17,17,17,17,14,15,17,17,16,16,17,16,15,17,16,17,11,17,16,17,16,17,16,17,17,16,17,17,16,17,17,16,16,17,17,17,16,14,17,17,17,17,15,16,14,16,15,16,13,16,15,16,14,16,15,16,12,16,15,16,17,17,17,17,17,13,16,15,17,17,17,16,15,17,17,17,16,15,17,17,14,16,17,17,16,17,17,16,15,17,16,14,17,16,15,17,16,17,17,16,17,15,16,17,14,17,16,15,17,16,17,13,17,16,17,17,16,17,14,17,16,17,16,17,16,17,9],b.getBounds=function(a){var b=0|this.blurX,c=0|this.blurY;if(0>=b&&0>=c)return a;var d=Math.pow(this.quality,.2);return(a||new createjs.Rectangle).pad(b*d+1,c*d+1,b*d+1,c*d+1)},b.clone=function(){return new a(this.blurX,this.blurY,this.quality)},b.toString=function(){return"[BlurFilter]"},b._applyFilter=function(b){var c=this.blurX>>1;if(isNaN(c)||0>c)return!1;var d=this.blurY>>1;if(isNaN(d)||0>d)return!1;if(0==c&&0==d)return!1;var e=this.quality;(isNaN(e)||1>e)&&(e=1),e|=0,e>3&&(e=3),1>e&&(e=1);var f=b.data,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=c+c+1|0,w=d+d+1|0,x=0|b.width,y=0|b.height,z=x-1|0,A=y-1|0,B=c+1|0,C=d+1|0,D={r:0,b:0,g:0,a:0},E=D;for(i=1;v>i;i++)E=E.n={r:0,b:0,g:0,a:0};E.n=D;var F={r:0,b:0,g:0,a:0},G=F;for(i=1;w>i;i++)G=G.n={r:0,b:0,g:0,a:0};G.n=F;for(var H=null,I=0|a.MUL_TABLE[c],J=0|a.SHG_TABLE[c],K=0|a.MUL_TABLE[d],L=0|a.SHG_TABLE[d];e-->0;){m=l=0;var M=I,N=J;for(h=y;--h>-1;){for(n=B*(r=f[0|l]),o=B*(s=f[l+1|0]),p=B*(t=f[l+2|0]),q=B*(u=f[l+3|0]),E=D,i=B;--i>-1;)E.r=r,E.g=s,E.b=t,E.a=u,E=E.n;for(i=1;B>i;i++)j=l+((i>z?z:i)<<2)|0,n+=E.r=f[j],o+=E.g=f[j+1],p+=E.b=f[j+2],q+=E.a=f[j+3],E=E.n;for(H=D,g=0;x>g;g++)f[l++]=n*M>>>N,f[l++]=o*M>>>N,f[l++]=p*M>>>N,f[l++]=q*M>>>N,j=m+((j=g+c+1)<z?j:z)<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n;m+=x}for(M=K,N=L,g=0;x>g;g++){for(l=g<<2|0,n=C*(r=f[l])|0,o=C*(s=f[l+1|0])|0,p=C*(t=f[l+2|0])|0,q=C*(u=f[l+3|0])|0,G=F,i=0;C>i;i++)G.r=r,G.g=s,G.b=t,G.a=u,G=G.n;for(k=x,i=1;d>=i;i++)l=k+g<<2,n+=G.r=f[l],o+=G.g=f[l+1],p+=G.b=f[l+2],q+=G.a=f[l+3],G=G.n,A>i&&(k+=x);if(l=g,H=F,e>0)for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(f[j]=n*M>>>N,f[j+1]=o*M>>>N,f[j+2]=p*M>>>N):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x;else for(h=0;y>h;h++)j=l<<2,f[j+3]=u=q*M>>>N,u>0?(u=255/u,f[j]=(n*M>>>N)*u,f[j+1]=(o*M>>>N)*u,f[j+2]=(p*M>>>N)*u):f[j]=f[j+1]=f[j+2]=0,j=g+((j=h+C)<A?j:A)*x<<2,n-=H.r-(H.r=f[j]),o-=H.g-(H.g=f[j+1]),p-=H.b-(H.b=f[j+2]),q-=H.a-(H.a=f[j+3]),H=H.n,l+=x}}return!0},createjs.BlurFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.alphaMap=a,this._alphaMap=null,this._mapData=null}var b=createjs.extend(a,createjs.Filter);b.clone=function(){var b=new a(this.alphaMap);return b._alphaMap=this._alphaMap,b._mapData=this._mapData,b},b.toString=function(){return"[AlphaMapFilter]"},b._applyFilter=function(a){if(!this.alphaMap)return!0;if(!this._prepAlphaMap())return!1;for(var b=a.data,c=this._mapData,d=0,e=b.length;e>d;d+=4)b[d+3]=c[d]||0;return!0},b._prepAlphaMap=function(){if(!this.alphaMap)return!1;if(this.alphaMap==this._alphaMap&&this._mapData)return!0;this._mapData=null;var a,b=this._alphaMap=this.alphaMap,c=b;b instanceof HTMLCanvasElement?a=c.getContext("2d"):(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"),c.width=b.width,c.height=b.height,a=c.getContext("2d"),a.drawImage(b,0,0));try{var d=a.getImageData(0,0,b.width,b.height)}catch(e){return!1}return this._mapData=d.data,!0},createjs.AlphaMapFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.mask=a}var b=createjs.extend(a,createjs.Filter);b.applyFilter=function(a,b,c,d,e,f,g,h){return this.mask?(f=f||a,null==g&&(g=b),null==h&&(h=c),f.save(),a!=f?!1:(f.globalCompositeOperation="destination-in",f.drawImage(this.mask,g,h),f.restore(),!0)):!0},b.clone=function(){return new a(this.mask)},b.toString=function(){return"[AlphaMaskFilter]"},createjs.AlphaMaskFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d,e,f,g,h){this.redMultiplier=null!=a?a:1,this.greenMultiplier=null!=b?b:1,this.blueMultiplier=null!=c?c:1,this.alphaMultiplier=null!=d?d:1,this.redOffset=e||0,this.greenOffset=f||0,this.blueOffset=g||0,this.alphaOffset=h||0}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorFilter]"},b.clone=function(){return new a(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset)},b._applyFilter=function(a){for(var b=a.data,c=b.length,d=0;c>d;d+=4)b[d]=b[d]*this.redMultiplier+this.redOffset,b[d+1]=b[d+1]*this.greenMultiplier+this.greenOffset,b[d+2]=b[d+2]*this.blueMultiplier+this.blueOffset,b[d+3]=b[d+3]*this.alphaMultiplier+this.alphaOffset;return!0},createjs.ColorFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.setColor(a,b,c,d)}var b=a.prototype;a.DELTA_INDEX=[0,.01,.02,.04,.05,.06,.07,.08,.1,.11,.12,.14,.15,.16,.17,.18,.2,.21,.22,.24,.25,.27,.28,.3,.32,.34,.36,.38,.4,.42,.44,.46,.48,.5,.53,.56,.59,.62,.65,.68,.71,.74,.77,.8,.83,.86,.89,.92,.95,.98,1,1.06,1.12,1.18,1.24,1.3,1.36,1.42,1.48,1.54,1.6,1.66,1.72,1.78,1.84,1.9,1.96,2,2.12,2.25,2.37,2.5,2.62,2.75,2.87,3,3.2,3.4,3.6,3.8,4,4.3,4.7,4.9,5,5.5,6,6.5,6.8,7,7.3,7.5,7.8,8,8.4,8.7,9,9.4,9.6,9.8,10],a.IDENTITY_MATRIX=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1],a.LENGTH=a.IDENTITY_MATRIX.length,b.setColor=function(a,b,c,d){return this.reset().adjustColor(a,b,c,d)},b.reset=function(){return this.copy(a.IDENTITY_MATRIX)},b.adjustColor=function(a,b,c,d){return this.adjustHue(d),this.adjustContrast(b),this.adjustBrightness(a),this.adjustSaturation(c)},b.adjustBrightness=function(a){return 0==a||isNaN(a)?this:(a=this._cleanValue(a,255),this._multiplyMatrix([1,0,0,0,a,0,1,0,0,a,0,0,1,0,a,0,0,0,1,0,0,0,0,0,1]),this)},b.adjustContrast=function(b){if(0==b||isNaN(b))return this;b=this._cleanValue(b,100);var c;return 0>b?c=127+b/100*127:(c=b%1,c=0==c?a.DELTA_INDEX[b]:a.DELTA_INDEX[b<<0]*(1-c)+a.DELTA_INDEX[(b<<0)+1]*c,c=127*c+127),this._multiplyMatrix([c/127,0,0,0,.5*(127-c),0,c/127,0,0,.5*(127-c),0,0,c/127,0,.5*(127-c),0,0,0,1,0,0,0,0,0,1]),this},b.adjustSaturation=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,100);var b=1+(a>0?3*a/100:a/100),c=.3086,d=.6094,e=.082;return this._multiplyMatrix([c*(1-b)+b,d*(1-b),e*(1-b),0,0,c*(1-b),d*(1-b)+b,e*(1-b),0,0,c*(1-b),d*(1-b),e*(1-b)+b,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.adjustHue=function(a){if(0==a||isNaN(a))return this;a=this._cleanValue(a,180)/180*Math.PI;var b=Math.cos(a),c=Math.sin(a),d=.213,e=.715,f=.072;return this._multiplyMatrix([d+b*(1-d)+c*-d,e+b*-e+c*-e,f+b*-f+c*(1-f),0,0,d+b*-d+.143*c,e+b*(1-e)+.14*c,f+b*-f+c*-.283,0,0,d+b*-d+c*-(1-d),e+b*-e+c*e,f+b*(1-f)+c*f,0,0,0,0,0,1,0,0,0,0,0,1]),this},b.concat=function(b){return b=this._fixMatrix(b),b.length!=a.LENGTH?this:(this._multiplyMatrix(b),this)},b.clone=function(){return(new a).copy(this)},b.toArray=function(){for(var b=[],c=0,d=a.LENGTH;d>c;c++)b[c]=this[c];return b},b.copy=function(b){for(var c=a.LENGTH,d=0;c>d;d++)this[d]=b[d];return this},b.toString=function(){return"[ColorMatrix]"},b._multiplyMatrix=function(a){var b,c,d,e=[];for(b=0;5>b;b++){for(c=0;5>c;c++)e[c]=this[c+5*b];for(c=0;5>c;c++){var f=0;for(d=0;5>d;d++)f+=a[c+5*d]*e[d];this[c+5*b]=f}}},b._cleanValue=function(a,b){return Math.min(b,Math.max(-b,a))},b._fixMatrix=function(b){return b instanceof a&&(b=b.toArray()),b.length<a.LENGTH?b=b.slice(0,b.length).concat(a.IDENTITY_MATRIX.slice(b.length,a.LENGTH)):b.length>a.LENGTH&&(b=b.slice(0,a.LENGTH)),b},createjs.ColorMatrix=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.matrix=a}var b=createjs.extend(a,createjs.Filter);b.toString=function(){return"[ColorMatrixFilter]"},b.clone=function(){return new a(this.matrix)},b._applyFilter=function(a){for(var b,c,d,e,f=a.data,g=f.length,h=this.matrix,i=h[0],j=h[1],k=h[2],l=h[3],m=h[4],n=h[5],o=h[6],p=h[7],q=h[8],r=h[9],s=h[10],t=h[11],u=h[12],v=h[13],w=h[14],x=h[15],y=h[16],z=h[17],A=h[18],B=h[19],C=0;g>C;C+=4)b=f[C],c=f[C+1],d=f[C+2],e=f[C+3],f[C]=b*i+c*j+d*k+e*l+m,f[C+1]=b*n+c*o+d*p+e*q+r,f[C+2]=b*s+c*t+d*u+e*v+w,f[C+3]=b*x+c*y+d*z+e*A+B;return!0},createjs.ColorMatrixFilter=createjs.promote(a,"Filter")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Touch cannot be instantiated"}a.isSupported=function(){return!!("ontouchstart"in window||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0)},a.enable=function(b,c,d){return b&&b.canvas&&a.isSupported()?b.__touch?!0:(b.__touch={pointers:{},multitouch:!c,preventDefault:!d,count:0},"ontouchstart"in window?a._IOS_enable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_enable(b),!0):!1},a.disable=function(b){b&&("ontouchstart"in window?a._IOS_disable(b):(window.navigator.msPointerEnabled||window.navigator.pointerEnabled)&&a._IE_disable(b),delete b.__touch)},a._IOS_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IOS_handleEvent(b,c)};c.addEventListener("touchstart",d,!1),c.addEventListener("touchmove",d,!1),c.addEventListener("touchend",d,!1),c.addEventListener("touchcancel",d,!1)},a._IOS_disable=function(a){var b=a.canvas;if(b){var c=a.__touch.f;b.removeEventListener("touchstart",c,!1),b.removeEventListener("touchmove",c,!1),b.removeEventListener("touchend",c,!1),b.removeEventListener("touchcancel",c,!1)}},a._IOS_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();for(var c=b.changedTouches,d=b.type,e=0,f=c.length;f>e;e++){var g=c[e],h=g.identifier;g.target==a.canvas&&("touchstart"==d?this._handleStart(a,h,b,g.pageX,g.pageY):"touchmove"==d?this._handleMove(a,h,b,g.pageX,g.pageY):("touchend"==d||"touchcancel"==d)&&this._handleEnd(a,h,b))}}},a._IE_enable=function(b){var c=b.canvas,d=b.__touch.f=function(c){a._IE_handleEvent(b,c)};void 0===window.navigator.pointerEnabled?(c.addEventListener("MSPointerDown",d,!1),window.addEventListener("MSPointerMove",d,!1),window.addEventListener("MSPointerUp",d,!1),window.addEventListener("MSPointerCancel",d,!1),b.__touch.preventDefault&&(c.style.msTouchAction="none")):(c.addEventListener("pointerdown",d,!1),window.addEventListener("pointermove",d,!1),window.addEventListener("pointerup",d,!1),window.addEventListener("pointercancel",d,!1),b.__touch.preventDefault&&(c.style.touchAction="none")),b.__touch.activeIDs={}},a._IE_disable=function(a){var b=a.__touch.f;void 0===window.navigator.pointerEnabled?(window.removeEventListener("MSPointerMove",b,!1),window.removeEventListener("MSPointerUp",b,!1),window.removeEventListener("MSPointerCancel",b,!1),a.canvas&&a.canvas.removeEventListener("MSPointerDown",b,!1)):(window.removeEventListener("pointermove",b,!1),window.removeEventListener("pointerup",b,!1),window.removeEventListener("pointercancel",b,!1),a.canvas&&a.canvas.removeEventListener("pointerdown",b,!1))},a._IE_handleEvent=function(a,b){if(a){a.__touch.preventDefault&&b.preventDefault&&b.preventDefault();var c=b.type,d=b.pointerId,e=a.__touch.activeIDs;if("MSPointerDown"==c||"pointerdown"==c){if(b.srcElement!=a.canvas)return;e[d]=!0,this._handleStart(a,d,b,b.pageX,b.pageY)}else e[d]&&("MSPointerMove"==c||"pointermove"==c?this._handleMove(a,d,b,b.pageX,b.pageY):("MSPointerUp"==c||"MSPointerCancel"==c||"pointerup"==c||"pointercancel"==c)&&(delete e[d],this._handleEnd(a,d,b)))}},a._handleStart=function(a,b,c,d,e){var f=a.__touch;if(f.multitouch||!f.count){var g=f.pointers;g[b]||(g[b]=!0,f.count++,a._handlePointerDown(b,c,d,e))}},a._handleMove=function(a,b,c,d,e){a.__touch.pointers[b]&&a._handlePointerMove(b,c,d,e)},a._handleEnd=function(a,b,c){var d=a.__touch,e=d.pointers;e[b]&&(d.count--,a._handlePointerUp(b,c,!0),delete e[b])},createjs.Touch=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.EaselJS=createjs.EaselJS||{};a.version="0.8.1",a.buildDate="Thu, 21 May 2015 16:17:39 GMT"}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.PreloadJS=createjs.PreloadJS||{};a.version="0.6.1",a.buildDate="Thu, 21 May 2015 16:17:37 GMT"}(),this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"BrowserDetect cannot be instantiated"}var b=a.agent=window.navigator.userAgent;a.isWindowPhone=b.indexOf("IEMobile")>-1||b.indexOf("Windows Phone")>-1,a.isFirefox=b.indexOf("Firefox")>-1,a.isOpera=null!=window.opera,a.isChrome=b.indexOf("Chrome")>-1,a.isIOS=(b.indexOf("iPod")>-1||b.indexOf("iPhone")>-1||b.indexOf("iPad")>-1)&&!a.isWindowPhone,a.isAndroid=b.indexOf("Android")>-1&&!a.isWindowPhone,a.isBlackberry=b.indexOf("Blackberry")>-1,createjs.BrowserDetect=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.Event_constructor("error"),this.title=a,this.message=b,this.data=c}var b=createjs.extend(a,createjs.Event);b.clone=function(){return new createjs.ErrorEvent(this.title,this.message,this.data)},createjs.ErrorEvent=createjs.promote(a,"Event")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.Event_constructor("progress"),this.loaded=a,this.total=null==b?1:b,this.progress=0==b?0:this.loaded/this.total}var b=createjs.extend(a,createjs.Event);b.clone=function(){return new createjs.ProgressEvent(this.loaded,this.total)},createjs.ProgressEvent=createjs.promote(a,"Event")}(window),function(){function a(b,d){function f(a){if(f[a]!==q)return f[a];var b;if("bug-string-char-index"==a)b="a"!="a"[0];else if("json"==a)b=f("json-stringify")&&f("json-parse");else{var c,e='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==a){var i=d.stringify,k="function"==typeof i&&t;if(k){(c=function(){return 1}).toJSON=c;try{k="0"===i(0)&&"0"===i(new g)&&'""'==i(new h)&&i(s)===q&&i(q)===q&&i()===q&&"1"===i(c)&&"[1]"==i([c])&&"[null]"==i([q])&&"null"==i(null)&&"[null,null,null]"==i([q,s,null])&&i({a:[c,!0,!1,null,"\x00\b\n\f\r	"]})==e&&"1"===i(null,c)&&"[\n 1,\n 2\n]"==i([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==i(new j(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==i(new j(864e13))&&'"-000001-01-01T00:00:00.000Z"'==i(new j(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==i(new j(-1))}catch(l){k=!1}}b=k}if("json-parse"==a){var m=d.parse;if("function"==typeof m)try{if(0===m("0")&&!m(!1)){c=m(e);var n=5==c.a.length&&1===c.a[0];if(n){try{n=!m('"	"')}catch(l){}if(n)try{n=1!==m("01")}catch(l){}if(n)try{n=1!==m("1.")}catch(l){}}}}catch(l){n=!1}b=n}}return f[a]=!!b}b||(b=e.Object()),d||(d=e.Object());var g=b.Number||e.Number,h=b.String||e.String,i=b.Object||e.Object,j=b.Date||e.Date,k=b.SyntaxError||e.SyntaxError,l=b.TypeError||e.TypeError,m=b.Math||e.Math,n=b.JSON||e.JSON;"object"==typeof n&&n&&(d.stringify=n.stringify,d.parse=n.parse);var o,p,q,r=i.prototype,s=r.toString,t=new j(-0xc782b5b800cec);try{t=-109252==t.getUTCFullYear()&&0===t.getUTCMonth()&&1===t.getUTCDate()&&10==t.getUTCHours()&&37==t.getUTCMinutes()&&6==t.getUTCSeconds()&&708==t.getUTCMilliseconds()}catch(u){}if(!f("json")){var v="[object Function]",w="[object Date]",x="[object Number]",y="[object String]",z="[object Array]",A="[object Boolean]",B=f("bug-string-char-index");if(!t)var C=m.floor,D=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,b){return D[b]+365*(a-1970)+C((a-1969+(b=+(b>1)))/4)-C((a-1901+b)/100)+C((a-1601+b)/400)};if((o=r.hasOwnProperty)||(o=function(a){var b,c={};return(c.__proto__=null,c.__proto__={toString:1},c).toString!=s?o=function(a){var b=this.__proto__,c=a in(this.__proto__=null,this);return this.__proto__=b,c}:(b=c.constructor,o=function(a){var c=(this.constructor||b).prototype;return a in this&&!(a in c&&this[a]===c[a])}),c=null,o.call(this,a)}),p=function(a,b){var d,e,f,g=0;(d=function(){this.valueOf=0}).prototype.valueOf=0,e=new d;for(f in e)o.call(e,f)&&g++;return d=e=null,g?p=2==g?function(a,b){var c,d={},e=s.call(a)==v;for(c in a)e&&"prototype"==c||o.call(d,c)||!(d[c]=1)||!o.call(a,c)||b(c)}:function(a,b){var c,d,e=s.call(a)==v;for(c in a)e&&"prototype"==c||!o.call(a,c)||(d="constructor"===c)||b(c);(d||o.call(a,c="constructor"))&&b(c)}:(e=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],p=function(a,b){var d,f,g=s.call(a)==v,h=!g&&"function"!=typeof a.constructor&&c[typeof a.hasOwnProperty]&&a.hasOwnProperty||o;for(d in a)g&&"prototype"==d||!h.call(a,d)||b(d);for(f=e.length;d=e[--f];h.call(a,d)&&b(d));}),p(a,b)},!f("json-stringify")){var F={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},G="000000",H=function(a,b){return(G+(b||0)).slice(-a)},I="\\u00",J=function(a){for(var b='"',c=0,d=a.length,e=!B||d>10,f=e&&(B?a.split(""):a);d>c;c++){var g=a.charCodeAt(c);switch(g){case 8:case 9:case 10:case 12:case 13:case 34:case 92:b+=F[g];break;default:if(32>g){b+=I+H(2,g.toString(16));break}b+=e?f[c]:a.charAt(c)}}return b+'"'},K=function(a,b,c,d,e,f,g){var h,i,j,k,m,n,r,t,u,v,B,D,F,G,I,L;try{h=b[a]}catch(M){}if("object"==typeof h&&h)if(i=s.call(h),i!=w||o.call(h,"toJSON"))"function"==typeof h.toJSON&&(i!=x&&i!=y&&i!=z||o.call(h,"toJSON"))&&(h=h.toJSON(a));else if(h>-1/0&&1/0>h){if(E){for(m=C(h/864e5),j=C(m/365.2425)+1970-1;E(j+1,0)<=m;j++);for(k=C((m-E(j,0))/30.42);E(j,k+1)<=m;k++);m=1+m-E(j,k),n=(h%864e5+864e5)%864e5,r=C(n/36e5)%24,t=C(n/6e4)%60,u=C(n/1e3)%60,v=n%1e3}else j=h.getUTCFullYear(),k=h.getUTCMonth(),m=h.getUTCDate(),r=h.getUTCHours(),t=h.getUTCMinutes(),u=h.getUTCSeconds(),v=h.getUTCMilliseconds();h=(0>=j||j>=1e4?(0>j?"-":"+")+H(6,0>j?-j:j):H(4,j))+"-"+H(2,k+1)+"-"+H(2,m)+"T"+H(2,r)+":"+H(2,t)+":"+H(2,u)+"."+H(3,v)+"Z"}else h=null;if(c&&(h=c.call(b,a,h)),null===h)return"null";if(i=s.call(h),i==A)return""+h;if(i==x)return h>-1/0&&1/0>h?""+h:"null";if(i==y)return J(""+h);if("object"==typeof h){for(G=g.length;G--;)if(g[G]===h)throw l();if(g.push(h),B=[],I=f,f+=e,i==z){for(F=0,G=h.length;G>F;F++)D=K(F,h,c,d,e,f,g),B.push(D===q?"null":D);L=B.length?e?"[\n"+f+B.join(",\n"+f)+"\n"+I+"]":"["+B.join(",")+"]":"[]"}else p(d||h,function(a){var b=K(a,h,c,d,e,f,g);b!==q&&B.push(J(a)+":"+(e?" ":"")+b)}),L=B.length?e?"{\n"+f+B.join(",\n"+f)+"\n"+I+"}":"{"+B.join(",")+"}":"{}";return g.pop(),L}};d.stringify=function(a,b,d){var e,f,g,h;if(c[typeof b]&&b)if((h=s.call(b))==v)f=b;else if(h==z){g={};for(var i,j=0,k=b.length;k>j;i=b[j++],h=s.call(i),(h==y||h==x)&&(g[i]=1));}if(d)if((h=s.call(d))==x){if((d-=d%1)>0)for(e="",d>10&&(d=10);e.length<d;e+=" ");}else h==y&&(e=d.length<=10?d:d.slice(0,10));return K("",(i={},i[""]=a,i),f,g,e,"",[])}}if(!f("json-parse")){var L,M,N=h.fromCharCode,O={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},P=function(){throw L=M=null,k()},Q=function(){for(var a,b,c,d,e,f=M,g=f.length;g>L;)switch(e=f.charCodeAt(L)){case 9:case 10:case 13:case 32:L++;break;case 123:case 125:case 91:case 93:case 58:case 44:return a=B?f.charAt(L):f[L],L++,a;case 34:for(a="@",L++;g>L;)if(e=f.charCodeAt(L),32>e)P();else if(92==e)switch(e=f.charCodeAt(++L)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:a+=O[e],L++;break;case 117:for(b=++L,c=L+4;c>L;L++)e=f.charCodeAt(L),e>=48&&57>=e||e>=97&&102>=e||e>=65&&70>=e||P();a+=N("0x"+f.slice(b,L));break;default:P()}else{if(34==e)break;for(e=f.charCodeAt(L),b=L;e>=32&&92!=e&&34!=e;)e=f.charCodeAt(++L);a+=f.slice(b,L)}if(34==f.charCodeAt(L))return L++,a;P();default:if(b=L,45==e&&(d=!0,e=f.charCodeAt(++L)),e>=48&&57>=e){for(48==e&&(e=f.charCodeAt(L+1),e>=48&&57>=e)&&P(),d=!1;g>L&&(e=f.charCodeAt(L),e>=48&&57>=e);L++);if(46==f.charCodeAt(L)){for(c=++L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}if(e=f.charCodeAt(L),101==e||69==e){for(e=f.charCodeAt(++L),(43==e||45==e)&&L++,c=L;g>c&&(e=f.charCodeAt(c),e>=48&&57>=e);c++);c==L&&P(),L=c}return+f.slice(b,L)}if(d&&P(),"true"==f.slice(L,L+4))return L+=4,!0;if("false"==f.slice(L,L+5))return L+=5,!1;if("null"==f.slice(L,L+4))return L+=4,null;P()}return"$"},R=function(a){var b,c;if("$"==a&&P(),"string"==typeof a){if("@"==(B?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(b=[];a=Q(),"]"!=a;c||(c=!0))c&&(","==a?(a=Q(),"]"==a&&P()):P()),","==a&&P(),b.push(R(a));return b}if("{"==a){for(b={};a=Q(),"}"!=a;c||(c=!0))c&&(","==a?(a=Q(),"}"==a&&P()):P()),(","==a||"string"!=typeof a||"@"!=(B?a.charAt(0):a[0])||":"!=Q())&&P(),b[a.slice(1)]=R(Q());return b}P()}return a},S=function(a,b,c){var d=T(a,b,c);d===q?delete a[b]:a[b]=d},T=function(a,b,c){var d,e=a[b];if("object"==typeof e&&e)if(s.call(e)==z)for(d=e.length;d--;)S(e,d,c);else p(e,function(a){S(e,a,c)});return c.call(a,b,e)};d.parse=function(a,b){var c,d;return L=0,M=""+a,c=R(Q()),"$"!=Q()&&P(),L=M=null,b&&s.call(b)==v?T((d={},d[""]=c,d),"",b):c}}}return d.runInContext=a,d}var b="function"==typeof define&&define.amd,c={"function":!0,object:!0},d=c[typeof exports]&&exports&&!exports.nodeType&&exports,e=c[typeof window]&&window||this,f=d&&c[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!f||f.global!==f&&f.window!==f&&f.self!==f||(e=f),d&&!b)a(e,d);else{var g=e.JSON,h=e.JSON3,i=!1,j=a(e,e.JSON3={noConflict:function(){return i||(i=!0,e.JSON=g,e.JSON3=h,g=h=null),j}});e.JSON={parse:j.parse,stringify:j.stringify}}b&&define(function(){return j})}.call(this),function(){var a={};a.appendToHead=function(b){a.getHead().appendChild(b)},a.getHead=function(){return document.head||document.getElementsByTagName("head")[0]},a.getBody=function(){return document.body||document.getElementsByTagName("body")[0]},createjs.DomUtils=a}(),function(){var a={};a.parseXML=function(a,b){var c=null;try{if(window.DOMParser){var d=new DOMParser;c=d.parseFromString(a,b)}}catch(e){}if(!c)try{c=new ActiveXObject("Microsoft.XMLDOM"),c.async=!1,c.loadXML(a)}catch(e){c=null}return c},a.parseJSON=function(a){if(null==a)return null;try{return JSON.parse(a)}catch(b){throw b}},createjs.DataUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.src=null,this.type=null,this.id=null,this.maintainOrder=!1,this.callback=null,this.data=null,this.method=createjs.LoadItem.GET,this.values=null,this.headers=null,this.withCredentials=!1,this.mimeType=null,this.crossOrigin=null,this.loadTimeout=c.LOAD_TIMEOUT_DEFAULT}var b=a.prototype={},c=a;c.LOAD_TIMEOUT_DEFAULT=8e3,c.create=function(b){if("string"==typeof b){var d=new a;return d.src=b,d}if(b instanceof c)return b;if(b instanceof Object&&b.src)return null==b.loadTimeout&&(b.loadTimeout=c.LOAD_TIMEOUT_DEFAULT),b;throw new Error("Type not recognized.")},b.set=function(a){for(var b in a)this[b]=a[b];return this},createjs.LoadItem=c}(),function(){var a={};a.ABSOLUTE_PATT=/^(?:\w+:)?\/{2}/i,a.RELATIVE_PATT=/^[./]*?\//i,a.EXTENSION_PATT=/\/?[^/]+\.(\w{1,5})$/i,a.parseURI=function(b){var c={absolute:!1,
relative:!1};if(null==b)return c;var d=b.indexOf("?");d>-1&&(b=b.substr(0,d));var e;return a.ABSOLUTE_PATT.test(b)?c.absolute=!0:a.RELATIVE_PATT.test(b)&&(c.relative=!0),(e=b.match(a.EXTENSION_PATT))&&(c.extension=e[1].toLowerCase()),c},a.formatQueryString=function(a,b){if(null==a)throw new Error("You must specify data.");var c=[];for(var d in a)c.push(d+"="+escape(a[d]));return b&&(c=c.concat(b)),c.join("&")},a.buildPath=function(a,b){if(null==b)return a;var c=[],d=a.indexOf("?");if(-1!=d){var e=a.slice(d+1);c=c.concat(e.split("&"))}return-1!=d?a.slice(0,d)+"?"+this._formatQueryString(b,c):a+"?"+this._formatQueryString(b,c)},a.isCrossDomain=function(a){var b=document.createElement("a");b.href=a.src;var c=document.createElement("a");c.href=location.href;var d=""!=b.hostname&&(b.port!=c.port||b.protocol!=c.protocol||b.hostname!=c.hostname);return d},a.isLocal=function(a){var b=document.createElement("a");return b.href=a.src,""==b.hostname&&"file:"==b.protocol},a.isBinary=function(a){switch(a){case createjs.AbstractLoader.IMAGE:case createjs.AbstractLoader.BINARY:return!0;default:return!1}},a.isImageTag=function(a){return a instanceof HTMLImageElement},a.isAudioTag=function(a){return window.HTMLAudioElement?a instanceof HTMLAudioElement:!1},a.isVideoTag=function(a){return window.HTMLVideoElement?a instanceof HTMLVideoElement:!1},a.isText=function(a){switch(a){case createjs.AbstractLoader.TEXT:case createjs.AbstractLoader.JSON:case createjs.AbstractLoader.MANIFEST:case createjs.AbstractLoader.XML:case createjs.AbstractLoader.CSS:case createjs.AbstractLoader.SVG:case createjs.AbstractLoader.JAVASCRIPT:case createjs.AbstractLoader.SPRITESHEET:return!0;default:return!1}},a.getTypeByExtension=function(a){if(null==a)return createjs.AbstractLoader.TEXT;switch(a.toLowerCase()){case"jpeg":case"jpg":case"gif":case"png":case"webp":case"bmp":return createjs.AbstractLoader.IMAGE;case"ogg":case"mp3":case"webm":return createjs.AbstractLoader.SOUND;case"mp4":case"webm":case"ts":return createjs.AbstractLoader.VIDEO;case"json":return createjs.AbstractLoader.JSON;case"xml":return createjs.AbstractLoader.XML;case"css":return createjs.AbstractLoader.CSS;case"js":return createjs.AbstractLoader.JAVASCRIPT;case"svg":return createjs.AbstractLoader.SVG;default:return createjs.AbstractLoader.TEXT}},createjs.RequestUtils=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.EventDispatcher_constructor(),this.loaded=!1,this.canceled=!1,this.progress=0,this.type=c,this.resultFormatter=null,this._item=a?createjs.LoadItem.create(a):null,this._preferXHR=b,this._result=null,this._rawResult=null,this._loadedItems=null,this._tagSrcAttribute=null,this._tag=null}var b=createjs.extend(a,createjs.EventDispatcher),c=a;c.POST="POST",c.GET="GET",c.BINARY="binary",c.CSS="css",c.IMAGE="image",c.JAVASCRIPT="javascript",c.JSON="json",c.JSONP="jsonp",c.MANIFEST="manifest",c.SOUND="sound",c.VIDEO="video",c.SPRITESHEET="spritesheet",c.SVG="svg",c.TEXT="text",c.XML="xml",b.getItem=function(){return this._item},b.getResult=function(a){return a?this._rawResult:this._result},b.getTag=function(){return this._tag},b.setTag=function(a){this._tag=a},b.load=function(){this._createRequest(),this._request.on("complete",this,this),this._request.on("progress",this,this),this._request.on("loadStart",this,this),this._request.on("abort",this,this),this._request.on("timeout",this,this),this._request.on("error",this,this);var a=new createjs.Event("initialize");a.loader=this._request,this.dispatchEvent(a),this._request.load()},b.cancel=function(){this.canceled=!0,this.destroy()},b.destroy=function(){this._request&&(this._request.removeAllEventListeners(),this._request.destroy()),this._request=null,this._item=null,this._rawResult=null,this._result=null,this._loadItems=null,this.removeAllEventListeners()},b.getLoadedItems=function(){return this._loadedItems},b._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.TagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},b._createTag=function(){return null},b._sendLoadStart=function(){this._isCanceled()||this.dispatchEvent("loadstart")},b._sendProgress=function(a){if(!this._isCanceled()){var b=null;"number"==typeof a?(this.progress=a,b=new createjs.ProgressEvent(this.progress)):(b=a,this.progress=a.loaded/a.total,b.progress=this.progress,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0)),this.hasEventListener("progress")&&this.dispatchEvent(b)}},b._sendComplete=function(){if(!this._isCanceled()){this.loaded=!0;var a=new createjs.Event("complete");a.rawResult=this._rawResult,null!=this._result&&(a.result=this._result),this.dispatchEvent(a)}},b._sendError=function(a){!this._isCanceled()&&this.hasEventListener("error")&&(null==a&&(a=new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")),this.dispatchEvent(a))},b._isCanceled=function(){return null==window.createjs||this.canceled?!0:!1},b.resultFormatter=null,b.handleEvent=function(a){switch(a.type){case"complete":this._rawResult=a.target._response;var b=this.resultFormatter&&this.resultFormatter(this),c=this;b instanceof Function?b(function(a){c._result=a,c._sendComplete()}):(this._result=b||this._rawResult,this._sendComplete());break;case"progress":this._sendProgress(a);break;case"error":this._sendError(a);break;case"loadstart":this._sendLoadStart();break;case"abort":case"timeout":this._isCanceled()||this.dispatchEvent(a.type)}},b.buildPath=function(a,b){return createjs.RequestUtils.buildPath(a,b)},b.toString=function(){return"[PreloadJS AbstractLoader]"},createjs.AbstractLoader=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractLoader_constructor(a,b,c),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src"}var b=createjs.extend(a,createjs.AbstractLoader);b.load=function(){this._tag||(this._tag=this._createTag(this._item.src)),this._tag.preload="auto",this._tag.load(),this.AbstractLoader_load()},b._createTag=function(){},b._createRequest=function(){this._request=this._preferXHR?new createjs.XHRRequest(this._item):new createjs.MediaTagRequest(this._item,this._tag||this._createTag(),this._tagSrcAttribute)},b._formatResult=function(a){return this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.onstalled=null,this._preferXHR&&(a.getTag().src=a.getResult(!0)),a.getTag()},createjs.AbstractMediaLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(a){this._item=a},b=createjs.extend(a,createjs.EventDispatcher);b.load=function(){},b.destroy=function(){},b.cancel=function(){},createjs.AbstractRequest=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this),this._addedToDOM=!1,this._startTagVisibility=null}var b=createjs.extend(a,createjs.AbstractRequest);b.load=function(){this._tag.onload=createjs.proxy(this._handleTagComplete,this),this._tag.onreadystatechange=createjs.proxy(this._handleReadyStateChange,this),this._tag.onerror=createjs.proxy(this._handleError,this);var a=new createjs.Event("initialize");a.loader=this._tag,this.dispatchEvent(a),this._hideTag(),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag[this._tagSrcAttribute]=this._item.src,null==this._tag.parentNode&&(window.document.body.appendChild(this._tag),this._addedToDOM=!0)},b.destroy=function(){this._clean(),this._tag=null,this.AbstractRequest_destroy()},b._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},b._handleError=function(){this._clean(),this.dispatchEvent("error")},b._handleTagComplete=function(){this._rawResult=this._tag,this._result=this.resultFormatter&&this.resultFormatter(this)||this._rawResult,this._clean(),this._showTag(),this.dispatchEvent("complete")},b._handleTimeout=function(){this._clean(),this.dispatchEvent(new createjs.Event("timeout"))},b._clean=function(){this._tag.onload=null,this._tag.onreadystatechange=null,this._tag.onerror=null,this._addedToDOM&&null!=this._tag.parentNode&&this._tag.parentNode.removeChild(this._tag),clearTimeout(this._loadTimeout)},b._hideTag=function(){this._startTagVisibility=this._tag.style.visibility,this._tag.style.visibility="hidden"},b._showTag=function(){this._tag.style.visibility=this._startTagVisibility},b._handleStalled=function(){},createjs.TagRequest=createjs.promote(a,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractRequest_constructor(a),this._tag=b,this._tagSrcAttribute=c,this._loadedHandler=createjs.proxy(this._handleTagComplete,this)}var b=createjs.extend(a,createjs.TagRequest);b.load=function(){var a=createjs.proxy(this._handleStalled,this);this._stalledCallback=a;var b=createjs.proxy(this._handleProgress,this);this._handleProgress=b,this._tag.addEventListener("stalled",a),this._tag.addEventListener("progress",b),this._tag.addEventListener&&this._tag.addEventListener("canplaythrough",this._loadedHandler,!1),this.TagRequest_load()},b._handleReadyStateChange=function(){clearTimeout(this._loadTimeout);var a=this._tag;("loaded"==a.readyState||"complete"==a.readyState)&&this._handleTagComplete()},b._handleStalled=function(){},b._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},b._clean=function(){this._tag.removeEventListener&&this._tag.removeEventListener("canplaythrough",this._loadedHandler),this._tag.removeEventListener("stalled",this._stalledCallback),this._tag.removeEventListener("progress",this._progressCallback),this.TagRequest__clean()},createjs.MediaTagRequest=createjs.promote(a,"TagRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractRequest_constructor(a),this._request=null,this._loadTimeout=null,this._xhrLevel=1,this._response=null,this._rawResponse=null,this._canceled=!1,this._handleLoadStartProxy=createjs.proxy(this._handleLoadStart,this),this._handleProgressProxy=createjs.proxy(this._handleProgress,this),this._handleAbortProxy=createjs.proxy(this._handleAbort,this),this._handleErrorProxy=createjs.proxy(this._handleError,this),this._handleTimeoutProxy=createjs.proxy(this._handleTimeout,this),this._handleLoadProxy=createjs.proxy(this._handleLoad,this),this._handleReadyStateChangeProxy=createjs.proxy(this._handleReadyStateChange,this),!this._createXHR(a)}var b=createjs.extend(a,createjs.AbstractRequest);a.ACTIVEX_VERSIONS=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],b.getResult=function(a){return a&&this._rawResponse?this._rawResponse:this._response},b.cancel=function(){this.canceled=!0,this._clean(),this._request.abort()},b.load=function(){if(null==this._request)return void this._handleError();null!=this._request.addEventListener?(this._request.addEventListener("loadstart",this._handleLoadStartProxy,!1),this._request.addEventListener("progress",this._handleProgressProxy,!1),this._request.addEventListener("abort",this._handleAbortProxy,!1),this._request.addEventListener("error",this._handleErrorProxy,!1),this._request.addEventListener("timeout",this._handleTimeoutProxy,!1),this._request.addEventListener("load",this._handleLoadProxy,!1),this._request.addEventListener("readystatechange",this._handleReadyStateChangeProxy,!1)):(this._request.onloadstart=this._handleLoadStartProxy,this._request.onprogress=this._handleProgressProxy,this._request.onabort=this._handleAbortProxy,this._request.onerror=this._handleErrorProxy,this._request.ontimeout=this._handleTimeoutProxy,this._request.onload=this._handleLoadProxy,this._request.onreadystatechange=this._handleReadyStateChangeProxy),1==this._xhrLevel&&(this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout));try{this._item.values&&this._item.method!=createjs.AbstractLoader.GET?this._item.method==createjs.AbstractLoader.POST&&this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)):this._request.send()}catch(a){this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND",null,a))}},b.setResponseType=function(a){"blob"===a&&(a=window.URL?"blob":"arraybuffer",this._responseType=a),this._request.responseType=a},b.getAllResponseHeaders=function(){return this._request.getAllResponseHeaders instanceof Function?this._request.getAllResponseHeaders():null},b.getResponseHeader=function(a){return this._request.getResponseHeader instanceof Function?this._request.getResponseHeader(a):null},b._handleProgress=function(a){if(a&&!(a.loaded>0&&0==a.total)){var b=new createjs.ProgressEvent(a.loaded,a.total);this.dispatchEvent(b)}},b._handleLoadStart=function(){clearTimeout(this._loadTimeout),this.dispatchEvent("loadstart")},b._handleAbort=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED",null,a))},b._handleError=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent(a.message))},b._handleReadyStateChange=function(){4==this._request.readyState&&this._handleLoad()},b._handleLoad=function(){if(!this.loaded){this.loaded=!0;var a=this._checkError();if(a)return void this._handleError(a);if(this._response=this._getResponse(),"arraybuffer"===this._responseType)try{this._response=new Blob([this._response])}catch(b){if(window.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,"TypeError"===b.name&&window.BlobBuilder){var c=new BlobBuilder;c.append(this._response),this._response=c.getBlob()}}this._clean(),this.dispatchEvent(new createjs.Event("complete"))}},b._handleTimeout=function(a){this._clean(),this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT",null,a))},b._checkError=function(){var a=parseInt(this._request.status);switch(a){case 404:case 0:return new Error(a)}return null},b._getResponse=function(){if(null!=this._response)return this._response;if(null!=this._request.response)return this._request.response;try{if(null!=this._request.responseText)return this._request.responseText}catch(a){}try{if(null!=this._request.responseXML)return this._request.responseXML}catch(a){}return null},b._createXHR=function(a){var b=createjs.RequestUtils.isCrossDomain(a),c={},d=null;if(window.XMLHttpRequest)d=new XMLHttpRequest,b&&void 0===d.withCredentials&&window.XDomainRequest&&(d=new XDomainRequest);else{for(var e=0,f=s.ACTIVEX_VERSIONS.length;f>e;e++){var g=s.ACTIVEX_VERSIONS[e];try{d=new ActiveXObject(g);break}catch(h){}}if(null==d)return!1}null==a.mimeType&&createjs.RequestUtils.isText(a.type)&&(a.mimeType="text/plain; charset=utf-8"),a.mimeType&&d.overrideMimeType&&d.overrideMimeType(a.mimeType),this._xhrLevel="string"==typeof d.responseType?2:1;var i=null;if(i=a.method==createjs.AbstractLoader.GET?createjs.RequestUtils.buildPath(a.src,a.values):a.src,d.open(a.method||createjs.AbstractLoader.GET,i,!0),b&&d instanceof XMLHttpRequest&&1==this._xhrLevel&&(c.Origin=location.origin),a.values&&a.method==createjs.AbstractLoader.POST&&(c["Content-Type"]="application/x-www-form-urlencoded"),b||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest"),a.headers)for(var j in a.headers)c[j]=a.headers[j];for(j in c)d.setRequestHeader(j,c[j]);return d instanceof XMLHttpRequest&&void 0!==a.withCredentials&&(d.withCredentials=a.withCredentials),this._request=d,!0},b._clean=function(){clearTimeout(this._loadTimeout),null!=this._request.removeEventListener?(this._request.removeEventListener("loadstart",this._handleLoadStartProxy),this._request.removeEventListener("progress",this._handleProgressProxy),this._request.removeEventListener("abort",this._handleAbortProxy),this._request.removeEventListener("error",this._handleErrorProxy),this._request.removeEventListener("timeout",this._handleTimeoutProxy),this._request.removeEventListener("load",this._handleLoadProxy),this._request.removeEventListener("readystatechange",this._handleReadyStateChangeProxy)):(this._request.onloadstart=null,this._request.onprogress=null,this._request.onabort=null,this._request.onerror=null,this._request.ontimeout=null,this._request.onload=null,this._request.onreadystatechange=null)},b.toString=function(){return"[PreloadJS XHRRequest]"},createjs.XHRRequest=createjs.promote(a,"AbstractRequest")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.AbstractLoader_constructor(),this._plugins=[],this._typeCallbacks={},this._extensionCallbacks={},this.next=null,this.maintainScriptOrder=!0,this.stopOnError=!1,this._maxConnections=1,this._availableLoaders=[createjs.ImageLoader,createjs.JavaScriptLoader,createjs.CSSLoader,createjs.JSONLoader,createjs.JSONPLoader,createjs.SoundLoader,createjs.ManifestLoader,createjs.SpriteSheetLoader,createjs.XMLLoader,createjs.SVGLoader,createjs.BinaryLoader,createjs.VideoLoader,createjs.TextLoader],this._defaultLoaderLength=this._availableLoaders.length,this.init(a,b,c)}var b=createjs.extend(a,createjs.AbstractLoader),c=a;b.init=function(a,b,c){this.useXHR=!0,this.preferXHR=!0,this._preferXHR=!0,this.setPreferXHR(a),this._paused=!1,this._basePath=b,this._crossOrigin=c,this._loadStartWasDispatched=!1,this._currentlyLoadingScript=null,this._currentLoads=[],this._loadQueue=[],this._loadQueueBackup=[],this._loadItemsById={},this._loadItemsBySrc={},this._loadedResults={},this._loadedRawResults={},this._numItems=0,this._numItemsLoaded=0,this._scriptOrder=[],this._loadedScripts=[],this._lastProgress=0/0},c.loadTimeout=8e3,c.LOAD_TIMEOUT=0,c.BINARY=createjs.AbstractLoader.BINARY,c.CSS=createjs.AbstractLoader.CSS,c.IMAGE=createjs.AbstractLoader.IMAGE,c.JAVASCRIPT=createjs.AbstractLoader.JAVASCRIPT,c.JSON=createjs.AbstractLoader.JSON,c.JSONP=createjs.AbstractLoader.JSONP,c.MANIFEST=createjs.AbstractLoader.MANIFEST,c.SOUND=createjs.AbstractLoader.SOUND,c.VIDEO=createjs.AbstractLoader.VIDEO,c.SVG=createjs.AbstractLoader.SVG,c.TEXT=createjs.AbstractLoader.TEXT,c.XML=createjs.AbstractLoader.XML,c.POST=createjs.AbstractLoader.POST,c.GET=createjs.AbstractLoader.GET,b.registerLoader=function(a){if(!a||!a.canLoadItem)throw new Error("loader is of an incorrect type.");if(-1!=this._availableLoaders.indexOf(a))throw new Error("loader already exists.");this._availableLoaders.unshift(a)},b.unregisterLoader=function(a){var b=this._availableLoaders.indexOf(a);-1!=b&&b<this._defaultLoaderLength-1&&this._availableLoaders.splice(b,1)},b.setUseXHR=function(a){return this.setPreferXHR(a)},b.setPreferXHR=function(a){return this.preferXHR=0!=a&&null!=window.XMLHttpRequest,this.preferXHR},b.removeAll=function(){this.remove()},b.remove=function(a){var b=null;if(!a||a instanceof Array){if(a)b=a;else if(arguments.length>0)return}else b=[a];var c=!1;if(b){for(;b.length;){var d=b.pop(),e=this.getResult(d);for(f=this._loadQueue.length-1;f>=0;f--)if(g=this._loadQueue[f].getItem(),g.id==d||g.src==d){this._loadQueue.splice(f,1)[0].cancel();break}for(f=this._loadQueueBackup.length-1;f>=0;f--)if(g=this._loadQueueBackup[f].getItem(),g.id==d||g.src==d){this._loadQueueBackup.splice(f,1)[0].cancel();break}if(e)this._disposeItem(this.getItem(d));else for(var f=this._currentLoads.length-1;f>=0;f--){var g=this._currentLoads[f].getItem();if(g.id==d||g.src==d){this._currentLoads.splice(f,1)[0].cancel(),c=!0;break}}}c&&this._loadNext()}else{this.close();for(var h in this._loadItemsById)this._disposeItem(this._loadItemsById[h]);this.init(this.preferXHR,this._basePath)}},b.reset=function(){this.close();for(var a in this._loadItemsById)this._disposeItem(this._loadItemsById[a]);for(var b=[],c=0,d=this._loadQueueBackup.length;d>c;c++)b.push(this._loadQueueBackup[c].getItem());this.loadManifest(b,!1)},b.installPlugin=function(a){if(null!=a&&null!=a.getPreloadHandlers){this._plugins.push(a);var b=a.getPreloadHandlers();if(b.scope=a,null!=b.types)for(var c=0,d=b.types.length;d>c;c++)this._typeCallbacks[b.types[c]]=b;if(null!=b.extensions)for(c=0,d=b.extensions.length;d>c;c++)this._extensionCallbacks[b.extensions[c]]=b}},b.setMaxConnections=function(a){this._maxConnections=a,!this._paused&&this._loadQueue.length>0&&this._loadNext()},b.loadFile=function(a,b,c){if(null==a){var d=new createjs.ErrorEvent("PRELOAD_NO_FILE");return void this._sendError(d)}this._addItem(a,null,c),this.setPaused(b!==!1?!1:!0)},b.loadManifest=function(a,b,d){var e=null,f=null;if(a instanceof Array){if(0==a.length){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");return void this._sendError(g)}e=a}else if("string"==typeof a)e=[{src:a,type:c.MANIFEST}];else{if("object"!=typeof a){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");return void this._sendError(g)}if(void 0!==a.src){if(null==a.type)a.type=c.MANIFEST;else if(a.type!=c.MANIFEST){var g=new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");this._sendError(g)}e=[a]}else void 0!==a.manifest&&(e=a.manifest,f=a.path)}for(var h=0,i=e.length;i>h;h++)this._addItem(e[h],f,d);this.setPaused(b!==!1?!1:!0)},b.load=function(){this.setPaused(!1)},b.getItem=function(a){return this._loadItemsById[a]||this._loadItemsBySrc[a]},b.getResult=function(a,b){var c=this._loadItemsById[a]||this._loadItemsBySrc[a];if(null==c)return null;var d=c.id;return b&&this._loadedRawResults[d]?this._loadedRawResults[d]:this._loadedResults[d]},b.getItems=function(a){var b=[];for(var c in this._loadItemsById){var d=this._loadItemsById[c],e=this.getResult(c);(a!==!0||null!=e)&&b.push({item:d,result:e,rawResult:this.getResult(c,!0)})}return b},b.setPaused=function(a){this._paused=a,this._paused||this._loadNext()},b.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0,this._loadedScripts.length=0,this.loadStartWasDispatched=!1,this._itemCount=0,this._lastProgress=0/0},b._addItem=function(a,b,c){var d=this._createLoadItem(a,b,c);if(null!=d){var e=this._createLoader(d);null!=e&&("plugins"in e&&(e.plugins=this._plugins),d._loader=e,this._loadQueue.push(e),this._loadQueueBackup.push(e),this._numItems++,this._updateProgress(),(this.maintainScriptOrder&&d.type==createjs.LoadQueue.JAVASCRIPT||d.maintainOrder===!0)&&(this._scriptOrder.push(d),this._loadedScripts.push(null)))}},b._createLoadItem=function(a,b,c){var d=createjs.LoadItem.create(a);if(null==d)return null;var e="",f=c||this._basePath;if(d.src instanceof Object){if(!d.type)return null;if(b){e=b;var g=createjs.RequestUtils.parseURI(b);null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f)}else{var h=createjs.RequestUtils.parseURI(d.src);h.extension&&(d.ext=h.extension),null==d.type&&(d.type=createjs.RequestUtils.getTypeByExtension(d.ext));var i=d.src;if(!h.absolute&&!h.relative)if(b){e=b;var g=createjs.RequestUtils.parseURI(b);i=b+i,null==f||g.absolute||g.relative||(e=f+e)}else null!=f&&(e=f);d.src=e+d.src}d.path=e,(void 0===d.id||null===d.id||""===d.id)&&(d.id=i);var j=this._typeCallbacks[d.type]||this._extensionCallbacks[d.ext];if(j){var k=j.callback.call(j.scope,d,this);if(k===!1)return null;k===!0||null!=k&&(d._loader=k),h=createjs.RequestUtils.parseURI(d.src),null!=h.extension&&(d.ext=h.extension)}return this._loadItemsById[d.id]=d,this._loadItemsBySrc[d.src]=d,null==d.crossOrigin&&(d.crossOrigin=this._crossOrigin),d},b._createLoader=function(a){if(null!=a._loader)return a._loader;for(var b=this.preferXHR,c=0;c<this._availableLoaders.length;c++){var d=this._availableLoaders[c];if(d&&d.canLoadItem(a))return new d(a,b)}return null},b._loadNext=function(){if(!this._paused){this._loadStartWasDispatched||(this._sendLoadStart(),this._loadStartWasDispatched=!0),this._numItems==this._numItemsLoaded?(this.loaded=!0,this._sendComplete(),this.next&&this.next.load&&this.next.load()):this.loaded=!1;for(var a=0;a<this._loadQueue.length&&!(this._currentLoads.length>=this._maxConnections);a++){var b=this._loadQueue[a];this._canStartLoad(b)&&(this._loadQueue.splice(a,1),a--,this._loadItem(b))}}},b._loadItem=function(a){a.on("fileload",this._handleFileLoad,this),a.on("progress",this._handleProgress,this),a.on("complete",this._handleFileComplete,this),a.on("error",this._handleError,this),a.on("fileerror",this._handleFileError,this),this._currentLoads.push(a),this._sendFileStart(a.getItem()),a.load()},b._handleFileLoad=function(a){a.target=null,this.dispatchEvent(a)},b._handleFileError=function(a){var b=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,a.item);this._sendError(b)},b._handleError=function(a){var b=a.target;this._numItemsLoaded++,this._finishOrderedItem(b,!0),this._updateProgress();var c=new createjs.ErrorEvent("FILE_LOAD_ERROR",null,b.getItem());this._sendError(c),this.stopOnError?this.setPaused(!0):(this._removeLoadItem(b),this._cleanLoadItem(b),this._loadNext())},b._handleFileComplete=function(a){var b=a.target,c=b.getItem(),d=b.getResult();this._loadedResults[c.id]=d;var e=b.getResult(!0);null!=e&&e!==d&&(this._loadedRawResults[c.id]=e),this._saveLoadedItems(b),this._removeLoadItem(b),this._finishOrderedItem(b)||this._processFinishedLoad(c,b),this._cleanLoadItem(b)},b._saveLoadedItems=function(a){var b=a.getLoadedItems();if(null!==b)for(var c=0;c<b.length;c++){var d=b[c].item;this._loadItemsBySrc[d.src]=d,this._loadItemsById[d.id]=d,this._loadedResults[d.id]=b[c].result,this._loadedRawResults[d.id]=b[c].rawResult}},b._finishOrderedItem=function(a,b){var c=a.getItem();if(this.maintainScriptOrder&&c.type==createjs.LoadQueue.JAVASCRIPT||c.maintainOrder){a instanceof createjs.JavaScriptLoader&&(this._currentlyLoadingScript=!1);var d=createjs.indexOf(this._scriptOrder,c);return-1==d?!1:(this._loadedScripts[d]=b===!0?!0:c,this._checkScriptLoadOrder(),!0)}return!1},b._checkScriptLoadOrder=function(){for(var a=this._loadedScripts.length,b=0;a>b;b++){var c=this._loadedScripts[b];if(null===c)break;if(c!==!0){var d=this._loadedResults[c.id];c.type==createjs.LoadQueue.JAVASCRIPT&&createjs.DomUtils.appendToHead(d);var e=c._loader;this._processFinishedLoad(c,e),this._loadedScripts[b]=!0}}},b._processFinishedLoad=function(a,b){this._numItemsLoaded++,this.maintainScriptOrder||a.type!=createjs.LoadQueue.JAVASCRIPT||createjs.DomUtils.appendToHead(a.result),this._updateProgress(),this._sendFileComplete(a,b),this._loadNext()},b._canStartLoad=function(a){if(!this.maintainScriptOrder||a.preferXHR)return!0;var b=a.getItem();if(b.type!=createjs.LoadQueue.JAVASCRIPT)return!0;if(this._currentlyLoadingScript)return!1;for(var c=this._scriptOrder.indexOf(b),d=0;c>d;){var e=this._loadedScripts[d];if(null==e)return!1;d++}return this._currentlyLoadingScript=!0,!0},b._removeLoadItem=function(a){for(var b=this._currentLoads.length,c=0;b>c;c++)if(this._currentLoads[c]==a){this._currentLoads.splice(c,1);break}},b._cleanLoadItem=function(a){var b=a.getItem();b&&delete b._loader},b._handleProgress=function(a){var b=a.target;this._sendFileProgress(b.getItem(),b.progress),this._updateProgress()},b._updateProgress=function(){var a=this._numItemsLoaded/this._numItems,b=this._numItems-this._numItemsLoaded;if(b>0){for(var c=0,d=0,e=this._currentLoads.length;e>d;d++)c+=this._currentLoads[d].progress;a+=c/b*(b/this._numItems)}this._lastProgress!=a&&(this._sendProgress(a),this._lastProgress=a)},b._disposeItem=function(a){delete this._loadedResults[a.id],delete this._loadedRawResults[a.id],delete this._loadItemsById[a.id],delete this._loadItemsBySrc[a.src]},b._sendFileProgress=function(a,b){if(!this._isCanceled()&&!this._paused&&this.hasEventListener("fileprogress")){var c=new createjs.Event("fileprogress");c.progress=b,c.loaded=b,c.total=1,c.item=a,this.dispatchEvent(c)}},b._sendFileComplete=function(a,b){if(!this._isCanceled()&&!this._paused){var c=new createjs.Event("fileload");c.loader=b,c.item=a,c.result=this._loadedResults[a.id],c.rawResult=this._loadedRawResults[a.id],a.completeHandler&&a.completeHandler(c),this.hasEventListener("fileload")&&this.dispatchEvent(c)}},b._sendFileStart=function(a){var b=new createjs.Event("filestart");b.item=a,this.hasEventListener("filestart")&&this.dispatchEvent(b)},b.toString=function(){return"[PreloadJS LoadQueue]"},createjs.LoadQueue=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.TEXT)}var b=(createjs.extend(a,createjs.AbstractLoader),a);b.canLoadItem=function(a){return a.type==createjs.AbstractLoader.TEXT},createjs.TextLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.BINARY),this.on("initialize",this._updateXHR,this)}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.BINARY},b._updateXHR=function(a){a.loader.setResponseType("arraybuffer")},createjs.BinaryLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.CSS),this.resultFormatter=this._formatResult,this._tagSrcAttribute="href",this._tag=document.createElement(b?"style":"link"),this._tag.rel="stylesheet",this._tag.type="text/css"}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.CSS},b._formatResult=function(a){if(this._preferXHR){var b=a.getTag();if(b.styleSheet)b.styleSheet.cssText=a.getResult(!0);else{var c=document.createTextNode(a.getResult(!0));b.appendChild(c)}}else b=this._tag;return createjs.DomUtils.appendToHead(b),b},createjs.CSSLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.IMAGE),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",createjs.RequestUtils.isImageTag(a)?this._tag=a:createjs.RequestUtils.isImageTag(a.src)?this._tag=a.src:createjs.RequestUtils.isImageTag(a.tag)&&(this._tag=a.tag),null!=this._tag?this._preferXHR=!1:this._tag=document.createElement("img"),this.on("initialize",this._updateXHR,this)}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.IMAGE},b.load=function(){if(""!=this._tag.src&&this._tag.complete)return void this._sendComplete();var a=this._item.crossOrigin;1==a&&(a="Anonymous"),null==a||createjs.RequestUtils.isLocal(this._item.src)||(this._tag.crossOrigin=a),this.AbstractLoader_load()},b._updateXHR=function(a){a.loader.mimeType="text/plain; charset=x-user-defined-binary",a.loader.setResponseType&&a.loader.setResponseType("blob")},b._formatResult=function(a){var b=this;return function(c){var d=b._tag,e=window.URL||window.webkitURL;if(b._preferXHR)if(e){var f=e.createObjectURL(a.getResult(!0));d.src=f,d.onload=function(){e.revokeObjectURL(b.src)}}else d.src=a.getItem().src;else;d.complete?c(d):d.onload=function(){c(this)}}},createjs.ImageLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.JAVASCRIPT),this.resultFormatter=this._formatResult,this._tagSrcAttribute="src",this.setTag(document.createElement("script"))}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JAVASCRIPT},b._formatResult=function(a){var b=a.getTag();return this._preferXHR&&(b.text=a.getResult(!0)),b},createjs.JavaScriptLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.JSON),this.resultFormatter=this._formatResult}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSON&&!a._loadAsJSONP;

},b._formatResult=function(a){var b=null;try{b=createjs.DataUtils.parseJSON(a.getResult(!0))}catch(c){var d=new createjs.ErrorEvent("JSON_FORMAT",null,c);return this._sendError(d),c}return b},createjs.JSONLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!1,createjs.AbstractLoader.JSONP),this.setTag(document.createElement("script")),this.getTag().type="text/javascript"}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.JSONP||a._loadAsJSONP},b.cancel=function(){this.AbstractLoader_cancel(),this._dispose()},b.load=function(){if(null==this._item.callback)throw new Error("callback is required for loading JSONP requests.");if(null!=window[this._item.callback])throw new Error("JSONP callback '"+this._item.callback+"' already exists on window. You need to specify a different callback or re-name the current one.");window[this._item.callback]=createjs.proxy(this._handleLoad,this),window.document.body.appendChild(this._tag),this._loadTimeout=setTimeout(createjs.proxy(this._handleTimeout,this),this._item.loadTimeout),this._tag.src=this._item.src},b._handleLoad=function(a){this._result=this._rawResult=a,this._sendComplete(),this._dispose()},b._handleTimeout=function(){this._dispose(),this.dispatchEvent(new createjs.ErrorEvent("timeout"))},b._dispose=function(){window.document.body.removeChild(this._tag),delete window[this._item.callback],clearTimeout(this._loadTimeout)},createjs.JSONPLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,null,createjs.AbstractLoader.MANIFEST),this.plugins=null,this._manifestQueue=null}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.MANIFEST_PROGRESS=.25,c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.MANIFEST},b.load=function(){this.AbstractLoader_load()},b._createRequest=function(){var a=this._item.callback;this._request=null!=a?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},b.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(c.MANIFEST_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=c.MANIFEST_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},b.destroy=function(){this.AbstractLoader_destroy(),this._manifestQueue.close()},b._loadManifest=function(a){if(a&&a.manifest){var b=this._manifestQueue=new createjs.LoadQueue;b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("complete",this._handleManifestComplete,this,!0),b.on("error",this._handleManifestError,this,!0);for(var c=0,d=this.plugins.length;d>c;c++)b.installPlugin(this.plugins[c]);b.loadManifest(a)}else this._sendComplete()},b._handleManifestFileLoad=function(a){a.target=null,this.dispatchEvent(a)},b._handleManifestComplete=function(){this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},b._handleManifestProgress=function(a){this.progress=a.progress*(1-c.MANIFEST_PROGRESS)+c.MANIFEST_PROGRESS,this._sendProgress(this.progress)},b._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.ManifestLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.SOUND),createjs.RequestUtils.isAudioTag(a)?this._tag=a:createjs.RequestUtils.isAudioTag(a.src)?this._tag=a:createjs.RequestUtils.isAudioTag(a.tag)&&(this._tag=createjs.RequestUtils.isAudioTag(a)?a:a.src),null!=this._tag&&(this._preferXHR=!1)}var b=createjs.extend(a,createjs.AbstractMediaLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SOUND},b._createTag=function(a){var b=document.createElement("audio");return b.autoplay=!1,b.preload="none",b.src=a,b},createjs.SoundLoader=createjs.promote(a,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractMediaLoader_constructor(a,b,createjs.AbstractLoader.VIDEO),createjs.RequestUtils.isVideoTag(a)||createjs.RequestUtils.isVideoTag(a.src)?(this.setTag(createjs.RequestUtils.isVideoTag(a)?a:a.src),this._preferXHR=!1):this.setTag(this._createTag())}var b=createjs.extend(a,createjs.AbstractMediaLoader),c=a;b._createTag=function(){return document.createElement("video")},c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.VIDEO},createjs.VideoLoader=createjs.promote(a,"AbstractMediaLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,null,createjs.AbstractLoader.SPRITESHEET),this._manifestQueue=null}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.SPRITESHEET_PROGRESS=.25,c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SPRITESHEET},b.destroy=function(){this.AbstractLoader_destroy,this._manifestQueue.close()},b._createRequest=function(){var a=this._item.callback;this._request=null!=a&&a instanceof Function?new createjs.JSONPLoader(this._item):new createjs.JSONLoader(this._item)},b.handleEvent=function(a){switch(a.type){case"complete":return this._rawResult=a.target.getResult(!0),this._result=a.target.getResult(),this._sendProgress(c.SPRITESHEET_PROGRESS),void this._loadManifest(this._result);case"progress":return a.loaded*=c.SPRITESHEET_PROGRESS,this.progress=a.loaded/a.total,(isNaN(this.progress)||this.progress==1/0)&&(this.progress=0),void this._sendProgress(a)}this.AbstractLoader_handleEvent(a)},b._loadManifest=function(a){if(a&&a.images){var b=this._manifestQueue=new createjs.LoadQueue;b.on("complete",this._handleManifestComplete,this,!0),b.on("fileload",this._handleManifestFileLoad,this),b.on("progress",this._handleManifestProgress,this),b.on("error",this._handleManifestError,this,!0),b.loadManifest(a.images)}},b._handleManifestFileLoad=function(a){var b=a.result;if(null!=b){var c=this.getResult().images,d=c.indexOf(a.item.src);c[d]=b}},b._handleManifestComplete=function(){this._result=new createjs.SpriteSheet(this._result),this._loadedItems=this._manifestQueue.getItems(!0),this._sendComplete()},b._handleManifestProgress=function(a){this.progress=a.progress*(1-c.SPRITESHEET_PROGRESS)+c.SPRITESHEET_PROGRESS,this._sendProgress(this.progress)},b._handleManifestError=function(a){var b=new createjs.Event("fileerror");b.item=a.data,this.dispatchEvent(b)},createjs.SpriteSheetLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b){this.AbstractLoader_constructor(a,b,createjs.AbstractLoader.SVG),this.resultFormatter=this._formatResult,this._tagSrcAttribute="data",b?this.setTag(document.createElement("svg")):(this.setTag(document.createElement("object")),this.getTag().type="image/svg+xml")}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.SVG},b._formatResult=function(a){var b=createjs.DataUtils.parseXML(a.getResult(!0),"text/xml"),c=a.getTag();return!this._preferXHR&&document.body.contains(c)&&document.body.removeChild(c),null!=b.documentElement?(c.appendChild(b.documentElement),c.style.visibility="visible",c):b},createjs.SVGLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.XML),this.resultFormatter=this._formatResult}var b=createjs.extend(a,createjs.AbstractLoader),c=a;c.canLoadItem=function(a){return a.type==createjs.AbstractLoader.XML},b._formatResult=function(a){return createjs.DataUtils.parseXML(a.getResult(!0),"text/xml")},createjs.XMLLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){var a=createjs.SoundJS=createjs.SoundJS||{};a.version="0.6.1",a.buildDate="Thu, 21 May 2015 16:17:37 GMT"}(),this.createjs=this.createjs||{},createjs.indexOf=function(a,b){"use strict";for(var c=0,d=a.length;d>c;c++)if(b===a[c])return c;return-1},this.createjs=this.createjs||{},function(){"use strict";createjs.proxy=function(a,b){var c=Array.prototype.slice.call(arguments,2);return function(){return a.apply(b,Array.prototype.slice.call(arguments,0).concat(c))}}}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(){this.interrupt=null,this.delay=null,this.offset=null,this.loop=null,this.volume=null,this.pan=null,this.startTime=null,this.duration=null},b=a.prototype={},c=a;c.create=function(a){if(a instanceof c||a instanceof Object){var b=new createjs.PlayPropsConfig;return b.set(a),b}throw new Error("Type not recognized.")},b.set=function(a){for(var b in a)this[b]=a[b];return this},b.toString=function(){return"[PlayPropsConfig]"},createjs.PlayPropsConfig=c}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Sound cannot be instantiated"}function b(a,b){this.init(a,b)}var c=a;c.INTERRUPT_ANY="any",c.INTERRUPT_EARLY="early",c.INTERRUPT_LATE="late",c.INTERRUPT_NONE="none",c.PLAY_INITED="playInited",c.PLAY_SUCCEEDED="playSucceeded",c.PLAY_INTERRUPTED="playInterrupted",c.PLAY_FINISHED="playFinished",c.PLAY_FAILED="playFailed",c.SUPPORTED_EXTENSIONS=["mp3","ogg","opus","mpeg","wav","m4a","mp4","aiff","wma","mid"],c.EXTENSION_MAP={m4a:"mp4"},c.FILE_PATTERN=/^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/,c.defaultInterruptBehavior=c.INTERRUPT_NONE,c.alternateExtensions=[],c.activePlugin=null,c._masterVolume=1,Object.defineProperty(c,"volume",{get:function(){return this._masterVolume},set:function(a){if(null==Number(a))return!1;if(a=Math.max(0,Math.min(1,a)),c._masterVolume=a,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(a))for(var b=this._instances,d=0,e=b.length;e>d;d++)b[d].setMasterVolume(a)}}),c._masterMute=!1,Object.defineProperty(c,"muted",{get:function(){return this._masterMute},set:function(a){if(null==a)return!1;if(this._masterMute=a,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(a))for(var b=this._instances,c=0,d=b.length;d>c;c++)b[c].setMasterMute(a);return!0}}),Object.defineProperty(c,"capabilities",{get:function(){return null==c.activePlugin?null:c.activePlugin._capabilities},set:function(){return!1}}),c._pluginsRegistered=!1,c._lastID=0,c._instances=[],c._idHash={},c._preloadHash={},c._defaultPlayPropsHash={},c.addEventListener=null,c.removeEventListener=null,c.removeAllEventListeners=null,c.dispatchEvent=null,c.hasEventListener=null,c._listeners=null,createjs.EventDispatcher.initialize(c),c.getPreloadHandlers=function(){return{callback:createjs.proxy(c.initLoad,c),types:["sound"],extensions:c.SUPPORTED_EXTENSIONS}},c._handleLoadComplete=function(a){var b=a.target.getItem().src;if(c._preloadHash[b])for(var d=0,e=c._preloadHash[b].length;e>d;d++){var f=c._preloadHash[b][d];if(c._preloadHash[b][d]=!0,c.hasEventListener("fileload")){var a=new createjs.Event("fileload");a.src=f.src,a.id=f.id,a.data=f.data,a.sprite=f.sprite,c.dispatchEvent(a)}}},c._handleLoadError=function(a){var b=a.target.getItem().src;if(c._preloadHash[b])for(var d=0,e=c._preloadHash[b].length;e>d;d++){var f=c._preloadHash[b][d];if(c._preloadHash[b][d]=!1,c.hasEventListener("fileerror")){var a=new createjs.Event("fileerror");a.src=f.src,a.id=f.id,a.data=f.data,a.sprite=f.sprite,c.dispatchEvent(a)}}},c._registerPlugin=function(a){return a.isSupported()?(c.activePlugin=new a,!0):!1},c.registerPlugins=function(a){c._pluginsRegistered=!0;for(var b=0,d=a.length;d>b;b++)if(c._registerPlugin(a[b]))return!0;return!1},c.initializeDefaultPlugins=function(){return null!=c.activePlugin?!0:c._pluginsRegistered?!1:c.registerPlugins([createjs.WebAudioPlugin,createjs.HTMLAudioPlugin])?!0:!1},c.isReady=function(){return null!=c.activePlugin},c.getCapabilities=function(){return null==c.activePlugin?null:c.activePlugin._capabilities},c.getCapability=function(a){return null==c.activePlugin?null:c.activePlugin._capabilities[a]},c.initLoad=function(a){return c._registerSound(a)},c._registerSound=function(a){if(!c.initializeDefaultPlugins())return!1;var d;if(a.src instanceof Object?(d=c._parseSrc(a.src),d.src=a.path+d.src):d=c._parsePath(a.src),null==d)return!1;a.src=d.src,a.type="sound";var e=a.data,f=null;if(null!=e&&(isNaN(e.channels)?isNaN(e)||(f=parseInt(e)):f=parseInt(e.channels),e.audioSprite))for(var g,h=e.audioSprite.length;h--;)g=e.audioSprite[h],c._idHash[g.id]={src:a.src,startTime:parseInt(g.startTime),duration:parseInt(g.duration)},g.defaultPlayProps&&(c._defaultPlayPropsHash[g.id]=createjs.PlayPropsConfig.create(g.defaultPlayProps));null!=a.id&&(c._idHash[a.id]={src:a.src});var i=c.activePlugin.register(a);return b.create(a.src,f),null!=e&&isNaN(e)?a.data.channels=f||b.maxPerChannel():a.data=f||b.maxPerChannel(),i.type&&(a.type=i.type),a.defaultPlayProps&&(c._defaultPlayPropsHash[a.src]=createjs.PlayPropsConfig.create(a.defaultPlayProps)),i},c.registerSound=function(a,b,d,e,f){var g={src:a,id:b,data:d,defaultPlayProps:f};a instanceof Object&&a.src&&(e=b,g=a),g=createjs.LoadItem.create(g),g.path=e,null==e||g.src instanceof Object||(g.src=e+a);var h=c._registerSound(g);if(!h)return!1;if(c._preloadHash[g.src]||(c._preloadHash[g.src]=[]),c._preloadHash[g.src].push(g),1==c._preloadHash[g.src].length)h.on("complete",createjs.proxy(this._handleLoadComplete,this)),h.on("error",createjs.proxy(this._handleLoadError,this)),c.activePlugin.preload(h);else if(1==c._preloadHash[g.src][0])return!0;return g},c.registerSounds=function(a,b){var c=[];a.path&&(b?b+=a.path:b=a.path,a=a.manifest);for(var d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.registerSound(a[d].src,a[d].id,a[d].data,b,a[d].defaultPlayProps);return c},c.removeSound=function(a,d){if(null==c.activePlugin)return!1;a instanceof Object&&a.src&&(a=a.src);var e;if(a instanceof Object?e=c._parseSrc(a):(a=c._getSrcById(a).src,e=c._parsePath(a)),null==e)return!1;a=e.src,null!=d&&(a=d+a);for(var f in c._idHash)c._idHash[f].src==a&&delete c._idHash[f];return b.removeSrc(a),delete c._preloadHash[a],c.activePlugin.removeSound(a),!0},c.removeSounds=function(a,b){var c=[];a.path&&(b?b+=a.path:b=a.path,a=a.manifest);for(var d=0,e=a.length;e>d;d++)c[d]=createjs.Sound.removeSound(a[d].src,b);return c},c.removeAllSounds=function(){c._idHash={},c._preloadHash={},b.removeAll(),c.activePlugin&&c.activePlugin.removeAllSounds()},c.loadComplete=function(a){if(!c.isReady())return!1;var b=c._parsePath(a);return a=b?c._getSrcById(b.src).src:c._getSrcById(a).src,void 0==c._preloadHash[a]?!1:1==c._preloadHash[a][0]},c._parsePath=function(a){"string"!=typeof a&&(a=a.toString());var b=a.match(c.FILE_PATTERN);if(null==b)return!1;for(var d=b[4],e=b[5],f=c.capabilities,g=0;!f[e];)if(e=c.alternateExtensions[g++],g>c.alternateExtensions.length)return null;a=a.replace("."+b[5],"."+e);var h={name:d,src:a,extension:e};return h},c._parseSrc=function(a){var b={name:void 0,src:void 0,extension:void 0},d=c.capabilities;for(var e in a)if(a.hasOwnProperty(e)&&d[e]){b.src=a[e],b.extension=e;break}if(!b.src)return!1;var f=b.src.lastIndexOf("/");return b.name=-1!=f?b.src.slice(f+1):b.src,b},c.play=function(a,b,d,e,f,g,h,i,j){var k;k=createjs.PlayPropsConfig.create(b instanceof Object||b instanceof createjs.PlayPropsConfig?b:{interrupt:b,delay:d,offset:e,loop:f,volume:g,pan:h,startTime:i,duration:j});var l=c.createInstance(a,k.startTime,k.duration),m=c._playInstance(l,k);return m||l._playFailed(),l},c.createInstance=function(a,d,e){if(!c.initializeDefaultPlugins())return new createjs.DefaultSoundInstance(a,d,e);var f=c._defaultPlayPropsHash[a];a=c._getSrcById(a);var g=c._parsePath(a.src),h=null;return null!=g&&null!=g.src?(b.create(g.src),null==d&&(d=a.startTime),h=c.activePlugin.create(g.src,d,e||a.duration),f=f||c._defaultPlayPropsHash[g.src],f&&h.applyPlayProps(f)):h=new createjs.DefaultSoundInstance(a,d,e),h.uniqueId=c._lastID++,h},c.stop=function(){for(var a=this._instances,b=a.length;b--;)a[b].stop()},c.setVolume=function(a){if(null==Number(a))return!1;if(a=Math.max(0,Math.min(1,a)),c._masterVolume=a,!this.activePlugin||!this.activePlugin.setVolume||!this.activePlugin.setVolume(a))for(var b=this._instances,d=0,e=b.length;e>d;d++)b[d].setMasterVolume(a)},c.getVolume=function(){return this._masterVolume},c.setMute=function(a){if(null==a)return!1;if(this._masterMute=a,!this.activePlugin||!this.activePlugin.setMute||!this.activePlugin.setMute(a))for(var b=this._instances,c=0,d=b.length;d>c;c++)b[c].setMasterMute(a);return!0},c.getMute=function(){return this._masterMute},c.setDefaultPlayProps=function(a,b){a=c._getSrcById(a),c._defaultPlayPropsHash[c._parsePath(a.src).src]=createjs.PlayPropsConfig.create(b)},c.getDefaultPlayProps=function(a){return a=c._getSrcById(a),c._defaultPlayPropsHash[c._parsePath(a.src).src]},c._playInstance=function(a,b){var d=c._defaultPlayPropsHash[a.src]||{};if(null==b.interrupt&&(b.interrupt=d.interrupt||c.defaultInterruptBehavior),null==b.delay&&(b.delay=d.delay||0),null==b.offset&&(b.offset=a.getPosition()),null==b.loop&&(b.loop=a.loop),null==b.volume&&(b.volume=a.volume),null==b.pan&&(b.pan=a.pan),0==b.delay){var e=c._beginPlaying(a,b);if(!e)return!1}else{var f=setTimeout(function(){c._beginPlaying(a,b)},b.delay);a.delayTimeoutId=f}return this._instances.push(a),!0},c._beginPlaying=function(a,c){if(!b.add(a,c.interrupt))return!1;var d=a._beginPlaying(c);if(!d){var e=createjs.indexOf(this._instances,a);return e>-1&&this._instances.splice(e,1),!1}return!0},c._getSrcById=function(a){return c._idHash[a]||{src:a}},c._playFinished=function(a){b.remove(a);var c=createjs.indexOf(this._instances,a);c>-1&&this._instances.splice(c,1)},createjs.Sound=a,b.channels={},b.create=function(a,c){var d=b.get(a);return null==d?(b.channels[a]=new b(a,c),!0):!1},b.removeSrc=function(a){var c=b.get(a);return null==c?!1:(c._removeAll(),delete b.channels[a],!0)},b.removeAll=function(){for(var a in b.channels)b.channels[a]._removeAll();b.channels={}},b.add=function(a,c){var d=b.get(a.src);return null==d?!1:d._add(a,c)},b.remove=function(a){var c=b.get(a.src);return null==c?!1:(c._remove(a),!0)},b.maxPerChannel=function(){return d.maxDefault},b.get=function(a){return b.channels[a]};var d=b.prototype;d.constructor=b,d.src=null,d.max=null,d.maxDefault=100,d.length=0,d.init=function(a,b){this.src=a,this.max=b||this.maxDefault,-1==this.max&&(this.max=this.maxDefault),this._instances=[]},d._get=function(a){return this._instances[a]},d._add=function(a,b){return this._getSlot(b,a)?(this._instances.push(a),this.length++,!0):!1},d._remove=function(a){var b=createjs.indexOf(this._instances,a);return-1==b?!1:(this._instances.splice(b,1),this.length--,!0)},d._removeAll=function(){for(var a=this.length-1;a>=0;a--)this._instances[a].stop()},d._getSlot=function(b){var c,d;if(b!=a.INTERRUPT_NONE&&(d=this._get(0),null==d))return!0;for(var e=0,f=this.max;f>e;e++){if(c=this._get(e),null==c)return!0;if(c.playState==a.PLAY_FINISHED||c.playState==a.PLAY_INTERRUPTED||c.playState==a.PLAY_FAILED){d=c;break}b!=a.INTERRUPT_NONE&&(b==a.INTERRUPT_EARLY&&c.getPosition()<d.getPosition()||b==a.INTERRUPT_LATE&&c.getPosition()>d.getPosition())&&(d=c)}return null!=d?(d._interrupt(),this._remove(d),!0):!1},d.toString=function(){return"[Sound SoundChannel]"}}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(a,b,c,d){this.EventDispatcher_constructor(),this.src=a,this.uniqueId=-1,this.playState=null,this.delayTimeoutId=null,this._volume=1,Object.defineProperty(this,"volume",{get:this.getVolume,set:this.setVolume}),this._pan=0,Object.defineProperty(this,"pan",{get:this.getPan,set:this.setPan}),this._startTime=Math.max(0,b||0),Object.defineProperty(this,"startTime",{get:this.getStartTime,set:this.setStartTime}),this._duration=Math.max(0,c||0),Object.defineProperty(this,"duration",{get:this.getDuration,set:this.setDuration}),this._playbackResource=null,Object.defineProperty(this,"playbackResource",{get:this.getPlaybackResource,set:this.setPlaybackResource}),d!==!1&&d!==!0&&this.setPlaybackResource(d),this._position=0,Object.defineProperty(this,"position",{get:this.getPosition,set:this.setPosition}),this._loop=0,Object.defineProperty(this,"loop",{get:this.getLoop,set:this.setLoop}),this._muted=!1,Object.defineProperty(this,"muted",{get:this.getMuted,set:this.setMuted}),this._paused=!1,Object.defineProperty(this,"paused",{get:this.getPaused,set:this.setPaused})},b=createjs.extend(a,createjs.EventDispatcher);b.play=function(a,b,c,d,e,f){var g;return g=createjs.PlayPropsConfig.create(a instanceof Object||a instanceof createjs.PlayPropsConfig?a:{interrupt:a,delay:b,offset:c,loop:d,volume:e,pan:f}),this.playState==createjs.Sound.PLAY_SUCCEEDED?(this.applyPlayProps(g),void(this._paused&&this.setPaused(!1))):(this._cleanUp(),createjs.Sound._playInstance(this,g),this)},b.stop=function(){return this._position=0,this._paused=!1,this._handleStop(),this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,this},b.destroy=function(){this._cleanUp(),this.src=null,this.playbackResource=null,this.removeAllEventListeners()},b.applyPlayProps=function(a){return null!=a.offset&&this.setPosition(a.offset),null!=a.loop&&this.setLoop(a.loop),null!=a.volume&&this.setVolume(a.volume),null!=a.pan&&this.setPan(a.pan),null!=a.startTime&&(this.setStartTime(a.startTime),this.setDuration(a.duration)),this},b.toString=function(){return"[AbstractSoundInstance]"},b.getPaused=function(){return this._paused},b.setPaused=function(a){return a!==!0&&a!==!1||this._paused==a||1==a&&this.playState!=createjs.Sound.PLAY_SUCCEEDED?void 0:(this._paused=a,a?this._pause():this._resume(),clearTimeout(this.delayTimeoutId),this)},b.setVolume=function(a){return a==this._volume?this:(this._volume=Math.max(0,Math.min(1,a)),this._muted||this._updateVolume(),this)},b.getVolume=function(){return this._volume},b.setMuted=function(a){return a===!0||a===!1?(this._muted=a,this._updateVolume(),this):void 0},b.getMuted=function(){return this._muted},b.setPan=function(a){return a==this._pan?this:(this._pan=Math.max(-1,Math.min(1,a)),this._updatePan(),this)},b.getPan=function(){return this._pan},b.getPosition=function(){return this._paused||this.playState!=createjs.Sound.PLAY_SUCCEEDED||(this._position=this._calculateCurrentPosition()),this._position},b.setPosition=function(a){return this._position=Math.max(0,a),this.playState==createjs.Sound.PLAY_SUCCEEDED&&this._updatePosition(),this},b.getStartTime=function(){return this._startTime},b.setStartTime=function(a){return a==this._startTime?this:(this._startTime=Math.max(0,a||0),this._updateStartTime(),this)},b.getDuration=function(){return this._duration},b.setDuration=function(a){return a==this._duration?this:(this._duration=Math.max(0,a||0),this._updateDuration(),this)},b.setPlaybackResource=function(a){return this._playbackResource=a,0==this._duration&&this._setDurationFromSource(),this},b.getPlaybackResource=function(){return this._playbackResource},b.getLoop=function(){return this._loop},b.setLoop=function(a){null!=this._playbackResource&&(0!=this._loop&&0==a?this._removeLooping(a):0==this._loop&&0!=a&&this._addLooping(a)),this._loop=a},b._sendEvent=function(a){var b=new createjs.Event(a);this.dispatchEvent(b)},b._cleanUp=function(){clearTimeout(this.delayTimeoutId),this._handleCleanUp(),this._paused=!1,createjs.Sound._playFinished(this)},b._interrupt=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_INTERRUPTED,this._sendEvent("interrupted")},b._beginPlaying=function(a){return this.setPosition(a.offset),this.setLoop(a.loop),this.setVolume(a.volume),this.setPan(a.pan),null!=a.startTime&&(this.setStartTime(a.startTime),this.setDuration(a.duration)),null!=this._playbackResource&&this._position<this._duration?(this._paused=!1,this._handleSoundReady(),this.playState=createjs.Sound.PLAY_SUCCEEDED,this._sendEvent("succeeded"),!0):(this._playFailed(),!1)},b._playFailed=function(){this._cleanUp(),this.playState=createjs.Sound.PLAY_FAILED,this._sendEvent("failed")},b._handleSoundComplete=function(){return this._position=0,0!=this._loop?(this._loop--,this._handleLoop(),void this._sendEvent("loop")):(this._cleanUp(),this.playState=createjs.Sound.PLAY_FINISHED,void this._sendEvent("complete"))},b._handleSoundReady=function(){},b._updateVolume=function(){},b._updatePan=function(){},b._updateStartTime=function(){},b._updateDuration=function(){},b._setDurationFromSource=function(){},b._calculateCurrentPosition=function(){},b._updatePosition=function(){},b._removeLooping=function(){},b._addLooping=function(){},b._pause=function(){},b._resume=function(){},b._handleStop=function(){},b._handleCleanUp=function(){},b._handleLoop=function(){},createjs.AbstractSoundInstance=createjs.promote(a,"EventDispatcher"),createjs.DefaultSoundInstance=createjs.AbstractSoundInstance}(),this.createjs=this.createjs||{},function(){"use strict";var a=function(){this._capabilities=null,this._loaders={},this._audioSources={},this._soundInstances={},this._volume=1,this._loaderClass,this._soundInstanceClass},b=a.prototype;a._capabilities=null,a.isSupported=function(){return!0},b.register=function(a){var b=this._loaders[a.src];return b&&!b.canceled?this._loaders[a.src]:(this._audioSources[a.src]=!0,this._soundInstances[a.src]=[],b=new this._loaderClass(a),b.on("complete",createjs.proxy(this._handlePreloadComplete,this)),this._loaders[a.src]=b,b)},b.preload=function(a){a.on("error",createjs.proxy(this._handlePreloadError,this)),a.load()},b.isPreloadStarted=function(a){return null!=this._audioSources[a]},b.isPreloadComplete=function(a){return!(null==this._audioSources[a]||1==this._audioSources[a])},b.removeSound=function(a){if(this._soundInstances[a]){for(var b=this._soundInstances[a].length;b--;){var c=this._soundInstances[a][b];c.destroy()}delete this._soundInstances[a],delete this._audioSources[a],this._loaders[a]&&this._loaders[a].destroy(),delete this._loaders[a]}},b.removeAllSounds=function(){for(var a in this._audioSources)this.removeSound(a)},b.create=function(a,b,c){this.isPreloadStarted(a)||this.preload(this.register(a));var d=new this._soundInstanceClass(a,b,c,this._audioSources[a]);return this._soundInstances[a].push(d),d},b.setVolume=function(a){return this._volume=a,this._updateVolume(),!0},b.getVolume=function(){return this._volume},b.setMute=function(){return this._updateVolume(),!0},b.toString=function(){return"[AbstractPlugin]"},b._handlePreloadComplete=function(a){var b=a.target.getItem().src;this._audioSources[b]=a.result;for(var c=0,d=this._soundInstances[b].length;d>c;c++){var e=this._soundInstances[b][c];e.setPlaybackResource(this._audioSources[b])}},b._handlePreloadError=function(){},b._updateVolume=function(){},createjs.AbstractPlugin=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(a){this.AbstractLoader_constructor(a,!0,createjs.AbstractLoader.SOUND)}var b=createjs.extend(a,createjs.AbstractLoader);a.context=null,b.toString=function(){return"[WebAudioLoader]"},b._createRequest=function(){this._request=new createjs.XHRRequest(this._item,!1),this._request.setResponseType("arraybuffer")},b._sendComplete=function(){a.context.decodeAudioData(this._rawResult,createjs.proxy(this._handleAudioDecoded,this),createjs.proxy(this._sendError,this))},b._handleAudioDecoded=function(a){this._result=a,this.AbstractLoader__sendComplete()},createjs.WebAudioLoader=createjs.promote(a,"AbstractLoader")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,d,e){this.AbstractSoundInstance_constructor(a,b,d,e),this.gainNode=c.context.createGain(),this.panNode=c.context.createPanner(),this.panNode.panningModel=c._panningModel,this.panNode.connect(this.gainNode),this.sourceNode=null,this._soundCompleteTimeout=null,this._sourceNodeNext=null,this._playbackStartTime=0,this._endedHandler=createjs.proxy(this._handleSoundComplete,this)}var b=createjs.extend(a,createjs.AbstractSoundInstance),c=a;c.context=null,c.destinationNode=null,c._panningModel="equalpower",b.destroy=function(){this.AbstractSoundInstance_destroy(),this.panNode.disconnect(0),this.panNode=null,this.gainNode.disconnect(0),this.gainNode=null},b.toString=function(){return"[WebAudioSoundInstance]"},b._updatePan=function(){this.panNode.setPosition(this._pan,0,-.5)},b._removeLooping=function(){this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)},b._addLooping=function(){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},b._setDurationFromSource=function(){this._duration=1e3*this.playbackResource.duration},b._handleCleanUp=function(){this.sourceNode&&this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext)),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout),this._playbackStartTime=0},b._cleanUpAudioNode=function(a){return a&&(a.stop(0),a.disconnect(0),a=null),a},b._handleSoundReady=function(){this.gainNode.connect(c.destinationNode);var a=.001*this._duration,b=.001*this._position;b>a&&(b=a),this.sourceNode=this._createAndPlayAudioNode(c.context.currentTime-a,b),this._playbackStartTime=this.sourceNode.startTime-b,this._soundCompleteTimeout=setTimeout(this._endedHandler,1e3*(a-b)),0!=this._loop&&(this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0))},b._createAndPlayAudioNode=function(a,b){var d=c.context.createBufferSource();d.buffer=this.playbackResource,d.connect(this.panNode);var e=.001*this._duration;return d.startTime=a+e,d.start(d.startTime,b+.001*this._startTime,e-b),d},b._pause=function(){this._position=1e3*(c.context.currentTime-this._playbackStartTime),this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),0!=this.gainNode.numberOfOutputs&&this.gainNode.disconnect(0),clearTimeout(this._soundCompleteTimeout)},b._resume=function(){this._handleSoundReady()},b._updateVolume=function(){var a=this._muted?0:this._volume;a!=this.gainNode.gain.value&&(this.gainNode.gain.value=a)},b._calculateCurrentPosition=function(){return 1e3*(c.context.currentTime-this._playbackStartTime)},b._updatePosition=function(){this.sourceNode=this._cleanUpAudioNode(this.sourceNode),this._sourceNodeNext=this._cleanUpAudioNode(this._sourceNodeNext),clearTimeout(this._soundCompleteTimeout),this._paused||this._handleSoundReady()},b._handleLoop=function(){this._cleanUpAudioNode(this.sourceNode),this.sourceNode=this._sourceNodeNext,this._playbackStartTime=this.sourceNode.startTime,this._sourceNodeNext=this._createAndPlayAudioNode(this._playbackStartTime,0),this._soundCompleteTimeout=setTimeout(this._endedHandler,this._duration)},b._updateDuration=function(){this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._pause(),this._resume())},createjs.WebAudioSoundInstance=createjs.promote(a,"AbstractSoundInstance")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.AbstractPlugin_constructor(),this._panningModel=c._panningModel,this.context=c.context,this.dynamicsCompressorNode=this.context.createDynamicsCompressor(),this.dynamicsCompressorNode.connect(this.context.destination),this.gainNode=this.context.createGain(),this.gainNode.connect(this.dynamicsCompressorNode),createjs.WebAudioSoundInstance.destinationNode=this.gainNode,this._capabilities=c._capabilities,this._loaderClass=createjs.WebAudioLoader,this._soundInstanceClass=createjs.WebAudioSoundInstance,this._addPropsToClasses()}var b=createjs.extend(a,createjs.AbstractPlugin),c=a;c._capabilities=null,c._panningModel="equalpower",c.context=null,c.isSupported=function(){var a=createjs.BrowserDetect.isIOS||createjs.BrowserDetect.isAndroid||createjs.BrowserDetect.isBlackberry;

return"file:"!=location.protocol||a||this._isFileXHRSupported()?(c._generateCapabilities(),null==c.context?!1:!0):!1},c.playEmptySound=function(){if(null!=c.context){var a=c.context.createBufferSource();a.buffer=c.context.createBuffer(1,1,22050),a.connect(c.context.destination),a.start(0,0,0)}},c._isFileXHRSupported=function(){var a=!0,b=new XMLHttpRequest;try{b.open("GET","WebAudioPluginTest.fail",!1)}catch(c){return a=!1}b.onerror=function(){a=!1},b.onload=function(){a=404==this.status||200==this.status||0==this.status&&""!=this.response};try{b.send()}catch(c){a=!1}return a},c._generateCapabilities=function(){if(null==c._capabilities){var a=document.createElement("audio");if(null==a.canPlayType)return null;if(null==c.context)if(window.AudioContext)c.context=new AudioContext;else{if(!window.webkitAudioContext)return null;c.context=new webkitAudioContext}c._compatibilitySetUp(),c.playEmptySound(),c._capabilities={panning:!0,volume:!0,tracks:-1};for(var b=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=b.length;f>e;e++){var g=b[e],h=d[g]||g;c._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}c.context.destination.numberOfChannels<2&&(c._capabilities.panning=!1)}},c._compatibilitySetUp=function(){if(c._panningModel="equalpower",!c.context.createGain){c.context.createGain=c.context.createGainNode;var a=c.context.createBufferSource();a.__proto__.start=a.__proto__.noteGrainOn,a.__proto__.stop=a.__proto__.noteOff,c._panningModel=0}},b.toString=function(){return"[WebAudioPlugin]"},b._addPropsToClasses=function(){var a=this._soundInstanceClass;a.context=this.context,a.destinationNode=this.gainNode,a._panningModel=this._panningModel,this._loaderClass.context=this.context},b._updateVolume=function(){var a=createjs.Sound._masterMute?0:this._volume;a!=this.gainNode.gain.value&&(this.gainNode.gain.value=a)},createjs.WebAudioPlugin=createjs.promote(a,"AbstractPlugin")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"HTMLAudioTagPool cannot be instantiated"}function b(){this._tags=[]}var c=a;c._tags={},c._tagPool=new b,c._tagUsed={},c.get=function(a){var b=c._tags[a];return null==b?(b=c._tags[a]=c._tagPool.get(),b.src=a):c._tagUsed[a]?(b=c._tagPool.get(),b.src=a):c._tagUsed[a]=!0,b},c.set=function(a,b){b==c._tags[a]?c._tagUsed[a]=!1:c._tagPool.set(b)},c.remove=function(a){var b=c._tags[a];return null==b?!1:(c._tagPool.set(b),delete c._tags[a],delete c._tagUsed[a],!0)},c.getDuration=function(a){var b=c._tags[a];return null==b?0:1e3*b.duration},createjs.HTMLAudioTagPool=a;var d=b.prototype;d.constructor=b,d.get=function(){var a;return a=0==this._tags.length?this._createTag():this._tags.pop(),null==a.parentNode&&document.body.appendChild(a),a},d.set=function(a){var b=createjs.indexOf(this._tags,a);-1==b&&(this._tags.src=null,this._tags.push(a))},d.toString=function(){return"[TagPool]"},d._createTag=function(){var a=document.createElement("audio");return a.autoplay=!1,a.preload="none",a}}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.AbstractSoundInstance_constructor(a,b,c,d),this._audioSpriteStopTime=null,this._delayTimeoutId=null,this._endedHandler=createjs.proxy(this._handleSoundComplete,this),this._readyHandler=createjs.proxy(this._handleTagReady,this),this._stalledHandler=createjs.proxy(this._playFailed,this),this._audioSpriteEndHandler=createjs.proxy(this._handleAudioSpriteLoop,this),this._loopHandler=createjs.proxy(this._handleSoundComplete,this),c?this._audioSpriteStopTime=.001*(b+c):this._duration=createjs.HTMLAudioTagPool.getDuration(this.src)}var b=createjs.extend(a,createjs.AbstractSoundInstance);b.setMasterVolume=function(){this._updateVolume()},b.setMasterMute=function(){this._updateVolume()},b.toString=function(){return"[HTMLAudioSoundInstance]"},b._removeLooping=function(){null!=this._playbackResource&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},b._addLooping=function(){null==this._playbackResource||this._audioSpriteStopTime||(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)},b._handleCleanUp=function(){var a=this._playbackResource;if(null!=a){a.pause(),a.loop=!1,a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),a.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1);try{a.currentTime=this._startTime}catch(b){}createjs.HTMLAudioTagPool.set(this.src,a),this._playbackResource=null}},b._beginPlaying=function(a){return this._playbackResource=createjs.HTMLAudioTagPool.get(this.src),this.AbstractSoundInstance__beginPlaying(a)},b._handleSoundReady=function(){if(4!==this._playbackResource.readyState){var a=this._playbackResource;return a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),a.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),a.preload="auto",void a.load()}this._updateVolume(),this._playbackResource.currentTime=.001*(this._startTime+this._position),this._audioSpriteStopTime?this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1):(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),0!=this._loop&&(this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.loop=!0)),this._playbackResource.play()},b._handleTagReady=function(){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY,this._readyHandler,!1),this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED,this._stalledHandler,!1),this._handleSoundReady()},b._pause=function(){this._playbackResource.pause()},b._resume=function(){this._playbackResource.play()},b._updateVolume=function(){if(null!=this._playbackResource){var a=this._muted||createjs.Sound._masterMute?0:this._volume*createjs.Sound._masterVolume;a!=this._playbackResource.volume&&(this._playbackResource.volume=a)}},b._calculateCurrentPosition=function(){return 1e3*this._playbackResource.currentTime-this._startTime},b._updatePosition=function(){this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1);try{this._playbackResource.currentTime=.001*(this._position+this._startTime)}catch(a){this._handleSetPositionSeek(null)}},b._handleSetPositionSeek=function(){null!=this._playbackResource&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._handleSetPositionSeek,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},b._handleAudioSpriteLoop=function(){this._playbackResource.currentTime<=this._audioSpriteStopTime||(this._playbackResource.pause(),0==this._loop?this._handleSoundComplete(null):(this._position=0,this._loop--,this._playbackResource.currentTime=.001*this._startTime,this._paused||this._playbackResource.play(),this._sendEvent("loop")))},b._handleLoop=function(){0==this._loop&&(this._playbackResource.loop=!1,this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED,this._loopHandler,!1))},b._updateStartTime=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},b._updateDuration=function(){this._audioSpriteStopTime=.001*(this._startTime+this._duration),this.playState==createjs.Sound.PLAY_SUCCEEDED&&(this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED,this._endedHandler,!1),this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE,this._audioSpriteEndHandler,!1))},createjs.HTMLAudioSoundInstance=createjs.promote(a,"AbstractSoundInstance")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){this.AbstractPlugin_constructor(),this.defaultNumChannels=2,this._capabilities=c._capabilities,this._loaderClass=createjs.SoundLoader,this._soundInstanceClass=createjs.HTMLAudioSoundInstance}var b=createjs.extend(a,createjs.AbstractPlugin),c=a;c.MAX_INSTANCES=30,c._AUDIO_READY="canplaythrough",c._AUDIO_ENDED="ended",c._AUDIO_SEEKED="seeked",c._AUDIO_STALLED="stalled",c._TIME_UPDATE="timeupdate",c._capabilities=null,c.isSupported=function(){return c._generateCapabilities(),null!=c._capabilities},c._generateCapabilities=function(){if(null==c._capabilities){var a=document.createElement("audio");if(null==a.canPlayType)return null;c._capabilities={panning:!1,volume:!0,tracks:-1};for(var b=createjs.Sound.SUPPORTED_EXTENSIONS,d=createjs.Sound.EXTENSION_MAP,e=0,f=b.length;f>e;e++){var g=b[e],h=d[g]||g;c._capabilities[g]="no"!=a.canPlayType("audio/"+g)&&""!=a.canPlayType("audio/"+g)||"no"!=a.canPlayType("audio/"+h)&&""!=a.canPlayType("audio/"+h)}}},b.register=function(a){var b=createjs.HTMLAudioTagPool.get(a.src),c=this.AbstractPlugin_register(a);return c.setTag(b),c},b.removeSound=function(a){this.AbstractPlugin_removeSound(a),createjs.HTMLAudioTagPool.remove(a)},b.create=function(a,b,c){var d=this.AbstractPlugin_create(a,b,c);return d.setPlaybackResource(null),d},b.toString=function(){return"[HTMLAudioPlugin]"},b.setVolume=b.getVolume=b.setMute=null,createjs.HTMLAudioPlugin=createjs.promote(a,"AbstractPlugin")}(),this.createjs=this.createjs||{},function(){"use strict";function a(b,c,d){this.ignoreGlobalPause=!1,this.loop=!1,this.duration=0,this.pluginData=d||{},this.target=b,this.position=null,this.passive=!1,this._paused=!1,this._curQueueProps={},this._initQueueProps={},this._steps=[],this._actions=[],this._prevPosition=0,this._stepPosition=0,this._prevPos=-1,this._target=b,this._useTicks=!1,this._inited=!1,this._registered=!1,c&&(this._useTicks=c.useTicks,this.ignoreGlobalPause=c.ignoreGlobalPause,this.loop=c.loop,c.onChange&&this.addEventListener("change",c.onChange),c.override&&a.removeTweens(b)),c&&c.paused?this._paused=!0:createjs.Tween._register(this,!0),c&&null!=c.position&&this.setPosition(c.position,a.NONE)}var b=createjs.extend(a,createjs.EventDispatcher);a.NONE=0,a.LOOP=1,a.REVERSE=2,a.IGNORE={},a._tweens=[],a._plugins={},a.get=function(b,c,d,e){return e&&a.removeTweens(b),new a(b,c,d)},a.tick=function(b,c){for(var d=a._tweens.slice(),e=d.length-1;e>=0;e--){var f=d[e];c&&!f.ignoreGlobalPause||f._paused||f.tick(f._useTicks?1:b)}},a.handleEvent=function(a){"tick"==a.type&&this.tick(a.delta,a.paused)},a.removeTweens=function(b){if(b.tweenjs_count){for(var c=a._tweens,d=c.length-1;d>=0;d--){var e=c[d];e._target==b&&(e._paused=!0,c.splice(d,1))}b.tweenjs_count=0}},a.removeAllTweens=function(){for(var b=a._tweens,c=0,d=b.length;d>c;c++){var e=b[c];e._paused=!0,e.target&&(e.target.tweenjs_count=0)}b.length=0},a.hasActiveTweens=function(b){return b?null!=b.tweenjs_count&&!!b.tweenjs_count:a._tweens&&!!a._tweens.length},a.installPlugin=function(b,c){var d=b.priority;null==d&&(b.priority=d=0);for(var e=0,f=c.length,g=a._plugins;f>e;e++){var h=c[e];if(g[h]){for(var i=g[h],j=0,k=i.length;k>j&&!(d<i[j].priority);j++);g[h].splice(j,0,b)}else g[h]=[b]}},a._register=function(b,c){var d=b._target,e=a._tweens;if(c&&!b._registered)d&&(d.tweenjs_count=d.tweenjs_count?d.tweenjs_count+1:1),e.push(b),!a._inited&&createjs.Ticker&&(createjs.Ticker.addEventListener("tick",a),a._inited=!0);else if(!c&&b._registered){d&&d.tweenjs_count--;for(var f=e.length;f--;)if(e[f]==b){e.splice(f,1);break}}b._registered=c},b.wait=function(a,b){if(null==a||0>=a)return this;var c=this._cloneProps(this._curQueueProps);return this._addStep({d:a,p0:c,e:this._linearEase,p1:c,v:b})},b.to=function(a,b,c){return(isNaN(b)||0>b)&&(b=0),this._addStep({d:b||0,p0:this._cloneProps(this._curQueueProps),e:c,p1:this._cloneProps(this._appendQueueProps(a))})},b.call=function(a,b,c){return this._addAction({f:a,p:b?b:[this],o:c?c:this._target})},b.set=function(a,b){return this._addAction({f:this._set,o:this,p:[a,b?b:this._target]})},b.play=function(a){return a||(a=this),this.call(a.setPaused,[!1],a)},b.pause=function(a){return a||(a=this),this.call(a.setPaused,[!0],a)},b.setPosition=function(a,b){0>a&&(a=0),null==b&&(b=1);var c=a,d=!1;if(c>=this.duration&&(this.loop?c%=this.duration:(c=this.duration,d=!0)),c==this._prevPos)return d;var e=this._prevPos;if(this.position=this._prevPos=c,this._prevPosition=a,this._target)if(d)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var f=0,g=this._steps.length;g>f&&!(this._steps[f].t>c);f++);var h=this._steps[f-1];this._updateTargetProps(h,(this._stepPosition=c-h.t)/h.d)}return 0!=b&&this._actions.length>0&&(this._useTicks?this._runActions(c,c):1==b&&e>c?(e!=this.duration&&this._runActions(e,this.duration),this._runActions(0,c,!0)):this._runActions(e,c)),d&&this.setPaused(!0),this.dispatchEvent("change"),d},b.tick=function(a){this._paused||this.setPosition(this._prevPosition+a)},b.setPaused=function(b){return this._paused===!!b?this:(this._paused=!!b,a._register(this,!b),this)},b.w=b.wait,b.t=b.to,b.c=b.call,b.s=b.set,b.toString=function(){return"[Tween]"},b.clone=function(){throw"Tween can not be cloned."},b._updateTargetProps=function(b,c){var d,e,f,g,h,i;if(b||1!=c){if(this.passive=!!b.v,this.passive)return;b.e&&(c=b.e(c,0,1,1)),d=b.p0,e=b.p1}else this.passive=!1,d=e=this._curQueueProps;for(var j in this._initQueueProps){null==(g=d[j])&&(d[j]=g=this._initQueueProps[j]),null==(h=e[j])&&(e[j]=h=g),f=g==h||0==c||1==c||"number"!=typeof g?1==c?h:g:g+(h-g)*c;var k=!1;if(i=a._plugins[j])for(var l=0,m=i.length;m>l;l++){var n=i[l].tween(this,j,f,d,e,c,!!b&&d==e,!b);n==a.IGNORE?k=!0:f=n}k||(this._target[j]=f)}},b._runActions=function(a,b,c){var d=a,e=b,f=-1,g=this._actions.length,h=1;for(a>b&&(d=b,e=a,f=g,g=h=-1);(f+=h)!=g;){var i=this._actions[f],j=i.t;(j==e||j>d&&e>j||c&&j==a)&&i.f.apply(i.o,i.p)}},b._appendQueueProps=function(b){var c,d,e,f,g;for(var h in b)if(void 0===this._initQueueProps[h]){if(d=this._target[h],c=a._plugins[h])for(e=0,f=c.length;f>e;e++)d=c[e].init(this,h,d);this._initQueueProps[h]=this._curQueueProps[h]=void 0===d?null:d}else d=this._curQueueProps[h];for(var h in b){if(d=this._curQueueProps[h],c=a._plugins[h])for(g=g||{},e=0,f=c.length;f>e;e++)c[e].step&&c[e].step(this,h,d,b[h],g);this._curQueueProps[h]=b[h]}return g&&this._appendQueueProps(g),this._curQueueProps},b._cloneProps=function(a){var b={};for(var c in a)b[c]=a[c];return b},b._addStep=function(a){return a.d>0&&(this._steps.push(a),a.t=this.duration,this.duration+=a.d),this},b._addAction=function(a){return a.t=this.duration,this._actions.push(a),this},b._set=function(a,b){for(var c in a)b[c]=a[c]},createjs.Tween=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c){this.EventDispatcher_constructor(),this.ignoreGlobalPause=!1,this.duration=0,this.loop=!1,this.position=null,this._paused=!1,this._tweens=[],this._labels=null,this._labelList=null,this._prevPosition=0,this._prevPos=-1,this._useTicks=!1,this._registered=!1,c&&(this._useTicks=c.useTicks,this.loop=c.loop,this.ignoreGlobalPause=c.ignoreGlobalPause,c.onChange&&this.addEventListener("change",c.onChange)),a&&this.addTween.apply(this,a),this.setLabels(b),c&&c.paused?this._paused=!0:createjs.Tween._register(this,!0),c&&null!=c.position&&this.setPosition(c.position,createjs.Tween.NONE)}var b=createjs.extend(a,createjs.EventDispatcher);b.addTween=function(a){var b=arguments.length;if(b>1){for(var c=0;b>c;c++)this.addTween(arguments[c]);return arguments[0]}return 0==b?null:(this.removeTween(a),this._tweens.push(a),a.setPaused(!0),a._paused=!1,a._useTicks=this._useTicks,a.duration>this.duration&&(this.duration=a.duration),this._prevPos>=0&&a.setPosition(this._prevPos,createjs.Tween.NONE),a)},b.removeTween=function(a){var b=arguments.length;if(b>1){for(var c=!0,d=0;b>d;d++)c=c&&this.removeTween(arguments[d]);return c}if(0==b)return!1;for(var e=this._tweens,d=e.length;d--;)if(e[d]==a)return e.splice(d,1),a.duration>=this.duration&&this.updateDuration(),!0;return!1},b.addLabel=function(a,b){this._labels[a]=b;var c=this._labelList;if(c){for(var d=0,e=c.length;e>d&&!(b<c[d].position);d++);c.splice(d,0,{label:a,position:b})}},b.setLabels=function(a){this._labels=a?a:{}},b.getLabels=function(){var a=this._labelList;if(!a){a=this._labelList=[];var b=this._labels;for(var c in b)a.push({label:c,position:b[c]});a.sort(function(a,b){return a.position-b.position})}return a},b.getCurrentLabel=function(){var a=this.getLabels(),b=this.position,c=a.length;if(c){for(var d=0;c>d&&!(b<a[d].position);d++);return 0==d?null:a[d-1].label}return null},b.gotoAndPlay=function(a){this.setPaused(!1),this._goto(a)},b.gotoAndStop=function(a){this.setPaused(!0),this._goto(a)},b.setPosition=function(a,b){var c=this._calcPosition(a),d=!this.loop&&a>=this.duration;if(c==this._prevPos)return d;this._prevPosition=a,this.position=this._prevPos=c;for(var e=0,f=this._tweens.length;f>e;e++)if(this._tweens[e].setPosition(c,b),c!=this._prevPos)return!1;return d&&this.setPaused(!0),this.dispatchEvent("change"),d},b.setPaused=function(a){this._paused=!!a,createjs.Tween._register(this,!a)},b.updateDuration=function(){this.duration=0;for(var a=0,b=this._tweens.length;b>a;a++){var c=this._tweens[a];c.duration>this.duration&&(this.duration=c.duration)}},b.tick=function(a){this.setPosition(this._prevPosition+a)},b.resolve=function(a){var b=Number(a);return isNaN(b)&&(b=this._labels[a]),b},b.toString=function(){return"[Timeline]"},b.clone=function(){throw"Timeline can not be cloned."},b._goto=function(a){var b=this.resolve(a);null!=b&&this.setPosition(b)},b._calcPosition=function(a){return 0>a?0:a<this.duration?a:this.loop?a%this.duration:this.duration},createjs.Timeline=createjs.promote(a,"EventDispatcher")}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"Ease cannot be instantiated."}a.linear=function(a){return a},a.none=a.linear,a.get=function(a){return-1>a&&(a=-1),a>1&&(a=1),function(b){return 0==a?b:0>a?b*(b*-a+1+a):b*((2-b)*a+(1-a))}},a.getPowIn=function(a){return function(b){return Math.pow(b,a)}},a.getPowOut=function(a){return function(b){return 1-Math.pow(1-b,a)}},a.getPowInOut=function(a){return function(b){return(b*=2)<1?.5*Math.pow(b,a):1-.5*Math.abs(Math.pow(2-b,a))}},a.quadIn=a.getPowIn(2),a.quadOut=a.getPowOut(2),a.quadInOut=a.getPowInOut(2),a.cubicIn=a.getPowIn(3),a.cubicOut=a.getPowOut(3),a.cubicInOut=a.getPowInOut(3),a.quartIn=a.getPowIn(4),a.quartOut=a.getPowOut(4),a.quartInOut=a.getPowInOut(4),a.quintIn=a.getPowIn(5),a.quintOut=a.getPowOut(5),a.quintInOut=a.getPowInOut(5),a.sineIn=function(a){return 1-Math.cos(a*Math.PI/2)},a.sineOut=function(a){return Math.sin(a*Math.PI/2)},a.sineInOut=function(a){return-.5*(Math.cos(Math.PI*a)-1)},a.getBackIn=function(a){return function(b){return b*b*((a+1)*b-a)}},a.backIn=a.getBackIn(1.7),a.getBackOut=function(a){return function(b){return--b*b*((a+1)*b+a)+1}},a.backOut=a.getBackOut(1.7),a.getBackInOut=function(a){return a*=1.525,function(b){return(b*=2)<1?.5*b*b*((a+1)*b-a):.5*((b-=2)*b*((a+1)*b+a)+2)}},a.backInOut=a.getBackInOut(1.7),a.circIn=function(a){return-(Math.sqrt(1-a*a)-1)},a.circOut=function(a){return Math.sqrt(1- --a*a)},a.circInOut=function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},a.bounceIn=function(b){return 1-a.bounceOut(1-b)},a.bounceOut=function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},a.bounceInOut=function(b){return.5>b?.5*a.bounceIn(2*b):.5*a.bounceOut(2*b-1)+.5},a.getElasticIn=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return-(a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b))}},a.elasticIn=a.getElasticIn(1,.3),a.getElasticOut=function(a,b){var c=2*Math.PI;return function(d){if(0==d||1==d)return d;var e=b/c*Math.asin(1/a);return a*Math.pow(2,-10*d)*Math.sin((d-e)*c/b)+1}},a.elasticOut=a.getElasticOut(1,.3),a.getElasticInOut=function(a,b){var c=2*Math.PI;return function(d){var e=b/c*Math.asin(1/a);return(d*=2)<1?-.5*a*Math.pow(2,10*(d-=1))*Math.sin((d-e)*c/b):a*Math.pow(2,-10*(d-=1))*Math.sin((d-e)*c/b)*.5+1}},a.elasticInOut=a.getElasticInOut(1,.3*1.5),createjs.Ease=a}(),this.createjs=this.createjs||{},function(){"use strict";function a(){throw"MotionGuidePlugin cannot be instantiated."}a.priority=0,a._rotOffS,a._rotOffE,a._rotNormS,a._rotNormE,a.install=function(){return createjs.Tween.installPlugin(a,["guide","x","y","rotation"]),createjs.Tween.IGNORE},a.init=function(a,b,c){var d=a.target;return d.hasOwnProperty("x")||(d.x=0),d.hasOwnProperty("y")||(d.y=0),d.hasOwnProperty("rotation")||(d.rotation=0),"rotation"==b&&(a.__needsRot=!0),"guide"==b?null:c},a.step=function(b,c,d,e,f){if("rotation"==c&&(b.__rotGlobalS=d,b.__rotGlobalE=e,a.testRotData(b,f)),"guide"!=c)return e;var g,h=e;h.hasOwnProperty("path")||(h.path=[]);var i=h.path;if(h.hasOwnProperty("end")||(h.end=1),h.hasOwnProperty("start")||(h.start=d&&d.hasOwnProperty("end")&&d.path===i?d.end:0),h.hasOwnProperty("_segments")&&h._length)return e;var j=i.length,k=10;if(!(j>=6&&(j-2)%4==0))throw"invalid 'path' data, please see documentation for valid paths";h._segments=[],h._length=0;for(var l=2;j>l;l+=4){for(var m,n,o=i[l-2],p=i[l-1],q=i[l+0],r=i[l+1],s=i[l+2],t=i[l+3],u=o,v=p,w=0,x=[],y=1;k>=y;y++){var z=y/k,A=1-z;m=A*A*o+2*A*z*q+z*z*s,n=A*A*p+2*A*z*r+z*z*t,w+=x[x.push(Math.sqrt((g=m-u)*g+(g=n-v)*g))-1],u=m,v=n}h._segments.push(w),h._segments.push(x),h._length+=w}g=h.orient,h.orient=!0;var B={};return a.calc(h,h.start,B),b.__rotPathS=Number(B.rotation.toFixed(5)),a.calc(h,h.end,B),b.__rotPathE=Number(B.rotation.toFixed(5)),h.orient=!1,a.calc(h,h.end,f),h.orient=g,h.orient?(b.__guideData=h,a.testRotData(b,f),e):e},a.testRotData=function(a,b){if(void 0===a.__rotGlobalS||void 0===a.__rotGlobalE){if(a.__needsRot)return;a.__rotGlobalS=a.__rotGlobalE=void 0!==a._curQueueProps.rotation?a._curQueueProps.rotation:b.rotation=a.target.rotation||0}if(void 0!==a.__guideData){var c=a.__guideData,d=a.__rotGlobalE-a.__rotGlobalS,e=a.__rotPathE-a.__rotPathS,f=d-e;if("auto"==c.orient)f>180?f-=360:-180>f&&(f+=360);else if("cw"==c.orient){for(;0>f;)f+=360;0==f&&d>0&&180!=d&&(f+=360)}else if("ccw"==c.orient){for(f=d-(e>180?360-e:e);f>0;)f-=360;0==f&&0>d&&-180!=d&&(f-=360)}c.rotDelta=f,c.rotOffS=a.__rotGlobalS-a.__rotPathS,a.__rotGlobalS=a.__rotGlobalE=a.__guideData=a.__needsRot=void 0}},a.tween=function(b,c,d,e,f,g,h){var i=f.guide;if(void 0==i||i===e.guide)return d;if(i.lastRatio!=g){var j=(i.end-i.start)*(h?i.end:g)+i.start;switch(a.calc(i,j,b.target),i.orient){case"cw":case"ccw":case"auto":b.target.rotation+=i.rotOffS+i.rotDelta*g;break;case"fixed":default:b.target.rotation+=i.rotOffS}i.lastRatio=g}return"rotation"!=c||i.orient&&"false"!=i.orient?b.target[c]:d},a.calc=function(b,c,d){void 0==b._segments&&a.validate(b),void 0==d&&(d={x:0,y:0,rotation:0});for(var e=b._segments,f=b.path,g=b._length*c,h=e.length-2,i=0;g>e[i]&&h>i;)g-=e[i],i+=2;var j=e[i+1],k=0;for(h=j.length-1;g>j[k]&&h>k;)g-=j[k],k++;var l=k/++h+g/(h*j[k]);i=2*i+2;var m=1-l;return d.x=m*m*f[i-2]+2*m*l*f[i+0]+l*l*f[i+2],d.y=m*m*f[i-1]+2*m*l*f[i+1]+l*l*f[i+3],b.orient&&(d.rotation=57.2957795*Math.atan2((f[i+1]-f[i-1])*m+(f[i+3]-f[i+1])*l,(f[i+0]-f[i-2])*m+(f[i+2]-f[i+0])*l)),d},createjs.MotionGuidePlugin=a}(),this.createjs=this.createjs||{},function(){"use strict";var a=createjs.TweenJS=createjs.TweenJS||{};a.version="0.6.1",a.buildDate="Thu, 21 May 2015 16:17:37 GMT"}();
(function () {
    // Constants
    var CIRCLE_RADIUS = 50;
    var CIRCLE_RADIUS_SMALL = CIRCLE_RADIUS * 3 / 4;
    var CIRCLE_DIAMETER = CIRCLE_RADIUS * 2;
    var SPACING = 5;
    var CANVAS_HEIGHT = 320;
    var CANVAS_WIDTH = 320;

    var LEFT_0 = -CIRCLE_RADIUS;
    var TOP_0 = LEFT_0;
    var LEFT_1 = LEFT_0 + SPACING + CIRCLE_DIAMETER;
    var TOP_1 = LEFT_1;
    var LEFT_2 = LEFT_1 + SPACING + CIRCLE_DIAMETER;
    var TOP_2 = LEFT_2;
    var LEFT_3 = LEFT_2 + SPACING + CIRCLE_DIAMETER;
    var TOP_3 = LEFT_3;
    var LEFT_4 = LEFT_3 + SPACING + CIRCLE_DIAMETER;
    var TOP_4 = LEFT_4;
    var TOP_NEG1 = TOP_0 - SPACING - CIRCLE_DIAMETER;
    var TOP_5 = TOP_4 + SPACING + CIRCLE_DIAMETER;

    // Colors
    var COLOR_BORDER = '#F0F8FF';

    var COLOR_SKY = '#E4F8FF';
    var COLOR_GROUND = 'LightGreen';
    var COLOR_HIGH_SKY = 'LightBlue';
    var COLOR_SEA = '#6DB7FF';
    var COLOR_SEA_GROUND = '#E77E34';
    var COLOR_DARK_SKY = '#000025';
    var COLOR_DARK_SEA = '#AAAAB3';
    var COLOR_ICE_GROUND = '#F2F2F2';
    var COLOR_DESERT = '#FFD466';
    var COLOR_DESERT_SKY = '#FFFFA5';

    var COLOR_FLOWER_PETAL = 'hotpink';

    var COLOR_TREE_TRUNK = '#F4A71C';
    var COLOR_TREE_LEAVES = '#12e627';
    var COLOR_TREE_FRUIT = '#FF6666';

    var COLOR_SPRING_SKY = '#F0FFFF';
    var COLOR_SPRING_GROUND = 'springgreen';
    var COLOR_SPRING_FLOWER = 'pink';
    var COLOR_SUMMER_SKY = '#C6FFEA';
    var COLOR_SUMMER_GROUND = '#FFFFB7';
    var COLOR_SUMMER_TRUNK = '#e68d45';
    var COLOR_SUMMER_TRUNK_STRIPE = '#ffc299';
    var COLOR_SUMMER_LEAF = '#2b8050';
    var COLOR_SUMMER_COCONUT = 'lightgreen';
    var COLOR_AUTUMN_SKY = '#fff04d';
    var COLOR_AUTUMN_GROUND = '#FF8533';
    var COLOR_AUTUMN_TRUNK = '#B30000';
    var COLOR_AUTUMN_LEAF = 'red';
    var COLOR_AUTUMN_LEAF_2 = '#FF4500';
    var COLOR_WINTER_SKY = '#322F40';
    var COLOR_WINTER_GROUND = '#E1F0EB';

    var COLOR_BEE_BODY = 'yellow';
    var COLOR_BEE_WING = '#ABCCB0';
    var COLOR_BEE_BODY_STRIPE = 'black'

    var COLOR_TURTLE_SHELL = '#00cc00';
    var COLOR_TURTLE_BODY = '#FFDC00';
    var COLOR_BALLOON_STRING = 'white';
    var COLOR_BALLOON_1 = '#FF9999';
    var COLOR_BALLOON_2 = '#9999FF';
    var COLOR_BALLOON_3 = '#FFFF99';

    var COLOR_FISH = '#FFE926';
    var COLOR_CACTUS = '#1D8232';
    var COLOR_CACTUS_STRIPE = 'greenyellow';
    var COLOR_DESERT_FACE_TEAR = 'lightblue';
    var COLOR_JACKALOPE = '#FFDB89';
    var COLOR_JACKALOPE_HORN = '#996C4D';
    var COLOR_YETI = '#fff';
    var COLOR_YETI_BLUE = '#f0ffff';
    var COLOR_YETI_DARK_BLUE = '#B0E0E6';
    var COLOR_SEA_MONSTER = 'darkgreen';
    var COLOR_SHARK = '#CCCCCC';

    var COLOR_SNAKE = '#F4A460';
    var COLOR_KNIFE = 'grey';

    // Stage
    var stage;

    // Popcorn
    var pop;
    var popCanPlay = false;

    // Loading
    var loadingWrapper;
    var loadingTimeline;

    // Menu
    var menuWrapper;

    // Animation
    var animationWrapper;
    var mainTimeline;

    // Gallery Page
    var galleryPageWrapper;
    var galleryWrapper;
    var galleryTimelines = [];
    var COLOR_BUTTON_DISABLED = 'lightGrey';
    var COLOR_BUTTON_ENABLED = '#E2E2FF';
    var COLOR_BUTTON_DISABLED_CONTENT = 'darkGrey';
    var COLOR_BUTTON_ENABLED_CONTENT = '#9797FF';
    var PAGE_SIZE = 6;
    var currentPage = 1;

    // Info
    var infoWrapper;

    // for debugging
    var DEBUG = false;
    var START_TIME = DEBUG ? 168 : 0;
    var debugObjs = null;
    //getNContainer(LEFT_2, TOP_1);

    function init() {
        stage = new createjs.Stage('canvas');
        stage.enableMouseOver(10);

        // Ticker
        createjs.Ticker.setFPS(60);
        createjs.Ticker.addEventListener("tick", stage);

        // Defaults
        TweenLite.defaultEase = Power0.easeNone;

        var bg = new createjs.Shape();
        bg.graphics.beginFill('white')
            .rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        stage.addChild(bg);

        renderLoading();
        loadAudio();

        if (DEBUG) {
            var gridLinesColor = COLOR_BORDER;
            var gridLines = new createjs.Shape();
            gridLines.graphics.beginFill(gridLinesColor)
                .rect(0, 0, SPACING, CANVAS_HEIGHT)
                .endFill().beginFill(gridLinesColor)
                .rect(SPACING + CIRCLE_DIAMETER, 0, SPACING, CANVAS_HEIGHT)
                .endFill().beginFill(gridLinesColor)
                .rect(2 * (SPACING + CIRCLE_DIAMETER), 0, SPACING, CANVAS_HEIGHT)
                .endFill().beginFill(gridLinesColor)
                .rect(3 * (SPACING + CIRCLE_DIAMETER), 0, SPACING, CANVAS_HEIGHT)
                .endFill().beginFill(gridLinesColor)
                .rect(0, 0, CANVAS_WIDTH, SPACING)
                .endFill().beginFill(gridLinesColor)
                .rect(0, SPACING + CIRCLE_DIAMETER, CANVAS_WIDTH, SPACING)
                .endFill().beginFill(gridLinesColor)
                .rect(0, 2 * (SPACING + CIRCLE_DIAMETER), CANVAS_WIDTH, SPACING)
                .endFill().beginFill(gridLinesColor)
                .rect(0, 3 * (SPACING + CIRCLE_DIAMETER), CANVAS_WIDTH, SPACING);
            stage.addChild(gridLines);
        }
    }

    function loadAudio() {
        pop = Popcorn("#audio");

        var requestMp3 = new XMLHttpRequest();
        requestMp3.open('GET', 'audio/Antsy_Pants_-_Tree_Hugger.mp3', true);
        requestMp3.responseType = 'blob';
        requestMp3.onload = function (e) {
            if (this.status == 200) {
                var myBlob = this.response;
                var audioSrc = URL.createObjectURL(myBlob);
                var audio = document.getElementById("audio");
                audio.src = audioSrc;
            }
            else {
                console.log('requestMp3 reached server but error is returned.');
            }
        }
        requestMp3.onerror = function () {
            console.log('requestMp3 onerror: ' + e.message);
        }

        requestMp3.send();

        var lyrics = [
            "[ti:Tree Hugger]",
            "[ar:Kumya Dawson]",
            "[al:JUNO OST]",
            "[00:06.36]Song: Tree Hugger",
            "[00:12.40]Artist: Kimya Dawson",
            "[00:18.00]",
            "[00:19.52]The flower said, \"I wish I was a tree.\"",
            "[00:21.64]The tree said, \"I wish I could be",
            "[00:24.00]A different kind of tree.\"",
            "[00:26.68]The cat wished that it was a bee,",
            "[00:29.02]The turtle wished that it could fly,",
            "[00:31.49]Really high into the sky,",
            "[00:33.82]Over rooftops and then dive",
            "[00:36.15]Deep into the sea.",
            "[00:37.24]",
            "[00:38.34]And in the sea there is a fish,",
            "[00:40.66]A fish that has a secret wish;",
            "[00:43.08]A wish to be a big cactus,",
            "[00:45.33]With a pink flower on it.",
            "[00:47.76]And in the sea there is a fish,",
            "[00:50.10]A fish that has a secret wish;",
            "[00:52.69]A wish to be a big cactus,",
            "[00:54.68]With a pink flower on it.",
            "[00:56.60]",
            "[00:56.95]And the flower",
            "[00:58.85]Would be its offering",
            "[01:01.51]Of love, to the desert.",
            "[01:06.20]And the desert,",
            "[01:08.81]So dry and lonely,",
            "[01:10.88]That the creatures all",
            "[01:12.57]Appreciate the effort.",
            "[01:14.50]",
            "[01:15.88]Et le jackalope a dit, <br>(And the Jackalope said,)",
            "[01:18.26]\"Je voudrais être un yeti, <br>(\"I'd like to be a yeti,)",
            "[01:20.51]Pour voler dans la nuit <br>(To flee in the night)",
            "[01:22.70]Et men aller loin dici.\" <br>(And go far from here.\")",
            "[01:25.11]Mais le yeti a dit, <br>(But the yeti said,)",
            "[01:27.51]\"Je voudrais être un monstre marin, <br>(\"I would like to be a sea monster,)",
            "[01:29.78]Pour pouvoir rentrer dans la mer, <br>(So I could go on the sea,)",
            "[01:32.16]De tous les requins.\" <br>(With all the sharks.\")",
            "[01:33.50]",
            "[01:34.00]And the rattlesnake said,",
            "[01:35.84]\"I wish I had hands so",
            "[01:37.22]I could hug you like a man.\"",
            "[01:39.68]And then the cactus said,",
            "[01:41.53]\"Don't you understand?",
            "[01:43.58]My skin is covered with sharp spikes,",
            "[01:45.91]That'll stab you like a thousand knives.",
            "[01:48.80]A hug would be nice,",
            "[01:50.07]But hug my flower with your eyes.\"",
            "[01:53.21]The flower said, \"I wish I was a tree.\"",
            "[01:55.79]The tree said, \"I wish I could be",
            "[01:58.58]A different kind of tree.\"",
            "[02:01.01]The cat wished that it was a bee,",
            "[02:03.42]The turtle wished that it could fly,",
            "[02:05.89]Really high into the sky,",
            "[02:08.39]Over rooftops and then dive",
            "[02:10.45]Deep into the sea.",
            "[02:12.18]",
            "[02:12.83]And in the sea there is a fish,",
            "[02:15.24]A fish that has a secret wish;",
            "[02:17.69]A wish to be a big cactus,",
            "[02:19.88]With a pink flower on it.",
            "[02:22.43]And in the sea there is a fish,",
            "[02:24.82]A fish that has a secret wish;",
            "[02:27.16]A wish to be a big cactus,",
            "[02:29.63]With a pink flower on it.",
            "[02:30.98]",
            "[02:31.62]And the flower",
            "[02:33.86]Would be its offering",
            "[02:36.01]Of love, to the desert.",
            "[02:40.88]And the desert,",
            "[02:43.17]So dry and lonely,",
            "[02:45.74]That the creatures all,",
            "[02:47.43]Appreciate the effort.",
            "[02:52.00]"];
        var lrcArr = parseLrc(lyrics);
        var lrc, lrcNext;
        for (var i = 0; i < lrcArr.length; i++) {
            lrc = lrcArr[i];
            lrcNext = lrcArr[i + 1];

            if (lrcNext) {
                pop.footnote({
                    start: lrc.starttime,
                    end: lrcNext.starttime,
                    text: lrc.line,
                    target: 'lyrics'
                });
            }
        }

        pop.on('canplayall', function () {
            popCanPlay = true;
            renderMenu();

            // hide #loading
//                var loading = document.getElementById('loading');
//                loading.style.display = 'none';
//
//                // show #btn-start
//                var btnStart = document.getElementById('btn-start');
//                btnStart.style.display = '';
//
//                btnStart.addEventListener("click", function () {
//                    // hide #btn-start
//                    btnStart.style.display = 'none';
//
//                    // Add class 'loaded' to container
//                    var container = document.getElementsByClassName('container')[0];
//                    if (container.classList) {
//                        container.classList.add('loaded');
//                    }
//                    else {
//                        container.className += ' loaded';
//                    }
//
//                    // start
//                    pop.play();
//                });
        });
        pop.on('ended', function () {
            setTimeout(function () {
                ga('send', 'event', 'Ending', 'finish', 'Ending Finish', {
                    nonInteraction: true
                });
                stage.removeChild(animationWrapper);
                renderMenu()
            }, 200);
        });

        function parseRawLrc(rawLrc) {
            var rawLrcArray = rawLrc.split(/[\r\n]/);
            return parseLrc(rawLrcArray);
        }

        function parseLrc(rawLrcArray) {
            var lrcArr = [];

            var lrcAllRegex = /(\[[0-9.:\[\]]*\])+(.*)/;
            var timeRegex = /\[([0-9]+):([0-9.]+)\]/;

            for (var i = 0; i < rawLrcArray.length; i++) {
                // handle lrc
                var lrc = lrcAllRegex.exec(rawLrcArray[i]);

                if (lrc && lrc[0]) {
                    var times = lrc[1].replace(/\]\[/g, "],[").split(",");

                    for (var j = 0; j < times.length; j++) {
                        var time = timeRegex.exec(times[j]);
                        if (time && time[0]) {
                            lrcArr.push({ "starttime": parseInt(time[1], 10) * 60 + parseFloat(time[2]), "line": lrc[2] });
                        }
                        ;
                    }
                    ;
                }
                ;
            }
            ;

            //sort lrcArr
            lrcArr.sort(function (a, b) {
                return a.starttime - b.starttime;
            });

            return lrcArr;
        }
    }

    // Render
    function renderLoading() {
        if (!loadingWrapper) {
            loadingWrapper = new createjs.Container();
        }
        if (loadingWrapper.parent != stage) {
            stage.addChild(loadingWrapper);
        }
        loadingWrapper.removeAllChildren();

        var loadingIconWrapper = new createjs.Container();
        loadingIconWrapper.x = LEFT_2;
        loadingIconWrapper.y = TOP_2;
        loadingWrapper.addChild(loadingIconWrapper);

        var loadingIcon = new createjs.Shape();
        loadingIcon.graphics.beginFill(COLOR_HIGH_SKY)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        loadingIconWrapper.addChild(loadingIcon);

        var flower = new createjs.Shape();
        flower.graphics.beginFill('yellow');
        var flowerCmd = flower.graphics
            .drawCircle(0, 0, 0)
            .command;
        loadingIconWrapper.addChild(flower);

        var petalColor = COLOR_FLOWER_PETAL;
        var petalRadius = 6;
        var petalDuration = .25;

        var petal1 = new createjs.Shape();
        petal1.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        loadingIconWrapper.addChildAt(petal1, 1); // add at index 1 as flowerStem should be at index 0

        var petal2 = new createjs.Shape();
        petal2.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        loadingIconWrapper.addChildAt(petal2, 1);

        var petal3 = new createjs.Shape();
        petal3.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        loadingIconWrapper.addChildAt(petal3, 1);

        var petal4 = new createjs.Shape();
        petal4.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        loadingIconWrapper.addChildAt(petal4, 1);

        var petal5 = new createjs.Shape();
        petal5.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        loadingIconWrapper.addChildAt(petal5, 1);

        loadingTimeline = new TimelineMax({repeat: -1, repeatDelay: .3, autoRemoveChildren: false});
        loadingTimeline
            .set([petal1, petal2, petal3, petal4, petal5], {alpha: 0})
            .to(flowerCmd, .6, {
                radius: 6,
                ease: Back.easeOut.config(3)
            })
            .set([petal1, petal2, petal3, petal4, petal5], {alpha: 1})
            .add('flowerCmdComplete')
            .to(petal1, petalDuration, {x: 0, y: -11, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
            .to(petal2, petalDuration, {x: 8, y: -4, delay: .5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
            .to(petal3, petalDuration, {x: 6, y: 7, delay: 1.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
            .to(petal4, petalDuration, {x: -6, y: 7, delay: 2.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
            .to(petal5, petalDuration, {x: -8, y: -4, delay: 3.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete');
    }

    function renderMenu() {
        TweenMax.killAll();

        if (!menuWrapper) {
            menuWrapper = new createjs.Container();
        }
        if (menuWrapper.parent != stage) {
            stage.addChild(menuWrapper);
        }
        menuWrapper.removeAllChildren();

        stage.removeChild(loadingWrapper);
        loadingTimeline.remove();
        galleryTimelines.forEach(function (timeline) {
            timeline.remove();
        });

        var btnPlayWrapper = new createjs.Container();
        btnPlayWrapper.x = LEFT_2;
        btnPlayWrapper.y = TOP_2;
        btnPlayWrapper.cursor = 'pointer';

        var btnPlay = new createjs.Shape();
        var arrowLength = 20;
        btnPlay.graphics.beginFill(COLOR_BUTTON_ENABLED)
            .drawCircle(0, 0, CIRCLE_RADIUS)
            .endFill().beginFill(COLOR_BUTTON_ENABLED_CONTENT)
            .setStrokeStyle(4, 'round', 'round')
            .beginStroke(COLOR_BUTTON_ENABLED_CONTENT)
            .moveTo(arrowLength, 0)
            .lineTo(Math.round(-arrowLength * Math.cos(60 * Math.PI / 180)), Math.round(-arrowLength * Math.sin(60 * Math.PI / 180)))
            .lineTo(Math.round(-arrowLength * Math.cos(60 * Math.PI / 180)), Math.round(arrowLength * Math.sin(60 * Math.PI / 180)))
            .closePath();

        btnPlayWrapper.addChild(btnPlay);
        btnPlayWrapper.addEventListener('click', function () {
            ga('send', 'event', 'Animation', 'start', 'Start Animation');
            stage.removeChild(menuWrapper);
            renderAnim();
        });
        menuWrapper.addChild(btnPlayWrapper);

        var btnFbWrapper = new createjs.Container();
        btnFbWrapper.x = LEFT_1;
        btnFbWrapper.y = TOP_3;
        btnFbWrapper.cursor = 'pointer';

        var btnFb = new createjs.Shape();
        btnFb.graphics.beginFill('#759BE6')
            .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
            .endFill()
            .setStrokeStyle(7)
            .beginStroke('#fff')
            .moveTo(0, 24)
            .lineTo(0, -11)
            .arcTo(0, -17, 12, -17, 6)
            .lineTo(12, -17)
            .moveTo(-12, -1)
            .lineTo(12, -1);

        btnFbWrapper.addChild(btnFb);
        btnFbWrapper.addEventListener('click', function () {
            alert('not implemented yet!');

//        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href), '_blank');
        });
        menuWrapper.addChild(btnFbWrapper);

        var btnBrowseWrapper = new createjs.Container();
        btnBrowseWrapper.x = LEFT_2;
        btnBrowseWrapper.y = TOP_3;
        btnBrowseWrapper.cursor = 'pointer';

        var btnBrowse = new createjs.Shape();
        btnBrowse.graphics.beginFill(COLOR_BUTTON_ENABLED)
            .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
            .endFill().beginFill(COLOR_BUTTON_ENABLED_CONTENT)
            .rect(-16, -2, 5, 5)
            .rect(-8.5, -2, 24.5, 5)
            .rect(-16, -12, 5, 5)
            .rect(-8.5, -12, 24.5, 5)
            .rect(-16, 8, 5, 5)
            .rect(-8.5, 8, 24.5, 5)
        ;

        btnBrowseWrapper.addChild(btnBrowse);
        btnBrowseWrapper.addEventListener('click', function () {
            stage.removeChild(menuWrapper);
            renderGalleryPage();
        });
        menuWrapper.addChild(btnBrowseWrapper);

        var btnInfoWrapper = new createjs.Container();
        btnInfoWrapper.x = LEFT_3;
        btnInfoWrapper.y = TOP_3;
        btnInfoWrapper.cursor = 'pointer';

        var btnInfo = new createjs.Shape();
        btnInfo.graphics.beginFill('#D0D0D0')
            .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
            .endFill()
            .beginFill('#fff')
            .drawCircle(0, -18, 5)
            .setStrokeStyle(7)
            .beginStroke('#fff')
            .moveTo(-8, -6)
            .lineTo(2, -6)
            .lineTo(2, 16)
            .lineTo(2, -6)
            .endStroke()
            .beginStroke('#fff')
            .moveTo(-11, 16)
            .lineTo(11, 16);

        btnInfoWrapper.addChild(btnInfo);
        btnInfoWrapper.addEventListener('click', function () {
            ga('send', 'event', 'Info', 'view', 'View Info');
            renderInfo();
        });
        menuWrapper.addChild(btnInfoWrapper);

        if (DEBUG && debugObjs) {
            var timeline = debugObjs[0];
            var container = debugObjs[1];
            menuWrapper.addChild(container);
            timeline.eventCallback('onComplete', function () {
                this.restart();
            });
            timeline.play();
        }
    }

    function renderAnim() {
        if (!animationWrapper) {
            animationWrapper = new createjs.Container();
        }
        if (animationWrapper.parent != stage) {
            stage.addChild(animationWrapper);
        }
        animationWrapper.removeAllChildren();

        mainTimeline = new TimelineMax({
            paused: true,
            autoRemoveChildren: false
        });

        function getOpeningTimeline() {
            var openingTimeline = new TimelineMax({autoRemoveChildren: false});

            var defaultContainer = getDefaultContainer(LEFT_2, TOP_2);
            var springContainer = getSpringContainer(LEFT_2, TOP_2);
            var summerContainer = getSummerContainer(LEFT_2, TOP_2);
            var autumnContainer = getAutumnContainer(LEFT_2, TOP_2);
            var winterContainer = getWinterContainer(LEFT_2, TOP_2);
            var seaWaveContainer = getSeaWaveContainer(LEFT_2, TOP_2);
            var seaContainer = getSeaContainer(LEFT_2, TOP_2);
            var desertGroundContainer = getDesertGroundContainer(LEFT_2, TOP_2);
            var iceContainer = getIceContainer(LEFT_2, TOP_2);

            var defaultCreature = getCreatureContainer();
            var springCreature = getCreatureContainer();
            var summerCreature = getCreatureContainer();
            var autumnCreature = getCreatureContainer();
            var winterCreature = getCreatureContainer();
            var seaWaveCreature = getCreatureContainer();
            var seaCreature = getCreatureContainer();
            var desertGroundCreature = getCreatureContainer();
            var iceCreature = getCreatureContainer();

            defaultContainer.addChild(defaultCreature);
            springContainer.addChild(springCreature);
            summerContainer.addChild(summerCreature);
            autumnContainer.addChild(autumnCreature);
            winterContainer.addChild(winterCreature);
            seaWaveContainer.addChild(seaWaveCreature);
            seaContainer.addChild(seaCreature);
            desertGroundContainer.addChild(desertGroundCreature);
            iceContainer.addChild(iceCreature);

            var containers = [defaultContainer, springContainer, summerContainer, autumnContainer, winterContainer,
                seaWaveContainer, seaContainer, desertGroundContainer, iceContainer];
            var creatures = [defaultCreature, springCreature, summerCreature, autumnCreature, winterCreature,
                seaWaveCreature, seaCreature, desertGroundCreature, iceCreature];

            containers.forEach(function (container) {
                container.scaleX = container.scaleY = 0;
            });
            creatures.forEach(function (creature) {
                creature.y += 13;
            });

            new TimelineMax({repeat: -1, autoRemoveChildren: false})
                .to(creatures, .6, {y: '-=19.5', rotation: '+=180'})
                .to(creatures, .6, {y: '+=19.5', rotation: '+=180'})
                .to(creatures, .03, {});

            animationWrapper.addChild(iceContainer);
            animationWrapper.addChild(desertGroundContainer);
            animationWrapper.addChild(seaContainer);
            animationWrapper.addChild(seaWaveContainer);
            animationWrapper.addChild(winterContainer);
            animationWrapper.addChild(autumnContainer);
            animationWrapper.addChild(summerContainer);
            animationWrapper.addChild(springContainer);
            animationWrapper.addChild(defaultContainer);

            var durationPosition = .5;
            var durationAppear = .4;
            var delay = '+=1';
            openingTimeline
                .to(defaultContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut}, '+=1')
                .to(defaultContainer, durationPosition, {x: LEFT_1, y: TOP_1, ease: Circ.easeOut}, delay)
                .to(springContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(springContainer, durationPosition, {x: LEFT_2, y: TOP_1, ease: Circ.easeOut}, delay)
                .to(summerContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(summerContainer, durationPosition, {x: LEFT_3, y: TOP_1, ease: Circ.easeOut}, delay)
                .to(autumnContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(autumnContainer, durationPosition, {x: LEFT_1, y: TOP_2, ease: Circ.easeOut}, delay)
                .to(winterContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(winterContainer, durationPosition, {x: LEFT_3, y: TOP_2, ease: Circ.easeOut}, delay)
                .to(seaWaveContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(seaWaveContainer, durationPosition, {x: LEFT_1, y: TOP_3, ease: Circ.easeOut}, delay)
                .to(seaContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(seaContainer, durationPosition, {x: LEFT_2, y: TOP_3, ease: Circ.easeOut}, delay)
                .to(desertGroundContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(desertGroundContainer, durationPosition, {x: LEFT_3, y: TOP_3, ease: Circ.easeOut}, delay)
                .to(iceContainer, durationAppear, {scaleX: 1, scaleY: 1, ease: Circ.easeOut})
                .to(iceContainer, durationPosition, {x: LEFT_2, y: TOP_2, ease: Circ.easeOut}, delay)
                .to(containers, durationPosition, {scaleX: 0, scaleY: 0, ease: Circ.easeOut}, '+=.4')

            return openingTimeline;
        }

        function getFlowerToDesertTimeline() {
            var flowerToDesertTimeline = new TimelineMax({
                autoRemoveChildren: false
            });

            var flowerObjs = getFlowerTimeline(LEFT_2, TOP_2);
            var flowerTimeline = flowerObjs[0];
            var flowerContainer = flowerObjs[1];

            var treeObjs = getTreeTimeline(LEFT_4, TOP_2);
            var treeTimeline = treeObjs[0];
            var treeContainer = treeObjs[1];

            var transitionTimeline = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline
                .add('transition')
                .to(flowerContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition')
                .to(treeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition');

            var springObjs = getSpringTimeline(0, 0);
            var springTimeline = springObjs[0];
            var springContainer = springObjs[1];

            var summerObjs = getSummerTimeline(0, 0);
            var summerTimeline = summerObjs[0];
            var summerContainer = summerObjs[1];

            var autumnObjs = getAutumnTimeline(0, 0);
            var autumnTimeline = autumnObjs[0];
            var autumnContainer = autumnObjs[1];

            var winterObjs = getWinterTimeline(0, 0);
            var winterTimeline = winterObjs[0];
            var winterContainer = winterObjs[1];

            treeContainer.addChildAt(springContainer, 0);
            treeContainer.addChildAt(summerContainer, 0);
            treeContainer.addChildAt(autumnContainer, 0);
            treeContainer.addChildAt(winterContainer, 0);

            var dist = 1.5 * CIRCLE_RADIUS;
            var subContainerDuration = .7;

            var transitionSeasonTimeline = new TimelineMax({autoRemoveChildren: false});
            transitionSeasonTimeline
                .add('transition1', '+=1')
                .to(springContainer, subContainerDuration, {
                    x: -dist,
                    y: -dist,
                    delay: subContainerDuration,
                    ease: Power3.easeIn
                }, 'transition1')
                .to(summerContainer, subContainerDuration, {
                    x: dist,
                    y: -dist,
                    delay: 1.5 * subContainerDuration,
                    ease: Power3.easeIn
                }, 'transition1')
                .to(autumnContainer, subContainerDuration, {
                    x: -dist,
                    y: dist,
                    delay: 2 * subContainerDuration,
                    ease: Power3.easeIn
                }, 'transition1')
                .to(winterContainer, subContainerDuration, {
                    x: dist,
                    y: dist,
                    delay: 2.5 * subContainerDuration,
                    ease: Power3.easeIn
                }, 'transition1')
                .add('reverse', '+=1')
                .to(springContainer, .3, {
                    x: 0,
                    y: 0,
                    ease: Power3.easeOut
                }, 'reverse')
                .to(summerContainer, .3, {
                    x: 0,
                    y: 0,
                    ease: Power3.easeOut
                }, 'reverse')
                .to(autumnContainer, .3, {
                    x: 0,
                    y: 0,
                    ease: Power3.easeOut
                }, 'reverse')
                .to(winterContainer, .3, {
                    x: 0,
                    y: 0,
                    ease: Power3.easeOut,
                    onComplete: function () {
                        // remove all seasons' animation
                        springTimeline.stop();
                        summerTimeline.stop();
                        autumnTimeline.stop();
                        winterTimeline.stop();
                    }
                }, 'reverse')
            ;

            var catObjs = getCatTimeline(LEFT_4, TOP_2);
            var catTimeline = catObjs[0];
            var catContainer = catObjs[1];

            var transitionTimeline2 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline2
                .add('transition')
                .to(treeContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition')
                .to(catContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition');

            var turtleObjs = getTurtleTimeline(LEFT_4, TOP_2);
            var turtleTimeline = turtleObjs[0];
            var turtleContainer = turtleObjs[1];
            var turtleWrapper = turtleObjs[2];

            var transitionTimeline3 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline3
                .add('transition3')
                .to(catContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition3')
                .to(turtleContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition3');

            var skyContainer = new createjs.Container();
//    skyContainer.x = LEFT_2;
//    skyContainer.y = TOP_NEG1;
//    skyContainer.alpha = 0;
            var sky = new createjs.Shape();
            sky.graphics.beginFill('lightBlue')
                .drawCircle(0, 0, CIRCLE_RADIUS);
            skyContainer.addChild(sky);

            var cloudObjs1 = getCloudTimeline(LEFT_1, TOP_0);
            var cloudContainer1 = cloudObjs1[1];
            var cloudObjs2 = getCloudTimeline(LEFT_3, TOP_NEG1);
            var cloudContainer2 = cloudObjs2[1];

            var turtleFloatTimeline = new TimelineMax({autoRemoveChildren: false});
            turtleFloatTimeline
                .to(turtleWrapper, .44, {y: "-=5", ease: Sine.easeOut})
                .to(turtleWrapper, .44, {y: "+=5", ease: Sine.easeIn})
                .to(turtleWrapper, .44, {y: "+=2.5", ease: Sine.easeOut})
                .to(turtleWrapper, .44, {y: "-=2.5", ease: Sine.easeIn})
                .to(turtleWrapper, .44, {y: "-=5", ease: Sine.easeOut})
                .to(turtleWrapper, .44, {y: "+=5", ease: Sine.easeIn})
                .to(turtleWrapper, .44, {y: "+=2.5", ease: Sine.easeOut})
                .to(turtleWrapper, .44, {y: "-=2.5", ease: Sine.easeIn})
                .to(turtleWrapper, .44, {y: "-=5", ease: Sine.easeOut})
                .to(turtleWrapper, .44, {y: "+=5", ease: Sine.easeIn});

            var transitionTimeline4 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline4
                .add('transition4')
                .set(turtleContainer, {x: LEFT_4, y: TOP_2})
                .set(turtleWrapper, {y: 0})
                .set(skyContainer, {alpha: 0, x: LEFT_2, y: TOP_NEG1}, 'transition4')
                .to(turtleContainer, 1, {y: TOP_4}, 'transition4')
                .to(turtleWrapper, 1, {y: -(TOP_4 - TOP_2)}, 'transition4')
                .add(turtleFloatTimeline, 'transition4+1')
                .to(skyContainer, .01, {y: TOP_2, alpha: 1}, 'transition4')
                .to(cloudContainer1, 2, {y: TOP_5}, 'transition4')
                .to(cloudContainer2, 2.4, {y: TOP_4}, 'transition4');

            var roofTopObjs = getRoofTopTimeline(LEFT_4, TOP_3);
            var roofTopContainer = roofTopObjs[1];

            var cloudObjs3 = getCloudTimeline(LEFT_4, TOP_1);
            var cloudContainer3 = cloudObjs3[1];

            var transitionTimeline5 = new TimelineMax({autoRemoveChildren: false});

            transitionTimeline5
                .add('transition5')
                .to(cloudContainer3, 3, {x: LEFT_2}, 'transition5')
                .to(roofTopContainer, 2.8, {x: LEFT_0}, 'transition5');

            var seaWaveContainer = getSeaWaveContainer(LEFT_2, TOP_5);

            var seaObjs = getSeaTimeline(LEFT_1, TOP_5);
            var seaContainer = seaObjs[1];

            var transitionTimeline6 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline6
                .add('transition6')
                .to(cloudContainer3, .5, {y: TOP_NEG1, ease: Circ.easeOut}, 'transition6')
                .to(skyContainer, .5, {y: TOP_0, ease: Circ.easeOut}, 'transition6')
                .to(seaWaveContainer, .5, {y: TOP_2, ease: Circ.easeOut}, 'transition6')
                .to(seaContainer, .5, {y: TOP_3, ease: Circ.easeOut}, 'transition6')
                .add(function () {
                    var balloonWrapper = turtleWrapper.getChildAt(0);
                    skyContainer.addChild(balloonWrapper);
                    turtleWrapper.removeChild(balloonWrapper);
                }, 'transition6')
                .add('turtleGone', '+=0')
                .to(turtleWrapper, 1.2, {y: "+=" + CIRCLE_RADIUS / 2, alpha: 0}, 'turtleGone')
                .to(seaWaveContainer, 1.2, {alpha: 0, ease: Circ.easeOut}, 'turtleGone+=1')
            ;

            var fishObjs = getFishTimeline(LEFT_4, TOP_2);
            var fishContainer = fishObjs[1];

            var cactusObjs = getCactusTimeline(LEFT_2, TOP_1);
            var cactusTimeline = cactusObjs[0];
            var cactusContainer = cactusObjs[1];

            var cactusObjs2 = getCactusTimeline(LEFT_2, TOP_1);
            var cactusTimeline2 = cactusObjs2[0];
            var cactusContainer2 = cactusObjs2[1];
            var cactusFlowerWrapper2 = cactusObjs2[2];
            var cactusCactusWrapper2 = cactusObjs2[3];

            var transitionTimeline7 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline7
                .add('transition7')
                .to(fishContainer, 8.8, {x: LEFT_0, startAt: {x: LEFT_4}}, 'transition7')
                .to(cactusContainer, .5, {scaleX: 0, scaleY: 0, ease: Power2.easeOut })
                .add('transition7b', '+=0.5')
                .to(fishContainer, 8.8, {x: LEFT_4, startAt: {x: LEFT_0, scaleX: -1}}, 'transition7b')
                .add(cactusTimeline, 'transition7+=5')
                .add(cactusTimeline2, 'transition7b+=5')
            ;

            var overlayContainer = new createjs.Container();
            overlayContainer.x = 0;
            overlayContainer.y = 0;
            var overlay = new createjs.Shape();
            overlay.alpha = 0;
            overlay.graphics.beginFill('black').rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            overlayContainer.addChild(overlay);

            var desertGroundObj1 = getDesertGroundTimeline(LEFT_1, TOP_2);
            var desertGroundTimeline1 = desertGroundObj1[0];
            var desertGroundContainer1 = desertGroundObj1[1];

            var desertGroundObj2 = getDesertGroundTimeline(LEFT_3, TOP_2);
            var desertGroundTimeline2 = desertGroundObj2[0];
            var desertGroundContainer2 = desertGroundObj2[1];

            var desertContainer1 = getDesertContainer(LEFT_1, TOP_3);
            var desertContainer2 = getDesertContainer(LEFT_3, TOP_3);

            var desertFaceObjs = getDesertFaceTimeline(LEFT_2, TOP_3);
            var desertFaceTimeline = desertFaceObjs[0];
            var desertFaceContainer = desertFaceObjs[1];

            desertGroundContainer1.scaleX = desertGroundContainer1.scaleY
                = desertGroundContainer1.scaleX = desertGroundContainer2.scaleY
                = desertContainer1.scaleX = desertContainer1.scaleY
                = desertContainer2.scaleX = desertContainer2.scaleY
                = desertFaceContainer.scaleX = desertFaceContainer.scaleY
                = 0;

            var hearts = [];
            for (var i = 1; i <= 25; i++) {
                var heartContainer = getHeartContainer(_random(10, 310), TOP_0 - _random(0, CIRCLE_RADIUS));
                heartContainer.alpha = .8;
                hearts.push(heartContainer);
            }

            var transitionTimeline8 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline8
                .add('transition8')
                .set([desertGroundContainer1, desertGroundContainer2, desertContainer1, desertContainer2, desertFaceContainer], {scaleX: 0, scaleY: 0})
                .to(seaContainer, .5, {y: TOP_4}, 'transition8')
                .to(cactusContainer2, .5, {y: TOP_2}, 'transition8')
                .add('overlay')
                .add(function () {
                    cactusCactusWrapper2.removeChild(cactusFlowerWrapper2);
                    cactusFlowerWrapper2.x += LEFT_2;
                    cactusFlowerWrapper2.y += TOP_2;
                    overlayContainer.addChild(cactusFlowerWrapper2);
                }, 'overlay')
                .to(overlay, .5, {alpha: .6, startAt: {alpha: 0}}, 'overlay')
                .to(cactusFlowerWrapper2, 1.2, {x: LEFT_2, y: TOP_2, scaleX: 3, scaleY: 3, ease: Power3.easeIn}, 'overlay')
                .add(new TimelineMax({delay: .6, autoRemoveChildren: false})
                    .to(cactusFlowerWrapper2, .3, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
                    .to(cactusFlowerWrapper2, .26, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2})
                    .to(cactusFlowerWrapper2, .22, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
                    .to(cactusFlowerWrapper2, .18, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2})
                    .to(cactusFlowerWrapper2, .14, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
                    .to(cactusFlowerWrapper2, .1, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2})
                    .to(cactusFlowerWrapper2, .06, {scaleX: -3, y: "-=" + CIRCLE_RADIUS / 2})
                    .to(cactusFlowerWrapper2, .02, {scaleX: 3, y: "-=" + CIRCLE_RADIUS / 2}))
                .add('overlayend', '+=3.5')
                .add('desert', '+=4')
                .to(hearts, 16, {y: "+=" + (CIRCLE_DIAMETER + CIRCLE_DIAMETER + CIRCLE_DIAMETER)})
                .to(hearts, 2, {alpha: 0}, '-=2')
                .to(overlay, .5, {alpha: 0}, 'overlayend')
                .to([desertGroundContainer1, desertGroundContainer2], .6, {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(2)}, 'desert')
                .to([desertContainer1, desertContainer2, desertFaceContainer], .6, {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(2)}, 'desert+=1')
                .add(desertFaceTimeline, 'desert+=2')
                .add(desertGroundTimeline1, 'desert+=7.3')
                .add(desertGroundTimeline2, 'desert+=7.3')
            ;

            var transitionTimeline9 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline9
                .add('transition9')
                .to([desertGroundContainer1, desertGroundContainer2, cactusContainer2, desertContainer1, desertContainer2, desertFaceContainer],
                .5, {x: "-=" + ((CIRCLE_DIAMETER + SPACING) * 3), ease: Circ.easeOut}, 'transition9')

            animationWrapper.addChild(flowerContainer);
            animationWrapper.addChild(treeContainer);
            animationWrapper.addChild(catContainer);
            animationWrapper.addChild(turtleContainer);
            animationWrapper.addChildAt(skyContainer, animationWrapper.getNumChildren() - 1);
            animationWrapper.addChild(cloudContainer1);
            animationWrapper.addChild(cloudContainer2);
            animationWrapper.addChild(cloudContainer3);
            animationWrapper.addChild(roofTopContainer);
            animationWrapper.addChildAt(seaWaveContainer, 0);
            animationWrapper.addChild(seaContainer);
            animationWrapper.addChild(fishContainer);
            animationWrapper.addChild(cactusContainer);
            animationWrapper.addChild(cactusContainer2);
            animationWrapper.addChild(overlayContainer);
            animationWrapper.addChild(desertGroundContainer1);
            animationWrapper.addChild(desertGroundContainer2);
            animationWrapper.addChild(desertContainer1);
            animationWrapper.addChild(desertContainer2);
            animationWrapper.addChild(desertFaceContainer);
            hearts.forEach(function (heartContainer) {
                animationWrapper.addChild(heartContainer);
            });

            flowerToDesertTimeline
                .add('flower')
                .add(flowerTimeline)
                .add(transitionTimeline, '+=0.4')
                .add('tree')
                .add(treeTimeline, 'tree')
                .add(transitionSeasonTimeline, 'tree')
                .add(transitionTimeline2)
                .add(catTimeline, '-=.3')
                .add(transitionTimeline3)
                .add(turtleTimeline, '+=.4')
                .add('tran5', '+=2.5')
                .add(transitionTimeline4, '+=.1')
                .add(transitionTimeline5, 'tran5')
                .add(transitionTimeline6)
                .add('fish')
                .add('desert', '+=18.1')
                .add('desertend', 'desert+=19.58')
                .add(transitionTimeline7, 'fish')
                .add(transitionTimeline8, 'desert')
                .add(transitionTimeline9, 'desertend+=0.4')
            ;

            return flowerToDesertTimeline;
        }

        function getIceWorldTimeline() {
            var jackalopeObjs = getJackalopeTimeline(LEFT_4, TOP_2);
            var jackalopeContainer = jackalopeObjs[1];

            var transitionTimeline9b = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline9b
                .add('transition9b')
                .to(jackalopeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition9b');

            var yetiObjs = getYetiTimeline(LEFT_4, TOP_2);
            var yetiContainer = yetiObjs[1];
            var yetiObjs2 = getYetiTimeline(LEFT_0, TOP_2);
            var yetiContainer2 = yetiObjs2[1];

            var transitionTimeline10 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline10
                .add('transition10')
                .to(jackalopeContainer, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition10')
                .to(yetiContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition10');

            var transitionTimeline11 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline11
                .add('transition11')
                .to(yetiContainer, 3, {x: LEFT_4}, 'transition11')
                .to(yetiContainer2, 3, {x: LEFT_2}, '-=1.5');

            var seaMonsterObjs = getSeaMonsterTimeline(LEFT_4, TOP_2);
            var seaMonsterTimeline = seaMonsterObjs[0];
            var seaMonsterContainer = seaMonsterObjs[1];

            var seaMonsterObjs2 = getSeaMonsterTimeline(LEFT_0, TOP_2);
            var seaMonsterContainer2 = seaMonsterObjs2[1];

            var transitionTimeline12 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline12
                .add('transition12')
                .to(yetiContainer2, .5, {x: LEFT_0}, 'transition12')
                .to(seaMonsterContainer, .5, {x: LEFT_2}, 'transition12');

            var sharkObjs = getSharkTimeline(LEFT_3, TOP_2);
            var sharkContainer = sharkObjs[1];
            var sharkObjs2 = getSharkTimeline(LEFT_1, TOP_2);
            var sharkContainer2 = sharkObjs2[1];

            var transitionTimeline13 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline13
                .add('transition13')
                .set([sharkContainer, sharkContainer2], {scaleX: 0, scaleY: 0})
                .to(seaMonsterContainer, 1.2, {x: LEFT_4}, 'transition13')
                .to(seaMonsterContainer2, 1.2, {x: LEFT_2}, 'transition13+=0.6')
                .to(sharkContainer, .2, {scaleX: 1, scaleY: 1, ease: Circ.easeIn}, 'transition13+=.9')
                .to(sharkContainer2, .2, {scaleX: 1, scaleY: 1, ease: Circ.easeIn}, 'transition13+=1.5');

            var snakeObjs = getSnakeTimeline(LEFT_4, TOP_2);
            var snakeTimeline = snakeObjs[0];
            var snakeContainer = snakeObjs[1];

            var transitionTimeline14 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline14
                .add('transition14')
                .to(seaMonsterContainer2, .5, {x: LEFT_0, ease: Circ.easeOut}, 'transition14')
                .to([sharkContainer, sharkContainer2], .01, {alpha: 0}, 'transition14')
                .to(snakeContainer, .5, {x: LEFT_2, ease: Circ.easeOut}, 'transition14');

            var hugObjs = getHugTimeline(LEFT_2, TOP_1);
            var hugContainer = hugObjs[1];
            var hugEyesWrapper = hugObjs[2];
            var hugNobitaWrapper = hugObjs[3];
            var hugDeadEyesWrapper = hugObjs[4];
            hugContainer.scaleX = hugContainer.scaleY = 0;

            var transitionTimeline15 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline15
                .add('transition15')
                .set(hugContainer, {scaleX: 0, scaleY: 0})
                .to(hugContainer, 1, {scaleX: 1, scaleY: 1, ease: Back.easeOut.config(2)});

            var cactusObjs3 = getCactusTimeline(LEFT_4, TOP_2);
            var cactusContainer3 = cactusObjs3[1];
            var cactusFlowerWrapper3 = cactusObjs3[2];
            var cactusCactusWrapper3 = cactusObjs3[3];

            var questionObjs = getQuestionTimeline(LEFT_3, TOP_1);
            var questionTimeline = questionObjs[0];
            var questionContainer = questionObjs[1];
            questionContainer.scaleX = questionContainer.scaleY = 0;

            var transitionTimeline16 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline16
                .add('transition16')
                .to(snakeContainer, .5, {x: LEFT_1}, 'transition16')
                .to(hugContainer, .5, {x: LEFT_1}, 'transition16')
                .to(cactusContainer3, .5, {x: LEFT_3}, 'transition16')
                .to(questionContainer, .5, {scaleX: 1, scaleY: 1, ease: Power1.easeOut}, '+=1.2')

            var spikeObjs = getSpikeTimeline(LEFT_3, TOP_1);
            var spikeTimeline = spikeObjs[0];
            var spikeContainer = spikeObjs[1];
            var knifeSets = spikeObjs[2];
            var knifeSet1 = knifeSets[0];
            var knifeSet2 = knifeSets[1];
            var knifeSet3 = knifeSets[2];
            var knifeSet4 = knifeSets[3];
            var knifeSet5 = knifeSets[4];
            var knifeSet6 = knifeSets[5];
            var knifeSet7 = knifeSets[6];
            spikeContainer.scaleX = spikeContainer.scaleY = 0

            var transitionTimeline17 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline17
                .add('transition17')
                .to(spikeContainer, .5, {scaleX: 1, scaleY: 1, ease: Power1.easeOut})
                .set(questionContainer, {alpha: 0})
                .add(spikeTimeline, '+=0.1')
                .add('knife')
                .to(knifeSet1, 1, {x: '-=200'}, 'knife')
                .set(knifeSet1, {alpha: 0})
                .set(hugEyesWrapper, {alpha: 0})
                .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
                .set(hugDeadEyesWrapper, {alpha: 1})
                .to(knifeSet2, 1 / 200 * 212, {x: '-=212'}, 'knife+=.2')
                .set(knifeSet2, {alpha: 0})
                .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
                .to(knifeSet3, 1 / 200 * 224, {x: '-=224'}, 'knife+=.4')
                .set(knifeSet3, {alpha: 0})
                .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
                .to(knifeSet4, 1 / 200 * 236, {x: '-=236'}, 'knife+=.6')
                .set(knifeSet4, {alpha: 0})
                .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
                .to(knifeSet5, 1 / 200 * 248, {x: '-=248'}, 'knife+=.8')
                .set(knifeSet5, {alpha: 0})
                .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
                .to(knifeSet6, 1 / 200 * 260, {x: '-=260'}, 'knife+=1')
                .set(knifeSet6, {alpha: 0})
                .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
                .to(knifeSet7, 1 / 200 * 272, {x: '-=272'}, 'knife+=1.2')
                .set(knifeSet7, {alpha: 0})
                .to(hugContainer, .1, {x: '-=15', ease: Back.easeOut.config(2)})
                .to(spikeContainer, .5, {scaleX: 0, scaleY: 0, ease: Power1.easeOut})
            ;

            var flowerEyeContainer = new createjs.Container();
            var transitionTimeline18 = new TimelineMax({autoRemoveChildren: false});
            transitionTimeline18
                .add('transition18')
                .add(function () {
                    cactusCactusWrapper3.removeChild(cactusFlowerWrapper3);
                    cactusFlowerWrapper3.x += LEFT_3;
                    cactusFlowerWrapper3.y += TOP_2;
                    flowerEyeContainer.addChild(cactusFlowerWrapper3);

                    hugNobitaWrapper.removeChild(hugEyesWrapper);
                    hugEyesWrapper.x += LEFT_2 + hugNobitaWrapper.x;
                    hugEyesWrapper.y += TOP_2 + hugNobitaWrapper.y;
                    flowerEyeContainer.addChild(hugEyesWrapper);
                })
                .to(cactusFlowerWrapper3, 1.2, {x: LEFT_2, y: TOP_2, scaleX: 5, scaleY: 5, ease: Power3.easeIn})
                .set(hugEyesWrapper, {alpha: 0, scaleX: 3.5, scaleY: 3.5})
                .to(hugEyesWrapper, 1, {x: LEFT_2 + hugNobitaWrapper.x,
                    y: TOP_2 + hugNobitaWrapper.y,
                    alpha: 1,
                    scaleX: 1.5,
                    scaleY: 1.5,
                    ease: Back.easeOut.config(1)}, '+=.4')
                .to([hugContainer, snakeContainer, spikeContainer, cactusContainer3, questionContainer, hugEyesWrapper, cactusFlowerWrapper3], .5, {
                    x: '-=' + (3 * (CIRCLE_DIAMETER + SPACING)), ease: Circ.easeOut}, '+=1')

            animationWrapper.addChild(jackalopeContainer);
            animationWrapper.addChild(yetiContainer);
            animationWrapper.addChild(yetiContainer2);
            animationWrapper.addChild(seaMonsterContainer);
            animationWrapper.addChild(seaMonsterContainer2);
            animationWrapper.addChild(sharkContainer);
            animationWrapper.addChild(sharkContainer2);
            animationWrapper.addChild(snakeContainer);
            animationWrapper.addChild(questionContainer);
            animationWrapper.addChild(spikeContainer);
            animationWrapper.addChild(hugContainer);
            animationWrapper.addChild(cactusContainer3);
            animationWrapper.addChild(flowerEyeContainer);

            var iceWorldTimeline = new TimelineMax({
                autoRemoveChildren: false
            });
            iceWorldTimeline
                .add('iceWorld')
                .add(transitionTimeline9b)
                .add(transitionTimeline10, '+=1.5')
                .add(transitionTimeline11, '+=2')
                .add(transitionTimeline12, '+=2')
                .add(seaMonsterTimeline)
                .add(transitionTimeline13, '+=1.5')
                .add(transitionTimeline14, '+=2.2')
                .add(snakeTimeline)
                .add(transitionTimeline15, '+=.4')
                .add(transitionTimeline16, '+=1')
                .add(questionTimeline)
                .add(transitionTimeline17, '+=1.8')
                .add(transitionTimeline18, '+=.24')
            ;

            return iceWorldTimeline;
        }

        function getEndingTimeline() {
            var endingTimeline = new TimelineMax({
                autoRemoveChildren: false,
                onStart: function () {
                    ga('send', 'event', 'Ending', 'start', 'Ending Start', {
                        nonInteraction: true
                    });
                }
            });

            var catObjs = getEndCatTimeline(LEFT_4, TOP_2);
            var catContainer = catObjs[1];

            var balloonObjs = getEndBalloonTimeline(LEFT_4, TOP_2);
            var balloonContainer = balloonObjs[1];

            var seaObjs = getEndSeaTimeline(LEFT_4, TOP_2);
            var seaContainer = seaObjs[1];

            var endCactusObjs = getEndCactusTimeline(LEFT_4, TOP_2);
            var endCactusContainer = endCactusObjs[1];

            var yetiObjs = getEndYetiTimeline(LEFT_4, TOP_2);
            var yetiContainer = yetiObjs[1];

            var seaMonsterObjs = getEndSeaMonsterTimeline(LEFT_4, TOP_2);
            var seaMonsterContainer = seaMonsterObjs[1];

            var containers = [catContainer, balloonContainer, seaContainer, endCactusContainer, yetiContainer, seaMonsterContainer];

            containers.forEach(function (container) {
                animationWrapper.addChild(container);
            });

            var tContainer = getTContainer(LEFT_1, TOP_1);
            var hContainer = getHContainer(LEFT_2, TOP_1);
            var eContainer = getEContainer(LEFT_3, TOP_1);
            var eContainer2 = getEContainer(LEFT_1, TOP_3);
            var nContainer = getNContainer(LEFT_2, TOP_3);
            var dContainer = getDContainer(LEFT_3, TOP_3);
            var theEndContainers = [tContainer, hContainer, eContainer, eContainer2, nContainer, dContainer];

            theEndContainers.forEach(function (container) {
                animationWrapper.addChild(container);
            });

            endingTimeline
                .set(theEndContainers, {scaleX: 0, scaleY: 0})
                .to(theEndContainers, 1, {scaleX: 1, scaleY: 1})
            ;

            for (var i = 0; i < containers.length; i++) {
                var container = containers[i];
                endingTimeline
                    .to(container, 2 * containers.length, {x: LEFT_0}, 'end+=' + (2 * containers.length / 4 * i));
            }

            return endingTimeline;
        }

        var openingTimeline = getOpeningTimeline();
        var flowerToDesertTimeline = getFlowerToDesertTimeline();
        var iceWorldTimeline = getIceWorldTimeline();
        var flowerToDesertTimeline2 = getFlowerToDesertTimeline();
        var endingTimeline = getEndingTimeline();

        mainTimeline
            .add(openingTimeline)
            .add(flowerToDesertTimeline)
            .add('flowerToDesertEnd')
            .add(iceWorldTimeline, 'flowerToDesertEnd-=.5')
            .add(flowerToDesertTimeline2)
            .add(endingTimeline);

        mainTimeline.play(START_TIME, false);
        if (popCanPlay && pop) {
            pop.play(START_TIME);
        }
    }

    function renderGalleryPage() {
        if (!galleryPageWrapper) {
            galleryPageWrapper = new createjs.Container();
        }
        if (galleryPageWrapper.parent != stage) {
            stage.addChild(galleryPageWrapper);
        }
        galleryPageWrapper.removeAllChildren();
        galleryTimelines.forEach(function (timeline) {
            timeline.remove();
        });

        _renderGallery();
        _renderBtnPrev();
        _renderBtnHome();
        _renderBtnNext();
    }

    function renderInfo() {
        var profilePic = document.getElementById('profile-pic');
        profilePic.style.display = 'block';

        if (!infoWrapper) {
            infoWrapper = new createjs.Container();
            infoWrapper.setBounds(100, 100, CANVAS_WIDTH - 30, CANVAS_HEIGHT - 30);
            infoWrapper.cursor = 'auto';
        }
        if (infoWrapper.parent != stage) {
            stage.addChild(infoWrapper);
        }
        infoWrapper.removeAllChildren();

        var background = new createjs.Shape();
        var outerSize = 15;
        background.graphics.beginFill('#BBE3FA').drawRoundRect(outerSize, outerSize, CANVAS_WIDTH - 2 * outerSize, CANVAS_HEIGHT - 2 * outerSize, outerSize, outerSize, outerSize, outerSize);
        infoWrapper.addChild(background);

        var btnCloseWrapper = new createjs.Container();
        var btnClose = new createjs.Shape();
        btnClose.rotation = 45;
        btnClose.graphics.beginFill('#999999')
            .drawRoundRect(0, 0 + 28 / 2 - 6 / 2, 28, 6, 3, 3, 3, 3)
            .drawRoundRect(0 + 28 / 2 - 6 / 2, 0, 6, 28, 3, 3, 3, 3);
        btnCloseWrapper.addChild(btnClose);
        btnCloseWrapper.x = 275;
        btnCloseWrapper.y = 20;
        btnCloseWrapper.cursor = 'pointer';
        btnCloseWrapper.addEventListener('click', function () {
            stage.removeChild(infoWrapper);
            profilePic.style.display = 'none';
        });
        infoWrapper.addChild(btnCloseWrapper);

        var mainText = new createjs.Text('This is a short animation based on the song Tree Hugger.\nThe song is performed by Kimya Dawson And Antsy Pants and appears on the album Juno (2008).', '16px Happy Monkey', '#000');
        mainText.x = CANVAS_WIDTH / 2;
        mainText.y = 60;
        mainText.lineWidth = CANVAS_WIDTH - 4 * outerSize;
        mainText.lineHeight = 24
        mainText.textAlign = 'center'
        infoWrapper.addChild(mainText);

        var footerText = new createjs.Text('Made with \'\'\nby Wei Seng', '14px Happy Monkey', '#000');
        footerText.x = CANVAS_WIDTH / 2;
        footerText.y = 239.5;
        footerText.lineWidth = CANVAS_WIDTH - 4 * outerSize;
        footerText.lineHeight = 20
        footerText.textAlign = 'center'
        infoWrapper.addChild(footerText);

        var heart = getHeartContainer(202, 248);
        infoWrapper.addChild(heart);
    }

    function _renderGallery() {
        ga('send', 'event', 'Gallery', 'show', 'Show Gallery Page ' + currentPage);
        TweenMax.killAll();

        if (!galleryWrapper) {
            galleryWrapper = new createjs.Container();
        }
        if (galleryWrapper.parent != galleryPageWrapper) {
            galleryPageWrapper.addChild(galleryWrapper);
        }
        galleryWrapper.removeAllChildren();
        galleryTimelines.forEach(function (timeline) {
            timeline.remove();
        });

        switch (currentPage) {
            case 1:
                var flowerObjs = getFlowerTimeline(LEFT_1, TOP_1);
                _processTimelineObjs(flowerObjs);

                var treeObjs = getTreeTimeline(LEFT_2, TOP_1);
                _processTimelineObjs(treeObjs);

                var springObjs = getSpringTimeline(LEFT_3, TOP_1);
                _processTimelineObjs(springObjs);

                var summerObjs = getSummerTimeline(LEFT_1, TOP_2);
                _processTimelineObjs(summerObjs);

                var autumnObjs = getAutumnTimeline(LEFT_2, TOP_2);
                _processTimelineObjs(autumnObjs);

                var winterObjs = getWinterTimeline(LEFT_3, TOP_2);
                _processTimelineObjs(winterObjs);

                break;
            case 2:
                var catObjs = getCatTimeline(LEFT_1, TOP_1);
                _processTimelineObjs(catObjs);

                var turtleObjs = getTurtleTimeline(LEFT_2, TOP_1);
                _processTimelineObjs(turtleObjs);

                var cloudObjs = getCloudTimeline(LEFT_3, TOP_1);
                _processTimelineObjs(cloudObjs);

                var roofTopObjs = getRoofTopTimeline(LEFT_1, TOP_2);
                _processTimelineObjs(roofTopObjs);

                var seaObjs = getSeaTimeline(LEFT_2, TOP_2);
                _processTimelineObjs(seaObjs);

                var fishObjs = getFishTimeline(LEFT_3, TOP_2);
                _processTimelineObjs(fishObjs);

                break;
            case 3:
                var cactusObjs = getCactusTimeline(LEFT_1, TOP_1);
                _processTimelineObjs(cactusObjs);

                var desertFaceObjs = getDesertFaceTimeline(LEFT_2, TOP_1);
                _processTimelineObjs(desertFaceObjs);

                var desertGroundObjs = getDesertGroundTimeline(LEFT_3, TOP_1);
                _processTimelineObjs(desertGroundObjs);

                var jackalopeObjs = getJackalopeTimeline(LEFT_1, TOP_2);
                _processTimelineObjs(jackalopeObjs);

                var yetiObjs = getYetiTimeline(LEFT_2, TOP_2);
                _processTimelineObjs(yetiObjs);

                var seaMonsterObjs = getSeaMonsterTimeline(LEFT_3, TOP_2);
                _processTimelineObjs(seaMonsterObjs);

                break;
            case 4:
                var sharkObjs = getSharkTimeline(LEFT_1, TOP_1);
                _processTimelineObjs(sharkObjs);

                var snakeObjs = getSnakeTimeline(LEFT_2, TOP_1);
                _processTimelineObjs(snakeObjs);

                var hugObjs = getHugTimeline(LEFT_3, TOP_1);
                _processTimelineObjs(hugObjs);

                var questionObjs = getQuestionTimeline(LEFT_1, TOP_2);
                _processTimelineObjs(questionObjs);

                var spikeObjs = getSpikeTimeline(LEFT_2, TOP_2);
                _processTimelineObjs(spikeObjs);

                break;
            case 5:
                var catObjs = getEndCatTimeline(LEFT_1, TOP_1);
                _processTimelineObjs(catObjs);

                var balloonObjs = getEndBalloonTimeline(LEFT_2, TOP_1);
                _processTimelineObjs(balloonObjs);

                var seaObjs = getEndSeaTimeline(LEFT_3, TOP_1);
                _processTimelineObjs(seaObjs);

                var endCactusObjs = getEndCactusTimeline(LEFT_1, TOP_2);
                _processTimelineObjs(endCactusObjs);

                var yetiObjs = getEndYetiTimeline(LEFT_2, TOP_2);
                _processTimelineObjs(yetiObjs);

                var seaMonsterObjs = getEndSeaMonsterTimeline(LEFT_3, TOP_2);
                _processTimelineObjs(seaMonsterObjs);

                break;
            case 6:
                var t = getTContainer(LEFT_1, TOP_1);
                _processContainer(t);

                var h = getHContainer(LEFT_2, TOP_1);
                _processContainer(h);

                var e = getEContainer(LEFT_3, TOP_1);
                _processContainer(e);

                var e = getEContainer(LEFT_1, TOP_2);
                _processContainer(e);

                var n = getNContainer(LEFT_2, TOP_2);
                _processContainer(n);

                var d = getDContainer(LEFT_3, TOP_2);
                _processContainer(d);

                break;
            default:
                break;
        }

        function _processTimelineObjs(objs) {
            var timeline = objs[0];
            var container = objs[1];
            galleryWrapper.addChild(container);
            if (timeline) {
                timeline.eventCallback('onComplete', function () {
                    var self = this;
                    setTimeout(function () {
                        self.restart();
                    }, 500);
                });
                timeline.play();
                galleryTimelines.push(timeline);
            }
        }

        function _processContainer(container) {
            _processTimelineObjs([null, container]);
        }
    }

    function _renderBtnPrev() {
        var enabled = currentPage > 1;

        var btnPrevWrapper = new createjs.Container();
        btnPrevWrapper.x = LEFT_1;
        btnPrevWrapper.y = TOP_3;
        btnPrevWrapper.cursor = enabled ? 'pointer' : 'default';
        btnPrevWrapper.addEventListener('click', function () {
            if (enabled) {
                currentPage--;
                renderGalleryPage();
            }
        });

        var btnPrev = new createjs.Shape();
        btnPrev.graphics.beginFill(enabled ? COLOR_BUTTON_ENABLED : COLOR_BUTTON_DISABLED)
            .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
            .setStrokeStyle(4, "round", "round")
            .beginStroke(enabled ? COLOR_BUTTON_ENABLED_CONTENT : COLOR_BUTTON_DISABLED_CONTENT)
            .moveTo(6, -12)
            .lineTo(-12, 0)
            .lineTo(6, 12)
            .closePath()
            .endStroke()

        btnPrevWrapper.addChild(btnPrev);
        galleryPageWrapper.addChild(btnPrevWrapper);
    }

    function _renderBtnNext() {
        var enabled = currentPage < PAGE_SIZE;

        var btnNextWrapper = new createjs.Container();
        btnNextWrapper.x = LEFT_3;
        btnNextWrapper.y = TOP_3;
        btnNextWrapper.cursor = enabled ? 'pointer' : 'default';
        btnNextWrapper.addEventListener('click', function () {
            if (enabled) {
                currentPage++;
                renderGalleryPage();
            }
        });

        var btnNext = new createjs.Shape();
        btnNext.graphics.beginFill(enabled ? COLOR_BUTTON_ENABLED : COLOR_BUTTON_DISABLED)
            .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
            .setStrokeStyle(4, "round", "round")
            .beginStroke(enabled ? COLOR_BUTTON_ENABLED_CONTENT : COLOR_BUTTON_DISABLED_CONTENT)
            .moveTo(-6, -12)
            .lineTo(12, 0)
            .lineTo(-6, 12)
            .closePath()
            .endStroke();
        btnNextWrapper.addChild(btnNext);
        galleryPageWrapper.addChild(btnNextWrapper);
    }

    function _renderBtnHome() {
        var btnHomeWrapper = new createjs.Container();
        btnHomeWrapper.x = LEFT_2;
        btnHomeWrapper.y = TOP_3;
        btnHomeWrapper.cursor = 'pointer';
        btnHomeWrapper.addEventListener('click', function () {
            stage.removeChild(galleryPageWrapper);
            // reset to page 1
            currentPage = 1;
            renderMenu();
            galleryTimelines.forEach(function (timeline) {
                timeline.remove();
            });
        });

        var btnHome = new createjs.Shape();
        btnHome.graphics.beginFill(COLOR_BUTTON_ENABLED)
            .drawCircle(0, 0, CIRCLE_RADIUS_SMALL)
            .endFill()
            .setStrokeStyle(4, "round", "round")
            .beginStroke(COLOR_BUTTON_ENABLED_CONTENT)
            .moveTo(-9, -3)
            .lineTo(-9, 9)
            .lineTo(9, 9)
            .lineTo(9, -3)
            .lineTo(0, -10.5)
            .closePath();

        btnHomeWrapper.addChild(btnHome);
        galleryPageWrapper.addChild(btnHomeWrapper);
    }

    // Timelines
    function getFlowerTimeline(x, y) {
        var flowerTimeline = new TimelineMax({autoRemoveChildren: false});

        var container1 = new createjs.Container();
        container1.x = x;
        container1.y = y;

        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_GROUND);
        var segmentGroundCmd = segmentGround.graphics.arc(0, 0, CIRCLE_RADIUS, 90 * Math.PI / 180, 90 * Math.PI / 180).command;

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_SKY);
        var segmentSkyCmd = segmentSky.graphics.arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180).command;

        var flowerWrapper = new createjs.Container();
        flowerWrapper.y = -5;

        var flowerStem = new createjs.Shape();
        flowerStem.graphics.beginFill('green');
        var flowerStemCmd = flowerStem.graphics.rect(-2, 30, 4, 0).command;
        flowerWrapper.addChild(flowerStem);

        var flowerLeaves = new createjs.Shape();
        flowerLeaves.graphics.beginFill('green');
        var flowerLeavesCmd = flowerLeaves.graphics
            .drawEllipse(0, 18, 0, 6)
            .command;
        var flowerLeavesCmd2 = flowerLeaves.graphics
            .drawEllipse(0, 17, 0, 6)
            .command;
        flowerWrapper.addChild(flowerLeaves);

        var flower = new createjs.Shape();
        flower.graphics.beginFill('yellow');
        var flowerCmd = flower.graphics
            .drawCircle(0, 0, 0)
            .command;
        flowerWrapper.addChild(flower);

        var flowerEyes = new createjs.Shape();
        flowerEyes.graphics
            .beginFill('black')
            .drawCircle(-4, 0, 2)
            .endFill().beginFill('black')
            .drawCircle(4, 0, 2);
        flowerWrapper.addChild(flowerEyes);

        var petalColor = COLOR_FLOWER_PETAL;
        var petalRadius = 6;
        var petalDuration = .15;

        var petal1 = new createjs.Shape();
        petal1.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        flowerWrapper.addChildAt(petal1, 1); // add at index 1 as flowerStem should be at index 0

        var petal2 = new createjs.Shape();
        petal2.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        flowerWrapper.addChildAt(petal2, 1);

        var petal3 = new createjs.Shape();
        petal3.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        flowerWrapper.addChildAt(petal3, 1);

        var petal4 = new createjs.Shape();
        petal4.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        flowerWrapper.addChildAt(petal4, 1);

        var petal5 = new createjs.Shape();
        petal5.graphics.beginFill(petalColor).drawCircle(0, 0, petalRadius);
        flowerWrapper.addChildAt(petal5, 1);

        flowerTimeline
            .add('initial')
            .set(container1, {x: x, y: y})
            .set(segmentGroundCmd, {startAngle: 90 * Math.PI / 180, endAngle: 90 * Math.PI / 180}, 'initial')
            .set(segmentSky, {alpha: 0}, 'initial')
            .set(segmentSkyCmd, {startAngle: 30 * Math.PI / 180, endAngle: 150 * Math.PI / 180}, 'initial')
            .set(flowerStemCmd, {h: 0}, 'initial')
            .set(flowerCmd, {radius: 0}, 'initial')
            .set(flowerLeavesCmd, {w: 0}, 'initial')
            .set(flowerLeavesCmd2, {w: 0}, 'initial')
            .set(flowerEyes, {alpha: 0}, 'initial')
            .set(petal1, {alpha: 0, x: 0, y: 0}, 'initial')
            .set(petal2, {alpha: 0, x: 0, y: 0}, 'initial')
            .set(petal3, {alpha: 0, x: 0, y: 0}, 'initial')
            .set(petal4, {alpha: 0, x: 0, y: 0}, 'initial')
            .set(petal5, {alpha: 0, x: 0, y: 0}, 'initial')
            .to(segmentGroundCmd, .4, {startAngle: 30 * Math.PI / 180, endAngle: 150 * Math.PI / 180, ease: Power2.easeIn })
            .add("segmentGroundComplete")
            .add("flowerStemCmdComplete", "+=0.3")
            .add("flowerCmdComplete", "+=0.5")
            .set(segmentSky, {alpha: 1})
            .to(segmentSkyCmd, .55, {startAngle: -90 * Math.PI / 180, endAngle: 270 * Math.PI / 180, ease: Power2.easeOut }, "segmentGroundComplete")
            .to(flowerStemCmd, .3, { h: -30 }, "segmentGroundComplete")
            .to(flowerCmd, .2, {
                radius: 8,
                ease: Back.easeOut.config(2)
            }, "flowerStemCmdComplete")
            .to(flowerLeavesCmd, .2, {
                w: -10,
                ease: Back.easeOut.config(2)
            }, "flowerStemCmdComplete")
            .to(flowerLeavesCmd2, .2, {
                w: 10,
                ease: Back.easeOut.config(2)
            }, "flowerStemCmdComplete")
            .set([flowerEyes, petal1, petal2, petal3, petal4, petal5], {alpha: 1}, 'flowerCmdComplete')
            .to(petal1, petalDuration, {x: 0, y: -11, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
            .to(petal2, petalDuration, {x: 8, y: -4, delay: .5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
            .to(petal3, petalDuration, {x: 6, y: 7, delay: 1.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
            .to(petal4, petalDuration, {x: -6, y: 7, delay: 2.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete')
            .to(petal5, petalDuration, {x: -8, y: -4, delay: 3.5 * petalDuration, ease: Back.easeOut.config(1)}, 'flowerCmdComplete');

        container1.addChild(segmentSky);
        container1.addChild(segmentGround);
        container1.addChild(flowerWrapper);

        return [flowerTimeline, container1];
    }

    function getTreeTimeline(x, y) {
        var treeTimeline = new TimelineMax({autoRemoveChildren: false});

        var container = getDefaultContainer(x, y);

        var treeWrapper = new createjs.Container();
        container.addChild(treeWrapper);

        var trunk = new createjs.Shape();
        trunk.graphics.beginFill(COLOR_TREE_TRUNK);
        var trunkCmd = trunk.graphics
            .moveTo(-8, 25)
            .lineTo(8, 25)
            .lineTo(0, 25)
            .command;
        treeWrapper.addChild(trunk);

        var trunk2 = new createjs.Shape();
        trunk2.graphics.beginFill(COLOR_TREE_TRUNK);
        var trunkCmd2 = trunk2.graphics
            .rect(-3, 22, 6, 0)
            .command;
        treeWrapper.addChild(trunk2);

        var tree = new createjs.Shape();
        tree.graphics.beginFill(COLOR_TREE_LEAVES);
        var treeCmd = tree.graphics
            .drawEllipse(0, 0, 0, 0).command;

        treeWrapper.addChildAt(tree, 0);

        var fruit1 = new createjs.Shape();
        fruit1.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd1 = fruit1.graphics
            .drawCircle(-10, 8, 0)
            .command;
        treeWrapper.addChild(fruit1);

        var fruit2 = new createjs.Shape();
        fruit2.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd2 = fruit2.graphics
            .drawCircle(-5, 0, 0)
            .command;
        treeWrapper.addChild(fruit2);

        var fruit3 = new createjs.Shape();
        fruit3.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd3 = fruit3.graphics
            .drawCircle(0, 7, 0)
            .command;
        treeWrapper.addChild(fruit3);

        var fruit4 = new createjs.Shape();
        fruit4.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd4 = fruit4.graphics
            .drawCircle(5, 0, 0)
            .command;
        treeWrapper.addChild(fruit4);

        var fruit5 = new createjs.Shape();
        fruit5.graphics.beginFill(COLOR_TREE_FRUIT);
        var fruitCmd5 = fruit5.graphics
            .drawCircle(10, 8, 0)
            .command;
        treeWrapper.addChild(fruit5);

        treeTimeline
            .to(trunkCmd, .2, {y: 20, ease: Power2.easeIn})
            .to(trunkCmd2, .2, {h: -8, ease: Power2.easeOut})
            .to(treeCmd, .5, {
                x: -20,
                y: -30,
                w: 40,
                h: 46,
                ease: Back.easeOut.config(2)
            })
            .to(fruitCmd1, .2, {
                radius: 2,
                ease: Back.easeOut.config(2)
            })
            .to(fruitCmd2, .2, {
                radius: 2,
                ease: Back.easeOut.config(2)
            })
            .to(fruitCmd3, .2, {
                radius: 2,
                ease: Back.easeOut.config(2)
            })
            .to(fruitCmd4, .2, {
                radius: 2,
                ease: Back.easeOut.config(2)
            })
            .to(fruitCmd5, .2, {
                radius: 2,
                ease: Back.easeOut.config(2)
            });

        return [treeTimeline, container];
    }

    function getSpringTimeline(x, y) {
        var springTimeline = new TimelineMax({autoRemoveChildren: false});

        var springContainer = getSpringContainer(x, y);

        var treeWrapper = new createjs.Container();
        var trunk = new createjs.Shape();
        trunk.graphics.beginFill(COLOR_AUTUMN_TRUNK)
            .moveTo(-8, 25)
            .lineTo(8, 25)
            .lineTo(0, 22)
            .command;
        treeWrapper.addChild(trunk);

        var trunk2 = new createjs.Shape();
        trunk2.graphics.beginFill(COLOR_AUTUMN_TRUNK)
            .rect(-1.5, 24, 3, -8)
            .command;
        treeWrapper.addChild(trunk2);

        function getFlower() {
            var flowerRadius = 3;
            var flower = new createjs.Shape();
            flower.graphics.beginFill(COLOR_SPRING_FLOWER)
                .drawCircle(0, -4, flowerRadius)
                .endFill().beginFill(COLOR_SPRING_FLOWER)
                .drawCircle(-4, -1, flowerRadius)
                .endFill().beginFill(COLOR_SPRING_FLOWER)
                .drawCircle(-2, 3, flowerRadius)
                .endFill().beginFill(COLOR_SPRING_FLOWER)
                .drawCircle(2, 3, flowerRadius)
                .endFill().beginFill(COLOR_SPRING_FLOWER)
                .drawCircle(4, -1, flowerRadius)
            ;
            flower.scaleX = flower.scaleY = 0.5;
            flower.alpha = 0.5;
            return flower;
        }

        var flowerData = [
            {"x": -11.938537023961544, "y": 2.783802844583988},
            {"x": -11.927265889942646, "y": 9.444361511617899},
            {"x": -11.908187756314874, "y": 15.669426031410694},
            {"x": -11.884445546194911, "y": 15.978291761130095},
            {"x": -11.828536000102758, "y": 13.775821194052696},
            {"x": -11.765338394790888, "y": 6.619630008935928},
            {"x": -11.749858751893044, "y": 4.089133452624083},
            {"x": -11.706163482740521, "y": 14.17811505869031},
            {"x": -11.254682337865233, "y": 15.44297207519412},
            {"x": -11.048927541822195, "y": 12.44661495834589},
            {"x": -10.967076357454062, "y": 14.772557731717825},
            {"x": -10.935170805081725, "y": 17.23644670471549},
            {"x": -10.04281578026712, "y": 8.280355393886566},
            {"x": -9.944909105077386, "y": 12.697296872735023},
            {"x": -9.80447056889534, "y": 10.315777283161879},
            {"x": -9.410871030762792, "y": 5.995434891432524},
            {"x": -8.831381656229496, "y": 4.081501836888492},
            {"x": -8.720052799209952, "y": -6.400239520706236},
            {"x": -8.700306979939342, "y": 15.81250982079655},
            {"x": -8.417404739186168, "y": 1.3938065562397242},
            {"x": -8.162943748757243, "y": 3.7646389920264482},
            {"x": -8.124722801148891, "y": 4.0286423889920115},
            {"x": -8.076322199776769, "y": 10.677224477753043},
            {"x": -8.075654190033674, "y": -3.29717038013041},
            {"x": -7.9981082528829575, "y": -0.33519769087433815},
            {"x": -7.7350994925946, "y": -10.02721961401403},
            {"x": -7.673339696601033, "y": 2.1703998493030667},
            {"x": -7.633951351046562, "y": 16.830576333217323},
            {"x": -7.571625100448728, "y": 11.628769759088755},
            {"x": -7.543144399300218, "y": -2.5000903317704797},
            {"x": -7.497133461758494, "y": 9.167129065841436},
            {"x": -7.4449379704892635, "y": -8.10189295746386},
            {"x": -7.328179171308875, "y": 9.763174200430512},
            {"x": -7.186866642907262, "y": 15.310225867666304},
            {"x": -7.115949779748917, "y": -5.026154665276408},
            {"x": -7.071541596204042, "y": 3.097171552479267},
            {"x": -6.905940307304263, "y": -6.881847242824733},
            {"x": -6.816854372620583, "y": 9.606753626838326},
            {"x": -6.80012109875679, "y": 0.8055208120495081},
            {"x": -6.687659388408065, "y": 16.584031620062888},
            {"x": -6.671556729823351, "y": 16.111719668842852},
            {"x": -6.6248501390218735, "y": -9.881953099742532},
            {"x": -6.581895651295781, "y": 0.28699231520295143},
            {"x": -6.481142794713378, "y": -9.414711331948638},
            {"x": -6.122980780899525, "y": -5.583829181268811},
            {"x": -6.087604930624366, "y": 4.2597304889932275},
            {"x": -5.894475331529975, "y": 10.266325710341334},
            {"x": -5.8094714898616076, "y": 10.650253714062274},
            {"x": -5.717962576076388, "y": -0.5119897006079555},
            {"x": -5.608048506081104, "y": -8.052447931841016},
            {"x": -5.594603905454278, "y": -7.433836261741817},
            {"x": -5.5520655903965235, "y": -10.245244170539081},
            {"x": -5.414462769404054, "y": -2.88610874209553},
            {"x": -5.204577958211303, "y": -2.806847557425499},
            {"x": -4.99387345276773, "y": 1.8513455232605338},
            {"x": -4.958492746576667, "y": -8.72763638291508},
            {"x": -4.725881729274988, "y": 13.159698724746704},
            {"x": -4.704066552221775, "y": -10.42619652301073},
            {"x": -4.665494855493307, "y": -9.024285785853863},
            {"x": -4.625839959830046, "y": 10.41821093391627},
            {"x": -4.624952444806695, "y": 0.3477297844365239},
            {"x": -4.587925728410482, "y": -7.245869115926325},
            {"x": -4.583195278421044, "y": 12.863739998079836},
            {"x": -4.260875953361392, "y": 12.718063996173441},
            {"x": -4.248768579214811, "y": -6.005207773298025},
            {"x": -4.148109789937735, "y": 3.2473527593538165},
            {"x": -4.085978351533413, "y": 3.9081102460622787},
            {"x": -4.083788434043527, "y": -10.314791295677423},
            {"x": -3.96896655857563, "y": -1.885686301626265},
            {"x": -3.908116076141596, "y": -9.43749051913619},
            {"x": -3.8453271612524986, "y": -6.3129729479551315},
            {"x": -3.821425510570407, "y": -9.66183101106435},
            {"x": -3.6662942077964544, "y": 7.02500765863806},
            {"x": -3.291131492704153, "y": 8.415610247291625},
            {"x": -3.163777370005846, "y": -9.65953256841749},
            {"x": -3.157650461420417, "y": 12.183321869932115},
            {"x": -2.9735082741826773, "y": -7.227646101266146},
            {"x": -2.93276097625494, "y": 10.65533443260938},
            {"x": -2.9057688675820827, "y": -7.754606971517205},
            {"x": -2.7477461490780115, "y": 9.604268107563257},
            {"x": -2.5140485800802708, "y": -6.163037236779928},
            {"x": -2.3861692305654287, "y": 6.516406127251685},
            {"x": -2.3480358738452196, "y": -10.090584076941013},
            {"x": -2.313767395913601, "y": 4.702176930382848},
            {"x": -2.3026301320642233, "y": -6.0802751844748855},
            {"x": -2.2702184077352285, "y": 1.6875996505841613},
            {"x": -2.2126604709774256, "y": 6.175914362072945},
            {"x": -2.172017779201269, "y": -5.338620603084564},
            {"x": -2.00998960621655, "y": -7.23314124904573},
            {"x": -1.7855555210262537, "y": 9.725313022732735},
            {"x": -1.7855037208646536, "y": 10.341946495696902},
            {"x": -1.7056268323212862, "y": 8.456503910012543},
            {"x": -1.3683628588914871, "y": -7.707965546287596},
            {"x": -1.0086608659476042, "y": -6.1977123552933335},
            {"x": -0.9908119942992926, "y": 7.131784128025174},
            {"x": -0.9856893215328455, "y": 7.030440364964306},
            {"x": -0.7403128333389759, "y": 13.546117547899485},
            {"x": -0.6954271495342255, "y": 10.853952018544078},
            {"x": -0.61479770578444, "y": -3.447875155135989},
            {"x": -0.19576737843453884, "y": -9.167229103855789},
            {"x": -0.08181800879538059, "y": 3.249186678789556},
            {"x": 0.009611360728740692, "y": -0.11179541796445847},
            {"x": 0.3248777277767658, "y": -8.300048901699483},
            {"x": 0.5574602130800486, "y": 10.668686890043318},
            {"x": 0.5700726807117462, "y": -3.10758466552943},
            {"x": 0.6368931122124195, "y": 7.8742102310061455},
            {"x": 0.6778758466243744, "y": -1.650522948242724},
            {"x": 0.8259897697716951, "y": 4.0784147856757045},
            {"x": 0.8592284973710775, "y": 2.5105429450049996},
            {"x": 0.9226030390709639, "y": -2.3765144385397434},
            {"x": 0.9916298445314169, "y": 11.393232206813991},
            {"x": 1.0336243025958538, "y": 3.3274243660271168},
            {"x": 1.050721300765872, "y": -1.6412101686000824},
            {"x": 1.2404909245669842, "y": 13.750081955455244},
            {"x": 1.3459092378616333, "y": -4.9058005241677165},
            {"x": 1.3612300660461187, "y": 12.03355395141989},
            {"x": 1.4509362895041704, "y": -9.61692593805492},
            {"x": 1.5994287338107824, "y": 3.085909416899085},
            {"x": 1.9578855391591787, "y": 13.380819394253194},
            {"x": 2.009372005239129, "y": 4.243940337561071},
            {"x": 2.30795843526721, "y": 11.593500351533294},
            {"x": 2.584801884368062, "y": 12.2643703809008},
            {"x": 2.6859304513782263, "y": 13.964664806611836},
            {"x": 2.726268583908677, "y": -8.043028894811869},
            {"x": 2.9043670780956745, "y": 14.511995385400951},
            {"x": 2.9140095468610525, "y": -5.859877963550389},
            {"x": 2.9314936213195324, "y": -5.96988342795521},
            {"x": 3.231443591415882, "y": 1.1568820448592305},
            {"x": 3.2719071451574564, "y": 16.304655017331243},
            {"x": 3.3161697909235954, "y": -2.8123370856046677},
            {"x": 3.3311692848801613, "y": 4.625337943434715},
            {"x": 3.390936356037855, "y": 3.887844213284552},
            {"x": 3.408504517748952, "y": 5.714880446903408},
            {"x": 3.629077412188053, "y": -6.12628002371639},
            {"x": 3.9522147104144096, "y": -7.495734361000359},
            {"x": 4.017865106463432, "y": 3.983586127869785},
            {"x": 4.022190939635038, "y": 13.965698395855725},
            {"x": 4.1219694670289755, "y": 1.6584833795204759},
            {"x": 4.458406118676066, "y": 2.9079434387385845},
            {"x": 4.508841555565596, "y": 1.4088200945407152},
            {"x": 4.9586143512278795, "y": -4.576432588510215},
            {"x": 4.965515596792102, "y": 4.19045708142221},
            {"x": 5.1218240931630135, "y": 4.015358963981271},
            {"x": 5.176717998459935, "y": 17.28470003698021},
            {"x": 5.264563104137778, "y": 14.948814064264297},
            {"x": 5.344563150778413, "y": -4.822842939756811},
            {"x": 5.384250255301595, "y": 11.393741354346275},
            {"x": 5.510452045127749, "y": 9.026711145415902},
            {"x": 5.602826122194529, "y": -4.803198902867734},
            {"x": 5.720167754217982, "y": -4.268897706642747},
            {"x": 5.759528607130051, "y": 12.630766932852566},
            {"x": 5.7696570083498955, "y": 3.152911619283259},
            {"x": 5.812398919835687, "y": 3.1237152134999633},
            {"x": 6.294082777574658, "y": 6.962155074812472},
            {"x": 6.53848790936172, "y": 17.328913742676377},
            {"x": 6.6075247172266245, "y": 8.611301253549755},
            {"x": 6.765180196613073, "y": -0.3754949979484081},
            {"x": 6.771052340045571, "y": 11.889895581640303},
            {"x": 6.833053948357701, "y": -2.060411537066102},
            {"x": 7.002806268632412, "y": 17.49914810899645},
            {"x": 7.067687407135963, "y": 5.81796723138541},
            {"x": 7.087141105905175, "y": -3.5823393696919084},
            {"x": 7.254141613841057, "y": 8.239134897477925},
            {"x": 7.367422129958868, "y": 6.888900890946388},
            {"x": 7.368472578004003, "y": 3.986550036817789},
            {"x": 7.457366516813636, "y": 1.8207400841638446},
            {"x": 7.583921849727631, "y": 2.159849936142564},
            {"x": 7.780192634090781, "y": -9.281950899399817},
            {"x": 7.817879615351558, "y": -0.20950893871486187},
            {"x": 7.835261430591345, "y": -3.564983488060534},
            {"x": 7.848347816616297, "y": -6.463883855380118},
            {"x": 8.006936928257346, "y": -6.06930844951421},
            {"x": 8.58764940686524, "y": 2.9420746229588985},
            {"x": 9.070556754246354, "y": 4.764065116643906},
            {"x": 9.103363065049052, "y": 14.920263510197401},
            {"x": 9.153529677540064, "y": 13.713290397077799},
            {"x": 9.19834559597075, "y": 5.942743979394436},
            {"x": 9.28686310350895, "y": 16.48197339475155},
            {"x": 9.383957343176007, "y": 15.01934888958931},
            {"x": 9.676848074421287, "y": 13.906043991446495},
            {"x": 9.753761837258935, "y": 12.416522976011038},
            {"x": 9.85736159607768, "y": 6.938287679105997},
            {"x": 9.95800862275064, "y": 2.4495127834379673},
            {"x": 10.049425391480327, "y": 12.175883870571852},
            {"x": 10.272305734455585, "y": 2.822897370904684},
            {"x": 10.328910145908594, "y": 8.16108275949955},
            {"x": 10.339179849252105, "y": 6.46376434341073},
            {"x": 10.420267637819052, "y": 8.078886207193136},
            {"x": 10.429143251851201, "y": 15.65312921628356},
            {"x": 10.50098299048841, "y": 12.68830168992281},
            {"x": 10.61393641680479, "y": 15.557414948940277},
            {"x": 10.639664880931377, "y": 4.903334558010101},
            {"x": 10.798856567591429, "y": 12.546312481164932},
            {"x": 11.202103117480874, "y": 13.298689346760511},
            {"x": 11.350924545899034, "y": 5.644771680235863},
            {"x": 11.48407144099474, "y": 10.471177469938993},
            {"x": 11.491743922233582, "y": 5.7699894197285175},
            {"x": 11.524416318163276, "y": 12.843980517238379},
            {"x": 11.666951252147555, "y": 14.093434516340494},
            {"x": 11.936023598536849, "y": 2.2532736137509346}
        ];
        for (var i = 0; i < flowerData.length; i++) {
            var flower = getFlower();
            flower.x = flowerData[i].x;
            flower.y = flowerData[i].y;
            treeWrapper.addChild(flower);
        }

        // generate random data
//    var flowers = [];
//    for (var i = 0; i < 200; i++) {
//        var flower = getFlower();
//        flower.x += _random(-12, 12);
//
//        if (Math.abs(flower.x) < 9) {
//            flower.y += _random(-12, 16);
//        }
//        else {
//            flower.y += _random(0, 16);
//        }
//        flowers.push({x: flower.x, y: flower.y});
//        treeWrapper.addChild(flower);
//    }
//    flowers = flowers.sort(function(a,b) {
//        if (a.x == b.x) {
//            return a.y - b.y;
//        }
//        return a.x - b.x;
//    })
//    console.log(JSON.stringify(flowers));

        springContainer.addChild(treeWrapper);

        return [springTimeline, springContainer];
    }

    function getSummerTimeline(x, y) {
        var summerTimeline = new TimelineMax({autoRemoveChildren: false});

        var summerContainer = getSummerContainer(x, y);

        var treeWrapper = new createjs.Container();
        var trunk = new createjs.Shape();

        for (var i = 0; i < 9; i++) {
            trunk.graphics.beginFill(COLOR_SUMMER_TRUNK)
                .rect(-1.5, 25 + (i * -5), 3, -4)
                .endFill()
                .beginFill(COLOR_SUMMER_TRUNK_STRIPE)
                .rect(-1.5, 25 + (i * -5) - 4, 3, -1)
                .endFill();
        }
        treeWrapper.addChild(trunk);

        var leafWrapper = new createjs.Container();
        leafWrapper.y = -20;

        var numLeaves = 8;
        var leftLeaves = [];
        var rightLeaves = [];
        for (var i = 0; i < numLeaves; i++) {
            var leaf = new createjs.Shape();
            leaf.graphics.beginStroke(COLOR_SUMMER_LEAF)
                .arc(9, 5, 10, -150 * Math.PI / 180, -30 * Math.PI / 180)
                .endStroke()
                .setStrokeStyle(1).beginStroke(COLOR_SUMMER_LEAF)
                .moveTo(3, 0).lineTo(3, -3)
                .moveTo(5, 0).lineTo(5, -3)
                .moveTo(7, 0).lineTo(7, -5)
                .moveTo(9, 0).lineTo(9, -5)
                .moveTo(11, 0).lineTo(11, -5)
                .moveTo(13, 0).lineTo(13, -3)
                .moveTo(15, 0).lineTo(15, -3)
            ;
            leaf.rotation = i < numLeaves / 2
                ? (i * 360 / numLeaves - 75)
                : ((i - numLeaves / 2) * 360 / numLeaves - 60);
            leaf.scaleX = i < numLeaves / 2 ? -1 : 1;
            leafWrapper.addChild(leaf);
            if (i < numLeaves / 2) {
                leftLeaves.push(leaf);
            }
            else {
                rightLeaves.push(leaf);
            }
        }

        treeWrapper.addChild(leafWrapper);

        var coconuts = new createjs.Shape();
        coconuts.graphics.beginFill(COLOR_SUMMER_COCONUT)
            .drawCircle(0, -20, 1.5)
            .drawCircle(2, -18, 1.5)
            .drawCircle(-2, -18, 1.5)
        ;
        treeWrapper.addChild(coconuts);

        summerContainer.addChild(treeWrapper);

        var rotation = 6;
        var leavesTimeline = new TimelineMax({repeat: -1, autoRemoveChildren: false});

        summerTimeline.eventCallback('onStart', function () {
            leavesTimeline
                .add('leaves')
                .to(leftLeaves, 1, {rotation: '-=' + rotation}, 'leaves')
                .to(rightLeaves, 1, {rotation: '+=' + rotation}, 'leaves')
                .add('leavesEnd')
                .to(leftLeaves, 1, {rotation: '+=' + rotation}, 'leavesEnd')
                .to(rightLeaves, 1, {rotation: '-=' + rotation}, 'leavesEnd')
            ;
        });
        summerTimeline.eventCallback('onComplete', function () {
            leavesTimeline.remove();
        });

        return [summerTimeline, summerContainer];
    }

    function getAutumnTimeline(x, y) {
        var autumnTimeline = new TimelineMax({autoRemoveChildren: false});

        var autumnContainer = getAutumnContainer(x, y);

        var treeWrapper = new createjs.Container();
        autumnContainer.addChild(treeWrapper);

        var trunk = new createjs.Shape();
        trunk.graphics.beginFill(COLOR_AUTUMN_TRUNK)
            .moveTo(-8, 25)
            .lineTo(8, 25)
            .lineTo(0, 22)
            .command;
        treeWrapper.addChild(trunk);

        var trunk2 = new createjs.Shape();
        trunk2.graphics.beginFill(COLOR_AUTUMN_TRUNK)
            .rect(-1.5, 24, 3, -8)
            .command;
        treeWrapper.addChild(trunk2);

        var leaves = [
            {"x": -7.5, "y": -8.5, "rotation": 281, "alpha": "0.60"},
            {"x": -7.5, "y": -5.5, "rotation": 306, "alpha": "0.38"},
            {"x": -7.5, "y": -4.5, "rotation": 263, "alpha": "0.67"},
            {"x": -7.5, "y": -3.5, "rotation": 341, "alpha": "0.68"},
            {"x": -7.5, "y": 1.5, "rotation": 283, "alpha": "0.69"},
            {"x": -7.5, "y": 1.5, "rotation": 299, "alpha": "0.68"},
            {"x": -7.5, "y": 4.5, "rotation": 178, "alpha": "0.65"},
            {"x": -7.5, "y": 5.5, "rotation": 53, "alpha": "0.36"},
            {"x": -7.5, "y": 8.5, "rotation": 7, "alpha": "0.47"},
            {"x": -7.5, "y": 8.5, "rotation": 209, "alpha": "0.45"},
            {"x": -7.5, "y": 9.5, "rotation": 18, "alpha": "0.51"},
            {"x": -7.5, "y": 17.5, "rotation": 336, "alpha": "0.56"},
            {"x": -6.5, "y": -10.5, "rotation": 2, "alpha": "0.68"},
            {"x": -6.5, "y": -8.5, "rotation": 89, "alpha": "0.41"},
            {"x": -6.5, "y": -3.5, "rotation": 105, "alpha": "0.58"},
            {"x": -6.5, "y": -3.5, "rotation": 328, "alpha": "0.68"},
            {"x": -6.5, "y": 1.5, "rotation": 328, "alpha": "0.57"},
            {"x": -6.5, "y": 3.5, "rotation": 61, "alpha": "0.56"},
            {"x": -6.5, "y": 3.5, "rotation": 150, "alpha": "0.53"},
            {"x": -6.5, "y": 3.5, "rotation": 197, "alpha": "0.48"},
            {"x": -6.5, "y": 3.5, "rotation": 268, "alpha": "0.53"},
            {"x": -6.5, "y": 5.5, "rotation": 9, "alpha": "0.64"},
            {"x": -5.5, "y": -8.5, "rotation": 337, "alpha": "0.45"},
            {"x": -5.5, "y": -4.5, "rotation": 76, "alpha": "0.62"},
            {"x": -5.5, "y": -4.5, "rotation": 133, "alpha": "0.68"},
            {"x": -5.5, "y": -2.5, "rotation": 305, "alpha": "0.59"},
            {"x": -5.5, "y": -1.5, "rotation": 76, "alpha": "0.51"},
            {"x": -5.5, "y": -1.5, "rotation": 222, "alpha": "0.65"},
            {"x": -5.5, "y": 2.5, "rotation": 354, "alpha": "0.37"},
            {"x": -5.5, "y": 3.5, "rotation": 212, "alpha": "0.31"},
            {"x": -5.5, "y": 8.5, "rotation": 34, "alpha": "0.46"},
            {"x": -5.5, "y": 12.5, "rotation": 130, "alpha": "0.65"},
            {"x": -5.5, "y": 15.5, "rotation": 68, "alpha": "0.57"},
            {"x": -5.5, "y": 17.5, "rotation": 117, "alpha": "0.51"},
            {"x": -4.5, "y": -11.5, "rotation": 326, "alpha": "0.43"},
            {"x": -4.5, "y": -9.5, "rotation": 275, "alpha": "0.32"},
            {"x": -4.5, "y": -7.5, "rotation": 295, "alpha": "0.67"},
            {"x": -4.5, "y": -7.5, "rotation": 335, "alpha": "0.40"},
            {"x": -4.5, "y": -6.5, "rotation": 130, "alpha": "0.38"},
            {"x": -4.5, "y": -3.5, "rotation": 148, "alpha": "0.58"},
            {"x": -4.5, "y": -2.5, "rotation": 202, "alpha": "0.61"},
            {"x": -4.5, "y": 0.5, "rotation": 99, "alpha": "0.41"},
            {"x": -4.5, "y": 3.5, "rotation": 241, "alpha": "0.39"},
            {"x": -4.5, "y": 3.5, "rotation": 317, "alpha": "0.43"},
            {"x": -4.5, "y": 4.5, "rotation": 100, "alpha": "0.56"},
            {"x": -4.5, "y": 5.5, "rotation": 341, "alpha": "0.53"},
            {"x": -4.5, "y": 6.5, "rotation": 277, "alpha": "0.55"},
            {"x": -4.5, "y": 9.5, "rotation": 138, "alpha": "0.52"},
            {"x": -4.5, "y": 9.5, "rotation": 148, "alpha": "0.51"},
            {"x": -4.5, "y": 10.5, "rotation": 304, "alpha": "0.32"},
            {"x": -4.5, "y": 15.5, "rotation": 177, "alpha": "0.47"},
            {"x": -4.5, "y": 16.5, "rotation": 258, "alpha": "0.55"},
            {"x": -3.5, "y": -11.5, "rotation": 167, "alpha": "0.38"},
            {"x": -3.5, "y": -9.5, "rotation": 233, "alpha": "0.33"},
            {"x": -3.5, "y": -7.5, "rotation": 211, "alpha": "0.45"},
            {"x": -3.5, "y": -7.5, "rotation": 253, "alpha": "0.35"},
            {"x": -3.5, "y": -5.5, "rotation": 214, "alpha": "0.40"},
            {"x": -3.5, "y": -3.5, "rotation": 17, "alpha": "0.57"},
            {"x": -3.5, "y": 1.5, "rotation": 271, "alpha": "0.38"},
            {"x": -3.5, "y": 1.5, "rotation": 326, "alpha": "0.31"},
            {"x": -3.5, "y": 2.5, "rotation": 352, "alpha": "0.39"},
            {"x": -3.5, "y": 3.5, "rotation": 278, "alpha": "0.49"},
            {"x": -3.5, "y": 10.5, "rotation": 170, "alpha": "0.42"},
            {"x": -3.5, "y": 10.5, "rotation": 284, "alpha": "0.51"},
            {"x": -3.5, "y": 12.5, "rotation": 42, "alpha": "0.69"},
            {"x": -3.5, "y": 15.5, "rotation": 81, "alpha": "0.47"},
            {"x": -3.5, "y": 15.5, "rotation": 308, "alpha": "0.65"},
            {"x": -3.5, "y": 16.5, "rotation": 211, "alpha": "0.32"},
            {"x": -2.5, "y": -12.5, "rotation": 242, "alpha": "0.50"},
            {"x": -2.5, "y": -10.5, "rotation": 44, "alpha": "0.67"},
            {"x": -2.5, "y": -10.5, "rotation": 160, "alpha": "0.31"},
            {"x": -2.5, "y": -6.5, "rotation": 82, "alpha": "0.56"},
            {"x": -2.5, "y": -5.5, "rotation": 100, "alpha": "0.46"},
            {"x": -2.5, "y": -4.5, "rotation": 51, "alpha": "0.51"},
            {"x": -2.5, "y": -4.5, "rotation": 155, "alpha": "0.58"},
            {"x": -2.5, "y": -3.5, "rotation": 306, "alpha": "0.52"},
            {"x": -2.5, "y": -2.5, "rotation": 217, "alpha": "0.34"},
            {"x": -2.5, "y": 3.5, "rotation": 173, "alpha": "0.49"},
            {"x": -2.5, "y": 3.5, "rotation": 209, "alpha": "0.67"},
            {"x": -2.5, "y": 8.5, "rotation": 218, "alpha": "0.63"},
            {"x": -2.5, "y": 8.5, "rotation": 282, "alpha": "0.64"},
            {"x": -2.5, "y": 11.5, "rotation": 244, "alpha": "0.57"},
            {"x": -2.5, "y": 13.5, "rotation": 150, "alpha": "0.56"},
            {"x": -1.5, "y": -7.5, "rotation": 192, "alpha": "0.39"},
            {"x": -1.5, "y": -7.5, "rotation": 199, "alpha": "0.70"},
            {"x": -1.5, "y": -6.5, "rotation": 153, "alpha": "0.57"},
            {"x": -1.5, "y": -4.5, "rotation": 155, "alpha": "0.55"},
            {"x": -1.5, "y": -4.5, "rotation": 265, "alpha": "0.69"},
            {"x": -1.5, "y": -3.5, "rotation": 59, "alpha": "0.69"},
            {"x": -1.5, "y": -3.5, "rotation": 256, "alpha": "0.43"},
            {"x": -1.5, "y": -0.5, "rotation": 117, "alpha": "0.49"},
            {"x": -1.5, "y": 0.5, "rotation": 115, "alpha": "0.34"},
            {"x": -1.5, "y": 0.5, "rotation": 302, "alpha": "0.54"},
            {"x": -1.5, "y": 2.5, "rotation": 81, "alpha": "0.55"},
            {"x": -1.5, "y": 7.5, "rotation": 243, "alpha": "0.39"},
            {"x": -1.5, "y": 8.5, "rotation": 340, "alpha": "0.39"},
            {"x": -1.5, "y": 10.5, "rotation": 268, "alpha": "0.51"},
            {"x": -1.5, "y": 13.5, "rotation": 97, "alpha": "0.47"},
            {"x": -1.5, "y": 14.5, "rotation": 315, "alpha": "0.67"},
            {"x": -1.5, "y": 15.5, "rotation": 234, "alpha": "0.42"},
            {"x": -1.5, "y": 16.5, "rotation": 354, "alpha": "0.46"},
            {"x": -0.5, "y": -12.5, "rotation": 247, "alpha": "0.49"},
            {"x": -0.5, "y": -9.5, "rotation": 173, "alpha": "0.40"},
            {"x": -0.5, "y": -9.5, "rotation": 222, "alpha": "0.69"},
            {"x": -0.5, "y": -5.5, "rotation": 2, "alpha": "0.33"},
            {"x": -0.5, "y": -5.5, "rotation": 152, "alpha": "0.52"},
            {"x": -0.5, "y": -5.5, "rotation": 295, "alpha": "0.51"},
            {"x": -0.5, "y": 3.5, "rotation": 174, "alpha": "0.59"},
            {"x": -0.5, "y": 3.5, "rotation": 188, "alpha": "0.65"},
            {"x": -0.5, "y": 5.5, "rotation": 242, "alpha": "0.63"},
            {"x": -0.5, "y": 5.5, "rotation": 286, "alpha": "0.55"},
            {"x": -0.5, "y": 9.5, "rotation": 243, "alpha": "0.32"},
            {"x": -0.5, "y": 13.5, "rotation": 262, "alpha": "0.62"},
            {"x": -0.5, "y": 13.5, "rotation": 348, "alpha": "0.42"},
            {"x": -0.5, "y": 14.5, "rotation": 32, "alpha": "0.39"},
            {"x": -0.5, "y": 14.5, "rotation": 199, "alpha": "0.61"},
            {"x": -0.5, "y": 14.5, "rotation": 290, "alpha": "0.42"},
            {"x": -0.5, "y": 14.5, "rotation": 299, "alpha": "0.41"},
            {"x": -0.5, "y": 17.5, "rotation": 68, "alpha": "0.35"},
            {"x": 0.5, "y": -9.5, "rotation": 294, "alpha": "0.49"},
            {"x": 0.5, "y": -9.5, "rotation": 343, "alpha": "0.43"},
            {"x": 0.5, "y": -5.5, "rotation": 284, "alpha": "0.32"},
            {"x": 0.5, "y": -4.5, "rotation": 169, "alpha": "0.52"},
            {"x": 0.5, "y": -3.5, "rotation": 303, "alpha": "0.46"},
            {"x": 0.5, "y": -0.5, "rotation": 44, "alpha": "0.42"},
            {"x": 0.5, "y": -0.5, "rotation": 350, "alpha": "0.51"},
            {"x": 0.5, "y": 0.5, "rotation": 360, "alpha": "0.61"},
            {"x": 0.5, "y": 5.5, "rotation": 192, "alpha": "0.55"},
            {"x": 0.5, "y": 7.5, "rotation": 215, "alpha": "0.61"},
            {"x": 0.5, "y": 8.5, "rotation": 210, "alpha": "0.47"},
            {"x": 0.5, "y": 11.5, "rotation": 8, "alpha": "0.51"},
            {"x": 0.5, "y": 11.5, "rotation": 26, "alpha": "0.43"},
            {"x": 0.5, "y": 13.5, "rotation": 24, "alpha": "0.67"},
            {"x": 0.5, "y": 13.5, "rotation": 72, "alpha": "0.52"},
            {"x": 0.5, "y": 17.5, "rotation": 117, "alpha": "0.44"},
            {"x": 1.5, "y": -10.5, "rotation": 7, "alpha": "0.44"},
            {"x": 1.5, "y": -0.5, "rotation": 200, "alpha": "0.53"},
            {"x": 1.5, "y": 1.5, "rotation": 87, "alpha": "0.50"},
            {"x": 1.5, "y": 4.5, "rotation": 3, "alpha": "0.31"},
            {"x": 1.5, "y": 5.5, "rotation": 267, "alpha": "0.70"},
            {"x": 1.5, "y": 13.5, "rotation": 299, "alpha": "0.64"},
            {"x": 1.5, "y": 15.5, "rotation": 308, "alpha": "0.44"},
            {"x": 1.5, "y": 16.5, "rotation": 350, "alpha": "0.66"},
            {"x": 2.5, "y": -12.5, "rotation": 332, "alpha": "0.30"},
            {"x": 2.5, "y": -10.5, "rotation": 295, "alpha": "0.59"},
            {"x": 2.5, "y": -8.5, "rotation": 102, "alpha": "0.50"},
            {"x": 2.5, "y": -6.5, "rotation": 10, "alpha": "0.50"},
            {"x": 2.5, "y": -5.5, "rotation": 0, "alpha": "0.39"},
            {"x": 2.5, "y": -4.5, "rotation": 326, "alpha": "0.33"},
            {"x": 2.5, "y": 3.5, "rotation": 154, "alpha": "0.61"},
            {"x": 2.5, "y": 4.5, "rotation": 246, "alpha": "0.46"},
            {"x": 2.5, "y": 8.5, "rotation": 355, "alpha": "0.69"},
            {"x": 3.5, "y": -12.5, "rotation": 283, "alpha": "0.45"},
            {"x": 3.5, "y": -10.5, "rotation": 96, "alpha": "0.41"},
            {"x": 3.5, "y": -9.5, "rotation": 175, "alpha": "0.51"},
            {"x": 3.5, "y": -7.5, "rotation": 158, "alpha": "0.39"},
            {"x": 3.5, "y": -7.5, "rotation": 202, "alpha": "0.48"},
            {"x": 3.5, "y": -4.5, "rotation": 243, "alpha": "0.39"},
            {"x": 3.5, "y": -4.5, "rotation": 301, "alpha": "0.65"},
            {"x": 3.5, "y": -3.5, "rotation": 58, "alpha": "0.52"},
            {"x": 3.5, "y": -1.5, "rotation": 62, "alpha": "0.61"},
            {"x": 3.5, "y": 0.5, "rotation": 129, "alpha": "0.40"},
            {"x": 3.5, "y": 0.5, "rotation": 204, "alpha": "0.43"},
            {"x": 3.5, "y": 4.5, "rotation": 52, "alpha": "0.61"},
            {"x": 3.5, "y": 9.5, "rotation": 292, "alpha": "0.59"},
            {"x": 3.5, "y": 12.5, "rotation": 268, "alpha": "0.45"},
            {"x": 3.5, "y": 13.5, "rotation": 119, "alpha": "0.46"},
            {"x": 3.5, "y": 14.5, "rotation": 92, "alpha": "0.51"},
            {"x": 3.5, "y": 16.5, "rotation": 147, "alpha": "0.39"},
            {"x": 4.5, "y": -11.5, "rotation": 82, "alpha": "0.46"},
            {"x": 4.5, "y": -8.5, "rotation": 40, "alpha": "0.39"},
            {"x": 4.5, "y": -7.5, "rotation": 3, "alpha": "0.31"},
            {"x": 4.5, "y": -7.5, "rotation": 243, "alpha": "0.36"},
            {"x": 4.5, "y": -5.5, "rotation": 351, "alpha": "0.64"},
            {"x": 4.5, "y": -0.5, "rotation": 73, "alpha": "0.48"},
            {"x": 4.5, "y": -0.5, "rotation": 149, "alpha": "0.54"},
            {"x": 4.5, "y": 2.5, "rotation": 239, "alpha": "0.51"},
            {"x": 4.5, "y": 5.5, "rotation": 52, "alpha": "0.50"},
            {"x": 4.5, "y": 9.5, "rotation": 182, "alpha": "0.70"},
            {"x": 4.5, "y": 11.5, "rotation": 90, "alpha": "0.48"},
            {"x": 4.5, "y": 13.5, "rotation": 191, "alpha": "0.56"},
            {"x": 4.5, "y": 13.5, "rotation": 249, "alpha": "0.49"},
            {"x": 4.5, "y": 14.5, "rotation": 72, "alpha": "0.41"},
            {"x": 5.5, "y": -11.5, "rotation": 349, "alpha": "0.50"},
            {"x": 5.5, "y": -10.5, "rotation": 86, "alpha": "0.65"},
            {"x": 5.5, "y": -7.5, "rotation": 337, "alpha": "0.32"},
            {"x": 5.5, "y": -4.5, "rotation": 204, "alpha": "0.57"},
            {"x": 5.5, "y": -4.5, "rotation": 313, "alpha": "0.33"},
            {"x": 5.5, "y": -1.5, "rotation": 15, "alpha": "0.59"},
            {"x": 5.5, "y": -1.5, "rotation": 300, "alpha": "0.61"},
            {"x": 5.5, "y": 1.5, "rotation": 286, "alpha": "0.40"},
            {"x": 5.5, "y": 3.5, "rotation": 145, "alpha": "0.61"},
            {"x": 5.5, "y": 4.5, "rotation": 212, "alpha": "0.43"},
            {"x": 5.5, "y": 4.5, "rotation": 283, "alpha": "0.48"},
            {"x": 5.5, "y": 5.5, "rotation": 294, "alpha": "0.66"},
            {"x": 5.5, "y": 8.5, "rotation": 246, "alpha": "0.38"},
            {"x": 5.5, "y": 15.5, "rotation": 347, "alpha": "0.53"},
            {"x": 5.5, "y": 16.5, "rotation": 280, "alpha": "0.45"},
            {"x": 6.5, "y": -11.5, "rotation": 99, "alpha": "0.58"},
            {"x": 6.5, "y": -6.5, "rotation": 39, "alpha": "0.62"},
            {"x": 6.5, "y": -2.5, "rotation": 283, "alpha": "0.42"},
            {"x": 6.5, "y": 1.5, "rotation": 19, "alpha": "0.70"},
            {"x": 6.5, "y": 2.5, "rotation": 114, "alpha": "0.44"},
            {"x": 6.5, "y": 2.5, "rotation": 152, "alpha": "0.32"},
            {"x": 6.5, "y": 2.5, "rotation": 249, "alpha": "0.65"},
            {"x": 6.5, "y": 4.5, "rotation": 16, "alpha": "0.58"},
            {"x": 6.5, "y": 6.5, "rotation": 70, "alpha": "0.30"},
            {"x": 6.5, "y": 6.5, "rotation": 297, "alpha": "0.38"},
            {"x": 6.5, "y": 14.5, "rotation": 244, "alpha": "0.38"},
            {"x": 6.5, "y": 17.5, "rotation": 94, "alpha": "0.31"},
            {"x": 7.5, "y": -11.5, "rotation": 152, "alpha": "0.31"},
            {"x": 7.5, "y": -10.5, "rotation": 335, "alpha": "0.56"},
            {"x": 7.5, "y": -9.5, "rotation": 85, "alpha": "0.49"},
            {"x": 7.5, "y": -8.5, "rotation": 132, "alpha": "0.54"},
            {"x": 7.5, "y": -5.5, "rotation": 14, "alpha": "0.44"},
            {"x": 7.5, "y": -1.5, "rotation": 299, "alpha": "0.63"},
            {"x": 7.5, "y": -1.5, "rotation": 332, "alpha": "0.63"},
            {"x": 7.5, "y": 2.5, "rotation": 100, "alpha": "0.53"},
            {"x": 7.5, "y": 3.5, "rotation": 282, "alpha": "0.34"},
            {"x": 7.5, "y": 5.5, "rotation": 102, "alpha": "0.59"},
            {"x": 7.5, "y": 8.5, "rotation": 301, "alpha": "0.44"},
            {"x": 7.5, "y": 11.5, "rotation": 269, "alpha": "0.32"},
            {"x": 7.5, "y": 13.5, "rotation": 303, "alpha": "0.59"},
            {"x": 7.5, "y": 15.5, "rotation": 180, "alpha": "0.57"},
            {"x": 7.5, "y": 17.5, "rotation": 277, "alpha": "0.42"},
            {"x": 8.5, "y": -12.5, "rotation": 23, "alpha": "0.55"},
            {"x": 8.5, "y": -8.5, "rotation": 39, "alpha": "0.61"},
            {"x": 8.5, "y": -7.5, "rotation": 250, "alpha": "0.59"},
            {"x": 8.5, "y": -7.5, "rotation": 312, "alpha": "0.43"},
            {"x": 8.5, "y": -6.5, "rotation": 167, "alpha": "0.60"},
            {"x": 8.5, "y": -4.5, "rotation": 14, "alpha": "0.32"},
            {"x": 8.5, "y": -3.5, "rotation": 192, "alpha": "0.65"},
            {"x": 8.5, "y": -2.5, "rotation": 268, "alpha": "0.40"},
            {"x": 8.5, "y": 1.5, "rotation": 106, "alpha": "0.65"},
            {"x": 8.5, "y": 1.5, "rotation": 161, "alpha": "0.30"},
            {"x": 8.5, "y": 2.5, "rotation": 61, "alpha": "0.43"},
            {"x": 8.5, "y": 8.5, "rotation": 0, "alpha": "0.31"},
            {"x": 8.5, "y": 8.5, "rotation": 21, "alpha": "0.64"},
            {"x": 8.5, "y": 8.5, "rotation": 218, "alpha": "0.54"},
            {"x": 8.5, "y": 9.5, "rotation": 60, "alpha": "0.68"},
            {"x": 8.5, "y": 10.5, "rotation": 12, "alpha": "0.61"},
            {"x": 8.5, "y": 10.5, "rotation": 302, "alpha": "0.31"},
            {"x": 9.5, "y": -12.5, "rotation": 82, "alpha": "0.44"},
            {"x": 9.5, "y": -12.5, "rotation": 181, "alpha": "0.41"},
            {"x": 9.5, "y": -11.5, "rotation": 206, "alpha": "0.39"},
            {"x": 9.5, "y": -8.5, "rotation": 21, "alpha": "0.64"},
            {"x": 9.5, "y": -7.5, "rotation": 82, "alpha": "0.65"},
            {"x": 9.5, "y": -4.5, "rotation": 179, "alpha": "0.35"},
            {"x": 9.5, "y": -4.5, "rotation": 293, "alpha": "0.56"},
            {"x": 9.5, "y": -0.5, "rotation": 3, "alpha": "0.67"},
            {"x": 9.5, "y": 2.5, "rotation": 323, "alpha": "0.52"},
            {"x": 9.5, "y": 4.5, "rotation": 215, "alpha": "0.62"},
            {"x": 9.5, "y": 6.5, "rotation": 147, "alpha": "0.32"},
            {"x": 9.5, "y": 11.5, "rotation": 16, "alpha": "0.35"},
            {"x": 9.5, "y": 13.5, "rotation": 256, "alpha": "0.51"},
            {"x": 9.5, "y": 14.5, "rotation": 322, "alpha": "0.33"},
            {"x": 9.5, "y": 16.5, "rotation": 299, "alpha": "0.56"},
            {"x": 10.5, "y": -11.5, "rotation": 77, "alpha": "0.45"},
            {"x": 10.5, "y": -10.5, "rotation": 314, "alpha": "0.38"},
            {"x": 10.5, "y": -10.5, "rotation": 347, "alpha": "0.45"},
            {"x": 10.5, "y": -9.5, "rotation": 66, "alpha": "0.59"},
            {"x": 10.5, "y": -6.5, "rotation": 14, "alpha": "0.51"},
            {"x": 10.5, "y": -4.5, "rotation": 7, "alpha": "0.69"},
            {"x": 10.5, "y": -4.5, "rotation": 115, "alpha": "0.65"},
            {"x": 10.5, "y": 3.5, "rotation": 39, "alpha": "0.59"},
            {"x": 10.5, "y": 9.5, "rotation": 250, "alpha": "0.45"},
            {"x": 10.5, "y": 12.5, "rotation": 115, "alpha": "0.35"},
            {"x": 10.5, "y": 16.5, "rotation": 121, "alpha": "0.50"},
            {"x": 10.5, "y": 16.5, "rotation": 234, "alpha": "0.31"},
            {"x": 10.5, "y": 16.5, "rotation": 347, "alpha": "0.52"},
            {"x": 10.5, "y": 17.5, "rotation": 244, "alpha": "0.64"},
            {"x": 11.5, "y": -12.5, "rotation": 358, "alpha": "0.48"},
            {"x": 11.5, "y": -11.5, "rotation": 192, "alpha": "0.49"},
            {"x": 11.5, "y": -9.5, "rotation": 104, "alpha": "0.33"},
            {"x": 11.5, "y": -9.5, "rotation": 274, "alpha": "0.55"},
            {"x": 11.5, "y": -8.5, "rotation": 184, "alpha": "0.42"},
            {"x": 11.5, "y": -5.5, "rotation": 109, "alpha": "0.67"},
            {"x": 11.5, "y": -2.5, "rotation": 26, "alpha": "0.37"},
            {"x": 11.5, "y": 0.5, "rotation": 298, "alpha": "0.68"},
            {"x": 11.5, "y": 1.5, "rotation": 137, "alpha": "0.70"},
            {"x": 11.5, "y": 3.5, "rotation": 206, "alpha": "0.67"},
            {"x": 11.5, "y": 4.5, "rotation": 93, "alpha": "0.43"},
            {"x": 11.5, "y": 14.5, "rotation": 130, "alpha": "0.62"},
            {"x": 12.5, "y": -12.5, "rotation": 55, "alpha": "0.58"},
            {"x": 12.5, "y": -12.5, "rotation": 339, "alpha": "0.61"},
            {"x": 12.5, "y": -10.5, "rotation": 131, "alpha": "0.52"},
            {"x": 12.5, "y": -8.5, "rotation": 337, "alpha": "0.61"},
            {"x": 12.5, "y": -7.5, "rotation": 199, "alpha": "0.64"},
            {"x": 12.5, "y": -7.5, "rotation": 275, "alpha": "0.61"},
            {"x": 12.5, "y": -5.5, "rotation": 43, "alpha": "0.68"},
            {"x": 12.5, "y": -5.5, "rotation": 233, "alpha": "0.36"},
            {"x": 12.5, "y": -3.5, "rotation": 65, "alpha": "0.64"},
            {"x": 12.5, "y": -0.5, "rotation": 182, "alpha": "0.47"},
            {"x": 12.5, "y": 2.5, "rotation": 61, "alpha": "0.61"},
            {"x": 12.5, "y": 4.5, "rotation": 48, "alpha": "0.59"},
            {"x": 12.5, "y": 7.5, "rotation": 40, "alpha": "0.58"},
            {"x": 12.5, "y": 10.5, "rotation": 62, "alpha": "0.56"},
            {"x": 12.5, "y": 13.5, "rotation": 256, "alpha": "0.68"},
            {"x": 12.5, "y": 14.5, "rotation": 153, "alpha": "0.65"},
            {"x": 12.5, "y": 17.5, "rotation": 329, "alpha": "0.61"}
        ];
        for (var i = 0;
//         i < 10 &&
             i < leaves.length; i++) {
            var leafData = leaves[i];
            var leaf = new createjs.Shape();

            leaf.regX = leafData.x;
            leaf.regY = leafData.y;
            leaf.rotation = leafData.rotation;
            leaf.alpha = leafData.alpha;
            if (leafData.rotation > 30 && leaf.rotation < 210) {
                leaf.graphics.beginFill(COLOR_AUTUMN_LEAF);
            }
//        else if (leafData.x == -7.5) {
//            leaf.graphics.beginFill('green');
//        }
            else {
                leaf.graphics.beginFill(COLOR_AUTUMN_LEAF_2);
            }
//        leaf.graphics.beginFill('#FF4500');
            leaf.graphics
                .moveTo(0, 0)
                .lineTo(5, 0)
                .lineTo(0, -5)
                .closePath()
            ;

            treeWrapper.addChild(leaf);
        }

        leaves = leaves.sort(function (a, b) {
            if (a.x === b.x) {
                if (a.y === b.y) {
                    return a.rotation - b.rotation;
                }
                return a.y - b.y;
            }
            return a.x - b.x;
        });
//    console.log(JSON.stringify(leaves));

        return [autumnTimeline, autumnContainer];
    }

    function getWinterTimeline(x, y) {
        var snowTreeTimeline = new TimelineMax({autoRemoveChildren: false});
        snowTreeTimeline.add('snow');

        var snowTreeContainer = getWinterContainer(x, y);

        var snowTreeWrapper = new createjs.Container();
        var snowTree = new createjs.Shape();
        snowTree.graphics
            .beginFill('white')
            .lineTo(-12, -5)
            .lineTo(0, -20)
            .lineTo(12, -5)
            .endFill().beginFill('white')
            .lineTo(-14, 5)
            .lineTo(0, -10)
            .lineTo(14, 5)
            .endFill().beginFill('white')
            .lineTo(-16, 15)
            .lineTo(0, 0)
            .lineTo(16, 15)
            .endFill().beginFill('white')
            .lineTo(-18, 25)
            .lineTo(0, 10)
            .lineTo(18, 25);
        snowTreeWrapper.addChild(snowTree);

        var snows = [];
        var snowWrapper = new createjs.Container();
        var snowSize = 3;

        for (var i = 0; i < 9; i++) {
            var snow = new createjs.Shape();
            snow.alpha = 0;
            snow.graphics
                .beginFill('white')
                .drawCircle(0, 0, snowSize);
            snows.push(snow);
            snowWrapper.addChild(snow);
        }

        function tweenSnow(snow) {
            var chance = Math.random();
            var _x = 0;
            if (chance <= 0.45) {
                _x = _randomInteger(-25, -10);
            }
            else if (chance <= 0.9) {
                _x = _randomInteger(10, 25);
            }
            else {
                _x = _randomInteger(-9, 9);
            }

            createjs.Tween
                .get(snow, {override: true})
                .to({alpha: 0}, 100)
                .wait(_randomInteger(0, 2000))
                .to({alpha: _random(0.5, 0.9), x: _x, y: _randomInteger(-55, -50)}, 0)
                .to({y: 24}, _randomInteger(2500, 3000), createjs.Ease.linear)
                .call(function () {
                    tweenSnow(snow);
                });

//        function randomX() {
//            var _random = Math.random();
//            if (_random <= 0.45) {
//                return _randomInteger(-25, -10);
//            }
//            else if (_random <= 0.9) {
//                return _randomInteger(10, 25);
//            }
//            else {
//                return _randomInteger(-9, 9);
//            }
//        }

//        snowTreeTimeline
//            .delay(_random(0, 2))
//            .set(snow, {alpha: _random(0.5, 0.9), x: randomX(), y: _randomInteger(-55, -50)}, 'snow')
//            .to(snow, _random(2.5, 3), {y: 24, onComplete: function () {
//                tweenSnow(snow);
//            }});
        }

        snows.forEach(function (snow) {
            tweenSnow(snow);
        });

        snowTreeWrapper.addChild(snowWrapper);
        snowTreeContainer.addChild(snowTreeWrapper);

        return [snowTreeTimeline, snowTreeContainer];
    }

    function getCatTimeline(x, y) {
        var catTimeline = new TimelineMax({autoRemoveChildren: false});

        var catContainer = getDefaultContainer(x, y);

        var catWrapper = new createjs.Container();
        var catHead = new createjs.Shape();
        catHead.graphics.beginFill('#fff').drawEllipse(-15, 5, 30, 25);
        catWrapper.addChild(catHead);

        var catEyes = new createjs.Shape();
        catEyes.graphics.beginFill('black')
            .drawCircle(-10, 14, 2)
            .drawCircle(2, 14, 2)
            .beginFill('pink')
            .drawEllipse(-13, 17, 5, 2)
            .drawEllipse(-1, 17, 5, 2);
        catWrapper.addChild(catEyes);

        var catEars = new createjs.Shape();
        catEars.graphics
            .beginFill('#fff')
            .moveTo(-15, 14)
            .lineTo(-10, 0)
            .lineTo(-1, 7)
            .closePath()
            .moveTo(15, 14)
            .lineTo(10, 0)
            .lineTo(1, 7)
            .closePath();
        catWrapper.addChild(catEars);

        var beeWrapper = new createjs.Container();

        var wings = new createjs.Shape();
        wings.graphics
            .endFill().beginFill(COLOR_BEE_WING)
            .drawCircle(-42, -20, 2.5)
            .endFill().beginFill(COLOR_BEE_WING)
            .drawEllipse(-39.5, -24, 5, 6);
        wings.alpha = .8;
        beeWrapper.addChild(wings);

        var body = new createjs.Shape();
        body.graphics
            .endFill().beginFill(COLOR_BEE_BODY)
            .drawEllipse(-45, -20, 16, 12)
            .endFill().beginFill(COLOR_BEE_BODY_STRIPE)
            .arc(-37, -14, 5, 80 * Math.PI / 180, 100 * Math.PI / 180)
            .arc(-37, -14, 5, 260 * Math.PI / 180, 280 * Math.PI / 180)
            .endFill().beginFill(COLOR_BEE_BODY_STRIPE)
            .arc(-41, -14, 4, 80 * Math.PI / 180, 100 * Math.PI / 180)
            .arc(-41, -14, 4, 260 * Math.PI / 180, 280 * Math.PI / 180)
            .endFill().beginFill(COLOR_BEE_BODY_STRIPE)
            .moveTo(-45, -12.5)
            .lineTo(-45, -15.5)
            .lineTo(-49, -14);

        beeWrapper.addChild(body);

        var eye = new createjs.Shape();
        eye.graphics
            .beginFill('black')
            .drawCircle(-33, -16, 1);
        beeWrapper.addChild(eye);

        catContainer.addChild(catWrapper);
        catContainer.addChild(beeWrapper);

        var beeDuration = .3;
        catTimeline
            .to(wings, beeDuration, {alpha: .8, y: "+=1"}, 0)
            .to(wings, beeDuration, {alpha: .5, y: "-=1"}, beeDuration)
            .to(wings, beeDuration, {alpha: .8, y: "+=1"}, 2 * beeDuration)
            .to(wings, beeDuration, {alpha: .5, y: "-=1"}, 3 * beeDuration)
            .to(wings, beeDuration, {alpha: .8, y: "+=1"}, 4 * beeDuration)
            .to(wings, beeDuration, {alpha: .5, y: "-=1"}, 5 * beeDuration)
            .to(beeWrapper, beeDuration * 6, {x: 70}, 0)
            .to(beeWrapper, beeDuration, {y: -5, ease: Sine.easeOut}, 0)
            .to(beeWrapper, beeDuration, {y: 0, ease: Sine.easeIn}, beeDuration)
            .to(beeWrapper, beeDuration, {y: 5, ease: Sine.easeOut}, 2 * beeDuration)
            .to(beeWrapper, beeDuration, {y: 0, ease: Sine.easeIn}, 3 * beeDuration)
            .to(beeWrapper, beeDuration, {y: -5, ease: Sine.easeOut}, 4 * beeDuration)
            .to(beeWrapper, beeDuration, {y: 0, ease: Sine.easeIn}, 5 * beeDuration)
            .to(catEyes, beeDuration * 6, {x: 7}, 0)
            .to(catEyes, beeDuration, {y: -1, ease: Sine.easeOut}, 0)
            .to(catEyes, beeDuration, {y: 0, ease: Sine.easeIn}, beeDuration)
            .to(catEyes, beeDuration, {y: 1, ease: Sine.easeOut}, 2 * beeDuration)
            .to(catEyes, beeDuration, {y: 0, ease: Sine.easeIn}, 3 * beeDuration)
            .to(catEyes, beeDuration, {y: -1, ease: Sine.easeOut}, 4 * beeDuration)
            .to(catEyes, beeDuration, {y: 0, ease: Sine.easeIn}, 5 * beeDuration)
        ;

        return [catTimeline, catContainer];
    }

    function getTurtleTimeline(x, y) {
        var turtleTimeline = new TimelineMax({autoRemoveChildren: false});

        var turtleContainer = getDefaultContainer(x, y);

        var turtleWrapper = new createjs.Container();
        var turtle = new createjs.Shape();
        turtle.graphics.beginFill(COLOR_TURTLE_SHELL)
            .arc(0, 25, 15, 0, 180 * Math.PI / 180, true);
        turtleWrapper.addChild(turtle);

        var head = new createjs.Shape();
        head.graphics.beginFill(COLOR_TURTLE_BODY)
            .drawCircle(0, 21, 4.5);
        turtleWrapper.addChild(head);

        var eyes = new createjs.Shape();
        eyes.graphics
            .beginFill('black')
            .drawEllipse(-4, 20, 2, 2)
            .endFill().beginFill('black')
            .drawEllipse(2, 20, 2, 2);
        turtleWrapper.addChild(eyes);

        var turtleEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, autoRemoveChildren: false});
        turtleEyesTimeline
            .to(eyes, .2, {scaleY: 0, y: 21})
            .to(eyes, .2, {scaleY: 1, y: 0});

        var hand1Wrapper = new createjs.Container();
        hand1Wrapper.x = 13;
        hand1Wrapper.y = 18;

        var hand1 = new createjs.Shape();
        hand1.graphics
            .beginFill(COLOR_TURTLE_BODY)
            .moveTo(2, 7)
            .lineTo(0, 0)
            .lineTo(9, 7);
        hand1Wrapper.addChild(hand1);
        turtleWrapper.addChild(hand1Wrapper);

        var hand2Wrapper = new createjs.Container();
        hand2Wrapper.x = -13;
        hand2Wrapper.y = 18;

        var hand2 = new createjs.Shape();
        hand2.graphics
            .beginFill(COLOR_TURTLE_BODY)
            .moveTo(-2, 7)
            .lineTo(0, 0)
            .lineTo(-9, 7);
        hand2Wrapper.addChild(hand2);
        turtleWrapper.addChild(hand2Wrapper);

        var balloonWrapper = new createjs.Container();
        var balloon1 = new createjs.Shape();
        var balloon1StringCmd = balloon1.graphics
            .beginStroke(COLOR_BALLOON_STRING)
            .moveTo(-6, 24)
            .lineTo(-11, -11)
            .command;
        var balloon1Cmd = balloon1.graphics
            .endStroke()
            .endFill().beginFill(COLOR_BALLOON_1)
            .drawEllipse(-18, -20, 14, 18)
            .command;
        balloon1.rotation = -12;
        balloonWrapper.addChild(balloon1);

        var balloon2 = new createjs.Shape();
        var balloon2StringCmd = balloon2.graphics
            .setStrokeStyle(1)
            .beginStroke(COLOR_BALLOON_STRING)
            .moveTo(0, 24)
            .lineTo(0, -11)
            .command;
        var balloon2Cmd = balloon2.graphics
            .endStroke()
            .beginFill(COLOR_BALLOON_2)
            .drawEllipse(-7, -24, 14, 18)
            .command;
        balloon2.rotation = 0;
        balloonWrapper.addChild(balloon2);

        var balloon3 = new createjs.Shape();
        var balloon3StringCmd = balloon3.graphics
            .beginStroke(COLOR_BALLOON_STRING)
            .moveTo(6, 24)
            .lineTo(11, -11)
            .command;
        var balloon3Cmd = balloon3.graphics
            .endStroke()
            .endFill().beginFill(COLOR_BALLOON_3)
            .drawEllipse(4, -20, 14, 18)
            .command;
        balloon3.rotation = 12;
        balloonWrapper.addChild(balloon3);

        turtleWrapper.addChildAt(balloonWrapper, 0);
        turtleContainer.addChild(turtleWrapper);

        turtleTimeline
            .set(balloon1StringCmd, {x: -6, y: 24})
            .set(balloon2StringCmd, {y: 24})
            .set(balloon3StringCmd, {x: 6, y: 24})
            .set(balloon1Cmd, {x: -11, y: -1, w: 0, h: 0})
            .set(balloon2Cmd, {x: 0, y: -3, w: 0, h: 0})
            .set(balloon3Cmd, {x: 9, y: -1, w: 0, h: 0})
            .add('balloon')
            .to(balloon1StringCmd, .4, {x: -10, y: -4})
            .to(balloon2StringCmd, .4, {y: -11}, 'balloon+=0.2')
            .to(balloon3StringCmd, .4, {x: 10, y: -4}, 'balloon+=0.4')
            .to(balloon1Cmd, .4, {x: -18, y: -20, w: 14, h: 18}, 'balloon+=0.2')
            .to(balloon2Cmd, .4, {x: -7, y: -24, w: 14, h: 18}, 'balloon+=0.4')
            .to(balloon3Cmd, .4, {x: 4, y: -20, w: 14, h: 18}, 'balloon+=0.6')
        ;

        var flyTimeline = new TimelineMax({autoRemoveChildren: false});
        flyTimeline
            .add('hands')
            .to(hand1Wrapper, .44, {rotation: "-=10", startAt: {rotation: "+=8"}, repeat: -1, yoyo: true}, 'hands')
            .to(hand2Wrapper, .44, {rotation: "+=10", startAt: {rotation: "-=8"}, repeat: -1, yoyo: true}, 'hands');

        return [turtleTimeline, turtleContainer, turtleWrapper, balloonWrapper];
    }

    function getCloudTimeline(x, y) {
        var cloudTimeline = new TimelineMax({autoRemoveChildren: false});

        var cloudContainer = new createjs.Container();
        cloudContainer.x = x;
        cloudContainer.y = y;

        var sky = new createjs.Shape();
        sky.graphics.beginFill(COLOR_HIGH_SKY)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        cloudContainer.addChild(sky);

        var cloudWrapper = new createjs.Container();
        var cloud = new createjs.Shape();
        cloud.graphics
            .beginFill('white')
            .drawCircle(-20, 5, 13)
            .endFill()
            .beginFill('white')
            .drawCircle(-5, 12, 12)
            .endFill()
            .beginFill('white')
            .drawCircle(9, 12, 10)
            .endFill()
            .beginFill('white')
            .drawCircle(20, 4, 12)
            .endFill()
            .beginFill('white')
            .drawCircle(-7, -9, 14)
            .endFill()
            .beginFill('white')
            .drawCircle(13, -11, 10)
            .endFill()
            .beginFill('white')
            // filler
            .drawCircle(0, 5, 15)
        ;
        cloudWrapper.addChild(cloud);

        var eyes = new createjs.Shape();
        eyes.graphics.beginFill('black');
        eyes.graphics.drawEllipse(-9, -6, 5, 8);
        eyes.graphics.endFill().beginFill('black');
        eyes.graphics.drawEllipse(4, -6, 5, 8);

        var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, delay: 2, autoRemoveChildren: false});
        eyesTimeline
            .to(eyes, .2, {scaleY: 0, y: -2})
            .to(eyes, .2, {scaleY: 1, y: 0});
        cloudWrapper.addChild(eyes);

        cloudContainer.addChild(cloudWrapper);

        cloudWrapper.x += 6;
        var movingCloudTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true, autoRemoveChildren: false});
        movingCloudTimeline.to(cloudWrapper, 2, {x: "-=12", ease: Power2.easeInOut });

        cloudTimeline
            .add(movingCloudTimeline, 0)
            .add(eyesTimeline, 0);

        return [cloudTimeline, cloudContainer];
    }

    function getRoofTopTimeline(x, y) {
        var roofTopTimeline = new TimelineMax({autoRemoveChildren: false});

        var roofTopContainer = new createjs.Container();
        roofTopContainer.x = x;
        roofTopContainer.y = y;

        var sky = new createjs.Shape();
        sky.graphics.beginFill(COLOR_HIGH_SKY)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        roofTopContainer.addChild(sky);

        var roofTop = new createjs.Shape();
        roofTop.graphics.beginFill('pink')
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180)
            .endFill().beginFill('#fff')
            .rect(10, 8, 16, 17)
            .endFill().beginFill('pink')
            .rect(8, 5, 20, 5);
        roofTopContainer.addChild(roofTop);

        var smoke = new createjs.Shape();
        smoke.graphics.beginFill('white');
        var smokeCmd = smoke.graphics
            .drawEllipse(18, 5, 5, 0)
            .command;

        var smoke2 = new createjs.Shape();
        smoke2.graphics.beginFill('white');
        var smokeCmd2 = smoke.graphics
            .drawEllipse(18, 5, 5, 0)
            .command;

        var smoke3 = new createjs.Shape();
        smoke3.graphics.beginFill('white');
        var smokeCmd3 = smoke.graphics
            .drawEllipse(18, 5, 5, 0)
            .command;

        roofTopContainer.addChild(smoke);
        roofTopContainer.addChild(smoke2);
        roofTopContainer.addChild(smoke3);

        roofTopTimeline
            .to(smokeCmd, 4, {
                x: 13,
                y: -16,
                w: 18,
                h: 5,
                ease: Power1.easeIn,
                repeat: -1
            }, 0)
            .to(smokeCmd2, 4, {
                x: 13,
                y: -16,
                w: 18,
                h: 5,
                ease: Power1.easeIn,
                repeat: -1
            }, 1.3)
            .to(smokeCmd3, 4, {
                x: 13,
                y: -16,
                w: 18,
                h: 5,
                ease: Power1.easeIn,
                repeat: -1
            }, 2.6);
        return [roofTopTimeline, roofTopContainer];
    }

    function getSeaTimeline(x, y) {
        var seaTimeline = new TimelineMax({autoRemoveChildren: false});

        var seaContainer = getSeaContainer(x, y);

        var grassWrapper = new createjs.Container();
        var grass = new createjs.Shape();
        grass.graphics.beginFill('greenyellow');
        grass.graphics
            .drawEllipse(-20, -12, 10, 4)
            .drawEllipse(-20, -2, 10, 4)
            .drawEllipse(-20, 8, 10, 4)
            .drawEllipse(-20, 18, 10, 4)
            .drawEllipse(-8, -12, 10, 4)
            .drawEllipse(-8, -2, 10, 4)
            .drawEllipse(-8, 8, 10, 4)
            .drawEllipse(-8, 18, 10, 4)
            .endFill().beginFill('greenyellow')
            .drawEllipse(-10, -17, 3, 42);
        ;
        grassWrapper.addChild(grass);

        var grass2 = new createjs.Shape();
        grass2.graphics.beginFill('green');
        grass2.graphics
            .drawEllipse(-4, -14, 10, 5)
            .drawEllipse(-4, -4, 10, 5)
            .drawEllipse(-4, 4, 10, 5)
            .drawEllipse(-4, 14, 10, 5)
            .drawEllipse(8, -14, 10, 5)
            .drawEllipse(8, -4, 10, 5)
            .drawEllipse(8, 4, 10, 5)
            .drawEllipse(8, 14, 10, 5)
            .endFill().beginFill('green')
            .drawEllipse(6, -20, 3, 45);
        ;
        grassWrapper.addChild(grass2);

        var bubble = new createjs.Shape();
        var bubbleCmd = bubble.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(-10, -19, 0)
            .command;
        grassWrapper.addChild(bubble);

        var bubble2 = new createjs.Shape();
        var bubbleCmd2 = bubble2.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(-10, -19, 0)
            .command;
        grassWrapper.addChild(bubble2);

        var bubble3 = new createjs.Shape();
        var bubbleCmd3 = bubble3.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(-10, -19, 0)
            .command;
        grassWrapper.addChild(bubble3);

        var bubble4 = new createjs.Shape();
        var bubbleCmd4 = bubble4.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(7, -19, 0)
            .command;
        grassWrapper.addChild(bubble4);

        var bubble5 = new createjs.Shape();
        var bubbleCmd5 = bubble5.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(7, -19, 0)
            .command;
        grassWrapper.addChild(bubble5);

        var bubble6 = new createjs.Shape();
        var bubbleCmd6 = bubble6.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(7, -19, 0)
            .command;
        grassWrapper.addChild(bubble6);

        seaContainer.addChild(grassWrapper);

        seaTimeline
            .to(bubbleCmd, 4, {
                x: -5,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 0)
            .to(bubbleCmd2, 4, {
                x: -5,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 1.3)
            .to(bubbleCmd3, 4, {
                x: -5,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 2.6)
            .to(bubbleCmd4, 4, {
                x: 15,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 0.5)
            .to(bubbleCmd5, 4, {
                x: 15,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 1.8)
            .to(bubbleCmd6, 4, {
                x: 15,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 3.1)
        ;
        return [seaTimeline, seaContainer, grassWrapper];
    }

    function getFishTimeline(x, y) {
        var fishTimeline = new TimelineMax({autoRemoveChildren: false});

        var fishContainer = getSeaWaveContainer(x, y);

//    var wave = new createjs.Shape();
//    var waveSize = 4;
//    var waveTop = -25;
//    wave.graphics.beginFill(COLOR_HIGH_SKY)
//        .arc(-40, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-30, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-20, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-10, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(0, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(10, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(20, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(30, waveTop, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(40, waveTop, waveSize, 0, 180 * Math.PI / 180)
//    ;
//    fishContainer.addChild(wave);

        var fishWrapper = new createjs.Container();
        var fish = new createjs.Shape();
        fish.graphics.beginFill(COLOR_FISH);
        fish.graphics.drawEllipse(-15, -8, 30, 16);
        fishWrapper.addChild(fish);

        var wing = new createjs.Shape();
        wing.graphics.beginFill(COLOR_FISH);
        wing.graphics.moveTo(-4, -7)
            .lineTo(6, -7);
        var wingCmd = wing.graphics
            .lineTo(8, -12)
            .command;
        fishWrapper.addChild(wing);

        var wing2 = new createjs.Shape();
        wing2.graphics.beginFill(COLOR_FISH);
        wing2.graphics.moveTo(-4, 7)
            .lineTo(6, 7);
        var wingCmd2 = wing2.graphics
            .lineTo(8, 12)
            .command;
        fishWrapper.addChild(wing2);

        var tail = new createjs.Shape();
        tail.graphics.beginFill(COLOR_FISH);
        tail.graphics.moveTo(11, 0);
        var tailCmd = tail.graphics
            .lineTo(22, -8)
            .command;
        tail.graphics.lineTo(19, 0);
        var tailCmd2 = tail.graphics
            .lineTo(22, 8)
            .command;
        tail.graphics.closePath();
        fishWrapper.addChild(tail);

        var eye = new createjs.Shape();
        eye.graphics.beginFill('black');
        eye.graphics.drawCircle(-8, -2, 1.5);
        fishWrapper.addChild(eye);

        var bubble = new createjs.Shape();
        var bubbleCmd = bubble.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(-12, -8, 0)
            .command;
        fishContainer.addChild(bubble);

        fishContainer.addChild(fishWrapper);

        var bubbleTimeline = new TimelineMax({repeat: -1, repeatDelay: 1.2, autoRemoveChildren: false});
        bubbleTimeline.to(bubbleCmd, 2, {
            x: -10,
            y: -24,
            radius: 1,
            ease: Power1.easeIn,
            onStart: function () {
                bubble.alpha = 1
            },
            onComplete: function (e) {
                bubble.alpha = 0;
            }
        })

        fishTimeline
            .add('fish')
            .to(wingCmd, 1, {x: 9, y: -9, repeat: -1, yoyo: true}, 'fish')
            .to(wingCmd2, 1, {x: 9, y: 9, repeat: -1, yoyo: true}, 'fish')
            .to(tailCmd, 1, {y: -6, repeat: -1, yoyo: true}, 'fish')
            .to(tailCmd2, 1, {y: 6, repeat: -1, yoyo: true}, 'fish');

        return [fishTimeline, fishContainer];
    }

    function getCactusTimeline(x, y) {
        var cactusTimeline = new TimelineMax({autoRemoveChildren: false});

        var cactusContainer = new createjs.Container();
        cactusContainer.x = x;
        cactusContainer.y = y;

        var segmentWrapper = new createjs.Container();

        var segmentDesert = new createjs.Shape();
        segmentDesert.graphics.beginFill(COLOR_DESERT);
        var segmentDesertCmd = segmentDesert.graphics.arc(0, 0, CIRCLE_RADIUS, 90 * Math.PI / 180, 90 * Math.PI / 180).command;

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_DESERT_SKY);
        var segmentSkyCmd = segmentSky.graphics.arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180).command;

        segmentWrapper.addChild(segmentSky);
        segmentWrapper.addChild(segmentDesert);

        var cactusWrapper = new createjs.Container();

        var cactus = new createjs.Shape();
        cactus.graphics.beginFill(COLOR_CACTUS);
        var cactusCmd1 = cactus.graphics.rect(-15, 25, 30, 0).command;
        cactus.graphics.endFill().beginFill(COLOR_CACTUS);
        var cactusCmd2 = cactus.graphics.arc(0, -10, 15, 0 * Math.PI / 180, 0 * Math.PI / 180).command;
        cactusWrapper.addChild(cactus);

        var leftHand = new createjs.Shape();
        leftHand.graphics.setStrokeStyle(10, 'round', 'round')
            .beginStroke(COLOR_CACTUS)
            .moveTo(-15, 10);
        var leftHandCmd = leftHand.graphics.arcTo(-22, 10, -22, -20, 5).command;
        var leftHandCmd2 = leftHand.graphics.lineTo(-15, 10).command;
        cactusWrapper.addChild(leftHand);

        var rightHand = new createjs.Shape();
        rightHand.graphics
            .setStrokeStyle(10, 'round', 'round')
            .beginStroke(COLOR_CACTUS)
            .moveTo(15, 10);
        var rightHandCmd = rightHand.graphics.arcTo(22, 10, 22, 20, 5).command;
        var rightHandCmd2 = rightHand.graphics.lineTo(15, 10).command;
        cactusWrapper.addChild(rightHand);

        var stripe = new createjs.Shape();
        stripe.graphics.setStrokeStyle(1, 'round', 'round')
            .beginStroke(COLOR_CACTUS_STRIPE);
        stripe.graphics.moveTo(0, 25);
        var stripeCmd = stripe.graphics.lineTo(0, 25).command;

        stripe.graphics.endStroke()
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(-8, 25);
        var stripeCmd2 = stripe.graphics.lineTo(-8, 25).command;

        stripe.graphics.endStroke()
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(8, 25);
        var stripeCmd3 = stripe.graphics.lineTo(8, 25).command;

        cactusWrapper.addChild(stripe);
        var leftStripe = new createjs.Shape();
        leftStripe.graphics
            .setStrokeStyle(1, 'round', 'round')
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(-15, 10);
        var leftStripeCmd = leftStripe.graphics.arcTo(-22, 10, -22, -20, 5).command;
        var leftStripeCmd2 = leftStripe.graphics.lineTo(-15, 10).command;
        cactusWrapper.addChild(leftStripe);

        var rightStripe = new createjs.Shape();
        rightStripe.graphics
            .setStrokeStyle(1, 'round', 'round')
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(15, 10);
        var rightStripeCmd = rightStripe.graphics.arcTo(22, 10, 22, 20, 5).command;
        var rightStripeCmd2 = rightStripe.graphics.lineTo(15, 10).command;
        cactusWrapper.addChild(rightStripe);

        var eyes = new createjs.Shape();
        eyes.graphics.beginFill('black');
        eyes.graphics.drawEllipse(-9, -9, 5, 8);
        eyes.graphics.endFill().beginFill('black');
        eyes.graphics.drawEllipse(4, -9, 5, 8);

        var cactusEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, delay: 2, autoRemoveChildren: false});
        cactusEyesTimeline
            .to(eyes, .2, {scaleY: 0, y: -5})
            .to(eyes, .2, {scaleY: 1, y: 0});

        cactusWrapper.addChild(eyes);

        var flowerWrapper = new createjs.Container();
        flowerWrapper.x = 12;
        flowerWrapper.y = -19;
        flowerWrapper.scaleX = 0;
        flowerWrapper.scaleY = 0;

        var flower = new createjs.Shape();
        flower.graphics
            .beginFill('yellow')
            .drawCircle(0, 0, 3)
        flowerWrapper.addChild(flower);

        var petalColor = 'hotpink';
        var petalRadius = 3;

        var petal1 = new createjs.Shape();
        petal1.graphics.beginFill(petalColor).drawCircle(0, -5.5, petalRadius);
        flowerWrapper.addChildAt(petal1, 0);

        var petal2 = new createjs.Shape();
        petal2.graphics.beginFill(petalColor).drawCircle(4, -2, petalRadius);
        flowerWrapper.addChildAt(petal2, 0);

        var petal3 = new createjs.Shape();
        petal3.graphics.beginFill(petalColor).drawCircle(3, 3.5, petalRadius);
        flowerWrapper.addChildAt(petal3, 0);

        var petal4 = new createjs.Shape();
        petal4.graphics.beginFill(petalColor).drawCircle(-3, 3.5, petalRadius);
        flowerWrapper.addChildAt(petal4, 0);

        var petal5 = new createjs.Shape();
        petal5.graphics.beginFill(petalColor).drawCircle(-4, -2, petalRadius);
        flowerWrapper.addChildAt(petal5, 0);

        segmentWrapper.alpha = flowerWrapper.alpha = cactusWrapper.alpha = 0;
        cactusContainer.addChild(segmentWrapper);
        cactusWrapper.addChild(flowerWrapper);
        cactusContainer.addChildAt(cactusWrapper, 1);

        cactusTimeline
            .add('initialCactus')
            .set([segmentWrapper, flowerWrapper, cactusWrapper], {alpha: 1})
            .set([segmentSky, segmentDesert, cactus, eyes, leftHand, rightHand, leftStripe, rightStripe], {alpha: 0})
            .set(stripeCmd, {x: 0, y: 25})
            .set(stripeCmd2, {x: -8, y: 25})
            .set(stripeCmd3, {x: 8, y: 25})
            .set([leftHandCmd, leftStripeCmd], {x1: -15, y1: 10, x2: -15, y2: 10, radius: 5})
            .set([rightHandCmd, rightStripeCmd], {x1: 15, y1: 10, x2: 15, y2: 10, radius: 5})
            .set(segmentDesertCmd, {startAngle: 90 * Math.PI / 180, endAngle: 90 * Math.PI / 180})
            .set(segmentSkyCmd, {startAngle: 30 * Math.PI / 180, endAngle: 150 * Math.PI / 180})
            .set(segmentDesert, {alpha: 1})
            .to(segmentDesertCmd, .4, {startAngle: 30 * Math.PI / 180, endAngle: 150 * Math.PI / 180, ease: Power2.easeIn })
            .set([segmentSky, cactus, leftHand, rightHand, leftStripe, rightStripe], {alpha: 1})
            .add('segmentDesertComplete', '+=0')
            .add('cactusCmd1Complete', '+=0.4')
            .add('handCmdComplete', '+=0.6')
            .add('stripeCmdComplete', '+=0.8')
            .add('eyeComplete', '+=1.4')
            .to(segmentSkyCmd, .55, {startAngle: -90 * Math.PI / 180, endAngle: 270 * Math.PI / 180, ease: Power2.easeOut }, 'segmentDesertComplete')
            .to(cactusCmd1, .4, {h: -35, ease: Power2.easeIn }, 'segmentDesertComplete')
            .to(stripeCmd, .5, {y: -20, ease: Power2.easeIn }, 'segmentDesertComplete')
            .to(stripeCmd2, .5, {y: -16, ease: Power2.easeIn }, 'segmentDesertComplete')
            .to(stripeCmd3, .5, {y: -16, ease: Power2.easeIn }, 'segmentDesertComplete')
            .to(cactusCmd2, .24, {startAngle: -90 * Math.PI / 180, endAngle: 270 * Math.PI / 180, startAt: {startAngle: 0, endAngle: 180 * Math.PI / 180}, ease: Power2.easeOut }, 'cactusCmd1Complete')
            .to([leftHandCmd, leftStripeCmd], .2, {x1: -22, y1: 10, x2: -22, y2: 10}, 'cactusCmd1Complete')
            .to([rightHandCmd, rightStripeCmd], .2, {x1: 22, y1: 10, x2: 22, y2: 10}, 'cactusCmd1Complete')
            .to([leftHandCmd2, leftStripeCmd2], .2, {x: -22, y: -5, startAt: {x: -22, y: 10}}, 'handCmdComplete')
            .to([rightHandCmd2, rightStripeCmd2], .2, {x: 22, y: -10, startAt: {x: 22, y: 10}}, 'handCmdComplete')
            .set(eyes, {alpha: 1}, 'stripeCmdComplete')
            .to(flowerWrapper, .6, { scaleX: 1, scaleY: 1, ease: Back.easeOut.config(4) }, 'eyeComplete')
        ;

        return [cactusTimeline, cactusContainer, flowerWrapper, cactusWrapper, cactusEyesTimeline];
    }

    function getDesertFaceTimeline(x, y) {
        var desertFaceTimeline = new TimelineMax({autoRemoveChildren: false});

        var desertFaceContainer = new createjs.Container();
        desertFaceContainer.x = x;
        desertFaceContainer.y = y;

        var desert = new createjs.Shape();
        desert.graphics
            .beginFill(COLOR_DESERT)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        desertFaceContainer.addChild(desert);

        var desertFace = new createjs.Container();
        var eyes = new createjs.Shape();
        eyes.alpha = 0;
        var eyesCmd = eyes.graphics
            .beginFill('black')
            .drawEllipse(-14, 0, 6, 10)
            .command;
        var eyesCmd2 = eyes.graphics
            .endFill().beginFill('black')
            .drawEllipse(8, 0, 6, 10)
            .command;

        var desertFaceEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, delay: 2, autoRemoveChildren: false});
        desertFaceEyesTimeline
            .to(eyes, .2, {scaleY: 0, y: 5})
            .to(eyes, .2, {scaleY: 1, y: 0});

        desertFace.addChild(eyes);

        var eyebrows = new createjs.Shape();
        eyebrows.alpha = 0;
        var eyebrowsStartCmd = eyebrows.graphics
            .setStrokeStyle(2, 'round', 'round')
            .beginStroke('#000')
            .moveTo(-8, -18)
            .command;
        var eyebrowsArcCmd = eyebrows.graphics
            .arcTo(-18, -13, -28, -3, 20)
            .command;
        var eyebrowsEndCmd = eyebrows.graphics
            .lineTo(-28, -3)
            .command;

        var eyebrowsStartCmd2 = eyebrows.graphics
            .endStroke().beginStroke('#000')
            .moveTo(8, -18)
            .command;
        var eyebrowsArcCmd2 = eyebrows.graphics
            .arcTo(18, -13, 28, -3, 20)
            .command;
        var eyebrowsEndCmd2 = eyebrows.graphics
            .lineTo(28, -3)
            .command;
        desertFace.addChild(eyebrows);

        var tearWrapper = new createjs.Container();
        var tear = new createjs.Shape();
        tear.graphics.beginFill(COLOR_DESERT_FACE_TEAR)
            .moveTo(0, 0)
            .lineTo(-1, 7)
            .lineTo(-7, 1)
            .endFill().beginFill(COLOR_DESERT_FACE_TEAR)
            .drawCircle(-7, 7, 6);
        tear.rotation = -45;
        tearWrapper.x = 11;
        tearWrapper.y = 10;
        tearWrapper.scaleX = tearWrapper.scaleY = 0;
        tearWrapper.addChild(tear);
        desertFace.addChild(tearWrapper);

        var pink = new createjs.Shape();
        pink.graphics.beginFill('#FF8097')
            .drawEllipse(-22, 12, 14, 5)
            .drawEllipse(8, 12, 14, 5);
        pink.alpha = 0;
        desertFace.addChild(pink);

        desertFaceContainer.addChild(desertFace);
        desertFaceTimeline
            .set([eyes, eyebrows], {alpha: 0})
            .to([eyes, eyebrows], .6, {alpha: 1})
            .set(eyebrowsArcCmd, {x1: -18, y1: -13, x2: -28, y2: -3, radius: 20})
            .set(eyebrowsArcCmd2, {x1: 18, y1: -13, x2: 28, y2: -3, radius: 20})
            .add('desertFace', '+=1.2')
            .add('happyFace', '+=6')
            .to(eyebrowsArcCmd, 1.2, {x1: -13, y1: -8, x2: -28, y2: -3, radius: 20}, 'desertFace')
            .to(eyebrowsArcCmd2, 1.2, {x1: 13, y1: -8, x2: 28, y2: -3, radius: 20}, 'desertFace')
            .to(tearWrapper, 2, {scaleX: 1, scaleY: 1, ease: Power4.easeOut}, 'desertFace')
            .set(tearWrapper, {alpha: 0}, 'happyFace')
            .to(eyebrowsStartCmd, 1.0, {x: -6, y: -4}, 'happyFace')
            .to(eyebrowsArcCmd, 1.0, {x1: -17, y1: -20, x2: -28, y2: 0, radius: 10}, 'happyFace')
            .to(eyebrowsEndCmd, 1.0, {x: -28, y: 0}, 'happyFace')
            .to(eyebrowsStartCmd2, 1.0, {x: 6, y: -4}, 'happyFace')
            .to(eyebrowsArcCmd2, 1.0, {x1: 17, y1: -20, x2: 28, y2: 0, radius: 10}, 'happyFace')
            .to(eyebrowsEndCmd2, 1.0, {x: 28, y: 0}, 'happyFace')
            .to([eyesCmd, eyesCmd2], 1.0, {x: '+=2', y: '+=2', h: '0', w: '0'}, 'happyFace')
            .to(pink, 1.0, {alpha: 1}, 'happyFace')
        ;

        return [desertFaceTimeline, desertFaceContainer];
    }

    function getDesertGroundTimeline(x, y) {
        var desertGroundTimeline = new TimelineMax({autoRemoveChildren: false});

        var desertGroundContainer = getDesertGroundContainer(x, y);

        var creatureWrapper1 = getCreatureContainer();
        var creatureWrapper2 = getCreatureContainer();
        var creatureWrapper3 = getCreatureContainer();

        creatureWrapper1.scaleX = creatureWrapper1.scaleY
            = creatureWrapper2.scaleX = creatureWrapper2.scaleY
            = creatureWrapper3.scaleX = creatureWrapper3.scaleY
            = 0;

        creatureWrapper2.x -= 24;
        desertGroundContainer.addChild(creatureWrapper1);
        desertGroundContainer.addChild(creatureWrapper2);
        desertGroundContainer.addChild(creatureWrapper3);

        desertGroundTimeline
            .set([creatureWrapper1, creatureWrapper2, creatureWrapper3], {scaleX: 0, scaleY: 0})
            .to([creatureWrapper1, creatureWrapper2], .2, {scaleX: 1, scaleY: 1})
            .to([creatureWrapper1, creatureWrapper2], .2, {y: '+=13'})
            .add('drop')
            .add(new TimelineMax({repeat: 3, autoRemoveChildren: false})
                .to(creatureWrapper2, .6, {y: '-=19.5', rotation: '+=180'})
                .to(creatureWrapper2, .6, {y: '+=19.5', rotation: '+=180'})
                .to(creatureWrapper2, .03, {})
                , 'drop')
            .add(new TimelineMax({autoRemoveChildren: false})
                .to(creatureWrapper1, .3, {x: '+=12', y: '-=13', rotation: '+=90'})
                .to(creatureWrapper1, .3, {x: '+=12', y: '+=13', rotation: '+=90'})
                .to(creatureWrapper1, .4, {y: '-=26', rotation: '+=90'})
                .to(creatureWrapper1, .4, {y: '+=26', rotation: '+=90'})
                .to(creatureWrapper1, .03, {})
                .add(new TimelineMax({repeat: 2, autoRemoveChildren: false})
                    .to(creatureWrapper1, .6, {y: '-=15', rotation: '+=180'})
                    .to(creatureWrapper1, .6, {y: '+=15', rotation: '+=180'})
                    .to(creatureWrapper1, .03, {}))
                , 'drop')
            .add(new TimelineMax({autoRemoveChildren: false})
                .to(creatureWrapper3, .3, {scaleX: 1, scaleY: 1})
                .to(creatureWrapper3, .2, {y: '+=13'})
                .add(new TimelineMax({repeat: 2})
                    .to(creatureWrapper3, .6, {y: '-=13', rotation: '+=180'})
                    .to(creatureWrapper3, .6, {y: '+=13', rotation: '+=180'})
                    .to(creatureWrapper3, .03, {}))
                , 'drop+=0.5')
        ;
        return [desertGroundTimeline, desertGroundContainer];
    }

    function getJackalopeTimeline(x, y) {
        var jackalopeTimeline = new TimelineMax({autoRemoveChildren: false});

        var jackalopeContainer = getIceContainer(x, y);

        var jackalopeWrapper = new createjs.Container();
        var body = new createjs.Shape();
        body.graphics
            .beginFill(COLOR_JACKALOPE)
            .arc(0, 25, 12.5, 180 * Math.PI / 180, 0 * Math.PI / 180);
        jackalopeWrapper.addChild(body);

        var faceWrapper = new createjs.Container();

        var face = new createjs.Shape();
        face.graphics
            .beginFill(COLOR_JACKALOPE)
            .drawEllipse(-7, 0, 14, 15);
        faceWrapper.addChild(face);

        var eyes = new createjs.Shape();
        eyes.graphics
            .beginFill('black')
            .drawCircle(-3, 7, 1.5)
            .drawCircle(3, 7, 1.5);
        faceWrapper.addChild(eyes);

        var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, yoyo: true, autoRemoveChildren: false});
        eyesTimeline
            .to(eyes, .2, {scaleY: 0, y: 7})
            .to(eyes, .2, {scaleY: 1, y: 0});

        var ear = new createjs.Shape();
        ear.graphics
            .beginFill(COLOR_JACKALOPE)
            .drawEllipse(4.5, -14, 4, 14);
        ear.rotation = 40;
        faceWrapper.addChild(ear);

        var ear2 = new createjs.Shape();
        ear2.graphics
            .beginFill(COLOR_JACKALOPE)
            .drawEllipse(-8.5, -14, 4, 14);
        ear2.rotation = -40;
        faceWrapper.addChild(ear2);

        var anthelopeHorns = new createjs.Shape();
        anthelopeHorns.graphics
            .setStrokeStyle(2, 'round', 'round')
            .beginStroke(COLOR_JACKALOPE_HORN)
            .moveTo(-3, 0)
            .arcTo(-9, -3, -4, -6, 4)
            .endStroke().beginStroke(COLOR_JACKALOPE_HORN)
            .moveTo(-5, -3)
            .arcTo(-17, -9, -9, -14, 6)
            .endStroke().beginStroke(COLOR_JACKALOPE_HORN)
            .moveTo(3, 0)
            .arcTo(9, -3, 4, -6, 4)
            .endStroke().beginStroke(COLOR_JACKALOPE_HORN)
            .moveTo(5, -3)
            .arcTo(17, -9, 9, -14, 6)
        ;
        faceWrapper.addChild(anthelopeHorns);

        faceWrapper.x = 5;
        jackalopeWrapper.addChild(faceWrapper);
        jackalopeContainer.addChild(jackalopeWrapper);

        var earTimeline = new TimelineMax({repeat: -1, repeatDelay: 1.4, autoRemoveChildren: false});
        earTimeline
            .add('s1')
            .to(ear, .2, {rotation: 50}, 's1')
            .to(ear2, .2, {rotation: -50}, 's1')
            .add('s2')
            .to(ear, .2, {rotation: 45}, 's2')
            .to(ear2, .2, {rotation: -45}, 's2')
            .add('s3')
            .to(ear, .2, {rotation: 55}, 's3')
            .to(ear2, .2, {rotation: -55}, 's3')
            .add('s4')
            .to(ear, .2, {rotation: 40}, 's4')
            .to(ear2, .2, {rotation: -40}, 's4');

        return [jackalopeTimeline, jackalopeContainer];
    }

    function getYetiTimeline(x, y) {
        var yetiTimeline = new TimelineMax({autoRemoveChildren: false});

        var yetiContainer = getIceContainer(x, y);

        var yetiWrapper = new createjs.Container();

        var head = new createjs.Shape();
        head.graphics.beginFill(COLOR_YETI)
            .drawCircle(0, -15, 15);

        var face = new createjs.Shape();
        face.graphics.beginFill(COLOR_YETI_DARK_BLUE)
            .drawCircle(0, -15, 11);

        var eyes = new createjs.Shape();
        eyes.graphics.beginFill('black')
            .drawEllipse(-6, -20, 3, 4)
            .drawEllipse(4, -20, 3, 4)
        ;
        var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 1.5, yoyo: true, autoRemoveChildren: false});
        eyesTimeline
            .to(eyes, .2, {scaleY: 0, y: -18})
            .to(eyes, .2, {scaleY: 1, y: 0});

        var mouth = new createjs.Shape();
        mouth.graphics.beginFill(COLOR_YETI)
            .arc(0, -24, 21, 30 * Math.PI / 180, 150 * Math.PI / 180)
        ;

        var teeth = new createjs.Shape();
        teeth.graphics.beginFill(COLOR_YETI_DARK_BLUE)
            .arc(0, -21, 17, 35 * Math.PI / 180, 145 * Math.PI / 180)
            .endFill()
            .setStrokeStyle(4)
            .beginStroke(COLOR_YETI_BLUE)
            .moveTo(-4.7, -11)
            .lineTo(-4.7, -8)
            .moveTo(4.7, -11)
            .lineTo(4.7, -8)
        ;

        var body = new createjs.Shape();
        body.graphics
            .beginFill(COLOR_YETI)
            .drawCircle(0, 0, 24)
        ;

        var tummy = new createjs.Shape();
        tummy.graphics
            .beginFill(COLOR_YETI_BLUE)
            .drawCircle(0, 0, 18);

        var leftHandWrapper = new createjs.Container();
        leftHandWrapper.x = -22;
        leftHandWrapper.y = -8;

        var leftHand = new createjs.Shape();
        leftHand.graphics
            .setStrokeStyle(8, 'round', 'round')
            .beginStroke(COLOR_YETI_DARK_BLUE)
            .moveTo(0, 0)
            .lineTo(0, 16);
        leftHand.rotation = -20;
        leftHandWrapper.addChild(leftHand);

        var leftHandTimeline = new TimelineMax({repeat: -1, yoyo: true, autoRemoveChildren: false});
        leftHandTimeline
            .to(leftHand, .8, {rotation: "+=40", ease: Sine.easeOut})
            .to(leftHand, .8, {rotation: "-=40", ease: Sine.easeIn})

        var rightHandWrapper = new createjs.Container();
        rightHandWrapper.x = 22;
        rightHandWrapper.y = -8;

        var rightHand = new createjs.Shape();
        rightHand.graphics
            .setStrokeStyle(8, 'round', 'round')
            .beginStroke(COLOR_YETI_DARK_BLUE)
            .moveTo(0, 0)
            .lineTo(0, 16)
        ;
        rightHand.rotation = 20;
        rightHandWrapper.addChild(rightHand);

        var rightHandTimeline = new TimelineMax({repeat: -1, yoyo: true, autoRemoveChildren: false});
        rightHandTimeline
            .to(rightHand, .8, {rotation: "-=40", ease: Sine.easeOut})
            .to(rightHand, .8, {rotation: "+=40", ease: Sine.easeIn})

        var foot = new createjs.Shape();
        foot.graphics
            .beginFill(COLOR_YETI)
            .setStrokeStyle(7, 'round', 'round')
            .beginStroke(COLOR_YETI_DARK_BLUE)
            .moveTo(-6, 22)
            .lineTo(-20, 22)
            .moveTo(6, 22)
            .lineTo(20, 22)
        ;

        var hair = new createjs.Shape();
        hair.graphics
            .setStrokeStyle(2)
            .beginStroke(COLOR_YETI)
            .moveTo(0, -10)
            .lineTo(0, -33)
            .moveTo(0, -10)
            .lineTo(-5, -32)
            .moveTo(0, -10)
            .lineTo(5, -32)

        yetiWrapper.addChild(body);
        yetiWrapper.addChild(tummy);
        yetiWrapper.addChild(leftHandWrapper);
        yetiWrapper.addChild(rightHandWrapper);

        var headWrapper = new createjs.Container();
        headWrapper.addChild(hair);
        headWrapper.addChild(head);
        headWrapper.addChild(face);
        headWrapper.addChild(mouth);
        headWrapper.addChild(teeth);
        headWrapper.addChild(eyes);
        headWrapper.scaleX = headWrapper.scaleY = 0.9;
        headWrapper.y -= 6;

        yetiWrapper.addChild(headWrapper);
        yetiWrapper.addChild(foot);

        yetiContainer.addChild(yetiWrapper);

        return [yetiTimeline, yetiContainer, leftHandTimeline, rightHandTimeline, leftHand, rightHand];
    }

    function getSeaMonsterTimeline(x, y) {
        var seaMonsterTimeline = new TimelineMax({autoRemoveChildren: false});

        var seaMonsterContainer = getIceSeaContainer(x, y);

        var seaMonsterWrapper = new createjs.Container();

        var seaMonster = new createjs.Shape();
        var seaMonsterCmd = seaMonster.graphics
            .beginFill(COLOR_SEA_MONSTER)
            .arc(-10, 45, 20, 269 * Math.PI / 180, -90 * Math.PI / 180)
            .command;

        var seaMonsterCmd2 = seaMonster.graphics
            .endFill().beginFill(COLOR_SEA_MONSTER)
            .rect(10, 25, 8, -40)
            .command;

        var seaMonsterCmd3 = seaMonster.graphics
            .endFill().beginFill(COLOR_SEA_MONSTER)
            .drawEllipse(10, -22, 20, 12)
            .command;
        seaMonsterWrapper.addChild(seaMonster);

        var eye = new createjs.Shape();
        eye.graphics
            .beginFill('black')
            .drawCircle(0, 2, 2);
        var eyeWrapper = new createjs.Container();
        eyeWrapper.x = 23;
        eyeWrapper.addChild(eye);
        seaMonsterWrapper.addChild(eyeWrapper);

        var eyeTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, autoRemoveChildren: false});
        eyeTimeline
            .to(eye, .2, {scaleY: 0, y: 2})
            .to(eye, .2, {scaleY: 1, y: 0});

        seaMonsterContainer.addChildAt(seaMonsterWrapper, 1);

        seaMonsterTimeline
            .set(seaMonsterCmd, {y: 50, startAngle: 269 * Math.PI / 180, endAngle: -90 * Math.PI / 180})
            .set(seaMonsterCmd2, {h: 7})
            .set(seaMonsterCmd3, {y: 25})
            .set(eyeWrapper, {y: 28})
            .add('head', '+=0.5')
            .add('seaMonster', '+=1')
            .to(seaMonsterCmd2, 1, {h: -40}, 'head')
            .to(seaMonsterCmd3, 1, {y: -22}, 'head')
            .to(eyeWrapper, 1, {y: -19}, 'head')
            .to(seaMonsterCmd, .5, {startAngle: 180 * Math.PI / 180, endAngle: 0 * Math.PI / 180, ease: Sine.easeOut}, 'seaMonster')
            .to(seaMonsterCmd, .5, {y: 25}, 'seaMonster')
        ;

        return [seaMonsterTimeline, seaMonsterContainer];
    }

    function getSharkTimeline(x, y) {
        var sharkTimeline = new TimelineMax({repeat: -1, autoRemoveChildren: false});

        var sharkContainer = getIceSeaContainer(x, y);

        var shark = new createjs.Shape();
        shark.graphics.beginFill(COLOR_SHARK)
            .moveTo(-25, 25)
            .arcTo(-12.5, 5, 0, 2, 40)
            .arcTo(2, 12, 8, 25, 30)
            .lineTo(8, 25)
        ;
        sharkContainer.addChild(shark);

        sharkTimeline
            .set(shark, {x: 36, scaleX: 1})
            .to(shark, 2, {x: -19})
            .to(shark, .1, {x: -38, scaleX: -1})
            .to(shark, 2, {x: 17})
            .to(shark, .1, {x: 36, scaleX: 1});

        return [sharkTimeline, sharkContainer];
    }

    function getSnakeTimeline(x, y) {
        var snakeTimeline = new TimelineMax({autoRemoveChildren: false});

        var snakeContainer = new createjs.Container();
        snakeContainer.x = x;
        snakeContainer.y = y;

        var segmentDesert = new createjs.Shape();
        segmentDesert.graphics.beginFill(COLOR_DESERT)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_DESERT_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        snakeContainer.addChild(segmentSky);
        snakeContainer.addChild(segmentDesert);

        var snakeWrapper = new createjs.Container();

        var snake = new createjs.Shape();
        var snakeCmd1 = snake.graphics.beginFill(COLOR_SNAKE)
            .rect(-15, 20, 30, 5)
            .command;
        var snakeCmd2 = snake.graphics
            .rect(10, 15, 20, 5)
            .command;
        var snakeCmd3 = snake.graphics
            .rect(-5, 10, 10, 5)
            .command;
        var snakeCmd4 = snake.graphics
            .rect(-2.5, 10, 5, 14)
            .command;

        var head = new createjs.Shape();
        var headCmd = head.graphics
            .beginFill(COLOR_SNAKE)
            .drawEllipse(-2.5, -10, 14, 8)
            .command;

        snakeWrapper.addChild(snake);
        snakeWrapper.addChild(head);

        var eyes = new createjs.Shape();
        eyes.graphics
            .beginFill('black')
            .drawEllipse(6, -8, 2, 2);
        snakeWrapper.addChild(eyes);

        var hands = new createjs.Shape();
        var handsCmd1 = hands.graphics
            .beginFill(COLOR_SNAKE)
            .drawCircle(-15, 0, 5)
            .command;
        var handsCmd2 = hands.graphics
            .endFill().beginFill(COLOR_SNAKE)
            .drawCircle(-23, 0, 2)
            .command;
        var handsCmd3 = hands.graphics
            .endFill().beginFill(COLOR_SNAKE)
            .drawCircle(-21, -5, 2)
            .command;
        var handsCmd4 = hands.graphics
            .endFill().beginFill(COLOR_SNAKE)
            .drawCircle(-17, -8, 2)
            .command;
        var handsCmd5 = hands.graphics
            .endFill().beginFill(COLOR_SNAKE)
            .drawCircle(22, 0, 5)
            .command;
        var handsCmd6 = hands.graphics
            .endFill().beginFill(COLOR_SNAKE)
            .drawCircle(30, 0, 2)
            .command;
        var handsCmd7 = hands.graphics
            .endFill().beginFill(COLOR_SNAKE)
            .drawCircle(28, -5, 2)
            .command;
        var handsCmd8 = hands.graphics
            .endFill().beginFill(COLOR_SNAKE)
            .drawCircle(24, -8, 2)
            .command;

        snakeWrapper.addChild(hands);

        var snakeEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, autoRemoveChildren: false});
        snakeEyesTimeline
            .to(eyes, .2, {scaleY: 0, y: -7})
            .to(eyes, .2, {scaleY: 1, y: 0});

        snakeContainer.addChild(snakeWrapper);

        snakeTimeline
            .set([snakeCmd1, snakeCmd2, snakeCmd3], {w: 0})
            .set(snakeCmd4, {h: 0})
            .set(headCmd, {w: 0})
            .set(eyes, {alpha: 0})
            .set([handsCmd1, handsCmd2, handsCmd3, handsCmd4, handsCmd5, handsCmd6, handsCmd7, handsCmd8], {radius: 0})
            .to(snakeCmd1, .4, {w: 30})
            .to(snakeCmd2, .35, {w: -20})
            .to(snakeCmd3, .3, {w: 10})
            .to(snakeCmd4, .3, {h: -16})
            .to(headCmd, .3, {w: 14})
            .set(eyes, {alpha: 1})
            .to(handsCmd1, .2, {radius: 5}, '+=.15')
            .to([handsCmd2, handsCmd3, handsCmd4], .2, {radius: 2})
            .to(handsCmd5, .2, {radius: 5})
            .to([handsCmd6, handsCmd7, handsCmd8], .2, {radius: 2})
        ;

        return [snakeTimeline, snakeContainer];
    }

    function getHugTimeline(x, y) {
        var hugTimeline = new TimelineMax({autoRemoveChildren: false});

        var hugContainer = new createjs.Container();
        hugContainer.x = x;
        hugContainer.y = y;

        var background = new createjs.Shape();
        background.graphics.beginFill(COLOR_SKY)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        hugContainer.addChild(background);

        var startAngle = 50;
        var endAngle = 75;
        var tree = new createjs.Shape();
        tree.graphics.beginFill(COLOR_JACKALOPE_HORN)
            .arc(0, 0, CIRCLE_RADIUS, -endAngle * Math.PI / 180, -startAngle * Math.PI / 180)
            .arc(0, 0, CIRCLE_RADIUS, startAngle * Math.PI / 180, endAngle * Math.PI / 180);
        hugContainer.addChild(tree);

        var COLOR_FACE = '#FFDA99';
        var COLOR_HAIR = '#000000';
        var COLOR_NOBITA_SHIRT = 'yellow';
        var COLOR_NOBITA_PANTS = 'blue';

        var nobitaWrapper = new createjs.Container();
        var face = new createjs.Shape();
        face.graphics.beginFill(COLOR_FACE)
            .arc(0, 0, 20, -20 * Math.PI / 180, 200 * Math.PI / 180);
        nobitaWrapper.addChild(face);

        var ears = new createjs.Shape();
        ears.graphics.beginFill(COLOR_FACE)
            .arc(-20, 2, 4, 90 * Math.PI / 180, 270 * Math.PI / 180)
            .arc(20, 2, 4, -90 * Math.PI / 180, 90 * Math.PI / 180);
        nobitaWrapper.addChild(ears);

        var hair = new createjs.Shape();
        hair.graphics.beginFill(COLOR_HAIR)
            .arc(0, 0, 20, 200 * Math.PI / 180, -20 * Math.PI / 180)
            .endFill().beginFill(COLOR_HAIR)
            .arc(0, 0, 20, -40 * Math.PI / 180, -2 * Math.PI / 180)
            .lineTo(16, -2)
            .lineTo(13, -10)
            .endFill().beginFill(COLOR_HAIR)
            .arc(0, 0, 20, 220 * Math.PI / 180, 182 * Math.PI / 180, true)
            .lineTo(-16, -2)
            .lineTo(-13, -10)
        ;
        nobitaWrapper.addChild(hair);

        var eyesWrapper = new createjs.Container();
        var eyes = new createjs.Shape();
        eyes.graphics.beginFill('white')
            .drawEllipse(-14, -5, 14, 16)
            .drawEllipse(0, -5, 14, 16);
        var eyeballs = new createjs.Shape();
        eyeballs.graphics.beginFill('black')
            .drawEllipse(-6, 2, 3, 3)
            .drawEllipse(3, 2, 3, 3);
        eyesWrapper.addChild(eyes);
        eyesWrapper.addChild(eyeballs);
        nobitaWrapper.addChild(eyesWrapper);

        var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, autoRemoveChildren: false});
        eyesTimeline
            .to(eyeballs, .2, {scaleY: 0, y: 3.5})
            .to(eyeballs, .2, {scaleY: 1, y: 0});

        var deadEyesWrapper = new createjs.Container();
        deadEyesWrapper.alpha = 0;
        var deadEye = new createjs.Shape();
        deadEye.graphics.beginStroke('black')
            .moveTo(-11, -2)
            .lineTo(-3, 8)
            .moveTo(-11, 8)
            .lineTo(-3, -2);
        var deadEye2 = new createjs.Shape();
        deadEye2.graphics.beginStroke('black')
            .moveTo(3, -2)
            .lineTo(11, 8)
            .moveTo(3, 8)
            .lineTo(11, -2);
        deadEyesWrapper.addChild(deadEye);
        deadEyesWrapper.addChild(deadEye2);
        nobitaWrapper.addChild(deadEyesWrapper);

        var shirt = new createjs.Shape();
        shirt.graphics.beginFill(COLOR_NOBITA_SHIRT)
            .rect(-12, 20, 24, 15);
        nobitaWrapper.addChild(shirt);

        var pants = new createjs.Shape();
        pants.graphics.beginFill(COLOR_NOBITA_PANTS)
            .rect(-12, 35, 24, 8);
        nobitaWrapper.addChild(pants);

        var limbs = new createjs.Shape();
        limbs.graphics.beginFill(COLOR_FACE)
            .rect(12, 22, 10, 5)
            .arc(22, 24.5, 2.5, -90 * Math.PI / 180, 90 * Math.PI / 180)
            .rect(12, 37, 10, 5)
            .arc(22, 39.5, 2.5, -90 * Math.PI / 180, 90 * Math.PI / 180);
        nobitaWrapper.addChild(limbs);

        nobitaWrapper.x += 01;
        nobitaWrapper.y -= 10;
        hugContainer.addChild(nobitaWrapper);

        return [hugTimeline, hugContainer, eyesWrapper, nobitaWrapper, deadEyesWrapper];
    }

    function getQuestionTimeline(x, y) {
        var questionTimeline = new TimelineMax({repeat: 1, ease: Bounce.easeOut, autoRemoveChildren: false});

        var questionContainer = new createjs.Container();
        questionContainer.x = x;
        questionContainer.y = y;

        var background = new createjs.Shape();
        background.graphics.beginFill(COLOR_DESERT_SKY)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        questionContainer.addChild(background);

        var questionMark = new createjs.Shape();
        questionMark.graphics
            .setStrokeStyle(4, 'round', 'round')
            .beginStroke('red')
            .arc(0, -10, 10, 180 * Math.PI / 180, 90 * Math.PI / 180)
            .lineTo(0, 8)
            .endStroke().beginStroke('red')
            .drawCircle(0, 18, 1);

        questionContainer.addChild(questionMark);

        questionTimeline
            .to(questionMark, .07, {rotation: 25, repeat: 1, yoyo: true})
            .to(questionMark, .07, {rotation: -25, repeat: 1, yoyo: true});

        return [questionTimeline, questionContainer];
    }

    function getSpikeTimeline(x, y) {
        var spikeTimeline = new TimelineMax({autoRemoveChildren: false});

        var spikeContainer = new createjs.Container();
        spikeContainer.x = x;
        spikeContainer.y = y;

        var background = new createjs.Shape();
        background.graphics.beginFill(COLOR_DESERT_SKY)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        spikeContainer.addChild(background);

        var cactusWrapper = new createjs.Container();
        var cactus = new createjs.Shape();
        cactus.graphics.beginFill(COLOR_CACTUS)
            .arc(0, 0, CIRCLE_RADIUS, -75 * Math.PI / 180, 75 * Math.PI / 180);
        cactusWrapper.addChild(cactus);

        var cactusStripe = new createjs.Shape();
        var endAngle = 63;
        var startAngle = 55;
        var endAngle2 = 42;
        var startAngle2 = 30;

        cactusStripe.graphics
            .beginFill(COLOR_CACTUS_STRIPE)
            .arc(0, 0, CIRCLE_RADIUS, -endAngle * Math.PI / 180, -startAngle * Math.PI / 180)
            .arc(0, 0, CIRCLE_RADIUS, startAngle * Math.PI / 180, endAngle * Math.PI / 180)
            .endFill().beginFill(COLOR_CACTUS_STRIPE)
            .arc(0, 0, CIRCLE_RADIUS, -endAngle2 * Math.PI / 180, -startAngle2 * Math.PI / 180)
            .arc(0, 0, CIRCLE_RADIUS, startAngle2 * Math.PI / 180, endAngle2 * Math.PI / 180)
        ;
        cactusWrapper.addChild(cactusStripe);

        var spike = new createjs.Shape();
        spike.graphics.beginFill(COLOR_CACTUS)
            .moveTo(13, -30)
            .lineTo(-11, -36)
            .lineTo(13, -42)
            .moveTo(13, -12)
            .lineTo(-11, -18)
            .lineTo(13, -24)
            .moveTo(13, 6)
            .lineTo(-11, 0)
            .lineTo(13, -6)
            .moveTo(13, 24)
            .lineTo(-11, 18)
            .lineTo(13, 12)
            .moveTo(13, 42)
            .lineTo(-11, 36)
            .lineTo(13, 30);
        cactusWrapper.addChildAt(spike, 0);

//    var knife1 = new createjs.Shape();
//    knife1.graphics.beginFill(COLOR_KNIFE)
//        .moveTo(20, -12)
//        .lineTo(-4, -18)
//        .lineTo(20, -24);
//    cactusWrapper.addChildAt(knife1, 0);
//
//    var knife2 = new createjs.Shape();
//    knife2.graphics.beginFill(COLOR_KNIFE)
//        .moveTo(20, 6)
//        .lineTo(-4, 0)
//        .lineTo(20, -6);
//    cactusWrapper.addChildAt(knife2, 0);
//
//    var knife3 = new createjs.Shape();
//    knife3.graphics.beginFill(COLOR_KNIFE)
//        .moveTo(20, 24)
//        .lineTo(-4, 18)
//        .lineTo(20, 12);
//    cactusWrapper.addChildAt(knife3, 0);
//    knife1.alpha = knife2.alpha = knife3.alpha = 0;

        spikeContainer.addChild(cactusWrapper);

        spikeTimeline
            .set(spike, {x: "+=17"})
            .to(spike, 1, {x: "-=10", ease: Back.easeOut.config(4)})
        ;

        var knifeSet1 = new createjs.Container();
        var knifeSet2 = new createjs.Container();
        var knifeSet3 = new createjs.Container();
        var knifeSet4 = new createjs.Container();
        var knifeSet5 = new createjs.Container();
        var knifeSet6 = new createjs.Container();
        var knifeSet7 = new createjs.Container();

        for (var i = 0; i < 35; i++) {
            var knife = new createjs.Shape();
            knife.graphics.beginFill(COLOR_KNIFE)
                .moveTo(25, ((i % 5) * 9) - 15)
                .lineTo(13, ((i % 5) * 9) - 18)
                .lineTo(25, ((i % 5) * 9) - 21);
            if (i < 5) {
                knifeSet1.addChild(knife);
            }
            else if (i < 10) {
                knifeSet2.addChild(knife);
            }
            else if (i < 15) {
                knifeSet3.addChild(knife);
            }
            else if (i < 20) {
                knifeSet4.addChild(knife);
            }
            else if (i < 25) {
                knifeSet5.addChild(knife);
            }
            else if (i < 30) {
                knifeSet6.addChild(knife);
            }
            else {
                knifeSet7.addChild(knife);
            }
        }

        cactusWrapper.addChildAt(knifeSet1, 0);
        cactusWrapper.addChildAt(knifeSet2, 0);
        cactusWrapper.addChildAt(knifeSet3, 0);
        cactusWrapper.addChildAt(knifeSet4, 0);
        cactusWrapper.addChildAt(knifeSet5, 0);
        cactusWrapper.addChildAt(knifeSet6, 0);
        cactusWrapper.addChildAt(knifeSet7, 0);

        return [spikeTimeline, spikeContainer, [knifeSet1, knifeSet2, knifeSet3, knifeSet4, knifeSet5, knifeSet6, knifeSet7]];
    }

    // End timelines
    function getEndCatTimeline(x, y) {
        var catTimeline = new TimelineMax({autoRemoveChildren: false});

        var catContainer = getDefaultContainer(x, y);

        var catWrapper = new createjs.Container();
        var catHead = new createjs.Shape();
        catHead.graphics.beginFill('#fff').drawEllipse(-15, 5, 30, 25);
        catWrapper.addChild(catHead);

        var catEyes = new createjs.Shape();
        catEyes.graphics.beginFill('black')
            .drawCircle(-10, 14, 2)
            .drawCircle(2, 14, 2)
            .beginFill('pink')
            .drawEllipse(-13, 17, 5, 2)
            .drawEllipse(-1, 17, 5, 2);
        catWrapper.addChild(catEyes);

        var catEars = new createjs.Shape();
        catEars.graphics
            .beginFill('#fff')
            .moveTo(-15, 14)
            .lineTo(-10, 0)
            .lineTo(-1, 7)
            .closePath()
            .moveTo(15, 14)
            .lineTo(10, 0)
            .lineTo(1, 7)
            .closePath();
        catWrapper.addChild(catEars);
        catWrapper.x += 18;
        catContainer.addChild(catWrapper);

        var creature = getCreatureContainer();
        catContainer.addChild(creature);
        creature.x -= 18;
        creature.y += 13;

        catEyes.y = 1;

        var creatureTimeline = new TimelineMax({repeat: -1, ease: Sine.easeInOut, autoRemoveChildren: false});
        creatureTimeline
            .add('start')
            .to(creature, .6, {y: '-=19.5', rotation: '+=180'}, 'start')
            .to(catEyes, .6, {y: -1}, 'start')
            .to(creature, .6, {y: '+=19.5', rotation: '+=180'}, 'start+=.6')
            .to(catEyes, .6, {y: 1}, 'start+=.6')

        return [catTimeline, catContainer];
    }

    function getEndBalloonTimeline(x, y) {
        var balloonTimeline = new TimelineMax({autoRemoveChildren: false});

        var balloonContainer = new createjs.Container();
        balloonContainer.x = x;
        balloonContainer.y = y;

        var background = new createjs.Shape();
        background.graphics
            .beginFill(COLOR_HIGH_SKY)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        balloonContainer.addChild(background);

        var balloonWrapper = new createjs.Container();
        var balloon1 = new createjs.Shape();
        var balloon1StringCmd = balloon1.graphics
            .beginStroke(COLOR_BALLOON_STRING)
            .moveTo(-6, 24)
            .lineTo(-11, -11)
            .command;
        var balloon1Cmd = balloon1.graphics
            .endStroke()
            .endFill().beginFill(COLOR_BALLOON_1)
            .drawEllipse(-18, -20, 14, 18)
            .command;
        balloon1.rotation = -12;
        balloonWrapper.addChild(balloon1);

        var balloon2 = new createjs.Shape();
        var balloon2StringCmd = balloon2.graphics
            .setStrokeStyle(1)
            .beginStroke(COLOR_BALLOON_STRING)
            .moveTo(0, 24)
            .lineTo(0, -11)
            .command;
        var balloon2Cmd = balloon2.graphics
            .endStroke()
            .beginFill(COLOR_BALLOON_2)
            .drawEllipse(-7, -24, 14, 18)
            .command;
        balloon2.rotation = 0;
        balloonWrapper.addChild(balloon2);

        var balloon3 = new createjs.Shape();
        var balloon3StringCmd = balloon3.graphics
            .beginStroke(COLOR_BALLOON_STRING)
            .moveTo(6, 24)
            .lineTo(11, -11)
            .command;
        var balloon3Cmd = balloon3.graphics
            .endStroke()
            .endFill().beginFill(COLOR_BALLOON_3)
            .drawEllipse(4, -20, 14, 18)
            .command;
        balloon3.rotation = 12;
        balloonWrapper.addChild(balloon3);

        var creature = getCreatureContainer();
        creature.addChildAt(balloonWrapper, 0);
        balloonContainer.addChild(creature);

        balloonWrapper.y -= 20;
        creature.y += 10;
        creature.rotation = 10;

        var creatureTimeline = new TimelineMax({repeat: -1, yoyo: true, autoRemoveChildren: false});
        creatureTimeline.to(creature, 1, {y: '+=4'});

        var creatureTimeline2 = new TimelineMax({repeat: -1, autoRemoveChildren: false});
        creatureTimeline2
            .to(creature, 2, {rotation: '-=20'})
            .to(creature, 1.5, {})
            .to(creature, 2, {rotation: '+=20'})
            .to(creature, 1.5, {})

        return [balloonTimeline, balloonContainer];
    }

    function getEndSeaTimeline(x, y) {
        var seaObjs = getSeaTimeline(x, y);
        var seaTimeline = seaObjs[0];
        var seaContainer = seaObjs[1];
        var grassWrapper = seaObjs[2];

        var creature = getCreatureContainer();
        seaContainer.addChild(creature);
        creature.x = 25;
        creature.y = 12;

        grassWrapper.x -= 10;

        var bubble = new createjs.Shape();
        var bubbleCmd = bubble.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(2, -19, 0)
            .command;
        creature.addChild(bubble);

        var bubble2 = new createjs.Shape();
        var bubbleCmd2 = bubble2.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(2, -19, 0)
            .command;
        creature.addChild(bubble2);

        var bubble3 = new createjs.Shape();
        var bubbleCmd3 = bubble3.graphics.setStrokeStyle(1, 'round')
            .beginStroke('white')
            .drawCircle(2, -19, 0)
            .command;
        creature.addChild(bubble3);

        seaTimeline
            .to(bubbleCmd, 4, {
                x: 10,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 0.5)
            .to(bubbleCmd2, 4, {
                x: 10,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 1.8)
            .to(bubbleCmd3, 4, {
                x: 10,
                y: -40,
                radius: 3,
                ease: Power1.easeIn,
                repeat: -1
            }, 3.1)
        ;

        var creatureTimeline = new TimelineMax({repeat: -1, yoyo: true, autoRemoveChildren: false});
        creatureTimeline
            .to(creature, .5, {y: '-=3'})
        return [seaTimeline, seaContainer];
    }

    function getEndCactusTimeline(x, y) {
        var cactusContainer = getDesertGroundContainer(x, y);
        var cactusWrapper = new createjs.Container();

        var cactus = new createjs.Shape();
        cactus.graphics.beginFill(COLOR_CACTUS)
            .rect(-15, 25, 30, -35)
            .endFill().beginFill(COLOR_CACTUS)
            .arc(0, -10, 15, -90 * Math.PI / 180, 270 * Math.PI / 180).command;
        cactusWrapper.addChild(cactus);

        var leftHand = new createjs.Shape();
        leftHand.graphics.setStrokeStyle(10, 'round', 'round')
            .beginStroke(COLOR_CACTUS)
            .moveTo(-15, 10);
        leftHand.graphics.arcTo(-22, 10, -22, 10, 5);
        var leftHandCmd = leftHand.graphics.lineTo(-22, -5).command;
        cactusWrapper.addChild(leftHand);

        var rightHand = new createjs.Shape();
        rightHand.graphics
            .setStrokeStyle(10, 'round', 'round')
            .beginStroke(COLOR_CACTUS)
            .moveTo(15, 10);
        rightHand.graphics.arcTo(22, 10, 22, 10, 5);
        var rightHandCmd = rightHand.graphics.lineTo(22, -10).command;
        cactusWrapper.addChild(rightHand);

        var stripe = new createjs.Shape();
        stripe.graphics.setStrokeStyle(1, 'round', 'round')
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(0, 25)
            .lineTo(0, -20)
            .endStroke().beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(-8, 25)
            .lineTo(-8, -16)
            .endStroke().beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(8, 25)
            .lineTo(8, -16);

        cactusWrapper.addChild(stripe);
        var leftStripe = new createjs.Shape();
        leftStripe.graphics
            .setStrokeStyle(1, 'round', 'round')
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(-15, 10);
        leftStripe.graphics.arcTo(-22, 10, -22, 10, 5).command;
        var leftStripeCmd = leftStripe.graphics.lineTo(-22, -5).command;
        cactusWrapper.addChild(leftStripe);

        var rightStripe = new createjs.Shape();
        rightStripe.graphics
            .setStrokeStyle(1, 'round', 'round')
            .beginStroke(COLOR_CACTUS_STRIPE)
            .moveTo(15, 10);
        rightStripe.graphics.arcTo(22, 10, 22, 10, 5).command;
        var rightStripeCmd = rightStripe.graphics.lineTo(22, -10).command;
        cactusWrapper.addChild(rightStripe);

        var eyes = new createjs.Shape();
        eyes.graphics.beginFill('black')
            .drawEllipse(-9, -9, 5, 8)
            .endFill().beginFill('black')
            .drawEllipse(4, -9, 5, 8);

        var cactusEyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, delay: 2, autoRemoveChildren: false});
        cactusEyesTimeline
            .to(eyes, .2, {scaleY: 0, y: -5})
            .to(eyes, .2, {scaleY: 1, y: 0});

        cactusWrapper.addChild(eyes);

        var flowerWrapper = new createjs.Container();
        flowerWrapper.x = 12;
        flowerWrapper.y = -19;

        var flower = new createjs.Shape();
        flower.graphics
            .beginFill('yellow')
            .drawCircle(0, 0, 3)
        flowerWrapper.addChild(flower);

        var petalColor = 'hotpink';
        var petalRadius = 3;

        var petal1 = new createjs.Shape();
        petal1.graphics.beginFill(petalColor).drawCircle(0, -5.5, petalRadius);
        flowerWrapper.addChildAt(petal1, 0);

        var petal2 = new createjs.Shape();
        petal2.graphics.beginFill(petalColor).drawCircle(4, -2, petalRadius);
        flowerWrapper.addChildAt(petal2, 0);

        var petal3 = new createjs.Shape();
        petal3.graphics.beginFill(petalColor).drawCircle(3, 3.5, petalRadius);
        flowerWrapper.addChildAt(petal3, 0);

        var petal4 = new createjs.Shape();
        petal4.graphics.beginFill(petalColor).drawCircle(-3, 3.5, petalRadius);
        flowerWrapper.addChildAt(petal4, 0);

        var petal5 = new createjs.Shape();
        petal5.graphics.beginFill(petalColor).drawCircle(-4, -2, petalRadius);
        flowerWrapper.addChildAt(petal5, 0);

        var creature = getCreatureContainer();
        creature.x = 22;
        creature.y = -24;

        cactusWrapper.addChild(flowerWrapper);
        cactusContainer.addChild(cactusWrapper);
        cactusContainer.addChild(creature);

        var cactusTimeline = new TimelineMax({ease: Sine.easeInOut, repeat: -1, autoRemoveChildren: false});
        cactusTimeline
            .add('start')
            .to(creature, .5, {x: '-=22', y: '-=14', rotation: '-=180'})
            .to(creature, .5, {x: '-=22', y: '+=14', rotation: '-=180'})
            .to([leftHandCmd, leftStripeCmd], .5, {y: '-=5'}, 'start+=.5')
            .to([rightHandCmd, rightStripeCmd], .5, {y: '+=5'}, 'start+=.5')
            .add('start2')
            .to(creature, .5, {x: '+=22', y: '-=14', rotation: '-=180'})
            .to(creature, .5, {x: '+=22', y: '+=14', rotation: '-=180'})
            .to([leftHandCmd, leftStripeCmd], .5, {y: '+=5'}, 'start2+=.5')
            .to([rightHandCmd, rightStripeCmd], .5, {y: '-=5'}, 'start2+=.5')

        return [cactusTimeline, cactusContainer];
    }

    function getEndYetiTimeline(x, y) {
        var yetiObjs = getYetiTimeline(x, y);
        var yetiTimeline = yetiObjs[0];
        var yetiContainer = yetiObjs[1];
        var leftHandTimeline = yetiObjs[2];
        var rightHandTimeline = yetiObjs[3];
        leftHandTimeline.remove();
        rightHandTimeline.remove();

        var leftHand = yetiObjs[4];
        var rightHand = yetiObjs[5];

        var creature = getCreatureContainer();
        yetiContainer.addChild(creature);
        creature.y += 5;

        var endYetiTimeline = new TimelineMax({repeat: -1, autoRemoveChildren: false});
        endYetiTimeline
            .add('hands')
            .to(leftHand, .8, {rotation: "+=40", ease: Sine.easeOut}, 'hands')
            .to(leftHand, .8, {rotation: "-=40", ease: Sine.easeIn}, 'hands+=.8')
            .to(rightHand, .8, {rotation: "-=40", ease: Sine.easeOut}, 'hands')
            .to(rightHand, .8, {rotation: "+=40", ease: Sine.easeIn}, 'hands+=.8')
            .to(creature, 1.6, {rotation: '+=360'}, 'hands')
            .to(creature, .4, {y: '+=8'}, 'hands')
            .to(creature, .8, {y: '-=16'}, 'hands+=.4')
            .to(creature, .4, {y: '+=8'}, 'hands+=1.2')
            .to(creature, .6, {})

        return [yetiTimeline, yetiContainer];
    }

    function getEndSeaMonsterTimeline(x, y) {

        var seaMonsterContainer = getIceSeaContainer(x, y);

        var seaMonsterWrapper = new createjs.Container();

        var seaMonster = new createjs.Shape();
        seaMonster.graphics
            .beginFill(COLOR_SEA_MONSTER)
            .arc(-10, 25, 20, 180 * Math.PI / 180, 0 * Math.PI / 180);

        seaMonster.graphics
            .endFill().beginFill(COLOR_SEA_MONSTER)
            .rect(10, 25, 8, -40);

        seaMonster.graphics
            .endFill().beginFill(COLOR_SEA_MONSTER)
            .drawEllipse(10, -22, 20, 12);
        seaMonsterWrapper.addChild(seaMonster);

        var eye = new createjs.Shape();
        eye.graphics
            .beginFill('black')
            .drawCircle(0, 2, 2);
        var eyeWrapper = new createjs.Container();
        eyeWrapper.x = 23;
        eyeWrapper.y = -19;
        eyeWrapper.addChild(eye);
        seaMonsterWrapper.addChild(eyeWrapper);

        var eyeTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, autoRemoveChildren: false});
        eyeTimeline
            .to(eye, .2, {scaleY: 0, y: 2})
            .to(eye, .2, {scaleY: 1, y: 0});

        seaMonsterContainer.addChildAt(seaMonsterWrapper, 1);

        var creature = getCreatureContainer();
        creature.x = -10;
        seaMonsterContainer.addChild(creature);

        seaMonsterWrapper.y += 10;

        var seaMonsterTimeline = new TimelineMax({repeat: -1, autoRemoveChildren: false});
        seaMonsterTimeline
            .add('bounce')
            .add('bounce2', 'bounce+=.9')
            .to(seaMonsterWrapper, .3, {y: '-=10'}, 'bounce')
            .to(creature, 1.2, {x: '+=30', ease: Sine.easeIn}, 'bounce')
            .to(creature, 1.2, {rotation: '+=360'}, 'bounce')
            .to(creature, .9, {y: '-=36'}, 'bounce')
            .to(creature, .3, {y: '+=12'}, 'bounce2')
            .to(seaMonsterWrapper, .3, {y: '+=10'}, 'bounce2')
            .to(creature, .6, {})
            .add('bounce3')
            .to(seaMonsterWrapper, .3, {y: '-=10'}, 'bounce3')
            .to(creature, .3, {y: '-=12'}, 'bounce3')
            .add('bounce4')
            .to(creature, .9, {y: '+=36'}, 'bounce4')
            .to(creature, 1.2, {x: '-=30', ease: Sine.easeOut}, 'bounce4-=.3')
            .to(creature, 1.2, {rotation: '-=360'}, 'bounce4-=.3')
            .to(seaMonsterWrapper, .3, {y: '+=10'}, 'bounce4+=.6')
            .to(creature, .6, {})

        return [seaMonsterTimeline, seaMonsterContainer];
    }

    // Containers
    function getDefaultContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getSpringContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_SPRING_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_SPRING_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getSummerContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_SUMMER_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_SUMMER_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getAutumnContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_AUTUMN_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_AUTUMN_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getWinterContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_WINTER_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_WINTER_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSky]);
    }

    function getSeaWaveContainer(x, y) {
        var segmentSea = new createjs.Shape();
        segmentSea.graphics.beginFill(COLOR_SEA)
            .arc(0, 0, CIRCLE_RADIUS, -30 * Math.PI / 180, 210 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_HIGH_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 210 * Math.PI / 180, -30 * Math.PI / 180);

//    var wave = new createjs.Shape();
//    var waveSize = 4;
//    wave.graphics.beginFill(COLOR_HIGH_SKY)
//        .arc(-40, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-30, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-20, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(-10, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(0, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(10, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(20, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(30, -25, waveSize, 0, 180 * Math.PI / 180)
//        .endFill().beginFill(COLOR_HIGH_SKY)
//        .arc(40, -25, waveSize, 0, 180 * Math.PI / 180)
//    ;
//    seaWaveContainer.addChild(wave);

        return _constructContainer(x, y, [segmentSea, segmentSky]);
    }

    function getSeaContainer(x, y) {
        var segmentGround = new createjs.Shape();
        segmentGround.graphics.beginFill(COLOR_SEA_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSea = new createjs.Shape();
        segmentSea.graphics.beginFill(COLOR_SEA)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentGround, segmentSea]);
    }

    function getDesertGroundContainer(x, y) {
        var segmentDesert = new createjs.Shape();
        segmentDesert.graphics.beginFill(COLOR_DESERT)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_DESERT_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        return _constructContainer(x, y, [segmentDesert, segmentSky]);
    }

    function getIceContainer(x, y) {
        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_DARK_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        var segmentIce = new createjs.Shape();
        segmentIce.graphics.beginFill(COLOR_ICE_GROUND)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        return _constructContainer(x, y, [segmentSky, segmentIce]);
    }

    function getIceSeaContainer(x, y) {
        var segmentSky = new createjs.Shape();
        segmentSky.graphics.beginFill(COLOR_DARK_SKY)
            .arc(0, 0, CIRCLE_RADIUS, 150 * Math.PI / 180, 30 * Math.PI / 180);

        var segmentSea = new createjs.Shape();
        segmentSea.graphics.beginFill(COLOR_DARK_SEA)
            .arc(0, 0, CIRCLE_RADIUS, 30 * Math.PI / 180, 150 * Math.PI / 180);

        return _constructContainer(x, y, [segmentSky, segmentSea]);
    }

    // Custom containers
    function getCreatureContainer() {
        var creatureWrapper = new createjs.Container();
        var creature = new createjs.Shape();
        creature.graphics.beginFill('black')
            .drawCircle(0, 0, 10);
        creatureWrapper.addChild(creature);

        for (var i = 0; i < 12; i++) {
            var spike = new createjs.Shape();
            spike.graphics.beginStroke('black')
                .moveTo(0, i % 2 == 0 ? -13 : -12)
                .lineTo(0, i % 2 == 0 ? 13 : 12);
            spike.rotation = i * 360 / 24 + 15;
            creatureWrapper.addChild(spike);
        }

        var eyes = new createjs.Shape();
        eyes.graphics.beginFill('white')
            .drawCircle(-4, -1, 3)
            .drawCircle(4, -1, 3);

        var eyeballs = new createjs.Shape();
        eyeballs.graphics
            .beginFill('black')
            .drawCircle(-3, -1, 1)
            .drawCircle(3, -1, 1);

        creatureWrapper.addChild(eyes);
        creatureWrapper.addChild(eyeballs);

        var eyesTimeline = new TimelineMax({repeat: -1, repeatDelay: 2, autoRemoveChildren: false});
        eyesTimeline
            .to(eyes, .1, {scaleY: 0})
            .to(eyes, .1, {scaleY: 1});

        return creatureWrapper;
    }

    function getDesertContainer(x, y) {
        var desertContainer = new createjs.Container();
        desertContainer.x = x;
        desertContainer.y = y;

        var desert = new createjs.Shape();
        desert.graphics
            .beginFill(COLOR_DESERT)
            .drawCircle(0, 0, CIRCLE_RADIUS);
        desertContainer.addChild(desert);

        return desertContainer;
    }

    function getHeartContainer(x, y) {
        var heartContainer = new createjs.Container();
        heartContainer.x = x;
        heartContainer.y = y;

        var COLOR_HEART = '#ff6666';
        var heartSize = 10;
        var heart = new createjs.Shape();
        heart.graphics
            .beginFill(COLOR_HEART)
            .arc(0, -heartSize / 2, heartSize / 2, 0, 180 * Math.PI / 180, true)
            .arc(heartSize / 2, 0, heartSize / 2, 270 * Math.PI / 180, 90 * Math.PI / 180)
            .rect(-heartSize / 2, -heartSize / 2, heartSize, heartSize)
        ;
        heart.rotation = -45;
        heartContainer.addChild(heart);

        return heartContainer;
    }

    function getTContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength;
        creature1.y -= unitLength;
        creature2.y -= unitLength;
        creature3.x += unitLength;
        creature3.y -= unitLength;
        creature5.y += unitLength;

        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);

        return container;
    }

    function getHContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();
        var creature6 = getCreatureContainer();
        var creature7 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength;
        creature1.y -= unitLength;
        creature2.x -= unitLength;
        creature3.x -= unitLength;
        creature3.y += unitLength;
        creature5.x += unitLength;
        creature5.y -= unitLength;
        creature6.x += unitLength;
        creature7.x += unitLength;
        creature7.y += unitLength;

        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);
        container.addChild(creature6);
        container.addChild(creature7);

        return container;
    }

    function getEContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();
        var creature6 = getCreatureContainer();
        var creature7 = getCreatureContainer();
        var creature8 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength;
        creature1.y -= unitLength;
        creature2.y -= unitLength;
        creature3.x += unitLength;
        creature3.y -= unitLength;
        creature4.x -= unitLength;
        creature6.x -= unitLength;
        creature6.y += unitLength;
        creature7.y += unitLength;
        creature8.x += unitLength;
        creature8.y += unitLength;

        creature5.scaleY = .6;
        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);
        container.addChild(creature6);
        container.addChild(creature7);
        container.addChild(creature8);

        return container;
    }

    function getNContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();
        var creature6 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength;
        creature2.x -= unitLength;
        creature2.y += unitLength;
        creature3.x += unitLength / 2;
        creature3.y -= unitLength;
        creature4.x += unitLength;
        creature5.x += unitLength;
        creature5.y += unitLength;
        creature6.x -= unitLength / 2;
        creature6.y -= unitLength;

        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);
        container.addChild(creature6);

        return container;
    }

    function getDContainer(x, y) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        var creature1 = getCreatureContainer();
        var creature2 = getCreatureContainer();
        var creature3 = getCreatureContainer();
        var creature4 = getCreatureContainer();
        var creature5 = getCreatureContainer();
        var creature6 = getCreatureContainer();

        var unitLength = 26;
        creature1.x -= unitLength / 2;
        creature1.y -= unitLength;
        creature2.x += unitLength / 2;
        creature2.y -= unitLength;
        creature3.x -= unitLength / 2;
        creature4.x += unitLength;
        creature5.x -= unitLength / 2;
        creature5.y += unitLength;
        creature6.x += unitLength / 2;
        creature6.y += unitLength;

        creature4.scaleX = .75;
        container.addChild(creature1);
        container.addChild(creature2);
        container.addChild(creature3);
        container.addChild(creature4);
        container.addChild(creature5);
        container.addChild(creature6);

        return container;
    }

    // Utilities
    /**
     * Returns a createjs.Container instance with center (x, y) and segments as its children.
     */
    function _constructContainer(x, y, segments) {
        var container = new createjs.Container();
        container.x = x;
        container.y = y;

        segments.forEach(function (segment) {
            container.addChild(segment);
        });

        return container;
    }

    /**
     * Returns a random number between min (inclusive) and max (exclusive)
     */
    function _random(min, max) {
        return Math.random() * (max - min) + min;
    }

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    function _randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    init();
})();