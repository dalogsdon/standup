(window.webpackJsonp=window.webpackJsonp||[]).push([["cc0a"],{"2HsL":function(t,e,a){"use strict";a.r(e);var n=a("0iUn"),i=a("sLSF"),c=a("MI3g"),s=a("a7VT"),r=a("AT/M"),o=a("Tit0"),l=a("vYYK"),u=a("q1tI"),h=a.n(u),d=a("heAk");a("IoH2");var p=function(t){function e(){var t,a;Object(n.default)(this,e);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return a=Object(c.default)(this,(t=Object(s.default)(e)).call.apply(t,[this].concat(o))),Object(l.a)(Object(r.default)(a),"state",{highlight:0,names:d.a.getNames(),stopping:!1,winner:null}),Object(l.a)(Object(r.default)(a),"colCount",Math.ceil(Math.sqrt(a.state.names.length))),Object(l.a)(Object(r.default)(a),"declareWinner",function(){var t=a.state.names[a.state.highlight];d.a.say((t.spoken||t.value)+" is the winner!"),a.setState({winner:t})}),Object(l.a)(Object(r.default)(a),"pickName",function(t){t>400?a.declareWinner():window.setTimeout(function(){var e,n,i,c=a.state.highlight,s=[c-a.colCount,c-1,c+a.colCount,c+1],r=(e=s[Math.floor(Math.random()*s.length)],n=a.state.names.length,(i=e%n*(e<0?-1:1))<0?n-i:i),o=a.state.stopping?1.05*t:t;a.setState({highlight:r},function(){return a.pickName(o)})},t)}),Object(l.a)(Object(r.default)(a),"stop",function(){a.setState({stopping:!0})}),a}return Object(o.default)(e,t),Object(i.default)(e,[{key:"componentDidMount",value:function(){d.a.loadVoices(),this.pickName(50)}},{key:"render",value:function(){var t=this.state,e=t.names,a=t.highlight,n=t.stopping,i=t.winner,c={width:100/this.colCount+"%"},s="Stop!";!i&&n?s="Stopping!":i&&(s=i.value+" is the winner!");var r="grid ".concat(n?"stopping":"");return h.a.createElement("div",{className:r},e.map(function(t,e){return h.a.createElement("div",{className:"name-wrapper",key:t.value,style:c},h.a.createElement("div",{className:"name","data-highlight":e===a,"data-winner":e===a&&!!i},t.value))}),h.a.createElement("div",{className:"stop-btn-wrapper"},h.a.createElement("div",{class:"stop-btn",onClick:this.stop},s)))}}]),e}(h.a.Component);e.default=p},QcAE:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/grid",function(){var t=a("2HsL");return{page:t.default||t}}])},vYYK:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a("hfKm"),i=a.n(n);function c(t,e,a){return e in t?i()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}}},[["QcAE","5d41","9da1","ad9d"]]]);