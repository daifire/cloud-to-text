(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0968141f"],{1805:function(t,e,n){t.exports=n.p+"static/img/avatar2.c5124cc6.png"},"2ed3":function(t,e,n){var a={"./avatar0.png":"482d","./avatar1.png":"639c","./avatar2.png":"1805","./avatar3.png":"6947","./avatar4.png":"92b9","./avatar5.png":"6f92","./avatar6.png":"f23c","./avatar7.png":"b740","./avatar8.png":"dd0c","./avatar9.png":"328b"};function i(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}i.keys=function(){return Object.keys(a)},i.resolve=r,t.exports=i,i.id="2ed3"},"328b":function(t,e,n){t.exports=n.p+"static/img/avatar9.6505b97c.png"},"46ea":function(t,e,n){"use strict";n("e57d")},"482d":function(t,e,n){t.exports=n.p+"static/img/avatar0.999c09d4.png"},"639c":function(t,e,n){t.exports=n.p+"static/img/avatar1.1db6e61d.png"},6947:function(t,e,n){t.exports=n.p+"static/img/avatar3.ce71c7d3.png"},"6f92":function(t,e,n){t.exports=n.p+"static/img/avatar5.18d2251c.png"},"92b9":function(t,e,n){t.exports=n.p+"static/img/avatar4.ce6bec10.png"},b321:function(t,e,n){"use strict";var a=n("2fb8"),i=(a.roots["default"]||(a.roots["default"]=new a.Root)).addJSON({agora:{nested:{audio2text:{options:{java_package:"io.agora.rtc.audio2text",java_outer_classname:"Audio2TextProtobuffer"},nested:{Text:{fields:{vendor:{type:"int32",id:1},version:{type:"int32",id:2},seqnum:{type:"int32",id:3},uid:{type:"uint32",id:4},flag:{type:"int32",id:5},time:{type:"int64",id:6},lang:{type:"int32",id:7},starttime:{type:"int32",id:8},offtime:{type:"int32",id:9},words:{rule:"repeated",type:"Word",id:10}}},Word:{fields:{text:{type:"string",id:1},startMs:{type:"int32",id:2},durationMs:{type:"int32",id:3},isFinal:{type:"bool",id:4},confidence:{type:"double",id:5}}}}}}}});t.exports=i},b740:function(t,e,n){t.exports=n.p+"static/img/avatar7.903b312d.png"},dd0c:function(t,e,n){t.exports=n.p+"static/img/avatar8.f9519384.png"},dd7b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login"},[1==t.index?n("div",{staticClass:"fs24 mobile"},[n("el-button",{staticClass:"setting",attrs:{icon:"el-icon-setting",circle:""},on:{click:function(e){t.dialogFormVisible=!0}}}),n("el-form",{ref:"form",staticStyle:{"margin-top":"-7rem"},attrs:{model:t.options,"label-width":"110px",rules:t.rules}},[n("el-form-item",{attrs:{label:"User Name:",prop:"userName"}},[n("el-input",{attrs:{placeholder:"Enter Your Name"},on:{input:function(e){return t.options.userName=t.options.userName.toUpperCase()}},model:{value:t.options.userName,callback:function(e){t.$set(t.options,"userName",e)},expression:"options.userName"}})],1),n("el-form-item",{attrs:{label:"Room Name:",prop:"channel"}},[n("el-input",{attrs:{placeholder:"Enter Room Name","suffix-icon":"el-icon-s-home"},on:{input:function(e){return t.options.channel=t.options.channel.toUpperCase()}},model:{value:t.options.channel,callback:function(e){t.$set(t.options,"channel",e)},expression:"options.channel"}})],1),n("el-form-item",{attrs:{label:"Join As:"}},[n("el-radio-group",{model:{value:t.options.role,callback:function(e){t.$set(t.options,"role",e)},expression:"options.role"}},[n("el-radio",{staticStyle:{"margin-left":"-1rem"},attrs:{label:"host"}},[t._v("Host")]),n("el-radio",{staticStyle:{"margin-left":"-1rem"},attrs:{label:"audience"}},[t._v("Audience")])],1)],1),n("div",[n("el-button",{staticStyle:{width:"80%"},attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("JOIN")])],1)],1)],1):t._e(),2!=t.index||t.isMobile?t._e():n("div",{staticClass:"fs24 mobile1"},["audience"==t.options.role?n("div",{staticClass:"content"},[n("div",[n("span",[t._v("Room Name : "+t._s(this.options.channel))])]),t._l(t.userList,(function(e,a){return n("div",{key:a},[0==a?n("div",{staticClass:"item"},[n("div",{staticClass:"first"},[n("el-avatar",{attrs:{src:t.allData[e.uid].src}})],1),n("div",[n("div",{attrs:{id:"wrapperDiv"}},[n("div",{staticStyle:{float:"left"},attrs:{id:"div1"}},[n("span",[t._v("User Name: "+t._s(e.name))]),n("span",[t._v(" (Self,Audience) ")])])])])]):t._e(),a<5&&a>0?n("div",{staticClass:"itemContent"},[n("div",{staticClass:"top"},[n("div",{staticClass:"first"},[n("el-avatar",{attrs:{src:t.allData[e.uid].src}})],1),n("div",{attrs:{id:"wrapperDiv"}},[n("div",{staticStyle:{float:"left"},attrs:{id:"div1"}},[n("span",[t._v("User Name: "+t._s(e.name))])])])]),t.allData[e.uid]?n("div",{staticClass:"bottom"},[n("p",{ref:"textContent",refInFor:!0,domProps:{innerHTML:t._s(t.allData[e.uid].stringBuilder)}})]):t._e()]):t._e()])}))],2):t._e(),"host"==t.options.role?n("div",{staticClass:"content"},[n("div",[n("span",[t._v("Room Name : "+t._s(this.options.channel))])]),t._l(t.userList,(function(e,a){return n("div",{key:a},[a<4?n("div",{staticClass:"itemContent"},[n("div",{staticClass:"top"},[n("div",{staticClass:"first"},[n("el-avatar",{attrs:{src:t.allData[e.uid].src}})],1),n("div",{attrs:{id:"wrapperDiv"}},[n("div",{staticStyle:{float:"left"},attrs:{id:"div1"}},[n("span",[t._v("User Name: "+t._s(e.name))]),0==a?n("span",[t._v(" (Self,Host)")]):t._e()])])]),t.allData[e.uid]?n("div",{staticClass:"bottom"},[n("p",{ref:"textContent",refInFor:!0,domProps:{innerHTML:t._s(t.allData[e.uid].stringBuilder)}})]):t._e()]):t._e()])}))],2):t._e()]),2==t.index&&t.isMobile?n("div",{staticClass:"fs24 mobile1 mobile2"},[n("div",{staticClass:"topH"},[n("div",{staticClass:"header"},[n("i",{staticClass:"el-icon-plus",class:t.isCollapse?"unfold close":"unfold",on:{click:t.changeOpen}}),n("span",{staticStyle:{"font-size":"15px",float:"right","margin-right":"20px"},attrs:{slot:"label"},on:{click:t.back},slot:"label"},[t._v(" Leave Room ")])])]),n("el-tabs",{class:t.isCollapse?"tabs":"tabs tabs-close",attrs:{"tab-position":"left"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{staticStyle:{height:"100%"},attrs:{label:"TranscribeLive",name:"TranscribeLive"}},["audience"==t.options.role?n("div",{staticClass:"content"},[n("div",[n("span",[t._v("Room Name : "+t._s(this.options.channel))])]),t._l(t.userList,(function(e,a){return n("div",{key:a},[0==a?n("div",{staticClass:"item"},[n("div",{staticClass:"first"},[n("el-avatar",{attrs:{src:t.allData[e.uid].src}})],1),n("div",[n("div",{attrs:{id:"wrapperDiv"}},[n("div",{staticStyle:{float:"left"},attrs:{id:"div1"}},[n("span",[t._v("User Name: "+t._s(e.name))]),n("span",[t._v(" (Self,Audience) ")])])])])]):t._e(),a<5&&a>0?n("div",{staticClass:"itemContent"},[n("div",{staticClass:"top"},[n("div",{staticClass:"first"},[n("el-avatar",{attrs:{src:t.allData[e.uid].src}})],1),n("div",{attrs:{id:"wrapperDiv"}},[n("div",{staticStyle:{float:"left"},attrs:{id:"div1"}},[n("span",[t._v("User Name: "+t._s(e.name))])])])]),t.allData[e.uid]?n("div",{staticClass:"bottom"},[n("p",{ref:"textContent",refInFor:!0,domProps:{innerHTML:t._s(t.allData[e.uid].stringBuilder)}})]):t._e()]):t._e()])}))],2):t._e(),"host"==t.options.role?n("div",{staticClass:"content"},[n("div",[n("span",[t._v("Room Name : "+t._s(this.options.channel))])]),t._l(t.userList,(function(e,a){return n("div",{key:a},[a<4?n("div",{staticClass:"itemContent"},[n("div",{staticClass:"top"},[n("div",{staticClass:"first"},[n("el-avatar",{attrs:{src:t.allData[e.uid].src}})],1),n("div",{attrs:{id:"wrapperDiv"}},[n("div",{staticStyle:{float:"left"},attrs:{id:"div1"}},[n("span",[t._v("User Name: "+t._s(e.name))]),0==a?n("span",[t._v(" (Self,Host)")]):t._e()])])]),t.allData[e.uid]?n("div",{staticClass:"bottom"},[n("p",{ref:"textContent",refInFor:!0,domProps:{innerHTML:t._s(t.allData[e.uid].stringBuilder)}})]):t._e()]):t._e()])}))],2):t._e(),n("div",{staticStyle:{position:"fixed",top:"80vh",left:"50%","margin-left":"-24px",width:"200px","text-align":"left"}},[t.peerStartedSTT?n("el-button",{staticStyle:{width:"auto","font-size":"30px"},attrs:{icon:"el-icon-microphone",circle:"",size:"mini",type:"primary",title:"Start Transcription"},on:{click:t.startFanl}}):n("el-button",{staticStyle:{width:"auto",background:"#cb4c38","font-size":"30px",border:"#cb4c38"},attrs:{icon:"el-icon-turn-off-microphone",circle:"",size:"mini",type:"primary",title:"Stop Transcription"},on:{click:t.stopFanl}}),n("span",{staticStyle:{"font-size":"14px",color:"#000","margin-left":"20px","vertical-align":"5px"}},[t._v("recording...")]),t.start?n("span",{staticStyle:{"font-size":"14px",color:"#000","margin-left":"20px","vertical-align":"5px"}},[t._v("click to start")]):t._e()],1)]),n("el-tab-pane",{attrs:{label:"Full Transcription",name:"Full Transcription"}},[n("div",{staticClass:"drawerContent"},[n("p",[t._v(t._s(this.simpletext))])])]),n("el-tab-pane",{attrs:{label:"Conversation",name:"Conversation"}},[n("div",{staticClass:"drawerContent"},t._l(t.simpletextMetting,(function(e,a){return n("div",{key:a},[e.text?n("div",[n("p",[t._v(t._s(e.name)+" "+t._s(new Date(parseInt(e.time)).toLocaleString()))]),n("p",[t._v(t._s(e.text))])]):t._e()])})),0)]),n("el-tab-pane",{attrs:{label:"Content Filter",name:"Content Filter"}},[n("div",{staticClass:"drawerContent"},[n("p",{domProps:{innerHTML:t._s(t.profanityStr)}})])])],1)],1):t._e(),2!=t.index||t.isMobile?t._e():n("div",{staticClass:"buttonList"},[t.peerStartedSTT?n("el-button",{staticStyle:{width:"auto",background:"#cb4c38","font-size":"30px",border:"#cb4c38"},attrs:{icon:"el-icon-microphone",circle:"",size:"mini",type:"primary",title:"Stop Transcription"},on:{click:t.stopFanl}}):n("el-button",{staticStyle:{width:"auto","font-size":"30px"},attrs:{icon:"el-icon-turn-off-microphone",circle:"",size:"mini",type:"primary",title:"Start Transcription"},on:{click:t.startFanl}}),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.join,expression:"join"}],attrs:{size:"mini",type:"primary",plain:""},on:{click:t.back}},[t._v("Leave Room")]),t.start?n("el-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{size:"mini",type:"primary",plain:""},on:{click:t.fanl}},[t._v("load transcription ")]):t._e(),t.start?n("el-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{size:"mini",type:"primary",plain:""},on:{click:t.noFanl}},[t._v("load close caption ")]):t._e(),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.join,expression:"join"}],attrs:{size:"mini",type:"primary",plain:""},on:{click:t.simpleText}},[t._v("Full Transcription")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.join,expression:"join"}],attrs:{size:"mini",type:"primary",plain:""},on:{click:t.simpleTextMeeting}},[t._v("Conversation")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.join,expression:"join"}],attrs:{size:"mini",type:"primary",plain:""},on:{click:t.profanity}},[t._v("Content Filter")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{size:"mini",type:"primary",plain:"",disabled:!t.taskId},on:{click:t.queryFanl}},[t._v("Query status ")])],1),n("el-drawer",{attrs:{title:"load transcription",visible:t.drawerFanl},on:{"update:visible":function(e){t.drawerFanl=e}}},[t.outputStreamFanle.length?n("div",{staticClass:"drawerContent"},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.clearFanl}},[t._v("clear cache")]),t._l(t.outputStreamFanle.split("</br>"),(function(e,a){return n("p",{key:a,domProps:{innerHTML:t._s(e)}})}))],2):n("div",{staticClass:"drawerContent"},[n("p",[t._v("empty")])])]),n("el-drawer",{attrs:{title:"load close caption",visible:t.drawer},on:{"update:visible":function(e){t.drawer=e}}},[t.outputStreamFanle.length?n("div",{staticClass:"drawerContent"},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.clear}},[t._v("clear cache")]),t._l(t.outputStreamNoFanle.split("</br>"),(function(e,a){return n("p",{key:a,domProps:{innerHTML:t._s(e)}})}))],2):n("div",{staticClass:"drawerContent"},[n("p",[t._v("empty")])])]),n("el-drawer",{attrs:{title:"Full Transcription",visible:t.drawerFanlSimple},on:{"update:visible":function(e){t.drawerFanlSimple=e}}},[n("div",{staticClass:"drawerContent"},[n("p",[t._v(t._s(this.simpletext))])])]),n("el-drawer",{attrs:{title:"Conversation(Content Filter)",visible:t.drawerFanlProfanity},on:{"update:visible":function(e){t.drawerFanlProfanity=e}}},[n("div",{staticClass:"drawerContent"},[n("p",{domProps:{innerHTML:t._s(t.profanityStr)}})])]),n("el-drawer",{attrs:{title:"Conversation",visible:t.drawerFanlSimpleMetting},on:{"update:visible":function(e){t.drawerFanlSimpleMetting=e}}},[n("div",{staticClass:"drawerContent"},t._l(t.simpletextMetting,(function(e,a){return n("div",{key:a},[e.text?n("div",[n("p",[t._v(t._s(e.name)+" "+t._s(new Date(parseInt(e.time)).toLocaleString()))]),n("p",[t._v(t._s(e.text))])]):t._e()])})),0)]),n("el-dialog",{attrs:{title:"Settings",visible:t.dialogFormVisible,width:"400px","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("p",{staticStyle:{"padding-right":"4px"}},[t._v("APP ID: "),n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"appId"},model:{value:t.appId,callback:function(e){t.appId=e},expression:"appId"}})],1),n("el-form",{ref:"form",staticStyle:{"margin-left":"-3rem"},attrs:{model:t.options,"label-width":"110px",rules:t.rules}},[n("el-form-item",{attrs:{label:"AEC:"}},[n("el-radio-group",{staticStyle:{"margin-left":"-8rem"},model:{value:t.options.AEC,callback:function(e){t.$set(t.options,"AEC",e)},expression:"options.AEC"}},[n("el-radio",{staticStyle:{"margin-right":"-1rem"},attrs:{label:!0}},[t._v("Open")]),n("el-radio",{attrs:{label:!1}},[t._v("Close")]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Acoustic Echo Cancellation",placement:"top-start"}},[n("el-button",{staticClass:"tooltip",staticStyle:{padding:"0% !important,margin-right: -1rem"},attrs:{icon:"el-icon-info",circle:"","data-coreui-placement":"top"}})],1)],1)],1),n("el-form-item",{attrs:{label:"AGC:"}},[n("el-radio-group",{staticStyle:{"margin-left":"-8rem"},model:{value:t.options.AGC,callback:function(e){t.$set(t.options,"AGC",e)},expression:"options.AGC"}},[n("el-radio",{staticStyle:{"margin-right":"-1rem"},attrs:{label:!0}},[t._v("Open")]),n("el-radio",{attrs:{label:!1}},[t._v("Close")]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Audio Gain Control",placement:"top-start"}},[n("el-button",{staticClass:"tooltip",staticStyle:{padding:"0% !important,margin-right: -1rem"},attrs:{icon:"el-icon-info",circle:"","data-coreui-placement":"top"}})],1)],1)],1),n("el-form-item",{attrs:{label:"ANS:"}},[n("el-radio-group",{staticStyle:{"margin-left":"-8rem"},model:{value:t.options.ANS,callback:function(e){t.$set(t.options,"ANS",e)},expression:"options.ANS"}},[n("el-radio",{staticStyle:{"margin-right":"-1rem"},attrs:{label:!0}},[t._v("Open")]),n("el-radio",{attrs:{label:!1}},[t._v("Close")]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Automatic Noise Suppression",placement:"top-start"}},[n("el-button",{staticClass:"tooltip",staticStyle:{padding:"0% !important,margin-right: -1rem"},attrs:{icon:"el-icon-info",circle:"","data-coreui-placement":"top"}})],1)],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Cancel")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Confirm")])],1)],1)],1)},i=[],r=n("1da1"),s=(n("96cf"),n("e9c4"),n("d81d"),n("b64b"),n("4de4"),n("d3b7"),n("159b"),n("b0c0"),n("fb6a"),n("25f0"),n("a15b"),n("a9e3"),n("caad"),n("a434"),n("99af"),n("ac1f"),n("1276"),n("b680"),n("2532"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("e671")),o=n.n(s),l=n("6f91"),c=n.n(l),u=n("b321"),p=n.n(u),d=n("bc3a"),m=n.n(d),f=(n("2ef0"),n("4be7"),"4135901d9c8b4f0cb09fbb51fd7508ff"),v={data:function(){return{rtc:{localAudioTrack:null,client:null},userList:[],hostList:[],token:null,uid:null,appId:f,start:!0,loading:!1,taskId:"",join:!1,index:1,tokenName:"",rtmClient:"",peerStartedSTT:!1,options:{channel:"",role:"host",userName:"",AEC:!0,AGC:!0,ANS:!0},pollingWorker:"",rules:{channel:[{required:!0,message:"roomName is required",trigger:"blur"}],userName:[{required:!0,message:"userName is required",trigger:"blur"}]},allData:{},lastSeqnum:-1,finalLists:{},nonFinalList:{},outputStreamFanle:"",outputStreamNoFanle:"",createTs:"",drawer:!1,drawerFanl:!1,drawerFanlSimple:!1,simpletext:"",dialogFormVisible:!1,drawerFanlSimpleMetting:!1,simpletextMetting:[],rtmChannel:"",profanityStr:"",drawerFanlProfanity:!1,isCollapse:!1,isMobile:!1,activeName:"TranscribeLive",authorizationField:"Basic OTE2NTM2MTM5ZjA5NGQyZDkwYTQ0MGIwNzRlNzllMTc6OThhMWY2ZThjMThiNGY4MThkZjJjZmI5OWRiNDBjNDc="}},created:function(){console.log("version 3"),window.screen.width<500&&(this.isMobile=!0)},mounted:function(){var t=this;window.addEventListener("beforeunload",(function(e){return t.beforeunloadHandler(e)}))},beforeDestroy:function(){this.rtc.localAudioTrack&&this.leaveRoom(),this.taskId&&this.tokenName&&this.stopFanl()},methods:{changeOpen:function(){this.isCollapse=!this.isCollapse},handleClick:function(){this.isCollapse=!1},clearFanl:function(){var t=this;this.$confirm("Are you sure to clear fanle","tip",{confirmButtonText:"sure",cancelButtonText:"cancle",type:"warning"}).then((function(){t.outputStreamFanle="",localStorage.setItem("outputStreamFanle",""),t.$message({type:"success",message:"success!"})})).catch((function(){t.$message({type:"info",message:"cancle"})}))},clear:function(){var t=this;this.$confirm("Are you sure to clear no-Fanle","tip",{confirmButtonText:"sure",cancelButtonText:"cancle",type:"warning"}).then((function(){t.outputStreamNoFanle="",localStorage.setItem("outputStreamNoFanle",""),t.$message({type:"success",message:"success!"})})).catch((function(){t.$message({type:"info",message:"cancle"})}))},fanl:function(){this.drawerFanl=!0},simpleText:function(){this.drawerFanlSimple=!0},simpleTextMeeting:function(){this.drawerFanlSimpleMetting=!0},profanity:function(){this.drawerFanlProfanity=!0},noFanl:function(){this.drawer=!0},isOAverdue:function(){return!this.tokenName||Date.now()/1e3-this.createTs>=300},onSubmit:function(){var t=this;this.$refs["form"].validate((function(e){if(!e)return!1;t.index=2,t.outputStreamFanle=localStorage.getItem("outputStreamFanle")?localStorage.getItem("outputStreamFanle"):"",t.outputStreamNoFanle=localStorage.getItem("outputStreamNoFanle")?localStorage.getItem("outputStreamNoFanle"):"",t.start=!1,t.tokenName="",t.activeName="TranscribeLive",t.startBasicCall()}))},back:function(){this.index=1,this.start=!1,this.hostList=[],this.userList=[],this.beforeunloadHandler(),this.outputStreamNoFanle="",this.outputStreamFanle=""},rtmMemberJoined:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,r,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.rtmClient.getChannelAttributes(t);case 2:i=a.sent,r=JSON.parse(JSON.stringify(e.userList)),s=Object.keys(i).map((function(t){return{uid:t,name:i[t]}})),o=s.filter((function(t){return!r.some((function(e){return e.uid==t.uid}))})),o.forEach((function(t){e.userList.push({uid:t.uid,name:t.name.value,online:!1}),e.allData[t.uid]={src:n("2ed3")("./avatar"+t.uid.toString().slice(-1)+".png"),name:t.name.value}}));case 7:case"end":return a.stop()}}),a)})))()},rtmMemberLeft:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.uid||!t.options.channel){e.next=3;break}return e.next=3,t.rtmClient.deleteChannelAttributesByKeys(t.options.channel,[t.uid.toString()]);case 3:case"end":return e.stop()}}),e)})))()},rtmMessageFromPeer:function(t,e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"STT started"===t.text?n.peerStartedSTT=!0:n.peerStartedSTT=!1;case 1:case"end":return e.stop()}}),e)})))()},startBasicCall:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a,i,s,l,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.a.setLogLevel(4),t.rtc.client=o.a.createClient({mode:"live",codec:"vp8",role:t.options.role}),t.rtmClient=c.a.createInstance(t.appId,{enableLogUpload:!1}),a={},a.uid=t.options.userName,a.token=null,e.next=8,t.rtmClient.login(a).then((function(){console.log("RTM join success"),t.join=!0})).catch((function(t){console.log("RTM join failed")}));case 8:return t.rtmClient.on("MessageFromPeer",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",t.rtmMessageFromPeer(n,a));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=11,t.rtmClient.createChannel(t.options.channel);case 11:return i=e.sent,t.rtmChannel=i,e.next=15,t.rtmChannel.join().then((function(){console.log("RTM channel join success")})).catch((function(t){console.log("channel RTM failed")}));case 15:return s=(new Date).getTime().toString().substring(4),t.uid=Number(s),l=t.options.userName,u=t.uid.toString(),window.userInfo={},userInfo[u]=l,e.next=23,t.rtmClient.addOrUpdateChannelAttributes(t.rtmChannel.channelId,userInfo);case 23:return t.rtc.client.on("user-published",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.rtc.client.subscribe(n,a);case 2:e.sent,n.uid.toString(),"audio"===a&&(i=n.audioTrack,i.play()),t.rtc.client.on("user-unpublished",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.rtc.client.unsubscribe(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.rtc.client.on("user-joined",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if([1e3,2e3].includes(a.uid)){e.next=7;break}return t.hostList.push(a.uid),e.next=4,t.rtmClient.getChannelAttributes(t.options.channel);case 4:i=e.sent,console.log("user join "+a.uid),i[a.uid]&&(t.userList.push({uid:a.uid,name:i[a.uid].value,online:!1}),t.allData[a.uid]={src:n("2ed3")("./avatar"+a.uid.toString().slice(-1)+".png"),name:i[a.uid].value});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t.rtc.client.on("user-left",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("user left "+n.uid),t.allData[n.uid]&&(delete t.allData[n.uid],t.userList.splice(t.hostList.indexOf(n.uid),1),t.hostList.splice(t.hostList.indexOf(n.uid),1));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),t.rtc.client.on("stream-message",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.uint8Array(a);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),e.next=29,t.joinRoom(i);case 29:case"end":return e.stop()}}),e)})))()},joinRoom:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.rtc.client.join(e.appId,e.options.channel,e.token,e.uid);case 2:return a=t.sent,console.log("self uid "+a),e.hostList.unshift(a),i=e.options.userName,r=a.toString(),e.userList.unshift({uid:r,name:i,online:!1}),e.allData[r]={src:n("2ed3")("./avatar"+r.toString().slice(-1)+".png"),name:i},t.next=11,o.a.createMicrophoneAudioTrack({AEC:e.options.AEC,AGC:e.options.AGC,ANS:e.options.ANS});case 11:if(e.rtc.localAudioTrack=t.sent,"host"!=e.options.role){t.next=15;break}return t.next=15,e.rtc.client.publish([e.rtc.localAudioTrack]);case 15:case"end":return t.stop()}}),t)})))()},leaveRoom:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.start=!1,t.join=!1,t.rtc.localAudioTrack.close(),e.next=5,t.rtmMemberLeft();case 5:return e.next=7,t.rtc.client.leave();case 7:return e.next=9,t.rtmChannel.leave();case 9:return e.next=11,t.rtmClient.logout();case 11:t.uid="";case 12:case"end":return e.stop()}}),e)})))()},getBuilderTokens:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:m.a.post("/api/v1/projects/".concat(f,"/rtsc/speech-to-text/builderTokens"),{instanceId:e.options.channel},{headers:{Authorization:e.authorizationField}}).then((function(n){200==n.status?(e.tokenName=n.data.tokenName,e.createTs=n.data.createTs,1==t&&e.startFanl()):e.$message.error("网络异常")})).catch((function(t){e.$message.error(t.response.data.message?t.response.data.message:"网络异常")}));case 1:case"end":return n.stop()}}),n)})))()},sendStartSTTNotificationToPeers:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.rtmClient.getChannelAttributes(e.options.channel);case 2:a=n.sent,i=Object.keys(a).map((function(t){return{uid:t,name:a[t]}})),e.peerStartedSTT=t,i&&i.forEach(function(){var n=Object(r["a"])(regeneratorRuntime.mark((function n(a){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=a.name.value.toString(),n.next=3,e.rtmClient.sendMessageToPeer({text:t?"STT started":"STT stopped"},i).then(console.log("message has been sent")).catch((function(t){console.log("error while sending message",t)}));case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}());case 6:case"end":return n.stop()}}),n)})))()},startFanl:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.loading=!0,t.simpletext="","host"!=t.options.role){e.next=5;break}return e.next=5,t.rtc.client.publish([t.rtc.localAudioTrack]);case 5:return e.next=7,t.sendStartSTTNotificationToPeers(!0);case 7:t.isOAverdue()?t.getBuilderTokens(1):m.a.post("/api/v1/projects/".concat(f,"/rtsc/speech-to-text/tasks?builderToken=").concat(t.tokenName),{audio:{subscribeSource:"AGORARTC",agoraRtcConfig:{channelName:t.options.channel,uid:"1000",token:"",channelType:"LIVE_TYPE",subscribeConfig:{subscribeMode:"CHANNEL_MODE"},maxIdleTime:60}},config:{features:["RECOGNIZE"],recognizeConfig:{language:"ENG",model:"Model",connectionTimeout:60,output:{destinations:["AgoraRTCDataStream"],agoraRTCDataStream:{channelName:t.options.channel,uid:"2000",token:""}}}}},{headers:{Authorization:t.authorizationField}}).then((function(e){200==e.status?(t.start=!0,t.loading=!1,t.taskId=e.data.taskId,t.createWorker((function(){t.taskId&&(console.log(new Date),t.stopFanl())}),6e5)):(t.loading=!1,t.start=!1,t.$message.error("network anomaly"))})).catch((function(e){t.loading=!1,t.start=!1,t.$message.error(e.response.data.message?e.response.data.message:"network anomaly")}));case 8:case"end":return e.stop()}}),e)})))()},stopFanl:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,t.loading=!0,t.peerStartedSTT=!1,e.next=5,fetch("/api/v1/projects/".concat(f,"/rtsc/speech-to-text/tasks/").concat(t.taskId,"?builderToken=").concat(t.tokenName),{method:"delete",keepalive:!0,headers:{"content-type":"application/json",Authorization:t.authorizationField}});case 5:return a=e.sent,e.next=8,a.text();case 8:return i=e.sent,r=JSON.parse(i),e.next=12,t.sendStartSTTNotificationToPeers(!1);case 12:r.message?(n.loading=!1,n.$message.error(r.message?r.message:"network anomaly")):(n.start=!1,n.loading=!1,n.taskId="",n.tokenName="",n.stopWorker(n.pollingWorker));case 13:case"end":return e.stop()}}),e)})))()},queryFanl:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.taskId){e.next=2;break}return e.abrupt("return",t.$message.error("There are currently no tasks"));case 2:n=t,fetch("/api/v1/projects/".concat(f,"/rtsc/speech-to-text/tasks/").concat(t.taskId,"?builderToken=").concat(t.tokenName),{method:"get",headers:{"content-type":"application/json",Authorization:t.authorizationField}}).then((function(t){return t.text()})).then((function(t){var e=JSON.parse(t);e.status?n.$message.success("current task status".concat(e.status)):n.$message.error(e.message?e.message:"network anomaly")}));case 4:case"end":return e.stop()}}),e)})))()},uint8Array:function(t){var e=this,n=p.a.lookup("Text").decode(t),a=n.words;if(n.seqnum!==this.lastseqnum&&(this.lastSeqnum=n.seqnum,!(this.hostList.indexOf(n.uid)>=4&&"host"==this.options.role||this.hostList.indexOf(n.uid)>=5&&"audience"==this.options.role))){this.finalLists[n.uid]||(this.finalLists[n.uid]=[]),this.nonFinalList[n.uid]||(this.nonFinalList[n.uid]=[]);var i=[],r="",s="",o="",l="";if(a.forEach((function(t){e.isProfanityWord(t.text)&&(t.isFinal&&(l+=t.text.split(":")[0].split("[")[1]+" -> "+t.text.split(":")[1].split("]")[0]+" ; "),t.text=t.text.split(":")[0].split("[")[1]),t.isFinal?(e.finalLists[n.uid].push(t.text),e.isSentenceBoundaryWord(t.text)&&(e.finalLists[n.uid]=[]),r+="<span class='red'>"+n.uid+"</span> <span class='blue'>"+t.text+"</span> <span class='yellow'>("+t.confidence.toFixed(2)+")</span> ",e.simpletext.length>0&&!e.isPunctuationWord(t.text)&&(e.simpletext+=" ",o+=" "),o+=t.text,e.simpletext+=t.text):(s+="<span class='red'>"+n.uid+"</span> <span class='blue'>"+t.text+"</span> <span class='yellow'>("+t.confidence.toFixed(2)+")</span> ",i.push(t.text))})),r.length&&(this.outputStreamFanle+=new Date(parseInt(n.time)).toLocaleString()+" "+r+"</br>"),s.length&&(this.outputStreamNoFanle+=new Date(parseInt(n.time)).toLocaleString()+" "+s+"</br>"),o.length){var c=!1;this.simpletextMetting.forEach((function(t){t.uid==n.uid&&n.time-t.time<6e4&&(t.text+=o,c=!0)})),!c&&this.allData[n.uid]&&this.simpletextMetting.push({name:this.allData[n.uid].name,uid:n.uid,time:n.time,text:o})}l.length&&(this.profanityStr+=this.allData[n.uid].name+" "+n.uid+" "+new Date(parseInt(n.time)).toLocaleString()+"</br>"+l+"</br>");var u="";this.finalLists[n.uid].forEach((function(t){u.length>0&&!e.isPunctuationWord(t)&&(u+=" "),u+=t})),i.forEach((function(t){u.length>0&&!e.isPunctuationWord(t)&&(u+=" "),u+=t})),u[0]&&this.isPunctuationWord(u[0])&&(u=u.slice(1)),this.allData[n.uid]&&(this.allData[n.uid].stringBuilder=u,console.log(this.allData[n.uid].name,u)),this.$forceUpdate()}},isPunctuationWord:function(t){return"."==t||"?"==t||","==t},isSentenceBoundaryWord:function(t){return"."==t||"?"==t},isProfanityWord:function(t){return t.includes("[")},wordsToText:function(t){var e=this,n="";return t.forEach((function(t){n.length>0&&!e.isPunctuationWord(t)&&(n+=" "),n+=t})),n},beforeunloadHandler:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.taskId||!e.tokenName){n.next=3;break}return n.next=3,e.stopFanl();case 3:if(!e.rtc.localAudioTrack){n.next=6;break}return n.next=6,e.leaveRoom();case 6:return localStorage.setItem("outputStreamNoFanle",e.outputStreamNoFanle),localStorage.setItem("outputStreamFanle",e.outputStreamFanle),a="Are you sure you want to leave?",(t||window.event).returnValue=a,n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)})))()},create:function(t){var e=new Blob(["("+t+")()"]),n=window.URL.createObjectURL(e),a=new Worker(n);return a},createWorker:function(t,e){this.pollingWorker=this.create("function (e) {\n          setInterval(function () {\n              this.postMessage(null)\n          }, ".concat(e,")\n      }")),this.pollingWorker.onmessage=t},stopWorker:function(t){try{t&&t.terminate()}catch(e){console.log(e)}}}},h=v,g=(n("46ea"),n("2877")),b=Object(g["a"])(h,a,i,!1,null,null,null);e["default"]=b.exports},e57d:function(t,e,n){},f23c:function(t,e,n){t.exports=n.p+"static/img/avatar6.8cb5b3f4.png"}}]);