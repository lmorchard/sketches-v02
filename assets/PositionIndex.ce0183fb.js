var O=Object.defineProperty;var T=(r,t,s)=>t in r?O(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s;var c=(r,t,s)=>(T(r,typeof t!="symbol"?t+"":t,s),s);import{C as E,f as M,B as N,P as m,W as X,h as Y,j as z,T as B}from"./Replay.c9641c9b.js";class S{constructor(t,s=0){this.bounds={x:t.x||0,y:t.y||0,width:t.width,height:t.height},this.maxObjects=typeof t.maxObjects=="number"?t.maxObjects:10,this.maxLevels=typeof t.maxLevels=="number"?t.maxLevels:4,this.level=s,this.objects=[],this.nodes=[]}getIndex(t){return t.qtIndex(this.bounds)}split(){const t=this.level+1,s=this.bounds.width/2,e=this.bounds.height/2,i=this.bounds.x,n=this.bounds.y,a=[{x:i+s,y:n},{x:i,y:n},{x:i,y:n+e},{x:i+s,y:n+e}];for(let h=0;h<4;h++)this.nodes[h]=new S({x:a[h].x,y:a[h].y,width:s,height:e,maxObjects:this.maxObjects,maxLevels:this.maxLevels},t)}insert(t){if(this.nodes.length){const s=this.getIndex(t);for(let e=0;e<s.length;e++)this.nodes[s[e]].insert(t);return}if(this.objects.push(t),this.objects.length>this.maxObjects&&this.level<this.maxLevels){this.nodes.length||this.split();for(let s=0;s<this.objects.length;s++){const e=this.getIndex(this.objects[s]);for(let i=0;i<e.length;i++)this.nodes[e[i]].insert(this.objects[s])}this.objects=[]}}retrieve(t){const s=this.getIndex(t);let e=this.objects;if(this.nodes.length)for(let i=0;i<s.length;i++)e=e.concat(this.nodes[s[i]].retrieve(t));return e=e.filter(function(i,n){return e.indexOf(i)>=n}),e}clear(){this.objects=[];for(let t=0;t<this.nodes.length;t++)this.nodes.length&&this.nodes[t].clear();this.nodes=[]}}class j{constructor(t){this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this.data=t.data}qtIndex(t){const s=[],e=t.x+t.width/2,i=t.y+t.height/2,n=this.y<i,a=this.x<e,h=this.x+this.width>e,o=this.y+this.height>i;return n&&h&&s.push(0),a&&n&&s.push(1),a&&o&&s.push(2),h&&o&&s.push(3),s}}class b{constructor(t,s){typeof t<"u"&&typeof s<"u"&&this.set(t,s)}set(t,s){return this.x=t,this.y=s,this}copy(t){return this.x=t.x,this.y=t.y,this}clone(t){return this.copy(t)}distanceToSquared(t){return Math.pow(t.x-this.x,2)+Math.pow(t.y-this.y,2)}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}rotate(t){const s=Math.cos(t),e=Math.sin(t),i=this.x*s-this.y*e,n=this.x*e+this.y*s;return this.x=i,this.y=n,this}}class g extends b{dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSquared(){return this.dot(this)}length(){return Math.sqrt(this.lengthSquared())}magnitude(){return this.length()}angle(){return Math.atan2(this.y,this.x)}angleTo(t){return Math.atan2(t.y-this.y,t.x-this.x)}add(...t){return t.forEach(s=>{s&&(this.x+=s.x,this.y+=s.y)}),this}subtract(...t){return t.forEach(s=>{s&&(this.x-=s.x,this.y-=s.y)}),this}multiplyScalar(t){return this.x*=t,this.y*=t,this}scaleBy(t){return this.multiplyScalar(t)}divideScalar(t){return this.x/=t,this.y/=t,this}normalize(){return this.divideScalar(this.length())}unit(){return this.normalize()}truncate(t){return this.length()>t&&this.normalize().multiplyScalar(t),this}}const P=class{constructor(t,s){this.p0=new g,this.p1=new g,typeof t<"u"&&typeof s<"u"&&this.set(t,s)}set(t,s){this.p0.copy(t),this.p1.copy(s)}setCoords(t,s,e,i){this.p0.set(t,s),this.p1.copy(e,i)}lengthSquared(){return this.p0.distanceToSquared(this.p1)}length(){return this.p0.distanceTo(this.p1)}intersects(t){let s,e,i,n;s=this.p1.x-this.p0.x,e=this.p1.y-this.p0.y,i=t.p1.x-t.p0.x,n=t.p1.y-t.p0.y;let a,h;return a=(-e*(this.p0.x-t.p0.x)+s*(this.p0.y-t.p0.y))/(-i*e+s*n),h=(i*(this.p0.y-t.p0.y)-n*(this.p0.x-t.p0.x))/(-i*e+s*n),a>=0&&a<=1&&h>=0&&h<=1}findClosestPoint(t,s=new b){const{fromAtoB:e,fromAtoP:i}=this.constructor,{x:n,y:a}=t,{x:h,y:o}=this.p0,{x:d,y}=this.p1;e.set(d-h,y-o),i.set(n-h,a-o);const u=e.lengthSquared(),f=i.dot(e),x=Math.min(1,Math.max(0,f/u));return s.set(h+e.x*x,o+e.y*x)}findClosestPointsBetweenLines(t,s=new P){const{v0:e}=this.constructor,i=e.copy(t.p0).subtract(this.p0).lengthSquared(),n=e.copy(t.p1).subtract(this.p0).lengthSquared(),a=e.copy(t.p0).subtract(this.p1).lengthSquared(),h=e.copy(t.p1).subtract(this.p1).lengthSquared(),o=a<i||a<n||h<i||h<n?this.p1:this.p0;return t.findClosestPoint(o,s.p1),this.findClosestPoint(s.p1,s.p0),s}};let w=P;c(w,"fromAtoB",new g),c(w,"fromAtoP",new g),c(w,"v0",new g);class Q extends E(g){constructor(t,s){super(),this.defineComponentProperties(t,s)}}const V=M({width:B.f32,height:B.f32}),W=M({radius:B.f32,length:B.f32}),_=M({radius:B.f32});class l extends N{findAABB(t={}){return this.AreaRectangle.hasComponent()?this.findRectangleAABB(t):this.AreaCircle.hasComponent()?this.findCircleAABB(t):this.AreaCapsule.hasComponent()?this.findCapsuleAABB(t):this.findPointAABB(t)}findPointAABB(t={}){const{x:s,y:e}=this.Position;return t.x=s,t.y=e,t.width=1,t.height=1,t}findRectangleAABB(t={}){const{x:s,y:e}=this.Position,{width:i,height:n}=this.AreaRectangle;return t.x=s-i/2,t.y=e-n/2,t.width=i,t.height=n,t}findCircleAABB(t={}){const{x:s,y:e}=this.Position,{radius:i}=this.AreaCircle;return t.x=s-i,t.y=e-i,t.width=i*2,t.height=i*2,t}findCapsuleAABB(t={}){const{ptl:s,ptr:e,pbl:i,pbr:n}=this.constructor,{x:a,y:h,r:o}=this.Position,{radius:d,length:y}=this.AreaCapsule,u=y/2;return s.set(0-d,0-u).rotate(o),e.set(d,0-u).rotate(o),i.set(0-d,u).rotate(o),n.set(d,u).rotate(o),t.x=Math.min(s.x,e.x,i.x,n.x),t.width=Math.max(s.x,e.x,i.x,n.x)-t.x,t.y=Math.min(s.y,e.y,i.y,n.y),t.height=Math.max(s.y,e.y,i.y,n.y)-t.y,t.x+=a,t.y+=h,t}}c(l,"components",{Position:m,AreaRectangle:V,AreaCapsule:W,AreaCircle:_}),c(l,"componentProxyClasses",{Position:Q}),c(l,"ptl",new b),c(l,"ptr",new b),c(l,"pbl",new b),c(l,"pbr",new b);class A extends X{findByRectangle(t,s,e,i){if(!this.quadtree)return[];const{findRect:n}=this.constructor;return n.x=t,n.y=s,n.width=e,n.height=i,this.quadtree.retrieve(n).map(a=>a.data)}findNearest(t,s,e,i){const n=e*e,a=this.findByRectangle(t-e/2,s-e/2,e,e).map(h=>[h,Y(t,s,m.x[h],m.y[h])]).filter(([h,o])=>o<=n).sort((h,o)=>h[1]-o[1]).map(([h])=>h);return typeof i>"u"?a:a.slice(0,i)}findNearestToEntity(t,s,e){const i=m.x[t],n=m.y[t];return this.findNearest(i,n,s,e).filter(a=>a!==t)}findByEntity(t){const{findRect:s,areaEntity:e}=this.constructor;return e.using(t,this.world).findAABB(s),this.quadtree.retrieve(s).map(i=>i.data).filter(i=>i!==t)}}c(A,"storeKey",Symbol("positionIndexQuadtree")),c(A,"attributes",["quadtree"]),c(A,"findRect",new j({})),c(A,"areaEntity",new l);const R=new A,I=z([m]),K=(r={})=>{const t=new l,s={};let e=0,i=0,n=0,a=0;const h=[];return o=>{const{maxObjects:d=10,maxLevels:y=4}=r;e=0,i=0,n=0,a=0,h.length=0;for(const f of I(o)){const{x,y:p,width:q,height:C}=t.using(f,o).findAABB(s);!x||!p||(e=Math.min(e,x),n=Math.min(n,p),i=Math.max(i,x+q),a=Math.max(a,p+C),h.push([x,p,q,C,f]))}const u=new S({maxObjects:d,maxLevels:y,x:e,y:n,width:i-e,height:a-n});for(const[f,x,p,q,C]of h)u.insert(new j({x:f,y:x,width:p,height:q,data:C}));return R.using(o).quadtree=u,o}},L=(r={})=>{const t=new l,s={};return e=>{if(!e||!e.debug)return;const i=e.debugGraphics;i.lineStyle(1,16777011,.125);const n=R.using(e).quadtree;if(window.quadtree=n,n){const{x:a,y:h,width:o,height:d}=n.bounds;i.drawRect(a,h,o,d)}i.lineStyle(1,16777011,.125);for(const a of I(e)){const{x:h,y:o,width:d,height:y}=t.using(a,e).findAABB(s);i.drawRect(h,o,d,y)}return e}};export{W as A,w as L,b as P,Q as V,L as a,R as b,g as c,l as d,_ as e,K as p};
