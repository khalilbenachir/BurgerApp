(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom___HuxZP",BreadTop:"BurgerIngredient__BreadTop___10-cT",Seeds1:"BurgerIngredient__Seeds1___3xHtz",Seeds2:"BurgerIngredient__Seeds2___1cUso",Meat:"BurgerIngredient__Meat___13nAN",Cheese:"BurgerIngredient__Cheese___1FxeY",Salad:"BurgerIngredient__Salad___1iTJE",Bacon:"BurgerIngredient__Bacon___3vrAI"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer___21TuB",Open:"SideDrawer__Open___1pVYR",Close:"SideDrawer__Close___3Yv1l",Logo:"SideDrawer__Logo___3TkPv"}},function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl___1jYc3",Label:"BuildControl__Label___33Z-p",Less:"BuildControl__Less___377MJ",More:"BuildControl__More___28-hQ"}},function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar___2JJW-",Logo:"Toolbar__Logo___1efBD",DesktopOnly:"Toolbar__DesktopOnly___WADUd"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem___3ZTTZ",active:"NavigationItem__active___sh2Rq"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls___3_01f",OrderButton:"BuildControls__OrderButton___myBwT",enable:"BuildControls__enable___3jYIq"}},function(e,t,a){e.exports={Button:"Button__Button___QI7b2",Success:"Button__Success___2dHUt",Danger:"Button__Danger___2xnhN"}},,,function(e,t,a){e.exports={Content:"Layout__Content___LhJtv"}},function(e,t,a){e.exports=a.p+"static/media/burgerlogo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo__Logo___19WaN"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems____yd_d"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle___26to0"}},function(e,t,a){e.exports={BackDrop:"BackDrop__BackDrop___wZny4"}},function(e,t,a){e.exports={Burger:"Burger__Burger___3K4F-"}},function(e,t,a){e.exports={Modal:"Modal__Modal___32_-a"}},,function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(30),a(1)),i=a(2),s=a(4),u=a(3),d=a(5),_=function(e){return e.children},m=a(16),p=a.n(m),h=a(9),g=a.n(h),b=a(17),f=a.n(b),v=a(18),E=a.n(v),B=function(e){return r.a.createElement("div",{className:E.a.Logo},r.a.createElement("img",{src:f.a,alt:"myBurger"}))},w=a(19),k=a.n(w),y=a(11),O=a.n(y),C=function(e){return r.a.createElement("li",{className:O.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?O.a.active:null},e.children))},N=function(e){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(C,{link:"/",active:!0},"Burger Builder"),r.a.createElement(C,{link:"/"},"Checkout"))},j=a(20),S=a.n(j),D=function(e){return r.a.createElement("div",{className:S.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},I=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(D,{clicked:e.toggleDrawerClicked}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(B,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(N,null)))},T=a(7),x=a.n(T),L=a(21),H=a.n(L),M=function(e){return e.show?r.a.createElement("div",{className:H.a.BackDrop,onClick:e.clicked}):null},Y=function(e){var t=[x.a.SideDrawer,x.a.Close];return e.show&&(t=[x.a.SideDrawer,x.a.Open]),r.a.createElement(_,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:x.a.Logo},r.a.createElement(B,null)),r.a.createElement("nav",null,r.a.createElement(N,null))))},A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!0},a.cancelSideDrawer=function(){a.setState({showSideDrawer:!1})},a.SideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(I,{toggleDrawerClicked:this.SideDrawerToggleHandler}),r.a.createElement(Y,{open:this.state.showSideDrawer,closed:this.cancelSideDrawer}),r.a.createElement("main",{className:p.a.Content},this.props.children))}}]),t}(n.Component),J=a(10),W=a(24),Z=a(22),F=a.n(Z),P=a(6),U=a.n(P),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:U.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:U.a.BreadTop},r.a.createElement("div",{className:U.a.Seeds1}),r.a.createElement("div",{className:U.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:U.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:U.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:U.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:U.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),z=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(W.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(q,{key:a+t,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),r.a.createElement("div",{className:F.a.Burger},r.a.createElement(q,{type:"bread-top"}),t,r.a.createElement(q,{type:"bread-bottom"}))},Q=a(8),R=a.n(Q),K=function(e){return r.a.createElement("div",{className:R.a.buildControl},r.a.createElement("div",{className:R.a.label},e.label),r.a.createElement("button",{className:R.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:R.a.More,onClick:e.added},"More"))},V=a(12),$=a.n(V),G=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],X=function(e){return r.a.createElement("div",{className:$.a.BuildControls},r.a.createElement("p",null,"Total Price : ",r.a.createElement("strong",null,e.price.toFixed(2))),G.map(function(t){return r.a.createElement(K,{key:t.label,label:t.label,added:function(){return e.addedIngredients(t.type)},removed:function(){return e.removedIngredients(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:$.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"Order Now"))},ee=a(23),te=a.n(ee),ae=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.modalclosed}),r.a.createElement("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),ne=a(13),re=a.n(ne),le=function(e){return r.a.createElement("button",{className:[re.a.Button,re.a[e.btntype]].join(" "),onClick:e.clicked},e.children)},ce=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t)," : ",e.props.ingredients[t])});return r.a.createElement(_,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delecious burger with the following ingredients :"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price : ",this.props.price)),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(le,{btntype:"Danger",clicked:this.props.cancel},"Cancel"),r.a.createElement(le,{btntype:"Success",clicked:this.props.continue},"Continue"))}}]),t}(n.Component),oe={salad:.5,bacon:.4,cheese:1.4,meat:1.5},ie=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalprice:4,purchasable:!1,purchasing:!1},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCanselHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("you continue")},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(J.a)({},a.state.ingredients);n[e]=t;var r=oe[e],l=a.state.totalprice+r;a.setState({totalprice:l,ingredients:n}),a.updatepurchasable(n)},a.removingIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(J.a)({},a.state.ingredients);r[e]=n;var l=oe[e],c=a.state.totalprice-l;a.setState({totalprice:c,ingredients:r}),a.updatepurchasable(r)}},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updatepurchasable",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(J.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(_,null,r.a.createElement(ae,{show:this.state.purchasing,modalclosed:this.purchaseCanselHandler},r.a.createElement(ce,{ingredients:this.state.ingredients,price:this.state.totalprice.toFixed(2),cancel:this.purchaseCanselHandler,continue:this.purchaseContinueHandler})),r.a.createElement(z,{ingredients:this.state.ingredients}),r.a.createElement(X,{addedIngredients:this.addIngredientHandler,removedIngredients:this.removingIngredientHandler,disabled:e,ordered:this.purchaseHandler,purchasable:this.state.purchasable,price:this.state.totalprice}))}}]),t}(n.Component),se=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A,null,r.a.createElement(ie,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[25,2,1]]]);
//# sourceMappingURL=main.30b02151.chunk.js.map