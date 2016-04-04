//>>built
require({cache:{"url:esri/dijit/RendererSlider/templates/RendererSlider.html":'\x3cdiv class\x3d"${_css.container}" data-dojo-attach-point\x3d"_containerNode"\x3e\n  \x3cdiv class\x3d"${_css.topLabelNode} ${_css.topLabelNodeHover}" data-dojo-attach-point\x3d"_topNode"\x3e\n    \x3cspan data-dojo-attach-point\x3d"_topNodeSpan"\x3e\x3c/span\x3e \n  \x3c/div\x3e\n  \x3cdiv class\x3d"${_css.slidernode}" data-dojo-attach-point\x3d"_sliderNode"\x3e\n    \x3cdiv class\x3d"${_css.sliderarea}" data-dojo-attach-point\x3d"_sliderArea"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"${_css.sliderarearight}" data-dojo-attach-point\x3d"_sliderAreaRight"\x3e\x3c/div\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d"${_css.bottomLabelNode} ${_css.bottomLabelNodeHover}" data-dojo-attach-point\x3d"_botNode"\x3e\n    \x3cspan  data-dojo-attach-point\x3d"_bottomNodeSpan"\x3e\x3c/span\x3e\n  \x3c/div\x3e\n\x3c/div\x3e'}});
define("esri/dijit/RendererSlider","../kernel ../numberUtils ./RendererSlider/sliderUtils dijit/_OnDijitClickMixin dijit/_TemplatedMixin dijit/_WidgetBase dijit/form/NumberTextBox dojo/debounce dojo/on dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/dnd/move dojo/dom-construct dojo/dom-style dojo/dom-class dojo/Evented dojo/number dojo/has dojo/text!./RendererSlider/templates/RendererSlider.html".split(" "),function(F,d,y,B,G,H,C,I,k,x,J,n,K,v,w,D,L,M,N,O){B=J([H,G,B,L],{declaredClass:"esri.dijit.RendererSlider",
baseClass:"esriRendererSlider",templateString:O,theme:"Slider",intermediateChanges:!1,type:null,minimum:0,maximum:100,values:[50],precision:2,handles:[],primaryHandle:null,showHandles:!0,showTicks:!0,showLabels:!0,showRatioLabels:!1,minLabel:null,maxLabel:null,_visibleLabels:["data","handle"],_roundedDataLabels:[],_roundedHandleLabels:[],_ratioLabels:[],_minRatioLabel:"",_maxRatioLabel:"",_isZoomed:!1,_minZoomLabel:"",_maxZoomLabel:"",_maximumNumberEditor:null,_minimumNumberEditor:null,_valueDifferenceByIndex:[],
_primaryHandleIdx:null,_currentTopValue:[],_isLTR:!0,_ctrlDown:!1,_histogramSurface:null,_css:null,_minPrecisionForSmallNumbers:3,constructor:function(a,b){this.inherited(arguments);this.domNode=b;this._css={container:"esri-renderer-slider",slidernode:"esri-slider-node",sliderarea:"esri-slider-area",sliderarearight:"esri-slider-area-right",moveable:"esri-moveable",handler:"esri-handle",handlerSpan:"esri-handle-span",handlerContainer:"esri-handle-container",handlerLabel:"esri-handle-label",handlerLabelSpan:"esri-handle-label-span",
topLabelNode:"esri-top-label-node",bottomLabelNode:"esri-bottom-label-node",topLabelNodeHover:"esri-top-label-node-hover",bottomLabelNodeHover:"esri-bottom-label-node-hover",heatmapTick:"esri-heatmap-tick",handlerTick:"esri-handler-tick",handlerTickTop:"esri-handler-tick-top",handlerTickBottom:"esri-handler-tick-bottom"};this.showLabels=a.showLabels||this._visibleLabels;this._updateTimeout=I(this._updateTimeout,0)},startup:function(){if(this.inherited(arguments),this.set("_sliderHeight",w.get(this._sliderArea,
"height")||200),this._checkMinMaxDefaults(),this.set("_isLTR",this.isLeftToRight()),!this._isLTR){var a=w.get(this._sliderNode,"padding-left")+w.get(this._sliderNode,"padding-right"),b=Math.round(w.get(this._sliderNode,"width"));this.set("_sliderNodeWidth_RTL",a+b)}this.set("precision",y.getCombinedPrecision(this.minimum,this.maximum));this._updateRoundedLabels();this._generateMoveables();this._generateMinMaxEditors();this._generateCtrlKeyListener();this.watch("values",this._valuesChange);this.watch("minimum",
this._updateTimeout);this.watch("maximum",this._updateTimeout);this.watch("showRatioLabels",this._updateTimeout)},destroy:function(){this.inherited(arguments)},setValue:function(a,b,c){var d=this.get("values"),g=d.slice(0);"object"==typeof d[0]?g[a].value=b:g[a]=b;(this.intermediateChanges||c)&&this.set("values",g);c?this.emit("stop",{values:this.get("values")}):this.emit("slide",{values:g})},_updateTimeout:function(){this._updateSlider()},_updateSlider:function(){this._reset();this._checkMinMaxDefaults();
this._updateRoundedLabels();this._generateMoveables();this._generateMinMaxEditors();this._generateCtrlKeyListener()},_checkMinMaxDefaults:function(){var a,b,c=this.values;this.minimum===this.maximum&&c&&0<c.length&&this.set(isNaN(c[0])?{minimum:0,maximum:2*c[0].value}:{minimum:0,maximum:2*c[0]});c&&0<c.lenth&&(a=isNaN(c[0])?c[0].value:c[0],this.minimum>a&&this.set("minimum",a),b=isNaN(c[c.length-1])?c[c.length-1].value:c[c.length-1],this.maximum<b&&this.set("maximum",b))},_calculateValueFromHandlePosition:function(a){var b=
this.get("minimum"),c=this.get("maximum"),d=this.get("precision"),g=this.get("step")||Math.pow(10,-d);return 1>=b&&-1<=b&&1>=c&&-1<=c||d>=this._minPrecisionForSmallNumbers?(a*(c-b)+b)/g*g:parseFloat((Math.round((a*(c-b)+b)/g)*g).toFixed(d))},_generateMoveables:function(){var a,b=this._sliderNode,c=this._sliderHeight,q=this.get("minimum"),g=this.get("maximum"),e=this.get("precision"),l=(this.get("step")||Math.pow(10,-e),this.get("showLabels")),p=this.get("showTicks"),k=n.hitch(this,this.setValue),
e=this.get("values");this._updateMinMaxLabels();this.set("_primaryHandleIdx",null);a=x.map(e,n.hitch(this,function(f,m){var e,h,r,A,t,u;return f&&f.primaryHandle&&this.set("_primaryHandleIdx",m),"object"==typeof f&&f.hidden?null:("object"==typeof f&&(f=f.value),e=v.create("div",{style:this._getHandleStyleString(f),className:this._css.moveable},b),u=e._handleContainer=v.create("div",{className:this._css.handlerContainer},e),e._arrowSpan=A=v.create("span",{className:this._css.handlerSpan},u),e._handler=
h=v.create("div",{className:this._css.handler},u),"HeatmapSlider"!==this.type&&(!0===l||"object"==typeof l&&-1!==x.indexOf(l,"handles"))&&(r=this._generateHandleLabel(e,m)),p&&this._generateHandleTicks(e,m),t=new K.constrainedMoveable(e,{handle:u,within:!0,constraints:n.hitch(this,function(){return{t:0,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:c}})}),t.onMoveStart=n.hitch(this,function(b){var l,d,g,f,p,q,k,r,z=this.handles,h=x.indexOf(z,m);this._currentTopValue[m]=b.node.style.top;e.labelNode&&
e.labelNode._autoPositioned&&(w.set(e.labelNode,"top","3px"),e.labelNode._autoPositioned=!1);y._autoPositionHandleLabels(this.get("moveables"));e._numberEditor&&(e._numberEditor.destroy(),e._numberEditor=null);this._primaryHandleIdx!==m?(0<z.length?(l=null!==z[h-1]?z[h-1]:null,d=null!==z[h+1]?z[h+1]:null,g=a[l],f=a[d]):(g=a[m-1],f=a[m+1]),g&&f?(p=g.style.top,q=f.style.top,k=Number(p.replace("px","")),r=Number(q.replace("px","")),t.constraints=n.hitch(this,function(){return{t:r+2,l:this._isLTR?0:this._sliderNodeWidth_RTL,
w:0,h:c-r-(c-k+4)}})):g?(p=g.style.top,k=Number(p.replace("px","")),t.constraints=n.hitch(this,function(){return{t:0,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:c-(c-k+2)}})):f&&(q=f.style.top,r=Number(q.replace("px","")),t.constraints=n.hitch(this,function(){return{t:r+2,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:c-(r+2)}}))):(0<z.length?(l=null!==z[h-1]?z[h-1]:null,d=null!==z[h+1]?z[h+1]:null,g=a[l],f=a[d]):(g=a[m-1],f=a[m+1]),g&&f&&(p=g.style.top,q=f.style.top,k=Number(p.replace("px",
"")),r=Number(q.replace("px","")),t.constraints=n.hitch(this,function(){return{t:2,l:this._isLTR?0:this._sliderNodeWidth_RTL,w:0,h:c-4}})))}),t.onMoved=n.hitch(this,function(b){var l,f,e,p,h,t,u,v;if(m===this._primaryHandleIdx&&(e=Number(this._currentTopValue[m].replace("px",""))-Number(b.node.style.top.replace("px","")),this._currentTopValue[m]=b.node.style.top,x.forEach(a,n.hitch(this,function(a,b){a&&b!==m&&!(p=Number(a.style.top.replace("px","")),t=p-e,l=1-Number(t/c),f=this._calculateValueFromHandlePosition(l),
q>f||f>g)&&(w.set(a,"top",t+"px"),k(b,f,!1),a.labelNode&&(a.labelNode.spanNode.innerHTML=this.showRatioLabels?this._getLabelValueFromIndex(b):d.format(f.toFixed(6))))}))),l=1-Number(b.node.style.top.replace("px",""))/c,f=this._calculateValueFromHandlePosition(l),null!==this._primaryHandleIdx&&m!==this._primaryHandleIdx&&this._ctrlDown&&(e=Number(this._currentTopValue[m].replace("px",""))-Number(b.node.style.top.replace("px","")),this._currentTopValue[m]=b.node.style.top,0===m?(p=Number(a[a.length-
1].style.top.replace("px","")),h=p+e,h>c&&(h=c),0>h&&(h=0),w.set(a[a.length-1],"top",h+"px"),v=1-h/c,u=this._calculateValueFromHandlePosition(v),k(a.length-1,u,!1),a[a.length-1].labelNode&&(a[a.length-1].labelNode.spanNode.innerHTML=d.format(u.toFixed(6)))):m===a.length-1&&(p=Number(a[0].style.top.replace("px","")),h=p+e,h>c&&(h=c),0>h&&(h=0),w.set(a[0],"top",h+"px"),v=1-h/c,u=this._calculateValueFromHandlePosition(v),k(0,u,!1),a[0].labelNode&&(a[0].labelNode.spanNode.innerHTML=d.format(u.toFixed(6))))),
k(m,f,!1),this._updateRoundedLabels(),r)b=d.format(parseFloat(d.round([f,parseFloat(this._getLabelValueFromIndex(m,!0))])[0]).toFixed(this.precision)),r.spanNode.innerHTML=this.showRatioLabels?this._getLabelValueFromIndex(m):b;y._autoPositionHandleLabels(this.get("moveables"))}),t.onMoveStop=n.hitch(this,function(a){var b,l,f;if(f=Number(a.node.style.top.replace("px","")),b=1-f/c,l=this._calculateValueFromHandlePosition(b),k(m,l,!0),this._updateRoundedLabels(),r)a=d.format(parseFloat(d.round([l,parseFloat(this._getLabelValueFromIndex(m,
!0))])[0]).toFixed(this.precision)),r.spanNode.innerHTML=this.showRatioLabels?this._getLabelValueFromIndex(m):a;y._autoPositionHandleLabels(this.get("moveables"))}),this.showHandles||(w.set(h,"display","none"),w.set(A,"display","none")),e)}));this.set("moveables",a);y._autoPositionHandleLabels(this.get("moveables"))},_reset:function(){x.forEach(this.moveables,n.hitch(this,function(a){a&&a.parentElement.removeChild(a)}));this.moveables=[]},_getHandleStyleString:function(a){var b=this.get("minimum"),
c=this.get("maximum");return"top: "+Math.round((1-(a-b)/(c-b))*this._sliderHeight)+"px; "+("left: "+(this._isLTR?0:this._sliderNodeWidth_RTL)+"px;")},_generateHandleTicks:function(a,b){var c=this._css,d=c.handlerTick+" "+c.handlerTickTop,g=c.handlerTick+" "+c.handlerTickBottom,d=0===b?g:d;"HeatmapSlider"===this.type&&(d+=c.heatmapTick);a._tick=v.create("div",{className:d},a)},_updateLabels:function(){this._updateMinMaxLabels();this._updateRoundedLabels()},_resetLabelPositions:function(){x.forEach(this.moveables,
function(a){if(a){var b=a.labelNode;b&&(w.set(b,"top","3px"),a.labelNode._autoPositioned=!1)}})},_generateHandleLabel:function(a,b){var c,d;return c=v.create("div",{className:this._css.handlerLabel},a),d=v.create("span",{className:this._css.handlerLabelSpan,innerHTML:this._getLabelValueFromIndex(b)},c),c.spanNode=d,a.labelNode=c,k(c,"click",n.hitch(this,function(){this._generateHandleLabelEditor(a,b)})),c},_updateMinMaxLabels:function(){var a,b,c,q,g,e,l=this.minimum,p=this.maximum,n=this.showLabels,
f=this.minLabel,m=this.maxLabel,k=this._topNodeSpan,h=this._bottomNodeSpan,r=this._isZoomed,v=this._maxZoomLabel,t=this._minZoomLabel,u=this.showRatioLabels,E=this._maxRatioLabel,w=this._minRatioLabel,y=this._roundedDataLabels;!1===n||"object"==typeof n&&-1===x.indexOf(n,"data")?(k.innerHTML="",h.innerHTML=""):r?u?(k.innerHTML=E,h.innerHTML=w):(k.innerHTML=d.format(v),h.innerHTML=d.format(t)):u?(k.innerHTML=E,h.innerHTML=w):(a=isNaN(f)?f:d.round([f,m])[0],b=isNaN(m)?m:d.round([f,m])[1],c=isNaN(a)||
null===a?f:d.format(a),q=isNaN(b)||null===b?m:d.format(b),g=d.format(y[0])||d.format(l),e=d.format(y[1])||d.format(p),k.innerHTML=q||e,h.innerHTML=c||g)},_updateRoundedLabels:function(){switch(this._roundedDataLabels=d.round([this.minimum,this.maximum]),this.type){case "SizeInfoSlider":case "ClassedSizeSlider":case "ClassedColorSlider":this._roundedHandleLabels=d.round(this.values);break;case "ColorInfoSlider":case "OpacitySlider":this._roundedHandleLabels=d.round(this._getValuesFromObject(this.values))}this._updateRatioLabels()},
_updateRatioLabels:function(){var a,b,c=this.get("showRatioLabels"),k=this.get("minimum"),g=this.get("maximum"),e=this._getValuesFromObject(this.values),l=[];if(!1!==c){if("percent"!==c&&"percentTotal"!==c)return void this.set("showRatioLabels",!1);"percent"===c?(x.forEach(e,function(a){l.push(this._getRatioFromValue(a))},this),a=d.format(this._getRatioFromValue(k).toFixed(2)),b=d.format(this._getRatioFromValue(g).toFixed(2))):"percentTotal"===c&&(x.forEach(e,function(a){l.push(this._getRatioFromValue(a))},
this),a=d.format(this._getRatioFromValue(k).toFixed(2)),b=d.format(this._getRatioFromValue(g).toFixed(2)));this.set({_ratioLabels:l,_minRatioLabel:a+"%",_maxRatioLabel:b+"%"})}},_generateMinMaxEditors:function(){!this.showLabels||"object"==typeof this.showLabels&&-1===x.indexOf(this.showLabels,"data")||"HeatmapSlider"===this.type?(D.remove(this._topNode,this._css.topLabelNodeHover),D.remove(this._botNode,this._css.bottomLabelNodeHover)):(k(this._topNode,"click",n.hitch(this,this._generateMaxEditor)),
k(this._botNode,"click",n.hitch(this,this._generateMinEditor)))},_generateMaxEditor:function(){if(!(this._maximumNumberEditor&&this._topLabelNode||this._isZoomed)){var a,b,c=this.get("minLabel"),q=this.get("maxLabel"),g=this.get("maximum");this._topNodeSpan.innerHTML="";this._topLabelNode=v.create("input",{type:"text"},this._topNode);a=this.handles&&0<this.handles.length?this.values[this.handles[this.handles.length-1]]:this.values[this.values.length-1];"object"==typeof a&&(a=a.value);this.showRatioLabels&&
(a=this._getLabelValueFromIndex(this.values.length-1,!0).replace("%",""),g=Number(this._maxRatioLabel.replace("%","")));this._maximumNumberEditor=b=new C({value:Number(g),required:!0,constraints:{min:a,max:"percentTotal"===this.showRatioLabels?100:null,places:"0,20"}},this._topLabelNode);b.startup();b.focus();b.textbox.select();var e=!1;k(b,"keydown",n.hitch(this,function(a){if(!1!==e&&(b.validate=e),13===a.keyCode)a=b.get("value"),void 0===a&&(a=b.get("displayedValue")),a<=b.constraints.max&&a>=
b.constraints.min?b.focusNode.blur():(e=b.validate,b.validate(!1),b.validate=function(){return!1})}));k(b,"blur",n.hitch(this,function(){var a=isNaN(q)?q:d.round([c,q])[1],a=isNaN(a)||null===a?q:d.format(a),b=d.format(this._roundedDataLabels[1])||d.format(g);this._topNodeSpan.innerHTML=this.showLabels||"object"==typeof this.showLabels&&-1!==x.indexOf(this.showLabels,"data")?this.showRatioLabels?this._maxRatioLabel:a||b:"";this._maximumNumberEditor.destroy();this._maximumNumberEditor=null}));k(b,"change",
n.hitch(this,function(b){var e;if(b<Number(a)||isNaN(b)||void 0===b)return b=isNaN(q)?q:d.round([c,q])[1],b=isNaN(b)||null===b?q:d.format(b),e=d.format(this._roundedDataLabels[1])||d.format(g),void(this._topNodeSpan.innerHTML=this.showRatioLabels?this._maxRatioLabel:b||e);e=this.showRatioLabels?this._getValueFromPercent(b):b;this._topNodeSpan.innerHTML=this.showRatioLabels?e:d.format(b);this.set("maximum",e);this._reset();this._updateRoundedLabels();this._generateMoveables();this._generateMinMaxEditors();
this.emit("data-value-change",{min:this.minimum,max:this.maximum,values:n.clone(this.values)})}))}},_generateMinEditor:function(){if(!(this._minimumNumberEditor&&this._botLabelNode||this._isZoomed)){var a,b,c=this.minLabel,q=this.maxLabel,g=this.minimum;this._bottomNodeSpan.innerHTML="";this._botLabelNode=v.create("input",{type:"text"},this._botNode);a=this.handles&&0<this.handles.length?this.values[this.handles[0]]:this.values[0];"object"==typeof a&&(a=a.value);this.showRatioLabels&&(a=this._getLabelValueFromIndex(0,
!0).replace("%",""),g=Number(this._minRatioLabel.replace("%","")));this._minimumNumberEditor=b=new C({value:Number(g),required:!0,constraints:{max:a,min:"percentTotal"===this.showRatioLabels?0:null,places:"0,20"}},this._botLabelNode);b.startup();b.focus();b.textbox.select();var e=!1;k(b,"keydown",n.hitch(this,function(a){if(!1!==e&&(b.validate=e),13===a.keyCode)a=b.get("value"),void 0===a&&(a=b.get("displayedValue")),a<=b.constraints.max&&a>=b.constraints.min?b.focusNode.blur():(e=b.validate,b.validate(!1),
b.validate=function(){return!1})}));k(b,"blur",n.hitch(this,function(){var a=isNaN(c)?c:d.round([c,q])[0],a=isNaN(a)||null===a?c:d.format(a),b=d.format(this._roundedDataLabels[0])||d.format(g);this._bottomNodeSpan.innerHTML=this.showLabels||"object"==typeof this.showLabels&&-1!==x.indexOf(this.showLabels,"data")?this.showRatioLabels?this._minRatioLabel:a||b:"";this._minimumNumberEditor.destroy();this._minimumNumberEditor=null}));k(b,"change",n.hitch(this,function(b){var e;if(b>Number(a)||isNaN(b)||
void 0===b)return b=isNaN(c)?c:d.round([c,q])[0],b=isNaN(b)||null===b?c:d.format(b),e=d.format(this._roundedDataLabels[0])||d.format(g),void(this._bottomNodeSpan.innerHTML=this.showRatioLabels?this._minRatioLabel:b||e);e=this.showRatioLabels?this._getValueFromPercent(b):b;this._bottomNodeSpan.innerHTML=this.showRatioLabels?e:d.format(b);this.set("minimum",e);this._reset();this._updateRoundedLabels();this._generateMoveables();this._generateMinMaxEditors();this.emit("data-value-change",{min:this.minimum,
max:this.maximum})}))}},_generateHandleLabelEditor:function(a,b){if(!a._numberEditor){var c,d,g,e,l,p,w,f;l=this.get("handles");var m=this.get("maximum"),y=this.get("minimum"),h=this.get("_isZoomed");p=this.get("values");var r=p[b],A=x.indexOf(l,b),t=a.labelNode,u=!1;"object"==typeof r&&(r=r.value);t.spanNode.innerHTML="";w=v.create("input",{type:"text"},t);0<l.length?(c=null!==l[A-1]?l[A-1]:null,d=null!==l[A+1]?l[A+1]:null,g=p[c],e=p[d],"object"==typeof g&&(g=g.value),"object"==typeof e&&(e=e.value)):
(g=p[b-1],e=p[b+1],"object"==typeof g&&(g=g.value),"object"==typeof e&&(e=e.value));l=void 0!==g&&null!==g?g:h&&!isNaN(this._minZoomLabel)?this._minZoomLabel:y;p=void 0!==e&&null!==e?e:h&&!isNaN(this._maxZoomLabel)?this._maxZoomLabel:m;this.showRatioLabels&&(r=this._getLabelValueFromIndex(b).replace("%",""),l=g?Number(this._getLabelValueFromIndex(c,!0).replace("%","")):Number(this._minRatioLabel.replace("%",""))||Number(this._getRatioFromValue(this.minimum)),p=e?Number(this._getLabelValueFromIndex(d,
!0).replace("%","")):Number(this._maxRatioLabel.replace("%",""))||Number(this._getRatioFromValue(this.maximum)));f=new C({value:r,constraints:{min:l,max:p,places:"0,20"}},w);a._numberEditor=f;k(f,"keydown",n.hitch(this,function(a){if(!1!==u&&(f.validate=u),13===a.keyCode)a=f.get("value"),void 0===a&&(a=f.get("displayedValue")),a<=f.constraints.max&&a>=f.constraints.min?f.focusNode.blur():(u=f.validate,f.validate(!1),f.validate=function(){return!1})}));k(f,"blur",n.hitch(this,function(){isNaN(f.get("value"))&&
f.set("value",r);h&&(f.get("value")>m||f.get("value")<y)&&(this.set("_isZoomed",!1),this.emit("zoom-out"));t.spanNode.innerHTML=this._getLabelValueFromIndex(b);f.destroy();a._numberEditor=null}));k(f,"change",n.hitch(this,function(a){var c=a;return a>f.constraints.max||a<f.constraints.min||isNaN(a)||void 0===a?void(t.spanNode.innerHTML=this._getLabelValueFromIndex(b)):(this.showRatioLabels&&(c=this._getValueFromPercent(a)),"object"==typeof this.values[b]?this.values[b].value=c:this.values[b]=c,this._reset(),
this._updateRoundedLabels(),this._generateMoveables(),this._generateMinMaxEditors(),void this.emit("handle-value-change",{values:this.values}))}));f.focus();f.textbox.select()}},_getRatioFromValue:function(a){var b=this.get("showRatioLabels");return"percent"===b?100*a:"percentTotal"===b?a/(1+a)*100:null},_getValueFromPercent:function(a){var b,c=this.get("showRatioLabels");if("percent"===c)b=a/100;else if("percentTotal"===c){if(100<=a)return 100;b=a/(100-a)}return b},_getLabelValueFromIndex:function(a,
b){return this.showRatioLabels&&this._ratioLabels[a]?!0===b?parseFloat(this._ratioLabels[a].toFixed(2))+"%":d.format(parseFloat(this._ratioLabels[a].toFixed(2)))+"%":!0===b?this._roundedHandleLabels[a]:d.format(this._roundedHandleLabels[a])},_getValuesFromObject:function(a){var b=[];return x.forEach(a,function(a){b.push(a.value)}),b},_getDecimalPlaces:function(a){return M.format(a,{places:"0,20",round:-1}).replace(/^-?\d*\.?|0+$/g,"").length},_collisionCheck:function(a,b){return!(a.right<b.left||
a.left>b.right||a.bottom<b.top||a.top>b.bottom)},_generateCtrlKeyListener:function(){k(document,"keydown",n.hitch(this,function(a){this._ctrlDown=a.metaKey||a.ctrlKey}));k(document,"keyup",n.hitch(this,function(a){this._ctrlDown=a.metaKey||a.ctrlKey}))},_valuesChange:function(){this.emit("change",{values:this.get("values")})}});return N("extend-esri")&&n.setObject("dijit.RendererSlider",B,F),B});