(this["webpackJsonpsalt-and-satoshi"]=this["webpackJsonpsalt-and-satoshi"]||[]).push([[0],{360:function(e,t,n){},373:function(e,t){},375:function(e,t){},389:function(e,t){},390:function(e,t){},411:function(e,t){},413:function(e,t){},649:function(e,t){},651:function(e,t){},658:function(e,t){},659:function(e,t){},688:function(e,t){},718:function(e,t,n){"use strict";n.r(t);var a=n(12),i=n(4),r=n.n(i),s=n(92),o=n.n(s),c=(n(360),n(61)),l=n(738),d=n(5),u=n.n(d),p=n(62),f=n(51),h=n(315),b=n(316),y=n(317),m=n(319),j={eip1152contractAddress:"0xd07dc4262bcdbf85190c01c996b4c06a461d2430",minterAddress:"0x1efcb24f92daa1e04ba52e3d891beecee00c629d",firebaseConfig:{apiKey:"AIzaSyC8DwM9z-H9cSTCqHR4UGEvW86jL63sre0",projectId:"saltandsatoshi"},INFURA_JSON_RPC_API:{1:"https://mainnet.infura.io/v3/663207cc32894545b804fbc519d9fa2a",4:"https://rinkeby.infura.io/v3/663207cc32894545b804fbc519d9fa2a",42:"https://kovan.infura.io/v3/663207cc32894545b804fbc519d9fa2a"},SELLER_CONTRACT_ADDRESS:{42:"0xD837F0658c74191056f222b3aCf3995e75AA3703"},SALTY_CONTRACT_ADDRESS:{1:"0xf157b7ba35089c9b0f02c24bbe1e03855dbe5c1f",4:"0x400a31BA7E9D428040B20eaBDb329E54124f4013",42:"0x0532b555269d3a993ea1ea4184c3ef97f11c5e8f"},MIN_SALTY:n(33).a.from("69000000000000000000")},g=12e3,x=new h.a({supportedChainIds:[1,4,42]});new b.a({rpc:{1:j.INFURA_JSON_RPC_API[1]},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:g}),new y.a({chainId:1,url:j.INFURA_JSON_RPC_API[1],pollingInterval:g}),new m.a({chainId:1,url:j.INFURA_JSON_RPC_API[1],pollingInterval:g,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"});var v=n(8),O=n(9),w=n(14),T=n(13),S=function(e){Object(w.a)(n,e);var t=Object(T.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props.innerWidth||"200px",t=this.props.innerWidth||"200px";return Object(a.jsx)("div",{style:{height:this.props.height,width:this.props.width,display:"flex"},dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="'.concat(e,'" height="').concat(t,'" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n          <g transform="translate(50 50)">\n            <g transform="scale(0.26)">\n              <g transform="translate(-50 -50)">\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.7575757575757576s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#f72585" d="M50 50L50 0A50 50 0 0 1 100 50Z"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.0101010101010102s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#7209b7" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5151515151515151s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#3a0ca3" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="3.0303030303030303s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#4361ee" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)"></path>\n                </g>\n              </g>\n            </g>\n          </g>\n          </svg>')}})}}]),n}(r.a.Component),C=n(196);n(707);C.a.initializeApp(j.firebaseConfig);var k=C.a.firestore().collection("saltseasons");function A(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.where("chainId","==",t).get();case 2:return n=e.sent,a=n.docs.map((function(e){var t=e.data();return t.id=e.id,t})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=n(742),R=n(734),N=n(735),M=n(736),P=n(743),E=n(737),L=n(324);var D={TokenId:"20272",getJsonRpcProvider:function(e,t){return new L.a(e,t)}},z=n(325),F='[{"inputs":[{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_priceStep","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payee","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"Sent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"destroy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceStep","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"purchaseToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_payee","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]';var U={contractABI:F,getContract:function(e,t){return new z.a(e,F,t)}},J=n(326);var H=function(e){return Object(a.jsx)(a.Fragment,{children:"".concat(e.ticker||"\u039e").concat(Object(J.a)(e.number))})},B=function(e){Object(w.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(v.a)(this,n),(a=t.call(this,e)).state={loading:!0},a}return Object(O.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{style:{display:"block",height:this.props.height,width:this.props.width,backgroundColor:this.props.backgroundColor},children:[Object(a.jsx)("div",{style:{position:"absolute",top:0,left:0,height:this.props.height,width:this.props.width},children:Object(a.jsx)(S,{height:this.props.height,width:this.props.width})}),Object(a.jsx)("div",{style:{position:"absolute",top:0,left:0,backgroundImage:"url(".concat(this.props.imageUrl,")"),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:this.props.height,width:this.props.width}})]})}}]),n}(r.a.Component);var W=function(e){var t=e.saltSeason,n=D.getJsonRpcProvider(j.INFURA_JSON_RPC_API[t.chainId],t.chainId),i=Object(c.b)(),s=i.chainId,o=(i.account,i.library,r.a.useState(void 0)),l=Object(f.a)(o,2),d=l[0],h=l[1];r.a.useEffect((function(){if(void 0===d){var e=U.getContract(t.sellerContractAddress,n);console.log(">>> contract",t),h(e)}}),[d]);var b=r.a.useState(void 0),y=Object(f.a)(b,2),m=y[0],g=y[1];r.a.useEffect((function(){m||d&&Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.currentPrice();case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})))()}),[m,d]);var x=r.a.useState(void 0),v=Object(f.a)(x,2),O=v[0],w=v[1];r.a.useEffect((function(){O||d&&Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.priceStep();case 2:t=e.sent,w(t);case 4:case"end":return e.stop()}}),e)})))()}),[O,d]);var T=r.a.useState(void 0),C=Object(f.a)(T,2),k=C[0],A=C[1];r.a.useEffect((function(){d&&void 0===k&&d.queryFilter(d.filters.TokenPurchase).then((function(e){A(e)}))}),[d,k]);var I=t.url||"https://marketplace.saltandsatoshi.com/#".concat(t.id);return Object(a.jsxs)(_.a,{style:{margin:"2em",display:"inline-block"},children:[Object(a.jsxs)(R.a,{children:[Object(a.jsx)("a",{href:I,style:{textDecoration:"none"},target:"_parent",children:Object(a.jsx)(B,{imageUrl:t.posterUrls[0],height:"300px",width:"300px",backgroundColor:"black"})}),Object(a.jsx)(N.a,{children:Object(a.jsxs)("a",{href:I,style:{textDecoration:"none"},target:"_parent",children:[Object(a.jsxs)("p",{style:{fontSize:"2em"},className:"with-cool-font",children:["Season ",t.number]}),Object(a.jsx)("br",{}),Object(a.jsx)("h5",{className:"with-cool-font",children:t.title})]})})]}),Object(a.jsx)(M.a,{style:{padding:0},children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[42!==s&&4!==s||!k?null:Object(a.jsx)(P.a,{variant:"determinate",color:"secondary",value:100*Math.min(k.length/t.tokenIds.length,1)}),Object(a.jsxs)("div",{style:{display:"flex"},children:[42!==s&&4!==s&&Object(a.jsx)(E.a,{variant:"contained",color:"secondary",style:{flex:1,borderRadius:0,padding:"1em",boxShadow:"none",backgroundColor:"#d33747"},children:Object(a.jsx)("div",{style:{display:"flex",flexDirection:"column"},className:"with-cool-font",children:Object(a.jsx)("span",{style:{fontSize:"x-large"},children:"Coming soon"})})}),(42===s||4===s)&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(E.a,{variant:"contained",color:"secondary",style:{flex:1,borderRadius:0,padding:"1em",boxShadow:"none",backgroundColor:"#d33747"},children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:"with-cool-font",children:[Object(a.jsx)("span",{style:{fontSize:"x-small"},children:"Edition of"}),Object(a.jsx)("span",{style:{fontSize:"x-large"},children:t.tokenIds.length})]})}),Object(a.jsx)(E.a,{variant:"contained",color:"primary",style:{flex:1,borderRadius:0,padding:"1em",boxShadow:"none",backgroundColor:"#d33747"},children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:"with-cool-font",children:[Object(a.jsx)("span",{style:{fontSize:"x-small"},children:"Price"}),Object(a.jsx)("span",{style:{fontSize:"x-large"},children:m?Object(a.jsx)(H,{number:m}):Object(a.jsx)(S,{height:"46px",width:"46px",innerHeight:"46px",innerWidth:"46px"})})]})}),Object(a.jsx)(E.a,{variant:"contained",color:"secondary",style:{flex:1,borderRadius:0,padding:"1em",boxShadow:"none",backgroundColor:"#d33747"},children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:"with-cool-font",children:[Object(a.jsx)("span",{style:{fontSize:"x-small"},children:"Sold"}),Object(a.jsx)("span",{style:{fontSize:"x-large"},children:k?Object(a.jsx)(a.Fragment,{children:k.length}):null})]})})]})]})]})})]})},Z=n(740);function q(e){return console.log(">>> currentChain",e),42===e?42:e||42}var Y=function(){var e=Object(c.b)(),t=e.connector,n=(e.account,e.library,e.deactivate,e.active,e.error,e.chainId),s=r.a.useState(),o=Object(f.a)(s,2),l=o[0],d=o[1];r.a.useEffect((function(){l&&l===t&&d(void 0)}),[l,t]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(c.b)(),n=t.active,a=t.error,r=t.activate;Object(i.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!a&&!e){var i=function(){console.log("Handling 'connect' event"),r(x)},s=function(e){console.log("Handling 'chainChanged' event with payload",e),r(x)},o=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&r(x)},c=function(e){console.log("Handling 'networkChanged' event with payload",e),r(x)};return t.on("connect",i),t.on("chainChanged",s),t.on("accountsChanged",o),t.on("networkChanged",c),function(){t.removeListener&&(t.removeListener("connect",i),t.removeListener("chainChanged",s),t.removeListener("accountsChanged",o),t.removeListener("networkChanged",c))}}}),[n,a,e,r])}(!function(){var e=Object(c.b)(),t=e.activate,n=e.active,a=Object(i.useState)(!1),r=Object(f.a)(a,2),s=r[0],o=r[1];return Object(i.useEffect)((function(){x.isAuthorized().then((function(e){e?t(x,void 0,!0).catch((function(){o(!0)})):o(!0)}))}),[t]),Object(i.useEffect)((function(){!s&&n&&o(!0)}),[s,n]),s}()||!!l);var h=r.a.useState(void 0),b=Object(f.a)(h,2),y=b[0],m=b[1];r.a.useEffect((function(){y||Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(q(n));case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})))()}),[y,n]);var j=r.a.useState(n),g=Object(f.a)(j,2),v=g[0],O=g[1];return r.a.useEffect((function(){v&&v!==n&&(m(void 0),O(n))}),[v,n]),y?Object(a.jsx)("div",{children:Object(a.jsx)(Z.a,{style:{marginTop:"3em",color:"lightgray",float:"left"},children:y.map((function(e){return Object(a.jsx)(W,{saltSeason:e},e.id)}))})}):Object(a.jsx)(S,{height:"200px",width:"200px"})};function G(e){return new l.a(e)}var K=function(){return Object(a.jsx)(c.a,{getLibrary:G,children:Object(a.jsx)(Y,{})})},Q=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,960)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root")),Q()}},[[718,1,2]]]);
//# sourceMappingURL=main.5e562b86.chunk.js.map