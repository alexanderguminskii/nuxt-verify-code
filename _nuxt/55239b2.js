(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{304:function(e,t,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(140).default)("8d0f1bca",content,!0,{sourceMap:!1})},305:function(e,t,n){"use strict";var r=n(16),o=n(6),c=n(81),l=n(22),f=n(14),d=n(56),v=n(137),m=n(80),x=n(203),h=n(8),_=n(57),y=n(66).f,I=n(32).f,C=n(20).f,w=n(306).trim,N="Number",E=o.Number,k=E.prototype,O=d(_(k))==N,j=function(e){if(m(e))throw TypeError("Cannot convert a Symbol value to a number");var t,n,r,o,c,l,f,code,d=x(e,"number");if("string"==typeof d&&d.length>2)if(43===(t=(d=w(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c(N,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var F,V=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof V&&(O?h((function(){k.valueOf.call(n)})):d(n)!=N)?v(new E(j(t)),n,V):j(t)},A=r?y(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),S=0;A.length>S;S++)f(E,F=A[S])&&!f(V,F)&&C(V,F,I(E,F));V.prototype=k,k.constructor=V,l(o,N,V)}},306:function(e,t,n){var r=n(29),o=n(17),c="["+n(307)+"]",l=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),d=function(e){return function(t){var n=o(r(t));return 1&e&&(n=n.replace(l,"")),2&e&&(n=n.replace(f,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},307:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},308:function(e,t,n){"use strict";n(304)},309:function(e,t,n){var r=n(139)(!1);r.push([e.i,".input-verify{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-bottom:20px}.input-verify__item{box-sizing:border-box;padding:15px;margin-right:16px;width:65px;height:65px;font-size:28px;text-align:center;border:1px solid #948787;border-radius:8px;outline:0}.input-verify__item:focus{border:1px solid #000}.input-verify__item:last-child{margin-right:0}.input-resend{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-bottom:20px;color:#494949;font-size:16px}.input-resend__link{color:#a71b1b;text-decoration:none}.container{padding-top:50px;width:-webkit-max-content;width:-moz-max-content;width:max-content;margin:0 auto;display:flex;flex-direction:column;justify-content:center}body{box-sizing:border-box;margin:0}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}",""]),e.exports=r},310:function(e,t,n){"use strict";n.r(t);var r=n(132),o=(n(305),n(44),n(58),n(138),n(82),n(67),n(50),n(83)),c=Object(o.a)({props:{fields:{type:Number,default:4},timerSeconds:{type:Number,default:20}},setup:function(e,t){for(var n=t.emit,c=Object(o.c)(0),l=Object(o.c)([]),f=Object(o.c)([]),d=Object(o.c)(e.fields),v=Object(o.c)(e.timerSeconds),m=Object(o.c)(),i=0;i<d.value;i++)l.value.push("");var x=function(){var code=l.value.join("");code.length===d.value&&n("verifyCode",parseInt(code))},h=function(){clearInterval(m.value),m.value=setInterval((function(){v.value<=0?clearInterval(m.value):v.value--}),1e3)};h();return{autoFocusIndex:c,values:l,inputRefs:f,onValueChange:function(e){var t=parseInt(e.target.dataset.id),n=t+1;if(e.target.value.length>1?(e.target.value=e.target.value.slice(0,1),l.value[t]=e.target.value.split("")[0]):l.value[t]=e.target.value,n<d.value){var element=f.value[n];element.focus(),element.select()}x()},onFocus:function(e){e.target.select()},keyPres:function(e){var t=parseInt(e.target.dataset.id),n=t-1,o=f.value[n];if("Backspace"===e.key){e.preventDefault();var c=Object(r.a)(l.value);l.value[t]?(c[t]="",l.value=c,x()):o&&(c[n]="",o.focus(),l.value=c,x())}},seconds:v,resetCode:function(){n("reset",!0),v.value=e.timerSeconds,h()},makeTimerValue:function(e){var t="".concat(e%60),n="".concat(Math.floor(e/60));return+t<10&&(t="0".concat(e%60)),+n<10&&(n="0".concat(Math.floor(e/60))),"".concat(n,":").concat(t)}}}}),l=(n(308),n(63)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"input-verify"},[e._l(e.values,(function(t,r){return[n("input",{key:r,ref:"inputRefs",refInFor:!0,staticClass:"input-verify__item",attrs:{type:"number",pattern:"[0-9]",required:"required",maxlength:"1",autoFocus:r===e.autoFocusIndex,"data-id":r},domProps:{value:t},on:{input:e.onValueChange,focus:e.onFocus,keydown:e.keyPres}})]}))],2),e._v(" "),n("div",{staticClass:"input-resend"},[n("div",{staticClass:"input-resend__timer"},[e._v("\n      Не получили код в смс?\n      "),e.seconds?n("span",[e._v(" "+e._s(e.makeTimerValue(e.seconds))+" ")]):n("a",{staticClass:"input-resend__link",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.resetCode.apply(null,arguments)}}},[e._v("\n        Запросить повторно\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports},311:function(e,t,n){"use strict";n.r(t);var r=n(83),o=Object(r.a)({setup:function(){var e=Object(r.e)();return{setVerifyCode:function(data){e.commit("CHANGE_VERIFY_CODE",data)},resetVerifyCode:function(){e.commit("CHANGE_VERIFY_CODE","")}}}}),c=n(63),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("SendCode",{attrs:{fields:4,"timer-seconds":10},on:{verifyCode:e.setVerifyCode,reset:e.resetVerifyCode}})}),[],!1,null,"7f681fd2",null);t.default=component.exports;installComponents(component,{SendCode:n(310).default})}}]);