//>>built
define("esri/layers/RasterFunction",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../lang"],function(f,d,g,h,k){var e=f(null,{declaredClass:"esri.layers.RasterFunction",functionName:null,arguments:null,functionArguments:null,variableName:null,outputPixelType:null,constructor:function(a){if(d.isObject(a)){var b,c=0;if(this.functionName=a.rasterFunction,this.functionArguments=d.clone(a.rasterFunctionArguments||a.arguments),d.mixin(this,a),b=this.functionArguments,b&&(b.Raster=this._toRasterFunction(b.Raster),
b.Raster2=this._toRasterFunction(b.Raster2),b.DEM=this._toRasterFunction(b.DEM),b.FillRaster=this._toRasterFunction(b.FillRaster),b.Rasters&&b.Rasters.length))for(c=0;c<b.Rasters.length;c++)b.Rasters[c]=this._toRasterFunction(b.Rasters[c])}},_toRasterFunction:function(a){return a&&(a.rasterFunction||a.functionName)?new e(a):a},_rfToJson:function(a){return a&&"esri.layers.RasterFunction"===a.declaredClass&&(a=a.toJson()),a},toJson:function(){var a=d.clone(this.functionArguments||this.arguments);if(a&&
(a.Raster=this._rfToJson(a.Raster),a.Raster2=this._rfToJson(a.Raster2),a.DEM=this._rfToJson(a.DEM),a.FillRaster=this._rfToJson(a.FillRaster),a.Rasters&&a.Rasters.length)){var b,c=[];for(b=0;b<a.Rasters.length;b++)c.push(this._rfToJson(a.Rasters[b]));a.Rasters=c}return k.filter({rasterFunction:this.functionName,rasterFunctionArguments:a,variableName:this.variableName,outputPixelType:this.outputPixelType?this.outputPixelType:null},function(a){return null!==a&&void 0!==a?!0:void 0})}});return g("extend-esri")&&
d.setObject("layers.RasterFunction",e,h),e});