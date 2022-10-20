"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[715],{760:function(e,n,t){t.d(n,{Z:function(){return c}});var r="Section_section__NWcOJ",s="Section_container__fZ5sh",a=t(184),c=function(e){var n=e.children;return(0,a.jsx)("section",{className:r,children:(0,a.jsx)("div",{className:s,children:n})})}},715:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(885),s=t(791),a=t(739),c=t(358),i=t(760),o="MovieInfo_flexWrapper__Ndes-",u="MovieInfo_title__pCFcA",l="MovieInfo_rating__gJ6WT",p="MovieInfo_overview__xBbQ5",d="MovieInfo_additionInfo__xGrHB",h="MovieInfo_additionList__X0Gh8",f="MovieInfo_additionLink__C2ODa",v=t(731),_=t(184),x=function(e){var n=e.movie,t=n.title,r=n.genres,c=n.poster_path,i=n.overview,x=n.vote_average,m=n.release_date,j=r.map((function(e){return e.name})).join(" ");return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)("div",{className:o,children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(c),alt:"poster"}),(0,_.jsxs)("div",{className:"textContent",children:[(0,_.jsxs)("h2",{className:u,children:[t," (",Number.parseInt(m),")"]}),(0,_.jsxs)("p",{className:l,children:[(0,_.jsx)("b",{children:"User Score:"})," ",Math.round(10*x),"%"]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{className:p,children:i}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("p",{children:j})]})]}),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("h3",{children:"Additional information"}),(0,_.jsxs)("ul",{className:h,children:[(0,_.jsx)("li",{children:(0,_.jsx)(v.rU,{to:"cast",className:f,children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(v.rU,{to:"reviews",className:f,children:"Reviews"})})]})]}),(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(a.j3,{})})]})},m="ButtonBack_btnBack__3-huj",j=function(){var e=(0,a.s0)();return(0,_.jsx)("button",{type:"button",onClick:function(){e(-1)},className:m,children:"Go back"})},g=function(){var e=(0,s.useState)(null),n=(0,r.Z)(e,2),t=n[0],o=n[1],u=(0,a.UO)().movieId;return(0,s.useEffect)((function(){(0,c.Pg)(u).then((function(e){return o(e)}))}),[u]),(0,_.jsx)("main",{children:(0,_.jsxs)(i.Z,{children:[(0,_.jsx)(j,{}),null===t?(0,_.jsx)("p",{children:"Loading..."}):(0,_.jsx)(x,{movie:t})]})})}},358:function(e,n,t){t.d(n,{Pg:function(){return d},Wd:function(){return f},Wf:function(){return l},rj:function(){return o},tx:function(){return _}});var r=t(165),s=t(861),a=t(44),c="006535a90e42ebf59916948f18019782",i="https://api.themoviedb.org/3";function o(){return u.apply(this,arguments)}function u(){return(u=(0,s.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(c));case 3:return n=e.sent,e.next=6,n.data;case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data.status_message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)((0,r.Z)().mark((function e(n){var t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(i,"/search/movie?api_key=").concat(c,"&query=").concat(n));case 3:return t=e.sent,e.next=6,t.data;case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data.status_message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,s.Z)((0,r.Z)().mark((function e(n){var t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(c));case 3:return t=e.sent,e.next=6,t.data;case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data.status_message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)((0,r.Z)().mark((function e(n){var t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(c));case 3:return t=e.sent,e.next=6,t.data;case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data.status_message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return(x=(0,s.Z)((0,r.Z)().mark((function e(n){var t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(c));case 3:return t=e.sent,e.next=6,t.data;case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data.status_message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=715.d1b01a03.chunk.js.map