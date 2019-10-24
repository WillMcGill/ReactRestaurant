(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(94),c=a.n(i),s=(a(101),a(2)),o=a(3),l=a(5),m=a(4),u=a(6),p=(a(102),a(103),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={title:a.title,description:a.description,name:a.name},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid",id:"headImage"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,this.props.name,"'s"),r.a.createElement("h1",{className:"display-3"},this.props.title),r.a.createElement("p",{className:"lead"},this.props.description)))}}]),t}(r.a.Component)),d=a(45),h=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return JSON.parse(localStorage.getItem(this.props.ListItem)).map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{id:"itemTitle"},e.title[0]),r.a.createElement("td",{id:"itemDesc"},"With ",e.description[1]," "),r.a.createElement("td",null,"$",e.price))}))}}]),t}(r.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("table",{id:"#menu",className:"table table-striped table-bordered table-dark mx-auto"},r.a.createElement(h,{ListItem:this.props.MealName})))}}]),t}(r.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.ChangeState.meals.map((function(e,t){return r.a.createElement(d.Tab,{label:e,key:t},r.a.createElement(b,{MealName:e,key:t}))}));return r.a.createElement(d.Tabs,null,e)}}]),t}(r.a.Component),v=(a(244),a(245),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.ListItems.map((function(e,t){return r.a.createElement("a",{key:t,target:e.target,className:"nav-item nav-link",href:e.URL},e.name," ")}))}}]),t}(n.Component)),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",id:"NavBar"},r.a.createElement("button",{className:"navbar-toggler mx-auto",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement("ul",{className:"navbar-nav mx-auto"},r.a.createElement(v,{ListItems:this.props.NavbarItems})))))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center",id:"map"},r.a.createElement("h2",null," 348 East Main St.  Lexington, KY"),r.a.createElement("h3",null," ",r.a.createElement("a",{href:"tel:+1-859-555-5555"},"859-555-5555")),r.a.createElement("a",{href:"#map"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211413042586!2d-84.49473234940936!3d38.04215997961205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1571932395334!5m2!1sen!2sus",width:"320",height:"320",frameBorder:"0",s:!0})))}}]),t}(r.a.Component),E=a(95),O=a.n(E),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={meals:["Breakfast","Lunch","Dinner","Sides","Dessert"],name:"Will"},a.Navbar_Items=[{name:"Menu",URL:"#menu",target:"_SELF"},{name:"Map",URL:"#map",target:"_SELF"},{name:"Contact",URL:"#map",target:"_SELF"}],a.TimeTable=[{day:"Mon - Wed",hours:"Noon - 10pm"},{day:"Thurs - Sat",hours:"Noon - 12am"},{day:"Sun",hours:"1pm - 8pm"}],a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.apiPull(),this.setState({openMeal:"Breakfast"})}},{key:"apiPull",value:function(){var e=this;localStorage.getItem("Breakfast")||(console.log("no data"),this.state.meals.map((function(t){console.log(t),O.a.get("https://entree-f18.herokuapp.com/v1/menu/12").then((function(a){var n=a.data.menu_items.map((function(e){return{price:(e.description.charCodeAt(0)-e.description.charCodeAt(8)/2).toFixed(2),title:e.description.split(" with"),description:e.description.split("with ")}}));localStorage.setItem(t,JSON.stringify(n)),e.setState({meal:"Breakfast"})}))})))}},{key:"render",value:function(){return localStorage.length>0?r.a.createElement("div",{className:"App"},r.a.createElement(g,{NavbarItems:this.Navbar_Items}),r.a.createElement(p,{title:"Sub-Standard",description:"The standard in sub sammichs",name:this.state.name}),r.a.createElement(f,{ChangeState:this.state}),r.a.createElement(j,null)):r.a.createElement("div",null,"Loading")}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},96:function(e,t,a){e.exports=a(265)}},[[96,1,2]]]);
//# sourceMappingURL=main.a6237eb8.chunk.js.map