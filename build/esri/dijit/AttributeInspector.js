//>>built
require({cache:{"url:esri/dijit/templates/AttributeInspector.html":'\x3cdiv class\x3d"esriAttributeInspector"\x3e\n    \x3cdiv class\x3d"atiLayerName" dojoAttachPoint\x3d"layerName"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"atiAttributes" dojoAttachPoint\x3d"attributeTable"\x3e\x3c/div\x3e\n    \x3cdiv dojoAttachPoint\x3d"attachmentEditor"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"atiEditorTrackingInfo" dojoAttachPoint\x3d"editorTrackingInfoDiv"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"atiButtons" dojoAttachPoint\x3d"editButtons"\x3e\n        \x3cbutton  dojoType\x3d"dijit.form.Button" class\x3d"atiButton atiDeleteButton"  dojoAttachPoint\x3d"deleteBtn" dojoAttachEvent\x3d"onClick: onDeleteBtn" showLabel\x3d"true" type\x3d"button"\x3e${NLS_deleteFeature}\x3c/button\x3e\n        \x3cdiv class\x3d"atiNavButtons" dojoAttachPoint\x3d"navButtons"\x3e\n            \x3cdiv class\x3d"atiNavMessage" dojoAttachPoint\x3d"navMessage"\x3e\x3c/div\x3e\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiFirstIcon" dojoAttachPoint\x3d"firstFeatureButton" dojoAttachEvent\x3d"onClick: onFirstFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_first}\x3c/button\x3e\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiPrevIcon" dojoAttachPoint\x3d"prevFeatureButton" dojoAttachEvent\x3d"onClick: onPreviousFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_previous}\x3c/button\x3e\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiNextIcon" dojoAttachPoint\x3d"nextFeatureButton" dojoAttachEvent\x3d"onClick: onNextFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_next}\x3c/button\x3e\n            \x3cbutton  dojoType\x3d"dijit.form.Button" iconClass\x3d"atiButton atiLastIcon" dojoAttachPoint\x3d"lastFeatureButton" dojoAttachEvent\x3d"onClick: onLastFeature" showLabel\x3d"false" type\x3d"button"\x3e${NLS_last}\x3c/button\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n'}});
define("esri/dijit/AttributeInspector","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/sniff dojo/_base/kernel dojo/has dojo/dom-style dojo/dom-construct ../kernel ../lang ../domUtils ../layers/InheritedDomain ../layers/FeatureLayer dojo/i18n!../nls/jsapi dojo/fx dojox/gfx dijit/_Widget dijit/_Templated dijit/Editor dijit/_editor/plugins/LinkDialog dijit/_editor/plugins/TextColor ./_EventedWidget ./editing/AttachmentEditor ./editing/Util ../tasks/query dijit/form/DateTextBox dijit/form/TextBox dijit/form/NumberTextBox dijit/form/FilteringSelect dijit/form/NumberSpinner dijit/form/Button dijit/form/SimpleTextarea dijit/form/ValidationTextBox dijit/form/TimeTextBox dijit/Tooltip dojo/data/ItemFileReadStore dojox/date/islamic dojox/date/islamic/Date dojox/date/islamic/locale dojo/text!./templates/AttributeInspector.html".split(" "),
function(y,h,e,q,R,z,A,p,k,B,n,r,t,C,D,S,T,E,F,G,U,V,H,I,u,W,J,v,K,w,L,X,M,x,N,O,P,Y,Z,aa,Q){var m=y([H,E,F],{declaredClass:"esri.dijit.AttributeInspector",widgetsInTemplate:!0,templateString:Q,onUpdate:function(){},onDelete:function(){},onAttributeChange:function(){},onNext:function(){},onReset:function(){},onCancel:function(){},_navMessage:"( ${idx} ${of} ${numFeatures} )",_currentAttributeFieldName:null,_aiConnects:[],_selection:[],_toolTips:[],_numFeatures:0,_featureIdx:0,_currentLInfo:null,_currentFeature:null,
_rollbackInfo:null,_eventMap:{update:!0,"delete":["feature"],"attribute-change":["feature","fieldName","fieldValue"],next:["feature"],reset:!0,cancel:!0},constructor:function(a){h.mixin(this,D.widgets.attributeInspector);a=a||{};a.featureLayer||a.layerInfos||console.error("esri.AttributeInspector: please provide correct parameter in the constructor");this._datePackage=this._getDatePackage(a);this._layerInfos=a.layerInfos||[{featureLayer:a.featureLayer,options:a.options||[]}];this._layerInfos=e.filter(this._layerInfos,
function(a){return!a.disableAttributeUpdate});this._hideNavButtons=a.hideNavButtons||!1},postCreate:function(){if(e.every(this._layerInfos,function(a){return a.featureLayer.loaded}))this._initLayerInfos(),this._createAttachmentEditor(),this.onFirstFeature();else{var a=this._layerInfos.length;e.forEach(this._layerInfos,function(b){b=b.featureLayer;if(b.loaded)a--;else var d=q.connect(b,"onLoad",this,function(){q.disconnect(d);d=null;a--;a||(this._initLayerInfos(),this._createAttachmentEditor(),this.onFirstFeature())})},
this)}},destroy:function(){this._destroyAttributeTable();e.forEach(this._aiConnects,q.disconnect);delete this._aiConnects;this._attachmentEditor&&(this._attachmentEditor.destroy(),delete this._attachmentEditor);delete this._layerInfos;this._selection=this._currentFeature=this._currentLInfo=this._attributes=this._layerInfos=null;this.inherited(arguments)},refresh:function(){this._updateSelection()},first:function(){this.onFirstFeature()},last:function(){this.onLastFeature()},next:function(){this.onNextFeature()},
previous:function(){this.onPreviousFeature()},showFeature:function(a,b){b&&(this._createOnlyFirstTime=!0);this._updateSelection([a],b);this._updateUI()},onLayerSelectionChange:function(a,b,d){this._createOnlyFirstTime=!1;this._featureIdx=d===C.SELECTION_NEW?0:this._featureIdx;this._updateSelection();this._updateUI()},onLayerSelectionClear:function(){!this._selection||0>=this._selection.length||(this._numFeatures=0,this._featureIdx=0,this._selection=[],this._currentFeature=null,this._currentLInfo=
null,this._updateUI())},onLayerUpdateEnd:function(){},onLayerError:function(){},onLayerEditsError:function(){},onLayerEditsComplete:function(a,b,d,c){if(c=c||[],c.length){var f=this._selection,l=a.featureLayer.objectIdField;e.forEach(c,h.hitch(this,function(a){e.some(f,h.hitch(this,function(b,c){return b.attributes[l]!==a.objectId?!1:(this._selection.splice(c,1),!0)}))}))}b=b||[];b.length&&(this._selection=u.findFeatures(b,a.featureLayer),this._featureIdx=0);c=this._numFeatures=this._selection?this._selection.length:
0;if(b.length){if(b=c?this._selection[this._featureIdx]:null)c=b.getLayer().getEditCapabilities(),c.canCreate&&!c.canUpdate||this._showFeature(b);this._updateUI()}if(d=d||[],d.length){var g=this._rollbackInfo;e.forEach(d,function(b){var c=u.findFeatures(d,a.featureLayer)[0];if(!b.success&&c.attributes[a.featureLayer.objectIdField]===b.objectId&&g){b=g.graphic.attributes[g.field.name];var f=e.filter(this._currentLInfo.fieldInfos,function(a){return a.fieldName===g.field.name},this)[0].dijit;c.attributes[g.field.name]=
b;this._setValue(f,b)}},this)}this._rollbackInfo=null},onFieldValueChange:function(a,b){var d=a.field,c=a.dijit,f=this._currentFeature,l=this._currentLInfo,g=d.name;if(""!==c.displayedValue&&"undefined"==typeof b&&!c.isValid()||""!==c.displayedValue&&c.displayedValue!==b&&c.isValid&&!c.isValid())return void this._setValue(c,f.attributes[d.name]);if(b="undefined"==typeof b?null:b,"esriFieldTypeDate"===d.type){if(c instanceof Array){var h=c[0].getValue(),c=c[1].getValue();b=h&&c?new Date(h.getFullYear(),
h.getMonth(),h.getDate(),c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds()):h||c||null}else b=c.getValue();b=b&&b.getTime?b.getTime():b&&b.toGregorian?b.toGregorian().getTime():b}if(this._currentFeature.attributes[d.name]!==b){if(g===l.typeIdField){var k=this._findFirst(l.types,"id",b);e.forEach(l.fieldInfos,function(a){if(d=a.field,d&&d.name!==l.typeIdField)a=a.dijit,this._setFieldDomain(a,k,d)&&a&&(this._setValue(a,f.attributes[d.name]+""),!1===a.isValid()&&this._setValue(a,null))},
this)}this.onAttributeChange(f,g,b)}},onDeleteBtn:function(){this._deleteFeature()},onNextFeature:function(){this._onNextFeature(1)},onPreviousFeature:function(){this._onNextFeature(-1)},onFirstFeature:function(){this._onNextFeature(-1*this._featureIdx)},onLastFeature:function(){this._onNextFeature(this._numFeatures-1-this._featureIdx)},_initLayerInfos:function(){var a=this._layerInfos;this._editorTrackingInfos={};e.forEach(a,this._initLayerInfo,this)},_initLayerInfo:function(a){var b,d,c=a.featureLayer;
this._userIds={};d=c.id;c.credential&&(this._userIds[d]=c.credential.userId);a.userId&&(this._userIds[d]=a.userId);this._connect(c,"onSelectionComplete",h.hitch(this,"onLayerSelectionChange",a));this._connect(c,"onSelectionClear",h.hitch(this,"onLayerSelectionClear",a));this._connect(c,"onEditsComplete",h.hitch(this,"onLayerEditsComplete",a));this._connect(c,"error",h.hitch(this,"onLayerError",a));this._connect(c,"onUpdateEnd",h.hitch(this,"onLayerUpdateEnd",a));a.showAttachments=c.hasAttachments?
n.isDefined(a.showAttachments)?a.showAttachments:!0:!1;a.hideFields=a.hideFields||[];a.htmlFields=a.htmlFields||[];a.isEditable=c.isEditable()?n.isDefined(a.isEditable)?a.isEditable:!0:!1;a.typeIdField=c.typeIdField;a.layerId=c.id;a.types=c.types;c.globalIdField&&(b=this._findFirst(a.fieldInfos,"fieldName",c.globalIdField),b||a.showGlobalID||a.hideFields.push(c.globalIdField));(d=this._findFirst(a.fieldInfos,"fieldName",c.objectIdField))||a.showObjectID||a.hideFields.push(c.objectIdField);var f=this._getFields(a.featureLayer);
if(f){var l=a.fieldInfos||[],l=e.map(l,function(a){return h.mixin({},a)});l.length?a.fieldInfos=e.filter(e.map(l,h.hitch(this,function(b){var c=b.stringFieldOption||(this._isInFields(b.fieldName,a.htmlFields)?m.STRING_FIELD_OPTION_RICHTEXT:m.STRING_FIELD_OPTION_TEXTBOX);return h.mixin(b,{field:this._findFirst(f,"name",b.fieldName),stringFieldOption:c})})),"return item.field;"):(f=e.filter(f,h.hitch(this,function(b){return!this._isInFields(b.name,a.hideFields)})),a.fieldInfos=e.map(f,h.hitch(this,
function(b){var c=this._isInFields(b.name,a.htmlFields)?m.STRING_FIELD_OPTION_RICHTEXT:m.STRING_FIELD_OPTION_TEXTBOX;return{fieldName:b.name,field:b,stringFieldOption:c}})));a.showGlobalID&&!b&&l.push(this._findFirst(f,"name",c.globalIdField));a.showObjectID&&!d&&l.push(this._findFirst(f,"name",c.objectIdField));b=[];c.editFieldsInfo&&(c.editFieldsInfo.creatorField&&b.push(c.editFieldsInfo.creatorField),c.editFieldsInfo.creationDateField&&b.push(c.editFieldsInfo.creationDateField),c.editFieldsInfo.editorField&&
b.push(c.editFieldsInfo.editorField),c.editFieldsInfo.editDateField&&b.push(c.editFieldsInfo.editDateField));this._editorTrackingInfos[c.id]=b}},_createAttachmentEditor:function(){this._attachmentEditor=null;var a=e.filter(this._layerInfos,function(a){return a.showAttachments});a&&a.length&&(this._attachmentEditor=new I({"class":"atiAttachmentEditor"},this.attachmentEditor),this._attachmentEditor.startup())},_setCurrentLInfo:function(a){var b=this._currentLInfo?this._currentLInfo.featureLayer:null,
d=a.featureLayer;if(b&&b.id===d.id&&!b.ownershipBasedAccessControlForFeatures&&(b=d.getEditCapabilities(),!b.canCreate||b.canUpdate))return;this._currentLInfo=a;this._createTable()},_updateSelection:function(a,b){this._selection=a||[];e.forEach(this._layerInfos,this._getSelection,this);var d=this._selection.length;this._numFeatures=this._selection.length;this._showFeature(d?this._selection[this._featureIdx]:null,b)},_getSelection:function(a){a=a.featureLayer.getSelectedFeatures();this._selection=
this._selection.concat(a)},_updateUI:function(){var a=this._numFeatures,b=this._currentLInfo;this.layerName.innerHTML=b&&0!==a?b.featureLayer?b.featureLayer.name:"":this.NLS_noFeaturesSelected;p.set(this.attributeTable,"display",a?"":"none");p.set(this.editButtons,"display",a?"":"none");p.set(this.navButtons,"display",!this._hideNavButtons&&1<a?"":"none");this.navMessage.innerHTML=n.substitute({idx:this._featureIdx+1,of:this.NLS_of,numFeatures:this._numFeatures},this._navMessage);this._attachmentEditor&&
p.set(this._attachmentEditor.domNode,"display",b&&b.showAttachments&&a?"":"none");p.set(this.deleteBtn.domNode,"display",b&&!1===b.showDeleteButton||!this._canDelete?"none":"");this.domNode.parentNode&&0<this.domNode.parentNode.scrollTop&&(this.domNode.parentNode.scrollTop=0)},_onNextFeature:function(a){this._featureIdx+=a;0>this._featureIdx?this._featureIdx=this._numFeatures-1:this._featureIdx>=this._numFeatures&&(this._featureIdx=0);a=this._selection.length?this._selection[this._featureIdx]:null;
this._showFeature(a);this._updateUI();this.onNext(a)},_deleteFeature:function(){this.onDelete(this._currentFeature)},_showFeature:function(a,b){if(a){this._currentFeature=a;var d=b?b:a.getLayer(),c=d.getEditCapabilities({feature:a,userId:this._userIds[d.id]});this._canUpdate=c.canUpdate;this._canDelete=c.canDelete;if(c=this._getLInfoFromFeatureLayer(d)){this._setCurrentLInfo(c);var f=a.attributes,l=this._findFirst(c.types,"id",f[c.typeIdField]),g=null;e.forEach(c.fieldInfos,function(a){g=a.field;
var b=[];a.dijit&&1<a.dijit.length?e.forEach(a.dijit,function(a){b.push(a)}):b.push(a.dijit);e.forEach(b,h.hitch(this,function(a){if(a){var b=this._setFieldDomain(a,l,g),c=f[g.name],c=c&&b&&b.codedValues&&b.codedValues.length&&b.codedValues[c]?b.codedValues[c].name:c;n.isDefined(c)||(c="");"dijit.form.DateTextBox"===a.declaredClass||"dijit.form.TimeTextBox"===a.declaredClass?c=""===c?null:new Date(c):"dijit.form.FilteringSelect"===a.declaredClass&&(a._lastValueReported=null,c=f[g.name]+"");try{this._setValue(a,
c),"dijit.form.FilteringSelect"===a.declaredClass&&!1===a.isValid()&&this._setValue(a,null)}catch(d){a.set("displayedValue",this.NLS_errorInvalid,!1)}}}))},this);this._attachmentEditor&&c.showAttachments&&this._attachmentEditor.showAttachments(this._currentFeature,d);(d=d.getEditSummary(a))?(this.editorTrackingInfoDiv.innerHTML=d,r.show(this.editorTrackingInfoDiv)):r.hide(this.editorTrackingInfoDiv)}}},_setFieldDomain:function(a,b,d){if(!a)return null;var c=d.domain;return b&&b.domains&&b.domains[d.name]&&
0==b.domains[d.name]instanceof t&&(c=b.domains[d.name]),c?(c.codedValues&&0<c.codedValues.length?(a.set("store",this._toStore(e.map(c.codedValues,function(a){return{id:a.code+="",name:a.name}}))),this._setValue(a,c.codedValues[0].code)):(a.constraints={min:n.isDefined(c.minValue)?c.minValue:Number.MIN_VALUE,max:n.isDefined(c.maxValue)?c.maxValue:Number.MAX_VALUE},this._setValue(a,a.constraints.min)),c):null},_setValue:function(a,b){a.set&&(a._onChangeActive=!1,a.set("value",b,!0),a._onChangeActive=
!0)},_getFields:function(a){var b=a._getOutFields();if(!b)return null;a=a.fields;return"*"==b?a:e.filter(e.map(b,h.hitch(this,"_findFirst",a,"name")),n.isDefined)},_isInFields:function(a,b){return a&&(b||b.length)?e.some(b,function(b){return b.toLowerCase()===a.toLowerCase()}):!1},_findFirst:function(a,b,d){return(a=e.filter(a,function(a){return a.hasOwnProperty(b)&&a[b]===d}))&&a.length?a[0]:null},_getLInfoFromFeatureLayer:function(a){return this._findFirst(this._layerInfos,"layerId",a?a.id:null)},
_createTable:function(){this._destroyAttributeTable();this.attributeTable.innerHTML="";this._attributes=k.create("table",{cellspacing:"0",cellpadding:"0"},this.attributeTable);var a=k.create("tbody",null,this._attributes),b=this._currentLInfo,d=this._findFirst(b.types,"id",this._currentFeature.attributes[b.typeIdField]);e.forEach(b.fieldInfos,h.hitch(this,"_createField",d,a),this);this._createOnlyFirstTime=!1},_createField:function(a,b,d){var c=this._currentLInfo,f=d.field;if(!this._isInFields(f.name,
c.hideFields)&&!this._isInFields(f.name,this._editorTrackingInfos[c.featureLayer.id])){var e=k.create("tr",null,b);b=k.create("td",{innerHTML:d.label||f.alias||f.name,"class":"atiLabel"},e);b=k.create("td",null,e);var g,e=null,m=!1;if(d.customField?(k.place(d.customField.domNode||d.customField,k.create("div",null,b),"first"),g=d.customField):(!1===c.isEditable||!1===f.editable||!1===d.isEditable||"esriFieldTypeOID"===f.type||"esriFieldTypeGlobalID"===f.type||!this._canUpdate&&!this._createOnlyFirstTime)&&
(m=!0),!g&&c.typeIdField&&f.name.toLowerCase()==c.typeIdField.toLowerCase()?g=this._createTypeField(f,d,b):g||(g=this._createDomainField(f,d,a,b)),!g)switch(f.type){case "esriFieldTypeString":g=this._createStringField(f,d,b);break;case "esriFieldTypeDate":g=this._createDateField(f,d,b);d.format&&d.format.time&&(e=this._createTimeField(f,d,b));break;case "esriFieldTypeInteger":case "esriFieldTypeSmallInteger":g=this._createIntField(f,d,b);break;case "esriFieldTypeSingle":case "esriFieldTypeDouble":g=
this._createFltField(f,d,b);break;default:g=this._createStringField(f,d,b)}d.tooltip&&d.tooltip.length&&this._toolTips.push(new O({connectId:[g.id],label:d.tooltip}));g.onChange=h.hitch(this,"onFieldValueChange",d);g.set("disabled",m);e?(d.dijit=[g,e],e.onChange=h.hitch(this,"onFieldValueChange",d),e.set("disabled",m)):d.dijit=g}},_createTypeField:function(a,b,d){return(b=a.domain)&&"range"===b.type&&b.minValue===b.maxValue?new v({"class":"atiField"},k.create("div",null,d)):new w({"class":"atiField",
name:a.alias||a.name,required:!a.nullable||!1,store:this._toStore(e.map(this._currentLInfo.types,function(a){return{id:a.id,name:a.name}})),searchAttr:"name"},k.create("div",null,d))},_createDomainField:function(a,b,d,c){b=a.domain;return d&&d.domains&&d.domains[a.name]&&0==d.domains[a.name]instanceof t&&(b=d.domains[a.name]),b?b.codedValues?new w({"class":"atiField",name:a.alias||a.name,searchAttr:"name",required:!a.nullable||!1},k.create("div",null,c)):new L({"class":"atiField"},k.create("div",
null,c)):null},_createStringField:function(a,b,d){var c={"class":"atiField",trim:!0,maxLength:a.length};return b.stringFieldOption===m.STRING_FIELD_OPTION_TEXTAREA?(c["class"]+=" atiTextAreaField",new M(c,k.create("div",null,d))):b.stringFieldOption===m.STRING_FIELD_OPTION_RICHTEXT?(c["class"]+=" atiRichTextField",c.height="100%",c.width="100%",c.plugins=b.richTextPlugins||"bold italic underline foreColor hiliteColor | justifyLeft justifyCenter justifyRight justifyFull | insertOrderedList insertUnorderedList indent outdent | createLink".split(" "),
a=new G(c,k.create("div",null,d)),a.startup(),a):a.nullable&&b.field&&b.field.nullable?new v(c,k.create("div",null,d)):new x({required:!0},k.create("div",null,d))},_createTimeField:function(a,b,d){a={"class":"atiField",trim:!0,constraints:{formatLength:"medium"}};return this._datePackage&&(a.datePackage=this._datePackage),new N(a,k.create("div",null,d))},_createDateField:function(a,b,d){a={"class":"atiField",trim:!0};return this._datePackage&&(a.datePackage=this._datePackage),new J(a,k.create("div",
null,d))},_createIntField:function(a,b,d){return new K({"class":"atiField",constraints:"esriFieldTypeSmallInteger"===a.type?{min:-32768,max:32767,places:0}:{places:0},invalidMessage:this.NLS_validationInt,trim:!0},k.create("div",null,d))},_createFltField:function(a,b,d){var c=/\de[-+]?\d/i,e=/[0-9]\d{0,2}(\.\d{3})*(,\d+)?$/i;return new x({validator:function(a,b){return this._maskValidSubsetError=!1,this._hasBeenBlurred=!0,""===a||null===a?!0:c.test(a)?!0:e.test(a)&&("min"in b?0<=this.compare(a,b.min):
1)&&("max"in b?0>=this.compare(a,b.max):1)?!0:!1},"class":"atiField",trim:!0,constraints:{places:"0,40",min:-1/0,max:1/0,exponent:!0},invalidMessage:this.NLS_validationFlt},k.create("div",null,d))},_toStore:function(a){return new P({data:{identifier:"id",label:"name",items:a}})},_connect:function(a,b,d){this._aiConnects.push(q.connect(a,b,d))},_getDatePackage:function(a){return null===a.datePackage?null:a.datePackage?a.datePackage:"ar"===z.locale?"dojox.date.islamic":null},_destroyAttributeTable:function(){e.forEach(this._layerInfos,
function(a){e.forEach(a.fieldInfos,function(a){var d=a.dijit;if(d){if(d._onChangeHandle=null,a.customField)return;d instanceof Array?e.forEach(d,h.hitch(this,function(a){a.destroyRecursive?a.destroyRecursive():a.destroy&&a.destroy();a._onChangeHandle=null})):d.destroyRecursive?d.destroyRecursive():d.destroy&&d.destroy()}a.dijit=null},this)},this);e.forEach(this._toolTips,function(a){a.destroy()});this._toolTips=[];this._attributes&&k.destroy(this._attributes)}});return h.mixin(m,{STRING_FIELD_OPTION_RICHTEXT:"richtext",
STRING_FIELD_OPTION_TEXTAREA:"textarea",STRING_FIELD_OPTION_TEXTBOX:"textbox"}),A("extend-esri")&&h.setObject("dijit.AttributeInspector",m,B),m});