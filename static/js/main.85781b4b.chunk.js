(this["webpackJsonpvk-app"]=this["webpackJsonpvk-app"]||[]).push([[0],{152:function(e,t,a){e.exports=a(240)},240:function(e,t,a){"use strict";a.r(t);a(153),a(179),a(181),a(182),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(202),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221);var n=a(0),o=a.n(n),s=a(81),l=a.n(s),c=a(23),i=a.n(c),r=a(82),u=a(83),m=a(35),p=a(92),d=a(91),h=(a(229),a(7)),g=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).closePopout=n.closePopout.bind(Object(m.a)(n)),n.SendMessage=n.SendMessage.bind(Object(m.a)(n)),n.go=n.go.bind(Object(m.a)(n)),i.a.send("VKWebAppInit",{}),i.a.subscribe((function(e){var t=e.detail,a=t.type,o=t.data;if("VKWebAppUpdateConfig"===a){var s=document.createAttribute("scheme");s.value=o.scheme?o.scheme:"client_light",document.body.attributes.setNamedItem(s)}else"VKWebAppGetUserInfoResult"===a?(console.log("Get usr data"),n.setState({user:o})):console.log(a,o)})),i.a.send("VKWebAppGetUserInfo",{}),n.state={activeView:"Home",popout:null,user:{},messageToAdmin:null,userData:{group:"\u041c8\u041e-228\u0412-19",notification:!0}},n}return Object(u.a)(a,[{key:"SendMessage",value:function(e){console.log(e)}},{key:"go",value:function(e){this.setState({activeView:e})}},{key:"openAlert",value:function(e){var t=this;"SendMessage"===e?this.setState({popout:o.a.createElement(h.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",autoclose:!0,action:function(){t.SendMessage(t.state.messageToAdmin),t.setState({messageToAdmin:null}),t.go("Home"),t.openAlert("MessageOK")}}],onClose:this.closePopout},o.a.createElement("h2",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0430\u0434\u043c\u0438\u043d\u0443"),o.a.createElement("p",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0430\u0434\u043c\u0438\u043d\u0438\u043c\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443:"),o.a.createElement(h.f,null,this.state.messageToAdmin))}):"DelAllAboutUser"===e?this.setState({popout:o.a.createElement(h.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",autoclose:!0,mode:"destructive",action:function(){t.SendMessage("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435")}}],onClose:this.closePopout},o.a.createElement("h2",null,"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),o.a.createElement("p",null,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435? \u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0443\u0442"))}):"MessageOK"===e&&this.setState({popout:o.a.createElement(h.a,{actions:[{title:"\u0417\u0430\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e",autoclose:!0,action:function(){t.closePopout()}}],onClose:this.closePopout},o.a.createElement("h2",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"))})}},{key:"closePopout",value:function(){this.setState({popout:null})}},{key:"render",value:function(){var e=this;return o.a.createElement(h.n,{activeView:this.state.activeView},o.a.createElement(h.p,{popout:this.state.popout,activePanel:"Home",id:"Home"},o.a.createElement(h.j,{id:"Home"},o.a.createElement(h.k,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u041c\u0410\u0418"),o.a.createElement(h.h,null,o.a.createElement(h.d,{before:this.state.user.photo_200?o.a.createElement(h.b,{src:this.state.user.photo_200}):null,description:this.state.user.city&&this.state.user.city.title?this.state.user.city.title:""},"\u0414\u0440\u0430\u0442\u0443\u0442\u0438, ","".concat(this.state.user.first_name," ").concat(this.state.user.last_name))),o.a.createElement(h.h,null,o.a.createElement(h.e,{onClick:function(){return e.go("EditSettings")}},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u0447\u043a\u0438"),o.a.createElement(h.e,{onClick:function(){return e.go("Message")}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0434\u043c\u0435\u043d\u0443")),o.a.createElement(h.h,null,o.a.createElement(h.e,{mode:"danger",onClick:function(){return e.openAlert("DelAllAboutUser")}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u043e \u043c\u0435\u043d\u044f")))),o.a.createElement(h.p,{popout:this.state.popout,activePanel:"Message",id:"Message"},o.a.createElement(h.j,{id:"Message"},o.a.createElement(h.k,{left:o.a.createElement(h.l,{onClick:function(){return e.go("Home")}})},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0434\u043c\u0435\u043d\u0443"),o.a.createElement(h.h,null,o.a.createElement(h.g,null,o.a.createElement(h.o,{top:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",value:this.state.messageToAdmin,placeholder:"\u041e\u0434\u043c\u0435\u043d, \u0432\u0441\u0435 \u043f\u043b\u043e\u0445\u043e, \u0443\u0434\u0430\u043b\u0438\u0441\u044c \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430",onChange:function(t){return e.setState({messageToAdmin:t.target.value})}}),o.a.createElement(h.c,{size:"xl",mode:"commerce",onClick:function(){return e.openAlert("SendMessage")}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))),o.a.createElement(h.p,{popout:this.state.popout,activePanel:"EditSettings",id:"EditSettings"},o.a.createElement(h.j,{id:"EditSettings"},o.a.createElement(h.k,{left:o.a.createElement(h.l,{onClick:function(){return e.go("Home")}})},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a"),o.a.createElement(h.h,{title:"Functions"},o.a.createElement(h.g,null,o.a.createElement(h.i,{top:"\u0412\u0430\u0448\u0430 \u0433\u0440\u0443\u043f\u043f\u0430",placeholder:"\u041c7\u041e-100\u0421-20",value:this.state.userData.group}),o.a.createElement(h.m,{name:"type",checked:this.state.userData.notification},"\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f"))))))}}]),a}(o.a.Component);i.a.send("VKWebAppInit"),l.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.85781b4b.chunk.js.map