"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[765],{718:function(t,e,n){n.d(e,{Z:function(){return o}});var r="MoviesList_list__KYq+x",c={title:"MovieItem_title__IFsPo",link:"MovieItem_link__00Ts8"},a=n(731),s=n(184),i=function(t){var e=t.movie,n=e.title,r=e.id,i=e.poster_path;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(r),className:c.link,children:(0,s.jsxs)("div",{className:c.wrapper,children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(i),alt:"poster"}),(0,s.jsx)("p",{className:c.title,children:n})]})})})},o=function(t){var e=t.movies;return(0,s.jsx)("ul",{className:r,children:e.map((function(t){return(0,s.jsx)(i,{movie:t},t.id)}))})}},760:function(t,e,n){n.d(e,{Z:function(){return s}});var r="Section_section__NWcOJ",c="Section_container__fZ5sh",a=n(184),s=function(t){var e=t.children;return(0,a.jsx)("section",{className:r,children:(0,a.jsx)("div",{className:c,children:e})})}},765:function(t,e,n){n.r(e);var r=n(885),c=n(760),a=n(718),s=n(791),i=n(358),o=n(184);e.default=function(){var t=(0,s.useState)(null),e=(0,r.Z)(t,2),n=e[0],u=e[1];return(0,s.useEffect)((function(){(0,i.rj)().then((function(t){u(t.results)})).catch((function(t){return console.log(t)}))}),[]),(0,o.jsx)("main",{children:(0,o.jsx)(c.Z,{children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{children:"Trending today"}),null===n?(0,o.jsx)("p",{children:"Loading..."}):(0,o.jsx)(a.Z,{movies:n})]})})})}},358:function(t,e,n){n.d(e,{Pg:function(){return f},Wd:function(){return v},Wf:function(){return p},rj:function(){return o},tx:function(){return m}});var r=n(165),c=n(861),a=n(44),s="006535a90e42ebf59916948f18019782",i="https://api.themoviedb.org/3";function o(){return u.apply(this,arguments)}function u(){return(u=(0,c.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(s));case 3:return e=t.sent,t.next=6,e.data;case 6:return n=t.sent,t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.response.data.status_message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t){return l.apply(this,arguments)}function l(){return(l=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e));case 3:return n=t.sent,t.next=6,n.data;case 6:return c=t.sent,t.abrupt("return",c);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.response.data.status_message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("".concat(i,"/movie/").concat(e,"?api_key=").concat(s));case 3:return n=t.sent,t.next=6,n.data;case 6:return c=t.sent,t.abrupt("return",c);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.response.data.status_message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(s));case 3:return n=t.sent,t.next=6,n.data;case 6:return c=t.sent,t.abrupt("return",c);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.response.data.status_message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function m(t){return _.apply(this,arguments)}function _(){return(_=(0,c.Z)((0,r.Z)().mark((function t(e){var n,c;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.Z.get("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 3:return n=t.sent,t.next=6,n.data;case 6:return c=t.sent,t.abrupt("return",c);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.response.data.status_message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=765.f6684a11.chunk.js.map