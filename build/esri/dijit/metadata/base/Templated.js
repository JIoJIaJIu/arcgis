//>>built
define("esri/dijit/metadata/base/Templated","dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/has ./etc/docUtil dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/i18n!../nls/i18nBase ../../../kernel".split(" "),function(c,e,f,g,d,h,k,l,m,n){c=c([h,k,l],{_destroyWasCalled:!1,_escapeSingleQuotes:!1,i18nBase:m,templateString:"\x3cdiv data-dojo-attach-point\x3d'containerNode'\x3e\x3c/div\x3e",hide:!1,postCreate:function(){this.inherited(arguments);this.hide&&f.set(this.domNode,
"display","none")},destroy:function(){this._destroyWasCalled=!0;this.inherited(arguments)},setI18nNodeText:function(a,b){d.setI18nNodeText(a,b)},setNodeText:function(a,b){d.setNodeText(a,b)},_escapeValue:function(){var a=this.inherited(arguments);if(this._escapeSingleQuotes&&-1!==a.indexOf("\x26#x27;")){for(var b=0;10>b&&-1!==a.indexOf("\\\x26#x27;");b++)a=a.replace(/\\&#x27;/g,"\x26#x27;");a=a.replace(/&#x27;/g,"\\\x26#x27;")}return a}});return g("extend-esri")&&e.setObject("dijit.metadata.base.Templated",
c,n),c});