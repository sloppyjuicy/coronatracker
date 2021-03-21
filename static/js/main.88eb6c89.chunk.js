(this["webpackJsonpcorona-tracker"]=this["webpackJsonpcorona-tracker"]||[]).push([[0],{196:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),s=n.n(c),i=(n(92),n(11)),o=n.n(i),u=n(12),l=n(23),d=n(223),j=n(230),h=n(231),v=n(4),f=function(e){return Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("h1",{children:"COVID-19 Tracker"}),Object(v.jsx)(d.a,{className:"dropdown",children:Object(v.jsxs)(j.a,{variant:"outlined",onChange:e.onCountryChange,value:e.country,children:[Object(v.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),e.countries.map((function(e){return Object(v.jsx)(h.a,{value:e.value,children:e.name},e.name)}))]})})]})},p=n(227),b=n(228),x=n(229),O=function(e){return Object(v.jsx)("div",{children:Object(v.jsx)(p.a,{className:"infobox",children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)(x.a,{className:"title",color:"textSecondary",children:e.title}),Object(v.jsxs)("h2",{className:"cases",children:["+",e.cases]}),Object(v.jsxs)(x.a,{className:"total",color:"textSecondary",children:[e.total," Total"]})]})})})},m=function(){return Object(v.jsx)("div",{className:"map",children:Object(v.jsx)("h1",{children:"Map (Coming soon)"})})},y=function(e){return Object(v.jsx)("div",{className:"table",children:e.countries.map((function(e){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.country}),Object(v.jsx)("td",{children:Object(v.jsx)("strong",{children:e.cases})})]},e.country)}))})},w=n(82),g=n(59),C=n.n(g),k=n(83),P=function(e){return Object(k.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},N=function(e,t){var n,a=[];for(var r in e.cases){if(n){var c={x:r,y:e[t][r]-n};a.push(c)}n=e[t][r]}return a},M=function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t),e.next=3,F(a);case 3:r=e.sent,n(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(o.a.mark((function e(t,n,a){var r,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://disease.sh/v3/covid-19/historical/all?lastdays=".concat(t),e.next=3,F(r);case 3:c=e.sent,s=N(c,a),n(s);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var n=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));t(n)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,a=n.json(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return C()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return C()(e).format("0a")}}}]}},T=function(e){var t=r.a.useState(),n=Object(l.a)(t,2),a=n[0],c=n[1];return r.a.useEffect((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(120,c,"cases");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(v.jsx)("div",{children:Object(v.jsx)(w.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:a}]},options:I})})},L=(n(196),{updated:1616084947223,country:"Loading... Please wait",countryInfo:{_id:1,iso2:"FI",iso3:"FIN",lat:64,long:26,flag:"https://disease.sh/assets/img/flags/fi.png"},cases:1,todayCases:1,deaths:1,todayDeaths:1,recovered:1,todayRecovered:1,active:1,critical:1,casesPerOneMillion:1,deathsPerOneMillion:1,tests:1,testsPerOneMillion:1,population:1,continent:"Europe",oneCasePerPeople:1,oneDeathPerPeople:1,oneTestPerPeople:1,activePerOneMillion:1.11,recoveredPerOneMillion:1.01,criticalPerOneMillion:1.01});var E=function(){var e=r.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1],c=r.a.useState("worldwide"),s=Object(l.a)(c,2),i=s[0],d=s[1],j=r.a.useState(),h=Object(l.a)(j,2),x=h[0],w=h[1],g=r.a.useState([L]),C=Object(l.a)(g,2),k=C[0],N=C[1];r.a.useEffect((function(){(function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("https://disease.sh/v3/covid-19/all");case 2:return t=e.sent,e.next=5,F("https://disease.sh/v3/covid-19/countries");case 5:n=e.sent,r=P(n),w(t),N(r),D(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var S=function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,d(n),M(n,w);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"app",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsx)(f,{countries:n,country:i,onCountryChange:S}),Object(v.jsxs)("div",{className:"infoboxes",children:[Object(v.jsx)(O,{title:"Coronavirus cases",total:null===x||void 0===x?void 0:x.cases,cases:null===x||void 0===x?void 0:x.todayCases}),Object(v.jsx)(O,{title:"Recovered",total:null===x||void 0===x?void 0:x.recovered,cases:null===x||void 0===x?void 0:x.todayRecovered}),Object(v.jsx)(O,{title:"Deaths",total:null===x||void 0===x?void 0:x.deaths,cases:null===x||void 0===x?void 0:x.todayDeaths})]}),Object(v.jsx)(m,{})]}),Object(v.jsx)("div",{className:"right",children:Object(v.jsx)(p.a,{children:Object(v.jsxs)(b.a,{children:[Object(v.jsx)("h3",{children:"Total Cases by Country"}),Object(v.jsx)(y,{countries:k}),Object(v.jsx)("h3",{children:"Worldwide new cases"}),Object(v.jsx)(T,{type:"cases"})]})})})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,233)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),R()},92:function(e,t,n){}},[[197,1,2]]]);
//# sourceMappingURL=main.88eb6c89.chunk.js.map