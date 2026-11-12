(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ec="187",Od=0,ru=1,kd=2,No=1,Bd=2,Po=3,ur=0,zn=1,Oi=2,qr=0,Fo=1,ni=2,ou=3,au=4,jf=5,Gr=100,Gd=101,Vd=102,Hd=103,Wd=104,Xd=200,eh=201,qd=202,Yd=203,th=204,Ac=205,$d=206,Zd=207,Kd=208,Jd=209,Qd=210,jd=211,ep=212,tp=213,np=214,yl=0,Ml=1,bl=2,Ho=3,Sl=4,wl=5,Tl=6,El=7,Rc=0,ip=1,sp=2,ns=0,nh=1,ih=2,sh=3,rh=4,oh=5,ah=6,lh=7,lu="attached",rp="detached",ch=300,Kr=301,Wo=302,E0=303,A0=304,Jr=1e3,ji=1001,Al=1002,vn=1003,op=1004,ta=1005,Gn=1006,R0=1007,es=1008,ri=1009,uh=1010,fh=1011,Xo=1012,Cc=1013,is=1014,wi=1015,Ai=1016,Pc=1017,Dc=1018,Qr=1020,hh=35902,dh=35899,ph=1021,mh=1022,Vn=1023,Bs=1026,Is=1027,Lc=1028,zc=1029,fr=1030,Ic=1031,Uc=1033,Ya=33776,$a=33777,Za=33778,Ka=33779,Rl=35840,Cl=35841,Pl=35842,Dl=35843,Ll=36196,zl=37492,Il=37496,Ul=37488,Nl=37489,r0=37490,Fl=37491,Ol=37808,kl=37809,Bl=37810,Gl=37811,Vl=37812,Hl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,$l=37818,Zl=37819,Kl=37820,Jl=37821,Ql=36492,jl=36494,ec=36495,tc=36283,nc=36284,o0=36285,ic=36286,ap=3200,a0=0,lp=1,ki="",ln="srgb",l0="srgb-linear",c0="linear",Yt="srgb",C0=7680,cp=519,up=512,fp=513,hp=514,gh=515,dp=516,pp=517,xh=518,vh=519,_h=35044,cu="300 es",Bi=2e3,qo=2001;function mp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function u0(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gp(){const i=u0("canvas");return i.style.display="block",i}const uu={};function f0(...i){const e="THREE."+i.shift();console.log(e,...i)}function yh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ft(...i){i=yh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Nt(...i){i=yh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ja(...i){const e=i.join(" ");e in uu||(uu[e]=!0,ft(...i))}function xp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const vp={[yl]:yl,[bl]:Tl,[Sl]:Sl,[Ho]:wl,[Ml]:Ml,[Tl]:bl,[El]:El,[wl]:Ho};class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],P0=Math.PI/180,h0=180/Math.PI;function ys(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[n&255]+Nn[n>>8&255]+Nn[n>>16&255]+Nn[n>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function _p(i,e){return(i%e+e)%e}function D0(i,e,t){return(1-t)*i+t*e}function yp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function v0(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Mh(i,e){if(e.constructor===Float32Array)return i;const t=v0(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function bh(i,e){if(e.constructor===Float32Array)return i;const t=v0(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}class Le{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,l){let u=n[s+0],f=n[s+1],p=n[s+2],m=n[s+3],d=r[o+0],h=r[o+1],a=r[o+2],_=r[o+3];if(m!==_||u!==d||f!==h||p!==a){let c=u*d+f*h+p*a+m*_;c<0&&(d=-d,h=-h,a=-a,_=-_,c=-c);let g=1-l;if(c<.9995){const v=Math.acos(c),b=Math.sin(v);g=Math.sin(g*v)/b,l=Math.sin(l*v)/b,u=u*g+d*l,f=f*g+h*l,p=p*g+a*l,m=m*g+_*l}else{u=u*g+d*l,f=f*g+h*l,p=p*g+a*l,m=m*g+_*l;const v=1/Math.sqrt(u*u+f*f+p*p+m*m);u*=v,f*=v,p*=v,m*=v}}e[t]=u,e[t+1]=f,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,o){const l=n[s],u=n[s+1],f=n[s+2],p=n[s+3],m=r[o],d=r[o+1],h=r[o+2],a=r[o+3];return e[t]=l*a+p*m+u*h-f*d,e[t+1]=u*a+p*d+f*m-l*h,e[t+2]=f*a+p*h+l*d-u*m,e[t+3]=p*a-l*m-u*d-f*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,l=Math.cos,u=Math.sin,f=l(n/2),p=l(s/2),m=l(r/2),d=u(n/2),h=u(s/2),a=u(r/2);switch(o){case"XYZ":this._x=d*p*m+f*h*a,this._y=f*h*m-d*p*a,this._z=f*p*a+d*h*m,this._w=f*p*m-d*h*a;break;case"YXZ":this._x=d*p*m+f*h*a,this._y=f*h*m-d*p*a,this._z=f*p*a-d*h*m,this._w=f*p*m+d*h*a;break;case"ZXY":this._x=d*p*m-f*h*a,this._y=f*h*m+d*p*a,this._z=f*p*a+d*h*m,this._w=f*p*m-d*h*a;break;case"ZYX":this._x=d*p*m-f*h*a,this._y=f*h*m+d*p*a,this._z=f*p*a-d*h*m,this._w=f*p*m+d*h*a;break;case"YZX":this._x=d*p*m+f*h*a,this._y=f*h*m+d*p*a,this._z=f*p*a-d*h*m,this._w=f*p*m-d*h*a;break;case"XZY":this._x=d*p*m-f*h*a,this._y=f*h*m-d*p*a,this._z=f*p*a+d*h*m,this._w=f*p*m+d*h*a;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],l=t[5],u=t[9],f=t[2],p=t[6],m=t[10],d=n+l+m;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(p-u)*h,this._y=(r-f)*h,this._z=(o-s)*h}else if(n>l&&n>m){const h=2*Math.sqrt(1+n-l-m);this._w=(p-u)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+f)/h}else if(l>m){const h=2*Math.sqrt(1+l-n-m);this._w=(r-f)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(u+p)/h}else{const h=2*Math.sqrt(1+m-n-l);this._w=(o-s)/h,this._x=(r+f)/h,this._y=(u+p)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,l=t._x,u=t._y,f=t._z,p=t._w;return this._x=n*p+o*l+s*f-r*u,this._y=s*p+o*u+r*l-n*f,this._z=r*p+o*f+n*u-s*l,this._w=o*p-n*l-s*u-r*f,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,s=-s,r=-r,o=-o,l=-l);let u=1-t;if(l<.9995){const f=Math.acos(l),p=Math.sin(f);u=Math.sin(u*f)/p,t=Math.sin(t*f)/p,this._x=this._x*u+n*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+o*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+s*t,this._z=this._z*u+r*t,this._w=this._w*u+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,l=e.z,u=e.w,f=2*(o*s-l*n),p=2*(l*t-r*s),m=2*(r*n-o*t);return this.x=t+u*f+o*m-l*p,this.y=n+u*p+l*f-r*m,this.z=s+u*m+r*p-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,l=t.y,u=t.z;return this.x=s*u-r*l,this.y=r*o-n*u,this.z=n*l-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return L0.copy(this).projectOnVector(e),this.sub(L0)}reflect(e){return this.sub(L0.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const L0=new Y,fu=new jt;class gt{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,l,u,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,u,f)}set(e,t,n,s,r,o,l,u,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=l,p[3]=t,p[4]=r,p[5]=u,p[6]=n,p[7]=o,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[3],u=n[6],f=n[1],p=n[4],m=n[7],d=n[2],h=n[5],a=n[8],_=s[0],c=s[3],g=s[6],v=s[1],b=s[4],M=s[7],A=s[2],T=s[5],x=s[8];return r[0]=o*_+l*v+u*A,r[3]=o*c+l*b+u*T,r[6]=o*g+l*M+u*x,r[1]=f*_+p*v+m*A,r[4]=f*c+p*b+m*T,r[7]=f*g+p*M+m*x,r[2]=d*_+h*v+a*A,r[5]=d*c+h*b+a*T,r[8]=d*g+h*M+a*x,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],u=e[6],f=e[7],p=e[8];return t*o*p-t*l*f-n*r*p+n*l*u+s*r*f-s*o*u}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],u=e[6],f=e[7],p=e[8],m=p*o-l*f,d=l*u-p*r,h=f*r-o*u,a=t*m+n*d+s*h;if(a===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/a;return e[0]=m*_,e[1]=(s*f-p*n)*_,e[2]=(l*n-s*o)*_,e[3]=d*_,e[4]=(p*t-s*u)*_,e[5]=(s*r-l*t)*_,e[6]=h*_,e[7]=(n*u-f*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,l){const u=Math.cos(r),f=Math.sin(r);return this.set(n*u,n*f,-n*(u*o+f*l)+o+e,-s*f,s*u,-s*(-f*o+u*l)+l+t,0,0,1),this}scale(e,t){return Ja("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(z0.makeScale(e,t)),this}rotate(e){return Ja("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(z0.makeRotation(-e)),this}translate(e,t){return Ja("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(z0.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const z0=new gt,hu=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){const i={enabled:!0,workingColorSpace:l0,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Yt&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Yt&&(s.r=Yr(s.r),s.g=Yr(s.g),s.b=Yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?c0:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[l0]:{primaries:e,whitePoint:n,transfer:c0,toXYZ:hu,fromXYZ:du,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:n,transfer:Yt,toXYZ:hu,fromXYZ:du,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const Pt=Mp();function vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Yr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mr;class bp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Mr===void 0&&(Mr=u0("canvas")),Mr.width=e.width,Mr.height=e.height;const s=Mr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Mr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=u0("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vs(t[n]/255)*255):t[n]=vs(t[n]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sp=0;class Nc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(I0(s[o].image)):r.push(I0(s[o]))}else r=I0(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function I0(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let wp=0;const U0=new Y;class Hn extends mr{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,n=ji,s=ji,r=Gn,o=es,l=Vn,u=ri,f=Hn.DEFAULT_ANISOTROPY,p=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ys(),this.name="",this.source=new Nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(U0).x}get height(){return this.source.getSize(U0).y}get depth(){return this.source.getSize(U0).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jr:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jr:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=ch;Hn.DEFAULT_ANISOTROPY=1;class Kt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const u=e.elements,f=u[0],p=u[4],m=u[8],d=u[1],h=u[5],a=u[9],_=u[2],c=u[6],g=u[10];if(Math.abs(p-d)<.01&&Math.abs(m-_)<.01&&Math.abs(a-c)<.01){if(Math.abs(p+d)<.1&&Math.abs(m+_)<.1&&Math.abs(a+c)<.1&&Math.abs(f+h+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(f+1)/2,M=(h+1)/2,A=(g+1)/2,T=(p+d)/4,x=(m+_)/4,y=(a+c)/4;return b>M&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=x/n):M>A?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=y/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=x/r,s=y/r),this.set(n,s,r,t),this}let v=Math.sqrt((c-a)*(c-a)+(m-_)*(m-_)+(d-p)*(d-p));return Math.abs(v)<.001&&(v=1),this.x=(c-a)/v,this.y=(m-_)/v,this.z=(d-p)/v,this.w=Math.acos((f+h+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tp extends mr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Hn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Nc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Tp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sh extends Hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ep extends Hn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class dt{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,l,u,f,p,m,d,h,a,_,c){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,l,u,f,p,m,d,h,a,_,c)}set(e,t,n,s,r,o,l,u,f,p,m,d,h,a,_,c){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=l,g[13]=u,g[2]=f,g[6]=p,g[10]=m,g[14]=d,g[3]=h,g[7]=a,g[11]=_,g[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),o=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(s),f=Math.sin(s),p=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const d=o*p,h=o*m,a=l*p,_=l*m;t[0]=u*p,t[4]=-u*m,t[8]=f,t[1]=h+a*f,t[5]=d-_*f,t[9]=-l*u,t[2]=_-d*f,t[6]=a+h*f,t[10]=o*u}else if(e.order==="YXZ"){const d=u*p,h=u*m,a=f*p,_=f*m;t[0]=d+_*l,t[4]=a*l-h,t[8]=o*f,t[1]=o*m,t[5]=o*p,t[9]=-l,t[2]=h*l-a,t[6]=_+d*l,t[10]=o*u}else if(e.order==="ZXY"){const d=u*p,h=u*m,a=f*p,_=f*m;t[0]=d-_*l,t[4]=-o*m,t[8]=a+h*l,t[1]=h+a*l,t[5]=o*p,t[9]=_-d*l,t[2]=-o*f,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const d=o*p,h=o*m,a=l*p,_=l*m;t[0]=u*p,t[4]=a*f-h,t[8]=d*f+_,t[1]=u*m,t[5]=_*f+d,t[9]=h*f-a,t[2]=-f,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const d=o*u,h=o*f,a=l*u,_=l*f;t[0]=u*p,t[4]=_-d*m,t[8]=a*m+h,t[1]=m,t[5]=o*p,t[9]=-l*p,t[2]=-f*p,t[6]=h*m+a,t[10]=d-_*m}else if(e.order==="XZY"){const d=o*u,h=o*f,a=l*u,_=l*f;t[0]=u*p,t[4]=-m,t[8]=f*p,t[1]=d*m+_,t[5]=o*p,t[9]=h*m-a,t[2]=a*m-h,t[6]=l*p,t[10]=_*m+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ap,e,Rp)}lookAt(e,t,n){const s=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),Ts.crossVectors(n,li),Ts.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Ts.crossVectors(n,li)),Ts.normalize(),na.crossVectors(li,Ts),s[0]=Ts.x,s[4]=na.x,s[8]=li.x,s[1]=Ts.y,s[5]=na.y,s[9]=li.y,s[2]=Ts.z,s[6]=na.z,s[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],l=n[4],u=n[8],f=n[12],p=n[1],m=n[5],d=n[9],h=n[13],a=n[2],_=n[6],c=n[10],g=n[14],v=n[3],b=n[7],M=n[11],A=n[15],T=s[0],x=s[4],y=s[8],E=s[12],C=s[1],P=s[5],I=s[9],q=s[13],L=s[2],O=s[6],H=s[10],X=s[14],Z=s[3],$=s[7],J=s[11],re=s[15];return r[0]=o*T+l*C+u*L+f*Z,r[4]=o*x+l*P+u*O+f*$,r[8]=o*y+l*I+u*H+f*J,r[12]=o*E+l*q+u*X+f*re,r[1]=p*T+m*C+d*L+h*Z,r[5]=p*x+m*P+d*O+h*$,r[9]=p*y+m*I+d*H+h*J,r[13]=p*E+m*q+d*X+h*re,r[2]=a*T+_*C+c*L+g*Z,r[6]=a*x+_*P+c*O+g*$,r[10]=a*y+_*I+c*H+g*J,r[14]=a*E+_*q+c*X+g*re,r[3]=v*T+b*C+M*L+A*Z,r[7]=v*x+b*P+M*O+A*$,r[11]=v*y+b*I+M*H+A*J,r[15]=v*E+b*q+M*X+A*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],l=e[5],u=e[9],f=e[13],p=e[2],m=e[6],d=e[10],h=e[14],a=e[3],_=e[7],c=e[11],g=e[15],v=u*h-f*d,b=l*h-f*m,M=l*d-u*m,A=o*h-f*p,T=o*d-u*p,x=o*m-l*p;return t*(_*v-c*b+g*M)-n*(a*v-c*A+g*T)+s*(a*b-_*A+g*x)-r*(a*M-_*T+c*x)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],l=e[9],u=e[2],f=e[6],p=e[10];return t*(o*p-l*f)-n*(r*p-l*u)+s*(r*f-o*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],l=e[5],u=e[6],f=e[7],p=e[8],m=e[9],d=e[10],h=e[11],a=e[12],_=e[13],c=e[14],g=e[15],v=t*l-n*o,b=t*u-s*o,M=t*f-r*o,A=n*u-s*l,T=n*f-r*l,x=s*f-r*u,y=p*_-m*a,E=p*c-d*a,C=p*g-h*a,P=m*c-d*_,I=m*g-h*_,q=d*g-h*c,L=v*q-b*I+M*P+A*C-T*E+x*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=(l*q-u*I+f*P)*O,e[1]=(s*I-n*q-r*P)*O,e[2]=(_*x-c*T+g*A)*O,e[3]=(d*T-m*x-h*A)*O,e[4]=(u*C-o*q-f*E)*O,e[5]=(t*q-s*C+r*E)*O,e[6]=(c*M-a*x-g*b)*O,e[7]=(p*x-d*M+h*b)*O,e[8]=(o*I-l*C+f*y)*O,e[9]=(n*C-t*I-r*y)*O,e[10]=(a*T-_*M+g*v)*O,e[11]=(m*M-p*T-h*v)*O,e[12]=(l*E-o*P-u*y)*O,e[13]=(t*P-n*E+s*y)*O,e[14]=(_*b-a*A-c*v)*O,e[15]=(p*A-m*b+d*v)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,l=e.y,u=e.z,f=r*o,p=r*l;return this.set(f*o+n,f*l-s*u,f*u+s*l,0,f*l+s*u,p*l+n,p*u-s*o,0,f*u-s*l,p*u+s*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,l=t._z,u=t._w,f=r+r,p=o+o,m=l+l,d=r*f,h=r*p,a=r*m,_=o*p,c=o*m,g=l*m,v=u*f,b=u*p,M=u*m,A=n.x,T=n.y,x=n.z;return s[0]=(1-(_+g))*A,s[1]=(h+M)*A,s[2]=(a-b)*A,s[3]=0,s[4]=(h-M)*T,s[5]=(1-(d+g))*T,s[6]=(c+v)*T,s[7]=0,s[8]=(a+b)*x,s[9]=(c-v)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=br.set(s[0],s[1],s[2]).length();const l=br.set(s[4],s[5],s[6]).length(),u=br.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Di.copy(this);const f=1/o,p=1/l,m=1/u;return Di.elements[0]*=f,Di.elements[1]*=f,Di.elements[2]*=f,Di.elements[4]*=p,Di.elements[5]*=p,Di.elements[6]*=p,Di.elements[8]*=m,Di.elements[9]*=m,Di.elements[10]*=m,t.setFromRotationMatrix(Di),n.x=o,n.y=l,n.z=u,this}makePerspective(e,t,n,s,r,o,l=Bi,u=!1){const f=this.elements,p=2*r/(t-e),m=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s);let a,_;if(u)a=r/(o-r),_=o*r/(o-r);else if(l===Bi)a=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(l===qo)a=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return f[0]=p,f[4]=0,f[8]=d,f[12]=0,f[1]=0,f[5]=m,f[9]=h,f[13]=0,f[2]=0,f[6]=0,f[10]=a,f[14]=_,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,n,s,r,o,l=Bi,u=!1){const f=this.elements,p=2/(t-e),m=2/(n-s),d=-(t+e)/(t-e),h=-(n+s)/(n-s);let a,_;if(u)a=1/(o-r),_=o/(o-r);else if(l===Bi)a=-2/(o-r),_=-(o+r)/(o-r);else if(l===qo)a=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return f[0]=p,f[4]=0,f[8]=0,f[12]=d,f[1]=0,f[5]=m,f[9]=0,f[13]=h,f[2]=0,f[6]=0,f[10]=a,f[14]=_,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const br=new Y,Di=new dt,Ap=new Y(0,0,0),Rp=new Y(1,1,1),Ts=new Y,na=new Y,li=new Y,pu=new dt,mu=new jt;class Xn{constructor(e=0,t=0,n=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],l=s[8],u=s[1],f=s[5],p=s[9],m=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,f),this._z=0);break;case"YXZ":this._x=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,h),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(l,h));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,f),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-p,h),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cp=0;const gu=new Y,Sr=new jt,hs=new dt,ia=new Y,co=new Y,Pp=new Y,Dp=new jt,xu=new Y(1,0,0),vu=new Y(0,1,0),_u=new Y(0,0,1),yu={type:"added"},Lp={type:"removed"},wr={type:"childadded",child:null},N0={type:"childremoved",child:null};class tn extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Y,t=new Xn,n=new jt,s=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new gt}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hs.lookAt(co,ia,this.up):hs.lookAt(ia,co,this.up),this.quaternion.setFromRotationMatrix(hs),s&&(hs.extractRotation(s.matrixWorld),Sr.setFromRotationMatrix(hs),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yu),wr.child=e,this.dispatchEvent(wr),wr.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lp),N0.child=e,this.dispatchEvent(N0),N0.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hs.multiply(e.parent.matrixWorld)),e.applyMatrix4(hs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yu),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,l=r.length;o<l;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let f=0,p=u.length;f<p;f++){const m=u[f];r(e.shapes,m)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,f=this.material.length;u<f;u++)l.push(r(e.materials,this.material[u]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];s.animations.push(r(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),f=o(e.textures),p=o(e.images),m=o(e.shapes),d=o(e.skeletons),h=o(e.animations),a=o(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),a.length>0&&(n.nodes=a)}return n.object=s,n;function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}tn.DEFAULT_UP=new Y(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zt extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class F0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const l=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const _ of e.hand.values()){const c=t.getJointPose(_,n),g=this._getHandJoint(f,_);c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=c.radius),g.visible=c!==null}const p=f.joints["index-finger-tip"],m=f.joints["thumb-tip"],d=p.position.distanceTo(m.position),h=.02,a=.005;f.inputState.pinching&&d>h+a?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&d<=h-a&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,u.eventsEnabled&&u.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return l!==null&&(l.visible=s!==null),u!==null&&(u.visible=r!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Es={h:0,s:0,l:0},sa={h:0,s:0,l:0};function O0(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Pt.workingColorSpace){if(e=_p(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=O0(o,r,e+1/3),this.g=O0(o,r,e),this.b=O0(o,r,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function n(r){r!==void 0&&parseFloat(r)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const n=Th[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Pt.workingToColorSpace(Fn.copy(this),e),Math.round(St(Fn.r*255,0,255))*65536+Math.round(St(Fn.g*255,0,255))*256+Math.round(St(Fn.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Fn.copy(this),t);const n=Fn.r,s=Fn.g,r=Fn.b,o=Math.max(n,s,r),l=Math.min(n,s,r);let u,f;const p=(l+o)/2;if(l===o)u=0,f=0;else{const m=o-l;switch(f=p<=.5?m/(o+l):m/(2-o-l),o){case n:u=(s-r)/m+(s<r?6:0);break;case s:u=(r-n)/m+2;break;case r:u=(n-s)/m+4;break}u/=6}return e.h=u,e.s=f,e.l=p,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ln){Pt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,n=Fn.g,s=Fn.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Es),this.setHSL(Es.h+e,Es.s+t,Es.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Es),e.getHSL(sa);const n=D0(Es.h,sa.h,t),s=D0(Es.s,sa.s,t),r=D0(Es.l,sa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ue;Ue.NAMES=Th;class Fc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new Fc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sc extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Li=new Y,ds=new Y,k0=new Y,ps=new Y,Tr=new Y,Er=new Y,Mu=new Y,B0=new Y,G0=new Y,V0=new Y,H0=new Kt,W0=new Kt,X0=new Kt;class bi{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Li.subVectors(e,t),s.cross(Li);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Li.subVectors(s,t),ds.subVectors(n,t),k0.subVectors(e,t);const o=Li.dot(Li),l=Li.dot(ds),u=Li.dot(k0),f=ds.dot(ds),p=ds.dot(k0),m=o*f-l*l;if(m===0)return r.set(0,0,0),null;const d=1/m,h=(f*u-l*p)*d,a=(o*p-l*u)*d;return r.set(1-h-a,a,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getInterpolation(e,t,n,s,r,o,l,u){return this.getBarycoord(e,t,n,s,ps)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,ps.x),u.addScaledVector(o,ps.y),u.addScaledVector(l,ps.z),u)}static getInterpolatedAttribute(e,t,n,s,r,o){return H0.setScalar(0),W0.setScalar(0),X0.setScalar(0),H0.fromBufferAttribute(e,t),W0.fromBufferAttribute(e,n),X0.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(H0,r.x),o.addScaledVector(W0,r.y),o.addScaledVector(X0,r.z),o}static isFrontFacing(e,t,n,s){return Li.subVectors(n,t),ds.subVectors(e,t),Li.cross(ds).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ds.subVectors(this.a,this.b),Li.cross(ds).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return bi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,l;Tr.subVectors(s,n),Er.subVectors(r,n),B0.subVectors(e,n);const u=Tr.dot(B0),f=Er.dot(B0);if(u<=0&&f<=0)return t.copy(n);G0.subVectors(e,s);const p=Tr.dot(G0),m=Er.dot(G0);if(p>=0&&m<=p)return t.copy(s);const d=u*m-p*f;if(d<=0&&u>=0&&p<=0&&u-p>0)return o=u/(u-p),t.copy(n).addScaledVector(Tr,o);V0.subVectors(e,r);const h=Tr.dot(V0),a=Er.dot(V0);if(a>=0&&h<=a)return t.copy(r);const _=h*f-u*a;if(_<=0&&f>=0&&a<=0)return l=f/(f-a),t.copy(n).addScaledVector(Er,l);const c=p*a-h*m;if(c<=0&&m-p>=0&&h-a>=0)return Mu.subVectors(r,s),l=(m-p)/(m-p+(h-a)),t.copy(s).addScaledVector(Mu,l);const g=1/(c+_+d);return o=_*g,l=d*g,t.copy(n).addScaledVector(Tr,o).addScaledVector(Er,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hs{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,l=r.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,zi):zi.fromBufferAttribute(r,o),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(uo),oa.subVectors(this.max,uo),Ar.subVectors(e.a,uo),Rr.subVectors(e.b,uo),Cr.subVectors(e.c,uo),As.subVectors(Rr,Ar),Rs.subVectors(Cr,Rr),Zs.subVectors(Ar,Cr);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-Zs.z,Zs.y,As.z,0,-As.x,Rs.z,0,-Rs.x,Zs.z,0,-Zs.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-Zs.y,Zs.x,0];return!q0(t,Ar,Rr,Cr,oa)||(t=[1,0,0,0,1,0,0,0,1],!q0(t,Ar,Rr,Cr,oa))?!1:(aa.crossVectors(As,Rs),t=[aa.x,aa.y,aa.z],q0(t,Ar,Rr,Cr,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ms=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],zi=new Y,ra=new Hs,Ar=new Y,Rr=new Y,Cr=new Y,As=new Y,Rs=new Y,Zs=new Y,uo=new Y,oa=new Y,aa=new Y,Ks=new Y;function q0(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ks.fromArray(i,r);const l=s.x*Math.abs(Ks.x)+s.y*Math.abs(Ks.y)+s.z*Math.abs(Ks.z),u=e.dot(Ks),f=t.dot(Ks),p=n.dot(Ks);if(Math.max(-Math.max(u,f,p),Math.min(u,f,p))>l)return!1}return!0}const mn=new Y,la=new Le;let Ip=0;class an extends mr{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ip++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_h,this.updateRanges=[],this.gpuType=wi,this.version=0,this._normalizationScale=e!==void 0?v0(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Mh(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):bh(e,this.array)}}class Eh extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ah extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Up=new Hs,fo=new Y,Y0=new Y;class rs{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Up.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const t=fo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Y0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(Y0)),this.expandByPoint(fo.copy(e.center).sub(Y0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Np=0;const pi=new dt,$0=new tn,Pr=new Y,ci=new Hs,ho=new Hs,bn=new Y;class kt extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mp(e)?Ah:Eh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,n){return pi.makeTranslation(e,t,n),this.applyMatrix4(pi),this}scale(e,t,n){return pi.makeScale(e,t,n),this.applyMatrix4(pi),this}lookAt(e){return $0.lookAt(e),$0.updateMatrix(),this.applyMatrix4($0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new at(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];ci.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ho.setFromBufferAttribute(l),this.morphTargetsRelative?(bn.addVectors(ci.min,ho.min),ci.expandByPoint(bn),bn.addVectors(ci.max,ho.max),ci.expandByPoint(bn)):(ci.expandByPoint(ho.min),ci.expandByPoint(ho.max))}ci.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){const l=t[r],u=this.morphTargetsRelative;for(let f=0,p=l.count;f<p;f++)bn.fromBufferAttribute(l,f),u&&(Pr.fromBufferAttribute(e,f),bn.add(Pr)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const l=[],u=[],f=new Uint8Array(n.count);for(let E=0;E<n.count;E++)l[E]=new Y,u[E]=new Y;const p=new Y,m=new Y,d=new Y,h=new Le,a=new Le,_=new Le,c=new Y,g=new Y;function v(E,C,P){f[E]=f[C]=f[P]=1,p.fromBufferAttribute(n,E),m.fromBufferAttribute(n,C),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,E),a.fromBufferAttribute(r,C),_.fromBufferAttribute(r,P),m.sub(p),d.sub(p),a.sub(h),_.sub(h);const I=1/(a.x*_.y-_.x*a.y);isFinite(I)&&(c.copy(m).multiplyScalar(_.y).addScaledVector(d,-a.y).multiplyScalar(I),g.copy(d).multiplyScalar(a.x).addScaledVector(m,-_.x).multiplyScalar(I),l[E].add(c),l[C].add(c),l[P].add(c),u[E].add(g),u[C].add(g),u[P].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let E=0,C=b.length;E<C;++E){const P=b[E],I=P.start,q=P.count;for(let L=I,O=I+q;L<O;L+=3)v(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new Y,A=new Y,T=new Y,x=new Y;function y(E){T.fromBufferAttribute(s,E),x.copy(T);const C=l[E];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(x,C);const I=A.dot(u[E])<0?-1:1;o.setXYZW(E,M.x,M.y,M.z,I)}for(let E=0,C=n.count;E<C;++E)f[E]&&y(E);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new Y,r=new Y,o=new Y,l=new Y,u=new Y,f=new Y,p=new Y,m=new Y;if(e)for(let d=0,h=e.count;d<h;d+=3){const a=e.getX(d+0),_=e.getX(d+1),c=e.getX(d+2);s.fromBufferAttribute(t,a),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,c),p.subVectors(o,r),m.subVectors(s,r),p.cross(m),l.fromBufferAttribute(n,a),u.fromBufferAttribute(n,_),f.fromBufferAttribute(n,c),l.add(p),u.add(p),f.add(p),n.setXYZ(a,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(c,f.x,f.y,f.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),p.subVectors(o,r),m.subVectors(s,r),p.cross(m),n.setXYZ(d+0,p.x,p.y,p.z),n.setXYZ(d+1,p.x,p.y,p.z),n.setXYZ(d+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(l,u){const f=l.array,p=l.itemSize,m=l.normalized,d=new f.constructor(u.length*p);let h=0,a=0;for(let _=0,c=u.length;_<c;_++){l.isInterleavedBufferAttribute?h=u[_]*l.data.stride+l.offset:h=u[_]*p;for(let g=0;g<p;g++)d[a++]=f[h++]}return new an(d,p,m)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const l in s){const u=s[l],f=e(u,n);t.setAttribute(l,f)}const r=this.morphAttributes;for(const l in r){const u=[],f=r[l];for(let p=0,m=f.length;p<m;p++){const d=f[p],h=e(d,n);u.push(h)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const s={};let r=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],p=[];for(let m=0,d=f.length;m<d;m++){const h=f[m];p.push(h.toJSON(e.data))}p.length>0&&(s[u]=p,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const r=e.morphAttributes;for(const f in r){const p=[],m=r[f];for(let d=0,h=m.length;d<h;d++)p.push(m[d].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,p=o.length;f<p;f++){const m=o[f];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_h,this.updateRanges=[],this.version=0,this.uuid=ys()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=bu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const t=bu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function bu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ys()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const $n=new Y;class d0{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?v0(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){f0("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new d0(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){f0("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Mh(e,this.data.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):bh(e,this.data.array)}}const Z0=new Y,Op=new Y,kp=new gt;class Ds{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Z0.subVectors(n,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Z0),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kp.getNormalMatrix(e),s=this.coplanarPoint(Z0).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Bp=0;class Ms extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Fo,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=Ac,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=C0,this.stencilZFail=C0,this.stencilZPass=C0,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const l in r){const u=r[l];delete u.metadata,o.push(u)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ds().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rc extends Ms{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Dr;const po=new Y,Lr=new Y,zr=new Y,Ir=new Le,mo=new Le,Rh=new dt,ca=new Y,go=new Y,ua=new Y,Su=new Le,K0=new Le,wu=new Le;class Tu extends tn{constructor(e=new rc){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fp(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new d0(n,3,0,!1)),Dr.setAttribute("uv",new d0(n,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new Le(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Nt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),Rh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-zr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;fa(ca.set(-.5,-.5,0),zr,o,Lr,s,r),fa(go.set(.5,-.5,0),zr,o,Lr,s,r),fa(ua.set(.5,.5,0),zr,o,Lr,s,r),Su.set(0,0),K0.set(1,0),wu.set(1,1);let l=e.ray.intersectTriangle(ca,go,ua,!1,po);if(l===null&&(fa(go.set(-.5,.5,0),zr,o,Lr,s,r),K0.set(0,1),l=e.ray.intersectTriangle(ca,ua,go,!1,po),l===null))return;const u=e.ray.origin.distanceTo(po);u<e.near||u>e.far||t.push({distance:u,point:po.clone(),uv:bi.getInterpolation(po,ca,go,ua,Su,K0,wu,new Le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const t=super.toJSON(e);return t.object.center=this.center.toArray(),t}}function fa(i,e,t,n,s,r){Ir.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(mo.x=r*Ir.x-s*Ir.y,mo.y=s*Ir.x+r*Ir.y):mo.copy(Ir),i.copy(e),i.x+=mo.x,i.y+=mo.y,i.applyMatrix4(Rh)}const gs=new Y,J0=new Y,ha=new Y,da=new Y;class _0{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gs.copy(this.origin).addScaledVector(this.direction,t),gs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){J0.copy(e).add(t).multiplyScalar(.5),ha.copy(t).sub(e).normalize(),da.copy(this.origin).sub(J0);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ha),l=da.dot(this.direction),u=-da.dot(ha),f=da.lengthSq(),p=Math.abs(1-o*o);let m,d,h,a;if(p>0)if(m=o*u-l,d=o*l-u,a=r*p,m>=0)if(d>=-a)if(d<=a){const _=1/p;m*=_,d*=_,h=m*(m+o*d+2*l)+d*(o*m+d+2*u)+f}else d=r,m=Math.max(0,-(o*d+l)),h=-m*m+d*(d+2*u)+f;else d=-r,m=Math.max(0,-(o*d+l)),h=-m*m+d*(d+2*u)+f;else d<=-a?(m=Math.max(0,-(-o*r+l)),d=m>0?-r:Math.min(Math.max(-r,-u),r),h=-m*m+d*(d+2*u)+f):d<=a?(m=0,d=Math.min(Math.max(-r,-u),r),h=d*(d+2*u)+f):(m=Math.max(0,-(o*r+l)),d=m>0?r:Math.min(Math.max(-r,-u),r),h=-m*m+d*(d+2*u)+f);else d=o>0?-r:r,m=Math.max(0,-(o*d+l)),h=-m*m+d*(d+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(J0).addScaledVector(ha,d),h}intersectSphere(e,t){if(e.radius<0)return null;gs.subVectors(e.center,this.origin);const n=gs.dot(this.direction),s=gs.dot(gs)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,l,u;const f=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,d=this.origin;return f>=0?(n=(e.min.x-d.x)*f,s=(e.max.x-d.x)*f):(n=(e.max.x-d.x)*f,s=(e.min.x-d.x)*f),p>=0?(r=(e.min.y-d.y)*p,o=(e.max.y-d.y)*p):(r=(e.max.y-d.y)*p,o=(e.min.y-d.y)*p),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(l=(e.min.z-d.z)*m,u=(e.max.z-d.z)*m):(l=(e.max.z-d.z)*m,u=(e.min.z-d.z)*m),n>u||l>s)||((l>n||n!==n)&&(n=l),(u<s||s!==s)&&(s=u),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gs)!==null}intersectTriangle(e,t,n,s,r){const o=this.origin,l=this.direction,u=l.x,f=l.y,p=l.z,m=e.x-o.x,d=e.y-o.y,h=e.z-o.z,a=t.x-o.x,_=t.y-o.y,c=t.z-o.z,g=n.x-o.x,v=n.y-o.y,b=n.z-o.z,M=Math.abs(u),A=Math.abs(f),T=Math.abs(p);let x,y,E,C,P,I,q,L,O,H,X,Z;if(M>=A&&M>=T?(E=u,I=m,O=a,Z=g,u>=0?(x=f,y=p,C=d,P=h,q=_,L=c,H=v,X=b):(x=p,y=f,C=h,P=d,q=c,L=_,H=b,X=v)):A>=T?(E=f,I=d,O=_,Z=v,f>=0?(x=p,y=u,C=h,P=m,q=c,L=a,H=b,X=g):(x=u,y=p,C=m,P=h,q=a,L=c,H=g,X=b)):(E=p,I=h,O=c,Z=b,p>=0?(x=u,y=f,C=m,P=d,q=a,L=_,H=g,X=v):(x=f,y=u,C=d,P=m,q=_,L=a,H=v,X=g)),E===0)return null;const $=x/E,J=y/E,re=1/E,ye=C-$*I,ae=P-J*I,B=q-$*O,ee=L-J*O,xe=H-$*Z,ze=X-J*Z,te=xe*ee-ze*B,be=ye*ze-ae*xe,ue=B*ae-ee*ye;if(s){if(te<0||be<0||ue<0)return null}else if((te<0||be<0||ue<0)&&(te>0||be>0||ue>0))return null;const Me=te+be+ue;if(Me===0)return null;const qe=re*(te*I+be*O+ue*Z);return(Me>0?qe<0:qe>0)?null:this.at(qe/Me,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fi extends Ms{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Eu=new dt,Js=new _0,pa=new rs,Au=new Y,ma=new Y,ga=new Y,xa=new Y,Q0=new Y,va=new Y,Ru=new Y,_a=new Y;class ht extends tn{constructor(e=new kt,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const l=this.morphTargetInfluences;if(r&&l){va.set(0,0,0);for(let u=0,f=r.length;u<f;u++){const p=l[u],m=r[u];p!==0&&(Q0.fromBufferAttribute(m,e),o?va.addScaledVector(Q0,p):va.addScaledVector(Q0.sub(t),p))}t.add(va)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),Js.copy(e.ray).recast(e.near),!(pa.containsPoint(Js.origin)===!1&&(Js.intersectSphere(pa,Au)===null||Js.origin.distanceToSquared(Au)>(e.far-e.near)**2))&&(Eu.copy(r).invert(),Js.copy(e.ray).applyMatrix4(Eu),!(n.boundingBox!==null&&Js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,l=r.index,u=r.attributes.position,f=r.attributes.uv,p=r.attributes.uv1,m=r.attributes.normal,d=r.groups,h=r.drawRange;if(l!==null)if(Array.isArray(o))for(let a=0,_=d.length;a<_;a++){const c=d[a],g=o[c.materialIndex],v=Math.max(c.start,h.start),b=Math.min(l.count,Math.min(c.start+c.count,h.start+h.count));for(let M=v,A=b;M<A;M+=3){const T=l.getX(M),x=l.getX(M+1),y=l.getX(M+2);s=ya(this,g,e,n,f,p,m,T,x,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{const a=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let c=a,g=_;c<g;c+=3){const v=l.getX(c),b=l.getX(c+1),M=l.getX(c+2);s=ya(this,o,e,n,f,p,m,v,b,M),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}else if(u!==void 0)if(Array.isArray(o))for(let a=0,_=d.length;a<_;a++){const c=d[a],g=o[c.materialIndex],v=Math.max(c.start,h.start),b=Math.min(u.count,Math.min(c.start+c.count,h.start+h.count));for(let M=v,A=b;M<A;M+=3){const T=M,x=M+1,y=M+2;s=ya(this,g,e,n,f,p,m,T,x,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=c.materialIndex,t.push(s))}}else{const a=Math.max(0,h.start),_=Math.min(u.count,h.start+h.count);for(let c=a,g=_;c<g;c+=3){const v=c,b=c+1,M=c+2;s=ya(this,o,e,n,f,p,m,v,b,M),s&&(s.faceIndex=Math.floor(c/3),t.push(s))}}}}function Gp(i,e,t,n,s,r,o,l){let u;if(e.side===zn?u=n.intersectTriangle(o,r,s,!0,l):u=n.intersectTriangle(s,r,o,e.side===ur,l),u===null)return null;_a.copy(l),_a.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(_a);return f<t.near||f>t.far?null:{distance:f,point:_a.clone(),object:i}}function ya(i,e,t,n,s,r,o,l,u,f){i.getVertexPosition(l,ma),i.getVertexPosition(u,ga),i.getVertexPosition(f,xa);const p=Gp(i,e,t,n,ma,ga,xa,Ru);if(p){const m=new Y;bi.getBarycoord(Ru,ma,ga,xa,m),s&&(p.uv=bi.getInterpolatedAttribute(s,l,u,f,m,new Le)),r&&(p.uv1=bi.getInterpolatedAttribute(r,l,u,f,m,new Le)),o&&(p.normal=bi.getInterpolatedAttribute(o,l,u,f,m,new Y),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const d={a:l,b:u,c:f,normal:new Y,materialIndex:0};bi.getNormal(ma,ga,xa,d.normal),p.face=d,p.barycoord=m}return p}const xo=new Kt,Cu=new Kt,Pu=new Kt,Vp=new Kt,Du=new dt,Ma=new Y,j0=new rs,Lu=new dt,el=new _0;class Hp extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lu,this.bindMatrix=new dt,this.bindMatrixInverse=new dt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hs),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingBox.expandByPoint(Ma)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ma),this.boundingSphere.expandByPoint(Ma)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),j0.copy(this.boundingSphere),j0.applyMatrix4(s),e.ray.intersectsSphere(j0)!==!1&&(Lu.copy(s).invert(),el.copy(e.ray).applyMatrix4(Lu),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,el)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Kt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ft("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Cu.fromBufferAttribute(s.attributes.skinIndex,e),Pu.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(xo.copy(t),t.set(0,0,0,0)):(xo.set(t.x,t.y,t.z,1),t.set(0,0,0)),xo.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Pu.getComponent(r);if(o!==0){const l=Cu.getComponent(r);Du.multiplyMatrices(n.bones[l].matrixWorld,n.boneInverses[l]),t.addScaledVector(Vp.copy(xo).applyMatrix4(Du),o)}}return t.isVector4&&(t.w=xo.w),t.applyMatrix4(this.bindMatrixInverse)}}class Ch extends tn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ws extends Hn{constructor(e=null,t=1,n=1,s,r,o,l,u,f=vn,p=vn,m,d){super(null,o,l,u,f,p,s,r,m,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zu=new dt,Wp=new dt;class Oc{constructor(e=[],t=[]){this.uuid=ys(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ft("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new dt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new dt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const l=e[r]?e[r].matrixWorld:Wp;zu.multiplyMatrices(l,t[r]),zu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Oc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ws(t,e,e,Vn,wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(ft("Skeleton: No bone found with UUID:",r),o=new Ch),this.bones.push(o),this.boneInverses.push(new dt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const l=n[s];e.boneInverses.push(l.toArray())}return e}}class oc extends an{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ur=new dt,Iu=new dt,ba=[],Uu=new Hs,Xp=new dt,vo=new ht,_o=new rs;class kc extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),Uu.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(Uu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ur),_o.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(_o)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(vo.geometry=this.geometry,vo.material=this.material,vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(n),e.ray.intersectsSphere(_o)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ur),Iu.multiplyMatrices(n,Ur),vo.matrixWorld=Iu,vo.raycast(e,ba);for(let o=0,l=ba.length;o<l;o++){const u=ba[o];u.instanceId=r,u.object=this,t.push(u)}ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(s*this.count),s,this.count,Lc,wi));const r=this.morphTexture.source.data.data;let o=0;for(let f=0;f<n.length;f++)o+=n[f];const l=this.geometry.morphTargetsRelative?1:1-o,u=s*e;return r[u]=l,r.set(n,u+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qs=new rs,qp=new Le(.5,.5),Sa=new Y;class jr{constructor(e=new Ds,t=new Ds,n=new Ds,s=new Ds,r=new Ds,o=new Ds){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bi,n=!1){const s=this.planes,r=e.elements,o=r[0],l=r[1],u=r[2],f=r[3],p=r[4],m=r[5],d=r[6],h=r[7],a=r[8],_=r[9],c=r[10],g=r[11],v=r[12],b=r[13],M=r[14],A=r[15];if(s[0].setComponents(f-o,h-p,g-a,A-v).normalize(),s[1].setComponents(f+o,h+p,g+a,A+v).normalize(),s[2].setComponents(f+l,h+m,g+_,A+b).normalize(),s[3].setComponents(f-l,h-m,g-_,A-b).normalize(),n)s[4].setComponents(u,d,c,M).normalize(),s[5].setComponents(f-u,h-d,g-c,A-M).normalize();else if(s[4].setComponents(f-u,h-d,g-c,A-M).normalize(),t===Bi)s[5].setComponents(f+u,h+d,g+c,A+M).normalize();else if(t===qo)s[5].setComponents(u,d,c,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){Qs.center.set(0,0,0);const t=qp.distanceTo(e.center);return Qs.radius=.7071067811865476+t,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Sa.x=s.normal.x>0?e.max.x:e.min.x,Sa.y=s.normal.y>0?e.max.y:e.min.y,Sa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Nu=new dt;class Bc{constructor(){this.coordinateSystem=Bi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];Nu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new jr),n[s].setFromProjectionMatrix(Nu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new jr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Bc().copy(this)}}class Gc extends Ms{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const p0=new Y,m0=new Y,Fu=new dt,yo=new _0,wa=new rs,tl=new Y,Ou=new Y;class Yp extends tn{constructor(e=new kt,t=new Gc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)p0.fromBufferAttribute(t,s-1),m0.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=p0.distanceTo(m0);e.setAttribute("lineDistance",new at(n,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;Fu.copy(s).invert(),yo.copy(e.ray).applyMatrix4(Fu);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,f=this.isLineSegments?2:1,p=n.index,d=n.attributes.position;if(p!==null){const h=Math.max(0,o.start),a=Math.min(p.count,o.start+o.count);for(let _=h,c=a-1;_<c;_+=f){const g=p.getX(_),v=p.getX(_+1),b=Ta(this,e,yo,u,g,v,_);b&&t.push(b)}if(this.isLineLoop){const _=p.getX(a-1),c=p.getX(h),g=Ta(this,e,yo,u,_,c,a-1);g&&t.push(g)}}else{const h=Math.max(0,o.start),a=Math.min(d.count,o.start+o.count);for(let _=h,c=a-1;_<c;_+=f){const g=Ta(this,e,yo,u,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){const _=Ta(this,e,yo,u,a-1,h,a-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Ta(i,e,t,n,s,r,o){const l=i.geometry.attributes.position;if(p0.fromBufferAttribute(l,s),m0.fromBufferAttribute(l,r),t.distanceSqToSegment(p0,m0,tl,Ou)>n)return;tl.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(tl);if(!(f<e.near||f>e.far))return{distance:f,point:Ou.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const ku=new Y,Bu=new Y;class Ph extends Yp{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ku.fromBufferAttribute(t,s),Bu.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ku.distanceTo(Bu);e.setAttribute("lineDistance",new at(n,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dh extends Ms{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gu=new dt,ac=new _0,Ea=new rs,Aa=new Y;class Vc extends tn{constructor(e=new kt,t=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;Gu.copy(s).invert(),ac.copy(e.ray).applyMatrix4(Gu);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,f=n.index,m=n.attributes.position;if(f!==null){const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let a=d,_=h;a<_;a++){const c=f.getX(a);Aa.fromBufferAttribute(m,c),Vu(Aa,c,u,s,e,t,this)}}else{const d=Math.max(0,o.start),h=Math.min(m.count,o.start+o.count);for(let a=d,_=h;a<_;a++)Aa.fromBufferAttribute(m,a),Vu(Aa,a,u,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Vu(i,e,t,n,s,r,o){const l=ac.distanceSqToPoint(i);if(l<t){const u=new Y;ac.closestPointToPoint(i,u),u.applyMatrix4(n);const f=s.ray.origin.distanceTo(u);if(f<s.near||f>s.far)return;r.push({distance:f,distanceToRay:Math.sqrt(l),point:u,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Lh extends Hn{constructor(e=[],t=Kr,n,s,r,o,l,u,f,p){super(e,t,n,s,r,o,l,u,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Os extends Hn{constructor(e,t,n,s,r,o,l,u,f){super(e,t,n,s,r,o,l,u,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eo extends Hn{constructor(e,t,n=is,s,r,o,l=vn,u=vn,f,p=Bs,m=1){if(p!==Bs&&p!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:m};super(d,s,r,o,l,u,p,n,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class zh extends eo{constructor(e,t=is,n=Kr,s,r,o=vn,l=vn,u,f=Bs){const p={width:e,height:e,depth:1},m=[p,p,p,p,p,p];super(e,e,t,n,s,r,o,l,u,f),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ih extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xn extends kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const u=[],f=[],p=[],m=[];let d=0,h=0;a("z","y","x",-1,-1,n,t,e,o,r,0),a("z","y","x",1,-1,n,t,-e,o,r,1),a("x","z","y",1,1,e,n,t,s,o,2),a("x","z","y",1,-1,e,n,-t,s,o,3),a("x","y","z",1,-1,e,t,n,s,r,4),a("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(u),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(m,2));function a(_,c,g,v,b,M,A,T,x,y,E){const C=M/x,P=A/y,I=M/2,q=A/2,L=T/2,O=x+1,H=y+1;let X=0,Z=0;const $=new Y;for(let J=0;J<H;J++){const re=J*P-q;for(let ye=0;ye<O;ye++){const ae=ye*C-I;$[_]=ae*v,$[c]=re*b,$[g]=L,f.push($.x,$.y,$.z),$[_]=0,$[c]=0,$[g]=T>0?1:-1,p.push($.x,$.y,$.z),m.push(ye/x),m.push(1-J/y),X+=1}}for(let J=0;J<y;J++)for(let re=0;re<x;re++){const ye=d+re+O*J,ae=d+re+O*(J+1),B=d+(re+1)+O*(J+1),ee=d+(re+1)+O*J;u.push(ye,ae,ee),u.push(ae,B,ee),Z+=6}l.addGroup(h,Z,E),h+=Z,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class so extends kt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],l=[],u=[],f=[],p=t/2,m=Math.PI/2*e,d=t,h=2*m+d,a=n*2+r,_=s+1,c=new Y,g=new Y;for(let v=0;v<=a;v++){let b=0,M=0,A=0,T=0;if(v<=n){const E=v/n,C=E*Math.PI/2;M=-p-e*Math.cos(C),A=e*Math.sin(C),T=-e*Math.cos(C),b=E*m}else if(v<=n+r){const E=(v-n)/r;M=-p+E*t,A=e,T=0,b=m+E*d}else{const E=(v-n-r)/n,C=E*Math.PI/2;M=p+e*Math.sin(C),A=e*Math.cos(C),T=e*Math.sin(C),b=m+d+E*m}const x=Math.max(0,Math.min(1,b/h));let y=0;v===0?y=.5/s:v===a&&(y=-.5/s);for(let E=0;E<=s;E++){const C=E/s,P=C*Math.PI*2,I=Math.sin(P),q=Math.cos(P);g.x=-A*q,g.y=M,g.z=A*I,l.push(g.x,g.y,g.z),c.set(-A*q,T,A*I),c.normalize(),u.push(c.x,c.y,c.z),f.push(C+y,x)}if(v>0){const E=(v-1)*_;for(let C=0;C<s;C++){const P=E+C,I=E+C+1,q=v*_+C,L=v*_+C+1;o.push(P,I,q),o.push(I,L,q)}}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class cn extends kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:u};const f=this;s=Math.floor(s),r=Math.floor(r);const p=[],m=[],d=[],h=[];let a=0;const _=[],c=n/2;let g=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(p),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(h,2));function v(){const M=new Y,A=new Y;let T=0;const x=(t-e)/n;for(let y=0;y<=r;y++){const E=[],C=y/r,P=C*(t-e)+e;for(let I=0;I<=s;I++){const q=I/s,L=q*u+l,O=Math.sin(L),H=Math.cos(L);A.x=P*O,A.y=-C*n+c,A.z=P*H,m.push(A.x,A.y,A.z),M.set(O,x,H).normalize(),d.push(M.x,M.y,M.z),h.push(q,1-C),E.push(a++)}_.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){const C=_[E][y],P=_[E+1][y],I=_[E+1][y+1],q=_[E][y+1];(e>0||E!==0)&&(p.push(C,P,q),T+=3),(t>0||E!==r-1)&&(p.push(P,I,q),T+=3)}f.addGroup(g,T,0),g+=T}function b(M){const A=a,T=new Le,x=new Y;let y=0;const E=M===!0?e:t,C=M===!0?1:-1;for(let I=1;I<=s;I++)m.push(0,c*C,0),d.push(0,C,0),h.push(.5,.5),a++;const P=a;for(let I=0;I<=s;I++){const L=I/s*u+l,O=Math.cos(L),H=Math.sin(L);x.x=E*H,x.y=c*C,x.z=E*O,m.push(x.x,x.y,x.z),d.push(0,C,0),T.x=O*.5+.5,T.y=H*.5*C+.5,h.push(T.x,T.y),a++}for(let I=0;I<s;I++){const q=A+I,L=P+I;M===!0?p.push(L,L+1,q):p.push(L+1,L,q),y+=3}f.addGroup(g,y,M===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gs extends cn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,e,t,n,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(e){return new Gs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jo extends kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];l(s),f(n),p(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(v){const b=new Y,M=new Y,A=new Y;for(let T=0;T<t.length;T+=3)h(t[T+0],b),h(t[T+1],M),h(t[T+2],A),u(b,M,A,v)}function u(v,b,M,A){const T=A+1,x=[];for(let y=0;y<=T;y++){x[y]=[];const E=v.clone().lerp(M,y/T),C=b.clone().lerp(M,y/T),P=T-y;for(let I=0;I<=P;I++)I===0&&y===T?x[y][I]=E:x[y][I]=E.clone().lerp(C,I/P)}for(let y=0;y<T;y++)for(let E=0;E<2*(T-y)-1;E++){const C=Math.floor(E/2);E%2===0?(d(x[y][C+1]),d(x[y+1][C]),d(x[y][C])):(d(x[y][C+1]),d(x[y+1][C+1]),d(x[y+1][C]))}}function f(v){const b=new Y;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(v),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function p(){const v=new Y;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];const M=c(v)/2/Math.PI+.5,A=g(v)/Math.PI+.5;o.push(M,1-A)}a(),m()}function m(){for(let v=0;v<o.length;v+=6){const b=o[v+0],M=o[v+2],A=o[v+4],T=Math.max(b,M,A),x=Math.min(b,M,A);T>.9&&x<.1&&(b<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function h(v,b){const M=v*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function a(){const v=new Y,b=new Y,M=new Y,A=new Y,T=new Le,x=new Le,y=new Le;for(let E=0,C=0;E<r.length;E+=9,C+=6){v.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),T.set(o[C+0],o[C+1]),x.set(o[C+2],o[C+3]),y.set(o[C+4],o[C+5]),A.copy(v).add(b).add(M).divideScalar(3);const P=c(A);_(T,C+0,v,P),_(x,C+2,b,P),_(y,C+4,M,P)}}function _(v,b,M,A){A<0&&v.x===1&&(o[b]=v.x-1),M.x===0&&M.z===0&&(o[b]=A/2/Math.PI+.5)}function c(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.vertices,e.indices,e.radius,e.detail)}}class os{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ft("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let l=0,u=r-1,f;for(;l<=u;)if(s=Math.floor(l+(u-l)/2),f=n[s]-o,f<0)l=s+1;else if(f>0)u=s-1;else{u=s;break}if(s=u,n[s]===o)return s/(r-1);const p=n[s],d=n[s+1]-p,h=(o-p)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),l=this.getPoint(r),u=t||(o.isVector2?new Le:new Y);return u.copy(l).sub(o).normalize(),u}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new Y,s=[],r=[],o=[],l=new Y,u=new dt;for(let h=0;h<=e;h++){const a=h/e;s[h]=this.getTangentAt(a,new Y)}r[0]=new Y,o[0]=new Y;let f=Number.MAX_VALUE;const p=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);p<=f&&(f=p,n.set(1,0,0)),m<=f&&(f=m,n.set(0,1,0)),d<=f&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),l.crossVectors(s[h-1],s[h]),l.length()>Number.EPSILON){l.normalize();const a=Math.acos(St(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(u.makeRotationAxis(l,a))}o[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(St(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(l.crossVectors(r[0],r[e]))>0&&(h=-h);for(let a=1;a<=e;a++)r[a].applyMatrix4(u.makeRotationAxis(s[a],h*a)),o[a].crossVectors(s[a],r[a])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Hc extends os{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=u}getPoint(e,t=new Le){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const l=this.aStartAngle+e*r;let u=this.aX+this.xRadius*Math.cos(l),f=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const p=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=u-this.aX,h=f-this.aY;u=d*p-h*m+this.aX,f=d*m+h*p+this.aY}return n.set(u,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $p extends Hc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Wc(){let i=0,e=0,t=0,n=0;function s(r,o,l,u){i=r,e=l,t=-3*r+3*o-2*l-u,n=2*r-2*o+l+u}return{initCatmullRom:function(r,o,l,u,f){s(o,l,f*(l-r),f*(u-o))},initNonuniformCatmullRom:function(r,o,l,u,f,p,m){let d=(o-r)/f-(l-r)/(f+p)+(l-o)/p,h=(l-o)/p-(u-o)/(p+m)+(u-l)/m;d*=p,h*=p,s(o,l,d,h)},calc:function(r){const o=r*r,l=o*r;return i+e*r+t*o+n*l}}}const Hu=new Y,Wu=new Y,nl=new Wc,il=new Wc,sl=new Wc;class Vs extends os{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new Y){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let l=Math.floor(o),u=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:u===0&&l===r-1&&(l=r-2,u=1);let f,p;this.closed||l>0?f=s[(l-1)%r]:(Wu.subVectors(s[0],s[1]).add(s[0]),f=Wu);const m=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?p=s[(l+2)%r]:(Hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),p=Hu),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let a=Math.pow(f.distanceToSquared(m),h),_=Math.pow(m.distanceToSquared(d),h),c=Math.pow(d.distanceToSquared(p),h);_<1e-4&&(_=1),a<1e-4&&(a=_),c<1e-4&&(c=_),nl.initNonuniformCatmullRom(f.x,m.x,d.x,p.x,a,_,c),il.initNonuniformCatmullRom(f.y,m.y,d.y,p.y,a,_,c),sl.initNonuniformCatmullRom(f.z,m.z,d.z,p.z,a,_,c)}else this.curveType==="catmullrom"&&(nl.initCatmullRom(f.x,m.x,d.x,p.x,this.tension),il.initCatmullRom(f.y,m.y,d.y,p.y,this.tension),sl.initCatmullRom(f.z,m.z,d.z,p.z,this.tension));return n.set(nl.calc(u),il.calc(u),sl.calc(u)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Y().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xu(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,l=i*i,u=i*l;return(2*t-2*n+r+o)*u+(-3*t+3*n-2*r-o)*l+r*i+t}function Zp(i,e){const t=1-i;return t*t*e}function Kp(i,e){return 2*(1-i)*i*e}function Jp(i,e){return i*i*e}function Oo(i,e,t,n){return Zp(i,e)+Kp(i,t)+Jp(i,n)}function Qp(i,e){const t=1-i;return t*t*t*e}function jp(i,e){const t=1-i;return 3*t*t*i*e}function em(i,e){return 3*(1-i)*i*i*e}function tm(i,e){return i*i*i*e}function ko(i,e,t,n,s){return Qp(i,e)+jp(i,t)+em(i,n)+tm(i,s)}class Uh extends os{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){const n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(ko(e,s.x,r.x,o.x,l.x),ko(e,s.y,r.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nm extends os{constructor(e=new Y,t=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Y){const n=t,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(ko(e,s.x,r.x,o.x,l.x),ko(e,s.y,r.y,o.y,l.y),ko(e,s.z,r.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nh extends os{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class im extends os{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Fh extends os{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Oo(e,s.x,r.x,o.x),Oo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends os{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Oo(e,s.x,r.x,o.x),Oo(e,s.y,r.y,o.y),Oo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kh extends os{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),l=r-o,u=s[o===0?o:o-1],f=s[o],p=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(Xu(l,u.x,f.x,p.x,m.x),Xu(l,u.y,f.y,p.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Le().fromArray(s))}return this}}var g0=Object.freeze({__proto__:null,ArcCurve:$p,CatmullRomCurve3:Vs,CubicBezierCurve:Uh,CubicBezierCurve3:nm,EllipseCurve:Hc,LineCurve:Nh,LineCurve3:im,QuadraticBezierCurve:Fh,QuadraticBezierCurve3:Oh,SplineCurve:kh});class sm extends os{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new g0[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,l=this.curves[r],u=l.getLength(),f=u===0?0:1-o/u;return l.getPointAt(f,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],l=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,u=o.getPoints(l);for(let f=0;f<u.length;f++){const p=u[f];n&&n.equals(p)||(t.push(p),n=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new g0[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class qu extends sm{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Nh(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Fh(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const l=new Uh(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new kh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(e+l,t+u,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,l,u){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+f,t+p,n,s,r,o,l,u),this}absellipse(e,t,n,s,r,o,l,u){const f=new Hc(e,t,n,s,r,o,l,u);if(this.curves.length>0){const m=f.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(f);const p=f.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _s extends qu{constructor(e){super(e),this.uuid=ys(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new qu().fromJSON(s))}return this}}function rm(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Bh(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let l,u,f;if(n&&(r=um(i,e,r,t)),i.length>80*t){l=i[0],u=i[1];let p=l,m=u;for(let d=t;d<s;d+=t){const h=i[d],a=i[d+1];h<l&&(l=h),a<u&&(u=a),h>p&&(p=h),a>m&&(m=a)}f=Math.max(p-l,m-u),f=f!==0?32767/f:0}return Yo(r,o,t,l,u,f,0),o}function Bh(i,e,t,n,s){let r;if(s===Mm(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Yu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Yu(o/n|0,i[o],i[o+1],r);return r&&to(r,r.next)&&(Zo(r),r=r.next),r}function hr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(to(t,t.next)||on(t.prev,t,t.next)===0)){if(Zo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&mm(i,n,s,r);let l=i;for(;i.prev!==i.next;){const u=i.prev,f=i.next;if(r?am(i,n,s,r):om(i)){e.push(u.i,i.i,f.i),Zo(i),i=f.next,l=f.next;continue}if(i=f,i===l){o?o===1?(i=lm(hr(i),e),Yo(i,e,t,n,s,r,2)):o===2&&cm(i,e,t,n,s,r):Yo(hr(i),e,t,n,s,r,1);break}}}function om(i){const e=i.prev,t=i,n=i.next;if(on(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,l=e.y,u=t.y,f=n.y,p=Math.min(s,r,o),m=Math.min(l,u,f),d=Math.max(s,r,o),h=Math.max(l,u,f);let a=n.next;for(;a!==e;){if(a.x>=p&&a.x<=d&&a.y>=m&&a.y<=h&&Do(s,l,r,u,o,f,a.x,a.y)&&on(a.prev,a,a.next)>=0)return!1;a=a.next}return!0}function am(i,e,t,n){const s=i.prev,r=i,o=i.next;if(on(s,r,o)>=0)return!1;const l=s.x,u=r.x,f=o.x,p=s.y,m=r.y,d=o.y,h=Math.min(l,u,f),a=Math.min(p,m,d),_=Math.max(l,u,f),c=Math.max(p,m,d),g=lc(h,a,e,t,n),v=lc(_,c,e,t,n);let b=i.prevZ,M=i.nextZ;for(;b&&b.z>=g&&M&&M.z<=v;){if(b.x>=h&&b.x<=_&&b.y>=a&&b.y<=c&&b!==s&&b!==o&&Do(l,p,u,m,f,d,b.x,b.y)&&on(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=h&&M.x<=_&&M.y>=a&&M.y<=c&&M!==s&&M!==o&&Do(l,p,u,m,f,d,M.x,M.y)&&on(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=g;){if(b.x>=h&&b.x<=_&&b.y>=a&&b.y<=c&&b!==s&&b!==o&&Do(l,p,u,m,f,d,b.x,b.y)&&on(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=v;){if(M.x>=h&&M.x<=_&&M.y>=a&&M.y<=c&&M!==s&&M!==o&&Do(l,p,u,m,f,d,M.x,M.y)&&on(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function lm(i,e){let t=i;do{const n=t.prev,s=t.next.next;!to(n,s)&&Vh(n,t,t.next,s)&&$o(n,s)&&$o(s,n)&&(e.push(n.i,t.i,s.i),Zo(t),Zo(t.next),t=i=s),t=t.next}while(t!==i);return hr(t)}function cm(i,e,t,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&vm(o,l)){let u=Hh(o,l);o=hr(o,o.next),u=hr(u,u.next),Yo(o,e,t,n,s,r,0),Yo(u,e,t,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function um(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const l=e[r]*n,u=r<o-1?e[r+1]*n:i.length,f=Bh(i,l,u,n,!1);f===f.next&&(f.steiner=!0),s.push(xm(f))}s.sort(fm);for(let r=0;r<s.length;r++)t=hm(s[r],t);return t}function fm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function hm(i,e){const t=dm(i,e);if(!t)return e;const n=Hh(t,i);return hr(n,n.next),hr(t,t.next)}function dm(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(to(i,t))return t;do{if(to(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const m=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>r&&(r=m,o=t.x<t.next.x?t:t.next,m===n))return o}t=t.next}while(t!==e);if(!o)return null;const l=o,u=o.x,f=o.y;let p=1/0;t=o;do{if(n>=t.x&&t.x>=u&&n!==t.x&&Gh(s<f?n:r,s,u,f,s<f?r:n,s,t.x,t.y)){const m=Math.abs(s-t.y)/(n-t.x);$o(t,i)&&(m<p||m===p&&(t.x>o.x||t.x===o.x&&pm(o,t)))&&(o=t,p=m)}t=t.next}while(t!==l);return o}function pm(i,e){return on(i.prev,i,e.prev)<0&&on(e.next,i,i.next)<0}function mm(i,e,t,n){let s=i;do s.z===0&&(s.z=lc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gm(s)}function gm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,l=0;for(let f=0;f<t&&(l++,o=o.nextZ,!!o);f++);let u=t;for(;l>0||u>0&&o;)l!==0&&(u===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,l--):(s=o,o=o.nextZ,u--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function lc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Gh(i,e,t,n,s,r,o,l){return(s-o)*(e-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(t-o)*(e-l)&&(t-o)*(r-l)>=(s-o)*(n-l)}function Do(i,e,t,n,s,r,o,l){return!(i===o&&e===l)&&Gh(i,e,t,n,s,r,o,l)}function vm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!_m(i,e)&&($o(i,e)&&$o(e,i)&&ym(i,e)&&(on(i.prev,i,e.prev)||on(i,e.prev,e))||to(i,e)&&on(i.prev,i,i.next)>0&&on(e.prev,e,e.next)>0)}function on(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function to(i,e){return i.x===e.x&&i.y===e.y}function Vh(i,e,t,n){const s=Ca(on(i,e,t)),r=Ca(on(i,e,n)),o=Ca(on(t,n,i)),l=Ca(on(t,n,e));return!!(s!==r&&o!==l||s===0&&Ra(i,t,e)||r===0&&Ra(i,n,e)||o===0&&Ra(t,i,n)||l===0&&Ra(t,e,n))}function Ra(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ca(i){return i>0?1:i<0?-1:0}function _m(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $o(i,e){return on(i.prev,i,i.next)<0?on(i,e,i.next)>=0&&on(i,i.prev,e)>=0:on(i,e,i.prev)<0||on(i,i.next,e)<0}function ym(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hh(i,e){const t=cc(i.i,i.x,i.y),n=cc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yu(i,e,t,n){const s=cc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mm(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class bm{static triangulate(e,t,n=2){return rm(e,t,n)}}class Wr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Wr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];$u(e),Zu(n,e);let o=e.length;t.forEach($u);for(let u=0;u<t.length;u++)s.push(o),o+=t[u].length,Zu(n,t[u]);const l=bm.triangulate(n,s);for(let u=0;u<l.length;u+=3)r.push(l.slice(u,u+3));return r}}function $u(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class gr extends kt{constructor(e=new _s([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];o(f)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(l){const u=[],f=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,a=t.bevelSize!==void 0?t.bevelSize:h-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,c=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Sm;let b,M=!1,A,T,x,y;if(g){b=g.getSpacedPoints(p),M=!0,d=!1;const pe=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(p,pe),T=new Y,x=new Y,y=new Y}d||(c=0,h=0,a=0,_=0);const E=l.extractPoints(f);let C=E.shape;const P=E.holes;if(!Wr.isClockWise(C)){C=C.reverse();for(let pe=0,we=P.length;pe<we;pe++){const Re=P[pe];Wr.isClockWise(Re)&&(P[pe]=Re.reverse())}}function q(pe){const Re=10000000000000001e-36;let Oe=pe[0];for(let Se=1;Se<=pe.length;Se++){const Ze=Se%pe.length,He=pe[Ze],st=He.x-Oe.x,rt=He.y-Oe.y,ct=st*st+rt*rt,Q=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(Oe.x),Math.abs(Oe.y)),It=Re*Q*Q;if(ct<=It){pe.splice(Ze,1),Se--;continue}Oe=He}}q(C),P.forEach(q);const L=P.length,O=C;for(let pe=0;pe<L;pe++){const we=P[pe];C=C.concat(we)}function H(pe,we,Re){return we||Nt("ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(we,Re)}const X=C.length;function Z(pe,we,Re){let Oe,Se,Ze;const He=pe.x-we.x,st=pe.y-we.y,rt=Re.x-pe.x,ct=Re.y-pe.y,Q=He*He+st*st,It=He*ct-st*rt;if(Math.abs(It)>Number.EPSILON){const ut=Math.sqrt(Q),Ae=Math.sqrt(rt*rt+ct*ct),ve=we.x-st/ut,je=we.y+He/ut,Be=Re.x-ct/Ae,Ye=Re.y+rt/Ae,G=((Be-ve)*ct-(Ye-je)*rt)/(He*ct-st*rt);Oe=ve+He*G-pe.x,Se=je+st*G-pe.y;const U=Oe*Oe+Se*Se;if(U<=2)return new Le(Oe,Se);Ze=Math.sqrt(U/2)}else{let ut=!1;He>Number.EPSILON?rt>Number.EPSILON&&(ut=!0):He<-Number.EPSILON?rt<-Number.EPSILON&&(ut=!0):Math.sign(st)===Math.sign(ct)&&(ut=!0),ut?(Oe=-st,Se=He,Ze=Math.sqrt(Q)):(Oe=He,Se=st,Ze=Math.sqrt(Q/2))}return new Le(Oe/Ze,Se/Ze)}const $=[];for(let pe=0,we=O.length,Re=we-1,Oe=pe+1;pe<we;pe++,Re++,Oe++)Re===we&&(Re=0),Oe===we&&(Oe=0),$[pe]=Z(O[pe],O[Re],O[Oe]);const J=[];let re,ye=$.concat();for(let pe=0,we=L;pe<we;pe++){const Re=P[pe];re=[];for(let Oe=0,Se=Re.length,Ze=Se-1,He=Oe+1;Oe<Se;Oe++,Ze++,He++)Ze===Se&&(Ze=0),He===Se&&(He=0),re[Oe]=Z(Re[Oe],Re[Ze],Re[He]);J.push(re),ye=ye.concat(re)}let ae;if(c===0)ae=Wr.triangulateShape(O,P);else{const pe=[],we=[];for(let Re=0;Re<c;Re++){const Oe=Re/c,Se=h*Math.cos(Oe*Math.PI/2),Ze=a*Math.sin(Oe*Math.PI/2)+_;for(let He=0,st=O.length;He<st;He++){const rt=H(O[He],$[He],Ze);be(rt.x,rt.y,-Se),Oe===0&&pe.push(rt)}for(let He=0,st=L;He<st;He++){const rt=P[He];re=J[He];const ct=[];for(let Q=0,It=rt.length;Q<It;Q++){const ut=H(rt[Q],re[Q],Ze);be(ut.x,ut.y,-Se),Oe===0&&ct.push(ut)}Oe===0&&we.push(ct)}}ae=Wr.triangulateShape(pe,we)}const B=ae.length,ee=a+_;for(let pe=0;pe<X;pe++){const we=d?H(C[pe],ye[pe],ee):C[pe];M?(x.copy(A.normals[0]).multiplyScalar(we.x),T.copy(A.binormals[0]).multiplyScalar(we.y),y.copy(b[0]).add(x).add(T),be(y.x,y.y,y.z)):be(we.x,we.y,0)}for(let pe=1;pe<=p;pe++)for(let we=0;we<X;we++){const Re=d?H(C[we],ye[we],ee):C[we];M?(x.copy(A.normals[pe]).multiplyScalar(Re.x),T.copy(A.binormals[pe]).multiplyScalar(Re.y),y.copy(b[pe]).add(x).add(T),be(y.x,y.y,y.z)):be(Re.x,Re.y,m/p*pe)}for(let pe=c-1;pe>=0;pe--){const we=pe/c,Re=h*Math.cos(we*Math.PI/2),Oe=a*Math.sin(we*Math.PI/2)+_;for(let Se=0,Ze=O.length;Se<Ze;Se++){const He=H(O[Se],$[Se],Oe);be(He.x,He.y,m+Re)}for(let Se=0,Ze=P.length;Se<Ze;Se++){const He=P[Se];re=J[Se];for(let st=0,rt=He.length;st<rt;st++){const ct=H(He[st],re[st],Oe);M?be(ct.x,ct.y+b[p-1].y,b[p-1].x+Re):be(ct.x,ct.y,m+Re)}}}xe(),ze();function xe(){const pe=s.length/3;if(d){let we=0,Re=X*we;for(let Oe=0;Oe<B;Oe++){const Se=ae[Oe];ue(Se[2]+Re,Se[1]+Re,Se[0]+Re)}we=p+c*2,Re=X*we;for(let Oe=0;Oe<B;Oe++){const Se=ae[Oe];ue(Se[0]+Re,Se[1]+Re,Se[2]+Re)}}else{for(let we=0;we<B;we++){const Re=ae[we];ue(Re[2],Re[1],Re[0])}for(let we=0;we<B;we++){const Re=ae[we];ue(Re[0]+X*p,Re[1]+X*p,Re[2]+X*p)}}n.addGroup(pe,s.length/3-pe,0)}function ze(){const pe=s.length/3;let we=0;te(O,we),we+=O.length;for(let Re=0,Oe=P.length;Re<Oe;Re++){const Se=P[Re];te(Se,we),we+=Se.length}n.addGroup(pe,s.length/3-pe,1)}function te(pe,we){let Re=pe.length;for(;--Re>=0;){const Oe=Re;let Se=Re-1;Se<0&&(Se=pe.length-1);for(let Ze=0,He=p+c*2;Ze<He;Ze++){const st=X*Ze,rt=X*(Ze+1),ct=we+Oe+st,Q=we+Se+st,It=we+Se+rt,ut=we+Oe+rt;Me(ct,Q,It,ut)}}}function be(pe,we,Re){u.push(pe),u.push(we),u.push(Re)}function ue(pe,we,Re){qe(pe),qe(we),qe(Re);const Oe=s.length/3,Se=v.generateTopUV(n,s,Oe-3,Oe-2,Oe-1);$e(Se[0]),$e(Se[1]),$e(Se[2])}function Me(pe,we,Re,Oe){qe(pe),qe(we),qe(Oe),qe(we),qe(Re),qe(Oe);const Se=s.length/3,Ze=v.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);$e(Ze[0]),$e(Ze[1]),$e(Ze[3]),$e(Ze[1]),$e(Ze[2]),$e(Ze[3])}function qe(pe){s.push(u[pe*3+0]),s.push(u[pe*3+1]),s.push(u[pe*3+2])}function $e(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return wm(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const l=t[e.shapes[r]];n.push(l)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new g0[s.type]().fromJSON(s)),new gr(n,e.options)}}const Sm={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],l=e[n*3],u=e[n*3+1],f=e[s*3],p=e[s*3+1];return[new Le(r,o),new Le(l,u),new Le(f,p)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],l=e[t*3+1],u=e[t*3+2],f=e[n*3],p=e[n*3+1],m=e[n*3+2],d=e[s*3],h=e[s*3+1],a=e[s*3+2],_=e[r*3],c=e[r*3+1],g=e[r*3+2];return Math.abs(l-p)<Math.abs(o-f)?[new Le(o,1-u),new Le(f,1-m),new Le(d,1-a),new Le(_,1-g)]:[new Le(l,1-u),new Le(p,1-m),new Le(h,1-a),new Le(c,1-g)]}};function wm(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class no extends Jo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new no(e.radius,e.detail)}}class y0 extends kt{constructor(e=[new Le(0,-.5),new Le(.5,0),new Le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=St(s,0,Math.PI*2);const r=[],o=[],l=[],u=[],f=[],p=1/t,m=new Y,d=new Le,h=new Y,a=new Y,_=new Y;let c=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:c=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,h.x=g*1,h.y=-c,h.z=g*0,_.copy(h),h.normalize(),u.push(h.x,h.y,h.z);break;case e.length-1:_.normalize(),u.push(_.x,_.y,_.z);break;default:c=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,h.x=g*1,h.y=-c,h.z=g*0,a.copy(h),h.x+=_.x,h.y+=_.y,h.z+=_.z,h.normalize(),u.push(h.x,h.y,h.z),_.copy(a)}for(let v=0;v<=t;v++){const b=n+v*p*s,M=Math.sin(b),A=Math.cos(b);for(let T=0;T<=e.length-1;T++){m.x=e[T].x*M,m.y=e[T].y,m.z=e[T].x*A,o.push(m.x,m.y,m.z),d.x=v/t,d.y=T/(e.length-1),l.push(d.x,d.y);const x=u[3*T+0]*M,y=u[3*T+1],E=u[3*T+0]*A;f.push(x,y,E)}}for(let v=0;v<t;v++)for(let b=0;b<e.length-1;b++){const M=b+v*e.length,A=M,T=M+e.length,x=M+e.length+1,y=M+1;r.push(A,T,y),r.push(x,y,T)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(l,2)),this.setAttribute("normal",new at(f,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new y0(e.points,e.segments,e.phiStart,e.phiLength)}}class ks extends Jo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ks(e.radius,e.detail)}}class Hi extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,l=Math.floor(n),u=Math.floor(s),f=l+1,p=u+1,m=e/l,d=t/u,h=[],a=[],_=[],c=[];for(let g=0;g<p;g++){const v=g*d-o;for(let b=0;b<f;b++){const M=b*m-r;a.push(M,-v,0),_.push(0,0,1),c.push(b/l),c.push(1-g/u)}}for(let g=0;g<u;g++)for(let v=0;v<l;v++){const b=v+f*g,M=v+f*(g+1),A=v+1+f*(g+1),T=v+1+f*g;h.push(b,M,T),h.push(M,A,T)}this.setIndex(h),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xi extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+l,Math.PI);let f=0;const p=[],m=new Y,d=new Y,h=[],a=[],_=[],c=[];for(let g=0;g<=n;g++){const v=[],b=g/n,M=o+b*l,A=e*Math.cos(M),T=Math.sqrt(e*e-A*A);let x=0;g===0&&o===0?x=.5/t:g===n&&u===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const E=y/t,C=s+E*r;m.x=-T*Math.cos(C),m.y=A,m.z=T*Math.sin(C),a.push(m.x,m.y,m.z),d.copy(m).normalize(),_.push(d.x,d.y,d.z),c.push(E+x,1-b),v.push(f++)}p.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){const b=p[g][v+1],M=p[g][v],A=p[g+1][v],T=p[g+1][v+1];(g!==0||o>0)&&h.push(b,M,T),(g!==n-1||u<Math.PI)&&h.push(M,A,T)}this.setIndex(h),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xc extends Jo{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xc(e.radius,e.detail)}}class bs extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:l},n=Math.floor(n),s=Math.floor(s);const u=[],f=[],p=[],m=[],d=new Y,h=new Y,a=new Y;for(let _=0;_<=n;_++){const c=o+_/n*l;for(let g=0;g<=s;g++){const v=g/s*r;h.x=(e+t*Math.cos(c))*Math.cos(v),h.y=(e+t*Math.cos(c))*Math.sin(v),h.z=t*Math.sin(c),f.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),a.subVectors(h,d).normalize(),p.push(a.x,a.y,a.z),m.push(g/s),m.push(_/n)}}for(let _=1;_<=n;_++)for(let c=1;c<=s;c++){const g=(s+1)*_+c-1,v=(s+1)*(_-1)+c-1,b=(s+1)*(_-1)+c,M=(s+1)*_+c;u.push(g,v,M),u.push(v,b,M)}this.setIndex(u),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class dr extends kt{constructor(e=new Oh(new Y(-1,-1,0),new Y(-1,1,0),new Y(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const l=new Y,u=new Y,f=new Le;let p=new Y;const m=[],d=[],h=[],a=[];_(),this.setIndex(a),this.setAttribute("position",new at(m,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(h,2));function _(){for(let b=0;b<t;b++)c(b);c(r===!1?t:0),v(),g()}function c(b){p=e.getPointAt(b/t,p);const M=o.normals[b],A=o.binormals[b];for(let T=0;T<=s;T++){const x=T/s*Math.PI*2,y=Math.sin(x),E=-Math.cos(x);u.x=E*M.x+y*A.x,u.y=E*M.y+y*A.y,u.z=E*M.z+y*A.z,u.normalize(),d.push(u.x,u.y,u.z),l.x=p.x+n*u.x,l.y=p.y+n*u.y,l.z=p.z+n*u.z,m.push(l.x,l.y,l.z)}}function g(){for(let b=1;b<=t;b++)for(let M=1;M<=s;M++){const A=(s+1)*(b-1)+(M-1),T=(s+1)*b+(M-1),x=(s+1)*b+M,y=(s+1)*(b-1)+M;a.push(A,T,y),a.push(T,x,y)}}function v(){for(let b=0;b<=t;b++)for(let M=0;M<=s;M++)f.x=b/t,f.y=M/s,h.push(f.x,f.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new dr(new g0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function io(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Ku(s))s.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ku(s[0])){const r=[];for(let o=0,l=s.length;o<l;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Kn(i){const e={};for(let t=0;t<i.length;t++){const n=io(i[t]);for(const s in n)e[s]=n[s]}return e}function Ku(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Wh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Em={clone:io,merge:Kn};var Am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends Ms{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Am,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=Tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new dt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Cm extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ri extends Ms{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pm extends Ms{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Rc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dm extends Ms{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lm extends Ms{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class qc extends tn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class zm extends qc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const rl=new dt,Ju=new Y,Qu=new Y;class Xh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jr,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(rl,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,l=s?s.w/r.y:1,u=s?s.x/r.x:0,f=s?s.y/r.y:0;e.coordinateSystem===qo||e.reversedDepth?t.set(.5*o,0,0,.5*o+u,0,.5*l,0,.5*l+f,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+u,0,.5*l,0,.5*l+f,0,0,.5,.5,0,0,0,1),t.multiply(rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Pa=new Y,Da=new jt,$i=new Y;class qh extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,Da,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Da,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pa,Da,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Da,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cs=new Y,ju=new Le,ef=new Le;class ii extends qh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=h0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(P0*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return h0*2*Math.atan(Math.tan(P0*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,ju,ef),t.subVectors(ef,ju)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(P0*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,f=o.fullHeight;r+=o.offsetX*s/u,t-=o.offsetY*n/f,s*=o.width/u,n*=o.height/f}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Im extends Xh{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=h0*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Um extends qc{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Im}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Nm extends Xh{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class Yc extends qc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Nm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yh extends qh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,l=s+t,u=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=f*this.view.offsetX,o=r+f*this.view.width,l-=p*this.view.offsetY,u=l-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Nr=-90,Fr=1;class uc extends tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ii(Nr,Fr,e,t);s.layers=this.layers,this.add(s);const r=new ii(Nr,Fr,e,t);r.layers=this.layers,this.add(r);const o=new ii(Nr,Fr,e,t);o.layers=this.layers,this.add(o);const l=new ii(Nr,Fr,e,t);l.layers=this.layers,this.add(l);const u=new ii(Nr,Fr,e,t);u.layers=this.layers,this.add(u);const f=new ii(Nr,Fr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,l,u]=t;for(const f of t)this.remove(f);if(e===Bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,u,f,p]=this.children,m=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),a=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let c=!1;e.isWebGLRenderer===!0?c=e.state.buffers.depth.getReversed():c=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,3,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(n,4,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),c&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(m,d,h),e.xr.enabled=a,n.texture.needsPMREMUpdate=!0}}class Fm extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function tf(i,e,t,n){const s=Om(n);switch(t){case ph:return i*e;case Lc:return i*e/s.components*s.byteLength;case zc:return i*e/s.components*s.byteLength;case fr:return i*e*2/s.components*s.byteLength;case Ic:return i*e*2/s.components*s.byteLength;case mh:return i*e*3/s.components*s.byteLength;case Vn:return i*e*4/s.components*s.byteLength;case Uc:return i*e*4/s.components*s.byteLength;case Ya:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Dl:return Math.max(i,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(i,8)*Math.max(e,8)/2;case Ll:case zl:case Ul:case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Il:case r0:case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ql:case jl:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16;case tc:case nc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case o0:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Om(i){switch(i){case ri:case uh:return{byteLength:1,components:1};case Xo:case fh:case Ai:return{byteLength:2,components:1};case Pc:case Dc:return{byteLength:2,components:4};case is:case Cc:case wi:return{byteLength:4,components:1};case hh:case dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ec}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ec);function $h(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function km(i){const e=new WeakMap;function t(l,u){const f=l.array,p=l.usage,m=f.byteLength,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,f,p),l.onUploadCallback();let h;if(f instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)h=i.HALF_FLOAT;else if(f instanceof Uint16Array)l.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)h=i.SHORT;else if(f instanceof Uint32Array)h=i.UNSIGNED_INT;else if(f instanceof Int32Array)h=i.INT;else if(f instanceof Int8Array)h=i.BYTE;else if(f instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:h,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,u,f){const p=u.array,m=u.updateRanges;if(i.bindBuffer(f,l),m.length===0)i.bufferSubData(f,0,p);else{m.sort((h,a)=>h.start-a.start);let d=0;for(let h=1;h<m.length;h++){const a=m[d],_=m[h];_.start<=a.start+a.count+1?a.count=Math.max(a.count,_.start+_.count-a.start):(++d,m[d]=_)}m.length=d+1;for(let h=0,a=m.length;h<a;h++){const _=m[h];i.bufferSubData(f,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}u.clearUpdateRanges()}u.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=e.get(l);u&&(i.deleteBuffer(u.buffer),e.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const f=e.get(l);if(f===void 0)e.set(l,t(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,l,u),f.version=l.version}}return{get:s,remove:r,update:o}}var Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
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
#endif`,Vm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
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
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$m=`#ifdef USE_BATCHING
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
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Km=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jm=`#ifdef USE_IRIDESCENCE
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
#endif`,e1=`#ifdef USE_BUMPMAP
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
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c1=`#define PI 3.141592653589793
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
} // validated`,u1=`vec3 transformedNormal = objectNormal;
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
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m1="gl_FragColor = linearToOutputTexel( gl_FragColor );",g1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,b1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E1=`#ifdef USE_GRADIENTMAP
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
}`,A1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,D1=`#ifdef USE_ENVMAP
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
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
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
#endif`,F1=`uniform sampler2D dfgLUT;
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
}`,O1=`
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
#endif`,k1=`#if defined( RE_IndirectDiffuse )
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
#endif`,B1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z1=`#if defined( USE_POINTS_UV )
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
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j1=`#if defined( USE_MORPHCOLORS )
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
#endif`,eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
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
#endif`,ng=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lg=`#ifdef USE_NORMALMAP
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
#endif`,cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wg=`float getShadowMask() {
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
}`,Tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Ag=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Cg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform float backgroundBlurriness;
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`#include <common>
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
}`,qg=`#if DEPTH_PACKING == 3200
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
}`,Yg=`#define DISTANCE
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
}`,$g=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#define LAMBERT
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
}`,nx=`#define LAMBERT
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
}`,ix=`#define MATCAP
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
}`,sx=`#define MATCAP
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
}`,rx=`#define NORMAL
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
}`,ox=`#define NORMAL
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
}`,ax=`#define PHONG
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
}`,lx=`#define PHONG
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
}`,cx=`#define STANDARD
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
}`,ux=`#define STANDARD
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
}`,fx=`#define TOON
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
}`,hx=`#define TOON
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
}`,dx=`uniform float size;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 color;
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
}`,xx=`uniform float rotation;
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
}`,vx=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Bm,alphahash_pars_fragment:Gm,alphamap_fragment:Vm,alphamap_pars_fragment:Hm,alphatest_fragment:Wm,alphatest_pars_fragment:Xm,aomap_fragment:qm,aomap_pars_fragment:Ym,batching_pars_vertex:$m,batching_vertex:Zm,begin_vertex:Km,beginnormal_vertex:Jm,bsdfs:Qm,iridescence_fragment:jm,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:s1,color_fragment:r1,color_pars_fragment:o1,color_pars_vertex:a1,color_vertex:l1,common:c1,defaultnormal_vertex:u1,displacementmap_pars_vertex:f1,displacementmap_vertex:h1,emissivemap_fragment:d1,emissivemap_pars_fragment:p1,colorspace_fragment:m1,colorspace_pars_fragment:g1,envmap_fragment:x1,envmap_common_pars_fragment:v1,envmap_pars_fragment:_1,envmap_pars_vertex:y1,envmap_physical_pars_fragment:D1,envmap_vertex:M1,fog_vertex:b1,fog_pars_vertex:S1,fog_fragment:w1,fog_pars_fragment:T1,gradientmap_pars_fragment:E1,lightmap_pars_fragment:A1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:C1,lights_pars_begin:P1,lights_toon_fragment:L1,lights_toon_pars_fragment:z1,lights_phong_fragment:I1,lights_phong_pars_fragment:U1,lights_physical_fragment:N1,lights_physical_pars_fragment:F1,lights_fragment_begin:O1,lights_fragment_maps:k1,lights_fragment_end:B1,lightprobes_pars_fragment:G1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:H1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:X1,map_fragment:q1,map_pars_fragment:Y1,map_particle_fragment:$1,map_particle_pars_fragment:Z1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:J1,morphinstance_vertex:Q1,morphcolor_vertex:j1,morphnormal_vertex:eg,morphtarget_pars_vertex:tg,morphtarget_vertex:ng,normal_fragment_begin:ig,normal_fragment_maps:sg,normal_pars_fragment:rg,normal_pars_vertex:og,normal_vertex:ag,normalmap_pars_fragment:lg,clearcoat_normal_fragment_begin:cg,clearcoat_normal_fragment_maps:ug,clearcoat_pars_fragment:fg,iridescence_pars_fragment:hg,opaque_fragment:dg,packing:pg,premultiplied_alpha_fragment:mg,project_vertex:gg,dithering_fragment:xg,dithering_pars_fragment:vg,roughnessmap_fragment:_g,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:Mg,shadowmap_pars_vertex:bg,shadowmap_vertex:Sg,shadowmask_pars_fragment:wg,skinbase_vertex:Tg,skinning_pars_vertex:Eg,skinning_vertex:Ag,skinnormal_vertex:Rg,specularmap_fragment:Cg,specularmap_pars_fragment:Pg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Lg,transmission_fragment:zg,transmission_pars_fragment:Ig,uv_pars_fragment:Ug,uv_pars_vertex:Ng,uv_vertex:Fg,worldpos_vertex:Og,background_vert:kg,background_frag:Bg,backgroundCube_vert:Gg,backgroundCube_frag:Vg,cube_vert:Hg,cube_frag:Wg,depth_vert:Xg,depth_frag:qg,distance_vert:Yg,distance_frag:$g,equirect_vert:Zg,equirect_frag:Kg,linedashed_vert:Jg,linedashed_frag:Qg,meshbasic_vert:jg,meshbasic_frag:ex,meshlambert_vert:tx,meshlambert_frag:nx,meshmatcap_vert:ix,meshmatcap_frag:sx,meshnormal_vert:rx,meshnormal_frag:ox,meshphong_vert:ax,meshphong_frag:lx,meshphysical_vert:cx,meshphysical_frag:ux,meshtoon_vert:fx,meshtoon_frag:hx,points_vert:dx,points_frag:px,shadow_vert:mx,shadow_frag:gx,sprite_vert:xx,sprite_frag:vx},We={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Ki={basic:{uniforms:Kn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Kn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Kn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Kn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Kn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ue(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Kn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Kn([We.points,We.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Kn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Kn([We.common,We.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Kn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Kn([We.sprite,We.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Kn([We.common,We.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Kn([We.lights,We.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ki.physical={uniforms:Kn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const La={r:0,b:0,g:0},_x=new dt,Zh=new gt;Zh.set(-1,0,0,0,1,0,0,0,1);function yx(i,e,t,n,s,r){const o=new Ue(0);let l=s===!0?0:1,u,f,p=null,m=0,d=null;function h(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){const M=v.backgroundBlurriness>0;b=e.get(b,M)}return b}function a(v){let b=!1;const M=h(v);M===null?c(o,l):M&&M.isColor&&(c(M,1),b=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,b){const M=h(b);M&&M.isCubeTexture?(f===void 0&&(f=new ht(new xn(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:io(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),f.material.uniforms.envMap.value=M,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Zh),f.material.toneMapped=Pt.getTransfer(M.colorSpace)!==Yt,(p!==M||m!==M.version||d!==i.toneMapping)&&(f.material.needsUpdate=!0,p=M,m=M.version,d=i.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new ht(new Hi(2,2),new qn({name:"BackgroundMaterial",uniforms:io(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.toneMapped=Pt.getTransfer(M.colorSpace)!==Yt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||m!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,p=M,m=M.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function c(v,b){v.getRGB(La,Wh(i)),t.buffers.color.setClear(La.r,La.g,La.b,b,r)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),l=b,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,c(o,l)},render:a,addToRenderList:_,dispose:g}}function Mx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function l(P,I,q,L,O){let H=!1;const X=m(P,L,q,I);r!==X&&(r=X,f(r.object)),H=h(P,L,q,O),H&&a(P,L,q,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(P,I,q,L),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function u(){return i.createVertexArray()}function f(P){return i.bindVertexArray(P)}function p(P){return i.deleteVertexArray(P)}function m(P,I,q,L){const O=L.wireframe===!0;let H=n[I.id];H===void 0&&(H={},n[I.id]=H);const X=P.isInstancedMesh===!0?P.id:0;let Z=H[X];Z===void 0&&(Z={},H[X]=Z);let $=Z[q.id];$===void 0&&($={},Z[q.id]=$);let J=$[O];return J===void 0&&(J=d(u()),$[O]=J),J}function d(P){const I=[],q=[],L=[];for(let O=0;O<t;O++)I[O]=0,q[O]=0,L[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:q,attributeDivisors:L,object:P,attributes:{},index:null}}function h(P,I,q,L){const O=r.attributes,H=I.attributes;let X=0;const Z=q.getAttributes();for(const $ in Z)if(Z[$].location>=0){const re=O[$];let ye=H[$];if(ye===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(ye=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(ye=P.instanceColor)),re===void 0||re.attribute!==ye||ye&&re.data!==ye.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function a(P,I,q,L){const O={},H=I.attributes;let X=0;const Z=q.getAttributes();for(const $ in Z)if(Z[$].location>=0){let re=H[$];re===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const ye={};ye.attribute=re,re&&re.data&&(ye.data=re.data),O[$]=ye,X++}r.attributes=O,r.attributesNum=X,r.index=L}function _(){const P=r.newAttributes;for(let I=0,q=P.length;I<q;I++)P[I]=0}function c(P){g(P,0)}function g(P,I){const q=r.newAttributes,L=r.enabledAttributes,O=r.attributeDivisors;q[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),O[P]!==I&&(i.vertexAttribDivisor(P,I),O[P]=I)}function v(){const P=r.newAttributes,I=r.enabledAttributes;for(let q=0,L=I.length;q<L;q++)I[q]!==P[q]&&(i.disableVertexAttribArray(q),I[q]=0)}function b(P,I,q,L,O,H,X){X===!0?i.vertexAttribIPointer(P,I,q,O,H):i.vertexAttribPointer(P,I,q,L,O,H)}function M(P,I,q,L){_();const O=L.attributes,H=q.getAttributes(),X=I.defaultAttributeValues;for(const Z in H){const $=H[Z];if($.location>=0){let J=O[Z];if(J===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const re=J.normalized,ye=J.itemSize,ae=e.get(J);if(ae===void 0)continue;const B=ae.buffer,ee=ae.type,xe=ae.bytesPerElement,ze=ee===i.INT||ee===i.UNSIGNED_INT||J.gpuType===Cc;if(J.isInterleavedBufferAttribute){const te=J.data,be=te.isInterleavedBuffer===!0?te.stride:te.itemSize,ue=J.offset;if(te.isInstancedInterleavedBuffer||te.isInstancedBufferAttribute){for(let Me=0;Me<$.locationSize;Me++)g($.location+Me,te.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Me=0;Me<$.locationSize;Me++)c($.location+Me);i.bindBuffer(i.ARRAY_BUFFER,B);for(let Me=0;Me<$.locationSize;Me++)b($.location+Me,ye/$.locationSize,ee,re,be*xe,(ue+ye/$.locationSize*Me)*xe,ze)}else{if(J.isInstancedBufferAttribute){for(let te=0;te<$.locationSize;te++)g($.location+te,J.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let te=0;te<$.locationSize;te++)c($.location+te);i.bindBuffer(i.ARRAY_BUFFER,B);for(let te=0;te<$.locationSize;te++)b($.location+te,ye/$.locationSize,ee,re,ye*xe,ye/$.locationSize*te*xe,ze)}}else if(X!==void 0){const re=X[Z];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv($.location,re);break;case 3:i.vertexAttrib3fv($.location,re);break;case 4:i.vertexAttrib4fv($.location,re);break;default:i.vertexAttrib1fv($.location,re)}}}}v()}function A(){E();for(const P in n){const I=n[P];for(const q in I){const L=I[q];for(const O in L){const H=L[O];for(const X in H)p(H[X].object),delete H[X];delete L[O]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;const I=n[P.id];for(const q in I){const L=I[q];for(const O in L){const H=L[O];for(const X in H)p(H[X].object),delete H[X];delete L[O]}}delete n[P.id]}function x(P){for(const I in n){const q=n[I];for(const L in q){const O=q[L];if(O[P.id]===void 0)continue;const H=O[P.id];for(const X in H)p(H[X].object),delete H[X];delete O[P.id]}}}function y(P){for(const I in n){const q=n[I],L=P.isInstancedMesh===!0?P.id:0,O=q[L];if(O!==void 0){for(const H in O){const X=O[H];for(const Z in X)p(X[Z].object),delete X[Z];delete O[H]}delete q[L],Object.keys(q).length===0&&delete n[I]}}}function E(){C(),o=!0,r!==s&&(r=s,f(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:E,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:c,disableUnusedAttributes:v}}function bx(i,e,t){let n;function s(u){n=u}function r(u,f){i.drawArrays(n,u,f),t.update(f,n,1)}function o(u,f,p){p!==0&&(i.drawArraysInstanced(n,u,f,p),t.update(f,n,p))}function l(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,p);let d=0;for(let h=0;h<p;h++)d+=f[h];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l}function Sx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==Vn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(x){const y=x===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==ri&&x!==wi&&!y&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function u(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=u(f);p!==f&&(ft("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),a=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),c=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:f,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:h,maxVertexTextures:a,maxTextureSize:_,maxCubemapSize:c,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:M,maxSamples:A,samples:T}}function wx(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ds,l=new gt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){const h=m.length!==0||d||n!==0||s;return s=d,n=m.length,h},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){t=p(m,d,0)},this.setState=function(m,d,h){const a=m.clippingPlanes,_=m.clipIntersection,c=m.clipShadows,g=i.get(m);if(!s||a===null||a.length===0||r&&!c)r?p(null):f();else{const v=r?0:n,b=v*4;let M=g.clippingState||null;u.value=M,M=p(a,d,b,h);for(let A=0;A!==b;++A)M[A]=t[A];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,d,h,a){const _=m!==null?m.length:0;let c=null;if(_!==0){if(c=u.value,a!==!0||c===null){const g=h+_*4,v=d.matrixWorldInverse;l.getNormalMatrix(v),(c===null||c.length<g)&&(c=new Float32Array(g));for(let b=0,M=h;b!==_;++b,M+=4)o.copy(m[b]).applyMatrix4(v,l),o.normal.toArray(c,M),c[M+3]=o.constant}u.value=c,u.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,c}}class $c extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:qr});r.uniforms.tEquirect.value=t;const o=new ht(s,r),l=t.minFilter;return t.minFilter===es&&(t.minFilter=Gn),new uc(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const nf=256,Tx=3,Ex=20,Kh=256,Jh=16,Ax=3,Rx=new Y,Cx=new Ue;class Ko{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uc(1,10,null),this._boxMesh=new ht(new xn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:l=Rx}=r,u=this._renderer;this._setSize(o);const f=this._allocateTarget(),p=this._getSourceTarget(!0);t>0&&(p.texture.mipmapsAutoUpdate=!1);const m=u.autoClear,d=u.autoClearColor,h=u.autoClearDepth,a=u.autoClearStencil,_=e.background;u.autoClear=!0,u.autoClearColor=!0,u.autoClearDepth=!0,u.autoClearStencil=!0,_===null&&(e.background=u.getClearColor(Cx));const c=new uc(n,s,p);return c.position.copy(l),c.update(u,e),u.autoClear=m,u.autoClearColor=d,u.autoClearDepth=h,u.autoClearStencil=a,e.background=_,t>0&&(p.texture.mipmapsAutoUpdate=!0,this._blur(f,t)),this._applyPMREM(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(nf,yp(e))}_fromTexture(e,t){e.mapping===Kr||e.mapping===Wo?this._setSize(e.image.length===0?nf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=sf(e,!1,!1),n=Math.log2(e)-Tx;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=sf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Kr||e.mapping===Wo?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=rf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Px(),this._integrationMaterial=Dx());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Jh);for(let o=0;o<=n;o++){const l=Ko.lodToRoughness(o,n);if(o>n-Ax)r.roughness.value=l,this._renderCube(e,o,this._integrationMaterial);else{const u=l>0?Math.log2(t)+.5*Math.log2(6/(Kh*Math.pow(l,4)))+.5:0;s.roughness.value=l,s.lodBias.value=u,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lx());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function sf(i,e,t){return new $c(i,{minFilter:es,generateMipmaps:e,type:Ai,colorSpace:l0,depthBuffer:t})}function Qo(i,e,t){return new qn({name:i,uniforms:e,vertexShader:_t.cube_vert,fragmentShader:t,side:zn,blending:qr,depthTest:!1,depthWrite:!1})}function Px(){return Qo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kh}u

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
	`)}function Dx(){return Qo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Jh}},`

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
	`)}function Lx(){return Qo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ex}
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
	`)}function rf(){return Qo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function of(){return Qo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function zx(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===E0||h===A0)if(e.has(d)){const a=e.get(d).texture;return l(a,d.mapping)}else{const a=d.image;if(a&&a.height>0){const _=new $c(a.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",f),l(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,a=h===E0||h===A0,_=h===Kr||h===Wo;if(a||_){let c=t.get(d);const g=c!==void 0?c.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Ko(i)),c=a?n.fromEquirectangular(d,c):n.fromCubemap(d,c),c.texture.pmremVersion=d.pmremVersion,t.set(d,c),c.texture;if(c!==void 0)return c.texture;{const v=d.image;return a&&v&&v.height>0||_&&v&&u(v)?(n===null&&(n=new Ko(i)),c=a?n.fromEquirectangular(d):n.fromCubemap(d),c.texture.pmremVersion=d.pmremVersion,t.set(d,c),d.addEventListener("dispose",p),c.texture):null}}}return d}function l(d,h){return h===E0?d.mapping=Kr:h===A0&&(d.mapping=Wo),d}function u(d){let h=0;const a=6;for(let _=0;_<a;_++)d[_]!==void 0&&h++;return h===a}function f(d){const h=d.target;h.removeEventListener("dispose",f);const a=e.get(h);a!==void 0&&(e.delete(h),a.dispose())}function p(d){const h=d.target;h.removeEventListener("dispose",p);const a=t.get(h);a!==void 0&&(t.delete(h),a.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Ix(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ja("WebGLRenderer: "+n+" extension not supported."),s}}}function Ux(i,e,t,n){const s={},r=new WeakMap,o=new FinalizationRegistry(a=>delete s[a]);function l(a){u(a.target)}function u(a){a.index!==null&&e.remove(a.index);for(const c in a.attributes)e.remove(a.attributes[c]);a.removeEventListener("dispose",l),delete s[a.id],o.unregister(a);const _=r.get(a);_&&(e.remove(_),r.delete(a)),n.releaseStatesOfGeometry(a),a.isInstancedBufferGeometry===!0&&delete a._maxInstanceCount,t.memory.geometries--}function f(a,_){return s[_.id]!==void 0||(_.addEventListener("dispose",l),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function p(a){const _=a.attributes;for(const c in _)e.update(_[c],i.ARRAY_BUFFER)}function m(a){const _=a.index,c=a.attributes.position;let g=0;if(c===void 0)return;const v=_!==null?_.array.length:c.array.length/3-1,b=c.count>=65535?Ah:Eh,M=new b(Math.ceil(v/3)*6,1),A=M.array;if(_!==null){const x=_.array;g=_.version;for(let y=0,E=0;y<v;y+=3){const C=x[y+0],P=x[y+1],I=x[y+2];A[E++]=C,A[E++]=P,A[E++]=P,A[E++]=I,A[E++]=I,A[E++]=C}}else{g=c.version;for(let x=0,y=0;x<v;x+=3){const E=x+0,C=x+1,P=x+2;A[y++]=E,A[y++]=C,A[y++]=C,A[y++]=P,A[y++]=P,A[y++]=E}}M.version=g;const T=r.get(a);T&&e.remove(T),r.set(a,M)}function d(a){const _=r.get(a);if(_){const c=a.index;c!==null&&_.version<c.version&&m(a)}else m(a);return r.get(a)}function h(){for(const a in s){const _=s[a].deref();_!==void 0&&u(_)}}return{get:f,update:p,getWireframeAttribute:d,dispose:h}}function Nx(i,e,t){let n;function s(m){n=m}let r,o;function l(m){r=m.type,o=m.bytesPerElement}function u(m,d){i.drawElements(n,d,r,m*o),t.update(d,n,1)}function f(m,d,h){h!==0&&(i.drawElementsInstanced(n,d,r,m*o,h),t.update(d,n,h))}function p(m,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,m,0,h);let _=0;for(let c=0;c<h;c++)_+=d[c];t.update(_,n,1)}this.setMode=s,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function Fx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(r/3);break;case i.LINES:t.lines+=l*(r/2);break;case i.LINE_STRIP:t.lines+=l*(r-1);break;case i.LINE_LOOP:t.lines+=l*r;break;case i.POINTS:t.points+=l*r;break;default:Nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ox(i,e,t){const n=new WeakMap,s=new Kt;function r(o,l,u){const f=o.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=p!==void 0?p.length:0;let d=n.get(l);if(d===void 0||d.count!==m){let C=function(){y.dispose(),n.delete(l),l.removeEventListener("dispose",C)};var h=C;d!==void 0&&d.texture.dispose();const a=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,c=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let M=0;a===!0&&(M=1),_===!0&&(M=2),c===!0&&(M=3);let A=l.attributes.position.count*M,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const x=new Float32Array(A*T*4*m),y=new Sh(x,A,T,m);y.type=wi,y.needsUpdate=!0;const E=M*4;for(let P=0;P<m;P++){const I=g[P],q=v[P],L=b[P],O=A*T*4*P;for(let H=0;H<I.count;H++){const X=H*E;a===!0&&(s.fromBufferAttribute(I,H),x[O+X+0]=s.x,x[O+X+1]=s.y,x[O+X+2]=s.z,x[O+X+3]=0),_===!0&&(s.fromBufferAttribute(q,H),x[O+X+4]=s.x,x[O+X+5]=s.y,x[O+X+6]=s.z,x[O+X+7]=0),c===!0&&(s.fromBufferAttribute(L,H),x[O+X+8]=s.x,x[O+X+9]=s.y,x[O+X+10]=s.z,x[O+X+11]=L.itemSize===4?s.w:1)}}d={count:m,texture:y,size:new Le(A,T)},n.set(l,d),l.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let a=0;for(let c=0;c<f.length;c++)a+=f[c];const _=l.morphTargetsRelative?1:1-a;u.getUniforms().setValue(i,"morphTargetBaseInfluence",_),u.getUniforms().setValue(i,"morphTargetInfluences",f)}u.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function kx(i,e,t,n,s){let r=new WeakMap;function o(f){const p=s.render.frame,m=f.geometry,d=e.get(f,m);if(r.get(d)!==p&&(e.update(d),r.set(d,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),r.get(f)!==p&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),r.set(f,p))),f.isSkinnedMesh){const h=f.skeleton;r.get(h)!==p&&(h.update(),r.set(h,p))}return d}function l(){r=new WeakMap}function u(f){const p=f.target;p.removeEventListener("dispose",u),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:o,dispose:l}}const Bx={[nh]:"LINEAR_TONE_MAPPING",[ih]:"REINHARD_TONE_MAPPING",[sh]:"CINEON_TONE_MAPPING",[rh]:"ACES_FILMIC_TONE_MAPPING",[ah]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[oh]:"CUSTOM_TONE_MAPPING"};function Gx(i,e,t,n,s,r){const o=new Jn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,u=null,f=null;const p=new kt;p.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new at([0,2,0,0,2,0],2));const m=new Cm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ht(p,m),h=new Yh(-1,1,1,-1,0,1);let a=null,_=null,c=!1,g,v=null,b=[],M=!1;this.setSize=function(A,T){o.setSize(A,T),l!==null&&l.setSize(A,T),u!==null&&u.setSize(A,T);for(let x=0;x<b.length;x++){const y=b[x];y.setSize&&y.setSize(A,T)}},this.setEffects=function(A){b=A,M=b.length>0&&b[0].isRenderPass===!0;const T=o.width,x=o.height;b.length>0&&l===null&&(l=new Jn(T,x,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),u=new Jn(T,x,{type:Ai,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&b.some(E=>E.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&f===null&&(f=new eo(T,x),r===!0&&(f.format=Is,f.type=Qr)),o.dispose(),o.depthTexture=y?f:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let E=0;E<b.length;E++){const C=b[E];C.setSize&&C.setSize(T,x),y&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(f)}},this.begin=function(A,T){if(c||A.toneMapping===ns&&b.length===0)return!1;if(v=T,T!==null){const x=T.width,y=T.height;(o.width!==x||o.height!==y)&&this.setSize(x,y)}return M===!1&&A.setRenderTarget(o),g=A.toneMapping,A.toneMapping=ns,!0},this.hasRenderPass=function(){return M},this.end=function(A,T){A.toneMapping=g,c=!0;let x=o,y=l;for(let E=0;E<b.length;E++){const C=b[E];C.enabled!==!1&&(C.render(A,y,x,T),C.needsSwap!==!1&&(x=y,y=y===l?u:l))}if(a!==A.outputColorSpace||_!==A.toneMapping){a=A.outputColorSpace,_=A.toneMapping,m.defines={},Pt.getTransfer(a)===Yt&&(m.defines.SRGB_TRANSFER="");const E=Bx[_];E&&(m.defines[E]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(v),A.render(d,h),v=null,c=!1},this.isCompositing=function(){return c},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),u!==null&&u.dispose(),p.dispose(),m.dispose()}}const Qh=new Hn,jh=new eo(1,1),ed=new zh(1),td=new Sh,nd=new Ep,id=new Lh,af=[],lf=[],cf=new Float32Array(16),uf=new Float32Array(9),ff=new Float32Array(4);function ro(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=af[s];if(r===void 0&&(r=new Float32Array(s),af[s]=r),e!==0){n.toArray(r,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(r,l)}return r}function _n(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function M0(i,e){let t=lf[e];t===void 0&&(t=new Int32Array(e),lf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2fv(this.addr,e),yn(t,e)}}function Wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;i.uniform3fv(this.addr,e),yn(t,e)}}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4fv(this.addr,e),yn(t,e)}}function qx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,n))return;ff.set(n),i.uniformMatrix2fv(this.addr,!1,ff),yn(t,n)}}function Yx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,n))return;uf.set(n),i.uniformMatrix3fv(this.addr,!1,uf),yn(t,n)}}function $x(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,n))return;cf.set(n),i.uniformMatrix4fv(this.addr,!1,cf),yn(t,n)}}function Zx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2iv(this.addr,e),yn(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3iv(this.addr,e),yn(t,e)}}function Qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4iv(this.addr,e),yn(t,e)}}function jx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function e2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2uiv(this.addr,e),yn(t,e)}}function t2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3uiv(this.addr,e),yn(t,e)}}function n2(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4uiv(this.addr,e),yn(t,e)}}function b0(i){return i.version===0&&(i.compareFunction=vh,i.needsUpdate=!0),i}function i2(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=b0(jh):r=Qh,t.setTexture2D(e||r,s)}function s2(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nd,s)}function r2(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=b0(ed):r=id,t.setTextureCube(e||r,s)}function o2(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||td,s)}function a2(i){switch(i){case 5126:return Vx;case 35664:return Hx;case 35665:return Wx;case 35666:return Xx;case 35674:return qx;case 35675:return Yx;case 35676:return $x;case 5124:case 35670:return Zx;case 35667:case 35671:return Kx;case 35668:case 35672:return Jx;case 35669:case 35673:return Qx;case 5125:return jx;case 36294:return e2;case 36295:return t2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return s2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return o2}}function l2(i,e){i.uniform1fv(this.addr,e)}function c2(i,e){const t=ro(e,this.size,2);i.uniform2fv(this.addr,t)}function u2(i,e){const t=ro(e,this.size,3);i.uniform3fv(this.addr,t)}function f2(i,e){const t=ro(e,this.size,4);i.uniform4fv(this.addr,t)}function h2(i,e){const t=ro(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d2(i,e){const t=ro(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function p2(i,e){const t=ro(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m2(i,e){i.uniform1iv(this.addr,e)}function g2(i,e){i.uniform2iv(this.addr,e)}function x2(i,e){i.uniform3iv(this.addr,e)}function v2(i,e){i.uniform4iv(this.addr,e)}function _2(i,e){i.uniform1uiv(this.addr,e)}function y2(i,e){i.uniform2uiv(this.addr,e)}function M2(i,e){i.uniform3uiv(this.addr,e)}function b2(i,e){i.uniform4uiv(this.addr,e)}function S2(i,e,t){const n=this.cache,s=e.length,r=M0(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=b0(jh):o=Qh;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||o,r[l])}function w2(i,e,t){const n=this.cache,s=e.length,r=M0(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||nd,r[o])}function T2(i,e,t){const n=this.cache,s=e.length,r=M0(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=b0(ed):o=id;for(let l=0;l!==s;++l)t.setTextureCube(e[l]||o,r[l])}function E2(i,e,t){const n=this.cache,s=e.length,r=M0(t,s);_n(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||td,r[o])}function A2(i){switch(i){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return f2;case 35674:return h2;case 35675:return d2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return x2;case 35669:case 35673:return v2;case 5125:return _2;case 36294:return y2;case 36295:return M2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return E2}}class R2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a2(t.type)}}class C2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A2(t.type)}}class P2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const l=s[r];l.setValue(e,t[l.id],n)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function hf(i,e){i.seq.push(e),i.map[e.id]=e}function D2(i,e,t){const n=i.name,s=n.length;for(ol.lastIndex=0;;){const r=ol.exec(n),o=ol.lastIndex;let l=r[1];const u=r[2]==="]",f=r[3];if(u&&(l=l|0),f===void 0||f==="["&&o+2===s){hf(t,f===void 0?new R2(l,i,e):new C2(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new P2(l),hf(t,m)),t=m}}}class Qa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);D2(l,u,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const l=t[r],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function df(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const L2=37297;let z2=0;function I2(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const pf=new gt;function U2(i){Pt._getMatrix(pf,Pt.workingColorSpace,i);const e=`mat3( ${pf.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(i)){case c0:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function mf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+I2(i.getShaderSource(e),l)}else return r}function N2(i,e){const t=U2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const F2={[nh]:"Linear",[ih]:"Reinhard",[sh]:"Cineon",[rh]:"ACESFilmic",[ah]:"AgX",[lh]:"Neutral",[oh]:"Custom"};function O2(i,e){const t=F2[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const za=new Y;function k2(){Pt.getLuminanceCoefficients(za);const i=za.x.toFixed(4),e=za.y.toFixed(4),t=za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function G2(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V2(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function Lo(i){return i!==""}function gf(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const H2=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(H2,W2)}function W2(i,e){const t=_t[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return fc(t)}const X2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(i){return i.replace(X2,q2)}function q2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const Y2={[No]:"SHADOWMAP_TYPE_PCF",[Po]:"SHADOWMAP_TYPE_VSM"};function $2(i){return Y2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Z2={[Wo]:"ENVMAP_MODE_REFRACTION"};function K2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Z2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const J2={[Rc]:"ENVMAP_BLENDING_MULTIPLY",[ip]:"ENVMAP_BLENDING_MIX",[sp]:"ENVMAP_BLENDING_ADD"};function Q2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":J2[i.combine]||"ENVMAP_BLENDING_NONE"}function j2(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=$2(t),f=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",p=K2(t),m=Q2(t),d=B2(t),h=G2(r),a=s.createProgram();let _,c,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Lo).join(`
`),_.length>0&&(_+=`
`),c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(Lo).join(`
`),c.length>0&&(c+=`
`)):(_=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),c=[_f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?_t.tonemapping_pars_fragment:"",t.toneMapping!==ns?O2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,N2("linearToOutputTexel",t.outputColorSpace),k2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),o=fc(o),o=gf(o,t),o=xf(o,t),l=fc(l),l=gf(l,t),l=xf(l,t),o=vf(o),l=vf(l),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,c=["#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const v=g+_+o,b=g+c+l,M=df(s,s.VERTEX_SHADER,v),A=df(s,s.FRAGMENT_SHADER,b);s.attachShader(a,M),s.attachShader(a,A),t.index0AttributeName!==void 0?s.bindAttribLocation(a,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(a,0,"position"),s.linkProgram(a);function T(C){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(a)||"",I=s.getShaderInfoLog(M)||"",q=s.getShaderInfoLog(A)||"",L=P.trim(),O=I.trim(),H=q.trim();let X=!0,Z=!0;if(s.getProgramParameter(a,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,a,M,A);else{const $=mf(s,M,"vertex"),J=mf(s,A,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(a,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+L+`
`+$+`
`+J)}else L!==""?ft("WebGLProgram: Program Info Log:",L):(O===""||H==="")&&(Z=!1);Z&&(C.diagnostics={runnable:X,programLog:L,vertexShader:{log:O,prefix:_},fragmentShader:{log:H,prefix:c}})}s.deleteShader(M),s.deleteShader(A),x=new Qa(s,a),y=V2(s,a)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(a,L2)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(a),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=z2++,this.cacheKey=e,this.usedTimes=1,this.program=a,this.vertexShader=M,this.fragmentShader=A,this}let ev=0;class tv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nv(e),t.set(e,n)),n}}class nv{constructor(e){this.id=ev++,this.code=e,this.usedTimes=0}}function iv(i){return i===fr||i===r0||i===o0}function sv(i,e,t,n,s,r){const o=new wh,l=new tv,u=new Set,f=[],p=new Map,m=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return u.add(x),x===0?"uv":`uv${x}`}function a(x,y,E,C,P,I){const q=C.fog,L=P.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||O,H),Z=d[x.type];let $=n.precision;x.precision!==null&&($=n.getMaxPrecision(x.precision),$!==x.precision&&ft("WebGLProgram.getParameters:",x.precision,"not supported, using",$,"instead."));const J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,re=J!==void 0?J.length:0;let ye=0;L.morphAttributes.position!==void 0&&(ye=1),L.morphAttributes.normal!==void 0&&(ye=2),L.morphAttributes.color!==void 0&&(ye=3);let ae,B,ee,xe;if(Z){const Fe=Ki[Z];ae=Fe.vertexShader,B=Fe.fragmentShader}else{ae=x.vertexShader,B=x.fragmentShader;const Fe=l.getVertexShaderStage(x),Mt=l.getFragmentShaderStage(x);l.update(x,Fe,Mt),ee=Fe.id,xe=Mt.id}const ze=i.getRenderTarget(),te=i.state.buffers.depth.getReversed(),be=P.isInstancedMesh===!0,ue=P.isBatchedMesh===!0,Me=!!x.map,qe=!!x.matcap,$e=!!X,pe=$e&&X.isPMREMTexture===!0,we=!!x.aoMap,Re=!!x.lightMap,Oe=!!x.bumpMap&&x.wireframe===!1,Se=!!x.normalMap,Ze=!!x.displacementMap,He=!!x.emissiveMap,st=!!x.metalnessMap,rt=!!x.roughnessMap,ct=x.anisotropy>0,Q=x.clearcoat>0,It=x.diffuseRoughness>0,ut=x.dispersion>0,Ae=x.retroreflectivity>0,ve=x.iridescence>0,je=x.sheen>0,Be=x.transmission>0,Ye=ct&&!!x.anisotropyMap,G=Q&&!!x.clearcoatMap,U=Q&&!!x.clearcoatNormalMap,oe=Q&&!!x.clearcoatRoughnessMap,R=It&&!!x.diffuseRoughnessMap,w=ve&&!!x.iridescenceMap,F=ve&&!!x.iridescenceThicknessMap,K=je&&!!x.sheenColorMap,W=je&&!!x.sheenRoughnessMap,S=!!x.specularMap,z=!!x.specularColorMap,D=!!x.specularIntensityMap,V=Be&&!!x.transmissionMap,k=Be&&!!x.thicknessMap,ne=!!x.gradientMap,ie=!!x.alphaMap,le=x.alphaTest>0,de=!!x.alphaHash,Ie=!!x.extensions;let _e=ns;x.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Ve=pe?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,Ke={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:ae,fragmentShader:B,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:xe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:$,batching:ue,batchingColor:ue&&P._colorsTexture!==null,instancing:be,instancingColor:be&&P.instanceColor!==null,instancingMorph:be&&P.morphTexture!==null,outputColorSpace:ze===null?i.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Me,matcap:qe,envMap:$e,envMapMode:$e&&X.mapping,envMapPMREM:pe,envMapMaxLod:pe?Ve.length-1:null,envMapSize:pe?Ve[0].width:null,aoMap:we,lightMap:Re,bumpMap:Oe,normalMap:Se,displacementMap:Ze,emissiveMap:He,normalMapObjectSpace:Se&&x.normalMapType===lp,normalMapTangentSpace:Se&&x.normalMapType===a0,packedNormalMap:Se&&x.normalMapType===a0&&iv(x.normalMap.format),metalnessMap:st,roughnessMap:rt,anisotropy:ct,anisotropyMap:Ye,clearcoat:Q,clearcoatMap:G,clearcoatNormalMap:U,clearcoatRoughnessMap:oe,diffuseRoughness:It,diffuseRoughnessMap:R,dispersion:ut,retroreflection:Ae,iridescence:ve,iridescenceMap:w,iridescenceThicknessMap:F,sheen:je,sheenColorMap:K,sheenRoughnessMap:W,specularMap:S,specularColorMap:z,specularIntensityMap:D,transmission:Be,transmissionMap:V,thicknessMap:k,gradientMap:ne,opaque:x.transparent===!1&&x.blending===Fo&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:le,alphaHash:de,combine:x.combine,mapUv:Me&&h(x.map.channel),aoMapUv:we&&h(x.aoMap.channel),lightMapUv:Re&&h(x.lightMap.channel),bumpMapUv:Oe&&h(x.bumpMap.channel),normalMapUv:Se&&h(x.normalMap.channel),displacementMapUv:Ze&&h(x.displacementMap.channel),emissiveMapUv:He&&h(x.emissiveMap.channel),metalnessMapUv:st&&h(x.metalnessMap.channel),roughnessMapUv:rt&&h(x.roughnessMap.channel),anisotropyMapUv:Ye&&h(x.anisotropyMap.channel),clearcoatMapUv:G&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:U&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:R&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:w&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:F&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:K&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:W&&h(x.sheenRoughnessMap.channel),specularMapUv:S&&h(x.specularMap.channel),specularColorMapUv:z&&h(x.specularColorMap.channel),specularIntensityMapUv:D&&h(x.specularIntensityMap.channel),transmissionMapUv:V&&h(x.transmissionMap.channel),thicknessMapUv:k&&h(x.thicknessMap.channel),alphaMapUv:ie&&h(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Se||ct),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Me||ie),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&Se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:te,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:I.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Me&&x.map.isVideoTexture===!0&&Pt.getTransfer(x.map.colorSpace)===Yt,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(x.emissiveMap.colorSpace)===Yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Oi,flipSided:x.side===zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&x.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ke.vertexUv1s=u.has(1),Ke.vertexUv2s=u.has(2),Ke.vertexUv3s=u.has(3),u.clear(),Ke}function _(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const E in x.defines)y.push(E),y.push(x.defines[E]);return x.isRawShaderMaterial===!1&&(c(y,x),g(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function c(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapPMREM),x.push(y.envMapMaxLod),x.push(y.envMapSize),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.diffuseRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.numSunLights),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numSunLightShadows),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.numLightProbeGrids),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function g(x,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){const y=d[x.type];let E;if(y){const C=Ki[y];E=Em.clone(C.uniforms)}else E=x.uniforms;return E}function b(x,y){let E=p.get(y);return E!==void 0?++E.usedTimes:(E=new j2(i,y,x,s),f.push(E),p.set(y,E)),E}function M(x){if(--x.usedTimes===0){const y=f.indexOf(x);f[y]=f[f.length-1],f.pop(),p.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function T(){l.dispose()}return{getParameters:a,getProgramCacheKey:_,getUniforms:v,acquireProgram:b,releaseProgram:M,releaseShaderCache:A,programs:f,dispose:T}}function rv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,u){i.get(o)[l]=u}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ov(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function l(d,h,a,_,c,g){let v=i[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:a,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:c,group:g},i[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=a,v.materialVariant=o(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=c,v.group=g),e++,v}function u(d,h,a,_,c,g,v){v.reversedDepth===!0&&(c=-c);const b=l(d,h,a,_,c,g);a.transmission>0?n.push(b):a.transparent===!0?s.push(b):t.push(b)}function f(d,h,a,_,c,g){const v=l(d,h,a,_,c,g);a.transmission>0?n.unshift(v):a.transparent===!0?s.unshift(v):t.unshift(v)}function p(d,h){t.length>1&&t.sort(d||ov),n.length>1&&n.sort(h||yf),s.length>1&&s.sort(h||yf)}function m(){for(let d=e,h=i.length;d<h;d++){const a=i[d];if(a.id===null)break;a.id=null,a.object=null,a.geometry=null,a.material=null,a.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:u,unshift:f,finish:m,sort:p}}function av(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Mf,i.set(n,[o])):s>=r.length?(o=new Mf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function lv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Y,color:new Ue};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function cv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let uv=0;function fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hv(i){const e=new lv,t=cv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new Y);const s=new Y,r=new dt,o=new dt;function l(f){let p=0,m=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let h=0,a=0,_=0,c=0,g=0,v=0,b=0,M=0,A=0,T=0,x=0,y=0,E=0,C=0;f.sort(fv);for(let I=0,q=f.length;I<q;I++){const L=f[I],O=L.color,H=L.intensity,X=L.distance;let Z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===fr?Z=L.shadow.map.texture:Z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)p+=O.r*H,m+=O.g*H,d+=O.b*H;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],H);C++}else if(L.isSunLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,re=t.get(L);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[a]=re,n.sunShadowMap[a]=Z;const ye=J.getViewportCount();for(let ae=0;ae<ye;ae++)n.sunShadowMatrix[_+ae]=J.getMatrix(ae),n.sunShadowCascade[_+ae]=J._cascadeData[ae];_+=ye,a++}n.sun[h]=$,h++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,re=t.get(L);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.directionalShadow[c]=re,n.directionalShadowMap[c]=Z,n.directionalShadowMatrix[c]=L.shadow.matrix,A++}n.directional[c]=$,c++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(O).multiplyScalar(H),$.distance=X,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[v]=$;const J=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,J.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[v]=J.matrix,L.castShadow){const re=t.get(L);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.spotShadow[v]=re,n.spotShadowMap[v]=Z,x++}v++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(O).multiplyScalar(H),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[b]=$,b++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const J=L.shadow,re=t.get(L);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=L.shadow.matrix,T++}n.point[g]=$,g++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(H),$.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[M]=$,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=d;const P=n.hash;(P.sunLength!==h||P.directionalLength!==c||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==b||P.hemiLength!==M||P.numSunShadows!==a||P.numDirectionalShadows!==A||P.numPointShadows!==T||P.numSpotShadows!==x||P.numSpotMaps!==y||P.numLightProbes!==C)&&(n.sun.length=h,n.directional.length=c,n.spot.length=v,n.rectArea.length=b,n.point.length=g,n.hemi.length=M,n.sunShadow.length=a,n.sunShadowMap.length=a,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.sunLength=h,P.directionalLength=c,P.pointLength=g,P.spotLength=v,P.rectAreaLength=b,P.hemiLength=M,P.numSunShadows=a,P.numDirectionalShadows=A,P.numPointShadows=T,P.numSpotShadows=x,P.numSpotMaps=y,P.numLightProbes=C,n.version=uv++)}function u(f,p){let m=0,d=0,h=0,a=0,_=0,c=0;const g=p.matrixWorldInverse;for(let v=0,b=f.length;v<b;v++){const M=f[v];if(M.isSunLight){const A=n.sun[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),m++}else if(M.isDirectionalLight){const A=n.directional[d];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),d++}else if(M.isSpotLight){const A=n.spot[a];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),a++}else if(M.isRectAreaLight){const A=n.rectArea[_];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const A=n.point[h];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const A=n.hemi[c];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),c++}}}return{setup:l,setupView:u,state:n}}function bf(i){const e=new hv(i),t=[],n=[],s=[];function r(m){p.camera=m,t.length=0,n.length=0,s.length=0}function o(m){m.isLightProbeGrid?s.push(m):t.push(m)}function l(m){n.push(m)}function u(){e.setup(t),s.sort((m,d)=>m.priority-d.priority||m.id-d.id)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:u,setupLightsView:f,pushLight:o,pushShadow:l}}function dv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new bf(i),e.set(s,[l])):r>=o.length?(l=new bf(i),o.push(l)):l=o[r],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
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
}`,gv=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],xv=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Sf=new dt,Mo=new Y,al=new Y;function vv(i,e,t){let n=new jr;const s=new Le,r=new Le,o=new Kt,l=new Dm,u=new Lm,f={},p=t.maxTextureSize,m={[ur]:zn,[zn]:ur,[Oi]:Oi},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const a=new kt;a.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ht(a,d),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=No;let g=this.type;this.render=function(T,x,y){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||T.length===0)return;this.type===Bd&&(ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=No);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),I=i.state;I.setBlending(qr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const q=g!==this.type;q&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(O=>O.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,O=T.length;L<O;L++){const H=T[L],X=H.shadow;if(X===void 0){ft("WebGLShadowMap:",H,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const Z=X.getFrameExtents();s.multiply(Z),r.copy(X.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(r.x=Math.floor(p/Z.x),s.x=r.x*Z.x,X.mapSize.x=r.x),s.y>p&&(r.y=Math.floor(p/Z.y),s.y=r.y*Z.y,X.mapSize.y=r.y));const $=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=$,X.map===null||q===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Po){if(H.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Jn(s.x,s.y,{format:fr,type:Ai,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),X.map.texture.name=H.name+".shadowMap",X.map.depthTexture=new eo(s.x,s.y,wi),X.map.depthTexture.name=H.name+".shadowMapDepth",X.map.depthTexture.format=Bs,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn}else H.isPointLight?(X.map=new $c(s.x),X.map.depthTexture=new zh(s.x,is)):(X.map=new Jn(s.x,s.y),X.map.depthTexture=new eo(s.x,s.y,is)),X.map.depthTexture.name=H.name+".shadowMap",X.map.depthTexture.format=Bs,this.type===No?(X.map.depthTexture.compareFunction=$?xh:gh,X.map.depthTexture.minFilter=Gn,X.map.depthTexture.magFilter=Gn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);const J=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();H.isPointLight!==!0&&X.updateMatrices(H,y);const re=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:y.layers;for(let ye=0;ye<J;ye++){const ae=X.getCamera(ye);if(H.isPointLight){const B=X.camera,ee=X.matrix,xe=H.distance||B.far;xe!==B.far&&(B.far=xe,B.updateProjectionMatrix()),Mo.setFromMatrixPosition(H.matrixWorld),B.position.copy(Mo),al.copy(B.position),al.add(gv[ye]),B.up.copy(xv[ye]),B.lookAt(al),B.updateMatrixWorld(),ee.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Sf.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Sf,B.coordinateSystem,B.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,ye),i.clear();else{ye===0&&(i.setRenderTarget(X.map),i.clear());const B=X.getViewport(ye);o.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),I.viewport(o)}n=X.getFrustum(ye),M(x,y,ae,H,re,this.type)}X.isPointLightShadow!==!0&&this.type===Po&&v(X,y),X.needsUpdate=!1}g=this.type,c.needsUpdate=!1,i.setRenderTarget(E,C,P)};function v(T,x){const y=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new Jn(s.x,s.y,{format:fr,type:Ai}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,y,d,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,y,h,_,null)}function b(T,x,y,E){let C=null;const P=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)C=P;else if(C=y.isPointLight===!0?u:l,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const I=C.uuid,q=x.uuid;let L=f[I];L===void 0&&(L={},f[I]=L);let O=L[q];O===void 0&&(O=C.clone(),L[q]=O,x.addEventListener("dispose",A)),C=O}if(C.visible=x.visible,C.wireframe=x.wireframe,E===Po?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:m[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const I=i.properties.get(C);I.light=y}return C}function M(T,x,y,E,C,P){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Po)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const L=e.update(T),O=T.material;if(Array.isArray(O)){const H=L.groups;for(let X=0,Z=H.length;X<Z;X++){const $=H[X],J=O[$.materialIndex];if(J&&J.visible){const re=b(T,J,E,P);T.onBeforeShadow(i,T,x,y,L,re,$),i.renderBufferDirect(y,null,L,re,T,$),T.onAfterShadow(i,T,x,y,L,re,$)}}}else if(O.visible){const H=b(T,O,E,P);T.onBeforeShadow(i,T,x,y,L,H,null),i.renderBufferDirect(y,null,L,H,T,null),T.onAfterShadow(i,T,x,y,L,H,null)}}const q=T.children;for(let L=0,O=q.length;L<O;L++)M(q[L],x,y,E,C,P)}function A(T){T.target.removeEventListener("dispose",A);for(const y in f){const E=f[y],C=T.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function _v(i,e){function t(){let D=!1;const V=new Kt;let k=null;const ne=new Kt(0,0,0,0);return{setMask:function(ie){k!==ie&&!D&&(i.colorMask(ie,ie,ie,ie),k=ie)},setLocked:function(ie){D=ie},setClear:function(ie,le,de,Ie,_e){_e===!0&&(ie*=Ie,le*=Ie,de*=Ie),V.set(ie,le,de,Ie),ne.equals(V)===!1&&(i.clearColor(ie,le,de,Ie),ne.copy(V))},reset:function(){D=!1,k=null,ne.set(-1,0,0,0)}}}function n(){let D=!1,V=!1,k=null,ne=null,ie=null;return{setReversed:function(le){if(V!==le){const de=e.get("EXT_clip_control");le?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),V=le;const Ie=ie;ie=null,this.setClear(Ie)}},getReversed:function(){return V},setTest:function(le){le?te(i.DEPTH_TEST):be(i.DEPTH_TEST)},setMask:function(le){k!==le&&!D&&(i.depthMask(le),k=le)},setFunc:function(le){if(V&&(le=vp[le]),ne!==le){switch(le){case yl:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case Ho:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case wl:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case El:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=le}},setLocked:function(le){D=le},setClear:function(le){ie!==le&&(ie=le,V&&(le=1-le),i.clearDepth(le))},reset:function(){D=!1,k=null,ne=null,ie=null,V=!1}}}function s(){let D=!1,V=null,k=null,ne=null,ie=null,le=null,de=null,Ie=null,_e=null;return{setTest:function(Ve){D||(Ve?te(i.STENCIL_TEST):be(i.STENCIL_TEST))},setMask:function(Ve){V!==Ve&&!D&&(i.stencilMask(Ve),V=Ve)},setFunc:function(Ve,Ke,Fe){(k!==Ve||ne!==Ke||ie!==Fe)&&(i.stencilFunc(Ve,Ke,Fe),k=Ve,ne=Ke,ie=Fe)},setOp:function(Ve,Ke,Fe){(le!==Ve||de!==Ke||Ie!==Fe)&&(i.stencilOp(Ve,Ke,Fe),le=Ve,de=Ke,Ie=Fe)},setLocked:function(Ve){D=Ve},setClear:function(Ve){_e!==Ve&&(i.clearStencil(Ve),_e=Ve)},reset:function(){D=!1,V=null,k=null,ne=null,ie=null,le=null,de=null,Ie=null,_e=null}}}const r=new t,o=new n,l=new s;let u={};const f=new WeakMap;let p={},m={},d={},h=new WeakMap,a=[],_=null,c=!1,g=null,v=null,b=null,M=null,A=null,T=null,x=null,y=new Ue(0,0,0),E=0,C=!1,P=null,I=null,q=null,L=null,O=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),X=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=Z>=2);let J=null,re={};const ye=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),B=new Kt().fromArray(ye),ee=new Kt().fromArray(ae);function xe(D,V,k,ne){const ie=new Uint8Array(4),le=i.createTexture();i.bindTexture(D,le),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<k;de++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(V,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(V+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return le}const ze={};ze[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),ze[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ze[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),l.setClear(0),te(i.DEPTH_TEST),o.setFunc(Ho),Oe(!1),Se(ru),te(i.CULL_FACE),we(qr);function te(D){p[D]!==!0&&(i.enable(D),p[D]=!0)}function be(D){p[D]!==!1&&(i.disable(D),p[D]=!1)}function ue(D,V){return d[D]!==V?(i.bindFramebuffer(D,V),d[D]=V,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=V),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=V),!0):!1}function Me(D,V){let k=a,ne=!1;if(D){k=h.get(V),k===void 0&&(k=[],h.set(V,k));const ie=D.textures;if(k.length!==ie.length||k[0]!==i.COLOR_ATTACHMENT0){for(let le=0,de=ie.length;le<de;le++)k[le]=i.COLOR_ATTACHMENT0+le;k.length=ie.length,ne=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,ne=!0);ne&&i.drawBuffers(k)}function qe(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const $e={[Gr]:i.FUNC_ADD,[Gd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};$e[Hd]=i.MIN,$e[Wd]=i.MAX;const pe={[Xd]:i.ZERO,[eh]:i.ONE,[qd]:i.SRC_COLOR,[th]:i.SRC_ALPHA,[Qd]:i.SRC_ALPHA_SATURATE,[Kd]:i.DST_COLOR,[$d]:i.DST_ALPHA,[Yd]:i.ONE_MINUS_SRC_COLOR,[Ac]:i.ONE_MINUS_SRC_ALPHA,[Jd]:i.ONE_MINUS_DST_COLOR,[Zd]:i.ONE_MINUS_DST_ALPHA,[jd]:i.CONSTANT_COLOR,[ep]:i.ONE_MINUS_CONSTANT_COLOR,[tp]:i.CONSTANT_ALPHA,[np]:i.ONE_MINUS_CONSTANT_ALPHA};function we(D,V,k,ne,ie,le,de,Ie,_e,Ve){if(D===qr){c===!0&&(be(i.BLEND),c=!1);return}if(c===!1&&(te(i.BLEND),c=!0),D!==jf){if(D!==g||Ve!==C){if((v!==Gr||A!==Gr)&&(i.blendEquation(i.FUNC_ADD),v=Gr,A=Gr),Ve)switch(D){case Fo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFunc(i.ONE,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",D);break}else switch(D){case Fo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ni:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ou:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case au:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",D);break}b=null,M=null,T=null,x=null,y.set(0,0,0),E=0,g=D,C=Ve}return}ie=ie||V,le=le||k,de=de||ne,(V!==v||ie!==A)&&(i.blendEquationSeparate($e[V],$e[ie]),v=V,A=ie),(k!==b||ne!==M||le!==T||de!==x)&&(i.blendFuncSeparate(pe[k],pe[ne],pe[le],pe[de]),b=k,M=ne,T=le,x=de),(Ie.equals(y)===!1||_e!==E)&&(i.blendColor(Ie.r,Ie.g,Ie.b,_e),y.copy(Ie),E=_e),g=D,C=!1}function Re(D,V){D.side===Oi?be(i.CULL_FACE):te(i.CULL_FACE);let k=D.side===zn;V&&(k=!k),Oe(k),D.blending===Fo&&D.transparent===!1?we(qr):we(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const ne=D.stencilWrite;l.setTest(ne),ne&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),He(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){P!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),P=D)}function Se(D){D!==Od?(te(i.CULL_FACE),D!==I&&(D===ru?i.cullFace(i.BACK):D===kd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):be(i.CULL_FACE),I=D}function Ze(D){D!==q&&(X&&i.lineWidth(D),q=D)}function He(D,V,k){D?(te(i.POLYGON_OFFSET_FILL),(L!==V||O!==k)&&(L=V,O=k,o.getReversed()&&(V=-V,k=-k),i.polygonOffset(V,k))):be(i.POLYGON_OFFSET_FILL)}function st(D){D?te(i.SCISSOR_TEST):be(i.SCISSOR_TEST)}function rt(D){D===void 0&&(D=i.TEXTURE0+H-1),J!==D&&(i.activeTexture(D),J=D)}function ct(D,V,k){k===void 0&&(J===null?k=i.TEXTURE0+H-1:k=J);let ne=re[k];ne===void 0&&(ne={type:void 0,texture:void 0},re[k]=ne),(ne.type!==D||ne.texture!==V)&&(J!==k&&(i.activeTexture(k),J=k),i.bindTexture(D,V||ze[D]),ne.type=D,ne.texture=V)}function Q(){const D=re[J];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function It(){try{i.compressedTexImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function Ae(){try{i.texSubImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function ve(){try{i.texSubImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function je(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function Be(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function Ye(){try{i.texStorage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function G(){try{i.texStorage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function U(){try{i.texImage2D(...arguments)}catch(D){Nt("WebGLState:",D)}}function oe(){try{i.texImage3D(...arguments)}catch(D){Nt("WebGLState:",D)}}function R(D){return m[D]!==void 0?m[D]:i.getParameter(D)}function w(D,V){m[D]!==V&&(i.pixelStorei(D,V),m[D]=V)}function F(D){B.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),B.copy(D))}function K(D){ee.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ee.copy(D))}function W(D,V){let k=f.get(V);k===void 0&&(k=new WeakMap,f.set(V,k));let ne=k.get(D);ne===void 0&&(ne=i.getUniformBlockIndex(V,D.name),i.uniformBlockBinding(V,ne,ne),k.set(D,ne))}function S(D,V,k){const ie=f.get(V).get(D);u[ie]!==k&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,k),u[ie]=k)}function z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},m={},J=null,re={},d={},u={},h=new WeakMap,a=[],_=null,c=!1,g=null,v=null,b=null,M=null,A=null,T=null,x=null,y=new Ue(0,0,0),E=0,C=!1,P=null,I=null,q=null,L=null,O=null,B.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),l.reset()}return{buffers:{color:r,depth:o,stencil:l},enable:te,disable:be,bindFramebuffer:ue,drawBuffers:Me,useProgram:qe,setBlending:we,setMaterial:Re,setFlipSided:Oe,setCullFace:Se,setLineWidth:Ze,setPolygonOffset:He,setScissorTest:st,activeTexture:rt,bindTexture:ct,unbindTexture:Q,compressedTexImage2D:It,compressedTexImage3D:ut,texImage2D:U,texImage3D:oe,pixelStorei:w,getParameter:R,updateUBOMapping:W,uniformBlockBinding:S,texStorage2D:Ye,texStorage3D:G,texSubImage2D:Ae,texSubImage3D:ve,compressedTexSubImage2D:je,compressedTexSubImage3D:Be,scissor:F,viewport:K,reset:z}}function yv(i,e,t,n,s,r,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Le,p=new WeakMap,m=new Set;let d;const h=new WeakMap,a=new Set,_=new FinalizationRegistry(G=>a.delete(G));let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(G,U){return c?new OffscreenCanvas(G,U):u0("canvas")}function v(G,U,oe){let R=1;const w=Ye(G);if((w.width>oe||w.height>oe)&&(R=oe/Math.max(w.width,w.height)),R<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const F=Math.floor(R*w.width),K=Math.floor(R*w.height);d===void 0&&(d=g(F,K));const W=U?g(F,K):d;return W.width=F,W.height=K,W.getContext("2d").drawImage(G,0,0,F,K),ft("WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+F+"x"+K+")."),W}else return"data"in G&&ft("WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),G;return G}function b(G){return G.generateMipmaps}function M(G){i.generateMipmap(G)}function A(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(G,U,oe,R,w,F=!1){if(G!==null){if(i[G]!==void 0)return i[G];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let K;R&&(K=e.get("EXT_texture_norm16"),K||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=U;if(U===i.RED&&(oe===i.FLOAT&&(W=i.R32F),oe===i.HALF_FLOAT&&(W=i.R16F),oe===i.UNSIGNED_BYTE&&(W=i.R8),oe===i.UNSIGNED_SHORT&&K&&(W=K.R16_EXT),oe===i.SHORT&&K&&(W=K.R16_SNORM_EXT)),U===i.RED_INTEGER&&(oe===i.UNSIGNED_BYTE&&(W=i.R8UI),oe===i.UNSIGNED_SHORT&&(W=i.R16UI),oe===i.UNSIGNED_INT&&(W=i.R32UI),oe===i.BYTE&&(W=i.R8I),oe===i.SHORT&&(W=i.R16I),oe===i.INT&&(W=i.R32I)),U===i.RG&&(oe===i.FLOAT&&(W=i.RG32F),oe===i.HALF_FLOAT&&(W=i.RG16F),oe===i.UNSIGNED_BYTE&&(W=i.RG8),oe===i.UNSIGNED_SHORT&&K&&(W=K.RG16_EXT),oe===i.SHORT&&K&&(W=K.RG16_SNORM_EXT)),U===i.RG_INTEGER&&(oe===i.UNSIGNED_BYTE&&(W=i.RG8UI),oe===i.UNSIGNED_SHORT&&(W=i.RG16UI),oe===i.UNSIGNED_INT&&(W=i.RG32UI),oe===i.BYTE&&(W=i.RG8I),oe===i.SHORT&&(W=i.RG16I),oe===i.INT&&(W=i.RG32I)),U===i.RGB_INTEGER&&(oe===i.UNSIGNED_BYTE&&(W=i.RGB8UI),oe===i.UNSIGNED_SHORT&&(W=i.RGB16UI),oe===i.UNSIGNED_INT&&(W=i.RGB32UI),oe===i.BYTE&&(W=i.RGB8I),oe===i.SHORT&&(W=i.RGB16I),oe===i.INT&&(W=i.RGB32I)),U===i.RGBA_INTEGER&&(oe===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),oe===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),oe===i.UNSIGNED_INT&&(W=i.RGBA32UI),oe===i.BYTE&&(W=i.RGBA8I),oe===i.SHORT&&(W=i.RGBA16I),oe===i.INT&&(W=i.RGBA32I)),U===i.RGB&&(oe===i.UNSIGNED_SHORT&&K&&(W=K.RGB16_EXT),oe===i.SHORT&&K&&(W=K.RGB16_SNORM_EXT),oe===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),oe===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),U===i.RGBA){const S=F?c0:Pt.getTransfer(w);oe===i.FLOAT&&(W=i.RGBA32F),oe===i.HALF_FLOAT&&(W=i.RGBA16F),oe===i.UNSIGNED_BYTE&&(W=S===Yt?i.SRGB8_ALPHA8:i.RGBA8),oe===i.UNSIGNED_SHORT&&K&&(W=K.RGBA16_EXT),oe===i.SHORT&&K&&(W=K.RGBA16_SNORM_EXT),oe===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),oe===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function x(G,U){let oe;return G?U===null||U===is||U===Qr?oe=i.DEPTH24_STENCIL8:U===wi?oe=i.DEPTH32F_STENCIL8:U===Xo&&(oe=i.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===is||U===Qr?oe=i.DEPTH_COMPONENT24:U===wi?oe=i.DEPTH_COMPONENT32F:U===Xo&&(oe=i.DEPTH_COMPONENT16),oe}function y(G,U){return b(G)===!0||G.isFramebufferTexture&&G.minFilter!==vn&&G.minFilter!==Gn?Math.log2(Math.max(U.width,U.height))+1:G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?U.mipmaps.length:1}function E(G){const U=new WeakRef(G);n.get(G).__ref=U,a.add(U),_.register(G,U,U)}function C(G){const U=n.get(G).__ref;U!==void 0&&(a.delete(U),_.unregister(U))}function P(G){q(G.target)}function I(G){L(G.target)}function q(G){G.removeEventListener("dispose",P),C(G),H(G),G.isVideoTexture&&p.delete(G),G.isHTMLTexture&&m.delete(G)}function L(G){G.removeEventListener("dispose",I),C(G),Z(G)}function O(){for(const G of a){const U=G.deref();U!==void 0&&(U.isRenderTarget===!0?L(U):q(U))}a.clear(),m.clear()}function H(G){const U=n.get(G);if(U.__webglInit===void 0)return;const oe=G.source,R=h.get(oe);if(R){const w=R[U.__cacheKey];w.usedTimes--,w.usedTimes===0&&X(G),Object.keys(R).length===0&&h.delete(oe)}n.remove(G)}function X(G){const U=n.get(G);i.deleteTexture(U.__webglTexture);const oe=G.source,R=h.get(oe);delete R[U.__cacheKey],o.memory.textures--}function Z(G){const U=n.get(G);U.__depthDisposeCallback&&U.__depthDisposeCallback();const oe=G.depthTexture;if(oe&&oe.renderTarget===G&&q(oe),G.isWebGLCubeRenderTarget)for(let w=0;w<6;w++){if(Array.isArray(U.__webglFramebuffer[w]))for(let F=0;F<U.__webglFramebuffer[w].length;F++)i.deleteFramebuffer(U.__webglFramebuffer[w][F]);else i.deleteFramebuffer(U.__webglFramebuffer[w]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[w])}else{if(Array.isArray(U.__webglFramebuffer))for(let w=0;w<U.__webglFramebuffer.length;w++)i.deleteFramebuffer(U.__webglFramebuffer[w]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let w=0;w<U.__webglColorRenderbuffer.length;w++)U.__webglColorRenderbuffer[w]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[w]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}const R=G.textures;for(let w=0,F=R.length;w<F;w++){const K=n.get(R[w]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(R[w])}n.remove(G)}let $=0;function J(){$=0}function re(){return $}function ye(G){$=G}function ae(){const G=$;return G>=s.maxTextures&&ft("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,G}function B(G){const U=[];return U.push(G.wrapS),U.push(G.wrapT),U.push(G.wrapR||0),U.push(G.magFilter),U.push(G.minFilter),U.push(G.anisotropy),U.push(G.internalFormat),U.push(G.format),U.push(G.type),U.push(G.generateMipmaps),U.push(G.mipmapsAutoUpdate),U.push(G.premultiplyAlpha),U.push(G.flipY),U.push(G.unpackAlignment),U.push(G.colorSpace),U.join()}function ee(G,U){const oe=n.get(G);if(G.isVideoTexture&&je(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&oe.__version!==G.version){const R=G.image;if(R===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(R.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(oe,G,U);return}}else G.isExternalTexture&&(oe.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture,i.TEXTURE0+U)}function xe(G,U){const oe=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&oe.__version!==G.version){Re(oe,G,U);return}else G.isExternalTexture&&(oe.__webglTexture=G.sourceTexture?G.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,oe.__webglTexture,i.TEXTURE0+U)}function ze(G,U){const oe=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&oe.__version!==G.version){Re(oe,G,U);return}t.bindTexture(i.TEXTURE_3D,oe.__webglTexture,i.TEXTURE0+U)}function te(G,U){const oe=n.get(G);if(G.version>0&&oe.__version!==G.version){Oe(oe,G,U);return}t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture,i.TEXTURE0+U)}const be={[Jr]:i.REPEAT,[ji]:i.CLAMP_TO_EDGE,[Al]:i.MIRRORED_REPEAT},ue={[vn]:i.NEAREST,[op]:i.NEAREST_MIPMAP_NEAREST,[ta]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[R0]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},Me={[up]:i.NEVER,[vh]:i.ALWAYS,[fp]:i.LESS,[gh]:i.LEQUAL,[hp]:i.EQUAL,[xh]:i.GEQUAL,[dp]:i.GREATER,[pp]:i.NOTEQUAL};function qe(G,U){if(U.type===wi&&e.has("OES_texture_float_linear")===!1&&(U.magFilter===Gn||U.magFilter===R0||U.magFilter===ta||U.magFilter===es||U.minFilter===Gn||U.minFilter===R0||U.minFilter===ta||U.minFilter===es)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,be[U.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,be[U.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,be[U.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,ue[U.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,ue[U.minFilter]),U.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,Me[U.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===vn||U.minFilter!==ta&&U.minFilter!==es||U.type===wi&&e.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||n.get(U).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");i.texParameterf(G,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,s.getMaxAnisotropy())),n.get(U).__currentAnisotropy=U.anisotropy}}}function $e(G,U){let oe=!1;G.__webglInit===void 0&&(G.__webglInit=!0,U.addEventListener("dispose",P),E(U));const R=U.source;let w=h.get(R);w===void 0&&(w={},h.set(R,w));const F=B(U);if(F!==G.__cacheKey){w[F]===void 0&&(w[F]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,oe=!0),w[F].usedTimes++;const K=w[G.__cacheKey];K!==void 0&&(w[G.__cacheKey].usedTimes--,K.usedTimes===0&&X(U)),G.__cacheKey=F,G.__webglTexture=w[F].texture}return oe}function pe(G,U,oe){return Math.floor(Math.floor(G/oe)/U)}function we(G,U,oe,R){const F=G.updateRanges;if(F.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,U.width,U.height,oe,R,U.data);else{F.sort((D,V)=>D.start-V.start);let K=0;for(let D=1;D<F.length;D++){const V=F[K],k=F[D],ne=V.start+V.count,ie=pe(k.start,U.width,4),le=pe(V.start,U.width,4);k.start<=ne+1&&ie===le&&pe(k.start+k.count-1,U.width,4)===ie?V.count=Math.max(V.count,k.start+k.count-V.start):(++K,F[K]=k)}F.length=K+1;const W=t.getParameter(i.UNPACK_ROW_LENGTH),S=t.getParameter(i.UNPACK_SKIP_PIXELS),z=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,U.width);for(let D=0,V=F.length;D<V;D++){const k=F[D],ne=Math.floor(k.start/4),ie=Math.ceil(k.count/4),le=ne%U.width,de=Math.floor(ne/U.width),Ie=ie,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,le),t.pixelStorei(i.UNPACK_SKIP_ROWS,de),t.texSubImage2D(i.TEXTURE_2D,0,le,de,Ie,_e,oe,R,U.data)}G.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,W),t.pixelStorei(i.UNPACK_SKIP_PIXELS,S),t.pixelStorei(i.UNPACK_SKIP_ROWS,z)}}function Re(G,U,oe){let R=i.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(R=i.TEXTURE_2D_ARRAY),U.isData3DTexture&&(R=i.TEXTURE_3D);const w=$e(G,U),F=U.source;t.bindTexture(R,G.__webglTexture,i.TEXTURE0+oe);const K=n.get(F);if(F.version!==K.__version||w===!0){if(t.activeTexture(i.TEXTURE0+oe),(typeof ImageBitmap<"u"&&U.image instanceof ImageBitmap)===!1){const _e=Pt.getPrimaries(Pt.workingColorSpace),Ve=U.colorSpace===ki?null:Pt.getPrimaries(U.colorSpace),Ke=U.colorSpace===ki||_e===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,U.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,U.unpackAlignment);let S=v(U.image,!1,s.maxTextureSize);S=Be(U,S);const z=r.convert(U.format,U.colorSpace),D=r.convert(U.type);let V=T(U.internalFormat,z,D,U.normalized,U.colorSpace,U.isVideoTexture);qe(R,U);let k;const ne=U.mipmaps,ie=U.isVideoTexture!==!0,le=K.__version===void 0||w===!0,de=F.dataReady,Ie=y(U,S);if(U.isDepthTexture)V=x(U.format===Is,U.type),le&&(ie?t.texStorage2D(i.TEXTURE_2D,1,V,S.width,S.height):t.texImage2D(i.TEXTURE_2D,0,V,S.width,S.height,0,z,D,null));else if(U.isDataTexture)if(ne.length>0){ie&&le&&t.texStorage2D(i.TEXTURE_2D,Ie,V,ne[0].width,ne[0].height);for(let _e=0,Ve=ne.length;_e<Ve;_e++)k=ne[_e],ie?de&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,k.width,k.height,z,D,k.data):t.texImage2D(i.TEXTURE_2D,_e,V,k.width,k.height,0,z,D,k.data);U.generateMipmaps=!1}else ie?(le&&t.texStorage2D(i.TEXTURE_2D,Ie,V,S.width,S.height),de&&we(U,S,z,D)):t.texImage2D(i.TEXTURE_2D,0,V,S.width,S.height,0,z,D,S.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){ie&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,V,ne[0].width,ne[0].height,S.depth);for(let _e=0,Ve=ne.length;_e<Ve;_e++)if(k=ne[_e],U.format!==Vn)if(z!==null)if(ie){if(de)if(U.layerUpdates.size>0){const Ke=tf(k.width,k.height,U.format,U.type);for(const Fe of U.layerUpdates){const Mt=k.data.subarray(Fe*Ke/k.data.BYTES_PER_ELEMENT,(Fe+1)*Ke/k.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Fe,k.width,k.height,1,z,Mt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,k.width,k.height,S.depth,z,k.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,V,k.width,k.height,S.depth,0,k.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,k.width,k.height,S.depth,z,D,k.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,V,k.width,k.height,S.depth,0,z,D,k.data);U.layerUpdates.size>0&&U.clearLayerUpdates()}else{ie&&le&&t.texStorage2D(i.TEXTURE_2D,Ie,V,ne[0].width,ne[0].height);for(let _e=0,Ve=ne.length;_e<Ve;_e++)k=ne[_e],U.format!==Vn?z!==null?ie?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,k.width,k.height,z,k.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,V,k.width,k.height,0,k.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?de&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,k.width,k.height,z,D,k.data):t.texImage2D(i.TEXTURE_2D,_e,V,k.width,k.height,0,z,D,k.data)}else if(U.isDataArrayTexture)if(ie){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,V,S.width,S.height,S.depth),de)if(U.layerUpdates.size>0){const _e=tf(S.width,S.height,U.format,U.type);for(const Ve of U.layerUpdates){const Ke=S.data.subarray(Ve*_e/S.data.BYTES_PER_ELEMENT,(Ve+1)*_e/S.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,S.width,S.height,1,z,D,Ke)}U.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,z,D,S.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,V,S.width,S.height,S.depth,0,z,D,S.data);else if(U.isData3DTexture)ie?(le&&t.texStorage3D(i.TEXTURE_3D,Ie,V,S.width,S.height,S.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,z,D,S.data)):t.texImage3D(i.TEXTURE_3D,0,V,S.width,S.height,S.depth,0,z,D,S.data);else if(U.isFramebufferTexture){if(le)if(ie)t.texStorage2D(i.TEXTURE_2D,Ie,V,S.width,S.height);else{let _e=S.width,Ve=S.height;for(let Ke=0;Ke<Ie;Ke++)t.texImage2D(i.TEXTURE_2D,Ke,V,_e,Ve,0,z,D,null),_e>>=1,Ve>>=1}}else if(U.isHTMLTexture){if("texElementImage2D"in i){const _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),S.parentNode!==_e){_e.appendChild(S),m.add(U),_e.onpaint=Ve=>{const Ke=Ve.changedElements;for(const Fe of m)Ke.includes(Fe.image)&&(Fe.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,S);else{const Ke=i.RGBA,Fe=i.RGBA,Mt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ke,Fe,Mt,S)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ie&&le){const _e=Ye(ne[0]);t.texStorage2D(i.TEXTURE_2D,Ie,V,_e.width,_e.height)}for(let _e=0,Ve=ne.length;_e<Ve;_e++)k=ne[_e],ie?de&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,z,D,k):t.texImage2D(i.TEXTURE_2D,_e,V,z,D,k);U.generateMipmaps=!1}else if(ie){if(le){const _e=Ye(S);t.texStorage2D(i.TEXTURE_2D,Ie,V,_e.width,_e.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,z,D,S)}else t.texImage2D(i.TEXTURE_2D,0,V,z,D,S);b(U)&&U.mipmapsAutoUpdate===!0&&M(R),K.__version=F.version,U.onUpdate&&U.onUpdate(U)}G.__version=U.version}function Oe(G,U,oe){if(U.image.length!==6)return;const R=$e(G,U),w=U.source;t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+oe);const F=n.get(w);if(w.version!==F.__version||R===!0){t.activeTexture(i.TEXTURE0+oe);const K=Pt.getPrimaries(Pt.workingColorSpace),W=U.colorSpace===ki?null:Pt.getPrimaries(U.colorSpace),S=U.colorSpace===ki||K===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,U.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,U.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);const z=U.isCompressedTexture||U.image[0].isCompressedTexture,D=U.image[0]&&U.image[0].isDataTexture,V=[];for(let Fe=0;Fe<6;Fe++)!z&&!D?V[Fe]=v(U.image[Fe],!0,s.maxCubemapSize):V[Fe]=D?U.image[Fe].image:U.image[Fe],V[Fe]=Be(U,V[Fe]);const k=V[0],ne=r.convert(U.format,U.colorSpace),ie=r.convert(U.type);let le=T(U.internalFormat,ne,ie,U.normalized,U.colorSpace);const de=U.isVideoTexture!==!0,Ie=F.__version===void 0||R===!0,_e=w.dataReady;let Ve=y(U,k);qe(i.TEXTURE_CUBE_MAP,U);let Ke;if(U.isDepthTexture){if(le=x(U.format===Is,U.type),Ie)if(de)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,le,k.width,k.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,le,k.width,k.height,0,ne,ie,null)}else if(z){de&&Ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,le,k.width,k.height);for(let Fe=0;Fe<6;Fe++){Ke=V[Fe].mipmaps;for(let Mt=0;Mt<Ke.length;Mt++){const un=Ke[Mt];U.format!==Vn?ne!==null?de?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt,0,0,un.width,un.height,ne,un.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt,le,un.width,un.height,0,un.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt,0,0,un.width,un.height,ne,ie,un.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt,le,un.width,un.height,0,ne,ie,un.data)}}}else{if(Ke=U.mipmaps,de&&Ie){Ke.length>0&&Ve++;const Fe=Ye(V[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,le,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(D){de?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,V[Fe].width,V[Fe].height,ne,ie,V[Fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,le,V[Fe].width,V[Fe].height,0,ne,ie,V[Fe].data);for(let Mt=0;Mt<Ke.length;Mt++){const Ci=Ke[Mt].image[Fe].image;de?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt+1,0,0,Ci.width,Ci.height,ne,ie,Ci.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt+1,le,Ci.width,Ci.height,0,ne,ie,Ci.data)}}else{de?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ne,ie,V[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,le,ne,ie,V[Fe]);for(let Mt=0;Mt<Ke.length;Mt++){const un=Ke[Mt];de?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt+1,0,0,ne,ie,un.image[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Mt+1,le,ne,ie,un.image[Fe])}}}b(U)&&U.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),F.__version=w.version,U.onUpdate&&U.onUpdate(U)}G.__version=U.version}function Se(G,U,oe,R,w,F){const K=r.convert(oe.format,oe.colorSpace),W=r.convert(oe.type),S=T(oe.internalFormat,K,W,oe.normalized,oe.colorSpace),z=n.get(U),D=n.get(oe);if(D.__renderTarget=U,!z.__hasExternalTextures){const V=Math.max(1,U.width>>F),k=Math.max(1,U.height>>F);w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?t.texImage3D(w,F,S,V,k,U.depth,0,K,W,null):t.texImage2D(w,F,S,V,k,0,K,W,null)}t.bindFramebuffer(i.FRAMEBUFFER,G),ve(U)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,R,w,D.__webglTexture,0,Ae(U)):(w===i.TEXTURE_2D||w>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&w<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,R,w,D.__webglTexture,F),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(G,U,oe){if(i.bindRenderbuffer(i.RENDERBUFFER,G),U.depthBuffer){const R=U.depthTexture,w=R&&R.isDepthTexture?R.type:null,F=x(U.stencilBuffer,w),K=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(U)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(U),F,U.width,U.height):oe?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(U),F,U.width,U.height):i.renderbufferStorage(i.RENDERBUFFER,F,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}else{const R=U.textures;for(let w=0;w<R.length;w++){const F=R[w],K=r.convert(F.format,F.colorSpace),W=r.convert(F.type),S=T(F.internalFormat,K,W,F.normalized,F.colorSpace);ve(U)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(U),S,U.width,U.height):oe?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(U),S,U.width,U.height):i.renderbufferStorage(i.RENDERBUFFER,S,U.width,U.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(G,U,oe){const R=U.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,G),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const w=n.get(U.depthTexture);w.__renderTarget=U;const F=R?U.depthTexture.image[0]:U.depthTexture.image;(!w.__webglTexture||F.width!==U.width||F.height!==U.height)&&(F.width=U.width,F.height=U.height,U.depthTexture.needsUpdate=!0),R?te(U.depthTexture,0):ee(U.depthTexture,0);const K=w.__webglTexture,W=Ae(U),S=R?i.TEXTURE_CUBE_MAP_POSITIVE_X+oe:i.TEXTURE_2D,z=U.depthTexture.format===Is?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(U.depthTexture.format===Bs)ve(U)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,S,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,z,S,K,0);else if(U.depthTexture.format===Is)ve(U)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,z,S,K,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,z,S,K,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(G){const U=n.get(G),oe=G.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==G.depthTexture){const R=G.depthTexture;if(U.__depthDisposeCallback&&U.__depthDisposeCallback(),R){const w=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,R.removeEventListener("dispose",w)};R.addEventListener("dispose",w),U.__depthDisposeCallback=w}U.__boundDepthTexture=R}if(G.depthTexture&&!U.__autoAllocateDepthBuffer)if(oe)for(let R=0;R<6;R++)He(U.__webglFramebuffer[R],G,R);else G.texture.mipmaps.length>0?He(U.__webglFramebuffer[0],G,0):He(U.__webglFramebuffer,G,0);else if(oe){U.__webglDepthbuffer=[];for(let R=0;R<6;R++)if(t.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer[R]),U.__webglDepthbuffer[R]===void 0)U.__webglDepthbuffer[R]=i.createRenderbuffer(),Ze(U.__webglDepthbuffer[R],G,!1);else{const w=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=U.__webglDepthbuffer[R];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,w,i.RENDERBUFFER,F)}}else if(G.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=i.createRenderbuffer(),Ze(U.__webglDepthbuffer,G,!1);else{const w=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=U.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,w,i.RENDERBUFFER,F)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(G,U,oe){const R=n.get(G);U!==void 0&&Se(R.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),oe!==void 0&&st(G)}function ct(G){const U=G.texture,oe=n.get(G),R=n.get(U);G.addEventListener("dispose",I),E(G);const w=G.textures,F=G.isWebGLCubeRenderTarget===!0,K=w.length>1;if(K||(R.__webglTexture===void 0&&(R.__webglTexture=i.createTexture()),R.__version=U.version,o.memory.textures++),F){oe.__webglFramebuffer=[];for(let W=0;W<6;W++)if(U.mipmaps.length>0){oe.__webglFramebuffer[W]=[];for(let S=0;S<U.mipmaps.length;S++)oe.__webglFramebuffer[W][S]=i.createFramebuffer()}else oe.__webglFramebuffer[W]=i.createFramebuffer()}else{if(U.mipmaps.length>0){oe.__webglFramebuffer=[];for(let W=0;W<U.mipmaps.length;W++)oe.__webglFramebuffer[W]=i.createFramebuffer()}else oe.__webglFramebuffer=i.createFramebuffer();if(K)for(let W=0,S=w.length;W<S;W++){const z=n.get(w[W]);z.__webglTexture===void 0&&(z.__webglTexture=i.createTexture(),o.memory.textures++)}if(G.samples>0&&ve(G)===!1){oe.__webglMultisampledFramebuffer=i.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let W=0;W<w.length;W++){const S=w[W];oe.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,oe.__webglColorRenderbuffer[W]);const z=r.convert(S.format,S.colorSpace),D=r.convert(S.type),V=T(S.internalFormat,z,D,S.normalized,S.colorSpace,G.isXRRenderTarget===!0),k=Ae(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,k,V,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,oe.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(oe.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(oe.__webglDepthRenderbuffer,G,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture),qe(i.TEXTURE_CUBE_MAP,U);for(let W=0;W<6;W++)if(U.mipmaps.length>0)for(let S=0;S<U.mipmaps.length;S++)Se(oe.__webglFramebuffer[W][S],G,U,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,S);else Se(oe.__webglFramebuffer[W],G,U,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);b(U)?M(i.TEXTURE_CUBE_MAP):U.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,U.mipmaps.length-1),t.unbindTexture()}else if(K){for(let W=0,S=w.length;W<S;W++){const z=w[W],D=n.get(z);let V=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(V=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(V,D.__webglTexture),qe(V,z),Se(oe.__webglFramebuffer,G,z,i.COLOR_ATTACHMENT0+W,V,0),b(z)&&M(V)}t.unbindTexture()}else{let W=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(W=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,R.__webglTexture),qe(W,U),U.mipmaps.length>0)for(let S=0;S<U.mipmaps.length;S++)Se(oe.__webglFramebuffer[S],G,U,i.COLOR_ATTACHMENT0,W,S);else Se(oe.__webglFramebuffer,G,U,i.COLOR_ATTACHMENT0,W,0);b(U)?M(W):U.mipmaps.length>0&&i.texParameteri(W,i.TEXTURE_MAX_LEVEL,U.mipmaps.length-1),t.unbindTexture()}G.depthBuffer&&st(G)}function Q(G){const U=G.textures;for(let oe=0,R=U.length;oe<R;oe++){const w=U[oe];if(b(w)&&w.mipmapsAutoUpdate===!0){const F=A(G),K=n.get(w).__webglTexture;t.bindTexture(F,K),M(F),t.unbindTexture()}}}const It=[];function ut(G){if(G.samples>0){if(ve(G)===!1){const U=G.textures,oe=G.width,R=G.height;let w=i.COLOR_BUFFER_BIT;const F=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(G),W=U.length>1;if(W)for(let z=0;z<U.length;z++)t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),G.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let z=0;z<U.length;z++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(w|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(w|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[z]);const D=n.get(U[z]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,oe,R,0,0,oe,R,w,i.NEAREST),u===!0&&(It.length=0,It.push(i.COLOR_ATTACHMENT0+z),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&It.push(F),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let z=0;z<U.length;z++){t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.RENDERBUFFER,K.__webglColorRenderbuffer[z]);const D=n.get(U[z]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+z,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&u){const U=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[U])}}}function Ae(G){return Math.min(s.maxSamples,G.samples)}function ve(G){const U=n.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function je(G){const U=o.render.frame;p.get(G)!==U&&(p.set(G,U),G.update())}function Be(G,U){const oe=G.colorSpace,R=G.format,w=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||oe!==l0&&oe!==ki&&(Pt.getTransfer(oe)===Yt?(R!==Vn||w!==ri)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",oe)),U}function Ye(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(f.width=G.naturalWidth||G.width,f.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(f.width=G.displayWidth,f.height=G.displayHeight):(f.width=G.width,f.height=G.height),f}this.allocateTextureUnit=ae,this.resetTextureUnits=J,this.getTextureUnits=re,this.setTextureUnits=ye,this.setTexture2D=ee,this.setTexture2DArray=xe,this.setTexture3D=ze,this.setTextureCube=te,this.rebindTextures=rt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ve,this.dispose=O}function Mv(i,e){function t(n,s=ki){let r;const o=Pt.getTransfer(s);if(n===ri)return i.UNSIGNED_BYTE;if(n===Pc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uh)return i.BYTE;if(n===fh)return i.SHORT;if(n===Xo)return i.UNSIGNED_SHORT;if(n===Cc)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===wi)return i.FLOAT;if(n===Ai)return i.HALF_FLOAT;if(n===ph)return i.ALPHA;if(n===mh)return i.RGB;if(n===Vn)return i.RGBA;if(n===Bs)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===Lc)return i.RED;if(n===zc)return i.RED_INTEGER;if(n===fr)return i.RG;if(n===Ic)return i.RG_INTEGER;if(n===Uc)return i.RGBA_INTEGER;if(n===Ya||n===$a||n===Za||n===Ka)if(o===Yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===zl||n===Il||n===Ul||n===Nl||n===r0||n===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ll||n===zl)return o===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ul)return r.COMPRESSED_R11_EAC;if(n===Nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===r0)return r.COMPRESSED_RG11_EAC;if(n===Fl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ol||n===kl||n===Bl||n===Gl||n===Vl||n===Hl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Zl||n===Kl||n===Jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ol)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===kl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$l)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===jl||n===ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ql)return o===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===nc||n===o0||n===ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===o0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sv=`
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

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ih(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:bv,fragmentShader:Sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tv extends mr{constructor(e,t){super();const n=this;let s=null,r=1,o=null,l="local-floor",u=1,f=null,p=null,m=null,d=null,h=null,a=null;const _=typeof XRWebGLBinding<"u",c=new wv,g={},v=t.getContextAttributes();let b=null,M=null;const A=[],T=[],x=new Le;let y=null,E=null;const C=new ii;C.viewport=new Kt;const P=new ii;P.viewport=new Kt;const I=[C,P],q=new Fm;let L=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ee=A[B];return ee===void 0&&(ee=new F0,A[B]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(B){let ee=A[B];return ee===void 0&&(ee=new F0,A[B]=ee),ee.getGripSpace()},this.getHand=function(B){let ee=A[B];return ee===void 0&&(ee=new F0,A[B]=ee),ee.getHandSpace()};function H(B){const ee=T.indexOf(B.inputSource);if(ee===-1)return;const xe=A[ee];xe!==void 0&&(xe.update(B.inputSource,B.frame,f||o),xe.dispatchEvent({type:B.type,data:B.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let B=0;B<A.length;B++){const ee=T[B];ee!==null&&(T[B]=null,A[B].disconnect(ee))}L=null,O=null,c.reset();for(const B in g)delete g[B];if(e.setRenderTarget(b),h=null,d=null,m=null,s=null,M=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),E!==null){const B=E.camera;B.fov=E.fov,B.zoom=E.zoom,B.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){l=B,n.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(B){f=B},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return m===null&&_&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return a},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ze=null,te=null;v.depth&&(te=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?Is:Bs,ze=v.stencil?Qr:is);const be={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:r};m=this.getBinding(),d=m.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Jn(d.textureWidth,d.textureHeight,{format:Vn,type:ri,depthTexture:new eo(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Jn(h.framebufferWidth,h.framebufferHeight,{format:Vn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(u),f=null,o=await s.requestReferenceSpace(l),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function Z(B){for(let ee=0;ee<B.removed.length;ee++){const xe=B.removed[ee],ze=T.indexOf(xe);ze>=0&&(T[ze]=null,A[ze].disconnect(xe))}for(let ee=0;ee<B.added.length;ee++){const xe=B.added[ee];let ze=T.indexOf(xe);if(ze===-1){for(let be=0;be<A.length;be++)if(be>=T.length){T.push(xe),ze=be;break}else if(T[be]===null){T[be]=xe,ze=be;break}if(ze===-1)break}const te=A[ze];te&&te.connect(xe)}}function $(B,ee){ee===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ee.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let ee=B.near,xe=B.far;c.texture!==null&&(c.depthNear>0&&(ee=c.depthNear),c.depthFar>0&&(xe=c.depthFar)),q.near=P.near=C.near=ee,q.far=P.far=C.far=xe,(L!==q.near||O!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),L=q.near,O=q.far),q.layers.mask=B.layers.mask|6,C.layers.mask=q.layers.mask&-5,P.layers.mask=q.layers.mask&-3;const ze=B.parent,te=q.cameras;$(q,ze);for(let be=0;be<te.length;be++)$(te[be],ze);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),E===null&&B.isPerspectiveCamera&&(E={camera:B,fov:B.fov,zoom:B.zoom}),J(B,q,ze)};function J(B,ee,xe){xe===null?B.matrix.copy(ee.matrixWorld):(B.matrix.copy(xe.matrixWorld),B.matrix.invert(),B.matrix.multiply(ee.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(ee.projectionMatrix),B.projectionMatrixInverse.copy(ee.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=h0*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&h===null))return u},this.setFoveation=function(B){u=B,d!==null&&(d.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(q)},this.getCameraTexture=function(B){return g[B]};let re=null;function ye(B,ee){if(p=ee.getViewerPose(f||o),a=ee,p!==null){const xe=p.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let ze=!1;xe.length!==q.cameras.length&&(q.cameras.length=0,ze=!0);for(let Me=0;Me<xe.length;Me++){const qe=xe[Me];let $e=null;if(h!==null)$e=h.getViewport(qe);else{const we=m.getViewSubImage(d,qe);$e=we.viewport,Me===0&&(e.setRenderTargetTextures(M,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(M))}let pe=I[Me];pe===void 0&&(pe=new ii,pe.layers.enable(Me),pe.viewport=new Kt,I[Me]=pe),pe.matrix.fromArray(qe.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(qe.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set($e.x,$e.y,$e.width,$e.height),Me===0&&(q.matrix.copy(pe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ze===!0&&q.cameras.push(pe)}const te=s.enabledFeatures;if(te&&te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){m=n.getBinding();const Me=m.getDepthInformation(xe[0]);Me&&Me.isValid&&Me.texture&&c.init(Me,s.renderState)}if(te&&te.includes("camera-access")&&_){e.state.unbindTexture(),m=n.getBinding();for(let Me=0;Me<xe.length;Me++){const qe=xe[Me].camera;if(qe){let $e=g[qe];$e||($e=new Ih,g[qe]=$e);const pe=m.getCameraImage(qe);$e.sourceTexture=pe}}}}for(let xe=0;xe<A.length;xe++){const ze=T[xe],te=A[xe];ze!==null&&te!==void 0&&te.update(ze,ee,f||o)}re&&re(B,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),a=null}const ae=new $h;ae.setAnimationLoop(ye),this.setAnimationLoop=function(B){re=B},this.dispose=function(){}}}const Ev=new dt,sd=new gt;sd.set(-1,0,0,0,1,0,0,0,1);function Av(i,e){function t(c,g){c.matrixAutoUpdate===!0&&c.updateMatrix(),g.value.copy(c.matrix)}function n(c,g){g.color.getRGB(c.fogColor.value,Wh(i)),g.isFog?(c.fogNear.value=g.near,c.fogFar.value=g.far):g.isFogExp2&&(c.fogDensity.value=g.density)}function s(c,g,v,b,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(c,g):g.isMeshLambertMaterial?(r(c,g),g.envMap&&(c.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(c,g),m(c,g)):g.isMeshPhongMaterial?(r(c,g),p(c,g),g.envMap&&(c.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(c,g),d(c,g),g.isMeshPhysicalMaterial&&h(c,g,M)):g.isMeshMatcapMaterial?(r(c,g),a(c,g)):g.isMeshDepthMaterial?r(c,g):g.isMeshDistanceMaterial?(r(c,g),_(c,g)):g.isMeshNormalMaterial?r(c,g):g.isLineBasicMaterial?(o(c,g),g.isLineDashedMaterial&&l(c,g)):g.isPointsMaterial?u(c,g,v,b):g.isSpriteMaterial?f(c,g):g.isShadowMaterial?(c.color.value.copy(g.color),c.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(c,g){c.opacity.value=g.opacity,g.color&&c.diffuse.value.copy(g.color),g.emissive&&c.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(c.map.value=g.map,t(g.map,c.mapTransform)),g.alphaMap&&(c.alphaMap.value=g.alphaMap,t(g.alphaMap,c.alphaMapTransform)),g.bumpMap&&(c.bumpMap.value=g.bumpMap,t(g.bumpMap,c.bumpMapTransform),c.bumpScale.value=g.bumpScale,g.side===zn&&(c.bumpScale.value*=-1)),g.normalMap&&(c.normalMap.value=g.normalMap,t(g.normalMap,c.normalMapTransform),c.normalScale.value.copy(g.normalScale),g.side===zn&&c.normalScale.value.negate()),g.displacementMap&&(c.displacementMap.value=g.displacementMap,t(g.displacementMap,c.displacementMapTransform),c.displacementScale.value=g.displacementScale,c.displacementBias.value=g.displacementBias),g.emissiveMap&&(c.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,c.emissiveMapTransform)),g.specularMap&&(c.specularMap.value=g.specularMap,t(g.specularMap,c.specularMapTransform)),g.alphaTest>0&&(c.alphaTest.value=g.alphaTest);const v=e.get(g),b=v.envMap,M=v.envMapRotation;b&&(c.envMap.value=b,c.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(sd),c.reflectivity.value=g.reflectivity,c.ior.value=g.ior,c.refractionRatio.value=g.refractionRatio),g.lightMap&&(c.lightMap.value=g.lightMap,c.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,c.lightMapTransform)),g.aoMap&&(c.aoMap.value=g.aoMap,c.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,c.aoMapTransform))}function o(c,g){c.diffuse.value.copy(g.color),c.opacity.value=g.opacity,g.map&&(c.map.value=g.map,t(g.map,c.mapTransform))}function l(c,g){c.dashSize.value=g.dashSize,c.totalSize.value=g.dashSize+g.gapSize,c.scale.value=g.scale}function u(c,g,v,b){c.diffuse.value.copy(g.color),c.opacity.value=g.opacity,c.size.value=g.size*v,c.scale.value=b*.5,g.map&&(c.map.value=g.map,t(g.map,c.uvTransform)),g.alphaMap&&(c.alphaMap.value=g.alphaMap,t(g.alphaMap,c.alphaMapTransform)),g.alphaTest>0&&(c.alphaTest.value=g.alphaTest)}function f(c,g){c.diffuse.value.copy(g.color),c.opacity.value=g.opacity,c.rotation.value=g.rotation,g.map&&(c.map.value=g.map,t(g.map,c.mapTransform)),g.alphaMap&&(c.alphaMap.value=g.alphaMap,t(g.alphaMap,c.alphaMapTransform)),g.alphaTest>0&&(c.alphaTest.value=g.alphaTest)}function p(c,g){c.specular.value.copy(g.specular),c.shininess.value=Math.max(g.shininess,1e-4)}function m(c,g){g.gradientMap&&(c.gradientMap.value=g.gradientMap)}function d(c,g){c.metalness.value=g.metalness,g.metalnessMap&&(c.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,c.metalnessMapTransform)),c.roughness.value=g.roughness,g.roughnessMap&&(c.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,c.roughnessMapTransform)),g.envMap&&(c.envMapIntensity.value=g.envMapIntensity)}function h(c,g,v){c.ior.value=g.ior,g.diffuseRoughness>0&&(c.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(c.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,c.diffuseRoughnessMapTransform))),g.sheen>0&&(c.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),c.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(c.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,c.sheenColorMapTransform)),g.sheenRoughnessMap&&(c.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,c.sheenRoughnessMapTransform))),g.clearcoat>0&&(c.clearcoat.value=g.clearcoat,c.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(c.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,c.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(c.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&c.clearcoatNormalScale.value.negate())),g.dispersion>0&&(c.dispersion.value=g.dispersion),g.retroreflectivity>0&&(c.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(c.iridescence.value=g.iridescence,c.iridescenceIOR.value=g.iridescenceIOR,c.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,c.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(c.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,c.iridescenceMapTransform)),g.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),g.transmission>0&&(c.transmission.value=g.transmission,c.transmissionSamplerMap.value=v.texture,c.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(c.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,c.transmissionMapTransform)),c.thickness.value=g.thickness,g.thicknessMap&&(c.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=g.attenuationDistance,c.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(c.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(c.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=g.specularIntensity,c.specularColor.value.copy(g.specularColor),g.specularColorMap&&(c.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,c.specularColorMapTransform)),g.specularIntensityMap&&(c.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,c.specularIntensityMapTransform))}function a(c,g){g.matcap&&(c.matcap.value=g.matcap)}function _(c,g){const v=e.get(g).light;c.referencePosition.value.setFromMatrixPosition(v.matrixWorld),c.nearDistance.value=v.shadow.camera.near,c.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rv(i,e,t,n){let s={},r={};function o(v,b){const M=b.program;n.uniformBlockBinding(v,M,s[v.id])}function l(v,b){let M=s[v.id];M===void 0&&(a(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",c));const A=b.program;n.updateUBOMapping(v,A);const T=e.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function u(v){const b=i.createBuffer(),M=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,A),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function f(v){const b=s[v.id],M=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,x=M.length;T<x;T++){const y=M[T];if(Array.isArray(y))for(let E=0,C=y.length;E<C;E++)p(y[E],T,E,A);else p(y,T,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,b,M,A){if(d(v,b,M,A)===!0){const T=v.__offset,x=v.value;if(Array.isArray(x)){let y=0;for(let E=0;E<x.length;E++){const C=x[E],P=_(C,!0);m(C,v.__data,y),y+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else m(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function m(v,b,M){typeof v=="number"||typeof v=="boolean"?b[M]=v:v.isMatrix3?(b[M]=v.elements[0],b[M+1]=v.elements[1],b[M+2]=v.elements[2],b[M+3]=0,b[M+4]=v.elements[3],b[M+5]=v.elements[4],b[M+6]=v.elements[5],b[M+7]=0,b[M+8]=v.elements[6],b[M+9]=v.elements[7],b[M+10]=v.elements[8],b[M+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-M),M):v.toArray(b,M)}function d(v,b,M,A){const T=v.value,x=b+"_"+M;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);const y=A[x];let E=!1;for(let C=0;C<T.length;C++)h(T[C],y,C)===!0&&(E=!0);return E}return h(T,A,x)}function h(v,b,M){if(b[M]===void 0)return typeof v=="number"||typeof v=="boolean"?b[M]=v:ArrayBuffer.isView(v)?b[M]=v.slice():b[M]=v.clone(),!0;{const A=b[M];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return b[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function a(v){const b=v.uniforms;let M=0;const A=16;for(let x=0,y=b.length;x<y;x++){const E=Array.isArray(b[x])?b[x]:[b[x]];for(let C=0,P=E.length;C<P;C++){const I=E[C],q=Array.isArray(I.value)?I.value:[I.value],L=Array.isArray(b[x])||Array.isArray(I.value);let O=M;for(let X=0,Z=q.length;X<Z;X++){const $=q[X],J=_($,L),re=M%A,ye=re%J.boundary,ae=re+ye;M+=ye,ae!==0&&A-ae<J.storage&&(M+=A-ae),X===0&&(O=M),M+=J.storage}const H=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new H((M-O)/Float32Array.BYTES_PER_ELEMENT),I.__offset=O}}const T=M%A;return T>0&&(M+=A-T),v.__size=M,v.__cache={},this}function _(v,b){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",v),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function c(v){const b=v.target;b.removeEventListener("dispose",c),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function g(){for(const v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:o,update:l,dispose:g}}const Cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function Pv(){return Zi===null&&(Zi=new Ws(Cv,16,16,fr,Ai),Zi.name="DFG_LUT",Zi.minFilter=Gn,Zi.magFilter=Gn,Zi.wrapS=ji,Zi.wrapT=ji,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class Dv{constructor(e={}){const{canvas:t=gp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:h=ri}=e;this.isWebGLRenderer=!0;let a;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");a=n.getContextAttributes().alpha}else a=o;const _=h,c=new Set([Uc,Ic,zc]),g=new Set([ri,is,Xo,Qr,Pc,Dc]),v=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const x=[],y=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ns,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,I=null,q=null,L=null,O=null;this._outputColorSpace=ln;let H=0,X=0,Z=null,$=-1,J=null;const re=new Kt,ye=new Kt;let ae=null;const B=new Ue(0);let ee=0,xe=t.width,ze=t.height,te=1,be=null,ue=null;const Me=new Kt(0,0,xe,ze),qe=new Kt(0,0,xe,ze);let $e=!1;const pe=new jr,we=new Bc;let Re=!1,Oe=!1;const Se=new dt,Ze=new Y,He=new Kt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function ct(){return Z===null?te:1}let Q=n;function It(N,j){return t.getContext(N,j)}let ut,Ae,ve,je,Be,Ye,G,U,oe,R,w,F,K,W,S,z,D,V,k,ne,ie,le,de;try{const N={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ec}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),Q===null){const j="webgl2";if(Q=It(j,N),Q===null)throw It(j)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(N){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Nt("WebGLRenderer: "+N.message),N}function Ie(){ut=new Ix(Q),ut.init(),ie=new Mv(Q,ut),Ae=new Sx(Q,ut,e,ie),ve=new _v(Q,ut),Ae.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),q=Q.createFramebuffer(),L=Q.createFramebuffer(),O=Q.createFramebuffer(),je=new Fx(Q),Be=new rv,Ye=new yv(Q,ut,ve,Be,Ae,ie,je),G=new zx(C),U=new km(Q),le=new Mx(Q,U),oe=new Ux(Q,U,je,le),R=new kx(Q,oe,U,le,je),V=new Ox(Q,Ae,Ye),S=new wx(Be),w=new sv(C,G,ut,Ae,le,S),F=new Av(C,Be),K=new av,W=new dv(ut),D=new yx(C,G,ve,R,a,u),z=new vv(C,R,Ae),de=new Rv(Q,je,Ae,ve),k=new bx(Q,ut,je),ne=new Nx(Q,ut,je),je.programs=w.programs,C.capabilities=Ae,C.extensions=ut,C.properties=Be,C.renderLists=K,C.shadowMap=z,C.state=ve,C.info=je}_!==ri&&(E=new Gx(_,t.width,t.height,l,s,r));const _e=new Tv(C,Q);this.xr=_e,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const N=ut.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ut.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(N){N!==void 0&&(te=N,this.setSize(xe,ze,!1))},this.getSize=function(N){return N.set(xe,ze)},this.setSize=function(N,j,me=!0){if(_e.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=N,ze=j,t.width=Math.floor(N*te),t.height=Math.floor(j*te),me===!0&&(t.style.width=N+"px",t.style.height=j+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,N,j)},this.getDrawingBufferSize=function(N){return N.set(xe*te,ze*te).floor()},this.setDrawingBufferSize=function(N,j,me){xe=N,ze=j,te=me,t.width=Math.floor(N*me),t.height=Math.floor(j*me),this.setViewport(0,0,N,j)},this.setEffects=function(N){if(_===ri){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let j=0;j<N.length;j++)if(N[j].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(re)},this.getViewport=function(N){return N.copy(Me)},this.setViewport=function(N,j,me,ce){N.isVector4?Me.set(N.x,N.y,N.z,N.w):Me.set(N,j,me,ce),ve.viewport(re.copy(Me).multiplyScalar(ct()).round())},this.getScissor=function(N){return N.copy(qe)},this.setScissor=function(N,j,me,ce){N.isVector4?qe.set(N.x,N.y,N.z,N.w):qe.set(N,j,me,ce),ve.scissor(ye.copy(qe).multiplyScalar(ct()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(N){ve.setScissorTest($e=N)},this.setOpaqueSort=function(N){be=N},this.setTransparentSort=function(N){ue=N},this.getClearColor=function(N){return N.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(N=!0,j=!0,me=!0){let ce=0;if(N){let fe=!1;if(Z!==null){const Ge=Z.texture.format;fe=c.has(Ge)}if(fe){const Ge=Z.texture.type,Je=g.has(Ge),ke=D.getClearColor(),Xe=D.getClearAlpha(),nt=ke.r,pt=ke.g,Tt=ke.b;Je?(v[0]=nt,v[1]=pt,v[2]=Tt,v[3]=Xe,Q.clearBufferuiv(Q.COLOR,0,v)):(b[0]=nt,b[1]=pt,b[2]=Tt,b[3]=Xe,Q.clearBufferiv(Q.COLOR,0,b))}else ce|=Q.COLOR_BUFFER_BIT}j&&(ce|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(ce|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&Q.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),I=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),D.dispose(),K.dispose(),W.dispose(),Ye.dispose(),Be.dispose(),G.dispose(),R.dispose(),oe.dispose(),le.dispose(),de.dispose(),w.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",xr),_e.removeEventListener("sessionend",ls),Yi.stop()};function Ve(N){N.preventDefault(),f0("WebGLRenderer: Context Lost."),P=!0}function Ke(){f0("WebGLRenderer: Context Restored."),P=!1;const N=je.autoReset,j=z.enabled,me=z.autoUpdate,ce=z.needsUpdate,fe=z.type;Ie(),je.autoReset=N,z.enabled=j,z.autoUpdate=me,z.needsUpdate=ce,z.type=fe}function Fe(N){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Mt(N){const j=N.target;j.removeEventListener("dispose",Mt),un(j)}function un(N){Ci(N),Be.remove(N)}function Ci(N){const j=Be.get(N).programs;j!==void 0&&(j.forEach(function(me){w.releaseProgram(me)}),N.isShaderMaterial&&w.releaseShaderCache(N))}this.renderBufferDirect=function(N,j,me,ce,fe,Ge){j===null&&(j=st);const Je=fe.isMesh&&fe.matrixWorld.determinantAffine()<0,ke=di(N,j,me,ce,fe);ve.setMaterial(ce,Je);let Xe=me.index,nt=1;if(ce.wireframe===!0){if(Xe=oe.getWireframeAttribute(me),Xe===void 0)return;nt=2}const pt=me.drawRange,Tt=me.attributes.position;let et=pt.start*nt,Et=(pt.start+pt.count)*nt;Ge!==null&&(et=Math.max(et,Ge.start*nt),Et=Math.min(Et,(Ge.start+Ge.count)*nt)),Xe!==null?(et=Math.max(et,0),Et=Math.min(Et,Xe.count)):Tt!=null&&(et=Math.max(et,0),Et=Math.min(Et,Tt.count));const pn=Et-et;if(pn<0||pn===1/0)return;le.setup(fe,ce,ke,me,Xe);let Jt,$t=k;if(Xe!==null&&(Jt=U.get(Xe),$t=ne,$t.setIndex(Jt)),fe.isMesh)ce.wireframe===!0?(ve.setLineWidth(ce.wireframeLinewidth*ct()),$t.setMode(Q.LINES)):$t.setMode(Q.TRIANGLES);else if(fe.isLine){let In=ce.linewidth;In===void 0&&(In=1),ve.setLineWidth(In*ct()),fe.isLineSegments?$t.setMode(Q.LINES):fe.isLineLoop?$t.setMode(Q.LINE_LOOP):$t.setMode(Q.LINE_STRIP)}else fe.isPoints?$t.setMode(Q.POINTS):fe.isSprite&&$t.setMode(Q.TRIANGLES);if(fe.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))$t.renderMultiDraw(fe._multiDrawStarts,fe._multiDrawCounts,fe._multiDrawCount);else{const In=fe._multiDrawStarts,tt=fe._multiDrawCounts,Yn=fe._multiDrawCount,Bt=Xe?U.get(Xe).bytesPerElement:1,Ys=Be.get(ce).currentProgram.getUniforms();for(let Un=0;Un<Yn;Un++)Ys.setValue(Q,"_gl_DrawID",Un),$t.render(In[Un]/Bt,tt[Un])}else if(fe.isInstancedMesh)$t.renderInstances(et,pn,fe.count);else if(me.isInstancedBufferGeometry){const In=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,tt=Math.min(me.instanceCount,In);$t.renderInstances(et,pn,tt)}else $t.render(et,pn)};function oo(N,j,me,ce){I!==null&&N.isNodeMaterial&&I.setObject(ce,N),Re===!0&&S.setState(N,me,!1),N.transparent===!0&&N.side===Oi&&N.forceSinglePass===!1?(N.side=zn,N.needsUpdate=!0,cs(N,j,ce),N.side=ur,N.needsUpdate=!0,cs(N,j,ce),N.side=Oi):cs(N,j,ce)}this.compile=function(N,j,me=null){me===null&&(me=N),I!==null&&I.renderStart(N,j,me),T=W.get(me),T.init(j),y.push(T),me.traverseVisible(function(fe){fe.isLight&&fe.layers.test(j.layers)&&(T.pushLight(fe),fe.castShadow&&T.pushShadow(fe))}),N!==me&&N.traverseVisible(function(fe){fe.isLight&&fe.layers.test(j.layers)&&(T.pushLight(fe),fe.castShadow&&T.pushShadow(fe))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),Oe=this.localClippingEnabled,Re=S.init(this.clippingPlanes,Oe),Re===!0&&S.setGlobalState(this.clippingPlanes,j),I!==null&&z.render(T.state.shadowsArray,me,j);const ce=new Set;return N.traverse(function(fe){if(!(fe.isMesh||fe.isPoints||fe.isLine||fe.isSprite))return;const Ge=fe.material;if(Ge)if(Array.isArray(Ge))for(let Je=0;Je<Ge.length;Je++){const ke=Ge[Je];oo(ke,me,j,fe),ce.add(ke)}else oo(Ge,me,j,fe),ce.add(Ge)}),T=y.pop(),I!==null&&I.renderEnd(),ce},this.compileAsync=function(N,j,me=null){const ce=this.compile(N,j,me);return new Promise(fe=>{function Ge(){if(ce.forEach(function(Je){const Xe=Be.get(Je).currentProgram;(Xe===void 0||Xe.isReady())&&ce.delete(Je)}),ce.size===0){fe(N);return}setTimeout(Ge,10)}ut.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let hi=null;function as(N){hi&&hi(N)}function xr(){Yi.stop()}function ls(){Yi.start()}const Yi=new $h;Yi.setAnimationLoop(as),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(N){hi=N,_e.setAnimationLoop(N),N===null?Yi.stop():Yi.start()},_e.addEventListener("sessionstart",xr),_e.addEventListener("sessionend",ls),this.render=function(N,j){if(j!==void 0&&j.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(N,j);const me=_e.enabled===!0&&_e.isPresenting===!0,ce=E!==null&&(Z===null||me)&&E.begin(C,Z);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(j),j=_e.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,j,Z),T=W.get(N,y.length),T.init(j),T.state.textureUnits=Ye.getTextureUnits(),y.push(T),Se.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),j.isArrayCamera?we.setFromArrayCamera(j):pe.setFromProjectionMatrix(Se,Bi,j.reversedDepth),Oe=this.localClippingEnabled,Re=S.init(this.clippingPlanes,Oe),A=K.get(N,x.length),A.init(),x.push(A),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){const Je=C.xr.getDepthSensingMesh();Je!==null&&qs(Je,j,-1/0,C.sortObjects)}qs(N,j,0,C.sortObjects),A.finish(),I!==null&&I.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(be,ue),rt=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,rt&&D.addToRenderList(A,N),this.info.autoReset===!0&&this.info.reset(),Re===!0&&S.beginShadows();const fe=T.state.shadowsArray;if(z.render(fe,N,j),Re===!0&&S.endShadows(),(ce&&E.hasRenderPass())===!1){const Je=A.opaque,ke=A.transmissive;if(T.setupLights(),j.isArrayCamera){const Xe=j.cameras;if(ke.length>0)for(let nt=0,pt=Xe.length;nt<pt;nt++){const Tt=Xe[nt];vr(Je,ke,N,Tt)}rt&&D.render(N);for(let nt=0,pt=Xe.length;nt<pt;nt++){const Tt=Xe[nt];ao(A,N,Tt,Tt.viewport)}}else ke.length>0&&vr(Je,ke,N,j),rt&&D.render(N),ao(A,N,j)}Z!==null&&X===0&&(Ye.updateMultisampleRenderTarget(Z),Ye.updateRenderTargetMipmap(Z)),ce&&E.end(C),N.isScene===!0&&N.onAfterRender(C,N,j),le.resetDefaultState(),$=-1,J=null,y.pop(),y.length>0?(T=y[y.length-1],Ye.setTextureUnits(T.state.textureUnits),Re===!0&&S.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,I!==null&&I.renderEnd()};function qs(N,j,me,ce){if(N.visible===!1)return;if(N.layers.test(j.layers)){if(N.isGroup)me=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(j);else if(N.isLight)T.pushLight(N),N.castShadow&&T.pushShadow(N);else if(N.isSprite){const Je=j.isArrayCamera?we:pe;if(!N.frustumCulled||N.intersectsFrustum(Je)){ce&&He.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Se);const ke=R.update(N),Xe=N.material;Xe.visible&&A.push(N,ke,Xe,me,He.z,null,j)}}else if(N.isMesh||N.isLine||N.isPoints){const Je=j.isArrayCamera?we:pe;if(!N.frustumCulled||N.intersectsFrustum(Je)){const ke=R.update(N),Xe=N.material;if(ce&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),He.copy(N.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),He.copy(ke.boundingSphere.center)),He.applyMatrix4(N.matrixWorld).applyMatrix4(Se)),Array.isArray(Xe)){const nt=ke.groups;for(let pt=0,Tt=nt.length;pt<Tt;pt++){const et=nt[pt],Et=Xe[et.materialIndex];Et&&Et.visible&&A.push(N,ke,Et,me,He.z,et,j)}}else Xe.visible&&A.push(N,ke,Xe,me,He.z,null,j)}}}const Ge=N.children;for(let Je=0,ke=Ge.length;Je<ke;Je++)qs(Ge[Je],j,me,ce)}function ao(N,j,me,ce){const{opaque:fe,transmissive:Ge,transparent:Je}=N;T.setupLightsView(me),Re===!0&&S.setGlobalState(C.clippingPlanes,me),ce&&ve.viewport(re.copy(ce)),fe.length>0&&fn(fe,j,me),Ge.length>0&&fn(Ge,j,me),Je.length>0&&fn(Je,j,me),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function vr(N,j,me,ce){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ce.id]===void 0){const et=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ce.id]=new Jn(1,1,{generateMipmaps:!0,type:et?Ai:ri,minFilter:es,samples:Math.max(4,Ae.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Ge=T.state.transmissionRenderTarget[ce.id],Je=ce.viewport||re;Ge.setSize(Je.z*C.transmissionResolutionScale,Je.w*C.transmissionResolutionScale);const ke=C.getRenderTarget(),Xe=C.getActiveCubeFace(),nt=C.getActiveMipmapLevel();C.setRenderTarget(Ge),C.getClearColor(B),ee=C.getClearAlpha(),ee<1&&C.setClearColor(16777215,.5),C.clear(),rt&&D.render(me);const pt=C.toneMapping;C.toneMapping=ns;const Tt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),T.setupLightsView(ce),Re===!0&&S.setGlobalState(C.clippingPlanes,ce),fn(N,me,ce),Ye.updateMultisampleRenderTarget(Ge),Ye.updateRenderTargetMipmap(Ge),ut.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Et=0,pn=j.length;Et<pn;Et++){const Jt=j[Et],{object:$t,geometry:In,material:tt,group:Yn}=Jt;if(tt.side===Oi&&$t.layers.test(ce.layers)){const Bt=tt.side;tt.side=zn,tt.needsUpdate=!0,lo($t,me,ce,In,tt,Yn),tt.side=Bt,tt.needsUpdate=!0,et=!0}}et===!0&&(Ye.updateMultisampleRenderTarget(Ge),Ye.updateRenderTargetMipmap(Ge))}C.setRenderTarget(ke,Xe,nt),C.setClearColor(B,ee),Tt!==void 0&&(ce.viewport=Tt),C.toneMapping=pt}function fn(N,j,me){const ce=j.isScene===!0?j.overrideMaterial:null;for(let fe=0,Ge=N.length;fe<Ge;fe++){const Je=N[fe],{object:ke,geometry:Xe,group:nt}=Je;let pt=Je.material;pt.allowOverride===!0&&ce!==null&&(pt=ce),ke.layers.test(me.layers)&&lo(ke,j,me,Xe,pt,nt)}}function lo(N,j,me,ce,fe,Ge){I!==null&&fe.isNodeMaterial&&I.setObject(N,fe),N.onBeforeRender(C,j,me,ce,fe,Ge),N.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),fe.onBeforeRender(C,j,me,ce,N,Ge),fe.transparent===!0&&fe.side===Oi&&fe.forceSinglePass===!1?(fe.side=zn,fe.needsUpdate=!0,C.renderBufferDirect(me,j,ce,fe,N,Ge),fe.side=ur,fe.needsUpdate=!0,C.renderBufferDirect(me,j,ce,fe,N,Ge),fe.side=Oi):C.renderBufferDirect(me,j,ce,fe,N,Ge),N.onAfterRender(C,j,me,ce,fe,Ge)}function _r(N){let j=0;for(const me of N)me.texture!==null&&j++;return j}function cs(N,j,me){j.isScene!==!0&&(j=st);const ce=Be.get(N),fe=T.state.lights,Ge=T.state.shadowsArray,Je=fe.state.version,ke=w.getParameters(N,fe.state,Ge,j,me,T.state.lightProbeGridArray),Xe=w.getProgramCacheKey(ke);let nt=ce.programs;ce.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?j.environment:null,ce.fog=j.fog;const pt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ce.envMap=G.get(N.envMap||ce.environment,pt),ce.envMapRotation=ce.environment!==null&&N.envMap===null?j.environmentRotation:N.envMapRotation,nt===void 0&&(N.addEventListener("dispose",Mt),nt=new Map,ce.programs=nt,ce.programVariants=new Map);let Tt=nt.get(Xe);if(Tt!==void 0){if(ce.currentProgram===Tt&&ce.lightsStateVersion===Je)return us(N,ke),Tt}else ke.uniforms=w.getUniforms(N),I!==null&&N.isNodeMaterial&&I.build(N,me,ke),N.onBeforeCompile(ke,C),Tt=w.acquireProgram(ke,Xe),nt.set(Xe,Tt),ce.uniforms=ke.uniforms;const et=ce.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(et.clippingPlanes=S.uniform),us(N,ke),ce.needsLights=T0(N),ce.lightsStateVersion=Je,ce.needsLights&&(et.ambientLightColor.value=fe.state.ambient,et.lightProbe.value=fe.state.probe,et.sunLights.value=fe.state.sun,et.sunLightShadows.value=fe.state.sunShadow,et.directionalLights.value=fe.state.directional,et.directionalLightShadows.value=fe.state.directionalShadow,et.spotLights.value=fe.state.spot,et.spotLightShadows.value=fe.state.spotShadow,et.rectAreaLights.value=fe.state.rectArea,et.ltc_1.value=fe.state.rectAreaLTC1,et.ltc_2.value=fe.state.rectAreaLTC2,et.pointLights.value=fe.state.point,et.pointLightShadows.value=fe.state.pointShadow,et.hemisphereLights.value=fe.state.hemi,et.sunShadowMatrix.value=fe.state.sunShadowMatrix,et.sunShadowCascade.value=fe.state.sunShadowCascade,et.directionalShadowMatrix.value=fe.state.directionalShadowMatrix,et.spotLightMatrix.value=fe.state.spotLightMatrix,et.spotLightMap.value=fe.state.spotLightMap,et.pointShadowMatrix.value=fe.state.pointShadowMatrix),ce.numLightProbeGrids=_r(T.state.lightProbeGridArray),ce.currentProgram=Tt,ce.uniformsList=null,Tt}function Cn(N,j,me,ce,fe){const Ge=Be.get(N),Je=Ge.currentProgram.id+","+ce+","+fe;let ke=Ge.programVariants.get(Je);return ke===void 0?(ke=cs(N,j,me),Ge.programVariants.set(Je,ke)):(Ge.currentProgram=ke,Ge.uniformsList=null,Ge.outputColorSpace=ce,Ge.toneMapping=fe),ke}function Ss(N){if(N.uniformsList===null){const j=N.currentProgram.getUniforms();N.uniformsList=Qa.seqWithValue(j.seq,N.uniforms)}return N.uniformsList}function us(N,j){const me=Be.get(N);me.outputColorSpace=j.outputColorSpace,me.batching=j.batching,me.batchingColor=j.batchingColor,me.instancing=j.instancing,me.instancingColor=j.instancingColor,me.instancingMorph=j.instancingMorph,me.skinning=j.skinning,me.morphTargets=j.morphTargets,me.morphNormals=j.morphNormals,me.morphColors=j.morphColors,me.morphTargetsCount=j.morphTargetsCount,me.numClippingPlanes=j.numClippingPlanes,me.numIntersection=j.numClipIntersection,me.vertexAlphas=j.vertexAlphas,me.vertexTangents=j.vertexTangents,me.toneMapping=j.toneMapping}function di(N,j,me,ce,fe){j.isScene!==!0&&(j=st),Ye.resetTextureUnits();const Ge=j.fog,Je=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?j.environment:null,ke=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Pt.workingColorSpace,Xe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,nt=G.get(ce.envMap||Je,Xe),pt=ce.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,Tt=!!me.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),et=!!me.morphAttributes.position,Et=!!me.morphAttributes.normal,pn=!!me.morphAttributes.color;let Jt=ns;ce.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Jt=C.toneMapping);const $t=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,In=$t!==void 0?$t.length:0,tt=Be.get(ce),Yn=T.state.lights;if(Re===!0&&(Oe===!0||N!==J)){const nn=N===J&&ce.id===$;S.setState(ce,N,nn)}let Bt=!1,Ys=!1;ce.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==Yn.state.version||fe.isBatchedMesh&&tt.batching===!1||!fe.isBatchedMesh&&tt.batching===!0||fe.isBatchedMesh&&tt.batchingColor===!0&&fe._colorsTexture===null||fe.isBatchedMesh&&tt.batchingColor===!1&&fe._colorsTexture!==null||fe.isInstancedMesh&&tt.instancing===!1||!fe.isInstancedMesh&&tt.instancing===!0||fe.isSkinnedMesh&&tt.skinning===!1||!fe.isSkinnedMesh&&tt.skinning===!0||fe.isInstancedMesh&&tt.instancingColor===!0&&fe.instanceColor===null||fe.isInstancedMesh&&tt.instancingColor===!1&&fe.instanceColor!==null||fe.isInstancedMesh&&tt.instancingMorph===!0&&fe.morphTexture===null||fe.isInstancedMesh&&tt.instancingMorph===!1&&fe.morphTexture!==null||tt.envMap!==nt||ce.fog===!0&&tt.fog!==Ge||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==S.numPlanes||tt.numIntersection!==S.numIntersection)||tt.vertexAlphas!==pt||tt.vertexTangents!==Tt||tt.morphTargets!==et||tt.morphNormals!==Et||tt.morphColors!==pn||tt.morphTargetsCount!==In||tt.numLightProbeGrids!==_r(T.state.lightProbeGridArray)?Bt=!0:(tt.outputColorSpace!==ke||tt.toneMapping!==Jt)&&(Ys=!0):(Bt=!0,tt.__version=ce.version);let Un=tt.currentProgram;(Bt===!0||Ys===!0)&&(Un=Ys===!0?Cn(ce,j,fe,ke,Jt):cs(ce,j,fe),I&&ce.isNodeMaterial&&I.onUpdateProgram(ce,Un,tt));let ea=!1,ws=!1,$s=!1;const Ut=Un.getUniforms(),Pn=tt.uniforms;if(ve.useProgram(Un.program)&&(ea=!0,ws=!0,$s=!0),ce.id!==$&&($=ce.id,ws=!0),ea||J!==N){ve.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ut.setValue(Q,"projectionMatrix",N.projectionMatrix),Ut.setValue(Q,"viewMatrix",N.matrixWorldInverse);const Mn=Ut.map.cameraPosition;Mn!==void 0&&Mn.setValue(Q,Ze.setFromMatrixPosition(N.matrixWorld)),Ae.logarithmicDepthBuffer&&Ut.setValue(Q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ut.setValue(Q,"isOrthographic",N.isOrthographicCamera===!0),J!==N&&(J=N,ws=!0,$s=!0)}if(tt.needsLights&&(Yn.state.sunShadowMap.length>0&&Ut.setValue(Q,"sunShadowMap",Yn.state.sunShadowMap,Ye),Yn.state.directionalShadowMap.length>0&&Ut.setValue(Q,"directionalShadowMap",Yn.state.directionalShadowMap,Ye),Yn.state.spotShadowMap.length>0&&Ut.setValue(Q,"spotShadowMap",Yn.state.spotShadowMap,Ye),Yn.state.pointShadowMap.length>0&&Ut.setValue(Q,"pointShadowMap",Yn.state.pointShadowMap,Ye)),fe.isSkinnedMesh){Ut.setOptional(Q,fe,"bindMatrix"),Ut.setOptional(Q,fe,"bindMatrixInverse");const nn=fe.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ut.setValue(Q,"boneTexture",nn.boneTexture,Ye))}fe.isBatchedMesh&&(Ut.setOptional(Q,fe,"batchingTexture"),Ut.setValue(Q,"batchingTexture",fe._matricesTexture,Ye),Ut.setOptional(Q,fe,"batchingIdTexture"),Ut.setValue(Q,"batchingIdTexture",fe._indirectTexture,Ye),Ut.setOptional(Q,fe,"batchingColorTexture"),fe._colorsTexture!==null&&Ut.setValue(Q,"batchingColorTexture",fe._colorsTexture,Ye));const Pi=me.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&V.update(fe,me,Un),(ws||tt.receiveShadow!==fe.receiveShadow)&&(tt.receiveShadow=fe.receiveShadow,Ut.setValue(Q,"receiveShadow",fe.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&j.environment!==null&&(Pn.envMapIntensity.value=j.environmentIntensity),Pn.dfgLUT!==void 0&&(Pn.dfgLUT.value=Pv()),ws){if(Ut.setValue(Q,"toneMappingExposure",C.toneMappingExposure),tt.needsLights&&yr(Pn,$s),Ge&&ce.fog===!0&&F.refreshFogUniforms(Pn,Ge),F.refreshMaterialUniforms(Pn,ce,te,ze,T.state.transmissionRenderTarget[N.id]),tt.needsLights&&tt.numLightProbeGrids>0){const nn=M;let Mn=0;for(const fs of T.state.lightProbeGridArray)fs.texture!==null&&(nn.textures[Mn]=fs.texture,nn.min[Mn]=fs.boundingBox.min,nn.max[Mn]=fs.boundingBox.max,nn.resolution[Mn]=fs.resolution,Mn++);for(const fs in nn)nn[fs].length=Mn;Pn.probesSH.value=nn.textures,Pn.probesMin.value=nn.min,Pn.probesMax.value=nn.max,Pn.probesResolution.value=nn.resolution}Qa.upload(Q,Ss(tt),Pn,Ye)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Qa.upload(Q,Ss(tt),Pn,Ye),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ut.setValue(Q,"center",fe.center),Ut.setValue(Q,"modelViewMatrix",fe.modelViewMatrix),Ut.setValue(Q,"normalMatrix",fe.normalMatrix),Ut.setValue(Q,"modelMatrix",fe.matrixWorld),ce.uniformsGroups!==void 0){const nn=ce.uniformsGroups;for(let Mn=0,fs=nn.length;Mn<fs;Mn++){const su=nn[Mn];de.update(su,Un),de.bind(su,Un)}}return Un}function yr(N,j){N.ambientLightColor.needsUpdate=j,N.lightProbe.needsUpdate=j,N.sunLights.needsUpdate=j,N.sunLightShadows.needsUpdate=j,N.directionalLights.needsUpdate=j,N.directionalLightShadows.needsUpdate=j,N.pointLights.needsUpdate=j,N.pointLightShadows.needsUpdate=j,N.spotLights.needsUpdate=j,N.spotLightShadows.needsUpdate=j,N.rectAreaLights.needsUpdate=j,N.hemisphereLights.needsUpdate=j}function T0(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(N,j,me){const ce=Be.get(N);ce.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),Be.get(N.texture).__webglTexture=j,Be.get(N.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:me,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,j){const me=Be.get(N);me.__webglFramebuffer=j,me.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(N,j=0,me=0){Z=N,H=j,X=me;let ce=null,fe=!1,Ge=!1;if(N){const ke=Be.get(N);if(ke.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(Q.FRAMEBUFFER,ke.__webglFramebuffer),re.copy(N.viewport),ye.copy(N.scissor),ae=N.scissorTest,ve.viewport(re),ve.scissor(ye),ve.setScissorTest(ae),$=-1;return}else if(ke.__webglFramebuffer===void 0)Ye.setupRenderTarget(N);else if(ke.__hasExternalTextures)Ye.rebindTextures(N,Be.get(N.texture).__webglTexture,Be.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const pt=N.depthTexture;if(ke.__boundDepthTexture!==pt){if(pt!==null&&Be.has(pt)&&(N.width!==pt.image.width||N.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(N)}}const Xe=N.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ge=!0);const nt=Be.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?ce=nt[j][me]:ce=nt[j],fe=!0):N.samples>0&&Ye.useMultisampledRTT(N)===!1?ce=Be.get(N).__webglMultisampledFramebuffer:Array.isArray(nt)?ce=nt[me]:ce=nt,re.copy(N.viewport),ye.copy(N.scissor),ae=N.scissorTest}else re.copy(Me).multiplyScalar(te).floor(),ye.copy(qe).multiplyScalar(te).floor(),ae=$e;if(me!==0&&(ce=q),ve.bindFramebuffer(Q.FRAMEBUFFER,ce)&&ve.drawBuffers(N,ce),ve.viewport(re),ve.scissor(ye),ve.setScissorTest(ae),fe){const ke=Be.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+j,ke.__webglTexture,me)}else if(Ge){const ke=j;for(let Xe=0;Xe<N.textures.length;Xe++){const nt=Be.get(N.textures[Xe]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Xe,nt.__webglTexture,me,ke)}}else if(N!==null&&me!==0){const ke=Be.get(N.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,ke.__webglTexture,me)}$=-1};function jo(N){const j=Be.get(N);return(j.__readFormat!==N.format||j.__readType!==N.type)&&(j.__readFormat=N.format,j.__readType=N.type,j.__formatReadable=Ae.textureFormatReadable(N.format),j.__typeReadable=Ae.textureTypeReadable(N.type)),j}this.readRenderTargetPixels=function(N,j,me,ce,fe,Ge,Je,ke=0){if(!(N&&N.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Be.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Je!==void 0&&(Xe=Xe[Je],Array.isArray(Xe)&&(Xe=Xe[0])),Xe){ve.bindFramebuffer(Q.FRAMEBUFFER,Xe);try{const nt=N.textures[ke],pt=nt.format,Tt=nt.type;N.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+ke);const et=jo(nt);if(et.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=N.width-ce&&me>=0&&me<=N.height-fe&&Q.readPixels(j,me,ce,fe,ie.convert(pt),ie.convert(Tt),Ge)}finally{const nt=Z!==null?Be.get(Z).__webglFramebuffer:null;ve.bindFramebuffer(Q.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(N,j,me,ce,fe,Ge,Je,ke=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Be.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Je!==void 0&&(Xe=Xe[Je],Array.isArray(Xe)&&(Xe=Xe[0])),Xe)if(j>=0&&j<=N.width-ce&&me>=0&&me<=N.height-fe){ve.bindFramebuffer(Q.FRAMEBUFFER,Xe);const nt=N.textures[ke],pt=nt.format,Tt=nt.type;N.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+ke);const et=jo(nt);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Et=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Et),Q.bufferData(Q.PIXEL_PACK_BUFFER,Ge.byteLength,Q.STREAM_READ),Q.readPixels(j,me,ce,fe,ie.convert(pt),ie.convert(Tt),0),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null);const pn=Z!==null?Be.get(Z).__webglFramebuffer:null;ve.bindFramebuffer(Q.FRAMEBUFFER,pn);const Jt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await xp(Q,Jt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,Et),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,Ge),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,null),Q.deleteBuffer(Et),Q.deleteSync(Jt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,j=null,me=0){const ce=Math.pow(2,-me),fe=Math.floor(N.image.width*ce),Ge=Math.floor(N.image.height*ce),Je=j!==null?j.x:0,ke=j!==null?j.y:0;Ye.setTexture2D(N,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,me,0,0,Je,ke,fe,Ge),ve.unbindTexture()},this.copyTextureToTexture=function(N,j,me=null,ce=null,fe=0,Ge=0){let Je,ke,Xe,nt,pt,Tt,et,Et,pn;const Jt=N.isCompressedTexture?N.mipmaps[Ge]:N.image;if(me!==null)Je=me.max.x-me.min.x,ke=me.max.y-me.min.y,Xe=me.isBox3?me.max.z-me.min.z:1,nt=me.min.x,pt=me.min.y,Tt=me.isBox3?me.min.z:0;else{const Ut=Math.pow(2,-fe);Je=Math.floor(Jt.width*Ut),ke=Math.floor(Jt.height*Ut),N.isDataArrayTexture?Xe=Jt.depth:N.isData3DTexture?Xe=Math.floor(Jt.depth*Ut):Xe=1,nt=0,pt=0,Tt=0}ce!==null?(et=ce.x,Et=ce.y,pn=ce.z):(et=0,Et=0,pn=0);const $t=ie.convert(j.format),In=ie.convert(j.type);let tt;j.isData3DTexture?(Ye.setTexture3D(j,0),tt=Q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Ye.setTexture2DArray(j,0),tt=Q.TEXTURE_2D_ARRAY):(Ye.setTexture2D(j,0),tt=Q.TEXTURE_2D),ve.activeTexture(Q.TEXTURE0),ve.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,j.flipY),ve.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),ve.pixelStorei(Q.UNPACK_ALIGNMENT,j.unpackAlignment);const Yn=ve.getParameter(Q.UNPACK_ROW_LENGTH),Bt=ve.getParameter(Q.UNPACK_IMAGE_HEIGHT),Ys=ve.getParameter(Q.UNPACK_SKIP_PIXELS),Un=ve.getParameter(Q.UNPACK_SKIP_ROWS),ea=ve.getParameter(Q.UNPACK_SKIP_IMAGES);ve.pixelStorei(Q.UNPACK_ROW_LENGTH,Jt.width),ve.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Jt.height),ve.pixelStorei(Q.UNPACK_SKIP_PIXELS,nt),ve.pixelStorei(Q.UNPACK_SKIP_ROWS,pt),ve.pixelStorei(Q.UNPACK_SKIP_IMAGES,Tt);const ws=N.isDataArrayTexture||N.isData3DTexture,$s=j.isDataArrayTexture||j.isData3DTexture;if(N.isDepthTexture){const Ut=Be.get(N),Pn=Be.get(j),Pi=Be.get(Ut.__renderTarget),nn=Be.get(Pn.__renderTarget);ve.bindFramebuffer(Q.READ_FRAMEBUFFER,Pi.__webglFramebuffer),ve.bindFramebuffer(Q.DRAW_FRAMEBUFFER,nn.__webglFramebuffer);for(let Mn=0;Mn<Xe;Mn++)ws&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Be.get(N).__webglTexture,fe,Tt+Mn),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Be.get(j).__webglTexture,Ge,pn+Mn)),Q.blitFramebuffer(nt,pt,nt+Je,pt+ke,et,Et,et+Je,Et+ke,Q.DEPTH_BUFFER_BIT,Q.NEAREST);ve.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ve.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(fe!==0||N.isRenderTargetTexture||Be.has(N)){const Ut=Be.get(N),Pn=Be.get(j);ve.bindFramebuffer(Q.READ_FRAMEBUFFER,L),ve.bindFramebuffer(Q.DRAW_FRAMEBUFFER,O);for(let Pi=0;Pi<Xe;Pi++)ws?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ut.__webglTexture,fe,Tt+Pi):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ut.__webglTexture,fe),$s?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Pn.__webglTexture,Ge,pn+Pi):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Pn.__webglTexture,Ge),fe!==0?Q.blitFramebuffer(nt,pt,nt+Je,pt+ke,et,Et,et+Je,Et+ke,Q.COLOR_BUFFER_BIT,Q.NEAREST):$s?Q.copyTexSubImage3D(tt,Ge,et,Et,pn+Pi,nt,pt,Je,ke):Q.copyTexSubImage2D(tt,Ge,et,Et,nt,pt,Je,ke);ve.bindFramebuffer(Q.READ_FRAMEBUFFER,null),ve.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else $s?N.isDataTexture||N.isData3DTexture?Q.texSubImage3D(tt,Ge,et,Et,pn,Je,ke,Xe,$t,In,Jt.data):j.isCompressedArrayTexture?Q.compressedTexSubImage3D(tt,Ge,et,Et,pn,Je,ke,Xe,$t,Jt.data):Q.texSubImage3D(tt,Ge,et,Et,pn,Je,ke,Xe,$t,In,Jt):N.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,Ge,et,Et,Je,ke,$t,In,Jt.data):N.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,Ge,et,Et,Jt.width,Jt.height,$t,Jt.data):Q.texSubImage2D(Q.TEXTURE_2D,Ge,et,Et,Je,ke,$t,In,Jt);ve.pixelStorei(Q.UNPACK_ROW_LENGTH,Yn),ve.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Bt),ve.pixelStorei(Q.UNPACK_SKIP_PIXELS,Ys),ve.pixelStorei(Q.UNPACK_SKIP_ROWS,Un),ve.pixelStorei(Q.UNPACK_SKIP_IMAGES,ea),Ge===0&&j.generateMipmaps===!0&&j.mipmapsAutoUpdate===!0&&Q.generateMipmap(tt),ve.unbindTexture()},this.initRenderTarget=function(N){Be.get(N).__webglFramebuffer===void 0&&Ye.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Ye.setTextureCube(N,0):N.isData3DTexture?Ye.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Ye.setTexture2DArray(N,0):Ye.setTexture2D(N,0),ve.unbindTexture()},this.resetState=function(){H=0,X=0,Z=null,ve.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const mi=.3,Zt=1.2,Lv=3.2,Ce={x0:-1.5,x1:1.5,z0:.4,z1:6.4,h:2.5},ge={x0:-2,x1:2,z0:-40,z1:0,h:3},se={x0:2.4,x1:16.4,z0:-31,z1:-17,h:5.5},Te={x:-2,z0:-16,z1:-11,y0:.8,y1:2.2},lt={z0:-25,z1:-23,h:2.3},Gt={w:1.3,y0:.1,y1:2},ts={x:9.5,z:-24},qt=-36,ot={z0:-25.2,z1:-22.8,h:2.6},De={x0:16.8,x1:22.4,z0:-27.6,z1:-20.4,h:3.4},Us={x0:-2.4,x1:22.8,z0:-40.4,z1:6.8},Qe={wheelCam:{x:0,z:.65},tool:{x:1.32,y:.75,z:-7.98},cabinet:{y:.75,z:-19,face:1.64,rest:1.82},socket:{x:1.86,y:.85,z:-22.35},deadCrawler:{x:1.25,z:-20.2},levers:[{x:se.x0+.24,y:1,z:-19.4,color:"orange",face:[1,0]},{x:se.x1-.24,y:1,z:-27.2,color:"teal",face:[-1,0]},{x:8.6,y:1,z:se.z0+.24,color:"red",face:[0,1]}],logs:[{key:"log.1",x:-1.62,y:.52,z:-24.22},{key:"log.2",x:5.95,y:1,z:-17.35},{key:"log.3",x:14.55,y:.93,z:-29.25}],bayLog:{x:8.3,y:1.1,z:-23.6},terminal:{x:16.15,y:1.15,z:-25.85},perches:[{x:9,y:5.45,z:-21,s:"ceil"},{x:16.3,y:3.2,z:-19.8,s:"wallE"},{x:5,y:3.6,z:-30.9,s:"wallS"}],throwables:[[11.9,-21.6],[6.9,-28.9],[12.4,-27.9]]},ll={x:0,z:5.3,yaw:0};function ja(i,e){return e>.2?"airlock":i>2.2?i>se.x1+.2?"gallery":"bay":"corridor"}function wf({hatchOpen:i=!0,bayDoor:e=!0,seal:t=!1,cabinet:n=!0}={}){const s=[],r=[],o=(l,u,f,p)=>s.push({x0:Math.min(l,u),x1:Math.max(l,u),z0:Math.min(f,p),z1:Math.max(f,p)});return o(-1.8,-1.5,.4,6.4),o(1.5,1.8,.4,6.4),o(-1.8,1.8,6.4,6.8),o(-2.4,-1.3/2,0,.4),o(Gt.w/2,2.4,0,.4),o(1.05,1.5,1.7,4.1),i?o(-1.2,-.6,-1.3,0):o(-1.3/2,Gt.w/2,-.1,.4),o(-2.4,-2,-40,0),o(2,2.4,-40,lt.z0),o(2,2.4,lt.z1,0),e||o(2,2.4,lt.z0,lt.z1),n&&o(1.66,2,Qe.cabinet.z-.4,Qe.cabinet.z+.4),o(.9,1.6,-20.6,-19.8),o(-2,2,qt-.7,qt+.4),o(-2,-1,-29.7,-21.3),o(1.2,2,-10.2,-7.6),o(.9,2,-35.2,-34.2),o(16.4,16.8,-31.4,ot.z0),o(16.4,16.8,ot.z1,-16.6),o(2.4,16.8,-31.4,-31),o(2.4,16.8,-17,-16.6),t||o(16.3,16.8,ot.z0,ot.z1),o(De.x1,De.x1+.4,De.z0-.4,De.z1+.4),o(16.8,De.x1,De.z0-.4,De.z0),o(16.8,De.x1,De.z1,De.z1+.4),o(5,7.5,-17.9,-17),o(15.6,16.4,-22.2,-18.8),o(3.2,4.8,-30.6,-29),o(13.8,15.4,-30.4,-29.2),r.push({x:ts.x,z:ts.z,r:1.45}),r.push({x:6.2,z:-27.4,r:.35},{x:12.9,z:-20.4,r:.35}),{boxes:s,circles:r}}const rd=(i,e,t)=>(i*2+(e>0?1:0)+t)%5;function zv(i){const e=[];let t=0;for(let n=-4;n>qt+2;n-=4,t++)for(const s of[-1,1])s<0&&n>Te.z0-1&&n<Te.z1+1||s>0&&n>lt.z0-1.5&&n<Qe.cabinet.z+1.5||s<0&&n<-21&&n>-30||e.push({z:n,sx:s,k:rd(t,s,i)});return e}function Iv({hatchOpen:i=!0,door:e=0,seal:t=0,cover:n=!0,tool:s=!0,seed:r=1}={}){const o=[],l=(_,c,g,v,b,M,A="",T=0)=>o.push({x0:Math.min(_,c)-T,x1:Math.max(_,c)+T,y0:g-T,y1:v+T,z0:Math.min(b,M)-T,z1:Math.max(b,M)+T,id:A}),u=ge,f=Ce,p=lt,m=De,d=Qe.cabinet,h=Qe.socket;l(Us.x0-1,Us.x1+1,-1,0,Us.z0-1,Us.z1+1),l(-2.4,2.4,u.h,u.h+1,u.z0-.4,.4),l(-1.8,1.8,f.h,f.h+1,.4,6.8),l(se.x0,16.8,se.h,se.h+1,-31.4,-16.6),l(16.8,m.x1+.4,m.h,m.h+1,m.z0-.4,m.z1+.4),l(-1.8,-1.5,0,f.h,.4,6.4),l(1.5,1.8,0,f.h,.4,6.4),l(-1.8,1.8,0,f.h,6.4,6.8),l(-2.4,-1.3/2,0,u.h,0,.4),l(Gt.w/2,2.4,0,u.h,0,.4),l(-1.3/2,Gt.w/2,Gt.y1,u.h,0,.4),l(-1.3/2,Gt.w/2,0,Gt.y0,0,.4),i?l(-1.2,-.6,0,2,-1.3,0):l(-1.3/2,Gt.w/2,Gt.y0,Gt.y1,.12,.28,"hatch"),l(1.05,1.5,0,2,1.7,4.1),l(-2.4,-2,0,u.h,u.z0,0),l(-2.4,2.4,0,u.h,u.z0-.4,u.z0),l(2,2.4,0,se.h,u.z0,p.z0),l(2,2.4,0,se.h,p.z1,0),l(2,2.4,p.h,se.h,p.z0,p.z1);const a=e*(p.h-.25);a<p.h-.3&&l(2.15,2.25,a,p.h,p.z0,p.z1,"door"),l(n?d.face+.02:1.93,2,d.y-.48,d.y+.48,d.z-.4,d.z+.4,"cabinet"),n&&l(d.face-.015,d.face+.015,d.y-.47,d.y+.47,d.z-.39,d.z+.39,"cover"),l(h.x-.06,2,h.y-.27,h.y+.23,h.z-.21,h.z+.21,"socket"),l(.9,1.6,0,.45,-20.6,-19.8,"wreck"),l(-2,2,0,u.h,qt-.7,qt+.4,"barricade"),l(-2,-1,0,.32,-29.7,-21.3),l(1.2,2,0,.7,-10.2,-7.6),l(.9,2,0,1.2,-35.2,-34.2);for(const _ of zv(r))_.k===0&&l(_.sx*2-_.sx*.17,_.sx*2,1.1,2,_.z-.3,_.z+.3,"panel");return s&&l(Qe.tool.x,Qe.tool.x,Qe.tool.y,Qe.tool.y,Qe.tool.z,Qe.tool.z,"tool",.2),l(16.4,16.8,0,se.h,-31.4,ot.z0),l(16.4,16.8,0,se.h,ot.z1,-16.6),l(16.4,16.8,ot.h,se.h,ot.z0,ot.z1),l(2.4,16.8,0,se.h,-31.4,-31),l(2.4,16.8,0,se.h,-17,-16.6),t<.8&&l(16.3,16.5,0,ot.h,ot.z0,ot.z1,"seal"),l(5,7.5,0,1,-17.9,-17),l(15.6,16.4,0,1.2,-22.2,-18.8),l(3.2,4.8,0,1,-30.6,-29),l(13.8,15.4,0,1,-30.4,-29.2),l(ts.x-1.2,ts.x+1.2,0,3.2,ts.z-1.2,ts.z+1.2,"beacon"),Qe.levers.forEach((_,c)=>l(_.x-(_.face[0]?.26:.21),_.x+(_.face[0]?.26:.21),_.y-.25,_.y+.33,_.z-(_.face[1]?.26:.21),_.z+(_.face[1]?.26:.21),"lever"+c,.04)),Qe.logs.forEach(_=>l(_.x,_.x,_.y,_.y,_.z,_.z,"log:"+_.key,.17)),l(Qe.terminal.x-.12,16.4,Qe.terminal.y-.32,Qe.terminal.y+.32,Qe.terminal.z-.34,Qe.terminal.z+.34,"terminal"),l(m.x1,m.x1+.4,0,m.h,m.z0-.4,m.z1+.4,"glass"),l(16.8,m.x1,0,m.h,m.z0-.4,m.z0),l(16.8,m.x1,0,m.h,m.z1,m.z1+.4),o}function Tf(i,e,t,n=1e9){let s=null,r=n,o=0,l=0;for(const f of t){let p=0,m=r,d=-1,h=0,a=!1;for(let _=0;_<3&&!a;_++){const c=_===0?f.x0:_===1?f.y0:f.z0,g=_===0?f.x1:_===1?f.y1:f.z1,v=i[_],b=e[_];if(Math.abs(b)<1e-9){(v<c||v>g)&&(a=!0);continue}let M=(c-v)/b,A=(g-v)/b,T=-1;if(M>A){const x=M;M=A,A=x,T=1}M>p&&(p=M,d=_,h=T),A<m&&(m=A),p>m&&(a=!0)}!a&&d>=0&&p>1e-4&&p<r&&(r=p,s=f,o=d,l=h)}if(!s)return null;const u=[0,0,0];return u[o]=l,{box:s,t:r,n:u}}const js=Math.PI/2,zo=[{name:"шлюз: вход, люк на станцию",pos:[.15,Zt,5.75],yaw:.04,pitch:-.02,hatch:0,rig:0},{name:"шлюз: внешний люк в инее",pos:[-.35,Zt,2.2],yaw:Math.PI-.1,pitch:.06,hatch:0,rig:0},{name:"Узор спящий: иней вблизи оказывается рисунком",pos:[-.86,Zt,4.6],yaw:js+.45,pitch:-.12,hatch:0,rig:0},{name:"коридор кольца: холодный аварийный свет",pos:[.25,Zt,-3.2],yaw:.05,pitch:.04,rig:1},{name:"коридор: тёплый островок, где жил экипаж",pos:[.95,Zt,-20.6],yaw:.42,pitch:-.06,rig:0},{name:"коридор: баррикада и вещи экипажа",pos:[.7,Zt,-23.2],yaw:.14,pitch:0,rig:0},{name:"отражение в стекле: окно, астероид, Солнце",pos:[-1.05,Zt,-13.6],yaw:js+.04,pitch:.1,rig:0},{name:"отсек маяка А: общий вид от двери",pos:[3.3,Zt,-23.4],yaw:-js+.08,pitch:.3,rig:0},{name:"маяк А: прибор и кабели",pos:[6.9,Zt,-26.5],yaw:-2.3,pitch:.2,rig:0},{name:"маяк А: надписи экипажа и тень с ушами",pos:[10.1,Zt,-28.9],yaw:0,pitch:.42,rig:0},{name:"лапы с инструментом и перо-подвеска",pos:[.5,Zt,-15.4],yaw:.25,pitch:-.34,rig:1,inspect:1},{name:"Узор проснувшийся",pos:[12.6,Zt,-27.4],yaw:-.8,pitch:.12,wake:1,rig:0},{name:"сцена 1: лапы на штурвале люка",pos:[0,Zt,.65],yaw:0,pitch:-.06,hatch:0,pose:"wheel",wheel:.9},{name:"сцена 2: инструмент лежит на ящике",pos:[.55,Zt,-7.2],yaw:-.74,pitch:-.29,pose:"empty",toolOn:1,door:0,powered:!1,bat:"cabinet"},{name:"сцена 2: резак вскрывает шкаф с батареей",pos:[.55,Zt,-18.05],yaw:-.854,pitch:-.2,mode:"cut",beam:"cut",cut:.55,bat:"cabinet",door:0,powered:!1,heat:.5},{name:"сцена 2: батарея в захвате у гнезда двери",pos:[.7,Zt,-21.3],yaw:-.835,pitch:-.22,bat:"held",cut:1,coverFall:1,door:0,powered:!1,beam:"grip"},{name:"сцена 3: рубильник щитка, кабели своего цвета",pos:[4.2,Zt,-19.95],yaw:1.88,pitch:-.12},{name:"сцена 3: маяк замолчал, краулеры «Скобы»",pos:[4.2,Zt,-26.8],yaw:-1.41,pitch:-.12,wake:1,lightsDown:1,beacon:0,steps:3,mode:"cut",beam:"cut",heat:.7,fight:[{x:6.17,y:.8,z:-27.12,n:[0,1,0],f:[-1,0,.16],walk:0,attack:1,hurt:.6,state:"leap"},{x:7.6,y:.1,z:-28.5,n:[0,1,0],f:[-1,0,.4],walk:1,state:"chase"},{x:6.9,y:2,z:-30.94,n:[0,0,1],f:[0,-1,0],walk:1,state:"path"}]},{name:"сцена 4: запечатанная дверь, четыре знака",pos:[13.4,Zt,-24],yaw:-js,pitch:.06,wake:1,lightsDown:1,beacon:0,steps:3},{name:"финал: галерея, Узор в полости астероида",pos:[18.7,Zt,-24],yaw:-js,pitch:.08,wake:1,lightsDown:1,beacon:0,steps:3,seal:1,turn:1,rig:0},{name:"мёртвый ремонтный краулер, сквозь которого пророс Узор",pos:[.1,Zt,-18.9],yaw:-.72,pitch:-.48,rig:0},{name:"дверь мастерской: название, табло «нет питания», гнездо, кабель к шкафу",pos:[-1.1,Zt,-21.6],yaw:-js+.12,pitch:-.05,door:0,powered:!1,bat:"cabinet",rig:0},{name:"шкаф батарей: лампа, табличка, шов для резака",pos:[.2,Zt,-17.9],yaw:-1.05,pitch:-.2,door:0,powered:!1,bat:"cabinet",mode:"cut"},{name:"инструмент в режиме резака: когти сведены, линза горит",pos:[.5,Zt,-15.4],yaw:.25,pitch:-.34,rig:1,inspect:1,mode:"cut"},{name:"резак по двери: искры и след, но не режется",pos:[.6,Zt,-23.6],yaw:-js-.2,pitch:-.1,door:0,powered:!1,bat:"cabinet",mode:"cut",beam:"cut",heat:.4}],Uv={open:[[0,5],[0,1],[.6,-2],[.3,-20],[1.2,-23.45],[3.6,-23.45],[6,-21],[9.5,-20.6],[13,-24],[9.5,-27.6],[6.5,-25]],wall:[[0,-31],[0,-38.5]]};function cl(i,e,t){for(const n of e.circles){const s=i.x-n.x,r=i.z-n.z,o=Math.hypot(s,r),l=n.r+t;o<l&&o>1e-6&&(i.x=n.x+s/o*l,i.z=n.z+r/o*l)}for(const n of e.boxes){const s=Math.max(n.x0,Math.min(i.x,n.x1)),r=Math.max(n.z0,Math.min(i.z,n.z1)),o=i.x-s,l=i.z-r,u=Math.hypot(o,l);u<t&&u>1e-6&&(i.x=s+o/u*t,i.z=r+l/u*t)}}function Nv(i=ll.x,e=ll.z){return{x:i,z:e,yaw:ll.yaw,pitch:0,input:{forward:0,strafe:0},speed:Lv}}function od(i,e,t){const n=Math.max(-1,Math.min(1,i.input.forward)),s=Math.max(-1,Math.min(1,i.input.strafe)),r=Math.sin(i.yaw),o=Math.cos(i.yaw),l=Math.max(1,Math.ceil(i.speed*t/.2));for(let u=0;u<l;u++){i.x+=(-r*n+o*s)*i.speed*t/l,i.z+=(-o*n-r*s)*i.speed*t/l;for(const f of e.circles){const p=i.x-f.x,m=i.z-f.z,d=Math.hypot(p,m),h=f.r+mi;d<h&&d>1e-6&&(i.x=f.x+p/d*h,i.z=f.z+m/d*h)}for(const f of e.boxes){const p=Math.max(f.x0,Math.min(i.x,f.x1)),m=Math.max(f.z0,Math.min(i.z,f.z1)),d=i.x-p,h=i.z-m,a=Math.hypot(d,h);if(a<mi)if(a>1e-6)i.x=p+d/a*mi,i.z=m+h/a*mi;else{const _=[[f.x0-mi-i.x,0],[f.x1+mi-i.x,0],[0,f.z0-mi-i.z],[0,f.z1+mi-i.z]];_.sort((c,g)=>Math.abs(c[0]+c[1])-Math.abs(g[0]+g[1])),i.x+=_[0][0],i.z+=_[0][1]}}}i.x=Math.max(Us.x0+mi,Math.min(Us.x1-mi,i.x)),i.z=Math.max(Us.z0+mi,Math.min(Us.z1-mi,i.z))}class Fv extends sc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new xn;e.deleteAttribute("uv");const t=new Ri({side:zn}),n=new Ri,s=new Yc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ht(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new kc(e,n,6),l=new tn;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),o.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),o.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),o.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),o.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),o.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),o.setMatrixAt(5,l.matrix),this.add(o);const u=new ht(e,Or(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const f=new ht(e,Or(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const p=new ht(e,Or(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);const m=new ht(e,Or(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);const d=new ht(e,Or(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const h=new ht(e,Or(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Or(i){return new Pm({color:0,emissive:16777215,emissiveIntensity:i})}function qi(i){let e=i>>>0||2654435769;return function(){e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function sr(i,e=i){const t=document.createElement("canvas");return t.width=i,t.height=e,t}function Ov(i,e,t){const n=new Float32Array(t*t);for(let o=0;o<n.length;o++)n[o]=i();const s=new Float32Array(e*e),r=o=>o*o*(3-2*o);for(let o=0;o<e;o++)for(let l=0;l<e;l++){const u=l/e*t,f=o/e*t,p=Math.floor(u),m=Math.floor(f),d=r(u-p),h=r(f-m),a=n[m%t*t+p%t],_=n[m%t*t+(p+1)%t],c=n[(m+1)%t*t+p%t],g=n[(m+1)%t*t+(p+1)%t];s[o*e+l]=(a*(1-d)+_*d)*(1-h)+(c*(1-d)+g*d)*h}return s}function Ef(i,e,t=4,n=5){const s=new Float32Array(e*e);let r=.5,o=0;for(let l=0;l<n;l++){const u=Ov(i,e,t<<l);for(let f=0;f<s.length;f++)s[f]+=u[f]*r;o+=r,r*=.5}for(let l=0;l<s.length;l++)s[l]/=o;return s}function ul(i,e,t=!0){return i.colorSpace=e?ln:ki,t&&(i.wrapS=i.wrapT=Jr),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=es,i.needsUpdate=!0,i}function bo(i,e,t,{bump:n=2,grime:s=.35}={}){const r=qi(i),o=sr(e),l=sr(e),u=sr(e),f=sr(e),p=o.getContext("2d"),m=l.getContext("2d"),d=u.getContext("2d"),h=f.getContext("2d");m.fillStyle="#808080",m.fillRect(0,0,e,e),t(p,m,d,h,e,r);const a=p.getImageData(0,0,e,e),_=m.getImageData(0,0,e,e),c=d.getImageData(0,0,e,e),g=h.getImageData(0,0,e,e),v=Ef(r,e,4,6),b=Ef(r,e,32,3),M=new Float32Array(e*e);for(let C=0;C<e*e;C++){const P=1-s*Math.max(0,v[C]*1.6-.45);a.data[C*4]*=P,a.data[C*4+1]*=P,a.data[C*4+2]*=P*.98,M[C]=_.data[C*4]/255+(b[C]-.5)*.06,c.data[C*4]=Math.max(0,Math.min(255,c.data[C*4]+(v[C]-.5)*90+(b[C]-.5)*40))}p.putImageData(a,0,0);const A=new Uint8ClampedArray(e*e*4),T=new Uint8ClampedArray(e*e*4),x=(C,P)=>M[(P+e)%e*e+(C+e)%e];for(let C=0;C<e;C++)for(let P=0;P<e;P++){const I=(x(P+1,C)-x(P-1,C))*n*e/512*4,q=(x(P,C+1)-x(P,C-1))*n*e/512*4,L=1/Math.hypot(I,q,1),O=(C*e+P)*4;A[O]=(-I*L*.5+.5)*255,A[O+1]=(q*L*.5+.5)*255,A[O+2]=(L*.5+.5)*255,A[O+3]=255,T[O]=255,T[O+1]=c.data[O],T[O+2]=g.data[O],T[O+3]=255}const y=sr(e),E=sr(e);return y.getContext("2d").putImageData(new ImageData(A,e,e),0,0),E.getContext("2d").putImageData(new ImageData(T,e,e),0,0),{map:ul(new Os(o),!0),normalMap:ul(new Os(y),!1),orm:ul(new Os(E),!1)}}const Qt=i=>{const e=Math.round(Math.max(0,Math.min(1,i))*255);return`rgb(${e},${e},${e})`};function pr(i,e,t,n,s,r=.2,o=1){i.strokeStyle=s,i.lineCap="round";for(let l=0;l<n;l++){const u=e()*t,f=e()*t,p=e()*Math.PI,m=(.02+e()*r)*t;i.lineWidth=o*(.4+e()),i.globalAlpha=.15+e()*.5,i.beginPath(),i.moveTo(u,f),i.lineTo(u+Math.cos(p)*m,f+Math.sin(p)*m),i.stroke()}i.globalAlpha=1}function hc(i,e,t,n,s){for(let r=0;r<n;r++){const o=e()*t,l=e()*t*.6,u=(.15+e()*.5)*t,f=2+e()*10,p=i.createLinearGradient(0,l,0,l+u);p.addColorStop(0,s),p.addColorStop(1,"rgba(0,0,0,0)"),i.globalAlpha=.12+e()*.25,i.fillStyle=p,i.fillRect(o,l,f,u)}i.globalAlpha=1}function kv(i,e,t,n,s,r){i.fillStyle="#8f9690",i.fillRect(0,0,s,s),t.fillStyle=Qt(.62),t.fillRect(0,0,s,s),n.fillStyle=Qt(.25),n.fillRect(0,0,s,s);const o=s/2;for(let l=0;l<2;l++)for(let u=0;u<2;u++){const f=u*o,p=l*o,m=.88+r()*.2;i.fillStyle=`rgb(${132*m|0},${141*m|0},${136*m|0})`,i.fillRect(f+3,p+3,o-6,o-6);const d=o*.12;e.fillStyle=Qt(.56),e.fillRect(f+d,p+d,o-2*d,o-2*d),e.strokeStyle=Qt(.36),e.lineWidth=3,e.strokeRect(f+d,p+d,o-2*d,o-2*d),i.strokeStyle="rgba(30,34,36,0.5)",i.lineWidth=2,i.strokeRect(f+d,p+d,o-2*d,o-2*d),e.strokeStyle=Qt(.12),e.lineWidth=5,e.strokeRect(f,p,o,o),i.strokeStyle="#1a1d1f",i.lineWidth=4,i.strokeRect(f,p,o,o),t.strokeStyle=Qt(.9),t.lineWidth=6,t.strokeRect(f,p,o,o);for(let h=0;h<6;h++)for(const[a,_]of[[f+d*.5+(o-d)*h/6+6,p+d*.5],[f+d*.5+(o-d)*h/6+6,p+o-d*.5],[f+d*.5,p+d*.5+(o-d)*h/6+6],[f+o-d*.5,p+d*.5+(o-d)*h/6+6]])e.fillStyle=Qt(.85),e.beginPath(),e.arc(a,_,3.2,0,7),e.fill(),i.fillStyle="rgba(200,205,200,0.5)",i.beginPath(),i.arc(a-.6,_-.6,2.2,0,7),i.fill(),n.fillStyle=Qt(.9),n.beginPath(),n.arc(a,_,3.2,0,7),n.fill()}for(let l=0;l<260;l++){const u=r()<.5,f=Math.round(r()*2)*o+(r()-.5)*22,p=r()*s,m=1+r()*5,d=u?f:p,h=u?p:f;i.fillStyle=`rgba(${70+r()*40|0},${72+r()*30|0},${70+r()*30|0},0.9)`,i.beginPath(),i.ellipse(d,h,m,m*(.4+r()),r()*3,0,7),i.fill(),n.fillStyle=Qt(1),n.beginPath(),n.arc(d,h,m,0,7),n.fill(),t.fillStyle=Qt(.35),t.beginPath(),t.arc(d,h,m,0,7),t.fill()}hc(i,r,s,46,"rgba(40,30,22,0.9)"),hc(t,r,s,30,"rgba(255,255,255,0.8)"),pr(i,r,s,150,"#cfd3cf",.12,1),pr(e,r,s,80,"#606060",.12,1.4)}function Bv(i,e,t,n,s,r){i.fillStyle="#3a3d40",i.fillRect(0,0,s,s),t.fillStyle=Qt(.5),t.fillRect(0,0,s,s),n.fillStyle=Qt(.85),n.fillRect(0,0,s,s);const o=s/2;for(let f=0;f<2;f++)for(let p=0;p<2;p++){const m=p*o,d=f*o,h=.8+r()*.35;i.fillStyle=`rgb(${58*h|0},${61*h|0},${64*h|0})`,i.fillRect(m+2,d+2,o-4,o-4);const a=o/14;for(let _=0;_<14;_++)for(let c=0;c<14;c++){const g=m+(_+.5)*a,v=d+(c+.5)*a,b=(_+c)%2?.785:-.785;e.fillStyle=Qt(.78),e.beginPath(),e.ellipse(g,v,a*.36,a*.11,b,0,7),e.fill(),i.fillStyle="rgba(120,124,128,0.35)",i.beginPath(),i.ellipse(g-.5,v-.5,a*.34,a*.09,b,0,7),i.fill(),t.fillStyle=Qt(.3),t.beginPath(),t.ellipse(g,v,a*.34,a*.1,b,0,7),t.fill()}e.strokeStyle=Qt(.1),e.lineWidth=6,e.strokeRect(m,d,o,o),i.strokeStyle="#0c0d0e",i.lineWidth=5,i.strokeRect(m,d,o,o);for(const[_,c]of[[m+14,d+14],[m+o-14,d+14],[m+14,d+o-14],[m+o-14,d+o-14]])e.fillStyle=Qt(.25),e.beginPath(),e.arc(_,c,5,0,7),e.fill(),i.fillStyle="#17181a",i.beginPath(),i.arc(_,c,5,0,7),i.fill()}const l=i.createLinearGradient(0,0,s,0);l.addColorStop(.2,"rgba(150,155,160,0)"),l.addColorStop(.5,"rgba(150,155,160,0.16)"),l.addColorStop(.8,"rgba(150,155,160,0)"),i.fillStyle=l,i.fillRect(0,0,s,s);const u=t.createLinearGradient(0,0,s,0);u.addColorStop(.2,"rgba(0,0,0,0)"),u.addColorStop(.5,"rgba(0,0,0,0.35)"),u.addColorStop(.8,"rgba(0,0,0,0)"),t.fillStyle=u,t.fillRect(0,0,s,s),pr(i,r,s,260,"#8d9196",.2,1.2),pr(t,r,s,200,"#202020",.2,2);for(let f=0;f<26;f++){const p=r()*s,m=r()*s,d=6+r()*34,h=i.createRadialGradient(p,m,0,p,m,d);h.addColorStop(0,"rgba(8,8,10,0.55)"),h.addColorStop(1,"rgba(8,8,10,0)"),i.fillStyle=h,i.fillRect(p-d,m-d,2*d,2*d);const a=t.createRadialGradient(p,m,0,p,m,d);a.addColorStop(0,"rgba(0,0,0,0.6)"),a.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=a,t.fillRect(p-d,m-d,2*d,2*d)}}function Gv(i,e,t,n,s,r){i.fillStyle="#6c7074",i.fillRect(0,0,s,s),t.fillStyle=Qt(.42),t.fillRect(0,0,s,s),n.fillStyle=Qt(1),n.fillRect(0,0,s,s);for(let o=0;o<1400;o++){const l=r()*s,u=r()*s,f=20+r()*160,p=90+r()*70|0;i.strokeStyle=`rgba(${p},${p+3},${p+6},0.25)`,i.lineWidth=1,i.beginPath(),i.moveTo(u,l),i.lineTo(u+f,l+(r()-.5)*2),i.stroke()}for(let o=0;o<60;o++){const l=r()*s,u=r()*s,f=8+r()*46,p=i.createRadialGradient(l,u,0,l,u,f);p.addColorStop(0,r()<.5?"rgba(92,52,28,0.5)":"rgba(20,20,24,0.5)"),p.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=p,i.fillRect(l-f,u-f,2*f,2*f);const m=t.createRadialGradient(l,u,0,l,u,f);m.addColorStop(0,"rgba(255,255,255,0.5)"),m.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=m,t.fillRect(l-f,u-f,2*f,2*f)}pr(i,r,s,200,"#c2c6ca",.15,1),pr(e,r,s,120,"#555",.15,1.5)}function Vv(i,e,t,n,s,r){i.fillStyle="#e4e4e0",i.fillRect(0,0,s,s),t.fillStyle=Qt(.55),t.fillRect(0,0,s,s),n.fillStyle=Qt(.1),n.fillRect(0,0,s,s);for(let o=0;o<300;o++){const l=r()*s,u=r()*s,f=.8+r()*r()*r()*9;i.fillStyle=`rgba(${100+r()*50|0},${100+r()*45|0},${104+r()*40|0},0.8)`,i.beginPath(),i.ellipse(l,u,f,f*(.3+r()*.8),r()*3,0,7),i.fill(),n.fillStyle=Qt(.5),n.beginPath(),n.arc(l,u,f,0,7),n.fill(),e.fillStyle=Qt(.42),e.beginPath(),e.arc(l,u,f,0,7),e.fill(),t.fillStyle=Qt(.3),t.beginPath(),t.arc(l,u,f,0,7),t.fill()}hc(i,r,s,30,"rgba(50,38,28,0.8)"),pr(i,r,s,200,"#70706c",.1,1)}function Hv(i,e,t,n,s,r){i.fillStyle="#d8d6d0",i.fillRect(0,0,s,s),t.fillStyle=Qt(.92),t.fillRect(0,0,s,s),n.fillStyle=Qt(0),n.fillRect(0,0,s,s);for(let o=0;o<s;o+=4)e.fillStyle=Qt(.44),e.fillRect(0,o,s,2);for(let o=0;o<s;o+=4)e.fillStyle="rgba(160,160,160,0.5)",e.fillRect(o,0,2,s);for(let o=0;o<40;o++){const l=r()*s,u=6+r()*20,f=e.createLinearGradient(0,l,0,l+u);f.addColorStop(0,"rgba(255,255,255,0)"),f.addColorStop(.5,"rgba(255,255,255,0.5)"),f.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=f,e.fillRect(0,l,s,u),i.fillStyle="rgba(0,0,0,0.07)",i.fillRect(0,l+u*.6,s,u*.5)}for(let o=0;o<50;o++){const l=r()*s,u=r()*s,f=10+r()*50,p=i.createRadialGradient(l,u,0,l,u,f);p.addColorStop(0,"rgba(40,34,28,0.3)"),p.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=p,i.fillRect(l-f,u-f,2*f,2*f)}}let Ia=null;function Wv(){return Ia||(Ia={panel:bo(11,1024,kv,{bump:2.4}),floor:bo(23,1024,Bv,{bump:3,grime:.45}),metal:bo(37,512,Gv,{bump:1.2}),paint:bo(41,512,Vv,{bump:1.6}),cloth:bo(53,256,Hv,{bump:2.2,grime:.2})},Ia)}function Qn(i,e,t,n,s,r,o,{jitter:l=.08,font:u="sans-serif",weight:f=700,drip:p=0}={}){i.save(),i.fillStyle=o,i.textBaseline="alphabetic";let m=n;for(const d of t){const h=r*(1+(e()-.5)*l*2);i.font=`${f} ${h}px ${u}`;const a=i.measureText(d).width;i.save(),i.translate(m,s+(e()-.5)*r*l*1.5),i.rotate((e()-.5)*l*2.2),i.globalAlpha=.72+e()*.28,i.fillText(d,0,0),p&&d!==" "&&e()<p&&(i.globalAlpha=.5,i.fillRect(a*(.2+e()*.5),0,Math.max(2,r*.04),r*(.3+e()*.9))),i.restore(),m+=a*(.98+e()*.08)}return i.restore(),m}function dc(i=64){const e=sr(i),t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i);const s=new Os(e);return s.needsUpdate=!0,s}const Ne={neonViolet:14242287,neonViolet2:11552236,turquoise:8702925,lotusTeal:222624,deepViolet:2230107,gold:12815678,goldLight:16639079,flame:16761125,skin:14205360,eyeGreen:959087,eyeBlue:4367848,gem:2977297,cardBg:1778995},e0=6,Io={uWake:{value:0},uTime:{value:0},uUzQ:{value:2},uUzOff:{value:0},uAO:{value:.5},uWakeA:{value:new Ue(Ne.turquoise)},uWakeB:{value:new Ue(Ne.neonViolet)}},Xv=`
attribute vec3 aFlat; attribute vec3 aFlatN;
varying vec3 vFlat; varying vec3 vFlatN;
`,qv=`
varying vec3 vFlat; varying vec3 vFlatN;
uniform vec4 uFrost[${e0}];
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
  for (int i = 0; i < ${e0}; i++) {
    vec3 d = vFlat - uFrost[i].xyz; float r = uFrost[i].w * (1.0 + 0.4 * uWake) * 1.45;
    m0 = max(m0, 1.0 - dot(d, d) / (r * r));
  }
  if (m0 <= 0.0) return;
  vec3 an = abs(vFlatN);
  vec2 p = an.y > an.x && an.y > an.z ? vFlat.xz : (an.x > an.z ? vFlat.zy : vFlat.xy);
  float n1 = uzNoise(p * 2.3), n2 = uzNoise(p * 7.1), n3 = uzNoise(p * 23.0);
  float nz = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
  float m = 0.0;
  for (int i = 0; i < ${e0}; i++) {
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
  // Две октавы шума повёрнуты на разные углы: у шума на прямой сетке зерно читалось квадратами,
  // потому что обе октавы лежали по одним осям.
  mat2 r1 = mat2(0.8253, -0.5646, 0.5646, 0.8253), r2 = mat2(-0.3233, -0.9463, 0.9463, -0.3233);
  float grain = uzNoise(r1 * p * 61.0) * uzNoise(r2 * p * 143.0 + 5.3) * gf + 0.25 * (1.0 - gf);
  float rim = smoothstep(0.0, 0.25, m) * (1.0 - smoothstep(0.25, 0.7, m));
  float body = smoothstep(0.38, 0.72, nz + 0.35 * m);      // лёд лежит пятнами, между ними голый металл
  cov = clamp(body * (0.35 + 0.5 * nz) + rim * 0.22 * body + grain * 0.5 * body, 0.0, 1.0) * soft;
  float sp = 0.0;
  if (uUzQ > 1.5) {
    // кристаллы-иглы: в каждой клетке повёрнутой сетки игла своего направления (раньше искра была
    // целой квадратной клеткой, и вблизи лёд выглядел мозаикой)
    vec2 q = r1 * p * 250.0, c = floor(q), f = fract(q) - 0.5;
    float an = uzHash(c) * 6.2832; vec2 dr = vec2(cos(an), sin(an));
    float needle = smoothstep(0.46, 0.12, abs(dot(f, dr))) * smoothstep(0.075, 0.018, abs(dot(f, vec2(-dr.y, dr.x))));
    sp = step(0.86, uzHash(c + 3.1)) * needle * clamp(1.0 - fwidth(p.x) * 250.0, 0.0, 1.0) * (0.55 + 0.45 * sin(uzHash(c + 7.0) * 40.0 + dot(vFlat, vec3(31.0, 17.0, 23.0)) + uTime * 0.6));
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
`,Yv=`
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
`,$v=`
#include <aomap_fragment>
reflectedLight.indirectDiffuse *= uzAO;
reflectedLight.indirectSpecular *= uzAO;
`;function Zv(i){Object.assign(i.uniforms,Io,this.userData.room),i.vertexShader=Xv+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFlat = aFlat; vFlatN = aFlatN;`),i.fragmentShader=qv+i.fragmentShader.replace("#include <normal_fragment_maps>",Yv).replace("#include <aomap_fragment>",$v)}function Ua(i,e){return{uFrost:{value:Array.from({length:e0},()=>new Kt(0,-100,0,.001))},uRoomMin:{value:new Y(...i)},uRoomMax:{value:new Y(...e)}}}function So(i,e,{color:t=16777215,rough:n=1,metal:s=1,normal:r=1}={}){const o=Wv()[i],l=new Ri({map:o.map,normalMap:o.normalMap,roughnessMap:o.orm,metalnessMap:o.orm,color:t,roughness:n,metalness:s,vertexColors:!0});return l.normalScale.set(r,r),l.userData.room=e,l.onBeforeCompile=Zv,l.customProgramCacheKey=()=>"uzor2",l}const Kv={wall:["panel",16777215],wallDark:["panel",6120555],ceil:["panel",4014663],floor:["floor",16777215],steel:["metal",16777215],steelDark:["metal",4869458],bronze:["metal",12092746],copper:["metal",13662538],weld:["metal",15133938],orange:["paint",13132830],yellow:["paint",13214247],teal:["paint",3112838],white:["paint",14276559],red:["paint",9316898],rubber:["cloth",1776671],cloth:["cloth",7305827],clothBlue:["cloth",3952491],clothWarm:["cloth",10123861]};function er(i,e=1,t=null){const n=new fi({color:new Ue(i).multiplyScalar(e),map:t,toneMapped:!1});return n.userData.unlit=!0,n.userData.noShadow=!0,n}function Jv(i,{color:e=16777215,emissive:t=0,emissiveIntensity:n=0}={}){const s=new Ri({map:i,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,color:e,emissive:t,emissiveIntensity:n,emissiveMap:n?i:null,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return s.userData.noShadow=!0,s}function Qv(i){return{panel:So("panel",i),floor:So("floor",i,{rough:.85}),metal:So("metal",i),paint:So("paint",i),cloth:So("cloth",i)}}function Ei(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},l=i[0].morphTargetsRelative,u=new kt;u.morphTargetsRelative=l;let f=0;for(let p=0;p<i.length;++p){const m=i[p];let d=0,h=0;if(t!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const a in m.attributes){if(!n.has(a))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have compatible attributes; make sure "'+a+'" attribute exists among all geometries, or in none of them.'),null;r[a]===void 0&&(r[a]=[]),r[a].push(m.attributes[a]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of attributes."),null;if(l!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const a in m.morphAttributes){if(!s.has(a))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+".  .morphAttributes must be consistent throughout all geometries."),null;if(m.morphAttributes[a].length!==i[0].morphAttributes[a].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+'. All geometries must have the same number of morph targets for the "'+a+'" morph attribute.'),null;o[a]===void 0&&(o[a]=[]),o[a].push(m.morphAttributes[a]),h++}if(h!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". Make sure all geometries have the same number of morph attributes."),null;if(e){let a;if(t)a=m.index.count;else if(m.attributes.position!==void 0)a=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+p+". The geometry must have either an index or a position attribute"),null;u.addGroup(f,a,p),f+=a}}if(t){let p=0;const m=[];for(let d=0;d<i.length;++d){const h=i[d].index;for(let a=0;a<h.count;++a)m.push(h.getX(a)+p);p+=i[d].attributes.position.count}u.setIndex(m)}for(const p in r){const m=Af(r[p]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" attribute."),null;u.setAttribute(p,m)}for(const p in o){const m=o[p][0].length;if(m!==0){u.morphAttributes=u.morphAttributes||{},u.morphAttributes[p]=[];for(let d=0;d<m;++d){const h=[];for(let _=0;_<o[p].length;++_)h.push(o[p][_][d]);const a=Af(h);if(!a)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+p+" morphAttribute."),null;u.morphAttributes[p].push(a)}}}return u}function Af(i){let e,t,n,s=-1,r=0;for(let f=0;f<i.length;++f){const p=i[f];if(e===void 0&&(e=p.array.constructor),e!==p.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=p.itemSize),t!==p.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=p.normalized),n!==p.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=p.gpuType),s!==p.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=p.count*t}const o=new e(r),l=new an(o,t,n);let u=0;for(let f=0;f<i.length;++f){const p=i[f];if(p.isInterleavedBufferAttribute){const m=u/t;for(let d=0,h=p.count;d<h;d++)for(let a=0;a<t;a++){const _=p.getComponent(d,a);l.setComponent(d+m,a,_)}}else o.set(p.array,u);u+=p.count*t}return s!==void 0&&(l.gpuType=s),l}function ad(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const l=Object.keys(i.attributes),u=[],f=new Map,p=[],m=["getX","getY","getZ","getW"],d=e*.5,h=Math.log10(1/e),a=Math.pow(10,h),_=d*a;for(let g=0;g<r;g++){const v=n?n.getX(g):g;let b="";for(let M=0,A=l.length;M<A;M++){const T=l[M],x=i.getAttribute(T),y=x.itemSize;for(let E=0;E<y;E++)b+=`${Math.trunc(x[m[E]](v)*a+_)},`}b in t?p.push(t[b]):(u.push(v),t[b]=o,p.push(o),o++)}const c=i.clone();for(const g in i.attributes)c.setAttribute(g,Rf(i.attributes[g],u,f));for(const g in i.morphAttributes)c.morphAttributes[g]=i.morphAttributes[g].map(v=>Rf(v,u,f));return c.setIndex(p),c}function Rf(i,e,t=new Map){const n=i.isInterleavedBufferAttribute,s=n?i.data:i,r=n?s.stride:i.itemSize;let o=n?t.get(s):void 0;if(o===void 0){const u=new s.array.constructor(e.length*r);for(let f=0;f<e.length;f++)for(let p=0;p<r;p++)u[f*r+p]=s.array[e[f]*r+p];o=n?new s.constructor(u,r,s.meshPerAttribute):new i.constructor(u,i.itemSize,i.normalized,i.meshPerAttribute),o.setUsage(s.usage),n&&t.set(s,o)}const l=n?new i.constructor(o,i.itemSize,i.offset,i.normalized):o;return l.name=i.name,n||(l.gpuType=i.gpuType),l}const wo=new Y;function gi(i,e,t,n,s,r){const o=2*Math.PI*s/4,l=Math.max(r-2*s,0),u=Math.PI/4;wo.copy(e),wo[n]=0,wo.normalize();const f=.5*o/(o+l),p=1-wo.angleTo(i)/u;return Math.sign(wo[t])===1?p*f:l/(o+l)+f+f*(1-p)}class Zc extends xn{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const u=new Y,f=new Y,p=new Y(e,t,n).divideScalar(2).subScalar(r),m=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,a=m.length/6,_=new Y,c=.5/o;for(let g=0,v=0;g<m.length;g+=3,v+=2)switch(u.fromArray(m,g),f.copy(u),f.x-=Math.sign(f.x)*c,f.y-=Math.sign(f.y)*c,f.z-=Math.sign(f.z)*c,f.normalize(),m[g+0]=p.x*Math.sign(u.x)+f.x*r,m[g+1]=p.y*Math.sign(u.y)+f.y*r,m[g+2]=p.z*Math.sign(u.z)+f.z*r,d[g+0]=f.x,d[g+1]=f.y,d[g+2]=f.z,Math.floor(g/a)){case 0:_.set(1,0,0),h[v+0]=gi(_,f,"z","y",r,n),h[v+1]=1-gi(_,f,"y","z",r,t);break;case 1:_.set(-1,0,0),h[v+0]=1-gi(_,f,"z","y",r,n),h[v+1]=1-gi(_,f,"y","z",r,t);break;case 2:_.set(0,1,0),h[v+0]=1-gi(_,f,"x","z",r,e),h[v+1]=gi(_,f,"z","x",r,n);break;case 3:_.set(0,-1,0),h[v+0]=1-gi(_,f,"x","z",r,e),h[v+1]=1-gi(_,f,"z","x",r,n);break;case 4:_.set(0,0,1),h[v+0]=1-gi(_,f,"x","y",r,e),h[v+1]=1-gi(_,f,"y","x",r,t);break;case 5:_.set(0,0,-1),h[v+0]=gi(_,f,"x","y",r,e),h[v+1]=1-gi(_,f,"y","x",r,t);break}}static fromJSON(e){return new Zc(e.width,e.height,e.depth,e.segments,e.radius)}}const lr=42,Na=new Ue,jv=new jt,e_=new Y(1,0,0);function Kc(i){const e=i.z/lr,t=lr-i.y;return i.set(i.x,lr-t*Math.cos(e),t*Math.sin(e))}function Wi(i,e=new jt){return e.setFromAxisAngle(e_,-i/lr)}function Sn(i,e,t,n,s=0,r=0){return Kc(i.position.set(e,t,n)),Wi(n,i.quaternion),(s||r)&&i.quaternion.multiply(jv.setFromEuler(new Xn(r,s,0,"YXZ"))),i}function dn(i,e,t,n=new Y){return Kc(n.set(i,e,t))}function t_(i){const e=i.attributes.position,t=i.attributes.normal,n=new Float32Array(e.count*3),s=new Float32Array(e.count*3),r=new Y;for(let o=0;o<e.count;o++){const l=e.getX(o),u=e.getY(o),f=e.getZ(o);n[o*3]=l,n[o*3+1]=u,n[o*3+2]=f;const p=t.getX(o),m=t.getY(o),d=t.getZ(o);s[o*3]=p,s[o*3+1]=m,s[o*3+2]=d,Kc(r.set(l,u,f)),e.setXYZ(o,r.x,r.y,r.z);const h=f/lr,a=Math.cos(h),_=Math.sin(h);t.setXYZ(o,p,m*a+d*_,-m*_+d*a)}return i.setAttribute("aFlat",new an(n,3)),i.setAttribute("aFlatN",new an(s,3)),i.computeBoundingSphere(),i.computeBoundingBox(),i}new dt;const n_=new Xn,i_=new Y,s_=new Y(1,1,1);class Vr{constructor(){this.bins=new Map}add(e,t,n){let s=t.index?t.toNonIndexed():t.clone();for(const o of Object.keys(s.attributes))["position","normal","uv"].includes(o)||s.deleteAttribute(o);s.attributes.uv||s.setAttribute("uv",new an(new Float32Array(s.attributes.position.count*2),2)),n&&s.applyMatrix4(n);const r=Kv[e];if(r){Na.set(r[1]);const o=s.attributes.position.count,l=new Float32Array(o*3);for(let u=0;u<o;u++)l[u*3]=Na.r,l[u*3+1]=Na.g,l[u*3+2]=Na.b;s.setAttribute("color",new an(l,3)),e=r[0]}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(s),this}mtx(e,t,n,s=0,r=0,o=0,l=1,u=1,f=1){return new dt().compose(i_.set(e,t,n),new jt().setFromEuler(n_.set(s,r,o,"YXZ")),s_.set(l,u,f)).clone()}box(e,t,n,s,r,o,l,{rx:u=0,ry:f=0,rz:p=0,tile:m=2,uo:d=0,vo:h=0,bevel:a}={}){const _=u||f||p,c=_?1:Math.max(1,Math.ceil(l/.8)),g=_&&Math.abs(Math.abs(f)-Math.PI/2)<.01?Math.max(1,Math.ceil(r/.8)):1,v=Math.min(r,o,l),b=Math.max(r,o,l);a===void 0&&(a=v>=.1&&b<=2.2&&c<=3?Math.min(.022,v*.14):0);const M=a?new Zc(r,o,l,1,a):new xn(r,o,l,g,1,c),A=M.index?M.toNonIndexed():M,T=A.attributes.position,x=A.attributes.normal,y=A.attributes.uv;for(let E=0;E<T.count;E++){const C=T.getX(E)+(_?0:t),P=T.getY(E)+(_?0:n),I=T.getZ(E)+(_?0:s),q=Math.abs(x.getX(E)),L=Math.abs(x.getY(E));q>.5?y.setXY(E,I/m+d,P/m+h):L>.5?y.setXY(E,C/m+d,I/m+h):y.setXY(E,C/m+d,P/m+h)}return this.add(e,A,this.mtx(t,n,s,u,f,p))}slab(e,t,n,s,r,o,l,u){return this.box(e,(t+r)/2,(n+o)/2,(s+l)/2,Math.abs(r-t),Math.abs(o-n),Math.abs(l-s),u)}pipe(e,t,n,s,{seg:r=12,cap:o=!1}={}){const l=new Y(...t),u=new Y(...n),f=l.distanceTo(u),p=new cn(s,s,f,r,Math.max(1,Math.ceil(f/.8)),!o),m=p.attributes.uv;for(let h=0;h<m.count;h++)m.setXY(h,m.getX(h)*Math.max(1,Math.round(s*12)),m.getY(h)*f/2);const d=new jt().setFromUnitVectors(new Y(0,1,0),u.clone().sub(l).normalize());return this.add(e,p,new dt().compose(l.clone().add(u).multiplyScalar(.5),d,new Y(1,1,1)))}cable(e,t,n=.025,{seg:s=6,tension:r=.5}={}){const o=new Vs(t.map(u=>new Y(...u)),!1,"catmullrom",r),l=Math.max(8,Math.ceil(o.getLength()/.12));return this.add(e,new dr(o,l,n,s,!1))}wall(e,t,n,s,r,o,l,u,f=[],p){const m=f.slice().sort((a,_)=>a.a0-_.a0),d=(a,_,c,g)=>{_-a<1e-4||g-c<1e-4||(t==="x"?this.slab(e,n-u/2,c,a,n+u/2,g,_,p):this.slab(e,a,c,n-u/2,_,g,n+u/2,p))};let h=s;for(const a of m)d(h,a.a0,o,l),d(a.a0,a.a1,o,a.y0),d(a.a0,a.a1,a.y1,l),h=a.a1;return d(h,r,o,l),this}build(e,{shadows:t=!0}={}){const n=new zt;for(const[s,r]of this.bins){const o=e[s];if(!o)throw new Error("нет материала "+s);const l=t_(Ei(r,!1));for(const f of r)f.dispose();const u=new ht(l,o);u.name=s,u.castShadow=t&&!o.transparent&&!o.userData.noShadow,u.receiveShadow=!o.userData.unlit,n.add(u)}return this.bins.clear(),n}}class r_{constructor(e,{spots:t=3,points:n=3}={}){this.defs=[],this.spots=[],this.points=[],this.slotDef=[],this.dirty=[],this.rr=0,this.shadowsPerFrame=3,this.forceShadows=!1;for(let s=0;s<t;s++){const r=new Um(16777215,0,30,.6,.5,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-.0015,r.shadow.normalBias=.03,r.shadow.camera.near=.2,r.shadow.autoUpdate=!1,e.add(r,r.target),this.spots.push(r),this.slotDef.push(null),this.dirty.push(!0)}for(let s=0;s<n;s++){const r=new Yc(16777215,0,12,1.8);e.add(r),this.points.push(r)}this.nSpots=t,this.nPoints=n}setTier({spots:e,shadowSpots:t,shadowSize:n,points:s,shadowsPerFrame:r}){this.nSpots=Math.min(e,this.spots.length),this.nPoints=Math.min(s,this.points.length),this.shadowsPerFrame=r,this.spots.forEach((o,l)=>{o.visible=l<this.nSpots,o.castShadow=l<t,o.shadow.mapSize.x!==n&&(o.shadow.mapSize.set(n,n),o.shadow.map&&(o.shadow.map.dispose(),o.shadow.map=null)),this.dirty[l]=!0}),this.points.forEach((o,l)=>{o.visible=l<this.nPoints})}add(e){return e.world=dn(...e.pos),e.to&&(e.worldTo=dn(...e.to)),e.reach=e.reach||26,e.col=new Ue(e.color),this.defs.push(e),e}touch(e,t){this.spots.forEach((n,s)=>{const r=this.slotDef[s];r&&Math.hypot(r.pos[0]-e,r.pos[2]-t)<(r.dist||14)+1&&(this.dirty[s]=!0)})}update(e,t,n,s=0,r=null){const o=(f,p,m)=>{const d=[];for(const h of this.defs){if(h.kind!==f||h.off)continue;const a=Math.hypot(h.pos[0]-e,h.pos[2]-t),_=1-Math.min(1,Math.max(0,(a-(h.reach-5))/5));_>0&&d.push([_*(h.prio||1),_,h])}d.sort((h,a)=>a[0]-h[0]);for(let h=0;h<p.length;h++){const a=p[h],_=h<m?d[h]:null;if(!_){a.intensity=0,f==="spot"&&(this.slotDef[h]=null);continue}const c=_[2],g=c.wakeKeep??.16;a.color.copy(c.col),s>0&&r&&a.color.lerp(r,s*.75),a.intensity=c.power*_[1]*(c.flicker?c.flicker(n):1)*(1-s*(1-g)),a.position.copy(c.world),a.distance=c.dist||14,a.decay=c.decay??(f==="spot"?1.6:1.8),f==="spot"&&(a.target.position.copy(c.worldTo),a.target.updateMatrixWorld(),a.angle=c.angle||.6,a.penumbra=c.penumbra??.6,a.shadow.camera.far=a.distance,this.slotDef[h]!==c&&(this.slotDef[h]=c,this.dirty[h]=!0))}};o("spot",this.spots,this.nSpots),o("point",this.points,this.nPoints);let l=this.forceShadows?99:this.shadowsPerFrame,u=0;for(let f=0;f<this.spots.length&&l>0;f++){const p=(this.rr+f)%this.spots.length,m=this.spots[p];!m.castShadow||!m.visible||(this.forceShadows||this.dirty[p]&&m.intensity>0)&&(m.shadow.needsUpdate=!0,this.dirty[p]=!1,l--,u++,this.rr=p+1)}return u}}const o_=new Yh(-1,1,1,-1,0,1);class a_ extends kt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}}const l_=new a_;class c_{constructor(e){this._mesh=new ht(l_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const u_="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",f_=`
  uniform sampler2D tDiffuse; uniform sampler2D tB0; uniform sampler2D tB1; uniform sampler2D tB2; uniform float uBloom;
  uniform float uExposure; uniform vec3 uTint; uniform float uTime; uniform float uGrain; uniform float uVig; uniform float uWake; uniform float uHurt; uniform float uFade;
  varying vec2 vUv;
  vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main() {
    vec2 d = vUv - 0.5; float r2 = dot(d, d);
    // цветная кайма по краям кадра: три выборки вместо одной. Платим за неё, только когда она есть
    // (Узор проснулся или Харму ударили); в обычном кадре выборка одна.
    float caK = 0.008 * uWake + 0.02 * uHurt;
    vec3 c = texture2D(tDiffuse, vUv).rgb;
    if (caK > 0.0005) { vec2 ca = d * r2 * (0.004 + caK); c = vec3(texture2D(tDiffuse, vUv + ca).r, c.g, texture2D(tDiffuse, vUv - ca).b); }
    c = min(max(c, vec3(0.0)), vec3(48.0));           // NaN и «светлячки» дальше не идут
    if (uBloom > 0.0) c += (texture2D(tB0, vUv).rgb * 0.5 + texture2D(tB1, vUv).rgb * 0.34 + texture2D(tB2, vUv).rgb * 0.26) * uBloom;
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
  }`,h_=`
  uniform sampler2D tDiffuse; uniform vec2 uTexel; varying vec2 vUv;
  vec3 tap(vec2 o) { return min(max(texture2D(tDiffuse, vUv + o * uTexel).rgb, vec3(0.0)), vec3(48.0)); }
  void main() {
    vec3 c = (tap(vec2(-1.0, -1.0)) + tap(vec2(1.0, -1.0)) + tap(vec2(-1.0, 1.0)) + tap(vec2(1.0, 1.0))) * 0.25;
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(0.95, 1.7, l), 1.0);
  }`,d_=`
  uniform sampler2D tDiffuse; uniform vec2 uDir; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270;
    c += (texture2D(tDiffuse, vUv + uDir * 1.3846154).rgb + texture2D(tDiffuse, vUv - uDir * 1.3846154).rgb) * 0.3162162;
    c += (texture2D(tDiffuse, vUv + uDir * 3.2307692).rgb + texture2D(tDiffuse, vUv - uDir * 3.2307692).rgb) * 0.0702703;
    gl_FragColor = vec4(c, 1.0);
  }`;function p_(i,e,t,n){const s={tDiffuse:{value:null},tB0:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:0},uExposure:{value:1},uTint:{value:new Y(1,1,1)},uTime:{value:0},uGrain:{value:.03},uVig:{value:.42},uWake:{value:0},uHurt:{value:0},uFade:{value:1}},r=v=>new c_(new qn({...v,vertexShader:u_,depthTest:!1,depthWrite:!1})),o=r({uniforms:s,fragmentShader:f_}),l={tDiffuse:{value:null},uTexel:{value:new Le}},u={tDiffuse:{value:null},uDir:{value:new Le}},f=r({uniforms:l,fragmentShader:h_}),p=r({uniforms:u,fragmentShader:d_}),m=new Le;let d=null,h=null,a=[];const _=new Ue(0);function c(){d&&d.dispose();for(const M of a)M.a.dispose(),M.b.dispose();a=[],i.getDrawingBufferSize(m);const v=h.hdr&&!h.ldr?Ai:ri;d=new Jn(m.x,m.y,{type:v,samples:h.msaa});const b=h.bloomFrom||2;if(l.uTexel.value.set(b>1?1/m.x:0,b>1?1/m.y:0),h.bloom)for(let M=0;M<3;M++){const A=Math.max(8,m.x>>M+b),T=Math.max(8,m.y>>M+b),x={type:v,depthBuffer:!1};a.push({a:new Jn(A,T,x),b:new Jn(A,T,x),w:A,h:T})}}function g(v,b){u.tDiffuse.value=v.texture,u.uDir.value.set(1/b.w,0),i.setRenderTarget(b.b),p.render(i),u.tDiffuse.value=b.b.texture,u.uDir.value.set(0,1/b.h),i.setRenderTarget(b.a),p.render(i)}return{uniforms:s,configure(v){h={...v},c()},resize(){h&&c()},render(){i.setRenderTarget(d),i.setClearColor(_,1),i.clear(),h.prepass&&n&&i.render(n,t),i.render(e,t),s.tDiffuse.value=d.texture,a.length?(l.tDiffuse.value=d.texture,i.setRenderTarget(a[0].a),f.render(i),g(a[0].a,a[0]),g(a[0].a,a[1]),g(a[1].a,a[2]),s.tB0.value=a[0].a.texture,s.tB1.value=a[1].a.texture,s.tB2.value=a[2].a.texture,s.uBloom.value=.75):(s.tB0.value=s.tB1.value=s.tB2.value=d.texture,s.uBloom.value=0),i.setRenderTarget(null),o.render(i)}}}const m_="700 %px 'Arial Narrow', 'Liberation Sans Narrow', 'DejaVu Sans Condensed', sans-serif",jn="'Comic Sans MS', 'Segoe Print', 'DejaVu Sans', sans-serif";class Cf{constructor(e){this.N=e,this.c=document.createElement("canvas"),this.c.width=this.c.height=e,this.ctx=this.c.getContext("2d"),this.x=0,this.y=0,this.rowH=0,this.rects={}}add(e,t,n,s){if(this.x+t>this.N&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.N)throw new Error("атлас переполнен: "+e);const r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,t,n),r.clip(),s(r,t,n,qi(e.length*131+t)),r.restore(),this.rects[e]=[this.x/this.N,1-(this.y+n)/this.N,(this.x+t)/this.N,1-this.y/this.N,t/n],this.x+=t+4,this.rowH=Math.max(this.rowH,n)}texture(){const e=new Os(this.c);return e.colorSpace=ln,e.anisotropy=8,e.needsUpdate=!0,e}}function Zn(i,e,t,n,s,r,o,l=.25){i.font=m_.replace("%",s),i.fillStyle=r,i.textBaseline="top",i.fillText(e,t,n);const u=i.measureText(e).width;i.save(),i.globalCompositeOperation="destination-out";for(let f=0;f<u*s*l/60;f++)i.globalAlpha=.3+o()*.7,i.beginPath(),i.ellipse(t+o()*u,n+o()*s,1+o()*7,1+o()*3,o()*3,0,7),i.fill();return i.restore(),u}function g_(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.12,i.lineJoin="miter",i.beginPath();for(let r=0;r<3;r++){const o=-Math.PI/2+r*2.0944;i.lineTo(e+Math.cos(o)*n,t+Math.sin(o)*n)}i.closePath(),i.stroke();for(let r=0;r<3;r++){const o=t+n*(.32-r*.3),l=n*(.5-r*.14);i.beginPath(),i.moveTo(e-l,o),i.lineTo(e,o-l*.6),i.lineTo(e+l,o),i.stroke()}}function x_(){const i=new Cf(2048),e="rgba(226,228,222,0.92)",t="rgba(222,176,40,0.95)",n="rgba(235,235,225,0.9)",s="rgba(20,22,26,0.92)",r="rgba(170,32,24,0.95)",o="rgba(232,120,30,0.95)";i.add("veresk",900,200,(h,a,_,c)=>{g_(h,90,108,78,e),Zn(h,"ВЕРЕСК-9",200,14,150,e,c),Zn(h,"РУДНАЯ СТАНЦИЯ · СИНДИКАТ «ТАРН»",204,160,30,e,c,.1)}),i.add("shluz",520,200,(h,a,_,c)=>{Zn(h,"ШЛЮЗ 2",10,10,140,t,c),Zn(h,"СТЫКОВОЧНЫЙ · ДАВЛЕНИЕ ПРОВЕРЬ",14,156,30,t,c,.1)}),i.add("hazard",512,96,(h,a,_)=>{h.fillStyle="#c9a227",h.fillRect(0,0,a,_),h.fillStyle="#16171a";for(let g=-_;g<a+_;g+=64)h.beginPath(),h.moveTo(g,_),h.lineTo(g+32,_),h.lineTo(g+32+_,0),h.lineTo(g+_,0),h.fill();h.globalCompositeOperation="destination-out";const c=qi(5);for(let g=0;g<160;g++)h.globalAlpha=.5+c()*.5,h.beginPath(),h.ellipse(c()*a,c()*_,1+c()*9,1+c()*3,c()*3,0,7),h.fill()}),i.add("kolco",1020,150,(h,a,_,c)=>{Zn(h,"ЖИЛОЕ КОЛЬЦО · СЕКТОР 3",10,8,74,e,c),Zn(h,"← ШЛЮЗ 2      МАСТЕРСКАЯ 3 →",12,98,42,e,c,.15)}),i.add("masterskaya",620,130,(h,a,_,c)=>{Zn(h,"МАСТЕРСКАЯ 3",8,10,104,o,c)}),i.add("tally",620,400,(h,a,_,c)=>{h.strokeStyle=n,h.lineCap="round";for(let g=0;g<7;g++){const v=22+g*54,b=g<6?9:4;for(let M=0;M<b;M++){const A=16+M*66+c()*6,T=g===6&&M===3,x=T?2:4;for(let y=0;y<x;y++)h.lineWidth=3+c()*2.5,h.globalAlpha=.6+c()*.4,h.beginPath(),h.moveTo(A+y*11+c()*3,v+c()*5),h.lineTo(A+y*11+c()*4-2,v+38+c()*6),h.stroke();T||(h.lineWidth=3.5,h.beginPath(),h.moveTo(A-6,v+30+c()*6),h.lineTo(A+44,v+6+c()*6),h.stroke())}}h.globalAlpha=1}),i.add("zvuchit",1240,170,(h,a,_,c)=>{Qn(h,c,"ПУСТЬ ЗВУЧИТ",14,138,138,r,{jitter:.07,font:jn,drip:.25})}),i.add("derzhat",880,150,(h,a,_,c)=>{Qn(h,c,"ТРИ ДЕРЖАТ",12,118,112,n,{jitter:.09,font:jn})}),i.add("nespat",720,110,(h,a,_,c)=>{Qn(h,c,"по очереди не спим",8,78,58,n,{jitter:.1,font:jn,weight:400})}),i.add("slyshit",580,110,(h,a,_,c)=>{Qn(h,c,"оно отвечает",8,80,70,s,{jitter:.12,font:jn,weight:400})}),i.add("nikogo",940,150,(h,a,_,c)=>{Qn(h,c,"ТАМ НИКОГО НЕТ",10,116,98,e,{jitter:.06,font:jn,drip:.2})}),i.add("mayak",380,140,(h,a,_,c)=>{Qn(h,c,"МАЯК А",10,108,108,t,{jitter:.06,font:jn})}),i.add("schema",520,480,(h,a,_,c)=>{h.strokeStyle=n,h.lineWidth=4,h.lineCap="round";const g=[[260,60],[70,400],[450,400]];h.beginPath(),g.forEach(([v,b],M)=>M?h.lineTo(v+c()*6,b+c()*6):h.moveTo(v,b)),h.closePath(),h.stroke();for(const[v,b]of g){for(let M=1;M<=3;M++)h.globalAlpha=1-M*.22,h.beginPath(),h.arc(v,b,M*22,0,7),h.stroke();h.globalAlpha=1,h.fillStyle=n,h.beginPath(),h.arc(v,b,7,0,7),h.fill()}h.lineWidth=2.5;for(let v=0;v<3;v++)for(let b=-2;b<=2;b++){const M=v*2.0944,A=Math.cos(M),T=Math.sin(M),x=260+A*b*22,y=290+T*b*22;h.beginPath(),h.moveTo(x-T*48,y+A*48),h.lineTo(x+T*48,y-A*48),h.stroke()}Qn(h,c,"А",276,50,44,n,{font:jn}),Qn(h,c,"Б",18,446,44,n,{font:jn}),Qn(h,c,"В",462,446,44,n,{font:jn}),Qn(h,c,"спит",226,222,34,n,{font:jn,weight:400})}),i.add("photos",420,300,(h,a,_,c)=>{for(let g=0;g<5;g++){const v=20+g%3*132+c()*10,b=16+Math.floor(g/3)*140+c()*14,M=(c()-.5)*.2;h.save(),h.translate(v+55,b+60),h.rotate(M),h.fillStyle="#e9e6dc",h.fillRect(-55,-62,110,124);const A=h.createLinearGradient(0,-52,0,40);A.addColorStop(0,["#7fa8c9","#c9a36b","#6b8f71","#b7b0a6","#40506a"][g]),A.addColorStop(1,["#2e4a3a","#5a3c2a","#2b3a4a","#6a5a4a","#1a2030"][g]),h.fillStyle=A,h.fillRect(-47,-54,94,90),h.fillStyle="rgba(240,225,200,0.85)";for(let T=0;T<2+g%2;T++){const x=-26+T*24;h.beginPath(),h.arc(x,2,9,0,7),h.fill(),h.fillRect(x-11,12,22,24)}h.fillStyle="rgba(200,190,150,0.7)",h.fillRect(-20,-70,40,14),h.restore()}}),i.add("scorch",256,256,(h,a,_)=>{const c=h.createRadialGradient(128,128,6,128,128,124);c.addColorStop(0,"rgba(6,6,8,0.92)"),c.addColorStop(.5,"rgba(14,12,12,0.55)"),c.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=c,h.fillRect(0,0,a,_)}),i.add("ne",680,120,(h,a,_,c)=>{Qn(h,c,"тише. оно спит",8,86,72,n,{jitter:.1,font:jn,weight:400})}),i.add("smena",540,96,(h,a,_,c)=>{Qn(h,c,"смена 41. Лида, прости",6,64,36,s,{jitter:.1,font:jn,weight:400})}),i.add("skaf",420,96,(h,a,_,c)=>{Zn(h,"СКАФАНДРЫ · ВКД",6,12,62,e,c)});const l="rgba(18,19,22,0.95)",u=.7,f=(h,a,_,c)=>i.add(h,Math.round(a*u),Math.round(_*u),(g,v,b,M)=>{g.scale(u,u),c(g,a,_,M)});f("batt",640,200,(h,a,_,c)=>{h.strokeStyle=l,h.lineWidth=12,h.strokeRect(22,52,128,96),h.fillStyle=l,h.fillRect(150,82,18,36);for(let g=0;g<3;g++)h.fillRect(38+g*36,68,24,64);Zn(h,"БАТАРЕИ",196,40,108,l,c,.12),Zn(h,"ТЯГОВЫЕ · ВСКРЫТИЕ РЕЗАКОМ ПО ШВУ",200,152,26,l,c,.05)}),f("socketlbl",640,110,(h,a,_,c)=>{h.fillStyle=t,h.beginPath(),h.moveTo(6,55),h.lineTo(46,22),h.lineTo(46,44),h.lineTo(84,44),h.lineTo(84,66),h.lineTo(46,66),h.lineTo(46,88),h.fill(),Zn(h,"ГНЕЗДО БАТАРЕИ",100,6,56,t,c,.15),Zn(h,"ПИТАНИЕ ДВЕРИ МАСТЕРСКОЙ",102,70,28,t,c,.1)}),f("order",900,200,(h,a,_,c)=>{Qn(h,c,"глушить строго",10,84,76,n,{jitter:.08,font:jn,weight:400}),Qn(h,c,"в порядке вспышек",10,178,76,n,{jitter:.08,font:jn,weight:400})}),f("kontur",420,90,(h,a,_,c)=>{Zn(h,"КОНТУР МАЯКА",6,10,62,e,c,.2)}),f("svyaz",560,90,(h,a,_,c)=>{Zn(h,"СВЯЗЬ С ОПЕРАТОРОМ",6,10,56,t,c,.12)}),["С3 · 07","С3 · 08","С3 · 09","С3 · 10"].forEach((h,a)=>i.add("sec"+a,300,84,(_,c,g,v)=>{Zn(_,h,6,8,64,"rgba(226,228,222,0.6)",v,.35)}));const p=new Cf(1024),m=(h,a,_,c)=>p.add(h,a,_,(g,v,b,M)=>{g.fillStyle="#04100f",g.fillRect(0,0,v,b),c(g,v,b,M),g.fillStyle="rgba(0,0,0,0.22)";for(let A=0;A<b;A+=4)g.fillRect(0,A,v,2)}),d=(h,a,_,c,g,v)=>{h.font=`700 ${g}px 'DejaVu Sans Mono','Liberation Mono',monospace`,h.fillStyle=v,h.textBaseline="top",h.fillText(a,_,c)};return m("airlock",480,300,(h,a,_)=>{d(h,"ШЛЮЗ 2",20,16,44,"#7fe0d0"),d(h,"ВНЕШНИЙ ЛЮК  ЗАКРЫТ",20,84,28,"#7fe0d0"),d(h,"ДАВЛЕНИЕ  0.31 атм",20,126,28,"#ffb347"),d(h,"ТЕМПЕРАТУРА  -41 C",20,168,28,"#ffb347"),d(h,"ЭКИПАЖ НА БОРТУ: 0",20,220,28,"#ff5a4a"),h.strokeStyle="#7fe0d0",h.lineWidth=3,h.strokeRect(8,8,a-16,_-16)}),m("scope",480,300,(h,a,_)=>{h.strokeStyle="rgba(127,224,208,0.25)",h.lineWidth=1;for(let c=0;c<a;c+=40)h.beginPath(),h.moveTo(c,0),h.lineTo(c,_),h.stroke();for(let c=0;c<_;c+=40)h.beginPath(),h.moveTo(0,c),h.lineTo(a,c),h.stroke();h.strokeStyle="#ffc125",h.lineWidth=4,h.beginPath();for(let c=0;c<=a;c+=2){const g=c/a*3%1,v=_*.55-(g<.5?Math.sin(g*2*Math.PI*3)*Math.exp(-g*5)*_*.38:0);c?h.lineTo(c,v):h.moveTo(c,v)}h.stroke(),d(h,"А  3.000 Гц  НЕСУЩАЯ ДЕРЖИТСЯ",14,12,24,"#7fe0d0")}),m("term",480,300,h=>{["> журнал смены 41","> маяк А ... в норме","> маяк Б ... в норме","> маяк В ... в норме","> ответ на несущей: ЕСТЬ","> не выключать _"].forEach((a,_)=>d(h,a,16,16+_*44,28,_===4?"#ff5a4a":"#7fe0d0"))}),{tex:i.texture(),rects:i.rects,screenTex:p.texture(),screens:p.rects}}const Xr=Math.PI,wt=Xr/2;function At(i,e,t,n,s,r,o,l,u){u=u||l/t[4];const f=new Hi(l,u,o==="+x"||o==="-x"?Math.max(1,Math.ceil(l/.8)):1,1),p=f.attributes.uv;for(let d=0;d<p.count;d++)p.setXY(d,t[0]+p.getX(d)*(t[2]-t[0]),t[1]+p.getY(d)*(t[3]-t[1]));const m={"+x":[0,wt],"-x":[0,-wt],"+z":[0,0],"-z":[0,Xr],"+y":[-wt,0]}[o];i.add(e,f,i.mtx(n,s,r,m[0],m[1],0))}const ei=(i,e,t,n,s,r,o=1,l=1,u=1,f=16)=>{const p=new Xi(r,f,Math.max(8,f*.75|0)),m=p.attributes.uv,d=Math.max(1,Math.round(r*9));for(let h=0;h<m.count;h++)m.setXY(h,m.getX(h)*d*2,m.getY(h)*d);return i.add(e,p,i.mtx(t,n,s,0,0,0,o,l,u))},sn=(i,e,t,n,s,r,o,l=wt,u=0,f=28)=>i.add(e,new bs(r,o,8,f),i.mtx(t,n,s,l,u,0));function Pf(i,e,t,n=.035){const s=new Hi(i,e,14,20);s.rotateX(-wt);const r=s.attributes.position,o=s.attributes.uv,l=5+t()*4,u=7+t()*5,f=t()*6,p=t()*6,m=t()*6;for(let d=0;d<r.count;d++){const h=r.getX(d),a=r.getZ(d),_=Math.abs(h)/(i/2),c=Math.abs(a)/(e/2);let g=n*(Math.sin(h*l+a*2.1+f)*.55+Math.sin(a*u-h*3.3+p)*.45+Math.sin((h+a)*13+m)*.18);g+=n*.8,g-=Math.pow(Math.max(_,c),6)*.13,r.setY(d,g),o.setXY(d,o.getX(d)*i*2.2,o.getY(d)*e*2.2)}return s.computeVertexNormals(),s}const Rt=(i,e,t,n,s,r,o,l,u=20,f=0,p=0,m=0)=>i.add(e,new cn(r,o,l,u),i.mtx(t,n,s,f,m,p));function v_(i,e){const t=qi(i*7919+13),n=x_(),s={airlock:Ua([Ce.x0,0,Ce.z0],[Ce.x1,Ce.h,Ce.z1]),corridor:Ua([ge.x0,0,ge.z0],[ge.x1,ge.h,ge.z1]),bay:Ua([se.x0,0,se.z0],[se.x1,se.h,se.z1]),gallery:Ua([De.x0,0,De.z0],[De.x1,De.h,De.z1])},r={};Object.assign(r,{decal:Jv(n.tex),screens:er(16777215,1.6,n.screenTex),lamp:er(13624063,3.2),emerg:er(16722458,2.6),glowRed:er(16719888,5),glowCool:er(14083839,1.3),glowWarm:er(16756832,4),glowBeacon:er(16763e3,7)});const o={};for(const c of Object.keys(s))o[c]={...Qv(s[c]),...r};const l=n.rects,u=n.screens,f=new zt,p={shafts:[],dust:[],steam:[],sparks:[]},m=[],d={};{const c=new Vr;c.slab("floor",Ce.x0,-.2,Ce.z0,Ce.x1,0,Ce.z1),c.slab("ceil",Ce.x0,Ce.h,Ce.z0,Ce.x1,Ce.h+.2,Ce.z1),c.slab("wall",Ce.x0-.3,0,Ce.z0,Ce.x0,Ce.h,Ce.z1),c.slab("wall",Ce.x1,0,Ce.z0,Ce.x1+.3,Ce.h,Ce.z1),c.slab("wall",Ce.x0-.3,0,Ce.z1,Ce.x1+.3,Ce.h,Ce.z1+.3);for(const v of[1.3,2.8,4.3,5.8])c.box("steelDark",Ce.x0+.07,Ce.h/2,v,.14,Ce.h,.18),c.box("steelDark",Ce.x1-.07,Ce.h/2,v,.14,Ce.h,.18),c.box("steelDark",0,Ce.h-.07,v,3,.14,.18),c.box("orange",Ce.x0+.07,1,v,.146,.09,.186),c.box("orange",Ce.x1-.07,1,v,.146,.09,.186);for(const v of[2.05,3.55,5.05])c.box("white",Ce.x0+.04,1.55,v,.08,1.2,1.2);c.slab("wallDark",Ce.x0,0,Ce.z0,Ce.x0+.05,.8,Ce.z1),c.slab("wallDark",Ce.x1-.05,0,Ce.z0,Ce.x1,.8,Ce.z1),c.pipe("copper",[-1.1,2.36,Ce.z0],[-1.1,2.36,Ce.z1],.04),c.pipe("copper",[-.94,2.38,Ce.z0],[-.94,2.38,Ce.z1],.03),c.pipe("steel",[1.12,2.33,Ce.z0],[1.12,2.33,Ce.z1],.075);for(const v of[1.9,3.4,4.9])sn(c,"steelDark",1.12,2.33,v,.085,.022,0,0,14);c.pipe("steel",[Ce.x0+.12,1.15,.9],[Ce.x0+.12,1.15,5.9],.022),c.pipe("yellow",[-.7,2.44,.6],[.7,2.44,.6],.022);const g=Ce.z1;sn(c,"orange",0,1.2,g-.02,.86,.11,0,0,40),Rt(c,"steel",0,1.2,g-.03,.8,.8,.1,40,wt),sn(c,"bronze",0,1.62,g-.09,.17,.035,0,0,24),Rt(c,"rubber",0,1.62,g-.085,.16,.16,.02,24,wt),sn(c,"red",0,1.08,g-.2,.24,.025,0,0,28);for(let v=0;v<3;v++){const b=wt+v*2.0944;c.pipe("red",[0,1.08,g-.2],[Math.cos(b)*.24,1.08+Math.sin(b)*.24,g-.2],.016,{seg:8}),c.box("steelDark",Math.cos(b+1.05)*.86,1.2+Math.sin(b+1.05)*.86,g-.1,.16,.26,.14,{rz:b+1.05-wt})}Rt(c,"steelDark",0,1.08,g-.13,.05,.05,.16,12,wt),c.box("steelDark",0,2.3,g-.06,.7,.12,.1),c.box("glowCool",0,2.3,g-.115,.6,.05,.02),c.pipe("steel",[1.32,2.2,1.6],[1.32,2.2,4.2],.025);for(const v of[2.3,3.5]){const b=(M,A,T,x,y,E,C=0,P=1)=>c.add(M,new so(y,E,6,14),c.mtx(A,T,x,C,0,0,P,1,1));b("white",1.26,1.42,v,.26,.3,0,.7),c.box("steelDark",1.38,1.45,v,.16,.66,.46),c.box("teal",1.085,1.5,v,.03,.18,.24);for(const M of[-1,1])b("white",1.26,.62,v+M*.14,.105,.72),c.box("rubber",1.22,.07,v+M*.14,.32,.14,.2),sn(c,"teal",1.26,.2,v+M*.14,.11,.018,wt,0,14),b("white",1.26,1.34,v+M*.36,.085,.6,M*.1),ei(c,"steelDark",1.26,.96,v+M*.39,.09,1,1.1,1,10),sn(c,"teal",1.26,1.06,v+M*.385,.088,.016,wt,0,14);sn(c,"bronze",1.26,1.8,v,.17,.03,wt,0,20);for(const M of[-1,1])ei(c,"white",1.26,1.66,v+M*.3,.13,.9,.8,1,12),sn(c,"orange",1.26,1.5,v+M*.365,.09,.014,wt,0,14),sn(c,"orange",1.26,.72,v+M*.14,.108,.014,wt,0,14);c.box("orange",1.07,1.3,v,.02,.05,.3),ei(c,"white",1.26,1.98,v,.21),ei(c,"bronze",1.2,1.98,v,.19,1,.8,.85),c.box("steelDark",1.2,1.2,v,.3,.07,.5),c.box("orange",1.1,1.2,v-.2,.08,.12,.1),c.box("white",1.1,1.2,v+.18,.08,.12,.12),c.cable("rubber",[[1.4,1.7,v-.12],[1.32,1.86,v-.16],[1.24,1.84,v-.12]],.018),c.cable("rubber",[[1.4,1.7,v+.12],[1.32,1.86,v+.16],[1.24,1.84,v+.12]],.018);for(const M of[-1,1])ei(c,"steelDark",1.2,.55,v+M*.14,.085,.6,1,1,10),sn(c,"bronze",1.26,1,v+M*.385,.09,.012,wt,0,14);c.pipe("steel",[1.3,2.2,v],[1.3,2.12,v],.012,{seg:6})}At(c,"decal",l.skaf,Ce.x1-.06,2.32,2.9,"-x",1.1),c.box("steelDark",1.08,1.3,Ce.z0+.05,.56,.5,.1),At(c,"screens",u.airlock,1.08,1.36,Ce.z0+.105,"+z",.44,.275),c.box("glowRed",.92,1.12,Ce.z0+.105,.05,.03,.02),c.box("glowCool",1.02,1.12,Ce.z0+.105,.05,.03,.02),Rt(c,"steelDark",0,2.3,Ce.z0+.1,.08,.09,.06,14),Rt(c,"glowRed",0,2.24,Ce.z0+.1,.06,.05,.08,14),c.box("steelDark",0,Ce.h-.04,3.4,.3,.07,1.3),c.box("glowCool",0,Ce.h-.08,3.4,.18,.02,1.1),c.box("yellow",-1.3/2-.07,1.05,Ce.z0+.03,.14,2.1,.08),c.box("yellow",Gt.w/2+.07,1.05,Ce.z0+.03,.14,2.1,.08),c.box("yellow",0,Gt.y1+.07,Ce.z0+.03,Gt.w+.28,.14,.08),c.box("steelDark",0,Gt.y0/2,.2,Gt.w,Gt.y0,.4),At(c,"decal",l.shluz,Ce.x0+.085,1.55,3.55,"+x",1.25),At(c,"decal",l.hazard,0,.004,Ce.z0+.45,"+y",1.5,.28),At(c,"decal",l.hazard,0,.004,Ce.z1-.5,"+y",1.8,.3),c.slab("steelDark",-.42,0,Ce.z0+.7,.42,.012,Ce.z1-.8);for(let v=Ce.z0+.9;v<Ce.z1-.9;v+=.3)c.slab("steel",-.4,.012,v,.4,.02,v+.04);for(let v=0;v<3;v++)Rt(c,v===1?"white":"yellow",1.36,.5,5+v*.2,.075,.075,.62,14),ei(c,v===1?"white":"yellow",1.36,.81,5+v*.2,.075,1,.7,1,10),Rt(c,"bronze",1.36,.88,5+v*.2,.02,.025,.07,8);c.box("steelDark",1.37,.42,5.2,.05,.05,.7),c.box("steelDark",1.37,.66,5.2,.05,.05,.7),c.box("steelDark",-1.26,.62,5.72,.46,1.24,.6),c.box("teal",-1.02,.62,5.72,.02,1.1,.5),c.box("steel",-1.01,.7,5.5,.02,.12,.03),c.box("orange",-1.22,1.33,5.72,.32,.18,.44,{ry:.1}),sn(c,"rubber",Ce.x0+.1,1.05,1,.2,.05,0,wt,22),sn(c,"rubber",Ce.x0+.16,1.05,1,.17,.045,0,wt,22),Rt(c,"steelDark",Ce.x0+.1,1.05,1,.07,.07,.22,12,0,wt),c.cable("rubber",[[Ce.x0+.13,.86,1],[Ce.x0+.22,.4,1.15],[Ce.x0+.4,.03,1.5],[Ce.x0+.5,.03,2.1]],.02),c.box("steel",.75,Ce.h-.06,4.9,.7,.1,.7);for(let v=0;v<5;v++)c.box("steelDark",.75,Ce.h-.115,4.62+v*.14,.6,.012,.05);c.box("white",-.9,.012,2.4,.21,.004,.297,{ry:.7}),c.box("white",.55,.012,4.6,.21,.004,.297,{ry:-.4}),c.box("orange",.95,.11,5.75,.5,.22,.32,{ry:.25});{const v=c.build(o.airlock);v.userData.room="airlock",f.add(v)}e.add({kind:"spot",pos:[0,Ce.h-.12,3.4],to:[.1,0,3.3],color:13623551,power:9,dist:9,angle:1.05,penumbra:.9,prio:3,reach:12,flicker:v=>Math.sin(v*31)*Math.sin(v*7.3)>.82?.25:1}),e.add({kind:"point",pos:[0,2.15,Ce.z0+.35],color:16720914,power:9,dist:7,prio:3,reach:11,flicker:v=>.25+.75*Math.pow(.5+.5*Math.sin(v*3.1),3)}),e.add({kind:"point",pos:[.9,1.35,Ce.z0+.5],color:6742224,power:1,dist:3,reach:10}),e.add({kind:"point",pos:[0,2.25,Ce.z1-.45],color:10471679,power:2.6,dist:5,reach:11,prio:2}),m.push([0,1.3,Ce.z1,2.1],[Ce.x0,.9,4.9,1.5],[Ce.x1,2.2,5.3,1]),p.shafts.push({pos:[0,Ce.h-.12,3.4],to:[.1,0,3.3],r0:.25,r1:1.7,color:12572415,power:.07}),p.dust.push({box:[Ce.x0,.1,Ce.z0,Ce.x1,Ce.h,Ce.z1],n:500,color:13623551,power:.55}),p.steam.push({pos:[-1.1,2.3,2.05],dir:[.35,-1,.1],len:1.5,n:40,size:.5,color:13621478,power:.35})}{const c=new Vr,g=Gt.w,v=Gt.y1-Gt.y0;c.box("yellow",g/2,Gt.y0+v/2,0,g-.03,v-.02,.09),c.box("white",g/2,Gt.y0+v/2,.05,g-.3,v-.34,.03),c.box("white",g/2,Gt.y0+v/2,-.05,g-.3,v-.34,.03);for(const y of[1,-1]){if(y<0){sn(c,"red",g/2,1.12,y*.17,.2,.024,0,0,28);for(let E=0;E<3;E++){const C=wt+E*2.0944;c.pipe("red",[g/2,1.12,y*.17],[g/2+Math.cos(C)*.2,1.12+Math.sin(C)*.2,y*.17],.015,{seg:8})}}Rt(c,"steel",g/2,1.12,y*.11,.045,.045,.14,12,wt),At(c,"decal",l.hazard,g/2,.42,y*.068,y>0?"+z":"-z",g-.34,.16)}Rt(c,"steelDark",.02,.5,0,.035,.035,.24,10),Rt(c,"steelDark",.02,1.6,0,.035,.035,.24,10);const b=c.build(o.airlock),M=new zt;M.add(b),Sn(M,-g/2,0,.02);const A=M.quaternion.clone(),T=new jt,x=new Y(0,1,0);d.hatch={group:M,set(y){M.quaternion.copy(A).multiply(T.setFromAxisAngle(x,y*1.95))}},d.hatch.set(1),M.userData.room="hatch",f.add(M)}{const c=new Vr;c.slab("floor",ge.x0,-.2,ge.z0,ge.x1,0,ge.z1),c.slab("ceil",ge.x0,ge.h,ge.z0,ge.x1,ge.h+.2,ge.z1),c.wall("wall","x",ge.x0-.2,ge.z0,ge.z1,0,ge.h,.4,[{a0:Te.z0,a1:Te.z1,y0:Te.y0,y1:Te.y1}]),c.wall("wall","x",ge.x1+.2,ge.z0,ge.z1,0,ge.h,.4,[{a0:lt.z0,a1:lt.z1,y0:0,y1:lt.h}]),c.slab("wallDark",ge.x0,0,ge.z0-.4,ge.x1,ge.h,ge.z0),c.wall("wallDark","z",.2,ge.x0,ge.x1,0,ge.h,.4,[{a0:-1.3/2,a1:Gt.w/2,y0:Gt.y0,y1:Gt.y1}]),c.box("yellow",-1.3/2-.07,1.05,-.03,.14,2.1,.08),c.box("yellow",Gt.w/2+.07,1.05,-.03,.14,2.1,.08),c.box("yellow",0,Gt.y1+.07,-.03,Gt.w+.28,.14,.08),c.slab("wallDark",ge.x0,0,ge.z0,ge.x0+.05,.78,ge.z1),c.slab("steel",ge.x0,.78,ge.z0,ge.x0+.07,.83,ge.z1);for(const[x,y]of[[ge.z0,lt.z0-.15],[lt.z1+.15,ge.z1]])c.slab("wallDark",ge.x1-.05,0,x,ge.x1,.78,y),c.slab("steel",ge.x1-.07,.78,x,ge.x1,.83,y);for(let x=-2;x>ge.z0;x-=4)x>Te.z0&&x<Te.z1||(c.box("steelDark",ge.x0+.1,ge.h/2,x,.2,ge.h,.3),c.box("orange",ge.x0+.105,1.08,x,.22,.14,.32)),c.box("steelDark",ge.x1-.1,ge.h/2,x,.2,ge.h,.3),c.box("orange",ge.x1-.105,1.08,x,.22,.14,.32),c.box("steelDark",0,ge.h-.11,x,4,.22,.3),c.box("steelDark",-1.55,ge.h-.35,x,.5,.08,.26,{rz:.785}),c.box("steelDark",1.55,ge.h-.35,x,.5,.08,.26,{rz:-.785});for(const x of[-1,1]){const y=x*2,E=P=>x>0&&P>lt.z0-.3&&P<lt.z1+.3,C=P=>x<0&&P>Te.z0-.2&&P<Te.z1+.2;for(let P=-2;P>qt+1;P-=4){const I=P-.2,q=P-3.8,L=P-2;!E(L)&&!E(L-1)&&!E(L+1)&&c.box("steelDark",y-x*.035,.11,L,.07,.22,I-q,{bevel:.012}),C(L)||c.box("steelDark",y-x*.03,2.27,L,.06,.07,I-q,{bevel:.012});for(const H of[-1,1]){const X=L+H;if(!(E(X)||C(X))){c.box("steel",y-x*.012,1.74,X,.024,.98,.07,{bevel:.006});for(const Z of[1.34,1.74,2.14])Rt(c,"steelDark",y-x*.028,Z,X,.011,.011,.012,6,0,wt)}}if(!(x<0&&L<-21&&L>-30||x>0&&(L<-7&&L>-11||L<-18&&L>-27))&&!C(L)){const H=L+(x>0?.9:-.9);c.box("steelDark",y-x*.018,.58,H,.036,.4,.62,{bevel:.01}),c.box("steel",y-x*.04,.58,H,.012,.3,.5,{bevel:.006});for(const X of[-.16,.16])for(const Z of[-.27,.27])Rt(c,"steel",y-x*.04,.58+X,H+Z,.012,.012,.014,6,0,wt)}}}c.pipe("steel",[1.56,2.68,ge.z0],[1.56,2.68,ge.z1],.09),c.pipe("copper",[1.3,2.74,ge.z0],[1.3,2.74,ge.z1],.05),c.pipe("white",[-1.56,2.68,ge.z0],[-1.56,2.68,ge.z1],.07),c.pipe("orange",[-1.32,2.76,ge.z0],[-1.32,2.76,ge.z1],.04),c.slab("steelDark",.7,2.8,ge.z0,1.1,2.83,ge.z1);for(const x of[.78,.9,1.02])c.pipe("rubber",[x,2.85,ge.z0],[x,2.85,ge.z1],.022,{seg:6});for(let x=-4;x>ge.z0;x-=8)for(const y of[1.56,-1.56])sn(c,"steelDark",y,2.68,x+1.7,.105,.025,0,0,14);const g={"-4":1,"-12":1,"-20":2,"-28":1};for(let x=-4;x>ge.z0;x-=4){c.box("steelDark",0,ge.h-.045,x,.34,.09,1.5);const y=g[x];c.box(y?"lamp":"rubber",0,ge.h-.1,x,.22,.02,1.3),y&&(e.add({kind:"spot",pos:[0,ge.h-.14,x],to:[0,0,x-.05],color:12375807,power:10,dist:11,angle:1.1,penumbra:.9,prio:2,reach:20,mood:{amber:{color:16760454,power:12}},flicker:y===2?E=>Math.sin(E*23)*Math.sin(E*5.1)>.3?.15:1:null}),p.shafts.push({pos:[0,ge.h-.14,x],to:[0,0,x-.05],r0:.3,r1:2,color:12375807,power:.14,moodColor:{amber:16754776}}))}for(let x=-2;x>qt;x-=4){for(const y of[ge.x0+.06,ge.x1-.06])c.box("emerg",y,.3,x-2,.03,.05,.4);(x+2)%8===0&&e.add({kind:"point",pos:[(x%16===-2?-1:1)*1.7,.35,x-2],color:16722458,power:2.2,dist:6,reach:18,mood:{amber:{color:16747050,power:3.2}}})}c.pipe("steel",[ge.x1-.12,1.05,-.6],[ge.x1-.12,1.05,lt.z1+.4],.024),c.pipe("steel",[ge.x1-.12,1.05,lt.z0-.4],[ge.x1-.12,1.05,qt+1.2],.024);const v=(Te.z0+Te.z1)/2,b=Te.z1-Te.z0;c.box("steel",ge.x0+.04,Te.y1+.09,v,.12,.18,b+.36),c.box("steelDark",ge.x0+.08,Te.y0-.07,v,.2,.14,b+.36),c.box("steel",ge.x0+.04,(Te.y0+Te.y1)/2,Te.z0-.09,.12,Te.y1-Te.y0,.18),c.box("steel",ge.x0+.04,(Te.y0+Te.y1)/2,Te.z1+.09,.12,Te.y1-Te.y0,.18);for(const x of[Te.z0+b/3,Te.z0+2*b/3])c.box("steelDark",ge.x0-.14,(Te.y0+Te.y1)/2,x,.16,Te.y1-Te.y0,.08);c.slab("steelDark",ge.x0-.4,Te.y0-.02,Te.z0,ge.x0,Te.y0,Te.z1),c.slab("steelDark",ge.x0-.4,Te.y1,Te.z0,ge.x0,Te.y1+.02,Te.z1),c.box("orange",ge.x1-.03,lt.h/2,lt.z0-.08,.1,lt.h,.16),c.box("orange",ge.x1-.03,lt.h/2,lt.z1+.08,.1,lt.h,.16),c.box("orange",ge.x1-.03,lt.h+.08,(lt.z0+lt.z1)/2,.1,.16,lt.z1-lt.z0+.32),c.pipe("steelDark",[ge.x1-.06,Qe.socket.y+.22,Qe.socket.z],[ge.x1-.06,lt.h+.2,Qe.socket.z],.03,{seg:8}),c.pipe("steelDark",[ge.x1-.06,lt.h+.2,Qe.socket.z],[ge.x1-.06,lt.h+.2,lt.z1+.1],.03,{seg:8});{const x=Qe.cabinet,y=ge.x1,E=Qe.socket;c.box("yellow",y-.072,x.y+.68,x.z,.014,.21,.68,{bevel:0}),At(c,"decal",l.batt,y-.081,x.y+.68,x.z,"-x",.64),e.add({kind:"point",pos:[y-.55,x.y+.85,x.z],color:16769712,power:3,dist:3.6,reach:20,prio:3,wakeKeep:.6});const C=.34,P=y-.045;c.cable("orange",[[P,E.y-.27,E.z],[P,C+.08,E.z],[P,C,E.z+.12],[P,C,(E.z+x.z)/2],[P,C,x.z-.5],[P,C+.04,x.z-.3],[P-.1,x.y-.46,x.z-.2]],.026,{seg:8,tension:.2});for(let I=E.z+.45;I<x.z-.5;I+=.62)c.box("steel",P-.005,C,I,.07,.09,.05);At(c,"decal",l.socketlbl,y-.004,E.y+.3,E.z+1,"-x",.86)}c.slab("steelDark",ge.x1,lt.h,lt.z0,ge.x1+.4,lt.h+.02,lt.z1),At(c,"decal",l.masterskaya,ge.x1-.004,2.68,-24,"-x",1.7),At(c,"decal",l.veresk,ge.x1-.054,1.9,-5.8,"-x",3.3),At(c,"decal",l.kolco,ge.x0+.004,2.5,-7.8,"+x",2.6),At(c,"decal",l.hazard,1.55,.004,-24,"+y",.6,1.9),c.box("steelDark",1.62,.72,-9.5,.5,.24,.5,{ry:.5});const M=[[-22.5,"clothBlue","cloth"],[-25.5,"cloth","clothWarm"],[-28.5,"clothWarm","clothBlue"]];for(const[x,y,E]of M)c.box(y,-1.52,.07,x,.82,.14,1.9,{ry:(t()-.5)*.08}),c.add(E,Pf(.95,1.5,t),c.mtx(-1.42+t()*.08,.15,x+.12,0,(t()-.5)*.35,0)),c.add(y,Pf(.5,.6,t,.05),c.mtx(-1.2,.19,x-.55,0,t()*.9,0)),c.box("white",-1.55,.2,x+.78,.5,.12,.3,{ry:t()*.4-.2,rz:.08});c.box("orange",-1.6,.24,-24,.5,.48,.5,{ry:.2}),Rt(c,"white",-1.55,.53,-24.05,.04,.035,.09,12),Rt(c,"steel",-1.72,.54,-23.9,.035,.035,.11,10),Rt(c,"steelDark",-1.45,.56,-23.85,.05,.06,.04,10),Rt(c,"glowWarm",-1.45,.64,-23.85,.04,.04,.12,10),Rt(c,"steelDark",-1.45,.72,-23.85,.055,.05,.03,10),c.box("white",-1.6,.2,-27,.46,.4,.46,{ry:-.3});for(let x=0;x<4;x++)c.box(["red","teal","clothWarm","white"][x],-1.6+(t()-.5)*.1,.42+x*.035,-27,.22,.03,.3,{ry:t()*1.2});c.box("rubber",-1,.09,-23.3,.13,.18,.3,{ry:.5}),c.box("rubber",-.92,.06,-23.65,.13,.12,.3,{ry:1.4,rz:1.3});for(let x=0;x<6;x++)Rt(c,"steel",-.95-t()*.6,.05,-26.2-t()*3.4,.04,.04,.1,10,t()<.5?wt:0,0,t()*3);c.box("clothWarm",-1.9,1.25,-21.6,.1,.7,.5,{rz:.06}),c.box("clothWarm",-1.86,.95,-21.6,.14,.3,.56),c.pipe("steel",[ge.x0+.03,1.65,-21.6],[ge.x0+.14,1.65,-21.6],.012,{seg:6}),Rt(c,"steelDark",-.9,.42,-25.4,.17,.17,.04,14);for(let x=0;x<3;x++){const y=x*2.0944;c.pipe("steel",[-.9,.42,-25.4],[-.9+Math.cos(y)*.2,0,-25.4+Math.sin(y)*.2],.012,{seg:6})}At(c,"decal",l.tally,ge.x0+.004,1.42,-25.4,"+x",1.25),At(c,"decal",l.photos,ge.x0+.004,1.2,-22.7,"+x",.62),At(c,"decal",l.nespat,ge.x0+.004,1.75,-28.4,"+x",1.5),At(c,"decal",l.smena,ge.x0+.004,.98,-28.2,"+x",.8);const A=["teal","white","steelDark","white","teal","steelDark"];for(let x=0;x<6;x++){const y=-1.67+x*.668;c.box(A[x],y,.96+t()*.02,qt-.25,.65,1.92,.5,{rz:(t()-.5)*.05,ry:(t()-.5)*.08}),c.box("steelDark",y,1.5,qt+.012,.3,.16,.02)}c.box("steelDark",0,2.3,qt-.2,4,.7,.06,{rx:.04}),c.box("white",-.9,2.82,qt-.25,1.9,.3,.5,{rz:.03}),c.box("orange",1.1,2.8,qt-.25,1.7,.34,.5,{rz:-.04}),c.box("steel",.1,1.28,qt+.05,3.9,.5,.03,{rz:.13}),c.box("steel",-.1,.55,qt+.055,3.9,.42,.03,{rz:-.17}),c.box("steelDark",-.95,1.5,qt+.1,.14,3,.14),c.box("steelDark",.95,1.5,qt+.1,.14,3,.14),c.box("steelDark",0,2.05,qt+.1,4,.12,.1),c.box("weld",.1,1.535,qt+.068,3.9,.022,.012,{rz:.13}),c.box("weld",.1,1.025,qt+.068,3.9,.022,.012,{rz:.13}),c.box("weld",-.1,.765,qt+.072,3.9,.022,.012,{rz:-.17}),c.box("weld",-.1,.335,qt+.072,3.9,.022,.012,{rz:-.17});for(const x of[-.95,.95])for(const y of[.4,1.2,2.05])At(c,"decal",l.scorch,x,y,qt+.18,"+z",.6,.6);for(const x of[-1.98,1.98])At(c,"decal",l.scorch,x*.99,1.3,qt+.3,x<0?"+x":"-x",.9,1.4);At(c,"decal",l.nikogo,.1,1.72,qt+.19,"+z",2.3),Rt(c,"red",1.55,.62,-34.7,.11,.11,1.2,16),ei(c,"red",1.55,1.22,-34.7,.11,1,.8,1,12),Rt(c,"teal",1.28,.62,-34.75,.11,.11,1.2,16),ei(c,"teal",1.28,1.22,-34.75,.11,1,.8,1,12),Rt(c,"bronze",1.55,1.34,-34.7,.025,.03,.1,8),Rt(c,"bronze",1.28,1.34,-34.75,.025,.03,.1,8),c.box("yellow",1.1,.2,-34.2,.5,.4,.36,{ry:.3}),c.cable("rubber",[[1.55,1.3,-34.7],[1.3,.5,-34.3],[.7,.03,-34.5],[.1,.03,-35],[-.4,.03,-35.5]],.014),c.cable("red",[[1.28,1.3,-34.75],[1,.4,-34.6],[.5,.03,-34.9],[-.2,.03,-35.2],[-.42,.04,-35.52]],.012),ei(c,"steelDark",-.9,.1,-34.7,.16,1,.9,.8,12),c.box("yellow",-.5,.12,-34.25,.3,.2,.14,{ry:.5,rx:.5}),c.box("glowCool",-.52,.16,-34.33,.24,.14,.02,{ry:.5,rx:.5});for(const x of[-1,1]){const y=x*2,E=x<0?[[ge.z0,ge.z1]]:[[ge.z0,ge.z1]];for(const[C,P]of E)c.slab("steelDark",y-x*.1,2.3,C,y-x*0,2.42,P);c.slab("steelDark",y-x*.34,0,ge.z0,y-x*.08,.014,ge.z1);for(let C=-.3;C>qt;C-=.22)c.slab("steel",y-x*.32,.014,C-.03,y-x*.1,.022,C)}let T=0;for(let x=-4;x>qt+2;x-=4,T++){for(const y of[-1,1]){if(y<0&&x>Te.z0-1&&x<Te.z1+1||y>0&&x>lt.z0-1.5&&x<Qe.cabinet.z+1.5||y<0&&x<-21&&x>-30)continue;const E=y*2,C=rd(T,y,i);if(c.pipe("steel",[E-y*.05,.83,x+1.7],[E-y*.05,2.3,x+1.7],.022,{seg:8}),c.pipe("copper",[E-y*.05,.83,x+1.62],[E-y*.05,2.3,x+1.62],.014,{seg:8}),C===0){c.box("steelDark",E-y*.08,1.55,x,.16,.9,.6),c.box("steel",E-y*.165,1.55,x,.012,.8,.5),c.box("yellow",E-y*.175,1.86,x,.006,.1,.34);for(let P=0;P<3;P++)c.box(P===1?"glowRed":"glowWarm",E-y*.175,1.3,x-.12+P*.12,.008,.025,.04);c.pipe("steelDark",[E-y*.08,2,x],[E-y*.08,2.3,x],.03,{seg:8})}else if(C===1){c.box("steelDark",E-y*.03,1.9,x,.06,.5,.9);for(let P=0;P<6;P++)c.box("steel",E-y*.065,1.71+P*.075,x,.02,.03,.8,{rz:y*.5})}else if(C===2)Rt(c,"red",E-y*.13,1.25,x-.2,.07,.07,.42,14),ei(c,"red",E-y*.13,1.46,x-.2,.07,1,.6,1,10),Rt(c,"steelDark",E-y*.13,1.52,x-.2,.02,.025,.07,8),c.box("white",E-y*.07,1.5,x+.25,.14,.3,.36),c.box("red",E-y*.143,1.5,x+.25,.006,.16,.05),c.box("red",E-y*.143,1.5,x+.25,.006,.05,.16);else if(C===3){c.box("steelDark",E-y*.04,1.4,x,.08,.6,.7);for(let P=0;P<2;P++)sn(c,"red",E-y*.14,1.4,x-.16+P*.32,.07,.014,0,wt,16),Rt(c,"steel",E-y*.09,1.4,x-.16+P*.32,.018,.018,.1,8,0,wt);c.pipe("copper",[E-y*.09,1.4,x-.34],[E-y*.09,1.4,x+.34],.025,{seg:8})}else{c.box("steelDark",E-y*.02,1.6,x,.04,.7,1);for(let P=0;P<4;P++)c.box(P%2?"white":"yellow",E-y*.045,1.5+P%2*.24,x-.33+P*.2,.004,.2+P%3*.03,.15,{rx:(P-1.5)*.06})}}T%2===1&&(c.box("steel",0,2.62,x+2,3,.24,.42),c.box("steelDark",0,2.62,x+2,3.04,.05,.46),c.cable("rubber",[[-1.2,2.5,x+1.6],[-.6,2.2,x+1.2],[.1,2.12-T%3*.08,x+.6],[.7,2.3,x+.1],[1,2.78,x-.3]],.016))}for(const x of[-1,1]){const y=x*2,E=x<0?[[ge.z0+4.6,Te.z0-.5],[Te.z1+.5,-.4]]:[[ge.z0+4.6,lt.z0-.5],[lt.z1+.5,-.4]];for(const[C,P]of E){c.pipe("rubber",[y-x*.035,2.12,C],[y-x*.035,2.12,P],.026,{seg:8}),c.pipe("orange",[y-x*.03,2.06,C],[y-x*.03,2.06,P],.016,{seg:8}),c.pipe("rubber",[y-x*.03,2.02,C],[y-x*.03,2.02,P],.012,{seg:6});for(let I=P-.8;I>C;I-=1.6)c.box("steel",y-x*.04,2.07,I,.075,.16,.04,{bevel:0})}}for(let x=0,y=-3.9;y>qt+3;y-=4,x++)!(y>Te.z0-1.2&&y<Te.z1+1.2)&&!(y<-20.5&&y>-30.5)&&At(c,"decal",l["sec"+x%4],ge.x0+.056,.52,y-.9,"+x",.62),y>lt.z0-2.5&&y<Qe.cabinet.z+.5||At(c,"decal",l["sec"+(x+2)%4],ge.x1-.056,.52,y+.9,"-x",.62);for(const x of[-6.5,-18.5,-31]){c.box("steel",0,.008,x,.9,.016,.9);for(const[y,E]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])c.box("yellow",y,.018,x+E,.1,.006,.1);c.box("steelDark",0,.02,x,.24,.012,.06)}for(let x=0;x<16;x++)c.box("white",(t()-.5)*3,.006,-3-t()*31,.21,.003,.297,{ry:t()*3});c.box("steelDark",1.35,.5,-17.2,.6,.04,.95),c.box("steelDark",1.35,.14,-17.2,.6,.04,.95);for(const[x,y]of[[-.27,-.44],[.27,-.44],[-.27,.44],[.27,.44]])c.pipe("steel",[1.35+x,.06,-17.2+y],[1.35+x,.85,-17.2+y],.016,{seg:6}),Rt(c,"rubber",1.35+x,.05,-17.2+y,.05,.05,.03,10,0,wt);{const x=c.build(o.corridor);x.userData.room="corridor",f.add(x)}e.add({kind:"spot",pos:[-10.5,6.2,v+7.6],to:[1.2,.2,v-1.5],color:16773336,power:4.5,dist:40,decay:0,angle:.36,penumbra:.2,prio:4,reach:22}),p.sun={pos:[-10.5,6.2,v+7.6],to:[1.2,.2,v-1.5]},p.dust.push({box:[ge.x0,.05,Te.z0-2.5,ge.x1,2.4,Te.z1-.5],n:1300,color:16773336,power:1.5,sun:!0}),p.dust.push({box:[ge.x0,.2,-30,ge.x1,ge.h,-1],n:900,color:12374256,power:.4}),e.add({kind:"point",pos:[-1.45,.78,-23.85],color:16752704,power:3.4,dist:6.5,reach:18,prio:3,wakeKeep:.5,flicker:x=>.9+.1*Math.sin(x*7.3)*Math.sin(x*2.9)}),e.add({kind:"point",pos:[-.5,.35,-34.3],color:13623551,power:3.2,dist:7,reach:18,prio:2,flicker:x=>.8+.2*Math.sin(x*13)*Math.sin(x*3.7)}),m.push([.3,1.6,qt,3.2],[ge.x0-.2,2.2,Te.z0,1.25],[1.6,ge.h,-18.5,1.5],[ge.x1,.1,-26.6,1.3]),p.steam.push({pos:[-1.56,2.6,-31.5],dir:[.5,-1,.2],len:1.8,n:40,size:.6,color:13161184,power:.3})}{const c=new Vr,g=ts.x,v=ts.z;c.slab("floor",se.x0-.4,-.2,se.z0,se.x1,0,se.z1),c.slab("ceil",se.x0-.4,se.h,se.z0,se.x1,se.h+.2,se.z1),c.wall("wall","x",se.x1+.2,se.z0-.4,se.z1+.4,0,se.h,.4,[{a0:ot.z0,a1:ot.z1,y0:0,y1:ot.h}]);for(const y of[ot.z0-.1,ot.z1+.1])c.box("steelDark",se.x1-.04,ot.h/2,y,.14,ot.h,.2);c.box("steelDark",se.x1-.04,ot.h+.1,(ot.z0+ot.z1)/2,.14,.2,ot.z1-ot.z0+.4),c.slab("wall",se.x0-.4,0,se.z0-.4,se.x1,se.h,se.z0),c.slab("wall",se.x0-.4,0,se.z1,se.x1,se.h,se.z1+.4),c.slab("wall",se.x0-.4,ge.h,se.z0,se.x0,se.h,se.z1),c.wall("wallDark","x",se.x0-.03,se.z0,se.z1,0,ge.h,.06,[{a0:lt.z0,a1:lt.z1,y0:0,y1:lt.h}]),c.slab("wallDark",se.x1-.05,0,se.z0,se.x1,1.2,ot.z0-.2),c.slab("wallDark",se.x1-.05,0,ot.z1+.2,se.x1,1.2,se.z1),c.slab("wallDark",se.x0,0,se.z0,se.x1,1.2,se.z0+.05),c.slab("wallDark",se.x0,0,se.z1-.05,se.x1,1.2,se.z1);for(const[y,E,C,P,I]of[["z",se.x0+.3,se.x1-.3,se.z0,1],["z",se.x0+.3,se.x1-.3,se.z1,-1],["x",se.z0+.3,se.z1-.3,se.x1,-1]]){const q=(E+C)/2,L=C-E;for(const[O,H,X]of[[1.23,.09,.06],[3,.06,.1]])y==="z"?c.box("steelDark",q,O,P+I*H/2,L,X,H,{bevel:.012}):(c.box("steelDark",P+I*H/2,O,(se.z0+.3+ot.z0-.4)/2,H,X,ot.z0-.4-se.z0-.3,{bevel:.012}),c.box("steelDark",P+I*H/2,O,(ot.z1+.4+se.z1-.3)/2,H,X,se.z1-.3-ot.z1-.4,{bevel:.012}));for(let O=E+1.17;O<C-.5;O+=1.165)y==="x"&&O>ot.z0-.5&&O<ot.z1+.5||(y==="z"?c.box("steel",O,2.12,P+I*.012,.07,1.66,.024,{bevel:.006}):c.box("steel",P+I*.012,2.12,O,.024,1.66,.07,{bevel:.006}))}for(const y of[se.x0+.12,7.07,11.73,se.x1-.12])for(const E of[se.z0+.12,se.z1-.12])c.box("steelDark",y,se.h/2,E,.24,se.h,.24);for(const y of[-19.6,-24,-28.4]){c.box("steelDark",(se.x0+se.x1)/2,se.h-.15,y,14,.3,.22),y===-24?c.box("steelDark",se.x1-.12,(se.h+ot.h+.2)/2,y,.24,se.h-ot.h-.2,.24):c.box("steelDark",se.x1-.12,se.h/2,y,.24,se.h,.24);for(let E=se.x0+1;E<se.x1;E+=2)c.box("steelDark",E,se.h-.45,y,.06,.6,.06,{rz:(Math.round(E)%4<2?1:-1)*.6})}c.box("yellow",(se.x0+se.x1)/2,4.85,v,14,.26,.2),c.box("steelDark",g+.3,4.66,v,.6,.2,.44),c.pipe("steel",[g+.3,4.6,v],[g+.3,4.48,v],.02,{seg:8}),sn(c,"steel",g+.3,4.42,v,.06,.018,0,0,12),c.pipe("steel",[se.x0+.4,5.2,se.z0+.5],[se.x1-.2,5.2,se.z0+.5],.1),c.pipe("copper",[se.x0+.4,4.9,se.z0+.35],[se.x1-.2,4.9,se.z0+.35],.05),c.pipe("white",[se.x1-.3,5.1,se.z0+.4],[se.x1-.3,5.1,se.z1-.2],.08);for(const[y,E,C]of[[5.2,-20.8,0],[13.6,-20.8,0],[5.2,-27.2,0],[13.6,-27.2,0]])c.box("steelDark",y,se.h-.4,E,.9,.12,.9),c.box(C?"glowCool":"rubber",y,se.h-.47,E,.7,.02,.7),c.pipe("steelDark",[y,se.h,E],[y,se.h-.36,E],.03,{seg:8});for(let y=0;y<3;y++){const E=wt+y*2.0944,C=g+Math.cos(E)*2.05,P=v+Math.sin(E)*2.05;c.pipe("steelDark",[g+Math.cos(E)*.9,.42,v+Math.sin(E)*.9],[C,.1,P],.065),Rt(c,"steel",C,.04,P,.24,.27,.08,16),c.pipe("yellow",[g+Math.cos(E)*.75,1.3,v+Math.sin(E)*.75],[C-Math.cos(E)*.3,.14,P-Math.sin(E)*.3],.03,{seg:8})}c.add("steelDark",new cn(1.2,1.32,.3,6),c.mtx(g,.15,v,0,.3,0)),Rt(c,"orange",g,.86,v,.72,.74,1.12,28);for(const y of[.42,.86,1.3])sn(c,"steelDark",g,y,v,.745,.04,wt,0,36);for(let y=0;y<12;y++){const E=y*Xr/6;c.box("steelDark",g+Math.cos(E)*.75,.86,v+Math.sin(E)*.75,.04,.8,.07,{ry:-E})}c.add("steel",new cn(.88,.88,.08,8),c.mtx(g,1.46,v,0,.2,0)),Rt(c,"white",g+.07,1.95,v-.04,.5,.5,.9,24),ei(c,"white",g+.07,2.4,v-.04,.5,1,.42,1,24);for(const y of[1.72,2.2])sn(c,"yellow",g+.07,y,v-.04,.512,.022,wt,0,32);Rt(c,"steel",g,3.4,v,.1,.12,1.9,14),[[2.86,.56],[3.22,.43],[3.55,.3]].forEach(([y,E],C)=>{sn(c,"copper",g,y,v,E,.05,wt,0,40);for(let P=0;P<3;P++){const I=P*2.0944+C;c.pipe("steelDark",[g,y,v],[g+Math.cos(I)*E,y,v+Math.sin(I)*E],.014,{seg:6})}});for(let y=0;y<3;y++){const E=wt+Xr/3+y*2.0944;c.pipe("bronze",[g+Math.cos(E)*.86,1.5,v+Math.sin(E)*.86],[g+Math.cos(E)*.8,2.7,v+Math.sin(E)*.8],.035,{seg:10}),c.pipe("bronze",[g+Math.cos(E)*.8,2.7,v+Math.sin(E)*.8],[g+Math.cos(E)*.22,4.3,v+Math.sin(E)*.22],.03,{seg:10}),ei(c,"steel",g+Math.cos(E)*.22,4.33,v+Math.sin(E)*.22,.055,1,1,1,10),ei(c,"steelDark",g+Math.cos(E)*.8,2.7,v+Math.sin(E)*.8,.06,1,1,1,10)}ei(c,"glowBeacon",g,4.48,v,.13,1,1,1,16),sn(c,"steelDark",g,4.48,v,.17,.012,0,0,16),sn(c,"steelDark",g,4.48,v,.17,.012,0,wt,16),c.box("teal",g-.98,1.05,v+.25,.34,.62,.56,{ry:.12}),At(c,"screens",u.scope,g-1.158,1.12,v+.228,"-x",.4,.25),c.box("glowRed",g-1.156,.84,v+.4,.02,.03,.03),c.box("glowWarm",g-1.156,.84,v+.3,.02,.03,.03),c.box("glowWarm",g-1.156,.84,v+.2,.02,.03,.03),c.box("yellow",g+.55,1.75,v+.62,.42,.32,.26,{ry:-.7}),c.box("white",g-.3,2,v+.66,.5,.36,.2,{ry:.25,rz:.06});for(let y=0;y<3;y++)c.box("steelDark",g+1.55+y*.36,.14,v+1.25-y*.12,.3,.28,.2,{ry:.3}),Rt(c,"copper",g+1.5+y*.36,.31,v+1.24-y*.12,.022,.022,.06,8);const b=new y0([0,.1,.2,.3,.4,.5,.56].map(y=>new Le(y,y*y*.7)),28);c.add("white",b,c.mtx(g+1,2.55,v-1,1,-.8,0)),c.pipe("steel",[g+.45,2.3,v-.4],[g+1,2.55,v-1],.03,{seg:8}),c.pipe("steel",[g-.75,0,v-1.75],[g-.42,2.7,v-.62],.022,{seg:8}),c.pipe("steel",[g-.35,0,v-1.9],[g-.02,2.7,v-.77],.022,{seg:8});for(let y=1;y<8;y++){const E=y/8.2;c.pipe("steel",[g-.75+.33*E,2.7*E,v-1.75+1.13*E],[g-.35+.33*E,2.7*E,v-1.9+1.13*E],.014,{seg:6})}c.box("white",g-1.38,.3,v-.55,.03,.46,1.05),At(c,"decal",l.mayak,g-1.4,.3,v-.55,"-x",.9),At(c,"decal",l.order,se.x0+.005,1.3,-21,"+x",1.5);const M=[[se.x0+.12,.45,-19.4,"+x"],[se.x1-.12,.45,-27.2,"-x"],[8.6,.45,se.z0+.12,"+z"]],A=["orange","teal","red"];M.forEach(([y,E,C,P],I)=>{P==="+z"?c.box("yellow",y,E+.2,C,.6,.7,.2):c.box("yellow",y,E+.2,C,.2,.7,.6),c.pipe("steel",[y,E+.55,C],[y,se.h-.4,C],.035,{seg:8}),P==="+z"?At(c,"decal",l.kontur,y+.5,1.5,se.z0+.005,"+z",.66):At(c,"decal",l.kontur,P==="+x"?se.x0+.005:se.x1-.005,1.5,C+(P==="+x"?.5:-.5),P,.66);for(let q=0;q<3;q++){const L=Math.atan2(C-v,y-g)+(q-1)*.5,O=(q-1)*.16,H=g+Math.cos(L)*1,X=v+Math.sin(L)*1,Z=y-H,$=C-X,J=Math.hypot(Z,$),re=-$/J,ye=Z/J,ae=[[g+Math.cos(L)*.72,.62,v+Math.sin(L)*.72],[H+Math.cos(L)*.35,.34,X+Math.sin(L)*.35],[H+Z*.12,.04,X+$*.12]];for(const B of[.3,.5,.7,.88]){const ee=(t()-.5)*1.3+O*3;ae.push([H+Z*B+re*ee,.035+t()*.01,X+$*B+ye*ee])}ae.push([y+(P==="+x"?.3:P==="-x"?-.3:O),.05,C+(P==="+z"?.3:O)],[y+(P==="+z"?O:0),E,C+(P!=="+z"?O:0)]),c.cable(A[I],ae,.028+t()*.018,{seg:7})}}),c.cable("rubber",[[g+.3,4.4,v],[g+.5,3.9,v+.2],[g+.2,3.7,v+.1],[g,3.62,v]],.018),c.cable("orange",[[g+.3,4.4,v],[g-.5,3.6,v-.3],[g-.6,2.7,v-.1],[g-.3,2.3,v+.5]],.016),c.box("steel",6.25,.95,se.z1-.45,2.5,.06,.8);for(const y of[5.1,7.4])for(const E of[se.z1-.12,se.z1-.78])c.box("steelDark",y,.46,E,.06,.92,.06);c.box("steelDark",6.25,.3,se.z1-.45,2.3,.04,.7),c.box("red",5.5,1.08,se.z1-.4,.5,.2,.26,{ry:.2}),c.box("steelDark",6.6,1.2,se.z1-.3,.6,.44,.12,{rx:-.12}),At(c,"screens",u.term,6.6,1.2,se.z1-.368,"-z",.52,.325),c.box("white",7.1,1,se.z1-.5,.3,.04,.22,{ry:.4}),Rt(c,"white",5.95,1.03,se.z1-.62,.04,.035,.09,12);for(const y of[-22.1,-20.5,-18.9])c.box("steelDark",se.x1-.1,1.4,y,.06,2.8,.06),c.box("steelDark",se.x1-.74,1.4,y,.06,2.8,.06);for(const y of[.5,1.4,2.3]){c.box("steel",se.x1-.42,y,-20.5,.7,.04,3.3);for(let E=0;E<4;E++)t()<.8&&c.box(["orange","white","teal","steelDark"][(E+y*10|0)%4],se.x1-.42,y+.02+.2,-21.7+E*.8+t()*.1,.5+t()*.1,.4,.55+t()*.15,{ry:(t()-.5)*.2})}c.box("orange",3.7,.4,-29.9,.9,.8,.9,{ry:.1}),c.box("white",4.4,.3,-29.6,.6,.6,.7,{ry:-.3}),c.box("teal",3.75,1.05,-29.95,.6,.5,.6,{ry:.5});for(const[y,E,C]of[[14.2,-29.8,"teal"],[14.9,-29.7,"teal"],[14.55,-29.25,"orange"]])Rt(c,C,y,.45,E,.29,.29,.9,20),sn(c,"steelDark",y,.3,E,.295,.015,wt,0,20),sn(c,"steelDark",y,.62,E,.295,.015,wt,0,20);const T=[[6.2,-27.4],[12.9,-20.4]];for(const[y,E]of T){for(let P=0;P<3;P++){const I=P*2.0944+.4;c.pipe("steelDark",[y,1.1,E],[y+Math.cos(I)*.42,0,E+Math.sin(I)*.42],.018,{seg:6})}c.pipe("steelDark",[y,1.05,E],[y,1.95,E],.02,{seg:8});const C=Math.atan2(g-y,v-E);c.box("yellow",y,2.02,E,.44,.3,.16,{ry:C,rx:-.15}),c.box("glowWarm",y+Math.sin(C)*.085,2.035,E+Math.cos(C)*.085,.36,.22,.02,{ry:C,rx:-.15}),e.add({kind:"spot",pos:[y+Math.sin(C)*.12,2.03,E+Math.cos(C)*.12],to:[g,2.4,v],color:16757866,power:26,dist:18,angle:.62,penumbra:.5,prio:3,reach:20}),c.cable("rubber",[[y,1.2,E],[y-.2,.3,E+.3],[y-.6,.03,E+.2],[y-1.4*Math.sign(y-g),.03,E+1*Math.sign(v-E)]],.015)}c.box("yellow",10.1,.13,-25.9,.44,.22,.2,{rx:-.5}),c.box("glowWarm",10.1,.17,-26,.36,.16,.02,{rx:-.5}),c.cable("rubber",[[10.1,.1,-25.8],[10.4,.03,-25.2],[10.2,.03,-24.9]],.015),e.add({kind:"spot",pos:[10.1,.2,-26.02],to:[10.1,2.6,-31],color:16757866,power:30,dist:14,angle:.72,penumbra:.6,prio:2.5,reach:20}),At(c,"decal",l.zvuchit,10.2,3,se.z0+.004,"+z",5),At(c,"decal",l.derzhat,se.x1-.004,3.55,(ot.z0+ot.z1)/2,"-x",3.6),c.box("steelDark",Qe.terminal.x+.12,.6,Qe.terminal.z,.2,1.2,.5),c.box("steelDark",Qe.terminal.x+.04,Qe.terminal.y+.05,Qe.terminal.z,.14,.42,.6,{rz:.25}),At(c,"screens",u.term,Qe.terminal.x-.035,Qe.terminal.y+.07,Qe.terminal.z,"-x",.5,.31),At(c,"decal",l.svyaz,se.x1-.005,Qe.terminal.y+.62,Qe.terminal.z,"-x",.78),At(c,"decal",l.schema,11.6,2.5,se.z1-.004,"-z",2.3),At(c,"decal",l.ne,5.2,1.75,se.z0+.004,"+z",2.4),At(c,"decal",l.slyshit,8.6,1.7,se.z1-.054,"-z",1.5),At(c,"decal",l.tally,13.6,1.9,se.z0+.004,"+z",1.3);{const y=c.build(o.bay);y.userData.room="bay",f.add(y)}const x=y=>{const E=y*.5%1;let C=.3;for(let P=0;P<3;P++){const I=E-P*.12;I>0&&I<.1&&(C+=Math.exp(-I*40)*1.6)}return C};d.beaconDef=e.add({kind:"point",pos:[g,4.5,v],color:16758880,power:12,dist:16,prio:4,reach:22,flicker:x}),d.beaconPulse=x,e.add({kind:"point",pos:[6.6,1.35,se.z1-.8],color:5822664,power:2,dist:4,reach:18}),e.add({kind:"point",pos:[g-1.5,1.1,v+.25],color:16756800,power:1.6,dist:3.5,reach:18}),e.add({kind:"point",pos:[se.x1-.5,.9,-27.2],color:10470655,power:14,dist:7,reach:18,prio:2,flicker:y=>{const E=y*1.7%1;return E<.07?1:E>.5&&E<.53?.6:.02}}),m.push([se.x1,.8,se.z0,3.6],[12.5,5,se.z0,2.6],[11.8,0,-26.6,1.5],[4,se.h,-29,2.6]),m.push([se.x1-.05,1.3,(ot.z0+ot.z1)/2,2.4]),p.dust.push({box:[se.x0,.2,se.z0,se.x1,se.h,se.z1],n:1800,color:14477567,power:.5}),p.steam.push({pos:[se.x0+.5,5.1,se.z0+.6],dir:[.4,-1,.5],len:2.4,n:50,size:.9,color:13161184,power:.3}),p.sparks.push({pos:[se.x1-.25,.95,-27.2],dir:[-1,.6,.1],n:60,period:1/1.7})}{const c=new Vr,g=(De.z0+De.z1)/2,v=De.z0+.5,b=De.z1-.5;c.slab("floor",De.x0,-.2,De.z0,De.x1,0,De.z1),c.slab("floor",se.x1,-.2,ot.z0,De.x0,0,ot.z1),c.slab("steelDark",se.x1,ot.h,ot.z0,De.x0,ot.h+.05,ot.z1),c.slab("ceil",De.x0,De.h,De.z0,De.x1,De.h+.2,De.z1),c.slab("wall",De.x0,0,De.z0-.4,De.x1+.4,De.h,De.z0),c.slab("wall",De.x0,0,De.z1,De.x1+.4,De.h,De.z1+.4),c.wall("wall","x",De.x1+.2,De.z0,De.z1,0,De.h,.4,[{a0:v,a1:b,y0:.5,y1:3}]),c.slab("wallDark",De.x1-.05,0,De.z0,De.x1,.5,De.z1),c.box("steelDark",De.x1-.04,3.08,g,.14,.16,b-v+.3),c.box("steelDark",De.x1-.06,.44,g,.24,.12,b-v+.3);for(const M of[v-.07,b+.07])c.box("steelDark",De.x1-.04,1.75,M,.14,2.6,.14);for(const M of[v+(b-v)/3,v+2*(b-v)/3])c.box("steelDark",De.x1+.08,1.75,M,.2,2.5,.1);c.pipe("steel",[De.x1-.5,.95,v],[De.x1-.5,.95,b],.028);for(let M=v;M<=b+.01;M+=(b-v)/4)c.pipe("steel",[De.x1-.5,0,M],[De.x1-.5,.95,M],.022,{seg:8});for(const M of[De.z0+.1,De.z1-.1])c.box("steelDark",De.x0+1.4,De.h/2,M,.2,De.h,.2),c.box("steelDark",De.x1-1.6,De.h/2,M,.2,De.h,.2);c.box("steelDark",(De.x0+De.x1)/2,De.h-.1,g,.2,.2,De.z1-De.z0),c.box("steel",De.x0+1.2,.22,De.z1-.45,1.6,.06,.5),c.box("steelDark",De.x0+.5,.11,De.z1-.45,.06,.22,.44),c.box("steelDark",De.x0+1.9,.11,De.z1-.45,.06,.22,.44);{const M=c.build(o.gallery);M.userData.room="gallery",f.add(M)}e.add({kind:"point",pos:[De.x0+1.2,2.6,g],color:9417983,power:2.2,dist:8,reach:12,prio:2,wakeKeep:1}),e.add({kind:"point",pos:[De.x1-.3,1.8,g],color:10124543,power:7,dist:10,reach:14,prio:3,wakeKeep:1,flicker:M=>.7+.3*Math.sin(M*.9)*Math.sin(M*.37)}),m.push([De.x0,1.3,g,2.8],[De.x1,.3,De.z0,2.4],[De.x1,3.2,De.z1,2.4],[(De.x0+De.x1)/2,De.h,g,2.2]),p.dust.push({box:[De.x0,.2,De.z0,De.x1,De.h,De.z1],n:500,color:12167423,power:.6})}{const c=[];for(let x=-2;x>ge.z0;x-=4)for(const y of[-1,1])if(!(y<0&&x>Te.z0&&x<Te.z1))for(let E=.22;E<2.7;E+=.42)for(const C of[-.09,.09])c.push([y*1.798,E,x+C,"x"]);for(const x of[1.3,2.8,4.3,5.8])for(const y of[-1,1])for(let E=.25;E<2.4;E+=.43)c.push([y*1.358,E,x,"x"]);for(let x=Te.z0-.1;x<=Te.z1+.1;x+=.28)c.push([ge.x0+.102,Te.y1+.09,x,"x"],[ge.x0+.182,Te.y0-.07,x,"x"]);for(let x=Te.y0+.1;x<Te.y1;x+=.28)c.push([ge.x0+.102,x,Te.z0-.09,"x"],[ge.x0+.102,x,Te.z1+.09,"x"]);for(let x=0;x<12;x++)c.push([ts.x+Math.cos(x*Xr/6)*.8,1.502,ts.z+Math.sin(x*Xr/6)*.8,"y"]);for(let x=.25;x<2;x+=.35)for(const y of[-1,1])c.push([y*(Gt.w/2+.07),x,Ce.z0+.072,"z"],[y*(Gt.w/2+.07),x,-.072,"z"]);for(let x=.2;x<lt.h;x+=.35)c.push([ge.x1-.082,x,lt.z0-.08,"x"],[ge.x1-.082,x,lt.z1+.08,"x"]);for(const x of[se.x0+.12,7.07,11.73,se.x1-.12])for(let y=.3;y<5.2;y+=.6)c.push([x,y,se.z0+.242,"z"],[x,y,se.z1-.242,"z"]);const g=new kc(new cn(.017,.019,.014,6),new Ri({color:8225674,metalness:.9,roughness:.5}),c.length),v=new dt,b=new jt,M=new jt,A=new Y(1,1,1),T={x:new jt().setFromEuler(new Xn(0,0,wt)),y:new jt,z:new jt().setFromEuler(new Xn(wt,0,0))};c.forEach(([x,y,E,C],P)=>{Wi(E,b),M.copy(b).multiply(T[C]),g.setMatrixAt(P,v.compose(dn(x,y,E),M,A))}),g.frustumCulled=!1,g.receiveShadow=!0,f.add(g)}const h=(c,g)=>g>.2?"airlock":c>se.x1+.2?"gallery":c>2.2?"bay":"corridor",a={airlock:0,corridor:0,bay:0,gallery:0};function _(c){const g=h(c[0],c[2]),v=s[g].uFrost.value;if(a[g]>=v.length)throw new Error("очагов Узора в помещении "+g+" больше "+v.length);return v[a[g]].set(...c),{room:g,index:a[g]++,vec:v[a[g]-1]}}return m.forEach(_),{group:f,mats:r,matsOf:o,rooms:s,fx:p,seeds:m,addSeed:_,dynamic:d}}const Si={uTime:{value:0},uPx:{value:1080},uKeep:{value:1},uSunDir:{value:new Y},uSunPos:{value:new Y}},__=()=>new qn({transparent:!0,depthWrite:!1,blending:ni,side:Oi,uniforms:{uColor:{value:new Ue},uPower:{value:1},uTime:Si.uTime},vertexShader:`
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
    }`});function y_(i,e){const t=new zt,n=qi(e*31+7),s=[],r=new Y(0,1,0);for(const v of i.shafts){const b=dn(...v.pos),A=dn(...v.to).clone().sub(b),T=v.len||A.length();A.normalize();const x=new cn(v.r1,v.r0,1,28,6,!0);x.translate(0,.5,0);const y=x.attributes.uv;for(let P=0;P<y.count;P++)y.setY(P,1-y.getY(P));const E=__();E.uniforms.uColor.value.set(v.color),E.uniforms.uPower.value=v.power;const C=new ht(x,E);C.position.copy(b),C.quaternion.setFromUnitVectors(r,A),C.scale.set(1,T,1),t.add(C),s.push({def:v,mat:E})}const o=[],l=[],u=[],f=[],p=(v,b,M,A,T,x,y,E,C)=>{o.push(v.x,v.y,v.z),l.push(b.x,b.y,b.z),u.push(M,A,T,x),f.push(y.r*E,y.g*E,y.b*E,C)},m=new Ue,d=new Y,h=new jt;for(const v of i.dust){const[b,M,A,T,x,y]=v.box;m.set(v.color);for(let E=0;E<v.n;E++){const C=[b+n()*(T-b),M+n()*(x-M),A+n()*(y-A)],P=dn(...C);Wi(C[2],h),d.set((n()-.5)*.05,(n()-.5)*.03,(n()-.5)*.05).applyQuaternion(h),p(P,d,n(),14+n()*16,.003+n()*n()*.009,0,m,v.power*(.3+n()*.7),v.sun?3:0)}}for(const v of i.steam){m.set(v.color);const b=dn(...v.pos);Wi(v.pos[2],h);for(let M=0;M<v.n;M++)d.set(v.dir[0]+(n()-.5)*.5,v.dir[1]+(n()-.5)*.3,v.dir[2]+(n()-.5)*.5).multiplyScalar(v.len/3.2).applyQuaternion(h),p(b,d,M/v.n+n()*.02,3.2,v.size*.12,v.size*(.8+n()*.5),m,v.power,1)}for(const v of i.sparks){m.set(16767392);const b=dn(...v.pos);Wi(v.pos[2],h);for(let M=0;M<v.n;M++)d.set(v.dir[0]+(n()-.5)*1.6,v.dir[1]+n()*1.4,v.dir[2]+(n()-.5)*1.6).multiplyScalar(1.4+n()*1.6).applyQuaternion(h),p(b,d,n()*.06,v.period,.016+n()*.016,0,m,14,2)}const a=new kt;a.setAttribute("position",new at(o,3)),a.setAttribute("aVel",new at(l,3)),a.setAttribute("aPar",new at(u,4)),a.setAttribute("aCol",new at(f,4));const _=new qn({transparent:!0,depthWrite:!1,blending:ni,uniforms:{uTime:Si.uTime,uPx:Si.uPx,uKeep:Si.uKeep,uMap:{value:dc()},uSunPos:Si.uSunPos,uSunDir:Si.uSunDir,uDown:{value:new Y(0,-1,0)}},vertexShader:`
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
            float sx = (p.x - (${(Te.x-.2).toFixed(2)})) / uSunDir.x;
            vec3 hp = p - uSunDir * sx;
            float fz = atan(hp.z, 42.0 - hp.y) * 42.0, fy = 42.0 - length(vec2(hp.z, 42.0 - hp.y));
            float inw = smoothstep(${Te.z0.toFixed(1)}, ${(Te.z0+.12).toFixed(2)}, fz) * (1.0 - smoothstep(${(Te.z1-.12).toFixed(2)}, ${Te.z1.toFixed(1)}, fz))
              * smoothstep(${Te.y0.toFixed(1)}, ${(Te.y0+.08).toFixed(2)}, fy) * (1.0 - smoothstep(${(Te.y1-.08).toFixed(2)}, ${Te.y1.toFixed(1)}, fy));
            float pane = abs(fract((fz - (${Te.z0.toFixed(1)})) / ${((Te.z1-Te.z0)/3).toFixed(4)}) - 0.5);
            inw *= 1.0 - smoothstep(0.455, 0.47, pane) * step(0.2, abs(fz - ${Te.z0.toFixed(1)})) ;
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
      void main() { gl_FragColor = vec4(vCol.rgb * texture2D(uMap, gl_PointCoord).a, 1.0); }`}),c=new Vc(a,_);c.frustumCulled=!1,t.add(c);const g=new zt;for(const v of t.children.slice())v.isMesh&&g.add(v);return t.add(g),{group:t,shafts:s,points:c,shaftGroup:g}}function M_(i){const e=qi(i*101+3),t=new zt,n=[],s=[];for(let c=0;c<2600;c++){const g=e()*2-1,v=e()*Math.PI*2,b=Math.sqrt(1-g*g);n.push(b*Math.cos(v)*1e3,g*1e3,b*Math.sin(v)*1e3);const M=Math.pow(e(),4)*2.2+.12,A=e();s.push(M*(.8+.2*A),M*.9,M*(1-.25*A),1+e()*1.8)}const r=new kt;r.setAttribute("position",new at(n,3)),r.setAttribute("aCol",new at(s,4));const o=new Vc(r,new qn({depthWrite:!1,blending:ni,transparent:!0,uniforms:{uPx:Si.uPx},vertexShader:`attribute vec4 aCol; varying vec3 vC; uniform float uPx;
      void main() { vC = aCol.rgb; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = aCol.a * uPx / 1080.0; }`,fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; gl_FragColor = vec4(vC * smoothstep(0.5, 0.1, length(d)), 1.0); }"}));o.frustumCulled=!1,t.add(o);const l=new Y(-13-1.4,5.2-.15,4.2+1.6).normalize(),u=new ht(new Xi(2.6,20,14),new fi({color:new Ue(60,54,44),toneMapped:!1,fog:!1}));u.position.copy(l).multiplyScalar(900),t.add(u);const f=ad(new no(1,48)),p=f.attributes.position,m=new Y,d=(c,g,v)=>{const b=Math.sin(c*127.1+g*311.7+v*74.7)*43758.5453;return b-Math.floor(b)},h=(c,g,v)=>{const b=Math.floor(c),M=Math.floor(g),A=Math.floor(v),T=c-b,x=g-M,y=v-A,E=L=>L*L*(3-2*L),C=E(T),P=E(x),I=E(y),q=(L,O,H)=>L+(O-L)*H;return q(q(q(d(b,M,A),d(b+1,M,A),C),q(d(b,M+1,A),d(b+1,M+1,A),C),P),q(q(d(b,M,A+1),d(b+1,M,A+1),C),q(d(b,M+1,A+1),d(b+1,M+1,A+1),C),P),I)},a=Array.from({length:26},()=>{const c=e()*2-1,g=e()*6.283,v=Math.sqrt(1-c*c);return[v*Math.cos(g),c,v*Math.sin(g),.08+e()*e()*.3]});for(let c=0;c<p.count;c++){m.fromBufferAttribute(p,c).normalize();let g=1+(h(m.x*1.3+5,m.y*1.3,m.z*1.3)-.5)*.55+(h(m.x*3.1,m.y*3.1+2,m.z*3.1)-.5)*.22+(h(m.x*8,m.y*8,m.z*8+1)-.5)*.07+(h(m.x*21,m.y*21,m.z*21)-.5)*.025;for(const v of a){const b=Math.hypot(m.x-v[0],m.y-v[1],m.z-v[2])/v[3];b<1.3&&(g+=(b<1?-(1-b*b)*.35:(1.3-b)/.3*.06*(b-1)/.3*4)*v[3])}m.multiplyScalar(g),p.setXYZ(c,m.x*1.25,m.y*.85,m.z)}f.computeVertexNormals();const _=new ht(f,new qn({uniforms:{uSun:{value:l}},vertexShader:"varying vec3 vN; varying vec3 vP; void main() { vN = normalize(mat3(modelMatrix) * normal); vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));return _.scale.setScalar(100),_.position.set(-235,-52,-62),_.rotation.set(.4,1.1,.2),t.add(_),{sky:t,sunDir:l,asteroid:_}}function b_(i){const e=Te.z1-Te.z0,t=Te.y1-Te.y0,n=new Hi(e,t,8,1),s=new qn({transparent:!0,depthWrite:!1,blending:jf,blendSrc:eh,blendDst:Ac,uniforms:{tRefl:{value:i.texture},uTexM:{value:new dt},uGain:{value:.42}},vertexShader:`
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
      }`}),r=new ht(n,s),o=(Te.z0+Te.z1)/2,l=dn(Te.x-.28,(Te.y0+Te.y1)/2,o);return r.position.copy(l),Wi(o,r.quaternion).multiply(new jt().setFromAxisAngle(new Y(0,1,0),Math.PI/2)),r.updateMatrixWorld(),{mesh:r,mat:s,center:l,normal:new Y(1,0,0)}}function S_(i){const e=Te.x-.18,t=1.96,n=.03,s=2.72,r=Te.z0-3.7,o=Te.z1+.1,l=new xn(t-e,s-n,o-r,1,1,14);l.translate((e+t)/2,(n+s)/2,(r+o)/2);const u=l.attributes.position,f=new Y;for(let _=0;_<u.count;_++)dn(u.getX(_),u.getY(_),u.getZ(_),f),u.setXYZ(_,f.x,f.y,f.z);l.computeBoundingSphere();const p=new Y(i.to[0]-i.pos[0],i.to[1]-i.pos[1],i.to[2]-i.pos[2]).normalize(),m=((Te.z1-Te.z0)/3).toFixed(4),d=_=>_.toFixed(3),h=new qn({transparent:!0,depthWrite:!1,depthTest:!1,blending:ni,side:zn,uniforms:{uDir:{value:p},uColor:{value:new Ue(16773336)},uPower:{value:.11},uSteps:{value:24}},vertexShader:"varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
          float s = (q.x - (${d(Te.x-.2)})) / uDir.x;
          vec3 hp = q - uDir * s;
          float inw = smoothstep(${d(Te.z0)}, ${d(Te.z0+.1)}, hp.z) * (1.0 - smoothstep(${d(Te.z1-.1)}, ${d(Te.z1)}, hp.z))
            * smoothstep(${d(Te.y0)}, ${d(Te.y0+.07)}, hp.y) * (1.0 - smoothstep(${d(Te.y1-.07)}, ${d(Te.y1)}, hp.y));
          float pane = abs(fract((hp.z - (${d(Te.z0)})) / ${m}) - 0.5);
          inw *= 1.0 - smoothstep(0.47, 0.485, pane);
          inw *= step(0.0, q.y) * step(0.0, s);
          // пыль в луче неоднородна: полосы тянутся вдоль луча, потому что шум взят в плоскости окна
          // у самых глаз дымка слабее: стоя в луче, игрок не должен смотреть сквозь молоко
          acc += inw * (0.55 + 0.9 * n2(hp.zy * 5.0)) * (1.0 - 0.1 * s) * smoothstep(0.2, 2.6, tt);
        }
        // лицом к окну дымка луча гасится: иначе она затягивает вид на космос молочной пеленой
        float face = 1.0 - 0.9 * smoothstep(0.35, 0.9, -dot(rd, uDir));
        gl_FragColor = vec4(uColor * uPower * face * acc / uSteps * (tB - tA), 1.0);
      }`}),a=new ht(l,h);return a.frustumCulled=!1,a}const ld=.21,vt=512,tr=vt/256,pc=i=>i*i*(3-2*i),Ls=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Fa=(i,e,t)=>pc(Ls((t-i)/(e-i)));function w_(i,e){const t=new Float32Array(e*e);for(let s=0;s<t.length;s++)t[s]=i();const n=new Float32Array(vt*vt);for(let s=0;s<vt;s++)for(let r=0;r<vt;r++){const o=r/vt*e,l=s/vt*e,u=Math.floor(o),f=Math.floor(l),p=pc(o-u),m=pc(l-f),d=t[f%e*e+u%e],h=t[f%e*e+(u+1)%e],a=t[(f+1)%e*e+u%e],_=t[(f+1)%e*e+(u+1)%e];n[s*vt+r]=(d*(1-p)+h*p)*(1-m)+(a*(1-p)+_*p)*m}return n}function To(i,e,t){const n=new Float32Array(vt*vt);let s=.5,r=0;for(let o=0;o<t;o++){const l=w_(i,e<<o);for(let u=0;u<n.length;u++)n[u]+=l[u]*s;r+=s,s*=.5}for(let o=0;o<n.length;o++)n[o]/=r;return n}function fl(i,e,t,n,s,r,o){const l=Math.cos(n),u=Math.sin(n),f=Math.ceil(s*2),p=Math.ceil(r+1);for(let m=0;m<=f;m++){const d=e+l*m*.5,h=t+u*m*.5,a=Math.sin(Math.PI*m/f)**.5;for(let _=-p;_<=p;_++)for(let c=-p;c<=p;c++){const g=Math.round(d)+c,v=Math.round(h)+_,b=Math.hypot(g-d,v-h);if(b>r+.7)continue;const M=(v%vt+vt)%vt*vt+(g%vt+vt)%vt,A=o*a*Ls(1-(b-r*.5)/(r*.5+.7));A>i[M]&&(i[M]=A)}}}function hl(i,e){const t=new Ws(i,vt,vt,Vn);return t.colorSpace=e?ln:ki,t.wrapS=t.wrapT=Jr,t.magFilter=Gn,t.minFilter=es,t.generateMipmaps=!0,t.anisotropy=4,t.needsUpdate=!0,t}function Df(i,e,t,n){const s=new Ws(new Uint8Array([i,e,t,255]),1,1,Vn);return s.colorSpace=n?ln:ki,s.wrapS=s.wrapT=Jr,s.needsUpdate=!0,s}let Oa=null;function T_(){if(Oa)return Oa;const i=qi(377018),e=To(i,3,5),t=To(i,5,4),n=To(i,28,2),s=To(i,8,4),r=To(i,2,3),o=new Float32Array(vt*vt);for(let _=0;_<o.length;_++)o[_]=i();const l=new Float32Array(vt*vt),u=new Float32Array(vt*vt),f=new Float32Array(vt*vt);for(let _=0;_<26;_++){const c=i()*Math.PI,g=i()*vt,v=i()*vt,b=2+Math.floor(i()*5);for(let M=0;M<b;M++)fl(l,g+(i()-.5)*26*tr,v+(i()-.5)*26*tr,c+(i()-.5)*.25,(10+i()*46)*tr,.55,.35+i()*.65)}for(let _=0;_<9;_++)fl(u,i()*vt,i()*vt,i()*Math.PI,(16+i()*40)*tr,(.8+i()*.6)*tr,.7+i()*.3);for(let _=0;_<12;_++)fl(f,i()*vt,i()*vt,.5+(i()-.5)*.7,(40+i()*80)*tr,(3+i()*4)*tr,.3+i()*.5);const p=new Uint8Array(vt*vt*4),m=new Uint8Array(vt*vt*4),d=new Uint8Array(vt*vt*4),h=(_,c,g,v,b)=>{_[c]=Ls(g)*255,_[c+1]=Ls(v)*255,_[c+2]=Ls(b)*255,_[c+3]=255},a=_=>_<=.0031308?_*12.92:1.055*_**(1/2.4)-.055;for(let _=0;_<vt*vt;_++){const c=_*4,g=Fa(.42,.72,e[_]),v=Fa(.5,.68,t[_])*.6,b=s[_]+(n[_]-.5)*.1,M=Fa(.652,.672,b),A=Fa(.612,.655,b)*(1-M),T=l[_],x=u[_],y=f[_]*(.5+.5*r[_]),E=(n[_]-.5)*.6+(o[_]-.5)*.45;let C=.93+E*.07;C*=1-.2*g-.07*v-.11*y,C*=1-.3*T-.45*x,C=C*(1-.16*A);const P=.11*g+.05*y+.04*A;h(p,c,a(C),a(C*(1-P*.45)),a(C*(1-P))),p[c+3]=255*(1-.55*M);const I=(.94+E*.12)*(1-.34*g-.16*y)*(1-.25*A)*(1-.4*x),q=Ls(M*(.75+.5*n[_])+T*.8+x*.25);h(m,c,a(I),a(I*(1-.3*P)),a(I*(1-.7*P))),m[c+3]=255*(1-.9*q);const L=.55+E*.22-.3*T-.5*x-.22*M+.06*A+.08*g,O=Ls(.8+E*.2+.2*g+.1*y-.42*M-.25*T+.12*A+.15*x,.25,1),H=Ls(.74+.26*q-.3*g);h(d,c,L,O,H)}return Oa={paint:hl(p,!0),metal:hl(m,!0),hrm:hl(d,!1),cleanMap:Df(255,255,255,!0),cleanHrm:Df(128,255,255,!1)},Oa}function E_(i){const e=T_();return i==="clean"?{map:e.cleanMap,roughnessMap:e.cleanHrm,metalnessMap:e.cleanHrm,bumpMap:e.cleanHrm,bumpScale:0}:{map:i==="metal"?e.metal:e.paint,roughnessMap:e.hrm,metalnessMap:e.hrm,bumpMap:e.hrm,bumpScale:i==="metal"?1.6:1.1}}function A_(i){i.uniforms.uBare={value:this.userData.bare},i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uBare;`).replace("#include <color_fragment>",`#include <color_fragment>
#ifdef USE_MAP
	diffuseColor.rgb = mix( uBare, diffuseColor.rgb, sampledDiffuseColor.a );
#endif`)}function $r(i,e,t){return i.setValues(E_(e)),i.userData.bare=new Ue(t),i.onBeforeCompile=A_,i}function Jc(i,e=ld,t=0,n=0){const s=i.attributes.position,r=i.attributes.uv,o=new Y,l=new Y,u=new Y,f=new Y,p=1/e;for(let m=0;m<s.count;m+=3){o.fromBufferAttribute(s,m),l.fromBufferAttribute(s,m+1),u.fromBufferAttribute(s,m+2),f.subVectors(u,l).cross(l.clone().sub(o).negate());const d=Math.abs(f.x),h=Math.abs(f.y),a=Math.abs(f.z);for(let _=0;_<3;_++){const c=_===0?o:_===1?l:u;d>=h&&d>=a?r.setXY(m+_,c.z*p+t+.37,c.y*p+n):h>=a?r.setXY(m+_,c.x*p+t,c.z*p+n+.61):r.setXY(m+_,c.x*p+t+.13,c.y*p+n+.29)}}}function cd(i){const e=i.attributes.position,t=i.attributes.normal,n=e.count,s=new Float32Array(n),r=new Map,o=new Int32Array(n);let l=0;for(let m=0;m<n;m++){const d=((Math.round(e.getX(m)*2e4)+65536)*131072+Math.round(e.getY(m)*2e4)+65536)*131072+Math.round(e.getZ(m)*2e4)+65536;let h=r.get(d);h===void 0&&(h=l++,r.set(d,h)),o[m]=h}const u=new Float32Array(l),f=new Float32Array(l),p=new Float32Array(l*3);for(let m=0;m<n;m++){const d=o[m]*3;p[d]+=t.getX(m),p[d+1]+=t.getY(m),p[d+2]+=t.getZ(m)}for(let m=0;m<n;m+=3){const d=(e.getX(m)+e.getX(m+1)+e.getX(m+2))/3,h=(e.getY(m)+e.getY(m+1)+e.getY(m+2))/3,a=(e.getZ(m)+e.getZ(m+1)+e.getZ(m+2))/3;for(let _=0;_<3;_++){const c=m+_,g=o[c]*3,v=d-e.getX(c),b=h-e.getY(c),M=a-e.getZ(c),A=Math.hypot(v,b,M)||1,T=Math.hypot(p[g],p[g+1],p[g+2])||1;u[o[c]]-=(p[g]*v+p[g+1]*b+p[g+2]*M)/(A*T),f[o[c]]++}}for(let m=0;m<n;m++)s[m]=u[o[m]]/(f[o[m]]||1);return s}const it=Y,Gi=dt,rn=i=>new Ue(i),en=(i,e,t)=>rn(i).lerp(rn(e),t),Tn=(i,e,t)=>Math.min(t,Math.max(e,i)),xs=(i,e,t)=>{const n=Tn((t-i)/(e-i),0,1);return n*n*(3-2*n)},he={suit:en(16777215,Ne.turquoise,.07).multiplyScalar(.84),suitDim:en(16777215,Ne.cardBg,.38),rubber:rn(Ne.cardBg).multiplyScalar(.5),teal:rn(Ne.turquoise),tealDeep:en(Ne.turquoise,Ne.lotusTeal,.55),gold:rn(Ne.gold),goldLight:rn(Ne.goldLight),bronze:en(Ne.gold,Ne.cardBg,.62).lerp(en(Ne.cardBg,16777215,.3),.3),steel:en(Ne.cardBg,16777215,.3),glowTeal:en(Ne.turquoise,Ne.lotusTeal,.38),skin:rn(Ne.skin),skinWarm:en(Ne.skin,Ne.neonViolet,.1),nose:en(Ne.skin,Ne.neonViolet,.42),lilac:en(Ne.skin,Ne.neonViolet2,.36),liner:en(Ne.deepViolet,Ne.cardBg,.4),tooth:en(Ne.skin,16777215,.8),crimson:rn(Ne.neonViolet).offsetHSL(.115,.05,-.2),white:rn(16777215),black:rn(0),bare:en(Ne.cardBg,16777215,.58).lerp(rn(Ne.gold),.4),primer:en(Ne.cardBg,16777215,.36),scuff:en(Ne.cardBg,16777215,.5).lerp(rn(Ne.gold),.12),dirt:new Ue(.42,.36,.3)},En={teal:0,eyeGreen:1,eyeBlue:2,gem:3,crimson:4,white:6,black:7,coil:8,heat:9,hot:10},R_=16,mc=2.2;function Ee(i=0,e=0,t=0,n=0,s=0,r=0,o=1,l,u){return l=l??o,u=u??o,new Gi().compose(new it(i,e,t),new jt().setFromEuler(new Xn(n,s,r)),new it(o,l,u))}function si(i,e,t){const n=new Gi().lookAt(new it(0,0,0),e,t);return n.setPosition(i),n}function Ji(i,e,t=new it(0,1,0)){return si(i,e.clone().negate(),t)}function ud(i){i.deleteAttribute("uv"),i.deleteAttribute("normal");const e=ad(i,1e-5);return e.computeVertexNormals(),e}function Ft(i,e,t,n,s=20,r=14){const o=new Xi(1,s,r),l=o.attributes.position,u=new it;for(let f=0;f<l.count;f++)u.fromBufferAttribute(l,f),n&&n(u),l.setXYZ(f,u.x*i,u.y*e,u.z*t);return ud(o)}function oi(i,e=24,t=!0,n=!0){const s=[],r=[],o=i.length;for(const[u,f,p=f,m=0,d=0,h=2]of i){const a=2/h;for(let _=0;_<e;_++){const c=_/e*Math.PI*2,g=Math.cos(c),v=Math.sin(c);s.push(m+f*Math.sign(g)*Math.abs(g)**a,u,d+p*Math.sign(v)*Math.abs(v)**a)}}for(let u=0;u<o-1;u++)for(let f=0;f<e;f++){const p=u*e+f,m=(u+1)*e+f,d=u*e+(f+1)%e,h=(u+1)*e+(f+1)%e;r.push(p,m,d,m,h,d)}if(t){const u=i[0],f=s.length/3;s.push(u[3]||0,u[0],u[4]||0);for(let p=0;p<e;p++)r.push(f,p,(p+1)%e)}if(n){const u=i[o-1],f=s.length/3,p=(o-1)*e;s.push(u[3]||0,u[0],u[4]||0);for(let m=0;m<e;m++)r.push(f,p+(m+1)%e,p+m)}const l=new kt;return l.setAttribute("position",new at(s,3)),l.setIndex(r),l.computeVertexNormals(),l}const gn=(i,e=24,t=!1,n=!1)=>oi(i.map(([s,r])=>[s,r,r]),e,t,n);function An(i,e,t,n,s=1,r=!1,o=.5){const l=new Vs(i.map(a=>a.isVector3?a:new it(a[0],a[1],a[2])),r,"centripetal"),u=l.computeFrenetFrames(e,r),f=[],p=[],m=[],d=new it;for(let a=0;a<=e;a++){const _=a/e,c=u.normals[a],g=u.binormals[a],v=Math.max(1e-5,n(_));l.getPointAt(_,d);for(let b=0;b<t;b++){const M=b/t*Math.PI*2,A=Math.cos(M)*v,T=Math.sin(M)*v*s;f.push(d.x+c.x*A+g.x*T,d.y+c.y*A+g.y*T,d.z+c.z*A+g.z*T),p.push(_,o)}}for(let a=0;a<e;a++)for(let _=0;_<t;_++){const c=a*t+_,g=(a+1)*t+_,v=a*t+(_+1)%t,b=(a+1)*t+(_+1)%t;m.push(c,v,g,g,v,b)}const h=new kt;return h.setAttribute("position",new at(f,3)),h.setAttribute("uv",new at(p,2)),h.setIndex(m),h.computeVertexNormals(),h}const Lf=(i,e=.8)=>t=>i*(t<e?1:Math.sqrt(Math.max(.01,1-((t-e)/(1-e))**2)));function wn(i,e,t,n,s){n=n??Math.min(i,e)*.22,s=s??Math.min(i,e,t)*.18;const r=i/2-s,o=e/2-s,l=Math.min(n,r*.99,o*.99),u=new _s;u.moveTo(-r+l,-o),u.lineTo(r-l,-o),u.quadraticCurveTo(r,-o,r,-o+l),u.lineTo(r,o-l),u.quadraticCurveTo(r,o,r-l,o),u.lineTo(-r+l,o),u.quadraticCurveTo(-r,o,-r,o-l),u.lineTo(-r,-o+l),u.quadraticCurveTo(-r,-o,-r+l,-o);const f=Math.max(1e-4,t-2*s),p=new gr(u,{depth:f,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:4,steps:1});return p.translate(0,0,-f/2),p}function gc(i,e,t,n=8){const s=new gr(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:n,steps:1});return s.translate(0,0,-e/2),s}function ai(i,e,t=8,n=32,s=Math.PI*2){return new bs(i,e,t,n,s)}function xc(i,e,t){const n=i.index?i.toNonIndexed():i.clone();n.attributes.normal||n.computeVertexNormals();const s=n.attributes.position,r=s.count,o=new Float32Array(r*2),l=new Float32Array(r*3);if(t!=null)for(let p=0;p<r;p++)o[2*p]=(t+.5)/R_,o[2*p+1]=.5;else n.attributes.uv&&o.set(n.attributes.uv.array.subarray(0,r*2));const u=new Ue,f=new it;for(let p=0;p<r;p++)typeof e=="function"?(f.fromBufferAttribute(s,p),u.copy(e(f))):u.copy(e||he.white),l[3*p]=u.r,l[3*p+1]=u.g,l[3*p+2]=u.b;for(const p of Object.keys(n.attributes))p!=="position"&&p!=="normal"&&n.deleteAttribute(p);return n.setAttribute("uv",new an(o,2)),n.setAttribute("color",new an(l,3)),n.clearGroups(),n}function fd(i){for(const e of Object.values(i.attributes)){const t=e.itemSize,n=e.array;for(let s=0;s<e.count;s+=3)for(let r=0;r<t;r++){const o=n[(s+1)*t+r];n[(s+1)*t+r]=n[(s+2)*t+r],n[(s+2)*t+r]=o}}}const C_=new Ue;function P_(i,e){const t=cd(i),n=i.attributes.color,s=C_;for(let r=0;r<n.count;r++){const o=t[r];if(o>.2)s.fromBufferAttribute(n,r).lerp(e?he.bare:he.scuff,(e?.72:.42)*xs(.2,.62,o));else if(o<-.07){const l=xs(.07,.42,-o)*.8;s.fromBufferAttribute(n,r),s.r*=1-l*(1-he.dirt.r),s.g*=1-l*(1-he.dirt.g),s.b*=1-l*(1-he.dirt.b)}else continue;n.setXYZ(r,s.r,s.g,s.b)}}let S0=class{constructor(){this.b={},this.stack=[new Gi],this.n={},this.tag=null,this.tags={}}get M(){return this.stack[this.stack.length-1]}push(e){this.stack.push(this.M.clone().multiply(e))}pop(){this.stack.pop()}add(e,t,n,s,r){const o=xc(t,n,r),l=s?this.M.clone().multiply(s):this.M;o.applyMatrix4(l),l.determinant()<0&&fd(o),(e==="suit"||e==="metal")&&(P_(o,e==="metal"),Jc(o));const u=o.attributes.position.count,f=this.n[e]||0;this.tag&&(this.tags[this.tag]||=[]).push([e,f,u]),this.n[e]=f+u,(this.b[e]||=[]).push(o)}glow(e,t,n){this.add("glow",e,he.white,n,t)}build(e,t,n){const s={};for(const[r,o]of Object.entries(this.b)){const l=new ht(Ei(o,!1),t[r]);l.name=`${n}:${r}`,l.frustumCulled=!1,e.add(l),s[r]=l}return s}};function zf(i,e){const t=i.length,n=new Uint8Array(t*4),s=new Ue;i.forEach((o,l)=>{s.copy(o).multiplyScalar(e?e[l]:1).convertLinearToSRGB(),n[4*l]=Tn(s.r,0,1)*255,n[4*l+1]=Tn(s.g,0,1)*255,n[4*l+2]=Tn(s.b,0,1)*255,n[4*l+3]=255});const r=new Ws(n,t,1,Vn);return r.colorSpace=ln,r.magFilter=r.minFilter=vn,r.generateMipmaps=!1,r.needsUpdate=!0,r}const Bo=16;function hd(i,e){const t=en(Ne.flame,Ne.goldLight,.5).lerp(rn(16777215),.3),n=rn(Ne.flame),s=rn(Ne.flame).multiply(new Ue(1,.5,.22)),r=en(Ne.neonViolet2,16777215,.6),o=rn(Ne.neonViolet),l=en(Ne.neonViolet2,Ne.deepViolet,.35),u=new Ue,f=new Ue;for(let p=0;p<2;p++)for(let m=0;m<Bo;m++){const d=m/(Bo-1),h=Tn(d*(p?1.25:1),0,1);h<.45?(u.copy(t).lerp(n,h/.45),f.copy(r).lerp(o,h/.45)):(u.copy(n).lerp(s,(h-.45)/.55),f.copy(o).lerp(l,(h-.45)/.55)),u.lerp(f,e*.8).convertLinearToSRGB();const a=(p*Bo+m)*4;i[a]=Tn(u.r,0,1)*255,i[a+1]=Tn(u.g,0,1)*255,i[a+2]=Tn(u.b,0,1)*255,i[a+3]=255}}function D_(){const i=Ri,e=rn(1054748),t=[he.glowTeal,rn(Ne.eyeGreen),rn(Ne.eyeBlue),rn(Ne.gem),he.crimson,he.goldLight,he.white,he.black,he.glowTeal,e,he.steel.clone().multiplyScalar(.6),he.black,he.black,he.black,he.black,he.black],n=zf(t),s=zf(t,[1,.75,.75,1,.45,.5,.9,0,.8,.5,0,0,0,0,0,0].map(l=>l*1.1/mc)),r=new Uint8Array(Bo*2*4);hd(r,0);const o=new Ws(r,Bo,2,Vn);return o.colorSpace=ln,o.magFilter=o.minFilter=Gn,o.wrapS=o.wrapT=ji,o.generateMipmaps=!1,o.needsUpdate=!0,{suit:$r(new i({name:"harma-suit",vertexColors:!0,roughness:1,metalness:0}),"paint",he.primer),metal:$r(new i({name:"harma-metal",vertexColors:!0,roughness:.86,metalness:.9}),"metal",he.bare),skin:$r(new i({name:"harma-skin",vertexColors:!0,roughness:.58,metalness:0,emissive:he.skin.clone(),emissiveIntensity:.15}),"clean",he.skin),glow:new i({name:"harma-glow",map:n,emissiveMap:s,emissive:16777215,emissiveIntensity:mc,roughness:.3,metalness:0}),flame:new i({name:"harma-flame",color:0,map:o,emissiveMap:o,emissive:16777215,emissiveIntensity:1.05,roughness:1,metalness:0}),feather:new i({name:"harma-feather",color:he.goldLight.clone(),emissive:he.goldLight.clone(),emissiveIntensity:.32,roughness:.32,metalness:.45}),lens:new i({name:"harma-lens",color:1054748,emissive:he.teal.clone(),emissiveIntensity:1.6,roughness:.12,metalness:0}),glass:new i({name:"harma-glass",color:en(16777215,Ne.turquoise,.35),transparent:!0,opacity:.16,roughness:.06,metalness:0,depthWrite:!1})}}function dd(i,e,t,n=1){i.add("suit",Ft(.037,.033,.036,null,14,10),he.suit,Ee(0,0,.002)),i.add("suit",Ft(.041,.026,.048,f=>{f.y<0&&(f.y*=.82),f.z*=1-.13*f.x*f.x}),he.suit,Ee(0,0,-.047)),i.add("suit",Ft(.027,.008,.03,f=>{f.z*=1-.25*f.x*f.x}),he.teal,Ee(0,.0215,-.047)),i.add("metal",Ft(.0075,.0045,.0075,null,12,8),he.gold,Ee(0,.0285,-.047)),i.add("suit",ai(.0285,.0016,6,28),he.suitDim,Ee(0,.0225,-.047,Math.PI/2,0,0,1,1.06,1)),i.add("suit",Ft(.024,.007,.021,f=>{f.z*=1-.35*f.x*f.x},14,10),he.nose,Ee(0,-.0205,-.05));const s=[-.0288,-.0098,.0098,.0288],r=[.9,1.05,1.05,.9];s.forEach((f,p)=>{const m=r[p],d=[.12+t*.6,.2+t*1.4,.26+t*2.15],h=[.024*m,.021*m,.017*m];let a=f,_=-.002,c=-.079+Math.abs(f)*.25;const g=[[f*.9,0,c+.03],[a,_,c]];for(let b=0;b<3;b++)_-=Math.sin(d[b])*h[b],c-=Math.cos(d[b])*h[b],a+=f*.1*n,g.push([a,_,c]);i.add("suit",An(g,14,10,b=>Lf(.0138,.82)(b)*(1-.1*b)),he.suit);const v=d[2];i.add("suit",Ft(.0092,.0058,.0108,null,12,8),he.nose,Ee(a,_+Math.sin(v)*h[2]*.42-Math.cos(v)*.0088,c+Math.cos(v)*h[2]*.42+Math.sin(v)*.0088,-v,0,0)),i.add("suit",ai(.0132,.0022,6,14),he.teal,Ee(f,-.003-Math.sin(d[0])*.005,-.083+Math.abs(f)*.25,-d[0]*.5,0,0))});const o=-e,l=t,u=[[o*.018,-.004,-.028],[o*.038,-.006,-.04],[o*(.05-l*.004),-.012-l*.008,-.056],[o*(.052-l*.016),-.02-l*.016,-.07]];i.add("suit",An(u,12,10,Lf(.0128,.8)),he.suit),i.add("suit",Ft(.0085,.0055,.0095,null,12,8),he.nose,Ee(u[3][0]-o*.004*(1+l),u[3][1]-.0068,u[3][2]+.005,.5,0,o*.5*l))}function pd(i,e=.34){i.push(Ee(0,0,0,Math.PI/2,0,0)),i.add("metal",gn([[.002,.036],[.004,.0435],[.0075,.0462],[.012,.0462],[.0155,.0425],[.031,.0425],[.0345,.0462],[.039,.0462],[.0425,.0435],[.0445,.039]],32,!0,!1),he.gold);for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.add("metal",Ft(.0042,.0042,.0026,null,8,6),n%3===0?he.goldLight:he.bronze,Ee(Math.cos(s)*.0428,.0232,Math.sin(s)*.0428,0,-s+Math.PI/2,0))}i.add("suit",gn([[.0435,.04],[.0455,.0445],[.052,.0445],[.054,.04]],32),he.teal);const t=[[.053,.039]];for(let n=0;n<4;n++){const s=.058+n*.013;t.push([s,.0405],[s+.0045,.0452],[s+.009,.0452],[s+.0125,.041])}t.push([.118,.044],[.17,.051],[.25,.054],[e-.02,.052],[e,.044]),i.add("suit",gn(t,32,!1,!0),he.suit),i.add("suit",gn([[.213,.0525],[.215,.0562],[.228,.0568],[.23,.053]],32),he.teal),i.add("metal",gn([[.2305,.053],[.232,.0575],[.237,.0578],[.2385,.0535]],32),he.gold),i.pop(),i.add("suit",Ft(.016,.005,.036,n=>{n.x*=1-.3*n.z*n.z},14,10),he.teal,Ee(0,.0475,.158,.085,0,0)),i.add("suit",ai(.0175,.0014,6,24),he.suitDim,Ee(0,.0478,.158,Math.PI/2+.085,0,0,1,2.1,1))}const md=.196,yi=new it(0,-.188,.04),t0=new it(-.047,.04,-.018),rr=new it(-.86,-.14,-.49).normalize(),L_=new Gi().makeBasis(new it(0,1,0),new it(0,0,1),new it(1,0,0)),gd=i=>Ee(0,0,0,0,i*Math.PI*2/3,0).multiply(Ee(0,.168,.05)).multiply(L_);function xd(i){i.add("metal",oi([[-.122,.024,.03,0,0,3.2],[-.112,.041,.047,0,0,3.6],[-.1,.047,.053,0,0,4],[-.03,.05,.056,0,0,4.2],[.03,.05,.054,0,0,4.2],[.058,.044,.047,0,0,3.6],[.074,.038,.04,0,0,3],[.086,.034,.035,0,0,2.4]],36),he.bronze);for(const u of[-.088,.036]){const m=u<0?.0555:.0552;i.add("metal",oi([[u-.007,.0512-.003,m-.003,0,0,4.1],[u-.005,.0512+.0012,m+.0012,0,0,4.1],[u+.005,.0512+.0012,m+.0012,0,0,4.1],[u+.007,.0512-.003,m-.003,0,0,4.1]],36,!1,!1),he.steel)}i.add("suit",wn(.07,.098,.012,.014,.003),he.suit,Ee(0,-.026,.0575));for(const u of[-1,1]){i.add("suit",wn(.062,.092,.011,.014,.003),he.suit,Ee(u*.0505,-.026,-.002,0,Math.PI/2,0)),i.add("suit",wn(.02,.06,.004,.006,.0012),he.teal,Ee(u*.0562,-.026,-.012,0,Math.PI/2,0));for(const[f,p]of[[-.064,.021],[.012,.021],[-.064,-.025],[.012,-.025]])i.add("metal",new cn(.0034,.0034,.004,10),he.steel,Ee(u*.0565,f,p,0,0,Math.PI/2))}for(const[u,f]of[[-.027,-.066],[.027,-.066],[-.027,.014],[.027,.014]])i.add("metal",new cn(.0034,.0034,.004,10),he.steel,Ee(u,f,.0638,Math.PI/2,0,0));for(let u=0;u<3;u++)i.glow(Ft(.0042,.0042,.0022,null,10,6),En.teal,Ee(.018,-.052+u*.013,.0642));i.add("suit",wn(.026,.05,.005,.005,.0012),he.rubber,Ee(-.012,-.034,.0638));for(let u=0;u<3;u++)i.glow(wn(.016,.0095,.003,.003,8e-4),En.heat,Ee(-.012,-.048+u*.014,.0662));i.add("metal",new ks(1),he.gold,Ee(.018,.004,.0635,0,0,0,.0075,.011,.002)),i.add("metal",gn([[-.14,.014],[-.139,.02],[-.128,.022],[-.126,.03],[-.12,.031]],24,!0,!1),he.steel),i.add("metal",ai(.0262,.0024,8,28),he.gold,Ee(0,-.1235,0,Math.PI/2,0,0)),i.add("metal",wn(.006,.03,.006,.002,.0012),he.gold,Ee(0,-.141,0,Math.PI/2,0,.6)),i.add("metal",gn([[.082,.03],[.09,.0262],[.158,.0262],[.164,.034]],24),he.steel);const e=[];for(let u=0;u<=66;u++){const f=u/66,p=f*Math.PI*2*5.5;e.push([Math.cos(p)*.0318,.094+f*.062,Math.sin(p)*.0318])}i.glow(An(e,200,7,()=>.0043),En.coil);for(let u=0;u<3;u++)i.push(Ee(0,0,0,0,u*Math.PI*2/3+Math.PI/3,0)),i.add("metal",wn(.007,.082,.005,.002,.0012),he.steel,Ee(0,.124,.0395)),i.pop();i.add("metal",gn([[.16,.036],[.164,.0455],[.169,.0478],[.186,.0478],[.194,.0445],[.199,.039],[.199,.0312],[.19,.027]],36),he.steel),i.add("metal",ai(.0484,.0026,8,36),he.gold,Ee(0,.1775,0,Math.PI/2,0,0)),i.add("lens",Ft(.0285,.011,.0285,null,20,10),he.white,Ee(0,md-.006,0)),i.glow(ai(.0285,.0016,6,32),En.teal,Ee(0,.1925,0,Math.PI/2,0,0)),i.glow(gn([[.1935,.0453],[.1994,.0398],[.2004,.0352],[.2012,.0306]],36),En.hot);const t=new _s;t.moveTo(-.006,.01),t.bezierCurveTo(.02,.034,.058,.036,.082,.014),t.quadraticCurveTo(.098,0,.108,-.022),t.quadraticCurveTo(.09,-.01,.072,-.004),t.bezierCurveTo(.052,.006,.03,.004,.014,-.008),t.lineTo(-.006,-.01),t.closePath();const n=gc(t,.014,.0045,10),s=new _s;s.moveTo(.012,.012),s.bezierCurveTo(.03,.026,.05,.027,.07,.014),s.lineTo(.064,.008),s.bezierCurveTo(.05,.016,.03,.015,.016,.005),s.closePath();const r=gc(s,.0235,.001,8);for(let u=0;u<3;u++)i.push(gd(u)),i.tag="claw"+u,i.add("metal",n,he.steel),i.add("suit",r,he.suit),i.add("metal",new cn(.0105,.0105,.031,14),he.bronze,Ee(0,0,0,Math.PI/2,0,0)),i.add("metal",new cn(.0045,.0045,.034,10),he.gold,Ee(0,0,0,Math.PI/2,0,0)),i.glow(Ft(.007,.0035,.0055,null,10,6),En.teal,Ee(.088,-.0095,0,0,0,-.75)),i.tag=null,i.pop();const o=[[-.056,.012],[-.052,.0165]];for(let u=0;u<9;u++){const f=-.047+u*.0105;o.push([f,.0148],[f+.003,.0162],[f+.0072,.0162])}o.push([.052,.0165],[.056,.012]),i.add("suit",gn(o,18,!0,!0),he.rubber,Ee(yi.x,yi.y,yi.z,0,0,Math.PI/2));for(const u of[-1,1])i.add("metal",An([[u*.04,-.112,.022],[u*.058,-.14,.03],[u*.063,yi.y+.004,yi.z-.002],[u*.061,yi.y-.004,yi.z+.002]],18,8,()=>.0078),he.steel),i.add("metal",Ft(.0125,.0125,.0125,null,12,8),he.gold,Ee(u*.061,yi.y,yi.z));i.push(new Gi().makeRotationFromQuaternion(new jt().setFromUnitVectors(new it(0,1,0),rr)).setPosition(t0)),i.add("metal",gn([[-.006,.02],[0,.0225],[.01,.0225],[.016,.0165]],18,!0,!1),he.steel);const l=[[.014,.0145]];for(let u=0;u<9;u++){const f=.02+u*.0105;l.push([f,.0148],[f+.003,.0162],[f+.0072,.0162])}l.push([.116,.0158]),i.add("suit",gn(l,18,!1,!1),he.rubber),i.add("metal",gn([[.114,.0165],[.118,.0195],[.124,.0195],[.129,.012]],18,!1,!0),he.gold),i.pop(),i.add("suit",Ft(.03,.05,.006,null,14,8),he.teal,Ee(0,-.02,-.057)),i.add("metal",new so(.0125,.058,6,14),he.steel,Ee(.0625,-.03,.03)),i.add("metal",gn([[-.012,.0138],[-.008,.0138]],14),he.gold,Ee(.0625,-.03,.03)),i.add("metal",wn(.008,.026,.006,.002,.0012),he.gold,Ee(-.058,.03,.02,.5,Math.PI/2,0)),i.add("metal",new cn(.0065,.0065,.006,12),he.bronze,Ee(-.057,.036,.016,0,0,Math.PI/2)),i.add("metal",gn([[-.012,.0085],[-.01,.0105],[0,.0105],[.002,.0085]],14),he.steel,Ee(.03,-.118,-.03,.5,0,0))}const vd=i=>.021+i*.82;function _d(i,e){const t=(_,c,g)=>new it(_,c,g).applyMatrix4(i),n=(_,c,g)=>new it(_,c,g).transformDirection(i),s=n(0,1,0),r=n(0,0,1),o=vd(.0162*e),l=r.clone().multiplyScalar(.8).addScaledVector(s,-.6).normalize(),u=s.clone().multiplyScalar(.8).addScaledVector(r,.6).normalize(),f=t(yi.x+.004,yi.y,yi.z).addScaledVector(u,-.07).addScaledVector(l,o),p=n(rr.x,rr.y,rr.z),m=t(t0.x+rr.x*.068,t0.y+rr.y*.068,t0.z+rr.z*.068),d=s.clone().addScaledVector(p,-s.dot(p)).normalize(),h=d.clone().cross(p).normalize();h.y>0&&h.negate();const a=m.clone().addScaledVector(d,-.07).addScaledVector(h,o);return{P:t,D:n,R:{wrist:f,f:u,u:l},L:{wrist:a,f:d,u:h}}}function ka(i,e,t,n,s,r,o){const l=new zt;l.name=e,l.matrixAutoUpdate=!1;const u=new S0;return dd(u,t,n,s),u.push(si(new it,r,new it(0,1,0))),pd(u,o),u.pop(),u.build(l,i,e),l}const Ba=(i,e)=>e.clone().transformDirection(i.clone().invert()),Ln={c:new it(0,-.1,-.46),r:.2,tube:.018,base:[-.3,Math.PI+.3],A:.6,period:1.5,shift:.2},vc=new it(0,0,1);function z_(i){const e=new it(Math.cos(i),Math.sin(i),0),t=e.clone().multiplyScalar(-.39).addScaledVector(vc,.92).normalize(),n=e.clone().multiplyScalar(-.92).addScaledVector(vc,-.39).normalize(),s=Ln.c.clone().addScaledVector(e,Ln.r).addScaledVector(n,-.07).addScaledVector(t,vd(Ln.tube));return{wrist:s,F:si(s,n,t)}}function I_(i,e){const t=2*Ln.A/Ln.period,n=.5*t+e*Ln.shift,s=l=>l<t?-.6+l/t*2*Ln.A:Ln.A-(l-t)/(1-t)*2*Ln.A,r=((i/Ln.period+n)%1+1)%1,o=n%1;return{d:s(r)-s(o),fly:r<t?0:(r-t)/(1-t)}}function U_(i){const e=new it(-.22*i,.2,-1).normalize(),t=new it(.35*i,1,.15),n=t.addScaledVector(e,-e.dot(t)).normalize(),s=new it(.2*i,-.318,-.36);return{wrist:s,F:si(s,e,n),elbow:new it(.31*i,-.56,-.02)}}function N_(i){const e=new zt;e.name="harma-fpRig";const t=new zt;t.name="harma-fp-sway",e.add(t);const n=new zt;n.name="harma-fp-tool",t.add(n);const s=new S0,r=1.2,o=Ee(.17,-.17,-.58,.06,.09,-.05,r).multiply(Ee(0,0,0,-Math.PI/2,0,0)),l=_d(o,r),{P:u,D:f}=l;s.push(o),xd(s),s.pop();const p=l.R.wrist,m=si(p,l.R.f,l.R.u),d=si(l.L.wrist,l.L.f,l.L.u),h=l.R.f.clone().add(new it(-.3,.02,.1)).normalize(),a=l.L.f.clone().add(new it(.42,.4,.12)).normalize(),_=si(p,h,l.R.u),c=new it(.012,.05,.085).applyMatrix4(_),g=new it(0,1,.2).transformDirection(_),v=u(.03,-.122,-.032),b=f(.2,-1,-.6),M=[v,v.clone().addScaledVector(b,.035),v.clone().lerp(c,.5).add(new it(.05,-.06,.02)),c.clone().addScaledVector(g,.035),c];s.add("suit",An(M,110,8,$=>.0066+.0012*Math.sin($*150)),he.rubber),s.add("metal",gn([[-.004,.0085],[-.002,.0112],[.008,.0112],[.01,.0085]],14,!0,!0),he.steel,Ji(c,g).multiply(Ee(0,0,0,Math.PI/2,0,0)));const A=s.build(n,i,"fp"),T=new tn;T.name="harma-muzzle",T.applyMatrix4(si(u(0,md+.006,0),f(0,1,0),f(0,0,1))),t.add(T);const x=($,J)=>($.matrix.copy(J),$.matrixWorldNeedsUpdate=!0,t.add($),$),y={tool:[x(ka(i,"fp-tool-R",1,.9,.25,Ba(m,h),.34),m),x(ka(i,"fp-tool-L",-1,.9,.25,Ba(d,a),.34),d)]},E=Ln.base.map($=>z_($));y.wheel=E.map(($,J)=>{const re=J?-1:1,ye=new it(.44*re,-.5,-.1);return x(ka(i,"fp-wheel-"+"RL"[J],re,.9,.25,Ba($.F,$.wrist.clone().sub(ye).normalize()),.44),$.F)}),y.empty=[1,-1].map($=>{const J=U_($);return x(ka(i,"fp-empty-"+($>0?"R":"L"),$,.32,1,Ba(J.F,J.wrist.clone().sub(J.elbow).normalize()),.34),J.F)});const C=new Gi,P=new Gi;function I($){y.wheel.forEach((J,re)=>{const ye=I_($,re);C.makeRotationZ(ye.d).setPosition(Ln.c.clone().sub(Ln.c.clone().applyAxisAngle(vc,ye.d))),J.matrix.copy(C).multiply(P.makeTranslation(0,0,.035*Math.sin(Math.PI*ye.fly))).multiply(E[re].F),J.matrixWorldNeedsUpdate=!0})}function q($){if(!y[$])return!1;n.visible=$==="tool";for(const[J,re]of Object.entries(y))for(const ye of re)ye.visible=J===$;return!0}q("tool");const L=[0,1,2].map($=>{const J=o.clone().multiply(gd($));return{M:J,inv:J.clone().invert(),parts:(s.tags["claw"+$]||[]).map(([re,ye,ae])=>{const B=A[re].geometry.attributes.position,ee=A[re].geometry.attributes.normal;return{pos:B,nrm:ee,start:ye,cnt:ae,p0:B.array.slice(ye*3,(ye+ae)*3),n0:ee.array.slice(ye*3,(ye+ae)*3)}})}}),O=new Gi,H=new Gi,X=new it;function Z($){for(const J of L){O.copy(J.M).multiply(H.makeRotationZ(-$)).multiply(J.inv);for(const re of J.parts){const ye=re.pos.array,ae=re.nrm.array,B=re.start*3;for(let ee=0;ee<re.cnt*3;ee+=3)X.set(re.p0[ee],re.p0[ee+1],re.p0[ee+2]).applyMatrix4(O),ye[B+ee]=X.x,ye[B+ee+1]=X.y,ye[B+ee+2]=X.z,X.set(re.n0[ee],re.n0[ee+1],re.n0[ee+2]).transformDirection(O),ae[B+ee]=X.x,ae[B+ee+1]=X.y,ae[B+ee+2]=X.z;re.pos.needsUpdate=!0,re.nrm.needsUpdate=!0}}}return{fpRig:e,sway:t,muzzle:T,meshes:A,toolG:n,hands:y,setPose:q,setWheel:I,setClaws:Z}}function Qc(i,e){let t=0;for(;t<i.length-2&&e>i[t+1][0];)t++;const n=i[t],s=i[t+1],r=Tn((e-n[0])/(s[0]-n[0]),0,1),o=l=>(n[l]??0)+((s[l]??0)-(n[l]??0))*r;return{rx:o(1),rz:o(2),cx:o(3),cz:o(4),e:(n[5]??2)+((s[5]??2)-(n[5]??2))*r}}function n0(i,e,t){const n=Qc(i,t),s=Tn((e-n.cx)/n.rx,-.985,.985);return new it(e,t,n.cz-n.rz*(1-Math.abs(s)**n.e)**(1/n.e))}function or(i,e,t){const s=n0(i,e,t),r=n0(i,e+.004,t).sub(s),o=n0(i,e,t+.004).sub(s);return{p:s,n:o.cross(r).normalize()}}function F_(i){const e=i*.17,t=26,n=[],s=f=>e*Math.sin(Math.PI*f**.72)**.8*(1-.22*f)+.0012;for(let f=1;f<t;f++){const p=f/t,m=f%2;n.push([s(p)*(m?1:.8),-i*(.1+.9*p)+(m?0:i*.012)])}const r=new _s;r.moveTo(-.0022,0),r.lineTo(.0022,0),r.lineTo(.0026,-i*.1);for(const[f,p]of n)r.lineTo(f,p);r.lineTo(0,-i*1.02);for(const[f,p]of n.reverse())r.lineTo(-f*.94,p-i*.006);r.lineTo(-.0026,-i*.1),r.closePath();const o=new gr(r,{depth:.0012,bevelEnabled:!0,bevelThickness:.001,bevelSize:8e-4,bevelSegments:1,steps:1}),l=o.attributes.position;for(let f=0;f<l.count;f++){const p=l.getX(f),m=l.getY(f),d=-m/i;l.setZ(f,l.getZ(f)-.32*Math.abs(p)-.012*i/.16*Math.sin(Math.PI*d)*0+.0025)}o.computeVertexNormals();const u=An([[0,.004,.002],[0,-i*.3,.0034],[0,-i*.7,.0034],[0,-i*1,.0026]],14,6,f=>.0021*(1-.75*f)+4e-4);return Ei([xc(o),xc(u)],!1)}function yd(i,e,t,n={}){i.add("suit",oi(e,44,!0,!0),he.suit);const s=e[e.length-1][0];for(const I of[-1,1]){const q=[];for(let O=0;O<=10;O++){const H=O/10,X=t.yBot-.005-H*(n.pipeLen??.26),Z=I*((n.pipeX0??.05)+(n.pipeDx??.07)*Math.sin(H*Math.PI*.5)),{p:$,n:J}=or(e,Z,X);q.push($.addScaledVector(J,.0015))}i.add("suit",An(q,30,8,()=>.0052),he.teal);const L=or(e,I*(n.shX??.12),t.yBot-(n.shDy??.035));i.add("suit",Ft(.03,.022,.006,null,14,8),he.teal,Ji(L.p,L.n))}if(n.panel){const[I,q,L]=n.panel,O=or(e,I,q),H=Ji(O.p,O.n).multiply(Ee(0,0,0,0,0,0,L));i.add("metal",wn(.078,.052,.012,.01,.003),he.gold,H.clone().multiply(Ee(0,0,.002))),i.add("suit",wn(.07,.044,.014,.008,.003),he.suitDim,H.clone().multiply(Ee(0,0,.004))),i.add("suit",wn(.03,.03,.004,.005,.001),he.tealDeep,H.clone().multiply(Ee(-.015,0,.011)));for(let X=0;X<3;X++)i.glow(Ft(.0045,.0045,.0025,null,10,6),En.teal,H.clone().multiply(Ee(.012+X*.0105,.008,.0115)));i.add("metal",wn(.03,.006,.004,.002,.001),he.steel,H.clone().multiply(Ee(.0225,-.009,.0115)))}if(n.belt){const I=n.belt,q=Qc(e,I),L=q.e;i.add("suit",oi([[I-.016,q.rx+.001,q.rz+.001,q.cx,q.cz,L],[I-.012,q.rx+.006,q.rz+.006,q.cx,q.cz,L],[I+.012,q.rx+.006,q.rz+.006,q.cx,q.cz,L],[I+.016,q.rx+.001,q.rz+.001,q.cx,q.cz,L]],44,!1,!1),he.teal)}const r=t.rTop-t.rBot,o=t.yTop-t.yBot,l=Math.hypot(r,o),u=[r/l,o/l],f=[u[1],-u[0]],p=(I,q)=>[t.yBot+o*I+f[1]*q,t.rBot+r*I+f[0]*q],m=.0055*t.g,d=.0018*t.g,h=[p(0,-.004),p(-.02,m*.7),p(.02,m),p(.09,m),p(.125,d),p(.875,d),p(.91,m),p(.98,m),p(1.02,m*.7),p(1,-.004)];i.add("metal",oi(h.map(([I,q])=>[I,q,q,0,t.z0]),56,!1,!1),he.gold),i.add("suit",oi([[t.yTop-.004,t.rTop-.004,t.rTop-.004,0,t.z0],[t.yTop+(n.neckUp??.03),t.rTop-.012,t.rTop-.012,0,t.z0]],32,!1,!0),n.neckCol??he.rubber);const a=(I,q,L=0)=>{const[O,H]=p(q,L),X=Math.cos(I),Z=Math.sin(I);return{p:new it(H*X,O,t.z0+H*Z),n:new it(f[0]*X,f[1],f[0]*Z),up:new it(u[0]*X,u[1],u[0]*Z)}};for(const I of[.27,.73]){const[q,L]=p(I,d);i.add("metal",ai(L,.0016*t.g,5,56),he.goldLight,Ee(0,q,t.z0,Math.PI/2,0,0))}const _=22,c=-Math.PI/2;for(let I=0;I<_;I++){const q=c+(I+.5)/_*Math.PI*2,L=a(q,.5,d);Math.sin(q)>.55||(I%2?i.add("metal",Ft(.0052*t.g,.0052*t.g,.0034*t.g,null,10,6),he.goldLight,Ji(L.p,L.n,L.up)):i.add("metal",new ks(1),he.bronze,Ji(L.p,L.n,L.up).multiply(Ee(0,0,0,0,0,0,.0055*t.g,.0085*t.g,.0032*t.g))))}const g=a(c,.5,d),v=Ji(g.p,g.n,g.up);i.add("metal",new ks(1),he.gold,v.clone().multiply(Ee(0,0,0,0,0,0,.0155*t.g,.0215*t.g,.0045*t.g))),i.add("metal",ai(1,.09,5,4),he.goldLight,v.clone().multiply(Ee(0,0,.0028*t.g,0,0,0,.0125*t.g,.0178*t.g,.012*t.g))),i.glow(new ks(1),En.gem,v.clone().multiply(Ee(0,0,.003*t.g,0,0,0,.0098*t.g,.0145*t.g,.0062*t.g)));const b=a(c,-.02,m*.5),M=b.p.clone().addScaledVector(b.up,-.0115*t.g).addScaledVector(b.n,.002);i.add("metal",ai(.0042*t.g,.0012*t.g,5,12),he.gold,Ji(b.p.clone().addScaledVector(b.up,-.003*t.g),new it(1,0,0))),i.glow(Ft(.0078*t.g,.0078*t.g,.0078*t.g,null,14,10),En.crimson,Ee(M.x,M.y,M.z));const A=M.clone().addScaledVector(b.up,-.0085*t.g),T=n.featherLen??.15;let x;if(n.shelf){const I=L=>{let O=n.shelf[0],H=n.shelf[1];for(let X=0;X<24;X++){const Z=(O+H)/2;n0(e,0,Z).z>L?H=Z:O=Z}return(O+H)/2};A.y=I(A.z)+.007;const q=I(A.z-T*.85);x=or(e,0,q),x.p.y+=.008}else x=or(e,0,A.y-T*(n.featherDrop??.75));const E=x.p.clone().addScaledVector(x.n,.006).sub(A).normalize().clone().negate(),C=x.n.clone().addScaledVector(E,-x.n.dot(E)).normalize(),P=E.clone().cross(C);return{top:A,basis:new Gi().makeBasis(P,E,C).setPosition(A),L:T,yTop:s}}function Md(i,e,t,n){const s=new zt;s.name=n,s.applyMatrix4(e.basis);const r=new ht(F_(e.L),t.feather);return r.name=n+":mesh",r.frustumCulled=!1,s.add(r),i.add(s),r}const O_=[[-.82,.17,.165,0,-.035,2.5],[-.62,.2,.2,0,-.07,2.5],[-.47,.222,.225,0,-.095,2.6],[-.37,.226,.225,0,-.095,2.6],[-.3,.224,.222,0,-.092,2.6],[-.266,.214,.19,0,-.062,2.5],[-.24,.194,.152,0,-.024,2.4],[-.222,.172,.118,0,.006,2.4],[-.196,.1,.09,0,.03,2.1]];function k_(i){const e=new zt;e.name="harma-chest";const t=new S0,n=yd(t,O_,{z0:.03,yTop:-.166,yBot:-.214,rTop:.077,rBot:.135,g:1.55},{featherLen:.19,shelf:[-.3,-.2],pipeLen:.1,pipeX0:.085,pipeDx:.07,shX:.14,shDy:.012,panel:[-.12,-.262,1],belt:-.52,neckUp:.02,neckCol:en(Ne.cardBg,Ne.lotusTeal,.25).multiplyScalar(.6)});t.build(e,i,"chest");const s=Md(e,n,i,"harma-chest-feather");return{chest:e,feather:s}}const dl=new it(0,0,.085),jc=i=>Ee(i*.086,.052,.094,.06,0,-i*.36);function If(i,e,t,n,s,r=9){const o=[];for(let l=0;l<=r;l++){const u=l/r,f=1-u;o.push([n+u*t,i*f**.82*(1-.18*Math.sin(u*Math.PI))+.0012,e*f**.6+.001,0,s-.012*u*u,2])}return oi(o,18,!0,!0)}function B_(i){const e=n=>{const s=he.skin.clone();if(n.z<.02){const r=Math.abs(n.x)-.046,o=(n.y-.003)*1.35,l=Math.hypot(r,o);s.lerp(he.lilac,.85*(1-xs(.024,.046,l))),s.lerp(he.skinWarm,.6*xs(-.03,-.085,n.y))}return s};i.add("skin",Ft(.092,.09,.098,n=>{n.y<0&&(n.x*=1-.36*(-n.y)**1.7),n.x*=1+.1*Math.exp(-(((n.y+.28)/.3)**2)),n.z<0&&(n.z-=.33*Math.exp(-((n.x/.5)**2+((n.y+.47)/.36)**2)))},48,32),e,Ee(dl.x,dl.y,dl.z));for(const n of[-1,1])i.add("skin",Ft(.0245,.0185,.02,null,18,12),he.skin,Ee(n*.0205,-.05,-.034,0,-n*.25,0)),i.add("skin",new Gs(.0034,.013,8),he.tooth,Ee(n*.0135,-.0705,-.04,Math.PI,0,0)),i.add("skin",An([[0,-.038,-.0545],[0,-.05,-.0545],[n*.011,-.0595,-.0515],[n*.027,-.0555,-.044],[n*.036,-.047,-.034]],16,6,s=>.0016*(1-.5*s)),he.liner);i.add("skin",Ft(.021,.0155,.019,null,16,10),he.skin,Ee(0,-.0765,-.022)),i.add("skin",Ft(.0118,.0082,.0085,n=>{n.x*=1+.45*n.y},14,10),he.nose,Ee(0,-.031,-.0495));const t=[];for(let n=0;n<=8;n++){const s=n/8;t.push([-.19+s*.12,.04+.002*Math.sin(s*22)+.01*s,.039+.002*Math.sin(s*22)+.012*s,0,.06+.016*s,2])}i.add("skin",oi(t,24,!1,!1),he.skinWarm);for(const n of[1,-1]){i.push(Ee(n*.046,.002,2e-4,0,-n*.34,n*.2)),i.glow(Ft(.025,.0195,.0088,null,20,12),n>0?En.eyeGreen:En.eyeBlue,Ee(0,0,.002)),i.glow(Ft(.0042,.0165,.004,null,10,10),En.black,Ee(0,0,-.0056)),i.glow(Ft(.0032,.0032,.002,null,8,6),En.white,Ee(n*.008,.008,-.0062));const s=[];for(let r=0;r<20;r++){const o=r/20*Math.PI*2,l=Math.sin(o);s.push([.029*Math.cos(o),.0208*Math.sign(l)*Math.abs(l)**1.25,.0012+.004*Math.cos(o)**2])}i.add("skin",An(s,48,6,()=>.0024,1,!0),he.liner),i.add("skin",An([[-.031,.005,.007],[-.013,.0228,5e-4],[.011,.0238,5e-4],[.032,.009,.008]],16,6,r=>.0034*Math.sin(Math.PI*(.1+.8*r))),he.lilac),i.pop()}for(const n of[-1,1]){i.push(jc(n)),i.add("skin",If(.056,.02,.205,0,0),he.skin),i.add("skin",If(.043,.012,.165,.012,-.0125),s=>he.teal.clone().lerp(he.skin,.45*xs(.03,.17,s.y)).lerp(he.tealDeep,.35*(1-xs(.012,.06,s.y))));for(const[s,r]of[[.03,.0125],[.052,.0105]])i.add("metal",ai(r,.0027,6,18),he.gold,Ee(n*(.056*(1-s/.205)**.82+.001),s,-.004,0,n*.5,0));i.pop(),i.add("metal",An([[n*.108,.07,.07],[n*.128,.03,.02],[n*.132,-.03,-.02],[n*.112,-.078,-.045],[n*.088,-.086,-.052],[n*.082,-.068,-.05],[n*.094,-.06,-.047]],40,6,s=>.0021*(1-.6*s)),he.gold),i.add("metal",An([[n*.034,-.047,-.044],[n*.07,-.038,-.058],[n*.104,-.046,-.052],[n*.116,-.07,-.044],[n*.104,-.08,-.042]],32,6,s=>.0017*(1-.65*s)),he.goldLight),i.add("metal",An([[n*.036,-.056,-.042],[n*.062,-.066,-.054],[n*.078,-.09,-.05],[n*.068,-.104,-.046]],28,6,s=>.0016*(1-.65*s)),he.goldLight)}}function bd(i,e){const l=Math.cos(i),u=Math.sin(i);let f,p;if(e<=.7){const _=e/.7*1.5;f=Math.sin(_),p=Math.cos(_)}else{const _=(e-.7)/.3,c=u<0?.3+.2*(-u)**2:.3*(1-.75*u);f=Math.sin(1.5)+c*_,p=Math.cos(1.5)-.2*_*(.4+.6*_)}const m=.099*f*l,d=.088+.11*f*u,h=Math.abs(m)/.099;let a=.047+.086*p;return a-=.062*Math.max(0,h-.3)**1.2*e*e*(u<.3?1:1-.6*xs(.3,1,u)),a+=.02*Math.exp(-((m/.022)**2))*(.45+.55*e)*(u<.4?1:.5),[m,a,d]}function G_(){const t=[],n=[];for(let r=0;r<=16;r++)for(let o=0;o<44;o++)t.push(...bd(o/44*Math.PI*2,r/16));for(let r=0;r<16;r++)for(let o=0;o<44;o++){const l=r*44+o,u=(r+1)*44+o,f=r*44+(o+1)%44,p=(r+1)*44+(o+1)%44;n.push(l,f,u,u,f,p)}const s=new kt;return s.setAttribute("position",new at(t,3)),s.setIndex(n),ud(s)}function V_(i){i.add("metal",G_(),o=>he.steel.clone().lerp(he.bronze,Tn(.25+.75*Math.exp(-((o.x/.05)**2))+(o.y<.03?.35:0),0,1)),null);const e=new _s;e.moveTo(-.07,.062),e.quadraticCurveTo(-.045,.108,-.012,.14),e.quadraticCurveTo(.008,.152,.03,.142),e.quadraticCurveTo(.075,.14,.1,.1),e.lineTo(.1,.08),e.quadraticCurveTo(.06,.122,.02,.128),e.quadraticCurveTo(-.03,.115,-.06,.06),e.closePath(),i.add("metal",gc(e,.004,.0035,10),he.gold,Ee(0,0,.088-.012,0,-Math.PI/2,0)),i.add("metal",oi([[.128,.0125,.034,0,.076,1.35],[.16,.009,.02,0,.076,1.35],[.205,.005,.009,0,.076,1.35],[.252,6e-4,6e-4,0,.076,2]],12,!1,!0),he.gold);const t=[];for(let o=0;o<=24;o++)t.push(bd(Math.PI+o/24*Math.PI,1));i.add("metal",An(t,60,6,()=>.0036),he.gold);for(const o of[-1,1]){i.add("metal",An([[o*.118,-.012,.03],[o*.124,-.06,.018],[o*.112,-.112,.016],[o*.085,-.15,.02]],20,8,u=>.0085*(1-.25*u),.3),he.steel),i.add("metal",Ft(.0095,.014,.004,null,10,8),he.gold,Ee(o*.1235,-.058,.012,0,-o*.4,0)),i.add("metal",Ft(.007,.01,.0035,null,10,8),he.gold,Ee(o*.113,-.108,.0105,0,-o*.4,o*.3)),i.push(jc(o));const l=[];for(let u=0;u<=10;u++){const f=u/10,p=1-f;l.push([-.004+f*.245,.069*p**.85+.003,.042*p**.7+.003,0,-.004-.012*f*f,2])}i.add("glass",oi(l,20,!1,!0),he.white),i.add("metal",oi([[-.02,.07,.044,0,-.004],[-.014,.0755,.049,0,-.004],[-.002,.0755,.049,0,-.004],[.004,.0705,.0445,0,-.004]],28,!1,!1),he.bronze),i.pop()}const n=new it(0,-.035,.05),s=.156,r=new Xi(s,36,20,Math.PI*.88,Math.PI*1.24,.98,Math.PI-.98-.42);i.add("glass",r,he.white,Ee(n.x,n.y,n.z))}const Sd=1.18,Go=[[-.74,.15,.12,0,.066,2.6],[-.66,.152,.122,0,.066,2.6],[-.6,.14,.11,0,.064,2.5],[-.52,.15,.116,0,.06,2.6],[-.4,.172,.128,0,.056,2.7],[-.3,.176,.122,0,.058,2.6],[-.248,.156,.098,0,.064,2.3],[-.212,.104,.077,0,.066,2.1],[-.19,.064,.06,0,.066,2]],H_=.192,wd=i=>new it(i*H_,-.278,.062),_c=Ee(.045,-.5,-.34,-.07,.16,-.04).multiply(Ee(0,0,0,-Math.PI/2,0,0)),Td={R:new it(.285,-.5,-.005),L:new it(-.225,-.475,-.12)},yt={w:.4,h:.43,d:.15,y:-.395,z:.25,tankX:.152,tankY:-.262,tankZ:.292,tankR:.054,tankL:.28};function W_(i){const e=new it(0,1,0);i.add("suit",wn(yt.w,yt.h,yt.d,.06,.022),he.suit,Ee(0,yt.y,yt.z)),i.add("suit",wn(.2,.25,.03,.03,.008),he.suitDim,Ee(0,yt.y-.02,yt.z+yt.d/2+.006)),i.add("suit",wn(.25,.05,.11,.02,.01),he.teal,Ee(0,yt.y+yt.h/2+.004,yt.z));for(const l of[-1,1]){i.push(Ee(l*yt.tankX,yt.tankY,yt.tankZ)),i.add("metal",new so(yt.tankR,yt.tankL,4,14),he.steel);for(const m of[-.1,.085])i.add("metal",gn([[m-.011,yt.tankR],[m-.008,yt.tankR+.004],[m+.008,yt.tankR+.004],[m+.011,yt.tankR]],18),he.gold);i.add("suit",Ft(yt.tankR*.94,.03,yt.tankR*.94,null,16,8),he.teal,Ee(0,yt.tankL/2+.03,0)),i.add("metal",gn([[0,.016],[.022,.016],[.026,.02],[.034,.02],[.036,.012]],12,!1,!0),he.gold,Ee(0,yt.tankL/2+.05,0)),i.pop(),i.add("suit",wn(.02,.2,.085,.008,.005),he.teal,Ee(l*(yt.w/2+.002),yt.y-.06,yt.z-.005));const u=new it(l*.06,yt.y+yt.h/2+.02,yt.z+.01),f=new it(l*.079,-.203,.118),p=[u,u.clone().add(new it(l*.022,.034,-.012)),new it(l*.132,-.138,.2),new it(l*.153,-.16,.135),f.clone().add(new it(l*.042,.012,.02)),f];i.add("suit",An(p,66,8,m=>.0128+.0024*Math.sin(m*138)),he.rubber),i.add("metal",gn([[-.012,.014],[-.008,.019],[.012,.019],[.016,.014]],14,!0,!0),he.gold,Ee(u.x,u.y,u.z)),i.add("metal",Ft(.02,.02,.02,null,12,8),he.gold,Ee(f.x,f.y,f.z))}const t=-.6,n=Qc(Go,t);i.add("suit",oi([[t-.024,n.rx+.002,n.rz+.002,0,n.cz,n.e],[t-.02,n.rx+.008,n.rz+.008,0,n.cz,n.e],[t+.02,n.rx+.008,n.rz+.008,0,n.cz,n.e],[t+.024,n.rx+.002,n.rz+.002,0,n.cz,n.e]],44,!1,!1),he.rubber);const s=or(Go,0,t),r=Ji(s.p,s.n);i.add("metal",wn(.062,.05,.016,.01,.004),he.gold,r.clone().multiply(Ee(0,0,.012))),i.glow(new ks(1),En.teal,r.clone().multiply(Ee(0,0,.021,0,0,0,.012,.016,.005)));for(const l of[-1,1]){const u=or(Go,l*.096,t-.012);i.add("suit",wn(.056,.07,.03,.01,.006),he.suitDim,Ji(u.p,u.n).multiply(Ee(0,0,.018))),i.add("metal",Ft(.006,.006,.004,null,10,6),he.gold,Ji(u.p,u.n).multiply(Ee(0,.012,.034)))}const o=_d(_c,1);i.push(_c),xd(i),i.pop();for(const[l,u]of[["R",1],["L",-1]]){const f=o[l],p=Td[l],m=wd(u),d=f.wrist.distanceTo(p),h=p.clone().sub(m).normalize();i.push(si(f.wrist,f.f,f.u)),dd(i,u,.9,.25),i.pop(),i.push(si(f.wrist,f.wrist.clone().sub(p).normalize(),f.u)),pd(i,d),i.pop(),i.add("suit",Ft(.06,.06,.06,null,16,10),he.suit,Ee(p.x,p.y,p.z)),i.add("metal",ai(.058,.0042,6,24),he.gold,si(p.clone().addScaledVector(h,-.034),h,e));const a=m.clone().lerp(p,.5).add(new it(u*.014,0,.012));i.add("suit",An([m,a,p],24,14,_=>.066-.009*_+(_>.6&&_<.93?.0038*Math.sin((_-.6)*105):0)),he.suit),i.add("suit",Ft(.082,.074,.08,null,18,12),he.suit,Ee(m.x+u*.004,m.y+.012,m.z)),i.add("suit",ai(.068,.0095,8,28),he.teal,si(m.clone().addScaledVector(h,.072),h,e)),i.add("metal",ai(.0672,.0046,6,28),he.gold,si(m.clone().addScaledVector(h,.089),h,e)),i.add("metal",ai(.079,.0046,6,28),he.gold,si(m.clone().add(new it(-u*.03,.006,0)),new it(u,.25,0).normalize(),e)),i.add("suit",Ft(.032,.032,.008,null,14,8),he.teal,Ee(m.x+u*.08,m.y+.016,m.z-.012,0,u*1.25,0))}}function X_(){const i=[[.03,-.64,.2],[-.1,-.63,.25],[-.235,-.55,.24],[-.315,-.4,.2],[-.325,-.22,.18],[-.285,-.06,.17],[-.3,.1,.17]],e=new Vs(i.map(o=>new it(...o)),!1,"centripetal"),t=[],n=(o,l,u,f,p=18)=>{const m=An(o,p+8,10,a=>l*Math.sin(Math.PI*(.08+.92*a**.55))**.9*(1-a)**.55+5e-4,.8,!1,f?.75:.25),d=m.attributes.position.count,h=new Float32Array(d).fill(u);m.setAttribute("phase",new an(h,1)),t.push(m)};n(i,.08,0,0,30),[[.2,[-.05,.14,.02],[-.02,.26,0],.055,1.3],[.33,[-.07,.15,0],[-.04,.3,-.02],.064,2.6],[.46,[-.06,.16,.02],[0,.34,.01],.068,4.1],[.58,[-.05,.14,-.01],[-.075,.27,0],.058,5.3],[.7,[.04,.12,.01],[.03,.25,.02],.05,.7],[.4,[.06,.1,-.03],[.09,.23,-.03],.05,3.4],[.82,[-.06,.09,0],[-.03,.2,0],.042,2]].forEach(([o,l,u,f,p],m)=>{const d=e.getPointAt(o),h=e.getTangentAt(o);n([d.clone().addScaledVector(h,-.05),d.clone().addScaledVector(h,.01),d.clone().add(new it(...l)),d.clone().add(new it(...u))],f,p,m%2,16)});const r=Ei(t,!1);return r.deleteAttribute("normal"),r.computeVertexNormals(),{geo:r,center:new it(-.27,-.22,.2)}}function q_(i){const e=new zt;e.name="harma-mirror";const t=new S0;t.push(Ee(0,0,0,0,0,0,Sd)),B_(t),V_(t),t.pop();const n=yd(t,Go,{z0:.066,yTop:-.138,yBot:-.19,rTop:.057,rBot:.086,g:1},{featherLen:.15,featherDrop:.8,pipeLen:.2,pipeX0:.05,pipeDx:.085,shX:.105,shDy:.045,panel:[-.092,-.385,1.3],neckUp:.012});W_(t),t.build(e,i,"mirror");const s=Md(e,n,i,"harma-mirror-feather"),r=X_(),o=new ht(r.geo,i.flame);o.name="mirror:flame",o.frustumCulled=!1,e.add(o);const l=new tn;return l.name="harma-flame",l.position.copy(r.center),e.add(l),{mirror:e,feather:s,flame:l,flameMesh:o,flameBase:r.geo.attributes.position.array.slice()}}function Y_(){const i=[],e=(r,o)=>{const l=r.index?r.toNonIndexed():r.clone();for(const u of Object.keys(l.attributes))u!=="position"&&u!=="normal"&&l.deleteAttribute(u);l.attributes.normal||l.computeVertexNormals(),o&&(l.applyMatrix4(o),o.determinant()<0&&fd(l)),i.push(l)},t=Ee(0,0,0,0,0,0,Sd);e(new Xi(1,12,8),t.clone().multiply(Ee(0,.022,.085,0,0,0,.116,.108,.115))),e(new cn(.105,.15,.03,12),t.clone().multiply(Ee(0,.02,.07)));for(const r of[-1,1]){e(new Gs(1,1,7),t.clone().multiply(jc(r)).multiply(Ee(0,.11,0,0,0,0,.066,.25,.03)));const o=wd(r),l=Td[r>0?"R":"L"],u=new it(r>0?.06:-.07,r>0?-.45:-.56,r>0?-.1:-.36);for(const[f,p,m]of[[o,l,.06],[l,u,.05]]){const d=new Gi().makeRotationFromQuaternion(new jt().setFromUnitVectors(new it(0,1,0),p.clone().sub(f).normalize())).setPosition(f.clone().lerp(p,.5));e(new cn(m,m,f.distanceTo(p),7),d)}e(new Xi(.076,8,6),Ee(o.x,o.y,o.z)),e(new so(yt.tankR,yt.tankL,3,7),Ee(r*yt.tankX,yt.tankY,yt.tankZ))}e(new xn(yt.w,yt.h,yt.d),Ee(0,yt.y,yt.z)),e(new xn(.11,.42,.11),_c.clone().multiply(Ee(0,.03,0))),e(new Gs(.02,.13,5),t.clone().multiply(Ee(0,.19,.078))),e(new xn(.012,.03,.16),t.clone().multiply(Ee(0,.135,.09))),e(new cn(.058,.088,.14,10),Ee(0,-.13,.068)),e(oi(Go,12,!0,!0));const n=Ei(i,!1),s=new ht(n,new fi({color:0}));return s.name="harma-shadow",s}function Ga(i){let e=0,t=0;return(function n(s){if(s.visible){if(s.isMesh){e++;const r=s.geometry;t+=(r.index?r.index.count:r.attributes.position.count)/3}for(const r of s.children)n(r)}})(i),{draws:e,tris:Math.round(t)}}function $_(){const i=D_(),e=N_(i),t=k_(i),n=q_(i),s=Y_(),r=he.teal.clone(),o=en(Ne.flame,Ne.gold,.5),l=en(Ne.flame,16777215,.3),u=he.glowTeal.clone().multiplyScalar(.7),f=rn(Ne.flame),p=en(Ne.flame,16722432,.75),m=rn(16722432).lerp(rn(Ne.deepViolet),.15),d=en(Ne.turquoise,16777215,.2),h=en(Ne.flame,16765562,.35),a=n.flameMesh.geometry.attributes.position,_=n.flameMesh.geometry.attributes.uv,c=n.flameMesh.geometry.attributes.phase,g=i.flame.map,v=i.glow.emissiveMap,b=new Ue;let M=0,A=-1,T="tool";const x=(P,I,q)=>{b.copy(I).multiplyScalar(Math.max(0,q)*1.1/mc).convertLinearToSRGB();const L=v.image.data,O=P*4,H=Math.round(Tn(b.r,0,1)*255),X=Math.round(Tn(b.g,0,1)*255),Z=Math.round(Tn(b.b,0,1)*255);(L[O]!==H||L[O+1]!==X||L[O+2]!==Z)&&(L[O]=H,L[O+1]=X,L[O+2]=Z,v.needsUpdate=!0)};function y(P){return e.setPose(P)?(T=P,!0):!1}function E(P,I={}){const q=Tn(I.wake??0,0,1),L=Tn(I.heat??0,0,1),O=I.mode==="cut",H=Tn(I.hold??0,0,1),X=Tn(I.fire??0,0,1);I.pose&&I.pose!==T&&y(I.pose);const Z=T==="wheel"?.2:T==="empty"?1.6:1;e.sway.position.set(.0012*Z*Math.sin(P*.83+.4),.0034*Z*Math.sin(P*1.55),.0016*Z*Math.sin(P*1.55+1.1)),e.sway.rotation.set(.0048*Z*Math.sin(P*1.55+.7),.0032*Z*Math.sin(P*.83),.0052*Z*Math.sin(P*1.1+.5)),T==="wheel"&&e.setWheel(I.wheel??0);const $=Math.round(H*24);$!==A&&(A=$,e.setClaws($/24*.36)),O?x(En.coil,b.copy(h),1.25+.9*X*(.9+.1*Math.sin(P*31))):x(En.coil,b.copy(he.glowTeal).lerp(d,.35*H),.72+.5*H*(.88+.12*Math.sin(P*19))+.18*X),O?(i.lens.emissive.copy(o).lerp(l,X),i.lens.emissiveIntensity=1.9+2.4*X*(1+.13*Math.sin(P*31)*Math.sin(P*7.3))):(i.lens.emissive.copy(r),i.lens.emissiveIntensity=1.4+.12*Math.sin(P*2.4)+1*H),L<.5?b.copy(u).lerp(f,L*2):b.copy(f).lerp(p,L*2-1),x(En.heat,b,.5+1.45*L+(L>.85?.6*Math.sin(P*14):0)),x(En.hot,b.copy(m).lerp(f,xs(.55,1,L)*.7),1.7*xs(.25,1,L)*(.9+.1*Math.sin(P*6.3))+.35*X*(O?1:0));const J=.055*Math.sin(P*1.3)+.02*Math.sin(P*2.9+1);for(const B of[t.feather,n.feather])B.rotation.z=J,B.rotation.x=.012*Math.sin(P*1.7+.6);const re=a.array,ye=n.flameBase;for(let B=0;B<a.count;B++){const ee=_.getX(B),xe=c.getX(B),ze=ee*ee,te=B*3,be=q*.012*Math.sin(P*23+xe*3+ee*11),ue=q*.016*Math.sin(P*17+xe*5+ee*7);re[te]=ye[te]+(.024*Math.sin(P*2.6+xe+ee*5)+be)*ze,re[te+1]=ye[te+1]+(.02*Math.sin(P*1.9+xe*1.3)+ue)*ze,re[te+2]=ye[te+2]+.016*Math.cos(P*2.1+xe*1.7+ee*4)*ze}a.needsUpdate=!0;const ae=Math.round(q*32);ae!==M&&(M=ae,hd(g.image.data,ae/32),g.needsUpdate=!0),i.flame.emissiveIntensity=1.05+.12*Math.sin(P*5.1)+q*(.35+.25*Math.sin(P*29))}E(0,{wake:0,mode:"grip",heat:0});const C={};for(const P of["wheel","empty","tool"])e.setPose(P),C[P]=Ga(e.fpRig);return{fpRig:e.fpRig,chest:t.chest,mirror:n.mirror,shadow:s,muzzle:e.muzzle,flame:n.flame,materials:i,update:E,setPose:y,wheel:{center:Ln.c.clone(),radius:Ln.r,tube:Ln.tube,base:Ln.base.slice()},counts:{fpRig:C.tool,fpByPose:C,chest:Ga(t.chest),mirror:Ga(n.mirror),shadow:Ga(s)}}}const Z_=Object.freeze(Object.defineProperty({__proto__:null,buildHarma:$_},Symbol.toStringTag,{value:"Module"})),K_=Object.assign({"./harma/model.js":Z_}),J_=[.17,-.26,0,0,0,-.3];function Q_(i,e){const t=Object.values(K_)[0]?.buildHarma,n=t?t():null,s=new zt;i.add(s);const r=new Ue(16754250),o=new Ue(Ne.neonViolet),l=new Ue,u=new Yc(r,0,6.5,1.5);u.position.set(-.34,-.38,.5),s.add(u),n&&(e.add(n.fpRig),s.add(n.chest,n.mirror,n.shadow),n.fpRig.traverse(p=>{p.layers.set(1),p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0,p.frustumCulled=!1)}),n.chest.traverse(p=>{p.layers.set(1),p.isMesh&&(p.receiveShadow=!0)}),n.chest.visible=!1,n.mirror.traverse(p=>p.layers.set(2)),n.shadow.material=new fi({colorWrite:!1,depthWrite:!1}),n.shadow.castShadow=!0,n.shadow.frustumCulled=!1,n.materials.suit&&n.materials.suit.color.setScalar(.72));let f="tool";return{model:n,body:s,tail:u,muzzle:n?n.muzzle:null,setPose(p){p!==f&&(f=p,n&&n.setPose&&n.setPose(p))},pose:()=>f,setTier(p){n&&(n.shadow.castShadow=p!=="lite")},showChest(p){n&&(n.chest.visible=!!p)},update(p,m,d={}){const h=d.wake||0,a=d.inspect||0;Sn(s,m.x,m.y,m.z,m.yaw),s.updateMatrixWorld(!0);const _=1+.06*Math.sin(p*9.1)*Math.sin(p*4.3)+h*.4*Math.sin(p*37)*Math.sin(p*23.3);if(l.copy(r).lerp(o,h*(.4+.25*Math.sin(p*3.1))),u.color.copy(l),u.intensity=2.1*_,n){n.fpRig.visible=d.rig!==0&&d.rig!==!1;const c=d.lower||0,g=d.low||J_;n.fpRig.position.set(-.05*a+c*g[0],.05*a+c*g[1],.05*a+c*g[2]),n.fpRig.rotation.set(.08*a+c*g[3],.22*a+c*g[4],.05*a+c*g[5]),n.update(p,{wake:h,mode:d.mode||"grip",heat:d.heat||0,hold:d.hold||0,fire:d.fire||0,wheel:d.wheel||0,pose:d.pose||"tool"})}}}}const Hr=["lite","medium","high"],Ed={high:{msaa:2,bloom:!0,hdr:!0,spots:3,shadowSpots:3,shadowSize:1024,points:3,shadowsPerFrame:3,mirror:1,mirrorWorld:!0,prepass:!0,env:!0,uzor:2,sunSteps:24,particles:1,shafts:!0,minPixels:1280*720},medium:{msaa:0,bloom:!0,hdr:!0,spots:2,shadowSpots:2,shadowSize:512,points:2,shadowsPerFrame:1,mirror:.5,mirrorWorld:!0,prepass:!0,env:!0,uzor:1,sunSteps:12,particles:.5,shafts:!0,minPixels:960*540},lite:{msaa:0,bloom:!1,hdr:!0,spots:2,shadowSpots:0,shadowSize:512,points:1,shadowsPerFrame:0,mirror:0,mirrorWorld:!1,prepass:!1,env:!0,uzor:0,sunSteps:0,particles:.25,shafts:!1,minPixels:640*360}},j_=1920*1080,Uf=50,pl=30,ey=57,Va=.85;function Eo(i,e,t){return Math.min(t,Math.sqrt(j_/Math.max(1,i*e)))}class ty{constructor({cssW:e,cssH:t,dpr:n,tier:s="high",lockTier:r=!1,lockScale:o=0,maxScale:l=0}={}){this.tier=s,this.lockTier=r,this.lockScale=o,this.resize(e,t,n,l),this.scale=o||Math.min(this.maxScale,Eo(e,t,n)),this.win=[],this.acc=0,this.hold=1.5,this.goodWindows=0,this.ceilScale=1/0,this.ceilUntil=0,this.ceilFails=0,this.tierFailUntil=0,this.t=0,this.fps=0,this.ms=0,this.changes=[]}resize(e,t,n,s=0){this.cssW=e,this.cssH=t,this.dpr=n,this.maxScale=s||Math.min(n,2),this.scale&&(this.scale=Math.min(this.scale,this.maxScale))}minScale(){return Math.min(this.maxScale,Math.sqrt(Ed[this.tier].minPixels/Math.max(1,this.cssW*this.cssH)))}pixels(){return Math.round(this.cssW*this.scale)*Math.round(this.cssH*this.scale)}_log(e){this.changes.push({t:+this.t.toFixed(1),what:e,tier:this.tier,scale:+this.scale.toFixed(3),fps:+this.fps.toFixed(1)}),this.changes.length>40&&this.changes.shift()}_tierDown(){const e=Hr.indexOf(this.tier);return this.lockTier||e<=0?!1:(this.tier=Hr[e-1],this.scale=Math.min(this.maxScale,Eo(this.cssW,this.cssH,this.dpr)),this.ceilScale=1/0,this.hold=2.5,this._log("ступень вниз"),!0)}_tierUp(){const e=Hr.indexOf(this.tier);return this.lockTier||e>=Hr.length-1||this.t<this.tierFailUntil?!1:(this.prevTier=this.tier,this.triedUpAt=this.t,this.tier=Hr[e+1],this.scale=Math.max(this.minScale(),Math.min(this.maxScale,Eo(this.cssW,this.cssH,this.dpr))*Va*Va),this.ceilScale=1/0,this.hold=2.5,this._log("ступень вверх"),!0)}frame(e){if(this.t+=e,e>.5){if(this.longRun=(this.longRun||0)+1,this.longRun<2)return!1;e=Math.min(e,2)}else this.longRun=0;if(this.hold>0)return this.hold-=e,this.win.length=0,this.acc=0,!1;if(this.win.push(e),this.acc+=e,this.acc<.5&&!(this.win.length>=4&&this.acc/this.win.length>1/pl))return!1;const t=this.win.slice().sort((o,l)=>o-l),n=t[t.length>>1];this.win.length=0,this.acc=0,this.ms=n*1e3,this.fps=1/n;const s=this.tier+this.scale,r=this.minScale();if(this.fps<Uf)if(this.goodWindows=0,this.triedUpAt!==void 0&&this.t-this.triedUpAt<8&&this.prevTier)this.tier=this.prevTier,this.prevTier=null,this.tierFailUntil=this.t+60,this.scale=Math.min(this.maxScale,Eo(this.cssW,this.cssH,this.dpr)),this.hold=2.5,this._log("ступень вверх не удержалась, назад");else if(!this.lockScale&&this.scale>r*1.001){this.ceilScale=this.scale,this.ceilFails++,this.ceilUntil=this.t+Math.min(600,20*2**(this.ceilFails-1));const o=this.fps<pl?Math.max(.5,Math.sqrt(this.fps/(Uf*1.15))):Va;this.scale=Math.max(r,this.scale*o),this.hold=.6,this._log(this.fps<pl?"ниже 30: масштаб вниз сразу":"масштаб вниз")}else this._tierDown();else if(this.fps>=ey){if(this.goodWindows++,this.goodWindows>=3){this.goodWindows=0,this.prevTier&&this.t-this.triedUpAt>=8&&(this.prevTier=null);const o=Math.min(this.maxScale,Eo(this.cssW,this.cssH,this.dpr)),l=Math.min(this.maxScale,this.scale/Va),u=l>=this.ceilScale*.999&&this.t<this.ceilUntil;this.scale>=o*.999&&this._tierUp()||!this.lockScale&&l>this.scale*1.001&&!u&&(this.scale=l,this.hold=.6,this._log("масштаб вверх"))}}else this.goodWindows=0;return s!==this.tier+this.scale}}function ny(i,{seed:e=1,bench:t=!1}={}){i.shadowMap.enabled=!0,i.shadowMap.type=No,i.toneMapping=ns,i.autoClear=!1,i.info.autoReset=!1;const n=new sc;n.fog=new Fc(461585,.01);const s=new Ko(i),r=s.fromScene(new Fv,.04).texture;s.dispose(),n.environmentIntensity=.06;const o=new zm(9417983,1712176,.2);n.add(o);const l=new ii(70,window.innerWidth/window.innerHeight,.06,1500);l.layers.enable(1),n.add(l);const u=new r_(n,{spots:3,points:3}),f=v_(e,u);n.add(f.group);const p=y_(f.fx,e);n.add(p.group);const m=S_(f.fx.sun);n.add(m);const d=(Te.z0+Te.z1)/2,{sky:h,asteroid:a}=M_(e),_=Wi(d);h.userData.room="corridor",h.position.copy(dn(Te.x-.3,1.5,d));const c=dn(...f.fx.sun.pos),g=dn(...f.fx.sun.to).sub(c).normalize();Si.uSunPos.value.copy(c),Si.uSunDir.value.copy(g);const v=g.clone().negate();h.children[1].position.copy(v).multiplyScalar(900),a.material.uniforms.uSun.value=v,a.position.set(-430,14,-250).applyQuaternion(_),a.quaternion.premultiply(_),n.add(h);const b=new Jn(16,16,{type:Ai}),M=b_(b);n.add(M.mesh);const A=new ii,T=new sc,x=new fi({colorWrite:!1,polygonOffset:!0,polygonOffsetFactor:.5,polygonOffsetUnits:1});f.group.updateMatrixWorld(!0);const y=new dt;f.group.traverse(Ae=>{if(Ae.isMesh&&Ae.material.userData.room&&Ae.matrixWorld.equals(y)){const ve=new ht(Ae.geometry,x);ve.userData.room=Ae.parent.userData.room,T.add(ve)}});const E=Q_(n,l),C=p_(i,n,l,T);t&&(u.forceShadows=!0);const P={};let I=null,q="";const L=new Le;function O(){C.configure({msaa:I.msaa,bloom:I.bloom,hdr:I.hdr,prepass:I.prepass,ldr:I.ldr,bloomFrom:I.bloomFrom}),i.getDrawingBufferSize(L),b.setSize(Math.max(16,Math.round(L.x*(I.mirror||.01))),Math.max(16,Math.round(L.y*(I.mirror||.01))))}function H(Ae){q=Ae,I={...Ed[Ae],...P},u.setTier(I),E.setTier(I.shadowSpots?Ae:"lite"),n.environment=I.env?r:null,Io.uUzQ.value=I.uzor,Io.uUzOff.value=I.noUzor?1:0,m.material.uniforms.uSteps.value=Math.max(1,I.sunSteps),Si.uKeep.value=I.particles,p.shaftGroup.visible=I.shafts,A.layers.set(2),I.mirrorWorld&&A.layers.enable(0),O()}function X(Ae){i.setPixelRatio(Ae),i.setSize(window.innerWidth,window.innerHeight),l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),O()}const Z={airlock:{fog:461586,sky:9417983,ground:1449002,hemi:.2,tint:[.95,1,1.07]},corridor:{fog:461585,sky:8363992,ground:1843240,hemi:.17,tint:[.96,1,1.05]},bay:{fog:1116934,sky:16756848,ground:2759696,hemi:.19,tint:[1.06,1,.92]},gallery:{fog:329484,sky:7311312,ground:1053724,hemi:.14,tint:[.94,1,1.08]}},$={fog:657174,sky:8019199,ground:801344,hemi:.22,tint:new Y(.9,.98,1.1)},J={fog:new Ue(461585),sky:new Ue(9417983),ground:new Ue(1449002),hemi:.2,tint:new Y(1,1,1)},re=new Ue,ye=new Ue,ae=new Y,B=new Ue,ee=new Ue(Ne.turquoise),xe=new Ue(Ne.neonViolet);function ze(Ae,ve,je){const Be=Z[Ae]||Z.corridor;J.fog.lerp(re.set(Be.fog).lerp(ye.set($.fog),ve),je),J.sky.lerp(re.set(Be.sky).lerp(ye.set($.sky),ve),je),J.ground.lerp(re.set(Be.ground).lerp(ye.set($.ground),ve),je),J.hemi+=(Be.hemi+($.hemi-Be.hemi)*ve-J.hemi)*je,J.tint.lerp(ae.set(...Be.tint).lerp($.tint,ve),je),n.fog.color.copy(J.fog),o.color.copy(J.sky),o.groundColor.copy(J.ground),o.intensity=J.hemi,C.uniforms.uTint.value.copy(J.tint)}const te=new Y,be=new Y,ue=new Y,Me=new dt,qe=new Y,$e=new jr,pe=new dt;function we(Ae){return!I.mirror||Ae.x>2.1||Math.abs(Ae.z-d)>13||(l.getWorldPosition(qe),be.subVectors(M.center,qe).dot(M.normal)>0)?!1:(pe.multiplyMatrices(l.projectionMatrix,l.matrixWorldInverse),$e.setFromProjectionMatrix(pe),$e.intersectsObject(M.mesh))}const Re=[M.mesh,m,h];function Oe(){be.subVectors(M.center,qe).reflect(M.normal).negate().add(M.center),Me.extractRotation(l.matrixWorld),ue.set(0,0,-1).applyMatrix4(Me).add(qe),ue.subVectors(M.center,ue).reflect(M.normal).negate().add(M.center),A.position.copy(be),A.up.set(0,1,0).applyMatrix4(Me).reflect(M.normal),A.lookAt(ue),A.near=.1,A.far=60,A.updateMatrixWorld(),A.projectionMatrix.copy(l.projectionMatrix),M.mat.uniforms.uTexM.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(A.projectionMatrix).multiply(A.matrixWorldInverse);const Ae=Re.map(ve=>ve.visible);Re.forEach(ve=>{ve.visible=!1}),i.setRenderTarget(b),i.setClearColor(0,1),i.clear(),i.render(n,A),i.setRenderTarget(null),Re.forEach((ve,je)=>{ve.visible=Ae[je]})}const Se={airlock:!0,corridor:!0,bay:!0,gallery:!0};let Ze="";function He(Ae,ve){const je=ja(Ae.x,Ae.z),Be=(ve.hatch??1)>.02,Ye=(ve.door??1)>.02,G=(ve.seal??0)>.02;Se.airlock=je==="airlock"||je==="corridor"&&Be&&Ae.z>-18,Se.corridor=je==="corridor"||je==="airlock"&&Be||je==="bay"&&Ye,Se.bay=je==="bay"||je==="gallery"||je==="corridor"&&Ye&&Ae.z<-10,Se.gallery=je==="gallery"||je==="bay"&&G;const U=`${+Se.airlock}${+Se.corridor}${+Se.bay}${+Se.gallery}`;U!==Ze&&(Ze=U,u.dirty.fill(!0));const oe=R=>{const w=R.userData.room;w&&(R.visible=(w==="hatch"?Se.airlock||Se.corridor:Se[w])&&R.userData.show!==!1)};n.children.forEach(oe),f.group.children.forEach(oe),T.children.forEach(oe)}const st={shadows:0,mirror:!1},rt={x:1e9,z:0,yaw:0,pitch:0,hatch:-1},ct=[],Q=[];function It(Ae,ve){const je=ve.t,Be=ve.wake||0;i.info.reset(),Sn(l,Ae.x,Ae.y,Ae.z,Ae.yaw,Ae.pitch),ve.roll&&l.rotateZ(ve.roll),l.updateMatrixWorld(),f.dynamic.hatch.set(ve.hatch??1),Io.uWake.value=Be,Io.uTime.value=je,Si.uTime.value=je,Si.uPx.value=i.getDrawingBufferSize(te).y,C.uniforms.uTime.value=je,C.uniforms.uWake.value=Be,C.uniforms.uHurt.value=ve.hurt||0,C.uniforms.uFade.value=ve.fade??1,ze(ja(Ae.x,Ae.z),Be,t?1:.06),(Math.abs(Ae.x-rt.x)+Math.abs(Ae.z-rt.z)>.02||Math.abs(Ae.yaw-rt.yaw)+Math.abs(Ae.pitch-rt.pitch)>.01)&&(u.touch(Ae.x,Ae.z),Object.assign(rt,{x:Ae.x,z:Ae.z,yaw:Ae.yaw,pitch:Ae.pitch}));const Ye=ve.hatch??1;Ye!==rt.hatch&&(u.touch(0,0),rt.hatch=Ye),He(Ae,ve),B.copy(ee).lerp(xe,.5+.5*Math.sin(je*.37));for(const G of ct)G(je,Ae,ve);st.shadows=u.update(Ae.x,Ae.z,je,ve.lightsDown??Be,B),f.mats.glowBeacon.color.set(ve.beaconColor??16763e3).multiplyScalar(7*f.dynamic.beaconPulse(je)*(ve.beacon??1)*(1-.85*Be)),E.update(je,Ae,ve);for(const G of Q)G(je,Ae,ve);m.visible=I.sunSteps>0&&ja(Ae.x,Ae.z)==="corridor",st.mirror=we(Ae),M.mesh.visible=st.mirror||!I.mirror&&Ae.x<2.1&&Math.abs(Ae.z-d)<13,st.mirror&&Oe(),C.render()}function ut(){const Ae=i.info;return{calls:Ae.render.calls,triangles:Ae.render.triangles,points:Ae.render.points,lines:Ae.render.lines,geometries:Ae.memory.geometries,textures:Ae.memory.textures,programs:(Ae.programs||[]).length}}return{scene:n,camera:l,pool:u,level:f,fx:p,harma:E,post:C,glass:M,sunVol:m,sky:h,ovr:P,stat:st,hooks:ct,lateHooks:Q,prepassScene:T,depthMat:x,applyTier:H,applyScale:X,render:It,info:ut,tier:()=>q,cfg:()=>I}}const Ct=Y,eu=dt,Ti=i=>new Ue(i),Ns=(i,e,t)=>Ti(i).lerp(Ti(e),t),ui=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),yc=(i,e,t)=>{const n=ui((t-i)/(e-i));return n*n*(3-2*n)},bt={orange:Ti(Ne.flame).multiply(new Ue(.92,.42,.16)),orangeDark:Ti(Ne.flame).multiply(new Ue(.55,.22,.09)),steel:Ns(Ne.cardBg,16777215,.3),steelDark:Ns(Ne.cardBg,16777215,.1),bare:Ns(Ne.cardBg,16777215,.55),rubber:Ti(Ne.cardBg).multiplyScalar(.45),brass:Ns(Ne.gold,Ne.cardBg,.45)},Qi={seam:0,eye:1,tip:2,spark:3};function xt(i=0,e=0,t=0,n=0,s=0,r=0,o=1,l,u){return l=l??o,u=u??o,new eu().compose(new Ct(i,e,t),new jt().setFromEuler(new Xn(n,s,r)),new Ct(o,l,u))}const Ii=(i,e,t)=>new xn(i,e,t),kn=(i,e,t,n=10,s=!1)=>new cn(i,e,t,n,1,s),Bn=Math.PI/2;class Mc{constructor(e){this.b={body:[],glow:[]},this.seed=e}add(e,t,n,s,r=0,o=0){const l=t.index?t.toNonIndexed():t.clone();for(const h of Object.keys(l.attributes))h!=="position"&&h!=="normal"&&l.deleteAttribute(h);l.attributes.normal||l.computeVertexNormals(),s&&l.applyMatrix4(s);const u=l.attributes.position.count,f=new Float32Array(u*3),p=new Float32Array(u*2);if(l.setAttribute("uv",new an(p,2)),e==="body"){const h=cd(l),a=new Ue,_=n||bt.steel;for(let c=0;c<u;c++)a.copy(_),h[c]>0?a.lerp(bt.bare,.3*yc(.25,.7,h[c])):a.multiplyScalar(1-.5*yc(.1,.5,-h[c])),f[3*c]=a.r,f[3*c+1]=a.g,f[3*c+2]=a.b;Jc(l,.21,this.seed%7*.137,this.seed%5*.211)}else{f.fill(1);for(let h=0;h<u;h++)p[2*h]=(o+.5)/4,p[2*h+1]=.5}l.setAttribute("color",new an(f,3));const m=new Uint16Array(u*4),d=new Float32Array(u*4);for(let h=0;h<u;h++)m[4*h]=r,d[4*h]=1;l.setAttribute("skinIndex",new an(m,4)),l.setAttribute("skinWeight",new an(d,4)),l.userData.bone=r,this.b[e].push(l)}glow(e,t,n,s=0){this.add("glow",e,null,n,s,t)}}const tu=[{at:[.125,.1,-.205],yaw:.6435,fwd:1},{at:[-.125,.1,-.205],yaw:Math.PI-.6435,fwd:-1},{at:[0,.1,.25],yaw:-Math.PI/2,fwd:0}],_i=[.13,.1,0],ti=[.14,-.16,0],i0=[0,.04,-.2],cr=[0,.09,.07];function Ad(){const i=(n,s,r)=>{const o=new Ch;return o.name=n,o.position.set(s[0],s[1],s[2]),r&&r.add(o),o},e=i("skoba-body",[0,0,0]),t=[e,i("skoba-sting",i0,e),i("skoba-spool",cr,e),i("skoba-spark",[0,.1,-.12],e)];return tu.forEach((n,s)=>{const r=i("skoba-hip"+s,n.at,e);r.rotation.order="YZX",r.rotation.y=n.yaw,t.push(r,i("skoba-knee"+s,_i,r))}),e.updateMatrixWorld(!0),t}function Rd(i,e,t){const n=ui(t.walk??0),s=ui(t.attack??0),r=ui(t.hurt??0),o=ui(t.dead??0),l=1-o,u=i[0],f=i[1],p=i[2],m=i[3],d=r*l*.006;u.position.set(d*Math.sin(e*61),-.052*o+d*Math.sin(e*47+1)+.002*n*l*Math.sin(e*18),d*Math.sin(e*53+2)),u.rotation.set(.03*r*l*Math.sin(e*43),0,.012*n*l*Math.sin(e*9)+.04*r*l*Math.sin(e*39)),f.position.set(i0[0],i0[1],i0[2]-.17*s*l*(1+.06*Math.sin(e*50))+.03*o),p.rotation.x=e*2.5*n*l;const h=r*l;m.scale.setScalar(h>.02?1+1.5*h*(.5+.5*Math.sin(e*71)):0),m.rotation.set(e*23,e*31,e*17),tu.forEach((a,_)=>{const c=i[4+_*2],g=i[5+_*2],v=e*9+_*Math.PI*2/3,b=Math.sin(v),M=Math.max(0,Math.cos(v));let A=a.yaw+a.fwd*.34*n*b+(a.fwd===0?.22*n*b:0),T=.3*n*M+(_<2?.22*s:-.06*s),x=-.22*n*M+(a.fwd===0?.16*n*b:0);T=T*l+1.72*o,x=x*l-2.2*o,A=A*l+(a.yaw+(_-1)*.12)*o,c.rotation.set(0,A,T),g.rotation.z=x})}function iy(i){const e=new _s;return e.moveTo(-.15,-.275),e.lineTo(-.085,-.275),e.lineTo(-.085,.1),e.lineTo(-.06,.125),e.lineTo(.06,.125),e.lineTo(.085,.1),i?(e.lineTo(.085,-.04),e.lineTo(.1,-.075),e.lineTo(.117,-.03),e.lineTo(.133,-.085),e.lineTo(.15,-.045)):(e.lineTo(.085,-.275),e.lineTo(.15,-.275)),e.lineTo(.15,.2),e.lineTo(.1,.275),e.lineTo(-.1,.275),e.lineTo(-.15,.2),e.closePath(),e}function Cd(i){const e=new gr(i,{depth:.024,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1,steps:1,curveSegments:1});return e.rotateX(-Bn),e.translate(0,.064,0),e}function Pd(i,e){i.add("body",Cd(iy(e)),bt.orange);for(const t of e?[-1]:[-1,1])i.add("body",Ii(.02,.008,.27),bt.orangeDark,xt(t*.1175,.096,.07)),i.add("body",new Gs(.03,.062,4),bt.steel,xt(t*.1175,.034,.258,Math.PI,Math.PI/4,0,1,1,.55)),i.glow(Ii(.005,.004,.25),Qi.seam,xt(t*.14,.094,.07));i.add("body",Ii(.2,.008,.02),bt.orangeDark,xt(0,.096,-.15)),i.glow(Ii(.16,.004,.005),Qi.seam,xt(0,.094,-.128));for(const[t,n]of[[-.12,-.24],[.12,-.24],[-.07,-.118],[.07,-.118],[-.118,-.09],[.118,-.09]])i.add("body",kn(.007,.007,.006,6),bt.steel,xt(t,.095,n));i.add("body",Ii(.05,.003,.026),bt.steelDark,xt(-.085,.0935,-.2));for(let t=0;t<3;t++)i.add("body",Ii(.006,.003,.018),bt.brass,xt(-.099+t*.014,.095,-.2));i.add("body",kn(.04,.043,.07,14),bt.steel,xt(0,.128,-.222,Bn,0,0)),i.add("body",new bs(.035,.007,5,14),bt.brass,xt(0,.128,-.258)),i.glow(new Xi(.031,12,5,0,Math.PI*2,0,Math.PI/2),Qi.eye,xt(0,.128,-.252,-Bn,0,0,1,.55,1)),i.add("body",Ii(.104,.006,.085),bt.orange,xt(0,.174,-.222,.1,0,0));for(const t of[-1,1])i.add("body",Ii(.006,.05,.06),bt.orange,xt(t*.049,.15,-.215));i.add("body",kn(.021,.021,.16,8),bt.steelDark,xt(0,.04,-.2,Bn,0,0)),i.add("body",kn(.025,.025,.014,8),bt.brass,xt(0,.04,-.276,Bn,0,0)),i.add("body",kn(.011,.011,.2,8),bt.steel,xt(0,.04,-.2,Bn,0,0),1),i.add("body",kn(.004,.0125,.06,8),bt.brass,xt(0,.04,-.33,-Bn,0,0),1),i.add("body",kn(.015,.015,.008,8),bt.steelDark,xt(0,.04,-.298,Bn,0,0),1),i.glow(new ks(.0075),Qi.tip,xt(0,.04,-.362,0,0,0,.8,.8,1.8),1),i.add("body",new dr(new Vs([new Ct(.02,.045,-.13),new Ct(.05,.03,-.1),new Ct(.06,.05,-.05),new Ct(.04,.066,-.02)]),8,.005,5),bt.rubber),e||Dd(i,null,2),i.add("body",kn(.008,.008,.2,6),bt.steel,xt(cr[0],cr[1],cr[2],0,0,Bn)),e||i.add("body",new dr(new Vs([new Ct(0,.05,.11),new Ct(.012,.02,.2),new Ct(.04,.008,.33),new Ct(.015,.008,.46),new Ct(.03,.008,.56)]),12,.0075,5),bt.rubber),i.add("body",kn(.011,.011,.25,6),bt.steel,xt(0,.082,.25,0,0,Bn)),i.add("body",Ii(.06,.034,.05),bt.orange,xt(0,.083,.25));for(let t=0;t<6;t++){const n=t*2.4,s=.06+.03*(t%3);i.glow(new Xc(.012),Qi.spark,xt(Math.cos(n)*s,.02*(t%2?1:-1),Math.sin(n)*s,n,n*1.7,0,.5,2.6,.5),3)}tu.forEach((t,n)=>{const s=4+n*2,r=5+n*2,o=xt(t.at[0],t.at[1],t.at[2],0,t.yaw,0),l=o.clone().multiply(xt(_i[0],_i[1],_i[2])),u=Math.atan2(_i[1],_i[0]),f=Math.hypot(_i[0],_i[1]),p=Math.atan2(ti[1],ti[0]),m=Math.hypot(ti[0],ti[1]);i.add("body",kn(.03,.034,.036,10),bt.steel,o.clone().multiply(xt(0,.004,0)),s);for(const d of[-1,1])i.add("body",Ii(f,.03,.006),bt.orange,o.clone().multiply(xt(_i[0]/2,_i[1]/2,d*.015,0,0,u)),s);i.add("body",Ii(f*.55,.012,.024),bt.steelDark,o.clone().multiply(xt(_i[0]/2,_i[1]/2,0,0,0,u)),s),i.add("body",kn(.022,.022,.046,10),bt.steel,l.clone().multiply(xt(0,0,0,Bn,0,0)),s),i.add("body",kn(.008,.008,.052,6),bt.brass,l.clone().multiply(xt(0,0,0,Bn,0,0)),s),i.add("body",kn(.011,.015,m,6),bt.orange,l.clone().multiply(xt(ti[0]/2,ti[1]/2,0,0,0,p+Bn,1,1,.85)),r),i.add("body",new Gs(.011,.06,4),bt.steel,l.clone().multiply(xt(ti[0]-.034,ti[1]-.004,0,0,0,Math.PI-.75)),r),i.add("body",new Xi(.016,8,5),bt.steel,l.clone().multiply(xt(ti[0],ti[1],0)),r),i.add("body",kn(.03,.038,.024,12),bt.steelDark,l.clone().multiply(xt(ti[0],ti[1]-.026,0)),r),i.glow(kn(.0395,.0395,.006,12,!0),Qi.seam,l.clone().multiply(xt(ti[0],ti[1]-.031,0)),r)})}function Dd(i,e,t){const n=[[.012,-.07],[.068,-.07],[.068,-.062],[.05,-.058]];for(let l=0;l<6;l++){const u=-.05+l*.02;n.push([.056,u-.006],[.056,u+.004],[.05,u+.008])}n.push([.068,.062],[.068,.07],[.012,.07]);const s=new y0(n.map(([l,u])=>new Le(l,u)),12),r=xt(cr[0],cr[1],cr[2],0,0,Bn),o=e?e.clone().multiply(xt(0,0,0,0,0,Bn)):r;i.add("body",s,bt.rubber,o,t);for(const l of[-1,1])i.add("body",kn(.07,.07,.006,12),bt.steel,o.clone().multiply(xt(0,l*.068,0)),t)}function sy(){const i=new Ws(new Uint8Array(16),4,1,Vn);return i.colorSpace=ln,i.magFilter=i.minFilter=vn,i.generateMipmaps=!1,i.needsUpdate=!0,i}const Ld=3;function zd(){const i=sy();return{body:$r(new Ri({name:"skoba-body",vertexColors:!0,roughness:1,metalness:.85,emissive:0}),"metal",bt.bare),glow:new Ri({name:"skoba-glow",color:725012,emissiveMap:i,emissive:16777215,emissiveIntensity:Ld,roughness:.25,metalness:0})}}const Ha=new Ue;function Wa(i,e,t,n){Ha.copy(t).multiplyScalar(n/Ld).convertLinearToSRGB();const s=i.image.data,r=e*4,o=Math.round(ui(Ha.r)*255),l=Math.round(ui(Ha.g)*255),u=Math.round(ui(Ha.b)*255);(s[r]!==o||s[r+1]!==l||s[r+2]!==u)&&(s[r]=o,s[r+1]=l,s[r+2]=u,s[r+3]=255,i.needsUpdate=!0)}function Id(i){let e=0,t=0;return i.traverse(n=>{n.isMesh&&(e++,t+=n.geometry.attributes.position.count/3)}),{draws:e,tris:Math.round(t)}}function ry({seed:i=1}={}){const e=new zt;e.name="skoba";const t=Ad(),n=new Oc(t),s=zd(),r=new Mc(i);Pd(r,!1),e.add(t[0]);for(const c of["body","glow"]){const g=new Hp(Ei(r.b[c],!1),s[c]);g.name="skoba:"+c,g.boundingSphere=new rs(new Ct(0,.1,.05),.75),g.geometry.boundingSphere=g.boundingSphere.clone(),e.add(g),g.bind(n,new eu)}const o=Ns(Ne.flame,Ne.gold,.5),l=Ti(Ne.turquoise),u=Ti(Ne.neonViolet),f=Ti(16718346),p=Ns(Ne.flame,16777215,.5),m=Ti(16777215),d=new Ue,h=Ns(Ne.flame,16777215,.4),a=s.glow.emissiveMap;function _(c,g={}){const v=ui(g.wake??0),b=ui(g.attack??0),M=ui(g.hurt??0),A=ui(g.dead??0),T=1-A;Rd(t,c,g);const x=yc(0,.18,v),y=M>0?.55+.45*Math.sin(c*67):1;d.copy(l).lerp(u,v),Wa(a,Qi.seam,d,T*x*(.5+.55*v+.08*Math.sin(c*3.1))+M*T*.5),d.copy(o).lerp(l,x).lerp(u,v).lerp(f,b),Wa(a,Qi.eye,d,T*y*(.62+.3*x+.75*b+.05*Math.sin(c*2.3))),d.copy(f).lerp(p,b),Wa(a,Qi.tip,d,T*(.1+2.2*b*(.8+.2*Math.sin(c*41)))),Wa(a,Qi.spark,d.copy(p).lerp(m,.5),M*T*2.6),s.body.emissive.copy(h),s.body.emissiveIntensity=M*T*(.1+.08*Math.sin(c*59))}return _(0,{}),{group:e,update:_,materials:s,bones:t,counts:Id(e)}}const Nf=[.0052,.003,.0016],oy=[.02,.012,.0075],ml=4900;function ay(i){const e=qi(i*7919+17),t=[];let n=0,s=0;const r=new Ct,o=new Ct,l=new Ct,u=new Ct,f=new eu,p=new Ct,m=(b,M,A)=>{r.subVectors(M,b).normalize(),o.set(.31,.87,.38).cross(r).normalize(),l.crossVectors(r,o);const T=(x,y,E)=>{const C=y*Math.PI*2/3;return E.copy(x).addScaledVector(o,Math.cos(C)*A).addScaledVector(l,Math.sin(C)*A)};for(let x=0;x<3;x++){const y=T(b,x,new Ct),E=T(b,x+1,new Ct),C=T(M,x,new Ct),P=T(M,x+1,new Ct);t.push(y.x,y.y,y.z,E.x,E.y,E.z,C.x,C.y,C.z,E.x,E.y,E.z,P.x,P.y,P.z,C.x,C.y,C.z)}n+=6},d=(b,M,A)=>{const T=new bs(oy[A],Nf[A]*.9,3,6).toNonIndexed();f.lookAt(p.set(0,0,0),M,Math.abs(M.y)>.9?new Ct(1,0,0):new Ct(0,1,0)),f.setPosition(b),T.applyMatrix4(f),t.push(...T.attributes.position.array),n+=T.attributes.position.count/3};function h(b,M,A,T,x,y,E,C,P,I,q){if(n>s||C<=0||y>2)return;const L=x*Math.PI/3,O=T.clone().addScaledVector(M,Math.cos(L)*E).addScaledVector(A,Math.sin(L)*E);if(O.y<.002||Math.hypot(O.x-b.x,O.z-b.z)>q||O.y>.78)return;m(T,O,Nf[y]);const H=u.crossVectors(M,A).normalize().clone();(y===0||e()<(y===1?.55:.2))&&d(O,H,y),e()<[.93,.8,.6][y]&&h(b,M,A,O,x,y,E*(.86+.1*e()),C-1,P,I,q);for(const X of[-1,1]){const Z=x+X;Z<P||Z>I||e()<[.8,.62,0][y]&&h(b,M,A,O,Z,y+1,E*(.5+.15*e()),y===0?4:3,P,I,q)}}const a=new Ct(0,1,0),_=new Ct(0,.004,0),c=new Ct(1,0,0),g=new Ct(0,0,1);for(let b=0;b<6;b++)s=Math.min(ml,n+(b%2?250:520)),h(_,c,g,_.clone().add(new Ct((e()-.5)*.1,0,(e()-.5)*.1)),b,0,b%2?.085:.125,b%2?4:6,-99,99,b%2?.5:.78);for(let b=0;b<3;b++){const M=.4+b*Math.PI/3,A=new Ct(Math.cos(M),0,Math.sin(M)),T=new Ct((e()-.5)*.12,.004,(e()-.5)*.12);s=Math.min(ml,n+440),h(T,A,a,T.clone(),1,0,.12,6,0,3,.5),s=Math.min(ml,n+380),h(T,A,a,T.clone().addScaledVector(A,.05),2,0,.105,5,0,3,.5)}const v=new kt;return v.setAttribute("position",new at(t,3)),v.computeVertexNormals(),v}function ly({seed:i=3}={}){const e=new zt;e.name="skoba-dead";const t=Ad(),n=t.map(g=>g.matrixWorld.clone().invert());Rd(t,0,{dead:1}),t[0].position.set(0,0,0),t[0].updateMatrixWorld(!0);const s=new Mc(i);Pd(s,!0);const r=xt(.02,0,.03,.12,.55,1.32),o={};for(const g of["body","glow"]){for(const v of s.b[g]){const b=v.userData.bone;v.applyMatrix4(r.clone().multiply(t[b].matrixWorld).multiply(n[b])),v.deleteAttribute("skinIndex"),v.deleteAttribute("skinWeight")}o[g]=s.b[g]}let l=1/0;for(const g of o.body)g.computeBoundingBox(),l=Math.min(l,g.boundingBox.min.y);for(const g of["body","glow"])for(const v of o[g])v.translate(0,-l,0);const u=new Mc(i),f=new _s;f.moveTo(.085,-.275),f.lineTo(.15,-.275),f.lineTo(.15,-.06),f.lineTo(.133,-.1),f.lineTo(.117,-.045),f.lineTo(.1,-.09),f.lineTo(.085,-.055),f.closePath();const p=Cd(f);p.translate(-.1175,-.064,-.16),u.add("body",p,bt.orange,xt(.36,.006,.12,.04,2.2,.03)),u.add("body",new Gs(.03,.062,4),bt.steel,xt(.46,.012,.03,Bn,.4,0,1,1,.55)),Dd(u,xt(-.3,.07,.3,0,.5,0),0),u.add("body",new dr(new Vs([new Ct(-.3,.02,.26),new Ct(-.2,.008,.2),new Ct(-.12,.008,.26),new Ct(-.02,.01,.16),new Ct(.03,.03,.08)]),14,.0075,5),bt.rubber);for(const g of u.b.body)g.deleteAttribute("skinIndex"),g.deleteAttribute("skinWeight"),o.body.push(g);const m=zd();m.body.color.setScalar(.62),m.uzor=new Ri({name:"skoba-uzor",color:Ns(16777215,Ne.turquoise,.45).multiplyScalar(.72),roughness:.22,metalness:.15,flatShading:!0,emissive:Ti(Ne.turquoise),emissiveIntensity:.07});for(const g of["body","glow"]){const v=new ht(Ei(o[g],!1),m[g]);v.name="skoba-dead:"+g,e.add(v)}const d=new ht(ay(i),m.uzor);d.name="skoba-dead:uzor",e.add(d);const h=Ti(Ne.turquoise),a=Ti(Ne.neonViolet),_=m.uzor.color.clone();function c(g){g=ui(g),m.uzor.emissive.copy(h).lerp(a,g),m.uzor.emissiveIntensity=.07+.85*g,m.uzor.color.copy(_).multiplyScalar(1-.6*g)}return c(0),{group:e,materials:m,setWake:c,counts:Id(e)}}function cy(i){const e=qi(i*977+5),t=new zt,n=(De.z0+De.z1)/2;t.position.copy(dn(De.x1+.5,1.7,n)),Wi(n,t.quaternion);const s={value:0},r={value:0},o=new ht(new no(900,5),new qn({side:zn,fog:!1,uniforms:{uGlow:s,uTime:r,uA:{value:new Ue(Ne.turquoise)},uB:{value:new Ue(Ne.neonViolet)}},vertexShader:"varying vec3 vP; void main() { vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform float uGlow; uniform float uTime; uniform vec3 uA; uniform vec3 uB; varying vec3 vP;
      float h(vec3 p) { return fract(sin(dot(p, vec3(12.99, 78.23, 37.72))) * 43758.5453); }
      float n(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(mix(h(i), h(i + vec3(1,0,0)), f.x), mix(h(i + vec3(0,1,0)), h(i + vec3(1,1,0)), f.x), f.y),
                   mix(mix(h(i + vec3(0,0,1)), h(i + vec3(1,0,1)), f.x), mix(h(i + vec3(0,1,1)), h(i + vec3(1,1,1)), f.x), f.y), f.z); }
      void main() {
        vec3 d = normalize(vP);
        float t = n(d * 6.0) * 0.5 + n(d * 19.0) * 0.3 + n(d * 57.0) * 0.2;
        float strata = 0.5 + 0.5 * sin(d.y * 60.0 + t * 9.0);
        vec3 rockc = vec3(0.03, 0.034, 0.05) * (0.4 + t) * (0.6 + 0.4 * strata);
        // свет Узора ложится на дальнюю стену, сильнее всего напротив галереи
        float lit = pow(max(0.0, d.x), 9.0) * (0.15 + 1.7 * t * t * t);
        vec3 c = rockc + mix(uA, uB, 0.5 + 0.5 * sin(uTime * 0.2 + d.y * 3.0)) * (lit * 0.34 + 0.012 * t) * uGlow * (0.6 + 0.4 * strata);
        gl_FragColor = vec4(c, 1.0);
      }`}));o.position.set(560,0,0),t.add(o);const l=[],u=[],f=[],p=[],m=new Ue(Ne.turquoise),d=new Ue(Ne.neonViolet),h=new Ue,a=(A,T)=>{const x=Math.sin(A*127.1+T*311.7)*43758.5453;return x-Math.floor(x)};function _(A,T,x,y,E,C=0){for(let P=0;P<3;P++){const I=P*2.0943951,q=Math.cos(I),L=Math.sin(I),O=-L,H=q,X=Math.ceil(T/A);for(let Z=-X;Z<=X;Z++)for(let $=-X*2;$<=X*2;$++){if(a((Z%3+3)%3+P*3,($%3+3)%3)>y)continue;const J=($+.5*Z)/.8660254,re=($+1+.5*Z)/.8660254,ye=(q*Z+O*J)*A,ae=(L*Z+H*J)*A,B=(q*Z+O*re)*A,ee=(L*Z+H*re)*A,xe=Math.hypot((ye+B)/2,(ae+ee)/2);if(!(xe>T*(.75+.25*a(Z*.37+P,$*.11))))if(h.copy(m).lerp(d,Math.min(1,xe/T+.2*e())).multiplyScalar(E*(1.3-.6*xe/T)),C){const ze=-(ee-ae),te=B-ye,be=Math.hypot(ze,te)||1,ue=ze/be*C/2,Me=te/be*C/2;f.push(x,ae+Me,ye+ue,x,ae-Me,ye-ue,x,ee+Me,B+ue,x,ee+Me,B+ue,x,ae-Me,ye-ue,x,ee-Me,B-ue);for(let qe=0;qe<6;qe++)p.push(h.r,h.g,h.b)}else l.push(x,ae,ye,x,ee,B),u.push(h.r,h.g,h.b,h.r,h.g,h.b)}}}_(150,520,0,.62,2.2,5.5),_(50,400,-170,.5,1.4,1.5),_(16.67,210,-320,.42,.9);for(let A=-4;A<=4;A++)for(let T=-4;T<=4;T++){const x=(A+T*.5)*150,y=T*.8660254*150,E=Math.hypot(x,y);if(!(E>470||a(A*3.1,T*1.7)<.3)){h.copy(m).lerp(d,E/520).multiplyScalar(3.2);for(let C=0;C<18;C++){const P=C/18*6.2832,I=(C+1)/18*6.2832,q=15,L=20,O=(H,X)=>[3,y+Math.sin(H)*X,x+Math.cos(H)*X];f.push(...O(P,q),...O(P,L),...O(I,q),...O(I,q),...O(P,L),...O(I,L));for(let H=0;H<6;H++)p.push(h.r,h.g,h.b)}}}const c=new kt;c.setAttribute("position",new at(f,3)),c.setAttribute("color",new at(p,3));const g=new ht(c,new fi({vertexColors:!0,toneMapped:!1,fog:!1,transparent:!0,blending:ni,depthWrite:!1,side:Oi})),v=new kt;v.setAttribute("position",new at(l,3)),v.setAttribute("color",new at(u,3));const b=new Ph(v,new Gc({vertexColors:!0,toneMapped:!1,fog:!1,transparent:!0,blending:ni,depthWrite:!1})),M=new zt;M.add(b,g),M.position.set(820,40,0),t.add(M);for(const A of[o,b,g])A.frustumCulled=!1;return{group:t,segments:l.length/6,update(A,T,x){r.value=A,s.value=x;const y=T*T*(3-2*T);M.rotation.y=.5+(1-y)*1.02+.04*Math.sin(A*.13),M.rotation.x=.16+.05*Math.sin(A*.09),M.rotation.z=A*.004,b.material.opacity=.35+.65*x,g.material.opacity=(.3+.7*x)*(.85+.15*Math.sin(A*.9))}}}const Vi=Y,nu=dt,ar=Math.PI/2,Zr=Math.PI*2,s0=(i,e,t)=>Math.min(t,Math.max(e,i)),Lt={yellow:13214247,orange:13132830,teal:3112838,white:13618629,steel:8752018,dark:2500909,copper:13662538,rubber:1382170},Ff={terminals:[[-.105,.132,0],[.105,.132,0]]},Of={seat:[.135,-.04,0]};function Pe(i=0,e=0,t=0,n=0,s=0,r=0,o=1,l=o,u=o){return new nu().compose(new Vi(i,e,t),new jt().setFromEuler(new Xn(n,s,r)),new Vi(o,l,u))}const uy={"+y":[0,0,0],"-y":[Math.PI,0,0],"+z":[ar,0,0],"-z":[-ar,0,0],"+x":[0,0,-ar],"-x":[0,0,ar]},Dt=(i,e,t,n="+y")=>Pe(i,e,t,...uy[n]),mt=(i,e,t)=>new xn(i,e,t);class w0{constructor(){this.p=[]}tri(e,t,n,s){const r=t[0]-e[0],o=t[1]-e[1],l=t[2]-e[2],u=n[0]-e[0],f=n[1]-e[1],p=n[2]-e[2],m=o*p-l*f,d=l*u-r*p,h=r*f-o*u;if(m*m+d*d+h*h<1e-18)return;const a=[(e[0]+t[0]+n[0])/3,(e[1]+t[1]+n[1])/3,(e[2]+t[2]+n[2])/3],_=typeof s=="function"?s(a):s.from?[a[0]-s.from[0],a[1]-s.from[1],a[2]-s.from[2]]:s;m*_[0]+d*_[1]+h*_[2]<0?this.p.push(...e,...n,...t):this.p.push(...e,...t,...n)}quad(e,t,n,s,r){this.tri(e,t,n,r),this.tri(e,n,s,r)}fan(e,t){for(let n=1;n<e.length-1;n++)this.tri(e[0],e[n],e[n+1],t)}geo(){const e=new kt;return e.setAttribute("position",new at(this.p,3)),e.computeVertexNormals(),e}}function Vt(i,e,t,n=.006){const s=new w0,r=i/2,o=e/2,l=t/2,u={from:[0,0,0]},f=(d,h,a)=>[d*r,h*(o-n),a*(l-n)],p=(d,h,a)=>[d*(r-n),h*o,a*(l-n)],m=(d,h,a)=>[d*(r-n),h*(o-n),a*l];for(const d of[-1,1])s.quad(f(d,-1,-1),f(d,1,-1),f(d,1,1),f(d,-1,1),u),s.quad(p(-1,d,-1),p(1,d,-1),p(1,d,1),p(-1,d,1),u),s.quad(m(-1,-1,d),m(1,-1,d),m(1,1,d),m(-1,1,d),u);for(const d of[-1,1])for(const h of[-1,1]){s.quad(p(-1,d,h),p(1,d,h),m(1,d,h),m(-1,d,h),u),s.quad(f(d,-1,h),f(d,1,h),m(d,1,h),m(d,-1,h),u),s.quad(f(d,h,-1),f(d,h,1),p(d,h,1),p(d,h,-1),u);for(const a of[-1,1])s.tri(f(d,h,a),p(d,h,a),m(d,h,a),u)}return s.geo()}function hn(i,e,t="z",n=!0){const s=new w0,r=i.length,o=e/2,l=t==="x"?0:t==="y"?1:2,u=t==="z"?(h,a,_)=>[h,a,_]:t==="x"?(h,a,_)=>[_,h,a]:(h,a,_)=>[a,_,h];let f=0,p=0;for(const h of i)f+=h[0]/r,p+=h[1]/r;const m=u(f,p,0),d=h=>{const a=[h[0]-m[0],h[1]-m[1],h[2]-m[2]];return a[l]=0,a};for(let h=0;h<r;h++){const a=i[h],_=i[(h+1)%r];s.quad(u(a[0],a[1],-o),u(_[0],_[1],-o),u(_[0],_[1],o),u(a[0],a[1],o),d)}if(n)for(const h of[-1,1]){const a=[0,0,0];a[l]=h,s.fan(i.map(_=>u(_[0],_[1],h*o)),a)}return s.geo()}function Ht(i,e=12,{smooth:t=!1,a0:n=0,a1:s=Zr,n0:r=null,n1:o=null}={}){const l=i.length,u=[],f=[],p=[];for(let _=0;_<l-1;_++){const c=i[_+1][0]-i[_][0],g=i[_+1][1]-i[_][1],v=Math.hypot(c,g)||1;p.push([g/v,-c/v])}const m=i.map((_,c)=>{const g=p[Math.max(0,c-1)],v=p[Math.min(l-2,c)],b=g[0]+v[0],M=g[1]+v[1],A=Math.hypot(b,M)||1;return _[0]<1e-6?[0,Math.sign(M)||1]:[b/A,M/A]});r&&(m[0]=r),o&&(m[l-1]=o);const d=(_,c,g)=>{const v=c.p[0]-_.p[0],b=c.p[1]-_.p[1],M=c.p[2]-_.p[2],A=g.p[0]-_.p[0],T=g.p[1]-_.p[1],x=g.p[2]-_.p[2],y=b*x-M*T,E=M*A-v*x,C=v*T-b*A,P=y*(_.n[0]+c.n[0]+g.n[0])+E*(_.n[1]+c.n[1]+g.n[1])+C*(_.n[2]+c.n[2]+g.n[2]);for(const I of P<0?[_,g,c]:[_,c,g])u.push(...I.p),f.push(...I.n)},h=(_,c,g,v)=>({p:[_*Math.cos(g),c,_*Math.sin(g)],n:[v[0]*Math.cos(g),v[1],v[0]*Math.sin(g)]});for(let _=0;_<l-1;_++){const[c,g]=i[_],[v,b]=i[_+1],M=t?m[_]:p[_],A=t?m[_+1]:p[_];if(!(c<1e-6&&v<1e-6))for(let T=0;T<e;T++){const x=n+(s-n)*T/e,y=n+(s-n)*(T+1)/e,E=h(c,g,x,M),C=h(c,g,y,M),P=h(v,b,y,A),I=h(v,b,x,A);c<1e-6?d(E,P,I):v<1e-6?d(E,C,P):(d(E,C,P),d(E,P,I))}}const a=new kt;return a.setAttribute("position",new at(u,3)),a.setAttribute("normal",new at(f,3)),a}const Wn=(i,e,t=6)=>Ht([[i,0],[i,e],[0,e]],t),fy=(i,e,t=6)=>Ht([[i,0],[i,e*.6],[i*.7,e],[0,e]],t),x0=(i,e,t=8)=>Ht([[0,-e/2],[i,-e/2],[i,e/2],[0,e/2]],t);function hy(i,e,t,n,s=5){const r=new Vi(...i),o=new Vi(...e).sub(r),l=o.length(),u=Ht([[t,0],[n,l]],s);return u.applyMatrix4(new nu().compose(r,new jt().setFromUnitVectors(new Vi(0,1,0),o.normalize()),new Vi(1,1,1))),u}function Fs(i,e,t=5,n=8,s=.3){return new dr(new Vs(i.map(r=>new Vi(...r)),!1,"catmullrom",s),n,e,t,!1)}function gl(i,e,t,n,s,r,o,l=0,u=0){const f=new w0,p=(c,g,v=0,b=0)=>[[v-c/2,b-g/2],[v+c/2,b-g/2],[v+c/2,b+g/2],[v-c/2,b+g/2]],m=p(i,e),d=p(i-2*o,e-2*o),h=p(t,n,l,u),a=[[0,-1],[1,0],[0,1],[-1,0]],_=(c,g)=>[c[0],c[1],g];for(let c=0;c<4;c++){const g=(c+1)%4,[v,b]=a[c];f.quad(_(m[c],s),_(m[g],s),_(m[g],r-o),_(m[c],r-o),[v,b,0]),f.quad(_(m[c],r-o),_(m[g],r-o),_(d[g],r),_(d[c],r),[v,b,1]),f.quad(_(d[c],r),_(d[g],r),_(h[g],r),_(h[c],r),[0,0,1]),f.quad(_(h[c],r),_(h[g],r),_(h[g],s),_(h[c],s),[-v,-b,0])}return f.geo()}function kf(i,e=!0){const t=new w0,n=r=>[r[0],r[1],0],s=i.map(([r,o,l,u])=>[[o,-(l-u)],[o,l-u],[o-u,l],[-(o-u),l],[-o,l-u],[-o,-(l-u)],[-(o-u),-l],[o-u,-l]].map(([f,p])=>[f,p,r]));for(let r=0;r<s.length-1;r++)for(let o=0;o<8;o++){const l=(o+1)%8;t.quad(s[r][o],s[r][l],s[r+1][l],s[r+1][o],n)}if(e){const r=Math.sign(i[i.length-1][0]-i[0][0]);t.fan(s[0],[0,0,-r]),t.fan(s[s.length-1],[0,0,r])}return t.geo()}class ss{constructor(e){this.mats=e,this.b=new Map}reg(e,t){return this.b.has(e)||this.b.set(e,{kind:t,list:[]}),e}paint(e){return this.reg(this.mats.paint(e),"paint")}metal(e){return this.reg(this.mats.metal(e),"metal")}plain(e,t,n){return this.reg(this.mats.plain(e,t,n),"plain")}glow(e,t){return this.reg(this.mats.glow(e,t),"glow")}add(e,t,n){const s=t.index?t.toNonIndexed():t.clone();for(const r of Object.keys(s.attributes))r!=="position"&&r!=="normal"&&s.deleteAttribute(r);if(s.attributes.normal||s.computeVertexNormals(),n&&(s.applyMatrix4(n),n.determinant()<0)){const r=s.attributes.position.array,o=s.attributes.normal.array;for(let l=0;l<r.length;l+=9)for(const u of[r,o])for(let f=0;f<3;f++){const p=u[l+3+f];u[l+3+f]=u[l+6+f],u[l+6+f]=p}}s.setAttribute("uv",new an(new Float32Array(s.attributes.position.count*2),2)),this.b.get(e).list.push(s)}build(e,t,{cast:n=null,uv:s=[0,0]}={}){for(const[r,{kind:o,list:l}]of this.b){if(!l.length)continue;const u=l.length>1?Ei(l,!1):l[0];(o==="paint"||o==="metal")&&Jc(u,ld,s[0],s[1]);const f=new ht(u,r);f.name=`${t}:${o}${e.children.length}`,f.castShadow=r===n,f.receiveShadow=!0,f.userData.kind=o,e.add(f)}return e}}function Xs(...i){let e=0,t=0;const n=new Set;for(const s of i)s.traverse(r=>{r.isMesh&&(e++,n.add(r.material),t+=(r.geometry.index?r.geometry.index.count:r.geometry.attributes.position.count)/3)});return{draws:e,tris:Math.round(t),mats:n.size}}function dy(i){const e=new zt;e.name="battery";const t=new ss(i),n=t.paint(Lt.yellow),s=t.metal(Lt.dark),r=t.metal(Lt.steel),o=t.plain(Lt.copper,.4,.9),l=t.glow(Ne.turquoise,1.1);t.add(n,Vt(.27,.184,.184,.016)),t.add(n,Vt(.17,.012,.13,.004),Pe(0,.094,0));for(const u of[-1,1]){t.add(s,Vt(.05,.2,.2,.014),Pe(u*.155,0,0));for(const f of[-.068,.068])for(const p of[-.068,.068])t.add(r,Wn(.009,.005,6),Dt(u*.18,f,p,u>0?"+x":"-x"));t.add(s,mt(.23,.04,.006),Pe(0,.045,u*.094)),t.add(l,mt(.2,.024,.004),Pe(0,.045,u*.0975));for(let f=0;f<5;f++)t.add(s,hn([[u*.091,-.005],[u*.091,.005],[u*.0995,.002],[u*.0995,-.002]],.076,"y"),Pe(u*(-.105+f*.033),-.034,0));t.add(r,mt(.07,.05,.003),Pe(u*.088,-.034,u*.0932));for(const f of[-.028,.028])t.add(r,Wn(.004,.002,5),Dt(u*.088+f,-.034,u*.0947,u>0?"+z":"-z"));t.add(s,mt(.24,.008,.02),Pe(0,-.096,u*.06)),t.add(s,Ht([[.027,0],[.027,.008],[.018,.008]],8),Dt(u*.105,.092,0)),t.add(o,Ht([[.019,.008],[.019,.016],[.013,.018],[.013,.036],[.01,.04],[0,.04]],8),Dt(u*.105,.092,0)),t.add(r,Vt(.03,.01,.036,.003),Pe(u*.055,.104,0))}t.add(r,mt(.003,.08,.08),Pe(.1812,0,0)),t.add(r,Ht([[.03,0],[.03,.006],[.021,.006],[.021,.001]],10),Dt(-.18,0,0,"-x"));for(const u of[-.008,.008])t.add(o,Wn(.004,.005,5),Dt(-.18,0,u,"-x"));return t.add(r,Fs([[-.055,.1,0],[-.055,.13,0],[-.04,.142,0],[.04,.142,0],[.055,.13,0],[.055,.1,0]],.007,6,12)),t.build(e,"battery",{cast:n,uv:[.31,.17]}),{group:e,strip:l,counts:Xs(e)}}function py(i,{hex:e=Lt.white}={}){const t=new zt;t.name="cabinet";const n=new ss(i),s=n.paint(e),r=n.metal(Lt.dark),o=n.metal(Lt.steel),l=n.glow(16769712,2.2);n.add(s,mt(.02,.96,.8),Pe(.01,0,0)),n.add(r,mt(.004,.9,.74),Pe(.022,0,0));for(const d of[-1,1]){n.add(s,Vt(.32,.03,.8,.006),Pe(.18,d*.465,0)),n.add(s,Vt(.32,.9,.03,.006),Pe(.18,0,d*.385)),n.add(s,mt(.012,.035,.74),Pe(.334,d*.4325,0)),n.add(s,mt(.012,.83,.035),Pe(.334,0,d*.3525));for(let h=0;h<4;h++){const a=.2+h*.05;n.add(s,hn([[a,d*.399],[a+.034,d*.399],[a,d*.408]],.2,"x"),Pe(.17,0,0))}for(const h of[-1,1])n.add(o,mt(.006,.07,.05),Pe(.003,h*.4,d*.4)),n.add(o,Wn(.009,.005,6),Dt(.006,h*.4,d*.413,"+x"))}for(const d of[-.2,.17]){n.add(o,mt(.27,.03,.68),Pe(.165,d,0)),n.add(o,mt(.012,.022,.68),Pe(.294,d+.026,0)),n.add(r,mt(.012,.04,.3),Pe(.07,d+.035,0));for(const h of[-1,1])n.add(o,hn([[.024,d-.015],[.25,d-.015],[.024,d-.13]],.012,"z"),Pe(0,0,h*.3)),n.add(r,Vt(.16,.04,.016,.004),Pe(.17,d+.035,h*.2)),n.add(r,mt(.2,.004,.03),Pe(.18,d+.017,h*.1))}n.add(r,Fs([[.05,.45,-.353],[.05,.3,-.353],[.05,.16,-.353],[.05,.08,-.35]],.012,5,6));for(const d of[.4,.24])n.add(o,mt(.034,.014,.03),Pe(.05,d,-.355));n.add(r,Fs([[.05,.1,-.35],[.09,.13,-.27],[.16,.115,-.16],[.18,.08,-.105]],.007,4,6)),n.add(r,Fs([[.05,.13,-.35],[.07,.136,-.2],[.1,.136,0],[.16,.125,.09],[.18,.08,.105]],.007,4,8));for(const d of[-.105,.105])n.add(o,Vt(.03,.022,.03,.004),Pe(.18,.066,d));n.add(r,Fs([[.05,.4,-.35],[.1,.38,-.25],[.17,.27,-.14],[.2,.205,-.08]],.007,4,6)),n.add(o,Vt(.03,.022,.03,.004),Pe(.2,.197,-.065,0,.5,0)),n.add(r,Vt(.05,.1,.2,.005),Pe(.049,.33,.2));for(let d=0;d<3;d++)n.add(o,mt(.012,.03,.022),Pe(.079,.33+(d===1?-.012:.012),.14+d*.06));n.add(r,Vt(.2,.14,.26,.008),Pe(.14,-.375,.1));for(let d=0;d<5;d++)n.add(o,mt(.012,.1,.006),Pe(.244,-.375,.1+(d-2)*.045));n.add(s,Vt(.3,.09,.74,.01),Pe(.15,.525,0)),n.add(s,hn([[.27,.555],[.41,.522],[.41,.535],[.27,.57]],.78,"z"));for(const d of[-1,1])n.add(s,hn([[.3,.49],[.405,.524],[.3,.56]],.012,"z"),Pe(0,0,d*.372)),n.add(r,mt(.036,.034,.02),Pe(.355,.521,d*.26));n.add(l,x0(.015,.5,8),Dt(.355,.512,0,"+z")),n.add(s,Vt(.06,.19,.6,.008),Pe(.03,.665,0)),n.add(r,mt(.005,.14,.54),Pe(.0625,.665,0));for(const d of[-1,1])n.add(o,Wn(.006,.003,6),Dt(.065,.665,d*.261,"+x"));n.build(t,"cabinet",{cast:s,uv:[.07,.43]}),t.userData.plate=[.065,.665,0],t.userData.plateSize=[.5,.12];const u=new zt;u.name="cabinet-cover";const f=new ht(mt(.016,.89,.73),i.plain(Lt.yellow,.6,.2));f.name="face",f.castShadow=!0,f.receiveShadow=!0,f.userData.kind="plain",u.add(f);const p=new ss(i),m=p.metal(Lt.dark);for(const d of[-1,1]){p.add(m,Vt(.03,.03,.78,.006),Pe(0,d*.455,0)),p.add(m,Vt(.03,.88,.03,.006),Pe(0,0,d*.375)),p.add(m,mt(.008,.04,.72),Pe(-.011,d*.2,0)),p.add(m,mt(.005,.1,.06),Pe(.0175,d*.28,-.355)),p.add(m,x0(.012,.1,8),Pe(.017,d*.28,-.392));for(const h of[-.03,.03])p.add(m,Wn(.007,.004,6),Dt(.02,d*.28+h,-.345,"+x"));for(const h of[-1,1])p.add(m,Vt(.008,.06,.06,.003),Pe(.018,d*.435,h*.355)),p.add(m,new no(.011,0),Pe(.019,d*.466,h*.352,.4*h,.3,0,.8,.75,1.9)),p.add(m,new no(.011,0),Pe(.019,d*.44,h*.386,.2,.5*d,0,.8,1.7,.7))}return p.build(u,"cabinet-cover",{uv:[.53,.29]}),{body:t,cover:u,lamp:l,counts:Xs(t,u)}}function my(i,{hex:e=16747050}={}){const t=new zt;t.name="lever";const n=new ss(i),s=n.paint(e),r=n.metal(Lt.dark),o=n.metal(Lt.steel),l=n.glow(e,3);n.add(r,Vt(.42,.5,.03,.006),Pe(0,0,.015)),n.add(s,gl(.34,.4,.056,.21,.03,.075,.01)),n.add(o,gl(.084,.238,.056,.21,.075,.079,.0015));for(const d of[-1,1]){for(const h of[-1,1])n.add(o,fy(.012,.008,6),Dt(d*.14,h*.17,.075,"+z")),n.add(o,Wn(.009,.006,6),Dt(d*.19,h*.23,.03,"+z"));n.add(o,hn([[-.115,.074],[.115,.074],[.085,.104],[-.085,.104]],.012,"x"),Pe(d*.058,0,0))}for(const d of[-.085,.085])n.add(o,mt(.04,.014,.003),Pe(.105,d,.0765));n.add(r,gl(.284,.059,.26,.035,.075,.081,.002),Pe(0,-.16,0)),n.add(l,mt(.26,.035,.006),Pe(0,-.16,.076)),n.add(r,Vt(.16,.046,.05,.005),Pe(0,.226,.055)),n.add(o,Ht([[.024,0],[.024,.012],[.017,.014]],6),Dt(0,.249,.055)),n.add(r,Ht([[.016,.012],[.016,.04],[.011,.04]],8),Dt(0,.249,.055)),n.build(t,"lever",{cast:s,uv:[.19,.61]}),t.userData.cable=[0,.289,.055];const u=new zt;u.name="lever-pivot",u.position.set(0,-.02,.04),u.rotation.x=.5;const f=new ss(i),p=f.metal(Lt.steel),m=f.plain(Lt.rubber,.85,0);return f.add(p,x0(.03,.048,10),Dt(0,0,0,"+x")),f.add(p,Ht([[.02,0],[.015,.19],[.015,.225],[.02,.232],[.02,.262]],8)),f.add(m,Ht([[0,-.07],[.02,-.07],[.026,-.062],[.026,-.03],[.022,-.026],[.022,.026],[.026,.03],[.026,.062],[.02,.07],[0,.07]],10),Dt(0,.262,0,"+x")),f.build(u,"lever-pivot",{uv:[.47,.11]}),t.add(u),{group:t,pivot:u,led:l,counts:Xs(t)}}function gy(i,{variant:e=0}={}){const t=new zt;t.name="can";const n=new ss(i),s=15,r=n.paint(e?Lt.teal:Lt.orange),o=n.paint(Lt.white),l=n.metal(Lt.steel);n.add(r,Ht([[0,-.186],[.05,-.182],[.085,-.17],[.1,-.148]],s,{smooth:!0,n1:[1,0]})),n.add(r,Ht([[.1,-.148],[.1,.075]],s)),n.add(r,Ht([[.1,.075],[.092,.105],[.068,.128],[.04,.139],[.03,.141]],s,{smooth:!0,n0:[1,0]})),n.add(l,Ht([[.068,-.176],[.068,-.2],[.082,-.2],[.082,-.168]],s));for(const u of[-.1,.045])n.add(l,Ht([[.1,u-.014],[.1045,u-.009],[.1045,u+.009],[.1,u+.014]],s));for(let u=0;u<3;u++)n.add(o,Ht([[.1015,-.058],[.1015,.005]],4,{a0:u*5*Zr/s,a1:(u*5+4)*Zr/s}));n.add(l,Ht([[.034,.136],[.034,.15],[.022,.153],[.022,.166],[.014,.169],[.014,.177]],8)),n.add(l,Ht([[.014,.176],[.026,.176],[.026,.184],[0,.184]],6)),n.add(l,Wn(.009,.034,6),Dt(.016,.159,0,"+x")),n.add(l,new bs(.06,.007,5,15),Pe(0,.19,0,ar,0,0));for(let u=0;u<3;u++){const f=Math.PI/3+u*Zr/3,p=Math.cos(f),m=Math.sin(f);n.add(l,hy([.088*p,.108,.088*m],[.06*p,.19,.06*m],.006,.006,5))}return n.build(t,"can",{cast:r,uv:[e?.57:.23,e?.19:.71]}),{group:t,counts:Xs(t)}}function xy(i,{w:e=.8,h:t=.6,d:n=.6,hex:s=Lt.white,seed:r=1}={}){const o=new zt;o.name="crate";const l=qi(Math.imul(r|0,2654435761)^24301),u=new ss(i),f=u.paint(s),p=u.metal(Lt.steel),m=u.metal(Lt.dark),d=.05,h=.012,a=.02,_=.022,c=.008,g=.004,v=d+.014,b=e/2,M=n/2,A=s0(t*.22,.1,.16),T=t-A,x=T-c/2-_,y=t-a-T-c/2,E=[l(),l()];u.add(f,mt(e-2*a,x,n-2*a),Pe(0,_+x/2,0)),u.add(f,mt(e-2*a,y,n-2*a),Pe(0,T+c/2+y/2,0));{const ae=b-g,B=M-g;u.add(m,hn([[B-h,-ae],[B,-ae+h],[B,ae-h],[B-h,ae],[-B+h,ae],[-B,ae-h],[-B,-ae+h],[-B+h,-ae]],c,"y"),Pe(0,T,0))}const C=(ae,B)=>[[-d/2,-d/2],[d/2,-d/2],[d/2,d/2-h],[d/2-h,d/2],[-d/2,d/2]].map(([ee,xe])=>[ae*ee,B*xe]),P=b-g-d/2,I=M-g-d/2;for(const ae of[-1,1])for(const B of[-1,1])u.add(p,hn(C(B,ae),x,"y",!1),Pe(ae*P,_+x/2,B*I)),u.add(p,hn(C(B,ae),A-c/2-g,"y",!1),Pe(ae*P,T+c/2+(A-c/2-g)/2,B*I));for(const ae of[-1,1]){const B=ae<0?_+d/2:t-g-d/2;for(const ee of[-1,1])u.add(p,hn(C(ae,ee),e-.02,"x",!1),Pe(0,B,ee*I)),u.add(p,hn(C(ee,ae),n-.02,"z",!1),Pe(ee*P,B,0))}for(const ae of[-1,1])for(const B of[-1,1])for(const ee of[-1,1]){const xe=ae*(b-v/2),ze=ee<0?v/2:t-v/2,te=B*(M-v/2);u.add(p,Vt(v,v,v,.012),Pe(xe,ze,te));const be=l()<.1?Math.floor(l()*3):-1;be!==0&&u.add(m,Wn(.012,.005,4),Dt(ae*b,ze,te,ae>0?"+x":"-x")),be!==1&&u.add(m,Wn(.012,.005,4),Dt(xe,ze,B*M,B>0?"+z":"-z")),ee>0&&be!==2&&u.add(m,Wn(.012,.005,4),Dt(xe,t,te,"+y"))}for(const ae of[-1,1])u.add(m,mt(.07,_,n-2*v),Pe(ae*(b-.2),_/2,0));const q=x-d-.09,L=_+d+.02+q/2,O=(ae,B)=>{const ee=B*(M-a-.001);u.add(f,hn([[ee,-.03],[ee,.03],[ee+B*.013,.018],[ee+B*.013,-.018]],q,"y"),Pe(ae,L,0))},H=(ae,B)=>{const ee=B*(b-a-.001);u.add(f,hn([[-.03,ee],[.03,ee],[.018,ee+B*.013],[-.018,ee+B*.013]],q,"y"),Pe(0,L,ae))},X=e>=.9?3:2;for(let ae=0;ae<X;ae++)O((ae-(X-1)/2)*(e-2*d-.16)/X,-1);if(e>=.75)for(const ae of[-1,1])O(ae*(b-d-.07),1);if(n>=.6)for(const ae of[-1,1])for(const B of[-1,1])H(B*(M-d-.06),ae);for(const ae of[-1,1]){const B=t-a-.001,ee=ae*n/5;u.add(f,hn([[B,ee-.035],[B,ee+.035],[B+.012,ee+.022],[B+.012,ee-.022]],e-2*d-.06,"x"))}const Z=_+x*.62;for(const ae of[-1,1]){const B=ae*(b-a);u.add(m,mt(.004,.09,.22),Pe(B+ae*.002,Z-.02,0));for(const xe of[-1,1])u.add(m,mt(.014,.024,.022),Pe(B+ae*.007,Z,xe*.078));const ee=B+ae*.009;u.add(m,Fs([[ee,Z,-.078],[ee,Z-.035,-.078],[ee,Z-.055,-.055],[ee,Z-.055,.055],[ee,Z-.035,.078],[ee,Z,.078]],.006,4,10))}const $=e>=.7?[-e*.24,e*.24]:[0];for(const ae of[1,-1])for(const B of $){const ee=ae*(M-a),xe=l()<.3;u.add(m,mt(.05,.026,.008),Pe(B,T+c/2+.02,ee+ae*.004)),u.add(m,mt(.05,.05,.008),Pe(B,T-c/2-.032,ee+ae*.004)),u.add(m,mt(.032,.075,.008),Pe(B,T-.045,ee+ae*.012,xe?ae*2.9:0,0,0).multiply(Pe(0,.0375,0)))}const J=s0(e-2*d-.3,.16,.4),re=s0(x*.38,.08,.16),ye=_+x*.45;return u.add(f,Vt(J,re,.006,.002),Pe(0,ye,M-a+.002)),o.userData.stencil={center:[0,ye,M-a+.005],w:J-.004,h:re-.004,normal:[0,0,1]},u.build(o,"crate",{cast:f,uv:E}),{group:o,counts:Xs(o)}}function vy(i){const e=new zt;e.name="socket";const t=new ss(i),n=t.paint(Lt.yellow),s=t.metal(Lt.dark),r=t.plain(Lt.copper,.4,.9),o=t.glow(Ne.turquoise,2),l=t.glow(16722458,2.5),[u,f]=Of.seat;t.add(n,Vt(.02,.5,.42,.005),Pe(.01,0,0)),t.add(n,Vt(.18,.1,.38,.006),Pe(.11,-.2,0)),t.add(n,Vt(.18,.125,.38,.006),Pe(.11,.1875,0)),t.add(s,mt(.004,.275,.38),Pe(.022,-.0125,0)),t.add(s,mt(.172,.005,.372),Pe(.11,-.1485,0)),t.add(s,mt(.12,.006,.3),Pe(u,.122,0));for(const p of[-1,1]){t.add(n,Vt(.18,.5,.02,.005),Pe(.11,0,p*.2));for(const d of[-.12,.12])t.add(n,hn([[d-.02,p*.209],[d+.02,p*.209],[d+.012,p*.217],[d-.012,p*.217]],.16,"x"),Pe(.11,0,0));t.add(s,hn([[f-.02,p*.19],[f+.02,p*.19],[f+.01,p*.183],[f-.01,p*.183]],.17,"x"),Pe(.11,0,0)),t.add(s,hn([[-.146,p*.07-.012],[-.146,p*.07+.012],[-.141,p*.07+.007],[-.141,p*.07-.007]],.172,"x"),Pe(.11,0,0)),t.add(s,Ht([[.016,0],[.012,.01],[0,.01]],6),Dt(.024,f,p*.1,"+x"));const m=p*Ff.terminals[1][0];t.add(r,hn([[-.022,.03],[.022,.03],[.022,.008],[.012,0],[-.012,0],[-.022,.008]],.006,"z"),Pe(u,f+Ff.terminals[1][1]-.002,m)),t.add(s,mt(.03,.012,.02),Pe(u,.114,m)),t.add(o,mt(.004,.304,.008),Pe(.2015,-.01,p*.2));for(const[d,h]of[[.225,.16],[.165,.16],[-.225,.16],[-.178,.16]])t.add(s,Wn(.01,.005,6),Dt(.2,d,p*h,"+x"))}return t.add(o,mt(.004,.008,.408),Pe(.2015,.138,0)),t.add(o,mt(.004,.008,.408),Pe(.2015,-.158,0)),t.add(s,mt(.004,.044,.09),Pe(.2015,.2,0)),t.add(l,mt(.004,.028,.07),Pe(.2035,.2,0)),t.add(s,mt(.003,.045,.18),Pe(.2012,-.2025,0)),t.add(s,Ht([[.03,0],[.03,.01],[.02,.014],[.02,.04],[.014,.04]],8),Dt(.07,-.25,0,"-y")),t.build(e,"socket",{cast:n,uv:[.41,.83]}),e.userData.seat=Of.seat.slice(),e.userData.cable=[.07,-.29,0],{group:e,led:l,ring:o,counts:Xs(e)}}function _y(i){const e=new zt;e.name="tool-pickup";const t=new ss(i),n=t.paint(Lt.orange),s=t.paint(Lt.white),r=t.metal(Lt.steel),o=t.plain(Lt.rubber,.85,0),l=t.glow(Ne.turquoise,3),u=t.glow(Ne.turquoise,1.6);t.add(n,kf([[.15,.03,.026,.01],[.138,.045,.04,.014],[.12,.05,.046,.016],[-.03,.05,.046,.016],[-.055,.044,.04,.014],[-.07,.034,.032,.012]]));for(const a of[.092,-.018])t.add(r,kf([[a+.009,.05,.046,.016],[a+.006,.053,.049,.017],[a-.006,.053,.049,.017],[a-.009,.05,.046,.016]],!1));t.add(s,Vt(.07,.012,.086,.004),Pe(0,.049,.037));for(const a of[-1,1]){t.add(s,Vt(.011,.062,.086,.003),Pe(a*.0535,-.002,.037));for(const _ of[.004,.07])t.add(r,Wn(.0034,.002,5),Dt(a*.027,.055,_))}for(let a=0;a<3;a++)t.add(u,Ht([[.0045,0],[.0035,.002],[0,.003]],5,{smooth:!0}),Dt(.012,.055,.024+a*.013));t.add(r,Ht([[0,-.036],[.008,-.033],[.011,-.026],[.011,.026],[.008,.033],[0,.036]],6,{smooth:!0}),Dt(.047,.045,.04,"+z")),t.add(r,Ht([[.03,0],[.03,.004],[.022,.006],[.022,.012],[0,.012]],8),Dt(0,0,.148,"+z")),t.add(r,Ht([[.03,0],[.026,.006],[.026,.042]],10),Dt(0,0,-.068,"-z"));const f=[];for(let a=0;a<=20;a++){const _=a/20,c=_*Zr*3;f.push([Math.cos(c)*.031,Math.sin(c)*.031,-.077-_*.03])}t.add(l,Fs(f,.0035,3,20,.5)),t.add(r,Ht([[.026,0],[.036,0],[.047,.006],[.047,.031],[.041,.04],[.031,.04],[.027,.033]],10),Dt(0,0,-.108,"-z")),t.add(u,Ht([[.028,0],[.02,.005],[.01,.0075],[0,.008]],10,{smooth:!0}),Dt(0,0,-.14,"-z")),t.add(l,new bs(.03,.004,4,14),Pe(0,0,-.1475));const p=new _s([[-.006,.008],[.016,.022],[.04,.025],[.06,.017],[.074,.004],[.082,-.016],[.066,-.007],[.046,-.001],[.014,-.006],[-.006,-.008]].map(a=>new Le(...a))),m=new gr(p,{depth:.012,bevelEnabled:!1,steps:1});m.translate(0,0,-.006);for(let a=0;a<3;a++){const _=Pe(0,0,0,0,0,ar+a*Zr/3).multiply(Pe(0,.046,-.128,0,ar,0));t.add(r,m,_),t.add(r,x0(.009,.024,6),_.clone().multiply(Dt(0,0,0,"+z"))),t.add(s,mt(.034,.005,.016),_.clone().multiply(Pe(.037,.0235,0,0,0,-.1)))}t.add(o,Ht([[0,-.06],[.012,-.06],[.0165,-.056],[.0165,-.03],[.0148,-.028],[.0148,.028],[.0165,.03],[.0165,.056],[.012,.06],[0,.06]],6),Dt(0,.04,.205,"+x"));for(const a of[-1,1])t.add(r,Fs([[a*.036,.02,.132],[a*.048,.03,.172],[a*.05,.04,.205]],.006,4,4));const d=new Vi(-.86,-.49,.14).normalize(),h=new nu().compose(new Vi(-.047,-.018,-.04),new jt().setFromUnitVectors(new Vi(0,1,0),d),new Vi(1,1,1));return t.add(r,Ht([[.02,-.006],[.0225,0],[.0225,.01],[.0165,.016]],6),h),t.add(o,Ht([[.0145,.014],[.0162,.02],[.0162,.056],[.0148,.058],[.0148,.064],[.0162,.066],[.0162,.104]],6),h),t.add(r,Ht([[.0165,.102],[.0195,.106],[.0195,.112],[.012,.117],[0,.117]],6),h),t.build(e,"tool-pickup",{cast:n,uv:[.67,.37]}),{group:e,coil:l,dots:u,counts:Xs(e)}}function yy(i,{h:e=2.3,len:t=2}={}){const n=new zt;n.name="door-leaf";const s=new ss(i),r=s.metal(Lt.dark),o=s.metal(Lt.steel),l=s.paint(Lt.yellow),u=.1,f=e/2,p=t/2,m=p-u+.012-.035,d=.035+m/2;s.add(r,mt(.07,e-.02,t-.02)),s.add(o,Vt(.12,e-2*u+.01,.08,.01));const h=[.47,f-u],a=[-.29,-(f-u)],_=([T,x],y)=>T+(x-T)*y,c=[[.05,-.014],[.05,.014],[.038,.03],[-.038,.03],[-.05,.014],[-.05,-.014],[-.038,-.03],[.038,-.03]],g=(t-.3)/2-.035,v=_(a,.5),b=s0((f-u-.47)/3-.035,.06,.16);for(const T of[-1,1]){s.add(r,Vt(.1,u,t,.008),Pe(0,T*(f-u/2),0)),s.add(r,Vt(.1,e-2*u+.01,u,.008),Pe(0,0,T*(p-u/2)));for(const y of[h,a])for(const E of[1/3,2/3])s.add(o,hn(c,m,"z",!1),Pe(0,_(y,E),T*d));s.add(l,Vt(.104,.3,g,.006),Pe(0,-.1,T*(.035+g/2)));for(const y of[-1,1])for(const E of[-.05,0,.05])s.add(r,hn([[y*.034,v+E-.02],[y*.034,v+E+.02],[y*.049,v+E-.02]],m*.6,"z"),Pe(0,0,T*d));const x=T>0?"+x":"-x";for(const y of[-1,1])for(let E=-1;E<=1;E++)s.add(o,Wn(.016,.007,5),Dt(T*.05,y*(f-u/2),E*(p-.25),x)),s.add(o,Wn(.016,.007,5),Dt(T*.05,E*(f-.3),y*(p-u/2),x));for(const y of[h,a])for(const E of[1/6,1/2,5/6])s.add(o,Wn(.012,.006,5),Dt(T*.06,_(y,E),0,x));for(const y of[-1,1])for(const E of[-1,1]){const C=y*(f-u),P=E*(p-u);s.add(o,hn([[C,P],[C-y*b,P],[C,P-E*b]],.012,"x"),Pe(T*.041,0,0))}}const M=Math.min(.7,t-2*u-.3);s.add(r,Vt(.03,.16,M,.004),Pe(-.05,.35,0)),s.build(n,"door-leaf",{cast:r,uv:[.11,.53]});const A={center:[-.065,.35,0],w:M-.01,h:.15};return n.userData.plate=A,{group:n,plate:A,counts:Xs(n)}}const Uo=[[0,0]];for(let i=0;i<6;i++)Uo.push([Math.cos(Math.PI/2+i*Math.PI/3),-Math.sin(Math.PI/2+i*Math.PI/3)]);const iu=[{seg:[[1,3],[3,5],[5,1]],ring:0},{seg:[[0,1],[0,3],[0,5]],ring:1},{seg:[[2,4],[4,6],[6,2],[0,4]],ring:0},{seg:[[1,2],[2,3],[0,5],[0,6]],ring:0},{seg:[[1,4],[2,5],[3,6]],ring:0},{seg:[[1,2],[3,4],[5,6],[0,1]],ring:1}];function bc(i,e,t,n,s,r,o=0){const l=iu[e];i.save(),i.strokeStyle=r,i.lineCap="round",i.lineJoin="round",i.lineWidth=o||Math.max(2,s*.13),i.beginPath();for(const[u,f]of l.seg)i.moveTo(t+Uo[u][0]*s,n+Uo[u][1]*s),i.lineTo(t+Uo[f][0]*s,n+Uo[f][1]*s);i.stroke(),l.ring&&(i.beginPath(),i.arc(t,n,s*.26,0,Math.PI*2),i.stroke()),i.restore()}const Ui=Math.PI/2,Ud={orange:16747050,teal:3528392,red:16726570},Ni=(i,e=.6,t=.3)=>new Ri({color:i,roughness:e,metalness:t}),kr=(i,e=1)=>{const t=new fi({color:new Ue(i).multiplyScalar(e),toneMapped:!1});return t.userData.base=new Ue(i),t},nr=(i,e,t)=>{t!==void 0&&i.userData.base.set(t),i.color.copy(i.userData.base).multiplyScalar(e)},Bf=new dt,Gf=new Y,Ao=new Y,Ro=new Y,Sc=new jt;function wc(i,e,t,n,s,r){dn(e,t,n,i.position),Ao.set(...s).normalize(),Ro.set(...r),Ro.addScaledVector(Ao,-Ro.dot(Ao)).normalize(),Gf.crossVectors(Ao,Ro).negate(),Bf.makeBasis(Gf,Ao,Ro.clone().negate()),Wi(n,i.quaternion).multiply(Sc.setFromRotationMatrix(Bf))}function My(i){const e=new Map;for(const t of i.children.slice()){if(!t.isMesh||t.children.length)continue;t.updateMatrix();const n=t.geometry.index?t.geometry.toNonIndexed():t.geometry.clone();for(const s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);n.applyMatrix4(t.matrix),e.has(t.material)||e.set(t.material,[]),e.get(t.material).push(n),i.remove(t)}for(const[t,n]of e)i.add(new ht(n.length>1?Ei(n,!1):n[0],t));return i}function Vf(i,e,t,n,s,r=!1){const o=document.createElement("canvas");o.width=t,o.height=n,s(o.getContext("2d"),t,n);const l=new Os(o);l.colorSpace=ln,l.anisotropy=8;const u=r?new fi({map:l,toneMapped:!1}):new Ri({map:l,roughness:.7,metalness:.1});return{mesh:new ht(new Hi(i,e),u),mat:u,tex:l}}function xl(i,e=!0){return i.isGroup&&My(i),i.traverse(t=>{t.isMesh&&(t.castShadow=e,t.receiveShadow=!0)}),i}function by(i,e){const{scene:t,level:n}=i,s=new Set(t.children),r={steel:Ni(8752018,.5,.8),dark:Ni(2500909,.7,.5),yellow:Ni(13214247,.6,.1),orange:Ni(13132830,.6,.1),teal:Ni(3112838,.6,.1),red:Ni(9316898,.55,.15),white:Ni(13618629,.6,.1),copper:Ni(13662538,.4,.9)},o={M:r};{const d=new zt;d.add(new ht(new bs(.2,.024,10,36),r.red));for(let a=0;a<3;a++){const _=new ht(new cn(.015,.015,.2,8),r.red),c=Ui+a*2.0944;_.position.set(Math.cos(c)*.1,Math.sin(c)*.1,0),_.rotation.z=c-Ui,d.add(_)}const h=new ht(new cn(.034,.04,.05,12),r.dark);h.rotation.x=Ui,d.add(h),d.position.set(Gt.w/2,1.1,.17),n.dynamic.hatch.group.add(xl(d,!1)),o.wheel={group:d,set(a){d.rotation.z=a}}}const l=new Map,u=(d,h)=>(l.has(d)||l.set(d,h()),l.get(d)),f={paint:d=>u("p"+d,()=>$r(Ni(d,.6,.1),"paint",new Ue(d).lerp(new Ue(7370108),.45).getHex())),metal:d=>u("m"+d,()=>$r(Ni(d,.5,.8),"metal",new Ue(d).lerp(new Ue(9080983),.35).getHex())),plain:(d,h=.6,a=.3)=>u(`s${d}_${h}_${a}`,()=>Ni(d,h,a)),glow:(d,h=1)=>u(`g${d}_${h}`,()=>kr(d,h))},p=[];{const d=(lt.z0+lt.z1)/2,h=lt.z1-lt.z0,a=yy(f,{h:lt.h,len:h}),_=a.group,c=Vf(1.5,.26,768,132,(T,x,y)=>{T.fillStyle="#0d0f12",T.fillRect(0,0,x,y),T.fillStyle="#e8782a",T.font='700 96px "Arial Narrow", Arial, sans-serif',T.textAlign="center",T.textBaseline="middle",T.fillText("МАСТЕРСКАЯ 3",x/2,y/2+4)}),g=(T,x)=>Vf(.98,.2,640,128,(y,E,C)=>{y.fillStyle="#060708",y.fillRect(0,0,E,C),y.strokeStyle=x,y.lineWidth=6,y.strokeRect(5,5,E-10,C-10),y.fillStyle=x,y.font="700 78px ui-monospace, Menlo, monospace",y.textAlign="center",y.textBaseline="middle",y.fillText(T,E/2,C/2+4)},!0),v=g("НЕТ ПИТАНИЯ","#ff3a22"),b=g("ПИТАНИЕ ЕСТЬ","#35e06a");c.mesh.rotation.y=-Ui,c.mesh.position.set(-.072,.66,0),_.add(c.mesh);for(const T of[v,b])T.mesh.rotation.y=-Ui,T.mesh.position.set(-.072,a.plate.center[1],0),_.add(T.mesh);const M=kr(16722458,3),A=new ht(new xn(.04,.05,.9),M);Sn(A,ge.x1-.1,lt.h+.33,d),t.add(_,A),o.bayDoor={set(T,x,y=0){Sn(_,ge.x1+.2,lt.h/2+T*(lt.h-.25),d),nr(M,3,x?3530858:16722458),v.mesh.visible=!x,b.mesh.visible=!!x,v.mat.color.setScalar(1.3+1.1*(Math.sin(y*4.2)>-.3?1:.15)),b.mat.color.setScalar(2.2)}},o.bayDoor.set(0,!1)}{const d=Qe.socket,h=vy(f);Sn(h.group,ge.x1,d.y-.02,d.z,Math.PI),p.push(h.group),o.socket={set(a,_=0){nr(h.ring,a?2.6:.5+3.4*(.5+.5*Math.sin(_*5.5)),a?3530858:16752682),nr(h.led,3,a?3530858:16722458)}}}{const d=dy(f);t.add(d.group),o.battery={group:d.group,r:.2,half:.1,strip:d.strip}}{const d=Qe.cabinet,h=py(f,{});Sn(h.body,ge.x1,d.y,d.z,Math.PI),p.push(h.body);const a=document.createElement("canvas");a.width=256,a.height=256;const _=a.getContext("2d");_.fillStyle="#c9a227",_.fillRect(0,0,256,256),_.fillStyle="#16171a";for(let O=-256;O<512;O+=64)_.beginPath(),_.moveTo(O,256),_.lineTo(O+32,256),_.lineTo(O+288,0),_.lineTo(O+256,0),_.fill();const c=new Os(a);c.colorSpace=ln;const g=h.cover,v=g.getObjectByName("face");v&&(v.material=new Ri({map:c,roughness:.6,metalness:.2}));const b=.89/2-.03,M=.73/2-.03,A=4*(b+M),T=44,x=O=>{let H=O%1*A;return H<2*M?[b,-M+H,1]:(H-=2*M,H<2*b?[b-H,M,0]:(H-=2*b,H<2*M?[-b,M-H,1]:(H-=2*M,[-b+H,-M,0])))},y=[],E=[];for(let O=0;O<T;O++){const[H,X,Z]=x((O+.5)/T),$=A/T,J=new xn(.008,Z?.022:$*1.04,Z?$*1.04:.022);if(J.translate(0,H,X),y.push(J),O%2===0){const re=new xn(.004,Z?.012:$*.7,Z?$*.7:.012);re.translate(0,H,X),E.push(re)}}const C=kr(16756832,4),P=kr(15921126,.55),I=new ht(Ei(y,!1),C),q=new ht(Ei(E,!1),P),L=I.geometry.index.count/T;t.add(g,I,q),o.cover={mesh:g,set(O,H,X=0){const Z=H*H;Sn(g,d.face-Z*.5,d.y-Z*(d.y-.04),d.z,Math.PI),g.rotateZ(-Z*Ui),Sn(I,d.face-.036,d.y,d.z),Sn(q,d.face-.035,d.y,d.z);const $=Math.round(Math.min(1,O)*T);I.geometry.setDrawRange(0,$*L),nr(C,3.2+1.6*Math.sin(X*23)),I.userData.show=I.visible=$>0&&H<=0,q.userData.show=q.visible=H<=0}},o.cover.set(0,0)}for(const[d,h,a,_,c,g,v,b,M]of[[1.55,0,-8.3,.06,.8,.7,1,Lt.white,1],[1.6,0,-9.5,-.1,.7,.6,.8,Lt.orange,2],[1.55,.7,-8.45,.3,.6,.5,.7,Lt.teal,3],[1.35,.52,-17.3,.2,.5,.3,.56,Lt.orange,4],[1.32,.16,-17.12,-.1,.5,.3,.62,Lt.teal,5]]){const A=xy(f,{w:c,h:g,d:v,hex:b,seed:e*10+M});Sn(A.group,d,h,a,_),p.push(A.group)}{const d=new Map;for(const a of p)a.updateMatrixWorld(!0),a.traverse(_=>{if(!_.isMesh)return;const c=_.geometry.index?_.geometry.toNonIndexed():_.geometry.clone();for(const g of Object.keys(c.attributes))["position","normal","uv"].includes(g)||c.deleteAttribute(g);c.applyMatrix4(_.matrixWorld),d.has(_.material)||d.set(_.material,[]),d.get(_.material).push(c)});const h=new zt;for(const[a,_]of d){const c=new ht(_.length>1?Ei(_,!1):_[0],a);c.castShadow=!a.isMeshBasicMaterial,c.receiveShadow=!0,h.add(c)}h.userData.room="corridor",t.add(h)}{const d=_y(f),h=d.group;Sn(h,Qe.tool.x,Qe.tool.y+.01,Qe.tool.z,.9),h.rotateZ(-Ui),t.add(h),o.toolPickup={group:h,glow:d.coil,show(a){h.userData.show=a,h.visible=a}}}o.logs=[...Qe.logs,{key:"log.bay",...Qe.bayLog}].map((d,h)=>{const a=new zt;a.add(new ht(new xn(.2,.06,.13),r.dark));for(const g of[-.045,.045]){const v=new ht(new cn(.028,.028,.012,14),r.steel);v.position.set(g,.034,0),a.add(v)}const _=kr(Ne.turquoise,3),c=new ht(new Xi(.012,8,6),_);return c.position.set(.085,.036,.045),a.add(c),Sn(a,d.x,d.y,d.z,h*1.3+.4),t.add(xl(a,!1)),{...d,group:a,led:_}}),o.levers=Qe.levers.map(d=>{const h=my(f,{hex:Ud[d.color]}),a=h.group;return Sn(a,d.x-d.face[0]*.03,d.y,d.z-d.face[1]*.03,Math.atan2(d.face[0],d.face[1])),t.add(a),{...d,group:a,set(_){h.pivot.rotation.x=_?2.2:.5,nr(h.led,_?.15:3)}}}),o.levers.forEach(d=>d.set(!1));{const d=(ot.z0+ot.z1)/2,h=(ot.z1-ot.z0)/2,a=[-1,1].map(A=>{const T=new Vr;T.box("steelDark",se.x1+.12,ot.h/2,d+A*h/2,.18,ot.h,h,{bevel:0}),T.box("steel",se.x1+.02,ot.h/2,d+A*(h-.12),.04,ot.h-.3,.1,{bevel:0});for(const y of[.5,1.3,2.1])T.box("steel",se.x1+.025,y,d+A*h/2,.03,.06,h-.3,{bevel:0});const x=T.build(n.matsOf.bay);return x.userData.room="bay",t.add(x),x}),_=dn(se.x1,1,d+1).sub(dn(se.x1,1,d)),c=document.createElement("canvas");c.width=1024,c.height=256;const g=new Os(c);g.colorSpace=ln;const v=new fi({map:g,transparent:!0,blending:ni,depthWrite:!1,toneMapped:!1,fog:!1}),b=new ht(new Hi(1.9,.475),v);Sn(b,se.x1-.02,1.55,d,-Ui);const M=new ht(new Hi(2.06,.62),new fi({color:197895}));Sn(M,se.x1-.012,1.55,d,-Ui),t.add(b,M),o.seal={setSigns(A){const T=c.getContext("2d");T.clearRect(0,0,1024,256),A.forEach((x,y)=>{bc(T,x,128+y*256,128,84,"rgba(255,214,150,0.22)",26),bc(T,x,128+y*256,128,84,"#fff0cc",10)}),g.needsUpdate=!0},set(A,T,x){a.forEach((y,E)=>y.position.copy(_).multiplyScalar((E?1:-1)*A*1.22)),v.opacity=(1-A)*(.55+.25*Math.sin(T*1.7))*(.6+.9*x),b.userData.show=b.visible=A<.98,M.userData.show=M.visible=A<.05}}}o.crawlers=Qe.perches.map((d,h)=>{const a=ry({seed:e*7+h});return t.add(xl(a.group)),{...a,perch:d}});{const d=ly({seed:e+3});Sn(d.group,Qe.deadCrawler.x,0,Qe.deadCrawler.z,.7),t.add(d.group),o.dead=d}o.cans=Qe.throwables.map(([d,h],a)=>{const _=gy(f,{variant:a%2});return t.add(_.group),{group:_.group,r:.14,half:.2,x0:d,z0:h}});{let L=function(O,H,X,Z,$){y.set(0,1,0).applyQuaternion(Wi(Math.atan2(O.z,lr-O.y)*lr,Sc));for(let J=0;J<g;J++){const re=X<0?(H*2.6+J*.618)%1:Math.min(1,X/.55),ye=J*2.399,ae=J*.37%1,B=re*Z*(.35+ae);E.set(Math.cos(ye)*B,0,Math.sin(ye)*B).applyQuaternion(Sc).addScaledVector(y,$*(.3+ae)*re-1.6*re*re*(X<0?.35:.6)),v[J*3]=O.x+E.x,v[J*3+1]=O.y+E.y,v[J*3+2]=O.z+E.z}b.attributes.position.needsUpdate=!0};var m=L;const d=(O,H)=>{const X=new fi({color:16777215,toneMapped:!1,transparent:!0,opacity:H,blending:ni,depthWrite:!1,fog:!1}),Z=new cn(O,O,1,8,1,!0);Z.rotateX(Ui),Z.translate(0,0,.5);const $=new ht(Z,X);return $.layers.set(1),$.frustumCulled=!1,$.visible=!1,t.add($),$},h=d(1,1),a=d(1,.22),_=dc(64),c=new Tu(new rc({map:_,color:16777215,toneMapped:!1,transparent:!0,blending:ni,depthWrite:!1,depthTest:!1,fog:!1}));c.visible=!1,c.frustumCulled=!1,t.add(c);const g=56,v=new Float32Array(g*3),b=new kt;b.setAttribute("position",new an(v,3));const M=new Dh({map:_,color:new Ue(7,4.4,1.8),size:.045,toneMapped:!1,transparent:!0,blending:ni,depthWrite:!1,fog:!1}),A=new Vc(b,M);A.frustumCulled=!1,A.visible=!1,t.add(A);const T=new Y,x=new Y,y=new Y,E=new Y;let C=null,P="none",I=0;const q={t0:-9,p:new Y};o.beam={aim(O,H,X="none"){C=O,P=X,I=H,O&&dn(O.p[0],O.p[1],O.p[2],T)},burst(O,H){q.t0=H,dn(O[0],O[1],O[2],q.p)}},i.lateHooks.push((O,H,X)=>{const Z=X.rig!==0&&X.rig!==!1&&i.harma.muzzle,$=!!C&&!!Z;h.visible=a.visible=$;const J=$&&C.kind==="cut"&&C.hit,re=I-q.t0;if(c.visible=J,A.visible=J||re>=0&&re<.55,$){i.harma.muzzle.getWorldPosition(x);const ye=Math.max(.05,x.distanceTo(T)),ae=C.kind==="cut";for(const xe of[h,a])xe.position.copy(x),xe.lookAt(T);const B=ae?.009+.003*Math.sin(I*90):.004;h.scale.set(B,B,ye),a.scale.set(B*(ae?4.5:3),B*(ae?4.5:3),ye);const ee=ae?16767392:Ne.turquoise;h.material.color.set(ee).multiplyScalar(ae?10:2.6),a.material.color.set(ae?16751164:Ne.turquoise).multiplyScalar(ae?3:1.2),h.material.opacity=ae?1:.7}if(J){const ye=P==="armor"?.75:1.25,ae=.8+.2*Math.sin(I*61)*Math.sin(I*17);c.position.copy(T),c.scale.setScalar((P==="armor"?.2:.34)*ae),c.material.color.set(P==="armor"?13623551:16756832).multiplyScalar(5*ye),M.color.set(P==="armor"?14674175:16752704).multiplyScalar(P==="armor"?3.5:7),M.size=P==="armor"?.03:.05,L(T,I,-1,P==="armor"?.22:.42,P==="armor"?.25:.6)}else re>=0&&re<.55&&(M.color.set(16760944).multiplyScalar(8*(1-re/.55)),M.size=.07,L(q.p,I,re,1.1,1.3))})}{const h=new Hi(1,1);h.rotateX(-Ui);const a=new oc(new Float32Array(160).fill(-99),1);h.setAttribute("aBorn",a);const _={value:0},c=new qn({uniforms:{uTime:_},transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:"attribute float aBorn; varying vec2 vUv; varying float vAge; uniform float uTime; void main() { vUv = uv; vAge = uTime - aBorn; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }",fragmentShader:`
        varying vec2 vUv; varying float vAge;
        void main() {
          float r = length(vUv - 0.5) * 2.0;
          float body = smoothstep(1.0, 0.25, r);
          float heat = exp(-max(vAge, 0.0) * 1.5) * smoothstep(0.75, 0.0, r);
          vec3 hot = mix(vec3(1.6, 0.25, 0.03), vec3(9.0, 5.0, 1.6), heat * heat);
          vec3 c = mix(vec3(0.012, 0.011, 0.012), hot, clamp(heat * 1.4, 0.0, 1.0));
          gl_FragColor = vec4(c, body * 0.86 * step(vAge, 900.0));
        }`}),g=new kc(h,c,160);g.frustumCulled=!1,g.count=0,t.add(g);const v=new tn;let b=0,M=0;o.scorch={add(A,T,x,y="armor"){const E=Math.abs(T[1])>.5?[1,0,0]:[0,1,0];wc(v,A[0]+T[0]*.004,A[1]+T[1]*.004,A[2]+T[2]*.004,T,E);const C=y==="seam"?.085:.07;v.scale.set(C,1,C),v.updateMatrix(),g.setMatrixAt(b,v.matrix),a.setX(b,x),g.instanceMatrix.needsUpdate=!0,a.needsUpdate=!0,b=(b+1)%160,M++,g.count=Math.min(160,M)},burst(A,T){o.beam.burst(A,T)},step(A){_.value=A},count:()=>M,clear(){M=0,b=0,g.count=0}}}{const d=dc(64),h=o.crawlers.map(()=>{const a=new Tu(new rc({map:d,color:16777215,toneMapped:!1,transparent:!0,blending:ni,depthWrite:!1,fog:!1}));return a.visible=!1,a.frustumCulled=!1,a.userData.room="bay",t.add(a),a});o.warn={set(a,_,c,g,v,b,M,A){const T=h[a];if(T.visible=T.userData.show=!!_,!_)return;dn(c+b[0]*.28,g+b[1]*.28,v+b[2]*.28,T.position);const x=.75+.25*Math.sin(A*34);T.scale.setScalar(.14+.3*M),T.material.color.set(16730654).multiplyScalar((.9+3*M)*x)}}}{const d=[];for(const v of[-1,1])for(const b of[-1,1])for(const M of[-1,1]){const A=[v*.5,b*.5,M*.5];d.push(...A,A[0]-v*.24,A[1],A[2],...A,A[0],A[1]-b*.24,A[2],...A,A[0],A[1],A[2]-M*.24)}const a=new kt;a.setAttribute("position",new at(d,3));const _=new Gc({color:16777215,toneMapped:!1,transparent:!0,blending:ni,depthWrite:!1,depthTest:!1,fog:!1}),c=new Ph(a,_);c.frustumCulled=!1,c.visible=!1,t.add(c);const g={cut:16756832,grip:Ne.turquoise,e:15921126};o.mark={set(v,b){if(c.visible=!!v,!v)return;const M=v.box,A=(M.z0+M.z1)/2;dn((M.x0+M.x1)/2,(M.y0+M.y1)/2,A,c.position),Wi(A,c.quaternion),c.scale.set(M.x1-M.x0+.04,M.y1-M.y0+.04,M.z1-M.z0+.04),_.color.set(g[v.act]||16777215).multiplyScalar(1.6+.6*Math.sin(b*6))}}}{const d=kr(16756832,3),h=new ht(new xn(.03,.03,.12),d);Sn(h,Qe.terminal.x-.05,Qe.terminal.y-.2,Qe.terminal.z),t.add(h),o.terminal={set(a,_){nr(d,_?2+2*(Math.sin(a*5)>0?1:0):.4)}}}o.cavern=cy(e),o.cavern.group.userData.room="gallery",t.add(o.cavern.group);for(const d of t.children){if(s.has(d)||d.userData.room||d.position.lengthSq()<1e-6)continue;const h=42-d.position.y;d.userData.room=ja(d.position.x,Math.atan2(d.position.z,h)*42)}return o.setGlow=nr,o}async function Sy({kind:i,signs:e=[],expect:t=[],context:n={}}={}){if(i!=="seal")return{ok:!1,line:"op.seal.no",delayMs:0};const s=e.length===t.length&&e.every((r,o)=>r===t[o]);return{ok:s,line:s?"op.seal.yes":"op.seal.no",delayMs:1600,context:n}}const Nd={title:"ДРЕЙФ","act.take":"E: взять инструмент","act.cut":"ЛКМ: резать по шву","act.cut.mode":"F: резак, потом ЛКМ: резать","act.cut.notool":"заварено: нужен резак","act.closer":"подойди ближе","act.cool":"резак остывает","act.grip":"ЛКМ: поднять захватом","act.grip.mode":"F: захват, потом ЛКМ: поднять","act.hold":"отпусти ЛКМ: положить · пробел: бросить","act.hold.battery":"неси к гнезду у двери · отпусти ЛКМ: положить","act.socket.put":"поднеси ближе: батарея встанет сама","act.socket.empty":"гнездо пустое: нужна батарея","act.door.dead":"нет питания: двери нужна батарея","act.lever":"E: опустить рубильник","act.lever.down":"рубильник опущен","act.log":"E: слушать запись","act.terminal":"E: связь с оператором","act.seal":"заросла: передай знаки через терминал","act.burn":"ЛКМ: жечь","act.burn.mode":"F: резак, потом ЛКМ: жечь","hint.wheel":"A / D: крутить штурвал","hint.wheel.touch":"стик влево или вправо: крутить штурвал","hint.move":"WASD: идти · мышь: смотреть","hint.click":"клик: вернуть управление","hint.tool":"F: сменить режим · ЛКМ: включить инструмент","hint.heatwarn":"перегрев близко: отпусти ЛКМ","hint.overheat":"перегрев: резак остывает","mode.cut":"РЕЗАК","mode.grip":"ЗАХВАТ","hud.heat":"нагрев","hud.over":"ПЕРЕГРЕВ","hud.suit":"скафандр","color.orange":"оранжевый","color.teal":"бирюзовый","color.red":"красный","goal.label":"ЦЕЛЬ","goal.wheel":"Открой люк шлюза: крути штурвал","goal.find":"Маяк в мастерской. Иди по коридору","goal.power":"Дверь мастерской обесточена. Найди, чем её запитать","goal.carry":"Донеси батарею до гнезда у двери","goal.enter":"Дверь открыта. Входи в мастерскую","goal.beacon":"Заглуши маяк: три рубильника по порядку","goal.fight":"Автоматы ожили. Отбейся","goal.seal":"Запечатанная дверь. Передай оператору четыре знака","goal.gallery":"Проход открыт. Иди дальше","op.name":"ГРОБОВЩИК","op.start":"Харма, это Гробовщик. Станция мертва по документам. Заглуши маяк, и я закрою дело.","op.hatch":"Внутри давление есть, воздух ничей. Шлем не снимай, я за него расписывался.","op.tool":"Захват и резак в одном корпусе. Казённый. Потеряешь, вычту из гонорара.","op.door.dead":"Дверь обесточена. Гнездо под батарею рядом, справа. Осталось найти батарею.","op.battery":"Батарея. Неси её захватом к гнезду у двери. Лапами не трогай.","op.door.open":"Питание есть. Заходи, маяк там.","op.bay":"Маяк собран вручную. Заводские так не выглядят. Глуши.","op.wrong":"Не тот. Он вернул всё как было. Упрямая вещь для самоделки.","op.step1":"Первый контур.","op.step2":"Второй. Сигнал слабеет.","op.down":"Один есть. Харма, почему у тебя за спиной стало светлее?","op.fight":"Автоматы ожили. Резак у тебя не для красоты. И кидаться в них тоже не запрещено.","op.heat":"Резак перегрелся. Пара секунд, и он снова в деле.","op.hurt":"Скафандр держит. Пока.","op.dead":"Связь есть, тебя нет. Попробуем ещё раз, будто ничего не было.","op.clear":"Тихо. Автоматы кончились раньше, чем вопросы.","op.seal":"Этого в описи нет. Опиши мне, что видишь. Канал открыт.","op.seal.terminal":"Терминал предлагает запросить оператора. Оператор это я. Запрашивай.","op.seal.ask":"Четыре знака на двери. Назови по порядку, слева направо.","op.seal.wait":"Ищу в архиве «Тарна». Не уходи далеко.","op.seal.no":"Такой последовательности в архиве нет. Посмотри ещё раз, я подожду, мне платят по часам.","op.seal.yes":"Нашёл. Сервисная маркировка: техническая галерея, смотровая. Отзыв отправлен. Дверь не заперта, она заросла.","op.gallery":"Харма. Скажи мне, что это шахта.","op.gallery2":"Оно повернулось. Маяков осталось два. Я пока ничего не подписываю.","op.frost":"Иней при минус сорока дело обычное. Иней, который растёт по линейке, я бы в акт не вносил.","op.window":"Красивый камень. Заказчик продаёт его вместе со станцией, так что не поцарапай.","op.camp":"Постели в коридоре. Каюты были в ста метрах. Люди не спят у двери без причины.","op.tally":"Сорок один день. Спасатели по документам пришли на третий.","op.barricade":"Заварено изнутри. Эвакуацию так не проводят.","op.crawler":"Ремонтный автомат. Сломался раньше станции, редкий случай. То, что из него растёт, в гарантию не входит.","op.wrong.door":"Эту дверь резаком не взять, там броня в ладонь. Ей нужно питание, а не дыра.","op.wrong.panel":"Это электрощит. В нём предохранители, а не батарея. Батареи держат в шкафу под лампой.","op.wrong.wall":"Обшивку ты будешь резать до пенсии. Режется то, на чём есть шов.","op.wrong.grip":"Крышка приварена. Захватом её не оторвать, режь по шву.","op.wrong.socket":"В гнездо вставляют батарею. Резать его незачем, оно и так пустое.","op.wrong.battery":"Батарею резаком не трогай. Она этого не любит, а я не люблю объяснительные.","op.wrong.seal":"Не режется. Оно даже не греется. Опиши мне знаки, я поищу в архиве.","hint.wheel.1":"Штурвал у тебя в лапах. По чертежу он крутится.","hint.wheel.2":"Нажми A или D и держи, пока люк не откроется.","hint.tool.1":"Без инструмента ты тут на экскурсии. Его оставили на ящике в начале коридора.","hint.tool.2":"Белый ящик у правой стены сразу за шлюзом. Наведи прицел на инструмент и нажми E.","hint.find.1":"Маяк в мастерской. Она дальше по коридору, справа.","hint.find.2":"Иди по коридору до двери «МАСТЕРСКАЯ 3» в правой стене. Над ней красная лампа.","hint.cabinet.1":"От гнезда у двери по стене идёт оранжевый кабель. Кабели обычно куда-то ведут.","hint.cabinet.2":"Шкаф с батареей на той же стене, под лампой, с полосатой крышкой. Нажми F, чтобы включить резак, и держи левую кнопку на крышке, пока она не отвалится.","hint.carry.1":"Батарея весит как сейф. Захват в инструмент поставили не для красоты.","hint.carry.2":"Нажми F для захвата, наведись на батарею и держи левую кнопку. Не отпуская, донеси её до мигающего гнезда справа от двери.","hint.enter.1":"Дверь открыта. Маяк внутри, я подожду.","hint.enter.2":"Заходи в мастерскую через открытую дверь.","hint.levers.1":"Он мигает тремя цветами. Рубильники тоже трёх цветов. Я бы не стал считать это совпадением.","hint.levers.2":"Смотри на лампу маяка: три вспышки, потом пауза. Опускай рубильники в том же порядке: {order}.","hint.fight.1":"Автоматы боятся резака. Подпусти ближе и жги.","hint.fight.2":"Нажми F, чтобы на инструменте загорелась линза. Наведи прицел на автомат в двух шагах и держи левую кнопку. Баллоны можно бросать: захват, потом пробел.","hint.signs.1":"Слева от заросшей двери терминал. Он просит оператора. Оператор скучает.","hint.signs.2":"Подойди к терминалу, нажми E и выбери четыре знака в том порядке, как они на табличке двери, слева направо. Потом «Передать».","log.title":"ЗАПИСЬ ЭКИПАЖА","log.bay":"…если кто-то это слышит. Не выключайте. Мы собрали три, из того, что было. Пока звучат все три, оно спит. Не выключайте.","log.1":"День девятый. Бур вскрыл полость. Там не порода. Там решётка, как иней на стекле, только каждая ветка ровно втрое меньше прежней. Геолог говорит, такого рисунка в справочниках нет. Он старше справочников.","log.2":"День двадцать второй. Мы дали в полость радиоимпульс, чтобы измерить глубину. Через три секунды пришёл ответ. Не эхо: наш импульс, повторённый трижды. С тех пор оно растёт в сторону передатчика.","log.3":"День сороковой. Датировка керна готова, я проверила четыре раза. Лёд вокруг решётки старше Солнца. Оно ждало здесь до того, как было чему светить. Лида, прости, я не полечу домой: кто-то должен крутить ручку.","comm.title":"КАНАЛ ОТКРЫТ","comm.pick":"Выбери четыре знака в том порядке, в каком они на двери","comm.send":"Передать","comm.clear":"Стереть","comm.close":"Закрыть","comm.sent":"Передано: ","pause.title":"ПАУЗА","pause.resume":"Клик или Esc: продолжить","pause.keys":"WASD идти · Shift быстрее · мышь смотреть · ЛКМ инструмент · F захват / резак · E действие · пробел бросить или рывок · Esc пауза","pause.scenes":"Проверка: начать со сцены","scene.wheel":"начало","scene.corridor":"коридор","scene.tool":"с инструментом","scene.battery":"шкаф вскрыт","scene.bay":"маяк","scene.fight":"бой","scene.seal":"запечатанная дверь","scene.gallery":"галерея","end.title":"ДРЕЙФ","end.sub":"Продолжение следует","end.time":"Время прохождения: ","end.again":"Enter: сначала","end.again.touch":"коснись экрана: сначала","start.click":"Клик, чтобы начать",guest:"гостевой режим: прогресс хранится только в этой вкладке"};let wy=Nd;function Ot(i){return wy[i]??Nd[i]??i}function Ty(i,e){const t=Ot(i);return e?t.replace(/ЛКМ/g,"◎").replace(/пробел/g,"⇧"):t}const xi=(i,e,t)=>Math.max(e,Math.min(t,i)),Wt={cutRange:2.6,gripRange:6,hold:.9,holdDrop:.26,cutTime:2.5,heatTime:6.5,cool:.55,warn:.72,reach:2.3,dps:55},Ey=i=>Math.max(3,1.3+i.length*.068),Co={sec:40,max:2},vl={first:40,next:40,repeat:60},Ay=["wheel","corridor","tool","battery","bay","fight","seal","gallery"];function Ry(i,e,{seed:t=1,ui:n=null,audio:s=null,exhibit:r=!1,mut:o=""}={}){const l=qi(Math.imul(t^1540483477,2654435761)>>>0);for(let S=0;S<5;S++)l();const u=[0,1,2];for(let S=2;S>0;S--){const z=Math.floor(l()*(S+1));[u[S],u[z]]=[u[z],u[S]]}const f=Array.from({length:4},()=>Math.floor(l()*iu.length));e.seal.setSigns(f);const p=new Proxy(s||{},{get:(S,z)=>typeof S[z]=="function"?S[z].bind(S):()=>0}),m=n||new Proxy({},{get:()=>()=>0}),d=new Set(String(o||"").split(",").filter(Boolean)),h=Nv(),a={scene:r?"exhibit":"wheel",t:0,play:0,sceneT:0,times:{},hatch:r?1:0,wheel:0,hasTool:!1,seenDoor:!1,cut:0,coverFall:0,battery:"cabinet",door:r?1:0,powered:r,steps:0,wrongs:0,beacon:1,lightsDown:0,wake:0,wakeTarget:0,bayT:0,cleared:!1,seal:0,sealOpening:!1,asked:!1,waiting:!1,attempts:0,turn:0,galleryT:0,ended:!1,hp:100,hurtT:9,hurt:0,fade:1,dead:0,deaths:0,dashT:0,dashV:[0,0],shake:0,mode:"grip",heat:0,over:!1,firing:!1,held:null,pull:null,warnT:0,modeT:9,said:{},spoken:[],timers:[],paused:!1,lock:!1,hit:null,focus:null,surf:"none",beam:null,markT:0,markP:null,goal:"",goalT:0,goals:[],stage:"",hintLv:0,progT:0,hints:[],wrong:{door:0,wall:0,seal:0,socket:0,panel:0,battery:0},dmg:0,fightT:0};let _=wf({hatchOpen:r,bayDoor:r,seal:!1}),c=[];const g=()=>{c=Iv({hatchOpen:a.hatch>.6,door:a.door,seal:a.seal,cover:a.coverFall<=0,tool:!a.hasTool&&!r,seed:t})},v=()=>{_=wf({hatchOpen:a.hatch>.6,bayDoor:a.door>.7,seal:a.seal>.8}),g()};g();const b=(S,z)=>a.timers.push({at:a.t+S,fn:z}),M=()=>{a.progT=a.play},A=S=>{a.times[a.scene]=+(a.play-(a.sceneStart||0)).toFixed(2),a.sceneStart=a.play,a.scene=S,a.sceneT=0,M()},T={q:[],cur:null,lastEnd:-99,early:0},x=new Set(["op.battery","op.door.open","op.step1","op.step2","op.down","op.fight","op.clear","op.seal.yes","op.seal.no","op.gallery"]);function y(S,z="story",D={}){return a.said[S]||z==="ambient"&&(a.play<Co.sec||T.cur||T.q.length||a.play-T.lastEnd<10||C())||z==="react"&&d.has("nowrong")?!1:(a.said[S]=1,T.q.push({key:S,cls:z,at:a.play,text:D.text||Ot(S)}),!0)}const E=(S,z,D)=>(a.said[S]=0,y(S,z,D)),C=()=>a.firing||!!a.pull||a.wheeling;function P(S){if(T.cur){if(T.cur.left-=S,T.cur.left>0)return;T.cur=null,T.lastEnd=a.play,m.sub(null)}const z=T.q;for(let ie=z.length-1;ie>=0;ie--){const le=a.play-z[ie].at;(z[ie].cls==="react"&&le>12||z[ie].cls==="hint"&&le>25)&&z.splice(ie,1)}if(!z.length||a.play-T.lastEnd<.5)return;const D=a.play<Co.sec&&T.early>=Co.max;let V=z.findIndex(ie=>ie.cls==="react"||ie.cls==="log");if(V<0&&!C()&&(V=z.findIndex(ie=>x.has(ie.key)),V<0&&(V=0)),V<0)return;if(D){z[V].cls!=="story"&&z.splice(V,1);return}const k=z.splice(V,1)[0],ne=Ey(k.text);T.cur={key:k.key,cls:k.cls,left:ne},a.play<Co.sec&&T.early++,a.spoken.push({key:k.key,cls:k.cls,at:+a.play.toFixed(2),dur:+ne.toFixed(2)}),m.sub(k.key,{log:k.cls==="log",text:k.text}),k.cls==="log"?p.logOpen():(k.cls==="hint"&&p.hint(),p.radioSpeak(k.text,ne-.5))}function I(){return a.scene==="wheel"?"goal.wheel":a.scene==="airlock"||a.scene==="corridor"?a.powered?"goal.enter":a.coverFall>0?"goal.carry":a.seenDoor?"goal.power":"goal.find":a.scene==="bay"?a.steps>=3?"":"goal.beacon":a.scene==="fight"?"goal.fight":a.scene==="seal"?a.sealOpening?"goal.gallery":"goal.seal":""}function q(S){const z=d.has("nogoal")?"":I();z!==a.goal?(a.goal=z,a.goalT=0,z&&(a.goals.push({key:z,at:+a.play.toFixed(2)}),p.goal()),m.goal(z,!!z)):z&&(a.goalT+=S,a.goalT>7&&a.goalT-S<=7&&m.goal(z,!1))}function L(){return a.dead>0||a.ended||a.lock?"":a.scene==="wheel"?"wheel":a.scene==="airlock"||a.scene==="corridor"?a.powered?"enter":a.hasTool?a.coverFall>0?"carry":a.seenDoor?"cabinet":"find":"tool":a.scene==="bay"?a.steps>=3?"":"levers":a.scene==="fight"?"fight":a.scene==="seal"?a.sealOpening?"":"signs":""}const O={orange:"color.orange",teal:"color.teal",red:"color.red"};function H(){const S=L();if(S!==a.stage){a.stage=S,a.hintLv=0,M();return}if(!S||d.has("nohint"))return;const z=a.hintLv===0?vl.first:a.hintLv===1?vl.next:vl.repeat;if(a.play-a.progT<z)return;a.hintLv=Math.min(2,a.hintLv+1);const D=`hint.${S}.${a.hintLv}`,V=Ot(D).replace("{order}",u.map(k=>Ot(O[Qe.levers[k].color])).join(", "));E(D,"hint",{text:V}),a.hints.push({stage:S,level:a.hintLv,at:+a.play.toFixed(2)}),a.progT=a.play}const X=Qe.cabinet,Z=Qe.socket,$=ge.x1-.135,J={x:X.rest,y:X.y-.08,z:X.z,vx:0,vy:0,vz:0,r:.2,half:.1,yaw:Math.PI/2,name:"battery",free:!1,rest:!0,prop:e.battery,box:[.21,.15,.21]},re=e.cans.map((S,z)=>({x:S.x0,y:S.half,z:S.z0,vx:0,vy:0,vz:0,r:S.r,half:S.half,yaw:z,name:"can"+z,free:!0,prop:S,box:[.2,S.half+.08,.2]})),ye=[J,...re];function ae(S,z){if(S===a.held||!S.free||S.rest)return;if(S.vy-=9.8*z,S.x+=S.vx*z,S.y+=S.vy*z,S.z+=S.vz*z,S.y<S.half){S.y=S.half,S.vy<-1.2&&p.crawlerStep(Math.hypot(S.x-h.x,S.z-h.z),0),S.vy=-S.vy*.28;const k=Math.pow(.02,z);S.vx*=k,S.vz*=k,Math.abs(S.vy)<.5&&(S.vy=0)}const D=S.x,V=S.z;cl(S,_,S.r),S.x!==D&&(S.vx*=-.3),S.z!==V&&(S.vz*=-.3),S.x=xi(S.x,-1.9,De.x1-.2),S.z=xi(S.z,ge.z0+.3,6.2)}const B=se.x0+.5,ee=se.x1-.5,xe=se.z0+.5,ze=se.z1-.5,te=.8,be=8.5,ue=e.crawlers.map((S,z)=>({c:S,i:z,perch:S.perch,hp:100,state:"perch",x:S.perch.x,y:S.perch.y,z:S.perch.z,n:[0,1,0],f:[0,0,-1],st:0,cd:0,hurt:0,attack:0,walk:0,dead:0,path:null,leap:null,retreated:!1,stepT:0}));function Me(S){const z=S.perch;S.x=z.x,S.y=z.y,S.z=z.z,S.n=z.s==="ceil"?[0,-1,0]:z.s==="wallE"?[-1,0,0]:[0,0,1],S.f=z.s==="ceil"?[0,0,1]:[0,-1,0]}function qe(S){const z=S.perch;z.s==="ceil"?S.path=[{x:z.x,y:se.h-.06,z:se.z1-.06,n:[0,-1,0]},{x:z.x,y:.12,z:se.z1-.06,n:[0,0,-1]}]:S.path=[{x:z.x,y:.12,z:z.z,n:S.n.slice()}],S.state="path",p.crawlerWake()}const $e=S=>ue.filter(z=>z.state==="perch").forEach((z,D)=>b(S+D*be,()=>{z.state==="perch"&&a.scene==="fight"&&qe(z)}));function pe(){for(const S of ue)S.dead>=1&&S.hp<=0||(S.hp=100,S.state="perch",S.cd=0,S.attack=0,S.hurt=0,S.retreated=!1,Me(S))}ue.forEach(Me);const we=(S,z)=>xi(Math.sin(Math.atan2(S,z)-h.yaw),-1,1);function Re(S,z){if(S.hurt=Math.max(0,S.hurt-z*3),S.cd=Math.max(0,S.cd-z),S.st+=z,S.state==="dead"){S.dead=Math.min(1,S.dead+z*2.5),S.walk=0,S.attack=0,S.y>.1&&(S.y=Math.max(.1,S.y-z*4)),S.n=[0,1,0];return}if(S.state==="perch"){S.walk=0;return}const D=h.x-S.x,V=h.z-S.z,k=Math.hypot(D,V);S.stepT-=z;const ne=()=>{S.stepT<=0&&(S.stepT=.16,p.crawlerStep(k,we(D,V)))};if(S.state==="path"||S.state==="climb"){const ie=S.path[0],le=ie.x-S.x,de=ie.y-S.y,Ie=ie.z-S.z,_e=Math.hypot(le,de,Ie),Ve=2.6*z;S.n=ie.n,S.walk=1,ne(),_e<=Ve?(S.x=ie.x,S.y=ie.y,S.z=ie.z,S.path.shift(),S.path.length||(S.state==="climb"?(S.state="cling",S.st=0):(S.state="chase",S.n=[0,1,0],S.y=.1))):(S.x+=le/_e*Ve,S.y+=de/_e*Ve,S.z+=Ie/_e*Ve,S.f=[le/_e,de/_e,Ie/_e]);return}if(S.state==="cling"){S.walk=0,S.f=[0,-1,0],S.attack=Math.min(.6,S.st/1.1*.6),S.st>1.1&&(S.state="leap",S.st=0,S.leap={x0:S.x,y0:S.y,z0:S.z,x1:xi(h.x,B,ee),z1:xi(h.z,xe,ze)},p.crawlerAttack(0));return}if(S.state==="leap"){const ie=Math.min(1,S.st/.75),le=S.leap;S.x=le.x0+(le.x1-le.x0)*ie,S.z=le.z0+(le.z1-le.z0)*ie,S.y=le.y0+(.1-le.y0)*ie+Math.sin(ie*Math.PI)*.9,S.n=[0,1,0],S.f=[le.x1-le.x0,0,le.z1-le.z0],S.attack=.7,S.walk=0,ie>=1&&(S.state="chase",S.attack=0,S.y=.1,k<1.1&&Se(26));return}if(S.n=[0,1,0],S.y=.1,k>.001&&(S.f=[D/k,0,V/k]),S.state==="chase"){if(S.attack=Math.max(0,S.attack-z*4),S.hp<50&&!S.retreated){S.retreated=!0;const ie=[[B-.44,S.z,[1,0,0]],[ee+.44,S.z,[-1,0,0]],[S.x,xe-.44,[0,0,1]],[S.x,ze+.44,[0,0,-1]]].filter(le=>!(le[0]>ee&&le[1]>ot.z0-.4&&le[1]<ot.z1+.4)).sort((le,de)=>Math.hypot(le[0]-S.x,le[1]-S.z)-Math.hypot(de[0]-S.x,de[1]-S.z))[0];S.path=[{x:ie[0],y:.12,z:ie[1],n:[0,1,0]},{x:ie[0],y:2.5,z:ie[1],n:ie[2]}],S.state="climb";return}if(k<1&&S.cd<=0&&a.dead<=0){S.state="windup",S.st=0,p.crawlerWindup(we(D,V));return}if(k>.8){const ie=2.55*z;S.x+=D/k*ie,S.z+=V/k*ie,S.walk=1,ne(),cl(S,_,.3);for(const le of ue)if(le!==S&&le.state!=="dead"&&le.state!=="perch"){const de=S.x-le.x,Ie=S.z-le.z,_e=Math.hypot(de,Ie);_e<.6&&_e>.001&&(S.x+=de/_e*(.6-_e)*.5,S.z+=Ie/_e*(.6-_e)*.5)}S.x=xi(S.x,B,ee),S.z=xi(S.z,xe,ze)}else S.walk=0;return}S.state==="windup"&&(S.walk=0,S.attack=Math.min(1,S.st/te),S.st>=te&&(p.crawlerAttack(we(D,V)),k<1.3&&Se(34),S.state="chase",S.cd=1.4))}function Oe(S,z){S.state==="dead"||S.state==="perch"||(S.hp-=z,S.hurt=1,a.dmg+=z,M(),S.hp<=0&&(S.state="dead",S.st=0,p.crawlerDie()))}function Se(S){a.dead>0||a.ended||(a.hp-=S,a.hurtT=0,a.hurt=1,a.shake=1,p.hurt(),a.hp>0?y("op.hurt","react"):(a.dead=.001,a.deaths++,p.death(),a.firing=!1,a.held=null,a.pull=null))}function Ze(){Object.assign(h,{x:3.4,z:-24,yaw:-Math.PI/2,pitch:0}),a.hp=100,a.heat=0,a.over=!1,a.hurt=0,a.dashT=0,pe(),$e(1.6),p.respawn(),E("op.dead","react"),M()}const He=()=>[h.x,Zt,h.z],st=()=>{const S=Math.cos(h.pitch);return[-Math.sin(h.yaw)*S,Math.sin(h.pitch),-Math.cos(h.yaw)*S]};function rt(S,z,D){const V=He(),k=S-V[0],ne=z-V[1],ie=D-V[2];h.yaw=Math.atan2(-k,-ie),h.pitch=Math.atan2(ne,Math.hypot(k,ie))}const ct=(S,z,D)=>Math.hypot(h.x-S,h.z-z)<D,Q=(S,z,D,V,k)=>({x0:S-V[0],x1:S+V[0],y0:z-V[1],y1:z+V[1],z0:D-V[2],z1:D+V[2],id:k});function It(){const S=[];for(const z of ye)z!==a.held&&z.free&&S.push(Q(z.x,z.y,z.z,z.box,z.name));for(const z of ue)z.state!=="perch"&&z.state!=="dead"&&S.push(Q(z.x,z.y+.12,z.z,[.38,.26,.38],"crawler"+z.i));return S}function ut(){const S=He(),z=st(),D=Tf(S,z,c.concat(It()),40);a.hit=D?{id:D.box.id||"",t:D.t,p:[S[0]+z[0]*D.t,S[1]+z[1]*D.t,S[2]+z[2]*D.t],n:D.n,box:D.box}:null,a.focus=d.has("nofocus")?null:Ae(a.hit)}function Ae(S){if(!S||!S.id||a.lock||a.dead>0||a.ended||a.scene==="wheel")return null;const z=S.id,D=S.t,V=(k,ne)=>({id:z,act:k,label:ne,box:S.box});if(z==="tool")return!a.hasTool&&D<Wt.reach?V("e","act.take"):null;if(z==="cover")return a.coverFall>0||D>Wt.cutRange+2.5?null:a.hasTool?D>Wt.cutRange?V("info","act.closer"):a.mode!=="cut"?V("info","act.cut.mode"):V("cut",a.over?"act.cool":"act.cut"):V("info","act.cut.notool");if(z==="battery"||z.startsWith("can"))return!(z==="battery"?J:re[+z.slice(3)]).free||!a.hasTool||D>Wt.gripRange?null:a.mode==="grip"?V("grip","act.grip"):V("info","act.grip.mode");if(z==="door")return!a.powered&&D<3.2?V("info","act.door.dead"):null;if(z==="socket")return!a.powered&&D<3.2?V("info",a.held===J?"act.socket.put":"act.socket.empty"):null;if(z.startsWith("lever"))return a.scene!=="bay"||D>Wt.reach?null:e.levers[+z.slice(5)].down?V("info","act.lever.down"):V("e","act.lever");if(z.startsWith("log:")){const k=e.logs.find(ne=>ne.key===z.slice(4));return k&&!k.heard&&k.key!=="log.bay"&&D<Wt.reach?V("e","act.log"):null}return z==="terminal"?a.scene==="seal"&&!a.sealOpening&&!a.waiting&&D<Wt.reach?V("e","act.terminal"):null:z==="seal"?a.scene==="seal"&&!a.sealOpening&&D<4.5?V("info","act.seal"):null:z.startsWith("crawler")&&a.hasTool&&D<=Wt.cutRange?a.mode==="cut"?V("cut",a.over?"act.cool":"act.burn"):V("info","act.burn.mode"):null}function ve(S){a.mode!==S&&(a.mode=S,a.modeT=0,(a.held||a.pull)&&Be(!1),p.toolMode(S),m.modeFlash(S))}function je(S,z){const D=z.fire&&a.hasTool&&!a.lock&&a.dead<=0&&a.scene!=="wheel";a.modeT+=S,z.press.has("f")&&a.hasTool&&ve(a.mode==="grip"?"cut":"grip");const V=a.hit;if(a.beam=null,a.surf="none",a.mode==="cut"){const k=D&&!a.over;if(k&&!a.firing&&p.cutOn(),!k&&a.firing&&p.cutOff(),a.firing=k,k){a.heat+=S/Wt.heatTime,a.heat>=1?(a.heat=1,a.over=!0,a.firing=!1,p.cutOff(),p.overheat(),y("op.heat","react")):a.heat>Wt.warn&&(a.warnT-=S,a.warnT<=0&&(a.warnT=.45,p.heatWarn()));const ne=V&&V.t<=Wt.cutRange,ie=He(),le=st(),de=ne?V.t:Wt.cutRange;if(a.beam={kind:"cut",p:[ie[0]+le[0]*de,ie[1]+le[1]*de,ie[2]+le[2]*de],hit:ne},ne){const Ie=V.id;if(Ie==="cover"&&a.coverFall<=0)a.surf="seam",a.cut=Math.min(1,a.cut+S/Wt.cutTime),M(),a.cut>=1&&(a.coverFall=.001,J.free=!0,g(),y("op.battery"),p.throwObj());else if(Ie.startsWith("crawler")){const Ke=ue[+Ie.slice(7)];a.surf="crawler",Oe(Ke,Wt.dps*S),(a.t*10|0)%3===0&&Ke.hurt>.95&&p.crawlerHit()}else{a.surf="armor";const Ke=a.wrong;Ie==="door"&&!a.powered?(Ke.door+=S,Ke.door>.5&&y("op.wrong.door","react")):Ie==="seal"?(Ke.seal+=S,Ke.seal>.5&&y("op.wrong.seal","react")):Ie==="socket"&&!a.powered?(Ke.socket+=S,Ke.socket>.5&&y("op.wrong.socket","react")):Ie==="battery"?(Ke.battery+=S,Ke.battery>.5&&y("op.wrong.battery","react")):Ie==="panel"&&a.coverFall<=0?(Ke.panel+=S,Ke.panel>.6&&y("op.wrong.panel","react")):a.coverFall<=0&&a.scene==="corridor"&&Ie!=="cabinet"&&(Ke.wall+=S,Ke.wall>3&&y("op.wrong.wall","react"))}a.markT-=S;const _e=a.markP;(!_e||Math.hypot(V.p[0]-_e[0],V.p[1]-_e[1],V.p[2]-_e[2])>.035||a.markT<=0)&&(e.scorch.add(V.p,V.n,a.t,a.surf),a.markP=V.p,a.markT=.12)}p.cutSurface(a.surf)}else a.heat=Math.max(0,a.heat-S*Wt.cool);a.over&&a.heat<=.2&&(a.over=!1)}else if(a.firing&&(p.cutOff(),a.firing=!1),a.heat=Math.max(0,a.heat-S*Wt.cool),a.over&&a.heat<=.2&&(a.over=!1),D){if(!a.held&&!a.pull){const ne=a.focus;if(ne&&ne.act==="grip"){const ie=ne.id==="battery"?J:re[+ne.id.slice(3)];a.pull=ie,ie.rest=!1,p.gripOn(),M()}else V&&V.id==="cover"&&V.t<Wt.gripRange&&z.fireNew&&y("op.wrong.grip","react")}const k=a.held||a.pull;if(k){const ne=He(),ie=st(),le=ne[0]+ie[0]*Wt.hold,de=xi(ne[1]+ie[1]*Wt.hold-Wt.holdDrop,k.half,2.4),Ie=ne[2]+ie[2]*Wt.hold;if(a.held)k.x=le,k.y=de,k.z=Ie,cl(k,_,.12),k.vx=k.vy=k.vz=0,k.yaw=h.yaw;else{const _e=le-k.x,Ve=de-k.y,Ke=Ie-k.z,Fe=Math.hypot(_e,Ve,Ke),Mt=7*S;Fe<=Math.max(Mt,.12)?(a.held=k,a.pull=null,p.gripHold(!0),M()):(k.x+=_e/Fe*Mt,k.y+=Ve/Fe*Mt,k.z+=Ke/Fe*Mt,k.vx=k.vy=k.vz=0)}if(a.beam={kind:"grip",p:[k.x,k.y,k.z],hit:!1},z.press.has("space")&&a.held){const _e=st();k.vx=_e[0]*10,k.vy=_e[1]*10+1.6,k.vz=_e[2]*10,Be(!0),z.press.delete("space")}}}else(a.held||a.pull)&&Be(!1)}function Be(S){a.held&&(p.gripHold(!1),S?p.throwObj():p.gripOff(),a.held.thrown=S?1.2:0),a.held=null,a.pull=null}let Ye=!1;function G(S,z){if(a.paused||r){a.t+=r?S:0,r&&w();return}a.t+=S,a.sceneT+=S,a.ended||(a.play+=S);for(let de=a.timers.length-1;de>=0;de--)if(a.timers[de].at<=a.t){const Ie=a.timers[de].fn;a.timers.splice(de,1),Ie()}a.hurt=Math.max(0,a.hurt-S*1.6),a.hurtT+=S,a.shake=Math.max(0,a.shake-S*4),a.hurtT>5&&a.hp<100&&a.dead<=0&&(a.hp=Math.min(100,a.hp+12*S)),a.wake+=(a.wakeTarget-a.wake)*Math.min(1,S*.45),z.fireNew=z.fire&&!Ye,Ye=z.fire;let D="";a.dead>0&&(a.dead+=S,a.fade=a.dead<.7?1-a.dead/.7:a.dead<1?0:Math.min(1,(a.dead-1)/.9),a.dead>=1&&a.hp<=0&&Ze(),a.dead>=1.9&&(a.dead=0,a.fade=1));const V=a.scene==="wheel"||a.lock||a.dead>0&&a.dead<1||a.ended;if(h.input.forward=V?0:z.fwd,h.input.strafe=V?0:z.strafe,h.speed=z.run?5.2:3.2,a.dashT=Math.max(0,a.dashT-S),z.press.has("space")&&!a.held&&!V&&a.dashT<=0&&a.scene!=="wheel"){const de=z.fwd||z.strafe?[z.fwd,z.strafe]:[-1,0],Ie=Math.hypot(de[0],de[1]),_e=Math.sin(h.yaw),Ve=Math.cos(h.yaw);a.dashV=[(-_e*de[0]+Ve*de[1])/Ie*9,(-Ve*de[0]-_e*de[1])/Ie*9],a.dashT=1.1}a.dashT>.92&&(h.x+=a.dashV[0]*S,h.z+=a.dashV[1]*S),od(h,_,S),ut();const k=a.focus,ne=z.press.has("e")&&k&&k.act==="e";if(a.wheeling=!1,a.scene==="wheel"){Object.assign(h,{x:Qe.wheelCam.x,z:Qe.wheelCam.z}),h.yaw=xi(h.yaw,-.3,.3),h.pitch=xi(h.pitch,-.3,.25),a.sceneT>.7&&y("op.start");const de=xi(z.wheel,-1,1);de&&(a.wheel+=de*2.4*S,p.wheel(Math.abs(a.wheel)/5.2),a.wheeling=!0,M()),D=n&&n.isTouch?"hint.wheel.touch":"hint.wheel",Math.abs(a.wheel)>=5.2&&(A("airlock"),p.hatchOpen())}else a.hatch<1&&(a.hatch=Math.min(1,a.hatch+S/1.3),a.hatch>.6&&!a._hc&&(a._hc=1,v()));if(a.scene==="airlock"&&(a.sceneT<8&&a.hatch>=1&&!a._moved&&(z.fwd||z.strafe?a._moved=1:D="hint.move"),a.hatch>=1&&y("op.hatch","ambient"),h.z<-.3&&A("corridor")),!a.hasTool&&a.scene!=="wheel"&&(e.setGlow(e.toolPickup.glow,2+2*(.5+.5*Math.sin(a.t*4))),ne&&k.id==="tool"&&(a.hasTool=!0,e.toolPickup.show(!1),g(),p.pickup(),y("op.tool"),a._toolHint=a.t,M())),(a.scene==="corridor"||a.scene==="airlock")&&(ct(Te.x,(Te.z0+Te.z1)/2,1.9)&&y("op.window","ambient"),ct(Qe.deadCrawler.x,Qe.deadCrawler.z,1.7)&&y("op.crawler","ambient"),h.z<-21.6&&h.x<.2&&y("op.camp","ambient"),ct(-1.4,-25.4,1.5)&&y("op.tally","ambient"),h.z<-27.5&&y("op.barricade","ambient"),ct(ge.x1,-26.6,1.5)&&y("op.frost","ambient"),!a.seenDoor&&!a.powered&&ct(ge.x1,(lt.z0+lt.z1)/2,3.4)&&(a.seenDoor=!0,y("op.door.dead"),M()),a.hasTool&&a._toolHint!==void 0&&a.t-a._toolHint<7&&(D="hint.tool")),a.coverFall>0&&a.coverFall<1&&(a.coverFall=Math.min(1,a.coverFall+S/.6)),a.battery!=="socket"&&J.free&&Math.hypot(J.x-Z.x,J.y-Z.y,J.z-Z.z)<.6&&((a.held===J||a.pull===J)&&Be(!1),J.free=!1,a.battery="socket",a.powered=!0,M(),Object.assign(J,{x:$,y:Z.y-.06,z:Z.z,yaw:Math.PI/2}),p.socket(),b(.5,()=>{p.doorPower(),y("op.door.open")})),a.powered&&a.door<1&&a.scene!=="exhibit"&&(a.door=Math.min(1,a.door+S/1.4),g(),a.door>.7&&!a._dc&&(a._dc=1,v())),a.scene==="corridor"&&h.x>se.x0+.3&&(A("bay"),y("op.bay")),a.scene==="bay"&&(a.bayT+=S,ct(Qe.bayLog.x,Qe.bayLog.z,3.2)&&y("log.bay","log"),ne&&k.id.startsWith("lever"))){const de=+k.id.slice(5),Ie=e.levers[de];de===u[a.steps]?(Ie.down=!0,Ie.set(!0),a.steps++,p.beaconStep(a.steps),M(),a.steps===1?y("op.step1"):a.steps===2?y("op.step2"):ie()):(a.wrongs++,a.steps=0,e.levers.forEach(_e=>{_e.down=!1,_e.set(!1)}),p.wrong(),a.wrongs>=2?E("hint.levers.1","react"):E("op.wrong","react"))}function ie(){p.beaconDown(),a.beaconFall=.001,y("op.down"),b(2.2,()=>{a.wakeTarget=1}),b(4.6,()=>{A("fight"),y("op.fight"),$e(0)})}a.beaconFall>0&&(a.beaconFall+=S,a.beacon=Math.max(0,1-a.beaconFall/1.2),a.lightsDown=Math.min(1,a.beaconFall/2.5)),a.scene==="fight"&&(a.fightT+=S,!a.cleared&&ue.every(de=>de.state==="dead")&&(a.cleared=!0,b(1.2,()=>{y("op.clear"),A("seal")})));for(const de of ue)Re(de,S);for(const de of ye)if(ae(de,S),de.thrown>0){de.thrown-=S;for(const Ie of ue)Ie.state!=="dead"&&Ie.state!=="perch"&&Math.hypot(de.x-Ie.x,de.y-Ie.y,de.z-Ie.z)<.55&&Math.hypot(de.vx,de.vy,de.vz)>3&&(Oe(Ie,100),p.canHit(),e.scorch.burst([de.x,de.y,de.z],a.t),de.vx*=-.3,de.vz*=-.3,de.vy=2,de.thrown=0)}if(a.scene==="seal"&&(ct(se.x1,(ot.z0+ot.z1)/2,4.5)&&(y("op.seal"),y("op.seal.terminal")),ne&&k.id==="terminal"&&(E("op.seal.ask","react"),a.lock=!0,p.radioOpen(),M(),n?n.openComm({onSend:oe,onClose:()=>{a.lock=!1,p.radioClose()}}):a.lock=!1),a.sealOpening&&(a.seal=Math.min(1,a.seal+S/5),g(),a.seal>.8&&!a._sc&&(a._sc=1,v())),h.x>De.x0+.4&&(A("gallery"),p.reveal(),y("op.gallery"))),a.scene==="gallery"&&(a.galleryT+=S,a.turn=Math.min(1,a.galleryT/20),a.turn>.72&&y("op.gallery2"),a.galleryT>27&&!a.ended)){a.ended=!0,A("end");const de=Math.floor(a.play/60),Ie=Math.floor(a.play%60);m.showEnd(`${de}:${String(Ie).padStart(2,"0")}`)}if(ne&&k.id.startsWith("log:")){const de=e.logs.find(Ie=>Ie.key===k.id.slice(4));de.heard=!0,y(de.key,"log")}je(S,z),a.over?D="hint.overheat":a.firing&&a.heat>Wt.warn?D="hint.heatwarn":a.held&&(D=a.held===J?"act.hold.battery":"act.hold"),z.needClick&&a.scene!=="wheel"&&!a.lock&&(D="hint.click"),q(S),H(),P(S);const le=!(a.lock||a.ended||a.dead>0);m.focus(le&&a.focus?a.focus.act:"",le&&a.focus?a.focus.label:""),m.prompt(le?D:""),m.tool(a.mode,a.heat,a.over,a.hasTool&&!a.ended,a.firing&&a.heat>Wt.warn),m.hp(a.hp/100,!a.ended),a.prompt=D,w(),p.update(S,{room:U(),speed:V?0:Math.hypot(z.fwd,z.strafe)*h.speed,wake:a.wake,vacuum:.9*(1-a.hatch),beacon:a.beacon,tailFlicker:a.wake,t:a.t})}const U=()=>h.z>.2?"airlock":h.x>De.x0?"gallery":h.x>2.2?"bay":"corridor";function oe(S){a.waiting=!0,a.attempts++,M(),E("op.seal.wait","react"),Sy({kind:"seal",signs:S,expect:f,context:{seed:t,scene:a.scene,elapsed:+a.play.toFixed(1),attempts:a.attempts}}).then(z=>b((z.delayMs||0)/1e3,()=>{a.waiting=!1,a.lock=!1,p.radioClose(),E(z.line,"story"),z.ok?(a.sealOpening=!0,p.sealOpen(),M()):p.wrong()}))}const R=[0,1,0];function w(){const S=a.t;e.wheel.set(a.wheel),e.bayDoor.set(a.door,a.powered,S),e.socket.set(a.powered,S),e.cover.set(a.cut,a.coverFall,S);for(const k of ye)wc(k.prop.group,k.x,k.y,k.z,R,[-Math.sin(k.yaw),0,-Math.cos(k.yaw)]);for(const k of ue)wc(k.c.group,k.x,k.y,k.z,k.n,k.f),k.c.update(S,{walk:k.walk,attack:k.attack,wake:Math.max(a.wake,k.state==="perch"?0:1),hurt:k.hurt,dead:k.dead}),e.warn.set(k.i,k.state==="windup"||k.state==="cling",k.x,k.y,k.z,k.n,k.attack,S);e.dead.setWake(a.wake),e.seal.set(a.seal,S,a.wake),e.terminal.set(S,a.scene==="seal"&&!a.sealOpening);for(const k of e.logs)e.setGlow(k.led,k.heard||k.key==="log.bay"&&a.said["log.bay"]?.3:Math.sin(S*3+k.x)>0?3:.6);e.cavern.update(S,a.turn,.25+.75*a.turn),e.beam.aim(a.beam,S,a.surf),e.scorch.step(S),e.mark.set(a.focus&&a.focus.act!=="info"?a.focus:null,S);const z=S*.5%1,D=z<.36?Math.floor(z/.12):-1;a.beaconColor=D>=0?Ud[Qe.levers[u[D]].color]:16763e3;const V=i.level.dynamic.beaconDef;V&&(V.col.set(a.beaconColor),V.off=a.beacon<=.01)}w();function F(S){if(S==="pickup")return F("corridor"),Object.assign(h,{x:.6,z:-7.4}),rt(Qe.tool.x,Qe.tool.y,Qe.tool.z),!0;const z=["corridor","tool","battery","bay","fight","seal","gallery"].indexOf(S);return z<0?!1:(a.hatch=1,a.wheel=5.3,a.scene="corridor",a._hc=1,a.said["op.start"]=a.said["op.hatch"]=1,Object.assign(h,{x:0,z:-1.5,yaw:0,pitch:0}),z>=1&&(a.hasTool=!0,e.toolPickup.show(!1),Object.assign(h,{x:.9,z:-8.3})),z===2&&(a.cut=1,a.coverFall=1,J.free=!0,a.seenDoor=!0,a.said["op.door.dead"]=a.said["op.battery"]=1,Object.assign(h,{x:.2,z:-17.2,yaw:-1})),z>=3&&(a.cut=1,a.coverFall=1,J.free=!1,a.battery="socket",a.powered=!0,a.door=1,a._dc=1,a.seenDoor=!0,Object.assign(J,{x:$,y:Z.y-.06,z:Z.z,yaw:Math.PI/2}),Object.assign(h,{x:3.4,z:-24,yaw:-Math.PI/2}),a.scene="bay"),z>=4&&(e.levers.forEach(D=>{D.down=!0,D.set(!0)}),a.steps=3,a.beacon=0,a.beaconFall=3,a.lightsDown=1,a.wake=a.wakeTarget=1,a.scene="fight",$e(.6)),z>=5&&(a.timers.length=0,ue.forEach(D=>{D.state="dead",D.dead=1,D.hp=0,D.y=.1,D.n=[0,1,0],D.x=8+D.i*1.5,D.z=-27.5}),a.cleared=!0,a.scene="seal",Object.assign(h,{x:13,z:-24,yaw:-Math.PI/2})),z>=6&&(a.seal=1,a.sealOpening=!0,a._sc=1,Object.assign(h,{x:17.3,z:-24})),a.play=Math.max(a.play,Co.sec),v(),a.sceneStart=a.play,M(),w(),!0)}function K(S){a.t=S.t??1.3,a.wake=a.wakeTarget=S.wake||0,a.wheel=S.wheel||0,a.hatch=S.hatch??1,a.cut=S.cut||0,a.coverFall=S.coverFall||0,a.door=S.door??1,a.powered=S.powered??!0,a.seal=S.seal||0,a.turn=S.turn||0,a.beacon=S.beacon??1,a.lightsDown=S.lightsDown||0,e.toolPickup.show(!!S.toolOn);const z=[S.pos[0],S.pos[1],S.pos[2]],D=Math.cos(S.pitch),V=[-Math.sin(S.yaw)*D,Math.sin(S.pitch),-Math.cos(S.yaw)*D];if(S.bat==="held"?Object.assign(J,{x:z[0]+V[0]*Wt.hold,y:z[1]+V[1]*Wt.hold-Wt.holdDrop,z:z[2]+V[2]*Wt.hold,yaw:S.yaw}):S.bat==="cabinet"?Object.assign(J,{x:X.rest,y:X.y-.08,z:X.z,yaw:Math.PI/2}):Object.assign(J,{x:$,y:Z.y-.06,z:Z.z,yaw:Math.PI/2}),e.levers.forEach((k,ne)=>k.set(u.indexOf(ne)<(S.steps||0))),ue.forEach((k,ne)=>{Me(k),k.walk=k.attack=k.dead=0,k.state="perch";const ie=S.fight&&S.fight[ne];ie&&Object.assign(k,ie)}),g(),a.beam=null,a.surf="none",e.scorch.clear(),S.beam==="cut"){const k=Tf(z,V,c.concat(It()),Wt.cutRange),ne=k?k.t:Wt.cutRange;if(a.beam={kind:"cut",p:[z[0]+V[0]*ne,z[1]+V[1]*ne,z[2]+V[2]*ne],hit:!!k},a.surf=k?k.box.id==="cover"?"seam":k.box.id.startsWith("crawler")?"crawler":"armor":"none",k)for(let ie=0;ie<9;ie++)e.scorch.add([a.beam.p[0],a.beam.p[1]+(k.n[1]?0:.03*ie),a.beam.p[2]+(k.n[1]?.03*ie:0)],k.n,a.t-ie*.25,a.surf)}else S.beam==="grip"&&(a.beam={kind:"grip",p:[J.x,J.y,J.z],hit:!1});return a.focus=null,w(),{pose:S.pose||"tool",mode:S.mode||"grip",fire:S.beam==="cut"?1:0,hold:S.mode==="cut"||S.bat==="held"?1:0,heat:S.heat||0,wheel:a.wheel,hatch:a.hatch,wake:a.wake,lightsDown:Math.max(a.wake,a.lightsDown),beacon:a.beacon,beaconColor:a.beaconColor,t:a.t,rig:S.rig??1,inspect:S.inspect||0,door:a.door,seal:a.seal,lower:W(S.pitch)}}r&&(e.toolPickup.show(!1),Object.assign(J,{x:$,y:Z.y-.06,z:Z.z,yaw:Math.PI/2}),w());function W(S){const z=xi((-S-.5)/.45,0,1);return z*z*(3-2*z)}return{S:a,player:h,crawlers:ue,bodies:ye,order:u,signs:f,skipTo:F,exhibitState:K,update:G,pause(S){a.paused=S},colliders:()=>_,solids:()=>c,view:()=>({x:h.x,y:Zt,z:h.z,yaw:h.yaw,pitch:h.pitch}),frame(S={}){return{t:a.t,wake:a.wake,hatch:a.hatch,rig:1,pose:a.scene==="wheel"?"wheel":a.hasTool?"tool":"empty",wheel:a.wheel,mode:a.mode,heat:a.heat,hold:a.mode==="cut"||a.held?1:a.pull?.5:0,fire:a.firing?1:0,hurt:Math.max(a.hurt,1-a.hp/100)*.9,fade:a.fade,beacon:a.beacon,beaconColor:a.beaconColor,lightsDown:Math.max(a.wake,a.lightsDown),door:a.door,seal:a.seal,lower:d.has("nolower")?0:W(h.pitch),roll:a.shake*.05*Math.sin(a.t*60),...S}},debug:{lookAt:rt,targets(){const S={};for(const z of c)z.id&&(S[z.id]=[(z.x0+z.x1)/2,(z.y0+z.y1)/2,(z.z0+z.z1)/2]);for(const z of It())S[z.id]=[(z.x0+z.x1)/2,(z.y0+z.y1)/2,(z.z0+z.z1)/2];return S},aimNearest(){let S=null,z=1e9;for(const D of ue)if(D.state!=="dead"&&D.state!=="perch"){const V=Math.hypot(D.x-h.x,D.z-h.z);V<z&&(z=V,S=D)}return S&&rt(S.x,S.y+.12,S.z),S?{dist:z,y:S.y,state:S.state,attack:S.attack}:null},pickSigns(S){return a.scene!=="seal"||a.sealOpening||a.waiting?!1:(oe(S.slice()),!0)},info(){return{scene:a.scene,t:+a.t.toFixed(2),play:+a.play.toFixed(2),x:+h.x.toFixed(3),z:+h.z.toFixed(3),yaw:h.yaw,pitch:h.pitch,hp:a.hp,heat:+a.heat.toFixed(3),over:a.over,mode:a.mode,hasTool:a.hasTool,cut:+a.cut.toFixed(3),cover:a.coverFall,battery:a.battery,batFree:J.free,bat:[J.x,J.y,J.z],held:a.held?a.held.name:"",door:a.door,powered:a.powered,steps:a.steps,wrongs:a.wrongs,dead:a.dead,wake:+a.wake.toFixed(2),alive:ue.filter(S=>S.state!=="dead").length,seal:a.seal,sealOpening:a.sealOpening,waiting:a.waiting,turn:a.turn,ended:a.ended,deaths:a.deaths,times:{...a.times},prompt:a.prompt||"",lock:a.lock,order:u,signs:f,hatch:a.hatch,hit:a.hit?{id:a.hit.id,t:+a.hit.t.toFixed(3)}:null,focus:a.focus?{id:a.focus.id,act:a.focus.act,label:a.focus.label}:null,surf:a.surf,firing:a.firing,marks:e.scorch.count(),goal:a.goal,goals:a.goals.slice(),stage:a.stage,hintLv:a.hintLv,hints:a.hints.slice(),spoken:a.spoken.slice(),speaking:T.cur?T.cur.key:"",queued:T.q.length,fightT:+a.fightT.toFixed(2),crawlers:ue.map(S=>({state:S.state,hp:Math.round(S.hp),attack:+S.attack.toFixed(2)}))}}}}}const Cy=`
#ui { position: fixed; inset: 0; pointer-events: none; font: 15px/1.35 system-ui, -apple-system, 'Segoe UI', sans-serif; color: #dfe6ee; user-select: none; -webkit-user-select: none; z-index: 4; --top: 14px; }
#ui * { box-sizing: border-box; }
#ui .cross { position: absolute; left: 50%; top: 50%; width: 5px; height: 5px; margin: -2.5px; border-radius: 50%; background: rgba(223,230,238,.8); box-shadow: 0 0 0 1px rgba(0,0,0,.55); transition: width .08s, height .08s, margin .08s; }
#ui .cross[data-act="e"], #ui .cross[data-act="cut"], #ui .cross[data-act="grip"] { width: 22px; height: 22px; margin: -11px; background: transparent; border: 2px solid #fde467; box-shadow: 0 0 0 1px rgba(0,0,0,.6), inset 0 0 0 1px rgba(0,0,0,.6); }
#ui .cross[data-act="cut"] { border-color: #ffb060; } #ui .cross[data-act="grip"] { border-color: #84cbcd; }
#ui .cross[data-act="info"] { width: 14px; height: 14px; margin: -7px; background: transparent; border: 2px solid rgba(223,230,238,.7); }
#ui .cross::after { content: ''; position: absolute; left: 50%; top: 50%; width: 3px; height: 3px; margin: -1.5px; border-radius: 50%; background: #fff; opacity: 0; }
#ui .cross[data-act]:not([data-act=""])::after { opacity: 1; }
#ui .act { position: absolute; left: calc(50% + 24px); top: 50%; transform: translateY(-50%); padding: 4px 11px; background: rgba(4,8,12,.78); border-left: 2px solid #fde467; border-radius: 3px; font-size: 15px; font-weight: 600; white-space: nowrap; }
#ui .act[data-act="cut"] { border-left-color: #ffb060; } #ui .act[data-act="grip"] { border-left-color: #84cbcd; }
#ui .act[data-act="info"] { border-left-color: rgba(223,230,238,.5); font-weight: 400; color: #b9c3cd; }
#ui .prompt { position: absolute; left: 50%; top: calc(50% + 30px); transform: translateX(-50%); padding: 3px 10px; background: rgba(4,8,12,.62); border-radius: 4px; font-size: 13px; white-space: nowrap; }
#ui .modef { position: absolute; left: 50%; top: calc(50% - 62px); transform: translateX(-50%); padding: 3px 12px; font: 700 15px ui-monospace, monospace; letter-spacing: .14em; background: rgba(4,8,12,.7); border-radius: 3px; opacity: 0; }
#ui .modef.go { animation: modef 1.5s ease-out; } @keyframes modef { 0% { opacity: 0; } 10% { opacity: 1; } 70% { opacity: 1; } 100% { opacity: 0; } }
#ui .modef[data-mode="cut"] { color: #ffb060; } #ui .modef[data-mode="grip"] { color: #84cbcd; }
#ui .goal { position: absolute; left: 50%; top: var(--top); transform: translateX(-50%); max-width: min(720px, 92vw); padding: 6px 14px 7px; background: rgba(4,8,12,.74); border-top: 2px solid #84cbcd; border-radius: 0 0 4px 4px; text-align: center; font-size: 16px; opacity: 0; transition: opacity .6s; }
#ui .goal.on { opacity: 1; }
#ui .goal b { display: block; font: 600 10px ui-monospace, monospace; letter-spacing: .16em; color: #84cbcd; margin-bottom: 1px; }
#ui .sub { position: absolute; left: 50%; bottom: 7%; transform: translateX(-50%); width: min(820px, 92vw); display: flex; gap: 14px; align-items: flex-start; padding: 12px 16px; background: rgba(4,8,12,.8); border-left: 3px solid #c38d3e; border-radius: 4px; }
#ui .sub.log { border-left-color: #84cbcd; font-style: italic; }
#ui .sub .who { flex: 0 0 auto; width: 74px; text-align: center; font: 700 10px/1.2 ui-monospace, monospace; color: #e0a850; letter-spacing: .08em; }
#ui .sub.log .who { color: #84cbcd; }
#ui .sub svg { display: block; width: 46px; height: 46px; margin: 0 auto 4px; }
#ui .sub .txt { flex: 1; font-size: 20px; line-height: 1.32; text-shadow: 0 1px 2px #000; }
/* на телефоне низ по краям занят стиком и кнопками: субтитры остаются внизу по центру, но уже */
#ui.is-touch .sub { left: 158px; right: 176px; width: auto; transform: none; bottom: 10px; padding: 7px 10px; gap: 8px; }
#ui.is-touch .sub .who { width: 50px; font-size: 8px; } #ui.is-touch .sub svg { width: 30px; height: 30px; }
#ui.is-touch .sub .txt { font-size: 15px; }
#ui .tool { position: absolute; right: 18px; bottom: 16px; width: 176px; padding: 7px 9px 8px; background: rgba(4,8,12,.62); border-radius: 4px; font: 700 13px/1.3 ui-monospace, monospace; letter-spacing: .08em; }
#ui .tool[data-mode="cut"] .name { color: #ffb060; } #ui .tool[data-mode="grip"] .name { color: #84cbcd; }
#ui .tool .lbl { display: flex; justify-content: space-between; margin-top: 5px; font: 600 9px ui-monospace, monospace; letter-spacing: .12em; color: #9aa6b2; }
#ui .tool .bar { height: 9px; margin-top: 3px; background: rgba(255,255,255,.14); border-radius: 2px; overflow: hidden; position: relative; }
#ui .tool .bar i { display: block; height: 100%; width: 0; background: linear-gradient(90deg, #84cbcd, #fde467 62%, #ff5a3c); background-size: 158px 100%; }
#ui .tool .bar::after { content: ''; position: absolute; left: 72%; top: 0; bottom: 0; width: 2px; background: rgba(255,255,255,.6); }
#ui .tool.warn { box-shadow: 0 0 0 2px #ff8a3c; animation: warn .32s steps(2) infinite; } @keyframes warn { 50% { box-shadow: 0 0 0 2px transparent; } }
#ui .tool.over { box-shadow: 0 0 0 2px #ff3a22; } #ui .tool.over .name, #ui .tool.over .lbl { color: #ff5a3c; }
#ui.is-touch .tool { right: 190px; bottom: 150px; width: 130px; }
#ui .hp { position: absolute; left: 18px; bottom: 16px; width: 150px; padding: 6px 8px 8px; background: rgba(4,8,12,.62); border-radius: 4px; font: 600 9px ui-monospace, monospace; letter-spacing: .12em; color: #e0a850; }
#ui .hp .bar { height: 8px; margin-top: 3px; background: rgba(255,255,255,.14); border-radius: 2px; overflow: hidden; } #ui .hp i { display: block; height: 100%; background: #e0a850; }
#ui .hp.low { color: #ff5a3c; } #ui .hp.low i { background: #ff5a3c; }
#ui.is-touch .hp { left: 24px; bottom: 160px; }
#ui .panel { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(2,4,7,.86); pointer-events: auto; }
#ui .card { width: min(600px, 92vw); padding: 18px 20px; background: rgb(8,12,18); border: 1px solid #2b3a48; border-radius: 6px; }
#ui .card h2 { margin: 0 0 10px; font: 600 12px ui-monospace, monospace; letter-spacing: .12em; color: #84cbcd; }
#ui .card p { margin: 0 0 12px; }
#ui .card .pgoal { padding: 8px 12px; background: #0c141c; border-left: 2px solid #84cbcd; font-size: 17px; }
#ui .card .pgoal b { display: block; font: 600 10px ui-monospace, monospace; letter-spacing: .16em; color: #84cbcd; }
#ui .card .dim { color: #8f9aa6; font-size: 12px; margin: 14px 0 6px; }
#ui .signs { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin: 10px 0; }
#ui .signs button, #ui .row button { pointer-events: auto; cursor: pointer; background: #0c141c; border: 1px solid #2b3a48; border-radius: 5px; color: #dfe6ee; padding: 6px; font: inherit; }
#ui .signs button:hover, #ui .row button:hover { border-color: #84cbcd; }
#ui .signs canvas { display: block; width: 100%; height: auto; }
#ui .picked { display: flex; gap: 8px; min-height: 58px; align-items: center; padding: 6px 8px; background: #05090d; border: 1px dashed #2b3a48; border-radius: 5px; }
#ui .picked canvas { width: 46px; height: 46px; }
#ui .row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; } #ui .row button { padding: 8px 14px; } #ui .row button.go { border-color: #c38d3e; color: #fde467; }
#ui .row.sc { margin-top: 0; } #ui .row.sc button { padding: 5px 10px; font-size: 13px; }
#ui .end { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; background: rgba(0,0,0,.0); transition: background 3s; }
#ui .end.on { background: rgba(0,0,0,.78); }
#ui .end h1 { margin: 0; font: 200 clamp(48px, 11vw, 132px)/1 system-ui, sans-serif; letter-spacing: .32em; text-indent: .32em; color: #e8eef5; }
#ui .end h3 { margin: 18px 0 0; font: 400 clamp(15px, 2.4vw, 24px) system-ui, sans-serif; letter-spacing: .28em; color: #84cbcd; }
#ui .end p { margin: 26px 0 0; color: #9aa6b2; font: 14px ui-monospace, monospace; }
#ui .start { position: absolute; left: 50%; bottom: 20%; transform: translateX(-50%); padding: 8px 16px; background: rgba(4,8,12,.7); border-radius: 4px; }
#ui .touch { position: absolute; inset: 0; pointer-events: none; }
#ui .stick { position: absolute; left: 22px; bottom: 26px; width: 120px; height: 120px; border-radius: 50%; border: 1px solid rgba(223,230,238,.35); background: rgba(4,8,12,.25); pointer-events: auto; touch-action: none; }
#ui .stick i { position: absolute; left: 50%; top: 50%; width: 46px; height: 46px; margin: -23px; border-radius: 50%; background: rgba(223,230,238,.4); }
#ui .tb { position: absolute; width: 62px; height: 62px; border-radius: 50%; border: 1px solid rgba(223,230,238,.4); background: rgba(4,8,12,.35); display: grid; place-items: center; font: 600 13px ui-monospace, monospace; pointer-events: auto; touch-action: none; }
#ui .tb.on { background: rgba(132,203,205,.4); }
#ui.paused .cross, #ui.paused .act, #ui.paused .prompt, #ui.paused .goal, #ui.paused .sub, #ui.paused .modef, #ui.paused .tool, #ui.paused .hp, #ui.paused .touch { visibility: hidden; }
#ui.modal .cross, #ui.modal .act, #ui.modal .prompt, #ui.modal .goal, #ui.modal .modef { visibility: hidden; }
#ui.modal .sub { z-index: 3; bottom: 3%; } #ui.modal .panel { z-index: 2; background: rgba(2,4,7,.7); }
#ui [hidden] { display: none !important; }
`,Py='<svg viewBox="0 0 44 44"><rect width="44" height="44" rx="4" fill="#1a130a"/><circle cx="22" cy="20" r="17" fill="#3a2a12"/><path d="M4 44c1-11 7-15 13-16l-3-2c-6-1-9-2-11-4 6 0 9-1 11-3 0-6 3-9 8-9s8 3 8 9c2 2 5 3 11 3-2 2-5 3-11 4l-3 2c6 1 12 5 13 16z" fill="#06080b"/></svg>',Dy='<svg viewBox="0 0 44 44"><rect width="44" height="44" rx="4" fill="#0a1a1c"/><rect x="6" y="12" width="32" height="20" rx="3" fill="none" stroke="#84cbcd" stroke-width="2"/><circle cx="16" cy="22" r="4" fill="none" stroke="#84cbcd" stroke-width="2"/><circle cx="28" cy="22" r="4" fill="none" stroke="#84cbcd" stroke-width="2"/></svg>';function Xt(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n}function Hf(i,e=96){const t=document.createElement("canvas");return t.width=t.height=e,bc(t.getContext("2d"),i,e/2,e/2,e*.36,"#bfeff0"),t}function Ly({touch:i=!1}={}){const e=document.createElement("style");e.textContent=Cy,document.head.appendChild(e);const t=Xt("div");t.id="ui",document.body.appendChild(t),i&&t.classList.add("is-touch");const n=Xt("div","cross"),s=Xt("div","act"),r=Xt("div","prompt"),o=Xt("div","modef"),l=Xt("div","goal","<b></b><span></span>"),u=Xt("div","sub"),f=Xt("div","tool",'<div class="name"></div><div class="lbl"><span></span><span></span></div><div class="bar"><i></i></div>'),p=Xt("div","hp",'<span></span><div class="bar"><i></i></div>'),m=Xt("div","start");u.innerHTML='<div class="who"></div><div class="txt"></div>',l.firstChild.textContent=Ot("goal.label"),p.firstChild.textContent=Ot("hud.suit"),f.querySelector(".lbl span").textContent=Ot("hud.heat");for(const x of[n,s,r,o,l,u,f,p,m])t.appendChild(x);s.hidden=r.hidden=u.hidden=f.hidden=p.hidden=m.hidden=!0;let d=null,h="";const a=x=>Ty(x,i);function _(){d&&(d.remove(),d=null),t.classList.remove("paused","modal")}function c({onSend:x,onClose:y}){_();const E=[];d=Xt("div","panel"),t.classList.add("modal");const C=Xt("div","card");C.innerHTML=`<h2>${Ot("comm.title")}</h2><p>${Ot("comm.pick")}</p>`;const P=Xt("div","signs"),I=Xt("div","picked"),q=Xt("div","row"),L=()=>{I.innerHTML="",E.forEach(Z=>I.appendChild(Hf(Z,92)))};iu.forEach((Z,$)=>{const J=Xt("button");J.dataset.sign=$,J.appendChild(Hf($)),J.addEventListener("click",()=>{E.length<4&&(E.push($),L(),T.onSign&&T.onSign(E.length-1))}),P.appendChild(J)});const O=Xt("button","go",Ot("comm.send")),H=Xt("button","",Ot("comm.clear")),X=Xt("button","",Ot("comm.close"));O.dataset.act="send",H.dataset.act="clear",X.dataset.act="close",O.addEventListener("click",()=>{if(E.length===4){const Z=E.slice();_(),x(Z)}}),H.addEventListener("click",()=>{E.length=0,L()}),X.addEventListener("click",()=>{_(),y&&y()}),q.append(O,H,X),C.append(P,I,q),d.appendChild(C),t.appendChild(d)}function g({scenes:x=null,onScene:y=null}={}){_(),d=Xt("div","panel"),d.dataset.kind="pause",t.classList.add("paused");const E=Xt("div","card",`<h2>${Ot("pause.title")}</h2>${h?`<p class="pgoal"><b>${Ot("goal.label")}</b>${Ot(h)}</p>`:""}<p>${Ot("pause.keys")}</p><p>${Ot("pause.resume")}</p>`);if(x&&x.length){const C=Xt("div","row sc");for(const P of x){const I=Xt("button","",Ot("scene."+P));I.dataset.scene=P,I.addEventListener("click",q=>{q.stopPropagation(),y&&y(P)}),C.appendChild(I)}E.appendChild(Xt("p","dim",Ot("pause.scenes"))),E.appendChild(C)}return E.appendChild(Xt("p","dim",Ot("guest"))),d.appendChild(E),t.appendChild(d),d}let v=null;function b(x){v||(v=Xt("div","end",`<div><h1>${Ot("end.title")}</h1><h3>${Ot("end.sub")}</h3><p>${Ot("end.time")}${x}</p><p>${Ot(i?"end.again.touch":"end.again")}</p></div>`),t.appendChild(v),i&&(v.style.pointerEvents="auto",setTimeout(()=>v.addEventListener("pointerdown",()=>location.reload()),3e3)),requestAnimationFrame(()=>v.classList.add("on")),n.hidden=s.hidden=f.hidden=p.hidden=r.hidden=l.hidden=u.hidden=!0)}const M={fwd:0,strafe:0,lookX:0,lookY:0,fire:!1,e:!1,f:!1,space:!1};if(i){const x=Xt("div","touch"),y=Xt("div","stick","<i></i>");x.appendChild(y);const E=y.firstChild;let C=null;const P=Z=>{const $=y.getBoundingClientRect(),J=(Z.clientX-$.left-$.width/2)/($.width/2),re=(Z.clientY-$.top-$.height/2)/($.height/2),ye=Math.hypot(J,re),ae=ye>1?1/ye:1;M.strafe=J*ae,M.fwd=-re*ae,E.style.transform=`translate(${J*ae*37}px, ${re*ae*37}px)`};y.addEventListener("pointerdown",Z=>{C=Z.pointerId,y.setPointerCapture(C),P(Z),Z.preventDefault()}),y.addEventListener("pointermove",Z=>{Z.pointerId===C&&P(Z)});const I=Z=>{Z.pointerId===C&&(C=null,M.fwd=M.strafe=0,E.style.transform="")};y.addEventListener("pointerup",I),y.addEventListener("pointercancel",I);const q=(Z,$,J,re,ye)=>{const ae=Xt("div","tb",Z);ae.style.right=J+"px",ae.style.bottom=re+"px",ae.dataset.key=$,ae.addEventListener("pointerdown",ee=>{M[$]=!0,ae.classList.add("on"),ee.preventDefault()});const B=()=>{ye&&(M[$]=!1),ae.classList.remove("on")};ae.addEventListener("pointerup",B),ae.addEventListener("pointercancel",B),ae.addEventListener("pointerleave",B),x.appendChild(ae)};q("◎","fire",26,96,!0),q("E","e",100,40,!1),q("F","f",26,22,!1),q("⇧","space",100,116,!1);let L=null,O=0,H=0;addEventListener("pointerdown",Z=>{Z.pointerType!=="touch"||Z.target.closest(".stick,.tb,.panel")||(L=Z.pointerId,O=Z.clientX,H=Z.clientY)},!0),addEventListener("pointermove",Z=>{Z.pointerId===L&&(M.lookX+=Z.clientX-O,M.lookY+=Z.clientY-H,O=Z.clientX,H=Z.clientY)},!0);const X=Z=>{Z.pointerId===L&&(L=null)};addEventListener("pointerup",X,!0),addEventListener("pointercancel",X,!0),t.appendChild(x)}const A=(x,y)=>{x.textContent!==y&&(x.textContent=y)},T={root:t,touch:M,isTouch:i,onSign:null,sub(x,{log:y=!1,text:E=""}={}){if(!x){u.hidden=!0;return}u.className="sub"+(y?" log":""),u.firstChild.innerHTML=(y?Dy:Py)+Ot(y?"log.title":"op.name"),u.lastChild.textContent=E||Ot(x),u.hidden=!1},speaking:()=>!u.hidden,focus(x,y){n.dataset.act!==x&&(n.dataset.act=x,s.dataset.act=x),s.hidden=!y,y&&A(s,a(y))},prompt(x){r.hidden=!x,x&&A(r,a(x))},goal(x,y){h=x||"",x&&A(l.lastChild,Ot(x)),l.classList.toggle("on",!!y&&!!x)},goalKey:()=>h,modeFlash(x){o.dataset.mode=x,o.textContent=Ot("mode."+x),o.classList.remove("go"),o.offsetWidth,o.classList.add("go")},tool(x,y,E,C,P){f.hidden=!C,C&&(f.dataset.mode=x,A(f.firstChild,Ot("mode."+x)),A(f.querySelector(".lbl span:last-child"),E?Ot("hud.over"):Math.round(y*100)+"%"),f.querySelector("i").style.width=Math.round(y*100)+"%",f.classList.toggle("warn",!!P&&!E),f.classList.toggle("over",!!E))},hp(x,y){p.hidden=!y||x>=.999,p.querySelector("i").style.width=Math.round(x*100)+"%",p.classList.toggle("low",x<.4)},start(x){m.hidden=!x,m.textContent=Ot("start.click")},setTop(x){t.style.setProperty("--top",Math.round(x)+"px")},openComm:c,openPause:g,closePanel:_,panelOpen:()=>!!d,panelKind:()=>d?d.dataset.kind||"comm":"",showEnd:b,ended:()=>!!v};return T}const Wf=["airlock","corridor","bay","gallery"],Br={airlock:{hum:.34,revS:.55,revL:.04,beacon:.16,beaconLP:700},corridor:{hum:.24,revS:.16,revL:.42,beacon:.45,beaconLP:1600},bay:{hum:.24,revS:.08,revL:.62,beacon:1,beaconLP:9e3},gallery:{hum:.07,revS:.04,revL:.85,beacon:.28,beaconLP:1100}},zy=[293.66,349.23,415.3,523.25],Iy=[659.25,493.88,369.99],Xf=[1244.51,1396.91,1864.66,2093,2489.02,2793.83],Uy={a:[680,1150],o:[470,880],u:[340,760],e:[500,1650],i:[320,2e3],y:[360,1450]},Ny={а:"a",я:"a",о:"o",ё:"o",у:"u",ю:"u",э:"e",е:"e",и:"i",ы:"y",a:"a",o:"o",u:"u",e:"e",i:"i",y:"y"},Fy=96,Oy=.26,qf=.55,ky=.17,By=.105,Yf=.2,Gy=500,Vy=["none","seam","armor","crawler"],vi=(i,e,t)=>i<e?e:i>t?t:i,On=(i,e)=>typeof i=="number"&&Number.isFinite(i)?i:e;function _l(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Hy(i){const e=[];let t=0;for(const n of i.toLowerCase()){const s=Ny[n];if(s)e.push({syl:!0,v:s,cons:t,w:1+.14*Math.min(t,3)}),t=0;else if(/[a-zа-яё]/.test(n))t++;else if(/[.!?…]/.test(n))e.push({gap:!0,w:1.9,end:n==="?"?"q":"p"}),t=0;else if(/[,;:—–-]/.test(n))e.push({gap:!0,w:1.1}),t=0;else if(/\s/.test(n)){const r=e[e.length-1];r&&r.syl&&e.push({gap:!0,w:.32}),t=0}}for(;e.length&&e[e.length-1].gap;)e.pop();return e}function Wy(i={}){const e=i.disabled||typeof window>"u"?null:window.AudioContext||window.webkitAudioContext||null,t=_l(On(i.seed,860663));let n=null,s=null,r=!1,o=!1,l=!1,u=0,f=.8,p=!1,m=!1,d=0,h="",a=0;const _=[],c=[],g=new Map,v={room:"",stepPhase:.6,foot:1,beaconClock:0,beaconIdx:-1,beaconMuteUntil:-1,beaconLevel:0,nextGroan:-1,nextChime:-1,wake:0,lastReap:0},b={on:!1,speech:null,auto:null};let M=null,A=-1,T=0,x=-1,y=null,E=null,C="none";const P=R=>{d++,h=String(R&&R.message||R).slice(0,240)},I=()=>r?u:n.currentTime,q=()=>!!s&&!l&&(r||n.state==="running"),L=R=>{const w=n.createGain();return w.gain.value=R,w},O=(R,w,F,K)=>{const W=n.createBiquadFilter();return W.type=R,W.frequency.value=w,F!==void 0&&(W.Q.value=F),K!==void 0&&(W.gain.value=K),W},H=(...R)=>{for(let w=0;w<R.length-1;w++)R[w].connect(R[w+1]);return R[R.length-1]},X=(R,w=1)=>{const F=n.createBufferSource();return F.buffer=R,F.loop=!0,F.playbackRate.value=w,F.start(0,t()*(R.duration-.2)),c.push(F),F},Z=(R,w)=>{const F=n.createOscillator();return F.type=R,F.frequency.value=w,F.start(0),c.push(F),F},$=(R,w,F,K)=>{g.get(R)!==F&&(g.set(R,F),w.setTargetAtTime(F,I(),Math.max(.005,K)))};function J(){const R=n.sampleRate,w=_l(5352222),F=(D,V)=>{const k=n.createBuffer(1,Math.floor(R*D),R);return V(k.getChannelData(0)),k},K=(D,V)=>{const k=D.length;for(let ne=0;ne<V;ne++){const ie=ne/V;D[ne]=D[ne]*ie+D[k-V+ne]*(1-ie)}},W=F(2,D=>{for(let V=0;V<D.length;V++)D[V]=w()*2-1}),S=F(4,D=>{let V=0,k=0;for(let ne=0;ne<D.length;ne++)V=(V+.02*(w()*2-1))/1.02,D[ne]=V,k=Math.max(k,Math.abs(V));for(let ne=0;ne<D.length;ne++)D[ne]/=k;K(D,Math.floor(R*.25))}),z=F(3,D=>{for(let k=0;k<D.length;k++)D[k]=0;const V=Math.floor(114);for(let k=0;k<V;k++){const ne=Math.floor(w()*(D.length-64)),ie=(.2+.8*w()*w())*(w()<.5?-1:1),le=2+Math.floor(w()*22);for(let de=0;de<le;de++)D[ne+de]+=ie*(1-de/le)*(w()*2-1+.6)}});return{white:W,brown:S,crackle:z}}function re(R,w,F){const K=n.sampleRate,W=Math.floor(K*R),S=n.createBuffer(2,W,K),z=_l(F);for(let D=0;D<2;D++){const V=S.getChannelData(D);let k=0,ne=0;for(let le=0;le<W;le++){const de=le/W,Ie=Math.min(1,.02+w*de);k+=(1-Ie*.92)*(z()*2-1-k),V[le]=k*Math.pow(1-de,2)*Math.exp(-3.2*de)*Math.min(1,le/(K*.004)),ne+=V[le]*V[le]}const ie=1/Math.sqrt(ne||1);for(let le=0;le<W;le++)V[le]*=ie}return S}function ye(){const w=new Float32Array(2049);for(let F=0;F<2049;F++){const K=F/2048*2-1,W=Math.abs(K);w[F]=Math.sign(K)*(W<=.5?W:.5+.45*Math.tanh((W-.5)/.45))}return w}function ae(R){n=R,r=typeof n.startRendering=="function";const w={};w.buf=J(),w.masterIn=L(1),w.master=L(f),w.mute=L(p?0:1);const F=L(.72);let K=w.master;if(w.masterIn.connect(w.master),n.createDynamicsCompressor){const z=n.createDynamicsCompressor();z.threshold.value=-8,z.knee.value=6,z.ratio.value=6,z.attack.value=.004,z.release.value=.22,K.connect(z),K=z}if(K.connect(F),K=F,n.createWaveShaper){const z=n.createWaveShaper();z.curve=ye(),K.connect(z),K=z}if(w.pauseDry=L(m?0:1),w.pauseWet=L(m?Yf:0),K.connect(w.pauseDry),H(K,O("lowpass",Gy,.7),w.pauseWet),w.pauseDry.connect(w.mute),w.pauseWet.connect(w.mute),w.mute.connect(n.destination),w.duck=L(1),w.duck.connect(w.masterIn),w.worldIn=L(1),w.vacLP=O("lowpass",18e3,.6),w.vacGain=L(1),H(w.worldIn,w.vacLP,w.vacGain,O("lowshelf",190,void 0,3.5),O("lowpass",5200,.5),w.duck),w.bodyIn=L(1),H(w.bodyIn,O("lowpass",1100,.6),O("lowshelf",160,void 0,4),w.duck),w.innerIn=L(1),H(w.innerIn,O("lowpass",7e3,.5),w.duck),w.uiIn=L(1),w.uiIn.connect(w.masterIn),w.revIn=L(1),w.revS=L(0),w.revL=L(0),n.createConvolver){const z=n.createConvolver(),D=n.createConvolver();z.normalize=!1,D.normalize=!1,z.buffer=re(.42,.5,11),D.buffer=re(3.4,1.1,23),H(w.revIn,z,w.revS,w.worldIn),H(w.revIn,D,w.revL,w.worldIn)}w.radioIn=L(1);const W=n.createWaveShaper?n.createWaveShaper():L(1);if(n.createWaveShaper){const z=new Float32Array(1025);for(let D=0;D<1025;D++){const V=D/512-1;z[D]=Math.tanh(2.6*V)/Math.tanh(2.6)}W.curve=z}H(w.radioIn,O("highpass",330,.8),O("highpass",330,.8),O("lowpass",2900,.8),W,O("highpass",300,.7),O("lowpass",3e3,.7),O("lowpass",3e3,.7),L(Oy),w.masterIn),w.carrier=L(0),H(X(w.buf.white),O("bandpass",1700,.7),L(.05),w.carrier),H(X(w.buf.crackle,.8),L(.16),w.carrier),w.carrier.connect(w.radioIn),w.hum=L(1),w.life=L(1),H(w.hum,w.life,w.worldIn),w.room={};for(const z of Wf)w.room[z]=L(0),w.room[z].connect(w.hum);const S=(z,D,V)=>{const k=Z("sine",z),ne=L(D);k.connect(ne),ne.connect(V)};{const z=w.room.airlock;H(Z("sawtooth",58),O("lowpass",170,.8),L(.11),z),H(Z("sine",116.4),L(.035),z);const D=L(.02);H(X(w.buf.white),O("bandpass",6200,.8),D,z),S(.13,.008,D.gain),H(X(w.buf.white,.7),O("bandpass",480,6),L(.03),z),H(X(w.buf.brown),O("lowpass",140,.7),L(.16),z)}{const z=w.room.corridor,D=O("lowpass",250,.9);H(X(w.buf.brown),D,L(.34),z),S(.07,60,D.frequency),H(Z("sine",47),L(.1),z),H(Z("sine",94.6),L(.03),z);const V=L(.011);H(X(w.buf.white,.9),O("bandpass",1100,1.2),V,z),S(.045,.005,V.gain)}{const z=w.room.bay;H(Z("sawtooth",100),O("lowpass",430,1),L(.05),z),H(Z("sine",50),L(.11),z),H(Z("sine",200.4),L(.014),z);const D=L(.006);H(Z("square",100.1),O("bandpass",2600,8),D,z),S(.31,.003,D.gain),H(X(w.buf.brown,.8),O("lowpass",110,.7),L(.3),z)}{const z=w.room.gallery;H(Z("sine",31),L(.17),z),H(Z("sine",31.35),L(.13),z),H(Z("sine",62.3),L(.035),z),H(Z("sine",93.1),L(.01),z),H(X(w.buf.brown,.6),O("lowpass",70,.7),L(.12),z),H(X(w.buf.white),O("bandpass",3e3,.5),L(.0014),z)}{w.wake=L(0),w.wake.connect(w.hum);const z=L(.5);w.wake.connect(z),z.connect(w.revIn);const D=L(1);for(const[V,k,ne]of[[650,5,1],[1080,6,.7],[2900,8,.25]])H(D,O("bandpass",V,k),L(ne),w.wake);[[155.56,.05],[233.08,.071],[311.13,.093],[329.63,.113]].forEach(([V,k])=>{const ne=L(.035);H(Z("sawtooth",V),ne,D),H(Z("sawtooth",V*1.004),L(.02),D),S(k,.025,ne.gain)}),[[1244.51,.17],[1864.66,.11],[2489.02,.23],[3322.44,.07]].forEach(([V,k])=>{const ne=L(.007);H(Z("sine",V),ne,w.wake),S(k,.006,ne.gain)})}w.tail=L(0),H(X(w.buf.crackle,1.3),O("highpass",2400,.7),w.tail,w.innerIn),H(Z("sine",3140),L(.012),w.tail),s=w}function B(R){for(const w of R.srcs)try{w.stop()}catch{}for(const w of R.nodes)try{w.disconnect()}catch{}}const ee=R=>{r||B(R)};function xe(R){for(let w=_.length-1;w>=0;w--)_[w].end<=R&&(ee(_[w]),_.splice(w,1))}function ze(R){const w=_.indexOf(R);w>=0&&(B(R),_.splice(w,1))}function te(R,w,F={}){if(xe(I()),_.length>=Fy){const z=_.findIndex(D=>D.end!==1/0);z>=0&&(ee(_[z]),_.splice(z,1))}const K=L(F.g===void 0?1:F.g),W={end:R+w+.1,nodes:[K],srcs:[],out:K};let S=K;if(F.lp){const z=O("lowpass",F.lp,.7);S.connect(z),S=z,W.nodes.push(z)}if(F.pan&&n.createStereoPanner){const z=n.createStereoPanner();z.pan.value=vi(F.pan,-1,1),S.connect(z),S=z,W.nodes.push(z)}for(const[z,D]of[["w",s.worldIn],["b",s.bodyIn],["i",s.innerIn],["rev",s.revIn],["radio",s.radioIn],["ui",s.uiIn]]){const V=F[z];if(V)if(V===1)S.connect(D);else{const k=L(V);S.connect(k),k.connect(D),W.nodes.push(k)}}return _.push(W),_.length>a&&(a=_.length),W}const be=(R,w)=>{R.end!==1/0&&w+.1>R.end&&(R.end=w+.1)};function ue(R,w,F,K,W,S,z,D=.004,V=0){const k=n.createOscillator(),ne=n.createGain();return k.type=w,k.frequency.setValueAtTime(F,W),K&&K!==F&&k.frequency.exponentialRampToValueAtTime(Math.max(1,K),W+S),ne.gain.setValueAtTime(0,W),ne.gain.linearRampToValueAtTime(z,W+D),V>0&&ne.gain.setValueAtTime(z,W+D+V),ne.gain.exponentialRampToValueAtTime(1e-4,W+S),k.connect(ne),ne.connect(R.out),k.start(W),k.stop(W+S+.03),R.srcs.push(k),R.nodes.push(k,ne),be(R,W+S+.05),{o:k,g:ne}}function Me(R,w,F,K,W,S,z,D,V,k=.002,ne=0){const ie=n.createBufferSource(),le=O(F,K,S),de=n.createGain();return ie.buffer=w,ie.loop=!0,W&&W!==K&&(le.frequency.setValueAtTime(K,z),le.frequency.exponentialRampToValueAtTime(W,z+D)),de.gain.setValueAtTime(0,z),de.gain.linearRampToValueAtTime(V,z+k),ne>0&&de.gain.setValueAtTime(V,z+k+ne),de.gain.exponentialRampToValueAtTime(1e-4,z+D),ie.connect(le),le.connect(de),de.connect(R.out),ie.start(z,t()*(w.duration-.2)),ie.stop(z+D+.03),R.srcs.push(ie),R.nodes.push(ie,le,de),be(R,z+D+.05),{s:ie,f:le,g:de}}function qe(R,w,F,K,W,S,z,D,V){const k=n.createOscillator(),ne=n.createGain(),ie=S+z+D;return k.type=w,k.frequency.setValueAtTime(F,W),K&&K!==F&&k.frequency.linearRampToValueAtTime(K,W+ie),ne.gain.setValueAtTime(0,W),ne.gain.linearRampToValueAtTime(V,W+S),ne.gain.setValueAtTime(V,W+S+z),ne.gain.linearRampToValueAtTime(0,W+ie),k.connect(ne),ne.connect(R.out),k.start(W),k.stop(W+ie+.03),R.srcs.push(k),R.nodes.push(k,ne),be(R,W+ie+.05),{o:k,g:ne}}function $e(R,w,F,K,W,S=[1,2.31,3.87,5.13]){S.forEach((z,D)=>ue(R,"sine",w*z,0,F,K/(1+D*.6),W/(1+D*.9),.002))}function pe(R,w,F,K=2400){Me(R,s.buf.white,"bandpass",K,0,1.2,w,.014,F,.001),ue(R,"sine",K*.6,K*.3,w,.02,F*.6,.001)}function we(R){const w=te(I(),0,R);return w.end=1/0,w.out.gain.value=0,w.osc=(F,K)=>{const W=n.createOscillator();return W.type=F,W.frequency.value=K,W.start(I()),w.srcs.push(W),w.nodes.push(W),W},w.noise=(F,K=1)=>{const W=n.createBufferSource();return W.buffer=F,W.loop=!0,W.playbackRate.value=K,W.start(I(),t()*(F.duration-.2)),w.srcs.push(W),w.nodes.push(W),W},w.add=(...F)=>(w.nodes.push(...F),H(...F,w.out)),w}function Re(R,w){const F=I();R.out.gain.cancelScheduledValues(F),R.out.gain.setTargetAtTime(0,F,Math.max(.005,w/4)),R.end=F+w+.1;for(const K of R.srcs)try{K.stop(F+w+.05)}catch{}}function Oe(R,w,F){const K=te(R,.2,{b:1,pan:F*.12});ue(K,"sine",112+t()*10,56,R,.12,.55*w,.003),Me(K,s.buf.brown,"lowpass",320,0,.7,R,.07,.5*w,.002);const W=te(R,.3,{w:1,rev:.35,pan:F*.22});Me(W,s.buf.white,"bandpass",2100+t()*500,0,1.3,R,.04,.16*w,.001),$e(W,404+t()*46,R,.15,.06*w,[1,2.31,3.87])}function Se(R){const w=2.6+t()*1.8,F=58+t()*44,K=.93+t()*.14,W=te(R,w,{w:1,rev:.9,pan:t()*1.4-.7});qe(W,"sine",F,F*K,R,w*.3,w*.2,w*.5,.1),qe(W,"sine",F*1.497,F*1.497*K,R+.2,w*.3,w*.1,w*.5,.045),qe(W,"triangle",F*2.71,F*2.71*(2-K),R,w*.4,0,w*.5,.012),Me(W,s.buf.brown,"bandpass",F*4,F*4*K,14,R,w,.25,w*.3)}function Ze(R,w){const F=Xf[Math.floor(t()*Xf.length)],K=te(R,2.2,{w:1,rev:.8,pan:t()*1.6-.8});ue(K,"sine",F,F*.998,R,2.1,.03*w,.003),ue(K,"sine",F*2.76,0,R,.7,.01*w,.002),ue(K,"sine",F*5.4,0,R,.25,.004*w,.001)}function He(R,w,F){const K=Br[F]||Br.bay,W=.13*w*K.beacon,S=932.33*(.86+.14*w),z=te(R,.7,{w:1,rev:.45,lp:K.beaconLP});for(let D=0;D<3;D++){const V=R+D*.2;ue(z,"sine",S,0,V,.1,W,.004,.065),ue(z,"sine",S*2,0,V,.1,W*.22,.004,.06),ue(z,"triangle",S*3.01,0,V,.06,W*.06,.003,.03)}}function st(R,w){R=vi(On(R,0),0,.25),w=w||{};const F=I(),K=Br[w.room]?w.room:v.room||"airlock",W=Math.max(0,On(w.speed,0)),S=vi(On(w.wake,0),0,1),z=vi(On(w.vacuum,0),0,1),D=vi(On(w.beacon,0),0,1),V=vi(On(w.tailFlicker,0),0,1);if(K!==v.room){const ne=!v.room;v.room=K;for(const ie of Wf)$("room."+ie,s.room[ie].gain,ie===K?Br[ie].hum:0,ne?.12:.55);$("revS",s.revS.gain,Br[K].revS,.5),$("revL",s.revL.gain,Br[K].revL,.5),v.nextGroan=K==="corridor"?F+2.5+t()*5:-1}$("vacF",s.vacLP.frequency,Math.round(18e3*Math.pow(140/18e3,z)),.12),$("vacG",s.vacGain.gain,Math.round((1-.4*z)*100)/100,.12),$("wake",s.wake.gain,Math.round(Math.pow(S,1.3)*60)/100,.4),$("tail",s.tail.gain,Math.round(V*4)/100,.05),v.wake=S,W>.25?(v.stepPhase+=R*Math.min(4.2,1.15+.42*W),v.stepPhase>=1&&(v.stepPhase-=Math.floor(v.stepPhase),v.foot=-v.foot,Oe(F+.005,.4+Math.min(.32,W*.065),v.foot))):v.stepPhase=.6,v.beaconClock=Number.isFinite(w.t)?w.t:v.beaconClock+R,v.beaconLevel=D;const k=Math.floor(v.beaconClock/2);k!==v.beaconIdx&&(v.beaconIdx=k,D>.02&&F>=v.beaconMuteUntil&&He(F+.01,D,K)),v.nextGroan>=0&&F>=v.nextGroan&&(Se(F+.02),v.nextGroan=F+9+t()*14),S>.05?(v.nextChime<0&&(v.nextChime=F+.6+t()*1.5),F>=v.nextChime&&(Ze(F+.01,S),v.nextChime=F+(5-3.9*S)*(.5+t()))):v.nextChime=-1,M&&F-T>1.2&&(Re(M,.2),M=null,A=-1,x=-1),F-v.lastReap>.5&&(xe(F),v.lastReap=F),r&&(u+=R)}function rt(R,w,F){const K=te(R,.12,{radio:1});return Me(K,s.buf.white,"bandpass",w?1500:1100,0,.8,R,w?.07:F?.075:.11,.9,.001),ue(K,"square",w?1250:820,0,R,.025,.35,.001),K}function ct(R){b.auto&&(s.carrier.gain.cancelScheduledValues(R),s.duck.gain.cancelScheduledValues(R),b.auto.click&&b.auto.end>R&&ze(b.auto.click),b.auto=null)}function Q(R,w){s.carrier.gain.setTargetAtTime(0,R,.02),s.duck.gain.setTargetAtTime(1,R+.05,.22),b.auto={click:w?rt(R,!1,!0):null,end:R}}function It(R){const w=b.speech;if(w){if(w.end>R){w.v.out.gain.cancelScheduledValues(R),w.v.out.gain.setTargetAtTime(0,R,.012),w.v.end=R+.15;for(const F of w.v.srcs)try{F.stop(R+.1)}catch{}}b.speech=null}}function ut(){const R=I();ct(R),b.on||rt(R,!0),b.on=!0,s.carrier.gain.setTargetAtTime(1,R,.02),s.duck.gain.setTargetAtTime(qf,R,.07)}function Ae(){const R=I();ct(R),It(R),b.on&&rt(R,!1),b.on=!1,s.carrier.gain.setTargetAtTime(0,R,.03),s.duck.gain.setTargetAtTime(1,R+.05,.22)}function ve(){const R=I(),w=!!b.auto&&b.auto.end>R;It(R),w&&(ct(R),Q(R,!1))}function je(R,w){const F=I(),K=Hy(String(R??"")),W=!b.on,S=W&&!!b.auto&&b.auto.end>F,z=On(w,0)>0?Math.min(w,120):0,D=W&&!S?.1:.04,V=W?.11:.02;if(It(F),!K.length||z&&z<D+V+.08)return S&&(ct(F),Q(F,!1)),0;ct(F);let k=0;for(const Cn of K)k+=Cn.w;const ne=z?z-D-V:vi(k*ky,.3,40)+.03,ie=Math.max((ne-.03)/k,By),le=F+D,de=le+ne;W&&(S||rt(F,!0),s.carrier.gain.setTargetAtTime(1,F,.02),s.duck.gain.setTargetAtTime(qf,F,.07),Q(de+.005,!0));const Ie=te(le,ne+.1,{radio:1}),_e=n.createOscillator(),Ve=L(0),Ke=O("bandpass",500,5),Fe=O("bandpass",1300,7),Mt=O("bandpass",2450,9),un=L(1),Ci=L(.7),oo=L(.22),hi=L(1),as=n.createBufferSource(),xr=O("bandpass",2100,1.1),ls=L(0),Yi=88+t()*6;_e.type="sawtooth",_e.frequency.setValueAtTime(Yi*1.1,le),_e.connect(Ve),Ve.connect(Ke),Ve.connect(Fe),Ve.connect(Mt),H(Ke,un,hi),H(Fe,Ci,hi),H(Mt,oo,hi),as.buffer=s.buf.white,as.loop=!0,H(as,xr,ls,hi),hi.connect(Ie.out),hi.gain.setValueAtTime(1,de-.04),hi.gain.linearRampToValueAtTime(0,de),Ve.gain.setValueAtTime(0,le),ls.gain.setValueAtTime(0,le);const qs=new Array(K.length);let ao="p",vr=!0;for(let Cn=K.length-1;Cn>=0;Cn--)K[Cn].gap&&K[Cn].end?(ao=K[Cn].end,vr=!0):K[Cn].syl&&(qs[Cn]=vr?ao:"",vr=!1);let fn=le,lo=0,_r=0,cs=!1;for(let Cn=0;Cn<K.length&&fn<de;Cn++){const Ss=K[Cn],us=Ss.w*ie;if(Ss.gap)Ve.gain.linearRampToValueAtTime(0,fn+Math.min(.05,us*.6)),Ss.end&&(_r=0),cs=!0;else{const di=Ss.cons?Math.min(.07,us*.32):0,yr=.75+t()*.25,T0=lo%3===0;cs&&(Ve.gain.setValueAtTime(0,fn),cs=!1);const[jo,N]=Uy[Ss.v];let j=Yi*(1.12-Math.min(.2,_r*.018))*(T0?1.07:1)*(.975+t()*.05);qs[Cn]==="p"?j*=.86:qs[Cn]==="q"&&(j*=1.16),di&&(Ve.gain.linearRampToValueAtTime(.12*yr,fn+di*.4),ls.gain.setValueAtTime(0,fn),ls.gain.linearRampToValueAtTime(.5,fn+di*.35),ls.gain.linearRampToValueAtTime(0,fn+di),xr.frequency.setValueAtTime(1500+t()*1300,fn)),Ke.frequency.setTargetAtTime(jo*(.93+t()*.14),fn+di*.5,.022),Fe.frequency.setTargetAtTime(N*(.93+t()*.14),fn+di*.5,.028),_e.frequency.setTargetAtTime(j,fn,.035),Ve.gain.linearRampToValueAtTime(yr,fn+di+Math.min(.03,(us-di)*.3)),Ve.gain.linearRampToValueAtTime(yr*.7,fn+di+(us-di)*.8),Ve.gain.linearRampToValueAtTime(yr*.3,fn+us),lo++,_r++}fn+=us}return Ve.gain.linearRampToValueAtTime(0,fn+.03),_e.start(le),_e.stop(de+.05),as.start(le,t()),as.stop(de+.05),Ie.srcs.push(_e,as),Ie.nodes.push(_e,Ve,Ke,Fe,Mt,un,Ci,oo,hi,as,xr,ls),b.speech={v:Ie,end:de},D+ne+V}const Be={wheel(R){const w=I(),F=vi(On(R,0),0,1);if(!M){const D=we({w:.9,b:.5,rev:.25});D.bp=O("bandpass",900,9),D.add(D.noise(s.buf.white),D.bp,L(.9)),D.sq=D.osc("sawtooth",73),D.sqf=O("bandpass",1400,12),D.add(D.sq,D.sqf,L(.16)),D.add(D.noise(s.buf.brown,1.4),O("lowpass",210,.8),L(.7)),M=D}const K=A<0?.02:Math.abs(F-A),W=.45+.55*Math.min(1,K*40);A=F,T=w,M.bp.frequency.setTargetAtTime(720+520*F,w,.05),M.sqf.frequency.setTargetAtTime(1250+700*F+200*Math.sin(F*37),w,.04),M.sq.frequency.setTargetAtTime(66+30*F,w,.05);const S=M.out.gain;S.cancelScheduledValues(w),S.setTargetAtTime(.42*W,w,.03),S.setTargetAtTime(0,w+.13,.07);const z=Math.floor(F*10);if(z!==x){if(x>=0){const D=te(w,.1,{w:.8,b:.5,rev:.3});pe(D,w,.3,1700),$e(D,610,w,.08,.08,[1,2.4])}x=z}},hatchOpen(){const R=I(),w=te(R,2,{w:1,b:.3,rev:.5});ue(w,"sine",72,38,R,.45,.8,.004),Me(w,s.buf.brown,"lowpass",600,180,.7,R,.3,.7,.002),$e(w,211,R,.7,.16,[1,2.31,3.47,5.2]),Me(w,s.buf.white,"bandpass",4200,1400,.9,R+.12,1.5,.16,.05,.25);const F=ue(w,"sawtooth",182,139,R+.25,.8,.05,.1,.3),K=O("bandpass",900,10);F.g.disconnect(),H(F.g,K,w.out),w.nodes.push(K)},pickup(){const R=I(),w=te(R,.4,{w:.7,b:.6,rev:.2});$e(w,1320,R,.18,.12,[1,1.6,2.41]),ue(w,"sine",165,88,R,.08,.45,.002),pe(w,R+.07,.14,2800)},gripOn(){const R=I(),w=te(R,.3,{w:.5,b:.7,i:.25});ue(w,"sine",170,430,R,.14,.3,.01,.06),ue(w,"triangle",340,860,R,.12,.07,.01,.05),pe(w,R+.11,.22,2100)},gripOff(){const R=I(),w=te(R,.3,{w:.5,b:.7,i:.25});pe(w,R,.2,1800),ue(w,"sine",430,150,R,.16,.28,.006),ue(w,"triangle",860,300,R,.12,.06,.006)},gripHold(R){if(R&&!y){const w=we({w:.45,b:.8}),F=I(),K=L(1),W=L(.25),S=w.osc("sine",11.3);w.add(w.osc("sawtooth",82),O("lowpass",310,1.2),K),w.nodes.push(W),S.connect(W),W.connect(K.gain),w.add(w.osc("sine",164.4),L(.35)),w.add(w.osc("sine",246),L(.08)),w.out.gain.setTargetAtTime(.11,F,.08),y=w}else!R&&y&&(Re(y,.18),y=null)},throwObj(){const R=I(),w=te(R,.5,{w:.9,b:.5,rev:.25}),F=Me(w,s.buf.white,"bandpass",420,0,1.4,R,.3,.3,.05,.06);F.f.frequency.setValueAtTime(420,R),F.f.frequency.exponentialRampToValueAtTime(1900,R+.11),F.f.frequency.exponentialRampToValueAtTime(340,R+.3),ue(w,"sine",150,52,R,.16,.6,.003),ue(w,"sine",430,120,R,.09,.14,.003)},cutOn(){if(E)return;const R=I(),w=te(R,.2,{w:.8,b:.4,i:.2,rev:.2});Me(w,s.buf.white,"highpass",2600,0,.7,R,.07,.4,.001),ue(w,"sawtooth",1900,240,R,.06,.12,.001);const F=we({w:.9,b:.35,i:.25,rev:.15}),K=L(.085),W=L(.035),S=F.osc("sine",23);F.add(F.noise(s.buf.white),O("bandpass",3300,.9),K),F.nodes.push(W),S.connect(W),W.connect(K.gain);const z=()=>{const V=L(0);return F.nodes.push(V),V.connect(F.out),V},D=(V,...k)=>{F.nodes.push(...k),H(...k,V)};F.crk=L(1),F.nodes.push(F.crk),F.crk.connect(F.out),D(F.crk,F.noise(s.buf.crackle,1.7),O("highpass",1400,.7),L(.5)),D(F.crk,F.noise(s.buf.crackle,.9),O("bandpass",2400,2),L(.4)),F.add(F.osc("sawtooth",118),O("bandpass",1900,3),L(.05)),F.add(F.osc("sine",59),L(.1));{F.seam=z();const V=L(.5),k=F.osc("sawtooth",41),ne=L(.3);F.nodes.push(ne),k.connect(ne),ne.connect(V.gain),D(F.seam,F.noise(s.buf.white,1.3),O("highpass",3800,.8),V),D(F.seam,F.noise(s.buf.crackle,2.6),O("highpass",2600,.7),L(1.8)),D(F.seam,F.noise(s.buf.crackle,3.7),O("bandpass",4600,1.5),L(1.4))}{F.armor=z();const V=F.osc("sawtooth",392),k=F.osc("sine",6.3),ne=L(9);F.nodes.push(ne),k.connect(ne),ne.connect(V.frequency);const ie=L(.7),le=F.osc("sawtooth",57),de=L(.3);F.nodes.push(de),le.connect(de),de.connect(ie.gain);const Ie=O("lowpass",2200,.7);D(ie,V,O("bandpass",784,14),L(.8)),D(ie,V,O("bandpass",1176,18),L(.45)),D(Ie,ie),D(Ie,F.noise(s.buf.brown,1.6),O("bandpass",560,7),L(1.1)),D(Ie,F.osc("sine",196),L(.05)),D(F.armor,Ie)}{F.rattle=z();const V=L(.5),k=F.osc("square",34),ne=L(.5);F.nodes.push(ne),k.connect(ne),ne.connect(V.gain);for(const[ie,le]of[[1130,.16],[1723,.11],[2617,.07]]){const de=L(le);F.nodes.push(de),H(F.osc("triangle",ie),de,V)}D(F.rattle,V)}F.out.gain.setTargetAtTime(.5,R+.02,.03),E=F,C="none"},cutSurface(R){const w=Vy.includes(R)?R:"none";if(!E||w===C)return;C=w;const F=I(),K=w==="seam"||w==="crawler";E.seam.gain.setTargetAtTime(K?1:0,F,.016),E.armor.gain.setTargetAtTime(w==="armor"?1:0,F,.016),E.rattle.gain.setTargetAtTime(w==="crawler"?1:0,F,.016),E.crk.gain.setTargetAtTime(w==="armor"?0:1,F,.016)},cutOff(){if(!E)return;const R=I();Re(E,.1),E=null,C="none";const w=te(R,.3,{w:.8,b:.4,i:.2});ue(w,"sawtooth",900,140,R,.14,.07,.002),Me(w,s.buf.white,"bandpass",3e3,700,1,R,.2,.08,.002)},overheat(){const R=I(),w=te(R,1.8,{w:.6,i:.55,b:.3,rev:.2});pe(w,R,.5,2600),ue(w,"sine",140,70,R,.06,.4,.002),ue(w,"sine",2050,3500,R+.06,1.5,.085,.12,.5),ue(w,"sine",2071,3540,R+.06,1.3,.035,.15,.4),Me(w,s.buf.white,"bandpass",5200,3400,1.5,R+.05,1.6,.11,.08,.4)},heatWarn(){const R=I(),w=te(R,.3,{i:.9,ui:.3});for(const F of[0,.12])ue(w,"triangle",1568,0,R+F,.075,.17,.003,.045),ue(w,"sine",3136,0,R+F,.06,.04,.003,.03)},toolMode(R){const w=I(),F=te(w,.4,{b:.7,i:.5,w:.4});R==="cut"?(pe(F,w,.3,2600),ue(F,"sine",150,90,w,.04,.3,.002),ue(F,"sine",820,3300,w+.03,.24,.1,.16),ue(F,"triangle",1640,6600,w+.03,.22,.02,.15),Me(F,s.buf.white,"bandpass",2200,5600,3,w+.03,.24,.07,.17)):(pe(F,w,.32,1500),ue(F,"sine",132,70,w,.07,.5,.002),pe(F,w+.055,.24,1900),pe(F,w+.1,.18,2300),$e(F,742,w+.1,.16,.06,[1,2.31,3.87]))},socket(){const R=I(),w=te(R,1,{w:1,b:.5,rev:.35});pe(w,R,.5,1700),ue(w,"sine",128,66,R,.1,.6,.002),pe(w,R+.075,.3,2300),$e(w,520,R+.075,.2,.07,[1,2.2,3.6]),ue(w,"sine",220,440,R+.16,.5,.11,.08,.2),ue(w,"sine",330,660,R+.16,.5,.05,.1,.2),ue(w,"sawtooth",55,110,R+.16,.6,.05,.1,.25)},doorPower(){const R=I(),w=te(R,2.4,{w:1,b:.25,rev:.5});pe(w,R,.5,1500),ue(w,"sine",96,58,R,.12,.6,.002);const F=ue(w,"sawtooth",58,236,R+.05,.75,.09,.2,.35),K=O("lowpass",820,2);F.g.disconnect(),H(F.g,K,w.out),w.nodes.push(K),Me(w,s.buf.brown,"bandpass",290,210,1.1,R+.5,1.5,.75,.2,.8),qe(w,"sine",48,43,R+.5,.2,.8,.4,.3),Me(w,s.buf.white,"bandpass",2600,1700,3,R+.5,1.4,.035,.2,.7),ue(w,"sine",62,34,R+1.85,.4,.8,.004),$e(w,176,R+1.85,.5,.1)},beaconStep(R){const w=vi(Math.round(On(R,1)),1,3)-1,F=Iy[w],K=I(),W=te(K,.8,{w:1,i:.2,rev:.5});pe(W,K,.3,1400),ue(W,"sine",F,F*.94,K,.6,.2,.006,.08),ue(W,"sine",F*1.5,F*1.41,K,.4,.06,.006,.05),ue(W,"triangle",F/2,F*.46,K,.55,.12,.01,.08),ue(W,"sine",70-w*9,40,K,.3,.35,.004)},beaconDown(){const R=I(),w=te(R,6,{w:1,rev:.6}),F=ue(w,"sine",932,84,R,1,.2,.01,.5),K=ue(w,"sawtooth",466,42,R,1,.05,.01,.5),W=L(1);F.g.disconnect(),K.g.disconnect(),F.g.connect(W),K.g.connect(W),W.connect(w.out),w.nodes.push(W);for(let D=0;D<14;D++){const V=R+.12+D*.058*(1+D*.03);W.gain.setValueAtTime(D%2?1:.08,V)}Me(w,s.buf.crackle,"highpass",900,0,.7,R+.1,1,.5,.2,.5);const S=s.hum.gain;S.cancelScheduledValues(R),S.setTargetAtTime(.06,R+.5,.22),S.setTargetAtTime(1,R+2.5,1.1),v.beaconMuteUntil=R+4;const z=R+2.4;ue(w,"sine",58,27,z,3.2,.9,.012,.15),ue(w,"sine",87,40,z,1.6,.3,.01),Me(w,s.buf.brown,"lowpass",190,60,.7,z,2.2,.9,.01,.1),$e(w,97,z,2.4,.05,[1,2.76,4.1])},wrong(){const R=I(),w=te(R,.5,{w:.6,i:.5,rev:.15,lp:900});for(const F of[0,.14])ue(w,"square",110,104,R+F,.11,.16,.004,.06),ue(w,"square",116.5,110,R+F,.11,.12,.004,.06);ue(w,"sine",55,50,R,.3,.25,.005)},crawlerWake(){const R=I(),w=te(R,1.6,{w:1,rev:.6});Me(w,s.buf.crackle,"bandpass",2400,3300,1.5,R,1.1,.9,.7,.2);const F=ue(w,"sawtooth",44,74,R,1.2,.3,.5,.3),K=O("lowpass",230,2);F.g.disconnect(),H(F.g,K,w.out),w.nodes.push(K);for(let W=0;W<3;W++)pe(w,R+.9+W*.11,.3,3200+W*300),ue(w,"sine",1850+W*170,0,R+.9+W*.11,.04,.08,.001)},crawlerStep(R,w){const F=Math.max(0,On(R,3)),K=I(),W=1/(1+F/4*(F/4));if(W<.012)return;const S=te(K,.15,{w:1,rev:.2+Math.min(.6,F*.05),pan:On(w,0),lp:vi(9500/(1+F/5),500,9500)});Me(S,s.buf.white,"bandpass",3300+t()*600,0,2.2,K,.022,.5*W,.001),ue(S,"sine",1820+t()*380,0,K,.035,.16*W,.001),ue(S,"sine",240+t()*30,150,K,.04,.2*W,.001)},crawlerWindup(R){const w=I(),F=te(w,.6,{w:1,rev:.35,pan:On(R,0)}),K=ue(F,"sawtooth",230,1240,w,.52,.62,.44),W=O("bandpass",1100,5);W.frequency.setValueAtTime(1100,w),W.frequency.exponentialRampToValueAtTime(2900,w+.5),K.g.disconnect(),H(K.g,W,F.out),F.nodes.push(W),ue(F,"square",115,620,w,.52,.09,.44),Me(F,s.buf.white,"bandpass",1500,4300,2.5,w,.52,.36,.45);let S=w+.04;for(let z=0;z<7;z++)pe(F,S,.18+z*.06,2400+z*180),S+=.1-z*.011},crawlerAttack(R){const w=I(),F=te(w,.7,{w:1,rev:.45,pan:On(R,0)}),K=ue(F,"sawtooth",520,0,w,.5,.3,.02,.2),W=O("bandpass",1800,4);K.o.frequency.exponentialRampToValueAtTime(1420,w+.2),K.o.frequency.exponentialRampToValueAtTime(300,w+.5),K.g.disconnect(),H(K.g,W,F.out),F.nodes.push(W),ue(F,"square",527,1433,w,.22,.05,.02),Me(F,s.buf.white,"bandpass",4200,2600,1.2,w,.4,.22,.03,.1);for(let S=0;S<4;S++)pe(F,w+.03+S*.045,.3,3400)},crawlerHit(){const R=I(),w=te(R,.5,{w:1,rev:.4});$e(w,310,R,.35,.28,[1,2.39,3.83,6.22]),Me(w,s.buf.white,"bandpass",2e3,800,.9,R,.07,.5,.001),ue(w,"sawtooth",920,590,R+.02,.13,.07,.004),ue(w,"sine",120,60,R,.09,.5,.002)},canHit(){const R=I(),w=te(R,1.5,{w:1,b:.25,rev:.55});ue(w,"sine",92,41,R,.24,.65,.002),Me(w,s.buf.brown,"lowpass",520,130,.7,R,.16,.6,.002),Me(w,s.buf.white,"bandpass",1300,600,.8,R,.05,.4,.001),$e(w,176,R,1.3,.26,[1,2.76,5.4,8.93]),$e(w,523,R+.004,.9,.1,[1,1.51,2.66])},crawlerDie(){const R=I(),w=te(R,1.8,{w:1,rev:.55}),F=ue(w,"sawtooth",900,78,R,1.15,.24,.01,.3),K=O("bandpass",1700,3);K.frequency.setValueAtTime(1700,R),K.frequency.exponentialRampToValueAtTime(260,R+1.15),F.g.disconnect(),H(F.g,K,w.out),w.nodes.push(K);let W=R+.05;for(let S=0;S<9;S++)pe(w,W,.3-S*.02,3300-S*150),W+=.05+S*.022;ue(w,"sine",84,40,R+1.2,.3,.7,.003),Me(w,s.buf.brown,"lowpass",400,120,.7,R+1.2,.25,.6,.002),$e(w,262,R+1.2,.4,.08)},hurt(){const R=I(),w=te(R,.9,{b:1,i:.5});ue(w,"sine",96,44,R,.28,.95,.003),Me(w,s.buf.brown,"lowpass",260,90,.7,R,.2,.9,.002),ue(w,"sine",3120,3080,R+.02,.8,.02,.03),Me(w,s.buf.white,"bandpass",900,500,1,R,.06,.2,.001)},death(){const R=I(),w=te(R,3.6,{b:1,i:.4,w:.3});ue(w,"sine",112,23,R,3.2,.8,.01,.3),ue(w,"sine",168,31,R,2.4,.25,.01,.2),Me(w,s.buf.brown,"lowpass",500,50,.7,R,2.6,.7,.01,.2),Me(w,s.buf.white,"bandpass",1400,300,.8,R+.1,1.8,.1,.25,.2),ue(w,"sine",2960,2890,R,2.6,.022,.05);const F=s.life.gain;F.cancelScheduledValues(R),F.setTargetAtTime(.12,R,.7)},respawn(){const R=I(),w=te(R,2.2,{b:.5,i:.8,w:.3,rev:.2}),F=s.life.gain;F.cancelScheduledValues(R),F.setTargetAtTime(1,R+.2,.6),qe(w,"sine",55,110,R,.9,.2,.9,.3),qe(w,"sine",82.5,165,R,1,.1,.8,.12),Me(w,s.buf.white,"bandpass",500,2600,.8,R,1.4,.09,.9,.1),ue(w,"sine",880,0,R+1.1,.09,.07,.004,.04),ue(w,"sine",1318.5,0,R+1.24,.14,.07,.004,.05)},logOpen(){const R=I(),w=te(R,1.1,{w:.4,i:.7});pe(w,R,.4,1900),ue(w,"sine",150,90,R,.05,.3,.002),Me(w,s.buf.white,"bandpass",2700,3100,.7,R+.06,.9,.06,.08,.5),Me(w,s.buf.crackle,"highpass",1200,0,.7,R+.06,.9,.3,.1,.5),ue(w,"sine",1e3,985,R+.12,.2,.025,.02,.1)},signPick(R){const w=vi(Math.round(On(R,0)),0,3),F=zy[w],K=I(),W=te(K,.8,{w:.9,i:.25,rev:.45});pe(W,K,.12,2e3),ue(W,"sine",F,F*.997,K,.7,.2,.004,.03),ue(W,"sine",F*2.76,0,K,.3,.045,.003),ue(W,"triangle",F*2,0,K,.45,.04,.004)},sealOpen(){const R=I(),w=te(R,8,{w:1,b:.35,rev:.6});Me(w,s.buf.brown,"lowpass",95,150,.8,R,7,1,1.2,4.2);const F=ue(w,"sawtooth",37,44,R+.2,6.3,.22,.8,4.4),K=O("lowpass",250,2.5);F.g.disconnect(),H(F.g,K,w.out),w.nodes.push(K),qe(w,"sine",141,97,R+.5,1.4,.8,2.6,.07),qe(w,"sine",212,168,R+1.4,1.2,.4,2.8,.035),Me(w,s.buf.brown,"bandpass",520,380,9,R+.8,5,.5,1,2.5),ue(w,"sine",66,33,R,.5,.7,.005);let W=R+.25;for(let S=0;S<30;S++){const z=te(W,.3,{w:1,rev:.5,pan:t()*1.6-.8}),D=.1+.22*t(),V=3e3+t()*4200;Me(z,s.buf.white,"highpass",3400+t()*1500,0,.8,W,.008+t()*.02,D,.001),ue(z,"sine",V,V*.98,W,.05+t()*.18,D*.35,.001),ue(z,"sine",V*1.47,0,W,.04+t()*.06,D*.18,.001),W+=.04+t()*.16+S*.012}ue(w,"sine",60,29,R+6.5,1.3,.85,.006),Me(w,s.buf.brown,"lowpass",220,70,.7,R+6.5,1,.8,.004)},reveal(){const R=I(),w=te(R,17,{w:1,rev:.7}),F=[[32.7,.42,5,5,6.5],[32.9,.3,6,4,6.5],[49,.26,5.5,4.5,6],[65.41,.2,6,4,6],[65.7,.1,7,3,6],[98,.11,7,3,5.5],[155.56,.05,8,2.5,5],[233.08,.022,9,2,4.5],[1244.51,.004,9,2,4],[1864.66,.0025,10,1.5,4]];for(const[K,W,S,z,D]of F)qe(w,"sine",K,K,R,S,z,D,W);qe(w,"triangle",65.41,65.41,R,7,3,6,.05),Me(w,s.buf.brown,"lowpass",60,120,.7,R,16,.5,6,4)},ui(){const R=I(),w=te(R,.06,{ui:1});ue(w,"sine",1800,1500,R,.022,.05,.001),Me(w,s.buf.white,"highpass",3e3,0,.7,R,.008,.03,.001)},goal(){const R=I(),w=te(R,.5,{ui:1});ue(w,"sine",987.77,0,R,.16,.04,.008,.05),ue(w,"sine",1975.5,0,R,.1,.008,.008,.03),ue(w,"sine",1479.98,0,R+.15,.24,.04,.008,.07),ue(w,"sine",2959.96,0,R+.15,.14,.008,.008,.04)},hint(){const R=I(),w=te(R,.2,{radio:.3});ue(w,"sine",1046.5,0,R,.11,.08,.006,.04)},radioOpen:ut,radioClose:Ae,radioStop:ve},Ye=(R,w)=>(...F)=>{if(!q())return w;try{return R(...F)}catch(K){return P(K),w}};function G(){if(!s)return;const R=I(),w=!r&&n.state==="running";for(const[F,K]of[[s.master.gain,f],[s.mute.gain,p?0:1]])F.cancelScheduledValues(R),w?F.setTargetAtTime(K,R,.02):(F.setValueAtTime(K,R),F.value=K)}function U(){if(!s)return;const R=I();for(const[w,F]of[[s.pauseDry.gain,m?0:1],[s.pauseWet.gain,m?Yf:0]])w.cancelScheduledValues(R),w.setTargetAtTime(F,R,.04)}const oe={unlock(){if(l)return!1;try{if(!s){if(!e)return!1;ae(new e({latencyHint:"interactive"})),o=!0}if(r)return!0;if(n.state!=="running"&&n.state!=="closed"&&n.resume){const R=n.resume();R&&R.then&&R.then(G,()=>{})}return n.state==="running"}catch(R){return P(R),!1}},setMaster(R){f=vi(On(R,f),0,1);try{G()}catch(w){P(w)}},setMuted(R){p=!!R;try{G()}catch(w){P(w)}},setPaused(R){const w=!!R;if(w!==m){m=w;try{U()}catch(F){P(F)}}},update:Ye(st),radioSpeak:Ye(je,0),stats(){return{built:!!s,offline:r,state:n?n.state:"none",running:q(),voices:_.length,peakVoices:a,errors:d,lastError:h,sampleRate:n?n.sampleRate:0,time:s?I():0}},dispose(){if(!l){l=!0;try{for(const R of _)B(R);_.length=0,M=y=E=null;for(const R of c){try{R.stop()}catch{}try{R.disconnect()}catch{}}if(c.length=0,s)try{s.mute.disconnect()}catch{}if(o&&n&&n.state!=="closed"&&n.close){const R=n.close();R&&R.catch&&R.catch(()=>{})}}catch(R){P(R)}}}};for(const R of Object.keys(Be))oe[R]=Ye(Be[R]);if(i.context)try{ae(i.context)}catch(R){P(R),s=null}return oe}const Rn=new URLSearchParams(location.search),Mi=Rn.get("bench")==="1",Vo=Rn.get("probe")==="1",Ps=!Mi&&!Vo||Mi&&Rn.get("game")==="1",Xa=parseInt(Rn.get("seed")||"1",10)||1,Xy=Math.max(0,Math.min(zo.length-1,parseInt(Rn.get("cam")||"0",10)||0)),$f=Rn.get("fps")==="1"||Vo,ir=Rn.get("touch")==="1"||Rn.get("touch")!=="0"&&typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches&&!Mi,Zf=Hr.includes(Rn.get("q"))?Rn.get("q"):"",qy=Math.max(0,Math.min(3,parseFloat(Rn.get("scale")||"0")||0)),Kf=Math.max(0,parseFloat(Rn.get("slow")||"0")||0),qa=(Rn.get("pp")||"").split(","),Jf=Rn.get("scene")||Rn.get("start")||"",Qf=Mi&&Rn.get("mut")||"",Yy=/drift-preview/.test(location.pathname)||/^(localhost|127\.0\.0\.1)$/.test(location.hostname),Fi=document.documentElement;Fi.dataset.drift="loading";function Fd(i){Fi.dataset.drift="error",Fi.dataset.driftError=i;const e=document.getElementById("err");e.textContent="Игра не запустилась: "+i,e.hidden=!1,Mi&&(window.__drift={ready:!1,error:i})}const zs=document.createElement("canvas");let Tc="";zs.addEventListener("webglcontextcreationerror",i=>{Tc=i.statusMessage||"без статуса"});document.body.appendChild(zs);let Dn;try{Dn=new Dv({canvas:zs,antialias:!1,preserveDrawingBuffer:Mi,powerPreference:"high-performance"})}catch(i){Fd((Tc?Tc+" / ":"")+String(i&&i.message||i))}if(Dn)try{$y()}catch(i){console.error(i),Fd(String(i&&i.stack||i).slice(0,400))}function $y(){const i=Dn.getContext(),e=i.getExtension("WEBGL_debug_renderer_info"),t={version:i.getParameter(i.VERSION),renderer:e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER),vendor:e?i.getParameter(e.UNMASKED_VENDOR_WEBGL):i.getParameter(i.VENDOR)};Fi.dataset.driftGl=`${t.version} | ${t.renderer}`;const n=String(t.renderer).replace(/^ANGLE \((.*)\)$/,"$1").replace(/, (OpenGL|Direct3D|Metal|Vulkan)[^,]*$/i,"").slice(0,70),s=window.devicePixelRatio||1,r=new ty({cssW:window.innerWidth,cssH:window.innerHeight,dpr:s,tier:Zf||(ir?"lite":"high"),lockTier:!!Zf||Mi||Vo||ir,lockScale:Mi?1:qy});Rn.get("auto")==="0"&&(r.lockScale=r.scale,r.lockTier=!0),Dn.setPixelRatio(r.scale),Dn.setSize(window.innerWidth,window.innerHeight);const o=ny(Dn,{seed:Xa,bench:Mi});qa.includes("nomsaa")&&(o.ovr.msaa=0),qa.includes("nobloom")&&(o.ovr.bloom=!1),qa.includes("noprepass")&&(o.ovr.prepass=!1),qa.includes("ldr")&&(o.ovr.ldr=!0),o.applyTier(r.tier);const l=!Mi&&!Vo,u=l?Ly({touch:ir}):null,f=l?Rn.get("audio")==="0"?new Proxy({},{get:()=>()=>0}):Wy():null,p=by(o,Xa),m=Ry(o,p,{seed:Xa,ui:u,audio:f,exhibit:!Ps,mut:Qf});Qf.split(",").includes("chest")&&o.harma.showChest(!0),Ps&&Jf&&m.skipTo(Jf);const d=m.player;let h=Xy,a=!Mi||Ps,_={};const c={fwd:0,strafe:0,run:!1,fire:!1,wheel:0,press:new Set};function g(){_=m.exhibitState(zo[h])}function v(B){Ps?(m.update(B,c),c.press.clear()):(m.S.t+=B,od(d,m.colliders(),B))}function b(){if(a)o.render(m.view(),Ps?m.frame():{..._,t:m.S.t});else{const B=zo[h];o.render({x:B.pos[0],y:B.pos[1],z:B.pos[2],yaw:B.yaw,pitch:B.pitch},_)}}const M=o.info;if(Mi){Ps||g(),v(0),b(),window.__drift={ready:!0,error:"",seed:Xa,cam:h,gl:t,cameras:zo.map(B=>B.name),routes:Uv,setCamera(B){return h=Math.max(0,Math.min(zo.length-1,B|0)),a=!1,g(),b(),h},usePlayerCamera(B=!0){a=!!B,b()},setTier(B){return o.applyTier(B),b(),{tier:o.tier(),...M()}},tier:()=>o.tier(),render(){return b(),M()},info:M,stat:()=>({...o.stat}),crawlers:()=>p.crawlers.map(B=>{const ee=[];return B.group.traverse(xe=>{xe.isMesh&&ee.push({type:xe.type,vis:xe.visible,culled:xe.frustumCulled,r:xe.geometry.boundingSphere?+xe.geometry.boundingSphere.radius.toFixed(3):null})}),{pos:B.group.position.toArray().map(xe=>+xe.toFixed(2)),scale:B.group.scale.x,vis:B.group.visible,room:B.group.userData.room||"",meshes:ee}}),step(B=1,ee=1/60){for(let xe=0;xe<B;xe++)v(ee);return{t:m.S.t,...this.player()}},timeLogic(B=6e3,ee=1/60,xe=100){let ze=1/0;for(let ue=0;ue<20;ue++){const Me=performance.now();let qe=Me;for(;qe===Me;)qe=performance.now();ze=Math.min(ze,qe-Me)}const te=[];for(let ue=0;ue<B;ue+=xe){const Me=performance.now();for(let qe=0;qe<xe;qe++)v(ee);te.push((performance.now()-Me)/xe)}te.sort((ue,Me)=>ue-Me);const be=ue=>te[Math.min(te.length-1,Math.floor(ue*te.length))];return{frames:te.length*xe,batch:xe,batches:te.length,mean:te.reduce((ue,Me)=>ue+Me,0)/te.length,p50:be(.5),p95:be(.95),max:te[te.length-1],clockMs:ze,precisionMs:ze/xe}},player(){return{x:d.x,z:d.z,yaw:d.yaw,t:m.S.t}},setInput(B){Ps?(B.forward!==void 0&&(c.fwd=B.forward),B.strafe!==void 0&&(c.strafe=B.strafe)):Object.assign(d.input,B)},setYaw(B){d.yaw=B},bodyMask(B={}){o.render(m.view(),{...m.frame(),...B});const ee=240,xe=135,ze=new Jn(ee,xe),te=o.camera,be=o.scene,ue=te.layers.mask,Me=be.background,qe=be.fog,$e=new fi({color:16777215});te.layers.set(1),be.overrideMaterial=$e,be.background=null,be.fog=null,Dn.setRenderTarget(ze),Dn.setClearColor(0,1),Dn.clear(),Dn.render(be,te);const pe=new Uint8Array(ee*xe*4);Dn.readRenderTargetPixels(ze,0,0,ee,xe,pe),te.layers.mask=ue,be.overrideMaterial=null,be.background=Me,be.fog=qe,Dn.setRenderTarget(null),ze.dispose(),$e.dispose();let we=0,Re=0,Oe=0;for(let Se=0;Se<xe;Se++)for(let Ze=0;Ze<ee;Ze++){const He=pe[(Se*ee+Ze)*4]>127,st=Ze>=ee*.2&&Ze<ee*.8&&Se>=xe*.2&&Se<xe*.8;He&&we++,st&&(Oe++,He&&Re++)}return b(),{central:Re/Oe,total:we/(ee*xe)}},teleport(B,ee,xe){d.x=B,d.z=ee,xe!==void 0&&(d.yaw=xe),v(0)},game:Ps?{info:()=>m.debug.info(),input(B){Object.assign(c,B)},press(B){c.press.add(B)},lookAt:(B,ee,xe)=>m.debug.lookAt(B,ee,xe),setPitch(B){d.pitch=B},targets:()=>m.debug.targets(),aimNearest:()=>m.debug.aimNearest(),pickSigns:B=>m.debug.pickSigns(B),skipTo:B=>m.skipTo(B)}:null},Fi.dataset.drift="ready";return}const A=document.getElementById("fps");A.hidden=!$f;const T=new Le;function x(){const B=M(),ee=Dn.getDrawingBufferSize(T);A.textContent=`FPS ${r.fps?r.fps.toFixed(1):"…"} · ${r.ms?r.ms.toFixed(1):"…"} мс · ${ee.x}x${ee.y} · масштаб ${r.scale.toFixed(2)} (экран ${s.toFixed(2)}) · ступень ${o.tier()}${r.lockTier?" (вручную)":" (авто)"} · вызовов ${B.calls} · треуг. ${(B.triangles/1e3).toFixed(0)}к · программ ${B.programs} · теней за кадр ${o.stat.shadows} · зеркало ${o.stat.mirror?"да":"нет"} · ${n}`}addEventListener("resize",()=>{r.resize(window.innerWidth,window.innerHeight,window.devicePixelRatio||1),o.applyScale(r.scale)});let y=0,E=0;function C(B){const ee=performance.now();for(;performance.now()-ee<B;);}if(Vo){ae();return}const P=new Set;let I=!1,q=!1,L=!1;const O=B=>{const ee=new URLSearchParams(location.search);ee.delete("start"),B==="wheel"?ee.delete("scene"):ee.set("scene",B),location.search=ee.toString()},H=B=>{u.ended()||(I=B,m.pause(B),f.setPaused&&f.setPaused(B),c.fire=!1,B?u.panelKind()!=="comm"&&u.openPause({scenes:Yy?Ay:null,onScene:O}):u.panelKind()==="pause"&&u.closePanel())};addEventListener("keydown",B=>{if(!B.repeat){if(P.add(B.code),f.unlock(),B.code==="KeyE"&&c.press.add("e"),B.code==="KeyF"&&c.press.add("f"),B.code==="Space"&&(c.press.add("space"),B.preventDefault()),B.code==="Escape"){if(u.panelKind()==="comm")return;H(!I)}B.code==="Enter"&&u.ended()&&location.reload()}}),addEventListener("keyup",B=>P.delete(B.code)),addEventListener("blur",()=>{P.clear(),c.fire=!1}),zs.addEventListener("contextmenu",B=>B.preventDefault()),zs.addEventListener("mousedown",B=>{f.unlock();const ee=I;if(I&&H(!1),!q&&zs.requestPointerLock&&!ir){Fi.dataset.driftLock="requested";try{const xe=zs.requestPointerLock();xe&&xe.catch&&xe.catch(()=>{})}catch{}}B.button===0&&!ee&&(c.fire=!0)}),addEventListener("mouseup",B=>{B.button===0&&(c.fire=!1)}),document.addEventListener("pointerlockchange",()=>{q=document.pointerLockElement===zs,Fi.dataset.driftLock=q?"1":"0",q?L=!0:L&&!I&&!u.panelOpen()&&H(!0)});const X=(B,ee)=>{I||m.S.lock||(d.yaw-=B*.0022,d.pitch=Math.max(-1.45,Math.min(1.45,d.pitch-ee*.0022)))};let Z=null,$=0;addEventListener("mousemove",B=>{q?(X(B.movementX,B.movementY),Z=null):B.buttons&2?(Z!==null&&X(B.clientX-Z,B.clientY-$),Z=B.clientX,$=B.clientY):Z=null}),ir&&addEventListener("pointerdown",()=>f.unlock(),!0),u.onSign=B=>f.signPick(B);{const B=u.openComm;u.openComm=ee=>{document.exitPointerLock&&document.exitPointerLock(),B(ee)}}let J=performance.now(),re=0,ye=!0;Dn.setAnimationLoop(()=>{y++;const B=performance.now(),ee=(B-J)/1e3;J=B;const xe=Math.min(.1,ee),ze=te=>P.has(te);if(c.fwd=(ze("KeyW")||ze("ArrowUp")?1:0)-(ze("KeyS")||ze("ArrowDown")?1:0),c.strafe=(ze("KeyD")?1:0)-(ze("KeyA")?1:0),c.run=ze("ShiftLeft")||ze("ShiftRight"),c.wheel=(ze("KeyD")?1:0)-(ze("KeyA")?1:0),c.needClick=!q&&!ir&&!I&&!u.panelOpen(),ze("ArrowLeft")&&X(-xe*700,0),ze("ArrowRight")&&X(xe*700,0),ir){const te=u.touch;c.fwd=te.fwd,c.strafe=te.strafe,c.wheel=Math.abs(te.strafe)>.3?Math.sign(te.strafe):0,c.run=Math.hypot(te.fwd,te.strafe)>.92,X(te.lookX*1.6,te.lookY*1.6),te.lookX=te.lookY=0,c.fire=te.fire;for(const be of["e","f","space"])te[be]&&(c.press.add(be),te[be]=!1)}if(v(xe),b(),E++,Kf&&C(Kf),ye&&(ye=!1,Fi.dataset.drift="ready"),r.frame(ee)&&(r.tier!==o.tier()&&o.applyTier(r.tier),o.applyScale(r.scale)),re+=ee,re>=.2){re=0;const te=Fi.dataset,be=m.S;te.driftTier=o.tier(),te.driftScale=r.scale.toFixed(3),te.driftFps=r.fps.toFixed(1),te.driftFrames=E,te.driftRaf=y,te.driftT=be.t.toFixed(3),te.driftScene=be.scene,te.driftPx=d.x.toFixed(3),te.driftPz=d.z.toFixed(3),te.driftYaw=d.yaw.toFixed(4),te.driftPitch=d.pitch.toFixed(4),te.driftFocus=be.focus?be.focus.id:"",te.driftAct=be.focus?be.focus.act:"",te.driftLabel=be.focus?be.focus.label:"",te.driftGoal=be.goal,te.driftCut=be.cut.toFixed(3),te.driftSurf=be.surf,te.driftMarks=p.scorch.count(),te.driftSub=u.speaking()?"1":"0",te.driftSpoken=be.spoken.map(ue=>ue.key).join(","),te.driftMode=be.mode,te.driftTool=be.hasTool?"1":"0",te.driftHeld=be.held?be.held.name:"",te.driftHeat=be.heat.toFixed(3),te.driftPaused=I?"1":"0",te.driftPrompt=be.prompt||"",te.driftWheel=be.wheel.toFixed(3),te.driftFire=be.firing?"1":"0",$f&&(x(),u.setTop(A.getBoundingClientRect().bottom+8))}});function ae(){const B={tier:"high",scale:r.scale},ee=[["полный кадр: высокая ступень, стартовый масштаб",{}],["половинный масштаб (вчетверо меньше пикселей)",{scale:.5}],["без теней",{o:{shadowSpots:0}}],["без зеркала",{o:{mirror:0}}],["без Узора",{o:{noUzor:!0}}],["без сглаживания MSAA",{o:{msaa:0}}],["без свечения",{o:{bloom:!1}}],["без постобработки (без MSAA и свечения)",{o:{msaa:0,bloom:!1}}],["постобработка как до правки: MSAA x4, свечение с 1/2",{o:{msaa:4,bloomFrom:1}}],["без прохода глубины",{o:{prepass:!1}}],["средняя ступень",{tier:"medium"}],["лёгкая ступень",{tier:"lite"}],["плотность экрана целиком (как было до автонастройки)",{dprScale:!0}]],xe=24,ze=150,te=8e3,be=3e3;Object.assign(d,{x:.4,z:-9.2,yaw:.55,pitch:-.02}),_=m.exhibitState({pos:[.4,1.2,-9.2],yaw:.55,pitch:-.02,rig:1}),a=!0;const ue=document.createElement("div");ue.id="probe",ue.style.cssText="position:fixed;left:8px;top:64px;padding:10px 12px;font:12px/1.5 ui-monospace,monospace;color:#d7dde4;background:rgba(4,8,12,.88);border:1px solid #84cbcd;border-radius:6px;white-space:pre;z-index:5;max-width:96vw;overflow:auto",document.body.appendChild(ue);const Me=[],qe=new Uint8Array(4);let $e=0,pe="warm",we=[],Re=0,Oe=0,Se=0,Ze=0,He=0,st=0,rt=performance.now(),ct="";function Q(ut){const Ae=ee[ut][1];for(const je of Object.keys(o.ovr))delete o.ovr[je];Object.assign(o.ovr,Ae.o||{}),r.scale=Ae.dprScale?s:B.scale*(Ae.scale||1),o.applyTier(Ae.tier||B.tier),o.applyScale(r.scale);const ve=Dn.getDrawingBufferSize(T);ct=`${ve.x}x${ve.y}`,pe="warm",we=[],Re=performance.now()}function It(ut){const Ae=`ЗАМЕР ДРЕЙФа${ut?" · ГОТОВО, пришли этот скриншот":` · вариант ${$e+1} из ${ee.length}, ${pe==="warm"?"прогрев":"замер"}`}
${n}
окно ${window.innerWidth}x${window.innerHeight}, плотность экрана ${s}

`+"вариант".padEnd(54)+"кадр".padStart(12)+"кадров/с".padStart(10)+"мс кадра".padStart(10)+"мс рендера".padStart(12)+"худший".padStart(8)+"вызовов".padStart(9)+"треуг.".padStart(8)+"прогрев".padStart(9)+`
`;ue.textContent=Ae+Me.map(ve=>ve.name.padEnd(54)+ve.res.padStart(12)+ve.fps.toFixed(1).padStart(10)+(1e3/ve.fps).toFixed(1).padStart(10)+ve.ms.toFixed(1).padStart(12)+ve.max.toFixed(0).padStart(8)+String(ve.calls).padStart(9)+((ve.tris/1e3).toFixed(0)+"к").padStart(8)+(ve.warm+" к.").padStart(9)).join(`
`)+(ut?`

«мс рендера»: время кадра до конца работы видеокарты. «мс кадра» = 1000 / «кадров/с»: оно не меньше
«мс рендера» и кратно периоду экрана (16,7 мс при 60 Гц): экран не покажет кадр раньше своего такта.
«прогрев»: сколько кадров пропущено перед замером.`:"")}Q(0),Dn.setAnimationLoop(()=>{const ut=performance.now(),Ae=(ut-rt)/1e3;rt=ut,m.S.t+=Math.min(.1,Ae),_.t=m.S.t;const ve=performance.now();b(),i.readPixels(0,0,1,1,i.RGBA,i.UNSIGNED_BYTE,qe);const je=performance.now(),Be=je-ve;if(pe==="warm"){we.push(Be);const Ye=we.length,G=we.slice(-8),U=G.slice().sort((R,w)=>R-w)[G.length>>1];(Ye>=xe&&G.every(R=>R<U*1.5+1.5)||Ye>=ze||je-Re>te)&&(pe="meas",Oe=je,Se=je,Ze=0,He=0,st=0)}else if(Ze++,He+=Be,st=Math.max(st,Be),Se=je,Se-Oe>=be){const Ye=M();if(Me.push({name:ee[$e][0],res:ct,fps:Ze/((Se-Oe)/1e3),ms:He/Ze,max:st,calls:Ye.calls,tris:Ye.triangles,warm:we.length}),$e+1<ee.length)Q(++$e),It(!1);else{Dn.setAnimationLoop(null),It(!0),window.__probe={gpu:n,dpr:s,rows:Me},Fi.dataset.driftProbe="done",Fi.dataset.drift="ready";return}}(Ze+we.length)%20===1&&(It(!1),Ze>3&&(r.fps=Ze/Math.max(.001,(Se-Oe)/1e3),r.ms=He/Ze),x())})}}
