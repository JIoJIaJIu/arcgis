//>>built
require({cache:{"url:esri/dijit/analysis/templates/ExpressionGrid.html":'\x3cdiv class\x3d"esriAnalysisExpressionGrid"\x3e\n  \x3cdiv data-dojo-type\x3d"dijit.layout.ContentPane" style\x3d"padding:1px;width:100%;height:200px;"  data-dojo-attach-point\x3d"_gridPane"\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_gridDiv" style\x3d"height:90%"\x3e\x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_textDiv" style\x3d"border:1px #EFEEEF solid;display:none;height:90%"\x3e\x3c/div\x3e\n  \x3c/div\x3e\n  \x3cdiv style\x3d"clear:both;"\x3e\x3c/div\x3e\n  \x3cdiv data-dojo-type\x3d"dijit.layout.ContentPane" style\x3d"padding:1px;width:100%;"\x3e\n    \x3ctable style\x3d"width:100%;"\x3e\n      \x3ctbody\x3e\n        \x3ctr\x3e\n          \x3ctd style\x3d"width:20%;"\x3e\n            \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriTertiaryActionBtn calcite green tiny" data-dojo-attach-point\x3d"_addBtn" data-dojo-attach-event\x3d"onClick:_handleAddButtonClick" class\x3d""\x3e\n              ${i18n.addExpr}\n            \x3c/div\x3e\n          \x3c/td\x3e\n          \x3ctd class\x3d"esriFloatTrailing"\x3e\n            \x3cdiv class\x3d"esriLeadingMargin025"\x3e\n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.edit}\',iconClass:\'esriAnalysisEditIcon\',showLabel: false, disabled:true" data-dojo-attach-point\x3d"_editBtn" data-dojo-attach-event\x3d"onClick:_handleEditButtonClick"\x3e\x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.remove}\',iconClass:\'esriAnalysisRemoveIcon\',showLabel: false, disabled:true" data-dojo-attach-point\x3d"_removeBtn" data-dojo-attach-event\x3d"onClick:_handleRemoveButtonClick"\x3e\x3c/div\x3e     \n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.groupLabel}\',iconClass:\'esriAnalysisGroupIcon\',showLabel: false, disabled:true" data-dojo-attach-point\x3d"_groupBtn" data-dojo-attach-event\x3d"onClick:_handleGroupButtonClick"\x3e\x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"dijit/form/Button" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.ungroupLabel}\',iconClass:\'esriAnalysisUngroupIcon\',showLabel: false, disabled:true" data-dojo-attach-point\x3d"_ungroupBtn" data-dojo-attach-event\x3d"onClick:_handleUngroupButtonClick"\x3e\x3c/div\x3e\n              \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" class\x3d"esriActionButton" data-dojo-props\x3d"label:\'${i18n.viewText}\',iconClass:\'esriAnalysisTextIcon\',showLabel: false, checked: false, disabled:true" data-dojo-attach-point\x3d"_viewBtn" data-dojo-attach-event\x3d"onChange:_handleViewButtonClick"\x3e\x3c/div\x3e           \n            \x3c/div\x3e\n          \x3c/td\x3e\n        \x3c/tr\x3e\n      \x3c/tbody\x3e\n      \x3c/table\x3e\n  \x3c/div\x3e\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.expression}" data-dojo-props\x3d"closable:false" data-dojo-attach-point\x3d"_expDialog" style\x3d"width:65em;"\x3e\n    \x3c!--\x3cdiv data-dojo-attach-point\x3d"_testdiv"\x3etesting\x3c/div\x3e--\x3e\n    \x3cdiv data-dojo-attach-point\x3d"_expressionForm" data-dojo-type\x3d"esri/dijit/analysis/ExpressionForm" data-dojo-props\x3d"primaryActionButttonClass:\'${primaryActionButttonClass}\'"\x3e\x3c/div\x3e\n  \x3c/div\x3e   \n\x3c/div\x3e'}});
define("esri/dijit/analysis/ExpressionGrid","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/json dojo/has dojo/json dojo/string dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/query dojo/dom-class dojo/store/Memory dojo/store/Observable dojo/Evented dojo/_base/event dojo/window dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/ToggleButton dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/Dialog dijit/InlineEditBox dgrid/OnDemandGrid dgrid/Keyboard dgrid/Selection dgrid/selector dgrid/extensions/DijitRegistry dgrid/util/mouse ./tree put-selector/put ../../kernel ../../lang ./ExpressionForm dojo/i18n!../../nls/jsapi dojo/text!./templates/ExpressionGrid.html".split(" "),
function(P,u,h,g,Q,R,y,v,S,k,q,l,T,U,z,A,B,r,C,D,E,F,G,H,V,W,X,Y,Z,aa,ba,ca,da,ea,fa,I,J,K,ga,L,ha,w,M,N,m,ia,p,O){var x,t;return x=u([w,I,K,J,L]),t=u([D,E,F,G,H,B],{declaredClass:"esri.dijit.analysis.ExpressionGrid",templateString:O,widgetsInTemplate:!0,indentWidth:10,refreshOptions:{keepScrollPosition:!0},allowAllInputOperands:!1,_selectedIds:[],constructor:function(a){a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments)},postMixInProperties:function(){this.inherited(arguments);
this.i18n={};h.mixin(this.i18n,p.common);h.mixin(this.i18n,p.analysisTools);h.mixin(this.i18n,p.analysisMsgCodes);h.mixin(this.i18n,p.expressionGrid)},postCreate:function(){this.inherited(arguments);var a;this.expressionStore=A(new z({idProperty:"id",allExpressionText:"",data:[{id:0,operator:"",expressionText:""}],getChildren:function(a){return this.query({parent:a.id})},getAllChildren:function(a){var b,d;return b=this.getChildren(a),0<b.total&&g.forEach(b,function(a){d=this.getAllChildren(a);0<d.total&&
g.forEach(d,function(a){b[b.total]=a;b.total+=1},this)},this),b},getExpressions:function(a,b){var d,e,f,n,h;return d=this.getChildren(a),0<d.total?(f=[],n={},n.operator=a.operator,n.layer=a.layer,a.where?n.where=a.where:(n.selectingLayer=a.selectingLayer,n.spatialRel=a.spatialRel,a.distance&&(n.distance=a.distance,n.units=a.units)),-1===this.allExpressionText.indexOf(a.text)&&(this.allExpressionText+=a.operator+" ( "+a.text+" "),f.push(n),g.forEach(d,function(a,b){e=this.getExpressions(a,b===d.total-
1?!0:!1);h=this.getChildren(a);0<h.total&&(a._isAdd||(this.allExpressionText+=")"),a._isAdd=!0);f.push(e)},this)):(f={},f.operator=a.operator,f.layer=a.layer,a.where?f.where=a.where:(f.selectingLayer=a.selectingLayer,f.spatialRel=a.spatialRel,a.distance&&(f.distance=a.distance,f.units=a.units)),-1===this.allExpressionText.indexOf(a.text)&&(this.allExpressionText+=a.operator+" "+a.text+" ",b&&!0===b&&(this.allExpressionText+=")"))),f},getLabel:function(a){return a.text},mayHaveChildren:function(a){return 1!==
a.id}}));a={operator:w({label:"",renderCell:h.hitch(this,this._renderExpOperatorCell),shouldExpand:function(){return!0},sortable:!1,indentWidth:10,renderExpando:function(a){var b;return b=M("div.dgrid-expando-icon[style\x3dwidth:0;height:0;]"),b.innerHTML=" ",b}})};this.expressiongrid=new x({store:this.expressionStore,query:{expressionText:""},selectionMode:"extended",columns:a,showHeader:!1,allowSelectAll:!0,allowSelect:function(a){return a&&a.data&&0===a.data.id?!1:!0}},this._gridDiv);this.expressiongrid.on("dgrid-select",
h.hitch(this,this._handleExpressiongridSelect));this.expressiongrid.startup();this.expressiongrid.keepScrollPosition=!0;this.allowAllInputOperands?this._expressionForm.set("firstOperands",this.inputLayers):this._expressionForm.set("firstOperands",[this.analysisLayer]);this._expressionForm.set("selectedFirstOperand",this.analysisLayer);this._expressionForm.set("inputOperands",this.inputLayers);this._expressionForm.set("showReadyToUseLayers",this.get("showReadyToUseLayers"));this._expressionForm.set("showReadyLayersForFirst",
this.allowAllInputOperands);this._expressionForm.set("owningWidget",this.get("owningWidget"));this._expressionForm.init();this._expressionForm.on("add-expression",h.hitch(this,this._handleExpressionFormAdd));this._expressionForm.on("cancel-expression",h.hitch(this,this._handleExpressionFormCancel))},_handleExpressiongridSelect:function(a){var c,b,d,e,f;if(this._selectedObj=a.grid.selection,this._selectedObj&&this._selectedIds&&0<this._selectedIds.length){f=!0;a=this._selectedIds.toString();for(b in this._selectedObj)this._selectedObj.hasOwnProperty(b)&&
(b=parseInt(b,10),f=-1!==a.indexOf(b));if(f)return}this._selectedIds=[];this._selectedRows=[];for(b in this._selectedObj)this._selectedObj.hasOwnProperty(b)&&(b=parseInt(b,10),!0===this._selectedObj[b]&&0!==b&&(this._selectedIds.push(b),this._selectedRows.push(this.expressiongrid.cell(b).row),c=this.expressiongrid.cell(b).row.data,d=this.expressionStore.getAllChildren(c),0<d.total&&g.forEach(d,function(a){this._selectedIds.push(a.id);this._selectedRows.push(this.expressiongrid.cell(a.id).row);this.expressiongrid.select(a.id)},
this)),!0===this._selectedObj[b]&&0===b&&(this._groupBtn.set("disabled",!0),this._ungroupBtn.set("disabled",!0),this._removeBtn.set("disabled",!0),this._editBtn.set("disabled",!0),this._addBtn.set("disabled",!1),this._viewBtn.set("disabled",!0)));0<this._selectedIds.length&&(e=1===this._selectedIds.length,this._groupBtn.set("disabled",e||3>=this.expressionStore.data.length),this._ungroupBtn.set("disabled",e||3>=this.expressionStore.data.length),this._removeBtn.set("disabled",!1),this._editBtn.set("disabled",
!e),this._addBtn.set("disabled",!e),this._viewBtn.set("disabled",!1))},_renderExpOperatorCell:function(a,c,b,d){if(a.expressionText){if(a.expressionText){var e,f,g,m;m=0;f=this._gridPane.isRTL?"marginRight":"marginLeft";e=l.create("table",{"class":"esriExpressionTable"},b);1<d.level?(g=d.level*d.level*this.indentWidth+8+"px",k.set(e,f,g)):k.set(e,f,"5px");e=l.create("tr",{},e);f=this.expressionStore.getAllChildren(a);0<d.level&&0<f.total&&(m=1===d.level?2*this.indentWidth*d.level+24:this.indentWidth*
d.level*2+this.indentWidth);d=l.create("td",{"class":"expressionTd"},e);k.set(d,"width","32px");f=l.create("td",{"class":"expressionTd"},e);k.set(f,"width",m+"px");f=l.create("div",{},f);k.set(f,"width",m+"px");c?l.create("div",{innerHTML:this.i18n[c],name:a.operator,id:a.id,"class":"esriAnalysisOperatorButton",onclick:h.hitch(this,function(a){r.stop(a);var b,c=a.target;a=this.expressionStore.get(c.id);this.expressiongrid.clearSelection();this._selectedRows=[];this._selectedIds=[];b=q.get(c,"name");
c.innerHTML="and"===b?this.i18n.or:this.i18n.and;q.set(c,"name","and"===b?"or":"and");a.operator="and"===b?"or":"and";this.expressionStore.put(a);this.expressiongrid.refresh(this.refreshOptions)})},d,"first"):l.create("div",{style:"width:32px;"},d);c=l.create("td",{"class":"esriAnalysisExpression expressionTd"},e);l.create("label",{"class":"",title:this.expressionStore.getLabel(a),innerHTML:a.expressionText},c)}}else 1===this.expressionStore.data.length?l.create("label",{innerHTML:this.i18n.addExprDescription,
style:{fontStyle:"italic",textAlign:"center",display:"inline-block",width:"105%",fontWeight:"lighter"}},b):k.set(b,"display","none");return b},_clear:function(){this._selectedIds=[];this.expressiongrid.clearSelection();this.expressiongrid.refresh(this.refreshOptions);this._groupBtn.set("disabled",!0);this._ungroupBtn.set("disabled",!0);this._removeBtn.set("disabled",!0);this._editBtn.set("disabled",!0);this._addBtn.set("disabled",!1);this._viewBtn.set("disabled",1===this.expressionStore.data.length?
!0:!1);1===this.expressionStore.data.length&&(this.allowAllInputOperands?this._expressionForm.set("firstOperands",this.inputLayers):this._expressionForm.set("firstOperands",[this.analysisLayer]),this._expressionForm.set("selectedFirstOperand",this.analysisLayer),this._expressionForm.set("inputOperands",this.inputLayers))},_handleAddButtonClick:function(){this._expDialog.set("title",this.i18n.addExpr);this._expressionForm.set("action","add");this._expressionForm.clear();this._expDialog.show()},_handleEditButtonClick:function(a){if(r.stop(a),
this._expDialog.set("title",this.i18n.editExpr),this._selectedIds&&0===this._selectedIds.length)return!1;a=this.expressionStore.get(this._selectedIds[0]);this._expressionForm.set("action","edit");this._expressionForm.clear();this._expressionForm.set("expression",a);this._expDialog.show()},_handleRemoveButtonClick:function(a){return r.stop(a),this._selectedIds&&0===this._selectedIds.length?!1:(g.forEach(this._selectedIds,function(a){this.expressionStore.remove(a)},this),this._clear(),void this.emit("update-expressions",
this.expressionStore.query()))},_handleGroupButtonClick:function(){var a,c,b;return this._selectedIds&&0===this._selectedIds.length?!1:(a=g.map(this._selectedIds,function(a){return parseInt(a,10)}),c=this._arrayMin(a),g.forEach(this._selectedRows,function(a,e){b=this.expressiongrid.cell(this._selectedRows[e].id);1<this._selectedRows[e].id&&this._selectedRows[e].id!==c&&(0===b.row.data.parent&&this.expressionStore.mayHaveChildren(this.expressionStore.get(c))&&(b.row.data.parent=c),this.expressionStore.put(b.row.data));
this.expressiongrid.refresh(this.refreshOptions)},this),void this._clear())},_handleUngroupButtonClick:function(){var a,c,b;return this._selectedIds&&0===this._selectedIds.length?!1:(a=g.map(this._selectedIds,function(a){return parseInt(a,10)}),c=this._arrayMin(a),g.forEach(this._selectedRows,function(a,e){b=this.expressiongrid.cell(this._selectedRows[e].id);1<this._selectedRows[e].id&&this._selectedRows[e].id!==c&&(b.row.data.parent===c&&(b.row.data.parent=0),this.expressionStore.put(b.row.data));
this.expressiongrid.refresh(this.refreshOptions)},this),void this._clear())},_handleExpressionFormAdd:function(a){var c,b={};"add"===a.action?(b={id:this.expressionStore.data.length,operator:1===this.expressionStore.data.length?"":"and"},0===this._selectedIds.length?b.parent=0:1===this._selectedIds.length&&(c=parseInt(this._selectedIds[0],10),b.parent=this.expressionStore.mayHaveChildren(this.expressionStore.get(c))?c:0)):(b=this.expressionStore.get(parseInt(this._selectedIds[0],10)),b.where&&a.expression.spatialRel&&
delete b.where,b.spatialRel&&a.expression.where&&(delete b.spatialRel,delete b.selectingLayer,b.distance&&(delete b.distance,delete b.units)));h.mixin(b,a.expression);b.expressionText=a.displayText;b.text=a.text;this.expressionStore.put(b);this.expressiongrid.refresh(this.refreshOptions);this._expDialog.hide();this.allowAllInputOperands||this._updateFirstOperands(a.expression);this._clear();this.validate();this.emit("update-expressions",this.expressionStore.query())},_handleExpressionFormCancel:function(){this._expDialog.hide();
this._clear()},_handleViewButtonClick:function(a){this._viewBtn.set("label",a?this.i18n.viewGrid:this.i18n.viewText);this._viewBtn.set("iconClass",a?"esriAnalysisGridIcon":"esriAnalysisTextIcon");a&&(this._groupBtn.set("disabled",a),this._ungroupBtn.set("disabled",a),this._removeBtn.set("disabled",a),this._editBtn.set("disabled",a),this._addBtn.set("disabled",a));this.get("expressions");k.set(this._textDiv,"display",a?"":"none");k.set(this._gridDiv,"display",a?"none":"");q.set(this._textDiv,"innerHTML",
a?this.expressionStore.allExpressionText:"");a||this._clear()},_updateFirstOperands:function(){var a;a=this.get("selectedLayers");this._expressionForm.set("firstOperands",a)},_getInputLayerById:function(a){g.forEach(this.inputLayers,function(c){return c.id===a?c:void 0},this)},_arrayMin:function(a){return Math.min.apply(Math,a)},_setInputLayersAttr:function(a){this.inputLayers=a},_getInputLayersAttr:function(){return this.inputLayers},_setAnalysisLayerAttr:function(a){this.analysisLayer=a},_getAnalysisLayerAttr:function(){return this.analysisLayer},
_setSelectedLayersAttr:function(a){this.selectedLayers=a},_getSelectedLayersAttr:function(){var a=[],c=[];return g.forEach(this.expressionStore.data,function(b){m.isDefined(b.layer)&&-1===g.indexOf(a,b.layer)&&(a.push(b.layer),c.push(this.inputLayers[b.layer]));m.isDefined(b.selectingLayer)&&-1===g.indexOf(a,b.selectingLayer)&&(a.push(b.selectingLayer),c.push(this.inputLayers[b.selectingLayer]))},this),this.selectedLayers=c,this.set("selectedLayerIds",a),this.selectedLayers},_setSelectedLayerIdsAttr:function(a){this.selectedLayerIds=
a},_getSelectedLayerIdsAttr:function(){return this.selectedLayerIds},_getSelectedLayersMapAttr:function(){var a={};return a.inputLayers=this.get("inputLayers"),a.selectedLayers=this.get("selectedLayers"),a.selectedLayerIds=this.get("selectedLayerIds"),a},_getExpressionsAttr:function(){var a,c,b=[];return this.expressionStore.allExpressionText="",g.forEach(this.expressionStore.data,function(a){a._isAdd=!1}),g.forEach(this.expressionStore.data,function(d,e){0!==e&&(c={},c.operator=d.operator,c.layer=
d.layer,d.where?c.where=d.where:(c.selectingLayer=d.selectingLayer,c.spatialRel=d.spatialRel,d.distance&&(c.distance=d.distance,c.units=d.units)),this._findElementInMultiArray(b,c)||(a=this.expressionStore.getExpressions(d),b.push(a)))},this),b},_getExpressionMapAttr:function(){var a,c;return a=this.get("selectedLayersMap"),c=this.get("expressions"),console.log(this.expressionStore.allExpressionText),c=this._updateExpressions(c,a),{expressions:c,inputLayers:a.selectedLayers,expressionString:this.expressionStore.allExpressionText}},
_setShowReadyToUseLayersAttr:function(a){this._set("showReadyToUseLayers",a)},_setOwningWidgetAttr:function(a){this._set("owningWidget",a)},_updateExpressions:function(a,c){return g.forEach(a,function(a){a instanceof Array||a.length?this._updateExpressions(a,c):(m.isDefined(a.layer)&&-1!==g.indexOf(c.selectedLayerIds,a.layer)&&(a.layer=g.indexOf(c.selectedLayerIds,a.layer)),m.isDefined(a.selectingLayer)&&-1!==g.indexOf(c.selectedLayerIds,a.selectingLayer)&&(a.selectingLayer=g.indexOf(c.selectedLayerIds,
a.selectingLayer)))},this),a},_findElementInMultiArray:function(a,c){var b=!1;return g.forEach(a,function(a){return v.stringify(c)===v.stringify(a)?b=!0:void((a instanceof Array||a.length)&&(b=this._findElementInMultiArray(a,c)))},this),b},_setPrimaryActionButttonClassAttr:function(a){this.primaryActionButttonClass=a},_getCssClassesAttr:function(){return this.primaryActionButttonClass},validate:function(){var a;return a=1!==this.expressionStore.data.length,a?k.set(this.expressiongrid.domNode,"borderColor",
"#bba"):(C.scrollIntoView(this.expressiongrid.domNode),this.expressiongrid.focus(),k.set(this.expressiongrid.domNode,"borderColor","#f94")),a}}),y("extend-esri")&&h.setObject("dijit.analysis.ExpressionGrid",t,N),t});