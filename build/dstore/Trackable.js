//>>built
define("dstore/Trackable","dojo/_base/lang dojo/_base/declare dojo/aspect dojo/when dojo/promise/all dojo/_base/array dojo/on".split(" "),function(C,y,G,A,p,D,H){function E(g,l,t){for(var q=g.length-1;0<=q;--q){var m=g[q],x=m.start,m=x+m.count;if(l>m){g.splice(q+1,0,{start:l,count:t-l});return}t>=x&&(l=Math.min(l,x),t=Math.max(t,m),g.splice(q,1))}g.unshift({start:l,count:t-l})}var I=0,B={track:function(){function g(){return function(){var c=this,a=this.inherited(arguments);A(a,function(a){a=c._results=
a.slice();c._partialResults&&(c._partialResults=null);c._ranges=[];E(c._ranges,0,a.length)});return a}}function l(){return function(c){var a=this,d=c.start,e=c.end,b=this.inherited(arguments);this._results||A(b,function(b){return A(b.totalLength,function(c){var h=a._partialResults||(a._partialResults=[]);e=Math.min(e,d+b.length);h.length=c;c=[d,e-d].concat(b);h.splice.apply(h,c);E(a._ranges,d,e);return b})});return b}}function t(c,a){I++;var d=a.target;a=C.delegate(a,B[c]);A(r._results||r._partialResults,
function(e){if(e){var b,f,g,h=r._ranges,k,l="id"in a?a.id:q.getIdentity(d),m=-1,u=-1,n=-1,v=-1;if("delete"===c||"update"===c)for(b=0;-1===m&&b<h.length;++b)for(k=h[b],f=k.start,g=f+k.count;f<g;++f)if(q.getIdentity(e[f])==l){m=a.previousIndex=f;u=b;e.splice(m,1);k.count--;for(f=b+1;f<h.length;++f)h[f].start--;break}if("add"===c||"update"===c){if(z){if(z([d]).length){var w=0;g=h.length-1;f=-1;for(var p;w<=g&&-1===n;)b=w+Math.round((g-w)/2),k=h[b],u=e.slice(k.start,k.start+k.count),"beforeId"in a&&(f=
null===a.beforeId?u.length:F(u,a.beforeId)),-1===f&&(f=m>=Math.max(0,k.start-1)&&m<=k.start+k.count?m:q.defaultNewToStart?0:u.length),u.splice(f,0,d),l=D.indexOf(z(u),d),p=k.start+l,0===l&&0!==k.start?g=b-1:l>=u.length-1&&p<e.length?w=b+1:(n=p,v=b);if(-1===n&&0<w&&w<h.length)var t=!0}}else{f=-1;if("beforeId"in a)if(null===a.beforeId)n=e.length,f=h.length-1;else for(b=0,g=h.length;-1===v&&b<g;++b)k=h[b],n=F(e,a.beforeId,k.start,k.start+k.count),-1!==n&&(v=b);else"update"===c?(n=m,v=u):q.defaultNewToStart?
f=n=0:(n=e.length,f=h.length-1);-1!==f&&-1===v&&(k=h[f])&&k.start<=n&&n<=k.start+k.count&&(v=f)}if(-1<n&&-1<v)for(a.index=n,e.splice(n,0,d),h[v].count++,b=v+1;b<h.length;++b)h[b].start++;else if(t)for(a.beforeIndex=h[w].start,b=w;b<h.length;++b)h[b].start++}a.totalLength=e.length}(e=r["on_tracked"+c])&&e.call(r,a)})}var q=this.store||this,m=[],x={add:1,update:1,"delete":1},p;for(p in x)m.push(this.on(p,function(c){return function(a){t(c,a)}}(p)));var r=y.safeMixin(C.delegate(this),{_ranges:[],fetch:g(),
fetchRange:l(),releaseRange:function(c,a){if(this._partialResults){a:for(var d=this._ranges,e=0,b;b=d[e];++e){var f=b.start,g=f+b.count;if(c<=f)if(a>=g)d.splice(e,1);else{b.start=a;b.count=g-b.start;break a}else if(c<g)if(a>f){d.splice(e,1,{start:f,count:c-f},{start:a,count:g-a});break a}else b.count=c-b.start}for(d=c;d<a;++d)delete this._partialResults[d]}},on:function(c,a){var d=this,e=this.getInherited(arguments);return H.parse(r,c,a,function(b,c){return c in x?G.after(r,"on_tracked"+c,a,!0):e.call(d,
c,a)})},tracking:{remove:function(){for(;0<m.length;)m.pop().remove();this.remove=function(){}}},track:null});this.fetchSync&&(y.safeMixin(r,{fetchSync:g(),fetchRangeSync:l()}),r.fetchSync());var z;D.forEach(this.queryLog,function(c){var a=z,d=c.querier;d&&(z=a?function(c){return d(a(c))}:d)});var B={add:{index:void 0},update:{previousIndex:void 0,index:void 0},"delete":{previousIndex:void 0}},F=function(c,a,d,e){e=void 0!==e?e:c.length;for(d=void 0!==d?d:0;d<e;++d)if(q.getIdentity(c[d])===a)return d;
return-1};return r}};p=y(null,B);p.create=function(g,l){g=y.safeMixin(C.delegate(g),B);y.safeMixin(g,l);return g};return p});