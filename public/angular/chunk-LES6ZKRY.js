import{a as B}from"./chunk-KGN64SZJ.js";import{b as S}from"./chunk-3SNAULVD.js";import{b as E,c,e as b,f as M,g as y,i as f,k as F,l as R,m as x,n as N,o as k,s as q}from"./chunk-KVJXDR5M.js";import{a as G}from"./chunk-IBKC2Y7G.js";import"./chunk-43I6NMCC.js";import"./chunk-CARY4E7O.js";import{R as _}from"./chunk-RVYB3KSR.js";import{f as w}from"./chunk-PAKZAOWW.js";import"./chunk-DFXTXL7R.js";import{Ab as u,Hb as v,Rb as n,Wb as C,Ya as m,Za as s,ha as h,mb as l,ob as p,tb as d,yb as a,zb as r}from"./chunk-CIG25PHL.js";function D(o,e){o&1&&(a(0,"mat-error"),n(1," Username is required "),r())}function P(o,e){o&1&&(a(0,"mat-error"),n(1," Password is required "),r())}function A(o,e){o&1&&(a(0,"mat-error"),n(1," Password is required "),r())}function T(o,e){o&1&&(a(0,"mat-error"),n(1," Password do not match "),r())}var I=class o{constructor(e,t,i){this._authenticateService=e;this._matSnackBar=t;this._router=i}registerform=new y({username:new f("",[c.required]),password:new f("",[c.required]),repeatpassword:new f("",[c.required])},{updateOn:"blur",validators:this.doPasswordMatch});doPasswordMatch(e){let t=e;return console.log(t),t.get("password")?.value==t.get("repeatpassword")?.value?null:{dontmatch:!0}}matcher=new g;register(){let e={username:this.registerform.get("username")?.value?.trim()??"default",password:this.registerform.get("password")?.value?.trim()??"default"};this._authenticateService.register(e).subscribe({next:t=>{this._matSnackBar.open(t.message,"OK",{duration:3e3}),this._router.navigate(["/login"])},error:t=>{this._matSnackBar.open(t.error.message,"OK",{duration:2e3})}})}static \u0275fac=function(t){return new(t||o)(s(S),s(G),s(w))};static \u0275cmp=h({type:o,selectors:[["app-register"]],standalone:!0,features:[C],decls:19,vars:6,consts:[[1,"register",3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","username"],["matInput","","type","password","formControlName","password"],["matInput","","type","password","formControlName","repeatpassword",3,"errorStateMatcher"],["mat-flat-button","","color","primary",3,"click","disabled"]],template:function(t,i){t&1&&(a(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),n(3,"username"),r(),u(4,"input",2),l(5,D,2,0,"mat-error"),r(),a(6,"mat-form-field",1)(7,"mat-label"),n(8,"password"),r(),u(9,"input",3),l(10,P,2,0,"mat-error"),r(),a(11,"mat-form-field",1)(12,"mat-label"),n(13,"repeat password"),r(),u(14,"input",4),l(15,A,2,0,"mat-error")(16,T,2,0,"mat-error"),r(),a(17,"button",5),v("click",function(){return i.register()}),n(18,"Register"),r()()),t&2&&(p("formGroup",i.registerform),m(5),d(i.registerform.controls.username.hasError("required")?5:-1),m(5),d(i.registerform.controls.password.hasError("required")?10:-1),m(4),p("errorStateMatcher",i.matcher),m(),d(i.registerform.controls.repeatpassword.hasError("required")?15:i.registerform.hasError("dontmatch")?16:-1),m(2),p("disabled",i.registerform.invalid))},dependencies:[q,N,k,B,_,x,E,b,M,F,R],styles:[".register[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;width:80%;margin:auto}"]})},g=class{isErrorState(e,t){let i=t&&t.hasError("dontmatch");return!!((e&&e.invalid||i)&&e&&(e.dirty||e.touched))}};export{I as RegisterComponent};