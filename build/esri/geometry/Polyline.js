//>>built
define("esri/geometry/Polyline","dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../lang ../SpatialReference ./Geometry ./Point ./Extent ../srUtils".split(" "),function(e,l,c,D,C,E,H,F,g,A,G){var h={type:"polyline",paths:null};e=e(F,{declaredClass:"esri.geometry.Polyline",constructor:function(a){c.mixin(this,h);this.paths=[];this._path=0;a&&(c.isArray(a)?this.paths=c.isArray(a[0][0])?a:[a]:a.paths?c.mixin(this,a):this.spatialReference=a,this.spatialReference&&(this.spatialReference=
G.createSpatialReference(this.spatialReference)));this.verifySR()},addPath:function(a){return this.clearCache(),this._path=this.paths.length,this.paths[this._path]=[],c.isArray(a[0])?l.forEach(a,this._addPointArr,this):l.forEach(a,this._addPoint,this),this},_addPointArr:function(a){this.paths[this._path].push(a)},_addPoint:function(a){this.paths[this._path].push([a.x,a.y])},_insertPoints:function(a,b){this.clearCache();this._path=b;this.paths[this._path]||(this.paths[this._path]=[]);l.forEach(a,this._addPoint,
this)},_validateInputs:function(a,b){return null!==a&&void 0!==a&&(0>a||a>=this.paths.length)?!1:null!==b&&void 0!==a&&(0>b||b>=this.paths[a].length)?!1:!0},getPoint:function(a,b){return this._validateInputs(a,b)?new g(this.paths[a][b],this.spatialReference):void 0},setPoint:function(a,b,d){return this._validateInputs(a,b)?(this.clearCache(),this.paths[a][b]=[d.x,d.y],this):void 0},insertPoint:function(a,b,d){return this._validateInputs(a)&&E.isDefined(b)&&0<=b&&b<=this.paths[a].length?(this.clearCache(),
this.paths[a].splice(b,0,[d.x,d.y]),this):void 0},removePath:function(a){if(this._validateInputs(a,null)){this.clearCache();var b=this.paths.splice(a,1)[0],d=b.length,c=this.spatialReference;for(a=0;d>a;a++)b[a]=new g(b[a],c);return b}},removePoint:function(a,b){return this._validateInputs(a,b)?(this.clearCache(),new g(this.paths[a].splice(b,1)[0],this.spatialReference)):void 0},getExtent:function(){var a,b=this.getCacheValue("_extent"),d=this.getCacheValue("_partwise");if(b)return a=new A(b),a._partwise=
d,a;var c=this.paths,e=c.length;if(e&&c[0].length){var k,f,m,n,p,q,r,l,t,u,v,w,g=n=c[0][0][0],h=p=c[0][0][1],x=Math.min,y=Math.max,z=this.spatialReference,B=[];for(q=0;e>q;q++){k=c[q];t=u=k[0]&&k[0][0];v=w=k[0]&&k[0][1];l=k.length;for(r=0;l>r;r++)f=k[r],m=f[0],f=f[1],g=x(g,m),h=x(h,f),n=y(n,m),p=y(p,f),t=x(t,m),v=x(v,f),u=y(u,m),w=y(w,f);B.push(new A({xmin:t,ymin:v,xmax:u,ymax:w,spatialReference:z?z.toJson():null}))}return b={xmin:g,ymin:h,xmax:n,ymax:p,spatialReference:z?z.toJson():null},d=1<B.length?
B:null,this.setCacheValue("_extent",b),this.setCacheValue("_partwise",d),a=new A(b),a._partwise=d,a}},toJson:function(){var a={paths:c.clone(this.paths)},b=this.spatialReference;return b&&(a.spatialReference=b.toJson()),a}});return e.defaultProps=h,D("extend-esri")&&(c.setObject("geometry.Polyline",e,C),C.geometry.defaultPolyline=h),e});