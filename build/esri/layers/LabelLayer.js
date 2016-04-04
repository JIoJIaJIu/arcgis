//>>built
define("esri/layers/LabelLayer","require dojo/_base/declare dojo/_base/lang dojo/number dojo/i18n!dojo/cldr/nls/number dojo/_base/array dojo/_base/connect dojo/has dojox/gfx/_base ../kernel ../lang ../graphic ../PopupInfo ./labelLayerUtils/DynamicLabelClass ./labelLayerUtils/StaticLabelClass ../symbols/TextSymbol ../symbols/ShieldLabelSymbol ../geometry/Extent ../geometry/Point ../geometry/webMercatorUtils ./GraphicsLayer ./LabelClass ../renderers/SimpleRenderer".split(" "),function(n,A,m,B,v,w,p,
C,x,D,y,E,F,G,H,q,t,I,J,z,K,u,L){function M(a){return"sizeInfo"===a.type}n=A(K,{declaredClass:"esri.layers.LabelLayer",constructor:function(a){this.id="labels";this.featureLayers=[];this._featureLayerInfos=[];this._preparedLabels=[];this._engineType="STATIC";this._mapEventHandlers=[];a&&(a.id&&(this.id=a.id),a.mode&&(this._engineType="DYNAMIC"===a.mode.toUpperCase()?"DYNAMIC":"STATIC"))},_setMap:function(){var a=this.inherited(arguments);return this._map&&this._mapEventHandlers.push(this._map.on("extent-change",
m.hitch(this,"refresh"))),this.refresh(),a},_unsetMap:function(){var a;for(a=0;a<this._mapEventHandlers.length;a++)p.disconnect(this._mapEventHandlers[a]);this.refresh();this.inherited(arguments)},setAlgorithmType:function(a){this._engineType=a&&"DYNAMIC"===a.toUpperCase()?"DYNAMIC":"STATIC";this.refresh()},addFeatureLayer:function(a,e,b,f){if(!this.getFeatureLayer(a.layerId)){var c=[];c.push(a.on("update-end",m.hitch(this,"refresh")));c.push(a.on("suspend",m.hitch(this,"refresh")));c.push(a.on("resume",
m.hitch(this,"refresh")));c.push(a.on("edits-complete",m.hitch(this,"refresh")));c.push(a.on("labeling-info-change",m.hitch(this,"refresh")));c.push(a.on("time-extent-change",m.hitch(this,"refresh")));c.push(a.on("show-labels-change",m.hitch(this,"refresh")));this._featureLayerInfos.push({FeatureLayer:a,LabelExpressionInfo:b,LabelingOptions:f,LabelRenderer:e,EventHandlers:c});this.featureLayers.push(a);this.refresh()}},getFeatureLayer:function(a){var e,b;for(e=0;e<this.featureLayers.length;e++)if(b=
this.featureLayers[e],void 0!==b&&b.id==a)return b;return null},removeFeatureLayer:function(a){var e,b;if(e=this.getFeatureLayer(a),void 0!==e&&(b=w.indexOf(this.featureLayers,e),-1<b)){this.featureLayers.splice(b,1);for(a=0;a<this._featureLayerInfos[b].EventHandlers.length;a++)p.disconnect(this._featureLayerInfos[b].EventHandlers[a]);this._featureLayerInfos.splice(b,1);this.refresh()}},removeAllFeatureLayers:function(){var a;for(a=0;a<this.featureLayers.length;a++){for(var e=0;e<this._featureLayerInfos[a].EventHandlers.length;e++)p.disconnect(this._featureLayerInfos[a].EventHandlers[e]);
this.featureLayers=[];this._featureLayerInfos=[]}this.refresh()},getFeatureLayers:function(){return this.featureLayers},getFeatureLayerInfo:function(a){var e,b;for(e=0;e<this.featureLayers.length;e++)if(b=this.featureLayers[e],void 0!==b&&b.id==a)return this._featureLayerInfos[e];return null},refresh:function(){var a,e,b,f,c,h,g,d,k=[],l="DYNAMIC"===this._engineType?new G:new H;if(this._map){l.setMap(this._map,this);this._preparedLabels=[];for(e=0;e<this.featureLayers.length;e++)if(b=this.featureLayers[e],
b.visible&&b.showLabels&&b.visibleAtMapScale&&!b._suspended)if(f=this._featureLayerInfos[e],g=this._convertOptions(null),f.LabelRenderer){if(k=b.labelingInfo,k&&(d=k[0],d&&(h=this._getLabelExpression(d),g=this._convertOptions(d))),c=f.LabelRenderer,f.LabelExpressionInfo&&(h=f.LabelExpressionInfo),f.LabelingOptions){if(g=this._convertOptions(null),void 0!==f.LabelingOptions.pointPriorities)a=f.LabelingOptions.pointPriorities,g.pointPriorities="above-center"==a||"AboveCenter"==a||"esriServerPointLabelPlacementAboveCenter"==
a?"AboveCenter":"above-left"==a||"AboveLeft"==a||"esriServerPointLabelPlacementAboveLeft"==a?"AboveLeft":"above-right"==a||"AboveRight"==a||"esriServerPointLabelPlacementAboveRight"==a?"AboveRight":"below-center"==a||"BelowCenter"==a||"esriServerPointLabelPlacementBelowCenter"==a?"BelowCenter":"below-left"==a||"BelowLeft"==a||"esriServerPointLabelPlacementBelowLeft"==a?"BelowLeft":"below-right"==a||"BelowRight"==a||"esriServerPointLabelPlacementBelowRight"==a?"BelowRight":"center-center"==a||"CenterCenter"==
a||"esriServerPointLabelPlacementCenterCenter"==a?"CenterCenter":"center-left"==a||"CenterLeft"==a||"esriServerPointLabelPlacementCenterLeft"==a?"CenterLeft":"center-right"==a||"CenterRight"==a||"esriServerPointLabelPlacementCenterRight"==a?"CenterRight":"AboveRight";void 0!==f.LabelingOptions.lineLabelPlacement&&(g.lineLabelPlacement=f.LabelingOptions.lineLabelPlacement);void 0!==f.LabelingOptions.lineLabelPosition&&(g.lineLabelPosition=f.LabelingOptions.lineLabelPosition);void 0!==f.LabelingOptions.labelRotation&&
(g.labelRotation=f.LabelingOptions.labelRotation);void 0!==f.LabelingOptions.howManyLabels&&(g.howManyLabels=f.LabelingOptions.howManyLabels)}c instanceof u&&(h=this._getLabelExpression(c),c=new L(c.symbol),g=this._convertOptions(c));this._addLabels(b,c,h,g)}else if(k=b.labelingInfo)for(a=k.length-1;0<=a;a--)(d=k[a])&&(c=new u(d instanceof u?d.toJson():d),h=this._getLabelExpression(d),g=this._convertOptions(d),this._addLabels(b,c,h,g));e=l._process(this._preparedLabels);this.clear();this.drawLabels(this._map,
e)}},drawLabels:function(a,e){this._scale=(a.extent.xmax-a.extent.xmin)/a.width;var b;for(b=0;b<e.length;b++){var f=e[b],c=f.x,h=f.y,g=f.text,d=f.angle,k=f.layer.labelSymbol;"polyline"==f.layer.geometry.type&&f.layer.options.labelRotation&&k.setAngle(180/Math.PI*d);k.setText(g);f=c;k instanceof q&&(c=k.getHeight(),d=Math.sin(d),f-=.25*c*this._scale*d,h-=.33*c*this._scale);d=new E(new J(f,h,a.extent.spatialReference));d.setSymbol(k);this.add(d)}},_addLabels:function(a,e,b,f){var c,h,g,d;if(this._isWithinScaleRange(e.minScale,
e.maxScale)&&b&&""!==b){var k=this._map,l=!a.url&&!k.spatialReference.equals(a.spatialReference);for(c=0;c<a.graphics.length;c++)if(h=a.graphics[c],!1!==h.visible){if(g=h.geometry,l){if(!z.canProject(g,k))continue;g=z.project(g,k)}g&&this._isWhere(e.where,h.attributes)&&this._isWithinScreenArea(g)&&(d=this._buildLabelText(b,h.attributes,a.fields,f),this._addLabel(d,e,a.renderer,h,f,g,k))}}},_isWithinScreenArea:function(a){var e;if(e="point"===a.type?new I(a.x,a.y,a.x,a.y,a.spatialReference):a.getExtent(),
void 0===e)return!1;a=this._intersects(this._map,e);return null===a||0===a.length?!1:!0},_isWithinScaleRange:function(a,e){var b=this._map.getScale();return 0<a&&b>=a?!1:0<e&&e>=b?!1:!0},_isWhere:function(a,e){try{if(!a)return!0;if(a){var b=a.split(" ");if(3===b.length)return this._sqlEquation(e[b[0].substr(1,b[0].length-2)],b[1],b[2]);if(7===b.length){var f=this._sqlEquation(e[b[0].substr(1,b[0].length-2)],b[1],b[2]),c=b[3],h=this._sqlEquation(e[b[4].substr(1,b[4].length-2)],b[5],b[6]);switch(c){case "AND":return f&&
h;case "OR":return f||h}}}return!1}catch(g){console.log("Error.: can't parse \x3d "+a)}},_sqlEquation:function(a,e,b){switch(e){case "\x3d":return a==b?!0:!1;case "\x3c\x3e":return a!=b?!0:!1;case "\x3e":return a>b?!0:!1;case "\x3e\x3d":return a>=b?!0:!1;case "\x3c":return b>a?!0:!1;case "\x3c\x3d":return b>=a?!0:!1}return!1},_getSizeInfo:function(a){return a?a.sizeInfo||w.filter(a.visualVariables,M)[0]:null},_addLabel:function(a,e,b,f,c,h,g){var d,k,l,r;if(a&&""!==m.trim(a)&&e){a=a.replace(/\s+/g,
" ");d=e.getSymbol(f);d instanceof q?(d=new q(d.toJson()),d.setVerticalAlignment("baseline"),d.setHorizontalAlignment("center")):d=d instanceof t?new t(d.toJson()):new q;d.setText(a);e.symbol=d;l=this._getProportionalSize(e.sizeInfo,f.attributes);if(l&&(d instanceof q?d.setSize(l):d instanceof t&&(d.setWidth(l),d.setHeight(l))),l=0,r=0,b){k=b.getSymbol(f);var n,p=this._getSizeInfo(b);p&&(n=b.getSize(f,{sizeInfo:p,resolution:g.getResolutionInMeters()}));null!=n?l=r=n:k&&("simplemarkersymbol"==k.type?
(l=k.size,r=k.size):"picturemarkersymbol"==k.type?(l=k.width,r=k.height):("simplelinesymbol"==k.type||"cartographiclinesymbol"==k.type)&&(l=k.width))}b={};b.graphic=f;b.options=c;b.geometry=h;b.labelRenderer=e;b.labelSymbol=d;b.labelWidth=d.getWidth()/2;b.labelHeight=d.getHeight()/2;b.symbolWidth=x.normalizedLength(l)/2;b.symbolHeight=x.normalizedLength(r)/2;b.text=a;b.angle=d.angle;this._preparedLabels.push(b)}},_buildLabelText:function(a,e,b,f){return a.replace(/{[^}]*}/g,function(a){var h,g=a;
for(h=0;h<b.length;h++){if("{"+b[h].name+"}"==a){var g=e[b[h].name],d=b[h].domain;if(d&&m.isObject(d)){if("codedValue"==d.type)for(a=0;a<d.codedValues.length;a++)d.codedValues[a].code==g&&(g=d.codedValues[a].name);else"range"==d.type&&d.minValue<=g&&g<=d.maxValue&&(g=d.name);break}d=b[h].type;if(f.fieldInfos){var k=f.fieldInfos;for(h=0;h<k.length;h++)if("{"+k[h].fieldName+"}"==a){a=k[h].format;"esriFieldTypeDate"==d?(a="DateFormat"+F.prototype._dateFormats[a.dateFormat?a.dateFormat:"shortDate"])&&
(g=y.substitute({myKey:g},"${myKey:"+a+"}")):("esriFieldTypeInteger"==d||"esriFieldTypeSingle"==d||"esriFieldTypeSmallInteger"==d||"esriFieldTypeLong"==d||"esriFieldTypeDouble"==d)&&a&&(g=B.format(g,{places:a.places}),a.digitSeparator||v.group&&(g=g.replace(new RegExp("\\"+v.group,"g"),"")));break}}break}g=""}return null===g?"":g})},_getLabelExpression:function(a){return a.labelExpressionInfo?a.labelExpressionInfo.value:this._validSyntax(a.labelExpression)?this._convertLabelExpression(a.labelExpression):
""},_validSyntax:function(a){return/^(\s*\[[^\]]+\]\s*)+$/i.test(a)},_convertLabelExpression:function(a){return a.replace(RegExp("\\[","g"),"{").replace(RegExp("\\]","g"),"}")},_getProportionalSize:function(a,e){if(!a)return null;var b=y.substitute(e,"${"+a.field+"}",{first:!0});return!(a.minSize&&a.maxSize&&a.minDataValue&&a.maxDataValue&&b)||0>=a.maxDataValue-a.minDataValue?null:(a.maxSize-a.minSize)/(a.maxDataValue-a.minDataValue)*(b-a.minDataValue)+a.minSize},_convertOptions:function(a){var e=
"shortDate",b=null,f=null,c="",h="AboveRight",g="PlaceAtCenter",d="Above",k=!0;return a&&(a.format&&(e=a.format.dateFormat,b={places:a.format.places,digitSeparator:a.format.digitSeparator}),f=a.fieldInfos,c=a.labelPlacement),h="above-center"==c||"esriServerPointLabelPlacementAboveCenter"==c?"AboveCenter":"above-left"==c||"esriServerPointLabelPlacementAboveLeft"==c?"AboveLeft":"above-right"==c||"esriServerPointLabelPlacementAboveRight"==c?"AboveRight":"below-center"==c||"esriServerPointLabelPlacementBelowCenter"==
c?"BelowCenter":"below-left"==c||"esriServerPointLabelPlacementBelowLeft"==c?"BelowLeft":"below-right"==c||"esriServerPointLabelPlacementBelowRight"==c?"BelowRight":"center-center"==c||"esriServerPointLabelPlacementCenterCenter"==c?"CenterCenter":"center-left"==c||"esriServerPointLabelPlacementCenterLeft"==c?"CenterLeft":"center-right"==c||"esriServerPointLabelPlacementCenterRight"==c?"CenterRight":"AboveRight",g="above-start"==c||"below-start"==c||"center-start"==c?"PlaceAtStart":"above-end"==c||
"below-end"==c||"center-end"==c?"PlaceAtEnd":"PlaceAtCenter",d="above-after"==c||"esriServerLinePlacementAboveAfter"==c||"above-along"==c||"esriServerLinePlacementAboveAlong"==c||"above-before"==c||"esriServerLinePlacementAboveBefore"==c||"above-start"==c||"esriServerLinePlacementAboveStart"==c||"above-end"==c||"esriServerLinePlacementAboveEnd"==c?"Above":"below-after"==c||"esriServerLinePlacementBelowAfter"==c||"below-along"==c||"esriServerLinePlacementBelowAlong"==c||"below-before"==c||"esriServerLinePlacementBelowBefore"==
c||"below-start"==c||"esriServerLinePlacementBelowStart"==c||"below-end"==c||"esriServerLinePlacementBelowEnd"==c?"Below":"center-after"==c||"esriServerLinePlacementCenterAfter"==c||"center-along"==c||"esriServerLinePlacementCenterAlong"==c||"center-before"==c||"esriServerLinePlacementCenterBefore"==c||"center-start"==c||"esriServerLinePlacementCenterStart"==c||"center-end"==c||"esriServerLinePlacementCenterEnd"==c?"OnLine":"Above",("always-horizontal"==c||"esriServerPolygonPlacementAlwaysHorizontal"==
c)&&(k=!1),{dateFormat:e,numberFormat:b,fieldInfos:f,pointPriorities:h,lineLabelPlacement:g,lineLabelPosition:d,labelRotation:k,howManyLabels:"OneLabel"}}});return C("extend-esri")&&m.setObject("layers.LabelLayer",n,D),n});