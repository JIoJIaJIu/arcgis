//>>built
define("esri/tasks/locationproviders/LocatorLocationProvider",["../../declare","dojo/_base/lang","dojo/_base/array","../../request","./LocationProviderRemoteBase"],function(m,c,n,p,q){return m("esri.tasks.locationproviders.LocatorLocationProvider",q,{locator:null,addressFields:null,constructor:function(){this.geometryType="esriGeometryPoint"},_getFieldMapping:function(){return this.addressFields},_init:function(){if(this.locator){var a=this.getInherited(arguments);return p({url:this.locator.url,content:{f:"json"},
callbackParamName:"callback"}).then(c.hitch(this,function(d){this._batchSize=d.locatorProperties&&d.locatorProperties.SuggestedBatchSize||1;a.call(this)}))}},_batchWillOverflow:function(a){return a.length+1>this._batchSize},_locateBatch:function(a){var d=this,b=function(k){for(var b=[],g=0;g<k.length;g++){var f=k[g],c=1===d._batchSize?0:f.attributes.ResultID,e=a[c];if((e=e&&e.features)&&f.score&&f.location){for(var h=0;h<e.length;h++){var l=e[h];l.geometry=f.location;b.push(l)}a[c]=null}}return b};
return 1===this._batchSize?this.locator.addressToLocations({address:a[0].expression,outFields:""}).then(b):this.locator.addressesToLocations({addresses:n.map(a,function(a,b){return c.mixin(a.expression,{OBJECTID:b})}),outFields:""}).then(b)},_createQueryExpression:function(a){for(var d={},b=0;b<this._fields.length;b++){var c=this._fields[b];d[c.outField]=a.attributes[c.inField]}return d}})});