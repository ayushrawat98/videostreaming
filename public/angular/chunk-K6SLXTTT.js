import{a as jt}from"./chunk-27ZLKEVJ.js";import{C as Z,Y as K,Z as Dt,_ as Ot,a as Ft,aa as G,ba as Nt,ea as Lt,l as Rt,m as Tt,w as Bt}from"./chunk-WENJM24D.js";import{c as Pt,d as X,g as L,h as J,i as tt}from"./chunk-6XXA7HXI.js";import{c as Mt}from"./chunk-23CFTA3E.js";import{c as xt}from"./chunk-MJRUFRT7.js";import{$ as F,$a as ut,Aa as B,Ab as bt,Da as D,E as st,Eb as St,Gb as It,Hb as kt,I as rt,Ib as Ct,Jb as V,Kb as yt,Lb as At,M as ot,Nb as W,Ob as $,Pb as q,R as at,Rb as Y,Tb as Q,Ua as b,W as ct,Wb as A,Y as M,Ya as C,Za as l,a as _,aa as z,ca as v,e as et,ea as d,fa as R,ha as I,ia as U,ib as ft,ic as wt,j as u,ja as T,jb as _t,lc as Et,mb as H,nb as O,p,q as nt,qa as lt,qb as pt,ra as dt,rb as gt,t as g,tb as vt,uc as w,va as ht,wa as k,y as it,yb as N,za as mt,zb as y}from"./chunk-CZHVG3FW.js";var Yt=["*"],P;function Qt(){if(P===void 0&&(P=null,typeof window<"u")){let s=window;s.trustedTypes!==void 0&&(P=s.trustedTypes.createPolicy("angular#components",{createHTML:a=>a}))}return P}function E(s){return Qt()?.createHTML(s)||s}function zt(s){return Error(`Unable to find icon with the name "${s}"`)}function Zt(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function Ut(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function Ht(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}var h=class{constructor(a,t,e){this.url=a,this.svgText=t,this.options=e}},Kt=(()=>{class s{constructor(t,e,n,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,i){return this._addSvgIconConfig(t,e,new h(n,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,i){let r=this._sanitizer.sanitize(b.HTML,n);if(!r)throw Ht(n);let o=E(r);return this._addSvgIconConfig(t,e,new h("",o,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new h(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let i=this._sanitizer.sanitize(b.HTML,e);if(!i)throw Ht(e);let r=E(i);return this._addSvgIconSetConfig(t,new h("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(b.RESOURCE_URL,t);if(!e)throw Ut(t);let n=this._cachedIconsByUrl.get(e);return n?p(j(n)):this._loadSvgIconFromConfig(new h(t,null)).pipe(M(i=>this._cachedIconsByUrl.set(e,i)),g(i=>j(i)))}getNamedSvgIcon(t,e=""){let n=Vt(e,t),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):nt(zt(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?p(j(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(g(e=>j(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return p(n);let i=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(st(o=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(b.RESOURCE_URL,r.url)} failed: ${o.message}`;return this._errorHandler.handleError(new Error(m)),p(null)})));return it(i).pipe(g(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw zt(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(i),o=this._extractSvgIconFromSet(r,t,i.options);if(o)return o}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(M(e=>t.svgText=e),g(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?p(null):this._fetchIcon(t).pipe(M(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let r=i.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),n);let o=this._svgElementFromString(E("<svg></svg>"));return o.appendChild(r),this._setSvgAttributes(o,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(E("<svg></svg>")),n=t.attributes;for(let i=0;i<n.length;i++){let{name:r,value:o}=n[i];r!=="id"&&e.setAttribute(r,o)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,i=n?.withCredentials??!1;if(!this._httpClient)throw Zt();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(b.RESOURCE_URL,e);if(!r)throw Ut(e);let o=this._inProgressUrlFetches.get(r);if(o)return o;let c=this._httpClient.get(r,{responseType:"text",withCredentials:i}).pipe(g(m=>E(m)),ot(()=>this._inProgressUrlFetches.delete(r)),at());return this._inProgressUrlFetches.set(r,c),c}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(Vt(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](e,t);if(i)return Gt(i)?new h(i.url,null,i.options):new h(i,null)}}static{this.\u0275fac=function(e){return new(e||s)(d(xt,8),d(Mt),d(w,8),d(B))}}static{this.\u0275prov=F({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();function j(s){return s.cloneNode(!0)}function Vt(s,a){return s+":"+a}function Gt(s){return!!(s.url&&s.options)}var Xt=new v("MAT_ICON_DEFAULT_OPTIONS"),Jt=new v("mat-icon-location",{providedIn:"root",factory:te});function te(){let s=R(w),a=s?s.location:null;return{getPathname:()=>a?a.pathname+a.search:""}}var Wt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ee=Wt.map(s=>`[${s}]`).join(", "),ne=/^url\(['"]?#(.*?)['"]?\)$/,Be=(()=>{class s{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,i,r,o){this._elementRef=t,this._iconRegistry=e,this._location=i,this._errorHandler=r,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=et.EMPTY,o&&(o.color&&(this.color=this._defaultColor=o.color),o.fontSet&&(this.fontSet=o.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,i)=>{n.forEach(r=>{i.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ee),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)Wt.forEach(r=>{let o=e[i],c=o.getAttribute(r),m=c?c.match(ne):null;if(m){let f=n.get(o);f||(f=[],n.set(o,f)),f.push({name:r,value:m[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(rt(1)).subscribe(i=>this._setSvgElement(i),i=>{let r=`Error retrieving icon ${e}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(r))})}}static{this.\u0275fac=function(e){return new(e||s)(l(D),l(Kt),ht("aria-hidden"),l(Jt),l(B),l(Xt,8))}}static{this.\u0275cmp=I({type:s,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(O("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),gt(n.color?"mat-"+n.color:""),pt("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Et],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[_t,A],ngContentSelectors:Yt,decls:1,vars:0,template:function(e,n){e&1&&(yt(),At(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}}return s})(),De=(()=>{class s{static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275mod=U({type:s})}static{this.\u0275inj=z({imports:[Z,Z]})}}return s})();function ie(s,a){if(s&1){let t=St();N(0,"div",1)(1,"button",2),kt("click",function(){lt(t);let n=V();return dt(n.action())}),Y(2),y()()}if(s&2){let t=V();C(2),Q(" ",t.data.action," ")}}var se=["label"];function re(s,a){}var oe=Math.pow(2,31)-1,x=class{constructor(a,t){this._overlayRef=t,this._afterDismissed=new u,this._afterOpened=new u,this._onAction=new u,this._dismissedByAction=!1,this.containerInstance=a,a._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(a){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(a,oe))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},$t=new v("MatSnackBarData"),S=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},ae=(()=>{class s{static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275dir=T({type:s,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0})}}return s})(),ce=(()=>{class s{static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275dir=T({type:s,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0})}}return s})(),le=(()=>{class s{static{this.\u0275fac=function(e){return new(e||s)}}static{this.\u0275dir=T({type:s,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0})}}return s})(),de=(()=>{class s{constructor(t,e){this.snackBarRef=t,this.data=e}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static{this.\u0275fac=function(e){return new(e||s)(l(x),l($t))}}static{this.\u0275cmp=I({type:s,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[A],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(N(0,"div",0),Y(1),y(),H(2,ie,3,1,"div",1)),e&2&&(C(),Q(" ",n.data.message,`
`),C(),vt(n.hasAction?2:-1))},dependencies:[jt,ae,ce,le],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}}return s})(),he={snackBarState:Pt("state",[J("void, hidden",L({transform:"scale(0.8)",opacity:0})),J("visible",L({transform:"scale(1)",opacity:1})),tt("* => visible",X("150ms cubic-bezier(0, 0, 0.2, 1)")),tt("* => void, * => hidden",X("75ms cubic-bezier(0.4, 0.0, 1, 1)",L({opacity:0})))])},me=0,ue=(()=>{class s extends Ot{constructor(t,e,n,i,r){super(),this._ngZone=t,this._elementRef=e,this._changeDetectorRef=n,this._platform=i,this.snackBarConfig=r,this._document=R(w),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new u,this._onExit=new u,this._onEnter=new u,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${me++}`,this.attachDomPortal=o=>{this._assertNotAttached();let c=this._portalOutlet.attachDomPortal(o);return this._afterPortalAttached(),c},r.politeness==="assertive"&&!r.announcementMessage?this._live="assertive":r.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}onAnimationEnd(t){let{fromState:e,toState:n}=t;if((n==="void"&&e!=="void"||n==="hidden")&&this._completeExit(),n==="visible"){let i=this._onEnter;this._ngZone.run(()=>{i.next(),i.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(r=>t.classList.add(r)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,i="mdc-snackbar__label";n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let i=e[n],r=i.getAttribute("aria-owns");this._trackedModals.add(i),r?r.indexOf(t)===-1&&i.setAttribute("aria-owns",r+" "+t):i.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),e=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&e){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(n=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static{this.\u0275fac=function(e){return new(e||s)(l(mt),l(D),l(wt),l(Ft),l(S))}}static{this.\u0275cmp=I({type:s,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&(W(G,7),W(se,7)),e&2){let i;$(i=q())&&(n._portalOutlet=i.first),$(i=q())&&(n._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container","mdc-snackbar--open"],hostVars:1,hostBindings:function(e,n){e&1&&Ct("@state.done",function(r){return n.onAnimationEnd(r)}),e&2&&It("@state",n._animationState)},standalone:!0,features:[ft,A],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(N(0,"div",1)(1,"div",2,0)(3,"div",3),H(4,re,0,0,"ng-template",4),y(),bt(5,"div"),y()()),e&2&&(C(5),O("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[G],styles:['.mdc-snackbar{display:none;position:fixed;right:0;bottom:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;pointer-events:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-snackbar--opening,.mdc-snackbar--open,.mdc-snackbar--closing{display:flex}.mdc-snackbar--open .mdc-snackbar__label,.mdc-snackbar--open .mdc-snackbar__actions{visibility:visible}.mdc-snackbar__surface{padding-left:0;padding-right:8px;display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;transform:scale(0.8);opacity:0}.mdc-snackbar__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-snackbar__surface::before{border-color:CanvasText}}[dir=rtl] .mdc-snackbar__surface,.mdc-snackbar__surface[dir=rtl]{padding-left:8px;padding-right:0}.mdc-snackbar--open .mdc-snackbar__surface{transform:scale(1);opacity:1;pointer-events:auto}.mdc-snackbar--closing .mdc-snackbar__surface{transform:scale(1)}.mdc-snackbar__label{padding-left:16px;padding-right:8px;width:100%;flex-grow:1;box-sizing:border-box;margin:0;visibility:hidden;padding-top:14px;padding-bottom:14px}[dir=rtl] .mdc-snackbar__label,.mdc-snackbar__label[dir=rtl]{padding-left:8px;padding-right:16px}.mdc-snackbar__label::before{display:inline;content:attr(data-mdc-snackbar-label-text)}.mdc-snackbar__actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box;visibility:hidden}.mdc-snackbar__action+.mdc-snackbar__dismiss{margin-left:8px;margin-right:0}[dir=rtl] .mdc-snackbar__action+.mdc-snackbar__dismiss,.mdc-snackbar__action+.mdc-snackbar__dismiss[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-snack-bar-container{margin:8px;position:static}.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:344px}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container .mdc-snackbar__surface{min-width:100%}}@media(max-width: 480px),(max-width: 344px){.mat-mdc-snack-bar-container{width:100vw}}.mat-mdc-snack-bar-container .mdc-snackbar__surface{max-width:672px}.mat-mdc-snack-bar-container .mdc-snackbar__surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{background-color:var(--mdc-snackbar-container-color)}.mat-mdc-snack-bar-container .mdc-snackbar__surface{border-radius:var(--mdc-snackbar-container-shape)}.mat-mdc-snack-bar-container .mdc-snackbar__label{color:var(--mdc-snackbar-supporting-text-color)}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-size:var(--mdc-snackbar-supporting-text-size);font-family:var(--mdc-snackbar-supporting-text-font);font-weight:var(--mdc-snackbar-supporting-text-weight);line-height:var(--mdc-snackbar-supporting-text-line-height)}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color);--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}.mat-mdc-snack-bar-container .mdc-snackbar__label::before{display:none}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-handset .mdc-snackbar__surface{width:100%}'],encapsulation:2,data:{animation:[he.snackBarState]}})}}return s})();function fe(){return new S}var _e=new v("mat-snack-bar-default-options",{providedIn:"root",factory:fe}),ln=(()=>{class s{get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(t,e,n,i,r,o){this._overlay=t,this._live=e,this._injector=n,this._breakpointObserver=i,this._parentSnackBar=r,this._defaultConfig=o,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=de,this.snackBarContainerComponent=ue,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let i=_(_({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=k.create({parent:n||this._injector,providers:[{provide:S,useValue:e}]}),r=new K(this.snackBarContainerComponent,e.viewContainerRef,i),o=t.attach(r);return o.instance.snackBarConfig=e,o.instance}_attach(t,e){let n=_(_(_({},new S),this._defaultConfig),e),i=this._createOverlay(n),r=this._attachSnackBarContainer(i,n),o=new x(r,i);if(t instanceof ut){let c=new Dt(t,null,{$implicit:n.data,snackBarRef:o});o.instance=r.attachTemplatePortal(c)}else{let c=this._createInjector(n,o),m=new K(t,void 0,c),f=r.attachComponentPortal(m);o.instance=f.instance}return this._breakpointObserver.observe(Tt.HandsetPortrait).pipe(ct(i.detachments())).subscribe(c=>{i.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),n.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(o,n),this._openedSnackBarRef=o,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration))}_createOverlay(t){let e=new Nt;e.direction=t.direction;let n=this._overlay.position().global(),i=t.direction==="rtl",r=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!i||t.horizontalPosition==="end"&&i,o=!r&&t.horizontalPosition!=="center";return r?n.left("0"):o?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return k.create({parent:n||this._injector,providers:[{provide:x,useValue:e},{provide:$t,useValue:t.data}]})}static{this.\u0275fac=function(e){return new(e||s)(d(Lt),d(Bt),d(k),d(Rt),d(s,12),d(_e))}}static{this.\u0275prov=F({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{Be as a,De as b,ln as c};
