import{a as $}from"./chunk-NADY5ITI.js";import{a as _e}from"./chunk-XGVRN2MF.js";import{a as I,b as Ce}from"./chunk-EC5F7UQQ.js";import{a as fe}from"./chunk-6CXDLTZ2.js";import{b as x}from"./chunk-KXISM3GI.js";import{a as de,b as pe,c as ue,d as D,e as U}from"./chunk-66Y57P4H.js";import{a as be}from"./chunk-BNSUTVF6.js";import{a as le}from"./chunk-FKLT2GNY.js";import{a as A,d as E,g as B,i as P,l as R,p as j,q as N,t as L}from"./chunk-56PE2EOK.js";import{a as ve}from"./chunk-E3A6DF3P.js";import{ea as se}from"./chunk-ZKUKGSZU.js";import{d as ae,g as ce}from"./chunk-BXXMRR3V.js";import{c as re,f as T}from"./chunk-3LVO7KZI.js";import"./chunk-6XXA7HXI.js";import{$a as u,Ab as m,Bb as a,Cb as b,Cc as me,Da as Y,Ea as w,F as J,Gb as C,Jb as _,L as V,Lb as c,Tb as s,Ub as h,Vb as ee,Wb as te,X as Q,Xa as Z,Yb as g,_a as o,ac as O,ba as W,bc as ie,cc as ne,ga as X,ja as S,ob as f,p as G,pb as y,qb as l,rc as oe,sa as d,ta as p,vb as v,yb as k,zb as F}from"./chunk-LCQMFSVS.js";var M=class i{constructor(t){this.http=t}baseUrl=T.baseUrl;getCommentOnVideo(t){return this.http.get(this.baseUrl+"/comment/video/"+t)}postCommentOnVideo(t){return this.http.post(this.baseUrl+"/comment/video/"+t.VideoId,t)}getSubcommentOnComment(t){return this.http.get(this.baseUrl+"/comment/"+t)}postSubcommentOnComment(t){return this.http.post(this.baseUrl+"/comment/"+t.id,t)}static \u0275fac=function(e){return new(e||i)(X(re))};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})};var we=(i,t)=>t.id;function Ve(i,t){if(i&1){let e=C();m(0,"a",2),_("click",function(){d(e);let r=c();return p(r.showSubcomment=!r.showSubcomment)}),s(1),a()}if(i&2){let e,n=c();o(),ee("",(e=n.comment().subcomment)==null?null:e.length," replies")}}function ye(i,t){if(i&1){let e=C();m(0,"a",2),_("click",function(){d(e);let r=c();return p([r.addUserName(),r.showReply=!r.showReply])}),s(1),a()}if(i&2){let e=c();o(),h(e.showReply?"Cancel":"Reply")}}function ke(i,t){if(i&1){let e=C();b(0,"br"),m(1,"mat-form-field",3)(2,"mat-label"),s(3,"Leave a comment"),a(),b(4,"input",4),m(5,"button",5),_("click",function(){d(e);let r=c();return p(r.postComment())}),m(6,"mat-icon"),s(7,"send"),a()()()}if(i&2){let e=c();o(),l("subscriptSizing","dynamic"),o(3),l("formControl",e.commentFormControl),o(),l("disabled",e.commentFormControl.value.trim().length==0),y("aria-label","send")}}function Fe(i,t){if(i&1){let e=C();m(0,"app-comment-subcomment",7),_("updateComments",function(){d(e);let r=c(2);return p(r.updateTopComments())}),a()}if(i&2){let e=t.$implicit,n=c(2);l("comment",e)("videoId",n.videoId())}}function Oe(i,t){if(i&1&&(k(0,Fe,1,2,"app-comment-subcomment",6,we),O(2,"sort")),i&2){let e=c();F(ne(2,0,e.comment().subcomment,!0,!1))}}var z=class i{constructor(t,e){this._authService=t;this._commentService=e;this.loggedIn=this._authService.loggedIn}comment=w.required();videoId=w.required();updateComments=Y();loggedIn;showReply=!1;showSubcomment=!1;commentFormControl=new j("",{nonNullable:!0});postComment(){let t={id:this.comment().id,VideoId:this.videoId(),comment:this.commentFormControl.value,parentcommentid:this.comment().parentcommentid||this.comment().id};this._commentService.postSubcommentOnComment(t).subscribe({next:e=>{this.updateComments.emit(!0),this.commentFormControl.reset(),this.showReply=!1}})}addUserName(){this.commentFormControl.setValue(`@${this.comment().User?.username} `)}updateTopComments(){this.updateComments.emit(!0)}static \u0275fac=function(e){return new(e||i)(u(x),u(M))};static \u0275cmp=S({type:i,selectors:[["app-comment-subcomment"]],inputs:{comment:[1,"comment"],videoId:[1,"videoId"]},outputs:{updateComments:"updateComments"},standalone:!0,features:[g],decls:7,vars:5,consts:[[1,"p"],["mat-button",""],["mat-button","",3,"click"],["appearance","outline",2,"width","100%",3,"subscriptSizing"],["matInput","",3,"formControl"],["mat-icon-button","","matSuffix","",3,"click","disabled"],[3,"comment","videoId"],[3,"updateComments","comment","videoId"]],template:function(e,n){if(e&1&&(m(0,"div",0)(1,"div"),s(2),a(),f(3,Ve,2,1,"a",1)(4,ye,2,1,"a",1)(5,ke,8,4)(6,Oe,3,4),a()),e&2){let r,q;o(2),h("@"+((r=n.comment().User)==null?null:r.username)+" : "+n.comment().comment),o(),v(n.comment().subcomment&&((q=n.comment().subcomment)!=null&&q.length)?3:-1),o(),v(n.loggedIn()?4:-1),o(),v(n.showReply?5:-1),o(),v(n.showSubcomment?6:-1)}},dependencies:[i,B,$,A,I,U,pe,D,E,L,P,R,N,le],styles:[".p[_ngcontent-%COMP%]{border:1px solid gray;padding:8px;border-radius:6px;margin-bottom:8px}"]})};var Te=(i,t)=>t.id;function De(i,t){if(i&1){let e=C();m(0,"div",0)(1,"mat-form-field",4)(2,"mat-label"),s(3,"Leave a comment"),a(),b(4,"textarea",5),m(5,"button",6),_("click",function(){d(e);let r=c();return p(r.postComment())}),m(6,"mat-icon"),s(7,"send"),a()()()()}if(i&2){let e=c();o(),l("subscriptSizing","dynamic"),o(3),l("formControl",e.commentFormControl),o(),l("disabled",e.commentFormControl.value.trim().length==0),y("aria-label","send")}}function Ue(i,t){i&1&&(m(0,"p",1),s(1,"Login to comment"),a())}function Ae(i,t){if(i&1){let e=C();m(0,"app-comment-subcomment",7),_("updateComments",function(){d(e);let r=c();return p(r.getComments())}),a()}if(i&2){let e=t.$implicit,n=c();l("comment",e)("videoId",n.videoId())}}var K=class i{constructor(t,e){this._commentService=t;this._authService=e;oe(()=>{this.getComments()})}videoId=w.required();comments=[];loggedIn;commentFormControl=new j("",{nonNullable:!0});ngOnInit(){this.loggedIn=this._authService.loggedIn}getComments(){this._commentService.getCommentOnVideo(this.videoId()).pipe(V(500)).subscribe({next:t=>{this.comments=t},error:t=>{console.error(t)}})}postComment(){let t={comment:this.commentFormControl.value.trim(),VideoId:this.videoId()};this._commentService.postCommentOnVideo(t).subscribe({next:e=>{this.getComments(),this.commentFormControl.reset()}})}getSubcomment(){}postSubcomment(){}static \u0275fac=function(e){return new(e||i)(u(M),u(x))};static \u0275cmp=S({type:i,selectors:[["app-comment"]],inputs:{videoId:[1,"videoId"]},standalone:!0,features:[g],decls:5,vars:1,consts:[[1,"commentsinput"],[1,"nologincommentsinput"],[1,"comments"],[3,"comment","videoId"],["appearance","outline",3,"subscriptSizing"],["rows","3","matInput","",3,"formControl"],["mat-icon-button","","matSuffix","",3,"click","disabled"],[3,"updateComments","comment","videoId"]],template:function(e,n){e&1&&(f(0,De,8,4,"div",0)(1,Ue,2,0,"p",1),m(2,"div",2),k(3,Ae,1,2,"app-comment-subcomment",3,Te),a()),e&2&&(v(n.loggedIn()?0:1),o(3),F(n.comments))},dependencies:[B,A,$,D,Ce,I,E,L,P,R,N,z],styles:[".comments[_ngcontent-%COMP%]{height:320px;overflow-y:scroll}.comments[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.commentsinput[_ngcontent-%COMP%]{margin:0 0 8px;width:100%;background-color:#fff}.commentsinput[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}@media (min-width: 1200px){.comments[_ngcontent-%COMP%]{height:400px}}.nologincommentsinput[_ngcontent-%COMP%]{text-align:center}"]})};function Ee(i,t){if(i&1){let e=C();m(0,"button",10),_("click",function(){d(e);let r=c(2);return p(r.subscribe())}),s(1,"Subscribe"),a(),s(2," \xA0 ")}}function Be(i,t){if(i&1){let e=C();m(0,"button",11),_("click",function(){d(e);let r=c(2);return p(r.deleteVideo())}),s(1,"Delete this video"),a()}}function Pe(i,t){if(i&1){let e=C();m(0,"div",2)(1,"div",4)(2,"h1",5),s(3),a(),m(4,"div")(5,"button",6),_("click",function(){d(e);let r=c();return p(r.share())}),m(6,"mat-icon"),s(7,"share"),a()()()(),m(8,"h4",7),s(9),a(),m(10,"h5",7),s(11),O(12,"date"),a(),m(13,"h5",7)(14,"a",8),s(15),a()(),m(16,"div"),f(17,Ee,3,0),m(18,"button",9),_("click",function(){d(e);let r=c();return p(r.report())}),s(19,"Report"),a()(),f(20,Be,2,0,"button"),a()}if(i&2){let e=c();o(3),h(e.videoDetail.title),o(6),h(e.videoDetail.description),o(2),te(" ",e.videoDetail.views," views | ",ie(12,8,e.videoDetail.createdAt,"d MMM y , h:mm a"),""),o(3),l("routerLink","/user/"+e.videoDetail.UserId),o(),h("@"+(e.videoDetail.User==null?null:e.videoDetail.User.username)),o(2),v(e.isLoggedIn()?17:-1),o(3),v(e.isAdmin()?20:-1)}}var xe=class i{constructor(t,e,n,r,q,Re){this._route=t;this._videoService=e;this._userService=n;this._matSnackBar=r;this._authService=q;this._adminService=Re;this.isAdmin=this._authService.isAdmin,this.isLoggedIn=this._authService.loggedIn}baseUrl=`${T.baseUrl}/video/`;videoId;videoDetail;isAdmin;isLoggedIn;ngOnInit(){this._route.paramMap.subscribe(t=>{this.videoId=Number(t.get("VideoId"))}),this._route.paramMap.pipe(V(500),Q(t=>this._videoService.getVideoDetails(this.videoId)),J(t=>G(t))).subscribe({next:t=>{this.videoDetail=t},error:t=>{console.error(t)}})}subscribe(){this._userService.subscribeToUser({UserId:this.videoDetail.UserId}).subscribe({next:t=>{this._matSnackBar.open("Subscribed","OK",{duration:2e3})},error:t=>{this._matSnackBar.open(t.error.message,"OK",{duration:2e3})}})}deleteVideo(){this._adminService.deleteVideoById(this.videoId).subscribe(t=>{this._matSnackBar.open("Deleted","OK",{duration:2e3})})}report(){this._videoService.reportVideo(this.videoId).subscribe(t=>{this._matSnackBar.open("Reported","OK",{duration:2e3})})}share(){navigator.share&&navigator.share({title:this.videoDetail.title,text:this.videoDetail.description,url:window.location.href}).then(()=>{}).catch(t=>{console.log("Error sharing:",t)})}static \u0275fac=function(e){return new(e||i)(u(ae),u(_e),u(ve),u(fe),u(x),u(be))};static \u0275cmp=S({type:i,selectors:[["app-video"]],standalone:!0,features:[g],decls:4,vars:3,consts:[[1,"videocontainer"],["autoplay","","controls","",3,"src"],[1,"videodetailcontainer"],[3,"videoId"],[2,"display","flex","justify-content","space-between","align-items","center","margin-bottom","8px"],[2,"margin-bottom","0px"],["mat-mini-fab","","matTooltip","Share",1,"orangebutton",3,"click"],[2,"margin-bottom","8px"],[3,"routerLink"],["mat-flat-button","","color","warn",3,"click"],["mat-flat-button","","color","accent",2,"background-color","orange",3,"click"],[3,"click"]],template:function(e,n){e&1&&(m(0,"div",0),b(1,"video",1),f(2,Pe,21,11,"div",2),b(3,"app-comment",3),a()),e&2&&(o(),l("src",n.baseUrl+"/"+n.videoId,Z),o(),v(n.videoDetail?2:-1),o(),l("videoId",n.videoId))},dependencies:[K,me,ce,I,se,U,de,ue],styles:["video[_ngcontent-%COMP%]{border:1px solid black;border-radius:6px;width:100%;max-height:70vh}.videocontainer[_ngcontent-%COMP%]{width:96%;margin:auto}.videodetailcontainer[_ngcontent-%COMP%]{border:1px solid black;border-radius:6px;padding:8px;margin-bottom:8px}@media (min-width: 1200px){.videocontainer[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}video[_ngcontent-%COMP%]{width:70%}app-comment[_ngcontent-%COMP%]{flex-grow:1}.videodetailcontainer[_ngcontent-%COMP%]{order:3;width:70%}}"]})};export{xe as VideoComponent};
