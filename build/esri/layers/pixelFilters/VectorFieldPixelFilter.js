//>>built
define("esri/layers/pixelFilters/VectorFieldPixelFilter","dojo/_base/declare dojo/_base/lang dojo/has ../../kernel ../../lang dojo/_base/array".split(" "),function(d,g,v,w,x,k){d=d(null,{declaredClass:"esri.layers.pixelFilters.VectorFieldPixelFilter",speedUnits:["esriMetersPerSecond","esriKilometersPerHour","esriKnots","esriFeetPerSecond","esriMilesPerHour"],constructor:function(b){g.mixin(this,b);this.isDataUV=b&&b.isDataUV?b.isDataUV:!1;this.computeMagnitudeAndDirection=g.hitch(this,this.computeMagnitudeAndDirection);
this.unitConversionFactor=1;this._updateUnitConvFactor()},setUnits:function(b,a){this.inputUnit=b;this.outputUnit=a;this.unitConversionFactor=1;this._updateUnitConvFactor()},_updateUnitConvFactor:function(){var b=k.indexOf(this.speedUnits,this.inputUnit),a=k.indexOf(this.speedUnits,this.outputUnit);if(this.inputUnit&&this.outputUnit&&0<=b&&0<=a){var c=[1,.277778,.514444,.3048,.44704,0];this.unitConversionFactor=c[b]/c[a]}},computeMagnitudeAndDirection:function(b){if(!x.isDefined(b))throw"Could not compute magnitude and direction. No pixel data is available.";
var a=b.pixelBlock;if(!x.isDefined(a)||2!==a.getPlaneCount())throw"Could not compute magnitude and direction. Pixel data does not contain two bands.";var c=b.extent,d=(c.xmax-c.xmin)/a.width,g=(c.ymax-c.ymin)/a.height,k=c.xmin+d/2,c=c.ymax-g/2;a.statistics[0].minValue=0;a.statistics[0].maxValue=0;var l,m,e,f,n,p,q,r,v=180/Math.PI,y=[],t=0,u=0,h=0,w=!x.isDefined(a.mask);n=q=1/0;p=r=-1/0;for(t=0;t<a.height;t++)for(u=0;u<a.width;u++,h++)y.push([k+d*u,c-g*t]),(w||a.mask[h])&&(e=l=a.pixels[0][h]*this.unitConversionFactor,
f=m=a.pixels[1][h],this.isDataUV&&(e=Math.sqrt(l*l+m*m),f=90-v*Math.atan2(m,l),a.pixels[0][h]=e*this.unitConversionFactor,a.pixels[1][h]=f),e>p&&(p=e),n>e&&(n=e),f>r&&(r=f),q>f&&(q=f));return a.statistics[0].maxValue=p,a.statistics[0].minValue=n,a.statistics[1].maxValue=r,a.statistics[1].minValue=q,b.locations=y,b}});return v("extend-esri")&&g.setObject("layers.pixelFilters.VectorFieldPixelFilter",d,w),d});