(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,a){e.exports=a(280)},105:function(e,t,a){},106:function(e,t,a){},280:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),o=a.n(i),l=(a(105),a(2)),c=a(3),s=a(5),m=a(4),u=a(6),p=(a(106),a(107),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={title:a.title,description:a.description,name:a.name},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"headImage"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,this.props.name,"'s"),r.a.createElement("h1",{className:"display-3"},this.props.title),r.a.createElement("p",{className:"lead"},this.props.description)))}}]),t}(r.a.Component)),h=a(51),d=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return JSON.parse(localStorage.getItem(this.props.ListItem)).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{id:"itemTitle"},e.title[0]),r.a.createElement("td",{id:"itemDesc"},"With ",e.description[1]," "),r.a.createElement("td",null,"$",e.price))}))}}]),t}(r.a.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{id:"#menu",className:"table table-striped table-bordered table-dark mx-auto"},r.a.createElement(d,{ListItem:this.props.MealName})))}}]),t}(r.a.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.ChangeState.meals.map((function(e,t){return r.a.createElement(h.Tab,{label:e,key:t},r.a.createElement(b,{MealName:e,key:t}))}));return r.a.createElement(h.Tabs,null,e)}}]),t}(r.a.Component),f=(a(247),a(248),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.ListItems.map((function(e,t){return r.a.createElement("a",{key:t,target:e.target,className:"nav-item nav-link",href:e.URL},e.name," ")}))}}]),t}(n.Component)),g=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",id:"NavBar"},r.a.createElement("button",{className:"navbar-toggler mx-auto",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement(f,{ListItems:this.props.NavbarItems})))))}}]),t}(n.Component),E=a(22),j={width:"100vw",height:"40vh"},O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E.Map,{google:this.props.google,zoom:16,style:j,initialCenter:{lat:38.042346,lng:-84.492603}},r.a.createElement(E.Marker,{position:{lat:38.042346,lng:-84.492603},onClick:this.onMarkerClick,name:"Will's Sub-Standard"}),r.a.createElement(E.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},r.a.createElement("div",null,r.a.createElement("h2",null," ",this.state.selectedPlace.name)))),r.a.createElement("h2",null,"348 E. Main St."))}}]),t}(r.a.Component),k=Object(E.GoogleApiWrapper)({apiKey:"AIzaSyCzoDBNFx-EuHZlfibFPP8-uMePFe1AKWU"})(O),y=a(99),S=a.n(y),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={meals:["Breakfast","Lunch","Dinner","Sides","Dessert"],name:"Will"},a.Navbar_Items=[{name:"Menu",URL:"#menu",target:"_SELF"},{name:"Map",URL:"#map",target:"_SELF"},{name:"Contact",URL:"#contact",target:"_SELF"}],a.TimeTable=[{day:"Mon - Wed",hours:"Noon - 10pm"},{day:"Thurs - Sat",hours:"Noon - 12am"},{day:"Sun",hours:"1pm - 8pm"}],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.apiPull(),this.setState({openMeal:"Breakfast"})}},{key:"apiPull",value:function(){var e=this;localStorage.getItem("Breakfast")||(console.log("no data"),this.state.meals.map((function(t){console.log(t),S.a.get("https://entree-f18.herokuapp.com/v1/menu/12").then((function(a){var n=a.data.menu_items.map((function(e){return{price:(e.description.charCodeAt(0)-e.description.charCodeAt(8)/2).toFixed(2),title:e.description.split(" with"),description:e.description.split("with ")}}));localStorage.setItem(t,JSON.stringify(n)),e.setState({meal:"Breakfast"})}))})))}},{key:"render",value:function(){return localStorage.length>0?r.a.createElement("div",{className:"App"},r.a.createElement(g,{NavbarItems:this.Navbar_Items}),r.a.createElement(p,{title:"Sub-Standard",description:"The standard in sub sammichs",name:this.state.name}),r.a.createElement(v,{ChangeState:this.state}),r.a.createElement("h2",{id:"contact"},"348 E. Main. St"),r.a.createElement("h3",null,r.a.createElement("a",{href:"tel: 555-555-5555"},"555-555-5555")),r.a.createElement("section",{id:"map"},r.a.createElement(k,null))):r.a.createElement("div",null,"Loading")}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[100,1,2]]]);
//# sourceMappingURL=main.7e542173.chunk.js.map