//>>built
require({cache:{"url:esri/dijit/analysis/templates/DeriveNewLocations.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\n      \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\n        \x3ctable class\x3d"esriFormTable" \x3e \n          \x3ctr\x3e\n            \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"findNewLocationsIcon"\x3e\x3c/div\x3e\x3c/td\x3e\n            \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e${i18n.deriveNewLocations}\x3c/td\x3e\n            \x3ctd\x3e\n              \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\n                  \x3cdiv class\x3d"esriFloatLeading"\x3e\n                    \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\n                  \x3c/div\x3e\n                  \x3cdiv class\x3d"esriFloatTrailing"\x3e\n                    \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\n                  \x3c/div\x3e              \n              \x3c/div\x3e                \n            \x3c/td\x3e\n          \x3c/tr\x3e\n        \x3c/table\x3e\n      \x3c/div\x3e\n      \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\n       \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \n         \x3ctbody\x3e\n          \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\n            \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"analysisLayer"\x3e\x3c/a\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e           \n          \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\n            \x3ctd  colspan\x3d"3" style\x3d"padding-top:0;"\x3e\n              \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel"  style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"2"\x3e\n              \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\n              \x3clabel data-dojo-attach-point\x3d"_findExpLabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.findExpLabel}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"Expression"\x3e\x3c/a\x3e\n            \x3c/td\x3e\n          \x3c/tr\x3e           \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3" style\x3d"padding:1px" data-dojo-attach-point\x3d"_expressionGridTd"\x3e\n            \x3c/td\x3e    \n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\n          \x3c/tr\x3e\n           \n          \x3ctr\x3e\n            \x3ctd colspan\x3d"2"\x3e\n              \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\n              \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\n            \x3c/td\x3e\n            \x3ctd class\x3d"shortTextInput"\x3e\n              \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"OutputName"\x3e\x3c/a\x3e \n            \x3c/td\x3e             \n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n              \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"esriLeadingMargin1 longInput" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\n            \x3c/td\x3e                \n          \x3c/tr\x3e\n          \x3ctr\x3e\n            \x3ctd colspan\x3d"3"\x3e\n               \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\n                 \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\n                 \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" dojotype\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\x3c/input\x3e\n               \x3c/div\x3e              \n            \x3c/td\x3e\n          \x3c/tr\x3e\n        \x3c/tbody\x3e         \n       \x3c/table\x3e\n     \x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\n      \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\n        \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\n       \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\n         \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true"/\x3e\n           ${i18n.useMapExtent}\n       \x3c/label\x3e\n      \x3c/div\x3e\n      \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" style\x3d"margin-top:10px;" class\x3d"esriLeadingMargin2 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\n          ${i18n.runAnalysis}\n      \x3c/button\x3e\n    \x3c/div\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\n      \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\n    \x3c/div\x3e    \n  \x3c/div\x3e\n'}});
define("esri/dijit/analysis/DeriveNewLocations","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect dijit/Dialog ../../kernel ../../lang ./AnalysisBase ./_AnalysisOptions ./utils ./CreditEstimator ./ExpressionGrid dojo/i18n!../../nls/jsapi dojo/text!./templates/DeriveNewLocations.html".split(" "),
function(h,r,b,k,n,d,t,G,p,c,H,u,I,v,w,x,y,z,A,J,K,L,M,N,O,P,Q,R,S,B,T,C,D,e,U,E,q,F){h=r([w,x,y,z,A,D,C],{declaredClass:"esri.dijit.analysis.DeriveNewLocations",templateString:F,widgetsInTemplate:!0,i18n:null,toolName:"DeriveNewLocations",helpFileName:"DeriveNewLocations",resultParameter:"resultLayer",primaryActionButttonClass:"esriAnalysisSubmitButton",analysisLayer:null,inputLayers:[],constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);
k.forEach(this._pbConnects,n.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);b.mixin(this.i18n,q.deriveNewLocations);b.mixin(this.i18n,q.expressionGrid)},postCreate:function(){this.inherited(arguments);v.add(this._form.domNode,"esriSimpleForm");this._outputLayerInput.set("validator",b.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_onClose:function(a){a&&(this._save(),this.emit("save",{save:!0}));this.emit("close",{save:a})},
_handleSaveBtnClick:function(){if(this._form.validate()&&this.expressionGrid.validate()){this._saveBtn.set("disabled",!0);var a,b,c,f={},g={};b=this.expressionGrid.get("expressionMap");f.expressions=d.toJson(b.expressions);c=[];c=k.map(b.inputLayers,function(a){return d.toJson(e.constructAnalysisInputLyrObj(a))},this);f.inputLayers=c;this.returnFeatureCollection||(f.OutputName=d.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}}));this.showChooseExtent&&this._useExtentCheck.get("checked")&&
(f.context=d.toJson({extent:this.map.extent._normalize(!0)}));this.returnFeatureCollection&&(a={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.extent=this.map.extent._normalize(!0)),f.context=d.toJson(a));g.jobParams=f;a=this.i18n.itemDescription;a+="\x3cdiv\x3e\x3ci\x3e\x3cu\x3e"+this.i18n.expression+"\x3c/u\x3e "+b.expressionString+"\x3c/i\x3e\x3c/div\x3e";g.itemParams={description:a,tags:p.substitute(this.i18n.itemTags,{analysisLayerName:this.analysisLayer.name}),
snippet:this.i18n.itemSnippet};this.showSelectFolder&&(g.itemParams.folder=this.get("folderId"));this.execute(g)}},_handleShowCreditsClick:function(a){a.preventDefault();var l,m;a={};return this._form.validate()&&this.expressionGrid.validate()?(c.set(this._showCreditsLink,"color",""),c.set(this._showCreditsLink,"cursor",""),l=this.expressionGrid.get("expressionMap"),a.expressions=d.toJson(l.expressions),m=[],m=k.map(l.inputLayers,function(a){return e.constructAnalysisInputLyrObj(a)},this),a.inputLayers=
d.toJson(m),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.Context=d.toJson({extent:this.map.extent._normalize(!0)})),void this.getCreditsEstimate(this.toolName,a).then(b.hitch(this,function(a){this._usageForm.set("content",a);this._usageDialog.show()}))):(c.set(this._showCreditsLink,"color","grey"),void c.set(this._showCreditsLink,"cursor","default"))},_save:function(){},_buildUI:function(){var a=!0;this.signInPromise.then(b.hitch(this,e.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));
this.get("showSelectAnalysisLayer")&&(!this.get("analysisLayer")&&this.get("analysisLayers")&&this.set("analysisLayer",this.analysisLayers[0]),e.populateAnalysisLayers(this,"analysisLayer","analysisLayers"));e.addReadyToUseLayerOption(this,[this._analysisSelect]);this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),a=!1);this._updateAnalysisLayerUI(a);c.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none");this.showSelectFolder&&this.getFolderStore().then(b.hitch(this,
function(a){this.folderStore=a;e.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));c.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");c.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._loadConnections()},_updateAnalysisLayerUI:function(a){this.analysisLayer&&(a&&(this.outputLayerName=p.substitute(this.i18n.outputLayerName,
{analysisLayerName:this.analysisLayer.name})),this._outputLayerInput.set("value",this.outputLayerName));this.expressionGrid||(this.expressionGrid=new E({analysisLayer:this.analysisLayer,inputLayers:this.inputLayers,allowAllInputOperands:!0,primaryActionButttonClass:this.get("primaryActionButttonClass"),showReadyToUseLayers:this.get("showReadyToUseLayers"),owningWidget:this},u.create("div",{style:"width:100%;"},this._expressionGridTd)),this._updateHandle=this.expressionGrid.on("update-expressions",
b.hitch(this,this._handleUpdateExpressions)))},_handleUpdateExpressions:function(a){1<a.length?(c.set(this._showCreditsLink,"color",""),c.set(this._showCreditsLink,"cursor","")):(c.set(this._showCreditsLink,"color","grey"),c.set(this._showCreditsLink,"cursor","default"))},_handleAnalysisLayerChange:function(a){"browse"===a?this.showReadyToUseLayersDialog(!0):(this.analysisLayer=this.analysisLayers[a],this._updateAnalysisLayerUI(!0))},showReadyToUseLayersDialog:function(a){this.signInPromise.then(b.hitch(this,
function(){this._browsedlg&&(this._analysisquery||(this._analysisquery=this._browsedlg.browseItems.get("query")),this._browsedlg.browseItems.set("query",this._analysisquery),this._isAnalysisSelect=a,this._browsedlg.show())}))},_handleBrowseItemsSelect:function(a){a&&a.selection&&e.addAnalysisReadyLayer({item:a.selection,layers:this.inputLayers,layersSelect:this.layersSelect,browseDialog:this._browsedlg,widget:this}).always(b.hitch(this,function(){this._isAnalysisSelect&&(this.analysisLayer=this.inputLayers[this.layersSelect.get("value")],
this.showSelectAnalysisLayer&&this._updateAnalysisLayerUI(!0))}))},_loadConnections:function(){this.on("start",b.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",b.hitch(this,"_onClose",!1))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",a)},_setInputLayersAttr:function(a){this.inputLayers=a},_getInputLayersAttr:function(){return this.inputLayers},
_setAnalysisLayerAttr:function(a){this.analysisLayer=a},_getAnalysisLayerAttr:function(){return this.analysisLayer},_setAnalysisLayersAttr:function(a){this.analysisLayers=a},validateServiceName:function(a){return e.validateServiceName(a,{textInput:this._outputLayerInput})},_setPrimaryActionButttonClassAttr:function(a){this.primaryActionButttonClass=a},_getPrimaryActionButttonClassAttr:function(){return this.primaryActionButttonClass},_connect:function(a,b,c){this._pbConnects.push(n.connect(a,b,c))}});
return t("extend-esri")&&b.setObject("dijit.analysis.DeriveNewLocations",h,B),h});