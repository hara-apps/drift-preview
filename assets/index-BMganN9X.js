(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ko="187",vh=0,Ul=1,Mh=2,zs=1,Sh=2,Us=3,Ii=0,mn=1,On=2,Li=0,Bs=1,Ui=2,Nl=3,Fl=4,Kc=5,ts=100,yh=101,bh=102,Eh=103,wh=104,Th=200,Qc=201,Ah=202,Rh=203,jc=204,Qo=205,Ch=206,Ph=207,Lh=208,Dh=209,Ih=210,Uh=211,Nh=212,Fh=213,Oh=214,to=0,no=1,io=2,qs=3,so=4,ro=5,ao=6,oo=7,jo=0,zh=1,Bh=2,Yn=0,eu=1,tu=2,nu=3,iu=4,su=5,ru=6,au=7,ou=300,cs=301,Ys=302,va=303,Ma=304,Qr=1e3,qn=1001,lo=1002,Jt=1003,Gh=1004,cr=1005,dn=1006,Sa=1007,si=1008,vn=1009,lu=1010,cu=1011,Zs=1012,el=1013,$n=1014,Bn=1015,Qt=1016,tl=1017,nl=1018,us=1020,uu=35902,hu=35899,fu=1021,du=1022,Ln=1023,gi=1026,mi=1027,il=1028,sl=1029,Ni=1030,rl=1031,al=1033,kr=33776,Vr=33777,Wr=33778,Xr=33779,co=35840,uo=35841,ho=35842,fo=35843,po=36196,mo=37492,go=37496,xo=37488,_o=37489,jr=37490,vo=37491,Mo=37808,So=37809,yo=37810,bo=37811,Eo=37812,wo=37813,To=37814,Ao=37815,Ro=37816,Co=37817,Po=37818,Lo=37819,Do=37820,Io=37821,Uo=36492,No=36494,Fo=36495,Oo=36283,zo=36284,ea=36285,Bo=36286,Hh=3200,ta=0,kh=1,ii="",rn="srgb",na="srgb-linear",ia="linear",vt="srgb",ya=7680,Vh=519,Wh=512,Xh=513,qh=514,pu=515,Yh=516,Zh=517,mu=518,gu=519,$h=35044,Ol="300 es",Gn=2e3,$s=2001;function Jh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kh(){const i=sa("canvas");return i.style.display="block",i}const zl={};function Bl(...i){const e="THREE."+i.shift();console.log(e,...i)}function xu(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=xu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function mt(...i){i=xu(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function qr(...i){const e=i.join(" ");e in zl||(zl[e]=!0,Ye(...i))}function Qh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const jh={[to]:to,[io]:ao,[so]:so,[qs]:ro,[no]:no,[ao]:io,[oo]:oo,[ro]:qs};class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,ra=180/Math.PI;function gs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function ef(i,e){return(i%e+e)%e}function Ea(i,e,t){return(1-t)*i+t*e}function tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ol(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function nf(i,e){if(e.constructor===Float32Array)return i;const t=ol(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function sf(i,e){if(e.constructor===Float32Array)return i;const t=ol(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}class oe{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],u=n[s+1],h=n[s+2],l=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],S=r[a+3];if(l!==S||c!==d||u!==f||h!==p){let x=c*d+u*f+h*p+l*S;x<0&&(d=-d,f=-f,p=-p,S=-S,x=-x);let g=1-o;if(x<.9995){const m=Math.acos(x),_=Math.sin(m);g=Math.sin(g*m)/_,o=Math.sin(o*m)/_,c=c*g+d*o,u=u*g+f*o,h=h*g+p*o,l=l*g+S*o}else{c=c*g+d*o,u=u*g+f*o,h=h*g+p*o,l=l*g+S*o;const m=1/Math.sqrt(c*c+u*u+h*h+l*l);c*=m,u*=m,h*=m,l*=m}}e[t]=c,e[t+1]=u,e[t+2]=h,e[t+3]=l}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],u=n[s+2],h=n[s+3],l=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*l+c*f-u*d,e[t+1]=c*p+h*d+u*l-o*f,e[t+2]=u*p+h*f+o*d-c*l,e[t+3]=h*p-o*l-c*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(n/2),h=o(s/2),l=o(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*l+u*f*p,this._y=u*f*l-d*h*p,this._z=u*h*p+d*f*l,this._w=u*h*l-d*f*p;break;case"YXZ":this._x=d*h*l+u*f*p,this._y=u*f*l-d*h*p,this._z=u*h*p-d*f*l,this._w=u*h*l+d*f*p;break;case"ZXY":this._x=d*h*l-u*f*p,this._y=u*f*l+d*h*p,this._z=u*h*p+d*f*l,this._w=u*h*l-d*f*p;break;case"ZYX":this._x=d*h*l-u*f*p,this._y=u*f*l+d*h*p,this._z=u*h*p-d*f*l,this._w=u*h*l+d*f*p;break;case"YZX":this._x=d*h*l+u*f*p,this._y=u*f*l+d*h*p,this._z=u*h*p-d*f*l,this._w=u*h*l-d*f*p;break;case"XZY":this._x=d*h*l-u*f*p,this._y=u*f*l-d*h*p,this._z=u*h*p+d*f*l,this._w=u*h*l+d*f*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],u=t[2],h=t[6],l=t[10],d=n+o+l;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-u)*f,this._z=(a-s)*f}else if(n>o&&n>l){const f=2*Math.sqrt(1+n-o-l);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+u)/f}else if(o>l){const f=2*Math.sqrt(1+o-n-l);this._w=(r-u)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+l-n-o);this._w=(a-s)/f,this._x=(r+u)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,u=t._z,h=t._w;return this._x=n*h+a*o+s*u-r*c,this._y=s*h+a*c+r*o-n*u,this._z=r*h+a*u+n*c-s*o,this._w=a*h-n*o-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,t=Math.sin(t*u)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*s-o*n),h=2*(o*t-r*s),l=2*(r*n-a*t);return this.x=t+c*u+a*l-o*h,this.y=n+c*h+o*u-r*l,this.z=s+c*l+r*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new D,Gl=new gn;class je{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u)}set(e,t,n,s,r,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],h=n[4],l=n[7],d=n[2],f=n[5],p=n[8],S=s[0],x=s[3],g=s[6],m=s[1],_=s[4],v=s[7],E=s[2],b=s[5],M=s[8];return r[0]=a*S+o*m+c*E,r[3]=a*x+o*_+c*b,r[6]=a*g+o*v+c*M,r[1]=u*S+h*m+l*E,r[4]=u*x+h*_+l*b,r[7]=u*g+h*v+l*M,r[2]=d*S+f*m+p*E,r[5]=d*x+f*_+p*b,r[8]=d*g+f*v+p*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return t*a*h-t*o*u-n*r*h+n*o*c+s*r*u-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],l=h*a-o*u,d=o*c-h*r,f=u*r-a*c,p=t*l+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/p;return e[0]=l*S,e[1]=(s*u-h*n)*S,e[2]=(o*n-s*a)*S,e[3]=d*S,e[4]=(h*t-s*c)*S,e[5]=(s*r-o*t)*S,e[6]=f*S,e[7]=(n*c-u*t)*S,e[8]=(a*t-n*r)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*a+u*o)+a+e,-s*u,s*c,-s*(-u*a+c*o)+o+t,0,0,1),this}scale(e,t){return qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ta.makeScale(e,t)),this}rotate(e){return qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ta.makeRotation(-e)),this}translate(e,t){return qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ta=new je,Hl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rf(){const i={enabled:!0,workingColorSpace:na,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[na]:{primaries:e,whitePoint:n,transfer:ia,toXYZ:Hl,fromXYZ:kl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Hl,fromXYZ:kl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}const ut=rf();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hi;class af{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hi===void 0&&(Hi=sa("canvas")),Hi.width=e.width,Hi.height=e.height;const s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let of=0;class ll{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Aa(s[a].image)):r.push(Aa(s[a]))}else r=Aa(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?af.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let lf=0;const Ra=new D;class ln extends zi{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=qn,s=qn,r=dn,a=si,o=Ln,c=vn,u=ln.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=gs(),this.name="",this.source=new ll(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ra).x}get height(){return this.source.getSize(Ra).y}get depth(){return this.source.getSize(Ra).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ou)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=ou;ln.DEFAULT_ANISOTROPY=1;class Nt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,u=c[0],h=c[4],l=c[8],d=c[1],f=c[5],p=c[9],S=c[2],x=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(l-S)<.01&&Math.abs(p-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(l+S)<.1&&Math.abs(p+x)<.1&&Math.abs(u+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,v=(f+1)/2,E=(g+1)/2,b=(h+d)/4,M=(l+S)/4,y=(p+x)/4;return _>v&&_>E?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=M/n):v>E?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=y/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=M/r,s=y/r),this.set(n,s,r,t),this}let m=Math.sqrt((x-p)*(x-p)+(l-S)*(l-S)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(x-p)/m,this.y=(l-S)/m,this.z=(d-h)/m,this.w=Math.acos((u+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cf extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new ln({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ll(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jt extends cf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _u extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uf extends ln{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ht{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,c,u,h,l,d,f,p,S,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,u,h,l,d,f,p,S,x)}set(e,t,n,s,r,a,o,c,u,h,l,d,f,p,S,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=u,g[6]=h,g[10]=l,g[14]=d,g[3]=f,g[7]=p,g[11]=S,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ki.setFromMatrixColumn(e,0).length(),r=1/ki.setFromMatrixColumn(e,1).length(),a=1/ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),u=Math.sin(s),h=Math.cos(r),l=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*l,p=o*h,S=o*l;t[0]=c*h,t[4]=-c*l,t[8]=u,t[1]=f+p*u,t[5]=d-S*u,t[9]=-o*c,t[2]=S-d*u,t[6]=p+f*u,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*l,p=u*h,S=u*l;t[0]=d+S*o,t[4]=p*o-f,t[8]=a*u,t[1]=a*l,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=S+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*l,p=u*h,S=u*l;t[0]=d-S*o,t[4]=-a*l,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=S-d*o,t[2]=-a*u,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*l,p=o*h,S=o*l;t[0]=c*h,t[4]=p*u-f,t[8]=d*u+S,t[1]=c*l,t[5]=S*u+d,t[9]=f*u-p,t[2]=-u,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*u,p=o*c,S=o*u;t[0]=c*h,t[4]=S-d*l,t[8]=p*l+f,t[1]=l,t[5]=a*h,t[9]=-o*h,t[2]=-u*h,t[6]=f*l+p,t[10]=d-S*l}else if(e.order==="XZY"){const d=a*c,f=a*u,p=o*c,S=o*u;t[0]=c*h,t[4]=-l,t[8]=u*h,t[1]=d*l+S,t[5]=a*h,t[9]=f*l-p,t[2]=p*l-f,t[6]=o*h,t[10]=S*l+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,ff)}lookAt(e,t,n){const s=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),li.crossVectors(n,Mn),li.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),li.crossVectors(n,Mn)),li.normalize(),ur.crossVectors(Mn,li),s[0]=li.x,s[4]=ur.x,s[8]=Mn.x,s[1]=li.y,s[5]=ur.y,s[9]=Mn.y,s[2]=li.z,s[6]=ur.z,s[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],h=n[1],l=n[5],d=n[9],f=n[13],p=n[2],S=n[6],x=n[10],g=n[14],m=n[3],_=n[7],v=n[11],E=n[15],b=s[0],M=s[4],y=s[8],C=s[12],A=s[1],L=s[5],I=s[9],N=s[13],P=s[2],z=s[6],k=s[10],B=s[14],se=s[3],X=s[7],Q=s[11],re=s[15];return r[0]=a*b+o*A+c*P+u*se,r[4]=a*M+o*L+c*z+u*X,r[8]=a*y+o*I+c*k+u*Q,r[12]=a*C+o*N+c*B+u*re,r[1]=h*b+l*A+d*P+f*se,r[5]=h*M+l*L+d*z+f*X,r[9]=h*y+l*I+d*k+f*Q,r[13]=h*C+l*N+d*B+f*re,r[2]=p*b+S*A+x*P+g*se,r[6]=p*M+S*L+x*z+g*X,r[10]=p*y+S*I+x*k+g*Q,r[14]=p*C+S*N+x*B+g*re,r[3]=m*b+_*A+v*P+E*se,r[7]=m*M+_*L+v*z+E*X,r[11]=m*y+_*I+v*k+E*Q,r[15]=m*C+_*N+v*B+E*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],l=e[6],d=e[10],f=e[14],p=e[3],S=e[7],x=e[11],g=e[15],m=c*f-u*d,_=o*f-u*l,v=o*d-c*l,E=a*f-u*h,b=a*d-c*h,M=a*l-o*h;return t*(S*m-x*_+g*v)-n*(p*m-x*E+g*b)+s*(p*_-S*E+g*M)-r*(p*v-S*b+x*M)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return t*(a*h-o*u)-n*(r*h-o*c)+s*(r*u-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],l=e[9],d=e[10],f=e[11],p=e[12],S=e[13],x=e[14],g=e[15],m=t*o-n*a,_=t*c-s*a,v=t*u-r*a,E=n*c-s*o,b=n*u-r*o,M=s*u-r*c,y=h*S-l*p,C=h*x-d*p,A=h*g-f*p,L=l*x-d*S,I=l*g-f*S,N=d*g-f*x,P=m*N-_*I+v*L+E*A-b*C+M*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/P;return e[0]=(o*N-c*I+u*L)*z,e[1]=(s*I-n*N-r*L)*z,e[2]=(S*M-x*b+g*E)*z,e[3]=(d*b-l*M-f*E)*z,e[4]=(c*A-a*N-u*C)*z,e[5]=(t*N-s*A+r*C)*z,e[6]=(x*v-p*M-g*_)*z,e[7]=(h*M-d*v+f*_)*z,e[8]=(a*I-o*A+u*y)*z,e[9]=(n*A-t*I-r*y)*z,e[10]=(p*b-S*v+g*m)*z,e[11]=(l*v-h*b-f*m)*z,e[12]=(o*C-a*L-c*y)*z,e[13]=(t*L-n*C+s*y)*z,e[14]=(S*_-p*E-x*m)*z,e[15]=(h*E-l*_+d*m)*z,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*c,u*c+s*o,0,u*o+s*c,h*o+n,h*c-s*a,0,u*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,u=r+r,h=a+a,l=o+o,d=r*u,f=r*h,p=r*l,S=a*h,x=a*l,g=o*l,m=c*u,_=c*h,v=c*l,E=n.x,b=n.y,M=n.z;return s[0]=(1-(S+g))*E,s[1]=(f+v)*E,s[2]=(p-_)*E,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(d+g))*b,s[6]=(x+m)*b,s[7]=0,s[8]=(p+_)*M,s[9]=(x-m)*M,s[10]=(1-(d+S))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ki.set(s[0],s[1],s[2]).length();const o=ki.set(s[4],s[5],s[6]).length(),c=ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);const u=1/a,h=1/o,l=1/c;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=l,Un.elements[9]*=l,Un.elements[10]*=l,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Gn,c=!1){const u=this.elements,h=2*r/(t-e),l=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let p,S;if(c)p=r/(a-r),S=a*r/(a-r);else if(o===Gn)p=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===$s)p=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=l,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Gn,c=!1){const u=this.elements,h=2/(t-e),l=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let p,S;if(c)p=1/(a-r),S=a/(a-r);else if(o===Gn)p=-2/(a-r),S=-(a+r)/(a-r);else if(o===$s)p=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=l,u[9]=0,u[13]=f,u[2]=0,u[6]=0,u[10]=p,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ki=new D,Un=new ht,hf=new D(0,0,0),ff=new D(1,1,1),li=new D,ur=new D,Mn=new D,Vl=new ht,Wl=new gn;class Dn{constructor(e=0,t=0,n=0,s=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],u=s[5],h=s[9],l=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-l,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wl.setFromEuler(this),this.setFromQuaternion(Wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class vu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let df=0;const Xl=new D,Vi=new gn,Qn=new ht,hr=new D,Es=new D,pf=new D,mf=new gn,ql=new D(1,0,0),Yl=new D(0,1,0),Zl=new D(0,0,1),$l={type:"added"},gf={type:"removed"},Wi={type:"childadded",child:null},Ca={type:"childremoved",child:null};class Ht extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new D,t=new Dn,n=new gn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(ql,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ql,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Es,hr,this.up):Qn.lookAt(hr,Es,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Qn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($l),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gf),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($l),Wi.child=e,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,mf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const l=c[u];r(e.shapes,l)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),l=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new D(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pn extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xf={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const x=t.getJointPose(S,n),g=this._getHandJoint(u,S);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const h=u.joints["index-finger-tip"],l=u.joints["thumb-tip"],d=h.position.distanceTo(l.position),f=.02,p=.005;u.inputState.pinching&&d>f+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},fr={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=ef(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=La(a,r,e+1/3),this.g=La(a,r,e),this.b=La(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const n=Mu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return ut.workingToColorSpace(sn.copy(this),e),Math.round(ot(sn.r*255,0,255))*65536+Math.round(ot(sn.g*255,0,255))*256+Math.round(ot(sn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(sn.copy(this),t);const n=sn.r,s=sn.g,r=sn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const l=a-o;switch(u=h<=.5?l/(a+o):l/(2-a-o),a){case n:c=(s-r)/l+(s<r?6:0);break;case s:c=(r-n)/l+2;break;case r:c=(n-s)/l+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=rn){ut.workingToColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,s=sn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(fr);const n=Ea(ci.h,fr.h,t),s=Ea(ci.s,fr.s,t),r=Ea(ci.l,fr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Oe;Oe.NAMES=Mu;class cl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new cl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Su extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Nn=new D,jn=new D,Da=new D,ei=new D,Xi=new D,qi=new D,Jl=new D,Ia=new D,Ua=new D,Na=new D,Fa=new Nt,Oa=new Nt,za=new Nt;class zn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),jn.subVectors(n,t),Da.subVectors(e,t);const a=Nn.dot(Nn),o=Nn.dot(jn),c=Nn.dot(Da),u=jn.dot(jn),h=jn.dot(Da),l=a*u-o*o;if(l===0)return r.set(0,0,0),null;const d=1/l,f=(u*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(a,ei.y),c.addScaledVector(o,ei.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fa.setScalar(0),Oa.setScalar(0),za.setScalar(0),Fa.fromBufferAttribute(e,t),Oa.fromBufferAttribute(e,n),za.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fa,r.x),a.addScaledVector(Oa,r.y),a.addScaledVector(za,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),jn.subVectors(e,t),Nn.cross(jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Nn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Xi.subVectors(s,n),qi.subVectors(r,n),Ia.subVectors(e,n);const c=Xi.dot(Ia),u=qi.dot(Ia);if(c<=0&&u<=0)return t.copy(n);Ua.subVectors(e,s);const h=Xi.dot(Ua),l=qi.dot(Ua);if(h>=0&&l<=h)return t.copy(s);const d=c*l-h*u;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Xi,a);Na.subVectors(e,r);const f=Xi.dot(Na),p=qi.dot(Na);if(p>=0&&f<=p)return t.copy(r);const S=f*u-c*p;if(S<=0&&u>=0&&p<=0)return o=u/(u-p),t.copy(n).addScaledVector(qi,o);const x=h*p-f*l;if(x<=0&&l-h>=0&&f-p>=0)return Jl.subVectors(r,s),o=(l-h)/(l-h+(f-p)),t.copy(s).addScaledVector(Jl,o);const g=1/(x+S+d);return a=S*g,o=d*g,t.copy(n).addScaledVector(Xi,a).addScaledVector(qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),pr.subVectors(this.max,ws),Yi.subVectors(e.a,ws),Zi.subVectors(e.b,ws),$i.subVectors(e.c,ws),ui.subVectors(Zi,Yi),hi.subVectors($i,Zi),yi.subVectors(Yi,$i);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-yi.z,yi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,yi.z,0,-yi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-yi.y,yi.x,0];return!Ba(t,Yi,Zi,$i,pr)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,Yi,Zi,$i,pr))?!1:(mr.crossVectors(ui,hi),t=[mr.x,mr.y,mr.z],Ba(t,Yi,Zi,$i,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ti=[new D,new D,new D,new D,new D,new D,new D,new D],Fn=new D,dr=new Bi,Yi=new D,Zi=new D,$i=new D,ui=new D,hi=new D,yi=new D,ws=new D,pr=new D,mr=new D,bi=new D;function Ba(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){bi.fromArray(i,r);const o=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=e.dot(bi),u=t.dot(bi),h=n.dot(bi);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const zt=new D,gr=new oe;let _f=0;class cn extends zi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_f++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$h,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=e!==void 0?ol(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):nf(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):sf(e,this.array)}}class yu extends cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bu extends cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const vf=new Bi,Ts=new D,Ga=new D;class xs{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ts,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(Ga)),this.expandByPoint(Ts.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mf=0;const En=new ht,Ha=new Ht,Ji=new D,Sn=new Bi,As=new Bi,Yt=new D;class Ct extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?bu:yu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Ha.lookAt(e),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Sn.min,As.min),Sn.expandByPoint(Yt),Yt.addVectors(Sn.max,As.max),Sn.expandByPoint(Yt)):(Sn.expandByPoint(As.min),Sn.expandByPoint(As.max))}Sn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Yt.fromBufferAttribute(o,u),c&&(Ji.fromBufferAttribute(e,u),Yt.add(Ji)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],u=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new D,c[C]=new D;const h=new D,l=new D,d=new D,f=new oe,p=new oe,S=new oe,x=new D,g=new D;function m(C,A,L){u[C]=u[A]=u[L]=1,h.fromBufferAttribute(n,C),l.fromBufferAttribute(n,A),d.fromBufferAttribute(n,L),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,A),S.fromBufferAttribute(r,L),l.sub(h),d.sub(h),p.sub(f),S.sub(f);const I=1/(p.x*S.y-S.x*p.y);isFinite(I)&&(x.copy(l).multiplyScalar(S.y).addScaledVector(d,-p.y).multiplyScalar(I),g.copy(d).multiplyScalar(p.x).addScaledVector(l,-S.x).multiplyScalar(I),o[C].add(x),o[A].add(x),o[L].add(x),c[C].add(g),c[A].add(g),c[L].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,A=_.length;C<A;++C){const L=_[C],I=L.start,N=L.count;for(let P=I,z=I+N;P<z;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const v=new D,E=new D,b=new D,M=new D;function y(C){b.fromBufferAttribute(s,C),M.copy(b);const A=o[C];v.copy(A),v.sub(b.multiplyScalar(b.dot(A))).normalize(),E.crossVectors(M,A);const I=E.dot(c[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,I)}for(let C=0,A=n.count;C<A;++C)u[C]&&y(C);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,u=new D,h=new D,l=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),S=e.getX(d+1),x=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,x),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),o.add(h),c.add(h),u.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),l.subVectors(s,r),h.cross(l),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,l=o.normalized,d=new u.constructor(c.length*h);let f=0,p=0;for(let S=0,x=c.length;S<x;S++){o.isInterleavedBufferAttribute?f=c[S]*o.data.stride+o.offset:f=c[S]*h;for(let g=0;g<h;g++)d[p++]=u[f++]}return new cn(d,h,l)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],u=e(c,n);t.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const c=[],u=r[o];for(let h=0,l=u.length;h<l;h++){const d=u[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let l=0,d=u.length;l<d;l++){const f=u[l];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(t))}const r=e.morphAttributes;for(const u in r){const h=[],l=r[u];for(let d=0,f=l.length;d<f;d++)h.push(l[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const l=a[u];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new D,Sf=new D,yf=new je;class pi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ka.subVectors(n,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(ka),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yf.getNormalMatrix(e),s=this.coplanarPoint(ka).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bf=0;class Gi extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Bs,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Qo,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ni=new D,Va=new D,xr=new D,_r=new D;class Eu{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Va.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Va);const r=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=_r.dot(this.direction),c=-_r.dot(xr),u=_r.lengthSq(),h=Math.abs(1-a*a);let l,d,f,p;if(h>0)if(l=a*c-o,d=a*o-c,p=r*h,l>=0)if(d>=-p)if(d<=p){const S=1/h;l*=S,d*=S,f=l*(l+a*d+2*o)+d*(a*l+d+2*c)+u}else d=r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+u;else d=-r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+u;else d<=-p?(l=Math.max(0,-(-a*r+o)),d=l>0?-r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u):d<=p?(l=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+u):(l=Math.max(0,-(a*r+o)),d=l>0?r:Math.min(Math.max(-r,-c),r),f=-l*l+d*(d+2*c)+u);else d=a>0?-r:r,l=Math.max(0,-(a*d+o)),f=-l*l+d*(d+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,l),s&&s.copy(Va).addScaledVector(xr,d),f}intersectSphere(e,t){if(e.radius<0)return null;ni.subVectors(e.center,this.origin);const n=ni.dot(this.direction),s=ni.dot(ni)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,s=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,s=(e.min.x-d.x)*u),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),l>=0?(o=(e.min.z-d.z)*l,c=(e.max.z-d.z)*l):(o=(e.max.z-d.z)*l,c=(e.min.z-d.z)*l),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,l=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,S=t.y-a.y,x=t.z-a.z,g=n.x-a.x,m=n.y-a.y,_=n.z-a.z,v=Math.abs(c),E=Math.abs(u),b=Math.abs(h);let M,y,C,A,L,I,N,P,z,k,B,se;if(v>=E&&v>=b?(C=c,I=l,z=p,se=g,c>=0?(M=u,y=h,A=d,L=f,N=S,P=x,k=m,B=_):(M=h,y=u,A=f,L=d,N=x,P=S,k=_,B=m)):E>=b?(C=u,I=d,z=S,se=m,u>=0?(M=h,y=c,A=f,L=l,N=x,P=p,k=_,B=g):(M=c,y=h,A=l,L=f,N=p,P=x,k=g,B=_)):(C=h,I=f,z=x,se=_,h>=0?(M=c,y=u,A=l,L=d,N=p,P=S,k=g,B=m):(M=u,y=c,A=d,L=l,N=S,P=p,k=m,B=g)),C===0)return null;const X=M/C,Q=y/C,re=1/C,Pe=A-X*I,Ge=L-Q*I,Z=N-X*z,we=P-Q*z,Re=k-X*se,Fe=B-Q*se,he=Re*we-Fe*Z,ze=Pe*Fe-Ge*Re,St=Z*Ge-we*Pe;if(s){if(he<0||ze<0||St<0)return null}else if((he<0||ze<0||St<0)&&(he>0||ze>0||St>0))return null;const ke=he+ze+St;if(ke===0)return null;const Je=re*(he*I+ze*z+St*se);return(ke>0?Je<0:Je>0)?null:this.at(Je/ke,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _s extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kl=new ht,Ei=new Eu,vr=new xs,Ql=new D,Mr=new D,Sr=new D,yr=new D,Wa=new D,br=new D,jl=new D,Er=new D;class Et extends Ht{constructor(e=new Ct,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){br.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const h=o[c],l=r[c];h!==0&&(Wa.fromBufferAttribute(l,e),a?br.addScaledVector(Wa,h):br.addScaledVector(Wa.sub(t),h))}t.add(br)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(vr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(vr,Ql)===null||Ei.origin.distanceToSquared(Ql)>(e.far-e.near)**2))&&(Kl.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,S=d.length;p<S;p++){const x=d[p],g=a[x.materialIndex],m=Math.max(x.start,f.start),_=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let v=m,E=_;v<E;v+=3){const b=o.getX(v),M=o.getX(v+1),y=o.getX(v+2);s=wr(this,g,e,n,u,h,l,b,M,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),S=Math.min(o.count,f.start+f.count);for(let x=p,g=S;x<g;x+=3){const m=o.getX(x),_=o.getX(x+1),v=o.getX(x+2);s=wr(this,a,e,n,u,h,l,m,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,S=d.length;p<S;p++){const x=d[p],g=a[x.materialIndex],m=Math.max(x.start,f.start),_=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let v=m,E=_;v<E;v+=3){const b=v,M=v+1,y=v+2;s=wr(this,g,e,n,u,h,l,b,M,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const p=Math.max(0,f.start),S=Math.min(c.count,f.start+f.count);for(let x=p,g=S;x<g;x+=3){const m=x,_=x+1,v=x+2;s=wr(this,a,e,n,u,h,l,m,_,v),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Ef(i,e,t,n,s,r,a,o){let c;if(e.side===mn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ii,o),c===null)return null;Er.copy(o),Er.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Er);return u<t.near||u>t.far?null:{distance:u,point:Er.clone(),object:i}}function wr(i,e,t,n,s,r,a,o,c,u){i.getVertexPosition(o,Mr),i.getVertexPosition(c,Sr),i.getVertexPosition(u,yr);const h=Ef(i,e,t,n,Mr,Sr,yr,jl);if(h){const l=new D;zn.getBarycoord(jl,Mr,Sr,yr,l),s&&(h.uv=zn.getInterpolatedAttribute(s,o,c,u,l,new oe)),r&&(h.uv1=zn.getInterpolatedAttribute(r,o,c,u,l,new oe)),a&&(h.normal=zn.getInterpolatedAttribute(a,o,c,u,l,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new D,materialIndex:0};zn.getNormal(Mr,Sr,yr,d.normal),h.face=d,h.barycoord=l}return h}class ua extends ln{constructor(e=null,t=1,n=1,s,r,a,o,c,u=Jt,h=Jt,l,d){super(null,a,o,c,u,h,s,r,l,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ec extends cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ki=new ht,tc=new ht,Tr=[],nc=new Bi,wf=new ht,Rs=new Et,Cs=new xs;class Tf extends Et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ec(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),nc.copy(e.boundingBox).applyMatrix4(Ki),this.boundingBox.union(nc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ki),Cs.copy(e.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Cs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(n),e.ray.intersectsSphere(Cs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),tc.multiplyMatrices(n,Ki),Rs.matrixWorld=tc,Rs.raycast(e,Tr);for(let a=0,o=Tr.length;a<o;a++){const c=Tr[a];c.instanceId=r,c.object=this,t.push(c)}Tr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ua(new Float32Array(s*this.count),s,this.count,il,Bn));const r=this.morphTexture.source.data.data;let a=0;for(let u=0;u<n.length;u++)a+=n[u];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wi=new xs,Af=new oe(.5,.5),Ar=new D;class Js{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],u=r[3],h=r[4],l=r[5],d=r[6],f=r[7],p=r[8],S=r[9],x=r[10],g=r[11],m=r[12],_=r[13],v=r[14],E=r[15];if(s[0].setComponents(u-a,f-h,g-p,E-m).normalize(),s[1].setComponents(u+a,f+h,g+p,E+m).normalize(),s[2].setComponents(u+o,f+l,g+S,E+_).normalize(),s[3].setComponents(u-o,f-l,g-S,E-_).normalize(),n)s[4].setComponents(c,d,x,v).normalize(),s[5].setComponents(u-c,f-d,g-x,E-v).normalize();else if(s[4].setComponents(u-c,f-d,g-x,E-v).normalize(),t===Gn)s[5].setComponents(u+c,f+d,g+x,E+v).normalize();else if(t===$s)s[5].setComponents(c,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wi)}intersectsSprite(e){wi.center.set(0,0,0);const t=Af.distanceTo(e.center);return wi.radius=.7071067811865476+t,wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ar.x=s.normal.x>0?e.max.x:e.min.x,Ar.y=s.normal.y>0?e.max.y:e.min.y,Ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ic=new ht;class ul{constructor(){this.coordinateSystem=Gn,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];ic.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Js),n[s].setFromProjectionMatrix(ic,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Js),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new ul().copy(this)}}class Rf extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sc=new ht,Go=new Eu,Rr=new xs,Cr=new D;class wu extends Ht{constructor(e=new Ct,t=new Rf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;sc.copy(s).invert(),Go.copy(e.ray).applyMatrix4(sc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,l=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,S=f;p<S;p++){const x=u.getX(p);Cr.fromBufferAttribute(l,x),rc(Cr,x,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,S=f;p<S;p++)Cr.fromBufferAttribute(l,p),rc(Cr,p,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rc(i,e,t,n,s,r,a){const o=Go.distanceSqToPoint(i);if(o<t){const c=new D;Go.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Tu extends ln{constructor(e=[],t=cs,n,s,r,a,o,c,u,h){super(e,t,n,s,r,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gs extends ln{constructor(e,t,n,s,r,a,o,c,u){super(e,t,n,s,r,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hs extends ln{constructor(e,t,n=$n,s,r,a,o=Jt,c=Jt,u,h=gi,l=1){if(h!==gi&&h!==mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:l};super(d,s,r,a,o,c,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ll(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Au extends hs{constructor(e,t=$n,n=cs,s,r,a=Jt,o=Jt,c,u=gi){const h={width:e,height:e,depth:1},l=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,u),this.image=l,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ru extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],u=[],h=[],l=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(l,2));function p(S,x,g,m,_,v,E,b,M,y,C){const A=v/M,L=E/y,I=v/2,N=E/2,P=b/2,z=M+1,k=y+1;let B=0,se=0;const X=new D;for(let Q=0;Q<k;Q++){const re=Q*L-N;for(let Pe=0;Pe<z;Pe++){const Ge=Pe*A-I;X[S]=Ge*m,X[x]=re*_,X[g]=P,u.push(X.x,X.y,X.z),X[S]=0,X[x]=0,X[g]=b>0?1:-1,h.push(X.x,X.y,X.z),l.push(Pe/M),l.push(1-Q/y),B+=1}}for(let Q=0;Q<y;Q++)for(let re=0;re<M;re++){const Pe=d+re+z*Q,Ge=d+re+z*(Q+1),Z=d+(re+1)+z*(Q+1),we=d+(re+1)+z*Q;c.push(Pe,Ge,we),c.push(Ge,Z,we),se+=6}o.addGroup(f,se,C),f+=se,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ha extends Ct{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],u=[],h=t/2,l=Math.PI/2*e,d=t,f=2*l+d,p=n*2+r,S=s+1,x=new D,g=new D;for(let m=0;m<=p;m++){let _=0,v=0,E=0,b=0;if(m<=n){const C=m/n,A=C*Math.PI/2;v=-h-e*Math.cos(A),E=e*Math.sin(A),b=-e*Math.cos(A),_=C*l}else if(m<=n+r){const C=(m-n)/r;v=-h+C*t,E=e,b=0,_=l+C*d}else{const C=(m-n-r)/n,A=C*Math.PI/2;v=h+e*Math.sin(A),E=e*Math.cos(A),b=e*Math.sin(A),_=l+d+C*l}const M=Math.max(0,Math.min(1,_/f));let y=0;m===0?y=.5/s:m===p&&(y=-.5/s);for(let C=0;C<=s;C++){const A=C/s,L=A*Math.PI*2,I=Math.sin(L),N=Math.cos(L);g.x=-E*N,g.y=v,g.z=E*I,o.push(g.x,g.y,g.z),x.set(-E*N,b,E*I),x.normalize(),c.push(x.x,x.y,x.z),u.push(A+y,M)}if(m>0){const C=(m-1)*S;for(let A=0;A<s;A++){const L=C+A,I=C+A+1,N=m*S+A,P=m*S+A+1;a.push(L,I,N),a.push(I,P,N)}}}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class on extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const h=[],l=[],d=[],f=[];let p=0;const S=[],x=n/2;let g=0;m(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function m(){const v=new D,E=new D;let b=0;const M=(t-e)/n;for(let y=0;y<=r;y++){const C=[],A=y/r,L=A*(t-e)+e;for(let I=0;I<=s;I++){const N=I/s,P=N*c+o,z=Math.sin(P),k=Math.cos(P);E.x=L*z,E.y=-A*n+x,E.z=L*k,l.push(E.x,E.y,E.z),v.set(z,M,k).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-A),C.push(p++)}S.push(C)}for(let y=0;y<s;y++)for(let C=0;C<r;C++){const A=S[C][y],L=S[C+1][y],I=S[C+1][y+1],N=S[C][y+1];(e>0||C!==0)&&(h.push(A,L,N),b+=3),(t>0||C!==r-1)&&(h.push(L,I,N),b+=3)}u.addGroup(g,b,0),g+=b}function _(v){const E=p,b=new oe,M=new D;let y=0;const C=v===!0?e:t,A=v===!0?1:-1;for(let I=1;I<=s;I++)l.push(0,x*A,0),d.push(0,A,0),f.push(.5,.5),p++;const L=p;for(let I=0;I<=s;I++){const P=I/s*c+o,z=Math.cos(P),k=Math.sin(P);M.x=C*k,M.y=x*A,M.z=C*z,l.push(M.x,M.y,M.z),d.push(0,A,0),b.x=z*.5+.5,b.y=k*.5*A+.5,f.push(b.x,b.y),p++}for(let I=0;I<s;I++){const N=E+I,P=L+I;v===!0?h.push(P,P+1,N):h.push(P+1,P,N),y+=3}u.addGroup(g,y,v===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ks extends on{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ks(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fa extends Ct{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),u(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(m){const _=new D,v=new D,E=new D;for(let b=0;b<t.length;b+=3)f(t[b+0],_),f(t[b+1],v),f(t[b+2],E),c(_,v,E,m)}function c(m,_,v,E){const b=E+1,M=[];for(let y=0;y<=b;y++){M[y]=[];const C=m.clone().lerp(v,y/b),A=_.clone().lerp(v,y/b),L=b-y;for(let I=0;I<=L;I++)I===0&&y===b?M[y][I]=C:M[y][I]=C.clone().lerp(A,I/L)}for(let y=0;y<b;y++)for(let C=0;C<2*(b-y)-1;C++){const A=Math.floor(C/2);C%2===0?(d(M[y][A+1]),d(M[y+1][A]),d(M[y][A])):(d(M[y][A+1]),d(M[y+1][A+1]),d(M[y+1][A]))}}function u(m){const _=new D;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(m),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function h(){const m=new D;for(let _=0;_<r.length;_+=3){m.x=r[_+0],m.y=r[_+1],m.z=r[_+2];const v=x(m)/2/Math.PI+.5,E=g(m)/Math.PI+.5;a.push(v,1-E)}p(),l()}function l(){for(let m=0;m<a.length;m+=6){const _=a[m+0],v=a[m+2],E=a[m+4],b=Math.max(_,v,E),M=Math.min(_,v,E);b>.9&&M<.1&&(_<.2&&(a[m+0]+=1),v<.2&&(a[m+2]+=1),E<.2&&(a[m+4]+=1))}}function d(m){r.push(m.x,m.y,m.z)}function f(m,_){const v=m*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function p(){const m=new D,_=new D,v=new D,E=new D,b=new oe,M=new oe,y=new oe;for(let C=0,A=0;C<r.length;C+=9,A+=6){m.set(r[C+0],r[C+1],r[C+2]),_.set(r[C+3],r[C+4],r[C+5]),v.set(r[C+6],r[C+7],r[C+8]),b.set(a[A+0],a[A+1]),M.set(a[A+2],a[A+3]),y.set(a[A+4],a[A+5]),E.copy(m).add(_).add(v).divideScalar(3);const L=x(E);S(b,A+0,m,L),S(M,A+2,_,L),S(y,A+4,v,L)}}function S(m,_,v,E){E<0&&m.x===1&&(a[_]=m.x-1),v.x===0&&v.z===0&&(a[_]=E/2/Math.PI+.5)}function x(m){return Math.atan2(m.z,-m.x)}function g(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.vertices,e.indices,e.radius,e.detail)}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,u;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),u=n[s]-a,u<0)o=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new oe:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],a=[],o=new D,c=new ht;for(let f=0;f<=e;f++){const p=f/e;s[f]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let u=Number.MAX_VALUE;const h=Math.abs(s[0].x),l=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),l<=u&&(u=l,n.set(0,1,0)),d<=u&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ot(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ot(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class hl extends Jn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),l=Math.sin(this.aRotation),d=c-this.aX,f=u-this.aY;c=d*h-f*l+this.aX,u=d*l+f*h+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Cf extends hl{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fl(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,u){s(a,o,u*(o-r),u*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,u,h,l){let d=(a-r)/u-(o-r)/(u+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+l)+(c-o)/l;d*=h,f*=h,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const ac=new D,oc=new D,Xa=new fl,qa=new fl,Ya=new fl;class da extends Jn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let u,h;this.closed||o>0?u=s[(o-1)%r]:(oc.subVectors(s[0],s[1]).add(s[0]),u=oc);const l=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ac.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ac),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(u.distanceToSquared(l),f),S=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);S<1e-4&&(S=1),p<1e-4&&(p=S),x<1e-4&&(x=S),Xa.initNonuniformCatmullRom(u.x,l.x,d.x,h.x,p,S,x),qa.initNonuniformCatmullRom(u.y,l.y,d.y,h.y,p,S,x),Ya.initNonuniformCatmullRom(u.z,l.z,d.z,h.z,p,S,x)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(u.x,l.x,d.x,h.x,this.tension),qa.initCatmullRom(u.y,l.y,d.y,h.y,this.tension),Ya.initCatmullRom(u.z,l.z,d.z,h.z,this.tension));return n.set(Xa.calc(c),qa.calc(c),Ya.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Pf(i,e){const t=1-i;return t*t*e}function Lf(i,e){return 2*(1-i)*i*e}function Df(i,e){return i*i*e}function Hs(i,e,t,n){return Pf(i,e)+Lf(i,t)+Df(i,n)}function If(i,e){const t=1-i;return t*t*t*e}function Uf(i,e){const t=1-i;return 3*t*t*i*e}function Nf(i,e){return 3*(1-i)*i*i*e}function Ff(i,e){return i*i*i*e}function ks(i,e,t,n,s){return If(i,e)+Uf(i,t)+Nf(i,n)+Ff(i,s)}class Cu extends Jn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ks(e,s.x,r.x,a.x,o.x),ks(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Of extends Jn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ks(e,s.x,r.x,a.x,o.x),ks(e,s.y,r.y,a.y,o.y),ks(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pu extends Jn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zf extends Jn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lu extends Jn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hs(e,s.x,r.x,a.x),Hs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Du extends Jn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hs(e,s.x,r.x,a.x),Hs(e,s.y,r.y,a.y),Hs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Iu extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],u=s[a],h=s[a>s.length-2?s.length-1:a+1],l=s[a>s.length-3?s.length-1:a+2];return n.set(lc(o,c.x,u.x,h.x,l.x),lc(o,c.y,u.y,h.y,l.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new oe().fromArray(s))}return this}}var aa=Object.freeze({__proto__:null,ArcCurve:Cf,CatmullRomCurve3:da,CubicBezierCurve:Cu,CubicBezierCurve3:Of,EllipseCurve:hl,LineCurve:Pu,LineCurve3:zf,QuadraticBezierCurve:Lu,QuadraticBezierCurve3:Du,SplineCurve:Iu});class Bf extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let u=0;u<c.length;u++){const h=c[u];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new aa[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class cc extends Bf{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Pu(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Lu(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Cu(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Iu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const u=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+u,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const u=new hl(e,t,n,s,r,a,o,c);if(this.curves.length>0){const l=u.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(u);const h=u.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fs extends cc{constructor(e){super(e),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new cc().fromJSON(s))}return this}}function Gf(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Uu(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,u;if(n&&(r=Xf(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,l=c;for(let d=t;d<s;d+=t){const f=i[d],p=i[d+1];f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>l&&(l=p)}u=Math.max(h-o,l-c),u=u!==0?32767/u:0}return Qs(r,a,t,o,c,u,0),a}function Uu(i,e,t,n,s){let r;if(s===n0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=uc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=uc(a/n|0,i[a],i[a+1],r);return r&&ds(r,r.next)&&(er(r),r=r.next),r}function Fi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ds(t,t.next)||Dt(t.prev,t,t.next)===0)){if(er(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qs(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Jf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,u=i.next;if(r?kf(i,n,s,r):Hf(i)){e.push(c.i,i.i,u.i),er(i),i=u.next,o=u.next;continue}if(i=u,i===o){a?a===1?(i=Vf(Fi(i),e),Qs(i,e,t,n,s,r,2)):a===2&&Wf(i,e,t,n,s,r):Qs(Fi(i),e,t,n,s,r,1);break}}}function Hf(i){const e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,u=n.y,h=Math.min(s,r,a),l=Math.min(o,c,u),d=Math.max(s,r,a),f=Math.max(o,c,u);let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=l&&p.y<=f&&Ns(s,o,r,c,a,u,p.x,p.y)&&Dt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kf(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;const o=s.x,c=r.x,u=a.x,h=s.y,l=r.y,d=a.y,f=Math.min(o,c,u),p=Math.min(h,l,d),S=Math.max(o,c,u),x=Math.max(h,l,d),g=Ho(f,p,e,t,n),m=Ho(S,x,e,t,n);let _=i.prevZ,v=i.nextZ;for(;_&&_.z>=g&&v&&v.z<=m;){if(_.x>=f&&_.x<=S&&_.y>=p&&_.y<=x&&_!==s&&_!==a&&Ns(o,h,c,l,u,d,_.x,_.y)&&Dt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=S&&v.y>=p&&v.y<=x&&v!==s&&v!==a&&Ns(o,h,c,l,u,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=g;){if(_.x>=f&&_.x<=S&&_.y>=p&&_.y<=x&&_!==s&&_!==a&&Ns(o,h,c,l,u,d,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=m;){if(v.x>=f&&v.x<=S&&v.y>=p&&v.y<=x&&v!==s&&v!==a&&Ns(o,h,c,l,u,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Vf(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ds(n,s)&&Fu(n,t,t.next,s)&&js(n,s)&&js(s,n)&&(e.push(n.i,t.i,s.i),er(t),er(t.next),t=i=s),t=t.next}while(t!==i);return Fi(t)}function Wf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jf(a,o)){let c=Ou(a,o);a=Fi(a,a.next),c=Fi(c,c.next),Qs(a,e,t,n,s,r,0),Qs(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Xf(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,u=Uu(i,o,c,n,!1);u===u.next&&(u.steiner=!0),s.push(Qf(u))}s.sort(qf);for(let r=0;r<s.length;r++)t=Yf(s[r],t);return t}function qf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Yf(i,e){const t=Zf(i,e);if(!t)return e;const n=Ou(t,i);return Fi(n,n.next),Fi(t,t.next)}function Zf(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(ds(i,t))return t;do{if(ds(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const l=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(l<=n&&l>r&&(r=l,a=t.x<t.next.x?t:t.next,l===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,u=a.y;let h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Nu(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){const l=Math.abs(s-t.y)/(n-t.x);js(t,i)&&(l<h||l===h&&(t.x>a.x||t.x===a.x&&$f(a,t)))&&(a=t,h=l)}t=t.next}while(t!==o);return a}function $f(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function Jf(i,e,t,n){let s=i;do s.z===0&&(s.z=Ho(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kf(s)}function Kf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let u=0;u<t&&(o++,a=a.nextZ,!!a);u++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ho(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Qf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Ns(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Nu(i,e,t,n,s,r,a,o)}function jf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!e0(i,e)&&(js(i,e)&&js(e,i)&&t0(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||ds(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ds(i,e){return i.x===e.x&&i.y===e.y}function Fu(i,e,t,n){const s=Lr(Dt(i,e,t)),r=Lr(Dt(i,e,n)),a=Lr(Dt(t,n,i)),o=Lr(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&Pr(i,t,e)||r===0&&Pr(i,n,e)||a===0&&Pr(t,i,n)||o===0&&Pr(t,e,n))}function Pr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Lr(i){return i>0?1:i<0?-1:0}function e0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Fu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function js(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function t0(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ou(i,e){const t=ko(i.i,i.x,i.y),n=ko(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uc(i,e,t,n){const s=ko(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ko(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function n0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class i0{static triangulate(e,t,n=2){return Gf(e,t,n)}}class ss{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ss.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];hc(e),fc(n,e);let a=e.length;t.forEach(hc);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,fc(n,t[c]);const o=i0.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function hc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ir extends Ct{constructor(e=new fs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a(u)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function a(o){const c=[],u=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,l=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:s0;let _,v=!1,E,b,M,y;if(g){_=g.getSpacedPoints(h),v=!0,d=!1;const te=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,te),b=new D,M=new D,y=new D}d||(x=0,f=0,p=0,S=0);const C=o.extractPoints(u);let A=C.shape;const L=C.holes;if(!ss.isClockWise(A)){A=A.reverse();for(let te=0,G=L.length;te<G;te++){const ae=L[te];ss.isClockWise(ae)&&(L[te]=ae.reverse())}}function N(te){const ae=10000000000000001e-36;let fe=te[0];for(let pe=1;pe<=te.length;pe++){const He=pe%te.length,Ue=te[He],Xe=Ue.x-fe.x,$e=Ue.y-fe.y,rt=Xe*Xe+$e*$e,O=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(fe.x),Math.abs(fe.y)),Ft=ae*O*O;if(rt<=Ft){te.splice(He,1),pe--;continue}fe=Ue}}N(A),L.forEach(N);const P=L.length,z=A;for(let te=0;te<P;te++){const G=L[te];A=A.concat(G)}function k(te,G,ae){return G||mt("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(G,ae)}const B=A.length;function se(te,G,ae){let fe,pe,He;const Ue=te.x-G.x,Xe=te.y-G.y,$e=ae.x-te.x,rt=ae.y-te.y,O=Ue*Ue+Xe*Xe,Ft=Ue*rt-Xe*$e;if(Math.abs(Ft)>Number.EPSILON){const at=Math.sqrt(O),yt=Math.sqrt($e*$e+rt*rt),ye=G.x-Xe/at,It=G.y+Ue/at,We=ae.x-rt/yt,qe=ae.y+$e/yt,R=((We-ye)*rt-(qe-It)*$e)/(Ue*rt-Xe*$e);fe=ye+Ue*R-te.x,pe=It+Xe*R-te.y;const w=fe*fe+pe*pe;if(w<=2)return new oe(fe,pe);He=Math.sqrt(w/2)}else{let at=!1;Ue>Number.EPSILON?$e>Number.EPSILON&&(at=!0):Ue<-Number.EPSILON?$e<-Number.EPSILON&&(at=!0):Math.sign(Xe)===Math.sign(rt)&&(at=!0),at?(fe=-Xe,pe=Ue,He=Math.sqrt(O)):(fe=Ue,pe=Xe,He=Math.sqrt(O/2))}return new oe(fe/He,pe/He)}const X=[];for(let te=0,G=z.length,ae=G-1,fe=te+1;te<G;te++,ae++,fe++)ae===G&&(ae=0),fe===G&&(fe=0),X[te]=se(z[te],z[ae],z[fe]);const Q=[];let re,Pe=X.concat();for(let te=0,G=P;te<G;te++){const ae=L[te];re=[];for(let fe=0,pe=ae.length,He=pe-1,Ue=fe+1;fe<pe;fe++,He++,Ue++)He===pe&&(He=0),Ue===pe&&(Ue=0),re[fe]=se(ae[fe],ae[He],ae[Ue]);Q.push(re),Pe=Pe.concat(re)}let Ge;if(x===0)Ge=ss.triangulateShape(z,L);else{const te=[],G=[];for(let ae=0;ae<x;ae++){const fe=ae/x,pe=f*Math.cos(fe*Math.PI/2),He=p*Math.sin(fe*Math.PI/2)+S;for(let Ue=0,Xe=z.length;Ue<Xe;Ue++){const $e=k(z[Ue],X[Ue],He);ze($e.x,$e.y,-pe),fe===0&&te.push($e)}for(let Ue=0,Xe=P;Ue<Xe;Ue++){const $e=L[Ue];re=Q[Ue];const rt=[];for(let O=0,Ft=$e.length;O<Ft;O++){const at=k($e[O],re[O],He);ze(at.x,at.y,-pe),fe===0&&rt.push(at)}fe===0&&G.push(rt)}}Ge=ss.triangulateShape(te,G)}const Z=Ge.length,we=p+S;for(let te=0;te<B;te++){const G=d?k(A[te],Pe[te],we):A[te];v?(M.copy(E.normals[0]).multiplyScalar(G.x),b.copy(E.binormals[0]).multiplyScalar(G.y),y.copy(_[0]).add(M).add(b),ze(y.x,y.y,y.z)):ze(G.x,G.y,0)}for(let te=1;te<=h;te++)for(let G=0;G<B;G++){const ae=d?k(A[G],Pe[G],we):A[G];v?(M.copy(E.normals[te]).multiplyScalar(ae.x),b.copy(E.binormals[te]).multiplyScalar(ae.y),y.copy(_[te]).add(M).add(b),ze(y.x,y.y,y.z)):ze(ae.x,ae.y,l/h*te)}for(let te=x-1;te>=0;te--){const G=te/x,ae=f*Math.cos(G*Math.PI/2),fe=p*Math.sin(G*Math.PI/2)+S;for(let pe=0,He=z.length;pe<He;pe++){const Ue=k(z[pe],X[pe],fe);ze(Ue.x,Ue.y,l+ae)}for(let pe=0,He=L.length;pe<He;pe++){const Ue=L[pe];re=Q[pe];for(let Xe=0,$e=Ue.length;Xe<$e;Xe++){const rt=k(Ue[Xe],re[Xe],fe);v?ze(rt.x,rt.y+_[h-1].y,_[h-1].x+ae):ze(rt.x,rt.y,l+ae)}}}Re(),Fe();function Re(){const te=s.length/3;if(d){let G=0,ae=B*G;for(let fe=0;fe<Z;fe++){const pe=Ge[fe];St(pe[2]+ae,pe[1]+ae,pe[0]+ae)}G=h+x*2,ae=B*G;for(let fe=0;fe<Z;fe++){const pe=Ge[fe];St(pe[0]+ae,pe[1]+ae,pe[2]+ae)}}else{for(let G=0;G<Z;G++){const ae=Ge[G];St(ae[2],ae[1],ae[0])}for(let G=0;G<Z;G++){const ae=Ge[G];St(ae[0]+B*h,ae[1]+B*h,ae[2]+B*h)}}n.addGroup(te,s.length/3-te,0)}function Fe(){const te=s.length/3;let G=0;he(z,G),G+=z.length;for(let ae=0,fe=L.length;ae<fe;ae++){const pe=L[ae];he(pe,G),G+=pe.length}n.addGroup(te,s.length/3-te,1)}function he(te,G){let ae=te.length;for(;--ae>=0;){const fe=ae;let pe=ae-1;pe<0&&(pe=te.length-1);for(let He=0,Ue=h+x*2;He<Ue;He++){const Xe=B*He,$e=B*(He+1),rt=G+fe+Xe,O=G+pe+Xe,Ft=G+pe+$e,at=G+fe+$e;ke(rt,O,Ft,at)}}}function ze(te,G,ae){c.push(te),c.push(G),c.push(ae)}function St(te,G,ae){Je(te),Je(G),Je(ae);const fe=s.length/3,pe=m.generateTopUV(n,s,fe-3,fe-2,fe-1);et(pe[0]),et(pe[1]),et(pe[2])}function ke(te,G,ae,fe){Je(te),Je(G),Je(fe),Je(G),Je(ae),Je(fe);const pe=s.length/3,He=m.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);et(He[0]),et(He[1]),et(He[3]),et(He[1]),et(He[2]),et(He[3])}function Je(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function et(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return r0(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new aa[s.type]().fromJSON(s)),new ir(n,e.options)}}const s0={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],u=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,c),new oe(u,h)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],u=e[n*3],h=e[n*3+1],l=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],S=e[r*3],x=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-u)?[new oe(a,1-c),new oe(u,1-l),new oe(d,1-p),new oe(S,1-g)]:[new oe(o,1-c),new oe(h,1-l),new oe(f,1-p),new oe(x,1-g)]}};function r0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class dl extends fa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new dl(e.radius,e.detail)}}class pl extends Ct{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],u=[],h=1/t,l=new D,d=new oe,f=new D,p=new D,S=new D;let x=0,g=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:x=e[m+1].x-e[m].x,g=e[m+1].y-e[m].y,f.x=g*1,f.y=-x,f.z=g*0,S.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:S.normalize(),c.push(S.x,S.y,S.z);break;default:x=e[m+1].x-e[m].x,g=e[m+1].y-e[m].y,f.x=g*1,f.y=-x,f.z=g*0,p.copy(f),f.x+=S.x,f.y+=S.y,f.z+=S.z,f.normalize(),c.push(f.x,f.y,f.z),S.copy(p)}for(let m=0;m<=t;m++){const _=n+m*h*s,v=Math.sin(_),E=Math.cos(_);for(let b=0;b<=e.length-1;b++){l.x=e[b].x*v,l.y=e[b].y,l.z=e[b].x*E,a.push(l.x,l.y,l.z),d.x=m/t,d.y=b/(e.length-1),o.push(d.x,d.y);const M=c[3*b+0]*v,y=c[3*b+1],C=c[3*b+0]*E;u.push(M,y,C)}}for(let m=0;m<t;m++)for(let _=0;_<e.length-1;_++){const v=_+m*e.length,E=v,b=v+e.length,M=v+e.length+1,y=v+1;r.push(E,b,y),r.push(M,y,b)}this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("uv",new Ze(o,2)),this.setAttribute("normal",new Ze(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.points,e.segments,e.phiStart,e.phiLength)}}class as extends fa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new as(e.radius,e.detail)}}class vs extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),u=o+1,h=c+1,l=e/o,d=t/c,f=[],p=[],S=[],x=[];for(let g=0;g<h;g++){const m=g*d-a;for(let _=0;_<u;_++){const v=_*l-r;p.push(v,-m,0),S.push(0,0,1),x.push(_/o),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<o;m++){const _=m+u*g,v=m+u*(g+1),E=m+1+u*(g+1),b=m+1+u*g;f.push(_,v,b),f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class xi extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const h=[],l=new D,d=new D,f=[],p=[],S=[],x=[];for(let g=0;g<=n;g++){const m=[],_=g/n,v=a+_*o,E=e*Math.cos(v),b=Math.sqrt(e*e-E*E);let M=0;g===0&&a===0?M=.5/t:g===n&&c===Math.PI&&(M=-.5/t);for(let y=0;y<=t;y++){const C=y/t,A=s+C*r;l.x=-b*Math.cos(A),l.y=E,l.z=b*Math.sin(A),p.push(l.x,l.y,l.z),d.copy(l).normalize(),S.push(d.x,d.y,d.z),x.push(C+M,1-_),m.push(u++)}h.push(m)}for(let g=0;g<n;g++)for(let m=0;m<t;m++){const _=h[g][m+1],v=h[g][m],E=h[g+1][m],b=h[g+1][m+1];(g!==0||a>0)&&f.push(_,v,b),(g!==n-1||c<Math.PI)&&f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(S,3)),this.setAttribute("uv",new Ze(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pa extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],u=[],h=[],l=[],d=new D,f=new D,p=new D;for(let S=0;S<=n;S++){const x=a+S/n*o;for(let g=0;g<=s;g++){const m=g/s*r;f.x=(e+t*Math.cos(x))*Math.cos(m),f.y=(e+t*Math.cos(x))*Math.sin(m),f.z=t*Math.sin(x),u.push(f.x,f.y,f.z),d.x=e*Math.cos(m),d.y=e*Math.sin(m),p.subVectors(f,d).normalize(),h.push(p.x,p.y,p.z),l.push(g/s),l.push(S/n)}}for(let S=1;S<=n;S++)for(let x=1;x<=s;x++){const g=(s+1)*S+x-1,m=(s+1)*(S-1)+x-1,_=(s+1)*(S-1)+x,v=(s+1)*S+x;c.push(g,m,v),c.push(m,_,v)}this.setIndex(c),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class ml extends Ct{constructor(e=new Du(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,c=new D,u=new oe;let h=new D;const l=[],d=[],f=[],p=[];S(),this.setIndex(p),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(f,2));function S(){for(let _=0;_<t;_++)x(_);x(r===!1?t:0),m(),g()}function x(_){h=e.getPointAt(_/t,h);const v=a.normals[_],E=a.binormals[_];for(let b=0;b<=s;b++){const M=b/s*Math.PI*2,y=Math.sin(M),C=-Math.cos(M);c.x=C*v.x+y*E.x,c.y=C*v.y+y*E.y,c.z=C*v.z+y*E.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,l.push(o.x,o.y,o.z)}}function g(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){const E=(s+1)*(_-1)+(v-1),b=(s+1)*_+(v-1),M=(s+1)*_+v,y=(s+1)*(_-1)+v;p.push(E,b,y),p.push(b,M,y)}}function m(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)u.x=_/t,u.y=v/s,f.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ml(new aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(dc(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(dc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=ps(i[t]);for(const s in n)e[s]=n[s]}return e}function dc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function a0(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const oa={clone:ps,merge:fn};var o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new je().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class c0 extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tr extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class u0 extends Gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ta,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class h0 extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class f0 extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bu extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Za=new ht,pc=new D,mc=new D;class Gu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(pc),mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Za,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===$s||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),t.multiply(Za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dr=new D,Ir=new gn,Vn=new D;class Hu extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dr,Ir,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ir,Vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Dr,Ir,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ir,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fi=new D,gc=new oe,xc=new oe;class _n extends Hu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,gc,xc),t.subVectors(xc,gc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ba*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/u,s*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class d0 extends Gu{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ra*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class ku extends Bu{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new d0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class p0 extends Gu{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class gl extends Bu{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new p0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Vu extends Hu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qi=-90,ji=1;class Vo extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Qi,ji,e,t);s.layers=this.layers,this.add(s);const r=new _n(Qi,ji,e,t);r.layers=this.layers,this.add(r);const a=new _n(Qi,ji,e,t);a.layers=this.layers,this.add(a);const o=new _n(Qi,ji,e,t);o.layers=this.layers,this.add(o);const c=new _n(Qi,ji,e,t);c.layers=this.layers,this.add(c);const u=new _n(Qi,ji,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const u of t)this.remove(u);if(e===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,u,h]=this.children,l=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const S=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=S,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(l,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class m0 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class g0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=x0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function x0(){this._document.hidden===!1&&this.reset()}function _c(i,e,t,n){const s=_0(n);switch(t){case fu:return i*e;case il:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case Ni:return i*e*2/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case du:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:case fo:return Math.max(i,16)*Math.max(e,8)/4;case co:case ho:return Math.max(i,8)*Math.max(e,8)/2;case po:case mo:case xo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:case jr:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Do:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Uo:case No:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oo:case zo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ea:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _0(i){switch(i){case vn:case lu:return{byteLength:1,components:1};case Zs:case cu:case Qt:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case $n:case el:case Bn:return{byteLength:4,components:1};case uu:case hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);function Wu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function v0(i){const e=new WeakMap;function t(o,c){const u=o.array,h=o.usage,l=u.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,u,h),o.onUploadCallback();let f;if(u instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)f=i.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=i.SHORT;else if(u instanceof Uint32Array)f=i.UNSIGNED_INT;else if(u instanceof Int32Array)f=i.INT;else if(u instanceof Int8Array)f=i.BYTE;else if(u instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,u){const h=c.array,l=c.updateRanges;if(i.bindBuffer(u,o),l.length===0)i.bufferSubData(u,0,h);else{l.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<l.length;f++){const p=l[d],S=l[f];S.start<=p.start+p.count+1?p.count=Math.max(p.count,S.start+S.count-p.start):(++d,l[d]=S)}l.length=d+1;for(let f=0,p=l.length;f<p;f++){const S=l[f];i.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:s,remove:r,update:a}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S0=`#ifdef USE_ALPHAHASH
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
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,w0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
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
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,I0=`#ifdef USE_IRIDESCENCE
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
#endif`,U0=`#ifdef USE_BUMPMAP
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,V0=`#define PI 3.141592653589793
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
} // validated`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K0=`#ifdef USE_ENVMAP
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
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ad=`#ifdef USE_GRADIENTMAP
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
}`,od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hd=`#ifdef USE_ENVMAP
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
#endif`,fd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gd=`PhysicalMaterial material;
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
#endif`,xd=`uniform sampler2D dfgLUT;
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
}`,_d=`
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
#endif`,vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,yd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Td=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cd=`#if defined( USE_POINTS_UV )
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
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ld=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Id=`#if defined( USE_MORPHCOLORS )
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
#endif`,Ud=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nd=`#ifdef USE_MORPHTARGETS
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
#endif`,Fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
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
#endif`,Vd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$d=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ep=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sp=`float getShadowMask() {
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
}`,rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mp=`uniform sampler2D t2D;
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform float backgroundBlurriness;
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Tp=`#if DEPTH_PACKING == 3200
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
}`,Ap=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#define LAMBERT
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
}`,Fp=`#define LAMBERT
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
}`,Op=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,Bp=`#define NORMAL
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
}`,Gp=`#define NORMAL
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
}`,Hp=`#define PHONG
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
}`,kp=`#define PHONG
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
}`,Vp=`#define STANDARD
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define TOON
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
}`,qp=`#define TOON
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
}`,Yp=`uniform float size;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,$p=`#include <common>
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
}`,Jp=`uniform vec3 color;
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
}`,Kp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:M0,alphahash_pars_fragment:S0,alphamap_fragment:y0,alphamap_pars_fragment:b0,alphatest_fragment:E0,alphatest_pars_fragment:w0,aomap_fragment:T0,aomap_pars_fragment:A0,batching_pars_vertex:R0,batching_vertex:C0,begin_vertex:P0,beginnormal_vertex:L0,bsdfs:D0,iridescence_fragment:I0,bumpmap_pars_fragment:U0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:F0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:z0,color_fragment:B0,color_pars_fragment:G0,color_pars_vertex:H0,color_vertex:k0,common:V0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:Y0,emissivemap_pars_fragment:Z0,colorspace_fragment:$0,colorspace_pars_fragment:J0,envmap_fragment:K0,envmap_common_pars_fragment:Q0,envmap_pars_fragment:j0,envmap_pars_vertex:ed,envmap_physical_pars_fragment:hd,envmap_vertex:td,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:ad,lightmap_pars_fragment:od,lights_lambert_fragment:ld,lights_lambert_pars_fragment:cd,lights_pars_begin:ud,lights_toon_fragment:fd,lights_toon_pars_fragment:dd,lights_phong_fragment:pd,lights_phong_pars_fragment:md,lights_physical_fragment:gd,lights_physical_pars_fragment:xd,lights_fragment_begin:_d,lights_fragment_maps:vd,lights_fragment_end:Md,lightprobes_pars_fragment:Sd,logdepthbuf_fragment:yd,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:Ed,logdepthbuf_vertex:wd,map_fragment:Td,map_pars_fragment:Ad,map_particle_fragment:Rd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Ld,morphinstance_vertex:Dd,morphcolor_vertex:Id,morphnormal_vertex:Ud,morphtarget_pars_vertex:Nd,morphtarget_vertex:Fd,normal_fragment_begin:Od,normal_fragment_maps:zd,normal_pars_fragment:Bd,normal_pars_vertex:Gd,normal_vertex:Hd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Vd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:Zd,premultiplied_alpha_fragment:$d,project_vertex:Jd,dithering_fragment:Kd,dithering_pars_fragment:Qd,roughnessmap_fragment:jd,roughnessmap_pars_fragment:ep,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:sp,skinbase_vertex:rp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:up,tonemapping_fragment:hp,tonemapping_pars_fragment:fp,transmission_fragment:dp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:xp,worldpos_vertex:_p,background_vert:vp,background_frag:Mp,backgroundCube_vert:Sp,backgroundCube_frag:yp,cube_vert:bp,cube_frag:Ep,depth_vert:wp,depth_frag:Tp,distance_vert:Ap,distance_frag:Rp,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Lp,linedashed_frag:Dp,meshbasic_vert:Ip,meshbasic_frag:Up,meshlambert_vert:Np,meshlambert_frag:Fp,meshmatcap_vert:Op,meshmatcap_frag:zp,meshnormal_vert:Bp,meshnormal_frag:Gp,meshphong_vert:Hp,meshphong_frag:kp,meshphysical_vert:Vp,meshphysical_frag:Wp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:Yp,points_frag:Zp,shadow_vert:$p,shadow_frag:Jp,sprite_vert:Kp,sprite_frag:Qp},Ae={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Xn={basic:{uniforms:fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:fn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:fn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:fn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Oe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:fn([Ae.points,Ae.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:fn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:fn([Ae.common,Ae.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:fn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:fn([Ae.sprite,Ae.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:fn([Ae.common,Ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:fn([Ae.lights,Ae.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Xn.physical={uniforms:fn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ur={r:0,b:0,g:0},jp=new ht,Xu=new je;Xu.set(-1,0,0,0,1,0,0,0,1);function em(i,e,t,n,s,r){const a=new Oe(0);let o=s===!0?0:1,c,u,h=null,l=0,d=null;function f(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const v=m.backgroundBlurriness>0;_=e.get(_,v)}return _}function p(m){let _=!1;const v=f(m);v===null?x(a,o):v&&v.isColor&&(x(v,1),_=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(m,_){const v=f(_);v&&v.isCubeTexture?(u===void 0&&(u=new Et(new _i(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:ps(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jp.makeRotationFromEuler(_.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Xu),u.material.toneMapped=ut.getTransfer(v.colorSpace)!==vt,(h!==v||l!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,l=v.version,d=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Et(new vs(2,2),new Gt({name:"BackgroundMaterial",uniforms:ps(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||l!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,l=v.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function x(m,_){m.getRGB(Ur,zu(i)),t.buffers.color.setClear(Ur.r,Ur.g,Ur.b,_,r)}function g(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),o=_,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,x(a,o)},render:p,addToRenderList:S,dispose:g}}function tm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(L,I,N,P,z){let k=!1;const B=l(L,P,N,I);r!==B&&(r=B,u(r.object)),k=f(L,P,N,z),k&&p(L,P,N,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(L,I,N,P),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function u(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function l(L,I,N,P){const z=P.wireframe===!0;let k=n[I.id];k===void 0&&(k={},n[I.id]=k);const B=L.isInstancedMesh===!0?L.id:0;let se=k[B];se===void 0&&(se={},k[B]=se);let X=se[N.id];X===void 0&&(X={},se[N.id]=X);let Q=X[z];return Q===void 0&&(Q=d(c()),X[z]=Q),Q}function d(L){const I=[],N=[],P=[];for(let z=0;z<t;z++)I[z]=0,N[z]=0,P[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,I,N,P){const z=r.attributes,k=I.attributes;let B=0;const se=N.getAttributes();for(const X in se)if(se[X].location>=0){const re=z[X];let Pe=k[X];if(Pe===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Pe=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Pe=L.instanceColor)),re===void 0||re.attribute!==Pe||Pe&&re.data!==Pe.data)return!0;B++}return r.attributesNum!==B||r.index!==P}function p(L,I,N,P){const z={},k=I.attributes;let B=0;const se=N.getAttributes();for(const X in se)if(se[X].location>=0){let re=k[X];re===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(re=L.instanceColor));const Pe={};Pe.attribute=re,re&&re.data&&(Pe.data=re.data),z[X]=Pe,B++}r.attributes=z,r.attributesNum=B,r.index=P}function S(){const L=r.newAttributes;for(let I=0,N=L.length;I<N;I++)L[I]=0}function x(L){g(L,0)}function g(L,I){const N=r.newAttributes,P=r.enabledAttributes,z=r.attributeDivisors;N[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),z[L]!==I&&(i.vertexAttribDivisor(L,I),z[L]=I)}function m(){const L=r.newAttributes,I=r.enabledAttributes;for(let N=0,P=I.length;N<P;N++)I[N]!==L[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function _(L,I,N,P,z,k,B){B===!0?i.vertexAttribIPointer(L,I,N,z,k):i.vertexAttribPointer(L,I,N,P,z,k)}function v(L,I,N,P){S();const z=P.attributes,k=N.getAttributes(),B=I.defaultAttributeValues;for(const se in k){const X=k[se];if(X.location>=0){let Q=z[se];if(Q===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const re=Q.normalized,Pe=Q.itemSize,Ge=e.get(Q);if(Ge===void 0)continue;const Z=Ge.buffer,we=Ge.type,Re=Ge.bytesPerElement,Fe=we===i.INT||we===i.UNSIGNED_INT||Q.gpuType===el;if(Q.isInterleavedBufferAttribute){const he=Q.data,ze=he.isInterleavedBuffer===!0?he.stride:he.itemSize,St=Q.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let ke=0;ke<X.locationSize;ke++)g(X.location+ke,he.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<X.locationSize;ke++)x(X.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let ke=0;ke<X.locationSize;ke++)_(X.location+ke,Pe/X.locationSize,we,re,ze*Re,(St+Pe/X.locationSize*ke)*Re,Fe)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)g(X.location+he,Q.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<X.locationSize;he++)x(X.location+he);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let he=0;he<X.locationSize;he++)_(X.location+he,Pe/X.locationSize,we,re,Pe*Re,Pe/X.locationSize*he*Re,Fe)}}else if(B!==void 0){const re=B[se];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(X.location,re);break;case 3:i.vertexAttrib3fv(X.location,re);break;case 4:i.vertexAttrib4fv(X.location,re);break;default:i.vertexAttrib1fv(X.location,re)}}}}m()}function E(){C();for(const L in n){const I=n[L];for(const N in I){const P=I[N];for(const z in P){const k=P[z];for(const B in k)h(k[B].object),delete k[B];delete P[z]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const I=n[L.id];for(const N in I){const P=I[N];for(const z in P){const k=P[z];for(const B in k)h(k[B].object),delete k[B];delete P[z]}}delete n[L.id]}function M(L){for(const I in n){const N=n[I];for(const P in N){const z=N[P];if(z[L.id]===void 0)continue;const k=z[L.id];for(const B in k)h(k[B].object),delete k[B];delete z[L.id]}}}function y(L){for(const I in n){const N=n[I],P=L.isInstancedMesh===!0?L.id:0,z=N[P];if(z!==void 0){for(const k in z){const B=z[k];for(const se in B)h(B[se].object),delete B[se];delete z[k]}delete N[P],Object.keys(N).length===0&&delete n[I]}}}function C(){A(),a=!0,r!==s&&(r=s,u(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:M,initAttributes:S,enableAttribute:x,disableUnusedAttributes:m}}function nm(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let f=0;f<h;f++)d+=u[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function im(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(M){return!(M!==Ln&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const y=M===Qt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==vn&&M!==Bn&&!y&&n.convert(M)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=c(u);h!==u&&(Ye("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&l===!1;t.reversedDepthBuffer===!0&&l===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&l===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:l,maxTextures:f,maxVertexTextures:p,maxTextureSize:S,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:v,maxSamples:E,samples:b}}function sm(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new pi,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,d){const f=l.length!==0||d||n!==0||s;return s=d,n=l.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,d){t=h(l,d,0)},this.setState=function(l,d,f){const p=l.clippingPlanes,S=l.clipIntersection,x=l.clipShadows,g=i.get(l);if(!s||p===null||p.length===0||r&&!x)r?h(null):u();else{const m=r?0:n,_=m*4;let v=g.clippingState||null;c.value=v,v=h(p,d,_,f);for(let E=0;E!==_;++E)v[E]=t[E];g.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=m}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(l,d,f,p){const S=l!==null?l.length:0;let x=null;if(S!==0){if(x=c.value,p!==!0||x===null){const g=f+S*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<g)&&(x=new Float32Array(g));for(let _=0,v=f;_!==S;++_,v+=4)a.copy(l[_]).applyMatrix4(m,o),a.normal.toArray(x,v),x[v+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}class xl extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Tu(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _i(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Li});r.uniforms.tEquirect.value=t;const a=new Et(s,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=dn),new Vo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const vc=256,rm=3,am=20,qu=256,Yu=16,om=3,lm=new D,cm=new Oe;class nr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vo(1,10,null),this._boxMesh=new Et(new _i(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=lm}=r,c=this._renderer;this._setSize(a);const u=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);const l=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,p=c.autoClearStencil,S=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,S===null&&(e.background=c.getClearColor(cm));const x=new Vo(n,s,h);return x.position.copy(o),x.update(c,e),c.autoClear=l,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=p,e.background=S,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vc,tf(e))}_fromTexture(e,t){e.mapping===cs||e.mapping===Ys?this._setSize(e.image.length===0?vc:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Mc(e,!1,!1),n=Math.log2(e)-rm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Mc(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===cs||e.mapping===Ys?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Sc()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=um(),this._integrationMaterial=hm());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Yu);for(let a=0;a<=n;a++){const o=nr.lodToRoughness(a,n);if(a>n-om)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(qu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=fm());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function Mc(i,e,t){return new xl(i,{minFilter:si,generateMipmaps:e,type:Qt,colorSpace:na,depthBuffer:t})}function sr(i,e,t){return new Gt({name:i,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:mn,blending:Li,depthTest:!1,depthWrite:!1})}function um(){return sr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qu}u

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
	`)}function hm(){return sr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yu}},`

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
	`)}function fm(){return sr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${am}
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
	`)}function Sc(){return sr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function yc(){return sr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dm(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===va||f===Ma)if(e.has(d)){const p=e.get(d).texture;return o(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const S=new xl(p.height);return S.fromEquirectangularTexture(i,d),e.set(d,S),d.addEventListener("dispose",u),o(S.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,p=f===va||f===Ma,S=f===cs||f===Ys;if(p||S){let x=t.get(d);const g=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new nr(i)),x=p?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const m=d.image;return p&&m&&m.height>0||S&&m&&c(m)?(n===null&&(n=new nr(i)),x=p?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",h),x.texture):null}}}return d}function o(d,f){return f===va?d.mapping=cs:f===Ma&&(d.mapping=Ys),d}function c(d){let f=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&f++;return f===p}function u(d){const f=d.target;f.removeEventListener("dispose",u);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:l}}function pm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&qr("WebGLRenderer: "+n+" extension not supported."),s}}}function mm(i,e,t,n){const s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){c(p.target)}function c(p){p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);const S=r.get(p);S&&(e.remove(S),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function u(p,S){return s[S.id]!==void 0||(S.addEventListener("dispose",o),s[S.id]=new WeakRef(S),a.register(S,S.id,S),t.memory.geometries++),S}function h(p){const S=p.attributes;for(const x in S)e.update(S[x],i.ARRAY_BUFFER)}function l(p){const S=p.index,x=p.attributes.position;let g=0;if(x===void 0)return;const m=S!==null?S.array.length:x.array.length/3-1,_=x.count>=65535?bu:yu,v=new _(Math.ceil(m/3)*6,1),E=v.array;if(S!==null){const M=S.array;g=S.version;for(let y=0,C=0;y<m;y+=3){const A=M[y+0],L=M[y+1],I=M[y+2];E[C++]=A,E[C++]=L,E[C++]=L,E[C++]=I,E[C++]=I,E[C++]=A}}else{g=x.version;for(let M=0,y=0;M<m;M+=3){const C=M+0,A=M+1,L=M+2;E[y++]=C,E[y++]=A,E[y++]=A,E[y++]=L,E[y++]=L,E[y++]=C}}v.version=g;const b=r.get(p);b&&e.remove(b),r.set(p,v)}function d(p){const S=r.get(p);if(S){const x=p.index;x!==null&&S.version<x.version&&l(p)}else l(p);return r.get(p)}function f(){for(const p in s){const S=s[p].deref();S!==void 0&&c(S)}}return{get:u,update:h,getWireframeAttribute:d,dispose:f}}function gm(i,e,t){let n;function s(l){n=l}let r,a;function o(l){r=l.type,a=l.bytesPerElement}function c(l,d){i.drawElements(n,d,r,l*a),t.update(d,n,1)}function u(l,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,l*a,f),t.update(d,n,f))}function h(l,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,l,0,f);let S=0;for(let x=0;x<f;x++)S+=d[x];t.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function xm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _m(i,e,t){const n=new WeakMap,s=new Nt;function r(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==l){let A=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",A)};var f=A;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),S===!0&&(v=2),x===!0&&(v=3);let E=o.attributes.position.count*v,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const M=new Float32Array(E*b*4*l),y=new _u(M,E,b,l);y.type=Bn,y.needsUpdate=!0;const C=v*4;for(let L=0;L<l;L++){const I=g[L],N=m[L],P=_[L],z=E*b*4*L;for(let k=0;k<I.count;k++){const B=k*C;p===!0&&(s.fromBufferAttribute(I,k),M[z+B+0]=s.x,M[z+B+1]=s.y,M[z+B+2]=s.z,M[z+B+3]=0),S===!0&&(s.fromBufferAttribute(N,k),M[z+B+4]=s.x,M[z+B+5]=s.y,M[z+B+6]=s.z,M[z+B+7]=0),x===!0&&(s.fromBufferAttribute(P,k),M[z+B+8]=s.x,M[z+B+9]=s.y,M[z+B+10]=s.z,M[z+B+11]=P.itemSize===4?s.w:1)}}d={count:l,texture:y,size:new oe(E,b)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];const S=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",S),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vm(i,e,t,n,s){let r=new WeakMap;function a(u){const h=s.render.frame,l=u.geometry,d=e.get(u,l);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){const f=u.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Mm={[eu]:"LINEAR_TONE_MAPPING",[tu]:"REINHARD_TONE_MAPPING",[nu]:"CINEON_TONE_MAPPING",[iu]:"ACES_FILMIC_TONE_MAPPING",[ru]:"AGX_TONE_MAPPING",[au]:"NEUTRAL_TONE_MAPPING",[su]:"CUSTOM_TONE_MAPPING"};function Sm(i,e,t,n,s,r){const a=new jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,u=null;const h=new Ct;h.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ze([0,2,0,0,2,0],2));const l=new c0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Et(h,l),f=new Vu(-1,1,1,-1,0,1);let p=null,S=null,x=!1,g,m=null,_=[],v=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),c!==null&&c.setSize(E,b);for(let M=0;M<_.length;M++){const y=_[M];y.setSize&&y.setSize(E,b)}},this.setEffects=function(E){_=E,v=_.length>0&&_[0].isRenderPass===!0;const b=a.width,M=a.height;_.length>0&&o===null&&(o=new jt(b,M,{type:Qt,depthBuffer:!1,stencilBuffer:!1}),c=new jt(b,M,{type:Qt,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&_.some(C=>C.needsDepthTexture===!0);y!==(a.depthTexture!==null)&&(y===!0&&u===null&&(u=new hs(b,M),r===!0&&(u.format=mi,u.type=us)),a.dispose(),a.depthTexture=y?u:null,a.resolveDepthBuffer=y,a.storeMultisampledDepthBuffer=y);for(let C=0;C<_.length;C++){const A=_[C];A.setSize&&A.setSize(b,M),y&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(u)}},this.begin=function(E,b){if(x||E.toneMapping===Yn&&_.length===0)return!1;if(m=b,b!==null){const M=b.width,y=b.height;(a.width!==M||a.height!==y)&&this.setSize(M,y)}return v===!1&&E.setRenderTarget(a),g=E.toneMapping,E.toneMapping=Yn,!0},this.hasRenderPass=function(){return v},this.end=function(E,b){E.toneMapping=g,x=!0;let M=a,y=o;for(let C=0;C<_.length;C++){const A=_[C];A.enabled!==!1&&(A.render(E,y,M,b),A.needsSwap!==!1&&(M=y,y=y===o?c:o))}if(p!==E.outputColorSpace||S!==E.toneMapping){p=E.outputColorSpace,S=E.toneMapping,l.defines={},ut.getTransfer(p)===vt&&(l.defines.SRGB_TRANSFER="");const C=Mm[S];C&&(l.defines[C]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(m),E.render(d,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),l.dispose()}}const Zu=new ln,$u=new hs(1,1),Ju=new Au(1),Ku=new _u,Qu=new uf,ju=new Tu,bc=[],Ec=[],wc=new Float32Array(16),Tc=new Float32Array(9),Ac=new Float32Array(4);function Ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=bc[s];if(r===void 0&&(r=new Float32Array(s),bc[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ma(i,e){let t=Ec[e];t===void 0&&(t=new Int32Array(e),Ec[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function Tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),Wt(t,n)}}function Am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Tc.set(n),i.uniformMatrix3fv(this.addr,!1,Tc),Wt(t,n)}}function Rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;wc.set(n),i.uniformMatrix4fv(this.addr,!1,wc),Wt(t,n)}}function Cm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function ga(i){return i.version===0&&(i.compareFunction=gu,i.needsUpdate=!0),i}function Om(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ga($u):r=Zu,t.setTexture2D(e||r,s)}function zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qu,s)}function Bm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ga(Ju):r=ju,t.setTextureCube(e||r,s)}function Gm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ku,s)}function Hm(i){switch(i){case 5126:return ym;case 35664:return bm;case 35665:return Em;case 35666:return wm;case 35674:return Tm;case 35675:return Am;case 35676:return Rm;case 5124:case 35670:return Cm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Im;case 36294:return Um;case 36295:return Nm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return Gm}}function km(i,e){i.uniform1fv(this.addr,e)}function Vm(i,e){const t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function Wm(i,e){const t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function Xm(i,e){const t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function qm(i,e){const t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ym(i,e){const t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zm(i,e){const t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function Jm(i,e){i.uniform2iv(this.addr,e)}function Km(i,e){i.uniform3iv(this.addr,e)}function Qm(i,e){i.uniform4iv(this.addr,e)}function jm(i,e){i.uniform1uiv(this.addr,e)}function eg(i,e){i.uniform2uiv(this.addr,e)}function tg(i,e){i.uniform3uiv(this.addr,e)}function ng(i,e){i.uniform4uiv(this.addr,e)}function ig(i,e,t){const n=this.cache,s=e.length,r=ma(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ga($u):a=Zu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function sg(i,e,t){const n=this.cache,s=e.length,r=ma(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Qu,r[a])}function rg(i,e,t){const n=this.cache,s=e.length,r=ma(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ga(Ju):a=ju;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ag(i,e,t){const n=this.cache,s=e.length,r=ma(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ku,r[a])}function og(i){switch(i){case 5126:return km;case 35664:return Vm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return Qm;case 5125:return jm;case 36294:return eg;case 36295:return tg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}class lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hm(t.type)}}class cg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=og(t.type)}}class ug{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Rc(i,e){i.seq.push(e),i.map[e.id]=e}function hg(i,e,t){const n=i.name,s=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),a=$a.lastIndex;let o=r[1];const c=r[2]==="]",u=r[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===s){Rc(t,u===void 0?new lg(o,i,e):new cg(o,i,e));break}else{let l=t.map[o];l===void 0&&(l=new ug(o),Rc(t,l)),t=l}}}class Yr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);hg(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Cc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const fg=37297;let dg=0;function pg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Pc=new je;function mg(i){ut._getMatrix(Pc,ut.workingColorSpace,i);const e=`mat3( ${Pc.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case ia:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+pg(i.getShaderSource(e),o)}else return r}function gg(i,e){const t=mg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const xg={[eu]:"Linear",[tu]:"Reinhard",[nu]:"Cineon",[iu]:"ACESFilmic",[ru]:"AgX",[au]:"Neutral",[su]:"Custom"};function _g(i,e){const t=xg[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nr=new D;function vg(){ut.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),e=Nr.y.toFixed(4),t=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Sg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fs(i){return i!==""}function Dc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ic(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(i){return i.replace(bg,Eg)}function Eg(i,e){const t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Wo(t)}const wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(wg,Tg)}function Tg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Ag={[zs]:"SHADOWMAP_TYPE_PCF",[Us]:"SHADOWMAP_TYPE_VSM"};function Rg(i){return Ag[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Cg={[Ys]:"ENVMAP_MODE_REFRACTION"};function Pg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Cg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Lg={[jo]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[Bh]:"ENVMAP_BLENDING_ADD"};function Dg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Lg[i.combine]||"ENVMAP_BLENDING_NONE"}function Ig(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Rg(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Pg(t),l=Dg(t),d=Mg(t),f=Sg(r),p=s.createProgram();let S,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Fs).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Fs).join(`
`),x.length>0&&(x+=`
`)):(S=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),x=[Nc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?st.tonemapping_pars_fragment:"",t.toneMapping!==Yn?_g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,gg("linearToOutputTexel",t.outputColorSpace),vg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fs).join(`
`)),a=Wo(a),a=Dc(a,t),a=Ic(a,t),o=Wo(o),o=Dc(o,t),o=Ic(o,t),a=Uc(a),o=Uc(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,S=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const m=g+S+a,_=g+x+o,v=Cc(s,s.VERTEX_SHADER,m),E=Cc(s,s.FRAGMENT_SHADER,_);s.attachShader(p,v),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function b(A){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(p)||"",I=s.getShaderInfoLog(v)||"",N=s.getShaderInfoLog(E)||"",P=L.trim(),z=I.trim(),k=N.trim();let B=!0,se=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,v,E);else{const X=Lc(s,v,"vertex"),Q=Lc(s,E,"fragment");mt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+P+`
`+X+`
`+Q)}else P!==""?Ye("WebGLProgram: Program Info Log:",P):(z===""||k==="")&&(se=!1);se&&(A.diagnostics={runnable:B,programLog:P,vertexShader:{log:z,prefix:S},fragmentShader:{log:k,prefix:x}})}s.deleteShader(v),s.deleteShader(E),M=new Yr(s,p),y=yg(s,p)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,fg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=E,this}let Ug=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fg(e),t.set(e,n)),n}}class Fg{constructor(e){this.id=Ug++,this.code=e,this.usedTimes=0}}function Og(i){return i===Ni||i===jr||i===ea}function zg(i,e,t,n,s,r){const a=new vu,o=new Ng,c=new Set,u=[],h=new Map,l=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,y,C,A,L,I){const N=A.fog,P=L.geometry,z=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?A.environment:null,k=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,B=e.get(M.envMap||z,k),se=d[M.type];let X=n.precision;M.precision!==null&&(X=n.getMaxPrecision(M.precision),X!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",X,"instead."));const Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,re=Q!==void 0?Q.length:0;let Pe=0;P.morphAttributes.position!==void 0&&(Pe=1),P.morphAttributes.normal!==void 0&&(Pe=2),P.morphAttributes.color!==void 0&&(Pe=3);let Ge,Z,we,Re;if(se){const Te=Xn[se];Ge=Te.vertexShader,Z=Te.fragmentShader}else{Ge=M.vertexShader,Z=M.fragmentShader;const Te=o.getVertexShaderStage(M),_t=o.getFragmentShaderStage(M);o.update(M,Te,_t),we=Te.id,Re=_t.id}const Fe=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,St=L.isBatchedMesh===!0,ke=!!M.map,Je=!!M.matcap,et=!!B,te=et&&B.isPMREMTexture===!0,G=!!M.aoMap,ae=!!M.lightMap,fe=!!M.bumpMap&&M.wireframe===!1,pe=!!M.normalMap,He=!!M.displacementMap,Ue=!!M.emissiveMap,Xe=!!M.metalnessMap,$e=!!M.roughnessMap,rt=M.anisotropy>0,O=M.clearcoat>0,Ft=M.diffuseRoughness>0,at=M.dispersion>0,yt=M.retroreflectivity>0,ye=M.iridescence>0,It=M.sheen>0,We=M.transmission>0,qe=rt&&!!M.anisotropyMap,R=O&&!!M.clearcoatMap,w=O&&!!M.clearcoatNormalMap,V=O&&!!M.clearcoatRoughnessMap,le=Ft&&!!M.diffuseRoughnessMap,ne=ye&&!!M.iridescenceMap,me=ye&&!!M.iridescenceThicknessMap,be=It&&!!M.sheenColorMap,$=It&&!!M.sheenRoughnessMap,J=!!M.specularMap,ve=!!M.specularColorMap,U=!!M.specularIntensityMap,K=We&&!!M.transmissionMap,Y=We&&!!M.thicknessMap,Me=!!M.gradientMap,de=!!M.alphaMap,ge=M.alphaTest>0,Be=!!M.alphaHash,nt=!!M.extensions;let ue=Yn;M.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Ve=te?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,tt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:Z,defines:M.defines,customVertexShaderID:we,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:X,batching:St,batchingColor:St&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:ke,matcap:Je,envMap:et,envMapMode:et&&B.mapping,envMapPMREM:te,envMapMaxLod:te?Ve.length-1:null,envMapSize:te?Ve[0].width:null,aoMap:G,lightMap:ae,bumpMap:fe,normalMap:pe,displacementMap:He,emissiveMap:Ue,normalMapObjectSpace:pe&&M.normalMapType===kh,normalMapTangentSpace:pe&&M.normalMapType===ta,packedNormalMap:pe&&M.normalMapType===ta&&Og(M.normalMap.format),metalnessMap:Xe,roughnessMap:$e,anisotropy:rt,anisotropyMap:qe,clearcoat:O,clearcoatMap:R,clearcoatNormalMap:w,clearcoatRoughnessMap:V,diffuseRoughness:Ft,diffuseRoughnessMap:le,dispersion:at,retroreflection:yt,iridescence:ye,iridescenceMap:ne,iridescenceThicknessMap:me,sheen:It,sheenColorMap:be,sheenRoughnessMap:$,specularMap:J,specularColorMap:ve,specularIntensityMap:U,transmission:We,transmissionMap:K,thicknessMap:Y,gradientMap:Me,opaque:M.transparent===!1&&M.blending===Bs&&M.alphaToCoverage===!1,alphaMap:de,alphaTest:ge,alphaHash:Be,combine:M.combine,mapUv:ke&&f(M.map.channel),aoMapUv:G&&f(M.aoMap.channel),lightMapUv:ae&&f(M.lightMap.channel),bumpMapUv:fe&&f(M.bumpMap.channel),normalMapUv:pe&&f(M.normalMap.channel),displacementMapUv:He&&f(M.displacementMap.channel),emissiveMapUv:Ue&&f(M.emissiveMap.channel),metalnessMapUv:Xe&&f(M.metalnessMap.channel),roughnessMapUv:$e&&f(M.roughnessMap.channel),anisotropyMapUv:qe&&f(M.anisotropyMap.channel),clearcoatMapUv:R&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:w&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(M.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:le&&f(M.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:me&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(M.sheenRoughnessMap.channel),specularMapUv:J&&f(M.specularMap.channel),specularColorMapUv:ve&&f(M.specularColorMap.channel),specularIntensityMapUv:U&&f(M.specularIntensityMap.channel),transmissionMapUv:K&&f(M.transmissionMap.channel),thicknessMapUv:Y&&f(M.thicknessMap.channel),alphaMapUv:de&&f(M.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(pe||rt),vertexNormals:!!P.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(ke||de),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||P.attributes.normal===void 0&&pe===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:l,reversedDepthBuffer:he,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Pe,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:I.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:ke&&M.map.isVideoTexture===!0&&ut.getTransfer(M.map.colorSpace)===vt,decodeVideoTextureEmissive:Ue&&M.emissiveMap.isVideoTexture===!0&&ut.getTransfer(M.emissiveMap.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===On,flipSided:M.side===mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:nt&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&M.extensions.multiDraw===!0||St)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function S(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(x(y,M),g(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapPMREM),M.push(y.envMapMaxLod),M.push(y.envMapSize),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.diffuseRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.numSunLights),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numSunLightShadows),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.numLightProbeGrids),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function g(M,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.diffuseRoughness&&a.enable(25),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),M.push(a.mask)}function m(M){const y=d[M.type];let C;if(y){const A=Xn[y];C=oa.clone(A.uniforms)}else C=M.uniforms;return C}function _(M,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new Ig(i,y,M,s),u.push(C),h.set(y,C)),C}function v(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),h.delete(M.cacheKey),M.destroy()}}function E(M){o.remove(M)}function b(){o.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:m,acquireProgram:_,releaseProgram:v,releaseShaderCache:E,programs:u,dispose:b}}function Bg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Fc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,p,S,x,g){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,materialVariant:a(d),groupOrder:S,renderOrder:d.renderOrder,z:x,group:g},i[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.materialVariant=a(d),m.groupOrder=S,m.renderOrder=d.renderOrder,m.z=x,m.group=g),e++,m}function c(d,f,p,S,x,g,m){m.reversedDepth===!0&&(x=-x);const _=o(d,f,p,S,x,g);p.transmission>0?n.push(_):p.transparent===!0?s.push(_):t.push(_)}function u(d,f,p,S,x,g){const m=o(d,f,p,S,x,g);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):t.unshift(m)}function h(d,f){t.length>1&&t.sort(d||Gg),n.length>1&&n.sort(f||Fc),s.length>1&&s.sort(f||Fc)}function l(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:l,sort:h}}function Hg(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Oc,i.set(n,[a])):s>=r.length?(a=new Oc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function kg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Vg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wg=0;function Xg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qg(i){const e=new kg,t=Vg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new D);const s=new D,r=new ht,a=new ht;function o(u){let h=0,l=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,p=0,S=0,x=0,g=0,m=0,_=0,v=0,E=0,b=0,M=0,y=0,C=0,A=0;u.sort(Xg);for(let I=0,N=u.length;I<N;I++){const P=u[I],z=P.color,k=P.intensity,B=P.distance;let se=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ni?se=P.shadow.map.texture:se=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=z.r*k,l+=z.g*k,d+=z.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);A++}else if(P.isSunLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,re=t.get(P);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=re,n.sunShadowMap[p]=se;const Pe=Q.getViewportCount();for(let Ge=0;Ge<Pe;Ge++)n.sunShadowMatrix[S+Ge]=Q.getMatrix(Ge),n.sunShadowCascade[S+Ge]=Q._cascadeData[Ge];S+=Pe,p++}n.sun[f]=X,f++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,re=t.get(P);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,n.directionalShadow[x]=re,n.directionalShadowMap[x]=se,n.directionalShadowMatrix[x]=P.shadow.matrix,E++}n.directional[x]=X,x++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(z).multiplyScalar(k),X.distance=B,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[m]=X;const Q=P.shadow;if(P.map&&(n.spotLightMap[y]=P.map,y++,Q.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[m]=Q.matrix,P.castShadow){const re=t.get(P);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,n.spotShadow[m]=re,n.spotShadowMap[m]=se,M++}m++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(z).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=X,_++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Q=P.shadow,re=t.get(P);re.shadowIntensity=Q.intensity,re.shadowBias=Q.bias,re.shadowNormalBias=Q.normalBias,re.shadowRadius=Q.radius,re.shadowMapSize=Q.mapSize,re.shadowCameraNear=Q.camera.near,re.shadowCameraFar=Q.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=P.shadow.matrix,b++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[v]=X,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=d;const L=n.hash;(L.sunLength!==f||L.directionalLength!==x||L.pointLength!==g||L.spotLength!==m||L.rectAreaLength!==_||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==M||L.numSpotMaps!==y||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=x,n.spot.length=m,n.rectArea.length=_,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.spotLightMatrix.length=M+y-C,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,L.sunLength=f,L.directionalLength=x,L.pointLength=g,L.spotLength=m,L.rectAreaLength=_,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=M,L.numSpotMaps=y,L.numLightProbes=A,n.version=Wg++)}function c(u,h){let l=0,d=0,f=0,p=0,S=0,x=0;const g=h.matrixWorldInverse;for(let m=0,_=u.length;m<_;m++){const v=u[m];if(v.isSunLight){const E=n.sun[l];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),l++}else if(v.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(v.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const E=n.rectArea[S];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function zc(i){const e=new qg(i),t=[],n=[],s=[];function r(l){h.camera=l,t.length=0,n.length=0,s.length=0}function a(l){l.isLightProbeGrid?s.push(l):t.push(l)}function o(l){n.push(l)}function c(){e.setup(t),s.sort((l,d)=>l.priority-d.priority||l.id-d.id)}function u(l){e.setupView(t,l)}const h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function Yg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new zc(i),e.set(s,[o])):r>=a.length?(o=new zc(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
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
}`,Jg=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Kg=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Bc=new ht,Ps=new D,Ja=new D;function Qg(i,e,t){let n=new Js;const s=new oe,r=new oe,a=new Nt,o=new h0,c=new f0,u={},h=t.maxTextureSize,l={[Ii]:mn,[mn]:Ii,[On]:On},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Zg,fragmentShader:$g}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Ct;p.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Et(p,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zs;let g=this.type;this.render=function(b,M,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===Sh&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zs);const C=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Li),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=g!==this.type;N&&M.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=b.length;P<z;P++){const k=b[P],B=k.shadow;if(B===void 0){Ye("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const se=B.getFrameExtents();s.multiply(se),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/se.x),s.x=r.x*se.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/se.y),s.y=r.y*se.y,B.mapSize.y=r.y));const X=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=X,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Us){if(k.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new jt(s.x,s.y,{format:Ni,type:Qt,minFilter:dn,magFilter:dn,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new hs(s.x,s.y,Bn),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=gi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Jt,B.map.depthTexture.magFilter=Jt}else k.isPointLight?(B.map=new xl(s.x),B.map.depthTexture=new Au(s.x,$n)):(B.map=new jt(s.x,s.y),B.map.depthTexture=new hs(s.x,s.y,$n)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=gi,this.type===zs?(B.map.depthTexture.compareFunction=X?mu:pu,B.map.depthTexture.minFilter=dn,B.map.depthTexture.magFilter=dn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Jt,B.map.depthTexture.magFilter=Jt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const Q=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();k.isPointLight!==!0&&B.updateMatrices(k,y);const re=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:y.layers;for(let Pe=0;Pe<Q;Pe++){const Ge=B.getCamera(Pe);if(k.isPointLight){const Z=B.camera,we=B.matrix,Re=k.distance||Z.far;Re!==Z.far&&(Z.far=Re,Z.updateProjectionMatrix()),Ps.setFromMatrixPosition(k.matrixWorld),Z.position.copy(Ps),Ja.copy(Z.position),Ja.add(Jg[Pe]),Z.up.copy(Kg[Pe]),Z.lookAt(Ja),Z.updateMatrixWorld(),we.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Bc.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Bc,Z.coordinateSystem,Z.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Pe),i.clear();else{Pe===0&&(i.setRenderTarget(B.map),i.clear());const Z=B.getViewport(Pe);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),I.viewport(a)}n=B.getFrustum(Pe),v(M,y,Ge,k,re,this.type)}B.isPointLightShadow!==!0&&this.type===Us&&m(B,y),B.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(C,A,L)};function m(b,M){const y=e.update(S);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new jt(s.x,s.y,{format:Ni,type:Qt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),d.uniforms.shadow_pass.value=b.map.depthTexture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,y,d,S,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,y,f,S,null)}function _(b,M,y,C){let A=null;const L=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)A=L;else if(A=y.isPointLight===!0?c:o,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const I=A.uuid,N=M.uuid;let P=u[I];P===void 0&&(P={},u[I]=P);let z=P[N];z===void 0&&(z=A.clone(),P[N]=z,M.addEventListener("dispose",E)),A=z}if(A.visible=M.visible,A.wireframe=M.wireframe,C===Us?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:l[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=i.properties.get(A);I.light=y}return A}function v(b,M,y,C,A,L){if(b.visible===!1)return;if(b.layers.test(A)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&L===Us)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const P=e.update(b),z=b.material;if(Array.isArray(z)){const k=P.groups;for(let B=0,se=k.length;B<se;B++){const X=k[B],Q=z[X.materialIndex];if(Q&&Q.visible){const re=_(b,Q,C,L);b.onBeforeShadow(i,b,M,y,P,re,X),i.renderBufferDirect(y,null,P,re,b,X),b.onAfterShadow(i,b,M,y,P,re,X)}}}else if(z.visible){const k=_(b,z,C,L);b.onBeforeShadow(i,b,M,y,P,k,null),i.renderBufferDirect(y,null,P,k,b,null),b.onAfterShadow(i,b,M,y,P,k,null)}}const N=b.children;for(let P=0,z=N.length;P<z;P++)v(N[P],M,y,C,A,L)}function E(b){b.target.removeEventListener("dispose",E);for(const y in u){const C=u[y],A=b.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}function jg(i,e){function t(){let U=!1;const K=new Nt;let Y=null;const Me=new Nt(0,0,0,0);return{setMask:function(de){Y!==de&&!U&&(i.colorMask(de,de,de,de),Y=de)},setLocked:function(de){U=de},setClear:function(de,ge,Be,nt,ue){ue===!0&&(de*=nt,ge*=nt,Be*=nt),K.set(de,ge,Be,nt),Me.equals(K)===!1&&(i.clearColor(de,ge,Be,nt),Me.copy(K))},reset:function(){U=!1,Y=null,Me.set(-1,0,0,0)}}}function n(){let U=!1,K=!1,Y=null,Me=null,de=null;return{setReversed:function(ge){if(K!==ge){const Be=e.get("EXT_clip_control");ge?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),K=ge;const nt=de;de=null,this.setClear(nt)}},getReversed:function(){return K},setTest:function(ge){ge?he(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(ge){Y!==ge&&!U&&(i.depthMask(ge),Y=ge)},setFunc:function(ge){if(K&&(ge=jh[ge]),Me!==ge){switch(ge){case to:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case qs:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case ao:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=ge}},setLocked:function(ge){U=ge},setClear:function(ge){de!==ge&&(de=ge,K&&(ge=1-ge),i.clearDepth(ge))},reset:function(){U=!1,Y=null,Me=null,de=null,K=!1}}}function s(){let U=!1,K=null,Y=null,Me=null,de=null,ge=null,Be=null,nt=null,ue=null;return{setTest:function(Ve){U||(Ve?he(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Ve){K!==Ve&&!U&&(i.stencilMask(Ve),K=Ve)},setFunc:function(Ve,tt,Te){(Y!==Ve||Me!==tt||de!==Te)&&(i.stencilFunc(Ve,tt,Te),Y=Ve,Me=tt,de=Te)},setOp:function(Ve,tt,Te){(ge!==Ve||Be!==tt||nt!==Te)&&(i.stencilOp(Ve,tt,Te),ge=Ve,Be=tt,nt=Te)},setLocked:function(Ve){U=Ve},setClear:function(Ve){ue!==Ve&&(i.clearStencil(Ve),ue=Ve)},reset:function(){U=!1,K=null,Y=null,Me=null,de=null,ge=null,Be=null,nt=null,ue=null}}}const r=new t,a=new n,o=new s;let c={};const u=new WeakMap;let h={},l={},d={},f=new WeakMap,p=[],S=null,x=!1,g=null,m=null,_=null,v=null,E=null,b=null,M=null,y=new Oe(0,0,0),C=0,A=!1,L=null,I=null,N=null,P=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,se=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),B=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),B=se>=2);let Q=null,re={};const Pe=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),Z=new Nt().fromArray(Pe),we=new Nt().fromArray(Ge);function Re(U,K,Y,Me){const de=new Uint8Array(4),ge=i.createTexture();i.bindTexture(U,ge),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<Y;Be++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(K+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return ge}const Fe={};Fe[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(i.DEPTH_TEST),a.setFunc(qs),fe(!1),pe(Ul),he(i.CULL_FACE),G(Li);function he(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ze(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function St(U,K){return d[U]!==K?(i.bindFramebuffer(U,K),d[U]=K,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=K),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=K),!0):!1}function ke(U,K){let Y=p,Me=!1;if(U){Y=f.get(K),Y===void 0&&(Y=[],f.set(K,Y));const de=U.textures;if(Y.length!==de.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Be=de.length;ge<Be;ge++)Y[ge]=i.COLOR_ATTACHMENT0+ge;Y.length=de.length,Me=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,Me=!0);Me&&i.drawBuffers(Y)}function Je(U){return S!==U?(i.useProgram(U),S=U,!0):!1}const et={[ts]:i.FUNC_ADD,[yh]:i.FUNC_SUBTRACT,[bh]:i.FUNC_REVERSE_SUBTRACT};et[Eh]=i.MIN,et[wh]=i.MAX;const te={[Th]:i.ZERO,[Qc]:i.ONE,[Ah]:i.SRC_COLOR,[jc]:i.SRC_ALPHA,[Ih]:i.SRC_ALPHA_SATURATE,[Lh]:i.DST_COLOR,[Ch]:i.DST_ALPHA,[Rh]:i.ONE_MINUS_SRC_COLOR,[Qo]:i.ONE_MINUS_SRC_ALPHA,[Dh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Uh]:i.CONSTANT_COLOR,[Nh]:i.ONE_MINUS_CONSTANT_COLOR,[Fh]:i.CONSTANT_ALPHA,[Oh]:i.ONE_MINUS_CONSTANT_ALPHA};function G(U,K,Y,Me,de,ge,Be,nt,ue,Ve){if(U===Li){x===!0&&(ze(i.BLEND),x=!1);return}if(x===!1&&(he(i.BLEND),x=!0),U!==Kc){if(U!==g||Ve!==A){if((m!==ts||E!==ts)&&(i.blendEquation(i.FUNC_ADD),m=ts,E=ts),Ve)switch(U){case Bs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFunc(i.ONE,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:mt("WebGLState: Invalid blending: ",U);break}else switch(U){case Bs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nl:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",U);break}_=null,v=null,b=null,M=null,y.set(0,0,0),C=0,g=U,A=Ve}return}de=de||K,ge=ge||Y,Be=Be||Me,(K!==m||de!==E)&&(i.blendEquationSeparate(et[K],et[de]),m=K,E=de),(Y!==_||Me!==v||ge!==b||Be!==M)&&(i.blendFuncSeparate(te[Y],te[Me],te[ge],te[Be]),_=Y,v=Me,b=ge,M=Be),(nt.equals(y)===!1||ue!==C)&&(i.blendColor(nt.r,nt.g,nt.b,ue),y.copy(nt),C=ue),g=U,A=!1}function ae(U,K){U.side===On?ze(i.CULL_FACE):he(i.CULL_FACE);let Y=U.side===mn;K&&(Y=!Y),fe(Y),U.blending===Bs&&U.transparent===!1?G(Li):G(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Me=U.stencilWrite;o.setTest(Me),Me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function pe(U){U!==vh?(he(i.CULL_FACE),U!==I&&(U===Ul?i.cullFace(i.BACK):U===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),I=U}function He(U){U!==N&&(B&&i.lineWidth(U),N=U)}function Ue(U,K,Y){U?(he(i.POLYGON_OFFSET_FILL),(P!==K||z!==Y)&&(P=K,z=Y,a.getReversed()&&(K=-K,Y=-Y),i.polygonOffset(K,Y))):ze(i.POLYGON_OFFSET_FILL)}function Xe(U){U?he(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function $e(U){U===void 0&&(U=i.TEXTURE0+k-1),Q!==U&&(i.activeTexture(U),Q=U)}function rt(U,K,Y){Y===void 0&&(Q===null?Y=i.TEXTURE0+k-1:Y=Q);let Me=re[Y];Me===void 0&&(Me={type:void 0,texture:void 0},re[Y]=Me),(Me.type!==U||Me.texture!==K)&&(Q!==Y&&(i.activeTexture(Y),Q=Y),i.bindTexture(U,K||Fe[U]),Me.type=U,Me.texture=K)}function O(){const U=re[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ft(){try{i.compressedTexImage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function at(){try{i.compressedTexImage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function yt(){try{i.texSubImage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function ye(){try{i.texSubImage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function It(){try{i.compressedTexSubImage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function We(){try{i.compressedTexSubImage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function qe(){try{i.texStorage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function R(){try{i.texStorage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function w(){try{i.texImage2D(...arguments)}catch(U){mt("WebGLState:",U)}}function V(){try{i.texImage3D(...arguments)}catch(U){mt("WebGLState:",U)}}function le(U){return l[U]!==void 0?l[U]:i.getParameter(U)}function ne(U,K){l[U]!==K&&(i.pixelStorei(U,K),l[U]=K)}function me(U){Z.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Z.copy(U))}function be(U){we.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),we.copy(U))}function $(U,K){let Y=u.get(K);Y===void 0&&(Y=new WeakMap,u.set(K,Y));let Me=Y.get(U);Me===void 0&&(Me=i.getUniformBlockIndex(K,U.name),i.uniformBlockBinding(K,Me,Me),Y.set(U,Me))}function J(U,K,Y){const de=u.get(K).get(U);c[de]!==Y&&(i.bindBufferBase(i.UNIFORM_BUFFER,de,Y),c[de]=Y)}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},l={},Q=null,re={},d={},c={},f=new WeakMap,p=[],S=null,x=!1,g=null,m=null,_=null,v=null,E=null,b=null,M=null,y=new Oe(0,0,0),C=0,A=!1,L=null,I=null,N=null,P=null,z=null,Z.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:ze,bindFramebuffer:St,drawBuffers:ke,useProgram:Je,setBlending:G,setMaterial:ae,setFlipSided:fe,setCullFace:pe,setLineWidth:He,setPolygonOffset:Ue,setScissorTest:Xe,activeTexture:$e,bindTexture:rt,unbindTexture:O,compressedTexImage2D:Ft,compressedTexImage3D:at,texImage2D:w,texImage3D:V,pixelStorei:ne,getParameter:le,updateUBOMapping:$,uniformBlockBinding:J,texStorage2D:qe,texStorage3D:R,texSubImage2D:yt,texSubImage3D:ye,compressedTexSubImage2D:It,compressedTexSubImage3D:We,scissor:me,viewport:be,reset:ve}}function ex(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new oe,h=new WeakMap,l=new Set;let d;const f=new WeakMap,p=new Set,S=new FinalizationRegistry(R=>p.delete(R));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return x?new OffscreenCanvas(R,w):sa("canvas")}function m(R,w,V){let le=1;const ne=qe(R);if((ne.width>V||ne.height>V)&&(le=V/Math.max(ne.width,ne.height)),le<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const me=Math.floor(le*ne.width),be=Math.floor(le*ne.height);d===void 0&&(d=g(me,be));const $=w?g(me,be):d;return $.width=me,$.height=be,$.getContext("2d").drawImage(R,0,0,me,be),Ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+me+"x"+be+")."),$}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function _(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(R,w,V,le,ne,me=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let be;le&&(be=e.get("EXT_texture_norm16"),be||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=w;if(w===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8),V===i.UNSIGNED_SHORT&&be&&($=be.R16_EXT),V===i.SHORT&&be&&($=be.R16_SNORM_EXT)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),w===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8),V===i.UNSIGNED_SHORT&&be&&($=be.RG16_EXT),V===i.SHORT&&be&&($=be.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),w===i.RGB&&(V===i.UNSIGNED_SHORT&&be&&($=be.RGB16_EXT),V===i.SHORT&&be&&($=be.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),w===i.RGBA){const J=me?ia:ut.getTransfer(ne);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=J===vt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&be&&($=be.RGBA16_EXT),V===i.SHORT&&be&&($=be.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(R,w){let V;return R?w===null||w===$n||w===us?V=i.DEPTH24_STENCIL8:w===Bn?V=i.DEPTH32F_STENCIL8:w===Zs&&(V=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===$n||w===us?V=i.DEPTH_COMPONENT24:w===Bn?V=i.DEPTH_COMPONENT32F:w===Zs&&(V=i.DEPTH_COMPONENT16),V}function y(R,w){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==dn?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){const w=new WeakRef(R);n.get(R).__ref=w,p.add(w),S.register(R,w,w)}function A(R){const w=n.get(R).__ref;w!==void 0&&(p.delete(w),S.unregister(w))}function L(R){N(R.target)}function I(R){P(R.target)}function N(R){R.removeEventListener("dispose",L),A(R),k(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&l.delete(R)}function P(R){R.removeEventListener("dispose",I),A(R),se(R)}function z(){for(const R of p){const w=R.deref();w!==void 0&&(w.isRenderTarget===!0?P(w):N(w))}p.clear(),l.clear()}function k(R){const w=n.get(R);if(w.__webglInit===void 0)return;const V=R.source,le=f.get(V);if(le){const ne=le[w.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&B(R),Object.keys(le).length===0&&f.delete(V)}n.remove(R)}function B(R){const w=n.get(R);i.deleteTexture(w.__webglTexture);const V=R.source,le=f.get(V);delete le[w.__cacheKey],a.memory.textures--}function se(R){const w=n.get(R);w.__depthDisposeCallback&&w.__depthDisposeCallback();const V=R.depthTexture;if(V&&V.renderTarget===R&&N(V),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(w.__webglFramebuffer[ne]))for(let me=0;me<w.__webglFramebuffer[ne].length;me++)i.deleteFramebuffer(w.__webglFramebuffer[ne][me]);else i.deleteFramebuffer(w.__webglFramebuffer[ne]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ne])}else{if(Array.isArray(w.__webglFramebuffer))for(let ne=0;ne<w.__webglFramebuffer.length;ne++)i.deleteFramebuffer(w.__webglFramebuffer[ne]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ne=0;ne<w.__webglColorRenderbuffer.length;ne++)w.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ne]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const le=R.textures;for(let ne=0,me=le.length;ne<me;ne++){const be=n.get(le[ne]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),a.memory.textures--),n.remove(le[ne])}n.remove(R)}let X=0;function Q(){X=0}function re(){return X}function Pe(R){X=R}function Ge(){const R=X;return R>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function Z(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.mipmapsAutoUpdate),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function we(R,w){const V=n.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const le=R.image;if(le===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(V,R,w);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}function Re(R,w){const V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ae(V,R,w);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w)}function Fe(R,w){const V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ae(V,R,w);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)}function he(R,w){const V=n.get(R);if(R.version>0&&V.__version!==R.version){fe(V,R,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)}const ze={[Qr]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},St={[Jt]:i.NEAREST,[Gh]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Sa]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},ke={[Wh]:i.NEVER,[gu]:i.ALWAYS,[Xh]:i.LESS,[pu]:i.LEQUAL,[qh]:i.EQUAL,[mu]:i.GEQUAL,[Yh]:i.GREATER,[Zh]:i.NOTEQUAL};function Je(R,w){if(w.type===Bn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===dn||w.magFilter===Sa||w.magFilter===cr||w.magFilter===si||w.minFilter===dn||w.minFilter===Sa||w.minFilter===cr||w.minFilter===si)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ze[w.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ze[w.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ze[w.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,St[w.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,St[w.minFilter]),w.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ke[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==cr&&w.minFilter!==si||w.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function et(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",L),C(w));const le=w.source;let ne=f.get(le);ne===void 0&&(ne={},f.set(le,ne));const me=Z(w);if(me!==R.__cacheKey){ne[me]===void 0&&(ne[me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[me].usedTimes++;const be=ne[R.__cacheKey];be!==void 0&&(ne[R.__cacheKey].usedTimes--,be.usedTimes===0&&B(w)),R.__cacheKey=me,R.__webglTexture=ne[me].texture}return V}function te(R,w,V){return Math.floor(Math.floor(R/V)/w)}function G(R,w,V,le){const me=R.updateRanges;if(me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,V,le,w.data);else{me.sort((U,K)=>U.start-K.start);let be=0;for(let U=1;U<me.length;U++){const K=me[be],Y=me[U],Me=K.start+K.count,de=te(Y.start,w.width,4),ge=te(K.start,w.width,4);Y.start<=Me+1&&de===ge&&te(Y.start+Y.count-1,w.width,4)===de?K.count=Math.max(K.count,Y.start+Y.count-K.start):(++be,me[be]=Y)}me.length=be+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),J=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let U=0,K=me.length;U<K;U++){const Y=me[U],Me=Math.floor(Y.start/4),de=Math.ceil(Y.count/4),ge=Me%w.width,Be=Math.floor(Me/w.width),nt=de,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,Be),t.texSubImage2D(i.TEXTURE_2D,0,ge,Be,nt,ue,V,le,w.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,J),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function ae(R,w,V){let le=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=i.TEXTURE_3D);const ne=et(R,w),me=w.source;t.bindTexture(le,R.__webglTexture,i.TEXTURE0+V);const be=n.get(me);if(me.version!==be.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ue=ut.getPrimaries(ut.workingColorSpace),Ve=w.colorSpace===ii?null:ut.getPrimaries(w.colorSpace),tt=w.colorSpace===ii||ue===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let J=m(w.image,!1,s.maxTextureSize);J=We(w,J);const ve=r.convert(w.format,w.colorSpace),U=r.convert(w.type);let K=b(w.internalFormat,ve,U,w.normalized,w.colorSpace,w.isVideoTexture);Je(le,w);let Y;const Me=w.mipmaps,de=w.isVideoTexture!==!0,ge=be.__version===void 0||ne===!0,Be=me.dataReady,nt=y(w,J);if(w.isDepthTexture)K=M(w.format===mi,w.type),ge&&(de?t.texStorage2D(i.TEXTURE_2D,1,K,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,K,J.width,J.height,0,ve,U,null));else if(w.isDataTexture)if(Me.length>0){de&&ge&&t.texStorage2D(i.TEXTURE_2D,nt,K,Me[0].width,Me[0].height);for(let ue=0,Ve=Me.length;ue<Ve;ue++)Y=Me[ue],de?Be&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Y.width,Y.height,ve,U,Y.data):t.texImage2D(i.TEXTURE_2D,ue,K,Y.width,Y.height,0,ve,U,Y.data);w.generateMipmaps=!1}else de?(ge&&t.texStorage2D(i.TEXTURE_2D,nt,K,J.width,J.height),Be&&G(w,J,ve,U)):t.texImage2D(i.TEXTURE_2D,0,K,J.width,J.height,0,ve,U,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){de&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,K,Me[0].width,Me[0].height,J.depth);for(let ue=0,Ve=Me.length;ue<Ve;ue++)if(Y=Me[ue],w.format!==Ln)if(ve!==null)if(de){if(Be)if(w.layerUpdates.size>0){const tt=_c(Y.width,Y.height,w.format,w.type);for(const Te of w.layerUpdates){const _t=Y.data.subarray(Te*tt/Y.data.BYTES_PER_ELEMENT,(Te+1)*tt/Y.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Te,Y.width,Y.height,1,ve,_t)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Y.width,Y.height,J.depth,ve,Y.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,K,Y.width,Y.height,J.depth,0,Y.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?Be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Y.width,Y.height,J.depth,ve,U,Y.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,K,Y.width,Y.height,J.depth,0,ve,U,Y.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{de&&ge&&t.texStorage2D(i.TEXTURE_2D,nt,K,Me[0].width,Me[0].height);for(let ue=0,Ve=Me.length;ue<Ve;ue++)Y=Me[ue],w.format!==Ln?ve!==null?de?Be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Y.width,Y.height,ve,Y.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,K,Y.width,Y.height,0,Y.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?Be&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Y.width,Y.height,ve,U,Y.data):t.texImage2D(i.TEXTURE_2D,ue,K,Y.width,Y.height,0,ve,U,Y.data)}else if(w.isDataArrayTexture)if(de){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,nt,K,J.width,J.height,J.depth),Be)if(w.layerUpdates.size>0){const ue=_c(J.width,J.height,w.format,w.type);for(const Ve of w.layerUpdates){const tt=J.data.subarray(Ve*ue/J.data.BYTES_PER_ELEMENT,(Ve+1)*ue/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,J.width,J.height,1,ve,U,tt)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ve,U,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,J.width,J.height,J.depth,0,ve,U,J.data);else if(w.isData3DTexture)de?(ge&&t.texStorage3D(i.TEXTURE_3D,nt,K,J.width,J.height,J.depth),Be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ve,U,J.data)):t.texImage3D(i.TEXTURE_3D,0,K,J.width,J.height,J.depth,0,ve,U,J.data);else if(w.isFramebufferTexture){if(ge)if(de)t.texStorage2D(i.TEXTURE_2D,nt,K,J.width,J.height);else{let ue=J.width,Ve=J.height;for(let tt=0;tt<nt;tt++)t.texImage2D(i.TEXTURE_2D,tt,K,ue,Ve,0,ve,U,null),ue>>=1,Ve>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),J.parentNode!==ue){ue.appendChild(J),l.add(w),ue.onpaint=Ve=>{const tt=Ve.changedElements;for(const Te of l)tt.includes(Te.image)&&(Te.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{const tt=i.RGBA,Te=i.RGBA,_t=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,tt,Te,_t,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(de&&ge){const ue=qe(Me[0]);t.texStorage2D(i.TEXTURE_2D,nt,K,ue.width,ue.height)}for(let ue=0,Ve=Me.length;ue<Ve;ue++)Y=Me[ue],de?Be&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve,U,Y):t.texImage2D(i.TEXTURE_2D,ue,K,ve,U,Y);w.generateMipmaps=!1}else if(de){if(ge){const ue=qe(J);t.texStorage2D(i.TEXTURE_2D,nt,K,ue.width,ue.height)}Be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,U,J)}else t.texImage2D(i.TEXTURE_2D,0,K,ve,U,J);_(w)&&w.mipmapsAutoUpdate===!0&&v(le),be.__version=me.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function fe(R,w,V){if(w.image.length!==6)return;const le=et(R,w),ne=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const me=n.get(ne);if(ne.version!==me.__version||le===!0){t.activeTexture(i.TEXTURE0+V);const be=ut.getPrimaries(ut.workingColorSpace),$=w.colorSpace===ii?null:ut.getPrimaries(w.colorSpace),J=w.colorSpace===ii||be===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const ve=w.isCompressedTexture||w.image[0].isCompressedTexture,U=w.image[0]&&w.image[0].isDataTexture,K=[];for(let Te=0;Te<6;Te++)!ve&&!U?K[Te]=m(w.image[Te],!0,s.maxCubemapSize):K[Te]=U?w.image[Te].image:w.image[Te],K[Te]=We(w,K[Te]);const Y=K[0],Me=r.convert(w.format,w.colorSpace),de=r.convert(w.type);let ge=b(w.internalFormat,Me,de,w.normalized,w.colorSpace);const Be=w.isVideoTexture!==!0,nt=me.__version===void 0||le===!0,ue=ne.dataReady;let Ve=y(w,Y);Je(i.TEXTURE_CUBE_MAP,w);let tt;if(w.isDepthTexture){if(ge=M(w.format===mi,w.type),nt)if(Be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ge,Y.width,Y.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ge,Y.width,Y.height,0,Me,de,null)}else if(ve){Be&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ge,Y.width,Y.height);for(let Te=0;Te<6;Te++){tt=K[Te].mipmaps;for(let _t=0;_t<tt.length;_t++){const Xt=tt[_t];w.format!==Ln?Me!==null?Be?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,_t,0,0,Xt.width,Xt.height,Me,Xt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,_t,ge,Xt.width,Xt.height,0,Xt.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,_t,0,0,Xt.width,Xt.height,Me,de,Xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,_t,ge,Xt.width,Xt.height,0,Me,de,Xt.data)}}}else{if(tt=w.mipmaps,Be&&nt){tt.length>0&&Ve++;const Te=qe(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,ge,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(U){Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,K[Te].width,K[Te].height,Me,de,K[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ge,K[Te].width,K[Te].height,0,Me,de,K[Te].data);for(let _t=0;_t<tt.length;_t++){const ai=tt[_t].image[Te].image;Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,_t+1,0,0,ai.width,ai.height,Me,de,ai.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,_t+1,ge,ai.width,ai.height,0,Me,de,ai.data)}}else{Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Me,de,K[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ge,Me,de,K[Te]);for(let _t=0;_t<tt.length;_t++){const Xt=tt[_t];Be?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,_t+1,0,0,Me,de,Xt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,_t+1,ge,Me,de,Xt.image[Te])}}}_(w)&&w.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),me.__version=ne.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function pe(R,w,V,le,ne,me){const be=r.convert(V.format,V.colorSpace),$=r.convert(V.type),J=b(V.internalFormat,be,$,V.normalized,V.colorSpace),ve=n.get(w),U=n.get(V);if(U.__renderTarget=w,!ve.__hasExternalTextures){const K=Math.max(1,w.width>>me),Y=Math.max(1,w.height>>me);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,me,J,K,Y,w.depth,0,be,$,null):t.texImage2D(ne,me,J,K,Y,0,be,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,ne,U.__webglTexture,0,yt(w)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,ne,U.__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(R,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),w.depthBuffer){const le=w.depthTexture,ne=le&&le.isDepthTexture?le.type:null,me=M(w.stencilBuffer,ne),be=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(w),me,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(w),me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,R)}else{const le=w.textures;for(let ne=0;ne<le.length;ne++){const me=le[ne],be=r.convert(me.format,me.colorSpace),$=r.convert(me.type),J=b(me.internalFormat,be,$,me.normalized,me.colorSpace);ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(w),J,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(w),J,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,J,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(R,w,V){const le=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ne=n.get(w.depthTexture);ne.__renderTarget=w;const me=le?w.depthTexture.image[0]:w.depthTexture.image;(!ne.__webglTexture||me.width!==w.width||me.height!==w.height)&&(me.width=w.width,me.height=w.height,w.depthTexture.needsUpdate=!0),le?he(w.depthTexture,0):we(w.depthTexture,0);const be=ne.__webglTexture,$=yt(w),J=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ve=w.depthTexture.format===mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===gi)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,J,be,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ve,J,be,0);else if(w.depthTexture.format===mi)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,J,be,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,ve,J,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Xe(R){const w=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const le=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),le){const ne=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,le.removeEventListener("dispose",ne)};le.addEventListener("dispose",ne),w.__depthDisposeCallback=ne}w.__boundDepthTexture=le}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(V)for(let le=0;le<6;le++)Ue(w.__webglFramebuffer[le],R,le);else R.texture.mipmaps.length>0?Ue(w.__webglFramebuffer[0],R,0):Ue(w.__webglFramebuffer,R,0);else if(V){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]===void 0)w.__webglDepthbuffer[le]=i.createRenderbuffer(),He(w.__webglDepthbuffer[le],R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,me)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),He(w.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,me),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(R,w,V){const le=n.get(R);w!==void 0&&pe(le.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Xe(R)}function rt(R){const w=R.texture,V=n.get(R),le=n.get(w);R.addEventListener("dispose",I),C(R);const ne=R.textures,me=R.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=w.version,a.memory.textures++),me){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(w.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let J=0;J<w.mipmaps.length;J++)V.__webglFramebuffer[$][J]=i.createFramebuffer()}else V.__webglFramebuffer[$]=i.createFramebuffer()}else{if(w.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<w.mipmaps.length;$++)V.__webglFramebuffer[$]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(be)for(let $=0,J=ne.length;$<J;$++){const ve=n.get(ne[$]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ye(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<ne.length;$++){const J=ne[$];V.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[$]);const ve=r.convert(J.format,J.colorSpace),U=r.convert(J.type),K=b(J.internalFormat,ve,U,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),Y=yt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,K,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,V.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),He(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Je(i.TEXTURE_CUBE_MAP,w);for(let $=0;$<6;$++)if(w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)pe(V.__webglFramebuffer[$][J],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,J);else pe(V.__webglFramebuffer[$],R,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);_(w)?v(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(be){for(let $=0,J=ne.length;$<J;$++){const ve=ne[$],U=n.get(ve);let K=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,U.__webglTexture),Je(K,ve),pe(V.__webglFramebuffer,R,ve,i.COLOR_ATTACHMENT0+$,K,0),_(ve)&&v(K)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,le.__webglTexture),Je($,w),w.mipmaps.length>0)for(let J=0;J<w.mipmaps.length;J++)pe(V.__webglFramebuffer[J],R,w,i.COLOR_ATTACHMENT0,$,J);else pe(V.__webglFramebuffer,R,w,i.COLOR_ATTACHMENT0,$,0);_(w)?v($):w.mipmaps.length>0&&i.texParameteri($,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Xe(R)}function O(R){const w=R.textures;for(let V=0,le=w.length;V<le;V++){const ne=w[V];if(_(ne)&&ne.mipmapsAutoUpdate===!0){const me=E(R),be=n.get(ne).__webglTexture;t.bindTexture(me,be),v(me),t.unbindTexture()}}}const Ft=[];function at(R){if(R.samples>0){if(ye(R)===!1){const w=R.textures,V=R.width,le=R.height;let ne=i.COLOR_BUFFER_BIT;const me=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(R),$=w.length>1;if($)for(let ve=0;ve<w.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const U=n.get(w[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,V,le,0,0,V,le,ne,i.NEAREST),c===!0&&(Ft.length=0,Ft.push(i.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ft.push(me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let ve=0;ve<w.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,be.__webglColorRenderbuffer[ve]);const U=n.get(w[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const w=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function yt(R){return Math.min(s.maxSamples,R.samples)}function ye(R){const w=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(R){const w=a.render.frame;h.get(R)!==w&&(h.set(R,w),R.update())}function We(R,w){const V=R.colorSpace,le=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==na&&V!==ii&&(ut.getTransfer(V)===vt?(le!==Ln||ne!==vn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",V)),w}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=Ge,this.resetTextureUnits=Q,this.getTextureUnits=re,this.setTextureUnits=Pe,this.setTexture2D=we,this.setTexture2DArray=Re,this.setTexture3D=Fe,this.setTextureCube=he,this.rebindTextures=$e,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ye,this.dispose=z}function tx(i,e){function t(n,s=ii){let r;const a=ut.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lu)return i.BYTE;if(n===cu)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===$n)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Qt)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===du)return i.RGB;if(n===Ln)return i.RGBA;if(n===gi)return i.DEPTH_COMPONENT;if(n===mi)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===Ni)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===kr||n===Vr||n===Wr||n===Xr)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===uo||n===ho||n===fo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go||n===xo||n===_o||n===jr||n===vo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===mo)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===go)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xo)return r.COMPRESSED_R11_EAC;if(n===_o)return r.COMPRESSED_SIGNED_R11_EAC;if(n===jr)return r.COMPRESSED_RG11_EAC;if(n===vo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mo||n===So||n===yo||n===bo||n===Eo||n===wo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===So)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===To)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ao)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Po)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uo||n===No||n===Fo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Uo)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oo||n===zo||n===ea||n===Bo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
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

}`;class sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ru(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Gt({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rx extends zi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,u=null,h=null,l=null,d=null,f=null,p=null;const S=typeof XRWebGLBinding<"u",x=new sx,g={},m=t.getContextAttributes();let _=null,v=null;const E=[],b=[],M=new oe;let y=null,C=null;const A=new _n;A.viewport=new Nt;const L=new _n;L.viewport=new Nt;const I=[A,L],N=new m0;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let we=E[Z];return we===void 0&&(we=new Pa,E[Z]=we),we.getTargetRaySpace()},this.getControllerGrip=function(Z){let we=E[Z];return we===void 0&&(we=new Pa,E[Z]=we),we.getGripSpace()},this.getHand=function(Z){let we=E[Z];return we===void 0&&(we=new Pa,E[Z]=we),we.getHandSpace()};function k(Z){const we=b.indexOf(Z.inputSource);if(we===-1)return;const Re=E[we];Re!==void 0&&(Re.update(Z.inputSource,Z.frame,u||a),Re.dispatchEvent({type:Z.type,data:Z.inputSource}))}function B(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",se);for(let Z=0;Z<E.length;Z++){const we=b[Z];we!==null&&(b[Z]=null,E[Z].disconnect(we))}P=null,z=null,x.reset();for(const Z in g)delete g[Z];if(e.setRenderTarget(_),f=null,d=null,l=null,s=null,v=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(M.width,M.height,!1),C!==null){const Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return l===null&&S&&(l=new XRWebGLBinding(s,t)),l},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",B),s.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(M),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Fe=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=m.stencil?mi:gi,Fe=m.stencil?us:$n);const ze={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};l=this.getBinding(),d=l.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new jt(d.textureWidth,d.textureHeight,{format:Ln,type:vn,depthTexture:new hs(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new jt(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function se(Z){for(let we=0;we<Z.removed.length;we++){const Re=Z.removed[we],Fe=b.indexOf(Re);Fe>=0&&(b[Fe]=null,E[Fe].disconnect(Re))}for(let we=0;we<Z.added.length;we++){const Re=Z.added[we];let Fe=b.indexOf(Re);if(Fe===-1){for(let ze=0;ze<E.length;ze++)if(ze>=b.length){b.push(Re),Fe=ze;break}else if(b[ze]===null){b[ze]=Re,Fe=ze;break}if(Fe===-1)break}const he=E[Fe];he&&he.connect(Re)}}function X(Z,we){we===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(we.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let we=Z.near,Re=Z.far;x.texture!==null&&(x.depthNear>0&&(we=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),N.near=L.near=A.near=we,N.far=L.far=A.far=Re,(P!==N.near||z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,z=N.far),N.layers.mask=Z.layers.mask|6,A.layers.mask=N.layers.mask&-5,L.layers.mask=N.layers.mask&-3;const Fe=Z.parent,he=N.cameras;X(N,Fe);for(let ze=0;ze<he.length;ze++)X(he[ze],Fe);N.projectionMatrix.copy(A.projectionMatrix),N.projectionMatrixInverse.copy(A.projectionMatrixInverse),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,N,Fe)};function Q(Z,we,Re){Re===null?Z.matrix.copy(we.matrixWorld):(Z.matrix.copy(Re.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(we.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(we.projectionMatrix),Z.projectionMatrixInverse.copy(we.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ra*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(N)},this.getCameraTexture=function(Z){return g[Z]};let re=null;function Pe(Z,we){if(h=we.getViewerPose(u||a),p=we,h!==null){const Re=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Fe=!1;Re.length!==N.cameras.length&&(N.cameras.length=0,Fe=!0);for(let ke=0;ke<Re.length;ke++){const Je=Re[ke];let et=null;if(f!==null)et=f.getViewport(Je);else{const G=l.getViewSubImage(d,Je);et=G.viewport,ke===0&&(e.setRenderTargetTextures(v,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(v))}let te=I[ke];te===void 0&&(te=new _n,te.layers.enable(ke),te.viewport=new Nt,I[ke]=te),te.matrix.fromArray(Je.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Je.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(et.x,et.y,et.width,et.height),ke===0&&(N.matrix.copy(te.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Fe===!0&&N.cameras.push(te)}const he=s.enabledFeatures;if(he&&he.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){l=n.getBinding();const ke=l.getDepthInformation(Re[0]);ke&&ke.isValid&&ke.texture&&x.init(ke,s.renderState)}if(he&&he.includes("camera-access")&&S){e.state.unbindTexture(),l=n.getBinding();for(let ke=0;ke<Re.length;ke++){const Je=Re[ke].camera;if(Je){let et=g[Je];et||(et=new Ru,g[Je]=et);const te=l.getCameraImage(Je);et.sourceTexture=te}}}}for(let Re=0;Re<E.length;Re++){const Fe=b[Re],he=E[Re];Fe!==null&&he!==void 0&&he.update(Fe,we,u||a)}re&&re(Z,we),we.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:we}),p=null}const Ge=new Wu;Ge.setAnimationLoop(Pe),this.setAnimationLoop=function(Z){re=Z},this.dispose=function(){}}}const ax=new ht,eh=new je;eh.set(-1,0,0,0,1,0,0,0,1);function ox(i,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,zu(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,m,_,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),l(x,g)):g.isMeshPhongMaterial?(r(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),d(x,g),g.isMeshPhysicalMaterial&&f(x,g,v)):g.isMeshMatcapMaterial?(r(x,g),p(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),S(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&o(x,g)):g.isPointsMaterial?c(x,g,m,_):g.isSpriteMaterial?u(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===mn&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===mn&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const m=e.get(g),_=m.envMap,v=m.envMapRotation;_&&(x.envMap.value=_,x.envMapRotation.value.setFromMatrix4(ax.makeRotationFromEuler(v)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(eh),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function o(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,m,_){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*m,x.scale.value=_*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function u(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function l(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function d(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function f(x,g,m){x.ior.value=g.ior,g.diffuseRoughness>0&&(x.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=m.texture,x.transmissionSamplerSize.value.set(m.width,m.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,g){g.matcap&&(x.matcap.value=g.matcap)}function S(x,g){const m=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(m.matrixWorld),x.nearDistance.value=m.shadow.camera.near,x.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lx(i,e,t,n){let s={},r={};function a(m,_){const v=_.program;n.uniformBlockBinding(m,v,s[m.id])}function o(m,_){let v=s[m.id];v===void 0&&(p(m),v=c(m),s[m.id]=v,m.addEventListener("dispose",x));const E=_.program;n.updateUBOMapping(m,E);const b=e.render.frame;r[m.id]!==b&&(u(m),r[m.id]=b)}function c(m){const _=i.createBuffer(),v=m.__size,E=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),_}function u(m){const _=s[m.id],v=m.uniforms,E=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,M=v.length;b<M;b++){const y=v[b];if(Array.isArray(y))for(let C=0,A=y.length;C<A;C++)h(y[C],b,C,E);else h(y,b,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(m,_,v,E){if(d(m,_,v,E)===!0){const b=m.__offset,M=m.value;if(Array.isArray(M)){let y=0;for(let C=0;C<M.length;C++){const A=M[C],L=S(A,!0);l(A,m.__data,y),y+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else l(M,m.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,m.__data)}}function l(m,_,v){typeof m=="number"||typeof m=="boolean"?_[v]=m:m.isMatrix3?(_[v]=m.elements[0],_[v+1]=m.elements[1],_[v+2]=m.elements[2],_[v+3]=0,_[v+4]=m.elements[3],_[v+5]=m.elements[4],_[v+6]=m.elements[5],_[v+7]=0,_[v+8]=m.elements[6],_[v+9]=m.elements[7],_[v+10]=m.elements[8],_[v+11]=0):ArrayBuffer.isView(m)?_.set(m.subarray(0,_.length-v),v):m.toArray(_,v)}function d(m,_,v,E){const b=m.value,M=_+"_"+v;if(Array.isArray(b)){E[M]===void 0&&(E[M]=[]);const y=E[M];let C=!1;for(let A=0;A<b.length;A++)f(b[A],y,A)===!0&&(C=!0);return C}return f(b,E,M)}function f(m,_,v){if(_[v]===void 0)return typeof m=="number"||typeof m=="boolean"?_[v]=m:ArrayBuffer.isView(m)?_[v]=m.slice():_[v]=m.clone(),!0;{const E=_[v];if(typeof m=="number"||typeof m=="boolean"){if(E!==m)return _[v]=m,!0}else{if(ArrayBuffer.isView(m))return!0;if(E.equals(m)===!1)return E.copy(m),!0}}return!1}function p(m){const _=m.uniforms;let v=0;const E=16;for(let M=0,y=_.length;M<y;M++){const C=Array.isArray(_[M])?_[M]:[_[M]];for(let A=0,L=C.length;A<L;A++){const I=C[A],N=Array.isArray(I.value)?I.value:[I.value],P=Array.isArray(_[M])||Array.isArray(I.value);let z=v;for(let B=0,se=N.length;B<se;B++){const X=N[B],Q=S(X,P),re=v%E,Pe=re%Q.boundary,Ge=re+Pe;v+=Pe,Ge!==0&&E-Ge<Q.storage&&(v+=E-Ge),B===0&&(z=v),v+=Q.storage}const k=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new k((v-z)/Float32Array.BYTES_PER_ELEMENT),I.__offset=z}}const b=v%E;return b>0&&(v+=E-b),m.__size=v,m.__cache={},this}function S(m,_){const v={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(v.boundary=4,v.storage=4):m.isVector2?(v.boundary=8,v.storage=8):m.isVector3||m.isColor?(v.boundary=16,v.storage=12):m.isVector4?(v.boundary=16,v.storage=16):m.isMatrix3?(v.boundary=16,v.storage=48):m.isMatrix4?(v.boundary=16,v.storage=64):m.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(v.boundary=16,v.storage=m.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",m),_===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function x(m){const _=m.target;_.removeEventListener("dispose",x),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function g(){for(const m in s)i.deleteBuffer(s[m]);s={},r={}}return{bind:a,update:o,dispose:g}}const cx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wn=null;function ux(){return Wn===null&&(Wn=new ua(cx,16,16,Ni,Qt),Wn.name="DFG_LUT",Wn.minFilter=dn,Wn.magFilter=dn,Wn.wrapS=qn,Wn.wrapT=qn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}class hx{constructor(e={}){const{canvas:t=Kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reversedDepthBuffer:d=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const S=f,x=new Set([al,rl,sl]),g=new Set([vn,$n,Zs,us,tl,nl]),m=new Uint32Array(4),_=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]};let E=null,b=null;const M=[],y=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1,I=null,N=null,P=null,z=null;this._outputColorSpace=rn;let k=0,B=0,se=null,X=-1,Q=null;const re=new Nt,Pe=new Nt;let Ge=null;const Z=new Oe(0);let we=0,Re=t.width,Fe=t.height,he=1,ze=null,St=null;const ke=new Nt(0,0,Re,Fe),Je=new Nt(0,0,Re,Fe);let et=!1;const te=new Js,G=new ul;let ae=!1,fe=!1;const pe=new ht,He=new D,Ue=new Nt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function rt(){return se===null?he:1}let O=n;function Ft(T,F){return t.getContext(T,F)}let at,yt,ye,It,We,qe,R,w,V,le,ne,me,be,$,J,ve,U,K,Y,Me,de,ge,Be;try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ko}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",Te,!1),O===null){const F="webgl2";if(O=Ft(F,T),O===null)throw Ft(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(T){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),mt("WebGLRenderer: "+T.message),T}function nt(){at=new pm(O),at.init(),de=new tx(O,at),yt=new im(O,at,e,de),ye=new jg(O,at),yt.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),N=O.createFramebuffer(),P=O.createFramebuffer(),z=O.createFramebuffer(),It=new xm(O),We=new Bg,qe=new ex(O,at,ye,We,yt,de,It),R=new dm(A),w=new v0(O),ge=new tm(O,w),V=new mm(O,w,It,ge),le=new vm(O,V,w,ge,It),K=new _m(O,yt,qe),J=new sm(We),ne=new zg(A,R,at,yt,ge,J),me=new ox(A,We),be=new Hg,$=new Yg(at),U=new em(A,R,ye,le,p,c),ve=new Qg(A,le,yt),Be=new lx(O,It,yt,ye),Y=new nm(O,at,It),Me=new gm(O,at,It),It.programs=ne.programs,A.capabilities=yt,A.extensions=at,A.properties=We,A.renderLists=be,A.shadowMap=ve,A.state=ye,A.info=It}S!==vn&&(C=new Sm(S,t.width,t.height,o,s,r));const ue=new rx(A,O);this.xr=ue,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(Re,Fe,!1))},this.getSize=function(T){return T.set(Re,Fe)},this.setSize=function(T,F,q=!0){if(ue.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=T,Fe=F,t.width=Math.floor(T*he),t.height=Math.floor(F*he),q===!0&&(t.style.width=T+"px",t.style.height=F+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(Re*he,Fe*he).floor()},this.setDrawingBufferSize=function(T,F,q){Re=T,Fe=F,he=q,t.width=Math.floor(T*q),t.height=Math.floor(F*q),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(S===vn){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(re)},this.getViewport=function(T){return T.copy(ke)},this.setViewport=function(T,F,q,H){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,F,q,H),ye.viewport(re.copy(ke).multiplyScalar(rt()).round())},this.getScissor=function(T){return T.copy(Je)},this.setScissor=function(T,F,q,H){T.isVector4?Je.set(T.x,T.y,T.z,T.w):Je.set(T,F,q,H),ye.scissor(Pe.copy(Je).multiplyScalar(rt()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){ye.setScissorTest(et=T)},this.setOpaqueSort=function(T){ze=T},this.setTransparentSort=function(T){St=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,q=!0){let H=0;if(T){let W=!1;if(se!==null){const Ee=se.texture.format;W=x.has(Ee)}if(W){const Ee=se.texture.type,Le=g.has(Ee),Se=U.getClearColor(),Ce=U.getClearAlpha(),Ne=Se.r,Qe=Se.g,lt=Se.b;Le?(m[0]=Ne,m[1]=Qe,m[2]=lt,m[3]=Ce,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=Ne,_[1]=Qe,_[2]=lt,_[3]=Ce,O.clearBufferiv(O.COLOR,0,_))}else H|=O.COLOR_BUFFER_BIT}F&&(H|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),U.dispose(),be.dispose(),$.dispose(),qe.dispose(),We.dispose(),R.dispose(),le.dispose(),V.dispose(),ge.dispose(),Be.dispose(),ne.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",El),ue.removeEventListener("sessionend",wl),vi.stop()};function Ve(T){T.preventDefault(),Bl("WebGLRenderer: Context Lost."),L=!0}function tt(){Bl("WebGLRenderer: Context Restored."),L=!1;const T=It.autoReset,F=ve.enabled,q=ve.autoUpdate,H=ve.needsUpdate,W=ve.type;nt(),It.autoReset=T,ve.enabled=F,ve.autoUpdate=q,ve.needsUpdate=H,ve.type=W}function Te(T){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function _t(T){const F=T.target;F.removeEventListener("dispose",_t),Xt(F)}function Xt(T){ai(T),We.remove(T)}function ai(T){const F=We.get(T).programs;F!==void 0&&(F.forEach(function(q){ne.releaseProgram(q)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,q,H,W,Ee){F===null&&(F=Xe);const Le=W.isMesh&&W.matrixWorld.determinantAffine()<0,Se=gh(T,F,q,H,W);ye.setMaterial(H,Le);let Ce=q.index,Ne=1;if(H.wireframe===!0){if(Ce=V.getWireframeAttribute(q),Ce===void 0)return;Ne=2}const Qe=q.drawRange,lt=q.attributes.position;let De=Qe.start*Ne,ct=(Qe.start+Qe.count)*Ne;Ee!==null&&(De=Math.max(De,Ee.start*Ne),ct=Math.min(ct,(Ee.start+Ee.count)*Ne)),Ce!==null?(De=Math.max(De,0),ct=Math.min(ct,Ce.count)):lt!=null&&(De=Math.max(De,0),ct=Math.min(ct,lt.count));const Ot=ct-De;if(Ot<0||Ot===1/0)return;ge.setup(W,H,Se,q,Ce);let wt,bt=Y;if(Ce!==null&&(wt=w.get(Ce),bt=Me,bt.setIndex(wt)),W.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*rt()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(W.isLine){let en=H.linewidth;en===void 0&&(en=1),ye.setLineWidth(en*rt()),W.isLineSegments?bt.setMode(O.LINES):W.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else W.isPoints?bt.setMode(O.POINTS):W.isSprite&&bt.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(at.get("WEBGL_multi_draw"))bt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const en=W._multiDrawStarts,Ie=W._multiDrawCounts,un=W._multiDrawCount,gt=Ce?w.get(Ce).bytesPerElement:1,Mi=We.get(H).currentProgram.getUniforms();for(let tn=0;tn<un;tn++)Mi.setValue(O,"_gl_DrawID",tn),bt.render(en[tn]/gt,Ie[tn])}else if(W.isInstancedMesh)bt.renderInstances(De,Ot,W.count);else if(q.isInstancedBufferGeometry){const en=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,en);bt.renderInstances(De,Ot,Ie)}else bt.render(De,Ot)};function bl(T,F,q,H){I!==null&&T.isNodeMaterial&&I.setObject(H,T),ae===!0&&J.setState(T,q,!1),T.transparent===!0&&T.side===On&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,bs(T,F,H),T.side=Ii,T.needsUpdate=!0,bs(T,F,H),T.side=On):bs(T,F,H)}this.compile=function(T,F,q=null){q===null&&(q=T),I!==null&&I.renderStart(T,F,q),b=$.get(q),b.init(F),y.push(b),q.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),T!==q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),fe=this.localClippingEnabled,ae=J.init(this.clippingPlanes,fe),ae===!0&&J.setGlobalState(this.clippingPlanes,F),I!==null&&ve.render(b.state.shadowsArray,q,F);const H=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Ee=W.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){const Se=Ee[Le];bl(Se,q,F,W),H.add(Se)}else bl(Ee,q,F,W),H.add(Ee)}),b=y.pop(),I!==null&&I.renderEnd(),H},this.compileAsync=function(T,F,q=null){const H=this.compile(T,F,q);return new Promise(W=>{function Ee(){if(H.forEach(function(Le){const Ce=We.get(Le).currentProgram;(Ce===void 0||Ce.isReady())&&H.delete(Le)}),H.size===0){W(T);return}setTimeout(Ee,10)}at.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let xa=null;function ph(T){xa&&xa(T)}function El(){vi.stop()}function wl(){vi.start()}const vi=new Wu;vi.setAnimationLoop(ph),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(T){xa=T,ue.setAnimationLoop(T),T===null?vi.stop():vi.start()},ue.addEventListener("sessionstart",El),ue.addEventListener("sessionend",wl),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(T,F);const q=ue.enabled===!0&&ue.isPresenting===!0,H=C!==null&&(se===null||q)&&C.begin(A,se);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,F,se),b=$.get(T,y.length),b.init(F),b.state.textureUnits=qe.getTextureUnits(),y.push(b),pe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?G.setFromArrayCamera(F):te.setFromProjectionMatrix(pe,Gn,F.reversedDepth),fe=this.localClippingEnabled,ae=J.init(this.clippingPlanes,fe),E=be.get(T,M.length),E.init(),M.push(E),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){const Le=A.xr.getDepthSensingMesh();Le!==null&&_a(Le,F,-1/0,A.sortObjects)}_a(T,F,0,A.sortObjects),E.finish(),I!==null&&I.updateLights(b.state.lightsArray),A.sortObjects===!0&&E.sort(ze,St),$e=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,$e&&U.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),ae===!0&&J.beginShadows();const W=b.state.shadowsArray;if(ve.render(W,T,F),ae===!0&&J.endShadows(),(H&&C.hasRenderPass())===!1){const Le=E.opaque,Se=E.transmissive;if(b.setupLights(),F.isArrayCamera){const Ce=F.cameras;if(Se.length>0)for(let Ne=0,Qe=Ce.length;Ne<Qe;Ne++){const lt=Ce[Ne];Al(Le,Se,T,lt)}$e&&U.render(T);for(let Ne=0,Qe=Ce.length;Ne<Qe;Ne++){const lt=Ce[Ne];Tl(E,T,lt,lt.viewport)}}else Se.length>0&&Al(Le,Se,T,F),$e&&U.render(T),Tl(E,T,F)}se!==null&&B===0&&(qe.updateMultisampleRenderTarget(se),qe.updateRenderTargetMipmap(se)),H&&C.end(A),T.isScene===!0&&T.onAfterRender(A,T,F),ge.resetDefaultState(),X=-1,Q=null,y.pop(),y.length>0?(b=y[y.length-1],qe.setTextureUnits(b.state.textureUnits),ae===!0&&J.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,M.pop(),M.length>0?E=M[M.length-1]:E=null,I!==null&&I.renderEnd()};function _a(T,F,q,H){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){const Le=F.isArrayCamera?G:te;if(!T.frustumCulled||T.intersectsFrustum(Le)){H&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const Se=le.update(T),Ce=T.material;Ce.visible&&E.push(T,Se,Ce,q,Ue.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){const Le=F.isArrayCamera?G:te;if(!T.frustumCulled||T.intersectsFrustum(Le)){const Se=le.update(T),Ce=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ue.copy(Se.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(Ce)){const Ne=Se.groups;for(let Qe=0,lt=Ne.length;Qe<lt;Qe++){const De=Ne[Qe],ct=Ce[De.materialIndex];ct&&ct.visible&&E.push(T,Se,ct,q,Ue.z,De,F)}}else Ce.visible&&E.push(T,Se,Ce,q,Ue.z,null,F)}}}const Ee=T.children;for(let Le=0,Se=Ee.length;Le<Se;Le++)_a(Ee[Le],F,q,H)}function Tl(T,F,q,H){const{opaque:W,transmissive:Ee,transparent:Le}=T;b.setupLightsView(q),ae===!0&&J.setGlobalState(A.clippingPlanes,q),H&&ye.viewport(re.copy(H)),W.length>0&&or(W,F,q),Ee.length>0&&or(Ee,F,q),Le.length>0&&or(Le,F,q),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Al(T,F,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const De=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new jt(1,1,{generateMipmaps:!0,type:De?Qt:vn,minFilter:si,samples:Math.max(4,yt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const Ee=b.state.transmissionRenderTarget[H.id],Le=H.viewport||re;Ee.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);const Se=A.getRenderTarget(),Ce=A.getActiveCubeFace(),Ne=A.getActiveMipmapLevel();A.setRenderTarget(Ee),A.getClearColor(Z),we=A.getClearAlpha(),we<1&&A.setClearColor(16777215,.5),A.clear(),$e&&U.render(q);const Qe=A.toneMapping;A.toneMapping=Yn;const lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ae===!0&&J.setGlobalState(A.clippingPlanes,H),or(T,q,H),qe.updateMultisampleRenderTarget(Ee),qe.updateRenderTargetMipmap(Ee),at.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ct=0,Ot=F.length;ct<Ot;ct++){const wt=F[ct],{object:bt,geometry:en,material:Ie,group:un}=wt;if(Ie.side===On&&bt.layers.test(H.layers)){const gt=Ie.side;Ie.side=mn,Ie.needsUpdate=!0,Rl(bt,q,H,en,Ie,un),Ie.side=gt,Ie.needsUpdate=!0,De=!0}}De===!0&&(qe.updateMultisampleRenderTarget(Ee),qe.updateRenderTargetMipmap(Ee))}A.setRenderTarget(Se,Ce,Ne),A.setClearColor(Z,we),lt!==void 0&&(H.viewport=lt),A.toneMapping=Qe}function or(T,F,q){const H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Ee=T.length;W<Ee;W++){const Le=T[W],{object:Se,geometry:Ce,group:Ne}=Le;let Qe=Le.material;Qe.allowOverride===!0&&H!==null&&(Qe=H),Se.layers.test(q.layers)&&Rl(Se,F,q,Ce,Qe,Ne)}}function Rl(T,F,q,H,W,Ee){I!==null&&W.isNodeMaterial&&I.setObject(T,W),T.onBeforeRender(A,F,q,H,W,Ee),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(A,F,q,H,T,Ee),W.transparent===!0&&W.side===On&&W.forceSinglePass===!1?(W.side=mn,W.needsUpdate=!0,A.renderBufferDirect(q,F,H,W,T,Ee),W.side=Ii,W.needsUpdate=!0,A.renderBufferDirect(q,F,H,W,T,Ee),W.side=On):A.renderBufferDirect(q,F,H,W,T,Ee),T.onAfterRender(A,F,q,H,W,Ee)}function Cl(T){let F=0;for(const q of T)q.texture!==null&&F++;return F}function bs(T,F,q){F.isScene!==!0&&(F=Xe);const H=We.get(T),W=b.state.lights,Ee=b.state.shadowsArray,Le=W.state.version,Se=ne.getParameters(T,W.state,Ee,F,q,b.state.lightProbeGridArray),Ce=ne.getProgramCacheKey(Se);let Ne=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const Qe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=R.get(T.envMap||H.environment,Qe),H.envMapRotation=H.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",_t),Ne=new Map,H.programs=Ne,H.programVariants=new Map);let lt=Ne.get(Ce);if(lt!==void 0){if(H.currentProgram===lt&&H.lightsStateVersion===Le)return Ll(T,Se),lt}else Se.uniforms=ne.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,q,Se),T.onBeforeCompile(Se,A),lt=ne.acquireProgram(Se,Ce),Ne.set(Ce,lt),H.uniforms=Se.uniforms;const De=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(De.clippingPlanes=J.uniform),Ll(T,Se),H.needsLights=_h(T),H.lightsStateVersion=Le,H.needsLights&&(De.ambientLightColor.value=W.state.ambient,De.lightProbe.value=W.state.probe,De.sunLights.value=W.state.sun,De.sunLightShadows.value=W.state.sunShadow,De.directionalLights.value=W.state.directional,De.directionalLightShadows.value=W.state.directionalShadow,De.spotLights.value=W.state.spot,De.spotLightShadows.value=W.state.spotShadow,De.rectAreaLights.value=W.state.rectArea,De.ltc_1.value=W.state.rectAreaLTC1,De.ltc_2.value=W.state.rectAreaLTC2,De.pointLights.value=W.state.point,De.pointLightShadows.value=W.state.pointShadow,De.hemisphereLights.value=W.state.hemi,De.sunShadowMatrix.value=W.state.sunShadowMatrix,De.sunShadowCascade.value=W.state.sunShadowCascade,De.directionalShadowMatrix.value=W.state.directionalShadowMatrix,De.spotLightMatrix.value=W.state.spotLightMatrix,De.spotLightMap.value=W.state.spotLightMap,De.pointShadowMatrix.value=W.state.pointShadowMatrix),H.numLightProbeGrids=Cl(b.state.lightProbeGridArray),H.currentProgram=lt,H.uniformsList=null,lt}function mh(T,F,q,H,W){const Ee=We.get(T),Le=Ee.currentProgram.id+","+H+","+W;let Se=Ee.programVariants.get(Le);return Se===void 0?(Se=bs(T,F,q),Ee.programVariants.set(Le,Se)):(Ee.currentProgram=Se,Ee.uniformsList=null,Ee.outputColorSpace=H,Ee.toneMapping=W),Se}function Pl(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Yr.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ll(T,F){const q=We.get(T);q.outputColorSpace=F.outputColorSpace,q.batching=F.batching,q.batchingColor=F.batchingColor,q.instancing=F.instancing,q.instancingColor=F.instancingColor,q.instancingMorph=F.instancingMorph,q.skinning=F.skinning,q.morphTargets=F.morphTargets,q.morphNormals=F.morphNormals,q.morphColors=F.morphColors,q.morphTargetsCount=F.morphTargetsCount,q.numClippingPlanes=F.numClippingPlanes,q.numIntersection=F.numClipIntersection,q.vertexAlphas=F.vertexAlphas,q.vertexTangents=F.vertexTangents,q.toneMapping=F.toneMapping}function gh(T,F,q,H,W){F.isScene!==!0&&(F=Xe),qe.resetTextureUnits();const Ee=F.fog,Le=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,Se=se===null?A.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ut.workingColorSpace,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ne=R.get(H.envMap||Le,Ce),Qe=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,lt=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!q.morphAttributes.position,ct=!!q.morphAttributes.normal,Ot=!!q.morphAttributes.color;let wt=Yn;H.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(wt=A.toneMapping);const bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,en=bt!==void 0?bt.length:0,Ie=We.get(H),un=b.state.lights;if(ae===!0&&(fe===!0||T!==Q)){const Pt=T===Q&&H.id===X;J.setState(H,T,Pt)}let gt=!1,Mi=!1;H.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==un.state.version||W.isBatchedMesh&&Ie.batching===!1||!W.isBatchedMesh&&Ie.batching===!0||W.isBatchedMesh&&Ie.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ie.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ie.instancing===!1||!W.isInstancedMesh&&Ie.instancing===!0||W.isSkinnedMesh&&Ie.skinning===!1||!W.isSkinnedMesh&&Ie.skinning===!0||W.isInstancedMesh&&Ie.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ie.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ie.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ie.instancingMorph===!1&&W.morphTexture!==null||Ie.envMap!==Ne||H.fog===!0&&Ie.fog!==Ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==J.numPlanes||Ie.numIntersection!==J.numIntersection)||Ie.vertexAlphas!==Qe||Ie.vertexTangents!==lt||Ie.morphTargets!==De||Ie.morphNormals!==ct||Ie.morphColors!==Ot||Ie.morphTargetsCount!==en||Ie.numLightProbeGrids!==Cl(b.state.lightProbeGridArray)?gt=!0:(Ie.outputColorSpace!==Se||Ie.toneMapping!==wt)&&(Mi=!0):(gt=!0,Ie.__version=H.version);let tn=Ie.currentProgram;(gt===!0||Mi===!0)&&(tn=Mi===!0?mh(H,F,W,Se,wt):bs(H,F,W),I&&H.isNodeMaterial&&I.onUpdateProgram(H,tn,Ie));let lr=!1,oi=!1,Si=!1;const ft=tn.getUniforms(),Kt=Ie.uniforms;if(ye.useProgram(tn.program)&&(lr=!0,oi=!0,Si=!0),H.id!==X&&(X=H.id,oi=!0),lr||Q!==T){ye.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ft.setValue(O,"projectionMatrix",T.projectionMatrix),ft.setValue(O,"viewMatrix",T.matrixWorldInverse);const qt=ft.map.cameraPosition;qt!==void 0&&qt.setValue(O,He.setFromMatrixPosition(T.matrixWorld)),yt.logarithmicDepthBuffer&&ft.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ft.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),Q!==T&&(Q=T,oi=!0,Si=!0)}if(Ie.needsLights&&(un.state.sunShadowMap.length>0&&ft.setValue(O,"sunShadowMap",un.state.sunShadowMap,qe),un.state.directionalShadowMap.length>0&&ft.setValue(O,"directionalShadowMap",un.state.directionalShadowMap,qe),un.state.spotShadowMap.length>0&&ft.setValue(O,"spotShadowMap",un.state.spotShadowMap,qe),un.state.pointShadowMap.length>0&&ft.setValue(O,"pointShadowMap",un.state.pointShadowMap,qe)),W.isSkinnedMesh){ft.setOptional(O,W,"bindMatrix"),ft.setOptional(O,W,"bindMatrixInverse");const Pt=W.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ft.setValue(O,"boneTexture",Pt.boneTexture,qe))}W.isBatchedMesh&&(ft.setOptional(O,W,"batchingTexture"),ft.setValue(O,"batchingTexture",W._matricesTexture,qe),ft.setOptional(O,W,"batchingIdTexture"),ft.setValue(O,"batchingIdTexture",W._indirectTexture,qe),ft.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ft.setValue(O,"batchingColorTexture",W._colorsTexture,qe));const In=q.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&K.update(W,q,tn),(oi||Ie.receiveShadow!==W.receiveShadow)&&(Ie.receiveShadow=W.receiveShadow,ft.setValue(O,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Kt.envMapIntensity.value=F.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=ux()),oi){if(ft.setValue(O,"toneMappingExposure",A.toneMappingExposure),Ie.needsLights&&xh(Kt,Si),Ee&&H.fog===!0&&me.refreshFogUniforms(Kt,Ee),me.refreshMaterialUniforms(Kt,H,he,Fe,b.state.transmissionRenderTarget[T.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){const Pt=v;let qt=0;for(const Kn of b.state.lightProbeGridArray)Kn.texture!==null&&(Pt.textures[qt]=Kn.texture,Pt.min[qt]=Kn.boundingBox.min,Pt.max[qt]=Kn.boundingBox.max,Pt.resolution[qt]=Kn.resolution,qt++);for(const Kn in Pt)Pt[Kn].length=qt;Kt.probesSH.value=Pt.textures,Kt.probesMin.value=Pt.min,Kt.probesMax.value=Pt.max,Kt.probesResolution.value=Pt.resolution}Yr.upload(O,Pl(Ie),Kt,qe)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Yr.upload(O,Pl(Ie),Kt,qe),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ft.setValue(O,"center",W.center),ft.setValue(O,"modelViewMatrix",W.modelViewMatrix),ft.setValue(O,"normalMatrix",W.normalMatrix),ft.setValue(O,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const Pt=H.uniformsGroups;for(let qt=0,Kn=Pt.length;qt<Kn;qt++){const Il=Pt[qt];Be.update(Il,tn),Be.bind(Il,tn)}}return tn}function xh(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function _h(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(T,F,q){const H=We.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),We.get(T.texture).__webglTexture=F,We.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const q=We.get(T);q.__webglFramebuffer=F,q.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,q=0){se=T,k=F,B=q;let H=null,W=!1,Ee=!1;if(T){const Se=We.get(T);if(Se.__useDefaultFramebuffer!==void 0){ye.bindFramebuffer(O.FRAMEBUFFER,Se.__webglFramebuffer),re.copy(T.viewport),Pe.copy(T.scissor),Ge=T.scissorTest,ye.viewport(re),ye.scissor(Pe),ye.setScissorTest(Ge),X=-1;return}else if(Se.__webglFramebuffer===void 0)qe.setupRenderTarget(T);else if(Se.__hasExternalTextures)qe.rebindTextures(T,We.get(T.texture).__webglTexture,We.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Qe=T.depthTexture;if(Se.__boundDepthTexture!==Qe){if(Qe!==null&&We.has(Qe)&&(T.width!==Qe.image.width||T.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Ee=!0);const Ne=We.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?H=Ne[F][q]:H=Ne[F],W=!0):T.samples>0&&qe.useMultisampledRTT(T)===!1?H=We.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?H=Ne[q]:H=Ne,re.copy(T.viewport),Pe.copy(T.scissor),Ge=T.scissorTest}else re.copy(ke).multiplyScalar(he).floor(),Pe.copy(Je).multiplyScalar(he).floor(),Ge=et;if(q!==0&&(H=N),ye.bindFramebuffer(O.FRAMEBUFFER,H)&&ye.drawBuffers(T,H),ye.viewport(re),ye.scissor(Pe),ye.setScissorTest(Ge),W){const Se=We.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,Se.__webglTexture,q)}else if(Ee){const Se=F;for(let Ce=0;Ce<T.textures.length;Ce++){const Ne=We.get(T.textures[Ce]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ce,Ne.__webglTexture,q,Se)}}else if(T!==null&&q!==0){const Se=We.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Se.__webglTexture,q)}X=-1};function Dl(T){const F=We.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=yt.textureFormatReadable(T.format),F.__typeReadable=yt.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,q,H,W,Ee,Le,Se=0){if(!(T&&T.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ce=Ce[Le],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){ye.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const Ne=T.textures[Se],Qe=Ne.format,lt=Ne.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);const De=Dl(Ne);if(De.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-H&&q>=0&&q<=T.height-W&&O.readPixels(F,q,H,W,de.convert(Qe),de.convert(lt),Ee)}finally{const Ne=se!==null?We.get(se).__webglFramebuffer:null;ye.bindFramebuffer(O.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,F,q,H,W,Ee,Le,Se=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ce=Ce[Le],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(F>=0&&F<=T.width-H&&q>=0&&q<=T.height-W){ye.bindFramebuffer(O.FRAMEBUFFER,Ce);const Ne=T.textures[Se],Qe=Ne.format,lt=Ne.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Se);const De=Dl(Ne);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.bufferData(O.PIXEL_PACK_BUFFER,Ee.byteLength,O.STREAM_READ),O.readPixels(F,q,H,W,de.convert(Qe),de.convert(lt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Ot=se!==null?We.get(se).__webglFramebuffer:null;ye.bindFramebuffer(O.FRAMEBUFFER,Ot);const wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qh(O,wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ee),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ct),O.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,q=0){const H=Math.pow(2,-q),W=Math.floor(T.image.width*H),Ee=Math.floor(T.image.height*H),Le=F!==null?F.x:0,Se=F!==null?F.y:0;qe.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Le,Se,W,Ee),ye.unbindTexture()},this.copyTextureToTexture=function(T,F,q=null,H=null,W=0,Ee=0){let Le,Se,Ce,Ne,Qe,lt,De,ct,Ot;const wt=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(q!==null)Le=q.max.x-q.min.x,Se=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,Qe=q.min.y,lt=q.isBox3?q.min.z:0;else{const ft=Math.pow(2,-W);Le=Math.floor(wt.width*ft),Se=Math.floor(wt.height*ft),T.isDataArrayTexture?Ce=wt.depth:T.isData3DTexture?Ce=Math.floor(wt.depth*ft):Ce=1,Ne=0,Qe=0,lt=0}H!==null?(De=H.x,ct=H.y,Ot=H.z):(De=0,ct=0,Ot=0);const bt=de.convert(F.format),en=de.convert(F.type);let Ie;F.isData3DTexture?(qe.setTexture3D(F,0),Ie=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(qe.setTexture2DArray(F,0),Ie=O.TEXTURE_2D_ARRAY):(qe.setTexture2D(F,0),Ie=O.TEXTURE_2D),ye.activeTexture(O.TEXTURE0),ye.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),ye.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),ye.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const un=ye.getParameter(O.UNPACK_ROW_LENGTH),gt=ye.getParameter(O.UNPACK_IMAGE_HEIGHT),Mi=ye.getParameter(O.UNPACK_SKIP_PIXELS),tn=ye.getParameter(O.UNPACK_SKIP_ROWS),lr=ye.getParameter(O.UNPACK_SKIP_IMAGES);ye.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),ye.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),ye.pixelStorei(O.UNPACK_SKIP_PIXELS,Ne),ye.pixelStorei(O.UNPACK_SKIP_ROWS,Qe),ye.pixelStorei(O.UNPACK_SKIP_IMAGES,lt);const oi=T.isDataArrayTexture||T.isData3DTexture,Si=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const ft=We.get(T),Kt=We.get(F),In=We.get(ft.__renderTarget),Pt=We.get(Kt.__renderTarget);ye.bindFramebuffer(O.READ_FRAMEBUFFER,In.__webglFramebuffer),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let qt=0;qt<Ce;qt++)oi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(T).__webglTexture,W,lt+qt),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,We.get(F).__webglTexture,Ee,Ot+qt)),O.blitFramebuffer(Ne,Qe,Ne+Le,Qe+Se,De,ct,De+Le,ct+Se,O.DEPTH_BUFFER_BIT,O.NEAREST);ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||We.has(T)){const ft=We.get(T),Kt=We.get(F);ye.bindFramebuffer(O.READ_FRAMEBUFFER,P),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let In=0;In<Ce;In++)oi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ft.__webglTexture,W,lt+In):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ft.__webglTexture,W),Si?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,Ee,Ot+In):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,Ee),W!==0?O.blitFramebuffer(Ne,Qe,Ne+Le,Qe+Se,De,ct,De+Le,ct+Se,O.COLOR_BUFFER_BIT,O.NEAREST):Si?O.copyTexSubImage3D(Ie,Ee,De,ct,Ot+In,Ne,Qe,Le,Se):O.copyTexSubImage2D(Ie,Ee,De,ct,Ne,Qe,Le,Se);ye.bindFramebuffer(O.READ_FRAMEBUFFER,null),ye.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Si?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ie,Ee,De,ct,Ot,Le,Se,Ce,bt,en,wt.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Ie,Ee,De,ct,Ot,Le,Se,Ce,bt,wt.data):O.texSubImage3D(Ie,Ee,De,ct,Ot,Le,Se,Ce,bt,en,wt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ee,De,ct,Le,Se,bt,en,wt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ee,De,ct,wt.width,wt.height,bt,wt.data):O.texSubImage2D(O.TEXTURE_2D,Ee,De,ct,Le,Se,bt,en,wt);ye.pixelStorei(O.UNPACK_ROW_LENGTH,un),ye.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt),ye.pixelStorei(O.UNPACK_SKIP_PIXELS,Mi),ye.pixelStorei(O.UNPACK_SKIP_ROWS,tn),ye.pixelStorei(O.UNPACK_SKIP_IMAGES,lr),Ee===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&O.generateMipmap(Ie),ye.unbindTexture()},this.initRenderTarget=function(T){We.get(T).__webglFramebuffer===void 0&&qe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?qe.setTextureCube(T,0):T.isData3DTexture?qe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?qe.setTexture2DArray(T,0):qe.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){k=0,B=0,se=null,ye.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}class fx extends Su{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new _i;e.deleteAttribute("uv");const t=new tr({side:mn}),n=new tr,s=new gl(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Et(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Tf(e,n,6),o=new Ht;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new Et(e,es(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const u=new Et(e,es(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const h=new Et(e,es(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const l=new Et(e,es(43));l.position.set(-.462,8.89,14.52),l.scale.set(4.38,5.441,.088),this.add(l);const d=new Et(e,es(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new Et(e,es(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function es(i){return new u0({color:0,emissive:16777215,emissiveIntensity:i})}const wn=.3,xn=1.2,dx=3.2,ce={x0:-1.5,x1:1.5,z0:.4,z1:6.4,h:2.5},ee={x0:-2,x1:2,z0:-40,z1:0,h:3},ie={x0:2.4,x1:16.4,z0:-31,z1:-17,h:5.5},xe={x:-2,z0:-16,z1:-11,y0:.8,y1:2.2},it={z0:-25,z1:-23,h:2.3,open:1.1},Bt={w:1.3,y0:.1,y1:2},la={x:9.5,z:-24},Rt=-36,Fr={x0:-2.4,x1:16.8,z0:-40.4,z1:6.8},Ka={x:0,z:5.3,yaw:0};function px({hatchOpen:i=!0}={}){const e=[],t=[],n=(s,r,a,o)=>e.push({x0:Math.min(s,r),x1:Math.max(s,r),z0:Math.min(a,o),z1:Math.max(a,o)});return n(-1.8,-1.5,.4,6.4),n(1.5,1.8,.4,6.4),n(-1.8,1.8,6.4,6.8),n(-2.4,-1.3/2,0,.4),n(Bt.w/2,2.4,0,.4),n(1.05,1.5,1.7,4.1),i?n(-1.2,-.6,-1.3,0):n(-1.3/2,Bt.w/2,-.1,.4),n(-2.4,-2,-40,0),n(2,2.4,-40,it.z0),n(2,2.4,it.z1,0),n(2,2.4,it.z0,it.z1-it.open),n(-2,2,Rt-.7,Rt+.4),n(-2,-1,-29.7,-21.3),n(1.2,2,-10.2,-7.6),n(.9,2,-35.2,-34.2),n(16.4,16.8,-31.4,-16.6),n(2.4,16.8,-31.4,-31),n(2.4,16.8,-17,-16.6),n(5,7.5,-17.9,-17),n(15.6,16.4,-22.2,-18.8),n(3.2,4.8,-30.6,-29),n(13.8,15.4,-30.4,-29.2),t.push({x:la.x,z:la.z,r:1.45}),t.push({x:6.2,z:-27.4,r:.35},{x:12.9,z:-20.4,r:.35}),{boxes:e,circles:t}}const Qa=Math.PI/2,ns=[{name:"шлюз: вход, люк на станцию",pos:[.15,xn,5.75],yaw:.04,pitch:-.02,hatch:0,rig:0},{name:"шлюз: внешний люк в инее",pos:[-.35,xn,2.2],yaw:Math.PI-.1,pitch:.06,hatch:0,rig:0},{name:"Узор спящий: иней вблизи оказывается рисунком",pos:[-.98,xn,3.45],yaw:Qa+.95,pitch:-.04,hatch:0,rig:0},{name:"коридор кольца: холодный аварийный свет",pos:[.25,xn,-3.2],yaw:.05,pitch:.04,mood:"cold",rig:1},{name:"коридор кольца: тёплый янтарный свет",pos:[.25,xn,-3.2],yaw:.05,pitch:.04,mood:"amber",rig:1},{name:"коридор: баррикада и вещи экипажа",pos:[.7,xn,-23.2],yaw:.14,pitch:0,rig:0},{name:"отражение в стекле: окно, астероид, Солнце",pos:[-1.62,xn,-13.5],yaw:Qa+.1,pitch:.2,rig:0},{name:"отсек маяка А: общий вид от двери",pos:[3.3,xn,-23.4],yaw:-Qa+.08,pitch:.3,rig:0},{name:"маяк А: прибор и кабели",pos:[6.9,xn,-26.5],yaw:-2.3,pitch:.2,rig:0},{name:"маяк А: надписи экипажа и тень с ушами",pos:[10.2,xn,-28.2],yaw:0,pitch:.36,rig:0},{name:"лапы с инструментом и перо-подвеска",pos:[.5,xn,-15.4],yaw:.25,pitch:-.34,rig:1,inspect:1},{name:"Узор проснувшийся",pos:[12.6,xn,-27.4],yaw:-.8,pitch:.12,wake:1,rig:0}],mx={open:[[0,5],[0,1],[.6,-2],[.3,-20],[1.2,-23.45],[3.6,-23.45],[6,-21],[9.5,-20.6],[13,-24],[9.5,-27.6],[6.5,-25]],wall:[[0,-31],[0,-38.5]]};function gx(i=Ka.x,e=Ka.z){return{x:i,z:e,yaw:Ka.yaw,pitch:0,input:{forward:0,strafe:0},speed:dx}}function xx(i,e,t){const n=Math.max(-1,Math.min(1,i.input.forward)),s=Math.max(-1,Math.min(1,i.input.strafe)),r=Math.sin(i.yaw),a=Math.cos(i.yaw),o=Math.max(1,Math.ceil(i.speed*t/.2));for(let c=0;c<o;c++){i.x+=(-r*n+a*s)*i.speed*t/o,i.z+=(-a*n-r*s)*i.speed*t/o;for(const u of e.circles){const h=i.x-u.x,l=i.z-u.z,d=Math.hypot(h,l),f=u.r+wn;d<f&&d>1e-6&&(i.x=u.x+h/d*f,i.z=u.z+l/d*f)}for(const u of e.boxes){const h=Math.max(u.x0,Math.min(i.x,u.x1)),l=Math.max(u.z0,Math.min(i.z,u.z1)),d=i.x-h,f=i.z-l,p=Math.hypot(d,f);if(p<wn)if(p>1e-6)i.x=h+d/p*wn,i.z=l+f/p*wn;else{const S=[[u.x0-wn-i.x,0],[u.x1+wn-i.x,0],[0,u.z0-wn-i.z],[0,u.z1+wn-i.z]];S.sort((x,g)=>Math.abs(x[0]+x[1])-Math.abs(g[0]+g[1])),i.x+=S[0][0],i.z+=S[0][1]}}}i.x=Math.max(Fr.x0+wn,Math.min(Fr.x1-wn,i.x)),i.z=Math.max(Fr.z0+wn,Math.min(Fr.z1-wn,i.z))}function Ss(i){let e=i>>>0||2654435769;return function(){e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Ai(i,e=i){const t=document.createElement("canvas");return t.width=i,t.height=e,t}function _x(i,e,t){const n=new Float32Array(t*t);for(let a=0;a<n.length;a++)n[a]=i();const s=new Float32Array(e*e),r=a=>a*a*(3-2*a);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const c=o/e*t,u=a/e*t,h=Math.floor(c),l=Math.floor(u),d=r(c-h),f=r(u-l),p=n[l%t*t+h%t],S=n[l%t*t+(h+1)%t],x=n[(l+1)%t*t+h%t],g=n[(l+1)%t*t+(h+1)%t];s[a*e+o]=(p*(1-d)+S*d)*(1-f)+(x*(1-d)+g*d)*f}return s}function Gc(i,e,t=4,n=5){const s=new Float32Array(e*e);let r=.5,a=0;for(let o=0;o<n;o++){const c=_x(i,e,t<<o);for(let u=0;u<s.length;u++)s[u]+=c[u]*r;a+=r,r*=.5}for(let o=0;o<s.length;o++)s[o]/=a;return s}function ja(i,e,t=!0){return i.colorSpace=e?rn:ii,t&&(i.wrapS=i.wrapT=Qr),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=si,i.needsUpdate=!0,i}function Ls(i,e,t,{bump:n=2,grime:s=.35}={}){const r=Ss(i),a=Ai(e),o=Ai(e),c=Ai(e),u=Ai(e),h=a.getContext("2d"),l=o.getContext("2d"),d=c.getContext("2d"),f=u.getContext("2d");l.fillStyle="#808080",l.fillRect(0,0,e,e),t(h,l,d,f,e,r);const p=h.getImageData(0,0,e,e),S=l.getImageData(0,0,e,e),x=d.getImageData(0,0,e,e),g=f.getImageData(0,0,e,e),m=Gc(r,e,4,6),_=Gc(r,e,32,3),v=new Float32Array(e*e);for(let A=0;A<e*e;A++){const L=1-s*Math.max(0,m[A]*1.6-.45);p.data[A*4]*=L,p.data[A*4+1]*=L,p.data[A*4+2]*=L*.98,v[A]=S.data[A*4]/255+(_[A]-.5)*.06,x.data[A*4]=Math.max(0,Math.min(255,x.data[A*4]+(m[A]-.5)*90+(_[A]-.5)*40))}h.putImageData(p,0,0);const E=new Uint8ClampedArray(e*e*4),b=new Uint8ClampedArray(e*e*4),M=(A,L)=>v[(L+e)%e*e+(A+e)%e];for(let A=0;A<e;A++)for(let L=0;L<e;L++){const I=(M(L+1,A)-M(L-1,A))*n*e/512*4,N=(M(L,A+1)-M(L,A-1))*n*e/512*4,P=1/Math.hypot(I,N,1),z=(A*e+L)*4;E[z]=(-I*P*.5+.5)*255,E[z+1]=(N*P*.5+.5)*255,E[z+2]=(P*.5+.5)*255,E[z+3]=255,b[z]=255,b[z+1]=x.data[z],b[z+2]=g.data[z],b[z+3]=255}const y=Ai(e),C=Ai(e);return y.getContext("2d").putImageData(new ImageData(E,e,e),0,0),C.getContext("2d").putImageData(new ImageData(b,e,e),0,0),{map:ja(new Gs(a),!0),normalMap:ja(new Gs(y),!1),orm:ja(new Gs(C),!1)}}const At=i=>{const e=Math.round(Math.max(0,Math.min(1,i))*255);return`rgb(${e},${e},${e})`};function Oi(i,e,t,n,s,r=.2,a=1){i.strokeStyle=s,i.lineCap="round";for(let o=0;o<n;o++){const c=e()*t,u=e()*t,h=e()*Math.PI,l=(.02+e()*r)*t;i.lineWidth=a*(.4+e()),i.globalAlpha=.15+e()*.5,i.beginPath(),i.moveTo(c,u),i.lineTo(c+Math.cos(h)*l,u+Math.sin(h)*l),i.stroke()}i.globalAlpha=1}function Xo(i,e,t,n,s){for(let r=0;r<n;r++){const a=e()*t,o=e()*t*.6,c=(.15+e()*.5)*t,u=2+e()*10,h=i.createLinearGradient(0,o,0,o+c);h.addColorStop(0,s),h.addColorStop(1,"rgba(0,0,0,0)"),i.globalAlpha=.12+e()*.25,i.fillStyle=h,i.fillRect(a,o,u,c)}i.globalAlpha=1}function vx(i,e,t,n,s,r){i.fillStyle="#8f9690",i.fillRect(0,0,s,s),t.fillStyle=At(.62),t.fillRect(0,0,s,s),n.fillStyle=At(.25),n.fillRect(0,0,s,s);const a=s/2;for(let o=0;o<2;o++)for(let c=0;c<2;c++){const u=c*a,h=o*a,l=.88+r()*.2;i.fillStyle=`rgb(${132*l|0},${141*l|0},${136*l|0})`,i.fillRect(u+3,h+3,a-6,a-6);const d=a*.12;e.fillStyle=At(.56),e.fillRect(u+d,h+d,a-2*d,a-2*d),e.strokeStyle=At(.36),e.lineWidth=3,e.strokeRect(u+d,h+d,a-2*d,a-2*d),i.strokeStyle="rgba(30,34,36,0.5)",i.lineWidth=2,i.strokeRect(u+d,h+d,a-2*d,a-2*d),e.strokeStyle=At(.12),e.lineWidth=5,e.strokeRect(u,h,a,a),i.strokeStyle="#1a1d1f",i.lineWidth=4,i.strokeRect(u,h,a,a),t.strokeStyle=At(.9),t.lineWidth=6,t.strokeRect(u,h,a,a);for(let f=0;f<6;f++)for(const[p,S]of[[u+d*.5+(a-d)*f/6+6,h+d*.5],[u+d*.5+(a-d)*f/6+6,h+a-d*.5],[u+d*.5,h+d*.5+(a-d)*f/6+6],[u+a-d*.5,h+d*.5+(a-d)*f/6+6]])e.fillStyle=At(.85),e.beginPath(),e.arc(p,S,3.2,0,7),e.fill(),i.fillStyle="rgba(200,205,200,0.5)",i.beginPath(),i.arc(p-.6,S-.6,2.2,0,7),i.fill(),n.fillStyle=At(.9),n.beginPath(),n.arc(p,S,3.2,0,7),n.fill()}for(let o=0;o<260;o++){const c=r()<.5,u=Math.round(r()*2)*a+(r()-.5)*22,h=r()*s,l=1+r()*5,d=c?u:h,f=c?h:u;i.fillStyle=`rgba(${70+r()*40|0},${72+r()*30|0},${70+r()*30|0},0.9)`,i.beginPath(),i.ellipse(d,f,l,l*(.4+r()),r()*3,0,7),i.fill(),n.fillStyle=At(1),n.beginPath(),n.arc(d,f,l,0,7),n.fill(),t.fillStyle=At(.35),t.beginPath(),t.arc(d,f,l,0,7),t.fill()}Xo(i,r,s,46,"rgba(40,30,22,0.9)"),Xo(t,r,s,30,"rgba(255,255,255,0.8)"),Oi(i,r,s,150,"#cfd3cf",.12,1),Oi(e,r,s,80,"#606060",.12,1.4)}function Mx(i,e,t,n,s,r){i.fillStyle="#3a3d40",i.fillRect(0,0,s,s),t.fillStyle=At(.5),t.fillRect(0,0,s,s),n.fillStyle=At(.85),n.fillRect(0,0,s,s);const a=s/2;for(let u=0;u<2;u++)for(let h=0;h<2;h++){const l=h*a,d=u*a,f=.8+r()*.35;i.fillStyle=`rgb(${58*f|0},${61*f|0},${64*f|0})`,i.fillRect(l+2,d+2,a-4,a-4);const p=a/14;for(let S=0;S<14;S++)for(let x=0;x<14;x++){const g=l+(S+.5)*p,m=d+(x+.5)*p,_=(S+x)%2?.785:-.785;e.fillStyle=At(.78),e.beginPath(),e.ellipse(g,m,p*.36,p*.11,_,0,7),e.fill(),i.fillStyle="rgba(120,124,128,0.35)",i.beginPath(),i.ellipse(g-.5,m-.5,p*.34,p*.09,_,0,7),i.fill(),t.fillStyle=At(.3),t.beginPath(),t.ellipse(g,m,p*.34,p*.1,_,0,7),t.fill()}e.strokeStyle=At(.1),e.lineWidth=6,e.strokeRect(l,d,a,a),i.strokeStyle="#0c0d0e",i.lineWidth=5,i.strokeRect(l,d,a,a);for(const[S,x]of[[l+14,d+14],[l+a-14,d+14],[l+14,d+a-14],[l+a-14,d+a-14]])e.fillStyle=At(.25),e.beginPath(),e.arc(S,x,5,0,7),e.fill(),i.fillStyle="#17181a",i.beginPath(),i.arc(S,x,5,0,7),i.fill()}const o=i.createLinearGradient(0,0,s,0);o.addColorStop(.2,"rgba(150,155,160,0)"),o.addColorStop(.5,"rgba(150,155,160,0.16)"),o.addColorStop(.8,"rgba(150,155,160,0)"),i.fillStyle=o,i.fillRect(0,0,s,s);const c=t.createLinearGradient(0,0,s,0);c.addColorStop(.2,"rgba(0,0,0,0)"),c.addColorStop(.5,"rgba(0,0,0,0.35)"),c.addColorStop(.8,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(0,0,s,s),Oi(i,r,s,260,"#8d9196",.2,1.2),Oi(t,r,s,200,"#202020",.2,2);for(let u=0;u<26;u++){const h=r()*s,l=r()*s,d=6+r()*34,f=i.createRadialGradient(h,l,0,h,l,d);f.addColorStop(0,"rgba(8,8,10,0.55)"),f.addColorStop(1,"rgba(8,8,10,0)"),i.fillStyle=f,i.fillRect(h-d,l-d,2*d,2*d);const p=t.createRadialGradient(h,l,0,h,l,d);p.addColorStop(0,"rgba(0,0,0,0.6)"),p.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=p,t.fillRect(h-d,l-d,2*d,2*d)}}function Sx(i,e,t,n,s,r){i.fillStyle="#6c7074",i.fillRect(0,0,s,s),t.fillStyle=At(.42),t.fillRect(0,0,s,s),n.fillStyle=At(1),n.fillRect(0,0,s,s);for(let a=0;a<1400;a++){const o=r()*s,c=r()*s,u=20+r()*160,h=90+r()*70|0;i.strokeStyle=`rgba(${h},${h+3},${h+6},0.25)`,i.lineWidth=1,i.beginPath(),i.moveTo(c,o),i.lineTo(c+u,o+(r()-.5)*2),i.stroke()}for(let a=0;a<60;a++){const o=r()*s,c=r()*s,u=8+r()*46,h=i.createRadialGradient(o,c,0,o,c,u);h.addColorStop(0,r()<.5?"rgba(92,52,28,0.5)":"rgba(20,20,24,0.5)"),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(o-u,c-u,2*u,2*u);const l=t.createRadialGradient(o,c,0,o,c,u);l.addColorStop(0,"rgba(255,255,255,0.5)"),l.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=l,t.fillRect(o-u,c-u,2*u,2*u)}Oi(i,r,s,200,"#c2c6ca",.15,1),Oi(e,r,s,120,"#555",.15,1.5)}function yx(i,e,t,n,s,r){i.fillStyle="#e4e4e0",i.fillRect(0,0,s,s),t.fillStyle=At(.55),t.fillRect(0,0,s,s),n.fillStyle=At(.1),n.fillRect(0,0,s,s);for(let a=0;a<300;a++){const o=r()*s,c=r()*s,u=.8+r()*r()*r()*9;i.fillStyle=`rgba(${100+r()*50|0},${100+r()*45|0},${104+r()*40|0},0.8)`,i.beginPath(),i.ellipse(o,c,u,u*(.3+r()*.8),r()*3,0,7),i.fill(),n.fillStyle=At(.5),n.beginPath(),n.arc(o,c,u,0,7),n.fill(),e.fillStyle=At(.42),e.beginPath(),e.arc(o,c,u,0,7),e.fill(),t.fillStyle=At(.3),t.beginPath(),t.arc(o,c,u,0,7),t.fill()}Xo(i,r,s,30,"rgba(50,38,28,0.8)"),Oi(i,r,s,200,"#70706c",.1,1)}function bx(i,e,t,n,s,r){i.fillStyle="#d8d6d0",i.fillRect(0,0,s,s),t.fillStyle=At(.92),t.fillRect(0,0,s,s),n.fillStyle=At(0),n.fillRect(0,0,s,s);for(let a=0;a<s;a+=4)e.fillStyle=At(.44),e.fillRect(0,a,s,2);for(let a=0;a<s;a+=4)e.fillStyle="rgba(160,160,160,0.5)",e.fillRect(a,0,2,s);for(let a=0;a<40;a++){const o=r()*s,c=6+r()*20,u=e.createLinearGradient(0,o,0,o+c);u.addColorStop(0,"rgba(255,255,255,0)"),u.addColorStop(.5,"rgba(255,255,255,0.5)"),u.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=u,e.fillRect(0,o,s,c),i.fillStyle="rgba(0,0,0,0.07)",i.fillRect(0,o+c*.6,s,c*.5)}for(let a=0;a<50;a++){const o=r()*s,c=r()*s,u=10+r()*50,h=i.createRadialGradient(o,c,0,o,c,u);h.addColorStop(0,"rgba(40,34,28,0.3)"),h.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=h,i.fillRect(o-u,c-u,2*u,2*u)}}let Or=null;function Ex(){return Or||(Or={panel:Ls(11,1024,vx,{bump:2.4}),floor:Ls(23,1024,Mx,{bump:3,grime:.45}),metal:Ls(37,512,Sx,{bump:1.2}),paint:Ls(41,512,yx,{bump:1.6}),cloth:Ls(53,256,bx,{bump:2.2,grime:.2})},Or)}function Tn(i,e,t,n,s,r,a,{jitter:o=.08,font:c="sans-serif",weight:u=700,drip:h=0}={}){i.save(),i.fillStyle=a,i.textBaseline="alphabetic";let l=n;for(const d of t){const f=r*(1+(e()-.5)*o*2);i.font=`${u} ${f}px ${c}`;const p=i.measureText(d).width;i.save(),i.translate(l,s+(e()-.5)*r*o*1.5),i.rotate((e()-.5)*o*2.2),i.globalAlpha=.72+e()*.28,i.fillText(d,0,0),h&&d!==" "&&e()<h&&(i.globalAlpha=.5,i.fillRect(p*(.2+e()*.5),0,Math.max(2,r*.04),r*(.3+e()*.9))),i.restore(),l+=p*(.98+e()*.08)}return i.restore(),l}function wx(i=64){const e=Ai(i),t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i);const s=new Gs(e);return s.needsUpdate=!0,s}const Ke={neonViolet:14242287,neonViolet2:11552236,turquoise:8702925,lotusTeal:222624,deepViolet:2230107,gold:12815678,goldLight:16639079,flame:16761125,skin:14205360,eyeGreen:959087,eyeBlue:4367848,gem:2977297,cardBg:1778995},qo=12,Zr={uFrost:{value:Array.from({length:qo},()=>new Nt(0,-100,0,.001))},uWake:{value:0},uTime:{value:0},uWakeA:{value:new Oe(Ke.turquoise)},uWakeB:{value:new Oe(Ke.neonViolet)}},Tx=`
attribute vec3 aFlat; attribute vec3 aFlatN;
varying vec3 vFlat; varying vec3 vFlatN;
`,Ax=`
varying vec3 vFlat; varying vec3 vFlatN;
uniform vec4 uFrost[${qo}];
uniform float uWake; uniform float uTime;
uniform vec3 uWakeA; uniform vec3 uWakeB;
float uzHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float uzNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(uzHash(i), uzHash(i + vec2(1, 0)), f.x), mix(uzHash(i + vec2(0, 1)), uzHash(i + vec2(1, 1)), f.x), f.y);
}
// линии треугольной решётки: три семейства под 120 градусов. Отрезок между двумя узлами
// включён, если его номер по периодическому правилу (период 3) ниже порога gate.
// Линия сглажена по площади пикселя: вдали, где линии тоньше пикселя, рисунок честно
// сходится к ровной дымке той же средней плотности (иней), а не рябит и не пропадает.
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
    float far = smoothstep(0.03, 0.10, F);
    acc = max(acc, mix(step(h, g) * box, clamp(g, 0.0, 1.0) * 2.0 * w, far));
  }
  return acc;
}
// кольцо в узлах решётки
float uzRings(vec2 p, float r, float w) {
  vec2 q = vec2(p.x - p.y * 0.5773503, p.y * 1.1547005);
  vec2 i = floor(q + 0.5);
  float best = 9.0;
  for (int dx = -1; dx <= 1; dx++) for (int dy = -1; dy <= 1; dy++) {
    vec2 c = i + vec2(float(dx), float(dy));
    vec2 pc = vec2(c.x + c.y * 0.5, c.y * 0.8660254);
    best = min(best, length(p - pc));
  }
  float F = max(fwidth(p.x), 1e-4), d = abs(best - r);
  float box = max(0.0, min(d + 0.5 * F, w) - max(d - 0.5 * F, -w)) / F;
  return box * (1.0 - smoothstep(0.03, 0.10, F));
}
// cov: сколько поверхности под инеем; line: рисунок; glow: свечение проснувшегося Узора
void uzorEval(out float cov, out float line, out vec3 glow) {
  vec3 an = abs(vFlatN);
  vec2 p = an.y > an.x && an.y > an.z ? vFlat.xz : (an.x > an.z ? vFlat.zy : vFlat.xy);
  float nz = uzNoise(p * 2.3) * 0.55 + uzNoise(p * 7.1) * 0.3 + uzNoise(p * 23.0) * 0.15;
  float m = 0.0;
  for (int i = 0; i < ${qo}; i++) {
    float r = uFrost[i].w * (1.0 + 0.35 * uWake);
    float d = length(vFlat - uFrost[i].xyz) / r;
    m = max(m, 1.0 - smoothstep(0.2, 1.0, d + (nz - 0.5) * 1.1));
  }
  cov = 0.0; line = 0.0; glow = vec3(0.0);
  if (m <= 0.001) return;
  // медленный поворот и дыхание рисунка у проснувшегося
  float rot = uWake * 0.06 * sin(uTime * 0.11);
  vec2 pr = mat2(cos(rot), -sin(rot), sin(rot), cos(rot)) * p;
  float br = 0.08 * uWake;
  // порог не открывается до конца: часть отрезков всегда пропущена, и вместо сплошной
  // сетки получается мотив, повторяющийся каждые три ячейки
  float l1 = uzLines(pr / 0.07, 0.02, min(m * 1.3 - 0.05, 0.78), br);
  float l2 = uzLines(pr / 0.0233333, 0.03, min(m * 1.1 - 0.15, 0.7), br);
  float l3 = uzLines(pr / 0.0077777, 0.05, min(m * 1.0 - 0.25, 0.6), br);
  line = max(l1 * 0.5, max(l2 * 0.95, l3 * 0.7));
  float fine = uzNoise(p * 90.0) * uzNoise(p * 37.0 + 3.1);
  float soft = smoothstep(0.0, 0.45, m);
  float sp = step(0.965, uzHash(floor(p * 420.0))) * m * clamp(1.0 - fwidth(p.x) * 420.0, 0.0, 1.0);
  cov = clamp(m * (0.08 + 0.55 * nz * nz + 0.5 * fine) + line * 0.75 * soft + sp * 0.5, 0.0, 1.0);
  // проснувшийся: по крупным жилам той же решётки (втрое крупнее) бегут волны
  if (uWake > 0.001) {
    float v0 = max(uzLines(pr / 0.21, 0.016, min(m * 1.35 - 0.1, 0.62), br), uzRings(pr / 0.21, 0.2, 0.016) * step(0.55, m));
    float ph = dot(pr, vec2(3.1, 2.3)) - uTime * 0.7;
    float wave = 0.5 + 0.5 * sin(ph) * sin(ph * 0.37 + 1.3);
    vec3 wc = mix(uWakeA, uWakeB, 0.5 + 0.5 * sin(ph * 0.21 + uTime * 0.13));
    glow = wc * (v0 * (1.3 + 2.6 * wave) + l1 * 0.45 * wave + l2 * 0.2 * wave + m * nz * 0.012) * uWake * soft;
    line = max(line, v0);
  }
}
`,Rx=`
#include <emissivemap_fragment>
{
  float uzCov; float uzLine; vec3 uzGlow;
  uzorEval(uzCov, uzLine, uzGlow);
  vec3 ice = mix(vec3(0.50, 0.58, 0.66), vec3(0.86, 0.93, 1.0), uzLine);
  ice = mix(ice, vec3(0.05, 0.06, 0.09), uWake * 0.8);
  diffuseColor.rgb = mix(diffuseColor.rgb, ice, uzCov * 0.85);
  roughnessFactor = mix(roughnessFactor, mix(0.55, 0.22, uzLine), uzCov);
  metalnessFactor *= 1.0 - uzCov * 0.85;
  // спящий иней едва светится холодом: в темноте его видно, и это первый намёк, что он не иней
  totalEmissiveRadiance += uzGlow + vec3(0.016, 0.028, 0.042) * uzCov * (1.0 - uWake);
}
`;function Cx(i){Object.assign(i.uniforms,Zr),i.vertexShader=Tx+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFlat = aFlat; vFlatN = aFlatN;`),i.fragmentShader=Ax+i.fragmentShader.replace("#include <emissivemap_fragment>",Rx)}function Ds(i,{color:e=16777215,rough:t=1,metal:n=1,normal:s=1,vertexColors:r=!0}={}){const a=Ex()[i],o=new tr({map:a.map,normalMap:a.normalMap,roughnessMap:a.orm,metalnessMap:a.orm,color:e,roughness:t,metalness:n,vertexColors:r});return o.normalScale.set(s,s),o.onBeforeCompile=Cx,o.customProgramCacheKey=()=>"uzor",o}const Px={wall:["panel",16777215],wallDark:["panel",6120555],ceil:["panel",4014663],floor:["floor",16777215],steel:["metal",16777215],steelDark:["metal",4869458],bronze:["metal",12092746],copper:["metal",13662538],weld:["metal",15133938],orange:["paint",13132830],yellow:["paint",13214247],teal:["paint",3112838],white:["paint",14276559],red:["paint",9316898],rubber:["cloth",1776671],cloth:["cloth",7305827],clothBlue:["cloth",3952491],clothWarm:["cloth",10123861]};function Ti(i,e=1,t=null){const n=new _s({color:new Oe(i).multiplyScalar(e),map:t,toneMapped:!1});return n.userData.unlit=!0,n.userData.noShadow=!0,n}function Lx(i,{color:e=16777215,emissive:t=0,emissiveIntensity:n=0}={}){const s=new tr({map:i,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,color:e,emissive:t,emissiveIntensity:n,emissiveMap:n?i:null,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return s.userData.noShadow=!0,s}function Dx(){return{panel:Ds("panel"),floor:Ds("floor",{rough:.85}),metal:Ds("metal"),paint:Ds("paint"),cloth:Ds("cloth")}}function rr(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Ct;c.morphTargetsRelative=o;let u=0;for(let h=0;h<i.length;++h){const l=i[h];let d=0,f=0;if(t!==(l.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in l.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(l.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==l.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in l.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(l.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(l.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=l.index.count;else if(l.attributes.position!==void 0)p=l.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,p,h),u+=p}}if(t){let h=0;const l=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let p=0;p<f.count;++p)l.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(l)}for(const h in r){const l=Hc(r[h]);if(!l)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,l)}for(const h in a){const l=a[h][0].length;if(l!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<l;++d){const f=[];for(let S=0;S<a[h].length;++S)f.push(a[h][S][d]);const p=Hc(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function Hc(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){const h=i[u];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new cn(a,t,n);let c=0;for(let u=0;u<i.length;++u){const h=i[u];if(h.isInterleavedBufferAttribute){const l=c/t;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<t;p++){const S=h.getComponent(d,p);o.setComponent(d+l,p,S)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function th(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let a=0;const o=Object.keys(i.attributes),c=[],u=new Map,h=[],l=["getX","getY","getZ","getW"],d=e*.5,f=Math.log10(1/e),p=Math.pow(10,f),S=d*p;for(let g=0;g<r;g++){const m=n?n.getX(g):g;let _="";for(let v=0,E=o.length;v<E;v++){const b=o[v],M=i.getAttribute(b),y=M.itemSize;for(let C=0;C<y;C++)_+=`${Math.trunc(M[l[C]](m)*p+S)},`}_ in t?h.push(t[_]):(c.push(m),t[_]=a,h.push(a),a++)}const x=i.clone();for(const g in i.attributes)x.setAttribute(g,kc(i.attributes[g],c,u));for(const g in i.morphAttributes)x.morphAttributes[g]=i.morphAttributes[g].map(m=>kc(m,c,u));return x.setIndex(h),x}function kc(i,e,t=new Map){const n=i.isInterleavedBufferAttribute,s=n?i.data:i,r=n?s.stride:i.itemSize;let a=n?t.get(s):void 0;if(a===void 0){const c=new s.array.constructor(e.length*r);for(let u=0;u<e.length;u++)for(let h=0;h<r;h++)c[u*r+h]=s.array[e[u]*r+h];a=n?new s.constructor(c,r,s.meshPerAttribute):new i.constructor(c,i.itemSize,i.normalized,i.meshPerAttribute),a.setUsage(s.usage),n&&t.set(s,a)}const o=n?new i.constructor(a,i.itemSize,i.offset,i.normalized):a;return o.name=i.name,n||(o.gpuType=i.gpuType),o}const Vs=42,zr=new Oe,Ix=new gn,Ux=new D(1,0,0);function _l(i){const e=i.z/Vs,t=Vs-i.y;return i.set(i.x,Vs-t*Math.cos(e),t*Math.sin(e))}function os(i,e=new gn){return e.setFromAxisAngle(Ux,-i/Vs)}function vl(i,e,t,n,s=0,r=0){return _l(i.position.set(e,t,n)),os(n,i.quaternion),(s||r)&&i.quaternion.multiply(Ix.setFromEuler(new Dn(r,s,0,"YXZ"))),i}function Pn(i,e,t,n=new D){return _l(n.set(i,e,t))}function Nx(i){const e=i.attributes.position,t=i.attributes.normal,n=new Float32Array(e.count*3),s=new Float32Array(e.count*3),r=new D;for(let a=0;a<e.count;a++){const o=e.getX(a),c=e.getY(a),u=e.getZ(a);n[a*3]=o,n[a*3+1]=c,n[a*3+2]=u;const h=t.getX(a),l=t.getY(a),d=t.getZ(a);s[a*3]=h,s[a*3+1]=l,s[a*3+2]=d,_l(r.set(o,c,u)),e.setXYZ(a,r.x,r.y,r.z);const f=u/Vs,p=Math.cos(f),S=Math.sin(f);t.setXYZ(a,h,l*p+d*S,-l*S+d*p)}return i.setAttribute("aFlat",new cn(n,3)),i.setAttribute("aFlatN",new cn(s,3)),i.computeBoundingSphere(),i.computeBoundingBox(),i}new ht;const Fx=new Dn,Ox=new D,zx=new D(1,1,1);class Br{constructor(){this.bins=new Map}add(e,t,n){let s=t.index?t.toNonIndexed():t.clone();for(const a of Object.keys(s.attributes))["position","normal","uv"].includes(a)||s.deleteAttribute(a);s.attributes.uv||s.setAttribute("uv",new cn(new Float32Array(s.attributes.position.count*2),2)),n&&s.applyMatrix4(n);const r=Px[e];if(r){zr.set(r[1]);const a=s.attributes.position.count,o=new Float32Array(a*3);for(let c=0;c<a;c++)o[c*3]=zr.r,o[c*3+1]=zr.g,o[c*3+2]=zr.b;s.setAttribute("color",new cn(o,3)),e=r[0]}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(s),this}mtx(e,t,n,s=0,r=0,a=0,o=1,c=1,u=1){return new ht().compose(Ox.set(e,t,n),new gn().setFromEuler(Fx.set(s,r,a,"YXZ")),zx.set(o,c,u)).clone()}box(e,t,n,s,r,a,o,{rx:c=0,ry:u=0,rz:h=0,tile:l=2,uo:d=0,vo:f=0}={}){const p=c||u||h,S=p?1:Math.max(1,Math.ceil(o/.8)),x=p&&Math.abs(Math.abs(u)-Math.PI/2)<.01?Math.max(1,Math.ceil(r/.8)):1,g=new _i(r,a,o,x,1,S).toNonIndexed(),m=g.attributes.position,_=g.attributes.normal,v=g.attributes.uv;for(let E=0;E<m.count;E++){const b=m.getX(E)+(p?0:t),M=m.getY(E)+(p?0:n),y=m.getZ(E)+(p?0:s),C=Math.abs(_.getX(E)),A=Math.abs(_.getY(E));C>.5?v.setXY(E,y/l+d,M/l+f):A>.5?v.setXY(E,b/l+d,y/l+f):v.setXY(E,b/l+d,M/l+f)}return this.add(e,g,this.mtx(t,n,s,c,u,h))}slab(e,t,n,s,r,a,o,c){return this.box(e,(t+r)/2,(n+a)/2,(s+o)/2,Math.abs(r-t),Math.abs(a-n),Math.abs(o-s),c)}pipe(e,t,n,s,{seg:r=12,cap:a=!1}={}){const o=new D(...t),c=new D(...n),u=o.distanceTo(c),h=new on(s,s,u,r,Math.max(1,Math.ceil(u/.8)),!a),l=h.attributes.uv;for(let f=0;f<l.count;f++)l.setXY(f,l.getX(f)*Math.max(1,Math.round(s*12)),l.getY(f)*u/2);const d=new gn().setFromUnitVectors(new D(0,1,0),c.clone().sub(o).normalize());return this.add(e,h,new ht().compose(o.clone().add(c).multiplyScalar(.5),d,new D(1,1,1)))}cable(e,t,n=.025,{seg:s=6,tension:r=.5}={}){const a=new da(t.map(c=>new D(...c)),!1,"catmullrom",r),o=Math.max(8,Math.ceil(a.getLength()/.12));return this.add(e,new ml(a,o,n,s,!1))}wall(e,t,n,s,r,a,o,c,u=[],h){const l=u.slice().sort((p,S)=>p.a0-S.a0),d=(p,S,x,g)=>{S-p<1e-4||g-x<1e-4||(t==="x"?this.slab(e,n-c/2,x,p,n+c/2,g,S,h):this.slab(e,p,x,n-c/2,S,g,n+c/2,h))};let f=s;for(const p of l)d(f,p.a0,a,o),d(p.a0,p.a1,a,p.y0),d(p.a0,p.a1,p.y1,o),f=p.a1;return d(f,r,a,o),this}build(e,{shadows:t=!0}={}){const n=new pn;for(const[s,r]of this.bins){const a=e[s];if(!a)throw new Error("нет материала "+s);const o=Nx(rr(r,!1));for(const u of r)u.dispose();const c=new Et(o,a);c.name=s,c.castShadow=t&&!a.transparent&&!a.userData.noShadow,c.receiveShadow=!a.userData.unlit,n.add(c)}return this.bins.clear(),n}}class Bx{constructor(e,{spots:t=3,points:n=6,shadowSize:s=1024}={}){this.defs=[],this.spots=[],this.points=[];for(let r=0;r<t;r++){const a=new ku(16777215,0,30,.6,.5,1.6);a.castShadow=!0,a.shadow.mapSize.set(s,s),a.shadow.bias=-.0015,a.shadow.normalBias=.03,a.shadow.camera.near=.2,e.add(a,a.target),this.spots.push(a)}for(let r=0;r<n;r++){const a=new gl(16777215,0,12,1.8);e.add(a),this.points.push(a)}}add(e){return e.world=Pn(...e.pos),e.to&&(e.worldTo=Pn(...e.to)),e.reach=e.reach||26,this.defs.push(e),e}update(e,t,n,s){const r=(a,o)=>{const c=[];for(const u of this.defs){if(u.kind!==a||u.off)continue;const h=Math.hypot(u.pos[0]-e,u.pos[2]-t),l=1-Math.min(1,Math.max(0,(h-(u.reach-5))/5));l>0&&c.push([l*(u.prio||1),l,u])}c.sort((u,h)=>h[0]-u[0]),o.forEach((u,h)=>{const l=c[h];if(!l){u.intensity=0;return}const d=l[2],f=s&&d.mood&&d.mood[s]||d;u.color.set(f.color!==void 0?f.color:d.color),u.intensity=(f.power!==void 0?f.power:d.power)*l[1]*(d.flicker?d.flicker(n):1),u.position.copy(d.world),u.distance=d.dist||14,u.decay=d.decay??(a==="spot"?1.6:1.8),a==="spot"&&(u.target.position.copy(d.worldTo),u.target.updateMatrixWorld(),u.angle=d.angle||.6,u.penumbra=d.penumbra??.6,u.shadow.camera.far=u.distance)})};r("spot",this.spots),r("point",this.points)}}const $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ar{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gx=new Vu(-1,1,1,-1,0,1);class Hx extends Ct{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const kx=new Hx;class Ml{constructor(e){this._mesh=new Et(kx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class nh extends ar{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oa.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ml(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vc extends ar{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Vx extends ar{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Wx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new nh($r),this.copyPass.material.blending=Li,this.timer=new g0}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vc!==void 0&&(a instanceof Vc?n=!0:a instanceof Vx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Xx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ms extends ar{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(r,a,{type:Qt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const l=new jt(r,a,{type:Qt,depthBuffer:!1});l.texture.name="UnrealBloomPass.h"+h,l.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(l);const d=new jt(r,a,{type:Qt,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Xx;this.highPassUniforms=oa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=oa.clone($r.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,premultipliedAlpha:!0,blending:Ui,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new _s,this._fsQuad=new Ml(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ms.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ms.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const s=[],r=[];for(let a=1;a<e;a+=2){const o=t[a],c=a+1<e?t[a+1]:0,u=o+c;s.push((a*o+(a+1)*c)/u),r.push(u)}return new Gt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ms.BlurDirectionX=new oe(1,0);ms.BlurDirectionY=new oe(0,1);class qx extends ar{constructor(e,t,n){super(),this.scene=e,this.camera=t,this.rt=n,this.quad=new Ml(new Gt({uniforms:{tDiffuse:{value:n.texture}},depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main() { vec3 c = texture2D(tDiffuse, vUv).rgb; gl_FragColor = vec4(min(max(c, vec3(0.0)), vec3(48.0)), 1.0); }"}))}setSize(e,t){this.rt.setSize(e,t)}render(e,t){e.setRenderTarget(this.rt),e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(this.renderToScreen?null:t),this.quad.render(e)}}const Yx={uniforms:{tDiffuse:{value:null},uExposure:{value:1},uTint:{value:new D(1,1,1)},uTime:{value:0},uGrain:{value:.035},uVig:{value:.42},uWake:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uExposure; uniform vec3 uTint; uniform float uTime; uniform float uGrain; uniform float uVig; uniform float uWake;
    varying vec2 vUv;
    vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
    float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec2 d = vUv - 0.5; float r2 = dot(d, d);
      vec2 ca = d * r2 * (0.004 + 0.004 * uWake);
      vec3 c = vec3(texture2D(tDiffuse, vUv + ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - ca).b);
      c *= uExposure * uTint;
      c *= 1.0 - uVig * smoothstep(0.12, 0.62, r2);
      c = aces(c);
      // тени чуть в холод, света в тепло: кадр перестаёт быть серым
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(c, c * vec3(0.94, 1.0, 1.08), (1.0 - l) * 0.35);
      c = pow(c, vec3(1.0 / 2.2));
      c += (h(vUv * 1000.0 + fract(uTime) * 17.0) - 0.5) * uGrain;
      gl_FragColor = vec4(c, 1.0);
    }`};function Zx(i,e,t,{lite:n=!1,msaa:s=4,bloomOn:r=!0,type:a=Qt}={}){const o=i.getDrawingBufferSize(new oe),c=new jt(o.x,o.y,{type:a,samples:n?0:s}),u=new Wx(i,new jt(o.x,o.y,{type:a,depthBuffer:!1}));u.addPass(new qx(e,t,c));let h=null;!n&&r&&(h=new ms(new oe(o.x/2,o.y/2),.38,.6,1),u.addPass(h));const l=new nh(Yx);return u.addPass(l),{composer:u,bloom:h,uniforms:l.uniforms,setSize(d,f,p){u.setPixelRatio(p),u.setSize(d,f)},render(){u.render()}}}const $x="700 %px 'Arial Narrow', 'Liberation Sans Narrow', 'DejaVu Sans Condensed', sans-serif",An="'Comic Sans MS', 'Segoe Print', 'DejaVu Sans', sans-serif";class Wc{constructor(e){this.N=e,this.c=document.createElement("canvas"),this.c.width=this.c.height=e,this.ctx=this.c.getContext("2d"),this.x=0,this.y=0,this.rowH=0,this.rects={}}add(e,t,n,s){if(this.x+t>this.N&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.N)throw new Error("атлас переполнен: "+e);const r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,t,n),r.clip(),s(r,t,n,Ss(e.length*131+t)),r.restore(),this.rects[e]=[this.x/this.N,1-(this.y+n)/this.N,(this.x+t)/this.N,1-this.y/this.N,t/n],this.x+=t+4,this.rowH=Math.max(this.rowH,n)}texture(){const e=new Gs(this.c);return e.colorSpace=rn,e.anisotropy=8,e.needsUpdate=!0,e}}function di(i,e,t,n,s,r,a,o=.25){i.font=$x.replace("%",s),i.fillStyle=r,i.textBaseline="top",i.fillText(e,t,n);const c=i.measureText(e).width;i.save(),i.globalCompositeOperation="destination-out";for(let u=0;u<c*s*o/60;u++)i.globalAlpha=.3+a()*.7,i.beginPath(),i.ellipse(t+a()*c,n+a()*s,1+a()*7,1+a()*3,a()*3,0,7),i.fill();return i.restore(),c}function Jx(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.12,i.lineJoin="miter",i.beginPath();for(let r=0;r<3;r++){const a=-Math.PI/2+r*2.0944;i.lineTo(e+Math.cos(a)*n,t+Math.sin(a)*n)}i.closePath(),i.stroke();for(let r=0;r<3;r++){const a=t+n*(.32-r*.3),o=n*(.5-r*.14);i.beginPath(),i.moveTo(e-o,a),i.lineTo(e,a-o*.6),i.lineTo(e+o,a),i.stroke()}}function Kx(){const i=new Wc(2048),e="rgba(226,228,222,0.92)",t="rgba(222,176,40,0.95)",n="rgba(235,235,225,0.9)",s="rgba(20,22,26,0.92)",r="rgba(170,32,24,0.95)",a="rgba(232,120,30,0.95)";i.add("veresk",900,200,(h,l,d,f)=>{Jx(h,90,108,78,e),di(h,"ВЕРЕСК-9",200,14,150,e,f),di(h,"РУДНАЯ СТАНЦИЯ · СИНДИКАТ «ТАРН»",204,160,30,e,f,.1)}),i.add("shluz",520,200,(h,l,d,f)=>{di(h,"ШЛЮЗ 2",10,10,140,t,f),di(h,"СТЫКОВОЧНЫЙ · ДАВЛЕНИЕ ПРОВЕРЬ",14,156,30,t,f,.1)}),i.add("hazard",512,96,(h,l,d)=>{h.fillStyle="#c9a227",h.fillRect(0,0,l,d),h.fillStyle="#16171a";for(let p=-d;p<l+d;p+=64)h.beginPath(),h.moveTo(p,d),h.lineTo(p+32,d),h.lineTo(p+32+d,0),h.lineTo(p+d,0),h.fill();h.globalCompositeOperation="destination-out";const f=Ss(5);for(let p=0;p<160;p++)h.globalAlpha=.5+f()*.5,h.beginPath(),h.ellipse(f()*l,f()*d,1+f()*9,1+f()*3,f()*3,0,7),h.fill()}),i.add("kolco",1020,150,(h,l,d,f)=>{di(h,"ЖИЛОЕ КОЛЬЦО · СЕКТОР 3",10,8,74,e,f),di(h,"← ШЛЮЗ 2      МАСТЕРСКАЯ 3 →",12,98,42,e,f,.15)}),i.add("masterskaya",620,130,(h,l,d,f)=>{di(h,"МАСТЕРСКАЯ 3",8,10,104,a,f)}),i.add("tally",620,400,(h,l,d,f)=>{h.strokeStyle=n,h.lineCap="round";for(let p=0;p<7;p++){const S=22+p*54,x=p<6?9:4;for(let g=0;g<x;g++){const m=16+g*66+f()*6,_=p===6&&g===3,v=_?2:4;for(let E=0;E<v;E++)h.lineWidth=3+f()*2.5,h.globalAlpha=.6+f()*.4,h.beginPath(),h.moveTo(m+E*11+f()*3,S+f()*5),h.lineTo(m+E*11+f()*4-2,S+38+f()*6),h.stroke();_||(h.lineWidth=3.5,h.beginPath(),h.moveTo(m-6,S+30+f()*6),h.lineTo(m+44,S+6+f()*6),h.stroke())}}h.globalAlpha=1}),i.add("zvuchit",1240,170,(h,l,d,f)=>{Tn(h,f,"ПУСТЬ ЗВУЧИТ",14,138,138,r,{jitter:.07,font:An,drip:.25})}),i.add("derzhat",880,150,(h,l,d,f)=>{Tn(h,f,"ТРИ ДЕРЖАТ",12,118,112,n,{jitter:.09,font:An})}),i.add("nespat",720,110,(h,l,d,f)=>{Tn(h,f,"по очереди не спим",8,78,58,n,{jitter:.1,font:An,weight:400})}),i.add("slyshit",580,110,(h,l,d,f)=>{Tn(h,f,"оно отвечает",8,80,70,s,{jitter:.12,font:An,weight:400})}),i.add("nikogo",940,150,(h,l,d,f)=>{Tn(h,f,"ТАМ НИКОГО НЕТ",10,116,98,e,{jitter:.06,font:An,drip:.2})}),i.add("mayak",380,140,(h,l,d,f)=>{Tn(h,f,"МАЯК А",10,108,108,t,{jitter:.06,font:An})}),i.add("schema",520,480,(h,l,d,f)=>{h.strokeStyle=n,h.lineWidth=4,h.lineCap="round";const p=[[260,60],[70,400],[450,400]];h.beginPath(),p.forEach(([S,x],g)=>g?h.lineTo(S+f()*6,x+f()*6):h.moveTo(S,x)),h.closePath(),h.stroke();for(const[S,x]of p){for(let g=1;g<=3;g++)h.globalAlpha=1-g*.22,h.beginPath(),h.arc(S,x,g*22,0,7),h.stroke();h.globalAlpha=1,h.fillStyle=n,h.beginPath(),h.arc(S,x,7,0,7),h.fill()}h.lineWidth=2.5;for(let S=0;S<3;S++)for(let x=-2;x<=2;x++){const g=S*2.0944,m=Math.cos(g),_=Math.sin(g),v=260+m*x*22,E=290+_*x*22;h.beginPath(),h.moveTo(v-_*48,E+m*48),h.lineTo(v+_*48,E-m*48),h.stroke()}Tn(h,f,"А",276,50,44,n,{font:An}),Tn(h,f,"Б",18,446,44,n,{font:An}),Tn(h,f,"В",462,446,44,n,{font:An}),Tn(h,f,"спит",226,222,34,n,{font:An,weight:400})}),i.add("photos",420,300,(h,l,d,f)=>{for(let p=0;p<5;p++){const S=20+p%3*132+f()*10,x=16+Math.floor(p/3)*140+f()*14,g=(f()-.5)*.2;h.save(),h.translate(S+55,x+60),h.rotate(g),h.fillStyle="#e9e6dc",h.fillRect(-55,-62,110,124);const m=h.createLinearGradient(0,-52,0,40);m.addColorStop(0,["#7fa8c9","#c9a36b","#6b8f71","#b7b0a6","#40506a"][p]),m.addColorStop(1,["#2e4a3a","#5a3c2a","#2b3a4a","#6a5a4a","#1a2030"][p]),h.fillStyle=m,h.fillRect(-47,-54,94,90),h.fillStyle="rgba(240,225,200,0.85)";for(let _=0;_<2+p%2;_++){const v=-26+_*24;h.beginPath(),h.arc(v,2,9,0,7),h.fill(),h.fillRect(v-11,12,22,24)}h.fillStyle="rgba(200,190,150,0.7)",h.fillRect(-20,-70,40,14),h.restore()}}),i.add("scorch",256,256,(h,l,d)=>{const f=h.createRadialGradient(128,128,6,128,128,124);f.addColorStop(0,"rgba(6,6,8,0.92)"),f.addColorStop(.5,"rgba(14,12,12,0.55)"),f.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=f,h.fillRect(0,0,l,d)}),i.add("ne",680,120,(h,l,d,f)=>{Tn(h,f,"тише. оно спит",8,86,72,n,{jitter:.1,font:An,weight:400})}),i.add("smena",540,96,(h,l,d,f)=>{Tn(h,f,"смена 41. Лида, прости",6,64,36,s,{jitter:.1,font:An,weight:400})}),i.add("skaf",420,96,(h,l,d,f)=>{di(h,"СКАФАНДРЫ · ВКД",6,12,62,e,f)});const o=new Wc(1024),c=(h,l,d,f)=>o.add(h,l,d,(p,S,x,g)=>{p.fillStyle="#04100f",p.fillRect(0,0,S,x),f(p,S,x,g),p.fillStyle="rgba(0,0,0,0.22)";for(let m=0;m<x;m+=4)p.fillRect(0,m,S,2)}),u=(h,l,d,f,p,S)=>{h.font=`700 ${p}px 'DejaVu Sans Mono','Liberation Mono',monospace`,h.fillStyle=S,h.textBaseline="top",h.fillText(l,d,f)};return c("airlock",480,300,(h,l,d)=>{u(h,"ШЛЮЗ 2",20,16,44,"#7fe0d0"),u(h,"ВНЕШНИЙ ЛЮК  ЗАКРЫТ",20,84,28,"#7fe0d0"),u(h,"ДАВЛЕНИЕ  0.31 атм",20,126,28,"#ffb347"),u(h,"ТЕМПЕРАТУРА  -41 C",20,168,28,"#ffb347"),u(h,"ЭКИПАЖ НА БОРТУ: 0",20,220,28,"#ff5a4a"),h.strokeStyle="#7fe0d0",h.lineWidth=3,h.strokeRect(8,8,l-16,d-16)}),c("scope",480,300,(h,l,d)=>{h.strokeStyle="rgba(127,224,208,0.25)",h.lineWidth=1;for(let f=0;f<l;f+=40)h.beginPath(),h.moveTo(f,0),h.lineTo(f,d),h.stroke();for(let f=0;f<d;f+=40)h.beginPath(),h.moveTo(0,f),h.lineTo(l,f),h.stroke();h.strokeStyle="#ffc125",h.lineWidth=4,h.beginPath();for(let f=0;f<=l;f+=2){const p=f/l*3%1,S=d*.55-(p<.5?Math.sin(p*2*Math.PI*3)*Math.exp(-p*5)*d*.38:0);f?h.lineTo(f,S):h.moveTo(f,S)}h.stroke(),u(h,"А  3.000 Гц  НЕСУЩАЯ ДЕРЖИТСЯ",14,12,24,"#7fe0d0")}),c("term",480,300,h=>{["> журнал смены 41","> маяк А ... в норме","> маяк Б ... в норме","> маяк В ... в норме","> ответ на несущей: ЕСТЬ","> не выключать _"].forEach((l,d)=>u(h,l,16,16+d*44,28,d===4?"#ff5a4a":"#7fe0d0"))}),{tex:i.texture(),rects:i.rects,screenTex:o.texture(),screens:o.rects}}const ca=Math.PI,xt=ca/2;function Tt(i,e,t,n,s,r,a,o,c){c=c||o/t[4];const u=new vs(o,c,a==="+x"||a==="-x"?Math.max(1,Math.ceil(o/.8)):1,1),h=u.attributes.uv;for(let d=0;d<h.count;d++)h.setXY(d,t[0]+h.getX(d)*(t[2]-t[0]),t[1]+h.getY(d)*(t[3]-t[1]));const l={"+x":[0,xt],"-x":[0,-xt],"+z":[0,0],"-z":[0,ca],"+y":[-xt,0]}[a];i.add(e,u,i.mtx(n,s,r,l[0],l[1],0))}const hn=(i,e,t,n,s,r,a=1,o=1,c=1,u=16)=>i.add(e,new xi(r,u,Math.max(8,u*.75|0)),i.mtx(t,n,s,0,0,0,a,o,c)),Ut=(i,e,t,n,s,r,a,o=xt,c=0,u=28)=>i.add(e,new pa(r,a,8,u),i.mtx(t,n,s,o,c,0)),dt=(i,e,t,n,s,r,a,o,c=20,u=0,h=0,l=0)=>i.add(e,new on(r,a,o,c),i.mtx(t,n,s,u,l,h));function Qx(i,e){const t=Ss(i*7919+13),n=Kx(),s=Dx();Object.assign(s,{decal:Lx(n.tex),screens:Ti(16777215,1.6,n.screenTex),lamp:Ti(13624063,3.2),emerg:Ti(16722458,2.6),glowRed:Ti(16719888,5),glowCool:Ti(14083839,1.3),glowWarm:Ti(16756832,4),glowBeacon:Ti(16763e3,7)});const r=n.rects,a=n.screens,o=new pn,c={shafts:[],dust:[],steam:[],sparks:[]},u=[],h={};{const l=new Br;l.slab("floor",ce.x0,-.2,ce.z0,ce.x1,0,ce.z1),l.slab("ceil",ce.x0,ce.h,ce.z0,ce.x1,ce.h+.2,ce.z1),l.slab("wall",ce.x0-.3,0,ce.z0,ce.x0,ce.h,ce.z1),l.slab("wall",ce.x1,0,ce.z0,ce.x1+.3,ce.h,ce.z1),l.slab("wall",ce.x0-.3,0,ce.z1,ce.x1+.3,ce.h,ce.z1+.3);for(const f of[1.3,2.8,4.3,5.8])l.box("steelDark",ce.x0+.07,ce.h/2,f,.14,ce.h,.18),l.box("steelDark",ce.x1-.07,ce.h/2,f,.14,ce.h,.18),l.box("steelDark",0,ce.h-.07,f,3,.14,.18),l.box("orange",ce.x0+.07,1,f,.146,.09,.186),l.box("orange",ce.x1-.07,1,f,.146,.09,.186);for(const f of[2.05,3.55,5.05])l.box("white",ce.x0+.04,1.55,f,.08,1.2,1.2);l.slab("wallDark",ce.x0,0,ce.z0,ce.x0+.05,.8,ce.z1),l.slab("wallDark",ce.x1-.05,0,ce.z0,ce.x1,.8,ce.z1),l.pipe("copper",[-1.1,2.36,ce.z0],[-1.1,2.36,ce.z1],.04),l.pipe("copper",[-.94,2.38,ce.z0],[-.94,2.38,ce.z1],.03),l.pipe("steel",[1.12,2.33,ce.z0],[1.12,2.33,ce.z1],.075);for(const f of[1.9,3.4,4.9])Ut(l,"steelDark",1.12,2.33,f,.085,.022,0,0,14);l.pipe("steel",[ce.x0+.12,1.15,.9],[ce.x0+.12,1.15,5.9],.022),l.pipe("yellow",[-.7,2.44,.6],[.7,2.44,.6],.022);const d=ce.z1;Ut(l,"orange",0,1.2,d-.02,.86,.11,0,0,40),dt(l,"steel",0,1.2,d-.03,.8,.8,.1,40,xt),Ut(l,"bronze",0,1.62,d-.09,.17,.035,0,0,24),dt(l,"rubber",0,1.62,d-.085,.16,.16,.02,24,xt),Ut(l,"red",0,1.08,d-.2,.24,.025,0,0,28);for(let f=0;f<3;f++){const p=xt+f*2.0944;l.pipe("red",[0,1.08,d-.2],[Math.cos(p)*.24,1.08+Math.sin(p)*.24,d-.2],.016,{seg:8}),l.box("steelDark",Math.cos(p+1.05)*.86,1.2+Math.sin(p+1.05)*.86,d-.1,.16,.26,.14,{rz:p+1.05-xt})}dt(l,"steelDark",0,1.08,d-.13,.05,.05,.16,12,xt),l.box("steelDark",0,2.3,d-.06,.7,.12,.1),l.box("glowCool",0,2.3,d-.115,.6,.05,.02),l.pipe("steel",[1.32,2.2,1.6],[1.32,2.2,4.2],.025);for(const f of[2.3,3.5]){const p=(S,x,g,m,_,v,E=0,b=1)=>l.add(S,new ha(_,v,6,14),l.mtx(x,g,m,E,0,0,b,1,1));p("white",1.26,1.42,f,.26,.3,0,.7),l.box("steelDark",1.38,1.45,f,.16,.66,.46),l.box("teal",1.085,1.5,f,.03,.18,.24);for(const S of[-1,1])p("white",1.26,.62,f+S*.14,.105,.72),l.box("rubber",1.22,.07,f+S*.14,.32,.14,.2),Ut(l,"teal",1.26,.2,f+S*.14,.11,.018,xt,0,14),p("white",1.26,1.34,f+S*.36,.085,.6,S*.1),hn(l,"steelDark",1.26,.96,f+S*.39,.09,1,1.1,1,10),Ut(l,"teal",1.26,1.06,f+S*.385,.088,.016,xt,0,14);Ut(l,"bronze",1.26,1.8,f,.17,.03,xt,0,20);for(const S of[-1,1])hn(l,"white",1.26,1.66,f+S*.3,.13,.9,.8,1,12),Ut(l,"orange",1.26,1.5,f+S*.365,.09,.014,xt,0,14),Ut(l,"orange",1.26,.72,f+S*.14,.108,.014,xt,0,14);l.box("orange",1.07,1.3,f,.02,.05,.3),hn(l,"white",1.26,1.98,f,.21),hn(l,"rubber",1.2,1.98,f,.19,1,.8,.85),l.pipe("steel",[1.3,2.2,f],[1.3,2.12,f],.012,{seg:6})}Tt(l,"decal",r.skaf,ce.x1-.06,2.32,2.9,"-x",1.1),l.box("steelDark",1.08,1.3,ce.z0+.05,.56,.5,.1),Tt(l,"screens",a.airlock,1.08,1.36,ce.z0+.105,"+z",.44,.275),l.box("glowRed",.92,1.12,ce.z0+.105,.05,.03,.02),l.box("glowCool",1.02,1.12,ce.z0+.105,.05,.03,.02),dt(l,"steelDark",0,2.3,ce.z0+.1,.08,.09,.06,14),dt(l,"glowRed",0,2.24,ce.z0+.1,.06,.05,.08,14),l.box("steelDark",0,ce.h-.04,3.4,.3,.07,1.3),l.box("glowCool",0,ce.h-.08,3.4,.18,.02,1.1),l.box("yellow",-1.3/2-.07,1.05,ce.z0+.03,.14,2.1,.08),l.box("yellow",Bt.w/2+.07,1.05,ce.z0+.03,.14,2.1,.08),l.box("yellow",0,Bt.y1+.07,ce.z0+.03,Bt.w+.28,.14,.08),l.box("steelDark",0,Bt.y0/2,.2,Bt.w,Bt.y0,.4),Tt(l,"decal",r.shluz,ce.x0+.085,1.55,3.55,"+x",1.25),Tt(l,"decal",r.hazard,0,.004,ce.z0+.45,"+y",1.5,.28),Tt(l,"decal",r.hazard,0,.004,ce.z1-.5,"+y",1.8,.3),l.slab("steelDark",-.42,0,ce.z0+.7,.42,.012,ce.z1-.8);for(let f=ce.z0+.9;f<ce.z1-.9;f+=.3)l.slab("steel",-.4,.012,f,.4,.02,f+.04);for(let f=0;f<3;f++)dt(l,f===1?"white":"yellow",1.36,.5,5+f*.2,.075,.075,.62,14),hn(l,f===1?"white":"yellow",1.36,.81,5+f*.2,.075,1,.7,1,10),dt(l,"bronze",1.36,.88,5+f*.2,.02,.025,.07,8);l.box("steelDark",1.37,.42,5.2,.05,.05,.7),l.box("steelDark",1.37,.66,5.2,.05,.05,.7),l.box("steelDark",-1.26,.62,5.72,.46,1.24,.6),l.box("teal",-1.02,.62,5.72,.02,1.1,.5),l.box("steel",-1.01,.7,5.5,.02,.12,.03),l.box("orange",-1.22,1.33,5.72,.32,.18,.44,{ry:.1}),Ut(l,"rubber",ce.x0+.1,1.05,1,.2,.05,0,xt,22),Ut(l,"rubber",ce.x0+.16,1.05,1,.17,.045,0,xt,22),dt(l,"steelDark",ce.x0+.1,1.05,1,.07,.07,.22,12,0,xt),l.cable("rubber",[[ce.x0+.13,.86,1],[ce.x0+.22,.4,1.15],[ce.x0+.4,.03,1.5],[ce.x0+.5,.03,2.1]],.02),l.box("steel",.75,ce.h-.06,4.9,.7,.1,.7);for(let f=0;f<5;f++)l.box("steelDark",.75,ce.h-.115,4.62+f*.14,.6,.012,.05);l.box("white",-.9,.012,2.4,.21,.004,.297,{ry:.7}),l.box("white",.55,.012,4.6,.21,.004,.297,{ry:-.4}),l.box("orange",.95,.11,5.75,.5,.22,.32,{ry:.25}),o.add(l.build(s)),e.add({kind:"spot",pos:[0,ce.h-.12,3.4],to:[.1,0,3.3],color:13623551,power:9,dist:9,angle:1.05,penumbra:.9,prio:3,reach:12,flicker:f=>Math.sin(f*31)*Math.sin(f*7.3)>.82?.25:1}),e.add({kind:"point",pos:[0,2.15,ce.z0+.35],color:16720914,power:9,dist:7,prio:3,reach:11,flicker:f=>.25+.75*Math.pow(.5+.5*Math.sin(f*3.1),3)}),e.add({kind:"point",pos:[.9,1.35,ce.z0+.5],color:6742224,power:1,dist:3,reach:10}),e.add({kind:"point",pos:[0,2.25,ce.z1-.45],color:10471679,power:2.6,dist:5,reach:11,prio:2}),u.push([0,1.3,ce.z1,2.7],[ce.x0,.3,4.3,1.7],[ce.x1,2.2,5.3,1.3]),c.shafts.push({pos:[0,ce.h-.12,3.4],to:[.1,0,3.3],r0:.25,r1:1.7,color:12572415,power:.07}),c.dust.push({box:[ce.x0,.1,ce.z0,ce.x1,ce.h,ce.z1],n:500,color:13623551,power:.55}),c.steam.push({pos:[-1.1,2.3,2.05],dir:[.35,-1,.1],len:1.5,n:40,size:.5,color:13621478,power:.35})}{const l=new Br,d=Bt.w,f=Bt.y1-Bt.y0;l.box("yellow",d/2,Bt.y0+f/2,0,d-.03,f-.02,.09),l.box("white",d/2,Bt.y0+f/2,.05,d-.3,f-.34,.03),l.box("white",d/2,Bt.y0+f/2,-.05,d-.3,f-.34,.03);for(const _ of[1,-1]){Ut(l,"red",d/2,1.12,_*.17,.2,.024,0,0,28);for(let v=0;v<3;v++){const E=xt+v*2.0944;l.pipe("red",[d/2,1.12,_*.17],[d/2+Math.cos(E)*.2,1.12+Math.sin(E)*.2,_*.17],.015,{seg:8})}dt(l,"steel",d/2,1.12,_*.11,.045,.045,.14,12,xt),Tt(l,"decal",r.hazard,d/2,.42,_*.068,_>0?"+z":"-z",d-.34,.16)}dt(l,"steelDark",.02,.5,0,.035,.035,.24,10),dt(l,"steelDark",.02,1.6,0,.035,.035,.24,10);const p=l.build(s),S=new pn;S.add(p),vl(S,-d/2,0,.02);const x=S.quaternion.clone(),g=new gn,m=new D(0,1,0);h.hatch={group:S,set(_){S.quaternion.copy(x).multiply(g.setFromAxisAngle(m,_*1.95))}},h.hatch.set(1),o.add(S)}{const l=new Br;l.slab("floor",ee.x0,-.2,ee.z0,ee.x1,0,ee.z1),l.slab("ceil",ee.x0,ee.h,ee.z0,ee.x1,ee.h+.2,ee.z1),l.wall("wall","x",ee.x0-.2,ee.z0,ee.z1,0,ee.h,.4,[{a0:xe.z0,a1:xe.z1,y0:xe.y0,y1:xe.y1}]),l.wall("wall","x",ee.x1+.2,ee.z0,ee.z1,0,ee.h,.4,[{a0:it.z0,a1:it.z1,y0:0,y1:it.h}]),l.slab("wallDark",ee.x0,0,ee.z0-.4,ee.x1,ee.h,ee.z0),l.wall("wallDark","z",.2,ee.x0,ee.x1,0,ee.h,.4,[{a0:-1.3/2,a1:Bt.w/2,y0:Bt.y0,y1:Bt.y1}]),l.box("yellow",-1.3/2-.07,1.05,-.03,.14,2.1,.08),l.box("yellow",Bt.w/2+.07,1.05,-.03,.14,2.1,.08),l.box("yellow",0,Bt.y1+.07,-.03,Bt.w+.28,.14,.08),l.slab("wallDark",ee.x0,0,ee.z0,ee.x0+.05,.78,ee.z1),l.slab("steel",ee.x0,.78,ee.z0,ee.x0+.07,.83,ee.z1);for(const[m,_]of[[ee.z0,it.z0-.15],[it.z1+.15,ee.z1]])l.slab("wallDark",ee.x1-.05,0,m,ee.x1,.78,_),l.slab("steel",ee.x1-.07,.78,m,ee.x1,.83,_);for(let m=-2;m>ee.z0;m-=4)m>xe.z0&&m<xe.z1||(l.box("steelDark",ee.x0+.1,ee.h/2,m,.2,ee.h,.3),l.box("orange",ee.x0+.105,1.08,m,.22,.14,.32)),l.box("steelDark",ee.x1-.1,ee.h/2,m,.2,ee.h,.3),l.box("orange",ee.x1-.105,1.08,m,.22,.14,.32),l.box("steelDark",0,ee.h-.11,m,4,.22,.3),l.box("steelDark",-1.55,ee.h-.35,m,.5,.08,.26,{rz:.785}),l.box("steelDark",1.55,ee.h-.35,m,.5,.08,.26,{rz:-.785});l.pipe("steel",[1.56,2.68,ee.z0],[1.56,2.68,ee.z1],.09),l.pipe("copper",[1.3,2.74,ee.z0],[1.3,2.74,ee.z1],.05),l.pipe("white",[-1.56,2.68,ee.z0],[-1.56,2.68,ee.z1],.07),l.pipe("orange",[-1.32,2.76,ee.z0],[-1.32,2.76,ee.z1],.04),l.slab("steelDark",.7,2.8,ee.z0,1.1,2.83,ee.z1);for(const m of[.78,.9,1.02])l.pipe("rubber",[m,2.85,ee.z0],[m,2.85,ee.z1],.022,{seg:6});for(let m=-4;m>ee.z0;m-=8)for(const _ of[1.56,-1.56])Ut(l,"steelDark",_,2.68,m+1.7,.105,.025,0,0,14);const d={"-4":1,"-12":1,"-20":2,"-28":1};for(let m=-4;m>ee.z0;m-=4){l.box("steelDark",0,ee.h-.045,m,.34,.09,1.5);const _=d[m];l.box(_?"lamp":"rubber",0,ee.h-.1,m,.22,.02,1.3),_&&(e.add({kind:"spot",pos:[0,ee.h-.14,m],to:[0,0,m-.05],color:12375807,power:10,dist:11,angle:1.1,penumbra:.9,prio:2,reach:20,mood:{amber:{color:16760454,power:12}},flicker:_===2?v=>Math.sin(v*23)*Math.sin(v*5.1)>.3?.15:1:null}),c.shafts.push({pos:[0,ee.h-.14,m],to:[0,0,m-.05],r0:.3,r1:2,color:12375807,power:.14,moodColor:{amber:16754776}}))}for(let m=-2;m>Rt;m-=4){for(const _ of[ee.x0+.06,ee.x1-.06])l.box("emerg",_,.3,m-2,.03,.05,.4);(m+2)%8===0&&e.add({kind:"point",pos:[(m%16===-2?-1:1)*1.7,.35,m-2],color:16722458,power:2.2,dist:6,reach:18,mood:{amber:{color:16747050,power:3.2}}})}l.pipe("steel",[ee.x1-.12,1.05,-.6],[ee.x1-.12,1.05,it.z1+.4],.024),l.pipe("steel",[ee.x1-.12,1.05,it.z0-.4],[ee.x1-.12,1.05,Rt+1.2],.024);const f=(xe.z0+xe.z1)/2,p=xe.z1-xe.z0;l.box("steel",ee.x0+.04,xe.y1+.09,f,.12,.18,p+.36),l.box("steel",ee.x0+.08,xe.y0-.07,f,.2,.14,p+.36),l.box("steel",ee.x0+.04,(xe.y0+xe.y1)/2,xe.z0-.09,.12,xe.y1-xe.y0,.18),l.box("steel",ee.x0+.04,(xe.y0+xe.y1)/2,xe.z1+.09,.12,xe.y1-xe.y0,.18);for(const m of[xe.z0+p/3,xe.z0+2*p/3])l.box("steelDark",ee.x0-.14,(xe.y0+xe.y1)/2,m,.16,xe.y1-xe.y0,.08);l.slab("steelDark",ee.x0-.4,xe.y0-.02,xe.z0,ee.x0,xe.y0,xe.z1),l.slab("steelDark",ee.x0-.4,xe.y1,xe.z0,ee.x0,xe.y1+.02,xe.z1),l.box("orange",ee.x1-.03,it.h/2,it.z0-.08,.1,it.h,.16),l.box("orange",ee.x1-.03,it.h/2,it.z1+.08,.1,it.h,.16),l.box("orange",ee.x1-.03,it.h+.08,(it.z0+it.z1)/2,.1,.16,it.z1-it.z0+.32),l.slab("wallDark",ee.x1+.14,0,it.z0,ee.x1+.26,it.h,it.z1-it.open),l.slab("yellow",ee.x1+.12,.9,it.z1-it.open-.1,ee.x1+.28,1.3,it.z1-it.open),l.slab("steelDark",ee.x1,it.h,it.z0,ee.x1+.4,it.h+.02,it.z1),Tt(l,"decal",r.masterskaya,ee.x1-.004,2.68,-24,"-x",1.7),Tt(l,"decal",r.veresk,ee.x1-.054,1.9,-5.8,"-x",3.3),Tt(l,"decal",r.kolco,ee.x0+.004,2.5,-7.8,"+x",2.6),Tt(l,"decal",r.hazard,1.55,.004,-24,"+y",.6,1.9),l.box("white",1.55,.35,-8.3,.8,.7,1,{ry:.06}),l.box("orange",1.6,.3,-9.5,.7,.6,.8,{ry:-.1}),l.box("teal",1.55,.95,-8.4,.6,.5,.7,{ry:.3}),l.box("steelDark",1.62,.72,-9.5,.5,.24,.5,{ry:.5});const S=[[-22.5,"clothBlue","cloth"],[-25.5,"cloth","clothWarm"],[-28.5,"clothWarm","clothBlue"]];for(const[m,_,v]of S)l.box(_,-1.52,.07,m,.82,.14,1.9,{ry:(t()-.5)*.08}),hn(l,v,-1.5,.2,m+.25+t()*.3,.42,.9,.3,1.5,14),hn(l,v,-1.3-t()*.2,.18,m-.3,.3,1.1,.35,1.2,12),l.box("white",-1.55,.2,m+.78,.5,.12,.3,{ry:t()*.4-.2,rz:.08});l.box("orange",-1.6,.24,-24,.5,.48,.5,{ry:.2}),dt(l,"white",-1.55,.53,-24.05,.04,.035,.09,12),dt(l,"steel",-1.72,.54,-23.9,.035,.035,.11,10),dt(l,"steelDark",-1.45,.56,-23.85,.05,.06,.04,10),dt(l,"glowWarm",-1.45,.64,-23.85,.04,.04,.12,10),dt(l,"steelDark",-1.45,.72,-23.85,.055,.05,.03,10),l.box("white",-1.6,.2,-27,.46,.4,.46,{ry:-.3});for(let m=0;m<4;m++)l.box(["red","teal","clothWarm","white"][m],-1.6+(t()-.5)*.1,.42+m*.035,-27,.22,.03,.3,{ry:t()*1.2});l.box("rubber",-1,.09,-23.3,.13,.18,.3,{ry:.5}),l.box("rubber",-.92,.06,-23.65,.13,.12,.3,{ry:1.4,rz:1.3});for(let m=0;m<6;m++)dt(l,"steel",-.95-t()*.6,.05,-26.2-t()*3.4,.04,.04,.1,10,t()<.5?xt:0,0,t()*3);l.box("clothWarm",-1.9,1.25,-21.6,.1,.7,.5,{rz:.06}),l.box("clothWarm",-1.86,.95,-21.6,.14,.3,.56),l.pipe("steel",[ee.x0+.03,1.65,-21.6],[ee.x0+.14,1.65,-21.6],.012,{seg:6}),dt(l,"steelDark",-.9,.42,-25.4,.17,.17,.04,14);for(let m=0;m<3;m++){const _=m*2.0944;l.pipe("steel",[-.9,.42,-25.4],[-.9+Math.cos(_)*.2,0,-25.4+Math.sin(_)*.2],.012,{seg:6})}Tt(l,"decal",r.tally,ee.x0+.004,1.42,-25.4,"+x",1.25),Tt(l,"decal",r.photos,ee.x0+.004,1.2,-22.7,"+x",.62),Tt(l,"decal",r.nespat,ee.x0+.004,1.75,-28.4,"+x",1.5),Tt(l,"decal",r.smena,ee.x0+.004,.98,-28.2,"+x",.8);const x=["teal","white","steelDark","white","teal","steelDark"];for(let m=0;m<6;m++){const _=-1.67+m*.668;l.box(x[m],_,.96+t()*.02,Rt-.25,.65,1.92,.5,{rz:(t()-.5)*.05,ry:(t()-.5)*.08}),l.box("steelDark",_,1.5,Rt+.012,.3,.16,.02)}l.box("steelDark",0,2.3,Rt-.2,4,.7,.06,{rx:.04}),l.box("white",-.9,2.82,Rt-.25,1.9,.3,.5,{rz:.03}),l.box("orange",1.1,2.8,Rt-.25,1.7,.34,.5,{rz:-.04}),l.box("steel",.1,1.28,Rt+.05,3.9,.5,.03,{rz:.13}),l.box("steel",-.1,.55,Rt+.055,3.9,.42,.03,{rz:-.17}),l.box("steelDark",-.95,1.5,Rt+.1,.14,3,.14),l.box("steelDark",.95,1.5,Rt+.1,.14,3,.14),l.box("steelDark",0,2.05,Rt+.1,4,.12,.1),l.box("weld",.1,1.535,Rt+.068,3.9,.022,.012,{rz:.13}),l.box("weld",.1,1.025,Rt+.068,3.9,.022,.012,{rz:.13}),l.box("weld",-.1,.765,Rt+.072,3.9,.022,.012,{rz:-.17}),l.box("weld",-.1,.335,Rt+.072,3.9,.022,.012,{rz:-.17});for(const m of[-.95,.95])for(const _ of[.4,1.2,2.05])Tt(l,"decal",r.scorch,m,_,Rt+.18,"+z",.6,.6);for(const m of[-1.98,1.98])Tt(l,"decal",r.scorch,m*.99,1.3,Rt+.3,m<0?"+x":"-x",.9,1.4);Tt(l,"decal",r.nikogo,.1,1.72,Rt+.19,"+z",2.3),dt(l,"red",1.55,.62,-34.7,.11,.11,1.2,16),hn(l,"red",1.55,1.22,-34.7,.11,1,.8,1,12),dt(l,"teal",1.28,.62,-34.75,.11,.11,1.2,16),hn(l,"teal",1.28,1.22,-34.75,.11,1,.8,1,12),dt(l,"bronze",1.55,1.34,-34.7,.025,.03,.1,8),dt(l,"bronze",1.28,1.34,-34.75,.025,.03,.1,8),l.box("yellow",1.1,.2,-34.2,.5,.4,.36,{ry:.3}),l.cable("rubber",[[1.55,1.3,-34.7],[1.3,.5,-34.3],[.7,.03,-34.5],[.1,.03,-35],[-.4,.03,-35.5]],.014),l.cable("red",[[1.28,1.3,-34.75],[1,.4,-34.6],[.5,.03,-34.9],[-.2,.03,-35.2],[-.42,.04,-35.52]],.012),hn(l,"steelDark",-.9,.1,-34.7,.16,1,.9,.8,12),l.box("yellow",-.5,.12,-34.25,.3,.2,.14,{ry:.5,rx:.5}),l.box("glowCool",-.52,.16,-34.33,.24,.14,.02,{ry:.5,rx:.5});for(const m of[-1,1]){const _=m*2,v=m<0?[[ee.z0,ee.z1]]:[[ee.z0,ee.z1]];for(const[E,b]of v)l.slab("steelDark",_-m*.1,2.3,E,_-m*0,2.42,b);l.slab("steelDark",_-m*.34,0,ee.z0,_-m*.08,.014,ee.z1);for(let E=-.3;E>Rt;E-=.22)l.slab("steel",_-m*.32,.014,E-.03,_-m*.1,.022,E)}let g=0;for(let m=-4;m>Rt+2;m-=4,g++){for(const _ of[-1,1]){if(_<0&&m>xe.z0-1&&m<xe.z1+1||_>0&&m>it.z0-1.5&&m<it.z1+1.5||_<0&&m<-21&&m>-30)continue;const v=_*2,E=(g*2+(_>0?1:0)+i)%5;if(l.pipe("steel",[v-_*.05,.83,m+1.7],[v-_*.05,2.3,m+1.7],.022,{seg:8}),l.pipe("copper",[v-_*.05,.83,m+1.62],[v-_*.05,2.3,m+1.62],.014,{seg:8}),E===0){l.box("steelDark",v-_*.08,1.55,m,.16,.9,.6),l.box("steel",v-_*.165,1.55,m,.012,.8,.5),l.box("yellow",v-_*.175,1.86,m,.006,.1,.34);for(let b=0;b<3;b++)l.box(b===1?"glowRed":"glowWarm",v-_*.175,1.3,m-.12+b*.12,.008,.025,.04);l.pipe("steelDark",[v-_*.08,2,m],[v-_*.08,2.3,m],.03,{seg:8})}else if(E===1){l.box("steelDark",v-_*.03,1.9,m,.06,.5,.9);for(let b=0;b<6;b++)l.box("steel",v-_*.065,1.71+b*.075,m,.02,.03,.8,{rz:_*.5})}else if(E===2)dt(l,"red",v-_*.13,1.25,m-.2,.07,.07,.42,14),hn(l,"red",v-_*.13,1.46,m-.2,.07,1,.6,1,10),dt(l,"steelDark",v-_*.13,1.52,m-.2,.02,.025,.07,8),l.box("white",v-_*.07,1.5,m+.25,.14,.3,.36),l.box("red",v-_*.143,1.5,m+.25,.006,.16,.05),l.box("red",v-_*.143,1.5,m+.25,.006,.05,.16);else if(E===3){l.box("steelDark",v-_*.04,1.4,m,.08,.6,.7);for(let b=0;b<2;b++)Ut(l,"red",v-_*.14,1.4,m-.16+b*.32,.07,.014,0,xt,16),dt(l,"steel",v-_*.09,1.4,m-.16+b*.32,.018,.018,.1,8,0,xt);l.pipe("copper",[v-_*.09,1.4,m-.34],[v-_*.09,1.4,m+.34],.025,{seg:8})}else{l.box("steelDark",v-_*.02,1.6,m,.04,.7,1);for(let b=0;b<4;b++)l.box(b%2?"white":"yellow",v-_*.045,1.5+b%2*.24,m-.33+b*.2,.004,.2+b%3*.03,.15,{rx:(b-1.5)*.06})}}g%2===1&&(l.box("steel",0,2.62,m+2,3,.24,.42),l.box("steelDark",0,2.62,m+2,3.04,.05,.46),l.cable("rubber",[[-1.2,2.5,m+1.6],[-.6,2.2,m+1.2],[.1,2.12-g%3*.08,m+.6],[.7,2.3,m+.1],[1,2.78,m-.3]],.016))}for(const m of[-6.5,-18.5,-31]){l.box("steel",0,.008,m,.9,.016,.9);for(const[_,v]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])l.box("yellow",_,.018,m+v,.1,.006,.1);l.box("steelDark",0,.02,m,.24,.012,.06)}for(let m=0;m<16;m++)l.box("white",(t()-.5)*3,.006,-3-t()*31,.21,.003,.297,{ry:t()*3});l.box("steelDark",1.35,.5,-17.2,.6,.04,.95),l.box("steelDark",1.35,.14,-17.2,.6,.04,.95);for(const[m,_]of[[-.27,-.44],[.27,-.44],[-.27,.44],[.27,.44]])l.pipe("steel",[1.35+m,.06,-17.2+_],[1.35+m,.85,-17.2+_],.016,{seg:6}),dt(l,"rubber",1.35+m,.05,-17.2+_,.05,.05,.03,10,0,xt);l.box("orange",1.35,.66,-17.3,.44,.26,.5,{ry:.2}),l.box("teal",1.3,.24,-17.1,.4,.16,.6,{ry:-.1}),o.add(l.build(s)),e.add({kind:"spot",pos:[-10.5,6.2,f+7.6],to:[1.2,.2,f-1.5],color:16773336,power:4.5,dist:40,decay:0,angle:.36,penumbra:.2,prio:4,reach:22}),c.sun={pos:[-10.5,6.2,f+7.6],to:[1.2,.2,f-1.5]},c.dust.push({box:[ee.x0,.05,xe.z0-2.5,ee.x1,2.4,xe.z1-.5],n:1300,color:16773336,power:1.5,sun:!0}),c.dust.push({box:[ee.x0,.2,-30,ee.x1,ee.h,-1],n:900,color:12374256,power:.4}),e.add({kind:"point",pos:[-1.45,.75,-23.85],color:16752704,power:1.6,dist:5,reach:16,prio:2,mood:{amber:{color:16752704,power:2.6}}}),e.add({kind:"point",pos:[-.5,.35,-34.3],color:13623551,power:3.2,dist:7,reach:18,prio:2,flicker:m=>.8+.2*Math.sin(m*13)*Math.sin(m*3.7)}),u.push([.3,1.6,Rt,3.2],[ee.x0-.2,2.2,xe.z0,1.25],[1.6,ee.h,-18.5,1.5],[ee.x1,.1,-26.6,1.3]),c.steam.push({pos:[-1.56,2.6,-31.5],dir:[.5,-1,.2],len:1.8,n:40,size:.6,color:13161184,power:.3})}{const l=new Br,d=la.x,f=la.z;l.slab("floor",ie.x0-.4,-.2,ie.z0,ie.x1,0,ie.z1),l.slab("ceil",ie.x0-.4,ie.h,ie.z0,ie.x1,ie.h+.2,ie.z1),l.slab("wall",ie.x1,0,ie.z0-.4,ie.x1+.4,ie.h,ie.z1+.4),l.slab("wall",ie.x0-.4,0,ie.z0-.4,ie.x1,ie.h,ie.z0),l.slab("wall",ie.x0-.4,0,ie.z1,ie.x1,ie.h,ie.z1+.4),l.slab("wall",ie.x0-.4,ee.h,ie.z0,ie.x0,ie.h,ie.z1),l.wall("wallDark","x",ie.x0-.03,ie.z0,ie.z1,0,ee.h,.06,[{a0:it.z0,a1:it.z1,y0:0,y1:it.h}]),l.slab("wallDark",ie.x1-.05,0,ie.z0,ie.x1,1.2,ie.z1),l.slab("wallDark",ie.x0,0,ie.z0,ie.x1,1.2,ie.z0+.05),l.slab("wallDark",ie.x0,0,ie.z1-.05,ie.x1,1.2,ie.z1);for(const _ of[ie.x0+.12,7.07,11.73,ie.x1-.12])for(const v of[ie.z0+.12,ie.z1-.12])l.box("steelDark",_,ie.h/2,v,.24,ie.h,.24);for(const _ of[-19.6,-24,-28.4]){l.box("steelDark",(ie.x0+ie.x1)/2,ie.h-.15,_,14,.3,.22),l.box("steelDark",ie.x1-.12,ie.h/2,_,.24,ie.h,.24);for(let v=ie.x0+1;v<ie.x1;v+=2)l.box("steelDark",v,ie.h-.45,_,.06,.6,.06,{rz:(Math.round(v)%4<2?1:-1)*.6})}l.box("yellow",(ie.x0+ie.x1)/2,4.85,f,14,.26,.2),l.box("steelDark",d+.3,4.66,f,.6,.2,.44),l.pipe("steel",[d+.3,4.6,f],[d+.3,4.48,f],.02,{seg:8}),Ut(l,"steel",d+.3,4.42,f,.06,.018,0,0,12),l.pipe("steel",[ie.x0+.4,5.2,ie.z0+.5],[ie.x1-.2,5.2,ie.z0+.5],.1),l.pipe("copper",[ie.x0+.4,4.9,ie.z0+.35],[ie.x1-.2,4.9,ie.z0+.35],.05),l.pipe("white",[ie.x1-.3,5.1,ie.z0+.4],[ie.x1-.3,5.1,ie.z1-.2],.08);for(const[_,v,E]of[[5.2,-20.8,1],[13.6,-20.8,0],[5.2,-27.2,0],[13.6,-27.2,0]])l.box("steelDark",_,ie.h-.4,v,.9,.12,.9),l.box(E?"glowCool":"rubber",_,ie.h-.47,v,.7,.02,.7),l.pipe("steelDark",[_,ie.h,v],[_,ie.h-.36,v],.03,{seg:8});for(let _=0;_<3;_++){const v=xt+_*2.0944,E=d+Math.cos(v)*2.05,b=f+Math.sin(v)*2.05;l.pipe("steelDark",[d+Math.cos(v)*.9,.42,f+Math.sin(v)*.9],[E,.1,b],.065),dt(l,"steel",E,.04,b,.24,.27,.08,16),l.pipe("yellow",[d+Math.cos(v)*.75,1.3,f+Math.sin(v)*.75],[E-Math.cos(v)*.3,.14,b-Math.sin(v)*.3],.03,{seg:8})}l.add("steelDark",new on(1.2,1.32,.3,6),l.mtx(d,.15,f,0,.3,0)),dt(l,"orange",d,.86,f,.72,.74,1.12,28);for(const _ of[.42,.86,1.3])Ut(l,"steelDark",d,_,f,.745,.04,xt,0,36);for(let _=0;_<12;_++){const v=_*ca/6;l.box("steelDark",d+Math.cos(v)*.75,.86,f+Math.sin(v)*.75,.04,.8,.07,{ry:-v})}l.add("steel",new on(.88,.88,.08,8),l.mtx(d,1.46,f,0,.2,0)),dt(l,"white",d+.07,1.95,f-.04,.5,.5,.9,24),hn(l,"white",d+.07,2.4,f-.04,.5,1,.42,1,24);for(const _ of[1.72,2.2])Ut(l,"yellow",d+.07,_,f-.04,.512,.022,xt,0,32);dt(l,"steel",d,3.4,f,.1,.12,1.9,14),[[2.86,.56],[3.22,.43],[3.55,.3]].forEach(([_,v],E)=>{Ut(l,"copper",d,_,f,v,.05,xt,0,40);for(let b=0;b<3;b++){const M=b*2.0944+E;l.pipe("steelDark",[d,_,f],[d+Math.cos(M)*v,_,f+Math.sin(M)*v],.014,{seg:6})}});for(let _=0;_<3;_++){const v=xt+ca/3+_*2.0944;l.pipe("bronze",[d+Math.cos(v)*.86,1.5,f+Math.sin(v)*.86],[d+Math.cos(v)*.8,2.7,f+Math.sin(v)*.8],.035,{seg:10}),l.pipe("bronze",[d+Math.cos(v)*.8,2.7,f+Math.sin(v)*.8],[d+Math.cos(v)*.22,4.3,f+Math.sin(v)*.22],.03,{seg:10}),hn(l,"steel",d+Math.cos(v)*.22,4.33,f+Math.sin(v)*.22,.055,1,1,1,10),hn(l,"steelDark",d+Math.cos(v)*.8,2.7,f+Math.sin(v)*.8,.06,1,1,1,10)}hn(l,"glowBeacon",d,4.48,f,.13,1,1,1,16),Ut(l,"steelDark",d,4.48,f,.17,.012,0,0,16),Ut(l,"steelDark",d,4.48,f,.17,.012,0,xt,16),l.box("teal",d-.98,1.05,f+.25,.34,.62,.56,{ry:.12}),Tt(l,"screens",a.scope,d-1.158,1.12,f+.228,"-x",.4,.25),l.box("glowRed",d-1.156,.84,f+.4,.02,.03,.03),l.box("glowWarm",d-1.156,.84,f+.3,.02,.03,.03),l.box("glowWarm",d-1.156,.84,f+.2,.02,.03,.03),l.box("yellow",d+.55,1.75,f+.62,.42,.32,.26,{ry:-.7}),l.box("white",d-.3,2,f+.66,.5,.36,.2,{ry:.25,rz:.06});for(let _=0;_<3;_++)l.box("steelDark",d+1.55+_*.36,.14,f+1.25-_*.12,.3,.28,.2,{ry:.3}),dt(l,"copper",d+1.5+_*.36,.31,f+1.24-_*.12,.022,.022,.06,8);const p=new pl([0,.1,.2,.3,.4,.5,.56].map(_=>new oe(_,_*_*.7)),28);l.add("white",p,l.mtx(d+1,2.55,f-1,1,-.8,0)),l.pipe("steel",[d+.45,2.3,f-.4],[d+1,2.55,f-1],.03,{seg:8}),l.pipe("steel",[d-.75,0,f-1.75],[d-.42,2.7,f-.62],.022,{seg:8}),l.pipe("steel",[d-.35,0,f-1.9],[d-.02,2.7,f-.77],.022,{seg:8});for(let _=1;_<8;_++){const v=_/8.2;l.pipe("steel",[d-.75+.33*v,2.7*v,f-1.75+1.13*v],[d-.35+.33*v,2.7*v,f-1.9+1.13*v],.014,{seg:6})}l.box("white",d-1.38,.3,f-.55,.03,.46,1.05),Tt(l,"decal",r.mayak,d-1.4,.3,f-.55,"-x",.9);const S=[[ie.x0+.12,.45,-19.4,"+x"],[ie.x1-.12,.45,-27.2,"-x"],[8.6,.45,ie.z0+.12,"+z"]],x=["rubber","orange","rubber","teal","rubber","red"];S.forEach(([_,v,E,b],M)=>{b==="+z"?l.box("yellow",_,v+.2,E,.6,.7,.2):l.box("yellow",_,v+.2,E,.2,.7,.6),l.pipe("steel",[_,v+.55,E],[_,ie.h-.4,E],.035,{seg:8});for(let y=0;y<3;y++){const C=Math.atan2(E-f,_-d)+(y-1)*.5,A=(y-1)*.16,L=d+Math.cos(C)*1,I=f+Math.sin(C)*1,N=_-L,P=E-I,z=Math.hypot(N,P),k=-P/z,B=N/z,se=[[d+Math.cos(C)*.72,.62,f+Math.sin(C)*.72],[L+Math.cos(C)*.35,.34,I+Math.sin(C)*.35],[L+N*.12,.04,I+P*.12]];for(const X of[.3,.5,.7,.88]){const Q=(t()-.5)*1.3+A*3;se.push([L+N*X+k*Q,.035+t()*.01,I+P*X+B*Q])}se.push([_+(b==="+x"?.3:b==="-x"?-.3:A),.05,E+(b==="+z"?.3:A)],[_+(b==="+z"?A:0),v,E+(b!=="+z"?A:0)]),l.cable(x[(M*3+y)%x.length],se,.028+t()*.018,{seg:7})}}),l.cable("rubber",[[d+.3,4.4,f],[d+.5,3.9,f+.2],[d+.2,3.7,f+.1],[d,3.62,f]],.018),l.cable("orange",[[d+.3,4.4,f],[d-.5,3.6,f-.3],[d-.6,2.7,f-.1],[d-.3,2.3,f+.5]],.016),l.box("steel",6.25,.95,ie.z1-.45,2.5,.06,.8);for(const _ of[5.1,7.4])for(const v of[ie.z1-.12,ie.z1-.78])l.box("steelDark",_,.46,v,.06,.92,.06);l.box("steelDark",6.25,.3,ie.z1-.45,2.3,.04,.7),l.box("red",5.5,1.08,ie.z1-.4,.5,.2,.26,{ry:.2}),l.box("steelDark",6.6,1.2,ie.z1-.3,.6,.44,.12,{rx:-.12}),Tt(l,"screens",a.term,6.6,1.2,ie.z1-.368,"-z",.52,.325),l.box("white",7.1,1,ie.z1-.5,.3,.04,.22,{ry:.4}),dt(l,"white",5.95,1.03,ie.z1-.62,.04,.035,.09,12);for(const _ of[-22.1,-20.5,-18.9])l.box("steelDark",ie.x1-.1,1.4,_,.06,2.8,.06),l.box("steelDark",ie.x1-.74,1.4,_,.06,2.8,.06);for(const _ of[.5,1.4,2.3]){l.box("steel",ie.x1-.42,_,-20.5,.7,.04,3.3);for(let v=0;v<4;v++)t()<.8&&l.box(["orange","white","teal","steelDark"][(v+_*10|0)%4],ie.x1-.42,_+.02+.2,-21.7+v*.8+t()*.1,.5+t()*.1,.4,.55+t()*.15,{ry:(t()-.5)*.2})}l.box("orange",3.7,.4,-29.9,.9,.8,.9,{ry:.1}),l.box("white",4.4,.3,-29.6,.6,.6,.7,{ry:-.3}),l.box("teal",3.75,1.05,-29.95,.6,.5,.6,{ry:.5});for(const[_,v,E]of[[14.2,-29.8,"teal"],[14.9,-29.7,"teal"],[14.55,-29.25,"orange"]])dt(l,E,_,.45,v,.29,.29,.9,20),Ut(l,"steelDark",_,.3,v,.295,.015,xt,0,20),Ut(l,"steelDark",_,.62,v,.295,.015,xt,0,20);const g=[[6.2,-27.4],[12.9,-20.4]];for(const[_,v]of g){for(let b=0;b<3;b++){const M=b*2.0944+.4;l.pipe("steelDark",[_,1.1,v],[_+Math.cos(M)*.42,0,v+Math.sin(M)*.42],.018,{seg:6})}l.pipe("steelDark",[_,1.05,v],[_,1.95,v],.02,{seg:8});const E=Math.atan2(d-_,f-v);l.box("yellow",_,2.02,v,.44,.3,.16,{ry:E,rx:-.15}),l.box("glowCool",_+Math.sin(E)*.085,2.035,v+Math.cos(E)*.085,.36,.22,.02,{ry:E,rx:-.15}),e.add({kind:"spot",pos:[_+Math.sin(E)*.12,2.03,v+Math.cos(E)*.12],to:[d,2.4,f],color:14477567,power:24,dist:18,angle:.62,penumbra:.5,prio:3,reach:20}),l.cable("rubber",[[_,1.2,v],[_-.2,.3,v+.3],[_-.6,.03,v+.2],[_-1.4*Math.sign(_-d),.03,v+1*Math.sign(f-v)]],.015)}Tt(l,"decal",r.zvuchit,10.2,3,ie.z0+.004,"+z",5),Tt(l,"decal",r.derzhat,ie.x1-.004,2.7,-25.6,"-x",4.2),Tt(l,"decal",r.schema,11.6,2.5,ie.z1-.004,"-z",2.3),Tt(l,"decal",r.ne,5.2,1.75,ie.z0+.004,"+z",2.4),Tt(l,"decal",r.slyshit,8.6,1.7,ie.z1-.054,"-z",1.5),Tt(l,"decal",r.tally,13.6,1.9,ie.z0+.004,"+z",1.3),o.add(l.build(s)),e.add({kind:"spot",pos:[5.2,ie.h-.5,-20.8],to:[5.5,0,-21.2],color:13623551,power:20,dist:12,angle:.75,penumbra:.7,prio:2,reach:18}),c.shafts.push({pos:[5.2,ie.h-.5,-20.8],to:[5.5,0,-21.2],r0:.45,r1:3.6,color:13623551,power:.2});const m=_=>{const v=_*.5%1;let E=.3;for(let b=0;b<3;b++){const M=v-b*.12;M>0&&M<.1&&(E+=Math.exp(-M*40)*1.6)}return E};e.add({kind:"point",pos:[d,4.5,f],color:16758880,power:12,dist:16,prio:4,reach:22,flicker:m}),h.beaconPulse=m,e.add({kind:"point",pos:[6.6,1.35,ie.z1-.8],color:5822664,power:2,dist:4,reach:18}),e.add({kind:"point",pos:[d-1.5,1.1,f+.25],color:16756800,power:1.6,dist:3.5,reach:18}),e.add({kind:"point",pos:[ie.x1-.5,.9,-27.2],color:10470655,power:14,dist:7,reach:18,prio:2,flicker:_=>{const v=_*1.7%1;return v<.07?1:v>.5&&v<.53?.6:.02}}),u.push([ie.x1,.8,ie.z0,3.6],[12.5,5,ie.z0,2.6],[11.8,0,-26.6,1.5],[4,ie.h,-29,2.6]),c.dust.push({box:[ie.x0,.2,ie.z0,ie.x1,ie.h,ie.z1],n:1800,color:14477567,power:.5}),c.steam.push({pos:[ie.x0+.5,5.1,ie.z0+.6],dir:[.4,-1,.5],len:2.4,n:50,size:.9,color:13161184,power:.3}),c.sparks.push({pos:[ie.x1-.25,.95,-27.2],dir:[-1,.6,.1],n:60,period:1/1.7})}return{group:o,mats:s,fx:c,seeds:u,dynamic:h}}const Hn={uTime:{value:0},uPx:{value:1080},uSunDir:{value:new D},uSunPos:{value:new D}},jx=()=>new Gt({transparent:!0,depthWrite:!1,blending:Ui,side:On,uniforms:{uColor:{value:new Oe},uPower:{value:1},uTime:Hn.uTime},vertexShader:`
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
    }`});function e_(i,e){const t=new pn,n=Ss(e*31+7),s=[],r=new D(0,1,0);for(const g of i.shafts){const m=Pn(...g.pos),v=Pn(...g.to).clone().sub(m),E=g.len||v.length();v.normalize();const b=new on(g.r1,g.r0,1,28,6,!0);b.translate(0,.5,0);const M=b.attributes.uv;for(let A=0;A<M.count;A++)M.setY(A,1-M.getY(A));const y=jx();y.uniforms.uColor.value.set(g.color),y.uniforms.uPower.value=g.power;const C=new Et(b,y);C.position.copy(m),C.quaternion.setFromUnitVectors(r,v),C.scale.set(1,E,1),t.add(C),s.push({def:g,mat:y})}const a=[],o=[],c=[],u=[],h=(g,m,_,v,E,b,M,y,C)=>{a.push(g.x,g.y,g.z),o.push(m.x,m.y,m.z),c.push(_,v,E,b),u.push(M.r*y,M.g*y,M.b*y,C)},l=new Oe,d=new D,f=new gn;for(const g of i.dust){const[m,_,v,E,b,M]=g.box;l.set(g.color);for(let y=0;y<g.n;y++){const C=[m+n()*(E-m),_+n()*(b-_),v+n()*(M-v)],A=Pn(...C);os(C[2],f),d.set((n()-.5)*.05,(n()-.5)*.03,(n()-.5)*.05).applyQuaternion(f),h(A,d,n(),14+n()*16,.003+n()*n()*.009,0,l,g.power*(.3+n()*.7),g.sun?3:0)}}for(const g of i.steam){l.set(g.color);const m=Pn(...g.pos);os(g.pos[2],f);for(let _=0;_<g.n;_++)d.set(g.dir[0]+(n()-.5)*.5,g.dir[1]+(n()-.5)*.3,g.dir[2]+(n()-.5)*.5).multiplyScalar(g.len/3.2).applyQuaternion(f),h(m,d,_/g.n+n()*.02,3.2,g.size*.12,g.size*(.8+n()*.5),l,g.power,1)}for(const g of i.sparks){l.set(16767392);const m=Pn(...g.pos);os(g.pos[2],f);for(let _=0;_<g.n;_++)d.set(g.dir[0]+(n()-.5)*1.6,g.dir[1]+n()*1.4,g.dir[2]+(n()-.5)*1.6).multiplyScalar(1.4+n()*1.6).applyQuaternion(f),h(m,d,n()*.06,g.period,.016+n()*.016,0,l,14,2)}const p=new Ct;p.setAttribute("position",new Ze(a,3)),p.setAttribute("aVel",new Ze(o,3)),p.setAttribute("aPar",new Ze(c,4)),p.setAttribute("aCol",new Ze(u,4));const S=new Gt({transparent:!0,depthWrite:!1,blending:Ui,uniforms:{uTime:Hn.uTime,uPx:Hn.uPx,uMap:{value:wx()},uSunPos:Hn.uSunPos,uSunDir:Hn.uSunDir,uDown:{value:new D(0,-1,0)}},vertexShader:`
      attribute vec3 aVel; attribute vec4 aPar; attribute vec4 aCol;
      uniform float uTime; uniform float uPx; uniform vec3 uSunPos; uniform vec3 uSunDir;
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
            float sx = (p.x - (${(xe.x-.2).toFixed(2)})) / uSunDir.x;
            vec3 hp = p - uSunDir * sx;
            float fz = atan(hp.z, 42.0 - hp.y) * 42.0, fy = 42.0 - length(vec2(hp.z, 42.0 - hp.y));
            float inw = smoothstep(${xe.z0.toFixed(1)}, ${(xe.z0+.12).toFixed(2)}, fz) * (1.0 - smoothstep(${(xe.z1-.12).toFixed(2)}, ${xe.z1.toFixed(1)}, fz))
              * smoothstep(${xe.y0.toFixed(1)}, ${(xe.y0+.08).toFixed(2)}, fy) * (1.0 - smoothstep(${(xe.y1-.08).toFixed(2)}, ${xe.y1.toFixed(1)}, fy));
            float pane = abs(fract((fz - (${xe.z0.toFixed(1)})) / ${((xe.z1-xe.z0)/3).toFixed(4)}) - 0.5);
            inw *= 1.0 - smoothstep(0.455, 0.47, pane) * step(0.2, abs(fz - ${xe.z0.toFixed(1)})) ;
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
        a *= smoothstep(0.25, 1.2, -mv.z);
        vCol = vec4(aCol.rgb * a, 1.0);
      }`,fragmentShader:`
      uniform sampler2D uMap; varying vec4 vCol;
      void main() { gl_FragColor = vec4(vCol.rgb * texture2D(uMap, gl_PointCoord).a, 1.0); }`}),x=new wu(p,S);return x.frustumCulled=!1,t.add(x),{group:t,shafts:s,points:x}}function t_(i){const e=Ss(i*101+3),t=new pn,n=[],s=[];for(let x=0;x<2600;x++){const g=e()*2-1,m=e()*Math.PI*2,_=Math.sqrt(1-g*g);n.push(_*Math.cos(m)*1e3,g*1e3,_*Math.sin(m)*1e3);const v=Math.pow(e(),4)*2.2+.12,E=e();s.push(v*(.8+.2*E),v*.9,v*(1-.25*E),1+e()*1.8)}const r=new Ct;r.setAttribute("position",new Ze(n,3)),r.setAttribute("aCol",new Ze(s,4));const a=new wu(r,new Gt({depthWrite:!1,blending:Ui,transparent:!0,uniforms:{uPx:Hn.uPx},vertexShader:`attribute vec4 aCol; varying vec3 vC; uniform float uPx;
      void main() { vC = aCol.rgb; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = aCol.a * uPx / 1080.0; }`,fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; gl_FragColor = vec4(vC * smoothstep(0.5, 0.1, length(d)), 1.0); }"}));a.frustumCulled=!1,t.add(a);const o=new D(-13-1.4,5.2-.15,4.2+1.6).normalize(),c=new Et(new xi(2.6,20,14),new _s({color:new Oe(60,54,44),toneMapped:!1,fog:!1}));c.position.copy(o).multiplyScalar(900),t.add(c);const u=th(new dl(1,48)),h=u.attributes.position,l=new D,d=(x,g,m)=>{const _=Math.sin(x*127.1+g*311.7+m*74.7)*43758.5453;return _-Math.floor(_)},f=(x,g,m)=>{const _=Math.floor(x),v=Math.floor(g),E=Math.floor(m),b=x-_,M=g-v,y=m-E,C=P=>P*P*(3-2*P),A=C(b),L=C(M),I=C(y),N=(P,z,k)=>P+(z-P)*k;return N(N(N(d(_,v,E),d(_+1,v,E),A),N(d(_,v+1,E),d(_+1,v+1,E),A),L),N(N(d(_,v,E+1),d(_+1,v,E+1),A),N(d(_,v+1,E+1),d(_+1,v+1,E+1),A),L),I)},p=Array.from({length:26},()=>{const x=e()*2-1,g=e()*6.283,m=Math.sqrt(1-x*x);return[m*Math.cos(g),x,m*Math.sin(g),.08+e()*e()*.3]});for(let x=0;x<h.count;x++){l.fromBufferAttribute(h,x).normalize();let g=1+(f(l.x*1.3+5,l.y*1.3,l.z*1.3)-.5)*.55+(f(l.x*3.1,l.y*3.1+2,l.z*3.1)-.5)*.22+(f(l.x*8,l.y*8,l.z*8+1)-.5)*.07+(f(l.x*21,l.y*21,l.z*21)-.5)*.025;for(const m of p){const _=Math.hypot(l.x-m[0],l.y-m[1],l.z-m[2])/m[3];_<1.3&&(g+=(_<1?-(1-_*_)*.35:(1.3-_)/.3*.06*(_-1)/.3*4)*m[3])}l.multiplyScalar(g),h.setXYZ(x,l.x*1.25,l.y*.85,l.z)}u.computeVertexNormals();const S=new Et(u,new Gt({uniforms:{uSun:{value:o}},vertexShader:"varying vec3 vN; varying vec3 vP; void main() { vN = normalize(mat3(modelMatrix) * normal); vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));return S.scale.setScalar(100),S.position.set(-235,-52,-62),S.rotation.set(.4,1.1,.2),t.add(S),{sky:t,sunDir:o,asteroid:S}}function n_(i){const e=xe.z1-xe.z0,t=xe.y1-xe.y0,n=new vs(e,t,8,1),s=new Gt({transparent:!0,depthWrite:!1,blending:Kc,blendSrc:Qc,blendDst:Qo,uniforms:{tRefl:{value:i.texture},uTexM:{value:new ht},uGain:{value:.34}},vertexShader:`
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
        // стеклопакет двойной: второе отражение чуть смещено и слабее
        vec3 refl = texture2DProj(tRefl, vR).rgb + 0.35 * texture2DProj(tRefl, vR + vec4(0.006, 0.004, 0.0, 0.0) * vR.w).rgb;
        float fres = 0.5 + 0.5 * pow(clamp(1.0 - abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), 3.0);
        // грязь и царапины: видны в отражённом свете
        float dirt = n(vUv * vec2(60.0, 18.0)) * n(vUv * vec2(9.0, 3.0));
        float scr = smoothstep(0.985, 1.0, n(vec2(vUv.x * 400.0 + vUv.y * 90.0, vUv.y * 6.0)));
        float haze = 0.006 + 0.016 * dirt + 0.05 * scr;
        vec3 c = refl * uGain * fres + vec3(0.55, 0.62, 0.7) * haze;
        gl_FragColor = vec4(c, haze * 1.6);
      }`}),r=new Et(n,s),a=(xe.z0+xe.z1)/2,o=Pn(xe.x-.28,(xe.y0+xe.y1)/2,a);return r.position.copy(o),os(a,r.quaternion).multiply(new gn().setFromAxisAngle(new D(0,1,0),Math.PI/2)),r.updateMatrixWorld(),{mesh:r,mat:s,center:o,normal:new D(1,0,0)}}function i_(i){const e=[],t=[],n=[],s=[],r=xe.z0-3.6,a=xe.z1+.2,o=.15;let c=0;for(let p=r;p<=a;p+=o){const S=[[xe.x-.2,0,p],[2,0,p],[2,2.7,p],[xe.x-.2,2.7,p]],x=p/42;for(const g of S){const m=Pn(...g);e.push(m.x,m.y,m.z),t.push(...g),s.push(0,Math.sin(x),Math.cos(x))}n.push(c,c+1,c+2,c,c+2,c+3),c+=4}const u=new Ct;u.setAttribute("position",new Ze(e,3)),u.setAttribute("normal",new Ze(s,3)),u.setAttribute("aFlat",new Ze(t,3)),u.setIndex(n);const h=new D(i.to[0]-i.pos[0],i.to[1]-i.pos[1],i.to[2]-i.pos[2]).normalize(),l=((xe.z1-xe.z0)/3).toFixed(4),d=new Gt({transparent:!0,depthWrite:!1,blending:Ui,side:On,uniforms:{uTime:Hn.uTime,uDir:{value:h},uColor:{value:new Oe(16773336)},uPower:{value:.016}},vertexShader:`attribute vec3 aFlat; varying vec3 vF; varying float vD; varying float vFace;
      void main() { vF = aFlat; vec4 mv = modelViewMatrix * vec4(position, 1.0); vD = -mv.z;
        vFace = abs(dot(normalize(normalMatrix * normal), normalize(mv.xyz))); gl_Position = projectionMatrix * mv; }`,fragmentShader:`
      uniform float uTime; uniform vec3 uDir; uniform vec3 uColor; uniform float uPower; varying vec3 vF; varying float vD; varying float vFace;
      float h3(vec3 p) { return fract(sin(dot(p, vec3(12.99, 78.23, 37.72))) * 43758.5453); }
      float n3(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }
      void main() {
        float s = (vF.x - (${(xe.x-.2).toFixed(2)})) / uDir.x;
        vec3 hp = vF - uDir * s;
        float inw = smoothstep(${xe.z0.toFixed(1)}, ${(xe.z0+.1).toFixed(2)}, hp.z) * (1.0 - smoothstep(${(xe.z1-.1).toFixed(2)}, ${xe.z1.toFixed(1)}, hp.z))
          * smoothstep(${xe.y0.toFixed(1)}, ${(xe.y0+.07).toFixed(2)}, hp.y) * (1.0 - smoothstep(${(xe.y1-.07).toFixed(2)}, ${xe.y1.toFixed(1)}, hp.y));
        float pane = abs(fract((hp.z - (${xe.z0.toFixed(1)})) / ${l}) - 0.5);
        inw *= 1.0 - smoothstep(0.47, 0.485, pane);
        float n = 0.55 + 0.9 * n3(vF * vec3(1.6, 2.2, 1.6) + vec3(uTime * 0.02, -uTime * 0.03, 0.0));
        float a = inw * n * smoothstep(0.3, 1.6, vD) * (1.0 - 0.12 * s) * smoothstep(0.45, 0.85, vFace);
        gl_FragColor = vec4(uColor * uPower * a, 1.0);
      }`}),f=new Et(u,d);return f.frustumCulled=!1,f}const pt=D,ys=ht,$t=i=>new Oe(i),kt=(i,e,t)=>$t(i).lerp($t(e),t),yn=(i,e,t)=>Math.min(t,Math.max(e,i)),Os=(i,e,t)=>{const n=yn((t-i)/(e-i),0,1);return n*n*(3-2*n)},j={suit:kt(16777215,Ke.turquoise,.07).multiplyScalar(.84),suitDim:kt(16777215,Ke.cardBg,.38),rubber:$t(Ke.cardBg).multiplyScalar(.5),teal:$t(Ke.turquoise),tealDeep:kt(Ke.turquoise,Ke.lotusTeal,.55),gold:$t(Ke.gold),goldLight:$t(Ke.goldLight),bronze:kt(Ke.gold,Ke.cardBg,.62).lerp(kt(Ke.cardBg,16777215,.3),.3),steel:kt(Ke.cardBg,16777215,.3),glowTeal:kt(Ke.turquoise,Ke.lotusTeal,.38),skin:$t(Ke.skin),skinWarm:kt(Ke.skin,Ke.neonViolet,.1),nose:kt(Ke.skin,Ke.neonViolet,.42),lilac:kt(Ke.skin,Ke.neonViolet2,.36),liner:kt(Ke.deepViolet,Ke.cardBg,.4),tooth:kt(Ke.skin,16777215,.8),crimson:$t(Ke.neonViolet).offsetHSL(.115,.05,-.2),white:$t(16777215),black:$t(0)},kn={teal:0,eyeGreen:1,eyeBlue:2,gem:3,crimson:4,white:6,black:7};function _e(i=0,e=0,t=0,n=0,s=0,r=0,a=1,o,c){return o=o??a,c=c??a,new ys().compose(new pt(i,e,t),new gn().setFromEuler(new Dn(n,s,r)),new pt(a,o,c))}function is(i,e,t){const n=new ys().lookAt(new pt(0,0,0),e,t);return n.setPosition(i),n}function Ri(i,e,t=new pt(0,1,0)){return is(i,e.clone().negate(),t)}function ih(i){i.deleteAttribute("uv"),i.deleteAttribute("normal");const e=th(i,1e-5);return e.computeVertexNormals(),e}function Mt(i,e,t,n,s=20,r=14){const a=new xi(1,s,r),o=a.attributes.position,c=new pt;for(let u=0;u<o.count;u++)c.fromBufferAttribute(o,u),n&&n(c),o.setXYZ(u,c.x*i,c.y*e,c.z*t);return ih(a)}function bn(i,e=24,t=!0,n=!0){const s=[],r=[],a=i.length;for(const[c,u,h=u,l=0,d=0,f=2]of i){const p=2/f;for(let S=0;S<e;S++){const x=S/e*Math.PI*2,g=Math.cos(x),m=Math.sin(x);s.push(l+u*Math.sign(g)*Math.abs(g)**p,c,d+h*Math.sign(m)*Math.abs(m)**p)}}for(let c=0;c<a-1;c++)for(let u=0;u<e;u++){const h=c*e+u,l=(c+1)*e+u,d=c*e+(u+1)%e,f=(c+1)*e+(u+1)%e;r.push(h,l,d,l,f,d)}if(t){const c=i[0],u=s.length/3;s.push(c[3]||0,c[0],c[4]||0);for(let h=0;h<e;h++)r.push(u,h,(h+1)%e)}if(n){const c=i[a-1],u=s.length/3,h=(a-1)*e;s.push(c[3]||0,c[0],c[4]||0);for(let l=0;l<e;l++)r.push(u,h+(l+1)%e,h+l)}const o=new Ct;return o.setAttribute("position",new Ze(s,3)),o.setIndex(r),o.computeVertexNormals(),o}const Zt=(i,e=24,t=!1,n=!1)=>bn(i.map(([s,r])=>[s,r,r]),e,t,n);function an(i,e,t,n,s=1,r=!1,a=.5){const o=new da(i.map(p=>p.isVector3?p:new pt(p[0],p[1],p[2])),r,"centripetal"),c=o.computeFrenetFrames(e,r),u=[],h=[],l=[],d=new pt;for(let p=0;p<=e;p++){const S=p/e,x=c.normals[p],g=c.binormals[p],m=Math.max(1e-5,n(S));o.getPointAt(S,d);for(let _=0;_<t;_++){const v=_/t*Math.PI*2,E=Math.cos(v)*m,b=Math.sin(v)*m*s;u.push(d.x+x.x*E+g.x*b,d.y+x.y*E+g.y*b,d.z+x.z*E+g.z*b),h.push(S,a)}}for(let p=0;p<e;p++)for(let S=0;S<t;S++){const x=p*t+S,g=(p+1)*t+S,m=p*t+(S+1)%t,_=(p+1)*t+(S+1)%t;l.push(x,m,g,g,m,_)}const f=new Ct;return f.setAttribute("position",new Ze(u,3)),f.setAttribute("uv",new Ze(h,2)),f.setIndex(l),f.computeVertexNormals(),f}const Xc=(i,e=.8)=>t=>i*(t<e?1:Math.sqrt(Math.max(.01,1-((t-e)/(1-e))**2)));function Cn(i,e,t,n,s){n=n??Math.min(i,e)*.22,s=s??Math.min(i,e,t)*.18;const r=i/2-s,a=e/2-s,o=Math.min(n,r*.99,a*.99),c=new fs;c.moveTo(-r+o,-a),c.lineTo(r-o,-a),c.quadraticCurveTo(r,-a,r,-a+o),c.lineTo(r,a-o),c.quadraticCurveTo(r,a,r-o,a),c.lineTo(-r+o,a),c.quadraticCurveTo(-r,a,-r,a-o),c.lineTo(-r,-a+o),c.quadraticCurveTo(-r,-a,-r+o,-a);const u=Math.max(1e-4,t-2*s),h=new ir(c,{depth:u,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:4,steps:1});return h.translate(0,0,-u/2),h}function Yo(i,e,t,n=8){const s=new ir(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:n,steps:1});return s.translate(0,0,-e/2),s}function Zn(i,e,t=8,n=32,s=Math.PI*2){return new pa(i,e,t,n,s)}function Zo(i,e,t){const n=i.index?i.toNonIndexed():i.clone();n.attributes.normal||n.computeVertexNormals();const s=n.attributes.position,r=s.count,a=new Float32Array(r*2),o=new Float32Array(r*3);if(t!=null)for(let h=0;h<r;h++)a[2*h]=(t+.5)/8,a[2*h+1]=.5;else n.attributes.uv&&a.set(n.attributes.uv.array.subarray(0,r*2));const c=new Oe,u=new pt;for(let h=0;h<r;h++)typeof e=="function"?(u.fromBufferAttribute(s,h),c.copy(e(u))):c.copy(e||j.white),o[3*h]=c.r,o[3*h+1]=c.g,o[3*h+2]=c.b;for(const h of Object.keys(n.attributes))h!=="position"&&h!=="normal"&&n.deleteAttribute(h);return n.setAttribute("uv",new cn(a,2)),n.setAttribute("color",new cn(o,3)),n.clearGroups(),n}function sh(i){for(const e of Object.values(i.attributes)){const t=e.itemSize,n=e.array;for(let s=0;s<e.count;s+=3)for(let r=0;r<t;r++){const a=n[(s+1)*t+r];n[(s+1)*t+r]=n[(s+2)*t+r],n[(s+2)*t+r]=a}}}class Sl{constructor(){this.b={},this.stack=[new ys]}get M(){return this.stack[this.stack.length-1]}push(e){this.stack.push(this.M.clone().multiply(e))}pop(){this.stack.pop()}add(e,t,n,s,r){const a=Zo(t,n,r),o=s?this.M.clone().multiply(s):this.M;a.applyMatrix4(o),o.determinant()<0&&sh(a),(this.b[e]||=[]).push(a)}glow(e,t,n){this.add("glow",e,j.white,n,t)}build(e,t,n){const s={};for(const[r,a]of Object.entries(this.b)){const o=new Et(rr(a,!1),t[r]);o.name=`${n}:${r}`,o.frustumCulled=!1,e.add(o),s[r]=o}return s}}function qc(i,e){const t=i.length,n=new Uint8Array(t*4),s=new Oe;i.forEach((a,o)=>{s.copy(a).multiplyScalar(e?e[o]:1).convertLinearToSRGB(),n[4*o]=yn(s.r,0,1)*255,n[4*o+1]=yn(s.g,0,1)*255,n[4*o+2]=yn(s.b,0,1)*255,n[4*o+3]=255});const r=new ua(n,t,1,Ln);return r.colorSpace=rn,r.magFilter=r.minFilter=Jt,r.generateMipmaps=!1,r.needsUpdate=!0,r}const Ws=16;function rh(i,e){const t=kt(Ke.flame,Ke.goldLight,.5).lerp($t(16777215),.3),n=$t(Ke.flame),s=$t(Ke.flame).multiply(new Oe(1,.5,.22)),r=kt(Ke.neonViolet2,16777215,.6),a=$t(Ke.neonViolet),o=kt(Ke.neonViolet2,Ke.deepViolet,.35),c=new Oe,u=new Oe;for(let h=0;h<2;h++)for(let l=0;l<Ws;l++){const d=l/(Ws-1),f=yn(d*(h?1.25:1),0,1);f<.45?(c.copy(t).lerp(n,f/.45),u.copy(r).lerp(a,f/.45)):(c.copy(n).lerp(s,(f-.45)/.55),u.copy(a).lerp(o,(f-.45)/.55)),c.lerp(u,e*.8).convertLinearToSRGB();const p=(h*Ws+l)*4;i[p]=yn(c.r,0,1)*255,i[p+1]=yn(c.g,0,1)*255,i[p+2]=yn(c.b,0,1)*255,i[p+3]=255}}function s_(){const i=tr,e=[j.glowTeal,$t(Ke.eyeGreen),$t(Ke.eyeBlue),$t(Ke.gem),j.crimson,j.goldLight,j.white,j.black],t=qc(e),n=qc(e,[1,.75,.75,1,.45,.5,.9,0]),s=new Uint8Array(Ws*2*4);rh(s,0);const r=new ua(s,Ws,2,Ln);return r.colorSpace=rn,r.magFilter=r.minFilter=dn,r.wrapS=r.wrapT=qn,r.generateMipmaps=!1,r.needsUpdate=!0,{suit:new i({name:"harma-suit",vertexColors:!0,roughness:.62,metalness:0}),metal:new i({name:"harma-metal",vertexColors:!0,roughness:.36,metalness:.62}),skin:new i({name:"harma-skin",vertexColors:!0,roughness:.58,metalness:0,emissive:j.skin.clone(),emissiveIntensity:.15}),glow:new i({name:"harma-glow",map:t,emissiveMap:n,emissive:16777215,emissiveIntensity:1.1,roughness:.3,metalness:0}),flame:new i({name:"harma-flame",color:0,map:r,emissiveMap:r,emissive:16777215,emissiveIntensity:1.05,roughness:1,metalness:0}),feather:new i({name:"harma-feather",color:j.goldLight.clone(),emissive:j.goldLight.clone(),emissiveIntensity:.32,roughness:.32,metalness:.45}),lens:new i({name:"harma-lens",color:1054748,emissive:j.teal.clone(),emissiveIntensity:1.6,roughness:.12,metalness:0}),heat:new i({name:"harma-heat",color:1054748,emissive:j.teal.clone(),emissiveIntensity:.5,roughness:.4,metalness:0}),glass:new i({name:"harma-glass",color:kt(16777215,Ke.turquoise,.35),transparent:!0,opacity:.16,roughness:.06,metalness:0,depthWrite:!1})}}function Yc(i,e,t,n=1){i.add("suit",Mt(.037,.033,.036,null,14,10),j.suit,_e(0,0,.002)),i.add("suit",Mt(.041,.026,.048,u=>{u.y<0&&(u.y*=.82),u.z*=1-.13*u.x*u.x}),j.suit,_e(0,0,-.047)),i.add("suit",Mt(.027,.008,.03,u=>{u.z*=1-.25*u.x*u.x}),j.teal,_e(0,.0215,-.047)),i.add("metal",Mt(.0075,.0045,.0075,null,12,8),j.gold,_e(0,.0285,-.047)),i.add("suit",Zn(.0285,.0016,6,28),j.suitDim,_e(0,.0225,-.047,Math.PI/2,0,0,1,1.06,1)),i.add("suit",Mt(.024,.007,.021,u=>{u.z*=1-.35*u.x*u.x},14,10),j.nose,_e(0,-.0205,-.05));const s=[-.0288,-.0098,.0098,.0288],r=[.9,1.05,1.05,.9];s.forEach((u,h)=>{const l=r[h],d=[.12+t*.6,.2+t*1.4,.26+t*2.15],f=[.024*l,.021*l,.017*l];let p=u,S=-.002,x=-.079+Math.abs(u)*.25;const g=[[u*.9,0,x+.03],[p,S,x]];for(let _=0;_<3;_++)S-=Math.sin(d[_])*f[_],x-=Math.cos(d[_])*f[_],p+=u*.1*n,g.push([p,S,x]);i.add("suit",an(g,14,10,_=>Xc(.0138,.82)(_)*(1-.1*_)),j.suit);const m=d[2];i.add("suit",Mt(.0092,.0058,.0108,null,12,8),j.nose,_e(p,S+Math.sin(m)*f[2]*.42-Math.cos(m)*.0088,x+Math.cos(m)*f[2]*.42+Math.sin(m)*.0088,-m,0,0)),i.add("suit",Zn(.0132,.0022,6,14),j.teal,_e(u,-.003-Math.sin(d[0])*.005,-.083+Math.abs(u)*.25,-.66*.5,0,0))});const a=-e,o=t,c=[[a*.018,-.004,-.028],[a*.038,-.006,-.04],[a*(.05-o*.004),-.012-o*.008,-.056],[a*(.052-o*.016),-.02-o*.016,-.07]];i.add("suit",an(c,12,10,Xc(.0128,.8)),j.suit),i.add("suit",Mt(.0085,.0055,.0095,null,12,8),j.nose,_e(c[3][0]-a*.004*(1+o),c[3][1]-.0068,c[3][2]+.005,.5,0,a*.5*o))}function Zc(i,e=.34){i.push(_e(0,0,0,Math.PI/2,0,0)),i.add("metal",Zt([[.002,.036],[.004,.0435],[.0075,.0462],[.012,.0462],[.0155,.0425],[.031,.0425],[.0345,.0462],[.039,.0462],[.0425,.0435],[.0445,.039]],32,!0,!1),j.gold);for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.add("metal",Mt(.0042,.0042,.0026,null,8,6),n%3===0?j.goldLight:j.bronze,_e(Math.cos(s)*.0428,.0232,Math.sin(s)*.0428,0,-s+Math.PI/2,0))}i.add("suit",Zt([[.0435,.04],[.0455,.0445],[.052,.0445],[.054,.04]],32),j.teal);const t=[[.053,.039]];for(let n=0;n<4;n++){const s=.058+n*.013;t.push([s,.0405],[s+.0045,.0452],[s+.009,.0452],[s+.0125,.041])}t.push([.118,.044],[.17,.051],[.25,.054],[e-.02,.052],[e,.044]),i.add("suit",Zt(t,32,!1,!0),j.suit),i.add("suit",Zt([[.213,.0525],[.215,.0562],[.228,.0568],[.23,.053]],32),j.teal),i.add("metal",Zt([[.2305,.053],[.232,.0575],[.237,.0578],[.2385,.0535]],32),j.gold),i.pop(),i.add("suit",Mt(.016,.005,.036,n=>{n.x*=1-.3*n.z*n.z},14,10),j.teal,_e(0,.0475,.158,.085,0,0)),i.add("suit",Zn(.0175,.0014,6,24),j.suitDim,_e(0,.0478,.158,Math.PI/2+.085,0,0,1,2.1,1))}const ah=.196,Rn=new pt(0,-.188,.04),Jr=new pt(-.047,.04,-.018),Ci=new pt(-.86,-.14,-.49).normalize(),r_=new ys().makeBasis(new pt(0,1,0),new pt(0,0,1),new pt(1,0,0));function a_(i){i.add("metal",bn([[-.122,.024,.03,0,0,3.2],[-.112,.041,.047,0,0,3.6],[-.1,.047,.053,0,0,4],[-.03,.05,.056,0,0,4.2],[.03,.05,.054,0,0,4.2],[.058,.044,.047,0,0,3.6],[.074,.038,.04,0,0,3],[.086,.034,.035,0,0,2.4]],36),j.bronze);for(const c of[-.088,.036]){const l=c<0?.0555:.0552;i.add("metal",bn([[c-.007,.0512-.003,l-.003,0,0,4.1],[c-.005,.0512+.0012,l+.0012,0,0,4.1],[c+.005,.0512+.0012,l+.0012,0,0,4.1],[c+.007,.0512-.003,l-.003,0,0,4.1]],36,!1,!1),j.steel)}i.add("suit",Cn(.07,.098,.012,.014,.003),j.suit,_e(0,-.026,.0575));for(const c of[-1,1]){i.add("suit",Cn(.062,.092,.011,.014,.003),j.suit,_e(c*.0505,-.026,-.002,0,Math.PI/2,0)),i.add("suit",Cn(.02,.06,.004,.006,.0012),j.teal,_e(c*.0562,-.026,-.012,0,Math.PI/2,0));for(const[u,h]of[[-.064,.021],[.012,.021],[-.064,-.025],[.012,-.025]])i.add("metal",new on(.0034,.0034,.004,10),j.steel,_e(c*.0565,u,h,0,0,Math.PI/2))}for(const[c,u]of[[-.027,-.066],[.027,-.066],[-.027,.014],[.027,.014]])i.add("metal",new on(.0034,.0034,.004,10),j.steel,_e(c,u,.0638,Math.PI/2,0,0));for(let c=0;c<3;c++)i.glow(Mt(.0042,.0042,.0022,null,10,6),kn.teal,_e(.018,-.052+c*.013,.0642));i.add("suit",Cn(.026,.05,.005,.005,.0012),j.rubber,_e(-.012,-.034,.0638));for(let c=0;c<3;c++)i.add("heat",Cn(.016,.0095,.003,.003,8e-4),j.white,_e(-.012,-.048+c*.014,.0662));i.add("metal",new as(1),j.gold,_e(.018,.004,.0635,0,0,0,.0075,.011,.002)),i.add("metal",Zt([[-.14,.014],[-.139,.02],[-.128,.022],[-.126,.03],[-.12,.031]],24,!0,!1),j.steel),i.add("metal",Zn(.0262,.0024,8,28),j.gold,_e(0,-.1235,0,Math.PI/2,0,0)),i.add("metal",Cn(.006,.03,.006,.002,.0012),j.gold,_e(0,-.141,0,Math.PI/2,0,.6)),i.add("metal",Zt([[.082,.03],[.09,.0262],[.158,.0262],[.164,.034]],24),j.steel);const e=[];for(let c=0;c<=66;c++){const u=c/66,h=u*Math.PI*2*5.5;e.push([Math.cos(h)*.0318,.094+u*.062,Math.sin(h)*.0318])}i.glow(an(e,200,7,()=>.0043),kn.teal);for(let c=0;c<3;c++)i.push(_e(0,0,0,0,c*Math.PI*2/3+Math.PI/3,0)),i.add("metal",Cn(.007,.082,.005,.002,.0012),j.steel,_e(0,.124,.0395)),i.pop();i.add("metal",Zt([[.16,.036],[.164,.0455],[.169,.0478],[.186,.0478],[.194,.0445],[.199,.039],[.199,.0312],[.19,.027]],36),j.steel),i.add("metal",Zn(.0484,.0026,8,36),j.gold,_e(0,.1775,0,Math.PI/2,0,0)),i.add("lens",Mt(.0285,.011,.0285,null,20,10),j.white,_e(0,ah-.006,0)),i.glow(Zn(.0285,.0016,6,32),kn.teal,_e(0,.1925,0,Math.PI/2,0,0));const t=new fs;t.moveTo(-.006,.01),t.bezierCurveTo(.02,.034,.058,.036,.082,.014),t.quadraticCurveTo(.098,0,.108,-.022),t.quadraticCurveTo(.09,-.01,.072,-.004),t.bezierCurveTo(.052,.006,.03,.004,.014,-.008),t.lineTo(-.006,-.01),t.closePath();const n=Yo(t,.014,.0045,10),s=new fs;s.moveTo(.012,.012),s.bezierCurveTo(.03,.026,.05,.027,.07,.014),s.lineTo(.064,.008),s.bezierCurveTo(.05,.016,.03,.015,.016,.005),s.closePath();const r=Yo(s,.0235,.001,8);for(let c=0;c<3;c++)i.push(_e(0,0,0,0,c*Math.PI*2/3,0).multiply(_e(0,.168,.05)).multiply(r_)),i.add("metal",n,j.steel),i.add("suit",r,j.suit),i.add("metal",new on(.0105,.0105,.031,14),j.bronze,_e(0,0,0,Math.PI/2,0,0)),i.add("metal",new on(.0045,.0045,.034,10),j.gold,_e(0,0,0,Math.PI/2,0,0)),i.glow(Mt(.007,.0035,.0055,null,10,6),kn.teal,_e(.088,-.0095,0,0,0,-.75)),i.pop();const a=[[-.056,.012],[-.052,.0165]];for(let c=0;c<9;c++){const u=-.047+c*.0105;a.push([u,.0148],[u+.003,.0162],[u+.0072,.0162])}a.push([.052,.0165],[.056,.012]),i.add("suit",Zt(a,18,!0,!0),j.rubber,_e(Rn.x,Rn.y,Rn.z,0,0,Math.PI/2));for(const c of[-1,1])i.add("metal",an([[c*.04,-.112,.022],[c*.058,-.14,.03],[c*.063,Rn.y+.004,Rn.z-.002],[c*.061,Rn.y-.004,Rn.z+.002]],18,8,()=>.0078),j.steel),i.add("metal",Mt(.0125,.0125,.0125,null,12,8),j.gold,_e(c*.061,Rn.y,Rn.z));i.push(new ys().makeRotationFromQuaternion(new gn().setFromUnitVectors(new pt(0,1,0),Ci)).setPosition(Jr)),i.add("metal",Zt([[-.006,.02],[0,.0225],[.01,.0225],[.016,.0165]],18,!0,!1),j.steel);const o=[[.014,.0145]];for(let c=0;c<9;c++){const u=.02+c*.0105;o.push([u,.0148],[u+.003,.0162],[u+.0072,.0162])}o.push([.116,.0158]),i.add("suit",Zt(o,18,!1,!1),j.rubber),i.add("metal",Zt([[.114,.0165],[.118,.0195],[.124,.0195],[.129,.012]],18,!1,!0),j.gold),i.pop(),i.add("suit",Mt(.03,.05,.006,null,14,8),j.teal,_e(0,-.02,-.057)),i.add("metal",new ha(.0125,.058,6,14),j.steel,_e(.0625,-.03,.03)),i.add("metal",Zt([[-.012,.0138],[-.008,.0138]],14),j.gold,_e(.0625,-.03,.03)),i.add("metal",Cn(.008,.026,.006,.002,.0012),j.gold,_e(-.058,.03,.02,.5,Math.PI/2,0)),i.add("metal",new on(.0065,.0065,.006,12),j.bronze,_e(-.057,.036,.016,0,0,Math.PI/2)),i.add("metal",Zt([[-.012,.0085],[-.01,.0105],[0,.0105],[.002,.0085]],14),j.steel,_e(.03,-.118,-.03,.5,0,0))}function o_(i){const e=new pn;e.name="harma-fpRig";const t=new pn;t.name="harma-fp-sway",e.add(t);const n=new Sl,s=1.2,r=_e(.17,-.17,-.58,.06,.09,-.05,s).multiply(_e(0,0,0,-Math.PI/2,0,0)),a=(N,P,z)=>new pt(N,P,z).applyMatrix4(r),o=(N,P,z)=>new pt(N,P,z).transformDirection(r);n.push(r),a_(n),n.pop();const c=o(0,1,0),u=o(0,0,1),h=.021+.0162*s*.82,l=u.clone().multiplyScalar(.8).addScaledVector(c,-.6).normalize(),d=c.clone().multiplyScalar(.8).addScaledVector(u,.6).normalize(),f=a(Rn.x+.004,Rn.y,Rn.z).addScaledVector(d,-.07).addScaledVector(l,h);n.push(is(f,d,l)),Yc(n,1,.9,.25),n.pop();const p=d.clone().add(new pt(-.3,.02,.1)).normalize(),S=is(f,p,l);n.push(S),Zc(n),n.pop();const x=o(Ci.x,Ci.y,Ci.z),g=a(Jr.x+Ci.x*.068,Jr.y+Ci.y*.068,Jr.z+Ci.z*.068),m=c.clone().addScaledVector(x,-c.dot(x)).normalize(),_=m.clone().cross(x).normalize();_.y>0&&_.negate();const v=g.clone().addScaledVector(m,-.07).addScaledVector(_,h);n.push(is(v,m,_)),Yc(n,-1,.9,.25),n.pop();const E=m.clone().add(new pt(.42,.4,.12)).normalize();n.push(is(v,E,_)),Zc(n),n.pop();const b=new pt(.012,.05,.085).applyMatrix4(S),M=new pt(0,1,.2).transformDirection(S),y=a(.03,-.122,-.032),C=o(.2,-1,-.6),A=[y,y.clone().addScaledVector(C,.035),y.clone().lerp(b,.5).add(new pt(.05,-.06,.02)),b.clone().addScaledVector(M,.035),b];n.add("suit",an(A,110,8,N=>.0066+.0012*Math.sin(N*150)),j.rubber),n.add("metal",Zt([[-.004,.0085],[-.002,.0112],[.008,.0112],[.01,.0085]],14,!0,!0),j.steel,Ri(b,M).multiply(_e(0,0,0,Math.PI/2,0,0)));const L=n.build(t,i,"fp"),I=new Ht;return I.name="harma-muzzle",I.applyMatrix4(is(a(0,ah+.006,0),o(0,1,0),o(0,0,1))),t.add(I),{fpRig:e,sway:t,muzzle:I,meshes:L}}function oh(i,e){let t=0;for(;t<i.length-2&&e>i[t+1][0];)t++;const n=i[t],s=i[t+1],r=yn((e-n[0])/(s[0]-n[0]),0,1),a=o=>(n[o]??0)+((s[o]??0)-(n[o]??0))*r;return{rx:a(1),rz:a(2),cx:a(3),cz:a(4),e:(n[5]??2)+((s[5]??2)-(n[5]??2))*r}}function Kr(i,e,t){const n=oh(i,t),s=yn((e-n.cx)/n.rx,-.985,.985);return new pt(e,t,n.cz-n.rz*(1-Math.abs(s)**n.e)**(1/n.e))}function Is(i,e,t){const s=Kr(i,e,t),r=Kr(i,e+.004,t).sub(s),a=Kr(i,e,t+.004).sub(s);return{p:s,n:a.cross(r).normalize()}}function l_(i){const e=i*.17,t=26,n=[],s=u=>e*Math.sin(Math.PI*u**.72)**.8*(1-.22*u)+.0012;for(let u=1;u<t;u++){const h=u/t,l=u%2;n.push([s(h)*(l?1:.8),-i*(.1+.9*h)+(l?0:i*.012)])}const r=new fs;r.moveTo(-.0022,0),r.lineTo(.0022,0),r.lineTo(.0026,-i*.1);for(const[u,h]of n)r.lineTo(u,h);r.lineTo(0,-i*1.02);for(const[u,h]of n.reverse())r.lineTo(-u*.94,h-i*.006);r.lineTo(-.0026,-i*.1),r.closePath();const a=new ir(r,{depth:.0012,bevelEnabled:!0,bevelThickness:.001,bevelSize:8e-4,bevelSegments:1,steps:1}),o=a.attributes.position;for(let u=0;u<o.count;u++){const h=o.getX(u),l=o.getY(u),d=-l/i;o.setZ(u,o.getZ(u)-.32*Math.abs(h)-.012*i/.16*Math.sin(Math.PI*d)*0+.0025)}a.computeVertexNormals();const c=an([[0,.004,.002],[0,-i*.3,.0034],[0,-i*.7,.0034],[0,-i*1,.0026]],14,6,u=>.0021*(1-.75*u)+4e-4);return rr([Zo(a),Zo(c)],!1)}function lh(i,e,t,n={}){i.add("suit",bn(e,44,!0,!0),j.suit);const s=e[e.length-1][0];for(const I of[-1,1]){const N=[];for(let z=0;z<=10;z++){const k=z/10,B=t.yBot-.005-k*(n.pipeLen??.26),se=I*((n.pipeX0??.05)+(n.pipeDx??.07)*Math.sin(k*Math.PI*.5)),{p:X,n:Q}=Is(e,se,B);N.push(X.addScaledVector(Q,.0015))}i.add("suit",an(N,30,8,()=>.0052),j.teal);const P=Is(e,I*(n.shX??.12),t.yBot-(n.shDy??.035));i.add("suit",Mt(.03,.022,.006,null,14,8),j.teal,Ri(P.p,P.n))}if(n.panel){const[I,N,P]=n.panel,z=Is(e,I,N),k=Ri(z.p,z.n).multiply(_e(0,0,0,0,0,0,P));i.add("metal",Cn(.078,.052,.012,.01,.003),j.gold,k.clone().multiply(_e(0,0,.002))),i.add("suit",Cn(.07,.044,.014,.008,.003),j.suitDim,k.clone().multiply(_e(0,0,.004))),i.add("suit",Cn(.03,.03,.004,.005,.001),j.tealDeep,k.clone().multiply(_e(-.015,0,.011)));for(let B=0;B<3;B++)i.glow(Mt(.0045,.0045,.0025,null,10,6),kn.teal,k.clone().multiply(_e(.012+B*.0105,.008,.0115)));i.add("metal",Cn(.03,.006,.004,.002,.001),j.steel,k.clone().multiply(_e(.0225,-.009,.0115)))}if(n.belt){const I=n.belt,N=oh(e,I),P=N.e;i.add("suit",bn([[I-.016,N.rx+.001,N.rz+.001,N.cx,N.cz,P],[I-.012,N.rx+.006,N.rz+.006,N.cx,N.cz,P],[I+.012,N.rx+.006,N.rz+.006,N.cx,N.cz,P],[I+.016,N.rx+.001,N.rz+.001,N.cx,N.cz,P]],44,!1,!1),j.teal)}const r=t.rTop-t.rBot,a=t.yTop-t.yBot,o=Math.hypot(r,a),c=[r/o,a/o],u=[c[1],-c[0]],h=(I,N)=>[t.yBot+a*I+u[1]*N,t.rBot+r*I+u[0]*N],l=.0055*t.g,d=.0018*t.g,f=[h(0,-.004),h(-.02,l*.7),h(.02,l),h(.09,l),h(.125,d),h(.875,d),h(.91,l),h(.98,l),h(1.02,l*.7),h(1,-.004)];i.add("metal",bn(f.map(([I,N])=>[I,N,N,0,t.z0]),56,!1,!1),j.gold),i.add("suit",bn([[t.yTop-.004,t.rTop-.004,t.rTop-.004,0,t.z0],[t.yTop+(n.neckUp??.03),t.rTop-.012,t.rTop-.012,0,t.z0]],32,!1,!0),n.neckCol??j.rubber);const p=(I,N,P=0)=>{const[z,k]=h(N,P),B=Math.cos(I),se=Math.sin(I);return{p:new pt(k*B,z,t.z0+k*se),n:new pt(u[0]*B,u[1],u[0]*se),up:new pt(c[0]*B,c[1],c[0]*se)}};for(const I of[.27,.73]){const[N,P]=h(I,d);i.add("metal",Zn(P,.0016*t.g,5,56),j.goldLight,_e(0,N,t.z0,Math.PI/2,0,0))}const S=22,x=-Math.PI/2;for(let I=0;I<S;I++){const N=x+(I+.5)/S*Math.PI*2,P=p(N,.5,d);Math.sin(N)>.55||(I%2?i.add("metal",Mt(.0052*t.g,.0052*t.g,.0034*t.g,null,10,6),j.goldLight,Ri(P.p,P.n,P.up)):i.add("metal",new as(1),j.bronze,Ri(P.p,P.n,P.up).multiply(_e(0,0,0,0,0,0,.0055*t.g,.0085*t.g,.0032*t.g))))}const g=p(x,.5,d),m=Ri(g.p,g.n,g.up);i.add("metal",new as(1),j.gold,m.clone().multiply(_e(0,0,0,0,0,0,.0155*t.g,.0215*t.g,.0045*t.g))),i.add("metal",Zn(1,.09,5,4),j.goldLight,m.clone().multiply(_e(0,0,.0028*t.g,0,0,0,.0125*t.g,.0178*t.g,.012*t.g))),i.glow(new as(1),kn.gem,m.clone().multiply(_e(0,0,.003*t.g,0,0,0,.0098*t.g,.0145*t.g,.0062*t.g)));const _=p(x,-.02,l*.5),v=_.p.clone().addScaledVector(_.up,-.0115*t.g).addScaledVector(_.n,.002);i.add("metal",Zn(.0042*t.g,.0012*t.g,5,12),j.gold,Ri(_.p.clone().addScaledVector(_.up,-.003*t.g),new pt(1,0,0))),i.glow(Mt(.0078*t.g,.0078*t.g,.0078*t.g,null,14,10),kn.crimson,_e(v.x,v.y,v.z));const E=v.clone().addScaledVector(_.up,-.0085*t.g),b=n.featherLen??.15;let M;if(n.shelf){const I=P=>{let z=n.shelf[0],k=n.shelf[1];for(let B=0;B<24;B++){const se=(z+k)/2;Kr(e,0,se).z>P?k=se:z=se}return(z+k)/2};E.y=I(E.z)+.007;const N=I(E.z-b*.85);M=Is(e,0,N),M.p.y+=.008}else M=Is(e,0,E.y-b*(n.featherDrop??.75));const C=M.p.clone().addScaledVector(M.n,.006).sub(E).normalize().clone().negate(),A=M.n.clone().addScaledVector(C,-M.n.dot(C)).normalize(),L=C.clone().cross(A);return{top:E,basis:new ys().makeBasis(L,C,A).setPosition(E),L:b,yTop:s}}function ch(i,e,t,n){const s=new pn;s.name=n,s.applyMatrix4(e.basis);const r=new Et(l_(e.L),t.feather);return r.name=n+":mesh",r.frustumCulled=!1,s.add(r),i.add(s),r}const c_=[[-.82,.17,.165,0,-.035,2.5],[-.62,.2,.2,0,-.07,2.5],[-.47,.222,.225,0,-.095,2.6],[-.37,.226,.225,0,-.095,2.6],[-.3,.224,.222,0,-.092,2.6],[-.266,.214,.19,0,-.062,2.5],[-.24,.194,.152,0,-.024,2.4],[-.222,.172,.118,0,.006,2.4],[-.196,.1,.09,0,.03,2.1]];function u_(i){const e=new pn;e.name="harma-chest";const t=new Sl,n=lh(t,c_,{z0:.03,yTop:-.166,yBot:-.214,rTop:.077,rBot:.135,g:1.55},{featherLen:.19,shelf:[-.3,-.2],pipeLen:.1,pipeX0:.085,pipeDx:.07,shX:.14,shDy:.012,panel:[-.12,-.262,1],belt:-.52,neckUp:.02,neckCol:kt(Ke.cardBg,Ke.lotusTeal,.25).multiplyScalar(.6)});t.build(e,i,"chest");const s=ch(e,n,i,"harma-chest-feather");return{chest:e,feather:s}}const eo=new pt(0,0,.085),yl=i=>_e(i*.086,.052,.094,.06,0,-i*.36);function $c(i,e,t,n,s,r=9){const a=[];for(let o=0;o<=r;o++){const c=o/r,u=1-c;a.push([n+c*t,i*u**.82*(1-.18*Math.sin(c*Math.PI))+.0012,e*u**.6+.001,0,s-.012*c*c,2])}return bn(a,18,!0,!0)}function h_(i){const e=n=>{const s=j.skin.clone();if(n.z<.02){const r=Math.abs(n.x)-.046,a=(n.y-.003)*1.35,o=Math.hypot(r,a);s.lerp(j.lilac,.85*(1-Os(.024,.046,o))),s.lerp(j.skinWarm,.6*Os(-.03,-.085,n.y))}return s};i.add("skin",Mt(.092,.09,.098,n=>{n.y<0&&(n.x*=1-.36*(-n.y)**1.7),n.x*=1+.1*Math.exp(-(((n.y+.28)/.3)**2)),n.z<0&&(n.z-=.33*Math.exp(-((n.x/.5)**2+((n.y+.47)/.36)**2)))},48,32),e,_e(eo.x,eo.y,eo.z));for(const n of[-1,1])i.add("skin",Mt(.0245,.0185,.02,null,18,12),j.skin,_e(n*.0205,-.05,-.034,0,-n*.25,0)),i.add("skin",new Ks(.0034,.013,8),j.tooth,_e(n*.0135,-.0705,-.04,Math.PI,0,0)),i.add("skin",an([[0,-.038,-.0545],[0,-.05,-.0545],[n*.011,-.0595,-.0515],[n*.027,-.0555,-.044],[n*.036,-.047,-.034]],16,6,s=>.0016*(1-.5*s)),j.liner);i.add("skin",Mt(.021,.0155,.019,null,16,10),j.skin,_e(0,-.0765,-.022)),i.add("skin",Mt(.0118,.0082,.0085,n=>{n.x*=1+.45*n.y},14,10),j.nose,_e(0,-.031,-.0495));const t=[];for(let n=0;n<=8;n++){const s=n/8;t.push([-.19+s*.12,.04+.002*Math.sin(s*22)+.01*s,.039+.002*Math.sin(s*22)+.012*s,0,.06+.016*s,2])}i.add("skin",bn(t,24,!1,!1),j.skinWarm);for(const n of[1,-1]){i.push(_e(n*.046,.002,2e-4,0,-n*.34,n*.2)),i.glow(Mt(.025,.0195,.0088,null,20,12),n>0?kn.eyeGreen:kn.eyeBlue,_e(0,0,.002)),i.glow(Mt(.0042,.0165,.004,null,10,10),kn.black,_e(0,0,-.0056)),i.glow(Mt(.0032,.0032,.002,null,8,6),kn.white,_e(n*.008,.008,-.0062));const s=[];for(let r=0;r<20;r++){const a=r/20*Math.PI*2,o=Math.sin(a);s.push([.029*Math.cos(a),.0208*Math.sign(o)*Math.abs(o)**1.25,.0012+.004*Math.cos(a)**2])}i.add("skin",an(s,48,6,()=>.0024,1,!0),j.liner),i.add("skin",an([[-.031,.005,.007],[-.013,.0228,5e-4],[.011,.0238,5e-4],[.032,.009,.008]],16,6,r=>.0034*Math.sin(Math.PI*(.1+.8*r))),j.lilac),i.pop()}for(const n of[-1,1]){i.push(yl(n)),i.add("skin",$c(.056,.02,.205,0,0),j.skin),i.add("skin",$c(.043,.012,.165,.012,-.0125),s=>j.teal.clone().lerp(j.skin,.45*Os(.03,.17,s.y)).lerp(j.tealDeep,.35*(1-Os(.012,.06,s.y))));for(const[s,r]of[[.03,.0125],[.052,.0105]])i.add("metal",Zn(r,.0027,6,18),j.gold,_e(n*(.056*(1-s/.205)**.82+.001),s,-.004,0,n*.5,0));i.pop(),i.add("metal",an([[n*.108,.07,.07],[n*.128,.03,.02],[n*.132,-.03,-.02],[n*.112,-.078,-.045],[n*.088,-.086,-.052],[n*.082,-.068,-.05],[n*.094,-.06,-.047]],40,6,s=>.0021*(1-.6*s)),j.gold),i.add("metal",an([[n*.034,-.047,-.044],[n*.07,-.038,-.058],[n*.104,-.046,-.052],[n*.116,-.07,-.044],[n*.104,-.08,-.042]],32,6,s=>.0017*(1-.65*s)),j.goldLight),i.add("metal",an([[n*.036,-.056,-.042],[n*.062,-.066,-.054],[n*.078,-.09,-.05],[n*.068,-.104,-.046]],28,6,s=>.0016*(1-.65*s)),j.goldLight)}}function uh(i,e){const o=Math.cos(i),c=Math.sin(i);let u,h;if(e<=.7){const S=e/.7*1.5;u=Math.sin(S),h=Math.cos(S)}else{const S=(e-.7)/.3,x=c<0?.3+.2*(-c)**2:.3*(1-.75*c);u=Math.sin(1.5)+x*S,h=Math.cos(1.5)-.2*S*(.4+.6*S)}const l=.099*u*o,d=.088+.11*u*c,f=Math.abs(l)/.099;let p=.047+.086*h;return p-=.062*Math.max(0,f-.3)**1.2*e*e*(c<.3?1:1-.6*Os(.3,1,c)),p+=.02*Math.exp(-((l/.022)**2))*(.45+.55*e)*(c<.4?1:.5),[l,p,d]}function f_(){const t=[],n=[];for(let r=0;r<=16;r++)for(let a=0;a<44;a++)t.push(...uh(a/44*Math.PI*2,r/16));for(let r=0;r<16;r++)for(let a=0;a<44;a++){const o=r*44+a,c=(r+1)*44+a,u=r*44+(a+1)%44,h=(r+1)*44+(a+1)%44;n.push(o,u,c,c,u,h)}const s=new Ct;return s.setAttribute("position",new Ze(t,3)),s.setIndex(n),ih(s)}function d_(i){i.add("metal",f_(),a=>j.steel.clone().lerp(j.bronze,yn(.25+.75*Math.exp(-((a.x/.05)**2))+(a.y<.03?.35:0),0,1)),null);const e=new fs;e.moveTo(-.07,.062),e.quadraticCurveTo(-.045,.108,-.012,.14),e.quadraticCurveTo(.008,.152,.03,.142),e.quadraticCurveTo(.075,.14,.1,.1),e.lineTo(.1,.08),e.quadraticCurveTo(.06,.122,.02,.128),e.quadraticCurveTo(-.03,.115,-.06,.06),e.closePath(),i.add("metal",Yo(e,.004,.0035,10),j.gold,_e(0,0,.088-.012,0,-Math.PI/2,0)),i.add("metal",bn([[.128,.0125,.034,0,.076,1.35],[.16,.009,.02,0,.076,1.35],[.205,.005,.009,0,.076,1.35],[.252,6e-4,6e-4,0,.076,2]],12,!1,!0),j.gold);const t=[];for(let a=0;a<=24;a++)t.push(uh(Math.PI+a/24*Math.PI,1));i.add("metal",an(t,60,6,()=>.0036),j.gold);for(const a of[-1,1]){i.add("metal",an([[a*.118,-.012,.03],[a*.124,-.06,.018],[a*.112,-.112,.016],[a*.085,-.15,.02]],20,8,c=>.0085*(1-.25*c),.3),j.steel),i.add("metal",Mt(.0095,.014,.004,null,10,8),j.gold,_e(a*.1235,-.058,.012,0,-a*.4,0)),i.add("metal",Mt(.007,.01,.0035,null,10,8),j.gold,_e(a*.113,-.108,.0105,0,-a*.4,a*.3)),i.push(yl(a));const o=[];for(let c=0;c<=10;c++){const u=c/10,h=1-u;o.push([-.004+u*.245,.069*h**.85+.003,.042*h**.7+.003,0,-.004-.012*u*u,2])}i.add("glass",bn(o,20,!1,!0),j.white),i.add("metal",bn([[-.02,.07,.044,0,-.004],[-.014,.0755,.049,0,-.004],[-.002,.0755,.049,0,-.004],[.004,.0705,.0445,0,-.004]],28,!1,!1),j.bronze),i.pop()}const n=new pt(0,-.035,.05),s=.156,r=new xi(s,36,20,Math.PI*.88,Math.PI*1.24,.98,Math.PI-.98-.42);i.add("glass",r,j.white,_e(n.x,n.y,n.z))}const hh=1.18,fh=[[-.68,.116,.1,0,.066,2.4],[-.52,.132,.11,0,.06,2.4],[-.38,.148,.116,0,.056,2.4],[-.3,.152,.106,0,.06,2.3],[-.248,.138,.09,0,.064,2.2],[-.212,.098,.074,0,.066,2.1],[-.19,.064,.06,0,.066,2]],$o=.158;function p_(){const i=[[.03,-.64,.2],[-.1,-.63,.25],[-.235,-.55,.24],[-.315,-.4,.2],[-.325,-.22,.18],[-.285,-.06,.17],[-.3,.1,.17]],e=new da(i.map(a=>new pt(...a)),!1,"centripetal"),t=[],n=(a,o,c,u,h=18)=>{const l=an(a,h+8,10,p=>o*Math.sin(Math.PI*(.08+.92*p**.55))**.9*(1-p)**.55+5e-4,.8,!1,u?.75:.25),d=l.attributes.position.count,f=new Float32Array(d).fill(c);l.setAttribute("phase",new cn(f,1)),t.push(l)};n(i,.08,0,0,30),[[.2,[-.05,.14,.02],[-.02,.26,0],.055,1.3],[.33,[-.07,.15,0],[-.04,.3,-.02],.064,2.6],[.46,[-.06,.16,.02],[0,.34,.01],.068,4.1],[.58,[-.05,.14,-.01],[-.075,.27,0],.058,5.3],[.7,[.04,.12,.01],[.03,.25,.02],.05,.7],[.4,[.06,.1,-.03],[.09,.23,-.03],.05,3.4],[.82,[-.06,.09,0],[-.03,.2,0],.042,2]].forEach(([a,o,c,u,h],l)=>{const d=e.getPointAt(a),f=e.getTangentAt(a);n([d.clone().addScaledVector(f,-.05),d.clone().addScaledVector(f,.01),d.clone().add(new pt(...o)),d.clone().add(new pt(...c))],u,h,l%2,16)});const r=rr(t,!1);return r.deleteAttribute("normal"),r.computeVertexNormals(),{geo:r,center:new pt(-.27,-.22,.2)}}function m_(i){const e=new pn;e.name="harma-mirror";const t=new Sl;t.push(_e(0,0,0,0,0,0,hh)),h_(t),d_(t),t.pop();const n=lh(t,fh,{z0:.066,yTop:-.138,yBot:-.19,rTop:.057,rBot:.086,g:1},{featherLen:.15,featherDrop:.8,pipeLen:.22,pipeX0:.05,pipeDx:.07,shX:.1,shDy:.045,panel:[-.08,-.36,.8],belt:-.56,neckUp:.012});for(const c of[-1,1])t.push(_e(c*$o,-.262,.062,.1,0,c*.16)),t.add("suit",Mt(.064,.058,.062,null,18,12),j.suit),t.add("suit",Zt([[-.3,.04],[-.29,.047],[-.2,.05],[-.12,.052],[-.03,.055]],24,!0,!1),j.suit),t.add("suit",Zt([[-.2,.0505],[-.197,.0548],[-.182,.055],[-.179,.051]],24),j.teal),t.add("metal",Zt([[-.178,.051],[-.176,.0558],[-.17,.0558],[-.168,.0515]],24),j.gold),t.add("suit",Mt(.03,.03,.008,null,14,8),j.teal,_e(c*.052,.012,-.02,0,c*1.1,0)),t.pop();t.build(e,i,"mirror");const s=ch(e,n,i,"harma-mirror-feather"),r=p_(),a=new Et(r.geo,i.flame);a.name="mirror:flame",a.frustumCulled=!1,e.add(a);const o=new Ht;return o.name="harma-flame",o.position.copy(r.center),e.add(o),{mirror:e,feather:s,flame:o,flameMesh:a,flameBase:r.geo.attributes.position.array.slice()}}function g_(){const i=[],e=(r,a)=>{const o=r.index?r.toNonIndexed():r.clone();for(const c of Object.keys(o.attributes))c!=="position"&&c!=="normal"&&o.deleteAttribute(c);o.attributes.normal||o.computeVertexNormals(),a&&(o.applyMatrix4(a),a.determinant()<0&&sh(o)),i.push(o)},t=_e(0,0,0,0,0,0,hh);e(new xi(1,12,8),t.clone().multiply(_e(0,.022,.085,0,0,0,.116,.108,.115))),e(new on(.105,.15,.03,12),t.clone().multiply(_e(0,.02,.07)));for(const r of[-1,1])e(new Ks(1,1,7),t.clone().multiply(yl(r)).multiply(_e(0,.11,0,0,0,0,.066,.25,.03))),e(new on(.046,.056,.3,7),_e(r*($o+.022),-.4,.062,.05,0,r*.14)),e(new xi(.066,8,6),_e(r*$o,-.262,.062));e(new Ks(.02,.13,5),t.clone().multiply(_e(0,.19,.078))),e(new _i(.012,.03,.16),t.clone().multiply(_e(0,.135,.09))),e(new on(.058,.088,.14,10),_e(0,-.13,.068)),e(bn(fh,12,!0,!0));const n=rr(i,!1),s=new Et(n,new _s({color:0}));return s.name="harma-shadow",s}function Gr(i){let e=0,t=0;return i.traverse(n=>{if(n.isMesh){e++;const s=n.geometry;t+=(s.index?s.index.count:s.attributes.position.count)/3}}),{draws:e,tris:Math.round(t)}}function x_(){const i=s_(),e=o_(i),t=u_(i),n=m_(i),s=g_(),r=j.teal.clone(),a=kt(Ke.flame,16777215,.25),o=j.glowTeal.clone().multiplyScalar(.7),c=$t(Ke.flame),u=kt(Ke.flame,16722432,.75),h=n.flameMesh.geometry.attributes.position,l=n.flameMesh.geometry.attributes.uv,d=n.flameMesh.geometry.attributes.phase,f=i.flame.map;let p=0;function S(x,g={}){const m=yn(g.wake??0,0,1),_=yn(g.heat??0,0,1),v=g.mode==="cut";e.sway.position.set(.0012*Math.sin(x*.83+.4),.0034*Math.sin(x*1.55),.0016*Math.sin(x*1.55+1.1)),e.sway.rotation.set(.0048*Math.sin(x*1.55+.7),.0032*Math.sin(x*.83),.0052*Math.sin(x*1.1+.5)),i.lens.emissive.copy(v?a:r),i.lens.emissiveIntensity=v?2.3+.35*Math.sin(x*31)*Math.sin(x*7.3):1.5+.12*Math.sin(x*2.4),_<.5?i.heat.emissive.copy(o).lerp(c,_*2):i.heat.emissive.copy(c).lerp(u,_*2-2*.5),i.heat.emissiveIntensity=.55+1.6*_+(_>.85?.7*Math.sin(x*14):0);const E=.055*Math.sin(x*1.3)+.02*Math.sin(x*2.9+1);for(const C of[t.feather,n.feather])C.rotation.z=E,C.rotation.x=.012*Math.sin(x*1.7+.6);const b=h.array,M=n.flameBase;for(let C=0;C<h.count;C++){const A=l.getX(C),L=d.getX(C),I=A*A,N=C*3,P=m*.012*Math.sin(x*23+L*3+A*11),z=m*.016*Math.sin(x*17+L*5+A*7);b[N]=M[N]+(.024*Math.sin(x*2.6+L+A*5)+P)*I,b[N+1]=M[N+1]+(.02*Math.sin(x*1.9+L*1.3)+z)*I,b[N+2]=M[N+2]+.016*Math.cos(x*2.1+L*1.7+A*4)*I}h.needsUpdate=!0;const y=Math.round(m*32);y!==p&&(p=y,rh(f.image.data,y/32),f.needsUpdate=!0),i.flame.emissiveIntensity=1.05+.12*Math.sin(x*5.1)+m*(.35+.25*Math.sin(x*29))}return S(0,{wake:0,mode:"grip",heat:0}),{fpRig:e.fpRig,chest:t.chest,mirror:n.mirror,shadow:s,muzzle:e.muzzle,flame:n.flame,materials:i,update:S,counts:{fpRig:Gr(e.fpRig),chest:Gr(t.chest),mirror:Gr(n.mirror),shadow:Gr(s)}}}const __=Object.freeze(Object.defineProperty({__proto__:null,buildHarma:x_},Symbol.toStringTag,{value:"Module"})),v_=Object.assign({"./harma/model.js":__});function M_(i,e){const t=Object.values(v_)[0]?.buildHarma,n=t?t():null,s=new pn;i.add(s);const r=new Oe(16756306),a=new Oe(Ke.neonViolet),o=new Oe,c=new gl(r,0,7,1.8),u=new ku(r,0,11,1,.75,1.4);return u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.bias=-.002,u.shadow.normalBias=.02,u.shadow.camera.near=.08,u.shadow.camera.far=11,c.position.set(0,-.4,.6),u.position.set(0,-.35,.8),u.target.position.set(0,.3,-3),s.add(c,u,u.target),c.layers.enable(2),u.layers.enable(2),n&&(e.add(n.fpRig),s.add(n.chest,n.mirror,n.shadow),n.mirror.traverse(h=>h.layers.set(2)),n.shadow.material=new _s({colorWrite:!1,depthWrite:!1}),n.shadow.castShadow=!0,n.shadow.frustumCulled=!1,n.materials.suit&&n.materials.suit.color.setScalar(.7),n.fpRig.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1)}),n.chest.traverse(h=>{h.isMesh&&(h.receiveShadow=!0)})),{model:n,body:s,tailPoint:c,tailSpot:u,update(h,l,{wake:d=0,rig:f=1,inspect:p=0}={}){vl(s,l.x,l.y,l.z,l.yaw),s.updateMatrixWorld(!0);const S=1+.06*Math.sin(h*9.1)*Math.sin(h*4.3)+d*.35*Math.sin(h*37)*Math.sin(h*23.3);o.copy(r).lerp(a,d*(.45+.25*Math.sin(h*3.1))),c.color.copy(o),u.color.copy(o),c.intensity=.7*S,u.intensity=4.5*S,n&&(n.fpRig.visible=!!f,n.fpRig.position.set(-.05*p,.05*p,.05*p),n.fpRig.rotation.set(.08*p,.22*p,.05*p),n.update(h,{wake:d,mode:"grip",heat:0}))}}}const Di=new URLSearchParams(location.search),Xs=Di.get("bench")==="1",Hr=parseInt(Di.get("seed")||"1",10)||1,S_=Math.max(0,Math.min(ns.length-1,parseInt(Di.get("cam")||"0",10)||0)),Jc=Di.get("fps")==="1",ls=document.documentElement;ls.dataset.drift="loading";function dh(i){ls.dataset.drift="error",ls.dataset.driftError=i;const e=document.getElementById("err");e.textContent="Игра не запустилась: "+i,e.hidden=!1,Xs&&(window.__drift={ready:!1,error:i})}const Pi=document.createElement("canvas");let Jo="";Pi.addEventListener("webglcontextcreationerror",i=>{Jo=i.statusMessage||"без статуса"});document.body.appendChild(Pi);let Lt;try{Lt=new hx({canvas:Pi,antialias:!1,preserveDrawingBuffer:Xs,powerPreference:"high-performance"})}catch(i){dh((Jo?Jo+" / ":"")+String(i&&i.message||i))}if(Lt)try{y_()}catch(i){console.error(i),dh(String(i&&i.stack||i).slice(0,400))}function y_(){const i=Lt.getContext(),e=i.getExtension("WEBGL_debug_renderer_info"),t={version:i.getParameter(i.VERSION),renderer:e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER),vendor:e?i.getParameter(e.UNMASKED_VENDOR_WEBGL):i.getParameter(i.VENDOR)};ls.dataset.driftGl=`${t.version} | ${t.renderer}`;const n=Xs?1:Math.min(window.devicePixelRatio||1,2);Lt.setPixelRatio(n),Lt.setSize(window.innerWidth,window.innerHeight),Lt.shadowMap.enabled=!0,Lt.shadowMap.type=zs,Lt.shadowMap.autoUpdate=!1,Lt.toneMapping=Yn,Lt.info.autoReset=!1;const s=new Su;s.background=new Oe(0),s.fog=new cl(659222,.01);const r=new nr(Lt);s.environment=r.fromScene(new fx,.04).texture,r.dispose(),s.environmentIntensity=.1;const a=new _n(70,window.innerWidth/window.innerHeight,.06,1500);s.add(a);const o=new Bx(s,{spots:3,points:6}),c=Qx(Hr,o);s.add(c.group),c.seeds.forEach((G,ae)=>Zr.uFrost.value[ae].set(...G));const u=e_(c.fx,Hr);s.add(u.group),s.add(i_(c.fx.sun));const h=(xe.z0+xe.z1)/2,{sky:l,asteroid:d}=t_(Hr),f=os(h);l.position.copy(Pn(xe.x-.3,1.5,h));const p=Pn(...c.fx.sun.pos),S=Pn(...c.fx.sun.to).sub(p).normalize();Hn.uSunPos.value.copy(p),Hn.uSunDir.value.copy(S);const x=S.clone().negate();l.children[1].position.copy(x).multiplyScalar(900),d.material.uniforms.uSun.value=x,d.position.set(-430,14,-250).applyQuaternion(f),d.quaternion.premultiply(f),s.add(l);const g=new jt(1920,1080,{type:Qt,samples:4}),m=n_(g);s.add(m.mesh);const _=new _n;_.layers.set(2),s.traverse(G=>{G.isLight&&G.layers.enable(2)});const v=M_(s,a),E=(Di.get("pp")||"").split(","),b=Zx(Lt,s,a,{msaa:E.includes("nomsaa")?0:4,bloomOn:!E.includes("nobloom"),type:E.includes("ldr")?vn:Qt}),M=gx(),y=px({hatchOpen:!0}),C={mood:Di.get("mood")==="amber"?"amber":"cold",wake:Di.get("wake")==="1"?1:0,hatch:1,rig:1};let A=0,L=S_,I=!Xs,N=C.wake;const P={cold:{fog:461585,lamp:[13624063,2.2],emerg:[16722458,2.6],env:.06,tint:[.96,1,1.06],exposure:1},amber:{fog:1051141,lamp:[16757866,2.4],emerg:[16747050,3],env:.06,tint:[1.07,1,.9],exposure:1}};function z(){const G=P[C.mood];s.fog.color.set(G.fog),c.mats.lamp.color.set(G.lamp[0]).multiplyScalar(G.lamp[1]),c.mats.emerg.color.set(G.emerg[0]).multiplyScalar(G.emerg[1]),s.environmentIntensity=G.env,b.uniforms.uTint.value.set(...G.tint);for(const ae of u.shafts)ae.mat.uniforms.uColor.value.set(ae.def.moodColor&&ae.def.moodColor[C.mood]||ae.def.color)}const k={x:0,y:xn,z:0,yaw:0,pitch:0};function B(){if(I)Object.assign(k,{x:M.x,y:xn,z:M.z,yaw:M.yaw,pitch:M.pitch});else{const G=ns[L];Object.assign(k,{x:G.pos[0],y:G.pos[1],z:G.pos[2],yaw:G.yaw,pitch:G.pitch})}}function se(){const G=ns[L];C.mood=G.mood||"cold",C.wake=G.wake||0,C.hatch=G.hatch??1,C.rig=G.rig??1,C.inspect=G.inspect||0,N=C.wake,A=G.t??1.3,z()}function X(G){A+=G,xx(M,y,G),N+=(C.wake-N)*Math.min(1,G*.8)}const Q=new D,re=new D,Pe=new D,Ge=new ht,Z=new D;function we(){if(a.getWorldPosition(Z),re.subVectors(m.center,Z),re.dot(m.normal)>0)return!1;re.reflect(m.normal).negate().add(m.center),Ge.extractRotation(a.matrixWorld),Pe.set(0,0,-1).applyMatrix4(Ge).add(Z),Pe.subVectors(m.center,Pe).reflect(m.normal).negate().add(m.center),_.position.copy(re),_.up.set(0,1,0).applyMatrix4(Ge).reflect(m.normal),_.lookAt(Pe),_.near=.1,_.far=60,_.updateMatrixWorld(),_.projectionMatrix.copy(a.projectionMatrix),m.mat.uniforms.uTexM.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(_.projectionMatrix).multiply(_.matrixWorldInverse);const G=s.background,ae=s.fog;return s.background=null,s.fog=null,Lt.setRenderTarget(g),Lt.setClearColor(0,1),Lt.clear(),Lt.render(s,_),Lt.setRenderTarget(null),s.background=G,s.fog=ae,!0}function Re(){B(),Lt.info.reset(),vl(a,k.x,k.y,k.z,k.yaw,k.pitch),a.updateMatrixWorld(),c.dynamic.hatch.set(C.hatch),Zr.uWake.value=N,Zr.uTime.value=A,Hn.uTime.value=A,Hn.uPx.value=Lt.getDrawingBufferSize(Q).y,b.uniforms.uTime.value=A,b.uniforms.uWake.value=N,o.update(k.x,k.z,A,C.mood);const G=1-.82*N;for(const fe of o.spots)fe.intensity*=G;for(const fe of o.points)fe.intensity*=G;c.mats.glowBeacon.color.set(16763e3).multiplyScalar(7*c.dynamic.beaconPulse(A)*G),v.update(A,k,{wake:N,rig:C.rig,inspect:C.inspect||0});const ae=k.x<2&&k.z<xe.z1+7&&k.z>xe.z0-7;m.mesh.visible=ae,ae&&we(),Lt.shadowMap.needsUpdate=!0,b.render()}function Fe(){const G=Lt.info;return{calls:G.render.calls,triangles:G.render.triangles,points:G.render.points,lines:G.render.lines,geometries:G.memory.geometries,textures:G.memory.textures,programs:(G.programs||[]).length}}if(z(),X(0),Xs){se(),Re(),window.__drift={ready:!0,error:"",seed:Hr,cam:L,gl:t,cameras:ns.map(G=>G.name),routes:mx,setCamera(G){return L=Math.max(0,Math.min(ns.length-1,G|0)),I=!1,se(),Re(),L},usePlayerCamera(G=!0){I=!!G,Re()},setState(G){return Object.assign(C,G),G.wake!==void 0&&(N=G.wake),z(),Re(),{...C}},setView(G){return Object.assign(ns[L],G),I=!1,Re(),Fe()},setTime(G){A=G,Re()},render(){return Re(),Fe()},info:Fe,step(G=1,ae=1/60){for(let fe=0;fe<G;fe++)X(ae);return{t:A,...this.player()}},timeLogic(G=6e3,ae=1/60,fe=100){let pe=1/0;for(let Xe=0;Xe<20;Xe++){const $e=performance.now();let rt=$e;for(;rt===$e;)rt=performance.now();pe=Math.min(pe,rt-$e)}const He=[];for(let Xe=0;Xe<G;Xe+=fe){const $e=performance.now();for(let rt=0;rt<fe;rt++)X(ae);He.push((performance.now()-$e)/fe)}He.sort((Xe,$e)=>Xe-$e);const Ue=Xe=>He[Math.min(He.length-1,Math.floor(Xe*He.length))];return{frames:He.length*fe,batch:fe,batches:He.length,mean:He.reduce((Xe,$e)=>Xe+$e,0)/He.length,p50:Ue(.5),p95:Ue(.95),max:He[He.length-1],clockMs:pe,precisionMs:pe/fe}},player(){return{x:M.x,z:M.z,yaw:M.yaw,t:A}},setInput(G){Object.assign(M.input,G)},setYaw(G){M.yaw=G},teleport(G,ae,fe){M.x=G,M.z=ae,fe!==void 0&&(M.yaw=fe),X(0)}},ls.dataset.drift="ready";return}const he=new Set;addEventListener("keydown",G=>{he.add(G.code),G.code==="KeyM"&&(C.mood=C.mood==="cold"?"amber":"cold",z()),G.code==="KeyU"&&(C.wake=C.wake?0:1)}),addEventListener("keyup",G=>he.delete(G.code)),addEventListener("blur",()=>he.clear()),Pi.addEventListener("click",()=>Pi.requestPointerLock&&Pi.requestPointerLock()),addEventListener("mousemove",G=>{document.pointerLockElement===Pi&&(M.yaw-=G.movementX*.0022,M.pitch=Math.max(-1.45,Math.min(1.45,M.pitch-G.movementY*.0022)))}),addEventListener("resize",()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),Lt.setSize(window.innerWidth,window.innerHeight),b.setSize(window.innerWidth,window.innerHeight,n)});const ze=document.getElementById("fps");ze.hidden=!Jc;const St=document.getElementById("hint");St&&(St.hidden=!1);let ke=performance.now(),Je=0,et=0,te=!0;Lt.setAnimationLoop(()=>{const G=performance.now(),ae=Math.min(.1,(G-ke)/1e3);if(ke=G,M.speed=he.has("ShiftLeft")||he.has("ShiftRight")?5.2:3.2,M.input.forward=(he.has("KeyW")||he.has("ArrowUp")?1:0)-(he.has("KeyS")||he.has("ArrowDown")?1:0),M.input.strafe=(he.has("KeyD")||he.has("ArrowRight")?1:0)-(he.has("KeyA")||he.has("ArrowLeft")?1:0),X(ae),Re(),te&&(te=!1,ls.dataset.drift="ready"),Jc&&(Je+=ae,et++,Je>=.5)){const fe=Fe();ze.textContent=`FPS ${(et/Je).toFixed(1)} · вызовов ${fe.calls} · треуг. ${(fe.triangles/1e3).toFixed(0)}к · программ ${fe.programs}`,ze.dataset.fps=(et/Je).toFixed(1),Je=0,et=0}})}
