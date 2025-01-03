/* eslint-disable */
function e(e){for(var r,a=++e[0],t="";a>0;)r=(a-1)%26,t=String.fromCharCode(97+r)+t,a=(a-r)/26|0;return t}var r=/^0\d|\D/;function a(e,r){return r?'\\"'+e+'\\"':'"'+e+'"'}var t=function(e,r,a,t,s){var c=["{"],i="";for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(c.push(i,n(o,r,a,t,s),":",n(e[o],r,a,t,s)),i=",");return c.push("}"),c.join("")};function n(s,c,i,o,u){var f=c.get(s);if(f)return f;switch(c.set(s,e(i)),f=Object.prototype.toString.call(s).slice(8,-1)){case"BigInt":return"L"+n(""+s,c,i,o,u);case"Object":return t(s,c,i,o,u);case"Function":case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return"Z"+n(""+(o&&o(s)||s.name),c,i,o,u);case"Boolean":return"P"+ +s;case"Symbol":return"H"+n(s.toString().slice(7,-1),c,i,o,u);case"Error":var h=t(s,c,i,o,u).slice(0,-1);return h.length>1&&(h+=","),"E"+s.name.slice(0,2)+h+n("message",c,i,o,u)+":"+n(s.message,c,i,o,u)+"}";case"Number":return s===+s?s<0?"-"+n(-s,c,i,o,u):""+s:"N"+n(+s,c,i,o,u);case"Date":return"D"+n(s.getTime(),c,i,o,u);case"String":return s===""+s?s!==""+ +s?function(e,r){return e=JSON.stringify(e),r?JSON.stringify(e).slice(1,-1):e}(s,u):"Q"+n(+s,c,i,o,u):"S"+n(""+s,c,i,o,u);case"RegExp":return"R"+n(s.source+","+s.flags,c,i,o,u);case"Array":var l,b=["["],p="",y=0;for(var g in s){if(r.test(g))b.push(p,n(g,c,i,o,u),":"),p="";else if((l=+g)>y++)for(;y<=l;y++)b.push(",");b.push(p,n(s[g],c,i,o,u)),p=","}if((l=s.length)>y)for(;y<=l;y++)b.push(p),p=",";return b.push("]"),b.join("");case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":return`${f[0]+f[4]+f[5]}${s.length}${a(s,u)}`;case"Map":var v=[["M("],c,i,o,u,""];return s.forEach((function(e,r){this[0].push(this[5],n(r,this[1],this[2],this[3],this[4]),":",n(e,this[1],this[2],this[3],this[4])),this[5]=","}),v),v[0].push(")"),v[0].join("");case"Set":var A=[["T("],c,i,o,u,""];return s.forEach((function(e){this[0].push(this[5],n(e,this[1],this[2],this[3],this[4])),this[5]=","}),A),A[0].push(")"),A[0].join("");case"ArrayBuffer":case"DataView":return`A${f[0]}${(s=new Int8Array("D"===f[0]?s.buffer:s)).length}${a(s,u)}`;default:return console.warn("cyclepack:",s),t(s,c,i,o,u)}}var s=[0,1,2,3,4,5,6,7,8,9,null,void 0,NaN,!0,!1,1/0,-1/0].map((function(r,a){return[r,e([a])]}));function c(e,r,a){var t=a?'"':"";return[t,n(e,new Map(s),[17],r,a),t].join("")}var i=/[a-z]/,o=/["/{}[\]():,]/,u={b:"\b",t:"\t",n:"\n",f:"\f",r:"\r"};function f(r,a){for(var t=[17],n={},c=t[0];c-- >0;)n[s[c][1]]=s[c][0];for(var f,l,b,p,y,g=[],v={v:g,t:"[",i:0},A=[v],k=g,w=[],E=r.length,I=0;I<E;I++){switch(b=!0,y=r[I]){case"P":l=new Boolean(+r[++I]);break;case"E":switch(r[++I]+r[++I]){case"Ag":l=AggregateError;break;case"Ev":l=EvalError;break;case"Ra":l=RangeError;break;case"Re":l=ReferenceError;break;case"Sy":l=SyntaxError;break;case"Ty":l=TypeError;break;case"UR":l=URIError;break;default:l=Error}f={v:l=new l(""),t:r[++I]};break;case"I":case"U":case"F":switch(r[++I]+r[++I]){case"Ar":l=Int8Array;break;case"8A":l=Uint8Array;break;case"8C":l=Uint8ClampedArray;break;case"6A":l=Int16Array;break;case"16":l=Uint16Array;break;case"2A":l=Int32Array;break;case"32":l=Uint32Array;break;case"t3":l=Float32Array;break;case"t6":l=Float64Array;break;default:throw y}for(y="";'"'!==r[++I];)y+=r[I];l=new l(+y);for(var S=0,d="";;)if(","===r[++I]||'"'===r[I]){if(l[S++]=+d,d="",'"'===r[I])break}else d+=r[I];break;case"B":switch(r[++I]+r[++I]){case"nt":l=BigInt64Array;break;case"in":l=BigUint64Array;break;default:throw y}for(y="";'"'!==r[++I];)y+=r[I];l=new l(+y);for(var m=0,U="";;)if(","===r[++I]||'"'===r[I]){if(l[m++]=BigInt(U),U="",'"'===r[I])break}else U+=r[I];break;case"A":for(l="",y=r[++I];'"'!==r[++I];)l+=r[I];l=new Int8Array(+l);for(var B=0,R="";;)if(","===r[++I]||'"'===r[I]){if(l[B++]=+R,R="",'"'===r[I])break}else R+=r[I];l=l.buffer,"D"===y&&(l=new DataView(l));break;case"L":case"D":case"N":case"-":case"Q":case"H":case"S":case"R":case"Z":w.push(y);continue;case'"':for(l=[];++I<E&&r[I]!==y;)l.push("\\"!==r[I]?r[I]:r[++I]in u?u[r[I]]:"u"===r[I]?String.fromCharCode(parseInt(r[++I]+r[++I]+r[++I]+r[++I],16)):r[I]||"");l=l.join("");break;case"{":f={v:l={},t:y};break;case"[":f={v:l=[],t:y,i:0};break;case"T":f={v:l=new Set,t:y},I++;break;case"M":f={v:l=new Map,t:y},I++;break;case"]":case"}":case")":A.pop(),l=v.v,v=A[A.length-1];continue;case",":k=g,"["===v.t&&(v.v.length=++v.i);continue;case":":k=l,"["===v.t&&(v.v.length=v.i--);continue;default:for(;++I<E&&!o.test(r[I])?y+=r[I]:(I--,0););l=i.test(y[0])?(b=!1,n[y]):+y}if(w.length){for(y=l,p=[];w.length;)p.push(l=h(w.pop(),l,a));for(;p.length;)n[e(t)]=p.pop();b&&(n[e(t)]=y,b=!1)}b&&(n[e(t)]=l),"["===v.t?k===g?v.v[v.i]=l:(v.v[k]=l,k=g):"T"===v.t?v.v.add(l):k!==g&&("{"===v.t?v.v[k]=l:v.v.set(k,l),k=g),f&&(A.push(v=f),f=null)}return g[0]}function h(e,r,a){switch(e){case"-":return-+r;case"Q":return""+r;case"L":return BigInt(r);case"H":return Symbol(r);case"D":return new Date(+r);case"N":return new Number(r);case"S":return new String(r);case"R":return new RegExp(r.slice(0,e=r.lastIndexOf(",")),r.slice(e+1));default:return a&&a(r)||`%${r}%`}}const l={pack:c,unpack:f};export{l as default,c as pack,f as unpack};
