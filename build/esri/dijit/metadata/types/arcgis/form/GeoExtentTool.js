//>>built
define("esri/dijit/metadata/types/arcgis/form/GeoExtentTool","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/query dijit/registry dojo/dom-construct dojo/has ../../../../../kernel ../../../form/tools/ClickableTool ../../../form/tools/GeoExtentDialog ../../../form/tools/GeoExtentView ../../../form/tools/geoExtentUtil".split(" "),function(d,n,x,f,p,q,r,t,u,v,w,h){d=d([u],{postCreate:function(){this.inherited(arguments)},startup:function(){if(!this._started){var a=this.findInputWidget();a&&
a.parentXNode&&a.parentXNode.gxeDocument&&a.parentXNode.gxeDocument.isViewOnly&&setTimeout(n.hitch(this,function(){this._handleRequest(a,!1)}),2E3)}},whenToolClicked:function(a,e){this._handleRequest(e,!0)},_findInputWgt:function(a,e){var c,b=f("[data-gxe-path\x3d'"+a+"']",e);return b&&1===b.length&&(c=p.byNode(b[0]))?c.inputWidget:null},_findViewSection:function(a){return(a=f(".gxeGeoExtentSection .gxeGeoExtentViewSection",a))&&1===a.length?a[0]:null},_handleRequest:function(a,e){if(a&&a.parentXNode){var c=
a.parentXNode.getParentElement();if(c){var b=c.gxePath+"/",g=c.domNode,d=this._findInputWgt(b+"westBL",g),k=this._findInputWgt(b+"eastBL",g),l=this._findInputWgt(b+"northBL",g),m=this._findInputWgt(b+"southBL",g);if(d&&k&&l&&m){var f,b=null;c.gxeDocument&&c.gxeDocument.isViewOnly?e||(b=this._findViewSection(g),b)&&new w({gxeDocument:c.gxeDocument,xmin:d.getInputValue(),ymin:m.getInputValue(),xmax:k.getInputValue(),ymax:l.getInputValue()},q.create("div",{},b)):e&&(f=new v({gxeDocument:c.gxeDocument,
xmin:d.getInputValue(),ymin:m.getInputValue(),xmax:k.getInputValue(),ymax:l.getInputValue(),onChange:n.hitch(this,function(a){d.setInputValue(h.formatCoordinate(a.xmin));k.setInputValue(h.formatCoordinate(a.xmax));l.setInputValue(h.formatCoordinate(a.ymax));m.setInputValue(h.formatCoordinate(a.ymin))})}),f.show())}}}}});return r("extend-esri")&&n.setObject("dijit.metadata.types.arcgis.form.GeoExtentTool",d,t),d});