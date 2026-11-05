(()=>{var b0=Object.defineProperty;var w0=(i,t)=>{for(var e in t)b0(i,e,{get:t[e],enumerable:!0})};var Mu="170";var M0=0,cf=1,E0=2;var _l=1,S0=2,Ii=3,cs=0,rn=1,Ni=2,rs=0,as=1,Ar=2,hf=3,uf=4,T0=5,Bs=100,A0=101,R0=102,C0=103,I0=104,P0=200,N0=201,L0=202,F0=203,th=204,eh=205,B0=206,D0=207,z0=208,U0=209,O0=210,k0=211,V0=212,H0=213,G0=214,nh=0,ih=1,sh=2,Do=3,oh=4,rh=5,ah=6,lh=7,gp=0,W0=1,q0=2,ls=0,X0=1,Y0=2,Z0=3,Eu=4,$0=5,j0=6,J0=7;var yp=300,zo=301,Uo=302,ch=303,hh=304,bl=306,Rr=1e3,Us=1001,uh=1002,Sn=1003,K0=1004;var fa=1005;var hi=1006,vc=1007;var Os=1008;var Di=1009,xp=1010,vp=1011,Cr=1012,Su=1013,ks=1014,Li=1015,Br=1016,Tu=1017,Au=1018,Oo=1020,_p=35902,bp=1021,wp=1022,jn=1023,Mp=1024,Ep=1025,Lo=1026,ko=1027,Sp=1028,Ru=1029,Tp=1030,Cu=1031;var Iu=1033,Ua=33776,Oa=33777,ka=33778,Va=33779,dh=35840,fh=35841,ph=35842,mh=35843,gh=36196,yh=37492,xh=37496,vh=37808,_h=37809,bh=37810,wh=37811,Mh=37812,Eh=37813,Sh=37814,Th=37815,Ah=37816,Rh=37817,Ch=37818,Ih=37819,Ph=37820,Nh=37821,Ha=36492,Lh=36494,Fh=36495,Ap=36283,Bh=36284,Dh=36285,zh=36286;var Ga=2300,Uh=2301,_c=2302,df=2400,ff=2401,pf=2402;var Q0=3200,tg=3201;var Rp=0,eg=1,os="",xn="srgb",qo="srgb-linear",wl="linear",ve="srgb";var xo=7680;var mf=519,ng=512,ig=513,sg=514,Cp=515,og=516,rg=517,ag=518,lg=519,gf=35044;var yf="300 es",Fi=2e3,Wa=2001,hs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bc=Math.PI/180,Oh=180/Math.PI;function Dr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function cg(i,t){return(i%t+t)%t}function wc(i,t,e){return(1-e)*i+e*t}function gr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function yn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,s,o,r,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c)}set(t,e,n,s,o,r,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],v=s[1],M=s[4],w=s[7],I=s[2],A=s[5],C=s[8];return o[0]=r*y+a*v+l*I,o[3]=r*m+a*M+l*A,o[6]=r*p+a*w+l*C,o[1]=c*y+h*v+d*I,o[4]=c*m+h*M+d*A,o[7]=c*p+h*w+d*C,o[2]=u*y+f*v+g*I,o[5]=u*m+f*M+g*A,o[8]=u*p+f*w+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+s*o*c-s*r*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,f=c*o-r*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*r)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*o-a*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(r*e-n*o)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){let l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-s*c,s*l,-s*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mc.makeScale(t,e)),this}rotate(t){return this.premultiply(Mc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mc=new Xt;function Ip(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hg(){let i=qa("canvas");return i.style.display="block",i}var xf={};function wr(i){i in xf||(xf[i]=!0,console.warn(i))}function ug(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function dg(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fg(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(i.r=Bi(i.r),i.g=Bi(i.g),i.b=Bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(i.r=Fo(i.r),i.g=Fo(i.g),i.b=Fo(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===os?wl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var vf=[.64,.33,.3,.6,.15,.06],_f=[.2126,.7152,.0722],bf=[.3127,.329],wf=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mf=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[qo]:{primaries:vf,whitePoint:bf,transfer:wl,toXYZ:wf,fromXYZ:Mf,luminanceCoefficients:_f,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:vf,whitePoint:bf,transfer:ve,toXYZ:wf,fromXYZ:Mf,luminanceCoefficients:_f,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}});var vo,kh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vo===void 0&&(vo=qa("canvas")),vo.width=t.width,vo.height=t.height;let n=vo.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vo}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Bi(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pg=0,Xa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Dr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ec(s[r].image)):o.push(Ec(s[r]))}else o=Ec(s);n.url=o}return e||(t.images[this.uuid]=n),n}};function Ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mg=0,Tn=class i extends hs{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Us,s=Us,o=hi,r=Os,a=jn,l=Di,c=i.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=Dr(),this.name="",this.source=new Xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case Us:t.x=t.x<0?0:1;break;case uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case Us:t.y=t.y<0?0:1;break;case uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=yp;Tn.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,w=(f+1)/2,I=(p+1)/2,A=(h+u)/4,C=(d+y)/4,L=(g+m)/4;return M>w&&M>I?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=A/n,o=C/n):w>I?w<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(w),n=A/s,o=L/s):I<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),n=C/o,s=L/o),this.set(n,s,o,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vh=class extends hs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let o=new Tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Xa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zi=class extends Vh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ya=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hh=class extends Tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ee=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=o[r+0],f=o[r+1],g=o[r+2],y=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let m=1-a,p=l*u+c*f+h*g+d*y,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let I=Math.sqrt(M),A=Math.atan2(I,p*v);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let w=a*v;if(l=l*m+u*w,c=c*m+f*w,h=h*m+g*w,d=d*m+y*w,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,o,r){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=o[r],u=o[r+1],f=o[r+2],g=o[r+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(o/2),u=l(n/2),f=l(s/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(o-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(r-s)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+s*c-o*l,this._y=s*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-s*a,this._w=r*h-n*a-s*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,o=this._z,r=this._w,a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},b=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ef.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ef.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*s-a*n),h=2*(a*e-o*s),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=s+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=s*l-o*a,this.y=o*r-n*l,this.z=n*a-s*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Sc.copy(this).projectOnVector(t),this.sub(Sc)}reflect(t){return this.sub(Sc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sc=new b,Ef=new Ee,Vs=class{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Yn):Yn.fromBufferAttribute(o,r),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),ma.subVectors(this.max,yr),_o.subVectors(t.a,yr),bo.subVectors(t.b,yr),wo.subVectors(t.c,yr),Qi.subVectors(bo,_o),ts.subVectors(wo,bo),Rs.subVectors(_o,wo);let e=[0,-Qi.z,Qi.y,0,-ts.z,ts.y,0,-Rs.z,Rs.y,Qi.z,0,-Qi.x,ts.z,0,-ts.x,Rs.z,0,-Rs.x,-Qi.y,Qi.x,0,-ts.y,ts.x,0,-Rs.y,Rs.x,0];return!Tc(e,_o,bo,wo,ma)||(e=[1,0,0,0,1,0,0,0,1],!Tc(e,_o,bo,wo,ma))?!1:(ga.crossVectors(Qi,ts),e=[ga.x,ga.y,ga.z],Tc(e,_o,bo,wo,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Si=[new b,new b,new b,new b,new b,new b,new b,new b],Yn=new b,pa=new Vs,_o=new b,bo=new b,wo=new b,Qi=new b,ts=new b,Rs=new b,yr=new b,ma=new b,ga=new b,Cs=new b;function Tc(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Cs.fromArray(i,o);let a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),l=t.dot(Cs),c=e.dot(Cs),h=n.dot(Cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var gg=new Vs,xr=new b,Ac=new b,Vo=class{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):gg.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);let e=xr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ac.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Ac)),this.expandByPoint(xr.copy(t.center).sub(Ac))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ti=new b,Rc=new b,ya=new b,es=new b,Cc=new b,xa=new b,Ic=new b,Za=class{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rc.copy(t).add(e).multiplyScalar(.5),ya.copy(e).sub(t).normalize(),es.copy(this.origin).sub(Rc);let o=t.distanceTo(e)*.5,r=-this.direction.dot(ya),a=es.dot(this.direction),l=-es.dot(ya),c=es.lengthSq(),h=Math.abs(1-r*r),d,u,f,g;if(h>0)if(d=r*l-a,u=r*a-l,g=o*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-o,-l),o),f=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),f=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Rc).addScaledVector(ya,u),f}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);let n=Ti.dot(this.direction),s=Ti.dot(Ti)-n*n,o=t.radius*t.radius;if(s>o)return null;let r=Math.sqrt(o-s),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,n,s,o){Cc.subVectors(e,t),xa.subVectors(n,t),Ic.crossVectors(Cc,xa);let r=this.direction.dot(Ic),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;es.subVectors(this.origin,t);let l=a*this.direction.dot(xa.crossVectors(es,xa));if(l<0)return null;let c=a*this.direction.dot(Cc.cross(es));if(c<0||l+c>r)return null;let h=-a*es.dot(Ic);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class i{constructor(t,e,n,s,o,r,a,l,c,h,d,u,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,l,c,h,d,u,f,g,y,m)}set(t,e,n,s,o,r,a,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Mo.setFromMatrixColumn(t,0).length(),o=1/Mo.setFromMatrixColumn(t,1).length(),r=1/Mo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){let u=r*h,f=r*d,g=a*h,y=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=r*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*a,e[4]=g*a-f,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=f*a-g,e[6]=y+u*a,e[10]=r*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*a,e[4]=-r*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=r*h,e[9]=y-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){let u=r*h,f=r*d,g=a*h,y=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){let u=r*l,f=r*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=r*l,f=r*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=r*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yg,t,xg)}lookAt(t,e,n){let s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),ns.crossVectors(n,Mn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),ns.crossVectors(n,Mn)),ns.normalize(),va.crossVectors(Mn,ns),s[0]=ns.x,s[4]=va.x,s[8]=Mn.x,s[1]=ns.y,s[5]=va.y,s[9]=Mn.y,s[2]=ns.z,s[6]=va.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],v=n[3],M=n[7],w=n[11],I=n[15],A=s[0],C=s[4],L=s[8],S=s[12],E=s[1],N=s[5],G=s[9],F=s[13],z=s[2],V=s[6],D=s[10],J=s[14],W=s[3],K=s[7],ct=s[11],pt=s[15];return o[0]=r*A+a*E+l*z+c*W,o[4]=r*C+a*N+l*V+c*K,o[8]=r*L+a*G+l*D+c*ct,o[12]=r*S+a*F+l*J+c*pt,o[1]=h*A+d*E+u*z+f*W,o[5]=h*C+d*N+u*V+f*K,o[9]=h*L+d*G+u*D+f*ct,o[13]=h*S+d*F+u*J+f*pt,o[2]=g*A+y*E+m*z+p*W,o[6]=g*C+y*N+m*V+p*K,o[10]=g*L+y*G+m*D+p*ct,o[14]=g*S+y*F+m*J+p*pt,o[3]=v*A+M*E+w*z+I*W,o[7]=v*C+M*N+w*V+I*K,o[11]=v*L+M*G+w*D+I*ct,o[15]=v*S+M*F+w*J+I*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15];return g*(+o*l*d-s*c*d-o*a*u+n*c*u+s*a*f-n*l*f)+y*(+e*l*f-e*c*u+o*r*u-s*r*f+s*c*h-o*l*h)+m*(+e*c*d-e*a*f-o*r*d+n*r*f+o*a*h-n*c*h)+p*(-s*a*h-e*l*d+e*a*u+s*r*d-n*r*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],v=d*m*c-y*u*c+y*l*f-a*m*f-d*l*p+a*u*p,M=g*u*c-h*m*c-g*l*f+r*m*f+h*l*p-r*u*p,w=h*y*c-g*d*c+g*a*f-r*y*f-h*a*p+r*d*p,I=g*d*l-h*y*l-g*a*u+r*y*u+h*a*m-r*d*m,A=e*v+n*M+s*w+o*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/A;return t[0]=v*C,t[1]=(y*u*o-d*m*o-y*s*f+n*m*f+d*s*p-n*u*p)*C,t[2]=(a*m*o-y*l*o+y*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(d*l*o-a*u*o-d*s*c+n*u*c+a*s*f-n*l*f)*C,t[4]=M*C,t[5]=(h*m*o-g*u*o+g*s*f-e*m*f-h*s*p+e*u*p)*C,t[6]=(g*l*o-r*m*o-g*s*c+e*m*c+r*s*p-e*l*p)*C,t[7]=(r*u*o-h*l*o+h*s*c-e*u*c-r*s*f+e*l*f)*C,t[8]=w*C,t[9]=(g*d*o-h*y*o-g*n*f+e*y*f+h*n*p-e*d*p)*C,t[10]=(r*y*o-g*a*o+g*n*c-e*y*c-r*n*p+e*a*p)*C,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*f-e*a*f)*C,t[12]=I*C,t[13]=(h*y*s-g*d*s+g*n*u-e*y*u-h*n*m+e*d*m)*C,t[14]=(g*a*s-r*y*s-g*n*l+e*y*l+r*n*m-e*a*m)*C,t[15]=(r*d*s-h*a*s+h*n*l-e*d*l-r*n*u+e*a*u)*C,this}scale(t){let e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*r,0,c*l-s*a,h*l+s*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,f=o*h,g=o*d,y=r*h,m=r*d,p=a*d,v=l*c,M=l*h,w=l*d,I=n.x,A=n.y,C=n.z;return s[0]=(1-(y+p))*I,s[1]=(f+w)*I,s[2]=(g-M)*I,s[3]=0,s[4]=(f-w)*A,s[5]=(1-(u+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+M)*C,s[9]=(m-v)*C,s[10]=(1-(u+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,o=Mo.set(s[0],s[1],s[2]).length(),r=Mo.set(s[4],s[5],s[6]).length(),a=Mo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Zn.copy(this);let c=1/o,h=1/r,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,e.setFromRotationMatrix(Zn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Fi){let l=this.elements,c=2*o/(e-t),h=2*o/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,g;if(a===Fi)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Wa)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Fi){let l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(r-o),u=(e+t)*c,f=(n+s)*h,g,y;if(a===Fi)g=(r+o)*d,y=-2*d;else if(a===Wa)g=o*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mo=new b,Zn=new Ne,yg=new b(0,0,0),xg=new b(1,1,1),ns=new b,va=new b,Mn=new b,Sf=new Ne,Tf=new Ee,ke=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,o=s[0],r=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tf.setFromEuler(this),this.setFromQuaternion(Tf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ke.DEFAULT_ORDER="XYZ";var $a=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vg=0,Af=new b,Eo=new Ee,Ai=new Ne,_a=new b,vr=new b,_g=new b,bg=new Ee,Rf=new b(1,0,0),Cf=new b(0,1,0),If=new b(0,0,1),Pf={type:"added"},wg={type:"removed"},So={type:"childadded",child:null},Pc={type:"childremoved",child:null},an=class i extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new b,e=new ke,n=new Ee,s=new b(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Xt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Eo.setFromAxisAngle(t,e),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(t,e){return Eo.setFromAxisAngle(t,e),this.quaternion.premultiply(Eo),this}rotateX(t){return this.rotateOnAxis(Rf,t)}rotateY(t){return this.rotateOnAxis(Cf,t)}rotateZ(t){return this.rotateOnAxis(If,t)}translateOnAxis(t,e){return Af.copy(t).applyQuaternion(this.quaternion),this.position.add(Af.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rf,t)}translateY(t){return this.translateOnAxis(Cf,t)}translateZ(t){return this.translateOnAxis(If,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_a.copy(t):_a.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(vr,_a,this.up):Ai.lookAt(_a,vr,this.up),this.quaternion.setFromRotationMatrix(Ai),s&&(Ai.extractRotation(s.matrixWorld),Eo.setFromRotationMatrix(Ai),this.quaternion.premultiply(Eo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pf),So.child=t,this.dispatchEvent(So),So.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wg),Pc.child=t,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pf),So.child=t,this.dispatchEvent(So),So.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,_g),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,bg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(o(t.animations,l))}}if(e){let a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),f=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};an.DEFAULT_UP=new b(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $n=new b,Ri=new b,Nc=new b,Ci=new b,To=new b,Ao=new b,Nf=new b,Lc=new b,Fc=new b,Bc=new b,Dc=new _e,zc=new _e,Uc=new _e,Ds=class i{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);let o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){$n.subVectors(s,e),Ri.subVectors(n,e),Nc.subVectors(t,e);let r=$n.dot($n),a=$n.dot(Ri),l=$n.dot(Nc),c=Ri.dot(Ri),h=Ri.dot(Nc),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,s,o,r,a,l){return this.getBarycoord(t,e,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ci.x),l.addScaledVector(r,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(t,e,n,s,o,r){return Dc.setScalar(0),zc.setScalar(0),Uc.setScalar(0),Dc.fromBufferAttribute(t,e),zc.fromBufferAttribute(t,n),Uc.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Dc,o.x),r.addScaledVector(zc,o.y),r.addScaledVector(Uc,o.z),r}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),Ri.subVectors(t,e),$n.cross(Ri).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),$n.cross(Ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,o=this.c,r,a;To.subVectors(s,n),Ao.subVectors(o,n),Lc.subVectors(t,n);let l=To.dot(Lc),c=Ao.dot(Lc);if(l<=0&&c<=0)return e.copy(n);Fc.subVectors(t,s);let h=To.dot(Fc),d=Ao.dot(Fc);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(To,r);Bc.subVectors(t,o);let f=To.dot(Bc),g=Ao.dot(Bc);if(g>=0&&f<=g)return e.copy(o);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ao,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Nf.subVectors(o,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Nf,a);let p=1/(m+y+u);return r=y*p,a=u*p,e.copy(n).addScaledVector(To,r).addScaledVector(Ao,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},ba={h:0,s:0,l:0};function Oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=cg(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Oc(r,o,t+1/3),this.g=Oc(r,o,t),this.b=Oc(r,o,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xn){let n=Pp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return ae.fromWorkingColorSpace(sn.copy(this),t),Math.round(Ke(sn.r*255,0,255))*65536+Math.round(Ke(sn.g*255,0,255))*256+Math.round(Ke(sn.b*255,0,255))}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(sn.copy(this),e);let n=sn.r,s=sn.g,o=sn.b,r=Math.max(n,s,o),a=Math.min(n,s,o),l,c,h=(a+r)/2;if(a===r)l=0,c=0;else{let d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(s-o)/d+(s<o?6:0);break;case s:l=(o-n)/d+2;break;case o:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=xn){ae.fromWorkingColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,s=sn.b;return t!==xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(ba);let n=wc(is.h,ba.h,e),s=wc(is.s,ba.s,e),o=wc(is.l,ba.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new Rt;Rt.NAMES=Pp;var Mg=0,us=class extends hs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=Dr(),this.name="",this.blending=as,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=eh,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==cs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==th&&(n.blendSrc=this.blendSrc),this.blendDst!==eh&&(n.blendDst=this.blendDst),this.blendEquation!==Bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){let r=[];for(let a in o){let l=o[a];delete l.metadata,r.push(l)}return r}if(e){let o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Se=class extends us{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var We=new b,wa=new wt,un=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gf,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wa.fromBufferAttribute(this,e),wa.applyMatrix3(t),this.setXY(e,wa.x,wa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=yn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gr(e,this.array)),e}setX(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gr(e,this.array)),e}setY(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gr(e,this.array)),e}setW(t,e){return this.normalized&&(e=yn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=yn(e,this.array),n=yn(n,this.array),s=yn(s,this.array),o=yn(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gf&&(t.usage=this.usage),t}};var ja=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ja=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Le=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},Eg=0,Bn=new Ne,kc=new an,Ro=new b,En=new Vs,_r=new Vs,$e=new b,dn=class i extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ip(t)?Ja:ja)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let o=new Xt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bn.makeRotationFromQuaternion(t),this.applyMatrix4(Bn),this}rotateX(t){return Bn.makeRotationX(t),this.applyMatrix4(Bn),this}rotateY(t){return Bn.makeRotationY(t),this.applyMatrix4(Bn),this}rotateZ(t){return Bn.makeRotationZ(t),this.applyMatrix4(Bn),this}translate(t,e,n){return Bn.makeTranslation(t,e,n),this.applyMatrix4(Bn),this}scale(t,e,n){return Bn.makeScale(t,e,n),this.applyMatrix4(Bn),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,o=t.length;s<o;s++){let r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Le(n,3))}else{for(let n=0,s=e.count;n<s;n++){let o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let o=e[n];En.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){let a=e[o];_r.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(En.min,_r.min),En.expandByPoint($e),$e.addVectors(En.max,_r.max),En.expandByPoint($e)):(En.expandByPoint(_r.min),En.expandByPoint(_r.max))}En.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)$e.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared($e));if(e)for(let o=0,r=e.length;o<r;o++){let a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)$e.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(t,c),$e.add(Ro)),s=Math.max(s,n.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new b,l[L]=new b;let c=new b,h=new b,d=new b,u=new wt,f=new wt,g=new wt,y=new b,m=new b;function p(L,S,E){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,E),u.fromBufferAttribute(o,L),f.fromBufferAttribute(o,S),g.fromBufferAttribute(o,E),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(N),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),a[L].add(y),a[S].add(y),a[E].add(y),l[L].add(m),l[S].add(m),l[E].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,S=v.length;L<S;++L){let E=v[L],N=E.start,G=E.count;for(let F=N,z=N+G;F<z;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new b,w=new b,I=new b,A=new b;function C(L){I.fromBufferAttribute(s,L),A.copy(I);let S=a[L];M.copy(S),M.sub(I.multiplyScalar(I.dot(S))).normalize(),w.crossVectors(A,S);let N=w.dot(l[L])<0?-1:1;r.setXYZW(L,M.x,M.y,M.z,N)}for(let L=0,S=v.length;L<S;++L){let E=v[L],N=E.start,G=E.count;for(let F=N,z=N+G;F<z;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new b,o=new b,r=new b,a=new b,l=new b,c=new b,h=new b,d=new b;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,y),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(s,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new un(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let o=this.morphAttributes;for(let a in o){let l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,l=r.length;a<l;a++){let c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},o=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let o=t.morphAttributes;for(let c in o){let h=[],d=o[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lf=new Ne,Is=new Za,Ma=new Vo,Ff=new b,Ea=new b,Sa=new b,Ta=new b,Vc=new b,Aa=new b,Bf=new b,Ra=new b,Et=class extends an{constructor(t=new dn,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(o&&a){Aa.set(0,0,0);for(let l=0,c=o.length;l<c;l++){let h=a[l],d=o[l];h!==0&&(Vc.fromBufferAttribute(d,t),r?Aa.addScaledVector(Vc,h):Aa.addScaledVector(Vc.sub(e),h))}e.add(Aa)}return e}raycast(t,e){let n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(o),Is.copy(t.ray).recast(t.near),!(Ma.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Ma,Ff)===null||Is.origin.distanceToSquared(Ff)>(t.far-t.near)**2))&&(Lf.copy(o).invert(),Is.copy(t.ray).applyMatrix4(Lf),!(n.boundingBox!==null&&Is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Is)))}_computeIntersections(t,e,n){let s,o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let w=v,I=M;w<I;w+=3){let A=a.getX(w),C=a.getX(w+1),L=a.getX(w+2);s=Ca(this,p,t,n,c,h,d,A,C,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=a.getX(m),M=a.getX(m+1),w=a.getX(m+2);s=Ca(this,r,t,n,c,h,d,v,M,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=r[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let w=v,I=M;w<I;w+=3){let A=w,C=w+1,L=w+2;s=Ca(this,p,t,n,c,h,d,A,C,L),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let v=m,M=m+1,w=m+2;s=Ca(this,r,t,n,c,h,d,v,M,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Sg(i,t,e,n,s,o,r,a){let l;if(t.side===rn?l=n.intersectTriangle(r,o,s,!0,a):l=n.intersectTriangle(s,o,r,t.side===cs,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:i}}function Ca(i,t,e,n,s,o,r,a,l,c){i.getVertexPosition(a,Ea),i.getVertexPosition(l,Sa),i.getVertexPosition(c,Ta);let h=Sg(i,t,e,n,Ea,Sa,Ta,Bf);if(h){let d=new b;Ds.getBarycoord(Bf,Ea,Sa,Ta,d),s&&(h.uv=Ds.getInterpolatedAttribute(s,a,l,c,d,new wt)),o&&(h.uv1=Ds.getInterpolatedAttribute(o,a,l,c,d,new wt)),r&&(h.normal=Ds.getInterpolatedAttribute(r,a,l,c,d,new b),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new b,materialIndex:0};Ds.getNormal(Ea,Sa,Ta,u.normal),h.face=u,h.barycoord=d}return h}var Fe=class i extends dn{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};let a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2));function g(y,m,p,v,M,w,I,A,C,L,S){let E=w/C,N=I/L,G=w/2,F=I/2,z=A/2,V=C+1,D=L+1,J=0,W=0,K=new b;for(let ct=0;ct<D;ct++){let pt=ct*N-F;for(let at=0;at<V;at++){let ee=at*E-G;K[y]=ee*v,K[m]=pt*M,K[p]=z,c.push(K.x,K.y,K.z),K[y]=0,K[m]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),d.push(at/C),d.push(1-ct/L),J+=1}}for(let ct=0;ct<L;ct++)for(let pt=0;pt<C;pt++){let at=u+pt+V*ct,ee=u+pt+V*(ct+1),$=u+(pt+1)+V*(ct+1),st=u+(pt+1)+V*ct;l.push(at,ee,st),l.push(ee,$,st),W+=6}a.addGroup(f,W,S),f+=W,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ho(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=Ho(i[e]);for(let s in n)t[s]=n[s]}return t}function Tg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Np(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Ag={clone:Ho,merge:cn},Rg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dn=class extends us{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rg,this.fragmentShader=Cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ho(t.uniforms),this.uniformsGroups=Tg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ka=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ss=new b,Df=new wt,zf=new wt,on=class extends Ka{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,Df,zf),e.subVectors(zf,Df)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(bc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}let a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Co=-90,Io=1,Gh=class extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Co,Io,t,e);s.layers=this.layers,this.add(s);let o=new on(Co,Io,t,e);o.layers=this.layers,this.add(o);let r=new on(Co,Io,t,e);r.layers=this.layers,this.add(r);let a=new on(Co,Io,t,e);a.layers=this.layers,this.add(a);let l=new on(Co,Io,t,e);l.layers=this.layers,this.add(l);let c=new on(Co,Io,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,l]=e;for(let c of e)this.remove(c);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Qa=class extends Tn{constructor(t,e,n,s,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zo,super(t,e,n,s,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wh=class extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Fe(5,5,5),o=new Dn({name:"CubemapFromEquirect",uniforms:Ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:rs});o.uniforms.tEquirect.value=e;let r=new Et(s,o),a=e.minFilter;return e.minFilter===Os&&(e.minFilter=hi),new Gh(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){let o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}},Hc=new b,Ig=new b,Pg=new Xt,Pi=class{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hc.subVectors(n,e).cross(Ig.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Hc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Pg.getNormalMatrix(t),s=this.coplanarPoint(Hc).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new Vo,Ia=new b,Ir=class{constructor(t=new Pi,e=new Pi,n=new Pi,s=new Pi,o=new Pi,r=new Pi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi){let n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],v=s[13],M=s[14],w=s[15];if(n[0].setComponents(l-o,u-c,m-f,w-p).normalize(),n[1].setComponents(l+o,u+c,m+f,w+p).normalize(),n[2].setComponents(l+r,u+h,m+g,w+v).normalize(),n[3].setComponents(l-r,u-h,m-g,w-v).normalize(),n[4].setComponents(l-a,u-d,m-y,w-M).normalize(),e===Fi)n[5].setComponents(l+a,u+d,m+y,w+M).normalize();else if(e===Wa)n[5].setComponents(a,d,y,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){return Ps.center.set(0,0,0),Ps.radius=.7071067811865476,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lp(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ng(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:o,update:r}}var Hs=class i extends dn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let v=p*u-r;for(let M=0;M<c;M++){let w=M*d-o;g.push(w,-v,0),y.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,w=v+c*(p+1),I=v+1+c*(p+1),A=v+1+c*p;f.push(M,w,A),f.push(w,I,A)}this.setIndex(f),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Lg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fg=`#ifdef USE_ALPHAHASH
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
#endif`,Bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ug=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,kg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vg=`#ifdef USE_BATCHING
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
#endif`,Hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xg=`#ifdef USE_IRIDESCENCE
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
#endif`,Yg=`#ifdef USE_BUMPMAP
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
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ny=`#define PI 3.141592653589793
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
} // validated`,iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sy=`vec3 transformedNormal = objectNormal;
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
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_y=`#ifdef USE_GRADIENTMAP
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
}`,by=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ey=`uniform bool receiveShadow;
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
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,Ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Iy=`PhysicalMaterial material;
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
#endif`,Py=`struct PhysicalMaterial {
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
}`,Ny=`
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
#endif`,Ly=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Oy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ky=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hy=`#if defined( USE_POINTS_UV )
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
#endif`,Gy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zy=`#ifdef USE_MORPHTARGETS
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
#endif`,$y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
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
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yx=`float getShadowMask() {
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
}`,xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,_x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#ifdef USE_TRANSMISSION
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`#include <common>
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
}`,Ox=`#if DEPTH_PACKING == 3200
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
}`,kx=`#define DISTANCE
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
}`,Vx=`#define DISTANCE
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
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`uniform float scale;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Zx=`#define LAMBERT
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
}`,$x=`#define LAMBERT
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
}`,jx=`#define MATCAP
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
}`,Jx=`#define MATCAP
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
}`,Kx=`#define NORMAL
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
}`,Qx=`#define NORMAL
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
}`,tv=`#define PHONG
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
}`,ev=`#define PHONG
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
}`,nv=`#define STANDARD
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
}`,iv=`#define STANDARD
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
}`,sv=`#define TOON
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
}`,ov=`#define TOON
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
}`,rv=`uniform float size;
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
}`,av=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,cv=`uniform vec3 color;
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
}`,hv=`uniform float rotation;
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
}`,uv=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Lg,alphahash_pars_fragment:Fg,alphamap_fragment:Bg,alphamap_pars_fragment:Dg,alphatest_fragment:zg,alphatest_pars_fragment:Ug,aomap_fragment:Og,aomap_pars_fragment:kg,batching_pars_vertex:Vg,batching_vertex:Hg,begin_vertex:Gg,beginnormal_vertex:Wg,bsdfs:qg,iridescence_fragment:Xg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:Zg,clipping_planes_pars_fragment:$g,clipping_planes_pars_vertex:jg,clipping_planes_vertex:Jg,color_fragment:Kg,color_pars_fragment:Qg,color_pars_vertex:ty,color_vertex:ey,common:ny,cube_uv_reflection_fragment:iy,defaultnormal_vertex:sy,displacementmap_pars_vertex:oy,displacementmap_vertex:ry,emissivemap_fragment:ay,emissivemap_pars_fragment:ly,colorspace_fragment:cy,colorspace_pars_fragment:hy,envmap_fragment:uy,envmap_common_pars_fragment:dy,envmap_pars_fragment:fy,envmap_pars_vertex:py,envmap_physical_pars_fragment:Sy,envmap_vertex:my,fog_vertex:gy,fog_pars_vertex:yy,fog_fragment:xy,fog_pars_fragment:vy,gradientmap_pars_fragment:_y,lightmap_pars_fragment:by,lights_lambert_fragment:wy,lights_lambert_pars_fragment:My,lights_pars_begin:Ey,lights_toon_fragment:Ty,lights_toon_pars_fragment:Ay,lights_phong_fragment:Ry,lights_phong_pars_fragment:Cy,lights_physical_fragment:Iy,lights_physical_pars_fragment:Py,lights_fragment_begin:Ny,lights_fragment_maps:Ly,lights_fragment_end:Fy,logdepthbuf_fragment:By,logdepthbuf_pars_fragment:Dy,logdepthbuf_pars_vertex:zy,logdepthbuf_vertex:Uy,map_fragment:Oy,map_pars_fragment:ky,map_particle_fragment:Vy,map_particle_pars_fragment:Hy,metalnessmap_fragment:Gy,metalnessmap_pars_fragment:Wy,morphinstance_vertex:qy,morphcolor_vertex:Xy,morphnormal_vertex:Yy,morphtarget_pars_vertex:Zy,morphtarget_vertex:$y,normal_fragment_begin:jy,normal_fragment_maps:Jy,normal_pars_fragment:Ky,normal_pars_vertex:Qy,normal_vertex:tx,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:sx,iridescence_pars_fragment:ox,opaque_fragment:rx,packing:ax,premultiplied_alpha_fragment:lx,project_vertex:cx,dithering_fragment:hx,dithering_pars_fragment:ux,roughnessmap_fragment:dx,roughnessmap_pars_fragment:fx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:yx,skinbase_vertex:xx,skinning_pars_vertex:vx,skinning_vertex:_x,skinnormal_vertex:bx,specularmap_fragment:wx,specularmap_pars_fragment:Mx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Sx,transmission_fragment:Tx,transmission_pars_fragment:Ax,uv_pars_fragment:Rx,uv_pars_vertex:Cx,uv_vertex:Ix,worldpos_vertex:Px,background_vert:Nx,background_frag:Lx,backgroundCube_vert:Fx,backgroundCube_frag:Bx,cube_vert:Dx,cube_frag:zx,depth_vert:Ux,depth_frag:Ox,distanceRGBA_vert:kx,distanceRGBA_frag:Vx,equirect_vert:Hx,equirect_frag:Gx,linedashed_vert:Wx,linedashed_frag:qx,meshbasic_vert:Xx,meshbasic_frag:Yx,meshlambert_vert:Zx,meshlambert_frag:$x,meshmatcap_vert:jx,meshmatcap_frag:Jx,meshnormal_vert:Kx,meshnormal_frag:Qx,meshphong_vert:tv,meshphong_frag:ev,meshphysical_vert:nv,meshphysical_frag:iv,meshtoon_vert:sv,meshtoon_frag:ov,points_vert:rv,points_frag:av,shadow_vert:lv,shadow_frag:cv,sprite_vert:hv,sprite_frag:uv},ht={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},ci={basic:{uniforms:cn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:cn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:cn([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:cn([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:cn([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:cn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:cn([ht.points,ht.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:cn([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:cn([ht.common,ht.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:cn([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:cn([ht.sprite,ht.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:cn([ht.common,ht.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:cn([ht.lights,ht.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};ci.physical={uniforms:cn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Pa={r:0,b:0,g:0},Ns=new ke,dv=new Ne;function fv(i,t,e,n,s,o,r){let a=new Rt(0),l=o===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function y(v){let M=!1,w=g(v);w===null?p(a,l):w&&w.isColor&&(p(w,1),M=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,M){let w=g(M);w&&(w.isCubeTexture||w.mapping===bl)?(h===void 0&&(h=new Et(new Fe(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ho(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ns.copy(M.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dv.makeRotationFromEuler(Ns)),h.material.toneMapped=ae.getTransfer(w.colorSpace)!==ve,(d!==w||u!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Et(new Hs(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ho(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ae.getTransfer(w.colorSpace)!==ve,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(Pa,Np(i)),n.buffers.color.setClear(Pa.r,Pa.g,Pa.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:y,addToRenderList:m}}function pv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),o=s,r=!1;function a(E,N,G,F,z){let V=!1,D=d(F,G,N);o!==D&&(o=D,c(o.object)),V=f(E,F,G,z),V&&g(E,F,G,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||r)&&(r=!1,w(E,N,G,F),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,N,G){let F=G.wireframe===!0,z=n[E.id];z===void 0&&(z={},n[E.id]=z);let V=z[N.id];V===void 0&&(V={},z[N.id]=V);let D=V[F];return D===void 0&&(D=u(l()),V[F]=D),D}function u(E){let N=[],G=[],F=[];for(let z=0;z<e;z++)N[z]=0,G[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:F,object:E,attributes:{},index:null}}function f(E,N,G,F){let z=o.attributes,V=N.attributes,D=0,J=G.getAttributes();for(let W in J)if(J[W].location>=0){let ct=z[W],pt=V[W];if(pt===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor)),ct===void 0||ct.attribute!==pt||pt&&ct.data!==pt.data)return!0;D++}return o.attributesNum!==D||o.index!==F}function g(E,N,G,F){let z={},V=N.attributes,D=0,J=G.getAttributes();for(let W in J)if(J[W].location>=0){let ct=V[W];ct===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ct=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ct=E.instanceColor));let pt={};pt.attribute=ct,ct&&ct.data&&(pt.data=ct.data),z[W]=pt,D++}o.attributes=z,o.attributesNum=D,o.index=F}function y(){let E=o.newAttributes;for(let N=0,G=E.length;N<G;N++)E[N]=0}function m(E){p(E,0)}function p(E,N){let G=o.newAttributes,F=o.enabledAttributes,z=o.attributeDivisors;G[E]=1,F[E]===0&&(i.enableVertexAttribArray(E),F[E]=1),z[E]!==N&&(i.vertexAttribDivisor(E,N),z[E]=N)}function v(){let E=o.newAttributes,N=o.enabledAttributes;for(let G=0,F=N.length;G<F;G++)N[G]!==E[G]&&(i.disableVertexAttribArray(G),N[G]=0)}function M(E,N,G,F,z,V,D){D===!0?i.vertexAttribIPointer(E,N,G,z,V):i.vertexAttribPointer(E,N,G,F,z,V)}function w(E,N,G,F){y();let z=F.attributes,V=G.getAttributes(),D=N.defaultAttributeValues;for(let J in V){let W=V[J];if(W.location>=0){let K=z[J];if(K===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),K!==void 0){let ct=K.normalized,pt=K.itemSize,at=t.get(K);if(at===void 0)continue;let ee=at.buffer,$=at.type,st=at.bytesPerElement,Mt=$===i.INT||$===i.UNSIGNED_INT||K.gpuType===Su;if(K.isInterleavedBufferAttribute){let ut=K.data,zt=ut.stride,Ht=K.offset;if(ut.isInstancedInterleavedBuffer){for(let Jt=0;Jt<W.locationSize;Jt++)p(W.location+Jt,ut.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Jt=0;Jt<W.locationSize;Jt++)m(W.location+Jt);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Jt=0;Jt<W.locationSize;Jt++)M(W.location+Jt,pt/W.locationSize,$,ct,zt*st,(Ht+pt/W.locationSize*Jt)*st,Mt)}else{if(K.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)p(W.location+ut,K.meshPerAttribute);E.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ut=0;ut<W.locationSize;ut++)m(W.location+ut);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let ut=0;ut<W.locationSize;ut++)M(W.location+ut,pt/W.locationSize,$,ct,pt*st,pt/W.locationSize*ut*st,Mt)}}else if(D!==void 0){let ct=D[J];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(W.location,ct);break;case 3:i.vertexAttrib3fv(W.location,ct);break;case 4:i.vertexAttrib4fv(W.location,ct);break;default:i.vertexAttrib1fv(W.location,ct)}}}}v()}function I(){L();for(let E in n){let N=n[E];for(let G in N){let F=N[G];for(let z in F)h(F[z].object),delete F[z];delete N[G]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;let N=n[E.id];for(let G in N){let F=N[G];for(let z in F)h(F[z].object),delete F[z];delete N[G]}delete n[E.id]}function C(E){for(let N in n){let G=n[N];if(G[E.id]===void 0)continue;let F=G[E.id];for(let z in F)h(F[z].object),delete F[z];delete G[E.id]}}function L(){S(),r=!0,o!==s&&(o=s,c(o.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function mv(i,t,e){let n;function s(c){n=c}function o(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gv(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let L=C===Br&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Di&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Li&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:w,vertexTextures:I,maxSamples:A}}function yv(i){let t=this,e=null,n=0,s=!1,o=!1,r=new Pi,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||o&&!m)o?h(null):c();else{let v=o?0:n,M=v*4,w=p.clippingState||null;l.value=w,w=h(g,u,M,f);for(let I=0;I!==M;++I)w[I]=e[I];p.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,w=f;M!==y;++M,w+=4)r.copy(d[M]).applyMatrix4(v,a),r.normal.toArray(m,w),m[w+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function xv(i){let t=new WeakMap;function e(r,a){return a===ch?r.mapping=zo:a===hh&&(r.mapping=Uo),r}function n(r){if(r&&r.isTexture){let a=r.mapping;if(a===ch||a===hh)if(t.has(r)){let l=t.get(r).texture;return e(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Wh(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){let a=r.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}var tl=class extends Ka{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,o=n-t,r=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},No=4,Uf=[.125,.215,.35,.446,.526,.582],zs=20,Gc=new tl,Of=new Rt,Wc=null,qc=0,Xc=0,Yc=!1,Fs=(1+Math.sqrt(5))/2,Po=1/Fs,kf=[new b(-Fs,Po,0),new b(Fs,Po,0),new b(-Po,0,Fs),new b(Po,0,Fs),new b(0,Fs,-Po),new b(0,Fs,Po),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)],el=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Wc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wc,qc,Xc),this._renderer.xr.enabled=Yc,t.scissorTest=!1,Na(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zo||t.mapping===Uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Br,format:jn,colorSpace:qo,depthBuffer:!1},s=Vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(t,e,n);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vv(o)),this._blurMaterial=_v(o,t,e)}return s}_compileMaterial(t){let e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,Gc)}_sceneToCubeUV(t,e,n,s){let a=new on(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Of),h.toneMapping=ls,h.autoClear=!1;let f=new Se({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Et(new Fe,f),y=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,y=!0):(f.color.copy(Of),y=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;Na(s,v*M,p>2?M:0,M,M),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===zo||t.mapping===Uo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hf());let o=s?this._cubemapMaterial:this._equirectMaterial,r=new Et(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;let l=this._cubeSize;Na(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Gc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let o=1;o<s;o++){let r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=kf[(s-o-1)%kf.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Et(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*zs-1),y=o/g,m=isFinite(o)?1+Math.floor(h*y):zs;m>zs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zs}`);let p=[],v=0;for(let C=0;C<zs;++C){let L=C/y,S=Math.exp(-L*L/2);p.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-n;let w=this._sizeLods[s],I=3*w*(s>M-No?s-M+No:0),A=4*(this._cubeSize-w);Na(e,I,A,3*w,2*w),l.setRenderTarget(e),l.render(d,Gc)}};function vv(i){let t=[],e=[],n=[],s=i,o=i-No+1+Uf.length;for(let r=0;r<o;r++){let a=Math.pow(2,s);e.push(a);let l=1/a;r>i-No?l=Uf[r-i+No-1]:r===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,v=new Float32Array(y*g*f),M=new Float32Array(m*g*f),w=new Float32Array(p*g*f);for(let A=0;A<f;A++){let C=A%3*2/3-1,L=A>2?0:-1,S=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];v.set(S,y*g*A),M.set(u,m*g*A);let E=[A,A,A,A,A,A];w.set(E,p*g*A)}let I=new dn;I.setAttribute("position",new un(v,y)),I.setAttribute("uv",new un(M,m)),I.setAttribute("faceIndex",new un(w,p)),t.push(I),s>No&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vf(i,t,e){let n=new zi(i,t,e);return n.texture.mapping=bl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Na(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _v(i,t,e){let n=new Float32Array(zs),s=new b(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Hf(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Gf(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rs,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}function bv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ch||l===hh,h=l===zo||l===Uo;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new el(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new el(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){let l=a.target;l.removeEventListener("dispose",o);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function wv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&wr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mv(i,t,e,n){let s={},o=new WeakMap;function r(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)t.remove(y[m])}u.removeEventListener("dispose",r),delete s[u.id];let f=o.get(u);f&&(t.remove(f),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)t.update(u[g],i.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let v=f.array;y=f.version;for(let M=0,w=v.length;M<w;M+=3){let I=v[M+0],A=v[M+1],C=v[M+2];u.push(I,A,A,C,C,I)}}else if(g!==void 0){let v=g.array;y=g.version;for(let M=0,w=v.length/3-1;M<w;M+=3){let I=M+0,A=M+1,C=M+2;u.push(I,A,A,C,C,I)}}else return;let m=new(Ip(u)?Ja:ja)(u,1);m.version=y;let p=o.get(d);p&&t.remove(p),o.set(d,m)}function h(d){let u=o.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ev(i,t,e){let n;function s(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,f){i.drawElements(n,f,o,u*r),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,o,u*r,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function d(u,f,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/r,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,u,0,y,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*y[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Sv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Tv(i,t,e){let n=new WeakMap,s=new _e;function o(r,a,l){let c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),y===!0&&(M=3);let w=a.attributes.position.count*M,I=1;w>t.maxTextureSize&&(I=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let A=new Float32Array(w*I*4*d),C=new Ya(A,w,I,d);C.type=Li,C.needsUpdate=!0;let L=M*4;for(let E=0;E<d;E++){let N=m[E],G=p[E],F=v[E],z=w*I*4*E;for(let V=0;V<N.count;V++){let D=V*L;f===!0&&(s.fromBufferAttribute(N,V),A[z+D+0]=s.x,A[z+D+1]=s.y,A[z+D+2]=s.z,A[z+D+3]=0),g===!0&&(s.fromBufferAttribute(G,V),A[z+D+4]=s.x,A[z+D+5]=s.y,A[z+D+6]=s.z,A[z+D+7]=0),y===!0&&(s.fromBufferAttribute(F,V),A[z+D+8]=s.x,A[z+D+9]=s.y,A[z+D+10]=s.z,A[z+D+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new wt(w,I)},n.set(a,u),a.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:o}}function Av(i,t,e,n){let s=new WeakMap;function o(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function r(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}var nl=class extends Tn{constructor(t,e,n,s,o,r,a,l,c,h=Lo){if(h!==Lo&&h!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Lo&&(n=ks),n===void 0&&h===ko&&(n=Oo),super(null,s,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fp=new Tn,Wf=new nl(1,1),Bp=new Ya,Dp=new Hh,zp=new Qa,qf=[],Xf=[],Yf=new Float32Array(16),Zf=new Float32Array(9),$f=new Float32Array(4);function Xo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,o=qf[s];if(o===void 0&&(o=new Float32Array(s),qf[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ml(i,t){let e=Xf[t];e===void 0&&(e=new Int32Array(t),Xf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function Iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function Pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Nv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;$f.set(n),i.uniformMatrix2fv(this.addr,!1,$f),Ye(e,n)}}function Lv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;Zf.set(n),i.uniformMatrix3fv(this.addr,!1,Zf),Ye(e,n)}}function Fv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(Xe(e,n))return;Yf.set(n),i.uniformMatrix4fv(this.addr,!1,Yf),Ye(e,n)}}function Bv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function zv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Uv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Ov(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Hv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function Gv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Wf.compareFunction=Cp,o=Wf):o=Fp,e.setTexture2D(t||o,s)}function Wv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Dp,s)}function qv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zp,s)}function Xv(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bp,s)}function Yv(i){switch(i){case 5126:return Rv;case 35664:return Cv;case 35665:return Iv;case 35666:return Pv;case 35674:return Nv;case 35675:return Lv;case 35676:return Fv;case 5124:case 35670:return Bv;case 35667:case 35671:return Dv;case 35668:case 35672:return zv;case 35669:case 35673:return Uv;case 5125:return Ov;case 36294:return kv;case 36295:return Vv;case 36296:return Hv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Xv}}function Zv(i,t){i.uniform1fv(this.addr,t)}function $v(i,t){let e=Xo(t,this.size,2);i.uniform2fv(this.addr,e)}function jv(i,t){let e=Xo(t,this.size,3);i.uniform3fv(this.addr,e)}function Jv(i,t){let e=Xo(t,this.size,4);i.uniform4fv(this.addr,e)}function Kv(i,t){let e=Xo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qv(i,t){let e=Xo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function t_(i,t){let e=Xo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function e_(i,t){i.uniform1iv(this.addr,t)}function n_(i,t){i.uniform2iv(this.addr,t)}function i_(i,t){i.uniform3iv(this.addr,t)}function s_(i,t){i.uniform4iv(this.addr,t)}function o_(i,t){i.uniform1uiv(this.addr,t)}function r_(i,t){i.uniform2uiv(this.addr,t)}function a_(i,t){i.uniform3uiv(this.addr,t)}function l_(i,t){i.uniform4uiv(this.addr,t)}function c_(i,t,e){let n=this.cache,s=t.length,o=Ml(e,s);Xe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Fp,o[r])}function h_(i,t,e){let n=this.cache,s=t.length,o=Ml(e,s);Xe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Dp,o[r])}function u_(i,t,e){let n=this.cache,s=t.length,o=Ml(e,s);Xe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||zp,o[r])}function d_(i,t,e){let n=this.cache,s=t.length,o=Ml(e,s);Xe(n,o)||(i.uniform1iv(this.addr,o),Ye(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Bp,o[r])}function f_(i){switch(i){case 5126:return Zv;case 35664:return $v;case 35665:return jv;case 35666:return Jv;case 35674:return Kv;case 35675:return Qv;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return o_;case 36294:return r_;case 36295:return a_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}var qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yv(e.type)}},Xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f_(e.type)}},Yh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let o=0,r=s.length;o!==r;++o){let a=s[o];a.setValue(t,e[a.id],n)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function jf(i,t){i.seq.push(t),i.map[t.id]=t}function p_(i,t,e){let n=i.name,s=n.length;for(Zc.lastIndex=0;;){let o=Zc.exec(n),r=Zc.lastIndex,a=o[1],l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===s){jf(e,c===void 0?new qh(a,i,t):new Xh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Yh(a),jf(e,d)),e=d}}}var Bo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);p_(o,r,this)}}setValue(t,e,n,s){let o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){let a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,o=t.length;s!==o;++s){let r=t[s];r.id in e&&n.push(r)}return n}};function Jf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var m_=37297,g_=0;function y_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}var Kf=new Xt;function x_(i){ae._getMatrix(Kf,ae.workingColorSpace,i);let t=`mat3( ${Kf.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case wl:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Qf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+y_(i.getShaderSource(t),r)}else return s}function v_(i,t){let e=x_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function __(i,t){let e;switch(t){case X0:e="Linear";break;case Y0:e="Reinhard";break;case Z0:e="Cineon";break;case Eu:e="ACESFilmic";break;case j0:e="AgX";break;case J0:e="Neutral";break;case $0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var La=new b;function b_(){ae.getLuminanceCoefficients(La);let i=La.x.toFixed(4),t=La.y.toFixed(4),e=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function M_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function E_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let o=i.getActiveAttrib(t,s),r=o.name,a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Mr(i){return i!==""}function tp(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ep(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(i){return i.replace(S_,A_)}var T_=new Map;function A_(i,t){let e=Zt[t];if(e===void 0){let n=T_.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zh(e)}var R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function np(i){return i.replace(R_,C_)}function C_(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function ip(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function I_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_l?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===S0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ii&&(t="SHADOWMAP_TYPE_VSM"),t}function P_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zo:case Uo:t="ENVMAP_TYPE_CUBE";break;case bl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function N_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Uo:t="ENVMAP_MODE_REFRACTION";break}return t}function L_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gp:t="ENVMAP_BLENDING_MULTIPLY";break;case W0:t="ENVMAP_BLENDING_MIX";break;case q0:t="ENVMAP_BLENDING_ADD";break}return t}function F_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function B_(i,t,e,n){let s=i.getContext(),o=e.defines,r=e.vertexShader,a=e.fragmentShader,l=I_(e),c=P_(e),h=N_(e),d=L_(e),u=F_(e),f=w_(e),g=M_(o),y=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mr).join(`
`),p.length>0&&(p+=`
`)):(m=[ip(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),p=[ip(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ls?"#define TONE_MAPPING":"",e.toneMapping!==ls?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ls?__("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,v_("linearToOutputTexel",e.outputColorSpace),b_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),r=Zh(r),r=tp(r,e),r=ep(r,e),a=Zh(a),a=tp(a,e),a=ep(a,e),r=np(r),a=np(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+m+r,w=v+p+a,I=Jf(s,s.VERTEX_SHADER,M),A=Jf(s,s.FRAGMENT_SHADER,w);s.attachShader(y,I),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(N){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(I).trim(),z=s.getShaderInfoLog(A).trim(),V=!0,D=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,A);else{let J=Qf(s,I,"vertex"),W=Qf(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+J+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(F===""||z==="")&&(D=!1);D&&(N.diagnostics={runnable:V,programLog:G,vertexShader:{log:F,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(I),s.deleteShader(A),L=new Bo(s,y),S=E_(s,y)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(y,m_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=A,this}var D_=0,$h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jh(t),e.set(t,n)),n}},jh=class{constructor(t){this.id=D_++,this.code=t,this.usedTimes=0}};function z_(i,t,e,n,s,o,r){let a=new $a,l=new $h,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,E,N,G,F){let z=G.fog,V=F.geometry,D=S.isMeshStandardMaterial?G.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||D),W=J&&J.mapping===bl?J.image.height:null,K=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ct=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=ct!==void 0?ct.length:0,at=0;V.morphAttributes.position!==void 0&&(at=1),V.morphAttributes.normal!==void 0&&(at=2),V.morphAttributes.color!==void 0&&(at=3);let ee,$,st,Mt;if(K){let ye=ci[K];ee=ye.vertexShader,$=ye.fragmentShader}else ee=S.vertexShader,$=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),Mt=l.getFragmentShaderID(S);let ut=i.getRenderTarget(),zt=i.state.buffers.depth.getReversed(),Ht=F.isInstancedMesh===!0,Jt=F.isBatchedMesh===!0,Be=!!S.map,oe=!!S.matcap,Oe=!!J,H=!!S.aoMap,Ln=!!S.lightMap,ne=!!S.bumpMap,ie=!!S.normalMap,Ft=!!S.displacementMap,Ae=!!S.emissiveMap,Nt=!!S.metalnessMap,P=!!S.roughnessMap,T=S.anisotropy>0,q=S.clearcoat>0,Q=S.dispersion>0,et=S.iridescence>0,j=S.sheen>0,Ct=S.transmission>0,ft=T&&!!S.anisotropyMap,vt=q&&!!S.clearcoatMap,re=q&&!!S.clearcoatNormalMap,ot=q&&!!S.clearcoatRoughnessMap,_t=et&&!!S.iridescenceMap,Dt=et&&!!S.iridescenceThicknessMap,Ut=j&&!!S.sheenColorMap,bt=j&&!!S.sheenRoughnessMap,se=!!S.specularMap,Yt=!!S.specularColorMap,we=!!S.specularIntensityMap,U=Ct&&!!S.transmissionMap,dt=Ct&&!!S.thicknessMap,Z=!!S.gradientMap,tt=!!S.alphaMap,yt=S.alphaTest>0,mt=!!S.alphaHash,Wt=!!S.extensions,ze=ls;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ze=i.toneMapping);let en={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:$,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Jt,batchingColor:Jt&&F._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&F.instanceColor!==null,instancingMorph:Ht&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:qo,alphaToCoverage:!!S.alphaToCoverage,map:Be,matcap:oe,envMap:Oe,envMapMode:Oe&&J.mapping,envMapCubeUVHeight:W,aoMap:H,lightMap:Ln,bumpMap:ne,normalMap:ie,displacementMap:u&&Ft,emissiveMap:Ae,normalMapObjectSpace:ie&&S.normalMapType===eg,normalMapTangentSpace:ie&&S.normalMapType===Rp,metalnessMap:Nt,roughnessMap:P,anisotropy:T,anisotropyMap:ft,clearcoat:q,clearcoatMap:vt,clearcoatNormalMap:re,clearcoatRoughnessMap:ot,dispersion:Q,iridescence:et,iridescenceMap:_t,iridescenceThicknessMap:Dt,sheen:j,sheenColorMap:Ut,sheenRoughnessMap:bt,specularMap:se,specularColorMap:Yt,specularIntensityMap:we,transmission:Ct,transmissionMap:U,thicknessMap:dt,gradientMap:Z,opaque:S.transparent===!1&&S.blending===as&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:yt,alphaHash:mt,combine:S.combine,mapUv:Be&&y(S.map.channel),aoMapUv:H&&y(S.aoMap.channel),lightMapUv:Ln&&y(S.lightMap.channel),bumpMapUv:ne&&y(S.bumpMap.channel),normalMapUv:ie&&y(S.normalMap.channel),displacementMapUv:Ft&&y(S.displacementMap.channel),emissiveMapUv:Ae&&y(S.emissiveMap.channel),metalnessMapUv:Nt&&y(S.metalnessMap.channel),roughnessMapUv:P&&y(S.roughnessMap.channel),anisotropyMapUv:ft&&y(S.anisotropyMap.channel),clearcoatMapUv:vt&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:bt&&y(S.sheenRoughnessMap.channel),specularMapUv:se&&y(S.specularMap.channel),specularColorMapUv:Yt&&y(S.specularColorMap.channel),specularIntensityMapUv:we&&y(S.specularIntensityMap.channel),transmissionMapUv:U&&y(S.transmissionMap.channel),thicknessMapUv:dt&&y(S.thicknessMap.channel),alphaMapUv:tt&&y(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ie||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(Be||tt),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:zt,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:at,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Be&&S.map.isVideoTexture===!0&&ae.getTransfer(S.map.colorSpace)===ve,decodeVideoTextureEmissive:Ae&&S.emissiveMap.isVideoTexture===!0&&ae.getTransfer(S.emissiveMap.colorSpace)===ve,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ni,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Wt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&S.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return en.vertexUv1s=c.has(1),en.vertexUv2s=c.has(2),en.vertexUv3s=c.has(3),c.clear(),en}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(v(E,S),M(E,S),E.push(i.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function M(S,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),S.push(a.mask)}function w(S){let E=g[S.type],N;if(E){let G=ci[E];N=Ag.clone(G.uniforms)}else N=S.uniforms;return N}function I(S,E){let N;for(let G=0,F=h.length;G<F;G++){let z=h[G];if(z.cacheKey===E){N=z,++N.usedTimes;break}}return N===void 0&&(N=new B_(i,E,S,o),h.push(N)),N}function A(S){if(--S.usedTimes===0){let E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:L}}function U_(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,l){i.get(r)[a]=l}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function O_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function op(){let i=[],t=0,e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(d,u,f,g,y,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),t++,p}function a(d,u,f,g,y,m){let p=r(d,u,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(d,u,f,g,y,m){let p=r(d,u,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||O_),n.length>1&&n.sort(u||sp),s.length>1&&s.sort(u||sp)}function h(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:l,finish:h,sort:c}}function k_(){let i=new WeakMap;function t(n,s){let o=i.get(n),r;return o===void 0?(r=new op,i.set(n,[r])):s>=o.length?(r=new op,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function V_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new Rt};break;case"SpotLight":e={position:new b,direction:new b,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new b,halfWidth:new b,halfHeight:new b};break}return i[t.id]=e,e}}}function H_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var G_=0;function W_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function q_(i){let t=new V_,e=H_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new b);let s=new b,o=new Ne,r=new Ne;function a(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,v=0,M=0,w=0,I=0,A=0,C=0;c.sort(W_);for(let S=0,E=c.length;S<E;S++){let N=c[S],G=N.color,F=N.intensity,z=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=G.r*F,d+=G.g*F,u+=G.b*F;else if(N.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(N.sh.coefficients[D],F);C++}else if(N.isDirectionalLight){let D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let J=N.shadow,W=e.get(N);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=N.shadow.matrix,v++}n.directional[f]=D,f++}else if(N.isSpotLight){let D=t.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(G).multiplyScalar(F),D.distance=z,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,n.spot[y]=D;let J=N.shadow;if(N.map&&(n.spotLightMap[I]=N.map,I++,J.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[y]=J.matrix,N.castShadow){let W=e.get(N);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=V,w++}y++}else if(N.isRectAreaLight){let D=t.get(N);D.color.copy(G).multiplyScalar(F),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=D,m++}else if(N.isPointLight){let D=t.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),D.distance=N.distance,D.decay=N.decay,N.castShadow){let J=N.shadow,W=e.get(N);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=N.shadow.matrix,M++}n.point[g]=D,g++}else if(N.isHemisphereLight){let D=t.get(N);D.skyColor.copy(N.color).multiplyScalar(F),D.groundColor.copy(N.groundColor).multiplyScalar(F),n.hemi[p]=D,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==w||L.numSpotMaps!==I||L.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=w,L.numSpotMaps=I,L.numLightProbes=C,n.version=G_++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let M=c[p];if(M.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(M.isSpotLight){let w=n.spot[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(M.isRectAreaLight){let w=n.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),r.identity(),o.copy(M.matrixWorld),o.premultiply(m),r.extractRotation(o),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){let w=n.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let w=n.hemi[y];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function rp(i){let t=new q_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function X_(i){let t=new WeakMap;function e(s,o=0){let r=t.get(s),a;return r===void 0?(a=new rp(i),t.set(s,[a])):o>=r.length?(a=new rp(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jh=class extends us{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kh=class extends us{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`;function $_(i,t,e){let n=new Ir,s=new wt,o=new wt,r=new _e,a=new Jh({depthPacking:tg}),l=new Kh,c={},h=e.maxTextureSize,d={[cs]:rn,[rn]:cs,[Ni]:Ni},u=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Y_,fragmentShader:Z_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new dn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_l;let p=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),E=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),G=i.state;G.setBlending(rs),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let F=p!==Ii&&this.type===Ii,z=p===Ii&&this.type!==Ii;for(let V=0,D=A.length;V<D;V++){let J=A[V],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let K=W.getFrameExtents();if(s.multiply(K),o.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/K.x),s.x=o.x*K.x,W.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/K.y),s.y=o.y*K.y,W.mapSize.y=o.y)),W.map===null||F===!0||z===!0){let pt=this.type!==Ii?{minFilter:Sn,magFilter:Sn}:{};W.map!==null&&W.map.dispose(),W.map=new zi(s.x,s.y,pt),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let ct=W.getViewportCount();for(let pt=0;pt<ct;pt++){let at=W.getViewport(pt);r.set(o.x*at.x,o.y*at.y,o.x*at.z,o.y*at.w),G.viewport(r),W.updateMatrices(J,pt),n=W.getFrustum(),w(C,L,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Ii&&v(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,E,N)};function v(A,C){let L=t.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zi(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,L,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,L,f,y,null)}function M(A,C,L,S){let E=null,N=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)E=N;else if(E=L.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let G=E.uuid,F=C.uuid,z=c[G];z===void 0&&(z={},c[G]=z);let V=z[F];V===void 0&&(V=E.clone(),z[F]=V,C.addEventListener("dispose",I)),E=V}if(E.visible=C.visible,E.wireframe=C.wireframe,S===Ii?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:d[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let G=i.properties.get(E);G.light=L}return E}function w(A,C,L,S,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Ii)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let F=t.update(A),z=A.material;if(Array.isArray(z)){let V=F.groups;for(let D=0,J=V.length;D<J;D++){let W=V[D],K=z[W.materialIndex];if(K&&K.visible){let ct=M(A,K,S,E);A.onBeforeShadow(i,A,C,L,F,ct,W),i.renderBufferDirect(L,null,F,ct,A,W),A.onAfterShadow(i,A,C,L,F,ct,W)}}}else if(z.visible){let V=M(A,z,S,E);A.onBeforeShadow(i,A,C,L,F,V,null),i.renderBufferDirect(L,null,F,V,A,null),A.onAfterShadow(i,A,C,L,F,V,null)}}let G=A.children;for(let F=0,z=G.length;F<z;F++)w(G[F],C,L,S,E)}function I(A){A.target.removeEventListener("dispose",I);for(let L in c){let S=c[L],E=A.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var j_={[nh]:ih,[sh]:ah,[oh]:lh,[Do]:rh,[ih]:nh,[ah]:sh,[lh]:oh,[rh]:Do};function J_(i,t){function e(){let U=!1,dt=new _e,Z=null,tt=new _e(0,0,0,0);return{setMask:function(yt){Z!==yt&&!U&&(i.colorMask(yt,yt,yt,yt),Z=yt)},setLocked:function(yt){U=yt},setClear:function(yt,mt,Wt,ze,en){en===!0&&(yt*=ze,mt*=ze,Wt*=ze),dt.set(yt,mt,Wt,ze),tt.equals(dt)===!1&&(i.clearColor(yt,mt,Wt,ze),tt.copy(dt))},reset:function(){U=!1,Z=null,tt.set(-1,0,0,0)}}}function n(){let U=!1,dt=!1,Z=null,tt=null,yt=null;return{setReversed:function(mt){if(dt!==mt){let Wt=t.get("EXT_clip_control");dt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let ze=yt;yt=null,this.setClear(ze)}dt=mt},getReversed:function(){return dt},setTest:function(mt){mt?ut(i.DEPTH_TEST):zt(i.DEPTH_TEST)},setMask:function(mt){Z!==mt&&!U&&(i.depthMask(mt),Z=mt)},setFunc:function(mt){if(dt&&(mt=j_[mt]),tt!==mt){switch(mt){case nh:i.depthFunc(i.NEVER);break;case ih:i.depthFunc(i.ALWAYS);break;case sh:i.depthFunc(i.LESS);break;case Do:i.depthFunc(i.LEQUAL);break;case oh:i.depthFunc(i.EQUAL);break;case rh:i.depthFunc(i.GEQUAL);break;case ah:i.depthFunc(i.GREATER);break;case lh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=mt}},setLocked:function(mt){U=mt},setClear:function(mt){yt!==mt&&(dt&&(mt=1-mt),i.clearDepth(mt),yt=mt)},reset:function(){U=!1,Z=null,tt=null,yt=null,dt=!1}}}function s(){let U=!1,dt=null,Z=null,tt=null,yt=null,mt=null,Wt=null,ze=null,en=null;return{setTest:function(ye){U||(ye?ut(i.STENCIL_TEST):zt(i.STENCIL_TEST))},setMask:function(ye){dt!==ye&&!U&&(i.stencilMask(ye),dt=ye)},setFunc:function(ye,qn,Mi){(Z!==ye||tt!==qn||yt!==Mi)&&(i.stencilFunc(ye,qn,Mi),Z=ye,tt=qn,yt=Mi)},setOp:function(ye,qn,Mi){(mt!==ye||Wt!==qn||ze!==Mi)&&(i.stencilOp(ye,qn,Mi),mt=ye,Wt=qn,ze=Mi)},setLocked:function(ye){U=ye},setClear:function(ye){en!==ye&&(i.clearStencil(ye),en=ye)},reset:function(){U=!1,dt=null,Z=null,tt=null,yt=null,mt=null,Wt=null,ze=null,en=null}}}let o=new e,r=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,v=null,M=null,w=null,I=null,A=null,C=new Rt(0,0,0),L=0,S=!1,E=null,N=null,G=null,F=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,J=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),D=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),D=J>=2);let K=null,ct={},pt=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),ee=new _e().fromArray(pt),$=new _e().fromArray(at);function st(U,dt,Z,tt){let yt=new Uint8Array(4),mt=i.createTexture();i.bindTexture(U,mt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Wt=0;Wt<Z;Wt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(dt+Wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return mt}let Mt={};Mt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),r.setFunc(Do),ne(!1),ie(cf),ut(i.CULL_FACE),H(rs);function ut(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function zt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ht(U,dt){return d[U]!==dt?(i.bindFramebuffer(U,dt),d[U]=dt,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=dt),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Jt(U,dt){let Z=f,tt=!1;if(U){Z=u.get(dt),Z===void 0&&(Z=[],u.set(dt,Z));let yt=U.textures;if(Z.length!==yt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let mt=0,Wt=yt.length;mt<Wt;mt++)Z[mt]=i.COLOR_ATTACHMENT0+mt;Z.length=yt.length,tt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,tt=!0);tt&&i.drawBuffers(Z)}function Be(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let oe={[Bs]:i.FUNC_ADD,[A0]:i.FUNC_SUBTRACT,[R0]:i.FUNC_REVERSE_SUBTRACT};oe[C0]=i.MIN,oe[I0]=i.MAX;let Oe={[P0]:i.ZERO,[N0]:i.ONE,[L0]:i.SRC_COLOR,[th]:i.SRC_ALPHA,[O0]:i.SRC_ALPHA_SATURATE,[z0]:i.DST_COLOR,[B0]:i.DST_ALPHA,[F0]:i.ONE_MINUS_SRC_COLOR,[eh]:i.ONE_MINUS_SRC_ALPHA,[U0]:i.ONE_MINUS_DST_COLOR,[D0]:i.ONE_MINUS_DST_ALPHA,[k0]:i.CONSTANT_COLOR,[V0]:i.ONE_MINUS_CONSTANT_COLOR,[H0]:i.CONSTANT_ALPHA,[G0]:i.ONE_MINUS_CONSTANT_ALPHA};function H(U,dt,Z,tt,yt,mt,Wt,ze,en,ye){if(U===rs){y===!0&&(zt(i.BLEND),y=!1);return}if(y===!1&&(ut(i.BLEND),y=!0),U!==T0){if(U!==m||ye!==S){if((p!==Bs||w!==Bs)&&(i.blendEquation(i.FUNC_ADD),p=Bs,w=Bs),ye)switch(U){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ar:i.blendFunc(i.ONE,i.ONE);break;case hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ar:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,M=null,I=null,A=null,C.set(0,0,0),L=0,m=U,S=ye}return}yt=yt||dt,mt=mt||Z,Wt=Wt||tt,(dt!==p||yt!==w)&&(i.blendEquationSeparate(oe[dt],oe[yt]),p=dt,w=yt),(Z!==v||tt!==M||mt!==I||Wt!==A)&&(i.blendFuncSeparate(Oe[Z],Oe[tt],Oe[mt],Oe[Wt]),v=Z,M=tt,I=mt,A=Wt),(ze.equals(C)===!1||en!==L)&&(i.blendColor(ze.r,ze.g,ze.b,en),C.copy(ze),L=en),m=U,S=!1}function Ln(U,dt){U.side===Ni?zt(i.CULL_FACE):ut(i.CULL_FACE);let Z=U.side===rn;dt&&(Z=!Z),ne(Z),U.blending===as&&U.transparent===!1?H(rs):H(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),o.setMask(U.colorWrite);let tt=U.stencilWrite;a.setTest(tt),tt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ae(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(U){E!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),E=U)}function ie(U){U!==M0?(ut(i.CULL_FACE),U!==N&&(U===cf?i.cullFace(i.BACK):U===E0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):zt(i.CULL_FACE),N=U}function Ft(U){U!==G&&(D&&i.lineWidth(U),G=U)}function Ae(U,dt,Z){U?(ut(i.POLYGON_OFFSET_FILL),(F!==dt||z!==Z)&&(i.polygonOffset(dt,Z),F=dt,z=Z)):zt(i.POLYGON_OFFSET_FILL)}function Nt(U){U?ut(i.SCISSOR_TEST):zt(i.SCISSOR_TEST)}function P(U){U===void 0&&(U=i.TEXTURE0+V-1),K!==U&&(i.activeTexture(U),K=U)}function T(U,dt,Z){Z===void 0&&(K===null?Z=i.TEXTURE0+V-1:Z=K);let tt=ct[Z];tt===void 0&&(tt={type:void 0,texture:void 0},ct[Z]=tt),(tt.type!==U||tt.texture!==dt)&&(K!==Z&&(i.activeTexture(Z),K=Z),i.bindTexture(U,dt||Mt[U]),tt.type=U,tt.texture=dt)}function q(){let U=ct[K];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ut(U){ee.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function bt(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function se(U,dt){let Z=c.get(dt);Z===void 0&&(Z=new WeakMap,c.set(dt,Z));let tt=Z.get(U);tt===void 0&&(tt=i.getUniformBlockIndex(dt,U.name),Z.set(U,tt))}function Yt(U,dt){let tt=c.get(dt).get(U);l.get(dt)!==tt&&(i.uniformBlockBinding(dt,tt,U.__bindingPointIndex),l.set(dt,tt))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,ct={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,v=null,M=null,w=null,I=null,A=null,C=new Rt(0,0,0),L=0,S=!1,E=null,N=null,G=null,F=null,z=null,ee.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ut,disable:zt,bindFramebuffer:Ht,drawBuffers:Jt,useProgram:Be,setBlending:H,setMaterial:Ln,setFlipSided:ne,setCullFace:ie,setLineWidth:Ft,setPolygonOffset:Ae,setScissorTest:Nt,activeTexture:P,bindTexture:T,unbindTexture:q,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:_t,texImage3D:Dt,updateUBOMapping:se,uniformBlockBinding:Yt,texStorage2D:re,texStorage3D:ot,texSubImage2D:j,texSubImage3D:Ct,compressedTexSubImage2D:ft,compressedTexSubImage3D:vt,scissor:Ut,viewport:bt,reset:we}}function ap(i,t,e,n){let s=K_(n);switch(e){case bp:return i*t;case Mp:return i*t;case Ep:return i*t*2;case Sp:return i*t/s.components*s.byteLength;case Ru:return i*t/s.components*s.byteLength;case Tp:return i*t*2/s.components*s.byteLength;case Cu:return i*t*2/s.components*s.byteLength;case wp:return i*t*3/s.components*s.byteLength;case jn:return i*t*4/s.components*s.byteLength;case Iu:return i*t*4/s.components*s.byteLength;case Ua:case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fh:case mh:return Math.max(i,16)*Math.max(t,8)/4;case dh:case ph:return Math.max(i,8)*Math.max(t,8)/2;case gh:case yh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Th:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ch:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ph:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Nh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ha:case Lh:case Fh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ap:case Bh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dh:case zh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K_(i){switch(i){case Di:case xp:return{byteLength:1,components:1};case Cr:case vp:case Br:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case ks:case Su:case Li:return{byteLength:4,components:1};case _p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Q_(i,t,e,n,s,o,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new wt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return f?new OffscreenCanvas(P,T):qa("canvas")}function y(P,T,q){let Q=1,et=Nt(P);if((et.width>q||et.height>q)&&(Q=q/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let j=Math.floor(Q*et.width),Ct=Math.floor(Q*et.height);d===void 0&&(d=g(j,Ct));let ft=T?g(j,Ct):d;return ft.width=j,ft.height=Ct,ft.getContext("2d").drawImage(P,0,0,j,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+Ct+")."),ft}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(P,T,q,Q,et=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=T;if(T===i.RED&&(q===i.FLOAT&&(j=i.R32F),q===i.HALF_FLOAT&&(j=i.R16F),q===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.R8UI),q===i.UNSIGNED_SHORT&&(j=i.R16UI),q===i.UNSIGNED_INT&&(j=i.R32UI),q===i.BYTE&&(j=i.R8I),q===i.SHORT&&(j=i.R16I),q===i.INT&&(j=i.R32I)),T===i.RG&&(q===i.FLOAT&&(j=i.RG32F),q===i.HALF_FLOAT&&(j=i.RG16F),q===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RG8UI),q===i.UNSIGNED_SHORT&&(j=i.RG16UI),q===i.UNSIGNED_INT&&(j=i.RG32UI),q===i.BYTE&&(j=i.RG8I),q===i.SHORT&&(j=i.RG16I),q===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGB8UI),q===i.UNSIGNED_SHORT&&(j=i.RGB16UI),q===i.UNSIGNED_INT&&(j=i.RGB32UI),q===i.BYTE&&(j=i.RGB8I),q===i.SHORT&&(j=i.RGB16I),q===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),q===i.UNSIGNED_INT&&(j=i.RGBA32UI),q===i.BYTE&&(j=i.RGBA8I),q===i.SHORT&&(j=i.RGBA16I),q===i.INT&&(j=i.RGBA32I)),T===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),T===i.RGBA){let Ct=et?wl:ae.getTransfer(Q);q===i.FLOAT&&(j=i.RGBA32F),q===i.HALF_FLOAT&&(j=i.RGBA16F),q===i.UNSIGNED_BYTE&&(j=Ct===ve?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function w(P,T){let q;return P?T===null||T===ks||T===Oo?q=i.DEPTH24_STENCIL8:T===Li?q=i.DEPTH32F_STENCIL8:T===Cr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ks||T===Oo?q=i.DEPTH_COMPONENT24:T===Li?q=i.DEPTH_COMPONENT32F:T===Cr&&(q=i.DEPTH_COMPONENT16),q}function I(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==hi?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function A(P){let T=P.target;T.removeEventListener("dispose",A),L(T),T.isVideoTexture&&h.delete(T)}function C(P){let T=P.target;T.removeEventListener("dispose",C),E(T)}function L(P){let T=n.get(P);if(T.__webglInit===void 0)return;let q=P.source,Q=u.get(q);if(Q){let et=Q[T.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(P),Object.keys(Q).length===0&&u.delete(q)}n.remove(P)}function S(P){let T=n.get(P);i.deleteTexture(T.__webglTexture);let q=P.source,Q=u.get(q);delete Q[T.__cacheKey],r.memory.textures--}function E(P){let T=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let et=0;et<T.__webglFramebuffer[Q].length;et++)i.deleteFramebuffer(T.__webglFramebuffer[Q][et]);else i.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)i.deleteFramebuffer(T.__webglFramebuffer[Q]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let q=P.textures;for(let Q=0,et=q.length;Q<et;Q++){let j=n.get(q[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),r.memory.textures--),n.remove(q[Q])}n.remove(P)}let N=0;function G(){N=0}function F(){let P=N;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),N+=1,P}function z(P){let T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function V(P,T){let q=n.get(P);if(P.isVideoTexture&&Ft(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){let Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(q,P,T);return}}e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+T)}function D(P,T){let q=n.get(P);if(P.version>0&&q.__version!==P.version){$(q,P,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+T)}function J(P,T){let q=n.get(P);if(P.version>0&&q.__version!==P.version){$(q,P,T);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+T)}function W(P,T){let q=n.get(P);if(P.version>0&&q.__version!==P.version){st(q,P,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+T)}let K={[Rr]:i.REPEAT,[Us]:i.CLAMP_TO_EDGE,[uh]:i.MIRRORED_REPEAT},ct={[Sn]:i.NEAREST,[K0]:i.NEAREST_MIPMAP_NEAREST,[fa]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[vc]:i.LINEAR_MIPMAP_NEAREST,[Os]:i.LINEAR_MIPMAP_LINEAR},pt={[ng]:i.NEVER,[lg]:i.ALWAYS,[ig]:i.LESS,[Cp]:i.LEQUAL,[sg]:i.EQUAL,[ag]:i.GEQUAL,[og]:i.GREATER,[rg]:i.NOTEQUAL};function at(P,T){if(T.type===Li&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===hi||T.magFilter===vc||T.magFilter===fa||T.magFilter===Os||T.minFilter===hi||T.minFilter===vc||T.minFilter===fa||T.minFilter===Os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,K[T.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,K[T.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,K[T.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ct[T.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ct[T.minFilter]),T.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,pt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Sn||T.minFilter!==fa&&T.minFilter!==Os||T.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function ee(P,T){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",A));let Q=T.source,et=u.get(Q);et===void 0&&(et={},u.set(Q,et));let j=z(T);if(j!==P.__cacheKey){et[j]===void 0&&(et[j]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,q=!0),et[j].usedTimes++;let Ct=et[P.__cacheKey];Ct!==void 0&&(et[P.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(T)),P.__cacheKey=j,P.__webglTexture=et[j].texture}return q}function $(P,T,q){let Q=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=i.TEXTURE_3D);let et=ee(P,T),j=T.source;e.bindTexture(Q,P.__webglTexture,i.TEXTURE0+q);let Ct=n.get(j);if(j.version!==Ct.__version||et===!0){e.activeTexture(i.TEXTURE0+q);let ft=ae.getPrimaries(ae.workingColorSpace),vt=T.colorSpace===os?null:ae.getPrimaries(T.colorSpace),re=T.colorSpace===os||ft===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ot=y(T.image,!1,s.maxTextureSize);ot=Ae(T,ot);let _t=o.convert(T.format,T.colorSpace),Dt=o.convert(T.type),Ut=M(T.internalFormat,_t,Dt,T.colorSpace,T.isVideoTexture);at(Q,T);let bt,se=T.mipmaps,Yt=T.isVideoTexture!==!0,we=Ct.__version===void 0||et===!0,U=j.dataReady,dt=I(T,ot);if(T.isDepthTexture)Ut=w(T.format===ko,T.type),we&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Ut,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,_t,Dt,null));else if(T.isDataTexture)if(se.length>0){Yt&&we&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,se[0].width,se[0].height);for(let Z=0,tt=se.length;Z<tt;Z++)bt=se[Z],Yt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,bt.width,bt.height,_t,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,Z,Ut,bt.width,bt.height,0,_t,Dt,bt.data);T.generateMipmaps=!1}else Yt?(we&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,ot.width,ot.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,_t,Dt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,ot.width,ot.height,0,_t,Dt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Yt&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ut,se[0].width,se[0].height,ot.depth);for(let Z=0,tt=se.length;Z<tt;Z++)if(bt=se[Z],T.format!==jn)if(_t!==null)if(Yt){if(U)if(T.layerUpdates.size>0){let yt=ap(bt.width,bt.height,T.format,T.type);for(let mt of T.layerUpdates){let Wt=bt.data.subarray(mt*yt/bt.data.BYTES_PER_ELEMENT,(mt+1)*yt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,mt,bt.width,bt.height,1,_t,Wt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,ot.depth,_t,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ut,bt.width,bt.height,ot.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,ot.depth,_t,Dt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ut,bt.width,bt.height,ot.depth,0,_t,Dt,bt.data)}else{Yt&&we&&e.texStorage2D(i.TEXTURE_2D,dt,Ut,se[0].width,se[0].height);for(let Z=0,tt=se.length;Z<tt;Z++)bt=se[Z],T.format!==jn?_t!==null?Yt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,bt.width,bt.height,_t,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,Ut,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,bt.width,bt.height,_t,Dt,bt.data):e.texImage2D(i.TEXTURE_2D,Z,Ut,bt.width,bt.height,0,_t,Dt,bt.data)}else if(T.isDataArrayTexture)if(Yt){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Ut,ot.width,ot.height,ot.depth),U)if(T.layerUpdates.size>0){let Z=ap(ot.width,ot.height,T.format,T.type);for(let tt of T.layerUpdates){let yt=ot.data.subarray(tt*Z/ot.data.BYTES_PER_ELEMENT,(tt+1)*Z/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,ot.width,ot.height,1,_t,Dt,yt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,_t,Dt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ot.width,ot.height,ot.depth,0,_t,Dt,ot.data);else if(T.isData3DTexture)Yt?(we&&e.texStorage3D(i.TEXTURE_3D,dt,Ut,ot.width,ot.height,ot.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,_t,Dt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ot.width,ot.height,ot.depth,0,_t,Dt,ot.data);else if(T.isFramebufferTexture){if(we)if(Yt)e.texStorage2D(i.TEXTURE_2D,dt,Ut,ot.width,ot.height);else{let Z=ot.width,tt=ot.height;for(let yt=0;yt<dt;yt++)e.texImage2D(i.TEXTURE_2D,yt,Ut,Z,tt,0,_t,Dt,null),Z>>=1,tt>>=1}}else if(se.length>0){if(Yt&&we){let Z=Nt(se[0]);e.texStorage2D(i.TEXTURE_2D,dt,Ut,Z.width,Z.height)}for(let Z=0,tt=se.length;Z<tt;Z++)bt=se[Z],Yt?U&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,_t,Dt,bt):e.texImage2D(i.TEXTURE_2D,Z,Ut,_t,Dt,bt);T.generateMipmaps=!1}else if(Yt){if(we){let Z=Nt(ot);e.texStorage2D(i.TEXTURE_2D,dt,Ut,Z.width,Z.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Dt,ot)}else e.texImage2D(i.TEXTURE_2D,0,Ut,_t,Dt,ot);m(T)&&p(Q),Ct.__version=j.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function st(P,T,q){if(T.image.length!==6)return;let Q=ee(P,T),et=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);let j=n.get(et);if(et.version!==j.__version||Q===!0){e.activeTexture(i.TEXTURE0+q);let Ct=ae.getPrimaries(ae.workingColorSpace),ft=T.colorSpace===os?null:ae.getPrimaries(T.colorSpace),vt=T.colorSpace===os||Ct===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let re=T.isCompressedTexture||T.image[0].isCompressedTexture,ot=T.image[0]&&T.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!re&&!ot?_t[tt]=y(T.image[tt],!0,s.maxCubemapSize):_t[tt]=ot?T.image[tt].image:T.image[tt],_t[tt]=Ae(T,_t[tt]);let Dt=_t[0],Ut=o.convert(T.format,T.colorSpace),bt=o.convert(T.type),se=M(T.internalFormat,Ut,bt,T.colorSpace),Yt=T.isVideoTexture!==!0,we=j.__version===void 0||Q===!0,U=et.dataReady,dt=I(T,Dt);at(i.TEXTURE_CUBE_MAP,T);let Z;if(re){Yt&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,se,Dt.width,Dt.height);for(let tt=0;tt<6;tt++){Z=_t[tt].mipmaps;for(let yt=0;yt<Z.length;yt++){let mt=Z[yt];T.format!==jn?Ut!==null?Yt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,mt.width,mt.height,Ut,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,se,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,0,0,mt.width,mt.height,Ut,bt,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt,se,mt.width,mt.height,0,Ut,bt,mt.data)}}}else{if(Z=T.mipmaps,Yt&&we){Z.length>0&&dt++;let tt=Nt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,se,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(ot){Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,Ut,bt,_t[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,se,_t[tt].width,_t[tt].height,0,Ut,bt,_t[tt].data);for(let yt=0;yt<Z.length;yt++){let Wt=Z[yt].image[tt].image;Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Wt.width,Wt.height,Ut,bt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,se,Wt.width,Wt.height,0,Ut,bt,Wt.data)}}else{Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ut,bt,_t[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,se,Ut,bt,_t[tt]);for(let yt=0;yt<Z.length;yt++){let mt=Z[yt];Yt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,0,0,Ut,bt,mt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,yt+1,se,Ut,bt,mt.image[tt])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),j.__version=et.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function Mt(P,T,q,Q,et,j){let Ct=o.convert(q.format,q.colorSpace),ft=o.convert(q.type),vt=M(q.internalFormat,Ct,ft,q.colorSpace),re=n.get(T),ot=n.get(q);if(ot.__renderTarget=T,!re.__hasExternalTextures){let _t=Math.max(1,T.width>>j),Dt=Math.max(1,T.height>>j);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,j,vt,_t,Dt,T.depth,0,Ct,ft,null):e.texImage2D(et,j,vt,_t,Dt,0,Ct,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,ot.__webglTexture,0,ne(T)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,ot.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(P,T,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),T.depthBuffer){let Q=T.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,j=w(T.stencilBuffer,et),Ct=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=ne(T);ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,j,T.width,T.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,P)}else{let Q=T.textures;for(let et=0;et<Q.length;et++){let j=Q[et],Ct=o.convert(j.format,j.colorSpace),ft=o.convert(j.type),vt=M(j.internalFormat,Ct,ft,j.colorSpace),re=ne(T);q&&ie(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,vt,T.width,T.height):ie(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,vt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,vt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(T.depthTexture);Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);let et=Q.__webglTexture,j=ne(T);if(T.depthTexture.format===Lo)ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(T.depthTexture.format===ko)ie(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ht(P){let T=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){let Q=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){let et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),T.__depthDisposeCallback=et}T.__boundDepthTexture=Q}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");zt(T.__webglFramebuffer,P)}else if(q){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=i.createRenderbuffer(),ut(T.__webglDepthbuffer[Q],P,!1);else{let et=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ut(T.__webglDepthbuffer,P,!1);else{let Q=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(P,T,q){let Q=n.get(P);T!==void 0&&Mt(Q.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ht(P)}function Be(P){let T=P.texture,q=n.get(P),Q=n.get(T);P.addEventListener("dispose",C);let et=P.textures,j=P.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=T.version,r.memory.textures++),j){q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[ft]=[];for(let vt=0;vt<T.mipmaps.length;vt++)q.__webglFramebuffer[ft][vt]=i.createFramebuffer()}else q.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let ft=0;ft<T.mipmaps.length;ft++)q.__webglFramebuffer[ft]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let ft=0,vt=et.length;ft<vt;ft++){let re=n.get(et[ft]);re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture(),r.memory.textures++)}if(P.samples>0&&ie(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){let vt=et[ft];q.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ft]);let re=o.convert(vt.format,vt.colorSpace),ot=o.convert(vt.type),_t=M(vt.internalFormat,re,ot,vt.colorSpace,P.isXRRenderTarget===!0),Dt=ne(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,_t,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,q.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),at(i.TEXTURE_CUBE_MAP,T);for(let ft=0;ft<6;ft++)if(T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)Mt(q.__webglFramebuffer[ft][vt],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,vt);else Mt(q.__webglFramebuffer[ft],P,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let ft=0,vt=et.length;ft<vt;ft++){let re=et[ft],ot=n.get(re);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),at(i.TEXTURE_2D,re),Mt(q.__webglFramebuffer,P,re,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(re)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ft=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Q.__webglTexture),at(ft,T),T.mipmaps&&T.mipmaps.length>0)for(let vt=0;vt<T.mipmaps.length;vt++)Mt(q.__webglFramebuffer[vt],P,T,i.COLOR_ATTACHMENT0,ft,vt);else Mt(q.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0,ft,0);m(T)&&p(ft),e.unbindTexture()}P.depthBuffer&&Ht(P)}function oe(P){let T=P.textures;for(let q=0,Q=T.length;q<Q;q++){let et=T[q];if(m(et)){let j=v(P),Ct=n.get(et).__webglTexture;e.bindTexture(j,Ct),p(j),e.unbindTexture()}}}let Oe=[],H=[];function Ln(P){if(P.samples>0){if(ie(P)===!1){let T=P.textures,q=P.width,Q=P.height,et=i.COLOR_BUFFER_BIT,j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(P),ft=T.length>1;if(ft)for(let vt=0;vt<T.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let vt=0;vt<T.length;vt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[vt]);let re=n.get(T[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,q,Q,0,0,q,Q,et,i.NEAREST),l===!0&&(Oe.length=0,H.length=0,Oe.push(i.COLOR_ATTACHMENT0+vt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Oe.push(j),H.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Oe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let vt=0;vt<T.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[vt]);let re=n.get(T[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,re,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let T=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ne(P){return Math.min(s.maxSamples,P.samples)}function ie(P){let T=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ft(P){let T=r.render.frame;h.get(P)!==T&&(h.set(P,T),P.update())}function Ae(P,T){let q=P.colorSpace,Q=P.format,et=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==qo&&q!==os&&(ae.getTransfer(q)===ve?(Q!==jn||et!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Nt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=G,this.setTexture2D=V,this.setTexture2DArray=D,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=Jt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ie}function tb(i,t){function e(n,s=os){let o,r=ae.getTransfer(s);if(n===Di)return i.UNSIGNED_BYTE;if(n===Tu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_p)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xp)return i.BYTE;if(n===vp)return i.SHORT;if(n===Cr)return i.UNSIGNED_SHORT;if(n===Su)return i.INT;if(n===ks)return i.UNSIGNED_INT;if(n===Li)return i.FLOAT;if(n===Br)return i.HALF_FLOAT;if(n===bp)return i.ALPHA;if(n===wp)return i.RGB;if(n===jn)return i.RGBA;if(n===Mp)return i.LUMINANCE;if(n===Ep)return i.LUMINANCE_ALPHA;if(n===Lo)return i.DEPTH_COMPONENT;if(n===ko)return i.DEPTH_STENCIL;if(n===Sp)return i.RED;if(n===Ru)return i.RED_INTEGER;if(n===Tp)return i.RG;if(n===Cu)return i.RG_INTEGER;if(n===Iu)return i.RGBA_INTEGER;if(n===Ua||n===Oa||n===ka||n===Va)if(r===ve)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ua)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ua)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dh||n===fh||n===ph||n===mh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ph)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gh||n===yh||n===xh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===gh||n===yh)return r===ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===xh)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vh||n===_h||n===bh||n===wh||n===Mh||n===Eh||n===Sh||n===Th||n===Ah||n===Rh||n===Ch||n===Ih||n===Ph||n===Nh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===vh)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_h)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bh)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wh)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mh)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eh)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sh)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Th)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ah)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rh)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ch)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ih)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ph)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nh)return r===ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===Lh||n===Fh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ha)return r===ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ap||n===Bh||n===Dh||n===zh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ha)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Qh=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},hn=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},eb={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ib=`
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

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Tn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Dn({vertexShader:nb,fragmentShader:ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},eu=class extends hs{constructor(t,e){super();let n=this,s=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=new tu,m=e.getContextAttributes(),p=null,v=null,M=[],w=[],I=new wt,A=null,C=new on;C.viewport=new _e;let L=new on;L.viewport=new _e;let S=[C,L],E=new Qh,N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=M[$];return st===void 0&&(st=new Er,M[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=M[$];return st===void 0&&(st=new Er,M[$]=st),st.getGripSpace()},this.getHand=function($){let st=M[$];return st===void 0&&(st=new Er,M[$]=st),st.getHandSpace()};function F($){let st=w.indexOf($.inputSource);if(st===-1)return;let Mt=M[st];Mt!==void 0&&(Mt.update($.inputSource,$.frame,c||r),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",V);for(let $=0;$<M.length;$++){let st=w[$];st!==null&&(w[$]=null,M[$].disconnect(st))}N=null,G=null,y.reset(),t.setRenderTarget(p),f=null,u=null,d=null,s=null,v=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",z),s.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new zi(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Mt=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?ko:Lo,Mt=m.stencil?Oo:ks);let zt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:o};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new zi(u.textureWidth,u.textureHeight,{format:jn,type:Di,depthTexture:new nl(u.textureWidth,u.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V($){for(let st=0;st<$.removed.length;st++){let Mt=$.removed[st],ut=w.indexOf(Mt);ut>=0&&(w[ut]=null,M[ut].disconnect(Mt))}for(let st=0;st<$.added.length;st++){let Mt=$.added[st],ut=w.indexOf(Mt);if(ut===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=w.length){w.push(Mt),ut=Ht;break}else if(w[Ht]===null){w[Ht]=Mt,ut=Ht;break}if(ut===-1)break}let zt=M[ut];zt&&zt.connect(Mt)}}let D=new b,J=new b;function W($,st,Mt){D.setFromMatrixPosition(st.matrixWorld),J.setFromMatrixPosition(Mt.matrixWorld);let ut=D.distanceTo(J),zt=st.projectionMatrix.elements,Ht=Mt.projectionMatrix.elements,Jt=zt[14]/(zt[10]-1),Be=zt[14]/(zt[10]+1),oe=(zt[9]+1)/zt[5],Oe=(zt[9]-1)/zt[5],H=(zt[8]-1)/zt[0],Ln=(Ht[8]+1)/Ht[0],ne=Jt*H,ie=Jt*Ln,Ft=ut/(-H+Ln),Ae=Ft*-H;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(Ft),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),zt[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Nt=Jt+Ft,P=Be+Ft,T=ne-Ae,q=ie+(ut-Ae),Q=oe*Be/P*Nt,et=Oe*Be/P*Nt;$.projectionMatrix.makePerspective(T,q,Q,et,Nt,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function K($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let st=$.near,Mt=$.far;y.texture!==null&&(y.depthNear>0&&(st=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),E.near=L.near=C.near=st,E.far=L.far=C.far=Mt,(N!==E.near||G!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,G=E.far),C.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,E.layers.mask=C.layers.mask|L.layers.mask;let ut=$.parent,zt=E.cameras;K(E,ut);for(let Ht=0;Ht<zt.length;Ht++)K(zt[Ht],ut);zt.length===2?W(E,C,L):E.projectionMatrix.copy(C.projectionMatrix),ct($,E,ut)};function ct($,st,Mt){Mt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Oh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let pt=null;function at($,st){if(h=st.getViewerPose(c||r),g=st,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let ut=!1;Mt.length!==E.cameras.length&&(E.cameras.length=0,ut=!0);for(let Ht=0;Ht<Mt.length;Ht++){let Jt=Mt[Ht],Be=null;if(f!==null)Be=f.getViewport(Jt);else{let Oe=d.getViewSubImage(u,Jt);Be=Oe.viewport,Ht===0&&(t.setRenderTargetTextures(v,Oe.colorTexture,u.ignoreDepthValues?void 0:Oe.depthStencilTexture),t.setRenderTarget(v))}let oe=S[Ht];oe===void 0&&(oe=new on,oe.layers.enable(Ht),oe.viewport=new _e,S[Ht]=oe),oe.matrix.fromArray(Jt.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(Jt.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Be.x,Be.y,Be.width,Be.height),Ht===0&&(E.matrix.copy(oe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ut===!0&&E.cameras.push(oe)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){let Ht=d.getDepthInformation(Mt[0]);Ht&&Ht.isValid&&Ht.texture&&y.init(t,Ht,s.renderState)}}for(let Mt=0;Mt<M.length;Mt++){let ut=w[Mt],zt=M[Mt];ut!==null&&zt!==void 0&&zt.update(ut,st,c||r)}pt&&pt($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let ee=new Lp;ee.setAnimationLoop(at),this.setAnimationLoop=function($){pt=$},this.dispose=function(){}}},Ls=new ke,sb=new Ne;function ob(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Np(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),y(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),M=v.envMap,w=v.envMapRotation;M&&(m.envMap.value=M,Ls.copy(w),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),m.envMapRotation.value.setFromMatrix4(sb.makeRotationFromEuler(Ls)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rb(i,t,e,n){let s={},o={},r=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=s[v.id];w===void 0&&(g(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",m));let I=M.program;n.updateUBOMapping(v,I);let A=t.render.frame;o[v.id]!==A&&(u(v),o[v.id]=A)}function h(v){let M=d();v.__bindingPointIndex=M;let w=i.createBuffer(),I=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function d(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let M=s[v.id],w=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let A=0,C=w.length;A<C;A++){let L=Array.isArray(w[A])?w[A]:[w[A]];for(let S=0,E=L.length;S<E;S++){let N=L[S];if(f(N,A,S,I)===!0){let G=N.__offset,F=Array.isArray(N.value)?N.value:[N.value],z=0;for(let V=0;V<F.length;V++){let D=F[V],J=y(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,G+z,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,w,I){let A=v.value,C=M+"_"+w;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{let L=I[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return I[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(v){let M=v.uniforms,w=0,I=16;for(let C=0,L=M.length;C<L;C++){let S=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,N=S.length;E<N;E++){let G=S[E],F=Array.isArray(G.value)?G.value:[G.value];for(let z=0,V=F.length;z<V;z++){let D=F[z],J=y(D),W=w%I,K=W%J.boundary,ct=W+K;w+=K,ct!==0&&I-ct<J.storage&&(w+=I-ct),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=J.storage}}}let A=w%I;return A>0&&(w+=I-A),v.__size=w,v.__cache={},this}function y(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){let M=v.target;M.removeEventListener("dispose",m);let w=r.indexOf(M.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);r=[],s={},o={}}return{bind:l,update:c,dispose:p}}var il=class{constructor(t={}){let{canvas:e=hg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this.toneMapping=ls,this.toneMappingExposure=1;let w=this,I=!1,A=0,C=0,L=null,S=-1,E=null,N=new _e,G=new _e,F=null,z=new Rt(0),V=0,D=e.width,J=e.height,W=1,K=null,ct=null,pt=new _e(0,0,D,J),at=new _e(0,0,D,J),ee=!1,$=new Ir,st=!1,Mt=!1,ut=new Ne,zt=new Ne,Ht=new b,Jt=new _e,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function Oe(){return L===null?W:1}let H=n;function Ln(R,O){return e.getContext(R,O)}try{let R={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mu}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),H===null){let O="webgl2";if(H=Ln(O,R),H===null)throw Ln(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ne,ie,Ft,Ae,Nt,P,T,q,Q,et,j,Ct,ft,vt,re,ot,_t,Dt,Ut,bt,se,Yt,we,U;function dt(){ne=new wv(H),ne.init(),Yt=new tb(H,ne),ie=new gv(H,ne,t,Yt),Ft=new J_(H,ne),ie.reverseDepthBuffer&&u&&Ft.buffers.depth.setReversed(!0),Ae=new Sv(H),Nt=new U_,P=new Q_(H,ne,Ft,Nt,ie,Yt,Ae),T=new xv(w),q=new bv(w),Q=new Ng(H),we=new pv(H,Q),et=new Mv(H,Q,Ae,we),j=new Av(H,et,Q,Ae),Ut=new Tv(H,ie,P),ot=new yv(Nt),Ct=new z_(w,T,q,ne,ie,we,ot),ft=new ob(w,Nt),vt=new k_,re=new X_(ne),Dt=new fv(w,T,q,Ft,j,f,l),_t=new $_(w,j,ie),U=new rb(H,Ae,ie,Ft),bt=new mv(H,ne,Ae),se=new Ev(H,ne,Ae),Ae.programs=Ct.programs,w.capabilities=ie,w.extensions=ne,w.properties=Nt,w.renderLists=vt,w.shadowMap=_t,w.state=Ft,w.info=Ae}dt();let Z=new eu(w,H);this.xr=Z,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=ne.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ne.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(D,J,!1))},this.getSize=function(R){return R.set(D,J)},this.setSize=function(R,O,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=R,J=O,e.width=Math.floor(R*W),e.height=Math.floor(O*W),X===!0&&(e.style.width=R+"px",e.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(D*W,J*W).floor()},this.setDrawingBufferSize=function(R,O,X){D=R,J=O,W=X,e.width=Math.floor(R*X),e.height=Math.floor(O*X),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,O,X,Y){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,O,X,Y),Ft.viewport(N.copy(pt).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(at)},this.setScissor=function(R,O,X,Y){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,O,X,Y),Ft.scissor(G.copy(at).multiplyScalar(W).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(R){Ft.setScissorTest(ee=R)},this.setOpaqueSort=function(R){K=R},this.setTransparentSort=function(R){ct=R},this.getClearColor=function(R){return R.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(R=!0,O=!0,X=!0){let Y=0;if(R){let k=!1;if(L!==null){let rt=L.texture.format;k=rt===Iu||rt===Cu||rt===Ru}if(k){let rt=L.texture.type,gt=rt===Di||rt===ks||rt===Cr||rt===Oo||rt===Tu||rt===Au,St=Dt.getClearColor(),Tt=Dt.getClearAlpha(),kt=St.r,qt=St.g,At=St.b;gt?(g[0]=kt,g[1]=qt,g[2]=At,g[3]=Tt,H.clearBufferuiv(H.COLOR,0,g)):(y[0]=kt,y[1]=qt,y[2]=At,y[3]=Tt,H.clearBufferiv(H.COLOR,0,y))}else Y|=H.COLOR_BUFFER_BIT}O&&(Y|=H.DEPTH_BUFFER_BIT),X&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),vt.dispose(),re.dispose(),Nt.dispose(),T.dispose(),q.dispose(),j.dispose(),we.dispose(),U.dispose(),Ct.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",tf),Z.removeEventListener("sessionend",ef),As.stop()};function tt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let R=Ae.autoReset,O=_t.enabled,X=_t.autoUpdate,Y=_t.needsUpdate,k=_t.type;dt(),Ae.autoReset=R,_t.enabled=O,_t.autoUpdate=X,_t.needsUpdate=Y,_t.type=k}function mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Wt(R){let O=R.target;O.removeEventListener("dispose",Wt),ze(O)}function ze(R){en(R),Nt.remove(R)}function en(R){let O=Nt.get(R).programs;O!==void 0&&(O.forEach(function(X){Ct.releaseProgram(X)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,X,Y,k,rt){O===null&&(O=Be);let gt=k.isMesh&&k.matrixWorld.determinant()<0,St=x0(R,O,X,Y,k);Ft.setMaterial(Y,gt);let Tt=X.index,kt=1;if(Y.wireframe===!0){if(Tt=et.getWireframeAttribute(X),Tt===void 0)return;kt=2}let qt=X.drawRange,At=X.attributes.position,ce=qt.start*kt,Me=(qt.start+qt.count)*kt;rt!==null&&(ce=Math.max(ce,rt.start*kt),Me=Math.min(Me,(rt.start+rt.count)*kt)),Tt!==null?(ce=Math.max(ce,0),Me=Math.min(Me,Tt.count)):At!=null&&(ce=Math.max(ce,0),Me=Math.min(Me,At.count));let Re=Me-ce;if(Re<0||Re===1/0)return;we.setup(k,Y,St,X,Tt);let gn,fe=bt;if(Tt!==null&&(gn=Q.get(Tt),fe=se,fe.setIndex(gn)),k.isMesh)Y.wireframe===!0?(Ft.setLineWidth(Y.wireframeLinewidth*Oe()),fe.setMode(H.LINES)):fe.setMode(H.TRIANGLES);else if(k.isLine){let It=Y.linewidth;It===void 0&&(It=1),Ft.setLineWidth(It*Oe()),k.isLineSegments?fe.setMode(H.LINES):k.isLineLoop?fe.setMode(H.LINE_LOOP):fe.setMode(H.LINE_STRIP)}else k.isPoints?fe.setMode(H.POINTS):k.isSprite&&fe.setMode(H.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)fe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let It=k._multiDrawStarts,Ei=k._multiDrawCounts,pe=k._multiDrawCount,Xn=Tt?Q.get(Tt).bytesPerElement:1,yo=Nt.get(Y).currentProgram.getUniforms();for(let wn=0;wn<pe;wn++)yo.setValue(H,"_gl_DrawID",wn),fe.render(It[wn]/Xn,Ei[wn])}else if(k.isInstancedMesh)fe.renderInstances(ce,Re,k.count);else if(X.isInstancedBufferGeometry){let It=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ei=Math.min(X.instanceCount,It);fe.renderInstances(ce,Re,Ei)}else fe.render(ce,Re)};function ye(R,O,X){R.transparent===!0&&R.side===Ni&&R.forceSinglePass===!1?(R.side=rn,R.needsUpdate=!0,da(R,O,X),R.side=cs,R.needsUpdate=!0,da(R,O,X),R.side=Ni):da(R,O,X)}this.compile=function(R,O,X=null){X===null&&(X=R),p=re.get(X),p.init(O),M.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),R!==X&&R.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let Y=new Set;return R.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let rt=k.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){let St=rt[gt];ye(St,X,k),Y.add(St)}else ye(rt,X,k),Y.add(rt)}),M.pop(),p=null,Y},this.compileAsync=function(R,O,X=null){let Y=this.compile(R,O,X);return new Promise(k=>{function rt(){if(Y.forEach(function(gt){Nt.get(gt).currentProgram.isReady()&&Y.delete(gt)}),Y.size===0){k(R);return}setTimeout(rt,10)}ne.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let qn=null;function Mi(R){qn&&qn(R)}function tf(){As.stop()}function ef(){As.start()}let As=new Lp;As.setAnimationLoop(Mi),typeof self<"u"&&As.setContext(self),this.setAnimationLoop=function(R){qn=R,Z.setAnimationLoop(R),R===null?As.stop():As.start()},Z.addEventListener("sessionstart",tf),Z.addEventListener("sessionend",ef),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,O,L),p=re.get(R,M.length),p.init(O),M.push(p),zt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(zt),Mt=this.localClippingEnabled,st=ot.init(this.clippingPlanes,Mt),m=vt.get(R,v.length),m.init(),v.push(m),Z.enabled===!0&&Z.isPresenting===!0){let rt=w.xr.getDepthSensingMesh();rt!==null&&xc(rt,O,-1/0,w.sortObjects)}xc(R,O,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(K,ct),oe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,oe&&Dt.addToRenderList(m,R),this.info.render.frame++,st===!0&&ot.beginShadows();let X=p.state.shadowsArray;_t.render(X,R,O),st===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){let rt=O.cameras;if(k.length>0)for(let gt=0,St=rt.length;gt<St;gt++){let Tt=rt[gt];sf(Y,k,R,Tt)}oe&&Dt.render(R);for(let gt=0,St=rt.length;gt<St;gt++){let Tt=rt[gt];nf(m,R,Tt,Tt.viewport)}}else k.length>0&&sf(Y,k,R,O),oe&&Dt.render(R),nf(m,R,O);L!==null&&(P.updateMultisampleRenderTarget(L),P.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(w,R,O),we.resetDefaultState(),S=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],st===!0&&ot.setGlobalState(w.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function xc(R,O,X,Y){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||$.intersectsSprite(R)){Y&&Jt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(zt);let gt=j.update(R),St=R.material;St.visible&&m.push(R,gt,St,X,Jt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||$.intersectsObject(R))){let gt=j.update(R),St=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Jt.copy(R.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Jt.copy(gt.boundingSphere.center)),Jt.applyMatrix4(R.matrixWorld).applyMatrix4(zt)),Array.isArray(St)){let Tt=gt.groups;for(let kt=0,qt=Tt.length;kt<qt;kt++){let At=Tt[kt],ce=St[At.materialIndex];ce&&ce.visible&&m.push(R,gt,ce,X,Jt.z,At)}}else St.visible&&m.push(R,gt,St,X,Jt.z,null)}}let rt=R.children;for(let gt=0,St=rt.length;gt<St;gt++)xc(rt[gt],O,X,Y)}function nf(R,O,X,Y){let k=R.opaque,rt=R.transmissive,gt=R.transparent;p.setupLightsView(X),st===!0&&ot.setGlobalState(w.clippingPlanes,X),Y&&Ft.viewport(N.copy(Y)),k.length>0&&ua(k,O,X),rt.length>0&&ua(rt,O,X),gt.length>0&&ua(gt,O,X),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function sf(R,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new zi(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Br:Di,minFilter:Os,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let rt=p.state.transmissionRenderTarget[Y.id],gt=Y.viewport||N;rt.setSize(gt.z,gt.w);let St=w.getRenderTarget();w.setRenderTarget(rt),w.getClearColor(z),V=w.getClearAlpha(),V<1&&w.setClearColor(16777215,.5),w.clear(),oe&&Dt.render(X);let Tt=w.toneMapping;w.toneMapping=ls;let kt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),st===!0&&ot.setGlobalState(w.clippingPlanes,Y),ua(R,X,Y),P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let At=0,ce=O.length;At<ce;At++){let Me=O[At],Re=Me.object,gn=Me.geometry,fe=Me.material,It=Me.group;if(fe.side===Ni&&Re.layers.test(Y.layers)){let Ei=fe.side;fe.side=rn,fe.needsUpdate=!0,of(Re,X,Y,gn,fe,It),fe.side=Ei,fe.needsUpdate=!0,qt=!0}}qt===!0&&(P.updateMultisampleRenderTarget(rt),P.updateRenderTargetMipmap(rt))}w.setRenderTarget(St),w.setClearColor(z,V),kt!==void 0&&(Y.viewport=kt),w.toneMapping=Tt}function ua(R,O,X){let Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,rt=R.length;k<rt;k++){let gt=R[k],St=gt.object,Tt=gt.geometry,kt=Y===null?gt.material:Y,qt=gt.group;St.layers.test(X.layers)&&of(St,O,X,Tt,kt,qt)}}function of(R,O,X,Y,k,rt){R.onBeforeRender(w,O,X,Y,k,rt),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(w,O,X,Y,R,rt),k.transparent===!0&&k.side===Ni&&k.forceSinglePass===!1?(k.side=rn,k.needsUpdate=!0,w.renderBufferDirect(X,O,Y,k,R,rt),k.side=cs,k.needsUpdate=!0,w.renderBufferDirect(X,O,Y,k,R,rt),k.side=Ni):w.renderBufferDirect(X,O,Y,k,R,rt),R.onAfterRender(w,O,X,Y,k,rt)}function da(R,O,X){O.isScene!==!0&&(O=Be);let Y=Nt.get(R),k=p.state.lights,rt=p.state.shadowsArray,gt=k.state.version,St=Ct.getParameters(R,k.state,rt,O,X),Tt=Ct.getProgramCacheKey(St),kt=Y.programs;Y.environment=R.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(R.isMeshStandardMaterial?q:T).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,kt===void 0&&(R.addEventListener("dispose",Wt),kt=new Map,Y.programs=kt);let qt=kt.get(Tt);if(qt!==void 0){if(Y.currentProgram===qt&&Y.lightsStateVersion===gt)return af(R,St),qt}else St.uniforms=Ct.getUniforms(R),R.onBeforeCompile(St,w),qt=Ct.acquireProgram(St,Tt),kt.set(Tt,qt),Y.uniforms=St.uniforms;let At=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(At.clippingPlanes=ot.uniform),af(R,St),Y.needsLights=_0(R),Y.lightsStateVersion=gt,Y.needsLights&&(At.ambientLightColor.value=k.state.ambient,At.lightProbe.value=k.state.probe,At.directionalLights.value=k.state.directional,At.directionalLightShadows.value=k.state.directionalShadow,At.spotLights.value=k.state.spot,At.spotLightShadows.value=k.state.spotShadow,At.rectAreaLights.value=k.state.rectArea,At.ltc_1.value=k.state.rectAreaLTC1,At.ltc_2.value=k.state.rectAreaLTC2,At.pointLights.value=k.state.point,At.pointLightShadows.value=k.state.pointShadow,At.hemisphereLights.value=k.state.hemi,At.directionalShadowMap.value=k.state.directionalShadowMap,At.directionalShadowMatrix.value=k.state.directionalShadowMatrix,At.spotShadowMap.value=k.state.spotShadowMap,At.spotLightMatrix.value=k.state.spotLightMatrix,At.spotLightMap.value=k.state.spotLightMap,At.pointShadowMap.value=k.state.pointShadowMap,At.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=qt,Y.uniformsList=null,qt}function rf(R){if(R.uniformsList===null){let O=R.currentProgram.getUniforms();R.uniformsList=Bo.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function af(R,O){let X=Nt.get(R);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function x0(R,O,X,Y,k){O.isScene!==!0&&(O=Be),P.resetTextureUnits();let rt=O.fog,gt=Y.isMeshStandardMaterial?O.environment:null,St=L===null?w.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qo,Tt=(Y.isMeshStandardMaterial?q:T).get(Y.envMap||gt),kt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),At=!!X.morphAttributes.position,ce=!!X.morphAttributes.normal,Me=!!X.morphAttributes.color,Re=ls;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Re=w.toneMapping);let gn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=gn!==void 0?gn.length:0,It=Nt.get(Y),Ei=p.state.lights;if(st===!0&&(Mt===!0||R!==E)){let Fn=R===E&&Y.id===S;ot.setState(Y,R,Fn)}let pe=!1;Y.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ei.state.version||It.outputColorSpace!==St||k.isBatchedMesh&&It.batching===!1||!k.isBatchedMesh&&It.batching===!0||k.isBatchedMesh&&It.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&It.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&It.instancing===!1||!k.isInstancedMesh&&It.instancing===!0||k.isSkinnedMesh&&It.skinning===!1||!k.isSkinnedMesh&&It.skinning===!0||k.isInstancedMesh&&It.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&It.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&It.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&It.instancingMorph===!1&&k.morphTexture!==null||It.envMap!==Tt||Y.fog===!0&&It.fog!==rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ot.numPlanes||It.numIntersection!==ot.numIntersection)||It.vertexAlphas!==kt||It.vertexTangents!==qt||It.morphTargets!==At||It.morphNormals!==ce||It.morphColors!==Me||It.toneMapping!==Re||It.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,It.__version=Y.version);let Xn=It.currentProgram;pe===!0&&(Xn=da(Y,O,k));let yo=!1,wn=!1,pr=!1,Ce=Xn.getUniforms(),li=It.uniforms;if(Ft.useProgram(Xn.program)&&(yo=!0,wn=!0,pr=!0),Y.id!==S&&(S=Y.id,wn=!0),yo||E!==R){Ft.buffers.depth.getReversed()?(ut.copy(R.projectionMatrix),dg(ut),fg(ut),Ce.setValue(H,"projectionMatrix",ut)):Ce.setValue(H,"projectionMatrix",R.projectionMatrix),Ce.setValue(H,"viewMatrix",R.matrixWorldInverse);let Ji=Ce.map.cameraPosition;Ji!==void 0&&Ji.setValue(H,Ht.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&Ce.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ce.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,wn=!0,pr=!0)}if(k.isSkinnedMesh){Ce.setOptional(H,k,"bindMatrix"),Ce.setOptional(H,k,"bindMatrixInverse");let Fn=k.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Ce.setValue(H,"boneTexture",Fn.boneTexture,P))}k.isBatchedMesh&&(Ce.setOptional(H,k,"batchingTexture"),Ce.setValue(H,"batchingTexture",k._matricesTexture,P),Ce.setOptional(H,k,"batchingIdTexture"),Ce.setValue(H,"batchingIdTexture",k._indirectTexture,P),Ce.setOptional(H,k,"batchingColorTexture"),k._colorsTexture!==null&&Ce.setValue(H,"batchingColorTexture",k._colorsTexture,P));let mr=X.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0)&&Ut.update(k,X,Xn),(wn||It.receiveShadow!==k.receiveShadow)&&(It.receiveShadow=k.receiveShadow,Ce.setValue(H,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(li.envMap.value=Tt,li.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(li.envMapIntensity.value=O.environmentIntensity),wn&&(Ce.setValue(H,"toneMappingExposure",w.toneMappingExposure),It.needsLights&&v0(li,pr),rt&&Y.fog===!0&&ft.refreshFogUniforms(li,rt),ft.refreshMaterialUniforms(li,Y,W,J,p.state.transmissionRenderTarget[R.id]),Bo.upload(H,rf(It),li,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Bo.upload(H,rf(It),li,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ce.setValue(H,"center",k.center),Ce.setValue(H,"modelViewMatrix",k.modelViewMatrix),Ce.setValue(H,"normalMatrix",k.normalMatrix),Ce.setValue(H,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Fn=Y.uniformsGroups;for(let Ji=0,Ki=Fn.length;Ji<Ki;Ji++){let lf=Fn[Ji];U.update(lf,Xn),U.bind(lf,Xn)}}return Xn}function v0(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function _0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,O,X){Nt.get(R.texture).__webglTexture=O,Nt.get(R.depthTexture).__webglTexture=X;let Y=Nt.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){let X=Nt.get(R);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,X=0){L=R,A=O,C=X;let Y=!0,k=null,rt=!1,gt=!1;if(R){let Tt=Nt.get(R);if(Tt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1;else if(Tt.__webglFramebuffer===void 0)P.setupRenderTarget(R);else if(Tt.__hasExternalTextures)P.rebindTextures(R,Nt.get(R.texture).__webglTexture,Nt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let At=R.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&Nt.has(At)&&(R.width!==At.image.width||R.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(R)}}let kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(gt=!0);let qt=Nt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[O])?k=qt[O][X]:k=qt[O],rt=!0):R.samples>0&&P.useMultisampledRTT(R)===!1?k=Nt.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[X]:k=qt,N.copy(R.viewport),G.copy(R.scissor),F=R.scissorTest}else N.copy(pt).multiplyScalar(W).floor(),G.copy(at).multiplyScalar(W).floor(),F=ee;if(Ft.bindFramebuffer(H.FRAMEBUFFER,k)&&Y&&Ft.drawBuffers(R,k),Ft.viewport(N),Ft.scissor(G),Ft.setScissorTest(F),rt){let Tt=Nt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,Tt.__webglTexture,X)}else if(gt){let Tt=Nt.get(R.texture),kt=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Tt.__webglTexture,X||0,kt)}S=-1},this.readRenderTargetPixels=function(R,O,X,Y,k,rt,gt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){Ft.bindFramebuffer(H.FRAMEBUFFER,St);try{let Tt=R.texture,kt=Tt.format,qt=Tt.type;if(!ie.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-Y&&X>=0&&X<=R.height-k&&H.readPixels(O,X,Y,k,Yt.convert(kt),Yt.convert(qt),rt)}finally{let Tt=L!==null?Nt.get(L).__webglFramebuffer:null;Ft.bindFramebuffer(H.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(R,O,X,Y,k,rt,gt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Nt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&gt!==void 0&&(St=St[gt]),St){let Tt=R.texture,kt=Tt.format,qt=Tt.type;if(!ie.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=R.width-Y&&X>=0&&X<=R.height-k){Ft.bindFramebuffer(H.FRAMEBUFFER,St);let At=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,At),H.bufferData(H.PIXEL_PACK_BUFFER,rt.byteLength,H.STREAM_READ),H.readPixels(O,X,Y,k,Yt.convert(kt),Yt.convert(qt),0);let ce=L!==null?Nt.get(L).__webglFramebuffer:null;Ft.bindFramebuffer(H.FRAMEBUFFER,ce);let Me=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await ug(H,Me,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,At),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,rt),H.deleteBuffer(At),H.deleteSync(Me),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,O=null,X=0){R.isTexture!==!0&&(wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,R=arguments[1]);let Y=Math.pow(2,-X),k=Math.floor(R.image.width*Y),rt=Math.floor(R.image.height*Y),gt=O!==null?O.x:0,St=O!==null?O.y:0;P.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,gt,St,k,rt),Ft.unbindTexture()},this.copyTextureToTexture=function(R,O,X=null,Y=null,k=0){R.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],O=arguments[2],k=arguments[3]||0,X=null);let rt,gt,St,Tt,kt,qt,At,ce,Me,Re=R.isCompressedTexture?R.mipmaps[k]:R.image;X!==null?(rt=X.max.x-X.min.x,gt=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,kt=X.min.y,qt=X.isBox3?X.min.z:0):(rt=Re.width,gt=Re.height,St=Re.depth||1,Tt=0,kt=0,qt=0),Y!==null?(At=Y.x,ce=Y.y,Me=Y.z):(At=0,ce=0,Me=0);let gn=Yt.convert(O.format),fe=Yt.convert(O.type),It;O.isData3DTexture?(P.setTexture3D(O,0),It=H.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(P.setTexture2DArray(O,0),It=H.TEXTURE_2D_ARRAY):(P.setTexture2D(O,0),It=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,O.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,O.unpackAlignment);let Ei=H.getParameter(H.UNPACK_ROW_LENGTH),pe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Xn=H.getParameter(H.UNPACK_SKIP_PIXELS),yo=H.getParameter(H.UNPACK_SKIP_ROWS),wn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Re.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Re.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Tt),H.pixelStorei(H.UNPACK_SKIP_ROWS,kt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qt);let pr=R.isDataArrayTexture||R.isData3DTexture,Ce=O.isDataArrayTexture||O.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let li=Nt.get(R),mr=Nt.get(O),Fn=Nt.get(li.__renderTarget),Ji=Nt.get(mr.__renderTarget);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,Fn.__webglFramebuffer),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let Ki=0;Ki<St;Ki++)pr&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(R).__webglTexture,k,qt+Ki),R.isDepthTexture?(Ce&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(O).__webglTexture,k,Me+Ki),H.blitFramebuffer(Tt,kt,rt,gt,At,ce,rt,gt,H.DEPTH_BUFFER_BIT,H.NEAREST)):Ce?H.copyTexSubImage3D(It,k,At,ce,Me+Ki,Tt,kt,rt,gt):H.copyTexSubImage2D(It,k,At,ce,Me+Ki,Tt,kt,rt,gt);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ce?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(It,k,At,ce,Me,rt,gt,St,gn,fe,Re.data):O.isCompressedArrayTexture?H.compressedTexSubImage3D(It,k,At,ce,Me,rt,gt,St,gn,Re.data):H.texSubImage3D(It,k,At,ce,Me,rt,gt,St,gn,fe,Re):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,k,At,ce,rt,gt,gn,fe,Re.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,k,At,ce,Re.width,Re.height,gn,Re.data):H.texSubImage2D(H.TEXTURE_2D,k,At,ce,rt,gt,gn,fe,Re);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ei),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Xn),H.pixelStorei(H.UNPACK_SKIP_ROWS,yo),H.pixelStorei(H.UNPACK_SKIP_IMAGES,wn),k===0&&O.generateMipmaps&&H.generateMipmap(It),Ft.unbindTexture()},this.copyTextureToTexture3D=function(R,O,X=null,Y=null,k=0){return R.isTexture!==!0&&(wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],O=arguments[3],k=arguments[4]||0),wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,O,X,Y,k)},this.initRenderTarget=function(R){Nt.get(R).__webglFramebuffer===void 0&&P.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?P.setTextureCube(R,0):R.isData3DTexture?P.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?P.setTexture2DArray(R,0):P.setTexture2D(R,0),Ft.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,Ft.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var sl=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ol=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ke,this.environmentIntensity=1,this.environmentRotation=new ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Pr=class extends us{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lp=new Ne,nu=new Za,Fa=new Vo,Ba=new b,rl=class extends an{constructor(t=new dn,e=new Pr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=o,t.ray.intersectsSphere(Fa)===!1)return;lp.copy(s).invert(),nu.copy(t.ray).applyMatrix4(lp);let a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);Ba.fromBufferAttribute(d,m),cp(Ba,m,l,s,t,e,this)}}else{let u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,y=f;g<y;g++)Ba.fromBufferAttribute(d,g),cp(Ba,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){let a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}};function cp(i,t,e,n,s,o,r){let a=nu.distanceSqToPoint(i);if(a<e){let l=new b;nu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}var al=class extends Tn{constructor(t,e,n,s,o,r,a,l,c){super(t,e,n,s,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,o=n.length,r;e?r=e:r=t*n[o-1];let a=0,l=o-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-r,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===r)return s/(o-1);let h=n[s],u=n[s+1]-h,f=(r-h)/u;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);let r=this.getPoint(s),a=this.getPoint(o),l=e||(r.isVector2?new wt:new b);return l.copy(a).sub(r).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new b,s=[],o=[],r=[],a=new b,l=new Ne;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new b)}o[0]=new b,r[0]=new b;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(l.makeRotationAxis(a,g))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ke(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let g=1;g<=t;g++)o[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Nr=class extends zn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new wt){let n=e,s=Math.PI*2,o=this.aEndAngle-this.aStartAngle,r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);let a=this.aStartAngle+t*o,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},iu=class extends Nr{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}};function Nu(){let i=0,t=0,e=0,n=0;function s(o,r,a,l){i=o,t=a,e=-3*o+3*r-2*a-l,n=2*o-2*r+a+l}return{initCatmullRom:function(o,r,a,l,c){s(r,a,c*(a-o),c*(l-r))},initNonuniformCatmullRom:function(o,r,a,l,c,h,d){let u=(r-o)/c-(a-o)/(c+h)+(a-r)/h,f=(a-r)/h-(l-r)/(h+d)+(l-a)/d;u*=h,f*=h,s(r,a,u,f)},calc:function(o){let r=o*o,a=r*o;return i+t*o+e*r+n*a}}}var Da=new b,$c=new Nu,jc=new Nu,Jc=new Nu,su=class extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new b){let n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t,a=Math.floor(r),l=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:l===0&&a===o-1&&(a=o-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%o]:(Da.subVectors(s[0],s[1]).add(s[0]),c=Da);let d=s[a%o],u=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Da.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Da),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),$c.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),jc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),Jc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&($c.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),jc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Jc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set($c.calc(l),jc.calc(l),Jc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new b().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hp(i,t,e,n,s){let o=(n-t)*.5,r=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+o+r)*l+(-3*e+3*n-2*o-r)*a+o*i+e}function ab(i,t){let e=1-i;return e*e*t}function lb(i,t){return 2*(1-i)*i*t}function cb(i,t){return i*i*t}function Sr(i,t,e,n){return ab(i,t)+lb(i,e)+cb(i,n)}function hb(i,t){let e=1-i;return e*e*e*t}function ub(i,t){let e=1-i;return 3*e*e*i*t}function db(i,t){return 3*(1-i)*i*i*t}function fb(i,t){return i*i*i*t}function Tr(i,t,e,n,s){return hb(i,t)+ub(i,e)+db(i,n)+fb(i,s)}var ll=class extends zn{constructor(t=new wt,e=new wt,n=new wt,s=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new wt){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Tr(t,s.x,o.x,r.x,a.x),Tr(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ou=class extends zn{constructor(t=new b,e=new b,n=new b,s=new b){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new b){let n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Tr(t,s.x,o.x,r.x,a.x),Tr(t,s.y,o.y,r.y,a.y),Tr(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cl=class extends zn{constructor(t=new wt,e=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new wt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new wt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ru=class extends zn{constructor(t=new b,e=new b){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new b){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new b){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hl=class extends zn{constructor(t=new wt,e=new wt,n=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new wt){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Sr(t,s.x,o.x,r.x),Sr(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},au=class extends zn{constructor(t=new b,e=new b,n=new b){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new b){let n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Sr(t,s.x,o.x,r.x),Sr(t,s.y,o.y,r.y),Sr(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ul=class extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new wt){let n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,l=s[r===0?r:r-1],c=s[r],h=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return n.set(hp(a,l.x,c.x,h.x,d.x),hp(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new wt().fromArray(s))}return this}},up=Object.freeze({__proto__:null,ArcCurve:iu,CatmullRomCurve3:su,CubicBezierCurve:ll,CubicBezierCurve3:ou,EllipseCurve:Nr,LineCurve:cl,LineCurve3:ru,QuadraticBezierCurve:hl,QuadraticBezierCurve3:au,SplineCurve:ul}),lu=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new up[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),o=0;for(;o<s.length;){if(s[o]>=n){let r=s[o]-n,a=this.curves[o],l=a.getLength(),c=l===0?0:1-r/l;return a.getPointAt(c,e)}o++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,o=this.curves;s<o.length;s++){let r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new up[s.type]().fromJSON(s))}return this}},cu=class extends lu{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new cl(this.currentPoint.clone(),new wt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let o=new hl(this.currentPoint.clone(),new wt(t,e),new wt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){let a=new ll(this.currentPoint.clone(),new wt(t,e),new wt(n,s),new wt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ul(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,o,r,a,l),this}absellipse(t,e,n,s,o,r,a,l){let c=new Nr(t,e,n,s,o,r,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},hu=class i extends dn{constructor(t=[new wt(0,-.5),new wt(.5,0),new wt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ke(s,0,Math.PI*2);let o=[],r=[],a=[],l=[],c=[],h=1/e,d=new b,u=new wt,f=new b,g=new b,y=new b,m=0,p=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[v+1].x-t[v].x,p=t[v+1].y-t[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let v=0;v<=e;v++){let M=n+v*h*s,w=Math.sin(M),I=Math.cos(M);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*w,d.y=t[A].y,d.z=t[A].x*I,r.push(d.x,d.y,d.z),u.x=v/e,u.y=A/(t.length-1),a.push(u.x,u.y);let C=l[3*A+0]*w,L=l[3*A+1],S=l[3*A+0]*I;c.push(C,L,S)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){let w=M+v*t.length,I=w,A=w+t.length,C=w+t.length+1,L=w+1;o.push(I,A,L),o.push(C,L,A)}this.setIndex(o),this.setAttribute("position",new Le(r,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Lr=class i extends hu{constructor(t=1,e=1,n=4,s=8){let o=new cu;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var je=class i extends dn{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),o=Math.floor(o);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;v(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function v(){let w=new b,I=new b,A=0,C=(e-t)/n;for(let L=0;L<=o;L++){let S=[],E=L/o,N=E*(e-t)+t;for(let G=0;G<=s;G++){let F=G/s,z=F*l+a,V=Math.sin(z),D=Math.cos(z);I.x=N*V,I.y=-E*n+m,I.z=N*D,d.push(I.x,I.y,I.z),w.set(V,C,D).normalize(),u.push(w.x,w.y,w.z),f.push(F,1-E),S.push(g++)}y.push(S)}for(let L=0;L<s;L++)for(let S=0;S<o;S++){let E=y[S][L],N=y[S+1][L],G=y[S+1][L+1],F=y[S][L+1];(t>0||S!==0)&&(h.push(E,N,F),A+=3),(e>0||S!==o-1)&&(h.push(N,G,F),A+=3)}c.addGroup(p,A,0),p+=A}function M(w){let I=g,A=new wt,C=new b,L=0,S=w===!0?t:e,E=w===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*E,0),u.push(0,E,0),f.push(.5,.5),g++;let N=g;for(let G=0;G<=s;G++){let z=G/s*l+a,V=Math.cos(z),D=Math.sin(z);C.x=S*D,C.y=m*E,C.z=S*V,d.push(C.x,C.y,C.z),u.push(0,E,0),A.x=V*.5+.5,A.y=D*.5*E+.5,f.push(A.x,A.y),g++}for(let G=0;G<s;G++){let F=I+G,z=N+G;w===!0?h.push(z,z+1,F):h.push(z+1,z,F),L+=3}c.addGroup(p,L,w===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ui=class i extends je{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},dl=class i extends dn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let o=[],r=[];a(s),c(n),h(),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(o.slice(),3)),this.setAttribute("uv",new Le(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new b,w=new b,I=new b;for(let A=0;A<e.length;A+=3)f(e[A+0],M),f(e[A+1],w),f(e[A+2],I),l(M,w,I,v)}function l(v,M,w,I){let A=I+1,C=[];for(let L=0;L<=A;L++){C[L]=[];let S=v.clone().lerp(w,L/A),E=M.clone().lerp(w,L/A),N=A-L;for(let G=0;G<=N;G++)G===0&&L===A?C[L][G]=S:C[L][G]=S.clone().lerp(E,G/N)}for(let L=0;L<A;L++)for(let S=0;S<2*(A-L)-1;S++){let E=Math.floor(S/2);S%2===0?(u(C[L][E+1]),u(C[L+1][E]),u(C[L][E])):(u(C[L][E+1]),u(C[L+1][E+1]),u(C[L+1][E]))}}function c(v){let M=new b;for(let w=0;w<o.length;w+=3)M.x=o[w+0],M.y=o[w+1],M.z=o[w+2],M.normalize().multiplyScalar(v),o[w+0]=M.x,o[w+1]=M.y,o[w+2]=M.z}function h(){let v=new b;for(let M=0;M<o.length;M+=3){v.x=o[M+0],v.y=o[M+1],v.z=o[M+2];let w=m(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;r.push(w,1-I)}g(),d()}function d(){for(let v=0;v<r.length;v+=6){let M=r[v+0],w=r[v+2],I=r[v+4],A=Math.max(M,w,I),C=Math.min(M,w,I);A>.9&&C<.1&&(M<.2&&(r[v+0]+=1),w<.2&&(r[v+2]+=1),I<.2&&(r[v+4]+=1))}}function u(v){o.push(v.x,v.y,v.z)}function f(v,M){let w=v*3;M.x=t[w+0],M.y=t[w+1],M.z=t[w+2]}function g(){let v=new b,M=new b,w=new b,I=new b,A=new wt,C=new wt,L=new wt;for(let S=0,E=0;S<o.length;S+=9,E+=6){v.set(o[S+0],o[S+1],o[S+2]),M.set(o[S+3],o[S+4],o[S+5]),w.set(o[S+6],o[S+7],o[S+8]),A.set(r[E+0],r[E+1]),C.set(r[E+2],r[E+3]),L.set(r[E+4],r[E+5]),I.copy(v).add(M).add(w).divideScalar(3);let N=m(I);y(A,E+0,v,N),y(C,E+2,M,N),y(L,E+4,w,N)}}function y(v,M,w,I){I<0&&v.x===1&&(r[M]=v.x-1),w.x===0&&w.z===0&&(r[M]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},fl=class i extends dl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var An=class i extends dl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Go=class i extends dn{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(r+a,Math.PI),c=0,h=[],d=new b,u=new b,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let v=[],M=p/n,w=0;p===0&&r===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let I=0;I<=e;I++){let A=I/e;d.x=-t*Math.cos(s+A*o)*Math.sin(r+M*a),d.y=t*Math.cos(r+M*a),d.z=t*Math.sin(s+A*o)*Math.sin(r+M*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(A+w,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let M=h[p][v+1],w=h[p][v],I=h[p+1][v],A=h[p+1][v+1];(p!==0||r>0)&&f.push(M,w,A),(p!==n-1||l<Math.PI)&&f.push(w,I,A)}this.setIndex(f),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ds=class i extends dn{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);let r=[],a=[],l=[],c=[],h=new b,d=new b,u=new b;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*o,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,v=(s+1)*f+g;r.push(y,m,v),r.push(m,p,v)}this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ue=class extends us{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rp,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function za(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wo=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],o=e[n-1];n:{t:{let r;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=s,s=e[++n],t<s)break t}r=e.length;break e}if(!(t>=o)){let a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=o,o=e[--n-1],t>=o)break t}r=n,n=0;break e}break n}for(;n<r;){let a=n+r>>>1;t<e[a]?r=a:n=a+1}if(s=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,s)}return this.interpolate_(n,o,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=t*s;for(let r=0;r!==s;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},uu=class extends Wo{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:df,endingEnd:df}}intervalChanged_(t,e,n){let s=this.parameterPositions,o=t-2,r=t+1,a=s[o],l=s[r];if(a===void 0)switch(this.getSettings_().endingStart){case ff:o=t,a=2*e-n;break;case pf:o=s.length-2,a=e+s[o]-s[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ff:r=t,l=2*n-e;break;case pf:r=1,l=n+s[1]-s[0];break;default:r=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,v=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,M=(-1-f)*m+(1.5+f)*y+.5*g,w=f*m-f*y;for(let I=0;I!==a;++I)o[I]=p*r[h+I]+v*r[c+I]+M*r[l+I]+w*r[d+I];return o}},du=class extends Wo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)o[u]=r[c+u]*d+r[l+u]*h;return o}},fu=class extends Wo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=za(e,this.TimeBufferType),this.values=za(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:za(t.times,Array),values:za(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new du(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new uu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ga:e=this.InterpolantFactoryMethodDiscrete;break;case Uh:e=this.InterpolantFactoryMethodLinear;break;case _c:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ga;case this.InterpolantFactoryMethodLinear:return Uh;case this.InterpolantFactoryMethodSmooth:return _c}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,o=0,r=s-1;for(;o!==s&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==s){o>=r&&(r=Math.max(r,1),o=r-1);let a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(s!==void 0&&pb(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_c,o=t.length-1,r=1;for(let a=1;a<o;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];let d=a*n,u=r*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Uh;var Gs=class extends Jn{constructor(t,e,n){super(t,e,n)}};Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Ga;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var pu=class extends Jn{};pu.prototype.ValueTypeName="color";var mu=class extends Jn{};mu.prototype.ValueTypeName="number";var gu=class extends Wo{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ee.slerpFlat(o,0,r,c-a,r,c,l);return o}},pl=class extends Jn{InterpolantFactoryMethodLinear(t){return new gu(this.times,this.values,this.getValueSize(),t)}};pl.prototype.ValueTypeName="quaternion";pl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends Jn{constructor(t,e,n){super(t,e,n)}};Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Ga;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var yu=class extends Jn{};yu.prototype.ValueTypeName="vector";var xu=class{constructor(t,e,n){let s=this,o=!1,r=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,o===!1&&s.onStart!==void 0&&s.onStart(h,r,a),o=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,a),r===a&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},mb=new xu,vu=class{constructor(t){this.manager=t!==void 0?t:mb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,o){n.load(t,s,e,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};vu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fr=class extends an{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ml=class extends Fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Kc=new Ne,dp=new b,fp=new b,gl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;dp.setFromMatrixPosition(t.matrixWorld),e.position.copy(dp),fp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fp),e.updateMatrixWorld(),Kc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var pp=new Ne,br=new b,Qc=new b,_u=class extends gl{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),br.setFromMatrixPosition(t.matrixWorld),n.position.copy(br),Qc.copy(n.position),Qc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Qc),n.updateMatrixWorld(),s.makeTranslation(-br.x,-br.y,-br.z),pp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pp)}},yl=class extends Fr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _u}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},bu=class extends gl{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xl=class extends Fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(an.DEFAULT_UP),this.updateMatrix(),this.target=new an,this.shadow=new bu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var vl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=mp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function mp(){return performance.now()}var Lu="\\[\\]\\.:\\/",gb=new RegExp("["+Lu+"]","g"),Fu="[^"+Lu+"]",yb="[^"+Lu.replace("\\.","")+"]",xb=/((?:WC+[\/:])*)/.source.replace("WC",Fu),vb=/(WCOD+)?/.source.replace("WCOD",yb),_b=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fu),bb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fu),wb=new RegExp("^"+xb+vb+_b+bb+"$"),Mb=["material","materials","bones","map"],wu=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gb,"")}static parseTrackName(t){let e=wb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=n.nodeName.substring(s+1);Mb.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(o){for(let r=0;r<o.length;r++){let a=o[r];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,o=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=wu;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);var ps=class i{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new _);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new _);let n=this.elements,s=t.x,o=t.y,r=t.z;return e.x=n[0]*s+n[1]*o+n[2]*r,e.y=n[3]*s+n[4]*o+n[5]*r,e.z=n[6]*s+n[7]*o+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new i);let n=this.elements,s=t.elements,o=e.elements,r=n[0],a=n[1],l=n[2],c=n[3],h=n[4],d=n[5],u=n[6],f=n[7],g=n[8],y=s[0],m=s[1],p=s[2],v=s[3],M=s[4],w=s[5],I=s[6],A=s[7],C=s[8];return o[0]=r*y+a*v+l*I,o[1]=r*m+a*M+l*A,o[2]=r*p+a*w+l*C,o[3]=c*y+h*v+d*I,o[4]=c*m+h*M+d*A,o[5]=c*p+h*w+d*C,o[6]=u*y+f*v+g*I,o[7]=u*m+f*M+g*A,o[8]=u*p+f*w+g*C,e}scale(t,e){e===void 0&&(e=new i);let n=this.elements,s=e.elements;for(let o=0;o!==3;o++)s[3*o+0]=t.x*n[3*o+0],s[3*o+1]=t.y*n[3*o+1],s[3*o+2]=t.z*n[3*o+2];return e}solve(t,e){e===void 0&&(e=new _);let n=3,s=4,o=[],r,a;for(r=0;r<n*s;r++)o.push(0);for(r=0;r<3;r++)for(a=0;a<3;a++)o[r+s*a]=this.elements[r+3*a];o[3+4*0]=t.x,o[3+4*1]=t.y,o[3+4*2]=t.z;let l=3,c=l,h,d=4,u;do{if(r=c-l,o[r+s*r]===0){for(a=r+1;a<c;a++)if(o[r+s*a]!==0){h=d;do u=d-h,o[u+s*r]+=o[u+s*a];while(--h);break}}if(o[r+s*r]!==0)for(a=r+1;a<c;a++){let f=o[r+s*a]/o[r+s*r];h=d;do u=d-h,o[u+s*a]=u<=r?0:o[u+s*a]-o[u+s*r]*f;while(--h)}}while(--l);if(e.z=o[2*s+3]/o[2*s+2],e.y=(o[1*s+3]-o[1*s+2]*e.z)/o[1*s+1],e.x=(o[0*s+3]-o[0*s+2]*e.z-o[0*s+1]*e.y)/o[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new i);let e=3,n=6,s=Eb,o,r;for(o=0;o<3;o++)for(r=0;r<3;r++)s[o+n*r]=this.elements[o+3*r];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3,l=a,c,h=n,d;do{if(o=l-a,s[o+n*o]===0){for(r=o+1;r<l;r++)if(s[o+n*r]!==0){c=h;do d=h-c,s[d+n*o]+=s[d+n*r];while(--c);break}}if(s[o+n*o]!==0)for(r=o+1;r<l;r++){let u=s[o+n*r]/s[o+n*o];c=h;do d=h-c,s[d+n*r]=d<=o?0:s[d+n*r]-s[d+n*o]*u;while(--c)}}while(--a);o=2;do{r=o-1;do{let u=s[o+n*r]/s[o+n*o];c=n;do d=n-c,s[d+n*r]=s[d+n*r]-s[d+n*o]*u;while(--c)}while(r--)}while(--o);o=2;do{let u=1/s[o+n*o];c=n;do d=n-c,s[d+n*o]=s[d+n*o]*u;while(--c)}while(o--);o=2;do{r=2;do{if(d=s[e+r+n*o],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(o,r,d)}while(r--)}while(o--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,s=t.z,o=t.w,r=e+e,a=n+n,l=s+s,c=e*r,h=e*a,d=e*l,u=n*a,f=n*l,g=s*l,y=o*r,m=o*a,p=o*l,v=this.elements;return v[3*0+0]=1-(u+g),v[3*0+1]=h-p,v[3*0+2]=d+m,v[3*1+0]=h+p,v[3*1+1]=1-(c+g),v[3*1+2]=f-y,v[3*2+0]=d-m,v[3*2+1]=f+y,v[3*2+2]=1-(c+u),this}transpose(t){t===void 0&&(t=new i);let e=this.elements,n=t.elements,s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}},Eb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],_=class i{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new i);let n=t.x,s=t.y,o=t.z,r=this.x,a=this.y,l=this.z;return e.x=a*o-l*s,e.y=l*n-r*o,e.z=r*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new i(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new i(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new ps([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){let o=1/s;this.x*=o,this.y*=o,this.z*=o}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,o=Math.sqrt(e*e+n*n+s*s);return o>0?(o=1/o,t.x=e*o,t.y=n*o,t.z=s*o):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return Math.sqrt((o-e)*(o-e)+(r-n)*(r-n)+(a-s)*(a-s))}distanceSquared(t){let e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z;return(o-e)*(o-e)+(r-n)*(r-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,o=this.z;return e.x=t*n,e.y=t*s,e.z=t*o,e}vmul(t,e){return e===void 0&&(e=new i),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new i),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let s=Sb,o=1/n;s.set(this.x*o,this.y*o,this.z*o);let r=Tb;Math.abs(s.x)<.9?(r.set(1,0,0),s.cross(r,t)):(r.set(0,1,0),s.cross(r,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let s=this.x,o=this.y,r=this.z;n.x=s+(t.x-s)*e,n.y=o+(t.y-o)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Up),Up.almostEquals(t,e)}clone(){return new i(this.x,this.y,this.z)}};_.ZERO=new _(0,0,0);_.UNIT_X=new _(1,0,0);_.UNIT_Y=new _(0,1,0);_.UNIT_Z=new _(0,0,1);var Sb=new _,Tb=new _,Up=new _,Rn=class i{constructor(t){t===void 0&&(t={}),this.lowerBound=new _,this.upperBound=new _,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){let o=this.lowerBound,r=this.upperBound,a=n;o.copy(t[0]),a&&a.vmult(o,o),r.copy(o);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Op),c=Op),c.x>r.x&&(r.x=c.x),c.x<o.x&&(o.x=c.x),c.y>r.y&&(r.y=c.y),c.y<o.y&&(o.y=c.y),c.z>r.z&&(r.z=c.z),c.z<o.z&&(o.z=c.z)}return e&&(e.vadd(o,o),e.vadd(r,r)),s&&(o.x-=s,o.y-=s,o.z-=s,r.x+=s,r.y+=s,r.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new i().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,o=t.upperBound,r=s.x<=n.x&&n.x<=o.x||e.x<=o.x&&o.x<=n.x,a=s.y<=n.y&&n.y<=o.y||e.y<=o.y&&o.y<=n.y,l=s.z<=n.z&&n.z<=o.z||e.z<=o.z&&o.z<=n.z;return r&&a&&l}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,s=t.lowerBound,o=t.upperBound;return e.x<=s.x&&n.x>=o.x&&e.y<=s.y&&n.y>=o.y&&e.z<=s.z&&n.z>=o.z}getCorners(t,e,n,s,o,r,a,l){let c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),s.set(c.x,h.y,h.z),o.set(h.x,c.y,h.z),r.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){let n=kp,s=n[0],o=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,o,r,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=kp,s=n[0],o=n[1],r=n[2],a=n[3],l=n[4],c=n[5],h=n[6],d=n[7];this.getCorners(s,o,r,a,l,c,h,d);for(let u=0;u!==8;u++){let f=n[u];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,s=1/e.x,o=1/e.y,r=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*o,h=(this.upperBound.y-n.y)*o,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}},Op=new _,kp=[new _,new _,new _,new _,new _,new _,new _,new _],Cl=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){let o=s;s=n,n=o}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:o}=e;if(o>s){let r=o;o=s,s=r}this.matrix[(s*(s+1)>>1)+o-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},Il=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,o=n.length;s<o;s++)n[s].call(this,t)}return this}},Qe=class i{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new _),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=Ab,s=Rb;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new i);let n=this.x,s=this.y,o=this.z,r=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+r*a+s*c-o*l,e.y=s*h+r*l+o*a-n*c,e.z=o*h+r*c+n*l-s*a,e.w=r*h-n*a-s*l-o*c,e}inverse(t){t===void 0&&(t=new i);let e=this.x,n=this.y,s=this.z,o=this.w;this.conjugate(t);let r=1/(e*e+n*n+s*s+o*o);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new i),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new _);let n=t.x,s=t.y,o=t.z,r=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*o-l*s,d=c*s+l*n-r*o,u=c*o+r*s-a*n,f=-r*n-a*s-l*o;return e.x=h*c+f*-r+d*-l-u*-a,e.y=d*c+f*-a+u*-r-h*-l,e.z=u*c+f*-l+h*-a-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,o,r=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":let h=r*a+l*c;if(h>.499&&(n=2*Math.atan2(r,c),s=Math.PI/2,o=0),h<-.499&&(n=-2*Math.atan2(r,c),s=-Math.PI/2,o=0),n===void 0){let d=r*r,u=a*a,f=l*l;n=Math.atan2(2*a*c-2*r*l,1-2*u-2*f),s=Math.asin(2*h),o=Math.atan2(2*r*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=o}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");let o=Math.cos(t/2),r=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return s==="XYZ"?(this.x=l*r*a+o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a-l*c*h):s==="YXZ"?(this.x=l*r*a+o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a+l*c*h):s==="ZXY"?(this.x=l*r*a-o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a-l*c*h):s==="ZYX"?(this.x=l*r*a-o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a+l*c*h):s==="YZX"?(this.x=l*r*a+o*c*h,this.y=o*c*a+l*r*h,this.z=o*r*h-l*c*a,this.w=o*r*a-l*c*h):s==="XZY"&&(this.x=l*r*a-o*c*h,this.y=o*c*a-l*r*h,this.z=o*r*h+l*c*a,this.w=o*r*a+l*c*h),this}clone(){return new i(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new i);let s=this.x,o=this.y,r=this.z,a=this.w,l=t.x,c=t.y,h=t.z,d=t.w,u,f,g,y,m;return f=s*l+o*c+r*h+a*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),y=Math.sin((1-e)*u)/g,m=Math.sin(e*u)/g):(y=1-e,m=e),n.x=y*s+m*l,n.y=y*o+m*c,n.z=y*r+m*h,n.w=y*a+m*d,n}integrate(t,e,n,s){s===void 0&&(s=new i);let o=t.x*n.x,r=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,d=this.w,u=e*.5;return s.x+=u*(o*d+r*h-a*c),s.y+=u*(r*d+a*l-o*h),s.z+=u*(a*d+o*c-r*l),s.w+=u*(-o*l-r*c-a*h),s}},Ab=new _,Rb=new _,Cb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},xt=class i{constructor(t){t===void 0&&(t={}),this.id=i.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};xt.idCounter=0;xt.types=Cb;var me=class i{constructor(t){t===void 0&&(t={}),this.position=new _,this.quaternion=new Qe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return i.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return i.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new _),n.vsub(t,s),e.conjugate(Vp),Vp.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new _),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new _),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new _),e.w*=-1,e.vmult(n,s),e.w*=-1,s}},Vp=new Qe,Jo=class i extends xt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:s=[],axes:o,boundingSphereRadius:r}=t;super({type:xt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=o?o.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let s=new _;for(let o=0;o!==t.length;o++){let r=t[o],a=r.length;for(let l=0;l!==a;l++){let c=(l+1)%a;e[r[l]].vsub(e[r[c]],s),s.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){h=!0;break}h||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);let e=this.faceNormals[t]||new _;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],s=this.vertices[n[0]],o=this.vertices[n[1]],r=this.vertices[n[2]];i.computeNormal(s,o,r,e)}static computeNormal(t,e,n,s){let o=new _,r=new _;e.vsub(t,r),n.vsub(e,o),o.cross(r,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,o,r,a,l,c){let h=new _,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),o.vmult(h,h);let y=h.dot(r);y>u&&(u=y,d=g)}let f=[];for(let g=0;g<n.faces[d].length;g++){let y=n.vertices[n.faces[d][g]],m=new _;m.copy(y),o.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(r,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,s,o,r,a,l){let c=new _,h=new _,d=new _,u=new _,f=new _,g=new _,y=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);let v=m.testSepAxis(c,t,e,n,s,o);if(v===!1)return!1;v<y&&(y=v,r.copy(c))}else{let p=a?a.length:m.faces.length;for(let v=0;v<p;v++){let M=a?a[v]:v;c.copy(m.faceNormals[M]),n.vmult(c,c);let w=m.testSepAxis(c,t,e,n,s,o);if(w===!1)return!1;w<y&&(y=w,r.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){o.vmult(t.uniqueAxes[p],h);let v=m.testSepAxis(h,t,e,n,s,o);if(v===!1)return!1;v<y&&(y=v,r.copy(h))}else{let p=l?l.length:t.faces.length;for(let v=0;v<p;v++){let M=l?l[v]:v;h.copy(t.faceNormals[M]),o.vmult(h,h);let w=m.testSepAxis(h,t,e,n,s,o);if(w===!1)return!1;w<y&&(y=w,r.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],u);for(let v=0;v!==t.uniqueEdges.length;v++)if(o.vmult(t.uniqueEdges[v],f),u.cross(f,g),!g.almostZero()){g.normalize();let M=m.testSepAxis(g,t,e,n,s,o);if(M===!1)return!1;M<y&&(y=M,r.copy(g))}}return s.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,s,o,r){let a=this;i.project(a,t,n,s,Bu),i.project(e,t,o,r,Du);let l=Bu[0],c=Bu[1],h=Du[0],d=Du[1];if(l<d||h<c)return!1;let u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(t,e){let n=new _,s=new _;this.computeLocalAABB(s,n);let o=n.x-s.x,r=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*r*2*r+2*a*2*a),e.y=1/12*t*(2*o*2*o+2*a*2*a),e.z=1/12*t*(2*r*2*r+2*o*2*o)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,o,r,a){let l=new _,c=new _,h=new _,d=new _,u=new _,f=new _,g=new _,y=new _,m=this,p=[],v=s,M=p,w=-1,I=Number.MAX_VALUE;for(let E=0;E<m.faces.length;E++){l.copy(m.faceNormals[E]),n.vmult(l,l);let N=l.dot(t);N<I&&(I=N,w=E)}if(w<0)return;let A=m.faces[w];A.connectedFaces=[];for(let E=0;E<m.faces.length;E++)for(let N=0;N<m.faces[E].length;N++)A.indexOf(m.faces[E][N])!==-1&&E!==w&&A.connectedFaces.indexOf(E)===-1&&A.connectedFaces.push(E);let C=A.length;for(let E=0;E<C;E++){let N=m.vertices[A[E]],G=m.vertices[A[(E+1)%C]];N.vsub(G,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),d.copy(this.faceNormals[w]),n.vmult(d,d),e.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(N),n.vmult(f,f),e.vadd(f,f);let F=A.connectedFaces[E];g.copy(this.faceNormals[F]);let z=this.getPlaneConstantOfFace(F);y.copy(g),n.vmult(y,y);let V=z-y.dot(e);for(this.clipFaceAgainstPlane(v,M,y,V);v.length;)v.shift();for(;M.length;)v.push(M.shift())}g.copy(this.faceNormals[w]);let L=this.getPlaneConstantOfFace(w);y.copy(g),n.vmult(y,y);let S=L-y.dot(e);for(let E=0;E<v.length;E++){let N=y.dot(v[E])+S;if(N<=o&&(console.log(`clamped: depth=${N} to minDist=${o}`),N=o),N<=r){let G=v[E];if(N<=1e-6){let F={point:G,normal:y,depth:N};a.push(F)}}}}clipFaceAgainstPlane(t,e,n,s){let o,r,a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];o=n.dot(l)+s;for(let h=0;h<a;h++){if(c=t[h],r=n.dot(c)+s,o<0)if(r<0){let d=new _;d.copy(c),e.push(d)}else{let d=new _;l.lerp(c,o/(o-r),d),e.push(d)}else if(r<0){let d=new _;l.lerp(c,o/(o-r),d),e.push(d),e.push(c)}l=c,o=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new _);let n=this.vertices,s=this.worldVertices;for(let o=0;o!==this.vertices.length;o++)e.vmult(n[o],s[o]),t.vadd(s[o],s[o]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){let o=n[s];o.x<t.x?t.x=o.x:o.x>e.x&&(e.x=o.x),o.y<t.y?t.y=o.y:o.y>e.y&&(e.y=o.y),o.z<t.z?t.z=o.z:o.z>e.z&&(e.z=o.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new _);let n=this.faceNormals,s=this.worldFaceNormals;for(let o=0;o!==e;o++)t.vmult(n[o],s[o]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){let o=this.vertices,r,a,l,c,h,d,u=new _;for(let f=0;f<o.length;f++){u.copy(o[f]),e.vmult(u,u),t.vadd(u,u);let g=u;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,a,l),s.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new _);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,s=this.vertices;if(e){for(let o=0;o<n;o++){let r=s[o];e.vmult(r,r)}for(let o=0;o<this.faceNormals.length;o++){let r=this.faceNormals[o];e.vmult(r,r)}}if(t)for(let o=0;o<n;o++){let r=s[o];r.vadd(t,r)}}pointIsInside(t){let e=this.vertices,n=this.faces,s=this.faceNormals,o=null,r=new _;this.getAveragePointLocal(r);for(let a=0;a<this.faces.length;a++){let l=s[a],c=e[n[a][0]],h=new _;t.vsub(c,h);let d=l.dot(h),u=new _;r.vsub(c,u);let f=l.dot(u);if(d<0&&f>0||d>0&&f<0)return!1}return o?1:-1}static project(t,e,n,s,o){let r=t.vertices.length,a=Pb,l=0,c=0,h=Nb,d=t.vertices;h.setZero(),me.vectorToLocalFrame(n,s,e,a),me.pointToLocalFrame(n,s,h,h);let u=h.dot(a);c=l=d[0].dot(a);for(let f=1;f<r;f++){let g=d[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){let f=c;c=l,l=f}o[0]=l,o[1]=c}},Bu=[],Du=[],Ib=new _,Pb=new _,Nb=new _,Qn=class i extends xt{constructor(t){super({type:xt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=_,o=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Jo({vertices:o,faces:r,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new _),i.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){let n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let o=0;o!==n.length;o++)e.vmult(n[o],n[o]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let s=this.halfExtents,o=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let r=0;r<o.length;r++)fs.set(o[r][0],o[r][1],o[r][2]),e.vmult(fs,fs),t.vadd(fs,fs),n(fs.x,fs.y,fs.z)}calculateWorldAABB(t,e,n,s){let o=this.halfExtents;ui[0].set(o.x,o.y,o.z),ui[1].set(-o.x,o.y,o.z),ui[2].set(-o.x,-o.y,o.z),ui[3].set(-o.x,-o.y,-o.z),ui[4].set(o.x,-o.y,-o.z),ui[5].set(o.x,o.y,-o.z),ui[6].set(-o.x,o.y,-o.z),ui[7].set(o.x,-o.y,o.z);let r=ui[0];e.vmult(r,r),t.vadd(r,r),s.copy(r),n.copy(r);for(let a=1;a<8;a++){let l=ui[a];e.vmult(l,l),t.vadd(l,l);let c=l.x,h=l.y,d=l.z;c>s.x&&(s.x=c),h>s.y&&(s.y=h),d>s.z&&(s.z=d),c<n.x&&(n.x=c),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}},fs=new _,ui=[new _,new _,new _,new _,new _,new _,new _,new _],$u={DYNAMIC:1,STATIC:2,KINEMATIC:4},ju={AWAKE:0,SLEEPY:1,SLEEPING:2},it=class i extends Il{constructor(t){t===void 0&&(t={}),super(),this.id=i.idCounter++,this.index=-1,this.world=null,this.vlambda=new _,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new _,this.previousPosition=new _,this.interpolatedPosition=new _,this.initPosition=new _,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new _,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new _,this.force=new _;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?i.STATIC:i.DYNAMIC,typeof t.type==typeof i.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=i.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new _,this.quaternion=new Qe,this.initQuaternion=new Qe,this.previousQuaternion=new Qe,this.interpolatedQuaternion=new Qe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new _,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new _,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new _,this.invInertia=new _,this.invInertiaWorld=new ps,this.invMassSolve=0,this.invInertiaSolve=new _,this.invInertiaWorldSolve=new ps,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new _(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new _(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Rn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new _,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=i.AWAKE,this.wakeUpAfterNarrowphase=!1,t===i.SLEEPING&&this.dispatchEvent(i.wakeupEvent)}sleep(){this.sleepState=i.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===i.AWAKE&&n<s?(this.sleepState=i.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(i.sleepyEvent)):e===i.SLEEPY&&n>s?this.wakeUp():e===i.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(i.sleepEvent))}}updateSolveMassProperties(){this.sleepState===i.SLEEPING||this.type===i.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new _),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new _),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}addShape(t,e,n){let s=new _,o=new Qe;return e&&s.copy(e),n&&o.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(o),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,s=0;for(let o=0;o!==n;o++){let r=t[o];r.updateBoundingSphereRadius();let a=e[o].length(),l=r.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,o=Lb,r=Fb,a=this.quaternion,l=this.aabb,c=Bb;for(let h=0;h!==s;h++){let d=t[h];a.vmult(e[h],o),o.vadd(this.position,o),a.mult(n[h],r),d.calculateWorldAABB(o,r,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=Db,s=zb;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=Ob;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;let n=kb,s=Vb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===i.DYNAMIC&&(this.sleepState===i.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;this.sleepState===i.SLEEPING&&this.wakeUp();let n=e,s=Hb;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);let o=Gb;n.cross(t,o),this.invInertiaWorld.vmult(o,o),this.angularVelocity.vadd(o,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new _),this.type!==i.DYNAMIC)return;let n=Wb,s=qb;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){let t=Xb;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Qn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new _;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===i.DYNAMIC||this.type===i.KINEMATIC)||this.sleepState===i.SLEEPING)return;let s=this.velocity,o=this.angularVelocity,r=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*t;s.x+=a.x*f*u.x,s.y+=a.y*f*u.y,s.z+=a.z*f*u.z;let g=d.elements,y=this.angularFactor,m=l.x*y.x,p=l.y*y.y,v=l.z*y.z;o.x+=t*(g[0]*m+g[1]*p+g[2]*v),o.y+=t*(g[3]*m+g[4]*p+g[5]*v),o.z+=t*(g[6]*m+g[7]*p+g[8]*v),r.x+=s.x*t,r.y+=s.y*t,r.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};it.idCounter=0;it.COLLIDE_EVENT_NAME="collide";it.DYNAMIC=$u.DYNAMIC;it.STATIC=$u.STATIC;it.KINEMATIC=$u.KINEMATIC;it.AWAKE=ju.AWAKE;it.SLEEPY=ju.SLEEPY;it.SLEEPING=ju.SLEEPING;it.wakeupEvent={type:"wakeup"};it.sleepyEvent={type:"sleepy"};it.sleepEvent={type:"sleep"};var Lb=new _,Fb=new Qe,Bb=new Rn,Db=new ps,zb=new ps,Ub=new ps,Ob=new _,kb=new _,Vb=new _,Hb=new _,Gb=new _,Wb=new _,qb=new _,Xb=new _,Pl=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&it.STATIC||t.sleepState===it.SLEEPING)&&(e.type&it.STATIC||e.sleepState===it.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){let o=Yb;e.position.vsub(t.position,o);let r=(t.boundingRadius+e.boundingRadius)**2;o.lengthSquared()<r&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){let n=Zb,s=$b,o=jb,r=t.length;for(let a=0;a!==r;a++)s[a]=t[a],o[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==r;a++){let l=s[a].id,c=o[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){let l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(o[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new _;t.position.vsub(e.position,n);let s=t.shapes[0],o=e.shapes[0];return Math.pow(s.boundingSphereRadius+o.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Yb=new _;new _;new Qe;new _;var Zb={keys:[]},$b=[],jb=[];new _;var gE=new _;new _;var Vu=class extends Pl{constructor(){super()}collisionPairs(t,e,n){let s=t.bodies,o=s.length,r,a;for(let l=0;l!==o;l++)for(let c=0;c!==l;c++)r=s[l],a=s[c],this.needBroadphaseCollision(r,a)&&this.intersectionTest(r,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){let o=t.bodies[s];o.aabbNeedsUpdate&&o.updateAABB(),o.aabb.overlaps(e)&&n.push(o)}return n}},ms=class{constructor(){this.rayFromWorld=new _,this.rayToWorld=new _,this.hitNormalWorld=new _,this.hitPointWorld=new _,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,o,r,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=o,this.body=r,this.distance=a}},em,nm,im,sm,om,rm,am,Ju={CLOSEST:1,ANY:2,ALL:4};em=xt.types.SPHERE;nm=xt.types.PLANE;im=xt.types.BOX;sm=xt.types.CYLINDER;om=xt.types.CONVEXPOLYHEDRON;rm=xt.types.HEIGHTFIELD;am=xt.types.TRIMESH;var Un=class i{get[em](){return this._intersectSphere}get[nm](){return this._intersectPlane}get[im](){return this._intersectBox}get[sm](){return this._intersectConvex}get[om](){return this._intersectConvex}get[rm](){return this._intersectHeightfield}get[am](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new _),e===void 0&&(e=new _),this.from=t.clone(),this.to=e.clone(),this.direction=new _,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=i.ANY,this.result=new ms,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||i.ANY,this.result=e.result||new ms,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Hp),zu.length=0,t.broadphase.aabbQuery(t,Hp,zu),this.intersectBodies(zu),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;let s=Jb,o=Kb;for(let r=0,a=t.shapes.length;r<a;r++){let l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],o),t.quaternion.vmult(t.shapeOffsets[r],s),s.vadd(t.position,s),this.intersectShape(l,o,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){let o=this.from;if(p1(o,this.direction,n)>t.boundingSphereRadius)return;let a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,o){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,o)}_intersectPlane(t,e,n,s,o){let r=this.from,a=this.to,l=this.direction,c=new _(0,0,1);e.vmult(c,c);let h=new _;r.vsub(n,h);let d=h.dot(c);a.vsub(n,h);let u=h.dot(c);if(d*u>0||r.distanceTo(a)<d)return;let f=c.dot(l);if(Math.abs(f)<this.precision)return;let g=new _,y=new _,m=new _;r.vsub(n,g);let p=-c.dot(g)/f;l.scale(p,y),r.vadd(y,m),this.reportIntersection(c,m,o,s,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,s=this.to,o=this.from;e.x=Math.min(s.x,o.x),e.y=Math.min(s.y,o.y),e.z=Math.min(s.z,o.z),n.x=Math.max(s.x,o.x),n.y=Math.max(s.y,o.y),n.z=Math.max(s.z,o.z)}_intersectHeightfield(t,e,n,s,o){t.data,t.elementSize;let r=Qb;r.from.copy(this.from),r.to.copy(this.to),me.pointToLocalFrame(n,e,r.from,r.from),me.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();let a=t1,l,c,h,d;l=c=0,h=d=t.data.length-1;let u=new Rn;r.getAABB(u),t.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(u.upperBound.x,u.upperBound.y,a,!0),h=Math.min(h,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,u),!!u.overlapsRay(r)){if(t.getConvexTrianglePillar(f,g,!1),me.pointToWorldFrame(n,e,t.pillarOffset,El),this._intersectConvex(t.pillarConvex,e,El,s,o,Gp),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),me.pointToWorldFrame(n,e,t.pillarOffset,El),this._intersectConvex(t.pillarConvex,e,El,s,o,Gp)}}}_intersectSphere(t,e,n,s,o){let r=this.from,a=this.to,l=t.radius,c=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2,h=2*((a.x-r.x)*(r.x-n.x)+(a.y-r.y)*(r.y-n.y)+(a.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,u=h**2-4*c*d,f=e1,g=n1;if(!(u<0))if(u===0)r.lerp(a,u,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,o,s,-1);else{let y=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(y>=0&&y<=1&&(r.lerp(a,y,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,o,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(r.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,o,s,-1))}}_intersectConvex(t,e,n,s,o,r){let a=i1,l=Wp,c=r&&r.faceList||null,h=t.faces,d=t.vertices,u=t.faceNormals,f=this.direction,g=this.from,y=this.to,m=g.distanceTo(y),p=c?c.length:h.length,v=this.result;for(let M=0;!v.shouldStop&&M<p;M++){let w=c?c[M]:M,I=h[w],A=u[w],C=e,L=n;l.copy(d[I[0]]),C.vmult(l,l),l.vadd(L,l),l.vsub(g,l),C.vmult(A,a);let S=f.dot(a);if(Math.abs(S)<this.precision)continue;let E=a.dot(l)/S;if(!(E<0)){f.scale(E,_n),_n.vadd(g,_n),Kn.copy(d[I[0]]),C.vmult(Kn,Kn),L.vadd(Kn,Kn);for(let N=1;!v.shouldStop&&N<I.length-1;N++){di.copy(d[I[N]]),fi.copy(d[I[N+1]]),C.vmult(di,di),C.vmult(fi,fi),L.vadd(di,di),L.vadd(fi,fi);let G=_n.distanceTo(g);!(i.pointInTriangle(_n,Kn,di,fi)||i.pointInTriangle(_n,di,Kn,fi))||G>m||this.reportIntersection(a,_n,o,s,w)}}}}_intersectTrimesh(t,e,n,s,o,r){let a=r1,l=d1,c=f1,h=Wp,d=a1,u=l1,f=c1,g=u1,y=h1,m=t.indices;t.vertices;let p=this.from,v=this.to,M=this.direction;c.position.copy(n),c.quaternion.copy(e),me.vectorToLocalFrame(n,e,M,d),me.pointToLocalFrame(n,e,p,u),me.pointToLocalFrame(n,e,v,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,f.vsub(u,d),d.normalize();let w=u.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let I=0,A=l.length;!this.result.shouldStop&&I!==A;I++){let C=l[I];t.getNormal(C,a),t.getVertex(m[C*3],Kn),Kn.vsub(u,h);let L=d.dot(a),S=a.dot(h)/L;if(S<0)continue;d.scale(S,_n),_n.vadd(u,_n),t.getVertex(m[C*3+1],di),t.getVertex(m[C*3+2],fi);let E=_n.distanceSquared(u);!(i.pointInTriangle(_n,di,Kn,fi)||i.pointInTriangle(_n,Kn,di,fi))||E>w||(me.vectorToWorldFrame(e,a,y),me.pointToWorldFrame(n,e,_n,g),this.reportIntersection(y,g,o,s,C))}l.length=0}reportIntersection(t,e,n,s,o){let r=this.from,a=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof o<"u"?o:-1,this.mode){case i.ALL:this.hasHit=!0,c.set(r,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case i.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,s,l));break;case i.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Xs),n.vsub(e,zr),t.vsub(e,Uu);let o=Xs.dot(Xs),r=Xs.dot(zr),a=Xs.dot(Uu),l=zr.dot(zr),c=zr.dot(Uu),h,d;return(h=l*a-r*c)>=0&&(d=o*c-r*a)>=0&&h+d<o*l-r*r}};Un.CLOSEST=Ju.CLOSEST;Un.ANY=Ju.ANY;Un.ALL=Ju.ALL;var Hp=new Rn,zu=[],zr=new _,Uu=new _,Jb=new _,Kb=new Qe,_n=new _,Kn=new _,di=new _,fi=new _;new _;new ms;var Gp={faceList:[0]},El=new _,Qb=new Un,t1=[],e1=new _,n1=new _,i1=new _,s1=new _,o1=new _,Wp=new _,r1=new _,a1=new _,l1=new _,c1=new _,h1=new _,u1=new _;new Rn;var d1=[],f1=new me,Xs=new _,Sl=new _;function p1(i,t,e){e.vsub(i,Xs);let n=Xs.dot(t);return t.scale(n,Sl),Sl.vadd(i,Sl),e.distanceTo(Sl)}var Nl=class i extends Pl{static checkBounds(t,e,n){let s,o;n===0?(s=t.position.x,o=e.position.x):n===1?(s=t.position.y,o=e.position.y):n===2&&(s=t.position.z,o=e.position.z);let r=t.boundingRadius,a=e.boundingRadius,l=s+r;return o-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.x<=s.aabb.lowerBound.x);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.y<=s.aabb.lowerBound.y);o--)t[o+1]=t[o];t[o+1]=s}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){let s=t[e],o;for(o=e-1;o>=0&&!(t[o].aabb.lowerBound.z<=s.aabb.lowerBound.z);o--)t[o+1]=t[o];t[o+1]=s}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;let e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{let s=e.indexOf(n.body);s!==-1&&e.splice(s,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){let s=this.axisList,o=s.length,r=this.axisIndex,a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==o;a++){let c=s[a];for(l=a+1;l<o;l++){let h=s[l];if(this.needBroadphaseCollision(c,h)){if(!i.checkBounds(c,h,r))break;this.intersectionTest(c,h,e,n)}}}}sortList(){let t=this.axisList,e=this.axisIndex,n=t.length;for(let s=0;s!==n;s++){let o=t[s];o.aabbNeedsUpdate&&o.updateAABB()}e===0?i.insertionSortX(t):e===1?i.insertionSortY(t):e===2&&i.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,s=0,o=0,r=0,a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){let g=a[f],y=g.position.x;t+=y,e+=y*y;let m=g.position.y;n+=m,s+=m*m;let p=g.position.z;o+=p,r+=p*p}let h=e-t*t*c,d=s-n*n*c,u=r-o*o*c;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let s=this.axisIndex,o="x";s===1&&(o="y"),s===2&&(o="z");let r=this.axisList;e.lowerBound[o],e.upperBound[o];for(let a=0;a<r.length;a++){let l=r[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}},Vr=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},Ll=class i{constructor(t,e,n){n===void 0&&(n={}),n=Vr.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};Ll.idCounter=0;var Fl=class{constructor(){this.spatial=new _,this.rotational=new _}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},Ys=class i{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=i.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Fl,this.jacobianElementB=new Fl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let s=e,o=t,r=n;this.a=4/(r*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(r*r*o*(1+4*s))}computeB(t,e,n){let s=this.computeGW(),o=this.computeGq(),r=this.computeGiMf();return-o*t-s*e-r*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.position,r=s.position;return t.spatial.dot(o)+e.spatial.dot(r)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.velocity,r=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(o,a)+e.multiplyVectors(r,l)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.vlambda,r=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(o,a)+e.multiplyVectors(r,l)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.force,r=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,h=s.invMassSolve;return o.scale(c,qp),a.scale(h,Xp),n.invInertiaWorldSolve.vmult(r,Yp),s.invInertiaWorldSolve.vmult(l,Zp),t.multiplyVectors(qp,Yp)+e.multiplyVectors(Xp,Zp)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,o=n.invMassSolve,r=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve,c=o+r;return a.vmult(t.rotational,Tl),c+=Tl.dot(t.rotational),l.vmult(e.rotational,Tl),c+=Tl.dot(e.rotational),c}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,o=this.bj,r=m1;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),o.vlambda.addScaledVector(o.invMassSolve*t,n.spatial,o.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda),o.invInertiaWorldSolve.vmult(n.rotational,r),o.wlambda.addScaledVector(t,r,o.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Ys.idCounter=0;var qp=new _,Xp=new _,Yp=new _,Zp=new _,Tl=new _,m1=new _,$o=class extends Ys{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new _,this.rj=new _,this.ni=new _}computeB(t){let e=this.a,n=this.b,s=this.bi,o=this.bj,r=this.ri,a=this.rj,l=g1,c=y1,h=s.velocity,d=s.angularVelocity;s.force,s.torque;let u=o.velocity,f=o.angularVelocity;o.force,o.torque;let g=x1,y=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;r.cross(p,l),a.cross(p,c),p.negate(y.spatial),l.negate(y.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(o.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(r,g);let v=p.dot(g),M=this.restitution+1,w=M*u.dot(p)-M*h.dot(p)+f.dot(c)-d.dot(l),I=this.computeGiMf();return-v*e-w*n-t*I}getImpactVelocityAlongNormal(){let t=v1,e=_1,n=b1,s=w1,o=M1;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,o),this.ni.dot(o)}},g1=new _,y1=new _,x1=new _,v1=new _,_1=new _,b1=new _,w1=new _,M1=new _,Ko=class extends Ll{constructor(t,e,n,s,o){e===void 0&&(e=new _),s===void 0&&(s=new _),o===void 0&&(o=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=s.clone();let r=this.equationX=new $o(t,n),a=this.equationY=new $o(t,n),l=this.equationZ=new $o(t,n);this.equations.push(r,a,l),r.minForce=a.minForce=l.minForce=-o,r.maxForce=a.maxForce=l.maxForce=o,r.ni.set(1,0,0),a.ni.set(0,1,0),l.ni.set(0,0,1)}update(){let t=this.bodyA,e=this.bodyB,n=this.equationX,s=this.equationY,o=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),o.ri.copy(n.ri),o.rj.copy(n.rj)}},Hu=class extends Ys{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new _(1,0,0),this.axisB=n.axisB?n.axisB.clone():new _(0,1,0),this.angle=typeof n.angle<"u"?n.angle:0}computeB(t){let e=this.a,n=this.b,s=this.axisA,o=this.axisB,r=E1,a=S1,l=this.jacobianElementA,c=this.jacobianElementB;s.cross(o,r),o.cross(s,a),l.rotational.copy(a),c.rotational.copy(r);let h=Math.cos(this.angle)-s.dot(o),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},E1=new _,S1=new _,jo=class extends Ys{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6;super(t,e,-s,s),this.axisA=n.axisA?n.axisA.clone():new _(1,0,0),this.axisB=n.axisB?n.axisB.clone():new _(0,1,0),this.maxAngle=Math.PI/2}computeB(t){let e=this.a,n=this.b,s=this.axisA,o=this.axisB,r=T1,a=A1,l=this.jacobianElementA,c=this.jacobianElementB;s.cross(o,r),o.cross(s,a),l.rotational.copy(a),c.rotational.copy(r);let h=Math.cos(this.maxAngle)-s.dot(o),d=this.computeGW(),u=this.computeGiMf();return-h*e-d*n-t*u}},T1=new _,A1=new _,Hr=class extends Ko{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6,o=n.pivotA?n.pivotA.clone():new _,r=n.pivotB?n.pivotB.clone():new _;super(t,o,e,r,s),this.axisA=n.axisA?n.axisA.clone():new _,this.axisB=n.axisB?n.axisB.clone():new _,this.collideConnected=!!n.collideConnected,this.angle=typeof n.angle<"u"?n.angle:0;let a=this.coneEquation=new Hu(t,e,n),l=this.twistEquation=new jo(t,e,n);this.twistAngle=typeof n.twistAngle<"u"?n.twistAngle:0,a.maxForce=0,a.minForce=-s,l.maxForce=0,l.minForce=-s,this.equations.push(a,l)}update(){let t=this.bodyA,e=this.bodyB,n=this.coneEquation,s=this.twistEquation;super.update(),t.vectorToWorldFrame(this.axisA,n.axisA),e.vectorToWorldFrame(this.axisB,n.axisB),this.axisA.tangents(s.axisA,s.axisA),t.vectorToWorldFrame(s.axisA,s.axisA),this.axisB.tangents(s.axisB,s.axisB),e.vectorToWorldFrame(s.axisB,s.axisB),n.angle=this.angle,s.maxAngle=this.twistAngle}};new _;new _;var Bl=class extends Ko{constructor(t,e,n){n===void 0&&(n={});let s=typeof n.maxForce<"u"?n.maxForce:1e6,o=new _,r=new _,a=new _;t.position.vadd(e.position,a),a.scale(.5,a),e.pointToLocalFrame(a,r),t.pointToLocalFrame(a,o),super(t,o,e,r,s),this.xA=t.vectorToLocalFrame(_.UNIT_X),this.xB=e.vectorToLocalFrame(_.UNIT_X),this.yA=t.vectorToLocalFrame(_.UNIT_Y),this.yB=e.vectorToLocalFrame(_.UNIT_Y),this.zA=t.vectorToLocalFrame(_.UNIT_Z),this.zB=e.vectorToLocalFrame(_.UNIT_Z);let l=this.rotationalEquation1=new jo(t,e,n),c=this.rotationalEquation2=new jo(t,e,n),h=this.rotationalEquation3=new jo(t,e,n);this.equations.push(l,c,h)}update(){let t=this.bodyA,e=this.bodyB;this.motorEquation;let n=this.rotationalEquation1,s=this.rotationalEquation2,o=this.rotationalEquation3;super.update(),t.vectorToWorldFrame(this.xA,n.axisA),e.vectorToWorldFrame(this.yB,n.axisB),t.vectorToWorldFrame(this.yA,s.axisA),e.vectorToWorldFrame(this.zB,s.axisB),t.vectorToWorldFrame(this.zA,o.axisA),e.vectorToWorldFrame(this.xB,o.axisB)}},R1=new _,C1=new _;var yE=new _,xE=new _,Dl=class extends Ys{constructor(t,e,n){super(t,e,-n,n),this.ri=new _,this.rj=new _,this.t=new _}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,s=this.rj,o=I1,r=P1,a=this.t;n.cross(a,o),s.cross(a,r);let l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),o.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(r);let h=this.computeGW(),d=this.computeGiMf();return-h*e-t*d}},I1=new _,P1=new _,zl=class i{constructor(t,e,n){n=Vr.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=i.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};zl.idCounter=0;var gs=class i{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=i.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};gs.idCounter=0;var vE=new _,_E=new _,bE=new _,wE=new _,ME=new _,EE=new _,SE=new _,TE=new _,AE=new _,RE=new _,CE=new _;var IE=new _,PE=new _;new _;new _;new _;var NE=new _,LE=new _,FE=new _;new Un;new _;var BE=new _,DE=new _,zE=[new _(1,0,0),new _(0,1,0),new _(0,0,1)],UE=new _;var OE=new _,kE=new _,VE=new _;var HE=new _,GE=new _,WE=new _,qE=new _;var XE=new _,YE=new _,ZE=new _;var Cn=class extends xt{constructor(t){if(super({type:xt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new _);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,s){let o=this.radius,r=["x","y","z"];for(let a=0;a<r.length;a++){let l=r[a];n[l]=t[l]-o,s[l]=t[l]+o}}};var $E=new _,jE=new _;var JE=new _,KE=new _,QE=new _,tS=new _,eS=new _,nS=new _,iS=new _,Gi=class extends Jo{constructor(t,e,n,s){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),s===void 0&&(s=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");let o=s,r=[],a=[],l=[],c=[],h=[],d=Math.cos,u=Math.sin;r.push(new _(-e*u(0),-n*.5,e*d(0))),c.push(0),r.push(new _(-t*u(0),n*.5,t*d(0))),h.push(1);for(let g=0;g<o;g++){let y=2*Math.PI/o*(g+1),m=2*Math.PI/o*(g+.5);g<o-1?(r.push(new _(-e*u(y),-n*.5,e*d(y))),c.push(2*g+2),r.push(new _(-t*u(y),n*.5,t*d(y))),h.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(o%2===1||g<o/2)&&a.push(new _(-u(m),0,d(m)))}l.push(c),a.push(new _(0,1,0));let f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);l.push(f),super({vertices:r,faces:l,axes:a}),this.type=xt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=s}};var sS=new _,Ul=class extends xt{constructor(t,e){e===void 0&&(e={}),e=Vr.defaults(e,{maxValue:null,minValue:null,elementSize:1}),super({type:xt.types.HEIGHTFIELD}),this.data=t,this.maxValue=e.maxValue,this.minValue=e.minValue,this.elementSize=e.elementSize,e.minValue===null&&this.updateMinValue(),e.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,this.pillarConvex=new Jo,this.pillarOffset=new _,this.updateBoundingSphereRadius(),this._cachedPillars={}}update(){this._cachedPillars={}}updateMinValue(){let t=this.data,e=t[0][0];for(let n=0;n!==t.length;n++)for(let s=0;s!==t[n].length;s++){let o=t[n][s];o<e&&(e=o)}this.minValue=e}updateMaxValue(){let t=this.data,e=t[0][0];for(let n=0;n!==t.length;n++)for(let s=0;s!==t[n].length;s++){let o=t[n][s];o>e&&(e=o)}this.maxValue=e}setHeightValueAtIndex(t,e,n){let s=this.data;s[t][e]=n,this.clearCachedConvexTrianglePillar(t,e,!1),t>0&&(this.clearCachedConvexTrianglePillar(t-1,e,!0),this.clearCachedConvexTrianglePillar(t-1,e,!1)),e>0&&(this.clearCachedConvexTrianglePillar(t,e-1,!0),this.clearCachedConvexTrianglePillar(t,e-1,!1)),e>0&&t>0&&this.clearCachedConvexTrianglePillar(t-1,e-1,!0)}getRectMinMax(t,e,n,s,o){o===void 0&&(o=[]);let r=this.data,a=this.minValue;for(let l=t;l<=n;l++)for(let c=e;c<=s;c++){let h=r[l][c];h>a&&(a=h)}o[0]=this.minValue,o[1]=a}getIndexOfPosition(t,e,n,s){let o=this.elementSize,r=this.data,a=Math.floor(t/o),l=Math.floor(e/o);return n[0]=a,n[1]=l,s&&(a<0&&(a=0),l<0&&(l=0),a>=r.length-1&&(a=r.length-1),l>=r[0].length-1&&(l=r[0].length-1)),!(a<0||l<0||a>=r.length-1||l>=r[0].length-1)}getTriangleAt(t,e,n,s,o,r){let a=$p;this.getIndexOfPosition(t,e,a,n);let l=a[0],c=a[1],h=this.data;n&&(l=Math.min(h.length-2,Math.max(0,l)),c=Math.min(h[0].length-2,Math.max(0,c)));let d=this.elementSize,u=(t/d-l)**2+(e/d-c)**2,f=(t/d-(l+1))**2+(e/d-(c+1))**2,g=u>f;return this.getTriangle(l,c,g,s,o,r),g}getNormalAt(t,e,n,s){let o=B1,r=D1,a=z1,l=U1,c=O1;this.getTriangleAt(t,e,n,o,r,a),r.vsub(o,l),a.vsub(o,c),l.cross(c,s),s.normalize()}getAabbAtIndex(t,e,n){let{lowerBound:s,upperBound:o}=n,r=this.data,a=this.elementSize;s.set(t*a,e*a,r[t][e]),o.set((t+1)*a,(e+1)*a,r[t+1][e+1])}getHeightAt(t,e,n){let s=this.data,o=N1,r=L1,a=F1,l=$p;this.getIndexOfPosition(t,e,l,n);let c=l[0],h=l[1];n&&(c=Math.min(s.length-2,Math.max(0,c)),h=Math.min(s[0].length-2,Math.max(0,h)));let d=this.getTriangleAt(t,e,n,o,r,a);k1(t,e,o.x,o.y,r.x,r.y,a.x,a.y,jp);let u=jp;return d?s[c+1][h+1]*u.x+s[c][h+1]*u.y+s[c+1][h]*u.z:s[c][h]*u.x+s[c+1][h]*u.y+s[c][h+1]*u.z}getCacheConvexTrianglePillarKey(t,e,n){return`${t}_${e}_${n?1:0}`}getCachedConvexTrianglePillar(t,e,n){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]}setCachedConvexTrianglePillar(t,e,n,s,o){this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]={convex:s,offset:o}}clearCachedConvexTrianglePillar(t,e,n){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,n)]}getTriangle(t,e,n,s,o,r){let a=this.data,l=this.elementSize;n?(s.set((t+1)*l,(e+1)*l,a[t+1][e+1]),o.set(t*l,(e+1)*l,a[t][e+1]),r.set((t+1)*l,e*l,a[t+1][e])):(s.set(t*l,e*l,a[t][e]),o.set((t+1)*l,e*l,a[t+1][e]),r.set(t*l,(e+1)*l,a[t][e+1]))}getConvexTrianglePillar(t,e,n){let s=this.pillarConvex,o=this.pillarOffset;if(this.cacheEnabled){let d=this.getCachedConvexTrianglePillar(t,e,n);if(d){this.pillarConvex=d.convex,this.pillarOffset=d.offset;return}s=new Jo,o=new _,this.pillarConvex=s,this.pillarOffset=o}let r=this.data,a=this.elementSize,l=s.faces;s.vertices.length=6;for(let d=0;d<6;d++)s.vertices[d]||(s.vertices[d]=new _);l.length=5;for(let d=0;d<5;d++)l[d]||(l[d]=[]);let c=s.vertices,h=(Math.min(r[t][e],r[t+1][e],r[t][e+1],r[t+1][e+1])-this.minValue)/2+this.minValue;n?(o.set((t+.75)*a,(e+.75)*a,h),c[0].set(.25*a,.25*a,r[t+1][e+1]-h),c[1].set(-.75*a,.25*a,r[t][e+1]-h),c[2].set(.25*a,-.75*a,r[t+1][e]-h),c[3].set(.25*a,.25*a,-Math.abs(h)-1),c[4].set(-.75*a,.25*a,-Math.abs(h)-1),c[5].set(.25*a,-.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=2,l[2][1]=5,l[2][2]=3,l[2][3]=0,l[3][0]=3,l[3][1]=4,l[3][2]=1,l[3][3]=0,l[4][0]=1,l[4][1]=4,l[4][2]=5,l[4][3]=2):(o.set((t+.25)*a,(e+.25)*a,h),c[0].set(-.25*a,-.25*a,r[t][e]-h),c[1].set(.75*a,-.25*a,r[t+1][e]-h),c[2].set(-.25*a,.75*a,r[t][e+1]-h),c[3].set(-.25*a,-.25*a,-Math.abs(h)-1),c[4].set(.75*a,-.25*a,-Math.abs(h)-1),c[5].set(-.25*a,.75*a,-Math.abs(h)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=0,l[2][1]=2,l[2][2]=5,l[2][3]=3,l[3][0]=1,l[3][1]=0,l[3][2]=3,l[3][3]=4,l[4][0]=4,l[4][1]=5,l[4][2]=2,l[4][3]=1),s.computeNormals(),s.computeEdges(),s.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(t,e,n,s,o)}calculateLocalInertia(t,e){return e===void 0&&(e=new _),e.set(0,0,0),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,s){n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),s.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}updateBoundingSphereRadius(){let t=this.data,e=this.elementSize;this.boundingSphereRadius=new _(t.length*e,t[0].length*e,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).length()}setHeightsFromImage(t,e){let{x:n,z:s,y:o}=e,r=document.createElement("canvas");r.width=t.width,r.height=t.height;let a=r.getContext("2d");a.drawImage(t,0,0);let l=a.getImageData(0,0,t.width,t.height),c=this.data;c.length=0,this.elementSize=Math.abs(n)/l.width;for(let h=0;h<l.height;h++){let d=[];for(let u=0;u<l.width;u++){let f=l.data[(h*l.height+u)*4],g=l.data[(h*l.height+u)*4+1],y=l.data[(h*l.height+u)*4+2],m=(f+g+y)/4/255*s;n<0?d.push(m):d.unshift(m)}o<0?c.unshift(d):c.push(d)}this.updateMaxValue(),this.updateMinValue(),this.update()}},$p=[],jp=new _,N1=new _,L1=new _,F1=new _,B1=new _,D1=new _,z1=new _,U1=new _,O1=new _;function k1(i,t,e,n,s,o,r,a,l){l.x=((o-a)*(i-r)+(r-s)*(t-a))/((o-a)*(e-r)+(r-s)*(n-a)),l.y=((a-n)*(i-r)+(e-r)*(t-a))/((o-a)*(e-r)+(r-s)*(n-a)),l.z=1-l.x-l.y}var oS=new _,rS=new Rn;var aS=new _,lS=new Rn,cS=new _,hS=new _,uS=new _,dS=new _,fS=new _,pS=new _,mS=new _,gS=new Rn,yS=new _,xS=new me,vS=new Rn,Gu=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},Wu=class extends Gu{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,s=this.iterations,o=this.tolerance*this.tolerance,r=this.equations,a=r.length,l=e.bodies,c=l.length,h=t,d,u,f,g,y,m;if(a!==0)for(let w=0;w!==c;w++)l[w].updateSolveMassProperties();let p=H1,v=G1,M=V1;p.length=a,v.length=a,M.length=a;for(let w=0;w!==a;w++){let I=r[w];M[w]=0,v[w]=I.computeB(h),p[w]=1/I.computeC()}if(a!==0){for(let A=0;A!==c;A++){let C=l[A],L=C.vlambda,S=C.wlambda;L.set(0,0,0),S.set(0,0,0)}for(n=0;n!==s;n++){g=0;for(let A=0;A!==a;A++){let C=r[A];d=v[A],u=p[A],m=M[A],y=C.computeGWlambda(),f=u*(d-y-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),M[A]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<o)break}for(let A=0;A!==c;A++){let C=l[A],L=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),L.vadd(C.vlambda,L),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let w=r.length,I=1/h;for(;w--;)r[w].multiplier=M[w]*I}return n}},V1=[],H1=[],G1=[];var _S=it.STATIC;var qu=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},Xu=class extends qu{constructor(){super(...arguments),this.type=_}constructObject(){return new _}},Ie={sphereSphere:xt.types.SPHERE,spherePlane:xt.types.SPHERE|xt.types.PLANE,boxBox:xt.types.BOX|xt.types.BOX,sphereBox:xt.types.SPHERE|xt.types.BOX,planeBox:xt.types.PLANE|xt.types.BOX,convexConvex:xt.types.CONVEXPOLYHEDRON,sphereConvex:xt.types.SPHERE|xt.types.CONVEXPOLYHEDRON,planeConvex:xt.types.PLANE|xt.types.CONVEXPOLYHEDRON,boxConvex:xt.types.BOX|xt.types.CONVEXPOLYHEDRON,sphereHeightfield:xt.types.SPHERE|xt.types.HEIGHTFIELD,boxHeightfield:xt.types.BOX|xt.types.HEIGHTFIELD,convexHeightfield:xt.types.CONVEXPOLYHEDRON|xt.types.HEIGHTFIELD,sphereParticle:xt.types.PARTICLE|xt.types.SPHERE,planeParticle:xt.types.PLANE|xt.types.PARTICLE,boxParticle:xt.types.BOX|xt.types.PARTICLE,convexParticle:xt.types.PARTICLE|xt.types.CONVEXPOLYHEDRON,cylinderCylinder:xt.types.CYLINDER,sphereCylinder:xt.types.SPHERE|xt.types.CYLINDER,planeCylinder:xt.types.PLANE|xt.types.CYLINDER,boxCylinder:xt.types.BOX|xt.types.CYLINDER,convexCylinder:xt.types.CONVEXPOLYHEDRON|xt.types.CYLINDER,heightfieldCylinder:xt.types.HEIGHTFIELD|xt.types.CYLINDER,particleCylinder:xt.types.PARTICLE|xt.types.CYLINDER,sphereTrimesh:xt.types.SPHERE|xt.types.TRIMESH,planeTrimesh:xt.types.PLANE|xt.types.TRIMESH},Yu=class{get[Ie.sphereSphere](){return this.sphereSphere}get[Ie.spherePlane](){return this.spherePlane}get[Ie.boxBox](){return this.boxBox}get[Ie.sphereBox](){return this.sphereBox}get[Ie.planeBox](){return this.planeBox}get[Ie.convexConvex](){return this.convexConvex}get[Ie.sphereConvex](){return this.sphereConvex}get[Ie.planeConvex](){return this.planeConvex}get[Ie.boxConvex](){return this.boxConvex}get[Ie.sphereHeightfield](){return this.sphereHeightfield}get[Ie.boxHeightfield](){return this.boxHeightfield}get[Ie.convexHeightfield](){return this.convexHeightfield}get[Ie.sphereParticle](){return this.sphereParticle}get[Ie.planeParticle](){return this.planeParticle}get[Ie.boxParticle](){return this.boxParticle}get[Ie.convexParticle](){return this.convexParticle}get[Ie.cylinderCylinder](){return this.convexConvex}get[Ie.sphereCylinder](){return this.sphereConvex}get[Ie.planeCylinder](){return this.planeConvex}get[Ie.boxCylinder](){return this.boxConvex}get[Ie.convexCylinder](){return this.convexConvex}get[Ie.heightfieldCylinder](){return this.heightfieldCylinder}get[Ie.particleCylinder](){return this.particleCylinder}get[Ie.sphereTrimesh](){return this.sphereTrimesh}get[Ie.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Xu,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,o,r){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new $o(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;let l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let c=n.material||t.material,h=s.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=o||n,a.sj=r||s,a}createFrictionEquationsFromContact(t,e){let n=t.bi,s=t.bj,o=t.si,r=t.sj,a=this.world,l=this.currentContactMaterial,c=l.friction,h=o.material||n.material,d=r.material||s.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){let u=c*(a.frictionGravity||a.gravity).length(),f=n.invMass+s.invMass;f>0&&(f=1/f);let g=this.frictionEquationPool,y=g.length?g.pop():new Dl(n,s,u*f),m=g.length?g.pop():new Dl(n,s,u*f);return y.bi=m.bi=n,y.bj=m.bj=s,y.minForce=m.minForce=-u*f,y.maxForce=m.maxForce=u*f,y.ri.copy(t.ri),y.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(y.t,m.t),y.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),y.enabled=m.enabled=t.enabled,e.push(y,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];qs.setZero(),Yo.setZero(),Zo.setZero();let o=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==o?(qs.vadd(e.ni,qs),Yo.vadd(e.ri,Yo),Zo.vadd(e.rj,Zo)):(qs.vsub(e.ni,qs),Yo.vadd(e.rj,Yo),Zo.vadd(e.ri,Zo));let r=1/t;Yo.scale(r,n.ri),Zo.scale(r,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),qs.normalize(),qs.tangents(n.t,s.t)}getContacts(t,e,n,s,o,r,a){this.contactPointPool=o,this.frictionEquationPool=a,this.result=s,this.frictionResult=r;let l=X1,c=Y1,h=W1,d=q1;for(let u=0,f=t.length;u!==f;u++){let g=t[u],y=e[u],m=null;g.material&&y.material&&(m=n.getContactMaterial(g.material,y.material)||null);let p=g.type&it.KINEMATIC&&y.type&it.STATIC||g.type&it.STATIC&&y.type&it.KINEMATIC||g.type&it.KINEMATIC&&y.type&it.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],h),h.vadd(g.position,h);let M=g.shapes[v];for(let w=0;w<y.shapes.length;w++){y.quaternion.mult(y.shapeOrientations[w],c),y.quaternion.vmult(y.shapeOffsets[w],d),d.vadd(y.position,d);let I=y.shapes[w];if(!(M.collisionFilterMask&I.collisionFilterGroup&&I.collisionFilterMask&M.collisionFilterGroup)||h.distanceTo(d)>M.boundingSphereRadius+I.boundingSphereRadius)continue;let A=null;M.material&&I.material&&(A=n.getContactMaterial(M.material,I.material)||null),this.currentContactMaterial=A||m||n.defaultContactMaterial;let C=M.type|I.type,L=this[C];if(L){let S=!1;M.type<I.type?S=L.call(this,M,I,h,d,l,c,g,y,M,I,p):S=L.call(this,I,M,d,h,c,l,y,g,M,I,p),S&&p&&(n.shapeOverlapKeeper.set(M.id,I.id),n.bodyOverlapKeeper.set(g.id,y.id))}}}}}sphereSphere(t,e,n,s,o,r,a,l,c,h,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;let u=this.createContactEquation(a,l,t,e,c,h);s.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(t.radius,u.ri),u.rj.scale(-e.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(a.position,u.ri),u.rj.vadd(s,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(t,e,n,s,o,r,a,l,c,h,d){let u=this.createContactEquation(a,l,t,e,c,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(t.radius,u.ri),n.vsub(s,Al),u.ni.scale(u.ni.dot(Al),Jp),Al.vsub(Jp,u.rj),-Al.dot(u.ni)<=t.radius){if(d)return!0;let f=u.ri,g=u.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(s,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,o,r,a,l,t,e,d)}sphereBox(t,e,n,s,o,r,a,l,c,h,d){let u=this.v3pool,f=vw;n.vsub(s,Rl),e.getSideNormals(f,r);let g=t.radius,y=!1,m=bw,p=ww,v=Mw,M=null,w=0,I=0,A=0,C=null;for(let D=0,J=f.length;D!==J&&y===!1;D++){let W=gw;W.copy(f[D]);let K=W.length();W.normalize();let ct=Rl.dot(W);if(ct<K+g&&ct>0){let pt=yw,at=xw;pt.copy(f[(D+1)%3]),at.copy(f[(D+2)%3]);let ee=pt.length(),$=at.length();pt.normalize(),at.normalize();let st=Rl.dot(pt),Mt=Rl.dot(at);if(st<ee&&st>-ee&&Mt<$&&Mt>-$){let ut=Math.abs(ct-K-g);if((C===null||ut<C)&&(C=ut,I=st,A=Mt,M=K,m.copy(W),p.copy(pt),v.copy(at),w++,d))return!0}}}if(w){y=!0;let D=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,D.ri),D.ni.copy(m),D.ni.negate(D.ni),m.scale(M,m),p.scale(I,p),m.vadd(p,m),v.scale(A,v),m.vadd(v,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),D.rj.vadd(s,D.rj),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}let L=u.get(),S=_w;for(let D=0;D!==2&&!y;D++)for(let J=0;J!==2&&!y;J++)for(let W=0;W!==2&&!y;W++)if(L.set(0,0,0),D?L.vadd(f[0],L):L.vsub(f[0],L),J?L.vadd(f[1],L):L.vsub(f[1],L),W?L.vadd(f[2],L):L.vsub(f[2],L),s.vadd(L,S),S.vsub(n,S),S.lengthSquared()<g*g){if(d)return!0;y=!0;let K=this.createContactEquation(a,l,t,e,c,h);K.ri.copy(S),K.ri.normalize(),K.ni.copy(K.ri),K.ri.scale(g,K.ri),K.rj.copy(L),K.ri.vadd(n,K.ri),K.ri.vsub(a.position,K.ri),K.rj.vadd(s,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}u.release(L),L=null;let E=u.get(),N=u.get(),G=u.get(),F=u.get(),z=u.get(),V=f.length;for(let D=0;D!==V&&!y;D++)for(let J=0;J!==V&&!y;J++)if(D%3!==J%3){f[J].cross(f[D],E),E.normalize(),f[D].vadd(f[J],N),G.copy(n),G.vsub(N,G),G.vsub(s,G);let W=G.dot(E);E.scale(W,F);let K=0;for(;K===D%3||K===J%3;)K++;z.copy(n),z.vsub(F,z),z.vsub(N,z),z.vsub(s,z);let ct=Math.abs(W),pt=z.length();if(ct<f[K].length()&&pt<g){if(d)return!0;y=!0;let at=this.createContactEquation(a,l,t,e,c,h);N.vadd(F,at.rj),at.rj.copy(at.rj),z.negate(at.ni),at.ni.normalize(),at.ri.copy(at.rj),at.ri.vadd(s,at.ri),at.ri.vsub(n,at.ri),at.ri.normalize(),at.ri.scale(g,at.ri),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),at.rj.vadd(s,at.rj),at.rj.vsub(l.position,at.rj),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult)}}u.release(E,N,G,F,z)}planeBox(t,e,n,s,o,r,a,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,o,r,a,l,t,e,d)}convexConvex(t,e,n,s,o,r,a,l,c,h,d,u,f){let g=Uw;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,o,s,r,g,u,f)){let y=[],m=Ow;t.clipAgainstHull(n,o,e,s,r,g,-100,100,y);let p=0;for(let v=0;v!==y.length;v++){if(d)return!0;let M=this.createContactEquation(a,l,t,e,c,h),w=M.ri,I=M.rj;g.negate(M.ni),y[v].normal.negate(m),m.scale(y[v].depth,m),y[v].point.vadd(m,w),I.copy(y[v].point),w.vsub(n,w),I.vsub(s,I),w.vadd(n,w),w.vsub(a.position,w),I.vadd(s,I),I.vsub(l.position,I),this.result.push(M),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,s,o,r,a,l,c,h,d){let u=this.v3pool;n.vsub(s,Ew);let f=e.faceNormals,g=e.faces,y=e.vertices,m=t.radius,p=!1;for(let v=0;v!==y.length;v++){let M=y[v],w=Rw;r.vmult(M,w),s.vadd(w,w);let I=Aw;if(w.vsub(n,I),I.lengthSquared()<m*m){if(d)return!0;p=!0;let A=this.createContactEquation(a,l,t,e,c,h);A.ri.copy(I),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(m,A.ri),w.vsub(s,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(s,A.rj),A.rj.vsub(l.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let v=0,M=g.length;v!==M&&p===!1;v++){let w=f[v],I=g[v],A=Cw;r.vmult(w,A);let C=Iw;r.vmult(y[I[0]],C),C.vadd(s,C);let L=Pw;A.scale(-m,L),n.vadd(L,L);let S=Nw;L.vsub(C,S);let E=S.dot(A),N=Lw;if(n.vsub(C,N),E<0&&N.dot(A)>0){let G=[];for(let F=0,z=I.length;F!==z;F++){let V=u.get();r.vmult(y[I[F]],V),s.vadd(V,V),G.push(V)}if(mw(G,A,n)){if(d)return!0;p=!0;let F=this.createContactEquation(a,l,t,e,c,h);A.scale(-m,F.ri),A.negate(F.ni);let z=u.get();A.scale(-E,z);let V=u.get();A.scale(-m,V),n.vsub(s,F.rj),F.rj.vadd(V,F.rj),F.rj.vadd(z,F.rj),F.rj.vadd(s,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),u.release(z),u.release(V),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let D=0,J=G.length;D!==J;D++)u.release(G[D]);return}else for(let F=0;F!==I.length;F++){let z=u.get(),V=u.get();r.vmult(y[I[(F+1)%I.length]],z),r.vmult(y[I[(F+2)%I.length]],V),s.vadd(z,z),s.vadd(V,V);let D=Sw;V.vsub(z,D);let J=Tw;D.unit(J);let W=u.get(),K=u.get();n.vsub(z,K);let ct=K.dot(J);J.scale(ct,W),W.vadd(z,W);let pt=u.get();if(W.vsub(n,pt),ct>0&&ct*ct<D.lengthSquared()&&pt.lengthSquared()<m*m){if(d)return!0;let at=this.createContactEquation(a,l,t,e,c,h);W.vsub(s,at.rj),W.vsub(n,at.ni),at.ni.normalize(),at.ni.scale(m,at.ri),at.rj.vadd(s,at.rj),at.rj.vsub(l.position,at.rj),at.ri.vadd(n,at.ri),at.ri.vsub(a.position,at.ri),this.result.push(at),this.createFrictionEquationsFromContact(at,this.frictionResult);for(let ee=0,$=G.length;ee!==$;ee++)u.release(G[ee]);u.release(z),u.release(V),u.release(W),u.release(pt),u.release(K);return}u.release(z),u.release(V),u.release(W),u.release(pt),u.release(K)}for(let F=0,z=G.length;F!==z;F++)u.release(G[F])}}}planeConvex(t,e,n,s,o,r,a,l,c,h,d){let u=Fw,f=Bw;f.set(0,0,1),o.vmult(f,f);let g=0,y=Dw;for(let m=0;m!==e.vertices.length;m++)if(u.copy(e.vertices[m]),r.vmult(u,u),s.vadd(u,u),u.vsub(n,y),f.dot(y)<=0){if(d)return!0;let v=this.createContactEquation(a,l,t,e,c,h),M=zw;f.scale(f.dot(y),M),u.vsub(M,M),M.vsub(n,v.ri),v.ni.copy(f),u.vsub(s,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(a.position,v.ri),v.rj.vadd(s,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,o,r,a,l,t,e,d)}sphereHeightfield(t,e,n,s,o,r,a,l,c,h,d){let u=e.data,f=t.radius,g=e.elementSize,y=Jw,m=jw;me.pointToLocalFrame(s,r,n,m);let p=Math.floor((m.x-f)/g)-1,v=Math.ceil((m.x+f)/g)+1,M=Math.floor((m.y-f)/g)-1,w=Math.ceil((m.y+f)/g)+1;if(v<0||w<0||p>u.length||M>u[0].length)return;p<0&&(p=0),v<0&&(v=0),M<0&&(M=0),w<0&&(w=0),p>=u.length&&(p=u.length-1),v>=u.length&&(v=u.length-1),w>=u[0].length&&(w=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);let I=[];e.getRectMinMax(p,M,v,w,I);let A=I[0],C=I[1];if(m.z-f>C||m.z+f<A)return;let L=this.result;for(let S=p;S<v;S++)for(let E=M;E<w;E++){let N=L.length,G=!1;if(e.getConvexTrianglePillar(S,E,!1),me.pointToWorldFrame(s,r,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,y,o,r,a,l,t,e,d)),d&&G||(e.getConvexTrianglePillar(S,E,!0),me.pointToWorldFrame(s,r,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(G=this.sphereConvex(t,e.pillarConvex,n,y,o,r,a,l,t,e,d)),d&&G))return!0;if(L.length-N>2)return}}boxHeightfield(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,o,r,a,l,t,e,d)}convexHeightfield(t,e,n,s,o,r,a,l,c,h,d){let u=e.data,f=e.elementSize,g=t.boundingSphereRadius,y=Zw,m=$w,p=Yw;me.pointToLocalFrame(s,r,n,p);let v=Math.floor((p.x-g)/f)-1,M=Math.ceil((p.x+g)/f)+1,w=Math.floor((p.y-g)/f)-1,I=Math.ceil((p.y+g)/f)+1;if(M<0||I<0||v>u.length||w>u[0].length)return;v<0&&(v=0),M<0&&(M=0),w<0&&(w=0),I<0&&(I=0),v>=u.length&&(v=u.length-1),M>=u.length&&(M=u.length-1),I>=u[0].length&&(I=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);let A=[];e.getRectMinMax(v,w,M,I,A);let C=A[0],L=A[1];if(!(p.z-g>L||p.z+g<C))for(let S=v;S<M;S++)for(let E=w;E<I;E++){let N=!1;if(e.getConvexTrianglePillar(S,E,!1),me.pointToWorldFrame(s,r,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,y,o,r,a,l,null,null,d,m,null)),d&&N||(e.getConvexTrianglePillar(S,E,!0),me.pointToWorldFrame(s,r,e.pillarOffset,y),n.distanceTo(y)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,y,o,r,a,l,null,null,d,m,null)),d&&N))return!0}}sphereParticle(t,e,n,s,o,r,a,l,c,h,d){let u=Gw;if(u.set(0,0,1),s.vsub(n,u),u.lengthSquared()<=t.radius*t.radius){if(d)return!0;let g=this.createContactEquation(l,a,e,t,c,h);u.normalize(),g.rj.copy(u),g.rj.scale(t.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,s,o,r,a,l,c,h,d){let u=kw;u.set(0,0,1),a.quaternion.vmult(u,u);let f=Vw;if(s.vsub(a.position,f),u.dot(f)<=0){if(d)return!0;let y=this.createContactEquation(l,a,e,t,c,h);y.ni.copy(u),y.ni.negate(y.ni),y.ri.set(0,0,0);let m=Hw;u.scale(u.dot(s),m),s.vsub(m,m),y.rj.copy(m),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}boxParticle(t,e,n,s,o,r,a,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,o,r,a,l,t,e,d)}convexParticle(t,e,n,s,o,r,a,l,c,h,d){let u=-1,f=qw,g=Xw,y=null,m=Ww;if(m.copy(s),m.vsub(n,m),o.conjugate(Kp),Kp.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,o),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(o);for(let p=0,v=t.faces.length;p!==v;p++){let M=[t.worldVertices[t.faces[p][0]]],w=t.worldFaceNormals[p];s.vsub(M[0],Qp);let I=-w.dot(Qp);if(y===null||Math.abs(I)<Math.abs(y)){if(d)return!0;y=I,u=p,f.copy(w)}}if(u!==-1){let p=this.createContactEquation(l,a,e,t,c,h);f.scale(y,g),g.vadd(s,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);let v=p.ri,M=p.rj;v.vadd(s,v),v.vsub(l.position,v),M.vadd(n,M),M.vsub(a.position,M),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,o,r,a,l,c,h,d){return this.convexHeightfield(e,t,s,n,r,o,l,a,c,h,d)}particleCylinder(t,e,n,s,o,r,a,l,c,h,d){return this.convexParticle(e,t,s,n,r,o,l,a,c,h,d)}sphereTrimesh(t,e,n,s,o,r,a,l,c,h,d){let u=ew,f=nw,g=iw,y=sw,m=ow,p=rw,v=hw,M=tw,w=K1,I=uw;me.pointToLocalFrame(s,r,n,m);let A=t.radius;v.lowerBound.set(m.x-A,m.y-A,m.z-A),v.upperBound.set(m.x+A,m.y+A,m.z+A),e.getTrianglesInAABB(v,I);let C=Q1,L=t.radius*t.radius;for(let F=0;F<I.length;F++)for(let z=0;z<3;z++)if(e.getVertex(e.indices[I[F]*3+z],C),C.vsub(m,w),w.lengthSquared()<=L){if(M.copy(C),me.pointToWorldFrame(s,r,M,C),C.vsub(n,w),d)return!0;let V=this.createContactEquation(a,l,t,e,c,h);V.ni.copy(w),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),V.rj.copy(C),V.rj.vsub(l.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(let F=0;F<I.length;F++)for(let z=0;z<3;z++){e.getVertex(e.indices[I[F]*3+z],u),e.getVertex(e.indices[I[F]*3+(z+1)%3],f),f.vsub(u,g),m.vsub(f,p);let V=p.dot(g);m.vsub(u,p);let D=p.dot(g);if(D>0&&V<0&&(m.vsub(u,p),y.copy(g),y.normalize(),D=p.dot(y),y.scale(D,p),p.vadd(u,p),p.distanceTo(m)<t.radius)){if(d)return!0;let W=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,W.ni),W.ni.normalize(),W.ni.scale(t.radius,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(a.position,W.ri),me.pointToWorldFrame(s,r,p,p),p.vsub(l.position,W.rj),me.vectorToWorldFrame(r,W.ni,W.ni),me.vectorToWorldFrame(r,W.ri,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}let S=aw,E=lw,N=cw,G=J1;for(let F=0,z=I.length;F!==z;F++){e.getTriangleVertices(I[F],S,E,N),e.getNormal(I[F],G),m.vsub(S,p);let V=p.dot(G);if(G.scale(V,p),m.vsub(p,p),V=p.distanceTo(m),Un.pointInTriangle(p,S,E,N)&&V<t.radius){if(d)return!0;let D=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,D.ni),D.ni.normalize(),D.ni.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),me.pointToWorldFrame(s,r,p,p),p.vsub(l.position,D.rj),me.vectorToWorldFrame(r,D.ni,D.ni),me.vectorToWorldFrame(r,D.ri,D.ri),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}}I.length=0}planeTrimesh(t,e,n,s,o,r,a,l,c,h,d){let u=new _,f=Z1;f.set(0,0,1),o.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,u);let y=new _;y.copy(u),me.pointToWorldFrame(s,r,y,u);let m=$1;if(u.vsub(n,m),f.dot(m)<=0){if(d)return!0;let v=this.createContactEquation(a,l,t,e,c,h);v.ni.copy(f);let M=j1;f.scale(m.dot(f),M),u.vsub(M,M),v.ri.copy(M),v.ri.vsub(a.position,v.ri),v.rj.copy(u),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}},qs=new _,Yo=new _,Zo=new _,W1=new _,q1=new _,X1=new Qe,Y1=new Qe,Z1=new _,$1=new _,j1=new _,J1=new _,K1=new _;new _;var Q1=new _,tw=new _,ew=new _,nw=new _,iw=new _,sw=new _,ow=new _,rw=new _,aw=new _,lw=new _,cw=new _,hw=new Rn,uw=[],Al=new _,Jp=new _,dw=new _,fw=new _,pw=new _;function mw(i,t,e){let n=null,s=i.length;for(let o=0;o!==s;o++){let r=i[o],a=dw;i[(o+1)%s].vsub(r,a);let l=fw;a.cross(t,l);let c=pw;e.vsub(r,c);let h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}var Rl=new _,gw=new _,yw=new _,xw=new _,vw=[new _,new _,new _,new _,new _,new _],_w=new _,bw=new _,ww=new _,Mw=new _,Ew=new _,Sw=new _,Tw=new _,Aw=new _,Rw=new _,Cw=new _,Iw=new _,Pw=new _,Nw=new _,Lw=new _;new _;new _;var Fw=new _,Bw=new _,Dw=new _,zw=new _,Uw=new _,Ow=new _,kw=new _,Vw=new _,Hw=new _,Gw=new _,Kp=new Qe,Ww=new _;new _;var qw=new _,Qp=new _,Xw=new _,Yw=new _,Zw=new _,$w=[0],jw=new _,Jw=new _,Ol=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),s=this.current,o=0;for(;n>s[o];)o++;if(n!==s[o]){for(let r=s.length-1;r>=o;r--)s[r+1]=s[r];s[o]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,s=this.previous,o=n.length,r=s.length,a=0;for(let l=0;l<o;l++){let c=!1,h=n[l];for(;h>s[a];)a++;c=h===s[a],c||tm(t,h)}a=0;for(let l=0;l<r;l++){let c=!1,h=s[l];for(;h>n[a];)a++;c=n[a]===h,c||tm(e,h)}}};function tm(i,t){i.push((t&4294901760)>>16,t&65535)}var Ou=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`,Zu=class{constructor(){this.data={keys:[]}}get(t,e){let n=Ou(t,e);return this.data[n]}set(t,e,n){let s=Ou(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){let n=Ou(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},kl=class extends Il{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new _,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new _,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Vu,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Wu,this.constraints=[],this.narrowphase=new Yu(this),this.collisionMatrix=new Cl,this.collisionMatrixPrevious=new Cl,this.bodyOverlapKeeper=new Ol,this.shapeOverlapKeeper=new Ol,this.contactmaterials=[],this.contactMaterialTable=new Zu,this.defaultMaterial=new gs("default"),this.defaultContactMaterial=new zl(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ms?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Un.ALL,n.from=t,n.to=e,n.callback=s,ku.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Un.ANY,n.from=t,n.to=e,n.result=s,ku.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Un.CLOSEST,n.from=t,n.to=e,n.result=s,ku.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof it&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let o=0;o!==n.length;o++)n[o].index=o;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let s=e[n].shapes;for(let o=0;o<s.length;o++){let r=s[o];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Ze.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let s=Ze.now(),o=0;for(;this.accumulator>=t&&o<n&&(this.internalStep(t),this.accumulator-=t,o++,!(Ze.now()-s>t*1e3)););this.accumulator=this.accumulator%t;let r=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){let l=this.bodies[a];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=nM,s=iM,o=this.bodies.length,r=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=it.DYNAMIC,u=-1/0,f=this.constraints,g=eM;l.length();let y=l.x,m=l.y,p=l.z,v=0;for(c&&(u=Ze.now()),v=0;v!==o;v++){let F=r[v];if(F.type===d){let z=F.force,V=F.mass;z.x+=V*y,z.y+=V*m,z.z+=V*p}}for(let F=0,z=this.subsystems.length;F!==z;F++)this.subsystems[F].update();c&&(u=Ze.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(h.broadphase=Ze.now()-u);let M=f.length;for(v=0;v!==M;v++){let F=f[v];if(!F.collideConnected)for(let z=n.length-1;z>=0;z-=1)(F.bodyA===n[z]&&F.bodyB===s[z]||F.bodyB===n[z]&&F.bodyA===s[z])&&(n.splice(z,1),s.splice(z,1))}this.collisionMatrixTick(),c&&(u=Ze.now());let w=tM,I=e.length;for(v=0;v!==I;v++)w.push(e[v]);e.length=0;let A=this.frictionEquations.length;for(v=0;v!==A;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,w,this.frictionEquations,g),c&&(h.narrowphase=Ze.now()-u),c&&(u=Ze.now()),v=0;v<this.frictionEquations.length;v++)a.addEquation(this.frictionEquations[v]);let C=e.length;for(let F=0;F!==C;F++){let z=e[F],V=z.bi,D=z.bj,J=z.si,W=z.sj,K;if(V.material&&D.material?K=this.getContactMaterial(V.material,D.material)||this.defaultContactMaterial:K=this.defaultContactMaterial,K.friction,V.material&&D.material&&(V.material.friction>=0&&D.material.friction>=0&&V.material.friction*D.material.friction,V.material.restitution>=0&&D.material.restitution>=0&&(z.restitution=V.material.restitution*D.material.restitution)),a.addEquation(z),V.allowSleep&&V.type===it.DYNAMIC&&V.sleepState===it.SLEEPING&&D.sleepState===it.AWAKE&&D.type!==it.STATIC){let ct=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),pt=D.sleepSpeedLimit**2;ct>=pt*2&&(V.wakeUpAfterNarrowphase=!0)}if(D.allowSleep&&D.type===it.DYNAMIC&&D.sleepState===it.SLEEPING&&V.sleepState===it.AWAKE&&V.type!==it.STATIC){let ct=V.velocity.lengthSquared()+V.angularVelocity.lengthSquared(),pt=V.sleepSpeedLimit**2;ct>=pt*2&&(D.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(V,D,!0),this.collisionMatrixPrevious.get(V,D)||(Ur.body=D,Ur.contact=z,V.dispatchEvent(Ur),Ur.body=V,D.dispatchEvent(Ur)),this.bodyOverlapKeeper.set(V.id,D.id),this.shapeOverlapKeeper.set(J.id,W.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Ze.now()-u,u=Ze.now()),v=0;v!==o;v++){let F=r[v];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(M=f.length,v=0;v!==M;v++){let F=f[v];F.update();for(let z=0,V=F.equations.length;z!==V;z++){let D=F.equations[z];a.addEquation(D)}}a.solve(t,this),c&&(h.solve=Ze.now()-u),a.removeAllEquations();let L=Math.pow;for(v=0;v!==o;v++){let F=r[v];if(F.type&d){let z=L(1-F.linearDamping,t),V=F.velocity;V.scale(z,V);let D=F.angularVelocity;if(D){let J=L(1-F.angularDamping,t);D.scale(J,D)}}}this.dispatchEvent(Qw),c&&(u=Ze.now());let E=this.stepnumber%(this.quatNormalizeSkip+1)===0,N=this.quatNormalizeFast;for(v=0;v!==o;v++)r[v].integrate(t,E,N);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Ze.now()-u),this.stepnumber+=1,this.dispatchEvent(Kw);let G=!0;if(this.allowSleep)for(G=!1,v=0;v!==o;v++){let F=r[v];F.sleepTick(this.time),F.sleepState!==it.SLEEPING&&(G=!0)}this.hasActiveBodies=G}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Oi,ki),t){for(let o=0,r=Oi.length;o<r;o+=2)Or.bodyA=this.getBodyById(Oi[o]),Or.bodyB=this.getBodyById(Oi[o+1]),this.dispatchEvent(Or);Or.bodyA=Or.bodyB=null}if(e){for(let o=0,r=ki.length;o<r;o+=2)kr.bodyA=this.getBodyById(ki[o]),kr.bodyB=this.getBodyById(ki[o+1]),this.dispatchEvent(kr);kr.bodyA=kr.bodyB=null}Oi.length=ki.length=0;let n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(Oi,ki),n){for(let o=0,r=Oi.length;o<r;o+=2){let a=this.getShapeById(Oi[o]),l=this.getShapeById(Oi[o+1]);Vi.shapeA=a,Vi.shapeB=l,a&&(Vi.bodyA=a.body),l&&(Vi.bodyB=l.body),this.dispatchEvent(Vi)}Vi.bodyA=Vi.bodyB=Vi.shapeA=Vi.shapeB=null}if(s){for(let o=0,r=ki.length;o<r;o+=2){let a=this.getShapeById(ki[o]),l=this.getShapeById(ki[o+1]);Hi.shapeA=a,Hi.shapeB=l,a&&(Hi.bodyA=a.body),l&&(Hi.bodyB=l.body),this.dispatchEvent(Hi)}Hi.bodyA=Hi.bodyB=Hi.shapeA=Hi.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}};new Rn;var ku=new Un,Ze=globalThis.performance||{};if(!Ze.now){let i=Date.now();Ze.timing&&Ze.timing.navigationStart&&(i=Ze.timing.navigationStart),Ze.now=()=>Date.now()-i}new _;var Kw={type:"postStep"},Qw={type:"preStep"},Ur={type:it.COLLIDE_EVENT_NAME,body:null,contact:null},tM=[],eM=[],nM=[],iM=[],Oi=[],ki=[],Or={type:"beginContact",bodyA:null,bodyB:null},kr={type:"endContact",bodyA:null,bodyB:null},Vi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Hi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var qe={DYN:1,PLAYER:2,STATIC:4};var x={scene:null,camera:null,renderer:null,world:null,ents:new Set,dummies:new Set,queue:[],timers:[],time:0,shake:0,player:null,aim:{origin:new b,dir:new b(0,0,-1),hand:new b},stats:{destroyed:0,booms:0,flings:0,best:0},lastBoom:{pos:new b,time:-99},sun:null,quality:1,mats:{},ropes:[],welds:[],projectiles:[],extraForces:[],blackholes:[],grab:null,timeScale:1,spawnId:"crate",waterY:-1,killY:-30,pads:[],spawn:null,mapId:"island"};try{x.stats.best=parseFloat(localStorage.getItem("fling_best")||"0")||0}catch{}function hm(){try{localStorage.setItem("fling_best",String(x.stats.best))}catch{}}function Qo(i,t){x.timers.push({t:x.time+i,fn:t})}function ti(i){x.queue.push(i)}var Bt=i=>new b(i.x,i.y,i.z),B=(i,t)=>i+Math.random()*(t-i),xe=(i,t,e)=>Math.max(t,Math.min(e,i)),Zs=new ms,lm=new _,cm=new _;function bn(i,t,e=qe.DYN|qe.STATIC){return Zs.reset(),lm.set(i.x,i.y,i.z),cm.set(t.x,t.y,t.z),x.world.raycastClosest(lm,cm,{collisionFilterMask:e,skipBackfaces:!0},Zs),Zs.hasHit?{body:Zs.body,point:Bt(Zs.hitPointWorld),normal:Bt(Zs.hitNormalWorld),dist:Zs.distance}:null}function Ku(i,t){let e=t*t;for(let n of x.world.bodies){if(n.type!==it.DYNAMIC)continue;let s=n.position.x-i.x,o=n.position.y-i.y,r=n.position.z-i.z;s*s+o*o+r*r<e&&n.wakeUp()}}var Hl=[];function kn(i,t,e="#fff",n=22){let s=document.createElement("div");s.className="popup",s.textContent=i,s.style.color=e,s.style.fontSize=n+"px",document.getElementById("popups").appendChild(s),Hl.push({el:s,pos:t.clone(),t:0})}var Vl=new b;function um(i){for(let t=Hl.length-1;t>=0;t--){let e=Hl[t];e.t+=i,e.pos.y+=i*1.5,Vl.copy(e.pos).project(x.camera);let n=Vl.z<1,s=(Vl.x*.5+.5)*window.innerWidth,o=(-Vl.y*.5+.5)*window.innerHeight;e.el.style.transform=`translate(-50%,-50%) translate(${s}px,${o}px) scale(${1+Math.max(0,.3-e.t)})`,e.el.style.opacity=n?String(Math.max(0,1-Math.max(0,e.t-1)/.6)):"0",e.t>1.6&&(e.el.remove(),Hl.splice(t,1))}}var Gl=0;function de(i,t=1.6){let e=document.getElementById("toast");e.textContent=i,e.style.opacity="1",Gl=t}function dm(i){Gl>0&&(Gl-=i,Gl<=0&&(document.getElementById("toast").style.opacity="0"))}var he=null,pi=null,Gr=null,qr=null,$s=!1,Wl=.8,ed=null,Qu=0,sM=26,Vn={x:0,y:0,z:0,rx:1,ry:0,rz:0};function nd(){if(he){he.state==="suspended"&&he.resume();return}try{he=new(window.AudioContext||window.webkitAudioContext),Gr=he.createDynamicsCompressor(),Gr.threshold.value=-18,Gr.ratio.value=6,pi=he.createGain(),pi.gain.value=$s?0:.7*Wl,pi.connect(Gr),Gr.connect(he.destination),ed=he.createBuffer(1,he.sampleRate*2,he.sampleRate);let i=ed.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;qr=he.createConvolver();let t=he.sampleRate*1.2,e=he.createBuffer(2,t,he.sampleRate);for(let s=0;s<2;s++){let o=e.getChannelData(s);for(let r=0;r<t;r++)o[r]=(Math.random()*2-1)*Math.pow(1-r/t,3)}qr.buffer=e;let n=he.createGain();n.gain.value=.18,qr.connect(n),n.connect(pi)}catch{he=null}}function pm(){return $s=!$s,pi&&(pi.gain.value=$s?0:.7*Wl),$s}function mm(i){Wl=i,pi&&(pi.gain.value=$s?0:.7*Wl)}function gm(i,t){Vn.x=i.x,Vn.y=i.y,Vn.z=i.z,Vn.rx=t.x,Vn.ry=t.y,Vn.rz=t.z}var td={};function Ve(i,t){let e=performance.now();return td[i]&&e-td[i]<t?!0:(td[i]=e,!1)}function Vt(i,t,e,n=!1){if(!he||$s||Qu>=sM&&!n)return null;let s=1,o=0,r=2e4;if(i){let h=i.x-Vn.x,d=i.y-Vn.y,u=i.z-Vn.z,f=Math.hypot(h,d,u);if(f>t)return null;let g=1-f/t;if(s=g*g,s<.01)return null;o=f>.5?Math.max(-.85,Math.min(.85,(h*Vn.rx+d*Vn.ry+u*Vn.rz)/f)):0,r=1200+18e3*g*g}if(!Number.isFinite(s)||!Number.isFinite(o)||!Number.isFinite(r))return null;let a=he.createGain();a.gain.value=s;let l=he.createBiquadFilter();l.type="lowpass",l.frequency.value=r;let c=he.createStereoPanner?he.createStereoPanner():null;return a.connect(l),c?(c.pan.value=o,l.connect(c),c.connect(pi),c.connect(qr)):(l.connect(pi),l.connect(qr)),Qu++,setTimeout(()=>{Qu--;try{a.disconnect()}catch{}},(e+.2)*1e3),a}function id(i,t,e,n,s){i.gain.setValueAtTime(1e-4,t),i.gain.linearRampToValueAtTime(e,t+n),i.gain.exponentialRampToValueAtTime(1e-4,t+s)}function $t(i,t,e,n,s,o="lowpass",r=0,a=.003){let l=he.currentTime+r,c=he.createBufferSource();c.buffer=ed;let h=he.createBiquadFilter();h.type=o,h.frequency.value=e,h.Q.value=n;let d=he.createGain();id(d,l,s,a,t),c.connect(h),h.connect(d),d.connect(i),c.start(l,Math.random()*1.5),c.stop(l+t+.05)}function Qt(i,t,e,n,s,o,r=0,a=.004){let l=he.currentTime+r,c=he.createOscillator();c.type=t,c.frequency.setValueAtTime(e,l),c.frequency.exponentialRampToValueAtTime(Math.max(1,n),l+s);let h=he.createGain();id(h,l,o,a,s),c.connect(h),h.connect(i),c.start(l),c.stop(l+s+.05)}function Wr(i,t,e,n,s,o=0){e.forEach((r,a)=>Qt(i,"sine",t*r,t*r*.995,n/(1+a*.5),s/(1+a*.7),o))}function fm(i,t,e,n,s,o=[700,1150]){let r=he.currentTime,a=he.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(t,r),a.frequency.linearRampToValueAtTime(e,r+n);let l=he.createGain();id(l,r,s,.02,n);for(let c of o){let h=he.createBiquadFilter();h.type="bandpass",h.frequency.value=c,h.Q.value=6,a.connect(h),h.connect(l)}l.connect(i),a.start(r),a.stop(r+n+.05)}var De=(i,t)=>i+Math.random()*(t-i),lt={explosion(i=1,t=null){if(Ve("boom",50))return;let e=Vt(t,260,3,!0);if(!e)return;let n=Math.min(1.6,i);Qt(e,"sine",95,28,1.1*n,1),$t(e,1.8*n,520,.6,.9,"lowpass"),$t(e,.25,2500,.5,.5,"highpass");for(let s=0;s<6;s++)$t(e,De(.05,.15),De(1500,4e3),2,.25,"bandpass",De(.08,.8))},impact(i,t,e=null){if(Ve("imp_"+i,35))return;let n=Math.min(.5,t*.035),s=Vt(e,45,1);s&&(i==="metal"||i==="gold"||i==="heavy"||i==="appliance"||i==="car"?Wr(s,De(260,520),[1,2.76,5.4,8.93],.7,n*.6):i==="glass"||i==="crystal"||i==="ice"?Wr(s,De(1600,2600),[1,2.3,3.9],.35,n*.4):i==="rubber"||i==="beach"||i==="jelly"?Qt(s,"sine",De(110,160),De(260,340),.18,n*.8):i==="stone"||i==="brick"||i==="rock"||i==="concrete"?($t(s,.22,260,1,n*1.1),Qt(s,"sine",85,50,.15,n*.6)):i==="plastic"||i==="tnt"?($t(s,.07,2200,3,n*.7,"bandpass"),Qt(s,"triangle",420,380,.06,n*.3)):i==="flesh"||i==="bouncyflesh"||i==="fruit"||i==="foam"||i==="snow"||i==="hay"||i==="cactus"?$t(s,.12,220,1,n*.9):($t(s,.12,De(650,950),3,n,"bandpass"),Qt(s,"triangle",De(150,210),120,.1,n*.5)))},crack(i=null){if(Ve("crack",40))return;let t=Vt(i,60,.6);if(t){for(let e=0;e<4;e++)$t(t,De(.04,.1),De(700,1600),4,.35,"bandpass",e*De(.02,.05));$t(t,.3,300,1,.3)}},crumble(i=null){if(Ve("crumble",40))return;let t=Vt(i,60,.9);if(t){$t(t,.6,400,.7,.5);for(let e=0;e<5;e++)$t(t,.06,De(300,900),3,.25,"bandpass",De(0,.4))}},shatter(i=null){if(Ve("glass",50))return;let t=Vt(i,60,1);if(t){$t(t,.35,5e3,1,.3,"highpass");for(let e=0;e<7;e++)Wr(t,De(2500,5e3),[1,2.4],De(.1,.3),.07,De(0,.35))}},splat(i=null){if(Ve("splat",60))return;let t=Vt(i,40,.5);t&&($t(t,.25,600,.8,.5),$t(t,.15,1800,2,.15,"bandpass",.05))},shoot(){if(Ve("shoot",30))return;let i=Vt(null,0,.3);i&&($t(i,.09,3500,.7,.35,"highpass"),Qt(i,"square",180,60,.08,.15))},minigun(){if(Ve("mini",40))return;let i=Vt(null,0,.2);i&&($t(i,.05,2500,.8,.25,"highpass"),Qt(i,"square",120,70,.04,.08))},shotgun(){let i=Vt(null,0,.6,!0);i&&($t(i,.35,1400,.7,.7),Qt(i,"sine",110,40,.25,.6),$t(i,.05,4e3,1,.3,"highpass"))},rail(){let i=Vt(null,0,.6);i&&(Qt(i,"sawtooth",2200,90,.45,.12),Qt(i,"sine",600,40,.4,.3),$t(i,.25,6e3,1,.2,"highpass"))},zap(i=null){let t=Vt(i,80,.5);if(t){for(let e=0;e<4;e++)Qt(t,"square",De(800,2400),De(60,200),.12,.06,e*.03);$t(t,.3,3e3,2,.25,"bandpass")}},rocket(){let i=Vt(null,0,.6);i&&($t(i,.5,900,.8,.4),Qt(i,"sawtooth",160,60,.4,.08))},flame(){if(Ve("flame",80))return;let i=Vt(null,0,.3);i&&$t(i,.2,700,.5,.22)},push(){let i=Vt(null,0,.5);i&&($t(i,.4,500,.7,.5),Qt(i,"sine",140,50,.3,.4))},whack(i=null){let t=Vt(i,50,.4);t&&($t(t,.1,1200,1.5,.6,"bandpass"),Qt(t,"triangle",240,90,.12,.4))},swoosh(){let i=Vt(null,0,.3);i&&$t(i,.22,1800,1.5,.18,"bandpass",0,.06)},ray(){if(Ve("ray",60))return;let i=Vt(null,0,.3);i&&(Qt(i,"sine",900,1500,.15,.1),Qt(i,"triangle",1800,2600,.12,.04))},freeze(i=null){let t=Vt(i,40,.4);t&&(Wr(t,3e3,[1,1.5,2.2],.3,.08),$t(t,.25,7e3,1,.1,"highpass"))},grow(){let i=Vt(null,0,.4);i&&Qt(i,"sine",180,620,.3,.18)},shrink(){let i=Vt(null,0,.4);i&&Qt(i,"sine",720,180,.3,.18)},teleport(){let i=Vt(null,0,.4);i&&(Qt(i,"sine",300,1800,.25,.14),Qt(i,"triangle",1800,300,.25,.05,.1))},weld(i=null){let t=Vt(i,30,.4);t&&$t(t,.3,4500,3,.25,"bandpass")},whir(i){if(Ve("whir",90))return;let t=Vt(null,0,.2);t&&Qt(t,"sawtooth",60+i*200,80+i*260,.1,.04)},hum(){if(Ve("hum",110))return;let i=Vt(null,0,.2);i&&Qt(i,"sine",110,118,.12,.07)},grab(){let i=Vt(null,0,.2);i&&(Qt(i,"sine",380,700,.09,.14),$t(i,.05,3e3,2,.08,"bandpass"))},drop(){let i=Vt(null,0,.2);i&&Qt(i,"sine",600,300,.1,.1)},fling(){let i=Vt(null,0,.4);i&&($t(i,.3,1400,1.2,.3,"bandpass",0,.02),Qt(i,"sine",250,900,.18,.12))},jump(){let i=Vt(null,0,.2);i&&$t(i,.08,500,1,.12)},land(i){if(Ve("land",150))return;let t=Vt(null,0,.3);t&&$t(t,.15,250,1,Math.min(.5,i*.03))},oof(i=null,t=160){if(Ve("oof",90))return;let e=Vt(i,35,.5);if(!e)return;let n=[[700,1150],[500,900],[400,1900],[600,1e3]];fm(e,t*De(.95,1.1),t*De(.6,.75),De(.18,.3),.5,n[Math.random()*n.length|0])},groan(i=null){if(Ve("groan",1200))return;let t=Vt(i,30,1);t&&fm(t,85,70,.8,.4,[450,800])},boing(i=null){if(Ve("boing",80))return;let t=Vt(i,50,.4);t&&(Qt(t,"sine",150,650,.3,.3),Qt(t,"triangle",300,1300,.2,.06))},pop(i=null){let t=Vt(i,40,.2);t&&(Qt(t,"sine",700,250,.08,.2),$t(t,.04,3e3,1,.15,"highpass"))},squeak(i=null){if(Ve("squeak",150))return;let t=Vt(i,30,.3);t&&Qt(t,"square",1500,950,.14,.05)},piano(i,t=null){if(Ve("piano",120))return;let e=Vt(t,50,1.2);if(!e)return;let n=[261.6,311.1,349.2,392,466.2,523.3];for(let s=0;s<3;s++)Wr(e,n[Math.random()*n.length|0]*(s?.5:1),[1,2,3.01],1,Math.min(.15,i*.012))},splash(i=null){if(Ve("splash",90))return;let t=Vt(i,50,.6);t&&($t(t,.45,1300,.6,.35),$t(t,.2,400,1,.2))},sizzle(i=null){let t=Vt(i,30,.7);t&&$t(t,.6,6500,.6,.15,"highpass")},fuse(i=null){if(Ve("fuse",220))return;let t=Vt(i,20,.3);t&&$t(t,.25,6e3,1,.08,"highpass")},hiss(i=null){let t=Vt(i,40,2);t&&$t(t,1.8,4e3,.5,.15,"highpass")},whistle(i=1.2,t=null){let e=Vt(t,200,i);e&&Qt(e,"sine",1800,500,i,.06)},beep(i=null){let t=Vt(i,25,.1);t&&Qt(t,"square",1500,1500,.07,.06)},blackhole(i=null){let t=Vt(i,120,4,!0);t&&(Qt(t,"sine",60,20,3.5,.45),Qt(t,"sawtooth",200,40,3.5,.05))},plane(){let i=Vt(null,0,2.2);i&&($t(i,2,300,.6,.2,"lowpass",0,.5),Qt(i,"sawtooth",110,90,2,.04,0,.5))},fire(i=null){if(Ve("fire",140))return;let t=Vt(i,25,.3);t&&$t(t,.12,De(900,2500),3,.08,"bandpass")},thunk(i,t=null){this.impact("wood",i,t)}};var tr={sens:2.2,volume:.8,fov:72,quality:"high",invertY:!1,time:"day"},tn={...tr};try{let i=JSON.parse(localStorage.getItem("fling_settings")||"null");if(i&&typeof i=="object")for(let e in tr)e in i&&typeof i[e]==typeof tr[e]&&(tn[e]=i[e]);let t=parseFloat(localStorage.getItem("fling_sens"));!i&&t&&(tn.sens=t*1e3)}catch{}x.settings=tn;function oM(){try{localStorage.setItem("fling_settings",JSON.stringify(tn))}catch{}}var Xr={};function ql(i,t){Xr[i]=t}function js(i,t){tn[i]=t,oM(),Xr[i]&&Xr[i](t)}function ym(){for(let i in Xr)Xr[i](tn[i])}var Ad={};w0(Ad,{CATALOG:()=>xs,ITEMS:()=>Kt,MAT:()=>yi,Strand:()=>ys,addFirePatch:()=>Sd,addRope:()=>Yi,addWeld:()=>qi,breakEnt:()=>jr,buildPrefab:()=>jt,createEnt:()=>Gt,damage:()=>vs,detonate:()=>Xi,dummyFromBody:()=>Pm,explode:()=>Pn,freeze:()=>Md,halfHeight:()=>Kr,ignite:()=>$i,initMaterials:()=>xd,launchFireworks:()=>ic,makeGhost:()=>vd,paint:()=>Ed,physicsForces:()=>bd,popBalloon:()=>Jr,removeEnt:()=>Ge,removeRope:()=>Qs,scaleEnt:()=>sc,spawnItem:()=>Nn,syncEnt:()=>_d,unfreeze:()=>Zi,updateEnts:()=>wd,updateFirePatches:()=>Td,visMat:()=>yd});var sd={};function te(i,t,e){if(sd[i])return sd[i];let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d");e(s,t);let o=new al(n);return o.colorSpace=xn,o.magFilter=Sn,o.anisotropy=4,sd[i]=o,o}function Js(i,t,e,n,s=1,o=3){for(let r=0;r<e;r++){i.fillStyle=n[Math.random()*n.length|0];let a=s+Math.random()*(o-s);i.fillRect(Math.random()*t,Math.random()*t,a,a)}}var Xl={crate:()=>te("crate",64,(i,t)=>{i.fillStyle="#b07a3e",i.fillRect(0,0,t,t);for(let e=0;e<4;e++)i.fillStyle=e%2?"#a26f36":"#b8834a",i.fillRect(0,e*16,t,16);i.fillStyle="#7a4f22",i.fillRect(0,0,t,7),i.fillRect(0,t-7,t,7),i.fillRect(0,0,7,t),i.fillRect(t-7,0,7,t),i.save(),i.translate(t/2,t/2),i.rotate(Math.PI/4),i.fillRect(-5,-44,10,88),i.restore(),Js(i,t,60,["#6d4520","#c99359"])}),plank:()=>te("plank",64,(i,t)=>{i.fillStyle="#c08a4f",i.fillRect(0,0,t,t),i.strokeStyle="#9c6a35",i.lineWidth=2;for(let e=0;e<7;e++)i.beginPath(),i.moveTo(0,5+e*9),i.bezierCurveTo(20,e*9+Math.random()*6,40,8+e*9,t,4+e*9),i.stroke()}),log:()=>te("log",64,(i,t)=>{i.fillStyle="#6b4526",i.fillRect(0,0,t,t),i.fillStyle="#4e301a";for(let e=0;e<10;e++)i.fillRect(e*7+Math.random()*3,0,2,t);Js(i,t,80,["#7d5532","#3e2614"])}),stone:()=>te("stone",64,(i,t)=>{i.fillStyle="#8c9096",i.fillRect(0,0,t,t),Js(i,t,200,["#7a7e84","#9ea3a8","#6d7075","#a9adb2"],2,6),i.strokeStyle="#5d6065",i.lineWidth=2,i.strokeRect(1,1,t-2,t-2)}),brick:()=>te("brick",64,(i,t)=>{i.fillStyle="#d8cfc4",i.fillRect(0,0,t,t);for(let e=0;e<4;e++)for(let n=-1;n<3;n++)i.fillStyle=["#a8452f","#b54e36","#9a3d29"][(e+n+3)%3],i.fillRect(n*32+e%2*16+2,e*16+2,28,12)}),metal:()=>te("metal",64,(i,t)=>{i.fillStyle="#8f99a3",i.fillRect(0,0,t,t),i.fillStyle="#a6b0ba",i.fillRect(4,4,t-8,t-8),i.fillStyle="#6c757e";for(let[e,n]of[[8,8],[t-10,8],[8,t-10],[t-10,t-10]])i.fillRect(e,n,3,3);i.fillStyle="rgba(255,255,255,0.15)",i.fillRect(10,20,t-20,4)}),tnt:()=>te("tnt",64,(i,t)=>{i.fillStyle="#d42a1e",i.fillRect(0,0,t,t),i.fillStyle="#a81d13";for(let e=0;e<4;e++)i.fillRect(e*16,0,3,t);i.fillStyle="#f2efe6",i.fillRect(0,22,t,20),i.fillStyle="#111",i.font="bold 17px monospace",i.textAlign="center",i.fillText("TNT",t/2,38)}),barrel:()=>te("barrel",64,(i,t)=>{i.fillStyle="#c2271d",i.fillRect(0,0,t,t),i.fillStyle="#8a1a13",i.fillRect(0,8,t,4),i.fillRect(0,t-12,t,4),i.fillStyle="#ffd31a",i.fillRect(0,24,t,16),i.fillStyle="#111";for(let e=-1;e<9;e++)i.beginPath(),i.moveTo(e*8,40),i.lineTo(e*8+4,40),i.lineTo(e*8+12,24),i.lineTo(e*8+8,24),i.fill()}),drum:()=>te("drum",64,(i,t)=>{i.fillStyle="#2f6b3a",i.fillRect(0,0,t,t),i.fillStyle="#244f2b",i.fillRect(0,10,t,4),i.fillRect(0,t-14,t,4),i.fillStyle="#111",i.fillRect(0,26,t,12),i.fillStyle="#ddd",i.font="bold 10px monospace",i.textAlign="center",i.fillText("OIL",t/2,35)}),gas:()=>te("gas",64,(i,t)=>{i.fillStyle="#e8e8e8",i.fillRect(0,0,t,t),i.fillStyle="#1f6fd1",i.fillRect(0,20,t,24),i.fillStyle="#fff",i.font="bold 12px monospace",i.textAlign="center",i.fillText("GAS",t/2,37)}),nuke:()=>te("nuke",64,(i,t)=>{i.fillStyle="#e2c21d",i.fillRect(0,0,t,t),i.fillStyle="#111",i.beginPath(),i.arc(t/2,t/2,5,0,Math.PI*2),i.fill();for(let e=0;e<3;e++){let n=e*Math.PI*2/3-Math.PI/2;i.beginPath(),i.moveTo(t/2,t/2),i.arc(t/2,t/2,22,n-.5,n+.5),i.fill()}i.fillStyle="#e2c21d",i.beginPath(),i.arc(t/2,t/2,8,0,Math.PI*2),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(t/2,t/2,5,0,Math.PI*2),i.fill()}),firework:()=>te("firework",64,(i,t)=>{let e=["#e83f6f","#ffbf00","#2274a5","#32936f"];for(let n=0;n<8;n++)i.fillStyle=e[n%4],i.fillRect(0,n*8,t,8);i.fillStyle="#fff";for(let n=0;n<12;n++)i.fillRect(Math.random()*t,Math.random()*t,3,3)}),melon:()=>te("melon",64,(i,t)=>{i.fillStyle="#3f8f2a",i.fillRect(0,0,t,t),i.fillStyle="#21581a";for(let e=0;e<6;e++)i.fillRect(e*11,0,5,t)}),present:()=>te("present",64,(i,t)=>{i.fillStyle="#d63a8a",i.fillRect(0,0,t,t),i.fillStyle="#ffd84a",i.fillRect(t/2-5,0,10,t),i.fillRect(0,t/2-5,t,10),i.fillStyle="rgba(255,255,255,.3)";for(let e=0;e<10;e++)i.fillRect(Math.random()*t,Math.random()*t,4,4)}),dice:()=>te("dice",64,(i,t)=>{i.fillStyle="#f7f4ee",i.fillRect(0,0,t,t),i.fillStyle="#c22",i.fillRect(0,0,t,3),i.fillRect(0,t-3,t,3),i.fillRect(0,0,3,t),i.fillRect(t-3,0,3,t),i.fillStyle="#111";for(let[e,n]of[[16,16],[48,16],[32,32],[16,48],[48,48]])i.beginPath(),i.arc(e,n,6,0,Math.PI*2),i.fill()}),fridge:()=>te("fridge",64,(i,t)=>{i.fillStyle="#eef2f4",i.fillRect(0,0,t,t),i.fillStyle="#c5cdd2",i.fillRect(0,22,t,2),i.fillStyle="#7b858c",i.fillRect(50,8,4,10),i.fillRect(50,30,4,18)}),piano:()=>te("piano",64,(i,t)=>{i.fillStyle="#1a1a1e",i.fillRect(0,0,t,t),i.fillStyle="#2b2b31",i.fillRect(4,4,t-8,t-8)}),keys:()=>te("keys",64,(i,t)=>{i.fillStyle="#f5f5f0",i.fillRect(0,0,t,t),i.fillStyle="#111";for(let e=0;e<8;e++)i.fillRect(e*8+7,0,1,t),e%7!==2&&e%7!==6&&i.fillRect(e*8+5,0,5,t*.6)}),car:()=>te("car",64,(i,t)=>{i.fillStyle="#2b7de9",i.fillRect(0,0,t,t),i.fillStyle="rgba(255,255,255,0.2)",i.fillRect(0,10,t,6)}),window:()=>te("window",64,(i,t)=>{i.fillStyle="#9fd3f2",i.fillRect(0,0,t,t),i.fillStyle="#d8f0ff",i.fillRect(8,6,10,t-12),i.fillStyle="#333",i.fillRect(0,0,t,4),i.fillRect(0,t-4,t,4)}),gold:()=>te("gold",64,(i,t)=>{i.fillStyle="#e7b416",i.fillRect(0,0,t,t),i.fillStyle="#ffd95a",i.fillRect(6,6,t-12,8),i.fillStyle="#b8860b",i.fillRect(0,t-8,t,8)}),cone:()=>te("cone",64,(i,t)=>{i.fillStyle="#ff6a13",i.fillRect(0,0,t,t),i.fillStyle="#fff",i.fillRect(0,18,t,10),i.fillRect(0,40,t,10)}),tire:()=>te("tire",64,(i,t)=>{i.fillStyle="#222",i.fillRect(0,0,t,t),i.fillStyle="#333";for(let e=0;e<8;e++)i.fillRect(e*8,0,4,t)}),duck:()=>te("duck",16,(i,t)=>{i.fillStyle="#ffd500",i.fillRect(0,0,t,t)}),ball:()=>te("ball",64,(i,t)=>{i.fillStyle="#fff",i.fillRect(0,0,t,t),i.fillStyle="#111";for(let[e,n]of[[10,10],[42,18],[22,42],[54,50]])i.beginPath(),i.arc(e,n,7,0,Math.PI*2),i.fill()}),beach:()=>te("beach",64,(i,t)=>{let e=["#ff3b3b","#fff","#2d7cff","#fff","#ffd400","#fff","#22c55e","#fff"];for(let n=0;n<8;n++)i.fillStyle=e[n],i.fillRect(n*8,0,8,t)}),basket:()=>te("basket",64,(i,t)=>{i.fillStyle="#e8701a",i.fillRect(0,0,t,t),i.fillStyle="#3a1d08",i.fillRect(0,t/2-1,t,2),i.fillRect(t/2-1,0,2,t)}),couch:()=>te("couch",64,(i,t)=>{i.fillStyle="#7b4bb3",i.fillRect(0,0,t,t),Js(i,t,120,["#6c3fa0","#8a5cc4"])}),bed:()=>te("bed",64,(i,t)=>{i.fillStyle="#e9e4ff",i.fillRect(0,0,t,t),i.fillStyle="#9d8cf2";for(let e=0;e<8;e++)i.fillRect(e*8,0,3,t)}),jelly:()=>te("jelly",16,(i,t)=>{i.fillStyle="#ff4fa3",i.fillRect(0,0,t,t)}),concrete:()=>te("concrete",64,(i,t)=>{i.fillStyle="#a8a8a2",i.fillRect(0,0,t,t),Js(i,t,260,["#9d9d97","#b3b3ad","#929289"],1,3),i.fillStyle="#86867f",i.fillRect(0,0,t,2),i.fillRect(0,0,2,t)}),hay:()=>te("hay",64,(i,t)=>{i.fillStyle="#d9b64a",i.fillRect(0,0,t,t),i.strokeStyle="#b8932c",i.lineWidth=1;for(let e=0;e<40;e++){i.beginPath();let n=Math.random()*t,s=Math.random()*t;i.moveTo(n,s),i.lineTo(n+Math.random()*14-7,s+3),i.stroke()}i.fillStyle="#8a6a1c",i.fillRect(0,18,t,3),i.fillRect(0,44,t,3)}),grass:()=>te("grass",128,(i,t)=>{i.fillStyle="#5fae4a",i.fillRect(0,0,t,t),Js(i,t,500,["#57a443","#68b853","#4f9a3c","#73c25d"],2,5)}),sand:()=>te("sand",64,(i,t)=>{i.fillStyle="#e9d29a",i.fillRect(0,0,t,t),Js(i,t,200,["#dcc287","#f2dfae","#d4b77a"])}),pad:()=>te("pad",64,(i,t)=>{i.fillStyle="#222",i.fillRect(0,0,t,t),i.fillStyle="#39ff9c",i.beginPath(),i.moveTo(t/2,8),i.lineTo(t-12,30),i.lineTo(12,30),i.fill(),i.beginPath(),i.moveTo(t/2,30),i.lineTo(t-12,52),i.lineTo(12,52),i.fill()})};var xm=new Fe(1,1,1),vm=new An(.5,0),wm=new je(1,1,1,5,1,!0);wm.translate(0,.5,0);var Mm=new ds(1,.08,4,24);Mm.rotateX(Math.PI/2);var rM=new An(1,1),Em=[],Sm=[],Yl=[],Zl=[],$l=[],er=[],nr=null,Ks=0;function Tm(i){for(let t=0;t<350;t++){let e=new Et(t%2?xm:vm,new ue({flatShading:!0,roughness:.9,transparent:!0}));e.visible=!1,e.castShadow=!1,i.add(e),Em.push(e)}for(let t=0;t<350;t++){let e=new Et(t%2?vm:xm,new Se({transparent:!0,depthWrite:!1}));e.visible=!1,i.add(e),Sm.push(e)}for(let t=0;t<40;t++){let e=new Et(wm,new Se({transparent:!0,depthWrite:!1,blending:Ar}));e.visible=!1,e.frustumCulled=!1,i.add(e),Yl.push({m:e,life:0,max:0,w:0})}for(let t=0;t<12;t++){let e=new Et(Mm,new Se({transparent:!0,depthWrite:!1}));e.visible=!1,i.add(e),Zl.push({m:e,life:0,max:0,size:0})}for(let t=0;t<12;t++){let e=new Et(rM,new Se({transparent:!0,depthWrite:!1,color:16753434}));e.visible=!1,i.add(e),$l.push({m:e,life:0,max:0,size:0})}nr=new yl(16755285,0,40,1.5),i.add(nr)}var _m=0,bm=0;function aM(i,t){let e=t?bm=(bm+1)%i.length:_m=(_m+1)%i.length,n=i[e];if(n.userData.p){let s=er.indexOf(n.userData.p);s>=0&&er.splice(s,1)}return n}function le(i){let t=!!i.glow,e=aM(t?Sm:Em,t);e.visible=!0,e.position.copy(i.pos),e.material.color.set(i.color??16777215),e.material.opacity=i.opacity??1,t&&(e.material.blending=i.add?Ar:as),e.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6);let n={m:e,vel:i.vel?i.vel.clone():new b,life:0,max:i.life??1,size:i.size??.2,grow:i.grow??0,grav:i.gravity??9.8,drag:i.drag??.5,fade:i.fade??!0,spin:i.spin??5,shrink:i.shrink??!0,floor:i.floor??!0,op:i.opacity??1};return e.scale.setScalar(n.size),e.userData.p=n,er.push(n),n}function Am(i){for(let t=er.length-1;t>=0;t--){let e=er[t];e.life+=i;let n=e.life/e.max;if(n>=1){e.m.visible=!1,e.m.userData.p=null,er.splice(t,1);continue}e.vel.y-=e.grav*i,e.vel.multiplyScalar(Math.max(0,1-e.drag*i)),e.m.position.addScaledVector(e.vel,i);let s=e.floor&&x.groundAt?x.groundAt(e.m.position.x,e.m.position.z)+.05:-1e9;e.m.position.y<s&&(e.m.position.y=s,e.vel.y*=-.3,e.vel.x*=.6,e.vel.z*=.6),e.m.rotation.x+=e.spin*i,e.m.rotation.y+=e.spin*i*.7;let o=e.size*(1+e.grow*n);e.shrink&&(o*=1-n*n),e.m.scale.setScalar(Math.max(.001,o)),e.fade&&(e.m.material.opacity=e.op*(1-n))}for(let t of Yl){if(t.life<=0)continue;if(t.life-=i,t.life<=0){t.m.visible=!1;continue}let e=t.life/t.max;t.m.material.opacity=e,t.m.scale.x=t.m.scale.z=t.w*(.4+.6*e)}for(let t of Zl){if(t.life<=0)continue;if(t.life-=i,t.life<=0){t.m.visible=!1;continue}let e=1-t.life/t.max;t.m.scale.setScalar(.5+t.size*Math.sqrt(e)),t.m.material.opacity=1-e}for(let t of $l){if(t.life<=0)continue;if(t.life-=i,t.life<=0){t.m.visible=!1;continue}let e=1-t.life/t.max;t.m.scale.setScalar(t.size*(.3+.9*Math.sqrt(e))),t.m.material.opacity=1-e,t.m.material.color.setHSL(.1-e*.1,1,.6-e*.4)}Ks>0&&(Ks=Math.max(0,Ks-i*60),nr.intensity=Ks)}var lM=new b(0,1,0),od=new b;function Wi(i,t,e=16773754,n=.04,s=.08){let o=Yl.find(a=>a.life<=0)||Yl[0];od.subVectors(t,i);let r=od.length();r<.01||(o.m.position.copy(i),o.m.quaternion.setFromUnitVectors(lM,od.normalize()),o.m.scale.set(n,r,n),o.m.material.color.set(e),o.m.material.opacity=1,o.m.visible=!0,o.life=o.max=s,o.w=n)}function rd(i,t,e=11065599){let s=i.clone();for(let o=1;o<=7;o++){let r=i.clone().lerp(t,o/7);o<7&&r.add(new b(B(-.6,.6),B(-.6,.6),B(-.6,.6))),Wi(s,r,e,.07,.18),s=r}}function ir(i,t,e=16777215,n=.5){let s=Zl.find(o=>o.life<=0)||Zl[0];s.m.position.copy(i),s.m.material.color.set(e),s.m.visible=!0,s.life=s.max=n,s.size=t}function ad(i,t,e=.6){let n=$l.find(s=>s.life<=0)||$l[0];n.m.position.copy(i),n.m.visible=!0,n.life=n.max=e,n.size=t}function sr(i,t=60,e=16755285){nr.position.copy(i),nr.color.set(e),Ks=Math.max(Ks,t),nr.intensity=Ks}var cM=new b;function mi(i=1){return cM.set(B(-1,1),B(-1,1),B(-1,1)).normalize().multiplyScalar(i).clone()}function Rm(i,t=1){ad(i,3.2*t,.55+.15*t),ir(i.clone().setY(Math.max(i.y,.2)),9*t,16773572,.45),sr(i,70*t);let e=Math.min(60,26*t)|0;for(let n=0;n<e;n++)le({pos:i,vel:mi(B(6,18)*t).add(new b(0,4,0)),color:[16766282,16747036,16731420][n%3],size:B(.2,.5)*t,life:B(.3,.8),glow:!0,add:!0,gravity:4,drag:2.5});for(let n=0;n<e*.7;n++)le({pos:i.clone().add(mi(1.2*t)),vel:mi(B(1,5)*t).add(new b(0,B(2,5),0)),color:[4473924,6710886,2763306][n%3],size:B(.6,1.3)*t,life:B(1.2,2.6),gravity:-1.2,drag:1.5,grow:1.5,shrink:!1,opacity:.8,spin:1});for(let n=0;n<e*.4;n++)le({pos:i,vel:mi(B(8,20)).add(new b(0,6,0)),color:2826520,size:B(.1,.25),life:B(1,2),gravity:20,drag:.3})}function fn(i,t,e=16769126,n=8,s=6){for(let o=0;o<n;o++){let r=mi(s).add(t.clone().multiplyScalar(s*.8));le({pos:i,vel:r,color:e,size:B(.05,.12),life:B(.2,.5),glow:!0,add:!0,gravity:12,drag:1})}}function Hn(i,t,e=10,n=.2,s=5){for(let o=0;o<e;o++)le({pos:i.clone().add(mi(.4)),vel:mi(B(1,s)).add(new b(0,2,0)),color:t,size:n*B(.5,1.3),life:B(.8,1.6),gravity:18,drag:.4})}function ln(i,t=4,e=7829367,n=.6){for(let s=0;s<t;s++)le({pos:i.clone().add(mi(.3)),vel:mi(1).add(new b(0,1.5,0)),color:e,size:n*B(.6,1.2),life:B(.8,1.6),gravity:-.5,drag:1,grow:1.5,shrink:!1,opacity:.6,spin:1,floor:!1})}function ld(i,t=14,e=1){for(let n=0;n<t;n++)le({pos:i.clone().setY(x.waterY+.1),vel:new b(B(-3,3)*e,B(4,9)*e,B(-3,3)*e),color:[12577279,16777215,8376565][n%3],size:B(.12,.3)*e,life:B(.5,1),gravity:18,drag:.3,floor:!1});ir(i.clone().setY(x.waterY+.05),2.5*e,14677759,.6)}function ei(i,t=50,e=12){let n=[16726891,16765952,3920383,8191834,11758591,16777215,16747036],s=n[Math.random()*n.length|0];for(let o=0;o<t;o++)le({pos:i,vel:mi(B(e*.6,e)),color:o%3?s:n[o%n.length],size:B(.1,.22),life:B(1,1.8),glow:!0,add:!0,gravity:3,drag:1.4});sr(i,40,s)}var Cm={normal:{s:1,mass:1,speed:1.7,mat:"flesh",buoy:1.4},big:{s:1.6,mass:1,speed:1.5,mat:"flesh",buoy:1.4},tiny:{s:.55,mass:1,speed:2.4,mat:"flesh",buoy:1.6},robot:{s:1.1,mass:3,speed:1.2,mat:"metal",buoy:.5,skin:10134702,shirt:5924208,pants:3883851,eyes:16720418,metal:!0},bouncy:{s:1,mass:1,speed:2,mat:"bouncyflesh",buoy:1.6,skin:16751317,shirt:16732067,pants:11868062},zombie:{s:1,mass:1,speed:3,mat:"flesh",buoy:1.4,skin:8368233,shirt:6049149,pants:4013373,eyes:16724787,ai:"zombie"},ninja:{s:.95,mass:.9,speed:7,mat:"flesh",buoy:1.4,skin:2236962,shirt:1710618,pants:1118481,eyes:16777215,band:14034984,ai:"ninja"},balloon:{s:1,mass:1,speed:1.7,mat:"flesh",buoy:1.4,balloons:!0}},hM=[15087942,2792847,16032353,4553629,8599788,16760331,448160,15681391,3835647,16471559],uM=[2508371,1914199,4014171,7041116,2236987,4804695],dM=[15843965,14724201,13010498,9262372,16767916,16175281],cd=i=>i[Math.random()*i.length|0],ud={head:{t:"sphere",r:.25,pos:[0,1.8,0],m:.13},torso:{t:"box",size:[.56,.72,.3],pos:[0,1.17,0],m:.4},armL:{t:"box",size:[.18,.66,.18],pos:[-.38,1.17,0],m:.08},armR:{t:"box",size:[.18,.66,.18],pos:[.38,1.17,0],m:.08},legL:{t:"box",size:[.22,.8,.22],pos:[-.14,.4,0],m:.155},legR:{t:"box",size:[.22,.8,.22],pos:[.14,.4,0],m:.155}},ni=Object.keys(ud),jl={};function fM(i,t){let e=i+t.toFixed(2);if(jl[e])return jl[e];let n=ud[i];return jl[e]=n.t==="sphere"?new An(n.r*t,1):new Fe(n.size[0]*t,n.size[1]*t,n.size[2]*t),jl[e]}function dd(i,t){let e=(h,d)=>new ue({color:h,flatShading:!0,roughness:d?.4:.8,metalness:d?.6:0}),n=e(t.skin,t.metal),s=e(t.shirt,t.metal),o=e(t.pants,t.metal),r={};for(let h of ni){let d=h==="head"?n:h==="torso"?s:h.startsWith("arm")?t.sleeve?s:n:o,u=new Et(fM(h,i),d);u.castShadow=!0,u.receiveShadow=!0,r[h]=u}let a=new Se({color:t.eyes??1118481}),l=new Fe(.06*i,.09*i,.03*i);for(let h of[-.09,.09]){let d=new Et(l,a);d.position.set(h*i,.04*i,.235*i),r.head.add(d)}if(!t.eyes){let h=new Et(new Fe(.12*i,.025*i,.03*i),a);h.position.set(0,-.09*i,.225*i),r.head.add(h)}if(t.band){let h=new Et(new Fe(.52*i,.08*i,.52*i),new ue({color:t.band,flatShading:!0}));h.position.y=.12*i,r.head.add(h)}let c=new Et(new Fe(.58*i,.08*i,.32*i),new ue({color:2826520,flatShading:!0}));return c.position.y=-.33*i,r.torso.add(c),r}var Jl=new Ee,pM=new Ee,IS=new ke,Kl=new b,Im=new b(1,0,0),mM=new b(0,1,0);function fd(i,t,e,n,s,o,r={}){let a=pM.setFromAxisAngle(mM,n),l=(y,m,p,v,M,w)=>{let I=i[y];if(!I)return;let A=y.startsWith("leg")?.4:.33;Jl.setFromAxisAngle(Im,M),Kl.set(0,-A*t,0).applyQuaternion(Jl),Kl.add(new b(m*t,w*t,v*t)),Kl.applyQuaternion(a).add(e),I.position.copy(Kl),I.quaternion.copy(a).multiply(Jl)},c=Math.sin(s)*.7*o,h=0;l("legL",-.14,0,0,c,.8),l("legR",.14,0,0,-c,.8);let d=-c,u=c;r.armsUp&&(d=Math.PI+Math.sin(x.time*18)*.4,u=Math.PI-Math.sin(x.time*18)*.4),r.zombie&&(d=u=-Math.PI/2+Math.sin(x.time*3)*.1),r.aim!==void 0&&(u=-Math.PI/2-r.aim),r.swing&&(u=-Math.PI/2-1.2+r.swing*2.5),l("armL",-.38,0,0,d,1.5),l("armR",.38,0,0,u,1.5);let f=i.torso;f.position.set(0,1.17*t+h,0).applyQuaternion(a).add(e),f.quaternion.copy(a);let g=i.head;g.position.set(0,1.8*t+h,0).applyQuaternion(a).add(e),g.quaternion.copy(a),r.pitch!==void 0&&g.quaternion.multiply(Jl.setFromAxisAngle(Im,-r.pitch*.5))}var gM=1,hd=class i{constructor(t,e="normal",n={}){this.id=gM++,this.variant=e,this.cfg=Cm[e]||Cm.normal,this.s=this.cfg.s*(n.scale??1),this.massTotal=30*this.cfg.mass*this.s**3,this.buoy=this.cfg.buoy,this.pitch=(this.cfg.metal?90:B(130,230))/Math.sqrt(this.s),this.colors={skin:this.cfg.skin??cd(dM),shirt:this.cfg.shirt??cd(hM),pants:this.cfg.pants??cd(uM),eyes:this.cfg.eyes,band:this.cfg.band,metal:this.cfg.metal,sleeve:Math.random()<.4},this.meshes=dd(this.s,this.colors);for(let s of ni)x.scene.add(this.meshes[s]);this.spawned=!!n.spawned,this.yaw=n.yaw??B(0,Math.PI*2),this.phase=0,this.moveAmt=0,this.ai={t:0,dir:new b,idle:!1,shove:0,jump:B(1,3)},this.state=null,this.frozen=0,this.downTime=0,this.still=0,this.flingStart=null,this.maxDist=0,x.dummies.add(this),this.makeStanding(t),this.cfg.balloons&&(this.knock(null),this.tieBalloons(3))}origin(){return this.state==="standing"?Bt(this.body.position).add(new b(0,-.95*this.s,0)):Bt(this.parts.torso.body.position).add(new b(0,-1.17*this.s,0))}center(){return this.state==="standing"?Bt(this.body.position):Bt(this.parts.torso.body.position)}makeStanding(t){let e=this.s,n=new it({mass:this.massTotal,material:x.mats.player,fixedRotation:!0,collisionFilterGroup:qe.DYN,linearDamping:0,allowSleep:!1});n.addShape(new Cn(.3*e),new _(0,-.65*e,0)),n.addShape(new Qn(new _(.3*e,.6*e,.18*e)),new _(0,.35*e,0)),n.position.set(t.x,t.y+.95*e+.02,t.z),n.updateMassProperties(),n.ent={kind:"dummybody",dummy:this},n.addEventListener("collide",s=>{if(this.state!=="standing")return;let o=Math.abs(s.contact.getImpactVelocityAlongNormal()),r=s.body,a=r.type===it.DYNAMIC&&(o>6||r.velocity.length()>8),l=r.isPlayer&&r.velocity.length()>11;if(a&&r.mass>1.5||l){let c=Bt(r.velocity).multiplyScalar(xe(r.mass/this.massTotal,.2,1.2));ti(()=>this.knock(c))}}),x.world.addBody(n),this.body=n,this.state="standing"}tieBalloons(t){let e=this.parts.torso;for(let n=0;n<t;n++){let s=e.body.position,o=x.spawnItem("balloon",new b(s.x+B(-.8,.8),s.y+2.5+n*.4,s.z+B(-.8,.8)),{spawned:this.spawned});o.lift=150*this.s**3,x.addRope(e.body,new _(0,.3*this.s,0),o.body,new _(0,-.5,0),2.5)}}knock(t){if(this.state!=="standing"){if(t)for(let l of ni){let c=this.parts[l].body;c.velocity.x+=t.x,c.velocity.y+=t.y,c.velocity.z+=t.z}return}let e=Bt(this.body.position.y<-100?new _:this.body.velocity);t&&e.add(t),x.world.removeBody(this.body),this.body=null;let n=this.s,s=x.mats[this.cfg.mat];this.parts={};for(let l of ni){let c=ud[l],h=this.meshes[l],d=new it({mass:this.massTotal*c.m,material:s,collisionFilterGroup:qe.DYN,linearDamping:.04,angularDamping:.3,allowSleep:!0,sleepSpeedLimit:.3,sleepTimeLimit:1});d.addShape(c.t==="sphere"?new Cn(c.r*n):new Qn(new _(c.size[0]/2*n,c.size[1]/2*n,c.size[2]/2*n))),d.position.set(h.position.x,h.position.y,h.position.z),d.quaternion.set(h.quaternion.x,h.quaternion.y,h.quaternion.z,h.quaternion.w),d.velocity.set(e.x+B(-.5,.5),e.y,e.z+B(-.5,.5)),t&&d.angularVelocity.set(B(-4,4),B(-4,4),B(-4,4));let u={id:-1,kind:"ragpart",dummy:this,body:d,mesh:h,def:{},mat:yi[this.cfg.mat],hp:1/0,gen:0,born:x.time,scale:1,frozen:0,antigrav:0,thrusters:[],wet:!1,partName:l};d.ent=u,d.addEventListener("collide",f=>{let g=Math.abs(f.contact.getImpactVelocityAlongNormal());g>7&&(lt.oof(d.position,this.pitch),g>14&&ti(()=>{this.parts&&Hn(Bt(d.position),16777215,3,.08,3)}))}),x.world.addBody(d),x.ents.add(u),this.parts[l]=u}let o=this.parts,r=[],a=(l,c,h)=>new _(l*n,c*n,h*n);r.push(new Hr(o.torso.body,o.head.body,{pivotA:a(0,.36,0),pivotB:a(0,-.27,0),axisA:new _(0,1,0),axisB:new _(0,1,0),angle:.6,twistAngle:.5}));for(let[l,c]of[["armL",-.38],["armR",.38]]){let h=new Ko(o.torso.body,a(c,.33,0),o[l].body,a(0,.33,0));h.collideConnected=!1,r.push(h)}for(let[l,c]of[["legL",-.14],["legR",.14]])r.push(new Hr(o.torso.body,o[l].body,{pivotA:a(c,-.37,0),pivotB:a(0,.4,0),axisA:new _(0,-1,0),axisB:new _(0,-1,0),angle:1,twistAngle:.3}));for(let l of r)x.world.addConstraint(l);this.constraints=r,this.state="ragdoll",this.downTime=0,this.still=0,this.flingStart=this.center(),this.maxDist=0,lt.oof(this.center(),this.pitch)}markFling(){this.flingStart=this.center(),this.maxDist=0,this.thrown=!0}hurt(t,e){this.state==="standing"?this.knock(e?e.clone().multiplyScalar(Math.min(t*.15,12)):null):t>8&&lt.oof(this.center(),this.pitch)}freeze(t){this.state==="standing"&&this.knock(null),this.frozen=t;for(let e of ni){let n=this.parts[e];n.frozen||(n.frozen=1,n.origMass=n.body.mass,n.body.type=it.STATIC,n.body.mass=0,n.body.updateMassProperties(),n.body.velocity.setZero(),n.body.angularVelocity.setZero(),n.mesh.userData.orig=n.mesh.material,n.mesh.material=new ue({color:11463423,transparent:!0,opacity:.85,emissive:1728378,emissiveIntensity:.4,flatShading:!0}))}}unfreeze(){if(this.parts){this.frozen=0;for(let t of ni){let e=this.parts[t];e.frozen&&(e.frozen=0,e.body.type=it.DYNAMIC,e.body.mass=e.origMass,e.body.updateMassProperties(),e.body.wakeUp(),e.mesh.userData.orig&&(e.mesh.material=e.mesh.userData.orig,e.mesh.userData.orig=null))}}}clearRagdoll(){if(this.parts){for(let t of this.constraints)x.world.removeConstraint(t);for(let t of ni){let e=this.parts[t];e.dead=!0;for(let n=x.ropes.length-1;n>=0;n--){let s=x.ropes[n];(s.a===e.body||s.b===e.body)&&x.removeRope(s)}for(let n=x.welds.length-1;n>=0;n--){let s=x.welds[n];(s.bodyA===e.body||s.bodyB===e.body)&&(x.world.removeConstraint(s),x.welds.splice(n,1))}x.onRemove&&x.onRemove(e),x.world.removeBody(e.body),x.ents.delete(e),e.mesh.userData.orig&&(e.mesh.material=e.mesh.userData.orig,e.mesh.userData.orig=null);for(let n of e.thrusters)n.mesh&&e.mesh.remove(n.mesh)}this.parts=null,this.constraints=null}}standUp(t){this.reportFling(),this.clearRagdoll(),this.makeStanding(t),this.yaw=B(0,Math.PI*2),lt.pop(t),ln(t.clone().add(new b(0,.3,0)),4,14274488,.5)}reportFling(){if(this.maxDist>6){let t=this.maxDist;x.stats.flings++;let e=t>x.stats.best;e&&(x.stats.best=t,hm()),kn(`${t.toFixed(1)}m FLING!${e?" NEW BEST!":""}`,this.center().add(new b(0,1.5,0)),e?"#ffd23f":"#ffffff",e?30:22)}this.maxDist=0}respawn(){this.reportFling();let t=x.spawn||new b(0,1,0),e=new b(t.x+B(-8,8),t.y+.5,t.z-B(4,12));this.state==="ragdoll"?this.clearRagdoll():this.body&&x.world.removeBody(this.body),this.body=null,this.makeStanding(e),kn("...and back!",e.clone().add(new b(0,2.5,0)),"#aee",16)}remove(){this.state==="ragdoll"?this.clearRagdoll():this.body&&x.world.removeBody(this.body);for(let t of ni)x.scene.remove(this.meshes[t]);x.dummies.delete(this),this.dead=!0}rescale(t){let e=xe(this.s*t,.3,3.5)/this.cfg.s,n=this.origin();return n.y=Math.max(n.y,0),this.remove(),new i(n,this.variant,{scale:e,spawned:this.spawned})}ignite(){this.burn>0||this.cfg.metal||this.center().y<x.waterY||(this.burn=7,lt.oof(this.center(),this.pitch))}update(t){if(this.burn>0){this.burn-=t;let e=this.center();e.y<x.waterY+.3&&(this.burn=0,ln(e,5,14540253,.6)),Math.random()<.6&&le({pos:e.clone().add(new b(B(-.3,.3),B(-.6,.6)*this.s,B(-.3,.3))),vel:new b(B(-.5,.5),B(2,4),B(-.5,.5)),color:Math.random()<.5?16742938:16760906,size:B(.2,.35)*this.s,life:B(.4,.7),glow:!0,add:!0,gravity:-2,floor:!1}),Math.random()<t*1.5&&lt.oof(e,this.pitch)}this.state==="standing"?this.updateStanding(t):this.updateRagdoll(t)}updateStanding(t){let e=this.body,n=this.s,s=this.ai,o=this.origin();if(o.y<x.waterY-.4||o.y<(x.killY??-30)){this.knock(null);return}let a=!!bn(new b(e.position.x,e.position.y-.6*n,e.position.z),new b(e.position.x,e.position.y-1.15*n,e.position.z)),l=0,c=new b,h=x.time-x.lastBoom.time<4&&x.lastBoom.pos.distanceTo(o)<28||this.burn>0,d=this.cfg.ai;if(d==="zombie"&&x.player){let m=x.player.pos();c.subVectors(m,o).setY(0);let p=c.length();c.normalize(),l=p>1?this.cfg.speed:0,s.shove-=t,p<1.3*n+.5&&s.shove<=0&&(s.shove=1.2,x.player.fling(c.clone().multiplyScalar(9).add(new b(0,5,0))),lt.oof(m,this.pitch),kn("BONK",m.clone().add(new b(0,2,0)),"#8f8",18)),Math.random()<t*.15&&lt.groan(o)}else{if(s.t-=t,s.t<=0){s.t=B(2,5),s.idle=Math.random()<.3;let p=B(0,Math.PI*2);s.dir.set(Math.cos(p),0,Math.sin(p))}let m=x.walkBound??58;(Math.abs(o.x)>m||Math.abs(o.z)>m)&&s.dir.set(-o.x,0,-o.z).normalize(),this.burn>0?(Math.random()<t*2&&s.dir.set(B(-1,1),0,B(-1,1)).normalize(),c.copy(s.dir),l=6.5):h?(c.subVectors(o,x.lastBoom.pos).setY(0).normalize(),l=5.5):s.idle||(c.copy(s.dir),l=this.cfg.speed),d==="ninja"&&(s.jump-=t,s.jump<=0&&a&&(s.jump=B(.8,2.5),e.velocity.y=9))}if(s.probe=(s.probe||0)-t,l>0&&d!=="zombie"&&this.burn<=0&&s.probe<=0){s.probe=.25;let m=bn(new b(e.position.x,e.position.y,e.position.z),new b(e.position.x+c.x*1.2*n,e.position.y,e.position.z+c.z*1.2*n),qe.STATIC|qe.DYN),p=e.position.x+c.x*1.6*n,v=e.position.z+c.z*1.6*n,M=bn(new b(p,e.position.y,v),new b(p,e.position.y-3*n,v)),w=M&&M.point.y<x.waterY;(m||a&&(!M||w))&&(s.dir.set(-c.x,0,-c.z),s.t=B(1.5,3),s.idle=!1)}let u=c.x*l,f=c.z*l,g=a?10:1.5;if(e.velocity.x+=(u-e.velocity.x)*Math.min(1,g*t),e.velocity.z+=(f-e.velocity.z)*Math.min(1,g*t),l>.1){let p=Math.atan2(c.x,c.z)-this.yaw;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.yaw+=p*Math.min(1,8*t)}let y=Math.hypot(e.velocity.x,e.velocity.z);this.moveAmt+=(xe(y/3,0,1)-this.moveAmt)*Math.min(1,8*t),this.phase+=t*(3+y*2.2)/Math.sqrt(n),fd(this.meshes,n,this.origin(),this.yaw,this.phase,this.moveAmt,{armsUp:h&&d!=="zombie",zombie:d==="zombie"})}updateRagdoll(t){for(let l of ni){let c=this.parts[l];c.mesh.position.copy(c.body.position),c.mesh.quaternion.copy(c.body.quaternion)}let e=this.parts.torso.body;if(this.frozen>0&&(this.frozen-=t,this.frozen<=0&&this.unfreeze()),this.flingStart){let l=Math.hypot(e.position.x-this.flingStart.x,e.position.z-this.flingStart.z);l>this.maxDist&&(this.maxDist=l)}this.downTime+=t;let n=e.velocity.length(),s=x.grab&&x.grab.dummy===this,o=x.ropes.some(l=>ni.some(c=>l.a===this.parts[c].body||l.b===this.parts[c].body)),r=s||o||this.frozen>0||this.parts.torso.antigrav>0||ni.some(l=>this.parts[l].thrusters.length);n<.9&&!r?this.still+=t:this.still=0;let a=e.position.y<x.waterY+.2;if(this.still>2.2&&!a){let l=bn(new b(e.position.x,e.position.y+.3,e.position.z),new b(e.position.x,e.position.y-3,e.position.z),qe.STATIC|qe.DYN),c=l?l.point:new b(e.position.x,e.position.y-.5,e.position.z);this.standUp(c.add(new b(0,.05,0)));return}a&&this.downTime>14&&!r&&this.respawn()}};function Gn(i,t="normal",e={}){let n=0;for(let s of x.dummies)n++;if(n>=45){for(let s of x.dummies)if(s.spawned){s.remove();break}}return new hd(i,t,e)}function Pm(i){let t=i&&i.ent;return t&&(t.kind==="dummybody"||t.kind==="ragpart")?t.dummy:null}var yi={wood:{density:60,hp:60,thresh:9,brk:"chunks",fr:.6,re:.2,buoy:1.8,color:11565630,min:.22},stone:{density:160,hp:140,thresh:13,brk:"chunks",fr:.75,re:.1,buoy:.45,color:9212054,min:.25},brick:{density:120,hp:70,thresh:11,brk:"chunks",fr:.7,re:.1,buoy:.5,color:11027759,min:.2},glass:{density:80,hp:6,thresh:4,brk:"shards",fr:.3,re:.2,buoy:.8,color:12577023},crystal:{density:90,hp:12,thresh:6,brk:"shards",fr:.3,re:.3,buoy:.8,color:8386559},ice:{density:70,hp:22,thresh:6,brk:"chunks",fr:.02,re:.1,buoy:1.4,color:12120319,min:.2},metal:{density:300,hp:1/0,thresh:99,brk:"none",fr:.45,re:.15,buoy:.25,color:10134702},gold:{density:500,hp:1/0,thresh:99,brk:"none",fr:.5,re:.1,buoy:.2,color:15184918},rubber:{density:30,hp:1/0,thresh:99,brk:"none",fr:.9,re:.92,buoy:2.5,color:16726891},beach:{density:2,hp:1/0,thresh:99,brk:"none",fr:.8,re:.85,buoy:6,color:16777215},jelly:{density:25,hp:1/0,thresh:99,brk:"none",fr:.9,re:1,buoy:1.2,color:16732067},plastic:{density:25,hp:1/0,thresh:99,brk:"none",fr:.6,re:.35,buoy:2,color:16053492},foam:{density:3,hp:1/0,thresh:99,brk:"none",fr:.8,re:.2,buoy:6,color:15328511},fruit:{density:55,hp:18,thresh:7,brk:"splat",fr:.6,re:.15,buoy:1.1,color:4165418},tnt:{density:70,hp:1/0,thresh:99,brk:"none",fr:.6,re:.15,buoy:1.2,color:13904414},heavy:{density:280,hp:1/0,thresh:99,brk:"none",fr:.4,re:.1,buoy:.3,color:2241365},rock:{density:150,hp:400,thresh:18,brk:"chunks",fr:.8,re:.1,buoy:.4,color:8225416,min:.4},appliance:{density:50,hp:150,thresh:12,brk:"chunks",fr:.5,re:.1,buoy:.9,color:15659764,min:.3},car:{density:45,hp:320,thresh:14,brk:"chunks",fr:.25,re:.15,buoy:.8,color:2850281,min:.45},balloon:{density:.3,hp:1,thresh:9,brk:"pop",fr:.5,re:.6,buoy:10,color:16726843},concrete:{density:140,hp:220,thresh:14,brk:"chunks",fr:.8,re:.1,buoy:.4,color:11053218,min:.45},snow:{density:25,hp:8,thresh:5,brk:"splat",fr:.5,re:.05,buoy:1.5,color:16054523},cactus:{density:40,hp:40,thresh:8,brk:"chunks",fr:.7,re:.1,buoy:1.2,color:4165434,min:.2},hay:{density:12,hp:25,thresh:8,brk:"chunks",fr:.9,re:.05,buoy:3,color:14267978,min:.3},flesh:{density:40,hp:1/0,thresh:99,brk:"none",fr:.7,re:.1,buoy:1.4,color:1578e4},bouncyflesh:{density:40,hp:1/0,thresh:99,brk:"none",fr:.7,re:.95,buoy:1.4,color:16743112}};function xd(){for(let i in yi)x.mats[i]=new gs(i),x.mats[i].friction=yi[i].fr,x.mats[i].restitution=yi[i].re;x.mats.ground=new gs("ground"),x.mats.ground.friction=.9,x.mats.ground.restitution=1,x.mats.player=new gs("player"),x.mats.player.friction=0,x.mats.player.restitution=0}var pd={},yM=new ue({color:11463423,transparent:!0,opacity:.8,roughness:.1,metalness:.1,emissive:1728378,emissiveIntensity:.4,flatShading:!0});function yd(i,t,e){let n=i+"|"+(t||"")+"|"+(e??"");if(pd[n]&&e!=="random")return pd[n];let s={flatShading:!0,roughness:.85,metalness:0};t&&(s.map=Xl[t]());let o=e==="random"?new Rt().setHSL(Math.random(),.8,.55):e??(t?16777215:yi[i]?.color??13421772);s.color=o,i==="glass"&&Object.assign(s,{transparent:!0,opacity:.38,roughness:.05,metalness:.2,depthWrite:!1}),i==="ice"&&Object.assign(s,{transparent:!0,opacity:.75,roughness:.1}),i==="crystal"&&Object.assign(s,{transparent:!0,opacity:.85,emissive:3135231,emissiveIntensity:.6,roughness:.1}),i==="jelly"&&Object.assign(s,{transparent:!0,opacity:.7,roughness:.2}),(i==="metal"||i==="heavy")&&Object.assign(s,{metalness:.6,roughness:.45}),i==="gold"&&Object.assign(s,{metalness:.9,roughness:.3}),i==="balloon"&&Object.assign(s,{roughness:.3});let r=new ue(s);return e!=="random"&&(pd[n]=r),r}var md={};function gd(i,t,e,n,s){let o=i+t+","+e+","+n+","+s;if(md[o])return md[o];let r;return i==="box"?r=new Fe(t,e,n):i==="sphere"?r=new An(t,e??1):i==="cyl"&&(r=new je(n??t,t,e,10)),md[o]=r,r}var nt=(i,t,e,n,s)=>({id:i,name:t,icon:e,cat:n,...s}),xs=[nt("crate","Wood Crate","\u{1F4E6}","Build",{shape:"box",size:[1,1,1],mat:"wood",tex:"crate"}),nt("crate_s","Small Crate","\u{1F4E6}","Build",{shape:"box",size:[.6,.6,.6],mat:"wood",tex:"crate"}),nt("crate_b","Big Crate","\u{1F4E6}","Build",{shape:"box",size:[1.8,1.8,1.8],mat:"wood",tex:"crate"}),nt("plank","Plank","\u{1FAB5}","Build",{shape:"box",size:[2.4,.2,.5],mat:"wood",tex:"plank"}),nt("log","Log","\u{1FAB5}","Build",{shape:"cyl",r:.3,h:2.6,mat:"wood",tex:"log",rot:[0,0,Math.PI/2]}),nt("stone","Stone Block","\u{1FAA8}","Build",{shape:"box",size:[1,1,1],mat:"stone",tex:"stone"}),nt("slab","Stone Slab","\u{1FAA8}","Build",{shape:"box",size:[2,.4,1],mat:"stone",tex:"stone"}),nt("brick","Brick","\u{1F9F1}","Build",{shape:"box",size:[.9,.45,.45],mat:"brick",tex:"brick"}),nt("glass","Glass Pane","\u{1FA9F}","Build",{shape:"box",size:[2,2,.12],mat:"glass"}),nt("glass_c","Glass Cube","\u{1F9CA}","Build",{shape:"box",size:[1,1,1],mat:"glass"}),nt("ice","Ice Block","\u{1F9CA}","Build",{shape:"box",size:[1,1,1],mat:"ice"}),nt("metal","Metal Block","\u2B1C","Build",{shape:"box",size:[1,1,1],mat:"metal",tex:"metal"}),nt("beam","Steel Beam","\u2796","Build",{shape:"box",size:[3,.3,.3],mat:"metal",tex:"metal"}),nt("domino","Domino","\u{1F062}","Build",{shape:"box",size:[.5,1.2,.15],mat:"plastic",color:16053492}),nt("gold","Gold Bar","\u{1F947}","Build",{shape:"box",size:[.6,.3,.3],mat:"gold",tex:"gold"}),nt("concrete","Concrete Block","\u25FB\uFE0F","Build",{shape:"box",size:[1,1,1],mat:"concrete",tex:"concrete"}),nt("concrete_big","Big Concrete Block","\u2B1B","Build",{shape:"box",size:[2,2,2],mat:"concrete",tex:"concrete"}),nt("barrier","Road Barrier","\u{1F6A7}","Build",{shape:"compound",mat:"concrete",parts:[{t:"box",size:[1.8,.35,.7],off:[0,-.25,0],tex:"concrete"},{t:"box",size:[1.8,.55,.3],off:[0,.2,0],tex:"concrete"}]}),nt("hay","Hay Bale","\u{1F33E}","Build",{shape:"box",size:[1.2,.8,.8],mat:"hay",tex:"hay"}),nt("tnt","TNT","\u{1F9E8}","Boom",{shape:"box",size:[.9,.9,.9],mat:"tnt",tex:"tnt",explosive:{power:1,impact:17,hp:1}}),nt("tnt_mini","Mini TNT","\u{1F9E8}","Boom",{shape:"box",size:[.5,.5,.5],mat:"tnt",tex:"tnt",explosive:{power:.5,impact:17,hp:1}}),nt("tnt_mega","MEGA TNT","\u{1F4A5}","Boom",{shape:"box",size:[1.8,1.8,1.8],mat:"tnt",tex:"tnt",explosive:{power:2.6,impact:15,hp:1}}),nt("barrel","Explosive Barrel","\u{1F6E2}\uFE0F","Boom",{shape:"cyl",r:.45,h:1.2,mat:"tnt",tex:"barrel",explosive:{power:.9,impact:11,hp:25}}),nt("drum","Oil Drum","\u{1F6E2}\uFE0F","Boom",{shape:"cyl",r:.45,h:1.2,mat:"tnt",tex:"drum",explosive:{power:.7,impact:14,hp:40,fire:!0}}),nt("gas","Gas Canister","\u{1F9EF}","Boom",{shape:"cyl",r:.25,h:1,mat:"tnt",tex:"gas",explosive:{power:.7,impact:99,hp:10,special:"gas"}}),nt("firework","Firework Box","\u{1F386}","Boom",{shape:"box",size:[.4,.8,.4],mat:"tnt",tex:"firework",explosive:{power:.3,impact:13,hp:1,special:"firework"}}),nt("nuke","Nuke Barrel","\u2622\uFE0F","Boom",{shape:"cyl",r:.6,h:1.5,mat:"tnt",tex:"nuke",explosive:{power:4,impact:25,hp:60}}),nt("mine","Land Mine","\u26A0\uFE0F","Boom",{shape:"cyl",r:.45,h:.14,mat:"metal",color:4872762,explosive:{power:.9,impact:.8,hp:1,mine:!0}}),nt("c4","C4 Pack","\u{1F4DF}","Boom",{shape:"box",size:[.5,.2,.35],mat:"tnt",color:14274992,explosive:{power:1.4,impact:40,hp:1}}),nt("ball","Bouncy Ball","\u{1F534}","Balls",{shape:"sphere",r:.4,mat:"rubber",color:"random"}),nt("beachball","Beach Ball","\u{1F3D0}","Balls",{shape:"sphere",r:.75,mat:"beach",tex:"beach"}),nt("basketball","Basketball","\u{1F3C0}","Balls",{shape:"sphere",r:.33,mat:"rubber",tex:"basket"}),nt("soccer","Soccer Ball","\u26BD","Balls",{shape:"sphere",r:.35,mat:"rubber",tex:"ball",massMul:.5}),nt("bowling","Bowling Ball","\u{1F3B3}","Balls",{shape:"sphere",r:.3,mat:"heavy",color:2767498}),nt("cannonball","Cannonball","\u26AB","Balls",{shape:"sphere",r:.35,mat:"heavy",color:2236962}),nt("boulder","Boulder","\u{1FAA8}","Balls",{shape:"sphere",r:1.2,mat:"rock",tex:"stone",detail:0}),nt("balloon","Balloon","\u{1F388}","Fun",{shape:"sphere",r:.5,mat:"balloon",color:"random",special:"balloon"}),nt("duck","Rubber Duck","\u{1F986}","Fun",{shape:"compound",mat:"rubber",special:"duck",parts:[{t:"sphere",r:.38,off:[0,0,0],color:16766208},{t:"sphere",r:.24,off:[.28,.36,0],color:16766208},{t:"box",size:[.2,.08,.16],off:[.52,.32,0],color:16743168}]}),nt("melon","Watermelon","\u{1F349}","Fun",{shape:"sphere",r:.4,mat:"fruit",tex:"melon",splat:16726858}),nt("pumpkin","Pumpkin","\u{1F383}","Fun",{shape:"sphere",r:.45,mat:"fruit",color:16747036,splat:16757575,detail:0}),nt("present","Mystery Present","\u{1F381}","Fun",{shape:"box",size:[.7,.7,.7],mat:"wood",tex:"present",special:"present",hp:25}),nt("crystal","Crystal","\u{1F48E}","Fun",{shape:"sphere",r:.45,mat:"crystal",detail:0}),nt("dice","Giant Dice","\u{1F3B2}","Fun",{shape:"box",size:[.7,.7,.7],mat:"plastic",tex:"dice"}),nt("jelly","Jelly Cube","\u{1F7EA}","Fun",{shape:"box",size:[1,1,1],mat:"jelly"}),nt("pillow","Feather Pillow","\u{1F6CF}\uFE0F","Fun",{shape:"box",size:[1,.35,.7],mat:"foam",tex:"bed",damp:.6}),nt("cone","Traffic Cone","\u{1F53A}","Fun",{shape:"cyl",r:.35,rt:.06,h:.8,mat:"plastic",tex:"cone"}),nt("tire","Tire","\u{1F6DE}","Fun",{shape:"cyl",r:.5,h:.35,mat:"rubber",tex:"tire",rot:[Math.PI/2,0,0]}),nt("anvil","Anvil","\u2692\uFE0F","Fun",{shape:"compound",mat:"heavy",parts:[{t:"box",size:[.7,.25,.45],off:[0,-.25,0],color:3355443},{t:"box",size:[.35,.3,.3],off:[0,0,0],color:3355443},{t:"box",size:[1.1,.25,.4],off:[.1,.27,0],color:3815994}]}),nt("bin","Trash Can","\u{1F5D1}\uFE0F","Fun",{shape:"cyl",r:.35,h:.95,mat:"metal",color:3897930}),nt("snowball","Snowball","\u26AA","Fun",{shape:"sphere",r:.35,mat:"snow",splat:16777215}),nt("cactus","Cactus","\u{1F335}","Fun",{shape:"compound",mat:"cactus",parts:[{t:"cyl",r:.28,h:2.2,off:[0,0,0],color:4165434},{t:"box",size:[.7,.3,.3],off:[-.45,.1,0],color:4165434},{t:"box",size:[.3,.8,.3],off:[-.7,.55,0],color:4165434},{t:"box",size:[.6,.3,.3],off:[.4,-.3,0],color:4165434},{t:"box",size:[.3,.6,.3],off:[.6,0,0],color:4165434}]}),nt("lamp","Street Lamp","\u{1F4A1}","Stuff",{shape:"compound",mat:"metal",parts:[{t:"box",size:[.5,.15,.5],off:[0,-2.1,0],color:2961720},{t:"cyl",r:.08,h:4.2,off:[0,0,0],color:2961720},{t:"box",size:[.9,.12,.3],off:[.35,2.1,0],color:2961720},{t:"box",size:[.4,.12,.3],off:[.7,2,0],color:16774064}]}),nt("mailbox","Mailbox","\u{1F4EE}","Stuff",{shape:"compound",mat:"metal",parts:[{t:"box",size:[.12,1.1,.12],off:[0,-.35,0],color:5592405},{t:"box",size:[.4,.4,.6],off:[0,.35,0],color:2776023}]}),nt("pallet","Pallet","\u{1F7EB}","Build",{shape:"compound",mat:"wood",hp:300,collider:[1.6,.3,1.2],parts:[{t:"box",size:[1.6,.05,.2],off:[0,.125,-.5],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,.125,-.25],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,.125,0],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,.125,.25],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,.125,.5],tex:"plank"},{t:"box",size:[.14,.2,1.2],off:[-.7,0,0],tex:"log"},{t:"box",size:[.14,.2,1.2],off:[0,0,0],tex:"log"},{t:"box",size:[.14,.2,1.2],off:[.7,0,0],tex:"log"},{t:"box",size:[1.6,.05,.2],off:[0,-.125,-.5],tex:"plank"},{t:"box",size:[1.6,.05,.2],off:[0,-.125,.5],tex:"plank"}]}),nt("pallet_big","Big Pallet","\u{1F7EB}","Build",{shape:"compound",mat:"wood",hp:300,collider:[2.4,.3,1.8],massMul:1.2,parts:[{t:"box",size:[2.4,.05,.2],off:[0,.125,-.75],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,.125,-.375],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,.125,0],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,.125,.375],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,.125,.75],tex:"plank"},{t:"box",size:[.14,.2,1.8],off:[-1.1,0,0],tex:"log"},{t:"box",size:[.14,.2,1.8],off:[0,0,0],tex:"log"},{t:"box",size:[.14,.2,1.8],off:[1.1,0,0],tex:"log"},{t:"box",size:[2.4,.05,.2],off:[0,-.125,-.75],tex:"plank"},{t:"box",size:[2.4,.05,.2],off:[0,-.125,.75],tex:"plank"}]}),nt("pallet_stack","Pallet Stack (5)","\u{1F7EB}","Prefabs",{prefab:"pallets"}),nt("fridge","Fridge","\u{1F9CA}","Stuff",{shape:"box",size:[.9,1.9,.8],mat:"appliance",tex:"fridge"}),nt("piano","Piano","\u{1F3B9}","Stuff",{shape:"compound",mat:"wood",special:"piano",parts:[{t:"box",size:[2,1.3,.7],off:[0,0,-.15],tex:"piano"},{t:"box",size:[2,.12,.45],off:[0,-.05,.42],tex:"keys"},{t:"box",size:[.15,.6,.4],off:[-.92,-.42,.42],tex:"piano"},{t:"box",size:[.15,.6,.4],off:[.92,-.42,.42],tex:"piano"}]}),nt("couch","Couch","\u{1F6CB}\uFE0F","Stuff",{shape:"compound",mat:"wood",parts:[{t:"box",size:[2.1,.5,.95],off:[0,0,0],tex:"couch"},{t:"box",size:[2.1,.65,.25],off:[0,.55,-.35],tex:"couch"},{t:"box",size:[.25,.35,.95],off:[-.95,.42,0],tex:"couch"},{t:"box",size:[.25,.35,.95],off:[.95,.42,0],tex:"couch"}]}),nt("table","Table","\u{1FA91}","Stuff",{shape:"compound",mat:"wood",parts:[{t:"box",size:[1.6,.12,1],off:[0,.38,0],tex:"plank"},{t:"box",size:[.12,.7,.12],off:[-.7,-.03,-.4],tex:"plank"},{t:"box",size:[.12,.7,.12],off:[.7,-.03,-.4],tex:"plank"},{t:"box",size:[.12,.7,.12],off:[-.7,-.03,.4],tex:"plank"},{t:"box",size:[.12,.7,.12],off:[.7,-.03,.4],tex:"plank"}]}),nt("bed","Bed","\u{1F6CF}\uFE0F","Stuff",{shape:"compound",mat:"wood",parts:[{t:"box",size:[1.2,.3,2.2],off:[0,0,0],tex:"plank"},{t:"box",size:[1.1,.25,2],off:[0,.27,.05],tex:"bed"},{t:"box",size:[1.2,.8,.12],off:[0,.3,-1.05],tex:"plank"}]}),nt("car","Car","\u{1F697}","Stuff",{shape:"compound",mat:"car",parts:[{t:"box",size:[3.6,.7,1.8],off:[0,0,0],tex:"car"},{t:"box",size:[2,.65,1.6],off:[-.25,.67,0],tex:"window"},{t:"cyl",r:.38,h:.3,off:[1.1,-.35,.85],rot:[Math.PI/2,0,0],color:1907997},{t:"cyl",r:.38,h:.3,off:[-1.1,-.35,.85],rot:[Math.PI/2,0,0],color:1907997},{t:"cyl",r:.38,h:.3,off:[1.1,-.35,-.85],rot:[Math.PI/2,0,0],color:1907997},{t:"cyl",r:.38,h:.3,off:[-1.1,-.35,-.85],rot:[Math.PI/2,0,0],color:1907997}]}),nt("vending","Vending Machine","\u{1F964}","Stuff",{shape:"compound",mat:"appliance",parts:[{t:"box",size:[1.1,2,.9],off:[0,0,0],color:13771562},{t:"box",size:[.7,1.2,.05],off:[-.12,.25,.46],tex:"window"}]}),nt("dummy","Dummy","\u{1F9CD}","People",{dummy:{variant:"normal"}}),nt("dummy_big","Big Dummy","\u{1F9CD}","People",{dummy:{variant:"big"}}),nt("dummy_tiny","Tiny Dummy","\u{1F9D2}","People",{dummy:{variant:"tiny"}}),nt("dummy_robot","Heavy Robot","\u{1F916}","People",{dummy:{variant:"robot"}}),nt("dummy_bouncy","Bouncy Dummy","\u{1F938}","People",{dummy:{variant:"bouncy"}}),nt("dummy_zombie","Zombie (chases you)","\u{1F9DF}","People",{dummy:{variant:"zombie"}}),nt("dummy_ninja","Ninja (fast)","\u{1F977}","People",{dummy:{variant:"ninja"}}),nt("dummy_balloon","Balloon Dummy","\u{1F388}","People",{dummy:{variant:"balloon"}}),nt("dummy_crowd","Crowd of 6","\u{1F465}","People",{dummy:{variant:"crowd"}}),nt("pf_wall","Brick Wall","\u{1F9F1}","Prefabs",{prefab:"wall"}),nt("pf_tower","Crate Tower","\u{1F3D7}\uFE0F","Prefabs",{prefab:"tower"}),nt("pf_pyramid","Crate Pyramid","\u{1F53A}","Prefabs",{prefab:"pyramid"}),nt("pf_domino","Domino Row","\u{1F062}","Prefabs",{prefab:"domino"}),nt("pf_jenga","Jenga Tower","\u{1F5FC}","Prefabs",{prefab:"jenga"}),nt("pf_glassroom","Glass Room","\u{1F3E0}","Prefabs",{prefab:"glassroom"}),nt("pf_bowling","Bowling Set","\u{1F3B3}","Prefabs",{prefab:"bowling"}),nt("pf_tntstack","TNT Stack","\u{1F9E8}","Prefabs",{prefab:"tntstack"}),nt("pf_minefield","Mine Field","\u26A0\uFE0F","Prefabs",{prefab:"minefield"}),nt("pf_ballpit","Ball Pit Drop","\u{1F535}","Prefabs",{prefab:"ballpit"}),nt("pf_house","Wooden House","\u{1F3E0}","Prefabs",{prefab:"house"}),nt("pf_bridge","Bridge","\u{1F309}","Prefabs",{prefab:"bridge"}),nt("pf_skyscraper","Skyscraper","\u{1F3E2}","Prefabs",{prefab:"skyscraper"}),nt("pf_fort","Log Fort","\u{1F6E1}\uFE0F","Prefabs",{prefab:"fort"}),nt("pf_arch","Stone Arch","\u26E9\uFE0F","Prefabs",{prefab:"arch"}),nt("pf_stairs","Crate Stairs","\u{1FA9C}","Prefabs",{prefab:"stairs"}),nt("pf_igloo","Igloo","\u{1F6D6}","Prefabs",{prefab:"igloo"}),nt("pf_snowman","Snowman","\u26C4","Prefabs",{prefab:"snowman"})],Kt=Object.fromEntries(xs.map(i=>[i.id,i]));Kt.pin={id:"pin",name:"Pin",shape:"cyl",r:.13,rt:.08,h:.8,mat:"plastic",color:16777215};Kt.chunk={id:"chunk",name:"Chunk",shape:"box",size:[1,1,1],mat:"wood"};var xM=1;function zm(i){if(i.shape==="box")return i.size[0]*i.size[1]*i.size[2];if(i.shape==="sphere")return 4.18*i.r**3;if(i.shape==="cyl"){let t=(i.r+(i.rt??i.r))/2;return Math.PI*t*t*i.h}return i.shape==="compound"?i.parts.reduce((t,e)=>t+zm({shape:e.t,...e}),0):1}function Nm(i,t,e){return i==="box"?new Qn(new _(t.size[0]/2*e,t.size[1]/2*e,t.size[2]/2*e)):i==="sphere"?new Cn(t.r*e):new Gi((t.rt??t.r)*e,t.r*e,t.h*e,10)}function Lm(i,t){return i==="box"?gd("box",t.size[0],t.size[1],t.size[2]):i==="sphere"?gd("sphere",t.r,t.detail??1):gd("cyl",t.r,t.h,t.rt??t.r)}function Um(i,t,e){if(t.collider){let n=t.collider;i.addShape(new Qn(new _(n[0]/2*e,n[1]/2*e,n[2]/2*e)))}else if(t.shape==="compound")for(let n of t.parts){let s=new Qe;n.rot&&s.setFromEuler(n.rot[0],n.rot[1],n.rot[2]),i.addShape(Nm(n.t,n,e),new _(n.off[0]*e,n.off[1]*e,n.off[2]*e),s)}else i.addShape(Nm(t.shape,t,e))}function Om(i,t){if(i.shape==="compound"){let n=new hn;for(let s of i.parts){let o=new Et(Lm(s.t,s),yd(i.mat,s.tex,s.color??t));o.position.set(...s.off),s.rot&&o.rotation.set(...s.rot),o.castShadow=o.receiveShadow=!0,n.add(o)}return n}let e=new Et(Lm(i.shape,i),yd(i.mat,i.tex,t??i.color));return e.castShadow=!0,e.receiveShadow=!0,e}var vM=new Se({color:16777215,transparent:!0,opacity:.28,depthWrite:!1});function vd(i){let t=Om(i);return t.traverse(e=>{e.isMesh&&(e.material=vM,e.castShadow=!1,e.receiveShadow=!1)}),t}function Gt(i,t,e={}){let n=yi[i.mat]||yi.wood,s=e.scale??1,o=xe((e.mass??zm(i)*n.density*(i.massMul??1))*s**3,.08,3e3),r=new it({mass:o,material:x.mats[i.mat]||x.mats.wood,collisionFilterGroup:qe.DYN,linearDamping:i.damp??.02,angularDamping:i.damp??.08,allowSleep:!0,sleepSpeedLimit:.25,sleepTimeLimit:.8});Um(r,i,s),r.position.set(t.x,t.y,t.z),e.quat?r.quaternion.set(e.quat.x,e.quat.y,e.quat.z,e.quat.w):i.rot&&r.quaternion.setFromEuler(i.rot[0],i.rot[1],i.rot[2]),e.vel&&r.velocity.set(e.vel.x,e.vel.y,e.vel.z),e.angVel&&r.angularVelocity.set(e.angVel.x,e.angVel.y,e.angVel.z);let a=Om(i,e.color);a.scale.setScalar(s);let l={id:xM++,kind:"item",def:i,mat:n,body:r,mesh:a,hp:i.explosive?i.explosive.hp:i.hp??n.hp,gen:e.gen??0,born:x.time,spawned:!!e.spawned,scale:s,frozen:0,antigrav:0,thrusters:[],wet:!1};return r.ent=l,r.addEventListener("collide",bM),x.world.addBody(r),x.scene.add(a),x.ents.add(l),e.sleep&&r.sleep(),_d(l),_M(),l}function _d(i){i.mesh.position.copy(i.body.position),i.mesh.quaternion.copy(i.body.quaternion)}function _M(){if(x.ents.size<650)return;let i=null;for(let t of x.ents)t.kind==="item"&&t.gen>0&&(!i||t.born<i.born)&&(i=t);i&&Ge(i,!0)}function Ge(i,t=!1){if(!(!i||i.dead)){i.dead=!0,x.onRemove&&x.onRemove(i);for(let e=x.ropes.length-1;e>=0;e--){let n=x.ropes[e];(n.a===i.body||n.b===i.body)&&Qs(n)}for(let e=x.welds.length-1;e>=0;e--){let n=x.welds[e];(n.bodyA===i.body||n.bodyB===i.body)&&(x.world.removeConstraint(n),x.welds.splice(e,1))}x.world.removeBody(i.body),x.scene.remove(i.mesh),x.ents.delete(i),t||Ku(i.body.position,4)}}function bM(i){let t=i.target.ent;if(!t||t.dead)return;let e=Math.abs(i.contact.getImpactVelocityAlongNormal()),n=t.def,s=i.target.position;if(e>3.5&&lt.impact(t.frozen?"ice":n.mat,e,s),n.special==="duck"&&e>2&&lt.squeak(s),n.special==="piano"&&e>3&&lt.piano(e,s),n.special==="balloon"&&e>9){ti(()=>Jr(t));return}if(n.explosive){let r=n.explosive,a=i.body;r.mine?a&&(a.type===it.DYNAMIC||a.isPlayer)&&x.time-t.born>1.5&&ti(()=>Xi(t,.05)):e>r.impact&&ti(()=>Xi(t,.02));return}if(t.hp===1/0)return;let o=t.mat.thresh*(t.frozen?.4:1);if(e>o){let r=i.body.type===it.DYNAMIC?i.body.mass:1e3,a=xe(r/t.body.mass,.3,2.5),l=(e-o)*7*a;ti(()=>vs(t,l,null))}}function vs(i,t,e){if(!i||i.dead)return;if(i.kind==="ragpart"){i.dummy.hurt(t,e);return}i.frozen&&(t*=4);let n=i.def;if(n.special==="balloon"){Jr(i);return}if(n.explosive){i.hp-=t,i.hp<=0&&Xi(i,n.explosive.special?0:B(.05,.15));return}if(i.hp===1/0){i.frozen&&t>30&&jr(i,e);return}i.hp-=t,i.hp<=0&&jr(i,e)}var Yr=new Ee;function jr(i,t,e=0){if(i.dead)return;let n=i.def,s=i.frozen?yi.ice:i.mat,o=Bt(i.body.position),r=Bt(i.body.velocity),a=n.splat??i.mesh.material?.color?.getHex?.()??s.color;x.stats.destroyed++,x.debugBreaks&&x.debugBreaks.push(n.id+"@"+o.toArray().map(h=>h.toFixed(1)).join(",")),Ge(i);let l=i.frozen?"shards":s.brk;if(l==="shards"){lt.shatter(o);for(let h=0;h<26;h++)le({pos:o.clone().add(new b(B(-.5,.5),B(-.5,.5),B(-.5,.5))),vel:r.clone().add(new b(B(-4,4),B(0,5),B(-4,4))),color:s.color,size:B(.08,.22),life:B(.8,1.5),gravity:18,opacity:.8,spin:8});n.mat==="crystal"&&ei(o,20,6);return}if(l==="splat"){lt.splat(o),Hn(o,n.splat??16726858,24,.22,7),Hn(o,3111458,8,.15,5);return}if(["stone","brick","rock","concrete"].includes(n.mat)?lt.crumble(o):lt.crack(o),Hn(o,s.color,10,.18,5),ln(o,2,10193776,.5),n.special==="present"){let h=["ball","duck","melon","balloon","dice","tnt_mini","firework","gold","beachball","crystal","pumpkin","dummy_tiny","jelly"];ei(o,40,8);for(let d=0;d<3;d++){let u=h[Math.random()*h.length|0];Nn(u,o.clone().add(new b(B(-.5,.5),.5+d*.6,B(-.5,.5))),{spawned:!0,vel:new b(B(-3,3),5,B(-3,3))})}return}let c=[];if(n.shape==="box"){let h=i.scale,d=n.size.map(f=>f*h),u=d.map(f=>f>=(s.min??.25)*2?2:1);if(u[0]*u[1]*u[2]>1&&i.gen<3){let f=[d[0]/u[0],d[1]/u[1],d[2]/u[2]];Yr.copy(i.mesh.quaternion);for(let g=0;g<u[0];g++)for(let y=0;y<u[1];y++)for(let m=0;m<u[2];m++){let p=new b((g+.5)*f[0]-d[0]/2,(y+.5)*f[1]-d[1]/2,(m+.5)*f[2]-d[2]/2).applyQuaternion(Yr);c.push({def:{...Kt.chunk,size:f.map(v=>v*.98),mat:n.mat,tex:n.tex,color:n.color==="random"?void 0:n.color,hp:void 0},pos:o.clone().add(p),off:p})}}}else if(n.shape==="compound"&&i.gen<1){let h=i.scale;Yr.copy(i.mesh.quaternion);for(let d of n.parts){let u=new b(...d.off).multiplyScalar(h).applyQuaternion(Yr),f=d.t==="box"?{...Kt.chunk,size:d.size.map(g=>g*h),mat:n.mat,tex:d.tex,color:d.color}:{id:"chunk",shape:d.t,r:d.r*h,h:(d.h??1)*h,rt:d.rt?d.rt*h:void 0,mat:n.mat,color:d.color,tex:d.tex};c.push({def:f,pos:o.clone().add(u),off:u,quat:Yr.clone().multiply(new Ee().setFromEuler(new ke(...d.rot||[0,0,0])))})}}for(let h of c){let d=h.off.clone().normalize().multiplyScalar(B(1,3)+e);t&&d.addScaledVector(t,2+e*.5);let u=Gt(h.def,h.pos,{quat:h.quat||i.mesh.quaternion,vel:r.clone().add(d),angVel:new b(B(-3,3),B(-3,3),B(-3,3)),gen:i.gen+1,spawned:!0});u.hp=Math.max(8,(s.hp===1/0?100:s.hp)*.5**(i.gen+1))}}function Xi(i,t=0){if(!i||i.dead||i.detonating)return;i.detonating=!0;let e=i.def.explosive;if(e.special==="gas"){wM(i);return}if(e.special==="firework"){MM(i);return}Qo(t,()=>{if(i.dead)return;let n=Bt(i.body.position);Ge(i,!0),Pn(n,e.power*i.scale**1.5,{fire:e.fire})})}function wM(i){lt.hiss(i.body.position),i.thrusters.push({lp:new _(0,-.5*i.scale,0),ld:new _(0,1,0),t:1.8,power:45,wobble:!0,end:()=>{if(i.dead)return;let t=Bt(i.body.position);Ge(i,!0),Pn(t,.8)}}),i.body.angularVelocity.set(B(-4,4),B(-4,4),B(-4,4)),i.body.wakeUp()}function MM(i){let t=Bt(i.body.position);Ge(i,!0),ic(t,5)}function ic(i,t=1){for(let e=0;e<t;e++)Qo(e*.18,()=>{let n=i.clone(),s=new b(B(-4,4),B(22,30),B(-4,4));lt.whistle(1.2,n),x.projectiles.push({pos:n,vel:s,t:0,life:B(.9,1.3),gravity:6,trail:o=>le({pos:o,vel:new b(B(-1,1),-2,B(-1,1)),color:16765562,size:.12,life:.5,glow:!0,add:!0,gravity:2}),end:o=>{ei(o,70,14),lt.pop(o),Pn(o,.25,{quiet:!0})}})})}var Zr=0,Fm=-9;function Pn(i,t=1,e={}){let n=7*Math.pow(t,.62),s=22*Math.pow(t,.35),o=Math.min(Math.pow(t,.55),3.2);if(Rm(i,o),e.fire)for(let c=0;c<18;c++)le({pos:i,vel:new b(B(-8,8),B(5,14),B(-8,8)),color:16742938,size:.3,life:B(1.5,2.5),glow:!0,add:!0,gravity:14,drag:.2});i.y<x.waterY+1.5&&ld(i,30,1.6),x.crater&&!e.quiet&&x.crater(i,t),lt.explosion(Math.min(1.5,t),i),t>=3.5&&(sr(i,400,16777215),document.getElementById("whiteflash").classList.add("on"),setTimeout(()=>document.getElementById("whiteflash").classList.remove("on"),120));let r=x.player?x.player.pos().distanceTo(i):99;x.shake=Math.min(2.5,x.shake+Math.max(0,t*1.4-r/(18*Math.sqrt(t)))),x.stats.booms++,x.lastBoom.pos.copy(i),x.lastBoom.time=x.time,x.time-Fm<.7?(Zr++,Zr>=2&&kn(`CHAIN x${Zr+1}!`,i.clone().add(new b(0,2,0)),"#ffcf3a",26+Zr*2)):Zr=0,Fm=x.time;for(let c of[...x.dummies])c.state==="standing"&&c.origin().distanceTo(i)<n*1.1&&c.knock(null);let a=[],l=new b;for(let c of[...x.world.bodies]){let h=c.ent;if(h&&h.frozen&&Zi(h),c.type!==it.DYNAMIC)continue;l.set(c.position.x-i.x,c.position.y-i.y,c.position.z-i.z);let d=l.length();if(d>n)continue;let u=1-d/n;l.y+=.6,l.normalize();let f=xe(Math.pow(25/c.mass,.3),.2,1.5),g=s*u*f;c.velocity.x+=l.x*g,c.velocity.y+=l.y*g,c.velocity.z+=l.z*g,c.angularVelocity.x+=B(-8,8)*u,c.angularVelocity.y+=B(-8,8)*u,c.angularVelocity.z+=B(-8,8)*u,c.wakeUp(),h&&!h.dead&&a.push([h,u,l.clone()])}if(x.player&&r<n){let c=1-r/n,h=x.player.pos().sub(i);h.y+=.8,h.normalize(),x.player.fling(h.multiplyScalar(s*c*.9))}for(let[c,h,d]of a){if(c.dead)continue;if((e.fire&&h>.15||h>.5&&Math.random()<.3&&!e.quiet)&&$i(c,8),c.kind==="ragpart"){c.dummy.hurt(h*60,d);continue}if(c.def.explosive){Xi(c,B(.08,.22));continue}let u=140*Math.sqrt(t)*h;c.hp!==1/0&&c.hp-u<=0?jr(c,d,s*h*.4):vs(c,u,d)}Ku(i,n*1.5)}function Jr(i){i.dead||(lt.pop(i.body.position),Hn(Bt(i.body.position),i.mesh.material.color.getHex(),10,.12,4),Ge(i,!0))}var km=new je(1,1,1,4,1,!0);km.translate(0,.5,0);var ys=class{constructor(t=16777215,e=.025,n=12,s=!1){this.n=n,this.radius=e,this.mat=s?new Se({color:t}):new ue({color:t,roughness:.9}),this.segs=[];for(let o=0;o<n;o++){let r=new Et(km,this.mat);r.frustumCulled=!1,r.castShadow=!s,x.scene.add(r),this.segs.push(r)}this.pts=Array.from({length:n+1},()=>new b)}update(t,e,n=0,s=null){let o=this.n;for(let l=0;l<=o;l++){let c=l/o,h=this.pts[l].copy(t).lerp(e,c),d=4*c*(1-c);h.y-=n*d,s&&h.addScaledVector(s,Math.sin(c*Math.PI*3+x.time*30)*d)}let r=new b(0,1,0),a=new b;for(let l=0;l<o;l++){let c=this.segs[l];a.subVectors(this.pts[l+1],this.pts[l]);let h=a.length()+.001;c.position.copy(this.pts[l]),c.quaternion.setFromUnitVectors(r,a.divideScalar(h)),c.scale.set(this.radius,h,this.radius),c.visible=!0}}setColor(t){this.mat.color.set(t)}hide(){for(let t of this.segs)t.visible=!1}dispose(){for(let t of this.segs)x.scene.remove(t)}};function Yi(i,t,e,n,s,o=15260864){let r={a:i,la:t,b:e,lb:n,len:s,strand:new ys(o,.03,10)};return x.ropes.push(r),r}function Qs(i){let t=x.ropes.indexOf(i);t>=0&&x.ropes.splice(t,1),i.strand.dispose()}function qi(i,t){let e=new Bl(i,t,{maxForce:1e5});return e.collideConnected=!1,x.world.addConstraint(e),x.welds.push(e),i.wakeUp(),t.wakeUp(),e}var Ql=new _,tc=new _,ec=new _,nc=new _,In=new _,Bm=new _;function Dm(i,t,e){return t.vsub(i.position,Bm),i.angularVelocity.cross(Bm,e),e.vadd(i.velocity,e),e}function bd(){for(let t=x.ropes.length-1;t>=0;t--){let e=x.ropes[t];e.a.pointToWorldFrame(e.la,Ql),e.b.pointToWorldFrame(e.lb,tc),tc.vsub(Ql,In);let n=In.length();if(n>e.len*5+10){Qs(e);continue}if(n<=e.len||n<1e-4)continue;In.scale(1/n,In),Dm(e.a,Ql,ec),Dm(e.b,tc,nc);let s=(nc.x-ec.x)*In.x+(nc.y-ec.y)*In.y+(nc.z-ec.z)*In.z,o=e.a.type===it.DYNAMIC?e.a.mass:1e9,r=e.b.type===it.DYNAMIC?e.b.mass:1e9,a=Math.min(o,r,400),l=Math.min(a*(300*(n-e.len)+25*s),a*600);l<=0||(o<1e9&&(e.a.applyForce(new _(In.x*l,In.y*l,In.z*l),Ql.vsub(e.a.position)),e.a.wakeUp()),r<1e9&&(e.b.applyForce(new _(-In.x*l,-In.y*l,-In.z*l),tc.vsub(e.b.position)),e.b.wakeUp()))}for(let t of x.ents){let e=t.body;if(e.type!==it.DYNAMIC)continue;let n=x.waterY-e.position.y;if(n>-.3){let s=xe((n+.3)/.8,0,1),o=t.kind==="ragpart"?t.dummy.buoy:t.frozen?1.4:t.mat.buoy;e.applyForce(new _(-e.position.x*.02*e.mass,e.mass*9.82*o*s,-e.position.z*.02*e.mass)),e.velocity.scale(1-.02*s,e.velocity),e.angularVelocity.scale(1-.02*s,e.angularVelocity)}t.def&&t.def.special==="balloon"&&(e.applyForce(new _(0,e.mass*9.82+(t.lift??14),0)),e.velocity.scale(.985,e.velocity)),t.antigrav>0&&(e.applyForce(new _(0,e.mass*9.82*1.12,0)),e.velocity.scale(.99,e.velocity));for(let s of t.thrusters){let o=e.quaternion.vmult(s.ld),r=Math.min(e.mass*s.power,3e4);e.applyForce(new _(o.x*r,o.y*r,o.z*r),e.quaternion.vmult(s.lp)),s.wobble&&(e.angularVelocity.x+=B(-.4,.4),e.angularVelocity.z+=B(-.4,.4))}}if(x.extraForces)for(let t of x.extraForces)t()}function wd(i){for(let t of[...x.ents]){if(t.dead)continue;let e=t.body;if(!Number.isFinite(e.position.x+e.position.y+e.position.z)){t.kind==="ragpart"?t.dummy.respawn():Ge(t,!0);continue}if(e.position.y<(x.killY??-30)-15||Math.abs(e.position.x)>400||Math.abs(e.position.z)>400){t.kind==="ragpart"?t.dummy.respawn():Ge(t,!0);continue}t.kind!=="ragpart"&&e.sleepState!==it.SLEEPING&&e.type===it.DYNAMIC&&_d(t),t.burn>0&&AM(t,i);let n=e.position.y<x.waterY;n&&!t.wet&&e.velocity.length()>4&&(ld(Bt(e.position),10,xe(e.mass/40,.5,1.6)),lt.splash(e.position)),t.wet=n,t.frozen>0&&(t.frozen-=i,t.frozen<=0&&Zi(t)),t.antigrav>0&&(t.antigrav-=i,Math.random()<.3&&le({pos:Bt(e.position),vel:new b(B(-1,1),-1,B(-1,1)),color:13073919,size:.12,life:.6,glow:!0,add:!0,gravity:0}));for(let s=t.thrusters.length-1;s>=0;s--){let o=t.thrusters[s];o.t-=i;let r=Bt(e.pointToWorldFrame(o.lp)),a=Bt(e.quaternion.vmult(o.ld));Math.random()<.8&&le({pos:r,vel:a.clone().multiplyScalar(-B(6,10)),color:Math.random()<.5?16757575:16735770,size:B(.15,.3),life:.3,glow:!0,add:!0,gravity:0,drag:2}),o.mesh&&(o.mesh.visible=!0),o.t<=0&&(t.thrusters.splice(s,1),o.mesh&&t.mesh.remove(o.mesh),o.end&&o.end())}if(t.fuse!==void 0&&t.fuse!==null){t.fuse-=i;let s=Math.sin(x.time*(t.fuse<1?40:18))>0;t.mesh.scale.setScalar(t.scale*(s?1.08:1)),Math.random()<.5&&le({pos:Bt(e.position).add(new b(0,.5*t.scale,0)),vel:new b(B(-1,1),2,B(-1,1)),color:16769162,size:.08,life:.3,glow:!0,add:!0,gravity:2}),lt.fuse(e.position),t.fuse<=0&&(t.fuse=null,t.onFuse?t.onFuse():Xi(t,0))}if(t.def.special==="balloon"&&e.position.y>120&&Jr(t),t.gen>=2&&x.time-t.born>25){let s=x.time-t.born-25;t.mesh.scale.setScalar(t.scale*Math.max(.01,1-s)),s>=1&&Ge(t,!0)}t.update&&t.update(i)}for(let t of x.ropes){let e=Bt(t.a.pointToWorldFrame(t.la)),n=Bt(t.b.pointToWorldFrame(t.lb)),s=e.distanceTo(n);t.strand.update(e,n,Math.max(0,(t.len-s)*.5))}}function Md(i,t=12){if(i.kind==="ragpart"){i.dummy.freeze(t);return}if(i.frozen){i.frozen=t;return}i.frozen=t,i.origMass=i.body.mass,i.body.type=it.STATIC,i.body.mass=0,i.body.updateMassProperties(),i.body.velocity.setZero(),i.body.angularVelocity.setZero(),i.mesh.traverse(e=>{e.isMesh&&(e.userData.orig=e.material,e.material=yM)}),fn(Bt(i.body.position),new b(0,1,0),12580095,12,4)}function Zi(i){if(!(!i.frozen&&i.body.type===it.DYNAMIC)){if(i.kind==="ragpart"){i.dummy.unfreeze();return}i.frozen=0,i.body.type=it.DYNAMIC,i.body.mass=i.origMass||10,i.body.updateMassProperties(),i.body.wakeUp(),i.mesh.traverse(t=>{t.isMesh&&t.userData.orig&&(t.material=t.userData.orig,t.userData.orig=null)})}}function sc(i,t){if(i.kind!=="item")return!1;let e=xe(i.scale*t,.25,6);if(Math.abs(e-i.scale)<.01)return!1;let n=e/i.scale,s=i.body;for(;s.shapes.length;)s.removeShape(s.shapes[0]);return Um(s,i.def,e),s.type===it.DYNAMIC?s.mass=xe(s.mass*n**3,.08,5e3):i.origMass=xe((i.origMass||10)*n**3,.08,5e3),s.updateMassProperties(),s.aabbNeedsUpdate=!0,s.wakeUp(),i.scale=e,i.mesh.scale.setScalar(e),n>1&&(s.position.y+=.3*n),!0}function Ed(i){let t=new Rt().setHSL(Math.random(),.85,.55);i.mesh.traverse(e=>{e.isMesh&&(e.material=e.material.clone(),e.material.color.copy(t))})}function Nn(i,t,e={}){let n=typeof i=="string"?Kt[i]:i;if(!n)return null;if(n.dummy)return EM(n.dummy.variant,t,e);if(n.prefab)return jt(n.prefab,t,e.yaw??0,e.spawned);let s=t.clone();return e.onGround&&(s.y+=Kr(n)*(e.scale??1)+.02),Gt(n,s,e)}function Kr(i){return i.shape==="box"?i.rot?Math.max(...i.size)/2:i.size[1]/2:i.shape==="sphere"?i.r:i.shape==="cyl"?i.rot?i.r:i.h/2:i.collider?i.collider[1]/2:i.shape==="compound"?.9:.5}function EM(i,t,e){if(i==="crowd"){for(let n=0;n<6;n++)Gn(t.clone().add(new b(B(-2.5,2.5),0,B(-2.5,2.5))),"normal",e);return null}return Gn(t,i,e)}function He(i,t,e,n,s){let o=Math.cos(s),r=Math.sin(s);return new b(i.x+t*o+n*r,i.y+e,i.z-t*r+n*o)}function $r(i){return new Ee().setFromAxisAngle(new b(0,1,0),i)}function jt(i,t,e=0,n=!0,s=!1){let o={spawned:n,sleep:s,quat:$r(e)},r=(a,l,c,h,d={})=>Gt(Kt[a],He(t,l,c,h,e),{...o,...d});if(i==="wall")for(let a=0;a<6;a++)for(let l=0;l<6;l++)r("brick",(l-2.5)*.92+a%2*.46-.23,.225+a*.455,0);else if(i==="tower")for(let a=0;a<6;a++)r("crate",0,.5+a*1.001,0);else if(i==="pyramid"){let a=0;for(let l=4;l>=1;l--){for(let c=0;c<l;c++)for(let h=0;h<l;h++)r("crate",(c-(l-1)/2)*1.01,.5+a,(h-(l-1)/2)*1.01);a+=1.001}}else if(i==="domino")for(let a=0;a<16;a++)r("domino",0,.6,-1.5-a*.75);else if(i==="jenga")for(let a=0;a<14;a++)for(let l=-1;l<=1;l++)a%2?r("plank",l*.52,.1+a*.201,0,{quat:$r(e+Math.PI/2)}):r("plank",0,.1+a*.201,l*.52);else if(i==="glassroom"){r("glass",0,1,-1.06),r("glass",0,1,1.06),r("glass",-1.06,1,0,{quat:$r(e+Math.PI/2)}),r("glass",1.06,1,0,{quat:$r(e+Math.PI/2)});let a={...Kt.slab,size:[2.3,.3,1.16]};Gt(a,He(t,0,2.16,-.58,e),o),Gt(a,He(t,0,2.16,.58,e),o),Gn(He(t,0,0,0,e),"normal",{spawned:n})}else if(i==="bowling"){let a=0;for(let l=0;l<4;l++)for(let c=0;c<=l;c++)r("pin",(c-l/2)*.45,.41,-6-l*.42),a++;r("bowling",0,.3,2)}else if(i==="tntstack")for(let a=0;a<3;a++)for(let l=0;l<3-a;l++)for(let c=0;c<3-a;c++)r("tnt",(l-(2-a)/2)*.92,.45+a*.91,(c-(2-a)/2)*.92);else if(i==="minefield")for(let a=0;a<12;a++)r("mine",B(-6,6),.08,B(-6,6)-8);else if(i==="house"){let a=(l,c,h)=>({...Kt.chunk,size:[l,c,h],mat:"wood",tex:"plank"});Gt(a(1.8,2.4,.2),He(t,-1.6,1.2,2,e),o),Gt(a(1.8,2.4,.2),He(t,1.6,1.2,2,e),o),Gt(a(1.4,.6,.2),He(t,0,2.1,2,e),o),Gt(a(5,2.4,.2),He(t,0,1.2,-2,e),o),Gt(a(.2,2.4,3.8),He(t,-2.4,1.2,0,e),o),Gt(a(.2,2.4,3.8),He(t,2.4,1.2,0,e),o),Gt(a(5.4,.2,4.6),He(t,0,2.52,0,e),o),r("table",0,.45,-.6)}else if(i==="bridge"){for(let l of[-4.5,4.5])for(let c of[-1,1])for(let h=0;h<3;h++)r("stone",c,.5+h*1.005,l);let a={...Kt.chunk,size:[.3,.3,10.2],mat:"wood",tex:"log"};Gt(a,He(t,-1,3.17,0,e),o),Gt(a,He(t,1,3.17,0,e),o);for(let l=0;l<18;l++)r("plank",0,3.43,-4.4+l*.52)}else if(i==="skyscraper")for(let a=0;a<6;a++)for(let l=0;l<3;l++)for(let c=0;c<2;c++)r("concrete_big",(l-1)*2.01,1+a*2.004,(c-.5)*2.01);else if(i==="fort"){let a={...Kt.log,rot:void 0,h:3,r:.28};for(let l=0;l<22;l++){let c=l/24*Math.PI*2;Gt(a,He(t,Math.cos(c)*5,1.5,Math.sin(c)*5,e),o)}r("barrel",0,.6,0),r("crate",1.5,.5,1)}else if(i==="arch"){for(let a of[-1.3,1.3])for(let l=0;l<3;l++)r("stone",a,.5+l*1.005,0);Gt({...Kt.slab,size:[3.8,.6,1]},He(t,0,3.32,0,e),o)}else if(i==="stairs")for(let a=0;a<5;a++)for(let l=0;l<=a;l++)r("crate",0,.5+l*1.001,-a*1.01);else if(i==="igloo"){for(let a=0;a<3;a++){let l=2.4-a*.55,c=12-a*3;for(let h=0;h<c;h++){let d=h/c*Math.PI*2+a*.3;a===0&&h===0||Gt({...Kt.ice,size:[.9,.7,.6]},He(t,Math.cos(d)*l,.35+a*.71,Math.sin(d)*l,e),{...o,quat:$r(e-d-Math.PI/2)})}}Gt({...Kt.ice,size:[1.4,.4,1.4]},He(t,0,2.35,0,e),o)}else if(i==="snowman"){let a=u=>({...Kt.snowball,r:u}),l=Gt(a(.75),He(t,0,.75,0,e),o),c=Gt(a(.52),He(t,0,1.97,0,e),o),h=Gt(a(.36),He(t,0,2.82,0,e),o),d=Gt({id:"carrot",shape:"cyl",r:.07,rt:.01,h:.35,mat:"fruit",color:16743168,splat:16743168},He(t,0,2.82,.45,e),{...o,quat:new Ee().setFromEuler(new ke(Math.PI/2,e,0,"YXZ"))});qi(l.body,c.body),qi(c.body,h.body),qi(h.body,d.body)}else if(i==="pallets")for(let a=0;a<5;a++)r("pallet",0,.15+a*.31,0);else if(i==="ballpit")for(let a=0;a<40;a++)Gt(Kt.ball,t.clone().add(new b(B(-3,3),8+B(0,8),B(-3,3))),{spawned:n,color:"random"});return null}var SM={hay:1.5,cactus:.3,wood:1,foam:1.3,fruit:.25,tnt:1,car:.5,appliance:.2,balloon:1,plastic:.4,rubber:.3,beach:1,jelly:0,flesh:1,bouncyflesh:1};function $i(i,t=8){if(!i||i.dead)return;if(i.kind==="dummybody"||i.kind==="ragpart"){i.dummy.ignite();return}if(i.frozen){Zi(i);return}let e=SM[i.def.mat]||0;if(!(e<=0||i.body.position.y<x.waterY)){if(i.def.special==="balloon"){Jr(i);return}i.def.explosive&&i.fuse==null&&!i.detonating&&(i.fuse=B(.7,1.5)),i.burn>0||(i.mesh.traverse(n=>{n.isMesh&&!n.userData.charClone&&(n.material=n.material.clone(),n.userData.charClone=!0)}),x.burning=(x.burning||0)+1),i.burn=Math.max(i.burn||0,t*e),i.spreadT=B(.2,.5)}}var TM=new Rt(1709072);function AM(i,t){let e=i.body;if(e.position.y<x.waterY){i.burn=0,x.burning--,ln(Bt(e.position),5,14540253,.6),lt.sizzle(e.position);return}i.burn-=t;let n=Bt(e.position),s=(i.def.size?Math.max(...i.def.size):(i.def.r??.5)*2)*i.scale;if(Math.random()<.7&&le({pos:n.clone().add(new b(B(-.4,.4)*s,B(0,.4)*s,B(-.4,.4)*s)),vel:new b(B(-.5,.5),B(2,4),B(-.5,.5)),color:Math.random()<.5?16742938:16760906,size:B(.2,.4)*Math.min(2,s),life:B(.4,.8),glow:!0,add:!0,gravity:-2,drag:1,floor:!1}),Math.random()<.15&&lt.fire(n),Math.random()<.08&&ln(n.clone().add(new b(0,s*.6,0)),1,3355443,.5*Math.min(2,s)),i.mesh.traverse(o=>{o.isMesh&&o.userData.charClone&&o.material.color.lerp(TM,t*.12)}),i.hp!==1/0&&!i.def.explosive&&(i.hp-=t*9,i.hp<=0)){x.burning--,i.burn=0,jr(i,null);return}if(i.def.mat==="car"&&i.burn<2&&!i.carBoom&&(i.carBoom=!0,Qo(.1,()=>{if(!i.dead){let o=Bt(i.body.position);Ge(i,!0),Pn(o,1.6,{fire:!0})}})),i.spreadT-=t,i.spreadT<=0){i.spreadT=.5;let o=.9+s*.7;for(let r of x.ents){if(r===i||r.dead||r.burn>0)continue;let a=r.body.position,l=a.x-n.x,c=a.y-n.y,h=a.z-n.z;l*l+c*c+h*h<o*o&&Math.random()<.4&&$i(r,8)}for(let r of x.dummies)!r.burn&&r.center().distanceTo(n)<o+.4&&Math.random()<.4&&r.ignite()}i.burn<=0&&(i.burn=0,x.burning--)}function Sd(i,t=3.5,e=7){x.firePatches=x.firePatches||[],x.firePatches.push({pos:i.clone(),r:t,t:e,tick:0})}function Td(i){if(x.firePatches)for(let t=x.firePatches.length-1;t>=0;t--){let e=x.firePatches[t];if(e.t-=i,e.t<=0){x.firePatches.splice(t,1);continue}for(let n=0;n<3;n++){let s=B(0,Math.PI*2),o=Math.sqrt(Math.random())*e.r;le({pos:e.pos.clone().add(new b(Math.cos(s)*o,.1,Math.sin(s)*o)),vel:new b(0,B(2,4),0),color:Math.random()<.5?16738842:16760906,size:B(.25,.5),life:B(.4,.8),glow:!0,add:!0,gravity:-2,floor:!1})}if(e.tick-=i,!(e.tick>0)){e.tick=.3;for(let n of x.ents)!(n.burn>0)&&Bt(n.body.position).distanceTo(e.pos)<e.r+.5&&$i(n,8);for(let n of x.dummies)!n.burn&&n.origin().distanceTo(e.pos)<e.r&&n.ignite();x.player&&x.player.feet().distanceTo(e.pos)<e.r&&(x.player.fling(new b(0,.6,0)),x.player.hot=.3)}}}var Qr=qe.DYN|qe.STATIC;function pn(i=150){let t=x.aim.start||x.aim.origin;return bn(t,t.clone().addScaledVector(x.aim.dir,i),Qr)}function to(i=150,t=8){let e=pn(i);return e||{point:(x.aim.start||x.aim.origin).clone().addScaledVector(x.aim.dir,t),normal:new b(0,1,0),body:null,dist:t,miss:!0}}function Ue(i){let t=i&&i.ent;return t&&(t.kind==="dummybody"||t.kind==="ragpart")?t.dummy:null}function ta(i,t){return i.clone().add(new b((Math.random()-.5)*t*2,(Math.random()-.5)*t*2,(Math.random()-.5)*t*2)).normalize()}function Rd(i,t,e,n,s=16769126){let o=i.body,r=o.ent;if(fn(i.point,i.normal,s,6,5),!r){Hn(i.point,9075290,3,.08,3);return}let a=Ue(o);if(a){if(a.state==="standing")a.knock(t.clone().multiplyScalar(n*1.2));else{let l=Math.min(o.mass,15)*n;o.applyImpulse(new _(t.x*l,t.y*l,t.z*l),new _(i.point.x-o.position.x,i.point.y-o.position.y,i.point.z-o.position.z)),o.wakeUp(),a.hurt(e,t)}Hn(i.point,16728128,2,.06,3);return}if(o.type===it.DYNAMIC){let l=Math.min(o.mass,15)*n;o.applyImpulse(new _(t.x*l,t.y*l,t.z*l),new _(i.point.x-o.position.x,i.point.y-o.position.y,i.point.z-o.position.z)),o.wakeUp()}if(r.def&&r.def.explosive){(r.def.explosive.hp<=e||(r.hp-=e)<=0)&&Xi(r,.03);return}vs(r,e,t)}function ea(i){let t=Object.assign({t:0,life:5,gravity:0,collide:!0},i);return t.mesh&&(x.scene.add(t.mesh),t.mesh.position.copy(t.pos)),x.projectiles.push(t),t}var Vm=new b,RM=new b(0,1,0);function Cd(i){for(let t=x.projectiles.length-1;t>=0;t--){let e=x.projectiles[t];e.t+=i,Vm.copy(e.pos),e.vel.y-=e.gravity*i,e.steer&&e.steer(e,i),e.pos.addScaledVector(e.vel,i),e.mesh&&(e.mesh.position.copy(e.pos),e.vel.lengthSq()>.01&&e.mesh.quaternion.setFromUnitVectors(RM,e.vel.clone().normalize())),e.trail&&e.trail(e.pos.clone(),e);let n=!1;if(e.collide&&e.onHit){let s=bn(Vm,e.pos,Qr);s?(e.onHit(s,e),n=!0):e.pos.y<x.waterY&&e.water!==!1&&(e.onHit({point:e.pos.clone().setY(x.waterY),normal:new b(0,1,0),body:null,water:!0},e),n=!0)}!n&&e.t>=e.life&&(e.end&&e.end(e.pos.clone(),e),n=!0),n&&(e.mesh&&x.scene.remove(e.mesh),x.projectiles.splice(t,1))}}function oc(i,t,e=!1){let n=new Et(i,e?new Se({color:t}):new ue({color:t,flatShading:!0}));return n.castShadow=!e,n}function _s(i,t,e=null,n=-1){let s=[],o=new b;for(let r of x.world.bodies){if(r.type!==it.DYNAMIC||r.isPlayer)continue;o.set(r.position.x-i.x,r.position.y-i.y,r.position.z-i.z);let a=o.length();a>t||e&&a>.3&&o.dot(e)/a<n||s.push({b:r,d:a,dir:a>.001?o.clone().divideScalar(a):new b(0,1,0)})}return s}function or(i,t){let e=[];for(let n of x.dummies)n.center().distanceTo(i)<t&&e.push(n);return e}function eo(i){return xe(Math.pow(20/i,.3),.2,1.4)}var Hm=18,Gm=2.5,Wm=14,CM=24,xi=null,no=null,na=[],IM=new Rt(16777215),PM=new Rt(16730698),NM=new Rt;function qm(){return x.aim.start.clone().addScaledVector(x.aim.dir,x.grab.dist)}var bs=new _,Id=new _,rr=new _;function LM(){let i=x.grab;if(!i)return;let t=i.body;if(!x.world.bodies.includes(t)||t.type!==it.DYNAMIC){ar(!1);return}t.pointToWorldFrame(i.local,bs);let e=i.target;bs.vsub(t.position,Id),t.angularVelocity.cross(Id,rr),rr.vadd(t.velocity,rr);let n=110,s=17,o=t.mass,r=((e.x-bs.x)*n-rr.x*s)*o,a=((e.y-bs.y)*n-rr.y*s+9.82)*o,l=((e.z-bs.z)*n-rr.z*s)*o,c=Math.hypot(r,a,l),h=9e3;if(c>h){let d=h/c;r*=d,a*=d,l*=d}t.applyForce(new _(r,a,l),Id),t.angularVelocity.scale(.985,t.angularVelocity),i.spin&&(t.angularVelocity.y+=.6),i.tension=xe(c/h,0,1)*.5+xe(Math.hypot(e.x-bs.x,e.y-bs.y,e.z-bs.z)/4,0,1)*.5}function ar(i=!0){x.grab&&(x.grab.body.angularDamping=x.grab.oldAngDamp,x.grab=null,xi&&xi.hide(),i&&lt.drop())}function FM(){let i=pn(Hm);if(!i){de("Too far \u2014 get closer");return}let t=i.body,e,n=Ue(t);if(n){n.state==="standing"&&n.knock(null);let s=null,o=1e9;for(let r in n.parts){let a=n.parts[r].body,l=Bt(a.position).distanceTo(i.point);l<o&&(o=l,s=a)}n.frozen&&n.unfreeze(),t=s,e=new _(0,0,0)}else{let s=t.ent;if(s&&s.frozen&&Zi(s),t.type!==it.DYNAMIC){de("Can't grab that");return}e=t.pointToLocalFrame(new _(i.point.x,i.point.y,i.point.z))}x.grab={body:t,local:e,dummy:n,dist:xe(i.point.distanceTo(x.aim.start),Gm,Wm),target:new b,tension:0,spin:!1,oldAngDamp:t.angularDamping},t.wakeUp(),t.angularDamping=.4,x.grab.target.copy(qm()),lt.grab(),fn(i.point,i.normal,16777215,6,3)}function BM(){let i=x.grab,t=x.aim.dir.clone(),e=i.dummy?i.dummy.massTotal:i.body.mass,n=40*xe(Math.pow(20/e,.2),.4,1.2),s=t.multiplyScalar(n).add(new b(0,2.5,0));if(i.dummy){for(let o in i.dummy.parts){let r=i.dummy.parts[o].body;r.velocity.set(s.x+B(-1,1),s.y+B(-1,1),s.z+B(-1,1)),r.angularVelocity.set(B(-10,10),B(-10,10),B(-10,10))}i.dummy.markFling(),na.push({body:i.dummy.parts.torso.body,t:.9})}else i.body.velocity.set(s.x,s.y,s.z),i.body.angularVelocity.set(B(-6,6),B(-6,6),B(-6,6)),na.push({body:i.body,t:.7});no={to:Bt(i.body.pointToWorldFrame(i.local)),t:.12},ar(!1),lt.fling(),x.shake=Math.max(x.shake,.2),x.fovPunch=6}x.extraForces.push(LM);x.onRemove=i=>{x.grab&&x.grab.body===i.body&&ar(!1)};function Xm(i){for(let t=na.length-1;t>=0;t--){let e=na[t];if(e.t-=i,e.t<=0||e.body.velocity.length()<6){na.splice(t,1);continue}le({pos:Bt(e.body.position),vel:new b,color:16777215,size:.12,life:.35,glow:!0,add:!0,opacity:.5,gravity:0,drag:0,spin:0})}}var Pd=[{id:"fling",name:"Fling Line",icon:"\u270B",color:16777215,hint:"Click: grab / drop \xB7 F: THROW \xB7 Z/X: shorter/longer line \xB7 R: spin",down(){x.grab?ar():FM()},unequip(){ar(!1)},update(i,t){xi||(xi=new ys(16777215,.022,16,!0));let e=x.grab;if(x.crossHint=null,e){if(t.held("KeyZ")&&(e.dist=Math.max(Gm,e.dist-i*8)),t.held("KeyX")&&(e.dist=Math.min(Wm,e.dist+i*8)),e.spin=t.held("KeyR"),t.tap("KeyF")){BM();return}e.target.copy(qm());let n=Bt(e.body.pointToWorldFrame(e.local)),s=x.aim.hand;if(n.distanceTo(s)>CM){ar(),de("Line snapped!");return}let o=e.tension;xi.setColor(NM.copy(IM).lerp(PM,xe((o-.4)/.6,0,1)));let r=xe(1-o*1.6,0,1)*Math.min(1.5,n.distanceTo(s)*.12);xi.update(s,n,r,null)}else if(no)no.t-=i,no.t<=0?(no=null,xi.hide()):(xi.setColor(16777215),xi.update(x.aim.hand,x.aim.hand.clone().lerp(no.to,no.t/.12),0,null));else{xi.hide();let n=pn(Hm);x.crossHint=n&&(n.body.type===it.DYNAMIC||Ue(n.body))?"grab":null}}}];var rc=new b(0,1.2,34),ac=class{constructor(){let t=new it({mass:70,material:x.mats.player,fixedRotation:!0,collisionFilterGroup:qe.PLAYER,allowSleep:!1,linearDamping:0});t.addShape(new Cn(.4),new _(0,-.5,0)),t.addShape(new Cn(.4),new _(0,.35,0)),t.position.set(rc.x,rc.y,rc.z),t.isPlayer=!0,t.updateMassProperties(),x.world.addBody(t),this.body=t,this.meshes=dd(1,{skin:15843965,shirt:2068209,pants:2829634,sleeve:!0});for(let a in this.meshes)x.scene.add(this.meshes[a]);let e=new Et(new Fe(.54,.14,.54),new ue({color:16726843,flatShading:!0}));e.position.y=.2;let n=new Et(new Fe(.5,.05,.25),e.material);n.position.set(0,.15,.3),this.meshes.head.add(e,n),this.view=new hn;let s=new Et(new Fe(.13,.13,.26),new ue({color:2068209,flatShading:!0}));s.position.set(0,-.02,.08);let o=new Et(new Fe(.12,.12,.12),new ue({color:15843965,flatShading:!0}));o.position.set(0,0,-.08),this.toolMesh=new Et(new Fe(.1,.12,.42),new ue({color:3355443,flatShading:!0,emissive:0})),this.toolMesh.position.set(0,.07,-.2);let r=new Et(new Fe(.06,.06,.08),new Se({color:16777215}));r.position.set(0,0,-.24),this.toolMesh.add(r),this.tip=r,this.view.add(s,o,this.toolMesh),this.view.position.set(.32,-.28,-.5),this.view.scale.setScalar(.26),[s,o,this.toolMesh,r].forEach((a,l)=>{a.renderOrder=10+l,a.frustumCulled=!1,a.material.depthTest=!1,a.material.depthWrite=!1}),x.camera.add(this.view),this.yaw=0,this.pitch=-.1,this.camMode=1,this.camDist=5.5,this.stun=0,this.airJumps=1,this.flying=!1,this.phase=0,this.moveAmt=0,this.grounded=!1,this.wasGrounded=!0,this.swing=0,this.camPos=new b,this.fwd=new b}pos(){return Bt(this.body.position)}feet(){return Bt(this.body.position).add(new b(0,-.9,0))}fling(t){this.body.velocity.x+=t.x,this.body.velocity.y+=t.y,this.body.velocity.z+=t.z,t.length()>4&&(this.stun=Math.max(this.stun,.6))}respawn(){let t=x.spawn||rc;this.body.position.set(t.x,t.y,t.z),this.body.velocity.setZero(),this.body.interpolatedPosition.copy(this.body.position),this.body.previousPosition.copy(this.body.position),this.camY=void 0,this.stun=0}setToolColor(t){this.toolMesh.material.color.set(t),this.toolMesh.material.emissive.set(t).multiplyScalar(.3),this.tip.material.color.set(t).lerp(new Rt(16777215),.5)}update(t,e){let n=this.body;this.yaw-=e.lookX,this.pitch=xe(this.pitch-e.lookY,-1.5,1.45);let s=new b(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),o=new b(Math.cos(this.yaw),0,-Math.sin(this.yaw)),r=n.position,a=bn(new b(r.x,r.y-.5,r.z),new b(r.x,r.y-1.08,r.z)),l=a&&a.body.type===it.DYNAMIC?a.body:null;this.platform=l;let c=l?l.velocity:{x:0,y:0,z:0};this.grounded=!!a&&n.velocity.y-c.y<6,this.grounded&&(this.airJumps=1);let h=r.y<x.waterY+.4,d=new b;e.f&&d.add(s),e.b&&d.sub(s),e.r&&d.add(o),e.l&&d.sub(o),d.lengthSq()>0&&d.normalize();let u=e.sprint?12:7;h&&(u=4.5),this.flying&&(u=e.sprint?30:16),this.stun=Math.max(0,this.stun-t*(this.grounded?3:1));let f=this.grounded?14:4;this.stun>0&&(f*=.08),this.flying&&(f=8);let g=Math.min(1,f*t),y=d.x*u+c.x,m=d.z*u+c.z,p=Math.hypot(n.velocity.x-c.x,n.velocity.z-c.z);if(p<u+.5||this.grounded||d.lengthSq()>0){let N=p>u+2&&!this.grounded?g*.15:l?1:g;n.velocity.x+=(y-n.velocity.x)*N,n.velocity.z+=(m-n.velocity.z)*N}if(l&&this.grounded&&!e.jump&&!this.flying&&(n.velocity.y=Math.min(n.velocity.y,c.y+.5)),this.flying){let N=(e.jumpHeld?1:0)-(e.sprintDown?1:0);n.velocity.y=N*12}else h?(n.velocity.y+=(x.waterY+.1-r.y)*12*t,n.velocity.y*=1-1.5*t,e.jumpHeld&&(n.velocity.y=Math.max(n.velocity.y,5))):(e.jump||this.jumpBuf>0&&this.grounded)&&(this.grounded||this.coyote>0?(n.velocity.y=c.y+8.5,lt.jump(),this.coyote=0,this.jumpBuf=0):e.jump&&this.airJumps>0&&(this.airJumps--,n.velocity.y=8,ln(this.feet(),4,16777215,.35),lt.jump()));e.jump&&!this.grounded&&this.coyote<=0&&(this.jumpBuf=.15),this.jumpBuf=Math.max(0,(this.jumpBuf||0)-t),this.coyote=this.grounded?.12:Math.max(0,(this.coyote||0)-t),!this.wasGrounded&&this.grounded&&this.lastVy<-6&&(lt.land(-this.lastVy),this.lastVy<-12&&ln(this.feet(),5,14274488,.5)),this.wasGrounded=this.grounded,this.lastVy=n.velocity.y,r.y<(x.killY??-30)&&this.respawn();let v=Math.cos(this.pitch);this.fwd.set(-Math.sin(this.yaw)*v,Math.sin(this.pitch),-Math.cos(this.yaw)*v);let M=n.interpolatedPosition,w=M.y+.65;this.camY===void 0||Math.abs(w-this.camY)>1.5?this.camY=w:this.camY+=(w-this.camY)*Math.min(1,t*22);let I=new b(M.x,this.camY,M.z),A;if(this.camMode===1)A=I.clone().add(new b(0,.15,0));else{A=I.clone().addScaledVector(this.fwd,-this.camDist).addScaledVector(o,.8).add(new b(0,.35,0));let N=bn(I,A,qe.STATIC);N&&(A=I.clone().lerp(N.point,Math.max(0,(N.dist-.3)/I.distanceTo(A)))),r.y>x.waterY+.5&&(A.y=Math.max(A.y,x.waterY+.3))}x.shake>0&&(A.add(new b((Math.random()-.5)*x.shake*.4,(Math.random()-.5)*x.shake*.4,(Math.random()-.5)*x.shake*.4)),x.shake=Math.max(0,x.shake-t*2.5)),x.camera.position.copy(A),x.camera.quaternion.setFromEuler(new ke(this.pitch,this.yaw,0,"YXZ")),x.fovPunch=Math.max(0,(x.fovPunch||0)-t*30);let L=(x.settings?x.settings.fov:72)+(e.sprint&&d.lengthSq()>0?6:0)+(this.flying?6:0)+x.fovPunch;x.camera.fov+=(L-x.camera.fov)*Math.min(1,10*t),x.camera.updateProjectionMatrix(),this.camPos.copy(A),x.aim.origin.copy(A),x.aim.dir.copy(this.fwd),x.aim.start=A.clone().addScaledVector(this.fwd,Math.max(0,I.clone().sub(A).dot(this.fwd)));let S=Math.hypot(n.velocity.x,n.velocity.z);this.moveAmt+=((this.grounded?xe(S/6,0,1):.3)-this.moveAmt)*Math.min(1,8*t),this.phase+=t*(3+S*1.6),this.swing=Math.max(0,this.swing-t*4);let E=!1;for(let N in this.meshes)this.meshes[N].visible=E;if(fd(this.meshes,1,this.feet(),this.yaw+Math.PI,this.phase,this.moveAmt,{aim:this.swing>0?void 0:this.pitch,swing:this.swing>0?this.swing:void 0,pitch:this.pitch}),this.stun>.2&&!this.grounded){let N=new Ee().setFromAxisAngle(new b(1,0,0),x.time*10);this.meshes.torso.quaternion.multiply(N)}this.kick=Math.max(0,(this.kick||0)-t*4),this.view.position.set(.17,-.135,-.36+this.kick*.04),this.view.rotation.set(this.swing>0?-Math.sin(this.swing*Math.PI)*1.2:0,this.swing>0?Math.sin(this.swing*Math.PI)*.8:0,0),x.camera.updateMatrixWorld(),this.tip.getWorldPosition(x.aim.hand)}};var vi=null,cc=[],so=null,Ld=null,hc=[],ws=null,lc=1;function Ms(i){lc=i}function oo(){return lc=lc*16807%2147483647,(lc-1)/2147483646}function Ot(i,t){return i+oo()*(t-i)}var Nd={};function ro(i,t,e=1){let n=i+"|"+t+"|"+e;if(Nd[n])return Nd[n];let s={color:i,flatShading:!0,roughness:.95};if(t){let o=Xl[t]().clone();o.wrapS=o.wrapT=Rr,o.repeat.set(e,e),o.needsUpdate=!0,s.map=o}return Nd[n]=new ue(s)}function ao(i,t,e,n){let s=new it({mass:0,material:x.mats.ground,collisionFilterGroup:qe.STATIC});return s.addShape(i),s.position.set(t.x,t.y,t.z),e&&s.quaternion.set(e.x,e.y,e.z,e.w),x.world.addBody(s),cc.push(s),n&&(n.position.copy(t),e&&n.quaternion.copy(e),vi.add(n)),s}function ge(i,t,e,n,s,o,r=10066329,a=null,l=null,c=1){let h=l?new Ee().setFromEuler(new ke(...l)):null,d=new Et(new Fe(i,t,e),ro(r,a,c));return d.castShadow=!0,d.receiveShadow=!0,ao(new Qn(new _(i/2,t/2,e/2)),new b(n,s,o),h,d)}function DM(i,t,e,n,s,o,r=null,a=12){let l=new Et(new je(i,i,t,a),ro(o,r));return l.castShadow=!0,l.receiveShadow=!0,ao(new Gi(i,i,t,a),new b(e,n,s),null,l)}function dc(i,t,e,n){return i.position.set(t,e,n),vi.add(i),i}var Fd=!1,Ym=[4165434,5219146,3111474,6076508];function sa(i,t,e,n=1){let s=new Et(new je(.22*n,.32*n,2.2*n,6),ro(8016432));s.castShadow=!0,ao(new Gi(.3*n,.3*n,2.2*n,6),new b(i,t+1.1*n,e),null,s);let o=Fd?15660280:Ym[oo()*Ym.length|0];for(let r=0;r<3;r++){let a=new Et(new Ui((1.6-r*.4)*n,1.6*n,7),ro(o));a.castShadow=!0,a.rotation.y=oo()*3,dc(a,i,t+(2.2+r*.9)*n,e)}ao(new Cn(1.3*n),new b(i,t+3*n,e),null,null)}function Bd(i,t,e,n=1){let s=new Et(new fl(n,0),ro(9080726));s.scale.set(1,Ot(.6,.9),1),s.rotation.set(oo()*3,oo()*3,oo()*3),s.castShadow=!0,s.receiveShadow=!0,ao(new Cn(n*.75),new b(i,t,e),null,s)}var zM=new je(1.4,1.6,.25,12);function si(i,t,e,n,s=3800988){let o=new Et(zM,new ue({color:s,emissive:s,emissiveIntensity:.5,flatShading:!0}));o.receiveShadow=!0,ao(new Gi(1.4,1.6,.25,12),new b(i,t+.12,e),null,o);let r=new Et(new Ui(.5,.8,4),new Se({color:16777215})),a=n.clone().normalize();r.quaternion.setFromUnitVectors(new b(0,1,0),a),dc(r,i,t+1.2,e),x.pads.push({pos:new b(i,t+.25,e),r:1.6,vel:n,arrow:r,color:s})}function Dd(i,t=900){let e=new Hs(t,t,70,70);e.rotateX(-Math.PI/2),so=new Et(e,new ue({color:2789334,transparent:!0,opacity:.82,flatShading:!0,roughness:.25,metalness:.1})),so.position.y=i,so.receiveShadow=!0,vi.add(so),Ld=Float32Array.from(e.attributes.position.array),x.waterY=i}function UM(i,t){let e=new Go(800,24,12),n=new Dn({side:rn,depthWrite:!1,fog:!1,uniforms:{top:{value:new Rt(i)},bottom:{value:new Rt(t)}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = clamp(vP.y*1.4+0.25,0.0,1.0); gl_FragColor = vec4(mix(bottom, top, h),1.0); }"});ws=new Et(e,n),ws.frustumCulled=!1,vi.add(ws)}function Km(i,t,e){hc=[];let n=new ue({color:16777215,flatShading:!0,roughness:1,transparent:!0,opacity:.92});for(let s=0;s<i;s++){let o=new hn;for(let r=0;r<4;r++){let a=new Et(new An(Ot(3,6),0),n);a.position.set(Ot(-6,6),Ot(-1,1.5),Ot(-3,3)),a.scale.y=.55,o.add(a)}o.position.set(Ot(-e,e),t+Ot(-10,15),Ot(-e,e)),o.userData.v=Ot(.5,2),vi.add(o),hc.push(o)}}var uc=[];function Zm(i,t,e=2){return uc.every(([n,s,o])=>Math.hypot(i-n,t-s)>o+e)}function oi(i){let t=new Set(x.ents);i();for(let e of x.ents)t.has(e)||e.body.sleep()}function Lt(i,t,e,n,s={}){return Nn(i,new b(t,e,n),{onGround:!0,...s})}function ii(i,t,e,n,s=0,o=["normal"]){for(let r=0;r<i;r++)Gn(new b(t+B(-n,n),s+.05,e+B(-n,n)),o[r%o.length])}function Es(i,t,e,n=3){for(let s=0;s<n;s++)Lt("pallet",i+s*2,t,e)}var Je=null,lr=new Rt;function lo({W:i,es:t,height:e,color:n,bedrock:s=-8}){let o=Math.round(i/t)+1,r=[];for(let u=0;u<o;u++){let f=[];for(let g=0;g<o;g++)f.push(e(-i/2+u*t,i/2-g*t));r.push(f)}let a=new Ul(r,{elementSize:t}),l=new it({mass:0,material:x.mats.ground,collisionFilterGroup:qe.STATIC});l.addShape(a),l.position.set(-i/2,0,i/2),l.quaternion.setFromEuler(-Math.PI/2,0,0),x.world.addBody(l),cc.push(l);let c=new Hs(i,i,o-1,o-1);c.rotateX(-Math.PI/2);let h=new Float32Array(o*o*3);c.setAttribute("color",new un(h,3));let d=new Et(c,new ue({vertexColors:!0,flatShading:!0,roughness:.95}));d.receiveShadow=!0,vi.add(d),Je={W:i,es:t,n:o,data:r,shape:a,body:l,geo:c,mesh:d,color:n,bedrock:s,scar:new Float32Array(o*o)};for(let u=0;u<o;u++)for(let f=0;f<o;f++)Qm(u,f);c.computeBoundingSphere(),x.groundAt=oa}function Qm(i,t){let{n:e,data:n,geo:s,W:o,es:r,color:a,scar:l}=Je,c=(e-1-t)*e+i,h=n[i][t];s.attributes.position.setY(c,h);let d=-o/2+i*r,u=o/2-t*r;lr.set(a(h,d,u)),lr.offsetHSL(0,0,(i*73856093^t*19349663)%100/100*.05-.025),l[c]>0&&lr.lerp(new Rt(4863268),Math.min(1,l[c])),s.attributes.color.setXYZ(c,lr.r,lr.g,lr.b)}function oa(i,t){if(!Je)return-1e9;let{W:e,es:n,data:s,n:o}=Je,r=(i+e/2)/n,a=(e/2-t)/n;if(r<0||a<0||r>o-1||a>o-1)return-1e9;let l=xe(Math.floor(r),0,o-2),c=xe(Math.floor(a),0,o-2),h=r-l,d=a-c,u=s[l][c],f=s[l+1][c],g=s[l][c+1],y=s[l+1][c+1];return(u*(1-h)+f*h)*(1-d)+(g*(1-h)+y*h)*d}function OM(i,t,e){if(!Je)return;let n=oa(i.x,i.z);if(n<-1e8||i.y-n>t*.8)return;let{W:s,es:o,n:r,data:a}=Je,l=Math.max(0,Math.floor((i.x-t*1.3+s/2)/o)),c=Math.min(r-1,Math.ceil((i.x+t*1.3+s/2)/o)),h=Math.max(0,Math.floor((s/2-i.z-t*1.3)/o)),d=Math.min(r-1,Math.ceil((s/2-i.z+t*1.3)/o));for(let u=l;u<=c;u++)for(let f=h;f<=d;f++){let g=-s/2+u*o,y=s/2-f*o,m=Math.hypot(g-i.x,y-i.z)/t,p=(r-1-f)*r+u;if(m<1)a[u][f]=Math.max(Je.bedrock,a[u][f]-e*(1-m*m)),Je.scar[p]=Math.min(1,Je.scar[p]+(1-m)*1.5);else if(m<1.3)a[u][f]+=e*.12*(1-(m-1)/.3),Je.scar[p]=Math.min(1,Je.scar[p]+.3);else continue;Qm(u,f)}Je.shape.update(),Je.shape.updateMinValue(),Je.shape.updateMaxValue(),Je.body.aabbNeedsUpdate=!0,Je.geo.attributes.position.needsUpdate=!0,Je.geo.attributes.color.needsUpdate=!0,Hn(new b(i.x,n+.3,i.z),5914672,14,.25,9)}x.crater=(i,t)=>OM(i,2.2*Math.pow(t,.55),1.1*Math.pow(t,.6));function $m(i,t,e,n,s,o,r,a=1){for(let l=0;l<r;l++)for(let c=0;c<s;c++)for(let h=0;h<o;h++)c>0&&c<s-1&&h>0&&h<o-1||Gt(Kt[i],new b(t+(c-(s-1)/2)*a*1.005,e+a/2+l*a*1.002,n+(h-(o-1)/2)*a*1.005),{})}function kM(){Ms(7),lo({W:200,es:2,bedrock:-9,height:(i,t)=>{let e=Math.max(Math.abs(i),Math.abs(t))+.15*Math.min(Math.abs(i),Math.abs(t))*0;return e<66?0:e<80?-4.5*(e-66)/14:-4.5-(e-80)*.4},color:i=>i>-.05?6270538:i>-3.5?15323802:13218426}),Dd(-1),uc=[[0,34,8],[-18,10,6],[24,-18,9],[-26,-26,6],[0,-34,5],[-5,-8,8],[14,22,10],[-34,24,7],[36,32,8],[44,-2,8],[6,14,3],[-10,30,3],[-45,-10,6],[-45,5,5],[40,-45,8]],oi(()=>{jt("pyramid",new b(-18,0,10),0,!1);let i=24,t=-18,e=7;for(let n=0;n<3;n++)for(let s=0;s<e;s++)for(let o of[0,1,2,3]){if(s===e-1)continue;let r,a,l=s-(e-1)/2;o===0?(r=l,a=-(e-1)/2):o===1?(r=(e-1)/2,a=l):o===2?(r=-l,a=(e-1)/2):(r=-(e-1)/2,a=-l),!(o===2&&Math.abs(r)<1&&n<2)&&Gt(Kt.stone,new b(i+r*1.01,.5+n*1.005,t+a*1.01),{})}for(let[n,s]of[[-3,-3],[3,-3],[3,3],[-3,3]])for(let o=3;o<5;o++)Gt(Kt.stone,new b(i+n*1.01,.5+o*1.005,t+s*1.01),{});for(let n=0;n<3;n++)jt("glassroom",new b(-26,n*2.315,-26),0,!1);jt("jenga",new b(0,0,-34),0,!1);for(let n=0;n<34;n++){let s=n*.25,o=2.5+n*.17;Gt(Kt.domino,new b(-5+Math.cos(s)*o,.6,-8+Math.sin(s)*o),{quat:new Ee().setFromAxisAngle(new b(0,1,0),-s)})}jt("bowling",new b(14,0,22),0,!1),jt("tntstack",new b(-34,0,24),0,!1);for(let n=0;n<6;n++){let s=n/6*Math.PI*2;Lt("barrel",-34+Math.cos(s)*3.2,0,24+Math.sin(s)*3.2)}jt("house",new b(-45,0,-10),0,!1),jt("fort",new b(40,0,-45),0,!1),jt("wall",new b(-45,0,5),Math.PI/2,!1)}),ge(2.2,.1,18,14,.05,18,14268282,"plank");for(let[i,t,e,n]of[[-34,28.5,9,1],[-38.5,24,1,9],[-29.5,24,1,9]])ge(e,2.5,n,i,1.25,t,9212054,"stone");for(let[i,t]of[[33.5,29.5],[38.5,29.5],[33.5,34.5],[38.5,34.5]])ge(.6,8,.6,i,4,t,8016432,"log");ge(6,.5,6,36,8.2,32,11565630,"plank"),ge(3,.4,17,36,4.1,43,11565630,"plank",[-.5,0,0]),ge(6,.6,14,44,2.2,-2,10134702,"metal",[.32,0,0]),si(6,0,14,new b(0,24,0)),si(-10,0,30,new b(14,20,-24),16758531),si(28,0,6,new b(0,30,0)),oi(()=>{Lt("pallet",35,8.5,31),Lt("melon",36,8.5,33),Es(-4,0,26,4),Lt("car",10,0,38,{quat:new Ee().setFromAxisAngle(new b(0,1,0),.4)}),Lt("table",-12,0,40),Lt("melon",-12.4,.9,40),Lt("pumpkin",-11.5,.9,40.2),Lt("couch",-16,0,42),Lt("piano",18,0,42),Lt("fridge",21,0,42);for(let i=0;i<4;i++)Lt("beachball",62+B(-3,3),0,B(-20,20));Lt("duck",0,-.5,82),Lt("duck",8,-.5,84),Lt("present",2,0,20),Lt("crystal",-2,0,20);for(let i=0;i<5;i++)Lt("crate",50+B(-4,4),0,50+B(-4,4));Lt("nuke",-55,0,-55)});for(let i=0;i<70;i++){let t=Ot(-62,62),e=Ot(-62,62);Zm(t,e,3)&&(sa(t,0,e,Ot(.8,1.4)),uc.push([t,e,2]))}for(let i=0;i<25;i++){let t=Ot(-62,62),e=Ot(-62,62);Zm(t,e,2)&&Bd(t,.2,e,Ot(.6,1.6))}ii(9,0,5,18),ii(2,-24,-18,3,0,["tiny"]),ii(1,24,-18,1.5,0,["big"]),ii(2,36,32,1,8.5)}function VM(){Ms(11),lo({W:300,es:3,height:()=>0,color:(t,e,n)=>Math.floor(e/15)+Math.floor(n/15)&1?6533965:5940806,bedrock:-6}),uc=[[0,34,8]];for(let t=0;t<4;t++)ge(5,.5,12,30+t*9,1.6+t*.6,10,[3835647,16711790,16760331,8599788][t],null,[.22+t*.1,0,0]);ge(20,.5,6,45,1.5,-20,10134702,"metal",[0,0,0],2),ge(20,.5,6,45,3,-24.5,10134702,"metal",[.7,0,0],2),ge(20,.5,6,45,3,-15.5,10134702,"metal",[-.7,0,0],2);for(let t=0;t<12;t++)ge(4,.5,1.2,-40,.25+t*.5,-10-t*1.2,14208964,"stone");ge(4,.5,4,-40,6,-25.5,14208964,"stone");let i=[[0,0,10],[0,16,-40],[22,32,-70],[-18,48,-100],[0,64,-132]];for(let t=1;t<i.length;t++){let[e,n,s]=i[t];ge(10,1,10,e,n-.5,s,11565630,"plank",null,2);let o=new Et(new Ui(6,8,6),ro(9080726));o.rotation.x=Math.PI,dc(o,e,n-5,s)}for(let t=0;t<i.length-1;t++){let[e,n,s]=i[t],[o,r,a]=i[t+1],l=2.2,c=new b((o-e)/l,(r-n+.5*9.82*l*l)/l,(a-s)/l);si(e+(t===0?0:2),n,s+(t===0?0:2),c,16758531)}oi(()=>{for(let t=1;t<i.length;t++){let[e,n,s]=i[t];Lt("pallet",e-2.5,n,s-2),Lt("crate",e+2,n,s+2)}for(let t=0;t<60;t++)Gt(Kt.domino,new b(-10,.6,20-t*.75),{});jt("skyscraper",new b(-63,0,-43),0,!1),jt("skyscraper",new b(-63,0,-60),0,!1);for(let t=0;t<5;t++)for(let e=0;e<4;e++)Lt("tnt",-70+t*3,0,20+e*3);for(let t=0;t<6;t++)Lt("barrel",-72+t*3,0,33);jt("bowling",new b(20,0,40),0,!1),jt("jenga",new b(70,0,40),0,!1),jt("wall",new b(70,0,20),0,!1),jt("bridge",new b(80,0,-5),Math.PI/2,!1),jt("arch",new b(-25,0,50),0,!1),Es(-4,0,28,4);for(let t=0;t<3;t++)Lt("car",80+t*5,0,-40);jt("pyramid",new b(0,0,-15),0,!1)});for(let[t,e,n,s]of[[60,-65,16,1],[60,-81,16,1],[52,-73,1,16],[68,-73,1,16]])ge(n,2,s,t,1,e,16711790);for(let t=0;t<45;t++)Gt(Kt.ball,new b(60+B(-6,6),1+B(0,3),-73+B(-6,6)),{color:"random"});si(10,0,20,new b(0,26,0));for(let t=0;t<40;t++){let e=Ot(-140,140),n=Ot(-140,140);Math.hypot(e,n)>100&&sa(e,0,n,Ot(1,1.6))}ii(12,0,0,25),ii(3,60,30,5,0,["ninja"]),ii(2,-40,0,4,0,["robot"])}function HM(i,t){let e=7*Math.sin(i*.028)*Math.cos(t*.033)+4*Math.sin(i*.061+1)*Math.sin(t*.054+2)+1.4*Math.sin(i*.13+t*.11);e+=22*Math.exp(-((i-45)**2+(t+35)**2)/500),e+=26*Math.exp(-((i+45)**2+(t+20)**2)/380),e-=11*Math.exp(-((i+5)**2+(t+5)**2)/420);let n=Math.max(Math.abs(i),Math.abs(t));n>90&&(e+=(n-90)*1.2);let s=Math.hypot(i,t-50);return s<16&&(e=e*(s/16)+2*(1-s/16)),e+2}function GM(){Ms(23),lo({W:240,es:3,height:HM,bedrock:-10,color:a=>a<.3?14864277:a<14?6270538:a<22?8225416:16054267}),Dd(-1);let i=oa,t=45,e=-35,n=i(t,e);ge(14,1,14,t,n-.3,e,9212054,"stone",null,3),oi(()=>{for(let a=0;a<3;a++)for(let l=-3;l<=3;l++)for(let[c,h]of[[l,-3],[l,3],[-3,l],[3,l]])Math.abs(l)===3&&(c===-3||c===3)&&(h===-3||h===3)&&h!==l&&c!==l||Gt(Kt.stone,new b(t+c*1.01,n+.7+a*1.005,e+h*1.01),{})});let s=-45,o=-20,r=i(s,o);ge(10,1,10,s,r-.2,o,8225416,"stone"),oi(()=>{for(let a=0;a<4;a++)Lt("boulder",s+(a-1.5)*2.6,r+.4,o+2);Lt("tnt_mega",s,r+.4,o-2.5)}),oi(()=>{for(let[a,l]of[[20,30],[-25,40]])jt("house",new b(a,i(a,l),l),.3,!1);Es(-3,i(0,42)+.2,42,4),Lt("car",8,i(8,50)+.3,50);for(let a=0;a<6;a++)Lt("duck",-5+B(-8,8),-.6,-5+B(-8,8))}),si(-8,i(-8,54),54,new b(-12,22,-30),16758531);for(let a=0;a<110;a++){let l=Ot(-95,95),c=Ot(-95,95),h=i(l,c);h>1&&h<15&&Math.hypot(l,c-50)>14&&Math.hypot(l-45,c+35)>14&&sa(l,h-.2,c,Ot(.8,1.5))}for(let a=0;a<30;a++){let l=Ot(-95,95),c=Ot(-95,95);Bd(l,i(l,c),c,Ot(.6,2))}for(let a=0;a<12;a++){let l=B(-30,30),c=B(20,60);Gn(new b(l,i(l,c)+.1,c),a%6===5?"tiny":"normal")}Gn(new b(t,n+.3,e),"big")}function WM(){Ms(31);let i=[[0,0,0,14],[40,8,-20,10],[-36,14,-40,12],[10,26,-82,16],[62,-8,38,9],[-52,-4,30,10],[-10,40,-140,11]];for(let[t,e,n,s]of i){DM(s,2,t,e-1,n,6270538,"grass",14);let o=new Et(new Ui(s,s*1.3,9),ro(9071178));o.rotation.x=Math.PI,dc(o,t,e-2-s*.65,n);for(let r=0;r<Math.floor(s/4);r++){let a=oo()*6.28,l=Ot(s*.4,s*.8);sa(t+Math.cos(a)*l,e,n+Math.sin(a)*l,Ot(.7,1.1))}}Km(30,-35,250),oi(()=>{Es(-5,0,8,6),jt("tower",new b(40,8,-20),0,!1),jt("pyramid",new b(10,26,-82),0,!1),jt("tntstack",new b(-36,14,-40),0,!1);for(let[t,e,n]of i.slice(1))Lt("pallet",t+2,e,n+2);jt("glassroom",new b(62,-8,38),0,!1),Lt("piano",-52,-4,30),Lt("anvil",-50,-4,28)}),si(-6,0,-4,new b(18,18,-9),16758531),si(6,0,4,new b(0,22,0));for(let[t,e,n,s]of i)s>9&&ii(Math.floor(s/4),t,n,s*.4,e)}function qM(){Ms(41);let i=t=>Math.abs((t%40+40)%40-20)>14;lo({W:200,es:2,bedrock:-6,height:()=>0,color:(t,e,n)=>i(e)||i(n)?3816770:Math.abs((e%40+40)%40-20)>12||Math.abs((n%40+40)%40-20)>12?12170410:6989911});for(let t=0;t<26;t++){let e=t/26*Math.PI*2,n=110+Ot(0,30),s=Ot(25,70);ge(Ot(12,20),s,Ot(12,20),Math.cos(e)*n,s/2,Math.sin(e)*n,[9147809,7239553,10726582,6252915][t%4])}oi(()=>{[[0,0],[40,0],[-40,0],[0,-40],[40,-40],[-40,-40],[40,40],[-40,40]].forEach(([e,n],s)=>{s!==0&&(s%3===0?jt("skyscraper",new b(e,0,n),0,!1):s%3===1?($m("concrete_big",e-4,0,n,3,3,4+s%3,2),$m("concrete_big",e+6,0,n+4,2,2,3,2)):(jt("house",new b(e-5,0,n-3),0,!1),jt("house",new b(e+5,0,n+4),Math.PI,!1)))}),jt("arch",new b(0,0,-6),0,!1);for(let e=0;e<6;e++)Lt("car",-20+B(-1,1),0,-30+e*10,{quat:new Ee().setFromAxisAngle(new b(0,1,0),Math.PI/2)});for(let e=0;e<5;e++)Lt("car",-30+e*12,0,20,{});for(let e=0;e<14;e++)Lt("cone",B(-60,60),0,20+B(-1.5,1.5));for(let e=0;e<10;e++)Lt("lamp",-60+e*13,0,13.5);for(let e=0;e<6;e++)Lt("barrier",18+B(-1,1),0,-20+e*3);for(let e=0;e<5;e++)Lt("mailbox",B(-12,12),0,B(-12,12));Lt("vending",6,0,6),Lt("vending",7.3,0,6);for(let e=0;e<4;e++)Lt("bin",-6+e*4,0,8);Es(-4,0,12,3),jt("pallets",new b(10,0,-10),0,!1)}),si(0,0,0,new b(0,30,0)),ge(8,.5,20,60,3,20,16760331,null,[.3,0,0]),ii(16,0,10,20),ii(3,0,-20,10,0,["zombie"])}function XM(i,t){let e=1.5*Math.sin(i*.07)*Math.sin(t*.05)+1*Math.sin(i*.15+t*.1),n=Math.max(0,Math.sin(i*.025+1)*Math.cos(t*.03)-.35);e+=Math.min(14,n*40);let s=Math.abs(t-18*Math.sin(i*.03));s<9&&(e-=(9-s)*.75);let o=Math.hypot(i,t-50);o<14&&(e=e*(o/14)+1*(1-o/14));let r=Math.max(Math.abs(i),Math.abs(t));return r>100&&(e+=(r-100)*1.3),e+1}function YM(){Ms(53),lo({W:240,es:3,height:XM,bedrock:-8,color:t=>t<-1.5?12098922:t<4?14858618:[13136958,14191183,11887151,14721127][Math.floor(t/2.5)&3]}),Dd(-2.5);let i=oa;oi(()=>{for(let t=0;t<40;t++){let e=Ot(-90,90),n=Ot(-90,90),s=i(e,n);s>.5&&s<3&&Lt("cactus",e,s,n)}for(let[t,e]of[[20,40],[-22,30],[30,-40]])jt("house",new b(t,i(t,e),e),Ot(0,3),!1);for(let t=0;t<10;t++){let e=Ot(-30,30),n=Ot(30,60);Lt(t%3?"barrel":"drum",e,i(e,n),n)}for(let t=0;t<8;t++){let e=Ot(-40,40),n=Ot(-30,0);Lt("hay",e,i(e,n),n)}for(let t=0;t<12;t++){let e=Ot(-20,20),n=Ot(0,20),s=i(e,n);s>-1&&Lt("mine",e,s,n)}Lt("car",5,i(5,46),46),Lt("car",-8,i(-8,44),44),Es(-3,i(0,56)+.1,56,3),jt("fort",new b(-50,i(-50,-50),-50),0,!1)});for(let t=0;t<25;t++){let e=Ot(-95,95),n=Ot(-95,95);Bd(e,i(e,n),n,Ot(.8,2.4))}for(let t=0;t<12;t++){let e=B(-20,20),n=B(40,60);Gn(new b(e,i(e,n)+.1,n),t%4===3?"ninja":"normal")}}function ZM(i,t){let e=6*Math.sin(i*.03+2)*Math.cos(t*.027)+3*Math.sin(i*.08)*Math.sin(t*.07);e+=30*Math.exp(-((i-50)**2+(t+50)**2)/700),Math.hypot(i+10,t+5)<26&&(e=Math.min(e,-.6));let s=Math.hypot(i,t-50);s<14&&(e=e*(s/14)+2*(1-s/14));let o=Math.max(Math.abs(i),Math.abs(t));return o>95&&(e+=(o-95)*1.4),e+2}function $M(){Ms(61),lo({W:240,es:3,height:ZM,bedrock:-9,color:n=>n<3?14674416:n<18?15922937:10134445}),Fd=!0;let i=new Et(new je(26,26,.4,24),new ue({color:11133951,transparent:!0,opacity:.85,roughness:.1,flatShading:!0}));i.receiveShadow=!0;let t=ao(new Gi(26,26,.4,24),new b(-10,1.25,-5),null,i);t.material=x.mats.ice;let e=oa;oi(()=>{for(let[r,a]of[[20,25],[-30,30],[30,-10],[-40,-30]])jt("snowman",new b(r,e(r,a),a),0,!1);for(let[r,a]of[[25,40],[-25,45]])jt("igloo",new b(r,e(r,a),a),0,!1);for(let r=0;r<25;r++)Lt("snowball",-10+B(-15,15),1.5,-5+B(-15,15));for(let r=0;r<8;r++)Lt("ice",-10+B(-10,10),1.5,-5+B(-10,10));Es(-3,e(0,55)+.1,55,3),jt("house",new b(10,e(10,60),60),0,!1);let n=50,s=-50,o=e(n,s);for(let r=0;r<4;r++)Lt("boulder",n+B(-3,3),o+1,s+B(-3,3))});for(let n=0;n<90;n++){let s=Ot(-90,90),o=Ot(-90,90),r=e(s,o);Math.hypot(s+10,o+5)>30&&Math.hypot(s,o-50)>12&&r<20&&sa(s,r-.2,o,Ot(.8,1.5))}Fd=!1;for(let n=0;n<12;n++){let s=B(-25,25),o=B(35,60);Gn(new b(s,e(s,o)+.1,o),n%5===4?"big":"normal")}}function jM(){Ms(71),lo({W:160,es:2,bedrock:-5,height:()=>0,color:(i,t,e)=>Math.hypot(t,e)<12?15323802:Math.abs(t)>60||Math.abs(e)>60?5216828:6533965});for(let[i,t,e,n]of[[0,62,124,.4],[0,-62,124,.4],[62,0,.4,124],[-62,0,.4,124]])ge(e,1.2,n,i,.6,t,16777215);for(let i=0;i<3;i++){let t=-30+i*3;ge(.3,4,.3,t-1.3,2,-30,16711790),ge(.3,4,.3,t+1.3,2,-30,16711790);let e=ge(3,.25,.25,t,4,-30,16711790),n=Gt({...Kt.chunk,size:[1,.12,.5],mat:"wood",tex:"plank"},new b(t,1,-30),{});Yi(e,new _(-.45,0,0),n.body,new _(-.45,0,0),3),Yi(e,new _(.45,0,0),n.body,new _(.45,0,0),3)}for(let i=0;i<2;i++){let t=-10+i*6;ge(.6,.6,.6,t,.15,-30,3835647,null,[Math.PI/4,0,0]),Gt({...Kt.chunk,size:[.6,.12,5],mat:"wood",tex:"plank"},new b(t,.65,-30),{})}ge(3,.3,3,20,4,-30,16760331);for(let[i,t]of[[-1.3,-1.3],[1.3,-1.3],[-1.3,1.3],[1.3,1.3]])ge(.25,4,.25,20+i,2,-30+t,16760331);for(let i=0;i<8;i++)ge(1.2,.15,.4,20,.4+i*.5,-32-i*.05,8599788);ge(1.6,.2,9,20,2,-24.6,448160,null,[-.45,0,0]);for(let i=0;i<4;i++)si(-30+i*6,0,10,new b(0,14+i*4,0),3920383);si(30,0,30,new b(-16,22,-16),16758531);for(let[i,t,e,n]of[[30,15,12,.6],[30,3,12,.6],[24,9,.6,12],[36,9,.6,12]])ge(e,1.4,n,i,.7,t,16711790);for(let i=0;i<60;i++)Gt(Kt.ball,new b(30+B(-5,5),1+B(0,4),9+B(-5,5)),{color:"random"});for(let i=0;i<3;i++)for(let t=0;t<3;t++)ge(.2,3,.2,-30+i*2,1.5,30+t*2,15681391);ge(4.4,.2,4.4,-28,3.1,32,15681391),oi(()=>{jt("pyramid",new b(0,0,30),0,!1),jt("domino",new b(40,0,-10),0,!1),jt("bowling",new b(-45,0,-5),Math.PI/2,!1),jt("stairs",new b(45,0,40),0,!1);for(let i=0;i<6;i++)Lt("beachball",B(-8,8),0,B(-8,8));for(let i=0;i<4;i++)Lt("jelly",-45+i*1.5,0,40);Es(-4,0,45,3),jt("pallets",new b(6,0,45),0,!1)}),ii(14,0,0,30,0,["tiny","tiny","normal","bouncy"])}var ia=[{id:"island",name:"Island",icon:"\u{1F3DD}\uFE0F",desc:"Castle, towers, TNT bunker, beaches & ocean",build:kM,spawn:[0,1.2,34],sky:[4891647,13625855],fog:[13625855,90,320],killY:-30,water:-1,walk:58},{id:"city",name:"City",icon:"\u{1F3D9}\uFE0F",desc:"Concrete buildings you can bring down, cars, zombies",build:qM,spawn:[0,1.2,30],sky:[9417689,15265525],fog:[15265525,80,260],killY:-30,water:-1e3,walk:90},{id:"flat",name:"Flatlands",icon:"\u{1F7E9}",desc:"Huge flat field: stunt ramps, sky platforms, ball pit",build:VM,spawn:[0,1.2,34],sky:[6009343,15135999],fog:[15135999,120,450],killY:-40,water:-1e3,walk:140},{id:"hills",name:"Hills",icon:"\u26F0\uFE0F",desc:"Rolling hills, a lake, a castle hill & boulders to roll",build:GM,spawn:[0,6,50],sky:[8370431,16771276],fog:[16771276,90,300],killY:-30,water:-1,walk:85},{id:"desert",name:"Desert Canyon",icon:"\u{1F3DC}\uFE0F",desc:"Mesas, a river canyon, cacti, oil drums & a minefield",build:YM,spawn:[0,4,50],sky:[6990056,16767400],fog:[16767400,90,320],killY:-30,water:-2.5,walk:85},{id:"snow",name:"Snowy Peaks",icon:"\u2744\uFE0F",desc:"Slippery frozen lake, igloos, snowmen, a big mountain",build:$M,spawn:[0,5,50],sky:[10273766,15922938],fog:[15922938,70,260],killY:-30,water:-1e3,walk:85},{id:"playground",name:"Playground",icon:"\u{1F6DD}",desc:"Swings, see-saws, a slide, trampolines & a ball pit",build:jM,spawn:[0,1.2,50],sky:[6009343,16773334],fog:[16773334,90,300],killY:-30,water:-1e3,walk:55},{id:"sky",name:"Sky Islands",icon:"\u2601\uFE0F",desc:"Floating islands high above the clouds",build:WM,spawn:[0,1.5,5],sky:[2841027,16762536],fog:[16762536,120,420],killY:-80,water:-1e3,walk:999}];function JM(){x.grab=null;for(let i of[...x.dummies])i.remove();for(let i of[...x.ents])Ge(i,!0);for(let i of[...x.ropes])Qs(i);for(let i of x.welds)x.world.removeConstraint(i);x.welds.length=0;for(let i of x.projectiles)i.mesh&&x.scene.remove(i.mesh);x.projectiles.length=0;for(let i of x.blackholes)x.scene.remove(i.mesh);x.blackholes.length=0,x.firePatches=[],x.timers.length=0,x.burning=0}function cr(i){let t=ia.find(e=>e.id===i)||ia[0];JM();for(let e of cc)x.world.removeBody(e);cc=[],vi&&x.scene.remove(vi),vi=new hn,x.scene.add(vi),x.pads=[],so=null,hc=[],Je=null,x.groundAt=null,x.mapId=t.id,x.map=t,x.killY=t.killY,x.walkBound=t.walk,x.waterY=t.water,UM(t.sky[0],t.sky[1]),x.scene.fog=new sl(t.fog[0],t.fog[1],t.fog[2]),t.build(),t.id!=="sky"&&Km(18,70,300),zd(x.settings?x.settings.time:"day"),x.spawn=new b(...t.spawn),x.player&&x.player.respawn()}var jm={day:{sun:2.2,sunCol:16773590,hemi:1.1,hemiSky:13625599,hemiGround:7035450,tint:null,k:0,exposure:1.05,stars:!1,sunPos:[40,70,25]},sunset:{sun:1.5,sunCol:16752736,hemi:.75,hemiSky:16763034,hemiGround:5914410,tint:[6967200,16751194],k:.65,exposure:1.1,stars:!1,sunPos:[80,18,10]},night:{sun:.35,sunCol:10466559,hemi:.3,hemiSky:5926824,hemiGround:1710628,tint:[329487,1712960],k:.92,exposure:1.25,stars:!0,sunPos:[-30,60,-40]}},io=null;function zd(i){let t=jm[i]||jm.day;x.timeOfDay=i,x.sun&&(x.sun.intensity=t.sun,x.sun.color.set(t.sunCol),x.sunOffset=t.sunPos),x.hemi&&(x.hemi.intensity=t.hemi,x.hemi.color.set(t.hemiSky),x.hemi.groundColor.set(t.hemiGround)),x.renderer&&(x.renderer.toneMappingExposure=t.exposure);let e=x.map;if(e&&ws){let s=new Rt(e.sky[0]),o=new Rt(e.sky[1]);t.tint&&(s.lerp(new Rt(t.tint[0]),t.k),o.lerp(new Rt(t.tint[1]),t.k)),ws.material.uniforms.top.value.copy(s),ws.material.uniforms.bottom.value.copy(o),x.scene.fog&&x.scene.fog.color.copy(o)}if(!io){let o=new Float32Array(2700);for(let a=0;a<900;a++){let l=Math.random()*Math.PI*2,c=Math.random()*.9+.08,h=Math.sqrt(1-c*c);o[a*3]=Math.cos(l)*h*700,o[a*3+1]=c*700,o[a*3+2]=Math.sin(l)*h*700}let r=new dn;r.setAttribute("position",new un(o,3)),io=new rl(r,new Pr({color:16777215,size:1.6,sizeAttenuation:!1,fog:!1})),io.frustumCulled=!1,x.scene.add(io)}io.visible=t.stars;let n=i==="night"?1.4:i==="sunset"?.4:0;x.scene.traverse(s=>{!s.isMesh||!s.material||!s.material.color||s.material.color.getHex()===16774064&&(s.material.emissive=s.material.emissive||new Rt,s.material.emissive.set(16774064),s.material.emissiveIntensity=n)})}var Jm=new WeakMap;function t0(i){if(so){let t=so.geometry.attributes.position,e=x.time;for(let n=0;n<t.count;n++){let s=Ld[n*3],o=Ld[n*3+2];t.array[n*3+1]=Math.sin(s*.08+e*1.2)*.12+Math.cos(o*.07+e*.9)*.12}t.needsUpdate=!0}for(let t of hc)t.position.x+=t.userData.v*i,t.position.x>320&&(t.position.x=-320);ws&&x.camera&&ws.position.copy(x.camera.position),io&&x.camera&&io.position.copy(x.camera.position);for(let t of x.pads){let e=n=>{let s=n.position.x-t.pos.x,o=n.position.z-t.pos.z,r=n.position.y-t.pos.y;if(s*s+o*o>t.r*t.r||r<-.3||r>1.6)return;let a=Jm.get(n)||-9;if(x.time-a<.6)return;Jm.set(n,x.time),n.velocity.set(t.vel.x,t.vel.y,t.vel.z),n.wakeUp(),lt.boing(n.position),ir(t.pos.clone(),3,t.color,.4),n.isPlayer&&(x.player.stun=.4);let l=n.ent&&n.ent.dummy;if(l&&l.state==="standing"){l.knock(null);for(let c in l.parts)l.parts[c].body.velocity.set(t.vel.x,t.vel.y,t.vel.z);l.markFling()}};x.player&&e(x.player.body);for(let n of x.world.bodies)n.type===it.DYNAMIC&&!n.isPlayer&&n.sleepState!==it.SLEEPING&&e(n)}}function Ud(i,t,e,n,s,o=.04,r=.07){let a=x.aim.start,l=bn(a,a.clone().addScaledVector(i,t),Qr),c=l?l.point:a.clone().addScaledVector(i,t);return Wi(x.aim.hand,c,s,o,r),l&&Rd(l,i,e,n,s),l}function co(i,t){return i.cd=Math.max(0,(i.cd||0)-t),i.cd<=0}var Od=[{id:"blaster",name:"Blaster",icon:"\u{1F52B}",color:16765503,hint:"Click / hold: shoot. Breaks blocks, pops TNT",down(){this.fire()},held(i){co(this,i)&&this.fire()},update(i){co(this,i)},fire(){this.cd>0||(this.cd=.13,lt.shoot(),Ud(ta(x.aim.dir,.006),200,18,5,16769126),x.player.swing=0)}},{id:"shotgun",name:"Shotgun",icon:"\u{1F4A5}",color:16747036,hint:"Click: 9 pellets of chaos",down(){if(!(this.cd>0)){this.cd=.75,lt.shotgun();for(let i=0;i<9;i++)Ud(ta(x.aim.dir,.07),60,10,4.5,16757575,.03,.06);x.player.fling(x.aim.dir.clone().multiplyScalar(-2.5)),x.shake=Math.max(x.shake,.3)}},update(i){co(this,i)}},{id:"minigun",name:"Minigun",icon:"\u{1F300}",color:12632256,hint:"Hold click: spin up and shred",spin:0,held(i){if(this.spin=Math.min(1,this.spin+i*2.5),this.spin<.6){lt.whir(this.spin);return}for(this.acc=(this.acc||0)+i;this.acc>.045;)this.acc-=.045,lt.minigun(),Ud(ta(x.aim.dir,.03),150,7,2.2,16773544,.03,.05);x.shake=Math.max(x.shake,.08)},update(i,t){t.mouseDown||(this.spin=Math.max(0,this.spin-i*2))}},{id:"sniper",name:"Railgun",icon:"\u{1F3AF}",color:10148351,hint:"Click: piercing shot through up to 6 things",down(){if(this.cd>0)return;this.cd=1,lt.rail();let i=x.aim.dir.clone(),t=x.aim.start.clone(),e=t.clone().addScaledVector(i,300);for(let n=0;n<6;n++){let s=bn(t,t.clone().addScaledVector(i,300),Qr);if(!s||(Rd(s,i,90,22,10148351),e=s.point,!s.body.ent))break;t=s.point.clone().addScaledVector(i,.02)}Wi(x.aim.hand,e,12577279,.09,.35),Wi(x.aim.hand,e,16777215,.03,.35),x.player.fling(i.clone().multiplyScalar(-4)),x.shake=Math.max(x.shake,.4)},update(i){co(this,i)}},{id:"lightning",name:"Lightning Gun",icon:"\u26A1",color:11065599,hint:"Click: lightning that chains between things",down(){if(this.cd>0)return;this.cd=.55,lt.zap();let i=pn(80),t=i?i.point:x.aim.start.clone().addScaledVector(x.aim.dir,80);if(rd(x.aim.hand,t),sr(t,30,9356799),!i)return;let e=new Set,n=i.point,s=(o,r)=>{let a=Ue(o),l=a||o;if(e.has(l))return null;e.add(l);let c=Bt(o.position);return r&&rd(r,c),fn(c,new b(0,1,0),12575743,10,6),a?a.knock(new b(B(-3,3),7,B(-3,3))):o.type===it.DYNAMIC&&(o.velocity.y+=6*eo(o.mass),o.velocity.x+=B(-2,2),o.velocity.z+=B(-2,2),o.angularVelocity.set(B(-8,8),B(-8,8),B(-8,8)),o.wakeUp(),o.ent&&(vs(o.ent,35,null),Math.random()<.3&&$i(o.ent,5))),c};i.body.ent&&(n=s(i.body,null)||n);for(let o=0;o<6;o++){let r=null,a=9;for(let c of _s(n,9)){let h=Ue(c.b);e.has(h||c.b)||c.d<a&&(a=c.d,r=c.b)}if(!r)break;let l=s(r,n);if(!l)break;n=l}},update(i){co(this,i)}},{id:"flamer",name:"Flamethrower",icon:"\u{1F525}",color:16738842,hint:"Hold click: set things on fire. Wood burns, TNT cooks off",held(i){let t=x.aim.dir,e=x.aim.hand;for(let s=0;s<3;s++){let o=ta(t,.12).multiplyScalar(B(12,16)).add(x.player.body.velocity);le({pos:e.clone().addScaledVector(t,.9),vel:o,color:[16751146,16738842,16727316][s],size:B(.1,.2),life:B(.35,.55),glow:!0,add:!0,opacity:.55,gravity:-3,drag:2.2,grow:2.2,shrink:!1})}if(lt.flame(),this.tick=(this.tick||0)-i,this.tick>0)return;this.tick=.12;let n=7.5;for(let s of _s(e,n,t,.88))s.b.ent&&($i(s.b.ent,9),s.b.velocity.x+=t.x*.5,s.b.velocity.z+=t.z*.5,s.b.wakeUp());for(let s of or(e,n)){let o=s.center().sub(e),r=o.length();o.dot(t)/r>.85&&s.ignite()}}},{id:"cannon",name:"Cannon",icon:"\u26AB",color:3355443,hint:"Click: fire a heavy cannonball",down(){if(this.cd>0)return;this.cd=.8,lt.explosion(.35);let i=x.aim.dir.clone(),t=Nn("cannonball",x.aim.hand.clone().addScaledVector(i,1.2),{spawned:!0,vel:i.clone().multiplyScalar(60).add(x.player.body.velocity)});t.born=x.time,t.update=function(){x.time-this.born>15&&Ge(this,!0)},ln(x.aim.hand.clone().addScaledVector(i,1.5),6,11184810,.5),x.player.fling(i.multiplyScalar(-5)),x.shake=Math.max(x.shake,.4)},update(i){co(this,i)}},{id:"bat",name:"Home Run Bat",icon:"\u{1F3CF}",color:12618319,hint:"Click: smack things (and dummies) out of the park",down(){if(this.cd>0)return;this.cd=.4,x.player.swing=1;let i=x.aim.dir.clone(),t=x.player.pos().addScaledVector(i,1.6),e=!1;for(let n of or(t,2.4)){let s=i.clone().multiplyScalar(26).add(new b(0,10,0));n.state,n.knock(s),n.markFling(),kn("HOME RUN!",n.center().add(new b(0,1.5,0)),"#ffcf3a",24),e=!0}for(let n of _s(t,2.4)){if(Ue(n.b))continue;let s=20*eo(n.b.mass);n.b.velocity.x+=i.x*s,n.b.velocity.y+=i.y*s+5*eo(n.b.mass),n.b.velocity.z+=i.z*s,n.b.angularVelocity.set(B(-8,8),B(-8,8),B(-8,8)),n.b.wakeUp(),n.b.ent&&vs(n.b.ent,40,i),e=!0}e?(lt.whack(),x.shake=Math.max(x.shake,.35),fn(t,i.clone().negate(),16777215,10,6)):lt.swoosh()},update(i){co(this,i)}}];function _i(i,t){i.cd=Math.max(0,(i.cd||0)-t)}function ra(i,t=3){return x.aim.dir.clone().multiplyScalar(i).add(new b(0,t,0)).add(x.player.body.velocity)}function aa(){return x.aim.hand.clone().addScaledVector(x.aim.dir,.9)}var KM={id:"grenade",shape:"sphere",r:.16,mat:"rubber",color:3493919,detail:0,explosive:{power:.75,impact:999,hp:1}},QM={id:"sticky",shape:"sphere",r:.17,mat:"tnt",color:16720469,detail:0,explosive:{power:.9,impact:999,hp:1}},tE={id:"bh",shape:"sphere",r:.3,mat:"metal",color:5904538,explosive:{power:.1,impact:999,hp:999}},eE={id:"firebomb",shape:"sphere",r:.2,mat:"glass",color:16747036,detail:0},nE=new Ui(.12,.6,6),iE=new Lr?new Lr(.25,.6,2,6):new je(.25,.25,1,6),sE=new An(1.4,0),oE=new Go(1,12,8),e0=new ds(1.8,.12,4,32);function rE(i){let t=new hn,e=new Et(oE,new Se({color:327688})),n=new Et(e0,new Se({color:13073919,transparent:!0,opacity:.9})),s=new Et(e0,new Se({color:8072383,transparent:!0,opacity:.7}));n.rotation.x=Math.PI/2,s.rotation.x=Math.PI/3,t.add(e,n,s),t.position.copy(i),x.scene.add(t),lt.blackhole(),x.blackholes.push({pos:i.clone().add(new b(0,1.5,0)),t:0,life:3.8,mesh:t,ring:n,ring2:s})}var n0=new _;function aE(){for(let i of x.blackholes){let t=Math.min(1,i.t/.6);for(let e of x.world.bodies){if(e.type!==it.DYNAMIC)continue;let n=i.pos.x-e.position.x,s=i.pos.y-e.position.y,o=i.pos.z-e.position.z,r=Math.hypot(n,s,o);if(r>26||r<.01)continue;let a=(75*(1-r/26)+12)*t;e.isPlayer&&(a*=.35);let l=1/r;n0.set((n*l+-o*l*.5)*a*e.mass,s*l*a*e.mass+9.82*e.mass*.5*t,(o*l+n*l*.5)*a*e.mass),e.applyForce(n0),r<2&&e.velocity.scale(.9,e.velocity);let c=e.velocity.length();c>30&&e.velocity.scale(30/c,e.velocity),e.wakeUp()}}}x.extraForces.push(aE);function kd(i){for(let t=x.blackholes.length-1;t>=0;t--){let e=x.blackholes[t];e.t+=i;let n=Math.min(1,e.t/.6);e.mesh.position.lerp(e.pos,.1),e.mesh.scale.setScalar(n*(1+Math.sin(e.t*20)*.05)*(e.t>e.life-.3?1-(e.t-e.life+.3)/.3*.8:1)),e.ring.rotation.z+=i*6,e.ring2.rotation.z-=i*9;for(let s=0;s<3;s++){let o=B(0,Math.PI*2),r=B(5,9),a=e.pos.clone().add(new b(Math.cos(o)*r,B(-2,2),Math.sin(o)*r));le({pos:a,vel:e.pos.clone().sub(a).multiplyScalar(2).add(new b(-Math.sin(o)*6,0,Math.cos(o)*6)),color:Math.random()<.5?13073919:5904538,size:.15,life:.45,glow:!0,add:!0,gravity:0,drag:0})}for(let s of x.dummies)s.state==="standing"&&s.center().distanceTo(e.pos)<16*n&&s.knock(null);x.player&&x.player.pos().distanceTo(e.pos)<26&&(x.player.stun=Math.max(x.player.stun,.3)),e.t>=e.life&&(x.scene.remove(e.mesh),x.blackholes.splice(t,1),Pn(e.pos,1.9),ei(e.pos,40,16))}}var Vd=[{id:"tnt",name:"TNT Toss",icon:"\u{1F9E8}",color:13904414,hint:"Click: throw lit TNT (2.5s fuse). Chains with other TNT!",down(){if(this.cd>0)return;this.cd=.3;let i=Gt(Kt.tnt,aa(),{spawned:!0,vel:ra(15),angVel:new b(B(-5,5),B(-5,5),B(-5,5))});i.fuse=2.5,lt.fling()},update(i){_i(this,i)}},{id:"grenade",name:"Grenade Launcher",icon:"\u{1F7E2}",color:3493919,hint:"Click: bouncy grenades (1.6s fuse)",down(){if(this.cd>0)return;this.cd=.4;let i=Gt(KM,aa(),{spawned:!0,vel:ra(26,4)});i.fuse=1.6,lt.pop()},update(i){_i(this,i)}},{id:"rocket",name:"Rocket Launcher",icon:"\u{1F680}",color:7048739,hint:"Click: rocket that explodes on impact",down(){if(this.cd>0)return;this.cd=.7,lt.rocket();let i=x.aim.dir.clone(),t=oc(nE,14540253);ea({pos:x.aim.hand.clone().addScaledVector(i,.8),vel:i.multiplyScalar(48),life:4,mesh:t,trail:e=>{le({pos:e,vel:new b(B(-.5,.5),B(0,1),B(-.5,.5)),color:10066329,size:.35,life:.8,gravity:-1,grow:1.5,shrink:!1,opacity:.6,floor:!1}),le({pos:e,vel:new b,color:16753434,size:.25,life:.12,glow:!0,add:!0,gravity:0})},onHit:e=>Pn(e.point.clone().addScaledVector(e.normal,.3),1),end:e=>Pn(e,1)}),x.player.fling(x.aim.dir.clone().multiplyScalar(-1.5))},update(i){_i(this,i)}},{id:"sticky",name:"Sticky Bombs",icon:"\u{1F4A3}",color:16720469,hint:"Click: sticks to anything, then BOOM after 2s",down(){if(this.cd>0)return;this.cd=.3;let i=Gt(QM,aa(),{spawned:!0,vel:ra(24,2)});lt.pop(),i.body.addEventListener("collide",t=>{if(i.stuck||i.dead||t.body.isPlayer)return;i.stuck=!0;let e=t.body;ti(()=>{if(i.dead)return;let n=Ue(e);n?(n.state==="standing"&&n.knock(null),qi(i.body,n.parts.torso.body)):e.type===it.DYNAMIC?qi(i.body,e):(i.body.type=it.STATIC,i.body.mass=0,i.body.updateMassProperties(),i.body.velocity.setZero()),i.fuse=2,lt.beep()})}),i.update=function(){!this.stuck&&x.time-this.born>6&&this.fuse==null&&(this.fuse=.1)}},update(i){_i(this,i)}},{id:"blackhole",name:"Black Hole",icon:"\u{1F300}",color:8072383,hint:"Click: throw a singularity. Sucks everything in\u2026 then pops",down(){if(this.cd>0||x.blackholes.length>=3)return;this.cd=1.5;let i=Gt(tE,aa(),{spawned:!0,vel:ra(18,3)});i.fuse=1,i.onFuse=()=>{let t=Bt(i.body.position);x.removeEnt(i,!0),rE(t)}},update(i){_i(this,i)}},{id:"firebomb",name:"Fire Bomb",icon:"\u{1F37E}",color:16747036,hint:"Click: shatters into a pool of fire",down(){if(this.cd>0)return;this.cd=.5;let i=Gt(eE,aa(),{spawned:!0,vel:ra(20,4),angVel:new b(8,0,4)});i.body.addEventListener("collide",t=>{i.dead||t.body.isPlayer||ti(()=>{if(i.dead)return;let e=Bt(i.body.position);x.removeEnt(i,!0),lt.shatter(),lt.explosion(.3),ad(e,2.5,.5),Sd(new b(e.x,Math.max(0,e.y-.15),e.z),3.5,8);for(let n of _s(e,3.5))n.b.ent&&x.ignite(n.b.ent,9)})})},update(i){_i(this,i)}},{id:"meteor",name:"Meteor Strike",icon:"\u2604\uFE0F",color:16735770,hint:"Click a spot: call down a meteor",down(){if(this.cd>0)return;this.cd=1.6;let t=to(300,40).point.clone(),e=t.clone().add(new b(B(-30,30),80,B(-30,30))),n=oc(sE,5913130);n.material.emissive=new Rt(16726528),n.material.emissiveIntensity=.6,lt.whistle(),ea({pos:e,vel:t.clone().sub(e).divideScalar(1.3),life:1.3,mesh:n,collide:!1,trail:s=>{for(let o=0;o<2;o++)le({pos:s.clone().add(new b(B(-1,1),B(-1,1),B(-1,1))),vel:new b,color:[16747036,16765002,5592405][o+(Math.random()<.4?1:0)],size:B(.6,1.1),life:.6,glow:o===0,add:!0,gravity:0,grow:1,shrink:!1});n.rotation.x+=.2},end:s=>{Pn(t.clone().add(new b(0,.5,0)),2.3,{fire:!0});for(let o=0;o<4;o++)Gt({...Kt.chunk,size:[.6,.5,.6],mat:"rock",color:4862760},t.clone().add(new b(B(-1,1),1+o*.6,B(-1,1))),{spawned:!0,gen:2,vel:new b(B(-8,8),B(6,12),B(-8,8))})}})},update(i){_i(this,i)}},{id:"airstrike",name:"Airstrike",icon:"\u2708\uFE0F",color:5597999,hint:"Click a spot: carpet bomb a line",down(){if(this.cd>0)return;this.cd=3.5;let i=to(300,40),t=new b(x.aim.dir.x,0,x.aim.dir.z).normalize();lt.plane(),kn("INCOMING!",i.point.clone().add(new b(0,3,0)),"#ff5555",24);for(let e=0;e<8;e++){let n=i.point.clone().addScaledVector(t,(e-2)*4);Qo(.6+e*.16,()=>{let s=oc(iE,3095082);ea({pos:n.clone().add(new b(0,45,0)),vel:new b(0,-40,0),gravity:20,life:4,mesh:s,onHit:o=>Pn(o.point.clone().add(new b(0,.4,0)),1),end:o=>Pn(o,1)})})}},update(i){_i(this,i)}},{id:"nuke",name:"Nuke",icon:"\u2622\uFE0F",color:14860829,hint:"Click a spot: you asked for it",down(){if(this.cd>0)return;this.cd=7;let t=to(300,60).point.clone(),e=new Et(new je(.6,.6,2.2,8),new ue({color:14860829,flatShading:!0}));kn("\u2622 NUKE INCOMING \u2622",t.clone().add(new b(0,4,0)),"#ffe14a",30),lt.whistle(2.4),ea({pos:t.clone().add(new b(0,90,0)),vel:new b(0,-37,0),life:2.4,collide:!1,mesh:e,end:()=>{Pn(t.clone().add(new b(0,1,0)),4.5,{fire:!0});for(let n=0;n<40;n++){let s=B(0,Math.PI*2),o=B(0,5);le({pos:t.clone().add(new b(Math.cos(s)*o,B(1,4),Math.sin(s)*o)),vel:new b(Math.cos(s)*2,B(12,20),Math.sin(s)*2),color:[16747036,5917242,9075306][n%3],size:B(2,3.5),life:B(2.5,4),gravity:3,drag:.8,grow:1.6,shrink:!1,opacity:.85,floor:!1,spin:.5})}for(let n=0;n<30;n++){let s=n/30*Math.PI*2;le({pos:t.clone().add(new b(0,.5,0)),vel:new b(Math.cos(s)*30,1,Math.sin(s)*30),color:14274488,size:1.8,life:1.6,gravity:0,drag:1.2,grow:1,shrink:!1,opacity:.7,floor:!1})}ir(t.clone().add(new b(0,.5,0)),30,16777215,1.2)}})},update(i){_i(this,i)}},{id:"fireworks",name:"Fireworks",icon:"\u{1F386}",color:15220591,hint:"Click a spot: launch a firework barrage",down(){if(this.cd>0)return;this.cd=.4;let i=to(120,10);ic(i.point.clone().add(new b(0,.5,0)),3)},update(i){_i(this,i)}}];function Hd(i,t){i.cd=Math.max(0,(i.cd||0)-t)}function la(i,t,e,n,s,o,r){return{id:i,name:t,icon:e,color:n,hint:s,down(){if(this.cd>0)return;this.cd=o;let a=pn(120),l=a?a.point:x.aim.start.clone().addScaledVector(x.aim.dir,120);Wi(x.aim.hand,l,n,.07,.2),Wi(x.aim.hand,l,16777215,.025,.2),lt.ray(n),a&&(fn(a.point,a.normal,n,10,4),r(a))},update(a){Hd(this,a)}}}var fc={id:"magnet",name:"Magnet",icon:"\u{1F9F2}",color:16726843,hint:"Hold click: pull everything in front of you into a ball. Let go to drop",active:!1,held(){this.active=!0},update(i,t){if(t.mouseDown||(this.active=!1),this.active){let e=x.aim.start.clone().addScaledVector(x.aim.dir,6);if(this.point=e,Math.random()<.6){let n=B(0,Math.PI*2),s=e.clone().add(new b(Math.cos(n)*4,B(-2,2),Math.sin(n)*4));le({pos:s,vel:e.clone().sub(s).multiplyScalar(3),color:16739179,size:.08,life:.3,glow:!0,add:!0,gravity:0,drag:0})}for(let n of or(e,12))n.state==="standing"&&n.knock(null);lt.hum()}},unequip(){this.active=!1}},ho=new _;x.extraForces.push(()=>{if(!fc.active||!fc.point)return;let i=fc.point;for(let t of x.world.bodies){if(t.type!==it.DYNAMIC||t.isPlayer)continue;let e=i.x-t.position.x,n=i.y-t.position.y,s=i.z-t.position.z,o=Math.hypot(e,n,s);if(o>16)continue;let r=40*(1-o/16)+6;ho.set(e/(o+.01)*r*t.mass-t.velocity.x*2*t.mass,n/(o+.01)*r*t.mass-t.velocity.y*2*t.mass+9.82*t.mass,s/(o+.01)*r*t.mass-t.velocity.z*2*t.mass);let a=Math.hypot(ho.x,ho.y,ho.z);a>8e3&&ho.scale(8e3/a,ho),t.applyForce(ho),t.wakeUp()}});var Gd=[{id:"push",name:"Force Push",icon:"\u{1F4A8}",color:14743551,hint:"Click: shockwave cone. Aim at your feet to rocket-jump!",down(){if(this.cd>0)return;this.cd=.5,lt.push();let i=x.aim.dir.clone(),t=x.aim.hand.clone();for(let e=0;e<24;e++){let n=i.clone().add(new b(B(-.35,.35),B(-.35,.35),B(-.35,.35))).normalize().multiplyScalar(B(18,28));le({pos:t,vel:n,color:14743551,size:B(.2,.4),life:.4,glow:!0,add:!1,opacity:.5,gravity:0,drag:3,grow:2,shrink:!1})}x.player.pitch<-1&&(x.player.body.velocity.y=17,x.player.stun=.2,ln(x.player.feet(),8,16777215,.6));for(let e of or(t,16)){let n=e.center().sub(t),s=n.length();if(n.dot(i)/s<.75)continue;let o=24*(1-s/16)+6;e.knock(i.clone().multiplyScalar(o).add(new b(0,5,0)))}for(let e of _s(t,16,i,.75)){if(Ue(e.b))continue;e.b.ent&&e.b.ent.frozen&&Zi(e.b.ent);let n=(26*(1-e.d/16)+4)*eo(e.b.mass);e.b.velocity.x+=i.x*n,e.b.velocity.y+=i.y*n+3*eo(e.b.mass),e.b.velocity.z+=i.z*n,e.b.wakeUp()}x.shake=Math.max(x.shake,.2)},update(i){Hd(this,i)}},fc,la("freeze","Freeze Ray","\u2744\uFE0F",8382719,"Click: freeze in place (hit again to thaw). Frozen things shatter easily",.2,i=>{let t=Ue(i.body);if(t){t.frozen?t.unfreeze():t.freeze(12),lt.freeze();return}let e=i.body.ent;e&&(e.frozen?Zi(e):Md(e,12),e.burn>0&&(e.burn=0,x.burning--),lt.freeze())}),la("antigrav","Anti-Gravity Ray","\u{1FA90}",13073919,"Click: make it float away for 10s",.2,i=>{let t=Ue(i.body);if(t){t.state==="standing"&&t.knock(new b(0,3,0));for(let n in t.parts)t.parts[n].antigrav=10,t.parts[n].body.wakeUp();return}let e=i.body.ent;!e||i.body.type!==it.DYNAMIC||(e.antigrav=10,i.body.velocity.y+=2,i.body.wakeUp())}),la("grow","Grow Ray","\u{1F53C}",8191834,"Click: make things BIGGER (heavier, too)",.25,i=>{let t=Ue(i.body);if(t){t.rescale(1.35),lt.grow();return}i.body.ent&&sc(i.body.ent,1.4)?lt.grow():de("Max size!")}),la("shrink","Shrink Ray","\u{1F53D}",16739286,"Click: make things tiny",.25,i=>{let t=Ue(i.body);if(t){t.rescale(1/1.35),lt.shrink();return}i.body.ent&&sc(i.body.ent,1/1.4)?lt.shrink():de("Min size!")}),la("paint","Paint Gun","\u{1F3A8}",16760331,"Click: random paint job",.12,i=>{let t=Ue(i.body);if(t){t.meshes.torso.material.color.setHSL(Math.random(),.8,.55),t.meshes.legL.material.color.setHSL(Math.random(),.6,.35);return}i.body.ent&&i.body.ent.kind==="item"&&Ed(i.body.ent)}),{id:"teleport",name:"Teleporter",icon:"\u{1F300}",color:3920383,hint:"Click a spot: blink there",down(){if(this.cd>0)return;this.cd=.35;let i=pn(150);if(!i){de("Aim at something");return}let t=x.player.pos(),e=i.point.clone().addScaledVector(i.normal,1).add(new b(0,.9,0));ei(t,20,4),x.player.body.position.set(e.x,e.y,e.z),x.player.body.previousPosition.set(e.x,e.y,e.z),x.player.body.interpolatedPosition.set(e.x,e.y,e.z),x.player.camY=void 0,x.player.body.velocity.set(0,0,0),ei(e,20,4),Wi(t,e,3920383,.1,.3),lt.teleport()},update(i){Hd(this,i)}}];function ca(i,t){i.cd=Math.max(0,(i.cd||0)-t)}var Ss=null;function i0(i,t){Ss||(Ss=new Et(new ds(.45,.04,4,20),new Se({color:16777215,transparent:!0,opacity:.7})),Ss.rotation.x=Math.PI/2,x.scene.add(Ss)),Ss.visible=!!i,i&&(Ss.position.copy(i).add(new b(0,.03,0)),Ss.material.color.set(t),Ss.rotation.z+=.05)}function Wd(){let i=pn(80);if(!i)return null;let t=i.body,e=Ue(t);return e?(e.state==="standing"&&e.knock(null),t=e.parts.torso.body,{body:t,local:new _(0,.2*e.s,0),point:Bt(t.position)}):{body:t,local:t.pointToLocalFrame(new _(i.point.x,i.point.y,i.point.z)),point:i.point}}var Te=null,ji=null;function s0(i,t,e){if(ji||(ji=new ys(e,.025,8,!0)),t.tap("KeyF")&&(Te=null,de("Cancelled")),Te&&Te.tool===i.id){let n=Bt(Te.body.pointToWorldFrame(Te.local)),s=pn(80);ji.setColor(e),ji.update(n,s?s.point:x.aim.start.clone().addScaledVector(x.aim.dir,10),.3),x.toolNote="Click the second point (F to cancel)"}else ji.hide(),x.toolNote=null}var qd=[{id:"spawner",name:"Spawner",icon:"\u{1F9F0}",color:3835647,hint:"Click: spawn the selected item \xB7 T: next item \xB7 TAB: pick from menu",placement(){let i=Kt[x.spawnId],t=to(40,7),e=x.player.yaw+Math.PI,n=t.point.clone(),s=i.rot?new Ee().setFromEuler(new ke(...i.rot)):new Ee().setFromAxisAngle(new b(0,1,0),e);if(!i.dummy&&!i.prefab){let o=Kr(i);t.miss?n.y=Math.max(n.y,.5):n.addScaledVector(t.normal,o+.05)}return{def:i,p:n,yaw:e,quat:s,ground:t.point}},down(){if(this.cd>0)return;this.cd=.2;let{def:i,p:t,yaw:e,quat:n}=this.placement(),s=new Set(x.ents),o=new Set(x.dummies);i.dummy||i.prefab?Nn(i,t,{spawned:!0,yaw:e}):Nn(i,t,{spawned:!0,quat:i.rot?void 0:n}),x.spawnLog=x.spawnLog||[],x.spawnLog.push({ents:[...x.ents].filter(r=>!s.has(r)),dummies:[...x.dummies].filter(r=>!o.has(r))}),x.spawnLog.length>50&&x.spawnLog.shift(),ln(t,3,16777215,.4),lt.pop()},update(i,t){if(ca(this,i),t.tap("KeyT")){let r=xs,a=r.findIndex(l=>l.id===x.spawnId);x.spawnId=r[(a+1)%r.length].id,de(`Spawner: ${Kt[x.spawnId].name}`)}let{def:e,p:n,quat:s,ground:o}=this.placement();i0(o,16777215),this.ghostId!==x.spawnId&&(this.ghost&&x.scene.remove(this.ghost),this.ghost=e.dummy||e.prefab?null:vd(e),this.ghost&&x.scene.add(this.ghost),this.ghostId=x.spawnId),this.ghost&&(this.ghost.visible=!0,this.ghost.position.copy(n),this.ghost.quaternion.copy(s))},unequip(){i0(null),this.ghost&&(this.ghost.visible=!1)}},{id:"eraser",name:"Eraser",icon:"\u{1F9FD}",color:16735370,hint:"Click: delete an object or dummy",down(){if(this.cd>0)return;this.cd=.08;let i=pn(100);if(!i||!i.body.ent)return;let t=Ue(i.body),e=i.point;t?t.remove():Ge(i.body.ent),ei(e,14,4),lt.pop()},update(i){ca(this,i)}},{id:"clone",name:"Cloner",icon:"\u{1F9EC}",color:448160,hint:"Click: duplicate whatever you aim at",down(){if(this.cd>0)return;this.cd=.25;let i=pn(100);if(!i||!i.body.ent){de("Aim at an object");return}let t=Ue(i.body);if(t){Gn(t.origin().add(new b(B(-1,1),.3,B(-1,1))),t.variant,{spawned:!0,scale:t.s/(t.cfg.s||1)}),lt.pop();return}let e=i.body.ent;if(e.kind!=="item")return;let n=(Kr(e.def)*2+.1)*e.scale;Nn(e.def,Bt(e.body.position).add(new b(0,n,0)),{spawned:!0,scale:e.scale,quat:e.mesh.quaternion,gen:e.gen}),fn(i.point,i.normal,448160,10,4),lt.pop()},update(i){ca(this,i)}},{id:"rope",name:"Rope Tool",icon:"\u{1FAA2}",color:15260864,hint:"Click two things to tie them together (works on the ground too)",down(){let i=Wd();if(!i)return;if(!Te||Te.tool!=="rope"){Te={...i,tool:"rope"},lt.grab();return}if(i.body===Te.body){de("Pick something else");return}if(i.body.type!==it.DYNAMIC&&Te.body.type!==it.DYNAMIC){de("One end must be an object"),Te=null;return}let t=Math.max(.5,i.point.distanceTo(Te.point));Yi(Te.body,Te.local,i.body,i.local,t),Te=null,lt.grab()},update(i,t){s0(this,t,15260864)},unequip(){Te=null,ji&&ji.hide(),x.toolNote=null}},{id:"weld",name:"Weld Tool",icon:"\u{1F529}",color:16754219,hint:"Click two things to weld them rigidly together",down(){let i=Wd();if(i){if(!Te||Te.tool!=="weld"){Te={...i,tool:"weld"},lt.grab();return}if(i.body===Te.body){de("Pick something else");return}if(i.body.type!==it.DYNAMIC&&Te.body.type!==it.DYNAMIC){de("One end must be an object"),Te=null;return}qi(Te.body,i.body),fn(i.point,new b(0,1,0),16754219,16,5),fn(Te.point,new b(0,1,0),16754219,16,5),Te=null,lt.weld?lt.weld():lt.crack()}},update(i,t){s0(this,t,16754219)},unequip(){Te=null,ji&&ji.hide(),x.toolNote=null}},{id:"balloon",name:"Balloon Tool",icon:"\u{1F388}",color:16726843,hint:"Click: tie a balloon on. Enough balloons lift anything!",down(){if(this.cd>0)return;this.cd=.15;let i=Wd();if(!i)return;let t=i.point.clone().add(new b(B(-.5,.5),3,B(-.5,.5))),e=Nn("balloon",t,{spawned:!0});e.lift=160,Yi(i.body,i.local,e.body,new _(0,-.5,0),2.8,16777215),i.body.wakeUp(),lt.pop()},update(i){ca(this,i)}},{id:"thruster",name:"Thruster",icon:"\u{1F525}",color:16752412,hint:"Click a surface: strap a rocket on it (6s)",down(){if(this.cd>0)return;this.cd=.2;let i=pn(80);if(!i||!i.body.ent){de("Aim at an object");return}let t=i.body,e=Ue(t),n=i.point,s=i.normal;if(e&&(e.state==="standing"&&e.knock(null),t=e.parts.torso.body,n=Bt(t.position)),t.type!==it.DYNAMIC)return;let o=t.ent,r=t.pointToLocalFrame(new _(n.x,n.y,n.z)),l=t.quaternion.inverse().vmult(new _(-s.x,-s.y,-s.z));e&&l.set(0,1,0);let c=new Et(new je(.1,.16,.35,6),new ue({color:5592405,flatShading:!0})),h=o.scale||1;c.position.set(r.x/h,r.y/h,r.z/h),c.quaternion.setFromUnitVectors(new b(0,1,0),new b(l.x,l.y,l.z)),c.scale.setScalar(1/h),o.mesh.add(c),o.thrusters.push({lp:r,ld:l,t:6,power:e?55:26,mesh:c}),t.wakeUp(),lt.rocket()},update(i){ca(this,i)}}];var bi=[...Pd,...Od,...Vd,...Gd,...qd],uo=Object.fromEntries(bi.map(i=>[i.id,i])),o0=[["Grab",Pd],["Weapons",Od],["Explosives",Vd],["Rays & Forces",Gd],["Build",qd]],r0=["fling","blaster","rocket","tnt","flamer","blackhole","push","freeze","spawner","bat"];var be=i=>document.getElementById(i),Pt={hotbar:[...r0],slot:0,menuOpen:!1,tab:"tools",query:"",onEquip:null};try{let i=JSON.parse(localStorage.getItem("fling_hotbar")||"null");Array.isArray(i)&&i.length===10&&i.every(t=>uo[t])&&(Pt.hotbar=i)}catch{}function h0(){try{localStorage.setItem("fling_hotbar",JSON.stringify(Pt.hotbar))}catch{}}function Wn(){return uo[Pt.hotbar[Pt.slot]]}var u0=i=>i==="spawner"?Kt[x.spawnId].icon:uo[i].icon,d0=i=>i==="spawner"?Kt[x.spawnId].name:uo[i].name,hr=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function $d(){let i=be("hotbar");i.innerHTML="",Pt.hotbar.forEach((e,n)=>{let s=document.createElement("div");s.className="slot"+(n===Pt.slot?" on":""),s.innerHTML=`<span class="k">${(n+1)%10}</span><span class="i">${u0(e)}</span>`,s.title=d0(e),i.appendChild(s)});let t=Wn();be("toolname").textContent=t.id==="spawner"?`Spawner \xB7 ${Kt[x.spawnId].name}`:t.name,be("toolhint").textContent=t.hint}function jd(i){i&&i.unequip&&i!==Wn()&&i.unequip(),$d(),Pt.onEquip&&Pt.onEquip(Wn())}function mc(i){if(i===Pt.slot)return;let t=Wn();Pt.slot=i,jd(t)}function a0(i){let t=Wn(),e=Pt.hotbar.indexOf(i);e>=0&&e!==Pt.slot&&(Pt.hotbar[e]=Pt.hotbar[Pt.slot]),Pt.hotbar[Pt.slot]=i,h0(),jd(t)}function Jd(i){let e=bi.findIndex(s=>s.id===Pt.hotbar[Pt.slot]);for(let s=0;s<bi.length&&(e=(e+i+bi.length)%bi.length,!!Pt.hotbar.includes(bi[e].id));s++);let n=Wn();Pt.hotbar[Pt.slot]=bi[e].id,h0(),jd(n),de(bi[e].name)}function Xd(i,t,e,n,s,o=""){let r=document.createElement("button");return r.className="card"+(s?" on":""),r.innerHTML=`<span class="i">${i}</span><span class="txt"><span class="n">${hr(t)}</span>${e?`<span class="s">${hr(e)}</span>`:""}</span>${o}`,r.onclick=a=>{a.stopPropagation(),n()},r}function Yd(i,t,e){let n=document.createElement("h3");n.innerHTML=`${hr(t)}${e!=null?`<span>${e}</span>`:""}`,i.appendChild(n);let s=document.createElement("div");return s.className="grid",i.appendChild(s),s}var l0=(...i)=>{let t=Pt.query.trim().toLowerCase();return!t||i.some(e=>e&&e.toLowerCase().includes(t))};function lE(i){let t=document.createElement("div");t.className="settings",i.appendChild(t);let e=(r,a,l)=>{let c=document.createElement("div");c.className="srow",c.innerHTML=`<div class="sl"><div class="n">${hr(r)}</div><div class="s">${hr(a)}</div></div>`,c.appendChild(l),t.appendChild(c)},n=(r,a,l,c,h)=>{let d=document.createElement("div");d.className="sctl";let u=document.createElement("input");u.type="range",u.min=a,u.max=l,u.step=c,u.value=tn[r];let f=document.createElement("span");return f.className="sval",f.textContent=h(tn[r]),u.oninput=()=>{js(r,+u.value),f.textContent=h(+u.value)},d.append(u,f),d},s=(r,a)=>{let l=document.createElement("div");l.className="sctl seg";for(let[c,h]of a){let d=document.createElement("button");d.textContent=h,d.className=tn[r]===c?"on":"",d.onclick=u=>{u.stopPropagation(),js(r,c),fo()},l.appendChild(d)}return l};e("Mouse sensitivity","Also [ and ] in game. Raise it if your touchpad feels slow.",n("sens",.3,8,.1,r=>r.toFixed(1))),e("Invert look up/down","Flip vertical mouse movement.",s("invertY",[[!1,"Off"],[!0,"On"]])),e("Field of view","How wide you can see.",n("fov",60,100,1,r=>`${r}\xB0`)),e("Volume","M mutes everything.",n("volume",0,1,.05,r=>`${Math.round(r*100)}%`)),e("Graphics","Low turns off shadows and lowers resolution (much faster). Also L.",s("quality",[["high","High"],["low","Low"]])),e("Time of day","Night makes explosions and lamps glow.",s("time",[["day","Day"],["sunset","Sunset"],["night","Night"]]));let o=document.createElement("button");o.className="sreset",o.textContent="Reset to defaults",o.onclick=r=>{r.stopPropagation();for(let a in tr)js(a,tr[a]);fo()},t.appendChild(o)}function cE(){let i=be("hbedit");i.innerHTML="",i.style.display=Pt.tab==="tools"?"":"none",Pt.hotbar.forEach((t,e)=>{let n=document.createElement("button");n.className="hslot"+(e===Pt.slot?" on":""),n.innerHTML=`<span class="k">${(e+1)%10}</span><span class="i">${u0(t)}</span><span class="n">${hr(d0(t))}</span>`,n.onclick=s=>{s.stopPropagation(),mc(e),fo()},i.appendChild(n)})}function fo(){let i=be("menubody");if(i.innerHTML="",document.querySelectorAll("#menunav button[data-tab]").forEach(t=>t.classList.toggle("on",t.dataset.tab===Pt.tab)),be("menusearch").style.visibility=Pt.tab==="tools"||Pt.tab==="items"?"visible":"hidden",be("menuhead").classList.toggle("nosearch",!(Pt.tab==="tools"||Pt.tab==="items")),cE(),Pt.tab==="tools"){be("menutitle").textContent="Tools",be("menusub").textContent=`Pick a slot above, then click a tool to put it there. ${bi.length} tools.`;for(let[t,e]of o0){let n=e.filter(o=>l0(o.name,o.hint,t));if(!n.length)continue;let s=Yd(i,t,n.length);for(let o of n){let r=Pt.hotbar.indexOf(o.id);s.appendChild(Xd(o.icon,o.name,o.hint,()=>{a0(o.id),fo()},r===Pt.slot,r>=0?`<span class="badge">${(r+1)%10}</span>`:""))}}}else if(Pt.tab==="items"){be("menutitle").textContent="Spawn",be("menusub").textContent=`Choose what the Spawner makes. ${xs.length} things. (T cycles in-game)`;let t=[...new Set(xs.map(e=>e.cat))];for(let e of t){let n=xs.filter(o=>o.cat===e&&l0(o.name,e));if(!n.length)continue;let s=Yd(i,e,n.length);s.classList.add("small");for(let o of n)s.appendChild(Xd(o.icon,o.name,"",()=>{x.spawnId=o.id,a0("spawner"),ur(),de(`Spawner \xB7 ${o.name}`)},x.spawnId===o.id))}}else if(Pt.tab==="maps"){be("menutitle").textContent="Maps",be("menusub").textContent=`${ia.length} maps. Loading a map resets everything on it.`;let t=Yd(i,"All maps");t.classList.add("wide");for(let e of ia)t.appendChild(Xd(e.icon,e.name,e.desc,()=>{cr(e.id),ur(),de(e.name)},x.mapId===e.id))}else Pt.tab==="settings"?(be("menutitle").textContent="Settings",be("menusub").textContent="Saved automatically in this browser.",lE(i)):(be("menutitle").textContent="Controls",be("menusub").textContent="Single click + keyboard only. No right-click or two-finger click needed.",i.innerHTML+=be("helptext").innerHTML);i.children.length||(i.innerHTML='<p class="empty">Nothing matches that search.</p>')}function Kd(i){Pt.menuOpen=!0,i&&(Pt.tab=i),be("menu").classList.add("open"),fo(),document.pointerLockElement&&document.exitPointerLock()}function ur(){Pt.menuOpen=!1,be("menu").classList.remove("open"),be("menusearch").blur(),x.requestLock&&x.requestLock()}function f0(){document.querySelectorAll("#menunav button[data-tab]").forEach(i=>{i.onclick=t=>{t.stopPropagation(),Pt.tab=i.dataset.tab,Pt.query="",be("menusearch").value="",fo()}}),be("menuclose").onclick=i=>{i.stopPropagation(),ur()},be("menusearch").addEventListener("input",i=>{Pt.query=i.target.value,fo()}),be("menu").addEventListener("mousedown",i=>i.stopPropagation())}var pc=0,Zd=0,c0=60;function p0(i){Zd++,pc+=i,pc>.5&&(c0=Math.round(Zd/pc),Zd=0,pc=0);let t=x.stats;be("stats").innerHTML=`<div class="row"><span>BOOMS</span><b>${t.booms}</b><span>BROKEN</span><b>${t.destroyed}</b><span>FLUNG</span><b>${t.flings}</b><span>BEST</span><b>${t.best.toFixed(1)}m</b></div><div class="dim">${x.map?x.map.name.toUpperCase():""} \xB7 ${x.ents.size} OBJECTS \xB7 ${c0} FPS${x.timeScale<1?" \xB7 SLOW-MO":""}${x.player&&x.player.flying?" \xB7 FLYING":""}</div>`,be("crosshair").className=x.crossHint||"",be("toolnote").textContent=x.toolNote||""}x.spawnItem=Nn;x.addRope=Yi;x.removeRope=Qs;x.removeEnt=Ge;x.ignite=$i;var Ts=document.getElementById("game"),ri=new il({canvas:Ts,antialias:!0,powerPreference:"high-performance"});ri.setPixelRatio(Math.min(window.devicePixelRatio,1.5));ri.setSize(window.innerWidth,window.innerHeight);ri.shadowMap.enabled=!0;ri.shadowMap.type=_l;ri.toneMapping=Eu;ri.toneMappingExposure=1.05;x.renderer=ri;var go=new ol;x.scene=go;var po=new on(72,window.innerWidth/window.innerHeight,.1,1200);x.camera=po;go.add(po);var m0=new ml(13625599,7035450,1.1);go.add(m0);x.hemi=m0;var wi=new xl(16773590,2.2);wi.castShadow=!0;wi.shadow.mapSize.set(2048,2048);var dr=wi.shadow.camera;dr.left=-45;dr.right=45;dr.top=45;dr.bottom=-45;dr.near=1;dr.far=220;wi.shadow.bias=-5e-4;wi.shadow.normalBias=.03;go.add(wi,wi.target);x.sun=wi;var ai=new kl({gravity:new _(0,-9.82,0)});ai.broadphase=new Nl(ai);ai.allowSleep=!0;ai.solver.iterations=10;ai.defaultContactMaterial.friction=.5;ai.defaultContactMaterial.restitution=.1;ai.defaultContactMaterial.contactEquationStiffness=5e7;ai.defaultContactMaterial.contactEquationRelaxation=4;x.world=ai;xd();ai.addEventListener("preStep",bd);Tm(go);cr("island");x.player=new ac;x.player.respawn();var ha=new Set,gc=new Set,mn={lookX:0,lookY:0,mouseDown:!1,held:i=>ha.has(i),tap:i=>gc.has(i)},fr=!1,mo=!1;function yc(){if(!mo)try{let i=Ts.requestPointerLock&&Ts.requestPointerLock();i&&i.catch&&i.catch(()=>{mo=!0})}catch{mo=!0}}x.requestLock=yc;function g0(){nd(),fr=!0,document.getElementById("start").classList.add("hidden"),yc()}document.getElementById("start").addEventListener("click",g0);document.addEventListener("pointerlockchange",()=>{let i=document.pointerLockElement===Ts;document.getElementById("paused").classList.toggle("show",fr&&!i&&!Pt.menuOpen&&!mo),i||(mn.mouseDown=!1)});document.addEventListener("pointerlockerror",()=>{mo=!0,document.getElementById("paused").classList.remove("show")});document.getElementById("paused").addEventListener("click",()=>{yc()});Ts.addEventListener("mousedown",i=>{if(i.button!==0||!fr)return;if(document.pointerLockElement!==Ts&&!mo){yc();return}nd(),mn.mouseDown=!0;let t=Wn();t.down&&t.down(),t.id!=="fling"&&(x.player.kick=Math.max(x.player.kick||0,.25))});window.addEventListener("mouseup",i=>{i.button===0&&(mn.mouseDown=!1)});Ts.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("mousemove",i=>{if(!(!fr||Pt.menuOpen)&&(document.pointerLockElement===Ts||mo)){let t=Math.max(-200,Math.min(200,i.movementX)),e=Math.max(-200,Math.min(200,i.movementY)),n=tn.sens/1e3;mn.lookX+=t*n,mn.lookY+=e*n*(tn.invertY?-1:1)}});var hE=new Set(["Space","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Enter"]);window.addEventListener("keydown",i=>{if(hE.has(i.code)&&i.preventDefault(),i.repeat)return;if(!fr){(i.code==="Enter"||i.code==="Space")&&g0();return}ha.add(i.code),gc.add(i.code);let t=i.target&&i.target.tagName==="INPUT";if(i.code==="Tab"||i.code==="KeyB"&&!t){Pt.menuOpen?ur():Kd();return}if(i.code==="Escape"&&Pt.menuOpen){ur();return}if(!Pt.menuOpen){if(/^Digit[0-9]$/.test(i.code)){let e=+i.code.slice(5);mc(e===0?9:e-1)}if(i.code==="KeyQ"&&Jd(-1),i.code==="KeyE"&&Jd(1),i.code==="KeyN"&&(x.player.flying=!x.player.flying,de(x.player.flying?"Fly mode ON (Space up, Shift down)":"Fly mode OFF")),i.code==="KeyG"&&(x.timeScale=x.timeScale<1?1:.3,de(x.timeScale<1?"SLOW-MO":"Normal speed")),i.code==="KeyM"&&de(pm()?"Muted":"Sound on"),i.code==="KeyH"&&Kd("help"),i.code==="KeyC"){for(let e of[...x.ents])e.spawned&&Ge(e,!0);for(let e of[...x.dummies])e.spawned&&e.remove();de("Cleared spawned stuff")}if(i.code==="KeyP"&&(cr(x.mapId),de("Map reset")),i.code==="KeyL"&&(js("quality",tn.quality==="high"?"low":"high"),de(tn.quality==="high"?"Graphics: high":"Graphics: low (faster)")),i.code==="KeyU"&&uE(),(i.code==="BracketLeft"||i.code==="BracketRight")&&(js("sens",Math.min(12,Math.max(.3,+(tn.sens*(i.code==="BracketLeft"?.85:1.18)).toFixed(2)))),de(`Mouse sensitivity: ${tn.sens.toFixed(1)}`)),i.code==="Enter"){mn.mouseDown=!0;let e=Wn();e.down&&e.down()}}});window.addEventListener("keyup",i=>{ha.delete(i.code),i.code==="Enter"&&(mn.mouseDown=!1)});window.addEventListener("blur",()=>{ha.clear(),mn.mouseDown=!1});window.addEventListener("resize",()=>{po.aspect=window.innerWidth/window.innerHeight,po.updateProjectionMatrix(),ri.setSize(window.innerWidth,window.innerHeight)});var Qd=null;ql("quality",i=>{ri.shadowMap.enabled=i==="high",ri.setPixelRatio(i==="high"?Math.min(window.devicePixelRatio,1.5):.75),Qd!==null&&Qd!==i&&go.traverse(t=>{t.material&&(t.material.needsUpdate=!0)}),Qd=i});ql("volume",i=>mm(i));ql("time",i=>zd(i));ym();function uE(){let i=x.spawnLog&&x.spawnLog.pop();if(!i){de("Nothing to undo");return}for(let t of i.ents)t.dead||Ge(t,!1);for(let t of i.dummies)t.dead||t.remove();de("Undone")}Pt.onEquip=i=>{x.player.setToolColor(i.color),x.toolNote=null,x.crossHint=null};f0();$d();x.player.setToolColor(Wn().color);var dE=new vl,fE=new b;function y0(){requestAnimationFrame(y0);let i=Math.min(dE.getDelta(),.05),t=i*x.timeScale;x.time+=t;let e=fr&&!Pt.menuOpen,n=c=>e&&ha.has(c),s={f:n("KeyW"),b:n("KeyS"),l:n("KeyA"),r:n("KeyD"),sprint:n("ShiftLeft")||n("ShiftRight"),sprintDown:n("ShiftLeft")||n("ShiftRight"),jump:e&&gc.has("Space"),jumpHeld:n("Space"),lookX:mn.lookX+((n("ArrowLeft")?-1:0)+(n("ArrowRight")?1:0))*2.2*i,lookY:mn.lookY+((n("ArrowUp")?-1:0)+(n("ArrowDown")?1:0))*1.6*i};mn.lookX=0,mn.lookY=0;let o=Wn();e&&(o.update&&o.update(t,mn),mn.mouseDown&&o.held&&o.held(t)),ai.step(1/60,t,4);let r=x.queue.splice(0);for(let c of r)c();for(let c=x.timers.length-1;c>=0;c--)if(x.timers[c].t<=x.time){let h=x.timers[c];x.timers.splice(c,1),h.fn()}x.player.update(i,s),wd(t),Td(t);for(let c of[...x.dummies])c.dead||c.update(t);Cd(t),kd(t),t0(t),Am(t),um(i),dm(i),p0(i),Xm(t),gm(po.position,fE.set(1,0,0).applyQuaternion(po.quaternion));let a=x.player.body.position,l=x.sunOffset||[40,70,25];wi.position.set(a.x+l[0],a.y+l[1],a.z+l[2]),wi.target.position.set(a.x,a.y,a.z),gc.clear(),ri.render(go,po)}y0();window.__G=x;window.__T={TOOL:uo,UI:Pt,Items:Ad,loadMap:cr,selectSlot:mc,currentTool:Wn,input:mn};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
