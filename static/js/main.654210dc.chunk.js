(window.webpackJsonpchores=window.webpackJsonpchores||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},20:function(e,t,a){},21:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),i=(a(20),a(10)),l=a(11),s=a(13),u=a(12),h=a(14),m=(a(21),a(2)),f=a.n(m),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={rotation:a.props.shift+a.getThisWeekNumber()},a.names=["Jason","Steve","Andrew","Steven","AJ"],a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getThisSunday",value:function(){for(var e=new Date;0!==e.getDay();)e=new Date(e.valueOf()-864e5);return e.getMonth()+1+"/"+e.getDate()}},{key:"getThisWeekNumber",value:function(){for(var e=new Date;0!==e.getDay();)e=new Date(e.valueOf()-864e5);var t=new Date(e.getFullYear(),0,4),a=1+Math.ceil((e-t)/864e5/7);return console.log(a),a}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,{bg:"light",text:"black",border:"info",className:"mx-auto",style:{"max-width":"26rem"}},o.a.createElement(f.a.Body,null,o.a.createElement(f.a.Title,null,this.names[this.state.rotation%5]),o.a.createElement(f.a.Subtitle,{className:"mb-2 text-muted"},"Chores for week of ",this.getThisSunday()),o.a.createElement(f.a.Text,null,this.props.chore))),o.a.createElement("br",null))}}]),t}(o.a.Component);a(28);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,{shift:0,chore:"Clean kitchen counter, coffee table, both sinks, thorough sweep of common area"}),o.a.createElement(v,{shift:1,chore:"Clean bathtub"}),o.a.createElement(v,{shift:2,chore:"Clean stovetop, microwave, and oven"}),o.a.createElement(v,{shift:3,chore:"Clean toilet"}),o.a.createElement(v,{shift:4,chore:"Nothing!"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.654210dc.chunk.js.map