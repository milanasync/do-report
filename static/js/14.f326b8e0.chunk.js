(this["webpackJsonpdo-report"]=this["webpackJsonpdo-report"]||[]).push([[14],{102:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(0),i=(n(9),n(13)),s=n(31),c=n(174),l=n(93),u=o.forwardRef((function(e,t){var n=e.children,s=e.classes,u=e.className,d=e.disableTypography,p=void 0!==d&&d,f=e.inset,m=void 0!==f&&f,b=e.primary,h=e.primaryTypographyProps,g=e.secondary,v=e.secondaryTypographyProps,y=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),x=o.useContext(l.a).dense,E=null!=b?b:n;null==E||E.type===c.a||p||(E=o.createElement(c.a,Object(a.a)({variant:x?"body2":"body1",className:s.primary,component:"span",display:"block"},h),E));var w=g;return null==w||w.type===c.a||p||(w=o.createElement(c.a,Object(a.a)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},v),w)),o.createElement("div",Object(a.a)({className:Object(i.a)(s.root,u,x&&s.dense,m&&s.inset,E&&w&&s.multiline),ref:t},y),E,w)}));t.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(u)},186:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n.n(a),o=n(32),i=n(14),s=n(0),c=n.n(s),l=n(2),u=n(180),d=n(97),p=n(102),f=n(98),m=n(81),b=n(79);t.default=Object(l.f)(Object(m.a)((function(e){var t=c.a.useContext(b.b),n=c.a.useState([]),a=Object(i.a)(n,2),s=a[0],l=a[1];c.a.useEffect((function(){e.setShowLoading(!0),t.setTitle("House List"),m()}),[]);var m=function(){var t=Object(o.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.b();case 2:n=t.sent,l(n),e.setShowLoading(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,s.map((function(t){return c.a.createElement(d.a,{button:!0,onClick:function(){return e.history.push("/profile")}},c.a.createElement(p.a,{primary:t.name}))}))))})))},79:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),o=r.a.createContext({title:"",subTitle:"",extra:[],onRightIconClick:function(e){return null},setTitle:function(e){return null},setOnRightIconClick:function(e){return null},setExtra:function(e){return null}}),i=r.a.createContext({footerLinks:[],showBottomTabBar:!1,setShowBottomTabBar:function(){return null},selectedIndex:0,setSelectedIndex:function(){return null}})},81:function(e,t,n){"use strict";var a=n(85),r=n(86),o=n(89),i=n(88),s=n(0),c=n.n(s),l=n(178),u=n(179),d=n(79),p=n(167),f=n(168),m=n(170),b=n(171),h=n(174),g=n(172),v=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),y=function(e){console.log({headerProps:e});var t=v();return c.a.createElement(d.b.Consumer,null,(function(n){return c.a.createElement("div",{className:t.root},c.a.createElement(f.a,{position:"static"},c.a.createElement(m.a,null,c.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return"function"===typeof e.history.goBack&&e.history.goBack()}},c.a.createElement(g.a,null)),c.a.createElement(h.a,{variant:"h6",className:t.title},n.title),n.extra)))}))},x=n(175),E=n(176),w=Object(p.a)({root:{left:0,right:0,bottom:0,position:"absolute"}}),C=function(){var e=w();return c.a.createElement(d.a.Consumer,null,(function(t){return t.showBottomTabBar?c.a.createElement(x.a,{value:t.selectedIndex,onChange:function(e,n){t.setSelectedIndex(n)},showLabels:!0,className:e.root},t.footerLinks.map((function(e){return c.a.createElement(E.a,{label:e.label,icon:e.icon})}))):null}))},O=n(177);t.a=function(e){return function(t){Object(o.a)(s,t);var n=Object(i.a)(s);function s(e){var t;return Object(a.a)(this,s),(t=n.call(this,e)).setShowLoading=function(e){t.setState({showLoading:e})},t.setTitle=function(e){t.setState({title:e})},t.setExtra=function(e){return t.setState({extra:e})},t.setOnRightIconClick=function(e){return t.setState({onRightIconClick:e})},t.setSelectedIndex=function(e){t.setState({selectedIndex:e})},t.setShowBottomTabBar=function(e){t.setState({showBottomTabBar:e})},t.state={title:"Do Report",subTitle:"",onRightIconClick:function(){},extra:[],selectedIndex:0,showBottomTabBar:!1,showLoading:!1},t}return Object(r.a)(s,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.b.Provider,{value:{subTitle:this.state.subTitle,title:this.state.title,extra:this.state.extra,onRightIconClick:this.state.onRightIconClick,setOnRightIconClick:this.setOnRightIconClick,setTitle:this.setTitle,setExtra:this.setExtra}},c.a.createElement(d.a.Provider,{value:{footerLinks:[{path:"/profile",label:"Profile",icon:c.a.createElement(O.a,null)}],selectedIndex:this.state.selectedIndex,showBottomTabBar:this.state.showBottomTabBar,setSelectedIndex:this.setSelectedIndex,setShowBottomTabBar:this.setShowBottomTabBar}},c.a.createElement(y,this.props),c.a.createElement("main",null,this.state.showLoading&&c.a.createElement(l.a,{style:{display:"flex"},alignContent:"center",justify:"center"},c.a.createElement(u.a,null)),c.a.createElement(l.a,null,c.a.createElement(e,Object.assign({},this.props,{setShowLoading:this.setShowLoading})))),c.a.createElement(C,null))))}}]),s}(c.a.Component)}},83:function(e,t,n){"use strict";var a=n(94),r=n.n(a).a.create({baseURL:"http://laravelapiplay.xyz/do-report/api/"});r.interceptors.response.use((function(e){return e.data.data}),(function(e){return Promise.reject(e)})),t.a=r},97:function(e,t,n){"use strict";var a=n(1),r=n(3),o=n(0),i=(n(9),n(13)),s=n(31),c=n(202),l=n(96),u=n(87),d=n(93),p=n(33),f="undefined"===typeof window?o.useEffect:o.useLayoutEffect,m=o.forwardRef((function(e,t){var n=e.alignItems,s=void 0===n?"center":n,m=e.autoFocus,b=void 0!==m&&m,h=e.button,g=void 0!==h&&h,v=e.children,y=e.classes,x=e.className,E=e.component,w=e.ContainerComponent,C=void 0===w?"li":w,O=e.ContainerProps,j=(O=void 0===O?{}:O).className,k=Object(r.a)(O,["className"]),I=e.dense,T=void 0!==I&&I,B=e.disabled,S=void 0!==B&&B,L=e.disableGutters,N=void 0!==L&&L,R=e.divider,P=void 0!==R&&R,F=e.focusVisibleClassName,V=e.selected,A=void 0!==V&&V,D=Object(r.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),G=o.useContext(d.a),$={dense:T||G.dense||!1,alignItems:s},M=o.useRef(null);f((function(){b&&M.current&&M.current.focus()}),[b]);var z=o.Children.toArray(v),J=z.length&&Object(l.a)(z[z.length-1],["ListItemSecondaryAction"]),H=o.useCallback((function(e){M.current=p.findDOMNode(e)}),[]),U=Object(u.a)(H,t),W=Object(a.a)({className:Object(i.a)(y.root,x,$.dense&&y.dense,!N&&y.gutters,P&&y.divider,S&&y.disabled,g&&y.button,"center"!==s&&y.alignItemsFlexStart,J&&y.secondaryAction,A&&y.selected),disabled:S},D),q=E||"li";return g&&(W.component=E||"div",W.focusVisibleClassName=Object(i.a)(y.focusVisible,F),q=c.a),J?(q=W.component||E?q:"div","li"===C&&("li"===q?q="div":"li"===W.component&&(W.component="div")),o.createElement(d.a.Provider,{value:$},o.createElement(C,Object(a.a)({className:Object(i.a)(y.container,j),ref:U},k),o.createElement(q,W,z),z.pop()))):o.createElement(d.a.Provider,{value:$},o.createElement(q,Object(a.a)({ref:U},W),z))}));t.a=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(m)},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u}));var a=n(27),r=n.n(a),o=n(32),i=n(83),s=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("houses");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("houses/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("houses",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(o.a)(r.a.mark((function e(t,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.put("houses/".concat(t),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=14.f326b8e0.chunk.js.map