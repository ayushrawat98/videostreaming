import{a as T}from"./chunk-TJF7TCZW.js";import{b as A}from"./chunk-76NFRR3S.js";import{a as I,d as B}from"./chunk-ON2JRT6O.js";import{a as w,c as M}from"./chunk-WZDNHQD2.js";import{f as y}from"./chunk-TAT732FB.js";import{Eb as C,Hb as m,Jb as r,Rb as c,Sb as k,Wb as D,Ya as s,Za as u,ha as f,mb as g,ob as h,pc as x,qa as l,ra as p,tb as v,ub as _,wb as b,xb as S,yb as o,zb as a}from"./chunk-J7P67657.js";function L(i,t){if(i&1&&(o(0,"mat-chip"),c(1),a()),i&2){let e=t.$implicit;s(),k("@"+e)}}function U(i,t){if(i&1){let e=C();o(0,"mat-chip-set",0),b(1,L,2,1,"mat-chip",null,_),a(),o(3,"button",1),m("click",function(){l(e);let d=r();return p(d.sendAudio())}),c(4,"Start Recording"),a(),o(5,"button",2),m("click",function(){l(e);let d=r();return p(d.stopAudio())}),c(6,"Send Recording"),a()}if(i&2){let e=r();s(),S(e.allUsers),s(2),h("disabled",e.sendAudioDisabled),s(2),h("disabled",e.stopAudioDisabled)}}function E(i,t){i&1&&(o(0,"h1"),c(1,"Login to use"),a())}var R=class i{constructor(t,e){this._authenticateService=t;this._matSnackBar=e;this.loggedIn=this._authenticateService.loggedIn,this.userData=this._authenticateService.user_data,x(()=>{this.loggedIn()&&this.connect(),this.loggedIn()||this.connection&&this.connection.close()})}mediaRecorder;audioChunks=[];connection;sendAudioDisabled=!0;stopAudioDisabled=!0;loggedIn;userData;allUsers=[];ngOnInit(){this.loggedIn()&&this.connect()}connect(){let t=y.wsBaseUrl;this.connection=new WebSocket(t),this.connection.onopen=()=>{console.log("connection open",this.connection.readyState),this.sendAudioDisabled=!1,this.connection.readyState==1&&this.connection.send(this.userData().username)},this.connection.onmessage=e=>{typeof e.data=="string"?this.playThatText(e.data):this.playThatSong(e.data)},this.connection.onerror=e=>{console.error("WebSocket error:",e)},this.connection.onclose=()=>{console.log("WebSocket connection closed")}}sendAudio(){navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(t=>{this.sendAudioDisabled=!0,this.stopAudioDisabled=!1,this.mediaRecorder=new MediaRecorder(t,{audioBitsPerSecond:1e4}),this.mediaRecorder.ondataavailable=e=>{this.audioChunks.push(e.data)},this.mediaRecorder.onstop=()=>{let e=new Blob(this.audioChunks,{type:"audio/ogg"});this.audioChunks=[],this.connection.send(e),t.getTracks().forEach(n=>n.stop())},this.mediaRecorder.start(100)})}stopAudio(){this.sendAudioDisabled=!1,this.stopAudioDisabled=!0,this.mediaRecorder.stop()}playThatSong(t){let e=URL.createObjectURL(t);new Audio(e).play()}playThatText(t){this.allUsers=t.split(",")}ngOnDestroy(){this.connection.close()}static \u0275fac=function(e){return new(e||i)(u(A),u(T))};static \u0275cmp=f({type:i,selectors:[["app-livechat"]],standalone:!0,features:[D],decls:2,vars:1,consts:[["aria-label","Fish selection"],["mat-stroked-button","","color","accent",3,"click","disabled"],["mat-stroked-button","","color","error",3,"click","disabled"]],template:function(e,n){e&1&&g(0,U,7,2)(1,E,2,0,"h1"),e&2&&v(n.loggedIn()?0:1)},dependencies:[B,I,M,w]})};export{R as a};
