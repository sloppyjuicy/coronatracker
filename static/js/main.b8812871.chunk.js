(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{52:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),s=n.n(r),o=(n(52),n(19)),i=n.n(o),u=n(25),l=n(36),j=n(87),d=n(94),h=n(95),f=n(6),b=function(e){var t=function(){var t=Object(u.a)(i.a.mark((function t(n){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=n.target.value,e.setCountry(c);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("h1",{children:"COVID-19 Tracker"}),Object(f.jsx)(j.a,{className:"dropdown",children:Object(f.jsxs)(d.a,{variant:"outlined",onChange:t,value:e.country,children:[Object(f.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),e.countries.map((function(e){return Object(f.jsx)(h.a,{value:e.value,children:e.name},e.name)}))]})})]})},x=n(91),v=n(92),O=n(93),p=function(e){return Object(f.jsx)("div",{children:Object(f.jsx)(x.a,{className:"infobox",children:Object(f.jsxs)(v.a,{children:[Object(f.jsx)(O.a,{className:"title",color:"textSecondary",children:e.title}),Object(f.jsx)("h2",{className:"cases",children:e.cases}),Object(f.jsxs)(O.a,{className:"total",color:"textSecondary",children:[e.total," Total"]})]})})})};n(60);var m=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=a.a.useState("worldwide"),s=Object(l.a)(r,2),o=s[0],j=s[1];return a.a.useEffect((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(b,{countries:n,country:o,setCountry:j}),Object(f.jsxs)("div",{className:"infoboxes",children:[Object(f.jsx)(p,{title:"Coronavirus cases",total:2e3,cases:2e3}),Object(f.jsx)(p,{title:"Recovered",total:2e3,cases:2e3}),Object(f.jsx)(p,{title:"Deaths",total:2e3,cases:2e3})]})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),w()}},[[61,1,2]]]);
//# sourceMappingURL=main.b8812871.chunk.js.map