(this["webpackJsonpvk-app"]=this["webpackJsonpvk-app"]||[]).push([[0],{154:function(e,t,a){e.exports=a(242)},242:function(e,t,a){"use strict";a.r(t);a(155),a(181),a(183),a(184),a(186),a(187),a(188),a(189),a(190),a(191),a(192),a(193),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223);var n=a(0),s=a.n(n),o=a(81),l=a.n(o),c=a(23),i=a.n(c),r=a(82),u=a(83),m=a(37),p=a(92),d=a(91),h=(a(231),a(10)),E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).closePopout=n.closePopout.bind(Object(m.a)(n)),n.SendMessage=n.SendMessage.bind(Object(m.a)(n)),i.a.send("VKWebAppInit",{}),i.a.subscribe((function(e){var t=e.detail,a=t.type,s=t.data;if("VKWebAppUpdateConfig"===a){var o=document.createAttribute("scheme");o.value=s.scheme?s.scheme:"client_light",document.body.attributes.setNamedItem(o)}else"VKWebAppGetUserInfoResult"===a?(console.log("Get usr data"),n.setState({user:s})):console.log(a,s)})),i.a.send("VKWebAppGetUserInfo",{}),n.state={activeView:"Home",popout:null,user:{},messageToAdmin:null},n}return Object(u.a)(a,[{key:"SendMessage",value:function(e){console.log(e)}},{key:"go",value:function(e){this.setState({activeView:e})}},{key:"openAlert",value:function(e){var t=this;"SendMessage"===e?this.setState({popout:s.a.createElement(h.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",autoclose:!0,action:function(){t.SendMessage("dfdfdf")}}],onClose:this.closePopout},s.a.createElement("h2",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0430\u0434\u043c\u0438\u043d\u0443"),s.a.createElement("p",null,"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0430\u0434\u043c\u0438\u043d\u0438\u043c\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0443:"),s.a.createElement(h.f,null,this.state.messageToAdmin))}):(e="DelAllAboutUser")&&this.setState({popout:s.a.createElement(h.a,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",autoclose:!0,mode:"destructive",action:function(){t.SendMessage("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435")}}],onClose:this.closePopout},s.a.createElement("h2",null,"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),s.a.createElement("p",null,"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435? \u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0435 \u0431\u0443\u0434\u0443\u0442"))})}},{key:"closePopout",value:function(){this.setState({popout:null})}},{key:"render",value:function(){var e=this;return s.a.createElement(h.l,{activeView:this.state.activeView},s.a.createElement(h.n,{popout:this.state.popout,activePanel:"Home",id:"Home"},s.a.createElement(h.i,{id:"Home"},s.a.createElement(h.j,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u041c\u0410\u0418"),s.a.createElement(h.h,null,s.a.createElement(h.d,{before:this.state.user.photo_200?s.a.createElement(h.b,{src:this.state.user.photo_200}):null,description:this.state.user.city&&this.state.user.city.title?this.state.user.city.title:""},"\u0414\u0440\u0430\u0442\u0443\u0442\u0438, ","".concat(this.state.user.first_name," ").concat(this.state.user.last_name))),s.a.createElement(h.h,null,s.a.createElement(h.e,null,"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u0447\u043a\u0438"),s.a.createElement(h.e,{onClick:function(){return e.go("Message")}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0434\u043c\u0435\u043d\u0443")),s.a.createElement(h.h,null,s.a.createElement(h.e,{mode:"danger",onClick:function(){return e.openAlert("DelAllAboutUser")}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435 \u043f\u0440\u043e \u043c\u0435\u043d\u044f")))),s.a.createElement(h.n,{popout:this.state.popout,activePanel:"Message",id:"Message"},s.a.createElement(h.i,{id:"Message"},s.a.createElement(h.j,{left:s.a.createElement(h.k,{onClick:function(){return e.go("Home")}})},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0434\u043c\u0435\u043d\u0443"),s.a.createElement(h.h,null,s.a.createElement(h.g,null,s.a.createElement(h.m,{top:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",value:this.state.messageToAdmin,placeholder:"\u041e\u0434\u043c\u0435\u043d, \u0432\u0441\u0435 \u043f\u043b\u043e\u0445\u043e, \u0443\u0434\u0430\u043b\u0438\u0441\u044c \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430",onChange:function(t){return e.setState({messageToAdmin:t.target.value})}}),s.a.createElement(h.c,{size:"xl",mode:"commerce",onClick:function(){return e.openAlert("SendMessage")}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))))}}]),a}(s.a.Component);i.a.send("VKWebAppInit"),l.a.render(s.a.createElement(E,null),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.448037d8.chunk.js.map