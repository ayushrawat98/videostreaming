import{a as _e}from"./chunk-OEEZQIWF.js";import{a as ue}from"./chunk-6LTARJE7.js";import{a as M,b as Ce}from"./chunk-5Z73TVS5.js";import{a as ve}from"./chunk-M3KYLOYJ.js";import{d as se,g as de}from"./chunk-7TACDOUA.js";import{a as L}from"./chunk-2AVGDEVC.js";import{a as be}from"./chunk-VGOS47CB.js";import{a as fe}from"./chunk-YBB3AIFO.js";import{b as I}from"./chunk-4NPP5BVZ.js";import{a as E,d as $,g as P,i as A,m as B,q as R,r as N,u as j}from"./chunk-VBE3IEDN.js";import{a as le,b as pe,c as y,d as w}from"./chunk-VN6LWNMF.js";import{c as ce,f as U}from"./chunk-UYQAHJAI.js";import{$ as W,Ab as r,Ba as Y,Bb as a,Ca as S,Cb as g,Cc as ae,Gb as C,Jb as v,K as J,Lb as c,Pb as ee,Qb as te,Rb as ie,Tb as s,Ub as x,Va as Z,Vb as F,Wb as ne,Ya as m,Yb as h,Za as l,ac as T,bc as oe,cc as me,ea as X,ha as f,mb as b,pb as D,qa as p,qb as d,ra as u,rc as re,vb as _,yb as k,zb as O}from"./chunk-LRPHIVML.js";var V=class i{constructor(t){this.http=t}baseUrl=U.baseUrl;getCommentOnVideo(t){return this.http.get(this.baseUrl+"/comment/video/"+t)}postCommentOnVideo(t){return this.http.post(this.baseUrl+"/comment/video/"+t.VideoId,t)}getSubcommentOnComment(t){return this.http.get(this.baseUrl+"/comment/"+t)}postSubcommentOnComment(t){return this.http.post(this.baseUrl+"/comment/"+t.id,t)}static \u0275fac=function(e){return new(e||i)(X(ce))};static \u0275prov=W({token:i,factory:i.\u0275fac,providedIn:"root"})};var ye=(i,t)=>t.id;function we(i,t){if(i&1){let e=C();r(0,"a",2),v("click",function(){p(e);let o=c();return u(o.showSubcomment=!o.showSubcomment)}),s(1),a()}if(i&2){let e,n=c();m(),F("",(e=n.comment().subcomment)==null?null:e.length," replies")}}function Me(i,t){if(i&1){let e=C();r(0,"a",2),v("click",function(){p(e);let o=c();return u([o.addUserName(),o.showReply=!o.showReply])}),s(1),a()}if(i&2){let e=c();m(),x(e.showReply?"Cancel":"Reply")}}function Ve(i,t){if(i&1){let e=C();g(0,"br"),r(1,"mat-form-field",3)(2,"mat-label"),s(3,"Leave a comment"),a(),g(4,"input",4),r(5,"button",5),v("click",function(){p(e);let o=c();return u(o.postComment())}),r(6,"mat-icon"),s(7,"send"),a()()()}if(i&2){let e=c();m(),d("subscriptSizing","dynamic"),m(3),d("formControl",e.commentFormControl),m(),d("disabled",e.commentFormControl.value.trim().length==0),D("aria-label","send")}}function De(i,t){if(i&1){let e=C();r(0,"app-comment-subcomment",7),v("updateComments",function(){p(e);let o=c(2);return u(o.updateTopComments())}),a()}if(i&2){let e=t.$implicit,n=c(2);d("comment",e)("videoId",n.videoId())}}function ke(i,t){if(i&1&&(k(0,De,1,2,"app-comment-subcomment",6,ye),T(2,"sort")),i&2){let e=c();O(me(2,0,e.comment().subcomment,!0,!1))}}var z=class i{constructor(t,e){this._authService=t;this._commentService=e;this.loggedIn=this._authService.loggedIn}comment=S.required();videoId=S.required();updateComments=Y();loggedIn;showReply=!1;showSubcomment=!1;commentFormControl=new R("",{nonNullable:!0});postComment(){let t={id:this.comment().id,VideoId:this.videoId(),comment:this.commentFormControl.value,parentcommentid:this.comment().parentcommentid||this.comment().id};this._commentService.postSubcommentOnComment(t).subscribe({next:e=>{this.updateComments.emit(!0),this.commentFormControl.reset(),this.showReply=!1}})}addUserName(){this.commentFormControl.setValue(`@${this.comment().User?.username} `)}updateTopComments(){this.updateComments.emit(!0)}static \u0275fac=function(e){return new(e||i)(l(I),l(V))};static \u0275cmp=f({type:i,selectors:[["app-comment-subcomment"]],inputs:{comment:[1,"comment"],videoId:[1,"videoId"]},outputs:{updateComments:"updateComments"},standalone:!0,features:[h],decls:7,vars:5,consts:[[1,"p"],["mat-button",""],["mat-button","",3,"click"],["appearance","outline",2,"width","100%",3,"subscriptSizing"],["matInput","",3,"formControl"],["mat-icon-button","","matSuffix","",3,"click","disabled"],[3,"comment","videoId"],[3,"updateComments","comment","videoId"]],template:function(e,n){if(e&1&&(r(0,"div",0)(1,"div"),s(2),a(),b(3,we,2,1,"a",1)(4,Me,2,1,"a",1)(5,Ve,8,4)(6,ke,3,4),a()),e&2){let o,H;m(2),x("@"+((o=n.comment().User)==null?null:o.username)+" : "+n.comment().comment),m(),_(n.comment().subcomment&&((H=n.comment().subcomment)!=null&&H.length)?3:-1),m(),_(n.loggedIn()?4:-1),m(),_(n.showReply?5:-1),m(),_(n.showSubcomment?6:-1)}},dependencies:[i,P,L,E,M,w,pe,y,$,j,A,B,N,ve],styles:[".p[_ngcontent-%COMP%]{border:1px solid darkgray;padding:8px;border-radius:6px;margin-bottom:8px}"]})};var Oe=(i,t)=>t.id;function Fe(i,t){if(i&1){let e=C();r(0,"div",0)(1,"mat-form-field",4)(2,"mat-label"),s(3,"Leave a comment"),a(),g(4,"textarea",5),r(5,"button",6),v("click",function(){p(e);let o=c();return u(o.postComment())}),r(6,"mat-icon"),s(7,"send"),a()()()()}if(i&2){let e=c();m(),d("subscriptSizing","dynamic"),m(3),d("formControl",e.commentFormControl),m(),d("disabled",e.commentFormControl.value.trim().length==0),D("aria-label","send")}}function Te(i,t){i&1&&(r(0,"p",1),s(1,"Login to comment"),a())}function Ue(i,t){if(i&1){let e=C();r(0,"app-comment-subcomment",7),v("updateComments",function(){p(e);let o=c();return u(o.getComments())}),a()}if(i&2){let e=t.$implicit,n=c();d("comment",e)("videoId",n.videoId())}}var K=class i{constructor(t,e){this._commentService=t;this._authService=e;re(()=>{this.getComments()})}videoId=S.required();comments=[];loggedIn;commentFormControl=new R("",{nonNullable:!0});ngOnInit(){this.loggedIn=this._authService.loggedIn}getComments(){this._commentService.getCommentOnVideo(this.videoId()).pipe(J(500)).subscribe({next:t=>{this.comments=t},error:t=>{console.error(t)}})}postComment(){let t={comment:this.commentFormControl.value.trim(),VideoId:this.videoId()};this._commentService.postCommentOnVideo(t).subscribe({next:e=>{this.getComments(),this.commentFormControl.reset()}})}getSubcomment(){}postSubcomment(){}static \u0275fac=function(e){return new(e||i)(l(V),l(I))};static \u0275cmp=f({type:i,selectors:[["app-comment"]],inputs:{videoId:[1,"videoId"]},standalone:!0,features:[h],decls:5,vars:1,consts:[[1,"commentsinput"],[1,"nologincommentsinput"],[1,"comments"],[3,"comment","videoId"],["appearance","outline",3,"subscriptSizing"],["rows","3","matInput","",3,"formControl"],["mat-icon-button","","matSuffix","",3,"click","disabled"],[3,"updateComments","comment","videoId"]],template:function(e,n){e&1&&(b(0,Fe,8,4,"div",0)(1,Te,2,0,"p",1),r(2,"div",2),k(3,Ue,1,2,"app-comment-subcomment",3,Oe),a()),e&2&&(_(n.loggedIn()?0:1),m(3),O(n.comments))},dependencies:[P,E,L,y,Ce,M,$,j,A,B,N,z],styles:[".comments[_ngcontent-%COMP%]{height:320px;overflow-y:scroll}.comments[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.commentsinput[_ngcontent-%COMP%]{margin:0 0 8px;width:100%;background-color:#fff}.commentsinput[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}@media (min-width: 1200px){.comments[_ngcontent-%COMP%]{height:400px}}.nologincommentsinput[_ngcontent-%COMP%]{text-align:center}"]})};function Ee(i,t){if(i&1){let e=C();r(0,"button",7),v("click",function(){p(e);let o=c(2);return u(o.subscribe())}),s(1),a(),s(2," \xA0 ")}if(i&2){let e=c(2);m(),F(" ",e.amISub?"Unsubscribe":"Subscribe"," ")}}function $e(i,t){if(i&1){let e=C();r(0,"button",8),v("click",function(){p(e);let o=c(2);return u(o.deleteVideo())}),s(1,"Delete this video"),a()}}function Pe(i,t){if(i&1){let e=C();r(0,"div",0)(1,"div",1)(2,"h1",2),s(3),a(),r(4,"div")(5,"button",3),v("click",function(){p(e);let o=c();return u(o.share())}),r(6,"mat-icon"),s(7,"share"),a()()()(),r(8,"h4",4),s(9),a(),r(10,"h5",4),s(11),T(12,"date"),a(),r(13,"h5",4)(14,"a",5),s(15),a()(),r(16,"div"),b(17,Ee,3,1),r(18,"button",6),v("click",function(){p(e);let o=c();return u(o.report())}),s(19,"Report"),a()(),b(20,$e,2,0,"button"),a()}if(i&2){let e=c();m(3),x(e.videoDetail.title),m(6),x(e.videoDetail.description),m(2),ne(" ",e.videoDetail.views," views | ",oe(12,8,e.videoDetail.createdAt,"d MMM y , h:mm a"),""),m(3),d("routerLink","/user/"+e.videoDetail.UserId),m(),x("@"+(e.videoDetail.User==null?null:e.videoDetail.User.username)),m(2),_(e.isLoggedIn()?17:-1),m(3),_(e.isAdmin()?20:-1)}}var Q=class i{constructor(t,e,n,o,H){this._adminService=t;this._videoService=e;this._userService=n;this._matSnackBar=o;this._authService=H;this.isAdmin=this._authService.isAdmin,this.isLoggedIn=this._authService.loggedIn}videoId=S.required();videoDetail;isAdmin;isLoggedIn;videoDetail$;subscribe$;report$;amISubscribed$;ngOnInit(){this.videoDetail$=this._videoService.getVideoDetails(this.videoId()).subscribe({next:t=>{this.videoDetail=t,this.amISubscribed()}})}subscribe(){this.subscribe$=this._userService.subscribeToUser({UserId:this.videoDetail.UserId}).subscribe({next:t=>{this._matSnackBar.open(t.message,"OK",{duration:2e3}),this.amISub=t.message=="Subscribed"},error:t=>{this._matSnackBar.open(t.error.message,"OK",{duration:2e3})}})}deleteVideo(){this._adminService.deleteVideoById(this.videoId()).subscribe(t=>{this._matSnackBar.open("Deleted","OK",{duration:2e3})})}report(){this.report$=this._videoService.reportVideo(this.videoId()).subscribe(t=>{this._matSnackBar.open("Reported","OK",{duration:2e3})})}share(){navigator.share&&navigator.share({title:this.videoDetail.title,text:this.videoDetail.description,url:window.location.href}).then(()=>{}).catch(t=>{console.log("Error sharing:",t)})}amISub;amISubscribed(){this.amISubscribed$=this._userService.amISubscribed(this.videoDetail.UserId).subscribe({next:t=>{this.amISub=t.message=="yes"}})}ngOnDestroy(){this.videoDetail$&&this.videoDetail$.unsubscribe(),this.subscribe$&&this.subscribe$.unsubscribe(),this.report$&&this.report$.unsubscribe(),this.amISubscribed$&&this.amISubscribed$.unsubscribe()}static \u0275fac=function(e){return new(e||i)(l(_e),l(ue),l(fe),l(be),l(I))};static \u0275cmp=f({type:i,selectors:[["app-videodetail"]],inputs:{videoId:[1,"videoId"]},standalone:!0,features:[h],decls:1,vars:1,consts:[[1,"videodetailcontainer"],[2,"display","flex","justify-content","space-between","align-items","center","margin-bottom","8px"],[2,"margin-bottom","0px"],["mat-icon-button","","matTooltip","Share",1,"orangebutton",3,"click"],[2,"margin-bottom","8px"],[3,"routerLink"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","accent",2,"color","orange",3,"click"],[3,"click"]],template:function(e,n){e&1&&b(0,Pe,21,11,"div",0),e&2&&_(n.videoDetail?0:-1)},dependencies:[M,de,w,le,y,ae],styles:[".videodetailcontainer[_ngcontent-%COMP%]{border:1px solid darkgray;border-radius:6px;padding:8px;margin-bottom:8px}"]})};var Ae=["videoplayer"],ge=class i{constructor(t){this._route=t}baseUrl=`${U.baseUrl}/video/`;videoId;videoPlayer;parammap$;ngOnInit(){this.parammap$=this._route.paramMap.subscribe(t=>{this.videoId=Number(t.get("VideoId"))})}ngOnDestroy(){this.videoPlayer.nativeElement.src="",this.videoPlayer.nativeElement.load(),this.parammap$&&this.parammap$.unsubscribe()}static \u0275fac=function(e){return new(e||i)(l(se))};static \u0275cmp=f({type:i,selectors:[["app-video"]],viewQuery:function(e,n){if(e&1&&ee(Ae,7),e&2){let o;te(o=ie())&&(n.videoPlayer=o.first)}},standalone:!0,features:[h],decls:5,vars:3,consts:[["videoplayer",""],[1,"container"],["autoplay","","controls","",1,"shadow",3,"src"],[3,"videoId"]],template:function(e,n){e&1&&(r(0,"div",1),g(1,"video",2,0)(3,"app-videodetail",3)(4,"app-comment",3),a()),e&2&&(m(),d("src",n.baseUrl+n.videoId,Z),m(2),d("videoId",n.videoId),m(),d("videoId",n.videoId))},dependencies:[K,w,Q],styles:[".container[_ngcontent-%COMP%]{width:96%;margin:auto}video[_ngcontent-%COMP%]{border-radius:6px;width:100%;max-height:70vh}@media (min-width: 1200px){.container[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}video[_ngcontent-%COMP%]{width:70%}app-comment[_ngcontent-%COMP%]{width:28%}app-videodetail[_ngcontent-%COMP%]{order:3;width:70%}}"]})};export{ge as VideoComponent};
