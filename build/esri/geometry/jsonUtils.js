//>>built
define("esri/geometry/jsonUtils","dojo/_base/lang dojo/has ../kernel ./Point ./Polyline ./Polygon ./Multipoint ./Extent".split(" "),function(g,k,l,b,c,d,e,f){var h={fromJson:function(a){return void 0!==a.x&&void 0!==a.y?new b(a):void 0!==a.paths?new c(a):void 0!==a.rings?new d(a):void 0!==a.points?new e(a):void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax?new f(a):void 0},getJsonType:function(a){return a instanceof b?"esriGeometryPoint":a instanceof c?"esriGeometryPolyline":a instanceof
d?"esriGeometryPolygon":a instanceof f?"esriGeometryEnvelope":a instanceof e?"esriGeometryMultipoint":null},getGeometryType:function(a){return"esriGeometryPoint"===a?b:"esriGeometryPolyline"===a?c:"esriGeometryPolygon"===a?d:"esriGeometryEnvelope"===a?f:"esriGeometryMultipoint"===a?e:null}};return k("extend-esri")&&g.mixin(g.getObject("geometry",!0,l),h),h});