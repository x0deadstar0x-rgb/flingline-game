(()=>{var L0=Object.defineProperty;var F0=(i,t)=>{for(var e in t)L0(i,e,{get:t[e],enumerable:!0})};var Tu="170";var B0=0,pf=1,D0=2;var Tl=1,z0=2,Fi=3,ds=0,cn=1,Di=2,cs=0,hs=1,Fr=2,mf=3,gf=4,U0=5,Us=100,O0=101,k0=102,V0=103,H0=104,G0=200,W0=201,q0=202,X0=203,ih=204,sh=205,Y0=206,Z0=207,$0=208,j0=209,J0=210,K0=211,Q0=212,tg=213,eg=214,oh=0,rh=1,ah=2,Vo=3,lh=4,ch=5,hh=6,uh=7,bp=0,ng=1,ig=2,us=0,sg=1,og=2,rg=3,Au=4,ag=5,lg=6,cg=7;var wp=300,Ho=301,Go=302,dh=303,fh=304,Al=306,Br=1e3,Vs=1001,ph=1002,Rn=1003,hg=1004;var va=1005;var di=1006,wc=1007;var Hs=1008;var ki=1009,Mp=1010,Ep=1011,Dr=1012,Ru=1013,Gs=1014,zi=1015,Hr=1016,Cu=1017,Iu=1018,Wo=1020,Sp=35902,Tp=1021,Ap=1022,Qn=1023,Rp=1024,Cp=1025,Uo=1026,qo=1027,Ip=1028,Pu=1029,Pp=1030,Nu=1031;var Lu=1033,Wa=33776,qa=33777,Xa=33778,Ya=33779,mh=35840,gh=35841,yh=35842,xh=35843,vh=36196,_h=37492,bh=37496,wh=37808,Mh=37809,Eh=37810,Sh=37811,Th=37812,Ah=37813,Rh=37814,Ch=37815,Ih=37816,Ph=37817,Nh=37818,Lh=37819,Fh=37820,Bh=37821,Za=36492,Dh=36494,zh=36495,Np=36283,Uh=36284,Oh=36285,kh=36286;var $a=2300,Vh=2301,Mc=2302,yf=2400,xf=2401,vf=2402;var ug=3200,dg=3201;var Lp=0,fg=1,ls="",bn="srgb",jo="srgb-linear",Rl="linear",_e="srgb";var Mo=7680;var _f=519,pg=512,mg=513,gg=514,Fp=515,yg=516,xg=517,vg=518,_g=519,bf=35044;var wf="300 es",Ui=2e3,ja=2001,fs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ec=Math.PI/180,Hh=180/Math.PI;function Gr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Qe(i,t,e){return Math.max(t,Math.min(e,i))}function bg(i,t){return(i%t+t)%t}function Sc(i,t,e){return(1-e)*i+e*t}function Mr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,s,o,r,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],v=s[1],M=s[4],w=s[7],I=s[2],T=s[5],C=s[8];return o[0]=r*x+a*v+l*I,o[3]=r*g+a*M+l*T,o[6]=r*p+a*w+l*C,o[1]=c*x+h*v+d*I,o[4]=c*g+h*M+d*T,o[7]=c*p+h*w+d*C,o[2]=u*x+f*v+m*I,o[5]=u*g+f*M+m*T,o[8]=u*p+f*w+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,f=c*o-r*l,m=e*d+n*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*r)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*o-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Tc=new Xt;function Bp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wg(){let i=Ja("canvas");return i.style.display="block",i}var Mf={};function Cr(i){i in Mf||(Mf[i]=!0,console.warn(i))}function Mg(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Eg(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Sg(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:jo,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===_e&&(i.r=Oi(i.r),i.g=Oi(i.g),i.b=Oi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===_e&&(i.r=Oo(i.r),i.g=Oo(i.g),i.b=Oo(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ls?Rl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ef=[.64,.33,.3,.6,.15,.06],Sf=[.2126,.7152,.0722],Tf=[.3127,.329],Af=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rf=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[jo]:{primaries:Ef,whitePoint:Tf,transfer:Rl,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:Sf,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:Ef,whitePoint:Tf,transfer:_e,toXYZ:Af,fromXYZ:Rf,luminanceCoefficients:Sf,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}});var Eo,Gh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Eo===void 0&&(Eo=Ja("canvas")),Eo.width=t.width,Eo.height=t.height;let n=Eo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Eo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ja("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Oi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Oi(e[n]/255)*255):e[n]=Oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Tg=0,Ka=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Gr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ac(s[r].image)):o.push(Ac(s[r]))}else o=Ac(s);n.url=o}return e||(t.images[this.uuid]=n),n}};function Ac(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ag=0,Cn=class i extends fs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Vs,s=Vs,o=di,r=Hs,a=Qn,l=ki,c=i.DEFAULT_ANISOTROPY,h=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Gr(),this.name="",this.source=new Ka(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Br:t.x=t.x-Math.floor(t.x);break;case Vs:t.x=t.x<0?0:1;break;case ph:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Br:t.y=t.y-Math.floor(t.y);break;case Vs:t.y=t.y<0?0:1;break;case ph:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=wp;Cn.DEFAULT_ANISOTROPY=1;var be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,w=(f+1)/2,I=(p+1)/2,T=(h+u)/4,C=(d+x)/4,L=(m+g)/4;return M>w&&M>I?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=T/n,o=C/n):w>I?w<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),n=T/s,o=L/s):I<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),n=C/o,s=L/o),this.set(n,s,o,e),this}let v=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wh=class extends fs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let o=new Cn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ka(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vi=class extends Wh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Qa=class extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qh=class extends Cn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qt=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=o[r+0],f=o[r+1],m=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(d!==x||l!==u||c!==f||h!==m){let g=1-a,p=l*u+c*f+h*m+d*x,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let I=Math.sqrt(M),T=Math.atan2(I,p*v);g=Math.sin(g*T)/I,a=Math.sin(a*T)/I}let w=a*v;if(l=l*g+u*w,c=c*g+f*w,h=h*g+m*w,d=d*g+x*w,g===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,r){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=o[r],u=o[r+1],f=o[r+2],m=o[r+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(o/2),u=l(n/2),f=l(s/2),m=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=s+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rc.copy(this).projectOnVector(t),this.sub(Rc)}reflect(t){return this.sub(Rc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rc=new _,Cf=new Qt,Ws=class{constructor(t=new _(1/0,1/0,1/0),e=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,jn):jn.fromBufferAttribute(o,r),jn.applyMatrix4(t.matrixWorld),this.expandByPoint(jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_a.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox)),_a.applyMatrix4(t.matrixWorld),this.union(_a)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),ba.subVectors(this.max,Er),So.subVectors(t.a,Er),To.subVectors(t.b,Er),Ao.subVectors(t.c,Er),ns.subVectors(To,So),is.subVectors(Ao,To),Ps.subVectors(So,Ao);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Ps.z,Ps.y,ns.z,0,-ns.x,is.z,0,-is.x,Ps.z,0,-Ps.x,-ns.y,ns.x,0,-is.y,is.x,0,-Ps.y,Ps.x,0];return!Cc(e,So,To,Ao,ba)||(e=[1,0,0,0,1,0,0,0,1],!Cc(e,So,To,Ao,ba))?!1:(wa.crossVectors(ns,is),e=[wa.x,wa.y,wa.z],Cc(e,So,To,Ao,ba))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ci=[new _,new _,new _,new _,new _,new _,new _,new _],jn=new _,_a=new Ws,So=new _,To=new _,Ao=new _,ns=new _,is=new _,Ps=new _,Er=new _,ba=new _,wa=new _,Ns=new _;function Cc(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Ns.fromArray(i,o);let a=s.x*Math.abs(Ns.x)+s.y*Math.abs(Ns.y)+s.z*Math.abs(Ns.z),l=t.dot(Ns),c=e.dot(Ns),h=n.dot(Ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Rg=new Ws,Sr=new _,Ic=new _,Xo=class{constructor(t=new _,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Rg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Ic)),this.expandByPoint(Sr.copy(t.center).sub(Ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new _,Pc=new _,Ma=new _,ss=new _,Nc=new _,Ea=new _,Lc=new _,tl=class{constructor(t=new _,e=new _(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ii.copy(this.origin).addScaledVector(this.direction,e),Ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pc.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),ss.copy(this.origin).sub(Pc);let o=t.distanceTo(e)*.5,r=-this.direction.dot(Ma),a=ss.dot(this.direction),l=-ss.dot(Ma),c=ss.lengthSq(),h=Math.abs(1-r*r),d,u,f,m;if(h>0)if(d=r*l-a,u=r*a-l,m=o*h,d>=0)if(u>=-m)if(u<=m){let x=1/h;d*=x,u*=x,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pc).addScaledVector(Ma,u),f}intersectSphere(t,e){Ii.subVectors(t.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ii)!==null}intersectTriangle(t,e,n,s,o){Nc.subVectors(e,t),Ea.subVectors(n,t),Lc.crossVectors(Nc,Ea);let r=this.direction.dot(Lc),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ss.subVectors(this.origin,t);let l=a*this.direction.dot(Ea.crossVectors(ss,Ea));if(l<0)return null;let c=a*this.direction.dot(Nc.cross(ss));if(c<0||l+c>r)return null;let h=-a*ss.dot(Lc);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class i{constructor(t,e,n,s,o,r,a,l,c,h,d,u,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,d,u,f,m,x,g)}set(t,e,n,s,o,r,a,l,c,h,d,u,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ro.setFromMatrixColumn(t,0).length(),o=1/Ro.setFromMatrixColumn(t,1).length(),r=1/Ro.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){let u=r*h,f=r*d,m=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=m+f*c,e[10]=r*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u+x*a,e[4]=m*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=x+u*a,e[10]=r*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,x=c*d;e[0]=u-x*a,e[4]=-r*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=x-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let u=r*h,f=r*d,m=a*h,x=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=m*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-x*d}else if(t.order==="XZY"){let u=r*l,f=r*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=r*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cg,t,Ig)}lookAt(t,e,n){let s=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),os.crossVectors(n,Tn),os.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),os.crossVectors(n,Tn)),os.normalize(),Sa.crossVectors(Tn,os),s[0]=os.x,s[4]=Sa.x,s[8]=Tn.x,s[1]=os.y,s[5]=Sa.y,s[9]=Tn.y,s[2]=os.z,s[6]=Sa.z,s[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],M=n[7],w=n[11],I=n[15],T=s[0],C=s[4],L=s[8],S=s[12],E=s[1],N=s[5],G=s[9],B=s[13],z=s[2],V=s[6],D=s[10],K=s[14],W=s[3],Q=s[7],ct=s[11],pt=s[15];return o[0]=r*T+a*E+l*z+c*W,o[4]=r*C+a*N+l*V+c*Q,o[8]=r*L+a*G+l*D+c*ct,o[12]=r*S+a*B+l*K+c*pt,o[1]=h*T+d*E+u*z+f*W,o[5]=h*C+d*N+u*V+f*Q,o[9]=h*L+d*G+u*D+f*ct,o[13]=h*S+d*B+u*K+f*pt,o[2]=m*T+x*E+g*z+p*W,o[6]=m*C+x*N+g*V+p*Q,o[10]=m*L+x*G+g*D+p*ct,o[14]=m*S+x*B+g*K+p*pt,o[3]=v*T+M*E+w*z+I*W,o[7]=v*C+M*N+w*V+I*Q,o[11]=v*L+M*G+w*D+I*ct,o[15]=v*S+M*B+w*K+I*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+o*l*d-s*c*d-o*a*u+n*c*u+s*a*f-n*l*f)+x*(+e*l*f-e*c*u+o*r*u-s*r*f+s*c*h-o*l*h)+g*(+e*c*d-e*a*f-o*r*d+n*r*f+o*a*h-n*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*r*d-n*r*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],v=d*g*c-x*u*c+x*l*f-a*g*f-d*l*p+a*u*p,M=m*u*c-h*g*c-m*l*f+r*g*f+h*l*p-r*u*p,w=h*x*c-m*d*c+m*a*f-r*x*f-h*a*p+r*d*p,I=m*d*l-h*x*l-m*a*u+r*x*u+h*a*g-r*d*g,T=e*v+n*M+s*w+o*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=v*C,t[1]=(x*u*o-d*g*o-x*s*f+n*g*f+d*s*p-n*u*p)*C,t[2]=(a*g*o-x*l*o+x*s*c-n*g*c-a*s*p+n*l*p)*C,t[3]=(d*l*o-a*u*o-d*s*c+n*u*c+a*s*f-n*l*f)*C,t[4]=M*C,t[5]=(h*g*o-m*u*o+m*s*f-e*g*f-h*s*p+e*u*p)*C,t[6]=(m*l*o-r*g*o-m*s*c+e*g*c+r*s*p-e*l*p)*C,t[7]=(r*u*o-h*l*o+h*s*c-e*u*c-r*s*f+e*l*f)*C,t[8]=w*C,t[9]=(m*d*o-h*x*o-m*n*f+e*x*f+h*n*p-e*d*p)*C,t[10]=(r*x*o-m*a*o+m*n*c-e*x*c-r*n*p+e*a*p)*C,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*f-e*a*f)*C,t[12]=I*C,t[13]=(h*x*s-m*d*s+m*n*u-e*x*u-h*n*g+e*d*g)*C,t[14]=(m*a*s-r*x*s-m*n*l+e*x*l+r*n*g-e*a*g)*C,t[15]=(r*d*s-h*a*s+h*n*l-e*d*l-r*n*u+e*a*u)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,f=o*h,m=o*d,x=r*h,g=r*d,p=a*d,v=l*c,M=l*h,w=l*d,I=n.x,T=n.y,C=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+w)*I,s[2]=(m-M)*I,s[3]=0,s[4]=(f-w)*T,s[5]=(1-(u+p))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(m+M)*C,s[9]=(g-v)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,o=Ro.set(s[0],s[1],s[2]).length(),r=Ro.set(s[4],s[5],s[6]).length(),a=Ro.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Jn.copy(this);let c=1/o,h=1/r,d=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,e.setFromRotationMatrix(Jn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Ui){let l=this.elements,c=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,m;if(a===Ui)f=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===ja)f=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Ui){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(r-o),u=(e+t)*c,f=(n+s)*h,m,x;if(a===Ui)m=(r+o)*d,x=-2*d;else if(a===ja)m=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ro=new _,Jn=new Ne,Cg=new _(0,0,0),Ig=new _(1,1,1),os=new _,Sa=new _,Tn=new _,If=new Ne,Pf=new Qt,Ve=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return If.makeRotationFromQuaternion(t),this.setFromRotationMatrix(If,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pf.setFromEuler(this),this.setFromQuaternion(Pf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ve.DEFAULT_ORDER="XYZ";var el=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Pg=0,Nf=new _,Co=new Qt,Pi=new Ne,Ta=new _,Tr=new _,Ng=new _,Lg=new Qt,Lf=new _(1,0,0),Ff=new _(0,1,0),Bf=new _(0,0,1),Df={type:"added"},Fg={type:"removed"},Io={type:"childadded",child:null},Fc={type:"childremoved",child:null},hn=class i extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new _,e=new Ve,n=new Qt,s=new _(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Xt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Co.setFromAxisAngle(t,e),this.quaternion.multiply(Co),this}rotateOnWorldAxis(t,e){return Co.setFromAxisAngle(t,e),this.quaternion.premultiply(Co),this}rotateX(t){return this.rotateOnAxis(Lf,t)}rotateY(t){return this.rotateOnAxis(Ff,t)}rotateZ(t){return this.rotateOnAxis(Bf,t)}translateOnAxis(t,e){return Nf.copy(t).applyQuaternion(this.quaternion),this.position.add(Nf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lf,t)}translateY(t){return this.translateOnAxis(Ff,t)}translateZ(t){return this.translateOnAxis(Bf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ta.copy(t):Ta.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Tr,Ta,this.up):Pi.lookAt(Ta,Tr,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),Co.setFromRotationMatrix(Pi),this.quaternion.premultiply(Co.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Df),Io.child=t,this.dispatchEvent(Io),Io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fg),Fc.child=t,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Df),Io.child=t,this.dispatchEvent(Io),Io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,t,Ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Lg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};hn.DEFAULT_UP=new _(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new _,Ni=new _,Bc=new _,Li=new _,Po=new _,No=new _,zf=new _,Dc=new _,zc=new _,Uc=new _,Oc=new be,kc=new be,Vc=new be,Os=class i{constructor(t=new _,e=new _,n=new _){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Kn.subVectors(t,e),s.cross(Kn);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){Kn.subVectors(s,e),Ni.subVectors(n,e),Bc.subVectors(t,e);let r=Kn.dot(Kn),a=Kn.dot(Ni),l=Kn.dot(Bc),c=Ni.dot(Ni),h=Ni.dot(Bc),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(r*h-a*l)*u;return o.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Li.x),l.addScaledVector(r,Li.y),l.addScaledVector(a,Li.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Oc.setScalar(0),kc.setScalar(0),Vc.setScalar(0),Oc.fromBufferAttribute(t,e),kc.fromBufferAttribute(t,n),Vc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Oc,o.x),r.addScaledVector(kc,o.y),r.addScaledVector(Vc,o.z),r}static isFrontFacing(t,e,n,s){return Kn.subVectors(n,e),Ni.subVectors(t,e),Kn.cross(Ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),Kn.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,o=this.c,r,a;Po.subVectors(s,n),No.subVectors(o,n),Dc.subVectors(t,n);let l=Po.dot(Dc),c=No.dot(Dc);if(l<=0&&c<=0)return e.copy(n);zc.subVectors(t,s);let h=Po.dot(zc),d=No.dot(zc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(Po,r);Uc.subVectors(t,o);let f=Po.dot(Uc),m=No.dot(Uc);if(m>=0&&f<=m)return e.copy(o);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(No,a);let g=h*m-f*d;if(g<=0&&d-h>=0&&f-m>=0)return zf.subVectors(o,s),a=(d-h)/(d-h+(f-m)),e.copy(s).addScaledVector(zf,a);let p=1/(g+x+u);return r=x*p,a=u*p,e.copy(n).addScaledVector(Po,r).addScaledVector(No,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Hc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=bg(t,1),e=Qe(e,0,1),n=Qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Hc(r,o,t+1/3),this.g=Hc(r,o,t),this.b=Hc(r,o,t-1/3)}return he.toWorkingColorSpace(this,s),this}setStyle(t,e=bn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){let n=Dp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=Oo(t.r),this.g=Oo(t.g),this.b=Oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return he.fromWorkingColorSpace(an.copy(this),t),Math.round(Qe(an.r*255,0,255))*65536+Math.round(Qe(an.g*255,0,255))*256+Math.round(Qe(an.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(an.copy(this),e);let n=an.r,s=an.g,o=an.b,r=Math.max(n,s,o),a=Math.min(n,s,o),l,c,h=(a+r)/2;if(a===r)l=0,c=0;else{let d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-n)/d+2;break;case o:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=bn){he.fromWorkingColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(rs),this.setHSL(rs.h+t,rs.s+e,rs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(rs),t.getHSL(Aa);let n=Sc(rs.h,Aa.h,e),s=Sc(rs.s,Aa.s,e),o=Sc(rs.l,Aa.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new St;St.NAMES=Dp;var Bg=0,ps=class extends fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Gr(),this.name="",this.blending=hs,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=sh,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==ds&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ih&&(n.blendSrc=this.blendSrc),this.blendDst!==sh&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_f&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let r=[];for(let a in o){let l=o[a];delete l.metadata,r.push(l)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},we=class extends ps{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.combine=bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new _,Ra=new wt,mn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bf,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ra.fromBufferAttribute(this,e),Ra.applyMatrix3(t),this.setXY(e,Ra.x,Ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=_n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=_n(e,this.array),n=_n(n,this.array),s=_n(s,this.array),o=_n(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bf&&(t.usage=this.usage),t}};var nl=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var il=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Le=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dg=0,On=new Ne,Gc=new hn,Lo=new _,An=new Ws,Ar=new Ws,je=new _,gn=class i extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bp(t)?il:nl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Xt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return Gc.lookAt(t),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lo).negate(),this.translate(Lo.x,Lo.y,Lo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Le(n,3))}else{for(let n=0,s=e.count;n<s;n++){let o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let o=e[n];An.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(t){let n=this.boundingSphere.center;if(An.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(An.min,Ar.min),An.expandByPoint(je),je.addVectors(An.max,Ar.max),An.expandByPoint(je)):(An.expandByPoint(Ar.min),An.expandByPoint(Ar.max))}An.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)je.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(je));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Lo.fromBufferAttribute(t,c),je.add(Lo)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new _,l[L]=new _;let c=new _,h=new _,d=new _,u=new wt,f=new wt,m=new wt,x=new _,g=new _;function p(L,S,E){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),u.fromBufferAttribute(o,L),f.fromBufferAttribute(o,S),m.fromBufferAttribute(o,E),h.sub(c),d.sub(c),f.sub(u),m.sub(u);let N=1/(f.x*m.y-m.x*f.y);isFinite(N)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(N),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(N),a[L].add(x),a[S].add(x),a[E].add(x),l[L].add(g),l[S].add(g),l[E].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,S=v.length;L<S;++L){let E=v[L],N=E.start,G=E.count;for(let B=N,z=N+G;B<z;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let M=new _,w=new _,I=new _,T=new _;function C(L){I.fromBufferAttribute(s,L),T.copy(I);let S=a[L];M.copy(S),M.sub(I.multiplyScalar(I.dot(S))).normalize(),w.crossVectors(T,S);let N=w.dot(l[L])<0?-1:1;r.setXYZW(L,M.x,M.y,M.z,N)}for(let L=0,S=v.length;L<S;++L){let E=v[L],N=E.start,G=E.count;for(let B=N,z=N+G;B<z;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new _,o=new _,r=new _,a=new _,l=new _,c=new _,h=new _,d=new _;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[m++]=c[f++]}return new mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],d=o[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uf=new Ne,Ls=new tl,Ca=new Xo,Of=new _,Ia=new _,Pa=new _,Na=new _,Wc=new _,La=new _,kf=new _,Fa=new _,Et=class extends hn{constructor(t=new gn,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){La.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],d=o[l];h!==0&&(Wc.fromBufferAttribute(d,t),r?La.addScaledVector(Wc,h):La.addScaledVector(Wc.sub(e),h))}e.add(La)}return e}raycast(t,e){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(o),Ls.copy(t.ray).recast(t.near),!(Ca.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Ca,Of)===null||Ls.origin.distanceToSquared(Of)>(t.far-t.near)**2))&&(Uf.copy(o).invert(),Ls.copy(t.ray).applyMatrix4(Uf),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,n){let s,o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=r[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let w=v,I=M;w<I;w+=3){let T=a.getX(w),C=a.getX(w+1),L=a.getX(w+2);s=Ba(this,p,t,n,c,h,d,T,C,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),M=a.getX(g+1),w=a.getX(g+2);s=Ba(this,r,t,n,c,h,d,v,M,w),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=u.length;m<x;m++){let g=u[m],p=r[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let w=v,I=M;w<I;w+=3){let T=w,C=w+1,L=w+2;s=Ba(this,p,t,n,c,h,d,T,C,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,M=g+1,w=g+2;s=Ba(this,r,t,n,c,h,d,v,M,w),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function zg(i,t,e,n,s,o,r,a){let l;if(t.side===cn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===ds,a),l===null)return null;Fa.copy(a),Fa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Fa);return c<e.near||c>e.far?null:{distance:c,point:Fa.clone(),object:i}}function Ba(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Ia),i.getVertexPosition(l,Pa),i.getVertexPosition(c,Na);let h=zg(i,t,e,n,Ia,Pa,Na,kf);if(h){let d=new _;Os.getBarycoord(kf,Ia,Pa,Na,d),s&&(h.uv=Os.getInterpolatedAttribute(s,a,l,c,d,new wt)),o&&(h.uv1=Os.getInterpolatedAttribute(o,a,l,c,d,new wt)),r&&(h.normal=Os.getInterpolatedAttribute(r,a,l,c,d,new _),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new _,materialIndex:0};Os.getNormal(Ia,Pa,Na,u.normal),h.face=u,h.barycoord=d}return h}var Fe=class i extends gn{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2));function m(x,g,p,v,M,w,I,T,C,L,S){let E=w/C,N=I/L,G=w/2,B=I/2,z=T/2,V=C+1,D=L+1,K=0,W=0,Q=new _;for(let ct=0;ct<D;ct++){let pt=ct*N-B;for(let at=0;at<V;at++){let ne=at*E-G;Q[x]=ne*v,Q[g]=pt*M,Q[p]=z,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[g]=0,Q[p]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(at/C),d.push(1-ct/L),K+=1}}for(let ct=0;ct<L;ct++)for(let pt=0;pt<C;pt++){let at=u+pt+V*ct,ne=u+pt+V*(ct+1),$=u+(pt+1)+V*(ct+1),st=u+(pt+1)+V*ct;l.push(at,ne,st),l.push(ne,$,st),W+=6}a.addGroup(f,W,S),f+=W,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Yo(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function pn(i){let t={};for(let e=0;e<i.length;e++){let n=Yo(i[e]);for(let s in n)t[s]=n[s]}return t}function Ug(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zp(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var Og={clone:Yo,merge:pn},kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kn=class extends ps{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yo(t.uniforms),this.uniformsGroups=Ug(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},sl=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},as=new _,Vf=new wt,Hf=new wt,ln=class extends sl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Hh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){as.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(as.x,as.y).multiplyScalar(-t/as.z),as.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(as.x,as.y).multiplyScalar(-t/as.z)}getViewSize(t,e){return this.getViewBounds(t,Vf,Hf),e.subVectors(Hf,Vf)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ec*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fo=-90,Bo=1,Xh=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Fo,Bo,t,e);s.layers=this.layers,this.add(s);let o=new ln(Fo,Bo,t,e);o.layers=this.layers,this.add(o);let r=new ln(Fo,Bo,t,e);r.layers=this.layers,this.add(r);let a=new ln(Fo,Bo,t,e);a.layers=this.layers,this.add(a);let l=new ln(Fo,Bo,t,e);l.layers=this.layers,this.add(l);let c=new ln(Fo,Bo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(let c of e)this.remove(c);if(t===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ol=class extends Cn{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ho,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yh=class extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ol(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:di}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),o=new kn({name:"CubemapFromEquirect",uniforms:Yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:cs});o.uniforms.tEquirect.value=e;let r=new Et(s,o),a=e.minFilter;return e.minFilter===Hs&&(e.minFilter=di),new Xh(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}},qc=new _,Hg=new _,Gg=new Xt,Bi=class{constructor(t=new _(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=qc.subVectors(n,e).cross(Hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(qc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gg.getNormalMatrix(t),s=this.coplanarPoint(qc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new Xo,Da=new _,zr=class{constructor(t=new Bi,e=new Bi,n=new Bi,s=new Bi,o=new Bi,r=new Bi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ui){let n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],v=s[13],M=s[14],w=s[15];if(n[0].setComponents(l-o,u-c,g-f,w-p).normalize(),n[1].setComponents(l+o,u+c,g+f,w+p).normalize(),n[2].setComponents(l+r,u+h,g+m,w+v).normalize(),n[3].setComponents(l-r,u-h,g-m,w-v).normalize(),n[4].setComponents(l-a,u-d,g-x,w-M).normalize(),e===Ui)n[5].setComponents(l+a,u+d,g+x,w+M).normalize();else if(e===ja)n[5].setComponents(a,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){return Fs.center.set(0,0,0),Fs.radius=.7071067811865476,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Da.x=s.normal.x>0?t.max.x:t.min.x,Da.y=s.normal.y>0?t.max.y:t.min.y,Da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Up(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Wg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],x=d[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Hi=class i extends gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*u-r;for(let M=0;M<c;M++){let w=M*d-o;m.push(w,-v,0),x.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,w=v+c*(p+1),I=v+1+c*(p+1),T=v+1+c*p;f.push(M,w,T),f.push(w,I,T)}this.setIndex(f),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xg=`#ifdef USE_ALPHAHASH
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
#endif`,Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$g=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
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
#endif`,Kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sy=`#ifdef USE_IRIDESCENCE
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
#endif`,oy=`#ifdef USE_BUMPMAP
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
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,py=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gy=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_y=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,by="gl_FragColor = linearToOutputTexel( gl_FragColor );",wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,My=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ny=`#ifdef USE_GRADIENTMAP
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
}`,Ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,By=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Gy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wy=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$y=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tx=`#if defined( USE_POINTS_UV )
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
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
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
#endif`,ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fx=`#ifdef USE_NORMALMAP
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
#endif`,px=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Cx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lx=`#ifdef USE_SKINNING
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
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ox=`#ifdef USE_TRANSMISSION
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qx=`uniform sampler2D t2D;
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
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
}`,Jx=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kx=`#define DISTANCE
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
}`,Qx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`uniform float scale;
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
}`,iv=`uniform vec3 diffuse;
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
}`,sv=`#include <common>
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
}`,ov=`uniform vec3 diffuse;
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
}`,rv=`#define LAMBERT
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
}`,av=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lv=`#define MATCAP
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
}`,cv=`#define MATCAP
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
}`,hv=`#define NORMAL
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
}`,uv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dv=`#define PHONG
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
}`,fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,pv=`#define STANDARD
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
}`,mv=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,gv=`#define TOON
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
}`,yv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,xv=`uniform float size;
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
}`,vv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,bv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wv=`uniform float rotation;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:qg,alphahash_pars_fragment:Xg,alphamap_fragment:Yg,alphamap_pars_fragment:Zg,alphatest_fragment:$g,alphatest_pars_fragment:jg,aomap_fragment:Jg,aomap_pars_fragment:Kg,batching_pars_vertex:Qg,batching_vertex:ty,begin_vertex:ey,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:sy,bumpmap_pars_fragment:oy,clipping_planes_fragment:ry,clipping_planes_pars_fragment:ay,clipping_planes_pars_vertex:ly,clipping_planes_vertex:cy,color_fragment:hy,color_pars_fragment:uy,color_pars_vertex:dy,color_vertex:fy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:yy,displacementmap_vertex:xy,emissivemap_fragment:vy,emissivemap_pars_fragment:_y,colorspace_fragment:by,colorspace_pars_fragment:wy,envmap_fragment:My,envmap_common_pars_fragment:Ey,envmap_pars_fragment:Sy,envmap_pars_vertex:Ty,envmap_physical_pars_fragment:zy,envmap_vertex:Ay,fog_vertex:Ry,fog_pars_vertex:Cy,fog_fragment:Iy,fog_pars_fragment:Py,gradientmap_pars_fragment:Ny,lightmap_pars_fragment:Ly,lights_lambert_fragment:Fy,lights_lambert_pars_fragment:By,lights_pars_begin:Dy,lights_toon_fragment:Uy,lights_toon_pars_fragment:Oy,lights_phong_fragment:ky,lights_phong_pars_fragment:Vy,lights_physical_fragment:Hy,lights_physical_pars_fragment:Gy,lights_fragment_begin:Wy,lights_fragment_maps:qy,lights_fragment_end:Xy,logdepthbuf_fragment:Yy,logdepthbuf_pars_fragment:Zy,logdepthbuf_pars_vertex:$y,logdepthbuf_vertex:jy,map_fragment:Jy,map_pars_fragment:Ky,map_particle_fragment:Qy,map_particle_pars_fragment:tx,metalnessmap_fragment:ex,metalnessmap_pars_fragment:nx,morphinstance_vertex:ix,morphcolor_vertex:sx,morphnormal_vertex:ox,morphtarget_pars_vertex:rx,morphtarget_vertex:ax,normal_fragment_begin:lx,normal_fragment_maps:cx,normal_pars_fragment:hx,normal_pars_vertex:ux,normal_vertex:dx,normalmap_pars_fragment:fx,clearcoat_normal_fragment_begin:px,clearcoat_normal_fragment_maps:mx,clearcoat_pars_fragment:gx,iridescence_pars_fragment:yx,opaque_fragment:xx,packing:vx,premultiplied_alpha_fragment:_x,project_vertex:bx,dithering_fragment:wx,dithering_pars_fragment:Mx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:Ax,shadowmap_vertex:Rx,shadowmask_pars_fragment:Cx,skinbase_vertex:Ix,skinning_pars_vertex:Px,skinning_vertex:Nx,skinnormal_vertex:Lx,specularmap_fragment:Fx,specularmap_pars_fragment:Bx,tonemapping_fragment:Dx,tonemapping_pars_fragment:zx,transmission_fragment:Ux,transmission_pars_fragment:Ox,uv_pars_fragment:kx,uv_pars_vertex:Vx,uv_vertex:Hx,worldpos_vertex:Gx,background_vert:Wx,background_frag:qx,backgroundCube_vert:Xx,backgroundCube_frag:Yx,cube_vert:Zx,cube_frag:$x,depth_vert:jx,depth_frag:Jx,distanceRGBA_vert:Kx,distanceRGBA_frag:Qx,equirect_vert:tv,equirect_frag:ev,linedashed_vert:nv,linedashed_frag:iv,meshbasic_vert:sv,meshbasic_frag:ov,meshlambert_vert:rv,meshlambert_frag:av,meshmatcap_vert:lv,meshmatcap_frag:cv,meshnormal_vert:hv,meshnormal_frag:uv,meshphong_vert:dv,meshphong_frag:fv,meshphysical_vert:pv,meshphysical_frag:mv,meshtoon_vert:gv,meshtoon_frag:yv,points_vert:xv,points_frag:vv,shadow_vert:_v,shadow_frag:bv,sprite_vert:wv,sprite_frag:Mv},ht={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},ui={basic:{uniforms:pn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:pn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new St(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:pn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:pn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:pn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new St(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:pn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:pn([ht.points,ht.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:pn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:pn([ht.common,ht.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:pn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:pn([ht.sprite,ht.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:pn([ht.common,ht.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:pn([ht.lights,ht.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};ui.physical={uniforms:pn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var za={r:0,b:0,g:0},Bs=new Ve,Ev=new Ne;function Sv(i,t,e,n,s,o,r){let a=new St(0),l=o===!0?0:1,c,h,d=null,u=0,f=null;function m(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function x(v){let M=!1,w=m(v);w===null?p(a,l):w&&w.isColor&&(p(w,1),M=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,M){let w=m(M);w&&(w.isCubeTexture||w.mapping===Al)?(h===void 0&&(h=new Et(new Fe(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Yo(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bs.copy(M.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(Bs)),h.material.toneMapped=he.getTransfer(w.colorSpace)!==_e,(d!==w||u!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Et(new Hi(2,2),new kn({name:"BackgroundMaterial",uniforms:Yo(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=he.getTransfer(w.colorSpace)!==_e,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(za,zp(i)),n.buffers.color.setClear(za.r,za.g,za.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:g}}function Tv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),o=s,r=!1;function a(E,N,G,B,z){let V=!1,D=d(B,G,N);o!==D&&(o=D,c(o.object)),V=f(E,B,G,z),V&&m(E,B,G,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,w(E,N,G,B),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,N,G){let B=G.wireframe===!0,z=n[E.id];z===void 0&&(z={},n[E.id]=z);let V=z[N.id];V===void 0&&(V={},z[N.id]=V);let D=V[B];return D===void 0&&(D=u(l()),V[B]=D),D}function u(E){let N=[],G=[],B=[];for(let z=0;z<e;z++)N[z]=0,G[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:B,object:E,attributes:{},index:null}}function f(E,N,G,B){let z=o.attributes,V=N.attributes,D=0,K=G.getAttributes();for(let W in K)if(K[W].location>=0){let ct=z[W],pt=V[W];if(pt===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor)),ct===void 0||ct.attribute!==pt||pt&&ct.data!==pt.data)return!0;D++}return o.attributesNum!==D||o.index!==B}function m(E,N,G,B){let z={},V=N.attributes,D=0,K=G.getAttributes();for(let W in K)if(K[W].location>=0){let ct=V[W];ct===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor));let pt={};pt.attribute=ct,ct&&ct.data&&(pt.data=ct.data),z[W]=pt,D++}o.attributes=z,o.attributesNum=D,o.index=B}function x(){let E=o.newAttributes;for(let N=0,G=E.length;N<G;N++)E[N]=0}function g(E){p(E,0)}function p(E,N){let G=o.newAttributes,B=o.enabledAttributes,z=o.attributeDivisors;G[E]=1,B[E]===0&&(i.enableVertexAttribArray(E),B[E]=1),z[E]!==N&&(i.vertexAttribDivisor(E,N),z[E]=N)}function v(){let E=o.newAttributes,N=o.enabledAttributes;for(let G=0,B=N.length;G<B;G++)N[G]!==E[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function M(E,N,G,B,z,V,D){D===!0?i.vertexAttribIPointer(E,N,G,z,V):i.vertexAttribPointer(E,N,G,B,z,V)}function w(E,N,G,B){x();let z=B.attributes,V=G.getAttributes(),D=N.defaultAttributeValues;for(let K in V){let W=V[K];if(W.location>=0){let Q=z[K];if(Q===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(Q=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(Q=E.instanceColor)),Q!==void 0){let ct=Q.normalized,pt=Q.itemSize,at=t.get(Q);if(at===void 0)continue;let ne=at.buffer,$=at.type,st=at.bytesPerElement,Mt=$===i.INT||$===i.UNSIGNED_INT||Q.gpuType===Ru;if(Q.isInterleavedBufferAttribute){let ut=Q.data,zt=ut.stride,Ht=Q.offset;if(ut.isInstancedInterleavedBuffer){for(let Jt=0;Jt<W.locationSize;Jt++)p(W.location+Jt,ut.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Jt=0;Jt<W.locationSize;Jt++)g(W.location+Jt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Jt=0;Jt<W.locationSize;Jt++)M(W.location+Jt,pt/W.locationSize,$,ct,zt*st,(Ht+pt/W.locationSize*Jt)*st,Mt)}else{if(Q.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)p(W.location+ut,Q.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ut=0;ut<W.locationSize;ut++)g(W.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let ut=0;ut<W.locationSize;ut++)M(W.location+ut,pt/W.locationSize,$,ct,pt*st,pt/W.locationSize*ut*st,Mt)}}else if(D!==void 0){let ct=D[K];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(W.location,ct);break;case 3:i.vertexAttrib3fv(W.location,ct);break;case 4:i.vertexAttrib4fv(W.location,ct);break;default:i.vertexAttrib1fv(W.location,ct)}}}}v()}function I(){L();for(let E in n){let N=n[E];for(let G in N){let B=N[G];for(let z in B)h(B[z].object),delete B[z];delete N[G]}delete n[E]}}function T(E){if(n[E.id]===void 0)return;let N=n[E.id];for(let G in N){let B=N[G];for(let z in B)h(B[z].object),delete B[z];delete N[G]}delete n[E.id]}function C(E){for(let N in n){let G=n[N];if(G[E.id]===void 0)continue;let B=G[E.id];for(let z in B)h(B[z].object),delete B[z];delete G[E.id]}}function L(){S(),r=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function Av(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let m=0;m<d;m++)f+=h[m];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)r(c[m],h[m],u[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x]*u[x];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rv(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Qn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===Hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ki&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zi&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:I,maxSamples:T}}function Cv(i){let t=this,e=null,n=0,s=!1,o=!1,r=new Bi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||m===null||m.length===0||o&&!g)o?h(null):c();else{let v=o?0:n,M=v*4,w=p.clippingState||null;l.value=w,w=h(m,u,M,f);for(let I=0;I!==M;++I)w[I]=e[I];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,m){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,w=f;M!==x;++M,w+=4)r.copy(d[M]).applyMatrix4(v,a),r.normal.toArray(g,w),g[w+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Iv(i){let t=new WeakMap;function e(r,a){return a===dh?r.mapping=Ho:a===fh&&(r.mapping=Go),r}function n(r){if(r&&r.isTexture){let a=r.mapping;if(a===dh||a===fh)if(t.has(r)){let l=t.get(r).texture;return e(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Yh(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}var rl=class extends sl{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zo=4,Gf=[.125,.215,.35,.446,.526,.582],ks=20,Xc=new rl,Wf=new St,Yc=null,Zc=0,$c=0,jc=!1,zs=(1+Math.sqrt(5))/2,Do=1/zs,qf=[new _(-zs,Do,0),new _(zs,Do,0),new _(-Do,0,zs),new _(Do,0,zs),new _(0,zs,-Do),new _(0,zs,Do),new _(-1,1,-1),new _(1,1,-1),new _(-1,1,1),new _(1,1,1)],al=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Yc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yc,Zc,$c),this._renderer.xr.enabled=jc,t.scissorTest=!1,Ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ho||t.mapping===Go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),$c=this._renderer.getActiveMipmapLevel(),jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:di,minFilter:di,generateMipmaps:!1,type:Hr,format:Qn,colorSpace:jo,depthBuffer:!1},s=Xf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(t,e,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pv(o)),this._blurMaterial=Nv(o,t,e)}return s}_compileMaterial(t){let e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,Xc)}_sceneToCubeUV(t,e,n,s){let a=new ln(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Wf),h.toneMapping=us,h.autoClear=!1;let f=new we({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new Et(new Fe,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Wf),x=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;Ua(s,v*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ho||t.mapping===Go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yf());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new Et(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;Ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Xc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=qf[(s-o-1)%qf.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Et(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*ks-1),x=o/m,g=isFinite(o)?1+Math.floor(h*x):ks;g>ks&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ks}`);let p=[],v=0;for(let C=0;C<ks;++C){let L=C/x,S=Math.exp(-L*L/2);p.push(S),C===0?v+=S:C<g&&(v+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=m,u.mipInt.value=M-n;let w=this._sizeLods[s],I=3*w*(s>M-zo?s-M+zo:0),T=4*(this._cubeSize-w);Ua(e,I,T,3*w,2*w),l.setRenderTarget(e),l.render(d,Xc)}};function Pv(i){let t=[],e=[],n=[],s=i,o=i-zo+1+Gf.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let l=1/a;r>i-zo?l=Gf[r-i+zo-1]:r===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),M=new Float32Array(g*m*f),w=new Float32Array(p*m*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,L=T>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(S,x*m*T),M.set(u,g*m*T);let E=[T,T,T,T,T,T];w.set(E,p*m*T)}let I=new gn;I.setAttribute("position",new mn(v,x)),I.setAttribute("uv",new mn(M,g)),I.setAttribute("faceIndex",new mn(w,p)),t.push(I),s>zo&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xf(i,t,e){let n=new Vi(i,t,e);return n.texture.mapping=Al,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ua(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nv(i,t,e){let n=new Float32Array(ks),s=new _(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Yf(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Zf(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cs,depthTest:!1,depthWrite:!1})}function Fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===dh||l===fh,h=l===Ho||l===Go;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new al(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new al(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Fv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bv(i,t,e,n){let s={},o=new WeakMap;function r(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);for(let m in u.morphAttributes){let x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}u.removeEventListener("dispose",r),delete s[u.id];let f=o.get(u);f&&(t.remove(f),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let m in u)t.update(u[m],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,m=d.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let M=0,w=v.length;M<w;M+=3){let I=v[M+0],T=v[M+1],C=v[M+2];u.push(I,T,T,C,C,I)}}else if(m!==void 0){let v=m.array;x=m.version;for(let M=0,w=v.length/3-1;M<w;M+=3){let I=M+0,T=M+1,C=M+2;u.push(I,T,T,C,C,I)}}else return;let g=new(Bp(u)?il:nl)(u,1);g.version=x;let p=o.get(d);p&&t.remove(p),o.set(d,g)}function h(d){let u=o.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Dv(i,t,e){let n;function s(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*r),e.update(f,n,1)}function c(u,f,m){m!==0&&(i.drawElementsInstanced(n,f,o,u*r,m),e.update(f,n,m))}function h(u,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function d(u,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)c(u[p]/r,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,u,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function zv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Uv(i,t,e){let n=new WeakMap,s=new be;function o(r,a,l){let c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),x===!0&&(M=3);let w=a.attributes.position.count*M,I=1;w>t.maxTextureSize&&(I=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let T=new Float32Array(w*I*4*d),C=new Qa(T,w,I,d);C.type=zi,C.needsUpdate=!0;let L=M*4;for(let E=0;E<d;E++){let N=g[E],G=p[E],B=v[E],z=w*I*4*E;for(let V=0;V<N.count;V++){let D=V*L;f===!0&&(s.fromBufferAttribute(N,V),T[z+D+0]=s.x,T[z+D+1]=s.y,T[z+D+2]=s.z,T[z+D+3]=0),m===!0&&(s.fromBufferAttribute(G,V),T[z+D+4]=s.x,T[z+D+5]=s.y,T[z+D+6]=s.z,T[z+D+7]=0),x===!0&&(s.fromBufferAttribute(B,V),T[z+D+8]=s.x,T[z+D+9]=s.y,T[z+D+10]=s.z,T[z+D+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new wt(w,I)},n.set(a,u),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function Ov(i,t,e,n){let s=new WeakMap;function o(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}var ll=class extends Cn{constructor(t,e,n,s,o,r,a,l,c,h=Uo){if(h!==Uo&&h!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Uo&&(n=Gs),n===void 0&&h===qo&&(n=Wo),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Rn,this.minFilter=l!==void 0?l:Rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Op=new Cn,$f=new ll(1,1),kp=new Qa,Vp=new qh,Hp=new ol,jf=[],Jf=[],Kf=new Float32Array(16),Qf=new Float32Array(9),tp=new Float32Array(4);function Jo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,o=jf[s];if(o===void 0&&(o=new Float32Array(s),jf[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cl(i,t){let e=Jf[t];e===void 0&&(e=new Int32Array(t),Jf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function kv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function Hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function Gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Wv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;tp.set(n),i.uniformMatrix2fv(this.addr,!1,tp),Ye(e,n)}}function qv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;Qf.set(n),i.uniformMatrix3fv(this.addr,!1,Qf),Ye(e,n)}}function Xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;Kf.set(n),i.uniformMatrix4fv(this.addr,!1,Kf),Ye(e,n)}}function Yv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function $v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function jv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Jv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Qv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function e_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?($f.compareFunction=Fp,o=$f):o=Op,e.setTexture2D(t||o,s)}function n_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vp,s)}function i_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hp,s)}function s_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kp,s)}function o_(i){switch(i){case 5126:return kv;case 35664:return Vv;case 35665:return Hv;case 35666:return Gv;case 35674:return Wv;case 35675:return qv;case 35676:return Xv;case 5124:case 35670:return Yv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return jv;case 5125:return Jv;case 36294:return Kv;case 36295:return Qv;case 36296:return t_;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return n_;case 35680:case 36300:case 36308:case 36293:return i_;case 36289:case 36303:case 36311:case 36292:return s_}}function r_(i,t){i.uniform1fv(this.addr,t)}function a_(i,t){let e=Jo(t,this.size,2);i.uniform2fv(this.addr,e)}function l_(i,t){let e=Jo(t,this.size,3);i.uniform3fv(this.addr,e)}function c_(i,t){let e=Jo(t,this.size,4);i.uniform4fv(this.addr,e)}function h_(i,t){let e=Jo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function u_(i,t){let e=Jo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function d_(i,t){let e=Jo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function f_(i,t){i.uniform1iv(this.addr,t)}function p_(i,t){i.uniform2iv(this.addr,t)}function m_(i,t){i.uniform3iv(this.addr,t)}function g_(i,t){i.uniform4iv(this.addr,t)}function y_(i,t){i.uniform1uiv(this.addr,t)}function x_(i,t){i.uniform2uiv(this.addr,t)}function v_(i,t){i.uniform3uiv(this.addr,t)}function __(i,t){i.uniform4uiv(this.addr,t)}function b_(i,t,e){let n=this.cache,s=t.length,o=Cl(e,s);Xe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Op,o[r])}function w_(i,t,e){let n=this.cache,s=t.length,o=Cl(e,s);Xe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Vp,o[r])}function M_(i,t,e){let n=this.cache,s=t.length,o=Cl(e,s);Xe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Hp,o[r])}function E_(i,t,e){let n=this.cache,s=t.length,o=Cl(e,s);Xe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||kp,o[r])}function S_(i){switch(i){case 5126:return r_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return y_;case 36294:return x_;case 36295:return v_;case 36296:return __;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return E_}}var Zh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o_(e.type)}},$h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S_(e.type)}},jh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],n)}}},Jc=/(\w+)(\])?(\[|\.)?/g;function ep(i,t){i.seq.push(t),i.map[t.id]=t}function T_(i,t,e){let n=i.name,s=n.length;for(Jc.lastIndex=0;;){let o=Jc.exec(n),r=Jc.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){ep(e,c===void 0?new Zh(a,i,t):new $h(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new jh(a),ep(e,d)),e=d}}}var ko=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);T_(o,r,this)}}setValue(t,e,n,s){let o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&n.push(r)}return n}};function np(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var A_=37297,R_=0;function C_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var ip=new Xt;function I_(i){he._getMatrix(ip,he.workingColorSpace,i);let t=`mat3( ${ip.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Rl:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+C_(i.getShaderSource(t),r)}else return s}function P_(i,t){let e=I_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function N_(i,t){let e;switch(t){case sg:e="Linear";break;case og:e="Reinhard";break;case rg:e="Cineon";break;case Au:e="ACESFilmic";break;case lg:e="AgX";break;case cg:e="Neutral";break;case ag:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oa=new _;function L_(){he.getLuminanceCoefficients(Oa);let i=Oa.x.toFixed(4),t=Oa.y.toFixed(4),e=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function B_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function D_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(t,s),r=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Ir(i){return i!==""}function op(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jh(i){return i.replace(z_,O_)}var U_=new Map;function O_(i,t){let e=Zt[t];if(e===void 0){let n=U_.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jh(e)}var k_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ap(i){return i.replace(k_,V_)}function V_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function lp(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function H_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===z0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fi&&(t="SHADOWMAP_TYPE_VSM"),t}function G_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ho:case Go:t="ENVMAP_TYPE_CUBE";break;case Al:t="ENVMAP_TYPE_CUBE_UV";break}return t}function W_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Go:t="ENVMAP_MODE_REFRACTION";break}return t}function q_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bp:t="ENVMAP_BLENDING_MULTIPLY";break;case ng:t="ENVMAP_BLENDING_MIX";break;case ig:t="ENVMAP_BLENDING_ADD";break}return t}function X_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Y_(i,t,e,n){let s=i.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,l=H_(e),c=G_(e),h=W_(e),d=q_(e),u=X_(e),f=F_(e),m=B_(o),x=s.createProgram(),g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ir).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(g=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==us?"#define TONE_MAPPING":"",e.toneMapping!==us?Zt.tonemapping_pars_fragment:"",e.toneMapping!==us?N_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,P_("linearToOutputTexel",e.outputColorSpace),L_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),r=Jh(r),r=op(r,e),r=rp(r,e),a=Jh(a),a=op(a,e),a=rp(a,e),r=ap(r),a=ap(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+g+r,w=v+p+a,I=np(s,s.VERTEX_SHADER,M),T=np(s,s.FRAGMENT_SHADER,w);s.attachShader(x,I),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(N){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(I).trim(),z=s.getShaderInfoLog(T).trim(),V=!0,D=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,T);else{let K=sp(s,I,"vertex"),W=sp(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+K+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||z==="")&&(D=!1);D&&(N.diagnostics={runnable:V,programLog:G,vertexShader:{log:B,prefix:g},fragmentShader:{log:z,prefix:p}})}s.deleteShader(I),s.deleteShader(T),L=new ko(s,x),S=D_(s,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,A_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=T,this}var Z_=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qh(t),e.set(t,n)),n}},Qh=class{constructor(t){this.id=Z_++,this.code=t,this.usedTimes=0}};function $_(i,t,e,n,s,o,r){let a=new el,l=new Kh,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,E,N,G,B){let z=G.fog,V=B.geometry,D=S.isMeshStandardMaterial?G.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||D),W=K&&K.mapping===Al?K.image.height:null,Q=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ct=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=ct!==void 0?ct.length:0,at=0;V.morphAttributes.position!==void 0&&(at=1),V.morphAttributes.normal!==void 0&&(at=2),V.morphAttributes.color!==void 0&&(at=3);let ne,$,st,Mt;if(Q){let ve=ui[Q];ne=ve.vertexShader,$=ve.fragmentShader}else ne=S.vertexShader,$=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),Mt=l.getFragmentShaderID(S);let ut=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Ht=B.isInstancedMesh===!0,Jt=B.isBatchedMesh===!0,De=!!S.map,le=!!S.matcap,ke=!!K,H=!!S.aoMap,zn=!!S.lightMap,ie=!!S.bumpMap,se=!!S.normalMap,Bt=!!S.displacementMap,Ae=!!S.emissiveMap,Lt=!!S.metalnessMap,P=!!S.roughnessMap,A=S.anisotropy>0,q=S.clearcoat>0,tt=S.dispersion>0,nt=S.iridescence>0,j=S.sheen>0,Ct=S.transmission>0,ft=A&&!!S.anisotropyMap,vt=q&&!!S.clearcoatMap,ce=q&&!!S.clearcoatNormalMap,ot=q&&!!S.clearcoatRoughnessMap,_t=nt&&!!S.iridescenceMap,Dt=nt&&!!S.iridescenceThicknessMap,Ut=j&&!!S.sheenColorMap,bt=j&&!!S.sheenRoughnessMap,oe=!!S.specularMap,Yt=!!S.specularColorMap,Ee=!!S.specularIntensityMap,U=Ct&&!!S.transmissionMap,dt=Ct&&!!S.thicknessMap,Z=!!S.gradientMap,et=!!S.alphaMap,yt=S.alphaTest>0,mt=!!S.alphaHash,Wt=!!S.extensions,Ue=us;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let on={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:$,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Jt,batchingColor:Jt&&B._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&B.instanceColor!==null,instancingMorph:Ht&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:jo,alphaToCoverage:!!S.alphaToCoverage,map:De,matcap:le,envMap:ke,envMapMode:ke&&K.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:zn,bumpMap:ie,normalMap:se,displacementMap:u&&Bt,emissiveMap:Ae,normalMapObjectSpace:se&&S.normalMapType===fg,normalMapTangentSpace:se&&S.normalMapType===Lp,metalnessMap:Lt,roughnessMap:P,anisotropy:A,anisotropyMap:ft,clearcoat:q,clearcoatMap:vt,clearcoatNormalMap:ce,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:nt,iridescenceMap:_t,iridescenceThicknessMap:Dt,sheen:j,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:oe,specularColorMap:Yt,specularIntensityMap:Ee,transmission:Ct,transmissionMap:U,thicknessMap:dt,gradientMap:Z,opaque:S.transparent===!1&&S.blending===hs&&S.alphaToCoverage===!1,alphaMap:et,alphaTest:yt,alphaHash:mt,combine:S.combine,mapUv:De&&x(S.map.channel),aoMapUv:H&&x(S.aoMap.channel),lightMapUv:zn&&x(S.lightMap.channel),bumpMapUv:ie&&x(S.bumpMap.channel),normalMapUv:se&&x(S.normalMap.channel),displacementMapUv:Bt&&x(S.displacementMap.channel),emissiveMapUv:Ae&&x(S.emissiveMap.channel),metalnessMapUv:Lt&&x(S.metalnessMap.channel),roughnessMapUv:P&&x(S.roughnessMap.channel),anisotropyMapUv:ft&&x(S.anisotropyMap.channel),clearcoatMapUv:vt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&x(S.sheenRoughnessMap.channel),specularMapUv:oe&&x(S.specularMap.channel),specularColorMapUv:Yt&&x(S.specularColorMap.channel),specularIntensityMapUv:Ee&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:dt&&x(S.thicknessMap.channel),alphaMapUv:et&&x(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(se||A),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(De||et),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:zt,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:at,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:De&&S.map.isVideoTexture===!0&&he.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:Ae&&S.emissiveMap.isVideoTexture===!0&&he.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Di,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&S.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return on.vertexUv1s=c.has(1),on.vertexUv2s=c.has(2),on.vertexUv3s=c.has(3),c.clear(),on}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(v(E,S),M(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function w(S){let E=m[S.type],N;if(E){let G=ui[E];N=Og.clone(G.uniforms)}else N=S.uniforms;return N}function I(S,E){let N;for(let G=0,B=h.length;G<B;G++){let z=h[G];if(z.cacheKey===E){N=z,++N.usedTimes;break}}return N===void 0&&(N=new Y_(i,E,S,o),h.push(N)),N}function T(S){if(--S.usedTimes===0){let E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:I,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:L}}function j_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function J_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hp(){let i=[],t=0,e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d,u,f,m,x,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function a(d,u,f,m,x,g){let p=r(d,u,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,m,x,g){let p=r(d,u,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||J_),n.length>1&&n.sort(u||cp),s.length>1&&s.sort(u||cp)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function K_(){let i=new WeakMap;function t(n,s){let o=i.get(n),r;return o===void 0?(r=new hp,i.set(n,[r])):s>=o.length?(r=new hp,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new _,color:new St};break;case"SpotLight":e={position:new _,direction:new _,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new _,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new _,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new _,halfWidth:new _,halfHeight:new _};break}return i[t.id]=e,e}}}function tb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var eb=0;function nb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ib(i){let t=new Q_,e=tb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new _);let s=new _,o=new Ne,r=new Ne;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,M=0,w=0,I=0,T=0,C=0;c.sort(nb);for(let S=0,E=c.length;S<E;S++){let N=c[S],G=N.color,B=N.intensity,z=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=G.r*B,d+=G.g*B,u+=G.b*B;else if(N.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(N.sh.coefficients[D],B);C++}else if(N.isDirectionalLight){let D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let K=N.shadow,W=e.get(N);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=N.shadow.matrix,v++}n.directional[f]=D,f++}else if(N.isSpotLight){let D=t.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(G).multiplyScalar(B),D.distance=z,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,n.spot[x]=D;let K=N.shadow;if(N.map&&(n.spotLightMap[I]=N.map,I++,K.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[x]=K.matrix,N.castShadow){let W=e.get(N);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=V,w++}x++}else if(N.isRectAreaLight){let D=t.get(N);D.color.copy(G).multiplyScalar(B),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=D,g++}else if(N.isPointLight){let D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),D.distance=N.distance,D.decay=N.decay,N.castShadow){let K=N.shadow,W=e.get(N);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=N.shadow.matrix,M++}n.point[m]=D,m++}else if(N.isHemisphereLight){let D=t.get(N);D.skyColor.copy(N.color).multiplyScalar(B),D.groundColor.copy(N.groundColor).multiplyScalar(B),n.hemi[p]=D,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.directionalLength!==f||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==w||L.numSpotMaps!==I||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.directionalLength=f,L.pointLength=m,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=w,L.numSpotMaps=I,L.numLightProbes=C,n.version=eb++)}function l(c,h){let d=0,u=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let M=c[p];if(M.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(M.isSpotLight){let w=n.spot[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let w=n.rectArea[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),r.identity(),o.copy(M.matrixWorld),o.premultiply(g),r.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){let w=n.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){let w=n.hemi[x];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function up(i){let t=new ib(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function sb(i){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new up(i),t.set(s,[a])):o>=r.length?(a=new up(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var tu=class extends ps{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eu=class extends ps{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ab(i,t,e){let n=new zr,s=new wt,o=new wt,r=new be,a=new tu({depthPacking:dg}),l=new eu,c={},h=e.maxTextureSize,d={[ds]:cn,[cn]:ds,[Di]:Di},u=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:ob,fragmentShader:rb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new gn;m.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Et(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let p=this.type;this.render=function(T,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(cs),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let B=p!==Fi&&this.type===Fi,z=p===Fi&&this.type!==Fi;for(let V=0,D=T.length;V<D;V++){let K=T[V],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let Q=W.getFrameExtents();if(s.multiply(Q),o.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/Q.x),s.x=o.x*Q.x,W.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/Q.y),s.y=o.y*Q.y,W.mapSize.y=o.y)),W.map===null||B===!0||z===!0){let pt=this.type!==Fi?{minFilter:Rn,magFilter:Rn}:{};W.map!==null&&W.map.dispose(),W.map=new Vi(s.x,s.y,pt),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ct=W.getViewportCount();for(let pt=0;pt<ct;pt++){let at=W.getViewport(pt);r.set(o.x*at.x,o.y*at.y,o.x*at.z,o.y*at.w),G.viewport(r),W.updateMatrices(K,pt),n=W.getFrustum(),w(C,L,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===Fi&&v(W,L),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,E,N)};function v(T,C){let L=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Vi(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,L,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,L,f,x,null)}function M(T,C,L,S){let E=null,N=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)E=N;else if(E=L.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let G=E.uuid,B=C.uuid,z=c[G];z===void 0&&(z={},c[G]=z);let V=z[B];V===void 0&&(V=E.clone(),z[B]=V,C.addEventListener("dispose",I)),E=V}if(E.visible=C.visible,E.wireframe=C.wireframe,S===Fi?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=i.properties.get(E);G.light=L}return E}function w(T,C,L,S,E){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Fi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let B=t.update(T),z=T.material;if(Array.isArray(z)){let V=B.groups;for(let D=0,K=V.length;D<K;D++){let W=V[D],Q=z[W.materialIndex];if(Q&&Q.visible){let ct=M(T,Q,S,E);T.onBeforeShadow(i,T,C,L,B,ct,W),i.renderBufferDirect(L,null,B,ct,T,W),T.onAfterShadow(i,T,C,L,B,ct,W)}}}else if(z.visible){let V=M(T,z,S,E);T.onBeforeShadow(i,T,C,L,B,V,null),i.renderBufferDirect(L,null,B,V,T,null),T.onAfterShadow(i,T,C,L,B,V,null)}}let G=T.children;for(let B=0,z=G.length;B<z;B++)w(G[B],C,L,S,E)}function I(T){T.target.removeEventListener("dispose",I);for(let L in c){let S=c[L],E=T.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var lb={[oh]:rh,[ah]:hh,[lh]:uh,[Vo]:ch,[rh]:oh,[hh]:ah,[uh]:lh,[ch]:Vo};function cb(i,t){function e(){let U=!1,dt=new be,Z=null,et=new be(0,0,0,0);return{setMask:function(yt){Z!==yt&&!U&&(i.colorMask(yt,yt,yt,yt),Z=yt)},setLocked:function(yt){U=yt},setClear:function(yt,mt,Wt,Ue,on){on===!0&&(yt*=Ue,mt*=Ue,Wt*=Ue),dt.set(yt,mt,Wt,Ue),et.equals(dt)===!1&&(i.clearColor(yt,mt,Wt,Ue),et.copy(dt))},reset:function(){U=!1,Z=null,et.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,Z=null,et=null,yt=null;return{setReversed:function(mt){if(dt!==mt){let Wt=t.get("EXT_clip_control");dt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let Ue=yt;yt=null,this.setClear(Ue)}dt=mt},getReversed:function(){return dt},setTest:function(mt){mt?ut(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(mt){Z!==mt&&!U&&(i.depthMask(mt),Z=mt)},setFunc:function(mt){if(dt&&(mt=lb[mt]),et!==mt){switch(mt){case oh:i.depthFunc(i.NEVER);break;case rh:i.depthFunc(i.ALWAYS);break;case ah:i.depthFunc(i.LESS);break;case Vo:i.depthFunc(i.LEQUAL);break;case lh:i.depthFunc(i.EQUAL);break;case ch:i.depthFunc(i.GEQUAL);break;case hh:i.depthFunc(i.GREATER);break;case uh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=mt}},setLocked:function(mt){U=mt},setClear:function(mt){yt!==mt&&(dt&&(mt=1-mt),i.clearDepth(mt),yt=mt)},reset:function(){U=!1,Z=null,et=null,yt=null,dt=!1}}}function s(){let U=!1,dt=null,Z=null,et=null,yt=null,mt=null,Wt=null,Ue=null,on=null;return{setTest:function(ve){U||(ve?ut(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ve){dt!==ve&&!U&&(i.stencilMask(ve),dt=ve)},setFunc:function(ve,Zn,Ai){(Z!==ve||et!==Zn||yt!==Ai)&&(i.stencilFunc(ve,Zn,Ai),Z=ve,et=Zn,yt=Ai)},setOp:function(ve,Zn,Ai){(mt!==ve||Wt!==Zn||Ue!==Ai)&&(i.stencilOp(ve,Zn,Ai),mt=ve,Wt=Zn,Ue=Ai)},setLocked:function(ve){U=ve},setClear:function(ve){on!==ve&&(i.clearStencil(ve),on=ve)},reset:function(){U=!1,dt=null,Z=null,et=null,yt=null,mt=null,Wt=null,Ue=null,on=null}}}let o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,M=null,w=null,I=null,T=null,C=new St(0,0,0),L=0,S=!1,E=null,N=null,G=null,B=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,K=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),D=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),D=K>=2);let Q=null,ct={},pt=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),ne=new be().fromArray(pt),$=new be().fromArray(at);function st(U,dt,Z,et){let yt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(U,mt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<Z;Wt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(dt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return mt}let Mt={};Mt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),r.setFunc(Vo),ie(!1),se(pf),ut(i.CULL_FACE),H(cs);function ut(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function zt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ht(U,dt){return d[U]!==dt?(i.bindFramebuffer(U,dt),d[U]=dt,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Jt(U,dt){let Z=f,et=!1;if(U){Z=u.get(dt),Z===void 0&&(Z=[],u.set(dt,Z));let yt=U.textures;if(Z.length!==yt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Wt=yt.length;mt<Wt;mt++)Z[mt]=i.COLOR_ATTACHMENT0+mt;Z.length=yt.length,et=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,et=!0);et&&i.drawBuffers(Z)}function De(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let le={[Us]:i.FUNC_ADD,[O0]:i.FUNC_SUBTRACT,[k0]:i.FUNC_REVERSE_SUBTRACT};le[V0]=i.MIN,le[H0]=i.MAX;let ke={[G0]:i.ZERO,[W0]:i.ONE,[q0]:i.SRC_COLOR,[ih]:i.SRC_ALPHA,[J0]:i.SRC_ALPHA_SATURATE,[$0]:i.DST_COLOR,[Y0]:i.DST_ALPHA,[X0]:i.ONE_MINUS_SRC_COLOR,[sh]:i.ONE_MINUS_SRC_ALPHA,[j0]:i.ONE_MINUS_DST_COLOR,[Z0]:i.ONE_MINUS_DST_ALPHA,[K0]:i.CONSTANT_COLOR,[Q0]:i.ONE_MINUS_CONSTANT_COLOR,[tg]:i.CONSTANT_ALPHA,[eg]:i.ONE_MINUS_CONSTANT_ALPHA};function H(U,dt,Z,et,yt,mt,Wt,Ue,on,ve){if(U===cs){x===!0&&(zt(i.BLEND),x=!1);return}if(x===!1&&(ut(i.BLEND),x=!0),U!==U0){if(U!==g||ve!==S){if((p!==Us||w!==Us)&&(i.blendEquation(i.FUNC_ADD),p=Us,w=Us),ve)switch(U){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFunc(i.ONE,i.ONE);break;case mf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case mf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,M=null,I=null,T=null,C.set(0,0,0),L=0,g=U,S=ve}return}yt=yt||dt,mt=mt||Z,Wt=Wt||et,(dt!==p||yt!==w)&&(i.blendEquationSeparate(le[dt],le[yt]),p=dt,w=yt),(Z!==v||et!==M||mt!==I||Wt!==T)&&(i.blendFuncSeparate(ke[Z],ke[et],ke[mt],ke[Wt]),v=Z,M=et,I=mt,T=Wt),(Ue.equals(C)===!1||on!==L)&&(i.blendColor(Ue.r,Ue.g,Ue.b,on),C.copy(Ue),L=on),g=U,S=!1}function zn(U,dt){U.side===Di?zt(i.CULL_FACE):ut(i.CULL_FACE);let Z=U.side===cn;dt&&(Z=!Z),ie(Z),U.blending===hs&&U.transparent===!1?H(cs):H(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),o.setMask(U.colorWrite);let et=U.stencilWrite;a.setTest(et),et&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(U){E!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),E=U)}function se(U){U!==B0?(ut(i.CULL_FACE),U!==N&&(U===pf?i.cullFace(i.BACK):U===D0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),N=U}function Bt(U){U!==G&&(D&&i.lineWidth(U),G=U)}function Ae(U,dt,Z){U?(ut(i.POLYGON_OFFSET_FILL),(B!==dt||z!==Z)&&(i.polygonOffset(dt,Z),B=dt,z=Z)):zt(i.POLYGON_OFFSET_FILL)}function Lt(U){U?ut(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function P(U){U===void 0&&(U=i.TEXTURE0+V-1),Q!==U&&(i.activeTexture(U),Q=U)}function A(U,dt,Z){Z===void 0&&(Q===null?Z=i.TEXTURE0+V-1:Z=Q);let et=ct[Z];et===void 0&&(et={type:void 0,texture:void 0},ct[Z]=et),(et.type!==U||et.texture!==dt)&&(Q!==Z&&(i.activeTexture(Z),Q=Z),i.bindTexture(U,dt||Mt[U]),et.type=U,et.texture=dt)}function q(){let U=ct[Q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(U){ne.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ne.copy(U))}function bt(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function oe(U,dt){let Z=c.get(dt);Z===void 0&&(Z=new WeakMap,c.set(dt,Z));let et=Z.get(U);et===void 0&&(et=i.getUniformBlockIndex(dt,U.name),Z.set(U,et))}function Yt(U,dt){let et=c.get(dt).get(U);l.get(dt)!==et&&(i.uniformBlockBinding(dt,et,U.__bindingPointIndex),l.set(dt,et))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,ct={},d={},u=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,M=null,w=null,I=null,T=null,C=new St(0,0,0),L=0,S=!1,E=null,N=null,G=null,B=null,z=null,ne.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ut,disable:zt,bindFramebuffer:Ht,drawBuffers:Jt,useProgram:De,setBlending:H,setMaterial:zn,setFlipSided:ie,setCullFace:se,setLineWidth:Bt,setPolygonOffset:Ae,setScissorTest:Lt,activeTexture:P,bindTexture:A,unbindTexture:q,compressedTexImage2D:tt,compressedTexImage3D:nt,texImage2D:_t,texImage3D:Dt,updateUBOMapping:oe,uniformBlockBinding:Yt,texStorage2D:ce,texStorage3D:ot,texSubImage2D:j,texSubImage3D:Ct,compressedTexSubImage2D:ft,compressedTexSubImage3D:vt,scissor:Ut,viewport:bt,reset:Ee}}function dp(i,t,e,n){let s=hb(n);switch(e){case Tp:return i*t;case Rp:return i*t;case Cp:return i*t*2;case Ip:return i*t/s.components*s.byteLength;case Pu:return i*t/s.components*s.byteLength;case Pp:return i*t*2/s.components*s.byteLength;case Nu:return i*t*2/s.components*s.byteLength;case Ap:return i*t*3/s.components*s.byteLength;case Qn:return i*t*4/s.components*s.byteLength;case Lu:return i*t*4/s.components*s.byteLength;case Wa:case qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gh:case xh:return Math.max(i,16)*Math.max(t,8)/4;case mh:case yh:return Math.max(i,8)*Math.max(t,8)/2;case vh:case _h:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Th:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Za:case Dh:case zh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Np:case Uh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Oh:case kh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hb(i){switch(i){case ki:case Mp:return{byteLength:1,components:1};case Dr:case Ep:case Hr:return{byteLength:2,components:1};case Cu:case Iu:return{byteLength:2,components:4};case Gs:case Ru:case zi:return{byteLength:4,components:1};case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ub(i,t,e,n,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,A){return f?new OffscreenCanvas(P,A):Ja("canvas")}function x(P,A,q){let tt=1,nt=Lt(P);if((nt.width>q||nt.height>q)&&(tt=q/Math.max(nt.width,nt.height)),tt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let j=Math.floor(tt*nt.width),Ct=Math.floor(tt*nt.height);d===void 0&&(d=m(j,Ct));let ft=A?m(j,Ct):d;return ft.width=j,ft.height=Ct,ft.getContext("2d").drawImage(P,0,0,j,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+j+"x"+Ct+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,A,q,tt,nt=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=A;if(A===i.RED&&(q===i.FLOAT&&(j=i.R32F),q===i.HALF_FLOAT&&(j=i.R16F),q===i.UNSIGNED_BYTE&&(j=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.R8UI),q===i.UNSIGNED_SHORT&&(j=i.R16UI),q===i.UNSIGNED_INT&&(j=i.R32UI),q===i.BYTE&&(j=i.R8I),q===i.SHORT&&(j=i.R16I),q===i.INT&&(j=i.R32I)),A===i.RG&&(q===i.FLOAT&&(j=i.RG32F),q===i.HALF_FLOAT&&(j=i.RG16F),q===i.UNSIGNED_BYTE&&(j=i.RG8)),A===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RG8UI),q===i.UNSIGNED_SHORT&&(j=i.RG16UI),q===i.UNSIGNED_INT&&(j=i.RG32UI),q===i.BYTE&&(j=i.RG8I),q===i.SHORT&&(j=i.RG16I),q===i.INT&&(j=i.RG32I)),A===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGB8UI),q===i.UNSIGNED_SHORT&&(j=i.RGB16UI),q===i.UNSIGNED_INT&&(j=i.RGB32UI),q===i.BYTE&&(j=i.RGB8I),q===i.SHORT&&(j=i.RGB16I),q===i.INT&&(j=i.RGB32I)),A===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),q===i.UNSIGNED_INT&&(j=i.RGBA32UI),q===i.BYTE&&(j=i.RGBA8I),q===i.SHORT&&(j=i.RGBA16I),q===i.INT&&(j=i.RGBA32I)),A===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),A===i.RGBA){let Ct=nt?Rl:he.getTransfer(tt);q===i.FLOAT&&(j=i.RGBA32F),q===i.HALF_FLOAT&&(j=i.RGBA16F),q===i.UNSIGNED_BYTE&&(j=Ct===_e?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function w(P,A){let q;return P?A===null||A===Gs||A===Wo?q=i.DEPTH24_STENCIL8:A===zi?q=i.DEPTH32F_STENCIL8:A===Dr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Gs||A===Wo?q=i.DEPTH_COMPONENT24:A===zi?q=i.DEPTH_COMPONENT32F:A===Dr&&(q=i.DEPTH_COMPONENT16),q}function I(P,A){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rn&&P.minFilter!==di?Math.log2(Math.max(A.width,A.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?A.mipmaps.length:1}function T(P){let A=P.target;A.removeEventListener("dispose",T),L(A),A.isVideoTexture&&h.delete(A)}function C(P){let A=P.target;A.removeEventListener("dispose",C),E(A)}function L(P){let A=n.get(P);if(A.__webglInit===void 0)return;let q=P.source,tt=u.get(q);if(tt){let nt=tt[A.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(P),Object.keys(tt).length===0&&u.delete(q)}n.remove(P)}function S(P){let A=n.get(P);i.deleteTexture(A.__webglTexture);let q=P.source,tt=u.get(q);delete tt[A.__cacheKey],r.memory.textures--}function E(P){let A=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(A.__webglFramebuffer[tt]))for(let nt=0;nt<A.__webglFramebuffer[tt].length;nt++)i.deleteFramebuffer(A.__webglFramebuffer[tt][nt]);else i.deleteFramebuffer(A.__webglFramebuffer[tt]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[tt])}else{if(Array.isArray(A.__webglFramebuffer))for(let tt=0;tt<A.__webglFramebuffer.length;tt++)i.deleteFramebuffer(A.__webglFramebuffer[tt]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let tt=0;tt<A.__webglColorRenderbuffer.length;tt++)A.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[tt]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let q=P.textures;for(let tt=0,nt=q.length;tt<nt;tt++){let j=n.get(q[tt]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),r.memory.textures--),n.remove(q[tt])}n.remove(P)}let N=0;function G(){N=0}function B(){let P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function z(P){let A=[];return A.push(P.wrapS),A.push(P.wrapT),A.push(P.wrapR||0),A.push(P.magFilter),A.push(P.minFilter),A.push(P.anisotropy),A.push(P.internalFormat),A.push(P.format),A.push(P.type),A.push(P.generateMipmaps),A.push(P.premultiplyAlpha),A.push(P.flipY),A.push(P.unpackAlignment),A.push(P.colorSpace),A.join()}function V(P,A){let q=n.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){let tt=P.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(q,P,A);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function D(P,A){let q=n.get(P);if(P.version>0&&q.__version!==P.version){$(q,P,A);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function K(P,A){let q=n.get(P);if(P.version>0&&q.__version!==P.version){$(q,P,A);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function W(P,A){let q=n.get(P);if(P.version>0&&q.__version!==P.version){st(q,P,A);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}let Q={[Br]:i.REPEAT,[Vs]:i.CLAMP_TO_EDGE,[ph]:i.MIRRORED_REPEAT},ct={[Rn]:i.NEAREST,[hg]:i.NEAREST_MIPMAP_NEAREST,[va]:i.NEAREST_MIPMAP_LINEAR,[di]:i.LINEAR,[wc]:i.LINEAR_MIPMAP_NEAREST,[Hs]:i.LINEAR_MIPMAP_LINEAR},pt={[pg]:i.NEVER,[_g]:i.ALWAYS,[mg]:i.LESS,[Fp]:i.LEQUAL,[gg]:i.EQUAL,[vg]:i.GEQUAL,[yg]:i.GREATER,[xg]:i.NOTEQUAL};function at(P,A){if(A.type===zi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===di||A.magFilter===wc||A.magFilter===va||A.magFilter===Hs||A.minFilter===di||A.minFilter===wc||A.minFilter===va||A.minFilter===Hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,Q[A.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,Q[A.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,Q[A.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ct[A.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ct[A.minFilter]),A.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,pt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Rn||A.minFilter!==va&&A.minFilter!==Hs||A.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ne(P,A){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,A.addEventListener("dispose",T));let tt=A.source,nt=u.get(tt);nt===void 0&&(nt={},u.set(tt,nt));let j=z(A);if(j!==P.__cacheKey){nt[j]===void 0&&(nt[j]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),nt[j].usedTimes++;let Ct=nt[P.__cacheKey];Ct!==void 0&&(nt[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(A)),P.__cacheKey=j,P.__webglTexture=nt[j].texture}return q}function $(P,A,q){let tt=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(tt=i.TEXTURE_3D);let nt=ne(P,A),j=A.source;e.bindTexture(tt,P.__webglTexture,i.TEXTURE0+q);let Ct=n.get(j);if(j.version!==Ct.__version||nt===!0){e.activeTexture(i.TEXTURE0+q);let ft=he.getPrimaries(he.workingColorSpace),vt=A.colorSpace===ls?null:he.getPrimaries(A.colorSpace),ce=A.colorSpace===ls||ft===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let ot=x(A.image,!1,s.maxTextureSize);ot=Ae(A,ot);let _t=o.convert(A.format,A.colorSpace),Dt=o.convert(A.type),Ut=M(A.internalFormat,_t,Dt,A.colorSpace,A.isVideoTexture);at(tt,A);let bt,oe=A.mipmaps,Yt=A.isVideoTexture!==!0,Ee=Ct.__version===void 0||nt===!0,U=j.dataReady,dt=I(A,ot);if(A.isDepthTexture)Ut=w(A.format===qo,A.type),Ee&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ut,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,_t,Dt,null));else if(A.isDataTexture)if(oe.length>0){Yt&&Ee&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,oe[0].width,oe[0].height);for(let Z=0,et=oe.length;Z<et;Z++)bt=oe[Z],Yt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,bt.width,bt.height,_t,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,Z,Ut,bt.width,bt.height,0,_t,Dt,bt.data);A.generateMipmaps=!1}else Yt?(Ee&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,ot.width,ot.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,_t,Dt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,_t,Dt,ot.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Yt&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ut,oe[0].width,oe[0].height,ot.depth);for(let Z=0,et=oe.length;Z<et;Z++)if(bt=oe[Z],A.format!==Qn)if(_t!==null)if(Yt){if(U)if(A.layerUpdates.size>0){let yt=dp(bt.width,bt.height,A.format,A.type);for(let mt of A.layerUpdates){let Wt=bt.data.subarray(mt*yt/bt.data.BYTES_PER_ELEMENT,(mt+1)*yt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,mt,bt.width,bt.height,1,_t,Wt)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,ot.depth,_t,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ut,bt.width,bt.height,ot.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,ot.depth,_t,Dt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ut,bt.width,bt.height,ot.depth,0,_t,Dt,bt.data)}else{Yt&&Ee&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,oe[0].width,oe[0].height);for(let Z=0,et=oe.length;Z<et;Z++)bt=oe[Z],A.format!==Qn?_t!==null?Yt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,bt.width,bt.height,_t,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Ut,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,bt.width,bt.height,_t,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,Z,Ut,bt.width,bt.height,0,_t,Dt,bt.data)}else if(A.isDataArrayTexture)if(Yt){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ut,ot.width,ot.height,ot.depth),U)if(A.layerUpdates.size>0){let Z=dp(ot.width,ot.height,A.format,A.type);for(let et of A.layerUpdates){let yt=ot.data.subarray(et*Z/ot.data.BYTES_PER_ELEMENT,(et+1)*Z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,_t,Dt,yt)}A.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,_t,Dt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ot.width,ot.height,ot.depth,0,_t,Dt,ot.data);else if(A.isData3DTexture)Yt?(Ee&&e.texStorage3D(i.TEXTURE_3D,dt,Ut,ot.width,ot.height,ot.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,_t,Dt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ot.width,ot.height,ot.depth,0,_t,Dt,ot.data);else if(A.isFramebufferTexture){if(Ee)if(Yt)e.texStorage2D(i.TEXTURE_2D,dt,Ut,ot.width,ot.height);else{let Z=ot.width,et=ot.height;for(let yt=0;yt<dt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Ut,Z,et,0,_t,Dt,null),Z>>=1,et>>=1}}else if(oe.length>0){if(Yt&&Ee){let Z=Lt(oe[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ut,Z.width,Z.height)}for(let Z=0,et=oe.length;Z<et;Z++)bt=oe[Z],Yt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,_t,Dt,bt):e.texImage2D(i.TEXTURE_2D,Z,Ut,_t,Dt,bt);A.generateMipmaps=!1}else if(Yt){if(Ee){let Z=Lt(ot);e.texStorage2D(i.TEXTURE_2D,dt,Ut,Z.width,Z.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Dt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ut,_t,Dt,ot);g(A)&&p(tt),Ct.__version=j.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function st(P,A,q){if(A.image.length!==6)return;let tt=ne(P,A),nt=A.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);let j=n.get(nt);if(nt.version!==j.__version||tt===!0){e.activeTexture(i.TEXTURE0+q);let Ct=he.getPrimaries(he.workingColorSpace),ft=A.colorSpace===ls?null:he.getPrimaries(A.colorSpace),vt=A.colorSpace===ls||Ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let ce=A.isCompressedTexture||A.image[0].isCompressedTexture,ot=A.image[0]&&A.image[0].isDataTexture,_t=[];for(let et=0;et<6;et++)!ce&&!ot?_t[et]=x(A.image[et],!0,s.maxCubemapSize):_t[et]=ot?A.image[et].image:A.image[et],_t[et]=Ae(A,_t[et]);let Dt=_t[0],Ut=o.convert(A.format,A.colorSpace),bt=o.convert(A.type),oe=M(A.internalFormat,Ut,bt,A.colorSpace),Yt=A.isVideoTexture!==!0,Ee=j.__version===void 0||tt===!0,U=nt.dataReady,dt=I(A,Dt);at(i.TEXTURE_CUBE_MAP,A);let Z;if(ce){Yt&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,oe,Dt.width,Dt.height);for(let et=0;et<6;et++){Z=_t[et].mipmaps;for(let yt=0;yt<Z.length;yt++){let mt=Z[yt];A.format!==Qn?Ut!==null?Yt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,0,0,mt.width,mt.height,Ut,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,oe,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,0,0,mt.width,mt.height,Ut,bt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,oe,mt.width,mt.height,0,Ut,bt,mt.data)}}}else{if(Z=A.mipmaps,Yt&&Ee){Z.length>0&&dt++;let et=Lt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,oe,et.width,et.height)}for(let et=0;et<6;et++)if(ot){Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,_t[et].width,_t[et].height,Ut,bt,_t[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,oe,_t[et].width,_t[et].height,0,Ut,bt,_t[et].data);for(let yt=0;yt<Z.length;yt++){let Wt=Z[yt].image[et].image;Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,0,0,Wt.width,Wt.height,Ut,bt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,oe,Wt.width,Wt.height,0,Ut,bt,Wt.data)}}else{Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ut,bt,_t[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,oe,Ut,bt,_t[et]);for(let yt=0;yt<Z.length;yt++){let mt=Z[yt];Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,0,0,Ut,bt,mt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,oe,Ut,bt,mt.image[et])}}}g(A)&&p(i.TEXTURE_CUBE_MAP),j.__version=nt.version,A.onUpdate&&A.onUpdate(A)}P.__version=A.version}function Mt(P,A,q,tt,nt,j){let Ct=o.convert(q.format,q.colorSpace),ft=o.convert(q.type),vt=M(q.internalFormat,Ct,ft,q.colorSpace),ce=n.get(A),ot=n.get(q);if(ot.__renderTarget=A,!ce.__hasExternalTextures){let _t=Math.max(1,A.width>>j),Dt=Math.max(1,A.height>>j);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,j,vt,_t,Dt,A.depth,0,Ct,ft,null):e.texImage2D(nt,j,vt,_t,Dt,0,Ct,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),se(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,nt,ot.__webglTexture,0,ie(A)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,nt,ot.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(P,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),A.depthBuffer){let tt=A.depthTexture,nt=tt&&tt.isDepthTexture?tt.type:null,j=w(A.stencilBuffer,nt),Ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=ie(A);se(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,j,A.width,A.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,j,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,j,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,P)}else{let tt=A.textures;for(let nt=0;nt<tt.length;nt++){let j=tt[nt],Ct=o.convert(j.format,j.colorSpace),ft=o.convert(j.type),vt=M(j.internalFormat,Ct,ft,j.colorSpace),ce=ie(A);q&&se(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,vt,A.width,A.height):se(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,vt,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,vt,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(P,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let tt=n.get(A.depthTexture);tt.__renderTarget=A,(!tt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),V(A.depthTexture,0);let nt=tt.__webglTexture,j=ie(A);if(A.depthTexture.format===Uo)se(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(A.depthTexture.format===qo)se(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Ht(P){let A=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==P.depthTexture){let tt=P.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),tt){let nt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,tt.removeEventListener("dispose",nt)};tt.addEventListener("dispose",nt),A.__depthDisposeCallback=nt}A.__boundDepthTexture=tt}if(P.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");zt(A.__webglFramebuffer,P)}else if(q){A.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[tt]),A.__webglDepthbuffer[tt]===void 0)A.__webglDepthbuffer[tt]=i.createRenderbuffer(),ut(A.__webglDepthbuffer[tt],P,!1);else{let nt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=A.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ut(A.__webglDepthbuffer,P,!1);else{let tt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(P,A,q){let tt=n.get(P);A!==void 0&&Mt(tt.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ht(P)}function De(P){let A=P.texture,q=n.get(P),tt=n.get(A);P.addEventListener("dispose",C);let nt=P.textures,j=P.isWebGLCubeRenderTarget===!0,Ct=nt.length>1;if(Ct||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=A.version,r.memory.textures++),j){q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[ft]=[];for(let vt=0;vt<A.mipmaps.length;vt++)q.__webglFramebuffer[ft][vt]=i.createFramebuffer()}else q.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let ft=0;ft<A.mipmaps.length;ft++)q.__webglFramebuffer[ft]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ft=0,vt=nt.length;ft<vt;ft++){let ce=n.get(nt[ft]);ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&se(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ft=0;ft<nt.length;ft++){let vt=nt[ft];q.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ft]);let ce=o.convert(vt.format,vt.colorSpace),ot=o.convert(vt.type),_t=M(vt.internalFormat,ce,ot,vt.colorSpace,P.isXRRenderTarget===!0),Dt=ie(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,_t,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,q.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),at(i.TEXTURE_CUBE_MAP,A);for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)Mt(q.__webglFramebuffer[ft][vt],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,vt);else Mt(q.__webglFramebuffer[ft],P,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(A)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,vt=nt.length;ft<vt;ft++){let ce=nt[ft],ot=n.get(ce);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),at(i.TEXTURE_2D,ce),Mt(q.__webglFramebuffer,P,ce,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),g(ce)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,tt.__webglTexture),at(ft,A),A.mipmaps&&A.mipmaps.length>0)for(let vt=0;vt<A.mipmaps.length;vt++)Mt(q.__webglFramebuffer[vt],P,A,i.COLOR_ATTACHMENT0,ft,vt);else Mt(q.__webglFramebuffer,P,A,i.COLOR_ATTACHMENT0,ft,0);g(A)&&p(ft),e.unbindTexture()}P.depthBuffer&&Ht(P)}function le(P){let A=P.textures;for(let q=0,tt=A.length;q<tt;q++){let nt=A[q];if(g(nt)){let j=v(P),Ct=n.get(nt).__webglTexture;e.bindTexture(j,Ct),p(j),e.unbindTexture()}}}let ke=[],H=[];function zn(P){if(P.samples>0){if(se(P)===!1){let A=P.textures,q=P.width,tt=P.height,nt=i.COLOR_BUFFER_BIT,j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(P),ft=A.length>1;if(ft)for(let vt=0;vt<A.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let vt=0;vt<A.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[vt]);let ce=n.get(A[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,q,tt,0,0,q,tt,nt,i.NEAREST),l===!0&&(ke.length=0,H.length=0,ke.push(i.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ke.push(j),H.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let vt=0;vt<A.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[vt]);let ce=n.get(A[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,ce,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let A=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ie(P){return Math.min(s.maxSamples,P.samples)}function se(P){let A=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Bt(P){let A=r.render.frame;h.get(P)!==A&&(h.set(P,A),P.update())}function Ae(P,A){let q=P.colorSpace,tt=P.format,nt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==jo&&q!==ls&&(he.getTransfer(q)===_e?(tt!==Qn||nt!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}function Lt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=D,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Jt,this.setupRenderTarget=De,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=zn,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=se}function db(i,t){function e(n,s=ls){let o,r=he.getTransfer(s);if(n===ki)return i.UNSIGNED_BYTE;if(n===Cu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Iu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mp)return i.BYTE;if(n===Ep)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===Ru)return i.INT;if(n===Gs)return i.UNSIGNED_INT;if(n===zi)return i.FLOAT;if(n===Hr)return i.HALF_FLOAT;if(n===Tp)return i.ALPHA;if(n===Ap)return i.RGB;if(n===Qn)return i.RGBA;if(n===Rp)return i.LUMINANCE;if(n===Cp)return i.LUMINANCE_ALPHA;if(n===Uo)return i.DEPTH_COMPONENT;if(n===qo)return i.DEPTH_STENCIL;if(n===Ip)return i.RED;if(n===Pu)return i.RED_INTEGER;if(n===Pp)return i.RG;if(n===Nu)return i.RG_INTEGER;if(n===Lu)return i.RGBA_INTEGER;if(n===Wa||n===qa||n===Xa||n===Ya)if(r===_e)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Wa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Wa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mh||n===gh||n===yh||n===xh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===mh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vh||n===_h||n===bh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===vh||n===_h)return r===_e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===bh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wh||n===Mh||n===Eh||n===Sh||n===Th||n===Ah||n===Rh||n===Ch||n===Ih||n===Ph||n===Nh||n===Lh||n===Fh||n===Bh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===wh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Th)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ah)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ch)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ih)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ph)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bh)return r===_e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===Dh||n===zh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Za)return r===_e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Np||n===Uh||n===Oh||n===kh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Za)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Uh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nu=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},tn=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},fb={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Cn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new kn({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends fs{constructor(t,e){super();let n=this,s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,x=new iu,g=e.getContextAttributes(),p=null,v=null,M=[],w=[],I=new wt,T=null,C=new ln;C.viewport=new be;let L=new ln;L.viewport=new be;let S=[C,L],E=new nu,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=M[$];return st===void 0&&(st=new Pr,M[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=M[$];return st===void 0&&(st=new Pr,M[$]=st),st.getGripSpace()},this.getHand=function($){let st=M[$];return st===void 0&&(st=new Pr,M[$]=st),st.getHandSpace()};function B($){let st=w.indexOf($.inputSource);if(st===-1)return;let Mt=M[st];Mt!==void 0&&(Mt.update($.inputSource,$.frame,c||r),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",V);for(let $=0;$<M.length;$++){let st=w[$];st!==null&&(w[$]=null,M[$].disconnect(st))}N=null,G=null,x.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Vi(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,Mt=null,ut=null;g.depth&&(ut=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?qo:Uo,Mt=g.stencil?Wo:Gs);let zt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:o};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Vi(u.textureWidth,u.textureHeight,{format:Qn,type:ki,depthTexture:new ll(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V($){for(let st=0;st<$.removed.length;st++){let Mt=$.removed[st],ut=w.indexOf(Mt);ut>=0&&(w[ut]=null,M[ut].disconnect(Mt))}for(let st=0;st<$.added.length;st++){let Mt=$.added[st],ut=w.indexOf(Mt);if(ut===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=w.length){w.push(Mt),ut=Ht;break}else if(w[Ht]===null){w[Ht]=Mt,ut=Ht;break}if(ut===-1)break}let zt=M[ut];zt&&zt.connect(Mt)}}let D=new _,K=new _;function W($,st,Mt){D.setFromMatrixPosition(st.matrixWorld),K.setFromMatrixPosition(Mt.matrixWorld);let ut=D.distanceTo(K),zt=st.projectionMatrix.elements,Ht=Mt.projectionMatrix.elements,Jt=zt[14]/(zt[10]-1),De=zt[14]/(zt[10]+1),le=(zt[9]+1)/zt[5],ke=(zt[9]-1)/zt[5],H=(zt[8]-1)/zt[0],zn=(Ht[8]+1)/Ht[0],ie=Jt*H,se=Jt*zn,Bt=ut/(-H+zn),Ae=Bt*-H;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(Bt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),zt[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Lt=Jt+Bt,P=De+Bt,A=ie-Ae,q=se+(ut-Ae),tt=le*De/P*Lt,nt=ke*De/P*Lt;$.projectionMatrix.makePerspective(A,q,tt,nt,Lt,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Q($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let st=$.near,Mt=$.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),E.near=L.near=C.near=st,E.far=L.far=C.far=Mt,(N!==E.near||G!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,G=E.far),C.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,E.layers.mask=C.layers.mask|L.layers.mask;let ut=$.parent,zt=E.cameras;Q(E,ut);for(let Ht=0;Ht<zt.length;Ht++)Q(zt[Ht],ut);zt.length===2?W(E,C,L):E.projectionMatrix.copy(C.projectionMatrix),ct($,E,ut)};function ct($,st,Mt){Mt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Hh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let pt=null;function at($,st){if(h=st.getViewerPose(c||r),m=st,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ut=!1;Mt.length!==E.cameras.length&&(E.cameras.length=0,ut=!0);for(let Ht=0;Ht<Mt.length;Ht++){let Jt=Mt[Ht],De=null;if(f!==null)De=f.getViewport(Jt);else{let ke=d.getViewSubImage(u,Jt);De=ke.viewport,Ht===0&&(t.setRenderTargetTextures(v,ke.colorTexture,u.ignoreDepthValues?void 0:ke.depthStencilTexture),t.setRenderTarget(v))}let le=S[Ht];le===void 0&&(le=new ln,le.layers.enable(Ht),le.viewport=new be,S[Ht]=le),le.matrix.fromArray(Jt.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Jt.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(De.x,De.y,De.width,De.height),Ht===0&&(E.matrix.copy(le.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ut===!0&&E.cameras.push(le)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Ht=d.getDepthInformation(Mt[0]);Ht&&Ht.isValid&&Ht.texture&&x.init(t,Ht,s.renderState)}}for(let Mt=0;Mt<M.length;Mt++){let ut=w[Mt],zt=M[Mt];ut!==null&&zt!==void 0&&zt.update(ut,st,c||r)}pt&&pt($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}let ne=new Up;ne.setAnimationLoop(at),this.setAnimationLoop=function($){pt=$},this.dispose=function(){}}},Ds=new Ve,gb=new Ne;function yb(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,zp(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),d(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,w)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),x(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),M=v.envMap,w=v.envMapRotation;M&&(g.envMap.value=M,Ds.copy(w),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.envMapRotation.value.setFromMatrix4(gb.makeRotationFromEuler(Ds)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xb(i,t,e,n){let s={},o={},r=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=s[v.id];w===void 0&&(m(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",g));let I=M.program;n.updateUBOMapping(v,I);let T=t.render.frame;o[v.id]!==T&&(u(v),o[v.id]=T)}function h(v){let M=d();v.__bindingPointIndex=M;let w=i.createBuffer(),I=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let M=s[v.id],w=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,C=w.length;T<C;T++){let L=Array.isArray(w[T])?w[T]:[w[T]];for(let S=0,E=L.length;S<E;S++){let N=L[S];if(f(N,T,S,I)===!0){let G=N.__offset,B=Array.isArray(N.value)?N.value:[N.value],z=0;for(let V=0;V<B.length;V++){let D=B[V],K=x(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,G+z,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,z),z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,w,I){let T=v.value,C=M+"_"+w;if(I[C]===void 0)return typeof T=="number"||typeof T=="boolean"?I[C]=T:I[C]=T.clone(),!0;{let L=I[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return I[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function m(v){let M=v.uniforms,w=0,I=16;for(let C=0,L=M.length;C<L;C++){let S=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,N=S.length;E<N;E++){let G=S[E],B=Array.isArray(G.value)?G.value:[G.value];for(let z=0,V=B.length;z<V;z++){let D=B[z],K=x(D),W=w%I,Q=W%K.boundary,ct=W+Q;w+=Q,ct!==0&&I-ct<K.storage&&(w+=I-ct),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=K.storage}}}let T=w%I;return T>0&&(w+=I-T),v.__size=w,v.__cache={},this}function x(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){let M=v.target;M.removeEventListener("dispose",g);let w=r.indexOf(M.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}var cl=class{constructor(t={}){let{canvas:e=wg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bn,this.toneMapping=us,this.toneMappingExposure=1;let w=this,I=!1,T=0,C=0,L=null,S=-1,E=null,N=new be,G=new be,B=null,z=new St(0),V=0,D=e.width,K=e.height,W=1,Q=null,ct=null,pt=new be(0,0,D,K),at=new be(0,0,D,K),ne=!1,$=new zr,st=!1,Mt=!1,ut=new Ne,zt=new Ne,Ht=new _,Jt=new be,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function ke(){return L===null?W:1}let H=n;function zn(R,O){return e.getContext(R,O)}try{let R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tu}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),H===null){let O="webgl2";if(H=zn(O,R),H===null)throw zn(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,se,Bt,Ae,Lt,P,A,q,tt,nt,j,Ct,ft,vt,ce,ot,_t,Dt,Ut,bt,oe,Yt,Ee,U;function dt(){ie=new Fv(H),ie.init(),Yt=new db(H,ie),se=new Rv(H,ie,t,Yt),Bt=new cb(H,ie),se.reverseDepthBuffer&&u&&Bt.buffers.depth.setReversed(!0),Ae=new zv(H),Lt=new j_,P=new ub(H,ie,Bt,Lt,se,Yt,Ae),A=new Iv(w),q=new Lv(w),tt=new Wg(H),Ee=new Tv(H,tt),nt=new Bv(H,tt,Ae,Ee),j=new Ov(H,nt,tt,Ae),Ut=new Uv(H,se,P),ot=new Cv(Lt),Ct=new $_(w,A,q,ie,se,Ee,ot),ft=new yb(w,Lt),vt=new K_,ce=new sb(ie),Dt=new Sv(w,A,q,Bt,j,f,l),_t=new ab(w,j,se),U=new xb(H,Ae,se,Bt),bt=new Av(H,ie,Ae),oe=new Dv(H,ie,Ae),Ae.programs=Ct.programs,w.capabilities=se,w.extensions=ie,w.properties=Lt,w.renderLists=vt,w.shadowMap=_t,w.state=Bt,w.info=Ae}dt();let Z=new su(w,H);this.xr=Z,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(D,K,!1))},this.getSize=function(R){return R.set(D,K)},this.setSize=function(R,O,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=R,K=O,e.width=Math.floor(R*W),e.height=Math.floor(O*W),X===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(D*W,K*W).floor()},this.setDrawingBufferSize=function(R,O,X){D=R,K=O,W=X,e.width=Math.floor(R*X),e.height=Math.floor(O*X),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,O,X,Y){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,O,X,Y),Bt.viewport(N.copy(pt).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(at)},this.setScissor=function(R,O,X,Y){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,O,X,Y),Bt.scissor(G.copy(at).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){Bt.setScissorTest(ne=R)},this.setOpaqueSort=function(R){Q=R},this.setTransparentSort=function(R){ct=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(R=!0,O=!0,X=!0){let Y=0;if(R){let k=!1;if(L!==null){let rt=L.texture.format;k=rt===Lu||rt===Nu||rt===Pu}if(k){let rt=L.texture.type,gt=rt===ki||rt===Gs||rt===Dr||rt===Wo||rt===Cu||rt===Iu,Tt=Dt.getClearColor(),At=Dt.getClearAlpha(),kt=Tt.r,qt=Tt.g,Rt=Tt.b;gt?(m[0]=kt,m[1]=qt,m[2]=Rt,m[3]=At,H.clearBufferuiv(H.COLOR,0,m)):(x[0]=kt,x[1]=qt,x[2]=Rt,x[3]=At,H.clearBufferiv(H.COLOR,0,x))}else Y|=H.COLOR_BUFFER_BIT}O&&(Y|=H.DEPTH_BUFFER_BIT),X&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),vt.dispose(),ce.dispose(),Lt.dispose(),A.dispose(),q.dispose(),j.dispose(),Ee.dispose(),U.dispose(),Ct.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",rf),Z.removeEventListener("sessionend",af),Is.stop()};function et(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let R=Ae.autoReset,O=_t.enabled,X=_t.autoUpdate,Y=_t.needsUpdate,k=_t.type;dt(),Ae.autoReset=R,_t.enabled=O,_t.autoUpdate=X,_t.needsUpdate=Y,_t.type=k}function mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Wt(R){let O=R.target;O.removeEventListener("dispose",Wt),Ue(O)}function Ue(R){on(R),Lt.remove(R)}function on(R){let O=Lt.get(R).programs;O!==void 0&&(O.forEach(function(X){Ct.releaseProgram(X)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,X,Y,k,rt){O===null&&(O=De);let gt=k.isMesh&&k.matrixWorld.determinant()<0,Tt=I0(R,O,X,Y,k);Bt.setMaterial(Y,gt);let At=X.index,kt=1;if(Y.wireframe===!0){if(At=nt.getWireframeAttribute(X),At===void 0)return;kt=2}let qt=X.drawRange,Rt=X.attributes.position,ue=qt.start*kt,Se=(qt.start+qt.count)*kt;rt!==null&&(ue=Math.max(ue,rt.start*kt),Se=Math.min(Se,(rt.start+rt.count)*kt)),At!==null?(ue=Math.max(ue,0),Se=Math.min(Se,At.count)):Rt!=null&&(ue=Math.max(ue,0),Se=Math.min(Se,Rt.count));let Re=Se-ue;if(Re<0||Re===1/0)return;Ee.setup(k,Y,Tt,X,At);let vn,me=bt;if(At!==null&&(vn=tt.get(At),me=oe,me.setIndex(vn)),k.isMesh)Y.wireframe===!0?(Bt.setLineWidth(Y.wireframeLinewidth*ke()),me.setMode(H.LINES)):me.setMode(H.TRIANGLES);else if(k.isLine){let It=Y.linewidth;It===void 0&&(It=1),Bt.setLineWidth(It*ke()),k.isLineSegments?me.setMode(H.LINES):k.isLineLoop?me.setMode(H.LINE_LOOP):me.setMode(H.LINE_STRIP)}else k.isPoints?me.setMode(H.POINTS):k.isSprite&&me.setMode(H.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)me.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))me.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let It=k._multiDrawStarts,Ri=k._multiDrawCounts,ge=k._multiDrawCount,$n=At?tt.get(At).bytesPerElement:1,wo=Lt.get(Y).currentProgram.getUniforms();for(let Sn=0;Sn<ge;Sn++)wo.setValue(H,"_gl_DrawID",Sn),me.render(It[Sn]/$n,Ri[Sn])}else if(k.isInstancedMesh)me.renderInstances(ue,Re,k.count);else if(X.isInstancedBufferGeometry){let It=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ri=Math.min(X.instanceCount,It);me.renderInstances(ue,Re,Ri)}else me.render(ue,Re)};function ve(R,O,X){R.transparent===!0&&R.side===Di&&R.forceSinglePass===!1?(R.side=cn,R.needsUpdate=!0,xa(R,O,X),R.side=ds,R.needsUpdate=!0,xa(R,O,X),R.side=Di):xa(R,O,X)}this.compile=function(R,O,X=null){X===null&&(X=R),p=ce.get(X),p.init(O),M.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==X&&R.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let Y=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let rt=k.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){let Tt=rt[gt];ve(Tt,X,k),Y.add(Tt)}else ve(rt,X,k),Y.add(rt)}),M.pop(),p=null,Y},this.compileAsync=function(R,O,X=null){let Y=this.compile(R,O,X);return new Promise(k=>{function rt(){if(Y.forEach(function(gt){Lt.get(gt).currentProgram.isReady()&&Y.delete(gt)}),Y.size===0){k(R);return}setTimeout(rt,10)}ie.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Zn=null;function Ai(R){Zn&&Zn(R)}function rf(){Is.stop()}function af(){Is.start()}let Is=new Up;Is.setAnimationLoop(Ai),typeof self<"u"&&Is.setContext(self),this.setAnimationLoop=function(R){Zn=R,Z.setAnimationLoop(R),R===null?Is.stop():Is.start()},Z.addEventListener("sessionstart",rf),Z.addEventListener("sessionend",af),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,O,L),p=ce.get(R,M.length),p.init(O),M.push(p),zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(zt),Mt=this.localClippingEnabled,st=ot.init(this.clippingPlanes,Mt),g=vt.get(R,v.length),g.init(),v.push(g),Z.enabled===!0&&Z.isPresenting===!0){let rt=w.xr.getDepthSensingMesh();rt!==null&&bc(rt,O,-1/0,w.sortObjects)}bc(R,O,0,w.sortObjects),g.finish(),w.sortObjects===!0&&g.sort(Q,ct),le=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,le&&Dt.addToRenderList(g,R),this.info.render.frame++,st===!0&&ot.beginShadows();let X=p.state.shadowsArray;_t.render(X,R,O),st===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=g.opaque,k=g.transmissive;if(p.setupLights(),O.isArrayCamera){let rt=O.cameras;if(k.length>0)for(let gt=0,Tt=rt.length;gt<Tt;gt++){let At=rt[gt];cf(Y,k,R,At)}le&&Dt.render(R);for(let gt=0,Tt=rt.length;gt<Tt;gt++){let At=rt[gt];lf(g,R,At,At.viewport)}}else k.length>0&&cf(Y,k,R,O),le&&Dt.render(R),lf(g,R,O);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(w,R,O),Ee.resetDefaultState(),S=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],st===!0&&ot.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function bc(R,O,X,Y){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){Y&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(zt);let gt=j.update(R),Tt=R.material;Tt.visible&&g.push(R,gt,Tt,X,Jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){let gt=j.update(R),Tt=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Jt.copy(gt.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(zt)),Array.isArray(Tt)){let At=gt.groups;for(let kt=0,qt=At.length;kt<qt;kt++){let Rt=At[kt],ue=Tt[Rt.materialIndex];ue&&ue.visible&&g.push(R,gt,ue,X,Jt.z,Rt)}}else Tt.visible&&g.push(R,gt,Tt,X,Jt.z,null)}}let rt=R.children;for(let gt=0,Tt=rt.length;gt<Tt;gt++)bc(rt[gt],O,X,Y)}function lf(R,O,X,Y){let k=R.opaque,rt=R.transmissive,gt=R.transparent;p.setupLightsView(X),st===!0&&ot.setGlobalState(w.clippingPlanes,X),Y&&Bt.viewport(N.copy(Y)),k.length>0&&ya(k,O,X),rt.length>0&&ya(rt,O,X),gt.length>0&&ya(gt,O,X),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function cf(R,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Vi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Hr:ki,minFilter:Hs,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let rt=p.state.transmissionRenderTarget[Y.id],gt=Y.viewport||N;rt.setSize(gt.z,gt.w);let Tt=w.getRenderTarget();w.setRenderTarget(rt),w.getClearColor(z),V=w.getClearAlpha(),V<1&&w.setClearColor(16777215,.5),w.clear(),le&&Dt.render(X);let At=w.toneMapping;w.toneMapping=us;let kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),st===!0&&ot.setGlobalState(w.clippingPlanes,Y),ya(R,X,Y),P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Rt=0,ue=O.length;Rt<ue;Rt++){let Se=O[Rt],Re=Se.object,vn=Se.geometry,me=Se.material,It=Se.group;if(me.side===Di&&Re.layers.test(Y.layers)){let Ri=me.side;me.side=cn,me.needsUpdate=!0,hf(Re,X,Y,vn,me,It),me.side=Ri,me.needsUpdate=!0,qt=!0}}qt===!0&&(P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt))}w.setRenderTarget(Tt),w.setClearColor(z,V),kt!==void 0&&(Y.viewport=kt),w.toneMapping=At}function ya(R,O,X){let Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,rt=R.length;k<rt;k++){let gt=R[k],Tt=gt.object,At=gt.geometry,kt=Y===null?gt.material:Y,qt=gt.group;Tt.layers.test(X.layers)&&hf(Tt,O,X,At,kt,qt)}}function hf(R,O,X,Y,k,rt){R.onBeforeRender(w,O,X,Y,k,rt),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(w,O,X,Y,R,rt),k.transparent===!0&&k.side===Di&&k.forceSinglePass===!1?(k.side=cn,k.needsUpdate=!0,w.renderBufferDirect(X,O,Y,k,R,rt),k.side=ds,k.needsUpdate=!0,w.renderBufferDirect(X,O,Y,k,R,rt),k.side=Di):w.renderBufferDirect(X,O,Y,k,R,rt),R.onAfterRender(w,O,X,Y,k,rt)}function xa(R,O,X){O.isScene!==!0&&(O=De);let Y=Lt.get(R),k=p.state.lights,rt=p.state.shadowsArray,gt=k.state.version,Tt=Ct.getParameters(R,k.state,rt,O,X),At=Ct.getProgramCacheKey(Tt),kt=Y.programs;Y.environment=R.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(R.isMeshStandardMaterial?q:A).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",Wt),kt=new Map,Y.programs=kt);let qt=kt.get(At);if(qt!==void 0){if(Y.currentProgram===qt&&Y.lightsStateVersion===gt)return df(R,Tt),qt}else Tt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(Tt,w),qt=Ct.acquireProgram(Tt,At),kt.set(At,qt),Y.uniforms=Tt.uniforms;let Rt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Rt.clippingPlanes=ot.uniform),df(R,Tt),Y.needsLights=N0(R),Y.lightsStateVersion=gt,Y.needsLights&&(Rt.ambientLightColor.value=k.state.ambient,Rt.lightProbe.value=k.state.probe,Rt.directionalLights.value=k.state.directional,Rt.directionalLightShadows.value=k.state.directionalShadow,Rt.spotLights.value=k.state.spot,Rt.spotLightShadows.value=k.state.spotShadow,Rt.rectAreaLights.value=k.state.rectArea,Rt.ltc_1.value=k.state.rectAreaLTC1,Rt.ltc_2.value=k.state.rectAreaLTC2,Rt.pointLights.value=k.state.point,Rt.pointLightShadows.value=k.state.pointShadow,Rt.hemisphereLights.value=k.state.hemi,Rt.directionalShadowMap.value=k.state.directionalShadowMap,Rt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Rt.spotShadowMap.value=k.state.spotShadowMap,Rt.spotLightMatrix.value=k.state.spotLightMatrix,Rt.spotLightMap.value=k.state.spotLightMap,Rt.pointShadowMap.value=k.state.pointShadowMap,Rt.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=qt,Y.uniformsList=null,qt}function uf(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=ko.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function df(R,O){let X=Lt.get(R);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function I0(R,O,X,Y,k){O.isScene!==!0&&(O=De),P.resetTextureUnits();let rt=O.fog,gt=Y.isMeshStandardMaterial?O.environment:null,Tt=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:jo,At=(Y.isMeshStandardMaterial?q:A).get(Y.envMap||gt),kt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Rt=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,Se=!!X.morphAttributes.color,Re=us;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Re=w.toneMapping);let vn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,me=vn!==void 0?vn.length:0,It=Lt.get(Y),Ri=p.state.lights;if(st===!0&&(Mt===!0||R!==E)){let Un=R===E&&Y.id===S;ot.setState(Y,R,Un)}let ge=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ri.state.version||It.outputColorSpace!==Tt||k.isBatchedMesh&&It.batching===!1||!k.isBatchedMesh&&It.batching===!0||k.isBatchedMesh&&It.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&It.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&It.instancing===!1||!k.isInstancedMesh&&It.instancing===!0||k.isSkinnedMesh&&It.skinning===!1||!k.isSkinnedMesh&&It.skinning===!0||k.isInstancedMesh&&It.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&It.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&It.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&It.instancingMorph===!1&&k.morphTexture!==null||It.envMap!==At||Y.fog===!0&&It.fog!==rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ot.numPlanes||It.numIntersection!==ot.numIntersection)||It.vertexAlphas!==kt||It.vertexTangents!==qt||It.morphTargets!==Rt||It.morphNormals!==ue||It.morphColors!==Se||It.toneMapping!==Re||It.morphTargetsCount!==me)&&(ge=!0):(ge=!0,It.__version=Y.version);let $n=It.currentProgram;ge===!0&&($n=xa(Y,O,k));let wo=!1,Sn=!1,br=!1,Ce=$n.getUniforms(),hi=It.uniforms;if(Bt.useProgram($n.program)&&(wo=!0,Sn=!0,br=!0),Y.id!==S&&(S=Y.id,Sn=!0),wo||E!==R){Bt.buffers.depth.getReversed()?(ut.copy(R.projectionMatrix),Eg(ut),Sg(ut),Ce.setValue(H,"projectionMatrix",ut)):Ce.setValue(H,"projectionMatrix",R.projectionMatrix),Ce.setValue(H,"viewMatrix",R.matrixWorldInverse);let ts=Ce.map.cameraPosition;ts!==void 0&&ts.setValue(H,Ht.setFromMatrixPosition(R.matrixWorld)),se.logarithmicDepthBuffer&&Ce.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ce.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Sn=!0,br=!0)}if(k.isSkinnedMesh){Ce.setOptional(H,k,"bindMatrix"),Ce.setOptional(H,k,"bindMatrixInverse");let Un=k.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Ce.setValue(H,"boneTexture",Un.boneTexture,P))}k.isBatchedMesh&&(Ce.setOptional(H,k,"batchingTexture"),Ce.setValue(H,"batchingTexture",k._matricesTexture,P),Ce.setOptional(H,k,"batchingIdTexture"),Ce.setValue(H,"batchingIdTexture",k._indirectTexture,P),Ce.setOptional(H,k,"batchingColorTexture"),k._colorsTexture!==null&&Ce.setValue(H,"batchingColorTexture",k._colorsTexture,P));let wr=X.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&Ut.update(k,X,$n),(Sn||It.receiveShadow!==k.receiveShadow)&&(It.receiveShadow=k.receiveShadow,Ce.setValue(H,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(hi.envMap.value=At,hi.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(hi.envMapIntensity.value=O.environmentIntensity),Sn&&(Ce.setValue(H,"toneMappingExposure",w.toneMappingExposure),It.needsLights&&P0(hi,br),rt&&Y.fog===!0&&ft.refreshFogUniforms(hi,rt),ft.refreshMaterialUniforms(hi,Y,W,K,p.state.transmissionRenderTarget[R.id]),ko.upload(H,uf(It),hi,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ko.upload(H,uf(It),hi,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ce.setValue(H,"center",k.center),Ce.setValue(H,"modelViewMatrix",k.modelViewMatrix),Ce.setValue(H,"normalMatrix",k.normalMatrix),Ce.setValue(H,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Un=Y.uniformsGroups;for(let ts=0,es=Un.length;ts<es;ts++){let ff=Un[ts];U.update(ff,$n),U.bind(ff,$n)}}return $n}function P0(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function N0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,O,X){Lt.get(R.texture).__webglTexture=O,Lt.get(R.depthTexture).__webglTexture=X;let Y=Lt.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){let X=Lt.get(R);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,X=0){L=R,T=O,C=X;let Y=!0,k=null,rt=!1,gt=!1;if(R){let At=Lt.get(R);if(At.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1;else if(At.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(At.__hasExternalTextures)P.rebindTextures(R,Lt.get(R.texture).__webglTexture,Lt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Rt=R.depthTexture;if(At.__boundDepthTexture!==Rt){if(Rt!==null&&Lt.has(Rt)&&(R.width!==Rt.image.width||R.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(gt=!0);let qt=Lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[O])?k=qt[O][X]:k=qt[O],rt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?k=Lt.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[X]:k=qt,N.copy(R.viewport),G.copy(R.scissor),B=R.scissorTest}else N.copy(pt).multiplyScalar(W).floor(),G.copy(at).multiplyScalar(W).floor(),B=ne;if(Bt.bindFramebuffer(H.FRAMEBUFFER,k)&&Y&&Bt.drawBuffers(R,k),Bt.viewport(N),Bt.scissor(G),Bt.setScissorTest(B),rt){let At=Lt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,At.__webglTexture,X)}else if(gt){let At=Lt.get(R.texture),kt=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,At.__webglTexture,X||0,kt)}S=-1},this.readRenderTargetPixels=function(R,O,X,Y,k,rt,gt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){Bt.bindFramebuffer(H.FRAMEBUFFER,Tt);try{let At=R.texture,kt=At.format,qt=At.type;if(!se.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-Y&&X>=0&&X<=R.height-k&&H.readPixels(O,X,Y,k,Yt.convert(kt),Yt.convert(qt),rt)}finally{let At=L!==null?Lt.get(L).__webglFramebuffer:null;Bt.bindFramebuffer(H.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(R,O,X,Y,k,rt,gt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=Lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&gt!==void 0&&(Tt=Tt[gt]),Tt){let At=R.texture,kt=At.format,qt=At.type;if(!se.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-Y&&X>=0&&X<=R.height-k){Bt.bindFramebuffer(H.FRAMEBUFFER,Tt);let Rt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Rt),H.bufferData(H.PIXEL_PACK_BUFFER,rt.byteLength,H.STREAM_READ),H.readPixels(O,X,Y,k,Yt.convert(kt),Yt.convert(qt),0);let ue=L!==null?Lt.get(L).__webglFramebuffer:null;Bt.bindFramebuffer(H.FRAMEBUFFER,ue);let Se=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Mg(H,Se,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Rt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,rt),H.deleteBuffer(Rt),H.deleteSync(Se),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,X=0){R.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);let Y=Math.pow(2,-X),k=Math.floor(R.image.width*Y),rt=Math.floor(R.image.height*Y),gt=O!==null?O.x:0,Tt=O!==null?O.y:0;P.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,gt,Tt,k,rt),Bt.unbindTexture()},this.copyTextureToTexture=function(R,O,X=null,Y=null,k=0){R.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],O=arguments[2],k=arguments[3]||0,X=null);let rt,gt,Tt,At,kt,qt,Rt,ue,Se,Re=R.isCompressedTexture?R.mipmaps[k]:R.image;X!==null?(rt=X.max.x-X.min.x,gt=X.max.y-X.min.y,Tt=X.isBox3?X.max.z-X.min.z:1,At=X.min.x,kt=X.min.y,qt=X.isBox3?X.min.z:0):(rt=Re.width,gt=Re.height,Tt=Re.depth||1,At=0,kt=0,qt=0),Y!==null?(Rt=Y.x,ue=Y.y,Se=Y.z):(Rt=0,ue=0,Se=0);let vn=Yt.convert(O.format),me=Yt.convert(O.type),It;O.isData3DTexture?(P.setTexture3D(O,0),It=H.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(P.setTexture2DArray(O,0),It=H.TEXTURE_2D_ARRAY):(P.setTexture2D(O,0),It=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);let Ri=H.getParameter(H.UNPACK_ROW_LENGTH),ge=H.getParameter(H.UNPACK_IMAGE_HEIGHT),$n=H.getParameter(H.UNPACK_SKIP_PIXELS),wo=H.getParameter(H.UNPACK_SKIP_ROWS),Sn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Re.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Re.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,At),H.pixelStorei(H.UNPACK_SKIP_ROWS,kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qt);let br=R.isDataArrayTexture||R.isData3DTexture,Ce=O.isDataArrayTexture||O.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let hi=Lt.get(R),wr=Lt.get(O),Un=Lt.get(hi.__renderTarget),ts=Lt.get(wr.__renderTarget);Bt.bindFramebuffer(H.READ_FRAMEBUFFER,Un.__webglFramebuffer),Bt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let es=0;es<Tt;es++)br&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Lt.get(R).__webglTexture,k,qt+es),R.isDepthTexture?(Ce&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Lt.get(O).__webglTexture,k,Se+es),H.blitFramebuffer(At,kt,rt,gt,Rt,ue,rt,gt,H.DEPTH_BUFFER_BIT,H.NEAREST)):Ce?H.copyTexSubImage3D(It,k,Rt,ue,Se+es,At,kt,rt,gt):H.copyTexSubImage2D(It,k,Rt,ue,Se+es,At,kt,rt,gt);Bt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ce?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(It,k,Rt,ue,Se,rt,gt,Tt,vn,me,Re.data):O.isCompressedArrayTexture?H.compressedTexSubImage3D(It,k,Rt,ue,Se,rt,gt,Tt,vn,Re.data):H.texSubImage3D(It,k,Rt,ue,Se,rt,gt,Tt,vn,me,Re):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,k,Rt,ue,rt,gt,vn,me,Re.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,k,Rt,ue,Re.width,Re.height,vn,Re.data):H.texSubImage2D(H.TEXTURE_2D,k,Rt,ue,rt,gt,vn,me,Re);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ri),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ge),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$n),H.pixelStorei(H.UNPACK_SKIP_ROWS,wo),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Sn),k===0&&O.generateMipmaps&&H.generateMipmap(It),Bt.unbindTexture()},this.copyTextureToTexture3D=function(R,O,X=null,Y=null,k=0){return R.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],O=arguments[3],k=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,O,X,Y,k)},this.initRenderTarget=function(R){Lt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Bt.unbindTexture()},this.resetState=function(){T=0,C=0,L=null,Bt.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var hl=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ul=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ve,this.environmentIntensity=1,this.environmentRotation=new Ve,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ur=class extends ps{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fp=new Ne,ou=new tl,ka=new Xo,Va=new _,dl=class extends hn{constructor(t=new gn,e=new Ur){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ka.copy(n.boundingSphere),ka.applyMatrix4(s),ka.radius+=o,t.ray.intersectsSphere(ka)===!1)return;fp.copy(s).invert(),ou.copy(t.ray).applyMatrix4(fp);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let m=u,x=f;m<x;m++){let g=c.getX(m);Va.fromBufferAttribute(d,g),pp(Va,g,l,s,t,e,this)}}else{let u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let m=u,x=f;m<x;m++)Va.fromBufferAttribute(d,m),pp(Va,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function pp(i,t,e,n,s,o,r){let a=ou.distanceSqToPoint(i);if(a<e){let l=new _;ou.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var fl=class extends Cn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,o=n.length,r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);let h=n[s],u=n[s+1]-h,f=(r-h)/u;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new wt:new _);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new _,s=[],o=[],r=[],a=new _,l=new Ne;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new _)}o[0]=new _,r[0]=new _;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,m))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Qe(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let m=1;m<=t;m++)o[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Or=class extends Vn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){let n=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);let a=this.aStartAngle+t*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ru=class extends Or{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Bu(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,f*=h,s(r,a,u,f)},calc:function(o){let r=o*o,a=r*o;return i+t*o+e*r+n*a}}}var Ha=new _,Kc=new Bu,Qc=new Bu,th=new Bu,au=class extends Vn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new _){let n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Ha.subVectors(s[0],s[1]).add(s[0]),c=Ha);let d=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Ha.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Kc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,x,g),Qc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,x,g),th.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Kc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Qc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),th.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Kc.calc(l),Qc.calc(l),th.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new _().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function mp(i,t,e,n,s){let o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function vb(i,t){let e=1-i;return e*e*t}function _b(i,t){return 2*(1-i)*i*t}function bb(i,t){return i*i*t}function Nr(i,t,e,n){return vb(i,t)+_b(i,e)+bb(i,n)}function wb(i,t){let e=1-i;return e*e*e*t}function Mb(i,t){let e=1-i;return 3*e*e*i*t}function Eb(i,t){return 3*(1-i)*i*i*t}function Sb(i,t){return i*i*i*t}function Lr(i,t,e,n,s){return wb(i,t)+Mb(i,e)+Eb(i,n)+Sb(i,s)}var pl=class extends Vn{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Lr(t,s.x,o.x,r.x,a.x),Lr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},lu=class extends Vn{constructor(t=new _,e=new _,n=new _,s=new _){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Lr(t,s.x,o.x,r.x,a.x),Lr(t,s.y,o.y,r.y,a.y),Lr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ml=class extends Vn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},cu=class extends Vn{constructor(t=new _,e=new _){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new _){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gl=class extends Vn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Nr(t,s.x,o.x,r.x),Nr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hu=class extends Vn{constructor(t=new _,e=new _,n=new _){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Nr(t,s.x,o.x,r.x),Nr(t,s.y,o.y,r.y),Nr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yl=class extends Vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(mp(a,l.x,c.x,h.x,d.x),mp(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new wt().fromArray(s))}return this}},gp=Object.freeze({__proto__:null,ArcCurve:ru,CatmullRomCurve3:au,CubicBezierCurve:pl,CubicBezierCurve3:lu,EllipseCurve:Or,LineCurve:ml,LineCurve3:cu,QuadraticBezierCurve:gl,QuadraticBezierCurve3:hu,SplineCurve:yl}),uu=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gp[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=n){let r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,o=this.curves;s<o.length;s++){let r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new gp[s.type]().fromJSON(s))}return this}},du=class extends uu{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ml(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let o=new gl(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){let a=new pl(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new yl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){let c=new Or(t,e,n,s,o,r,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},fu=class i extends gn{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Qe(s,0,Math.PI*2);let o=[],r=[],a=[],l=[],c=[],h=1/e,d=new _,u=new wt,f=new _,m=new _,x=new _,g=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=e;v++){let M=n+v*h*s,w=Math.sin(M),I=Math.cos(M);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*w,d.y=t[T].y,d.z=t[T].x*I,r.push(d.x,d.y,d.z),u.x=v/e,u.y=T/(t.length-1),a.push(u.x,u.y);let C=l[3*T+0]*w,L=l[3*T+1],S=l[3*T+0]*I;c.push(C,L,S)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){let w=M+v*t.length,I=w,T=w+t.length,C=w+t.length+1,L=w+1;o.push(I,T,L),o.push(C,L,T)}this.setIndex(o),this.setAttribute("position",new Le(r,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},kr=class i extends fu{constructor(t=1,e=1,n=4,s=8){let o=new du;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var Je=class i extends gn{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),o=Math.floor(o);let h=[],d=[],u=[],f=[],m=0,x=[],g=n/2,p=0;v(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function v(){let w=new _,I=new _,T=0,C=(e-t)/n;for(let L=0;L<=o;L++){let S=[],E=L/o,N=E*(e-t)+t;for(let G=0;G<=s;G++){let B=G/s,z=B*l+a,V=Math.sin(z),D=Math.cos(z);I.x=N*V,I.y=-E*n+g,I.z=N*D,d.push(I.x,I.y,I.z),w.set(V,C,D).normalize(),u.push(w.x,w.y,w.z),f.push(B,1-E),S.push(m++)}x.push(S)}for(let L=0;L<s;L++)for(let S=0;S<o;S++){let E=x[S][L],N=x[S+1][L],G=x[S+1][L+1],B=x[S][L+1];(t>0||S!==0)&&(h.push(E,N,B),T+=3),(e>0||S!==o-1)&&(h.push(N,G,B),T+=3)}c.addGroup(p,T,0),p+=T}function M(w){let I=m,T=new wt,C=new _,L=0,S=w===!0?t:e,E=w===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,g*E,0),u.push(0,E,0),f.push(.5,.5),m++;let N=m;for(let G=0;G<=s;G++){let z=G/s*l+a,V=Math.cos(z),D=Math.sin(z);C.x=S*D,C.y=g*E,C.z=S*V,d.push(C.x,C.y,C.z),u.push(0,E,0),T.x=V*.5+.5,T.y=D*.5*E+.5,f.push(T.x,T.y),m++}for(let G=0;G<s;G++){let B=I+G,z=N+G;w===!0?h.push(z,z+1,B):h.push(z+1,z,B),L+=3}c.addGroup(p,L,w===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gi=class i extends Je{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xl=class i extends gn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(o.slice(),3)),this.setAttribute("uv",new Le(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new _,w=new _,I=new _;for(let T=0;T<e.length;T+=3)f(e[T+0],M),f(e[T+1],w),f(e[T+2],I),l(M,w,I,v)}function l(v,M,w,I){let T=I+1,C=[];for(let L=0;L<=T;L++){C[L]=[];let S=v.clone().lerp(w,L/T),E=M.clone().lerp(w,L/T),N=T-L;for(let G=0;G<=N;G++)G===0&&L===T?C[L][G]=S:C[L][G]=S.clone().lerp(E,G/N)}for(let L=0;L<T;L++)for(let S=0;S<2*(T-L)-1;S++){let E=Math.floor(S/2);S%2===0?(u(C[L][E+1]),u(C[L+1][E]),u(C[L][E])):(u(C[L][E+1]),u(C[L+1][E+1]),u(C[L+1][E]))}}function c(v){let M=new _;for(let w=0;w<o.length;w+=3)M.x=o[w+0],M.y=o[w+1],M.z=o[w+2],M.normalize().multiplyScalar(v),o[w+0]=M.x,o[w+1]=M.y,o[w+2]=M.z}function h(){let v=new _;for(let M=0;M<o.length;M+=3){v.x=o[M+0],v.y=o[M+1],v.z=o[M+2];let w=g(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;r.push(w,1-I)}m(),d()}function d(){for(let v=0;v<r.length;v+=6){let M=r[v+0],w=r[v+2],I=r[v+4],T=Math.max(M,w,I),C=Math.min(M,w,I);T>.9&&C<.1&&(M<.2&&(r[v+0]+=1),w<.2&&(r[v+2]+=1),I<.2&&(r[v+4]+=1))}}function u(v){o.push(v.x,v.y,v.z)}function f(v,M){let w=v*3;M.x=t[w+0],M.y=t[w+1],M.z=t[w+2]}function m(){let v=new _,M=new _,w=new _,I=new _,T=new wt,C=new wt,L=new wt;for(let S=0,E=0;S<o.length;S+=9,E+=6){v.set(o[S+0],o[S+1],o[S+2]),M.set(o[S+3],o[S+4],o[S+5]),w.set(o[S+6],o[S+7],o[S+8]),T.set(r[E+0],r[E+1]),C.set(r[E+2],r[E+3]),L.set(r[E+4],r[E+5]),I.copy(v).add(M).add(w).divideScalar(3);let N=g(I);x(T,E+0,v,N),x(C,E+2,M,N),x(L,E+4,w,N)}}function x(v,M,w,I){I<0&&v.x===1&&(r[M]=v.x-1),w.x===0&&w.z===0&&(r[M]=I/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},vl=class i extends xl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var In=class i extends xl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Zo=class i extends gn{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(r+a,Math.PI),c=0,h=[],d=new _,u=new _,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],M=p/n,w=0;p===0&&r===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let I=0;I<=e;I++){let T=I/e;d.x=-t*Math.cos(s+T*o)*Math.sin(r+M*a),d.y=t*Math.cos(r+M*a),d.z=t*Math.sin(s+T*o)*Math.sin(r+M*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(T+w,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let M=h[p][v+1],w=h[p][v],I=h[p+1][v],T=h[p+1][v+1];(p!==0||r>0)&&f.push(M,w,T),(p!==n-1||l<Math.PI)&&f.push(w,I,T)}this.setIndex(f),this.setAttribute("position",new Le(m,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ms=class i extends gn{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);let r=[],a=[],l=[],c=[],h=new _,d=new _,u=new _;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*o,g=f/n*Math.PI*2;d.x=(t+e*Math.cos(g))*Math.cos(x),d.y=(t+e*Math.cos(g))*Math.sin(x),d.z=e*Math.sin(g),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,v=(s+1)*f+m;r.push(x,g,v),r.push(g,p,v)}this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fe=class extends ps{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lp,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ve,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Ga(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var $o=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=s,s=e[++n],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pu=class extends $o{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yf,endingEnd:yf}}intervalChanged_(t,e,n){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],l=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case xf:o=t,a=2*e-n;break;case vf:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xf:r=t,l=2*n-e;break;case vf:r=1,l=n+s[1]-s[0];break;default:r=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-u*g+2*u*x-u*m,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*m+1,M=(-1-f)*g+(1.5+f)*x+.5*m,w=f*g-f*x;for(let I=0;I!==a;++I)o[I]=p*r[h+I]+v*r[c+I]+M*r[l+I]+w*r[d+I];return o}},mu=class extends $o{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)o[u]=r[c+u]*d+r[l+u]*h;return o}},gu=class extends $o{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ti=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ga(e,this.TimeBufferType),this.values=Ga(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ga(t.times,Array),values:Ga(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $a:e=this.InterpolantFactoryMethodDiscrete;break;case Vh:e=this.InterpolantFactoryMethodLinear;break;case Mc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return Vh;case this.InterpolantFactoryMethodSmooth:return Mc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,o=0,r=s-1;for(;o!==s&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(s!==void 0&&Tb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mc,o=t.length-1,r=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let m=0;m!==n;++m){let x=e[d+m];if(x!==e[u+m]||x!==e[f+m]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let d=a*n,u=r*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Vh;var qs=class extends ti{constructor(t,e,n){super(t,e,n)}};qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=$a;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;var yu=class extends ti{};yu.prototype.ValueTypeName="color";var xu=class extends ti{};xu.prototype.ValueTypeName="number";var vu=class extends $o{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Qt.slerpFlat(o,0,r,c-a,r,c,l);return o}},_l=class extends ti{InterpolantFactoryMethodLinear(t){return new vu(this.times,this.values,this.getValueSize(),t)}};_l.prototype.ValueTypeName="quaternion";_l.prototype.InterpolantFactoryMethodSmooth=void 0;var Xs=class extends ti{constructor(t,e,n){super(t,e,n)}};Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=$a;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var _u=class extends ti{};_u.prototype.ValueTypeName="vector";var bu=class{constructor(t,e,n){let s=this,o=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Ab=new bu,wu=class{constructor(t){this.manager=t!==void 0?t:Ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};wu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},bl=class extends Vr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},eh=new Ne,yp=new _,xp=new _,wl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;yp.setFromMatrixPosition(t.matrixWorld),e.position.copy(yp),xp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xp),e.updateMatrixWorld(),eh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var vp=new Ne,Rr=new _,nh=new _,Mu=class extends wl{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new _(1,0,0),new _(-1,0,0),new _(0,0,1),new _(0,0,-1),new _(0,1,0),new _(0,-1,0)],this._cubeUps=[new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,1,0),new _(0,0,1),new _(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Rr),nh.copy(n.position),nh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(nh),n.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),vp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vp)}},Ml=class extends Vr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Eu=class extends wl{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},El=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Eu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Sl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_p(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=_p();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function _p(){return performance.now()}var Du="\\[\\]\\.:\\/",Rb=new RegExp("["+Du+"]","g"),zu="[^"+Du+"]",Cb="[^"+Du.replace("\\.","")+"]",Ib=/((?:WC+[\/:])*)/.source.replace("WC",zu),Pb=/(WCOD+)?/.source.replace("WCOD",Cb),Nb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zu),Lb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zu),Fb=new RegExp("^"+Ib+Pb+Nb+Lb+"$"),Bb=["material","materials","bones","map"],Su=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rb,"")}static parseTrackName(t){let e=Fb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);Bb.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=Su;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);var ys=class i{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);let n=this.elements,s=t.x,o=t.y,r=t.z;return e.x=n[0]*s+n[1]*o+n[2]*r,e.y=n[3]*s+n[4]*o+n[5]*r,e.z=n[6]*s+n[7]*o+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new i);let n=this.elements,s=t.elements,o=e.elements,r=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],m=n[8],x=s[0],g=s[1],p=s[2],v=s[3],M=s[4],w=s[5],I=s[6],T=s[7],C=s[8];return o[0]=r*x+a*v+l*I,o[1]=r*g+a*M+l*T,o[2]=r*p+a*w+l*C,o[3]=c*x+h*v+d*I,o[4]=c*g+h*M+d*T,o[5]=c*p+h*w+d*C,o[6]=u*x+f*v+m*I,o[7]=u*g+f*M+m*T,o[8]=u*p+f*w+m*C,e}scale(t,e){e===void 0&&(e=new i);let n=this.elements,s=e.elements;for(let o=0;o!==3;o++)s[3*o+0]=t.x*n[3*o+0],s[3*o+1]=t.y*n[3*o+1],s[3*o+2]=t.z*n[3*o+2];return e}solve(t,e){e===void 0&&(e=new b);let n=3,s=4,o=[],r,a;for(r=0;r<n*s;r++)o.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)o[r+s*a]=this.elements[r+3*a];o[3+4*0]=t.x,o[3+4*1]=t.y,o[3+4*2]=t.z;let l=3,c=l,h,d=4,u;do{if(r=c-l,o[r+s*r]===0){for(a=r+1;a<c;a++)if(o[r+s*a]!==0){h=d;do u=d-h,o[u+s*r]+=o[u+s*a];while(--h);break}}if(o[r+s*r]!==0)for(a=r+1;a<c;a++){let f=o[r+s*a]/o[r+s*r];h=d;do u=d-h,o[u+s*a]=u<=r?0:o[u+s*a]-o[u+s*r]*f;while(--h)}}while(--l);if(e.z=o[2*s+3]/o[2*s+2],e.y=(o[1*s+3]-o[1*s+2]*e.z)/o[1*s+1],e.x=(o[0*s+3]-o[0*s+2]*e.z-o[0*s+1]*e.y)/o[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new i);let e=3,n=6,s=Db,o,r;for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+n*r]=this.elements[o+3*r];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3,l=a,c,h=n,d;do{if(o=l-a,s[o+n*o]===0){for(r=o+1;r<l;r++)if(s[o+n*r]!==0){c=h;do d=h-c,s[d+n*o]+=s[d+n*r];while(--c);break}}if(s[o+n*o]!==0)for(r=o+1;r<l;r++){let u=s[o+n*r]/s[o+n*o];c=h;do d=h-c,s[d+n*r]=d<=o?0:s[d+n*r]-s[d+n*o]*u;while(--c)}}while(--a);o=2;do{r=o-1;do{let u=s[o+n*r]/s[o+n*o];c=n;do d=n-c,s[d+n*r]=s[d+n*r]-s[d+n*o]*u;while(--c)}while(r--)}while(--o);o=2;do{let u=1/s[o+n*o];c=n;do d=n-c,s[d+n*o]=s[d+n*o]*u;while(--c)}while(o--);o=2;do{r=2;do{if(d=s[e+r+n*o],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,r,d)}while(r--)}while(o--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,s=t.z,o=t.w,r=e+e,a=n+n,l=s+s,c=e*r,h=e*a,d=e*l,u=n*a,f=n*l,m=s*l,x=o*r,g=o*a,p=o*l,v=this.elements;return v[3*0+0]=1-(u+m),v[3*0+1]=h-p,v[3*0+2]=d+g,v[3*1+0]=h+p,v[3*1+1]=1-(c+m),v[3*1+2]=f-x,v[3*2+0]=d-g,v[3*2+1]=f+x,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new i);let e=this.elements,n=t.elements,s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}},Db=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],b=class i{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new i);let n=t.x,s=t.y,o=t.z,r=this.x,a=this.y,l=this.z;return e.x=a*o-l*s,e.y=l*n-r*o,e.z=r*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new i(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new i(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new ys([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){let o=1/s;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,o=Math.sqrt(e*e+n*n+s*s);return o>0?(o=1/o,t.x=e*o,t.y=n*o,t.z=s*o):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return Math.sqrt((o-e)*(o-e)+(r-n)*(r-n)+(a-s)*(a-s))}distanceSquared(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return(o-e)*(o-e)+(r-n)*(r-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,o=this.z;return e.x=t*n,e.y=t*s,e.z=t*o,e}vmul(t,e){return e===void 0&&(e=new i),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new i),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let s=zb,o=1/n;s.set(this.x*o,this.y*o,this.z*o);let r=Ub;Math.abs(s.x)<.9?(r.set(1,0,0),s.cross(r,t)):(r.set(0,1,0),s.cross(r,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let s=this.x,o=this.y,r=this.z;n.x=s+(t.x-s)*e,n.y=o+(t.y-o)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Gp),Gp.almostEquals(t,e)}clone(){return new i(this.x,this.y,this.z)}};b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);var zb=new b,Ub=new b,Gp=new b,Pn=class i{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){let o=this.lowerBound,r=this.upperBound,a=n;o.copy(t[0]),a&&a.vmult(o,o),r.copy(o);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Wp),c=Wp),c.x>r.x&&(r.x=c.x),c.x<o.x&&(o.x=c.x),c.y>r.y&&(r.y=c.y),c.y<o.y&&(o.y=c.y),c.z>r.z&&(r.z=c.z),c.z<o.z&&(o.z=c.z)}return e&&(e.vadd(o,o),e.vadd(r,r)),s&&(o.x-=s,o.y-=s,o.z-=s,r.x+=s,r.y+=s,r.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new i().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,o=t.upperBound,r=s.x<=n.x&&n.x<=o.x||e.x<=o.x&&o.x<=n.x,a=s.y<=n.y&&n.y<=o.y||e.y<=o.y&&o.y<=n.y,l=s.z<=n.z&&n.z<=o.z||e.z<=o.z&&o.z<=n.z;return r&&a&&l}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,o=t.upperBound;return e.x<=s.x&&n.x>=o.x&&e.y<=s.y&&n.y>=o.y&&e.z<=s.z&&n.z>=o.z}getCorners(t,e,n,s,o,r,a,l){let c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),s.set(c.x,h.y,h.z),o.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){let n=qp,s=n[0],o=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,o,r,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=qp,s=n[0],o=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,o,r,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,s=1/e.x,o=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*o,h=(this.upperBound.y-n.y)*o,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(m<0||f>m)}},Wp=new b,qp=[new b,new b,new b,new b,new b,new b,new b,new b],Bl=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){let o=s;s=n,n=o}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:o}=e;if(o>s){let r=o;o=s,s=r}this.matrix[(s*(s+1)>>1)+o-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},Dl=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,o=n.length;s<o;s++)n[s].call(this,t)}return this}},en=class i{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=Ob,s=kb;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,o=this.z,r=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*a+s*c-o*l,e.y=s*h+r*l+o*a-n*c,e.z=o*h+r*c+n*l-s*a,e.w=r*h-n*a-s*l-o*c,e}inverse(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,o=this.w;this.conjugate(t);let r=1/(e*e+n*n+s*s+o*o);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);let n=t.x,s=t.y,o=t.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*o-l*s,d=c*s+l*n-r*o,u=c*o+r*s-a*n,f=-r*n-a*s-l*o;return e.x=h*c+f*-r+d*-l-u*-a,e.y=d*c+f*-a+u*-r-h*-l,e.z=u*c+f*-l+h*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,o,r=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":let h=r*a+l*c;if(h>.499&&(n=2*Math.atan2(r,c),s=Math.PI/2,o=0),h<-.499&&(n=-2*Math.atan2(r,c),s=-Math.PI/2,o=0),n===void 0){let d=r*r,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*u-2*f),s=Math.asin(2*h),o=Math.atan2(2*r*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=o}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");let o=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=l*r*a+o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a-l*c*h):s==="YXZ"?(this.x=l*r*a+o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a+l*c*h):s==="ZXY"?(this.x=l*r*a-o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a-l*c*h):s==="ZYX"?(this.x=l*r*a-o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a+l*c*h):s==="YZX"?(this.x=l*r*a+o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a-l*c*h):s==="XZY"&&(this.x=l*r*a-o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a+l*c*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new i);let s=this.x,o=this.y,r=this.z,a=this.w,l=t.x,c=t.y,h=t.z,d=t.w,u,f,m,x,g;return f=s*l+o*c+r*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),m=Math.sin(u),x=Math.sin((1-e)*u)/m,g=Math.sin(e*u)/m):(x=1-e,g=e),n.x=x*s+g*l,n.y=x*o+g*c,n.z=x*r+g*h,n.w=x*a+g*d,n}integrate(t,e,n,s){s===void 0&&(s=new i);let o=t.x*n.x,r=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return s.x+=u*(o*d+r*h-a*c),s.y+=u*(r*d+a*l-o*h),s.z+=u*(a*d+o*c-r*l),s.w+=u*(-o*l-r*c-a*h),s}},Ob=new b,kb=new b,Vb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},xt=class i{constructor(t){t===void 0&&(t={}),this.id=i.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};xt.idCounter=0;xt.types=Vb;var ye=class i{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new en,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return i.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return i.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new b),n.vsub(t,s),e.conjugate(Xp),Xp.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new b),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new b),e.w*=-1,e.vmult(n,s),e.w*=-1,s}},Xp=new en,nr=class i extends xt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:s=[],axes:o,boundingSphereRadius:r}=t;super({type:xt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let s=new b;for(let o=0;o!==t.length;o++){let r=t[o],a=r.length;for(let l=0;l!==a;l++){let c=(l+1)%a;e[r[l]].vsub(e[r[c]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);let e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],s=this.vertices[n[0]],o=this.vertices[n[1]],r=this.vertices[n[2]];i.computeNormal(s,o,r,e)}static computeNormal(t,e,n,s){let o=new b,r=new b;e.vsub(t,r),n.vsub(e,o),o.cross(r,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,o,r,a,l,c){let h=new b,d=-1,u=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),o.vmult(h,h);let x=h.dot(r);x>u&&(u=x,d=m)}let f=[];for(let m=0;m<n.faces[d].length;m++){let x=n.vertices[n.faces[d][m]],g=new b;g.copy(x),o.vmult(g,g),s.vadd(g,g),f.push(g)}d>=0&&this.clipFaceAgainstHull(r,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,s,o,r,a,l){let c=new b,h=new b,d=new b,u=new b,f=new b,m=new b,x=Number.MAX_VALUE,g=this;if(g.uniqueAxes)for(let p=0;p!==g.uniqueAxes.length;p++){n.vmult(g.uniqueAxes[p],c);let v=g.testSepAxis(c,t,e,n,s,o);if(v===!1)return!1;v<x&&(x=v,r.copy(c))}else{let p=a?a.length:g.faces.length;for(let v=0;v<p;v++){let M=a?a[v]:v;c.copy(g.faceNormals[M]),n.vmult(c,c);let w=g.testSepAxis(c,t,e,n,s,o);if(w===!1)return!1;w<x&&(x=w,r.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){o.vmult(t.uniqueAxes[p],h);let v=g.testSepAxis(h,t,e,n,s,o);if(v===!1)return!1;v<x&&(x=v,r.copy(h))}else{let p=l?l.length:t.faces.length;for(let v=0;v<p;v++){let M=l?l[v]:v;h.copy(t.faceNormals[M]),o.vmult(h,h);let w=g.testSepAxis(h,t,e,n,s,o);if(w===!1)return!1;w<x&&(x=w,r.copy(h))}}for(let p=0;p!==g.uniqueEdges.length;p++){n.vmult(g.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(o.vmult(t.uniqueEdges[v],f),u.cross(f,m),!m.almostZero()){m.normalize();let M=g.testSepAxis(m,t,e,n,s,o);if(M===!1)return!1;M<x&&(x=M,r.copy(m))}}return s.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,s,o,r){let a=this;i.project(a,t,n,s,Uu),i.project(e,t,o,r,Ou);let l=Uu[0],c=Uu[1],h=Ou[0],d=Ou[1];if(l<d||h<c)return!1;let u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){let n=new b,s=new b;this.computeLocalAABB(s,n);let o=n.x-s.x,r=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*o*2*o+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*o*2*o)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,o,r,a){let l=new b,c=new b,h=new b,d=new b,u=new b,f=new b,m=new b,x=new b,g=this,p=[],v=s,M=p,w=-1,I=Number.MAX_VALUE;for(let E=0;E<g.faces.length;E++){l.copy(g.faceNormals[E]),n.vmult(l,l);let N=l.dot(t);N<I&&(I=N,w=E)}if(w<0)return;let T=g.faces[w];T.connectedFaces=[];for(let E=0;E<g.faces.length;E++)for(let N=0;N<g.faces[E].length;N++)T.indexOf(g.faces[E][N])!==-1&&E!==w&&T.connectedFaces.indexOf(E)===-1&&T.connectedFaces.push(E);let C=T.length;for(let E=0;E<C;E++){let N=g.vertices[T[E]],G=g.vertices[T[(E+1)%C]];N.vsub(G,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[w]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(N),n.vmult(f,f),e.vadd(f,f);let B=T.connectedFaces[E];m.copy(this.faceNormals[B]);let z=this.getPlaneConstantOfFace(B);x.copy(m),n.vmult(x,x);let V=z-x.dot(e);for(this.clipFaceAgainstPlane(v,M,x,V);v.length;)v.shift();for(;M.length;)v.push(M.shift())}m.copy(this.faceNormals[w]);let L=this.getPlaneConstantOfFace(w);x.copy(m),n.vmult(x,x);let S=L-x.dot(e);for(let E=0;E<v.length;E++){let N=x.dot(v[E])+S;if(N<=o&&(console.log(`clamped: depth=${N} to minDist=${o}`),N=o),N<=r){let G=v[E];if(N<=1e-6){let B={point:G,normal:x,depth:N};a.push(B)}}}}clipFaceAgainstPlane(t,e,n,s){let o,r,a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];o=n.dot(l)+s;for(let h=0;h<a;h++){if(c=t[h],r=n.dot(c)+s,o<0)if(r<0){let d=new b;d.copy(c),e.push(d)}else{let d=new b;l.lerp(c,o/(o-r),d),e.push(d)}else if(r<0){let d=new b;l.lerp(c,o/(o-r),d),e.push(d),e.push(c)}l=c,o=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);let n=this.vertices,s=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)e.vmult(n[o],s[o]),t.vadd(s[o],s[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let o=n[s];o.x<t.x?t.x=o.x:o.x>e.x&&(e.x=o.x),o.y<t.y?t.y=o.y:o.y>e.y&&(e.y=o.y),o.z<t.z?t.z=o.z:o.z>e.z&&(e.z=o.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);let n=this.faceNormals,s=this.worldFaceNormals;for(let o=0;o!==e;o++)t.vmult(n[o],s[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){let o=this.vertices,r,a,l,c,h,d,u=new b;for(let f=0;f<o.length;f++){u.copy(o[f]),e.vmult(u,u),t.vadd(u,u);let m=u;(r===void 0||m.x<r)&&(r=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(r,a,l),s.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,s=this.vertices;if(e){for(let o=0;o<n;o++){let r=s[o];e.vmult(r,r)}for(let o=0;o<this.faceNormals.length;o++){let r=this.faceNormals[o];e.vmult(r,r)}}if(t)for(let o=0;o<n;o++){let r=s[o];r.vadd(t,r)}}pointIsInside(t){let e=this.vertices,n=this.faces,s=this.faceNormals,o=null,r=new b;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let l=s[a],c=e[n[a][0]],h=new b;t.vsub(c,h);let d=l.dot(h),u=new b;r.vsub(c,u);let f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return o?1:-1}static project(t,e,n,s,o){let r=t.vertices.length,a=Gb,l=0,c=0,h=Wb,d=t.vertices;h.setZero(),ye.vectorToLocalFrame(n,s,e,a),ye.pointToLocalFrame(n,s,h,h);let u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<r;f++){let m=d[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=u,l-=u,c>l){let f=c;c=l,l=f}o[0]=l,o[1]=c}},Uu=[],Ou=[],Hb=new b,Gb=new b,Wb=new b,ni=class i extends xt{constructor(t){super({type:xt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=b,o=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new nr({vertices:o,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),i.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){let n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let o=0;o!==n.length;o++)e.vmult(n[o],n[o]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let s=this.halfExtents,o=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let r=0;r<o.length;r++)gs.set(o[r][0],o[r][1],o[r][2]),e.vmult(gs,gs),t.vadd(gs,gs),n(gs.x,gs.y,gs.z)}calculateWorldAABB(t,e,n,s){let o=this.halfExtents;fi[0].set(o.x,o.y,o.z),fi[1].set(-o.x,o.y,o.z),fi[2].set(-o.x,-o.y,o.z),fi[3].set(-o.x,-o.y,-o.z),fi[4].set(o.x,-o.y,-o.z),fi[5].set(o.x,o.y,-o.z),fi[6].set(-o.x,o.y,-o.z),fi[7].set(o.x,-o.y,o.z);let r=fi[0];e.vmult(r,r),t.vadd(r,r),s.copy(r),n.copy(r);for(let a=1;a<8;a++){let l=fi[a];e.vmult(l,l),t.vadd(l,l);let c=l.x,h=l.y,d=l.z;c>s.x&&(s.x=c),h>s.y&&(s.y=h),d>s.z&&(s.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},gs=new b,fi=[new b,new b,new b,new b,new b,new b,new b,new b],Ku={DYNAMIC:1,STATIC:2,KINEMATIC:4},Qu={AWAKE:0,SLEEPY:1,SLEEPING:2},it=class i extends Dl{constructor(t){t===void 0&&(t={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?i.STATIC:i.DYNAMIC,typeof t.type==typeof i.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new en,this.initQuaternion=new en,this.previousQuaternion=new en,this.interpolatedQuaternion=new en,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new ys,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new ys,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Pn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,t===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(i.sleepyEvent)):e===i.SLEEPY&&n>s?this.wakeUp():e===i.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){let s=new b,o=new en;return e&&s.copy(e),n&&o.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,s=0;for(let o=0;o!==n;o++){let r=t[o];r.updateBoundingSphereRadius();let a=e[o].length(),l=r.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,o=qb,r=Xb,a=this.quaternion,l=this.aabb,c=Yb;for(let h=0;h!==s;h++){let d=t[h];a.vmult(e[h],o),o.vadd(this.position,o),a.mult(n[h],r),d.calculateWorldAABB(o,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=Zb,s=$b;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=Jb;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==i.DYNAMIC)return;let n=Kb,s=Qb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=e,s=t1;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let o=e1;n.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==i.DYNAMIC)return;let n=n1,s=i1;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){let t=s1;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ni.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,o=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;let m=d.elements,x=this.angularFactor,g=l.x*x.x,p=l.y*x.y,v=l.z*x.z;o.x+=t*(m[0]*g+m[1]*p+m[2]*v),o.y+=t*(m[3]*g+m[4]*p+m[5]*v),o.z+=t*(m[6]*g+m[7]*p+m[8]*v),r.x+=s.x*t,r.y+=s.y*t,r.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};it.idCounter=0;it.COLLIDE_EVENT_NAME="collide";it.DYNAMIC=Ku.DYNAMIC;it.STATIC=Ku.STATIC;it.KINEMATIC=Ku.KINEMATIC;it.AWAKE=Qu.AWAKE;it.SLEEPY=Qu.SLEEPY;it.SLEEPING=Qu.SLEEPING;it.wakeupEvent={type:"wakeup"};it.sleepyEvent={type:"sleepy"};it.sleepEvent={type:"sleep"};var qb=new b,Xb=new en,Yb=new Pn,Zb=new ys,$b=new ys,jb=new ys,Jb=new b,Kb=new b,Qb=new b,t1=new b,e1=new b,n1=new b,i1=new b,s1=new b,zl=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&it.STATIC||t.sleepState===it.SLEEPING)&&(e.type&it.STATIC||e.sleepState===it.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){let o=o1;e.position.vsub(t.position,o);let r=(t.boundingRadius+e.boundingRadius)**2;o.lengthSquared()<r&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){let n=r1,s=a1,o=l1,r=t.length;for(let a=0;a!==r;a++)s[a]=t[a],o[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){let l=s[a].id,c=o[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(o[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new b;t.position.vsub(e.position,n);let s=t.shapes[0],o=e.shapes[0];return Math.pow(s.boundingSphereRadius+o.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},o1=new b;new b;new en;new b;var r1={keys:[]},a1=[],l1=[];new b;var UE=new b;new b;var Wu=class extends zl{constructor(){super()}collisionPairs(t,e,n){let s=t.bodies,o=s.length,r,a;for(let l=0;l!==o;l++)for(let c=0;c!==l;c++)r=s[l],a=s[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){let o=t.bodies[s];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(e)&&n.push(o)}return n}},xs=class{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,o,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=o,this.body=r,this.distance=a}},rm,am,lm,cm,hm,um,dm,td={CLOSEST:1,ANY:2,ALL:4};rm=xt.types.SPHERE;am=xt.types.PLANE;lm=xt.types.BOX;cm=xt.types.CYLINDER;hm=xt.types.CONVEXPOLYHEDRON;um=xt.types.HEIGHTFIELD;dm=xt.types.TRIMESH;var Hn=class i{get[rm](){return this._intersectSphere}get[am](){return this._intersectPlane}get[lm](){return this._intersectBox}get[cm](){return this._intersectConvex}get[hm](){return this._intersectConvex}get[um](){return this._intersectHeightfield}get[dm](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new xs,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||i.ANY,this.result=e.result||new xs,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Yp),ku.length=0,t.broadphase.aabbQuery(t,Yp,ku),this.intersectBodies(ku),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let s=c1,o=h1;for(let r=0,a=t.shapes.length;r<a;r++){let l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],o),t.quaternion.vmult(t.shapeOffsets[r],s),s.vadd(t.position,s),this.intersectShape(l,o,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){let o=this.from;if(T1(o,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,o){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,o)}_intersectPlane(t,e,n,s,o){let r=this.from,a=this.to,l=this.direction,c=new b(0,0,1);e.vmult(c,c);let h=new b;r.vsub(n,h);let d=h.dot(c);a.vsub(n,h);let u=h.dot(c);if(d*u>0||r.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let m=new b,x=new b,g=new b;r.vsub(n,m);let p=-c.dot(m)/f;l.scale(p,x),r.vadd(x,g),this.reportIntersection(c,g,o,s,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,s=this.to,o=this.from;e.x=Math.min(s.x,o.x),e.y=Math.min(s.y,o.y),e.z=Math.min(s.z,o.z),n.x=Math.max(s.x,o.x),n.y=Math.max(s.y,o.y),n.z=Math.max(s.z,o.z)}_intersectHeightfield(t,e,n,s,o){t.data,t.elementSize;let r=u1;r.from.copy(this.from),r.to.copy(this.to),ye.pointToLocalFrame(n,e,r.from,r.from),ye.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();let a=d1,l,c,h,d;l=c=0,h=d=t.data.length-1;let u=new Pn;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<d;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,m,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(f,m,!1),ye.pointToWorldFrame(n,e,t.pillarOffset,Il),this._intersectConvex(t.pillarConvex,e,Il,s,o,Zp),this.result.shouldStop)return;t.getConvexTrianglePillar(f,m,!0),ye.pointToWorldFrame(n,e,t.pillarOffset,Il),this._intersectConvex(t.pillarConvex,e,Il,s,o,Zp)}}}_intersectSphere(t,e,n,s,o){let r=this.from,a=this.to,l=t.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,f=f1,m=p1;if(!(u<0))if(u===0)r.lerp(a,u,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,o,s,-1);else{let x=(-h-Math.sqrt(u))/(2*c),g=(-h+Math.sqrt(u))/(2*c);if(x>=0&&x<=1&&(r.lerp(a,x,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,o,s,-1)),this.result.shouldStop)return;g>=0&&g<=1&&(r.lerp(a,g,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,o,s,-1))}}_intersectConvex(t,e,n,s,o,r){let a=m1,l=$p,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,m=this.from,x=this.to,g=m.distanceTo(x),p=c?c.length:h.length,v=this.result;for(let M=0;!v.shouldStop&&M<p;M++){let w=c?c[M]:M,I=h[w],T=u[w],C=e,L=n;l.copy(d[I[0]]),C.vmult(l,l),l.vadd(L,l),l.vsub(m,l),C.vmult(T,a);let S=f.dot(a);if(Math.abs(S)<this.precision)continue;let E=a.dot(l)/S;if(!(E<0)){f.scale(E,Mn),Mn.vadd(m,Mn),ei.copy(d[I[0]]),C.vmult(ei,ei),L.vadd(ei,ei);for(let N=1;!v.shouldStop&&N<I.length-1;N++){pi.copy(d[I[N]]),mi.copy(d[I[N+1]]),C.vmult(pi,pi),C.vmult(mi,mi),L.vadd(pi,pi),L.vadd(mi,mi);let G=Mn.distanceTo(m);!(i.pointInTriangle(Mn,ei,pi,mi)||i.pointInTriangle(Mn,pi,ei,mi))||G>g||this.reportIntersection(a,Mn,o,s,w)}}}}_intersectTrimesh(t,e,n,s,o,r){let a=x1,l=E1,c=S1,h=$p,d=v1,u=_1,f=b1,m=M1,x=w1,g=t.indices;t.vertices;let p=this.from,v=this.to,M=this.direction;c.position.copy(n),c.quaternion.copy(e),ye.vectorToLocalFrame(n,e,M,d),ye.pointToLocalFrame(n,e,p,u),ye.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let w=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let I=0,T=l.length;!this.result.shouldStop&&I!==T;I++){let C=l[I];t.getNormal(C,a),t.getVertex(g[C*3],ei),ei.vsub(u,h);let L=d.dot(a),S=a.dot(h)/L;if(S<0)continue;d.scale(S,Mn),Mn.vadd(u,Mn),t.getVertex(g[C*3+1],pi),t.getVertex(g[C*3+2],mi);let E=Mn.distanceSquared(u);!(i.pointInTriangle(Mn,pi,ei,mi)||i.pointInTriangle(Mn,ei,pi,mi))||E>w||(ye.vectorToWorldFrame(e,a,x),ye.pointToWorldFrame(n,e,Mn,m),this.reportIntersection(x,m,o,s,C))}l.length=0}reportIntersection(t,e,n,s,o){let r=this.from,a=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case i.ALL:this.hasHit=!0,c.set(r,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case i.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,s,l));break;case i.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Zs),n.vsub(e,Wr),t.vsub(e,Vu);let o=Zs.dot(Zs),r=Zs.dot(Wr),a=Zs.dot(Vu),l=Wr.dot(Wr),c=Wr.dot(Vu),h,d;return(h=l*a-r*c)>=0&&(d=o*c-r*a)>=0&&h+d<o*l-r*r}};Hn.CLOSEST=td.CLOSEST;Hn.ANY=td.ANY;Hn.ALL=td.ALL;var Yp=new Pn,ku=[],Wr=new b,Vu=new b,c1=new b,h1=new en,Mn=new b,ei=new b,pi=new b,mi=new b;new b;new xs;var Zp={faceList:[0]},Il=new b,u1=new Hn,d1=[],f1=new b,p1=new b,m1=new b,g1=new b,y1=new b,$p=new b,x1=new b,v1=new b,_1=new b,b1=new b,w1=new b,M1=new b;new Pn;var E1=[],S1=new ye,Zs=new b,Pl=new b;function T1(i,t,e){e.vsub(i,Zs);let n=Zs.dot(t);return t.scale(n,Pl),Pl.vadd(i,Pl),e.distanceTo(Pl)}var Ul=class i extends zl{static checkBounds(t,e,n){let s,o;n===0?(s=t.position.x,o=e.position.x):n===1?(s=t.position.y,o=e.position.y):n===2&&(s=t.position.z,o=e.position.z);let r=t.boundingRadius,a=e.boundingRadius,l=s+r;return o-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.x<=s.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.y<=s.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.z<=s.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let s=this.axisList,o=s.length,r=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==o;a++){let c=s[a];for(l=a+1;l<o;l++){let h=s[l];if(this.needBroadphaseCollision(c,h)){if(!i.checkBounds(c,h,r))break;this.intersectionTest(c,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){let o=t[s];o.aabbNeedsUpdate&&o.updateAABB()}e===0?i.insertionSortX(t):e===1?i.insertionSortY(t):e===2&&i.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,o=0,r=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let m=a[f],x=m.position.x;t+=x,e+=x*x;let g=m.position.y;n+=g,s+=g*g;let p=m.position.z;o+=p,r+=p*p}let h=e-t*t*c,d=s-n*n*c,u=r-o*o*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,o="x";s===1&&(o="y"),s===2&&(o="z");let r=this.axisList;e.lowerBound[o],e.upperBound[o];for(let a=0;a<r.length;a++){let l=r[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}},Zr=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},Ol=class i{constructor(t,e,n){n===void 0&&(n={}),n=Zr.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};Ol.idCounter=0;var kl=class{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},$s=class i{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new kl,this.jacobianElementB=new kl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let s=e,o=t,r=n;this.a=4/(r*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(r*r*o*(1+4*s))}computeB(t,e,n){let s=this.computeGW(),o=this.computeGq(),r=this.computeGiMf();return-o*t-s*e-r*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.position,r=s.position;return t.spatial.dot(o)+e.spatial.dot(r)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.velocity,r=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(o,a)+e.multiplyVectors(r,l)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.vlambda,r=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(o,a)+e.multiplyVectors(r,l)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.force,r=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,h=s.invMassSolve;return o.scale(c,jp),a.scale(h,Jp),n.invInertiaWorldSolve.vmult(r,Kp),s.invInertiaWorldSolve.vmult(l,Qp),t.multiplyVectors(jp,Kp)+e.multiplyVectors(Jp,Qp)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.invMassSolve,r=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve,c=o+r;return a.vmult(t.rotational,Nl),c+=Nl.dot(t.rotational),l.vmult(e.rotational,Nl),c+=Nl.dot(e.rotational),c}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,o=this.bj,r=A1;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,n.spatial,o.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda),o.invInertiaWorldSolve.vmult(n.rotational,r),o.wlambda.addScaledVector(t,r,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};$s.idCounter=0;var jp=new b,Jp=new b,Kp=new b,Qp=new b,Nl=new b,A1=new b,tr=class extends $s{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){let e=this.a,n=this.b,s=this.bi,o=this.bj,r=this.ri,a=this.rj,l=R1,c=C1,h=s.velocity,d=s.angularVelocity;s.force,s.torque;let u=o.velocity,f=o.angularVelocity;o.force,o.torque;let m=I1,x=this.jacobianElementA,g=this.jacobianElementB,p=this.ni;r.cross(p,l),a.cross(p,c),p.negate(x.spatial),l.negate(x.rotational),g.spatial.copy(p),g.rotational.copy(c),m.copy(o.position),m.vadd(a,m),m.vsub(s.position,m),m.vsub(r,m);let v=p.dot(m),M=this.restitution+1,w=M*u.dot(p)-M*h.dot(p)+f.dot(c)-d.dot(l),I=this.computeGiMf();return-v*e-w*n-t*I}getImpactVelocityAlongNormal(){let t=P1,e=N1,n=L1,s=F1,o=B1;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,o),this.ni.dot(o)}},R1=new b,C1=new b,I1=new b,P1=new b,N1=new b,L1=new b,F1=new b,B1=new b,ir=class extends Ol{constructor(t,e,n,s,o){e===void 0&&(e=new b),s===void 0&&(s=new b),o===void 0&&(o=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=s.clone();let r=this.equationX=new tr(t,n),a=this.equationY=new tr(t,n),l=this.equationZ=new tr(t,n);this.equations.push(r,a,l),r.minForce=a.minForce=l.minForce=-o,r.maxForce=a.maxForce=l.maxForce=o,r.ni.set(1,0,0),a.ni.set(0,1,0),l.ni.set(0,0,1)}update(){let t=this.bodyA,e=this.bodyB,n=this.equationX,s=this.equationY,o=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),o.ri.copy(n.ri),o.rj.copy(n.rj)}},qu=class extends $s{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new b(1,0,0),this.axisB=n.axisB?n.axisB.clone():new b(0,1,0),this.angle=typeof n.angle<"u"?n.angle:0}computeB(t){let e=this.a,n=this.b,s=this.axisA,o=this.axisB,r=D1,a=z1,l=this.jacobianElementA,c=this.jacobianElementB;s.cross(o,r),o.cross(s,a),l.rotational.copy(a),c.rotational.copy(r);let h=Math.cos(this.angle)-s.dot(o),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},D1=new b,z1=new b,er=class extends $s{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new b(1,0,0),this.axisB=n.axisB?n.axisB.clone():new b(0,1,0),this.maxAngle=Math.PI/2}computeB(t){let e=this.a,n=this.b,s=this.axisA,o=this.axisB,r=U1,a=O1,l=this.jacobianElementA,c=this.jacobianElementB;s.cross(o,r),o.cross(s,a),l.rotational.copy(a),c.rotational.copy(r);let h=Math.cos(this.maxAngle)-s.dot(o),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},U1=new b,O1=new b,$r=class extends ir{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6,o=n.pivotA?n.pivotA.clone():new b,r=n.pivotB?n.pivotB.clone():new b;super(t,o,e,r,s),this.axisA=n.axisA?n.axisA.clone():new b,this.axisB=n.axisB?n.axisB.clone():new b,this.collideConnected=!!n.collideConnected,this.angle=typeof n.angle<"u"?n.angle:0;let a=this.coneEquation=new qu(t,e,n),l=this.twistEquation=new er(t,e,n);this.twistAngle=typeof n.twistAngle<"u"?n.twistAngle:0,a.maxForce=0,a.minForce=-s,l.maxForce=0,l.minForce=-s,this.equations.push(a,l)}update(){let t=this.bodyA,e=this.bodyB,n=this.coneEquation,s=this.twistEquation;super.update(),t.vectorToWorldFrame(this.axisA,n.axisA),e.vectorToWorldFrame(this.axisB,n.axisB),this.axisA.tangents(s.axisA,s.axisA),t.vectorToWorldFrame(s.axisA,s.axisA),this.axisB.tangents(s.axisB,s.axisB),e.vectorToWorldFrame(s.axisB,s.axisB),n.angle=this.angle,s.maxAngle=this.twistAngle}};new b;new b;var Vl=class extends ir{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6,o=new b,r=new b,a=new b;t.position.vadd(e.position,a),a.scale(.5,a),e.pointToLocalFrame(a,r),t.pointToLocalFrame(a,o),super(t,o,e,r,s),this.xA=t.vectorToLocalFrame(b.UNIT_X),this.xB=e.vectorToLocalFrame(b.UNIT_X),this.yA=t.vectorToLocalFrame(b.UNIT_Y),this.yB=e.vectorToLocalFrame(b.UNIT_Y),this.zA=t.vectorToLocalFrame(b.UNIT_Z),this.zB=e.vectorToLocalFrame(b.UNIT_Z);let l=this.rotationalEquation1=new er(t,e,n),c=this.rotationalEquation2=new er(t,e,n),h=this.rotationalEquation3=new er(t,e,n);this.equations.push(l,c,h)}update(){let t=this.bodyA,e=this.bodyB;this.motorEquation;let n=this.rotationalEquation1,s=this.rotationalEquation2,o=this.rotationalEquation3;super.update(),t.vectorToWorldFrame(this.xA,n.axisA),e.vectorToWorldFrame(this.yB,n.axisB),t.vectorToWorldFrame(this.yA,s.axisA),e.vectorToWorldFrame(this.zB,s.axisB),t.vectorToWorldFrame(this.zA,o.axisA),e.vectorToWorldFrame(this.xB,o.axisB)}},k1=new b,V1=new b;var OE=new b,kE=new b,Hl=class extends $s{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,o=H1,r=G1,a=this.t;n.cross(a,o),s.cross(a,r);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),o.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},H1=new b,G1=new b,Gl=class i{constructor(t,e,n){n=Zr.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Gl.idCounter=0;var vs=class i{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=i.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};vs.idCounter=0;var VE=new b,HE=new b,GE=new b,WE=new b,qE=new b,XE=new b,YE=new b,ZE=new b,$E=new b,jE=new b,JE=new b;var KE=new b,QE=new b;new b;new b;new b;var tS=new b,eS=new b,nS=new b;new Hn;new b;var iS=new b,sS=new b,oS=[new b(1,0,0),new b(0,1,0),new b(0,0,1)],rS=new b;var aS=new b,lS=new b,cS=new b;var hS=new b,uS=new b,dS=new b,fS=new b;var pS=new b,mS=new b,gS=new b;var Nn=class extends xt{constructor(t){if(super({type:xt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new b);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){let o=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){let l=r[a];n[l]=t[l]-o,s[l]=t[l]+o}}};var yS=new b,xS=new b;var vS=new b,_S=new b,bS=new b,wS=new b,MS=new b,ES=new b,SS=new b,Zi=class extends nr{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let o=s,r=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;r.push(new b(-e*u(0),-n*.5,e*d(0))),c.push(0),r.push(new b(-t*u(0),n*.5,t*d(0))),h.push(1);for(let m=0;m<o;m++){let x=2*Math.PI/o*(m+1),g=2*Math.PI/o*(m+.5);m<o-1?(r.push(new b(-e*u(x),-n*.5,e*d(x))),c.push(2*m+2),r.push(new b(-t*u(x),n*.5,t*d(x))),h.push(2*m+3),l.push([2*m,2*m+1,2*m+3,2*m+2])):l.push([2*m,2*m+1,1,0]),(o%2===1||m<o/2)&&a.push(new b(-u(g),0,d(g)))}l.push(c),a.push(new b(0,1,0));let f=[];for(let m=0;m<h.length;m++)f.push(h[h.length-m-1]);l.push(f),super({vertices:r,faces:l,axes:a}),this.type=xt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}};var TS=new b,Wl=class extends xt{constructor(t,e){e===void 0&&(e={}),e=Zr.defaults(e,{maxValue:null,minValue:null,elementSize:1}),super({type:xt.types.HEIGHTFIELD}),this.data=t,this.maxValue=e.maxValue,this.minValue=e.minValue,this.elementSize=e.elementSize,e.minValue===null&&this.updateMinValue(),e.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,this.pillarConvex=new nr,this.pillarOffset=new b,this.updateBoundingSphereRadius(),this._cachedPillars={}}update(){this._cachedPillars={}}updateMinValue(){let t=this.data,e=t[0][0];for(let n=0;n!==t.length;n++)for(let s=0;s!==t[n].length;s++){let o=t[n][s];o<e&&(e=o)}this.minValue=e}updateMaxValue(){let t=this.data,e=t[0][0];for(let n=0;n!==t.length;n++)for(let s=0;s!==t[n].length;s++){let o=t[n][s];o>e&&(e=o)}this.maxValue=e}setHeightValueAtIndex(t,e,n){let s=this.data;s[t][e]=n,this.clearCachedConvexTrianglePillar(t,e,!1),t>0&&(this.clearCachedConvexTrianglePillar(t-1,e,!0),this.clearCachedConvexTrianglePillar(t-1,e,!1)),e>0&&(this.clearCachedConvexTrianglePillar(t,e-1,!0),this.clearCachedConvexTrianglePillar(t,e-1,!1)),e>0&&t>0&&this.clearCachedConvexTrianglePillar(t-1,e-1,!0)}getRectMinMax(t,e,n,s,o){o===void 0&&(o=[]);let r=this.data,a=this.minValue;for(let l=t;l<=n;l++)for(let c=e;c<=s;c++){let h=r[l][c];h>a&&(a=h)}o[0]=this.minValue,o[1]=a}getIndexOfPosition(t,e,n,s){let o=this.elementSize,r=this.data,a=Math.floor(t/o),l=Math.floor(e/o);return n[0]=a,n[1]=l,s&&(a<0&&(a=0),l<0&&(l=0),a>=r.length-1&&(a=r.length-1),l>=r[0].length-1&&(l=r[0].length-1)),!(a<0||l<0||a>=r.length-1||l>=r[0].length-1)}getTriangleAt(t,e,n,s,o,r){let a=tm;this.getIndexOfPosition(t,e,a,n);let l=a[0],c=a[1],h=this.data;n&&(l=Math.min(h.length-2,Math.max(0,l)),c=Math.min(h[0].length-2,Math.max(0,c)));let d=this.elementSize,u=(t/d-l)**2+(e/d-c)**2,f=(t/d-(l+1))**2+(e/d-(c+1))**2,m=u>f;return this.getTriangle(l,c,m,s,o,r),m}getNormalAt(t,e,n,s){let o=Y1,r=Z1,a=$1,l=j1,c=J1;this.getTriangleAt(t,e,n,o,r,a),r.vsub(o,l),a.vsub(o,c),l.cross(c,s),s.normalize()}getAabbAtIndex(t,e,n){let{lowerBound:s,upperBound:o}=n,r=this.data,a=this.elementSize;s.set(t*a,e*a,r[t][e]),o.set((t+1)*a,(e+1)*a,r[t+1][e+1])}getHeightAt(t,e,n){let s=this.data,o=W1,r=q1,a=X1,l=tm;this.getIndexOfPosition(t,e,l,n);let c=l[0],h=l[1];n&&(c=Math.min(s.length-2,Math.max(0,c)),h=Math.min(s[0].length-2,Math.max(0,h)));let d=this.getTriangleAt(t,e,n,o,r,a);K1(t,e,o.x,o.y,r.x,r.y,a.x,a.y,em);let u=em;return d?s[c+1][h+1]*u.x+s[c][h+1]*u.y+s[c+1][h]*u.z:s[c][h]*u.x+s[c+1][h]*u.y+s[c][h+1]*u.z}getCacheConvexTrianglePillarKey(t,e,n){return`${t}_${e}_${n?1:0}`}getCachedConvexTrianglePillar(t,e,n){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]}setCachedConvexTrianglePillar(t,e,n,s,o){this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]={convex:s,offset:o}}clearCachedConvexTrianglePillar(t,e,n){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]}getTriangle(t,e,n,s,o,r){let a=this.data,l=this.elementSize;n?(s.set((t+1)*l,(e+1)*l,a[t+1][e+1]),o.set(t*l,(e+1)*l,a[t][e+1]),r.set((t+1)*l,e*l,a[t+1][e])):(s.set(t*l,e*l,a[t][e]),o.set((t+1)*l,e*l,a[t+1][e]),r.set(t*l,(e+1)*l,a[t][e+1]))}getConvexTrianglePillar(t,e,n){let s=this.pillarConvex,o=this.pillarOffset;if(this.cacheEnabled){let d=this.getCachedConvexTrianglePillar(t,e,n);if(d){this.pillarConvex=d.convex,this.pillarOffset=d.offset;return}s=new nr,o=new b,this.pillarConvex=s,this.pillarOffset=o}let r=this.data,a=this.elementSize,l=s.faces;s.vertices.length=6;for(let d=0;d<6;d++)s.vertices[d]||(s.vertices[d]=new b);l.length=5;for(let d=0;d<5;d++)l[d]||(l[d]=[]);let c=s.vertices,h=(Math.min(r[t][e],r[t+1][e],r[t][e+1],r[t+1][e+1])-this.minValue)/2+this.minValue;n?(o.set((t+.75)*a,(e+.75)*a,h),c[0].set(.25*a,.25*a,r[t+1][e+1]-h),c[1].set(-.75*a,.25*a,r[t][e+1]-h),c[2].set(.25*a,-.75*a,r[t+1][e]-h),c[3].set(.25*a,.25*a,-Math.abs(h)-1),c[4].set(-.75*a,.25*a,-Math.abs(h)-1),c[5].set(.25*a,-.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=2,l[2][1]=5,l[2][2]=3,l[2][3]=0,l[3][0]=3,l[3][1]=4,l[3][2]=1,l[3][3]=0,l[4][0]=1,l[4][1]=4,l[4][2]=5,l[4][3]=2):(o.set((t+.25)*a,(e+.25)*a,h),c[0].set(-.25*a,-.25*a,r[t][e]-h),c[1].set(.75*a,-.25*a,r[t+1][e]-h),c[2].set(-.25*a,.75*a,r[t][e+1]-h),c[3].set(-.25*a,-.25*a,-Math.abs(h)-1),c[4].set(.75*a,-.25*a,-Math.abs(h)-1),c[5].set(-.25*a,.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=0,l[2][1]=2,l[2][2]=5,l[2][3]=3,l[3][0]=1,l[3][1]=0,l[3][2]=3,l[3][3]=4,l[4][0]=4,l[4][1]=5,l[4][2]=2,l[4][3]=1),s.computeNormals(),s.computeEdges(),s.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(t,e,n,s,o)}calculateLocalInertia(t,e){return e===void 0&&(e=new b),e.set(0,0,0),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,s){n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),s.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}updateBoundingSphereRadius(){let t=this.data,e=this.elementSize;this.boundingSphereRadius=new b(t.length*e,t[0].length*e,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).length()}setHeightsFromImage(t,e){let{x:n,z:s,y:o}=e,r=document.createElement("canvas");r.width=t.width,r.height=t.height;let a=r.getContext("2d");a.drawImage(t,0,0);let l=a.getImageData(0,0,t.width,t.height),c=this.data;c.length=0,this.elementSize=Math.abs(n)/l.width;for(let h=0;h<l.height;h++){let d=[];for(let u=0;u<l.width;u++){let f=l.data[(h*l.height+u)*4],m=l.data[(h*l.height+u)*4+1],x=l.data[(h*l.height+u)*4+2],g=(f+m+x)/4/255*s;n<0?d.push(g):d.unshift(g)}o<0?c.unshift(d):c.push(d)}this.updateMaxValue(),this.updateMinValue(),this.update()}},tm=[],em=new b,W1=new b,q1=new b,X1=new b,Y1=new b,Z1=new b,$1=new b,j1=new b,J1=new b;function K1(i,t,e,n,s,o,r,a,l){l.x=((o-a)*(i-r)+(r-s)*(t-a))/((o-a)*(e-r)+(r-s)*(n-a)),l.y=((a-n)*(i-r)+(e-r)*(t-a))/((o-a)*(e-r)+(r-s)*(n-a)),l.z=1-l.x-l.y}var AS=new b,RS=new Pn;var CS=new b,IS=new Pn,PS=new b,NS=new b,LS=new b,FS=new b,BS=new b,DS=new b,zS=new b,US=new Pn,OS=new b,kS=new ye,VS=new Pn,Xu=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},Yu=class extends Xu{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,s=this.iterations,o=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=e.bodies,c=l.length,h=t,d,u,f,m,x,g;if(a!==0)for(let w=0;w!==c;w++)l[w].updateSolveMassProperties();let p=tw,v=ew,M=Q1;p.length=a,v.length=a,M.length=a;for(let w=0;w!==a;w++){let I=r[w];M[w]=0,v[w]=I.computeB(h),p[w]=1/I.computeC()}if(a!==0){for(let T=0;T!==c;T++){let C=l[T],L=C.vlambda,S=C.wlambda;L.set(0,0,0),S.set(0,0,0)}for(n=0;n!==s;n++){m=0;for(let T=0;T!==a;T++){let C=r[T];d=v[T],u=p[T],g=M[T],x=C.computeGWlambda(),f=u*(d-x-C.eps*g),g+f<C.minForce?f=C.minForce-g:g+f>C.maxForce&&(f=C.maxForce-g),M[T]+=f,m+=f>0?f:-f,C.addToWlambda(f)}if(m*m<o)break}for(let T=0;T!==c;T++){let C=l[T],L=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),L.vadd(C.vlambda,L),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let w=r.length,I=1/h;for(;w--;)r[w].multiplier=M[w]*I}return n}},Q1=[],tw=[],ew=[];var HS=it.STATIC;var Zu=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},$u=class extends Zu{constructor(){super(...arguments),this.type=b}constructObject(){return new b}},Ie={sphereSphere:xt.types.SPHERE,spherePlane:xt.types.SPHERE|xt.types.PLANE,boxBox:xt.types.BOX|xt.types.BOX,sphereBox:xt.types.SPHERE|xt.types.BOX,planeBox:xt.types.PLANE|xt.types.BOX,convexConvex:xt.types.CONVEXPOLYHEDRON,sphereConvex:xt.types.SPHERE|xt.types.CONVEXPOLYHEDRON,planeConvex:xt.types.PLANE|xt.types.CONVEXPOLYHEDRON,boxConvex:xt.types.BOX|xt.types.CONVEXPOLYHEDRON,sphereHeightfield:xt.types.SPHERE|xt.types.HEIGHTFIELD,boxHeightfield:xt.types.BOX|xt.types.HEIGHTFIELD,convexHeightfield:xt.types.CONVEXPOLYHEDRON|xt.types.HEIGHTFIELD,sphereParticle:xt.types.PARTICLE|xt.types.SPHERE,planeParticle:xt.types.PLANE|xt.types.PARTICLE,boxParticle:xt.types.BOX|xt.types.PARTICLE,convexParticle:xt.types.PARTICLE|xt.types.CONVEXPOLYHEDRON,cylinderCylinder:xt.types.CYLINDER,sphereCylinder:xt.types.SPHERE|xt.types.CYLINDER,planeCylinder:xt.types.PLANE|xt.types.CYLINDER,boxCylinder:xt.types.BOX|xt.types.CYLINDER,convexCylinder:xt.types.CONVEXPOLYHEDRON|xt.types.CYLINDER,heightfieldCylinder:xt.types.HEIGHTFIELD|xt.types.CYLINDER,particleCylinder:xt.types.PARTICLE|xt.types.CYLINDER,sphereTrimesh:xt.types.SPHERE|xt.types.TRIMESH,planeTrimesh:xt.types.PLANE|xt.types.TRIMESH},ju=class{get[Ie.sphereSphere](){return this.sphereSphere}get[Ie.spherePlane](){return this.spherePlane}get[Ie.boxBox](){return this.boxBox}get[Ie.sphereBox](){return this.sphereBox}get[Ie.planeBox](){return this.planeBox}get[Ie.convexConvex](){return this.convexConvex}get[Ie.sphereConvex](){return this.sphereConvex}get[Ie.planeConvex](){return this.planeConvex}get[Ie.boxConvex](){return this.boxConvex}get[Ie.sphereHeightfield](){return this.sphereHeightfield}get[Ie.boxHeightfield](){return this.boxHeightfield}get[Ie.convexHeightfield](){return this.convexHeightfield}get[Ie.sphereParticle](){return this.sphereParticle}get[Ie.planeParticle](){return this.planeParticle}get[Ie.boxParticle](){return this.boxParticle}get[Ie.convexParticle](){return this.convexParticle}get[Ie.cylinderCylinder](){return this.convexConvex}get[Ie.sphereCylinder](){return this.sphereConvex}get[Ie.planeCylinder](){return this.planeConvex}get[Ie.boxCylinder](){return this.boxConvex}get[Ie.convexCylinder](){return this.convexConvex}get[Ie.heightfieldCylinder](){return this.heightfieldCylinder}get[Ie.particleCylinder](){return this.particleCylinder}get[Ie.sphereTrimesh](){return this.sphereTrimesh}get[Ie.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new $u,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,o,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new tr(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||t.material,h=s.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=o||n,a.sj=r||s,a}createFrictionEquationsFromContact(t,e){let n=t.bi,s=t.bj,o=t.si,r=t.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,h=o.material||n.material,d=r.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){let u=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let m=this.frictionEquationPool,x=m.length?m.pop():new Hl(n,s,u*f),g=m.length?m.pop():new Hl(n,s,u*f);return x.bi=g.bi=n,x.bj=g.bj=s,x.minForce=g.minForce=-u*f,x.maxForce=g.maxForce=u*f,x.ri.copy(t.ri),x.rj.copy(t.rj),g.ri.copy(t.ri),g.rj.copy(t.rj),t.ni.tangents(x.t,g.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),g.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=g.enabled=t.enabled,e.push(x,g),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];Ys.setZero(),Ko.setZero(),Qo.setZero();let o=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==o?(Ys.vadd(e.ni,Ys),Ko.vadd(e.ri,Ko),Qo.vadd(e.rj,Qo)):(Ys.vsub(e.ni,Ys),Ko.vadd(e.rj,Ko),Qo.vadd(e.ri,Qo));let r=1/t;Ko.scale(r,n.ri),Qo.scale(r,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),Ys.normalize(),Ys.tangents(n.t,s.t)}getContacts(t,e,n,s,o,r,a){this.contactPointPool=o,this.frictionEquationPool=a,this.result=s,this.frictionResult=r;let l=sw,c=ow,h=nw,d=iw;for(let u=0,f=t.length;u!==f;u++){let m=t[u],x=e[u],g=null;m.material&&x.material&&(g=n.getContactMaterial(m.material,x.material)||null);let p=m.type&it.KINEMATIC&&x.type&it.STATIC||m.type&it.STATIC&&x.type&it.KINEMATIC||m.type&it.KINEMATIC&&x.type&it.KINEMATIC;for(let v=0;v<m.shapes.length;v++){m.quaternion.mult(m.shapeOrientations[v],l),m.quaternion.vmult(m.shapeOffsets[v],h),h.vadd(m.position,h);let M=m.shapes[v];for(let w=0;w<x.shapes.length;w++){x.quaternion.mult(x.shapeOrientations[w],c),x.quaternion.vmult(x.shapeOffsets[w],d),d.vadd(x.position,d);let I=x.shapes[w];if(!(M.collisionFilterMask&I.collisionFilterGroup&&I.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(d)>M.boundingSphereRadius+I.boundingSphereRadius)continue;let T=null;M.material&&I.material&&(T=n.getContactMaterial(M.material,I.material)||null),this.currentContactMaterial=T||g||n.defaultContactMaterial;let C=M.type|I.type,L=this[C];if(L){let S=!1;M.type<I.type?S=L.call(this,M,I,h,d,l,c,m,x,M,I,p):S=L.call(this,I,M,d,h,c,l,x,m,M,I,p),S&&p&&(n.shapeOverlapKeeper.set(M.id,I.id),n.bodyOverlapKeeper.set(m.id,x.id))}}}}}sphereSphere(t,e,n,s,o,r,a,l,c,h,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,l,t,e,c,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,s,o,r,a,l,c,h,d){let u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(s,Ll),u.ni.scale(u.ni.dot(Ll),nm),Ll.vsub(nm,u.rj),-Ll.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,m=u.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(s,m),m.vsub(l.position,m),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,o,r,a,l,t,e,d)}sphereBox(t,e,n,s,o,r,a,l,c,h,d){let u=this.v3pool,f=Pw;n.vsub(s,Fl),e.getSideNormals(f,r);let m=t.radius,x=!1,g=Lw,p=Fw,v=Bw,M=null,w=0,I=0,T=0,C=null;for(let D=0,K=f.length;D!==K&&x===!1;D++){let W=Rw;W.copy(f[D]);let Q=W.length();W.normalize();let ct=Fl.dot(W);if(ct<Q+m&&ct>0){let pt=Cw,at=Iw;pt.copy(f[(D+1)%3]),at.copy(f[(D+2)%3]);let ne=pt.length(),$=at.length();pt.normalize(),at.normalize();let st=Fl.dot(pt),Mt=Fl.dot(at);if(st<ne&&st>-ne&&Mt<$&&Mt>-$){let ut=Math.abs(ct-Q-m);if((C===null||ut<C)&&(C=ut,I=st,T=Mt,M=Q,g.copy(W),p.copy(pt),v.copy(at),w++,d))return!0}}}if(w){x=!0;let D=this.createContactEquation(a,l,t,e,c,h);g.scale(-m,D.ri),D.ni.copy(g),D.ni.negate(D.ni),g.scale(M,g),p.scale(I,p),g.vadd(p,g),v.scale(T,v),g.vadd(v,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(s,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let L=u.get(),S=Nw;for(let D=0;D!==2&&!x;D++)for(let K=0;K!==2&&!x;K++)for(let W=0;W!==2&&!x;W++)if(L.set(0,0,0),D?L.vadd(f[0],L):L.vsub(f[0],L),K?L.vadd(f[1],L):L.vsub(f[1],L),W?L.vadd(f[2],L):L.vsub(f[2],L),s.vadd(L,S),S.vsub(n,S),S.lengthSquared()<m*m){if(d)return!0;x=!0;let Q=this.createContactEquation(a,l,t,e,c,h);Q.ri.copy(S),Q.ri.normalize(),Q.ni.copy(Q.ri),Q.ri.scale(m,Q.ri),Q.rj.copy(L),Q.ri.vadd(n,Q.ri),Q.ri.vsub(a.position,Q.ri),Q.rj.vadd(s,Q.rj),Q.rj.vsub(l.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult)}u.release(L),L=null;let E=u.get(),N=u.get(),G=u.get(),B=u.get(),z=u.get(),V=f.length;for(let D=0;D!==V&&!x;D++)for(let K=0;K!==V&&!x;K++)if(D%3!==K%3){f[K].cross(f[D],E),E.normalize(),f[D].vadd(f[K],N),G.copy(n),G.vsub(N,G),G.vsub(s,G);let W=G.dot(E);E.scale(W,B);let Q=0;for(;Q===D%3||Q===K%3;)Q++;z.copy(n),z.vsub(B,z),z.vsub(N,z),z.vsub(s,z);let ct=Math.abs(W),pt=z.length();if(ct<f[Q].length()&&pt<m){if(d)return!0;x=!0;let at=this.createContactEquation(a,l,t,e,c,h);N.vadd(B,at.rj),at.rj.copy(at.rj),z.negate(at.ni),at.ni.normalize(),at.ri.copy(at.rj),at.ri.vadd(s,at.ri),at.ri.vsub(n,at.ri),at.ri.normalize(),at.ri.scale(m,at.ri),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),at.rj.vadd(s,at.rj),at.rj.vsub(l.position,at.rj),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult)}}u.release(E,N,G,B,z)}planeBox(t,e,n,s,o,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,o,r,a,l,t,e,d)}convexConvex(t,e,n,s,o,r,a,l,c,h,d,u,f){let m=jw;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,o,s,r,m,u,f)){let x=[],g=Jw;t.clipAgainstHull(n,o,e,s,r,m,-100,100,x);let p=0;for(let v=0;v!==x.length;v++){if(d)return!0;let M=this.createContactEquation(a,l,t,e,c,h),w=M.ri,I=M.rj;m.negate(M.ni),x[v].normal.negate(g),g.scale(x[v].depth,g),x[v].point.vadd(g,w),I.copy(x[v].point),w.vsub(n,w),I.vsub(s,I),w.vadd(n,w),w.vsub(a.position,w),I.vadd(s,I),I.vsub(l.position,I),this.result.push(M),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,o,r,a,l,c,h,d){let u=this.v3pool;n.vsub(s,Dw);let f=e.faceNormals,m=e.faces,x=e.vertices,g=t.radius,p=!1;for(let v=0;v!==x.length;v++){let M=x[v],w=kw;r.vmult(M,w),s.vadd(w,w);let I=Ow;if(w.vsub(n,I),I.lengthSquared()<g*g){if(d)return!0;p=!0;let T=this.createContactEquation(a,l,t,e,c,h);T.ri.copy(I),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(g,T.ri),w.vsub(s,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(s,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let v=0,M=m.length;v!==M&&p===!1;v++){let w=f[v],I=m[v],T=Vw;r.vmult(w,T);let C=Hw;r.vmult(x[I[0]],C),C.vadd(s,C);let L=Gw;T.scale(-g,L),n.vadd(L,L);let S=Ww;L.vsub(C,S);let E=S.dot(T),N=qw;if(n.vsub(C,N),E<0&&N.dot(T)>0){let G=[];for(let B=0,z=I.length;B!==z;B++){let V=u.get();r.vmult(x[I[B]],V),s.vadd(V,V),G.push(V)}if(Aw(G,T,n)){if(d)return!0;p=!0;let B=this.createContactEquation(a,l,t,e,c,h);T.scale(-g,B.ri),T.negate(B.ni);let z=u.get();T.scale(-E,z);let V=u.get();T.scale(-g,V),n.vsub(s,B.rj),B.rj.vadd(V,B.rj),B.rj.vadd(z,B.rj),B.rj.vadd(s,B.rj),B.rj.vsub(l.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),u.release(z),u.release(V),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let D=0,K=G.length;D!==K;D++)u.release(G[D]);return}else for(let B=0;B!==I.length;B++){let z=u.get(),V=u.get();r.vmult(x[I[(B+1)%I.length]],z),r.vmult(x[I[(B+2)%I.length]],V),s.vadd(z,z),s.vadd(V,V);let D=zw;V.vsub(z,D);let K=Uw;D.unit(K);let W=u.get(),Q=u.get();n.vsub(z,Q);let ct=Q.dot(K);K.scale(ct,W),W.vadd(z,W);let pt=u.get();if(W.vsub(n,pt),ct>0&&ct*ct<D.lengthSquared()&&pt.lengthSquared()<g*g){if(d)return!0;let at=this.createContactEquation(a,l,t,e,c,h);W.vsub(s,at.rj),W.vsub(n,at.ni),at.ni.normalize(),at.ni.scale(g,at.ri),at.rj.vadd(s,at.rj),at.rj.vsub(l.position,at.rj),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult);for(let ne=0,$=G.length;ne!==$;ne++)u.release(G[ne]);u.release(z),u.release(V),u.release(W),u.release(pt),u.release(Q);return}u.release(z),u.release(V),u.release(W),u.release(pt),u.release(Q)}for(let B=0,z=G.length;B!==z;B++)u.release(G[B])}}}planeConvex(t,e,n,s,o,r,a,l,c,h,d){let u=Xw,f=Yw;f.set(0,0,1),o.vmult(f,f);let m=0,x=Zw;for(let g=0;g!==e.vertices.length;g++)if(u.copy(e.vertices[g]),r.vmult(u,u),s.vadd(u,u),u.vsub(n,x),f.dot(x)<=0){if(d)return!0;let v=this.createContactEquation(a,l,t,e,c,h),M=$w;f.scale(f.dot(x),M),u.vsub(M,M),M.vsub(n,v.ri),v.ni.copy(f),u.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,o,r,a,l,t,e,d)}sphereHeightfield(t,e,n,s,o,r,a,l,c,h,d){let u=e.data,f=t.radius,m=e.elementSize,x=cM,g=lM;ye.pointToLocalFrame(s,r,n,g);let p=Math.floor((g.x-f)/m)-1,v=Math.ceil((g.x+f)/m)+1,M=Math.floor((g.y-f)/m)-1,w=Math.ceil((g.y+f)/m)+1;if(v<0||w<0||p>u.length||M>u[0].length)return;p<0&&(p=0),v<0&&(v=0),M<0&&(M=0),w<0&&(w=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),w>=u[0].length&&(w=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);let I=[];e.getRectMinMax(p,M,v,w,I);let T=I[0],C=I[1];if(g.z-f>C||g.z+f<T)return;let L=this.result;for(let S=p;S<v;S++)for(let E=M;E<w;E++){let N=L.length,G=!1;if(e.getConvexTrianglePillar(S,E,!1),ye.pointToWorldFrame(s,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,x,o,r,a,l,t,e,d)),d&&G||(e.getConvexTrianglePillar(S,E,!0),ye.pointToWorldFrame(s,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,x,o,r,a,l,t,e,d)),d&&G))return!0;if(L.length-N>2)return}}boxHeightfield(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,o,r,a,l,t,e,d)}convexHeightfield(t,e,n,s,o,r,a,l,c,h,d){let u=e.data,f=e.elementSize,m=t.boundingSphereRadius,x=rM,g=aM,p=oM;ye.pointToLocalFrame(s,r,n,p);let v=Math.floor((p.x-m)/f)-1,M=Math.ceil((p.x+m)/f)+1,w=Math.floor((p.y-m)/f)-1,I=Math.ceil((p.y+m)/f)+1;if(M<0||I<0||v>u.length||w>u[0].length)return;v<0&&(v=0),M<0&&(M=0),w<0&&(w=0),I<0&&(I=0),v>=u.length&&(v=u.length-1),M>=u.length&&(M=u.length-1),I>=u[0].length&&(I=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);let T=[];e.getRectMinMax(v,w,M,I,T);let C=T[0],L=T[1];if(!(p.z-m>L||p.z+m<C))for(let S=v;S<M;S++)for(let E=w;E<I;E++){let N=!1;if(e.getConvexTrianglePillar(S,E,!1),ye.pointToWorldFrame(s,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,x,o,r,a,l,null,null,d,g,null)),d&&N||(e.getConvexTrianglePillar(S,E,!0),ye.pointToWorldFrame(s,r,e.pillarOffset,x),n.distanceTo(x)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,x,o,r,a,l,null,null,d,g,null)),d&&N))return!0}}sphereParticle(t,e,n,s,o,r,a,l,c,h,d){let u=eM;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let m=this.createContactEquation(l,a,e,t,c,h);u.normalize(),m.rj.copy(u),m.rj.scale(t.radius,m.rj),m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,s,o,r,a,l,c,h,d){let u=Kw;u.set(0,0,1),a.quaternion.vmult(u,u);let f=Qw;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let x=this.createContactEquation(l,a,e,t,c,h);x.ni.copy(u),x.ni.negate(x.ni),x.ri.set(0,0,0);let g=tM;u.scale(u.dot(s),g),s.vsub(g,g),x.rj.copy(g),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,o,r,a,l,t,e,d)}convexParticle(t,e,n,s,o,r,a,l,c,h,d){let u=-1,f=iM,m=sM,x=null,g=nM;if(g.copy(s),g.vsub(n,g),o.conjugate(im),im.vmult(g,g),t.pointIsInside(g)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let p=0,v=t.faces.length;p!==v;p++){let M=[t.worldVertices[t.faces[p][0]]],w=t.worldFaceNormals[p];s.vsub(M[0],sm);let I=-w.dot(sm);if(x===null||Math.abs(I)<Math.abs(x)){if(d)return!0;x=I,u=p,f.copy(w)}}if(u!==-1){let p=this.createContactEquation(l,a,e,t,c,h);f.scale(x,m),m.vadd(s,m),m.vsub(n,m),p.rj.copy(m),f.negate(p.ni),p.ri.set(0,0,0);let v=p.ri,M=p.rj;v.vadd(s,v),v.vsub(l.position,v),M.vadd(n,M),M.vsub(a.position,M),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,o,r,a,l,c,h,d){return this.convexHeightfield(e,t,s,n,r,o,l,a,c,h,d)}particleCylinder(t,e,n,s,o,r,a,l,c,h,d){return this.convexParticle(e,t,s,n,r,o,l,a,c,h,d)}sphereTrimesh(t,e,n,s,o,r,a,l,c,h,d){let u=fw,f=pw,m=mw,x=gw,g=yw,p=xw,v=ww,M=dw,w=hw,I=Mw;ye.pointToLocalFrame(s,r,n,g);let T=t.radius;v.lowerBound.set(g.x-T,g.y-T,g.z-T),v.upperBound.set(g.x+T,g.y+T,g.z+T),e.getTrianglesInAABB(v,I);let C=uw,L=t.radius*t.radius;for(let B=0;B<I.length;B++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[I[B]*3+z],C),C.vsub(g,w),w.lengthSquared()<=L){if(M.copy(C),ye.pointToWorldFrame(s,r,M,C),C.vsub(n,w),d)return!0;let V=this.createContactEquation(a,l,t,e,c,h);V.ni.copy(w),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),V.rj.copy(C),V.rj.vsub(l.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(let B=0;B<I.length;B++)for(let z=0;z<3;z++){e.getVertex(e.indices[I[B]*3+z],u),e.getVertex(e.indices[I[B]*3+(z+1)%3],f),f.vsub(u,m),g.vsub(f,p);let V=p.dot(m);g.vsub(u,p);let D=p.dot(m);if(D>0&&V<0&&(g.vsub(u,p),x.copy(m),x.normalize(),D=p.dot(x),x.scale(D,p),p.vadd(u,p),p.distanceTo(g)<t.radius)){if(d)return!0;let W=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,W.ni),W.ni.normalize(),W.ni.scale(t.radius,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),ye.pointToWorldFrame(s,r,p,p),p.vsub(l.position,W.rj),ye.vectorToWorldFrame(r,W.ni,W.ni),ye.vectorToWorldFrame(r,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}let S=vw,E=_w,N=bw,G=cw;for(let B=0,z=I.length;B!==z;B++){e.getTriangleVertices(I[B],S,E,N),e.getNormal(I[B],G),g.vsub(S,p);let V=p.dot(G);if(G.scale(V,p),g.vsub(p,p),V=p.distanceTo(g),Hn.pointInTriangle(p,S,E,N)&&V<t.radius){if(d)return!0;let D=this.createContactEquation(a,l,t,e,c,h);p.vsub(g,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),ye.pointToWorldFrame(s,r,p,p),p.vsub(l.position,D.rj),ye.vectorToWorldFrame(r,D.ni,D.ni),ye.vectorToWorldFrame(r,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}I.length=0}planeTrimesh(t,e,n,s,o,r,a,l,c,h,d){let u=new b,f=rw;f.set(0,0,1),o.vmult(f,f);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,u);let x=new b;x.copy(u),ye.pointToWorldFrame(s,r,x,u);let g=aw;if(u.vsub(n,g),f.dot(g)<=0){if(d)return!0;let v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(f);let M=lw;f.scale(g.dot(f),M),u.vsub(M,M),v.ri.copy(M),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},Ys=new b,Ko=new b,Qo=new b,nw=new b,iw=new b,sw=new en,ow=new en,rw=new b,aw=new b,lw=new b,cw=new b,hw=new b;new b;var uw=new b,dw=new b,fw=new b,pw=new b,mw=new b,gw=new b,yw=new b,xw=new b,vw=new b,_w=new b,bw=new b,ww=new Pn,Mw=[],Ll=new b,nm=new b,Ew=new b,Sw=new b,Tw=new b;function Aw(i,t,e){let n=null,s=i.length;for(let o=0;o!==s;o++){let r=i[o],a=Ew;i[(o+1)%s].vsub(r,a);let l=Sw;a.cross(t,l);let c=Tw;e.vsub(r,c);let h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var Fl=new b,Rw=new b,Cw=new b,Iw=new b,Pw=[new b,new b,new b,new b,new b,new b],Nw=new b,Lw=new b,Fw=new b,Bw=new b,Dw=new b,zw=new b,Uw=new b,Ow=new b,kw=new b,Vw=new b,Hw=new b,Gw=new b,Ww=new b,qw=new b;new b;new b;var Xw=new b,Yw=new b,Zw=new b,$w=new b,jw=new b,Jw=new b,Kw=new b,Qw=new b,tM=new b,eM=new b,im=new en,nM=new b;new b;var iM=new b,sm=new b,sM=new b,oM=new b,rM=new b,aM=[0],lM=new b,cM=new b,ql=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),s=this.current,o=0;for(;n>s[o];)o++;if(n!==s[o]){for(let r=s.length-1;r>=o;r--)s[r+1]=s[r];s[o]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,s=this.previous,o=n.length,r=s.length,a=0;for(let l=0;l<o;l++){let c=!1,h=n[l];for(;h>s[a];)a++;c=h===s[a],c||om(t,h)}a=0;for(let l=0;l<r;l++){let c=!1,h=s[l];for(;h>n[a];)a++;c=n[a]===h,c||om(e,h)}}};function om(i,t){i.push((t&4294901760)>>16,t&65535)}var Hu=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`,Ju=class{constructor(){this.data={keys:[]}}get(t,e){let n=Hu(t,e);return this.data[n]}set(t,e,n){let s=Hu(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){let n=Hu(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},Xl=class extends Dl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Wu,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Yu,this.constraints=[],this.narrowphase=new ju(this),this.collisionMatrix=new Bl,this.collisionMatrixPrevious=new Bl,this.bodyOverlapKeeper=new ql,this.shapeOverlapKeeper=new ql,this.contactmaterials=[],this.contactMaterialTable=new Ju,this.defaultMaterial=new vs("default"),this.defaultContactMaterial=new Gl(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof xs?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Hn.ALL,n.from=t,n.to=e,n.callback=s,Gu.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Hn.ANY,n.from=t,n.to=e,n.result=s,Gu.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Hn.CLOSEST,n.from=t,n.to=e,n.result=s,Gu.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof it&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let o=0;o!==n.length;o++)n[o].index=o;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let s=e[n].shapes;for(let o=0;o<s.length;o++){let r=s[o];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Ze.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let s=Ze.now(),o=0;for(;this.accumulator>=t&&o<n&&(this.internalStep(t),this.accumulator-=t,o++,!(Ze.now()-s>t*1e3)););this.accumulator=this.accumulator%t;let r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=pM,s=mM,o=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=it.DYNAMIC,u=-1/0,f=this.constraints,m=fM;l.length();let x=l.x,g=l.y,p=l.z,v=0;for(c&&(u=Ze.now()),v=0;v!==o;v++){let B=r[v];if(B.type===d){let z=B.force,V=B.mass;z.x+=V*x,z.y+=V*g,z.z+=V*p}}for(let B=0,z=this.subsystems.length;B!==z;B++)this.subsystems[B].update();c&&(u=Ze.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(h.broadphase=Ze.now()-u);let M=f.length;for(v=0;v!==M;v++){let B=f[v];if(!B.collideConnected)for(let z=n.length-1;z>=0;z-=1)(B.bodyA===n[z]&&B.bodyB===s[z]||B.bodyB===n[z]&&B.bodyA===s[z])&&(n.splice(z,1),s.splice(z,1))}this.collisionMatrixTick(),c&&(u=Ze.now());let w=dM,I=e.length;for(v=0;v!==I;v++)w.push(e[v]);e.length=0;let T=this.frictionEquations.length;for(v=0;v!==T;v++)m.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,w,this.frictionEquations,m),c&&(h.narrowphase=Ze.now()-u),c&&(u=Ze.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let C=e.length;for(let B=0;B!==C;B++){let z=e[B],V=z.bi,D=z.bj,K=z.si,W=z.sj,Q;if(V.material&&D.material?Q=this.getContactMaterial(V.material,D.material)||this.defaultContactMaterial:Q=this.defaultContactMaterial,Q.friction,V.material&&D.material&&(V.material.friction>=0&&D.material.friction>=0&&V.material.friction*D.material.friction,V.material.restitution>=0&&D.material.restitution>=0&&(z.restitution=V.material.restitution*D.material.restitution)),a.addEquation(z),V.allowSleep&&V.type===it.DYNAMIC&&V.sleepState===it.SLEEPING&&D.sleepState===it.AWAKE&&D.type!==it.STATIC){let ct=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),pt=D.sleepSpeedLimit**2;ct>=pt*2&&(V.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===it.DYNAMIC&&D.sleepState===it.SLEEPING&&V.sleepState===it.AWAKE&&V.type!==it.STATIC){let ct=V.velocity.lengthSquared()+V.angularVelocity.lengthSquared(),pt=V.sleepSpeedLimit**2;ct>=pt*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(V,D,!0),this.collisionMatrixPrevious.get(V,D)||(qr.body=D,qr.contact=z,V.dispatchEvent(qr),qr.body=V,D.dispatchEvent(qr)),this.bodyOverlapKeeper.set(V.id,D.id),this.shapeOverlapKeeper.set(K.id,W.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Ze.now()-u,u=Ze.now()),v=0;v!==o;v++){let B=r[v];B.wakeUpAfterNarrowphase&&(B.wakeUp(),B.wakeUpAfterNarrowphase=!1)}for(M=f.length,v=0;v!==M;v++){let B=f[v];B.update();for(let z=0,V=B.equations.length;z!==V;z++){let D=B.equations[z];a.addEquation(D)}}a.solve(t,this),c&&(h.solve=Ze.now()-u),a.removeAllEquations();let L=Math.pow;for(v=0;v!==o;v++){let B=r[v];if(B.type&d){let z=L(1-B.linearDamping,t),V=B.velocity;V.scale(z,V);let D=B.angularVelocity;if(D){let K=L(1-B.angularDamping,t);D.scale(K,D)}}}this.dispatchEvent(uM),c&&(u=Ze.now());let E=this.stepnumber%(this.quatNormalizeSkip+1)===0,N=this.quatNormalizeFast;for(v=0;v!==o;v++)r[v].integrate(t,E,N);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Ze.now()-u),this.stepnumber+=1,this.dispatchEvent(hM);let G=!0;if(this.allowSleep)for(G=!1,v=0;v!==o;v++){let B=r[v];B.sleepTick(this.time),B.sleepState!==it.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Wi,qi),t){for(let o=0,r=Wi.length;o<r;o+=2)Xr.bodyA=this.getBodyById(Wi[o]),Xr.bodyB=this.getBodyById(Wi[o+1]),this.dispatchEvent(Xr);Xr.bodyA=Xr.bodyB=null}if(e){for(let o=0,r=qi.length;o<r;o+=2)Yr.bodyA=this.getBodyById(qi[o]),Yr.bodyB=this.getBodyById(qi[o+1]),this.dispatchEvent(Yr);Yr.bodyA=Yr.bodyB=null}Wi.length=qi.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Wi,qi),n){for(let o=0,r=Wi.length;o<r;o+=2){let a=this.getShapeById(Wi[o]),l=this.getShapeById(Wi[o+1]);Xi.shapeA=a,Xi.shapeB=l,a&&(Xi.bodyA=a.body),l&&(Xi.bodyB=l.body),this.dispatchEvent(Xi)}Xi.bodyA=Xi.bodyB=Xi.shapeA=Xi.shapeB=null}if(s){for(let o=0,r=qi.length;o<r;o+=2){let a=this.getShapeById(qi[o]),l=this.getShapeById(qi[o+1]);Yi.shapeA=a,Yi.shapeB=l,a&&(Yi.bodyA=a.body),l&&(Yi.bodyB=l.body),this.dispatchEvent(Yi)}Yi.bodyA=Yi.bodyB=Yi.shapeA=Yi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new Pn;var Gu=new Hn,Ze=globalThis.performance||{};if(!Ze.now){let i=Date.now();Ze.timing&&Ze.timing.navigationStart&&(i=Ze.timing.navigationStart),Ze.now=()=>Date.now()-i}new b;var hM={type:"postStep"},uM={type:"preStep"},qr={type:it.COLLIDE_EVENT_NAME,body:null,contact:null},dM=[],fM=[],pM=[],mM=[],Wi=[],qi=[],Xr={type:"beginContact",bodyA:null,bodyB:null},Yr={type:"endContact",bodyA:null,bodyB:null},Xi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Yi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var Be={DYN:1,PLAYER:2,STATIC:4};var y={scene:null,camera:null,renderer:null,world:null,ents:new Set,dummies:new Set,queue:[],timers:[],time:0,shake:0,player:null,aim:{origin:new _,dir:new _(0,0,-1),hand:new _},stats:{destroyed:0,booms:0,flings:0,best:0},lastBoom:{pos:new _,time:-99},sun:null,quality:1,mats:{},ropes:[],welds:[],projectiles:[],extraForces:[],blackholes:[],grab:null,timeScale:1,spawnId:"crate",waterY:-1,killY:-30,pads:[],spawn:null,mapId:"island"};try{y.stats.best=parseFloat(localStorage.getItem("fling_best")||"0")||0}catch{}function mm(){try{localStorage.setItem("fling_best",String(y.stats.best))}catch{}}function sr(i,t){y.timers.push({t:y.time+i,fn:t})}function Wn(i){y.queue.push(i)}var Pt=i=>new _(i.x,i.y,i.z),F=(i,t)=>i+Math.random()*(t-i),re=(i,t,e)=>Math.max(t,Math.min(e,i)),js=new xs,fm=new b,pm=new b;function un(i,t,e=Be.DYN|Be.STATIC){return js.reset(),fm.set(i.x,i.y,i.z),pm.set(t.x,t.y,t.z),y.world.raycastClosest(fm,pm,{collisionFilterMask:e,skipBackfaces:!0},js),js.hasHit?{body:js.body,point:Pt(js.hitPointWorld),normal:Pt(js.hitNormalWorld),dist:js.distance}:null}function ed(i,t){let e=t*t;for(let n of y.world.bodies){if(n.type!==it.DYNAMIC)continue;let s=n.position.x-i.x,o=n.position.y-i.y,r=n.position.z-i.z;s*s+o*o+r*r<e&&n.wakeUp()}}var Zl=[];function En(i,t,e="#fff",n=22){let s=document.createElement("div");s.className="popup",s.textContent=i,s.style.color=e,s.style.fontSize=n+"px",document.getElementById("popups").appendChild(s),Zl.push({el:s,pos:t.clone(),t:0})}var Yl=new _;function gm(i){for(let t=Zl.length-1;t>=0;t--){let e=Zl[t];e.t+=i,e.pos.y+=i*1.5,Yl.copy(e.pos).project(y.camera);let n=Yl.z<1,s=(Yl.x*.5+.5)*window.innerWidth,o=(-Yl.y*.5+.5)*window.innerHeight;e.el.style.transform=`translate(-50%,-50%) translate(${s}px,${o}px) scale(${1+Math.max(0,.3-e.t)})`,e.el.style.opacity=n?String(Math.max(0,1-Math.max(0,e.t-1)/.6)):"0",e.t>1.6&&(e.el.remove(),Zl.splice(t,1))}}var $l=0;function pe(i,t=1.6){let e=document.getElementById("toast");e.textContent=i,e.style.opacity="1",$l=t}function ym(i){$l>0&&($l-=i,$l<=0&&(document.getElementById("toast").style.opacity="0"))}var de=null,gi=null,jr=null,Kr=null,Js=!1,jl=.8,sd=null,nd=0,gM=26,qn={x:0,y:0,z:0,rx:1,ry:0,rz:0};function od(){if(de){de.state==="suspended"&&de.resume();return}try{de=new(window.AudioContext||window.webkitAudioContext),jr=de.createDynamicsCompressor(),jr.threshold.value=-18,jr.ratio.value=6,gi=de.createGain(),gi.gain.value=Js?0:.7*jl,gi.connect(jr),jr.connect(de.destination),sd=de.createBuffer(1,de.sampleRate*2,de.sampleRate);let i=sd.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;Kr=de.createConvolver();let t=de.sampleRate*1.2,e=de.createBuffer(2,t,de.sampleRate);for(let s=0;s<2;s++){let o=e.getChannelData(s);for(let r=0;r<t;r++)o[r]=(Math.random()*2-1)*Math.pow(1-r/t,3)}Kr.buffer=e;let n=de.createGain();n.gain.value=.18,Kr.connect(n),n.connect(gi)}catch{de=null}}function vm(){return Js=!Js,gi&&(gi.gain.value=Js?0:.7*jl),Js}function _m(i){jl=i,gi&&(gi.gain.value=Js?0:.7*jl)}function bm(i,t){qn.x=i.x,qn.y=i.y,qn.z=i.z,qn.rx=t.x,qn.ry=t.y,qn.rz=t.z}var id={};function He(i,t){let e=performance.now();return id[i]&&e-id[i]<t?!0:(id[i]=e,!1)}function Vt(i,t,e,n=!1){if(!de||Js||nd>=gM&&!n)return null;let s=1,o=0,r=2e4;if(i){let h=i.x-qn.x,d=i.y-qn.y,u=i.z-qn.z,f=Math.hypot(h,d,u);if(f>t)return null;let m=1-f/t;if(s=m*m,s<.01)return null;o=f>.5?Math.max(-.85,Math.min(.85,(h*qn.rx+d*qn.ry+u*qn.rz)/f)):0,r=1200+18e3*m*m}if(!Number.isFinite(s)||!Number.isFinite(o)||!Number.isFinite(r))return null;let a=de.createGain();a.gain.value=s;let l=de.createBiquadFilter();l.type="lowpass",l.frequency.value=r;let c=de.createStereoPanner?de.createStereoPanner():null;return a.connect(l),c?(c.pan.value=o,l.connect(c),c.connect(gi),c.connect(Kr)):(l.connect(gi),l.connect(Kr)),nd++,setTimeout(()=>{nd--;try{a.disconnect()}catch{}},(e+.2)*1e3),a}function rd(i,t,e,n,s){i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(e,t+n),i.gain.exponentialRampToValueAtTime(1e-4,t+s)}function $t(i,t,e,n,s,o="lowpass",r=0,a=.003){let l=de.currentTime+r,c=de.createBufferSource();c.buffer=sd;let h=de.createBiquadFilter();h.type=o,h.frequency.value=e,h.Q.value=n;let d=de.createGain();rd(d,l,s,a,t),c.connect(h),h.connect(d),d.connect(i),c.start(l,Math.random()*1.5),c.stop(l+t+.05)}function te(i,t,e,n,s,o,r=0,a=.004){let l=de.currentTime+r,c=de.createOscillator();c.type=t,c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(Math.max(1,n),l+s);let h=de.createGain();rd(h,l,o,a,s),c.connect(h),h.connect(i),c.start(l),c.stop(l+s+.05)}function Jr(i,t,e,n,s,o=0){e.forEach((r,a)=>te(i,"sine",t*r,t*r*.995,n/(1+a*.5),s/(1+a*.7),o))}function xm(i,t,e,n,s,o=[700,1150]){let r=de.currentTime,a=de.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(t,r),a.frequency.linearRampToValueAtTime(e,r+n);let l=de.createGain();rd(l,r,s,.02,n);for(let c of o){let h=de.createBiquadFilter();h.type="bandpass",h.frequency.value=c,h.Q.value=6,a.connect(h),h.connect(l)}l.connect(i),a.start(r),a.stop(r+n+.05)}var ze=(i,t)=>i+Math.random()*(t-i),lt={explosion(i=1,t=null){if(He("boom",50))return;let e=Vt(t,260,3,!0);if(!e)return;let n=Math.min(1.6,i);te(e,"sine",95,28,1.1*n,1),$t(e,1.8*n,520,.6,.9,"lowpass"),$t(e,.25,2500,.5,.5,"highpass");for(let s=0;s<6;s++)$t(e,ze(.05,.15),ze(1500,4e3),2,.25,"bandpass",ze(.08,.8))},impact(i,t,e=null){if(He("imp_"+i,35))return;let n=Math.min(.5,t*.035),s=Vt(e,45,1);s&&(i==="metal"||i==="gold"||i==="heavy"||i==="appliance"||i==="car"?Jr(s,ze(260,520),[1,2.76,5.4,8.93],.7,n*.6):i==="glass"||i==="crystal"||i==="ice"?Jr(s,ze(1600,2600),[1,2.3,3.9],.35,n*.4):i==="rubber"||i==="beach"||i==="jelly"?te(s,"sine",ze(110,160),ze(260,340),.18,n*.8):i==="stone"||i==="brick"||i==="rock"||i==="concrete"?($t(s,.22,260,1,n*1.1),te(s,"sine",85,50,.15,n*.6)):i==="plastic"||i==="tnt"?($t(s,.07,2200,3,n*.7,"bandpass"),te(s,"triangle",420,380,.06,n*.3)):i==="flesh"||i==="bouncyflesh"||i==="fruit"||i==="foam"||i==="snow"||i==="hay"||i==="cactus"?$t(s,.12,220,1,n*.9):($t(s,.12,ze(650,950),3,n,"bandpass"),te(s,"triangle",ze(150,210),120,.1,n*.5)))},crack(i=null){if(He("crack",40))return;let t=Vt(i,60,.6);if(t){for(let e=0;e<4;e++)$t(t,ze(.04,.1),ze(700,1600),4,.35,"bandpass",e*ze(.02,.05));$t(t,.3,300,1,.3)}},crumble(i=null){if(He("crumble",40))return;let t=Vt(i,60,.9);if(t){$t(t,.6,400,.7,.5);for(let e=0;e<5;e++)$t(t,.06,ze(300,900),3,.25,"bandpass",ze(0,.4))}},shatter(i=null){if(He("glass",50))return;let t=Vt(i,60,1);if(t){$t(t,.35,5e3,1,.3,"highpass");for(let e=0;e<7;e++)Jr(t,ze(2500,5e3),[1,2.4],ze(.1,.3),.07,ze(0,.35))}},splat(i=null){if(He("splat",60))return;let t=Vt(i,40,.5);t&&($t(t,.25,600,.8,.5),$t(t,.15,1800,2,.15,"bandpass",.05))},shoot(){if(He("shoot",30))return;let i=Vt(null,0,.3);i&&($t(i,.09,3500,.7,.35,"highpass"),te(i,"square",180,60,.08,.15))},minigun(){if(He("mini",40))return;let i=Vt(null,0,.2);i&&($t(i,.05,2500,.8,.25,"highpass"),te(i,"square",120,70,.04,.08))},shotgun(){let i=Vt(null,0,.6,!0);i&&($t(i,.35,1400,.7,.7),te(i,"sine",110,40,.25,.6),$t(i,.05,4e3,1,.3,"highpass"))},rail(){let i=Vt(null,0,.6);i&&(te(i,"sawtooth",2200,90,.45,.12),te(i,"sine",600,40,.4,.3),$t(i,.25,6e3,1,.2,"highpass"))},zap(i=null){let t=Vt(i,80,.5);if(t){for(let e=0;e<4;e++)te(t,"square",ze(800,2400),ze(60,200),.12,.06,e*.03);$t(t,.3,3e3,2,.25,"bandpass")}},rocket(){let i=Vt(null,0,.6);i&&($t(i,.5,900,.8,.4),te(i,"sawtooth",160,60,.4,.08))},flame(){if(He("flame",80))return;let i=Vt(null,0,.3);i&&$t(i,.2,700,.5,.22)},push(){let i=Vt(null,0,.5);i&&($t(i,.4,500,.7,.5),te(i,"sine",140,50,.3,.4))},whack(i=null){let t=Vt(i,50,.4);t&&($t(t,.1,1200,1.5,.6,"bandpass"),te(t,"triangle",240,90,.12,.4))},swoosh(){let i=Vt(null,0,.3);i&&$t(i,.22,1800,1.5,.18,"bandpass",0,.06)},ray(){if(He("ray",60))return;let i=Vt(null,0,.3);i&&(te(i,"sine",900,1500,.15,.1),te(i,"triangle",1800,2600,.12,.04))},freeze(i=null){let t=Vt(i,40,.4);t&&(Jr(t,3e3,[1,1.5,2.2],.3,.08),$t(t,.25,7e3,1,.1,"highpass"))},grow(){let i=Vt(null,0,.4);i&&te(i,"sine",180,620,.3,.18)},shrink(){let i=Vt(null,0,.4);i&&te(i,"sine",720,180,.3,.18)},teleport(){let i=Vt(null,0,.4);i&&(te(i,"sine",300,1800,.25,.14),te(i,"triangle",1800,300,.25,.05,.1))},weld(i=null){let t=Vt(i,30,.4);t&&$t(t,.3,4500,3,.25,"bandpass")},whir(i){if(He("whir",90))return;let t=Vt(null,0,.2);t&&te(t,"sawtooth",60+i*200,80+i*260,.1,.04)},hum(){if(He("hum",110))return;let i=Vt(null,0,.2);i&&te(i,"sine",110,118,.12,.07)},grab(){let i=Vt(null,0,.2);i&&(te(i,"sine",380,700,.09,.14),$t(i,.05,3e3,2,.08,"bandpass"))},drop(){let i=Vt(null,0,.2);i&&te(i,"sine",600,300,.1,.1)},fling(){let i=Vt(null,0,.4);i&&($t(i,.3,1400,1.2,.3,"bandpass",0,.02),te(i,"sine",250,900,.18,.12))},jump(){let i=Vt(null,0,.2);i&&$t(i,.08,500,1,.12)},land(i){if(He("land",150))return;let t=Vt(null,0,.3);t&&$t(t,.15,250,1,Math.min(.5,i*.03))},oof(i=null,t=160){if(He("oof",90))return;let e=Vt(i,35,.5);if(!e)return;let n=[[700,1150],[500,900],[400,1900],[600,1e3]];xm(e,t*ze(.95,1.1),t*ze(.6,.75),ze(.18,.3),.5,n[Math.random()*n.length|0])},groan(i=null){if(He("groan",1200))return;let t=Vt(i,30,1);t&&xm(t,85,70,.8,.4,[450,800])},boing(i=null){if(He("boing",80))return;let t=Vt(i,50,.4);t&&(te(t,"sine",150,650,.3,.3),te(t,"triangle",300,1300,.2,.06))},pop(i=null){let t=Vt(i,40,.2);t&&(te(t,"sine",700,250,.08,.2),$t(t,.04,3e3,1,.15,"highpass"))},squeak(i=null){if(He("squeak",150))return;let t=Vt(i,30,.3);t&&te(t,"square",1500,950,.14,.05)},piano(i,t=null){if(He("piano",120))return;let e=Vt(t,50,1.2);if(!e)return;let n=[261.6,311.1,349.2,392,466.2,523.3];for(let s=0;s<3;s++)Jr(e,n[Math.random()*n.length|0]*(s?.5:1),[1,2,3.01],1,Math.min(.15,i*.012))},splash(i=null){if(He("splash",90))return;let t=Vt(i,50,.6);t&&($t(t,.45,1300,.6,.35),$t(t,.2,400,1,.2))},sizzle(i=null){let t=Vt(i,30,.7);t&&$t(t,.6,6500,.6,.15,"highpass")},fuse(i=null){if(He("fuse",220))return;let t=Vt(i,20,.3);t&&$t(t,.25,6e3,1,.08,"highpass")},hiss(i=null){let t=Vt(i,40,2);t&&$t(t,1.8,4e3,.5,.15,"highpass")},whistle(i=1.2,t=null){let e=Vt(t,200,i);e&&te(e,"sine",1800,500,i,.06)},beep(i=null){let t=Vt(i,25,.1);t&&te(t,"square",1500,1500,.07,.06)},blackhole(i=null){let t=Vt(i,120,4,!0);t&&(te(t,"sine",60,20,3.5,.45),te(t,"sawtooth",200,40,3.5,.05))},plane(){let i=Vt(null,0,2.2);i&&($t(i,2,300,.6,.2,"lowpass",0,.5),te(i,"sawtooth",110,90,2,.04,0,.5))},fire(i=null){if(He("fire",140))return;let t=Vt(i,25,.3);t&&$t(t,.12,ze(900,2500),3,.08,"bandpass")},thunk(i,t=null){this.impact("wood",i,t)}};var or={sens:2.2,volume:.8,fov:72,quality:"high",invertY:!1,time:"day",theme:"dark"},nn={...or};try{let i=JSON.parse(localStorage.getItem("fling_settings")||"null");if(i&&typeof i=="object")for(let e in or)e in i&&typeof i[e]==typeof or[e]&&(nn[e]=i[e]);let t=parseFloat(localStorage.getItem("fling_sens"));!i&&t&&(nn.sens=t*1e3)}catch{}y.settings=nn;function yM(){try{localStorage.setItem("fling_settings",JSON.stringify(nn))}catch{}}var Qr={};function ta(i,t){Qr[i]=t}function Ks(i,t){nn[i]=t,yM(),Qr[i]&&Qr[i](t)}function wm(){for(let i in Qr)Qr[i](nn[i])}var Pd={};F0(Pd,{CATALOG:()=>bs,ITEMS:()=>Kt,MAT:()=>vi,Strand:()=>_s,addFirePatch:()=>Cd,addRope:()=>si,addWeld:()=>bi,breakEnt:()=>ia,buildPrefab:()=>jt,createEnt:()=>Gt,damage:()=>ws,detonate:()=>ji,dummyFromBody:()=>Um,explode:()=>Fn,freeze:()=>Ad,halfHeight:()=>oa,ignite:()=>Ki,initMaterials:()=>wd,launchFireworks:()=>rc,makeGhost:()=>Md,paint:()=>Rd,physicsForces:()=>Sd,popBalloon:()=>sa,removeEnt:()=>We,removeRope:()=>so,scaleEnt:()=>ac,spawnItem:()=>Bn,syncEnt:()=>Ed,unfreeze:()=>Ji,updateEnts:()=>Td,updateFirePatches:()=>Id,visMat:()=>bd});var ad={};function ee(i,t,e){if(ad[i])return ad[i];let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d");e(s,t);let o=new fl(n);return o.colorSpace=bn,o.magFilter=Rn,o.anisotropy=4,ad[i]=o,o}function Qs(i,t,e,n,s=1,o=3){for(let r=0;r<e;r++){i.fillStyle=n[Math.random()*n.length|0];let a=s+Math.random()*(o-s);i.fillRect(Math.random()*t,Math.random()*t,a,a)}}var Jl={crate:()=>ee("crate",64,(i,t)=>{i.fillStyle="#b07a3e",i.fillRect(0,0,t,t);for(let e=0;e<4;e++)i.fillStyle=e%2?"#a26f36":"#b8834a",i.fillRect(0,e*16,t,16);i.fillStyle="#7a4f22",i.fillRect(0,0,t,7),i.fillRect(0,t-7,t,7),i.fillRect(0,0,7,t),i.fillRect(t-7,0,7,t),i.save(),i.translate(t/2,t/2),i.rotate(Math.PI/4),i.fillRect(-5,-44,10,88),i.restore(),Qs(i,t,60,["#6d4520","#c99359"])}),plank:()=>ee("plank",64,(i,t)=>{i.fillStyle="#c08a4f",i.fillRect(0,0,t,t),i.strokeStyle="#9c6a35",i.lineWidth=2;for(let e=0;e<7;e++)i.beginPath(),i.moveTo(0,5+e*9),i.bezierCurveTo(20,e*9+Math.random()*6,40,8+e*9,t,4+e*9),i.stroke()}),log:()=>ee("log",64,(i,t)=>{i.fillStyle="#6b4526",i.fillRect(0,0,t,t),i.fillStyle="#4e301a";for(let e=0;e<10;e++)i.fillRect(e*7+Math.random()*3,0,2,t);Qs(i,t,80,["#7d5532","#3e2614"])}),stone:()=>ee("stone",64,(i,t)=>{i.fillStyle="#8c9096",i.fillRect(0,0,t,t),Qs(i,t,200,["#7a7e84","#9ea3a8","#6d7075","#a9adb2"],2,6),i.strokeStyle="#5d6065",i.lineWidth=2,i.strokeRect(1,1,t-2,t-2)}),brick:()=>ee("brick",64,(i,t)=>{i.fillStyle="#d8cfc4",i.fillRect(0,0,t,t);for(let e=0;e<4;e++)for(let n=-1;n<3;n++)i.fillStyle=["#a8452f","#b54e36","#9a3d29"][(e+n+3)%3],i.fillRect(n*32+e%2*16+2,e*16+2,28,12)}),metal:()=>ee("metal",64,(i,t)=>{i.fillStyle="#8f99a3",i.fillRect(0,0,t,t),i.fillStyle="#a6b0ba",i.fillRect(4,4,t-8,t-8),i.fillStyle="#6c757e";for(let[e,n]of[[8,8],[t-10,8],[8,t-10],[t-10,t-10]])i.fillRect(e,n,3,3);i.fillStyle="rgba(255,255,255,0.15)",i.fillRect(10,20,t-20,4)}),tnt:()=>ee("tnt",64,(i,t)=>{i.fillStyle="#d42a1e",i.fillRect(0,0,t,t),i.fillStyle="#a81d13";for(let e=0;e<4;e++)i.fillRect(e*16,0,3,t);i.fillStyle="#f2efe6",i.fillRect(0,22,t,20),i.fillStyle="#111",i.font="bold 17px monospace",i.textAlign="center",i.fillText("TNT",t/2,38)}),barrel:()=>ee("barrel",64,(i,t)=>{i.fillStyle="#c2271d",i.fillRect(0,0,t,t),i.fillStyle="#8a1a13",i.fillRect(0,8,t,4),i.fillRect(0,t-12,t,4),i.fillStyle="#ffd31a",i.fillRect(0,24,t,16),i.fillStyle="#111";for(let e=-1;e<9;e++)i.beginPath(),i.moveTo(e*8,40),i.lineTo(e*8+4,40),i.lineTo(e*8+12,24),i.lineTo(e*8+8,24),i.fill()}),drum:()=>ee("drum",64,(i,t)=>{i.fillStyle="#2f6b3a",i.fillRect(0,0,t,t),i.fillStyle="#244f2b",i.fillRect(0,10,t,4),i.fillRect(0,t-14,t,4),i.fillStyle="#111",i.fillRect(0,26,t,12),i.fillStyle="#ddd",i.font="bold 10px monospace",i.textAlign="center",i.fillText("OIL",t/2,35)}),gas:()=>ee("gas",64,(i,t)=>{i.fillStyle="#e8e8e8",i.fillRect(0,0,t,t),i.fillStyle="#1f6fd1",i.fillRect(0,20,t,24),i.fillStyle="#fff",i.font="bold 12px monospace",i.textAlign="center",i.fillText("GAS",t/2,37)}),nuke:()=>ee("nuke",64,(i,t)=>{i.fillStyle="#e2c21d",i.fillRect(0,0,t,t),i.fillStyle="#111",i.beginPath(),i.arc(t/2,t/2,5,0,Math.PI*2),i.fill();for(let e=0;e<3;e++){let n=e*Math.PI*2/3-Math.PI/2;i.beginPath(),i.moveTo(t/2,t/2),i.arc(t/2,t/2,22,n-.5,n+.5),i.fill()}i.fillStyle="#e2c21d",i.beginPath(),i.arc(t/2,t/2,8,0,Math.PI*2),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(t/2,t/2,5,0,Math.PI*2),i.fill()}),firework:()=>ee("firework",64,(i,t)=>{let e=["#e83f6f","#ffbf00","#2274a5","#32936f"];for(let n=0;n<8;n++)i.fillStyle=e[n%4],i.fillRect(0,n*8,t,8);i.fillStyle="#fff";for(let n=0;n<12;n++)i.fillRect(Math.random()*t,Math.random()*t,3,3)}),melon:()=>ee("melon",64,(i,t)=>{i.fillStyle="#3f8f2a",i.fillRect(0,0,t,t),i.fillStyle="#21581a";for(let e=0;e<6;e++)i.fillRect(e*11,0,5,t)}),present:()=>ee("present",64,(i,t)=>{i.fillStyle="#d63a8a",i.fillRect(0,0,t,t),i.fillStyle="#ffd84a",i.fillRect(t/2-5,0,10,t),i.fillRect(0,t/2-5,t,10),i.fillStyle="rgba(255,255,255,.3)";for(let e=0;e<10;e++)i.fillRect(Math.random()*t,Math.random()*t,4,4)}),dice:()=>ee("dice",64,(i,t)=>{i.fillStyle="#f7f4ee",i.fillRect(0,0,t,t),i.fillStyle="#c22",i.fillRect(0,0,t,3),i.fillRect(0,t-3,t,3),i.fillRect(0,0,3,t),i.fillRect(t-3,0,3,t),i.fillStyle="#111";for(let[e,n]of[[16,16],[48,16],[32,32],[16,48],[48,48]])i.beginPath(),i.arc(e,n,6,0,Math.PI*2),i.fill()}),fridge:()=>ee("fridge",64,(i,t)=>{i.fillStyle="#eef2f4",i.fillRect(0,0,t,t),i.fillStyle="#c5cdd2",i.fillRect(0,22,t,2),i.fillStyle="#7b858c",i.fillRect(50,8,4,10),i.fillRect(50,30,4,18)}),piano:()=>ee("piano",64,(i,t)=>{i.fillStyle="#1a1a1e",i.fillRect(0,0,t,t),i.fillStyle="#2b2b31",i.fillRect(4,4,t-8,t-8)}),keys:()=>ee("keys",64,(i,t)=>{i.fillStyle="#f5f5f0",i.fillRect(0,0,t,t),i.fillStyle="#111";for(let e=0;e<8;e++)i.fillRect(e*8+7,0,1,t),e%7!==2&&e%7!==6&&i.fillRect(e*8+5,0,5,t*.6)}),car:()=>ee("car",64,(i,t)=>{i.fillStyle="#2b7de9",i.fillRect(0,0,t,t),i.fillStyle="rgba(255,255,255,0.2)",i.fillRect(0,10,t,6)}),window:()=>ee("window",64,(i,t)=>{i.fillStyle="#9fd3f2",i.fillRect(0,0,t,t),i.fillStyle="#d8f0ff",i.fillRect(8,6,10,t-12),i.fillStyle="#333",i.fillRect(0,0,t,4),i.fillRect(0,t-4,t,4)}),gold:()=>ee("gold",64,(i,t)=>{i.fillStyle="#e7b416",i.fillRect(0,0,t,t),i.fillStyle="#ffd95a",i.fillRect(6,6,t-12,8),i.fillStyle="#b8860b",i.fillRect(0,t-8,t,8)}),cone:()=>ee("cone",64,(i,t)=>{i.fillStyle="#ff6a13",i.fillRect(0,0,t,t),i.fillStyle="#fff",i.fillRect(0,18,t,10),i.fillRect(0,40,t,10)}),tire:()=>ee("tire",64,(i,t)=>{i.fillStyle="#222",i.fillRect(0,0,t,t),i.fillStyle="#333";for(let e=0;e<8;e++)i.fillRect(e*8,0,4,t)}),duck:()=>ee("duck",16,(i,t)=>{i.fillStyle="#ffd500",i.fillRect(0,0,t,t)}),ball:()=>ee("ball",64,(i,t)=>{i.fillStyle="#fff",i.fillRect(0,0,t,t),i.fillStyle="#111";for(let[e,n]of[[10,10],[42,18],[22,42],[54,50]])i.beginPath(),i.arc(e,n,7,0,Math.PI*2),i.fill()}),beach:()=>ee("beach",64,(i,t)=>{let e=["#ff3b3b","#fff","#2d7cff","#fff","#ffd400","#fff","#22c55e","#fff"];for(let n=0;n<8;n++)i.fillStyle=e[n],i.fillRect(n*8,0,8,t)}),basket:()=>ee("basket",64,(i,t)=>{i.fillStyle="#e8701a",i.fillRect(0,0,t,t),i.fillStyle="#3a1d08",i.fillRect(0,t/2-1,t,2),i.fillRect(t/2-1,0,2,t)}),couch:()=>ee("couch",64,(i,t)=>{i.fillStyle="#7b4bb3",i.fillRect(0,0,t,t),Qs(i,t,120,["#6c3fa0","#8a5cc4"])}),bed:()=>ee("bed",64,(i,t)=>{i.fillStyle="#e9e4ff",i.fillRect(0,0,t,t),i.fillStyle="#9d8cf2";for(let e=0;e<8;e++)i.fillRect(e*8,0,3,t)}),jelly:()=>ee("jelly",16,(i,t)=>{i.fillStyle="#ff4fa3",i.fillRect(0,0,t,t)}),concrete:()=>ee("concrete",64,(i,t)=>{i.fillStyle="#a8a8a2",i.fillRect(0,0,t,t),Qs(i,t,260,["#9d9d97","#b3b3ad","#929289"],1,3),i.fillStyle="#86867f",i.fillRect(0,0,t,2),i.fillRect(0,0,2,t)}),hay:()=>ee("hay",64,(i,t)=>{i.fillStyle="#d9b64a",i.fillRect(0,0,t,t),i.strokeStyle="#b8932c",i.lineWidth=1;for(let e=0;e<40;e++){i.beginPath();let n=Math.random()*t,s=Math.random()*t;i.moveTo(n,s),i.lineTo(n+Math.random()*14-7,s+3),i.stroke()}i.fillStyle="#8a6a1c",i.fillRect(0,18,t,3),i.fillRect(0,44,t,3)}),grass:()=>ee("grass",128,(i,t)=>{i.fillStyle="#5fae4a",i.fillRect(0,0,t,t),Qs(i,t,500,["#57a443","#68b853","#4f9a3c","#73c25d"],2,5)}),sand:()=>ee("sand",64,(i,t)=>{i.fillStyle="#e9d29a",i.fillRect(0,0,t,t),Qs(i,t,200,["#dcc287","#f2dfae","#d4b77a"])}),pad:()=>ee("pad",64,(i,t)=>{i.fillStyle="#222",i.fillRect(0,0,t,t),i.fillStyle="#39ff9c",i.beginPath(),i.moveTo(t/2,8),i.lineTo(t-12,30),i.lineTo(12,30),i.fill(),i.beginPath(),i.moveTo(t/2,30),i.lineTo(t-12,52),i.lineTo(12,52),i.fill()})};var Mm=new Fe(1,1,1),Em=new In(.5,0),Am=new Je(1,1,1,5,1,!0);Am.translate(0,.5,0);var Rm=new ms(1,.08,4,24);Rm.rotateX(Math.PI/2);var xM=new In(1,1),Cm=[],Im=[],Kl=[],Ql=[],tc=[],rr=[],ar=null,to=0;function Pm(i){for(let t=0;t<350;t++){let e=new Et(t%2?Mm:Em,new fe({flatShading:!0,roughness:.9,transparent:!0}));e.visible=!1,e.castShadow=!1,i.add(e),Cm.push(e)}for(let t=0;t<350;t++){let e=new Et(t%2?Em:Mm,new we({transparent:!0,depthWrite:!1}));e.visible=!1,i.add(e),Im.push(e)}for(let t=0;t<40;t++){let e=new Et(Am,new we({transparent:!0,depthWrite:!1,blending:Fr}));e.visible=!1,e.frustumCulled=!1,i.add(e),Kl.push({m:e,life:0,max:0,w:0})}for(let t=0;t<12;t++){let e=new Et(Rm,new we({transparent:!0,depthWrite:!1}));e.visible=!1,i.add(e),Ql.push({m:e,life:0,max:0,size:0})}for(let t=0;t<12;t++){let e=new Et(xM,new we({transparent:!0,depthWrite:!1,color:16753434}));e.visible=!1,i.add(e),tc.push({m:e,life:0,max:0,size:0})}ar=new Ml(16755285,0,40,1.5),i.add(ar)}var Sm=0,Tm=0;function vM(i,t){let e=t?Tm=(Tm+1)%i.length:Sm=(Sm+1)%i.length,n=i[e];if(n.userData.p){let s=rr.indexOf(n.userData.p);s>=0&&rr.splice(s,1)}return n}function ae(i){let t=!!i.glow,e=vM(t?Im:Cm,t);e.visible=!0,e.position.copy(i.pos),e.material.color.set(i.color??16777215),e.material.opacity=i.opacity??1,t&&(e.material.blending=i.add?Fr:hs),e.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6);let n={m:e,vel:i.vel?i.vel.clone():new _,life:0,max:i.life??1,size:i.size??.2,grow:i.grow??0,grav:i.gravity??9.8,drag:i.drag??.5,fade:i.fade??!0,spin:i.spin??5,shrink:i.shrink??!0,floor:i.floor??!0,op:i.opacity??1};return e.scale.setScalar(n.size),e.userData.p=n,rr.push(n),n}function Nm(i){for(let t=rr.length-1;t>=0;t--){let e=rr[t];e.life+=i;let n=e.life/e.max;if(n>=1){e.m.visible=!1,e.m.userData.p=null,rr.splice(t,1);continue}e.vel.y-=e.grav*i,e.vel.multiplyScalar(Math.max(0,1-e.drag*i)),e.m.position.addScaledVector(e.vel,i);let s=e.floor&&y.groundAt?y.groundAt(e.m.position.x,e.m.position.z)+.05:-1e9;e.m.position.y<s&&(e.m.position.y=s,e.vel.y*=-.3,e.vel.x*=.6,e.vel.z*=.6),e.m.rotation.x+=e.spin*i,e.m.rotation.y+=e.spin*i*.7;let o=e.size*(1+e.grow*n);e.shrink&&(o*=1-n*n),e.m.scale.setScalar(Math.max(.001,o)),e.fade&&(e.m.material.opacity=e.op*(1-n))}for(let t of Kl){if(t.life<=0)continue;if(t.life-=i,t.life<=0){t.m.visible=!1;continue}let e=t.life/t.max;t.m.material.opacity=e,t.m.scale.x=t.m.scale.z=t.w*(.4+.6*e)}for(let t of Ql){if(t.life<=0)continue;if(t.life-=i,t.life<=0){t.m.visible=!1;continue}let e=1-t.life/t.max;t.m.scale.setScalar(.5+t.size*Math.sqrt(e)),t.m.material.opacity=1-e}for(let t of tc){if(t.life<=0)continue;if(t.life-=i,t.life<=0){t.m.visible=!1;continue}let e=1-t.life/t.max;t.m.scale.setScalar(t.size*(.3+.9*Math.sqrt(e))),t.m.material.opacity=1-e,t.m.material.color.setHSL(.1-e*.1,1,.6-e*.4)}to>0&&(to=Math.max(0,to-i*60),ar.intensity=to)}var _M=new _(0,1,0),ld=new _;function $i(i,t,e=16773754,n=.04,s=.08){let o=Kl.find(a=>a.life<=0)||Kl[0];ld.subVectors(t,i);let r=ld.length();r<.01||(o.m.position.copy(i),o.m.quaternion.setFromUnitVectors(_M,ld.normalize()),o.m.scale.set(n,r,n),o.m.material.color.set(e),o.m.material.opacity=1,o.m.visible=!0,o.life=o.max=s,o.w=n)}function cd(i,t,e=11065599){let s=i.clone();for(let o=1;o<=7;o++){let r=i.clone().lerp(t,o/7);o<7&&r.add(new _(F(-.6,.6),F(-.6,.6),F(-.6,.6))),$i(s,r,e,.07,.18),s=r}}function lr(i,t,e=16777215,n=.5){let s=Ql.find(o=>o.life<=0)||Ql[0];s.m.position.copy(i),s.m.material.color.set(e),s.m.visible=!0,s.life=s.max=n,s.size=t}function hd(i,t,e=.6){let n=tc.find(s=>s.life<=0)||tc[0];n.m.position.copy(i),n.m.visible=!0,n.life=n.max=e,n.size=t}function cr(i,t=60,e=16755285){ar.position.copy(i),ar.color.set(e),to=Math.max(to,t),ar.intensity=to}var bM=new _;function yi(i=1){return bM.set(F(-1,1),F(-1,1),F(-1,1)).normalize().multiplyScalar(i).clone()}function Lm(i,t=1){hd(i,3.2*t,.55+.15*t),lr(i.clone().setY(Math.max(i.y,.2)),9*t,16773572,.45),cr(i,70*t);let e=Math.min(60,26*t)|0;for(let n=0;n<e;n++)ae({pos:i,vel:yi(F(6,18)*t).add(new _(0,4,0)),color:[16766282,16747036,16731420][n%3],size:F(.2,.5)*t,life:F(.3,.8),glow:!0,add:!0,gravity:4,drag:2.5});for(let n=0;n<e*.7;n++)ae({pos:i.clone().add(yi(1.2*t)),vel:yi(F(1,5)*t).add(new _(0,F(2,5),0)),color:[4473924,6710886,2763306][n%3],size:F(.6,1.3)*t,life:F(1.2,2.6),gravity:-1.2,drag:1.5,grow:1.5,shrink:!1,opacity:.8,spin:1});for(let n=0;n<e*.4;n++)ae({pos:i,vel:yi(F(8,20)).add(new _(0,6,0)),color:2826520,size:F(.1,.25),life:F(1,2),gravity:20,drag:.3})}function yn(i,t,e=16769126,n=8,s=6){for(let o=0;o<n;o++){let r=yi(s).add(t.clone().multiplyScalar(s*.8));ae({pos:i,vel:r,color:e,size:F(.05,.12),life:F(.2,.5),glow:!0,add:!0,gravity:12,drag:1})}}function Xn(i,t,e=10,n=.2,s=5){for(let o=0;o<e;o++)ae({pos:i.clone().add(yi(.4)),vel:yi(F(1,s)).add(new _(0,2,0)),color:t,size:n*F(.5,1.3),life:F(.8,1.6),gravity:18,drag:.4})}function sn(i,t=4,e=7829367,n=.6){for(let s=0;s<t;s++)ae({pos:i.clone().add(yi(.3)),vel:yi(1).add(new _(0,1.5,0)),color:e,size:n*F(.6,1.2),life:F(.8,1.6),gravity:-.5,drag:1,grow:1.5,shrink:!1,opacity:.6,spin:1,floor:!1})}function ud(i,t=14,e=1){for(let n=0;n<t;n++)ae({pos:i.clone().setY(y.waterY+.1),vel:new _(F(-3,3)*e,F(4,9)*e,F(-3,3)*e),color:[12577279,16777215,8376565][n%3],size:F(.12,.3)*e,life:F(.5,1),gravity:18,drag:.3,floor:!1});lr(i.clone().setY(y.waterY+.05),2.5*e,14677759,.6)}function ii(i,t=50,e=12){let n=[16726891,16765952,3920383,8191834,11758591,16777215,16747036],s=n[Math.random()*n.length|0];for(let o=0;o<t;o++)ae({pos:i,vel:yi(F(e*.6,e)),color:o%3?s:n[o%n.length],size:F(.1,.22),life:F(1,1.8),glow:!0,add:!0,gravity:3,drag:1.4});cr(i,40,s)}var Fm={normal:{s:1,mass:1,speed:1.7,mat:"flesh",buoy:1.4},big:{s:1.6,mass:1,speed:1.5,mat:"flesh",buoy:1.4},tiny:{s:.55,mass:1,speed:2.4,mat:"flesh",buoy:1.6},robot:{s:1.1,mass:3,speed:1.2,mat:"metal",buoy:.5,skin:10134702,shirt:5924208,pants:3883851,eyes:16720418,metal:!0},bouncy:{s:1,mass:1,speed:2,mat:"bouncyflesh",buoy:1.6,skin:16751317,shirt:16732067,pants:11868062},zombie:{s:1,mass:1,speed:3,mat:"flesh",buoy:1.4,skin:8368233,shirt:6049149,pants:4013373,eyes:16724787,ai:"zombie"},ninja:{s:.95,mass:.9,speed:7,mat:"flesh",buoy:1.4,skin:2236962,shirt:1710618,pants:1118481,eyes:16777215,band:14034984,ai:"ninja"},balloon:{s:1,mass:1,speed:1.7,mat:"flesh",buoy:1.4,balloons:!0}},wM=[15087942,2792847,16032353,4553629,8599788,16760331,448160,15681391,3835647,16471559],MM=[2508371,1914199,4014171,7041116,2236987,4804695],EM=[15843965,14724201,13010498,9262372,16767916,16175281],dd=i=>i[Math.random()*i.length|0],md={head:{t:"sphere",r:.25,pos:[0,1.8,0],m:.13},torso:{t:"box",size:[.56,.72,.3],pos:[0,1.17,0],m:.4},armL:{t:"box",size:[.18,.66,.18],pos:[-.38,1.17,0],m:.08},armR:{t:"box",size:[.18,.66,.18],pos:[.38,1.17,0],m:.08},legL:{t:"box",size:[.22,.8,.22],pos:[-.14,.4,0],m:.155},legR:{t:"box",size:[.22,.8,.22],pos:[.14,.4,0],m:.155}},Ln=Object.keys(md),Bm=13,SM=38,Dm=new Hi(1,.09),TM=new we({color:0,transparent:!0,opacity:.55,depthTest:!1,fog:!1}),ec={};function AM(i,t){let e=i+t.toFixed(2);if(ec[e])return ec[e];let n=md[i];return ec[e]=n.t==="sphere"?new In(n.r*t,1):new Fe(n.size[0]*t,n.size[1]*t,n.size[2]*t),ec[e]}function gd(i,t){let e=(h,d)=>new fe({color:h,flatShading:!0,roughness:d?.4:.8,metalness:d?.6:0}),n=e(t.skin,t.metal),s=e(t.shirt,t.metal),o=e(t.pants,t.metal),r={};for(let h of Ln){let d=h==="head"?n:h==="torso"?s:h.startsWith("arm")?t.sleeve?s:n:o,u=new Et(AM(h,i),d);u.castShadow=!0,u.receiveShadow=!0,r[h]=u}let a=new we({color:t.eyes??1118481}),l=new Fe(.06*i,.09*i,.03*i);for(let h of[-.09,.09]){let d=new Et(l,a);d.position.set(h*i,.04*i,.235*i),r.head.add(d)}if(!t.eyes){let h=new Et(new Fe(.12*i,.025*i,.03*i),a);h.position.set(0,-.09*i,.225*i),r.head.add(h)}if(t.band){let h=new Et(new Fe(.52*i,.08*i,.52*i),new fe({color:t.band,flatShading:!0}));h.position.y=.12*i,r.head.add(h)}let c=new Et(new Fe(.58*i,.08*i,.32*i),new fe({color:2826520,flatShading:!0}));return c.position.y=-.33*i,r.torso.add(c),r}var eo=new Qt,RM=new Qt,CM=new Ve,nc=new _,fd=new _(1,0,0),zm=new _(0,1,0);function yd(i,t,e,n,s,o,r={}){let a=RM.setFromAxisAngle(zm,n),l=(g,p,v,M,w,I,T=0)=>{let C=i[g];if(!C)return;let L=g.startsWith("leg")?.4:.33;T?eo.setFromEuler(CM.set(w,0,T,"XYZ")):eo.setFromAxisAngle(fd,w),nc.set(0,-L*t,0).applyQuaternion(eo),nc.add(new _(p*t,I*t,M*t)),nc.applyQuaternion(a).add(e),C.position.copy(nc),C.quaternion.copy(a).multiply(eo)},c=Math.sin(s)*.7*o,h=0;l("legL",-.14,0,0,c,.8),l("legR",.14,0,0,-c,.8);let d=-c,u=c;r.armsUp&&(d=Math.PI+Math.sin(y.time*18)*.4,u=Math.PI-Math.sin(y.time*18)*.4),r.zombie&&(d=u=-Math.PI/2+Math.sin(y.time*3)*.1),r.aim!==void 0&&(u=-Math.PI/2-r.aim),r.swing&&(u=-Math.PI/2-1.2+r.swing*2.5);let f=0;if(r.wave&&(u=0,f=2.55+Math.sin(y.time*11)*.35),r.talk){let g=y.time*3+(r.seed||0);d=-.35-Math.max(0,Math.sin(g))*.6,u=-.35-Math.max(0,Math.sin(g*1.3+2))*.6}l("armL",-.38,0,0,d,1.5),l("armR",.38,0,0,u,1.5,f);let m=i.torso;m.position.set(0,1.17*t+h,0).applyQuaternion(a).add(e),m.quaternion.copy(a);let x=i.head;x.position.set(0,1.8*t+h,0).applyQuaternion(a).add(e),x.quaternion.copy(a),r.headYaw&&x.quaternion.multiply(eo.setFromAxisAngle(zm,r.headYaw)),r.pitch!==void 0&&x.quaternion.multiply(eo.setFromAxisAngle(fd,-r.pitch*.5)),r.nod&&x.quaternion.multiply(eo.setFromAxisAngle(fd,r.nod))}var IM=1,pd=class i{constructor(t,e="normal",n={}){this.id=IM++,this.variant=e,this.cfg=Fm[e]||Fm.normal,this.s=this.cfg.s*(n.scale??1),this.massTotal=30*this.cfg.mass*this.s**3,this.buoy=this.cfg.buoy,this.pitch=(this.cfg.metal?90:F(130,230))/Math.sqrt(this.s),this.colors={skin:this.cfg.skin??dd(EM),shirt:this.cfg.shirt??dd(wM),pants:this.cfg.pants??dd(MM),eyes:this.cfg.eyes,band:this.cfg.band,metal:this.cfg.metal,sleeve:Math.random()<.4},this.meshes=gd(this.s,this.colors);for(let s of Ln)y.scene.add(this.meshes[s]);this.spawned=!!n.spawned,this.yaw=n.yaw??F(0,Math.PI*2),this.phase=0,this.moveAmt=0,this.ai={mode:"idle",t:F(.5,3),dir:new _,goal:null,partner:null,shove:0,jump:F(1,3),safeT:0,safe:new _,lastWave:-99,look:0},this.maxHp=Math.round(100*(this.cfg.metal?2.5:1)*Math.sqrt(this.s)),this.hp=this.maxHp,this.ko=0,this.deadT=0,this.lastHurt=-99,this.home=t.clone(),this.state=null,this.frozen=0,this.downTime=0,this.still=0,this.flingStart=null,this.maxDist=0,y.dummies.add(this),this.makeStanding(t),this.cfg.balloons&&(this.knock(null),this.tieBalloons(3))}origin(){return this.state==="standing"?Pt(this.body.position).add(new _(0,-.95*this.s,0)):Pt(this.parts.torso.body.position).add(new _(0,-1.17*this.s,0))}center(){return this.state==="standing"?Pt(this.body.position):Pt(this.parts.torso.body.position)}makeStanding(t){let e=this.s,n=new it({mass:this.massTotal,material:y.mats.player,fixedRotation:!0,collisionFilterGroup:Be.DYN,linearDamping:0,allowSleep:!1});n.addShape(new Nn(.3*e),new b(0,-.65*e,0)),n.addShape(new ni(new b(.3*e,.6*e,.18*e)),new b(0,.35*e,0)),n.position.set(t.x,t.y+.95*e+.02,t.z),n.updateMassProperties(),n.ent={kind:"dummybody",dummy:this},n.addEventListener("collide",s=>{if(this.state!=="standing")return;let o=Math.abs(s.contact.getImpactVelocityAlongNormal()),r=s.body,a=r.type===it.DYNAMIC&&(o>6||r.velocity.length()>8),l=r.isPlayer&&r.velocity.length()>11;if(a&&r.mass>1.5||l){let c=Pt(r.velocity).multiplyScalar(re(r.mass/this.massTotal,.2,1.2));Wn(()=>this.knock(c))}}),y.world.addBody(n),this.body=n,this.state="standing"}tieBalloons(t){let e=this.parts.torso;for(let n=0;n<t;n++){let s=e.body.position,o=y.spawnItem("balloon",new _(s.x+F(-.8,.8),s.y+2.5+n*.4,s.z+F(-.8,.8)),{spawned:this.spawned});o.lift=150*this.s**3,y.addRope(e.body,new b(0,.3*this.s,0),o.body,new b(0,-.5,0),2.5)}}knock(t){if(this.state!=="standing"){if(t)for(let l of Ln){let c=this.parts[l].body;c.velocity.x+=t.x,c.velocity.y+=t.y,c.velocity.z+=t.z}return}let e=Pt(this.body.position.y<-100?new b:this.body.velocity);t&&e.add(t),y.world.removeBody(this.body),this.body=null;let n=this.s,s=y.mats[this.cfg.mat];this.parts={};for(let l of Ln){let c=md[l],h=this.meshes[l],d=new it({mass:this.massTotal*c.m,material:s,collisionFilterGroup:Be.DYN,linearDamping:.04,angularDamping:.3,allowSleep:!0,sleepSpeedLimit:.3,sleepTimeLimit:1});d.addShape(c.t==="sphere"?new Nn(c.r*n):new ni(new b(c.size[0]/2*n,c.size[1]/2*n,c.size[2]/2*n))),d.position.set(h.position.x,h.position.y,h.position.z),d.quaternion.set(h.quaternion.x,h.quaternion.y,h.quaternion.z,h.quaternion.w),d.velocity.set(e.x+F(-.5,.5),e.y,e.z+F(-.5,.5)),t&&d.angularVelocity.set(F(-4,4),F(-4,4),F(-4,4));let u={id:-1,kind:"ragpart",dummy:this,body:d,mesh:h,def:{},mat:vi[this.cfg.mat],hp:1/0,gen:0,born:y.time,scale:1,frozen:0,antigrav:0,thrusters:[],wet:!1,partName:l};d.ent=u,d.addEventListener("collide",f=>{let m=Math.abs(f.contact.getImpactVelocityAlongNormal());if(m>7&&(lt.oof(d.position,this.pitch),m>14&&Wn(()=>{this.parts&&Xn(Pt(d.position),16777215,3,.08,3)})),m>Bm&&y.time-this.impactT>.12){this.impactT=y.time;let x=l==="head"?1.5:l==="torso"?1:.5,g=(m-Bm)*2.2*x*(this.cfg.mat==="bouncyflesh"?.4:1);Wn(()=>this.damageHp(g))}}),y.world.addBody(d),y.ents.add(u),this.parts[l]=u}let o=this.parts,r=[],a=(l,c,h)=>new b(l*n,c*n,h*n);r.push(new $r(o.torso.body,o.head.body,{pivotA:a(0,.36,0),pivotB:a(0,-.27,0),axisA:new b(0,1,0),axisB:new b(0,1,0),angle:.6,twistAngle:.5}));for(let[l,c]of[["armL",-.38],["armR",.38]]){let h=new ir(o.torso.body,a(c,.33,0),o[l].body,a(0,.33,0));h.collideConnected=!1,r.push(h)}for(let[l,c]of[["legL",-.14],["legR",.14]])r.push(new $r(o.torso.body,o[l].body,{pivotA:a(c,-.37,0),pivotB:a(0,.4,0),axisA:new b(0,-1,0),axisB:new b(0,-1,0),angle:1,twistAngle:.3}));for(let l of r)y.world.addConstraint(l);this.constraints=r,this.state="ragdoll",this.impactT=y.time,this.downTime=0,this.still=0,this.flingStart=this.center(),this.maxDist=0,lt.oof(this.center(),this.pitch)}markFling(){this.flingStart=this.center(),this.maxDist=0,this.thrown=!0}hurt(t,e,n){this.state==="standing"?this.knock(n||(e?e.clone().multiplyScalar(Math.min(t*.15,12)):null)):(n&&this.knock(n),t>8&&lt.oof(this.center(),this.pitch)),this.damageHp(t)}damageHp(t){if(!(this.dead||this.deadT>0||!(t>0))){if(this.hp-=t,this.lastHurt=y.time,this.hp<=0){this.die();return}(t>=SM||this.hp<this.maxHp*.25)&&(this.state==="standing"&&this.knock(null),this.ko<=0&&En("KO!",this.center().add(new _(0,1.2,0)),"#ffe14a",20),this.ko=Math.max(this.ko,F(4,7)))}}die(){this.hp=0,this.deadT=.001,this.ko=0,this.state==="standing"&&this.knock(null),En("\u2716 DOWN",this.center().add(new _(0,1.3,0)),"#ff5050",22),y.stats.kos=(y.stats.kos||0)+1;for(let t of Ln){let e=this.meshes[t];e.userData.alive||(e.userData.alive=e.material),e.material=e.material.clone(),e.material.color.lerp(new St(7829367),.6)}}revive(){for(let t of Ln){let e=this.meshes[t];e.userData.alive&&(e.material=e.userData.alive,e.userData.alive=null)}this.hp=this.maxHp,this.deadT=0,this.ko=0,this.burn=0}freeze(t){this.state==="standing"&&this.knock(null),this.frozen=t;for(let e of Ln){let n=this.parts[e];n.frozen||(n.frozen=1,n.origMass=n.body.mass,n.body.type=it.STATIC,n.body.mass=0,n.body.updateMassProperties(),n.body.velocity.setZero(),n.body.angularVelocity.setZero(),n.mesh.userData.orig=n.mesh.material,n.mesh.material=new fe({color:11463423,transparent:!0,opacity:.85,emissive:1728378,emissiveIntensity:.4,flatShading:!0}))}}unfreeze(){if(this.parts){this.frozen=0;for(let t of Ln){let e=this.parts[t];e.frozen&&(e.frozen=0,e.body.type=it.DYNAMIC,e.body.mass=e.origMass,e.body.updateMassProperties(),e.body.wakeUp(),e.mesh.userData.orig&&(e.mesh.material=e.mesh.userData.orig,e.mesh.userData.orig=null))}}}clearRagdoll(){if(this.parts){for(let t of this.constraints)y.world.removeConstraint(t);for(let t of Ln){let e=this.parts[t];e.dead=!0;for(let n=y.ropes.length-1;n>=0;n--){let s=y.ropes[n];(s.a===e.body||s.b===e.body)&&y.removeRope(s)}for(let n=y.welds.length-1;n>=0;n--){let s=y.welds[n];(s.bodyA===e.body||s.bodyB===e.body)&&(y.world.removeConstraint(s),y.welds.splice(n,1))}y.onRemove&&y.onRemove(e),y.world.removeBody(e.body),y.ents.delete(e),e.mesh.userData.orig&&(e.mesh.material=e.mesh.userData.orig,e.mesh.userData.orig=null);for(let n of e.thrusters)n.mesh&&e.mesh.remove(n.mesh)}this.parts=null,this.constraints=null}}standUp(t){this.reportFling(),this.clearRagdoll(),this.makeStanding(t),this.yaw=F(0,Math.PI*2),this.ai.mode="idle",this.ai.t=F(.5,2),this.ai.partner=null,this.ai.goal=null,lt.pop(t),sn(t.clone().add(new _(0,.3,0)),4,14274488,.5)}reportFling(){if(this.maxDist>6){let t=this.maxDist;y.stats.flings++;let e=t>y.stats.best;e&&(y.stats.best=t,mm()),En(`${t.toFixed(1)}m FLING!${e?" NEW BEST!":""}`,this.center().add(new _(0,1.5,0)),e?"#ffd23f":"#ffffff",e?30:22)}this.maxDist=0}respawn(){this.reportFling(),this.revive();let t=this.home,e=new _(t.x+F(-1.5,1.5),t.y+.5,t.z+F(-1.5,1.5)),n=un(e.clone().setY(t.y+30),e.clone().setY(t.y-30),Be.STATIC);if(n&&n.point.y>y.waterY)e=n.point.add(new _(0,.1,0));else{let s=y.spawn||new _(0,1,0);e=new _(s.x+F(-8,8),s.y+.5,s.z-F(4,12))}this.state==="ragdoll"?this.clearRagdoll():this.body&&y.world.removeBody(this.body),this.body=null,this.makeStanding(e),this.ai.mode="idle",this.ai.t=F(1,2),sn(e.clone().add(new _(0,.5,0)),6,16777215,.6),En("...and back!",e.clone().add(new _(0,2.5,0)),"#aee",16)}remove(){this.state==="ragdoll"?this.clearRagdoll():this.body&&y.world.removeBody(this.body);for(let t of Ln)y.scene.remove(this.meshes[t]);this.bar&&y.scene.remove(this.bar),this.ai.partner&&this.ai.partner.endChat(),y.dummies.delete(this),this.dead=!0}rescale(t){let e=re(this.s*t,.3,3.5)/this.cfg.s,n=this.origin();return n.y=Math.max(n.y,0),this.remove(),new i(n,this.variant,{scale:e,spawned:this.spawned})}ignite(){this.burn>0||this.cfg.metal||this.center().y<y.waterY||(this.burn=7,lt.oof(this.center(),this.pitch))}update(t){if(this.burn>0){this.burn-=t;let e=this.center();e.y<y.waterY+.3&&(this.burn=0,sn(e,5,14540253,.6)),Math.random()<.6&&ae({pos:e.clone().add(new _(F(-.3,.3),F(-.6,.6)*this.s,F(-.3,.3))),vel:new _(F(-.5,.5),F(2,4),F(-.5,.5)),color:Math.random()<.5?16742938:16760906,size:F(.2,.35)*this.s,life:F(.4,.7),glow:!0,add:!0,gravity:-2,floor:!1}),Math.random()<t*1.5&&lt.oof(e,this.pitch),this.damageHp(t*9)}this.deadT<=0&&this.ko<=0&&y.time-this.lastHurt>6&&(this.hp=Math.min(this.maxHp,this.hp+t*6)),this.updateBar(),this.state==="standing"?this.updateStanding(t):this.updateRagdoll(t)}updateBar(){if(!(y.time-this.lastHurt<3&&this.deadT<=0&&!this.dead)){this.bar&&(this.bar.visible=!1);return}if(!this.bar){this.bar=new tn;let n=new Et(Dm,TM);this.barFill=new Et(Dm,new we({color:4906624,depthTest:!1,fog:!1})),this.barFill.position.z=.001,n.renderOrder=20,this.barFill.renderOrder=21,this.bar.add(n,this.barFill),y.scene.add(this.bar)}let e=re(this.hp/this.maxHp,0,1);this.bar.visible=!0,this.bar.position.copy(this.state==="standing"?this.origin():this.center()).add(new _(0,this.state==="standing"?2.35*this.s:.9*this.s,0)),this.bar.quaternion.copy(y.camera.quaternion),this.bar.scale.setScalar(Math.max(.7,this.s)),this.barFill.scale.x=Math.max(.001,e),this.barFill.position.x=-(1-e)/2,this.barFill.material.color.setHex(e>.5?4906624:e>.25?16436245:15680580)}endChat(){let t=this.ai.partner;this.ai.partner=null,this.ai.mode==="chat"&&(this.ai.mode="idle",this.ai.t=F(1,3)),t&&t.ai.partner===this&&t.endChat()}pathOk(t,e){let n=this.body,s=this.s,o=n.position.y-.95*s,r=un(new _(n.position.x,n.position.y,n.position.z),new _(n.position.x+t.x*1.1*s,n.position.y,n.position.z+t.z*1.1*s),Be.STATIC|Be.DYN);if(r&&r.body!==n&&Math.abs(r.normal.y)<.6)return!1;for(let a of[.6,1]){let l=n.position.x+t.x*e*a,c=n.position.z+t.z*e*a,h=un(new _(l,o+1.2*s,c),new _(l,o-1.6,c),Be.STATIC|Be.DYN);if(!h||h.point.y<y.waterY+.15||h.point.y<o-1.1)return!1}return!0}safeDir(t,e,n){let s=this.ai;if(s.safeT-=n,s.safeT>0&&s.safeWant&&s.safeWant.dot(t)>.95)return s.safeNull?null:s.safe;s.safeT=.15,s.safeWant=t.clone();let o=re(e*.55,1.3,3.2)*Math.max(.8,this.s),r=Math.atan2(t.x,t.z);for(let a of[0,.45,-.45,.9,-.9,1.4,-1.4,2,-2,2.6,-2.6,Math.PI]){let l=r+a,c=new _(Math.sin(l),0,Math.cos(l));if(this.pathOk(c,o))return s.safe.copy(c),s.safeNull=!1,s.safe}return s.safeNull=!0,null}pickGoal(){let t=this.origin(),e=y.walkBound??58;for(let n=0;n<8;n++){let s=F(0,Math.PI*2),o=F(5,18),r=re(t.x+Math.cos(s)*o,-e,e),a=re(t.z+Math.sin(s)*o,-e,e),l=un(new _(r,t.y+6,a),new _(r,t.y-6,a),Be.STATIC);if(l&&l.point.y>y.waterY+.2&&l.normal.y>.7&&Math.abs(l.point.y-t.y)<4)return l.point}return null}threat(t){if(this.burn>0)return{pos:t.clone().add(new _(F(-1,1),0,F(-1,1))),burning:!0};if(y.time-y.lastBoom.time<4&&y.lastBoom.pos.distanceTo(t)<28)return{pos:y.lastBoom.pos};if(y.firePatches){for(let e of y.firePatches)if(e.pos.distanceTo(t)<e.r+5)return{pos:e.pos}}for(let e of y.blackholes)if(e.mesh&&e.mesh.position.distanceTo(t)<22)return{pos:e.mesh.position};if(this.cfg.ai!=="zombie"){for(let e of y.dummies)if(!(e===this||e.cfg.ai!=="zombie"||e.state!=="standing")&&e.origin().distanceTo(t)<8)return{pos:e.origin()}}return null}updateStanding(t){let e=this.body,n=this.s,s=this.ai,o=this.origin();if(o.y<y.waterY-.4||o.y<(y.killY??-30)){this.knock(null);return}let a=!!un(new _(e.position.x,e.position.y-.6*n,e.position.z),new _(e.position.x,e.position.y-1.15*n,e.position.z)),l=0,c=new _,h=this.cfg.ai,d={headYaw:0},u=y.player?y.player.pos():null,f=h==="zombie"?null:this.threat(o),m=null;if(h==="zombie"&&u){c.subVectors(u,o).setY(0);let w=c.length();c.normalize(),l=w>1?this.cfg.speed:0,s.shove-=t,w<1.3*n+.5&&s.shove<=0&&(s.shove=1.2,y.player.fling(c.clone().multiplyScalar(9).add(new _(0,5,0))),lt.oof(u,this.pitch),En("BONK",u.clone().add(new _(0,2,0)),"#8f8",18)),Math.random()<t*.15&&lt.groan(o),d.zombie=!0}else if(f)s.mode==="chat"&&this.endChat(),s.mode="flee",s.t=F(1.5,3),f.burning?(Math.random()<t*2&&s.dir.set(F(-1,1),0,F(-1,1)).normalize(),c.copy(s.dir),l=6.5):(c.subVectors(o,f.pos).setY(0),c.lengthSq()<.01&&c.set(F(-1,1),0,F(-1,1)),c.normalize(),l=5.5),d.armsUp=!0;else{s.t-=t;let w=y.walkBound??58,I=Math.abs(o.x)>w||Math.abs(o.z)>w;if(s.mode==="flee"&&s.t<=0&&(s.mode="idle",s.t=F(1,3)),s.mode==="flee")c.copy(s.safe.lengthSq()?s.safe:s.dir),l=3.5;else if(s.mode==="walk")if((!s.goal||I)&&(s.goal=I?new _(0,o.y,0):this.pickGoal()),!s.goal)s.mode="idle",s.t=F(1,3);else{c.subVectors(s.goal,o).setY(0);let T=c.length();c.normalize(),l=this.cfg.speed,(T<1.2||s.t<=0)&&(s.mode="idle",s.t=F(2,5),s.goal=null)}else if(s.mode==="chat"){let T=s.partner;if(!T||T.dead||T.state!=="standing"||T.ai.partner!==this||s.t<=0)this.endChat();else{let C=T.origin().sub(o).setY(0);C.length()>1.7*n+.4?(c.copy(C.normalize()),l=this.cfg.speed):(m=T.origin(),d.talk=!0,d.seed=this.id,d.nod=Math.sin(y.time*2+this.id)*.08)}}else s.mode==="wave"?!u||s.t<=0?(s.mode="idle",s.t=F(1,3)):(m=u,s.t<2.2&&(d.wave=!0)):(s.look+=t,d.headYaw=Math.sin(s.look*.9+this.id)*.7,s.t<=0&&this.decide(o,u));if(u&&s.mode!=="chat"&&s.mode!=="wave"&&y.time-s.lastWave>25){let T=u.distanceTo(o);T<7&&T>2&&y.aim.dir.dot(o.clone().sub(u).normalize())>.9&&(s.mode="wave",s.t=2.6,s.lastWave=y.time,s.goal=null)}h==="ninja"&&(s.jump-=t,s.jump<=0&&a&&l>0&&this.pathOk(c,4)&&(s.jump=F(.8,2.5),e.velocity.y=9)),s.mode==="walk"&&h==="ninja"&&(l=this.cfg.speed)}if(l>0&&a){let w=this.safeDir(c,l,t);w?c.copy(w):(l=0,s.mode==="walk"&&(s.goal=null,s.mode="idle",s.t=F(.5,1.5)))}else l>0&&!a&&(l*=.3);let x=c.x*l,g=c.z*l,p=a?10:1.5;e.velocity.x+=(x-e.velocity.x)*Math.min(1,p*t),e.velocity.z+=(g-e.velocity.z)*Math.min(1,p*t);let v=null;if(l>.1?v=Math.atan2(c.x,c.z):m&&(v=Math.atan2(m.x-o.x,m.z-o.z)),v!==null){let w=v-this.yaw;for(;w>Math.PI;)w-=Math.PI*2;for(;w<-Math.PI;)w+=Math.PI*2;this.yaw+=w*Math.min(1,8*t)}let M=Math.hypot(e.velocity.x,e.velocity.z);this.moveAmt+=(re(M/3,0,1)-this.moveAmt)*Math.min(1,8*t),this.phase+=t*(3+M*2.2)/Math.sqrt(n),yd(this.meshes,n,this.origin(),this.yaw,this.phase,this.moveAmt,d)}decide(t,e){let n=this.ai,s=Math.random();if(s<.3){let o=null,r=12;for(let a of y.dummies){if(a===this||a.state!=="standing"||a.cfg.ai==="zombie"||a.ai.mode==="chat"||a.ai.mode==="flee")continue;let l=a.origin().distanceTo(t);l<r&&(r=l,o=a)}if(o){let a=F(4,9);n.mode="chat",n.partner=o,n.t=a,o.ai.mode="chat",o.ai.partner=this,o.ai.t=a,o.ai.goal=null;return}}if(s<.4&&e&&e.distanceTo(t)<14&&y.time-n.lastWave>12){n.mode="wave",n.t=3,n.lastWave=y.time;return}s<.85&&(n.mode="walk",n.goal=this.pickGoal(),n.t=14,n.goal)||(n.mode="idle",n.t=F(2,5))}updateRagdoll(t){for(let l of Ln){let c=this.parts[l];c.mesh.position.copy(c.body.position),c.mesh.quaternion.copy(c.body.quaternion)}let e=this.parts.torso.body;if(this.frozen>0&&(this.frozen-=t,this.frozen<=0&&this.unfreeze()),this.flingStart){let l=Math.hypot(e.position.x-this.flingStart.x,e.position.z-this.flingStart.z);l>this.maxDist&&(this.maxDist=l)}this.downTime+=t;let n=e.velocity.length(),s=y.grab&&y.grab.dummy===this,o=y.ropes.some(l=>Ln.some(c=>l.a===this.parts[c].body||l.b===this.parts[c].body)),r=s||o||this.frozen>0||this.parts.torso.antigrav>0||Ln.some(l=>this.parts[l].thrusters.length);n<.9&&!r?this.still+=t:this.still=0;let a=e.position.y<y.waterY+.2;if(this.deadT>0){this.deadT+=t,this.deadT>6&&!s&&this.respawn();return}if(this.ko>0){if(this.ko-=t,Math.random()<t*4){let l=this.parts.head.body.position;ae({pos:new _(l.x+F(-.3,.3),l.y+.45*this.s,l.z+F(-.3,.3)),vel:new _(F(-.4,.4),.6,F(-.4,.4)),color:16769354,size:.12,life:.7,glow:!0,add:!0,gravity:0})}a&&this.downTime>14&&!r&&this.respawn();return}if(this.still>2.2&&!a){let l=un(new _(e.position.x,e.position.y+.3,e.position.z),new _(e.position.x,e.position.y-3,e.position.z),Be.STATIC|Be.DYN),c=l?l.point:new _(e.position.x,e.position.y-.5,e.position.z);this.standUp(c.add(new _(0,.05,0)));return}a&&this.downTime>14&&!r&&this.respawn()}};function Yn(i,t="normal",e={}){let n=0;for(let s of y.dummies)n++;if(n>=45){for(let s of y.dummies)if(s.spawned){s.remove();break}}return new pd(i,t,e)}function Um(i){let t=i&&i.ent;return t&&(t.kind==="dummybody"||t.kind==="ragpart")?t.dummy:null}var vi={wood:{density:60,hp:60,thresh:9,brk:"chunks",fr:.6,re:.2,buoy:1.8,color:11565630,min:.22},stone:{density:160,hp:140,thresh:13,brk:"chunks",fr:.75,re:.1,buoy:.45,color:9212054,min:.25},brick:{density:120,hp:70,thresh:11,brk:"chunks",fr:.7,re:.1,buoy:.5,color:11027759,min:.2},glass:{density:80,hp:6,thresh:4,brk:"shards",fr:.3,re:.2,buoy:.8,color:12577023},crystal:{density:90,hp:12,thresh:6,brk:"shards",fr:.3,re:.3,buoy:.8,color:8386559},ice:{density:70,hp:22,thresh:6,brk:"chunks",fr:.02,re:.1,buoy:1.4,color:12120319,min:.2},metal:{density:300,hp:1/0,thresh:99,brk:"none",fr:.45,re:.15,buoy:.25,color:10134702},gold:{density:500,hp:1/0,thresh:99,brk:"none",fr:.5,re:.1,buoy:.2,color:15184918},rubber:{density:30,hp:1/0,thresh:99,brk:"none",fr:.9,re:.92,buoy:2.5,color:16726891},beach:{density:2,hp:1/0,thresh:99,brk:"none",fr:.8,re:.85,buoy:6,color:16777215},jelly:{density:25,hp:1/0,thresh:99,brk:"none",fr:.9,re:1,buoy:1.2,color:16732067},plastic:{density:25,hp:1/0,thresh:99,brk:"none",fr:.6,re:.35,buoy:2,color:16053492},foam:{density:3,hp:1/0,thresh:99,brk:"none",fr:.8,re:.2,buoy:6,color:15328511},fruit:{density:55,hp:18,thresh:7,brk:"splat",fr:.6,re:.15,buoy:1.1,color:4165418},tnt:{density:70,hp:1/0,thresh:99,brk:"none",fr:.6,re:.15,buoy:1.2,color:13904414},heavy:{density:280,hp:1/0,thresh:99,brk:"none",fr:.4,re:.1,buoy:.3,color:2241365},rock:{density:150,hp:400,thresh:18,brk:"chunks",fr:.8,re:.1,buoy:.4,color:8225416,min:.4},appliance:{density:50,hp:150,thresh:12,brk:"chunks",fr:.5,re:.1,buoy:.9,color:15659764,min:.3},car:{density:45,hp:320,thresh:14,brk:"chunks",fr:.25,re:.15,buoy:.8,color:2850281,min:.45},balloon:{density:.3,hp:1,thresh:9,brk:"pop",fr:.5,re:.6,buoy:10,color:16726843},concrete:{density:140,hp:220,thresh:14,brk:"chunks",fr:.8,re:.1,buoy:.4,color:11053218,min:.45},snow:{density:25,hp:8,thresh:5,brk:"splat",fr:.5,re:.05,buoy:1.5,color:16054523},cactus:{density:40,hp:40,thresh:8,brk:"chunks",fr:.7,re:.1,buoy:1.2,color:4165434,min:.2},hay:{density:12,hp:25,thresh:8,brk:"chunks",fr:.9,re:.05,buoy:3,color:14267978,min:.3},flesh:{density:40,hp:1/0,thresh:99,brk:"none",fr:.7,re:.1,buoy:1.4,color:1578e4},bouncyflesh:{density:40,hp:1/0,thresh:99,brk:"none",fr:.7,re:.95,buoy:1.4,color:16743112}};function wd(){for(let i in vi)y.mats[i]=new vs(i),y.mats[i].friction=vi[i].fr,y.mats[i].restitution=vi[i].re;y.mats.ground=new vs("ground"),y.mats.ground.friction=.9,y.mats.ground.restitution=1,y.mats.player=new vs("player"),y.mats.player.friction=0,y.mats.player.restitution=0}var xd={},PM=new fe({color:11463423,transparent:!0,opacity:.8,roughness:.1,metalness:.1,emissive:1728378,emissiveIntensity:.4,flatShading:!0});function bd(i,t,e){let n=i+"|"+(t||"")+"|"+(e??"");if(xd[n]&&e!=="random")return xd[n];let s={flatShading:!0,roughness:.85,metalness:0};t&&(s.map=Jl[t]());let o=e==="random"?new St().setHSL(Math.random(),.8,.55):e??(t?16777215:vi[i]?.color??13421772);s.color=o,i==="glass"&&Object.assign(s,{transparent:!0,opacity:.38,roughness:.05,metalness:.2,depthWrite:!1}),i==="ice"&&Object.assign(s,{transparent:!0,opacity:.75,roughness:.1}),i==="crystal"&&Object.assign(s,{transparent:!0,opacity:.85,emissive:3135231,emissiveIntensity:.6,roughness:.1}),i==="jelly"&&Object.assign(s,{transparent:!0,opacity:.7,roughness:.2}),(i==="metal"||i==="heavy")&&Object.assign(s,{metalness:.6,roughness:.45}),i==="gold"&&Object.assign(s,{metalness:.9,roughness:.3}),i==="balloon"&&Object.assign(s,{roughness:.3});let r=new fe(s);return e!=="random"&&(xd[n]=r),r}var vd={};function _d(i,t,e,n,s){let o=i+t+","+e+","+n+","+s;if(vd[o])return vd[o];let r;return i==="box"?r=new Fe(t,e,n):i==="sphere"?r=new In(t,e??1):i==="cyl"&&(r=new Je(n??t,t,e,10)),vd[o]=r,r}var J=(i,t,e,n,s)=>({id:i,name:t,icon:e,cat:n,...s}),bs=[J("crate","Wood Crate","\u{1F4E6}","Build",{shape:"box",size:[1,1,1],mat:"wood",tex:"crate"}),J("crate_s","Small Crate","\u{1F4E6}","Build",{shape:"box",size:[.6,.6,.6],mat:"wood",tex:"crate"}),J("crate_b","Big Crate","\u{1F4E6}","Build",{shape:"box",size:[1.8,1.8,1.8],mat:"wood",tex:"crate"}),J("plank","Plank","\u{1FAB5}","Build",{shape:"box",size:[2.4,.2,.5],mat:"wood",tex:"plank"}),J("log","Log","\u{1FAB5}","Build",{shape:"cyl",r:.3,h:2.6,mat:"wood",tex:"log",rot:[0,0,Math.PI/2]}),J("stone","Stone Block","\u{1FAA8}","Build",{shape:"box",size:[1,1,1],mat:"stone",tex:"stone"}),J("slab","Stone Slab","\u{1FAA8}","Build",{shape:"box",size:[2,.4,1],mat:"stone",tex:"stone"}),J("brick","Brick","\u{1F9F1}","Build",{shape:"box",size:[.9,.45,.45],mat:"brick",tex:"brick"}),J("glass","Glass Pane","\u{1FA9F}","Build",{shape:"box",size:[2,2,.12],mat:"glass"}),J("glass_c","Glass Cube","\u{1F9CA}","Build",{shape:"box",size:[1,1,1],mat:"glass"}),J("ice","Ice Block","\u{1F9CA}","Build",{shape:"box",size:[1,1,1],mat:"ice"}),J("metal","Metal Block","\u2B1C","Build",{shape:"box",size:[1,1,1],mat:"metal",tex:"metal"}),J("beam","Steel Beam","\u2796","Build",{shape:"box",size:[3,.3,.3],mat:"metal",tex:"metal"}),J("domino","Domino","\u{1F062}","Build",{shape:"box",size:[.5,1.2,.15],mat:"plastic",color:16053492}),J("gold","Gold Bar","\u{1F947}","Build",{shape:"box",size:[.6,.3,.3],mat:"gold",tex:"gold"}),J("concrete","Concrete Block","\u25FB\uFE0F","Build",{shape:"box",size:[1,1,1],mat:"concrete",tex:"concrete"}),J("concrete_big","Big Concrete Block","\u2B1B","Build",{shape:"box",size:[2,2,2],mat:"concrete",tex:"concrete"}),J("barrier","Road Barrier","\u{1F6A7}","Build",{shape:"compound",mat:"concrete",parts:[{t:"box",size:[1.8,.35,.7],off:[0,-.25,0],tex:"concrete"},{t:"box",size:[1.8,.55,.3],off:[0,.2,0],tex:"concrete"}]}),J("hay","Hay Bale","\u{1F33E}","Build",{shape:"box",size:[1.2,.8,.8],mat:"hay",tex:"hay"}),J("wood_big","Big Wood Block","\u{1F7EB}","Blocks",{shape:"box",size:[2,2,2],mat:"wood",tex:"plank"}),J("stone_big","Big Stone Block","\u{1FAA8}","Blocks",{shape:"box",size:[2,2,2],mat:"stone",tex:"stone"}),J("brick_big","Big Brick Block","\u{1F9F1}","Blocks",{shape:"box",size:[2,2,2],mat:"brick",tex:"brick"}),J("brick_long","Long Brick","\u{1F9F1}","Blocks",{shape:"box",size:[2,1,1],mat:"brick",tex:"brick"}),J("sand_block","Sandstone Block","\u{1F7E8}","Blocks",{shape:"box",size:[1,1,1],mat:"stone",tex:"stone",color:15257492}),J("sand_big","Big Sandstone Block","\u{1F7E8}","Blocks",{shape:"box",size:[2,2,2],mat:"stone",tex:"stone",color:15257492}),J("marble","Marble Block","\u2B1C","Blocks",{shape:"box",size:[1,1,1],mat:"stone",tex:"stone",color:16184300}),J("marble_big","Big Marble Block","\u2B1C","Blocks",{shape:"box",size:[2,2,2],mat:"stone",tex:"stone",color:16184300}),J("pillar","Marble Pillar","\u{1F3DB}\uFE0F","Blocks",{shape:"cyl",r:.4,h:3,mat:"stone",tex:"stone",color:16184300}),J("obsidian","Obsidian Block","\u2B1B","Blocks",{shape:"box",size:[1,1,1],mat:"rock",tex:"stone",color:3813199}),J("ice_big","Big Ice Block","\u{1F9CA}","Blocks",{shape:"box",size:[2,2,2],mat:"ice"}),J("glass_big","Big Glass Block","\u{1FA9F}","Blocks",{shape:"box",size:[2,2,2],mat:"glass",hp:40}),J("wood_wall","Wood Wall Panel","\u{1F6AA}","Blocks",{shape:"box",size:[2,2,.25],mat:"wood",tex:"plank"}),J("steel_plate","Steel Plate","\u25AD","Blocks",{shape:"box",size:[2,.15,2],mat:"metal",tex:"metal"}),J("rubber_block","Bouncy Block","\u{1F7E5}","Blocks",{shape:"box",size:[1,1,1],mat:"rubber",color:16726891}),J("foam_block","Foam Block","\u{1F7EA}","Blocks",{shape:"box",size:[1,1,1],mat:"foam"}),J("tnt","TNT","\u{1F9E8}","Boom",{shape:"box",size:[.9,.9,.9],mat:"tnt",tex:"tnt",explosive:{power:1,impact:17,hp:1}}),J("tnt_mini","Mini TNT","\u{1F9E8}","Boom",{shape:"box",size:[.5,.5,.5],mat:"tnt",tex:"tnt",explosive:{power:.5,impact:17,hp:1}}),J("tnt_mega","MEGA TNT","\u{1F4A5}","Boom",{shape:"box",size:[1.8,1.8,1.8],mat:"tnt",tex:"tnt",explosive:{power:2.6,impact:15,hp:1}}),J("barrel","Explosive Barrel","\u{1F6E2}\uFE0F","Boom",{shape:"cyl",r:.45,h:1.2,mat:"tnt",tex:"barrel",explosive:{power:.9,impact:11,hp:25}}),J("drum","Oil Drum","\u{1F6E2}\uFE0F","Boom",{shape:"cyl",r:.45,h:1.2,mat:"tnt",tex:"drum",explosive:{power:.7,impact:14,hp:40,fire:!0}}),J("gas","Gas Canister","\u{1F9EF}","Boom",{shape:"cyl",r:.25,h:1,mat:"tnt",tex:"gas",explosive:{power:.7,impact:99,hp:10,special:"gas"}}),J("firework","Firework Box","\u{1F386}","Boom",{shape:"box",size:[.4,.8,.4],mat:"tnt",tex:"firework",explosive:{power:.3,impact:13,hp:1,special:"firework"}}),J("nuke","Nuke Barrel","\u2622\uFE0F","Boom",{shape:"cyl",r:.6,h:1.5,mat:"tnt",tex:"nuke",explosive:{power:4,impact:25,hp:60}}),J("mine","Land Mine","\u26A0\uFE0F","Boom",{shape:"cyl",r:.45,h:.14,mat:"metal",color:4872762,explosive:{power:.9,impact:.8,hp:1,mine:!0}}),J("c4","C4 Pack","\u{1F4DF}","Boom",{shape:"box",size:[.5,.2,.35],mat:"tnt",color:14274992,explosive:{power:1.4,impact:40,hp:1}}),J("ball","Bouncy Ball","\u{1F534}","Balls",{shape:"sphere",r:.4,mat:"rubber",color:"random"}),J("beachball","Beach Ball","\u{1F3D0}","Balls",{shape:"sphere",r:.75,mat:"beach",tex:"beach"}),J("basketball","Basketball","\u{1F3C0}","Balls",{shape:"sphere",r:.33,mat:"rubber",tex:"basket"}),J("soccer","Soccer Ball","\u26BD","Balls",{shape:"sphere",r:.35,mat:"rubber",tex:"ball",massMul:.5}),J("bowling","Bowling Ball","\u{1F3B3}","Balls",{shape:"sphere",r:.3,mat:"heavy",color:2767498}),J("cannonball","Cannonball","\u26AB","Balls",{shape:"sphere",r:.35,mat:"heavy",color:2236962}),J("boulder","Boulder","\u{1FAA8}","Balls",{shape:"sphere",r:1.2,mat:"rock",tex:"stone",detail:0}),J("balloon","Balloon","\u{1F388}","Fun",{shape:"sphere",r:.5,mat:"balloon",color:"random",special:"balloon"}),J("duck","Rubber Duck","\u{1F986}","Fun",{shape:"compound",mat:"rubber",special:"duck",parts:[{t:"sphere",r:.38,off:[0,0,0],color:16766208},{t:"sphere",r:.24,off:[.28,.36,0],color:16766208},{t:"box",size:[.2,.08,.16],off:[.52,.32,0],color:16743168}]}),J("melon","Watermelon","\u{1F349}","Fun",{shape:"sphere",r:.4,mat:"fruit",tex:"melon",splat:16726858}),J("pumpkin","Pumpkin","\u{1F383}","Fun",{shape:"sphere",r:.45,mat:"fruit",color:16747036,splat:16757575,detail:0}),J("present","Mystery Present","\u{1F381}","Fun",{shape:"box",size:[.7,.7,.7],mat:"wood",tex:"present",special:"present",hp:25}),J("crystal","Crystal","\u{1F48E}","Fun",{shape:"sphere",r:.45,mat:"crystal",detail:0}),J("dice","Giant Dice","\u{1F3B2}","Fun",{shape:"box",size:[.7,.7,.7],mat:"plastic",tex:"dice"}),J("jelly","Jelly Cube","\u{1F7EA}","Fun",{shape:"box",size:[1,1,1],mat:"jelly"}),J("pillow","Feather Pillow","\u{1F6CF}\uFE0F","Fun",{shape:"box",size:[1,.35,.7],mat:"foam",tex:"bed",damp:.6}),J("cone","Traffic Cone","\u{1F53A}","Fun",{shape:"cyl",r:.35,rt:.06,h:.8,mat:"plastic",tex:"cone"}),J("tire","Tire","\u{1F6DE}","Fun",{shape:"cyl",r:.5,h:.35,mat:"rubber",tex:"tire",rot:[Math.PI/2,0,0]}),J("anvil","Anvil","\u2692\uFE0F","Fun",{shape:"compound",mat:"heavy",parts:[{t:"box",size:[.7,.25,.45],off:[0,-.25,0],color:3355443},{t:"box",size:[.35,.3,.3],off:[0,0,0],color:3355443},{t:"box",size:[1.1,.25,.4],off:[.1,.27,0],color:3815994}]}),J("bin","Trash Can","\u{1F5D1}\uFE0F","Fun",{shape:"cyl",r:.35,h:.95,mat:"metal",color:3897930}),J("snowball","Snowball","\u26AA","Fun",{shape:"sphere",r:.35,mat:"snow",splat:16777215}),J("cactus","Cactus","\u{1F335}","Fun",{shape:"compound",mat:"cactus",parts:[{t:"cyl",r:.28,h:2.2,off:[0,0,0],color:4165434},{t:"box",size:[.7,.3,.3],off:[-.45,.1,0],color:4165434},{t:"box",size:[.3,.8,.3],off:[-.7,.55,0],color:4165434},{t:"box",size:[.6,.3,.3],off:[.4,-.3,0],color:4165434},{t:"box",size:[.3,.6,.3],off:[.6,0,0],color:4165434}]}),J("lamp","Street Lamp","\u{1F4A1}","Stuff",{shape:"compound",mat:"metal",parts:[{t:"box",size:[.5,.15,.5],off:[0,-2.1,0],color:2961720},{t:"cyl",r:.08,h:4.2,off:[0,0,0],color:2961720},{t:"box",size:[.9,.12,.3],off:[.35,2.1,0],color:2961720},{t:"box",size:[.4,.12,.3],off:[.7,2,0],color:16774064}]}),J("mailbox","Mailbox","\u{1F4EE}","Stuff",{shape:"compound",mat:"metal",parts:[{t:"box",size:[.12,1.1,.12],off:[0,-.35,0],color:5592405},{t:"box",size:[.4,.4,.6],off:[0,.35,0],color:2776023}]}),J("pallet","Pallet","\u{1F7EB}","Build",{shape:"compound",mat:"wood",hp:300,collider:[1.6,.3,1.2],parts:[{t:"box",size:[1.6,.05,.2],off:[0,.125,-.5],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,.125,-.25],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,.125,0],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,.125,.25],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,.125,.5],tex:"plank"},{t:"box",size:[.14,.2,1.2],off:[-.7,0,0],tex:"log"},{t:"box",size:[.14,.2,1.2],off:[0,0,0],tex:"log"},{t:"box",size:[.14,.2,1.2],off:[.7,0,0],tex:"log"},{t:"box",size:[1.6,.05,.2],off:[0,-.125,-.5],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,-.125,.5],tex:"plank"}]}),J("pallet_big","Big Pallet","\u{1F7EB}","Build",{shape:"compound",mat:"wood",hp:300,collider:[2.4,.3,1.8],massMul:1.2,parts:[{t:"box",size:[2.4,.05,.2],off:[0,.125,-.75],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,.125,-.375],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,.125,0],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,.125,.375],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,.125,.75],tex:"plank"},{t:"box",size:[.14,.2,1.8],off:[-1.1,0,0],tex:"log"},{t:"box",size:[.14,.2,1.8],off:[0,0,0],tex:"log"},{t:"box",size:[.14,.2,1.8],off:[1.1,0,0],tex:"log"},{t:"box",size:[2.4,.05,.2],off:[0,-.125,-.75],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,-.125,.75],tex:"plank"}]}),J("pallet_stack","Pallet Stack (5)","\u{1F7EB}","Prefabs",{prefab:"pallets"}),J("fridge","Fridge","\u{1F9CA}","Stuff",{shape:"box",size:[.9,1.9,.8],mat:"appliance",tex:"fridge"}),J("piano","Piano","\u{1F3B9}","Stuff",{shape:"compound",mat:"wood",special:"piano",parts:[{t:"box",size:[2,1.3,.7],off:[0,0,-.15],tex:"piano"},{t:"box",size:[2,.12,.45],off:[0,-.05,.42],tex:"keys"},{t:"box",size:[.15,.6,.4],off:[-.92,-.42,.42],tex:"piano"},{t:"box",size:[.15,.6,.4],off:[.92,-.42,.42],tex:"piano"}]}),J("couch","Couch","\u{1F6CB}\uFE0F","Stuff",{shape:"compound",mat:"wood",parts:[{t:"box",size:[2.1,.5,.95],off:[0,0,0],tex:"couch"},{t:"box",size:[2.1,.65,.25],off:[0,.55,-.35],tex:"couch"},{t:"box",size:[.25,.35,.95],off:[-.95,.42,0],tex:"couch"},{t:"box",size:[.25,.35,.95],off:[.95,.42,0],tex:"couch"}]}),J("table","Table","\u{1FA91}","Stuff",{shape:"compound",mat:"wood",parts:[{t:"box",size:[1.6,.12,1],off:[0,.38,0],tex:"plank"},{t:"box",size:[.12,.7,.12],off:[-.7,-.03,-.4],tex:"plank"},{t:"box",size:[.12,.7,.12],off:[.7,-.03,-.4],tex:"plank"},{t:"box",size:[.12,.7,.12],off:[-.7,-.03,.4],tex:"plank"},{t:"box",size:[.12,.7,.12],off:[.7,-.03,.4],tex:"plank"}]}),J("bed","Bed","\u{1F6CF}\uFE0F","Stuff",{shape:"compound",mat:"wood",parts:[{t:"box",size:[1.2,.3,2.2],off:[0,0,0],tex:"plank"},{t:"box",size:[1.1,.25,2],off:[0,.27,.05],tex:"bed"},{t:"box",size:[1.2,.8,.12],off:[0,.3,-1.05],tex:"plank"}]}),J("car","Car","\u{1F697}","Stuff",{shape:"compound",mat:"car",parts:[{t:"box",size:[3.6,.7,1.8],off:[0,0,0],tex:"car"},{t:"box",size:[2,.65,1.6],off:[-.25,.67,0],tex:"window"},{t:"cyl",r:.38,h:.3,off:[1.1,-.35,.85],rot:[Math.PI/2,0,0],color:1907997},{t:"cyl",r:.38,h:.3,off:[-1.1,-.35,.85],rot:[Math.PI/2,0,0],color:1907997},{t:"cyl",r:.38,h:.3,off:[1.1,-.35,-.85],rot:[Math.PI/2,0,0],color:1907997},{t:"cyl",r:.38,h:.3,off:[-1.1,-.35,-.85],rot:[Math.PI/2,0,0],color:1907997}]}),J("vending","Vending Machine","\u{1F964}","Stuff",{shape:"compound",mat:"appliance",parts:[{t:"box",size:[1.1,2,.9],off:[0,0,0],color:13771562},{t:"box",size:[.7,1.2,.05],off:[-.12,.25,.46],tex:"window"}]}),J("dummy","Dummy","\u{1F9CD}","People",{dummy:{variant:"normal"}}),J("dummy_big","Big Dummy","\u{1F9CD}","People",{dummy:{variant:"big"}}),J("dummy_tiny","Tiny Dummy","\u{1F9D2}","People",{dummy:{variant:"tiny"}}),J("dummy_robot","Heavy Robot","\u{1F916}","People",{dummy:{variant:"robot"}}),J("dummy_bouncy","Bouncy Dummy","\u{1F938}","People",{dummy:{variant:"bouncy"}}),J("dummy_zombie","Zombie (chases you)","\u{1F9DF}","People",{dummy:{variant:"zombie"}}),J("dummy_ninja","Ninja (fast)","\u{1F977}","People",{dummy:{variant:"ninja"}}),J("dummy_balloon","Balloon Dummy","\u{1F388}","People",{dummy:{variant:"balloon"}}),J("dummy_crowd","Crowd of 6","\u{1F465}","People",{dummy:{variant:"crowd"}}),J("pf_wall","Brick Wall","\u{1F9F1}","Prefabs",{prefab:"wall"}),J("pf_tower","Crate Tower","\u{1F3D7}\uFE0F","Prefabs",{prefab:"tower"}),J("pf_pyramid","Crate Pyramid","\u{1F53A}","Prefabs",{prefab:"pyramid"}),J("pf_domino","Domino Row","\u{1F062}","Prefabs",{prefab:"domino"}),J("pf_jenga","Jenga Tower","\u{1F5FC}","Prefabs",{prefab:"jenga"}),J("pf_glassroom","Glass Room","\u{1F3E0}","Prefabs",{prefab:"glassroom"}),J("pf_bowling","Bowling Set","\u{1F3B3}","Prefabs",{prefab:"bowling"}),J("pf_tntstack","TNT Stack","\u{1F9E8}","Prefabs",{prefab:"tntstack"}),J("pf_minefield","Mine Field","\u26A0\uFE0F","Prefabs",{prefab:"minefield"}),J("pf_ballpit","Ball Pit Drop","\u{1F535}","Prefabs",{prefab:"ballpit"}),J("pf_house","Wooden House","\u{1F3E0}","Prefabs",{prefab:"house"}),J("pf_bridge","Bridge","\u{1F309}","Prefabs",{prefab:"bridge"}),J("pf_skyscraper","Skyscraper","\u{1F3E2}","Prefabs",{prefab:"skyscraper"}),J("pf_fort","Log Fort","\u{1F6E1}\uFE0F","Prefabs",{prefab:"fort"}),J("pf_arch","Stone Arch","\u26E9\uFE0F","Prefabs",{prefab:"arch"}),J("pf_stairs","Crate Stairs","\u{1FA9C}","Prefabs",{prefab:"stairs"}),J("pf_igloo","Igloo","\u{1F6D6}","Prefabs",{prefab:"igloo"}),J("pf_snowman","Snowman","\u26C4","Prefabs",{prefab:"snowman"}),J("pf_castle","Stone Castle","\u{1F3F0}","Big Builds",{prefab:"castle"}),J("pf_bigtower","Big Brick Tower","\u{1F5FC}","Big Builds",{prefab:"bigtower"}),J("pf_bigpyramid","Sandstone Pyramid","\u{1F53A}","Big Builds",{prefab:"bigpyramid"}),J("pf_greatwall","Great Wall","\u{1F9F1}","Big Builds",{prefab:"greatwall"}),J("pf_colosseum","Colosseum","\u{1F3DF}\uFE0F","Big Builds",{prefab:"colosseum"}),J("pf_glasstower","Glass Tower","\u{1F3D9}\uFE0F","Big Builds",{prefab:"glasstower"})],Kt=Object.fromEntries(bs.map(i=>[i.id,i]));Kt.pin={id:"pin",name:"Pin",shape:"cyl",r:.13,rt:.08,h:.8,mat:"plastic",color:16777215};Kt.chunk={id:"chunk",name:"Chunk",shape:"box",size:[1,1,1],mat:"wood"};var NM=1;function qm(i){if(i.shape==="box")return i.size[0]*i.size[1]*i.size[2];if(i.shape==="sphere")return 4.18*i.r**3;if(i.shape==="cyl"){let t=(i.r+(i.rt??i.r))/2;return Math.PI*t*t*i.h}return i.shape==="compound"?i.parts.reduce((t,e)=>t+qm({shape:e.t,...e}),0):1}function Om(i,t,e){return i==="box"?new ni(new b(t.size[0]/2*e,t.size[1]/2*e,t.size[2]/2*e)):i==="sphere"?new Nn(t.r*e):new Zi((t.rt??t.r)*e,t.r*e,t.h*e,10)}function km(i,t){return i==="box"?_d("box",t.size[0],t.size[1],t.size[2]):i==="sphere"?_d("sphere",t.r,t.detail??1):_d("cyl",t.r,t.h,t.rt??t.r)}function Xm(i,t,e){if(t.collider){let n=t.collider;i.addShape(new ni(new b(n[0]/2*e,n[1]/2*e,n[2]/2*e)))}else if(t.shape==="compound")for(let n of t.parts){let s=new en;n.rot&&s.setFromEuler(n.rot[0],n.rot[1],n.rot[2]),i.addShape(Om(n.t,n,e),new b(n.off[0]*e,n.off[1]*e,n.off[2]*e),s)}else i.addShape(Om(t.shape,t,e))}function Ym(i,t){if(i.shape==="compound"){let n=new tn;for(let s of i.parts){let o=new Et(km(s.t,s),bd(i.mat,s.tex,s.color??t));o.position.set(...s.off),s.rot&&o.rotation.set(...s.rot),o.castShadow=o.receiveShadow=!0,n.add(o)}return n}let e=new Et(km(i.shape,i),bd(i.mat,i.tex,t??i.color));return e.castShadow=!0,e.receiveShadow=!0,e}var LM=new we({color:16777215,transparent:!0,opacity:.28,depthWrite:!1});function Md(i){let t=Ym(i);return t.traverse(e=>{e.isMesh&&(e.material=LM,e.castShadow=!1,e.receiveShadow=!1)}),t}function Gt(i,t,e={}){let n=vi[i.mat]||vi.wood,s=e.scale??1,o=re((e.mass??qm(i)*n.density*(i.massMul??1))*s**3,.08,3e3),r=new it({mass:o,material:y.mats[i.mat]||y.mats.wood,collisionFilterGroup:Be.DYN,linearDamping:i.damp??.02,angularDamping:i.damp??.08,allowSleep:!0,sleepSpeedLimit:.25,sleepTimeLimit:.8});Xm(r,i,s),r.position.set(t.x,t.y,t.z),e.quat?r.quaternion.set(e.quat.x,e.quat.y,e.quat.z,e.quat.w):i.rot&&r.quaternion.setFromEuler(i.rot[0],i.rot[1],i.rot[2]),e.vel&&r.velocity.set(e.vel.x,e.vel.y,e.vel.z),e.angVel&&r.angularVelocity.set(e.angVel.x,e.angVel.y,e.angVel.z);let a=Ym(i,e.color);a.scale.setScalar(s);let l={id:NM++,kind:"item",def:i,mat:n,body:r,mesh:a,hp:i.explosive?i.explosive.hp:i.hp??n.hp,gen:e.gen??0,born:y.time,spawned:!!e.spawned,scale:s,frozen:0,antigrav:0,thrusters:[],wet:!1};return r.ent=l,r.addEventListener("collide",BM),y.world.addBody(r),y.scene.add(a),y.ents.add(l),e.sleep&&r.sleep(),Ed(l),FM(),l}function Ed(i){i.mesh.position.copy(i.body.position),i.mesh.quaternion.copy(i.body.quaternion)}function FM(){if(y.ents.size<650)return;let i=null;for(let t of y.ents)t.kind==="item"&&t.gen>0&&(!i||t.born<i.born)&&(i=t);i&&We(i,!0)}function We(i,t=!1){if(!(!i||i.dead)){i.dead=!0,y.onRemove&&y.onRemove(i);for(let e=y.ropes.length-1;e>=0;e--){let n=y.ropes[e];(n.a===i.body||n.b===i.body)&&so(n)}for(let e=y.welds.length-1;e>=0;e--){let n=y.welds[e];(n.bodyA===i.body||n.bodyB===i.body)&&(y.world.removeConstraint(n),y.welds.splice(e,1))}y.world.removeBody(i.body),y.scene.remove(i.mesh),y.ents.delete(i),t||ed(i.body.position,4)}}function BM(i){let t=i.target.ent;if(!t||t.dead)return;let e=Math.abs(i.contact.getImpactVelocityAlongNormal()),n=t.def,s=i.target.position;if(e>3.5&&lt.impact(t.frozen?"ice":n.mat,e,s),n.special==="duck"&&e>2&&lt.squeak(s),n.special==="piano"&&e>3&&lt.piano(e,s),n.special==="balloon"&&e>9){Wn(()=>sa(t));return}if(n.explosive){let r=n.explosive,a=i.body;r.mine?a&&(a.type===it.DYNAMIC||a.isPlayer)&&y.time-t.born>1.5&&Wn(()=>ji(t,.05)):e>r.impact&&Wn(()=>ji(t,.02));return}if(t.hp===1/0)return;let o=t.mat.thresh*(t.frozen?.4:1);if(e>o){let r=i.body.type===it.DYNAMIC?i.body.mass:1e3,a=re(r/t.body.mass,.3,2.5),l=(e-o)*7*a;Wn(()=>ws(t,l,null))}}function ws(i,t,e){if(!i||i.dead)return;if(i.kind==="ragpart"){i.dummy.hurt(t,e);return}i.frozen&&(t*=4);let n=i.def;if(n.special==="balloon"){sa(i);return}if(n.explosive){i.hp-=t,i.hp<=0&&ji(i,n.explosive.special?0:F(.05,.15));return}if(i.hp===1/0){i.frozen&&t>30&&ia(i,e);return}i.hp-=t,i.hp<=0&&ia(i,e)}var ea=new Qt;function ia(i,t,e=0){if(i.dead)return;let n=i.def,s=i.frozen?vi.ice:i.mat,o=Pt(i.body.position),r=Pt(i.body.velocity),a=n.splat??i.mesh.material?.color?.getHex?.()??s.color;y.stats.destroyed++,y.debugBreaks&&y.debugBreaks.push(n.id+"@"+o.toArray().map(u=>u.toFixed(1)).join(","));let l=DM(i.body);We(i);let c=i.frozen?"shards":s.brk;if(c==="shards"){lt.shatter(o);for(let u=0;u<26;u++)ae({pos:o.clone().add(new _(F(-.5,.5),F(-.5,.5),F(-.5,.5))),vel:r.clone().add(new _(F(-4,4),F(0,5),F(-4,4))),color:s.color,size:F(.08,.22),life:F(.8,1.5),gravity:18,opacity:.8,spin:8});n.mat==="crystal"&&ii(o,20,6);return}if(c==="splat"){lt.splat(o),Xn(o,n.splat??16726858,24,.22,7),Xn(o,3111458,8,.15,5);return}if(["stone","brick","rock","concrete"].includes(n.mat)?lt.crumble(o):lt.crack(o),Xn(o,s.color,10,.18,5),sn(o,2,10193776,.5),n.special==="present"){let u=["ball","duck","melon","balloon","dice","tnt_mini","firework","gold","beachball","crystal","pumpkin","dummy_tiny","jelly"];ii(o,40,8);for(let f=0;f<3;f++){let m=u[Math.random()*u.length|0];Bn(m,o.clone().add(new _(F(-.5,.5),.5+f*.6,F(-.5,.5))),{spawned:!0,vel:new _(F(-3,3),5,F(-3,3))})}return}let h=[];if(n.shape==="box"){let u=i.scale,f=n.size.map(x=>x*u),m=f.map(x=>x>=(s.min??.25)*2?2:1);if(m[0]*m[1]*m[2]>1&&i.gen<3){let x=[f[0]/m[0],f[1]/m[1],f[2]/m[2]];ea.copy(i.mesh.quaternion);for(let g=0;g<m[0];g++)for(let p=0;p<m[1];p++)for(let v=0;v<m[2];v++){let M=new _((g+.5)*x[0]-f[0]/2,(p+.5)*x[1]-f[1]/2,(v+.5)*x[2]-f[2]/2).applyQuaternion(ea);h.push({def:{...Kt.chunk,size:x.map(w=>w*.98),mat:n.mat,tex:n.tex,color:n.color==="random"?void 0:n.color,hp:void 0},pos:o.clone().add(M),off:M})}}}else if(n.shape==="compound"&&i.gen<1){let u=i.scale;ea.copy(i.mesh.quaternion);for(let f of n.parts){let m=new _(...f.off).multiplyScalar(u).applyQuaternion(ea),x=f.t==="box"?{...Kt.chunk,size:f.size.map(g=>g*u),mat:n.mat,tex:f.tex,color:f.color}:{id:"chunk",shape:f.t,r:f.r*u,h:(f.h??1)*u,rt:f.rt?f.rt*u:void 0,mat:n.mat,color:f.color,tex:f.tex};h.push({def:x,pos:o.clone().add(m),off:m,quat:ea.clone().multiply(new Qt().setFromEuler(new Ve(...f.rot||[0,0,0])))})}}let d=[];for(let u of h){let f=u.off.clone().normalize().multiplyScalar(F(1,3)+e);t&&f.addScaledVector(t,2+e*.5);let m=Gt(u.def,u.pos,{quat:u.quat||i.mesh.quaternion,vel:r.clone().add(f),angVel:new _(F(-3,3),F(-3,3),F(-3,3)),gen:i.gen+1,spawned:!0});m.hp=Math.max(8,(s.hp===1/0?100:s.hp)*.5**(i.gen+1)),d.push(m)}zM(l,d)}function DM(i){let t={ropes:[],welds:[]};for(let e of y.ropes)e.a===i?t.ropes.push({r:e,side:"a",wp:Pt(i.pointToWorldFrame(e.la))}):e.b===i&&t.ropes.push({r:e,side:"b",wp:Pt(i.pointToWorldFrame(e.lb))});for(let e of y.welds)e.bodyA===i?t.welds.push({other:e.bodyB}):e.bodyB===i&&t.welds.push({other:e.bodyA});return t}function zM(i,t){if(!t.length||!i.ropes.length&&!i.welds.length)return;let e=n=>{let s=null,o=1e9;for(let r of t){let a=Pt(r.body.position).distanceTo(n);a<o&&(o=a,s=r)}return s};for(let{r:n,side:s,wp:o}of i.ropes){let r=e(o),a=s==="a"?n.b:n.a;if(!y.world.bodies.includes(a))continue;let l=r.body.pointToLocalFrame(new b(o.x,o.y,o.z));s==="a"?si(r.body,l,a,n.lb,n.len,n.strand.mat.color.getHex()):si(a,n.la,r.body,l,n.len,n.strand.mat.color.getHex())}for(let{other:n}of i.welds){if(!y.world.bodies.includes(n))continue;let s=Pt(n.position);bi(e(s).body,n)}}function ji(i,t=0){if(!i||i.dead||i.detonating)return;i.detonating=!0;let e=i.def.explosive;if(e.special==="gas"){UM(i);return}if(e.special==="firework"){OM(i);return}sr(t,()=>{if(i.dead)return;let n=Pt(i.body.position);We(i,!0),Fn(n,e.power*i.scale**1.5,{fire:e.fire})})}function UM(i){lt.hiss(i.body.position),i.thrusters.push({lp:new b(0,-.5*i.scale,0),ld:new b(0,1,0),t:1.8,power:45,wobble:!0,end:()=>{if(i.dead)return;let t=Pt(i.body.position);We(i,!0),Fn(t,.8)}}),i.body.angularVelocity.set(F(-4,4),F(-4,4),F(-4,4)),i.body.wakeUp()}function OM(i){let t=Pt(i.body.position);We(i,!0),rc(t,5)}function rc(i,t=1){for(let e=0;e<t;e++)sr(e*.18,()=>{let n=i.clone(),s=new _(F(-4,4),F(22,30),F(-4,4));lt.whistle(1.2,n),y.projectiles.push({pos:n,vel:s,t:0,life:F(.9,1.3),gravity:6,trail:o=>ae({pos:o,vel:new _(F(-1,1),-2,F(-1,1)),color:16765562,size:.12,life:.5,glow:!0,add:!0,gravity:2}),end:o=>{ii(o,70,14),lt.pop(o),Fn(o,.25,{quiet:!0})}})})}var na=0,Vm=-9;function Fn(i,t=1,e={}){let n=7*Math.pow(t,.62),s=22*Math.pow(t,.35),o=Math.min(Math.pow(t,.55),3.2);if(Lm(i,o),e.fire)for(let c=0;c<18;c++)ae({pos:i,vel:new _(F(-8,8),F(5,14),F(-8,8)),color:16742938,size:.3,life:F(1.5,2.5),glow:!0,add:!0,gravity:14,drag:.2});i.y<y.waterY+1.5&&ud(i,30,1.6),y.crater&&!e.quiet&&y.crater(i,t),lt.explosion(Math.min(1.5,t),i),t>=3.5&&(cr(i,400,16777215),document.getElementById("whiteflash").classList.add("on"),setTimeout(()=>document.getElementById("whiteflash").classList.remove("on"),120));let r=y.player?y.player.pos().distanceTo(i):99;y.shake=Math.min(2.5,y.shake+Math.max(0,t*1.4-r/(18*Math.sqrt(t)))),y.stats.booms++,y.lastBoom.pos.copy(i),y.lastBoom.time=y.time,y.time-Vm<.7?(na++,na>=2&&En(`CHAIN x${na+1}!`,i.clone().add(new _(0,2,0)),"#ffcf3a",26+na*2)):na=0,Vm=y.time;for(let c of[...y.dummies])c.state==="standing"&&c.origin().distanceTo(i)<n*1.1&&c.knock(null);let a=[],l=new _;for(let c of[...y.world.bodies]){let h=c.ent;if(h&&h.frozen&&Ji(h),c.type!==it.DYNAMIC)continue;l.set(c.position.x-i.x,c.position.y-i.y,c.position.z-i.z);let d=l.length();if(d>n)continue;let u=1-d/n;l.y+=.6,l.normalize();let f=re(Math.pow(25/c.mass,.3),.2,1.5),m=s*u*f;c.velocity.x+=l.x*m,c.velocity.y+=l.y*m,c.velocity.z+=l.z*m,c.angularVelocity.x+=F(-8,8)*u,c.angularVelocity.y+=F(-8,8)*u,c.angularVelocity.z+=F(-8,8)*u,c.wakeUp(),h&&!h.dead&&a.push([h,u,l.clone()])}if(y.player&&r<n){let c=1-r/n,h=y.player.pos().sub(i);h.y+=.8,h.normalize(),y.player.fling(h.multiplyScalar(s*c*.9))}for(let[c,h,d]of a){if(c.dead)continue;if((e.fire&&h>.15||h>.5&&Math.random()<.3&&!e.quiet)&&Ki(c,8),c.kind==="ragpart"){c.partName==="torso"&&c.dummy.hurt(h*115*Math.sqrt(t),d);continue}if(c.def.explosive){ji(c,F(.08,.22));continue}let u=140*Math.sqrt(t)*h;c.hp!==1/0&&c.hp-u<=0?ia(c,d,s*h*.4):ws(c,u,d)}ed(i,n*1.5)}function sa(i){i.dead||(lt.pop(i.body.position),Xn(Pt(i.body.position),i.mesh.material.color.getHex(),10,.12,4),We(i,!0))}var Zm=new Je(1,1,1,4,1,!0);Zm.translate(0,.5,0);var _s=class{constructor(t=16777215,e=.025,n=12,s=!1){this.n=n,this.radius=e,this.mat=s?new we({color:t}):new fe({color:t,roughness:.9}),this.segs=[];for(let o=0;o<n;o++){let r=new Et(Zm,this.mat);r.frustumCulled=!1,r.castShadow=!s,y.scene.add(r),this.segs.push(r)}this.pts=Array.from({length:n+1},()=>new _)}update(t,e,n=0,s=null){let o=this.n;for(let l=0;l<=o;l++){let c=l/o,h=this.pts[l].copy(t).lerp(e,c),d=4*c*(1-c);h.y-=n*d,s&&h.addScaledVector(s,Math.sin(c*Math.PI*3+y.time*30)*d)}let r=new _(0,1,0),a=new _;for(let l=0;l<o;l++){let c=this.segs[l];a.subVectors(this.pts[l+1],this.pts[l]);let h=a.length()+.001;c.position.copy(this.pts[l]),c.quaternion.setFromUnitVectors(r,a.divideScalar(h)),c.scale.set(this.radius,h,this.radius),c.visible=!0}}setColor(t){this.mat.color.set(t)}hide(){for(let t of this.segs)t.visible=!1}dispose(){for(let t of this.segs)y.scene.remove(t)}};function si(i,t,e,n,s,o=15260864){let r={a:i,la:t,b:e,lb:n,len:s,strand:new _s(o,.03,10)};return y.ropes.push(r),r}function so(i){let t=y.ropes.indexOf(i);t>=0&&y.ropes.splice(t,1),i.strand.dispose()}function bi(i,t){let e=new Vl(i,t,{maxForce:1e5});return e.collideConnected=!1,y.world.addConstraint(e),y.welds.push(e),i.wakeUp(),t.wakeUp(),e}var ic=new b,sc=new b,no=new b,io=new b,dn=new b,Hm=new b;function Gm(i,t,e){return t.vsub(i.position,Hm),i.angularVelocity.cross(Hm,e),e.vadd(i.velocity,e),e}var kM=.35,VM=2.2,HM=3.5,GM=5,WM=Math.exp(-.9/60),oc=new Set;function Sd(){oc.clear();for(let t of y.ropes)oc.add(t.a),oc.add(t.b);for(let t=y.ropes.length-1;t>=0;t--){let e=y.ropes[t];e.a.pointToWorldFrame(e.la,ic),e.b.pointToWorldFrame(e.lb,sc),sc.vsub(ic,dn);let n=dn.length();if(n>e.len*5+10){so(e);continue}if(n<=e.len||n<1e-4)continue;dn.scale(1/n,dn),Gm(e.a,ic,no),Gm(e.b,sc,io);let s=(io.x-no.x)*dn.x+(io.y-no.y)*dn.y+(io.z-no.z)*dn.z,o=e.a.type===it.DYNAMIC?e.a.mass:1e9,r=e.b.type===it.DYNAMIC?e.b.mass:1e9,a=Math.min(o,r,400),l=Math.min(a*(300*(n-e.len)+25*s),a*600);if(l<=0)continue;let c=io.x-no.x-dn.x*s,h=io.y-no.y-dn.y*s,d=io.z-no.z-dn.z*s,u=a*kM;o<1e9&&(e.a.applyForce(new b(dn.x*l+c*u,dn.y*l+h*u,dn.z*l+d*u),ic.vsub(e.a.position)),e.a.wakeUp()),r<1e9&&(e.b.applyForce(new b(-dn.x*l-c*u,-dn.y*l-h*u,-dn.z*l-d*u),sc.vsub(e.b.position)),e.b.wakeUp())}for(let t of y.ents){let e=t.body;if(e.type!==it.DYNAMIC)continue;let n=y.waterY-e.position.y;if(n>-.3){let s=re((n+.3)/.8,0,1),o=t.kind==="ragpart"?t.dummy.buoy:t.frozen?1.4:t.mat.buoy;e.applyForce(new b(-e.position.x*.02*e.mass,e.mass*9.82*o*s,-e.position.z*.02*e.mass)),e.velocity.scale(1-.02*s,e.velocity),e.angularVelocity.scale(1-.02*s,e.angularVelocity)}if(t.def&&t.def.special==="balloon"){let s=oc.has(e),o=s?t.lift??14:Math.min(t.lift??14,e.mass*VM),a=re(((s?GM:HM)-e.velocity.y)/1.5,0,1);e.applyForce(new b(0,e.mass*9.82+o*a,0)),e.velocity.scale(WM,e.velocity),e.angularVelocity.scale(.97,e.angularVelocity)}t.antigrav>0&&(e.applyForce(new b(0,e.mass*9.82*1.12,0)),e.velocity.scale(.99,e.velocity));for(let s of t.thrusters){let o=e.quaternion.vmult(s.ld),r=Math.min(e.mass*s.power,3e4);e.applyForce(new b(o.x*r,o.y*r,o.z*r),e.quaternion.vmult(s.lp)),s.wobble&&(e.angularVelocity.x+=F(-.4,.4),e.angularVelocity.z+=F(-.4,.4))}}if(y.extraForces)for(let t of y.extraForces)t()}function Td(i){for(let t of[...y.ents]){if(t.dead)continue;let e=t.body;if(!Number.isFinite(e.position.x+e.position.y+e.position.z)){t.kind==="ragpart"?t.dummy.respawn():We(t,!0);continue}if(e.position.y<(y.killY??-30)-15||Math.abs(e.position.x)>400||Math.abs(e.position.z)>400){t.kind==="ragpart"?t.dummy.respawn():We(t,!0);continue}t.kind!=="ragpart"&&e.sleepState!==it.SLEEPING&&e.type===it.DYNAMIC&&Ed(t),t.burn>0&&ZM(t,i);let n=e.position.y<y.waterY;n&&!t.wet&&e.velocity.length()>4&&(ud(Pt(e.position),10,re(e.mass/40,.5,1.6)),lt.splash(e.position)),t.wet=n,t.frozen>0&&(t.frozen-=i,t.frozen<=0&&Ji(t)),t.antigrav>0&&(t.antigrav-=i,Math.random()<.3&&ae({pos:Pt(e.position),vel:new _(F(-1,1),-1,F(-1,1)),color:13073919,size:.12,life:.6,glow:!0,add:!0,gravity:0}));for(let s=t.thrusters.length-1;s>=0;s--){let o=t.thrusters[s];o.t-=i;let r=Pt(e.pointToWorldFrame(o.lp)),a=Pt(e.quaternion.vmult(o.ld));Math.random()<.8&&ae({pos:r,vel:a.clone().multiplyScalar(-F(6,10)),color:Math.random()<.5?16757575:16735770,size:F(.15,.3),life:.3,glow:!0,add:!0,gravity:0,drag:2}),o.mesh&&(o.mesh.visible=!0),o.t<=0&&(t.thrusters.splice(s,1),o.mesh&&t.mesh.remove(o.mesh),o.end&&o.end())}if(t.fuse!==void 0&&t.fuse!==null){t.fuse-=i;let s=Math.sin(y.time*(t.fuse<1?40:18))>0;t.mesh.scale.setScalar(t.scale*(s?1.08:1)),Math.random()<.5&&ae({pos:Pt(e.position).add(new _(0,.5*t.scale,0)),vel:new _(F(-1,1),2,F(-1,1)),color:16769162,size:.08,life:.3,glow:!0,add:!0,gravity:2}),lt.fuse(e.position),t.fuse<=0&&(t.fuse=null,t.onFuse?t.onFuse():ji(t,0))}if(t.def.special==="balloon"&&e.position.y>120&&sa(t),t.gen>=2&&y.time-t.born>25){let s=y.time-t.born-25;t.mesh.scale.setScalar(t.scale*Math.max(.01,1-s)),s>=1&&We(t,!0)}t.update&&t.update(i)}for(let t of y.ropes){let e=Pt(t.a.pointToWorldFrame(t.la)),n=Pt(t.b.pointToWorldFrame(t.lb)),s=e.distanceTo(n);t.strand.update(e,n,Math.max(0,(t.len-s)*.5))}}function Ad(i,t=12){if(i.kind==="ragpart"){i.dummy.freeze(t);return}if(i.frozen){i.frozen=t;return}i.frozen=t,i.origMass=i.body.mass,i.body.type=it.STATIC,i.body.mass=0,i.body.updateMassProperties(),i.body.velocity.setZero(),i.body.angularVelocity.setZero(),i.mesh.traverse(e=>{e.isMesh&&(e.userData.orig=e.material,e.material=PM)}),yn(Pt(i.body.position),new _(0,1,0),12580095,12,4)}function Ji(i){if(!(!i.frozen&&i.body.type===it.DYNAMIC)){if(i.kind==="ragpart"){i.dummy.unfreeze();return}i.frozen=0,i.body.type=it.DYNAMIC,i.body.mass=i.origMass||10,i.body.updateMassProperties(),i.body.wakeUp(),i.mesh.traverse(t=>{t.isMesh&&t.userData.orig&&(t.material=t.userData.orig,t.userData.orig=null)})}}function ac(i,t){if(i.kind!=="item")return!1;let e=re(i.scale*t,.25,6);if(Math.abs(e-i.scale)<.01)return!1;let n=e/i.scale,s=i.body;for(;s.shapes.length;)s.removeShape(s.shapes[0]);return Xm(s,i.def,e),s.type===it.DYNAMIC?s.mass=re(s.mass*n**3,.08,5e3):i.origMass=re((i.origMass||10)*n**3,.08,5e3),s.updateMassProperties(),s.aabbNeedsUpdate=!0,s.wakeUp(),i.scale=e,i.mesh.scale.setScalar(e),n>1&&(s.position.y+=.3*n),!0}function Rd(i){let t=new St().setHSL(Math.random(),.85,.55);i.mesh.traverse(e=>{e.isMesh&&(e.material=e.material.clone(),e.material.color.copy(t))})}function Bn(i,t,e={}){let n=typeof i=="string"?Kt[i]:i;if(!n)return null;if(n.dummy)return qM(n.dummy.variant,t,e);if(n.prefab)return jt(n.prefab,t,e.yaw??0,e.spawned);let s=t.clone();return e.onGround&&(s.y+=oa(n)*(e.scale??1)+.02),Gt(n,s,e)}function oa(i){return i.shape==="box"?i.rot?Math.max(...i.size)/2:i.size[1]/2:i.shape==="sphere"?i.r:i.shape==="cyl"?i.rot?i.r:i.h/2:i.collider?i.collider[1]/2:i.shape==="compound"?.9:.5}function qM(i,t,e){if(i==="crowd"){for(let n=0;n<6;n++)Yn(t.clone().add(new _(F(-2.5,2.5),0,F(-2.5,2.5))),"normal",e);return null}return Yn(t,i,e)}function Ge(i,t,e,n,s){let o=Math.cos(s),r=Math.sin(s);return new _(i.x+t*o+n*r,i.y+e,i.z-t*r+n*o)}function hr(i){return new Qt().setFromAxisAngle(new _(0,1,0),i)}var _i=i=>1+i*2.004,Wm={castle(i,t){for(let o=0;o<3;o++)for(let r=0;r<7;r++)for(let a=0;a<7;a++)r>0&&r<6&&a>0&&a<6||a===0&&r===3||i("stone_big",(r-3)*2.01,_i(o),10+(a-3)*2.01);for(let[o,r]of[[0,0],[6,0],[0,6],[6,6]])for(let a=3;a<5;a++)i("stone_big",(o-3)*2.01,_i(a),10+(r-3)*2.01);for(let o=1;o<6;o+=2)for(let r of[0,6])r===0&&o===3||i("stone",(o-3)*2.01,_i(3)-.5,10+(r-3)*2.01),i("stone",(r-3)*2.01,_i(3)-.5,10+(o-3)*2.01)},bigtower(i){for(let e=0;e<9;e++)for(let n=0;n<3;n++)for(let s=0;s<3;s++)n===1&&s===1||i("brick_big",(n-1)*2.01,_i(e),5+(s-1)*2.01)},bigpyramid(i){for(let e=0;e<5;e++){let n=5-e,s=(n-1)/2;for(let o=0;o<n;o++)for(let r=0;r<n;r++)i("sand_big",(o-s)*2.01,_i(e),7+(r-s)*2.01)}},greatwall(i){for(let s=0;s<3;s++)for(let o=0;o<10;o++)i("stone_big",(o-4.5)*2.01,_i(s),5);for(let s=0;s<10;s+=2)i("stone",(s-4.5)*2.01,_i(3)-.5,5)},colosseum(i,t){for(let o=0;o<3;o++)for(let r=0;r<26;r++){let a=r/26*Math.PI*2;r===0||r===26/2||i(o===2?"marble_big":"sand_big",Math.sin(a)*9.6,_i(o),13-Math.cos(a)*9.6,{quat:hr(t-a)})}},glasstower(i){for(let e=0;e<4;e++){let n=e*4.16;for(let s=0;s<2;s++)for(let o=0;o<2;o++)for(let r=0;r<2;r++)i("glass_big",(o-.5)*2.01,n+_i(s),4+(r-.5)*2.01);for(let s=0;s<2;s++)for(let o=0;o<2;o++)i("steel_plate",(s-.5)*2.01,n+4.008+.075,4+(o-.5)*2.01)}}};function jt(i,t,e=0,n=!0,s=!1){let o={spawned:n,sleep:s,quat:hr(e)},r=(a,l,c,h,d={})=>Gt(Kt[a],Ge(t,l,c,h,e),{...o,...d});if(i==="wall")for(let a=0;a<6;a++)for(let l=0;l<6;l++)r("brick",(l-2.5)*.92+a%2*.46-.23,.225+a*.455,0);else if(i==="tower")for(let a=0;a<6;a++)r("crate",0,.5+a*1.001,0);else if(i==="pyramid"){let a=0;for(let l=4;l>=1;l--){for(let c=0;c<l;c++)for(let h=0;h<l;h++)r("crate",(c-(l-1)/2)*1.01,.5+a,(h-(l-1)/2)*1.01);a+=1.001}}else if(i==="domino")for(let a=0;a<16;a++)r("domino",0,.6,-1.5-a*.75);else if(i==="jenga")for(let a=0;a<14;a++)for(let l=-1;l<=1;l++)a%2?r("plank",l*.52,.1+a*.201,0,{quat:hr(e+Math.PI/2)}):r("plank",0,.1+a*.201,l*.52);else if(i==="glassroom"){r("glass",0,1,-1.06),r("glass",0,1,1.06),r("glass",-1.06,1,0,{quat:hr(e+Math.PI/2)}),r("glass",1.06,1,0,{quat:hr(e+Math.PI/2)});let a={...Kt.slab,size:[2.3,.3,1.16]};Gt(a,Ge(t,0,2.16,-.58,e),o),Gt(a,Ge(t,0,2.16,.58,e),o),Yn(Ge(t,0,0,0,e),"normal",{spawned:n})}else if(i==="bowling"){let a=0;for(let l=0;l<4;l++)for(let c=0;c<=l;c++)r("pin",(c-l/2)*.45,.41,-6-l*.42),a++;r("bowling",0,.3,2)}else if(i==="tntstack")for(let a=0;a<3;a++)for(let l=0;l<3-a;l++)for(let c=0;c<3-a;c++)r("tnt",(l-(2-a)/2)*.92,.45+a*.91,(c-(2-a)/2)*.92);else if(i==="minefield")for(let a=0;a<12;a++)r("mine",F(-6,6),.08,F(-6,6)-8);else if(i==="house"){let a=(l,c,h)=>({...Kt.chunk,size:[l,c,h],mat:"wood",tex:"plank"});Gt(a(1.8,2.4,.2),Ge(t,-1.6,1.2,2,e),o),Gt(a(1.8,2.4,.2),Ge(t,1.6,1.2,2,e),o),Gt(a(1.4,.6,.2),Ge(t,0,2.1,2,e),o),Gt(a(5,2.4,.2),Ge(t,0,1.2,-2,e),o),Gt(a(.2,2.4,3.8),Ge(t,-2.4,1.2,0,e),o),Gt(a(.2,2.4,3.8),Ge(t,2.4,1.2,0,e),o),Gt(a(5.4,.2,4.6),Ge(t,0,2.52,0,e),o),r("table",0,.45,-.6)}else if(i==="bridge"){for(let l of[-4.5,4.5])for(let c of[-1,1])for(let h=0;h<3;h++)r("stone",c,.5+h*1.005,l);let a={...Kt.chunk,size:[.3,.3,10.2],mat:"wood",tex:"log"};Gt(a,Ge(t,-1,3.17,0,e),o),Gt(a,Ge(t,1,3.17,0,e),o);for(let l=0;l<18;l++)r("plank",0,3.43,-4.4+l*.52)}else if(i==="skyscraper")for(let a=0;a<6;a++)for(let l=0;l<3;l++)for(let c=0;c<2;c++)r("concrete_big",(l-1)*2.01,1+a*2.004,(c-.5)*2.01);else if(i==="fort"){let a={...Kt.log,rot:void 0,h:3,r:.28};for(let l=0;l<22;l++){let c=l/24*Math.PI*2;Gt(a,Ge(t,Math.cos(c)*5,1.5,Math.sin(c)*5,e),o)}r("barrel",0,.6,0),r("crate",1.5,.5,1)}else if(i==="arch"){for(let a of[-1.3,1.3])for(let l=0;l<3;l++)r("stone",a,.5+l*1.005,0);Gt({...Kt.slab,size:[3.8,.6,1]},Ge(t,0,3.32,0,e),o)}else if(i==="stairs")for(let a=0;a<5;a++)for(let l=0;l<=a;l++)r("crate",0,.5+l*1.001,-a*1.01);else if(i==="igloo"){for(let a=0;a<3;a++){let l=2.4-a*.55,c=12-a*3;for(let h=0;h<c;h++){let d=h/c*Math.PI*2+a*.3;a===0&&h===0||Gt({...Kt.ice,size:[.9,.7,.6]},Ge(t,Math.cos(d)*l,.35+a*.71,Math.sin(d)*l,e),{...o,quat:hr(e-d-Math.PI/2)})}}Gt({...Kt.ice,size:[1.4,.4,1.4]},Ge(t,0,2.35,0,e),o)}else if(i==="snowman"){let a=u=>({...Kt.snowball,r:u}),l=Gt(a(.75),Ge(t,0,.75,0,e),o),c=Gt(a(.52),Ge(t,0,1.97,0,e),o),h=Gt(a(.36),Ge(t,0,2.82,0,e),o),d=Gt({id:"carrot",shape:"cyl",r:.07,rt:.01,h:.35,mat:"fruit",color:16743168,splat:16743168},Ge(t,0,2.82,.45,e),{...o,quat:new Qt().setFromEuler(new Ve(Math.PI/2,e,0,"YXZ"))});bi(l.body,c.body),bi(c.body,h.body),bi(h.body,d.body)}else if(Wm[i])Wm[i](r,e,t,o);else if(i==="pallets")for(let a=0;a<5;a++)r("pallet",0,.15+a*.31,0);else if(i==="ballpit")for(let a=0;a<40;a++)Gt(Kt.ball,t.clone().add(new _(F(-3,3),8+F(0,8),F(-3,3))),{spawned:n,color:"random"});return null}var XM={hay:1.5,cactus:.3,wood:1,foam:1.3,fruit:.25,tnt:1,car:.5,appliance:.2,balloon:1,plastic:.4,rubber:.3,beach:1,jelly:0,flesh:1,bouncyflesh:1};function Ki(i,t=8){if(!i||i.dead)return;if(i.kind==="dummybody"||i.kind==="ragpart"){i.dummy.ignite();return}if(i.frozen){Ji(i);return}let e=XM[i.def.mat]||0;if(!(e<=0||i.body.position.y<y.waterY)){if(i.def.special==="balloon"){sa(i);return}i.def.explosive&&i.fuse==null&&!i.detonating&&(i.fuse=F(.7,1.5)),i.burn>0||(i.mesh.traverse(n=>{n.isMesh&&!n.userData.charClone&&(n.material=n.material.clone(),n.userData.charClone=!0)}),y.burning=(y.burning||0)+1),i.burn=Math.max(i.burn||0,t*e),i.spreadT=F(.2,.5)}}var YM=new St(1709072);function ZM(i,t){let e=i.body;if(e.position.y<y.waterY){i.burn=0,y.burning--,sn(Pt(e.position),5,14540253,.6),lt.sizzle(e.position);return}i.burn-=t;let n=Pt(e.position),s=(i.def.size?Math.max(...i.def.size):(i.def.r??.5)*2)*i.scale;if(Math.random()<.7&&ae({pos:n.clone().add(new _(F(-.4,.4)*s,F(0,.4)*s,F(-.4,.4)*s)),vel:new _(F(-.5,.5),F(2,4),F(-.5,.5)),color:Math.random()<.5?16742938:16760906,size:F(.2,.4)*Math.min(2,s),life:F(.4,.8),glow:!0,add:!0,gravity:-2,drag:1,floor:!1}),Math.random()<.15&&lt.fire(n),Math.random()<.08&&sn(n.clone().add(new _(0,s*.6,0)),1,3355443,.5*Math.min(2,s)),i.mesh.traverse(o=>{o.isMesh&&o.userData.charClone&&o.material.color.lerp(YM,t*.12)}),i.hp!==1/0&&!i.def.explosive&&(i.hp-=t*9,i.hp<=0)){y.burning--,i.burn=0,ia(i,null);return}if(i.def.mat==="car"&&i.burn<2&&!i.carBoom&&(i.carBoom=!0,sr(.1,()=>{if(!i.dead){let o=Pt(i.body.position);We(i,!0),Fn(o,1.6,{fire:!0})}})),i.spreadT-=t,i.spreadT<=0){i.spreadT=.5;let o=.9+s*.7;for(let r of y.ents){if(r===i||r.dead||r.burn>0)continue;let a=r.body.position,l=a.x-n.x,c=a.y-n.y,h=a.z-n.z;l*l+c*c+h*h<o*o&&Math.random()<.4&&Ki(r,8)}for(let r of y.dummies)!r.burn&&r.center().distanceTo(n)<o+.4&&Math.random()<.4&&r.ignite()}i.burn<=0&&(i.burn=0,y.burning--)}function Cd(i,t=3.5,e=7){y.firePatches=y.firePatches||[],y.firePatches.push({pos:i.clone(),r:t,t:e,tick:0})}function Id(i){if(y.firePatches)for(let t=y.firePatches.length-1;t>=0;t--){let e=y.firePatches[t];if(e.t-=i,e.t<=0){y.firePatches.splice(t,1);continue}for(let n=0;n<3;n++){let s=F(0,Math.PI*2),o=Math.sqrt(Math.random())*e.r;ae({pos:e.pos.clone().add(new _(Math.cos(s)*o,.1,Math.sin(s)*o)),vel:new _(0,F(2,4),0),color:Math.random()<.5?16738842:16760906,size:F(.25,.5),life:F(.4,.8),glow:!0,add:!0,gravity:-2,floor:!1})}if(e.tick-=i,!(e.tick>0)){e.tick=.3;for(let n of y.ents)!(n.burn>0)&&Pt(n.body.position).distanceTo(e.pos)<e.r+.5&&Ki(n,8);for(let n of y.dummies)!n.burn&&n.origin().distanceTo(e.pos)<e.r&&n.ignite();y.player&&y.player.feet().distanceTo(e.pos)<e.r&&(y.player.fling(new _(0,.6,0)),y.player.hot=.3)}}}var ra=Be.DYN|Be.STATIC;function xn(i=150){let t=y.aim.start||y.aim.origin;return un(t,t.clone().addScaledVector(y.aim.dir,i),ra)}function oo(i=150,t=8){let e=xn(i);return e||{point:(y.aim.start||y.aim.origin).clone().addScaledVector(y.aim.dir,t),normal:new _(0,1,0),body:null,dist:t,miss:!0}}function Oe(i){let t=i&&i.ent;return t&&(t.kind==="dummybody"||t.kind==="ragpart")?t.dummy:null}function aa(i,t){return i.clone().add(new _((Math.random()-.5)*t*2,(Math.random()-.5)*t*2,(Math.random()-.5)*t*2)).normalize()}function Nd(i,t,e,n,s=16769126){let o=i.body,r=o.ent;if(yn(i.point,i.normal,s,6,5),!r){Xn(i.point,9075290,3,.08,3);return}let a=Oe(o);if(a){let l=o.ent&&o.ent.partName==="head",c=e*.6*(l?2:1);if(a.state==="standing")a.hurt(c,t,t.clone().multiplyScalar(n*1.2));else{let h=Math.min(o.mass,15)*n;o.applyImpulse(new b(t.x*h,t.y*h,t.z*h),new b(i.point.x-o.position.x,i.point.y-o.position.y,i.point.z-o.position.z)),o.wakeUp(),a.hurt(c,t)}Xn(i.point,16728128,2,.06,3);return}if(o.type===it.DYNAMIC){let l=Math.min(o.mass,15)*n;o.applyImpulse(new b(t.x*l,t.y*l,t.z*l),new b(i.point.x-o.position.x,i.point.y-o.position.y,i.point.z-o.position.z)),o.wakeUp()}if(r.def&&r.def.explosive){(r.def.explosive.hp<=e||(r.hp-=e)<=0)&&ji(r,.03);return}ws(r,e,t)}function la(i){let t=Object.assign({t:0,life:5,gravity:0,collide:!0},i);return t.mesh&&(y.scene.add(t.mesh),t.mesh.position.copy(t.pos)),y.projectiles.push(t),t}var $m=new _,$M=new _(0,1,0);function Ld(i){for(let t=y.projectiles.length-1;t>=0;t--){let e=y.projectiles[t];e.t+=i,$m.copy(e.pos),e.vel.y-=e.gravity*i,e.steer&&e.steer(e,i),e.pos.addScaledVector(e.vel,i),e.mesh&&(e.mesh.position.copy(e.pos),e.vel.lengthSq()>.01&&e.mesh.quaternion.setFromUnitVectors($M,e.vel.clone().normalize())),e.trail&&e.trail(e.pos.clone(),e);let n=!1;if(e.collide&&e.onHit){let s=un($m,e.pos,ra);s?(e.onHit(s,e),n=!0):e.pos.y<y.waterY&&e.water!==!1&&(e.onHit({point:e.pos.clone().setY(y.waterY),normal:new _(0,1,0),body:null,water:!0},e),n=!0)}!n&&e.t>=e.life&&(e.end&&e.end(e.pos.clone(),e),n=!0),n&&(e.mesh&&y.scene.remove(e.mesh),y.projectiles.splice(t,1))}}function lc(i,t,e=!1){let n=new Et(i,e?new we({color:t}):new fe({color:t,flatShading:!0}));return n.castShadow=!e,n}function Ms(i,t,e=null,n=-1){let s=[],o=new _;for(let r of y.world.bodies){if(r.type!==it.DYNAMIC||r.isPlayer)continue;o.set(r.position.x-i.x,r.position.y-i.y,r.position.z-i.z);let a=o.length();a>t||e&&a>.3&&o.dot(e)/a<n||s.push({b:r,d:a,dir:a>.001?o.clone().divideScalar(a):new _(0,1,0)})}return s}function ur(i,t){let e=[];for(let n of y.dummies)n.center().distanceTo(i)<t&&e.push(n);return e}function ro(i){return re(Math.pow(20/i,.3),.2,1.4)}var Qm=18,t0=2.5,e0=14,jM=24,wi=null,ao=null,ca=[],JM=new St(16777215),KM=new St(16730698),QM=new St,jm=new Qt,Jm=new Qt,fn=new Qt,Km=new Qt,Bd=new _(0,1,0);function tE(i,t){return Km.setFromAxisAngle(Bd,y.player?y.player.yaw:0),t.copy(Km).multiply(i.rel)}function n0(i,t){let e=y.grab;if(!e||e.dummy)return!1;let n=new Qt().setFromAxisAngle(Bd,i*1.6),s=new Qt().setFromAxisAngle(new _(1,0,0),t*1.6);return e.rel.premultiply(s).premultiply(n).normalize(),e.body.wakeUp(),!0}function i0(){return y.aim.start.clone().addScaledVector(y.aim.dir,y.grab.dist)}var Es=new b,Fd=new b,dr=new b;function eE(){let i=y.grab;if(!i)return;let t=i.body;if(!y.world.bodies.includes(t)||t.type!==it.DYNAMIC){fr(!1);return}t.pointToWorldFrame(i.local,Es);let e=i.target;Es.vsub(t.position,Fd),t.angularVelocity.cross(Fd,dr),dr.vadd(t.velocity,dr);let n=110,s=17,o=t.mass,r=((e.x-Es.x)*n-dr.x*s)*o,a=((e.y-Es.y)*n-dr.y*s+9.82)*o,l=((e.z-Es.z)*n-dr.z*s)*o,c=Math.hypot(r,a,l),h=9e3;if(c>h){let d=h/c;r*=d,a*=d,l*=d}if(t.applyForce(new b(r,a,l),Fd),i.dummy)t.angularVelocity.scale(.985,t.angularVelocity);else{tE(i,jm),Jm.copy(t.quaternion),fn.copy(jm).multiply(Jm.invert()),fn.w<0&&(fn.x=-fn.x,fn.y=-fn.y,fn.z=-fn.z,fn.w=-fn.w);let d=Math.sqrt(1-Math.min(1,fn.w*fn.w)),u=2*Math.acos(Math.min(1,fn.w)),f=12,m=d>1e-4?fn.x/d:0,x=d>1e-4?fn.y/d:0,g=d>1e-4?fn.z/d:0,p=t.angularVelocity,v=.35;p.x+=(m*u*f-p.x)*v,p.y+=(x*u*f-p.y)*v,p.z+=(g*u*f-p.z)*v}i.tension=re(c/h,0,1)*.5+re(Math.hypot(e.x-Es.x,e.y-Es.y,e.z-Es.z)/4,0,1)*.5}function fr(i=!0){y.grab&&(y.grab.body.angularDamping=y.grab.oldAngDamp,y.grab=null,wi&&wi.hide(),i&&lt.drop())}function nE(){let i=xn(Qm);if(!i){pe("Too far \u2014 get closer");return}let t=i.body,e,n=Oe(t);if(n){n.state==="standing"&&n.knock(null);let s=null,o=1e9;for(let r in n.parts){let a=n.parts[r].body,l=Pt(a.position).distanceTo(i.point);l<o&&(o=l,s=a)}n.frozen&&n.unfreeze(),t=s,e=new b(0,0,0)}else{let s=t.ent;if(s&&s.frozen&&Ji(s),t.type!==it.DYNAMIC){pe("Can't grab that");return}e=t.pointToLocalFrame(new b(i.point.x,i.point.y,i.point.z))}y.grab={body:t,local:e,dummy:n,dist:re(i.point.distanceTo(y.aim.start),t0,e0),target:new _,tension:0,oldAngDamp:t.angularDamping,rel:new Qt().setFromAxisAngle(Bd,-(y.player?y.player.yaw:0)).multiply(new Qt(t.quaternion.x,t.quaternion.y,t.quaternion.z,t.quaternion.w))},t.wakeUp(),t.angularDamping=.4,y.grab.target.copy(i0()),lt.grab(),yn(i.point,i.normal,16777215,6,3)}function iE(){let i=y.grab,t=y.aim.dir.clone(),e=i.dummy?i.dummy.massTotal:i.body.mass,n=40*re(Math.pow(20/e,.2),.4,1.2),s=t.multiplyScalar(n).add(new _(0,2.5,0));if(i.dummy){for(let o in i.dummy.parts){let r=i.dummy.parts[o].body;r.velocity.set(s.x+F(-1,1),s.y+F(-1,1),s.z+F(-1,1)),r.angularVelocity.set(F(-10,10),F(-10,10),F(-10,10))}i.dummy.markFling(),ca.push({body:i.dummy.parts.torso.body,t:.9})}else i.body.velocity.set(s.x,s.y,s.z),i.body.angularVelocity.set(F(-6,6),F(-6,6),F(-6,6)),ca.push({body:i.body,t:.7});ao={to:Pt(i.body.pointToWorldFrame(i.local)),t:.12},fr(!1),lt.fling(),y.shake=Math.max(y.shake,.2),y.fovPunch=6}y.extraForces.push(eE);y.onRemove=i=>{y.grab&&y.grab.body===i.body&&fr(!1)};function s0(i){for(let t=ca.length-1;t>=0;t--){let e=ca[t];if(e.t-=i,e.t<=0||e.body.velocity.length()<6){ca.splice(t,1);continue}ae({pos:Pt(e.body.position),vel:new _,color:16777215,size:.12,life:.35,glow:!0,add:!0,opacity:.5,gravity:0,drag:0,spin:0})}}var Dd=[{id:"fling",name:"Fling Line",icon:"\u270B",color:16777215,hint:"Click: grab / drop \xB7 F: THROW \xB7 Z/X: shorter/longer line \xB7 hold R + mouse: rotate",down(){y.grab?fr():nE()},unequip(){fr(!1)},update(i,t){wi||(wi=new _s(16777215,.022,16,!0));let e=y.grab;if(y.crossHint=null,y.toolNote=null,e){if(t.held("KeyZ")&&(e.dist=Math.max(t0,e.dist-i*8)),t.held("KeyX")&&(e.dist=Math.min(e0,e.dist+i*8)),y.toolNote=t.held("KeyR")&&!e.dummy?"Rotating \u2014 move the mouse":null,t.tap("KeyF")){iE();return}e.target.copy(i0());let n=Pt(e.body.pointToWorldFrame(e.local)),s=y.aim.hand;if(n.distanceTo(s)>jM){fr(),pe("Line snapped!");return}let o=e.tension;wi.setColor(QM.copy(JM).lerp(KM,re((o-.4)/.6,0,1)));let r=re(1-o*1.6,0,1)*Math.min(1.5,n.distanceTo(s)*.12);wi.update(s,n,r,null)}else if(ao)ao.t-=i,ao.t<=0?(ao=null,wi.hide()):(wi.setColor(16777215),wi.update(y.aim.hand,y.aim.hand.clone().lerp(ao.to,ao.t/.12),0,null));else{wi.hide();let n=xn(Qm);y.crossHint=n&&(n.body.type===it.DYNAMIC||Oe(n.body))?"grab":null}}}];var cc=new _(0,1.2,34),hc=class{constructor(){let t=new it({mass:70,material:y.mats.player,fixedRotation:!0,collisionFilterGroup:Be.PLAYER,allowSleep:!1,linearDamping:0});t.addShape(new Nn(.4),new b(0,-.5,0)),t.addShape(new Nn(.4),new b(0,.35,0)),t.position.set(cc.x,cc.y,cc.z),t.isPlayer=!0,t.updateMassProperties(),y.world.addBody(t),this.body=t,this.meshes=gd(1,{skin:15843965,shirt:2068209,pants:2829634,sleeve:!0});for(let a in this.meshes)y.scene.add(this.meshes[a]);let e=new Et(new Fe(.54,.14,.54),new fe({color:16726843,flatShading:!0}));e.position.y=.2;let n=new Et(new Fe(.5,.05,.25),e.material);n.position.set(0,.15,.3),this.meshes.head.add(e,n),this.view=new tn;let s=new Et(new Fe(.13,.13,.26),new fe({color:2068209,flatShading:!0}));s.position.set(0,-.02,.08);let o=new Et(new Fe(.12,.12,.12),new fe({color:15843965,flatShading:!0}));o.position.set(0,0,-.08),this.toolMesh=new Et(new Fe(.1,.12,.42),new fe({color:3355443,flatShading:!0,emissive:0})),this.toolMesh.position.set(0,.07,-.2);let r=new Et(new Fe(.06,.06,.08),new we({color:16777215}));r.position.set(0,0,-.24),this.toolMesh.add(r),this.tip=r,this.view.add(s,o,this.toolMesh),this.view.position.set(.32,-.28,-.5),this.view.scale.setScalar(.26),[s,o,this.toolMesh,r].forEach((a,l)=>{a.renderOrder=10+l,a.frustumCulled=!1,a.material.depthTest=!1,a.material.depthWrite=!1}),y.camera.add(this.view),this.yaw=0,this.pitch=-.1,this.camMode=1,this.camDist=5.5,this.stun=0,this.airJumps=1,this.flying=!1,this.phase=0,this.moveAmt=0,this.grounded=!1,this.wasGrounded=!0,this.swing=0,this.camPos=new _,this.fwd=new _}pos(){return Pt(this.body.position)}feet(){return Pt(this.body.position).add(new _(0,-.9,0))}fling(t){this.body.velocity.x+=t.x,this.body.velocity.y+=t.y,this.body.velocity.z+=t.z,t.length()>4&&(this.stun=Math.max(this.stun,.6))}respawn(){let t=y.spawn||cc;this.body.position.set(t.x,t.y,t.z),this.body.velocity.setZero(),this.body.interpolatedPosition.copy(this.body.position),this.body.previousPosition.copy(this.body.position),this.camY=void 0,this.stun=0}setToolColor(t){this.toolMesh.material.color.set(t),this.toolMesh.material.emissive.set(t).multiplyScalar(.3),this.tip.material.color.set(t).lerp(new St(16777215),.5)}update(t,e){let n=this.body;this.yaw-=e.lookX,this.pitch=re(this.pitch-e.lookY,-1.5,1.45);let s=new _(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=new _(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=n.position,a=un(new _(r.x,r.y-.5,r.z),new _(r.x,r.y-1.08,r.z)),l=a&&a.body.type===it.DYNAMIC?a.body:null;this.platform=l;let c=l?l.velocity:{x:0,y:0,z:0};this.grounded=!!a&&n.velocity.y-c.y<6,this.grounded&&(this.airJumps=1);let h=r.y<y.waterY+.4,d=new _;e.f&&d.add(s),e.b&&d.sub(s),e.r&&d.add(o),e.l&&d.sub(o),d.lengthSq()>0&&d.normalize();let u=e.sprint?12:7;h&&(u=4.5),this.flying&&(u=e.sprint?30:16),this.stun=Math.max(0,this.stun-t*(this.grounded?3:1));let f=this.grounded?14:4;this.stun>0&&(f*=.08),this.flying&&(f=8);let m=Math.min(1,f*t),x=d.x*u+c.x,g=d.z*u+c.z,p=Math.hypot(n.velocity.x-c.x,n.velocity.z-c.z);if(p<u+.5||this.grounded||d.lengthSq()>0){let N=p>u+2&&!this.grounded?m*.15:l?1:m;n.velocity.x+=(x-n.velocity.x)*N,n.velocity.z+=(g-n.velocity.z)*N}if(l&&this.grounded&&!e.jump&&!this.flying&&(n.velocity.y=Math.min(n.velocity.y,c.y+.5)),this.flying){let N=(e.jumpHeld?1:0)-(e.sprintDown?1:0);n.velocity.y=N*12}else h?(n.velocity.y+=(y.waterY+.1-r.y)*12*t,n.velocity.y*=1-1.5*t,e.jumpHeld&&(n.velocity.y=Math.max(n.velocity.y,5))):(e.jump||this.jumpBuf>0&&this.grounded)&&(this.grounded||this.coyote>0?(n.velocity.y=c.y+8.5,lt.jump(),this.coyote=0,this.jumpBuf=0):e.jump&&this.airJumps>0&&(this.airJumps--,n.velocity.y=8,sn(this.feet(),4,16777215,.35),lt.jump()));e.jump&&!this.grounded&&this.coyote<=0&&(this.jumpBuf=.15),this.jumpBuf=Math.max(0,(this.jumpBuf||0)-t),this.coyote=this.grounded?.12:Math.max(0,(this.coyote||0)-t),!this.wasGrounded&&this.grounded&&this.lastVy<-6&&(lt.land(-this.lastVy),this.lastVy<-12&&sn(this.feet(),5,14274488,.5)),this.wasGrounded=this.grounded,this.lastVy=n.velocity.y,r.y<(y.killY??-30)&&this.respawn();let v=Math.cos(this.pitch);this.fwd.set(-Math.sin(this.yaw)*v,Math.sin(this.pitch),-Math.cos(this.yaw)*v);let M=n.interpolatedPosition,w=M.y+.65;this.camY===void 0||Math.abs(w-this.camY)>1.5?this.camY=w:this.camY+=(w-this.camY)*Math.min(1,t*22);let I=new _(M.x,this.camY,M.z),T;if(this.camMode===1)T=I.clone().add(new _(0,.15,0));else{T=I.clone().addScaledVector(this.fwd,-this.camDist).addScaledVector(o,.8).add(new _(0,.35,0));let N=un(I,T,Be.STATIC);N&&(T=I.clone().lerp(N.point,Math.max(0,(N.dist-.3)/I.distanceTo(T)))),r.y>y.waterY+.5&&(T.y=Math.max(T.y,y.waterY+.3))}y.shake>0&&(T.add(new _((Math.random()-.5)*y.shake*.4,(Math.random()-.5)*y.shake*.4,(Math.random()-.5)*y.shake*.4)),y.shake=Math.max(0,y.shake-t*2.5)),y.camera.position.copy(T),y.camera.quaternion.setFromEuler(new Ve(this.pitch,this.yaw,0,"YXZ")),y.fovPunch=Math.max(0,(y.fovPunch||0)-t*30);let L=(y.settings?y.settings.fov:72)+(e.sprint&&d.lengthSq()>0?6:0)+(this.flying?6:0)+y.fovPunch;y.camera.fov+=(L-y.camera.fov)*Math.min(1,10*t),y.camera.updateProjectionMatrix(),this.camPos.copy(T),y.aim.origin.copy(T),y.aim.dir.copy(this.fwd),y.aim.start=T.clone().addScaledVector(this.fwd,Math.max(0,I.clone().sub(T).dot(this.fwd)));let S=Math.hypot(n.velocity.x,n.velocity.z);this.moveAmt+=((this.grounded?re(S/6,0,1):.3)-this.moveAmt)*Math.min(1,8*t),this.phase+=t*(3+S*1.6),this.swing=Math.max(0,this.swing-t*4);let E=!1;for(let N in this.meshes)this.meshes[N].visible=E;if(yd(this.meshes,1,this.feet(),this.yaw+Math.PI,this.phase,this.moveAmt,{aim:this.swing>0?void 0:this.pitch,swing:this.swing>0?this.swing:void 0,pitch:this.pitch}),this.stun>.2&&!this.grounded){let N=new Qt().setFromAxisAngle(new _(1,0,0),y.time*10);this.meshes.torso.quaternion.multiply(N)}this.kick=Math.max(0,(this.kick||0)-t*4),this.view.position.set(.17,-.135,-.36+this.kick*.04),this.view.rotation.set(this.swing>0?-Math.sin(this.swing*Math.PI)*1.2:0,this.swing>0?Math.sin(this.swing*Math.PI)*.8:0,0),y.camera.updateMatrixWorld(),this.tip.getWorldPosition(y.aim.hand)}};var Mi=null,dc=[],co=null,Ud=null,fc=[],Ss=null,uc=1;function Ts(i){uc=i}function ho(){return uc=uc*16807%2147483647,(uc-1)/2147483646}function Ot(i,t){return i+ho()*(t-i)}var zd={};function uo(i,t,e=1){let n=i+"|"+t+"|"+e;if(zd[n])return zd[n];let s={color:i,flatShading:!0,roughness:.95};if(t){let o=Jl[t]().clone();o.wrapS=o.wrapT=Br,o.repeat.set(e,e),o.needsUpdate=!0,s.map=o}return zd[n]=new fe(s)}function fo(i,t,e,n){let s=new it({mass:0,material:y.mats.ground,collisionFilterGroup:Be.STATIC});return s.addShape(i),s.position.set(t.x,t.y,t.z),e&&s.quaternion.set(e.x,e.y,e.z,e.w),y.world.addBody(s),dc.push(s),n&&(n.position.copy(t),e&&n.quaternion.copy(e),Mi.add(n)),s}function xe(i,t,e,n,s,o,r=10066329,a=null,l=null,c=1){let h=l?new Qt().setFromEuler(new Ve(...l)):null,d=new Et(new Fe(i,t,e),uo(r,a,c));return d.castShadow=!0,d.receiveShadow=!0,fo(new ni(new b(i/2,t/2,e/2)),new _(n,s,o),h,d)}function sE(i,t,e,n,s,o,r=null,a=12){let l=new Et(new Je(i,i,t,a),uo(o,r));return l.castShadow=!0,l.receiveShadow=!0,fo(new Zi(i,i,t,a),new _(e,n,s),null,l)}function mc(i,t,e,n){return i.position.set(t,e,n),Mi.add(i),i}var Od=!1,o0=[4165434,5219146,3111474,6076508];function ua(i,t,e,n=1){let s=new Et(new Je(.22*n,.32*n,2.2*n,6),uo(8016432));s.castShadow=!0,fo(new Zi(.3*n,.3*n,2.2*n,6),new _(i,t+1.1*n,e),null,s);let o=Od?15660280:o0[ho()*o0.length|0];for(let r=0;r<3;r++){let a=new Et(new Gi((1.6-r*.4)*n,1.6*n,7),uo(o));a.castShadow=!0,a.rotation.y=ho()*3,mc(a,i,t+(2.2+r*.9)*n,e)}fo(new Nn(1.3*n),new _(i,t+3*n,e),null,null)}function kd(i,t,e,n=1){let s=new Et(new vl(n,0),uo(9080726));s.scale.set(1,Ot(.6,.9),1),s.rotation.set(ho()*3,ho()*3,ho()*3),s.castShadow=!0,s.receiveShadow=!0,fo(new Nn(n*.75),new _(i,t,e),null,s)}var oE=new Je(1.4,1.6,.25,12);function ri(i,t,e,n,s=3800988){let o=new Et(oE,new fe({color:s,emissive:s,emissiveIntensity:.5,flatShading:!0}));o.receiveShadow=!0,fo(new Zi(1.4,1.6,.25,12),new _(i,t+.12,e),null,o);let r=new Et(new Gi(.5,.8,4),new we({color:16777215})),a=n.clone().normalize();r.quaternion.setFromUnitVectors(new _(0,1,0),a),mc(r,i,t+1.2,e),y.pads.push({pos:new _(i,t+.25,e),r:1.6,vel:n,arrow:r,color:s})}function Vd(i,t=900){let e=new Hi(t,t,70,70);e.rotateX(-Math.PI/2),co=new Et(e,new fe({color:2789334,transparent:!0,opacity:.82,flatShading:!0,roughness:.25,metalness:.1})),co.position.y=i,co.receiveShadow=!0,Mi.add(co),Ud=Float32Array.from(e.attributes.position.array),y.waterY=i}function rE(i,t){let e=new Zo(800,24,12),n=new kn({side:cn,depthWrite:!1,fog:!1,uniforms:{top:{value:new St(i)},bottom:{value:new St(t)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = clamp(vP.y*1.4+0.25,0.0,1.0); gl_FragColor = vec4(mix(bottom, top, h),1.0); }"});Ss=new Et(e,n),Ss.frustumCulled=!1,Mi.add(Ss)}function h0(i,t,e){fc=[];let n=new fe({color:16777215,flatShading:!0,roughness:1,transparent:!0,opacity:.92});for(let s=0;s<i;s++){let o=new tn;for(let r=0;r<4;r++){let a=new Et(new In(Ot(3,6),0),n);a.position.set(Ot(-6,6),Ot(-1,1.5),Ot(-3,3)),a.scale.y=.55,o.add(a)}o.position.set(Ot(-e,e),t+Ot(-10,15),Ot(-e,e)),o.userData.v=Ot(.5,2),Mi.add(o),fc.push(o)}}var pc=[];function r0(i,t,e=2){return pc.every(([n,s,o])=>Math.hypot(i-n,t-s)>o+e)}function ai(i){let t=new Set(y.ents);i();for(let e of y.ents)t.has(e)||e.body.sleep()}function Ft(i,t,e,n,s={}){return Bn(i,new _(t,e,n),{onGround:!0,...s})}function oi(i,t,e,n,s=0,o=["normal"]){for(let r=0;r<i;r++)Yn(new _(t+F(-n,n),s+.05,e+F(-n,n)),o[r%o.length])}function As(i,t,e,n=3){for(let s=0;s<n;s++)Ft("pallet",i+s*2,t,e)}var Ke=null,pr=new St;function po({W:i,es:t,height:e,color:n,bedrock:s=-8}){let o=Math.round(i/t)+1,r=[];for(let u=0;u<o;u++){let f=[];for(let m=0;m<o;m++)f.push(e(-i/2+u*t,i/2-m*t));r.push(f)}let a=new Wl(r,{elementSize:t}),l=new it({mass:0,material:y.mats.ground,collisionFilterGroup:Be.STATIC});l.addShape(a),l.position.set(-i/2,0,i/2),l.quaternion.setFromEuler(-Math.PI/2,0,0),y.world.addBody(l),dc.push(l);let c=new Hi(i,i,o-1,o-1);c.rotateX(-Math.PI/2);let h=new Float32Array(o*o*3);c.setAttribute("color",new mn(h,3));let d=new Et(c,new fe({vertexColors:!0,flatShading:!0,roughness:.95}));d.receiveShadow=!0,Mi.add(d),Ke={W:i,es:t,n:o,data:r,shape:a,body:l,geo:c,mesh:d,color:n,bedrock:s,scar:new Float32Array(o*o)};for(let u=0;u<o;u++)for(let f=0;f<o;f++)u0(u,f);c.computeBoundingSphere(),y.groundAt=da}function u0(i,t){let{n:e,data:n,geo:s,W:o,es:r,color:a,scar:l}=Ke,c=(e-1-t)*e+i,h=n[i][t];s.attributes.position.setY(c,h);let d=-o/2+i*r,u=o/2-t*r;pr.set(a(h,d,u)),pr.offsetHSL(0,0,(i*73856093^t*19349663)%100/100*.05-.025),l[c]>0&&pr.lerp(new St(4863268),Math.min(1,l[c])),s.attributes.color.setXYZ(c,pr.r,pr.g,pr.b)}function da(i,t){if(!Ke)return-1e9;let{W:e,es:n,data:s,n:o}=Ke,r=(i+e/2)/n,a=(e/2-t)/n;if(r<0||a<0||r>o-1||a>o-1)return-1e9;let l=re(Math.floor(r),0,o-2),c=re(Math.floor(a),0,o-2),h=r-l,d=a-c,u=s[l][c],f=s[l+1][c],m=s[l][c+1],x=s[l+1][c+1];return(u*(1-h)+f*h)*(1-d)+(m*(1-h)+x*h)*d}function aE(i,t,e){if(!Ke)return;let n=da(i.x,i.z);if(n<-1e8||i.y-n>t*.8)return;let{W:s,es:o,n:r,data:a}=Ke,l=Math.max(0,Math.floor((i.x-t*1.3+s/2)/o)),c=Math.min(r-1,Math.ceil((i.x+t*1.3+s/2)/o)),h=Math.max(0,Math.floor((s/2-i.z-t*1.3)/o)),d=Math.min(r-1,Math.ceil((s/2-i.z+t*1.3)/o));for(let u=l;u<=c;u++)for(let f=h;f<=d;f++){let m=-s/2+u*o,x=s/2-f*o,g=Math.hypot(m-i.x,x-i.z)/t,p=(r-1-f)*r+u;if(g<1)a[u][f]=Math.max(Ke.bedrock,a[u][f]-e*(1-g*g)),Ke.scar[p]=Math.min(1,Ke.scar[p]+(1-g)*1.5);else if(g<1.3)a[u][f]+=e*.12*(1-(g-1)/.3),Ke.scar[p]=Math.min(1,Ke.scar[p]+.3);else continue;u0(u,f)}Ke.shape.update(),Ke.shape.updateMinValue(),Ke.shape.updateMaxValue(),Ke.body.aabbNeedsUpdate=!0,Ke.geo.attributes.position.needsUpdate=!0,Ke.geo.attributes.color.needsUpdate=!0,Xn(new _(i.x,n+.3,i.z),5914672,14,.25,9)}y.crater=(i,t)=>aE(i,2.2*Math.pow(t,.55),1.1*Math.pow(t,.6));function a0(i,t,e,n,s,o,r,a=1){for(let l=0;l<r;l++)for(let c=0;c<s;c++)for(let h=0;h<o;h++)c>0&&c<s-1&&h>0&&h<o-1||Gt(Kt[i],new _(t+(c-(s-1)/2)*a*1.005,e+a/2+l*a*1.002,n+(h-(o-1)/2)*a*1.005),{})}function lE(){Ts(7),po({W:200,es:2,bedrock:-9,height:(i,t)=>{let e=Math.max(Math.abs(i),Math.abs(t))+.15*Math.min(Math.abs(i),Math.abs(t))*0;return e<66?0:e<80?-4.5*(e-66)/14:-4.5-(e-80)*.4},color:i=>i>-.05?6270538:i>-3.5?15323802:13218426}),Vd(-1),pc=[[0,34,8],[-18,10,6],[24,-18,9],[-26,-26,6],[0,-34,5],[-5,-8,8],[14,22,10],[-34,24,7],[36,32,8],[44,-2,8],[6,14,3],[-10,30,3],[-45,-10,6],[-45,5,5],[40,-45,8]],ai(()=>{jt("pyramid",new _(-18,0,10),0,!1);let i=24,t=-18,e=7;for(let n=0;n<3;n++)for(let s=0;s<e;s++)for(let o of[0,1,2,3]){if(s===e-1)continue;let r,a,l=s-(e-1)/2;o===0?(r=l,a=-(e-1)/2):o===1?(r=(e-1)/2,a=l):o===2?(r=-l,a=(e-1)/2):(r=-(e-1)/2,a=-l),!(o===2&&Math.abs(r)<1&&n<2)&&Gt(Kt.stone,new _(i+r*1.01,.5+n*1.005,t+a*1.01),{})}for(let[n,s]of[[-3,-3],[3,-3],[3,3],[-3,3]])for(let o=3;o<5;o++)Gt(Kt.stone,new _(i+n*1.01,.5+o*1.005,t+s*1.01),{});for(let n=0;n<3;n++)jt("glassroom",new _(-26,n*2.315,-26),0,!1);jt("jenga",new _(0,0,-34),0,!1);for(let n=0;n<34;n++){let s=n*.25,o=2.5+n*.17;Gt(Kt.domino,new _(-5+Math.cos(s)*o,.6,-8+Math.sin(s)*o),{quat:new Qt().setFromAxisAngle(new _(0,1,0),-s)})}jt("bowling",new _(14,0,22),0,!1),jt("tntstack",new _(-34,0,24),0,!1);for(let n=0;n<6;n++){let s=n/6*Math.PI*2;Ft("barrel",-34+Math.cos(s)*3.2,0,24+Math.sin(s)*3.2)}jt("house",new _(-45,0,-10),0,!1),jt("fort",new _(40,0,-45),0,!1),jt("wall",new _(-45,0,5),Math.PI/2,!1)}),xe(2.2,.1,18,14,.05,18,14268282,"plank");for(let[i,t,e,n]of[[-34,28.5,9,1],[-38.5,24,1,9],[-29.5,24,1,9]])xe(e,2.5,n,i,1.25,t,9212054,"stone");for(let[i,t]of[[33.5,29.5],[38.5,29.5],[33.5,34.5],[38.5,34.5]])xe(.6,8,.6,i,4,t,8016432,"log");xe(6,.5,6,36,8.2,32,11565630,"plank"),xe(3,.4,17,36,4.1,43,11565630,"plank",[-.5,0,0]),xe(6,.6,14,44,2.2,-2,10134702,"metal",[.32,0,0]),ri(6,0,14,new _(0,24,0)),ri(-10,0,30,new _(14,20,-24),16758531),ri(28,0,6,new _(0,30,0)),ai(()=>{Ft("pallet",35,8.5,31),Ft("melon",36,8.5,33),As(-4,0,26,4),Ft("car",10,0,38,{quat:new Qt().setFromAxisAngle(new _(0,1,0),.4)}),Ft("table",-12,0,40),Ft("melon",-12.4,.9,40),Ft("pumpkin",-11.5,.9,40.2),Ft("couch",-16,0,42),Ft("piano",18,0,42),Ft("fridge",21,0,42);for(let i=0;i<4;i++)Ft("beachball",62+F(-3,3),0,F(-20,20));Ft("duck",0,-.5,82),Ft("duck",8,-.5,84),Ft("present",2,0,20),Ft("crystal",-2,0,20);for(let i=0;i<5;i++)Ft("crate",50+F(-4,4),0,50+F(-4,4));Ft("nuke",-55,0,-55)});for(let i=0;i<70;i++){let t=Ot(-62,62),e=Ot(-62,62);r0(t,e,3)&&(ua(t,0,e,Ot(.8,1.4)),pc.push([t,e,2]))}for(let i=0;i<25;i++){let t=Ot(-62,62),e=Ot(-62,62);r0(t,e,2)&&kd(t,.2,e,Ot(.6,1.6))}oi(9,0,5,18),oi(2,-24,-18,3,0,["tiny"]),oi(1,24,-18,1.5,0,["big"]),oi(2,36,32,1,8.5)}function cE(){Ts(11),po({W:300,es:3,height:()=>0,color:(t,e,n)=>Math.floor(e/15)+Math.floor(n/15)&1?6533965:5940806,bedrock:-6}),pc=[[0,34,8]];for(let t=0;t<4;t++)xe(5,.5,12,30+t*9,1.6+t*.6,10,[3835647,16711790,16760331,8599788][t],null,[.22+t*.1,0,0]);xe(20,.5,6,45,1.5,-20,10134702,"metal",[0,0,0],2),xe(20,.5,6,45,3,-24.5,10134702,"metal",[.7,0,0],2),xe(20,.5,6,45,3,-15.5,10134702,"metal",[-.7,0,0],2);for(let t=0;t<12;t++)xe(4,.5,1.2,-40,.25+t*.5,-10-t*1.2,14208964,"stone");xe(4,.5,4,-40,6,-25.5,14208964,"stone");let i=[[0,0,10],[0,16,-40],[22,32,-70],[-18,48,-100],[0,64,-132]];for(let t=1;t<i.length;t++){let[e,n,s]=i[t];xe(10,1,10,e,n-.5,s,11565630,"plank",null,2);let o=new Et(new Gi(6,8,6),uo(9080726));o.rotation.x=Math.PI,mc(o,e,n-5,s)}for(let t=0;t<i.length-1;t++){let[e,n,s]=i[t],[o,r,a]=i[t+1],l=2.2,c=new _((o-e)/l,(r-n+.5*9.82*l*l)/l,(a-s)/l);ri(e+(t===0?0:2),n,s+(t===0?0:2),c,16758531)}ai(()=>{for(let t=1;t<i.length;t++){let[e,n,s]=i[t];Ft("pallet",e-2.5,n,s-2),Ft("crate",e+2,n,s+2)}for(let t=0;t<60;t++)Gt(Kt.domino,new _(-10,.6,20-t*.75),{});jt("skyscraper",new _(-63,0,-43),0,!1),jt("skyscraper",new _(-63,0,-60),0,!1);for(let t=0;t<5;t++)for(let e=0;e<4;e++)Ft("tnt",-70+t*3,0,20+e*3);for(let t=0;t<6;t++)Ft("barrel",-72+t*3,0,33);jt("bowling",new _(20,0,40),0,!1),jt("jenga",new _(70,0,40),0,!1),jt("wall",new _(70,0,20),0,!1),jt("bridge",new _(80,0,-5),Math.PI/2,!1),jt("arch",new _(-25,0,50),0,!1),As(-4,0,28,4);for(let t=0;t<3;t++)Ft("car",80+t*5,0,-40);jt("pyramid",new _(0,0,-15),0,!1)});for(let[t,e,n,s]of[[60,-65,16,1],[60,-81,16,1],[52,-73,1,16],[68,-73,1,16]])xe(n,2,s,t,1,e,16711790);for(let t=0;t<45;t++)Gt(Kt.ball,new _(60+F(-6,6),1+F(0,3),-73+F(-6,6)),{color:"random"});ri(10,0,20,new _(0,26,0));for(let t=0;t<40;t++){let e=Ot(-140,140),n=Ot(-140,140);Math.hypot(e,n)>100&&ua(e,0,n,Ot(1,1.6))}oi(12,0,0,25),oi(3,60,30,5,0,["ninja"]),oi(2,-40,0,4,0,["robot"])}function hE(i,t){let e=7*Math.sin(i*.028)*Math.cos(t*.033)+4*Math.sin(i*.061+1)*Math.sin(t*.054+2)+1.4*Math.sin(i*.13+t*.11);e+=22*Math.exp(-((i-45)**2+(t+35)**2)/500),e+=26*Math.exp(-((i+45)**2+(t+20)**2)/380),e-=11*Math.exp(-((i+5)**2+(t+5)**2)/420);let n=Math.max(Math.abs(i),Math.abs(t));n>90&&(e+=(n-90)*1.2);let s=Math.hypot(i,t-50);return s<16&&(e=e*(s/16)+2*(1-s/16)),e+2}function uE(){Ts(23),po({W:240,es:3,height:hE,bedrock:-10,color:a=>a<.3?14864277:a<14?6270538:a<22?8225416:16054267}),Vd(-1);let i=da,t=45,e=-35,n=i(t,e);xe(14,1,14,t,n-.3,e,9212054,"stone",null,3),ai(()=>{for(let a=0;a<3;a++)for(let l=-3;l<=3;l++)for(let[c,h]of[[l,-3],[l,3],[-3,l],[3,l]])Math.abs(l)===3&&(c===-3||c===3)&&(h===-3||h===3)&&h!==l&&c!==l||Gt(Kt.stone,new _(t+c*1.01,n+.7+a*1.005,e+h*1.01),{})});let s=-45,o=-20,r=i(s,o);xe(10,1,10,s,r-.2,o,8225416,"stone"),ai(()=>{for(let a=0;a<4;a++)Ft("boulder",s+(a-1.5)*2.6,r+.4,o+2);Ft("tnt_mega",s,r+.4,o-2.5)}),ai(()=>{for(let[a,l]of[[20,30],[-25,40]])jt("house",new _(a,i(a,l),l),.3,!1);As(-3,i(0,42)+.2,42,4),Ft("car",8,i(8,50)+.3,50);for(let a=0;a<6;a++)Ft("duck",-5+F(-8,8),-.6,-5+F(-8,8))}),ri(-8,i(-8,54),54,new _(-12,22,-30),16758531);for(let a=0;a<110;a++){let l=Ot(-95,95),c=Ot(-95,95),h=i(l,c);h>1&&h<15&&Math.hypot(l,c-50)>14&&Math.hypot(l-45,c+35)>14&&ua(l,h-.2,c,Ot(.8,1.5))}for(let a=0;a<30;a++){let l=Ot(-95,95),c=Ot(-95,95);kd(l,i(l,c),c,Ot(.6,2))}for(let a=0;a<12;a++){let l=F(-30,30),c=F(20,60);Yn(new _(l,i(l,c)+.1,c),a%6===5?"tiny":"normal")}Yn(new _(t,n+.3,e),"big")}function dE(){Ts(31);let i=[[0,0,0,14],[40,8,-20,10],[-36,14,-40,12],[10,26,-82,16],[62,-8,38,9],[-52,-4,30,10],[-10,40,-140,11]];for(let[t,e,n,s]of i){sE(s,2,t,e-1,n,6270538,"grass",14);let o=new Et(new Gi(s,s*1.3,9),uo(9071178));o.rotation.x=Math.PI,mc(o,t,e-2-s*.65,n);for(let r=0;r<Math.floor(s/4);r++){let a=ho()*6.28,l=Ot(s*.4,s*.8);ua(t+Math.cos(a)*l,e,n+Math.sin(a)*l,Ot(.7,1.1))}}h0(30,-35,250),ai(()=>{As(-5,0,8,6),jt("tower",new _(40,8,-20),0,!1),jt("pyramid",new _(10,26,-82),0,!1),jt("tntstack",new _(-36,14,-40),0,!1);for(let[t,e,n]of i.slice(1))Ft("pallet",t+2,e,n+2);jt("glassroom",new _(62,-8,38),0,!1),Ft("piano",-52,-4,30),Ft("anvil",-50,-4,28)}),ri(-6,0,-4,new _(18,18,-9),16758531),ri(6,0,4,new _(0,22,0));for(let[t,e,n,s]of i)s>9&&oi(Math.floor(s/4),t,n,s*.4,e)}function fE(){Ts(41);let i=t=>Math.abs((t%40+40)%40-20)>14;po({W:200,es:2,bedrock:-6,height:()=>0,color:(t,e,n)=>i(e)||i(n)?3816770:Math.abs((e%40+40)%40-20)>12||Math.abs((n%40+40)%40-20)>12?12170410:6989911});for(let t=0;t<26;t++){let e=t/26*Math.PI*2,n=110+Ot(0,30),s=Ot(25,70);xe(Ot(12,20),s,Ot(12,20),Math.cos(e)*n,s/2,Math.sin(e)*n,[9147809,7239553,10726582,6252915][t%4])}ai(()=>{[[0,0],[40,0],[-40,0],[0,-40],[40,-40],[-40,-40],[40,40],[-40,40]].forEach(([e,n],s)=>{s!==0&&(s%3===0?jt("skyscraper",new _(e,0,n),0,!1):s%3===1?(a0("concrete_big",e-4,0,n,3,3,4+s%3,2),a0("concrete_big",e+6,0,n+4,2,2,3,2)):(jt("house",new _(e-5,0,n-3),0,!1),jt("house",new _(e+5,0,n+4),Math.PI,!1)))}),jt("arch",new _(0,0,-6),0,!1);for(let e=0;e<6;e++)Ft("car",-20+F(-1,1),0,-30+e*10,{quat:new Qt().setFromAxisAngle(new _(0,1,0),Math.PI/2)});for(let e=0;e<5;e++)Ft("car",-30+e*12,0,20,{});for(let e=0;e<14;e++)Ft("cone",F(-60,60),0,20+F(-1.5,1.5));for(let e=0;e<10;e++)Ft("lamp",-60+e*13,0,13.5);for(let e=0;e<6;e++)Ft("barrier",18+F(-1,1),0,-20+e*3);for(let e=0;e<5;e++)Ft("mailbox",F(-12,12),0,F(-12,12));Ft("vending",6,0,6),Ft("vending",7.3,0,6);for(let e=0;e<4;e++)Ft("bin",-6+e*4,0,8);As(-4,0,12,3),jt("pallets",new _(10,0,-10),0,!1)}),ri(0,0,0,new _(0,30,0)),xe(8,.5,20,60,3,20,16760331,null,[.3,0,0]),oi(16,0,10,20),oi(3,0,-20,10,0,["zombie"])}function pE(i,t){let e=1.5*Math.sin(i*.07)*Math.sin(t*.05)+1*Math.sin(i*.15+t*.1),n=Math.max(0,Math.sin(i*.025+1)*Math.cos(t*.03)-.35);e+=Math.min(14,n*40);let s=Math.abs(t-18*Math.sin(i*.03));s<9&&(e-=(9-s)*.75);let o=Math.hypot(i,t-50);o<14&&(e=e*(o/14)+1*(1-o/14));let r=Math.max(Math.abs(i),Math.abs(t));return r>100&&(e+=(r-100)*1.3),e+1}function mE(){Ts(53),po({W:240,es:3,height:pE,bedrock:-8,color:t=>t<-1.5?12098922:t<4?14858618:[13136958,14191183,11887151,14721127][Math.floor(t/2.5)&3]}),Vd(-2.5);let i=da;ai(()=>{for(let t=0;t<40;t++){let e=Ot(-90,90),n=Ot(-90,90),s=i(e,n);s>.5&&s<3&&Ft("cactus",e,s,n)}for(let[t,e]of[[20,40],[-22,30],[30,-40]])jt("house",new _(t,i(t,e),e),Ot(0,3),!1);for(let t=0;t<10;t++){let e=Ot(-30,30),n=Ot(30,60);Ft(t%3?"barrel":"drum",e,i(e,n),n)}for(let t=0;t<8;t++){let e=Ot(-40,40),n=Ot(-30,0);Ft("hay",e,i(e,n),n)}for(let t=0;t<12;t++){let e=Ot(-20,20),n=Ot(0,20),s=i(e,n);s>-1&&Ft("mine",e,s,n)}Ft("car",5,i(5,46),46),Ft("car",-8,i(-8,44),44),As(-3,i(0,56)+.1,56,3),jt("fort",new _(-50,i(-50,-50),-50),0,!1)});for(let t=0;t<25;t++){let e=Ot(-95,95),n=Ot(-95,95);kd(e,i(e,n),n,Ot(.8,2.4))}for(let t=0;t<12;t++){let e=F(-20,20),n=F(40,60);Yn(new _(e,i(e,n)+.1,n),t%4===3?"ninja":"normal")}}function gE(i,t){let e=6*Math.sin(i*.03+2)*Math.cos(t*.027)+3*Math.sin(i*.08)*Math.sin(t*.07);e+=30*Math.exp(-((i-50)**2+(t+50)**2)/700),Math.hypot(i+10,t+5)<26&&(e=Math.min(e,-.6));let s=Math.hypot(i,t-50);s<14&&(e=e*(s/14)+2*(1-s/14));let o=Math.max(Math.abs(i),Math.abs(t));return o>95&&(e+=(o-95)*1.4),e+2}function yE(){Ts(61),po({W:240,es:3,height:gE,bedrock:-9,color:n=>n<3?14674416:n<18?15922937:10134445}),Od=!0;let i=new Et(new Je(26,26,.4,24),new fe({color:11133951,transparent:!0,opacity:.85,roughness:.1,flatShading:!0}));i.receiveShadow=!0;let t=fo(new Zi(26,26,.4,24),new _(-10,1.25,-5),null,i);t.material=y.mats.ice;let e=da;ai(()=>{for(let[r,a]of[[20,25],[-30,30],[30,-10],[-40,-30]])jt("snowman",new _(r,e(r,a),a),0,!1);for(let[r,a]of[[25,40],[-25,45]])jt("igloo",new _(r,e(r,a),a),0,!1);for(let r=0;r<25;r++)Ft("snowball",-10+F(-15,15),1.5,-5+F(-15,15));for(let r=0;r<8;r++)Ft("ice",-10+F(-10,10),1.5,-5+F(-10,10));As(-3,e(0,55)+.1,55,3),jt("house",new _(10,e(10,60),60),0,!1);let n=50,s=-50,o=e(n,s);for(let r=0;r<4;r++)Ft("boulder",n+F(-3,3),o+1,s+F(-3,3))});for(let n=0;n<90;n++){let s=Ot(-90,90),o=Ot(-90,90),r=e(s,o);Math.hypot(s+10,o+5)>30&&Math.hypot(s,o-50)>12&&r<20&&ua(s,r-.2,o,Ot(.8,1.5))}Od=!1;for(let n=0;n<12;n++){let s=F(-25,25),o=F(35,60);Yn(new _(s,e(s,o)+.1,o),n%5===4?"big":"normal")}}function xE(){Ts(71),po({W:160,es:2,bedrock:-5,height:()=>0,color:(i,t,e)=>Math.hypot(t,e)<12?15323802:Math.abs(t)>60||Math.abs(e)>60?5216828:6533965});for(let[i,t,e,n]of[[0,62,124,.4],[0,-62,124,.4],[62,0,.4,124],[-62,0,.4,124]])xe(e,1.2,n,i,.6,t,16777215);for(let i=0;i<3;i++){let t=-30+i*3;xe(.3,4,.3,t-1.3,2,-30,16711790),xe(.3,4,.3,t+1.3,2,-30,16711790);let e=xe(3,.25,.25,t,4,-30,16711790),n=Gt({...Kt.chunk,size:[1,.12,.5],mat:"wood",tex:"plank"},new _(t,1,-30),{});si(e,new b(-.45,0,0),n.body,new b(-.45,0,0),3),si(e,new b(.45,0,0),n.body,new b(.45,0,0),3)}for(let i=0;i<2;i++){let t=-10+i*6;xe(.6,.6,.6,t,.15,-30,3835647,null,[Math.PI/4,0,0]),Gt({...Kt.chunk,size:[.6,.12,5],mat:"wood",tex:"plank"},new _(t,.65,-30),{})}xe(3,.3,3,20,4,-30,16760331);for(let[i,t]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])xe(.25,4,.25,20+i,2,-30+t,16760331);for(let i=0;i<8;i++)xe(1.2,.15,.4,20,.4+i*.5,-32-i*.05,8599788);xe(1.6,.2,9,20,2,-24.6,448160,null,[-.45,0,0]);for(let i=0;i<4;i++)ri(-30+i*6,0,10,new _(0,14+i*4,0),3920383);ri(30,0,30,new _(-16,22,-16),16758531);for(let[i,t,e,n]of[[30,15,12,.6],[30,3,12,.6],[24,9,.6,12],[36,9,.6,12]])xe(e,1.4,n,i,.7,t,16711790);for(let i=0;i<60;i++)Gt(Kt.ball,new _(30+F(-5,5),1+F(0,4),9+F(-5,5)),{color:"random"});for(let i=0;i<3;i++)for(let t=0;t<3;t++)xe(.2,3,.2,-30+i*2,1.5,30+t*2,15681391);xe(4.4,.2,4.4,-28,3.1,32,15681391),ai(()=>{jt("pyramid",new _(0,0,30),0,!1),jt("domino",new _(40,0,-10),0,!1),jt("bowling",new _(-45,0,-5),Math.PI/2,!1),jt("stairs",new _(45,0,40),0,!1);for(let i=0;i<6;i++)Ft("beachball",F(-8,8),0,F(-8,8));for(let i=0;i<4;i++)Ft("jelly",-45+i*1.5,0,40);As(-4,0,45,3),jt("pallets",new _(6,0,45),0,!1)}),oi(14,0,0,30,0,["tiny","tiny","normal","bouncy"])}var ha=[{id:"island",name:"Island",icon:"\u{1F3DD}\uFE0F",desc:"Castle, towers, TNT bunker, beaches & ocean",build:lE,spawn:[0,1.2,34],sky:[4891647,13625855],fog:[13625855,90,320],killY:-30,water:-1,walk:58},{id:"city",name:"City",icon:"\u{1F3D9}\uFE0F",desc:"Concrete buildings you can bring down, cars, zombies",build:fE,spawn:[0,1.2,30],sky:[9417689,15265525],fog:[15265525,80,260],killY:-30,water:-1e3,walk:90},{id:"flat",name:"Flatlands",icon:"\u{1F7E9}",desc:"Huge flat field: stunt ramps, sky platforms, ball pit",build:cE,spawn:[0,1.2,34],sky:[6009343,15135999],fog:[15135999,120,450],killY:-40,water:-1e3,walk:140},{id:"hills",name:"Hills",icon:"\u26F0\uFE0F",desc:"Rolling hills, a lake, a castle hill & boulders to roll",build:uE,spawn:[0,6,50],sky:[8370431,16771276],fog:[16771276,90,300],killY:-30,water:-1,walk:85},{id:"desert",name:"Desert Canyon",icon:"\u{1F3DC}\uFE0F",desc:"Mesas, a river canyon, cacti, oil drums & a minefield",build:mE,spawn:[0,4,50],sky:[6990056,16767400],fog:[16767400,90,320],killY:-30,water:-2.5,walk:85},{id:"snow",name:"Snowy Peaks",icon:"\u2744\uFE0F",desc:"Slippery frozen lake, igloos, snowmen, a big mountain",build:yE,spawn:[0,5,50],sky:[10273766,15922938],fog:[15922938,70,260],killY:-30,water:-1e3,walk:85},{id:"playground",name:"Playground",icon:"\u{1F6DD}",desc:"Swings, see-saws, a slide, trampolines & a ball pit",build:xE,spawn:[0,1.2,50],sky:[6009343,16773334],fog:[16773334,90,300],killY:-30,water:-1e3,walk:55},{id:"sky",name:"Sky Islands",icon:"\u2601\uFE0F",desc:"Floating islands high above the clouds",build:dE,spawn:[0,1.5,5],sky:[2841027,16762536],fog:[16762536,120,420],killY:-80,water:-1e3,walk:999}];function vE(){y.grab=null;for(let i of[...y.dummies])i.remove();for(let i of[...y.ents])We(i,!0);for(let i of[...y.ropes])so(i);for(let i of y.welds)y.world.removeConstraint(i);y.welds.length=0;for(let i of y.projectiles)i.mesh&&y.scene.remove(i.mesh);y.projectiles.length=0;for(let i of y.blackholes)y.scene.remove(i.mesh);y.blackholes.length=0,y.firePatches=[],y.timers.length=0,y.burning=0}function mr(i){let t=ha.find(e=>e.id===i)||ha[0];vE();for(let e of dc)y.world.removeBody(e);dc=[],Mi&&y.scene.remove(Mi),Mi=new tn,y.scene.add(Mi),y.pads=[],co=null,fc=[],Ke=null,y.groundAt=null,y.mapId=t.id,y.map=t,y.killY=t.killY,y.walkBound=t.walk,y.waterY=t.water,rE(t.sky[0],t.sky[1]),y.scene.fog=new hl(t.fog[0],t.fog[1],t.fog[2]),t.build(),t.id!=="sky"&&h0(18,70,300),Hd(y.settings?y.settings.time:"day"),y.spawn=new _(...t.spawn),y.player&&y.player.respawn()}var l0={day:{sun:2.2,sunCol:16773590,hemi:1.1,hemiSky:13625599,hemiGround:7035450,tint:null,k:0,exposure:1.05,stars:!1,sunPos:[40,70,25]},sunset:{sun:1.5,sunCol:16752736,hemi:.75,hemiSky:16763034,hemiGround:5914410,tint:[6967200,16751194],k:.65,exposure:1.1,stars:!1,sunPos:[80,18,10]},night:{sun:.35,sunCol:10466559,hemi:.3,hemiSky:5926824,hemiGround:1710628,tint:[329487,1712960],k:.92,exposure:1.25,stars:!0,sunPos:[-30,60,-40]}},lo=null;function Hd(i){let t=l0[i]||l0.day;y.timeOfDay=i,y.sun&&(y.sun.intensity=t.sun,y.sun.color.set(t.sunCol),y.sunOffset=t.sunPos),y.hemi&&(y.hemi.intensity=t.hemi,y.hemi.color.set(t.hemiSky),y.hemi.groundColor.set(t.hemiGround)),y.renderer&&(y.renderer.toneMappingExposure=t.exposure);let e=y.map;if(e&&Ss){let s=new St(e.sky[0]),o=new St(e.sky[1]);t.tint&&(s.lerp(new St(t.tint[0]),t.k),o.lerp(new St(t.tint[1]),t.k)),Ss.material.uniforms.top.value.copy(s),Ss.material.uniforms.bottom.value.copy(o),y.scene.fog&&y.scene.fog.color.copy(o)}if(!lo){let o=new Float32Array(2700);for(let a=0;a<900;a++){let l=Math.random()*Math.PI*2,c=Math.random()*.9+.08,h=Math.sqrt(1-c*c);o[a*3]=Math.cos(l)*h*700,o[a*3+1]=c*700,o[a*3+2]=Math.sin(l)*h*700}let r=new gn;r.setAttribute("position",new mn(o,3)),lo=new dl(r,new Ur({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1})),lo.frustumCulled=!1,y.scene.add(lo)}lo.visible=t.stars;let n=i==="night"?1.4:i==="sunset"?.4:0;y.scene.traverse(s=>{!s.isMesh||!s.material||!s.material.color||s.material.color.getHex()===16774064&&(s.material.emissive=s.material.emissive||new St,s.material.emissive.set(16774064),s.material.emissiveIntensity=n)})}var c0=new WeakMap;function d0(i){if(co){let t=co.geometry.attributes.position,e=y.time;for(let n=0;n<t.count;n++){let s=Ud[n*3],o=Ud[n*3+2];t.array[n*3+1]=Math.sin(s*.08+e*1.2)*.12+Math.cos(o*.07+e*.9)*.12}t.needsUpdate=!0}for(let t of fc)t.position.x+=t.userData.v*i,t.position.x>320&&(t.position.x=-320);Ss&&y.camera&&Ss.position.copy(y.camera.position),lo&&y.camera&&lo.position.copy(y.camera.position);for(let t of y.pads){let e=n=>{let s=n.position.x-t.pos.x,o=n.position.z-t.pos.z,r=n.position.y-t.pos.y;if(s*s+o*o>t.r*t.r||r<-.3||r>1.6)return;let a=c0.get(n)||-9;if(y.time-a<.6)return;c0.set(n,y.time),n.velocity.set(t.vel.x,t.vel.y,t.vel.z),n.wakeUp(),lt.boing(n.position),lr(t.pos.clone(),3,t.color,.4),n.isPlayer&&(y.player.stun=.4);let l=n.ent&&n.ent.dummy;if(l&&l.state==="standing"){l.knock(null);for(let c in l.parts)l.parts[c].body.velocity.set(t.vel.x,t.vel.y,t.vel.z);l.markFling()}};y.player&&e(y.player.body);for(let n of y.world.bodies)n.type===it.DYNAMIC&&!n.isPlayer&&n.sleepState!==it.SLEEPING&&e(n)}}function Gd(i,t,e,n,s,o=.04,r=.07){let a=y.aim.start,l=un(a,a.clone().addScaledVector(i,t),ra),c=l?l.point:a.clone().addScaledVector(i,t);return $i(y.aim.hand,c,s,o,r),l&&Nd(l,i,e,n,s),l}function mo(i,t){return i.cd=Math.max(0,(i.cd||0)-t),i.cd<=0}var Wd=[{id:"blaster",name:"Blaster",icon:"\u{1F52B}",color:16765503,hint:"Click / hold: shoot. Breaks blocks, pops TNT",down(){this.fire()},held(i){mo(this,i)&&this.fire()},update(i){mo(this,i)},fire(){this.cd>0||(this.cd=.13,lt.shoot(),Gd(aa(y.aim.dir,.006),200,18,5,16769126),y.player.swing=0)}},{id:"shotgun",name:"Shotgun",icon:"\u{1F4A5}",color:16747036,hint:"Click: 9 pellets of chaos",down(){if(!(this.cd>0)){this.cd=.75,lt.shotgun();for(let i=0;i<9;i++)Gd(aa(y.aim.dir,.07),60,10,4.5,16757575,.03,.06);y.player.fling(y.aim.dir.clone().multiplyScalar(-2.5)),y.shake=Math.max(y.shake,.3)}},update(i){mo(this,i)}},{id:"minigun",name:"Minigun",icon:"\u{1F300}",color:12632256,hint:"Hold click: spin up and shred",spin:0,held(i){if(this.spin=Math.min(1,this.spin+i*2.5),this.spin<.6){lt.whir(this.spin);return}for(this.acc=(this.acc||0)+i;this.acc>.045;)this.acc-=.045,lt.minigun(),Gd(aa(y.aim.dir,.03),150,7,2.2,16773544,.03,.05);y.shake=Math.max(y.shake,.08)},update(i,t){t.mouseDown||(this.spin=Math.max(0,this.spin-i*2))}},{id:"sniper",name:"Railgun",icon:"\u{1F3AF}",color:10148351,hint:"Click: piercing shot through up to 6 things",down(){if(this.cd>0)return;this.cd=1,lt.rail();let i=y.aim.dir.clone(),t=y.aim.start.clone(),e=t.clone().addScaledVector(i,300);for(let n=0;n<6;n++){let s=un(t,t.clone().addScaledVector(i,300),ra);if(!s||(Nd(s,i,90,22,10148351),e=s.point,!s.body.ent))break;t=s.point.clone().addScaledVector(i,.02)}$i(y.aim.hand,e,12577279,.09,.35),$i(y.aim.hand,e,16777215,.03,.35),y.player.fling(i.clone().multiplyScalar(-4)),y.shake=Math.max(y.shake,.4)},update(i){mo(this,i)}},{id:"lightning",name:"Lightning Gun",icon:"\u26A1",color:11065599,hint:"Click: lightning that chains between things",down(){if(this.cd>0)return;this.cd=.55,lt.zap();let i=xn(80),t=i?i.point:y.aim.start.clone().addScaledVector(y.aim.dir,80);if(cd(y.aim.hand,t),cr(t,30,9356799),!i)return;let e=new Set,n=i.point,s=(o,r)=>{let a=Oe(o),l=a||o;if(e.has(l))return null;e.add(l);let c=Pt(o.position);return r&&cd(r,c),yn(c,new _(0,1,0),12575743,10,6),a?a.hurt(30,null,new _(F(-3,3),7,F(-3,3))):o.type===it.DYNAMIC&&(o.velocity.y+=6*ro(o.mass),o.velocity.x+=F(-2,2),o.velocity.z+=F(-2,2),o.angularVelocity.set(F(-8,8),F(-8,8),F(-8,8)),o.wakeUp(),o.ent&&(ws(o.ent,35,null),Math.random()<.3&&Ki(o.ent,5))),c};i.body.ent&&(n=s(i.body,null)||n);for(let o=0;o<6;o++){let r=null,a=9;for(let c of Ms(n,9)){let h=Oe(c.b);e.has(h||c.b)||c.d<a&&(a=c.d,r=c.b)}if(!r)break;let l=s(r,n);if(!l)break;n=l}},update(i){mo(this,i)}},{id:"flamer",name:"Flamethrower",icon:"\u{1F525}",color:16738842,hint:"Hold click: set things on fire. Wood burns, TNT cooks off",held(i){let t=y.aim.dir,e=y.aim.hand;for(let s=0;s<3;s++){let o=aa(t,.12).multiplyScalar(F(12,16)).add(y.player.body.velocity);ae({pos:e.clone().addScaledVector(t,.9),vel:o,color:[16751146,16738842,16727316][s],size:F(.1,.2),life:F(.35,.55),glow:!0,add:!0,opacity:.55,gravity:-3,drag:2.2,grow:2.2,shrink:!1})}if(lt.flame(),this.tick=(this.tick||0)-i,this.tick>0)return;this.tick=.12;let n=7.5;for(let s of Ms(e,n,t,.88))s.b.ent&&(Ki(s.b.ent,9),s.b.velocity.x+=t.x*.5,s.b.velocity.z+=t.z*.5,s.b.wakeUp());for(let s of ur(e,n)){let o=s.center().sub(e),r=o.length();o.dot(t)/r>.85&&s.ignite()}}},{id:"cannon",name:"Cannon",icon:"\u26AB",color:3355443,hint:"Click: fire a heavy cannonball",down(){if(this.cd>0)return;this.cd=.8,lt.explosion(.35);let i=y.aim.dir.clone(),t=Bn("cannonball",y.aim.hand.clone().addScaledVector(i,1.2),{spawned:!0,vel:i.clone().multiplyScalar(60).add(y.player.body.velocity)});t.born=y.time,t.update=function(){y.time-this.born>15&&We(this,!0)},sn(y.aim.hand.clone().addScaledVector(i,1.5),6,11184810,.5),y.player.fling(i.multiplyScalar(-5)),y.shake=Math.max(y.shake,.4)},update(i){mo(this,i)}},{id:"bat",name:"Home Run Bat",icon:"\u{1F3CF}",color:12618319,hint:"Click: smack things (and dummies) out of the park",down(){if(this.cd>0)return;this.cd=.4,y.player.swing=1;let i=y.aim.dir.clone(),t=y.player.pos().addScaledVector(i,1.6),e=!1;for(let n of ur(t,2.4)){let s=i.clone().multiplyScalar(26).add(new _(0,10,0));n.hurt(25,i,s),n.markFling(),En("HOME RUN!",n.center().add(new _(0,1.5,0)),"#ffcf3a",24),e=!0}for(let n of Ms(t,2.4)){if(Oe(n.b))continue;let s=20*ro(n.b.mass);n.b.velocity.x+=i.x*s,n.b.velocity.y+=i.y*s+5*ro(n.b.mass),n.b.velocity.z+=i.z*s,n.b.angularVelocity.set(F(-8,8),F(-8,8),F(-8,8)),n.b.wakeUp(),n.b.ent&&ws(n.b.ent,40,i),e=!0}e?(lt.whack(),y.shake=Math.max(y.shake,.35),yn(t,i.clone().negate(),16777215,10,6)):lt.swoosh()},update(i){mo(this,i)}}];function Ei(i,t){i.cd=Math.max(0,(i.cd||0)-t)}function fa(i,t=3){return y.aim.dir.clone().multiplyScalar(i).add(new _(0,t,0)).add(y.player.body.velocity)}function pa(){return y.aim.hand.clone().addScaledVector(y.aim.dir,.9)}var _E={id:"grenade",shape:"sphere",r:.16,mat:"rubber",color:3493919,detail:0,explosive:{power:.75,impact:999,hp:1}},bE={id:"sticky",shape:"sphere",r:.17,mat:"tnt",color:16720469,detail:0,explosive:{power:.9,impact:999,hp:1}},wE={id:"bh",shape:"sphere",r:.3,mat:"metal",color:5904538,explosive:{power:.1,impact:999,hp:999}},ME={id:"firebomb",shape:"sphere",r:.2,mat:"glass",color:16747036,detail:0},EE=new Gi(.12,.6,6),SE=new kr?new kr(.25,.6,2,6):new Je(.25,.25,1,6),TE=new In(1.4,0),AE=new Zo(1,12,8),f0=new ms(1.8,.12,4,32);function RE(i){let t=new tn,e=new Et(AE,new we({color:327688})),n=new Et(f0,new we({color:13073919,transparent:!0,opacity:.9})),s=new Et(f0,new we({color:8072383,transparent:!0,opacity:.7}));n.rotation.x=Math.PI/2,s.rotation.x=Math.PI/3,t.add(e,n,s),t.position.copy(i),y.scene.add(t),lt.blackhole(),y.blackholes.push({pos:i.clone().add(new _(0,1.5,0)),t:0,life:3.8,mesh:t,ring:n,ring2:s})}var p0=new b;function CE(){for(let i of y.blackholes){let t=Math.min(1,i.t/.6);for(let e of y.world.bodies){if(e.type!==it.DYNAMIC)continue;let n=i.pos.x-e.position.x,s=i.pos.y-e.position.y,o=i.pos.z-e.position.z,r=Math.hypot(n,s,o);if(r>26||r<.01)continue;let a=(75*(1-r/26)+12)*t;e.isPlayer&&(a*=.35);let l=1/r;p0.set((n*l+-o*l*.5)*a*e.mass,s*l*a*e.mass+9.82*e.mass*.5*t,(o*l+n*l*.5)*a*e.mass),e.applyForce(p0),r<2&&e.velocity.scale(.9,e.velocity);let c=e.velocity.length();c>30&&e.velocity.scale(30/c,e.velocity),e.wakeUp()}}}y.extraForces.push(CE);function qd(i){for(let t=y.blackholes.length-1;t>=0;t--){let e=y.blackholes[t];e.t+=i;let n=Math.min(1,e.t/.6);e.mesh.position.lerp(e.pos,.1),e.mesh.scale.setScalar(n*(1+Math.sin(e.t*20)*.05)*(e.t>e.life-.3?1-(e.t-e.life+.3)/.3*.8:1)),e.ring.rotation.z+=i*6,e.ring2.rotation.z-=i*9;for(let s=0;s<3;s++){let o=F(0,Math.PI*2),r=F(5,9),a=e.pos.clone().add(new _(Math.cos(o)*r,F(-2,2),Math.sin(o)*r));ae({pos:a,vel:e.pos.clone().sub(a).multiplyScalar(2).add(new _(-Math.sin(o)*6,0,Math.cos(o)*6)),color:Math.random()<.5?13073919:5904538,size:.15,life:.45,glow:!0,add:!0,gravity:0,drag:0})}for(let s of y.dummies)s.state==="standing"&&s.center().distanceTo(e.pos)<16*n&&s.knock(null);y.player&&y.player.pos().distanceTo(e.pos)<26&&(y.player.stun=Math.max(y.player.stun,.3)),e.t>=e.life&&(y.scene.remove(e.mesh),y.blackholes.splice(t,1),Fn(e.pos,1.9),ii(e.pos,40,16))}}var Xd=[{id:"tnt",name:"TNT Toss",icon:"\u{1F9E8}",color:13904414,hint:"Click: throw lit TNT (2.5s fuse). Chains with other TNT!",down(){if(this.cd>0)return;this.cd=.3;let i=Gt(Kt.tnt,pa(),{spawned:!0,vel:fa(15),angVel:new _(F(-5,5),F(-5,5),F(-5,5))});i.fuse=2.5,lt.fling()},update(i){Ei(this,i)}},{id:"grenade",name:"Grenade Launcher",icon:"\u{1F7E2}",color:3493919,hint:"Click: bouncy grenades (1.6s fuse)",down(){if(this.cd>0)return;this.cd=.4;let i=Gt(_E,pa(),{spawned:!0,vel:fa(26,4)});i.fuse=1.6,lt.pop()},update(i){Ei(this,i)}},{id:"rocket",name:"Rocket Launcher",icon:"\u{1F680}",color:7048739,hint:"Click: rocket that explodes on impact",down(){if(this.cd>0)return;this.cd=.7,lt.rocket();let i=y.aim.dir.clone(),t=lc(EE,14540253);la({pos:y.aim.hand.clone().addScaledVector(i,.8),vel:i.multiplyScalar(48),life:4,mesh:t,trail:e=>{ae({pos:e,vel:new _(F(-.5,.5),F(0,1),F(-.5,.5)),color:10066329,size:.35,life:.8,gravity:-1,grow:1.5,shrink:!1,opacity:.6,floor:!1}),ae({pos:e,vel:new _,color:16753434,size:.25,life:.12,glow:!0,add:!0,gravity:0})},onHit:e=>Fn(e.point.clone().addScaledVector(e.normal,.3),1),end:e=>Fn(e,1)}),y.player.fling(y.aim.dir.clone().multiplyScalar(-1.5))},update(i){Ei(this,i)}},{id:"sticky",name:"Sticky Bombs",icon:"\u{1F4A3}",color:16720469,hint:"Click: sticks to anything, then BOOM after 2s",down(){if(this.cd>0)return;this.cd=.3;let i=Gt(bE,pa(),{spawned:!0,vel:fa(24,2)});lt.pop(),i.body.addEventListener("collide",t=>{if(i.stuck||i.dead||t.body.isPlayer)return;i.stuck=!0;let e=t.body;Wn(()=>{if(i.dead)return;let n=Oe(e);n?(n.state==="standing"&&n.knock(null),bi(i.body,n.parts.torso.body)):e.type===it.DYNAMIC?bi(i.body,e):(i.body.type=it.STATIC,i.body.mass=0,i.body.updateMassProperties(),i.body.velocity.setZero()),i.fuse=2,lt.beep()})}),i.update=function(){!this.stuck&&y.time-this.born>6&&this.fuse==null&&(this.fuse=.1)}},update(i){Ei(this,i)}},{id:"blackhole",name:"Black Hole",icon:"\u{1F300}",color:8072383,hint:"Click: throw a singularity. Sucks everything in\u2026 then pops",down(){if(this.cd>0||y.blackholes.length>=3)return;this.cd=1.5;let i=Gt(wE,pa(),{spawned:!0,vel:fa(18,3)});i.fuse=1,i.onFuse=()=>{let t=Pt(i.body.position);y.removeEnt(i,!0),RE(t)}},update(i){Ei(this,i)}},{id:"firebomb",name:"Fire Bomb",icon:"\u{1F37E}",color:16747036,hint:"Click: shatters into a pool of fire",down(){if(this.cd>0)return;this.cd=.5;let i=Gt(ME,pa(),{spawned:!0,vel:fa(20,4),angVel:new _(8,0,4)});i.body.addEventListener("collide",t=>{i.dead||t.body.isPlayer||Wn(()=>{if(i.dead)return;let e=Pt(i.body.position);y.removeEnt(i,!0),lt.shatter(),lt.explosion(.3),hd(e,2.5,.5),Cd(new _(e.x,Math.max(0,e.y-.15),e.z),3.5,8);for(let n of Ms(e,3.5))n.b.ent&&y.ignite(n.b.ent,9)})})},update(i){Ei(this,i)}},{id:"meteor",name:"Meteor Strike",icon:"\u2604\uFE0F",color:16735770,hint:"Click a spot: call down a meteor",down(){if(this.cd>0)return;this.cd=1.6;let t=oo(300,40).point.clone(),e=t.clone().add(new _(F(-30,30),80,F(-30,30))),n=lc(TE,5913130);n.material.emissive=new St(16726528),n.material.emissiveIntensity=.6,lt.whistle(),la({pos:e,vel:t.clone().sub(e).divideScalar(1.3),life:1.3,mesh:n,collide:!1,trail:s=>{for(let o=0;o<2;o++)ae({pos:s.clone().add(new _(F(-1,1),F(-1,1),F(-1,1))),vel:new _,color:[16747036,16765002,5592405][o+(Math.random()<.4?1:0)],size:F(.6,1.1),life:.6,glow:o===0,add:!0,gravity:0,grow:1,shrink:!1});n.rotation.x+=.2},end:s=>{Fn(t.clone().add(new _(0,.5,0)),2.3,{fire:!0});for(let o=0;o<4;o++)Gt({...Kt.chunk,size:[.6,.5,.6],mat:"rock",color:4862760},t.clone().add(new _(F(-1,1),1+o*.6,F(-1,1))),{spawned:!0,gen:2,vel:new _(F(-8,8),F(6,12),F(-8,8))})}})},update(i){Ei(this,i)}},{id:"airstrike",name:"Airstrike",icon:"\u2708\uFE0F",color:5597999,hint:"Click a spot: carpet bomb a line",down(){if(this.cd>0)return;this.cd=3.5;let i=oo(300,40),t=new _(y.aim.dir.x,0,y.aim.dir.z).normalize();lt.plane(),En("INCOMING!",i.point.clone().add(new _(0,3,0)),"#ff5555",24);for(let e=0;e<8;e++){let n=i.point.clone().addScaledVector(t,(e-2)*4);sr(.6+e*.16,()=>{let s=lc(SE,3095082);la({pos:n.clone().add(new _(0,45,0)),vel:new _(0,-40,0),gravity:20,life:4,mesh:s,onHit:o=>Fn(o.point.clone().add(new _(0,.4,0)),1),end:o=>Fn(o,1)})})}},update(i){Ei(this,i)}},{id:"nuke",name:"Nuke",icon:"\u2622\uFE0F",color:14860829,hint:"Click a spot: you asked for it",down(){if(this.cd>0)return;this.cd=7;let t=oo(300,60).point.clone(),e=new Et(new Je(.6,.6,2.2,8),new fe({color:14860829,flatShading:!0}));En("\u2622 NUKE INCOMING \u2622",t.clone().add(new _(0,4,0)),"#ffe14a",30),lt.whistle(2.4),la({pos:t.clone().add(new _(0,90,0)),vel:new _(0,-37,0),life:2.4,collide:!1,mesh:e,end:()=>{Fn(t.clone().add(new _(0,1,0)),4.5,{fire:!0});for(let n=0;n<40;n++){let s=F(0,Math.PI*2),o=F(0,5);ae({pos:t.clone().add(new _(Math.cos(s)*o,F(1,4),Math.sin(s)*o)),vel:new _(Math.cos(s)*2,F(12,20),Math.sin(s)*2),color:[16747036,5917242,9075306][n%3],size:F(2,3.5),life:F(2.5,4),gravity:3,drag:.8,grow:1.6,shrink:!1,opacity:.85,floor:!1,spin:.5})}for(let n=0;n<30;n++){let s=n/30*Math.PI*2;ae({pos:t.clone().add(new _(0,.5,0)),vel:new _(Math.cos(s)*30,1,Math.sin(s)*30),color:14274488,size:1.8,life:1.6,gravity:0,drag:1.2,grow:1,shrink:!1,opacity:.7,floor:!1})}lr(t.clone().add(new _(0,.5,0)),30,16777215,1.2)}})},update(i){Ei(this,i)}},{id:"fireworks",name:"Fireworks",icon:"\u{1F386}",color:15220591,hint:"Click a spot: launch a firework barrage",down(){if(this.cd>0)return;this.cd=.4;let i=oo(120,10);rc(i.point.clone().add(new _(0,.5,0)),3)},update(i){Ei(this,i)}}];function Yd(i,t){i.cd=Math.max(0,(i.cd||0)-t)}function ma(i,t,e,n,s,o,r){return{id:i,name:t,icon:e,color:n,hint:s,down(){if(this.cd>0)return;this.cd=o;let a=xn(120),l=a?a.point:y.aim.start.clone().addScaledVector(y.aim.dir,120);$i(y.aim.hand,l,n,.07,.2),$i(y.aim.hand,l,16777215,.025,.2),lt.ray(n),a&&(yn(a.point,a.normal,n,10,4),r(a))},update(a){Yd(this,a)}}}var gc={id:"magnet",name:"Magnet",icon:"\u{1F9F2}",color:16726843,hint:"Hold click: pull everything in front of you into a ball. Let go to drop",active:!1,held(){this.active=!0},update(i,t){if(t.mouseDown||(this.active=!1),this.active){let e=y.aim.start.clone().addScaledVector(y.aim.dir,6);if(this.point=e,Math.random()<.6){let n=F(0,Math.PI*2),s=e.clone().add(new _(Math.cos(n)*4,F(-2,2),Math.sin(n)*4));ae({pos:s,vel:e.clone().sub(s).multiplyScalar(3),color:16739179,size:.08,life:.3,glow:!0,add:!0,gravity:0,drag:0})}for(let n of ur(e,12))n.state==="standing"&&n.knock(null);lt.hum()}},unequip(){this.active=!1}},go=new b;y.extraForces.push(()=>{if(!gc.active||!gc.point)return;let i=gc.point;for(let t of y.world.bodies){if(t.type!==it.DYNAMIC||t.isPlayer)continue;let e=i.x-t.position.x,n=i.y-t.position.y,s=i.z-t.position.z,o=Math.hypot(e,n,s);if(o>16)continue;let r=40*(1-o/16)+6;go.set(e/(o+.01)*r*t.mass-t.velocity.x*2*t.mass,n/(o+.01)*r*t.mass-t.velocity.y*2*t.mass+9.82*t.mass,s/(o+.01)*r*t.mass-t.velocity.z*2*t.mass);let a=Math.hypot(go.x,go.y,go.z);a>8e3&&go.scale(8e3/a,go),t.applyForce(go),t.wakeUp()}});var Zd=[{id:"push",name:"Force Push",icon:"\u{1F4A8}",color:14743551,hint:"Click: shockwave cone that also pushes you backwards. Aim at your feet to rocket-jump!",down(){if(this.cd>0)return;this.cd=.5,lt.push();let i=y.aim.dir.clone(),t=y.aim.hand.clone();for(let s=0;s<24;s++){let o=i.clone().add(new _(F(-.35,.35),F(-.35,.35),F(-.35,.35))).normalize().multiplyScalar(F(18,28));ae({pos:t,vel:o,color:14743551,size:F(.2,.4),life:.4,glow:!0,add:!1,opacity:.5,gravity:0,drag:3,grow:2,shrink:!1})}let e=y.player.body.velocity,n=13;e.x-=i.x*n,e.z-=i.z*n,y.player.pitch<-1?(e.y=Math.max(e.y,17),sn(y.player.feet(),8,16777215,.6)):i.y<0?e.y=Math.max(e.y,-i.y*n+2):e.y-=i.y*n*.6,y.player.stun=Math.max(y.player.stun,.3);for(let s of ur(t,16)){let o=s.center().sub(t),r=o.length();if(o.dot(i)/r<.75)continue;let a=24*(1-r/16)+6;s.knock(i.clone().multiplyScalar(a).add(new _(0,5,0)))}for(let s of Ms(t,16,i,.75)){if(Oe(s.b))continue;s.b.ent&&s.b.ent.frozen&&Ji(s.b.ent);let o=(26*(1-s.d/16)+4)*ro(s.b.mass);s.b.velocity.x+=i.x*o,s.b.velocity.y+=i.y*o+3*ro(s.b.mass),s.b.velocity.z+=i.z*o,s.b.wakeUp()}y.shake=Math.max(y.shake,.2)},update(i){Yd(this,i)}},gc,ma("freeze","Freeze Ray","\u2744\uFE0F",8382719,"Click: freeze in place (hit again to thaw). Frozen things shatter easily",.2,i=>{let t=Oe(i.body);if(t){t.frozen?t.unfreeze():t.freeze(12),lt.freeze();return}let e=i.body.ent;e&&(e.frozen?Ji(e):Ad(e,12),e.burn>0&&(e.burn=0,y.burning--),lt.freeze())}),ma("antigrav","Anti-Gravity Ray","\u{1FA90}",13073919,"Click: make it float away for 10s",.2,i=>{let t=Oe(i.body);if(t){t.state==="standing"&&t.knock(new _(0,3,0));for(let n in t.parts)t.parts[n].antigrav=10,t.parts[n].body.wakeUp();return}let e=i.body.ent;!e||i.body.type!==it.DYNAMIC||(e.antigrav=10,i.body.velocity.y+=2,i.body.wakeUp())}),ma("grow","Grow Ray","\u{1F53C}",8191834,"Click: make things BIGGER (heavier, too)",.25,i=>{let t=Oe(i.body);if(t){t.rescale(1.35),lt.grow();return}i.body.ent&&ac(i.body.ent,1.4)?lt.grow():pe("Max size!")}),ma("shrink","Shrink Ray","\u{1F53D}",16739286,"Click: make things tiny",.25,i=>{let t=Oe(i.body);if(t){t.rescale(1/1.35),lt.shrink();return}i.body.ent&&ac(i.body.ent,1/1.4)?lt.shrink():pe("Min size!")}),ma("paint","Paint Gun","\u{1F3A8}",16760331,"Click: random paint job",.12,i=>{let t=Oe(i.body);if(t){t.meshes.torso.material.color.setHSL(Math.random(),.8,.55),t.meshes.legL.material.color.setHSL(Math.random(),.6,.35);return}i.body.ent&&i.body.ent.kind==="item"&&Rd(i.body.ent)}),{id:"teleport",name:"Teleporter",icon:"\u{1F300}",color:3920383,hint:"Click a spot: blink there",down(){if(this.cd>0)return;this.cd=.35;let i=xn(150);if(!i){pe("Aim at something");return}let t=y.player.pos(),e=i.point.clone().addScaledVector(i.normal,1).add(new _(0,.9,0));ii(t,20,4),y.player.body.position.set(e.x,e.y,e.z),y.player.body.previousPosition.set(e.x,e.y,e.z),y.player.body.interpolatedPosition.set(e.x,e.y,e.z),y.player.camY=void 0,y.player.body.velocity.set(0,0,0),ii(e,20,4),$i(t,e,3920383,.1,.3),lt.teleport()},update(i){Yd(this,i)}}];function ga(i,t){i.cd=Math.max(0,(i.cd||0)-t)}var Rs=null;function m0(i,t){Rs||(Rs=new Et(new ms(.45,.04,4,20),new we({color:16777215,transparent:!0,opacity:.7})),Rs.rotation.x=Math.PI/2,y.scene.add(Rs)),Rs.visible=!!i,i&&(Rs.position.copy(i).add(new _(0,.03,0)),Rs.material.color.set(t),Rs.rotation.z+=.05)}function $d(){let i=xn(80);if(!i)return null;let t=i.body,e=Oe(t);return e?(e.state==="standing"&&e.knock(null),t=e.parts.torso.body,{body:t,local:new b(0,.2*e.s,0),point:Pt(t.position)}):{body:t,local:t.pointToLocalFrame(new b(i.point.x,i.point.y,i.point.z)),point:i.point}}var Te=null,Qi=null;function g0(i,t,e){if(Qi||(Qi=new _s(e,.025,8,!0)),t.tap("KeyF")&&(Te=null,pe("Cancelled")),Te&&Te.tool===i.id){let n=Pt(Te.body.pointToWorldFrame(Te.local)),s=xn(80);Qi.setColor(e),Qi.update(n,s?s.point:y.aim.start.clone().addScaledVector(y.aim.dir,10),.3),y.toolNote="Click the second point (F to cancel)"}else Qi.hide(),y.toolNote=null}var jd=[{id:"spawner",name:"Spawner",icon:"\u{1F9F0}",color:3835647,hint:"Click: spawn the selected item \xB7 T: next item \xB7 TAB: pick from menu",placement(){let i=Kt[y.spawnId],t=oo(40,7),e=y.player.yaw+Math.PI,n=t.point.clone(),s=i.rot?new Qt().setFromEuler(new Ve(...i.rot)):new Qt().setFromAxisAngle(new _(0,1,0),e);if(!i.dummy&&!i.prefab){let o=oa(i);t.miss?n.y=Math.max(n.y,.5):n.addScaledVector(t.normal,o+.05)}return{def:i,p:n,yaw:e,quat:s,ground:t.point}},down(){if(this.cd>0)return;this.cd=.2;let{def:i,p:t,yaw:e,quat:n}=this.placement(),s=new Set(y.ents),o=new Set(y.dummies);i.dummy||i.prefab?Bn(i,t,{spawned:!0,yaw:e}):Bn(i,t,{spawned:!0,quat:i.rot?void 0:n}),y.spawnLog=y.spawnLog||[],y.spawnLog.push({ents:[...y.ents].filter(r=>!s.has(r)),dummies:[...y.dummies].filter(r=>!o.has(r))}),y.spawnLog.length>50&&y.spawnLog.shift(),sn(t,3,16777215,.4),lt.pop()},update(i,t){if(ga(this,i),t.tap("KeyT")){let r=bs,a=r.findIndex(l=>l.id===y.spawnId);y.spawnId=r[(a+1)%r.length].id,pe(`Spawner: ${Kt[y.spawnId].name}`)}let{def:e,p:n,quat:s,ground:o}=this.placement();m0(o,16777215),this.ghostId!==y.spawnId&&(this.ghost&&y.scene.remove(this.ghost),this.ghost=e.dummy||e.prefab?null:Md(e),this.ghost&&y.scene.add(this.ghost),this.ghostId=y.spawnId),this.ghost&&(this.ghost.visible=!0,this.ghost.position.copy(n),this.ghost.quaternion.copy(s))},unequip(){m0(null),this.ghost&&(this.ghost.visible=!1)}},{id:"eraser",name:"Eraser",icon:"\u{1F9FD}",color:16735370,hint:"Click: delete an object or dummy",down(){if(this.cd>0)return;this.cd=.08;let i=xn(100);if(!i||!i.body.ent)return;let t=Oe(i.body),e=i.point;t?t.remove():We(i.body.ent),ii(e,14,4),lt.pop()},update(i){ga(this,i)}},{id:"clone",name:"Cloner",icon:"\u{1F9EC}",color:448160,hint:"Click: duplicate whatever you aim at",down(){if(this.cd>0)return;this.cd=.25;let i=xn(100);if(!i||!i.body.ent){pe("Aim at an object");return}let t=Oe(i.body);if(t){Yn(t.origin().add(new _(F(-1,1),.3,F(-1,1))),t.variant,{spawned:!0,scale:t.s/(t.cfg.s||1)}),lt.pop();return}let e=i.body.ent;if(e.kind!=="item")return;let n=(oa(e.def)*2+.1)*e.scale;Bn(e.def,Pt(e.body.position).add(new _(0,n,0)),{spawned:!0,scale:e.scale,quat:e.mesh.quaternion,gen:e.gen}),yn(i.point,i.normal,448160,10,4),lt.pop()},update(i){ga(this,i)}},{id:"rope",name:"Rope Tool",icon:"\u{1FAA2}",color:15260864,hint:"Click two things to tie them together (works on the ground too)",down(){let i=$d();if(!i)return;if(!Te||Te.tool!=="rope"){Te={...i,tool:"rope"},lt.grab();return}if(i.body===Te.body){pe("Pick something else");return}if(i.body.type!==it.DYNAMIC&&Te.body.type!==it.DYNAMIC){pe("One end must be an object"),Te=null;return}let t=Math.max(.5,i.point.distanceTo(Te.point));si(Te.body,Te.local,i.body,i.local,t),Te=null,lt.grab()},update(i,t){g0(this,t,15260864)},unequip(){Te=null,Qi&&Qi.hide(),y.toolNote=null}},{id:"weld",name:"Weld Tool",icon:"\u{1F529}",color:16754219,hint:"Click two things to weld them rigidly together",down(){let i=$d();if(i){if(!Te||Te.tool!=="weld"){Te={...i,tool:"weld"},lt.grab();return}if(i.body===Te.body){pe("Pick something else");return}if(i.body.type!==it.DYNAMIC&&Te.body.type!==it.DYNAMIC){pe("One end must be an object"),Te=null;return}bi(Te.body,i.body),yn(i.point,new _(0,1,0),16754219,16,5),yn(Te.point,new _(0,1,0),16754219,16,5),Te=null,lt.weld?lt.weld():lt.crack()}},update(i,t){g0(this,t,16754219)},unequip(){Te=null,Qi&&Qi.hide(),y.toolNote=null}},{id:"balloon",name:"Balloon Tool",icon:"\u{1F388}",color:16726843,hint:"Click: tie a balloon on. Enough balloons lift anything!",down(){if(this.cd>0)return;this.cd=.15;let i=$d();if(!i)return;let t=i.point.clone().add(new _(F(-.5,.5),3,F(-.5,.5))),e=Bn("balloon",t,{spawned:!0});e.lift=160,si(i.body,i.local,e.body,new b(0,-.5,0),2.8,16777215),i.body.wakeUp(),lt.pop()},update(i){ga(this,i)}},{id:"thruster",name:"Thruster",icon:"\u{1F525}",color:16752412,hint:"Click a surface: strap a rocket on it (6s)",down(){if(this.cd>0)return;this.cd=.2;let i=xn(80);if(!i||!i.body.ent){pe("Aim at an object");return}let t=i.body,e=Oe(t),n=i.point,s=i.normal;if(e&&(e.state==="standing"&&e.knock(null),t=e.parts.torso.body,n=Pt(t.position)),t.type!==it.DYNAMIC)return;let o=t.ent,r=t.pointToLocalFrame(new b(n.x,n.y,n.z)),l=t.quaternion.inverse().vmult(new b(-s.x,-s.y,-s.z));e&&l.set(0,1,0);let c=new Et(new Je(.1,.16,.35,6),new fe({color:5592405,flatShading:!0})),h=o.scale||1;c.position.set(r.x/h,r.y/h,r.z/h),c.quaternion.setFromUnitVectors(new _(0,1,0),new _(l.x,l.y,l.z)),c.scale.setScalar(1/h),o.mesh.add(c),o.thrusters.push({lp:r,ld:l,t:6,power:e?55:26,mesh:c}),t.wakeUp(),lt.rocket()},update(i){ga(this,i)}}];var Si=[...Dd,...Wd,...Xd,...Zd,...jd],yo=Object.fromEntries(Si.map(i=>[i.id,i])),y0=[["Grab",Dd],["Weapons",Wd],["Explosives",Xd],["Rays & Forces",Zd],["Build",jd]],x0=["fling","blaster","rocket","tnt","flamer","blackhole","push","freeze","spawner","bat"];var Me=i=>document.getElementById(i),Nt={hotbar:[...x0],slot:0,menuOpen:!1,tab:"tools",query:"",onEquip:null};try{let i=JSON.parse(localStorage.getItem("fling_hotbar")||"null");Array.isArray(i)&&i.length===10&&i.every(t=>yo[t])&&(Nt.hotbar=i)}catch{}function w0(){try{localStorage.setItem("fling_hotbar",JSON.stringify(Nt.hotbar))}catch{}}function Dn(){return yo[Nt.hotbar[Nt.slot]]}var M0=i=>i==="spawner"?Kt[y.spawnId].icon:yo[i].icon,E0=i=>i==="spawner"?Kt[y.spawnId].name:yo[i].name,gr=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function tf(){let i=Me("hotbar");i.innerHTML="",Nt.hotbar.forEach((e,n)=>{let s=document.createElement("div");s.className="slot"+(n===Nt.slot?" on":""),s.innerHTML=`<span class="k">${(n+1)%10}</span><span class="i">${M0(e)}</span>`,s.title=E0(e),i.appendChild(s)});let t=Dn();Me("toolname").textContent=t.id==="spawner"?`Spawner \xB7 ${Kt[y.spawnId].name}`:t.name,Me("toolhint").textContent=t.hint}function ef(i){i&&i.unequip&&i!==Dn()&&i.unequip(),tf(),Nt.onEquip&&Nt.onEquip(Dn())}function xc(i){if(i===Nt.slot)return;let t=Dn();Nt.slot=i,ef(t)}function v0(i){let t=Dn(),e=Nt.hotbar.indexOf(i);e>=0&&e!==Nt.slot&&(Nt.hotbar[e]=Nt.hotbar[Nt.slot]),Nt.hotbar[Nt.slot]=i,w0(),ef(t)}function nf(i){let e=Si.findIndex(s=>s.id===Nt.hotbar[Nt.slot]);for(let s=0;s<Si.length&&(e=(e+i+Si.length)%Si.length,!!Nt.hotbar.includes(Si[e].id));s++);let n=Dn();Nt.hotbar[Nt.slot]=Si[e].id,w0(),ef(n),pe(Si[e].name)}function Jd(i,t,e,n,s,o=""){let r=document.createElement("button");return r.className="card"+(s?" on":""),r.innerHTML=`<span class="i">${i}</span><span class="txt"><span class="n">${gr(t)}</span>${e?`<span class="s">${gr(e)}</span>`:""}</span>${o}`,r.onclick=a=>{a.stopPropagation(),n()},r}function Kd(i,t,e){let n=document.createElement("h3");n.innerHTML=`${gr(t)}${e!=null?`<span>${e}</span>`:""}`,i.appendChild(n);let s=document.createElement("div");return s.className="grid",i.appendChild(s),s}var _0=(...i)=>{let t=Nt.query.trim().toLowerCase();return!t||i.some(e=>e&&e.toLowerCase().includes(t))};function IE(i){let t=document.createElement("div");t.className="settings",i.appendChild(t);let e=(r,a,l)=>{let c=document.createElement("div");c.className="srow",c.innerHTML=`<div class="sl"><div class="n">${gr(r)}</div><div class="s">${gr(a)}</div></div>`,c.appendChild(l),t.appendChild(c)},n=(r,a,l,c,h)=>{let d=document.createElement("div");d.className="sctl";let u=document.createElement("input");u.type="range",u.min=a,u.max=l,u.step=c,u.value=nn[r];let f=document.createElement("span");return f.className="sval",f.textContent=h(nn[r]),u.oninput=()=>{Ks(r,+u.value),f.textContent=h(+u.value)},d.append(u,f),d},s=(r,a)=>{let l=document.createElement("div");l.className="sctl seg";for(let[c,h]of a){let d=document.createElement("button");d.textContent=h,d.className=nn[r]===c?"on":"",d.onclick=u=>{u.stopPropagation(),Ks(r,c),xo()},l.appendChild(d)}return l};e("Mouse sensitivity","Also [ and ] in game. Raise it if your touchpad feels slow.",n("sens",.3,8,.1,r=>r.toFixed(1))),e("Invert look up/down","Flip vertical mouse movement.",s("invertY",[[!1,"Off"],[!0,"On"]])),e("Field of view","How wide you can see.",n("fov",60,100,1,r=>`${r}\xB0`)),e("Volume","M mutes everything.",n("volume",0,1,.05,r=>`${Math.round(r*100)}%`)),e("Graphics","Low turns off shadows and lowers resolution (much faster). Also L.",s("quality",[["high","High"],["low","Low"]])),e("Theme","Light or dark menus.",s("theme",[["dark","Dark"],["light","Light"]])),e("Time of day","Night makes explosions and lamps glow.",s("time",[["day","Day"],["sunset","Sunset"],["night","Night"]]));let o=document.createElement("button");o.className="sreset",o.textContent="Reset to defaults",o.onclick=r=>{r.stopPropagation();for(let a in or)Ks(a,or[a]);xo()},t.appendChild(o)}function PE(){let i=Me("hbedit");i.innerHTML="",i.style.display=Nt.tab==="tools"?"":"none",Nt.hotbar.forEach((t,e)=>{let n=document.createElement("button");n.className="hslot"+(e===Nt.slot?" on":""),n.innerHTML=`<span class="k">${(e+1)%10}</span><span class="i">${M0(t)}</span><span class="n">${gr(E0(t))}</span>`,n.onclick=s=>{s.stopPropagation(),xc(e),xo()},i.appendChild(n)})}function xo(){let i=Me("menubody");if(i.innerHTML="",document.querySelectorAll("#menunav button[data-tab]").forEach(t=>t.classList.toggle("on",t.dataset.tab===Nt.tab)),Me("menusearch").style.visibility=Nt.tab==="tools"||Nt.tab==="items"?"visible":"hidden",Me("menuhead").classList.toggle("nosearch",!(Nt.tab==="tools"||Nt.tab==="items")),PE(),Nt.tab==="tools"){Me("menutitle").textContent="Tools",Me("menusub").textContent=`Pick a slot above, then click a tool to put it there. ${Si.length} tools.`;for(let[t,e]of y0){let n=e.filter(o=>_0(o.name,o.hint,t));if(!n.length)continue;let s=Kd(i,t,n.length);for(let o of n){let r=Nt.hotbar.indexOf(o.id);s.appendChild(Jd(o.icon,o.name,o.hint,()=>{v0(o.id),xo()},r===Nt.slot,r>=0?`<span class="badge">${(r+1)%10}</span>`:""))}}}else if(Nt.tab==="items"){Me("menutitle").textContent="Spawn",Me("menusub").textContent=`Choose what the Spawner makes. ${bs.length} things. (T cycles in-game)`;let t=[...new Set(bs.map(e=>e.cat))];for(let e of t){let n=bs.filter(o=>o.cat===e&&_0(o.name,e));if(!n.length)continue;let s=Kd(i,e,n.length);s.classList.add("small");for(let o of n)s.appendChild(Jd(o.icon,o.name,"",()=>{y.spawnId=o.id,v0("spawner"),yr(),pe(`Spawner \xB7 ${o.name}`)},y.spawnId===o.id))}}else if(Nt.tab==="maps"){Me("menutitle").textContent="Maps",Me("menusub").textContent=`${ha.length} maps. Loading a map resets everything on it.`;let t=Kd(i,"All maps");t.classList.add("wide");for(let e of ha)t.appendChild(Jd(e.icon,e.name,e.desc,()=>{mr(e.id),yr(),pe(e.name)},y.mapId===e.id))}else Nt.tab==="settings"?(Me("menutitle").textContent="Settings",Me("menusub").textContent="Saved automatically in this browser.",IE(i)):(Me("menutitle").textContent="Controls",Me("menusub").textContent="Single click + keyboard only. No right-click or two-finger click needed.",i.innerHTML+=Me("helptext").innerHTML);i.children.length||(i.innerHTML='<p class="empty">Nothing matches that search.</p>')}function sf(i){Nt.menuOpen=!0,i&&(Nt.tab=i),Me("menu").classList.add("open"),xo(),document.pointerLockElement&&document.exitPointerLock()}function yr(){Nt.menuOpen=!1,Me("menu").classList.remove("open"),Me("menusearch").blur(),y.requestLock&&y.requestLock()}function S0(){document.querySelectorAll("#menunav button[data-tab]").forEach(i=>{i.onclick=t=>{t.stopPropagation(),Nt.tab=i.dataset.tab,Nt.query="",Me("menusearch").value="",xo()}}),Me("menuclose").onclick=i=>{i.stopPropagation(),yr()},Me("menusearch").addEventListener("input",i=>{Nt.query=i.target.value,xo()}),Me("menu").addEventListener("mousedown",i=>i.stopPropagation())}var yc=0,Qd=0,b0=60;function T0(i){Qd++,yc+=i,yc>.5&&(b0=Math.round(Qd/yc),Qd=0,yc=0);let t=y.stats;Me("stats").innerHTML=`<div class="row"><span>BOOMS</span><b>${t.booms}</b><span>BROKEN</span><b>${t.destroyed}</b><span>FLUNG</span><b>${t.flings}</b><span>BEST</span><b>${t.best.toFixed(1)}m</b></div><div class="dim">${y.map?y.map.name.toUpperCase():""} \xB7 ${y.ents.size} OBJECTS \xB7 ${b0} FPS${y.timeScale<1?" \xB7 SLOW-MO":""}${y.player&&y.player.flying?" \xB7 FLYING":""}</div>`,Me("crosshair").className=y.crossHint||"",Me("toolnote").textContent=y.toolNote||""}y.spawnItem=Bn;y.addRope=si;y.removeRope=so;y.removeEnt=We;y.ignite=Ki;var Cs=document.getElementById("game"),li=new cl({canvas:Cs,antialias:!0,powerPreference:"high-performance"});li.setPixelRatio(Math.min(window.devicePixelRatio,1.5));li.setSize(window.innerWidth,window.innerHeight);li.shadowMap.enabled=!0;li.shadowMap.type=Tl;li.toneMapping=Au;li.toneMappingExposure=1.05;y.renderer=li;var bo=new ul;y.scene=bo;var vo=new ln(72,window.innerWidth/window.innerHeight,.1,1200);y.camera=vo;bo.add(vo);var A0=new bl(13625599,7035450,1.1);bo.add(A0);y.hemi=A0;var Ti=new El(16773590,2.2);Ti.castShadow=!0;Ti.shadow.mapSize.set(2048,2048);var vr=Ti.shadow.camera;vr.left=-45;vr.right=45;vr.top=45;vr.bottom=-45;vr.near=1;vr.far=220;Ti.shadow.bias=-5e-4;Ti.shadow.normalBias=.03;bo.add(Ti,Ti.target);y.sun=Ti;var ci=new Xl({gravity:new b(0,-9.82,0)});ci.broadphase=new Ul(ci);ci.allowSleep=!0;ci.solver.iterations=10;ci.defaultContactMaterial.friction=.5;ci.defaultContactMaterial.restitution=.1;ci.defaultContactMaterial.contactEquationStiffness=5e7;ci.defaultContactMaterial.contactEquationRelaxation=4;y.world=ci;wd();ci.addEventListener("preStep",Sd);Pm(bo);mr("island");y.player=new hc;y.player.respawn();var xr=new Set,vc=new Set,$e={lookX:0,lookY:0,mouseDown:!1,held:i=>xr.has(i),tap:i=>vc.has(i)},_r=!1,_o=!1;function _c(){if(!_o)try{let i=Cs.requestPointerLock&&Cs.requestPointerLock();i&&i.catch&&i.catch(()=>{_o=!0})}catch{_o=!0}}y.requestLock=_c;function R0(){od(),_r=!0,document.getElementById("start").classList.add("hidden"),_c()}document.getElementById("start").addEventListener("click",R0);document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===Cs;document.getElementById("paused").classList.toggle("show",_r&&!i&&!Nt.menuOpen&&!_o),i||($e.mouseDown=!1)});document.addEventListener("pointerlockerror",()=>{_o=!0,document.getElementById("paused").classList.remove("show")});document.getElementById("paused").addEventListener("click",()=>{_c()});Cs.addEventListener("mousedown",i=>{if(i.button!==0||!_r)return;if(document.pointerLockElement!==Cs&&!_o){_c();return}od(),$e.mouseDown=!0;let t=Dn();t.down&&t.down(),t.id!=="fling"&&(y.player.kick=Math.max(y.player.kick||0,.25))});window.addEventListener("mouseup",i=>{i.button===0&&($e.mouseDown=!1)});Cs.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("mousemove",i=>{if(!(!_r||Nt.menuOpen)&&(document.pointerLockElement===Cs||_o)){let t=Math.max(-200,Math.min(200,i.movementX)),e=Math.max(-200,Math.min(200,i.movementY)),n=nn.sens/1e3;$e.lookX+=t*n,$e.lookY+=e*n*(nn.invertY?-1:1)}});var NE=new Set(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"]);window.addEventListener("keydown",i=>{if(NE.has(i.code)&&i.preventDefault(),i.repeat)return;if(!_r){(i.code==="Enter"||i.code==="Space")&&R0();return}xr.add(i.code),vc.add(i.code);let t=i.target&&i.target.tagName==="INPUT";if(i.code==="Tab"||i.code==="KeyB"&&!t){Nt.menuOpen?yr():sf();return}if(i.code==="Escape"&&Nt.menuOpen){yr();return}if(!Nt.menuOpen){if(/^Digit[0-9]$/.test(i.code)){let e=+i.code.slice(5);xc(e===0?9:e-1)}if(i.code==="KeyQ"&&nf(-1),i.code==="KeyE"&&nf(1),i.code==="KeyN"&&(y.player.flying=!y.player.flying,pe(y.player.flying?"Fly mode ON (Space up, Shift down)":"Fly mode OFF")),i.code==="KeyG"&&(y.timeScale=y.timeScale<1?1:.3,pe(y.timeScale<1?"SLOW-MO":"Normal speed")),i.code==="KeyM"&&pe(vm()?"Muted":"Sound on"),i.code==="KeyH"&&sf("help"),i.code==="KeyC"){for(let e of[...y.ents])e.spawned&&We(e,!0);for(let e of[...y.dummies])e.spawned&&e.remove();pe("Cleared spawned stuff")}if(i.code==="KeyP"&&(mr(y.mapId),pe("Map reset")),i.code==="KeyL"&&(Ks("quality",nn.quality==="high"?"low":"high"),pe(nn.quality==="high"?"Graphics: high":"Graphics: low (faster)")),i.code==="KeyU"&&LE(),(i.code==="BracketLeft"||i.code==="BracketRight")&&(Ks("sens",Math.min(12,Math.max(.3,+(nn.sens*(i.code==="BracketLeft"?.85:1.18)).toFixed(2)))),pe(`Mouse sensitivity: ${nn.sens.toFixed(1)}`)),i.code==="Enter"){$e.mouseDown=!0;let e=Dn();e.down&&e.down()}}});window.addEventListener("keyup",i=>{xr.delete(i.code),i.code==="Enter"&&($e.mouseDown=!1)});window.addEventListener("blur",()=>{xr.clear(),$e.mouseDown=!1});window.addEventListener("resize",()=>{vo.aspect=window.innerWidth/window.innerHeight,vo.updateProjectionMatrix(),li.setSize(window.innerWidth,window.innerHeight)});var of=null;ta("quality",i=>{li.shadowMap.enabled=i==="high",li.setPixelRatio(i==="high"?Math.min(window.devicePixelRatio,1.5):.75),of!==null&&of!==i&&bo.traverse(t=>{t.material&&(t.material.needsUpdate=!0)}),of=i});ta("volume",i=>_m(i));ta("time",i=>Hd(i));ta("theme",i=>document.body.classList.toggle("light",i==="light"));wm();function LE(){let i=y.spawnLog&&y.spawnLog.pop();if(!i){pe("Nothing to undo");return}for(let t of i.ents)t.dead||We(t,!1);for(let t of i.dummies)t.dead||t.remove();pe("Undone")}Nt.onEquip=i=>{y.player.setToolColor(i.color),y.toolNote=null,y.crossHint=null};S0();tf();y.player.setToolColor(Dn().color);var FE=new Sl,BE=new _;function C0(){requestAnimationFrame(C0);let i=Math.min(FE.getDelta(),.05),t=i*y.timeScale;y.time+=t;let e=_r&&!Nt.menuOpen,n=c=>e&&xr.has(c);e&&xr.has("KeyR")&&y.grab&&Dn().id==="fling"&&n0($e.lookX,$e.lookY)&&($e.lookX=0,$e.lookY=0);let s={f:n("KeyW"),b:n("KeyS"),l:n("KeyA"),r:n("KeyD"),sprint:n("ShiftLeft")||n("ShiftRight"),sprintDown:n("ShiftLeft")||n("ShiftRight"),jump:e&&vc.has("Space"),jumpHeld:n("Space"),lookX:$e.lookX+((n("ArrowLeft")?-1:0)+(n("ArrowRight")?1:0))*2.2*i,lookY:$e.lookY+((n("ArrowUp")?-1:0)+(n("ArrowDown")?1:0))*1.6*i};$e.lookX=0,$e.lookY=0;let o=Dn();e&&(o.update&&o.update(t,$e),$e.mouseDown&&o.held&&o.held(t)),ci.step(1/60,t,4);let r=y.queue.splice(0);for(let c of r)c();for(let c=y.timers.length-1;c>=0;c--)if(y.timers[c].t<=y.time){let h=y.timers[c];y.timers.splice(c,1),h.fn()}y.player.update(i,s),Td(t),Id(t);for(let c of[...y.dummies])c.dead||c.update(t);Ld(t),qd(t),d0(t),Nm(t),gm(i),ym(i),T0(i),s0(t),bm(vo.position,BE.set(1,0,0).applyQuaternion(vo.quaternion));let a=y.player.body.position,l=y.sunOffset||[40,70,25];Ti.position.set(a.x+l[0],a.y+l[1],a.z+l[2]),Ti.target.position.set(a.x,a.y,a.z),vc.clear(),li.render(bo,vo)}C0();window.__G=y;window.__T={TOOL:yo,UI:Nt,Items:Pd,loadMap:mr,selectSlot:xc,currentTool:Dn,input:$e};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
