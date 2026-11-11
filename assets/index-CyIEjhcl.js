(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const wl="187",nh=0,lc=1,ih=2,ir=1,sh=2,js=3,qi=0,mn=1,ii=2,bs=0,sr=1,Yi=2,cc=3,uc=4,Pu=5,xs=100,rh=101,ah=102,oh=103,lh=104,ch=200,Lu=201,uh=202,hh=203,Du=204,El=205,fh=206,dh=207,ph=208,mh=209,gh=210,xh=211,vh=212,_h=213,Mh=214,bo=0,wo=1,Eo=2,hr=3,To=4,Ao=5,Ro=6,Co=7,Tl=0,Sh=1,yh=2,ai=0,Iu=1,Uu=2,Nu=3,Fu=4,zu=5,Ou=6,Bu=7,ku=300,Es=301,fr=302,Ua=303,Na=304,Ts=1e3,si=1001,Po=1002,nn=1003,bh=1004,Er=1005,pn=1006,Fa=1007,ri=1008,En=1009,Hu=1010,Gu=1011,dr=1012,Al=1013,oi=1014,Kn=1015,Mn=1016,Rl=1017,Cl=1018,As=1020,Vu=35902,Wu=35899,Xu=1021,qu=1022,Tn=1023,Ri=1026,Ai=1027,Pl=1028,Ll=1029,$i=1030,Dl=1031,Il=1033,ca=33776,ua=33777,ha=33778,fa=33779,Lo=35840,Do=35841,Io=35842,Uo=35843,No=36196,Fo=37492,zo=37496,Oo=37488,Bo=37489,va=37490,ko=37491,Ho=37808,Go=37809,Vo=37810,Wo=37811,Xo=37812,qo=37813,Yo=37814,$o=37815,Zo=37816,Ko=37817,Jo=37818,Qo=37819,jo=37820,el=37821,tl=36492,nl=36494,il=36495,sl=36283,rl=36284,_a=36285,al=36286,wh=3200,Ma=0,Eh=1,$n="",jt="srgb",Sa="srgb-linear",ya="linear",Et="srgb",za=7680,Th=519,Ah=512,Rh=513,Ch=514,Yu=515,Ph=516,Lh=517,$u=518,Zu=519,Dh=35044,hc="300 es",Jn=2e3,pr=2001;function Ih(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uh(){const i=ba("canvas");return i.style.display="block",i}const fc={};function dc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ku(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qe(...i){i=Ku(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function St(...i){i=Ku(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function da(...i){const e=i.join(" ");e in fc||(fc[e]=!0,Qe(...i))}function Nh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Fh={[bo]:bo,[Eo]:Ro,[To]:To,[hr]:Ao,[wo]:wo,[Ro]:Eo,[Co]:Co,[Ao]:hr};class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,wa=180/Math.PI;function Ns(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function zh(i,e){return(i%e+e)%e}function Ba(i,e,t){return(1-t)*i+t*e}function Oh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ul(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Bh(i,e){if(e.constructor===Float32Array)return i;const t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function kh(i,e){if(e.constructor===Float32Array)return i;const t=Ul(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}class ce{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],d=r[a+0],p=r[a+1],v=r[a+2],M=r[a+3];if(f!==M||l!==d||c!==p||u!==v){let h=l*d+c*p+u*v+f*M;h<0&&(d=-d,p=-p,v=-v,M=-M,h=-h);let m=1-o;if(h<.9995){const x=Math.acos(h),y=Math.sin(x);m=Math.sin(m*x)/y,o=Math.sin(o*x)/y,l=l*m+d*o,c=c*m+p*o,u=u*m+v*o,f=f*m+M*o}else{l=l*m+d*o,c=c*m+p*o,u=u*m+v*o,f=f*m+M*o;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],p=r[a+2],v=r[a+3];return e[t]=o*v+u*f+l*p-c*d,e[t+1]=l*v+u*d+c*f-o*p,e[t+2]=c*v+u*p+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),p=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new I,pc=new Ht;class nt{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],p=n[5],v=n[8],M=s[0],h=s[3],m=s[6],x=s[1],y=s[4],S=s[7],T=s[2],R=s[5],g=s[8];return r[0]=a*M+o*x+l*T,r[3]=a*h+o*y+l*R,r[6]=a*m+o*S+l*g,r[1]=c*M+u*x+f*T,r[4]=c*h+u*y+f*R,r[7]=c*m+u*S+f*g,r[2]=d*M+p*x+v*T,r[5]=d*h+p*y+v*R,r[8]=d*m+p*S+v*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,p=c*r-a*l,v=t*f+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=f*M,e[1]=(s*c-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=d*M,e[4]=(u*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return da("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ha.makeScale(e,t)),this}rotate(e){return da("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ha.makeRotation(-e)),this}translate(e,t){return da("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new nt,mc=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hh(){const i={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?ya:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Sa]:{primaries:e,whitePoint:n,transfer:ya,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),i}const xt=Hh();function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let is;class Gh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=ba("canvas")),is.width=e.width,is.height=e.height;const s=is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vh=0;class Nl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Ns(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ga(s[a].image)):r.push(Ga(s[a]))}else r=Ga(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let Wh=0;const Va=new I;class gn extends Ji{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=si,s=si,r=pn,a=ri,o=Tn,l=En,c=gn.DEFAULT_ANISOTROPY,u=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Ns(),this.name="",this.source=new Nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ts:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ts:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=ku;gn.DEFAULT_ANISOTROPY=1;class kt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],M=l[2],h=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(v-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(v+h)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(p+1)/2,T=(m+1)/2,R=(u+d)/4,g=(f+M)/4,_=(v+h)/4;return y>S&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=g/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=g/r,s=_/r),this.set(n,s,r,t),this}let x=Math.sqrt((h-v)*(h-v)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(h-v)/x,this.y=(f-M)/x,this.z=(d-u)/x,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xh extends Ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new gn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nl(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ju extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qh extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class dt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,f,d,p,v,M,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,d,p,v,M,h)}set(e,t,n,s,r,a,o,l,c,u,f,d,p,v,M,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=p,m[7]=v,m[11]=M,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*f,v=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=d-M*c,t[9]=-o*l,t[2]=M-d*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,M=c*f;t[0]=d+M*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=M+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,M=c*f;t[0]=d-M*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=M-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,p=a*f,v=o*u,M=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=d*c+M,t[1]=l*f,t[5]=M*c+d,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=M-d*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=d-M*f}else if(e.order==="XZY"){const d=a*l,p=a*c,v=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+M,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=M*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yh,e,$h)}lookAt(e,t,n){const s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Mi.crossVectors(n,Pn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Mi.crossVectors(n,Pn)),Mi.normalize(),Tr.crossVectors(Pn,Mi),s[0]=Mi.x,s[4]=Tr.x,s[8]=Pn.x,s[1]=Mi.y,s[5]=Tr.y,s[9]=Pn.y,s[2]=Mi.z,s[6]=Tr.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],p=n[13],v=n[2],M=n[6],h=n[10],m=n[14],x=n[3],y=n[7],S=n[11],T=n[15],R=s[0],g=s[4],_=s[8],w=s[12],b=s[1],P=s[5],D=s[9],U=s[13],C=s[2],z=s[6],H=s[10],O=s[14],J=s[3],k=s[7],G=s[11],X=s[15];return r[0]=a*R+o*b+l*C+c*J,r[4]=a*g+o*P+l*z+c*k,r[8]=a*_+o*D+l*H+c*G,r[12]=a*w+o*U+l*O+c*X,r[1]=u*R+f*b+d*C+p*J,r[5]=u*g+f*P+d*z+p*k,r[9]=u*_+f*D+d*H+p*G,r[13]=u*w+f*U+d*O+p*X,r[2]=v*R+M*b+h*C+m*J,r[6]=v*g+M*P+h*z+m*k,r[10]=v*_+M*D+h*H+m*G,r[14]=v*w+M*U+h*O+m*X,r[3]=x*R+y*b+S*C+T*J,r[7]=x*g+y*P+S*z+T*k,r[11]=x*_+y*D+S*H+T*G,r[15]=x*w+y*U+S*O+T*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],M=e[7],h=e[11],m=e[15],x=l*p-c*d,y=o*p-c*f,S=o*d-l*f,T=a*p-c*u,R=a*d-l*u,g=a*f-o*u;return t*(M*x-h*y+m*S)-n*(v*x-h*T+m*R)+s*(v*y-M*T+m*g)-r*(v*S-M*R+h*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],M=e[13],h=e[14],m=e[15],x=t*o-n*a,y=t*l-s*a,S=t*c-r*a,T=n*l-s*o,R=n*c-r*o,g=s*c-r*l,_=u*M-f*v,w=u*h-d*v,b=u*m-p*v,P=f*h-d*M,D=f*m-p*M,U=d*m-p*h,C=x*U-y*D+S*P+T*b-R*w+g*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/C;return e[0]=(o*U-l*D+c*P)*z,e[1]=(s*D-n*U-r*P)*z,e[2]=(M*g-h*R+m*T)*z,e[3]=(d*R-f*g-p*T)*z,e[4]=(l*b-a*U-c*w)*z,e[5]=(t*U-s*b+r*w)*z,e[6]=(h*S-v*g-m*y)*z,e[7]=(u*g-d*S+p*y)*z,e[8]=(a*D-o*b+c*_)*z,e[9]=(n*b-t*D-r*_)*z,e[10]=(v*R-M*S+m*x)*z,e[11]=(f*S-u*R-p*x)*z,e[12]=(o*w-a*P-l*_)*z,e[13]=(t*P-n*w+s*_)*z,e[14]=(M*y-v*T-h*x)*z,e[15]=(u*T-f*y+d*x)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,p=r*u,v=r*f,M=a*u,h=a*f,m=o*f,x=l*c,y=l*u,S=l*f,T=n.x,R=n.y,g=n.z;return s[0]=(1-(M+m))*T,s[1]=(p+S)*T,s[2]=(v-y)*T,s[3]=0,s[4]=(p-S)*R,s[5]=(1-(d+m))*R,s[6]=(h+x)*R,s[7]=0,s[8]=(v+y)*g,s[9]=(h-x)*g,s[10]=(1-(d+M))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ss.set(s[0],s[1],s[2]).length();const o=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Wn.copy(this);const c=1/a,u=1/o,f=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,t.setFromRotationMatrix(Wn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Jn,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let v,M;if(l)v=r/(a-r),M=a*r/(a-r);else if(o===Jn)v=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===pr)v=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let v,M;if(l)v=1/(a-r),M=a/(a-r);else if(o===Jn)v=-2/(a-r),M=-(a+r)/(a-r);else if(o===pr)v=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new I,Wn=new dt,Yh=new I(0,0,0),$h=new I(1,1,1),Mi=new I,Tr=new I,Pn=new I,xc=new dt,vc=new Ht;class Cn{constructor(e=0,t=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vc.setFromEuler(this),this.setFromQuaternion(vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Qu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zh=0;const _c=new I,rs=new Ht,ui=new dt,Ar=new I,Hs=new I,Kh=new I,Jh=new Ht,Mc=new I(1,0,0),Sc=new I(0,1,0),yc=new I(0,0,1),bc={type:"added"},Qh={type:"removed"},as={type:"childadded",child:null},Wa={type:"childremoved",child:null};class Gt extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new I,t=new Cn,n=new Ht,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new nt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(yc,e)}translateOnAxis(e,t){return _c.copy(e).applyQuaternion(this.quaternion),this.position.add(_c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(yc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ar.copy(e):Ar.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Hs,Ar,this.up):ui.lookAt(Ar,Hs,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(ui),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(St("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),as.child=e,this.dispatchEvent(as),as.child=null):St("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qh),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,Kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Jh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new I(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jh={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const h=t.getJointPose(M,n),m=this._getHandJoint(c,M);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function qa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=xt.workingColorSpace){if(e=zh(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=qa(a,r,e+1/3),this.g=qa(a,r,e),this.b=qa(a,r,e-1/3)}return xt.colorSpaceToWorking(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return xt.workingToColorSpace(dn.copy(this),e),Math.round(ht(dn.r*255,0,255))*65536+Math.round(ht(dn.g*255,0,255))*256+Math.round(ht(dn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(dn.copy(this),t);const n=dn.r,s=dn.g,r=dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=jt){xt.workingToColorSpace(dn.copy(this),e);const t=dn.r,n=dn.g,s=dn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(Rr);const n=Ba(Si.h,Rr.h,t),s=Ba(Si.s,Rr.s,t),r=Ba(Si.l,Rr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new De;De.NAMES=ju;class Fl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new Fl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ol extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xn=new I,hi=new I,Ya=new I,fi=new I,os=new I,ls=new I,wc=new I,$a=new I,Za=new I,Ka=new I,Ja=new kt,Qa=new kt,ja=new kt;class Zn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xn.subVectors(e,t),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xn.subVectors(s,t),hi.subVectors(n,t),Ya.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(hi),l=Xn.dot(Ya),c=hi.dot(hi),u=hi.dot(Ya),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(c*l-o*u)*d,v=(a*u-o*l)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ja.setScalar(0),Qa.setScalar(0),ja.setScalar(0),Ja.fromBufferAttribute(e,t),Qa.fromBufferAttribute(e,n),ja.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ja,r.x),a.addScaledVector(Qa,r.y),a.addScaledVector(ja,r.z),a}static isFrontFacing(e,t,n,s){return Xn.subVectors(n,t),hi.subVectors(e,t),Xn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Xn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Zn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,n),ls.subVectors(r,n),$a.subVectors(e,n);const l=os.dot($a),c=ls.dot($a);if(l<=0&&c<=0)return t.copy(n);Za.subVectors(e,s);const u=os.dot(Za),f=ls.dot(Za);if(u>=0&&f<=u)return t.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(os,a);Ka.subVectors(e,r);const p=os.dot(Ka),v=ls.dot(Ka);if(v>=0&&p<=v)return t.copy(r);const M=p*c-l*v;if(M<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(ls,o);const h=u*v-p*f;if(h<=0&&f-u>=0&&p-v>=0)return wc.subVectors(r,s),o=(f-u)/(f-u+(p-v)),t.copy(s).addScaledVector(wc,o);const m=1/(h+M+d);return a=M*m,o=d*m,t.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Pr.subVectors(this.max,Gs),cs.subVectors(e.a,Gs),us.subVectors(e.b,Gs),hs.subVectors(e.c,Gs),yi.subVectors(us,cs),bi.subVectors(hs,us),Ii.subVectors(cs,hs);let t=[0,-yi.z,yi.y,0,-bi.z,bi.y,0,-Ii.z,Ii.y,yi.z,0,-yi.x,bi.z,0,-bi.x,Ii.z,0,-Ii.x,-yi.y,yi.x,0,-bi.y,bi.x,0,-Ii.y,Ii.x,0];return!eo(t,cs,us,hs,Pr)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,cs,us,hs,Pr))?!1:(Lr.crossVectors(yi,bi),t=[Lr.x,Lr.y,Lr.z],eo(t,cs,us,hs,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const di=[new I,new I,new I,new I,new I,new I,new I,new I],qn=new I,Cr=new Qi,cs=new I,us=new I,hs=new I,yi=new I,bi=new I,Ii=new I,Gs=new I,Pr=new I,Lr=new I,Ui=new I;function eo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ui.fromArray(i,r);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Wt=new I,Dr=new ce;let ef=0;class xn extends Ji{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ef++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dh,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=e!==void 0?Ul(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Bh(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):kh(e,this.array)}}class e0 extends xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class t0 extends xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const tf=new Qi,Vs=new I,to=new I;class Fs{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vs.subVectors(e,this.center);const t=Vs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vs.copy(e.center).add(to)),this.expandByPoint(Vs.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nf=0;const Un=new dt,no=new Gt,fs=new I,Ln=new Qi,Ws=new Qi,Jt=new I;class zt extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ih(e)?t0:e0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return no.lookAt(e),no.updateMatrix(),this.applyMatrix4(no.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new et(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&St('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){St("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Ln.min,Ws.min),Ln.expandByPoint(Jt),Jt.addVectors(Ln.max,Ws.max),Ln.expandByPoint(Jt)):(Ln.expandByPoint(Ws.min),Ln.expandByPoint(Ws.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),Jt.add(fs)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&St('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){St("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let w=0;w<n.count;w++)o[w]=new I,l[w]=new I;const u=new I,f=new I,d=new I,p=new ce,v=new ce,M=new ce,h=new I,m=new I;function x(w,b,P){c[w]=c[b]=c[P]=1,u.fromBufferAttribute(n,w),f.fromBufferAttribute(n,b),d.fromBufferAttribute(n,P),p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,b),M.fromBufferAttribute(r,P),f.sub(u),d.sub(u),v.sub(p),M.sub(p);const D=1/(v.x*M.y-M.x*v.y);isFinite(D)&&(h.copy(f).multiplyScalar(M.y).addScaledVector(d,-v.y).multiplyScalar(D),m.copy(d).multiplyScalar(v.x).addScaledVector(f,-M.x).multiplyScalar(D),o[w].add(h),o[b].add(h),o[P].add(h),l[w].add(m),l[b].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let w=0,b=y.length;w<b;++w){const P=y[w],D=P.start,U=P.count;for(let C=D,z=D+U;C<z;C+=3)x(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const S=new I,T=new I,R=new I,g=new I;function _(w){R.fromBufferAttribute(s,w),g.copy(R);const b=o[w];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),T.crossVectors(g,b);const D=T.dot(l[w])<0?-1:1;a.setXYZW(w,S.x,S.y,S.z,D)}for(let w=0,b=n.count;w<b;++w)c[w]&&_(w);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,f=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),M=e.getX(d+1),h=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,h),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,h),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let M=0,h=l.length;M<h;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*u;for(let m=0;m<u;m++)d[v++]=c[p++]}return new xn(d,u,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=new I,sf=new I,rf=new nt;class Ei{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=io.subVectors(n,t).cross(sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(io),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rf.getNormalMatrix(e),s=this.coplanarPoint(io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let af=0;class ji extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ns(),this.name="",this.type="Material",this.blending=sr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=El,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ei().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pi=new I,so=new I,Ir=new I,Ur=new I;class n0{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){so.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(so);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Ur.dot(this.direction),l=-Ur.dot(Ir),c=Ur.lengthSq(),u=Math.abs(1-a*a);let f,d,p,v;if(u>0)if(f=a*l-o,d=a*o-l,v=r*u,f>=0)if(d>=-v)if(d<=v){const M=1/u;f*=M,d*=M,p=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(so).addScaledVector(Ir,d),p}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,p=e.z-a.z,v=t.x-a.x,M=t.y-a.y,h=t.z-a.z,m=n.x-a.x,x=n.y-a.y,y=n.z-a.z,S=Math.abs(l),T=Math.abs(c),R=Math.abs(u);let g,_,w,b,P,D,U,C,z,H,O,J;if(S>=T&&S>=R?(w=l,D=f,z=v,J=m,l>=0?(g=c,_=u,b=d,P=p,U=M,C=h,H=x,O=y):(g=u,_=c,b=p,P=d,U=h,C=M,H=y,O=x)):T>=R?(w=c,D=d,z=M,J=x,c>=0?(g=u,_=l,b=p,P=f,U=h,C=v,H=y,O=m):(g=l,_=u,b=f,P=p,U=v,C=h,H=m,O=y)):(w=u,D=p,z=h,J=y,u>=0?(g=l,_=c,b=f,P=d,U=v,C=M,H=m,O=x):(g=c,_=l,b=d,P=f,U=M,C=v,H=x,O=m)),w===0)return null;const k=g/w,G=_/w,X=1/w,ae=b-k*D,Ae=P-G*D,Y=U-k*z,re=C-G*z,Pe=H-k*J,Ne=O-G*J,fe=Pe*re-Ne*Y,Ue=ae*Ne-Ae*Pe,tt=Y*Ae-re*ae;if(s){if(fe<0||Ue<0||tt<0)return null}else if((fe<0||Ue<0||tt<0)&&(fe>0||Ue>0||tt>0))return null;const ke=fe+Ue+tt;if(ke===0)return null;const Ze=X*(fe*D+Ue*z+tt*J);return(ke>0?Ze<0:Ze>0)?null:this.at(Ze/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class es extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ec=new dt,Ni=new n0,Nr=new Fs,Tc=new I,Fr=new I,zr=new I,Or=new I,ro=new I,Br=new I,Ac=new I,kr=new I;class At extends Gt{constructor(e=new zt,t=new es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],f=r[l];u!==0&&(ro.fromBufferAttribute(f,e),a?Br.addScaledVector(ro,u):Br.addScaledVector(ro.sub(t),u))}t.add(Br)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Nr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Nr,Tc)===null||Ni.origin.distanceToSquared(Tc)>(e.far-e.near)**2))&&(Ec.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Ec),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const h=d[v],m=a[h.materialIndex],x=Math.max(h.start,p.start),y=Math.min(o.count,Math.min(h.start+h.count,p.start+p.count));for(let S=x,T=y;S<T;S+=3){const R=o.getX(S),g=o.getX(S+1),_=o.getX(S+2);s=Hr(this,m,e,n,c,u,f,R,g,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let h=v,m=M;h<m;h+=3){const x=o.getX(h),y=o.getX(h+1),S=o.getX(h+2);s=Hr(this,a,e,n,c,u,f,x,y,S),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const h=d[v],m=a[h.materialIndex],x=Math.max(h.start,p.start),y=Math.min(l.count,Math.min(h.start+h.count,p.start+p.count));for(let S=x,T=y;S<T;S+=3){const R=S,g=S+1,_=S+2;s=Hr(this,m,e,n,c,u,f,R,g,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let h=v,m=M;h<m;h+=3){const x=h,y=h+1,S=h+2;s=Hr(this,a,e,n,c,u,f,x,y,S),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function of(i,e,t,n,s,r,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qi,o),l===null)return null;kr.copy(o),kr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:i}}function Hr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Fr),i.getVertexPosition(l,zr),i.getVertexPosition(c,Or);const u=of(i,e,t,n,Fr,zr,Or,Ac);if(u){const f=new I;Zn.getBarycoord(Ac,Fr,zr,Or,f),s&&(u.uv=Zn.getInterpolatedAttribute(s,o,l,c,f,new ce)),r&&(u.uv1=Zn.getInterpolatedAttribute(r,o,l,c,f,new ce)),a&&(u.normal=Zn.getInterpolatedAttribute(a,o,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new I,materialIndex:0};Zn.getNormal(Fr,zr,Or,d.normal),u.face=d,u.barycoord=f}return u}class zs extends gn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=nn,u=nn,f,d){super(null,a,o,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends xn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ds=new dt,Cc=new dt,Gr=[],Pc=new Qi,lf=new dt,Xs=new At,qs=new Fs;class i0 extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),Pc.copy(e.boundingBox).applyMatrix4(ds),this.boundingBox.union(Pc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ds),qs.copy(e.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Cc.multiplyMatrices(n,ds),Xs.matrixWorld=Cc,Xs.raycast(e,Gr);for(let a=0,o=Gr.length;a<o;a++){const l=Gr[a];l.instanceId=r,l.object=this,t.push(l)}Gr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zs(new Float32Array(s*this.count),s,this.count,Pl,Kn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fi=new Fs,cf=new ce(.5,.5),Vr=new I;class Rs{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,r=new Ei,a=new Ei){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],p=r[7],v=r[8],M=r[9],h=r[10],m=r[11],x=r[12],y=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-a,p-u,m-v,T-x).normalize(),s[1].setComponents(c+a,p+u,m+v,T+x).normalize(),s[2].setComponents(c+o,p+f,m+M,T+y).normalize(),s[3].setComponents(c-o,p-f,m-M,T-y).normalize(),n)s[4].setComponents(l,d,h,S).normalize(),s[5].setComponents(c-l,p-d,m-h,T-S).normalize();else if(s[4].setComponents(c-l,p-d,m-h,T-S).normalize(),t===Jn)s[5].setComponents(c+l,p+d,m+h,T+S).normalize();else if(t===pr)s[5].setComponents(l,d,h,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);const t=cf.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Vr.x=s.normal.x>0?e.max.x:e.min.x,Vr.y=s.normal.y>0?e.max.y:e.min.y,Vr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Lc=new dt;class zl{constructor(){this.coordinateSystem=Jn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Lc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Rs),n[s].setFromProjectionMatrix(Lc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Rs),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new zl().copy(this)}}class uf extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dc=new dt,ll=new n0,Wr=new Fs,Xr=new I;class s0 extends Gt{constructor(e=new zt,t=new uf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Wr.radius+=r,e.ray.intersectsSphere(Wr)===!1)return;Dc.copy(s).invert(),ll.copy(e.ray).applyMatrix4(Dc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=d,M=p;v<M;v++){const h=c.getX(v);Xr.fromBufferAttribute(f,h),Ic(Xr,h,l,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=d,M=p;v<M;v++)Xr.fromBufferAttribute(f,v),Ic(Xr,v,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ic(i,e,t,n,s,r,a){const o=ll.distanceSqToPoint(i);if(o<t){const l=new I;ll.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class r0 extends gn{constructor(e=[],t=Es,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rr extends gn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Cs extends gn{constructor(e,t,n=oi,s,r,a,o=nn,l=nn,c,u=Ri,f=1){if(u!==Ri&&u!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class a0 extends Cs{constructor(e,t=oi,n=Es,s,r,a=nn,o=nn,l,c=Ri){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class o0 extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hn extends zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2));function v(M,h,m,x,y,S,T,R,g,_,w){const b=S/g,P=T/_,D=S/2,U=T/2,C=R/2,z=g+1,H=_+1;let O=0,J=0;const k=new I;for(let G=0;G<H;G++){const X=G*P-U;for(let ae=0;ae<z;ae++){const Ae=ae*b-D;k[M]=Ae*x,k[h]=X*y,k[m]=C,c.push(k.x,k.y,k.z),k[M]=0,k[h]=0,k[m]=R>0?1:-1,u.push(k.x,k.y,k.z),f.push(ae/g),f.push(1-G/_),O+=1}}for(let G=0;G<_;G++)for(let X=0;X<g;X++){const ae=d+X+z*G,Ae=d+X+z*(G+1),Y=d+(X+1)+z*(G+1),re=d+(X+1)+z*G;l.push(ae,Ae,re),l.push(Ae,Y,re),J+=6}o.addGroup(p,J,w),p+=J,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Os extends zt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],u=t/2,f=Math.PI/2*e,d=t,p=2*f+d,v=n*2+r,M=s+1,h=new I,m=new I;for(let x=0;x<=v;x++){let y=0,S=0,T=0,R=0;if(x<=n){const w=x/n,b=w*Math.PI/2;S=-u-e*Math.cos(b),T=e*Math.sin(b),R=-e*Math.cos(b),y=w*f}else if(x<=n+r){const w=(x-n)/r;S=-u+w*t,T=e,R=0,y=f+w*d}else{const w=(x-n-r)/n,b=w*Math.PI/2;S=u+e*Math.sin(b),T=e*Math.cos(b),R=e*Math.sin(b),y=f+d+w*f}const g=Math.max(0,Math.min(1,y/p));let _=0;x===0?_=.5/s:x===v&&(_=-.5/s);for(let w=0;w<=s;w++){const b=w/s,P=b*Math.PI*2,D=Math.sin(P),U=Math.cos(P);m.x=-T*U,m.y=S,m.z=T*D,o.push(m.x,m.y,m.z),h.set(-T*U,R,T*D),h.normalize(),l.push(h.x,h.y,h.z),c.push(b+_,g)}if(x>0){const w=(x-1)*M;for(let b=0;b<s;b++){const P=w+b,D=w+b+1,U=x*M+b,C=x*M+b+1;a.push(P,D,U),a.push(D,C,U)}}}this.setIndex(a),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ln extends zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],p=[];let v=0;const M=[],h=n/2;let m=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new et(f,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(p,2));function x(){const S=new I,T=new I;let R=0;const g=(t-e)/n;for(let _=0;_<=r;_++){const w=[],b=_/r,P=b*(t-e)+e;for(let D=0;D<=s;D++){const U=D/s,C=U*l+o,z=Math.sin(C),H=Math.cos(C);T.x=P*z,T.y=-b*n+h,T.z=P*H,f.push(T.x,T.y,T.z),S.set(z,g,H).normalize(),d.push(S.x,S.y,S.z),p.push(U,1-b),w.push(v++)}M.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){const b=M[w][_],P=M[w+1][_],D=M[w+1][_+1],U=M[w][_+1];(e>0||w!==0)&&(u.push(b,P,U),R+=3),(t>0||w!==r-1)&&(u.push(P,D,U),R+=3)}c.addGroup(m,R,0),m+=R}function y(S){const T=v,R=new ce,g=new I;let _=0;const w=S===!0?e:t,b=S===!0?1:-1;for(let D=1;D<=s;D++)f.push(0,h*b,0),d.push(0,b,0),p.push(.5,.5),v++;const P=v;for(let D=0;D<=s;D++){const C=D/s*l+o,z=Math.cos(C),H=Math.sin(C);g.x=w*H,g.y=h*b,g.z=w*z,f.push(g.x,g.y,g.z),d.push(0,b,0),R.x=z*.5+.5,R.y=H*.5*b+.5,p.push(R.x,R.y),v++}for(let D=0;D<s;D++){const U=T+D,C=P+D;S===!0?u.push(C,C+1,U):u.push(C+1,C,U),_+=3}c.addGroup(m,_,S===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mr extends ln{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new mr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta extends zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new I,S=new I,T=new I;for(let R=0;R<t.length;R+=3)p(t[R+0],y),p(t[R+1],S),p(t[R+2],T),l(y,S,T,x)}function l(x,y,S,T){const R=T+1,g=[];for(let _=0;_<=R;_++){g[_]=[];const w=x.clone().lerp(S,_/R),b=y.clone().lerp(S,_/R),P=R-_;for(let D=0;D<=P;D++)D===0&&_===R?g[_][D]=w:g[_][D]=w.clone().lerp(b,D/P)}for(let _=0;_<R;_++)for(let w=0;w<2*(R-_)-1;w++){const b=Math.floor(w/2);w%2===0?(d(g[_][b+1]),d(g[_+1][b]),d(g[_][b])):(d(g[_][b+1]),d(g[_+1][b+1]),d(g[_+1][b]))}}function c(x){const y=new I;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(x),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function u(){const x=new I;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const S=h(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;a.push(S,1-T)}v(),f()}function f(){for(let x=0;x<a.length;x+=6){const y=a[x+0],S=a[x+2],T=a[x+4],R=Math.max(y,S,T),g=Math.min(y,S,T);R>.9&&g<.1&&(y<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function p(x,y){const S=x*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function v(){const x=new I,y=new I,S=new I,T=new I,R=new ce,g=new ce,_=new ce;for(let w=0,b=0;w<r.length;w+=9,b+=6){x.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),S.set(r[w+6],r[w+7],r[w+8]),R.set(a[b+0],a[b+1]),g.set(a[b+2],a[b+3]),_.set(a[b+4],a[b+5]),T.copy(x).add(y).add(S).divideScalar(3);const P=h(T);M(R,b+0,x,P),M(g,b+2,y,P),M(_,b+4,S,P)}}function M(x,y,S,T){T<0&&x.x===1&&(a[y]=x.x-1),S.x===0&&S.z===0&&(a[y]=T/2/Math.PI+.5)}function h(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.vertices,e.indices,e.radius,e.detail)}}class li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,p=(a-u)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ce:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,s=[],r=[],a=[],o=new I,l=new dt;for(let p=0;p<=e;p++){const v=p/e;s[p]=this.getTangentAt(v,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(ht(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(ht(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],p*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Ol extends li{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*u-p*f+this.aX,c=d*f+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hf extends Ol{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Bl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,p*=u,s(a,o,d,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Uc=new I,Nc=new I,ao=new Bl,oo=new Bl,lo=new Bl;class Aa extends li{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Nc.subVectors(s[0],s[1]).add(s[0]),c=Nc);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Uc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Uc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),M=Math.pow(f.distanceToSquared(d),p),h=Math.pow(d.distanceToSquared(u),p);M<1e-4&&(M=1),v<1e-4&&(v=M),h<1e-4&&(h=M),ao.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,v,M,h),oo.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,v,M,h),lo.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,v,M,h)}else this.curveType==="catmullrom"&&(ao.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),oo.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),lo.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(ao.calc(l),oo.calc(l),lo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ff(i,e){const t=1-i;return t*t*e}function df(i,e){return 2*(1-i)*i*e}function pf(i,e){return i*i*e}function ar(i,e,t,n){return ff(i,e)+df(i,t)+pf(i,n)}function mf(i,e){const t=1-i;return t*t*t*e}function gf(i,e){const t=1-i;return 3*t*t*i*e}function xf(i,e){return 3*(1-i)*i*i*e}function vf(i,e){return i*i*i*e}function or(i,e,t,n,s){return mf(i,e)+gf(i,t)+xf(i,n)+vf(i,s)}class l0 extends li{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(e,s.x,r.x,a.x,o.x),or(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _f extends li{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(e,s.x,r.x,a.x,o.x),or(e,s.y,r.y,a.y,o.y),or(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class c0 extends li{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mf extends li{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class u0 extends li{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ar(e,s.x,r.x,a.x),ar(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class h0 extends li{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ar(e,s.x,r.x,a.x),ar(e,s.y,r.y,a.y),ar(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f0 extends li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Fc(o,l.x,c.x,u.x,f.x),Fc(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ce().fromArray(s))}return this}}var Ea=Object.freeze({__proto__:null,ArcCurve:hf,CatmullRomCurve3:Aa,CubicBezierCurve:l0,CubicBezierCurve3:_f,EllipseCurve:Ol,LineCurve:c0,LineCurve3:Mf,QuadraticBezierCurve:u0,QuadraticBezierCurve3:h0,SplineCurve:f0});class Sf extends li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ea[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ea[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class zc extends Sf{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new c0(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new u0(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new l0(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new f0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Ol(e,t,n,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ps extends zc{constructor(e){super(e),this.uuid=Ns(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new zc().fromJSON(s))}return this}}function yf(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=d0(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Af(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,f=l;for(let d=t;d<s;d+=t){const p=i[d],v=i[d+1];p<o&&(o=p),v<l&&(l=v),p>u&&(u=p),v>f&&(f=v)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return gr(r,a,t,o,l,c,0),a}function d0(i,e,t,n,s){let r;if(s===Of(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Oc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Oc(a/n|0,i[a],i[a+1],r);return r&&Ls(r,r.next)&&(vr(r),r=r.next),r}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ls(t,t.next)||Ft(t.prev,t,t.next)===0)){if(vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Df(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?wf(i,n,s,r):bf(i)){e.push(l.i,i.i,c.i),vr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Ef(Zi(i),e),gr(i,e,t,n,s,r,2)):a===2&&Tf(i,e,t,n,s,r):gr(Zi(i),e,t,n,s,r,1);break}}}function bf(i){const e=i.prev,t=i,n=i.next;if(Ft(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),d=Math.max(s,r,a),p=Math.max(o,l,c);let v=n.next;for(;v!==e;){if(v.x>=u&&v.x<=d&&v.y>=f&&v.y<=p&&er(s,o,r,l,a,c,v.x,v.y)&&Ft(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function wf(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Ft(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,d=a.y,p=Math.min(o,l,c),v=Math.min(u,f,d),M=Math.max(o,l,c),h=Math.max(u,f,d),m=cl(p,v,e,t,n),x=cl(M,h,e,t,n);let y=i.prevZ,S=i.nextZ;for(;y&&y.z>=m&&S&&S.z<=x;){if(y.x>=p&&y.x<=M&&y.y>=v&&y.y<=h&&y!==s&&y!==a&&er(o,u,l,f,c,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=p&&S.x<=M&&S.y>=v&&S.y<=h&&S!==s&&S!==a&&er(o,u,l,f,c,d,S.x,S.y)&&Ft(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=m;){if(y.x>=p&&y.x<=M&&y.y>=v&&y.y<=h&&y!==s&&y!==a&&er(o,u,l,f,c,d,y.x,y.y)&&Ft(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=x;){if(S.x>=p&&S.x<=M&&S.y>=v&&S.y<=h&&S!==s&&S!==a&&er(o,u,l,f,c,d,S.x,S.y)&&Ft(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ef(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ls(n,s)&&m0(n,t,t.next,s)&&xr(n,s)&&xr(s,n)&&(e.push(n.i,t.i,s.i),vr(t),vr(t.next),t=i=s),t=t.next}while(t!==i);return Zi(t)}function Tf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Nf(a,o)){let l=g0(a,o);a=Zi(a,a.next),l=Zi(l,l.next),gr(a,e,t,n,s,r,0),gr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Af(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=d0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Uf(c))}s.sort(Rf);for(let r=0;r<s.length;r++)t=Cf(s[r],t);return t}function Rf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Cf(i,e){const t=Pf(i,e);if(!t)return e;const n=g0(t,i);return Zi(n,n.next),Zi(t,t.next)}function Pf(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Ls(i,t))return t;do{if(Ls(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&p0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);xr(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&Lf(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function Lf(i,e){return Ft(i.prev,i,e.prev)<0&&Ft(e.next,i,i.next)<0}function Df(i,e,t,n){let s=i;do s.z===0&&(s.z=cl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,If(s)}function If(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function cl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Uf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function p0(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function er(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&p0(i,e,t,n,s,r,a,o)}function Nf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ff(i,e)&&(xr(i,e)&&xr(e,i)&&zf(i,e)&&(Ft(i.prev,i,e.prev)||Ft(i,e.prev,e))||Ls(i,e)&&Ft(i.prev,i,i.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ls(i,e){return i.x===e.x&&i.y===e.y}function m0(i,e,t,n){const s=Yr(Ft(i,e,t)),r=Yr(Ft(i,e,n)),a=Yr(Ft(t,n,i)),o=Yr(Ft(t,n,e));return!!(s!==r&&a!==o||s===0&&qr(i,t,e)||r===0&&qr(i,n,e)||a===0&&qr(t,i,n)||o===0&&qr(t,e,n))}function qr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Yr(i){return i>0?1:i<0?-1:0}function Ff(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&m0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xr(i,e){return Ft(i.prev,i,i.next)<0?Ft(i,e,i.next)>=0&&Ft(i,i.prev,e)>=0:Ft(i,e,i.prev)<0||Ft(i,i.next,e)<0}function zf(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function g0(i,e){const t=ul(i.i,i.x,i.y),n=ul(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Oc(i,e,t,n){const s=ul(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ul(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Of(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Bf{static triangulate(e,t,n=2){return yf(e,t,n)}}class Ms{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ms.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Bc(e),kc(n,e);let a=e.length;t.forEach(Bc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,kc(n,t[l]);const o=Bf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Bc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function kc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Mr extends zt{constructor(e=new Ps([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,h=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:kf;let y,S=!1,T,R,g,_;if(m){y=m.getSpacedPoints(u),S=!0,d=!1;const ie=m.isCatmullRomCurve3?m.closed:!1;T=m.computeFrenetFrames(u,ie),R=new I,g=new I,_=new I}d||(h=0,p=0,v=0,M=0);const w=o.extractPoints(c);let b=w.shape;const P=w.holes;if(!Ms.isClockWise(b)){b=b.reverse();for(let ie=0,ge=P.length;ie<ge;ie++){const pe=P[ie];Ms.isClockWise(pe)&&(P[ie]=pe.reverse())}}function U(ie){const pe=10000000000000001e-36;let Ie=ie[0];for(let xe=1;xe<=ie.length;xe++){const Ye=xe%ie.length,Be=ie[Ye],ct=Be.x-Ie.x,ut=Be.y-Ie.y,ve=ct*ct+ut*ut,N=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(Ie.x),Math.abs(Ie.y)),ft=pe*N*N;if(ve<=ft){ie.splice(Ye,1),xe--;continue}Ie=Be}}U(b),P.forEach(U);const C=P.length,z=b;for(let ie=0;ie<C;ie++){const ge=P[ie];b=b.concat(ge)}function H(ie,ge,pe){return ge||St("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ge,pe)}const O=b.length;function J(ie,ge,pe){let Ie,xe,Ye;const Be=ie.x-ge.x,ct=ie.y-ge.y,ut=pe.x-ie.x,ve=pe.y-ie.y,N=Be*Be+ct*ct,ft=Be*ve-ct*ut;if(Math.abs(ft)>Number.EPSILON){const $e=Math.sqrt(N),bt=Math.sqrt(ut*ut+ve*ve),Se=ge.x-ct/$e,Ot=ge.y+Be/$e,qe=pe.x-ve/bt,Ke=pe.y+ut/bt,L=((qe-Se)*ve-(Ke-Ot)*ut)/(Be*ve-ct*ut);Ie=Se+Be*L-ie.x,xe=Ot+ct*L-ie.y;const E=Ie*Ie+xe*xe;if(E<=2)return new ce(Ie,xe);Ye=Math.sqrt(E/2)}else{let $e=!1;Be>Number.EPSILON?ut>Number.EPSILON&&($e=!0):Be<-Number.EPSILON?ut<-Number.EPSILON&&($e=!0):Math.sign(ct)===Math.sign(ve)&&($e=!0),$e?(Ie=-ct,xe=Be,Ye=Math.sqrt(N)):(Ie=Be,xe=ct,Ye=Math.sqrt(N/2))}return new ce(Ie/Ye,xe/Ye)}const k=[];for(let ie=0,ge=z.length,pe=ge-1,Ie=ie+1;ie<ge;ie++,pe++,Ie++)pe===ge&&(pe=0),Ie===ge&&(Ie=0),k[ie]=J(z[ie],z[pe],z[Ie]);const G=[];let X,ae=k.concat();for(let ie=0,ge=C;ie<ge;ie++){const pe=P[ie];X=[];for(let Ie=0,xe=pe.length,Ye=xe-1,Be=Ie+1;Ie<xe;Ie++,Ye++,Be++)Ye===xe&&(Ye=0),Be===xe&&(Be=0),X[Ie]=J(pe[Ie],pe[Ye],pe[Be]);G.push(X),ae=ae.concat(X)}let Ae;if(h===0)Ae=Ms.triangulateShape(z,P);else{const ie=[],ge=[];for(let pe=0;pe<h;pe++){const Ie=pe/h,xe=p*Math.cos(Ie*Math.PI/2),Ye=v*Math.sin(Ie*Math.PI/2)+M;for(let Be=0,ct=z.length;Be<ct;Be++){const ut=H(z[Be],k[Be],Ye);Ue(ut.x,ut.y,-xe),Ie===0&&ie.push(ut)}for(let Be=0,ct=C;Be<ct;Be++){const ut=P[Be];X=G[Be];const ve=[];for(let N=0,ft=ut.length;N<ft;N++){const $e=H(ut[N],X[N],Ye);Ue($e.x,$e.y,-xe),Ie===0&&ve.push($e)}Ie===0&&ge.push(ve)}}Ae=Ms.triangulateShape(ie,ge)}const Y=Ae.length,re=v+M;for(let ie=0;ie<O;ie++){const ge=d?H(b[ie],ae[ie],re):b[ie];S?(g.copy(T.normals[0]).multiplyScalar(ge.x),R.copy(T.binormals[0]).multiplyScalar(ge.y),_.copy(y[0]).add(g).add(R),Ue(_.x,_.y,_.z)):Ue(ge.x,ge.y,0)}for(let ie=1;ie<=u;ie++)for(let ge=0;ge<O;ge++){const pe=d?H(b[ge],ae[ge],re):b[ge];S?(g.copy(T.normals[ie]).multiplyScalar(pe.x),R.copy(T.binormals[ie]).multiplyScalar(pe.y),_.copy(y[ie]).add(g).add(R),Ue(_.x,_.y,_.z)):Ue(pe.x,pe.y,f/u*ie)}for(let ie=h-1;ie>=0;ie--){const ge=ie/h,pe=p*Math.cos(ge*Math.PI/2),Ie=v*Math.sin(ge*Math.PI/2)+M;for(let xe=0,Ye=z.length;xe<Ye;xe++){const Be=H(z[xe],k[xe],Ie);Ue(Be.x,Be.y,f+pe)}for(let xe=0,Ye=P.length;xe<Ye;xe++){const Be=P[xe];X=G[xe];for(let ct=0,ut=Be.length;ct<ut;ct++){const ve=H(Be[ct],X[ct],Ie);S?Ue(ve.x,ve.y+y[u-1].y,y[u-1].x+pe):Ue(ve.x,ve.y,f+pe)}}}Pe(),Ne();function Pe(){const ie=s.length/3;if(d){let ge=0,pe=O*ge;for(let Ie=0;Ie<Y;Ie++){const xe=Ae[Ie];tt(xe[2]+pe,xe[1]+pe,xe[0]+pe)}ge=u+h*2,pe=O*ge;for(let Ie=0;Ie<Y;Ie++){const xe=Ae[Ie];tt(xe[0]+pe,xe[1]+pe,xe[2]+pe)}}else{for(let ge=0;ge<Y;ge++){const pe=Ae[ge];tt(pe[2],pe[1],pe[0])}for(let ge=0;ge<Y;ge++){const pe=Ae[ge];tt(pe[0]+O*u,pe[1]+O*u,pe[2]+O*u)}}n.addGroup(ie,s.length/3-ie,0)}function Ne(){const ie=s.length/3;let ge=0;fe(z,ge),ge+=z.length;for(let pe=0,Ie=P.length;pe<Ie;pe++){const xe=P[pe];fe(xe,ge),ge+=xe.length}n.addGroup(ie,s.length/3-ie,1)}function fe(ie,ge){let pe=ie.length;for(;--pe>=0;){const Ie=pe;let xe=pe-1;xe<0&&(xe=ie.length-1);for(let Ye=0,Be=u+h*2;Ye<Be;Ye++){const ct=O*Ye,ut=O*(Ye+1),ve=ge+Ie+ct,N=ge+xe+ct,ft=ge+xe+ut,$e=ge+Ie+ut;ke(ve,N,ft,$e)}}}function Ue(ie,ge,pe){l.push(ie),l.push(ge),l.push(pe)}function tt(ie,ge,pe){Ze(ie),Ze(ge),Ze(pe);const Ie=s.length/3,xe=x.generateTopUV(n,s,Ie-3,Ie-2,Ie-1);rt(xe[0]),rt(xe[1]),rt(xe[2])}function ke(ie,ge,pe,Ie){Ze(ie),Ze(ge),Ze(Ie),Ze(ge),Ze(pe),Ze(Ie);const xe=s.length/3,Ye=x.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);rt(Ye[0]),rt(Ye[1]),rt(Ye[3]),rt(Ye[1]),rt(Ye[2]),rt(Ye[3])}function Ze(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function rt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hf(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ea[s.type]().fromJSON(s)),new Mr(n,e.options)}}const kf={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ce(r,a),new ce(o,l),new ce(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],d=e[s*3],p=e[s*3+1],v=e[s*3+2],M=e[r*3],h=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-f),new ce(d,1-v),new ce(M,1-m)]:[new ce(o,1-l),new ce(u,1-f),new ce(p,1-v),new ce(h,1-m)]}};function Hf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class kl extends Ta{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kl(e.radius,e.detail)}}class Hl extends zt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ht(s,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],u=1/t,f=new I,d=new ce,p=new I,v=new I,M=new I;let h=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:h=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,p.x=m*1,p.y=-h,p.z=m*0,M.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:h=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,p.x=m*1,p.y=-h,p.z=m*0,v.copy(p),p.x+=M.x,p.y+=M.y,p.z+=M.z,p.normalize(),l.push(p.x,p.y,p.z),M.copy(v)}for(let x=0;x<=t;x++){const y=n+x*u*s,S=Math.sin(y),T=Math.cos(y);for(let R=0;R<=e.length-1;R++){f.x=e[R].x*S,f.y=e[R].y,f.z=e[R].x*T,a.push(f.x,f.y,f.z),d.x=x/t,d.y=R/(e.length-1),o.push(d.x,d.y);const g=l[3*R+0]*S,_=l[3*R+1],w=l[3*R+0]*T;c.push(g,_,w)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const S=y+x*e.length,T=S,R=S+e.length,g=S+e.length+1,_=S+1;r.push(T,R,_),r.push(g,_,R)}this.setIndex(r),this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(o,2)),this.setAttribute("normal",new et(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.points,e.segments,e.phiStart,e.phiLength)}}class Wi extends Ta{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wi(e.radius,e.detail)}}class ts extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,p=[],v=[],M=[],h=[];for(let m=0;m<u;m++){const x=m*d-a;for(let y=0;y<c;y++){const S=y*f-r;v.push(S,-x,0),M.push(0,0,1),h.push(y/o),h.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const y=x+c*m,S=x+c*(m+1),T=x+1+c*(m+1),R=x+1+c*m;p.push(y,S,R),p.push(S,T,R)}this.setIndex(p),this.setAttribute("position",new et(v,3)),this.setAttribute("normal",new et(M,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ci extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new I,d=new I,p=[],v=[],M=[],h=[];for(let m=0;m<=n;m++){const x=[],y=m/n,S=a+y*o,T=e*Math.cos(S),R=Math.sqrt(e*e-T*T);let g=0;m===0&&a===0?g=.5/t:m===n&&l===Math.PI&&(g=-.5/t);for(let _=0;_<=t;_++){const w=_/t,b=s+w*r;f.x=-R*Math.cos(b),f.y=T,f.z=R*Math.sin(b),v.push(f.x,f.y,f.z),d.copy(f).normalize(),M.push(d.x,d.y,d.z),h.push(w+g,1-y),x.push(c++)}u.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const y=u[m][x+1],S=u[m][x],T=u[m+1][x],R=u[m+1][x+1];(m!==0||a>0)&&p.push(y,S,R),(m!==n-1||l<Math.PI)&&p.push(S,T,R)}this.setIndex(p),this.setAttribute("position",new et(v,3)),this.setAttribute("normal",new et(M,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ra extends zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],d=new I,p=new I,v=new I;for(let M=0;M<=n;M++){const h=a+M/n*o;for(let m=0;m<=s;m++){const x=m/s*r;p.x=(e+t*Math.cos(h))*Math.cos(x),p.y=(e+t*Math.cos(h))*Math.sin(x),p.z=t*Math.sin(h),c.push(p.x,p.y,p.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),v.subVectors(p,d).normalize(),u.push(v.x,v.y,v.z),f.push(m/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let h=1;h<=s;h++){const m=(s+1)*M+h-1,x=(s+1)*(M-1)+h-1,y=(s+1)*(M-1)+h,S=(s+1)*M+h;l.push(m,x,S),l.push(x,y,S)}this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Gl extends zt{constructor(e=new h0(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new ce;let u=new I;const f=[],d=[],p=[],v=[];M(),this.setIndex(v),this.setAttribute("position",new et(f,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(p,2));function M(){for(let y=0;y<t;y++)h(y);h(r===!1?t:0),x(),m()}function h(y){u=e.getPointAt(y/t,u);const S=a.normals[y],T=a.binormals[y];for(let R=0;R<=s;R++){const g=R/s*Math.PI*2,_=Math.sin(g),w=-Math.cos(g);l.x=w*S.x+_*T.x,l.y=w*S.y+_*T.y,l.z=w*S.z+_*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let y=1;y<=t;y++)for(let S=1;S<=s;S++){const T=(s+1)*(y-1)+(S-1),R=(s+1)*y+(S-1),g=(s+1)*y+S,_=(s+1)*(y-1)+S;v.push(T,R,_),v.push(R,g,_)}}function x(){for(let y=0;y<=t;y++)for(let S=0;S<=s;S++)c.x=y/t,c.y=S/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Gl(new Ea[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ds(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Hc(s))s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Hc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function _n(i){const e={};for(let t=0;t<i.length;t++){const n=Ds(i[t]);for(const s in n)e[s]=n[s]}return e}function Hc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function x0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const hl={clone:Ds,merge:_n};var Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qt extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Xf extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Is extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qf extends ji{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yf extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $f extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vl extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Zf extends Vl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const co=new dt,Gc=new I,Vc=new I;class v0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Gc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gc),Vc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(co,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===pr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $r=new I,Zr=new Ht,jn=new I;class _0 extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($r,Zr,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Zr,jn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose($r,Zr,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($r,Zr,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new I,Wc=new ce,Xc=new ce;class bn extends _0{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Kf extends v0{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=wa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Jf extends Vl{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Qf extends v0{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}}class Wl extends Vl{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class M0 extends _0{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ps=-90,ms=1;class fl extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(ps,ms,e,t);s.layers=this.layers,this.add(s);const r=new bn(ps,ms,e,t);r.layers=this.layers,this.add(r);const a=new bn(ps,ms,e,t);a.layers=this.layers,this.add(a);const o=new bn(ps,ms,e,t);o.layers=this.layers,this.add(o);const l=new bn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new bn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class jf extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function qc(i,e,t,n){const s=ed(n);switch(t){case Xu:return i*e;case Pl:return i*e/s.components*s.byteLength;case Ll:return i*e/s.components*s.byteLength;case $i:return i*e*2/s.components*s.byteLength;case Dl:return i*e*2/s.components*s.byteLength;case qu:return i*e*3/s.components*s.byteLength;case Tn:return i*e*4/s.components*s.byteLength;case Il:return i*e*4/s.components*s.byteLength;case ca:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Do:case Uo:return Math.max(i,16)*Math.max(e,8)/4;case Lo:case Io:return Math.max(i,8)*Math.max(e,8)/2;case No:case Fo:case Oo:case Bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zo:case va:case ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $o:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case tl:case nl:case il:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sl:case rl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _a:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ed(i){switch(i){case En:case Hu:return{byteLength:1,components:1};case dr:case Gu:case Mn:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case oi:case Al:case Kn:return{byteLength:4,components:1};case Vu:case Wu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);function S0(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function td(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<f.length;p++){const v=f[d],M=f[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,f[d]=M)}f.length=d+1;for(let p=0,v=f.length;p<v;p++){const M=f[p];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var nd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,id=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ld=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ud=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,md=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Td=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Id=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Yd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ep=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ym=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:nd,alphahash_pars_fragment:id,alphamap_fragment:sd,alphamap_pars_fragment:rd,alphatest_fragment:ad,alphatest_pars_fragment:od,aomap_fragment:ld,aomap_pars_fragment:cd,batching_pars_vertex:ud,batching_vertex:hd,begin_vertex:fd,beginnormal_vertex:dd,bsdfs:pd,iridescence_fragment:md,bumpmap_pars_fragment:gd,clipping_planes_fragment:xd,clipping_planes_pars_fragment:vd,clipping_planes_pars_vertex:_d,clipping_planes_vertex:Md,color_fragment:Sd,color_pars_fragment:yd,color_pars_vertex:bd,color_vertex:wd,common:Ed,defaultnormal_vertex:Td,displacementmap_pars_vertex:Ad,displacementmap_vertex:Rd,emissivemap_fragment:Cd,emissivemap_pars_fragment:Pd,colorspace_fragment:Ld,colorspace_pars_fragment:Dd,envmap_fragment:Id,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:Yd,envmap_vertex:zd,fog_vertex:Od,fog_pars_vertex:Bd,fog_fragment:kd,fog_pars_fragment:Hd,gradientmap_pars_fragment:Gd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Wd,lights_lambert_pars_fragment:Xd,lights_pars_begin:qd,lights_toon_fragment:$d,lights_toon_pars_fragment:Zd,lights_phong_fragment:Kd,lights_phong_pars_fragment:Jd,lights_physical_fragment:Qd,lights_physical_pars_fragment:jd,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:np,lightprobes_pars_fragment:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:op,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:up,map_particle_pars_fragment:hp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:dp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:xp,morphtarget_vertex:vp,normal_fragment_begin:_p,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:yp,normal_vertex:bp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Rp,opaque_fragment:Cp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Ip,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:Op,shadowmap_vertex:Bp,shadowmask_pars_fragment:kp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Vp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:$p,transmission_fragment:Zp,transmission_pars_fragment:Kp,uv_pars_fragment:Jp,uv_pars_vertex:Qp,uv_vertex:jp,worldpos_vertex:em,background_vert:tm,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:am,depth_vert:om,depth_frag:lm,distance_vert:cm,distance_frag:um,equirect_vert:hm,equirect_frag:fm,linedashed_vert:dm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:xm,meshlambert_frag:vm,meshmatcap_vert:_m,meshmatcap_frag:Mm,meshnormal_vert:Sm,meshnormal_frag:ym,meshphong_vert:bm,meshphong_frag:wm,meshphysical_vert:Em,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:Rm,points_vert:Cm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Im,sprite_frag:Um},Ce={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ti={basic:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:_n([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:_n([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:_n([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new De(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:_n([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:_n([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:_n([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:_n([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:_n([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:_n([Ce.common,Ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:_n([Ce.lights,Ce.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ti.physical={uniforms:_n([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Kr={r:0,b:0,g:0},Nm=new dt,y0=new nt;y0.set(-1,0,0,0,1,0,0,0,1);function Fm(i,e,t,n,s,r){const a=new De(0);let o=s===!0?0:1,l,c,u=null,f=0,d=null;function p(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const S=x.backgroundBlurriness>0;y=e.get(y,S)}return y}function v(x){let y=!1;const S=p(x);S===null?h(a,o):S&&S.isColor&&(h(S,1),y=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(x,y){const S=p(y);S&&S.isCubeTexture?(c===void 0&&(c=new At(new Hn(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Ds(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(y0),c.material.toneMapped=xt.getTransfer(S.colorSpace)!==Et,(u!==S||f!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new At(new ts(2,2),new qt({name:"BackgroundMaterial",uniforms:Ds(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=xt.getTransfer(S.colorSpace)!==Et,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function h(x,y){x.getRGB(Kr,x0(i)),t.buffers.color.setClear(Kr.r,Kr.g,Kr.b,y,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,h(a,o)},render:v,addToRenderList:M,dispose:m}}function zm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(P,D,U,C,z){let H=!1;const O=f(P,C,U,D);r!==O&&(r=O,c(r.object)),H=p(P,C,U,z),H&&v(P,C,U,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(P,D,U,C),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function f(P,D,U,C){const z=C.wireframe===!0;let H=n[D.id];H===void 0&&(H={},n[D.id]=H);const O=P.isInstancedMesh===!0?P.id:0;let J=H[O];J===void 0&&(J={},H[O]=J);let k=J[U.id];k===void 0&&(k={},J[U.id]=k);let G=k[z];return G===void 0&&(G=d(l()),k[z]=G),G}function d(P){const D=[],U=[],C=[];for(let z=0;z<t;z++)D[z]=0,U[z]=0,C[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:C,object:P,attributes:{},index:null}}function p(P,D,U,C){const z=r.attributes,H=D.attributes;let O=0;const J=U.getAttributes();for(const k in J)if(J[k].location>=0){const X=z[k];let ae=H[k];if(ae===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),X===void 0||X.attribute!==ae||ae&&X.data!==ae.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function v(P,D,U,C){const z={},H=D.attributes;let O=0;const J=U.getAttributes();for(const k in J)if(J[k].location>=0){let X=H[k];X===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));const ae={};ae.attribute=X,X&&X.data&&(ae.data=X.data),z[k]=ae,O++}r.attributes=z,r.attributesNum=O,r.index=C}function M(){const P=r.newAttributes;for(let D=0,U=P.length;D<U;D++)P[D]=0}function h(P){m(P,0)}function m(P,D){const U=r.newAttributes,C=r.enabledAttributes,z=r.attributeDivisors;U[P]=1,C[P]===0&&(i.enableVertexAttribArray(P),C[P]=1),z[P]!==D&&(i.vertexAttribDivisor(P,D),z[P]=D)}function x(){const P=r.newAttributes,D=r.enabledAttributes;for(let U=0,C=D.length;U<C;U++)D[U]!==P[U]&&(i.disableVertexAttribArray(U),D[U]=0)}function y(P,D,U,C,z,H,O){O===!0?i.vertexAttribIPointer(P,D,U,z,H):i.vertexAttribPointer(P,D,U,C,z,H)}function S(P,D,U,C){M();const z=C.attributes,H=U.getAttributes(),O=D.defaultAttributeValues;for(const J in H){const k=H[J];if(k.location>=0){let G=z[J];if(G===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const X=G.normalized,ae=G.itemSize,Ae=e.get(G);if(Ae===void 0)continue;const Y=Ae.buffer,re=Ae.type,Pe=Ae.bytesPerElement,Ne=re===i.INT||re===i.UNSIGNED_INT||G.gpuType===Al;if(G.isInterleavedBufferAttribute){const fe=G.data,Ue=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,tt=G.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let ke=0;ke<k.locationSize;ke++)m(k.location+ke,fe.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<k.locationSize;ke++)h(k.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let ke=0;ke<k.locationSize;ke++)y(k.location+ke,ae/k.locationSize,re,X,Ue*Pe,(tt+ae/k.locationSize*ke)*Pe,Ne)}else{if(G.isInstancedBufferAttribute){for(let fe=0;fe<k.locationSize;fe++)m(k.location+fe,G.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let fe=0;fe<k.locationSize;fe++)h(k.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let fe=0;fe<k.locationSize;fe++)y(k.location+fe,ae/k.locationSize,re,X,ae*Pe,ae/k.locationSize*fe*Pe,Ne)}}else if(O!==void 0){const X=O[J];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(k.location,X);break;case 3:i.vertexAttrib3fv(k.location,X);break;case 4:i.vertexAttrib4fv(k.location,X);break;default:i.vertexAttrib1fv(k.location,X)}}}}x()}function T(){w();for(const P in n){const D=n[P];for(const U in D){const C=D[U];for(const z in C){const H=C[z];for(const O in H)u(H[O].object),delete H[O];delete C[z]}}delete n[P]}}function R(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const U in D){const C=D[U];for(const z in C){const H=C[z];for(const O in H)u(H[O].object),delete H[O];delete C[z]}}delete n[P.id]}function g(P){for(const D in n){const U=n[D];for(const C in U){const z=U[C];if(z[P.id]===void 0)continue;const H=z[P.id];for(const O in H)u(H[O].object),delete H[O];delete z[P.id]}}}function _(P){for(const D in n){const U=n[D],C=P.isInstancedMesh===!0?P.id:0,z=U[C];if(z!==void 0){for(const H in z){const O=z[H];for(const J in O)u(O[J].object),delete O[J];delete z[H]}delete U[C],Object.keys(U).length===0&&delete n[D]}}}function w(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:_,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:h,disableUnusedAttributes:x}}function Om(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let p=0;p<u;p++)d+=c[p];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Tn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const _=g===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==En&&g!==Kn&&!_&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,maxSamples:T,samples:R}}function km(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Ei,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||s;return s=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,M=f.clipIntersection,h=f.clipShadows,m=i.get(f);if(!s||v===null||v.length===0||r&&!h)r?u(null):c();else{const x=r?0:n,y=x*4;let S=m.clippingState||null;l.value=S,S=u(v,d,y,p);for(let T=0;T!==y;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,v){const M=f!==null?f.length:0;let h=null;if(M!==0){if(h=l.value,v!==!0||h===null){const m=p+M*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(h===null||h.length<m)&&(h=new Float32Array(m));for(let y=0,S=p;y!==M;++y,S+=4)a.copy(f[y]).applyMatrix4(x,o),a.normal.toArray(h,S),h[S+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,h}}class Xl extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new r0(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hn(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:bs});r.uniforms.tEquirect.value=t;const a=new At(s,r),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=pn),new fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Yc=256,Hm=3,Gm=20,b0=256,w0=16,Vm=3,Wm=new I,Xm=new De;class _r{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fl(1,10,null),this._boxMesh=new At(new Hn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Wm}=r,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,p=l.autoClearDepth,v=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(Xm));const h=new fl(n,s,u);return h.position.copy(o),h.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=p,l.autoClearStencil=v,e.background=M,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Yc,Oh(e))}_fromTexture(e,t){e.mapping===Es||e.mapping===fr?this._setSize(e.image.length===0?Yc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=$c(e,!1,!1),n=Math.log2(e)-Hm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=$c(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Es||e.mapping===fr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=qm(),this._integrationMaterial=Ym());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/w0);for(let a=0;a<=n;a++){const o=_r.lodToRoughness(a,n);if(a>n-Vm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(b0*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=$m());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function $c(i,e,t){return new Xl(i,{minFilter:ri,generateMipmaps:e,type:Mn,colorSpace:Sa,depthBuffer:t})}function Sr(i,e,t){return new qt({name:i,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:mn,blending:bs,depthTest:!1,depthWrite:!1})}function qm(){return Sr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${b0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ym(){return Sr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:w0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function $m(){return Sr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Gm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Zc(){return Sr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Kc(){return Sr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Zm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,p=!1){return d==null?null:p?a(d):r(d)}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Ua||p===Na)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const M=new Xl(v.height);return M.fromEquirectangularTexture(i,d),e.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const p=d.mapping,v=p===Ua||p===Na,M=p===Es||p===fr;if(v||M){let h=t.get(d);const m=h!==void 0?h.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new _r(i)),h=v?n.fromEquirectangular(d,h):n.fromCubemap(d,h),h.texture.pmremVersion=d.pmremVersion,t.set(d,h),h.texture;if(h!==void 0)return h.texture;{const x=d.image;return v&&x&&x.height>0||M&&x&&l(x)?(n===null&&(n=new _r(i)),h=v?n.fromEquirectangular(d):n.fromCubemap(d),h.texture.pmremVersion=d.pmremVersion,t.set(d,h),d.addEventListener("dispose",u),h.texture):null}}}return d}function o(d,p){return p===Ua?d.mapping=Es:p===Na&&(d.mapping=fr),d}function l(d){let p=0;const v=6;for(let M=0;M<v;M++)d[M]!==void 0&&p++;return p===v}function c(d){const p=d.target;p.removeEventListener("dispose",c);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function u(d){const p=d.target;p.removeEventListener("dispose",u);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Km(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&da("WebGLRenderer: "+n+" extension not supported."),s}}}function Jm(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(v=>delete s[v]);function o(v){l(v.target)}function l(v){v.index!==null&&e.remove(v.index);for(const h in v.attributes)e.remove(v.attributes[h]);v.removeEventListener("dispose",o),delete s[v.id],a.unregister(v);const M=r.get(v);M&&(e.remove(M),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function c(v,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function u(v){const M=v.attributes;for(const h in M)e.update(M[h],i.ARRAY_BUFFER)}function f(v){const M=v.index,h=v.attributes.position;let m=0;if(h===void 0)return;const x=M!==null?M.array.length:h.array.length/3-1,y=h.count>=65535?t0:e0,S=new y(Math.ceil(x/3)*6,1),T=S.array;if(M!==null){const g=M.array;m=M.version;for(let _=0,w=0;_<x;_+=3){const b=g[_+0],P=g[_+1],D=g[_+2];T[w++]=b,T[w++]=P,T[w++]=P,T[w++]=D,T[w++]=D,T[w++]=b}}else{m=h.version;for(let g=0,_=0;g<x;g+=3){const w=g+0,b=g+1,P=g+2;T[_++]=w,T[_++]=b,T[_++]=b,T[_++]=P,T[_++]=P,T[_++]=w}}S.version=m;const R=r.get(v);R&&e.remove(R),r.set(v,S)}function d(v){const M=r.get(v);if(M){const h=v.index;h!==null&&M.version<h.version&&f(v)}else f(v);return r.get(v)}function p(){for(const v in s){const M=s[v].deref();M!==void 0&&l(M)}}return{get:c,update:u,getWireframeAttribute:d,dispose:p}}function Qm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,p){p!==0&&(i.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}function u(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let M=0;for(let h=0;h<p;h++)M+=d[h];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:St("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function eg(i,e,t){const n=new WeakMap,s=new kt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let b=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",b)};var p=b;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),M===!0&&(S=2),h===!0&&(S=3);let T=o.attributes.position.count*S,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const g=new Float32Array(T*R*4*f),_=new Ju(g,T,R,f);_.type=Kn,_.needsUpdate=!0;const w=S*4;for(let P=0;P<f;P++){const D=m[P],U=x[P],C=y[P],z=T*R*4*P;for(let H=0;H<D.count;H++){const O=H*w;v===!0&&(s.fromBufferAttribute(D,H),g[z+O+0]=s.x,g[z+O+1]=s.y,g[z+O+2]=s.z,g[z+O+3]=0),M===!0&&(s.fromBufferAttribute(U,H),g[z+O+4]=s.x,g[z+O+5]=s.y,g[z+O+6]=s.z,g[z+O+7]=0),h===!0&&(s.fromBufferAttribute(C,H),g[z+O+8]=s.x,g[z+O+9]=s.y,g[z+O+10]=s.z,g[z+O+11]=C.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new ce(T,R)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let v=0;for(let h=0;h<c.length;h++)v+=c[h];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function tg(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return d}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const ng={[Iu]:"LINEAR_TONE_MAPPING",[Uu]:"REINHARD_TONE_MAPPING",[Nu]:"CINEON_TONE_MAPPING",[Fu]:"ACES_FILMIC_TONE_MAPPING",[Ou]:"AGX_TONE_MAPPING",[Bu]:"NEUTRAL_TONE_MAPPING",[zu]:"CUSTOM_TONE_MAPPING"};function ig(i,e,t,n,s,r){const a=new cn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new zt;u.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new et([0,2,0,0,2,0],2));const f=new Xf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new At(u,f),p=new M0(-1,1,1,-1,0,1);let v=null,M=null,h=!1,m,x=null,y=[],S=!1;this.setSize=function(T,R){a.setSize(T,R),o!==null&&o.setSize(T,R),l!==null&&l.setSize(T,R);for(let g=0;g<y.length;g++){const _=y[g];_.setSize&&_.setSize(T,R)}},this.setEffects=function(T){y=T,S=y.length>0&&y[0].isRenderPass===!0;const R=a.width,g=a.height;y.length>0&&o===null&&(o=new cn(R,g,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new cn(R,g,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));const _=s===!0&&y.some(w=>w.needsDepthTexture===!0);_!==(a.depthTexture!==null)&&(_===!0&&c===null&&(c=new Cs(R,g),r===!0&&(c.format=Ai,c.type=As)),a.dispose(),a.depthTexture=_?c:null,a.resolveDepthBuffer=_,a.storeMultisampledDepthBuffer=_);for(let w=0;w<y.length;w++){const b=y[w];b.setSize&&b.setSize(R,g),_&&b.needsDepthTexture===!0&&b.setDepthTexture&&b.setDepthTexture(c)}},this.begin=function(T,R){if(h||T.toneMapping===ai&&y.length===0)return!1;if(x=R,R!==null){const g=R.width,_=R.height;(a.width!==g||a.height!==_)&&this.setSize(g,_)}return S===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=ai,!0},this.hasRenderPass=function(){return S},this.end=function(T,R){T.toneMapping=m,h=!0;let g=a,_=o;for(let w=0;w<y.length;w++){const b=y[w];b.enabled!==!1&&(b.render(T,_,g,R),b.needsSwap!==!1&&(g=_,_=_===o?l:o))}if(v!==T.outputColorSpace||M!==T.toneMapping){v=T.outputColorSpace,M=T.toneMapping,f.defines={},xt.getTransfer(v)===Et&&(f.defines.SRGB_TRANSFER="");const w=ng[M];w&&(f.defines[w]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(x),T.render(d,p),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}const E0=new gn,T0=new Cs(1,1),A0=new a0(1),R0=new Ju,C0=new qh,P0=new r0,Jc=[],Qc=[],jc=new Float32Array(16),eu=new Float32Array(9),tu=new Float32Array(4);function Bs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Jc[s];if(r===void 0&&(r=new Float32Array(s),Jc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ca(i,e){let t=Qc[e];t===void 0&&(t=new Int32Array(e),Qc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;tu.set(n),i.uniformMatrix2fv(this.addr,!1,tu),$t(t,n)}}function cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;eu.set(n),i.uniformMatrix3fv(this.addr,!1,eu),$t(t,n)}}function ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Yt(t,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),$t(t,n)}}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function mg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function Pa(i){return i.version===0&&(i.compareFunction=Zu,i.needsUpdate=!0),i}function _g(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Pa(T0):r=E0,t.setTexture2D(e||r,s)}function Mg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||C0,s)}function Sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Pa(A0):r=P0,t.setTextureCube(e||r,s)}function yg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||R0,s)}function bg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return xg;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return yg}}function wg(i,e){i.uniform1fv(this.addr,e)}function Eg(i,e){const t=Bs(e,this.size,2);i.uniform2fv(this.addr,t)}function Tg(i,e){const t=Bs(e,this.size,3);i.uniform3fv(this.addr,t)}function Ag(i,e){const t=Bs(e,this.size,4);i.uniform4fv(this.addr,t)}function Rg(i,e){const t=Bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cg(i,e){const t=Bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pg(i,e){const t=Bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lg(i,e){i.uniform1iv(this.addr,e)}function Dg(i,e){i.uniform2iv(this.addr,e)}function Ig(i,e){i.uniform3iv(this.addr,e)}function Ug(i,e){i.uniform4iv(this.addr,e)}function Ng(i,e){i.uniform1uiv(this.addr,e)}function Fg(i,e){i.uniform2uiv(this.addr,e)}function zg(i,e){i.uniform3uiv(this.addr,e)}function Og(i,e){i.uniform4uiv(this.addr,e)}function Bg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Pa(T0):a=E0;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function kg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||C0,r[a])}function Hg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Pa(A0):a=P0;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function Gg(i,e,t){const n=this.cache,s=e.length,r=Ca(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||R0,r[a])}function Vg(i){switch(i){case 5126:return wg;case 35664:return Eg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Dg;case 35668:case 35672:return Ig;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return zg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}class Wg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=bg(t.type)}}class Xg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vg(t.type)}}class qg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function nu(i,e){i.seq.push(e),i.map[e.id]=e}function Yg(i,e,t){const n=i.name,s=n.length;for(uo.lastIndex=0;;){const r=uo.exec(n),a=uo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nu(t,c===void 0?new Wg(o,i,e):new Xg(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new qg(o),nu(t,f)),t=f}}}class pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Yg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function iu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const $g=37297;let Zg=0;function Kg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const su=new nt;function Jg(i){xt._getMatrix(su,xt.workingColorSpace,i);const e=`mat3( ${su.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case ya:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ru(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kg(i.getShaderSource(e),o)}else return r}function Qg(i,e){const t=Jg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const jg={[Iu]:"Linear",[Uu]:"Reinhard",[Nu]:"Cineon",[Fu]:"ACESFilmic",[Ou]:"AgX",[Bu]:"Neutral",[zu]:"Custom"};function ex(i,e){const t=jg[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jr=new I;function tx(){xt.getLuminanceCoefficients(Jr);const i=Jr.x.toFixed(4),e=Jr.y.toFixed(4),t=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function ix(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function tr(i){return i!==""}function au(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ou(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function dl(i){return i.replace(rx,ax)}function ax(i,e){const t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return dl(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lu(i){return i.replace(ox,lx)}function lx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cx={[ir]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function ux(i){return cx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hx={[fr]:"ENVMAP_MODE_REFRACTION"};function fx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":hx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const dx={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[Sh]:"ENVMAP_BLENDING_MIX",[yh]:"ENVMAP_BLENDING_ADD"};function px(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":dx[i.combine]||"ENVMAP_BLENDING_NONE"}function mx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ux(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=fx(t),f=px(t),d=nx(t),p=ix(r),v=s.createProgram();let M,h,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(tr).join(`
`),M.length>0&&(M+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(tr).join(`
`),h.length>0&&(h+=`
`)):(M=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),h=[cu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?ot.tonemapping_pars_fragment:"",t.toneMapping!==ai?ex("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Qg("linearToOutputTexel",t.outputColorSpace),tx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),a=dl(a),a=au(a,t),a=ou(a,t),o=dl(o),o=au(o,t),o=ou(o,t),a=lu(a),o=lu(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,h=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=m+M+a,y=m+h+o,S=iu(s,s.VERTEX_SHADER,x),T=iu(s,s.FRAGMENT_SHADER,y);s.attachShader(v,S),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(b){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(v)||"",D=s.getShaderInfoLog(S)||"",U=s.getShaderInfoLog(T)||"",C=P.trim(),z=D.trim(),H=U.trim();let O=!0,J=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,T);else{const k=ru(s,S,"vertex"),G=ru(s,T,"fragment");St("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+C+`
`+k+`
`+G)}else C!==""?Qe("WebGLProgram: Program Info Log:",C):(z===""||H==="")&&(J=!1);J&&(b.diagnostics={runnable:O,programLog:C,vertexShader:{log:z,prefix:M},fragmentShader:{log:H,prefix:h}})}s.deleteShader(S),s.deleteShader(T),g=new pa(s,v),_=sx(s,v)}let g;this.getUniforms=function(){return g===void 0&&R(this),g};let _;this.getAttributes=function(){return _===void 0&&R(this),_};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,$g)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=T,this}let gx=0;class xx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new vx(e),t.set(e,n)),n}}class vx{constructor(e){this.id=gx++,this.code=e,this.usedTimes=0}}function _x(i){return i===$i||i===va||i===_a}function Mx(i,e,t,n,s,r){const a=new Qu,o=new xx,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,_,w,b,P,D){const U=b.fog,C=P.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?b.environment:null,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,O=e.get(g.envMap||z,H),J=d[g.type];let k=n.precision;g.precision!==null&&(k=n.getMaxPrecision(g.precision),k!==g.precision&&Qe("WebGLProgram.getParameters:",g.precision,"not supported, using",k,"instead."));const G=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,X=G!==void 0?G.length:0;let ae=0;C.morphAttributes.position!==void 0&&(ae=1),C.morphAttributes.normal!==void 0&&(ae=2),C.morphAttributes.color!==void 0&&(ae=3);let Ae,Y,re,Pe;if(J){const Re=ti[J];Ae=Re.vertexShader,Y=Re.fragmentShader}else{Ae=g.vertexShader,Y=g.fragmentShader;const Re=o.getVertexShaderStage(g),wt=o.getFragmentShaderStage(g);o.update(g,Re,wt),re=Re.id,Pe=wt.id}const Ne=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ue=P.isInstancedMesh===!0,tt=P.isBatchedMesh===!0,ke=!!g.map,Ze=!!g.matcap,rt=!!O,ie=rt&&O.isPMREMTexture===!0,ge=!!g.aoMap,pe=!!g.lightMap,Ie=!!g.bumpMap&&g.wireframe===!1,xe=!!g.normalMap,Ye=!!g.displacementMap,Be=!!g.emissiveMap,ct=!!g.metalnessMap,ut=!!g.roughnessMap,ve=g.anisotropy>0,N=g.clearcoat>0,ft=g.diffuseRoughness>0,$e=g.dispersion>0,bt=g.retroreflectivity>0,Se=g.iridescence>0,Ot=g.sheen>0,qe=g.transmission>0,Ke=ve&&!!g.anisotropyMap,L=N&&!!g.clearcoatMap,E=N&&!!g.clearcoatNormalMap,W=N&&!!g.clearcoatRoughnessMap,ue=ft&&!!g.diffuseRoughnessMap,se=Se&&!!g.iridescenceMap,_e=Se&&!!g.iridescenceThicknessMap,Ee=Ot&&!!g.sheenColorMap,j=Ot&&!!g.sheenRoughnessMap,te=!!g.specularMap,ye=!!g.specularColorMap,F=!!g.specularIntensityMap,ne=qe&&!!g.transmissionMap,Q=qe&&!!g.thicknessMap,be=!!g.gradientMap,me=!!g.alphaMap,Me=g.alphaTest>0,Ve=!!g.alphaHash,at=!!g.extensions;let de=ai;g.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(de=i.toneMapping);const Xe=ie?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,it={shaderID:J,shaderType:g.type,shaderName:g.name,vertexShader:Ae,fragmentShader:Y,defines:g.defines,customVertexShaderID:re,customFragmentShaderID:Pe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:k,batching:tt,batchingColor:tt&&P._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&P.instanceColor!==null,instancingMorph:Ue&&P.morphTexture!==null,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:ke,matcap:Ze,envMap:rt,envMapMode:rt&&O.mapping,envMapPMREM:ie,envMapMaxLod:ie?Xe.length-1:null,envMapSize:ie?Xe[0].width:null,aoMap:ge,lightMap:pe,bumpMap:Ie,normalMap:xe,displacementMap:Ye,emissiveMap:Be,normalMapObjectSpace:xe&&g.normalMapType===Eh,normalMapTangentSpace:xe&&g.normalMapType===Ma,packedNormalMap:xe&&g.normalMapType===Ma&&_x(g.normalMap.format),metalnessMap:ct,roughnessMap:ut,anisotropy:ve,anisotropyMap:Ke,clearcoat:N,clearcoatMap:L,clearcoatNormalMap:E,clearcoatRoughnessMap:W,diffuseRoughness:ft,diffuseRoughnessMap:ue,dispersion:$e,retroreflection:bt,iridescence:Se,iridescenceMap:se,iridescenceThicknessMap:_e,sheen:Ot,sheenColorMap:Ee,sheenRoughnessMap:j,specularMap:te,specularColorMap:ye,specularIntensityMap:F,transmission:qe,transmissionMap:ne,thicknessMap:Q,gradientMap:be,opaque:g.transparent===!1&&g.blending===sr&&g.alphaToCoverage===!1,alphaMap:me,alphaTest:Me,alphaHash:Ve,combine:g.combine,mapUv:ke&&p(g.map.channel),aoMapUv:ge&&p(g.aoMap.channel),lightMapUv:pe&&p(g.lightMap.channel),bumpMapUv:Ie&&p(g.bumpMap.channel),normalMapUv:xe&&p(g.normalMap.channel),displacementMapUv:Ye&&p(g.displacementMap.channel),emissiveMapUv:Be&&p(g.emissiveMap.channel),metalnessMapUv:ct&&p(g.metalnessMap.channel),roughnessMapUv:ut&&p(g.roughnessMap.channel),anisotropyMapUv:Ke&&p(g.anisotropyMap.channel),clearcoatMapUv:L&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:E&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ue&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:se&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:j&&p(g.sheenRoughnessMap.channel),specularMapUv:te&&p(g.specularMap.channel),specularColorMapUv:ye&&p(g.specularColorMap.channel),specularIntensityMapUv:F&&p(g.specularIntensityMap.channel),transmissionMapUv:ne&&p(g.transmissionMap.channel),thicknessMapUv:Q&&p(g.thicknessMap.channel),alphaMapUv:me&&p(g.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(xe||ve),vertexNormals:!!C.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(ke||me),fog:!!U,useFog:g.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||C.attributes.normal===void 0&&xe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ae,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:D.filter(Re=>Re.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:ke&&g.map.isVideoTexture===!0&&xt.getTransfer(g.map.colorSpace)===Et,decodeVideoTextureEmissive:Be&&g.emissiveMap.isVideoTexture===!0&&xt.getTransfer(g.emissiveMap.colorSpace)===Et,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ii,flipSided:g.side===mn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:at&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&g.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function M(g){const _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(const w in g.defines)_.push(w),_.push(g.defines[w]);return g.isRawShaderMaterial===!1&&(h(_,g),m(_,g),_.push(i.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function h(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapPMREM),g.push(_.envMapMaxLod),g.push(_.envMapSize),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.diffuseRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.numSunLights),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numSunLightShadows),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.numLightProbeGrids),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function m(g,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.diffuseRoughness&&a.enable(25),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function x(g){const _=d[g.type];let w;if(_){const b=ti[_];w=hl.clone(b.uniforms)}else w=g.uniforms;return w}function y(g,_){let w=u.get(_);return w!==void 0?++w.usedTimes:(w=new mx(i,_,g,s),c.push(w),u.set(_,w)),w}function S(g){if(--g.usedTimes===0){const _=c.indexOf(g);c[_]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function R(){o.dispose()}return{getParameters:v,getProgramCacheKey:M,getUniforms:x,acquireProgram:y,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:R}}function Sx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function yx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function uu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function o(d,p,v,M,h,m){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:p,material:v,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:h,group:m},i[e]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=v,x.materialVariant=a(d),x.groupOrder=M,x.renderOrder=d.renderOrder,x.z=h,x.group=m),e++,x}function l(d,p,v,M,h,m,x){x.reversedDepth===!0&&(h=-h);const y=o(d,p,v,M,h,m);v.transmission>0?n.push(y):v.transparent===!0?s.push(y):t.push(y)}function c(d,p,v,M,h,m){const x=o(d,p,v,M,h,m);v.transmission>0?n.unshift(x):v.transparent===!0?s.unshift(x):t.unshift(x)}function u(d,p){t.length>1&&t.sort(d||yx),n.length>1&&n.sort(p||uu),s.length>1&&s.sort(p||uu)}function f(){for(let d=e,p=i.length;d<p;d++){const v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function bx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new hu,i.set(n,[a])):s>=r.length?(a=new hu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new De};break;case"SpotLight":t={position:new I,direction:new I,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Ex(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tx=0;function Ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Rx(i){const e=new wx,t=Ex(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new dt,a=new dt;function o(c){let u=0,f=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let p=0,v=0,M=0,h=0,m=0,x=0,y=0,S=0,T=0,R=0,g=0,_=0,w=0,b=0;c.sort(Ax);for(let D=0,U=c.length;D<U;D++){const C=c[D],z=C.color,H=C.intensity,O=C.distance;let J=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===$i?J=C.shadow.map.texture:J=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=z.r*H,f+=z.g*H,d+=z.b*H;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],H);b++}else if(C.isSunLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,X=t.get(C);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[v]=X,n.sunShadowMap[v]=J;const ae=G.getViewportCount();for(let Ae=0;Ae<ae;Ae++)n.sunShadowMatrix[M+Ae]=G.getMatrix(Ae),n.sunShadowCascade[M+Ae]=G._cascadeData[Ae];M+=ae,v++}n.sun[p]=k,p++}else if(C.isDirectionalLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const G=C.shadow,X=t.get(C);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.directionalShadow[h]=X,n.directionalShadowMap[h]=J,n.directionalShadowMatrix[h]=C.shadow.matrix,T++}n.directional[h]=k,h++}else if(C.isSpotLight){const k=e.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(z).multiplyScalar(H),k.distance=O,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[x]=k;const G=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,G.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[x]=G.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=J,g++}x++}else if(C.isRectAreaLight){const k=e.get(C);k.color.copy(z).multiplyScalar(H),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[y]=k,y++}else if(C.isPointLight){const k=e.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const G=C.shadow,X=t.get(C);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=C.shadow.matrix,R++}n.point[m]=k,m++}else if(C.isHemisphereLight){const k=e.get(C);k.skyColor.copy(C.color).multiplyScalar(H),k.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[S]=k,S++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const P=n.hash;(P.sunLength!==p||P.directionalLength!==h||P.pointLength!==m||P.spotLength!==x||P.rectAreaLength!==y||P.hemiLength!==S||P.numSunShadows!==v||P.numDirectionalShadows!==T||P.numPointShadows!==R||P.numSpotShadows!==g||P.numSpotMaps!==_||P.numLightProbes!==b)&&(n.sun.length=p,n.directional.length=h,n.spot.length=x,n.rectArea.length=y,n.point.length=m,n.hemi.length=S,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,P.sunLength=p,P.directionalLength=h,P.pointLength=m,P.spotLength=x,P.rectAreaLength=y,P.hemiLength=S,P.numSunShadows=v,P.numDirectionalShadows=T,P.numPointShadows=R,P.numSpotShadows=g,P.numSpotMaps=_,P.numLightProbes=b,n.version=Tx++)}function l(c,u){let f=0,d=0,p=0,v=0,M=0,h=0;const m=u.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){const S=c[x];if(S.isSunLight){const T=n.sun[f];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),f++}else if(S.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(S.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),v++}else if(S.isRectAreaLight){const T=n.rectArea[M];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),p++}else if(S.isHemisphereLight){const T=n.hemi[h];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),h++}}}return{setup:o,setupView:l,state:n}}function fu(i){const e=new Rx(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Cx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new fu(i),e.set(s,[o])):r>=a.length?(o=new fu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Dx=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ix=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],du=new dt,Ys=new I,ho=new I;function Ux(i,e,t){let n=new Rs;const s=new ce,r=new ce,a=new kt,o=new Yf,l=new $f,c={},u=t.maxTextureSize,f={[qi]:mn,[mn]:qi,[ii]:ii},d=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Px,fragmentShader:Lx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new zt;v.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new At(v,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let m=this.type;this.render=function(R,g,_){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||R.length===0)return;this.type===sh&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);const w=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(bs),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=m!==this.type;U&&g.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=R.length;C<z;C++){const H=R[C],O=H.shadow;if(O===void 0){Qe("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const J=O.getFrameExtents();s.multiply(J),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,O.mapSize.y=r.y));const k=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=k,O.map===null||U===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===js){if(H.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new cn(s.x,s.y,{format:$i,type:Mn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new Cs(s.x,s.y,Kn),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=Ri,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn}else H.isPointLight?(O.map=new Xl(s.x),O.map.depthTexture=new a0(s.x,oi)):(O.map=new cn(s.x,s.y),O.map.depthTexture=new Cs(s.x,s.y,oi)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=Ri,this.type===ir?(O.map.depthTexture.compareFunction=k?$u:Yu,O.map.depthTexture.minFilter=pn,O.map.depthTexture.magFilter=pn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=nn,O.map.depthTexture.magFilter=nn);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();H.isPointLight!==!0&&O.updateMatrices(H,_);const X=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:_.layers;for(let ae=0;ae<G;ae++){const Ae=O.getCamera(ae);if(H.isPointLight){const Y=O.camera,re=O.matrix,Pe=H.distance||Y.far;Pe!==Y.far&&(Y.far=Pe,Y.updateProjectionMatrix()),Ys.setFromMatrixPosition(H.matrixWorld),Y.position.copy(Ys),ho.copy(Y.position),ho.add(Dx[ae]),Y.up.copy(Ix[ae]),Y.lookAt(ho),Y.updateMatrixWorld(),re.makeTranslation(-Ys.x,-Ys.y,-Ys.z),du.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(du,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(O.map),i.clear());const Y=O.getViewport(ae);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),D.viewport(a)}n=O.getFrustum(ae),S(g,_,Ae,H,X,this.type)}O.isPointLightShadow!==!0&&this.type===js&&x(O,_),O.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(w,b,P)};function x(R,g){const _=e.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null?R.mapPass=new cn(s.x,s.y,{format:$i,type:Mn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(g,null,_,d,M,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(g,null,_,p,M,null)}function y(R,g,_,w){let b=null;const P=_.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)b=P;else if(b=_.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const D=b.uuid,U=g.uuid;let C=c[D];C===void 0&&(C={},c[D]=C);let z=C[U];z===void 0&&(z=b.clone(),C[U]=z,g.addEventListener("dispose",T)),b=z}if(b.visible=g.visible,b.wireframe=g.wireframe,w===js?b.side=g.shadowSide!==null?g.shadowSide:g.side:b.side=g.shadowSide!==null?g.shadowSide:f[g.side],b.alphaMap=g.alphaMap,b.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,b.map=g.map,b.clipShadows=g.clipShadows,b.clippingPlanes=g.clippingPlanes,b.clipIntersection=g.clipIntersection,b.displacementMap=g.displacementMap,b.displacementScale=g.displacementScale,b.displacementBias=g.displacementBias,b.wireframeLinewidth=g.wireframeLinewidth,b.linewidth=g.linewidth,_.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=i.properties.get(b);D.light=_}return b}function S(R,g,_,w,b,P){if(R.visible===!1)return;if(R.layers.test(b)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&P===js)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,R.matrixWorld);const C=e.update(R),z=R.material;if(Array.isArray(z)){const H=C.groups;for(let O=0,J=H.length;O<J;O++){const k=H[O],G=z[k.materialIndex];if(G&&G.visible){const X=y(R,G,w,P);R.onBeforeShadow(i,R,g,_,C,X,k),i.renderBufferDirect(_,null,C,X,R,k),R.onAfterShadow(i,R,g,_,C,X,k)}}}else if(z.visible){const H=y(R,z,w,P);R.onBeforeShadow(i,R,g,_,C,H,null),i.renderBufferDirect(_,null,C,H,R,null),R.onAfterShadow(i,R,g,_,C,H,null)}}const U=R.children;for(let C=0,z=U.length;C<z;C++)S(U[C],g,_,w,b,P)}function T(R){R.target.removeEventListener("dispose",T);for(const _ in c){const w=c[_],b=R.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function Nx(i,e){function t(){let F=!1;const ne=new kt;let Q=null;const be=new kt(0,0,0,0);return{setMask:function(me){Q!==me&&!F&&(i.colorMask(me,me,me,me),Q=me)},setLocked:function(me){F=me},setClear:function(me,Me,Ve,at,de){de===!0&&(me*=at,Me*=at,Ve*=at),ne.set(me,Me,Ve,at),be.equals(ne)===!1&&(i.clearColor(me,Me,Ve,at),be.copy(ne))},reset:function(){F=!1,Q=null,be.set(-1,0,0,0)}}}function n(){let F=!1,ne=!1,Q=null,be=null,me=null;return{setReversed:function(Me){if(ne!==Me){const Ve=e.get("EXT_clip_control");Me?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ne=Me;const at=me;me=null,this.setClear(at)}},getReversed:function(){return ne},setTest:function(Me){Me?fe(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(Me){Q!==Me&&!F&&(i.depthMask(Me),Q=Me)},setFunc:function(Me){if(ne&&(Me=Fh[Me]),be!==Me){switch(Me){case bo:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case To:i.depthFunc(i.EQUAL);break;case Ao:i.depthFunc(i.GEQUAL);break;case Ro:i.depthFunc(i.GREATER);break;case Co:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=Me}},setLocked:function(Me){F=Me},setClear:function(Me){me!==Me&&(me=Me,ne&&(Me=1-Me),i.clearDepth(Me))},reset:function(){F=!1,Q=null,be=null,me=null,ne=!1}}}function s(){let F=!1,ne=null,Q=null,be=null,me=null,Me=null,Ve=null,at=null,de=null;return{setTest:function(Xe){F||(Xe?fe(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(Xe){ne!==Xe&&!F&&(i.stencilMask(Xe),ne=Xe)},setFunc:function(Xe,it,Re){(Q!==Xe||be!==it||me!==Re)&&(i.stencilFunc(Xe,it,Re),Q=Xe,be=it,me=Re)},setOp:function(Xe,it,Re){(Me!==Xe||Ve!==it||at!==Re)&&(i.stencilOp(Xe,it,Re),Me=Xe,Ve=it,at=Re)},setLocked:function(Xe){F=Xe},setClear:function(Xe){de!==Xe&&(i.clearStencil(Xe),de=Xe)},reset:function(){F=!1,ne=null,Q=null,be=null,me=null,Me=null,Ve=null,at=null,de=null}}}const r=new t,a=new n,o=new s;let l={};const c=new WeakMap;let u={},f={},d={},p=new WeakMap,v=[],M=null,h=!1,m=null,x=null,y=null,S=null,T=null,R=null,g=null,_=new De(0,0,0),w=0,b=!1,P=null,D=null,U=null,C=null,z=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,J=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=J>=2);let G=null,X={};const ae=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Y=new kt().fromArray(ae),re=new kt().fromArray(Ae);function Pe(F,ne,Q,be){const me=new Uint8Array(4),Me=i.createTexture();i.bindTexture(F,Me),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<Q;Ve++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(ne+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return Me}const Ne={};Ne[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(i.DEPTH_TEST),a.setFunc(hr),Ie(!1),xe(lc),fe(i.CULL_FACE),ge(bs);function fe(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Ue(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function tt(F,ne){return d[F]!==ne?(i.bindFramebuffer(F,ne),d[F]=ne,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function ke(F,ne){let Q=v,be=!1;if(F){Q=p.get(ne),Q===void 0&&(Q=[],p.set(ne,Q));const me=F.textures;if(Q.length!==me.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Ve=me.length;Me<Ve;Me++)Q[Me]=i.COLOR_ATTACHMENT0+Me;Q.length=me.length,be=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,be=!0);be&&i.drawBuffers(Q)}function Ze(F){return M!==F?(i.useProgram(F),M=F,!0):!1}const rt={[xs]:i.FUNC_ADD,[rh]:i.FUNC_SUBTRACT,[ah]:i.FUNC_REVERSE_SUBTRACT};rt[oh]=i.MIN,rt[lh]=i.MAX;const ie={[ch]:i.ZERO,[Lu]:i.ONE,[uh]:i.SRC_COLOR,[Du]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[fh]:i.DST_ALPHA,[hh]:i.ONE_MINUS_SRC_COLOR,[El]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[dh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[vh]:i.ONE_MINUS_CONSTANT_COLOR,[_h]:i.CONSTANT_ALPHA,[Mh]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(F,ne,Q,be,me,Me,Ve,at,de,Xe){if(F===bs){h===!0&&(Ue(i.BLEND),h=!1);return}if(h===!1&&(fe(i.BLEND),h=!0),F!==Pu){if(F!==m||Xe!==b){if((x!==xs||T!==xs)&&(i.blendEquation(i.FUNC_ADD),x=xs,T=xs),Xe)switch(F){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFunc(i.ONE,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:St("WebGLState: Invalid blending: ",F);break}else switch(F){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cc:St("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uc:St("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:St("WebGLState: Invalid blending: ",F);break}y=null,S=null,R=null,g=null,_.set(0,0,0),w=0,m=F,b=Xe}return}me=me||ne,Me=Me||Q,Ve=Ve||be,(ne!==x||me!==T)&&(i.blendEquationSeparate(rt[ne],rt[me]),x=ne,T=me),(Q!==y||be!==S||Me!==R||Ve!==g)&&(i.blendFuncSeparate(ie[Q],ie[be],ie[Me],ie[Ve]),y=Q,S=be,R=Me,g=Ve),(at.equals(_)===!1||de!==w)&&(i.blendColor(at.r,at.g,at.b,de),_.copy(at),w=de),m=F,b=!1}function pe(F,ne){F.side===ii?Ue(i.CULL_FACE):fe(i.CULL_FACE);let Q=F.side===mn;ne&&(Q=!Q),Ie(Q),F.blending===sr&&F.transparent===!1?ge(bs):ge(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const be=F.stencilWrite;o.setTest(be),be&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Be(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(F){P!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),P=F)}function xe(F){F!==nh?(fe(i.CULL_FACE),F!==D&&(F===lc?i.cullFace(i.BACK):F===ih?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),D=F}function Ye(F){F!==U&&(O&&i.lineWidth(F),U=F)}function Be(F,ne,Q){F?(fe(i.POLYGON_OFFSET_FILL),(C!==ne||z!==Q)&&(C=ne,z=Q,a.getReversed()&&(ne=-ne,Q=-Q),i.polygonOffset(ne,Q))):Ue(i.POLYGON_OFFSET_FILL)}function ct(F){F?fe(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function ut(F){F===void 0&&(F=i.TEXTURE0+H-1),G!==F&&(i.activeTexture(F),G=F)}function ve(F,ne,Q){Q===void 0&&(G===null?Q=i.TEXTURE0+H-1:Q=G);let be=X[Q];be===void 0&&(be={type:void 0,texture:void 0},X[Q]=be),(be.type!==F||be.texture!==ne)&&(G!==Q&&(i.activeTexture(Q),G=Q),i.bindTexture(F,ne||Ne[F]),be.type=F,be.texture=ne)}function N(){const F=X[G];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(F){St("WebGLState:",F)}}function $e(){try{i.compressedTexImage3D(...arguments)}catch(F){St("WebGLState:",F)}}function bt(){try{i.texSubImage2D(...arguments)}catch(F){St("WebGLState:",F)}}function Se(){try{i.texSubImage3D(...arguments)}catch(F){St("WebGLState:",F)}}function Ot(){try{i.compressedTexSubImage2D(...arguments)}catch(F){St("WebGLState:",F)}}function qe(){try{i.compressedTexSubImage3D(...arguments)}catch(F){St("WebGLState:",F)}}function Ke(){try{i.texStorage2D(...arguments)}catch(F){St("WebGLState:",F)}}function L(){try{i.texStorage3D(...arguments)}catch(F){St("WebGLState:",F)}}function E(){try{i.texImage2D(...arguments)}catch(F){St("WebGLState:",F)}}function W(){try{i.texImage3D(...arguments)}catch(F){St("WebGLState:",F)}}function ue(F){return f[F]!==void 0?f[F]:i.getParameter(F)}function se(F,ne){f[F]!==ne&&(i.pixelStorei(F,ne),f[F]=ne)}function _e(F){Y.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Y.copy(F))}function Ee(F){re.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),re.copy(F))}function j(F,ne){let Q=c.get(ne);Q===void 0&&(Q=new WeakMap,c.set(ne,Q));let be=Q.get(F);be===void 0&&(be=i.getUniformBlockIndex(ne,F.name),i.uniformBlockBinding(ne,be,be),Q.set(F,be))}function te(F,ne,Q){const me=c.get(ne).get(F);l[me]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,me,Q),l[me]=Q)}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},G=null,X={},d={},l={},p=new WeakMap,v=[],M=null,h=!1,m=null,x=null,y=null,S=null,T=null,R=null,g=null,_=new De(0,0,0),w=0,b=!1,P=null,D=null,U=null,C=null,z=null,Y.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:fe,disable:Ue,bindFramebuffer:tt,drawBuffers:ke,useProgram:Ze,setBlending:ge,setMaterial:pe,setFlipSided:Ie,setCullFace:xe,setLineWidth:Ye,setPolygonOffset:Be,setScissorTest:ct,activeTexture:ut,bindTexture:ve,unbindTexture:N,compressedTexImage2D:ft,compressedTexImage3D:$e,texImage2D:E,texImage3D:W,pixelStorei:se,getParameter:ue,updateUBOMapping:j,uniformBlockBinding:te,texStorage2D:Ke,texStorage3D:L,texSubImage2D:bt,texSubImage3D:Se,compressedTexSubImage2D:Ot,compressedTexSubImage3D:qe,scissor:_e,viewport:Ee,reset:ye}}function Fx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,f=new Set;let d;const p=new WeakMap,v=new Set,M=new FinalizationRegistry(L=>v.delete(L));let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,E){return h?new OffscreenCanvas(L,E):ba("canvas")}function x(L,E,W){let ue=1;const se=Ke(L);if((se.width>W||se.height>W)&&(ue=W/Math.max(se.width,se.height)),ue<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _e=Math.floor(ue*se.width),Ee=Math.floor(ue*se.height);d===void 0&&(d=m(_e,Ee));const j=E?m(_e,Ee):d;return j.width=_e,j.height=Ee,j.getContext("2d").drawImage(L,0,0,_e,Ee),Qe("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+_e+"x"+Ee+")."),j}else return"data"in L&&Qe("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),L;return L}function y(L){return L.generateMipmaps}function S(L){i.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(L,E,W,ue,se,_e=!1){if(L!==null){if(i[L]!==void 0)return i[L];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ee;ue&&(Ee=e.get("EXT_texture_norm16"),Ee||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=E;if(E===i.RED&&(W===i.FLOAT&&(j=i.R32F),W===i.HALF_FLOAT&&(j=i.R16F),W===i.UNSIGNED_BYTE&&(j=i.R8),W===i.UNSIGNED_SHORT&&Ee&&(j=Ee.R16_EXT),W===i.SHORT&&Ee&&(j=Ee.R16_SNORM_EXT)),E===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.R8UI),W===i.UNSIGNED_SHORT&&(j=i.R16UI),W===i.UNSIGNED_INT&&(j=i.R32UI),W===i.BYTE&&(j=i.R8I),W===i.SHORT&&(j=i.R16I),W===i.INT&&(j=i.R32I)),E===i.RG&&(W===i.FLOAT&&(j=i.RG32F),W===i.HALF_FLOAT&&(j=i.RG16F),W===i.UNSIGNED_BYTE&&(j=i.RG8),W===i.UNSIGNED_SHORT&&Ee&&(j=Ee.RG16_EXT),W===i.SHORT&&Ee&&(j=Ee.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RG8UI),W===i.UNSIGNED_SHORT&&(j=i.RG16UI),W===i.UNSIGNED_INT&&(j=i.RG32UI),W===i.BYTE&&(j=i.RG8I),W===i.SHORT&&(j=i.RG16I),W===i.INT&&(j=i.RG32I)),E===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGB8UI),W===i.UNSIGNED_SHORT&&(j=i.RGB16UI),W===i.UNSIGNED_INT&&(j=i.RGB32UI),W===i.BYTE&&(j=i.RGB8I),W===i.SHORT&&(j=i.RGB16I),W===i.INT&&(j=i.RGB32I)),E===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),W===i.UNSIGNED_INT&&(j=i.RGBA32UI),W===i.BYTE&&(j=i.RGBA8I),W===i.SHORT&&(j=i.RGBA16I),W===i.INT&&(j=i.RGBA32I)),E===i.RGB&&(W===i.UNSIGNED_SHORT&&Ee&&(j=Ee.RGB16_EXT),W===i.SHORT&&Ee&&(j=Ee.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),E===i.RGBA){const te=_e?ya:xt.getTransfer(se);W===i.FLOAT&&(j=i.RGBA32F),W===i.HALF_FLOAT&&(j=i.RGBA16F),W===i.UNSIGNED_BYTE&&(j=te===Et?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Ee&&(j=Ee.RGBA16_EXT),W===i.SHORT&&Ee&&(j=Ee.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function g(L,E){let W;return L?E===null||E===oi||E===As?W=i.DEPTH24_STENCIL8:E===Kn?W=i.DEPTH32F_STENCIL8:E===dr&&(W=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===oi||E===As?W=i.DEPTH_COMPONENT24:E===Kn?W=i.DEPTH_COMPONENT32F:E===dr&&(W=i.DEPTH_COMPONENT16),W}function _(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==nn&&L.minFilter!==pn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function w(L){const E=new WeakRef(L);n.get(L).__ref=E,v.add(E),M.register(L,E,E)}function b(L){const E=n.get(L).__ref;E!==void 0&&(v.delete(E),M.unregister(E))}function P(L){U(L.target)}function D(L){C(L.target)}function U(L){L.removeEventListener("dispose",P),b(L),H(L),L.isVideoTexture&&u.delete(L),L.isHTMLTexture&&f.delete(L)}function C(L){L.removeEventListener("dispose",D),b(L),J(L)}function z(){for(const L of v){const E=L.deref();E!==void 0&&(E.isRenderTarget===!0?C(E):U(E))}v.clear(),f.clear()}function H(L){const E=n.get(L);if(E.__webglInit===void 0)return;const W=L.source,ue=p.get(W);if(ue){const se=ue[E.__cacheKey];se.usedTimes--,se.usedTimes===0&&O(L),Object.keys(ue).length===0&&p.delete(W)}n.remove(L)}function O(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const W=L.source,ue=p.get(W);delete ue[E.__cacheKey],a.memory.textures--}function J(L){const E=n.get(L);E.__depthDisposeCallback&&E.__depthDisposeCallback();const W=L.depthTexture;if(W&&W.renderTarget===L&&U(W),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let _e=0;_e<E.__webglFramebuffer[se].length;_e++)i.deleteFramebuffer(E.__webglFramebuffer[se][_e]);else i.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)i.deleteFramebuffer(E.__webglFramebuffer[se]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ue=L.textures;for(let se=0,_e=ue.length;se<_e;se++){const Ee=n.get(ue[se]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(ue[se])}n.remove(L)}let k=0;function G(){k=0}function X(){return k}function ae(L){k=L}function Ae(){const L=k;return L>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),k+=1,L}function Y(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.mipmapsAutoUpdate),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function re(L,E){const W=n.get(L);if(L.isVideoTexture&&Ot(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const ue=L.image;if(ue===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(W,L,E);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+E)}function Pe(L,E){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){pe(W,L,E);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+E)}function Ne(L,E){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){pe(W,L,E);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+E)}function fe(L,E){const W=n.get(L);if(L.version>0&&W.__version!==L.version){Ie(W,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+E)}const Ue={[Ts]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},tt={[nn]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[Er]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},ke={[Ah]:i.NEVER,[Zu]:i.ALWAYS,[Rh]:i.LESS,[Yu]:i.LEQUAL,[Ch]:i.EQUAL,[$u]:i.GEQUAL,[Ph]:i.GREATER,[Lh]:i.NOTEQUAL};function Ze(L,E){if(E.type===Kn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pn||E.magFilter===Fa||E.magFilter===Er||E.magFilter===ri||E.minFilter===pn||E.minFilter===Fa||E.minFilter===Er||E.minFilter===ri)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Ue[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Ue[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Ue[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,tt[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,tt[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,ke[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===nn||E.minFilter!==Er&&E.minFilter!==ri||E.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function rt(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",P),w(E));const ue=E.source;let se=p.get(ue);se===void 0&&(se={},p.set(ue,se));const _e=Y(E);if(_e!==L.__cacheKey){se[_e]===void 0&&(se[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),se[_e].usedTimes++;const Ee=se[L.__cacheKey];Ee!==void 0&&(se[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&O(E)),L.__cacheKey=_e,L.__webglTexture=se[_e].texture}return W}function ie(L,E,W){return Math.floor(Math.floor(L/W)/E)}function ge(L,E,W,ue){const _e=L.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,W,ue,E.data);else{_e.sort((F,ne)=>F.start-ne.start);let Ee=0;for(let F=1;F<_e.length;F++){const ne=_e[Ee],Q=_e[F],be=ne.start+ne.count,me=ie(Q.start,E.width,4),Me=ie(ne.start,E.width,4);Q.start<=be+1&&me===Me&&ie(Q.start+Q.count-1,E.width,4)===me?ne.count=Math.max(ne.count,Q.start+Q.count-ne.start):(++Ee,_e[Ee]=Q)}_e.length=Ee+1;const j=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),ye=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let F=0,ne=_e.length;F<ne;F++){const Q=_e[F],be=Math.floor(Q.start/4),me=Math.ceil(Q.count/4),Me=be%E.width,Ve=Math.floor(be/E.width),at=me,de=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(i.TEXTURE_2D,0,Me,Ve,at,de,W,ue,E.data)}L.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function pe(L,E,W){let ue=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=i.TEXTURE_3D);const se=rt(L,E),_e=E.source;t.bindTexture(ue,L.__webglTexture,i.TEXTURE0+W);const Ee=n.get(_e);if(_e.version!==Ee.__version||se===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const de=xt.getPrimaries(xt.workingColorSpace),Xe=E.colorSpace===$n?null:xt.getPrimaries(E.colorSpace),it=E.colorSpace===$n||de===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let te=x(E.image,!1,s.maxTextureSize);te=qe(E,te);const ye=r.convert(E.format,E.colorSpace),F=r.convert(E.type);let ne=R(E.internalFormat,ye,F,E.normalized,E.colorSpace,E.isVideoTexture);Ze(ue,E);let Q;const be=E.mipmaps,me=E.isVideoTexture!==!0,Me=Ee.__version===void 0||se===!0,Ve=_e.dataReady,at=_(E,te);if(E.isDepthTexture)ne=g(E.format===Ai,E.type),Me&&(me?t.texStorage2D(i.TEXTURE_2D,1,ne,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,ye,F,null));else if(E.isDataTexture)if(be.length>0){me&&Me&&t.texStorage2D(i.TEXTURE_2D,at,ne,be[0].width,be[0].height);for(let de=0,Xe=be.length;de<Xe;de++)Q=be[de],me?Ve&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Q.width,Q.height,ye,F,Q.data):t.texImage2D(i.TEXTURE_2D,de,ne,Q.width,Q.height,0,ye,F,Q.data);E.generateMipmaps=!1}else me?(Me&&t.texStorage2D(i.TEXTURE_2D,at,ne,te.width,te.height),Ve&&ge(E,te,ye,F)):t.texImage2D(i.TEXTURE_2D,0,ne,te.width,te.height,0,ye,F,te.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){me&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,ne,be[0].width,be[0].height,te.depth);for(let de=0,Xe=be.length;de<Xe;de++)if(Q=be[de],E.format!==Tn)if(ye!==null)if(me){if(Ve)if(E.layerUpdates.size>0){const it=qc(Q.width,Q.height,E.format,E.type);for(const Re of E.layerUpdates){const wt=Q.data.subarray(Re*it/Q.data.BYTES_PER_ELEMENT,(Re+1)*it/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,Re,Q.width,Q.height,1,ye,wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Q.width,Q.height,te.depth,ye,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,ne,Q.width,Q.height,te.depth,0,Q.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,Q.width,Q.height,te.depth,ye,F,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,ne,Q.width,Q.height,te.depth,0,ye,F,Q.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{me&&Me&&t.texStorage2D(i.TEXTURE_2D,at,ne,be[0].width,be[0].height);for(let de=0,Xe=be.length;de<Xe;de++)Q=be[de],E.format!==Tn?ye!==null?me?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,Q.width,Q.height,ye,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,de,ne,Q.width,Q.height,0,Q.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?Ve&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Q.width,Q.height,ye,F,Q.data):t.texImage2D(i.TEXTURE_2D,de,ne,Q.width,Q.height,0,ye,F,Q.data)}else if(E.isDataArrayTexture)if(me){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,ne,te.width,te.height,te.depth),Ve)if(E.layerUpdates.size>0){const de=qc(te.width,te.height,E.format,E.type);for(const Xe of E.layerUpdates){const it=te.data.subarray(Xe*de/te.data.BYTES_PER_ELEMENT,(Xe+1)*de/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Xe,te.width,te.height,1,ye,F,it)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ye,F,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,te.width,te.height,te.depth,0,ye,F,te.data);else if(E.isData3DTexture)me?(Me&&t.texStorage3D(i.TEXTURE_3D,at,ne,te.width,te.height,te.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ye,F,te.data)):t.texImage3D(i.TEXTURE_3D,0,ne,te.width,te.height,te.depth,0,ye,F,te.data);else if(E.isFramebufferTexture){if(Me)if(me)t.texStorage2D(i.TEXTURE_2D,at,ne,te.width,te.height);else{let de=te.width,Xe=te.height;for(let it=0;it<at;it++)t.texImage2D(i.TEXTURE_2D,it,ne,de,Xe,0,ye,F,null),de>>=1,Xe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const de=i.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),te.parentNode!==de){de.appendChild(te),f.add(E),de.onpaint=Xe=>{const it=Xe.changedElements;for(const Re of f)it.includes(Re.image)&&(Re.needsUpdate=!0)},de.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,te);else{const it=i.RGBA,Re=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,it,Re,wt,te)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(be.length>0){if(me&&Me){const de=Ke(be[0]);t.texStorage2D(i.TEXTURE_2D,at,ne,de.width,de.height)}for(let de=0,Xe=be.length;de<Xe;de++)Q=be[de],me?Ve&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ye,F,Q):t.texImage2D(i.TEXTURE_2D,de,ne,ye,F,Q);E.generateMipmaps=!1}else if(me){if(Me){const de=Ke(te);t.texStorage2D(i.TEXTURE_2D,at,ne,de.width,de.height)}Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,F,te)}else t.texImage2D(i.TEXTURE_2D,0,ne,ye,F,te);y(E)&&E.mipmapsAutoUpdate===!0&&S(ue),Ee.__version=_e.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ie(L,E,W){if(E.image.length!==6)return;const ue=rt(L,E),se=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);const _e=n.get(se);if(se.version!==_e.__version||ue===!0){t.activeTexture(i.TEXTURE0+W);const Ee=xt.getPrimaries(xt.workingColorSpace),j=E.colorSpace===$n?null:xt.getPrimaries(E.colorSpace),te=E.colorSpace===$n||Ee===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ye=E.isCompressedTexture||E.image[0].isCompressedTexture,F=E.image[0]&&E.image[0].isDataTexture,ne=[];for(let Re=0;Re<6;Re++)!ye&&!F?ne[Re]=x(E.image[Re],!0,s.maxCubemapSize):ne[Re]=F?E.image[Re].image:E.image[Re],ne[Re]=qe(E,ne[Re]);const Q=ne[0],be=r.convert(E.format,E.colorSpace),me=r.convert(E.type);let Me=R(E.internalFormat,be,me,E.normalized,E.colorSpace);const Ve=E.isVideoTexture!==!0,at=_e.__version===void 0||ue===!0,de=se.dataReady;let Xe=_(E,Q);Ze(i.TEXTURE_CUBE_MAP,E);let it;if(E.isDepthTexture){if(Me=g(E.format===Ai,E.type),at)if(Ve)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Me,Q.width,Q.height);else for(let Re=0;Re<6;Re++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Me,Q.width,Q.height,0,be,me,null)}else if(ye){Ve&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Me,Q.width,Q.height);for(let Re=0;Re<6;Re++){it=ne[Re].mipmaps;for(let wt=0;wt<it.length;wt++){const Zt=it[wt];E.format!==Tn?be!==null?Ve?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,wt,0,0,Zt.width,Zt.height,be,Zt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,wt,Me,Zt.width,Zt.height,0,Zt.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,wt,0,0,Zt.width,Zt.height,be,me,Zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,wt,Me,Zt.width,Zt.height,0,be,me,Zt.data)}}}else{if(it=E.mipmaps,Ve&&at){it.length>0&&Xe++;const Re=Ke(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,Me,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(F){Ve?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,ne[Re].width,ne[Re].height,be,me,ne[Re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Me,ne[Re].width,ne[Re].height,0,be,me,ne[Re].data);for(let wt=0;wt<it.length;wt++){const vi=it[wt].image[Re].image;Ve?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,wt+1,0,0,vi.width,vi.height,be,me,vi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,wt+1,Me,vi.width,vi.height,0,be,me,vi.data)}}else{Ve?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,be,me,ne[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Me,be,me,ne[Re]);for(let wt=0;wt<it.length;wt++){const Zt=it[wt];Ve?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,wt+1,0,0,be,me,Zt.image[Re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,wt+1,Me,be,me,Zt.image[Re])}}}y(E)&&E.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),_e.__version=se.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function xe(L,E,W,ue,se,_e){const Ee=r.convert(W.format,W.colorSpace),j=r.convert(W.type),te=R(W.internalFormat,Ee,j,W.normalized,W.colorSpace),ye=n.get(E),F=n.get(W);if(F.__renderTarget=E,!ye.__hasExternalTextures){const ne=Math.max(1,E.width>>_e),Q=Math.max(1,E.height>>_e);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,_e,te,ne,Q,E.depth,0,Ee,j,null):t.texImage2D(se,_e,te,ne,Q,0,Ee,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Se(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,se,F.__webglTexture,0,bt(E)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,se,F.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(L,E,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const ue=E.depthTexture,se=ue&&ue.isDepthTexture?ue.type:null,_e=g(E.stencilBuffer,se),Ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(E),_e,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(E),_e,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,L)}else{const ue=E.textures;for(let se=0;se<ue.length;se++){const _e=ue[se],Ee=r.convert(_e.format,_e.colorSpace),j=r.convert(_e.type),te=R(_e.internalFormat,Ee,j,_e.normalized,_e.colorSpace);Se(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(E),te,E.width,E.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(E),te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,te,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(L,E,W){const ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const se=n.get(E.depthTexture);se.__renderTarget=E;const _e=ue?E.depthTexture.image[0]:E.depthTexture.image;(!se.__webglTexture||_e.width!==E.width||_e.height!==E.height)&&(_e.width=E.width,_e.height=E.height,E.depthTexture.needsUpdate=!0),ue?fe(E.depthTexture,0):re(E.depthTexture,0);const Ee=se.__webglTexture,j=bt(E),te=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ye=E.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ri)Se(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,te,Ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ye,te,Ee,0);else if(E.depthTexture.format===Ai)Se(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,te,Ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,ye,te,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ct(L){const E=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ue=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",se)};ue.addEventListener("dispose",se),E.__depthDisposeCallback=se}E.__boundDepthTexture=ue}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let ue=0;ue<6;ue++)Be(E.__webglFramebuffer[ue],L,ue);else L.texture.mipmaps.length>0?Be(E.__webglFramebuffer[0],L,0):Be(E.__webglFramebuffer,L,0);else if(W){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=i.createRenderbuffer(),Ye(E.__webglDepthbuffer[ue],L,!1);else{const se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,_e)}}else if(L.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ye(E.__webglDepthbuffer,L,!1);else{const se=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,_e)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(L,E,W){const ue=n.get(L);E!==void 0&&xe(ue.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ct(L)}function ve(L){const E=L.texture,W=n.get(L),ue=n.get(E);L.addEventListener("dispose",D),w(L);const se=L.textures,_e=L.isWebGLCubeRenderTarget===!0,Ee=se.length>1;if(Ee||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=E.version,a.memory.textures++),_e){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(E.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let te=0;te<E.mipmaps.length;te++)W.__webglFramebuffer[j][te]=i.createFramebuffer()}else W.__webglFramebuffer[j]=i.createFramebuffer()}else{if(E.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<E.mipmaps.length;j++)W.__webglFramebuffer[j]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let j=0,te=se.length;j<te;j++){const ye=n.get(se[j]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&Se(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<se.length;j++){const te=se[j];W.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[j]);const ye=r.convert(te.format,te.colorSpace),F=r.convert(te.type),ne=R(te.internalFormat,ye,F,te.normalized,te.colorSpace,L.isXRRenderTarget===!0),Q=bt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ne,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,W.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ye(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,E);for(let j=0;j<6;j++)if(E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)xe(W.__webglFramebuffer[j][te],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else xe(W.__webglFramebuffer[j],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);y(E)?S(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(Ee){for(let j=0,te=se.length;j<te;j++){const ye=se[j],F=n.get(ye);let ne=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ne=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,F.__webglTexture),Ze(ne,ye),xe(W.__webglFramebuffer,L,ye,i.COLOR_ATTACHMENT0+j,ne,0),y(ye)&&S(ne)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(j=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,ue.__webglTexture),Ze(j,E),E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)xe(W.__webglFramebuffer[te],L,E,i.COLOR_ATTACHMENT0,j,te);else xe(W.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,j,0);y(E)?S(j):E.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}L.depthBuffer&&ct(L)}function N(L){const E=L.textures;for(let W=0,ue=E.length;W<ue;W++){const se=E[W];if(y(se)&&se.mipmapsAutoUpdate===!0){const _e=T(L),Ee=n.get(se).__webglTexture;t.bindTexture(_e,Ee),S(_e),t.unbindTexture()}}}const ft=[];function $e(L){if(L.samples>0){if(Se(L)===!1){const E=L.textures,W=L.width,ue=L.height;let se=i.COLOR_BUFFER_BIT;const _e=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(L),j=E.length>1;if(j)for(let ye=0;ye<E.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),L.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ye=0;ye<E.length;ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);const F=n.get(E[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,F,0)}i.blitFramebuffer(0,0,W,ue,0,0,W,ue,se,i.NEAREST),l===!0&&(ft.length=0,ft.push(i.COLOR_ATTACHMENT0+ye),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&ft.push(_e),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ye=0;ye<E.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ye]);const F=n.get(E[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,F,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function bt(L){return Math.min(s.maxSamples,L.samples)}function Se(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ot(L){const E=a.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function qe(L,E){const W=L.colorSpace,ue=L.format,se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Sa&&W!==$n&&(xt.getTransfer(W)===Et?(ue!==Tn||se!==En)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):St("WebGLTextures: Unsupported texture color space:",W)),E}function Ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=Ae,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=ae,this.setTexture2D=re,this.setTexture2DArray=Pe,this.setTexture3D=Ne,this.setTextureCube=fe,this.rebindTextures=ut,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Se,this.dispose=z}function zx(i,e){function t(n,s=$n){let r;const a=xt.getTransfer(s);if(n===En)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===Xu)return i.ALPHA;if(n===qu)return i.RGB;if(n===Tn)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Ll)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===Dl)return i.RG_INTEGER;if(n===Il)return i.RGBA_INTEGER;if(n===ca||n===ua||n===ha||n===fa)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ca)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ca)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lo||n===Do||n===Io||n===Uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===zo||n===Oo||n===Bo||n===va||n===ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oo)return r.COMPRESSED_R11_EAC;if(n===Bo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===va)return r.COMPRESSED_RG11_EAC;if(n===ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ho||n===Go||n===Vo||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo||n===Ko||n===Jo||n===Qo||n===jo||n===el)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ho)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$o)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ko)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jo)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tl||n===nl||n===il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===tl)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===rl||n===_a||n===al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new o0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qt({vertexShader:Ox,fragmentShader:Bx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hx extends Ji{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",h=new kx,m={},x=t.getContextAttributes();let y=null,S=null;const T=[],R=[],g=new ce;let _=null,w=null;const b=new bn;b.viewport=new kt;const P=new bn;P.viewport=new kt;const D=[b,P],U=new jf;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let re=T[Y];return re===void 0&&(re=new Xa,T[Y]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Y){let re=T[Y];return re===void 0&&(re=new Xa,T[Y]=re),re.getGripSpace()},this.getHand=function(Y){let re=T[Y];return re===void 0&&(re=new Xa,T[Y]=re),re.getHandSpace()};function H(Y){const re=R.indexOf(Y.inputSource);if(re===-1)return;const Pe=T[re];Pe!==void 0&&(Pe.update(Y.inputSource,Y.frame,c||a),Pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",J);for(let Y=0;Y<T.length;Y++){const re=R[Y];re!==null&&(R[Y]=null,T[Y].disconnect(re))}C=null,z=null,h.reset();for(const Y in m)delete m[Y];if(e.setRenderTarget(y),p=null,d=null,f=null,s=null,S=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(g.width,g.height,!1),w!==null){const Y=w.camera;Y.fov=w.fov,Y.zoom=w.zoom,Y.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",O),s.addEventListener("inputsourceschange",J),x.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Ne=null,fe=null;x.depth&&(fe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=x.stencil?Ai:Ri,Ne=x.stencil?As:oi);const Ue={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new cn(d.textureWidth,d.textureHeight,{format:Tn,type:En,depthTexture:new Cs(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Pe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new cn(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function J(Y){for(let re=0;re<Y.removed.length;re++){const Pe=Y.removed[re],Ne=R.indexOf(Pe);Ne>=0&&(R[Ne]=null,T[Ne].disconnect(Pe))}for(let re=0;re<Y.added.length;re++){const Pe=Y.added[re];let Ne=R.indexOf(Pe);if(Ne===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=R.length){R.push(Pe),Ne=Ue;break}else if(R[Ue]===null){R[Ue]=Pe,Ne=Ue;break}if(Ne===-1)break}const fe=T[Ne];fe&&fe.connect(Pe)}}function k(Y,re){re===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(re.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let re=Y.near,Pe=Y.far;h.texture!==null&&(h.depthNear>0&&(re=h.depthNear),h.depthFar>0&&(Pe=h.depthFar)),U.near=P.near=b.near=re,U.far=P.far=b.far=Pe,(C!==U.near||z!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),C=U.near,z=U.far),U.layers.mask=Y.layers.mask|6,b.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;const Ne=Y.parent,fe=U.cameras;k(U,Ne);for(let Ue=0;Ue<fe.length;Ue++)k(fe[Ue],Ne);U.projectionMatrix.copy(b.projectionMatrix),U.projectionMatrixInverse.copy(b.projectionMatrixInverse),w===null&&Y.isPerspectiveCamera&&(w={camera:Y,fov:Y.fov,zoom:Y.zoom}),G(Y,U,Ne)};function G(Y,re,Pe){Pe===null?Y.matrix.copy(re.matrixWorld):(Y.matrix.copy(Pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(re.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(re.projectionMatrix),Y.projectionMatrixInverse.copy(re.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(U)},this.getCameraTexture=function(Y){return m[Y]};let X=null;function ae(Y,re){if(u=re.getViewerPose(c||a),v=re,u!==null){const Pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ne=!1;Pe.length!==U.cameras.length&&(U.cameras.length=0,Ne=!0);for(let ke=0;ke<Pe.length;ke++){const Ze=Pe[ke];let rt=null;if(p!==null)rt=p.getViewport(Ze);else{const ge=f.getViewSubImage(d,Ze);rt=ge.viewport,ke===0&&(e.setRenderTargetTextures(S,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(S))}let ie=D[ke];ie===void 0&&(ie=new bn,ie.layers.enable(ke),ie.viewport=new kt,D[ke]=ie),ie.matrix.fromArray(Ze.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Ze.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(rt.x,rt.y,rt.width,rt.height),ke===0&&(U.matrix.copy(ie.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ne===!0&&U.cameras.push(ie)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const ke=f.getDepthInformation(Pe[0]);ke&&ke.isValid&&ke.texture&&h.init(ke,s.renderState)}if(fe&&fe.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let ke=0;ke<Pe.length;ke++){const Ze=Pe[ke].camera;if(Ze){let rt=m[Ze];rt||(rt=new o0,m[Ze]=rt);const ie=f.getCameraImage(Ze);rt.sourceTexture=ie}}}}for(let Pe=0;Pe<T.length;Pe++){const Ne=R[Pe],fe=T[Pe];Ne!==null&&fe!==void 0&&fe.update(Ne,re,c||a)}X&&X(Y,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),v=null}const Ae=new S0;Ae.setAnimationLoop(ae),this.setAnimationLoop=function(Y){X=Y},this.dispose=function(){}}}const Gx=new dt,L0=new nt;L0.set(-1,0,0,0,1,0,0,0,1);function Vx(i,e){function t(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,x0(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function s(h,m,x,y,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(h,m):m.isMeshLambertMaterial?(r(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(h,m),f(h,m)):m.isMeshPhongMaterial?(r(h,m),u(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(h,m),d(h,m),m.isMeshPhysicalMaterial&&p(h,m,S)):m.isMeshMatcapMaterial?(r(h,m),v(h,m)):m.isMeshDepthMaterial?r(h,m):m.isMeshDistanceMaterial?(r(h,m),M(h,m)):m.isMeshNormalMaterial?r(h,m):m.isLineBasicMaterial?(a(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?l(h,m,x,y):m.isSpriteMaterial?c(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,t(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===mn&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,t(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===mn&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,t(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,t(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const x=e.get(m),y=x.envMap,S=x.envMapRotation;y&&(h.envMap.value=y,h.envMapRotation.value.setFromMatrix4(Gx.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(L0),h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,h.aoMapTransform))}function a(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform))}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function l(h,m,x,y){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*x,h.scale.value=y*.5,m.map&&(h.map.value=m.map,t(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function c(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function u(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function f(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function d(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function p(h,m,x){h.ior.value=m.ior,m.diffuseRoughness>0&&(h.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.retroreflectivity>0&&(h.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=x.texture,h.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,h.specularIntensityMapTransform))}function v(h,m){m.matcap&&(h.matcap.value=m.matcap)}function M(h,m){const x=e.get(m).light;h.referencePosition.value.setFromMatrixPosition(x.matrixWorld),h.nearDistance.value=x.shadow.camera.near,h.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wx(i,e,t,n){let s={},r={};function a(x,y){const S=y.program;n.uniformBlockBinding(x,S,s[x.id])}function o(x,y){let S=s[x.id];S===void 0&&(v(x),S=l(x),s[x.id]=S,x.addEventListener("dispose",h));const T=y.program;n.updateUBOMapping(x,T);const R=e.render.frame;r[x.id]!==R&&(c(x),r[x.id]=R)}function l(x){const y=i.createBuffer(),S=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,S,T),i.bindBuffer(i.UNIFORM_BUFFER,null),y}function c(x){const y=s[x.id],S=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,g=S.length;R<g;R++){const _=S[R];if(Array.isArray(_))for(let w=0,b=_.length;w<b;w++)u(_[w],R,w,T);else u(_,R,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,y,S,T){if(d(x,y,S,T)===!0){const R=x.__offset,g=x.value;if(Array.isArray(g)){let _=0;for(let w=0;w<g.length;w++){const b=g[w],P=M(b,!0);f(b,x.__data,_),_+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,x.__data)}}function f(x,y,S){typeof x=="number"||typeof x=="boolean"?y[S]=x:x.isMatrix3?(y[S]=x.elements[0],y[S+1]=x.elements[1],y[S+2]=x.elements[2],y[S+3]=0,y[S+4]=x.elements[3],y[S+5]=x.elements[4],y[S+6]=x.elements[5],y[S+7]=0,y[S+8]=x.elements[6],y[S+9]=x.elements[7],y[S+10]=x.elements[8],y[S+11]=0):ArrayBuffer.isView(x)?y.set(x.subarray(0,y.length-S),S):x.toArray(y,S)}function d(x,y,S,T){const R=x.value,g=y+"_"+S;if(Array.isArray(R)){T[g]===void 0&&(T[g]=[]);const _=T[g];let w=!1;for(let b=0;b<R.length;b++)p(R[b],_,b)===!0&&(w=!0);return w}return p(R,T,g)}function p(x,y,S){if(y[S]===void 0)return typeof x=="number"||typeof x=="boolean"?y[S]=x:ArrayBuffer.isView(x)?y[S]=x.slice():y[S]=x.clone(),!0;{const T=y[S];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return y[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function v(x){const y=x.uniforms;let S=0;const T=16;for(let g=0,_=y.length;g<_;g++){const w=Array.isArray(y[g])?y[g]:[y[g]];for(let b=0,P=w.length;b<P;b++){const D=w[b],U=Array.isArray(D.value)?D.value:[D.value],C=Array.isArray(y[g])||Array.isArray(D.value);let z=S;for(let O=0,J=U.length;O<J;O++){const k=U[O],G=M(k,C),X=S%T,ae=X%G.boundary,Ae=X+ae;S+=ae,Ae!==0&&T-Ae<G.storage&&(S+=T-Ae),O===0&&(z=S),S+=G.storage}const H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((S-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}const R=S%T;return R>0&&(S+=T-R),x.__size=S,x.__cache={},this}function M(x,y){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=16,S.storage=48):x.isMatrix4?(S.boundary=16,S.storage=64):x.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",x),y===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function h(x){const y=x.target;y.removeEventListener("dispose",h),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:m}}const Xx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function qx(){return ei===null&&(ei=new zs(Xx,16,16,$i,Mn),ei.name="DFG_LUT",ei.minFilter=pn,ei.magFilter=pn,ei.wrapS=si,ei.wrapT=si,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class Yx{constructor(e={}){const{canvas:t=Uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:p=En}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const M=p,h=new Set([Il,Dl,Ll]),m=new Set([En,oi,dr,As,Rl,Cl]),x=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let T=null,R=null;const g=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,D=null,U=null,C=null,z=null;this._outputColorSpace=jt;let H=0,O=0,J=null,k=-1,G=null;const X=new kt,ae=new kt;let Ae=null;const Y=new De(0);let re=0,Pe=t.width,Ne=t.height,fe=1,Ue=null,tt=null;const ke=new kt(0,0,Pe,Ne),Ze=new kt(0,0,Pe,Ne);let rt=!1;const ie=new Rs,ge=new zl;let pe=!1,Ie=!1;const xe=new dt,Ye=new I,Be=new kt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function ve(){return J===null?fe:1}let N=n;function ft(A,B){return t.getContext(A,B)}let $e,bt,Se,Ot,qe,Ke,L,E,W,ue,se,_e,Ee,j,te,ye,F,ne,Q,be,me,Me,Ve;try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",it,!1),t.addEventListener("webglcontextcreationerror",Re,!1),N===null){const B="webgl2";if(N=ft(B,A),N===null)throw ft(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(A){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),St("WebGLRenderer: "+A.message),A}function at(){$e=new Km(N),$e.init(),me=new zx(N,$e),bt=new Bm(N,$e,e,me),Se=new Nx(N,$e),bt.reversedDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),U=N.createFramebuffer(),C=N.createFramebuffer(),z=N.createFramebuffer(),Ot=new jm(N),qe=new Sx,Ke=new Fx(N,$e,Se,qe,bt,me,Ot),L=new Zm(b),E=new td(N),Me=new zm(N,E),W=new Jm(N,E,Ot,Me),ue=new tg(N,W,E,Me,Ot),ne=new eg(N,bt,Ke),te=new km(qe),se=new Mx(b,L,$e,bt,Me,te),_e=new Vx(b,qe),Ee=new bx,j=new Cx($e),F=new Fm(b,L,Se,ue,v,l),ye=new Ux(b,ue,bt),Ve=new Wx(N,Ot,bt,Se),Q=new Om(N,$e,Ot),be=new Qm(N,$e,Ot),Ot.programs=se.programs,b.capabilities=bt,b.extensions=$e,b.properties=qe,b.renderLists=Ee,b.shadowMap=ye,b.state=Se,b.info=Ot}M!==En&&(w=new ig(M,t.width,t.height,o,s,r));const de=new Hx(b,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=$e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(A){A!==void 0&&(fe=A,this.setSize(Pe,Ne,!1))},this.getSize=function(A){return A.set(Pe,Ne)},this.setSize=function(A,B,Z=!0){if(de.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=A,Ne=B,t.width=Math.floor(A*fe),t.height=Math.floor(B*fe),Z===!0&&(t.style.width=A+"px",t.style.height=B+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(Pe*fe,Ne*fe).floor()},this.setDrawingBufferSize=function(A,B,Z){Pe=A,Ne=B,fe=Z,t.width=Math.floor(A*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(M===En){St("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,B,Z,V){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,B,Z,V),Se.viewport(X.copy(ke).multiplyScalar(ve()).round())},this.getScissor=function(A){return A.copy(Ze)},this.setScissor=function(A,B,Z,V){A.isVector4?Ze.set(A.x,A.y,A.z,A.w):Ze.set(A,B,Z,V),Se.scissor(ae.copy(Ze).multiplyScalar(ve()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(A){Se.setScissorTest(rt=A)},this.setOpaqueSort=function(A){Ue=A},this.setTransparentSort=function(A){tt=A},this.getClearColor=function(A){return A.copy(F.getClearColor())},this.setClearColor=function(){F.setClearColor(...arguments)},this.getClearAlpha=function(){return F.getClearAlpha()},this.setClearAlpha=function(){F.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,Z=!0){let V=0;if(A){let q=!1;if(J!==null){const Te=J.texture.format;q=h.has(Te)}if(q){const Te=J.texture.type,Fe=m.has(Te),we=F.getClearColor(),Le=F.getClearAlpha(),He=we.r,je=we.g,pt=we.b;Fe?(x[0]=He,x[1]=je,x[2]=pt,x[3]=Le,N.clearBufferuiv(N.COLOR,0,x)):(y[0]=He,y[1]=je,y[2]=pt,y[3]=Le,N.clearBufferiv(N.COLOR,0,y))}else V|=N.COLOR_BUFFER_BIT}B&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",it,!1),t.removeEventListener("webglcontextcreationerror",Re,!1),F.dispose(),Ee.dispose(),j.dispose(),Ke.dispose(),qe.dispose(),L.dispose(),ue.dispose(),W.dispose(),Me.dispose(),Ve.dispose(),se.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ql),de.removeEventListener("sessionend",jl),Pi.stop()};function Xe(A){A.preventDefault(),dc("WebGLRenderer: Context Lost."),P=!0}function it(){dc("WebGLRenderer: Context Restored."),P=!1;const A=Ot.autoReset,B=ye.enabled,Z=ye.autoUpdate,V=ye.needsUpdate,q=ye.type;at(),Ot.autoReset=A,ye.enabled=B,ye.autoUpdate=Z,ye.needsUpdate=V,ye.type=q}function Re(A){St("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wt(A){const B=A.target;B.removeEventListener("dispose",wt),Zt(B)}function Zt(A){vi(A),qe.remove(A)}function vi(A){const B=qe.get(A).programs;B!==void 0&&(B.forEach(function(Z){se.releaseProgram(Z)}),A.isShaderMaterial&&se.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Z,V,q,Te){B===null&&(B=ct);const Fe=q.isMesh&&q.matrixWorld.determinantAffine()<0,we=j0(A,B,Z,V,q);Se.setMaterial(V,Fe);let Le=Z.index,He=1;if(V.wireframe===!0){if(Le=W.getWireframeAttribute(Z),Le===void 0)return;He=2}const je=Z.drawRange,pt=Z.attributes.position;let ze=je.start*He,mt=(je.start+je.count)*He;Te!==null&&(ze=Math.max(ze,Te.start*He),mt=Math.min(mt,(Te.start+Te.count)*He)),Le!==null?(ze=Math.max(ze,0),mt=Math.min(mt,Le.count)):pt!=null&&(ze=Math.max(ze,0),mt=Math.min(mt,pt.count));const Vt=mt-ze;if(Vt<0||Vt===1/0)return;Me.setup(q,V,we,Z,Le);let Ct,Rt=Q;if(Le!==null&&(Ct=E.get(Le),Rt=be,Rt.setIndex(Ct)),q.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*ve()),Rt.setMode(N.LINES)):Rt.setMode(N.TRIANGLES);else if(q.isLine){let un=V.linewidth;un===void 0&&(un=1),Se.setLineWidth(un*ve()),q.isLineSegments?Rt.setMode(N.LINES):q.isLineLoop?Rt.setMode(N.LINE_LOOP):Rt.setMode(N.LINE_STRIP)}else q.isPoints?Rt.setMode(N.POINTS):q.isSprite&&Rt.setMode(N.TRIANGLES);if(q.isBatchedMesh)if($e.get("WEBGL_multi_draw"))Rt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const un=q._multiDrawStarts,Oe=q._multiDrawCounts,vn=q._multiDrawCount,yt=Le?E.get(Le).bytesPerElement:1,Li=qe.get(V).currentProgram.getUniforms();for(let hn=0;hn<vn;hn++)Li.setValue(N,"_gl_DrawID",hn),Rt.render(un[hn]/yt,Oe[hn])}else if(q.isInstancedMesh)Rt.renderInstances(ze,Vt,q.count);else if(Z.isInstancedBufferGeometry){const un=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Oe=Math.min(Z.instanceCount,un);Rt.renderInstances(ze,Vt,Oe)}else Rt.render(ze,Vt)};function Jl(A,B,Z,V){D!==null&&A.isNodeMaterial&&D.setObject(V,A),pe===!0&&te.setState(A,Z,!1),A.transparent===!0&&A.side===ii&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,ks(A,B,V),A.side=qi,A.needsUpdate=!0,ks(A,B,V),A.side=ii):ks(A,B,V)}this.compile=function(A,B,Z=null){Z===null&&(Z=A),D!==null&&D.renderStart(A,B,Z),R=j.get(Z),R.init(B),_.push(R),Z.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),A!==Z&&A.traverseVisible(function(q){q.isLight&&q.layers.test(B.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),R.setupLights(),D!==null&&D.updateLights(R.state.lightsArray),Ie=this.localClippingEnabled,pe=te.init(this.clippingPlanes,Ie),pe===!0&&te.setGlobalState(this.clippingPlanes,B),D!==null&&ye.render(R.state.shadowsArray,Z,B);const V=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let Fe=0;Fe<Te.length;Fe++){const we=Te[Fe];Jl(we,Z,B,q),V.add(we)}else Jl(Te,Z,B,q),V.add(Te)}),R=_.pop(),D!==null&&D.renderEnd(),V},this.compileAsync=function(A,B,Z=null){const V=this.compile(A,B,Z);return new Promise(q=>{function Te(){if(V.forEach(function(Fe){const Le=qe.get(Fe).currentProgram;(Le===void 0||Le.isReady())&&V.delete(Fe)}),V.size===0){q(A);return}setTimeout(Te,10)}$e.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Da=null;function J0(A){Da&&Da(A)}function Ql(){Pi.stop()}function jl(){Pi.start()}const Pi=new S0;Pi.setAnimationLoop(J0),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){Da=A,de.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},de.addEventListener("sessionstart",Ql),de.addEventListener("sessionend",jl),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){St("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(A,B);const Z=de.enabled===!0&&de.isPresenting===!0,V=w!==null&&(J===null||Z)&&w.begin(b,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(B),B=de.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,B,J),R=j.get(A,_.length),R.init(B),R.state.textureUnits=Ke.getTextureUnits(),_.push(R),xe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?ge.setFromArrayCamera(B):ie.setFromProjectionMatrix(xe,Jn,B.reversedDepth),Ie=this.localClippingEnabled,pe=te.init(this.clippingPlanes,Ie),T=Ee.get(A,g.length),T.init(),g.push(T),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){const Fe=b.xr.getDepthSensingMesh();Fe!==null&&Ia(Fe,B,-1/0,b.sortObjects)}Ia(A,B,0,b.sortObjects),T.finish(),D!==null&&D.updateLights(R.state.lightsArray),b.sortObjects===!0&&T.sort(Ue,tt),ut=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ut&&F.addToRenderList(T,A),this.info.autoReset===!0&&this.info.reset(),pe===!0&&te.beginShadows();const q=R.state.shadowsArray;if(ye.render(q,A,B),pe===!0&&te.endShadows(),(V&&w.hasRenderPass())===!1){const Fe=T.opaque,we=T.transmissive;if(R.setupLights(),B.isArrayCamera){const Le=B.cameras;if(we.length>0)for(let He=0,je=Le.length;He<je;He++){const pt=Le[He];tc(Fe,we,A,pt)}ut&&F.render(A);for(let He=0,je=Le.length;He<je;He++){const pt=Le[He];ec(T,A,pt,pt.viewport)}}else we.length>0&&tc(Fe,we,A,B),ut&&F.render(A),ec(T,A,B)}J!==null&&O===0&&(Ke.updateMultisampleRenderTarget(J),Ke.updateRenderTargetMipmap(J)),V&&w.end(b),A.isScene===!0&&A.onAfterRender(b,A,B),Me.resetDefaultState(),k=-1,G=null,_.pop(),_.length>0?(R=_[_.length-1],Ke.setTextureUnits(R.state.textureUnits),pe===!0&&te.setGlobalState(b.clippingPlanes,R.state.camera)):R=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,D!==null&&D.renderEnd()};function Ia(A,B,Z,V){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)R.pushLight(A),A.castShadow&&R.pushShadow(A);else if(A.isSprite){const Fe=B.isArrayCamera?ge:ie;if(!A.frustumCulled||A.intersectsFrustum(Fe)){V&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const we=ue.update(A),Le=A.material;Le.visible&&T.push(A,we,Le,Z,Be.z,null,B)}}else if(A.isMesh||A.isLine||A.isPoints){const Fe=B.isArrayCamera?ge:ie;if(!A.frustumCulled||A.intersectsFrustum(Fe)){const we=ue.update(A),Le=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Be.copy(we.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Le)){const He=we.groups;for(let je=0,pt=He.length;je<pt;je++){const ze=He[je],mt=Le[ze.materialIndex];mt&&mt.visible&&T.push(A,we,mt,Z,Be.z,ze,B)}}else Le.visible&&T.push(A,we,Le,Z,Be.z,null,B)}}}const Te=A.children;for(let Fe=0,we=Te.length;Fe<we;Fe++)Ia(Te[Fe],B,Z,V)}function ec(A,B,Z,V){const{opaque:q,transmissive:Te,transparent:Fe}=A;R.setupLightsView(Z),pe===!0&&te.setGlobalState(b.clippingPlanes,Z),V&&Se.viewport(X.copy(V)),q.length>0&&br(q,B,Z),Te.length>0&&br(Te,B,Z),Fe.length>0&&br(Fe,B,Z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function tc(A,B,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[V.id]===void 0){const ze=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[V.id]=new cn(1,1,{generateMipmaps:!0,type:ze?Mn:En,minFilter:ri,samples:Math.max(4,bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const Te=R.state.transmissionRenderTarget[V.id],Fe=V.viewport||X;Te.setSize(Fe.z*b.transmissionResolutionScale,Fe.w*b.transmissionResolutionScale);const we=b.getRenderTarget(),Le=b.getActiveCubeFace(),He=b.getActiveMipmapLevel();b.setRenderTarget(Te),b.getClearColor(Y),re=b.getClearAlpha(),re<1&&b.setClearColor(16777215,.5),b.clear(),ut&&F.render(Z);const je=b.toneMapping;b.toneMapping=ai;const pt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),R.setupLightsView(V),pe===!0&&te.setGlobalState(b.clippingPlanes,V),br(A,Z,V),Ke.updateMultisampleRenderTarget(Te),Ke.updateRenderTargetMipmap(Te),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let mt=0,Vt=B.length;mt<Vt;mt++){const Ct=B[mt],{object:Rt,geometry:un,material:Oe,group:vn}=Ct;if(Oe.side===ii&&Rt.layers.test(V.layers)){const yt=Oe.side;Oe.side=mn,Oe.needsUpdate=!0,nc(Rt,Z,V,un,Oe,vn),Oe.side=yt,Oe.needsUpdate=!0,ze=!0}}ze===!0&&(Ke.updateMultisampleRenderTarget(Te),Ke.updateRenderTargetMipmap(Te))}b.setRenderTarget(we,Le,He),b.setClearColor(Y,re),pt!==void 0&&(V.viewport=pt),b.toneMapping=je}function br(A,B,Z){const V=B.isScene===!0?B.overrideMaterial:null;for(let q=0,Te=A.length;q<Te;q++){const Fe=A[q],{object:we,geometry:Le,group:He}=Fe;let je=Fe.material;je.allowOverride===!0&&V!==null&&(je=V),we.layers.test(Z.layers)&&nc(we,B,Z,Le,je,He)}}function nc(A,B,Z,V,q,Te){D!==null&&q.isNodeMaterial&&D.setObject(A,q),A.onBeforeRender(b,B,Z,V,q,Te),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(b,B,Z,V,A,Te),q.transparent===!0&&q.side===ii&&q.forceSinglePass===!1?(q.side=mn,q.needsUpdate=!0,b.renderBufferDirect(Z,B,V,q,A,Te),q.side=qi,q.needsUpdate=!0,b.renderBufferDirect(Z,B,V,q,A,Te),q.side=ii):b.renderBufferDirect(Z,B,V,q,A,Te),A.onAfterRender(b,B,Z,V,q,Te)}function ic(A){let B=0;for(const Z of A)Z.texture!==null&&B++;return B}function ks(A,B,Z){B.isScene!==!0&&(B=ct);const V=qe.get(A),q=R.state.lights,Te=R.state.shadowsArray,Fe=q.state.version,we=se.getParameters(A,q.state,Te,B,Z,R.state.lightProbeGridArray),Le=se.getProgramCacheKey(we);let He=V.programs;V.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;const je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;V.envMap=L.get(A.envMap||V.environment,je),V.envMapRotation=V.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",wt),He=new Map,V.programs=He,V.programVariants=new Map);let pt=He.get(Le);if(pt!==void 0){if(V.currentProgram===pt&&V.lightsStateVersion===Fe)return rc(A,we),pt}else we.uniforms=se.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,Z,we),A.onBeforeCompile(we,b),pt=se.acquireProgram(we,Le),He.set(Le,pt),V.uniforms=we.uniforms;const ze=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=te.uniform),rc(A,we),V.needsLights=th(A),V.lightsStateVersion=Fe,V.needsLights&&(ze.ambientLightColor.value=q.state.ambient,ze.lightProbe.value=q.state.probe,ze.sunLights.value=q.state.sun,ze.sunLightShadows.value=q.state.sunShadow,ze.directionalLights.value=q.state.directional,ze.directionalLightShadows.value=q.state.directionalShadow,ze.spotLights.value=q.state.spot,ze.spotLightShadows.value=q.state.spotShadow,ze.rectAreaLights.value=q.state.rectArea,ze.ltc_1.value=q.state.rectAreaLTC1,ze.ltc_2.value=q.state.rectAreaLTC2,ze.pointLights.value=q.state.point,ze.pointLightShadows.value=q.state.pointShadow,ze.hemisphereLights.value=q.state.hemi,ze.sunShadowMatrix.value=q.state.sunShadowMatrix,ze.sunShadowCascade.value=q.state.sunShadowCascade,ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,ze.spotLightMatrix.value=q.state.spotLightMatrix,ze.spotLightMap.value=q.state.spotLightMap,ze.pointShadowMatrix.value=q.state.pointShadowMatrix),V.numLightProbeGrids=ic(R.state.lightProbeGridArray),V.currentProgram=pt,V.uniformsList=null,pt}function Q0(A,B,Z,V,q){const Te=qe.get(A),Fe=Te.currentProgram.id+","+V+","+q;let we=Te.programVariants.get(Fe);return we===void 0?(we=ks(A,B,Z),Te.programVariants.set(Fe,we)):(Te.currentProgram=we,Te.uniformsList=null,Te.outputColorSpace=V,Te.toneMapping=q),we}function sc(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=pa.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function rc(A,B){const Z=qe.get(A);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function j0(A,B,Z,V,q){B.isScene!==!0&&(B=ct),Ke.resetTextureUnits();const Te=B.fog,Fe=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,we=J===null?b.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:xt.workingColorSpace,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,He=L.get(V.envMap||Fe,Le),je=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pt=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ze=!!Z.morphAttributes.position,mt=!!Z.morphAttributes.normal,Vt=!!Z.morphAttributes.color;let Ct=ai;V.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ct=b.toneMapping);const Rt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,un=Rt!==void 0?Rt.length:0,Oe=qe.get(V),vn=R.state.lights;if(pe===!0&&(Ie===!0||A!==G)){const It=A===G&&V.id===k;te.setState(V,A,It)}let yt=!1,Li=!1;V.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==vn.state.version||q.isBatchedMesh&&Oe.batching===!1||!q.isBatchedMesh&&Oe.batching===!0||q.isBatchedMesh&&Oe.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Oe.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||q.isInstancedMesh&&Oe.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Oe.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Oe.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Oe.instancingMorph===!1&&q.morphTexture!==null||Oe.envMap!==He||V.fog===!0&&Oe.fog!==Te||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==te.numPlanes||Oe.numIntersection!==te.numIntersection)||Oe.vertexAlphas!==je||Oe.vertexTangents!==pt||Oe.morphTargets!==ze||Oe.morphNormals!==mt||Oe.morphColors!==Vt||Oe.morphTargetsCount!==un||Oe.numLightProbeGrids!==ic(R.state.lightProbeGridArray)?yt=!0:(Oe.outputColorSpace!==we||Oe.toneMapping!==Ct)&&(Li=!0):(yt=!0,Oe.__version=V.version);let hn=Oe.currentProgram;(yt===!0||Li===!0)&&(hn=Li===!0?Q0(V,B,q,we,Ct):ks(V,B,q),D&&V.isNodeMaterial&&D.onUpdateProgram(V,hn,Oe));let wr=!1,_i=!1,Di=!1;const vt=hn.getUniforms(),rn=Oe.uniforms;if(Se.useProgram(hn.program)&&(wr=!0,_i=!0,Di=!0),V.id!==k&&(k=V.id,_i=!0),wr||G!==A){Se.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),vt.setValue(N,"projectionMatrix",A.projectionMatrix),vt.setValue(N,"viewMatrix",A.matrixWorldInverse);const Kt=vt.map.cameraPosition;Kt!==void 0&&Kt.setValue(N,Ye.setFromMatrixPosition(A.matrixWorld)),bt.logarithmicDepthBuffer&&vt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),G!==A&&(G=A,_i=!0,Di=!0)}if(Oe.needsLights&&(vn.state.sunShadowMap.length>0&&vt.setValue(N,"sunShadowMap",vn.state.sunShadowMap,Ke),vn.state.directionalShadowMap.length>0&&vt.setValue(N,"directionalShadowMap",vn.state.directionalShadowMap,Ke),vn.state.spotShadowMap.length>0&&vt.setValue(N,"spotShadowMap",vn.state.spotShadowMap,Ke),vn.state.pointShadowMap.length>0&&vt.setValue(N,"pointShadowMap",vn.state.pointShadowMap,Ke)),q.isSkinnedMesh){vt.setOptional(N,q,"bindMatrix"),vt.setOptional(N,q,"bindMatrixInverse");const It=q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),vt.setValue(N,"boneTexture",It.boneTexture,Ke))}q.isBatchedMesh&&(vt.setOptional(N,q,"batchingTexture"),vt.setValue(N,"batchingTexture",q._matricesTexture,Ke),vt.setOptional(N,q,"batchingIdTexture"),vt.setValue(N,"batchingIdTexture",q._indirectTexture,Ke),vt.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&vt.setValue(N,"batchingColorTexture",q._colorsTexture,Ke));const Vn=Z.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ne.update(q,Z,hn),(_i||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,vt.setValue(N,"receiveShadow",q.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(rn.envMapIntensity.value=B.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=qx()),_i){if(vt.setValue(N,"toneMappingExposure",b.toneMappingExposure),Oe.needsLights&&eh(rn,Di),Te&&V.fog===!0&&_e.refreshFogUniforms(rn,Te),_e.refreshMaterialUniforms(rn,V,fe,Ne,R.state.transmissionRenderTarget[A.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){const It=S;let Kt=0;for(const ci of R.state.lightProbeGridArray)ci.texture!==null&&(It.textures[Kt]=ci.texture,It.min[Kt]=ci.boundingBox.min,It.max[Kt]=ci.boundingBox.max,It.resolution[Kt]=ci.resolution,Kt++);for(const ci in It)It[ci].length=Kt;rn.probesSH.value=It.textures,rn.probesMin.value=It.min,rn.probesMax.value=It.max,rn.probesResolution.value=It.resolution}pa.upload(N,sc(Oe),rn,Ke)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pa.upload(N,sc(Oe),rn,Ke),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(N,"center",q.center),vt.setValue(N,"modelViewMatrix",q.modelViewMatrix),vt.setValue(N,"normalMatrix",q.normalMatrix),vt.setValue(N,"modelMatrix",q.matrixWorld),V.uniformsGroups!==void 0){const It=V.uniformsGroups;for(let Kt=0,ci=It.length;Kt<ci;Kt++){const oc=It[Kt];Ve.update(oc,hn),Ve.bind(oc,hn)}}return hn}function eh(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function th(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,B,Z){const V=qe.get(A);V.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),qe.get(A.texture).__webglTexture=B,qe.get(A.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const Z=qe.get(A);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Z=0){J=A,H=B,O=Z;let V=null,q=!1,Te=!1;if(A){const we=qe.get(A);if(we.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(N.FRAMEBUFFER,we.__webglFramebuffer),X.copy(A.viewport),ae.copy(A.scissor),Ae=A.scissorTest,Se.viewport(X),Se.scissor(ae),Se.setScissorTest(Ae),k=-1;return}else if(we.__webglFramebuffer===void 0)Ke.setupRenderTarget(A);else if(we.__hasExternalTextures)Ke.rebindTextures(A,qe.get(A.texture).__webglTexture,qe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(we.__boundDepthTexture!==je){if(je!==null&&qe.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(A)}}const Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Te=!0);const He=qe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[B])?V=He[B][Z]:V=He[B],q=!0):A.samples>0&&Ke.useMultisampledRTT(A)===!1?V=qe.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?V=He[Z]:V=He,X.copy(A.viewport),ae.copy(A.scissor),Ae=A.scissorTest}else X.copy(ke).multiplyScalar(fe).floor(),ae.copy(Ze).multiplyScalar(fe).floor(),Ae=rt;if(Z!==0&&(V=U),Se.bindFramebuffer(N.FRAMEBUFFER,V)&&Se.drawBuffers(A,V),Se.viewport(X),Se.scissor(ae),Se.setScissorTest(Ae),q){const we=qe.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,we.__webglTexture,Z)}else if(Te){const we=B;for(let Le=0;Le<A.textures.length;Le++){const He=qe.get(A.textures[Le]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Le,He.__webglTexture,Z,we)}}else if(A!==null&&Z!==0){const we=qe.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,we.__webglTexture,Z)}k=-1};function ac(A){const B=qe.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=bt.textureFormatReadable(A.format),B.__typeReadable=bt.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,Z,V,q,Te,Fe,we=0){if(!(A&&A.isWebGLRenderTarget)){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Le=Le[Fe],Array.isArray(Le)&&(Le=Le[0])),Le){Se.bindFramebuffer(N.FRAMEBUFFER,Le);try{const He=A.textures[we],je=He.format,pt=He.type;A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we);const ze=ac(He);if(ze.__formatReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){St("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-V&&Z>=0&&Z<=A.height-q&&N.readPixels(B,Z,V,q,me.convert(je),me.convert(pt),Te)}finally{const He=J!==null?qe.get(J).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,B,Z,V,q,Te,Fe,we=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=qe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Fe!==void 0&&(Le=Le[Fe],Array.isArray(Le)&&(Le=Le[0])),Le)if(B>=0&&B<=A.width-V&&Z>=0&&Z<=A.height-q){Se.bindFramebuffer(N.FRAMEBUFFER,Le);const He=A.textures[we],je=He.format,pt=He.type;A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we);const ze=ac(He);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.bufferData(N.PIXEL_PACK_BUFFER,Te.byteLength,N.STREAM_READ),N.readPixels(B,Z,V,q,me.convert(je),me.convert(pt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Vt=J!==null?qe.get(J).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Vt);const Ct=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Nh(N,Ct,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Te),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(mt),N.deleteSync(Ct),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,Z=0){const V=Math.pow(2,-Z),q=Math.floor(A.image.width*V),Te=Math.floor(A.image.height*V),Fe=B!==null?B.x:0,we=B!==null?B.y:0;Ke.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Fe,we,q,Te),Se.unbindTexture()},this.copyTextureToTexture=function(A,B,Z=null,V=null,q=0,Te=0){let Fe,we,Le,He,je,pt,ze,mt,Vt;const Ct=A.isCompressedTexture?A.mipmaps[Te]:A.image;if(Z!==null)Fe=Z.max.x-Z.min.x,we=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,He=Z.min.x,je=Z.min.y,pt=Z.isBox3?Z.min.z:0;else{const vt=Math.pow(2,-q);Fe=Math.floor(Ct.width*vt),we=Math.floor(Ct.height*vt),A.isDataArrayTexture?Le=Ct.depth:A.isData3DTexture?Le=Math.floor(Ct.depth*vt):Le=1,He=0,je=0,pt=0}V!==null?(ze=V.x,mt=V.y,Vt=V.z):(ze=0,mt=0,Vt=0);const Rt=me.convert(B.format),un=me.convert(B.type);let Oe;B.isData3DTexture?(Ke.setTexture3D(B,0),Oe=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ke.setTexture2DArray(B,0),Oe=N.TEXTURE_2D_ARRAY):(Ke.setTexture2D(B,0),Oe=N.TEXTURE_2D),Se.activeTexture(N.TEXTURE0),Se.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),Se.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Se.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);const vn=Se.getParameter(N.UNPACK_ROW_LENGTH),yt=Se.getParameter(N.UNPACK_IMAGE_HEIGHT),Li=Se.getParameter(N.UNPACK_SKIP_PIXELS),hn=Se.getParameter(N.UNPACK_SKIP_ROWS),wr=Se.getParameter(N.UNPACK_SKIP_IMAGES);Se.pixelStorei(N.UNPACK_ROW_LENGTH,Ct.width),Se.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ct.height),Se.pixelStorei(N.UNPACK_SKIP_PIXELS,He),Se.pixelStorei(N.UNPACK_SKIP_ROWS,je),Se.pixelStorei(N.UNPACK_SKIP_IMAGES,pt);const _i=A.isDataArrayTexture||A.isData3DTexture,Di=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const vt=qe.get(A),rn=qe.get(B),Vn=qe.get(vt.__renderTarget),It=qe.get(rn.__renderTarget);Se.bindFramebuffer(N.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Kt=0;Kt<Le;Kt++)_i&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qe.get(A).__webglTexture,q,pt+Kt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qe.get(B).__webglTexture,Te,Vt+Kt)),N.blitFramebuffer(He,je,He+Fe,je+we,ze,mt,ze+Fe,mt+we,N.DEPTH_BUFFER_BIT,N.NEAREST);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||qe.has(A)){const vt=qe.get(A),rn=qe.get(B);Se.bindFramebuffer(N.READ_FRAMEBUFFER,C),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let Vn=0;Vn<Le;Vn++)_i?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vt.__webglTexture,q,pt+Vn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vt.__webglTexture,q),Di?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rn.__webglTexture,Te,Vt+Vn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,rn.__webglTexture,Te),q!==0?N.blitFramebuffer(He,je,He+Fe,je+we,ze,mt,ze+Fe,mt+we,N.COLOR_BUFFER_BIT,N.NEAREST):Di?N.copyTexSubImage3D(Oe,Te,ze,mt,Vt+Vn,He,je,Fe,we):N.copyTexSubImage2D(Oe,Te,ze,mt,He,je,Fe,we);Se.bindFramebuffer(N.READ_FRAMEBUFFER,null),Se.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Di?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Oe,Te,ze,mt,Vt,Fe,we,Le,Rt,un,Ct.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Oe,Te,ze,mt,Vt,Fe,we,Le,Rt,Ct.data):N.texSubImage3D(Oe,Te,ze,mt,Vt,Fe,we,Le,Rt,un,Ct):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Te,ze,mt,Fe,we,Rt,un,Ct.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Te,ze,mt,Ct.width,Ct.height,Rt,Ct.data):N.texSubImage2D(N.TEXTURE_2D,Te,ze,mt,Fe,we,Rt,un,Ct);Se.pixelStorei(N.UNPACK_ROW_LENGTH,vn),Se.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt),Se.pixelStorei(N.UNPACK_SKIP_PIXELS,Li),Se.pixelStorei(N.UNPACK_SKIP_ROWS,hn),Se.pixelStorei(N.UNPACK_SKIP_IMAGES,wr),Te===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&N.generateMipmap(Oe),Se.unbindTexture()},this.initRenderTarget=function(A){qe.get(A).__webglFramebuffer===void 0&&Ke.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ke.setTextureCube(A,0):A.isData3DTexture?Ke.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ke.setTexture2DArray(A,0):Ke.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){H=0,O=0,J=null,Se.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Nn=.3,yn=1.2,$x=3.2,le={x0:-1.5,x1:1.5,z0:.4,z1:6.4,h:2.5},K={x0:-2,x1:2,z0:-40,z1:0,h:3},ee={x0:2.4,x1:16.4,z0:-31,z1:-17,h:5.5},he={x:-2,z0:-16,z1:-11,y0:.8,y1:2.2},Je={z0:-25,z1:-23,h:2.3,open:1.1},Bt={w:1.3,y0:.1,y1:2},Ss={x:9.5,z:-24},Lt=-36,Qr={x0:-2.4,x1:16.8,z0:-40.4,z1:6.8},fo={x:0,z:5.3,yaw:0};function pu(i,e){return e>.2?"airlock":i>2.2?i>ee.x1+.2?"gallery":"bay":"corridor"}function Zx({hatchOpen:i=!0}={}){const e=[],t=[],n=(s,r,a,o)=>e.push({x0:Math.min(s,r),x1:Math.max(s,r),z0:Math.min(a,o),z1:Math.max(a,o)});return n(-1.8,-1.5,.4,6.4),n(1.5,1.8,.4,6.4),n(-1.8,1.8,6.4,6.8),n(-2.4,-1.3/2,0,.4),n(Bt.w/2,2.4,0,.4),n(1.05,1.5,1.7,4.1),i?n(-1.2,-.6,-1.3,0):n(-1.3/2,Bt.w/2,-.1,.4),n(-2.4,-2,-40,0),n(2,2.4,-40,Je.z0),n(2,2.4,Je.z1,0),n(2,2.4,Je.z0,Je.z1-Je.open),n(-2,2,Lt-.7,Lt+.4),n(-2,-1,-29.7,-21.3),n(1.2,2,-10.2,-7.6),n(.9,2,-35.2,-34.2),n(16.4,16.8,-31.4,-16.6),n(2.4,16.8,-31.4,-31),n(2.4,16.8,-17,-16.6),n(5,7.5,-17.9,-17),n(15.6,16.4,-22.2,-18.8),n(3.2,4.8,-30.6,-29),n(13.8,15.4,-30.4,-29.2),t.push({x:Ss.x,z:Ss.z,r:1.45}),t.push({x:6.2,z:-27.4,r:.35},{x:12.9,z:-20.4,r:.35}),{boxes:e,circles:t}}const po=Math.PI/2,vs=[{name:"шлюз: вход, люк на станцию",pos:[.15,yn,5.75],yaw:.04,pitch:-.02,hatch:0,rig:0},{name:"шлюз: внешний люк в инее",pos:[-.35,yn,2.2],yaw:Math.PI-.1,pitch:.06,hatch:0,rig:0},{name:"Узор спящий: иней вблизи оказывается рисунком",pos:[-.86,yn,4.6],yaw:po+.45,pitch:-.12,hatch:0,rig:0},{name:"коридор кольца: холодный аварийный свет",pos:[.25,yn,-3.2],yaw:.05,pitch:.04,rig:1},{name:"коридор: тёплый островок, где жил экипаж",pos:[.95,yn,-20.6],yaw:.42,pitch:-.06,rig:0},{name:"коридор: баррикада и вещи экипажа",pos:[.7,yn,-23.2],yaw:.14,pitch:0,rig:0},{name:"отражение в стекле: окно, астероид, Солнце",pos:[-1.05,yn,-13.6],yaw:po+.04,pitch:.1,rig:0},{name:"отсек маяка А: общий вид от двери",pos:[3.3,yn,-23.4],yaw:-po+.08,pitch:.3,rig:0},{name:"маяк А: прибор и кабели",pos:[6.9,yn,-26.5],yaw:-2.3,pitch:.2,rig:0},{name:"маяк А: надписи экипажа и тень с ушами",pos:[10.1,yn,-28.9],yaw:0,pitch:.42,rig:0},{name:"лапы с инструментом и перо-подвеска",pos:[.5,yn,-15.4],yaw:.25,pitch:-.34,rig:1,inspect:1},{name:"Узор проснувшийся",pos:[12.6,yn,-27.4],yaw:-.8,pitch:.12,wake:1,rig:0}],Kx={open:[[0,5],[0,1],[.6,-2],[.3,-20],[1.2,-23.45],[3.6,-23.45],[6,-21],[9.5,-20.6],[13,-24],[9.5,-27.6],[6.5,-25]],wall:[[0,-31],[0,-38.5]]};function Jx(i=fo.x,e=fo.z){return{x:i,z:e,yaw:fo.yaw,pitch:0,input:{forward:0,strafe:0},speed:$x}}function Qx(i,e,t){const n=Math.max(-1,Math.min(1,i.input.forward)),s=Math.max(-1,Math.min(1,i.input.strafe)),r=Math.sin(i.yaw),a=Math.cos(i.yaw),o=Math.max(1,Math.ceil(i.speed*t/.2));for(let l=0;l<o;l++){i.x+=(-r*n+a*s)*i.speed*t/o,i.z+=(-a*n-r*s)*i.speed*t/o;for(const c of e.circles){const u=i.x-c.x,f=i.z-c.z,d=Math.hypot(u,f),p=c.r+Nn;d<p&&d>1e-6&&(i.x=c.x+u/d*p,i.z=c.z+f/d*p)}for(const c of e.boxes){const u=Math.max(c.x0,Math.min(i.x,c.x1)),f=Math.max(c.z0,Math.min(i.z,c.z1)),d=i.x-u,p=i.z-f,v=Math.hypot(d,p);if(v<Nn)if(v>1e-6)i.x=u+d/v*Nn,i.z=f+p/v*Nn;else{const M=[[c.x0-Nn-i.x,0],[c.x1+Nn-i.x,0],[0,c.z0-Nn-i.z],[0,c.z1+Nn-i.z]];M.sort((h,m)=>Math.abs(h[0]+h[1])-Math.abs(m[0]+m[1])),i.x+=M[0][0],i.z+=M[0][1]}}}i.x=Math.max(Qr.x0+Nn,Math.min(Qr.x1-Nn,i.x)),i.z=Math.max(Qr.z0+Nn,Math.min(Qr.z1-Nn,i.z))}class jx extends ol{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Hn;e.deleteAttribute("uv");const t=new Is({side:mn}),n=new Is,s=new Wl(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new At(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new i0(e,n,6),o=new Gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new At(e,gs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new At(e,gs(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new At(e,gs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const f=new At(e,gs(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const d=new At(e,gs(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new At(e,gs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function gs(i){return new qf({color:0,emissive:16777215,emissiveIntensity:i})}function ns(i){let e=i>>>0||2654435769;return function(){e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Bi(i,e=i){const t=document.createElement("canvas");return t.width=i,t.height=e,t}function e1(i,e,t){const n=new Float32Array(t*t);for(let a=0;a<n.length;a++)n[a]=i();const s=new Float32Array(e*e),r=a=>a*a*(3-2*a);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const l=o/e*t,c=a/e*t,u=Math.floor(l),f=Math.floor(c),d=r(l-u),p=r(c-f),v=n[f%t*t+u%t],M=n[f%t*t+(u+1)%t],h=n[(f+1)%t*t+u%t],m=n[(f+1)%t*t+(u+1)%t];s[a*e+o]=(v*(1-d)+M*d)*(1-p)+(h*(1-d)+m*d)*p}return s}function mu(i,e,t=4,n=5){const s=new Float32Array(e*e);let r=.5,a=0;for(let o=0;o<n;o++){const l=e1(i,e,t<<o);for(let c=0;c<s.length;c++)s[c]+=l[c]*r;a+=r,r*=.5}for(let o=0;o<s.length;o++)s[o]/=a;return s}function mo(i,e,t=!0){return i.colorSpace=e?jt:$n,t&&(i.wrapS=i.wrapT=Ts),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=ri,i.needsUpdate=!0,i}function $s(i,e,t,{bump:n=2,grime:s=.35}={}){const r=ns(i),a=Bi(e),o=Bi(e),l=Bi(e),c=Bi(e),u=a.getContext("2d"),f=o.getContext("2d"),d=l.getContext("2d"),p=c.getContext("2d");f.fillStyle="#808080",f.fillRect(0,0,e,e),t(u,f,d,p,e,r);const v=u.getImageData(0,0,e,e),M=f.getImageData(0,0,e,e),h=d.getImageData(0,0,e,e),m=p.getImageData(0,0,e,e),x=mu(r,e,4,6),y=mu(r,e,32,3),S=new Float32Array(e*e);for(let b=0;b<e*e;b++){const P=1-s*Math.max(0,x[b]*1.6-.45);v.data[b*4]*=P,v.data[b*4+1]*=P,v.data[b*4+2]*=P*.98,S[b]=M.data[b*4]/255+(y[b]-.5)*.06,h.data[b*4]=Math.max(0,Math.min(255,h.data[b*4]+(x[b]-.5)*90+(y[b]-.5)*40))}u.putImageData(v,0,0);const T=new Uint8ClampedArray(e*e*4),R=new Uint8ClampedArray(e*e*4),g=(b,P)=>S[(P+e)%e*e+(b+e)%e];for(let b=0;b<e;b++)for(let P=0;P<e;P++){const D=(g(P+1,b)-g(P-1,b))*n*e/512*4,U=(g(P,b+1)-g(P,b-1))*n*e/512*4,C=1/Math.hypot(D,U,1),z=(b*e+P)*4;T[z]=(-D*C*.5+.5)*255,T[z+1]=(U*C*.5+.5)*255,T[z+2]=(C*.5+.5)*255,T[z+3]=255,R[z]=255,R[z+1]=h.data[z],R[z+2]=m.data[z],R[z+3]=255}const _=Bi(e),w=Bi(e);return _.getContext("2d").putImageData(new ImageData(T,e,e),0,0),w.getContext("2d").putImageData(new ImageData(R,e,e),0,0),{map:mo(new rr(a),!0),normalMap:mo(new rr(_),!1),orm:mo(new rr(w),!1)}}const Pt=i=>{const e=Math.round(Math.max(0,Math.min(1,i))*255);return`rgb(${e},${e},${e})`};function Ki(i,e,t,n,s,r=.2,a=1){i.strokeStyle=s,i.lineCap="round";for(let o=0;o<n;o++){const l=e()*t,c=e()*t,u=e()*Math.PI,f=(.02+e()*r)*t;i.lineWidth=a*(.4+e()),i.globalAlpha=.15+e()*.5,i.beginPath(),i.moveTo(l,c),i.lineTo(l+Math.cos(u)*f,c+Math.sin(u)*f),i.stroke()}i.globalAlpha=1}function pl(i,e,t,n,s){for(let r=0;r<n;r++){const a=e()*t,o=e()*t*.6,l=(.15+e()*.5)*t,c=2+e()*10,u=i.createLinearGradient(0,o,0,o+l);u.addColorStop(0,s),u.addColorStop(1,"rgba(0,0,0,0)"),i.globalAlpha=.12+e()*.25,i.fillStyle=u,i.fillRect(a,o,c,l)}i.globalAlpha=1}function t1(i,e,t,n,s,r){i.fillStyle="#8f9690",i.fillRect(0,0,s,s),t.fillStyle=Pt(.62),t.fillRect(0,0,s,s),n.fillStyle=Pt(.25),n.fillRect(0,0,s,s);const a=s/2;for(let o=0;o<2;o++)for(let l=0;l<2;l++){const c=l*a,u=o*a,f=.88+r()*.2;i.fillStyle=`rgb(${132*f|0},${141*f|0},${136*f|0})`,i.fillRect(c+3,u+3,a-6,a-6);const d=a*.12;e.fillStyle=Pt(.56),e.fillRect(c+d,u+d,a-2*d,a-2*d),e.strokeStyle=Pt(.36),e.lineWidth=3,e.strokeRect(c+d,u+d,a-2*d,a-2*d),i.strokeStyle="rgba(30,34,36,0.5)",i.lineWidth=2,i.strokeRect(c+d,u+d,a-2*d,a-2*d),e.strokeStyle=Pt(.12),e.lineWidth=5,e.strokeRect(c,u,a,a),i.strokeStyle="#1a1d1f",i.lineWidth=4,i.strokeRect(c,u,a,a),t.strokeStyle=Pt(.9),t.lineWidth=6,t.strokeRect(c,u,a,a);for(let p=0;p<6;p++)for(const[v,M]of[[c+d*.5+(a-d)*p/6+6,u+d*.5],[c+d*.5+(a-d)*p/6+6,u+a-d*.5],[c+d*.5,u+d*.5+(a-d)*p/6+6],[c+a-d*.5,u+d*.5+(a-d)*p/6+6]])e.fillStyle=Pt(.85),e.beginPath(),e.arc(v,M,3.2,0,7),e.fill(),i.fillStyle="rgba(200,205,200,0.5)",i.beginPath(),i.arc(v-.6,M-.6,2.2,0,7),i.fill(),n.fillStyle=Pt(.9),n.beginPath(),n.arc(v,M,3.2,0,7),n.fill()}for(let o=0;o<260;o++){const l=r()<.5,c=Math.round(r()*2)*a+(r()-.5)*22,u=r()*s,f=1+r()*5,d=l?c:u,p=l?u:c;i.fillStyle=`rgba(${70+r()*40|0},${72+r()*30|0},${70+r()*30|0},0.9)`,i.beginPath(),i.ellipse(d,p,f,f*(.4+r()),r()*3,0,7),i.fill(),n.fillStyle=Pt(1),n.beginPath(),n.arc(d,p,f,0,7),n.fill(),t.fillStyle=Pt(.35),t.beginPath(),t.arc(d,p,f,0,7),t.fill()}pl(i,r,s,46,"rgba(40,30,22,0.9)"),pl(t,r,s,30,"rgba(255,255,255,0.8)"),Ki(i,r,s,150,"#cfd3cf",.12,1),Ki(e,r,s,80,"#606060",.12,1.4)}function n1(i,e,t,n,s,r){i.fillStyle="#3a3d40",i.fillRect(0,0,s,s),t.fillStyle=Pt(.5),t.fillRect(0,0,s,s),n.fillStyle=Pt(.85),n.fillRect(0,0,s,s);const a=s/2;for(let c=0;c<2;c++)for(let u=0;u<2;u++){const f=u*a,d=c*a,p=.8+r()*.35;i.fillStyle=`rgb(${58*p|0},${61*p|0},${64*p|0})`,i.fillRect(f+2,d+2,a-4,a-4);const v=a/14;for(let M=0;M<14;M++)for(let h=0;h<14;h++){const m=f+(M+.5)*v,x=d+(h+.5)*v,y=(M+h)%2?.785:-.785;e.fillStyle=Pt(.78),e.beginPath(),e.ellipse(m,x,v*.36,v*.11,y,0,7),e.fill(),i.fillStyle="rgba(120,124,128,0.35)",i.beginPath(),i.ellipse(m-.5,x-.5,v*.34,v*.09,y,0,7),i.fill(),t.fillStyle=Pt(.3),t.beginPath(),t.ellipse(m,x,v*.34,v*.1,y,0,7),t.fill()}e.strokeStyle=Pt(.1),e.lineWidth=6,e.strokeRect(f,d,a,a),i.strokeStyle="#0c0d0e",i.lineWidth=5,i.strokeRect(f,d,a,a);for(const[M,h]of[[f+14,d+14],[f+a-14,d+14],[f+14,d+a-14],[f+a-14,d+a-14]])e.fillStyle=Pt(.25),e.beginPath(),e.arc(M,h,5,0,7),e.fill(),i.fillStyle="#17181a",i.beginPath(),i.arc(M,h,5,0,7),i.fill()}const o=i.createLinearGradient(0,0,s,0);o.addColorStop(.2,"rgba(150,155,160,0)"),o.addColorStop(.5,"rgba(150,155,160,0.16)"),o.addColorStop(.8,"rgba(150,155,160,0)"),i.fillStyle=o,i.fillRect(0,0,s,s);const l=t.createLinearGradient(0,0,s,0);l.addColorStop(.2,"rgba(0,0,0,0)"),l.addColorStop(.5,"rgba(0,0,0,0.35)"),l.addColorStop(.8,"rgba(0,0,0,0)"),t.fillStyle=l,t.fillRect(0,0,s,s),Ki(i,r,s,260,"#8d9196",.2,1.2),Ki(t,r,s,200,"#202020",.2,2);for(let c=0;c<26;c++){const u=r()*s,f=r()*s,d=6+r()*34,p=i.createRadialGradient(u,f,0,u,f,d);p.addColorStop(0,"rgba(8,8,10,0.55)"),p.addColorStop(1,"rgba(8,8,10,0)"),i.fillStyle=p,i.fillRect(u-d,f-d,2*d,2*d);const v=t.createRadialGradient(u,f,0,u,f,d);v.addColorStop(0,"rgba(0,0,0,0.6)"),v.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=v,t.fillRect(u-d,f-d,2*d,2*d)}}function i1(i,e,t,n,s,r){i.fillStyle="#6c7074",i.fillRect(0,0,s,s),t.fillStyle=Pt(.42),t.fillRect(0,0,s,s),n.fillStyle=Pt(1),n.fillRect(0,0,s,s);for(let a=0;a<1400;a++){const o=r()*s,l=r()*s,c=20+r()*160,u=90+r()*70|0;i.strokeStyle=`rgba(${u},${u+3},${u+6},0.25)`,i.lineWidth=1,i.beginPath(),i.moveTo(l,o),i.lineTo(l+c,o+(r()-.5)*2),i.stroke()}for(let a=0;a<60;a++){const o=r()*s,l=r()*s,c=8+r()*46,u=i.createRadialGradient(o,l,0,o,l,c);u.addColorStop(0,r()<.5?"rgba(92,52,28,0.5)":"rgba(20,20,24,0.5)"),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.fillRect(o-c,l-c,2*c,2*c);const f=t.createRadialGradient(o,l,0,o,l,c);f.addColorStop(0,"rgba(255,255,255,0.5)"),f.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=f,t.fillRect(o-c,l-c,2*c,2*c)}Ki(i,r,s,200,"#c2c6ca",.15,1),Ki(e,r,s,120,"#555",.15,1.5)}function s1(i,e,t,n,s,r){i.fillStyle="#e4e4e0",i.fillRect(0,0,s,s),t.fillStyle=Pt(.55),t.fillRect(0,0,s,s),n.fillStyle=Pt(.1),n.fillRect(0,0,s,s);for(let a=0;a<300;a++){const o=r()*s,l=r()*s,c=.8+r()*r()*r()*9;i.fillStyle=`rgba(${100+r()*50|0},${100+r()*45|0},${104+r()*40|0},0.8)`,i.beginPath(),i.ellipse(o,l,c,c*(.3+r()*.8),r()*3,0,7),i.fill(),n.fillStyle=Pt(.5),n.beginPath(),n.arc(o,l,c,0,7),n.fill(),e.fillStyle=Pt(.42),e.beginPath(),e.arc(o,l,c,0,7),e.fill(),t.fillStyle=Pt(.3),t.beginPath(),t.arc(o,l,c,0,7),t.fill()}pl(i,r,s,30,"rgba(50,38,28,0.8)"),Ki(i,r,s,200,"#70706c",.1,1)}function r1(i,e,t,n,s,r){i.fillStyle="#d8d6d0",i.fillRect(0,0,s,s),t.fillStyle=Pt(.92),t.fillRect(0,0,s,s),n.fillStyle=Pt(0),n.fillRect(0,0,s,s);for(let a=0;a<s;a+=4)e.fillStyle=Pt(.44),e.fillRect(0,a,s,2);for(let a=0;a<s;a+=4)e.fillStyle="rgba(160,160,160,0.5)",e.fillRect(a,0,2,s);for(let a=0;a<40;a++){const o=r()*s,l=6+r()*20,c=e.createLinearGradient(0,o,0,o+l);c.addColorStop(0,"rgba(255,255,255,0)"),c.addColorStop(.5,"rgba(255,255,255,0.5)"),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.fillRect(0,o,s,l),i.fillStyle="rgba(0,0,0,0.07)",i.fillRect(0,o+l*.6,s,l*.5)}for(let a=0;a<50;a++){const o=r()*s,l=r()*s,c=10+r()*50,u=i.createRadialGradient(o,l,0,o,l,c);u.addColorStop(0,"rgba(40,34,28,0.3)"),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.fillRect(o-c,l-c,2*c,2*c)}}let jr=null;function a1(){return jr||(jr={panel:$s(11,1024,t1,{bump:2.4}),floor:$s(23,1024,n1,{bump:3,grime:.45}),metal:$s(37,512,i1,{bump:1.2}),paint:$s(41,512,s1,{bump:1.6}),cloth:$s(53,256,r1,{bump:2.2,grime:.2})},jr)}function Fn(i,e,t,n,s,r,a,{jitter:o=.08,font:l="sans-serif",weight:c=700,drip:u=0}={}){i.save(),i.fillStyle=a,i.textBaseline="alphabetic";let f=n;for(const d of t){const p=r*(1+(e()-.5)*o*2);i.font=`${c} ${p}px ${l}`;const v=i.measureText(d).width;i.save(),i.translate(f,s+(e()-.5)*r*o*1.5),i.rotate((e()-.5)*o*2.2),i.globalAlpha=.72+e()*.28,i.fillText(d,0,0),u&&d!==" "&&e()<u&&(i.globalAlpha=.5,i.fillRect(v*(.2+e()*.5),0,Math.max(2,r*.04),r*(.3+e()*.9))),i.restore(),f+=v*(.98+e()*.08)}return i.restore(),f}function o1(i=64){const e=Bi(i),t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i);const s=new rr(e);return s.needsUpdate=!0,s}const We={neonViolet:14242287,neonViolet2:11552236,turquoise:8702925,lotusTeal:222624,deepViolet:2230107,gold:12815678,goldLight:16639079,flame:16761125,skin:14205360,eyeGreen:959087,eyeBlue:4367848,gem:2977297,cardBg:1778995},ma=6,nr={uWake:{value:0},uTime:{value:0},uUzQ:{value:2},uUzOff:{value:0},uAO:{value:.5},uWakeA:{value:new De(We.turquoise)},uWakeB:{value:new De(We.neonViolet)}},l1=`
attribute vec3 aFlat; attribute vec3 aFlatN;
varying vec3 vFlat; varying vec3 vFlatN;
`,c1=`
varying vec3 vFlat; varying vec3 vFlatN;
uniform vec4 uFrost[${ma}];
uniform vec3 uRoomMin; uniform vec3 uRoomMax;
uniform float uWake; uniform float uTime; uniform float uUzQ; uniform float uUzOff; uniform float uAO;
uniform vec3 uWakeA; uniform vec3 uWakeB;
float uzHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float uzNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(uzHash(i), uzHash(i + vec2(1, 0)), f.x), mix(uzHash(i + vec2(0, 1)), uzHash(i + vec2(1, 1)), f.x), f.y);
}
// Линии треугольной решётки: три семейства под 120 градусов. Отрезок между двумя узлами
// включён, если его номер по периодическому правилу (период 3) ниже порога gate.
// Линия сглажена по площади пикселя и ГАСНЕТ вдали (far): издали рисунка нет, есть иней.
float uzLines(vec2 p, float w, float gate, float breathe) {
  float acc = 0.0;
  for (int k = 0; k < 3; k++) {
    float an = float(k) * 2.0943951;
    vec2 n = vec2(cos(an), sin(an)), t = vec2(-n.y, n.x);
    float a = dot(p, n), b = dot(p, t);
    float id = floor(a + 0.5), d = abs(a - id);
    float sg = floor(0.8660254 * b - 0.5 * id);
    float h = uzHash(vec2(mod(id, 3.0) + float(k) * 3.0, mod(sg, 3.0)));
    float g = gate + breathe * sin(uTime * 0.35 + h * 6.2831);
    float F = max(fwidth(a), 1e-4);
    float box = max(0.0, min(d + 0.5 * F, w) - max(d - 0.5 * F, -w)) / F;
    acc = max(acc, step(h, g) * box * (1.0 - smoothstep(0.02, 0.07, F)));
  }
  return acc;
}
// узел решётки: расстояние до ближайшей вершины
float uzNode(vec2 p) {
  vec2 q = vec2(p.x - p.y * 0.5773503, p.y * 1.1547005);
  vec2 i = floor(q + 0.5);
  float best = 9.0;
  for (int dx = -1; dx <= 1; dx++) for (int dy = -1; dy <= 1; dy++) {
    vec2 c = i + vec2(float(dx), float(dy));
    best = min(best, length(p - vec2(c.x + c.y * 0.5, c.y * 0.8660254)));
  }
  return best;
}
// Затенение в углах помещения: аналитически, по расстоянию до пола, потолка и стен.
// Плоскость, параллельная самой поверхности, не считается. Дёшево и без шума, в отличие от
// экранного затенения, и «сажает» на пол и стены всё, что к ним примыкает.
float roomAO() {
  vec3 dmin = max(vFlat - uRoomMin, 0.0), dmax = max(uRoomMax - vFlat, 0.0), an = abs(vFlatN);
  vec3 k = 1.0 - uAO * (exp(-dmin * 3.2) + exp(-dmax * 3.2) * 0.8);
  return mix(k.x, 1.0, an.x) * mix(k.y, 1.0, an.y) * mix(k.z, 1.0, an.z);
}
// Узор. cov: сколько поверхности подо льдом; line: рисунок во льду; hgt: высота льда (рельеф);
// glow: свечение проснувшегося.
void uzorEval(out float cov, out float line, out float hgt, out vec3 glow) {
  cov = 0.0; line = 0.0; hgt = 0.0; glow = vec3(0.0);
  if (uUzOff > 0.5) return;
  // РАННИЙ ВЫХОД: пиксель вне очагов своего помещения не платит ни за шум, ни за линии
  float m0 = 0.0;
  for (int i = 0; i < ${ma}; i++) {
    vec3 d = vFlat - uFrost[i].xyz; float r = uFrost[i].w * (1.0 + 0.4 * uWake) * 1.45;
    m0 = max(m0, 1.0 - dot(d, d) / (r * r));
  }
  if (m0 <= 0.0) return;
  vec3 an = abs(vFlatN);
  vec2 p = an.y > an.x && an.y > an.z ? vFlat.xz : (an.x > an.z ? vFlat.zy : vFlat.xy);
  float n1 = uzNoise(p * 2.3), n2 = uzNoise(p * 7.1), n3 = uzNoise(p * 23.0);
  float nz = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
  float m = 0.0;
  for (int i = 0; i < ${ma}; i++) {
    float r = uFrost[i].w * (1.0 + 0.4 * uWake);
    float d = length(vFlat - uFrost[i].xyz) / r;
    m = max(m, 1.0 - smoothstep(0.15, 1.0, d + (nz - 0.5) * 1.2));
  }
  if (m <= 0.001) return;
  float soft = smoothstep(0.0, 0.4, m);
  // жилы роста: гребни медленного шума. Вдоль них рисунок густой, между ними пустоты
  float rg = 1.0 - abs(2.0 * uzNoise(p * 0.85 + vec2(n1, n2) * 0.9 + 3.7) - 1.0);
  float trunk = smoothstep(0.80, 0.97, rg), nearT = smoothstep(0.45, 0.92, rg);
  // медленный поворот и дыхание рисунка у проснувшегося
  float rot = uWake * 0.06 * sin(uTime * 0.11);
  vec2 pr = mat2(cos(rot), -sin(rot), sin(rot), cos(rot)) * p;
  float br = 0.08 * uWake;
  // рисунок во льду: чем ближе к жиле, тем плотнее; период мотива три ячейки
  float dens = 0.62 * nearT;     // вдали от жил рисунка нет вовсе: чистая изморозь
  float l1 = uzLines(pr / 0.07, 0.03, min(m * 1.3, dens + 0.06), br);
  float l2 = 0.0, l3 = 0.0;
  if (uUzQ > 0.5) l2 = uzLines(pr / 0.0233333, 0.045, min(m * 1.1, dens), br);
  if (uUzQ > 1.5) l3 = uzLines(pr / 0.0077777, 0.07, min(m, dens - 0.08), br);
  line = max(l1, max(l2 * 0.9, l3 * 0.75)) * soft * step(0.05, m);
  // изморозь: зернистая, с наплывом по краю пятна и кристаллами-искрами
  // зерно гаснет вдали: иначе на дальней стене оно рябит квадратами
  float gf = clamp(1.0 - fwidth(p.x) * 55.0, 0.0, 1.0);
  float grain = uzNoise(p * 61.0) * uzNoise(p * 143.0 + 5.3) * gf + 0.25 * (1.0 - gf);
  float rim = smoothstep(0.0, 0.25, m) * (1.0 - smoothstep(0.25, 0.7, m));
  float body = smoothstep(0.38, 0.72, nz + 0.35 * m);      // лёд лежит пятнами, между ними голый металл
  cov = clamp(body * (0.35 + 0.5 * nz) + rim * 0.22 * body + grain * 0.5 * body, 0.0, 1.0) * soft;
  float sp = 0.0;
  if (uUzQ > 1.5) {
    vec2 c = floor(p * 380.0);
    sp = step(0.972, uzHash(c)) * clamp(1.0 - fwidth(p.x) * 380.0, 0.0, 1.0) * (0.5 + 0.5 * sin(uzHash(c + 7.0) * 40.0 + dot(vFlat, vec3(31.0, 17.0, 23.0)) + uTime * 0.6));
  }
  // высота: наросты изморози, в них прорезаны гладкие каналы рисунка
  hgt = cov * (0.55 + 0.45 * n3 + 0.5 * grain) - line * 0.7;
  cov = clamp(cov + sp * 0.6, 0.0, 1.0);
  // проснувшийся: светятся ЖИЛЫ и то, что к ним примыкает; между жилами темно
  if (uWake > 0.001) {
    float grow = smoothstep(0.0, 0.6, m * 1.4 - (1.0 - uWake) * 0.9 + 0.12 * sin(uTime * 0.23 + n1 * 6.0));
    float v0 = uzLines(pr / 0.21, 0.02, trunk * 0.95 + nearT * 0.25, br);
    float nd = uzNode(pr / 0.21);
    float F0 = fwidth(pr.x) / 0.21;
    float node = (1.0 - smoothstep(0.05, 0.05 + F0 * 1.5, abs(nd - 0.16))) * trunk + (1.0 - smoothstep(0.035, 0.05 + F0, nd)) * nearT;
    float ph = dot(pr, vec2(3.1, 2.3)) - uTime * 0.7;
    float wave = 0.5 + 0.5 * sin(ph) * sin(ph * 0.37 + 1.3);
    vec3 wc = mix(uWakeA, uWakeB, 0.5 + 0.5 * sin(ph * 0.21 + uTime * 0.13 + n1 * 3.0));
    float halo = trunk * (0.10 + 0.25 * wave);
    glow = wc * (v0 * (1.4 + 3.2 * wave) + node * (1.0 + 2.0 * wave) + line * nearT * (0.5 + wave) + halo) * uWake * grow * soft;
    line = max(line, max(v0, node) * grow);
  }
}
`,u1=`
#include <normal_fragment_maps>
float uzAO = roomAO();
{
  float uzCov; float uzLine; float uzH; vec3 uzGlow;
  uzorEval(uzCov, uzLine, uzH, uzGlow);
  if (uzCov > 0.0 || uzLine > 0.0) {
    // лёд: белёсая изморозь, в ней тёмные стеклянные каналы рисунка со светлой кромкой
    vec3 rime = vec3(0.56, 0.76, 1.0);
    vec3 glass = vec3(0.10, 0.22, 0.34);
    vec3 ice = mix(rime, glass, uzLine * 0.85);
    ice = mix(ice, vec3(0.03, 0.04, 0.07), uWake * 0.85);
    diffuseColor.rgb = mix(diffuseColor.rgb, ice, uzCov * 0.92);
    roughnessFactor = mix(roughnessFactor, mix(0.62, 0.10, uzLine), uzCov);
    metalnessFactor *= 1.0 - uzCov * 0.9;
    if (uUzQ > 0.5) {
      // рельеф по производным высоты: у льда появляется толщина, каналы читаются как прорезанные
      vec3 sx = dFdx(-vViewPosition), sy = dFdy(-vViewPosition);
      vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
      float det = dot(sx, r1);
      vec3 grad = sign(det) * (dFdx(uzH) * r1 + dFdy(uzH) * r2);
      normal = normalize(abs(det) * normal - grad * 0.012);
    }
    // лёд холодный и под тёплым светом хвоста: собственное слабое свечение в синеву.
    // Это и первый намёк игроку: иней, который чуть светится сам, не иней.
    totalEmissiveRadiance += vec3(0.036, 0.085, 0.15) * uzCov * (1.0 - uWake) + uzGlow;
  }
  diffuseColor.rgb *= mix(1.0, uzAO, 0.45);
}
`,h1=`
#include <aomap_fragment>
reflectedLight.indirectDiffuse *= uzAO;
reflectedLight.indirectSpecular *= uzAO;
`;function f1(i){Object.assign(i.uniforms,nr,this.userData.room),i.vertexShader=l1+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFlat = aFlat; vFlatN = aFlatN;`),i.fragmentShader=c1+i.fragmentShader.replace("#include <normal_fragment_maps>",u1).replace("#include <aomap_fragment>",h1)}function go(i,e){return{uFrost:{value:Array.from({length:ma},()=>new kt(0,-100,0,.001))},uRoomMin:{value:new I(...i)},uRoomMax:{value:new I(...e)}}}function Zs(i,e,{color:t=16777215,rough:n=1,metal:s=1,normal:r=1}={}){const a=a1()[i],o=new Is({map:a.map,normalMap:a.normalMap,roughnessMap:a.orm,metalnessMap:a.orm,color:t,roughness:n,metalness:s,vertexColors:!0});return o.normalScale.set(r,r),o.userData.room=e,o.onBeforeCompile=f1,o.customProgramCacheKey=()=>"uzor2",o}const d1={wall:["panel",16777215],wallDark:["panel",6120555],ceil:["panel",4014663],floor:["floor",16777215],steel:["metal",16777215],steelDark:["metal",4869458],bronze:["metal",12092746],copper:["metal",13662538],weld:["metal",15133938],orange:["paint",13132830],yellow:["paint",13214247],teal:["paint",3112838],white:["paint",14276559],red:["paint",9316898],rubber:["cloth",1776671],cloth:["cloth",7305827],clothBlue:["cloth",3952491],clothWarm:["cloth",10123861]};function zi(i,e=1,t=null){const n=new es({color:new De(i).multiplyScalar(e),map:t,toneMapped:!1});return n.userData.unlit=!0,n.userData.noShadow=!0,n}function p1(i,{color:e=16777215,emissive:t=0,emissiveIntensity:n=0}={}){const s=new Is({map:i,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,color:e,emissive:t,emissiveIntensity:n,emissiveMap:n?i:null,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return s.userData.noShadow=!0,s}function m1(i){return{panel:Zs("panel",i),floor:Zs("floor",i,{rough:.85}),metal:Zs("metal",i),paint:Zs("paint",i),cloth:Zs("cloth",i)}}function yr(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new zt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<i.length;++u){const f=i[u];let d=0,p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in f.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(f.attributes[v]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in f.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[v].length!==i[0].morphAttributes[v].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+v+'" morph attribute.'),null;a[v]===void 0&&(a[v]=[]),a[v].push(f.morphAttributes[v]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let v;if(t)v=f.index.count;else if(f.attributes.position!==void 0)v=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,v,u),c+=v}}if(t){let u=0;const f=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let v=0;v<p.count;++v)f.push(p.getX(v)+u);u+=i[d].attributes.position.count}l.setIndex(f)}for(const u in r){const f=gu(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){const p=[];for(let M=0;M<a[u].length;++M)p.push(a[u][M][d]);const v=gu(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(v)}}}return l}function gu(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){const u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new xn(a,t,n);let l=0;for(let c=0;c<i.length;++c){const u=i[c];if(u.isInterleavedBufferAttribute){const f=l/t;for(let d=0,p=u.count;d<p;d++)for(let v=0;v<t;v++){const M=u.getComponent(d,v);o.setComponent(d+f,v,M)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function D0(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),l=[],c=new Map,u=[],f=["getX","getY","getZ","getW"],d=e*.5,p=Math.log10(1/e),v=Math.pow(10,p),M=d*v;for(let m=0;m<r;m++){const x=n?n.getX(m):m;let y="";for(let S=0,T=o.length;S<T;S++){const R=o[S],g=i.getAttribute(R),_=g.itemSize;for(let w=0;w<_;w++)y+=`${Math.trunc(g[f[w]](x)*v+M)},`}y in t?u.push(t[y]):(l.push(x),t[y]=a,u.push(a),a++)}const h=i.clone();for(const m in i.attributes)h.setAttribute(m,xu(i.attributes[m],l,c));for(const m in i.morphAttributes)h.morphAttributes[m]=i.morphAttributes[m].map(x=>xu(x,l,c));return h.setIndex(u),h}function xu(i,e,t=new Map){const n=i.isInterleavedBufferAttribute,s=n?i.data:i,r=n?s.stride:i.itemSize;let a=n?t.get(s):void 0;if(a===void 0){const l=new s.array.constructor(e.length*r);for(let c=0;c<e.length;c++)for(let u=0;u<r;u++)l[c*r+u]=s.array[e[c]*r+u];a=n?new s.constructor(l,r,s.meshPerAttribute):new i.constructor(l,i.itemSize,i.normalized,i.meshPerAttribute),a.setUsage(s.usage),n&&t.set(s,a)}const o=n?new i.constructor(a,i.itemSize,i.offset,i.normalized):a;return o.name=i.name,n||(o.gpuType=i.gpuType),o}const Ks=new I;function zn(i,e,t,n,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ks.copy(e),Ks[n]=0,Ks.normalize();const c=.5*a/(a+o),u=1-Ks.angleTo(i)/l;return Math.sign(Ks[t])===1?u*c:o/(a+o)+c+c*(1-u)}class ql extends Hn{constructor(e=1,t=1,n=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new I,c=new I,u=new I(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,v=f.length/6,M=new I,h=.5/a;for(let m=0,x=0;m<f.length;m+=3,x+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),f[m+0]=u.x*Math.sign(l.x)+c.x*r,f[m+1]=u.y*Math.sign(l.y)+c.y*r,f[m+2]=u.z*Math.sign(l.z)+c.z*r,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/v)){case 0:M.set(1,0,0),p[x+0]=zn(M,c,"z","y",r,n),p[x+1]=1-zn(M,c,"y","z",r,t);break;case 1:M.set(-1,0,0),p[x+0]=1-zn(M,c,"z","y",r,n),p[x+1]=1-zn(M,c,"y","z",r,t);break;case 2:M.set(0,1,0),p[x+0]=1-zn(M,c,"x","z",r,e),p[x+1]=zn(M,c,"z","x",r,n);break;case 3:M.set(0,-1,0),p[x+0]=1-zn(M,c,"x","z",r,e),p[x+1]=1-zn(M,c,"z","x",r,n);break;case 4:M.set(0,0,1),p[x+0]=1-zn(M,c,"x","y",r,e),p[x+1]=1-zn(M,c,"y","x",r,t);break;case 5:M.set(0,0,-1),p[x+0]=zn(M,c,"x","y",r,e),p[x+1]=1-zn(M,c,"y","x",r,t);break}}static fromJSON(e){return new ql(e.width,e.height,e.depth,e.segments,e.radius)}}const lr=42,ea=new De,g1=new Ht,x1=new I(1,0,0);function Yl(i){const e=i.z/lr,t=lr-i.y;return i.set(i.x,lr-t*Math.cos(e),t*Math.sin(e))}function Xi(i,e=new Ht){return e.setFromAxisAngle(x1,-i/lr)}function $l(i,e,t,n,s=0,r=0){return Yl(i.position.set(e,t,n)),Xi(n,i.quaternion),(s||r)&&i.quaternion.multiply(g1.setFromEuler(new Cn(r,s,0,"YXZ"))),i}function In(i,e,t,n=new I){return Yl(n.set(i,e,t))}function v1(i){const e=i.attributes.position,t=i.attributes.normal,n=new Float32Array(e.count*3),s=new Float32Array(e.count*3),r=new I;for(let a=0;a<e.count;a++){const o=e.getX(a),l=e.getY(a),c=e.getZ(a);n[a*3]=o,n[a*3+1]=l,n[a*3+2]=c;const u=t.getX(a),f=t.getY(a),d=t.getZ(a);s[a*3]=u,s[a*3+1]=f,s[a*3+2]=d,Yl(r.set(o,l,c)),e.setXYZ(a,r.x,r.y,r.z);const p=c/lr,v=Math.cos(p),M=Math.sin(p);t.setXYZ(a,u,f*v+d*M,-f*M+d*v)}return i.setAttribute("aFlat",new xn(n,3)),i.setAttribute("aFlatN",new xn(s,3)),i.computeBoundingSphere(),i.computeBoundingBox(),i}new dt;const _1=new Cn,M1=new I,S1=new I(1,1,1);class ta{constructor(){this.bins=new Map}add(e,t,n){let s=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(s.attributes))["position","normal","uv"].includes(a)||s.deleteAttribute(a);s.attributes.uv||s.setAttribute("uv",new xn(new Float32Array(s.attributes.position.count*2),2)),n&&s.applyMatrix4(n);const r=d1[e];if(r){ea.set(r[1]);const a=s.attributes.position.count,o=new Float32Array(a*3);for(let l=0;l<a;l++)o[l*3]=ea.r,o[l*3+1]=ea.g,o[l*3+2]=ea.b;s.setAttribute("color",new xn(o,3)),e=r[0]}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(s),this}mtx(e,t,n,s=0,r=0,a=0,o=1,l=1,c=1){return new dt().compose(M1.set(e,t,n),new Ht().setFromEuler(_1.set(s,r,a,"YXZ")),S1.set(o,l,c)).clone()}box(e,t,n,s,r,a,o,{rx:l=0,ry:c=0,rz:u=0,tile:f=2,uo:d=0,vo:p=0,bevel:v}={}){const M=l||c||u,h=M?1:Math.max(1,Math.ceil(o/.8)),m=M&&Math.abs(Math.abs(c)-Math.PI/2)<.01?Math.max(1,Math.ceil(r/.8)):1,x=Math.min(r,a,o),y=Math.max(r,a,o);v===void 0&&(v=x>=.1&&y<=2.2&&h<=3?Math.min(.022,x*.14):0);const S=(v?new ql(r,a,o,1,v):new Hn(r,a,o,m,1,h)).toNonIndexed(),T=S.attributes.position,R=S.attributes.normal,g=S.attributes.uv;for(let _=0;_<T.count;_++){const w=T.getX(_)+(M?0:t),b=T.getY(_)+(M?0:n),P=T.getZ(_)+(M?0:s),D=Math.abs(R.getX(_)),U=Math.abs(R.getY(_));D>.5?g.setXY(_,P/f+d,b/f+p):U>.5?g.setXY(_,w/f+d,P/f+p):g.setXY(_,w/f+d,b/f+p)}return this.add(e,S,this.mtx(t,n,s,l,c,u))}slab(e,t,n,s,r,a,o,l){return this.box(e,(t+r)/2,(n+a)/2,(s+o)/2,Math.abs(r-t),Math.abs(a-n),Math.abs(o-s),l)}pipe(e,t,n,s,{seg:r=12,cap:a=!1}={}){const o=new I(...t),l=new I(...n),c=o.distanceTo(l),u=new ln(s,s,c,r,Math.max(1,Math.ceil(c/.8)),!a),f=u.attributes.uv;for(let p=0;p<f.count;p++)f.setXY(p,f.getX(p)*Math.max(1,Math.round(s*12)),f.getY(p)*c/2);const d=new Ht().setFromUnitVectors(new I(0,1,0),l.clone().sub(o).normalize());return this.add(e,u,new dt().compose(o.clone().add(l).multiplyScalar(.5),d,new I(1,1,1)))}cable(e,t,n=.025,{seg:s=6,tension:r=.5}={}){const a=new Aa(t.map(l=>new I(...l)),!1,"catmullrom",r),o=Math.max(8,Math.ceil(a.getLength()/.12));return this.add(e,new Gl(a,o,n,s,!1))}wall(e,t,n,s,r,a,o,l,c=[],u){const f=c.slice().sort((v,M)=>v.a0-M.a0),d=(v,M,h,m)=>{M-v<1e-4||m-h<1e-4||(t==="x"?this.slab(e,n-l/2,h,v,n+l/2,m,M,u):this.slab(e,v,h,n-l/2,M,m,n+l/2,u))};let p=s;for(const v of f)d(p,v.a0,a,o),d(v.a0,v.a1,a,v.y0),d(v.a0,v.a1,v.y1,o),p=v.a1;return d(p,r,a,o),this}build(e,{shadows:t=!0}={}){const n=new sn;for(const[s,r]of this.bins){const a=e[s];if(!a)throw new Error("нет материала "+s);const o=v1(yr(r,!1));for(const c of r)c.dispose();const l=new At(o,a);l.name=s,l.castShadow=t&&!a.transparent&&!a.userData.noShadow,l.receiveShadow=!a.userData.unlit,n.add(l)}return this.bins.clear(),n}}class y1{constructor(e,{spots:t=3,points:n=3}={}){this.defs=[],this.spots=[],this.points=[],this.slotDef=[],this.dirty=[],this.rr=0,this.shadowsPerFrame=3,this.forceShadows=!1;for(let s=0;s<t;s++){const r=new Jf(16777215,0,30,.6,.5,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-.0015,r.shadow.normalBias=.03,r.shadow.camera.near=.2,r.shadow.autoUpdate=!1,e.add(r,r.target),this.spots.push(r),this.slotDef.push(null),this.dirty.push(!0)}for(let s=0;s<n;s++){const r=new Wl(16777215,0,12,1.8);e.add(r),this.points.push(r)}this.nSpots=t,this.nPoints=n}setTier({spots:e,shadowSpots:t,shadowSize:n,points:s,shadowsPerFrame:r}){this.nSpots=Math.min(e,this.spots.length),this.nPoints=Math.min(s,this.points.length),this.shadowsPerFrame=r,this.spots.forEach((a,o)=>{a.visible=o<this.nSpots,a.castShadow=o<t,a.shadow.mapSize.x!==n&&(a.shadow.mapSize.set(n,n),a.shadow.map&&(a.shadow.map.dispose(),a.shadow.map=null)),this.dirty[o]=!0}),this.points.forEach((a,o)=>{a.visible=o<this.nPoints})}add(e){return e.world=In(...e.pos),e.to&&(e.worldTo=In(...e.to)),e.reach=e.reach||26,e.col=new De(e.color),this.defs.push(e),e}touch(e,t){this.spots.forEach((n,s)=>{const r=this.slotDef[s];r&&Math.hypot(r.pos[0]-e,r.pos[2]-t)<(r.dist||14)+1&&(this.dirty[s]=!0)})}update(e,t,n,s=0,r=null){const a=(c,u,f)=>{const d=[];for(const p of this.defs){if(p.kind!==c||p.off)continue;const v=Math.hypot(p.pos[0]-e,p.pos[2]-t),M=1-Math.min(1,Math.max(0,(v-(p.reach-5))/5));M>0&&d.push([M*(p.prio||1),M,p])}d.sort((p,v)=>v[0]-p[0]);for(let p=0;p<u.length;p++){const v=u[p],M=p<f?d[p]:null;if(!M){v.intensity=0,c==="spot"&&(this.slotDef[p]=null);continue}const h=M[2],m=h.wakeKeep??.16;v.color.copy(h.col),s>0&&r&&v.color.lerp(r,s*.75),v.intensity=h.power*M[1]*(h.flicker?h.flicker(n):1)*(1-s*(1-m)),v.position.copy(h.world),v.distance=h.dist||14,v.decay=h.decay??(c==="spot"?1.6:1.8),c==="spot"&&(v.target.position.copy(h.worldTo),v.target.updateMatrixWorld(),v.angle=h.angle||.6,v.penumbra=h.penumbra??.6,v.shadow.camera.far=v.distance,this.slotDef[p]!==h&&(this.slotDef[p]=h,this.dirty[p]=!0))}};a("spot",this.spots,this.nSpots),a("point",this.points,this.nPoints);let o=this.forceShadows?99:this.shadowsPerFrame,l=0;for(let c=0;c<this.spots.length&&o>0;c++){const u=(this.rr+c)%this.spots.length,f=this.spots[u];!f.castShadow||!f.visible||(this.forceShadows||this.dirty[u]&&f.intensity>0)&&(f.shadow.needsUpdate=!0,this.dirty[u]=!1,o--,l++,this.rr=u+1)}return l}}class b1{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const w1=new M0(-1,1,1,-1,0,1);class E1 extends zt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}}const T1=new E1;class ml{constructor(e){this._mesh=new At(T1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,w1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const xo={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},A1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Us extends b1{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new De(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new cn(r,a,{type:Mn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new cn(r,a,{type:Mn,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new cn(r,a,{type:Mn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=A1;this.highPassUniforms=hl.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hl.clone(xo.uniforms),this.blendMaterial=new qt({uniforms:this.copyUniforms,vertexShader:xo.vertexShader,fragmentShader:xo.fragmentShader,premultipliedAlpha:!0,blending:Yi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new De,this._oldClearAlpha=1,this._basic=new es,this._fsQuad=new ml(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Us.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new qt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Us.BlurDirectionX=new ce(1,0);Us.BlurDirectionY=new ce(0,1);const vu="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",R1=`
  uniform sampler2D tDiffuse; uniform float uExposure; uniform vec3 uTint; uniform float uTime; uniform float uGrain; uniform float uVig; uniform float uWake; uniform float uHurt; uniform float uFade;
  varying vec2 vUv;
  vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main() {
    vec2 d = vUv - 0.5; float r2 = dot(d, d);
    vec2 ca = d * r2 * (0.004 + 0.004 * uWake + 0.02 * uHurt);
    vec3 c = vec3(texture2D(tDiffuse, vUv + ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - ca).b);
    c = min(max(c, vec3(0.0)), vec3(48.0));           // NaN и «светлячки» дальше не идут
    c *= uExposure * uTint;
    c *= 1.0 - uVig * smoothstep(0.12, 0.62, r2);
    c = mix(c, c * vec3(1.5, 0.35, 0.3), uHurt * smoothstep(0.05, 0.5, r2));
    c = aces(c);
    // тени чуть в холод, света в тепло: кадр перестаёт быть серым
    float l = dot(c, vec3(0.299, 0.587, 0.114));
    c = mix(c, c * vec3(0.94, 1.0, 1.08), (1.0 - l) * 0.35);
    c = pow(c, vec3(1.0 / 2.2));
    c += (h(vUv * 1000.0 + fract(uTime) * 17.0) - 0.5) * uGrain;
    gl_FragColor = vec4(c * uFade, 1.0);
  }`,C1="uniform sampler2D tDiffuse; varying vec2 vUv; void main() { vec3 c = texture2D(tDiffuse, vUv).rgb; gl_FragColor = vec4(min(max(c, vec3(0.0)), vec3(48.0)), 1.0); }";function P1(i,e,t,n){const s={tDiffuse:{value:null},uExposure:{value:1},uTint:{value:new I(1,1,1)},uTime:{value:0},uGrain:{value:.03},uVig:{value:.42},uWake:{value:0},uHurt:{value:0},uFade:{value:1}},r=new ml(new qt({uniforms:s,vertexShader:vu,fragmentShader:R1,depthTest:!1,depthWrite:!1})),a={tDiffuse:{value:null}},o=new ml(new qt({uniforms:a,vertexShader:vu,fragmentShader:C1,depthTest:!1,depthWrite:!1})),l=new ce;let c=null,u=null,f=null,d=null,p=null;const v=new De(0);function M(){for(const m of[c,u,f])m&&m.dispose();d&&d.dispose(),c=u=f=d=null,i.getDrawingBufferSize(l);const h=p.hdr&&!p.ldr?Mn:En;c=new cn(l.x,l.y,{type:h,samples:p.msaa}),p.bloom&&(u=new cn(l.x,l.y,{type:h,depthBuffer:!1}),f=new cn(l.x,l.y,{type:h,depthBuffer:!1}),d=new Us(new ce(l.x/2,l.y/2),.38,.6,1),d.setSize(l.x,l.y))}return{uniforms:s,configure(h){p={...h},M()},resize(){p&&M()},size(){return l},render(){i.setRenderTarget(c),i.setClearColor(v,1),i.clear(),p.prepass&&n&&i.render(n,t),i.render(e,t),d?(a.tDiffuse.value=c.texture,i.setRenderTarget(u),o.render(i),d.render(i,f,u,0,!1),s.tDiffuse.value=u.texture):s.tDiffuse.value=c.texture,i.setRenderTarget(null),r.render(i)}}}const L1="700 %px 'Arial Narrow', 'Liberation Sans Narrow', 'DejaVu Sans Condensed', sans-serif",On="'Comic Sans MS', 'Segoe Print', 'DejaVu Sans', sans-serif";class _u{constructor(e){this.N=e,this.c=document.createElement("canvas"),this.c.width=this.c.height=e,this.ctx=this.c.getContext("2d"),this.x=0,this.y=0,this.rowH=0,this.rects={}}add(e,t,n,s){if(this.x+t>this.N&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.N)throw new Error("атлас переполнен: "+e);const r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,t,n),r.clip(),s(r,t,n,ns(e.length*131+t)),r.restore(),this.rects[e]=[this.x/this.N,1-(this.y+n)/this.N,(this.x+t)/this.N,1-this.y/this.N,t/n],this.x+=t+4,this.rowH=Math.max(this.rowH,n)}texture(){const e=new rr(this.c);return e.colorSpace=jt,e.anisotropy=8,e.needsUpdate=!0,e}}function mi(i,e,t,n,s,r,a,o=.25){i.font=L1.replace("%",s),i.fillStyle=r,i.textBaseline="top",i.fillText(e,t,n);const l=i.measureText(e).width;i.save(),i.globalCompositeOperation="destination-out";for(let c=0;c<l*s*o/60;c++)i.globalAlpha=.3+a()*.7,i.beginPath(),i.ellipse(t+a()*l,n+a()*s,1+a()*7,1+a()*3,a()*3,0,7),i.fill();return i.restore(),l}function D1(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.12,i.lineJoin="miter",i.beginPath();for(let r=0;r<3;r++){const a=-Math.PI/2+r*2.0944;i.lineTo(e+Math.cos(a)*n,t+Math.sin(a)*n)}i.closePath(),i.stroke();for(let r=0;r<3;r++){const a=t+n*(.32-r*.3),o=n*(.5-r*.14);i.beginPath(),i.moveTo(e-o,a),i.lineTo(e,a-o*.6),i.lineTo(e+o,a),i.stroke()}}function I1(){const i=new _u(2048),e="rgba(226,228,222,0.92)",t="rgba(222,176,40,0.95)",n="rgba(235,235,225,0.9)",s="rgba(20,22,26,0.92)",r="rgba(170,32,24,0.95)",a="rgba(232,120,30,0.95)";i.add("veresk",900,200,(u,f,d,p)=>{D1(u,90,108,78,e),mi(u,"ВЕРЕСК-9",200,14,150,e,p),mi(u,"РУДНАЯ СТАНЦИЯ · СИНДИКАТ «ТАРН»",204,160,30,e,p,.1)}),i.add("shluz",520,200,(u,f,d,p)=>{mi(u,"ШЛЮЗ 2",10,10,140,t,p),mi(u,"СТЫКОВОЧНЫЙ · ДАВЛЕНИЕ ПРОВЕРЬ",14,156,30,t,p,.1)}),i.add("hazard",512,96,(u,f,d)=>{u.fillStyle="#c9a227",u.fillRect(0,0,f,d),u.fillStyle="#16171a";for(let v=-d;v<f+d;v+=64)u.beginPath(),u.moveTo(v,d),u.lineTo(v+32,d),u.lineTo(v+32+d,0),u.lineTo(v+d,0),u.fill();u.globalCompositeOperation="destination-out";const p=ns(5);for(let v=0;v<160;v++)u.globalAlpha=.5+p()*.5,u.beginPath(),u.ellipse(p()*f,p()*d,1+p()*9,1+p()*3,p()*3,0,7),u.fill()}),i.add("kolco",1020,150,(u,f,d,p)=>{mi(u,"ЖИЛОЕ КОЛЬЦО · СЕКТОР 3",10,8,74,e,p),mi(u,"← ШЛЮЗ 2      МАСТЕРСКАЯ 3 →",12,98,42,e,p,.15)}),i.add("masterskaya",620,130,(u,f,d,p)=>{mi(u,"МАСТЕРСКАЯ 3",8,10,104,a,p)}),i.add("tally",620,400,(u,f,d,p)=>{u.strokeStyle=n,u.lineCap="round";for(let v=0;v<7;v++){const M=22+v*54,h=v<6?9:4;for(let m=0;m<h;m++){const x=16+m*66+p()*6,y=v===6&&m===3,S=y?2:4;for(let T=0;T<S;T++)u.lineWidth=3+p()*2.5,u.globalAlpha=.6+p()*.4,u.beginPath(),u.moveTo(x+T*11+p()*3,M+p()*5),u.lineTo(x+T*11+p()*4-2,M+38+p()*6),u.stroke();y||(u.lineWidth=3.5,u.beginPath(),u.moveTo(x-6,M+30+p()*6),u.lineTo(x+44,M+6+p()*6),u.stroke())}}u.globalAlpha=1}),i.add("zvuchit",1240,170,(u,f,d,p)=>{Fn(u,p,"ПУСТЬ ЗВУЧИТ",14,138,138,r,{jitter:.07,font:On,drip:.25})}),i.add("derzhat",880,150,(u,f,d,p)=>{Fn(u,p,"ТРИ ДЕРЖАТ",12,118,112,n,{jitter:.09,font:On})}),i.add("nespat",720,110,(u,f,d,p)=>{Fn(u,p,"по очереди не спим",8,78,58,n,{jitter:.1,font:On,weight:400})}),i.add("slyshit",580,110,(u,f,d,p)=>{Fn(u,p,"оно отвечает",8,80,70,s,{jitter:.12,font:On,weight:400})}),i.add("nikogo",940,150,(u,f,d,p)=>{Fn(u,p,"ТАМ НИКОГО НЕТ",10,116,98,e,{jitter:.06,font:On,drip:.2})}),i.add("mayak",380,140,(u,f,d,p)=>{Fn(u,p,"МАЯК А",10,108,108,t,{jitter:.06,font:On})}),i.add("schema",520,480,(u,f,d,p)=>{u.strokeStyle=n,u.lineWidth=4,u.lineCap="round";const v=[[260,60],[70,400],[450,400]];u.beginPath(),v.forEach(([M,h],m)=>m?u.lineTo(M+p()*6,h+p()*6):u.moveTo(M,h)),u.closePath(),u.stroke();for(const[M,h]of v){for(let m=1;m<=3;m++)u.globalAlpha=1-m*.22,u.beginPath(),u.arc(M,h,m*22,0,7),u.stroke();u.globalAlpha=1,u.fillStyle=n,u.beginPath(),u.arc(M,h,7,0,7),u.fill()}u.lineWidth=2.5;for(let M=0;M<3;M++)for(let h=-2;h<=2;h++){const m=M*2.0944,x=Math.cos(m),y=Math.sin(m),S=260+x*h*22,T=290+y*h*22;u.beginPath(),u.moveTo(S-y*48,T+x*48),u.lineTo(S+y*48,T-x*48),u.stroke()}Fn(u,p,"А",276,50,44,n,{font:On}),Fn(u,p,"Б",18,446,44,n,{font:On}),Fn(u,p,"В",462,446,44,n,{font:On}),Fn(u,p,"спит",226,222,34,n,{font:On,weight:400})}),i.add("photos",420,300,(u,f,d,p)=>{for(let v=0;v<5;v++){const M=20+v%3*132+p()*10,h=16+Math.floor(v/3)*140+p()*14,m=(p()-.5)*.2;u.save(),u.translate(M+55,h+60),u.rotate(m),u.fillStyle="#e9e6dc",u.fillRect(-55,-62,110,124);const x=u.createLinearGradient(0,-52,0,40);x.addColorStop(0,["#7fa8c9","#c9a36b","#6b8f71","#b7b0a6","#40506a"][v]),x.addColorStop(1,["#2e4a3a","#5a3c2a","#2b3a4a","#6a5a4a","#1a2030"][v]),u.fillStyle=x,u.fillRect(-47,-54,94,90),u.fillStyle="rgba(240,225,200,0.85)";for(let y=0;y<2+v%2;y++){const S=-26+y*24;u.beginPath(),u.arc(S,2,9,0,7),u.fill(),u.fillRect(S-11,12,22,24)}u.fillStyle="rgba(200,190,150,0.7)",u.fillRect(-20,-70,40,14),u.restore()}}),i.add("scorch",256,256,(u,f,d)=>{const p=u.createRadialGradient(128,128,6,128,128,124);p.addColorStop(0,"rgba(6,6,8,0.92)"),p.addColorStop(.5,"rgba(14,12,12,0.55)"),p.addColorStop(1,"rgba(0,0,0,0)"),u.fillStyle=p,u.fillRect(0,0,f,d)}),i.add("ne",680,120,(u,f,d,p)=>{Fn(u,p,"тише. оно спит",8,86,72,n,{jitter:.1,font:On,weight:400})}),i.add("smena",540,96,(u,f,d,p)=>{Fn(u,p,"смена 41. Лида, прости",6,64,36,s,{jitter:.1,font:On,weight:400})}),i.add("skaf",420,96,(u,f,d,p)=>{mi(u,"СКАФАНДРЫ · ВКД",6,12,62,e,p)}),["С3 · 07","С3 · 08","С3 · 09","С3 · 10"].forEach((u,f)=>i.add("sec"+f,300,84,(d,p,v,M)=>{mi(d,u,6,8,64,"rgba(226,228,222,0.6)",M,.35)}));const o=new _u(1024),l=(u,f,d,p)=>o.add(u,f,d,(v,M,h,m)=>{v.fillStyle="#04100f",v.fillRect(0,0,M,h),p(v,M,h,m),v.fillStyle="rgba(0,0,0,0.22)";for(let x=0;x<h;x+=4)v.fillRect(0,x,M,2)}),c=(u,f,d,p,v,M)=>{u.font=`700 ${v}px 'DejaVu Sans Mono','Liberation Mono',monospace`,u.fillStyle=M,u.textBaseline="top",u.fillText(f,d,p)};return l("airlock",480,300,(u,f,d)=>{c(u,"ШЛЮЗ 2",20,16,44,"#7fe0d0"),c(u,"ВНЕШНИЙ ЛЮК  ЗАКРЫТ",20,84,28,"#7fe0d0"),c(u,"ДАВЛЕНИЕ  0.31 атм",20,126,28,"#ffb347"),c(u,"ТЕМПЕРАТУРА  -41 C",20,168,28,"#ffb347"),c(u,"ЭКИПАЖ НА БОРТУ: 0",20,220,28,"#ff5a4a"),u.strokeStyle="#7fe0d0",u.lineWidth=3,u.strokeRect(8,8,f-16,d-16)}),l("scope",480,300,(u,f,d)=>{u.strokeStyle="rgba(127,224,208,0.25)",u.lineWidth=1;for(let p=0;p<f;p+=40)u.beginPath(),u.moveTo(p,0),u.lineTo(p,d),u.stroke();for(let p=0;p<d;p+=40)u.beginPath(),u.moveTo(0,p),u.lineTo(f,p),u.stroke();u.strokeStyle="#ffc125",u.lineWidth=4,u.beginPath();for(let p=0;p<=f;p+=2){const v=p/f*3%1,M=d*.55-(v<.5?Math.sin(v*2*Math.PI*3)*Math.exp(-v*5)*d*.38:0);p?u.lineTo(p,M):u.moveTo(p,M)}u.stroke(),c(u,"А  3.000 Гц  НЕСУЩАЯ ДЕРЖИТСЯ",14,12,24,"#7fe0d0")}),l("term",480,300,u=>{["> журнал смены 41","> маяк А ... в норме","> маяк Б ... в норме","> маяк В ... в норме","> ответ на несущей: ЕСТЬ","> не выключать _"].forEach((f,d)=>c(u,f,16,16+d*44,28,d===4?"#ff5a4a":"#7fe0d0"))}),{tex:i.texture(),rects:i.rects,screenTex:o.texture(),screens:o.rects}}const ys=Math.PI,gt=ys/2;function Tt(i,e,t,n,s,r,a,o,l){l=l||o/t[4];const c=new ts(o,l,a==="+x"||a==="-x"?Math.max(1,Math.ceil(o/.8)):1,1),u=c.attributes.uv;for(let d=0;d<u.count;d++)u.setXY(d,t[0]+u.getX(d)*(t[2]-t[0]),t[1]+u.getY(d)*(t[3]-t[1]));const f={"+x":[0,gt],"-x":[0,-gt],"+z":[0,0],"-z":[0,ys],"+y":[-gt,0]}[a];i.add(e,c,i.mtx(n,s,r,f[0],f[1],0))}const Sn=(i,e,t,n,s,r,a=1,o=1,l=1,c=16)=>{const u=new Ci(r,c,Math.max(8,c*.75|0)),f=u.attributes.uv,d=Math.max(1,Math.round(r*9));for(let p=0;p<f.count;p++)f.setXY(p,f.getX(p)*d*2,f.getY(p)*d);return i.add(e,u,i.mtx(t,n,s,0,0,0,a,o,l))},Ut=(i,e,t,n,s,r,a,o=gt,l=0,c=28)=>i.add(e,new Ra(r,a,8,c),i.mtx(t,n,s,o,l,0));function Mu(i,e,t,n=.035){const s=new ts(i,e,14,20);s.rotateX(-gt);const r=s.attributes.position,a=s.attributes.uv,o=5+t()*4,l=7+t()*5,c=t()*6,u=t()*6,f=t()*6;for(let d=0;d<r.count;d++){const p=r.getX(d),v=r.getZ(d),M=Math.abs(p)/(i/2),h=Math.abs(v)/(e/2);let m=n*(Math.sin(p*o+v*2.1+c)*.55+Math.sin(v*l-p*3.3+u)*.45+Math.sin((p+v)*13+f)*.18);m+=n*.8,m-=Math.pow(Math.max(M,h),6)*.13,r.setY(d,m),a.setXY(d,a.getX(d)*i*2.2,a.getY(d)*e*2.2)}return s.computeVertexNormals(),s}const _t=(i,e,t,n,s,r,a,o,l=20,c=0,u=0,f=0)=>i.add(e,new ln(r,a,o,l),i.mtx(t,n,s,c,f,u));function U1(i,e){const t=ns(i*7919+13),n=I1(),s={airlock:go([le.x0,0,le.z0],[le.x1,le.h,le.z1]),corridor:go([K.x0,0,K.z0],[K.x1,K.h,K.z1]),bay:go([ee.x0,0,ee.z0],[ee.x1,ee.h,ee.z1])},r={};Object.assign(r,{decal:p1(n.tex),screens:zi(16777215,1.6,n.screenTex),lamp:zi(13624063,3.2),emerg:zi(16722458,2.6),glowRed:zi(16719888,5),glowCool:zi(14083839,1.3),glowWarm:zi(16756832,4),glowBeacon:zi(16763e3,7)});const a={};for(const h of Object.keys(s))a[h]={...m1(s[h]),...r};const o=n.rects,l=n.screens,c=new sn,u={shafts:[],dust:[],steam:[],sparks:[]},f=[],d={};{const h=new ta;h.slab("floor",le.x0,-.2,le.z0,le.x1,0,le.z1),h.slab("ceil",le.x0,le.h,le.z0,le.x1,le.h+.2,le.z1),h.slab("wall",le.x0-.3,0,le.z0,le.x0,le.h,le.z1),h.slab("wall",le.x1,0,le.z0,le.x1+.3,le.h,le.z1),h.slab("wall",le.x0-.3,0,le.z1,le.x1+.3,le.h,le.z1+.3);for(const x of[1.3,2.8,4.3,5.8])h.box("steelDark",le.x0+.07,le.h/2,x,.14,le.h,.18),h.box("steelDark",le.x1-.07,le.h/2,x,.14,le.h,.18),h.box("steelDark",0,le.h-.07,x,3,.14,.18),h.box("orange",le.x0+.07,1,x,.146,.09,.186),h.box("orange",le.x1-.07,1,x,.146,.09,.186);for(const x of[2.05,3.55,5.05])h.box("white",le.x0+.04,1.55,x,.08,1.2,1.2);h.slab("wallDark",le.x0,0,le.z0,le.x0+.05,.8,le.z1),h.slab("wallDark",le.x1-.05,0,le.z0,le.x1,.8,le.z1),h.pipe("copper",[-1.1,2.36,le.z0],[-1.1,2.36,le.z1],.04),h.pipe("copper",[-.94,2.38,le.z0],[-.94,2.38,le.z1],.03),h.pipe("steel",[1.12,2.33,le.z0],[1.12,2.33,le.z1],.075);for(const x of[1.9,3.4,4.9])Ut(h,"steelDark",1.12,2.33,x,.085,.022,0,0,14);h.pipe("steel",[le.x0+.12,1.15,.9],[le.x0+.12,1.15,5.9],.022),h.pipe("yellow",[-.7,2.44,.6],[.7,2.44,.6],.022);const m=le.z1;Ut(h,"orange",0,1.2,m-.02,.86,.11,0,0,40),_t(h,"steel",0,1.2,m-.03,.8,.8,.1,40,gt),Ut(h,"bronze",0,1.62,m-.09,.17,.035,0,0,24),_t(h,"rubber",0,1.62,m-.085,.16,.16,.02,24,gt),Ut(h,"red",0,1.08,m-.2,.24,.025,0,0,28);for(let x=0;x<3;x++){const y=gt+x*2.0944;h.pipe("red",[0,1.08,m-.2],[Math.cos(y)*.24,1.08+Math.sin(y)*.24,m-.2],.016,{seg:8}),h.box("steelDark",Math.cos(y+1.05)*.86,1.2+Math.sin(y+1.05)*.86,m-.1,.16,.26,.14,{rz:y+1.05-gt})}_t(h,"steelDark",0,1.08,m-.13,.05,.05,.16,12,gt),h.box("steelDark",0,2.3,m-.06,.7,.12,.1),h.box("glowCool",0,2.3,m-.115,.6,.05,.02),h.pipe("steel",[1.32,2.2,1.6],[1.32,2.2,4.2],.025);for(const x of[2.3,3.5]){const y=(S,T,R,g,_,w,b=0,P=1)=>h.add(S,new Os(_,w,6,14),h.mtx(T,R,g,b,0,0,P,1,1));y("white",1.26,1.42,x,.26,.3,0,.7),h.box("steelDark",1.38,1.45,x,.16,.66,.46),h.box("teal",1.085,1.5,x,.03,.18,.24);for(const S of[-1,1])y("white",1.26,.62,x+S*.14,.105,.72),h.box("rubber",1.22,.07,x+S*.14,.32,.14,.2),Ut(h,"teal",1.26,.2,x+S*.14,.11,.018,gt,0,14),y("white",1.26,1.34,x+S*.36,.085,.6,S*.1),Sn(h,"steelDark",1.26,.96,x+S*.39,.09,1,1.1,1,10),Ut(h,"teal",1.26,1.06,x+S*.385,.088,.016,gt,0,14);Ut(h,"bronze",1.26,1.8,x,.17,.03,gt,0,20);for(const S of[-1,1])Sn(h,"white",1.26,1.66,x+S*.3,.13,.9,.8,1,12),Ut(h,"orange",1.26,1.5,x+S*.365,.09,.014,gt,0,14),Ut(h,"orange",1.26,.72,x+S*.14,.108,.014,gt,0,14);h.box("orange",1.07,1.3,x,.02,.05,.3),Sn(h,"white",1.26,1.98,x,.21),Sn(h,"bronze",1.2,1.98,x,.19,1,.8,.85),h.box("steelDark",1.2,1.2,x,.3,.07,.5),h.box("orange",1.1,1.2,x-.2,.08,.12,.1),h.box("white",1.1,1.2,x+.18,.08,.12,.12),h.cable("rubber",[[1.4,1.7,x-.12],[1.32,1.86,x-.16],[1.24,1.84,x-.12]],.018),h.cable("rubber",[[1.4,1.7,x+.12],[1.32,1.86,x+.16],[1.24,1.84,x+.12]],.018);for(const S of[-1,1])Sn(h,"steelDark",1.2,.55,x+S*.14,.085,.6,1,1,10),Ut(h,"bronze",1.26,1,x+S*.385,.09,.012,gt,0,14);h.pipe("steel",[1.3,2.2,x],[1.3,2.12,x],.012,{seg:6})}Tt(h,"decal",o.skaf,le.x1-.06,2.32,2.9,"-x",1.1),h.box("steelDark",1.08,1.3,le.z0+.05,.56,.5,.1),Tt(h,"screens",l.airlock,1.08,1.36,le.z0+.105,"+z",.44,.275),h.box("glowRed",.92,1.12,le.z0+.105,.05,.03,.02),h.box("glowCool",1.02,1.12,le.z0+.105,.05,.03,.02),_t(h,"steelDark",0,2.3,le.z0+.1,.08,.09,.06,14),_t(h,"glowRed",0,2.24,le.z0+.1,.06,.05,.08,14),h.box("steelDark",0,le.h-.04,3.4,.3,.07,1.3),h.box("glowCool",0,le.h-.08,3.4,.18,.02,1.1),h.box("yellow",-1.3/2-.07,1.05,le.z0+.03,.14,2.1,.08),h.box("yellow",Bt.w/2+.07,1.05,le.z0+.03,.14,2.1,.08),h.box("yellow",0,Bt.y1+.07,le.z0+.03,Bt.w+.28,.14,.08),h.box("steelDark",0,Bt.y0/2,.2,Bt.w,Bt.y0,.4),Tt(h,"decal",o.shluz,le.x0+.085,1.55,3.55,"+x",1.25),Tt(h,"decal",o.hazard,0,.004,le.z0+.45,"+y",1.5,.28),Tt(h,"decal",o.hazard,0,.004,le.z1-.5,"+y",1.8,.3),h.slab("steelDark",-.42,0,le.z0+.7,.42,.012,le.z1-.8);for(let x=le.z0+.9;x<le.z1-.9;x+=.3)h.slab("steel",-.4,.012,x,.4,.02,x+.04);for(let x=0;x<3;x++)_t(h,x===1?"white":"yellow",1.36,.5,5+x*.2,.075,.075,.62,14),Sn(h,x===1?"white":"yellow",1.36,.81,5+x*.2,.075,1,.7,1,10),_t(h,"bronze",1.36,.88,5+x*.2,.02,.025,.07,8);h.box("steelDark",1.37,.42,5.2,.05,.05,.7),h.box("steelDark",1.37,.66,5.2,.05,.05,.7),h.box("steelDark",-1.26,.62,5.72,.46,1.24,.6),h.box("teal",-1.02,.62,5.72,.02,1.1,.5),h.box("steel",-1.01,.7,5.5,.02,.12,.03),h.box("orange",-1.22,1.33,5.72,.32,.18,.44,{ry:.1}),Ut(h,"rubber",le.x0+.1,1.05,1,.2,.05,0,gt,22),Ut(h,"rubber",le.x0+.16,1.05,1,.17,.045,0,gt,22),_t(h,"steelDark",le.x0+.1,1.05,1,.07,.07,.22,12,0,gt),h.cable("rubber",[[le.x0+.13,.86,1],[le.x0+.22,.4,1.15],[le.x0+.4,.03,1.5],[le.x0+.5,.03,2.1]],.02),h.box("steel",.75,le.h-.06,4.9,.7,.1,.7);for(let x=0;x<5;x++)h.box("steelDark",.75,le.h-.115,4.62+x*.14,.6,.012,.05);h.box("white",-.9,.012,2.4,.21,.004,.297,{ry:.7}),h.box("white",.55,.012,4.6,.21,.004,.297,{ry:-.4}),h.box("orange",.95,.11,5.75,.5,.22,.32,{ry:.25}),c.add(h.build(a.airlock)),e.add({kind:"spot",pos:[0,le.h-.12,3.4],to:[.1,0,3.3],color:13623551,power:9,dist:9,angle:1.05,penumbra:.9,prio:3,reach:12,flicker:x=>Math.sin(x*31)*Math.sin(x*7.3)>.82?.25:1}),e.add({kind:"point",pos:[0,2.15,le.z0+.35],color:16720914,power:9,dist:7,prio:3,reach:11,flicker:x=>.25+.75*Math.pow(.5+.5*Math.sin(x*3.1),3)}),e.add({kind:"point",pos:[.9,1.35,le.z0+.5],color:6742224,power:1,dist:3,reach:10}),e.add({kind:"point",pos:[0,2.25,le.z1-.45],color:10471679,power:2.6,dist:5,reach:11,prio:2}),f.push([0,1.3,le.z1,2.1],[le.x0,.9,4.9,1.5],[le.x1,2.2,5.3,1]),u.shafts.push({pos:[0,le.h-.12,3.4],to:[.1,0,3.3],r0:.25,r1:1.7,color:12572415,power:.07}),u.dust.push({box:[le.x0,.1,le.z0,le.x1,le.h,le.z1],n:500,color:13623551,power:.55}),u.steam.push({pos:[-1.1,2.3,2.05],dir:[.35,-1,.1],len:1.5,n:40,size:.5,color:13621478,power:.35})}{const h=new ta,m=Bt.w,x=Bt.y1-Bt.y0;h.box("yellow",m/2,Bt.y0+x/2,0,m-.03,x-.02,.09),h.box("white",m/2,Bt.y0+x/2,.05,m-.3,x-.34,.03),h.box("white",m/2,Bt.y0+x/2,-.05,m-.3,x-.34,.03);for(const _ of[1,-1]){Ut(h,"red",m/2,1.12,_*.17,.2,.024,0,0,28);for(let w=0;w<3;w++){const b=gt+w*2.0944;h.pipe("red",[m/2,1.12,_*.17],[m/2+Math.cos(b)*.2,1.12+Math.sin(b)*.2,_*.17],.015,{seg:8})}_t(h,"steel",m/2,1.12,_*.11,.045,.045,.14,12,gt),Tt(h,"decal",o.hazard,m/2,.42,_*.068,_>0?"+z":"-z",m-.34,.16)}_t(h,"steelDark",.02,.5,0,.035,.035,.24,10),_t(h,"steelDark",.02,1.6,0,.035,.035,.24,10);const y=h.build(a.airlock),S=new sn;S.add(y),$l(S,-m/2,0,.02);const T=S.quaternion.clone(),R=new Ht,g=new I(0,1,0);d.hatch={group:S,set(_){S.quaternion.copy(T).multiply(R.setFromAxisAngle(g,_*1.95))}},d.hatch.set(1),c.add(S)}{const h=new ta;h.slab("floor",K.x0,-.2,K.z0,K.x1,0,K.z1),h.slab("ceil",K.x0,K.h,K.z0,K.x1,K.h+.2,K.z1),h.wall("wall","x",K.x0-.2,K.z0,K.z1,0,K.h,.4,[{a0:he.z0,a1:he.z1,y0:he.y0,y1:he.y1}]),h.wall("wall","x",K.x1+.2,K.z0,K.z1,0,K.h,.4,[{a0:Je.z0,a1:Je.z1,y0:0,y1:Je.h}]),h.slab("wallDark",K.x0,0,K.z0-.4,K.x1,K.h,K.z0),h.wall("wallDark","z",.2,K.x0,K.x1,0,K.h,.4,[{a0:-1.3/2,a1:Bt.w/2,y0:Bt.y0,y1:Bt.y1}]),h.box("yellow",-1.3/2-.07,1.05,-.03,.14,2.1,.08),h.box("yellow",Bt.w/2+.07,1.05,-.03,.14,2.1,.08),h.box("yellow",0,Bt.y1+.07,-.03,Bt.w+.28,.14,.08),h.slab("wallDark",K.x0,0,K.z0,K.x0+.05,.78,K.z1),h.slab("steel",K.x0,.78,K.z0,K.x0+.07,.83,K.z1);for(const[g,_]of[[K.z0,Je.z0-.15],[Je.z1+.15,K.z1]])h.slab("wallDark",K.x1-.05,0,g,K.x1,.78,_),h.slab("steel",K.x1-.07,.78,g,K.x1,.83,_);for(let g=-2;g>K.z0;g-=4)g>he.z0&&g<he.z1||(h.box("steelDark",K.x0+.1,K.h/2,g,.2,K.h,.3),h.box("orange",K.x0+.105,1.08,g,.22,.14,.32)),h.box("steelDark",K.x1-.1,K.h/2,g,.2,K.h,.3),h.box("orange",K.x1-.105,1.08,g,.22,.14,.32),h.box("steelDark",0,K.h-.11,g,4,.22,.3),h.box("steelDark",-1.55,K.h-.35,g,.5,.08,.26,{rz:.785}),h.box("steelDark",1.55,K.h-.35,g,.5,.08,.26,{rz:-.785});h.pipe("steel",[1.56,2.68,K.z0],[1.56,2.68,K.z1],.09),h.pipe("copper",[1.3,2.74,K.z0],[1.3,2.74,K.z1],.05),h.pipe("white",[-1.56,2.68,K.z0],[-1.56,2.68,K.z1],.07),h.pipe("orange",[-1.32,2.76,K.z0],[-1.32,2.76,K.z1],.04),h.slab("steelDark",.7,2.8,K.z0,1.1,2.83,K.z1);for(const g of[.78,.9,1.02])h.pipe("rubber",[g,2.85,K.z0],[g,2.85,K.z1],.022,{seg:6});for(let g=-4;g>K.z0;g-=8)for(const _ of[1.56,-1.56])Ut(h,"steelDark",_,2.68,g+1.7,.105,.025,0,0,14);const m={"-4":1,"-12":1,"-20":2,"-28":1};for(let g=-4;g>K.z0;g-=4){h.box("steelDark",0,K.h-.045,g,.34,.09,1.5);const _=m[g];h.box(_?"lamp":"rubber",0,K.h-.1,g,.22,.02,1.3),_&&(e.add({kind:"spot",pos:[0,K.h-.14,g],to:[0,0,g-.05],color:12375807,power:10,dist:11,angle:1.1,penumbra:.9,prio:2,reach:20,mood:{amber:{color:16760454,power:12}},flicker:_===2?w=>Math.sin(w*23)*Math.sin(w*5.1)>.3?.15:1:null}),u.shafts.push({pos:[0,K.h-.14,g],to:[0,0,g-.05],r0:.3,r1:2,color:12375807,power:.14,moodColor:{amber:16754776}}))}for(let g=-2;g>Lt;g-=4){for(const _ of[K.x0+.06,K.x1-.06])h.box("emerg",_,.3,g-2,.03,.05,.4);(g+2)%8===0&&e.add({kind:"point",pos:[(g%16===-2?-1:1)*1.7,.35,g-2],color:16722458,power:2.2,dist:6,reach:18,mood:{amber:{color:16747050,power:3.2}}})}h.pipe("steel",[K.x1-.12,1.05,-.6],[K.x1-.12,1.05,Je.z1+.4],.024),h.pipe("steel",[K.x1-.12,1.05,Je.z0-.4],[K.x1-.12,1.05,Lt+1.2],.024);const x=(he.z0+he.z1)/2,y=he.z1-he.z0;h.box("steel",K.x0+.04,he.y1+.09,x,.12,.18,y+.36),h.box("steelDark",K.x0+.08,he.y0-.07,x,.2,.14,y+.36),h.box("steel",K.x0+.04,(he.y0+he.y1)/2,he.z0-.09,.12,he.y1-he.y0,.18),h.box("steel",K.x0+.04,(he.y0+he.y1)/2,he.z1+.09,.12,he.y1-he.y0,.18);for(const g of[he.z0+y/3,he.z0+2*y/3])h.box("steelDark",K.x0-.14,(he.y0+he.y1)/2,g,.16,he.y1-he.y0,.08);h.slab("steelDark",K.x0-.4,he.y0-.02,he.z0,K.x0,he.y0,he.z1),h.slab("steelDark",K.x0-.4,he.y1,he.z0,K.x0,he.y1+.02,he.z1),h.box("orange",K.x1-.03,Je.h/2,Je.z0-.08,.1,Je.h,.16),h.box("orange",K.x1-.03,Je.h/2,Je.z1+.08,.1,Je.h,.16),h.box("orange",K.x1-.03,Je.h+.08,(Je.z0+Je.z1)/2,.1,.16,Je.z1-Je.z0+.32),h.slab("wallDark",K.x1+.14,0,Je.z0,K.x1+.26,Je.h,Je.z1-Je.open),h.slab("yellow",K.x1+.12,.9,Je.z1-Je.open-.1,K.x1+.28,1.3,Je.z1-Je.open),h.slab("steelDark",K.x1,Je.h,Je.z0,K.x1+.4,Je.h+.02,Je.z1),Tt(h,"decal",o.masterskaya,K.x1-.004,2.68,-24,"-x",1.7),Tt(h,"decal",o.veresk,K.x1-.054,1.9,-5.8,"-x",3.3),Tt(h,"decal",o.kolco,K.x0+.004,2.5,-7.8,"+x",2.6),Tt(h,"decal",o.hazard,1.55,.004,-24,"+y",.6,1.9),h.box("white",1.55,.35,-8.3,.8,.7,1,{ry:.06}),h.box("orange",1.6,.3,-9.5,.7,.6,.8,{ry:-.1}),h.box("teal",1.55,.95,-8.4,.6,.5,.7,{ry:.3}),h.box("steelDark",1.62,.72,-9.5,.5,.24,.5,{ry:.5});const S=[[-22.5,"clothBlue","cloth"],[-25.5,"cloth","clothWarm"],[-28.5,"clothWarm","clothBlue"]];for(const[g,_,w]of S)h.box(_,-1.52,.07,g,.82,.14,1.9,{ry:(t()-.5)*.08}),h.add(w,Mu(.95,1.5,t),h.mtx(-1.42+t()*.08,.15,g+.12,0,(t()-.5)*.35,0)),h.add(_,Mu(.5,.6,t,.05),h.mtx(-1.2,.19,g-.55,0,t()*.9,0)),h.box("white",-1.55,.2,g+.78,.5,.12,.3,{ry:t()*.4-.2,rz:.08});h.box("orange",-1.6,.24,-24,.5,.48,.5,{ry:.2}),_t(h,"white",-1.55,.53,-24.05,.04,.035,.09,12),_t(h,"steel",-1.72,.54,-23.9,.035,.035,.11,10),_t(h,"steelDark",-1.45,.56,-23.85,.05,.06,.04,10),_t(h,"glowWarm",-1.45,.64,-23.85,.04,.04,.12,10),_t(h,"steelDark",-1.45,.72,-23.85,.055,.05,.03,10),h.box("white",-1.6,.2,-27,.46,.4,.46,{ry:-.3});for(let g=0;g<4;g++)h.box(["red","teal","clothWarm","white"][g],-1.6+(t()-.5)*.1,.42+g*.035,-27,.22,.03,.3,{ry:t()*1.2});h.box("rubber",-1,.09,-23.3,.13,.18,.3,{ry:.5}),h.box("rubber",-.92,.06,-23.65,.13,.12,.3,{ry:1.4,rz:1.3});for(let g=0;g<6;g++)_t(h,"steel",-.95-t()*.6,.05,-26.2-t()*3.4,.04,.04,.1,10,t()<.5?gt:0,0,t()*3);h.box("clothWarm",-1.9,1.25,-21.6,.1,.7,.5,{rz:.06}),h.box("clothWarm",-1.86,.95,-21.6,.14,.3,.56),h.pipe("steel",[K.x0+.03,1.65,-21.6],[K.x0+.14,1.65,-21.6],.012,{seg:6}),_t(h,"steelDark",-.9,.42,-25.4,.17,.17,.04,14);for(let g=0;g<3;g++){const _=g*2.0944;h.pipe("steel",[-.9,.42,-25.4],[-.9+Math.cos(_)*.2,0,-25.4+Math.sin(_)*.2],.012,{seg:6})}Tt(h,"decal",o.tally,K.x0+.004,1.42,-25.4,"+x",1.25),Tt(h,"decal",o.photos,K.x0+.004,1.2,-22.7,"+x",.62),Tt(h,"decal",o.nespat,K.x0+.004,1.75,-28.4,"+x",1.5),Tt(h,"decal",o.smena,K.x0+.004,.98,-28.2,"+x",.8);const T=["teal","white","steelDark","white","teal","steelDark"];for(let g=0;g<6;g++){const _=-1.67+g*.668;h.box(T[g],_,.96+t()*.02,Lt-.25,.65,1.92,.5,{rz:(t()-.5)*.05,ry:(t()-.5)*.08}),h.box("steelDark",_,1.5,Lt+.012,.3,.16,.02)}h.box("steelDark",0,2.3,Lt-.2,4,.7,.06,{rx:.04}),h.box("white",-.9,2.82,Lt-.25,1.9,.3,.5,{rz:.03}),h.box("orange",1.1,2.8,Lt-.25,1.7,.34,.5,{rz:-.04}),h.box("steel",.1,1.28,Lt+.05,3.9,.5,.03,{rz:.13}),h.box("steel",-.1,.55,Lt+.055,3.9,.42,.03,{rz:-.17}),h.box("steelDark",-.95,1.5,Lt+.1,.14,3,.14),h.box("steelDark",.95,1.5,Lt+.1,.14,3,.14),h.box("steelDark",0,2.05,Lt+.1,4,.12,.1),h.box("weld",.1,1.535,Lt+.068,3.9,.022,.012,{rz:.13}),h.box("weld",.1,1.025,Lt+.068,3.9,.022,.012,{rz:.13}),h.box("weld",-.1,.765,Lt+.072,3.9,.022,.012,{rz:-.17}),h.box("weld",-.1,.335,Lt+.072,3.9,.022,.012,{rz:-.17});for(const g of[-.95,.95])for(const _ of[.4,1.2,2.05])Tt(h,"decal",o.scorch,g,_,Lt+.18,"+z",.6,.6);for(const g of[-1.98,1.98])Tt(h,"decal",o.scorch,g*.99,1.3,Lt+.3,g<0?"+x":"-x",.9,1.4);Tt(h,"decal",o.nikogo,.1,1.72,Lt+.19,"+z",2.3),_t(h,"red",1.55,.62,-34.7,.11,.11,1.2,16),Sn(h,"red",1.55,1.22,-34.7,.11,1,.8,1,12),_t(h,"teal",1.28,.62,-34.75,.11,.11,1.2,16),Sn(h,"teal",1.28,1.22,-34.75,.11,1,.8,1,12),_t(h,"bronze",1.55,1.34,-34.7,.025,.03,.1,8),_t(h,"bronze",1.28,1.34,-34.75,.025,.03,.1,8),h.box("yellow",1.1,.2,-34.2,.5,.4,.36,{ry:.3}),h.cable("rubber",[[1.55,1.3,-34.7],[1.3,.5,-34.3],[.7,.03,-34.5],[.1,.03,-35],[-.4,.03,-35.5]],.014),h.cable("red",[[1.28,1.3,-34.75],[1,.4,-34.6],[.5,.03,-34.9],[-.2,.03,-35.2],[-.42,.04,-35.52]],.012),Sn(h,"steelDark",-.9,.1,-34.7,.16,1,.9,.8,12),h.box("yellow",-.5,.12,-34.25,.3,.2,.14,{ry:.5,rx:.5}),h.box("glowCool",-.52,.16,-34.33,.24,.14,.02,{ry:.5,rx:.5});for(const g of[-1,1]){const _=g*2,w=g<0?[[K.z0,K.z1]]:[[K.z0,K.z1]];for(const[b,P]of w)h.slab("steelDark",_-g*.1,2.3,b,_-g*0,2.42,P);h.slab("steelDark",_-g*.34,0,K.z0,_-g*.08,.014,K.z1);for(let b=-.3;b>Lt;b-=.22)h.slab("steel",_-g*.32,.014,b-.03,_-g*.1,.022,b)}let R=0;for(let g=-4;g>Lt+2;g-=4,R++){for(const _ of[-1,1]){if(_<0&&g>he.z0-1&&g<he.z1+1||_>0&&g>Je.z0-1.5&&g<Je.z1+1.5||_<0&&g<-21&&g>-30)continue;const w=_*2,b=(R*2+(_>0?1:0)+i)%5;if(h.pipe("steel",[w-_*.05,.83,g+1.7],[w-_*.05,2.3,g+1.7],.022,{seg:8}),h.pipe("copper",[w-_*.05,.83,g+1.62],[w-_*.05,2.3,g+1.62],.014,{seg:8}),b===0){h.box("steelDark",w-_*.08,1.55,g,.16,.9,.6),h.box("steel",w-_*.165,1.55,g,.012,.8,.5),h.box("yellow",w-_*.175,1.86,g,.006,.1,.34);for(let P=0;P<3;P++)h.box(P===1?"glowRed":"glowWarm",w-_*.175,1.3,g-.12+P*.12,.008,.025,.04);h.pipe("steelDark",[w-_*.08,2,g],[w-_*.08,2.3,g],.03,{seg:8})}else if(b===1){h.box("steelDark",w-_*.03,1.9,g,.06,.5,.9);for(let P=0;P<6;P++)h.box("steel",w-_*.065,1.71+P*.075,g,.02,.03,.8,{rz:_*.5})}else if(b===2)_t(h,"red",w-_*.13,1.25,g-.2,.07,.07,.42,14),Sn(h,"red",w-_*.13,1.46,g-.2,.07,1,.6,1,10),_t(h,"steelDark",w-_*.13,1.52,g-.2,.02,.025,.07,8),h.box("white",w-_*.07,1.5,g+.25,.14,.3,.36),h.box("red",w-_*.143,1.5,g+.25,.006,.16,.05),h.box("red",w-_*.143,1.5,g+.25,.006,.05,.16);else if(b===3){h.box("steelDark",w-_*.04,1.4,g,.08,.6,.7);for(let P=0;P<2;P++)Ut(h,"red",w-_*.14,1.4,g-.16+P*.32,.07,.014,0,gt,16),_t(h,"steel",w-_*.09,1.4,g-.16+P*.32,.018,.018,.1,8,0,gt);h.pipe("copper",[w-_*.09,1.4,g-.34],[w-_*.09,1.4,g+.34],.025,{seg:8})}else{h.box("steelDark",w-_*.02,1.6,g,.04,.7,1);for(let P=0;P<4;P++)h.box(P%2?"white":"yellow",w-_*.045,1.5+P%2*.24,g-.33+P*.2,.004,.2+P%3*.03,.15,{rx:(P-1.5)*.06})}}R%2===1&&(h.box("steel",0,2.62,g+2,3,.24,.42),h.box("steelDark",0,2.62,g+2,3.04,.05,.46),h.cable("rubber",[[-1.2,2.5,g+1.6],[-.6,2.2,g+1.2],[.1,2.12-R%3*.08,g+.6],[.7,2.3,g+.1],[1,2.78,g-.3]],.016))}for(const g of[-1,1]){const _=g*2,w=g<0?[[K.z0+4.6,he.z0-.5],[he.z1+.5,-.4]]:[[K.z0+4.6,Je.z0-.5],[Je.z1+.5,-.4]];for(const[b,P]of w){h.pipe("rubber",[_-g*.035,2.12,b],[_-g*.035,2.12,P],.026,{seg:8}),h.pipe("orange",[_-g*.03,2.06,b],[_-g*.03,2.06,P],.016,{seg:8}),h.pipe("rubber",[_-g*.03,2.02,b],[_-g*.03,2.02,P],.012,{seg:6});for(let D=P-.8;D>b;D-=1.6)h.box("steel",_-g*.04,2.07,D,.075,.16,.04,{bevel:0})}}for(let g=0,_=-3.9;_>Lt+3;_-=4,g++)!(_>he.z0-1.2&&_<he.z1+1.2)&&!(_<-20.5&&_>-30.5)&&Tt(h,"decal",o["sec"+g%4],K.x0+.056,.52,_-.9,"+x",.62),_>Je.z0-2&&_<Je.z1+2||Tt(h,"decal",o["sec"+(g+2)%4],K.x1-.056,.52,_+.9,"-x",.62);for(const g of[-6.5,-18.5,-31]){h.box("steel",0,.008,g,.9,.016,.9);for(const[_,w]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])h.box("yellow",_,.018,g+w,.1,.006,.1);h.box("steelDark",0,.02,g,.24,.012,.06)}for(let g=0;g<16;g++)h.box("white",(t()-.5)*3,.006,-3-t()*31,.21,.003,.297,{ry:t()*3});h.box("steelDark",1.35,.5,-17.2,.6,.04,.95),h.box("steelDark",1.35,.14,-17.2,.6,.04,.95);for(const[g,_]of[[-.27,-.44],[.27,-.44],[-.27,.44],[.27,.44]])h.pipe("steel",[1.35+g,.06,-17.2+_],[1.35+g,.85,-17.2+_],.016,{seg:6}),_t(h,"rubber",1.35+g,.05,-17.2+_,.05,.05,.03,10,0,gt);h.box("orange",1.35,.66,-17.3,.44,.26,.5,{ry:.2}),h.box("teal",1.3,.24,-17.1,.4,.16,.6,{ry:-.1}),c.add(h.build(a.corridor)),e.add({kind:"spot",pos:[-10.5,6.2,x+7.6],to:[1.2,.2,x-1.5],color:16773336,power:4.5,dist:40,decay:0,angle:.36,penumbra:.2,prio:4,reach:22}),u.sun={pos:[-10.5,6.2,x+7.6],to:[1.2,.2,x-1.5]},u.dust.push({box:[K.x0,.05,he.z0-2.5,K.x1,2.4,he.z1-.5],n:1300,color:16773336,power:1.5,sun:!0}),u.dust.push({box:[K.x0,.2,-30,K.x1,K.h,-1],n:900,color:12374256,power:.4}),e.add({kind:"point",pos:[-1.45,.78,-23.85],color:16752704,power:3.4,dist:6.5,reach:18,prio:3,wakeKeep:.5,flicker:g=>.9+.1*Math.sin(g*7.3)*Math.sin(g*2.9)}),e.add({kind:"point",pos:[-.5,.35,-34.3],color:13623551,power:3.2,dist:7,reach:18,prio:2,flicker:g=>.8+.2*Math.sin(g*13)*Math.sin(g*3.7)}),f.push([.3,1.6,Lt,3.2],[K.x0-.2,2.2,he.z0,1.25],[1.6,K.h,-18.5,1.5],[K.x1,.1,-26.6,1.3]),u.steam.push({pos:[-1.56,2.6,-31.5],dir:[.5,-1,.2],len:1.8,n:40,size:.6,color:13161184,power:.3})}{const h=new ta,m=Ss.x,x=Ss.z;h.slab("floor",ee.x0-.4,-.2,ee.z0,ee.x1,0,ee.z1),h.slab("ceil",ee.x0-.4,ee.h,ee.z0,ee.x1,ee.h+.2,ee.z1),h.slab("wall",ee.x1,0,ee.z0-.4,ee.x1+.4,ee.h,ee.z1+.4),h.slab("wall",ee.x0-.4,0,ee.z0-.4,ee.x1,ee.h,ee.z0),h.slab("wall",ee.x0-.4,0,ee.z1,ee.x1,ee.h,ee.z1+.4),h.slab("wall",ee.x0-.4,K.h,ee.z0,ee.x0,ee.h,ee.z1),h.wall("wallDark","x",ee.x0-.03,ee.z0,ee.z1,0,K.h,.06,[{a0:Je.z0,a1:Je.z1,y0:0,y1:Je.h}]),h.slab("wallDark",ee.x1-.05,0,ee.z0,ee.x1,1.2,ee.z1),h.slab("wallDark",ee.x0,0,ee.z0,ee.x1,1.2,ee.z0+.05),h.slab("wallDark",ee.x0,0,ee.z1-.05,ee.x1,1.2,ee.z1);for(const _ of[ee.x0+.12,7.07,11.73,ee.x1-.12])for(const w of[ee.z0+.12,ee.z1-.12])h.box("steelDark",_,ee.h/2,w,.24,ee.h,.24);for(const _ of[-19.6,-24,-28.4]){h.box("steelDark",(ee.x0+ee.x1)/2,ee.h-.15,_,14,.3,.22),h.box("steelDark",ee.x1-.12,ee.h/2,_,.24,ee.h,.24);for(let w=ee.x0+1;w<ee.x1;w+=2)h.box("steelDark",w,ee.h-.45,_,.06,.6,.06,{rz:(Math.round(w)%4<2?1:-1)*.6})}h.box("yellow",(ee.x0+ee.x1)/2,4.85,x,14,.26,.2),h.box("steelDark",m+.3,4.66,x,.6,.2,.44),h.pipe("steel",[m+.3,4.6,x],[m+.3,4.48,x],.02,{seg:8}),Ut(h,"steel",m+.3,4.42,x,.06,.018,0,0,12),h.pipe("steel",[ee.x0+.4,5.2,ee.z0+.5],[ee.x1-.2,5.2,ee.z0+.5],.1),h.pipe("copper",[ee.x0+.4,4.9,ee.z0+.35],[ee.x1-.2,4.9,ee.z0+.35],.05),h.pipe("white",[ee.x1-.3,5.1,ee.z0+.4],[ee.x1-.3,5.1,ee.z1-.2],.08);for(const[_,w,b]of[[5.2,-20.8,0],[13.6,-20.8,0],[5.2,-27.2,0],[13.6,-27.2,0]])h.box("steelDark",_,ee.h-.4,w,.9,.12,.9),h.box(b?"glowCool":"rubber",_,ee.h-.47,w,.7,.02,.7),h.pipe("steelDark",[_,ee.h,w],[_,ee.h-.36,w],.03,{seg:8});for(let _=0;_<3;_++){const w=gt+_*2.0944,b=m+Math.cos(w)*2.05,P=x+Math.sin(w)*2.05;h.pipe("steelDark",[m+Math.cos(w)*.9,.42,x+Math.sin(w)*.9],[b,.1,P],.065),_t(h,"steel",b,.04,P,.24,.27,.08,16),h.pipe("yellow",[m+Math.cos(w)*.75,1.3,x+Math.sin(w)*.75],[b-Math.cos(w)*.3,.14,P-Math.sin(w)*.3],.03,{seg:8})}h.add("steelDark",new ln(1.2,1.32,.3,6),h.mtx(m,.15,x,0,.3,0)),_t(h,"orange",m,.86,x,.72,.74,1.12,28);for(const _ of[.42,.86,1.3])Ut(h,"steelDark",m,_,x,.745,.04,gt,0,36);for(let _=0;_<12;_++){const w=_*ys/6;h.box("steelDark",m+Math.cos(w)*.75,.86,x+Math.sin(w)*.75,.04,.8,.07,{ry:-w})}h.add("steel",new ln(.88,.88,.08,8),h.mtx(m,1.46,x,0,.2,0)),_t(h,"white",m+.07,1.95,x-.04,.5,.5,.9,24),Sn(h,"white",m+.07,2.4,x-.04,.5,1,.42,1,24);for(const _ of[1.72,2.2])Ut(h,"yellow",m+.07,_,x-.04,.512,.022,gt,0,32);_t(h,"steel",m,3.4,x,.1,.12,1.9,14),[[2.86,.56],[3.22,.43],[3.55,.3]].forEach(([_,w],b)=>{Ut(h,"copper",m,_,x,w,.05,gt,0,40);for(let P=0;P<3;P++){const D=P*2.0944+b;h.pipe("steelDark",[m,_,x],[m+Math.cos(D)*w,_,x+Math.sin(D)*w],.014,{seg:6})}});for(let _=0;_<3;_++){const w=gt+ys/3+_*2.0944;h.pipe("bronze",[m+Math.cos(w)*.86,1.5,x+Math.sin(w)*.86],[m+Math.cos(w)*.8,2.7,x+Math.sin(w)*.8],.035,{seg:10}),h.pipe("bronze",[m+Math.cos(w)*.8,2.7,x+Math.sin(w)*.8],[m+Math.cos(w)*.22,4.3,x+Math.sin(w)*.22],.03,{seg:10}),Sn(h,"steel",m+Math.cos(w)*.22,4.33,x+Math.sin(w)*.22,.055,1,1,1,10),Sn(h,"steelDark",m+Math.cos(w)*.8,2.7,x+Math.sin(w)*.8,.06,1,1,1,10)}Sn(h,"glowBeacon",m,4.48,x,.13,1,1,1,16),Ut(h,"steelDark",m,4.48,x,.17,.012,0,0,16),Ut(h,"steelDark",m,4.48,x,.17,.012,0,gt,16),h.box("teal",m-.98,1.05,x+.25,.34,.62,.56,{ry:.12}),Tt(h,"screens",l.scope,m-1.158,1.12,x+.228,"-x",.4,.25),h.box("glowRed",m-1.156,.84,x+.4,.02,.03,.03),h.box("glowWarm",m-1.156,.84,x+.3,.02,.03,.03),h.box("glowWarm",m-1.156,.84,x+.2,.02,.03,.03),h.box("yellow",m+.55,1.75,x+.62,.42,.32,.26,{ry:-.7}),h.box("white",m-.3,2,x+.66,.5,.36,.2,{ry:.25,rz:.06});for(let _=0;_<3;_++)h.box("steelDark",m+1.55+_*.36,.14,x+1.25-_*.12,.3,.28,.2,{ry:.3}),_t(h,"copper",m+1.5+_*.36,.31,x+1.24-_*.12,.022,.022,.06,8);const y=new Hl([0,.1,.2,.3,.4,.5,.56].map(_=>new ce(_,_*_*.7)),28);h.add("white",y,h.mtx(m+1,2.55,x-1,1,-.8,0)),h.pipe("steel",[m+.45,2.3,x-.4],[m+1,2.55,x-1],.03,{seg:8}),h.pipe("steel",[m-.75,0,x-1.75],[m-.42,2.7,x-.62],.022,{seg:8}),h.pipe("steel",[m-.35,0,x-1.9],[m-.02,2.7,x-.77],.022,{seg:8});for(let _=1;_<8;_++){const w=_/8.2;h.pipe("steel",[m-.75+.33*w,2.7*w,x-1.75+1.13*w],[m-.35+.33*w,2.7*w,x-1.9+1.13*w],.014,{seg:6})}h.box("white",m-1.38,.3,x-.55,.03,.46,1.05),Tt(h,"decal",o.mayak,m-1.4,.3,x-.55,"-x",.9);const S=[[ee.x0+.12,.45,-19.4,"+x"],[ee.x1-.12,.45,-27.2,"-x"],[8.6,.45,ee.z0+.12,"+z"]],T=["rubber","orange","rubber","teal","rubber","red"];S.forEach(([_,w,b,P],D)=>{P==="+z"?h.box("yellow",_,w+.2,b,.6,.7,.2):h.box("yellow",_,w+.2,b,.2,.7,.6),h.pipe("steel",[_,w+.55,b],[_,ee.h-.4,b],.035,{seg:8});for(let U=0;U<3;U++){const C=Math.atan2(b-x,_-m)+(U-1)*.5,z=(U-1)*.16,H=m+Math.cos(C)*1,O=x+Math.sin(C)*1,J=_-H,k=b-O,G=Math.hypot(J,k),X=-k/G,ae=J/G,Ae=[[m+Math.cos(C)*.72,.62,x+Math.sin(C)*.72],[H+Math.cos(C)*.35,.34,O+Math.sin(C)*.35],[H+J*.12,.04,O+k*.12]];for(const Y of[.3,.5,.7,.88]){const re=(t()-.5)*1.3+z*3;Ae.push([H+J*Y+X*re,.035+t()*.01,O+k*Y+ae*re])}Ae.push([_+(P==="+x"?.3:P==="-x"?-.3:z),.05,b+(P==="+z"?.3:z)],[_+(P==="+z"?z:0),w,b+(P!=="+z"?z:0)]),h.cable(T[(D*3+U)%T.length],Ae,.028+t()*.018,{seg:7})}}),h.cable("rubber",[[m+.3,4.4,x],[m+.5,3.9,x+.2],[m+.2,3.7,x+.1],[m,3.62,x]],.018),h.cable("orange",[[m+.3,4.4,x],[m-.5,3.6,x-.3],[m-.6,2.7,x-.1],[m-.3,2.3,x+.5]],.016),h.box("steel",6.25,.95,ee.z1-.45,2.5,.06,.8);for(const _ of[5.1,7.4])for(const w of[ee.z1-.12,ee.z1-.78])h.box("steelDark",_,.46,w,.06,.92,.06);h.box("steelDark",6.25,.3,ee.z1-.45,2.3,.04,.7),h.box("red",5.5,1.08,ee.z1-.4,.5,.2,.26,{ry:.2}),h.box("steelDark",6.6,1.2,ee.z1-.3,.6,.44,.12,{rx:-.12}),Tt(h,"screens",l.term,6.6,1.2,ee.z1-.368,"-z",.52,.325),h.box("white",7.1,1,ee.z1-.5,.3,.04,.22,{ry:.4}),_t(h,"white",5.95,1.03,ee.z1-.62,.04,.035,.09,12);for(const _ of[-22.1,-20.5,-18.9])h.box("steelDark",ee.x1-.1,1.4,_,.06,2.8,.06),h.box("steelDark",ee.x1-.74,1.4,_,.06,2.8,.06);for(const _ of[.5,1.4,2.3]){h.box("steel",ee.x1-.42,_,-20.5,.7,.04,3.3);for(let w=0;w<4;w++)t()<.8&&h.box(["orange","white","teal","steelDark"][(w+_*10|0)%4],ee.x1-.42,_+.02+.2,-21.7+w*.8+t()*.1,.5+t()*.1,.4,.55+t()*.15,{ry:(t()-.5)*.2})}h.box("orange",3.7,.4,-29.9,.9,.8,.9,{ry:.1}),h.box("white",4.4,.3,-29.6,.6,.6,.7,{ry:-.3}),h.box("teal",3.75,1.05,-29.95,.6,.5,.6,{ry:.5});for(const[_,w,b]of[[14.2,-29.8,"teal"],[14.9,-29.7,"teal"],[14.55,-29.25,"orange"]])_t(h,b,_,.45,w,.29,.29,.9,20),Ut(h,"steelDark",_,.3,w,.295,.015,gt,0,20),Ut(h,"steelDark",_,.62,w,.295,.015,gt,0,20);const R=[[6.2,-27.4],[12.9,-20.4]];for(const[_,w]of R){for(let P=0;P<3;P++){const D=P*2.0944+.4;h.pipe("steelDark",[_,1.1,w],[_+Math.cos(D)*.42,0,w+Math.sin(D)*.42],.018,{seg:6})}h.pipe("steelDark",[_,1.05,w],[_,1.95,w],.02,{seg:8});const b=Math.atan2(m-_,x-w);h.box("yellow",_,2.02,w,.44,.3,.16,{ry:b,rx:-.15}),h.box("glowWarm",_+Math.sin(b)*.085,2.035,w+Math.cos(b)*.085,.36,.22,.02,{ry:b,rx:-.15}),e.add({kind:"spot",pos:[_+Math.sin(b)*.12,2.03,w+Math.cos(b)*.12],to:[m,2.4,x],color:16757866,power:26,dist:18,angle:.62,penumbra:.5,prio:3,reach:20}),h.cable("rubber",[[_,1.2,w],[_-.2,.3,w+.3],[_-.6,.03,w+.2],[_-1.4*Math.sign(_-m),.03,w+1*Math.sign(x-w)]],.015)}h.box("yellow",10.1,.13,-25.9,.44,.22,.2,{rx:-.5}),h.box("glowWarm",10.1,.17,-26,.36,.16,.02,{rx:-.5}),h.cable("rubber",[[10.1,.1,-25.8],[10.4,.03,-25.2],[10.2,.03,-24.9]],.015),e.add({kind:"spot",pos:[10.1,.2,-26.02],to:[10.1,2.6,-31],color:16757866,power:30,dist:14,angle:.72,penumbra:.6,prio:2.5,reach:20}),Tt(h,"decal",o.zvuchit,10.2,3,ee.z0+.004,"+z",5),Tt(h,"decal",o.derzhat,ee.x1-.004,2.7,-25.6,"-x",4.2),Tt(h,"decal",o.schema,11.6,2.5,ee.z1-.004,"-z",2.3),Tt(h,"decal",o.ne,5.2,1.75,ee.z0+.004,"+z",2.4),Tt(h,"decal",o.slyshit,8.6,1.7,ee.z1-.054,"-z",1.5),Tt(h,"decal",o.tally,13.6,1.9,ee.z0+.004,"+z",1.3),c.add(h.build(a.bay));const g=_=>{const w=_*.5%1;let b=.3;for(let P=0;P<3;P++){const D=w-P*.12;D>0&&D<.1&&(b+=Math.exp(-D*40)*1.6)}return b};e.add({kind:"point",pos:[m,4.5,x],color:16758880,power:12,dist:16,prio:4,reach:22,flicker:g}),d.beaconPulse=g,e.add({kind:"point",pos:[6.6,1.35,ee.z1-.8],color:5822664,power:2,dist:4,reach:18}),e.add({kind:"point",pos:[m-1.5,1.1,x+.25],color:16756800,power:1.6,dist:3.5,reach:18}),e.add({kind:"point",pos:[ee.x1-.5,.9,-27.2],color:10470655,power:14,dist:7,reach:18,prio:2,flicker:_=>{const w=_*1.7%1;return w<.07?1:w>.5&&w<.53?.6:.02}}),f.push([ee.x1,.8,ee.z0,3.6],[12.5,5,ee.z0,2.6],[11.8,0,-26.6,1.5],[4,ee.h,-29,2.6]),u.dust.push({box:[ee.x0,.2,ee.z0,ee.x1,ee.h,ee.z1],n:1800,color:14477567,power:.5}),u.steam.push({pos:[ee.x0+.5,5.1,ee.z0+.6],dir:[.4,-1,.5],len:2.4,n:50,size:.9,color:13161184,power:.3}),u.sparks.push({pos:[ee.x1-.25,.95,-27.2],dir:[-1,.6,.1],n:60,period:1/1.7})}{const h=[];for(let g=-2;g>K.z0;g-=4)for(const _ of[-1,1])if(!(_<0&&g>he.z0&&g<he.z1))for(let w=.22;w<2.7;w+=.42)for(const b of[-.09,.09])h.push([_*1.798,w,g+b,"x"]);for(const g of[1.3,2.8,4.3,5.8])for(const _ of[-1,1])for(let w=.25;w<2.4;w+=.43)h.push([_*1.358,w,g,"x"]);for(let g=he.z0-.1;g<=he.z1+.1;g+=.28)h.push([K.x0+.102,he.y1+.09,g,"x"],[K.x0+.182,he.y0-.07,g,"x"]);for(let g=he.y0+.1;g<he.y1;g+=.28)h.push([K.x0+.102,g,he.z0-.09,"x"],[K.x0+.102,g,he.z1+.09,"x"]);for(let g=0;g<12;g++)h.push([Ss.x+Math.cos(g*ys/6)*.8,1.502,Ss.z+Math.sin(g*ys/6)*.8,"y"]);for(let g=.25;g<2;g+=.35)for(const _ of[-1,1])h.push([_*(Bt.w/2+.07),g,le.z0+.072,"z"],[_*(Bt.w/2+.07),g,-.072,"z"]);for(let g=.2;g<Je.h;g+=.35)h.push([K.x1-.082,g,Je.z0-.08,"x"],[K.x1-.082,g,Je.z1+.08,"x"]);for(const g of[ee.x0+.12,7.07,11.73,ee.x1-.12])for(let _=.3;_<5.2;_+=.6)h.push([g,_,ee.z0+.242,"z"],[g,_,ee.z1-.242,"z"]);const m=new i0(new ln(.017,.019,.014,6),new Is({color:8225674,metalness:.9,roughness:.5}),h.length),x=new dt,y=new Ht,S=new Ht,T=new I(1,1,1),R={x:new Ht().setFromEuler(new Cn(0,0,gt)),y:new Ht,z:new Ht().setFromEuler(new Cn(gt,0,0))};h.forEach(([g,_,w,b],P)=>{Xi(w,y),S.copy(y).multiply(R[b]),m.setMatrixAt(P,x.compose(In(g,_,w),S,T))}),m.frustumCulled=!1,m.receiveShadow=!0,c.add(m)}const p=(h,m)=>m>.2?"airlock":h>2.2?"bay":"corridor",v={airlock:0,corridor:0,bay:0};function M(h){const m=p(h[0],h[2]),x=s[m].uFrost.value;if(v[m]>=x.length)throw new Error("очагов Узора в помещении "+m+" больше "+x.length);return x[v[m]].set(...h),{room:m,index:v[m]++,vec:x[v[m]-1]}}return f.forEach(M),{group:c,mats:r,matsOf:a,rooms:s,fx:u,seeds:f,addSeed:M,dynamic:d}}const kn={uTime:{value:0},uPx:{value:1080},uKeep:{value:1},uSunDir:{value:new I},uSunPos:{value:new I}},N1=()=>new qt({transparent:!0,depthWrite:!1,blending:Yi,side:ii,uniforms:{uColor:{value:new De},uPower:{value:1},uTime:kn.uTime},vertexShader:`
    varying vec3 vN; varying vec3 vV; varying float vH; varying vec3 vW;
    void main() {
      vH = uv.y;
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz);
      vW = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    uniform vec3 uColor; uniform float uPower; uniform float uTime;
    varying vec3 vN; varying vec3 vV; varying float vH; varying vec3 vW;
    float h3(vec3 p) { return fract(sin(dot(p, vec3(12.99, 78.23, 37.72))) * 43758.5453); }
    float n3(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
      return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
                 mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
    void main() {
      float edge = pow(clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), 2.2);
      float along = smoothstep(0.0, 0.08, vH) * pow(clamp(1.0 - vH, 0.0, 1.0), 1.3);
      float n = 0.65 + 0.7 * n3(vW * 1.7 + vec3(0.0, -uTime * 0.05, uTime * 0.03));
      gl_FragColor = vec4(uColor * uPower * edge * along * n, 1.0);
    }`});function F1(i,e){const t=new sn,n=ns(e*31+7),s=[],r=new I(0,1,0);for(const x of i.shafts){const y=In(...x.pos),T=In(...x.to).clone().sub(y),R=x.len||T.length();T.normalize();const g=new ln(x.r1,x.r0,1,28,6,!0);g.translate(0,.5,0);const _=g.attributes.uv;for(let P=0;P<_.count;P++)_.setY(P,1-_.getY(P));const w=N1();w.uniforms.uColor.value.set(x.color),w.uniforms.uPower.value=x.power;const b=new At(g,w);b.position.copy(y),b.quaternion.setFromUnitVectors(r,T),b.scale.set(1,R,1),t.add(b),s.push({def:x,mat:w})}const a=[],o=[],l=[],c=[],u=(x,y,S,T,R,g,_,w,b)=>{a.push(x.x,x.y,x.z),o.push(y.x,y.y,y.z),l.push(S,T,R,g),c.push(_.r*w,_.g*w,_.b*w,b)},f=new De,d=new I,p=new Ht;for(const x of i.dust){const[y,S,T,R,g,_]=x.box;f.set(x.color);for(let w=0;w<x.n;w++){const b=[y+n()*(R-y),S+n()*(g-S),T+n()*(_-T)],P=In(...b);Xi(b[2],p),d.set((n()-.5)*.05,(n()-.5)*.03,(n()-.5)*.05).applyQuaternion(p),u(P,d,n(),14+n()*16,.003+n()*n()*.009,0,f,x.power*(.3+n()*.7),x.sun?3:0)}}for(const x of i.steam){f.set(x.color);const y=In(...x.pos);Xi(x.pos[2],p);for(let S=0;S<x.n;S++)d.set(x.dir[0]+(n()-.5)*.5,x.dir[1]+(n()-.5)*.3,x.dir[2]+(n()-.5)*.5).multiplyScalar(x.len/3.2).applyQuaternion(p),u(y,d,S/x.n+n()*.02,3.2,x.size*.12,x.size*(.8+n()*.5),f,x.power,1)}for(const x of i.sparks){f.set(16767392);const y=In(...x.pos);Xi(x.pos[2],p);for(let S=0;S<x.n;S++)d.set(x.dir[0]+(n()-.5)*1.6,x.dir[1]+n()*1.4,x.dir[2]+(n()-.5)*1.6).multiplyScalar(1.4+n()*1.6).applyQuaternion(p),u(y,d,n()*.06,x.period,.016+n()*.016,0,f,14,2)}const v=new zt;v.setAttribute("position",new et(a,3)),v.setAttribute("aVel",new et(o,3)),v.setAttribute("aPar",new et(l,4)),v.setAttribute("aCol",new et(c,4));const M=new qt({transparent:!0,depthWrite:!1,blending:Yi,uniforms:{uTime:kn.uTime,uPx:kn.uPx,uKeep:kn.uKeep,uMap:{value:o1()},uSunPos:kn.uSunPos,uSunDir:kn.uSunDir,uDown:{value:new I(0,-1,0)}},vertexShader:`
      attribute vec3 aVel; attribute vec4 aPar; attribute vec4 aCol;
      uniform float uTime; uniform float uPx; uniform float uKeep; uniform vec3 uSunPos; uniform vec3 uSunDir;
      varying vec4 vCol;
      void main() {
        float kind = aCol.a;
        float life = fract(uTime / aPar.y + aPar.x);
        float age = life * aPar.y;
        vec3 p = position + aVel * age;
        float size = aPar.z, a = 1.0;
        if (kind < 0.5 || kind > 2.5) {          // пыль: медленный дрейф и покачивание
          p += 0.06 * vec3(sin(uTime * 0.21 + aPar.x * 40.0), sin(uTime * 0.17 + aPar.x * 71.0), cos(uTime * 0.19 + aPar.x * 23.0));
          a = sin(life * 3.14159);
          if (kind > 2.5) {                      // пыль у окна горит только в солнечном луче
            // луч режет проём окна: ведём прямую от частицы к Солнцу до плоскости стены и смотрим,
            // попала ли она в стекло (точка разворачивается из кольца в плоские координаты)
            float sx = (p.x - (${(he.x-.2).toFixed(2)})) / uSunDir.x;
            vec3 hp = p - uSunDir * sx;
            float fz = atan(hp.z, 42.0 - hp.y) * 42.0, fy = 42.0 - length(vec2(hp.z, 42.0 - hp.y));
            float inw = smoothstep(${he.z0.toFixed(1)}, ${(he.z0+.12).toFixed(2)}, fz) * (1.0 - smoothstep(${(he.z1-.12).toFixed(2)}, ${he.z1.toFixed(1)}, fz))
              * smoothstep(${he.y0.toFixed(1)}, ${(he.y0+.08).toFixed(2)}, fy) * (1.0 - smoothstep(${(he.y1-.08).toFixed(2)}, ${he.y1.toFixed(1)}, fy));
            float pane = abs(fract((fz - (${he.z0.toFixed(1)})) / ${((he.z1-he.z0)/3).toFixed(4)}) - 0.5);
            inw *= 1.0 - smoothstep(0.455, 0.47, pane) * step(0.2, abs(fz - ${he.z0.toFixed(1)})) ;
            a *= 0.05 + inw * step(0.0, sx);
          }
        } else if (kind < 1.5) {                 // пар: расширяется и тает
          p += 0.1 * age * vec3(sin(aPar.x * 50.0 + uTime), 0.0, cos(aPar.x * 33.0 + uTime * 0.7));
          size = mix(aPar.z, aPar.w, life);
          a = sin(life * 3.14159) * (1.0 - life);
        } else {                                 // искры: вспышка в начале периода, падение
          float burst = step(life, 0.45);
          float ag = life * aPar.y * 2.2;
          p = position + aVel * ag + vec3(0.0, -4.9, 0.0) * ag * ag * 0.5;
          a = burst * (1.0 - life / 0.45);
        }
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = max(1.0, size * uPx / max(0.05, -mv.z));
        // ступень качества: часть частиц не рисуется вовсе (уходит за экран)
        if (fract(aPar.x * 7.31 + aPar.y * 0.137) > uKeep) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
        a *= smoothstep(0.25, 1.2, -mv.z);
        vCol = vec4(aCol.rgb * a, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uMap; varying vec4 vCol;
      void main() { gl_FragColor = vec4(vCol.rgb * texture2D(uMap, gl_PointCoord).a, 1.0); }`}),h=new s0(v,M);h.frustumCulled=!1,t.add(h);const m=new sn;for(const x of t.children.slice())x.isMesh&&m.add(x);return t.add(m),{group:t,shafts:s,points:h,shaftGroup:m}}function z1(i){const e=ns(i*101+3),t=new sn,n=[],s=[];for(let h=0;h<2600;h++){const m=e()*2-1,x=e()*Math.PI*2,y=Math.sqrt(1-m*m);n.push(y*Math.cos(x)*1e3,m*1e3,y*Math.sin(x)*1e3);const S=Math.pow(e(),4)*2.2+.12,T=e();s.push(S*(.8+.2*T),S*.9,S*(1-.25*T),1+e()*1.8)}const r=new zt;r.setAttribute("position",new et(n,3)),r.setAttribute("aCol",new et(s,4));const a=new s0(r,new qt({depthWrite:!1,blending:Yi,transparent:!0,uniforms:{uPx:kn.uPx},vertexShader:`attribute vec4 aCol; varying vec3 vC; uniform float uPx;
      void main() { vC = aCol.rgb; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = aCol.a * uPx / 1080.0; }`,fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; gl_FragColor = vec4(vC * smoothstep(0.5, 0.1, length(d)), 1.0); }"}));a.frustumCulled=!1,t.add(a);const o=new I(-13-1.4,5.2-.15,4.2+1.6).normalize(),l=new At(new Ci(2.6,20,14),new es({color:new De(60,54,44),toneMapped:!1,fog:!1}));l.position.copy(o).multiplyScalar(900),t.add(l);const c=D0(new kl(1,48)),u=c.attributes.position,f=new I,d=(h,m,x)=>{const y=Math.sin(h*127.1+m*311.7+x*74.7)*43758.5453;return y-Math.floor(y)},p=(h,m,x)=>{const y=Math.floor(h),S=Math.floor(m),T=Math.floor(x),R=h-y,g=m-S,_=x-T,w=C=>C*C*(3-2*C),b=w(R),P=w(g),D=w(_),U=(C,z,H)=>C+(z-C)*H;return U(U(U(d(y,S,T),d(y+1,S,T),b),U(d(y,S+1,T),d(y+1,S+1,T),b),P),U(U(d(y,S,T+1),d(y+1,S,T+1),b),U(d(y,S+1,T+1),d(y+1,S+1,T+1),b),P),D)},v=Array.from({length:26},()=>{const h=e()*2-1,m=e()*6.283,x=Math.sqrt(1-h*h);return[x*Math.cos(m),h,x*Math.sin(m),.08+e()*e()*.3]});for(let h=0;h<u.count;h++){f.fromBufferAttribute(u,h).normalize();let m=1+(p(f.x*1.3+5,f.y*1.3,f.z*1.3)-.5)*.55+(p(f.x*3.1,f.y*3.1+2,f.z*3.1)-.5)*.22+(p(f.x*8,f.y*8,f.z*8+1)-.5)*.07+(p(f.x*21,f.y*21,f.z*21)-.5)*.025;for(const x of v){const y=Math.hypot(f.x-x[0],f.y-x[1],f.z-x[2])/x[3];y<1.3&&(m+=(y<1?-(1-y*y)*.35:(1.3-y)/.3*.06*(y-1)/.3*4)*x[3])}f.multiplyScalar(m),u.setXYZ(h,f.x*1.25,f.y*.85,f.z)}c.computeVertexNormals();const M=new At(c,new qt({uniforms:{uSun:{value:o}},vertexShader:"varying vec3 vN; varying vec3 vP; void main() { vN = normalize(mat3(modelMatrix) * normal); vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 uSun; uniform mat4 modelMatrix; varying vec3 vN; varying vec3 vP;
      float h(vec3 p) { return fract(sin(dot(p, vec3(12.99, 78.23, 37.72))) * 43758.5453); }
      float n(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h(i), h(i + vec3(1,0,0)), f.x), mix(h(i + vec3(0,1,0)), h(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h(i + vec3(0,0,1)), h(i + vec3(1,0,1)), f.x), mix(h(i + vec3(0,1,1)), h(i + vec3(1,1,1)), f.x), f.y), f.z); }
      void main() {
        float t = n(vP * 9.0) * 0.5 + n(vP * 31.0) * 0.3 + n(vP * 90.0) * 0.2;
        // мелкий рельеф, которого нет в сетке: нормаль качается по градиенту шума
        vec2 e = vec2(0.012, 0.0);
        vec3 gN = vec3(n(vP * 26.0 + e.xyy * 26.0) - n(vP * 26.0 - e.xyy * 26.0), n(vP * 26.0 + e.yxy * 26.0) - n(vP * 26.0 - e.yxy * 26.0), n(vP * 26.0 + e.yyx * 26.0) - n(vP * 26.0 - e.yyx * 26.0));
        vec3 gM = vec3(n(vP * 70.0 + e.xyy * 70.0) - n(vP * 70.0 - e.xyy * 70.0), n(vP * 70.0 + e.yxy * 70.0) - n(vP * 70.0 - e.yxy * 70.0), n(vP * 70.0 + e.yyx * 70.0) - n(vP * 70.0 - e.yyx * 70.0));
        vec3 nn = normalize(normalize(vN) - mat3(modelMatrix) * (gN * 0.9 + gM * 0.35) / length(modelMatrix[0].xyz));
        vec3 alb = mix(vec3(0.20, 0.17, 0.15), vec3(0.44, 0.40, 0.36), t);
        alb = mix(alb, vec3(0.5, 0.33, 0.2), smoothstep(0.62, 0.8, n(vP * 2.3)) * 0.5);   // рудные жилы
        float l = max(0.0, (dot(nn, uSun) + 0.12) / 1.12);
        gl_FragColor = vec4(alb * (pow(l, 0.8) * 2.4 + vec3(0.03, 0.04, 0.06)), 1.0);
      }`}));return M.scale.setScalar(100),M.position.set(-235,-52,-62),M.rotation.set(.4,1.1,.2),t.add(M),{sky:t,sunDir:o,asteroid:M}}function O1(i){const e=he.z1-he.z0,t=he.y1-he.y0,n=new ts(e,t,8,1),s=new qt({transparent:!0,depthWrite:!1,blending:Pu,blendSrc:Lu,blendDst:El,uniforms:{tRefl:{value:i.texture},uTexM:{value:new dt},uGain:{value:.42}},vertexShader:`
      uniform mat4 uTexM; varying vec4 vR; varying vec2 vUv; varying vec3 vV; varying vec3 vN;
      void main() {
        vUv = uv; vR = uTexM * modelMatrix * vec4(position, 1.0);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vV = normalize(-mv.xyz); vN = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D tRefl; uniform float uGain; varying vec4 vR; varying vec2 vUv; varying vec3 vV; varying vec3 vN;
      float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      void main() {
        vec3 refl = texture2DProj(tRefl, vR).rgb;
        float fres = 0.5 + 0.5 * pow(clamp(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), 3.0);
        // грязь и царапины: видны в отражённом свете
        float dirt = n(vUv * vec2(60.0, 18.0)) * n(vUv * vec2(9.0, 3.0));
        float scr = smoothstep(0.985, 1.0, n(vec2(vUv.x * 400.0 + vUv.y * 90.0, vUv.y * 6.0)));
        float haze = 0.006 + 0.016 * dirt + 0.05 * scr;
        vec3 c = refl * uGain * fres + vec3(0.55, 0.62, 0.7) * haze;
        // чем ярче отражение, тем меньше сквозь него видно космос: Харма в стекле плотная, а не призрак
        float a = clamp(haze * 1.6 + smoothstep(0.06, 0.7, dot(refl, vec3(0.4))) * 0.5, 0.0, 0.7);
        gl_FragColor = vec4(c, a);
      }`}),r=new At(n,s),a=(he.z0+he.z1)/2,o=In(he.x-.28,(he.y0+he.y1)/2,a);return r.position.copy(o),Xi(a,r.quaternion).multiply(new Ht().setFromAxisAngle(new I(0,1,0),Math.PI/2)),r.updateMatrixWorld(),{mesh:r,mat:s,center:o,normal:new I(1,0,0)}}function B1(i){const e=he.x-.18,t=1.96,n=.03,s=2.72,r=he.z0-3.7,a=he.z1+.1,o=new Hn(t-e,s-n,a-r,1,1,14);o.translate((e+t)/2,(n+s)/2,(r+a)/2);const l=o.attributes.position,c=new I;for(let M=0;M<l.count;M++)In(l.getX(M),l.getY(M),l.getZ(M),c),l.setXYZ(M,c.x,c.y,c.z);o.computeBoundingSphere();const u=new I(i.to[0]-i.pos[0],i.to[1]-i.pos[1],i.to[2]-i.pos[2]).normalize(),f=((he.z1-he.z0)/3).toFixed(4),d=M=>M.toFixed(3),p=new qt({transparent:!0,depthWrite:!1,depthTest:!1,blending:Yi,side:mn,uniforms:{uDir:{value:u},uColor:{value:new De(16773336)},uPower:{value:.11},uSteps:{value:24}},vertexShader:"varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform vec3 uDir; uniform vec3 uColor; uniform float uPower; uniform float uSteps; varying vec3 vW;
      float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
      void main() {
        vec3 rd = vW - cameraPosition; float tMax = length(rd); rd /= tMax;
        // по x объём не изогнут: вход и выход луча взгляда из слоя стен считаются точно
        float tA = 0.0, tB = tMax;
        if (abs(rd.x) > 1e-4) {
          float a = (${d(e)} - cameraPosition.x) / rd.x, b = (${d(t)} - cameraPosition.x) / rd.x;
          tA = max(tA, min(a, b)); tB = min(tB, max(a, b));
        }
        if (tB <= tA) discard;
        float jit = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        float acc = 0.0;
        for (int i = 0; i < 32; i++) {
          if (float(i) >= uSteps) break;
          float tt = tA + (tB - tA) * (float(i) + jit) / uSteps;
          vec3 p = cameraPosition + rd * tt;
          // из кольца в плоские координаты
          float ry = 42.0 - p.y;
          vec3 q = vec3(p.x, 42.0 - sqrt(p.z * p.z + ry * ry), atan(p.z, ry) * 42.0);
          float s = (q.x - (${d(he.x-.2)})) / uDir.x;
          vec3 hp = q - uDir * s;
          float inw = smoothstep(${d(he.z0)}, ${d(he.z0+.1)}, hp.z) * (1.0 - smoothstep(${d(he.z1-.1)}, ${d(he.z1)}, hp.z))
            * smoothstep(${d(he.y0)}, ${d(he.y0+.07)}, hp.y) * (1.0 - smoothstep(${d(he.y1-.07)}, ${d(he.y1)}, hp.y));
          float pane = abs(fract((hp.z - (${d(he.z0)})) / ${f}) - 0.5);
          inw *= 1.0 - smoothstep(0.47, 0.485, pane);
          inw *= step(0.0, q.y) * step(0.0, s);
          // пыль в луче неоднородна: полосы тянутся вдоль луча, потому что шум взят в плоскости окна
          // у самых глаз дымка слабее: стоя в луче, игрок не должен смотреть сквозь молоко
          acc += inw * (0.55 + 0.9 * n2(hp.zy * 5.0)) * (1.0 - 0.1 * s) * smoothstep(0.2, 2.6, tt);
        }
        // лицом к окну дымка луча гасится: иначе она затягивает вид на космос молочной пеленой
        float face = 1.0 - 0.9 * smoothstep(0.35, 0.9, -dot(rd, uDir));
        gl_FragColor = vec4(uColor * uPower * face * acc / uSteps * (tB - tA), 1.0);
      }`}),v=new At(o,p);return v.frustumCulled=!1,v}const k1=.21,st=512,Oi=st/256,gl=i=>i*i*(3-2*i),Ti=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),na=(i,e,t)=>gl(Ti((t-i)/(e-i)));function H1(i,e){const t=new Float32Array(e*e);for(let s=0;s<t.length;s++)t[s]=i();const n=new Float32Array(st*st);for(let s=0;s<st;s++)for(let r=0;r<st;r++){const a=r/st*e,o=s/st*e,l=Math.floor(a),c=Math.floor(o),u=gl(a-l),f=gl(o-c),d=t[c%e*e+l%e],p=t[c%e*e+(l+1)%e],v=t[(c+1)%e*e+l%e],M=t[(c+1)%e*e+(l+1)%e];n[s*st+r]=(d*(1-u)+p*u)*(1-f)+(v*(1-u)+M*u)*f}return n}function Js(i,e,t){const n=new Float32Array(st*st);let s=.5,r=0;for(let a=0;a<t;a++){const o=H1(i,e<<a);for(let l=0;l<n.length;l++)n[l]+=o[l]*s;r+=s,s*=.5}for(let a=0;a<n.length;a++)n[a]/=r;return n}function vo(i,e,t,n,s,r,a){const o=Math.cos(n),l=Math.sin(n),c=Math.ceil(s*2),u=Math.ceil(r+1);for(let f=0;f<=c;f++){const d=e+o*f*.5,p=t+l*f*.5,v=Math.sin(Math.PI*f/c)**.5;for(let M=-u;M<=u;M++)for(let h=-u;h<=u;h++){const m=Math.round(d)+h,x=Math.round(p)+M,y=Math.hypot(m-d,x-p);if(y>r+.7)continue;const S=(x%st+st)%st*st+(m%st+st)%st,T=a*v*Ti(1-(y-r*.5)/(r*.5+.7));T>i[S]&&(i[S]=T)}}}function _o(i,e){const t=new zs(i,st,st,Tn);return t.colorSpace=e?jt:$n,t.wrapS=t.wrapT=Ts,t.magFilter=pn,t.minFilter=ri,t.generateMipmaps=!0,t.anisotropy=4,t.needsUpdate=!0,t}function Su(i,e,t,n){const s=new zs(new Uint8Array([i,e,t,255]),1,1,Tn);return s.colorSpace=n?jt:$n,s.wrapS=s.wrapT=Ts,s.needsUpdate=!0,s}let ia=null;function G1(){if(ia)return ia;const i=ns(377018),e=Js(i,3,5),t=Js(i,5,4),n=Js(i,28,2),s=Js(i,8,4),r=Js(i,2,3),a=new Float32Array(st*st);for(let M=0;M<a.length;M++)a[M]=i();const o=new Float32Array(st*st),l=new Float32Array(st*st),c=new Float32Array(st*st);for(let M=0;M<26;M++){const h=i()*Math.PI,m=i()*st,x=i()*st,y=2+Math.floor(i()*5);for(let S=0;S<y;S++)vo(o,m+(i()-.5)*26*Oi,x+(i()-.5)*26*Oi,h+(i()-.5)*.25,(10+i()*46)*Oi,.55,.35+i()*.65)}for(let M=0;M<9;M++)vo(l,i()*st,i()*st,i()*Math.PI,(16+i()*40)*Oi,(.8+i()*.6)*Oi,.7+i()*.3);for(let M=0;M<12;M++)vo(c,i()*st,i()*st,.5+(i()-.5)*.7,(40+i()*80)*Oi,(3+i()*4)*Oi,.3+i()*.5);const u=new Uint8Array(st*st*4),f=new Uint8Array(st*st*4),d=new Uint8Array(st*st*4),p=(M,h,m,x,y)=>{M[h]=Ti(m)*255,M[h+1]=Ti(x)*255,M[h+2]=Ti(y)*255,M[h+3]=255},v=M=>M<=.0031308?M*12.92:1.055*M**(1/2.4)-.055;for(let M=0;M<st*st;M++){const h=M*4,m=na(.42,.72,e[M]),x=na(.5,.68,t[M])*.6,y=s[M]+(n[M]-.5)*.1,S=na(.652,.672,y),T=na(.612,.655,y)*(1-S),R=o[M],g=l[M],_=c[M]*(.5+.5*r[M]),w=(n[M]-.5)*.6+(a[M]-.5)*.45;let b=.93+w*.07;b*=1-.2*m-.07*x-.11*_,b*=1-.3*R-.45*g,b=b*(1-.16*T);const P=.11*m+.05*_+.04*T;p(u,h,v(b),v(b*(1-P*.45)),v(b*(1-P))),u[h+3]=255*(1-.55*S);const D=(.94+w*.12)*(1-.34*m-.16*_)*(1-.25*T)*(1-.4*g),U=Ti(S*(.75+.5*n[M])+R*.8+g*.25);p(f,h,v(D),v(D*(1-.3*P)),v(D*(1-.7*P))),f[h+3]=255*(1-.9*U);const C=.55+w*.22-.3*R-.5*g-.22*S+.06*T+.08*m,z=Ti(.8+w*.2+.2*m+.1*_-.42*S-.25*R+.12*T+.15*g,.25,1),H=Ti(.74+.26*U-.3*m);p(d,h,C,z,H)}return ia={paint:_o(u,!0),metal:_o(f,!0),hrm:_o(d,!1),cleanMap:Su(255,255,255,!0),cleanHrm:Su(128,255,255,!1)},ia}function V1(i){const e=G1();return i==="clean"?{map:e.cleanMap,roughnessMap:e.cleanHrm,metalnessMap:e.cleanHrm,bumpMap:e.cleanHrm,bumpScale:0}:{map:i==="metal"?e.metal:e.paint,roughnessMap:e.hrm,metalnessMap:e.hrm,bumpMap:e.hrm,bumpScale:i==="metal"?1.6:1.1}}function W1(i){i.uniforms.uBare={value:this.userData.bare},i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uBare;`).replace("#include <color_fragment>",`#include <color_fragment>
#ifdef USE_MAP
	diffuseColor.rgb = mix( uBare, diffuseColor.rgb, sampledDiffuseColor.a );
#endif`)}function Mo(i,e,t){return i.setValues(V1(e)),i.userData.bare=new De(t),i.onBeforeCompile=W1,i}function X1(i,e=k1,t=0,n=0){const s=i.attributes.position,r=i.attributes.uv,a=new I,o=new I,l=new I,c=new I,u=1/e;for(let f=0;f<s.count;f+=3){a.fromBufferAttribute(s,f),o.fromBufferAttribute(s,f+1),l.fromBufferAttribute(s,f+2),c.subVectors(l,o).cross(o.clone().sub(a).negate());const d=Math.abs(c.x),p=Math.abs(c.y),v=Math.abs(c.z);for(let M=0;M<3;M++){const h=M===0?a:M===1?o:l;d>=p&&d>=v?r.setXY(f+M,h.z*u+t+.37,h.y*u+n):p>=v?r.setXY(f+M,h.x*u+t,h.z*u+n+.61):r.setXY(f+M,h.x*u+t+.13,h.y*u+n+.29)}}}function q1(i){const e=i.attributes.position,t=i.attributes.normal,n=e.count,s=new Float32Array(n),r=new Map,a=new Int32Array(n);let o=0;for(let f=0;f<n;f++){const d=((Math.round(e.getX(f)*2e4)+65536)*131072+Math.round(e.getY(f)*2e4)+65536)*131072+Math.round(e.getZ(f)*2e4)+65536;let p=r.get(d);p===void 0&&(p=o++,r.set(d,p)),a[f]=p}const l=new Float32Array(o),c=new Float32Array(o),u=new Float32Array(o*3);for(let f=0;f<n;f++){const d=a[f]*3;u[d]+=t.getX(f),u[d+1]+=t.getY(f),u[d+2]+=t.getZ(f)}for(let f=0;f<n;f+=3){const d=(e.getX(f)+e.getX(f+1)+e.getX(f+2))/3,p=(e.getY(f)+e.getY(f+1)+e.getY(f+2))/3,v=(e.getZ(f)+e.getZ(f+1)+e.getZ(f+2))/3;for(let M=0;M<3;M++){const h=f+M,m=a[h]*3,x=d-e.getX(h),y=p-e.getY(h),S=v-e.getZ(h),T=Math.hypot(x,y,S)||1,R=Math.hypot(u[m],u[m+1],u[m+2])||1;l[a[h]]-=(u[m]*x+u[m+1]*y+u[m+2]*S)/(T*R),c[a[h]]++}}for(let f=0;f<n;f++)s[f]=l[a[f]]/(c[a[f]]||1);return s}const Ge=I,Qn=dt,Nt=i=>new De(i),Dt=(i,e,t)=>Nt(i).lerp(Nt(e),t),en=(i,e,t)=>Math.min(t,Math.max(e,i)),gi=(i,e,t)=>{const n=en((t-i)/(e-i),0,1);return n*n*(3-2*n)},$={suit:Dt(16777215,We.turquoise,.07).multiplyScalar(.84),suitDim:Dt(16777215,We.cardBg,.38),rubber:Nt(We.cardBg).multiplyScalar(.5),teal:Nt(We.turquoise),tealDeep:Dt(We.turquoise,We.lotusTeal,.55),gold:Nt(We.gold),goldLight:Nt(We.goldLight),bronze:Dt(We.gold,We.cardBg,.62).lerp(Dt(We.cardBg,16777215,.3),.3),steel:Dt(We.cardBg,16777215,.3),glowTeal:Dt(We.turquoise,We.lotusTeal,.38),skin:Nt(We.skin),skinWarm:Dt(We.skin,We.neonViolet,.1),nose:Dt(We.skin,We.neonViolet,.42),lilac:Dt(We.skin,We.neonViolet2,.36),liner:Dt(We.deepViolet,We.cardBg,.4),tooth:Dt(We.skin,16777215,.8),crimson:Nt(We.neonViolet).offsetHSL(.115,.05,-.2),white:Nt(16777215),black:Nt(0),bare:Dt(We.cardBg,16777215,.58).lerp(Nt(We.gold),.4),primer:Dt(We.cardBg,16777215,.36),scuff:Dt(We.cardBg,16777215,.5).lerp(Nt(We.gold),.12),dirt:new De(.42,.36,.3)},on={teal:0,eyeGreen:1,eyeBlue:2,gem:3,crimson:4,white:6,black:7,coil:8,heat:9,hot:10},Y1=16,xl=2.2;function oe(i=0,e=0,t=0,n=0,s=0,r=0,a=1,o,l){return o=o??a,l=l??a,new Qn().compose(new Ge(i,e,t),new Ht().setFromEuler(new Cn(n,s,r)),new Ge(a,o,l))}function wn(i,e,t){const n=new Qn().lookAt(new Ge(0,0,0),e,t);return n.setPosition(i),n}function ni(i,e,t=new Ge(0,1,0)){return wn(i,e.clone().negate(),t)}function I0(i){i.deleteAttribute("uv"),i.deleteAttribute("normal");const e=D0(i,1e-5);return e.computeVertexNormals(),e}function Mt(i,e,t,n,s=20,r=14){const a=new Ci(1,s,r),o=a.attributes.position,l=new Ge;for(let c=0;c<o.count;c++)l.fromBufferAttribute(o,c),n&&n(l),o.setXYZ(c,l.x*i,l.y*e,l.z*t);return I0(a)}function An(i,e=24,t=!0,n=!0){const s=[],r=[],a=i.length;for(const[l,c,u=c,f=0,d=0,p=2]of i){const v=2/p;for(let M=0;M<e;M++){const h=M/e*Math.PI*2,m=Math.cos(h),x=Math.sin(h);s.push(f+c*Math.sign(m)*Math.abs(m)**v,l,d+u*Math.sign(x)*Math.abs(x)**v)}}for(let l=0;l<a-1;l++)for(let c=0;c<e;c++){const u=l*e+c,f=(l+1)*e+c,d=l*e+(c+1)%e,p=(l+1)*e+(c+1)%e;r.push(u,f,d,f,p,d)}if(t){const l=i[0],c=s.length/3;s.push(l[3]||0,l[0],l[4]||0);for(let u=0;u<e;u++)r.push(c,u,(u+1)%e)}if(n){const l=i[a-1],c=s.length/3,u=(a-1)*e;s.push(l[3]||0,l[0],l[4]||0);for(let f=0;f<e;f++)r.push(c,u+(f+1)%e,u+f)}const o=new zt;return o.setAttribute("position",new et(s,3)),o.setIndex(r),o.computeVertexNormals(),o}const Xt=(i,e=24,t=!1,n=!1)=>An(i.map(([s,r])=>[s,r,r]),e,t,n);function tn(i,e,t,n,s=1,r=!1,a=.5){const o=new Aa(i.map(v=>v.isVector3?v:new Ge(v[0],v[1],v[2])),r,"centripetal"),l=o.computeFrenetFrames(e,r),c=[],u=[],f=[],d=new Ge;for(let v=0;v<=e;v++){const M=v/e,h=l.normals[v],m=l.binormals[v],x=Math.max(1e-5,n(M));o.getPointAt(M,d);for(let y=0;y<t;y++){const S=y/t*Math.PI*2,T=Math.cos(S)*x,R=Math.sin(S)*x*s;c.push(d.x+h.x*T+m.x*R,d.y+h.y*T+m.y*R,d.z+h.z*T+m.z*R),u.push(M,a)}}for(let v=0;v<e;v++)for(let M=0;M<t;M++){const h=v*t+M,m=(v+1)*t+M,x=v*t+(M+1)%t,y=(v+1)*t+(M+1)%t;f.push(h,x,m,m,x,y)}const p=new zt;return p.setAttribute("position",new et(c,3)),p.setAttribute("uv",new et(u,2)),p.setIndex(f),p.computeVertexNormals(),p}const yu=(i,e=.8)=>t=>i*(t<e?1:Math.sqrt(Math.max(.01,1-((t-e)/(1-e))**2)));function Qt(i,e,t,n,s){n=n??Math.min(i,e)*.22,s=s??Math.min(i,e,t)*.18;const r=i/2-s,a=e/2-s,o=Math.min(n,r*.99,a*.99),l=new Ps;l.moveTo(-r+o,-a),l.lineTo(r-o,-a),l.quadraticCurveTo(r,-a,r,-a+o),l.lineTo(r,a-o),l.quadraticCurveTo(r,a,r-o,a),l.lineTo(-r+o,a),l.quadraticCurveTo(-r,a,-r,a-o),l.lineTo(-r,-a+o),l.quadraticCurveTo(-r,-a,-r+o,-a);const c=Math.max(1e-4,t-2*s),u=new Mr(l,{depth:c,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:4,steps:1});return u.translate(0,0,-c/2),u}function vl(i,e,t,n=8){const s=new Mr(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:n,steps:1});return s.translate(0,0,-e/2),s}function Rn(i,e,t=8,n=32,s=Math.PI*2){return new Ra(i,e,t,n,s)}function _l(i,e,t){const n=i.index?i.toNonIndexed():i.clone();n.attributes.normal||n.computeVertexNormals();const s=n.attributes.position,r=s.count,a=new Float32Array(r*2),o=new Float32Array(r*3);if(t!=null)for(let u=0;u<r;u++)a[2*u]=(t+.5)/Y1,a[2*u+1]=.5;else n.attributes.uv&&a.set(n.attributes.uv.array.subarray(0,r*2));const l=new De,c=new Ge;for(let u=0;u<r;u++)typeof e=="function"?(c.fromBufferAttribute(s,u),l.copy(e(c))):l.copy(e||$.white),o[3*u]=l.r,o[3*u+1]=l.g,o[3*u+2]=l.b;for(const u of Object.keys(n.attributes))u!=="position"&&u!=="normal"&&n.deleteAttribute(u);return n.setAttribute("uv",new xn(a,2)),n.setAttribute("color",new xn(o,3)),n.clearGroups(),n}function U0(i){for(const e of Object.values(i.attributes)){const t=e.itemSize,n=e.array;for(let s=0;s<e.count;s+=3)for(let r=0;r<t;r++){const a=n[(s+1)*t+r];n[(s+1)*t+r]=n[(s+2)*t+r],n[(s+2)*t+r]=a}}}const $1=new De;function Z1(i,e){const t=q1(i),n=i.attributes.color,s=$1;for(let r=0;r<n.count;r++){const a=t[r];if(a>.2)s.fromBufferAttribute(n,r).lerp(e?$.bare:$.scuff,(e?.72:.42)*gi(.2,.62,a));else if(a<-.07){const o=gi(.07,.42,-a)*.8;s.fromBufferAttribute(n,r),s.r*=1-o*(1-$.dirt.r),s.g*=1-o*(1-$.dirt.g),s.b*=1-o*(1-$.dirt.b)}else continue;n.setXYZ(r,s.r,s.g,s.b)}}class La{constructor(){this.b={},this.stack=[new Qn],this.n={},this.tag=null,this.tags={}}get M(){return this.stack[this.stack.length-1]}push(e){this.stack.push(this.M.clone().multiply(e))}pop(){this.stack.pop()}add(e,t,n,s,r){const a=_l(t,n,r),o=s?this.M.clone().multiply(s):this.M;a.applyMatrix4(o),o.determinant()<0&&U0(a),(e==="suit"||e==="metal")&&(Z1(a,e==="metal"),X1(a));const l=a.attributes.position.count,c=this.n[e]||0;this.tag&&(this.tags[this.tag]||=[]).push([e,c,l]),this.n[e]=c+l,(this.b[e]||=[]).push(a)}glow(e,t,n){this.add("glow",e,$.white,n,t)}build(e,t,n){const s={};for(const[r,a]of Object.entries(this.b)){const o=new At(yr(a,!1),t[r]);o.name=`${n}:${r}`,o.frustumCulled=!1,e.add(o),s[r]=o}return s}}function bu(i,e){const t=i.length,n=new Uint8Array(t*4),s=new De;i.forEach((a,o)=>{s.copy(a).multiplyScalar(e?e[o]:1).convertLinearToSRGB(),n[4*o]=en(s.r,0,1)*255,n[4*o+1]=en(s.g,0,1)*255,n[4*o+2]=en(s.b,0,1)*255,n[4*o+3]=255});const r=new zs(n,t,1,Tn);return r.colorSpace=jt,r.magFilter=r.minFilter=nn,r.generateMipmaps=!1,r.needsUpdate=!0,r}const cr=16;function N0(i,e){const t=Dt(We.flame,We.goldLight,.5).lerp(Nt(16777215),.3),n=Nt(We.flame),s=Nt(We.flame).multiply(new De(1,.5,.22)),r=Dt(We.neonViolet2,16777215,.6),a=Nt(We.neonViolet),o=Dt(We.neonViolet2,We.deepViolet,.35),l=new De,c=new De;for(let u=0;u<2;u++)for(let f=0;f<cr;f++){const d=f/(cr-1),p=en(d*(u?1.25:1),0,1);p<.45?(l.copy(t).lerp(n,p/.45),c.copy(r).lerp(a,p/.45)):(l.copy(n).lerp(s,(p-.45)/.55),c.copy(a).lerp(o,(p-.45)/.55)),l.lerp(c,e*.8).convertLinearToSRGB();const v=(u*cr+f)*4;i[v]=en(l.r,0,1)*255,i[v+1]=en(l.g,0,1)*255,i[v+2]=en(l.b,0,1)*255,i[v+3]=255}}function K1(){const i=Is,e=Nt(1054748),t=[$.glowTeal,Nt(We.eyeGreen),Nt(We.eyeBlue),Nt(We.gem),$.crimson,$.goldLight,$.white,$.black,$.glowTeal,e,$.steel.clone().multiplyScalar(.6),$.black,$.black,$.black,$.black,$.black],n=bu(t),s=bu(t,[1,.75,.75,1,.45,.5,.9,0,.8,.5,0,0,0,0,0,0].map(o=>o*1.1/xl)),r=new Uint8Array(cr*2*4);N0(r,0);const a=new zs(r,cr,2,Tn);return a.colorSpace=jt,a.magFilter=a.minFilter=pn,a.wrapS=a.wrapT=si,a.generateMipmaps=!1,a.needsUpdate=!0,{suit:Mo(new i({name:"harma-suit",vertexColors:!0,roughness:1,metalness:0}),"paint",$.primer),metal:Mo(new i({name:"harma-metal",vertexColors:!0,roughness:.86,metalness:.9}),"metal",$.bare),skin:Mo(new i({name:"harma-skin",vertexColors:!0,roughness:.58,metalness:0,emissive:$.skin.clone(),emissiveIntensity:.15}),"clean",$.skin),glow:new i({name:"harma-glow",map:n,emissiveMap:s,emissive:16777215,emissiveIntensity:xl,roughness:.3,metalness:0}),flame:new i({name:"harma-flame",color:0,map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:1.05,roughness:1,metalness:0}),feather:new i({name:"harma-feather",color:$.goldLight.clone(),emissive:$.goldLight.clone(),emissiveIntensity:.32,roughness:.32,metalness:.45}),lens:new i({name:"harma-lens",color:1054748,emissive:$.teal.clone(),emissiveIntensity:1.6,roughness:.12,metalness:0}),glass:new i({name:"harma-glass",color:Dt(16777215,We.turquoise,.35),transparent:!0,opacity:.16,roughness:.06,metalness:0,depthWrite:!1})}}function F0(i,e,t,n=1){i.add("suit",Mt(.037,.033,.036,null,14,10),$.suit,oe(0,0,.002)),i.add("suit",Mt(.041,.026,.048,c=>{c.y<0&&(c.y*=.82),c.z*=1-.13*c.x*c.x}),$.suit,oe(0,0,-.047)),i.add("suit",Mt(.027,.008,.03,c=>{c.z*=1-.25*c.x*c.x}),$.teal,oe(0,.0215,-.047)),i.add("metal",Mt(.0075,.0045,.0075,null,12,8),$.gold,oe(0,.0285,-.047)),i.add("suit",Rn(.0285,.0016,6,28),$.suitDim,oe(0,.0225,-.047,Math.PI/2,0,0,1,1.06,1)),i.add("suit",Mt(.024,.007,.021,c=>{c.z*=1-.35*c.x*c.x},14,10),$.nose,oe(0,-.0205,-.05));const s=[-.0288,-.0098,.0098,.0288],r=[.9,1.05,1.05,.9];s.forEach((c,u)=>{const f=r[u],d=[.12+t*.6,.2+t*1.4,.26+t*2.15],p=[.024*f,.021*f,.017*f];let v=c,M=-.002,h=-.079+Math.abs(c)*.25;const m=[[c*.9,0,h+.03],[v,M,h]];for(let y=0;y<3;y++)M-=Math.sin(d[y])*p[y],h-=Math.cos(d[y])*p[y],v+=c*.1*n,m.push([v,M,h]);i.add("suit",tn(m,14,10,y=>yu(.0138,.82)(y)*(1-.1*y)),$.suit);const x=d[2];i.add("suit",Mt(.0092,.0058,.0108,null,12,8),$.nose,oe(v,M+Math.sin(x)*p[2]*.42-Math.cos(x)*.0088,h+Math.cos(x)*p[2]*.42+Math.sin(x)*.0088,-x,0,0)),i.add("suit",Rn(.0132,.0022,6,14),$.teal,oe(c,-.003-Math.sin(d[0])*.005,-.083+Math.abs(c)*.25,-d[0]*.5,0,0))});const a=-e,o=t,l=[[a*.018,-.004,-.028],[a*.038,-.006,-.04],[a*(.05-o*.004),-.012-o*.008,-.056],[a*(.052-o*.016),-.02-o*.016,-.07]];i.add("suit",tn(l,12,10,yu(.0128,.8)),$.suit),i.add("suit",Mt(.0085,.0055,.0095,null,12,8),$.nose,oe(l[3][0]-a*.004*(1+o),l[3][1]-.0068,l[3][2]+.005,.5,0,a*.5*o))}function z0(i,e=.34){i.push(oe(0,0,0,Math.PI/2,0,0)),i.add("metal",Xt([[.002,.036],[.004,.0435],[.0075,.0462],[.012,.0462],[.0155,.0425],[.031,.0425],[.0345,.0462],[.039,.0462],[.0425,.0435],[.0445,.039]],32,!0,!1),$.gold);for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.add("metal",Mt(.0042,.0042,.0026,null,8,6),n%3===0?$.goldLight:$.bronze,oe(Math.cos(s)*.0428,.0232,Math.sin(s)*.0428,0,-s+Math.PI/2,0))}i.add("suit",Xt([[.0435,.04],[.0455,.0445],[.052,.0445],[.054,.04]],32),$.teal);const t=[[.053,.039]];for(let n=0;n<4;n++){const s=.058+n*.013;t.push([s,.0405],[s+.0045,.0452],[s+.009,.0452],[s+.0125,.041])}t.push([.118,.044],[.17,.051],[.25,.054],[e-.02,.052],[e,.044]),i.add("suit",Xt(t,32,!1,!0),$.suit),i.add("suit",Xt([[.213,.0525],[.215,.0562],[.228,.0568],[.23,.053]],32),$.teal),i.add("metal",Xt([[.2305,.053],[.232,.0575],[.237,.0578],[.2385,.0535]],32),$.gold),i.pop(),i.add("suit",Mt(.016,.005,.036,n=>{n.x*=1-.3*n.z*n.z},14,10),$.teal,oe(0,.0475,.158,.085,0,0)),i.add("suit",Rn(.0175,.0014,6,24),$.suitDim,oe(0,.0478,.158,Math.PI/2+.085,0,0,1,2.1,1))}const O0=.196,Bn=new Ge(0,-.188,.04),ga=new Ge(-.047,.04,-.018),ki=new Ge(-.86,-.14,-.49).normalize(),J1=new Qn().makeBasis(new Ge(0,1,0),new Ge(0,0,1),new Ge(1,0,0)),B0=i=>oe(0,0,0,0,i*Math.PI*2/3,0).multiply(oe(0,.168,.05)).multiply(J1);function k0(i){i.add("metal",An([[-.122,.024,.03,0,0,3.2],[-.112,.041,.047,0,0,3.6],[-.1,.047,.053,0,0,4],[-.03,.05,.056,0,0,4.2],[.03,.05,.054,0,0,4.2],[.058,.044,.047,0,0,3.6],[.074,.038,.04,0,0,3],[.086,.034,.035,0,0,2.4]],36),$.bronze);for(const l of[-.088,.036]){const f=l<0?.0555:.0552;i.add("metal",An([[l-.007,.0512-.003,f-.003,0,0,4.1],[l-.005,.0512+.0012,f+.0012,0,0,4.1],[l+.005,.0512+.0012,f+.0012,0,0,4.1],[l+.007,.0512-.003,f-.003,0,0,4.1]],36,!1,!1),$.steel)}i.add("suit",Qt(.07,.098,.012,.014,.003),$.suit,oe(0,-.026,.0575));for(const l of[-1,1]){i.add("suit",Qt(.062,.092,.011,.014,.003),$.suit,oe(l*.0505,-.026,-.002,0,Math.PI/2,0)),i.add("suit",Qt(.02,.06,.004,.006,.0012),$.teal,oe(l*.0562,-.026,-.012,0,Math.PI/2,0));for(const[c,u]of[[-.064,.021],[.012,.021],[-.064,-.025],[.012,-.025]])i.add("metal",new ln(.0034,.0034,.004,10),$.steel,oe(l*.0565,c,u,0,0,Math.PI/2))}for(const[l,c]of[[-.027,-.066],[.027,-.066],[-.027,.014],[.027,.014]])i.add("metal",new ln(.0034,.0034,.004,10),$.steel,oe(l,c,.0638,Math.PI/2,0,0));for(let l=0;l<3;l++)i.glow(Mt(.0042,.0042,.0022,null,10,6),on.teal,oe(.018,-.052+l*.013,.0642));i.add("suit",Qt(.026,.05,.005,.005,.0012),$.rubber,oe(-.012,-.034,.0638));for(let l=0;l<3;l++)i.glow(Qt(.016,.0095,.003,.003,8e-4),on.heat,oe(-.012,-.048+l*.014,.0662));i.add("metal",new Wi(1),$.gold,oe(.018,.004,.0635,0,0,0,.0075,.011,.002)),i.add("metal",Xt([[-.14,.014],[-.139,.02],[-.128,.022],[-.126,.03],[-.12,.031]],24,!0,!1),$.steel),i.add("metal",Rn(.0262,.0024,8,28),$.gold,oe(0,-.1235,0,Math.PI/2,0,0)),i.add("metal",Qt(.006,.03,.006,.002,.0012),$.gold,oe(0,-.141,0,Math.PI/2,0,.6)),i.add("metal",Xt([[.082,.03],[.09,.0262],[.158,.0262],[.164,.034]],24),$.steel);const e=[];for(let l=0;l<=66;l++){const c=l/66,u=c*Math.PI*2*5.5;e.push([Math.cos(u)*.0318,.094+c*.062,Math.sin(u)*.0318])}i.glow(tn(e,200,7,()=>.0043),on.coil);for(let l=0;l<3;l++)i.push(oe(0,0,0,0,l*Math.PI*2/3+Math.PI/3,0)),i.add("metal",Qt(.007,.082,.005,.002,.0012),$.steel,oe(0,.124,.0395)),i.pop();i.add("metal",Xt([[.16,.036],[.164,.0455],[.169,.0478],[.186,.0478],[.194,.0445],[.199,.039],[.199,.0312],[.19,.027]],36),$.steel),i.add("metal",Rn(.0484,.0026,8,36),$.gold,oe(0,.1775,0,Math.PI/2,0,0)),i.add("lens",Mt(.0285,.011,.0285,null,20,10),$.white,oe(0,O0-.006,0)),i.glow(Rn(.0285,.0016,6,32),on.teal,oe(0,.1925,0,Math.PI/2,0,0)),i.glow(Xt([[.1935,.0453],[.1994,.0398],[.2004,.0352],[.2012,.0306]],36),on.hot);const t=new Ps;t.moveTo(-.006,.01),t.bezierCurveTo(.02,.034,.058,.036,.082,.014),t.quadraticCurveTo(.098,0,.108,-.022),t.quadraticCurveTo(.09,-.01,.072,-.004),t.bezierCurveTo(.052,.006,.03,.004,.014,-.008),t.lineTo(-.006,-.01),t.closePath();const n=vl(t,.014,.0045,10),s=new Ps;s.moveTo(.012,.012),s.bezierCurveTo(.03,.026,.05,.027,.07,.014),s.lineTo(.064,.008),s.bezierCurveTo(.05,.016,.03,.015,.016,.005),s.closePath();const r=vl(s,.0235,.001,8);for(let l=0;l<3;l++)i.push(B0(l)),i.tag="claw"+l,i.add("metal",n,$.steel),i.add("suit",r,$.suit),i.add("metal",new ln(.0105,.0105,.031,14),$.bronze,oe(0,0,0,Math.PI/2,0,0)),i.add("metal",new ln(.0045,.0045,.034,10),$.gold,oe(0,0,0,Math.PI/2,0,0)),i.glow(Mt(.007,.0035,.0055,null,10,6),on.teal,oe(.088,-.0095,0,0,0,-.75)),i.tag=null,i.pop();const a=[[-.056,.012],[-.052,.0165]];for(let l=0;l<9;l++){const c=-.047+l*.0105;a.push([c,.0148],[c+.003,.0162],[c+.0072,.0162])}a.push([.052,.0165],[.056,.012]),i.add("suit",Xt(a,18,!0,!0),$.rubber,oe(Bn.x,Bn.y,Bn.z,0,0,Math.PI/2));for(const l of[-1,1])i.add("metal",tn([[l*.04,-.112,.022],[l*.058,-.14,.03],[l*.063,Bn.y+.004,Bn.z-.002],[l*.061,Bn.y-.004,Bn.z+.002]],18,8,()=>.0078),$.steel),i.add("metal",Mt(.0125,.0125,.0125,null,12,8),$.gold,oe(l*.061,Bn.y,Bn.z));i.push(new Qn().makeRotationFromQuaternion(new Ht().setFromUnitVectors(new Ge(0,1,0),ki)).setPosition(ga)),i.add("metal",Xt([[-.006,.02],[0,.0225],[.01,.0225],[.016,.0165]],18,!0,!1),$.steel);const o=[[.014,.0145]];for(let l=0;l<9;l++){const c=.02+l*.0105;o.push([c,.0148],[c+.003,.0162],[c+.0072,.0162])}o.push([.116,.0158]),i.add("suit",Xt(o,18,!1,!1),$.rubber),i.add("metal",Xt([[.114,.0165],[.118,.0195],[.124,.0195],[.129,.012]],18,!1,!0),$.gold),i.pop(),i.add("suit",Mt(.03,.05,.006,null,14,8),$.teal,oe(0,-.02,-.057)),i.add("metal",new Os(.0125,.058,6,14),$.steel,oe(.0625,-.03,.03)),i.add("metal",Xt([[-.012,.0138],[-.008,.0138]],14),$.gold,oe(.0625,-.03,.03)),i.add("metal",Qt(.008,.026,.006,.002,.0012),$.gold,oe(-.058,.03,.02,.5,Math.PI/2,0)),i.add("metal",new ln(.0065,.0065,.006,12),$.bronze,oe(-.057,.036,.016,0,0,Math.PI/2)),i.add("metal",Xt([[-.012,.0085],[-.01,.0105],[0,.0105],[.002,.0085]],14),$.steel,oe(.03,-.118,-.03,.5,0,0))}const H0=i=>.021+i*.82;function G0(i,e){const t=(M,h,m)=>new Ge(M,h,m).applyMatrix4(i),n=(M,h,m)=>new Ge(M,h,m).transformDirection(i),s=n(0,1,0),r=n(0,0,1),a=H0(.0162*e),o=r.clone().multiplyScalar(.8).addScaledVector(s,-.6).normalize(),l=s.clone().multiplyScalar(.8).addScaledVector(r,.6).normalize(),c=t(Bn.x+.004,Bn.y,Bn.z).addScaledVector(l,-.07).addScaledVector(o,a),u=n(ki.x,ki.y,ki.z),f=t(ga.x+ki.x*.068,ga.y+ki.y*.068,ga.z+ki.z*.068),d=s.clone().addScaledVector(u,-s.dot(u)).normalize(),p=d.clone().cross(u).normalize();p.y>0&&p.negate();const v=f.clone().addScaledVector(d,-.07).addScaledVector(p,a);return{P:t,D:n,R:{wrist:c,f:l,u:o},L:{wrist:v,f:d,u:p}}}function sa(i,e,t,n,s,r,a){const o=new sn;o.name=e,o.matrixAutoUpdate=!1;const l=new La;return F0(l,t,n,s),l.push(wn(new Ge,r,new Ge(0,1,0))),z0(l,a),l.pop(),l.build(o,i,e),o}const ra=(i,e)=>e.clone().transformDirection(i.clone().invert()),an={c:new Ge(0,-.1,-.46),r:.2,tube:.018,base:[-.3,Math.PI+.3],A:.6,period:1.5,shift:.2},Ml=new Ge(0,0,1);function Q1(i){const e=new Ge(Math.cos(i),Math.sin(i),0),t=e.clone().multiplyScalar(-.39).addScaledVector(Ml,.92).normalize(),n=e.clone().multiplyScalar(-.92).addScaledVector(Ml,-.39).normalize(),s=an.c.clone().addScaledVector(e,an.r).addScaledVector(n,-.07).addScaledVector(t,H0(an.tube));return{wrist:s,F:wn(s,n,t)}}function j1(i,e){const t=2*an.A/an.period,n=.5*t+e*an.shift,s=o=>o<t?-.6+o/t*2*an.A:an.A-(o-t)/(1-t)*2*an.A,r=((i/an.period+n)%1+1)%1,a=n%1;return{d:s(r)-s(a),fly:r<t?0:(r-t)/(1-t)}}function ev(i){const e=new Ge(-.22*i,.2,-1).normalize(),t=new Ge(.35*i,1,.15),n=t.addScaledVector(e,-e.dot(t)).normalize(),s=new Ge(.2*i,-.318,-.36);return{wrist:s,F:wn(s,e,n),elbow:new Ge(.31*i,-.56,-.02)}}function tv(i){const e=new sn;e.name="harma-fpRig";const t=new sn;t.name="harma-fp-sway",e.add(t);const n=new sn;n.name="harma-fp-tool",t.add(n);const s=new La,r=1.2,a=oe(.17,-.17,-.58,.06,.09,-.05,r).multiply(oe(0,0,0,-Math.PI/2,0,0)),o=G0(a,r),{P:l,D:c}=o;s.push(a),k0(s),s.pop();const u=o.R.wrist,f=wn(u,o.R.f,o.R.u),d=wn(o.L.wrist,o.L.f,o.L.u),p=o.R.f.clone().add(new Ge(-.3,.02,.1)).normalize(),v=o.L.f.clone().add(new Ge(.42,.4,.12)).normalize(),M=wn(u,p,o.R.u),h=new Ge(.012,.05,.085).applyMatrix4(M),m=new Ge(0,1,.2).transformDirection(M),x=l(.03,-.122,-.032),y=c(.2,-1,-.6),S=[x,x.clone().addScaledVector(y,.035),x.clone().lerp(h,.5).add(new Ge(.05,-.06,.02)),h.clone().addScaledVector(m,.035),h];s.add("suit",tn(S,110,8,k=>.0066+.0012*Math.sin(k*150)),$.rubber),s.add("metal",Xt([[-.004,.0085],[-.002,.0112],[.008,.0112],[.01,.0085]],14,!0,!0),$.steel,ni(h,m).multiply(oe(0,0,0,Math.PI/2,0,0)));const T=s.build(n,i,"fp"),R=new Gt;R.name="harma-muzzle",R.applyMatrix4(wn(l(0,O0+.006,0),c(0,1,0),c(0,0,1))),t.add(R);const g=(k,G)=>(k.matrix.copy(G),k.matrixWorldNeedsUpdate=!0,t.add(k),k),_={tool:[g(sa(i,"fp-tool-R",1,.9,.25,ra(f,p),.34),f),g(sa(i,"fp-tool-L",-1,.9,.25,ra(d,v),.34),d)]},w=an.base.map(k=>Q1(k));_.wheel=w.map((k,G)=>{const X=G?-1:1,ae=new Ge(.44*X,-.5,-.1);return g(sa(i,"fp-wheel-"+"RL"[G],X,.9,.25,ra(k.F,k.wrist.clone().sub(ae).normalize()),.44),k.F)}),_.empty=[1,-1].map(k=>{const G=ev(k);return g(sa(i,"fp-empty-"+(k>0?"R":"L"),k,.32,1,ra(G.F,G.wrist.clone().sub(G.elbow).normalize()),.34),G.F)});const b=new Qn,P=new Qn;function D(k){_.wheel.forEach((G,X)=>{const ae=j1(k,X);b.makeRotationZ(ae.d).setPosition(an.c.clone().sub(an.c.clone().applyAxisAngle(Ml,ae.d))),G.matrix.copy(b).multiply(P.makeTranslation(0,0,.035*Math.sin(Math.PI*ae.fly))).multiply(w[X].F),G.matrixWorldNeedsUpdate=!0})}function U(k){if(!_[k])return!1;n.visible=k==="tool";for(const[G,X]of Object.entries(_))for(const ae of X)ae.visible=G===k;return!0}U("tool");const C=[0,1,2].map(k=>{const G=a.clone().multiply(B0(k));return{M:G,inv:G.clone().invert(),parts:(s.tags["claw"+k]||[]).map(([X,ae,Ae])=>{const Y=T[X].geometry.attributes.position,re=T[X].geometry.attributes.normal;return{pos:Y,nrm:re,start:ae,cnt:Ae,p0:Y.array.slice(ae*3,(ae+Ae)*3),n0:re.array.slice(ae*3,(ae+Ae)*3)}})}}),z=new Qn,H=new Qn,O=new Ge;function J(k){for(const G of C){z.copy(G.M).multiply(H.makeRotationZ(-k)).multiply(G.inv);for(const X of G.parts){const ae=X.pos.array,Ae=X.nrm.array,Y=X.start*3;for(let re=0;re<X.cnt*3;re+=3)O.set(X.p0[re],X.p0[re+1],X.p0[re+2]).applyMatrix4(z),ae[Y+re]=O.x,ae[Y+re+1]=O.y,ae[Y+re+2]=O.z,O.set(X.n0[re],X.n0[re+1],X.n0[re+2]).transformDirection(z),Ae[Y+re]=O.x,Ae[Y+re+1]=O.y,Ae[Y+re+2]=O.z;X.pos.needsUpdate=!0,X.nrm.needsUpdate=!0}}}return{fpRig:e,sway:t,muzzle:R,meshes:T,toolG:n,hands:_,setPose:U,setWheel:D,setClaws:J}}function Zl(i,e){let t=0;for(;t<i.length-2&&e>i[t+1][0];)t++;const n=i[t],s=i[t+1],r=en((e-n[0])/(s[0]-n[0]),0,1),a=o=>(n[o]??0)+((s[o]??0)-(n[o]??0))*r;return{rx:a(1),rz:a(2),cx:a(3),cz:a(4),e:(n[5]??2)+((s[5]??2)-(n[5]??2))*r}}function xa(i,e,t){const n=Zl(i,t),s=en((e-n.cx)/n.rx,-.985,.985);return new Ge(e,t,n.cz-n.rz*(1-Math.abs(s)**n.e)**(1/n.e))}function Hi(i,e,t){const s=xa(i,e,t),r=xa(i,e+.004,t).sub(s),a=xa(i,e,t+.004).sub(s);return{p:s,n:a.cross(r).normalize()}}function nv(i){const e=i*.17,t=26,n=[],s=c=>e*Math.sin(Math.PI*c**.72)**.8*(1-.22*c)+.0012;for(let c=1;c<t;c++){const u=c/t,f=c%2;n.push([s(u)*(f?1:.8),-i*(.1+.9*u)+(f?0:i*.012)])}const r=new Ps;r.moveTo(-.0022,0),r.lineTo(.0022,0),r.lineTo(.0026,-i*.1);for(const[c,u]of n)r.lineTo(c,u);r.lineTo(0,-i*1.02);for(const[c,u]of n.reverse())r.lineTo(-c*.94,u-i*.006);r.lineTo(-.0026,-i*.1),r.closePath();const a=new Mr(r,{depth:.0012,bevelEnabled:!0,bevelThickness:.001,bevelSize:8e-4,bevelSegments:1,steps:1}),o=a.attributes.position;for(let c=0;c<o.count;c++){const u=o.getX(c),f=o.getY(c),d=-f/i;o.setZ(c,o.getZ(c)-.32*Math.abs(u)-.012*i/.16*Math.sin(Math.PI*d)*0+.0025)}a.computeVertexNormals();const l=tn([[0,.004,.002],[0,-i*.3,.0034],[0,-i*.7,.0034],[0,-i*1,.0026]],14,6,c=>.0021*(1-.75*c)+4e-4);return yr([_l(a),_l(l)],!1)}function V0(i,e,t,n={}){i.add("suit",An(e,44,!0,!0),$.suit);const s=e[e.length-1][0];for(const D of[-1,1]){const U=[];for(let z=0;z<=10;z++){const H=z/10,O=t.yBot-.005-H*(n.pipeLen??.26),J=D*((n.pipeX0??.05)+(n.pipeDx??.07)*Math.sin(H*Math.PI*.5)),{p:k,n:G}=Hi(e,J,O);U.push(k.addScaledVector(G,.0015))}i.add("suit",tn(U,30,8,()=>.0052),$.teal);const C=Hi(e,D*(n.shX??.12),t.yBot-(n.shDy??.035));i.add("suit",Mt(.03,.022,.006,null,14,8),$.teal,ni(C.p,C.n))}if(n.panel){const[D,U,C]=n.panel,z=Hi(e,D,U),H=ni(z.p,z.n).multiply(oe(0,0,0,0,0,0,C));i.add("metal",Qt(.078,.052,.012,.01,.003),$.gold,H.clone().multiply(oe(0,0,.002))),i.add("suit",Qt(.07,.044,.014,.008,.003),$.suitDim,H.clone().multiply(oe(0,0,.004))),i.add("suit",Qt(.03,.03,.004,.005,.001),$.tealDeep,H.clone().multiply(oe(-.015,0,.011)));for(let O=0;O<3;O++)i.glow(Mt(.0045,.0045,.0025,null,10,6),on.teal,H.clone().multiply(oe(.012+O*.0105,.008,.0115)));i.add("metal",Qt(.03,.006,.004,.002,.001),$.steel,H.clone().multiply(oe(.0225,-.009,.0115)))}if(n.belt){const D=n.belt,U=Zl(e,D),C=U.e;i.add("suit",An([[D-.016,U.rx+.001,U.rz+.001,U.cx,U.cz,C],[D-.012,U.rx+.006,U.rz+.006,U.cx,U.cz,C],[D+.012,U.rx+.006,U.rz+.006,U.cx,U.cz,C],[D+.016,U.rx+.001,U.rz+.001,U.cx,U.cz,C]],44,!1,!1),$.teal)}const r=t.rTop-t.rBot,a=t.yTop-t.yBot,o=Math.hypot(r,a),l=[r/o,a/o],c=[l[1],-l[0]],u=(D,U)=>[t.yBot+a*D+c[1]*U,t.rBot+r*D+c[0]*U],f=.0055*t.g,d=.0018*t.g,p=[u(0,-.004),u(-.02,f*.7),u(.02,f),u(.09,f),u(.125,d),u(.875,d),u(.91,f),u(.98,f),u(1.02,f*.7),u(1,-.004)];i.add("metal",An(p.map(([D,U])=>[D,U,U,0,t.z0]),56,!1,!1),$.gold),i.add("suit",An([[t.yTop-.004,t.rTop-.004,t.rTop-.004,0,t.z0],[t.yTop+(n.neckUp??.03),t.rTop-.012,t.rTop-.012,0,t.z0]],32,!1,!0),n.neckCol??$.rubber);const v=(D,U,C=0)=>{const[z,H]=u(U,C),O=Math.cos(D),J=Math.sin(D);return{p:new Ge(H*O,z,t.z0+H*J),n:new Ge(c[0]*O,c[1],c[0]*J),up:new Ge(l[0]*O,l[1],l[0]*J)}};for(const D of[.27,.73]){const[U,C]=u(D,d);i.add("metal",Rn(C,.0016*t.g,5,56),$.goldLight,oe(0,U,t.z0,Math.PI/2,0,0))}const M=22,h=-Math.PI/2;for(let D=0;D<M;D++){const U=h+(D+.5)/M*Math.PI*2,C=v(U,.5,d);Math.sin(U)>.55||(D%2?i.add("metal",Mt(.0052*t.g,.0052*t.g,.0034*t.g,null,10,6),$.goldLight,ni(C.p,C.n,C.up)):i.add("metal",new Wi(1),$.bronze,ni(C.p,C.n,C.up).multiply(oe(0,0,0,0,0,0,.0055*t.g,.0085*t.g,.0032*t.g))))}const m=v(h,.5,d),x=ni(m.p,m.n,m.up);i.add("metal",new Wi(1),$.gold,x.clone().multiply(oe(0,0,0,0,0,0,.0155*t.g,.0215*t.g,.0045*t.g))),i.add("metal",Rn(1,.09,5,4),$.goldLight,x.clone().multiply(oe(0,0,.0028*t.g,0,0,0,.0125*t.g,.0178*t.g,.012*t.g))),i.glow(new Wi(1),on.gem,x.clone().multiply(oe(0,0,.003*t.g,0,0,0,.0098*t.g,.0145*t.g,.0062*t.g)));const y=v(h,-.02,f*.5),S=y.p.clone().addScaledVector(y.up,-.0115*t.g).addScaledVector(y.n,.002);i.add("metal",Rn(.0042*t.g,.0012*t.g,5,12),$.gold,ni(y.p.clone().addScaledVector(y.up,-.003*t.g),new Ge(1,0,0))),i.glow(Mt(.0078*t.g,.0078*t.g,.0078*t.g,null,14,10),on.crimson,oe(S.x,S.y,S.z));const T=S.clone().addScaledVector(y.up,-.0085*t.g),R=n.featherLen??.15;let g;if(n.shelf){const D=C=>{let z=n.shelf[0],H=n.shelf[1];for(let O=0;O<24;O++){const J=(z+H)/2;xa(e,0,J).z>C?H=J:z=J}return(z+H)/2};T.y=D(T.z)+.007;const U=D(T.z-R*.85);g=Hi(e,0,U),g.p.y+=.008}else g=Hi(e,0,T.y-R*(n.featherDrop??.75));const w=g.p.clone().addScaledVector(g.n,.006).sub(T).normalize().clone().negate(),b=g.n.clone().addScaledVector(w,-g.n.dot(w)).normalize(),P=w.clone().cross(b);return{top:T,basis:new Qn().makeBasis(P,w,b).setPosition(T),L:R,yTop:s}}function W0(i,e,t,n){const s=new sn;s.name=n,s.applyMatrix4(e.basis);const r=new At(nv(e.L),t.feather);return r.name=n+":mesh",r.frustumCulled=!1,s.add(r),i.add(s),r}const iv=[[-.82,.17,.165,0,-.035,2.5],[-.62,.2,.2,0,-.07,2.5],[-.47,.222,.225,0,-.095,2.6],[-.37,.226,.225,0,-.095,2.6],[-.3,.224,.222,0,-.092,2.6],[-.266,.214,.19,0,-.062,2.5],[-.24,.194,.152,0,-.024,2.4],[-.222,.172,.118,0,.006,2.4],[-.196,.1,.09,0,.03,2.1]];function sv(i){const e=new sn;e.name="harma-chest";const t=new La,n=V0(t,iv,{z0:.03,yTop:-.166,yBot:-.214,rTop:.077,rBot:.135,g:1.55},{featherLen:.19,shelf:[-.3,-.2],pipeLen:.1,pipeX0:.085,pipeDx:.07,shX:.14,shDy:.012,panel:[-.12,-.262,1],belt:-.52,neckUp:.02,neckCol:Dt(We.cardBg,We.lotusTeal,.25).multiplyScalar(.6)});t.build(e,i,"chest");const s=W0(e,n,i,"harma-chest-feather");return{chest:e,feather:s}}const So=new Ge(0,0,.085),Kl=i=>oe(i*.086,.052,.094,.06,0,-i*.36);function wu(i,e,t,n,s,r=9){const a=[];for(let o=0;o<=r;o++){const l=o/r,c=1-l;a.push([n+l*t,i*c**.82*(1-.18*Math.sin(l*Math.PI))+.0012,e*c**.6+.001,0,s-.012*l*l,2])}return An(a,18,!0,!0)}function rv(i){const e=n=>{const s=$.skin.clone();if(n.z<.02){const r=Math.abs(n.x)-.046,a=(n.y-.003)*1.35,o=Math.hypot(r,a);s.lerp($.lilac,.85*(1-gi(.024,.046,o))),s.lerp($.skinWarm,.6*gi(-.03,-.085,n.y))}return s};i.add("skin",Mt(.092,.09,.098,n=>{n.y<0&&(n.x*=1-.36*(-n.y)**1.7),n.x*=1+.1*Math.exp(-(((n.y+.28)/.3)**2)),n.z<0&&(n.z-=.33*Math.exp(-((n.x/.5)**2+((n.y+.47)/.36)**2)))},48,32),e,oe(So.x,So.y,So.z));for(const n of[-1,1])i.add("skin",Mt(.0245,.0185,.02,null,18,12),$.skin,oe(n*.0205,-.05,-.034,0,-n*.25,0)),i.add("skin",new mr(.0034,.013,8),$.tooth,oe(n*.0135,-.0705,-.04,Math.PI,0,0)),i.add("skin",tn([[0,-.038,-.0545],[0,-.05,-.0545],[n*.011,-.0595,-.0515],[n*.027,-.0555,-.044],[n*.036,-.047,-.034]],16,6,s=>.0016*(1-.5*s)),$.liner);i.add("skin",Mt(.021,.0155,.019,null,16,10),$.skin,oe(0,-.0765,-.022)),i.add("skin",Mt(.0118,.0082,.0085,n=>{n.x*=1+.45*n.y},14,10),$.nose,oe(0,-.031,-.0495));const t=[];for(let n=0;n<=8;n++){const s=n/8;t.push([-.19+s*.12,.04+.002*Math.sin(s*22)+.01*s,.039+.002*Math.sin(s*22)+.012*s,0,.06+.016*s,2])}i.add("skin",An(t,24,!1,!1),$.skinWarm);for(const n of[1,-1]){i.push(oe(n*.046,.002,2e-4,0,-n*.34,n*.2)),i.glow(Mt(.025,.0195,.0088,null,20,12),n>0?on.eyeGreen:on.eyeBlue,oe(0,0,.002)),i.glow(Mt(.0042,.0165,.004,null,10,10),on.black,oe(0,0,-.0056)),i.glow(Mt(.0032,.0032,.002,null,8,6),on.white,oe(n*.008,.008,-.0062));const s=[];for(let r=0;r<20;r++){const a=r/20*Math.PI*2,o=Math.sin(a);s.push([.029*Math.cos(a),.0208*Math.sign(o)*Math.abs(o)**1.25,.0012+.004*Math.cos(a)**2])}i.add("skin",tn(s,48,6,()=>.0024,1,!0),$.liner),i.add("skin",tn([[-.031,.005,.007],[-.013,.0228,5e-4],[.011,.0238,5e-4],[.032,.009,.008]],16,6,r=>.0034*Math.sin(Math.PI*(.1+.8*r))),$.lilac),i.pop()}for(const n of[-1,1]){i.push(Kl(n)),i.add("skin",wu(.056,.02,.205,0,0),$.skin),i.add("skin",wu(.043,.012,.165,.012,-.0125),s=>$.teal.clone().lerp($.skin,.45*gi(.03,.17,s.y)).lerp($.tealDeep,.35*(1-gi(.012,.06,s.y))));for(const[s,r]of[[.03,.0125],[.052,.0105]])i.add("metal",Rn(r,.0027,6,18),$.gold,oe(n*(.056*(1-s/.205)**.82+.001),s,-.004,0,n*.5,0));i.pop(),i.add("metal",tn([[n*.108,.07,.07],[n*.128,.03,.02],[n*.132,-.03,-.02],[n*.112,-.078,-.045],[n*.088,-.086,-.052],[n*.082,-.068,-.05],[n*.094,-.06,-.047]],40,6,s=>.0021*(1-.6*s)),$.gold),i.add("metal",tn([[n*.034,-.047,-.044],[n*.07,-.038,-.058],[n*.104,-.046,-.052],[n*.116,-.07,-.044],[n*.104,-.08,-.042]],32,6,s=>.0017*(1-.65*s)),$.goldLight),i.add("metal",tn([[n*.036,-.056,-.042],[n*.062,-.066,-.054],[n*.078,-.09,-.05],[n*.068,-.104,-.046]],28,6,s=>.0016*(1-.65*s)),$.goldLight)}}function X0(i,e){const o=Math.cos(i),l=Math.sin(i);let c,u;if(e<=.7){const M=e/.7*1.5;c=Math.sin(M),u=Math.cos(M)}else{const M=(e-.7)/.3,h=l<0?.3+.2*(-l)**2:.3*(1-.75*l);c=Math.sin(1.5)+h*M,u=Math.cos(1.5)-.2*M*(.4+.6*M)}const f=.099*c*o,d=.088+.11*c*l,p=Math.abs(f)/.099;let v=.047+.086*u;return v-=.062*Math.max(0,p-.3)**1.2*e*e*(l<.3?1:1-.6*gi(.3,1,l)),v+=.02*Math.exp(-((f/.022)**2))*(.45+.55*e)*(l<.4?1:.5),[f,v,d]}function av(){const t=[],n=[];for(let r=0;r<=16;r++)for(let a=0;a<44;a++)t.push(...X0(a/44*Math.PI*2,r/16));for(let r=0;r<16;r++)for(let a=0;a<44;a++){const o=r*44+a,l=(r+1)*44+a,c=r*44+(a+1)%44,u=(r+1)*44+(a+1)%44;n.push(o,c,l,l,c,u)}const s=new zt;return s.setAttribute("position",new et(t,3)),s.setIndex(n),I0(s)}function ov(i){i.add("metal",av(),a=>$.steel.clone().lerp($.bronze,en(.25+.75*Math.exp(-((a.x/.05)**2))+(a.y<.03?.35:0),0,1)),null);const e=new Ps;e.moveTo(-.07,.062),e.quadraticCurveTo(-.045,.108,-.012,.14),e.quadraticCurveTo(.008,.152,.03,.142),e.quadraticCurveTo(.075,.14,.1,.1),e.lineTo(.1,.08),e.quadraticCurveTo(.06,.122,.02,.128),e.quadraticCurveTo(-.03,.115,-.06,.06),e.closePath(),i.add("metal",vl(e,.004,.0035,10),$.gold,oe(0,0,.088-.012,0,-Math.PI/2,0)),i.add("metal",An([[.128,.0125,.034,0,.076,1.35],[.16,.009,.02,0,.076,1.35],[.205,.005,.009,0,.076,1.35],[.252,6e-4,6e-4,0,.076,2]],12,!1,!0),$.gold);const t=[];for(let a=0;a<=24;a++)t.push(X0(Math.PI+a/24*Math.PI,1));i.add("metal",tn(t,60,6,()=>.0036),$.gold);for(const a of[-1,1]){i.add("metal",tn([[a*.118,-.012,.03],[a*.124,-.06,.018],[a*.112,-.112,.016],[a*.085,-.15,.02]],20,8,l=>.0085*(1-.25*l),.3),$.steel),i.add("metal",Mt(.0095,.014,.004,null,10,8),$.gold,oe(a*.1235,-.058,.012,0,-a*.4,0)),i.add("metal",Mt(.007,.01,.0035,null,10,8),$.gold,oe(a*.113,-.108,.0105,0,-a*.4,a*.3)),i.push(Kl(a));const o=[];for(let l=0;l<=10;l++){const c=l/10,u=1-c;o.push([-.004+c*.245,.069*u**.85+.003,.042*u**.7+.003,0,-.004-.012*c*c,2])}i.add("glass",An(o,20,!1,!0),$.white),i.add("metal",An([[-.02,.07,.044,0,-.004],[-.014,.0755,.049,0,-.004],[-.002,.0755,.049,0,-.004],[.004,.0705,.0445,0,-.004]],28,!1,!1),$.bronze),i.pop()}const n=new Ge(0,-.035,.05),s=.156,r=new Ci(s,36,20,Math.PI*.88,Math.PI*1.24,.98,Math.PI-.98-.42);i.add("glass",r,$.white,oe(n.x,n.y,n.z))}const q0=1.18,ur=[[-.74,.15,.12,0,.066,2.6],[-.66,.152,.122,0,.066,2.6],[-.6,.14,.11,0,.064,2.5],[-.52,.15,.116,0,.06,2.6],[-.4,.172,.128,0,.056,2.7],[-.3,.176,.122,0,.058,2.6],[-.248,.156,.098,0,.064,2.3],[-.212,.104,.077,0,.066,2.1],[-.19,.064,.06,0,.066,2]],lv=.192,Y0=i=>new Ge(i*lv,-.278,.062),Sl=oe(.045,-.5,-.34,-.07,.16,-.04).multiply(oe(0,0,0,-Math.PI/2,0,0)),$0={R:new Ge(.285,-.5,-.005),L:new Ge(-.225,-.475,-.12)},lt={w:.4,h:.43,d:.15,y:-.395,z:.25,tankX:.152,tankY:-.262,tankZ:.292,tankR:.054,tankL:.28};function cv(i){const e=new Ge(0,1,0);i.add("suit",Qt(lt.w,lt.h,lt.d,.06,.022),$.suit,oe(0,lt.y,lt.z)),i.add("suit",Qt(.2,.25,.03,.03,.008),$.suitDim,oe(0,lt.y-.02,lt.z+lt.d/2+.006)),i.add("suit",Qt(.25,.05,.11,.02,.01),$.teal,oe(0,lt.y+lt.h/2+.004,lt.z));for(const o of[-1,1]){i.push(oe(o*lt.tankX,lt.tankY,lt.tankZ)),i.add("metal",new Os(lt.tankR,lt.tankL,4,14),$.steel);for(const f of[-.1,.085])i.add("metal",Xt([[f-.011,lt.tankR],[f-.008,lt.tankR+.004],[f+.008,lt.tankR+.004],[f+.011,lt.tankR]],18),$.gold);i.add("suit",Mt(lt.tankR*.94,.03,lt.tankR*.94,null,16,8),$.teal,oe(0,lt.tankL/2+.03,0)),i.add("metal",Xt([[0,.016],[.022,.016],[.026,.02],[.034,.02],[.036,.012]],12,!1,!0),$.gold,oe(0,lt.tankL/2+.05,0)),i.pop(),i.add("suit",Qt(.02,.2,.085,.008,.005),$.teal,oe(o*(lt.w/2+.002),lt.y-.06,lt.z-.005));const l=new Ge(o*.06,lt.y+lt.h/2+.02,lt.z+.01),c=new Ge(o*.079,-.203,.118),u=[l,l.clone().add(new Ge(o*.022,.034,-.012)),new Ge(o*.132,-.138,.2),new Ge(o*.153,-.16,.135),c.clone().add(new Ge(o*.042,.012,.02)),c];i.add("suit",tn(u,66,8,f=>.0128+.0024*Math.sin(f*138)),$.rubber),i.add("metal",Xt([[-.012,.014],[-.008,.019],[.012,.019],[.016,.014]],14,!0,!0),$.gold,oe(l.x,l.y,l.z)),i.add("metal",Mt(.02,.02,.02,null,12,8),$.gold,oe(c.x,c.y,c.z))}const t=-.6,n=Zl(ur,t);i.add("suit",An([[t-.024,n.rx+.002,n.rz+.002,0,n.cz,n.e],[t-.02,n.rx+.008,n.rz+.008,0,n.cz,n.e],[t+.02,n.rx+.008,n.rz+.008,0,n.cz,n.e],[t+.024,n.rx+.002,n.rz+.002,0,n.cz,n.e]],44,!1,!1),$.rubber);const s=Hi(ur,0,t),r=ni(s.p,s.n);i.add("metal",Qt(.062,.05,.016,.01,.004),$.gold,r.clone().multiply(oe(0,0,.012))),i.glow(new Wi(1),on.teal,r.clone().multiply(oe(0,0,.021,0,0,0,.012,.016,.005)));for(const o of[-1,1]){const l=Hi(ur,o*.096,t-.012);i.add("suit",Qt(.056,.07,.03,.01,.006),$.suitDim,ni(l.p,l.n).multiply(oe(0,0,.018))),i.add("metal",Mt(.006,.006,.004,null,10,6),$.gold,ni(l.p,l.n).multiply(oe(0,.012,.034)))}const a=G0(Sl,1);i.push(Sl),k0(i),i.pop();for(const[o,l]of[["R",1],["L",-1]]){const c=a[o],u=$0[o],f=Y0(l),d=c.wrist.distanceTo(u),p=u.clone().sub(f).normalize();i.push(wn(c.wrist,c.f,c.u)),F0(i,l,.9,.25),i.pop(),i.push(wn(c.wrist,c.wrist.clone().sub(u).normalize(),c.u)),z0(i,d),i.pop(),i.add("suit",Mt(.06,.06,.06,null,16,10),$.suit,oe(u.x,u.y,u.z)),i.add("metal",Rn(.058,.0042,6,24),$.gold,wn(u.clone().addScaledVector(p,-.034),p,e));const v=f.clone().lerp(u,.5).add(new Ge(l*.014,0,.012));i.add("suit",tn([f,v,u],24,14,M=>.066-.009*M+(M>.6&&M<.93?.0038*Math.sin((M-.6)*105):0)),$.suit),i.add("suit",Mt(.082,.074,.08,null,18,12),$.suit,oe(f.x+l*.004,f.y+.012,f.z)),i.add("suit",Rn(.068,.0095,8,28),$.teal,wn(f.clone().addScaledVector(p,.072),p,e)),i.add("metal",Rn(.0672,.0046,6,28),$.gold,wn(f.clone().addScaledVector(p,.089),p,e)),i.add("metal",Rn(.079,.0046,6,28),$.gold,wn(f.clone().add(new Ge(-l*.03,.006,0)),new Ge(l,.25,0).normalize(),e)),i.add("suit",Mt(.032,.032,.008,null,14,8),$.teal,oe(f.x+l*.08,f.y+.016,f.z-.012,0,l*1.25,0))}}function uv(){const i=[[.03,-.64,.2],[-.1,-.63,.25],[-.235,-.55,.24],[-.315,-.4,.2],[-.325,-.22,.18],[-.285,-.06,.17],[-.3,.1,.17]],e=new Aa(i.map(a=>new Ge(...a)),!1,"centripetal"),t=[],n=(a,o,l,c,u=18)=>{const f=tn(a,u+8,10,v=>o*Math.sin(Math.PI*(.08+.92*v**.55))**.9*(1-v)**.55+5e-4,.8,!1,c?.75:.25),d=f.attributes.position.count,p=new Float32Array(d).fill(l);f.setAttribute("phase",new xn(p,1)),t.push(f)};n(i,.08,0,0,30),[[.2,[-.05,.14,.02],[-.02,.26,0],.055,1.3],[.33,[-.07,.15,0],[-.04,.3,-.02],.064,2.6],[.46,[-.06,.16,.02],[0,.34,.01],.068,4.1],[.58,[-.05,.14,-.01],[-.075,.27,0],.058,5.3],[.7,[.04,.12,.01],[.03,.25,.02],.05,.7],[.4,[.06,.1,-.03],[.09,.23,-.03],.05,3.4],[.82,[-.06,.09,0],[-.03,.2,0],.042,2]].forEach(([a,o,l,c,u],f)=>{const d=e.getPointAt(a),p=e.getTangentAt(a);n([d.clone().addScaledVector(p,-.05),d.clone().addScaledVector(p,.01),d.clone().add(new Ge(...o)),d.clone().add(new Ge(...l))],c,u,f%2,16)});const r=yr(t,!1);return r.deleteAttribute("normal"),r.computeVertexNormals(),{geo:r,center:new Ge(-.27,-.22,.2)}}function hv(i){const e=new sn;e.name="harma-mirror";const t=new La;t.push(oe(0,0,0,0,0,0,q0)),rv(t),ov(t),t.pop();const n=V0(t,ur,{z0:.066,yTop:-.138,yBot:-.19,rTop:.057,rBot:.086,g:1},{featherLen:.15,featherDrop:.8,pipeLen:.2,pipeX0:.05,pipeDx:.085,shX:.105,shDy:.045,panel:[-.092,-.385,1.3],neckUp:.012});cv(t),t.build(e,i,"mirror");const s=W0(e,n,i,"harma-mirror-feather"),r=uv(),a=new At(r.geo,i.flame);a.name="mirror:flame",a.frustumCulled=!1,e.add(a);const o=new Gt;return o.name="harma-flame",o.position.copy(r.center),e.add(o),{mirror:e,feather:s,flame:o,flameMesh:a,flameBase:r.geo.attributes.position.array.slice()}}function fv(){const i=[],e=(r,a)=>{const o=r.index?r.toNonIndexed():r.clone();for(const l of Object.keys(o.attributes))l!=="position"&&l!=="normal"&&o.deleteAttribute(l);o.attributes.normal||o.computeVertexNormals(),a&&(o.applyMatrix4(a),a.determinant()<0&&U0(o)),i.push(o)},t=oe(0,0,0,0,0,0,q0);e(new Ci(1,12,8),t.clone().multiply(oe(0,.022,.085,0,0,0,.116,.108,.115))),e(new ln(.105,.15,.03,12),t.clone().multiply(oe(0,.02,.07)));for(const r of[-1,1]){e(new mr(1,1,7),t.clone().multiply(Kl(r)).multiply(oe(0,.11,0,0,0,0,.066,.25,.03)));const a=Y0(r),o=$0[r>0?"R":"L"],l=new Ge(r>0?.06:-.07,r>0?-.45:-.56,r>0?-.1:-.36);for(const[c,u,f]of[[a,o,.06],[o,l,.05]]){const d=new Qn().makeRotationFromQuaternion(new Ht().setFromUnitVectors(new Ge(0,1,0),u.clone().sub(c).normalize())).setPosition(c.clone().lerp(u,.5));e(new ln(f,f,c.distanceTo(u),7),d)}e(new Ci(.076,8,6),oe(a.x,a.y,a.z)),e(new Os(lt.tankR,lt.tankL,3,7),oe(r*lt.tankX,lt.tankY,lt.tankZ))}e(new Hn(lt.w,lt.h,lt.d),oe(0,lt.y,lt.z)),e(new Hn(.11,.42,.11),Sl.clone().multiply(oe(0,.03,0))),e(new mr(.02,.13,5),t.clone().multiply(oe(0,.19,.078))),e(new Hn(.012,.03,.16),t.clone().multiply(oe(0,.135,.09))),e(new ln(.058,.088,.14,10),oe(0,-.13,.068)),e(An(ur,12,!0,!0));const n=yr(i,!1),s=new At(n,new es({color:0}));return s.name="harma-shadow",s}function aa(i){let e=0,t=0;return(function n(s){if(s.visible){if(s.isMesh){e++;const r=s.geometry;t+=(r.index?r.index.count:r.attributes.position.count)/3}for(const r of s.children)n(r)}})(i),{draws:e,tris:Math.round(t)}}function dv(){const i=K1(),e=tv(i),t=sv(i),n=hv(i),s=fv(),r=$.teal.clone(),a=Dt(We.flame,We.gold,.5),o=Dt(We.flame,16777215,.3),l=$.glowTeal.clone().multiplyScalar(.7),c=Nt(We.flame),u=Dt(We.flame,16722432,.75),f=Nt(16722432).lerp(Nt(We.deepViolet),.15),d=Dt(We.turquoise,16777215,.2),p=n.flameMesh.geometry.attributes.position,v=n.flameMesh.geometry.attributes.uv,M=n.flameMesh.geometry.attributes.phase,h=i.flame.map,m=i.glow.emissiveMap,x=new De;let y=0,S=-1,T="tool";const R=(b,P,D)=>{x.copy(P).multiplyScalar(Math.max(0,D)*1.1/xl).convertLinearToSRGB();const U=m.image.data,C=b*4,z=Math.round(en(x.r,0,1)*255),H=Math.round(en(x.g,0,1)*255),O=Math.round(en(x.b,0,1)*255);(U[C]!==z||U[C+1]!==H||U[C+2]!==O)&&(U[C]=z,U[C+1]=H,U[C+2]=O,m.needsUpdate=!0)};function g(b){return e.setPose(b)?(T=b,!0):!1}function _(b,P={}){const D=en(P.wake??0,0,1),U=en(P.heat??0,0,1),C=P.mode==="cut",z=en(P.hold??0,0,1),H=en(P.fire??0,0,1);P.pose&&P.pose!==T&&g(P.pose);const O=T==="wheel"?.2:T==="empty"?1.6:1;e.sway.position.set(.0012*O*Math.sin(b*.83+.4),.0034*O*Math.sin(b*1.55),.0016*O*Math.sin(b*1.55+1.1)),e.sway.rotation.set(.0048*O*Math.sin(b*1.55+.7),.0032*O*Math.sin(b*.83),.0052*O*Math.sin(b*1.1+.5)),T==="wheel"&&e.setWheel(P.wheel??0);const J=Math.round(z*24);J!==S&&(S=J,e.setClaws(J/24*.36)),R(on.coil,x.copy($.glowTeal).lerp(d,.35*z),.72+.5*z*(.88+.12*Math.sin(b*19))+.18*H),C?(i.lens.emissive.copy(a).lerp(o,H),i.lens.emissiveIntensity=.9+2.9*H*(1+.13*Math.sin(b*31)*Math.sin(b*7.3))):(i.lens.emissive.copy(r),i.lens.emissiveIntensity=1.4+.12*Math.sin(b*2.4)+1*z),U<.5?x.copy(l).lerp(c,U*2):x.copy(c).lerp(u,U*2-1),R(on.heat,x,.5+1.45*U+(U>.85?.6*Math.sin(b*14):0)),R(on.hot,x.copy(f).lerp(c,gi(.55,1,U)*.7),1.7*gi(.25,1,U)*(.9+.1*Math.sin(b*6.3))+.35*H*(C?1:0));const k=.055*Math.sin(b*1.3)+.02*Math.sin(b*2.9+1);for(const Ae of[t.feather,n.feather])Ae.rotation.z=k,Ae.rotation.x=.012*Math.sin(b*1.7+.6);const G=p.array,X=n.flameBase;for(let Ae=0;Ae<p.count;Ae++){const Y=v.getX(Ae),re=M.getX(Ae),Pe=Y*Y,Ne=Ae*3,fe=D*.012*Math.sin(b*23+re*3+Y*11),Ue=D*.016*Math.sin(b*17+re*5+Y*7);G[Ne]=X[Ne]+(.024*Math.sin(b*2.6+re+Y*5)+fe)*Pe,G[Ne+1]=X[Ne+1]+(.02*Math.sin(b*1.9+re*1.3)+Ue)*Pe,G[Ne+2]=X[Ne+2]+.016*Math.cos(b*2.1+re*1.7+Y*4)*Pe}p.needsUpdate=!0;const ae=Math.round(D*32);ae!==y&&(y=ae,N0(h.image.data,ae/32),h.needsUpdate=!0),i.flame.emissiveIntensity=1.05+.12*Math.sin(b*5.1)+D*(.35+.25*Math.sin(b*29))}_(0,{wake:0,mode:"grip",heat:0});const w={};for(const b of["wheel","empty","tool"])e.setPose(b),w[b]=aa(e.fpRig);return{fpRig:e.fpRig,chest:t.chest,mirror:n.mirror,shadow:s,muzzle:e.muzzle,flame:n.flame,materials:i,update:_,setPose:g,wheel:{center:an.c.clone(),radius:an.r,tube:an.tube,base:an.base.slice()},counts:{fpRig:w.tool,fpByPose:w,chest:aa(t.chest),mirror:aa(n.mirror),shadow:aa(s)}}}const pv=Object.freeze(Object.defineProperty({__proto__:null,buildHarma:dv},Symbol.toStringTag,{value:"Module"})),mv=Object.assign({"./harma/model.js":pv});function gv(i,e){const t=Object.values(mv)[0]?.buildHarma,n=t?t():null,s=new sn;i.add(s);const r=new De(16754250),a=new De(We.neonViolet),o=new De,l=new Wl(r,0,6.5,1.5);l.position.set(-.34,-.38,.5),s.add(l),n&&(e.add(n.fpRig),s.add(n.chest,n.mirror,n.shadow),n.fpRig.traverse(u=>{u.layers.set(1),u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0,u.frustumCulled=!1)}),n.chest.traverse(u=>{u.layers.set(1),u.isMesh&&(u.receiveShadow=!0)}),n.mirror.traverse(u=>u.layers.set(2)),n.shadow.material=new es({colorWrite:!1,depthWrite:!1}),n.shadow.castShadow=!0,n.shadow.frustumCulled=!1,n.materials.suit&&n.materials.suit.color.setScalar(.72));let c="tool";return{model:n,body:s,tail:l,muzzle:n?n.muzzle:null,setPose(u){u!==c&&(c=u,n&&n.setPose&&n.setPose(u))},pose:()=>c,setTier(u){n&&(n.shadow.castShadow=u!=="lite")},update(u,f,d={}){const p=d.wake||0,v=d.inspect||0;$l(s,f.x,f.y,f.z,f.yaw),s.updateMatrixWorld(!0);const M=1+.06*Math.sin(u*9.1)*Math.sin(u*4.3)+p*.4*Math.sin(u*37)*Math.sin(u*23.3);o.copy(r).lerp(a,p*(.4+.25*Math.sin(u*3.1))),l.color.copy(o),l.intensity=2.1*M,n&&(n.fpRig.visible=d.rig!==0&&d.rig!==!1,n.fpRig.position.set(-.05*v,.05*v-(d.lower||0)*.25,.05*v),n.fpRig.rotation.set(.08*v+(d.lower||0)*.5,.22*v,.05*v),n.update(u,{wake:p,mode:d.mode||"grip",heat:d.heat||0,hold:d.hold||0,fire:d.fire||0,wheel:d.wheel||0}))}}}const _s=["lite","medium","high"],Z0={high:{msaa:4,bloom:!0,hdr:!0,spots:3,shadowSpots:3,shadowSize:1024,points:3,shadowsPerFrame:3,mirror:1,mirrorWorld:!0,prepass:!0,env:!0,uzor:2,sunSteps:24,particles:1,shafts:!0,minPixels:1280*720},medium:{msaa:0,bloom:!0,hdr:!0,spots:2,shadowSpots:2,shadowSize:512,points:2,shadowsPerFrame:1,mirror:.5,mirrorWorld:!0,prepass:!0,env:!0,uzor:1,sunSteps:12,particles:.5,shafts:!0,minPixels:960*540},lite:{msaa:0,bloom:!1,hdr:!0,spots:2,shadowSpots:0,shadowSize:512,points:1,shadowsPerFrame:0,mirror:0,mirrorWorld:!1,prepass:!1,env:!1,uzor:0,sunSteps:0,particles:.25,shafts:!1,minPixels:640*360}},xv=1920*1080,Eu=50,yo=30,vv=57,oa=.85;function Qs(i,e,t){return Math.min(t,Math.sqrt(xv/Math.max(1,i*e)))}class _v{constructor({cssW:e,cssH:t,dpr:n,tier:s="high",lockTier:r=!1,lockScale:a=0,maxScale:o=0}={}){this.tier=s,this.lockTier=r,this.lockScale=a,this.resize(e,t,n,o),this.scale=a||Math.min(this.maxScale,Qs(e,t,n)),this.win=[],this.acc=0,this.hold=1.5,this.goodWindows=0,this.ceilScale=1/0,this.ceilUntil=0,this.ceilFails=0,this.tierFailUntil=0,this.t=0,this.fps=0,this.ms=0,this.changes=[]}resize(e,t,n,s=0){this.cssW=e,this.cssH=t,this.dpr=n,this.maxScale=s||Math.min(n,2),this.scale&&(this.scale=Math.min(this.scale,this.maxScale))}minScale(){return Math.min(this.maxScale,Math.sqrt(Z0[this.tier].minPixels/Math.max(1,this.cssW*this.cssH)))}pixels(){return Math.round(this.cssW*this.scale)*Math.round(this.cssH*this.scale)}_log(e){this.changes.push({t:+this.t.toFixed(1),what:e,tier:this.tier,scale:+this.scale.toFixed(3),fps:+this.fps.toFixed(1)}),this.changes.length>40&&this.changes.shift()}_tierDown(){const e=_s.indexOf(this.tier);return this.lockTier||e<=0?!1:(this.tier=_s[e-1],this.scale=Math.min(this.maxScale,Qs(this.cssW,this.cssH,this.dpr)),this.ceilScale=1/0,this.hold=2.5,this._log("ступень вниз"),!0)}_tierUp(){const e=_s.indexOf(this.tier);return this.lockTier||e>=_s.length-1||this.t<this.tierFailUntil?!1:(this.prevTier=this.tier,this.triedUpAt=this.t,this.tier=_s[e+1],this.scale=Math.max(this.minScale(),Math.min(this.maxScale,Qs(this.cssW,this.cssH,this.dpr))*oa*oa),this.ceilScale=1/0,this.hold=2.5,this._log("ступень вверх"),!0)}frame(e){if(this.t+=e,e>.5){if(this.longRun=(this.longRun||0)+1,this.longRun<2)return!1;e=Math.min(e,2)}else this.longRun=0;if(this.hold>0)return this.hold-=e,this.win.length=0,this.acc=0,!1;if(this.win.push(e),this.acc+=e,this.acc<.5&&!(this.win.length>=4&&this.acc/this.win.length>1/yo))return!1;const t=this.win.slice().sort((a,o)=>a-o),n=t[t.length>>1];this.win.length=0,this.acc=0,this.ms=n*1e3,this.fps=1/n;const s=this.tier+this.scale,r=this.minScale();if(this.fps<Eu)if(this.goodWindows=0,this.triedUpAt!==void 0&&this.t-this.triedUpAt<8&&this.prevTier)this.tier=this.prevTier,this.prevTier=null,this.tierFailUntil=this.t+60,this.scale=Math.min(this.maxScale,Qs(this.cssW,this.cssH,this.dpr)),this.hold=2.5,this._log("ступень вверх не удержалась, назад");else if(!this.lockScale&&this.scale>r*1.001){this.ceilScale=this.scale,this.ceilFails++,this.ceilUntil=this.t+Math.min(600,20*2**(this.ceilFails-1));const a=this.fps<yo?Math.max(.5,Math.sqrt(this.fps/(Eu*1.15))):oa;this.scale=Math.max(r,this.scale*a),this.hold=.6,this._log(this.fps<yo?"ниже 30: масштаб вниз сразу":"масштаб вниз")}else this._tierDown();else if(this.fps>=vv){if(this.goodWindows++,this.goodWindows>=3){this.goodWindows=0,this.prevTier&&this.t-this.triedUpAt>=8&&(this.prevTier=null);const a=Math.min(this.maxScale,Qs(this.cssW,this.cssH,this.dpr)),o=Math.min(this.maxScale,this.scale/oa),l=o>=this.ceilScale*.999&&this.t<this.ceilUntil;this.scale>=a*.999&&this._tierUp()||!this.lockScale&&o>this.scale*1.001&&!l&&(this.scale=o,this.hold=.6,this._log("масштаб вверх"))}}else this.goodWindows=0;return s!==this.tier+this.scale}}function Mv(i,{seed:e=1,bench:t=!1}={}){i.shadowMap.enabled=!0,i.shadowMap.type=ir,i.toneMapping=ai,i.autoClear=!1,i.info.autoReset=!1;const n=new ol;n.fog=new Fl(461585,.01);const s=new _r(i),r=s.fromScene(new jx,.04).texture;s.dispose(),n.environmentIntensity=.06;const a=new Zf(9417983,1712176,.2);n.add(a);const o=new bn(70,window.innerWidth/window.innerHeight,.06,1500);o.layers.enable(1),n.add(o);const l=new y1(n,{spots:3,points:3}),c=U1(e,l);n.add(c.group);const u=F1(c.fx,e);n.add(u.group);const f=B1(c.fx.sun);n.add(f);const d=(he.z0+he.z1)/2,{sky:p,asteroid:v}=z1(e),M=Xi(d);p.position.copy(In(he.x-.3,1.5,d));const h=In(...c.fx.sun.pos),m=In(...c.fx.sun.to).sub(h).normalize();kn.uSunPos.value.copy(h),kn.uSunDir.value.copy(m);const x=m.clone().negate();p.children[1].position.copy(x).multiplyScalar(900),v.material.uniforms.uSun.value=x,v.position.set(-430,14,-250).applyQuaternion(M),v.quaternion.premultiply(M),n.add(p);const y=new cn(16,16,{type:Mn}),S=O1(y);n.add(S.mesh);const T=new bn,R=new ol,g=new es({colorWrite:!1,polygonOffset:!0,polygonOffsetFactor:.5,polygonOffsetUnits:1});c.group.updateMatrixWorld(!0);const _=new dt;c.group.traverse(ve=>{ve.isMesh&&ve.material.userData.room&&ve.matrixWorld.equals(_)&&R.add(new At(ve.geometry,g))});const w=gv(n,o),b=P1(i,n,o,R);t&&(l.forceShadows=!0);const P={};let D=null,U="";const C=new ce;function z(){b.configure({msaa:D.msaa,bloom:D.bloom,hdr:D.hdr,prepass:D.prepass,ldr:D.ldr}),i.getDrawingBufferSize(C),y.setSize(Math.max(16,Math.round(C.x*(D.mirror||.01))),Math.max(16,Math.round(C.y*(D.mirror||.01))))}function H(ve){U=ve,D={...Z0[ve],...P},l.setTier(D),w.setTier(D.shadowSpots?ve:"lite"),n.environment=D.env?r:null,nr.uUzQ.value=D.uzor,nr.uUzOff.value=D.noUzor?1:0,f.material.uniforms.uSteps.value=Math.max(1,D.sunSteps),kn.uKeep.value=D.particles,u.shaftGroup.visible=D.shafts,T.layers.set(2),D.mirrorWorld&&T.layers.enable(0),z()}function O(ve){i.setPixelRatio(ve),i.setSize(window.innerWidth,window.innerHeight),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),z()}const J={airlock:{fog:461586,sky:9417983,ground:1449002,hemi:.2,tint:[.95,1,1.07]},corridor:{fog:461585,sky:8363992,ground:1843240,hemi:.17,tint:[.96,1,1.05]},bay:{fog:1116934,sky:16756848,ground:2759696,hemi:.19,tint:[1.06,1,.92]},gallery:{fog:329484,sky:7311312,ground:1053724,hemi:.14,tint:[.94,1,1.08]}},k={fog:657174,sky:8019199,ground:801344,hemi:.22,tint:new I(.9,.98,1.1)},G={fog:new De(461585),sky:new De(9417983),ground:new De(1449002),hemi:.2,tint:new I(1,1,1)},X=new De,ae=new De,Ae=new I,Y=new De,re=new De(We.turquoise),Pe=new De(We.neonViolet);function Ne(ve,N,ft){const $e=J[ve]||J.corridor;G.fog.lerp(X.set($e.fog).lerp(ae.set(k.fog),N),ft),G.sky.lerp(X.set($e.sky).lerp(ae.set(k.sky),N),ft),G.ground.lerp(X.set($e.ground).lerp(ae.set(k.ground),N),ft),G.hemi+=($e.hemi+(k.hemi-$e.hemi)*N-G.hemi)*ft,G.tint.lerp(Ae.set(...$e.tint).lerp(k.tint,N),ft),n.fog.color.copy(G.fog),a.color.copy(G.sky),a.groundColor.copy(G.ground),a.intensity=G.hemi,b.uniforms.uTint.value.copy(G.tint)}const fe=new I,Ue=new I,tt=new I,ke=new dt,Ze=new I,rt=new Rs,ie=new dt;function ge(ve){return!D.mirror||ve.x>2.1||Math.abs(ve.z-d)>13||(o.getWorldPosition(Ze),Ue.subVectors(S.center,Ze).dot(S.normal)>0)?!1:(ie.multiplyMatrices(o.projectionMatrix,o.matrixWorldInverse),rt.setFromProjectionMatrix(ie),rt.intersectsObject(S.mesh))}const pe=[S.mesh,f,p];function Ie(){Ue.subVectors(S.center,Ze).reflect(S.normal).negate().add(S.center),ke.extractRotation(o.matrixWorld),tt.set(0,0,-1).applyMatrix4(ke).add(Ze),tt.subVectors(S.center,tt).reflect(S.normal).negate().add(S.center),T.position.copy(Ue),T.up.set(0,1,0).applyMatrix4(ke).reflect(S.normal),T.lookAt(tt),T.near=.1,T.far=60,T.updateMatrixWorld(),T.projectionMatrix.copy(o.projectionMatrix),S.mat.uniforms.uTexM.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(T.projectionMatrix).multiply(T.matrixWorldInverse);const ve=pe.map(N=>N.visible);pe.forEach(N=>{N.visible=!1}),i.setRenderTarget(y),i.setClearColor(0,1),i.clear(),i.render(n,T),i.setRenderTarget(null),pe.forEach((N,ft)=>{N.visible=ve[ft]})}const xe={shadows:0,mirror:!1},Ye={x:1e9,z:0,yaw:0,pitch:0,hatch:-1},Be=[];function ct(ve,N){const ft=N.t,$e=N.wake||0;i.info.reset(),$l(o,ve.x,ve.y,ve.z,ve.yaw,ve.pitch),N.roll&&o.rotateZ(N.roll),o.updateMatrixWorld(),c.dynamic.hatch.set(N.hatch??1),nr.uWake.value=$e,nr.uTime.value=ft,kn.uTime.value=ft,kn.uPx.value=i.getDrawingBufferSize(fe).y,b.uniforms.uTime.value=ft,b.uniforms.uWake.value=$e,b.uniforms.uHurt.value=N.hurt||0,b.uniforms.uFade.value=N.fade??1,Ne(pu(ve.x,ve.z),$e,t?1:.06),(Math.abs(ve.x-Ye.x)+Math.abs(ve.z-Ye.z)>.02||Math.abs(ve.yaw-Ye.yaw)+Math.abs(ve.pitch-Ye.pitch)>.01)&&(l.touch(ve.x,ve.z),Object.assign(Ye,{x:ve.x,z:ve.z,yaw:ve.yaw,pitch:ve.pitch}));const bt=N.hatch??1;bt!==Ye.hatch&&(l.touch(0,0),Ye.hatch=bt),Y.copy(re).lerp(Pe,.5+.5*Math.sin(ft*.37));for(const Se of Be)Se(ft,ve,N);xe.shadows=l.update(ve.x,ve.z,ft,N.lightsDown??$e,Y),c.mats.glowBeacon.color.set(16763e3).multiplyScalar(7*c.dynamic.beaconPulse(ft)*(N.beacon??1)*(1-.85*$e)),w.update(ft,ve,N),f.visible=D.sunSteps>0&&pu(ve.x,ve.z)==="corridor",xe.mirror=ge(ve),S.mesh.visible=xe.mirror||!D.mirror&&ve.x<2.1&&Math.abs(ve.z-d)<13,xe.mirror&&Ie(),b.render()}function ut(){const ve=i.info;return{calls:ve.render.calls,triangles:ve.render.triangles,points:ve.render.points,lines:ve.render.lines,geometries:ve.memory.geometries,textures:ve.memory.textures,programs:(ve.programs||[]).length}}return{scene:n,camera:o,pool:l,level:c,fx:u,harma:w,post:b,glass:S,sunVol:f,sky:p,ovr:P,stat:xe,hooks:Be,prepassScene:R,depthMat:g,applyTier:H,applyScale:O,render:ct,info:ut,tier:()=>U,cfg:()=>D}}const Gn=new URLSearchParams(location.search),Gi=Gn.get("bench")==="1",yl=Gn.get("probe")==="1",Tu=parseInt(Gn.get("seed")||"1",10)||1,Sv=Math.max(0,Math.min(vs.length-1,parseInt(Gn.get("cam")||"0",10)||0)),Au=Gn.get("fps")==="1"||yl,Ru=_s.includes(Gn.get("q"))?Gn.get("q"):"",yv=Math.max(0,Math.min(3,parseFloat(Gn.get("scale")||"0")||0)),Cu=Math.max(0,parseFloat(Gn.get("slow")||"0")||0),la=(Gn.get("pp")||"").split(","),Dn=document.documentElement;Dn.dataset.drift="loading";function K0(i){Dn.dataset.drift="error",Dn.dataset.driftError=i;const e=document.getElementById("err");e.textContent="Игра не запустилась: "+i,e.hidden=!1,Gi&&(window.__drift={ready:!1,error:i})}const Vi=document.createElement("canvas");let bl="";Vi.addEventListener("webglcontextcreationerror",i=>{bl=i.statusMessage||"без статуса"});document.body.appendChild(Vi);let Yn;try{Yn=new Yx({canvas:Vi,antialias:!1,preserveDrawingBuffer:Gi,powerPreference:"high-performance"})}catch(i){K0((bl?bl+" / ":"")+String(i&&i.message||i))}if(Yn)try{bv()}catch(i){console.error(i),K0(String(i&&i.stack||i).slice(0,400))}function bv(){const i=Yn.getContext(),e=i.getExtension("WEBGL_debug_renderer_info"),t={version:i.getParameter(i.VERSION),renderer:e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER),vendor:e?i.getParameter(e.UNMASKED_VENDOR_WEBGL):i.getParameter(i.VENDOR)};Dn.dataset.driftGl=`${t.version} | ${t.renderer}`;const n=String(t.renderer).replace(/^ANGLE \((.*)\)$/,"$1").replace(/, (OpenGL|Direct3D|Metal|Vulkan)[^,]*$/i,"").slice(0,70),s=window.devicePixelRatio||1,r=new _v({cssW:window.innerWidth,cssH:window.innerHeight,dpr:s,tier:Ru||"high",lockTier:!!Ru||Gi||yl,lockScale:Gi?1:yv});Gn.get("auto")==="0"&&(r.lockScale=r.scale,r.lockTier=!0),Yn.setPixelRatio(r.scale),Yn.setSize(window.innerWidth,window.innerHeight);const a=Mv(Yn,{seed:Tu,bench:Gi});la.includes("nomsaa")&&(a.ovr.msaa=0),la.includes("nobloom")&&(a.ovr.bloom=!1),la.includes("noprepass")&&(a.ovr.prepass=!1),la.includes("ldr")&&(a.ovr.ldr=!0),a.applyTier(r.tier);const o=Jx(),l=Zx({hatchOpen:!0}),c={t:0,wake:0,wakeTarget:Gn.get("wake")==="1"?1:0,hatch:1,rig:1,inspect:0};c.wake=c.wakeTarget;let u=Sv,f=!Gi;const d={x:0,y:yn,z:0,yaw:0,pitch:0};function p(){if(f)Object.assign(d,{x:o.x,y:yn,z:o.z,yaw:o.yaw,pitch:o.pitch});else{const C=vs[u];Object.assign(d,{x:C.pos[0],y:C.pos[1],z:C.pos[2],yaw:C.yaw,pitch:C.pitch})}}function v(){const C=vs[u];c.wakeTarget=c.wake=C.wake||0,c.hatch=C.hatch??1,c.rig=C.rig??1,c.inspect=C.inspect||0,c.t=C.t??1.3}function M(C){c.t+=C,Qx(o,l,C),c.wake+=(c.wakeTarget-c.wake)*Math.min(1,C*.8)}function h(){p(),a.render(d,c)}const m=a.info;if(M(0),Gi){v(),h(),window.__drift={ready:!0,error:"",seed:Tu,cam:u,gl:t,cameras:vs.map(C=>C.name),routes:Kx,setCamera(C){return u=Math.max(0,Math.min(vs.length-1,C|0)),f=!1,v(),h(),u},usePlayerCamera(C=!0){f=!!C,h()},setState(C){return Object.assign(c,C),C.wake!==void 0&&(c.wakeTarget=C.wake),h(),{...c}},setView(C){return Object.assign(vs[u],C),f=!1,h(),m()},setTier(C){return a.applyTier(C),h(),{tier:a.tier(),...m()}},tier:()=>a.tier(),setTime(C){c.t=C,h()},render(){return h(),m()},info:m,stat:()=>({...a.stat}),step(C=1,z=1/60){for(let H=0;H<C;H++)M(z);return{t:c.t,...this.player()}},timeLogic(C=6e3,z=1/60,H=100){let O=1/0;for(let G=0;G<20;G++){const X=performance.now();let ae=X;for(;ae===X;)ae=performance.now();O=Math.min(O,ae-X)}const J=[];for(let G=0;G<C;G+=H){const X=performance.now();for(let ae=0;ae<H;ae++)M(z);J.push((performance.now()-X)/H)}J.sort((G,X)=>G-X);const k=G=>J[Math.min(J.length-1,Math.floor(G*J.length))];return{frames:J.length*H,batch:H,batches:J.length,mean:J.reduce((G,X)=>G+X,0)/J.length,p50:k(.5),p95:k(.95),max:J[J.length-1],clockMs:O,precisionMs:O/H}},player(){return{x:o.x,z:o.z,yaw:o.yaw,t:c.t}},setInput(C){Object.assign(o.input,C)},setYaw(C){o.yaw=C},teleport(C,z,H){o.x=C,o.z=z,H!==void 0&&(o.yaw=H),M(0)}},Dn.dataset.drift="ready";return}const x=document.getElementById("fps");x.hidden=!Au;const y=new ce;function S(){const C=m(),z=Yn.getDrawingBufferSize(y);x.textContent=`FPS ${r.fps?r.fps.toFixed(1):"…"} · ${r.ms?r.ms.toFixed(1):"…"} мс · ${z.x}x${z.y} · масштаб ${r.scale.toFixed(2)} (экран ${s.toFixed(2)}) · ступень ${a.tier()}${r.lockTier?" (вручную)":" (авто)"} · вызовов ${C.calls} · треуг. ${(C.triangles/1e3).toFixed(0)}к · программ ${C.programs} · теней за кадр ${a.stat.shadows} · зеркало ${a.stat.mirror?"да":"нет"} · ${n}`}addEventListener("resize",()=>{r.resize(window.innerWidth,window.innerHeight,window.devicePixelRatio||1),a.applyScale(r.scale)});let T=0,R=0;function g(C){const z=performance.now();for(;performance.now()-z<C;);}if(yl){U();return}const _=new Set;addEventListener("keydown",C=>{_.add(C.code),C.code==="KeyU"&&(c.wakeTarget=c.wakeTarget?0:1)}),addEventListener("keyup",C=>_.delete(C.code)),addEventListener("blur",()=>_.clear()),Vi.addEventListener("click",()=>Vi.requestPointerLock&&Vi.requestPointerLock()),addEventListener("mousemove",C=>{document.pointerLockElement===Vi&&(o.yaw-=C.movementX*.0022,o.pitch=Math.max(-1.45,Math.min(1.45,o.pitch-C.movementY*.0022)))});const w=document.getElementById("hint");w&&(w.hidden=!1);let b=performance.now(),P=0,D=!0;Yn.setAnimationLoop(()=>{T++;const C=performance.now(),z=(C-b)/1e3;b=C;const H=Math.min(.1,z);o.speed=_.has("ShiftLeft")||_.has("ShiftRight")?5.2:3.2,o.input.forward=(_.has("KeyW")||_.has("ArrowUp")?1:0)-(_.has("KeyS")||_.has("ArrowDown")?1:0),o.input.strafe=(_.has("KeyD")||_.has("ArrowRight")?1:0)-(_.has("KeyA")||_.has("ArrowLeft")?1:0),M(H),h(),R++,Cu&&g(Cu),D&&(D=!1,Dn.dataset.drift="ready"),r.frame(z)&&(r.tier!==a.tier()&&a.applyTier(r.tier),a.applyScale(r.scale)),P+=z,P>=.5&&(P=0,Dn.dataset.driftTier=a.tier(),Dn.dataset.driftScale=r.scale.toFixed(3),Dn.dataset.driftFps=r.fps.toFixed(1),Dn.dataset.driftFrames=R,Dn.dataset.driftRaf=T,Au&&S())});function U(){const C={tier:"high",scale:r.scale},z=[["полный кадр: высокая ступень, стартовый масштаб",{}],["половинный масштаб (вчетверо меньше пикселей)",{scale:.5}],["без теней",{o:{shadowSpots:0}}],["без зеркала",{o:{mirror:0}}],["без Узора",{o:{noUzor:!0}}],["без постобработки (без MSAA и свечения)",{o:{msaa:0,bloom:!1}}],["без прохода глубины",{o:{prepass:!1}}],["средняя ступень",{tier:"medium"}],["лёгкая ступень",{tier:"lite"}],["как было до правки: плотность экрана целиком",{dprScale:!0}]];Object.assign(o,{x:.4,z:-9.2,yaw:.55,pitch:-.02}),M(0);const H=document.createElement("div");H.id="probe",H.style.cssText="position:fixed;left:8px;top:64px;padding:10px 12px;font:12px/1.5 ui-monospace,monospace;color:#d7dde4;background:rgba(4,8,12,.88);border:1px solid #84cbcd;border-radius:6px;white-space:pre;z-index:5;max-width:96vw;overflow:auto",document.body.appendChild(H);const O=[],J=new Uint8Array(4);let k=0,G=0,X=0,ae=0,Ae=0,Y=performance.now(),re="";function Pe(fe){const Ue=z[fe][1];for(const ke of Object.keys(a.ovr))delete a.ovr[ke];Object.assign(a.ovr,Ue.o||{}),r.scale=Ue.dprScale?s:C.scale*(Ue.scale||1),a.applyTier(Ue.tier||C.tier),a.applyScale(r.scale);const tt=Yn.getDrawingBufferSize(y);re=`${tt.x}x${tt.y}`,G=performance.now(),X=0,ae=0,Ae=0}function Ne(fe){const Ue=`ЗАМЕР ДРЕЙФа${fe?" · ГОТОВО, пришли этот скриншот":` · идёт вариант ${k+1} из ${z.length}`}
${n}
окно ${window.innerWidth}x${window.innerHeight}, плотность экрана ${s}

`+"вариант".padEnd(50)+"кадр".padStart(12)+"кадров/с".padStart(10)+"мс рендера".padStart(12)+"худший".padStart(8)+"вызовов".padStart(9)+"треуг.".padStart(8)+`
`;H.textContent=Ue+O.map(tt=>tt.name.padEnd(50)+tt.res.padStart(12)+tt.fps.toFixed(1).padStart(10)+tt.ms.toFixed(1).padStart(12)+tt.max.toFixed(0).padStart(8)+String(tt.calls).padStart(9)+((tt.tris/1e3).toFixed(0)+"к").padStart(8)).join(`
`)+(fe?`

«кадров/с» ограничено частотой экрана; «мс рендера» = время кадра до конца работы видеокарты.`:"")}Pe(0),Yn.setAnimationLoop(()=>{const fe=performance.now(),Ue=(fe-Y)/1e3;Y=fe,M(Math.min(.1,Ue));const tt=performance.now();h(),i.readPixels(0,0,1,1,i.RGBA,i.UNSIGNED_BYTE,J);const ke=performance.now()-tt;if(fe-G>800&&(X++,ae+=ke,Ae=Math.max(Ae,ke)),fe-G>=3e3){const Ze=m();if(O.push({name:z[k][0],res:re,fps:X/((fe-G-800)/1e3),ms:ae/Math.max(1,X),max:Ae,calls:Ze.calls,tris:Ze.triangles}),k+1<z.length)Pe(++k),Ne(!1);else{Yn.setAnimationLoop(null),Ne(!0),window.__probe={gpu:n,dpr:s,rows:O},Dn.dataset.driftProbe="done",Dn.dataset.drift="ready";return}}X%20===1&&(Ne(!1),r.fps=X/Math.max(.001,(fe-G-800)/1e3),r.ms=ae/Math.max(1,X),S())})}}
