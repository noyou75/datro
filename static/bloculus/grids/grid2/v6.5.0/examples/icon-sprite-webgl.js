(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{298:function(e,t,a){"use strict";a.r(t);var n=a(16),r=a(3),i=a(25),o=a(5),s=a(2),l=a(173),p=a(27),c=a(10),d=a(4),u=new r.a({layers:[new o.a({source:new p.a({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",tileSize:512})})],target:document.getElementById("map"),view:new s.a({center:[0,4e6],zoom:2})}),g=new c.a({features:[],attributions:"National UFO Reporting Center"}),h={variables:{filterShape:"all"},filter:["case",["!=",["var","filterShape"],"all"],["==",["get","shape"],["var","filterShape"]],!0],symbol:{symbolType:"image",src:"data/ufo_shapes.png",size:16,color:["interpolate",["linear"],["get","year"],1950,[255,160,110],2013,[180,255,200]],rotateWithView:!1,offset:[0,0],textureCoord:["match",["get","shape"],"light",[0,0,.25,.5],"sphere",[.25,0,.5,.5],"circle",[.25,0,.5,.5],"disc",[.5,0,.75,.5],"oval",[.5,0,.75,.5],"triangle",[.75,0,1,.5],"fireball",[0,.5,.25,1],[.75,.5,1,1]]}},f={all:0},w=document.getElementById("shape-filter");w.addEventListener("input",(function(){h.variables.filterShape=w.options[w.selectedIndex].value,u.render()}));var m=new XMLHttpRequest;m.open("GET","data/csv/ufo_sighting_data.csv"),m.onload=function(){for(var e,t=m.responseText,a=[],r=t.indexOf("\n")+1;-1!=(e=t.indexOf("\n",r));){var o=t.substr(r,e-r).split(",");r=e+1;var s=Object(d.g)([parseFloat(o[5]),parseFloat(o[4])]);if(!isNaN(s[0])&&!isNaN(s[1])){var l=o[2];f[l]=(f[l]?f[l]:0)+1,f.all++,a.push(new n.a({datetime:o[0],year:parseInt(/[0-9]{4}/.exec(o[0])[0]),shape:l,duration:o[3],geometry:new i.a(s)}))}}g.addFeatures(a),Object.keys(f).sort((function(e,t){return f[t]-f[e]})).forEach((function(e){var t=document.createElement("option");t.text=e+" ("+f[e]+" sightings)",t.value=e,w.appendChild(t)}))},m.send(),u.addLayer(new l.a({source:g,style:h}));var v=document.getElementById("info");u.on("pointermove",(function(e){if(!u.getView().getInteracting()&&!u.getView().getAnimating()){var t=e.pixel;v.innerText="",u.forEachFeatureAtPixel(t,(function(e){var t=e.get("datetime"),a=e.get("duration"),n=e.get("shape");v.innerText="On "+t+", lasted "+a+' seconds and had a "'+n+'" shape.'}))}}))}},[[298,0]]]);
//# sourceMappingURL=icon-sprite-webgl.js.map