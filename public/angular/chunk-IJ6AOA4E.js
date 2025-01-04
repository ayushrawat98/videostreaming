import{a as D}from"./chunk-RECW33DC.js";import{a as C}from"./chunk-OFLDPECS.js";import{b as y,c as d,e as b,f as w,g as M,i as f,k,l as E,m as x,n as B,o as F,s as L}from"./chunk-FVJTX4ET.js";import{a as I}from"./chunk-P75LTJNG.js";import{f as h}from"./chunk-F5SPSE3B.js";import"./chunk-OZDF3UU7.js";import"./chunk-CARY4E7O.js";import{X as S}from"./chunk-KND5QEEJ.js";import"./chunk-SC2FGQQL.js";import{Ab as c,Jb as _,Tb as a,Ya as m,Yb as v,Za as l,ha as g,mb as s,ob as p,tb as u,yb as n,zb as t}from"./chunk-RHHFVKVY.js";function q(o,i){o&1&&(n(0,"mat-error"),a(1," Username is required "),t())}function G(o,i){o&1&&(n(0,"mat-error"),a(1," Password is required "),t())}var N=class o{constructor(i,e,r){this._authenticate=i;this._matSnackBar=e;this._router=r}loginform=new M({username:new f("",[d.required]),password:new f("",[d.required])},{updateOn:"blur"});login(){let i={username:this.loginform.get("username")?.value??"Default username",password:this.loginform.get("password")?.value??"Default password"};this._authenticate.login(i).subscribe({next:e=>{this._authenticate.user_key.set(e.message),this._matSnackBar.open("logged in","OK",{duration:2e3}),this._router.navigate(["/profile"]),console.log(this._authenticate.user_key)},error:e=>{console.log(e),this._matSnackBar.open(e.error.message,"OK",{duration:2e3})}})}static \u0275fac=function(e){return new(e||o)(l(C),l(I),l(h))};static \u0275cmp=g({type:o,selectors:[["app-login"]],standalone:!0,features:[v],decls:13,vars:4,consts:[[1,"login",3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","username"],["matInput","","type","password","formControlName","password"],["mat-flat-button","","color","primary",3,"click","disabled"]],template:function(e,r){e&1&&(n(0,"div",0)(1,"mat-form-field",1)(2,"mat-label"),a(3,"username"),t(),c(4,"input",2),s(5,q,2,0,"mat-error"),t(),n(6,"mat-form-field",1)(7,"mat-label"),a(8,"password"),t(),c(9,"input",3),s(10,G,2,0,"mat-error"),t(),n(11,"button",4),_("click",function(){return r.login()}),a(12,"Login"),t()()),e&2&&(p("formGroup",r.loginform),m(5),u(r.loginform.controls.username.hasError("required")?5:-1),m(5),u(r.loginform.controls.password.hasError("required")?10:-1),m(),p("disabled",r.loginform.invalid))},dependencies:[L,B,F,D,S,x,y,b,w,k,E],styles:[".login[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;width:80%;margin:auto}"]})};export{N as LoginComponent};
