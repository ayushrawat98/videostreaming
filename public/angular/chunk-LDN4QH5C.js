import{a as P}from"./chunk-XUKMUCLX.js";import{a as W}from"./chunk-GLCZXYXP.js";import{a as Y}from"./chunk-7RDES63O.js";import{b as F}from"./chunk-E37BN3QB.js";import{a as U,d as $}from"./chunk-4BRXA6Y7.js";import{a as q,c as z}from"./chunk-VS2NQJWJ.js";import{g as M}from"./chunk-RH7ZN5VZ.js";import{a as j,g as N}from"./chunk-QZRAASS4.js";import{f as R}from"./chunk-2OCYWG4R.js";import{$a as b,Ab as r,Bb as n,Cb as l,Gb as S,Jb as p,Lb as h,Mc as O,Nc as D,Qc as A,Sb as f,Sc as L,Tb as i,Ub as w,Vb as I,Yb as y,_a as c,ja as k,ob as E,qb as _,sa as d,ta as m,tc as B,vb as V,wb as g,yb as C,zb as x}from"./chunk-ARRVSJN5.js";function K(o,t){if(o&1&&(r(0,"mat-chip"),i(1),n()),o&2){let e=t.$implicit;c(),w("@"+e)}}function Q(o,t){if(o&1&&(r(0,"h2"),i(1),n()),o&2){let e=t.$implicit;c(),w(e)}}function X(o,t){if(o&1){let e=S();r(0,"mat-chip-set")(1,"mat-chip"),i(2,"Users online :"),n(),C(3,K,2,1,"mat-chip",null,g),n(),r(5,"button",2),p("click",function(){d(e);let s=h();return m(s.sendAudio())}),i(6,"Start Recording"),n(),i(7," \xA0 "),r(8,"button",3),p("click",function(){d(e);let s=h();return m(s.stopAudio())}),i(9,"Send Recording"),n(),l(10,"br")(11,"hr"),r(12,"mat-form-field")(13,"mat-label"),i(14,"message:"),n(),l(15,"input",4,0),n(),r(17,"button",5),p("click",function(){d(e);let s=f(16),u=h();return m([u.sendText(s.value),s.value=""])}),i(18,"Send"),n(),C(19,Q,2,1,"h2",null,g)}if(o&2){let e=h();c(3),x(e.allUsers),c(2),_("disabled",e.sendAudioDisabled),c(3),_("disabled",e.stopAudioDisabled),c(11),x(e.usertext)}}function Z(o,t){o&1&&(r(0,"h1"),i(1,"Login to use"),n())}var T=class o{constructor(t,e){this._authenticateService=t;this._matSnackBar=e;this.loggedIn=this._authenticateService.loggedIn,this.userData=this._authenticateService.user_data,B(()=>{this.loggedIn()&&(!this.connection||this.connection.CLOSED)&&this.connect(),!this.loggedIn()&&this.connection&&(console.log("computed close"),this.connection.close())})}mediaRecorder;audioChunks=[];connection;sendAudioDisabled=!0;stopAudioDisabled=!0;loggedIn;userData;allUsers=[];ngOnInit(){}connect(){let t=R.wsAudioBaseUrl;this.connection=new WebSocket(t),this.connection.onopen=()=>{console.log("connection open",this.connection.readyState),this.sendAudioDisabled=!1,this.connection.readyState==1&&this.connection.send(this.userData().username)},this.connection.onmessage=e=>{typeof e.data=="string"?this.playThatText(e.data):this.playThatSong(e.data)},this.connection.onerror=e=>{console.error("WebSocket error:",e)},this.connection.onclose=()=>{console.log("WebSocket connection closed")}}sendAudio(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(t=>{this.sendAudioDisabled=!0,this.stopAudioDisabled=!1,this.mediaRecorder=new MediaRecorder(t,{audioBitsPerSecond:3e4}),this.mediaRecorder.ondataavailable=e=>{this.audioChunks.push(e.data)},this.mediaRecorder.onstop=()=>{let e=new Blob(this.audioChunks,{type:"audio/ogg"});this.audioChunks=[],this.connection.send(e),t.getTracks().forEach(a=>a.stop())},this.mediaRecorder.start(100),this.connection.send(this.userData().username+" recording")})}stopAudio(){this.sendAudioDisabled=!1,this.stopAudioDisabled=!0,this.connection.send(this.userData().username),this.mediaRecorder.stop()}playThatSong(t){let e=URL.createObjectURL(t),a=new Audio(e);a.muted=!0,a.play(),a.muted=!1}usertext=[];playThatText(t){t.includes("T9")?(this.checkLength(),this.usertext.unshift(t.split("T9")[1])):this.allUsers=t.split(",")}sendText(t){this.checkLength(),this.usertext.unshift(`@${this.userData().username} : ${t.trim()}`),this.connection.send(`T9${t.trim()}`)}checkLength(){this.usertext.length==15&&this.usertext.pop()}ngOnDestroy(){this.connection.close()}static \u0275fac=function(e){return new(e||o)(b(F),b(Y))};static \u0275cmp=k({type:o,selectors:[["app-livechat"]],standalone:!0,features:[y],decls:3,vars:2,consts:[["message",""],[2,"width","80%","margin","auto","text-align","center"],["mat-stroked-button","","color","accent",3,"click","disabled"],["mat-stroked-button","","color","error",3,"click","disabled"],["matInput",""],["mat-stroked-button","","color","primary",3,"click"]],template:function(e,a){e&1&&(r(0,"div",1),E(1,X,21,2)(2,Z,2,0,"h1"),n()),e&2&&(_("@slideFromTop",void 0),c(),V(a.loggedIn()?1:2))},dependencies:[$,U,z,q,W,N,j],data:{animation:[O("slideFromTop",[L(":enter",[A({opacity:0}),D("500ms ease-out",A({opacity:1}))]),L(":leave",[D("300ms ease-in",A({transform:"translateY(-100%)",opacity:0}))])])]}})};function ee(o,t){if(o&1){let e=S();r(0,"a",4),i(1),n(),r(2,"p"),i(3),n(),r(4,"button",3),p("click",function(){let s=d(e).$implicit,u=h();return m(u.deletevideo(s.id))}),i(5,"delete"),n()}if(o&2){let e=t.$implicit;_("routerLink","/video/"+e.id),c(),I("video id : ",e.id,""),c(2),I("reports : ",e.reportCount,"")}}var G=class o{constructor(t){this._adminService=t}reportList;ngOnInit(){this.getReport()}deleteuser(t){this._adminService.deleteUserById(t).subscribe(e=>{alert("deleted")},e=>{alert(e)})}deletevideo(t){this._adminService.deleteVideoById(t).subscribe(e=>{alert("deleted")})}deletecomment(t){this._adminService.deleteCommentById(t).subscribe(e=>{alert("deleted")})}getReport(){this._adminService.getAllReportedVideos().subscribe(t=>{this.reportList=t})}static \u0275fac=function(e){return new(e||o)(b(P))};static \u0275cmp=k({type:o,selectors:[["app-admin"]],standalone:!0,features:[y],decls:25,vars:0,consts:[["userid",""],["videoid",""],["commentid",""],[3,"click"],[3,"routerLink"]],template:function(e,a){if(e&1){let s=S();i(0,`delete user by id
`),l(1,"input",null,0),r(3,"button",3),p("click",function(){d(s);let v=f(2);return m(a.deleteuser(v.value))}),i(4,"delete"),n(),l(5,"br"),i(6,` delete video by id
`),l(7,"input",null,1),r(9,"button",3),p("click",function(){d(s);let v=f(8);return m(a.deletevideo(v.value))}),i(10,"delete"),n(),l(11,"br"),i(12,` delete comment by id
`),l(13,"input",null,2),r(15,"button",3),p("click",function(){d(s);let v=f(14);return m(a.deletecomment(v.value))}),i(16,"delete"),n(),l(17,"br"),r(18,"h2"),i(19,"report list"),n(),r(20,"button",3),p("click",function(){return d(s),m(a.getReport())}),i(21,"refresh"),n(),C(22,ee,6,3,null,null,g),l(24,"app-livechat")}e&2&&(c(22),x(a.reportList))},dependencies:[M,T]})};export{G as AdminComponent};
