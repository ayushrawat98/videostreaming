import{c as O,d as B,h as V,k as z,q,r as U,t as w}from"./chunk-KVJXDR5M.js";import{F as b,G as j,H as P,a as f,b as M,c as D,i as _,n as I}from"./chunk-RVYB3KSR.js";import{Da as E,Fb as L,Hb as x,Vb as N,Z as R,Za as n,_ as c,aa as S,ca as v,ia as u,j as d,ja as y,m as H,nb as F,pa as A,qb as k,za as m}from"./chunk-CIG25PHL.js";var Z=D({passive:!0}),$=(()=>{class s{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return H;let t=I(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new d,o="cdk-text-field-autofilled",h=a=>{a.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:a.target,isAutofilled:!0}))):a.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:a.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",h,Z),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:r,unlisten:()=>{t.removeEventListener("animationstart",h,Z)}}),r}stopMonitoring(e){let t=I(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static{this.\u0275fac=function(t){return new(t||s)(v(f),v(m))}}static{this.\u0275prov=R({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();var K=(()=>{class s{static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275mod=u({type:s})}static{this.\u0275inj=c({})}}return s})();var Q=new S("MAT_INPUT_VALUE_ACCESSOR"),ee=["button","checkbox","file","hidden","image","radio","range","reset","submit"],te=0,be=(()=>{class s{get disabled(){return this._disabled}set disabled(e){this._disabled=_(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(O.required)??!1}set required(e){this._required=_(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&M().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=_(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,r,o,h,a,W,Y,C){this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=W,this._formField=C,this._uid=`mat-input-${te++}`,this.focused=!1,this.stateChanges=new d,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(g=>M().has(g)),this._iOSKeyupListener=g=>{let l=g.target;!l.value&&l.selectionStart===0&&l.selectionEnd===0&&(l.setSelectionRange(1,1),l.setSelectionRange(0,0))};let p=this._elementRef.nativeElement,T=p.nodeName.toLowerCase();this._inputValueAccessor=a||p,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&Y.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new j(h,i,o,r,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=T==="select",this._isTextarea=T==="textarea",this._isInFormField=!!C,this._isNativeSelect&&(this.controlType=p.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){ee.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}static{this.\u0275fac=function(t){return new(t||s)(n(E),n(f),n(B,10),n(V,8),n(z,8),n(P),n(Q,10),n($),n(m),n(U,8))}}static{this.\u0275dir=y({type:s,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,i){t&1&&x("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(L("id",i.id)("disabled",i.disabled)("required",i.required),F("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),k("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[N([{provide:q,useExisting:s}]),A]})}}return s})(),we=(()=>{class s{static{this.\u0275fac=function(t){return new(t||s)}}static{this.\u0275mod=u({type:s})}static{this.\u0275inj=c({imports:[b,w,w,K,b]})}}return s})();export{be as a,we as b};