//>>built
define("esri/dijit/metadata/types/arcgis/base/conditionals/GEN_BoundingBox","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/topic dojo/has ../../../../../../kernel dojo/i18n!../../../../nls/i18nArcGIS ../../../../base/Conditional ../../../../base/etc/docUtil".split(" "),function(d,g,f,e,h,k,l,m,n){d=d(m,{key:"GEN_BoundingBox",postCreate:function(){this.inherited(arguments);var b=this;this.own(e.subscribe("gxe/optional-content-toggled",function(a){try{if(b.parentXNode&&a&&a.src&&a.src.target){var c=
a.src.target;"dataExt"!==c&&"geoEle"!==c||b.emitInteractionOccurred()}}catch(d){console.error(d)}}));this.own(e.subscribe("gxe/tab-activated",function(a){try{b.parentXNode&&a&&a.tabs&&a.tabs.isGeoEleChoice&&b.emitInteractionOccurred()}catch(c){console.error(c)}}));this.own(e.subscribe("gxe/after-xnode-destroyed",function(a){try{if(b.parentXNode&&a&&a.xnode){var c=a.xnode.gxePath;"/metadata/dataIdInfo/dataExt"===c?b.emitInteractionOccurred():"/metadata/dataIdInfo/dataExt/geoEle"===c&&b.emitInteractionOccurred()}}catch(d){console.error(d)}}))},
ensureFocus:function(){n.ensureVisibility(this.parentXNode);f.some(this.parentXNode.getChildren(),function(b){return b._isGxeTabs?(f.some(b.getChildren(),function(a){return a.isExtentSection?(b.ensureActiveTab(a),!0):void 0}),!0):void 0})},validateConditionals:function(b){var a=this.newStatus({message:l.conditionals[this.key]}),c=!1;return this.forActiveXNodes("/metadata/dataIdInfo/dataExt/geoEle/GeoBndBox",this.parentXNode.domNode,function(){c=!0}),a.isValid=c,this.track(a,b),a}});return h("extend-esri")&&
g.setObject("dijit.metadata.types.arcgis.base.conditionals.GEN_BoundingBox",d,k),d});