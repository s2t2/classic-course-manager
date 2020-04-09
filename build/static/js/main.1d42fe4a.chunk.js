(this.webpackJsonpfinal_project=this.webpackJsonpfinal_project||[]).push([[0],{38:function(e,t,a){e.exports=a(63)},43:function(e,t,a){},44:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(32),c=a.n(l),o=(a(43),a(37)),i=a(14),u=(a(44),a(45),a(64)),s=a(65),m=a(66),g=a(67),E=a(68),f=a(33),h=a(81),p=a(82),d=a(69),v=a(83),w=a(70),b=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1],c=function(){return l(!a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{color:"light",light:!0,expand:"md"},r.a.createElement(s.a,{href:"/"},"Classic Course Manager"),r.a.createElement(m.a,{className:"mr-auto"},r.a.createElement(g.a,null,r.a.createElement(E.a,null," About")),r.a.createElement(g.a,null,r.a.createElement(E.a,null," GitHub")),r.a.createElement(g.a,null,r.a.createElement(E.a,null," Help "))),a?r.a.createElement(O,{url:"https://picsum.photos/35",toggle:c}):r.a.createElement(f.a,{onClick:c,color:"primary"}," ","Login"," ")))},j={borderRadius:"50%"},O=function(e){var t=e.url,a=e.toggle;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{inNavbar:!0},r.a.createElement(p.a,{color:"light"},r.a.createElement(d.a,{style:j,right:!0,object:!0,src:t,alt:"Generic placeholder image"})),r.a.createElement(v.a,{right:!0},r.a.createElement(w.a,{onClick:a},"Logout"))))},y=a(71),N=a(72),C=a(73),k=a(74),S={padding:"10px",margin:"5px",textAlign:"left"},D={fontSize:"0.85vw"},x={width:"40%"},F=function(e){var t=e.courseName,a=e.subjectName,n=e.section,l=e.professorName,c=e.timings,o=e.conflict,i=function(e){var t=e.getHours(),a=e.getMinutes(),n=t>=12?"pm":"am";return(t=(t%=12)||12)+":"+(a=a<10?"0"+a:a)+" "+n};return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{style:S},r.a.createElement(N.a,null,r.a.createElement("h4",null,t),o?r.a.createElement(C.a,{style:x,pill:!0,color:"danger"},"CONFLICT"):""),r.a.createElement(k.a,null,a," - ",n),r.a.createElement(k.a,null,"Professor ",l),r.a.createElement("br",null),null===c||void 0===c?void 0:c.map((function(e,t){return r.a.createElement(k.a,{key:t,style:D},e.weekday,": ",i(e.start)," to ",i(e.end))})),r.a.createElement(f.a,{color:"danger"}," Remove ")))},T=a(75),_=a(76),A=a(77),H=a(78),I=a(79),J=a(36),L=a(80);var M=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)([]),u=Object(i.a)(c,2),s=u[0],m=u[1],g=Object(n.useState)(!1),E=Object(i.a)(g,2),f=E[0],h=E[1];return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),f?"true":"false",r.a.createElement(T.a,null,r.a.createElement(_.a,null,r.a.createElement(A.a,{lg:3},r.a.createElement("form",{onSubmit:function(){h(!1),fetch("/api/getinfo?crn="+a).then((function(e){var t=e.json();return console.log("getInfo",t),t})).then((function(e){var t=e;if(e.error)throw new Error("Course does not exist.");return fetch("/api/getcoursetimings?crn="+e.results[0].crn.toString()).then((function(e){var t=e.json();return console.log("getCourseTimings",t),t})).then((function(e){var a=e.data.map((function(e){return{weekday:new Date(e.start).getDay(),start:new Date(e.start),end:new Date(e.end)}}));t.results[0].timings=a})).catch((function(e){throw h(!0),new Error("getCourseTimings")})),t})).then((function(e){var t;t={courseName:e.results[0].name,subjectName:e.results[0].sname,section:e.results[0].section,professorName:e.results[0].professor__name,timings:e.results[0].timings},console.log(JSON.stringify(t)),m([].concat(Object(o.a)(s),[t]))})).catch((function(e){console.log("OOOO",e)})).finally((function(){l("")}))}},r.a.createElement(H.a,null,r.a.createElement(I.a,{addonType:"prepend"},r.a.createElement(J.a,null,"CRN")),r.a.createElement(L.a,{name:"crn",value:a,onChange:function(e){return l(e.target.value)},placeholder:"12345",invalid:f}))),s.map((function(e,t){return r.a.createElement(F,Object.assign({key:t},e))}))),r.a.createElement(A.a,{lg:9}))))};new Date,new Date,new Date,new Date,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.1d42fe4a.chunk.js.map