(this["webpackJsonpsimple-phone-catalog"]=this["webpackJsonpsimple-phone-catalog"]||[]).push([[0],{17:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),c=n.n(r),o=n(12),s=n(13),m=n(16),u=n(15),i=n(14),h=n.n(i),E=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={phones:[],show:!1,selectedPhone:{}},e.showModal=function(t){e.setState({show:!0,selectedPhone:t})},e.hideModal=function(){e.setState({show:!1})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("/phones").then((function(t){e.setState({phones:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state.phones;return l.a.createElement("div",null,l.a.createElement("h1",null,"Phone Catalog"),l.a.createElement(p,{show:this.state.show,handleClose:this.hideModal,phone:this.state.selectedPhone}),l.a.createElement("table",{className:"phones"},l.a.createElement("tbody",null,t.map((function(t){return l.a.createElement("tr",null,l.a.createElement("th",null,t.name),l.a.createElement("th",null,l.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.showModal(t)}},"Details")))})))))}}]),n}(l.a.Component),p=function(e){var t=e.handleClose,n=e.show,a=e.phone,r=n?"modal display-block":"modal display-none";return l.a.createElement("div",{className:r},l.a.createElement("section",{className:"modal-main"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-md-6"},l.a.createElement("p",null,l.a.createElement("strong",null,"Manufacturer:")," ",l.a.createElement("br",null),a.manufacturer),l.a.createElement("p",null,l.a.createElement("strong",null,"Description:")," ",l.a.createElement("br",null),a.description),l.a.createElement("p",null,l.a.createElement("strong",null,"Color:")," ",l.a.createElement("br",null),a.color),l.a.createElement("p",null,l.a.createElement("strong",null,"Price:")," ",l.a.createElement("br",null),a.price),l.a.createElement("p",null,l.a.createElement("strong",null,"Screen:")," ",l.a.createElement("br",null),a.screen),l.a.createElement("p",null,l.a.createElement("strong",null,"Processor:")," ",l.a.createElement("br",null),a.processor),l.a.createElement("p",null,l.a.createElement("strong",null,"Ram:"),l.a.createElement("br",null),a.ram)),l.a.createElement("div",{class:"col-md-3"},l.a.createElement("img",{src:"./images/"+a.imageFileName}))),l.a.createElement("button",{type:"button",class:"btn btn-danger",onClick:t},"close")))};c.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.68ea768d.chunk.js.map