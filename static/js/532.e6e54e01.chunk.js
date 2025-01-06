/*! For license information please see 532.e6e54e01.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunklemon=self.webpackChunklemon||[]).push([[532],{0:(t,e,a)=>{a.d(e,{A:()=>h});var i=a(9379),s=a(45),c=a(5043);const n=["style","className","fill","paused","children","id","svgId","svgPathId","d","ref","height","amplitude","speed","points"],o=["options"];var r=class extends c.Component{constructor(t){super(t),this.t=()=>this.i.current.offsetWidth,this.h=()=>this.i.current.offsetHeight,this.i=c.createRef(),this.state={path:""},this.l=0,this.o=0,this.p=0,this.u=this.u.bind(this)}m(){const t=[];for(let e=0;e<=Math.max(this.props.points,1);e++){const a=100,i=e/this.props.points*this.t(),s=(this.p+(e+e%this.props.points))*this.props.speed*a,c=Math.sin(s/a)*this.props.amplitude,n=Math.sin(s/a)*c+this.props.height;t.push({x:i,y:n})}return t}$(t){let e="M ".concat(t[0].x," ").concat(t[0].y);const a={x:(t[1].x-t[0].x)/2,y:t[1].y-t[0].y+t[0].y+(t[1].y-t[0].y)},i=(t,e)=>" C ".concat(t.x," ").concat(t.y," ").concat(t.x," ").concat(t.y," ").concat(e.x," ").concat(e.y);e+=i(a,t[1]);let s=a;for(let c=1;c<t.length-1;c++)s={x:t[c].x-s.x+t[c].x,y:t[c].y-s.y+t[c].y},e+=i(s,t[c+1]);return e+=" L ".concat(this.t()," ").concat(this.h()),e+=" L 0 ".concat(this.h()," Z"),e}v(){this.setState({path:this.$(this.m())})}M(){if(!this.props.paused){const t=new Date;this.o+=t-this.l,this.l=t}this.p=this.o*Math.PI/1e3,this.v()}u(){this.M(),this._&&this.D()}D(){this._=window.requestAnimationFrame(this.u),this.l=new Date}componentDidMount(){this._||this.D()}componentWillUnmount(){window.cancelAnimationFrame(this._),this._=0}render(){const t=this.props,{style:e,className:a,fill:o,paused:r,children:l,id:h,svgId:m,svgPathId:p,d:d,ref:u,height:f,amplitude:v,speed:g,points:y}=t,x=(0,s.A)(t,n);return c.createElement("div",{style:(0,i.A)({width:"100%",display:"inline-block"},e),className:a,id:h,ref:this.i},c.createElement("svg",{width:"100%",height:"100%",version:"1.1",xmlns:"http://www.w3.org/2000/svg",id:m},l,c.createElement("path",Object.assign({},{d:this.state.path,fill:o,id:p},x))))}};const l={fill:"#fff",paused:!1,height:20,amplitude:20,speed:.15,points:3},h=t=>{let{options:e}=t,a=(0,s.A)(t,o);return c.createElement(r,Object.assign({},l,e,a))}},5479:(t,e,a)=>{a.d(e,{r:()=>u});var i=a(9379),s=a(45),c=a(579),n=a(2470),o=a(5003),r=a(7971);const l=["templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],h=(0,o.R)((function(t,e){const{templateAreas:a,gap:n,rowGap:o,columnGap:h,column:m,row:p,autoFlow:d,autoRows:u,templateRows:f,autoColumns:v,templateColumns:g}=t,y=(0,s.A)(t,l),x={display:"grid",gridTemplateAreas:a,gridGap:n,gridRowGap:o,gridColumnGap:h,gridAutoColumns:v,gridColumn:m,gridRow:p,gridAutoFlow:d,gridAutoRows:u,gridTemplateRows:f,gridTemplateColumns:g};return(0,c.jsx)(r.B.div,(0,i.A)({ref:e,__css:x},y))}));h.displayName="Grid";var m=a(7841),p=a(6448);const d=["columns","spacingX","spacingY","spacing","minChildWidth"],u=(0,o.R)((function(t,e){const{columns:a,spacingX:o,spacingY:r,spacing:l,minChildWidth:u}=t,f=(0,s.A)(t,d),v=(0,m.D)(),g=u?function(t,e){return(0,n.bk)(t,(t=>{const a=(0,p.gf)("sizes",t,"number"===typeof(i=t)?"".concat(i,"px"):i)(e);var i;return null===t?null:"repeat(auto-fit, minmax(".concat(a,", 1fr))")}))}(u,v):(y=a,(0,n.bk)(y,(t=>null===t?null:"repeat(".concat(t,", minmax(0, 1fr))"))));var y;return(0,c.jsx)(h,(0,i.A)({ref:e,gap:l,columnGap:o,rowGap:r,templateColumns:g},f))}));u.displayName="SimpleGrid"},4010:(t,e,a)=>{a.d(e,{w:()=>r});var i=a(9379),s=a(579),c=a(5043),n=a(5011),o=a(5003);function r(t){const{viewBox:e="0 0 24 24",d:a,displayName:r,defaultProps:l={}}=t,h=c.Children.toArray(t.path),m=(0,o.R)(((t,c)=>(0,s.jsx)(n.I,(0,i.A)((0,i.A)((0,i.A)({ref:c,viewBox:e},l),t),{},{children:h.length?h:(0,s.jsx)("path",{fill:"currentColor",d:a})}))));return m.displayName=r,m}},6773:(t,e,a)=>{a.d(e,{A:()=>o});var i=a(3108),s=a(2470);var c=a(7381),n=a(7841);function o(t,e){var a;const o=function(t){var e,a;const s=(0,i.Gv)(t)?t:{fallback:null!==t&&void 0!==t?t:"base"},o=(0,n.D)().__breakpoints.details.map((t=>{let{minMaxQuery:e,breakpoint:a}=t;return{breakpoint:a,query:e.replace("@media screen and ","")}})),r=o.map((t=>t.breakpoint===s.fallback)),l=(0,c.U)(o.map((t=>t.query)),{fallback:r,ssr:s.ssr});return null!==(e=null===(a=o[l.findIndex((t=>1==t))])||void 0===a?void 0:a.breakpoint)&&void 0!==e?e:s.fallback}((0,i.Gv)(e)?e:{fallback:null!==e&&void 0!==e?e:"base"}),r=(0,n.D)();if(!o)return;const l=Array.from((null===(a=r.__breakpoints)||void 0===a?void 0:a.keys)||[]);return function(t,e){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.fi,i=Object.keys(t).indexOf(e);if(-1!==i)return t[e];let c=a.indexOf(e);for(;c>=0;){const e=a[c];if(t.hasOwnProperty(e)){i=c;break}c-=1}if(-1!==i)return t[a[i]]}(Array.isArray(t)?Object.fromEntries(Object.entries((0,s.a1)(t,l)).map((t=>{let[e,a]=t;return[e,a]}))):t,o,l)}},7381:(t,e,a)=>{a.d(e,{U:()=>n});var i=a(9379),s=a(5043),c=a(2923);function n(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ssr:a=!0,fallback:n}=e,{getWindow:o}=(0,c.O)(),r=Array.isArray(t)?t:[t];let l=Array.isArray(n)?n:[n];l=l.filter((t=>null!=t));const[h,m]=(0,s.useState)((()=>r.map(((t,e)=>({media:t,matches:a?!!l[e]:o().matchMedia(t).matches})))));return(0,s.useEffect)((()=>{const t=o();m(r.map((e=>({media:e,matches:t.matchMedia(e).matches}))));const e=r.map((e=>t.matchMedia(e))),a=t=>{m((e=>e.slice().map((e=>e.media===t.media?(0,i.A)((0,i.A)({},e),{},{matches:t.matches}):e))))};return e.forEach((t=>{"function"===typeof t.addListener?t.addListener(a):t.addEventListener("change",a)})),()=>{e.forEach((t=>{"function"===typeof t.removeListener?t.removeListener(a):t.removeEventListener("change",a)}))}}),[o]),h.map((t=>t.matches))}},202:(t,e,a)=>{a.d(e,{T:()=>n});var i=a(9379),s=a(579),c=a(922);const n=(0,a(5003).R)(((t,e)=>(0,s.jsx)(c.B,(0,i.A)((0,i.A)({align:"center"},t),{},{direction:"column",ref:e}))));n.displayName="VStack"},8846:(t,e,a)=>{a.d(e,{D:()=>p});var i=a(9379),s=a(45),c=a(579),n=a(3033),o=a(4765),r=a(5003),l=a(5158),h=a(7971);const m=["className"],p=(0,r.R)((function(t,e){const a=(0,l.V)("Heading",t),r=(0,n.M)(t),{className:p}=r,d=(0,s.A)(r,m);return(0,c.jsx)(h.B.h2,(0,i.A)((0,i.A)({ref:e,className:(0,o.cx)("chakra-heading",t.className)},d),{},{__css:a}))}));p.displayName="Heading"},892:(t,e,a)=>{a.d(e,{AIX:()=>n,EYA:()=>l,IAJ:()=>o,QV6:()=>r,Vz1:()=>h,cm9:()=>c,em0:()=>s,mBG:()=>m,oSu:()=>i});const i={prefix:"fab",iconName:"weixin",icon:[576,512,[],"f1d7","M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"]},s={prefix:"fab",iconName:"cc-apple-pay",icon:[576,512,[],"f416","M302.2 218.4c0 17.2-10.5 27.1-29 27.1h-24.3v-54.2h24.4c18.4 0 28.9 9.8 28.9 27.1zm47.5 62.6c0 8.3 7.2 13.7 18.5 13.7 14.4 0 25.2-9.1 25.2-21.9v-7.7l-23.5 1.5c-13.3.9-20.2 5.8-20.2 14.4zM576 79v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM127.8 197.2c8.4.7 16.8-4.2 22.1-10.4 5.2-6.4 8.6-15 7.7-23.7-7.4.3-16.6 4.9-21.9 11.3-4.8 5.5-8.9 14.4-7.9 22.8zm60.6 74.5c-.2-.2-19.6-7.6-19.8-30-.2-18.7 15.3-27.7 16-28.2-8.8-13-22.4-14.4-27.1-14.7-12.2-.7-22.6 6.9-28.4 6.9-5.9 0-14.7-6.6-24.3-6.4-12.5.2-24.2 7.3-30.5 18.6-13.1 22.6-3.4 56 9.3 74.4 6.2 9.1 13.7 19.1 23.5 18.7 9.3-.4 13-6 24.2-6 11.3 0 14.5 6 24.3 5.9 10.2-.2 16.5-9.1 22.8-18.2 6.9-10.4 9.8-20.4 10-21zm135.4-53.4c0-26.6-18.5-44.8-44.9-44.8h-51.2v136.4h21.2v-46.6h29.3c26.8 0 45.6-18.4 45.6-45zm90 23.7c0-19.7-15.8-32.4-40-32.4-22.5 0-39.1 12.9-39.7 30.5h19.1c1.6-8.4 9.4-13.9 20-13.9 13 0 20.2 6 20.2 17.2v7.5l-26.4 1.6c-24.6 1.5-37.9 11.6-37.9 29.1 0 17.7 13.7 29.4 33.4 29.4 13.3 0 25.6-6.7 31.2-17.4h.4V310h19.6v-68zM516 210.9h-21.5l-24.9 80.6h-.4l-24.9-80.6H422l35.9 99.3-1.9 6c-3.2 10.2-8.5 14.2-17.9 14.2-1.7 0-4.9-.2-6.2-.3v16.4c1.2.4 6.5.5 8.1.5 20.7 0 30.4-7.9 38.9-31.8L516 210.9z"]},c={prefix:"fab",iconName:"opencart",icon:[640,512,[],"f23d","M423.3 440.7c0 25.3-20.3 45.6-45.6 45.6s-45.8-20.3-45.8-45.6 20.6-45.8 45.8-45.8c25.4 0 45.6 20.5 45.6 45.8zm-253.9-45.8c-25.3 0-45.6 20.6-45.6 45.8s20.3 45.6 45.6 45.6 45.8-20.3 45.8-45.6-20.5-45.8-45.8-45.8zm291.7-270C158.9 124.9 81.9 112.1 0 25.7c34.4 51.7 53.3 148.9 373.1 144.2 333.3-5 130 86.1 70.8 188.9 186.7-166.7 319.4-233.9 17.2-233.9z"]},n={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},o={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},r={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},l={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},h={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},m={prefix:"fab",iconName:"alipay",icon:[448,512,[],"f642","M377.74 32H70.26C31.41 32 0 63.41 0 102.26v307.48C0 448.59 31.41 480 70.26 480h307.48c38.52 0 69.76-31.08 70.26-69.6-45.96-25.62-110.59-60.34-171.6-88.44-32.07 43.97-84.14 81-148.62 81-70.59 0-93.73-45.3-97.04-76.37-3.97-39.01 14.88-81.5 99.52-81.5 35.38 0 79.35 10.25 127.13 24.96 16.53-30.09 26.45-60.34 26.45-60.34h-178.2v-16.7h92.08v-31.24H88.28v-19.01h109.44V92.34h50.92v50.42h109.44v19.01H248.63v31.24h88.77s-15.21 46.62-38.35 90.92c48.93 16.7 100.01 36.04 148.62 52.74V102.26C447.83 63.57 416.43 32 377.74 32zM47.28 322.95c.99 20.17 10.25 53.73 69.93 53.73 52.07 0 92.58-39.68 117.87-72.9-44.63-18.68-84.48-31.41-109.44-31.41-67.45 0-79.35 33.06-78.36 50.58z"]}}}]);
//# sourceMappingURL=532.e6e54e01.chunk.js.map