(this.webpackJsonpdiscography=this.webpackJsonpdiscography||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t(29)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(7),i=t.n(c),s=t(1);t(17),t(18);var l=function(e){var a=e.label,t=e.isLoading;return r.a.createElement("div",{className:"artist-list-title"},r.a.createElement("h2",null,a,!0===t&&r.a.createElement("span",{className:"loading"}," Loading...")))};var u=function(){var e=0;return function(a,t){clearTimeout(e),e=setTimeout(a,t)}}(),o=function(e){var a=e.searchValue,t=e.cbChangeSearchValue,n=e.cbChange;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"artist-search-box"},"Type an artist name "),r.a.createElement("input",{id:"artist-search-box",type:"text",className:"artist-search-box",size:35,value:a,onChange:function(e){t(e.target.value)},onKeyUp:function(){u((function(){n(a)}),400)}}))},m=(t(19),t(2));var h=function(e){var a=e.artist;return r.a.createElement("li",{className:"artist"},r.a.createElement(m.a,{to:"/discography/artist/"+a.id,state:{artistName:a.name}},r.a.createElement("span",{className:"artis-name"},a.name)),a.disambiguation&&r.a.createElement("span",{className:"artist-disambiguation"}," ","(",a.disambiguation,")"))};var d=function(e){var a=e.MusicBrainzApi,t=e.searchValue,c=e.cbChangeSearchValue,i=Object(n.useState)([]),u=Object(s.a)(i,2),m=u[0],d=u[1],f=Object(n.useState)(!1),p=Object(s.a)(f,2),v=p[0],b=p[1],E=function(e){b(!0);var t=new a,n=encodeURI(e),r="artist/?query=artist:%22".concat(n,"%22");t.query(r).then((function(e){return e.json()})).then((function(e){d(e.artists||[]),b(!1)}))};return Object(n.useEffect)((function(){t&&E(t)}),[]),r.a.createElement("div",{className:"artist-list"},r.a.createElement(l,{label:"Artists",isLoading:v}),r.a.createElement(o,{searchValue:t,cbChangeSearchValue:c,cbChange:E}),r.a.createElement("ul",null,m.map((function(e){return r.a.createElement(h,{key:e.id,artist:e})}))))},f=t(9);t(26),t(27);var p=function(e){var a=e.year,t=e.label;return r.a.createElement("div",{className:"album-title"},r.a.createElement("span",{className:"album-title-label"},t),r.a.createElement("span",{className:"album-title-year"}," (",a,")"))};var v=function(e){var a=e.song;return r.a.createElement("div",{className:"song"},r.a.createElement("span",{className:""},a.number),r.a.createElement("span",null," ",a.title))};var b=function(e){var a=e.songList;return r.a.createElement("div",{className:"song-list"},a.map((function(e){return r.a.createElement(v,{key:e.id,song:e})})))};var E=function(e){var a=e.album;return r.a.createElement("div",{className:"album"},r.a.createElement(p,{label:a.title,year:a.year}),r.a.createElement(b,{songList:a.tracks}))};t(28);var g=function(e){var a=e.label;return r.a.createElement("div",{className:"album-list-title"},r.a.createElement("h2",null,a," ",r.a.createElement("span",{className:"back-button"},r.a.createElement(m.a,{to:"/discography/"},"Back"))))};function y(e){if(!e)return"";var a=e.split("-");return a.length>0?a[0]:""}var N=function(e){var a=e.id,t=e.MusicBrainzApi,c=e.location.state.artistName,i=Object(n.useState)([]),l=Object(s.a)(i,2),u=l[0],o=l[1];return Object(n.useEffect)((function(){var e=new t,n=encodeURI(a),r="release?artist=".concat(n,"&inc=recordings");e.query(r).then((function(e){return e.json()})).then((function(e){var a=function(e){var a=[],t=[];e.sort((function(e,a){return a.date?e.date&&e.date<=a.date?-1:1:-1}));var n,r=Object(f.a)(e);try{var c=function(){var e=n.value;return"Official"!==e.status||!0===t.includes(e.title)?"continue":(t.push(e.title),void e.media.forEach((function(t){var n={id:e.id,title:e.title,year:y(e.date),tracks:[]};t.tracks.forEach((function(e){n.tracks.push({id:e.id,title:e.title,duration:parseInt(e.length/1e3),number:e.position})})),a.push(n)})))};for(r.s();!(n=r.n()).done;)c()}catch(i){r.e(i)}finally{r.f()}return a}(e.releases);o(a||[])}))}),[a,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{label:c}),r.a.createElement("div",{className:"album-list"},u.map((function(e){return r.a.createElement(E,{key:e.id,album:e})}))))},j=t(10),k=t(11),O=function(){function e(){Object(j.a)(this,e)}return Object(k.a)(e,[{key:"query",value:function(e){var a=new Request("https://musicbrainz.org/ws/2/".concat(e,"&limit=100&fmt=json"),{method:"GET",headers:{"User-Agent":"Discography/0.0.0 (davidquintu@gmail.com)"}});return fetch(a)}}]),e}();var w=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Discography"),r.a.createElement("p",null,"Search for an artist and display its discography."),r.a.createElement("p",null,"This app is powered by the"," ",r.a.createElement("a",{href:"https://musicbrainz.org/"},"MusicBrainz")," API,"," ",r.a.createElement("a",{href:"https://reactjs.org"},"React")," and many other open source projects."),r.a.createElement(m.b,null,r.a.createElement(d,{path:"/discography/",MusicBrainzApi:O,searchValue:t,cbChangeSearchValue:c}),r.a.createElement(N,{path:"/discography/artist/:id",MusicBrainzApi:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.b4889486.chunk.js.map