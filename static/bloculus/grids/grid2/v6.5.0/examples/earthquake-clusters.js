(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{266:function(e,t,a){"use strict";a.r(t);var r,n=a(97),o=a(3),i=a(2),s=a(21),c=a(15),u=a(11),l=a(112),w=a(48),g=a(67),f=a(236),d=a(10),m=a(63),b=a(52),h=a(98),p=a(19),v=a(5),y=a(1),k=new s.a({color:"rgba(255, 153, 0, 0.8)"}),x=new c.a({color:"rgba(255, 204, 0, 0.2)",width:1}),j=new s.a({color:"#fff"}),O=new c.a({color:"rgba(0, 0, 0, 0.6)",width:3}),M=new s.a({color:"rgba(255, 255, 255, 0.01)"});function F(e){var t=e.get("name"),a=5+20*(parseFloat(t.substr(2))-5);return new u.c({geometry:e.getGeometry(),image:new l.a({radius1:a,radius2:3,points:5,angle:Math.PI,fill:k,stroke:x})})}var S,E=null;E=new p.a({source:new f.a({distance:40,source:new d.a({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new n.a({extractStyles:!1})})}),style:function(e,t){t!=S&&(!function(e){r=0;for(var t,a,n=E.getSource().getFeatures(),o=n.length-1;o>=0;--o){var i,s=(t=n[o]).get("features"),c=Object(y.k)(),u=void 0;for(u=0,i=s.length;u<i;++u)Object(y.r)(c,s[u].getGeometry().getExtent());r=Math.max(r,i),a=.25*(Object(y.F)(c)+Object(y.B)(c))/e,t.set("radius",a)}}(t),S=t);var a=e.get("features").length;return a>1?new u.c({image:new w.a({radius:e.get("radius"),fill:new s.a({color:[255,153,0,Math.min(.8,.4+a/r)]})}),text:new g.a({text:a.toString(),fill:j,stroke:O})}):F(e.get("features")[0])}});var G=new v.a({source:new m.a({layer:"toner"})});new o.a({layers:[G,E],interactions:Object(b.a)().extend([new h.a({condition:function(e){return"pointermove"==e.type||"singleclick"==e.type},style:function(e){for(var t,a=[new u.c({image:new w.a({radius:e.get("radius"),fill:M})})],r=e.get("features"),n=r.length-1;n>=0;--n)t=r[n],a.push(F(t));return a}})]),target:"map",view:new i.a({center:[0,0],zoom:2})})}},[[266,0]]]);
//# sourceMappingURL=earthquake-clusters.js.map