(this.webpackJsonpphotoshop=this.webpackJsonpphotoshop||[]).push([[0],{13:function(e,n,t){},15:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t.n(a),i=t(6),r=t.n(i),s=(t(13),t(5)),o=t(3),l=t(1);function u(e){var n=e.name,t=e.active,a=e.handleClick,c=e.isDisable;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{className:t?"active":"",onClick:a,disabled:c,children:n})})}t(15);var m=t(8),j=t(7),b=[{name:"Brightness",property:"brightness",value:100,range:{min:0,max:200},unit:"%"},{name:"Contrast",property:"contrast",value:100,range:{min:0,max:200},unit:"%"},{name:"Saturation",property:"saturate",value:100,range:{min:0,max:200},unit:"%"},{name:"Gray Scale",property:"grayscale",value:0,range:{min:0,max:100},unit:"%"},{name:"Sepia",property:"sepia",value:0,range:{min:0,max:100},unit:"%"},{name:"Hue Rotate",property:"hue-rotate",value:0,range:{min:0,max:360},unit:"deg"},{name:"Blur",property:"blur",value:0,range:{min:0,max:20},unit:"px"}];var d=function(){var e=Object(a.useState)(null),n=Object(o.a)(e,2),t=n[0],c=n[1],i=Object(a.useState)(b),r=Object(o.a)(i,2),d=r[0],p=r[1],h=Object(a.useState)(0),g=Object(o.a)(h,2),v=g[0],O=g[1],x=d[v];return Object(a.useEffect)((function(){p(b),O(0)}),[t]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"photoshop"}),t?Object(l.jsx)("img",{id:"image",src:t?URL.createObjectURL(t):null,alt:t?t.name:null,style:{filter:d.map((function(e,n){return"".concat(e.property,"(").concat(e.value).concat(e.unit,")")})).join(" ")}}):Object(l.jsx)("h4",{children:"Please select image..."}),Object(l.jsx)("div",{className:"btnsDiv",children:d.map((function(e,n){return Object(l.jsx)(u,{name:e.name,handleClick:function(){O(n)},active:n===v,isDisable:!t},n)}))}),Object(l.jsxs)("div",{className:"rangeDiv",children:[Object(l.jsxs)("p",{className:"rangeValue",children:[x.value," ",x.unit]}),Object(l.jsx)("input",{type:"range",min:x.range.min,max:x.range.max,value:x.value,onChange:function(e){p((function(n){return n.map((function(n,t){return v!==t?n:Object(s.a)(Object(s.a)({},n),{},{value:e.target.value})}))}))},disabled:!t})]})]}),Object(l.jsxs)("div",{className:"rightDiv",children:[Object(l.jsx)("button",{className:"downloadBtn",onClick:function(){var e=document.getElementById("image");Object(m.a)(e).then((function(e){console.log(e),j(e,"".concat(Date.now(),"Gurwinder_Singh"))})).catch((function(e){console.error("oops, something went wrong!",e)}))},disabled:!t,children:"Download"}),Object(l.jsx)("input",{type:"file",name:"srcImg",onChange:function(e){c(e.target.files[0])},accept:"image/*"})]})]}),Object(l.jsx)("div",{className:"footerDiv",children:Object(l.jsx)("p",{children:"Created by Gurwinder Singh"})})]})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.676f7f74.chunk.js.map