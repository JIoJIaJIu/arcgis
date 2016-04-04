//>>built
define("esri/TouchEvents","dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/_base/sniff dojo/dom ./kernel ./Evented ./geometry/Point ./geometry/ScreenPoint".split(" "),function(m,r,h,l,t,u,v,n,q){m=m([v],{declaredClass:"esri.TouchEvents",tapRadius:8,doubleTapRadius:10,tapStartTolerance:50,doubleTapDuration:300,map:null,constructor:function(a,b){this.node=a;h.mixin(this,b);r.setSelectable(a,!1);this._touchStart=h.hitch(this,this._touchStart);this._touchMove=h.hitch(this,this._touchMove);this._touchEnd=
h.hitch(this,this._touchEnd);this._touchCancel=h.hitch(this,this._touchCancel);a.addEventListener("touchstart",this._touchStart,!1);a.addEventListener("touchmove",this._touchMove,!1);a.addEventListener("touchend",this._touchEnd,!1);a.addEventListener("touchcancel",this._touchCancel,!1);this.map&&l("ios")&&(this._mouseOver=h.hitch(this,this._mouseOver),this._mouseOut=h.hitch(this,this._mouseOut),this._mouseDown=h.hitch(this,this._mouseDown),this._mouseUp=h.hitch(this,this._mouseUp),this._mouseClick=
h.hitch(this,this._mouseClick),a.addEventListener("mouseover",this._mouseOver,!1),a.addEventListener("mouseout",this._mouseOut,!1),a.addEventListener("mousedown",this._mouseDown,!1),a.addEventListener("mouseup",this._mouseUp,!1),a.addEventListener("click",this._mouseClick,!1));this._numTouches=0;this._nodeTouches=[];this._touches={};this._touchIds=[];this._taps=[];this._immediate=!1},_touchStart:function(a){var b,d,c,e,f,g=this._touches,k=a.changedTouches.length,h=(new Date).getTime();if(!(l("android")&&
l("safari")&&1===a.targetTouches.length&&a.touches.length===a.targetTouches.length&&a.targetTouches.length===a.changedTouches.length&&0===a.changedTouches[0].identifier&&g[a.changedTouches[0].identifier])){this._addTouch(a);for(b=0;k>b;b++)d=a.changedTouches[b],c=g[d.identifier]={},c.startX=d.pageX,c.startY=d.pageY,c.startTS=h,-1===this._touchIds.indexOf(d.identifier)&&this._touchIds.push(d.identifier);this._swipeActive&&(e=this._nodeTouches[0]);this._pinchActive&&(f=this._nodeTouches[1]);1===this._numTouches?
this._swipeActive?(this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(a,e))):this._pinchActive&&(this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(a,[e,f]))):2===this._numTouches?this._swipeActive&&(e&&(c=g[this._touchIds[0]],c.startX=e.pageX,c.startY=e.pageY,c.moved=!1),this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(a,e))):this._swipeActive?(this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(a,e))):this._pinchActive&&(this._pinchActive=
!1,this._fire("onPinchEnd",this._processTouchEvent(a,[e,f])))}},_touchMove:function(a){a.preventDefault();this._updateTouch(a);var b,d,c,e,f,g,k=this._touches,h=a.changedTouches.length;if(!(l("android")&&l("safari")&&1===a.targetTouches.length&&a.touches.length===a.targetTouches.length&&a.targetTouches.length===a.changedTouches.length&&0===a.changedTouches[0].identifier&&k[a.changedTouches[0].identifier]&&1<this._touchIds.length)){for(b=0;h>b;b++)d=a.changedTouches[b],(c=k[d.identifier])&&(e=Math.abs(d.pageX-
c.startX),f=Math.abs(d.pageY-c.startY),!c.moved&&(e>=this.tapRadius||f>=this.tapRadius)&&(c.moved=c.absMoved=!0),g=g?g:c.moved);1===this._numTouches?(b=a.changedTouches[0],this._swipeActive?this._fire("onSwipeMove",this._processTouchEvent(a,b)):g&&(this._swipeActive=!0,this._fire("onSwipeStart",this._processTouchEvent(a,b)))):2===this._numTouches&&(b=this._nodeTouches[0],d=this._nodeTouches[1],this._pinchActive?this._fire("onPinchMove",this._processTouchEvent(a,[b,d])):g&&(g=k[b.identifier],c=k[d.identifier],
k=Math.abs(g.startX-c.startX),g=Math.abs(g.startY-c.startY),g=Math.sqrt(k*k+g*g),k=Math.abs(b.pageX-d.pageX),c=Math.abs(b.pageY-d.pageY),k=Math.sqrt(k*k+c*c),Math.abs(k-g)>=2*this.tapRadius&&(this._pinchActive=!0,this._fire("onPinchStart",this._processTouchEvent(a,[b,d])))))}},_touchEnd:function(a){this._removeTouch(a);var b,d,c,e=this._touches,f=a.changedTouches,g=f.length,k=(new Date).getTime(),h=this._touchIds;for(b=0;g>b;b++)(c=e[f[b].identifier])&&(c.absMoved&&(d=!0),c.pageX=f[b].pageX,c.pageY=
f[b].pageY,c.endTS=k);if(0===this._numTouches)if(this._touches={},this._touchIds=[],this._swipeActive)this._swipeActive=!1,this._fire("onSwipeEnd",this._processTouchEvent(a,f[0]));else if(this._pinchActive)this._pinchActive=!1,this._fire("onPinchEnd",this._processTouchEvent(a,f));else{if(!d){d=1/0;var g=-1/0,k=1/0,l=-1/0,m=this.tapStartTolerance,p=[],n=!0;for(b=0;b<h.length;b++)c=e[h[b]],p.push(c),c.startTS<d&&(d=c.startTS),c.startTS>g&&(g=c.startTS),c.endTS<k&&(k=c.endTS),c.endTS>l&&(l=c.endTS),
delete e[h[b]];1===p.length&&f[0]&&(c=Math.abs(f[0].pageX-p[0].startX),f=Math.abs(f[0].pageY-p[0].startY),(c>=this.tapRadius||f>=this.tapRadius)&&(n=!1));n&&Math.abs(g-d)<=m&&Math.abs(l-k)<=m&&this._basicTap(a,p)}}else 1===this._numTouches&&this._pinchActive&&(b=this._nodeTouches[0],c=e[b.identifier],c.startX=b.pageX,c.startY=b.pageY,this._pinchActive=c.moved=!1,this._fire("onPinchEnd",this._processTouchEvent(a,[f[0],b])))},_touchCancel:function(a){this._numTouches&&this._touchEnd(a)},_basicTap:function(a,
b){var d=(new Date).getTime(),c=this;(a=this._processTouchEvent(a,b),this._taps.push({touchInfos:b,ts:d,event:a}),2<this._taps.length&&this._taps.shift(),this._fire("onBasicTap",a),clearTimeout(this._tapTimer),this._immediate)?this._analyzeTap(!0):this._tapTimer=setTimeout(function(){var a=c;c=null;clearTimeout(a._tapTimer);a._analyzeTap()},2===this._taps.length?this.doubleTapDuration/2:this.doubleTapDuration)},_analyzeTap:function(a){var b=this._taps,d=b[0],c=b[1],e=d.touchInfos,f=c&&c.touchInfos;
if(b.length)if(a||(this._taps=[]),d&&c)if(e.length===f.length)if(c.ts-d.ts<=this.doubleTapDuration){var g,k,h;1===e.length?(k=Math.abs(e[0].startX-f[0].startX),h=Math.abs(e[0].startY-f[0].startY),g=k<=this.doubleTapRadius&&h<=this.doubleTapRadius):g=!0;g?this._processedDoubleTap(b):this._processedTap(c)}else this._processedTap(c);else this._processedTap(c);else this._processedTap(d||c)},_processedTap:function(a){var b=a.event;this._fire("onProcessedTap",b);1===a.touchInfos.length?this._fire("onTap",
this._fixEvent(b)):2===a.touchInfos.length&&this._fire("onTwoFingerTap",b)},_processedDoubleTap:function(a){var b,d=1===a[1].touchInfos.length;d&&(b=[this._fixEvent(a[0].event),this._fixEvent(a[1].event)],b[1].relatedEvents=b);a=[a[0].event,a[1].event];a[1].relatedEvents=a;this._fire("onProcessedDoubleTap",a[1]);d&&(this._fire("onDoubleTap",b[1]),this._fire("onDblClick",b[1]))},_addTouch:function(a){var b,d,c,e=a.changedTouches,f=this._nodeTouches;this._numTouches+=e.length;for(a=0;a<e.length;a++){d=
f.length;c=!1;for(b=0;d>b&&!(c=f[b].identifier===e[a].identifier);b++);c?this._numTouches--:f.push(e[a])}for(a=f.length-1;0<=a;a--)t.isDescendant(f[a].target,document.body)||(f.splice(a,1),this._numTouches--);0>this._numTouches&&(this._numTouches=0)},_removeTouch:function(a){var b=[],d=[],c=a.changedTouches,e=this._nodeTouches;this._numTouches-=c.length;0>this._numTouches&&(this._numTouches=0);for(a=0;a<c.length;a++)b.push(c[a].identifier);for(a=e.length-1;0<=a;a--)-1!==b.indexOf(e[a].identifier)&&
d.push(e.splice(a,1)[0]);return d},_updateTouch:function(a){var b,d=[],c=a.changedTouches,e=this._nodeTouches;for(a=0;a<c.length;a++)d.push(c[a].identifier);for(a=0;a<e.length;a++)b=d.indexOf(e[a].identifier),-1!==b&&e.splice(a,1,c[b])},_mouseOver:function(a){this._fire("onMouseOver",this._processMouseEvent(a))},_mouseOut:function(a){this._fire("onMouseOut",this._processMouseEvent(a))},_mouseDown:function(a){this._fire("onMouseDown",this._processMouseEvent(a))},_mouseUp:function(a){this._fire("onMouseUp",
this._processMouseEvent(a))},_mouseClick:function(a){this._fire("onClick",this._processMouseEvent(a))},_fire:function(a,b){if("onDblClick"===a&&this.mouseEvents){this.mouseEvents.preventClickEvents(!0);var d=this;setTimeout(function(){d.mouseEvents.preventClickEvents(!1)},350)}this[a]&&this[a](b);this.map&&this.map[a]&&this.map[a](b)},_fixEvent:function(a){var b,d={};for(b in a)d[b]=a[b];return this.map&&(d.screenPoint=d.screenPoints[0],d.mapPoint=d.mapPoints[0]),d},_processTouchEvent:function(a,
b){var d=this.map,c=d&&d.position,e=0;if(c&&b)if(h.isArray(b)){var f,g;a.screenPoints=[];a.mapPoints=[];for(f=0;f<b.length;f++)b[f]?(g=new q(b[f].pageX-c.x,b[f].pageY-c.y),a.screenPoints.push(g),a.mapPoints.push(d.extent?d.toMap(g):new n)):e++}else a.screenPoint=new q(b.pageX-c.x,b.pageY-c.y),a.mapPoint=d.extent?d.toMap(a.screenPoint):new n;return a.numPoints=b?h.isArray(b)?b.length-e:1:0,a},_processMouseEvent:function(a){var b=this.map,d=b&&b.position;return d&&(a.screenPoint=new q(a.pageX-d.x,a.pageY-
d.y),a.mapPoint=b.extent?b.toMap(a.screenPoint):new n),a},setImmediateTap:function(a){this._immediate=a},destroy:function(){var a=this.node;a.removeEventListener("touchstart",this._touchStart,!1);a.removeEventListener("touchmove",this._touchMove,!1);a.removeEventListener("touchend",this._touchEnd,!1);a.removeEventListener("touchcancel",this._touchCancel,!1);this.map&&(a.removeEventListener("mouseover",this._mouseOver,!1),a.removeEventListener("mouseout",this._mouseOut,!1),a.removeEventListener("mousedown",
this._mouseDown,!1),a.removeEventListener("mouseup",this._mouseUp,!1),a.removeEventListener("click",this._mouseClick,!1));r.setSelectable(a,!0);clearTimeout(this._tapTimer);this.node=this.map=this._numTouches=this._nodeTouches=this._touches=this._touchIds=this._taps=null}});return l("extend-esri")&&(u.TouchEvents=m),m});