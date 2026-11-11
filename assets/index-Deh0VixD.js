(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Nc="187",Nf=0,m0=1,Ff=2,no=1,Of=2,Kr=3,Bs=0,bn=1,Mi=2,xr=0,io=1,Ti=2,g0=3,x0=4,Qu=5,hr=100,Bf=101,kf=102,Gf=103,Vf=104,Hf=200,ju=201,Wf=202,Xf=203,eh=204,Fc=205,qf=206,Yf=207,$f=208,Zf=209,Kf=210,Jf=211,Qf=212,jf=213,ed=214,zl=0,Ul=1,Nl=2,ho=3,Fl=4,Ol=5,Bl=6,kl=7,Oc=0,td=1,nd=2,Ni=0,th=1,nh=2,ih=3,sh=4,rh=5,oh=6,ah=7,v0="attached",id="detached",lh=300,_r=301,fo=302,Ha=303,Wa=304,yr=1e3,zi=1001,Gl=1002,un=1003,sd=1004,Eo=1005,Cn=1006,Xa=1007,Ui=1008,qn=1009,ch=1010,uh=1011,po=1012,Bc=1013,Fi=1014,ci=1015,hi=1016,kc=1017,Gc=1018,Mr=1020,hh=35902,fh=35899,dh=1021,ph=1022,Pn=1023,gs=1026,ds=1027,Vc=1028,Hc=1029,ks=1030,Wc=1031,Xc=1033,ma=33776,ga=33777,xa=33778,va=33779,Vl=35840,Hl=35841,Wl=35842,Xl=35843,ql=36196,Yl=37492,$l=37496,Zl=37488,Kl=37489,Ta=37490,Jl=37491,Ql=37808,jl=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,lc=37818,cc=37819,uc=37820,hc=37821,fc=36492,dc=36494,pc=36495,mc=36283,gc=36284,Aa=36285,xc=36286,rd=3200,Ra=0,od=1,bi="",nn="srgb",Ca="srgb-linear",Pa="linear",Nt="srgb",qa=7680,ad=519,ld=512,cd=513,ud=514,mh=515,hd=516,fd=517,gh=518,xh=519,dd=35044,_0="300 es",wi=2e3,mo=2001;function pd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Da(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function md(){const i=Da("canvas");return i.style.display="block",i}const y0={};function M0(...i){const e="THREE."+i.shift();console.log(e,...i)}function vh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function rt(...i){i=vh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Dt(...i){i=vh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _a(...i){const e=i.join(" ");e in y0||(y0[e]=!0,rt(...i))}function gd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const xd={[zl]:zl,[Nl]:Bl,[Fl]:Fl,[ho]:Ol,[Ul]:Ul,[Bl]:Nl,[kl]:kl,[Ol]:ho};class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ya=Math.PI/180,La=180/Math.PI;function Xs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]).toLowerCase()}function Mt(i,e,t){return Math.max(e,Math.min(t,i))}function vd(i,e){return(i%e+e)%e}function $a(i,e,t){return(1-t)*i+t*e}function _d(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function yd(i,e){if(e.constructor===Float32Array)return i;const t=qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Md(i,e){if(e.constructor===Float32Array)return i;const t=qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}class ze{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],u=n[s+1],f=n[s+2],d=n[s+3],l=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];if(d!==_||c!==l||u!==p||f!==v){let h=c*l+u*p+f*v+d*_;h<0&&(l=-l,p=-p,v=-v,_=-_,h=-h);let m=1-a;if(h<.9995){const x=Math.acos(h),b=Math.sin(x);m=Math.sin(m*x)/b,a=Math.sin(a*x)/b,c=c*m+l*a,u=u*m+p*a,f=f*m+v*a,d=d*m+_*a}else{c=c*m+l*a,u=u*m+p*a,f=f*m+v*a,d=d*m+_*a;const x=1/Math.sqrt(c*c+u*u+f*f+d*d);c*=x,u*=x,f*=x,d*=x}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],u=n[s+2],f=n[s+3],d=r[o],l=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+f*d+c*p-u*l,e[t+1]=c*v+f*l+u*d-a*p,e[t+2]=u*v+f*p+a*l-c*d,e[t+3]=f*v-a*d-c*l-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(n/2),f=a(s/2),d=a(r/2),l=c(n/2),p=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=l*f*d+u*p*v,this._y=u*p*d-l*f*v,this._z=u*f*v+l*p*d,this._w=u*f*d-l*p*v;break;case"YXZ":this._x=l*f*d+u*p*v,this._y=u*p*d-l*f*v,this._z=u*f*v-l*p*d,this._w=u*f*d+l*p*v;break;case"ZXY":this._x=l*f*d-u*p*v,this._y=u*p*d+l*f*v,this._z=u*f*v+l*p*d,this._w=u*f*d-l*p*v;break;case"ZYX":this._x=l*f*d-u*p*v,this._y=u*p*d+l*f*v,this._z=u*f*v-l*p*d,this._w=u*f*d+l*p*v;break;case"YZX":this._x=l*f*d+u*p*v,this._y=u*p*d+l*f*v,this._z=u*f*v-l*p*d,this._w=u*f*d-l*p*v;break;case"XZY":this._x=l*f*d-u*p*v,this._y=u*p*d-l*f*v,this._z=u*f*v+l*p*d,this._w=u*f*d+l*p*v;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],u=t[2],f=t[6],d=t[10],l=n+a+d;if(l>0){const p=.5/Math.sqrt(l+1);this._w=.25/p,this._x=(f-c)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(f-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,u=t._z,f=t._w;return this._x=n*f+o*a+s*u-r*c,this._y=s*f+o*c+r*a-n*u,this._z=r*f+o*u+n*c-s*a,this._w=o*f-n*a-s*c-r*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const u=Math.acos(a),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(b0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(b0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*s-a*n),f=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*u+o*d-a*f,this.y=n+c*f+a*u-r*d,this.z=s+c*d+r*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Za.copy(this).projectOnVector(e),this.sub(Za)}reflect(e){return this.sub(Za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new k,b0=new Qt;class pt{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,o,a,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u)}set(e,t,n,s,r,o,a,c,u){const f=this.elements;return f[0]=e,f[1]=s,f[2]=a,f[3]=t,f[4]=r,f[5]=c,f[6]=n,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],u=n[1],f=n[4],d=n[7],l=n[2],p=n[5],v=n[8],_=s[0],h=s[3],m=s[6],x=s[1],b=s[4],M=s[7],C=s[2],A=s[5],g=s[8];return r[0]=o*_+a*x+c*C,r[3]=o*h+a*b+c*A,r[6]=o*m+a*M+c*g,r[1]=u*_+f*x+d*C,r[4]=u*h+f*b+d*A,r[7]=u*m+f*M+d*g,r[2]=l*_+p*x+v*C,r[5]=l*h+p*b+v*A,r[8]=l*m+p*M+v*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-n*r*f+n*a*c+s*r*u-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],d=f*o-a*u,l=a*c-f*r,p=u*r-o*c,v=t*d+n*l+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=d*_,e[1]=(s*u-f*n)*_,e[2]=(a*n-s*o)*_,e[3]=l*_,e[4]=(f*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*c-u*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*o+u*a)+o+e,-s*u,s*c,-s*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return _a("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return _a("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return _a("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new pt,S0=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w0=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bd(){const i={enabled:!0,workingColorSpace:Ca,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Nt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Nt&&(s.r=vr(s.r),s.g=vr(s.g),s.b=vr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?Pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ca]:{primaries:e,whitePoint:n,transfer:Pa,toXYZ:S0,fromXYZ:w0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:n,transfer:Nt,toXYZ:S0,fromXYZ:w0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const Tt=bd();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $s;class Sd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$s===void 0&&($s=Da("canvas")),$s.width=e.width,$s.height=e.height;const s=$s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=$s}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wd=0;class Yc{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let Ed=0;const Qa=new k;class Dn extends Ws{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,n=zi,s=zi,r=Cn,o=Ui,a=Pn,c=qn,u=Dn.DEFAULT_ANISOTROPY,f=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Xs(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qa).x}get height(){return this.source.getSize(Qa).y}get depth(){return this.source.getSize(Qa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){rt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yr:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yr:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=lh;Dn.DEFAULT_ANISOTROPY=1;class Bt{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,u=c[0],f=c[4],d=c[8],l=c[1],p=c[5],v=c[9],_=c[2],h=c[6],m=c[10];if(Math.abs(f-l)<.01&&Math.abs(d-_)<.01&&Math.abs(v-h)<.01){if(Math.abs(f+l)<.1&&Math.abs(d+_)<.1&&Math.abs(v+h)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,M=(p+1)/2,C=(m+1)/2,A=(f+l)/4,g=(d+_)/4,y=(v+h)/4;return b>M&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=g/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=y/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=g/r,s=y/r),this.set(n,s,r,t),this}let x=Math.sqrt((h-v)*(h-v)+(d-_)*(d-_)+(l-f)*(l-f));return Math.abs(x)<.001&&(x=1),this.x=(h-v)/x,this.y=(d-_)/x,this.z=(l-f)/x,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Td extends Ws{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Dn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Yc(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Td{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class _h extends Dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ad extends Dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ct{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,o,a,c,u,f,d,l,p,v,_,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,u,f,d,l,p,v,_,h)}set(e,t,n,s,r,o,a,c,u,f,d,l,p,v,_,h){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=u,m[6]=f,m[10]=d,m[14]=l,m[3]=p,m[7]=v,m[11]=_,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),o=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),u=Math.sin(s),f=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const l=o*f,p=o*d,v=a*f,_=a*d;t[0]=c*f,t[4]=-c*d,t[8]=u,t[1]=p+v*u,t[5]=l-_*u,t[9]=-a*c,t[2]=_-l*u,t[6]=v+p*u,t[10]=o*c}else if(e.order==="YXZ"){const l=c*f,p=c*d,v=u*f,_=u*d;t[0]=l+_*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=p*a-v,t[6]=_+l*a,t[10]=o*c}else if(e.order==="ZXY"){const l=c*f,p=c*d,v=u*f,_=u*d;t[0]=l-_*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*f,t[9]=_-l*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const l=o*f,p=o*d,v=a*f,_=a*d;t[0]=c*f,t[4]=v*u-p,t[8]=l*u+_,t[1]=c*d,t[5]=_*u+l,t[9]=p*u-v,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const l=o*c,p=o*u,v=a*c,_=a*u;t[0]=c*f,t[4]=_-l*d,t[8]=v*d+p,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=p*d+v,t[10]=l-_*d}else if(e.order==="XZY"){const l=o*c,p=o*u,v=a*c,_=a*u;t[0]=c*f,t[4]=-d,t[8]=u*f,t[1]=l*d+_,t[5]=o*f,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*f,t[10]=_*d+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rd,e,Cd)}lookAt(e,t,n){const s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),is.crossVectors(n,Kn),is.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),is.crossVectors(n,Kn)),is.normalize(),To.crossVectors(Kn,is),s[0]=is.x,s[4]=To.x,s[8]=Kn.x,s[1]=is.y,s[5]=To.y,s[9]=Kn.y,s[2]=is.z,s[6]=To.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],u=n[12],f=n[1],d=n[5],l=n[9],p=n[13],v=n[2],_=n[6],h=n[10],m=n[14],x=n[3],b=n[7],M=n[11],C=n[15],A=s[0],g=s[4],y=s[8],T=s[12],E=s[1],z=s[5],L=s[9],F=s[13],U=s[2],G=s[6],W=s[10],B=s[14],oe=s[3],q=s[7],te=s[11],se=s[15];return r[0]=o*A+a*E+c*U+u*oe,r[4]=o*g+a*z+c*G+u*q,r[8]=o*y+a*L+c*W+u*te,r[12]=o*T+a*F+c*B+u*se,r[1]=f*A+d*E+l*U+p*oe,r[5]=f*g+d*z+l*G+p*q,r[9]=f*y+d*L+l*W+p*te,r[13]=f*T+d*F+l*B+p*se,r[2]=v*A+_*E+h*U+m*oe,r[6]=v*g+_*z+h*G+m*q,r[10]=v*y+_*L+h*W+m*te,r[14]=v*T+_*F+h*B+m*se,r[3]=x*A+b*E+M*U+C*oe,r[7]=x*g+b*z+M*G+C*q,r[11]=x*y+b*L+M*W+C*te,r[15]=x*T+b*F+M*B+C*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],u=e[13],f=e[2],d=e[6],l=e[10],p=e[14],v=e[3],_=e[7],h=e[11],m=e[15],x=c*p-u*l,b=a*p-u*d,M=a*l-c*d,C=o*p-u*f,A=o*l-c*f,g=o*d-a*f;return t*(_*x-h*b+m*M)-n*(v*x-h*C+m*A)+s*(v*b-_*C+m*g)-r*(v*M-_*A+h*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],u=e[6],f=e[10];return t*(o*f-a*u)-n*(r*f-a*c)+s*(r*u-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],d=e[9],l=e[10],p=e[11],v=e[12],_=e[13],h=e[14],m=e[15],x=t*a-n*o,b=t*c-s*o,M=t*u-r*o,C=n*c-s*a,A=n*u-r*a,g=s*u-r*c,y=f*_-d*v,T=f*h-l*v,E=f*m-p*v,z=d*h-l*_,L=d*m-p*_,F=l*m-p*h,U=x*F-b*L+M*z+C*E-A*T+g*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/U;return e[0]=(a*F-c*L+u*z)*G,e[1]=(s*L-n*F-r*z)*G,e[2]=(_*g-h*A+m*C)*G,e[3]=(l*A-d*g-p*C)*G,e[4]=(c*E-o*F-u*T)*G,e[5]=(t*F-s*E+r*T)*G,e[6]=(h*M-v*g-m*b)*G,e[7]=(f*g-l*M+p*b)*G,e[8]=(o*L-a*E+u*y)*G,e[9]=(n*E-t*L-r*y)*G,e[10]=(v*A-_*M+m*x)*G,e[11]=(d*M-f*A-p*x)*G,e[12]=(a*T-o*z-c*y)*G,e[13]=(t*z-n*T+s*y)*G,e[14]=(_*b-v*C-h*x)*G,e[15]=(f*C-d*b+l*x)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,u=r*o,f=r*a;return this.set(u*o+n,u*a-s*c,u*c+s*a,0,u*a+s*c,f*a+n,f*c-s*o,0,u*c-s*a,f*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,u=r+r,f=o+o,d=a+a,l=r*u,p=r*f,v=r*d,_=o*f,h=o*d,m=a*d,x=c*u,b=c*f,M=c*d,C=n.x,A=n.y,g=n.z;return s[0]=(1-(_+m))*C,s[1]=(p+M)*C,s[2]=(v-b)*C,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(l+m))*A,s[6]=(h+x)*A,s[7]=0,s[8]=(v+b)*g,s[9]=(h-x)*g,s[10]=(1-(l+_))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Zs.set(s[0],s[1],s[2]).length();const a=Zs.set(s[4],s[5],s[6]).length(),c=Zs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),di.copy(this);const u=1/o,f=1/a,d=1/c;return di.elements[0]*=u,di.elements[1]*=u,di.elements[2]*=u,di.elements[4]*=f,di.elements[5]*=f,di.elements[6]*=f,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,t.setFromRotationMatrix(di),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=wi,c=!1){const u=this.elements,f=2*r/(t-e),d=2*r/(n-s),l=(t+e)/(t-e),p=(n+s)/(n-s);let v,_;if(c)v=r/(o-r),_=o*r/(o-r);else if(a===wi)v=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===mo)v=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=l,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=wi,c=!1){const u=this.elements,f=2/(t-e),d=2/(n-s),l=-(t+e)/(t-e),p=-(n+s)/(n-s);let v,_;if(c)v=1/(o-r),_=o/(o-r);else if(a===wi)v=-2/(o-r),_=-(o+r)/(o-r);else if(a===mo)v=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=l,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zs=new k,di=new ct,Rd=new k(0,0,0),Cd=new k(1,1,1),is=new k,To=new k,Kn=new k,E0=new ct,T0=new Qt;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],u=s[5],f=s[9],d=s[2],l=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(l,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(l,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(l,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return E0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return T0.setFromEuler(this),this.setFromQuaternion(T0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pd=0;const A0=new k,Ks=new Qt,Vi=new ct,Ao=new k,Ir=new k,Dd=new k,Ld=new Qt,R0=new k(1,0,0),C0=new k(0,1,0),P0=new k(0,0,1),D0={type:"added"},Id={type:"removed"},Js={type:"childadded",child:null},ja={type:"childremoved",child:null};class en extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new k,t=new Fn,n=new Qt,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new pt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(R0,e)}rotateY(e){return this.rotateOnAxis(C0,e)}rotateZ(e){return this.rotateOnAxis(P0,e)}translateOnAxis(e,t){return A0.copy(e).applyQuaternion(this.quaternion),this.position.add(A0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(R0,e)}translateY(e){return this.translateOnAxis(C0,e)}translateZ(e){return this.translateOnAxis(P0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ao.copy(e):Ao.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Ir,Ao,this.up):Vi.lookAt(Ao,Ir,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),Ks.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(D0),Js.child=e,this.dispatchEvent(Js),Js.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Id),ja.child=e,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(D0),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Dd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const d=c[u];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),l=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),l.length>0&&(n.skeletons=l),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}en.DEFAULT_UP=new k(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zt extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zd={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const h=t.getJointPose(_,n),m=this._getHandJoint(u,_);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],l=f.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&l>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&l<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function tl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Tt.workingColorSpace){if(e=vd(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tl(o,r,e+1/3),this.g=tl(o,r,e),this.b=tl(o,r,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=nn){function n(r){r!==void 0&&parseFloat(r)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:rt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const n=Mh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Tt.workingToColorSpace(Tn.copy(this),e),Math.round(Mt(Tn.r*255,0,255))*65536+Math.round(Mt(Tn.g*255,0,255))*256+Math.round(Mt(Tn.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Tn.copy(this),t);const n=Tn.r,s=Tn.g,r=Tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,u;const f=(a+o)/2;if(a===o)c=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=nn){Tt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,s=Tn.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Ro);const n=$a(ss.h,Ro.h,t),s=$a(ss.s,Ro.s,t),r=$a(ss.l,Ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Oe;Oe.NAMES=Mh;class $c{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new $c(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vc extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new k,Hi=new k,nl=new k,Wi=new k,Qs=new k,js=new k,L0=new k,il=new k,sl=new k,rl=new k,ol=new Bt,al=new Bt,ll=new Bt;class Si{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pi.subVectors(e,t),s.cross(pi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pi.subVectors(s,t),Hi.subVectors(n,t),nl.subVectors(e,t);const o=pi.dot(pi),a=pi.dot(Hi),c=pi.dot(nl),u=Hi.dot(Hi),f=Hi.dot(nl),d=o*u-a*a;if(d===0)return r.set(0,0,0),null;const l=1/d,p=(u*c-a*f)*l,v=(o*f-a*c)*l;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wi.x),c.addScaledVector(o,Wi.y),c.addScaledVector(a,Wi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ol.setScalar(0),al.setScalar(0),ll.setScalar(0),ol.fromBufferAttribute(e,t),al.fromBufferAttribute(e,n),ll.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ol,r.x),o.addScaledVector(al,r.y),o.addScaledVector(ll,r.z),o}static isFrontFacing(e,t,n,s){return pi.subVectors(n,t),Hi.subVectors(e,t),pi.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),pi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Qs.subVectors(s,n),js.subVectors(r,n),il.subVectors(e,n);const c=Qs.dot(il),u=js.dot(il);if(c<=0&&u<=0)return t.copy(n);sl.subVectors(e,s);const f=Qs.dot(sl),d=js.dot(sl);if(f>=0&&d<=f)return t.copy(s);const l=c*d-f*u;if(l<=0&&c>=0&&f<=0&&c-f>0)return o=c/(c-f),t.copy(n).addScaledVector(Qs,o);rl.subVectors(e,r);const p=Qs.dot(rl),v=js.dot(rl);if(v>=0&&p<=v)return t.copy(r);const _=p*u-c*v;if(_<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(n).addScaledVector(js,a);const h=f*v-p*d;if(h<=0&&d-f>=0&&p-v>=0)return L0.subVectors(r,s),a=(d-f)/(d-f+(p-v)),t.copy(s).addScaledVector(L0,a);const m=1/(h+_+l);return o=_*m,a=l*m,t.copy(n).addScaledVector(Qs,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _s{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mi):mi.fromBufferAttribute(r,o),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(e.matrixWorld),this.union(Co)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Po.subVectors(this.max,zr),er.subVectors(e.a,zr),tr.subVectors(e.b,zr),nr.subVectors(e.c,zr),rs.subVectors(tr,er),os.subVectors(nr,tr),As.subVectors(er,nr);let t=[0,-rs.z,rs.y,0,-os.z,os.y,0,-As.z,As.y,rs.z,0,-rs.x,os.z,0,-os.x,As.z,0,-As.x,-rs.y,rs.x,0,-os.y,os.x,0,-As.y,As.x,0];return!cl(t,er,tr,nr,Po)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,er,tr,nr,Po))?!1:(Do.crossVectors(rs,os),t=[Do.x,Do.y,Do.z],cl(t,er,tr,nr,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new k,new k,new k,new k,new k,new k,new k,new k],mi=new k,Co=new _s,er=new k,tr=new k,nr=new k,rs=new k,os=new k,As=new k,zr=new k,Po=new k,Do=new k,Rs=new k;function cl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rs.fromArray(i,r);const a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),c=e.dot(Rs),u=t.dot(Rs),f=n.dot(Rs);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>a)return!1}return!0}const on=new k,Lo=new ze;let Ud=0;class sn extends Ws{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ud++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dd,this.updateRanges=[],this.gpuType=ci,this.version=0,this._normalizationScale=e!==void 0?qc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):yd(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):Md(e,this.array)}}class bh extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sh extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Nd=new _s,Ur=new k,ul=new k;class Oi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(ul)),this.expandByPoint(Ur.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fd=0;const ei=new ct,hl=new en,ir=new k,Jn=new _s,Nr=new _s,mn=new k;class Ft extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pd(e)?Sh:bh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,n){return ei.makeTranslation(e,t,n),this.applyMatrix4(ei),this}scale(e,t,n){return ei.makeScale(e,t,n),this.applyMatrix4(ei),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ot(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(Jn.min,Nr.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,Nr.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(Nr.min),Jn.expandByPoint(Nr.max))}Jn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)mn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(mn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)mn.fromBufferAttribute(a,u),c&&(ir.fromBufferAttribute(e,u),mn.add(ir)),s=Math.max(s,n.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[],u=new Uint8Array(n.count);for(let T=0;T<n.count;T++)a[T]=new k,c[T]=new k;const f=new k,d=new k,l=new k,p=new ze,v=new ze,_=new ze,h=new k,m=new k;function x(T,E,z){u[T]=u[E]=u[z]=1,f.fromBufferAttribute(n,T),d.fromBufferAttribute(n,E),l.fromBufferAttribute(n,z),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,E),_.fromBufferAttribute(r,z),d.sub(f),l.sub(f),v.sub(p),_.sub(p);const L=1/(v.x*_.y-_.x*v.y);isFinite(L)&&(h.copy(d).multiplyScalar(_.y).addScaledVector(l,-v.y).multiplyScalar(L),m.copy(l).multiplyScalar(v.x).addScaledVector(d,-_.x).multiplyScalar(L),a[T].add(h),a[E].add(h),a[z].add(h),c[T].add(m),c[E].add(m),c[z].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,E=b.length;T<E;++T){const z=b[T],L=z.start,F=z.count;for(let U=L,G=L+F;U<G;U+=3)x(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new k,C=new k,A=new k,g=new k;function y(T){A.fromBufferAttribute(s,T),g.copy(A);const E=a[T];M.copy(E),M.sub(A.multiplyScalar(A.dot(E))).normalize(),C.crossVectors(g,E);const L=C.dot(c[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,L)}for(let T=0,E=n.count;T<E;++T)u[T]&&y(T);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,p=n.count;l<p;l++)n.setXYZ(l,0,0,0);const s=new k,r=new k,o=new k,a=new k,c=new k,u=new k,f=new k,d=new k;if(e)for(let l=0,p=e.count;l<p;l+=3){const v=e.getX(l+0),_=e.getX(l+1),h=e.getX(l+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,h),f.subVectors(o,r),d.subVectors(s,r),f.cross(d),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,h),a.add(f),c.add(f),u.add(f),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(h,u.x,u.y,u.z)}else for(let l=0,p=t.count;l<p;l+=3)s.fromBufferAttribute(t,l+0),r.fromBufferAttribute(t,l+1),o.fromBufferAttribute(t,l+2),f.subVectors(o,r),d.subVectors(s,r),f.cross(d),n.setXYZ(l+0,f.x,f.y,f.z),n.setXYZ(l+1,f.x,f.y,f.z),n.setXYZ(l+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(a,c){const u=a.array,f=a.itemSize,d=a.normalized,l=new u.constructor(c.length*f);let p=0,v=0;for(let _=0,h=c.length;_<h;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*f;for(let m=0;m<f;m++)l[v++]=u[p++]}return new sn(l,f,d)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],u=e(c,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let f=0,d=u.length;f<d;f++){const l=u[f],p=e(l,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let d=0,l=u.length;d<l;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(s[c]=f,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const u in s){const f=s[u];this.setAttribute(u,f.clone(t))}const r=e.morphAttributes;for(const u in r){const f=[],d=r[u];for(let l=0,p=d.length;l<p;l++)f.push(d[l].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fl=new k,Od=new k,Bd=new pt;class us{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=fl.subVectors(n,t).cross(Od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(fl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bd.getNormalMatrix(e),s=this.coplanarPoint(fl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let kd=0;class ys extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Xs(),this.name="",this.type="Material",this.blending=io,this.side=Bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=Fc,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){rt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){rt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Oe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new us().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ze().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qi=new k,dl=new k,Io=new k,zo=new k;class Na{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){dl.copy(e).add(t).multiplyScalar(.5),Io.copy(t).sub(e).normalize(),zo.copy(this.origin).sub(dl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Io),a=zo.dot(this.direction),c=-zo.dot(Io),u=zo.lengthSq(),f=Math.abs(1-o*o);let d,l,p,v;if(f>0)if(d=o*c-a,l=o*a-c,v=r*f,d>=0)if(l>=-v)if(l<=v){const _=1/f;d*=_,l*=_,p=d*(d+o*l+2*a)+l*(o*d+l+2*c)+u}else l=r,d=Math.max(0,-(o*l+a)),p=-d*d+l*(l+2*c)+u;else l=-r,d=Math.max(0,-(o*l+a)),p=-d*d+l*(l+2*c)+u;else l<=-v?(d=Math.max(0,-(-o*r+a)),l=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+l*(l+2*c)+u):l<=v?(d=0,l=Math.min(Math.max(-r,-c),r),p=l*(l+2*c)+u):(d=Math.max(0,-(o*r+a)),l=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+l*(l+2*c)+u);else l=o>0?-r:r,d=Math.max(0,-(o*l+a)),p=-d*d+l*(l+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(dl).addScaledVector(Io,l),p}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),s=qi.dot(qi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,l=this.origin;return u>=0?(n=(e.min.x-l.x)*u,s=(e.max.x-l.x)*u):(n=(e.max.x-l.x)*u,s=(e.min.x-l.x)*u),f>=0?(r=(e.min.y-l.y)*f,o=(e.max.y-l.y)*f):(r=(e.max.y-l.y)*f,o=(e.min.y-l.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-l.z)*d,c=(e.max.z-l.z)*d):(a=(e.max.z-l.z)*d,c=(e.min.z-l.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,s,r){const o=this.origin,a=this.direction,c=a.x,u=a.y,f=a.z,d=e.x-o.x,l=e.y-o.y,p=e.z-o.z,v=t.x-o.x,_=t.y-o.y,h=t.z-o.z,m=n.x-o.x,x=n.y-o.y,b=n.z-o.z,M=Math.abs(c),C=Math.abs(u),A=Math.abs(f);let g,y,T,E,z,L,F,U,G,W,B,oe;if(M>=C&&M>=A?(T=c,L=d,G=v,oe=m,c>=0?(g=u,y=f,E=l,z=p,F=_,U=h,W=x,B=b):(g=f,y=u,E=p,z=l,F=h,U=_,W=b,B=x)):C>=A?(T=u,L=l,G=_,oe=x,u>=0?(g=f,y=c,E=p,z=d,F=h,U=v,W=b,B=m):(g=c,y=f,E=d,z=p,F=v,U=h,W=m,B=b)):(T=f,L=p,G=h,oe=b,f>=0?(g=c,y=u,E=d,z=l,F=v,U=_,W=m,B=x):(g=u,y=c,E=l,z=d,F=_,U=v,W=x,B=m)),T===0)return null;const q=g/T,te=y/T,se=1/T,_e=E-q*L,K=z-te*L,Y=F-q*G,ie=U-te*G,ve=W-q*oe,Me=B-te*oe,j=ve*ie-Me*Y,Ee=_e*Me-K*ve,Ye=Y*K-ie*_e;if(s){if(j<0||Ee<0||Ye<0)return null}else if((j<0||Ee<0||Ye<0)&&(j>0||Ee>0||Ye>0))return null;const Fe=j+Ee+Ye;if(Fe===0)return null;const Xe=se*(j*L+Ee*G+Ye*oe);return(Fe>0?Xe<0:Xe>0)?null:this.at(Xe/Fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ai extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const I0=new ct,Cs=new Na,Uo=new Oi,z0=new k,No=new k,Fo=new k,Oo=new k,pl=new k,Bo=new k,U0=new k,ko=new k;class $e extends en{constructor(e=new Ft,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const f=a[c],d=r[c];f!==0&&(pl.fromBufferAttribute(d,e),o?Bo.addScaledVector(pl,f):Bo.addScaledVector(pl.sub(t),f))}t.add(Bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(r),Cs.copy(e.ray).recast(e.near),!(Uo.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Uo,z0)===null||Cs.origin.distanceToSquared(z0)>(e.far-e.near)**2))&&(I0.copy(r).invert(),Cs.copy(e.ray).applyMatrix4(I0),!(n.boundingBox!==null&&Cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,f=r.attributes.uv1,d=r.attributes.normal,l=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=l.length;v<_;v++){const h=l[v],m=o[h.materialIndex],x=Math.max(h.start,p.start),b=Math.min(a.count,Math.min(h.start+h.count,p.start+p.count));for(let M=x,C=b;M<C;M+=3){const A=a.getX(M),g=a.getX(M+1),y=a.getX(M+2);s=Go(this,m,e,n,u,f,d,A,g,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let h=v,m=_;h<m;h+=3){const x=a.getX(h),b=a.getX(h+1),M=a.getX(h+2);s=Go(this,o,e,n,u,f,d,x,b,M),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,_=l.length;v<_;v++){const h=l[v],m=o[h.materialIndex],x=Math.max(h.start,p.start),b=Math.min(c.count,Math.min(h.start+h.count,p.start+p.count));for(let M=x,C=b;M<C;M+=3){const A=M,g=M+1,y=M+2;s=Go(this,m,e,n,u,f,d,A,g,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=h.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let h=v,m=_;h<m;h+=3){const x=h,b=h+1,M=h+2;s=Go(this,o,e,n,u,f,d,x,b,M),s&&(s.faceIndex=Math.floor(h/3),t.push(s))}}}}function Gd(i,e,t,n,s,r,o,a){let c;if(e.side===bn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Bs,a),c===null)return null;ko.copy(a),ko.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(ko);return u<t.near||u>t.far?null:{distance:u,point:ko.clone(),object:i}}function Go(i,e,t,n,s,r,o,a,c,u){i.getVertexPosition(a,No),i.getVertexPosition(c,Fo),i.getVertexPosition(u,Oo);const f=Gd(i,e,t,n,No,Fo,Oo,U0);if(f){const d=new k;Si.getBarycoord(U0,No,Fo,Oo,d),s&&(f.uv=Si.getInterpolatedAttribute(s,a,c,u,d,new ze)),r&&(f.uv1=Si.getInterpolatedAttribute(r,a,c,u,d,new ze)),o&&(f.normal=Si.getInterpolatedAttribute(o,a,c,u,d,new k),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const l={a,b:c,c:u,normal:new k,materialIndex:0};Si.getNormal(No,Fo,Oo,l.normal),f.face=l,f.barycoord=d}return f}const Fr=new Bt,N0=new Bt,F0=new Bt,Vd=new Bt,O0=new ct,Vo=new k,ml=new Oi,B0=new ct,gl=new Na;class Hd extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=v0,this.bindMatrix=new ct,this.bindMatrixInverse=new ct,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _s),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vo),this.boundingBox.expandByPoint(Vo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Vo),this.boundingSphere.expandByPoint(Vo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ml.copy(this.boundingSphere),ml.applyMatrix4(s),e.ray.intersectsSphere(ml)!==!1&&(B0.copy(s).invert(),gl.copy(e.ray).applyMatrix4(B0),!(this.boundingBox!==null&&gl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,gl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===v0?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===id?this.bindMatrixInverse.copy(this.bindMatrix).invert():rt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;N0.fromBufferAttribute(s.attributes.skinIndex,e),F0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Fr.copy(t),t.set(0,0,0,0)):(Fr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Fr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=F0.getComponent(r);if(o!==0){const a=N0.getComponent(r);O0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Vd.copy(Fr).applyMatrix4(O0),o)}}return t.isVector4&&(t.w=Fr.w),t.applyMatrix4(this.bindMatrixInverse)}}class wh extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ms extends Dn{constructor(e=null,t=1,n=1,s,r,o,a,c,u=un,f=un,d,l){super(null,o,a,c,u,f,s,r,d,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const k0=new ct,Wd=new ct;class Zc{constructor(e=[],t=[]){this.uuid=Xs(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){rt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ct)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ct;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Wd;k0.multiplyMatrices(a,t[r]),k0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Zc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ms(t,e,e,Pn,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(rt("Skeleton: No bone found with UUID:",r),o=new wh),this.bones.push(o),this.boneInverses.push(new ct().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class G0 extends sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new ct,V0=new ct,Ho=[],H0=new _s,Xd=new ct,Or=new $e,Br=new Oi;class Eh extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new G0(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _s),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),H0.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(H0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,sr),Br.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(n),e.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,sr),V0.multiplyMatrices(n,sr),Or.matrixWorld=V0,Or.raycast(e,Ho);for(let o=0,a=Ho.length;o<a;o++){const c=Ho[o];c.instanceId=r,c.object=this,t.push(c)}Ho.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new G0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ms(new Float32Array(s*this.count),s,this.count,Vc,ci));const r=this.morphTexture.source.data.data;let o=0;for(let u=0;u<n.length;u++)o+=n[u];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ps=new Oi,qd=new ze(.5,.5),Wo=new k;class br{constructor(e=new us,t=new us,n=new us,s=new us,r=new us,o=new us){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],u=r[3],f=r[4],d=r[5],l=r[6],p=r[7],v=r[8],_=r[9],h=r[10],m=r[11],x=r[12],b=r[13],M=r[14],C=r[15];if(s[0].setComponents(u-o,p-f,m-v,C-x).normalize(),s[1].setComponents(u+o,p+f,m+v,C+x).normalize(),s[2].setComponents(u+a,p+d,m+_,C+b).normalize(),s[3].setComponents(u-a,p-d,m-_,C-b).normalize(),n)s[4].setComponents(c,l,h,M).normalize(),s[5].setComponents(u-c,p-l,m-h,C-M).normalize();else if(s[4].setComponents(u-c,p-l,m-h,C-M).normalize(),t===wi)s[5].setComponents(u+c,p+l,m+h,C+M).normalize();else if(t===mo)s[5].setComponents(c,l,h,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const t=qd.distanceTo(e.center);return Ps.radius=.7071067811865476+t,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wo.x=s.normal.x>0?e.max.x:e.min.x,Wo.y=s.normal.y>0?e.max.y:e.min.y,Wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const W0=new ct;class Kc{constructor(){this.coordinateSystem=wi,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){const r=t[s];W0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new br),n[s].setFromProjectionMatrix(W0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new br),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new Kc().copy(this)}}class Th extends ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ia=new k,za=new k,X0=new ct,kr=new Na,Xo=new Oi,xl=new k,q0=new k;class Yd extends en{constructor(e=new Ft,t=new Th){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ia.fromBufferAttribute(t,s-1),za.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ia.distanceTo(za);e.setAttribute("lineDistance",new ot(n,1))}else rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(s),Xo.radius+=r,e.ray.intersectsSphere(Xo)===!1)return;X0.copy(s).invert(),kr.copy(e.ray).applyMatrix4(X0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,f=n.index,l=n.attributes.position;if(f!==null){const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=p,h=v-1;_<h;_+=u){const m=f.getX(_),x=f.getX(_+1),b=qo(this,e,kr,c,m,x,_);b&&t.push(b)}if(this.isLineLoop){const _=f.getX(v-1),h=f.getX(p),m=qo(this,e,kr,c,_,h,v-1);m&&t.push(m)}}else{const p=Math.max(0,o.start),v=Math.min(l.count,o.start+o.count);for(let _=p,h=v-1;_<h;_+=u){const m=qo(this,e,kr,c,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){const _=qo(this,e,kr,c,v-1,p,v-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qo(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(Ia.fromBufferAttribute(a,s),za.fromBufferAttribute(a,r),t.distanceSqToSegment(Ia,za,xl,q0)>n)return;xl.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(xl);if(!(u<e.near||u>e.far))return{distance:u,point:q0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Y0=new k,$0=new k;class $d extends Yd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Y0.fromBufferAttribute(t,s),$0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Y0.distanceTo($0);e.setAttribute("lineDistance",new ot(n,1))}else rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ah extends ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Z0=new ct,_c=new Na,Yo=new Oi,$o=new k;class Jc extends en{constructor(e=new Ft,t=new Ah){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(s),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;Z0.copy(s).invert(),_c.copy(e.ray).applyMatrix4(Z0);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=n.index,d=n.attributes.position;if(u!==null){const l=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=l,_=p;v<_;v++){const h=u.getX(v);$o.fromBufferAttribute(d,h),K0($o,h,c,s,e,t,this)}}else{const l=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=l,_=p;v<_;v++)$o.fromBufferAttribute(d,v),K0($o,v,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function K0(i,e,t,n,s,r,o){const a=_c.distanceSqToPoint(i);if(a<t){const c=new k;_c.closestPointToPoint(i,c),c.applyMatrix4(n);const u=s.ray.origin.distanceTo(c);if(u<s.near||u>s.far)return;r.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rh extends Dn{constructor(e=[],t=_r,n,s,r,o,a,c,u,f){super(e,t,n,s,r,o,a,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fs extends Dn{constructor(e,t,n,s,r,o,a,c,u){super(e,t,n,s,r,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sr extends Dn{constructor(e,t,n=Fi,s,r,o,a=un,c=un,u,f=gs,d=1){if(f!==gs&&f!==ds)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const l={width:e,height:t,depth:d};super(l,s,r,o,a,c,f,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ch extends Sr{constructor(e,t=Fi,n=_r,s,r,o=un,a=un,c,u=gs){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,s,r,o,a,c,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ph extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class It extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],f=[],d=[];let l=0,p=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(d,2));function v(_,h,m,x,b,M,C,A,g,y,T){const E=M/g,z=C/y,L=M/2,F=C/2,U=A/2,G=g+1,W=y+1;let B=0,oe=0;const q=new k;for(let te=0;te<W;te++){const se=te*z-F;for(let _e=0;_e<G;_e++){const K=_e*E-L;q[_]=K*x,q[h]=se*b,q[m]=U,u.push(q.x,q.y,q.z),q[_]=0,q[h]=0,q[m]=A>0?1:-1,f.push(q.x,q.y,q.z),d.push(_e/g),d.push(1-te/y),B+=1}}for(let te=0;te<y;te++)for(let se=0;se<g;se++){const _e=l+se+G*te,K=l+se+G*(te+1),Y=l+(se+1)+G*(te+1),ie=l+(se+1)+G*te;c.push(_e,K,ie),c.push(K,Y,ie),oe+=6}a.addGroup(p,oe,T),p+=oe,l+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ar extends Ft{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],u=[],f=t/2,d=Math.PI/2*e,l=t,p=2*d+l,v=n*2+r,_=s+1,h=new k,m=new k;for(let x=0;x<=v;x++){let b=0,M=0,C=0,A=0;if(x<=n){const T=x/n,E=T*Math.PI/2;M=-f-e*Math.cos(E),C=e*Math.sin(E),A=-e*Math.cos(E),b=T*d}else if(x<=n+r){const T=(x-n)/r;M=-f+T*t,C=e,A=0,b=d+T*l}else{const T=(x-n-r)/n,E=T*Math.PI/2;M=f+e*Math.sin(E),C=e*Math.cos(E),A=e*Math.sin(E),b=d+l+T*d}const g=Math.max(0,Math.min(1,b/p));let y=0;x===0?y=.5/s:x===v&&(y=-.5/s);for(let T=0;T<=s;T++){const E=T/s,z=E*Math.PI*2,L=Math.sin(z),F=Math.cos(z);m.x=-C*F,m.y=M,m.z=C*L,a.push(m.x,m.y,m.z),h.set(-C*F,A,C*L),h.normalize(),c.push(h.x,h.y,h.z),u.push(E+y,g)}if(x>0){const T=(x-1)*_;for(let E=0;E<s;E++){const z=T+E,L=T+E+1,F=x*_+E,U=x*_+E+1;o.push(z,L,F),o.push(L,U,F)}}}this.setIndex(o),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Vt extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const u=this;s=Math.floor(s),r=Math.floor(r);const f=[],d=[],l=[],p=[];let v=0;const _=[],h=n/2;let m=0;x(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(p,2));function x(){const M=new k,C=new k;let A=0;const g=(t-e)/n;for(let y=0;y<=r;y++){const T=[],E=y/r,z=E*(t-e)+e;for(let L=0;L<=s;L++){const F=L/s,U=F*c+a,G=Math.sin(U),W=Math.cos(U);C.x=z*G,C.y=-E*n+h,C.z=z*W,d.push(C.x,C.y,C.z),M.set(G,g,W).normalize(),l.push(M.x,M.y,M.z),p.push(F,1-E),T.push(v++)}_.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){const E=_[T][y],z=_[T+1][y],L=_[T+1][y+1],F=_[T][y+1];(e>0||T!==0)&&(f.push(E,z,F),A+=3),(t>0||T!==r-1)&&(f.push(z,L,F),A+=3)}u.addGroup(m,A,0),m+=A}function b(M){const C=v,A=new ze,g=new k;let y=0;const T=M===!0?e:t,E=M===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,h*E,0),l.push(0,E,0),p.push(.5,.5),v++;const z=v;for(let L=0;L<=s;L++){const U=L/s*c+a,G=Math.cos(U),W=Math.sin(U);g.x=T*W,g.y=h*E,g.z=T*G,d.push(g.x,g.y,g.z),l.push(0,E,0),A.x=G*.5+.5,A.y=W*.5*E+.5,p.push(A.x,A.y),v++}for(let L=0;L<s;L++){const F=C+L,U=z+L;M===!0?f.push(U,U+1,F):f.push(U+1,U,F),y+=3}u.addGroup(m,y,M===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xs extends Vt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new xs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yo extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),u(n),f(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const b=new k,M=new k,C=new k;for(let A=0;A<t.length;A+=3)p(t[A+0],b),p(t[A+1],M),p(t[A+2],C),c(b,M,C,x)}function c(x,b,M,C){const A=C+1,g=[];for(let y=0;y<=A;y++){g[y]=[];const T=x.clone().lerp(M,y/A),E=b.clone().lerp(M,y/A),z=A-y;for(let L=0;L<=z;L++)L===0&&y===A?g[y][L]=T:g[y][L]=T.clone().lerp(E,L/z)}for(let y=0;y<A;y++)for(let T=0;T<2*(A-y)-1;T++){const E=Math.floor(T/2);T%2===0?(l(g[y][E+1]),l(g[y+1][E]),l(g[y][E])):(l(g[y][E+1]),l(g[y+1][E+1]),l(g[y+1][E]))}}function u(x){const b=new k;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(x),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function f(){const x=new k;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];const M=h(x)/2/Math.PI+.5,C=m(x)/Math.PI+.5;o.push(M,1-C)}v(),d()}function d(){for(let x=0;x<o.length;x+=6){const b=o[x+0],M=o[x+2],C=o[x+4],A=Math.max(b,M,C),g=Math.min(b,M,C);A>.9&&g<.1&&(b<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function l(x){r.push(x.x,x.y,x.z)}function p(x,b){const M=x*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function v(){const x=new k,b=new k,M=new k,C=new k,A=new ze,g=new ze,y=new ze;for(let T=0,E=0;T<r.length;T+=9,E+=6){x.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),M.set(r[T+6],r[T+7],r[T+8]),A.set(o[E+0],o[E+1]),g.set(o[E+2],o[E+3]),y.set(o[E+4],o[E+5]),C.copy(x).add(b).add(M).divideScalar(3);const z=h(C);_(A,E+0,x,z),_(g,E+2,b,z),_(y,E+4,M,z)}}function _(x,b,M,C){C<0&&x.x===1&&(o[b]=x.x-1),M.x===0&&M.z===0&&(o[b]=C/2/Math.PI+.5)}function h(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.vertices,e.indices,e.radius,e.detail)}}class Bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){rt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,u;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),u=n[s]-o,u<0)a=s+1;else if(u>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const f=n[s],l=n[s+1]-f,p=(o-f)/l;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ze:new k);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new k,s=[],r=[],o=[],a=new k,c=new ct;for(let p=0;p<=e;p++){const v=p/e;s[p]=this.getTangentAt(v,new k)}r[0]=new k,o[0]=new k;let u=Number.MAX_VALUE;const f=Math.abs(s[0].x),d=Math.abs(s[0].y),l=Math.abs(s[0].z);f<=u&&(u=f,n.set(1,0,0)),d<=u&&(u=d,n.set(0,1,0)),l<=u&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Mt(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,v))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(Mt(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let v=1;v<=e;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],p*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}}class Qc extends Bi{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ze){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),l=c-this.aX,p=u-this.aY;c=l*f-p*d+this.aX,u=l*d+p*f+this.aY}return n.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Zd extends Qc{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,u){s(o,a,u*(a-r),u*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,u,f,d){let l=(o-r)/u-(a-r)/(u+f)+(a-o)/f,p=(a-o)/f-(c-o)/(f+d)+(c-a)/d;l*=f,p*=f,s(o,a,l,p)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const J0=new k,Q0=new k,vl=new jc,_l=new jc,yl=new jc;class Gs extends Bi{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let u,f;this.closed||a>0?u=s[(a-1)%r]:(Q0.subVectors(s[0],s[1]).add(s[0]),u=Q0);const d=s[a%r],l=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(J0.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=J0),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(l),p),h=Math.pow(l.distanceToSquared(f),p);_<1e-4&&(_=1),v<1e-4&&(v=_),h<1e-4&&(h=_),vl.initNonuniformCatmullRom(u.x,d.x,l.x,f.x,v,_,h),_l.initNonuniformCatmullRom(u.y,d.y,l.y,f.y,v,_,h),yl.initNonuniformCatmullRom(u.z,d.z,l.z,f.z,v,_,h)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(u.x,d.x,l.x,f.x,this.tension),_l.initCatmullRom(u.y,d.y,l.y,f.y,this.tension),yl.initCatmullRom(u.z,d.z,l.z,f.z,this.tension));return n.set(vl.calc(c),_l.calc(c),yl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function j0(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Kd(i,e){const t=1-i;return t*t*e}function Jd(i,e){return 2*(1-i)*i*e}function Qd(i,e){return i*i*e}function so(i,e,t,n){return Kd(i,e)+Jd(i,t)+Qd(i,n)}function jd(i,e){const t=1-i;return t*t*t*e}function ep(i,e){const t=1-i;return 3*t*t*i*e}function tp(i,e){return 3*(1-i)*i*i*e}function np(i,e){return i*i*i*e}function ro(i,e,t,n,s){return jd(i,e)+ep(i,t)+tp(i,n)+np(i,s)}class Dh extends Bi{constructor(e=new ze,t=new ze,n=new ze,s=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ze){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ip extends Bi{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ro(e,s.x,r.x,o.x,a.x),ro(e,s.y,r.y,o.y,a.y),ro(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lh extends Bi{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sp extends Bi{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ih extends Bi{constructor(e=new ze,t=new ze,n=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ze){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zh extends Bi{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(so(e,s.x,r.x,o.x),so(e,s.y,r.y,o.y),so(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uh extends Bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],u=s[o],f=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(j0(a,c.x,u.x,f.x,d.x),j0(a,c.y,u.y,f.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ze().fromArray(s))}return this}}var Ua=Object.freeze({__proto__:null,ArcCurve:Zd,CatmullRomCurve3:Gs,CubicBezierCurve:Dh,CubicBezierCurve3:ip,EllipseCurve:Qc,LineCurve:Lh,LineCurve3:sp,QuadraticBezierCurve:Ih,QuadraticBezierCurve3:zh,SplineCurve:Uh});class rp extends Bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ua[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){const f=c[u];n&&n.equals(f)||(t.push(f),n=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ua[s.type]().fromJSON(s))}return this.cacheLengths=null,this}}class eu extends rp{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Lh(this.currentPoint.clone(),new ze(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Ih(this.currentPoint.clone(),new ze(e,t),new ze(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Dh(this.currentPoint.clone(),new ze(e,t),new ze(n,s),new ze(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Uh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const u=new Qc(e,t,n,s,r,o,a,c);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vs extends eu{constructor(e){super(e),this.uuid=Xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new eu().fromJSON(s))}return this}}function op(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Nh(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,u;if(n&&(r=hp(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let f=a,d=c;for(let l=t;l<s;l+=t){const p=i[l],v=i[l+1];p<a&&(a=p),v<c&&(c=v),p>f&&(f=p),v>d&&(d=v)}u=Math.max(f-a,d-c),u=u!==0?32767/u:0}return go(r,o,t,a,c,u,0),o}function Nh(i,e,t,n,s){let r;if(s===bp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=tu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=tu(o/n|0,i[o],i[o+1],r);return r&&wr(r,r.next)&&(vo(r),r=r.next),r}function Vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(wr(t,t.next)||jt(t.prev,t,t.next)===0)){if(vo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function go(i,e,t,n,s,r,o){if(!i)return;!o&&r&&gp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,u=i.next;if(r?lp(i,n,s,r):ap(i)){e.push(c.i,i.i,u.i),vo(i),i=u.next,a=u.next;continue}if(i=u,i===a){o?o===1?(i=cp(Vs(i),e),go(i,e,t,n,s,r,2)):o===2&&up(i,e,t,n,s,r):go(Vs(i),e,t,n,s,r,1);break}}}function ap(i){const e=i.prev,t=i,n=i.next;if(jt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,u=n.y,f=Math.min(s,r,o),d=Math.min(a,c,u),l=Math.max(s,r,o),p=Math.max(a,c,u);let v=n.next;for(;v!==e;){if(v.x>=f&&v.x<=l&&v.y>=d&&v.y<=p&&Jr(s,a,r,c,o,u,v.x,v.y)&&jt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function lp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(jt(s,r,o)>=0)return!1;const a=s.x,c=r.x,u=o.x,f=s.y,d=r.y,l=o.y,p=Math.min(a,c,u),v=Math.min(f,d,l),_=Math.max(a,c,u),h=Math.max(f,d,l),m=yc(p,v,e,t,n),x=yc(_,h,e,t,n);let b=i.prevZ,M=i.nextZ;for(;b&&b.z>=m&&M&&M.z<=x;){if(b.x>=p&&b.x<=_&&b.y>=v&&b.y<=h&&b!==s&&b!==o&&Jr(a,f,c,d,u,l,b.x,b.y)&&jt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=p&&M.x<=_&&M.y>=v&&M.y<=h&&M!==s&&M!==o&&Jr(a,f,c,d,u,l,M.x,M.y)&&jt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=m;){if(b.x>=p&&b.x<=_&&b.y>=v&&b.y<=h&&b!==s&&b!==o&&Jr(a,f,c,d,u,l,b.x,b.y)&&jt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=x;){if(M.x>=p&&M.x<=_&&M.y>=v&&M.y<=h&&M!==s&&M!==o&&Jr(a,f,c,d,u,l,M.x,M.y)&&jt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!wr(n,s)&&Oh(n,t,t.next,s)&&xo(n,s)&&xo(s,n)&&(e.push(n.i,t.i,s.i),vo(t),vo(t.next),t=i=s),t=t.next}while(t!==i);return Vs(t)}function up(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_p(o,a)){let c=Bh(o,a);o=Vs(o,o.next),c=Vs(c,c.next),go(o,e,t,n,s,r,0),go(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hp(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,u=Nh(i,a,c,n,!1);u===u.next&&(u.steiner=!0),s.push(vp(u))}s.sort(fp);for(let r=0;r<s.length;r++)t=dp(s[r],t);return t}function fp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function dp(i,e){const t=pp(i,e);if(!t)return e;const n=Bh(t,i);return Vs(n,n.next),Vs(t,t.next)}function pp(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(wr(i,t))return t;do{if(wr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,u=o.y;let f=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Fh(s<u?n:r,s,c,u,s<u?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);xo(t,i)&&(d<f||d===f&&(t.x>o.x||t.x===o.x&&mp(o,t)))&&(o=t,f=d)}t=t.next}while(t!==a);return o}function mp(i,e){return jt(i.prev,i,e.prev)<0&&jt(e.next,i,i.next)<0}function gp(i,e,t,n){let s=i;do s.z===0&&(s.z=yc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,xp(s)}function xp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function yc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function vp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Jr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Fh(i,e,t,n,s,r,o,a)}function _p(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yp(i,e)&&(xo(i,e)&&xo(e,i)&&Mp(i,e)&&(jt(i.prev,i,e.prev)||jt(i,e.prev,e))||wr(i,e)&&jt(i.prev,i,i.next)>0&&jt(e.prev,e,e.next)>0)}function jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function wr(i,e){return i.x===e.x&&i.y===e.y}function Oh(i,e,t,n){const s=Ko(jt(i,e,t)),r=Ko(jt(i,e,n)),o=Ko(jt(t,n,i)),a=Ko(jt(t,n,e));return!!(s!==r&&o!==a||s===0&&Zo(i,t,e)||r===0&&Zo(i,n,e)||o===0&&Zo(t,i,n)||a===0&&Zo(t,e,n))}function Zo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ko(i){return i>0?1:i<0?-1:0}function yp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Oh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function xo(i,e){return jt(i.prev,i,i.next)<0?jt(i,e,i.next)>=0&&jt(i,i.prev,e)>=0:jt(i,e,i.prev)<0||jt(i,i.next,e)<0}function Mp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Bh(i,e){const t=Mc(i.i,i.x,i.y),n=Mc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function tu(i,e,t,n){const s=Mc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Sp{static triangulate(e,t,n=2){return op(e,t,n)}}class pr{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return pr.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];nu(e),iu(n,e);let o=e.length;t.forEach(nu);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,iu(n,t[c]);const a=Sp.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function nu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function iu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Rr extends Ft{constructor(e=new vs([new ze(.5,.5),new ze(-.5,.5),new ze(-.5,-.5),new ze(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];o(u)}this.setAttribute("position",new ot(s,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function o(a){const c=[],u=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let l=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,h=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:wp;let b,M=!1,C,A,g,y;if(m){b=m.getSpacedPoints(f),M=!0,l=!1;const ye=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(f,ye),A=new k,g=new k,y=new k}l||(h=0,p=0,v=0,_=0);const T=a.extractPoints(u);let E=T.shape;const z=T.holes;if(!pr.isClockWise(E)){E=E.reverse();for(let ye=0,P=z.length;ye<P;ye++){const $=z[ye];pr.isClockWise($)&&(z[ye]=$.reverse())}}function F(ye){const $=10000000000000001e-36;let le=ye[0];for(let pe=1;pe<=ye.length;pe++){const be=pe%ye.length,me=ye[be],xe=me.x-le.x,Re=me.y-le.y,Ze=xe*xe+Re*Re,V=Math.max(Math.abs(me.x),Math.abs(me.y),Math.abs(le.x),Math.abs(le.y)),lt=$*V*V;if(Ze<=lt){ye.splice(be,1),pe--;continue}le=me}}F(E),z.forEach(F);const U=z.length,G=E;for(let ye=0;ye<U;ye++){const P=z[ye];E=E.concat(P)}function W(ye,P,$){return P||Dt("ExtrudeGeometry: vec does not exist"),ye.clone().addScaledVector(P,$)}const B=E.length;function oe(ye,P,$){let le,pe,be;const me=ye.x-P.x,xe=ye.y-P.y,Re=$.x-ye.x,Ze=$.y-ye.y,V=me*me+xe*xe,lt=me*Ze-xe*Re;if(Math.abs(lt)>Number.EPSILON){const Te=Math.sqrt(V),He=Math.sqrt(Re*Re+Ze*Ze),Se=P.x-xe/Te,ht=P.y+me/Te,D=$.x-Ze/He,R=$.y+Re/He,w=((D-Se)*Ze-(R-ht)*Re)/(me*Ze-xe*Re);le=Se+me*w-ye.x,pe=ht+xe*w-ye.y;const S=le*le+pe*pe;if(S<=2)return new ze(le,pe);be=Math.sqrt(S/2)}else{let Te=!1;me>Number.EPSILON?Re>Number.EPSILON&&(Te=!0):me<-Number.EPSILON?Re<-Number.EPSILON&&(Te=!0):Math.sign(xe)===Math.sign(Ze)&&(Te=!0),Te?(le=-xe,pe=me,be=Math.sqrt(V)):(le=me,pe=xe,be=Math.sqrt(V/2))}return new ze(le/be,pe/be)}const q=[];for(let ye=0,P=G.length,$=P-1,le=ye+1;ye<P;ye++,$++,le++)$===P&&($=0),le===P&&(le=0),q[ye]=oe(G[ye],G[$],G[le]);const te=[];let se,_e=q.concat();for(let ye=0,P=U;ye<P;ye++){const $=z[ye];se=[];for(let le=0,pe=$.length,be=pe-1,me=le+1;le<pe;le++,be++,me++)be===pe&&(be=0),me===pe&&(me=0),se[le]=oe($[le],$[be],$[me]);te.push(se),_e=_e.concat(se)}let K;if(h===0)K=pr.triangulateShape(G,z);else{const ye=[],P=[];for(let $=0;$<h;$++){const le=$/h,pe=p*Math.cos(le*Math.PI/2),be=v*Math.sin(le*Math.PI/2)+_;for(let me=0,xe=G.length;me<xe;me++){const Re=W(G[me],q[me],be);Ee(Re.x,Re.y,-pe),le===0&&ye.push(Re)}for(let me=0,xe=U;me<xe;me++){const Re=z[me];se=te[me];const Ze=[];for(let V=0,lt=Re.length;V<lt;V++){const Te=W(Re[V],se[V],be);Ee(Te.x,Te.y,-pe),le===0&&Ze.push(Te)}le===0&&P.push(Ze)}}K=pr.triangulateShape(ye,P)}const Y=K.length,ie=v+_;for(let ye=0;ye<B;ye++){const P=l?W(E[ye],_e[ye],ie):E[ye];M?(g.copy(C.normals[0]).multiplyScalar(P.x),A.copy(C.binormals[0]).multiplyScalar(P.y),y.copy(b[0]).add(g).add(A),Ee(y.x,y.y,y.z)):Ee(P.x,P.y,0)}for(let ye=1;ye<=f;ye++)for(let P=0;P<B;P++){const $=l?W(E[P],_e[P],ie):E[P];M?(g.copy(C.normals[ye]).multiplyScalar($.x),A.copy(C.binormals[ye]).multiplyScalar($.y),y.copy(b[ye]).add(g).add(A),Ee(y.x,y.y,y.z)):Ee($.x,$.y,d/f*ye)}for(let ye=h-1;ye>=0;ye--){const P=ye/h,$=p*Math.cos(P*Math.PI/2),le=v*Math.sin(P*Math.PI/2)+_;for(let pe=0,be=G.length;pe<be;pe++){const me=W(G[pe],q[pe],le);Ee(me.x,me.y,d+$)}for(let pe=0,be=z.length;pe<be;pe++){const me=z[pe];se=te[pe];for(let xe=0,Re=me.length;xe<Re;xe++){const Ze=W(me[xe],se[xe],le);M?Ee(Ze.x,Ze.y+b[f-1].y,b[f-1].x+$):Ee(Ze.x,Ze.y,d+$)}}}ve(),Me();function ve(){const ye=s.length/3;if(l){let P=0,$=B*P;for(let le=0;le<Y;le++){const pe=K[le];Ye(pe[2]+$,pe[1]+$,pe[0]+$)}P=f+h*2,$=B*P;for(let le=0;le<Y;le++){const pe=K[le];Ye(pe[0]+$,pe[1]+$,pe[2]+$)}}else{for(let P=0;P<Y;P++){const $=K[P];Ye($[2],$[1],$[0])}for(let P=0;P<Y;P++){const $=K[P];Ye($[0]+B*f,$[1]+B*f,$[2]+B*f)}}n.addGroup(ye,s.length/3-ye,0)}function Me(){const ye=s.length/3;let P=0;j(G,P),P+=G.length;for(let $=0,le=z.length;$<le;$++){const pe=z[$];j(pe,P),P+=pe.length}n.addGroup(ye,s.length/3-ye,1)}function j(ye,P){let $=ye.length;for(;--$>=0;){const le=$;let pe=$-1;pe<0&&(pe=ye.length-1);for(let be=0,me=f+h*2;be<me;be++){const xe=B*be,Re=B*(be+1),Ze=P+le+xe,V=P+pe+xe,lt=P+pe+Re,Te=P+le+Re;Fe(Ze,V,lt,Te)}}}function Ee(ye,P,$){c.push(ye),c.push(P),c.push($)}function Ye(ye,P,$){Xe(ye),Xe(P),Xe($);const le=s.length/3,pe=x.generateTopUV(n,s,le-3,le-2,le-1);at(pe[0]),at(pe[1]),at(pe[2])}function Fe(ye,P,$,le){Xe(ye),Xe(P),Xe(le),Xe(P),Xe($),Xe(le);const pe=s.length/3,be=x.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);at(be[0]),at(be[1]),at(be[3]),at(be[1]),at(be[2]),at(be[3])}function Xe(ye){s.push(c[ye*3+0]),s.push(c[ye*3+1]),s.push(c[ye*3+2])}function at(ye){r.push(ye.x),r.push(ye.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ep(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ua[s.type]().fromJSON(s)),new Rr(n,e.options)}}const wp={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],u=e[s*3],f=e[s*3+1];return[new ze(r,o),new ze(a,c),new ze(u,f)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],u=e[n*3],f=e[n*3+1],d=e[n*3+2],l=e[s*3],p=e[s*3+1],v=e[s*3+2],_=e[r*3],h=e[r*3+1],m=e[r*3+2];return Math.abs(a-f)<Math.abs(o-u)?[new ze(o,1-c),new ze(u,1-d),new ze(l,1-v),new ze(_,1-m)]:[new ze(a,1-c),new ze(f,1-d),new ze(p,1-v),new ze(h,1-m)]}};function Ep(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Fa extends yo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fa(e.radius,e.detail)}}class Oa extends Ft{constructor(e=[new ze(0,-.5),new ze(.5,0),new ze(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],u=[],f=1/t,d=new k,l=new ze,p=new k,v=new k,_=new k;let h=0,m=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:h=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,p.x=m*1,p.y=-h,p.z=m*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:_.normalize(),c.push(_.x,_.y,_.z);break;default:h=e[x+1].x-e[x].x,m=e[x+1].y-e[x].y,p.x=m*1,p.y=-h,p.z=m*0,v.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(v)}for(let x=0;x<=t;x++){const b=n+x*f*s,M=Math.sin(b),C=Math.cos(b);for(let A=0;A<=e.length-1;A++){d.x=e[A].x*M,d.y=e[A].y,d.z=e[A].x*C,o.push(d.x,d.y,d.z),l.x=x/t,l.y=A/(e.length-1),a.push(l.x,l.y);const g=c[3*A+0]*M,y=c[3*A+1],T=c[3*A+0]*C;u.push(g,y,T)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){const M=b+x*e.length,C=M,A=M+e.length,g=M+e.length+1,y=M+1;r.push(C,A,y),r.push(g,y,A)}this.setIndex(r),this.setAttribute("position",new ot(o,3)),this.setAttribute("uv",new ot(a,2)),this.setAttribute("normal",new ot(u,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.points,e.segments,e.phiStart,e.phiLength)}}class ms extends yo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ms(e.radius,e.detail)}}class es extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),u=a+1,f=c+1,d=e/a,l=t/c,p=[],v=[],_=[],h=[];for(let m=0;m<f;m++){const x=m*l-o;for(let b=0;b<u;b++){const M=b*d-r;v.push(M,-x,0),_.push(0,0,1),h.push(b/a),h.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<a;x++){const b=x+u*m,M=x+u*(m+1),C=x+1+u*(m+1),A=x+1+u*m;p.push(b,M,A),p.push(M,C,A)}this.setIndex(p),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.widthSegments,e.heightSegments)}}class jn extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let u=0;const f=[],d=new k,l=new k,p=[],v=[],_=[],h=[];for(let m=0;m<=n;m++){const x=[],b=m/n,M=o+b*a,C=e*Math.cos(M),A=Math.sqrt(e*e-C*C);let g=0;m===0&&o===0?g=.5/t:m===n&&c===Math.PI&&(g=-.5/t);for(let y=0;y<=t;y++){const T=y/t,E=s+T*r;d.x=-A*Math.cos(E),d.y=C,d.z=A*Math.sin(E),v.push(d.x,d.y,d.z),l.copy(d).normalize(),_.push(l.x,l.y,l.z),h.push(T+g,1-b),x.push(u++)}f.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){const b=f[m][x+1],M=f[m][x],C=f[m+1][x],A=f[m+1][x+1];(m!==0||o>0)&&p.push(b,M,A),(m!==n-1||c<Math.PI)&&p.push(M,C,A)}this.setIndex(p),this.setAttribute("position",new ot(v,3)),this.setAttribute("normal",new ot(_,3)),this.setAttribute("uv",new ot(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class e0 extends yo{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new e0(e.radius,e.detail)}}class Qi extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],u=[],f=[],d=[],l=new k,p=new k,v=new k;for(let _=0;_<=n;_++){const h=o+_/n*a;for(let m=0;m<=s;m++){const x=m/s*r;p.x=(e+t*Math.cos(h))*Math.cos(x),p.y=(e+t*Math.cos(h))*Math.sin(x),p.z=t*Math.sin(h),u.push(p.x,p.y,p.z),l.x=e*Math.cos(x),l.y=e*Math.sin(x),v.subVectors(p,l).normalize(),f.push(v.x,v.y,v.z),d.push(m/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let h=1;h<=s;h++){const m=(s+1)*_+h-1,x=(s+1)*(_-1)+h-1,b=(s+1)*(_-1)+h,M=(s+1)*_+h;c.push(m,x,M),c.push(x,b,M)}this.setIndex(c),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(f,3)),this.setAttribute("uv",new ot(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class Er extends Ft{constructor(e=new zh(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new k,c=new k,u=new ze;let f=new k;const d=[],l=[],p=[],v=[];_(),this.setIndex(v),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(p,2));function _(){for(let b=0;b<t;b++)h(b);h(r===!1?t:0),x(),m()}function h(b){f=e.getPointAt(b/t,f);const M=o.normals[b],C=o.binormals[b];for(let A=0;A<=s;A++){const g=A/s*Math.PI*2,y=Math.sin(g),T=-Math.cos(g);c.x=T*M.x+y*C.x,c.y=T*M.y+y*C.y,c.z=T*M.z+y*C.z,c.normalize(),l.push(c.x,c.y,c.z),a.x=f.x+n*c.x,a.y=f.y+n*c.y,a.z=f.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let b=1;b<=t;b++)for(let M=1;M<=s;M++){const C=(s+1)*(b-1)+(M-1),A=(s+1)*b+(M-1),g=(s+1)*b+M,y=(s+1)*(b-1)+M;v.push(C,A,y),v.push(A,g,y)}}function x(){for(let b=0;b<=t;b++)for(let M=0;M<=s;M++)u.x=b/t,u.y=M/s,p.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Er(new Ua[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Tr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(su(s))s.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(su(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Un(i){const e={};for(let t=0;t<i.length;t++){const n=Tr(i[t]);for(const s in n)e[s]=n[s]}return e}function su(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Ap={clone:Tr,merge:Un};var Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Oe().setHex(s.value);break;case"v2":this.uniforms[n].value=new ze().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Pp extends On{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ri extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dp extends ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ra,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Oc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lp extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ip extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class t0 extends en{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class zp extends t0{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ml=new ct,ru=new k,ou=new k;class Gh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=qn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Ml.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ml,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,u=s?s.y/r.y:0;e.coordinateSystem===mo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+u,0,0,.5,.5,0,0,0,1),t.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jo=new k,Qo=new Qt,Ci=new k;class Vh extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jo,Qo,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Qo,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jo,Qo,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Qo,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const as=new k,au=new ze,lu=new ze;class Wn extends Vh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(as.x,as.y).multiplyScalar(-e/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-e/as.z)}getViewSize(e,t){return this.getViewBounds(e,au,lu),t.subVectors(lu,au)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ya*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/u,s*=o.width/c,n*=o.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Up extends Gh{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=La*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Np extends t0{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Up}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Fp extends Gh{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0}}class n0 extends t0{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Fp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hh extends Vh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=-90,or=1;class bc extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wn(rr,or,e,t);s.layers=this.layers,this.add(s);const r=new Wn(rr,or,e,t);r.layers=this.layers,this.add(r);const o=new Wn(rr,or,e,t);o.layers=this.layers,this.add(o);const a=new Wn(rr,or,e,t);a.layers=this.layers,this.add(a);const c=new Wn(rr,or,e,t);c.layers=this.layers,this.add(c);const u=new Wn(rr,or,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const u of t)this.remove(u);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,u,f]=this.children,d=e.getRenderTarget(),l=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,l,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Op extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function cu(i,e,t,n){const s=Bp(n);switch(t){case dh:return i*e;case Vc:return i*e/s.components*s.byteLength;case Hc:return i*e/s.components*s.byteLength;case ks:return i*e*2/s.components*s.byteLength;case Wc:return i*e*2/s.components*s.byteLength;case ph:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case Xc:return i*e*4/s.components*s.byteLength;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Xl:return Math.max(i,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(i,8)*Math.max(e,8)/2;case ql:case Yl:case Zl:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $l:case Ta:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fc:case dc:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Aa:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bp(i){switch(i){case qn:case ch:return{byteLength:1,components:1};case po:case uh:case hi:return{byteLength:2,components:1};case kc:case Gc:return{byteLength:2,components:4};case Fi:case Bc:case ci:return{byteLength:4,components:1};case hh:case fh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);function Wh(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function kp(i){const e=new WeakMap;function t(a,c){const u=a.array,f=a.usage,d=u.byteLength,l=i.createBuffer();i.bindBuffer(c,l),i.bufferData(c,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=i.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=i.SHORT;else if(u instanceof Uint32Array)p=i.UNSIGNED_INT;else if(u instanceof Int32Array)p=i.INT;else if(u instanceof Int8Array)p=i.BYTE;else if(u instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:l,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,u){const f=c.array,d=c.updateRanges;if(i.bindBuffer(u,a),d.length===0)i.bufferSubData(u,0,f);else{d.sort((p,v)=>p.start-v.start);let l=0;for(let p=1;p<d.length;p++){const v=d[l],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++l,d[l]=_)}d.length=l+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];i.bufferSubData(u,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,a,c),u.version=a.version}}return{get:s,remove:r,update:o}}var Gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
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
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yp=`#ifdef USE_AOMAP
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
#endif`,$p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,em=`#ifdef USE_IRIDESCENCE
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
#endif`,tm=`#ifdef USE_BUMPMAP
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,um=`#define PI 3.141592653589793
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
} // validated`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
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
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Om=`uniform sampler2D dfgLUT;
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
}`,Bm=`
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Km=`#if defined( USE_POINTS_UV )
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
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
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
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
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
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cg=`#ifdef USE_NORMALMAP
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
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,dg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Eg=`float getShadowMask() {
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
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
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
#endif`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
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
}`,Gg=`uniform sampler2D t2D;
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
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform float backgroundBlurriness;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,Yg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Zg=`#define DISTANCE
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,jg=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#define LAMBERT
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
}`,i1=`#define LAMBERT
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
}`,s1=`#define MATCAP
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
}`,r1=`#define MATCAP
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
}`,o1=`#define NORMAL
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
}`,a1=`#define NORMAL
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
}`,l1=`#define PHONG
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
}`,c1=`#define PHONG
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
}`,u1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,f1=`#define TOON
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
}`,d1=`#define TOON
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
}`,p1=`uniform float size;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,x1=`uniform vec3 color;
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
}`,v1=`uniform float rotation;
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
}`,_1=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Gp,alphahash_pars_fragment:Vp,alphamap_fragment:Hp,alphamap_pars_fragment:Wp,alphatest_fragment:Xp,alphatest_pars_fragment:qp,aomap_fragment:Yp,aomap_pars_fragment:$p,batching_pars_vertex:Zp,batching_vertex:Kp,begin_vertex:Jp,beginnormal_vertex:Qp,bsdfs:jp,iridescence_fragment:em,bumpmap_pars_fragment:tm,clipping_planes_fragment:nm,clipping_planes_pars_fragment:im,clipping_planes_pars_vertex:sm,clipping_planes_vertex:rm,color_fragment:om,color_pars_fragment:am,color_pars_vertex:lm,color_vertex:cm,common:um,defaultnormal_vertex:hm,displacementmap_pars_vertex:fm,displacementmap_vertex:dm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:xm,envmap_fragment:vm,envmap_common_pars_fragment:_m,envmap_pars_fragment:ym,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Lm,envmap_vertex:bm,fog_vertex:Sm,fog_pars_vertex:wm,fog_fragment:Em,fog_pars_fragment:Tm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Dm,lights_toon_fragment:Im,lights_toon_pars_fragment:zm,lights_phong_fragment:Um,lights_phong_pars_fragment:Nm,lights_physical_fragment:Fm,lights_physical_pars_fragment:Om,lights_fragment_begin:Bm,lights_fragment_maps:km,lights_fragment_end:Gm,lightprobes_pars_fragment:Vm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:$m,map_particle_fragment:Zm,map_particle_pars_fragment:Km,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:Qm,morphinstance_vertex:jm,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:og,normal_pars_vertex:ag,normal_vertex:lg,normalmap_pars_fragment:cg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:dg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:xg,dithering_fragment:vg,dithering_pars_fragment:_g,roughnessmap_fragment:yg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:Sg,shadowmap_vertex:wg,shadowmask_pars_fragment:Eg,skinbase_vertex:Tg,skinning_pars_vertex:Ag,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:Pg,specularmap_pars_fragment:Dg,tonemapping_fragment:Lg,tonemapping_pars_fragment:Ig,transmission_fragment:zg,transmission_pars_fragment:Ug,uv_pars_fragment:Ng,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:Bg,background_vert:kg,background_frag:Gg,backgroundCube_vert:Vg,backgroundCube_frag:Hg,cube_vert:Wg,cube_frag:Xg,depth_vert:qg,depth_frag:Yg,distance_vert:$g,distance_frag:Zg,equirect_vert:Kg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:jg,meshbasic_vert:e1,meshbasic_frag:t1,meshlambert_vert:n1,meshlambert_frag:i1,meshmatcap_vert:s1,meshmatcap_frag:r1,meshnormal_vert:o1,meshnormal_frag:a1,meshphong_vert:l1,meshphong_frag:c1,meshphysical_vert:u1,meshphysical_frag:h1,meshtoon_vert:f1,meshtoon_frag:d1,points_vert:p1,points_frag:m1,shadow_vert:g1,shadow_frag:x1,sprite_vert:v1,sprite_frag:_1},We={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Di={basic:{uniforms:Un([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Un([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Un([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Un([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Un([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Oe(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Un([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Un([We.points,We.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Un([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Un([We.common,We.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Un([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Un([We.sprite,We.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Un([We.common,We.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Un([We.lights,We.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Di.physical={uniforms:Un([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const jo={r:0,b:0,g:0},y1=new ct,Xh=new pt;Xh.set(-1,0,0,0,1,0,0,0,1);function M1(i,e,t,n,s,r){const o=new Oe(0);let a=s===!0?0:1,c,u,f=null,d=0,l=null;function p(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const M=x.backgroundBlurriness>0;b=e.get(b,M)}return b}function v(x){let b=!1;const M=p(x);M===null?h(o,a):M&&M.isColor&&(h(M,1),b=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(x,b){const M=p(b);M&&M.isCubeTexture?(u===void 0&&(u=new $e(new It(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Tr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(y1.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Xh),u.material.toneMapped=Tt.getTransfer(M.colorSpace)!==Nt,(f!==M||d!==M.version||l!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,l=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new $e(new es(2,2),new On({name:"BackgroundMaterial",uniforms:Tr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Tt.getTransfer(M.colorSpace)!==Nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||l!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,l=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,b){x.getRGB(jo,kh(i)),t.buffers.color.setClear(jo.r,jo.g,jo.b,b,r)}function m(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),a=b,h(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,h(o,a)},render:v,addToRenderList:_,dispose:m}}function b1(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=l(null);let r=s,o=!1;function a(z,L,F,U,G){let W=!1;const B=d(z,U,F,L);r!==B&&(r=B,u(r.object)),W=p(z,U,F,G),W&&v(z,U,F,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(z,L,F,U),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function u(z){return i.bindVertexArray(z)}function f(z){return i.deleteVertexArray(z)}function d(z,L,F,U){const G=U.wireframe===!0;let W=n[L.id];W===void 0&&(W={},n[L.id]=W);const B=z.isInstancedMesh===!0?z.id:0;let oe=W[B];oe===void 0&&(oe={},W[B]=oe);let q=oe[F.id];q===void 0&&(q={},oe[F.id]=q);let te=q[G];return te===void 0&&(te=l(c()),q[G]=te),te}function l(z){const L=[],F=[],U=[];for(let G=0;G<t;G++)L[G]=0,F[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:U,object:z,attributes:{},index:null}}function p(z,L,F,U){const G=r.attributes,W=L.attributes;let B=0;const oe=F.getAttributes();for(const q in oe)if(oe[q].location>=0){const se=G[q];let _e=W[q];if(_e===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(_e=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(_e=z.instanceColor)),se===void 0||se.attribute!==_e||_e&&se.data!==_e.data)return!0;B++}return r.attributesNum!==B||r.index!==U}function v(z,L,F,U){const G={},W=L.attributes;let B=0;const oe=F.getAttributes();for(const q in oe)if(oe[q].location>=0){let se=W[q];se===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(se=z.instanceColor));const _e={};_e.attribute=se,se&&se.data&&(_e.data=se.data),G[q]=_e,B++}r.attributes=G,r.attributesNum=B,r.index=U}function _(){const z=r.newAttributes;for(let L=0,F=z.length;L<F;L++)z[L]=0}function h(z){m(z,0)}function m(z,L){const F=r.newAttributes,U=r.enabledAttributes,G=r.attributeDivisors;F[z]=1,U[z]===0&&(i.enableVertexAttribArray(z),U[z]=1),G[z]!==L&&(i.vertexAttribDivisor(z,L),G[z]=L)}function x(){const z=r.newAttributes,L=r.enabledAttributes;for(let F=0,U=L.length;F<U;F++)L[F]!==z[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function b(z,L,F,U,G,W,B){B===!0?i.vertexAttribIPointer(z,L,F,G,W):i.vertexAttribPointer(z,L,F,U,G,W)}function M(z,L,F,U){_();const G=U.attributes,W=F.getAttributes(),B=L.defaultAttributeValues;for(const oe in W){const q=W[oe];if(q.location>=0){let te=G[oe];if(te===void 0&&(oe==="instanceMatrix"&&z.instanceMatrix&&(te=z.instanceMatrix),oe==="instanceColor"&&z.instanceColor&&(te=z.instanceColor)),te!==void 0){const se=te.normalized,_e=te.itemSize,K=e.get(te);if(K===void 0)continue;const Y=K.buffer,ie=K.type,ve=K.bytesPerElement,Me=ie===i.INT||ie===i.UNSIGNED_INT||te.gpuType===Bc;if(te.isInterleavedBufferAttribute){const j=te.data,Ee=j.isInterleavedBuffer===!0?j.stride:j.itemSize,Ye=te.offset;if(j.isInstancedInterleavedBuffer||j.isInstancedBufferAttribute){for(let Fe=0;Fe<q.locationSize;Fe++)m(q.location+Fe,j.meshPerAttribute);z.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)h(q.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Fe=0;Fe<q.locationSize;Fe++)b(q.location+Fe,_e/q.locationSize,ie,se,Ee*ve,(Ye+_e/q.locationSize*Fe)*ve,Me)}else{if(te.isInstancedBufferAttribute){for(let j=0;j<q.locationSize;j++)m(q.location+j,te.meshPerAttribute);z.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let j=0;j<q.locationSize;j++)h(q.location+j);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let j=0;j<q.locationSize;j++)b(q.location+j,_e/q.locationSize,ie,se,_e*ve,_e/q.locationSize*j*ve,Me)}}else if(B!==void 0){const se=B[oe];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(q.location,se);break;case 3:i.vertexAttrib3fv(q.location,se);break;case 4:i.vertexAttrib4fv(q.location,se);break;default:i.vertexAttrib1fv(q.location,se)}}}}x()}function C(){T();for(const z in n){const L=n[z];for(const F in L){const U=L[F];for(const G in U){const W=U[G];for(const B in W)f(W[B].object),delete W[B];delete U[G]}}delete n[z]}}function A(z){if(n[z.id]===void 0)return;const L=n[z.id];for(const F in L){const U=L[F];for(const G in U){const W=U[G];for(const B in W)f(W[B].object),delete W[B];delete U[G]}}delete n[z.id]}function g(z){for(const L in n){const F=n[L];for(const U in F){const G=F[U];if(G[z.id]===void 0)continue;const W=G[z.id];for(const B in W)f(W[B].object),delete W[B];delete G[z.id]}}}function y(z){for(const L in n){const F=n[L],U=z.isInstancedMesh===!0?z.id:0,G=F[U];if(G!==void 0){for(const W in G){const B=G[W];for(const oe in B)f(B[oe].object),delete B[oe];delete G[W]}delete F[U],Object.keys(F).length===0&&delete n[L]}}}function T(){E(),o=!0,r!==s&&(r=s,u(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:g,initAttributes:_,enableAttribute:h,disableUnusedAttributes:x}}function S1(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let l=0;for(let p=0;p<f;p++)l+=u[p];t.update(l,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function w1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(g){return!(g!==Pn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(g){const y=g===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==qn&&g!==ci&&!y&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(rt("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),l=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&rt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:l,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:M,maxSamples:C,samples:A}}function E1(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new us,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,l){const p=d.length!==0||l||n!==0||s;return s=l,n=d.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,l){t=f(d,l,0)},this.setState=function(d,l,p){const v=d.clippingPlanes,_=d.clipIntersection,h=d.clipShadows,m=i.get(d);if(!s||v===null||v.length===0||r&&!h)r?f(null):u();else{const x=r?0:n,b=x*4;let M=m.clippingState||null;c.value=M,M=f(v,l,b,p);for(let C=0;C!==b;++C)M[C]=t[C];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,l,p,v){const _=d!==null?d.length:0;let h=null;if(_!==0){if(h=c.value,v!==!0||h===null){const m=p+_*4,x=l.matrixWorldInverse;a.getNormalMatrix(x),(h===null||h.length<m)&&(h=new Float32Array(m));for(let b=0,M=p;b!==_;++b,M+=4)o.copy(d[b]).applyMatrix4(x,a),o.normal.toArray(h,M),h[M+3]=o.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}class i0 extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:xr});r.uniforms.tEquirect.value=t;const o=new $e(s,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Cn),new bc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const uu=256,T1=3,A1=20,qh=256,Yh=16,R1=3,C1=new k,P1=new Oe;class _o{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new bc(1,10,null),this._boxMesh=new $e(new It(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=C1}=r,c=this._renderer;this._setSize(o);const u=this._allocateTarget(),f=this._getSourceTarget(!0);t>0&&(f.texture.mipmapsAutoUpdate=!1);const d=c.autoClear,l=c.autoClearColor,p=c.autoClearDepth,v=c.autoClearStencil,_=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(e.background=c.getClearColor(P1));const h=new bc(n,s,f);return h.position.copy(a),h.update(c,e),c.autoClear=d,c.autoClearColor=l,c.autoClearDepth=p,c.autoClearStencil=v,e.background=_,t>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(u,t)),this._applyPMREM(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(uu,_d(e))}_fromTexture(e,t){e.mapping===_r||e.mapping===fo?this._setSize(e.image.length===0?uu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=hu(e,!1,!1),n=Math.log2(e)-T1;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=hu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;const o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===_r||e.mapping===fo?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=fu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=D1(),this._integrationMaterial=L1());const t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Yh);for(let o=0;o<=n;o++){const a=_o.lodToRoughness(o,n);if(o>n-R1)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{const c=a>0?Math.log2(t)+.5*Math.log2(6/(qh*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=I1());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}}function hu(i,e,t){return new i0(i,{minFilter:Ui,generateMipmaps:e,type:hi,colorSpace:Ca,depthBuffer:t})}function Mo(i,e,t){return new On({name:i,uniforms:e,vertexShader:vt.cube_vert,fragmentShader:t,side:bn,blending:xr,depthTest:!1,depthWrite:!1})}function D1(){return Mo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qh}u

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
	`)}function L1(){return Mo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Yh}},`

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
	`)}function I1(){return Mo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${A1}
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
	`)}function fu(){return Mo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function du(){return Mo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function z1(i){let e=new WeakMap,t=new WeakMap,n=null;function s(l,p=!1){return l==null?null:p?o(l):r(l)}function r(l){if(l&&l.isTexture){const p=l.mapping;if(p===Ha||p===Wa)if(e.has(l)){const v=e.get(l).texture;return a(v,l.mapping)}else{const v=l.image;if(v&&v.height>0){const _=new i0(v.height);return _.fromEquirectangularTexture(i,l),e.set(l,_),l.addEventListener("dispose",u),a(_.texture,l.mapping)}else return null}}return l}function o(l){if(l&&l.isTexture&&l.isPMREMTexture!==!0){const p=l.mapping,v=p===Ha||p===Wa,_=p===_r||p===fo;if(v||_){let h=t.get(l);const m=h!==void 0?h.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==m)return n===null&&(n=new _o(i)),h=v?n.fromEquirectangular(l,h):n.fromCubemap(l,h),h.texture.pmremVersion=l.pmremVersion,t.set(l,h),h.texture;if(h!==void 0)return h.texture;{const x=l.image;return v&&x&&x.height>0||_&&x&&c(x)?(n===null&&(n=new _o(i)),h=v?n.fromEquirectangular(l):n.fromCubemap(l),h.texture.pmremVersion=l.pmremVersion,t.set(l,h),l.addEventListener("dispose",f),h.texture):null}}}return l}function a(l,p){return p===Ha?l.mapping=_r:p===Wa&&(l.mapping=fo),l}function c(l){let p=0;const v=6;for(let _=0;_<v;_++)l[_]!==void 0&&p++;return p===v}function u(l){const p=l.target;p.removeEventListener("dispose",u);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function f(l){const p=l.target;p.removeEventListener("dispose",f);const v=t.get(p);v!==void 0&&(t.delete(p),v.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function U1(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&_a("WebGLRenderer: "+n+" extension not supported."),s}}}function N1(i,e,t,n){const s={},r=new WeakMap,o=new FinalizationRegistry(v=>delete s[v]);function a(v){c(v.target)}function c(v){v.index!==null&&e.remove(v.index);for(const h in v.attributes)e.remove(v.attributes[h]);v.removeEventListener("dispose",a),delete s[v.id],o.unregister(v);const _=r.get(v);_&&(e.remove(_),r.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(v,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function f(v){const _=v.attributes;for(const h in _)e.update(_[h],i.ARRAY_BUFFER)}function d(v){const _=v.index,h=v.attributes.position;let m=0;if(h===void 0)return;const x=_!==null?_.array.length:h.array.length/3-1,b=h.count>=65535?Sh:bh,M=new b(Math.ceil(x/3)*6,1),C=M.array;if(_!==null){const g=_.array;m=_.version;for(let y=0,T=0;y<x;y+=3){const E=g[y+0],z=g[y+1],L=g[y+2];C[T++]=E,C[T++]=z,C[T++]=z,C[T++]=L,C[T++]=L,C[T++]=E}}else{m=h.version;for(let g=0,y=0;g<x;g+=3){const T=g+0,E=g+1,z=g+2;C[y++]=T,C[y++]=E,C[y++]=E,C[y++]=z,C[y++]=z,C[y++]=T}}M.version=m;const A=r.get(v);A&&e.remove(A),r.set(v,M)}function l(v){const _=r.get(v);if(_){const h=v.index;h!==null&&_.version<h.version&&d(v)}else d(v);return r.get(v)}function p(){for(const v in s){const _=s[v].deref();_!==void 0&&c(_)}}return{get:u,update:f,getWireframeAttribute:l,dispose:p}}function F1(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,l){i.drawElements(n,l,r,d*o),t.update(l,n,1)}function u(d,l,p){p!==0&&(i.drawElementsInstanced(n,l,r,d*o,p),t.update(l,n,p))}function f(d,l,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,r,d,0,p);let _=0;for(let h=0;h<p;h++)_+=l[h];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function O1(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Dt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function B1(i,e,t){const n=new WeakMap,s=new Bt;function r(o,a,c){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let l=n.get(a);if(l===void 0||l.count!==d){let E=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;l!==void 0&&l.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;v===!0&&(M=1),_===!0&&(M=2),h===!0&&(M=3);let C=a.attributes.position.count*M,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const g=new Float32Array(C*A*4*d),y=new _h(g,C,A,d);y.type=ci,y.needsUpdate=!0;const T=M*4;for(let z=0;z<d;z++){const L=m[z],F=x[z],U=b[z],G=C*A*4*z;for(let W=0;W<L.count;W++){const B=W*T;v===!0&&(s.fromBufferAttribute(L,W),g[G+B+0]=s.x,g[G+B+1]=s.y,g[G+B+2]=s.z,g[G+B+3]=0),_===!0&&(s.fromBufferAttribute(F,W),g[G+B+4]=s.x,g[G+B+5]=s.y,g[G+B+6]=s.z,g[G+B+7]=0),h===!0&&(s.fromBufferAttribute(U,W),g[G+B+8]=s.x,g[G+B+9]=s.y,g[G+B+10]=s.z,g[G+B+11]=U.itemSize===4?s.w:1)}}l={count:d,texture:y,size:new ze(C,A)},n.set(a,l),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let h=0;h<u.length;h++)v+=u[h];const _=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",l.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",l.size)}return{update:r}}function k1(i,e,t,n,s){let r=new WeakMap;function o(u){const f=s.render.frame,d=u.geometry,l=e.get(u,d);if(r.get(l)!==f&&(e.update(l),r.set(l,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const p=u.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return l}function a(){r=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:a}}const G1={[th]:"LINEAR_TONE_MAPPING",[nh]:"REINHARD_TONE_MAPPING",[ih]:"CINEON_TONE_MAPPING",[sh]:"ACES_FILMIC_TONE_MAPPING",[oh]:"AGX_TONE_MAPPING",[ah]:"NEUTRAL_TONE_MAPPING",[rh]:"CUSTOM_TONE_MAPPING"};function V1(i,e,t,n,s,r){const o=new Zn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null,u=null;const f=new Ft;f.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ot([0,2,0,0,2,0],2));const d=new Pp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new $e(f,d),p=new Hh(-1,1,1,-1,0,1);let v=null,_=null,h=!1,m,x=null,b=[],M=!1;this.setSize=function(C,A){o.setSize(C,A),a!==null&&a.setSize(C,A),c!==null&&c.setSize(C,A);for(let g=0;g<b.length;g++){const y=b[g];y.setSize&&y.setSize(C,A)}},this.setEffects=function(C){b=C,M=b.length>0&&b[0].isRenderPass===!0;const A=o.width,g=o.height;b.length>0&&a===null&&(a=new Zn(A,g,{type:hi,depthBuffer:!1,stencilBuffer:!1}),c=new Zn(A,g,{type:hi,depthBuffer:!1,stencilBuffer:!1}));const y=s===!0&&b.some(T=>T.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&u===null&&(u=new Sr(A,g),r===!0&&(u.format=ds,u.type=Mr)),o.dispose(),o.depthTexture=y?u:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let T=0;T<b.length;T++){const E=b[T];E.setSize&&E.setSize(A,g),y&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(u)}},this.begin=function(C,A){if(h||C.toneMapping===Ni&&b.length===0)return!1;if(x=A,A!==null){const g=A.width,y=A.height;(o.width!==g||o.height!==y)&&this.setSize(g,y)}return M===!1&&C.setRenderTarget(o),m=C.toneMapping,C.toneMapping=Ni,!0},this.hasRenderPass=function(){return M},this.end=function(C,A){C.toneMapping=m,h=!0;let g=o,y=a;for(let T=0;T<b.length;T++){const E=b[T];E.enabled!==!1&&(E.render(C,y,g,A),E.needsSwap!==!1&&(g=y,y=y===a?c:a))}if(v!==C.outputColorSpace||_!==C.toneMapping){v=C.outputColorSpace,_=C.toneMapping,d.defines={},Tt.getTransfer(v)===Nt&&(d.defines.SRGB_TRANSFER="");const T=G1[_];T&&(d.defines[T]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(x),C.render(l,p),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),f.dispose(),d.dispose()}}const $h=new Dn,Zh=new Sr(1,1),Kh=new Ch(1),Jh=new _h,Qh=new Ad,jh=new Rh,pu=[],mu=[],gu=new Float32Array(16),xu=new Float32Array(9),vu=new Float32Array(4);function Cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ba(i,e){let t=mu[e];t===void 0&&(t=new Int32Array(e),mu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function H1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function W1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function X1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function Y1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),fn(t,n)}}function $1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),fn(t,n)}}function Z1(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;gu.set(n),i.uniformMatrix4fv(this.addr,!1,gu),fn(t,n)}}function K1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function Q1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function j1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function ex(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function ix(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function ka(i){return i.version===0&&(i.compareFunction=xh,i.needsUpdate=!0),i}function sx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ka(Zh):r=$h,t.setTexture2D(e||r,s)}function rx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Qh,s)}function ox(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ka(Kh):r=jh,t.setTextureCube(e||r,s)}function ax(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Jh,s)}function lx(i){switch(i){case 5126:return H1;case 35664:return W1;case 35665:return X1;case 35666:return q1;case 35674:return Y1;case 35675:return $1;case 35676:return Z1;case 5124:case 35670:return K1;case 35667:case 35671:return J1;case 35668:case 35672:return Q1;case 35669:case 35673:return j1;case 5125:return ex;case 36294:return tx;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(i,e){i.uniform1fv(this.addr,e)}function ux(i,e){const t=Cr(e,this.size,2);i.uniform2fv(this.addr,t)}function hx(i,e){const t=Cr(e,this.size,3);i.uniform3fv(this.addr,t)}function fx(i,e){const t=Cr(e,this.size,4);i.uniform4fv(this.addr,t)}function dx(i,e){const t=Cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function px(i,e){const t=Cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function mx(i,e){const t=Cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function gx(i,e){i.uniform1iv(this.addr,e)}function xx(i,e){i.uniform2iv(this.addr,e)}function vx(i,e){i.uniform3iv(this.addr,e)}function _x(i,e){i.uniform4iv(this.addr,e)}function yx(i,e){i.uniform1uiv(this.addr,e)}function Mx(i,e){i.uniform2uiv(this.addr,e)}function bx(i,e){i.uniform3uiv(this.addr,e)}function Sx(i,e){i.uniform4uiv(this.addr,e)}function wx(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ka(Zh):o=$h;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Ex(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Qh,r[o])}function Tx(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ka(Kh):o=jh;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Ax(i,e,t){const n=this.cache,s=e.length,r=Ba(t,s);hn(n,r)||(i.uniform1iv(this.addr,r),fn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Jh,r[o])}function Rx(i){switch(i){case 5126:return cx;case 35664:return ux;case 35665:return hx;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return xx;case 35668:case 35672:return vx;case 35669:case 35673:return _x;case 5125:return yx;case 36294:return Mx;case 36295:return bx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}class Cx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lx(t.type)}}class Px{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rx(t.type)}}class Dx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function _u(i,e){i.seq.push(e),i.map[e.id]=e}function Lx(i,e,t){const n=i.name,s=n.length;for(bl.lastIndex=0;;){const r=bl.exec(n),o=bl.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===s){_u(t,u===void 0?new Cx(a,i,e):new Px(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Dx(a),_u(t,d)),t=d}}}class ya{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Lx(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function yu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ix=37297;let zx=0;function Ux(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Mu=new pt;function Nx(i){Tt._getMatrix(Mu,Tt.workingColorSpace,i);const e=`mat3( ${Mu.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(i)){case Pa:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ux(i.getShaderSource(e),a)}else return r}function Fx(i,e){const t=Nx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ox={[th]:"Linear",[nh]:"Reinhard",[ih]:"Cineon",[sh]:"ACESFilmic",[oh]:"AgX",[ah]:"Neutral",[rh]:"Custom"};function Bx(i,e){const t=Ox[e];return t===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new k;function kx(){Tt.getLuminanceCoefficients(ea);const i=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function Vx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qr(i){return i!==""}function Su(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(i){return i.replace(Wx,Xx)}function Xx(i,e){const t=vt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Sc(t)}const qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(qx,Yx)}function Yx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const $x={[no]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function Zx(i){return $x[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kx={[fo]:"ENVMAP_MODE_REFRACTION"};function Jx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qx={[Oc]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function jx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qx[i.combine]||"ENVMAP_BLENDING_NONE"}function ev(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Zx(t),u=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=Jx(t),d=jx(t),l=Gx(t),p=Vx(r),v=s.createProgram();let _,h,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qr).join(`
`),_.length>0&&(_+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qr).join(`
`),h.length>0&&(h+=`
`)):(_=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),h=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?vt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Bx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,Fx("linearToOutputTexel",t.outputColorSpace),kx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Sc(o),o=Su(o,t),o=wu(o,t),a=Sc(a),a=Su(a,t),a=wu(a,t),o=Eu(o),a=Eu(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,h=["#define varying in",t.glslVersion===_0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=m+_+o,b=m+h+a,M=yu(s,s.VERTEX_SHADER,x),C=yu(s,s.FRAGMENT_SHADER,b);s.attachShader(v,M),s.attachShader(v,C),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(E){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v)||"",L=s.getShaderInfoLog(M)||"",F=s.getShaderInfoLog(C)||"",U=z.trim(),G=L.trim(),W=F.trim();let B=!0,oe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,M,C);else{const q=bu(s,M,"vertex"),te=bu(s,C,"fragment");Dt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+U+`
`+q+`
`+te)}else U!==""?rt("WebGLProgram: Program Info Log:",U):(G===""||W==="")&&(oe=!1);oe&&(E.diagnostics={runnable:B,programLog:U,vertexShader:{log:G,prefix:_},fragmentShader:{log:W,prefix:h}})}s.deleteShader(M),s.deleteShader(C),g=new ya(s,v),y=Hx(s,v)}let g;this.getUniforms=function(){return g===void 0&&A(this),g};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,Ix)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=C,this}let tv=0;class nv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new iv(e),t.set(e,n)),n}}class iv{constructor(e){this.id=tv++,this.code=e,this.usedTimes=0}}function sv(i){return i===ks||i===Ta||i===Aa}function rv(i,e,t,n,s,r){const o=new yh,a=new nv,c=new Set,u=[],f=new Map,d=n.logarithmicDepthBuffer,l={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function v(g,y,T,E,z,L){const F=E.fog,U=z.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?E.environment:null,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,B=e.get(g.envMap||G,W),oe=l[g.type];let q=n.precision;g.precision!==null&&(q=n.getMaxPrecision(g.precision),q!==g.precision&&rt("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));const te=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,se=te!==void 0?te.length:0;let _e=0;U.morphAttributes.position!==void 0&&(_e=1),U.morphAttributes.normal!==void 0&&(_e=2),U.morphAttributes.color!==void 0&&(_e=3);let K,Y,ie,ve;if(oe){const Ve=Di[oe];K=Ve.vertexShader,Y=Ve.fragmentShader}else{K=g.vertexShader,Y=g.fragmentShader;const Ve=a.getVertexShaderStage(g),Pt=a.getFragmentShaderStage(g);a.update(g,Ve,Pt),ie=Ve.id,ve=Pt.id}const Me=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),Ee=z.isInstancedMesh===!0,Ye=z.isBatchedMesh===!0,Fe=!!g.map,Xe=!!g.matcap,at=!!B,ye=at&&B.isPMREMTexture===!0,P=!!g.aoMap,$=!!g.lightMap,le=!!g.bumpMap&&g.wireframe===!1,pe=!!g.normalMap,be=!!g.displacementMap,me=!!g.emissiveMap,xe=!!g.metalnessMap,Re=!!g.roughnessMap,Ze=g.anisotropy>0,V=g.clearcoat>0,lt=g.diffuseRoughness>0,Te=g.dispersion>0,He=g.retroreflectivity>0,Se=g.iridescence>0,ht=g.sheen>0,D=g.transmission>0,R=Ze&&!!g.anisotropyMap,w=V&&!!g.clearcoatMap,S=V&&!!g.clearcoatNormalMap,N=V&&!!g.clearcoatRoughnessMap,ee=lt&&!!g.diffuseRoughnessMap,H=Se&&!!g.iridescenceMap,J=Se&&!!g.iridescenceThicknessMap,he=ht&&!!g.sheenColorMap,Z=ht&&!!g.sheenRoughnessMap,Q=!!g.specularMap,we=!!g.specularColorMap,O=!!g.specularIntensityMap,fe=D&&!!g.transmissionMap,ge=D&&!!g.thicknessMap,Ue=!!g.gradientMap,Ie=!!g.alphaMap,Ne=g.alphaTest>0,tt=!!g.alphaHash,ut=!!g.extensions;let Le=Ni;g.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Le=i.toneMapping);const et=ye?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,ft={shaderID:oe,shaderType:g.type,shaderName:g.name,vertexShader:K,fragmentShader:Y,defines:g.defines,customVertexShaderID:ie,customFragmentShaderID:ve,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:Ye,batchingColor:Ye&&z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&z.instanceColor!==null,instancingMorph:Ee&&z.morphTexture!==null,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Fe,matcap:Xe,envMap:at,envMapMode:at&&B.mapping,envMapPMREM:ye,envMapMaxLod:ye?et.length-1:null,envMapSize:ye?et[0].width:null,aoMap:P,lightMap:$,bumpMap:le,normalMap:pe,displacementMap:be,emissiveMap:me,normalMapObjectSpace:pe&&g.normalMapType===od,normalMapTangentSpace:pe&&g.normalMapType===Ra,packedNormalMap:pe&&g.normalMapType===Ra&&sv(g.normalMap.format),metalnessMap:xe,roughnessMap:Re,anisotropy:Ze,anisotropyMap:R,clearcoat:V,clearcoatMap:w,clearcoatNormalMap:S,clearcoatRoughnessMap:N,diffuseRoughness:lt,diffuseRoughnessMap:ee,dispersion:Te,retroreflection:He,iridescence:Se,iridescenceMap:H,iridescenceThicknessMap:J,sheen:ht,sheenColorMap:he,sheenRoughnessMap:Z,specularMap:Q,specularColorMap:we,specularIntensityMap:O,transmission:D,transmissionMap:fe,thicknessMap:ge,gradientMap:Ue,opaque:g.transparent===!1&&g.blending===io&&g.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Ne,alphaHash:tt,combine:g.combine,mapUv:Fe&&p(g.map.channel),aoMapUv:P&&p(g.aoMap.channel),lightMapUv:$&&p(g.lightMap.channel),bumpMapUv:le&&p(g.bumpMap.channel),normalMapUv:pe&&p(g.normalMap.channel),displacementMapUv:be&&p(g.displacementMap.channel),emissiveMapUv:me&&p(g.emissiveMap.channel),metalnessMapUv:xe&&p(g.metalnessMap.channel),roughnessMapUv:Re&&p(g.roughnessMap.channel),anisotropyMapUv:R&&p(g.anisotropyMap.channel),clearcoatMapUv:w&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:S&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:N&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:H&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:J&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:Z&&p(g.sheenRoughnessMap.channel),specularMapUv:Q&&p(g.specularMap.channel),specularColorMapUv:we&&p(g.specularColorMap.channel),specularIntensityMapUv:O&&p(g.specularIntensityMap.channel),transmissionMapUv:fe&&p(g.transmissionMap.channel),thicknessMapUv:ge&&p(g.thicknessMap.channel),alphaMapUv:Ie&&p(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(pe||Ze),vertexNormals:!!U.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(Fe||Ie),fog:!!F,useFog:g.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||U.attributes.normal===void 0&&pe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:_e,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:L.filter(Ve=>Ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Fe&&g.map.isVideoTexture===!0&&Tt.getTransfer(g.map.colorSpace)===Nt,decodeVideoTextureEmissive:me&&g.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(g.emissiveMap.colorSpace)===Nt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Mi,flipSided:g.side===bn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ut&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&g.extensions.multiDraw===!0||Ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function _(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const T in g.defines)y.push(T),y.push(g.defines[T]);return g.isRawShaderMaterial===!1&&(h(y,g),m(y,g),y.push(i.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function h(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapPMREM),g.push(y.envMapMaxLod),g.push(y.envMapSize),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.diffuseRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.numSunLights),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numSunLightShadows),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.numLightProbeGrids),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function m(g,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function x(g){const y=l[g.type];let T;if(y){const E=Di[y];T=Ap.clone(E.uniforms)}else T=g.uniforms;return T}function b(g,y){let T=f.get(y);return T!==void 0?++T.usedTimes:(T=new ev(i,y,g,s),u.push(T),f.set(y,T)),T}function M(g){if(--g.usedTimes===0){const y=u.indexOf(g);u[y]=u[u.length-1],u.pop(),f.delete(g.cacheKey),g.destroy()}}function C(g){a.remove(g)}function A(){a.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:x,acquireProgram:b,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:A}}function ov(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function av(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Au(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(l){let p=0;return l.isInstancedMesh&&(p+=2),l.isSkinnedMesh&&(p+=1),p}function a(l,p,v,_,h,m){let x=i[e];return x===void 0?(x={id:l.id,object:l,geometry:p,material:v,materialVariant:o(l),groupOrder:_,renderOrder:l.renderOrder,z:h,group:m},i[e]=x):(x.id=l.id,x.object=l,x.geometry=p,x.material=v,x.materialVariant=o(l),x.groupOrder=_,x.renderOrder=l.renderOrder,x.z=h,x.group=m),e++,x}function c(l,p,v,_,h,m,x){x.reversedDepth===!0&&(h=-h);const b=a(l,p,v,_,h,m);v.transmission>0?n.push(b):v.transparent===!0?s.push(b):t.push(b)}function u(l,p,v,_,h,m){const x=a(l,p,v,_,h,m);v.transmission>0?n.unshift(x):v.transparent===!0?s.unshift(x):t.unshift(x)}function f(l,p){t.length>1&&t.sort(l||av),n.length>1&&n.sort(p||Au),s.length>1&&s.sort(p||Au)}function d(){for(let l=e,p=i.length;l<p;l++){const v=i[l];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:u,finish:d,sort:f}}function lv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ru,i.set(n,[o])):s>=r.length?(o=new Ru,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function cv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new Oe};break;case"SpotLight":t={position:new k,direction:new k,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function uv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hv=0;function fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dv(i){const e=new cv,t=uv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new k);const s=new k,r=new ct,o=new ct;function a(u){let f=0,d=0,l=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,v=0,_=0,h=0,m=0,x=0,b=0,M=0,C=0,A=0,g=0,y=0,T=0,E=0;u.sort(fv);for(let L=0,F=u.length;L<F;L++){const U=u[L],G=U.color,W=U.intensity,B=U.distance;let oe=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===ks?oe=U.shadow.map.texture:oe=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)f+=G.r*W,d+=G.g*W,l+=G.b*W;else if(U.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(U.sh.coefficients[q],W);E++}else if(U.isSunLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,se=t.get(U);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[v]=se,n.sunShadowMap[v]=oe;const _e=te.getViewportCount();for(let K=0;K<_e;K++)n.sunShadowMatrix[_+K]=te.getMatrix(K),n.sunShadowCascade[_+K]=te._cascadeData[K];_+=_e,v++}n.sun[p]=q,p++}else if(U.isDirectionalLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const te=U.shadow,se=t.get(U);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.directionalShadow[h]=se,n.directionalShadowMap[h]=oe,n.directionalShadowMatrix[h]=U.shadow.matrix,C++}n.directional[h]=q,h++}else if(U.isSpotLight){const q=e.get(U);q.position.setFromMatrixPosition(U.matrixWorld),q.color.copy(G).multiplyScalar(W),q.distance=B,q.coneCos=Math.cos(U.angle),q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),q.decay=U.decay,n.spot[x]=q;const te=U.shadow;if(U.map&&(n.spotLightMap[y]=U.map,y++,te.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[x]=te.matrix,U.castShadow){const se=t.get(U);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,n.spotShadow[x]=se,n.spotShadowMap[x]=oe,g++}x++}else if(U.isRectAreaLight){const q=e.get(U);q.color.copy(G).multiplyScalar(W),q.halfWidth.set(U.width*.5,0,0),q.halfHeight.set(0,U.height*.5,0),n.rectArea[b]=q,b++}else if(U.isPointLight){const q=e.get(U);if(q.color.copy(U.color).multiplyScalar(U.intensity),q.distance=U.distance,q.decay=U.decay,U.castShadow){const te=U.shadow,se=t.get(U);se.shadowIntensity=te.intensity,se.shadowBias=te.bias,se.shadowNormalBias=te.normalBias,se.shadowRadius=te.radius,se.shadowMapSize=te.mapSize,se.shadowCameraNear=te.camera.near,se.shadowCameraFar=te.camera.far,n.pointShadow[m]=se,n.pointShadowMap[m]=oe,n.pointShadowMatrix[m]=U.shadow.matrix,A++}n.point[m]=q,m++}else if(U.isHemisphereLight){const q=e.get(U);q.skyColor.copy(U.color).multiplyScalar(W),q.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[M]=q,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=l;const z=n.hash;(z.sunLength!==p||z.directionalLength!==h||z.pointLength!==m||z.spotLength!==x||z.rectAreaLength!==b||z.hemiLength!==M||z.numSunShadows!==v||z.numDirectionalShadows!==C||z.numPointShadows!==A||z.numSpotShadows!==g||z.numSpotMaps!==y||z.numLightProbes!==E)&&(n.sun.length=p,n.directional.length=h,n.spot.length=x,n.rectArea.length=b,n.point.length=m,n.hemi.length=M,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,z.sunLength=p,z.directionalLength=h,z.pointLength=m,z.spotLength=x,z.rectAreaLength=b,z.hemiLength=M,z.numSunShadows=v,z.numDirectionalShadows=C,z.numPointShadows=A,z.numSpotShadows=g,z.numSpotMaps=y,z.numLightProbes=E,n.version=hv++)}function c(u,f){let d=0,l=0,p=0,v=0,_=0,h=0;const m=f.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const M=u[x];if(M.isSunLight){const C=n.sun[d];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(m),d++}else if(M.isDirectionalLight){const C=n.directional[l];C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),l++}else if(M.isSpotLight){const C=n.spot[v];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),v++}else if(M.isRectAreaLight){const C=n.rectArea[_];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const C=n.point[p];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const C=n.hemi[h];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(m),h++}}}return{setup:a,setupView:c,state:n}}function Cu(i){const e=new dv(i),t=[],n=[],s=[];function r(d){f.camera=d,t.length=0,n.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){n.push(d)}function c(){e.setup(t),s.sort((d,l)=>d.priority-l.priority||d.id-l.id)}function u(d){e.setupView(t,d)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a}}function pv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Cu(i),e.set(s,[a])):r>=o.length?(a=new Cu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gv=`uniform sampler2D shadow_pass;
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
}`,xv=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],vv=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Pu=new ct,Gr=new k,Sl=new k;function _v(i,e,t){let n=new br;const s=new ze,r=new ze,o=new Bt,a=new Lp,c=new Ip,u={},f=t.maxTextureSize,d={[Bs]:bn,[bn]:Bs,[Mi]:Mi},l=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:mv,fragmentShader:gv}),p=l.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ft;v.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $e(v,l),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let m=this.type;this.render=function(A,g,y){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||A.length===0)return;this.type===Of&&(rt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=no);const T=i.getRenderTarget(),E=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),L=i.state;L.setBlending(xr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=m!==this.type;F&&g.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(G=>G.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,G=A.length;U<G;U++){const W=A[U],B=W.shadow;if(B===void 0){rt("WebGLShadowMap:",W,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const oe=B.getFrameExtents();s.multiply(oe),r.copy(B.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/oe.x),s.x=r.x*oe.x,B.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/oe.y),s.y=r.y*oe.y,B.mapSize.y=r.y));const q=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=q,B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Kr){if(W.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Zn(s.x,s.y,{format:ks,type:hi,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),B.map.texture.name=W.name+".shadowMap",B.map.depthTexture=new Sr(s.x,s.y,ci),B.map.depthTexture.name=W.name+".shadowMapDepth",B.map.depthTexture.format=gs,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=un,B.map.depthTexture.magFilter=un}else W.isPointLight?(B.map=new i0(s.x),B.map.depthTexture=new Ch(s.x,Fi)):(B.map=new Zn(s.x,s.y),B.map.depthTexture=new Sr(s.x,s.y,Fi)),B.map.depthTexture.name=W.name+".shadowMap",B.map.depthTexture.format=gs,this.type===no?(B.map.depthTexture.compareFunction=q?gh:mh,B.map.depthTexture.minFilter=Cn,B.map.depthTexture.magFilter=Cn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=un,B.map.depthTexture.magFilter=un);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);const te=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();W.isPointLight!==!0&&B.updateMatrices(W,y);const se=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:y.layers;for(let _e=0;_e<te;_e++){const K=B.getCamera(_e);if(W.isPointLight){const Y=B.camera,ie=B.matrix,ve=W.distance||Y.far;ve!==Y.far&&(Y.far=ve,Y.updateProjectionMatrix()),Gr.setFromMatrixPosition(W.matrixWorld),Y.position.copy(Gr),Sl.copy(Y.position),Sl.add(xv[_e]),Y.up.copy(vv[_e]),Y.lookAt(Sl),Y.updateMatrixWorld(),ie.makeTranslation(-Gr.x,-Gr.y,-Gr.z),Pu.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Pu,Y.coordinateSystem,Y.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(B.map),i.clear());const Y=B.getViewport(_e);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),L.viewport(o)}n=B.getFrustum(_e),M(g,y,K,W,se,this.type)}B.isPointLightShadow!==!0&&this.type===Kr&&x(B,y),B.needsUpdate=!1}m=this.type,h.needsUpdate=!1,i.setRenderTarget(T,E,z)};function x(A,g){const y=e.update(_);l.defines.VSM_SAMPLES!==A.blurSamples&&(l.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,l.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new Zn(s.x,s.y,{format:ks,type:hi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),l.uniforms.shadow_pass.value=A.map.depthTexture,l.uniforms.resolution.value.set(A.map.width,A.map.height),l.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(g,null,y,l,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(g,null,y,p,_,null)}function b(A,g,y,T){let E=null;const z=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)E=z;else if(E=y.isPointLight===!0?c:a,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const L=E.uuid,F=g.uuid;let U=u[L];U===void 0&&(U={},u[L]=U);let G=U[F];G===void 0&&(G=E.clone(),U[F]=G,g.addEventListener("dispose",C)),E=G}if(E.visible=g.visible,E.wireframe=g.wireframe,T===Kr?E.side=g.shadowSide!==null?g.shadowSide:g.side:E.side=g.shadowSide!==null?g.shadowSide:d[g.side],E.alphaMap=g.alphaMap,E.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,E.map=g.map,E.clipShadows=g.clipShadows,E.clippingPlanes=g.clippingPlanes,E.clipIntersection=g.clipIntersection,E.displacementMap=g.displacementMap,E.displacementScale=g.displacementScale,E.displacementBias=g.displacementBias,E.wireframeLinewidth=g.wireframeLinewidth,E.linewidth=g.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const L=i.properties.get(E);L.light=y}return E}function M(A,g,y,T,E,z){if(A.visible===!1)return;if(A.layers.test(E)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===Kr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const U=e.update(A),G=A.material;if(Array.isArray(G)){const W=U.groups;for(let B=0,oe=W.length;B<oe;B++){const q=W[B],te=G[q.materialIndex];if(te&&te.visible){const se=b(A,te,T,z);A.onBeforeShadow(i,A,g,y,U,se,q),i.renderBufferDirect(y,null,U,se,A,q),A.onAfterShadow(i,A,g,y,U,se,q)}}}else if(G.visible){const W=b(A,G,T,z);A.onBeforeShadow(i,A,g,y,U,W,null),i.renderBufferDirect(y,null,U,W,A,null),A.onAfterShadow(i,A,g,y,U,W,null)}}const F=A.children;for(let U=0,G=F.length;U<G;U++)M(F[U],g,y,T,E,z)}function C(A){A.target.removeEventListener("dispose",C);for(const y in u){const T=u[y],E=A.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function yv(i,e){function t(){let O=!1;const fe=new Bt;let ge=null;const Ue=new Bt(0,0,0,0);return{setMask:function(Ie){ge!==Ie&&!O&&(i.colorMask(Ie,Ie,Ie,Ie),ge=Ie)},setLocked:function(Ie){O=Ie},setClear:function(Ie,Ne,tt,ut,Le){Le===!0&&(Ie*=ut,Ne*=ut,tt*=ut),fe.set(Ie,Ne,tt,ut),Ue.equals(fe)===!1&&(i.clearColor(Ie,Ne,tt,ut),Ue.copy(fe))},reset:function(){O=!1,ge=null,Ue.set(-1,0,0,0)}}}function n(){let O=!1,fe=!1,ge=null,Ue=null,Ie=null;return{setReversed:function(Ne){if(fe!==Ne){const tt=e.get("EXT_clip_control");Ne?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),fe=Ne;const ut=Ie;Ie=null,this.setClear(ut)}},getReversed:function(){return fe},setTest:function(Ne){Ne?j(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(Ne){ge!==Ne&&!O&&(i.depthMask(Ne),ge=Ne)},setFunc:function(Ne){if(fe&&(Ne=xd[Ne]),Ue!==Ne){switch(Ne){case zl:i.depthFunc(i.NEVER);break;case Ul:i.depthFunc(i.ALWAYS);break;case Nl:i.depthFunc(i.LESS);break;case ho:i.depthFunc(i.LEQUAL);break;case Fl:i.depthFunc(i.EQUAL);break;case Ol:i.depthFunc(i.GEQUAL);break;case Bl:i.depthFunc(i.GREATER);break;case kl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=Ne}},setLocked:function(Ne){O=Ne},setClear:function(Ne){Ie!==Ne&&(Ie=Ne,fe&&(Ne=1-Ne),i.clearDepth(Ne))},reset:function(){O=!1,ge=null,Ue=null,Ie=null,fe=!1}}}function s(){let O=!1,fe=null,ge=null,Ue=null,Ie=null,Ne=null,tt=null,ut=null,Le=null;return{setTest:function(et){O||(et?j(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(et){fe!==et&&!O&&(i.stencilMask(et),fe=et)},setFunc:function(et,ft,Ve){(ge!==et||Ue!==ft||Ie!==Ve)&&(i.stencilFunc(et,ft,Ve),ge=et,Ue=ft,Ie=Ve)},setOp:function(et,ft,Ve){(Ne!==et||tt!==ft||ut!==Ve)&&(i.stencilOp(et,ft,Ve),Ne=et,tt=ft,ut=Ve)},setLocked:function(et){O=et},setClear:function(et){Le!==et&&(i.clearStencil(et),Le=et)},reset:function(){O=!1,fe=null,ge=null,Ue=null,Ie=null,Ne=null,tt=null,ut=null,Le=null}}}const r=new t,o=new n,a=new s;let c={};const u=new WeakMap;let f={},d={},l={},p=new WeakMap,v=[],_=null,h=!1,m=null,x=null,b=null,M=null,C=null,A=null,g=null,y=new Oe(0,0,0),T=0,E=!1,z=null,L=null,F=null,U=null,G=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,oe=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=oe>=1):q.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=oe>=2);let te=null,se={};const _e=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),Y=new Bt().fromArray(_e),ie=new Bt().fromArray(K);function ve(O,fe,ge,Ue){const Ie=new Uint8Array(4),Ne=i.createTexture();i.bindTexture(O,Ne),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<ge;tt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(fe+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Ne}const Me={};Me[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(ho),le(!1),pe(m0),j(i.CULL_FACE),P(xr);function j(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function Ee(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function Ye(O,fe){return l[O]!==fe?(i.bindFramebuffer(O,fe),l[O]=fe,O===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=fe),O===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function Fe(O,fe){let ge=v,Ue=!1;if(O){ge=p.get(fe),ge===void 0&&(ge=[],p.set(fe,ge));const Ie=O.textures;if(ge.length!==Ie.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let Ne=0,tt=Ie.length;Ne<tt;Ne++)ge[Ne]=i.COLOR_ATTACHMENT0+Ne;ge.length=Ie.length,Ue=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(ge)}function Xe(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const at={[hr]:i.FUNC_ADD,[Bf]:i.FUNC_SUBTRACT,[kf]:i.FUNC_REVERSE_SUBTRACT};at[Gf]=i.MIN,at[Vf]=i.MAX;const ye={[Hf]:i.ZERO,[ju]:i.ONE,[Wf]:i.SRC_COLOR,[eh]:i.SRC_ALPHA,[Kf]:i.SRC_ALPHA_SATURATE,[$f]:i.DST_COLOR,[qf]:i.DST_ALPHA,[Xf]:i.ONE_MINUS_SRC_COLOR,[Fc]:i.ONE_MINUS_SRC_ALPHA,[Zf]:i.ONE_MINUS_DST_COLOR,[Yf]:i.ONE_MINUS_DST_ALPHA,[Jf]:i.CONSTANT_COLOR,[Qf]:i.ONE_MINUS_CONSTANT_COLOR,[jf]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function P(O,fe,ge,Ue,Ie,Ne,tt,ut,Le,et){if(O===xr){h===!0&&(Ee(i.BLEND),h=!1);return}if(h===!1&&(j(i.BLEND),h=!0),O!==Qu){if(O!==m||et!==E){if((x!==hr||C!==hr)&&(i.blendEquation(i.FUNC_ADD),x=hr,C=hr),et)switch(O){case io:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFunc(i.ONE,i.ONE);break;case g0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case x0:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Dt("WebGLState: Invalid blending: ",O);break}else switch(O){case io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case g0:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case x0:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",O);break}b=null,M=null,A=null,g=null,y.set(0,0,0),T=0,m=O,E=et}return}Ie=Ie||fe,Ne=Ne||ge,tt=tt||Ue,(fe!==x||Ie!==C)&&(i.blendEquationSeparate(at[fe],at[Ie]),x=fe,C=Ie),(ge!==b||Ue!==M||Ne!==A||tt!==g)&&(i.blendFuncSeparate(ye[ge],ye[Ue],ye[Ne],ye[tt]),b=ge,M=Ue,A=Ne,g=tt),(ut.equals(y)===!1||Le!==T)&&(i.blendColor(ut.r,ut.g,ut.b,Le),y.copy(ut),T=Le),m=O,E=!1}function $(O,fe){O.side===Mi?Ee(i.CULL_FACE):j(i.CULL_FACE);let ge=O.side===bn;fe&&(ge=!ge),le(ge),O.blending===io&&O.transparent===!1?P(xr):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Ue=O.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),me(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(O){z!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),z=O)}function pe(O){O!==Nf?(j(i.CULL_FACE),O!==L&&(O===m0?i.cullFace(i.BACK):O===Ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),L=O}function be(O){O!==F&&(B&&i.lineWidth(O),F=O)}function me(O,fe,ge){O?(j(i.POLYGON_OFFSET_FILL),(U!==fe||G!==ge)&&(U=fe,G=ge,o.getReversed()&&(fe=-fe,ge=-ge),i.polygonOffset(fe,ge))):Ee(i.POLYGON_OFFSET_FILL)}function xe(O){O?j(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Re(O){O===void 0&&(O=i.TEXTURE0+W-1),te!==O&&(i.activeTexture(O),te=O)}function Ze(O,fe,ge){ge===void 0&&(te===null?ge=i.TEXTURE0+W-1:ge=te);let Ue=se[ge];Ue===void 0&&(Ue={type:void 0,texture:void 0},se[ge]=Ue),(Ue.type!==O||Ue.texture!==fe)&&(te!==ge&&(i.activeTexture(ge),te=ge),i.bindTexture(O,fe||Me[O]),Ue.type=O,Ue.texture=fe)}function V(){const O=se[te];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(O){Dt("WebGLState:",O)}}function Te(){try{i.compressedTexImage3D(...arguments)}catch(O){Dt("WebGLState:",O)}}function He(){try{i.texSubImage2D(...arguments)}catch(O){Dt("WebGLState:",O)}}function Se(){try{i.texSubImage3D(...arguments)}catch(O){Dt("WebGLState:",O)}}function ht(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Dt("WebGLState:",O)}}function D(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Dt("WebGLState:",O)}}function R(){try{i.texStorage2D(...arguments)}catch(O){Dt("WebGLState:",O)}}function w(){try{i.texStorage3D(...arguments)}catch(O){Dt("WebGLState:",O)}}function S(){try{i.texImage2D(...arguments)}catch(O){Dt("WebGLState:",O)}}function N(){try{i.texImage3D(...arguments)}catch(O){Dt("WebGLState:",O)}}function ee(O){return d[O]!==void 0?d[O]:i.getParameter(O)}function H(O,fe){d[O]!==fe&&(i.pixelStorei(O,fe),d[O]=fe)}function J(O){Y.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Y.copy(O))}function he(O){ie.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function Z(O,fe){let ge=u.get(fe);ge===void 0&&(ge=new WeakMap,u.set(fe,ge));let Ue=ge.get(O);Ue===void 0&&(Ue=i.getUniformBlockIndex(fe,O.name),i.uniformBlockBinding(fe,Ue,Ue),ge.set(O,Ue))}function Q(O,fe,ge){const Ie=u.get(fe).get(O);c[Ie]!==ge&&(i.bindBufferBase(i.UNIFORM_BUFFER,Ie,ge),c[Ie]=ge)}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},d={},te=null,se={},l={},c={},p=new WeakMap,v=[],_=null,h=!1,m=null,x=null,b=null,M=null,C=null,A=null,g=null,y=new Oe(0,0,0),T=0,E=!1,z=null,L=null,F=null,U=null,G=null,Y.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:Ee,bindFramebuffer:Ye,drawBuffers:Fe,useProgram:Xe,setBlending:P,setMaterial:$,setFlipSided:le,setCullFace:pe,setLineWidth:be,setPolygonOffset:me,setScissorTest:xe,activeTexture:Re,bindTexture:Ze,unbindTexture:V,compressedTexImage2D:lt,compressedTexImage3D:Te,texImage2D:S,texImage3D:N,pixelStorei:H,getParameter:ee,updateUBOMapping:Z,uniformBlockBinding:Q,texStorage2D:R,texStorage3D:w,texSubImage2D:He,texSubImage3D:Se,compressedTexSubImage2D:ht,compressedTexSubImage3D:D,scissor:J,viewport:he,reset:we}}function Mv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ze,f=new WeakMap,d=new Set;let l;const p=new WeakMap,v=new Set,_=new FinalizationRegistry(w=>v.delete(w));let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,S){return h?new OffscreenCanvas(w,S):Da("canvas")}function x(w,S,N){let ee=1;const H=R(w);if((H.width>N||H.height>N)&&(ee=N/Math.max(H.width,H.height)),ee<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(ee*H.width),he=Math.floor(ee*H.height);l===void 0&&(l=m(J,he));const Z=S?m(J,he):l;return Z.width=J,Z.height=he,Z.getContext("2d").drawImage(w,0,0,J,he),rt("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+J+"x"+he+")."),Z}else return"data"in w&&rt("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),w;return w}function b(w){return w.generateMipmaps}function M(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(w,S,N,ee,H,J=!1){if(w!==null){if(i[w]!==void 0)return i[w];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he;ee&&(he=e.get("EXT_texture_norm16"),he||rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=S;if(S===i.RED&&(N===i.FLOAT&&(Z=i.R32F),N===i.HALF_FLOAT&&(Z=i.R16F),N===i.UNSIGNED_BYTE&&(Z=i.R8),N===i.UNSIGNED_SHORT&&he&&(Z=he.R16_EXT),N===i.SHORT&&he&&(Z=he.R16_SNORM_EXT)),S===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.R8UI),N===i.UNSIGNED_SHORT&&(Z=i.R16UI),N===i.UNSIGNED_INT&&(Z=i.R32UI),N===i.BYTE&&(Z=i.R8I),N===i.SHORT&&(Z=i.R16I),N===i.INT&&(Z=i.R32I)),S===i.RG&&(N===i.FLOAT&&(Z=i.RG32F),N===i.HALF_FLOAT&&(Z=i.RG16F),N===i.UNSIGNED_BYTE&&(Z=i.RG8),N===i.UNSIGNED_SHORT&&he&&(Z=he.RG16_EXT),N===i.SHORT&&he&&(Z=he.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RG8UI),N===i.UNSIGNED_SHORT&&(Z=i.RG16UI),N===i.UNSIGNED_INT&&(Z=i.RG32UI),N===i.BYTE&&(Z=i.RG8I),N===i.SHORT&&(Z=i.RG16I),N===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),N===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),N===i.UNSIGNED_INT&&(Z=i.RGB32UI),N===i.BYTE&&(Z=i.RGB8I),N===i.SHORT&&(Z=i.RGB16I),N===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),N===i.UNSIGNED_INT&&(Z=i.RGBA32UI),N===i.BYTE&&(Z=i.RGBA8I),N===i.SHORT&&(Z=i.RGBA16I),N===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&(N===i.UNSIGNED_SHORT&&he&&(Z=he.RGB16_EXT),N===i.SHORT&&he&&(Z=he.RGB16_SNORM_EXT),N===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),S===i.RGBA){const Q=J?Pa:Tt.getTransfer(H);N===i.FLOAT&&(Z=i.RGBA32F),N===i.HALF_FLOAT&&(Z=i.RGBA16F),N===i.UNSIGNED_BYTE&&(Z=Q===Nt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT&&he&&(Z=he.RGBA16_EXT),N===i.SHORT&&he&&(Z=he.RGBA16_SNORM_EXT),N===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(w,S){let N;return w?S===null||S===Fi||S===Mr?N=i.DEPTH24_STENCIL8:S===ci?N=i.DEPTH32F_STENCIL8:S===po&&(N=i.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Fi||S===Mr?N=i.DEPTH_COMPONENT24:S===ci?N=i.DEPTH_COMPONENT32F:S===po&&(N=i.DEPTH_COMPONENT16),N}function y(w,S){return b(w)===!0||w.isFramebufferTexture&&w.minFilter!==un&&w.minFilter!==Cn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){const S=new WeakRef(w);n.get(w).__ref=S,v.add(S),_.register(w,S,S)}function E(w){const S=n.get(w).__ref;S!==void 0&&(v.delete(S),_.unregister(S))}function z(w){F(w.target)}function L(w){U(w.target)}function F(w){w.removeEventListener("dispose",z),E(w),W(w),w.isVideoTexture&&f.delete(w),w.isHTMLTexture&&d.delete(w)}function U(w){w.removeEventListener("dispose",L),E(w),oe(w)}function G(){for(const w of v){const S=w.deref();S!==void 0&&(S.isRenderTarget===!0?U(S):F(S))}v.clear(),d.clear()}function W(w){const S=n.get(w);if(S.__webglInit===void 0)return;const N=w.source,ee=p.get(N);if(ee){const H=ee[S.__cacheKey];H.usedTimes--,H.usedTimes===0&&B(w),Object.keys(ee).length===0&&p.delete(N)}n.remove(w)}function B(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const N=w.source,ee=p.get(N);delete ee[S.__cacheKey],o.memory.textures--}function oe(w){const S=n.get(w);S.__depthDisposeCallback&&S.__depthDisposeCallback();const N=w.depthTexture;if(N&&N.renderTarget===w&&F(N),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let J=0;J<S.__webglFramebuffer[H].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[H][J]);else i.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)i.deleteFramebuffer(S.__webglFramebuffer[H]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ee=w.textures;for(let H=0,J=ee.length;H<J;H++){const he=n.get(ee[H]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(ee[H])}n.remove(w)}let q=0;function te(){q=0}function se(){return q}function _e(w){q=w}function K(){const w=q;return w>=s.maxTextures&&rt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,w}function Y(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.mipmapsAutoUpdate),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function ie(w,S){const N=n.get(w);if(w.isVideoTexture&&ht(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const ee=w.image;if(ee===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(N,w,S);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+S)}function ve(w,S){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){$(N,w,S);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+S)}function Me(w,S){const N=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){$(N,w,S);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+S)}function j(w,S){const N=n.get(w);if(w.version>0&&N.__version!==w.version){le(N,w,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+S)}const Ee={[yr]:i.REPEAT,[zi]:i.CLAMP_TO_EDGE,[Gl]:i.MIRRORED_REPEAT},Ye={[un]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[Eo]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Xa]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},Fe={[ld]:i.NEVER,[xh]:i.ALWAYS,[cd]:i.LESS,[mh]:i.LEQUAL,[ud]:i.EQUAL,[gh]:i.GEQUAL,[hd]:i.GREATER,[fd]:i.NOTEQUAL};function Xe(w,S){if(S.type===ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Cn||S.magFilter===Xa||S.magFilter===Eo||S.magFilter===Ui||S.minFilter===Cn||S.minFilter===Xa||S.minFilter===Eo||S.minFilter===Ui)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ee[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ee[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ee[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ye[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ye[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Fe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===un||S.minFilter!==Eo&&S.minFilter!==Ui||S.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function at(w,S){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",z),T(S));const ee=S.source;let H=p.get(ee);H===void 0&&(H={},p.set(ee,H));const J=Y(S);if(J!==w.__cacheKey){H[J]===void 0&&(H[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),H[J].usedTimes++;const he=H[w.__cacheKey];he!==void 0&&(H[w.__cacheKey].usedTimes--,he.usedTimes===0&&B(S)),w.__cacheKey=J,w.__webglTexture=H[J].texture}return N}function ye(w,S,N){return Math.floor(Math.floor(w/N)/S)}function P(w,S,N,ee){const J=w.updateRanges;if(J.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,N,ee,S.data);else{J.sort((O,fe)=>O.start-fe.start);let he=0;for(let O=1;O<J.length;O++){const fe=J[he],ge=J[O],Ue=fe.start+fe.count,Ie=ye(ge.start,S.width,4),Ne=ye(fe.start,S.width,4);ge.start<=Ue+1&&Ie===Ne&&ye(ge.start+ge.count-1,S.width,4)===Ie?fe.count=Math.max(fe.count,ge.start+ge.count-fe.start):(++he,J[he]=ge)}J.length=he+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let O=0,fe=J.length;O<fe;O++){const ge=J[O],Ue=Math.floor(ge.start/4),Ie=Math.ceil(ge.count/4),Ne=Ue%S.width,tt=Math.floor(Ue/S.width),ut=Ie,Le=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,tt),t.texSubImage2D(i.TEXTURE_2D,0,Ne,tt,ut,Le,N,ee,S.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function $(w,S,N){let ee=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ee=i.TEXTURE_3D);const H=at(w,S),J=S.source;t.bindTexture(ee,w.__webglTexture,i.TEXTURE0+N);const he=n.get(J);if(J.version!==he.__version||H===!0){if(t.activeTexture(i.TEXTURE0+N),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Le=Tt.getPrimaries(Tt.workingColorSpace),et=S.colorSpace===bi?null:Tt.getPrimaries(S.colorSpace),ft=S.colorSpace===bi||Le===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let Q=x(S.image,!1,s.maxTextureSize);Q=D(S,Q);const we=r.convert(S.format,S.colorSpace),O=r.convert(S.type);let fe=A(S.internalFormat,we,O,S.normalized,S.colorSpace,S.isVideoTexture);Xe(ee,S);let ge;const Ue=S.mipmaps,Ie=S.isVideoTexture!==!0,Ne=he.__version===void 0||H===!0,tt=J.dataReady,ut=y(S,Q);if(S.isDepthTexture)fe=g(S.format===ds,S.type),Ne&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,fe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,fe,Q.width,Q.height,0,we,O,null));else if(S.isDataTexture)if(Ue.length>0){Ie&&Ne&&t.texStorage2D(i.TEXTURE_2D,ut,fe,Ue[0].width,Ue[0].height);for(let Le=0,et=Ue.length;Le<et;Le++)ge=Ue[Le],Ie?tt&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,ge.width,ge.height,we,O,ge.data):t.texImage2D(i.TEXTURE_2D,Le,fe,ge.width,ge.height,0,we,O,ge.data);S.generateMipmaps=!1}else Ie?(Ne&&t.texStorage2D(i.TEXTURE_2D,ut,fe,Q.width,Q.height),tt&&P(S,Q,we,O)):t.texImage2D(i.TEXTURE_2D,0,fe,Q.width,Q.height,0,we,O,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ie&&Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ut,fe,Ue[0].width,Ue[0].height,Q.depth);for(let Le=0,et=Ue.length;Le<et;Le++)if(ge=Ue[Le],S.format!==Pn)if(we!==null)if(Ie){if(tt)if(S.layerUpdates.size>0){const ft=cu(ge.width,ge.height,S.format,S.type);for(const Ve of S.layerUpdates){const Pt=ge.data.subarray(Ve*ft/ge.data.BYTES_PER_ELEMENT,(Ve+1)*ft/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,Ve,ge.width,ge.height,1,we,Pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,ge.width,ge.height,Q.depth,we,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Le,fe,ge.width,ge.height,Q.depth,0,ge.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?tt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,ge.width,ge.height,Q.depth,we,O,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Le,fe,ge.width,ge.height,Q.depth,0,we,O,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ie&&Ne&&t.texStorage2D(i.TEXTURE_2D,ut,fe,Ue[0].width,Ue[0].height);for(let Le=0,et=Ue.length;Le<et;Le++)ge=Ue[Le],S.format!==Pn?we!==null?Ie?tt&&t.compressedTexSubImage2D(i.TEXTURE_2D,Le,0,0,ge.width,ge.height,we,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Le,fe,ge.width,ge.height,0,ge.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?tt&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,ge.width,ge.height,we,O,ge.data):t.texImage2D(i.TEXTURE_2D,Le,fe,ge.width,ge.height,0,we,O,ge.data)}else if(S.isDataArrayTexture)if(Ie){if(Ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ut,fe,Q.width,Q.height,Q.depth),tt)if(S.layerUpdates.size>0){const Le=cu(Q.width,Q.height,S.format,S.type);for(const et of S.layerUpdates){const ft=Q.data.subarray(et*Le/Q.data.BYTES_PER_ELEMENT,(et+1)*Le/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,Q.width,Q.height,1,we,O,ft)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,we,O,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,we,O,Q.data);else if(S.isData3DTexture)Ie?(Ne&&t.texStorage3D(i.TEXTURE_3D,ut,fe,Q.width,Q.height,Q.depth),tt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,we,O,Q.data)):t.texImage3D(i.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,we,O,Q.data);else if(S.isFramebufferTexture){if(Ne)if(Ie)t.texStorage2D(i.TEXTURE_2D,ut,fe,Q.width,Q.height);else{let Le=Q.width,et=Q.height;for(let ft=0;ft<ut;ft++)t.texImage2D(i.TEXTURE_2D,ft,fe,Le,et,0,we,O,null),Le>>=1,et>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const Le=i.canvas;if(Le.hasAttribute("layoutsubtree")||Le.setAttribute("layoutsubtree","true"),Q.parentNode!==Le){Le.appendChild(Q),d.add(S),Le.onpaint=et=>{const ft=et.changedElements;for(const Ve of d)ft.includes(Ve.image)&&(Ve.needsUpdate=!0)},Le.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const ft=i.RGBA,Ve=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ft,Ve,Pt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ie&&Ne){const Le=R(Ue[0]);t.texStorage2D(i.TEXTURE_2D,ut,fe,Le.width,Le.height)}for(let Le=0,et=Ue.length;Le<et;Le++)ge=Ue[Le],Ie?tt&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,we,O,ge):t.texImage2D(i.TEXTURE_2D,Le,fe,we,O,ge);S.generateMipmaps=!1}else if(Ie){if(Ne){const Le=R(Q);t.texStorage2D(i.TEXTURE_2D,ut,fe,Le.width,Le.height)}tt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,O,Q)}else t.texImage2D(i.TEXTURE_2D,0,fe,we,O,Q);b(S)&&S.mipmapsAutoUpdate===!0&&M(ee),he.__version=J.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function le(w,S,N){if(S.image.length!==6)return;const ee=at(w,S),H=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+N);const J=n.get(H);if(H.version!==J.__version||ee===!0){t.activeTexture(i.TEXTURE0+N);const he=Tt.getPrimaries(Tt.workingColorSpace),Z=S.colorSpace===bi?null:Tt.getPrimaries(S.colorSpace),Q=S.colorSpace===bi||he===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,O=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let Ve=0;Ve<6;Ve++)!we&&!O?fe[Ve]=x(S.image[Ve],!0,s.maxCubemapSize):fe[Ve]=O?S.image[Ve].image:S.image[Ve],fe[Ve]=D(S,fe[Ve]);const ge=fe[0],Ue=r.convert(S.format,S.colorSpace),Ie=r.convert(S.type);let Ne=A(S.internalFormat,Ue,Ie,S.normalized,S.colorSpace);const tt=S.isVideoTexture!==!0,ut=J.__version===void 0||ee===!0,Le=H.dataReady;let et=y(S,ge);Xe(i.TEXTURE_CUBE_MAP,S);let ft;if(S.isDepthTexture){if(Ne=g(S.format===ds,S.type),ut)if(tt)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ne,ge.width,ge.height);else for(let Ve=0;Ve<6;Ve++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ne,ge.width,ge.height,0,Ue,Ie,null)}else if(we){tt&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,et,Ne,ge.width,ge.height);for(let Ve=0;Ve<6;Ve++){ft=fe[Ve].mipmaps;for(let Pt=0;Pt<ft.length;Pt++){const tn=ft[Pt];S.format!==Pn?Ue!==null?tt?Le&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Pt,0,0,tn.width,tn.height,Ue,tn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Pt,Ne,tn.width,tn.height,0,tn.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?Le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Pt,0,0,tn.width,tn.height,Ue,Ie,tn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Pt,Ne,tn.width,tn.height,0,Ue,Ie,tn.data)}}}else{if(ft=S.mipmaps,tt&&ut){ft.length>0&&et++;const Ve=R(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,et,Ne,Ve.width,Ve.height)}for(let Ve=0;Ve<6;Ve++)if(O){tt?Le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,0,0,fe[Ve].width,fe[Ve].height,Ue,Ie,fe[Ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ne,fe[Ve].width,fe[Ve].height,0,Ue,Ie,fe[Ve].data);for(let Pt=0;Pt<ft.length;Pt++){const Xt=ft[Pt].image[Ve].image;tt?Le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Pt+1,0,0,Xt.width,Xt.height,Ue,Ie,Xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Pt+1,Ne,Xt.width,Xt.height,0,Ue,Ie,Xt.data)}}else{tt?Le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,0,0,Ue,Ie,fe[Ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ne,Ue,Ie,fe[Ve]);for(let Pt=0;Pt<ft.length;Pt++){const tn=ft[Pt];tt?Le&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Pt+1,0,0,Ue,Ie,tn.image[Ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Pt+1,Ne,Ue,Ie,tn.image[Ve])}}}b(S)&&S.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),J.__version=H.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function pe(w,S,N,ee,H,J){const he=r.convert(N.format,N.colorSpace),Z=r.convert(N.type),Q=A(N.internalFormat,he,Z,N.normalized,N.colorSpace),we=n.get(S),O=n.get(N);if(O.__renderTarget=S,!we.__hasExternalTextures){const fe=Math.max(1,S.width>>J),ge=Math.max(1,S.height>>J);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?t.texImage3D(H,J,Q,fe,ge,S.depth,0,he,Z,null):t.texImage2D(H,J,Q,fe,ge,0,he,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Se(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,H,O.__webglTexture,0,He(S)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,H,O.__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(w,S,N){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const ee=S.depthTexture,H=ee&&ee.isDepthTexture?ee.type:null,J=g(S.stencilBuffer,H),he=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(S),J,S.width,S.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(S),J,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,J,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,w)}else{const ee=S.textures;for(let H=0;H<ee.length;H++){const J=ee[H],he=r.convert(J.format,J.colorSpace),Z=r.convert(J.type),Q=A(J.internalFormat,he,Z,J.normalized,J.colorSpace);Se(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(S),Q,S.width,S.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(S),Q,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(w,S,N){const ee=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const H=n.get(S.depthTexture);H.__renderTarget=S;const J=ee?S.depthTexture.image[0]:S.depthTexture.image;(!H.__webglTexture||J.width!==S.width||J.height!==S.height)&&(J.width=S.width,J.height=S.height,S.depthTexture.needsUpdate=!0),ee?j(S.depthTexture,0):ie(S.depthTexture,0);const he=H.__webglTexture,Z=He(S),Q=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+N:i.TEXTURE_2D,we=S.depthTexture.format===ds?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===gs)Se(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,Q,he,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,we,Q,he,0);else if(S.depthTexture.format===ds)Se(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,Q,he,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,we,Q,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xe(w){const S=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const ee=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ee){const H=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ee.removeEventListener("dispose",H)};ee.addEventListener("dispose",H),S.__depthDisposeCallback=H}S.__boundDepthTexture=ee}if(w.depthTexture&&!S.__autoAllocateDepthBuffer)if(N)for(let ee=0;ee<6;ee++)me(S.__webglFramebuffer[ee],w,ee);else w.texture.mipmaps.length>0?me(S.__webglFramebuffer[0],w,0):me(S.__webglFramebuffer,w,0);else if(N){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]===void 0)S.__webglDepthbuffer[ee]=i.createRenderbuffer(),be(S.__webglDepthbuffer[ee],w,!1);else{const H=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,J)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),be(S.__webglDepthbuffer,w,!1);else{const H=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(w,S,N){const ee=n.get(w);S!==void 0&&pe(ee.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&xe(w)}function Ze(w){const S=w.texture,N=n.get(w),ee=n.get(S);w.addEventListener("dispose",L),T(w);const H=w.textures,J=w.isWebGLCubeRenderTarget===!0,he=H.length>1;if(he||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=S.version,o.memory.textures++),J){N.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0){N.__webglFramebuffer[Z]=[];for(let Q=0;Q<S.mipmaps.length;Q++)N.__webglFramebuffer[Z][Q]=i.createFramebuffer()}else N.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(S.mipmaps.length>0){N.__webglFramebuffer=[];for(let Z=0;Z<S.mipmaps.length;Z++)N.__webglFramebuffer[Z]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(he)for(let Z=0,Q=H.length;Z<Q;Z++){const we=n.get(H[Z]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Se(w)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Z=0;Z<H.length;Z++){const Q=H[Z];N.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Z]);const we=r.convert(Q.format,Q.colorSpace),O=r.convert(Q.type),fe=A(Q.internalFormat,we,O,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),ge=He(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,fe,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,N.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),be(N.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,S);for(let Z=0;Z<6;Z++)if(S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)pe(N.__webglFramebuffer[Z][Q],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else pe(N.__webglFramebuffer[Z],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);b(S)?M(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(he){for(let Z=0,Q=H.length;Z<Q;Z++){const we=H[Z],O=n.get(we);let fe=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(fe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,O.__webglTexture),Xe(fe,we),pe(N.__webglFramebuffer,w,we,i.COLOR_ATTACHMENT0+Z,fe,0),b(we)&&M(fe)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Z=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,ee.__webglTexture),Xe(Z,S),S.mipmaps.length>0)for(let Q=0;Q<S.mipmaps.length;Q++)pe(N.__webglFramebuffer[Q],w,S,i.COLOR_ATTACHMENT0,Z,Q);else pe(N.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,Z,0);b(S)?M(Z):S.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&xe(w)}function V(w){const S=w.textures;for(let N=0,ee=S.length;N<ee;N++){const H=S[N];if(b(H)&&H.mipmapsAutoUpdate===!0){const J=C(w),he=n.get(H).__webglTexture;t.bindTexture(J,he),M(J),t.unbindTexture()}}}const lt=[];function Te(w){if(w.samples>0){if(Se(w)===!1){const S=w.textures,N=w.width,ee=w.height;let H=i.COLOR_BUFFER_BIT;const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(w),Z=S.length>1;if(Z)for(let we=0;we<S.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let we=0;we<S.length;we++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[we]);const O=n.get(S[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,N,ee,0,0,N,ee,H,i.NEAREST),c===!0&&(lt.length=0,lt.push(i.COLOR_ATTACHMENT0+we),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&lt.push(J),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let we=0;we<S.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,he.__webglColorRenderbuffer[we]);const O=n.get(S[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,O,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function He(w){return Math.min(s.maxSamples,w.samples)}function Se(w){const S=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(w){const S=o.render.frame;f.get(w)!==S&&(f.set(w,S),w.update())}function D(w,S){const N=w.colorSpace,ee=w.format,H=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Ca&&N!==bi&&(Tt.getTransfer(N)===Nt?(ee!==Pn||H!==qn)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",N)),S}function R(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=te,this.getTextureUnits=se,this.setTextureUnits=_e,this.setTexture2D=ie,this.setTexture2DArray=ve,this.setTexture3D=Me,this.setTextureCube=j,this.rebindTextures=Re,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Se,this.dispose=G}function bv(i,e){function t(n,s=bi){let r;const o=Tt.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ch)return i.BYTE;if(n===uh)return i.SHORT;if(n===po)return i.UNSIGNED_SHORT;if(n===Bc)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===ci)return i.FLOAT;if(n===hi)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===ph)return i.RGB;if(n===Pn)return i.RGBA;if(n===gs)return i.DEPTH_COMPONENT;if(n===ds)return i.DEPTH_STENCIL;if(n===Vc)return i.RED;if(n===Hc)return i.RED_INTEGER;if(n===ks)return i.RG;if(n===Wc)return i.RG_INTEGER;if(n===Xc)return i.RGBA_INTEGER;if(n===ma||n===ga||n===xa||n===va)if(o===Nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Hl||n===Wl||n===Xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Yl||n===$l||n===Zl||n===Kl||n===Ta||n===Jl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===Yl)return o===Nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return r.COMPRESSED_R11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ta)return r.COMPRESSED_RG11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ql||n===jl||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===uc||n===hc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ql)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jl)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return o===Nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===dc||n===pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fc)return o===Nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===Aa||n===xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
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

}`;class Ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ph(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:Sv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new es(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tv extends Ws{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,u=null,f=null,d=null,l=null,p=null,v=null;const _=typeof XRWebGLBinding<"u",h=new Ev,m={},x=t.getContextAttributes();let b=null,M=null;const C=[],A=[],g=new ze;let y=null,T=null;const E=new Wn;E.viewport=new Bt;const z=new Wn;z.viewport=new Bt;const L=[E,z],F=new Op;let U=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=C[Y];return ie===void 0&&(ie=new el,C[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=C[Y];return ie===void 0&&(ie=new el,C[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=C[Y];return ie===void 0&&(ie=new el,C[Y]=ie),ie.getHandSpace()};function W(Y){const ie=A.indexOf(Y.inputSource);if(ie===-1)return;const ve=C[ie];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,u||o),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function B(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",oe);for(let Y=0;Y<C.length;Y++){const ie=A[Y];ie!==null&&(A[Y]=null,C[Y].disconnect(ie))}U=null,G=null,h.reset();for(const Y in m)delete m[Y];if(e.setRenderTarget(b),p=null,l=null,d=null,s=null,M=null,K.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(g.width,g.height,!1),T!==null){const Y=T.camera;Y.fov=T.fov,Y.zoom=T.zoom,Y.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return l!==null?l:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",B),s.addEventListener("inputsourceschange",oe),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(g),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Me=null,j=null;x.depth&&(j=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=x.stencil?ds:gs,Me=x.stencil?Mr:Fi);const Ee={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};d=this.getBinding(),l=d.createProjectionLayer(Ee),s.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),M=new Zn(l.textureWidth,l.textureHeight,{format:Pn,type:qn,depthTexture:new Sr(l.textureWidth,l.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1,storeMultisampledDepthBuffer:l.ignoreDepthValues===!1,storeMultisampledStencilBuffer:l.ignoreDepthValues===!1})}else{const ve={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function oe(Y){for(let ie=0;ie<Y.removed.length;ie++){const ve=Y.removed[ie],Me=A.indexOf(ve);Me>=0&&(A[Me]=null,C[Me].disconnect(ve))}for(let ie=0;ie<Y.added.length;ie++){const ve=Y.added[ie];let Me=A.indexOf(ve);if(Me===-1){for(let Ee=0;Ee<C.length;Ee++)if(Ee>=A.length){A.push(ve),Me=Ee;break}else if(A[Ee]===null){A[Ee]=ve,Me=Ee;break}if(Me===-1)break}const j=C[Me];j&&j.connect(ve)}}function q(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ie=Y.near,ve=Y.far;h.texture!==null&&(h.depthNear>0&&(ie=h.depthNear),h.depthFar>0&&(ve=h.depthFar)),F.near=z.near=E.near=ie,F.far=z.far=E.far=ve,(U!==F.near||G!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),U=F.near,G=F.far),F.layers.mask=Y.layers.mask|6,E.layers.mask=F.layers.mask&-5,z.layers.mask=F.layers.mask&-3;const Me=Y.parent,j=F.cameras;q(F,Me);for(let Ee=0;Ee<j.length;Ee++)q(j[Ee],Me);F.projectionMatrix.copy(E.projectionMatrix),F.projectionMatrixInverse.copy(E.projectionMatrixInverse),T===null&&Y.isPerspectiveCamera&&(T={camera:Y,fov:Y.fov,zoom:Y.zoom}),te(Y,F,Me)};function te(Y,ie,ve){ve===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=La*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(l===null&&p===null))return c},this.setFoveation=function(Y){c=Y,l!==null&&(l.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(F)},this.getCameraTexture=function(Y){return m[Y]};let se=null;function _e(Y,ie){if(f=ie.getViewerPose(u||o),v=ie,f!==null){const ve=f.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Me=!1;ve.length!==F.cameras.length&&(F.cameras.length=0,Me=!0);for(let Fe=0;Fe<ve.length;Fe++){const Xe=ve[Fe];let at=null;if(p!==null)at=p.getViewport(Xe);else{const P=d.getViewSubImage(l,Xe);at=P.viewport,Fe===0&&(e.setRenderTargetTextures(M,P.colorTexture,P.depthStencilTexture),e.setRenderTarget(M))}let ye=L[Fe];ye===void 0&&(ye=new Wn,ye.layers.enable(Fe),ye.viewport=new Bt,L[Fe]=ye),ye.matrix.fromArray(Xe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Xe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(at.x,at.y,at.width,at.height),Fe===0&&(F.matrix.copy(ye.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Me===!0&&F.cameras.push(ye)}const j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Fe=d.getDepthInformation(ve[0]);Fe&&Fe.isValid&&Fe.texture&&h.init(Fe,s.renderState)}if(j&&j.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Fe=0;Fe<ve.length;Fe++){const Xe=ve[Fe].camera;if(Xe){let at=m[Xe];at||(at=new Ph,m[Xe]=at);const ye=d.getCameraImage(Xe);at.sourceTexture=ye}}}}for(let ve=0;ve<C.length;ve++){const Me=A[ve],j=C[ve];Me!==null&&j!==void 0&&j.update(Me,ie,u||o)}se&&se(Y,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const K=new Wh;K.setAnimationLoop(_e),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}}const Av=new ct,ef=new pt;ef.set(-1,0,0,0,1,0,0,0,1);function Rv(i,e){function t(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function n(h,m){m.color.getRGB(h.fogColor.value,kh(i)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function s(h,m,x,b,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(h,m):m.isMeshLambertMaterial?(r(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(h,m),d(h,m)):m.isMeshPhongMaterial?(r(h,m),f(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(h,m),l(h,m),m.isMeshPhysicalMaterial&&p(h,m,M)):m.isMeshMatcapMaterial?(r(h,m),v(h,m)):m.isMeshDepthMaterial?r(h,m):m.isMeshDistanceMaterial?(r(h,m),_(h,m)):m.isMeshNormalMaterial?r(h,m):m.isLineBasicMaterial?(o(h,m),m.isLineDashedMaterial&&a(h,m)):m.isPointsMaterial?c(h,m,x,b):m.isSpriteMaterial?u(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,t(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===bn&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,t(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===bn&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,t(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,t(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const x=e.get(m),b=x.envMap,M=x.envMapRotation;b&&(h.envMap.value=b,h.envMapRotation.value.setFromMatrix4(Av.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(ef),h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,h.aoMapTransform))}function o(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform))}function a(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function c(h,m,x,b){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*x,h.scale.value=b*.5,m.map&&(h.map.value=m.map,t(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function u(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function f(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function d(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function l(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function p(h,m,x){h.ior.value=m.ior,m.diffuseRoughness>0&&(h.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===bn&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.retroreflectivity>0&&(h.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=x.texture,h.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,h.specularIntensityMapTransform))}function v(h,m){m.matcap&&(h.matcap.value=m.matcap)}function _(h,m){const x=e.get(m).light;h.referencePosition.value.setFromMatrixPosition(x.matrixWorld),h.nearDistance.value=x.shadow.camera.near,h.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cv(i,e,t,n){let s={},r={};function o(x,b){const M=b.program;n.uniformBlockBinding(x,M,s[x.id])}function a(x,b){let M=s[x.id];M===void 0&&(v(x),M=c(x),s[x.id]=M,x.addEventListener("dispose",h));const C=b.program;n.updateUBOMapping(x,C);const A=e.render.frame;r[x.id]!==A&&(u(x),r[x.id]=A)}function c(x){const b=i.createBuffer(),M=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,C),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function u(x){const b=s[x.id],M=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,g=M.length;A<g;A++){const y=M[A];if(Array.isArray(y))for(let T=0,E=y.length;T<E;T++)f(y[T],A,T,C);else f(y,A,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,b,M,C){if(l(x,b,M,C)===!0){const A=x.__offset,g=x.value;if(Array.isArray(g)){let y=0;for(let T=0;T<g.length;T++){const E=g[T],z=_(E,!0);d(E,x.__data,y),y+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,x.__data)}}function d(x,b,M){typeof x=="number"||typeof x=="boolean"?b[M]=x:x.isMatrix3?(b[M]=x.elements[0],b[M+1]=x.elements[1],b[M+2]=x.elements[2],b[M+3]=0,b[M+4]=x.elements[3],b[M+5]=x.elements[4],b[M+6]=x.elements[5],b[M+7]=0,b[M+8]=x.elements[6],b[M+9]=x.elements[7],b[M+10]=x.elements[8],b[M+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-M),M):x.toArray(b,M)}function l(x,b,M,C){const A=x.value,g=b+"_"+M;if(Array.isArray(A)){C[g]===void 0&&(C[g]=[]);const y=C[g];let T=!1;for(let E=0;E<A.length;E++)p(A[E],y,E)===!0&&(T=!0);return T}return p(A,C,g)}function p(x,b,M){if(b[M]===void 0)return typeof x=="number"||typeof x=="boolean"?b[M]=x:ArrayBuffer.isView(x)?b[M]=x.slice():b[M]=x.clone(),!0;{const C=b[M];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return b[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function v(x){const b=x.uniforms;let M=0;const C=16;for(let g=0,y=b.length;g<y;g++){const T=Array.isArray(b[g])?b[g]:[b[g]];for(let E=0,z=T.length;E<z;E++){const L=T[E],F=Array.isArray(L.value)?L.value:[L.value],U=Array.isArray(b[g])||Array.isArray(L.value);let G=M;for(let B=0,oe=F.length;B<oe;B++){const q=F[B],te=_(q,U),se=M%C,_e=se%te.boundary,K=se+_e;M+=_e,K!==0&&C-K<te.storage&&(M+=C-K),B===0&&(G=M),M+=te.storage}const W=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new W((M-G)/Float32Array.BYTES_PER_ELEMENT),L.__offset=G}}const A=M%C;return A>0&&(M+=C-A),x.__size=M,x.__cache={},this}function _(x,b){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):rt("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function h(x){const b=x.target;b.removeEventListener("dispose",h),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:o,update:a,dispose:m}}const Pv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function Dv(){return Pi===null&&(Pi=new Ms(Pv,16,16,ks,hi),Pi.name="DFG_LUT",Pi.minFilter=Cn,Pi.magFilter=Cn,Pi.wrapS=zi,Pi.wrapT=zi,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class Lv{constructor(e={}){const{canvas:t=md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:l=!1,outputBufferType:p=qn}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const _=p,h=new Set([Xc,Wc,Hc]),m=new Set([qn,Fi,po,Mr,kc,Gc]),x=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]};let C=null,A=null;const g=[],y=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let z=!1,L=null,F=null,U=null,G=null;this._outputColorSpace=nn;let W=0,B=0,oe=null,q=-1,te=null;const se=new Bt,_e=new Bt;let K=null;const Y=new Oe(0);let ie=0,ve=t.width,Me=t.height,j=1,Ee=null,Ye=null;const Fe=new Bt(0,0,ve,Me),Xe=new Bt(0,0,ve,Me);let at=!1;const ye=new br,P=new Kc;let $=!1,le=!1;const pe=new ct,be=new k,me=new Bt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Ze(){return oe===null?j:1}let V=n;function lt(I,X){return t.getContext(I,X)}let Te,He,Se,ht,D,R,w,S,N,ee,H,J,he,Z,Q,we,O,fe,ge,Ue,Ie,Ne,tt;try{const I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nc}`),t.addEventListener("webglcontextlost",et,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Ve,!1),V===null){const X="webgl2";if(V=lt(X,I),V===null)throw lt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(I){throw t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),Dt("WebGLRenderer: "+I.message),I}function ut(){Te=new U1(V),Te.init(),Ie=new bv(V,Te),He=new w1(V,Te,e,Ie),Se=new yv(V,Te),He.reversedDepthBuffer&&l&&Se.buffers.depth.setReversed(!0),F=V.createFramebuffer(),U=V.createFramebuffer(),G=V.createFramebuffer(),ht=new O1(V),D=new ov,R=new Mv(V,Te,Se,D,He,Ie,ht),w=new z1(E),S=new kp(V),Ne=new b1(V,S),N=new N1(V,S,ht,Ne),ee=new k1(V,N,S,Ne,ht),fe=new B1(V,He,R),Q=new E1(D),H=new rv(E,w,Te,He,Ne,Q),J=new Rv(E,D),he=new lv,Z=new pv(Te),O=new M1(E,w,Se,ee,v,c),we=new _v(E,ee,He),tt=new Cv(V,ht,He,Se),ge=new S1(V,Te,ht),Ue=new F1(V,Te,ht),ht.programs=H.programs,E.capabilities=He,E.extensions=Te,E.properties=D,E.renderLists=he,E.shadowMap=we,E.state=Se,E.info=ht}_!==qn&&(T=new V1(_,t.width,t.height,a,s,r));const Le=new Tv(E,V);this.xr=Le,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const I=Te.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Te.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(I){I!==void 0&&(j=I,this.setSize(ve,Me,!1))},this.getSize=function(I){return I.set(ve,Me)},this.setSize=function(I,X,de=!0){if(Le.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=I,Me=X,t.width=Math.floor(I*j),t.height=Math.floor(X*j),de===!0&&(t.style.width=I+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,I,X)},this.getDrawingBufferSize=function(I){return I.set(ve*j,Me*j).floor()},this.setDrawingBufferSize=function(I,X,de){ve=I,Me=X,j=de,t.width=Math.floor(I*de),t.height=Math.floor(X*de),this.setViewport(0,0,I,X)},this.setEffects=function(I){if(_===qn){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let X=0;X<I.length;X++)if(I[X].isOutputPass===!0){rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(se)},this.getViewport=function(I){return I.copy(Fe)},this.setViewport=function(I,X,de,ne){I.isVector4?Fe.set(I.x,I.y,I.z,I.w):Fe.set(I,X,de,ne),Se.viewport(se.copy(Fe).multiplyScalar(Ze()).round())},this.getScissor=function(I){return I.copy(Xe)},this.setScissor=function(I,X,de,ne){I.isVector4?Xe.set(I.x,I.y,I.z,I.w):Xe.set(I,X,de,ne),Se.scissor(_e.copy(Xe).multiplyScalar(Ze()).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(I){Se.setScissorTest(at=I)},this.setOpaqueSort=function(I){Ee=I},this.setTransparentSort=function(I){Ye=I},this.getClearColor=function(I){return I.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(I=!0,X=!0,de=!0){let ne=0;if(I){let re=!1;if(oe!==null){const Ge=oe.texture.format;re=h.has(Ge)}if(re){const Ge=oe.texture.type,Ke=m.has(Ge),Be=O.getClearColor(),qe=O.getClearAlpha(),nt=Be.r,dt=Be.g,bt=Be.b;Ke?(x[0]=nt,x[1]=dt,x[2]=bt,x[3]=qe,V.clearBufferuiv(V.COLOR,0,x)):(b[0]=nt,b[1]=dt,b[2]=bt,b[3]=qe,V.clearBufferiv(V.COLOR,0,b))}else ne|=V.COLOR_BUFFER_BIT}X&&(ne|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),L=I},this.dispose=function(){t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Ve,!1),O.dispose(),he.dispose(),Z.dispose(),R.dispose(),D.dispose(),w.dispose(),ee.dispose(),N.dispose(),Ne.dispose(),tt.dispose(),H.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",dn),Le.removeEventListener("sessionend",ts),Bn.stop()};function et(I){I.preventDefault(),M0("WebGLRenderer: Context Lost."),z=!0}function ft(){M0("WebGLRenderer: Context Restored."),z=!1;const I=ht.autoReset,X=we.enabled,de=we.autoUpdate,ne=we.needsUpdate,re=we.type;ut(),ht.autoReset=I,we.enabled=X,we.autoUpdate=de,we.needsUpdate=ne,we.type=re}function Ve(I){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Pt(I){const X=I.target;X.removeEventListener("dispose",Pt),tn(X)}function tn(I){Xt(I),D.remove(I)}function Xt(I){const X=D.get(I).programs;X!==void 0&&(X.forEach(function(de){H.releaseProgram(de)}),I.isShaderMaterial&&H.releaseShaderCache(I))}this.renderBufferDirect=function(I,X,de,ne,re,Ge){X===null&&(X=xe);const Ke=re.isMesh&&re.matrixWorld.determinantAffine()<0,Be=If(I,X,de,ne,re);Se.setMaterial(ne,Ke);let qe=de.index,nt=1;if(ne.wireframe===!0){if(qe=N.getWireframeAttribute(de),qe===void 0)return;nt=2}const dt=de.drawRange,bt=de.attributes.position;let Qe=dt.start*nt,St=(dt.start+dt.count)*nt;Ge!==null&&(Qe=Math.max(Qe,Ge.start*nt),St=Math.min(St,(Ge.start+Ge.count)*nt)),qe!==null?(Qe=Math.max(Qe,0),St=Math.min(St,qe.count)):bt!=null&&(Qe=Math.max(Qe,0),St=Math.min(St,bt.count));const rn=St-Qe;if(rn<0||rn===1/0)return;Ne.setup(re,ne,Be,de,qe);let kt,Ot=ge;if(qe!==null&&(kt=S.get(qe),Ot=Ue,Ot.setIndex(kt)),re.isMesh)ne.wireframe===!0?(Se.setLineWidth(ne.wireframeLinewidth*Ze()),Ot.setMode(V.LINES)):Ot.setMode(V.TRIANGLES);else if(re.isLine){let Sn=ne.linewidth;Sn===void 0&&(Sn=1),Se.setLineWidth(Sn*Ze()),re.isLineSegments?Ot.setMode(V.LINES):re.isLineLoop?Ot.setMode(V.LINE_LOOP):Ot.setMode(V.LINE_STRIP)}else re.isPoints?Ot.setMode(V.POINTS):re.isSprite&&Ot.setMode(V.TRIANGLES);if(re.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))Ot.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Sn=re._multiDrawStarts,je=re._multiDrawCounts,In=re._multiDrawCount,Lt=qe?S.get(qe).bytesPerElement:1,Es=D.get(ne).currentProgram.getUniforms();for(let wn=0;wn<In;wn++)Es.setValue(V,"_gl_DrawID",wn),Ot.render(Sn[wn]/Lt,je[wn])}else if(re.isInstancedMesh)Ot.renderInstances(Qe,rn,re.count);else if(de.isInstancedBufferGeometry){const Sn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,je=Math.min(de.instanceCount,Sn);Ot.renderInstances(Qe,rn,je)}else Ot.render(Qe,rn)};function Pr(I,X,de,ne){L!==null&&I.isNodeMaterial&&L.setObject(ne,I),$===!0&&Q.setState(I,de,!1),I.transparent===!0&&I.side===Mi&&I.forceSinglePass===!1?(I.side=bn,I.needsUpdate=!0,Lr(I,X,ne),I.side=Bs,I.needsUpdate=!0,Lr(I,X,ne),I.side=Mi):Lr(I,X,ne)}this.compile=function(I,X,de=null){de===null&&(de=I),L!==null&&L.renderStart(I,X,de),A=Z.get(de),A.init(X),y.push(A),de.traverseVisible(function(re){re.isLight&&re.layers.test(X.layers)&&(A.pushLight(re),re.castShadow&&A.pushShadow(re))}),I!==de&&I.traverseVisible(function(re){re.isLight&&re.layers.test(X.layers)&&(A.pushLight(re),re.castShadow&&A.pushShadow(re))}),A.setupLights(),L!==null&&L.updateLights(A.state.lightsArray),le=this.localClippingEnabled,$=Q.init(this.clippingPlanes,le),$===!0&&Q.setGlobalState(this.clippingPlanes,X),L!==null&&we.render(A.state.shadowsArray,de,X);const ne=new Set;return I.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ge=re.material;if(Ge)if(Array.isArray(Ge))for(let Ke=0;Ke<Ge.length;Ke++){const Be=Ge[Ke];Pr(Be,de,X,re),ne.add(Be)}else Pr(Ge,de,X,re),ne.add(Ge)}),A=y.pop(),L!==null&&L.renderEnd(),ne},this.compileAsync=function(I,X,de=null){const ne=this.compile(I,X,de);return new Promise(re=>{function Ge(){if(ne.forEach(function(Ke){const qe=D.get(Ke).currentProgram;(qe===void 0||qe.isReady())&&ne.delete(Ke)}),ne.size===0){re(I);return}setTimeout(Ge,10)}Te.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Ss=null;function Dr(I){Ss&&Ss(I)}function dn(){Bn.stop()}function ts(){Bn.start()}const Bn=new Wh;Bn.setAnimationLoop(Dr),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(I){Ss=I,Le.setAnimationLoop(I),I===null?Bn.stop():Bn.start()},Le.addEventListener("sessionstart",dn),Le.addEventListener("sessionend",ts),this.render=function(I,X){if(X!==void 0&&X.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;L!==null&&L.renderStart(I,X);const de=Le.enabled===!0&&Le.isPresenting===!0,ne=T!==null&&(oe===null||de)&&T.begin(E,oe);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(X),X=Le.getCamera()),I.isScene===!0&&I.onBeforeRender(E,I,X,oe),A=Z.get(I,y.length),A.init(X),A.state.textureUnits=R.getTextureUnits(),y.push(A),pe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?P.setFromArrayCamera(X):ye.setFromProjectionMatrix(pe,wi,X.reversedDepth),le=this.localClippingEnabled,$=Q.init(this.clippingPlanes,le),C=he.get(I,g.length),C.init(),g.push(C),this.info.render.frame++,Le.enabled===!0&&Le.isPresenting===!0){const Ke=E.xr.getDepthSensingMesh();Ke!==null&&kn(Ke,X,-1/0,E.sortObjects)}kn(I,X,0,E.sortObjects),C.finish(),L!==null&&L.updateLights(A.state.lightsArray),E.sortObjects===!0&&C.sort(Ee,Ye),Re=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Re&&O.addToRenderList(C,I),this.info.autoReset===!0&&this.info.reset(),$===!0&&Q.beginShadows();const re=A.state.shadowsArray;if(we.render(re,I,X),$===!0&&Q.endShadows(),(ne&&T.hasRenderPass())===!1){const Ke=C.opaque,Be=C.transmissive;if(A.setupLights(),X.isArrayCamera){const qe=X.cameras;if(Be.length>0)for(let nt=0,dt=qe.length;nt<dt;nt++){const bt=qe[nt];bo(Ke,Be,I,bt)}Re&&O.render(I);for(let nt=0,dt=qe.length;nt<dt;nt++){const bt=qe[nt];ws(C,I,bt,bt.viewport)}}else Be.length>0&&bo(Ke,Be,I,X),Re&&O.render(I),ws(C,I,X)}oe!==null&&B===0&&(R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe)),ne&&T.end(E),I.isScene===!0&&I.onAfterRender(E,I,X),Ne.resetDefaultState(),q=-1,te=null,y.pop(),y.length>0?(A=y[y.length-1],R.setTextureUnits(A.state.textureUnits),$===!0&&Q.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,g.pop(),g.length>0?C=g[g.length-1]:C=null,L!==null&&L.renderEnd()};function kn(I,X,de,ne){if(I.visible===!1)return;if(I.layers.test(X.layers)){if(I.isGroup)de=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(X);else if(I.isLight)A.pushLight(I),I.castShadow&&A.pushShadow(I);else if(I.isSprite){const Ke=X.isArrayCamera?P:ye;if(!I.frustumCulled||I.intersectsFrustum(Ke)){ne&&me.setFromMatrixPosition(I.matrixWorld).applyMatrix4(pe);const Be=ee.update(I),qe=I.material;qe.visible&&C.push(I,Be,qe,de,me.z,null,X)}}else if(I.isMesh||I.isLine||I.isPoints){const Ke=X.isArrayCamera?P:ye;if(!I.frustumCulled||I.intersectsFrustum(Ke)){const Be=ee.update(I),qe=I.material;if(ne&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),me.copy(I.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),me.copy(Be.boundingSphere.center)),me.applyMatrix4(I.matrixWorld).applyMatrix4(pe)),Array.isArray(qe)){const nt=Be.groups;for(let dt=0,bt=nt.length;dt<bt;dt++){const Qe=nt[dt],St=qe[Qe.materialIndex];St&&St.visible&&C.push(I,Be,St,de,me.z,Qe,X)}}else qe.visible&&C.push(I,Be,qe,de,me.z,null,X)}}}const Ge=I.children;for(let Ke=0,Be=Ge.length;Ke<Be;Ke++)kn(Ge[Ke],X,de,ne)}function ws(I,X,de,ne){const{opaque:re,transmissive:Ge,transparent:Ke}=I;A.setupLightsView(de),$===!0&&Q.setGlobalState(E.clippingPlanes,de),ne&&Se.viewport(se.copy(ne)),re.length>0&&qs(re,X,de),Ge.length>0&&qs(Ge,X,de),Ke.length>0&&qs(Ke,X,de),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function bo(I,X,de,ne){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ne.id]===void 0){const Qe=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ne.id]=new Zn(1,1,{generateMipmaps:!0,type:Qe?hi:qn,minFilter:Ui,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ge=A.state.transmissionRenderTarget[ne.id],Ke=ne.viewport||se;Ge.setSize(Ke.z*E.transmissionResolutionScale,Ke.w*E.transmissionResolutionScale);const Be=E.getRenderTarget(),qe=E.getActiveCubeFace(),nt=E.getActiveMipmapLevel();E.setRenderTarget(Ge),E.getClearColor(Y),ie=E.getClearAlpha(),ie<1&&E.setClearColor(16777215,.5),E.clear(),Re&&O.render(de);const dt=E.toneMapping;E.toneMapping=Ni;const bt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),A.setupLightsView(ne),$===!0&&Q.setGlobalState(E.clippingPlanes,ne),qs(I,de,ne),R.updateMultisampleRenderTarget(Ge),R.updateRenderTargetMipmap(Ge),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let St=0,rn=X.length;St<rn;St++){const kt=X[St],{object:Ot,geometry:Sn,material:je,group:In}=kt;if(je.side===Mi&&Ot.layers.test(ne.layers)){const Lt=je.side;je.side=bn,je.needsUpdate=!0,So(Ot,de,ne,Sn,je,In),je.side=Lt,je.needsUpdate=!0,Qe=!0}}Qe===!0&&(R.updateMultisampleRenderTarget(Ge),R.updateRenderTargetMipmap(Ge))}E.setRenderTarget(Be,qe,nt),E.setClearColor(Y,ie),bt!==void 0&&(ne.viewport=bt),E.toneMapping=dt}function qs(I,X,de){const ne=X.isScene===!0?X.overrideMaterial:null;for(let re=0,Ge=I.length;re<Ge;re++){const Ke=I[re],{object:Be,geometry:qe,group:nt}=Ke;let dt=Ke.material;dt.allowOverride===!0&&ne!==null&&(dt=ne),Be.layers.test(de.layers)&&So(Be,X,de,qe,dt,nt)}}function So(I,X,de,ne,re,Ge){L!==null&&re.isNodeMaterial&&L.setObject(I,re),I.onBeforeRender(E,X,de,ne,re,Ge),I.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),re.onBeforeRender(E,X,de,ne,I,Ge),re.transparent===!0&&re.side===Mi&&re.forceSinglePass===!1?(re.side=bn,re.needsUpdate=!0,E.renderBufferDirect(de,X,ne,re,I,Ge),re.side=Bs,re.needsUpdate=!0,E.renderBufferDirect(de,X,ne,re,I,Ge),re.side=Mi):E.renderBufferDirect(de,X,ne,re,I,Ge),I.onAfterRender(E,X,de,ne,re,Ge)}function Ys(I){let X=0;for(const de of I)de.texture!==null&&X++;return X}function Lr(I,X,de){X.isScene!==!0&&(X=xe);const ne=D.get(I),re=A.state.lights,Ge=A.state.shadowsArray,Ke=re.state.version,Be=H.getParameters(I,re.state,Ge,X,de,A.state.lightProbeGridArray),qe=H.getProgramCacheKey(Be);let nt=ne.programs;ne.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const dt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;ne.envMap=w.get(I.envMap||ne.environment,dt),ne.envMapRotation=ne.environment!==null&&I.envMap===null?X.environmentRotation:I.envMapRotation,nt===void 0&&(I.addEventListener("dispose",Pt),nt=new Map,ne.programs=nt,ne.programVariants=new Map);let bt=nt.get(qe);if(bt!==void 0){if(ne.currentProgram===bt&&ne.lightsStateVersion===Ke)return f0(I,Be),bt}else Be.uniforms=H.getUniforms(I),L!==null&&I.isNodeMaterial&&L.build(I,de,Be),I.onBeforeCompile(Be,E),bt=H.acquireProgram(Be,qe),nt.set(qe,bt),ne.uniforms=Be.uniforms;const Qe=ne.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Qe.clippingPlanes=Q.uniform),f0(I,Be),ne.needsLights=Uf(I),ne.lightsStateVersion=Ke,ne.needsLights&&(Qe.ambientLightColor.value=re.state.ambient,Qe.lightProbe.value=re.state.probe,Qe.sunLights.value=re.state.sun,Qe.sunLightShadows.value=re.state.sunShadow,Qe.directionalLights.value=re.state.directional,Qe.directionalLightShadows.value=re.state.directionalShadow,Qe.spotLights.value=re.state.spot,Qe.spotLightShadows.value=re.state.spotShadow,Qe.rectAreaLights.value=re.state.rectArea,Qe.ltc_1.value=re.state.rectAreaLTC1,Qe.ltc_2.value=re.state.rectAreaLTC2,Qe.pointLights.value=re.state.point,Qe.pointLightShadows.value=re.state.pointShadow,Qe.hemisphereLights.value=re.state.hemi,Qe.sunShadowMatrix.value=re.state.sunShadowMatrix,Qe.sunShadowCascade.value=re.state.sunShadowCascade,Qe.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Qe.spotLightMatrix.value=re.state.spotLightMatrix,Qe.spotLightMap.value=re.state.spotLightMap,Qe.pointShadowMatrix.value=re.state.pointShadowMatrix),ne.numLightProbeGrids=Ys(A.state.lightProbeGridArray),ne.currentProgram=bt,ne.uniformsList=null,bt}function Lf(I,X,de,ne,re){const Ge=D.get(I),Ke=Ge.currentProgram.id+","+ne+","+re;let Be=Ge.programVariants.get(Ke);return Be===void 0?(Be=Lr(I,X,de),Ge.programVariants.set(Ke,Be)):(Ge.currentProgram=Be,Ge.uniformsList=null,Ge.outputColorSpace=ne,Ge.toneMapping=re),Be}function h0(I){if(I.uniformsList===null){const X=I.currentProgram.getUniforms();I.uniformsList=ya.seqWithValue(X.seq,I.uniforms)}return I.uniformsList}function f0(I,X){const de=D.get(I);de.outputColorSpace=X.outputColorSpace,de.batching=X.batching,de.batchingColor=X.batchingColor,de.instancing=X.instancing,de.instancingColor=X.instancingColor,de.instancingMorph=X.instancingMorph,de.skinning=X.skinning,de.morphTargets=X.morphTargets,de.morphNormals=X.morphNormals,de.morphColors=X.morphColors,de.morphTargetsCount=X.morphTargetsCount,de.numClippingPlanes=X.numClippingPlanes,de.numIntersection=X.numClipIntersection,de.vertexAlphas=X.vertexAlphas,de.vertexTangents=X.vertexTangents,de.toneMapping=X.toneMapping}function If(I,X,de,ne,re){X.isScene!==!0&&(X=xe),R.resetTextureUnits();const Ge=X.fog,Ke=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,Be=oe===null?E.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Tt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,nt=w.get(ne.envMap||Ke,qe),dt=ne.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,bt=!!de.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Qe=!!de.morphAttributes.position,St=!!de.morphAttributes.normal,rn=!!de.morphAttributes.color;let kt=Ni;ne.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(kt=E.toneMapping);const Ot=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Sn=Ot!==void 0?Ot.length:0,je=D.get(ne),In=A.state.lights;if($===!0&&(le===!0||I!==te)){const qt=I===te&&ne.id===q;Q.setState(ne,I,qt)}let Lt=!1,Es=!1;ne.version===je.__version?je.needsLights&&je.lightsStateVersion!==In.state.version||re.isBatchedMesh&&je.batching===!1||!re.isBatchedMesh&&je.batching===!0||re.isBatchedMesh&&je.batchingColor===!0&&re._colorsTexture===null||re.isBatchedMesh&&je.batchingColor===!1&&re._colorsTexture!==null||re.isInstancedMesh&&je.instancing===!1||!re.isInstancedMesh&&je.instancing===!0||re.isSkinnedMesh&&je.skinning===!1||!re.isSkinnedMesh&&je.skinning===!0||re.isInstancedMesh&&je.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&je.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&je.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&je.instancingMorph===!1&&re.morphTexture!==null||je.envMap!==nt||ne.fog===!0&&je.fog!==Ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Q.numPlanes||je.numIntersection!==Q.numIntersection)||je.vertexAlphas!==dt||je.vertexTangents!==bt||je.morphTargets!==Qe||je.morphNormals!==St||je.morphColors!==rn||je.morphTargetsCount!==Sn||je.numLightProbeGrids!==Ys(A.state.lightProbeGridArray)?Lt=!0:(je.outputColorSpace!==Be||je.toneMapping!==kt)&&(Es=!0):(Lt=!0,je.__version=ne.version);let wn=je.currentProgram;(Lt===!0||Es===!0)&&(wn=Es===!0?Lf(ne,X,re,Be,kt):Lr(ne,X,re),L&&ne.isNodeMaterial&&L.onUpdateProgram(ne,wn,je));let wo=!1,ns=!1,Ts=!1;const At=wn.getUniforms(),_n=je.uniforms;if(Se.useProgram(wn.program)&&(wo=!0,ns=!0,Ts=!0),ne.id!==q&&(q=ne.id,ns=!0),wo||te!==I){Se.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),At.setValue(V,"projectionMatrix",I.projectionMatrix),At.setValue(V,"viewMatrix",I.matrixWorldInverse);const pn=At.map.cameraPosition;pn!==void 0&&pn.setValue(V,be.setFromMatrixPosition(I.matrixWorld)),He.logarithmicDepthBuffer&&At.setValue(V,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&At.setValue(V,"isOrthographic",I.isOrthographicCamera===!0),te!==I&&(te=I,ns=!0,Ts=!0)}if(je.needsLights&&(In.state.sunShadowMap.length>0&&At.setValue(V,"sunShadowMap",In.state.sunShadowMap,R),In.state.directionalShadowMap.length>0&&At.setValue(V,"directionalShadowMap",In.state.directionalShadowMap,R),In.state.spotShadowMap.length>0&&At.setValue(V,"spotShadowMap",In.state.spotShadowMap,R),In.state.pointShadowMap.length>0&&At.setValue(V,"pointShadowMap",In.state.pointShadowMap,R)),re.isSkinnedMesh){At.setOptional(V,re,"bindMatrix"),At.setOptional(V,re,"bindMatrixInverse");const qt=re.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),At.setValue(V,"boneTexture",qt.boneTexture,R))}re.isBatchedMesh&&(At.setOptional(V,re,"batchingTexture"),At.setValue(V,"batchingTexture",re._matricesTexture,R),At.setOptional(V,re,"batchingIdTexture"),At.setValue(V,"batchingIdTexture",re._indirectTexture,R),At.setOptional(V,re,"batchingColorTexture"),re._colorsTexture!==null&&At.setValue(V,"batchingColorTexture",re._colorsTexture,R));const fi=de.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&fe.update(re,de,wn),(ns||je.receiveShadow!==re.receiveShadow)&&(je.receiveShadow=re.receiveShadow,At.setValue(V,"receiveShadow",re.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(_n.envMapIntensity.value=X.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=Dv()),ns){if(At.setValue(V,"toneMappingExposure",E.toneMappingExposure),je.needsLights&&zf(_n,Ts),Ge&&ne.fog===!0&&J.refreshFogUniforms(_n,Ge),J.refreshMaterialUniforms(_n,ne,j,Me,A.state.transmissionRenderTarget[I.id]),je.needsLights&&je.numLightProbeGrids>0){const qt=M;let pn=0;for(const Gi of A.state.lightProbeGridArray)Gi.texture!==null&&(qt.textures[pn]=Gi.texture,qt.min[pn]=Gi.boundingBox.min,qt.max[pn]=Gi.boundingBox.max,qt.resolution[pn]=Gi.resolution,pn++);for(const Gi in qt)qt[Gi].length=pn;_n.probesSH.value=qt.textures,_n.probesMin.value=qt.min,_n.probesMax.value=qt.max,_n.probesResolution.value=qt.resolution}ya.upload(V,h0(je),_n,R)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ya.upload(V,h0(je),_n,R),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&At.setValue(V,"center",re.center),At.setValue(V,"modelViewMatrix",re.modelViewMatrix),At.setValue(V,"normalMatrix",re.normalMatrix),At.setValue(V,"modelMatrix",re.matrixWorld),ne.uniformsGroups!==void 0){const qt=ne.uniformsGroups;for(let pn=0,Gi=qt.length;pn<Gi;pn++){const p0=qt[pn];tt.update(p0,wn),tt.bind(p0,wn)}}return wn}function zf(I,X){I.ambientLightColor.needsUpdate=X,I.lightProbe.needsUpdate=X,I.sunLights.needsUpdate=X,I.sunLightShadows.needsUpdate=X,I.directionalLights.needsUpdate=X,I.directionalLightShadows.needsUpdate=X,I.pointLights.needsUpdate=X,I.pointLightShadows.needsUpdate=X,I.spotLights.needsUpdate=X,I.spotLightShadows.needsUpdate=X,I.rectAreaLights.needsUpdate=X,I.hemisphereLights.needsUpdate=X}function Uf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(I,X,de){const ne=D.get(I);ne.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),D.get(I.texture).__webglTexture=X,D.get(I.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:de,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,X){const de=D.get(I);de.__webglFramebuffer=X,de.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(I,X=0,de=0){oe=I,W=X,B=de;let ne=null,re=!1,Ge=!1;if(I){const Be=D.get(I);if(Be.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(V.FRAMEBUFFER,Be.__webglFramebuffer),se.copy(I.viewport),_e.copy(I.scissor),K=I.scissorTest,Se.viewport(se),Se.scissor(_e),Se.setScissorTest(K),q=-1;return}else if(Be.__webglFramebuffer===void 0)R.setupRenderTarget(I);else if(Be.__hasExternalTextures)R.rebindTextures(I,D.get(I.texture).__webglTexture,D.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const dt=I.depthTexture;if(Be.__boundDepthTexture!==dt){if(dt!==null&&D.has(dt)&&(I.width!==dt.image.width||I.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(I)}}const qe=I.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ge=!0);const nt=D.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?ne=nt[X][de]:ne=nt[X],re=!0):I.samples>0&&R.useMultisampledRTT(I)===!1?ne=D.get(I).__webglMultisampledFramebuffer:Array.isArray(nt)?ne=nt[de]:ne=nt,se.copy(I.viewport),_e.copy(I.scissor),K=I.scissorTest}else se.copy(Fe).multiplyScalar(j).floor(),_e.copy(Xe).multiplyScalar(j).floor(),K=at;if(de!==0&&(ne=F),Se.bindFramebuffer(V.FRAMEBUFFER,ne)&&Se.drawBuffers(I,ne),Se.viewport(se),Se.scissor(_e),Se.setScissorTest(K),re){const Be=D.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,de)}else if(Ge){const Be=X;for(let qe=0;qe<I.textures.length;qe++){const nt=D.get(I.textures[qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qe,nt.__webglTexture,de,Be)}}else if(I!==null&&de!==0){const Be=D.get(I.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,de)}q=-1};function d0(I){const X=D.get(I);return(X.__readFormat!==I.format||X.__readType!==I.type)&&(X.__readFormat=I.format,X.__readType=I.type,X.__formatReadable=He.textureFormatReadable(I.format),X.__typeReadable=He.textureTypeReadable(I.type)),X}this.readRenderTargetPixels=function(I,X,de,ne,re,Ge,Ke,Be=0){if(!(I&&I.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=D.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ke!==void 0&&(qe=qe[Ke],Array.isArray(qe)&&(qe=qe[0])),qe){Se.bindFramebuffer(V.FRAMEBUFFER,qe);try{const nt=I.textures[Be],dt=nt.format,bt=nt.type;I.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be);const Qe=d0(nt);if(Qe.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Qe.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=I.width-ne&&de>=0&&de<=I.height-re&&V.readPixels(X,de,ne,re,Ie.convert(dt),Ie.convert(bt),Ge)}finally{const nt=oe!==null?D.get(oe).__webglFramebuffer:null;Se.bindFramebuffer(V.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(I,X,de,ne,re,Ge,Ke,Be=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=D.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ke!==void 0&&(qe=qe[Ke],Array.isArray(qe)&&(qe=qe[0])),qe)if(X>=0&&X<=I.width-ne&&de>=0&&de<=I.height-re){Se.bindFramebuffer(V.FRAMEBUFFER,qe);const nt=I.textures[Be],dt=nt.format,bt=nt.type;I.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Be);const Qe=d0(nt);if(Qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,St),V.bufferData(V.PIXEL_PACK_BUFFER,Ge.byteLength,V.STREAM_READ),V.readPixels(X,de,ne,re,Ie.convert(dt),Ie.convert(bt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const rn=oe!==null?D.get(oe).__webglFramebuffer:null;Se.bindFramebuffer(V.FRAMEBUFFER,rn);const kt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await gd(V,kt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,St),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ge),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(St),V.deleteSync(kt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,X=null,de=0){const ne=Math.pow(2,-de),re=Math.floor(I.image.width*ne),Ge=Math.floor(I.image.height*ne),Ke=X!==null?X.x:0,Be=X!==null?X.y:0;R.setTexture2D(I,0),V.copyTexSubImage2D(V.TEXTURE_2D,de,0,0,Ke,Be,re,Ge),Se.unbindTexture()},this.copyTextureToTexture=function(I,X,de=null,ne=null,re=0,Ge=0){let Ke,Be,qe,nt,dt,bt,Qe,St,rn;const kt=I.isCompressedTexture?I.mipmaps[Ge]:I.image;if(de!==null)Ke=de.max.x-de.min.x,Be=de.max.y-de.min.y,qe=de.isBox3?de.max.z-de.min.z:1,nt=de.min.x,dt=de.min.y,bt=de.isBox3?de.min.z:0;else{const At=Math.pow(2,-re);Ke=Math.floor(kt.width*At),Be=Math.floor(kt.height*At),I.isDataArrayTexture?qe=kt.depth:I.isData3DTexture?qe=Math.floor(kt.depth*At):qe=1,nt=0,dt=0,bt=0}ne!==null?(Qe=ne.x,St=ne.y,rn=ne.z):(Qe=0,St=0,rn=0);const Ot=Ie.convert(X.format),Sn=Ie.convert(X.type);let je;X.isData3DTexture?(R.setTexture3D(X,0),je=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(R.setTexture2DArray(X,0),je=V.TEXTURE_2D_ARRAY):(R.setTexture2D(X,0),je=V.TEXTURE_2D),Se.activeTexture(V.TEXTURE0),Se.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),Se.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Se.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const In=Se.getParameter(V.UNPACK_ROW_LENGTH),Lt=Se.getParameter(V.UNPACK_IMAGE_HEIGHT),Es=Se.getParameter(V.UNPACK_SKIP_PIXELS),wn=Se.getParameter(V.UNPACK_SKIP_ROWS),wo=Se.getParameter(V.UNPACK_SKIP_IMAGES);Se.pixelStorei(V.UNPACK_ROW_LENGTH,kt.width),Se.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt.height),Se.pixelStorei(V.UNPACK_SKIP_PIXELS,nt),Se.pixelStorei(V.UNPACK_SKIP_ROWS,dt),Se.pixelStorei(V.UNPACK_SKIP_IMAGES,bt);const ns=I.isDataArrayTexture||I.isData3DTexture,Ts=X.isDataArrayTexture||X.isData3DTexture;if(I.isDepthTexture){const At=D.get(I),_n=D.get(X),fi=D.get(At.__renderTarget),qt=D.get(_n.__renderTarget);Se.bindFramebuffer(V.READ_FRAMEBUFFER,fi.__webglFramebuffer),Se.bindFramebuffer(V.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let pn=0;pn<qe;pn++)ns&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(I).__webglTexture,re,bt+pn),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,D.get(X).__webglTexture,Ge,rn+pn)),V.blitFramebuffer(nt,dt,nt+Ke,dt+Be,Qe,St,Qe+Ke,St+Be,V.DEPTH_BUFFER_BIT,V.NEAREST);Se.bindFramebuffer(V.READ_FRAMEBUFFER,null),Se.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(re!==0||I.isRenderTargetTexture||D.has(I)){const At=D.get(I),_n=D.get(X);Se.bindFramebuffer(V.READ_FRAMEBUFFER,U),Se.bindFramebuffer(V.DRAW_FRAMEBUFFER,G);for(let fi=0;fi<qe;fi++)ns?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,At.__webglTexture,re,bt+fi):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,At.__webglTexture,re),Ts?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_n.__webglTexture,Ge,rn+fi):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,_n.__webglTexture,Ge),re!==0?V.blitFramebuffer(nt,dt,nt+Ke,dt+Be,Qe,St,Qe+Ke,St+Be,V.COLOR_BUFFER_BIT,V.NEAREST):Ts?V.copyTexSubImage3D(je,Ge,Qe,St,rn+fi,nt,dt,Ke,Be):V.copyTexSubImage2D(je,Ge,Qe,St,nt,dt,Ke,Be);Se.bindFramebuffer(V.READ_FRAMEBUFFER,null),Se.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Ts?I.isDataTexture||I.isData3DTexture?V.texSubImage3D(je,Ge,Qe,St,rn,Ke,Be,qe,Ot,Sn,kt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(je,Ge,Qe,St,rn,Ke,Be,qe,Ot,kt.data):V.texSubImage3D(je,Ge,Qe,St,rn,Ke,Be,qe,Ot,Sn,kt):I.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ge,Qe,St,Ke,Be,Ot,Sn,kt.data):I.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ge,Qe,St,kt.width,kt.height,Ot,kt.data):V.texSubImage2D(V.TEXTURE_2D,Ge,Qe,St,Ke,Be,Ot,Sn,kt);Se.pixelStorei(V.UNPACK_ROW_LENGTH,In),Se.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Lt),Se.pixelStorei(V.UNPACK_SKIP_PIXELS,Es),Se.pixelStorei(V.UNPACK_SKIP_ROWS,wn),Se.pixelStorei(V.UNPACK_SKIP_IMAGES,wo),Ge===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&V.generateMipmap(je),Se.unbindTexture()},this.initRenderTarget=function(I){D.get(I).__webglFramebuffer===void 0&&R.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?R.setTextureCube(I,0):I.isData3DTexture?R.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?R.setTexture2DArray(I,0):R.setTexture2D(I,0),Se.unbindTexture()},this.resetState=function(){W=0,B=0,oe=null,Se.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const ti=.3,Zt=1.2,Iv=3.2,Ce={x0:-1.5,x1:1.5,z0:.4,z1:6.4,h:2.5},ae={x0:-2,x1:2,z0:-40,z1:0,h:3},ce={x0:2.4,x1:16.4,z0:-31,z1:-17,h:5.5},Pe={x:-2,z0:-16,z1:-11,y0:.8,y1:2.2},st={z0:-25,z1:-23,h:2.3},Kt={w:1.3,y0:.1,y1:2},mr={x:9.5,z:-24},Ht=-36,gt={z0:-25.2,z1:-22.8,h:2.6},De={x0:16.8,x1:22.4,z0:-27.6,z1:-20.4,h:3.4},ta={x0:-2.4,x1:22.8,z0:-40.4,z1:6.8},Je={wheelCam:{x:0,z:.65},tool:{x:1.32,y:.75,z:-7.98},cabinet:{x:-1.86,y:.75,z:-18.6},socket:{x:1.86,y:.85,z:-22.35},deadCrawler:{x:1.25,z:-20.2},levers:[{x:ce.x0+.24,y:1,z:-19.4,color:"orange",face:[1,0]},{x:ce.x1-.24,y:1,z:-27.2,color:"teal",face:[-1,0]},{x:8.6,y:1,z:ce.z0+.24,color:"red",face:[0,1]}],logs:[{key:"log.1",x:-1.62,y:.52,z:-24.22},{key:"log.2",x:5.95,y:1,z:-17.35},{key:"log.3",x:14.55,y:.93,z:-29.25}],bayLog:{x:8.3,y:1.1,z:-23.6},terminal:{x:16.15,y:1.15,z:-25.85},perches:[{x:9,y:5.45,z:-21,s:"ceil"},{x:16.3,y:3.2,z:-19.8,s:"wallE"},{x:5,y:3.6,z:-30.9,s:"wallS"}],throwables:[[11.9,-21.6],[6.9,-28.9],[12.4,-27.9]]},wl={x:0,z:5.3,yaw:0};function Ma(i,e){return e>.2?"airlock":i>2.2?i>ce.x1+.2?"gallery":"bay":"corridor"}function Du({hatchOpen:i=!0,bayDoor:e=!0,seal:t=!1,cabinet:n=!0}={}){const s=[],r=[],o=(a,c,u,f)=>s.push({x0:Math.min(a,c),x1:Math.max(a,c),z0:Math.min(u,f),z1:Math.max(u,f)});return o(-1.8,-1.5,.4,6.4),o(1.5,1.8,.4,6.4),o(-1.8,1.8,6.4,6.8),o(-2.4,-1.3/2,0,.4),o(Kt.w/2,2.4,0,.4),o(1.05,1.5,1.7,4.1),i?o(-1.2,-.6,-1.3,0):o(-1.3/2,Kt.w/2,-.1,.4),o(-2.4,-2,-40,0),o(2,2.4,-40,st.z0),o(2,2.4,st.z1,0),e||o(2,2.4,st.z0,st.z1),n&&o(-2,-1.66,-19,-18.2),o(.9,1.6,-20.6,-19.8),o(-2,2,Ht-.7,Ht+.4),o(-2,-1,-29.7,-21.3),o(1.2,2,-10.2,-7.6),o(.9,2,-35.2,-34.2),o(16.4,16.8,-31.4,gt.z0),o(16.4,16.8,gt.z1,-16.6),o(2.4,16.8,-31.4,-31),o(2.4,16.8,-17,-16.6),t||o(16.3,16.8,gt.z0,gt.z1),o(De.x1,De.x1+.4,De.z0-.4,De.z1+.4),o(16.8,De.x1,De.z0-.4,De.z0),o(16.8,De.x1,De.z1,De.z1+.4),o(5,7.5,-17.9,-17),o(15.6,16.4,-22.2,-18.8),o(3.2,4.8,-30.6,-29),o(13.8,15.4,-30.4,-29.2),r.push({x:mr.x,z:mr.z,r:1.45}),r.push({x:6.2,z:-27.4,r:.35},{x:12.9,z:-20.4,r:.35}),{boxes:s,circles:r}}const Vr=Math.PI/2,jr=[{name:"шлюз: вход, люк на станцию",pos:[.15,Zt,5.75],yaw:.04,pitch:-.02,hatch:0,rig:0},{name:"шлюз: внешний люк в инее",pos:[-.35,Zt,2.2],yaw:Math.PI-.1,pitch:.06,hatch:0,rig:0},{name:"Узор спящий: иней вблизи оказывается рисунком",pos:[-.86,Zt,4.6],yaw:Vr+.45,pitch:-.12,hatch:0,rig:0},{name:"коридор кольца: холодный аварийный свет",pos:[.25,Zt,-3.2],yaw:.05,pitch:.04,rig:1},{name:"коридор: тёплый островок, где жил экипаж",pos:[.95,Zt,-20.6],yaw:.42,pitch:-.06,rig:0},{name:"коридор: баррикада и вещи экипажа",pos:[.7,Zt,-23.2],yaw:.14,pitch:0,rig:0},{name:"отражение в стекле: окно, астероид, Солнце",pos:[-1.05,Zt,-13.6],yaw:Vr+.04,pitch:.1,rig:0},{name:"отсек маяка А: общий вид от двери",pos:[3.3,Zt,-23.4],yaw:-Vr+.08,pitch:.3,rig:0},{name:"маяк А: прибор и кабели",pos:[6.9,Zt,-26.5],yaw:-2.3,pitch:.2,rig:0},{name:"маяк А: надписи экипажа и тень с ушами",pos:[10.1,Zt,-28.9],yaw:0,pitch:.42,rig:0},{name:"лапы с инструментом и перо-подвеска",pos:[.5,Zt,-15.4],yaw:.25,pitch:-.34,rig:1,inspect:1},{name:"Узор проснувшийся",pos:[12.6,Zt,-27.4],yaw:-.8,pitch:.12,wake:1,rig:0},{name:"сцена 1: лапы на штурвале люка",pos:[0,Zt,.65],yaw:0,pitch:-.06,hatch:0,pose:"wheel",wheel:.9},{name:"сцена 2: инструмент лежит на ящике",pos:[.55,Zt,-7.2],yaw:-.74,pitch:-.29,pose:"empty",toolOn:1,door:0,powered:!1,bat:"cabinet"},{name:"сцена 2: резак вскрывает шкаф с батареей",pos:[-.55,Zt,-17.6],yaw:.83,pitch:-.3,mode:"cut",beam:"cut",beamLen:1.3,cut:.55,bat:"cabinet",door:0,powered:!1,sparks:[-1.62,.706,-18.6],heat:.5},{name:"сцена 2: батарея в захвате у гнезда двери",pos:[.7,Zt,-21.3],yaw:-.835,pitch:-.22,bat:"held",cut:1,coverFall:1,door:0,powered:!1,beam:"grip",beamLen:.55},{name:"сцена 3: рубильник щитка, кабели своего цвета",pos:[4.2,Zt,-19.95],yaw:1.88,pitch:-.12},{name:"сцена 3: маяк замолчал, краулеры «Скобы»",pos:[4.2,Zt,-26.8],yaw:-1.41,pitch:-.12,wake:1,lightsDown:1,beacon:0,steps:3,mode:"cut",beam:"cut",beamLen:1.55,heat:.7,sparks:[6.17,.92,-27.12],fight:[{x:6.17,y:.8,z:-27.12,n:[0,1,0],f:[-1,0,.16],walk:0,attack:1,hurt:.6,state:"leap"},{x:7.6,y:.1,z:-28.5,n:[0,1,0],f:[-1,0,.4],walk:1,state:"chase"},{x:6.9,y:2,z:-30.94,n:[0,0,1],f:[0,-1,0],walk:1,state:"path"}]},{name:"сцена 4: запечатанная дверь, четыре знака",pos:[13.4,Zt,-24],yaw:-Vr,pitch:.06,wake:1,lightsDown:1,beacon:0,steps:3},{name:"финал: галерея, Узор в полости астероида",pos:[18.7,Zt,-24],yaw:-Vr,pitch:.08,wake:1,lightsDown:1,beacon:0,steps:3,seal:1,turn:1,rig:0},{name:"мёртвый ремонтный краулер, сквозь которого пророс Узор",pos:[.1,Zt,-18.9],yaw:-.72,pitch:-.48,rig:0}],zv={open:[[0,5],[0,1],[.6,-2],[.3,-20],[1.2,-23.45],[3.6,-23.45],[6,-21],[9.5,-20.6],[13,-24],[9.5,-27.6],[6.5,-25]],wall:[[0,-31],[0,-38.5]]};function El(i,e,t){for(const n of e.circles){const s=i.x-n.x,r=i.z-n.z,o=Math.hypot(s,r),a=n.r+t;o<a&&o>1e-6&&(i.x=n.x+s/o*a,i.z=n.z+r/o*a)}for(const n of e.boxes){const s=Math.max(n.x0,Math.min(i.x,n.x1)),r=Math.max(n.z0,Math.min(i.z,n.z1)),o=i.x-s,a=i.z-r,c=Math.hypot(o,a);c<t&&c>1e-6&&(i.x=s+o/c*t,i.z=r+a/c*t)}}function Uv(i=wl.x,e=wl.z){return{x:i,z:e,yaw:wl.yaw,pitch:0,input:{forward:0,strafe:0},speed:Iv}}function tf(i,e,t){const n=Math.max(-1,Math.min(1,i.input.forward)),s=Math.max(-1,Math.min(1,i.input.strafe)),r=Math.sin(i.yaw),o=Math.cos(i.yaw),a=Math.max(1,Math.ceil(i.speed*t/.2));for(let c=0;c<a;c++){i.x+=(-r*n+o*s)*i.speed*t/a,i.z+=(-o*n-r*s)*i.speed*t/a;for(const u of e.circles){const f=i.x-u.x,d=i.z-u.z,l=Math.hypot(f,d),p=u.r+ti;l<p&&l>1e-6&&(i.x=u.x+f/l*p,i.z=u.z+d/l*p)}for(const u of e.boxes){const f=Math.max(u.x0,Math.min(i.x,u.x1)),d=Math.max(u.z0,Math.min(i.z,u.z1)),l=i.x-f,p=i.z-d,v=Math.hypot(l,p);if(v<ti)if(v>1e-6)i.x=f+l/v*ti,i.z=d+p/v*ti;else{const _=[[u.x0-ti-i.x,0],[u.x1+ti-i.x,0],[0,u.z0-ti-i.z],[0,u.z1+ti-i.z]];_.sort((h,m)=>Math.abs(h[0]+h[1])-Math.abs(m[0]+m[1])),i.x+=_[0][0],i.z+=_[0][1]}}}i.x=Math.max(ta.x0+ti,Math.min(ta.x1-ti,i.x)),i.z=Math.max(ta.z0+ti,Math.min(ta.z1-ti,i.z))}class Nv extends vc{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new It;e.deleteAttribute("uv");const t=new Ri({side:bn}),n=new Ri,s=new n0(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new $e(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Eh(e,n,6),a=new en;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const c=new $e(e,ar(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const u=new $e(e,ar(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const f=new $e(e,ar(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const d=new $e(e,ar(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const l=new $e(e,ar(20));l.position.set(3.235,11.486,-12.541),l.scale.set(2.5,2,.1),this.add(l);const p=new $e(e,ar(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ar(i){return new Dp({color:0,emissive:16777215,emissiveIntensity:i})}function ki(i){let e=i>>>0||2654435769;return function(){e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function zs(i,e=i){const t=document.createElement("canvas");return t.width=i,t.height=e,t}function Fv(i,e,t){const n=new Float32Array(t*t);for(let o=0;o<n.length;o++)n[o]=i();const s=new Float32Array(e*e),r=o=>o*o*(3-2*o);for(let o=0;o<e;o++)for(let a=0;a<e;a++){const c=a/e*t,u=o/e*t,f=Math.floor(c),d=Math.floor(u),l=r(c-f),p=r(u-d),v=n[d%t*t+f%t],_=n[d%t*t+(f+1)%t],h=n[(d+1)%t*t+f%t],m=n[(d+1)%t*t+(f+1)%t];s[o*e+a]=(v*(1-l)+_*l)*(1-p)+(h*(1-l)+m*l)*p}return s}function Lu(i,e,t=4,n=5){const s=new Float32Array(e*e);let r=.5,o=0;for(let a=0;a<n;a++){const c=Fv(i,e,t<<a);for(let u=0;u<s.length;u++)s[u]+=c[u]*r;o+=r,r*=.5}for(let a=0;a<s.length;a++)s[a]/=o;return s}function Tl(i,e,t=!0){return i.colorSpace=e?nn:bi,t&&(i.wrapS=i.wrapT=yr),i.anisotropy=8,i.generateMipmaps=!0,i.minFilter=Ui,i.needsUpdate=!0,i}function Hr(i,e,t,{bump:n=2,grime:s=.35}={}){const r=ki(i),o=zs(e),a=zs(e),c=zs(e),u=zs(e),f=o.getContext("2d"),d=a.getContext("2d"),l=c.getContext("2d"),p=u.getContext("2d");d.fillStyle="#808080",d.fillRect(0,0,e,e),t(f,d,l,p,e,r);const v=f.getImageData(0,0,e,e),_=d.getImageData(0,0,e,e),h=l.getImageData(0,0,e,e),m=p.getImageData(0,0,e,e),x=Lu(r,e,4,6),b=Lu(r,e,32,3),M=new Float32Array(e*e);for(let E=0;E<e*e;E++){const z=1-s*Math.max(0,x[E]*1.6-.45);v.data[E*4]*=z,v.data[E*4+1]*=z,v.data[E*4+2]*=z*.98,M[E]=_.data[E*4]/255+(b[E]-.5)*.06,h.data[E*4]=Math.max(0,Math.min(255,h.data[E*4]+(x[E]-.5)*90+(b[E]-.5)*40))}f.putImageData(v,0,0);const C=new Uint8ClampedArray(e*e*4),A=new Uint8ClampedArray(e*e*4),g=(E,z)=>M[(z+e)%e*e+(E+e)%e];for(let E=0;E<e;E++)for(let z=0;z<e;z++){const L=(g(z+1,E)-g(z-1,E))*n*e/512*4,F=(g(z,E+1)-g(z,E-1))*n*e/512*4,U=1/Math.hypot(L,F,1),G=(E*e+z)*4;C[G]=(-L*U*.5+.5)*255,C[G+1]=(F*U*.5+.5)*255,C[G+2]=(U*.5+.5)*255,C[G+3]=255,A[G]=255,A[G+1]=h.data[G],A[G+2]=m.data[G],A[G+3]=255}const y=zs(e),T=zs(e);return y.getContext("2d").putImageData(new ImageData(C,e,e),0,0),T.getContext("2d").putImageData(new ImageData(A,e,e),0,0),{map:Tl(new Fs(o),!0),normalMap:Tl(new Fs(y),!1),orm:Tl(new Fs(T),!1)}}const Gt=i=>{const e=Math.round(Math.max(0,Math.min(1,i))*255);return`rgb(${e},${e},${e})`};function Hs(i,e,t,n,s,r=.2,o=1){i.strokeStyle=s,i.lineCap="round";for(let a=0;a<n;a++){const c=e()*t,u=e()*t,f=e()*Math.PI,d=(.02+e()*r)*t;i.lineWidth=o*(.4+e()),i.globalAlpha=.15+e()*.5,i.beginPath(),i.moveTo(c,u),i.lineTo(c+Math.cos(f)*d,u+Math.sin(f)*d),i.stroke()}i.globalAlpha=1}function wc(i,e,t,n,s){for(let r=0;r<n;r++){const o=e()*t,a=e()*t*.6,c=(.15+e()*.5)*t,u=2+e()*10,f=i.createLinearGradient(0,a,0,a+c);f.addColorStop(0,s),f.addColorStop(1,"rgba(0,0,0,0)"),i.globalAlpha=.12+e()*.25,i.fillStyle=f,i.fillRect(o,a,u,c)}i.globalAlpha=1}function Ov(i,e,t,n,s,r){i.fillStyle="#8f9690",i.fillRect(0,0,s,s),t.fillStyle=Gt(.62),t.fillRect(0,0,s,s),n.fillStyle=Gt(.25),n.fillRect(0,0,s,s);const o=s/2;for(let a=0;a<2;a++)for(let c=0;c<2;c++){const u=c*o,f=a*o,d=.88+r()*.2;i.fillStyle=`rgb(${132*d|0},${141*d|0},${136*d|0})`,i.fillRect(u+3,f+3,o-6,o-6);const l=o*.12;e.fillStyle=Gt(.56),e.fillRect(u+l,f+l,o-2*l,o-2*l),e.strokeStyle=Gt(.36),e.lineWidth=3,e.strokeRect(u+l,f+l,o-2*l,o-2*l),i.strokeStyle="rgba(30,34,36,0.5)",i.lineWidth=2,i.strokeRect(u+l,f+l,o-2*l,o-2*l),e.strokeStyle=Gt(.12),e.lineWidth=5,e.strokeRect(u,f,o,o),i.strokeStyle="#1a1d1f",i.lineWidth=4,i.strokeRect(u,f,o,o),t.strokeStyle=Gt(.9),t.lineWidth=6,t.strokeRect(u,f,o,o);for(let p=0;p<6;p++)for(const[v,_]of[[u+l*.5+(o-l)*p/6+6,f+l*.5],[u+l*.5+(o-l)*p/6+6,f+o-l*.5],[u+l*.5,f+l*.5+(o-l)*p/6+6],[u+o-l*.5,f+l*.5+(o-l)*p/6+6]])e.fillStyle=Gt(.85),e.beginPath(),e.arc(v,_,3.2,0,7),e.fill(),i.fillStyle="rgba(200,205,200,0.5)",i.beginPath(),i.arc(v-.6,_-.6,2.2,0,7),i.fill(),n.fillStyle=Gt(.9),n.beginPath(),n.arc(v,_,3.2,0,7),n.fill()}for(let a=0;a<260;a++){const c=r()<.5,u=Math.round(r()*2)*o+(r()-.5)*22,f=r()*s,d=1+r()*5,l=c?u:f,p=c?f:u;i.fillStyle=`rgba(${70+r()*40|0},${72+r()*30|0},${70+r()*30|0},0.9)`,i.beginPath(),i.ellipse(l,p,d,d*(.4+r()),r()*3,0,7),i.fill(),n.fillStyle=Gt(1),n.beginPath(),n.arc(l,p,d,0,7),n.fill(),t.fillStyle=Gt(.35),t.beginPath(),t.arc(l,p,d,0,7),t.fill()}wc(i,r,s,46,"rgba(40,30,22,0.9)"),wc(t,r,s,30,"rgba(255,255,255,0.8)"),Hs(i,r,s,150,"#cfd3cf",.12,1),Hs(e,r,s,80,"#606060",.12,1.4)}function Bv(i,e,t,n,s,r){i.fillStyle="#3a3d40",i.fillRect(0,0,s,s),t.fillStyle=Gt(.5),t.fillRect(0,0,s,s),n.fillStyle=Gt(.85),n.fillRect(0,0,s,s);const o=s/2;for(let u=0;u<2;u++)for(let f=0;f<2;f++){const d=f*o,l=u*o,p=.8+r()*.35;i.fillStyle=`rgb(${58*p|0},${61*p|0},${64*p|0})`,i.fillRect(d+2,l+2,o-4,o-4);const v=o/14;for(let _=0;_<14;_++)for(let h=0;h<14;h++){const m=d+(_+.5)*v,x=l+(h+.5)*v,b=(_+h)%2?.785:-.785;e.fillStyle=Gt(.78),e.beginPath(),e.ellipse(m,x,v*.36,v*.11,b,0,7),e.fill(),i.fillStyle="rgba(120,124,128,0.35)",i.beginPath(),i.ellipse(m-.5,x-.5,v*.34,v*.09,b,0,7),i.fill(),t.fillStyle=Gt(.3),t.beginPath(),t.ellipse(m,x,v*.34,v*.1,b,0,7),t.fill()}e.strokeStyle=Gt(.1),e.lineWidth=6,e.strokeRect(d,l,o,o),i.strokeStyle="#0c0d0e",i.lineWidth=5,i.strokeRect(d,l,o,o);for(const[_,h]of[[d+14,l+14],[d+o-14,l+14],[d+14,l+o-14],[d+o-14,l+o-14]])e.fillStyle=Gt(.25),e.beginPath(),e.arc(_,h,5,0,7),e.fill(),i.fillStyle="#17181a",i.beginPath(),i.arc(_,h,5,0,7),i.fill()}const a=i.createLinearGradient(0,0,s,0);a.addColorStop(.2,"rgba(150,155,160,0)"),a.addColorStop(.5,"rgba(150,155,160,0.16)"),a.addColorStop(.8,"rgba(150,155,160,0)"),i.fillStyle=a,i.fillRect(0,0,s,s);const c=t.createLinearGradient(0,0,s,0);c.addColorStop(.2,"rgba(0,0,0,0)"),c.addColorStop(.5,"rgba(0,0,0,0.35)"),c.addColorStop(.8,"rgba(0,0,0,0)"),t.fillStyle=c,t.fillRect(0,0,s,s),Hs(i,r,s,260,"#8d9196",.2,1.2),Hs(t,r,s,200,"#202020",.2,2);for(let u=0;u<26;u++){const f=r()*s,d=r()*s,l=6+r()*34,p=i.createRadialGradient(f,d,0,f,d,l);p.addColorStop(0,"rgba(8,8,10,0.55)"),p.addColorStop(1,"rgba(8,8,10,0)"),i.fillStyle=p,i.fillRect(f-l,d-l,2*l,2*l);const v=t.createRadialGradient(f,d,0,f,d,l);v.addColorStop(0,"rgba(0,0,0,0.6)"),v.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=v,t.fillRect(f-l,d-l,2*l,2*l)}}function kv(i,e,t,n,s,r){i.fillStyle="#6c7074",i.fillRect(0,0,s,s),t.fillStyle=Gt(.42),t.fillRect(0,0,s,s),n.fillStyle=Gt(1),n.fillRect(0,0,s,s);for(let o=0;o<1400;o++){const a=r()*s,c=r()*s,u=20+r()*160,f=90+r()*70|0;i.strokeStyle=`rgba(${f},${f+3},${f+6},0.25)`,i.lineWidth=1,i.beginPath(),i.moveTo(c,a),i.lineTo(c+u,a+(r()-.5)*2),i.stroke()}for(let o=0;o<60;o++){const a=r()*s,c=r()*s,u=8+r()*46,f=i.createRadialGradient(a,c,0,a,c,u);f.addColorStop(0,r()<.5?"rgba(92,52,28,0.5)":"rgba(20,20,24,0.5)"),f.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=f,i.fillRect(a-u,c-u,2*u,2*u);const d=t.createRadialGradient(a,c,0,a,c,u);d.addColorStop(0,"rgba(255,255,255,0.5)"),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.fillRect(a-u,c-u,2*u,2*u)}Hs(i,r,s,200,"#c2c6ca",.15,1),Hs(e,r,s,120,"#555",.15,1.5)}function Gv(i,e,t,n,s,r){i.fillStyle="#e4e4e0",i.fillRect(0,0,s,s),t.fillStyle=Gt(.55),t.fillRect(0,0,s,s),n.fillStyle=Gt(.1),n.fillRect(0,0,s,s);for(let o=0;o<300;o++){const a=r()*s,c=r()*s,u=.8+r()*r()*r()*9;i.fillStyle=`rgba(${100+r()*50|0},${100+r()*45|0},${104+r()*40|0},0.8)`,i.beginPath(),i.ellipse(a,c,u,u*(.3+r()*.8),r()*3,0,7),i.fill(),n.fillStyle=Gt(.5),n.beginPath(),n.arc(a,c,u,0,7),n.fill(),e.fillStyle=Gt(.42),e.beginPath(),e.arc(a,c,u,0,7),e.fill(),t.fillStyle=Gt(.3),t.beginPath(),t.arc(a,c,u,0,7),t.fill()}wc(i,r,s,30,"rgba(50,38,28,0.8)"),Hs(i,r,s,200,"#70706c",.1,1)}function Vv(i,e,t,n,s,r){i.fillStyle="#d8d6d0",i.fillRect(0,0,s,s),t.fillStyle=Gt(.92),t.fillRect(0,0,s,s),n.fillStyle=Gt(0),n.fillRect(0,0,s,s);for(let o=0;o<s;o+=4)e.fillStyle=Gt(.44),e.fillRect(0,o,s,2);for(let o=0;o<s;o+=4)e.fillStyle="rgba(160,160,160,0.5)",e.fillRect(o,0,2,s);for(let o=0;o<40;o++){const a=r()*s,c=6+r()*20,u=e.createLinearGradient(0,a,0,a+c);u.addColorStop(0,"rgba(255,255,255,0)"),u.addColorStop(.5,"rgba(255,255,255,0.5)"),u.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=u,e.fillRect(0,a,s,c),i.fillStyle="rgba(0,0,0,0.07)",i.fillRect(0,a+c*.6,s,c*.5)}for(let o=0;o<50;o++){const a=r()*s,c=r()*s,u=10+r()*50,f=i.createRadialGradient(a,c,0,a,c,u);f.addColorStop(0,"rgba(40,34,28,0.3)"),f.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=f,i.fillRect(a-u,c-u,2*u,2*u)}}let na=null;function Hv(){return na||(na={panel:Hr(11,1024,Ov,{bump:2.4}),floor:Hr(23,1024,Bv,{bump:3,grime:.45}),metal:Hr(37,512,kv,{bump:1.2}),paint:Hr(41,512,Gv,{bump:1.6}),cloth:Hr(53,256,Vv,{bump:2.2,grime:.2})},na)}function ni(i,e,t,n,s,r,o,{jitter:a=.08,font:c="sans-serif",weight:u=700,drip:f=0}={}){i.save(),i.fillStyle=o,i.textBaseline="alphabetic";let d=n;for(const l of t){const p=r*(1+(e()-.5)*a*2);i.font=`${u} ${p}px ${c}`;const v=i.measureText(l).width;i.save(),i.translate(d,s+(e()-.5)*r*a*1.5),i.rotate((e()-.5)*a*2.2),i.globalAlpha=.72+e()*.28,i.fillText(l,0,0),f&&l!==" "&&e()<f&&(i.globalAlpha=.5,i.fillRect(v*(.2+e()*.5),0,Math.max(2,r*.04),r*(.3+e()*.9))),i.restore(),d+=v*(.98+e()*.08)}return i.restore(),d}function Wv(i=64){const e=zs(i),t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.35,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i);const s=new Fs(e);return s.needsUpdate=!0,s}const ke={neonViolet:14242287,neonViolet2:11552236,turquoise:8702925,lotusTeal:222624,deepViolet:2230107,gold:12815678,goldLight:16639079,flame:16761125,skin:14205360,eyeGreen:959087,eyeBlue:4367848,gem:2977297,cardBg:1778995},ba=6,eo={uWake:{value:0},uTime:{value:0},uUzQ:{value:2},uUzOff:{value:0},uAO:{value:.5},uWakeA:{value:new Oe(ke.turquoise)},uWakeB:{value:new Oe(ke.neonViolet)}},Xv=`
attribute vec3 aFlat; attribute vec3 aFlatN;
varying vec3 vFlat; varying vec3 vFlatN;
`,qv=`
varying vec3 vFlat; varying vec3 vFlatN;
uniform vec4 uFrost[${ba}];
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
  for (int i = 0; i < ${ba}; i++) {
    vec3 d = vFlat - uFrost[i].xyz; float r = uFrost[i].w * (1.0 + 0.4 * uWake) * 1.45;
    m0 = max(m0, 1.0 - dot(d, d) / (r * r));
  }
  if (m0 <= 0.0) return;
  vec3 an = abs(vFlatN);
  vec2 p = an.y > an.x && an.y > an.z ? vFlat.xz : (an.x > an.z ? vFlat.zy : vFlat.xy);
  float n1 = uzNoise(p * 2.3), n2 = uzNoise(p * 7.1), n3 = uzNoise(p * 23.0);
  float nz = n1 * 0.55 + n2 * 0.3 + n3 * 0.15;
  float m = 0.0;
  for (int i = 0; i < ${ba}; i++) {
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
`;function Zv(i){Object.assign(i.uniforms,eo,this.userData.room),i.vertexShader=Xv+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vFlat = aFlat; vFlatN = aFlatN;`),i.fragmentShader=qv+i.fragmentShader.replace("#include <normal_fragment_maps>",Yv).replace("#include <aomap_fragment>",$v)}function ia(i,e){return{uFrost:{value:Array.from({length:ba},()=>new Bt(0,-100,0,.001))},uRoomMin:{value:new k(...i)},uRoomMax:{value:new k(...e)}}}function Wr(i,e,{color:t=16777215,rough:n=1,metal:s=1,normal:r=1}={}){const o=Hv()[i],a=new Ri({map:o.map,normalMap:o.normalMap,roughnessMap:o.orm,metalnessMap:o.orm,color:t,roughness:n,metalness:s,vertexColors:!0});return a.normalScale.set(r,r),a.userData.room=e,a.onBeforeCompile=Zv,a.customProgramCacheKey=()=>"uzor2",a}const Kv={wall:["panel",16777215],wallDark:["panel",6120555],ceil:["panel",4014663],floor:["floor",16777215],steel:["metal",16777215],steelDark:["metal",4869458],bronze:["metal",12092746],copper:["metal",13662538],weld:["metal",15133938],orange:["paint",13132830],yellow:["paint",13214247],teal:["paint",3112838],white:["paint",14276559],red:["paint",9316898],rubber:["cloth",1776671],cloth:["cloth",7305827],clothBlue:["cloth",3952491],clothWarm:["cloth",10123861]};function Ds(i,e=1,t=null){const n=new Ai({color:new Oe(i).multiplyScalar(e),map:t,toneMapped:!1});return n.userData.unlit=!0,n.userData.noShadow=!0,n}function Jv(i,{color:e=16777215,emissive:t=0,emissiveIntensity:n=0}={}){const s=new Ri({map:i,transparent:!0,depthWrite:!1,roughness:.9,metalness:0,color:e,emissive:t,emissiveIntensity:n,emissiveMap:n?i:null,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return s.userData.noShadow=!0,s}function Qv(i){return{panel:Wr("panel",i),floor:Wr("floor",i,{rough:.85}),metal:Wr("metal",i),paint:Wr("paint",i),cloth:Wr("cloth",i)}}function bs(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ft;c.morphTargetsRelative=a;let u=0;for(let f=0;f<i.length;++f){const d=i[f];let l=0,p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const v in d.attributes){if(!n.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+v+'" attribute exists among all geometries, or in none of them.'),null;r[v]===void 0&&(r[v]=[]),r[v].push(d.attributes[v]),l++}if(l!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const v in d.morphAttributes){if(!s.has(v))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[v].length!==i[0].morphAttributes[v].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have the same number of morph targets for the "'+v+'" morph attribute.'),null;o[v]===void 0&&(o[v]=[]),o[v].push(d.morphAttributes[v]),p++}if(p!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of morph attributes."),null;if(e){let v;if(t)v=d.index.count;else if(d.attributes.position!==void 0)v=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(u,v,f),u+=v}}if(t){let f=0;const d=[];for(let l=0;l<i.length;++l){const p=i[l].index;for(let v=0;v<p.count;++v)d.push(p.getX(v)+f);f+=i[l].attributes.position.count}c.setIndex(d)}for(const f in r){const d=Iu(r[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,d)}for(const f in o){const d=o[f][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let l=0;l<d;++l){const p=[];for(let _=0;_<o[f].length;++_)p.push(o[f][_][l]);const v=Iu(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(v)}}}return c}function Iu(i){let e,t,n,s=-1,r=0;for(let u=0;u<i.length;++u){const f=i[u];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=f.gpuType),s!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=f.count*t}const o=new e(r),a=new sn(o,t,n);let c=0;for(let u=0;u<i.length;++u){const f=i[u];if(f.isInterleavedBufferAttribute){const d=c/t;for(let l=0,p=f.count;l<p;l++)for(let v=0;v<t;v++){const _=f.getComponent(l,v);a.setComponent(l+d,v,_)}}else o.set(f.array,c);c+=f.count*t}return s!==void 0&&(a.gpuType=s),a}function nf(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count;let o=0;const a=Object.keys(i.attributes),c=[],u=new Map,f=[],d=["getX","getY","getZ","getW"],l=e*.5,p=Math.log10(1/e),v=Math.pow(10,p),_=l*v;for(let m=0;m<r;m++){const x=n?n.getX(m):m;let b="";for(let M=0,C=a.length;M<C;M++){const A=a[M],g=i.getAttribute(A),y=g.itemSize;for(let T=0;T<y;T++)b+=`${Math.trunc(g[d[T]](x)*v+_)},`}b in t?f.push(t[b]):(c.push(x),t[b]=o,f.push(o),o++)}const h=i.clone();for(const m in i.attributes)h.setAttribute(m,zu(i.attributes[m],c,u));for(const m in i.morphAttributes)h.morphAttributes[m]=i.morphAttributes[m].map(x=>zu(x,c,u));return h.setIndex(f),h}function zu(i,e,t=new Map){const n=i.isInterleavedBufferAttribute,s=n?i.data:i,r=n?s.stride:i.itemSize;let o=n?t.get(s):void 0;if(o===void 0){const c=new s.array.constructor(e.length*r);for(let u=0;u<e.length;u++)for(let f=0;f<r;f++)c[u*r+f]=s.array[e[u]*r+f];o=n?new s.constructor(c,r,s.meshPerAttribute):new i.constructor(c,i.itemSize,i.normalized,i.meshPerAttribute),o.setUsage(s.usage),n&&t.set(s,o)}const a=n?new i.constructor(o,i.itemSize,i.offset,i.normalized):o;return a.name=i.name,n||(a.gpuType=i.gpuType),a}const Xr=new k;function ii(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Xr.copy(e),Xr[n]=0,Xr.normalize();const u=.5*o/(o+a),f=1-Xr.angleTo(i)/c;return Math.sign(Xr[t])===1?f*u:a/(o+a)+u+u*(1-f)}class Ga extends It{constructor(e=1,t=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new k,u=new k,f=new k(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,l=this.attributes.normal.array,p=this.attributes.uv.array,v=d.length/6,_=new k,h=.5/o;for(let m=0,x=0;m<d.length;m+=3,x+=2)switch(c.fromArray(d,m),u.copy(c),u.x-=Math.sign(u.x)*h,u.y-=Math.sign(u.y)*h,u.z-=Math.sign(u.z)*h,u.normalize(),d[m+0]=f.x*Math.sign(c.x)+u.x*r,d[m+1]=f.y*Math.sign(c.y)+u.y*r,d[m+2]=f.z*Math.sign(c.z)+u.z*r,l[m+0]=u.x,l[m+1]=u.y,l[m+2]=u.z,Math.floor(m/v)){case 0:_.set(1,0,0),p[x+0]=ii(_,u,"z","y",r,n),p[x+1]=1-ii(_,u,"y","z",r,t);break;case 1:_.set(-1,0,0),p[x+0]=1-ii(_,u,"z","y",r,n),p[x+1]=1-ii(_,u,"y","z",r,t);break;case 2:_.set(0,1,0),p[x+0]=1-ii(_,u,"x","z",r,e),p[x+1]=ii(_,u,"z","x",r,n);break;case 3:_.set(0,-1,0),p[x+0]=1-ii(_,u,"x","z",r,e),p[x+1]=1-ii(_,u,"z","x",r,n);break;case 4:_.set(0,0,1),p[x+0]=1-ii(_,u,"x","y",r,e),p[x+1]=1-ii(_,u,"y","x",r,t);break;case 5:_.set(0,0,-1),p[x+0]=ii(_,u,"x","y",r,e),p[x+1]=1-ii(_,u,"y","x",r,t);break}}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.segments,e.radius)}}const oo=42,sa=new Oe,jv=new Qt,e2=new k(1,0,0);function s0(i){const e=i.z/oo,t=oo-i.y;return i.set(i.x,oo-t*Math.cos(e),t*Math.sin(e))}function ji(i,e=new Qt){return e.setFromAxisAngle(e2,-i/oo)}function Nn(i,e,t,n,s=0,r=0){return s0(i.position.set(e,t,n)),ji(n,i.quaternion),(s||r)&&i.quaternion.multiply(jv.setFromEuler(new Fn(r,s,0,"YXZ"))),i}function an(i,e,t,n=new k){return s0(n.set(i,e,t))}function t2(i){const e=i.attributes.position,t=i.attributes.normal,n=new Float32Array(e.count*3),s=new Float32Array(e.count*3),r=new k;for(let o=0;o<e.count;o++){const a=e.getX(o),c=e.getY(o),u=e.getZ(o);n[o*3]=a,n[o*3+1]=c,n[o*3+2]=u;const f=t.getX(o),d=t.getY(o),l=t.getZ(o);s[o*3]=f,s[o*3+1]=d,s[o*3+2]=l,s0(r.set(a,c,u)),e.setXYZ(o,r.x,r.y,r.z);const p=u/oo,v=Math.cos(p),_=Math.sin(p);t.setXYZ(o,f,d*v+l*_,-d*_+l*v)}return i.setAttribute("aFlat",new sn(n,3)),i.setAttribute("aFlatN",new sn(s,3)),i.computeBoundingSphere(),i.computeBoundingBox(),i}new ct;const n2=new Fn,i2=new k,s2=new k(1,1,1);class fr{constructor(){this.bins=new Map}add(e,t,n){let s=t.index?t.toNonIndexed():t.clone();for(const o of Object.keys(s.attributes))["position","normal","uv"].includes(o)||s.deleteAttribute(o);s.attributes.uv||s.setAttribute("uv",new sn(new Float32Array(s.attributes.position.count*2),2)),n&&s.applyMatrix4(n);const r=Kv[e];if(r){sa.set(r[1]);const o=s.attributes.position.count,a=new Float32Array(o*3);for(let c=0;c<o;c++)a[c*3]=sa.r,a[c*3+1]=sa.g,a[c*3+2]=sa.b;s.setAttribute("color",new sn(a,3)),e=r[0]}return this.bins.has(e)||this.bins.set(e,[]),this.bins.get(e).push(s),this}mtx(e,t,n,s=0,r=0,o=0,a=1,c=1,u=1){return new ct().compose(i2.set(e,t,n),new Qt().setFromEuler(n2.set(s,r,o,"YXZ")),s2.set(a,c,u)).clone()}box(e,t,n,s,r,o,a,{rx:c=0,ry:u=0,rz:f=0,tile:d=2,uo:l=0,vo:p=0,bevel:v}={}){const _=c||u||f,h=_?1:Math.max(1,Math.ceil(a/.8)),m=_&&Math.abs(Math.abs(u)-Math.PI/2)<.01?Math.max(1,Math.ceil(r/.8)):1,x=Math.min(r,o,a),b=Math.max(r,o,a);v===void 0&&(v=x>=.1&&b<=2.2&&h<=3?Math.min(.022,x*.14):0);const M=v?new Ga(r,o,a,1,v):new It(r,o,a,m,1,h),C=M.index?M.toNonIndexed():M,A=C.attributes.position,g=C.attributes.normal,y=C.attributes.uv;for(let T=0;T<A.count;T++){const E=A.getX(T)+(_?0:t),z=A.getY(T)+(_?0:n),L=A.getZ(T)+(_?0:s),F=Math.abs(g.getX(T)),U=Math.abs(g.getY(T));F>.5?y.setXY(T,L/d+l,z/d+p):U>.5?y.setXY(T,E/d+l,L/d+p):y.setXY(T,E/d+l,z/d+p)}return this.add(e,C,this.mtx(t,n,s,c,u,f))}slab(e,t,n,s,r,o,a,c){return this.box(e,(t+r)/2,(n+o)/2,(s+a)/2,Math.abs(r-t),Math.abs(o-n),Math.abs(a-s),c)}pipe(e,t,n,s,{seg:r=12,cap:o=!1}={}){const a=new k(...t),c=new k(...n),u=a.distanceTo(c),f=new Vt(s,s,u,r,Math.max(1,Math.ceil(u/.8)),!o),d=f.attributes.uv;for(let p=0;p<d.count;p++)d.setXY(p,d.getX(p)*Math.max(1,Math.round(s*12)),d.getY(p)*u/2);const l=new Qt().setFromUnitVectors(new k(0,1,0),c.clone().sub(a).normalize());return this.add(e,f,new ct().compose(a.clone().add(c).multiplyScalar(.5),l,new k(1,1,1)))}cable(e,t,n=.025,{seg:s=6,tension:r=.5}={}){const o=new Gs(t.map(c=>new k(...c)),!1,"catmullrom",r),a=Math.max(8,Math.ceil(o.getLength()/.12));return this.add(e,new Er(o,a,n,s,!1))}wall(e,t,n,s,r,o,a,c,u=[],f){const d=u.slice().sort((v,_)=>v.a0-_.a0),l=(v,_,h,m)=>{_-v<1e-4||m-h<1e-4||(t==="x"?this.slab(e,n-c/2,h,v,n+c/2,m,_,f):this.slab(e,v,h,n-c/2,_,m,n+c/2,f))};let p=s;for(const v of d)l(p,v.a0,o,a),l(v.a0,v.a1,o,v.y0),l(v.a0,v.a1,v.y1,a),p=v.a1;return l(p,r,o,a),this}build(e,{shadows:t=!0}={}){const n=new zt;for(const[s,r]of this.bins){const o=e[s];if(!o)throw new Error("нет материала "+s);const a=t2(bs(r,!1));for(const u of r)u.dispose();const c=new $e(a,o);c.name=s,c.castShadow=t&&!o.transparent&&!o.userData.noShadow,c.receiveShadow=!o.userData.unlit,n.add(c)}return this.bins.clear(),n}}class r2{constructor(e,{spots:t=3,points:n=3}={}){this.defs=[],this.spots=[],this.points=[],this.slotDef=[],this.dirty=[],this.rr=0,this.shadowsPerFrame=3,this.forceShadows=!1;for(let s=0;s<t;s++){const r=new Np(16777215,0,30,.6,.5,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.bias=-.0015,r.shadow.normalBias=.03,r.shadow.camera.near=.2,r.shadow.autoUpdate=!1,e.add(r,r.target),this.spots.push(r),this.slotDef.push(null),this.dirty.push(!0)}for(let s=0;s<n;s++){const r=new n0(16777215,0,12,1.8);e.add(r),this.points.push(r)}this.nSpots=t,this.nPoints=n}setTier({spots:e,shadowSpots:t,shadowSize:n,points:s,shadowsPerFrame:r}){this.nSpots=Math.min(e,this.spots.length),this.nPoints=Math.min(s,this.points.length),this.shadowsPerFrame=r,this.spots.forEach((o,a)=>{o.visible=a<this.nSpots,o.castShadow=a<t,o.shadow.mapSize.x!==n&&(o.shadow.mapSize.set(n,n),o.shadow.map&&(o.shadow.map.dispose(),o.shadow.map=null)),this.dirty[a]=!0}),this.points.forEach((o,a)=>{o.visible=a<this.nPoints})}add(e){return e.world=an(...e.pos),e.to&&(e.worldTo=an(...e.to)),e.reach=e.reach||26,e.col=new Oe(e.color),this.defs.push(e),e}touch(e,t){this.spots.forEach((n,s)=>{const r=this.slotDef[s];r&&Math.hypot(r.pos[0]-e,r.pos[2]-t)<(r.dist||14)+1&&(this.dirty[s]=!0)})}update(e,t,n,s=0,r=null){const o=(u,f,d)=>{const l=[];for(const p of this.defs){if(p.kind!==u||p.off)continue;const v=Math.hypot(p.pos[0]-e,p.pos[2]-t),_=1-Math.min(1,Math.max(0,(v-(p.reach-5))/5));_>0&&l.push([_*(p.prio||1),_,p])}l.sort((p,v)=>v[0]-p[0]);for(let p=0;p<f.length;p++){const v=f[p],_=p<d?l[p]:null;if(!_){v.intensity=0,u==="spot"&&(this.slotDef[p]=null);continue}const h=_[2],m=h.wakeKeep??.16;v.color.copy(h.col),s>0&&r&&v.color.lerp(r,s*.75),v.intensity=h.power*_[1]*(h.flicker?h.flicker(n):1)*(1-s*(1-m)),v.position.copy(h.world),v.distance=h.dist||14,v.decay=h.decay??(u==="spot"?1.6:1.8),u==="spot"&&(v.target.position.copy(h.worldTo),v.target.updateMatrixWorld(),v.angle=h.angle||.6,v.penumbra=h.penumbra??.6,v.shadow.camera.far=v.distance,this.slotDef[p]!==h&&(this.slotDef[p]=h,this.dirty[p]=!0))}};o("spot",this.spots,this.nSpots),o("point",this.points,this.nPoints);let a=this.forceShadows?99:this.shadowsPerFrame,c=0;for(let u=0;u<this.spots.length&&a>0;u++){const f=(this.rr+u)%this.spots.length,d=this.spots[f];!d.castShadow||!d.visible||(this.forceShadows||this.dirty[f]&&d.intensity>0)&&(d.shadow.needsUpdate=!0,this.dirty[f]=!1,a--,c++,this.rr=f+1)}return c}}const o2=new Hh(-1,1,1,-1,0,1);class a2 extends Ft{constructor(){super(),this.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ot([0,2,0,0,2,0],2))}}const l2=new a2;class c2{constructor(e){this._mesh=new $e(l2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const u2="varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",h2=`
  uniform sampler2D tDiffuse; uniform sampler2D tB0; uniform sampler2D tB1; uniform sampler2D tB2; uniform float uBloom;
  uniform float uExposure; uniform vec3 uTint; uniform float uTime; uniform float uGrain; uniform float uVig; uniform float uWake; uniform float uHurt; uniform float uFade;
  varying vec2 vUv;
  vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
  float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main() {
    vec2 d = vUv - 0.5; float r2 = dot(d, d);
    vec2 ca = d * r2 * (0.004 + 0.004 * uWake + 0.02 * uHurt);
    vec3 c = vec3(texture2D(tDiffuse, vUv + ca).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - ca).b);
    c = min(max(c, vec3(0.0)), vec3(48.0));           // NaN и «светлячки» дальше не идут
    if (uBloom > 0.0) c += (texture2D(tB0, vUv).rgb * 0.5 + texture2D(tB1, vUv).rgb * 0.32 + texture2D(tB2, vUv).rgb * 0.24) * uBloom;
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
  }`,f2=`
  uniform sampler2D tDiffuse; varying vec2 vUv;
  void main() {
    vec3 c = min(max(texture2D(tDiffuse, vUv).rgb, vec3(0.0)), vec3(48.0));
    float l = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c * smoothstep(0.95, 1.7, l), 1.0);
  }`,d2=`
  uniform sampler2D tDiffuse; uniform vec2 uDir; varying vec2 vUv;
  void main() {
    vec3 c = texture2D(tDiffuse, vUv).rgb * 0.2270270;
    c += (texture2D(tDiffuse, vUv + uDir * 1.3846154).rgb + texture2D(tDiffuse, vUv - uDir * 1.3846154).rgb) * 0.3162162;
    c += (texture2D(tDiffuse, vUv + uDir * 3.2307692).rgb + texture2D(tDiffuse, vUv - uDir * 3.2307692).rgb) * 0.0702703;
    gl_FragColor = vec4(c, 1.0);
  }`;function p2(i,e,t,n){const s={tDiffuse:{value:null},tB0:{value:null},tB1:{value:null},tB2:{value:null},uBloom:{value:0},uExposure:{value:1},uTint:{value:new k(1,1,1)},uTime:{value:0},uGrain:{value:.03},uVig:{value:.42},uWake:{value:0},uHurt:{value:0},uFade:{value:1}},r=x=>new c2(new On({...x,vertexShader:u2,depthTest:!1,depthWrite:!1})),o=r({uniforms:s,fragmentShader:h2}),a={tDiffuse:{value:null}},c={tDiffuse:{value:null},uDir:{value:new ze}},u=r({uniforms:a,fragmentShader:f2}),f=r({uniforms:c,fragmentShader:d2}),d=new ze;let l=null,p=null,v=[];const _=new Oe(0);function h(){l&&l.dispose();for(const b of v)b.a.dispose(),b.b.dispose();v=[],i.getDrawingBufferSize(d);const x=p.hdr&&!p.ldr?hi:qn;if(l=new Zn(d.x,d.y,{type:x,samples:p.msaa}),p.bloom)for(let b=0;b<3;b++){const M=Math.max(8,d.x>>b+1),C=Math.max(8,d.y>>b+1),A={type:x,depthBuffer:!1};v.push({a:new Zn(M,C,A),b:new Zn(M,C,A),w:M,h:C})}}function m(x,b){c.tDiffuse.value=x.texture,c.uDir.value.set(1/b.w,0),i.setRenderTarget(b.b),f.render(i),c.tDiffuse.value=b.b.texture,c.uDir.value.set(0,1/b.h),i.setRenderTarget(b.a),f.render(i)}return{uniforms:s,configure(x){p={...x},h()},resize(){p&&h()},render(){i.setRenderTarget(l),i.setClearColor(_,1),i.clear(),p.prepass&&n&&i.render(n,t),i.render(e,t),s.tDiffuse.value=l.texture,v.length?(a.tDiffuse.value=l.texture,i.setRenderTarget(v[0].a),u.render(i),m(v[0].a,v[0]),m(v[0].a,v[1]),m(v[1].a,v[2]),s.tB0.value=v[0].a.texture,s.tB1.value=v[1].a.texture,s.tB2.value=v[2].a.texture,s.uBloom.value=.75):(s.tB0.value=s.tB1.value=s.tB2.value=l.texture,s.uBloom.value=0),i.setRenderTarget(null),o.render(i)}}}const m2="700 %px 'Arial Narrow', 'Liberation Sans Narrow', 'DejaVu Sans Condensed', sans-serif",si="'Comic Sans MS', 'Segoe Print', 'DejaVu Sans', sans-serif";class Uu{constructor(e){this.N=e,this.c=document.createElement("canvas"),this.c.width=this.c.height=e,this.ctx=this.c.getContext("2d"),this.x=0,this.y=0,this.rowH=0,this.rects={}}add(e,t,n,s){if(this.x+t>this.N&&(this.x=0,this.y+=this.rowH+4,this.rowH=0),this.y+n>this.N)throw new Error("атлас переполнен: "+e);const r=this.ctx;r.save(),r.translate(this.x,this.y),r.beginPath(),r.rect(0,0,t,n),r.clip(),s(r,t,n,ki(e.length*131+t)),r.restore(),this.rects[e]=[this.x/this.N,1-(this.y+n)/this.N,(this.x+t)/this.N,1-this.y/this.N,t/n],this.x+=t+4,this.rowH=Math.max(this.rowH,n)}texture(){const e=new Fs(this.c);return e.colorSpace=nn,e.anisotropy=8,e.needsUpdate=!0,e}}function Yi(i,e,t,n,s,r,o,a=.25){i.font=m2.replace("%",s),i.fillStyle=r,i.textBaseline="top",i.fillText(e,t,n);const c=i.measureText(e).width;i.save(),i.globalCompositeOperation="destination-out";for(let u=0;u<c*s*a/60;u++)i.globalAlpha=.3+o()*.7,i.beginPath(),i.ellipse(t+o()*c,n+o()*s,1+o()*7,1+o()*3,o()*3,0,7),i.fill();return i.restore(),c}function g2(i,e,t,n,s){i.strokeStyle=s,i.lineWidth=n*.12,i.lineJoin="miter",i.beginPath();for(let r=0;r<3;r++){const o=-Math.PI/2+r*2.0944;i.lineTo(e+Math.cos(o)*n,t+Math.sin(o)*n)}i.closePath(),i.stroke();for(let r=0;r<3;r++){const o=t+n*(.32-r*.3),a=n*(.5-r*.14);i.beginPath(),i.moveTo(e-a,o),i.lineTo(e,o-a*.6),i.lineTo(e+a,o),i.stroke()}}function x2(){const i=new Uu(2048),e="rgba(226,228,222,0.92)",t="rgba(222,176,40,0.95)",n="rgba(235,235,225,0.9)",s="rgba(20,22,26,0.92)",r="rgba(170,32,24,0.95)",o="rgba(232,120,30,0.95)";i.add("veresk",900,200,(f,d,l,p)=>{g2(f,90,108,78,e),Yi(f,"ВЕРЕСК-9",200,14,150,e,p),Yi(f,"РУДНАЯ СТАНЦИЯ · СИНДИКАТ «ТАРН»",204,160,30,e,p,.1)}),i.add("shluz",520,200,(f,d,l,p)=>{Yi(f,"ШЛЮЗ 2",10,10,140,t,p),Yi(f,"СТЫКОВОЧНЫЙ · ДАВЛЕНИЕ ПРОВЕРЬ",14,156,30,t,p,.1)}),i.add("hazard",512,96,(f,d,l)=>{f.fillStyle="#c9a227",f.fillRect(0,0,d,l),f.fillStyle="#16171a";for(let v=-l;v<d+l;v+=64)f.beginPath(),f.moveTo(v,l),f.lineTo(v+32,l),f.lineTo(v+32+l,0),f.lineTo(v+l,0),f.fill();f.globalCompositeOperation="destination-out";const p=ki(5);for(let v=0;v<160;v++)f.globalAlpha=.5+p()*.5,f.beginPath(),f.ellipse(p()*d,p()*l,1+p()*9,1+p()*3,p()*3,0,7),f.fill()}),i.add("kolco",1020,150,(f,d,l,p)=>{Yi(f,"ЖИЛОЕ КОЛЬЦО · СЕКТОР 3",10,8,74,e,p),Yi(f,"← ШЛЮЗ 2      МАСТЕРСКАЯ 3 →",12,98,42,e,p,.15)}),i.add("masterskaya",620,130,(f,d,l,p)=>{Yi(f,"МАСТЕРСКАЯ 3",8,10,104,o,p)}),i.add("tally",620,400,(f,d,l,p)=>{f.strokeStyle=n,f.lineCap="round";for(let v=0;v<7;v++){const _=22+v*54,h=v<6?9:4;for(let m=0;m<h;m++){const x=16+m*66+p()*6,b=v===6&&m===3,M=b?2:4;for(let C=0;C<M;C++)f.lineWidth=3+p()*2.5,f.globalAlpha=.6+p()*.4,f.beginPath(),f.moveTo(x+C*11+p()*3,_+p()*5),f.lineTo(x+C*11+p()*4-2,_+38+p()*6),f.stroke();b||(f.lineWidth=3.5,f.beginPath(),f.moveTo(x-6,_+30+p()*6),f.lineTo(x+44,_+6+p()*6),f.stroke())}}f.globalAlpha=1}),i.add("zvuchit",1240,170,(f,d,l,p)=>{ni(f,p,"ПУСТЬ ЗВУЧИТ",14,138,138,r,{jitter:.07,font:si,drip:.25})}),i.add("derzhat",880,150,(f,d,l,p)=>{ni(f,p,"ТРИ ДЕРЖАТ",12,118,112,n,{jitter:.09,font:si})}),i.add("nespat",720,110,(f,d,l,p)=>{ni(f,p,"по очереди не спим",8,78,58,n,{jitter:.1,font:si,weight:400})}),i.add("slyshit",580,110,(f,d,l,p)=>{ni(f,p,"оно отвечает",8,80,70,s,{jitter:.12,font:si,weight:400})}),i.add("nikogo",940,150,(f,d,l,p)=>{ni(f,p,"ТАМ НИКОГО НЕТ",10,116,98,e,{jitter:.06,font:si,drip:.2})}),i.add("mayak",380,140,(f,d,l,p)=>{ni(f,p,"МАЯК А",10,108,108,t,{jitter:.06,font:si})}),i.add("schema",520,480,(f,d,l,p)=>{f.strokeStyle=n,f.lineWidth=4,f.lineCap="round";const v=[[260,60],[70,400],[450,400]];f.beginPath(),v.forEach(([_,h],m)=>m?f.lineTo(_+p()*6,h+p()*6):f.moveTo(_,h)),f.closePath(),f.stroke();for(const[_,h]of v){for(let m=1;m<=3;m++)f.globalAlpha=1-m*.22,f.beginPath(),f.arc(_,h,m*22,0,7),f.stroke();f.globalAlpha=1,f.fillStyle=n,f.beginPath(),f.arc(_,h,7,0,7),f.fill()}f.lineWidth=2.5;for(let _=0;_<3;_++)for(let h=-2;h<=2;h++){const m=_*2.0944,x=Math.cos(m),b=Math.sin(m),M=260+x*h*22,C=290+b*h*22;f.beginPath(),f.moveTo(M-b*48,C+x*48),f.lineTo(M+b*48,C-x*48),f.stroke()}ni(f,p,"А",276,50,44,n,{font:si}),ni(f,p,"Б",18,446,44,n,{font:si}),ni(f,p,"В",462,446,44,n,{font:si}),ni(f,p,"спит",226,222,34,n,{font:si,weight:400})}),i.add("photos",420,300,(f,d,l,p)=>{for(let v=0;v<5;v++){const _=20+v%3*132+p()*10,h=16+Math.floor(v/3)*140+p()*14,m=(p()-.5)*.2;f.save(),f.translate(_+55,h+60),f.rotate(m),f.fillStyle="#e9e6dc",f.fillRect(-55,-62,110,124);const x=f.createLinearGradient(0,-52,0,40);x.addColorStop(0,["#7fa8c9","#c9a36b","#6b8f71","#b7b0a6","#40506a"][v]),x.addColorStop(1,["#2e4a3a","#5a3c2a","#2b3a4a","#6a5a4a","#1a2030"][v]),f.fillStyle=x,f.fillRect(-47,-54,94,90),f.fillStyle="rgba(240,225,200,0.85)";for(let b=0;b<2+v%2;b++){const M=-26+b*24;f.beginPath(),f.arc(M,2,9,0,7),f.fill(),f.fillRect(M-11,12,22,24)}f.fillStyle="rgba(200,190,150,0.7)",f.fillRect(-20,-70,40,14),f.restore()}}),i.add("scorch",256,256,(f,d,l)=>{const p=f.createRadialGradient(128,128,6,128,128,124);p.addColorStop(0,"rgba(6,6,8,0.92)"),p.addColorStop(.5,"rgba(14,12,12,0.55)"),p.addColorStop(1,"rgba(0,0,0,0)"),f.fillStyle=p,f.fillRect(0,0,d,l)}),i.add("ne",680,120,(f,d,l,p)=>{ni(f,p,"тише. оно спит",8,86,72,n,{jitter:.1,font:si,weight:400})}),i.add("smena",540,96,(f,d,l,p)=>{ni(f,p,"смена 41. Лида, прости",6,64,36,s,{jitter:.1,font:si,weight:400})}),i.add("skaf",420,96,(f,d,l,p)=>{Yi(f,"СКАФАНДРЫ · ВКД",6,12,62,e,p)}),["С3 · 07","С3 · 08","С3 · 09","С3 · 10"].forEach((f,d)=>i.add("sec"+d,300,84,(l,p,v,_)=>{Yi(l,f,6,8,64,"rgba(226,228,222,0.6)",_,.35)}));const a=new Uu(1024),c=(f,d,l,p)=>a.add(f,d,l,(v,_,h,m)=>{v.fillStyle="#04100f",v.fillRect(0,0,_,h),p(v,_,h,m),v.fillStyle="rgba(0,0,0,0.22)";for(let x=0;x<h;x+=4)v.fillRect(0,x,_,2)}),u=(f,d,l,p,v,_)=>{f.font=`700 ${v}px 'DejaVu Sans Mono','Liberation Mono',monospace`,f.fillStyle=_,f.textBaseline="top",f.fillText(d,l,p)};return c("airlock",480,300,(f,d,l)=>{u(f,"ШЛЮЗ 2",20,16,44,"#7fe0d0"),u(f,"ВНЕШНИЙ ЛЮК  ЗАКРЫТ",20,84,28,"#7fe0d0"),u(f,"ДАВЛЕНИЕ  0.31 атм",20,126,28,"#ffb347"),u(f,"ТЕМПЕРАТУРА  -41 C",20,168,28,"#ffb347"),u(f,"ЭКИПАЖ НА БОРТУ: 0",20,220,28,"#ff5a4a"),f.strokeStyle="#7fe0d0",f.lineWidth=3,f.strokeRect(8,8,d-16,l-16)}),c("scope",480,300,(f,d,l)=>{f.strokeStyle="rgba(127,224,208,0.25)",f.lineWidth=1;for(let p=0;p<d;p+=40)f.beginPath(),f.moveTo(p,0),f.lineTo(p,l),f.stroke();for(let p=0;p<l;p+=40)f.beginPath(),f.moveTo(0,p),f.lineTo(d,p),f.stroke();f.strokeStyle="#ffc125",f.lineWidth=4,f.beginPath();for(let p=0;p<=d;p+=2){const v=p/d*3%1,_=l*.55-(v<.5?Math.sin(v*2*Math.PI*3)*Math.exp(-v*5)*l*.38:0);p?f.lineTo(p,_):f.moveTo(p,_)}f.stroke(),u(f,"А  3.000 Гц  НЕСУЩАЯ ДЕРЖИТСЯ",14,12,24,"#7fe0d0")}),c("term",480,300,f=>{["> журнал смены 41","> маяк А ... в норме","> маяк Б ... в норме","> маяк В ... в норме","> ответ на несущей: ЕСТЬ","> не выключать _"].forEach((d,l)=>u(f,d,16,16+l*44,28,l===4?"#ff5a4a":"#7fe0d0"))}),{tex:i.texture(),rects:i.rects,screenTex:a.texture(),screens:a.rects}}const gr=Math.PI,wt=gr/2;function Ut(i,e,t,n,s,r,o,a,c){c=c||a/t[4];const u=new es(a,c,o==="+x"||o==="-x"?Math.max(1,Math.ceil(a/.8)):1,1),f=u.attributes.uv;for(let l=0;l<f.count;l++)f.setXY(l,t[0]+f.getX(l)*(t[2]-t[0]),t[1]+f.getY(l)*(t[3]-t[1]));const d={"+x":[0,wt],"-x":[0,-wt],"+z":[0,0],"-z":[0,gr],"+y":[-wt,0]}[o];i.add(e,u,i.mtx(n,s,r,d[0],d[1],0))}const Gn=(i,e,t,n,s,r,o=1,a=1,c=1,u=16)=>{const f=new jn(r,u,Math.max(8,u*.75|0)),d=f.attributes.uv,l=Math.max(1,Math.round(r*9));for(let p=0;p<d.count;p++)d.setXY(p,d.getX(p)*l*2,d.getY(p)*l);return i.add(e,f,i.mtx(t,n,s,0,0,0,o,a,c))},Yt=(i,e,t,n,s,r,o,a=wt,c=0,u=28)=>i.add(e,new Qi(r,o,8,u),i.mtx(t,n,s,a,c,0));function Nu(i,e,t,n=.035){const s=new es(i,e,14,20);s.rotateX(-wt);const r=s.attributes.position,o=s.attributes.uv,a=5+t()*4,c=7+t()*5,u=t()*6,f=t()*6,d=t()*6;for(let l=0;l<r.count;l++){const p=r.getX(l),v=r.getZ(l),_=Math.abs(p)/(i/2),h=Math.abs(v)/(e/2);let m=n*(Math.sin(p*a+v*2.1+u)*.55+Math.sin(v*c-p*3.3+f)*.45+Math.sin((p+v)*13+d)*.18);m+=n*.8,m-=Math.pow(Math.max(_,h),6)*.13,r.setY(l,m),o.setXY(l,o.getX(l)*i*2.2,o.getY(l)*e*2.2)}return s.computeVertexNormals(),s}const Rt=(i,e,t,n,s,r,o,a,c=20,u=0,f=0,d=0)=>i.add(e,new Vt(r,o,a,c),i.mtx(t,n,s,u,d,f));function v2(i,e){const t=ki(i*7919+13),n=x2(),s={airlock:ia([Ce.x0,0,Ce.z0],[Ce.x1,Ce.h,Ce.z1]),corridor:ia([ae.x0,0,ae.z0],[ae.x1,ae.h,ae.z1]),bay:ia([ce.x0,0,ce.z0],[ce.x1,ce.h,ce.z1]),gallery:ia([De.x0,0,De.z0],[De.x1,De.h,De.z1])},r={};Object.assign(r,{decal:Jv(n.tex),screens:Ds(16777215,1.6,n.screenTex),lamp:Ds(13624063,3.2),emerg:Ds(16722458,2.6),glowRed:Ds(16719888,5),glowCool:Ds(14083839,1.3),glowWarm:Ds(16756832,4),glowBeacon:Ds(16763e3,7)});const o={};for(const h of Object.keys(s))o[h]={...Qv(s[h]),...r};const a=n.rects,c=n.screens,u=new zt,f={shafts:[],dust:[],steam:[],sparks:[]},d=[],l={};{const h=new fr;h.slab("floor",Ce.x0,-.2,Ce.z0,Ce.x1,0,Ce.z1),h.slab("ceil",Ce.x0,Ce.h,Ce.z0,Ce.x1,Ce.h+.2,Ce.z1),h.slab("wall",Ce.x0-.3,0,Ce.z0,Ce.x0,Ce.h,Ce.z1),h.slab("wall",Ce.x1,0,Ce.z0,Ce.x1+.3,Ce.h,Ce.z1),h.slab("wall",Ce.x0-.3,0,Ce.z1,Ce.x1+.3,Ce.h,Ce.z1+.3);for(const x of[1.3,2.8,4.3,5.8])h.box("steelDark",Ce.x0+.07,Ce.h/2,x,.14,Ce.h,.18),h.box("steelDark",Ce.x1-.07,Ce.h/2,x,.14,Ce.h,.18),h.box("steelDark",0,Ce.h-.07,x,3,.14,.18),h.box("orange",Ce.x0+.07,1,x,.146,.09,.186),h.box("orange",Ce.x1-.07,1,x,.146,.09,.186);for(const x of[2.05,3.55,5.05])h.box("white",Ce.x0+.04,1.55,x,.08,1.2,1.2);h.slab("wallDark",Ce.x0,0,Ce.z0,Ce.x0+.05,.8,Ce.z1),h.slab("wallDark",Ce.x1-.05,0,Ce.z0,Ce.x1,.8,Ce.z1),h.pipe("copper",[-1.1,2.36,Ce.z0],[-1.1,2.36,Ce.z1],.04),h.pipe("copper",[-.94,2.38,Ce.z0],[-.94,2.38,Ce.z1],.03),h.pipe("steel",[1.12,2.33,Ce.z0],[1.12,2.33,Ce.z1],.075);for(const x of[1.9,3.4,4.9])Yt(h,"steelDark",1.12,2.33,x,.085,.022,0,0,14);h.pipe("steel",[Ce.x0+.12,1.15,.9],[Ce.x0+.12,1.15,5.9],.022),h.pipe("yellow",[-.7,2.44,.6],[.7,2.44,.6],.022);const m=Ce.z1;Yt(h,"orange",0,1.2,m-.02,.86,.11,0,0,40),Rt(h,"steel",0,1.2,m-.03,.8,.8,.1,40,wt),Yt(h,"bronze",0,1.62,m-.09,.17,.035,0,0,24),Rt(h,"rubber",0,1.62,m-.085,.16,.16,.02,24,wt),Yt(h,"red",0,1.08,m-.2,.24,.025,0,0,28);for(let x=0;x<3;x++){const b=wt+x*2.0944;h.pipe("red",[0,1.08,m-.2],[Math.cos(b)*.24,1.08+Math.sin(b)*.24,m-.2],.016,{seg:8}),h.box("steelDark",Math.cos(b+1.05)*.86,1.2+Math.sin(b+1.05)*.86,m-.1,.16,.26,.14,{rz:b+1.05-wt})}Rt(h,"steelDark",0,1.08,m-.13,.05,.05,.16,12,wt),h.box("steelDark",0,2.3,m-.06,.7,.12,.1),h.box("glowCool",0,2.3,m-.115,.6,.05,.02),h.pipe("steel",[1.32,2.2,1.6],[1.32,2.2,4.2],.025);for(const x of[2.3,3.5]){const b=(M,C,A,g,y,T,E=0,z=1)=>h.add(M,new Ar(y,T,6,14),h.mtx(C,A,g,E,0,0,z,1,1));b("white",1.26,1.42,x,.26,.3,0,.7),h.box("steelDark",1.38,1.45,x,.16,.66,.46),h.box("teal",1.085,1.5,x,.03,.18,.24);for(const M of[-1,1])b("white",1.26,.62,x+M*.14,.105,.72),h.box("rubber",1.22,.07,x+M*.14,.32,.14,.2),Yt(h,"teal",1.26,.2,x+M*.14,.11,.018,wt,0,14),b("white",1.26,1.34,x+M*.36,.085,.6,M*.1),Gn(h,"steelDark",1.26,.96,x+M*.39,.09,1,1.1,1,10),Yt(h,"teal",1.26,1.06,x+M*.385,.088,.016,wt,0,14);Yt(h,"bronze",1.26,1.8,x,.17,.03,wt,0,20);for(const M of[-1,1])Gn(h,"white",1.26,1.66,x+M*.3,.13,.9,.8,1,12),Yt(h,"orange",1.26,1.5,x+M*.365,.09,.014,wt,0,14),Yt(h,"orange",1.26,.72,x+M*.14,.108,.014,wt,0,14);h.box("orange",1.07,1.3,x,.02,.05,.3),Gn(h,"white",1.26,1.98,x,.21),Gn(h,"bronze",1.2,1.98,x,.19,1,.8,.85),h.box("steelDark",1.2,1.2,x,.3,.07,.5),h.box("orange",1.1,1.2,x-.2,.08,.12,.1),h.box("white",1.1,1.2,x+.18,.08,.12,.12),h.cable("rubber",[[1.4,1.7,x-.12],[1.32,1.86,x-.16],[1.24,1.84,x-.12]],.018),h.cable("rubber",[[1.4,1.7,x+.12],[1.32,1.86,x+.16],[1.24,1.84,x+.12]],.018);for(const M of[-1,1])Gn(h,"steelDark",1.2,.55,x+M*.14,.085,.6,1,1,10),Yt(h,"bronze",1.26,1,x+M*.385,.09,.012,wt,0,14);h.pipe("steel",[1.3,2.2,x],[1.3,2.12,x],.012,{seg:6})}Ut(h,"decal",a.skaf,Ce.x1-.06,2.32,2.9,"-x",1.1),h.box("steelDark",1.08,1.3,Ce.z0+.05,.56,.5,.1),Ut(h,"screens",c.airlock,1.08,1.36,Ce.z0+.105,"+z",.44,.275),h.box("glowRed",.92,1.12,Ce.z0+.105,.05,.03,.02),h.box("glowCool",1.02,1.12,Ce.z0+.105,.05,.03,.02),Rt(h,"steelDark",0,2.3,Ce.z0+.1,.08,.09,.06,14),Rt(h,"glowRed",0,2.24,Ce.z0+.1,.06,.05,.08,14),h.box("steelDark",0,Ce.h-.04,3.4,.3,.07,1.3),h.box("glowCool",0,Ce.h-.08,3.4,.18,.02,1.1),h.box("yellow",-1.3/2-.07,1.05,Ce.z0+.03,.14,2.1,.08),h.box("yellow",Kt.w/2+.07,1.05,Ce.z0+.03,.14,2.1,.08),h.box("yellow",0,Kt.y1+.07,Ce.z0+.03,Kt.w+.28,.14,.08),h.box("steelDark",0,Kt.y0/2,.2,Kt.w,Kt.y0,.4),Ut(h,"decal",a.shluz,Ce.x0+.085,1.55,3.55,"+x",1.25),Ut(h,"decal",a.hazard,0,.004,Ce.z0+.45,"+y",1.5,.28),Ut(h,"decal",a.hazard,0,.004,Ce.z1-.5,"+y",1.8,.3),h.slab("steelDark",-.42,0,Ce.z0+.7,.42,.012,Ce.z1-.8);for(let x=Ce.z0+.9;x<Ce.z1-.9;x+=.3)h.slab("steel",-.4,.012,x,.4,.02,x+.04);for(let x=0;x<3;x++)Rt(h,x===1?"white":"yellow",1.36,.5,5+x*.2,.075,.075,.62,14),Gn(h,x===1?"white":"yellow",1.36,.81,5+x*.2,.075,1,.7,1,10),Rt(h,"bronze",1.36,.88,5+x*.2,.02,.025,.07,8);h.box("steelDark",1.37,.42,5.2,.05,.05,.7),h.box("steelDark",1.37,.66,5.2,.05,.05,.7),h.box("steelDark",-1.26,.62,5.72,.46,1.24,.6),h.box("teal",-1.02,.62,5.72,.02,1.1,.5),h.box("steel",-1.01,.7,5.5,.02,.12,.03),h.box("orange",-1.22,1.33,5.72,.32,.18,.44,{ry:.1}),Yt(h,"rubber",Ce.x0+.1,1.05,1,.2,.05,0,wt,22),Yt(h,"rubber",Ce.x0+.16,1.05,1,.17,.045,0,wt,22),Rt(h,"steelDark",Ce.x0+.1,1.05,1,.07,.07,.22,12,0,wt),h.cable("rubber",[[Ce.x0+.13,.86,1],[Ce.x0+.22,.4,1.15],[Ce.x0+.4,.03,1.5],[Ce.x0+.5,.03,2.1]],.02),h.box("steel",.75,Ce.h-.06,4.9,.7,.1,.7);for(let x=0;x<5;x++)h.box("steelDark",.75,Ce.h-.115,4.62+x*.14,.6,.012,.05);h.box("white",-.9,.012,2.4,.21,.004,.297,{ry:.7}),h.box("white",.55,.012,4.6,.21,.004,.297,{ry:-.4}),h.box("orange",.95,.11,5.75,.5,.22,.32,{ry:.25});{const x=h.build(o.airlock);x.userData.room="airlock",u.add(x)}e.add({kind:"spot",pos:[0,Ce.h-.12,3.4],to:[.1,0,3.3],color:13623551,power:9,dist:9,angle:1.05,penumbra:.9,prio:3,reach:12,flicker:x=>Math.sin(x*31)*Math.sin(x*7.3)>.82?.25:1}),e.add({kind:"point",pos:[0,2.15,Ce.z0+.35],color:16720914,power:9,dist:7,prio:3,reach:11,flicker:x=>.25+.75*Math.pow(.5+.5*Math.sin(x*3.1),3)}),e.add({kind:"point",pos:[.9,1.35,Ce.z0+.5],color:6742224,power:1,dist:3,reach:10}),e.add({kind:"point",pos:[0,2.25,Ce.z1-.45],color:10471679,power:2.6,dist:5,reach:11,prio:2}),d.push([0,1.3,Ce.z1,2.1],[Ce.x0,.9,4.9,1.5],[Ce.x1,2.2,5.3,1]),f.shafts.push({pos:[0,Ce.h-.12,3.4],to:[.1,0,3.3],r0:.25,r1:1.7,color:12572415,power:.07}),f.dust.push({box:[Ce.x0,.1,Ce.z0,Ce.x1,Ce.h,Ce.z1],n:500,color:13623551,power:.55}),f.steam.push({pos:[-1.1,2.3,2.05],dir:[.35,-1,.1],len:1.5,n:40,size:.5,color:13621478,power:.35})}{const h=new fr,m=Kt.w,x=Kt.y1-Kt.y0;h.box("yellow",m/2,Kt.y0+x/2,0,m-.03,x-.02,.09),h.box("white",m/2,Kt.y0+x/2,.05,m-.3,x-.34,.03),h.box("white",m/2,Kt.y0+x/2,-.05,m-.3,x-.34,.03);for(const y of[1,-1]){if(y<0){Yt(h,"red",m/2,1.12,y*.17,.2,.024,0,0,28);for(let T=0;T<3;T++){const E=wt+T*2.0944;h.pipe("red",[m/2,1.12,y*.17],[m/2+Math.cos(E)*.2,1.12+Math.sin(E)*.2,y*.17],.015,{seg:8})}}Rt(h,"steel",m/2,1.12,y*.11,.045,.045,.14,12,wt),Ut(h,"decal",a.hazard,m/2,.42,y*.068,y>0?"+z":"-z",m-.34,.16)}Rt(h,"steelDark",.02,.5,0,.035,.035,.24,10),Rt(h,"steelDark",.02,1.6,0,.035,.035,.24,10);const b=h.build(o.airlock),M=new zt;M.add(b),Nn(M,-m/2,0,.02);const C=M.quaternion.clone(),A=new Qt,g=new k(0,1,0);l.hatch={group:M,set(y){M.quaternion.copy(C).multiply(A.setFromAxisAngle(g,y*1.95))}},l.hatch.set(1),M.userData.room="hatch",u.add(M)}{const h=new fr;h.slab("floor",ae.x0,-.2,ae.z0,ae.x1,0,ae.z1),h.slab("ceil",ae.x0,ae.h,ae.z0,ae.x1,ae.h+.2,ae.z1),h.wall("wall","x",ae.x0-.2,ae.z0,ae.z1,0,ae.h,.4,[{a0:Pe.z0,a1:Pe.z1,y0:Pe.y0,y1:Pe.y1}]),h.wall("wall","x",ae.x1+.2,ae.z0,ae.z1,0,ae.h,.4,[{a0:st.z0,a1:st.z1,y0:0,y1:st.h}]),h.slab("wallDark",ae.x0,0,ae.z0-.4,ae.x1,ae.h,ae.z0),h.wall("wallDark","z",.2,ae.x0,ae.x1,0,ae.h,.4,[{a0:-1.3/2,a1:Kt.w/2,y0:Kt.y0,y1:Kt.y1}]),h.box("yellow",-1.3/2-.07,1.05,-.03,.14,2.1,.08),h.box("yellow",Kt.w/2+.07,1.05,-.03,.14,2.1,.08),h.box("yellow",0,Kt.y1+.07,-.03,Kt.w+.28,.14,.08),h.slab("wallDark",ae.x0,0,ae.z0,ae.x0+.05,.78,ae.z1),h.slab("steel",ae.x0,.78,ae.z0,ae.x0+.07,.83,ae.z1);for(const[g,y]of[[ae.z0,st.z0-.15],[st.z1+.15,ae.z1]])h.slab("wallDark",ae.x1-.05,0,g,ae.x1,.78,y),h.slab("steel",ae.x1-.07,.78,g,ae.x1,.83,y);for(let g=-2;g>ae.z0;g-=4)g>Pe.z0&&g<Pe.z1||(h.box("steelDark",ae.x0+.1,ae.h/2,g,.2,ae.h,.3),h.box("orange",ae.x0+.105,1.08,g,.22,.14,.32)),h.box("steelDark",ae.x1-.1,ae.h/2,g,.2,ae.h,.3),h.box("orange",ae.x1-.105,1.08,g,.22,.14,.32),h.box("steelDark",0,ae.h-.11,g,4,.22,.3),h.box("steelDark",-1.55,ae.h-.35,g,.5,.08,.26,{rz:.785}),h.box("steelDark",1.55,ae.h-.35,g,.5,.08,.26,{rz:-.785});h.pipe("steel",[1.56,2.68,ae.z0],[1.56,2.68,ae.z1],.09),h.pipe("copper",[1.3,2.74,ae.z0],[1.3,2.74,ae.z1],.05),h.pipe("white",[-1.56,2.68,ae.z0],[-1.56,2.68,ae.z1],.07),h.pipe("orange",[-1.32,2.76,ae.z0],[-1.32,2.76,ae.z1],.04),h.slab("steelDark",.7,2.8,ae.z0,1.1,2.83,ae.z1);for(const g of[.78,.9,1.02])h.pipe("rubber",[g,2.85,ae.z0],[g,2.85,ae.z1],.022,{seg:6});for(let g=-4;g>ae.z0;g-=8)for(const y of[1.56,-1.56])Yt(h,"steelDark",y,2.68,g+1.7,.105,.025,0,0,14);const m={"-4":1,"-12":1,"-20":2,"-28":1};for(let g=-4;g>ae.z0;g-=4){h.box("steelDark",0,ae.h-.045,g,.34,.09,1.5);const y=m[g];h.box(y?"lamp":"rubber",0,ae.h-.1,g,.22,.02,1.3),y&&(e.add({kind:"spot",pos:[0,ae.h-.14,g],to:[0,0,g-.05],color:12375807,power:10,dist:11,angle:1.1,penumbra:.9,prio:2,reach:20,mood:{amber:{color:16760454,power:12}},flicker:y===2?T=>Math.sin(T*23)*Math.sin(T*5.1)>.3?.15:1:null}),f.shafts.push({pos:[0,ae.h-.14,g],to:[0,0,g-.05],r0:.3,r1:2,color:12375807,power:.14,moodColor:{amber:16754776}}))}for(let g=-2;g>Ht;g-=4){for(const y of[ae.x0+.06,ae.x1-.06])h.box("emerg",y,.3,g-2,.03,.05,.4);(g+2)%8===0&&e.add({kind:"point",pos:[(g%16===-2?-1:1)*1.7,.35,g-2],color:16722458,power:2.2,dist:6,reach:18,mood:{amber:{color:16747050,power:3.2}}})}h.pipe("steel",[ae.x1-.12,1.05,-.6],[ae.x1-.12,1.05,st.z1+.4],.024),h.pipe("steel",[ae.x1-.12,1.05,st.z0-.4],[ae.x1-.12,1.05,Ht+1.2],.024);const x=(Pe.z0+Pe.z1)/2,b=Pe.z1-Pe.z0;h.box("steel",ae.x0+.04,Pe.y1+.09,x,.12,.18,b+.36),h.box("steelDark",ae.x0+.08,Pe.y0-.07,x,.2,.14,b+.36),h.box("steel",ae.x0+.04,(Pe.y0+Pe.y1)/2,Pe.z0-.09,.12,Pe.y1-Pe.y0,.18),h.box("steel",ae.x0+.04,(Pe.y0+Pe.y1)/2,Pe.z1+.09,.12,Pe.y1-Pe.y0,.18);for(const g of[Pe.z0+b/3,Pe.z0+2*b/3])h.box("steelDark",ae.x0-.14,(Pe.y0+Pe.y1)/2,g,.16,Pe.y1-Pe.y0,.08);h.slab("steelDark",ae.x0-.4,Pe.y0-.02,Pe.z0,ae.x0,Pe.y0,Pe.z1),h.slab("steelDark",ae.x0-.4,Pe.y1,Pe.z0,ae.x0,Pe.y1+.02,Pe.z1),h.box("orange",ae.x1-.03,st.h/2,st.z0-.08,.1,st.h,.16),h.box("orange",ae.x1-.03,st.h/2,st.z1+.08,.1,st.h,.16),h.box("orange",ae.x1-.03,st.h+.08,(st.z0+st.z1)/2,.1,.16,st.z1-st.z0+.32),h.box("yellow",ae.x1-.1,Je.socket.y-.02,Je.socket.z,.2,.5,.42),h.box("steelDark",ae.x1-.2,Je.socket.y-.2,Je.socket.z,.1,.06,.36,{bevel:0}),h.pipe("steelDark",[ae.x1-.06,Je.socket.y+.22,Je.socket.z],[ae.x1-.06,st.h+.2,Je.socket.z],.03,{seg:8}),h.pipe("steelDark",[ae.x1-.06,st.h+.2,Je.socket.z],[ae.x1-.06,st.h+.2,st.z1+.1],.03,{seg:8});{const g=Je.cabinet,y=ae.x0,T=ae.x0+.34;h.slab("steelDark",y,g.y-.48,g.z-.4,y+.03,g.y+.48,g.z+.4),h.slab("steelDark",y,g.y+.45,g.z-.4,T,g.y+.48,g.z+.4),h.slab("steelDark",y,g.y-.48,g.z-.4,T,g.y-.45,g.z+.4),h.slab("steelDark",y,g.y-.48,g.z-.4,T,g.y+.48,g.z-.37),h.slab("steelDark",y,g.y-.48,g.z+.37,T,g.y+.48,g.z+.4),h.box("steel",y+.12,g.y-.2,g.z,.16,.03,.5,{bevel:0})}h.slab("steelDark",ae.x1,st.h,st.z0,ae.x1+.4,st.h+.02,st.z1),Ut(h,"decal",a.masterskaya,ae.x1-.004,2.68,-24,"-x",1.7),Ut(h,"decal",a.veresk,ae.x1-.054,1.9,-5.8,"-x",3.3),Ut(h,"decal",a.kolco,ae.x0+.004,2.5,-7.8,"+x",2.6),Ut(h,"decal",a.hazard,1.55,.004,-24,"+y",.6,1.9),h.box("white",1.55,.35,-8.3,.8,.7,1,{ry:.06}),h.box("orange",1.6,.3,-9.5,.7,.6,.8,{ry:-.1}),h.box("teal",1.55,.95,-8.4,.6,.5,.7,{ry:.3}),h.box("steelDark",1.62,.72,-9.5,.5,.24,.5,{ry:.5});const M=[[-22.5,"clothBlue","cloth"],[-25.5,"cloth","clothWarm"],[-28.5,"clothWarm","clothBlue"]];for(const[g,y,T]of M)h.box(y,-1.52,.07,g,.82,.14,1.9,{ry:(t()-.5)*.08}),h.add(T,Nu(.95,1.5,t),h.mtx(-1.42+t()*.08,.15,g+.12,0,(t()-.5)*.35,0)),h.add(y,Nu(.5,.6,t,.05),h.mtx(-1.2,.19,g-.55,0,t()*.9,0)),h.box("white",-1.55,.2,g+.78,.5,.12,.3,{ry:t()*.4-.2,rz:.08});h.box("orange",-1.6,.24,-24,.5,.48,.5,{ry:.2}),Rt(h,"white",-1.55,.53,-24.05,.04,.035,.09,12),Rt(h,"steel",-1.72,.54,-23.9,.035,.035,.11,10),Rt(h,"steelDark",-1.45,.56,-23.85,.05,.06,.04,10),Rt(h,"glowWarm",-1.45,.64,-23.85,.04,.04,.12,10),Rt(h,"steelDark",-1.45,.72,-23.85,.055,.05,.03,10),h.box("white",-1.6,.2,-27,.46,.4,.46,{ry:-.3});for(let g=0;g<4;g++)h.box(["red","teal","clothWarm","white"][g],-1.6+(t()-.5)*.1,.42+g*.035,-27,.22,.03,.3,{ry:t()*1.2});h.box("rubber",-1,.09,-23.3,.13,.18,.3,{ry:.5}),h.box("rubber",-.92,.06,-23.65,.13,.12,.3,{ry:1.4,rz:1.3});for(let g=0;g<6;g++)Rt(h,"steel",-.95-t()*.6,.05,-26.2-t()*3.4,.04,.04,.1,10,t()<.5?wt:0,0,t()*3);h.box("clothWarm",-1.9,1.25,-21.6,.1,.7,.5,{rz:.06}),h.box("clothWarm",-1.86,.95,-21.6,.14,.3,.56),h.pipe("steel",[ae.x0+.03,1.65,-21.6],[ae.x0+.14,1.65,-21.6],.012,{seg:6}),Rt(h,"steelDark",-.9,.42,-25.4,.17,.17,.04,14);for(let g=0;g<3;g++){const y=g*2.0944;h.pipe("steel",[-.9,.42,-25.4],[-.9+Math.cos(y)*.2,0,-25.4+Math.sin(y)*.2],.012,{seg:6})}Ut(h,"decal",a.tally,ae.x0+.004,1.42,-25.4,"+x",1.25),Ut(h,"decal",a.photos,ae.x0+.004,1.2,-22.7,"+x",.62),Ut(h,"decal",a.nespat,ae.x0+.004,1.75,-28.4,"+x",1.5),Ut(h,"decal",a.smena,ae.x0+.004,.98,-28.2,"+x",.8);const C=["teal","white","steelDark","white","teal","steelDark"];for(let g=0;g<6;g++){const y=-1.67+g*.668;h.box(C[g],y,.96+t()*.02,Ht-.25,.65,1.92,.5,{rz:(t()-.5)*.05,ry:(t()-.5)*.08}),h.box("steelDark",y,1.5,Ht+.012,.3,.16,.02)}h.box("steelDark",0,2.3,Ht-.2,4,.7,.06,{rx:.04}),h.box("white",-.9,2.82,Ht-.25,1.9,.3,.5,{rz:.03}),h.box("orange",1.1,2.8,Ht-.25,1.7,.34,.5,{rz:-.04}),h.box("steel",.1,1.28,Ht+.05,3.9,.5,.03,{rz:.13}),h.box("steel",-.1,.55,Ht+.055,3.9,.42,.03,{rz:-.17}),h.box("steelDark",-.95,1.5,Ht+.1,.14,3,.14),h.box("steelDark",.95,1.5,Ht+.1,.14,3,.14),h.box("steelDark",0,2.05,Ht+.1,4,.12,.1),h.box("weld",.1,1.535,Ht+.068,3.9,.022,.012,{rz:.13}),h.box("weld",.1,1.025,Ht+.068,3.9,.022,.012,{rz:.13}),h.box("weld",-.1,.765,Ht+.072,3.9,.022,.012,{rz:-.17}),h.box("weld",-.1,.335,Ht+.072,3.9,.022,.012,{rz:-.17});for(const g of[-.95,.95])for(const y of[.4,1.2,2.05])Ut(h,"decal",a.scorch,g,y,Ht+.18,"+z",.6,.6);for(const g of[-1.98,1.98])Ut(h,"decal",a.scorch,g*.99,1.3,Ht+.3,g<0?"+x":"-x",.9,1.4);Ut(h,"decal",a.nikogo,.1,1.72,Ht+.19,"+z",2.3),Rt(h,"red",1.55,.62,-34.7,.11,.11,1.2,16),Gn(h,"red",1.55,1.22,-34.7,.11,1,.8,1,12),Rt(h,"teal",1.28,.62,-34.75,.11,.11,1.2,16),Gn(h,"teal",1.28,1.22,-34.75,.11,1,.8,1,12),Rt(h,"bronze",1.55,1.34,-34.7,.025,.03,.1,8),Rt(h,"bronze",1.28,1.34,-34.75,.025,.03,.1,8),h.box("yellow",1.1,.2,-34.2,.5,.4,.36,{ry:.3}),h.cable("rubber",[[1.55,1.3,-34.7],[1.3,.5,-34.3],[.7,.03,-34.5],[.1,.03,-35],[-.4,.03,-35.5]],.014),h.cable("red",[[1.28,1.3,-34.75],[1,.4,-34.6],[.5,.03,-34.9],[-.2,.03,-35.2],[-.42,.04,-35.52]],.012),Gn(h,"steelDark",-.9,.1,-34.7,.16,1,.9,.8,12),h.box("yellow",-.5,.12,-34.25,.3,.2,.14,{ry:.5,rx:.5}),h.box("glowCool",-.52,.16,-34.33,.24,.14,.02,{ry:.5,rx:.5});for(const g of[-1,1]){const y=g*2,T=g<0?[[ae.z0,ae.z1]]:[[ae.z0,ae.z1]];for(const[E,z]of T)h.slab("steelDark",y-g*.1,2.3,E,y-g*0,2.42,z);h.slab("steelDark",y-g*.34,0,ae.z0,y-g*.08,.014,ae.z1);for(let E=-.3;E>Ht;E-=.22)h.slab("steel",y-g*.32,.014,E-.03,y-g*.1,.022,E)}let A=0;for(let g=-4;g>Ht+2;g-=4,A++){for(const y of[-1,1]){if(y<0&&g>Pe.z0-1&&g<Pe.z1+1||y>0&&g>st.z0-1.5&&g<st.z1+1.5||y<0&&g<-21&&g>-30)continue;const T=y*2,E=(A*2+(y>0?1:0)+i)%5;if(h.pipe("steel",[T-y*.05,.83,g+1.7],[T-y*.05,2.3,g+1.7],.022,{seg:8}),h.pipe("copper",[T-y*.05,.83,g+1.62],[T-y*.05,2.3,g+1.62],.014,{seg:8}),E===0){h.box("steelDark",T-y*.08,1.55,g,.16,.9,.6),h.box("steel",T-y*.165,1.55,g,.012,.8,.5),h.box("yellow",T-y*.175,1.86,g,.006,.1,.34);for(let z=0;z<3;z++)h.box(z===1?"glowRed":"glowWarm",T-y*.175,1.3,g-.12+z*.12,.008,.025,.04);h.pipe("steelDark",[T-y*.08,2,g],[T-y*.08,2.3,g],.03,{seg:8})}else if(E===1){h.box("steelDark",T-y*.03,1.9,g,.06,.5,.9);for(let z=0;z<6;z++)h.box("steel",T-y*.065,1.71+z*.075,g,.02,.03,.8,{rz:y*.5})}else if(E===2)Rt(h,"red",T-y*.13,1.25,g-.2,.07,.07,.42,14),Gn(h,"red",T-y*.13,1.46,g-.2,.07,1,.6,1,10),Rt(h,"steelDark",T-y*.13,1.52,g-.2,.02,.025,.07,8),h.box("white",T-y*.07,1.5,g+.25,.14,.3,.36),h.box("red",T-y*.143,1.5,g+.25,.006,.16,.05),h.box("red",T-y*.143,1.5,g+.25,.006,.05,.16);else if(E===3){h.box("steelDark",T-y*.04,1.4,g,.08,.6,.7);for(let z=0;z<2;z++)Yt(h,"red",T-y*.14,1.4,g-.16+z*.32,.07,.014,0,wt,16),Rt(h,"steel",T-y*.09,1.4,g-.16+z*.32,.018,.018,.1,8,0,wt);h.pipe("copper",[T-y*.09,1.4,g-.34],[T-y*.09,1.4,g+.34],.025,{seg:8})}else{h.box("steelDark",T-y*.02,1.6,g,.04,.7,1);for(let z=0;z<4;z++)h.box(z%2?"white":"yellow",T-y*.045,1.5+z%2*.24,g-.33+z*.2,.004,.2+z%3*.03,.15,{rx:(z-1.5)*.06})}}A%2===1&&(h.box("steel",0,2.62,g+2,3,.24,.42),h.box("steelDark",0,2.62,g+2,3.04,.05,.46),h.cable("rubber",[[-1.2,2.5,g+1.6],[-.6,2.2,g+1.2],[.1,2.12-A%3*.08,g+.6],[.7,2.3,g+.1],[1,2.78,g-.3]],.016))}for(const g of[-1,1]){const y=g*2,T=g<0?[[ae.z0+4.6,Pe.z0-.5],[Pe.z1+.5,-.4]]:[[ae.z0+4.6,st.z0-.5],[st.z1+.5,-.4]];for(const[E,z]of T){h.pipe("rubber",[y-g*.035,2.12,E],[y-g*.035,2.12,z],.026,{seg:8}),h.pipe("orange",[y-g*.03,2.06,E],[y-g*.03,2.06,z],.016,{seg:8}),h.pipe("rubber",[y-g*.03,2.02,E],[y-g*.03,2.02,z],.012,{seg:6});for(let L=z-.8;L>E;L-=1.6)h.box("steel",y-g*.04,2.07,L,.075,.16,.04,{bevel:0})}}for(let g=0,y=-3.9;y>Ht+3;y-=4,g++)!(y>Pe.z0-1.2&&y<Pe.z1+1.2)&&!(y<-20.5&&y>-30.5)&&Ut(h,"decal",a["sec"+g%4],ae.x0+.056,.52,y-.9,"+x",.62),y>st.z0-2&&y<st.z1+2||Ut(h,"decal",a["sec"+(g+2)%4],ae.x1-.056,.52,y+.9,"-x",.62);for(const g of[-6.5,-18.5,-31]){h.box("steel",0,.008,g,.9,.016,.9);for(const[y,T]of[[-.4,-.4],[.4,-.4],[-.4,.4],[.4,.4]])h.box("yellow",y,.018,g+T,.1,.006,.1);h.box("steelDark",0,.02,g,.24,.012,.06)}for(let g=0;g<16;g++)h.box("white",(t()-.5)*3,.006,-3-t()*31,.21,.003,.297,{ry:t()*3});h.box("steelDark",1.35,.5,-17.2,.6,.04,.95),h.box("steelDark",1.35,.14,-17.2,.6,.04,.95);for(const[g,y]of[[-.27,-.44],[.27,-.44],[-.27,.44],[.27,.44]])h.pipe("steel",[1.35+g,.06,-17.2+y],[1.35+g,.85,-17.2+y],.016,{seg:6}),Rt(h,"rubber",1.35+g,.05,-17.2+y,.05,.05,.03,10,0,wt);h.box("orange",1.35,.66,-17.3,.44,.26,.5,{ry:.2}),h.box("teal",1.3,.24,-17.1,.4,.16,.6,{ry:-.1});{const g=h.build(o.corridor);g.userData.room="corridor",u.add(g)}e.add({kind:"spot",pos:[-10.5,6.2,x+7.6],to:[1.2,.2,x-1.5],color:16773336,power:4.5,dist:40,decay:0,angle:.36,penumbra:.2,prio:4,reach:22}),f.sun={pos:[-10.5,6.2,x+7.6],to:[1.2,.2,x-1.5]},f.dust.push({box:[ae.x0,.05,Pe.z0-2.5,ae.x1,2.4,Pe.z1-.5],n:1300,color:16773336,power:1.5,sun:!0}),f.dust.push({box:[ae.x0,.2,-30,ae.x1,ae.h,-1],n:900,color:12374256,power:.4}),e.add({kind:"point",pos:[-1.45,.78,-23.85],color:16752704,power:3.4,dist:6.5,reach:18,prio:3,wakeKeep:.5,flicker:g=>.9+.1*Math.sin(g*7.3)*Math.sin(g*2.9)}),e.add({kind:"point",pos:[-.5,.35,-34.3],color:13623551,power:3.2,dist:7,reach:18,prio:2,flicker:g=>.8+.2*Math.sin(g*13)*Math.sin(g*3.7)}),d.push([.3,1.6,Ht,3.2],[ae.x0-.2,2.2,Pe.z0,1.25],[1.6,ae.h,-18.5,1.5],[ae.x1,.1,-26.6,1.3]),f.steam.push({pos:[-1.56,2.6,-31.5],dir:[.5,-1,.2],len:1.8,n:40,size:.6,color:13161184,power:.3})}{const h=new fr,m=mr.x,x=mr.z;h.slab("floor",ce.x0-.4,-.2,ce.z0,ce.x1,0,ce.z1),h.slab("ceil",ce.x0-.4,ce.h,ce.z0,ce.x1,ce.h+.2,ce.z1),h.wall("wall","x",ce.x1+.2,ce.z0-.4,ce.z1+.4,0,ce.h,.4,[{a0:gt.z0,a1:gt.z1,y0:0,y1:gt.h}]);for(const y of[gt.z0-.1,gt.z1+.1])h.box("steelDark",ce.x1-.04,gt.h/2,y,.14,gt.h,.2);h.box("steelDark",ce.x1-.04,gt.h+.1,(gt.z0+gt.z1)/2,.14,.2,gt.z1-gt.z0+.4),h.slab("wall",ce.x0-.4,0,ce.z0-.4,ce.x1,ce.h,ce.z0),h.slab("wall",ce.x0-.4,0,ce.z1,ce.x1,ce.h,ce.z1+.4),h.slab("wall",ce.x0-.4,ae.h,ce.z0,ce.x0,ce.h,ce.z1),h.wall("wallDark","x",ce.x0-.03,ce.z0,ce.z1,0,ae.h,.06,[{a0:st.z0,a1:st.z1,y0:0,y1:st.h}]),h.slab("wallDark",ce.x1-.05,0,ce.z0,ce.x1,1.2,gt.z0-.2),h.slab("wallDark",ce.x1-.05,0,gt.z1+.2,ce.x1,1.2,ce.z1),h.slab("wallDark",ce.x0,0,ce.z0,ce.x1,1.2,ce.z0+.05),h.slab("wallDark",ce.x0,0,ce.z1-.05,ce.x1,1.2,ce.z1);for(const y of[ce.x0+.12,7.07,11.73,ce.x1-.12])for(const T of[ce.z0+.12,ce.z1-.12])h.box("steelDark",y,ce.h/2,T,.24,ce.h,.24);for(const y of[-19.6,-24,-28.4]){h.box("steelDark",(ce.x0+ce.x1)/2,ce.h-.15,y,14,.3,.22),y===-24?h.box("steelDark",ce.x1-.12,(ce.h+gt.h+.2)/2,y,.24,ce.h-gt.h-.2,.24):h.box("steelDark",ce.x1-.12,ce.h/2,y,.24,ce.h,.24);for(let T=ce.x0+1;T<ce.x1;T+=2)h.box("steelDark",T,ce.h-.45,y,.06,.6,.06,{rz:(Math.round(T)%4<2?1:-1)*.6})}h.box("yellow",(ce.x0+ce.x1)/2,4.85,x,14,.26,.2),h.box("steelDark",m+.3,4.66,x,.6,.2,.44),h.pipe("steel",[m+.3,4.6,x],[m+.3,4.48,x],.02,{seg:8}),Yt(h,"steel",m+.3,4.42,x,.06,.018,0,0,12),h.pipe("steel",[ce.x0+.4,5.2,ce.z0+.5],[ce.x1-.2,5.2,ce.z0+.5],.1),h.pipe("copper",[ce.x0+.4,4.9,ce.z0+.35],[ce.x1-.2,4.9,ce.z0+.35],.05),h.pipe("white",[ce.x1-.3,5.1,ce.z0+.4],[ce.x1-.3,5.1,ce.z1-.2],.08);for(const[y,T,E]of[[5.2,-20.8,0],[13.6,-20.8,0],[5.2,-27.2,0],[13.6,-27.2,0]])h.box("steelDark",y,ce.h-.4,T,.9,.12,.9),h.box(E?"glowCool":"rubber",y,ce.h-.47,T,.7,.02,.7),h.pipe("steelDark",[y,ce.h,T],[y,ce.h-.36,T],.03,{seg:8});for(let y=0;y<3;y++){const T=wt+y*2.0944,E=m+Math.cos(T)*2.05,z=x+Math.sin(T)*2.05;h.pipe("steelDark",[m+Math.cos(T)*.9,.42,x+Math.sin(T)*.9],[E,.1,z],.065),Rt(h,"steel",E,.04,z,.24,.27,.08,16),h.pipe("yellow",[m+Math.cos(T)*.75,1.3,x+Math.sin(T)*.75],[E-Math.cos(T)*.3,.14,z-Math.sin(T)*.3],.03,{seg:8})}h.add("steelDark",new Vt(1.2,1.32,.3,6),h.mtx(m,.15,x,0,.3,0)),Rt(h,"orange",m,.86,x,.72,.74,1.12,28);for(const y of[.42,.86,1.3])Yt(h,"steelDark",m,y,x,.745,.04,wt,0,36);for(let y=0;y<12;y++){const T=y*gr/6;h.box("steelDark",m+Math.cos(T)*.75,.86,x+Math.sin(T)*.75,.04,.8,.07,{ry:-T})}h.add("steel",new Vt(.88,.88,.08,8),h.mtx(m,1.46,x,0,.2,0)),Rt(h,"white",m+.07,1.95,x-.04,.5,.5,.9,24),Gn(h,"white",m+.07,2.4,x-.04,.5,1,.42,1,24);for(const y of[1.72,2.2])Yt(h,"yellow",m+.07,y,x-.04,.512,.022,wt,0,32);Rt(h,"steel",m,3.4,x,.1,.12,1.9,14),[[2.86,.56],[3.22,.43],[3.55,.3]].forEach(([y,T],E)=>{Yt(h,"copper",m,y,x,T,.05,wt,0,40);for(let z=0;z<3;z++){const L=z*2.0944+E;h.pipe("steelDark",[m,y,x],[m+Math.cos(L)*T,y,x+Math.sin(L)*T],.014,{seg:6})}});for(let y=0;y<3;y++){const T=wt+gr/3+y*2.0944;h.pipe("bronze",[m+Math.cos(T)*.86,1.5,x+Math.sin(T)*.86],[m+Math.cos(T)*.8,2.7,x+Math.sin(T)*.8],.035,{seg:10}),h.pipe("bronze",[m+Math.cos(T)*.8,2.7,x+Math.sin(T)*.8],[m+Math.cos(T)*.22,4.3,x+Math.sin(T)*.22],.03,{seg:10}),Gn(h,"steel",m+Math.cos(T)*.22,4.33,x+Math.sin(T)*.22,.055,1,1,1,10),Gn(h,"steelDark",m+Math.cos(T)*.8,2.7,x+Math.sin(T)*.8,.06,1,1,1,10)}Gn(h,"glowBeacon",m,4.48,x,.13,1,1,1,16),Yt(h,"steelDark",m,4.48,x,.17,.012,0,0,16),Yt(h,"steelDark",m,4.48,x,.17,.012,0,wt,16),h.box("teal",m-.98,1.05,x+.25,.34,.62,.56,{ry:.12}),Ut(h,"screens",c.scope,m-1.158,1.12,x+.228,"-x",.4,.25),h.box("glowRed",m-1.156,.84,x+.4,.02,.03,.03),h.box("glowWarm",m-1.156,.84,x+.3,.02,.03,.03),h.box("glowWarm",m-1.156,.84,x+.2,.02,.03,.03),h.box("yellow",m+.55,1.75,x+.62,.42,.32,.26,{ry:-.7}),h.box("white",m-.3,2,x+.66,.5,.36,.2,{ry:.25,rz:.06});for(let y=0;y<3;y++)h.box("steelDark",m+1.55+y*.36,.14,x+1.25-y*.12,.3,.28,.2,{ry:.3}),Rt(h,"copper",m+1.5+y*.36,.31,x+1.24-y*.12,.022,.022,.06,8);const b=new Oa([0,.1,.2,.3,.4,.5,.56].map(y=>new ze(y,y*y*.7)),28);h.add("white",b,h.mtx(m+1,2.55,x-1,1,-.8,0)),h.pipe("steel",[m+.45,2.3,x-.4],[m+1,2.55,x-1],.03,{seg:8}),h.pipe("steel",[m-.75,0,x-1.75],[m-.42,2.7,x-.62],.022,{seg:8}),h.pipe("steel",[m-.35,0,x-1.9],[m-.02,2.7,x-.77],.022,{seg:8});for(let y=1;y<8;y++){const T=y/8.2;h.pipe("steel",[m-.75+.33*T,2.7*T,x-1.75+1.13*T],[m-.35+.33*T,2.7*T,x-1.9+1.13*T],.014,{seg:6})}h.box("white",m-1.38,.3,x-.55,.03,.46,1.05),Ut(h,"decal",a.mayak,m-1.4,.3,x-.55,"-x",.9);const M=[[ce.x0+.12,.45,-19.4,"+x"],[ce.x1-.12,.45,-27.2,"-x"],[8.6,.45,ce.z0+.12,"+z"]],C=["orange","teal","red"];M.forEach(([y,T,E,z],L)=>{z==="+z"?h.box("yellow",y,T+.2,E,.6,.7,.2):h.box("yellow",y,T+.2,E,.2,.7,.6),h.pipe("steel",[y,T+.55,E],[y,ce.h-.4,E],.035,{seg:8});for(let F=0;F<3;F++){const U=Math.atan2(E-x,y-m)+(F-1)*.5,G=(F-1)*.16,W=m+Math.cos(U)*1,B=x+Math.sin(U)*1,oe=y-W,q=E-B,te=Math.hypot(oe,q),se=-q/te,_e=oe/te,K=[[m+Math.cos(U)*.72,.62,x+Math.sin(U)*.72],[W+Math.cos(U)*.35,.34,B+Math.sin(U)*.35],[W+oe*.12,.04,B+q*.12]];for(const Y of[.3,.5,.7,.88]){const ie=(t()-.5)*1.3+G*3;K.push([W+oe*Y+se*ie,.035+t()*.01,B+q*Y+_e*ie])}K.push([y+(z==="+x"?.3:z==="-x"?-.3:G),.05,E+(z==="+z"?.3:G)],[y+(z==="+z"?G:0),T,E+(z!=="+z"?G:0)]),h.cable(C[L],K,.028+t()*.018,{seg:7})}}),h.cable("rubber",[[m+.3,4.4,x],[m+.5,3.9,x+.2],[m+.2,3.7,x+.1],[m,3.62,x]],.018),h.cable("orange",[[m+.3,4.4,x],[m-.5,3.6,x-.3],[m-.6,2.7,x-.1],[m-.3,2.3,x+.5]],.016),h.box("steel",6.25,.95,ce.z1-.45,2.5,.06,.8);for(const y of[5.1,7.4])for(const T of[ce.z1-.12,ce.z1-.78])h.box("steelDark",y,.46,T,.06,.92,.06);h.box("steelDark",6.25,.3,ce.z1-.45,2.3,.04,.7),h.box("red",5.5,1.08,ce.z1-.4,.5,.2,.26,{ry:.2}),h.box("steelDark",6.6,1.2,ce.z1-.3,.6,.44,.12,{rx:-.12}),Ut(h,"screens",c.term,6.6,1.2,ce.z1-.368,"-z",.52,.325),h.box("white",7.1,1,ce.z1-.5,.3,.04,.22,{ry:.4}),Rt(h,"white",5.95,1.03,ce.z1-.62,.04,.035,.09,12);for(const y of[-22.1,-20.5,-18.9])h.box("steelDark",ce.x1-.1,1.4,y,.06,2.8,.06),h.box("steelDark",ce.x1-.74,1.4,y,.06,2.8,.06);for(const y of[.5,1.4,2.3]){h.box("steel",ce.x1-.42,y,-20.5,.7,.04,3.3);for(let T=0;T<4;T++)t()<.8&&h.box(["orange","white","teal","steelDark"][(T+y*10|0)%4],ce.x1-.42,y+.02+.2,-21.7+T*.8+t()*.1,.5+t()*.1,.4,.55+t()*.15,{ry:(t()-.5)*.2})}h.box("orange",3.7,.4,-29.9,.9,.8,.9,{ry:.1}),h.box("white",4.4,.3,-29.6,.6,.6,.7,{ry:-.3}),h.box("teal",3.75,1.05,-29.95,.6,.5,.6,{ry:.5});for(const[y,T,E]of[[14.2,-29.8,"teal"],[14.9,-29.7,"teal"],[14.55,-29.25,"orange"]])Rt(h,E,y,.45,T,.29,.29,.9,20),Yt(h,"steelDark",y,.3,T,.295,.015,wt,0,20),Yt(h,"steelDark",y,.62,T,.295,.015,wt,0,20);const A=[[6.2,-27.4],[12.9,-20.4]];for(const[y,T]of A){for(let z=0;z<3;z++){const L=z*2.0944+.4;h.pipe("steelDark",[y,1.1,T],[y+Math.cos(L)*.42,0,T+Math.sin(L)*.42],.018,{seg:6})}h.pipe("steelDark",[y,1.05,T],[y,1.95,T],.02,{seg:8});const E=Math.atan2(m-y,x-T);h.box("yellow",y,2.02,T,.44,.3,.16,{ry:E,rx:-.15}),h.box("glowWarm",y+Math.sin(E)*.085,2.035,T+Math.cos(E)*.085,.36,.22,.02,{ry:E,rx:-.15}),e.add({kind:"spot",pos:[y+Math.sin(E)*.12,2.03,T+Math.cos(E)*.12],to:[m,2.4,x],color:16757866,power:26,dist:18,angle:.62,penumbra:.5,prio:3,reach:20}),h.cable("rubber",[[y,1.2,T],[y-.2,.3,T+.3],[y-.6,.03,T+.2],[y-1.4*Math.sign(y-m),.03,T+1*Math.sign(x-T)]],.015)}h.box("yellow",10.1,.13,-25.9,.44,.22,.2,{rx:-.5}),h.box("glowWarm",10.1,.17,-26,.36,.16,.02,{rx:-.5}),h.cable("rubber",[[10.1,.1,-25.8],[10.4,.03,-25.2],[10.2,.03,-24.9]],.015),e.add({kind:"spot",pos:[10.1,.2,-26.02],to:[10.1,2.6,-31],color:16757866,power:30,dist:14,angle:.72,penumbra:.6,prio:2.5,reach:20}),Ut(h,"decal",a.zvuchit,10.2,3,ce.z0+.004,"+z",5),Ut(h,"decal",a.derzhat,ce.x1-.004,3.55,(gt.z0+gt.z1)/2,"-x",3.6),h.box("steelDark",Je.terminal.x+.12,.6,Je.terminal.z,.2,1.2,.5),h.box("steelDark",Je.terminal.x+.04,Je.terminal.y+.05,Je.terminal.z,.14,.42,.6,{rz:.25}),Ut(h,"screens",c.term,Je.terminal.x-.035,Je.terminal.y+.07,Je.terminal.z,"-x",.5,.31),Ut(h,"decal",a.schema,11.6,2.5,ce.z1-.004,"-z",2.3),Ut(h,"decal",a.ne,5.2,1.75,ce.z0+.004,"+z",2.4),Ut(h,"decal",a.slyshit,8.6,1.7,ce.z1-.054,"-z",1.5),Ut(h,"decal",a.tally,13.6,1.9,ce.z0+.004,"+z",1.3);{const y=h.build(o.bay);y.userData.room="bay",u.add(y)}const g=y=>{const T=y*.5%1;let E=.3;for(let z=0;z<3;z++){const L=T-z*.12;L>0&&L<.1&&(E+=Math.exp(-L*40)*1.6)}return E};l.beaconDef=e.add({kind:"point",pos:[m,4.5,x],color:16758880,power:12,dist:16,prio:4,reach:22,flicker:g}),l.beaconPulse=g,e.add({kind:"point",pos:[6.6,1.35,ce.z1-.8],color:5822664,power:2,dist:4,reach:18}),e.add({kind:"point",pos:[m-1.5,1.1,x+.25],color:16756800,power:1.6,dist:3.5,reach:18}),e.add({kind:"point",pos:[ce.x1-.5,.9,-27.2],color:10470655,power:14,dist:7,reach:18,prio:2,flicker:y=>{const T=y*1.7%1;return T<.07?1:T>.5&&T<.53?.6:.02}}),d.push([ce.x1,.8,ce.z0,3.6],[12.5,5,ce.z0,2.6],[11.8,0,-26.6,1.5],[4,ce.h,-29,2.6]),d.push([ce.x1-.05,1.3,(gt.z0+gt.z1)/2,2.4]),f.dust.push({box:[ce.x0,.2,ce.z0,ce.x1,ce.h,ce.z1],n:1800,color:14477567,power:.5}),f.steam.push({pos:[ce.x0+.5,5.1,ce.z0+.6],dir:[.4,-1,.5],len:2.4,n:50,size:.9,color:13161184,power:.3}),f.sparks.push({pos:[ce.x1-.25,.95,-27.2],dir:[-1,.6,.1],n:60,period:1/1.7})}{const h=new fr,m=(De.z0+De.z1)/2,x=De.z0+.5,b=De.z1-.5;h.slab("floor",De.x0,-.2,De.z0,De.x1,0,De.z1),h.slab("floor",ce.x1,-.2,gt.z0,De.x0,0,gt.z1),h.slab("steelDark",ce.x1,gt.h,gt.z0,De.x0,gt.h+.05,gt.z1),h.slab("ceil",De.x0,De.h,De.z0,De.x1,De.h+.2,De.z1),h.slab("wall",De.x0,0,De.z0-.4,De.x1+.4,De.h,De.z0),h.slab("wall",De.x0,0,De.z1,De.x1+.4,De.h,De.z1+.4),h.wall("wall","x",De.x1+.2,De.z0,De.z1,0,De.h,.4,[{a0:x,a1:b,y0:.5,y1:3}]),h.slab("wallDark",De.x1-.05,0,De.z0,De.x1,.5,De.z1),h.box("steelDark",De.x1-.04,3.08,m,.14,.16,b-x+.3),h.box("steelDark",De.x1-.06,.44,m,.24,.12,b-x+.3);for(const M of[x-.07,b+.07])h.box("steelDark",De.x1-.04,1.75,M,.14,2.6,.14);for(const M of[x+(b-x)/3,x+2*(b-x)/3])h.box("steelDark",De.x1+.08,1.75,M,.2,2.5,.1);h.pipe("steel",[De.x1-.5,.95,x],[De.x1-.5,.95,b],.028);for(let M=x;M<=b+.01;M+=(b-x)/4)h.pipe("steel",[De.x1-.5,0,M],[De.x1-.5,.95,M],.022,{seg:8});for(const M of[De.z0+.1,De.z1-.1])h.box("steelDark",De.x0+1.4,De.h/2,M,.2,De.h,.2),h.box("steelDark",De.x1-1.6,De.h/2,M,.2,De.h,.2);h.box("steelDark",(De.x0+De.x1)/2,De.h-.1,m,.2,.2,De.z1-De.z0),h.box("steel",De.x0+1.2,.22,De.z1-.45,1.6,.06,.5),h.box("steelDark",De.x0+.5,.11,De.z1-.45,.06,.22,.44),h.box("steelDark",De.x0+1.9,.11,De.z1-.45,.06,.22,.44);{const M=h.build(o.gallery);M.userData.room="gallery",u.add(M)}e.add({kind:"point",pos:[De.x0+1.2,2.6,m],color:9417983,power:2.2,dist:8,reach:12,prio:2,wakeKeep:1}),e.add({kind:"point",pos:[De.x1-.3,1.8,m],color:10124543,power:7,dist:10,reach:14,prio:3,wakeKeep:1,flicker:M=>.7+.3*Math.sin(M*.9)*Math.sin(M*.37)}),d.push([De.x0,1.3,m,2.8],[De.x1,.3,De.z0,2.4],[De.x1,3.2,De.z1,2.4],[(De.x0+De.x1)/2,De.h,m,2.2]),f.dust.push({box:[De.x0,.2,De.z0,De.x1,De.h,De.z1],n:500,color:12167423,power:.6})}{const h=[];for(let g=-2;g>ae.z0;g-=4)for(const y of[-1,1])if(!(y<0&&g>Pe.z0&&g<Pe.z1))for(let T=.22;T<2.7;T+=.42)for(const E of[-.09,.09])h.push([y*1.798,T,g+E,"x"]);for(const g of[1.3,2.8,4.3,5.8])for(const y of[-1,1])for(let T=.25;T<2.4;T+=.43)h.push([y*1.358,T,g,"x"]);for(let g=Pe.z0-.1;g<=Pe.z1+.1;g+=.28)h.push([ae.x0+.102,Pe.y1+.09,g,"x"],[ae.x0+.182,Pe.y0-.07,g,"x"]);for(let g=Pe.y0+.1;g<Pe.y1;g+=.28)h.push([ae.x0+.102,g,Pe.z0-.09,"x"],[ae.x0+.102,g,Pe.z1+.09,"x"]);for(let g=0;g<12;g++)h.push([mr.x+Math.cos(g*gr/6)*.8,1.502,mr.z+Math.sin(g*gr/6)*.8,"y"]);for(let g=.25;g<2;g+=.35)for(const y of[-1,1])h.push([y*(Kt.w/2+.07),g,Ce.z0+.072,"z"],[y*(Kt.w/2+.07),g,-.072,"z"]);for(let g=.2;g<st.h;g+=.35)h.push([ae.x1-.082,g,st.z0-.08,"x"],[ae.x1-.082,g,st.z1+.08,"x"]);for(const g of[ce.x0+.12,7.07,11.73,ce.x1-.12])for(let y=.3;y<5.2;y+=.6)h.push([g,y,ce.z0+.242,"z"],[g,y,ce.z1-.242,"z"]);const m=new Eh(new Vt(.017,.019,.014,6),new Ri({color:8225674,metalness:.9,roughness:.5}),h.length),x=new ct,b=new Qt,M=new Qt,C=new k(1,1,1),A={x:new Qt().setFromEuler(new Fn(0,0,wt)),y:new Qt,z:new Qt().setFromEuler(new Fn(wt,0,0))};h.forEach(([g,y,T,E],z)=>{ji(T,b),M.copy(b).multiply(A[E]),m.setMatrixAt(z,x.compose(an(g,y,T),M,C))}),m.frustumCulled=!1,m.receiveShadow=!0,u.add(m)}const p=(h,m)=>m>.2?"airlock":h>ce.x1+.2?"gallery":h>2.2?"bay":"corridor",v={airlock:0,corridor:0,bay:0,gallery:0};function _(h){const m=p(h[0],h[2]),x=s[m].uFrost.value;if(v[m]>=x.length)throw new Error("очагов Узора в помещении "+m+" больше "+x.length);return x[v[m]].set(...h),{room:m,index:v[m]++,vec:x[v[m]-1]}}return d.forEach(_),{group:u,mats:r,matsOf:o,rooms:s,fx:f,seeds:d,addSeed:_,dynamic:l}}const li={uTime:{value:0},uPx:{value:1080},uKeep:{value:1},uSunDir:{value:new k},uSunPos:{value:new k}},_2=()=>new On({transparent:!0,depthWrite:!1,blending:Ti,side:Mi,uniforms:{uColor:{value:new Oe},uPower:{value:1},uTime:li.uTime},vertexShader:`
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
    }`});function y2(i,e){const t=new zt,n=ki(e*31+7),s=[],r=new k(0,1,0);for(const x of i.shafts){const b=an(...x.pos),C=an(...x.to).clone().sub(b),A=x.len||C.length();C.normalize();const g=new Vt(x.r1,x.r0,1,28,6,!0);g.translate(0,.5,0);const y=g.attributes.uv;for(let z=0;z<y.count;z++)y.setY(z,1-y.getY(z));const T=_2();T.uniforms.uColor.value.set(x.color),T.uniforms.uPower.value=x.power;const E=new $e(g,T);E.position.copy(b),E.quaternion.setFromUnitVectors(r,C),E.scale.set(1,A,1),t.add(E),s.push({def:x,mat:T})}const o=[],a=[],c=[],u=[],f=(x,b,M,C,A,g,y,T,E)=>{o.push(x.x,x.y,x.z),a.push(b.x,b.y,b.z),c.push(M,C,A,g),u.push(y.r*T,y.g*T,y.b*T,E)},d=new Oe,l=new k,p=new Qt;for(const x of i.dust){const[b,M,C,A,g,y]=x.box;d.set(x.color);for(let T=0;T<x.n;T++){const E=[b+n()*(A-b),M+n()*(g-M),C+n()*(y-C)],z=an(...E);ji(E[2],p),l.set((n()-.5)*.05,(n()-.5)*.03,(n()-.5)*.05).applyQuaternion(p),f(z,l,n(),14+n()*16,.003+n()*n()*.009,0,d,x.power*(.3+n()*.7),x.sun?3:0)}}for(const x of i.steam){d.set(x.color);const b=an(...x.pos);ji(x.pos[2],p);for(let M=0;M<x.n;M++)l.set(x.dir[0]+(n()-.5)*.5,x.dir[1]+(n()-.5)*.3,x.dir[2]+(n()-.5)*.5).multiplyScalar(x.len/3.2).applyQuaternion(p),f(b,l,M/x.n+n()*.02,3.2,x.size*.12,x.size*(.8+n()*.5),d,x.power,1)}for(const x of i.sparks){d.set(16767392);const b=an(...x.pos);ji(x.pos[2],p);for(let M=0;M<x.n;M++)l.set(x.dir[0]+(n()-.5)*1.6,x.dir[1]+n()*1.4,x.dir[2]+(n()-.5)*1.6).multiplyScalar(1.4+n()*1.6).applyQuaternion(p),f(b,l,n()*.06,x.period,.016+n()*.016,0,d,14,2)}const v=new Ft;v.setAttribute("position",new ot(o,3)),v.setAttribute("aVel",new ot(a,3)),v.setAttribute("aPar",new ot(c,4)),v.setAttribute("aCol",new ot(u,4));const _=new On({transparent:!0,depthWrite:!1,blending:Ti,uniforms:{uTime:li.uTime,uPx:li.uPx,uKeep:li.uKeep,uMap:{value:Wv()},uSunPos:li.uSunPos,uSunDir:li.uSunDir,uDown:{value:new k(0,-1,0)}},vertexShader:`
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
            float sx = (p.x - (${(Pe.x-.2).toFixed(2)})) / uSunDir.x;
            vec3 hp = p - uSunDir * sx;
            float fz = atan(hp.z, 42.0 - hp.y) * 42.0, fy = 42.0 - length(vec2(hp.z, 42.0 - hp.y));
            float inw = smoothstep(${Pe.z0.toFixed(1)}, ${(Pe.z0+.12).toFixed(2)}, fz) * (1.0 - smoothstep(${(Pe.z1-.12).toFixed(2)}, ${Pe.z1.toFixed(1)}, fz))
              * smoothstep(${Pe.y0.toFixed(1)}, ${(Pe.y0+.08).toFixed(2)}, fy) * (1.0 - smoothstep(${(Pe.y1-.08).toFixed(2)}, ${Pe.y1.toFixed(1)}, fy));
            float pane = abs(fract((fz - (${Pe.z0.toFixed(1)})) / ${((Pe.z1-Pe.z0)/3).toFixed(4)}) - 0.5);
            inw *= 1.0 - smoothstep(0.455, 0.47, pane) * step(0.2, abs(fz - ${Pe.z0.toFixed(1)})) ;
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
      void main() { gl_FragColor = vec4(vCol.rgb * texture2D(uMap, gl_PointCoord).a, 1.0); }`}),h=new Jc(v,_);h.frustumCulled=!1,t.add(h);const m=new zt;for(const x of t.children.slice())x.isMesh&&m.add(x);return t.add(m),{group:t,shafts:s,points:h,shaftGroup:m}}function M2(i){const e=ki(i*101+3),t=new zt,n=[],s=[];for(let h=0;h<2600;h++){const m=e()*2-1,x=e()*Math.PI*2,b=Math.sqrt(1-m*m);n.push(b*Math.cos(x)*1e3,m*1e3,b*Math.sin(x)*1e3);const M=Math.pow(e(),4)*2.2+.12,C=e();s.push(M*(.8+.2*C),M*.9,M*(1-.25*C),1+e()*1.8)}const r=new Ft;r.setAttribute("position",new ot(n,3)),r.setAttribute("aCol",new ot(s,4));const o=new Jc(r,new On({depthWrite:!1,blending:Ti,transparent:!0,uniforms:{uPx:li.uPx},vertexShader:`attribute vec4 aCol; varying vec3 vC; uniform float uPx;
      void main() { vC = aCol.rgb; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_PointSize = aCol.a * uPx / 1080.0; }`,fragmentShader:"varying vec3 vC; void main() { vec2 d = gl_PointCoord - 0.5; gl_FragColor = vec4(vC * smoothstep(0.5, 0.1, length(d)), 1.0); }"}));o.frustumCulled=!1,t.add(o);const a=new k(-13-1.4,5.2-.15,4.2+1.6).normalize(),c=new $e(new jn(2.6,20,14),new Ai({color:new Oe(60,54,44),toneMapped:!1,fog:!1}));c.position.copy(a).multiplyScalar(900),t.add(c);const u=nf(new Fa(1,48)),f=u.attributes.position,d=new k,l=(h,m,x)=>{const b=Math.sin(h*127.1+m*311.7+x*74.7)*43758.5453;return b-Math.floor(b)},p=(h,m,x)=>{const b=Math.floor(h),M=Math.floor(m),C=Math.floor(x),A=h-b,g=m-M,y=x-C,T=U=>U*U*(3-2*U),E=T(A),z=T(g),L=T(y),F=(U,G,W)=>U+(G-U)*W;return F(F(F(l(b,M,C),l(b+1,M,C),E),F(l(b,M+1,C),l(b+1,M+1,C),E),z),F(F(l(b,M,C+1),l(b+1,M,C+1),E),F(l(b,M+1,C+1),l(b+1,M+1,C+1),E),z),L)},v=Array.from({length:26},()=>{const h=e()*2-1,m=e()*6.283,x=Math.sqrt(1-h*h);return[x*Math.cos(m),h,x*Math.sin(m),.08+e()*e()*.3]});for(let h=0;h<f.count;h++){d.fromBufferAttribute(f,h).normalize();let m=1+(p(d.x*1.3+5,d.y*1.3,d.z*1.3)-.5)*.55+(p(d.x*3.1,d.y*3.1+2,d.z*3.1)-.5)*.22+(p(d.x*8,d.y*8,d.z*8+1)-.5)*.07+(p(d.x*21,d.y*21,d.z*21)-.5)*.025;for(const x of v){const b=Math.hypot(d.x-x[0],d.y-x[1],d.z-x[2])/x[3];b<1.3&&(m+=(b<1?-(1-b*b)*.35:(1.3-b)/.3*.06*(b-1)/.3*4)*x[3])}d.multiplyScalar(m),f.setXYZ(h,d.x*1.25,d.y*.85,d.z)}u.computeVertexNormals();const _=new $e(u,new On({uniforms:{uSun:{value:a}},vertexShader:"varying vec3 vN; varying vec3 vP; void main() { vN = normalize(mat3(modelMatrix) * normal); vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));return _.scale.setScalar(100),_.position.set(-235,-52,-62),_.rotation.set(.4,1.1,.2),t.add(_),{sky:t,sunDir:a,asteroid:_}}function b2(i){const e=Pe.z1-Pe.z0,t=Pe.y1-Pe.y0,n=new es(e,t,8,1),s=new On({transparent:!0,depthWrite:!1,blending:Qu,blendSrc:ju,blendDst:Fc,uniforms:{tRefl:{value:i.texture},uTexM:{value:new ct},uGain:{value:.42}},vertexShader:`
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
      }`}),r=new $e(n,s),o=(Pe.z0+Pe.z1)/2,a=an(Pe.x-.28,(Pe.y0+Pe.y1)/2,o);return r.position.copy(a),ji(o,r.quaternion).multiply(new Qt().setFromAxisAngle(new k(0,1,0),Math.PI/2)),r.updateMatrixWorld(),{mesh:r,mat:s,center:a,normal:new k(1,0,0)}}function S2(i){const e=Pe.x-.18,t=1.96,n=.03,s=2.72,r=Pe.z0-3.7,o=Pe.z1+.1,a=new It(t-e,s-n,o-r,1,1,14);a.translate((e+t)/2,(n+s)/2,(r+o)/2);const c=a.attributes.position,u=new k;for(let _=0;_<c.count;_++)an(c.getX(_),c.getY(_),c.getZ(_),u),c.setXYZ(_,u.x,u.y,u.z);a.computeBoundingSphere();const f=new k(i.to[0]-i.pos[0],i.to[1]-i.pos[1],i.to[2]-i.pos[2]).normalize(),d=((Pe.z1-Pe.z0)/3).toFixed(4),l=_=>_.toFixed(3),p=new On({transparent:!0,depthWrite:!1,depthTest:!1,blending:Ti,side:bn,uniforms:{uDir:{value:f},uColor:{value:new Oe(16773336)},uPower:{value:.11},uSteps:{value:24}},vertexShader:"varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform vec3 uDir; uniform vec3 uColor; uniform float uPower; uniform float uSteps; varying vec3 vW;
      float h2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n2(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h2(i), h2(i + vec2(1, 0)), f.x), mix(h2(i + vec2(0, 1)), h2(i + vec2(1, 1)), f.x), f.y); }
      void main() {
        vec3 rd = vW - cameraPosition; float tMax = length(rd); rd /= tMax;
        // по x объём не изогнут: вход и выход луча взгляда из слоя стен считаются точно
        float tA = 0.0, tB = tMax;
        if (abs(rd.x) > 1e-4) {
          float a = (${l(e)} - cameraPosition.x) / rd.x, b = (${l(t)} - cameraPosition.x) / rd.x;
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
          float s = (q.x - (${l(Pe.x-.2)})) / uDir.x;
          vec3 hp = q - uDir * s;
          float inw = smoothstep(${l(Pe.z0)}, ${l(Pe.z0+.1)}, hp.z) * (1.0 - smoothstep(${l(Pe.z1-.1)}, ${l(Pe.z1)}, hp.z))
            * smoothstep(${l(Pe.y0)}, ${l(Pe.y0+.07)}, hp.y) * (1.0 - smoothstep(${l(Pe.y1-.07)}, ${l(Pe.y1)}, hp.y));
          float pane = abs(fract((hp.z - (${l(Pe.z0)})) / ${d}) - 0.5);
          inw *= 1.0 - smoothstep(0.47, 0.485, pane);
          inw *= step(0.0, q.y) * step(0.0, s);
          // пыль в луче неоднородна: полосы тянутся вдоль луча, потому что шум взят в плоскости окна
          // у самых глаз дымка слабее: стоя в луче, игрок не должен смотреть сквозь молоко
          acc += inw * (0.55 + 0.9 * n2(hp.zy * 5.0)) * (1.0 - 0.1 * s) * smoothstep(0.2, 2.6, tt);
        }
        // лицом к окну дымка луча гасится: иначе она затягивает вид на космос молочной пеленой
        float face = 1.0 - 0.9 * smoothstep(0.35, 0.9, -dot(rd, uDir));
        gl_FragColor = vec4(uColor * uPower * face * acc / uSteps * (tB - tA), 1.0);
      }`}),v=new $e(a,p);return v.frustumCulled=!1,v}const w2=.21,xt=512,Ls=xt/256,Ec=i=>i*i*(3-2*i),hs=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),ra=(i,e,t)=>Ec(hs((t-i)/(e-i)));function E2(i,e){const t=new Float32Array(e*e);for(let s=0;s<t.length;s++)t[s]=i();const n=new Float32Array(xt*xt);for(let s=0;s<xt;s++)for(let r=0;r<xt;r++){const o=r/xt*e,a=s/xt*e,c=Math.floor(o),u=Math.floor(a),f=Ec(o-c),d=Ec(a-u),l=t[u%e*e+c%e],p=t[u%e*e+(c+1)%e],v=t[(u+1)%e*e+c%e],_=t[(u+1)%e*e+(c+1)%e];n[s*xt+r]=(l*(1-f)+p*f)*(1-d)+(v*(1-f)+_*f)*d}return n}function qr(i,e,t){const n=new Float32Array(xt*xt);let s=.5,r=0;for(let o=0;o<t;o++){const a=E2(i,e<<o);for(let c=0;c<n.length;c++)n[c]+=a[c]*s;r+=s,s*=.5}for(let o=0;o<n.length;o++)n[o]/=r;return n}function Al(i,e,t,n,s,r,o){const a=Math.cos(n),c=Math.sin(n),u=Math.ceil(s*2),f=Math.ceil(r+1);for(let d=0;d<=u;d++){const l=e+a*d*.5,p=t+c*d*.5,v=Math.sin(Math.PI*d/u)**.5;for(let _=-f;_<=f;_++)for(let h=-f;h<=f;h++){const m=Math.round(l)+h,x=Math.round(p)+_,b=Math.hypot(m-l,x-p);if(b>r+.7)continue;const M=(x%xt+xt)%xt*xt+(m%xt+xt)%xt,C=o*v*hs(1-(b-r*.5)/(r*.5+.7));C>i[M]&&(i[M]=C)}}}function Rl(i,e){const t=new Ms(i,xt,xt,Pn);return t.colorSpace=e?nn:bi,t.wrapS=t.wrapT=yr,t.magFilter=Cn,t.minFilter=Ui,t.generateMipmaps=!0,t.anisotropy=4,t.needsUpdate=!0,t}function Fu(i,e,t,n){const s=new Ms(new Uint8Array([i,e,t,255]),1,1,Pn);return s.colorSpace=n?nn:bi,s.wrapS=s.wrapT=yr,s.needsUpdate=!0,s}let oa=null;function T2(){if(oa)return oa;const i=ki(377018),e=qr(i,3,5),t=qr(i,5,4),n=qr(i,28,2),s=qr(i,8,4),r=qr(i,2,3),o=new Float32Array(xt*xt);for(let _=0;_<o.length;_++)o[_]=i();const a=new Float32Array(xt*xt),c=new Float32Array(xt*xt),u=new Float32Array(xt*xt);for(let _=0;_<26;_++){const h=i()*Math.PI,m=i()*xt,x=i()*xt,b=2+Math.floor(i()*5);for(let M=0;M<b;M++)Al(a,m+(i()-.5)*26*Ls,x+(i()-.5)*26*Ls,h+(i()-.5)*.25,(10+i()*46)*Ls,.55,.35+i()*.65)}for(let _=0;_<9;_++)Al(c,i()*xt,i()*xt,i()*Math.PI,(16+i()*40)*Ls,(.8+i()*.6)*Ls,.7+i()*.3);for(let _=0;_<12;_++)Al(u,i()*xt,i()*xt,.5+(i()-.5)*.7,(40+i()*80)*Ls,(3+i()*4)*Ls,.3+i()*.5);const f=new Uint8Array(xt*xt*4),d=new Uint8Array(xt*xt*4),l=new Uint8Array(xt*xt*4),p=(_,h,m,x,b)=>{_[h]=hs(m)*255,_[h+1]=hs(x)*255,_[h+2]=hs(b)*255,_[h+3]=255},v=_=>_<=.0031308?_*12.92:1.055*_**(1/2.4)-.055;for(let _=0;_<xt*xt;_++){const h=_*4,m=ra(.42,.72,e[_]),x=ra(.5,.68,t[_])*.6,b=s[_]+(n[_]-.5)*.1,M=ra(.652,.672,b),C=ra(.612,.655,b)*(1-M),A=a[_],g=c[_],y=u[_]*(.5+.5*r[_]),T=(n[_]-.5)*.6+(o[_]-.5)*.45;let E=.93+T*.07;E*=1-.2*m-.07*x-.11*y,E*=1-.3*A-.45*g,E=E*(1-.16*C);const z=.11*m+.05*y+.04*C;p(f,h,v(E),v(E*(1-z*.45)),v(E*(1-z))),f[h+3]=255*(1-.55*M);const L=(.94+T*.12)*(1-.34*m-.16*y)*(1-.25*C)*(1-.4*g),F=hs(M*(.75+.5*n[_])+A*.8+g*.25);p(d,h,v(L),v(L*(1-.3*z)),v(L*(1-.7*z))),d[h+3]=255*(1-.9*F);const U=.55+T*.22-.3*A-.5*g-.22*M+.06*C+.08*m,G=hs(.8+T*.2+.2*m+.1*y-.42*M-.25*A+.12*C+.15*g,.25,1),W=hs(.74+.26*F-.3*m);p(l,h,U,G,W)}return oa={paint:Rl(f,!0),metal:Rl(d,!0),hrm:Rl(l,!1),cleanMap:Fu(255,255,255,!0),cleanHrm:Fu(128,255,255,!1)},oa}function A2(i){const e=T2();return i==="clean"?{map:e.cleanMap,roughnessMap:e.cleanHrm,metalnessMap:e.cleanHrm,bumpMap:e.cleanHrm,bumpScale:0}:{map:i==="metal"?e.metal:e.paint,roughnessMap:e.hrm,metalnessMap:e.hrm,bumpMap:e.hrm,bumpScale:i==="metal"?1.6:1.1}}function R2(i){i.uniforms.uBare={value:this.userData.bare},i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uBare;`).replace("#include <color_fragment>",`#include <color_fragment>
#ifdef USE_MAP
	diffuseColor.rgb = mix( uBare, diffuseColor.rgb, sampledDiffuseColor.a );
#endif`)}function ao(i,e,t){return i.setValues(A2(e)),i.userData.bare=new Oe(t),i.onBeforeCompile=R2,i}function r0(i,e=w2,t=0,n=0){const s=i.attributes.position,r=i.attributes.uv,o=new k,a=new k,c=new k,u=new k,f=1/e;for(let d=0;d<s.count;d+=3){o.fromBufferAttribute(s,d),a.fromBufferAttribute(s,d+1),c.fromBufferAttribute(s,d+2),u.subVectors(c,a).cross(a.clone().sub(o).negate());const l=Math.abs(u.x),p=Math.abs(u.y),v=Math.abs(u.z);for(let _=0;_<3;_++){const h=_===0?o:_===1?a:c;l>=p&&l>=v?r.setXY(d+_,h.z*f+t+.37,h.y*f+n):p>=v?r.setXY(d+_,h.x*f+t,h.z*f+n+.61):r.setXY(d+_,h.x*f+t+.13,h.y*f+n+.29)}}}function sf(i){const e=i.attributes.position,t=i.attributes.normal,n=e.count,s=new Float32Array(n),r=new Map,o=new Int32Array(n);let a=0;for(let d=0;d<n;d++){const l=((Math.round(e.getX(d)*2e4)+65536)*131072+Math.round(e.getY(d)*2e4)+65536)*131072+Math.round(e.getZ(d)*2e4)+65536;let p=r.get(l);p===void 0&&(p=a++,r.set(l,p)),o[d]=p}const c=new Float32Array(a),u=new Float32Array(a),f=new Float32Array(a*3);for(let d=0;d<n;d++){const l=o[d]*3;f[l]+=t.getX(d),f[l+1]+=t.getY(d),f[l+2]+=t.getZ(d)}for(let d=0;d<n;d+=3){const l=(e.getX(d)+e.getX(d+1)+e.getX(d+2))/3,p=(e.getY(d)+e.getY(d+1)+e.getY(d+2))/3,v=(e.getZ(d)+e.getZ(d+1)+e.getZ(d+2))/3;for(let _=0;_<3;_++){const h=d+_,m=o[h]*3,x=l-e.getX(h),b=p-e.getY(h),M=v-e.getZ(h),C=Math.hypot(x,b,M)||1,A=Math.hypot(f[m],f[m+1],f[m+2])||1;c[o[h]]-=(f[m]*x+f[m+1]*b+f[m+2]*M)/(C*A),u[o[h]]++}}for(let d=0;d<n;d++)s[d]=c[o[d]]/(u[o[d]]||1);return s}const it=k,Ei=ct,Jt=i=>new Oe(i),Wt=(i,e,t)=>Jt(i).lerp(Jt(e),t),xn=(i,e,t)=>Math.min(t,Math.max(e,i)),Ki=(i,e,t)=>{const n=xn((t-i)/(e-i),0,1);return n*n*(3-2*n)},ue={suit:Wt(16777215,ke.turquoise,.07).multiplyScalar(.84),suitDim:Wt(16777215,ke.cardBg,.38),rubber:Jt(ke.cardBg).multiplyScalar(.5),teal:Jt(ke.turquoise),tealDeep:Wt(ke.turquoise,ke.lotusTeal,.55),gold:Jt(ke.gold),goldLight:Jt(ke.goldLight),bronze:Wt(ke.gold,ke.cardBg,.62).lerp(Wt(ke.cardBg,16777215,.3),.3),steel:Wt(ke.cardBg,16777215,.3),glowTeal:Wt(ke.turquoise,ke.lotusTeal,.38),skin:Jt(ke.skin),skinWarm:Wt(ke.skin,ke.neonViolet,.1),nose:Wt(ke.skin,ke.neonViolet,.42),lilac:Wt(ke.skin,ke.neonViolet2,.36),liner:Wt(ke.deepViolet,ke.cardBg,.4),tooth:Wt(ke.skin,16777215,.8),crimson:Jt(ke.neonViolet).offsetHSL(.115,.05,-.2),white:Jt(16777215),black:Jt(0),bare:Wt(ke.cardBg,16777215,.58).lerp(Jt(ke.gold),.4),primer:Wt(ke.cardBg,16777215,.36),scuff:Wt(ke.cardBg,16777215,.5).lerp(Jt(ke.gold),.12),dirt:new Oe(.42,.36,.3)},Mn={teal:0,eyeGreen:1,eyeBlue:2,gem:3,crimson:4,white:6,black:7,coil:8,heat:9,hot:10},C2=16,Tc=2.2;function Ae(i=0,e=0,t=0,n=0,s=0,r=0,o=1,a,c){return a=a??o,c=c??o,new Ei().compose(new it(i,e,t),new Qt().setFromEuler(new Fn(n,s,r)),new it(o,a,c))}function Xn(i,e,t){const n=new Ei().lookAt(new it(0,0,0),e,t);return n.setPosition(i),n}function Li(i,e,t=new it(0,1,0)){return Xn(i,e.clone().negate(),t)}function rf(i){i.deleteAttribute("uv"),i.deleteAttribute("normal");const e=nf(i,1e-5);return e.computeVertexNormals(),e}function Ct(i,e,t,n,s=20,r=14){const o=new jn(1,s,r),a=o.attributes.position,c=new it;for(let u=0;u<a.count;u++)c.fromBufferAttribute(a,u),n&&n(c),a.setXYZ(u,c.x*i,c.y*e,c.z*t);return rf(o)}function Yn(i,e=24,t=!0,n=!0){const s=[],r=[],o=i.length;for(const[c,u,f=u,d=0,l=0,p=2]of i){const v=2/p;for(let _=0;_<e;_++){const h=_/e*Math.PI*2,m=Math.cos(h),x=Math.sin(h);s.push(d+u*Math.sign(m)*Math.abs(m)**v,c,l+f*Math.sign(x)*Math.abs(x)**v)}}for(let c=0;c<o-1;c++)for(let u=0;u<e;u++){const f=c*e+u,d=(c+1)*e+u,l=c*e+(u+1)%e,p=(c+1)*e+(u+1)%e;r.push(f,d,l,d,p,l)}if(t){const c=i[0],u=s.length/3;s.push(c[3]||0,c[0],c[4]||0);for(let f=0;f<e;f++)r.push(u,f,(f+1)%e)}if(n){const c=i[o-1],u=s.length/3,f=(o-1)*e;s.push(c[3]||0,c[0],c[4]||0);for(let d=0;d<e;d++)r.push(u,f+(d+1)%e,f+d)}const a=new Ft;return a.setAttribute("position",new ot(s,3)),a.setIndex(r),a.computeVertexNormals(),a}const cn=(i,e=24,t=!1,n=!1)=>Yn(i.map(([s,r])=>[s,r,r]),e,t,n);function vn(i,e,t,n,s=1,r=!1,o=.5){const a=new Gs(i.map(v=>v.isVector3?v:new it(v[0],v[1],v[2])),r,"centripetal"),c=a.computeFrenetFrames(e,r),u=[],f=[],d=[],l=new it;for(let v=0;v<=e;v++){const _=v/e,h=c.normals[v],m=c.binormals[v],x=Math.max(1e-5,n(_));a.getPointAt(_,l);for(let b=0;b<t;b++){const M=b/t*Math.PI*2,C=Math.cos(M)*x,A=Math.sin(M)*x*s;u.push(l.x+h.x*C+m.x*A,l.y+h.y*C+m.y*A,l.z+h.z*C+m.z*A),f.push(_,o)}}for(let v=0;v<e;v++)for(let _=0;_<t;_++){const h=v*t+_,m=(v+1)*t+_,x=v*t+(_+1)%t,b=(v+1)*t+(_+1)%t;d.push(h,x,m,m,x,b)}const p=new Ft;return p.setAttribute("position",new ot(u,3)),p.setAttribute("uv",new ot(f,2)),p.setIndex(d),p.computeVertexNormals(),p}const Ou=(i,e=.8)=>t=>i*(t<e?1:Math.sqrt(Math.max(.01,1-((t-e)/(1-e))**2)));function gn(i,e,t,n,s){n=n??Math.min(i,e)*.22,s=s??Math.min(i,e,t)*.18;const r=i/2-s,o=e/2-s,a=Math.min(n,r*.99,o*.99),c=new vs;c.moveTo(-r+a,-o),c.lineTo(r-a,-o),c.quadraticCurveTo(r,-o,r,-o+a),c.lineTo(r,o-a),c.quadraticCurveTo(r,o,r-a,o),c.lineTo(-r+a,o),c.quadraticCurveTo(-r,o,-r,o-a),c.lineTo(-r,-o+a),c.quadraticCurveTo(-r,-o,-r+a,-o);const u=Math.max(1e-4,t-2*s),f=new Rr(c,{depth:u,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:4,steps:1});return f.translate(0,0,-u/2),f}function Ac(i,e,t,n=8){const s=new Rr(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:n,steps:1});return s.translate(0,0,-e/2),s}function $n(i,e,t=8,n=32,s=Math.PI*2){return new Qi(i,e,t,n,s)}function Rc(i,e,t){const n=i.index?i.toNonIndexed():i.clone();n.attributes.normal||n.computeVertexNormals();const s=n.attributes.position,r=s.count,o=new Float32Array(r*2),a=new Float32Array(r*3);if(t!=null)for(let f=0;f<r;f++)o[2*f]=(t+.5)/C2,o[2*f+1]=.5;else n.attributes.uv&&o.set(n.attributes.uv.array.subarray(0,r*2));const c=new Oe,u=new it;for(let f=0;f<r;f++)typeof e=="function"?(u.fromBufferAttribute(s,f),c.copy(e(u))):c.copy(e||ue.white),a[3*f]=c.r,a[3*f+1]=c.g,a[3*f+2]=c.b;for(const f of Object.keys(n.attributes))f!=="position"&&f!=="normal"&&n.deleteAttribute(f);return n.setAttribute("uv",new sn(o,2)),n.setAttribute("color",new sn(a,3)),n.clearGroups(),n}function of(i){for(const e of Object.values(i.attributes)){const t=e.itemSize,n=e.array;for(let s=0;s<e.count;s+=3)for(let r=0;r<t;r++){const o=n[(s+1)*t+r];n[(s+1)*t+r]=n[(s+2)*t+r],n[(s+2)*t+r]=o}}}const P2=new Oe;function D2(i,e){const t=sf(i),n=i.attributes.color,s=P2;for(let r=0;r<n.count;r++){const o=t[r];if(o>.2)s.fromBufferAttribute(n,r).lerp(e?ue.bare:ue.scuff,(e?.72:.42)*Ki(.2,.62,o));else if(o<-.07){const a=Ki(.07,.42,-o)*.8;s.fromBufferAttribute(n,r),s.r*=1-a*(1-ue.dirt.r),s.g*=1-a*(1-ue.dirt.g),s.b*=1-a*(1-ue.dirt.b)}else continue;n.setXYZ(r,s.r,s.g,s.b)}}class Va{constructor(){this.b={},this.stack=[new Ei],this.n={},this.tag=null,this.tags={}}get M(){return this.stack[this.stack.length-1]}push(e){this.stack.push(this.M.clone().multiply(e))}pop(){this.stack.pop()}add(e,t,n,s,r){const o=Rc(t,n,r),a=s?this.M.clone().multiply(s):this.M;o.applyMatrix4(a),a.determinant()<0&&of(o),(e==="suit"||e==="metal")&&(D2(o,e==="metal"),r0(o));const c=o.attributes.position.count,u=this.n[e]||0;this.tag&&(this.tags[this.tag]||=[]).push([e,u,c]),this.n[e]=u+c,(this.b[e]||=[]).push(o)}glow(e,t,n){this.add("glow",e,ue.white,n,t)}build(e,t,n){const s={};for(const[r,o]of Object.entries(this.b)){const a=new $e(bs(o,!1),t[r]);a.name=`${n}:${r}`,a.frustumCulled=!1,e.add(a),s[r]=a}return s}}function Bu(i,e){const t=i.length,n=new Uint8Array(t*4),s=new Oe;i.forEach((o,a)=>{s.copy(o).multiplyScalar(e?e[a]:1).convertLinearToSRGB(),n[4*a]=xn(s.r,0,1)*255,n[4*a+1]=xn(s.g,0,1)*255,n[4*a+2]=xn(s.b,0,1)*255,n[4*a+3]=255});const r=new Ms(n,t,1,Pn);return r.colorSpace=nn,r.magFilter=r.minFilter=un,r.generateMipmaps=!1,r.needsUpdate=!0,r}const lo=16;function af(i,e){const t=Wt(ke.flame,ke.goldLight,.5).lerp(Jt(16777215),.3),n=Jt(ke.flame),s=Jt(ke.flame).multiply(new Oe(1,.5,.22)),r=Wt(ke.neonViolet2,16777215,.6),o=Jt(ke.neonViolet),a=Wt(ke.neonViolet2,ke.deepViolet,.35),c=new Oe,u=new Oe;for(let f=0;f<2;f++)for(let d=0;d<lo;d++){const l=d/(lo-1),p=xn(l*(f?1.25:1),0,1);p<.45?(c.copy(t).lerp(n,p/.45),u.copy(r).lerp(o,p/.45)):(c.copy(n).lerp(s,(p-.45)/.55),u.copy(o).lerp(a,(p-.45)/.55)),c.lerp(u,e*.8).convertLinearToSRGB();const v=(f*lo+d)*4;i[v]=xn(c.r,0,1)*255,i[v+1]=xn(c.g,0,1)*255,i[v+2]=xn(c.b,0,1)*255,i[v+3]=255}}function L2(){const i=Ri,e=Jt(1054748),t=[ue.glowTeal,Jt(ke.eyeGreen),Jt(ke.eyeBlue),Jt(ke.gem),ue.crimson,ue.goldLight,ue.white,ue.black,ue.glowTeal,e,ue.steel.clone().multiplyScalar(.6),ue.black,ue.black,ue.black,ue.black,ue.black],n=Bu(t),s=Bu(t,[1,.75,.75,1,.45,.5,.9,0,.8,.5,0,0,0,0,0,0].map(a=>a*1.1/Tc)),r=new Uint8Array(lo*2*4);af(r,0);const o=new Ms(r,lo,2,Pn);return o.colorSpace=nn,o.magFilter=o.minFilter=Cn,o.wrapS=o.wrapT=zi,o.generateMipmaps=!1,o.needsUpdate=!0,{suit:ao(new i({name:"harma-suit",vertexColors:!0,roughness:1,metalness:0}),"paint",ue.primer),metal:ao(new i({name:"harma-metal",vertexColors:!0,roughness:.86,metalness:.9}),"metal",ue.bare),skin:ao(new i({name:"harma-skin",vertexColors:!0,roughness:.58,metalness:0,emissive:ue.skin.clone(),emissiveIntensity:.15}),"clean",ue.skin),glow:new i({name:"harma-glow",map:n,emissiveMap:s,emissive:16777215,emissiveIntensity:Tc,roughness:.3,metalness:0}),flame:new i({name:"harma-flame",color:0,map:o,emissiveMap:o,emissive:16777215,emissiveIntensity:1.05,roughness:1,metalness:0}),feather:new i({name:"harma-feather",color:ue.goldLight.clone(),emissive:ue.goldLight.clone(),emissiveIntensity:.32,roughness:.32,metalness:.45}),lens:new i({name:"harma-lens",color:1054748,emissive:ue.teal.clone(),emissiveIntensity:1.6,roughness:.12,metalness:0}),glass:new i({name:"harma-glass",color:Wt(16777215,ke.turquoise,.35),transparent:!0,opacity:.16,roughness:.06,metalness:0,depthWrite:!1})}}function lf(i,e,t,n=1){i.add("suit",Ct(.037,.033,.036,null,14,10),ue.suit,Ae(0,0,.002)),i.add("suit",Ct(.041,.026,.048,u=>{u.y<0&&(u.y*=.82),u.z*=1-.13*u.x*u.x}),ue.suit,Ae(0,0,-.047)),i.add("suit",Ct(.027,.008,.03,u=>{u.z*=1-.25*u.x*u.x}),ue.teal,Ae(0,.0215,-.047)),i.add("metal",Ct(.0075,.0045,.0075,null,12,8),ue.gold,Ae(0,.0285,-.047)),i.add("suit",$n(.0285,.0016,6,28),ue.suitDim,Ae(0,.0225,-.047,Math.PI/2,0,0,1,1.06,1)),i.add("suit",Ct(.024,.007,.021,u=>{u.z*=1-.35*u.x*u.x},14,10),ue.nose,Ae(0,-.0205,-.05));const s=[-.0288,-.0098,.0098,.0288],r=[.9,1.05,1.05,.9];s.forEach((u,f)=>{const d=r[f],l=[.12+t*.6,.2+t*1.4,.26+t*2.15],p=[.024*d,.021*d,.017*d];let v=u,_=-.002,h=-.079+Math.abs(u)*.25;const m=[[u*.9,0,h+.03],[v,_,h]];for(let b=0;b<3;b++)_-=Math.sin(l[b])*p[b],h-=Math.cos(l[b])*p[b],v+=u*.1*n,m.push([v,_,h]);i.add("suit",vn(m,14,10,b=>Ou(.0138,.82)(b)*(1-.1*b)),ue.suit);const x=l[2];i.add("suit",Ct(.0092,.0058,.0108,null,12,8),ue.nose,Ae(v,_+Math.sin(x)*p[2]*.42-Math.cos(x)*.0088,h+Math.cos(x)*p[2]*.42+Math.sin(x)*.0088,-x,0,0)),i.add("suit",$n(.0132,.0022,6,14),ue.teal,Ae(u,-.003-Math.sin(l[0])*.005,-.083+Math.abs(u)*.25,-l[0]*.5,0,0))});const o=-e,a=t,c=[[o*.018,-.004,-.028],[o*.038,-.006,-.04],[o*(.05-a*.004),-.012-a*.008,-.056],[o*(.052-a*.016),-.02-a*.016,-.07]];i.add("suit",vn(c,12,10,Ou(.0128,.8)),ue.suit),i.add("suit",Ct(.0085,.0055,.0095,null,12,8),ue.nose,Ae(c[3][0]-o*.004*(1+a),c[3][1]-.0068,c[3][2]+.005,.5,0,o*.5*a))}function cf(i,e=.34){i.push(Ae(0,0,0,Math.PI/2,0,0)),i.add("metal",cn([[.002,.036],[.004,.0435],[.0075,.0462],[.012,.0462],[.0155,.0425],[.031,.0425],[.0345,.0462],[.039,.0462],[.0425,.0435],[.0445,.039]],32,!0,!1),ue.gold);for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.add("metal",Ct(.0042,.0042,.0026,null,8,6),n%3===0?ue.goldLight:ue.bronze,Ae(Math.cos(s)*.0428,.0232,Math.sin(s)*.0428,0,-s+Math.PI/2,0))}i.add("suit",cn([[.0435,.04],[.0455,.0445],[.052,.0445],[.054,.04]],32),ue.teal);const t=[[.053,.039]];for(let n=0;n<4;n++){const s=.058+n*.013;t.push([s,.0405],[s+.0045,.0452],[s+.009,.0452],[s+.0125,.041])}t.push([.118,.044],[.17,.051],[.25,.054],[e-.02,.052],[e,.044]),i.add("suit",cn(t,32,!1,!0),ue.suit),i.add("suit",cn([[.213,.0525],[.215,.0562],[.228,.0568],[.23,.053]],32),ue.teal),i.add("metal",cn([[.2305,.053],[.232,.0575],[.237,.0578],[.2385,.0535]],32),ue.gold),i.pop(),i.add("suit",Ct(.016,.005,.036,n=>{n.x*=1-.3*n.z*n.z},14,10),ue.teal,Ae(0,.0475,.158,.085,0,0)),i.add("suit",$n(.0175,.0014,6,24),ue.suitDim,Ae(0,.0478,.158,Math.PI/2+.085,0,0,1,2.1,1))}const uf=.196,ai=new it(0,-.188,.04),Sa=new it(-.047,.04,-.018),Us=new it(-.86,-.14,-.49).normalize(),I2=new Ei().makeBasis(new it(0,1,0),new it(0,0,1),new it(1,0,0)),hf=i=>Ae(0,0,0,0,i*Math.PI*2/3,0).multiply(Ae(0,.168,.05)).multiply(I2);function ff(i){i.add("metal",Yn([[-.122,.024,.03,0,0,3.2],[-.112,.041,.047,0,0,3.6],[-.1,.047,.053,0,0,4],[-.03,.05,.056,0,0,4.2],[.03,.05,.054,0,0,4.2],[.058,.044,.047,0,0,3.6],[.074,.038,.04,0,0,3],[.086,.034,.035,0,0,2.4]],36),ue.bronze);for(const c of[-.088,.036]){const d=c<0?.0555:.0552;i.add("metal",Yn([[c-.007,.0512-.003,d-.003,0,0,4.1],[c-.005,.0512+.0012,d+.0012,0,0,4.1],[c+.005,.0512+.0012,d+.0012,0,0,4.1],[c+.007,.0512-.003,d-.003,0,0,4.1]],36,!1,!1),ue.steel)}i.add("suit",gn(.07,.098,.012,.014,.003),ue.suit,Ae(0,-.026,.0575));for(const c of[-1,1]){i.add("suit",gn(.062,.092,.011,.014,.003),ue.suit,Ae(c*.0505,-.026,-.002,0,Math.PI/2,0)),i.add("suit",gn(.02,.06,.004,.006,.0012),ue.teal,Ae(c*.0562,-.026,-.012,0,Math.PI/2,0));for(const[u,f]of[[-.064,.021],[.012,.021],[-.064,-.025],[.012,-.025]])i.add("metal",new Vt(.0034,.0034,.004,10),ue.steel,Ae(c*.0565,u,f,0,0,Math.PI/2))}for(const[c,u]of[[-.027,-.066],[.027,-.066],[-.027,.014],[.027,.014]])i.add("metal",new Vt(.0034,.0034,.004,10),ue.steel,Ae(c,u,.0638,Math.PI/2,0,0));for(let c=0;c<3;c++)i.glow(Ct(.0042,.0042,.0022,null,10,6),Mn.teal,Ae(.018,-.052+c*.013,.0642));i.add("suit",gn(.026,.05,.005,.005,.0012),ue.rubber,Ae(-.012,-.034,.0638));for(let c=0;c<3;c++)i.glow(gn(.016,.0095,.003,.003,8e-4),Mn.heat,Ae(-.012,-.048+c*.014,.0662));i.add("metal",new ms(1),ue.gold,Ae(.018,.004,.0635,0,0,0,.0075,.011,.002)),i.add("metal",cn([[-.14,.014],[-.139,.02],[-.128,.022],[-.126,.03],[-.12,.031]],24,!0,!1),ue.steel),i.add("metal",$n(.0262,.0024,8,28),ue.gold,Ae(0,-.1235,0,Math.PI/2,0,0)),i.add("metal",gn(.006,.03,.006,.002,.0012),ue.gold,Ae(0,-.141,0,Math.PI/2,0,.6)),i.add("metal",cn([[.082,.03],[.09,.0262],[.158,.0262],[.164,.034]],24),ue.steel);const e=[];for(let c=0;c<=66;c++){const u=c/66,f=u*Math.PI*2*5.5;e.push([Math.cos(f)*.0318,.094+u*.062,Math.sin(f)*.0318])}i.glow(vn(e,200,7,()=>.0043),Mn.coil);for(let c=0;c<3;c++)i.push(Ae(0,0,0,0,c*Math.PI*2/3+Math.PI/3,0)),i.add("metal",gn(.007,.082,.005,.002,.0012),ue.steel,Ae(0,.124,.0395)),i.pop();i.add("metal",cn([[.16,.036],[.164,.0455],[.169,.0478],[.186,.0478],[.194,.0445],[.199,.039],[.199,.0312],[.19,.027]],36),ue.steel),i.add("metal",$n(.0484,.0026,8,36),ue.gold,Ae(0,.1775,0,Math.PI/2,0,0)),i.add("lens",Ct(.0285,.011,.0285,null,20,10),ue.white,Ae(0,uf-.006,0)),i.glow($n(.0285,.0016,6,32),Mn.teal,Ae(0,.1925,0,Math.PI/2,0,0)),i.glow(cn([[.1935,.0453],[.1994,.0398],[.2004,.0352],[.2012,.0306]],36),Mn.hot);const t=new vs;t.moveTo(-.006,.01),t.bezierCurveTo(.02,.034,.058,.036,.082,.014),t.quadraticCurveTo(.098,0,.108,-.022),t.quadraticCurveTo(.09,-.01,.072,-.004),t.bezierCurveTo(.052,.006,.03,.004,.014,-.008),t.lineTo(-.006,-.01),t.closePath();const n=Ac(t,.014,.0045,10),s=new vs;s.moveTo(.012,.012),s.bezierCurveTo(.03,.026,.05,.027,.07,.014),s.lineTo(.064,.008),s.bezierCurveTo(.05,.016,.03,.015,.016,.005),s.closePath();const r=Ac(s,.0235,.001,8);for(let c=0;c<3;c++)i.push(hf(c)),i.tag="claw"+c,i.add("metal",n,ue.steel),i.add("suit",r,ue.suit),i.add("metal",new Vt(.0105,.0105,.031,14),ue.bronze,Ae(0,0,0,Math.PI/2,0,0)),i.add("metal",new Vt(.0045,.0045,.034,10),ue.gold,Ae(0,0,0,Math.PI/2,0,0)),i.glow(Ct(.007,.0035,.0055,null,10,6),Mn.teal,Ae(.088,-.0095,0,0,0,-.75)),i.tag=null,i.pop();const o=[[-.056,.012],[-.052,.0165]];for(let c=0;c<9;c++){const u=-.047+c*.0105;o.push([u,.0148],[u+.003,.0162],[u+.0072,.0162])}o.push([.052,.0165],[.056,.012]),i.add("suit",cn(o,18,!0,!0),ue.rubber,Ae(ai.x,ai.y,ai.z,0,0,Math.PI/2));for(const c of[-1,1])i.add("metal",vn([[c*.04,-.112,.022],[c*.058,-.14,.03],[c*.063,ai.y+.004,ai.z-.002],[c*.061,ai.y-.004,ai.z+.002]],18,8,()=>.0078),ue.steel),i.add("metal",Ct(.0125,.0125,.0125,null,12,8),ue.gold,Ae(c*.061,ai.y,ai.z));i.push(new Ei().makeRotationFromQuaternion(new Qt().setFromUnitVectors(new it(0,1,0),Us)).setPosition(Sa)),i.add("metal",cn([[-.006,.02],[0,.0225],[.01,.0225],[.016,.0165]],18,!0,!1),ue.steel);const a=[[.014,.0145]];for(let c=0;c<9;c++){const u=.02+c*.0105;a.push([u,.0148],[u+.003,.0162],[u+.0072,.0162])}a.push([.116,.0158]),i.add("suit",cn(a,18,!1,!1),ue.rubber),i.add("metal",cn([[.114,.0165],[.118,.0195],[.124,.0195],[.129,.012]],18,!1,!0),ue.gold),i.pop(),i.add("suit",Ct(.03,.05,.006,null,14,8),ue.teal,Ae(0,-.02,-.057)),i.add("metal",new Ar(.0125,.058,6,14),ue.steel,Ae(.0625,-.03,.03)),i.add("metal",cn([[-.012,.0138],[-.008,.0138]],14),ue.gold,Ae(.0625,-.03,.03)),i.add("metal",gn(.008,.026,.006,.002,.0012),ue.gold,Ae(-.058,.03,.02,.5,Math.PI/2,0)),i.add("metal",new Vt(.0065,.0065,.006,12),ue.bronze,Ae(-.057,.036,.016,0,0,Math.PI/2)),i.add("metal",cn([[-.012,.0085],[-.01,.0105],[0,.0105],[.002,.0085]],14),ue.steel,Ae(.03,-.118,-.03,.5,0,0))}const df=i=>.021+i*.82;function pf(i,e){const t=(_,h,m)=>new it(_,h,m).applyMatrix4(i),n=(_,h,m)=>new it(_,h,m).transformDirection(i),s=n(0,1,0),r=n(0,0,1),o=df(.0162*e),a=r.clone().multiplyScalar(.8).addScaledVector(s,-.6).normalize(),c=s.clone().multiplyScalar(.8).addScaledVector(r,.6).normalize(),u=t(ai.x+.004,ai.y,ai.z).addScaledVector(c,-.07).addScaledVector(a,o),f=n(Us.x,Us.y,Us.z),d=t(Sa.x+Us.x*.068,Sa.y+Us.y*.068,Sa.z+Us.z*.068),l=s.clone().addScaledVector(f,-s.dot(f)).normalize(),p=l.clone().cross(f).normalize();p.y>0&&p.negate();const v=d.clone().addScaledVector(l,-.07).addScaledVector(p,o);return{P:t,D:n,R:{wrist:u,f:c,u:a},L:{wrist:v,f:l,u:p}}}function aa(i,e,t,n,s,r,o){const a=new zt;a.name=e,a.matrixAutoUpdate=!1;const c=new Va;return lf(c,t,n,s),c.push(Xn(new it,r,new it(0,1,0))),cf(c,o),c.pop(),c.build(a,i,e),a}const la=(i,e)=>e.clone().transformDirection(i.clone().invert()),yn={c:new it(0,-.1,-.46),r:.2,tube:.018,base:[-.3,Math.PI+.3],A:.6,period:1.5,shift:.2},Cc=new it(0,0,1);function z2(i){const e=new it(Math.cos(i),Math.sin(i),0),t=e.clone().multiplyScalar(-.39).addScaledVector(Cc,.92).normalize(),n=e.clone().multiplyScalar(-.92).addScaledVector(Cc,-.39).normalize(),s=yn.c.clone().addScaledVector(e,yn.r).addScaledVector(n,-.07).addScaledVector(t,df(yn.tube));return{wrist:s,F:Xn(s,n,t)}}function U2(i,e){const t=2*yn.A/yn.period,n=.5*t+e*yn.shift,s=a=>a<t?-.6+a/t*2*yn.A:yn.A-(a-t)/(1-t)*2*yn.A,r=((i/yn.period+n)%1+1)%1,o=n%1;return{d:s(r)-s(o),fly:r<t?0:(r-t)/(1-t)}}function N2(i){const e=new it(-.22*i,.2,-1).normalize(),t=new it(.35*i,1,.15),n=t.addScaledVector(e,-e.dot(t)).normalize(),s=new it(.2*i,-.318,-.36);return{wrist:s,F:Xn(s,e,n),elbow:new it(.31*i,-.56,-.02)}}function F2(i){const e=new zt;e.name="harma-fpRig";const t=new zt;t.name="harma-fp-sway",e.add(t);const n=new zt;n.name="harma-fp-tool",t.add(n);const s=new Va,r=1.2,o=Ae(.17,-.17,-.58,.06,.09,-.05,r).multiply(Ae(0,0,0,-Math.PI/2,0,0)),a=pf(o,r),{P:c,D:u}=a;s.push(o),ff(s),s.pop();const f=a.R.wrist,d=Xn(f,a.R.f,a.R.u),l=Xn(a.L.wrist,a.L.f,a.L.u),p=a.R.f.clone().add(new it(-.3,.02,.1)).normalize(),v=a.L.f.clone().add(new it(.42,.4,.12)).normalize(),_=Xn(f,p,a.R.u),h=new it(.012,.05,.085).applyMatrix4(_),m=new it(0,1,.2).transformDirection(_),x=c(.03,-.122,-.032),b=u(.2,-1,-.6),M=[x,x.clone().addScaledVector(b,.035),x.clone().lerp(h,.5).add(new it(.05,-.06,.02)),h.clone().addScaledVector(m,.035),h];s.add("suit",vn(M,110,8,q=>.0066+.0012*Math.sin(q*150)),ue.rubber),s.add("metal",cn([[-.004,.0085],[-.002,.0112],[.008,.0112],[.01,.0085]],14,!0,!0),ue.steel,Li(h,m).multiply(Ae(0,0,0,Math.PI/2,0,0)));const C=s.build(n,i,"fp"),A=new en;A.name="harma-muzzle",A.applyMatrix4(Xn(c(0,uf+.006,0),u(0,1,0),u(0,0,1))),t.add(A);const g=(q,te)=>(q.matrix.copy(te),q.matrixWorldNeedsUpdate=!0,t.add(q),q),y={tool:[g(aa(i,"fp-tool-R",1,.9,.25,la(d,p),.34),d),g(aa(i,"fp-tool-L",-1,.9,.25,la(l,v),.34),l)]},T=yn.base.map(q=>z2(q));y.wheel=T.map((q,te)=>{const se=te?-1:1,_e=new it(.44*se,-.5,-.1);return g(aa(i,"fp-wheel-"+"RL"[te],se,.9,.25,la(q.F,q.wrist.clone().sub(_e).normalize()),.44),q.F)}),y.empty=[1,-1].map(q=>{const te=N2(q);return g(aa(i,"fp-empty-"+(q>0?"R":"L"),q,.32,1,la(te.F,te.wrist.clone().sub(te.elbow).normalize()),.34),te.F)});const E=new Ei,z=new Ei;function L(q){y.wheel.forEach((te,se)=>{const _e=U2(q,se);E.makeRotationZ(_e.d).setPosition(yn.c.clone().sub(yn.c.clone().applyAxisAngle(Cc,_e.d))),te.matrix.copy(E).multiply(z.makeTranslation(0,0,.035*Math.sin(Math.PI*_e.fly))).multiply(T[se].F),te.matrixWorldNeedsUpdate=!0})}function F(q){if(!y[q])return!1;n.visible=q==="tool";for(const[te,se]of Object.entries(y))for(const _e of se)_e.visible=te===q;return!0}F("tool");const U=[0,1,2].map(q=>{const te=o.clone().multiply(hf(q));return{M:te,inv:te.clone().invert(),parts:(s.tags["claw"+q]||[]).map(([se,_e,K])=>{const Y=C[se].geometry.attributes.position,ie=C[se].geometry.attributes.normal;return{pos:Y,nrm:ie,start:_e,cnt:K,p0:Y.array.slice(_e*3,(_e+K)*3),n0:ie.array.slice(_e*3,(_e+K)*3)}})}}),G=new Ei,W=new Ei,B=new it;function oe(q){for(const te of U){G.copy(te.M).multiply(W.makeRotationZ(-q)).multiply(te.inv);for(const se of te.parts){const _e=se.pos.array,K=se.nrm.array,Y=se.start*3;for(let ie=0;ie<se.cnt*3;ie+=3)B.set(se.p0[ie],se.p0[ie+1],se.p0[ie+2]).applyMatrix4(G),_e[Y+ie]=B.x,_e[Y+ie+1]=B.y,_e[Y+ie+2]=B.z,B.set(se.n0[ie],se.n0[ie+1],se.n0[ie+2]).transformDirection(G),K[Y+ie]=B.x,K[Y+ie+1]=B.y,K[Y+ie+2]=B.z;se.pos.needsUpdate=!0,se.nrm.needsUpdate=!0}}}return{fpRig:e,sway:t,muzzle:A,meshes:C,toolG:n,hands:y,setPose:F,setWheel:L,setClaws:oe}}function o0(i,e){let t=0;for(;t<i.length-2&&e>i[t+1][0];)t++;const n=i[t],s=i[t+1],r=xn((e-n[0])/(s[0]-n[0]),0,1),o=a=>(n[a]??0)+((s[a]??0)-(n[a]??0))*r;return{rx:o(1),rz:o(2),cx:o(3),cz:o(4),e:(n[5]??2)+((s[5]??2)-(n[5]??2))*r}}function wa(i,e,t){const n=o0(i,t),s=xn((e-n.cx)/n.rx,-.985,.985);return new it(e,t,n.cz-n.rz*(1-Math.abs(s)**n.e)**(1/n.e))}function Ns(i,e,t){const s=wa(i,e,t),r=wa(i,e+.004,t).sub(s),o=wa(i,e,t+.004).sub(s);return{p:s,n:o.cross(r).normalize()}}function O2(i){const e=i*.17,t=26,n=[],s=u=>e*Math.sin(Math.PI*u**.72)**.8*(1-.22*u)+.0012;for(let u=1;u<t;u++){const f=u/t,d=u%2;n.push([s(f)*(d?1:.8),-i*(.1+.9*f)+(d?0:i*.012)])}const r=new vs;r.moveTo(-.0022,0),r.lineTo(.0022,0),r.lineTo(.0026,-i*.1);for(const[u,f]of n)r.lineTo(u,f);r.lineTo(0,-i*1.02);for(const[u,f]of n.reverse())r.lineTo(-u*.94,f-i*.006);r.lineTo(-.0026,-i*.1),r.closePath();const o=new Rr(r,{depth:.0012,bevelEnabled:!0,bevelThickness:.001,bevelSize:8e-4,bevelSegments:1,steps:1}),a=o.attributes.position;for(let u=0;u<a.count;u++){const f=a.getX(u),d=a.getY(u),l=-d/i;a.setZ(u,a.getZ(u)-.32*Math.abs(f)-.012*i/.16*Math.sin(Math.PI*l)*0+.0025)}o.computeVertexNormals();const c=vn([[0,.004,.002],[0,-i*.3,.0034],[0,-i*.7,.0034],[0,-i*1,.0026]],14,6,u=>.0021*(1-.75*u)+4e-4);return bs([Rc(o),Rc(c)],!1)}function mf(i,e,t,n={}){i.add("suit",Yn(e,44,!0,!0),ue.suit);const s=e[e.length-1][0];for(const L of[-1,1]){const F=[];for(let G=0;G<=10;G++){const W=G/10,B=t.yBot-.005-W*(n.pipeLen??.26),oe=L*((n.pipeX0??.05)+(n.pipeDx??.07)*Math.sin(W*Math.PI*.5)),{p:q,n:te}=Ns(e,oe,B);F.push(q.addScaledVector(te,.0015))}i.add("suit",vn(F,30,8,()=>.0052),ue.teal);const U=Ns(e,L*(n.shX??.12),t.yBot-(n.shDy??.035));i.add("suit",Ct(.03,.022,.006,null,14,8),ue.teal,Li(U.p,U.n))}if(n.panel){const[L,F,U]=n.panel,G=Ns(e,L,F),W=Li(G.p,G.n).multiply(Ae(0,0,0,0,0,0,U));i.add("metal",gn(.078,.052,.012,.01,.003),ue.gold,W.clone().multiply(Ae(0,0,.002))),i.add("suit",gn(.07,.044,.014,.008,.003),ue.suitDim,W.clone().multiply(Ae(0,0,.004))),i.add("suit",gn(.03,.03,.004,.005,.001),ue.tealDeep,W.clone().multiply(Ae(-.015,0,.011)));for(let B=0;B<3;B++)i.glow(Ct(.0045,.0045,.0025,null,10,6),Mn.teal,W.clone().multiply(Ae(.012+B*.0105,.008,.0115)));i.add("metal",gn(.03,.006,.004,.002,.001),ue.steel,W.clone().multiply(Ae(.0225,-.009,.0115)))}if(n.belt){const L=n.belt,F=o0(e,L),U=F.e;i.add("suit",Yn([[L-.016,F.rx+.001,F.rz+.001,F.cx,F.cz,U],[L-.012,F.rx+.006,F.rz+.006,F.cx,F.cz,U],[L+.012,F.rx+.006,F.rz+.006,F.cx,F.cz,U],[L+.016,F.rx+.001,F.rz+.001,F.cx,F.cz,U]],44,!1,!1),ue.teal)}const r=t.rTop-t.rBot,o=t.yTop-t.yBot,a=Math.hypot(r,o),c=[r/a,o/a],u=[c[1],-c[0]],f=(L,F)=>[t.yBot+o*L+u[1]*F,t.rBot+r*L+u[0]*F],d=.0055*t.g,l=.0018*t.g,p=[f(0,-.004),f(-.02,d*.7),f(.02,d),f(.09,d),f(.125,l),f(.875,l),f(.91,d),f(.98,d),f(1.02,d*.7),f(1,-.004)];i.add("metal",Yn(p.map(([L,F])=>[L,F,F,0,t.z0]),56,!1,!1),ue.gold),i.add("suit",Yn([[t.yTop-.004,t.rTop-.004,t.rTop-.004,0,t.z0],[t.yTop+(n.neckUp??.03),t.rTop-.012,t.rTop-.012,0,t.z0]],32,!1,!0),n.neckCol??ue.rubber);const v=(L,F,U=0)=>{const[G,W]=f(F,U),B=Math.cos(L),oe=Math.sin(L);return{p:new it(W*B,G,t.z0+W*oe),n:new it(u[0]*B,u[1],u[0]*oe),up:new it(c[0]*B,c[1],c[0]*oe)}};for(const L of[.27,.73]){const[F,U]=f(L,l);i.add("metal",$n(U,.0016*t.g,5,56),ue.goldLight,Ae(0,F,t.z0,Math.PI/2,0,0))}const _=22,h=-Math.PI/2;for(let L=0;L<_;L++){const F=h+(L+.5)/_*Math.PI*2,U=v(F,.5,l);Math.sin(F)>.55||(L%2?i.add("metal",Ct(.0052*t.g,.0052*t.g,.0034*t.g,null,10,6),ue.goldLight,Li(U.p,U.n,U.up)):i.add("metal",new ms(1),ue.bronze,Li(U.p,U.n,U.up).multiply(Ae(0,0,0,0,0,0,.0055*t.g,.0085*t.g,.0032*t.g))))}const m=v(h,.5,l),x=Li(m.p,m.n,m.up);i.add("metal",new ms(1),ue.gold,x.clone().multiply(Ae(0,0,0,0,0,0,.0155*t.g,.0215*t.g,.0045*t.g))),i.add("metal",$n(1,.09,5,4),ue.goldLight,x.clone().multiply(Ae(0,0,.0028*t.g,0,0,0,.0125*t.g,.0178*t.g,.012*t.g))),i.glow(new ms(1),Mn.gem,x.clone().multiply(Ae(0,0,.003*t.g,0,0,0,.0098*t.g,.0145*t.g,.0062*t.g)));const b=v(h,-.02,d*.5),M=b.p.clone().addScaledVector(b.up,-.0115*t.g).addScaledVector(b.n,.002);i.add("metal",$n(.0042*t.g,.0012*t.g,5,12),ue.gold,Li(b.p.clone().addScaledVector(b.up,-.003*t.g),new it(1,0,0))),i.glow(Ct(.0078*t.g,.0078*t.g,.0078*t.g,null,14,10),Mn.crimson,Ae(M.x,M.y,M.z));const C=M.clone().addScaledVector(b.up,-.0085*t.g),A=n.featherLen??.15;let g;if(n.shelf){const L=U=>{let G=n.shelf[0],W=n.shelf[1];for(let B=0;B<24;B++){const oe=(G+W)/2;wa(e,0,oe).z>U?W=oe:G=oe}return(G+W)/2};C.y=L(C.z)+.007;const F=L(C.z-A*.85);g=Ns(e,0,F),g.p.y+=.008}else g=Ns(e,0,C.y-A*(n.featherDrop??.75));const T=g.p.clone().addScaledVector(g.n,.006).sub(C).normalize().clone().negate(),E=g.n.clone().addScaledVector(T,-g.n.dot(T)).normalize(),z=T.clone().cross(E);return{top:C,basis:new Ei().makeBasis(z,T,E).setPosition(C),L:A,yTop:s}}function gf(i,e,t,n){const s=new zt;s.name=n,s.applyMatrix4(e.basis);const r=new $e(O2(e.L),t.feather);return r.name=n+":mesh",r.frustumCulled=!1,s.add(r),i.add(s),r}const B2=[[-.82,.17,.165,0,-.035,2.5],[-.62,.2,.2,0,-.07,2.5],[-.47,.222,.225,0,-.095,2.6],[-.37,.226,.225,0,-.095,2.6],[-.3,.224,.222,0,-.092,2.6],[-.266,.214,.19,0,-.062,2.5],[-.24,.194,.152,0,-.024,2.4],[-.222,.172,.118,0,.006,2.4],[-.196,.1,.09,0,.03,2.1]];function k2(i){const e=new zt;e.name="harma-chest";const t=new Va,n=mf(t,B2,{z0:.03,yTop:-.166,yBot:-.214,rTop:.077,rBot:.135,g:1.55},{featherLen:.19,shelf:[-.3,-.2],pipeLen:.1,pipeX0:.085,pipeDx:.07,shX:.14,shDy:.012,panel:[-.12,-.262,1],belt:-.52,neckUp:.02,neckCol:Wt(ke.cardBg,ke.lotusTeal,.25).multiplyScalar(.6)});t.build(e,i,"chest");const s=gf(e,n,i,"harma-chest-feather");return{chest:e,feather:s}}const Cl=new it(0,0,.085),a0=i=>Ae(i*.086,.052,.094,.06,0,-i*.36);function ku(i,e,t,n,s,r=9){const o=[];for(let a=0;a<=r;a++){const c=a/r,u=1-c;o.push([n+c*t,i*u**.82*(1-.18*Math.sin(c*Math.PI))+.0012,e*u**.6+.001,0,s-.012*c*c,2])}return Yn(o,18,!0,!0)}function G2(i){const e=n=>{const s=ue.skin.clone();if(n.z<.02){const r=Math.abs(n.x)-.046,o=(n.y-.003)*1.35,a=Math.hypot(r,o);s.lerp(ue.lilac,.85*(1-Ki(.024,.046,a))),s.lerp(ue.skinWarm,.6*Ki(-.03,-.085,n.y))}return s};i.add("skin",Ct(.092,.09,.098,n=>{n.y<0&&(n.x*=1-.36*(-n.y)**1.7),n.x*=1+.1*Math.exp(-(((n.y+.28)/.3)**2)),n.z<0&&(n.z-=.33*Math.exp(-((n.x/.5)**2+((n.y+.47)/.36)**2)))},48,32),e,Ae(Cl.x,Cl.y,Cl.z));for(const n of[-1,1])i.add("skin",Ct(.0245,.0185,.02,null,18,12),ue.skin,Ae(n*.0205,-.05,-.034,0,-n*.25,0)),i.add("skin",new xs(.0034,.013,8),ue.tooth,Ae(n*.0135,-.0705,-.04,Math.PI,0,0)),i.add("skin",vn([[0,-.038,-.0545],[0,-.05,-.0545],[n*.011,-.0595,-.0515],[n*.027,-.0555,-.044],[n*.036,-.047,-.034]],16,6,s=>.0016*(1-.5*s)),ue.liner);i.add("skin",Ct(.021,.0155,.019,null,16,10),ue.skin,Ae(0,-.0765,-.022)),i.add("skin",Ct(.0118,.0082,.0085,n=>{n.x*=1+.45*n.y},14,10),ue.nose,Ae(0,-.031,-.0495));const t=[];for(let n=0;n<=8;n++){const s=n/8;t.push([-.19+s*.12,.04+.002*Math.sin(s*22)+.01*s,.039+.002*Math.sin(s*22)+.012*s,0,.06+.016*s,2])}i.add("skin",Yn(t,24,!1,!1),ue.skinWarm);for(const n of[1,-1]){i.push(Ae(n*.046,.002,2e-4,0,-n*.34,n*.2)),i.glow(Ct(.025,.0195,.0088,null,20,12),n>0?Mn.eyeGreen:Mn.eyeBlue,Ae(0,0,.002)),i.glow(Ct(.0042,.0165,.004,null,10,10),Mn.black,Ae(0,0,-.0056)),i.glow(Ct(.0032,.0032,.002,null,8,6),Mn.white,Ae(n*.008,.008,-.0062));const s=[];for(let r=0;r<20;r++){const o=r/20*Math.PI*2,a=Math.sin(o);s.push([.029*Math.cos(o),.0208*Math.sign(a)*Math.abs(a)**1.25,.0012+.004*Math.cos(o)**2])}i.add("skin",vn(s,48,6,()=>.0024,1,!0),ue.liner),i.add("skin",vn([[-.031,.005,.007],[-.013,.0228,5e-4],[.011,.0238,5e-4],[.032,.009,.008]],16,6,r=>.0034*Math.sin(Math.PI*(.1+.8*r))),ue.lilac),i.pop()}for(const n of[-1,1]){i.push(a0(n)),i.add("skin",ku(.056,.02,.205,0,0),ue.skin),i.add("skin",ku(.043,.012,.165,.012,-.0125),s=>ue.teal.clone().lerp(ue.skin,.45*Ki(.03,.17,s.y)).lerp(ue.tealDeep,.35*(1-Ki(.012,.06,s.y))));for(const[s,r]of[[.03,.0125],[.052,.0105]])i.add("metal",$n(r,.0027,6,18),ue.gold,Ae(n*(.056*(1-s/.205)**.82+.001),s,-.004,0,n*.5,0));i.pop(),i.add("metal",vn([[n*.108,.07,.07],[n*.128,.03,.02],[n*.132,-.03,-.02],[n*.112,-.078,-.045],[n*.088,-.086,-.052],[n*.082,-.068,-.05],[n*.094,-.06,-.047]],40,6,s=>.0021*(1-.6*s)),ue.gold),i.add("metal",vn([[n*.034,-.047,-.044],[n*.07,-.038,-.058],[n*.104,-.046,-.052],[n*.116,-.07,-.044],[n*.104,-.08,-.042]],32,6,s=>.0017*(1-.65*s)),ue.goldLight),i.add("metal",vn([[n*.036,-.056,-.042],[n*.062,-.066,-.054],[n*.078,-.09,-.05],[n*.068,-.104,-.046]],28,6,s=>.0016*(1-.65*s)),ue.goldLight)}}function xf(i,e){const a=Math.cos(i),c=Math.sin(i);let u,f;if(e<=.7){const _=e/.7*1.5;u=Math.sin(_),f=Math.cos(_)}else{const _=(e-.7)/.3,h=c<0?.3+.2*(-c)**2:.3*(1-.75*c);u=Math.sin(1.5)+h*_,f=Math.cos(1.5)-.2*_*(.4+.6*_)}const d=.099*u*a,l=.088+.11*u*c,p=Math.abs(d)/.099;let v=.047+.086*f;return v-=.062*Math.max(0,p-.3)**1.2*e*e*(c<.3?1:1-.6*Ki(.3,1,c)),v+=.02*Math.exp(-((d/.022)**2))*(.45+.55*e)*(c<.4?1:.5),[d,v,l]}function V2(){const t=[],n=[];for(let r=0;r<=16;r++)for(let o=0;o<44;o++)t.push(...xf(o/44*Math.PI*2,r/16));for(let r=0;r<16;r++)for(let o=0;o<44;o++){const a=r*44+o,c=(r+1)*44+o,u=r*44+(o+1)%44,f=(r+1)*44+(o+1)%44;n.push(a,u,c,c,u,f)}const s=new Ft;return s.setAttribute("position",new ot(t,3)),s.setIndex(n),rf(s)}function H2(i){i.add("metal",V2(),o=>ue.steel.clone().lerp(ue.bronze,xn(.25+.75*Math.exp(-((o.x/.05)**2))+(o.y<.03?.35:0),0,1)),null);const e=new vs;e.moveTo(-.07,.062),e.quadraticCurveTo(-.045,.108,-.012,.14),e.quadraticCurveTo(.008,.152,.03,.142),e.quadraticCurveTo(.075,.14,.1,.1),e.lineTo(.1,.08),e.quadraticCurveTo(.06,.122,.02,.128),e.quadraticCurveTo(-.03,.115,-.06,.06),e.closePath(),i.add("metal",Ac(e,.004,.0035,10),ue.gold,Ae(0,0,.088-.012,0,-Math.PI/2,0)),i.add("metal",Yn([[.128,.0125,.034,0,.076,1.35],[.16,.009,.02,0,.076,1.35],[.205,.005,.009,0,.076,1.35],[.252,6e-4,6e-4,0,.076,2]],12,!1,!0),ue.gold);const t=[];for(let o=0;o<=24;o++)t.push(xf(Math.PI+o/24*Math.PI,1));i.add("metal",vn(t,60,6,()=>.0036),ue.gold);for(const o of[-1,1]){i.add("metal",vn([[o*.118,-.012,.03],[o*.124,-.06,.018],[o*.112,-.112,.016],[o*.085,-.15,.02]],20,8,c=>.0085*(1-.25*c),.3),ue.steel),i.add("metal",Ct(.0095,.014,.004,null,10,8),ue.gold,Ae(o*.1235,-.058,.012,0,-o*.4,0)),i.add("metal",Ct(.007,.01,.0035,null,10,8),ue.gold,Ae(o*.113,-.108,.0105,0,-o*.4,o*.3)),i.push(a0(o));const a=[];for(let c=0;c<=10;c++){const u=c/10,f=1-u;a.push([-.004+u*.245,.069*f**.85+.003,.042*f**.7+.003,0,-.004-.012*u*u,2])}i.add("glass",Yn(a,20,!1,!0),ue.white),i.add("metal",Yn([[-.02,.07,.044,0,-.004],[-.014,.0755,.049,0,-.004],[-.002,.0755,.049,0,-.004],[.004,.0705,.0445,0,-.004]],28,!1,!1),ue.bronze),i.pop()}const n=new it(0,-.035,.05),s=.156,r=new jn(s,36,20,Math.PI*.88,Math.PI*1.24,.98,Math.PI-.98-.42);i.add("glass",r,ue.white,Ae(n.x,n.y,n.z))}const vf=1.18,co=[[-.74,.15,.12,0,.066,2.6],[-.66,.152,.122,0,.066,2.6],[-.6,.14,.11,0,.064,2.5],[-.52,.15,.116,0,.06,2.6],[-.4,.172,.128,0,.056,2.7],[-.3,.176,.122,0,.058,2.6],[-.248,.156,.098,0,.064,2.3],[-.212,.104,.077,0,.066,2.1],[-.19,.064,.06,0,.066,2]],W2=.192,_f=i=>new it(i*W2,-.278,.062),Pc=Ae(.045,-.5,-.34,-.07,.16,-.04).multiply(Ae(0,0,0,-Math.PI/2,0,0)),yf={R:new it(.285,-.5,-.005),L:new it(-.225,-.475,-.12)},_t={w:.4,h:.43,d:.15,y:-.395,z:.25,tankX:.152,tankY:-.262,tankZ:.292,tankR:.054,tankL:.28};function X2(i){const e=new it(0,1,0);i.add("suit",gn(_t.w,_t.h,_t.d,.06,.022),ue.suit,Ae(0,_t.y,_t.z)),i.add("suit",gn(.2,.25,.03,.03,.008),ue.suitDim,Ae(0,_t.y-.02,_t.z+_t.d/2+.006)),i.add("suit",gn(.25,.05,.11,.02,.01),ue.teal,Ae(0,_t.y+_t.h/2+.004,_t.z));for(const a of[-1,1]){i.push(Ae(a*_t.tankX,_t.tankY,_t.tankZ)),i.add("metal",new Ar(_t.tankR,_t.tankL,4,14),ue.steel);for(const d of[-.1,.085])i.add("metal",cn([[d-.011,_t.tankR],[d-.008,_t.tankR+.004],[d+.008,_t.tankR+.004],[d+.011,_t.tankR]],18),ue.gold);i.add("suit",Ct(_t.tankR*.94,.03,_t.tankR*.94,null,16,8),ue.teal,Ae(0,_t.tankL/2+.03,0)),i.add("metal",cn([[0,.016],[.022,.016],[.026,.02],[.034,.02],[.036,.012]],12,!1,!0),ue.gold,Ae(0,_t.tankL/2+.05,0)),i.pop(),i.add("suit",gn(.02,.2,.085,.008,.005),ue.teal,Ae(a*(_t.w/2+.002),_t.y-.06,_t.z-.005));const c=new it(a*.06,_t.y+_t.h/2+.02,_t.z+.01),u=new it(a*.079,-.203,.118),f=[c,c.clone().add(new it(a*.022,.034,-.012)),new it(a*.132,-.138,.2),new it(a*.153,-.16,.135),u.clone().add(new it(a*.042,.012,.02)),u];i.add("suit",vn(f,66,8,d=>.0128+.0024*Math.sin(d*138)),ue.rubber),i.add("metal",cn([[-.012,.014],[-.008,.019],[.012,.019],[.016,.014]],14,!0,!0),ue.gold,Ae(c.x,c.y,c.z)),i.add("metal",Ct(.02,.02,.02,null,12,8),ue.gold,Ae(u.x,u.y,u.z))}const t=-.6,n=o0(co,t);i.add("suit",Yn([[t-.024,n.rx+.002,n.rz+.002,0,n.cz,n.e],[t-.02,n.rx+.008,n.rz+.008,0,n.cz,n.e],[t+.02,n.rx+.008,n.rz+.008,0,n.cz,n.e],[t+.024,n.rx+.002,n.rz+.002,0,n.cz,n.e]],44,!1,!1),ue.rubber);const s=Ns(co,0,t),r=Li(s.p,s.n);i.add("metal",gn(.062,.05,.016,.01,.004),ue.gold,r.clone().multiply(Ae(0,0,.012))),i.glow(new ms(1),Mn.teal,r.clone().multiply(Ae(0,0,.021,0,0,0,.012,.016,.005)));for(const a of[-1,1]){const c=Ns(co,a*.096,t-.012);i.add("suit",gn(.056,.07,.03,.01,.006),ue.suitDim,Li(c.p,c.n).multiply(Ae(0,0,.018))),i.add("metal",Ct(.006,.006,.004,null,10,6),ue.gold,Li(c.p,c.n).multiply(Ae(0,.012,.034)))}const o=pf(Pc,1);i.push(Pc),ff(i),i.pop();for(const[a,c]of[["R",1],["L",-1]]){const u=o[a],f=yf[a],d=_f(c),l=u.wrist.distanceTo(f),p=f.clone().sub(d).normalize();i.push(Xn(u.wrist,u.f,u.u)),lf(i,c,.9,.25),i.pop(),i.push(Xn(u.wrist,u.wrist.clone().sub(f).normalize(),u.u)),cf(i,l),i.pop(),i.add("suit",Ct(.06,.06,.06,null,16,10),ue.suit,Ae(f.x,f.y,f.z)),i.add("metal",$n(.058,.0042,6,24),ue.gold,Xn(f.clone().addScaledVector(p,-.034),p,e));const v=d.clone().lerp(f,.5).add(new it(c*.014,0,.012));i.add("suit",vn([d,v,f],24,14,_=>.066-.009*_+(_>.6&&_<.93?.0038*Math.sin((_-.6)*105):0)),ue.suit),i.add("suit",Ct(.082,.074,.08,null,18,12),ue.suit,Ae(d.x+c*.004,d.y+.012,d.z)),i.add("suit",$n(.068,.0095,8,28),ue.teal,Xn(d.clone().addScaledVector(p,.072),p,e)),i.add("metal",$n(.0672,.0046,6,28),ue.gold,Xn(d.clone().addScaledVector(p,.089),p,e)),i.add("metal",$n(.079,.0046,6,28),ue.gold,Xn(d.clone().add(new it(-c*.03,.006,0)),new it(c,.25,0).normalize(),e)),i.add("suit",Ct(.032,.032,.008,null,14,8),ue.teal,Ae(d.x+c*.08,d.y+.016,d.z-.012,0,c*1.25,0))}}function q2(){const i=[[.03,-.64,.2],[-.1,-.63,.25],[-.235,-.55,.24],[-.315,-.4,.2],[-.325,-.22,.18],[-.285,-.06,.17],[-.3,.1,.17]],e=new Gs(i.map(o=>new it(...o)),!1,"centripetal"),t=[],n=(o,a,c,u,f=18)=>{const d=vn(o,f+8,10,v=>a*Math.sin(Math.PI*(.08+.92*v**.55))**.9*(1-v)**.55+5e-4,.8,!1,u?.75:.25),l=d.attributes.position.count,p=new Float32Array(l).fill(c);d.setAttribute("phase",new sn(p,1)),t.push(d)};n(i,.08,0,0,30),[[.2,[-.05,.14,.02],[-.02,.26,0],.055,1.3],[.33,[-.07,.15,0],[-.04,.3,-.02],.064,2.6],[.46,[-.06,.16,.02],[0,.34,.01],.068,4.1],[.58,[-.05,.14,-.01],[-.075,.27,0],.058,5.3],[.7,[.04,.12,.01],[.03,.25,.02],.05,.7],[.4,[.06,.1,-.03],[.09,.23,-.03],.05,3.4],[.82,[-.06,.09,0],[-.03,.2,0],.042,2]].forEach(([o,a,c,u,f],d)=>{const l=e.getPointAt(o),p=e.getTangentAt(o);n([l.clone().addScaledVector(p,-.05),l.clone().addScaledVector(p,.01),l.clone().add(new it(...a)),l.clone().add(new it(...c))],u,f,d%2,16)});const r=bs(t,!1);return r.deleteAttribute("normal"),r.computeVertexNormals(),{geo:r,center:new it(-.27,-.22,.2)}}function Y2(i){const e=new zt;e.name="harma-mirror";const t=new Va;t.push(Ae(0,0,0,0,0,0,vf)),G2(t),H2(t),t.pop();const n=mf(t,co,{z0:.066,yTop:-.138,yBot:-.19,rTop:.057,rBot:.086,g:1},{featherLen:.15,featherDrop:.8,pipeLen:.2,pipeX0:.05,pipeDx:.085,shX:.105,shDy:.045,panel:[-.092,-.385,1.3],neckUp:.012});X2(t),t.build(e,i,"mirror");const s=gf(e,n,i,"harma-mirror-feather"),r=q2(),o=new $e(r.geo,i.flame);o.name="mirror:flame",o.frustumCulled=!1,e.add(o);const a=new en;return a.name="harma-flame",a.position.copy(r.center),e.add(a),{mirror:e,feather:s,flame:a,flameMesh:o,flameBase:r.geo.attributes.position.array.slice()}}function $2(){const i=[],e=(r,o)=>{const a=r.index?r.toNonIndexed():r.clone();for(const c of Object.keys(a.attributes))c!=="position"&&c!=="normal"&&a.deleteAttribute(c);a.attributes.normal||a.computeVertexNormals(),o&&(a.applyMatrix4(o),o.determinant()<0&&of(a)),i.push(a)},t=Ae(0,0,0,0,0,0,vf);e(new jn(1,12,8),t.clone().multiply(Ae(0,.022,.085,0,0,0,.116,.108,.115))),e(new Vt(.105,.15,.03,12),t.clone().multiply(Ae(0,.02,.07)));for(const r of[-1,1]){e(new xs(1,1,7),t.clone().multiply(a0(r)).multiply(Ae(0,.11,0,0,0,0,.066,.25,.03)));const o=_f(r),a=yf[r>0?"R":"L"],c=new it(r>0?.06:-.07,r>0?-.45:-.56,r>0?-.1:-.36);for(const[u,f,d]of[[o,a,.06],[a,c,.05]]){const l=new Ei().makeRotationFromQuaternion(new Qt().setFromUnitVectors(new it(0,1,0),f.clone().sub(u).normalize())).setPosition(u.clone().lerp(f,.5));e(new Vt(d,d,u.distanceTo(f),7),l)}e(new jn(.076,8,6),Ae(o.x,o.y,o.z)),e(new Ar(_t.tankR,_t.tankL,3,7),Ae(r*_t.tankX,_t.tankY,_t.tankZ))}e(new It(_t.w,_t.h,_t.d),Ae(0,_t.y,_t.z)),e(new It(.11,.42,.11),Pc.clone().multiply(Ae(0,.03,0))),e(new xs(.02,.13,5),t.clone().multiply(Ae(0,.19,.078))),e(new It(.012,.03,.16),t.clone().multiply(Ae(0,.135,.09))),e(new Vt(.058,.088,.14,10),Ae(0,-.13,.068)),e(Yn(co,12,!0,!0));const n=bs(i,!1),s=new $e(n,new Ai({color:0}));return s.name="harma-shadow",s}function ca(i){let e=0,t=0;return(function n(s){if(s.visible){if(s.isMesh){e++;const r=s.geometry;t+=(r.index?r.index.count:r.attributes.position.count)/3}for(const r of s.children)n(r)}})(i),{draws:e,tris:Math.round(t)}}function Z2(){const i=L2(),e=F2(i),t=k2(i),n=Y2(i),s=$2(),r=ue.teal.clone(),o=Wt(ke.flame,ke.gold,.5),a=Wt(ke.flame,16777215,.3),c=ue.glowTeal.clone().multiplyScalar(.7),u=Jt(ke.flame),f=Wt(ke.flame,16722432,.75),d=Jt(16722432).lerp(Jt(ke.deepViolet),.15),l=Wt(ke.turquoise,16777215,.2),p=n.flameMesh.geometry.attributes.position,v=n.flameMesh.geometry.attributes.uv,_=n.flameMesh.geometry.attributes.phase,h=i.flame.map,m=i.glow.emissiveMap,x=new Oe;let b=0,M=-1,C="tool";const A=(E,z,L)=>{x.copy(z).multiplyScalar(Math.max(0,L)*1.1/Tc).convertLinearToSRGB();const F=m.image.data,U=E*4,G=Math.round(xn(x.r,0,1)*255),W=Math.round(xn(x.g,0,1)*255),B=Math.round(xn(x.b,0,1)*255);(F[U]!==G||F[U+1]!==W||F[U+2]!==B)&&(F[U]=G,F[U+1]=W,F[U+2]=B,m.needsUpdate=!0)};function g(E){return e.setPose(E)?(C=E,!0):!1}function y(E,z={}){const L=xn(z.wake??0,0,1),F=xn(z.heat??0,0,1),U=z.mode==="cut",G=xn(z.hold??0,0,1),W=xn(z.fire??0,0,1);z.pose&&z.pose!==C&&g(z.pose);const B=C==="wheel"?.2:C==="empty"?1.6:1;e.sway.position.set(.0012*B*Math.sin(E*.83+.4),.0034*B*Math.sin(E*1.55),.0016*B*Math.sin(E*1.55+1.1)),e.sway.rotation.set(.0048*B*Math.sin(E*1.55+.7),.0032*B*Math.sin(E*.83),.0052*B*Math.sin(E*1.1+.5)),C==="wheel"&&e.setWheel(z.wheel??0);const oe=Math.round(G*24);oe!==M&&(M=oe,e.setClaws(oe/24*.36)),A(Mn.coil,x.copy(ue.glowTeal).lerp(l,.35*G),.72+.5*G*(.88+.12*Math.sin(E*19))+.18*W),U?(i.lens.emissive.copy(o).lerp(a,W),i.lens.emissiveIntensity=.9+2.9*W*(1+.13*Math.sin(E*31)*Math.sin(E*7.3))):(i.lens.emissive.copy(r),i.lens.emissiveIntensity=1.4+.12*Math.sin(E*2.4)+1*G),F<.5?x.copy(c).lerp(u,F*2):x.copy(u).lerp(f,F*2-1),A(Mn.heat,x,.5+1.45*F+(F>.85?.6*Math.sin(E*14):0)),A(Mn.hot,x.copy(d).lerp(u,Ki(.55,1,F)*.7),1.7*Ki(.25,1,F)*(.9+.1*Math.sin(E*6.3))+.35*W*(U?1:0));const q=.055*Math.sin(E*1.3)+.02*Math.sin(E*2.9+1);for(const K of[t.feather,n.feather])K.rotation.z=q,K.rotation.x=.012*Math.sin(E*1.7+.6);const te=p.array,se=n.flameBase;for(let K=0;K<p.count;K++){const Y=v.getX(K),ie=_.getX(K),ve=Y*Y,Me=K*3,j=L*.012*Math.sin(E*23+ie*3+Y*11),Ee=L*.016*Math.sin(E*17+ie*5+Y*7);te[Me]=se[Me]+(.024*Math.sin(E*2.6+ie+Y*5)+j)*ve,te[Me+1]=se[Me+1]+(.02*Math.sin(E*1.9+ie*1.3)+Ee)*ve,te[Me+2]=se[Me+2]+.016*Math.cos(E*2.1+ie*1.7+Y*4)*ve}p.needsUpdate=!0;const _e=Math.round(L*32);_e!==b&&(b=_e,af(h.image.data,_e/32),h.needsUpdate=!0),i.flame.emissiveIntensity=1.05+.12*Math.sin(E*5.1)+L*(.35+.25*Math.sin(E*29))}y(0,{wake:0,mode:"grip",heat:0});const T={};for(const E of["wheel","empty","tool"])e.setPose(E),T[E]=ca(e.fpRig);return{fpRig:e.fpRig,chest:t.chest,mirror:n.mirror,shadow:s,muzzle:e.muzzle,flame:n.flame,materials:i,update:y,setPose:g,wheel:{center:yn.c.clone(),radius:yn.r,tube:yn.tube,base:yn.base.slice()},counts:{fpRig:T.tool,fpByPose:T,chest:ca(t.chest),mirror:ca(n.mirror),shadow:ca(s)}}}const K2=Object.freeze(Object.defineProperty({__proto__:null,buildHarma:Z2},Symbol.toStringTag,{value:"Module"})),J2=Object.assign({"./harma/model.js":K2});function Q2(i,e){const t=Object.values(J2)[0]?.buildHarma,n=t?t():null,s=new zt;i.add(s);const r=new Oe(16754250),o=new Oe(ke.neonViolet),a=new Oe,c=new n0(r,0,6.5,1.5);c.position.set(-.34,-.38,.5),s.add(c),n&&(e.add(n.fpRig),s.add(n.chest,n.mirror,n.shadow),n.fpRig.traverse(f=>{f.layers.set(1),f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0,f.frustumCulled=!1)}),n.chest.traverse(f=>{f.layers.set(1),f.isMesh&&(f.receiveShadow=!0)}),n.mirror.traverse(f=>f.layers.set(2)),n.shadow.material=new Ai({colorWrite:!1,depthWrite:!1}),n.shadow.castShadow=!0,n.shadow.frustumCulled=!1,n.materials.suit&&n.materials.suit.color.setScalar(.72));let u="tool";return{model:n,body:s,tail:c,muzzle:n?n.muzzle:null,setPose(f){f!==u&&(u=f,n&&n.setPose&&n.setPose(f))},pose:()=>u,setTier(f){n&&(n.shadow.castShadow=f!=="lite")},update(f,d,l={}){const p=l.wake||0,v=l.inspect||0;Nn(s,d.x,d.y,d.z,d.yaw),s.updateMatrixWorld(!0);const _=1+.06*Math.sin(f*9.1)*Math.sin(f*4.3)+p*.4*Math.sin(f*37)*Math.sin(f*23.3);a.copy(r).lerp(o,p*(.4+.25*Math.sin(f*3.1))),c.color.copy(a),c.intensity=2.1*_,n&&(n.fpRig.visible=l.rig!==0&&l.rig!==!1,n.fpRig.position.set(-.05*v,.05*v-(l.lower||0)*.25,.05*v),n.fpRig.rotation.set(.08*v+(l.lower||0)*.5,.22*v,.05*v),n.update(f,{wake:p,mode:l.mode||"grip",heat:l.heat||0,hold:l.hold||0,fire:l.fire||0,wheel:l.wheel||0,pose:l.pose||"tool"}))}}}const dr=["lite","medium","high"],Mf={high:{msaa:4,bloom:!0,hdr:!0,spots:3,shadowSpots:3,shadowSize:1024,points:3,shadowsPerFrame:3,mirror:1,mirrorWorld:!0,prepass:!0,env:!0,uzor:2,sunSteps:24,particles:1,shafts:!0,minPixels:1280*720},medium:{msaa:0,bloom:!0,hdr:!0,spots:2,shadowSpots:2,shadowSize:512,points:2,shadowsPerFrame:1,mirror:.5,mirrorWorld:!0,prepass:!0,env:!0,uzor:1,sunSteps:12,particles:.5,shafts:!0,minPixels:960*540},lite:{msaa:0,bloom:!1,hdr:!0,spots:2,shadowSpots:0,shadowSize:512,points:1,shadowsPerFrame:0,mirror:0,mirrorWorld:!1,prepass:!1,env:!0,uzor:0,sunSteps:0,particles:.25,shafts:!1,minPixels:640*360}},j2=1920*1080,Gu=50,Pl=30,e_=57,ua=.85;function Yr(i,e,t){return Math.min(t,Math.sqrt(j2/Math.max(1,i*e)))}class t_{constructor({cssW:e,cssH:t,dpr:n,tier:s="high",lockTier:r=!1,lockScale:o=0,maxScale:a=0}={}){this.tier=s,this.lockTier=r,this.lockScale=o,this.resize(e,t,n,a),this.scale=o||Math.min(this.maxScale,Yr(e,t,n)),this.win=[],this.acc=0,this.hold=1.5,this.goodWindows=0,this.ceilScale=1/0,this.ceilUntil=0,this.ceilFails=0,this.tierFailUntil=0,this.t=0,this.fps=0,this.ms=0,this.changes=[]}resize(e,t,n,s=0){this.cssW=e,this.cssH=t,this.dpr=n,this.maxScale=s||Math.min(n,2),this.scale&&(this.scale=Math.min(this.scale,this.maxScale))}minScale(){return Math.min(this.maxScale,Math.sqrt(Mf[this.tier].minPixels/Math.max(1,this.cssW*this.cssH)))}pixels(){return Math.round(this.cssW*this.scale)*Math.round(this.cssH*this.scale)}_log(e){this.changes.push({t:+this.t.toFixed(1),what:e,tier:this.tier,scale:+this.scale.toFixed(3),fps:+this.fps.toFixed(1)}),this.changes.length>40&&this.changes.shift()}_tierDown(){const e=dr.indexOf(this.tier);return this.lockTier||e<=0?!1:(this.tier=dr[e-1],this.scale=Math.min(this.maxScale,Yr(this.cssW,this.cssH,this.dpr)),this.ceilScale=1/0,this.hold=2.5,this._log("ступень вниз"),!0)}_tierUp(){const e=dr.indexOf(this.tier);return this.lockTier||e>=dr.length-1||this.t<this.tierFailUntil?!1:(this.prevTier=this.tier,this.triedUpAt=this.t,this.tier=dr[e+1],this.scale=Math.max(this.minScale(),Math.min(this.maxScale,Yr(this.cssW,this.cssH,this.dpr))*ua*ua),this.ceilScale=1/0,this.hold=2.5,this._log("ступень вверх"),!0)}frame(e){if(this.t+=e,e>.5){if(this.longRun=(this.longRun||0)+1,this.longRun<2)return!1;e=Math.min(e,2)}else this.longRun=0;if(this.hold>0)return this.hold-=e,this.win.length=0,this.acc=0,!1;if(this.win.push(e),this.acc+=e,this.acc<.5&&!(this.win.length>=4&&this.acc/this.win.length>1/Pl))return!1;const t=this.win.slice().sort((o,a)=>o-a),n=t[t.length>>1];this.win.length=0,this.acc=0,this.ms=n*1e3,this.fps=1/n;const s=this.tier+this.scale,r=this.minScale();if(this.fps<Gu)if(this.goodWindows=0,this.triedUpAt!==void 0&&this.t-this.triedUpAt<8&&this.prevTier)this.tier=this.prevTier,this.prevTier=null,this.tierFailUntil=this.t+60,this.scale=Math.min(this.maxScale,Yr(this.cssW,this.cssH,this.dpr)),this.hold=2.5,this._log("ступень вверх не удержалась, назад");else if(!this.lockScale&&this.scale>r*1.001){this.ceilScale=this.scale,this.ceilFails++,this.ceilUntil=this.t+Math.min(600,20*2**(this.ceilFails-1));const o=this.fps<Pl?Math.max(.5,Math.sqrt(this.fps/(Gu*1.15))):ua;this.scale=Math.max(r,this.scale*o),this.hold=.6,this._log(this.fps<Pl?"ниже 30: масштаб вниз сразу":"масштаб вниз")}else this._tierDown();else if(this.fps>=e_){if(this.goodWindows++,this.goodWindows>=3){this.goodWindows=0,this.prevTier&&this.t-this.triedUpAt>=8&&(this.prevTier=null);const o=Math.min(this.maxScale,Yr(this.cssW,this.cssH,this.dpr)),a=Math.min(this.maxScale,this.scale/ua),c=a>=this.ceilScale*.999&&this.t<this.ceilUntil;this.scale>=o*.999&&this._tierUp()||!this.lockScale&&a>this.scale*1.001&&!c&&(this.scale=a,this.hold=.6,this._log("масштаб вверх"))}}else this.goodWindows=0;return s!==this.tier+this.scale}}function n_(i,{seed:e=1,bench:t=!1}={}){i.shadowMap.enabled=!0,i.shadowMap.type=no,i.toneMapping=Ni,i.autoClear=!1,i.info.autoReset=!1;const n=new vc;n.fog=new $c(461585,.01);const s=new _o(i),r=s.fromScene(new Nv,.04).texture;s.dispose(),n.environmentIntensity=.06;const o=new zp(9417983,1712176,.2);n.add(o);const a=new Wn(70,window.innerWidth/window.innerHeight,.06,1500);a.layers.enable(1),n.add(a);const c=new r2(n,{spots:3,points:3}),u=v2(e,c);n.add(u.group);const f=y2(u.fx,e);n.add(f.group);const d=S2(u.fx.sun);n.add(d);const l=(Pe.z0+Pe.z1)/2,{sky:p,asteroid:v}=M2(e),_=ji(l);p.userData.room="corridor",p.position.copy(an(Pe.x-.3,1.5,l));const h=an(...u.fx.sun.pos),m=an(...u.fx.sun.to).sub(h).normalize();li.uSunPos.value.copy(h),li.uSunDir.value.copy(m);const x=m.clone().negate();p.children[1].position.copy(x).multiplyScalar(900),v.material.uniforms.uSun.value=x,v.position.set(-430,14,-250).applyQuaternion(_),v.quaternion.premultiply(_),n.add(p);const b=new Zn(16,16,{type:hi}),M=b2(b);n.add(M.mesh);const C=new Wn,A=new vc,g=new Ai({colorWrite:!1,polygonOffset:!0,polygonOffsetFactor:.5,polygonOffsetUnits:1});u.group.updateMatrixWorld(!0);const y=new ct;u.group.traverse(Te=>{if(Te.isMesh&&Te.material.userData.room&&Te.matrixWorld.equals(y)){const He=new $e(Te.geometry,g);He.userData.room=Te.parent.userData.room,A.add(He)}});const T=Q2(n,a),E=p2(i,n,a,A);t&&(c.forceShadows=!0);const z={};let L=null,F="";const U=new ze;function G(){E.configure({msaa:L.msaa,bloom:L.bloom,hdr:L.hdr,prepass:L.prepass,ldr:L.ldr}),i.getDrawingBufferSize(U),b.setSize(Math.max(16,Math.round(U.x*(L.mirror||.01))),Math.max(16,Math.round(U.y*(L.mirror||.01))))}function W(Te){F=Te,L={...Mf[Te],...z},c.setTier(L),T.setTier(L.shadowSpots?Te:"lite"),n.environment=L.env?r:null,eo.uUzQ.value=L.uzor,eo.uUzOff.value=L.noUzor?1:0,d.material.uniforms.uSteps.value=Math.max(1,L.sunSteps),li.uKeep.value=L.particles,f.shaftGroup.visible=L.shafts,C.layers.set(2),L.mirrorWorld&&C.layers.enable(0),G()}function B(Te){i.setPixelRatio(Te),i.setSize(window.innerWidth,window.innerHeight),a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),G()}const oe={airlock:{fog:461586,sky:9417983,ground:1449002,hemi:.2,tint:[.95,1,1.07]},corridor:{fog:461585,sky:8363992,ground:1843240,hemi:.17,tint:[.96,1,1.05]},bay:{fog:1116934,sky:16756848,ground:2759696,hemi:.19,tint:[1.06,1,.92]},gallery:{fog:329484,sky:7311312,ground:1053724,hemi:.14,tint:[.94,1,1.08]}},q={fog:657174,sky:8019199,ground:801344,hemi:.22,tint:new k(.9,.98,1.1)},te={fog:new Oe(461585),sky:new Oe(9417983),ground:new Oe(1449002),hemi:.2,tint:new k(1,1,1)},se=new Oe,_e=new Oe,K=new k,Y=new Oe,ie=new Oe(ke.turquoise),ve=new Oe(ke.neonViolet);function Me(Te,He,Se){const ht=oe[Te]||oe.corridor;te.fog.lerp(se.set(ht.fog).lerp(_e.set(q.fog),He),Se),te.sky.lerp(se.set(ht.sky).lerp(_e.set(q.sky),He),Se),te.ground.lerp(se.set(ht.ground).lerp(_e.set(q.ground),He),Se),te.hemi+=(ht.hemi+(q.hemi-ht.hemi)*He-te.hemi)*Se,te.tint.lerp(K.set(...ht.tint).lerp(q.tint,He),Se),n.fog.color.copy(te.fog),o.color.copy(te.sky),o.groundColor.copy(te.ground),o.intensity=te.hemi,E.uniforms.uTint.value.copy(te.tint)}const j=new k,Ee=new k,Ye=new k,Fe=new ct,Xe=new k,at=new br,ye=new ct;function P(Te){return!L.mirror||Te.x>2.1||Math.abs(Te.z-l)>13||(a.getWorldPosition(Xe),Ee.subVectors(M.center,Xe).dot(M.normal)>0)?!1:(ye.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),at.setFromProjectionMatrix(ye),at.intersectsObject(M.mesh))}const $=[M.mesh,d,p];function le(){Ee.subVectors(M.center,Xe).reflect(M.normal).negate().add(M.center),Fe.extractRotation(a.matrixWorld),Ye.set(0,0,-1).applyMatrix4(Fe).add(Xe),Ye.subVectors(M.center,Ye).reflect(M.normal).negate().add(M.center),C.position.copy(Ee),C.up.set(0,1,0).applyMatrix4(Fe).reflect(M.normal),C.lookAt(Ye),C.near=.1,C.far=60,C.updateMatrixWorld(),C.projectionMatrix.copy(a.projectionMatrix),M.mat.uniforms.uTexM.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(C.projectionMatrix).multiply(C.matrixWorldInverse);const Te=$.map(He=>He.visible);$.forEach(He=>{He.visible=!1}),i.setRenderTarget(b),i.setClearColor(0,1),i.clear(),i.render(n,C),i.setRenderTarget(null),$.forEach((He,Se)=>{He.visible=Te[Se]})}const pe={airlock:!0,corridor:!0,bay:!0,gallery:!0};let be="";function me(Te,He){const Se=Ma(Te.x,Te.z),ht=(He.hatch??1)>.02,D=(He.door??1)>.02,R=(He.seal??0)>.02;pe.airlock=Se==="airlock"||Se==="corridor"&&ht&&Te.z>-18,pe.corridor=Se==="corridor"||Se==="airlock"&&ht||Se==="bay"&&D,pe.bay=Se==="bay"||Se==="gallery"||Se==="corridor"&&D&&Te.z<-10,pe.gallery=Se==="gallery"||Se==="bay"&&R;const w=`${+pe.airlock}${+pe.corridor}${+pe.bay}${+pe.gallery}`;w!==be&&(be=w,c.dirty.fill(!0));const S=N=>{const ee=N.userData.room;ee&&(N.visible=(ee==="hatch"?pe.airlock||pe.corridor:pe[ee])&&N.userData.show!==!1)};n.children.forEach(S),u.group.children.forEach(S),A.children.forEach(S)}const xe={shadows:0,mirror:!1},Re={x:1e9,z:0,yaw:0,pitch:0,hatch:-1},Ze=[];function V(Te,He){const Se=He.t,ht=He.wake||0;i.info.reset(),Nn(a,Te.x,Te.y,Te.z,Te.yaw,Te.pitch),He.roll&&a.rotateZ(He.roll),a.updateMatrixWorld(),u.dynamic.hatch.set(He.hatch??1),eo.uWake.value=ht,eo.uTime.value=Se,li.uTime.value=Se,li.uPx.value=i.getDrawingBufferSize(j).y,E.uniforms.uTime.value=Se,E.uniforms.uWake.value=ht,E.uniforms.uHurt.value=He.hurt||0,E.uniforms.uFade.value=He.fade??1,Me(Ma(Te.x,Te.z),ht,t?1:.06),(Math.abs(Te.x-Re.x)+Math.abs(Te.z-Re.z)>.02||Math.abs(Te.yaw-Re.yaw)+Math.abs(Te.pitch-Re.pitch)>.01)&&(c.touch(Te.x,Te.z),Object.assign(Re,{x:Te.x,z:Te.z,yaw:Te.yaw,pitch:Te.pitch}));const D=He.hatch??1;D!==Re.hatch&&(c.touch(0,0),Re.hatch=D),me(Te,He),Y.copy(ie).lerp(ve,.5+.5*Math.sin(Se*.37));for(const R of Ze)R(Se,Te,He);xe.shadows=c.update(Te.x,Te.z,Se,He.lightsDown??ht,Y),u.mats.glowBeacon.color.set(He.beaconColor??16763e3).multiplyScalar(7*u.dynamic.beaconPulse(Se)*(He.beacon??1)*(1-.85*ht)),T.update(Se,Te,He),d.visible=L.sunSteps>0&&Ma(Te.x,Te.z)==="corridor",xe.mirror=P(Te),M.mesh.visible=xe.mirror||!L.mirror&&Te.x<2.1&&Math.abs(Te.z-l)<13,xe.mirror&&le(),E.render()}function lt(){const Te=i.info;return{calls:Te.render.calls,triangles:Te.render.triangles,points:Te.render.points,lines:Te.render.lines,geometries:Te.memory.geometries,textures:Te.memory.textures,programs:(Te.programs||[]).length}}return{scene:n,camera:a,pool:c,level:u,fx:f,harma:T,post:E,glass:M,sunVol:d,sky:p,ovr:z,stat:xe,hooks:Ze,prepassScene:A,depthMat:g,applyTier:W,applyScale:B,render:V,info:lt,tier:()=>F,cfg:()=>L}}const Et=k,l0=ct,ui=i=>new Oe(i),ps=(i,e,t)=>ui(i).lerp(ui(e),t),Qn=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),Dc=(i,e,t)=>{const n=Qn((t-i)/(e-i));return n*n*(3-2*n)},yt={orange:ui(ke.flame).multiply(new Oe(.92,.42,.16)),orangeDark:ui(ke.flame).multiply(new Oe(.55,.22,.09)),steel:ps(ke.cardBg,16777215,.3),steelDark:ps(ke.cardBg,16777215,.1),bare:ps(ke.cardBg,16777215,.55),rubber:ui(ke.cardBg).multiplyScalar(.45),brass:ps(ke.gold,ke.cardBg,.45)},Ii={seam:0,eye:1,tip:2,spark:3};function mt(i=0,e=0,t=0,n=0,s=0,r=0,o=1,a,c){return a=a??o,c=c??o,new l0().compose(new Et(i,e,t),new Qt().setFromEuler(new Fn(n,s,r)),new Et(o,a,c))}const gi=(i,e,t)=>new It(i,e,t),An=(i,e,t,n=10,s=!1)=>new Vt(i,e,t,n,1,s),Rn=Math.PI/2;class Lc{constructor(e){this.b={body:[],glow:[]},this.seed=e}add(e,t,n,s,r=0,o=0){const a=t.index?t.toNonIndexed():t.clone();for(const p of Object.keys(a.attributes))p!=="position"&&p!=="normal"&&a.deleteAttribute(p);a.attributes.normal||a.computeVertexNormals(),s&&a.applyMatrix4(s);const c=a.attributes.position.count,u=new Float32Array(c*3),f=new Float32Array(c*2);if(a.setAttribute("uv",new sn(f,2)),e==="body"){const p=sf(a),v=new Oe,_=n||yt.steel;for(let h=0;h<c;h++)v.copy(_),p[h]>0?v.lerp(yt.bare,.3*Dc(.25,.7,p[h])):v.multiplyScalar(1-.5*Dc(.1,.5,-p[h])),u[3*h]=v.r,u[3*h+1]=v.g,u[3*h+2]=v.b;r0(a,.21,this.seed%7*.137,this.seed%5*.211)}else{u.fill(1);for(let p=0;p<c;p++)f[2*p]=(o+.5)/4,f[2*p+1]=.5}a.setAttribute("color",new sn(u,3));const d=new Uint16Array(c*4),l=new Float32Array(c*4);for(let p=0;p<c;p++)d[4*p]=r,l[4*p]=1;a.setAttribute("skinIndex",new sn(d,4)),a.setAttribute("skinWeight",new sn(l,4)),a.userData.bone=r,this.b[e].push(a)}glow(e,t,n,s=0){this.add("glow",e,null,n,s,t)}}const c0=[{at:[.125,.1,-.205],yaw:.6435,fwd:1},{at:[-.125,.1,-.205],yaw:Math.PI-.6435,fwd:-1},{at:[0,.1,.25],yaw:-Math.PI/2,fwd:0}],oi=[.13,.1,0],Vn=[.14,-.16,0],Ea=[0,.04,-.2],Os=[0,.09,.07];function bf(){const i=(n,s,r)=>{const o=new wh;return o.name=n,o.position.set(s[0],s[1],s[2]),r&&r.add(o),o},e=i("skoba-body",[0,0,0]),t=[e,i("skoba-sting",Ea,e),i("skoba-spool",Os,e),i("skoba-spark",[0,.1,-.12],e)];return c0.forEach((n,s)=>{const r=i("skoba-hip"+s,n.at,e);r.rotation.order="YZX",r.rotation.y=n.yaw,t.push(r,i("skoba-knee"+s,oi,r))}),e.updateMatrixWorld(!0),t}function Sf(i,e,t){const n=Qn(t.walk??0),s=Qn(t.attack??0),r=Qn(t.hurt??0),o=Qn(t.dead??0),a=1-o,c=i[0],u=i[1],f=i[2],d=i[3],l=r*a*.006;c.position.set(l*Math.sin(e*61),-.052*o+l*Math.sin(e*47+1)+.002*n*a*Math.sin(e*18),l*Math.sin(e*53+2)),c.rotation.set(.03*r*a*Math.sin(e*43),0,.012*n*a*Math.sin(e*9)+.04*r*a*Math.sin(e*39)),u.position.set(Ea[0],Ea[1],Ea[2]-.17*s*a*(1+.06*Math.sin(e*50))+.03*o),f.rotation.x=e*2.5*n*a;const p=r*a;d.scale.setScalar(p>.02?1+1.5*p*(.5+.5*Math.sin(e*71)):0),d.rotation.set(e*23,e*31,e*17),c0.forEach((v,_)=>{const h=i[4+_*2],m=i[5+_*2],x=e*9+_*Math.PI*2/3,b=Math.sin(x),M=Math.max(0,Math.cos(x));let C=v.yaw+v.fwd*.34*n*b+(v.fwd===0?.22*n*b:0),A=.3*n*M+(_<2?.22*s:-.06*s),g=-.22*n*M+(v.fwd===0?.16*n*b:0);A=A*a+1.72*o,g=g*a-2.2*o,C=C*a+(v.yaw+(_-1)*.12)*o,h.rotation.set(0,C,A),m.rotation.z=g})}function i_(i){const e=new vs;return e.moveTo(-.15,-.275),e.lineTo(-.085,-.275),e.lineTo(-.085,.1),e.lineTo(-.06,.125),e.lineTo(.06,.125),e.lineTo(.085,.1),i?(e.lineTo(.085,-.04),e.lineTo(.1,-.075),e.lineTo(.117,-.03),e.lineTo(.133,-.085),e.lineTo(.15,-.045)):(e.lineTo(.085,-.275),e.lineTo(.15,-.275)),e.lineTo(.15,.2),e.lineTo(.1,.275),e.lineTo(-.1,.275),e.lineTo(-.15,.2),e.closePath(),e}function wf(i){const e=new Rr(i,{depth:.024,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:1,steps:1,curveSegments:1});return e.rotateX(-Rn),e.translate(0,.064,0),e}function Ef(i,e){i.add("body",wf(i_(e)),yt.orange);for(const t of e?[-1]:[-1,1])i.add("body",gi(.02,.008,.27),yt.orangeDark,mt(t*.1175,.096,.07)),i.add("body",new xs(.03,.062,4),yt.steel,mt(t*.1175,.034,.258,Math.PI,Math.PI/4,0,1,1,.55)),i.glow(gi(.005,.004,.25),Ii.seam,mt(t*.14,.094,.07));i.add("body",gi(.2,.008,.02),yt.orangeDark,mt(0,.096,-.15)),i.glow(gi(.16,.004,.005),Ii.seam,mt(0,.094,-.128));for(const[t,n]of[[-.12,-.24],[.12,-.24],[-.07,-.118],[.07,-.118],[-.118,-.09],[.118,-.09]])i.add("body",An(.007,.007,.006,6),yt.steel,mt(t,.095,n));i.add("body",gi(.05,.003,.026),yt.steelDark,mt(-.085,.0935,-.2));for(let t=0;t<3;t++)i.add("body",gi(.006,.003,.018),yt.brass,mt(-.099+t*.014,.095,-.2));i.add("body",An(.04,.043,.07,14),yt.steel,mt(0,.128,-.222,Rn,0,0)),i.add("body",new Qi(.035,.007,5,14),yt.brass,mt(0,.128,-.258)),i.glow(new jn(.031,12,5,0,Math.PI*2,0,Math.PI/2),Ii.eye,mt(0,.128,-.252,-Rn,0,0,1,.55,1)),i.add("body",gi(.104,.006,.085),yt.orange,mt(0,.174,-.222,.1,0,0));for(const t of[-1,1])i.add("body",gi(.006,.05,.06),yt.orange,mt(t*.049,.15,-.215));i.add("body",An(.021,.021,.16,8),yt.steelDark,mt(0,.04,-.2,Rn,0,0)),i.add("body",An(.025,.025,.014,8),yt.brass,mt(0,.04,-.276,Rn,0,0)),i.add("body",An(.011,.011,.2,8),yt.steel,mt(0,.04,-.2,Rn,0,0),1),i.add("body",An(.004,.0125,.06,8),yt.brass,mt(0,.04,-.33,-Rn,0,0),1),i.add("body",An(.015,.015,.008,8),yt.steelDark,mt(0,.04,-.298,Rn,0,0),1),i.glow(new ms(.0075),Ii.tip,mt(0,.04,-.362,0,0,0,.8,.8,1.8),1),i.add("body",new Er(new Gs([new Et(.02,.045,-.13),new Et(.05,.03,-.1),new Et(.06,.05,-.05),new Et(.04,.066,-.02)]),8,.005,5),yt.rubber),e||Tf(i,null,2),i.add("body",An(.008,.008,.2,6),yt.steel,mt(Os[0],Os[1],Os[2],0,0,Rn)),e||i.add("body",new Er(new Gs([new Et(0,.05,.11),new Et(.012,.02,.2),new Et(.04,.008,.33),new Et(.015,.008,.46),new Et(.03,.008,.56)]),12,.0075,5),yt.rubber),i.add("body",An(.011,.011,.25,6),yt.steel,mt(0,.082,.25,0,0,Rn)),i.add("body",gi(.06,.034,.05),yt.orange,mt(0,.083,.25));for(let t=0;t<6;t++){const n=t*2.4,s=.06+.03*(t%3);i.glow(new e0(.012),Ii.spark,mt(Math.cos(n)*s,.02*(t%2?1:-1),Math.sin(n)*s,n,n*1.7,0,.5,2.6,.5),3)}c0.forEach((t,n)=>{const s=4+n*2,r=5+n*2,o=mt(t.at[0],t.at[1],t.at[2],0,t.yaw,0),a=o.clone().multiply(mt(oi[0],oi[1],oi[2])),c=Math.atan2(oi[1],oi[0]),u=Math.hypot(oi[0],oi[1]),f=Math.atan2(Vn[1],Vn[0]),d=Math.hypot(Vn[0],Vn[1]);i.add("body",An(.03,.034,.036,10),yt.steel,o.clone().multiply(mt(0,.004,0)),s);for(const l of[-1,1])i.add("body",gi(u,.03,.006),yt.orange,o.clone().multiply(mt(oi[0]/2,oi[1]/2,l*.015,0,0,c)),s);i.add("body",gi(u*.55,.012,.024),yt.steelDark,o.clone().multiply(mt(oi[0]/2,oi[1]/2,0,0,0,c)),s),i.add("body",An(.022,.022,.046,10),yt.steel,a.clone().multiply(mt(0,0,0,Rn,0,0)),s),i.add("body",An(.008,.008,.052,6),yt.brass,a.clone().multiply(mt(0,0,0,Rn,0,0)),s),i.add("body",An(.011,.015,d,6),yt.orange,a.clone().multiply(mt(Vn[0]/2,Vn[1]/2,0,0,0,f+Rn,1,1,.85)),r),i.add("body",new xs(.011,.06,4),yt.steel,a.clone().multiply(mt(Vn[0]-.034,Vn[1]-.004,0,0,0,Math.PI-.75)),r),i.add("body",new jn(.016,8,5),yt.steel,a.clone().multiply(mt(Vn[0],Vn[1],0)),r),i.add("body",An(.03,.038,.024,12),yt.steelDark,a.clone().multiply(mt(Vn[0],Vn[1]-.026,0)),r),i.glow(An(.0395,.0395,.006,12,!0),Ii.seam,a.clone().multiply(mt(Vn[0],Vn[1]-.031,0)),r)})}function Tf(i,e,t){const n=[[.012,-.07],[.068,-.07],[.068,-.062],[.05,-.058]];for(let a=0;a<6;a++){const c=-.05+a*.02;n.push([.056,c-.006],[.056,c+.004],[.05,c+.008])}n.push([.068,.062],[.068,.07],[.012,.07]);const s=new Oa(n.map(([a,c])=>new ze(a,c)),12),r=mt(Os[0],Os[1],Os[2],0,0,Rn),o=e?e.clone().multiply(mt(0,0,0,0,0,Rn)):r;i.add("body",s,yt.rubber,o,t);for(const a of[-1,1])i.add("body",An(.07,.07,.006,12),yt.steel,o.clone().multiply(mt(0,a*.068,0)),t)}function s_(){const i=new Ms(new Uint8Array(16),4,1,Pn);return i.colorSpace=nn,i.magFilter=i.minFilter=un,i.generateMipmaps=!1,i.needsUpdate=!0,i}const Af=3;function Rf(){const i=s_();return{body:ao(new Ri({name:"skoba-body",vertexColors:!0,roughness:1,metalness:.85,emissive:0}),"metal",yt.bare),glow:new Ri({name:"skoba-glow",color:725012,emissiveMap:i,emissive:16777215,emissiveIntensity:Af,roughness:.25,metalness:0})}}const ha=new Oe;function fa(i,e,t,n){ha.copy(t).multiplyScalar(n/Af).convertLinearToSRGB();const s=i.image.data,r=e*4,o=Math.round(Qn(ha.r)*255),a=Math.round(Qn(ha.g)*255),c=Math.round(Qn(ha.b)*255);(s[r]!==o||s[r+1]!==a||s[r+2]!==c)&&(s[r]=o,s[r+1]=a,s[r+2]=c,s[r+3]=255,i.needsUpdate=!0)}function Cf(i){let e=0,t=0;return i.traverse(n=>{n.isMesh&&(e++,t+=n.geometry.attributes.position.count/3)}),{draws:e,tris:Math.round(t)}}function r_({seed:i=1}={}){const e=new zt;e.name="skoba";const t=bf(),n=new Zc(t),s=Rf(),r=new Lc(i);Ef(r,!1),e.add(t[0]);for(const h of["body","glow"]){const m=new Hd(bs(r.b[h],!1),s[h]);m.name="skoba:"+h,m.boundingSphere=new Oi(new Et(0,.1,.05),.75),m.geometry.boundingSphere=m.boundingSphere.clone(),e.add(m),m.bind(n,new l0)}const o=ps(ke.flame,ke.gold,.5),a=ui(ke.turquoise),c=ui(ke.neonViolet),u=ui(16718346),f=ps(ke.flame,16777215,.5),d=ui(16777215),l=new Oe,p=ps(ke.flame,16777215,.4),v=s.glow.emissiveMap;function _(h,m={}){const x=Qn(m.wake??0),b=Qn(m.attack??0),M=Qn(m.hurt??0),C=Qn(m.dead??0),A=1-C;Sf(t,h,m);const g=Dc(0,.18,x),y=M>0?.55+.45*Math.sin(h*67):1;l.copy(a).lerp(c,x),fa(v,Ii.seam,l,A*g*(.5+.55*x+.08*Math.sin(h*3.1))+M*A*.5),l.copy(o).lerp(a,g).lerp(c,x).lerp(u,b),fa(v,Ii.eye,l,A*y*(.62+.3*g+.75*b+.05*Math.sin(h*2.3))),l.copy(u).lerp(f,b),fa(v,Ii.tip,l,A*(.1+2.2*b*(.8+.2*Math.sin(h*41)))),fa(v,Ii.spark,l.copy(f).lerp(d,.5),M*A*2.6),s.body.emissive.copy(p),s.body.emissiveIntensity=M*A*(.1+.08*Math.sin(h*59))}return _(0,{}),{group:e,update:_,materials:s,bones:t,counts:Cf(e)}}const Vu=[.0052,.003,.0016],o_=[.02,.012,.0075],Dl=4900;function a_(i){const e=ki(i*7919+17),t=[];let n=0,s=0;const r=new Et,o=new Et,a=new Et,c=new Et,u=new l0,f=new Et,d=(b,M,C)=>{r.subVectors(M,b).normalize(),o.set(.31,.87,.38).cross(r).normalize(),a.crossVectors(r,o);const A=(g,y,T)=>{const E=y*Math.PI*2/3;return T.copy(g).addScaledVector(o,Math.cos(E)*C).addScaledVector(a,Math.sin(E)*C)};for(let g=0;g<3;g++){const y=A(b,g,new Et),T=A(b,g+1,new Et),E=A(M,g,new Et),z=A(M,g+1,new Et);t.push(y.x,y.y,y.z,T.x,T.y,T.z,E.x,E.y,E.z,T.x,T.y,T.z,z.x,z.y,z.z,E.x,E.y,E.z)}n+=6},l=(b,M,C)=>{const A=new Qi(o_[C],Vu[C]*.9,3,6).toNonIndexed();u.lookAt(f.set(0,0,0),M,Math.abs(M.y)>.9?new Et(1,0,0):new Et(0,1,0)),u.setPosition(b),A.applyMatrix4(u),t.push(...A.attributes.position.array),n+=A.attributes.position.count/3};function p(b,M,C,A,g,y,T,E,z,L,F){if(n>s||E<=0||y>2)return;const U=g*Math.PI/3,G=A.clone().addScaledVector(M,Math.cos(U)*T).addScaledVector(C,Math.sin(U)*T);if(G.y<.002||Math.hypot(G.x-b.x,G.z-b.z)>F||G.y>.78)return;d(A,G,Vu[y]);const W=c.crossVectors(M,C).normalize().clone();(y===0||e()<(y===1?.55:.2))&&l(G,W,y),e()<[.93,.8,.6][y]&&p(b,M,C,G,g,y,T*(.86+.1*e()),E-1,z,L,F);for(const B of[-1,1]){const oe=g+B;oe<z||oe>L||e()<[.8,.62,0][y]&&p(b,M,C,G,oe,y+1,T*(.5+.15*e()),y===0?4:3,z,L,F)}}const v=new Et(0,1,0),_=new Et(0,.004,0),h=new Et(1,0,0),m=new Et(0,0,1);for(let b=0;b<6;b++)s=Math.min(Dl,n+(b%2?250:520)),p(_,h,m,_.clone().add(new Et((e()-.5)*.1,0,(e()-.5)*.1)),b,0,b%2?.085:.125,b%2?4:6,-99,99,b%2?.5:.78);for(let b=0;b<3;b++){const M=.4+b*Math.PI/3,C=new Et(Math.cos(M),0,Math.sin(M)),A=new Et((e()-.5)*.12,.004,(e()-.5)*.12);s=Math.min(Dl,n+440),p(A,C,v,A.clone(),1,0,.12,6,0,3,.5),s=Math.min(Dl,n+380),p(A,C,v,A.clone().addScaledVector(C,.05),2,0,.105,5,0,3,.5)}const x=new Ft;return x.setAttribute("position",new ot(t,3)),x.computeVertexNormals(),x}function l_({seed:i=3}={}){const e=new zt;e.name="skoba-dead";const t=bf(),n=t.map(m=>m.matrixWorld.clone().invert());Sf(t,0,{dead:1}),t[0].position.set(0,0,0),t[0].updateMatrixWorld(!0);const s=new Lc(i);Ef(s,!0);const r=mt(.02,0,.03,.12,.55,1.32),o={};for(const m of["body","glow"]){for(const x of s.b[m]){const b=x.userData.bone;x.applyMatrix4(r.clone().multiply(t[b].matrixWorld).multiply(n[b])),x.deleteAttribute("skinIndex"),x.deleteAttribute("skinWeight")}o[m]=s.b[m]}let a=1/0;for(const m of o.body)m.computeBoundingBox(),a=Math.min(a,m.boundingBox.min.y);for(const m of["body","glow"])for(const x of o[m])x.translate(0,-a,0);const c=new Lc(i),u=new vs;u.moveTo(.085,-.275),u.lineTo(.15,-.275),u.lineTo(.15,-.06),u.lineTo(.133,-.1),u.lineTo(.117,-.045),u.lineTo(.1,-.09),u.lineTo(.085,-.055),u.closePath();const f=wf(u);f.translate(-.1175,-.064,-.16),c.add("body",f,yt.orange,mt(.36,.006,.12,.04,2.2,.03)),c.add("body",new xs(.03,.062,4),yt.steel,mt(.46,.012,.03,Rn,.4,0,1,1,.55)),Tf(c,mt(-.3,.07,.3,0,.5,0),0),c.add("body",new Er(new Gs([new Et(-.3,.02,.26),new Et(-.2,.008,.2),new Et(-.12,.008,.26),new Et(-.02,.01,.16),new Et(.03,.03,.08)]),14,.0075,5),yt.rubber);for(const m of c.b.body)m.deleteAttribute("skinIndex"),m.deleteAttribute("skinWeight"),o.body.push(m);const d=Rf();d.body.color.setScalar(.62),d.uzor=new Ri({name:"skoba-uzor",color:ps(16777215,ke.turquoise,.45).multiplyScalar(.72),roughness:.22,metalness:.15,flatShading:!0,emissive:ui(ke.turquoise),emissiveIntensity:.07});for(const m of["body","glow"]){const x=new $e(bs(o[m],!1),d[m]);x.name="skoba-dead:"+m,e.add(x)}const l=new $e(a_(i),d.uzor);l.name="skoba-dead:uzor",e.add(l);const p=ui(ke.turquoise),v=ui(ke.neonViolet),_=d.uzor.color.clone();function h(m){m=Qn(m),d.uzor.emissive.copy(p).lerp(v,m),d.uzor.emissiveIntensity=.07+.85*m,d.uzor.color.copy(_).multiplyScalar(1-.6*m)}return h(0),{group:e,materials:d,setWake:h,counts:Cf(e)}}function c_(i){const e=ki(i*977+5),t=new zt,n=(De.z0+De.z1)/2;t.position.copy(an(De.x1+.5,1.7,n)),ji(n,t.quaternion);const s={value:0},r={value:0},o=new $e(new Fa(900,5),new On({side:bn,fog:!1,uniforms:{uGlow:s,uTime:r,uA:{value:new Oe(ke.turquoise)},uB:{value:new Oe(ke.neonViolet)}},vertexShader:"varying vec3 vP; void main() { vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));o.position.set(560,0,0),t.add(o);const a=[],c=[],u=[],f=[],d=new Oe(ke.turquoise),l=new Oe(ke.neonViolet),p=new Oe,v=(C,A)=>{const g=Math.sin(C*127.1+A*311.7)*43758.5453;return g-Math.floor(g)};function _(C,A,g,y,T,E=0){for(let z=0;z<3;z++){const L=z*2.0943951,F=Math.cos(L),U=Math.sin(L),G=-U,W=F,B=Math.ceil(A/C);for(let oe=-B;oe<=B;oe++)for(let q=-B*2;q<=B*2;q++){if(v((oe%3+3)%3+z*3,(q%3+3)%3)>y)continue;const te=(q+.5*oe)/.8660254,se=(q+1+.5*oe)/.8660254,_e=(F*oe+G*te)*C,K=(U*oe+W*te)*C,Y=(F*oe+G*se)*C,ie=(U*oe+W*se)*C,ve=Math.hypot((_e+Y)/2,(K+ie)/2);if(!(ve>A*(.75+.25*v(oe*.37+z,q*.11))))if(p.copy(d).lerp(l,Math.min(1,ve/A+.2*e())).multiplyScalar(T*(1.3-.6*ve/A)),E){const Me=-(ie-K),j=Y-_e,Ee=Math.hypot(Me,j)||1,Ye=Me/Ee*E/2,Fe=j/Ee*E/2;u.push(g,K+Fe,_e+Ye,g,K-Fe,_e-Ye,g,ie+Fe,Y+Ye,g,ie+Fe,Y+Ye,g,K-Fe,_e-Ye,g,ie-Fe,Y-Ye);for(let Xe=0;Xe<6;Xe++)f.push(p.r,p.g,p.b)}else a.push(g,K,_e,g,ie,Y),c.push(p.r,p.g,p.b,p.r,p.g,p.b)}}}_(150,520,0,.62,2.2,5.5),_(50,400,-170,.5,1.4,1.5),_(16.67,210,-320,.42,.9);for(let C=-4;C<=4;C++)for(let A=-4;A<=4;A++){const g=(C+A*.5)*150,y=A*.8660254*150,T=Math.hypot(g,y);if(!(T>470||v(C*3.1,A*1.7)<.3)){p.copy(d).lerp(l,T/520).multiplyScalar(3.2);for(let E=0;E<18;E++){const z=E/18*6.2832,L=(E+1)/18*6.2832,F=15,U=20,G=(W,B)=>[3,y+Math.sin(W)*B,g+Math.cos(W)*B];u.push(...G(z,F),...G(z,U),...G(L,F),...G(L,F),...G(z,U),...G(L,U));for(let W=0;W<6;W++)f.push(p.r,p.g,p.b)}}}const h=new Ft;h.setAttribute("position",new ot(u,3)),h.setAttribute("color",new ot(f,3));const m=new $e(h,new Ai({vertexColors:!0,toneMapped:!1,fog:!1,transparent:!0,blending:Ti,depthWrite:!1,side:Mi})),x=new Ft;x.setAttribute("position",new ot(a,3)),x.setAttribute("color",new ot(c,3));const b=new $d(x,new Th({vertexColors:!0,toneMapped:!1,fog:!1,transparent:!0,blending:Ti,depthWrite:!1})),M=new zt;M.add(b,m),M.position.set(820,40,0),t.add(M);for(const C of[o,b,m])C.frustumCulled=!1;return{group:t,segments:a.length/6,update(C,A,g){r.value=C,s.value=g;const y=A*A*(3-2*A);M.rotation.y=.5+(1-y)*1.02+.04*Math.sin(C*.13),M.rotation.x=.16+.05*Math.sin(C*.09),M.rotation.z=C*.004,b.material.opacity=.35+.65*g,m.material.opacity=(.3+.7*g)*(.85+.15*Math.sin(C*.9))}}}const to=[[0,0]];for(let i=0;i<6;i++)to.push([Math.cos(Math.PI/2+i*Math.PI/3),-Math.sin(Math.PI/2+i*Math.PI/3)]);const u0=[{seg:[[1,3],[3,5],[5,1]],ring:0},{seg:[[0,1],[0,3],[0,5]],ring:1},{seg:[[2,4],[4,6],[6,2],[0,4]],ring:0},{seg:[[1,2],[2,3],[0,5],[0,6]],ring:0},{seg:[[1,4],[2,5],[3,6]],ring:0},{seg:[[1,2],[3,4],[5,6],[0,1]],ring:1}];function Ic(i,e,t,n,s,r,o=0){const a=u0[e];i.save(),i.strokeStyle=r,i.lineCap="round",i.lineJoin="round",i.lineWidth=o||Math.max(2,s*.13),i.beginPath();for(const[c,u]of a.seg)i.moveTo(t+to[c][0]*s,n+to[c][1]*s),i.lineTo(t+to[u][0]*s,n+to[u][1]*s);i.stroke(),a.ring&&(i.beginPath(),i.arc(t,n,s*.26,0,Math.PI*2),i.stroke()),i.restore()}const $i=Math.PI/2,zc={orange:16747050,teal:3528392,red:16726570},xi=(i,e=.6,t=.3)=>new Ri({color:i,roughness:e,metalness:t}),ls=(i,e=1)=>{const t=new Ai({color:new Oe(i).multiplyScalar(e),toneMapped:!1});return t.userData.base=new Oe(i),t},lr=(i,e,t)=>{t!==void 0&&i.userData.base.set(t),i.color.copy(i.userData.base).multiplyScalar(e)},Hu=new ct,Wu=new k,$r=new k,Zr=new k,u_=new Qt;function Xu(i,e,t,n,s,r){an(e,t,n,i.position),$r.set(...s).normalize(),Zr.set(...r),Zr.addScaledVector($r,-Zr.dot($r)).normalize(),Wu.crossVectors($r,Zr).negate(),Hu.makeBasis(Wu,$r,Zr.clone().negate()),ji(n,i.quaternion).multiply(u_.setFromRotationMatrix(Hu))}function h_(i){const e=new Map;for(const t of i.children.slice()){if(!t.isMesh||t.children.length)continue;t.updateMatrix();const n=t.geometry.index?t.geometry.toNonIndexed():t.geometry.clone();for(const s of Object.keys(n.attributes))["position","normal","uv"].includes(s)||n.deleteAttribute(s);n.applyMatrix4(t.matrix),e.has(t.material)||e.set(t.material,[]),e.get(t.material).push(n),i.remove(t)}for(const[t,n]of e)i.add(new $e(n.length>1?bs(n,!1):n[0],t));return i}function Zi(i,e=!0){return i.isGroup&&h_(i),i.traverse(t=>{t.isMesh&&(t.castShadow=e,t.receiveShadow=!0)}),i}function f_(i,e){const{scene:t,level:n}=i,s=new Set(t.children),r={steel:xi(8752018,.5,.8),dark:xi(2500909,.7,.5),yellow:xi(13214247,.6,.1),orange:xi(13132830,.6,.1),teal:xi(3112838,.6,.1),red:xi(9316898,.55,.15),white:xi(13618629,.6,.1),copper:xi(13662538,.4,.9)},o={M:r};{const c=new zt;c.add(new $e(new Qi(.2,.024,10,36),r.red));for(let f=0;f<3;f++){const d=new $e(new Vt(.015,.015,.2,8),r.red),l=$i+f*2.0944;d.position.set(Math.cos(l)*.1,Math.sin(l)*.1,0),d.rotation.z=l-$i,c.add(d)}const u=new $e(new Vt(.034,.04,.05,12),r.dark);u.rotation.x=$i,c.add(u),c.position.set(Kt.w/2,1.1,.17),n.dynamic.hatch.group.add(Zi(c,!1)),o.wheel={group:c,set(f){c.rotation.z=f}}}{const c=(st.z0+st.z1)/2,u=st.z1-st.z0,f=new zt;f.add(new $e(new It(.1,st.h,u),r.dark));const d=new $e(new It(.104,.3,u-.3),r.yellow);d.position.y=-.1,f.add(d);const l=new $e(new It(.12,st.h-.2,.08),r.steel);f.add(l);const p=ls(16722458,3),v=new $e(new It(.04,.05,.9),p);Nn(v,ae.x1-.1,st.h+.33,c),t.add(Zi(f),v),o.bayDoor={set(_,h){Nn(f,ae.x1+.2,st.h/2+_*(st.h-.25),c),lr(p,3,h?3530858:16722458)}},o.bayDoor.set(0,!1)}const a=ls(16722458,2.5);{const c=Je.socket,u=new $e(new It(.02,.05,.3),a);Nn(u,ae.x1-.205,c.y+.16,c.z),t.add(u),o.socket={set(f){lr(a,f?3:2.5,f?3530858:16722458)}}}{const c=new zt,u=new Ga(.36,.2,.2,2,.018),f=u.index?u.toNonIndexed():u;r0(f),c.add(new $e(f,ao(xi(13214247,.6,.1),"paint",7370108)));for(const h of[-.06,0,.06]){const m=new $e(new It(.012,.13,.208),r.dark);m.position.set(h,-.025,0),c.add(m)}const d=new $e(new Qi(.055,.009,6,12,Math.PI),r.steel);d.position.y=.1,c.add(d);const l=new $e(new It(.05,.22,.22),r.dark);l.position.x=-.16,c.add(l);const p=l.clone();p.position.x=.16,c.add(p);for(const h of[-.1,.1]){const m=new $e(new Vt(.02,.02,.05,8),r.copper);m.position.set(h,.12,0),c.add(m)}const v=ls(ke.turquoise,1.1),_=new $e(new It(.2,.03,.204),v);_.position.y=.03,c.add(_),t.add(Zi(c)),o.battery={group:c,r:.2,half:.1}}{const c=Je.cabinet,u=document.createElement("canvas");u.width=256,u.height=256;const f=u.getContext("2d");f.fillStyle="#c9a227",f.fillRect(0,0,256,256),f.fillStyle="#16171a";for(let _=-256;_<512;_+=64)f.beginPath(),f.moveTo(_,256),f.lineTo(_+32,256),f.lineTo(_+288,0),f.lineTo(_+256,0),f.fill();f.strokeStyle="#16171a",f.lineWidth=14,f.strokeRect(7,7,242,242);const d=new Fs(u);d.colorSpace=nn;const l=new $e(new It(.03,.94,.78),new Ri({map:d,roughness:.6,metalness:.2})),p=ls(16756832,0),v=new $e(new It(.034,.03,.78),p);t.add(Zi(l),v),o.cover={mesh:l,set(_,h){const m=h*h;Nn(l,ae.x0+.36+m*.5,c.y-m*(c.y-.03),c.z),l.rotateZ(-m*$i),Nn(v,ae.x0+.362,c.y+.44-.88*Math.min(1,_),c.z),lr(p,_>0&&h<=0?4:0),v.userData.show=v.visible=_>0&&h<=0}},o.cover.set(0,0)}{const c=new zt,u=new $e(new It(.12,.1,.3),xi(11105340,.6,.7));c.add(u);const f=new $e(new Vt(.02,.02,.14,8),r.dark);f.position.set(0,-.08,.08),c.add(f);const d=ls(ke.turquoise,3),l=new $e(new Qi(.05,.012,8,20),d);l.position.z=-.17,c.add(l);for(let p=0;p<3;p++){const v=new $e(new It(.02,.02,.09),r.steel),_=$i+p*2.0944;v.position.set(Math.cos(_)*.05,Math.sin(_)*.05,-.2),c.add(v)}Nn(c,Je.tool.x,Je.tool.y,Je.tool.z,.9),c.rotateZ($i),t.add(Zi(c,!1)),o.toolPickup={group:c,glow:d,show(p){c.userData.show=p,c.visible=p}}}o.logs=[...Je.logs,{key:"log.bay",...Je.bayLog}].map((c,u)=>{const f=new zt;f.add(new $e(new It(.2,.06,.13),r.dark));for(const p of[-.045,.045]){const v=new $e(new Vt(.028,.028,.012,14),r.steel);v.position.set(p,.034,0),f.add(v)}const d=ls(ke.turquoise,3),l=new $e(new jn(.012,8,6),d);return l.position.set(.085,.036,.045),f.add(l),Nn(f,c.x,c.y,c.z,u*1.3+.4),t.add(Zi(f,!1)),{...c,group:f,led:d}}),o.levers=Je.levers.map(c=>{const u=new zt,f=new $e(new It(.34,.4,.05),xi(zc[c.color],.55,.1));u.add(f);const d=new zt;d.position.set(0,-.02,.04);const l=new $e(new It(.045,.26,.045),r.steel);l.position.y=.13,d.add(l);const p=new $e(new jn(.045,12,8),r.dark);p.position.y=.27,d.add(p),u.add(d);const v=ls(zc[c.color],3),_=new $e(new It(.26,.035,.02),v);return _.position.set(0,-.16,.03),u.add(_),Nn(u,c.x,c.y,c.z,Math.atan2(c.face[0],c.face[1])),t.add(Zi(u,!1)),{...c,group:u,set(h){d.rotation.x=h?2.2:.5,lr(v,h?.15:3)}}}),o.levers.forEach(c=>c.set(!1));{const c=(gt.z0+gt.z1)/2,u=(gt.z1-gt.z0)/2,f=[-1,1].map(m=>{const x=new fr;x.box("steelDark",ce.x1+.12,gt.h/2,c+m*u/2,.18,gt.h,u,{bevel:0}),x.box("steel",ce.x1+.02,gt.h/2,c+m*(u-.12),.04,gt.h-.3,.1,{bevel:0});for(const M of[.5,1.3,2.1])x.box("steel",ce.x1+.025,M,c+m*u/2,.03,.06,u-.3,{bevel:0});const b=x.build(n.matsOf.bay);return b.userData.room="bay",t.add(b),b}),d=an(ce.x1,1,c+1).sub(an(ce.x1,1,c)),l=document.createElement("canvas");l.width=1024,l.height=256;const p=new Fs(l);p.colorSpace=nn;const v=new Ai({map:p,transparent:!0,blending:Ti,depthWrite:!1,toneMapped:!1,fog:!1}),_=new $e(new es(1.9,.475),v);Nn(_,ce.x1-.02,1.55,c,-$i);const h=new $e(new es(2.06,.62),new Ai({color:197895}));Nn(h,ce.x1-.012,1.55,c,-$i),t.add(_,h),o.seal={setSigns(m){const x=l.getContext("2d");x.clearRect(0,0,1024,256),m.forEach((b,M)=>{Ic(x,b,128+M*256,128,84,"rgba(255,214,150,0.22)",26),Ic(x,b,128+M*256,128,84,"#fff0cc",10)}),p.needsUpdate=!0},set(m,x,b){f.forEach((M,C)=>M.position.copy(d).multiplyScalar((C?1:-1)*m*1.22)),v.opacity=(1-m)*(.55+.25*Math.sin(x*1.7))*(.6+.9*b),_.userData.show=_.visible=m<.98,h.userData.show=h.visible=m<.05}}}o.crawlers=Je.perches.map((c,u)=>{const f=r_({seed:e*7+u});return t.add(Zi(f.group)),{...f,perch:c}});{const c=l_({seed:e+3});Nn(c.group,Je.deadCrawler.x,0,Je.deadCrawler.z,.7),t.add(c.group),o.dead=c}o.cans=Je.throwables.map(([c,u],f)=>{const d=new zt;d.add(new $e(new Vt(.1,.1,.3,14),f%2?r.teal:r.orange));const l=new $e(new jn(.1,14,8,0,6.3,0,1.6),f%2?r.teal:r.orange);l.position.y=.15,d.add(l);const p=new $e(new Vt(.025,.03,.06,8),r.steel);return p.position.y=.27,d.add(p),t.add(Zi(d)),{group:d,r:.14,half:.15,x0:c,z0:u}});{const c=new Ai({color:16777215,toneMapped:!1,transparent:!0,blending:Ti,depthWrite:!1,fog:!1}),u=new Vt(1,1,1,8,1,!0);u.rotateX(-$i),u.translate(0,0,-.5);const f=new $e(u,c);f.layers.set(1),f.frustumCulled=!1,f.visible=!1,i.harma.muzzle&&i.harma.muzzle.add(f);const d=new Ah({color:new Oe(6,4,2),size:.018,toneMapped:!1,transparent:!0,blending:Ti,depthWrite:!1,fog:!1}),l=28,p=new Float32Array(l*3),v=new Ft;v.setAttribute("position",new sn(p,3));const _=new Jc(v,d);_.frustumCulled=!1,_.visible=!1,t.add(_);const h=new k;o.beam={set(m,x,b){if(f.visible=!!m,!m)return;const M=m==="cut"?.012+.004*Math.sin(b*90):.004;f.scale.set(M,M,x),c.color.set(m==="cut"?16767392:ke.turquoise).multiplyScalar(m==="cut"?9:2.5),c.opacity=m==="cut"?1:.6},sparks(m,x,b){if(_.visible=m,!!m){h.copy(x);for(let M=0;M<l;M++){const C=(b*3.3+M*.618)%1,A=M*2.399,g=M*.37%1;p[M*3]=h.x+Math.cos(A)*C*.25*(.4+g),p[M*3+1]=h.y+(.5*g+.2)*C-1.2*C*C*.4,p[M*3+2]=h.z+Math.sin(A)*C*.25*(.4+g)}v.attributes.position.needsUpdate=!0}}}}{const c=ls(16756832,3),u=new $e(new It(.03,.03,.12),c);Nn(u,Je.terminal.x-.05,Je.terminal.y-.2,Je.terminal.z),t.add(u),o.terminal={set(f,d){lr(c,d?2+2*(Math.sin(f*5)>0?1:0):.4)}}}o.cavern=c_(e),o.cavern.group.userData.room="gallery",t.add(o.cavern.group);for(const c of t.children){if(s.has(c)||c.userData.room||c.position.lengthSq()<1e-6)continue;const u=42-c.position.y;c.userData.room=Ma(c.position.x,Math.atan2(c.position.z,u)*42)}return o.setGlow=lr,o}async function d_({kind:i,signs:e=[],expect:t=[],context:n={}}={}){if(i!=="seal")return{ok:!1,line:"op.seal.no",delayMs:0};const s=e.length===t.length&&e.every((r,o)=>r===t[o]);return{ok:s,line:s?"op.seal.yes":"op.seal.no",delayMs:1600,context:n}}const Hn=(i,e,t)=>Math.max(e,Math.min(t,i)),Ll=2.6,p_=6,cr=.8;function m_(i,e,{seed:t=1,ui:n=null,audio:s=null,exhibit:r=!1}={}){const o=ki(Math.imul(t^1540483477,2654435761)>>>0);for(let P=0;P<5;P++)o();const a=[0,1,2];for(let P=2;P>0;P--){const $=Math.floor(o()*(P+1));[a[P],a[$]]=[a[$],a[P]]}const c=Array.from({length:4},()=>Math.floor(o()*u0.length));e.seal.setSigns(c);const u=s||new Proxy({},{get:()=>()=>0}),f=n||new Proxy({},{get:()=>()=>0}),d=Uv(),l={scene:r?"exhibit":"wheel",t:0,play:0,sceneT:0,times:{},hatch:r?1:0,wheel:0,hasTool:!1,cut:0,coverFall:0,battery:"cabinet",door:r?1:0,powered:r,steps:0,wrongs:0,beacon:1,lightsDown:0,wake:0,wakeTarget:0,bayT:0,cleared:!1,seal:0,sealOpening:!1,asked:!1,waiting:!1,turn:0,galleryT:0,ended:!1,hp:100,hurtT:9,hurt:0,fade:1,dead:0,deaths:0,dashT:0,dashV:[0,0],mode:"grip",heat:0,over:!1,firing:!1,held:null,pull:null,said:{},timers:[],paused:!1,lock:!1,stuckNote:""};let p=Du({hatchOpen:r,bayDoor:r,seal:!1});const v=()=>{p=Du({hatchOpen:l.hatch>.6,bayDoor:l.door>.7,seal:l.seal>.8})},_=(P,$)=>{l.said[P]||(l.said[P]=1,f.say(P,{...$,onStart:(le,pe)=>{$&&$.log?u.logOpen():u.radioSpeak(le,pe)}}))},h=P=>{l.said[P]=0,_(P)},m=(P,$)=>l.timers.push({at:l.t+P,fn:$}),x=P=>{l.times[l.scene]=+(l.play-(l.sceneStart||0)).toFixed(2),l.sceneStart=l.play,l.scene=P,l.sceneT=0},b=Je.cabinet,M={x:ae.x0+.18,y:b.y-.08,z:b.z,vx:0,vy:0,vz:0,r:.2,half:.1,yaw:Math.PI/2,name:"battery",free:!1,rest:!0,prop:e.battery},C=e.cans.map((P,$)=>({x:P.x0,y:P.half,z:P.z0,vx:0,vy:0,vz:0,r:P.r,half:P.half,yaw:$,name:"can"+$,free:!0,prop:P})),A=[M,...C];function g(P,$){if(P===l.held||!P.free||P.rest)return;if(P.vy-=9.8*$,P.x+=P.vx*$,P.y+=P.vy*$,P.z+=P.vz*$,P.y<P.half){P.y=P.half,P.vy<-1.2&&u.crawlerStep(Math.hypot(P.x-d.x,P.z-d.z),0),P.vy=-P.vy*.28;const be=Math.pow(.02,$);P.vx*=be,P.vz*=be,Math.abs(P.vy)<.5&&(P.vy=0)}const le=P.x,pe=P.z;El(P,p,P.r),P.x!==le&&(P.vx*=-.3),P.z!==pe&&(P.vz*=-.3),P.x=Hn(P.x,-1.9,De.x1-.2),P.z=Hn(P.z,ae.z0+.3,6.2)}const y=ce.x0+.5,T=ce.x1-.5,E=ce.z0+.5,z=ce.z1-.5,L=e.crawlers.map((P,$)=>({c:P,i:$,perch:P.perch,hp:100,state:"perch",x:P.perch.x,y:P.perch.y,z:P.perch.z,n:[0,1,0],f:[0,0,-1],st:0,cd:0,hurt:0,attack:0,walk:0,dead:0,path:null,leap:null,retreated:!1,stepT:0}));function F(P){const $=P.perch;P.x=$.x,P.y=$.y,P.z=$.z,P.n=$.s==="ceil"?[0,-1,0]:$.s==="wallE"?[-1,0,0]:[0,0,1],P.f=$.s==="ceil"?[0,0,1]:[0,-1,0]}function U(P){const $=P.perch;$.s==="ceil"?P.path=[{x:$.x,y:ce.h-.06,z:ce.z1-.06,n:[0,-1,0]},{x:$.x,y:.12,z:ce.z1-.06,n:[0,0,-1]}]:P.path=[{x:$.x,y:.12,z:$.z,n:P.n.slice()}],P.state="path",u.crawlerWake()}function G(){for(const P of L)P.dead>=1&&P.hp<=0||(P.hp=100,P.state="perch",P.cd=0,P.attack=0,P.hurt=0,P.retreated=!1,F(P))}L.forEach(F);function W(P,$){if(P.hurt=Math.max(0,P.hurt-$*3),P.cd=Math.max(0,P.cd-$),P.st+=$,P.state==="dead"){P.dead=Math.min(1,P.dead+$*2.5),P.walk=0,P.attack=0,P.y>.1&&(P.y=Math.max(.1,P.y-$*4)),P.n=[0,1,0];return}if(P.state==="perch"){P.walk=0;return}const le=d.x-P.x,pe=d.z-P.z,be=Math.hypot(le,pe);P.stepT-=$;const me=()=>{P.stepT<=0&&(P.stepT=.16,u.crawlerStep(be,Hn(Math.sin(Math.atan2(le,pe)-d.yaw),-1,1)))};if(P.state==="path"||P.state==="climb"){const xe=P.path[0],Re=xe.x-P.x,Ze=xe.y-P.y,V=xe.z-P.z,lt=Math.hypot(Re,Ze,V),Te=2.6*$;P.n=xe.n,P.walk=1,me(),lt<=Te?(P.x=xe.x,P.y=xe.y,P.z=xe.z,P.path.shift(),P.path.length||(P.state==="climb"?(P.state="cling",P.st=0):(P.state="chase",P.n=[0,1,0],P.y=.1))):(P.x+=Re/lt*Te,P.y+=Ze/lt*Te,P.z+=V/lt*Te,P.f=[Re/lt,Ze/lt,V/lt]);return}if(P.state==="cling"){P.walk=0,P.f=[0,-1,0],P.st>1.1&&(P.state="leap",P.st=0,P.leap={x0:P.x,y0:P.y,z0:P.z,x1:Hn(d.x,y,T),z1:Hn(d.z,E,z)},u.crawlerAttack(0));return}if(P.state==="leap"){const xe=Math.min(1,P.st/.75),Re=P.leap;P.x=Re.x0+(Re.x1-Re.x0)*xe,P.z=Re.z0+(Re.z1-Re.z0)*xe,P.y=Re.y0+(.1-Re.y0)*xe+Math.sin(xe*Math.PI)*.9,P.n=[0,1,0],P.f=[Re.x1-Re.x0,0,Re.z1-Re.z0],P.attack=.7,P.walk=0,xe>=1&&(P.state="chase",P.attack=0,P.y=.1,be<1.1&&oe(26));return}if(P.n=[0,1,0],P.y=.1,be>.001&&(P.f=[le/be,0,pe/be]),P.state==="chase"){if(P.attack=Math.max(0,P.attack-$*4),P.hp<50&&!P.retreated){P.retreated=!0;const xe=[[y-.44,P.z,[1,0,0]],[T+.44,P.z,[-1,0,0]],[P.x,E-.44,[0,0,1]],[P.x,z+.44,[0,0,-1]]].filter(Re=>!(Re[0]>T&&Re[1]>gt.z0-.4&&Re[1]<gt.z1+.4)).sort((Re,Ze)=>Math.hypot(Re[0]-P.x,Re[1]-P.z)-Math.hypot(Ze[0]-P.x,Ze[1]-P.z))[0];P.path=[{x:xe[0],y:.12,z:xe[1],n:[0,1,0]},{x:xe[0],y:2.5,z:xe[1],n:xe[2]}],P.state="climb";return}if(be<1&&P.cd<=0&&l.dead<=0){P.state="windup",P.st=0,u.crawlerAttack(Hn(Math.sin(Math.atan2(le,pe)-d.yaw),-1,1));return}if(be>.8){const xe=2.55*$;P.x+=le/be*xe,P.z+=pe/be*xe,P.walk=1,me(),El(P,p,.3);for(const Re of L)if(Re!==P&&Re.state!=="dead"&&Re.state!=="perch"){const Ze=P.x-Re.x,V=P.z-Re.z,lt=Math.hypot(Ze,V);lt<.6&&lt>.001&&(P.x+=Ze/lt*(.6-lt)*.5,P.z+=V/lt*(.6-lt)*.5)}P.x=Hn(P.x,y,T),P.z=Hn(P.z,E,z)}else P.walk=0;return}if(P.state==="windup"){P.walk=0,P.attack=Math.min(1,P.st/.45),P.st>=.45&&(be<1.3&&oe(34),P.state="chase",P.cd=1.4);return}}function B(P,$){P.state==="dead"||P.state==="perch"||(P.hp-=$,P.hurt=1,P.hp<=0&&(P.state="dead",P.st=0,u.crawlerDie()))}function oe(P){l.dead>0||l.ended||(l.hp-=P,l.hurtT=0,l.hurt=1,u.hurt(),l.hp>0?_("op.hurt"):(l.dead=.001,l.deaths++,u.death(),l.firing=!1,l.held=null))}function q(){Object.assign(d,{x:3.4,z:-24,yaw:-Math.PI/2,pitch:0}),l.hp=100,l.heat=0,l.over=!1,l.hurt=0,l.dashT=0,G(),L.filter(P=>P.state==="perch").forEach((P,$)=>m(1.6+$*.9,()=>{P.state==="perch"&&l.scene==="fight"&&U(P)})),u.respawn(),h("op.dead")}const te=new k,se=()=>[d.x,Zt,d.z],_e=()=>{const P=Math.cos(d.pitch);return[-Math.sin(d.yaw)*P,Math.sin(d.pitch),-Math.cos(d.yaw)*P]};function K(P,$,le){const pe=se(),be=_e(),me=P-pe[0],xe=$-pe[1],Re=le-pe[2],Ze=Math.hypot(me,xe,Re)||1e-6;return{ang:Math.acos(Hn((me*be[0]+xe*be[1]+Re*be[2])/Ze,-1,1)),dist:Ze}}function Y(P,$,le){const pe=se(),be=P-pe[0],me=$-pe[1],xe=le-pe[2];d.yaw=Math.atan2(-be,-xe),d.pitch=Math.atan2(me,Math.hypot(be,xe))}const ie=(P,$,le)=>Math.hypot(d.x-P,d.z-$)<le;function ve(P,$){const le=$.fire&&l.hasTool&&!l.lock&&l.dead<=0;$.press.has("f")&&l.hasTool&&(l.mode=l.mode==="grip"?"cut":"grip",l.held&&Me(!1),u.ui());let pe="",be=0,me=!1;if(l.mode==="cut"){l.held&&Me(!1);const xe=le&&!l.over;if(xe&&!l.firing&&u.cutOn(),!xe&&l.firing&&u.cutOff(),l.firing=xe,xe){if(l.heat+=P/2.4,l.heat>=1&&(l.heat=1,l.over=!0,l.firing=!1,u.cutOff(),u.overheat(),_("op.heat")),pe="cut",be=Ll,l.coverFall<=0){const V=K(ae.x0+.36,b.y,b.z);V.dist<Ll+.3&&V.ang<.34&&(l.cut+=P/1.5,be=V.dist-.25,me=!0,te.copy(an(ae.x0+.38,b.y+.44-.88*Math.min(1,l.cut),b.z)),l.cut>=1&&(l.coverFall=.001,M.free=!0,_("op.battery"),u.throwObj()))}const Re=se(),Ze=_e();for(const V of L){if(V.state==="dead"||V.state==="perch")continue;const lt=V.x-Re[0],Te=V.y+.12-Re[1],He=V.z-Re[2],Se=Hn(lt*Ze[0]+Te*Ze[1]+He*Ze[2],0,Ll);Math.hypot(lt-Ze[0]*Se,Te-Ze[1]*Se,He-Ze[2]*Se)<.42&&(B(V,80*P),be=Math.min(be,Se),me=!0,te.copy(an(V.x,V.y+.15,V.z)),V.hurt>.95&&(l.t*10|0)%3===0&&u.crawlerHit())}}else l.heat=Math.max(0,l.heat-P*(l.over?.42:.6));l.over&&l.heat<=.25&&(l.over=!1)}else if(l.firing&&(u.cutOff(),l.firing=!1),l.heat=Math.max(0,l.heat-P*.6),l.over&&l.heat<=.25&&(l.over=!1),le){if(!l.held&&!l.pull){let Re=null,Ze=.4;for(const V of A){if(!V.free)continue;const lt=K(V.x,V.y,V.z);lt.dist<p_&&lt.ang<Ze&&(Ze=lt.ang,Re=V)}Re&&(l.pull=Re,Re.rest=!1,u.gripOn())}const xe=l.held||l.pull;if(xe){const Re=se(),Ze=_e(),V=Re[0]+Ze[0]*cr,lt=Hn(Re[1]+Ze[1]*cr-.12,xe.half,2.4),Te=Re[2]+Ze[2]*cr;if(l.held)xe.x=V,xe.y=lt,xe.z=Te,El(xe,p,.12),xe.vx=xe.vy=xe.vz=0,xe.yaw=d.yaw;else{const He=V-xe.x,Se=lt-xe.y,ht=Te-xe.z,D=Math.hypot(He,Se,ht),R=7*P;D<=Math.max(R,.12)?(l.held=xe,l.pull=null,u.gripHold(!0)):(xe.x+=He/D*R,xe.y+=Se/D*R,xe.z+=ht/D*R,xe.vx=xe.vy=xe.vz=0)}if(pe="grip",be=K(xe.x,xe.y,xe.z).dist-.2,$.press.has("space")&&l.held){const He=_e();xe.vx=He[0]*10,xe.vy=He[1]*10+1.6,xe.vz=He[2]*10,Me(!0),$.press.delete("space")}}}else(l.held||l.pull)&&Me(!1);e.beam.set(pe,Math.max(.05,be),l.t),e.beam.sparks(me,te,l.t)}function Me(P){l.held&&(u.gripHold(!1),P?u.throwObj():u.gripOff(),l.held.thrown=P?1.2:0),l.held=null,l.pull=null}function j(P,$){if(l.paused||r){l.t+=r?P:0,r&&Xe();return}l.t+=P,l.sceneT+=P,l.ended||(l.play+=P);for(let me=l.timers.length-1;me>=0;me--)if(l.timers[me].at<=l.t){const xe=l.timers[me].fn;l.timers.splice(me,1),xe()}f.tick(P),l.hurt=Math.max(0,l.hurt-P*1.6),l.hurtT+=P,l.hurtT>5&&l.hp<100&&l.dead<=0&&(l.hp=Math.min(100,l.hp+12*P)),l.wake+=(l.wakeTarget-l.wake)*Math.min(1,P*.45);let le="";l.dead>0&&(l.dead+=P,l.fade=l.dead<.7?1-l.dead/.7:l.dead<1?0:Math.min(1,(l.dead-1)/.9),l.dead>=1&&l.hp<=0&&q(),l.dead>=1.9&&(l.dead=0,l.fade=1));const pe=l.scene==="wheel"||l.lock||l.dead>0&&l.dead<1||l.ended;if(d.input.forward=pe?0:$.fwd,d.input.strafe=pe?0:$.strafe,d.speed=$.run?5.2:3.2,l.dashT=Math.max(0,l.dashT-P),$.press.has("space")&&!l.held&&!pe&&l.dashT<=0&&l.scene!=="wheel"){const me=$.fwd||$.strafe?[$.fwd,$.strafe]:[-1,0],xe=Math.hypot(me[0],me[1]),Re=Math.sin(d.yaw),Ze=Math.cos(d.yaw);l.dashV=[(-Re*me[0]+Ze*me[1])/xe*9,(-Ze*me[0]-Re*me[1])/xe*9],l.dashT=1.1}if(l.dashT>.92&&(d.x+=l.dashV[0]*P,d.z+=l.dashV[1]*P),tf(d,p,P),l.scene==="wheel"){Object.assign(d,{x:Je.wheelCam.x,z:Je.wheelCam.z}),d.yaw=Hn(d.yaw,-.3,.3),d.pitch=Hn(d.pitch,-.3,.25),l.sceneT>.7&&_("op.start");const me=Hn($.wheel,-1,1);me&&(l.wheel+=me*2.4*P,u.wheel(Math.abs(l.wheel)/5.2)),le=Math.abs(l.wheel)<.6?n&&n.isTouch?"hint.wheel.touch":"hint.wheel":"",Math.abs(l.wheel)>=5.2&&(x("airlock"),u.hatchOpen())}else l.hatch<1&&(l.hatch=Math.min(1,l.hatch+P/1.3),l.hatch>.6&&!l._hc&&(l._hc=1,v(),_("op.hatch")));if(l.scene==="airlock"&&(l.sceneT<6&&l.hatch>=1&&!$.fwd&&!$.strafe&&!l._moved?le="hint.move":($.fwd||$.strafe)&&(l._moved=1),d.z<-.3&&x("corridor")),!l.hasTool&&l.scene!=="wheel"&&(e.setGlow(e.toolPickup.glow,2+2*(.5+.5*Math.sin(l.t*4))),ie(Je.tool.x,Je.tool.z,1.5)&&K(Je.tool.x,Je.tool.y,Je.tool.z).ang<.6&&(le="hint.take",$.press.has("e")&&(l.hasTool=!0,e.toolPickup.show(!1),u.pickup(),_("op.tool"),l._toolHint=l.t))),(l.scene==="corridor"||l.scene==="airlock")&&(ie(Pe.x,(Pe.z0+Pe.z1)/2,1.9)&&_("op.window"),ie(Je.deadCrawler.x,Je.deadCrawler.z,1.7)&&_("op.crawler"),d.z<-21.6&&d.x<.2&&_("op.camp"),ie(-1.4,-25.4,1.5)&&_("op.tally"),d.z<-27.5&&_("op.barricade"),ie(ae.x1,-26.6,1.5)&&_("op.frost"),!l.powered&&ie(ae.x1,(st.z0+st.z1)/2,2.6)&&_("op.door.dead"),l.hasTool&&(l._toolHint!==void 0&&l.t-l._toolHint<5&&!le&&(le="hint.tool"),l.coverFall<=0&&ie(b.x,b.z,2.6)&&!le&&(le=(l.mode==="cut","hint.cut")),M.free&&l.battery!=="socket"&&!l.held&&ie(M.x,M.z,3)&&!le&&(le="hint.grab"),l.held===M&&!le&&(le="hint.socket"))),l.coverFall>0&&l.coverFall<1&&(l.coverFall=Math.min(1,l.coverFall+P/.6)),l.battery!=="socket"&&M.free&&Math.hypot(M.x-Je.socket.x,M.y-Je.socket.y,M.z-Je.socket.z)<.6&&((l.held===M||l.pull===M)&&Me(!1),M.free=!1,l.battery="socket",l.powered=!0,Object.assign(M,{x:ae.x1-.2,y:Je.socket.y-.06,z:Je.socket.z,yaw:Math.PI/2}),u.socket(),m(.5,()=>{u.doorPower(),_("op.door.open")})),l.powered&&l.door<1&&l.scene!=="exhibit"&&(l.door=Math.min(1,l.door+P/1.4),l.door>.7&&!l._dc&&(l._dc=1,v())),l.scene==="corridor"&&d.x>ce.x0+.3&&(x("bay"),_("op.bay")),l.scene==="bay"){l.bayT+=P,ie(Je.bayLog.x,Je.bayLog.z,3.2)&&_("log.bay",{log:!0}),l.bayT>45&&l.steps===0&&_("op.bay.hint");for(let me=0;me<e.levers.length;me++){const xe=e.levers[me];xe.down||!ie(xe.x,xe.z,1.5)||K(xe.x,xe.y,xe.z).ang>.7||(le="hint.lever",$.press.has("e")&&(me===a[l.steps]?(xe.down=!0,xe.set(!0),l.steps++,u.beaconStep(l.steps),l.steps===1?_("op.step1"):l.steps===2?_("op.step2"):be()):(l.wrongs++,l.steps=0,e.levers.forEach(Re=>{Re.down=!1,Re.set(!1)}),u.wrong(),l.wrongs>=2?_("op.bay.hint"):h("op.wrong"))))}}function be(){u.beaconDown(),l.beaconFall=.001,_("op.down"),m(2.2,()=>{l.wakeTarget=1}),m(4.6,()=>{x("fight"),_("op.fight"),L.forEach((me,xe)=>m(xe*1.1,()=>{me.state==="perch"&&U(me)}))})}l.beaconFall>0&&(l.beaconFall+=P,l.beacon=Math.max(0,1-l.beaconFall/1.2),l.lightsDown=Math.min(1,l.beaconFall/2.5)),l.scene==="fight"&&(!l.cleared&&L.every(me=>me.state==="dead")&&(l.cleared=!0,m(1.2,()=>{_("op.clear"),x("seal")})),l.hasTool&&l.sceneT<6&&!le&&(le=l.held?"hint.throw":""));for(const me of L)W(me,P);for(const me of A)if(g(me,P),me.thrown>0){me.thrown-=P;for(const xe of L)xe.state!=="dead"&&xe.state!=="perch"&&Math.hypot(me.x-xe.x,me.y-xe.y,me.z-xe.z)<.55&&Math.hypot(me.vx,me.vy,me.vz)>3&&(B(xe,100),u.crawlerHit(),me.vx*=-.3,me.vz*=-.3,me.vy=2,me.thrown=0)}if(l.scene==="seal"&&(ie(ce.x1,(gt.z0+gt.z1)/2,4.5)&&(_("op.seal"),_("op.seal.terminal")),!l.sealOpening&&!l.waiting&&ie(Je.terminal.x,Je.terminal.z,1.7)&&K(Je.terminal.x,Je.terminal.y,Je.terminal.z).ang<.8&&(le="hint.terminal",$.press.has("e")&&(h("op.seal.ask"),l.lock=!0,u.radioOpen(),n?n.openComm({onSend:Ye,onClose:()=>{l.lock=!1,u.radioClose()}}):l.lock=!1)),l.sealOpening&&(l.seal=Math.min(1,l.seal+P/5),l.seal>.8&&!l._sc&&(l._sc=1,v())),d.x>De.x0+.4&&(x("gallery"),u.reveal(),_("op.gallery"))),l.scene==="gallery"&&(l.galleryT+=P,l.turn=Math.min(1,l.galleryT/20),l.turn>.72&&_("op.gallery2"),l.galleryT>27&&!l.ended)){l.ended=!0,x("end");const me=Math.floor(l.play/60),xe=Math.floor(l.play%60);f.showEnd(`${me}:${String(xe).padStart(2,"0")}`)}if(!le&&!l.lock)for(const me of e.logs)me.key==="log.bay"||me.heard||!ie(me.x,me.z,1.5)||K(me.x,me.y,me.z).ang>.7||(le="hint.log",$.press.has("e")&&(me.heard=!0,_(me.key,{log:!0})));l.over&&!le&&(le="hint.overheat"),ve(P,$),!le&&$.needClick&&l.scene!=="wheel"&&(le="hint.click"),f.prompt(l.lock||l.ended||l.dead>0?"":le),f.tool(l.mode,l.heat,l.over,l.hasTool&&!l.ended),f.hp(l.hp/100,!l.ended),l.prompt=le,Xe(),u.update(P,{room:Ee(),speed:pe?0:Math.hypot($.fwd,$.strafe)*d.speed,wake:l.wake,vacuum:.9*(1-l.hatch),beacon:l.beacon,tailFlicker:l.wake,t:l.t})}const Ee=()=>d.z>.2?"airlock":d.x>De.x0?"gallery":d.x>2.2?"bay":"corridor";function Ye(P){l.waiting=!0,_("op.seal.wait"),l.said["op.seal.wait"]=0,d_({kind:"seal",signs:P,expect:c,context:{seed:t,scene:l.scene,elapsed:+l.play.toFixed(1),attempts:l.attempts=(l.attempts||0)+1}}).then($=>m(($.delayMs||0)/1e3,()=>{l.waiting=!1,l.lock=!1,u.radioClose(),$.ok?(h($.line),l.sealOpening=!0,u.sealOpen()):(h($.line),u.wrong())}))}const Fe=[0,1,0];function Xe(){const P=l.t;e.wheel.set(l.wheel),e.bayDoor.set(l.door,l.powered),e.socket.set(l.powered),e.cover.set(l.cut,l.coverFall);for(const be of A)Xu(be.prop.group,be.x,be.y,be.z,Fe,[-Math.sin(be.yaw),0,-Math.cos(be.yaw)]);for(const be of L)Xu(be.c.group,be.x,be.y,be.z,be.n,be.f),be.c.update(P,{walk:be.walk,attack:be.attack,wake:Math.max(l.wake,be.state==="perch"?0:1),hurt:be.hurt,dead:be.dead});e.dead.setWake(l.wake),e.seal.set(l.seal,P,l.wake),e.terminal.set(P,l.scene==="seal"&&!l.sealOpening);for(const be of e.logs)e.setGlow(be.led,be.heard||be.key==="log.bay"&&l.said["log.bay"]?.3:Math.sin(P*3+be.x)>0?3:.6);e.cavern.update(P,l.turn,.25+.75*l.turn);const $=P*.5%1,le=$<.36?Math.floor($/.12):-1;l.beaconColor=le>=0?zc[Je.levers[a[le]].color]:16763e3;const pe=i.level.dynamic.beaconDef;pe&&(pe.col.set(l.beaconColor),pe.off=l.beacon<=.01)}Xe();function at(P){if(P==="pickup")return at("corridor"),Object.assign(d,{x:.6,z:-7.4}),Y(Je.tool.x,Je.tool.y,Je.tool.z),!0;const $=["corridor","tool","bay","fight","seal","gallery"].indexOf(P);return $<0?!1:(l.hatch=1,l.wheel=5.3,l.scene="corridor",l._hc=1,l.said["op.start"]=l.said["op.hatch"]=1,Object.assign(d,{x:0,z:-1.5,yaw:0,pitch:0}),$>=1&&(l.hasTool=!0,e.toolPickup.show(!1),Object.assign(d,{x:.9,z:-8.3})),$>=2&&(l.cut=1,l.coverFall=1,M.free=!1,l.battery="socket",l.powered=!0,l.door=1,l._dc=1,Object.assign(M,{x:ae.x1-.2,y:Je.socket.y-.06,z:Je.socket.z,yaw:Math.PI/2}),Object.assign(d,{x:3.4,z:-24,yaw:-Math.PI/2}),l.scene="bay"),$>=3&&(e.levers.forEach(le=>{le.down=!0,le.set(!0)}),l.steps=3,l.beacon=0,l.beaconFall=3,l.lightsDown=1,l.wake=l.wakeTarget=1,l.scene="fight",L.forEach((le,pe)=>m(.6+pe*1.1,()=>{le.state==="perch"&&l.scene==="fight"&&U(le)}))),$>=4&&(l.timers.length=0,L.forEach(le=>{le.state="dead",le.dead=1,le.hp=0,le.y=.1,le.n=[0,1,0],le.x=8+le.i*1.5,le.z=-27.5}),l.cleared=!0,l.scene="seal",Object.assign(d,{x:13,z:-24,yaw:-Math.PI/2})),$>=5&&(l.seal=1,l.sealOpening=!0,l._sc=1,Object.assign(d,{x:17.3,z:-24})),v(),l.sceneStart=l.play,Xe(),!0)}function ye(P){l.t=P.t??1.3,l.wake=l.wakeTarget=P.wake||0,l.wheel=P.wheel||0,l.hatch=P.hatch??1,l.cut=P.cut||0,l.coverFall=P.coverFall||0,l.door=P.door??1,l.powered=P.powered??!0,l.seal=P.seal||0,l.turn=P.turn||0,l.beacon=P.beacon??1,l.lightsDown=P.lightsDown||0,e.toolPickup.show(!!P.toolOn);const $=[P.pos[0],P.pos[1],P.pos[2]],le=Math.cos(P.pitch),pe=[-Math.sin(P.yaw)*le,Math.sin(P.pitch),-Math.cos(P.yaw)*le];return P.bat==="held"?Object.assign(M,{x:$[0]+pe[0]*cr,y:$[1]+pe[1]*cr-.12,z:$[2]+pe[2]*cr,yaw:P.yaw}):P.bat==="cabinet"?Object.assign(M,{x:ae.x0+.18,y:b.y-.08,z:b.z,yaw:Math.PI/2}):Object.assign(M,{x:ae.x1-.2,y:Je.socket.y-.06,z:Je.socket.z,yaw:Math.PI/2}),e.levers.forEach((be,me)=>be.set(a.indexOf(me)<(P.steps||0))),L.forEach((be,me)=>{F(be),be.walk=be.attack=be.dead=0;const xe=P.fight&&P.fight[me];xe&&Object.assign(be,xe)}),e.beam.set(P.beam||"",P.beamLen||1.4,l.t),e.beam.sparks(!!P.sparks,P.sparks?an(...P.sparks):te,l.t),Xe(),{pose:P.pose||"tool",mode:P.mode||"grip",fire:P.beam==="cut"?1:0,hold:P.bat==="held"?1:0,heat:P.heat||0,wheel:l.wheel,hatch:l.hatch,wake:l.wake,lightsDown:Math.max(l.wake,l.lightsDown),beacon:l.beacon,beaconColor:l.beaconColor,t:l.t,rig:P.rig??1,inspect:P.inspect||0,door:l.door,seal:l.seal}}return r&&(e.toolPickup.show(!1),Object.assign(M,{x:ae.x1-.2,y:Je.socket.y-.06,z:Je.socket.z,yaw:Math.PI/2}),Xe()),{S:l,player:d,crawlers:L,bodies:A,order:a,signs:c,skipTo:at,exhibitState:ye,update:j,pause(P){l.paused=P},colliders:()=>p,view:()=>({x:d.x,y:Zt,z:d.z,yaw:d.yaw,pitch:d.pitch}),frame(P={}){return{t:l.t,wake:l.wake,hatch:l.hatch,rig:1,pose:l.scene==="wheel"?"wheel":l.hasTool?"tool":"empty",wheel:l.wheel,mode:l.mode,heat:l.heat,hold:l.held?1:l.pull?.5:0,fire:l.firing?1:0,hurt:Math.max(l.hurt,1-l.hp/100)*.9,fade:l.fade,beacon:l.beacon,beaconColor:l.beaconColor,lightsDown:Math.max(l.wake,l.lightsDown),door:l.door,seal:l.seal,...P}},debug:{lookAt:Y,aimAt:K,aimNearest(){let P=null,$=1e9;for(const le of L)if(le.state!=="dead"&&le.state!=="perch"){const pe=Math.hypot(le.x-d.x,le.z-d.z);pe<$&&($=pe,P=le)}return P&&Y(P.x,P.y+.12,P.z),P?{dist:$,y:P.y,state:P.state}:null},solveSeal(){return l.scene!=="seal"||l.sealOpening||l.waiting?!1:(Ye(c.slice()),!0)},info(){return{scene:l.scene,t:+l.t.toFixed(2),play:+l.play.toFixed(2),x:+d.x.toFixed(3),z:+d.z.toFixed(3),yaw:d.yaw,hp:l.hp,heat:l.heat,over:l.over,mode:l.mode,hasTool:l.hasTool,cut:l.cut,cover:l.coverFall,battery:l.battery,batFree:M.free,bat:[M.x,M.y,M.z],held:l.held?l.held.name:"",door:l.door,steps:l.steps,wrongs:l.wrongs,dead:l.dead,wake:+l.wake.toFixed(2),alive:L.filter(P=>P.state!=="dead").length,seal:l.seal,sealOpening:l.sealOpening,waiting:l.waiting,turn:l.turn,ended:l.ended,deaths:l.deaths,times:{...l.times},prompt:l.prompt||"",lock:l.lock,order:a,signs:c,hatch:l.hatch}}}}}const Pf={title:"ДРЕЙФ","hint.wheel":"A / D: крутить штурвал","hint.wheel.touch":"стик влево или вправо: крутить штурвал","hint.move":"WASD: идти · мышь: смотреть","hint.click":"клик: вернуть управление","hint.take":"E: взять","hint.tool":"ЛКМ: захват · F: резак","hint.cut":"F: резак · держи ЛКМ на панели","hint.grab":"F: захват · ЛКМ: притянуть и держать","hint.socket":"поднеси к гнезду и отпусти","hint.throw":"пробел: толкнуть","hint.lever":"E: рубильник","hint.log":"E: запись","hint.terminal":"E: терминал","hint.overheat":"перегрев","hint.dash":"пробел: рывок","op.name":"ГРОБОВЩИК","op.start":"Харма, это Гробовщик. Станция «Вереск-9» официально мертва. Осталось выключить три маяка, и я подпишу свидетельство.","op.hatch":"Люк открыт. Внутри давление есть, воздух ничей. Не снимай шлем, я за него расписывался.","op.tool":"Захват и резак в одном корпусе. Казённый. Потеряешь, вычту из гонорара, найдёшь чужой, оформим как находку.","op.frost":"Иней при минус сорока дело обычное. Иней, который растёт по линейке, я бы в акт не вносил.","op.window":"Красивый камень. Заказчик продаёт его вместе со станцией, так что не поцарапай.","op.camp":"Постели в коридоре. Каюты были в ста метрах. Люди не спят у двери без причины.","op.tally":"Сорок один день. Спасатели по документам пришли на третий.","op.barricade":"Заварено изнутри. Эвакуацию так не проводят.","op.crawler":"Ремонтный автомат. Сломался раньше станции, редкий случай. То, что из него растёт, в гарантию не входит.","op.door.dead":"Дверь обесточена. Ищи батарею, они любят висеть в шкафах за полосатыми крышками.","op.battery":"Батарея. Неси к гнезду у двери. Руками не трогай, у тебя лапы.","op.door.open":"Питание есть. Заходи, там первый.","op.bay":"Маяк собран вручную. Заводские так не выглядят. Глуши.","op.bay.hint":"Он мигает тремя цветами. Кабели тоже трёх цветов. Я бы не стал считать это совпадением.","op.wrong":"Не тот. Он вернул всё как было. Упрямая вещь для самоделки.","op.step1":"Первый контур.","op.step2":"Второй. Сигнал слабеет.","op.down":"Один есть. Харма, почему у тебя за спиной стало светлее?","op.fight":"Автоматы ожили. Резак у тебя не для красоты. И кидаться в них тоже не запрещено.","op.heat":"Резак перегрелся. Дай ему остыть, или бей захватом.","op.hurt":"Скафандр держит. Пока.","op.dead":"Связь есть, тебя нет. Попробуем ещё раз, будто ничего не было.","op.clear":"Тихо. Автоматы кончились раньше, чем вопросы.","op.seal":"Этого в описи нет. Опиши мне, что видишь. Канал открыт.","op.seal.terminal":"Терминал предлагает запросить оператора. Оператор это я. Запрашивай.","op.seal.ask":"Четыре знака на двери. Назови по порядку, слева направо.","op.seal.wait":"Ищу в архиве «Тарна». Не уходи далеко.","op.seal.no":"Такой последовательности в архиве нет. Посмотри ещё раз, я подожду, мне платят по часам.","op.seal.yes":"Нашёл. Сервисная маркировка: техническая галерея, смотровая. Отзыв отправлен. Дверь не заперта, она заросла.","op.gallery":"Харма. Скажи мне, что это шахта.","op.gallery2":"Оно повернулось. Маяков осталось два. Я пока ничего не подписываю.","log.title":"ЗАПИСЬ ЭКИПАЖА","log.bay":"…если кто-то это слышит. Не выключайте. Мы собрали три, из того, что было. Пока звучат все три, оно спит. Не выключайте.","log.1":"День девятый. Бур вскрыл полость. Там не порода. Там решётка, как иней на стекле, только каждая ветка ровно втрое меньше прежней. Геолог говорит, такого рисунка в справочниках нет. Он старше справочников.","log.2":"День двадцать второй. Мы дали в полость радиоимпульс, чтобы измерить глубину. Через три секунды пришёл ответ. Не эхо: наш импульс, повторённый трижды. С тех пор оно растёт в сторону передатчика.","log.3":"День сороковой. Датировка керна готова, я проверила четыре раза. Лёд вокруг решётки старше Солнца. Оно ждало здесь до того, как было чему светить. Лида, прости, я не полечу домой: кто-то должен крутить ручку.","comm.title":"КАНАЛ ОТКРЫТ","comm.pick":"Выбери четыре знака в том порядке, в каком они на двери","comm.send":"Передать","comm.clear":"Стереть","comm.close":"Закрыть","comm.sent":"Передано: ","pause.title":"ПАУЗА","pause.resume":"Клик или Esc: продолжить","pause.keys":"WASD идти · Shift быстрее · мышь смотреть · ЛКМ инструмент · F захват / резак · E действие · пробел толчок или рывок · Esc пауза","end.title":"ДРЕЙФ","end.sub":"Продолжение следует","end.time":"Время прохождения: ","end.again":"Enter: сначала","start.click":"Клик, чтобы начать",guest:"гостевой режим: прогресс хранится только в этой вкладке"};let g_=Pf;function ln(i){return g_[i]??Pf[i]??i}const x_=`
#ui { position: fixed; inset: 0; pointer-events: none; font: 15px/1.35 system-ui, -apple-system, 'Segoe UI', sans-serif; color: #dfe6ee; user-select: none; -webkit-user-select: none; z-index: 4; }
#ui * { box-sizing: border-box; }
#ui .cross { position: absolute; left: 50%; top: 50%; width: 6px; height: 6px; margin: -3px; border-radius: 50%; background: rgba(223,230,238,.75); box-shadow: 0 0 0 1px rgba(0,0,0,.5); }
#ui .cross.hot { background: #fde467; transform: scale(1.5); }
#ui .prompt { position: absolute; left: 50%; top: calc(50% + 26px); transform: translateX(-50%); padding: 3px 10px; background: rgba(4,8,12,.6); border-radius: 4px; font-size: 13px; white-space: nowrap; }
#ui .sub { position: absolute; left: 50%; bottom: 9%; transform: translateX(-50%); width: min(760px, 92vw); display: flex; gap: 12px; align-items: flex-start; padding: 10px 14px; background: rgba(4,8,12,.72); border-left: 2px solid #c38d3e; border-radius: 4px; }
#ui .sub.log { border-left-color: #84cbcd; font-style: italic; }
#ui .sub .who { flex: 0 0 auto; width: 44px; text-align: center; font: 600 9px/1.2 ui-monospace, monospace; color: #c38d3e; letter-spacing: .06em; }
#ui .sub.log .who { color: #84cbcd; }
#ui .sub svg { display: block; width: 44px; height: 44px; margin-bottom: 3px; }
#ui .sub .txt { flex: 1; font-size: 16px; text-shadow: 0 1px 2px #000; }
#ui .tool { position: absolute; right: 18px; bottom: 16px; width: 150px; padding: 6px 8px; background: rgba(4,8,12,.55); border-radius: 4px; font: 600 11px/1.3 ui-monospace, monospace; letter-spacing: .05em; }
#ui .tool .bar { height: 5px; margin-top: 5px; background: rgba(255,255,255,.12); border-radius: 3px; overflow: hidden; }
#ui .tool .bar i { display: block; height: 100%; width: 0; background: #84cbcd; }
#ui .tool.hot .bar i { background: #ff5a3c; } #ui .tool.over { color: #ff5a3c; }
#ui .hp { position: absolute; left: 18px; bottom: 16px; width: 110px; height: 5px; background: rgba(255,255,255,.12); border-radius: 3px; overflow: hidden; }
#ui .hp i { display: block; height: 100%; background: #c38d3e; }
#ui .panel { position: absolute; inset: 0; display: grid; place-items: center; background: rgba(2,4,7,.62); pointer-events: auto; }
#ui .card { width: min(560px, 92vw); padding: 18px 20px; background: rgba(8,12,18,.94); border: 1px solid #2b3a48; border-radius: 6px; }
#ui .card h2 { margin: 0 0 10px; font: 600 12px ui-monospace, monospace; letter-spacing: .12em; color: #84cbcd; }
#ui .card p { margin: 0 0 12px; }
#ui .signs { display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin: 10px 0; }
#ui .signs button, #ui .row button { pointer-events: auto; cursor: pointer; background: #0c141c; border: 1px solid #2b3a48; border-radius: 5px; color: #dfe6ee; padding: 6px; font: inherit; }
#ui .signs button:hover, #ui .row button:hover { border-color: #84cbcd; }
#ui .signs canvas { display: block; width: 100%; height: auto; }
#ui .picked { display: flex; gap: 8px; min-height: 58px; align-items: center; padding: 6px 8px; background: #05090d; border: 1px dashed #2b3a48; border-radius: 5px; }
#ui .picked canvas { width: 46px; height: 46px; }
#ui .row { display: flex; gap: 8px; margin-top: 12px; } #ui .row button { padding: 8px 14px; } #ui .row button.go { border-color: #c38d3e; color: #fde467; }
#ui .end { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; background: rgba(0,0,0,.0); transition: background 3s; }
#ui .end.on { background: rgba(0,0,0,.78); }
#ui .end h1 { margin: 0; font: 200 clamp(48px, 11vw, 132px)/1 system-ui, sans-serif; letter-spacing: .32em; text-indent: .32em; color: #e8eef5; }
#ui .end h3 { margin: 18px 0 0; font: 400 clamp(15px, 2.4vw, 24px) system-ui, sans-serif; letter-spacing: .28em; color: #84cbcd; }
#ui .end p { margin: 26px 0 0; color: #9aa6b2; font: 14px ui-monospace, monospace; }
#ui .start { position: absolute; left: 50%; bottom: 20%; transform: translateX(-50%); padding: 8px 16px; background: rgba(4,8,12,.7); border-radius: 4px; }
#ui .guest { position: absolute; left: 50%; top: 10px; transform: translateX(-50%); font: 11px ui-monospace, monospace; color: rgba(223,230,238,.45); white-space: nowrap; }
#ui .touch { position: absolute; inset: 0; pointer-events: none; }
#ui .stick { position: absolute; left: 22px; bottom: 26px; width: 120px; height: 120px; border-radius: 50%; border: 1px solid rgba(223,230,238,.35); background: rgba(4,8,12,.25); pointer-events: auto; touch-action: none; }
#ui .stick i { position: absolute; left: 50%; top: 50%; width: 46px; height: 46px; margin: -23px; border-radius: 50%; background: rgba(223,230,238,.4); }
#ui .tb { position: absolute; width: 62px; height: 62px; border-radius: 50%; border: 1px solid rgba(223,230,238,.4); background: rgba(4,8,12,.35); display: grid; place-items: center; font: 600 13px ui-monospace, monospace; pointer-events: auto; touch-action: none; }
#ui .tb.on { background: rgba(132,203,205,.4); }
#ui [hidden] { display: none !important; }
`,v_='<svg viewBox="0 0 44 44"><rect width="44" height="44" rx="4" fill="#1a130a"/><circle cx="22" cy="20" r="17" fill="#3a2a12"/><path d="M4 44c1-11 7-15 13-16l-3-2c-6-1-9-2-11-4 6 0 9-1 11-3 0-6 3-9 8-9s8 3 8 9c2 2 5 3 11 3-2 2-5 3-11 4l-3 2c6 1 12 5 13 16z" fill="#06080b"/></svg>',__='<svg viewBox="0 0 44 44"><rect width="44" height="44" rx="4" fill="#0a1a1c"/><rect x="6" y="12" width="32" height="20" rx="3" fill="none" stroke="#84cbcd" stroke-width="2"/><circle cx="16" cy="22" r="4" fill="none" stroke="#84cbcd" stroke-width="2"/><circle cx="28" cy="22" r="4" fill="none" stroke="#84cbcd" stroke-width="2"/></svg>';function $t(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n}function qu(i,e=96){const t=document.createElement("canvas");return t.width=t.height=e,Ic(t.getContext("2d"),i,e/2,e/2,e*.36,"#bfeff0"),t}function y_({touch:i=!1}={}){const e=document.createElement("style");e.textContent=x_,document.head.appendChild(e);const t=$t("div");t.id="ui",document.body.appendChild(t);const n=$t("div","cross"),s=$t("div","prompt"),r=$t("div","sub"),o=$t("div","tool",'<span></span><div class="bar"><i></i></div>'),a=$t("div","hp","<i></i>"),c=$t("div","start"),u=$t("div","guest");r.innerHTML='<div class="who"></div><div class="txt"></div>',u.textContent=ln("guest");for(const A of[n,s,r,o,a,c,u])t.appendChild(A);s.hidden=r.hidden=o.hidden=a.hidden=c.hidden=!0;let f=null;const d=[];let l=null;function p(A,{log:g=!1,onStart:y=null}={}){d.push({key:A,log:g,onStart:y})}function v(A){if(l&&(l.left-=A,l.left<=0&&(l=null,r.hidden=!0)),!l&&d.length){const g=d.shift(),y=ln(g.key);l={...g,left:Math.max(2.6,y.length*.062+1.2),dur:0},l.dur=l.left,r.className="sub"+(g.log?" log":""),r.firstChild.innerHTML=(g.log?__:v_)+(g.log?ln("log.title"):ln("op.name")),r.lastChild.textContent=y,r.hidden=!1,g.onStart&&g.onStart(y,l.dur-1)}}function _(){f&&(f.remove(),f=null)}function h({onSend:A,onClose:g}){_();const y=[];f=$t("div","panel");const T=$t("div","card");T.innerHTML=`<h2>${ln("comm.title")}</h2><p>${ln("comm.pick")}</p>`;const E=$t("div","signs"),z=$t("div","picked"),L=$t("div","row"),F=()=>{z.innerHTML="",y.forEach(B=>z.appendChild(qu(B,92)))};u0.forEach((B,oe)=>{const q=$t("button");q.dataset.sign=oe,q.appendChild(qu(oe)),q.addEventListener("click",()=>{y.length<4&&(y.push(oe),F(),C.onSign&&C.onSign(y.length-1))}),E.appendChild(q)});const U=$t("button","go",ln("comm.send")),G=$t("button","",ln("comm.clear")),W=$t("button","",ln("comm.close"));U.dataset.act="send",G.dataset.act="clear",W.dataset.act="close",U.addEventListener("click",()=>{if(y.length===4){const B=y.slice();_(),A(B)}}),G.addEventListener("click",()=>{y.length=0,F()}),W.addEventListener("click",()=>{_(),g&&g()}),L.append(U,G,W),T.append(E,z,L),f.appendChild(T),t.appendChild(f)}function m(){return _(),f=$t("div","panel"),f.dataset.kind="pause",f.appendChild($t("div","card",`<h2>${ln("pause.title")}</h2><p>${ln("pause.keys")}</p><p>${ln("pause.resume")}</p>`)),t.appendChild(f),f}let x=null;function b(A){x||(x=$t("div","end",`<div><h1>${ln("end.title")}</h1><h3>${ln("end.sub")}</h3><p>${ln("end.time")}${A}</p><p>${ln("end.again")}</p></div>`),t.appendChild(x),requestAnimationFrame(()=>x.classList.add("on")),n.hidden=o.hidden=a.hidden=s.hidden=!0)}const M={fwd:0,strafe:0,lookX:0,lookY:0,fire:!1,e:!1,f:!1,space:!1};if(i){const A=$t("div","touch"),g=$t("div","stick","<i></i>");A.appendChild(g);const y=g.firstChild;let T=null;const E=B=>{const oe=g.getBoundingClientRect(),q=(B.clientX-oe.left-oe.width/2)/(oe.width/2),te=(B.clientY-oe.top-oe.height/2)/(oe.height/2),se=Math.hypot(q,te),_e=se>1?1/se:1;M.strafe=q*_e,M.fwd=-te*_e,y.style.transform=`translate(${q*_e*37}px, ${te*_e*37}px)`};g.addEventListener("pointerdown",B=>{T=B.pointerId,g.setPointerCapture(T),E(B),B.preventDefault()}),g.addEventListener("pointermove",B=>{B.pointerId===T&&E(B)});const z=B=>{B.pointerId===T&&(T=null,M.fwd=M.strafe=0,y.style.transform="")};g.addEventListener("pointerup",z),g.addEventListener("pointercancel",z);const L=(B,oe,q,te,se)=>{const _e=$t("div","tb",B);_e.style.right=q+"px",_e.style.bottom=te+"px",_e.dataset.key=oe,_e.addEventListener("pointerdown",Y=>{M[oe]=!0,_e.classList.add("on"),Y.preventDefault()});const K=()=>{se&&(M[oe]=!1),_e.classList.remove("on")};_e.addEventListener("pointerup",K),_e.addEventListener("pointercancel",K),_e.addEventListener("pointerleave",K),A.appendChild(_e)};L("◎","fire",26,96,!0),L("E","e",100,40,!1),L("F","f",26,22,!1),L("⇧","space",100,116,!1);let F=null,U=0,G=0;addEventListener("pointerdown",B=>{B.pointerType!=="touch"||B.target.closest(".stick,.tb,.panel")||(F=B.pointerId,U=B.clientX,G=B.clientY)},!0),addEventListener("pointermove",B=>{B.pointerId===F&&(M.lookX+=B.clientX-U,M.lookY+=B.clientY-G,U=B.clientX,G=B.clientY)},!0);const W=B=>{B.pointerId===F&&(F=null)};addEventListener("pointerup",W,!0),addEventListener("pointercancel",W,!0),t.appendChild(A)}const C={root:t,touch:M,isTouch:i,onSign:null,say:p,tick:v,speaking:()=>!!l,clearSubs(){d.length=0,l=null,r.hidden=!0},prompt(A){const g=A?ln(A):"";s.textContent!==g&&(s.textContent=g),s.hidden=!A,n.classList.toggle("hot",!!A)},tool(A,g,y,T){o.hidden=!T,T&&(o.firstChild.textContent=y?ln("hint.overheat").toUpperCase():A==="cut"?"РЕЗАК":"ЗАХВАТ",o.querySelector("i").style.width=Math.round(g*100)+"%",o.classList.toggle("hot",g>.6),o.classList.toggle("over",!!y))},hp(A,g){a.hidden=!g||A>=.999,a.firstChild.style.width=Math.round(A*100)+"%"},start(A){c.hidden=!A,c.textContent=ln("start.click")},openComm:h,openPause:m,closePanel:_,panelOpen:()=>!!f,panelKind:()=>f?f.dataset.kind||"comm":"",showEnd:b,ended:()=>!!x,hideHud(A){n.hidden=A}};return C}const Yu=["airlock","corridor","bay","gallery"],ur={airlock:{hum:.34,revS:.55,revL:.04,beacon:.16,beaconLP:700},corridor:{hum:.24,revS:.16,revL:.42,beacon:.45,beaconLP:1600},bay:{hum:.24,revS:.08,revL:.62,beacon:1,beaconLP:9e3},gallery:{hum:.07,revS:.04,revL:.85,beacon:.28,beaconLP:1100}},M_=[293.66,349.23,415.3,523.25],b_=[659.25,493.88,369.99],$u=[1244.51,1396.91,1864.66,2093,2489.02,2793.83],S_={a:[680,1150],o:[470,880],u:[340,760],e:[500,1650],i:[320,2e3],y:[360,1450]},w_={а:"a",я:"a",о:"o",ё:"o",у:"u",ю:"u",э:"e",е:"e",и:"i",ы:"y",a:"a",o:"o",u:"u",e:"e",i:"i",y:"y"},E_=96,ri=(i,e,t)=>i<e?e:i>t?t:i,zn=(i,e)=>typeof i=="number"&&Number.isFinite(i)?i:e;function Il(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function T_(i){const e=[];let t=0;for(const n of i.toLowerCase()){const s=w_[n];if(s)e.push({syl:!0,v:s,cons:t,w:1+.14*Math.min(t,3)}),t=0;else if(/[a-zа-яё]/.test(n))t++;else if(/[.!?…]/.test(n))e.push({gap:!0,w:1.9,end:n==="?"?"q":"p"}),t=0;else if(/[,;:—–-]/.test(n))e.push({gap:!0,w:1.1}),t=0;else if(/\s/.test(n)){const r=e[e.length-1];r&&r.syl&&e.push({gap:!0,w:.32}),t=0}}for(;e.length&&e[e.length-1].gap;)e.pop();return e}function A_(i={}){const e=i.disabled||typeof window>"u"?null:window.AudioContext||window.webkitAudioContext||null,t=Il(zn(i.seed,860663));let n=null,s=null,r=!1,o=!1,a=!1,c=0,u=.8,f=!1,d=0,l="",p=0;const v=[],_=[],h=new Map,m={room:"",stepPhase:.6,foot:1,beaconClock:0,beaconIdx:-1,beaconMuteUntil:-1,beaconLevel:0,nextGroan:-1,nextChime:-1,wake:0,lastReap:0},x={on:!1,speech:null,auto:null};let b=null,M=-1,C=0,A=-1,g=null,y=null;const T=D=>{d++,l=String(D&&D.message||D).slice(0,240)},E=()=>r?c:n.currentTime,z=()=>!!s&&!a&&(r||n.state==="running"),L=D=>{const R=n.createGain();return R.gain.value=D,R},F=(D,R,w,S)=>{const N=n.createBiquadFilter();return N.type=D,N.frequency.value=R,w!==void 0&&(N.Q.value=w),S!==void 0&&(N.gain.value=S),N},U=(...D)=>{for(let R=0;R<D.length-1;R++)D[R].connect(D[R+1]);return D[D.length-1]},G=(D,R=1)=>{const w=n.createBufferSource();return w.buffer=D,w.loop=!0,w.playbackRate.value=R,w.start(0,t()*(D.duration-.2)),_.push(w),w},W=(D,R)=>{const w=n.createOscillator();return w.type=D,w.frequency.value=R,w.start(0),_.push(w),w},B=(D,R,w,S)=>{h.get(D)!==w&&(h.set(D,w),R.setTargetAtTime(w,E(),Math.max(.005,S)))};function oe(){const D=n.sampleRate,R=Il(5352222),w=(J,he)=>{const Z=n.createBuffer(1,Math.floor(D*J),D);return he(Z.getChannelData(0)),Z},S=(J,he)=>{const Z=J.length;for(let Q=0;Q<he;Q++){const we=Q/he;J[Q]=J[Q]*we+J[Z-he+Q]*(1-we)}},N=w(2,J=>{for(let he=0;he<J.length;he++)J[he]=R()*2-1}),ee=w(4,J=>{let he=0,Z=0;for(let Q=0;Q<J.length;Q++)he=(he+.02*(R()*2-1))/1.02,J[Q]=he,Z=Math.max(Z,Math.abs(he));for(let Q=0;Q<J.length;Q++)J[Q]/=Z;S(J,Math.floor(D*.25))}),H=w(3,J=>{for(let Z=0;Z<J.length;Z++)J[Z]=0;const he=Math.floor(114);for(let Z=0;Z<he;Z++){const Q=Math.floor(R()*(J.length-64)),we=(.2+.8*R()*R())*(R()<.5?-1:1),O=2+Math.floor(R()*22);for(let fe=0;fe<O;fe++)J[Q+fe]+=we*(1-fe/O)*(R()*2-1+.6)}});return{white:N,brown:ee,crackle:H}}function q(D,R,w){const S=n.sampleRate,N=Math.floor(S*D),ee=n.createBuffer(2,N,S),H=Il(w);for(let J=0;J<2;J++){const he=ee.getChannelData(J);let Z=0,Q=0;for(let O=0;O<N;O++){const fe=O/N,ge=Math.min(1,.02+R*fe);Z+=(1-ge*.92)*(H()*2-1-Z),he[O]=Z*Math.pow(1-fe,2)*Math.exp(-3.2*fe)*Math.min(1,O/(S*.004)),Q+=he[O]*he[O]}const we=1/Math.sqrt(Q||1);for(let O=0;O<N;O++)he[O]*=we}return ee}function te(){const R=new Float32Array(2049);for(let w=0;w<2049;w++){const S=w/2048*2-1,N=Math.abs(S);R[w]=Math.sign(S)*(N<=.5?N:.5+.45*Math.tanh((N-.5)/.45))}return R}function se(D){n=D,r=typeof n.startRendering=="function";const R={};R.buf=oe(),R.masterIn=L(1),R.master=L(u),R.mute=L(f?0:1);const w=L(.72);let S=R.master;if(R.masterIn.connect(R.master),n.createDynamicsCompressor){const H=n.createDynamicsCompressor();H.threshold.value=-8,H.knee.value=6,H.ratio.value=6,H.attack.value=.004,H.release.value=.22,S.connect(H),S=H}if(S.connect(w),S=w,n.createWaveShaper){const H=n.createWaveShaper();H.curve=te(),S.connect(H),S=H}if(S.connect(R.mute),R.mute.connect(n.destination),R.duck=L(1),R.duck.connect(R.masterIn),R.worldIn=L(1),R.vacLP=F("lowpass",18e3,.6),R.vacGain=L(1),U(R.worldIn,R.vacLP,R.vacGain,F("lowshelf",190,void 0,3.5),F("lowpass",5200,.5),R.duck),R.bodyIn=L(1),U(R.bodyIn,F("lowpass",1100,.6),F("lowshelf",160,void 0,4),R.duck),R.innerIn=L(1),U(R.innerIn,F("lowpass",7e3,.5),R.duck),R.uiIn=L(1),R.uiIn.connect(R.masterIn),R.revIn=L(1),R.revS=L(0),R.revL=L(0),n.createConvolver){const H=n.createConvolver(),J=n.createConvolver();H.normalize=!1,J.normalize=!1,H.buffer=q(.42,.5,11),J.buffer=q(3.4,1.1,23),U(R.revIn,H,R.revS,R.worldIn),U(R.revIn,J,R.revL,R.worldIn)}R.radioIn=L(1);const N=n.createWaveShaper?n.createWaveShaper():L(1);if(n.createWaveShaper){const H=new Float32Array(1025);for(let J=0;J<1025;J++){const he=J/512-1;H[J]=Math.tanh(2.6*he)/Math.tanh(2.6)}N.curve=H}U(R.radioIn,F("highpass",330,.8),F("highpass",330,.8),F("lowpass",2900,.8),N,F("highpass",300,.7),F("lowpass",3e3,.7),F("lowpass",3e3,.7),L(.55),R.masterIn),R.carrier=L(0),U(G(R.buf.white),F("bandpass",1700,.7),L(.05),R.carrier),U(G(R.buf.crackle,.8),L(.16),R.carrier),R.carrier.connect(R.radioIn),R.hum=L(1),R.life=L(1),U(R.hum,R.life,R.worldIn),R.room={};for(const H of Yu)R.room[H]=L(0),R.room[H].connect(R.hum);const ee=(H,J,he)=>{const Z=W("sine",H),Q=L(J);Z.connect(Q),Q.connect(he)};{const H=R.room.airlock;U(W("sawtooth",58),F("lowpass",170,.8),L(.11),H),U(W("sine",116.4),L(.035),H);const J=L(.02);U(G(R.buf.white),F("bandpass",6200,.8),J,H),ee(.13,.008,J.gain),U(G(R.buf.white,.7),F("bandpass",480,6),L(.03),H),U(G(R.buf.brown),F("lowpass",140,.7),L(.16),H)}{const H=R.room.corridor,J=F("lowpass",250,.9);U(G(R.buf.brown),J,L(.34),H),ee(.07,60,J.frequency),U(W("sine",47),L(.1),H),U(W("sine",94.6),L(.03),H);const he=L(.011);U(G(R.buf.white,.9),F("bandpass",1100,1.2),he,H),ee(.045,.005,he.gain)}{const H=R.room.bay;U(W("sawtooth",100),F("lowpass",430,1),L(.05),H),U(W("sine",50),L(.11),H),U(W("sine",200.4),L(.014),H);const J=L(.006);U(W("square",100.1),F("bandpass",2600,8),J,H),ee(.31,.003,J.gain),U(G(R.buf.brown,.8),F("lowpass",110,.7),L(.3),H)}{const H=R.room.gallery;U(W("sine",31),L(.17),H),U(W("sine",31.35),L(.13),H),U(W("sine",62.3),L(.035),H),U(W("sine",93.1),L(.01),H),U(G(R.buf.brown,.6),F("lowpass",70,.7),L(.12),H),U(G(R.buf.white),F("bandpass",3e3,.5),L(.0014),H)}{R.wake=L(0),R.wake.connect(R.hum);const H=L(.5);R.wake.connect(H),H.connect(R.revIn);const J=L(1);for(const[he,Z,Q]of[[650,5,1],[1080,6,.7],[2900,8,.25]])U(J,F("bandpass",he,Z),L(Q),R.wake);[[155.56,.05],[233.08,.071],[311.13,.093],[329.63,.113]].forEach(([he,Z])=>{const Q=L(.035);U(W("sawtooth",he),Q,J),U(W("sawtooth",he*1.004),L(.02),J),ee(Z,.025,Q.gain)}),[[1244.51,.17],[1864.66,.11],[2489.02,.23],[3322.44,.07]].forEach(([he,Z])=>{const Q=L(.007);U(W("sine",he),Q,R.wake),ee(Z,.006,Q.gain)})}R.tail=L(0),U(G(R.buf.crackle,1.3),F("highpass",2400,.7),R.tail,R.innerIn),U(W("sine",3140),L(.012),R.tail),s=R}function _e(D){for(const R of D.srcs)try{R.stop()}catch{}for(const R of D.nodes)try{R.disconnect()}catch{}}const K=D=>{r||_e(D)};function Y(D){for(let R=v.length-1;R>=0;R--)v[R].end<=D&&(K(v[R]),v.splice(R,1))}function ie(D){const R=v.indexOf(D);R>=0&&(_e(D),v.splice(R,1))}function ve(D,R,w={}){if(Y(E()),v.length>=E_){const H=v.findIndex(J=>J.end!==1/0);H>=0&&(K(v[H]),v.splice(H,1))}const S=L(w.g===void 0?1:w.g),N={end:D+R+.1,nodes:[S],srcs:[],out:S};let ee=S;if(w.lp){const H=F("lowpass",w.lp,.7);ee.connect(H),ee=H,N.nodes.push(H)}if(w.pan&&n.createStereoPanner){const H=n.createStereoPanner();H.pan.value=ri(w.pan,-1,1),ee.connect(H),ee=H,N.nodes.push(H)}for(const[H,J]of[["w",s.worldIn],["b",s.bodyIn],["i",s.innerIn],["rev",s.revIn],["radio",s.radioIn],["ui",s.uiIn]]){const he=w[H];if(he)if(he===1)ee.connect(J);else{const Z=L(he);ee.connect(Z),Z.connect(J),N.nodes.push(Z)}}return v.push(N),v.length>p&&(p=v.length),N}const Me=(D,R)=>{D.end!==1/0&&R+.1>D.end&&(D.end=R+.1)};function j(D,R,w,S,N,ee,H,J=.004,he=0){const Z=n.createOscillator(),Q=n.createGain();return Z.type=R,Z.frequency.setValueAtTime(w,N),S&&S!==w&&Z.frequency.exponentialRampToValueAtTime(Math.max(1,S),N+ee),Q.gain.setValueAtTime(0,N),Q.gain.linearRampToValueAtTime(H,N+J),he>0&&Q.gain.setValueAtTime(H,N+J+he),Q.gain.exponentialRampToValueAtTime(1e-4,N+ee),Z.connect(Q),Q.connect(D.out),Z.start(N),Z.stop(N+ee+.03),D.srcs.push(Z),D.nodes.push(Z,Q),Me(D,N+ee+.05),{o:Z,g:Q}}function Ee(D,R,w,S,N,ee,H,J,he,Z=.002,Q=0){const we=n.createBufferSource(),O=F(w,S,ee),fe=n.createGain();return we.buffer=R,we.loop=!0,N&&N!==S&&(O.frequency.setValueAtTime(S,H),O.frequency.exponentialRampToValueAtTime(N,H+J)),fe.gain.setValueAtTime(0,H),fe.gain.linearRampToValueAtTime(he,H+Z),Q>0&&fe.gain.setValueAtTime(he,H+Z+Q),fe.gain.exponentialRampToValueAtTime(1e-4,H+J),we.connect(O),O.connect(fe),fe.connect(D.out),we.start(H,t()*(R.duration-.2)),we.stop(H+J+.03),D.srcs.push(we),D.nodes.push(we,O,fe),Me(D,H+J+.05),{s:we,f:O,g:fe}}function Ye(D,R,w,S,N,ee,H,J,he){const Z=n.createOscillator(),Q=n.createGain(),we=ee+H+J;return Z.type=R,Z.frequency.setValueAtTime(w,N),S&&S!==w&&Z.frequency.linearRampToValueAtTime(S,N+we),Q.gain.setValueAtTime(0,N),Q.gain.linearRampToValueAtTime(he,N+ee),Q.gain.setValueAtTime(he,N+ee+H),Q.gain.linearRampToValueAtTime(0,N+we),Z.connect(Q),Q.connect(D.out),Z.start(N),Z.stop(N+we+.03),D.srcs.push(Z),D.nodes.push(Z,Q),Me(D,N+we+.05),{o:Z,g:Q}}function Fe(D,R,w,S,N,ee=[1,2.31,3.87,5.13]){ee.forEach((H,J)=>j(D,"sine",R*H,0,w,S/(1+J*.6),N/(1+J*.9),.002))}function Xe(D,R,w,S=2400){Ee(D,s.buf.white,"bandpass",S,0,1.2,R,.014,w,.001),j(D,"sine",S*.6,S*.3,R,.02,w*.6,.001)}function at(D){const R=ve(E(),0,D);return R.end=1/0,R.out.gain.value=0,R.osc=(w,S)=>{const N=n.createOscillator();return N.type=w,N.frequency.value=S,N.start(E()),R.srcs.push(N),R.nodes.push(N),N},R.noise=(w,S=1)=>{const N=n.createBufferSource();return N.buffer=w,N.loop=!0,N.playbackRate.value=S,N.start(E(),t()*(w.duration-.2)),R.srcs.push(N),R.nodes.push(N),N},R.add=(...w)=>(R.nodes.push(...w),U(...w,R.out)),R}function ye(D,R){const w=E();D.out.gain.cancelScheduledValues(w),D.out.gain.setTargetAtTime(0,w,Math.max(.005,R/4)),D.end=w+R+.1;for(const S of D.srcs)try{S.stop(w+R+.05)}catch{}}function P(D,R,w){const S=ve(D,.2,{b:1,pan:w*.12});j(S,"sine",112+t()*10,56,D,.12,.55*R,.003),Ee(S,s.buf.brown,"lowpass",320,0,.7,D,.07,.5*R,.002);const N=ve(D,.3,{w:1,rev:.35,pan:w*.22});Ee(N,s.buf.white,"bandpass",2100+t()*500,0,1.3,D,.04,.16*R,.001),Fe(N,404+t()*46,D,.15,.06*R,[1,2.31,3.87])}function $(D){const R=2.6+t()*1.8,w=58+t()*44,S=.93+t()*.14,N=ve(D,R,{w:1,rev:.9,pan:t()*1.4-.7});Ye(N,"sine",w,w*S,D,R*.3,R*.2,R*.5,.1),Ye(N,"sine",w*1.497,w*1.497*S,D+.2,R*.3,R*.1,R*.5,.045),Ye(N,"triangle",w*2.71,w*2.71*(2-S),D,R*.4,0,R*.5,.012),Ee(N,s.buf.brown,"bandpass",w*4,w*4*S,14,D,R,.25,R*.3)}function le(D,R){const w=$u[Math.floor(t()*$u.length)],S=ve(D,2.2,{w:1,rev:.8,pan:t()*1.6-.8});j(S,"sine",w,w*.998,D,2.1,.03*R,.003),j(S,"sine",w*2.76,0,D,.7,.01*R,.002),j(S,"sine",w*5.4,0,D,.25,.004*R,.001)}function pe(D,R,w){const S=ur[w]||ur.bay,N=.13*R*S.beacon,ee=932.33*(.86+.14*R),H=ve(D,.7,{w:1,rev:.45,lp:S.beaconLP});for(let J=0;J<3;J++){const he=D+J*.2;j(H,"sine",ee,0,he,.1,N,.004,.065),j(H,"sine",ee*2,0,he,.1,N*.22,.004,.06),j(H,"triangle",ee*3.01,0,he,.06,N*.06,.003,.03)}}function be(D,R){D=ri(zn(D,0),0,.25),R=R||{};const w=E(),S=ur[R.room]?R.room:m.room||"airlock",N=Math.max(0,zn(R.speed,0)),ee=ri(zn(R.wake,0),0,1),H=ri(zn(R.vacuum,0),0,1),J=ri(zn(R.beacon,0),0,1),he=ri(zn(R.tailFlicker,0),0,1);if(S!==m.room){const Q=!m.room;m.room=S;for(const we of Yu)B("room."+we,s.room[we].gain,we===S?ur[we].hum:0,Q?.12:.55);B("revS",s.revS.gain,ur[S].revS,.5),B("revL",s.revL.gain,ur[S].revL,.5),m.nextGroan=S==="corridor"?w+2.5+t()*5:-1}B("vacF",s.vacLP.frequency,Math.round(18e3*Math.pow(140/18e3,H)),.12),B("vacG",s.vacGain.gain,Math.round((1-.4*H)*100)/100,.12),B("wake",s.wake.gain,Math.round(Math.pow(ee,1.3)*60)/100,.4),B("tail",s.tail.gain,Math.round(he*4)/100,.05),m.wake=ee,N>.25?(m.stepPhase+=D*Math.min(4.2,1.15+.42*N),m.stepPhase>=1&&(m.stepPhase-=Math.floor(m.stepPhase),m.foot=-m.foot,P(w+.005,.4+Math.min(.32,N*.065),m.foot))):m.stepPhase=.6,m.beaconClock=Number.isFinite(R.t)?R.t:m.beaconClock+D,m.beaconLevel=J;const Z=Math.floor(m.beaconClock/2);Z!==m.beaconIdx&&(m.beaconIdx=Z,J>.02&&w>=m.beaconMuteUntil&&pe(w+.01,J,S)),m.nextGroan>=0&&w>=m.nextGroan&&($(w+.02),m.nextGroan=w+9+t()*14),ee>.05?(m.nextChime<0&&(m.nextChime=w+.6+t()*1.5),w>=m.nextChime&&(le(w+.01,ee),m.nextChime=w+(5-3.9*ee)*(.5+t()))):m.nextChime=-1,b&&w-C>1.2&&(ye(b,.2),b=null,M=-1,A=-1),w-m.lastReap>.5&&(Y(w),m.lastReap=w),r&&(c+=D)}function me(D,R){const w=ve(D,.12,{radio:1});return Ee(w,s.buf.white,"bandpass",R?1500:1100,0,.8,D,R?.07:.11,.9,.001),j(w,"square",R?1250:820,0,D,.025,.35,.001),w}function xe(D){x.auto&&(s.carrier.gain.cancelScheduledValues(D),s.duck.gain.cancelScheduledValues(D),x.auto.end>D&&ie(x.auto.click),x.auto=null)}function Re(D){const R=x.speech;if(R){if(R.end>D){R.v.out.gain.cancelScheduledValues(D),R.v.out.gain.setTargetAtTime(0,D,.012),R.v.end=D+.15;for(const w of R.v.srcs)try{w.stop(D+.1)}catch{}}x.speech=null}}function Ze(){const D=E();xe(D),x.on||me(D,!0),x.on=!0,s.carrier.gain.setTargetAtTime(1,D,.02),s.duck.gain.setTargetAtTime(.42,D,.07)}function V(){const D=E();xe(D),Re(D),x.on&&me(D,!1),x.on=!1,s.carrier.gain.setTargetAtTime(0,D,.03),s.duck.gain.setTargetAtTime(1,D+.05,.22)}function lt(D,R){const w=E(),S=T_(String(D??""));if(Re(w),xe(w),!S.length)return 0;let N=0;for(const dn of S)N+=dn.w;const ee=zn(R,0)>0?Math.min(R,120):ri(N*.17,.3,40),H=ee/N,J=x.on?.04:.16,he=w+J,Z=he+ee;x.on||(me(w,!0),s.carrier.gain.setTargetAtTime(1,w,.02),s.duck.gain.setTargetAtTime(.42,w,.07),s.carrier.gain.setTargetAtTime(0,Z+.12,.03),s.duck.gain.setTargetAtTime(1,Z+.17,.22),x.auto={click:me(Z+.12,!1),end:Z+.12});const Q=ve(he,ee+.2,{radio:1}),we=n.createOscillator(),O=L(0),fe=F("bandpass",500,5),ge=F("bandpass",1300,7),Ue=F("bandpass",2450,9),Ie=L(1),Ne=L(.7),tt=L(.22),ut=n.createBufferSource(),Le=F("bandpass",2100,1.1),et=L(0),ft=88+t()*6;we.type="sawtooth",we.frequency.setValueAtTime(ft*1.1,he),we.connect(O),O.connect(fe),O.connect(ge),O.connect(Ue),U(fe,Ie,Q.out),U(ge,Ne,Q.out),U(Ue,tt,Q.out),ut.buffer=s.buf.white,ut.loop=!0,U(ut,Le,et,Q.out),O.gain.setValueAtTime(0,he),et.gain.setValueAtTime(0,he);const Ve=new Array(S.length);let Pt="p",tn=!0;for(let dn=S.length-1;dn>=0;dn--)S[dn].gap&&S[dn].end?(Pt=S[dn].end,tn=!0):S[dn].syl&&(Ve[dn]=tn?Pt:"",tn=!1);let Xt=he,Pr=0,Ss=0,Dr=!1;for(let dn=0;dn<S.length;dn++){const ts=S[dn],Bn=ts.w*H;if(ts.gap)O.gain.linearRampToValueAtTime(0,Xt+Math.min(.05,Bn*.6)),ts.end&&(Ss=0),Dr=!0;else{const kn=ts.cons?Math.min(.07,Bn*.32):0,ws=.75+t()*.25,bo=Pr%3===0;Dr&&(O.gain.setValueAtTime(0,Xt),Dr=!1);const[qs,So]=S_[ts.v];let Ys=ft*(1.12-Math.min(.2,Ss*.018))*(bo?1.07:1)*(.975+t()*.05);Ve[dn]==="p"?Ys*=.86:Ve[dn]==="q"&&(Ys*=1.16),kn&&(O.gain.linearRampToValueAtTime(.12*ws,Xt+kn*.4),et.gain.setValueAtTime(0,Xt),et.gain.linearRampToValueAtTime(.5,Xt+kn*.35),et.gain.linearRampToValueAtTime(0,Xt+kn),Le.frequency.setValueAtTime(1500+t()*1300,Xt)),fe.frequency.setTargetAtTime(qs*(.93+t()*.14),Xt+kn*.5,.022),ge.frequency.setTargetAtTime(So*(.93+t()*.14),Xt+kn*.5,.028),we.frequency.setTargetAtTime(Ys,Xt,.035),O.gain.linearRampToValueAtTime(ws,Xt+kn+Math.min(.03,(Bn-kn)*.3)),O.gain.linearRampToValueAtTime(ws*.7,Xt+kn+(Bn-kn)*.8),O.gain.linearRampToValueAtTime(ws*.3,Xt+Bn),Pr++,Ss++}Xt+=Bn}return O.gain.linearRampToValueAtTime(0,Z+.03),we.start(he),we.stop(Z+.1),ut.start(he,t()),ut.stop(Z+.1),Q.srcs.push(we,ut),Q.nodes.push(we,O,fe,ge,Ue,Ie,Ne,tt,ut,Le,et),x.speech={v:Q,end:Z},ee}const Te={wheel(D){const R=E(),w=ri(zn(D,0),0,1);if(!b){const J=at({w:.9,b:.5,rev:.25});J.bp=F("bandpass",900,9),J.add(J.noise(s.buf.white),J.bp,L(.9)),J.sq=J.osc("sawtooth",73),J.sqf=F("bandpass",1400,12),J.add(J.sq,J.sqf,L(.16)),J.add(J.noise(s.buf.brown,1.4),F("lowpass",210,.8),L(.7)),b=J}const S=M<0?.02:Math.abs(w-M),N=.45+.55*Math.min(1,S*40);M=w,C=R,b.bp.frequency.setTargetAtTime(720+520*w,R,.05),b.sqf.frequency.setTargetAtTime(1250+700*w+200*Math.sin(w*37),R,.04),b.sq.frequency.setTargetAtTime(66+30*w,R,.05);const ee=b.out.gain;ee.cancelScheduledValues(R),ee.setTargetAtTime(.42*N,R,.03),ee.setTargetAtTime(0,R+.13,.07);const H=Math.floor(w*10);if(H!==A){if(A>=0){const J=ve(R,.1,{w:.8,b:.5,rev:.3});Xe(J,R,.3,1700),Fe(J,610,R,.08,.08,[1,2.4])}A=H}},hatchOpen(){const D=E(),R=ve(D,2,{w:1,b:.3,rev:.5});j(R,"sine",72,38,D,.45,.8,.004),Ee(R,s.buf.brown,"lowpass",600,180,.7,D,.3,.7,.002),Fe(R,211,D,.7,.16,[1,2.31,3.47,5.2]),Ee(R,s.buf.white,"bandpass",4200,1400,.9,D+.12,1.5,.16,.05,.25);const w=j(R,"sawtooth",182,139,D+.25,.8,.05,.1,.3),S=F("bandpass",900,10);w.g.disconnect(),U(w.g,S,R.out),R.nodes.push(S)},pickup(){const D=E(),R=ve(D,.4,{w:.7,b:.6,rev:.2});Fe(R,1320,D,.18,.12,[1,1.6,2.41]),j(R,"sine",165,88,D,.08,.45,.002),Xe(R,D+.07,.14,2800)},gripOn(){const D=E(),R=ve(D,.3,{w:.5,b:.7,i:.25});j(R,"sine",170,430,D,.14,.3,.01,.06),j(R,"triangle",340,860,D,.12,.07,.01,.05),Xe(R,D+.11,.22,2100)},gripOff(){const D=E(),R=ve(D,.3,{w:.5,b:.7,i:.25});Xe(R,D,.2,1800),j(R,"sine",430,150,D,.16,.28,.006),j(R,"triangle",860,300,D,.12,.06,.006)},gripHold(D){if(D&&!g){const R=at({w:.45,b:.8}),w=E(),S=L(1),N=L(.25),ee=R.osc("sine",11.3);R.add(R.osc("sawtooth",82),F("lowpass",310,1.2),S),R.nodes.push(N),ee.connect(N),N.connect(S.gain),R.add(R.osc("sine",164.4),L(.35)),R.add(R.osc("sine",246),L(.08)),R.out.gain.setTargetAtTime(.11,w,.08),g=R}else!D&&g&&(ye(g,.18),g=null)},throwObj(){const D=E(),R=ve(D,.5,{w:.9,b:.5,rev:.25}),w=Ee(R,s.buf.white,"bandpass",420,0,1.4,D,.3,.3,.05,.06);w.f.frequency.setValueAtTime(420,D),w.f.frequency.exponentialRampToValueAtTime(1900,D+.11),w.f.frequency.exponentialRampToValueAtTime(340,D+.3),j(R,"sine",150,52,D,.16,.6,.003),j(R,"sine",430,120,D,.09,.14,.003)},cutOn(){if(y)return;const D=E(),R=ve(D,.2,{w:.8,b:.4,i:.2,rev:.2});Ee(R,s.buf.white,"highpass",2600,0,.7,D,.07,.4,.001),j(R,"sawtooth",1900,240,D,.06,.12,.001);const w=at({w:.9,b:.35,i:.25,rev:.15}),S=L(.085),N=L(.035),ee=w.osc("sine",23);w.add(w.noise(s.buf.white),F("bandpass",3300,.9),S),w.nodes.push(N),ee.connect(N),N.connect(S.gain),w.add(w.noise(s.buf.crackle,1.7),F("highpass",1400,.7),L(.5)),w.add(w.noise(s.buf.crackle,.9),F("bandpass",2400,2),L(.4)),w.add(w.osc("sawtooth",118),F("bandpass",1900,3),L(.05)),w.add(w.osc("sine",59),L(.1)),w.out.gain.setTargetAtTime(.5,D+.02,.03),y=w},cutOff(){if(!y)return;const D=E();ye(y,.1),y=null;const R=ve(D,.3,{w:.8,b:.4,i:.2});j(R,"sawtooth",900,140,D,.14,.07,.002),Ee(R,s.buf.white,"bandpass",3e3,700,1,D,.2,.08,.002)},overheat(){const D=E(),R=ve(D,1.8,{w:.6,i:.55,b:.3,rev:.2});Xe(R,D,.5,2600),j(R,"sine",140,70,D,.06,.4,.002),j(R,"sine",2050,3500,D+.06,1.5,.085,.12,.5),j(R,"sine",2071,3540,D+.06,1.3,.035,.15,.4),Ee(R,s.buf.white,"bandpass",5200,3400,1.5,D+.05,1.6,.11,.08,.4)},socket(){const D=E(),R=ve(D,1,{w:1,b:.5,rev:.35});Xe(R,D,.5,1700),j(R,"sine",128,66,D,.1,.6,.002),Xe(R,D+.075,.3,2300),Fe(R,520,D+.075,.2,.07,[1,2.2,3.6]),j(R,"sine",220,440,D+.16,.5,.11,.08,.2),j(R,"sine",330,660,D+.16,.5,.05,.1,.2),j(R,"sawtooth",55,110,D+.16,.6,.05,.1,.25)},doorPower(){const D=E(),R=ve(D,2.4,{w:1,b:.25,rev:.5});Xe(R,D,.5,1500),j(R,"sine",96,58,D,.12,.6,.002);const w=j(R,"sawtooth",58,236,D+.05,.75,.09,.2,.35),S=F("lowpass",820,2);w.g.disconnect(),U(w.g,S,R.out),R.nodes.push(S),Ee(R,s.buf.brown,"bandpass",290,210,1.1,D+.5,1.5,.75,.2,.8),Ye(R,"sine",48,43,D+.5,.2,.8,.4,.3),Ee(R,s.buf.white,"bandpass",2600,1700,3,D+.5,1.4,.035,.2,.7),j(R,"sine",62,34,D+1.85,.4,.8,.004),Fe(R,176,D+1.85,.5,.1)},beaconStep(D){const R=ri(Math.round(zn(D,1)),1,3)-1,w=b_[R],S=E(),N=ve(S,.8,{w:1,i:.2,rev:.5});Xe(N,S,.3,1400),j(N,"sine",w,w*.94,S,.6,.2,.006,.08),j(N,"sine",w*1.5,w*1.41,S,.4,.06,.006,.05),j(N,"triangle",w/2,w*.46,S,.55,.12,.01,.08),j(N,"sine",70-R*9,40,S,.3,.35,.004)},beaconDown(){const D=E(),R=ve(D,6,{w:1,rev:.6}),w=j(R,"sine",932,84,D,1,.2,.01,.5),S=j(R,"sawtooth",466,42,D,1,.05,.01,.5),N=L(1);w.g.disconnect(),S.g.disconnect(),w.g.connect(N),S.g.connect(N),N.connect(R.out),R.nodes.push(N);for(let J=0;J<14;J++){const he=D+.12+J*.058*(1+J*.03);N.gain.setValueAtTime(J%2?1:.08,he)}Ee(R,s.buf.crackle,"highpass",900,0,.7,D+.1,1,.5,.2,.5);const ee=s.hum.gain;ee.cancelScheduledValues(D),ee.setTargetAtTime(.06,D+.5,.22),ee.setTargetAtTime(1,D+2.5,1.1),m.beaconMuteUntil=D+4;const H=D+2.4;j(R,"sine",58,27,H,3.2,.9,.012,.15),j(R,"sine",87,40,H,1.6,.3,.01),Ee(R,s.buf.brown,"lowpass",190,60,.7,H,2.2,.9,.01,.1),Fe(R,97,H,2.4,.05,[1,2.76,4.1])},wrong(){const D=E(),R=ve(D,.5,{w:.6,i:.5,rev:.15,lp:900});for(const w of[0,.14])j(R,"square",110,104,D+w,.11,.16,.004,.06),j(R,"square",116.5,110,D+w,.11,.12,.004,.06);j(R,"sine",55,50,D,.3,.25,.005)},crawlerWake(){const D=E(),R=ve(D,1.6,{w:1,rev:.6});Ee(R,s.buf.crackle,"bandpass",2400,3300,1.5,D,1.1,.9,.7,.2);const w=j(R,"sawtooth",44,74,D,1.2,.3,.5,.3),S=F("lowpass",230,2);w.g.disconnect(),U(w.g,S,R.out),R.nodes.push(S);for(let N=0;N<3;N++)Xe(R,D+.9+N*.11,.3,3200+N*300),j(R,"sine",1850+N*170,0,D+.9+N*.11,.04,.08,.001)},crawlerStep(D,R){const w=Math.max(0,zn(D,3)),S=E(),N=1/(1+w/4*(w/4));if(N<.012)return;const ee=ve(S,.15,{w:1,rev:.2+Math.min(.6,w*.05),pan:zn(R,0),lp:ri(9500/(1+w/5),500,9500)});Ee(ee,s.buf.white,"bandpass",3300+t()*600,0,2.2,S,.022,.5*N,.001),j(ee,"sine",1820+t()*380,0,S,.035,.16*N,.001),j(ee,"sine",240+t()*30,150,S,.04,.2*N,.001)},crawlerAttack(D){const R=E(),w=ve(R,.7,{w:1,rev:.45,pan:zn(D,0)}),S=j(w,"sawtooth",520,0,R,.5,.3,.02,.2),N=F("bandpass",1800,4);S.o.frequency.exponentialRampToValueAtTime(1420,R+.2),S.o.frequency.exponentialRampToValueAtTime(300,R+.5),S.g.disconnect(),U(S.g,N,w.out),w.nodes.push(N),j(w,"square",527,1433,R,.22,.05,.02),Ee(w,s.buf.white,"bandpass",4200,2600,1.2,R,.4,.22,.03,.1);for(let ee=0;ee<4;ee++)Xe(w,R+.03+ee*.045,.3,3400)},crawlerHit(){const D=E(),R=ve(D,.5,{w:1,rev:.4});Fe(R,310,D,.35,.28,[1,2.39,3.83,6.22]),Ee(R,s.buf.white,"bandpass",2e3,800,.9,D,.07,.5,.001),j(R,"sawtooth",920,590,D+.02,.13,.07,.004),j(R,"sine",120,60,D,.09,.5,.002)},crawlerDie(){const D=E(),R=ve(D,1.8,{w:1,rev:.55}),w=j(R,"sawtooth",900,78,D,1.15,.24,.01,.3),S=F("bandpass",1700,3);S.frequency.setValueAtTime(1700,D),S.frequency.exponentialRampToValueAtTime(260,D+1.15),w.g.disconnect(),U(w.g,S,R.out),R.nodes.push(S);let N=D+.05;for(let ee=0;ee<9;ee++)Xe(R,N,.3-ee*.02,3300-ee*150),N+=.05+ee*.022;j(R,"sine",84,40,D+1.2,.3,.7,.003),Ee(R,s.buf.brown,"lowpass",400,120,.7,D+1.2,.25,.6,.002),Fe(R,262,D+1.2,.4,.08)},hurt(){const D=E(),R=ve(D,.9,{b:1,i:.5});j(R,"sine",96,44,D,.28,.95,.003),Ee(R,s.buf.brown,"lowpass",260,90,.7,D,.2,.9,.002),j(R,"sine",3120,3080,D+.02,.8,.02,.03),Ee(R,s.buf.white,"bandpass",900,500,1,D,.06,.2,.001)},death(){const D=E(),R=ve(D,3.6,{b:1,i:.4,w:.3});j(R,"sine",112,23,D,3.2,.8,.01,.3),j(R,"sine",168,31,D,2.4,.25,.01,.2),Ee(R,s.buf.brown,"lowpass",500,50,.7,D,2.6,.7,.01,.2),Ee(R,s.buf.white,"bandpass",1400,300,.8,D+.1,1.8,.1,.25,.2),j(R,"sine",2960,2890,D,2.6,.022,.05);const w=s.life.gain;w.cancelScheduledValues(D),w.setTargetAtTime(.12,D,.7)},respawn(){const D=E(),R=ve(D,2.2,{b:.5,i:.8,w:.3,rev:.2}),w=s.life.gain;w.cancelScheduledValues(D),w.setTargetAtTime(1,D+.2,.6),Ye(R,"sine",55,110,D,.9,.2,.9,.3),Ye(R,"sine",82.5,165,D,1,.1,.8,.12),Ee(R,s.buf.white,"bandpass",500,2600,.8,D,1.4,.09,.9,.1),j(R,"sine",880,0,D+1.1,.09,.07,.004,.04),j(R,"sine",1318.5,0,D+1.24,.14,.07,.004,.05)},logOpen(){const D=E(),R=ve(D,1.1,{w:.4,i:.7});Xe(R,D,.4,1900),j(R,"sine",150,90,D,.05,.3,.002),Ee(R,s.buf.white,"bandpass",2700,3100,.7,D+.06,.9,.06,.08,.5),Ee(R,s.buf.crackle,"highpass",1200,0,.7,D+.06,.9,.3,.1,.5),j(R,"sine",1e3,985,D+.12,.2,.025,.02,.1)},signPick(D){const R=ri(Math.round(zn(D,0)),0,3),w=M_[R],S=E(),N=ve(S,.8,{w:.9,i:.25,rev:.45});Xe(N,S,.12,2e3),j(N,"sine",w,w*.997,S,.7,.2,.004,.03),j(N,"sine",w*2.76,0,S,.3,.045,.003),j(N,"triangle",w*2,0,S,.45,.04,.004)},sealOpen(){const D=E(),R=ve(D,8,{w:1,b:.35,rev:.6});Ee(R,s.buf.brown,"lowpass",95,150,.8,D,7,1,1.2,4.2);const w=j(R,"sawtooth",37,44,D+.2,6.3,.22,.8,4.4),S=F("lowpass",250,2.5);w.g.disconnect(),U(w.g,S,R.out),R.nodes.push(S),Ye(R,"sine",141,97,D+.5,1.4,.8,2.6,.07),Ye(R,"sine",212,168,D+1.4,1.2,.4,2.8,.035),Ee(R,s.buf.brown,"bandpass",520,380,9,D+.8,5,.5,1,2.5),j(R,"sine",66,33,D,.5,.7,.005);let N=D+.25;for(let ee=0;ee<30;ee++){const H=ve(N,.3,{w:1,rev:.5,pan:t()*1.6-.8}),J=.1+.22*t(),he=3e3+t()*4200;Ee(H,s.buf.white,"highpass",3400+t()*1500,0,.8,N,.008+t()*.02,J,.001),j(H,"sine",he,he*.98,N,.05+t()*.18,J*.35,.001),j(H,"sine",he*1.47,0,N,.04+t()*.06,J*.18,.001),N+=.04+t()*.16+ee*.012}j(R,"sine",60,29,D+6.5,1.3,.85,.006),Ee(R,s.buf.brown,"lowpass",220,70,.7,D+6.5,1,.8,.004)},reveal(){const D=E(),R=ve(D,17,{w:1,rev:.7}),w=[[32.7,.42,5,5,6.5],[32.9,.3,6,4,6.5],[49,.26,5.5,4.5,6],[65.41,.2,6,4,6],[65.7,.1,7,3,6],[98,.11,7,3,5.5],[155.56,.05,8,2.5,5],[233.08,.022,9,2,4.5],[1244.51,.004,9,2,4],[1864.66,.0025,10,1.5,4]];for(const[S,N,ee,H,J]of w)Ye(R,"sine",S,S,D,ee,H,J,N);Ye(R,"triangle",65.41,65.41,D,7,3,6,.05),Ee(R,s.buf.brown,"lowpass",60,120,.7,D,16,.5,6,4)},ui(){const D=E(),R=ve(D,.06,{ui:1});j(R,"sine",1800,1500,D,.022,.05,.001),Ee(R,s.buf.white,"highpass",3e3,0,.7,D,.008,.03,.001)},radioOpen:Ze,radioClose:V},He=(D,R)=>(...w)=>{if(!z())return R;try{return D(...w)}catch(S){return T(S),R}};function Se(){if(!s)return;const D=E(),R=!r&&n.state==="running";for(const[w,S]of[[s.master.gain,u],[s.mute.gain,f?0:1]])w.cancelScheduledValues(D),R?w.setTargetAtTime(S,D,.02):(w.setValueAtTime(S,D),w.value=S)}const ht={unlock(){if(a)return!1;try{if(!s){if(!e)return!1;se(new e({latencyHint:"interactive"})),o=!0}if(r)return!0;if(n.state!=="running"&&n.state!=="closed"&&n.resume){const D=n.resume();D&&D.then&&D.then(Se,()=>{})}return n.state==="running"}catch(D){return T(D),!1}},setMaster(D){u=ri(zn(D,u),0,1);try{Se()}catch(R){T(R)}},setMuted(D){f=!!D;try{Se()}catch(R){T(R)}},update:He(be),radioSpeak:He(lt,0),stats(){return{built:!!s,offline:r,state:n?n.state:"none",running:z(),voices:v.length,peakVoices:p,errors:d,lastError:l,sampleRate:n?n.sampleRate:0,time:s?E():0}},dispose(){if(!a){a=!0;try{for(const D of v)_e(D);v.length=0,b=g=y=null;for(const D of _){try{D.stop()}catch{}try{D.disconnect()}catch{}}if(_.length=0,s)try{s.mute.disconnect()}catch{}if(o&&n&&n.state!=="closed"&&n.close){const D=n.close();D&&D.catch&&D.catch(()=>{})}}catch(D){T(D)}}}};for(const D of Object.keys(Te))ht[D]=He(Te[D]);if(i.context)try{se(i.context)}catch(D){T(D),s=null}return ht}const Ln=new URLSearchParams(location.search),yi=Ln.get("bench")==="1",uo=Ln.get("probe")==="1",cs=!yi&&!uo||yi&&Ln.get("game")==="1",da=parseInt(Ln.get("seed")||"1",10)||1,R_=Math.max(0,Math.min(jr.length-1,parseInt(Ln.get("cam")||"0",10)||0)),Zu=Ln.get("fps")==="1"||uo,Is=Ln.get("touch")==="1"||Ln.get("touch")!=="0"&&typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches&&!yi,Ku=dr.includes(Ln.get("q"))?Ln.get("q"):"",C_=Math.max(0,Math.min(3,parseFloat(Ln.get("scale")||"0")||0)),Ju=Math.max(0,parseFloat(Ln.get("slow")||"0")||0),pa=(Ln.get("pp")||"").split(","),_i=document.documentElement;_i.dataset.drift="loading";function Df(i){_i.dataset.drift="error",_i.dataset.driftError=i;const e=document.getElementById("err");e.textContent="Игра не запустилась: "+i,e.hidden=!1,yi&&(window.__drift={ready:!1,error:i})}const fs=document.createElement("canvas");let Uc="";fs.addEventListener("webglcontextcreationerror",i=>{Uc=i.statusMessage||"без статуса"});document.body.appendChild(fs);let vi;try{vi=new Lv({canvas:fs,antialias:!1,preserveDrawingBuffer:yi,powerPreference:"high-performance"})}catch(i){Df((Uc?Uc+" / ":"")+String(i&&i.message||i))}if(vi)try{P_()}catch(i){console.error(i),Df(String(i&&i.stack||i).slice(0,400))}function P_(){const i=vi.getContext(),e=i.getExtension("WEBGL_debug_renderer_info"),t={version:i.getParameter(i.VERSION),renderer:e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER),vendor:e?i.getParameter(e.UNMASKED_VENDOR_WEBGL):i.getParameter(i.VENDOR)};_i.dataset.driftGl=`${t.version} | ${t.renderer}`;const n=String(t.renderer).replace(/^ANGLE \((.*)\)$/,"$1").replace(/, (OpenGL|Direct3D|Metal|Vulkan)[^,]*$/i,"").slice(0,70),s=window.devicePixelRatio||1,r=new t_({cssW:window.innerWidth,cssH:window.innerHeight,dpr:s,tier:Ku||(Is?"lite":"high"),lockTier:!!Ku||yi||uo||Is,lockScale:yi?1:C_});Ln.get("auto")==="0"&&(r.lockScale=r.scale,r.lockTier=!0),vi.setPixelRatio(r.scale),vi.setSize(window.innerWidth,window.innerHeight);const o=n_(vi,{seed:da,bench:yi});pa.includes("nomsaa")&&(o.ovr.msaa=0),pa.includes("nobloom")&&(o.ovr.bloom=!1),pa.includes("noprepass")&&(o.ovr.prepass=!1),pa.includes("ldr")&&(o.ovr.ldr=!0),o.applyTier(r.tier);const a=!yi&&!uo,c=a?y_({touch:Is}):null,u=a?A_():null,f=f_(o,da),d=m_(o,f,{seed:da,ui:c,audio:u,exhibit:!cs});cs&&Ln.get("start")&&d.skipTo(Ln.get("start"));const l=d.player;let p=R_,v=!yi||cs,_={};const h={fwd:0,strafe:0,run:!1,fire:!1,wheel:0,press:new Set};function m(){_=d.exhibitState(jr[p])}function x(K){cs?(d.update(K,h),h.press.clear()):(d.S.t+=K,tf(l,d.colliders(),K))}function b(){if(v)o.render(d.view(),cs?d.frame():{..._,t:d.S.t});else{const K=jr[p];o.render({x:K.pos[0],y:K.pos[1],z:K.pos[2],yaw:K.yaw,pitch:K.pitch},_)}}const M=o.info;if(yi){cs||m(),x(0),b(),window.__drift={ready:!0,error:"",seed:da,cam:p,gl:t,cameras:jr.map(K=>K.name),routes:zv,setCamera(K){return p=Math.max(0,Math.min(jr.length-1,K|0)),v=!1,m(),b(),p},usePlayerCamera(K=!0){v=!!K,b()},setTier(K){return o.applyTier(K),b(),{tier:o.tier(),...M()}},tier:()=>o.tier(),render(){return b(),M()},info:M,stat:()=>({...o.stat}),crawlers:()=>f.crawlers.map(K=>{const Y=[];return K.group.traverse(ie=>{ie.isMesh&&Y.push({type:ie.type,vis:ie.visible,culled:ie.frustumCulled,r:ie.geometry.boundingSphere?+ie.geometry.boundingSphere.radius.toFixed(3):null})}),{pos:K.group.position.toArray().map(ie=>+ie.toFixed(2)),scale:K.group.scale.x,vis:K.group.visible,room:K.group.userData.room||"",meshes:Y}}),step(K=1,Y=1/60){for(let ie=0;ie<K;ie++)x(Y);return{t:d.S.t,...this.player()}},timeLogic(K=6e3,Y=1/60,ie=100){let ve=1/0;for(let Ee=0;Ee<20;Ee++){const Ye=performance.now();let Fe=Ye;for(;Fe===Ye;)Fe=performance.now();ve=Math.min(ve,Fe-Ye)}const Me=[];for(let Ee=0;Ee<K;Ee+=ie){const Ye=performance.now();for(let Fe=0;Fe<ie;Fe++)x(Y);Me.push((performance.now()-Ye)/ie)}Me.sort((Ee,Ye)=>Ee-Ye);const j=Ee=>Me[Math.min(Me.length-1,Math.floor(Ee*Me.length))];return{frames:Me.length*ie,batch:ie,batches:Me.length,mean:Me.reduce((Ee,Ye)=>Ee+Ye,0)/Me.length,p50:j(.5),p95:j(.95),max:Me[Me.length-1],clockMs:ve,precisionMs:ve/ie}},player(){return{x:l.x,z:l.z,yaw:l.yaw,t:d.S.t}},setInput(K){cs?(K.forward!==void 0&&(h.fwd=K.forward),K.strafe!==void 0&&(h.strafe=K.strafe)):Object.assign(l.input,K)},setYaw(K){l.yaw=K},teleport(K,Y,ie){l.x=K,l.z=Y,ie!==void 0&&(l.yaw=ie),x(0)},game:cs?{info:()=>d.debug.info(),input(K){Object.assign(h,K)},press(K){h.press.add(K)},lookAt:(K,Y,ie)=>d.debug.lookAt(K,Y,ie),aimNearest:()=>d.debug.aimNearest(),solveSeal:()=>d.debug.solveSeal(),skipTo:K=>d.skipTo(K)}:null},_i.dataset.drift="ready";return}const C=document.getElementById("fps");C.hidden=!Zu;const A=new ze;function g(){const K=M(),Y=vi.getDrawingBufferSize(A);C.textContent=`FPS ${r.fps?r.fps.toFixed(1):"…"} · ${r.ms?r.ms.toFixed(1):"…"} мс · ${Y.x}x${Y.y} · масштаб ${r.scale.toFixed(2)} (экран ${s.toFixed(2)}) · ступень ${o.tier()}${r.lockTier?" (вручную)":" (авто)"} · вызовов ${K.calls} · треуг. ${(K.triangles/1e3).toFixed(0)}к · программ ${K.programs} · теней за кадр ${o.stat.shadows} · зеркало ${o.stat.mirror?"да":"нет"} · ${n}`}addEventListener("resize",()=>{r.resize(window.innerWidth,window.innerHeight,window.devicePixelRatio||1),o.applyScale(r.scale)});let y=0,T=0;function E(K){const Y=performance.now();for(;performance.now()-Y<K;);}if(uo){_e();return}const z=new Set;let L=!1,F=!1,U=!1;const G=K=>{c.ended()||(L=K,d.pause(K),K?c.panelKind()!=="comm"&&c.openPause():c.panelKind()==="pause"&&c.closePanel())};addEventListener("keydown",K=>{if(!K.repeat){if(z.add(K.code),u.unlock(),K.code==="KeyE"&&h.press.add("e"),K.code==="KeyF"&&h.press.add("f"),K.code==="Space"&&(h.press.add("space"),K.preventDefault()),K.code==="Escape"){if(c.panelKind()==="comm")return;G(!L)}K.code==="Enter"&&c.ended()&&location.reload()}}),addEventListener("keyup",K=>z.delete(K.code)),addEventListener("blur",()=>{z.clear(),h.fire=!1}),fs.addEventListener("contextmenu",K=>K.preventDefault()),fs.addEventListener("mousedown",K=>{if(u.unlock(),L&&G(!1),!F&&fs.requestPointerLock&&!Is){_i.dataset.driftLock="requested";try{const Y=fs.requestPointerLock();Y&&Y.catch&&Y.catch(()=>{})}catch{}}K.button===0&&(h.fire=!0)}),addEventListener("mouseup",K=>{K.button===0&&(h.fire=!1)}),document.addEventListener("pointerlockchange",()=>{F=document.pointerLockElement===fs,_i.dataset.driftLock=F?"1":"0",F?U=!0:U&&!L&&!c.panelOpen()&&G(!0)});const W=(K,Y)=>{L||d.S.lock||(l.yaw-=K*.0022,l.pitch=Math.max(-1.45,Math.min(1.45,l.pitch-Y*.0022)))};let B=null,oe=0;addEventListener("mousemove",K=>{F?(W(K.movementX,K.movementY),B=null):K.buttons&2?(B!==null&&W(K.clientX-B,K.clientY-oe),B=K.clientX,oe=K.clientY):B=null}),Is&&addEventListener("pointerdown",()=>u.unlock(),!0),c.onSign=K=>u.signPick(K);{const K=c.openComm;c.openComm=Y=>{document.exitPointerLock&&document.exitPointerLock(),K(Y)}}let q=performance.now(),te=0,se=!0;vi.setAnimationLoop(()=>{y++;const K=performance.now(),Y=(K-q)/1e3;q=K;const ie=Math.min(.1,Y),ve=Me=>z.has(Me);if(h.fwd=(ve("KeyW")||ve("ArrowUp")?1:0)-(ve("KeyS")||ve("ArrowDown")?1:0),h.strafe=(ve("KeyD")?1:0)-(ve("KeyA")?1:0),h.run=ve("ShiftLeft")||ve("ShiftRight"),h.wheel=(ve("KeyD")?1:0)-(ve("KeyA")?1:0),h.needClick=!F&&!Is&&!L&&!c.panelOpen(),ve("ArrowLeft")&&W(-ie*700,0),ve("ArrowRight")&&W(ie*700,0),Is){const Me=c.touch;h.fwd=Me.fwd,h.strafe=Me.strafe,h.wheel=Math.abs(Me.strafe)>.3?Math.sign(Me.strafe):0,h.run=Math.hypot(Me.fwd,Me.strafe)>.92,W(Me.lookX*1.6,Me.lookY*1.6),Me.lookX=Me.lookY=0,h.fire=Me.fire;for(const j of["e","f","space"])Me[j]&&(h.press.add(j),Me[j]=!1)}if(x(ie),b(),T++,Ju&&E(Ju),se&&(se=!1,_i.dataset.drift="ready"),r.frame(Y)&&(r.tier!==o.tier()&&o.applyTier(r.tier),o.applyScale(r.scale)),te+=Y,te>=.2){te=0;const Me=_i.dataset,j=d.S;Me.driftTier=o.tier(),Me.driftScale=r.scale.toFixed(3),Me.driftFps=r.fps.toFixed(1),Me.driftFrames=T,Me.driftRaf=y,Me.driftT=j.t.toFixed(3),Me.driftScene=j.scene,Me.driftPx=l.x.toFixed(3),Me.driftPz=l.z.toFixed(3),Me.driftYaw=l.yaw.toFixed(4),Me.driftMode=j.mode,Me.driftTool=j.hasTool?"1":"0",Me.driftHeld=j.held?j.held.name:"",Me.driftHeat=j.heat.toFixed(3),Me.driftPaused=L?"1":"0",Me.driftPrompt=j.prompt||"",Me.driftWheel=j.wheel.toFixed(3),Me.driftFire=j.firing?"1":"0",Zu&&g()}});function _e(){const K={tier:"high",scale:r.scale},Y=[["полный кадр: высокая ступень, стартовый масштаб",{}],["половинный масштаб (вчетверо меньше пикселей)",{scale:.5}],["без теней",{o:{shadowSpots:0}}],["без зеркала",{o:{mirror:0}}],["без Узора",{o:{noUzor:!0}}],["без постобработки (без MSAA и свечения)",{o:{msaa:0,bloom:!1}}],["без прохода глубины",{o:{prepass:!1}}],["средняя ступень",{tier:"medium"}],["лёгкая ступень",{tier:"lite"}],["как было до правки: плотность экрана целиком",{dprScale:!0}]];Object.assign(l,{x:.4,z:-9.2,yaw:.55,pitch:-.02}),_=d.exhibitState({pos:[.4,1.2,-9.2],yaw:.55,pitch:-.02,rig:1}),v=!0;const ie=document.createElement("div");ie.id="probe",ie.style.cssText="position:fixed;left:8px;top:64px;padding:10px 12px;font:12px/1.5 ui-monospace,monospace;color:#d7dde4;background:rgba(4,8,12,.88);border:1px solid #84cbcd;border-radius:6px;white-space:pre;z-index:5;max-width:96vw;overflow:auto",document.body.appendChild(ie);const ve=[],Me=new Uint8Array(4);let j=0,Ee=0,Ye=0,Fe=0,Xe=0,at=performance.now(),ye="";function P(le){const pe=Y[le][1];for(const me of Object.keys(o.ovr))delete o.ovr[me];Object.assign(o.ovr,pe.o||{}),r.scale=pe.dprScale?s:K.scale*(pe.scale||1),o.applyTier(pe.tier||K.tier),o.applyScale(r.scale);const be=vi.getDrawingBufferSize(A);ye=`${be.x}x${be.y}`,Ee=performance.now(),Ye=0,Fe=0,Xe=0}function $(le){const pe=`ЗАМЕР ДРЕЙФа${le?" · ГОТОВО, пришли этот скриншот":` · идёт вариант ${j+1} из ${Y.length}`}
${n}
окно ${window.innerWidth}x${window.innerHeight}, плотность экрана ${s}

`+"вариант".padEnd(50)+"кадр".padStart(12)+"кадров/с".padStart(10)+"мс рендера".padStart(12)+"худший".padStart(8)+"вызовов".padStart(9)+"треуг.".padStart(8)+`
`;ie.textContent=pe+ve.map(be=>be.name.padEnd(50)+be.res.padStart(12)+be.fps.toFixed(1).padStart(10)+be.ms.toFixed(1).padStart(12)+be.max.toFixed(0).padStart(8)+String(be.calls).padStart(9)+((be.tris/1e3).toFixed(0)+"к").padStart(8)).join(`
`)+(le?`

«кадров/с» ограничено частотой экрана; «мс рендера» = время кадра до конца работы видеокарты.`:"")}P(0),vi.setAnimationLoop(()=>{const le=performance.now(),pe=(le-at)/1e3;at=le,d.S.t+=Math.min(.1,pe),_.t=d.S.t;const be=performance.now();b(),i.readPixels(0,0,1,1,i.RGBA,i.UNSIGNED_BYTE,Me);const me=performance.now()-be;if(le-Ee>800&&(Ye++,Fe+=me,Xe=Math.max(Xe,me)),le-Ee>=3e3){const xe=M();if(ve.push({name:Y[j][0],res:ye,fps:Ye/((le-Ee-800)/1e3),ms:Fe/Math.max(1,Ye),max:Xe,calls:xe.calls,tris:xe.triangles}),j+1<Y.length)P(++j),$(!1);else{vi.setAnimationLoop(null),$(!0),window.__probe={gpu:n,dpr:s,rows:ve},_i.dataset.driftProbe="done",_i.dataset.drift="ready";return}}Ye%20===1&&($(!1),r.fps=Ye/Math.max(.001,(le-Ee-800)/1e3),r.ms=Fe/Math.max(1,Ye),g())})}}
