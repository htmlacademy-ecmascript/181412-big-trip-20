(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(537),s=n.n(i),r=n(645),a=n.n(r)()(s());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,s,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),s&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=s):d[4]="".concat(s)),t.push(d))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),r="/*# ".concat(s," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",r="hour",a="day",o="week",l="month",c="quarter",d="year",u="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},h=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},_={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,l),r=n-s<0,a=t.clone().add(i+(r?-1:1),l);return+(-(i+(n-s)/(r?s-a:a-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:o,d:a,D:u,h:r,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=v;var b=function(e){return e instanceof A},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();g[r]&&(s=r),n&&(g[r]=n,s=r);var a=t.split("-");if(!s&&a.length>1)return e(a[0])}else{var o=t.name;g[o]=t,s=o}return!i&&s&&(y=s),s||!i&&y},T=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new A(n)},M=_;M.l=$,M.i=b,M.w=function(e,t){return T(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var A=function(){function v(e){this.$L=$(e.locale,null,!0),this.parse(e)}var h=v.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return M},h.isValid=function(){return!(this.$d.toString()===p)},h.isSame=function(e,t){var n=T(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return T(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<T(e)},h.$g=function(e,t,n){return M.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var n=this,c=!!M.u(t)||t,p=M.p(e),f=function(e,t){var i=M.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(a)},m=function(e,t){return M.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,h=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case d:return c?f(1,0):f(31,11);case l:return c?f(1,h):f(0,h+1);case o:var g=this.$locale().weekStart||0,b=(v<g?v+7:v)-g;return f(c?_-b:_+(6-b),h);case a:case u:return m(y+"Hours",0);case r:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,t){var o,c=M.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[u]=p+"Date",o[l]=p+"Month",o[d]=p+"FullYear",o[r]=p+"Hours",o[s]=p+"Minutes",o[i]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],m=c===a?this.$D+(t-this.$W):t;if(c===l||c===d){var v=this.clone().set(u,1);v.$d[f](m),v.init(),this.$d=v.set(u,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[M.p(e)]()},h.add=function(n,c){var u,p=this;n=Number(n);var f=M.p(c),m=function(e){var t=T(p);return M.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===d)return this.set(d,this.$y+n);if(f===a)return m(1);if(f===o)return m(7);var v=(u={},u[s]=e,u[r]=t,u[i]=1e3,u)[f]||1,h=this.$d.getTime()+n*v;return M.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=M.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,d=function(e,n,s,r){return e&&(e[n]||e(t,i))||s[n].slice(0,r)},u=function(e){return M.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},v={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:d(n.monthsShort,o,c,3),MMMM:d(c,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:d(n.weekdaysMin,this.$W,l,2),ddd:d(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(r),HH:M.s(r,2,"0"),h:u(1),hh:u(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:M.s(a,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:s};return i.replace(m,(function(e,t){return t||v[e]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(n,u,p){var f,m=M.p(u),v=T(n),h=(v.utcOffset()-this.utcOffset())*e,_=this-v,y=M.m(this,v);return y=(f={},f[d]=y/12,f[l]=y,f[c]=y/3,f[o]=(_-h)/6048e5,f[a]=(_-h)/864e5,f[r]=_/t,f[s]=_/e,f[i]=_/1e3,f)[m]||_,p?y:M.a(y)},h.daysInMonth=function(){return this.endOf(l).$D},h.$locale=function(){return g[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},h.clone=function(){return M.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},v}(),E=A.prototype;return T.prototype=E,[["$ms",n],["$s",i],["$m",s],["$H",r],["$W",a],["$M",l],["$y",d],["$D",u]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),T.extend=function(e,t){return e.$i||(e(t,A,T),e.$i=!0),T},T.locale=$,T.isDayjs=b,T.unix=function(e){return T(1e3*e)},T.en=g[y],T.Ls=g,T.p={},T}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=i.base?l[0]+i.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var p=n(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=s(f,i);i.byIndex=o,t.splice(o,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function s(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,s){var r=i(e=e||[],s=s||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=i(e,s),c=0;c<r.length;c++){var d=n(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var s=void 0!==n.layer;s&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,s&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={id:i,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"beforeend";t.insertAdjacentElement(n,e.getElement())}var i=n(379),s=n.n(i),r=n(795),a=n.n(r),o=n(569),l=n.n(o),c=n(565),d=n.n(c),u=n(216),p=n.n(u),f=n(589),m=n.n(f),v=n(10),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=l().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=p(),s()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;const _="shake";class y{#e=null;constructor(){if(new.target===y)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(_),setTimeout((()=>{this.element.classList.remove(_),e?.()}),600)}}var g=n(484),b=n.n(g);function $(e,t){return e?b()(e).format(t):""}const T=(e,t)=>{if(e<0||t<0)return NaN;const n=Math.ceil(Math.min(e,t)),i=Math.floor(Math.max(e,t)),s=Math.random()*(i-n+1)+n;return Math.floor(s)},M=[{type:"taxi",offers:[{id:1,title:"Choose the radio",price:120},{id:2,title:"Order Uber",price:20},{id:3,title:"Order Ice Cream",price:5}]},{type:"bus",offers:[{id:1,title:"Choose the radio",price:120},{id:2,title:"Order Uber",price:20}]},{type:"flight",offers:[{id:1,title:"Add luggage",price:30},{id:2,title:"Switch to comfort",price:100},{id:3,title:"Add meal",price:15},{id:4,title:"Choose seats",price:5},{id:5,title:"Travel by train",price:40}]},{type:"train",offers:[{id:1,title:"Choose the radio",price:120},{id:2,title:"Order Uber",price:20}]},{type:"ship",offers:[]},{type:"drive",offers:[{id:1,title:"Choose the radio",price:120},{id:2,title:"Order Uber",price:20}]},{type:"check-in",offers:[{id:1,title:"Choose the radio",price:120},{id:2,title:"Order Uber",price:20}]},{type:"sightseeing",offers:[{id:1,title:"Choose the radio",price:120},{id:2,title:"Order Uber",price:20}]},{type:"restaurant",offers:[{id:1,title:"Choose the radio",price:120},{id:2,title:"Order Uber",price:20}]}],A=[{id:1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.",name:"Chamonix",pictures:[{src:`https://loremflickr.com/248/152?random=${T(1,10)}`}]},{id:2,description:"Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.",name:"Geneve",pictures:[{src:`https://loremflickr.com/248/152?random=${T(1,10)}`}]},{id:3,description:"Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.",name:"Amsterdam",pictures:[{src:`https://loremflickr.com/248/152?random=${T(1,10)}`}]}],E=[{id:0,type:"taxi",offers:[1,2],destination:A[0].name,description:A[0].description,pictures:A[0].pictures.src,basePrice:500,dateFrom:"2019-08-11T20:35:56.845Z",dateTo:"2019-08-12T11:25:13.375Z",timeFrom:"10:30",timeTo:"11:00",isFavorite:!0},{id:1,type:"bus",offers:[1,3],destination:A[1].name,description:A[1].description,basePrice:40,dateFrom:"2019-09-11T20:35:56.845Z",dateTo:"2019-09-12T11:25:13.375Z",timeFrom:"10:30",timeTo:"11:00",isFavorite:!0},{id:2,type:"train",offers:[1,2],destination:A[2].name,description:A[2].description,basePrice:200,dateFrom:"2019-10-11T20:35:56.845Z",dateTo:"2019-10-12T11:25:13.375Z",timeFrom:"10:30",timeTo:"11:00",isFavorite:!0},{id:3,type:"ship",offers:[1,2],destination:A[0].name,description:A[0].description,basePrice:80,dateFrom:"2019-07-11T20:35:56.845Z",dateTo:"2019-07-12T11:25:13.375Z",timeFrom:"10:30",timeTo:"11:00",isFavorite:!0},{id:4,type:"drive",offers:[1,2],destination:A[1].name,description:A[1].description,basePrice:90,dateFrom:"2019-07-11T20:35:56.845Z",dateTo:"2019-07-12T11:25:13.375Z",timeFrom:"10:30",timeTo:"11:00",isFavorite:!0},{id:5,type:"flight",offers:[1,2,3],destination:A[2].name,description:A[2].description,basePrice:150,dateFrom:"2019-07-11T20:35:56.845Z",dateTo:"2019-07-12T11:25:13.375Z",timeFrom:"10:30",timeTo:"11:00",isFavorite:!0},{id:6,type:"check-in",offers:[1,2],destination:A[0].name,description:A[0].description,basePrice:150,dateFrom:"2019-07-11T20:35:56.845Z",dateTo:"2019-07-12T11:25:13.375Z",timeFrom:"10:30",timeTo:"11:00",isFavorite:!1},{id:7,type:"sightseeing",offers:[1,2],destination:A[1].name,description:A[1].description,basePrice:100,dateFrom:"2019-07-11T20:35:56.845Z",dateTo:"2019-07-12T11:25:13.375Z",timeFrom:"10:30",timeTo:"11:00",isFavorite:!1},{id:8,type:"restaurant",offers:[1,2],destination:A[2].name,description:A[2].description,basePrice:100,dateFrom:"2019-07-10T22:55:56.845Z",dateTo:"2019-07-11T11:22:13.375Z",timeFrom:"10:30",timeTo:"11:00",isFavorite:!1}],w=()=>{return(e=E)[Math.floor(Math.random()*e.length)];var e},C="YYYY-MM-DD";class S{constructor(e){let{point:t}=e;this.point=t}getTemplate(){return function(e){const{basePrice:t,dateFrom:n,timeFrom:i,timeTo:s,dateTo:r,isFavorite:a,destination:o,type:l,offers:c}=e,d=a?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn",u=$(n,"MMM DD"),p=$(n,C),f=$(r,C),m=M.find((e=>e.type===l)).offers.filter((e=>c.includes(e.id)));return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="${p}">${u}</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${l}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${l} ${o}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="${p}T${i}">${i}</time>\n                    —\n                    <time class="event__end-time" datetime="${f}T${s}">${s}</time>\n                  </p>\n                  <p class="event__duration">30M</p>\n                </div>\n                <p class="event__price">\n                  €&nbsp;<span class="event__price-value">${t}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                   ${0===m.length?'<li class="event__offer">\n          <span class="event__offer-title">No additional offers!!</span>\n        </li>':m.map((e=>`<li class="event__offer">\n          <span class="event__offer-title">${e.title}</span>\n          &plus;&euro;&nbsp;\n          <span class="event__offer-price">${e.price}</span>\n      </li>`)).join("")}\n                </ul>\n                <button class="${d}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`}(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class x{constructor(e){let{point:t}=e;this.point=t}getTemplate(){return function(e){const{dateFrom:t,dateTo:n,type:i,destination:s,timeTo:r,timeFrom:a,basePrice:o,description:l}=e,c=$(t,C),d=$(n,C),u=M.find((e=>e.type===i)).offers.map((t=>{const n=e.offers.includes(t.id)?t.checked:"";return`<div class="event__offer-selector">\n        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${t.title}-1" type="checkbox" name="event-offer-luggage" ${n?"checked":""}>\n        <label class="event__offer-label" for="event-offer-luggage-1">\n          <span class="event__offer-title">${t.title}</span>\n          +€&nbsp;\n          <span class="event__offer-price">${t.price}</span>\n        </label>\n      </div> `})).join(""),p=M.map((e=>`<div class="event__type-item">\n      <input id="event-type-${e.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.type}">\n      <label class="event__type-label  event__type-label--${e.type}" for="event-type-${e.type}-1">${e.type}</label>\n    </div>`)).join("");return`<li class="trip-events__item">\n              <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/${i}.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n                            ${p}\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      ${i}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${s}" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      <option value="Amsterdam"></option>\n                      <option value="Geneva"></option>\n                      <option value="Chamonix"></option>\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${c} ${r}">\n                    —\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${d} ${a}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">{basePrice}</span>\n                      €\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${o}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Cancel</button>\n                </header>\n                <section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                      ${u}\n                    </div>\n                  </section>\n\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${l}</p>\n\n                    <div class="event__photos-container">\n                      <div class="event__photos-tape">\n                        <img class="event__photo" src="img/photos/${T(1,5)}.jpg" alt="Event photo">\n                        <img class="event__photo" src="img/photos/${T(1,5)}.jpg" alt="Event photo">\n                        <img class="event__photo" src="img/photos/${T(1,5)}.jpg" alt="Event photo">\n                        <img class="event__photo" src="img/photos/${T(1,5)}.jpg" alt="Event photo">\n                        <img class="event__photo" src="img/photos/${T(1,5)}.jpg" alt="Event photo">\n                      </div>\n                    </div>\n                  </section>\n                </section>\n              </form>\n            </li>`}(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class D{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const F=document.querySelector("header"),O=document.querySelector("main"),k=F.querySelector(".trip-main"),L=F.querySelector(".trip-controls__filters"),Z=O.querySelector(".trip-events"),P=O.querySelector(".trip-events"),j=new class extends y{get template(){return'<section class="trip-main__trip-info  trip-info">\n                <div class="trip-info__main">\n                  <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n                  <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>\n                </div>\n\n                <p class="trip-info__cost">\n                  Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n                </p>\n            </section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},I=new class extends y{get template(){return'<form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n          </form>'}getElement(){return this.element||(this.element=createElement(this.getTemplate())),this.element}removeElement(){this.element=null}},B=new class extends y{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n                <div class="trip-sort__item  trip-sort__item--day">\n                  <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked="">\n                  <label class="trip-sort__btn" for="sort-day">Day</label>\n                </div>\n\n                <div class="trip-sort__item  trip-sort__item--event">\n                  <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled="">\n                  <label class="trip-sort__btn" for="sort-event">Event</label>\n                </div>\n\n                <div class="trip-sort__item  trip-sort__item--time">\n                  <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n                  <label class="trip-sort__btn" for="sort-time">Time</label>\n                </div>\n\n                <div class="trip-sort__item  trip-sort__item--price">\n                  <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n                  <label class="trip-sort__btn" for="sort-price">Price</label>\n                </div>\n\n                <div class="trip-sort__item  trip-sort__item--offer">\n                  <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled="">\n                  <label class="trip-sort__btn" for="sort-offer">Offers</label>\n                </div>\n            </form>'}getElement(){return this.element||(this.element=createElement(this.getTemplate())),this.element}removeElement(){this.element=null}},Y=new class{points=Array.from({length:5},w);getPoints(){return this.points}},H=new class{eventsListComponent=new D;constructor(e){let{eventsListContainer:t,pointsModel:n}=e;this.eventsListContainer=t,this.pointsModel=n}init(){this.boardPoints=[...this.pointsModel.getPoints()],t(this.eventsListComponent,this.eventsListContainer,"beforeend"),t(new x({point:this.boardPoints[0]}),this.eventsListComponent.getElement(),"afterbegin");for(let e=0;e<this.boardPoints.length;e++)t(new S({point:this.boardPoints[e]}),this.eventsListComponent.getElement())}}({eventsListContainer:P,pointsModel:Y});t(j,k,"afterbegin"),t(I,L,"beforeend"),t(B,Z,"beforeend"),H.init()})()})();
//# sourceMappingURL=bundle.d64fa047137b9a92786b.js.map