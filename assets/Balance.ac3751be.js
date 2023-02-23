import{_ as Ce,o as R,c as X,a as N,t as ne,g as se,m as sa,d as oa,E as _a,i as me,s as Ue,r as W,j as ye,u as Ma,h as xa,q as Aa,b as De,w as ke,f as Ta}from"./index.9b2928fc.js";import{P as wa,a as D,D as je,r as Ee,b as la,d as Pa,S as Ze,i as Da,c as ka,e as We,l as Ie,q as Ia,f as Ba,n as fe,T as Na,B as Ke,g as Je,k as $a,h as Be,p as V,j as Oa,m as Ne,s as Ra,o as ca,t as Ea,u as re,v as Va,w as Ga,x as ie,y as Qe,z as be,A as za,C as _e,E as Ya,F as Xa,G as Ve,H as va,I as qa,J as Fa,_ as Ge,Z as Ha,K as Z,L as Ua,M as ja,N as Za,O as Wa,Q as Ka,R as Ja,U as ua,V as Qa,W as et,X as ea,Y as fa,$ as at,a0 as tt,a1 as rt,a2 as nt,a3 as it,a4 as st,a5 as ot,a6 as lt,a7 as ct,a8 as vt,a9 as ut,aa as ft}from"./install.ae10dbd4.js";import{c as gt}from"./createSeriesDataSimply.5f4f942c.js";const ht={name:"EyeOffIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},dt=["aria-hidden","aria-label"],pt=["fill","width","height"],mt={d:"M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"},yt={key:0};function bt(a,i,t,e,r,o){return R(),X("span",sa(a.$attrs,{"aria-hidden":!t.title,"aria-label":t.title,class:"material-design-icon eye-off-icon",role:"img",onClick:i[0]||(i[0]=n=>a.$emit("click",n))}),[(R(),X("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[N("path",mt,[t.title?(R(),X("title",yt,ne(t.title),1)):se("",!0)])],8,pt))],16,dt)}var Lt=Ce(ht,[["render",bt]]);const St={name:"EyeIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Ct=["aria-hidden","aria-label"],_t=["fill","width","height"],Mt={d:"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"},xt={key:0};function At(a,i,t,e,r,o){return R(),X("span",sa(a.$attrs,{"aria-hidden":!t.title,"aria-label":t.title,class:"material-design-icon eye-icon",role:"img",onClick:i[0]||(i[0]=n=>a.$emit("click",n))}),[(R(),X("svg",{fill:t.fillColor,class:"material-design-icon__svg",width:t.size,height:t.size,viewBox:"0 0 24 24"},[N("path",Mt,[t.title?(R(),X("title",xt,ne(t.title),1)):se("",!0)])],8,_t))],16,Ct)}var Tt=Ce(St,[["render",At]]),te=Math.PI*2,F=wa.CMD,wt=["top","right","bottom","left"];function Pt(a,i,t,e,r){var o=t.width,n=t.height;switch(a){case"top":e.set(t.x+o/2,t.y-i),r.set(0,-1);break;case"bottom":e.set(t.x+o/2,t.y+n+i),r.set(0,1);break;case"left":e.set(t.x-i,t.y+n/2),r.set(-1,0);break;case"right":e.set(t.x+o+i,t.y+n/2),r.set(1,0);break}}function Dt(a,i,t,e,r,o,n,l,v){n-=a,l-=i;var u=Math.sqrt(n*n+l*l);n/=u,l/=u;var s=n*t+a,h=l*t+i;if(Math.abs(e-r)%te<1e-4)return v[0]=s,v[1]=h,u-t;if(o){var g=e;e=fe(r),r=fe(g)}else e=fe(e),r=fe(r);e>r&&(r+=te);var c=Math.atan2(l,n);if(c<0&&(c+=te),c>=e&&c<=r||c+te>=e&&c+te<=r)return v[0]=s,v[1]=h,u-t;var f=t*Math.cos(e)+a,d=t*Math.sin(e)+i,p=t*Math.cos(r)+a,m=t*Math.sin(r)+i,y=(f-n)*(f-n)+(d-l)*(d-l),b=(p-n)*(p-n)+(m-l)*(m-l);return y<b?(v[0]=f,v[1]=d,Math.sqrt(y)):(v[0]=p,v[1]=m,Math.sqrt(b))}function Le(a,i,t,e,r,o,n,l){var v=r-a,u=o-i,s=t-a,h=e-i,g=Math.sqrt(s*s+h*h);s/=g,h/=g;var c=v*s+u*h,f=c/g;l&&(f=Math.min(Math.max(f,0),1)),f*=g;var d=n[0]=a+f*s,p=n[1]=i+f*h;return Math.sqrt((d-r)*(d-r)+(p-o)*(p-o))}function ga(a,i,t,e,r,o,n){t<0&&(a=a+t,t=-t),e<0&&(i=i+e,e=-e);var l=a+t,v=i+e,u=n[0]=Math.min(Math.max(r,a),l),s=n[1]=Math.min(Math.max(o,i),v);return Math.sqrt((u-r)*(u-r)+(s-o)*(s-o))}var E=[];function kt(a,i,t){var e=ga(i.x,i.y,i.width,i.height,a.x,a.y,E);return t.set(E[0],E[1]),e}function It(a,i,t){for(var e=0,r=0,o=0,n=0,l,v,u=1/0,s=i.data,h=a.x,g=a.y,c=0;c<s.length;){var f=s[c++];c===1&&(e=s[c],r=s[c+1],o=e,n=r);var d=u;switch(f){case F.M:o=s[c++],n=s[c++],e=o,r=n;break;case F.L:d=Le(e,r,s[c],s[c+1],h,g,E,!0),e=s[c++],r=s[c++];break;case F.C:d=Ba(e,r,s[c++],s[c++],s[c++],s[c++],s[c],s[c+1],h,g,E),e=s[c++],r=s[c++];break;case F.Q:d=Ia(e,r,s[c++],s[c++],s[c],s[c+1],h,g,E),e=s[c++],r=s[c++];break;case F.A:var p=s[c++],m=s[c++],y=s[c++],b=s[c++],_=s[c++],C=s[c++];c+=1;var T=!!(1-s[c++]);l=Math.cos(_)*y+p,v=Math.sin(_)*b+m,c<=1&&(o=l,n=v);var x=(h-p)*b/y+p;d=Dt(p,m,b,_,_+C,T,x,g,E),e=Math.cos(_+C)*y+p,r=Math.sin(_+C)*b+m;break;case F.R:o=e=s[c++],n=r=s[c++];var L=s[c++],M=s[c++];d=ga(o,n,L,M,h,g,E);break;case F.Z:d=Le(e,r,o,n,h,g,E,!0),e=o,r=n;break}d<u&&(u=d,t.set(E[0],E[1]))}return u}var G=new D,S=new D,A=new D,Y=new D,z=new D;function aa(a,i){if(!!a){var t=a.getTextGuideLine(),e=a.getTextContent();if(!!(e&&t)){var r=a.textGuideLineConfig||{},o=[[0,0],[0,0],[0,0]],n=r.candidates||wt,l=e.getBoundingRect().clone();l.applyTransform(e.getComputedTransform());var v=1/0,u=r.anchor,s=a.getComputedTransform(),h=s&&Da([],s),g=i.get("length2")||0;u&&A.copy(u);for(var c=0;c<n.length;c++){var f=n[c];Pt(f,0,l,G,Y),D.scaleAndAdd(S,G,Y,g),S.transform(h);var d=a.getBoundingRect(),p=u?u.distance(S):a instanceof ka?It(S,a.path,A):kt(S,d,A);p<v&&(v=p,S.transform(s),A.transform(s),A.toArray(o[0]),S.toArray(o[1]),G.toArray(o[2]))}ha(o,i.get("minTurnAngle")),t.setShape({points:o})}}}var Se=[],k=new D;function ha(a,i){if(i<=180&&i>0){i=i/180*Math.PI,G.fromArray(a[0]),S.fromArray(a[1]),A.fromArray(a[2]),D.sub(Y,G,S),D.sub(z,A,S);var t=Y.len(),e=z.len();if(!(t<.001||e<.001)){Y.scale(1/t),z.scale(1/e);var r=Y.dot(z),o=Math.cos(i);if(o<r){var n=Le(S.x,S.y,A.x,A.y,G.x,G.y,Se,!1);k.fromArray(Se),k.scaleAndAdd(z,n/Math.tan(Math.PI-i));var l=A.x!==S.x?(k.x-S.x)/(A.x-S.x):(k.y-S.y)/(A.y-S.y);if(isNaN(l))return;l<0?D.copy(k,S):l>1&&D.copy(k,A),k.toArray(a[1])}}}}function Bt(a,i,t){if(t<=180&&t>0){t=t/180*Math.PI,G.fromArray(a[0]),S.fromArray(a[1]),A.fromArray(a[2]),D.sub(Y,S,G),D.sub(z,A,S);var e=Y.len(),r=z.len();if(!(e<.001||r<.001)){Y.scale(1/e),z.scale(1/r);var o=Y.dot(i),n=Math.cos(t);if(o<n){var l=Le(S.x,S.y,A.x,A.y,G.x,G.y,Se,!1);k.fromArray(Se);var v=Math.PI/2,u=Math.acos(z.dot(i)),s=v+u-t;if(s>=v)D.copy(k,A);else{k.scaleAndAdd(z,l/Math.tan(Math.PI/2-s));var h=A.x!==S.x?(k.x-S.x)/(A.x-S.x):(k.y-S.y)/(A.y-S.y);if(isNaN(h))return;h<0?D.copy(k,S):h>1&&D.copy(k,A)}k.toArray(a[1])}}}}function ta(a,i,t,e){var r=t==="normal",o=r?a:a.ensureState(t);o.ignore=i;var n=e.get("smooth");n&&n===!0&&(n=.3),o.shape=o.shape||{},n>0&&(o.shape.smooth=n);var l=e.getModel("lineStyle").getLineStyle();r?a.useStyle(l):o.style=l}function Nt(a,i){var t=i.smooth,e=i.points;if(!!e)if(a.moveTo(e[0][0],e[0][1]),t>0&&e.length>=3){var r=We(e[0],e[1]),o=We(e[1],e[2]);if(!r||!o){a.lineTo(e[1][0],e[1][1]),a.lineTo(e[2][0],e[2][1]);return}var n=Math.min(r,o)*t,l=Ie([],e[1],e[0],n/r),v=Ie([],e[1],e[2],n/o),u=Ie([],l,v,.5);a.bezierCurveTo(l[0],l[1],l[0],l[1],u[0],u[1]),a.bezierCurveTo(v[0],v[1],v[0],v[1],e[2][0],e[2][1])}else for(var s=1;s<e.length;s++)a.lineTo(e[s][0],e[s][1])}function da(a,i,t){var e=a.getTextGuideLine(),r=a.getTextContent();if(!r){e&&a.removeTextGuideLine();return}for(var o=i.normal,n=o.get("show"),l=r.ignore,v=0;v<je.length;v++){var u=je[v],s=i[u],h=u==="normal";if(s){var g=s.get("show"),c=h?l:Ee(r.states[u]&&r.states[u].ignore,l);if(c||!Ee(g,n)){var f=h?e:e&&e.states[u];f&&(f.ignore=!0);continue}e||(e=new la,a.setTextGuideLine(e),!h&&(l||!n)&&ta(e,!0,"normal",i.normal),a.stateProxy&&(e.stateProxy=a.stateProxy)),ta(e,!1,u,s)}}if(e){Pa(e.style,t),e.style.fill=null;var d=o.get("showAbove"),p=a.textGuideLineConfig=a.textGuideLineConfig||{};p.showAbove=d||!1,e.buildPath=Nt}}function pa(a,i){i=i||"labelLine";for(var t={normal:a.getModel(i)},e=0;e<Ze.length;e++){var r=Ze[e];t[r]=a.getModel([r,i])}return t}function $t(a){if(a){for(var i=[],t=0;t<a.length;t++)i.push(a[t].slice());return i}}function Ot(a,i){var t=a.label,e=i&&i.getTextGuideLine();return{dataIndex:a.dataIndex,dataType:a.dataType,seriesIndex:a.seriesModel.seriesIndex,text:a.label.style.text,rect:a.hostRect,labelRect:a.rect,align:t.style.align,verticalAlign:t.style.verticalAlign,labelLinePoints:$t(e&&e.shape.points)}}var ra=["align","verticalAlign","width","height","fontSize"],B=new Na,$e=_e(),Rt=_e();function ge(a,i,t){for(var e=0;e<t.length;e++){var r=t[e];i[r]!=null&&(a[r]=i[r])}}var he=["x","y","rotation"],Et=function(){function a(){this._labelList=[],this._chartViewList=[]}return a.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},a.prototype._addLabel=function(i,t,e,r,o){var n=r.style,l=r.__hostTarget,v=l.textConfig||{},u=r.getComputedTransform(),s=r.getBoundingRect().plain();Ke.applyTransform(s,s,u),u?B.setLocalTransform(u):(B.x=B.y=B.rotation=B.originX=B.originY=0,B.scaleX=B.scaleY=1);var h=r.__hostTarget,g;if(h){g=h.getBoundingRect().plain();var c=h.getComputedTransform();Ke.applyTransform(g,g,c)}var f=g&&h.getTextGuideLine();this._labelList.push({label:r,labelLine:f,seriesModel:e,dataIndex:i,dataType:t,layoutOption:o,computedLayoutOption:null,rect:s,hostRect:g,priority:g?g.width*g.height:0,defaultAttr:{ignore:r.ignore,labelGuideIgnore:f&&f.ignore,x:B.x,y:B.y,scaleX:B.scaleX,scaleY:B.scaleY,rotation:B.rotation,style:{x:n.x,y:n.y,align:n.align,verticalAlign:n.verticalAlign,width:n.width,height:n.height,fontSize:n.fontSize},cursor:r.cursor,attachedPos:v.position,attachedRot:v.rotation}})},a.prototype.addLabelsOfSeries=function(i){var t=this;this._chartViewList.push(i);var e=i.__model,r=e.get("labelLayout");!(Je(r)||$a(r).length)||i.group.traverse(function(o){if(o.ignore)return!0;var n=o.getTextContent(),l=Be(o);n&&!n.disableLabelLayout&&t._addLabel(l.dataIndex,l.dataType,e,n,r)})},a.prototype.updateLayoutConfig=function(i){var t=i.getWidth(),e=i.getHeight();function r(b,_){return function(){aa(b,_)}}for(var o=0;o<this._labelList.length;o++){var n=this._labelList[o],l=n.label,v=l.__hostTarget,u=n.defaultAttr,s=void 0;Je(n.layoutOption)?s=n.layoutOption(Ot(n,v)):s=n.layoutOption,s=s||{},n.computedLayoutOption=s;var h=Math.PI/180;v&&v.setTextConfig({local:!1,position:s.x!=null||s.y!=null?null:u.attachedPos,rotation:s.rotate!=null?s.rotate*h:u.attachedRot,offset:[s.dx||0,s.dy||0]});var g=!1;if(s.x!=null?(l.x=V(s.x,t),l.setStyle("x",0),g=!0):(l.x=u.x,l.setStyle("x",u.style.x)),s.y!=null?(l.y=V(s.y,e),l.setStyle("y",0),g=!0):(l.y=u.y,l.setStyle("y",u.style.y)),s.labelLinePoints){var c=v.getTextGuideLine();c&&(c.setShape({points:s.labelLinePoints}),g=!1)}var f=$e(l);f.needsUpdateLabelLine=g,l.rotation=s.rotate!=null?s.rotate*h:u.rotation,l.scaleX=u.scaleX,l.scaleY=u.scaleY;for(var d=0;d<ra.length;d++){var p=ra[d];l.setStyle(p,s[p]!=null?s[p]:u.style[p])}if(s.draggable){if(l.draggable=!0,l.cursor="move",v){var m=n.seriesModel;if(n.dataIndex!=null){var y=n.seriesModel.getData(n.dataType);m=y.getItemModel(n.dataIndex)}l.on("drag",r(v,m.getModel("labelLine")))}}else l.off("drag"),l.cursor=u.cursor}},a.prototype.layout=function(i){var t=i.getWidth(),e=i.getHeight(),r=Oa(this._labelList),o=Ne(r,function(v){return v.layoutOption.moveOverlap==="shiftX"}),n=Ne(r,function(v){return v.layoutOption.moveOverlap==="shiftY"});Ra(o,0,t),ca(n,0,e);var l=Ne(r,function(v){return v.layoutOption.hideOverlap});Ea(l)},a.prototype.processLabelsOverall=function(){var i=this;re(this._chartViewList,function(t){var e=t.__model,r=t.ignoreLabelLineUpdate,o=e.isAnimationEnabled();t.group.traverse(function(n){if(n.ignore&&!n.forceLabelAnimation)return!0;var l=!r,v=n.getTextContent();!l&&v&&(l=$e(v).needsUpdateLabelLine),l&&i._updateLabelLine(n,e),o&&i._animateLabels(n,e)})})},a.prototype._updateLabelLine=function(i,t){var e=i.getTextContent(),r=Be(i),o=r.dataIndex;if(e&&o!=null){var n=t.getData(r.dataType),l=n.getItemModel(o),v={},u=n.getItemVisual(o,"style"),s=n.getVisual("drawType");v.stroke=u[s];var h=l.getModel("labelLine");da(i,pa(l),v),aa(i,h)}},a.prototype._animateLabels=function(i,t){var e=i.getTextContent(),r=i.getTextGuideLine();if(e&&(i.forceLabelAnimation||!e.ignore&&!e.invisible&&!i.disableLabelAnimation&&!Va(i))){var o=$e(e),n=o.oldLayout,l=Be(i),v=l.dataIndex,u={x:e.x,y:e.y,rotation:e.rotation},s=t.getData(l.dataType);if(n){e.attr(n);var g=i.prevStates;g&&(Qe(g,"select")>=0&&e.attr(o.oldLayoutSelect),Qe(g,"emphasis")>=0&&e.attr(o.oldLayoutEmphasis)),be(e,u,t,v)}else if(e.attr(u),!Ga(e).valueAnimation){var h=Ee(e.style.opacity,1);e.style.opacity=0,ie(e,{style:{opacity:h}},t,v)}if(o.oldLayout=u,e.states.select){var c=o.oldLayoutSelect={};ge(c,u,he),ge(c,e.states.select,he)}if(e.states.emphasis){var f=o.oldLayoutEmphasis={};ge(f,u,he),ge(f,e.states.emphasis,he)}za(e,v,s,t,t)}if(r&&!r.ignore&&!r.invisible){var o=Rt(r),n=o.oldLayout,d={points:r.shape.points};n?(r.attr({shape:n}),be(r,{shape:d},t)):(r.setShape(d),r.style.strokePercent=0,ie(r,{style:{strokePercent:1}},t)),o.oldLayout=d}},a}(),Vt=Et,Oe=_e();function Gt(a){a.registerUpdateLifecycle("series:beforeupdate",function(i,t,e){var r=Oe(t).labelManager;r||(r=Oe(t).labelManager=new Vt),r.clearLabels()}),a.registerUpdateLifecycle("series:layoutlabels",function(i,t,e){var r=Oe(t).labelManager;e.updatedSeries.forEach(function(o){r.addLabelsOfSeries(t.getViewOfSeriesModel(o))}),r.updateLayoutConfig(t),r.layout(t),r.processLabelsOverall()})}var de=Math.PI*2,na=Math.PI/180;function ma(a,i){return Xa(a.getBoxLayoutParams(),{width:i.getWidth(),height:i.getHeight()})}function ya(a,i){var t=ma(a,i),e=a.get("center"),r=a.get("radius");Ve(r)||(r=[0,r]);var o=V(t.width,i.getWidth()),n=V(t.height,i.getHeight()),l=Math.min(o,n),v=V(r[0],l/2),u=V(r[1],l/2),s,h,g=a.coordinateSystem;if(g){var c=g.dataToPoint(e);s=c[0]||0,h=c[1]||0}else Ve(e)||(e=[e,e]),s=V(e[0],o)+t.x,h=V(e[1],n)+t.y;return{cx:s,cy:h,r0:v,r:u}}function zt(a,i,t){i.eachSeriesByType(a,function(e){var r=e.getData(),o=r.mapDimension("value"),n=ma(e,t),l=ya(e,t),v=l.cx,u=l.cy,s=l.r,h=l.r0,g=-e.get("startAngle")*na,c=e.get("minAngle")*na,f=0;r.each(o,function(P){!isNaN(P)&&f++});var d=r.getSum(o),p=Math.PI/(d||f)*2,m=e.get("clockwise"),y=e.get("roseType"),b=e.get("stillShowZeroSum"),_=r.getDataExtent(o);_[0]=0;var C=de,T=0,x=g,L=m?1:-1;if(r.setLayout({viewRect:n,r:s}),r.each(o,function(P,$){var w;if(isNaN(P)){r.setItemLayout($,{angle:NaN,startAngle:NaN,endAngle:NaN,clockwise:m,cx:v,cy:u,r0:h,r:y?NaN:s});return}y!=="area"?w=d===0&&b?p:P*p:w=de/f,w<c?(w=c,C-=c):T+=P;var I=x+L*w;r.setItemLayout($,{angle:w,startAngle:x,endAngle:I,clockwise:m,cx:v,cy:u,r0:h,r:y?Ya(P,_,[h,s]):s}),x=I}),C<de&&f)if(C<=.001){var M=de/f;r.each(o,function(P,$){if(!isNaN(P)){var w=r.getItemLayout($);w.angle=M,w.startAngle=g+L*$*M,w.endAngle=g+L*($+1)*M}})}else p=C/T,x=g,r.each(o,function(P,$){if(!isNaN(P)){var w=r.getItemLayout($),I=w.angle===c?c:P*p;w.startAngle=x,w.endAngle=x+L*I,x+=L*I}})})}function Yt(a){return{seriesType:a,reset:function(i,t){var e=t.findComponents({mainType:"legend"});if(!(!e||!e.length)){var r=i.getData();r.filterSelf(function(o){for(var n=r.getName(o),l=0;l<e.length;l++)if(!e[l].isSelected(n))return!1;return!0})}}}}var Xt=Math.PI/180;function ia(a,i,t,e,r,o,n,l,v,u){if(a.length<2)return;function s(d){for(var p=d.rB,m=p*p,y=0;y<d.list.length;y++){var b=d.list[y],_=Math.abs(b.label.y-t),C=e+b.len,T=C*C,x=Math.sqrt((1-Math.abs(_*_/m))*T),L=i+(x+b.len2)*r,M=L-b.label.x,P=b.targetTextWidth-M*r;ba(b,P,!0),b.label.x=L}}function h(d){for(var p={list:[],maxY:0},m={list:[],maxY:0},y=0;y<d.length;y++)if(d[y].labelAlignTo==="none"){var b=d[y],_=b.label.y>t?m:p,C=Math.abs(b.label.y-t);if(C>=_.maxY){var T=b.label.x-i-b.len2*r,x=e+b.len,L=Math.abs(T)<x?Math.sqrt(C*C/(1-T*T/x/x)):x;_.rB=L,_.maxY=C}_.list.push(b)}s(p),s(m)}for(var g=a.length,c=0;c<g;c++)if(a[c].position==="outer"&&a[c].labelAlignTo==="labelLine"){var f=a[c].label.x-u;a[c].linePoints[1][0]+=f,a[c].label.x=u}ca(a,v,v+n)&&h(a)}function qt(a,i,t,e,r,o,n,l){for(var v=[],u=[],s=Number.MAX_VALUE,h=-Number.MAX_VALUE,g=0;g<a.length;g++){var c=a[g].label;Re(a[g])||(c.x<i?(s=Math.min(s,c.x),v.push(a[g])):(h=Math.max(h,c.x),u.push(a[g])))}for(var g=0;g<a.length;g++){var f=a[g];if(!Re(f)&&f.linePoints){if(f.labelStyleWidth!=null)continue;var c=f.label,d=f.linePoints,p=void 0;f.labelAlignTo==="edge"?c.x<i?p=d[2][0]-f.labelDistance-n-f.edgeDistance:p=n+r-f.edgeDistance-d[2][0]-f.labelDistance:f.labelAlignTo==="labelLine"?c.x<i?p=s-n-f.bleedMargin:p=n+r-h-f.bleedMargin:c.x<i?p=c.x-n-f.bleedMargin:p=n+r-c.x-f.bleedMargin,f.targetTextWidth=p,ba(f,p)}}ia(u,i,t,e,1,r,o,n,l,h),ia(v,i,t,e,-1,r,o,n,l,s);for(var g=0;g<a.length;g++){var f=a[g];if(!Re(f)&&f.linePoints){var c=f.label,d=f.linePoints,m=f.labelAlignTo==="edge",y=c.style.padding,b=y?y[1]+y[3]:0,_=c.style.backgroundColor?0:b,C=f.rect.width+_,T=d[1][0]-d[2][0];m?c.x<i?d[2][0]=n+f.edgeDistance+C+f.labelDistance:d[2][0]=n+r-f.edgeDistance-C-f.labelDistance:(c.x<i?d[2][0]=c.x+f.labelDistance:d[2][0]=c.x-f.labelDistance,d[1][0]=d[2][0]+T),d[1][1]=d[2][1]=c.y}}}function ba(a,i,t){if(t===void 0&&(t=!1),a.labelStyleWidth==null){var e=a.label,r=e.style,o=a.rect,n=r.backgroundColor,l=r.padding,v=l?l[1]+l[3]:0,u=r.overflow,s=o.width+(n?0:v);if(i<s||t){var h=o.height;if(u&&u.match("break")){e.setStyle("backgroundColor",null),e.setStyle("width",i-v);var g=e.getBoundingRect();e.setStyle("width",Math.ceil(g.width)),e.setStyle("backgroundColor",n)}else{var c=i-v,f=i<s?c:t?c>a.unconstrainedWidth?null:c:null;e.setStyle("width",f)}var d=e.getBoundingRect();o.width=d.width;var p=(e.style.margin||0)+2.1;o.height=d.height+p,o.y-=(o.height-h)/2}}}function Re(a){return a.position==="center"}function Ft(a){var i=a.getData(),t=[],e,r,o=!1,n=(a.get("minShowLabelAngle")||0)*Xt,l=i.getLayout("viewRect"),v=i.getLayout("r"),u=l.width,s=l.x,h=l.y,g=l.height;function c(T){T.ignore=!0}function f(T){if(!T.ignore)return!0;for(var x in T.states)if(T.states[x].ignore===!1)return!0;return!1}i.each(function(T){var x=i.getItemGraphicEl(T),L=x.shape,M=x.getTextContent(),P=x.getTextGuideLine(),$=i.getItemModel(T),w=$.getModel("label"),I=w.get("position")||$.get(["emphasis","label","position"]),Me=w.get("distanceToLabelLine"),xe=w.get("alignTo"),Ae=V(w.get("edgeDistance"),u),La=w.get("bleedMargin"),oe=$.getModel("labelLine"),K=oe.get("length");K=V(K,u);var le=oe.get("length2");if(le=V(le,u),Math.abs(L.endAngle-L.startAngle)<n){re(M.states,c),M.ignore=!0,P&&(re(P.states,c),P.ignore=!0);return}if(!!f(M)){var ce=(L.startAngle+L.endAngle)/2,O=Math.cos(ce),q=Math.sin(ce),J,ve,ze,ue;e=L.cx,r=L.cy;var H=I==="inside"||I==="inner";if(I==="center")J=L.cx,ve=L.cy,ue="center";else{var Te=(H?(L.r+L.r0)/2*O:L.r*O)+e,we=(H?(L.r+L.r0)/2*q:L.r*q)+r;if(J=Te+O*3,ve=we+q*3,!H){var Ye=Te+O*(K+v-L.r),Xe=we+q*(K+v-L.r),qe=Ye+(O<0?-1:1)*le,Fe=Xe;xe==="edge"?J=O<0?s+Ae:s+u-Ae:J=qe+(O<0?-Me:Me),ve=Fe,ze=[[Te,we],[Ye,Xe],[qe,Fe]]}ue=H?"center":xe==="edge"?O>0?"right":"left":O>0?"left":"right"}var Q=Math.PI,U=0,ee=w.get("rotate");if(va(ee))U=ee*(Q/180);else if(I==="center")U=0;else if(ee==="radial"||ee===!0){var Sa=O<0?-ce+Q:-ce;U=Sa}else if(ee==="tangential"&&I!=="outside"&&I!=="outer"){var j=Math.atan2(O,q);j<0&&(j=Q*2+j);var Ca=q>0;Ca&&(j=Q+j),U=j-Q}if(o=!!U,M.x=J,M.y=ve,M.rotation=U,M.setStyle({verticalAlign:"middle"}),H){M.setStyle({align:ue});var Pe=M.states.select;Pe&&(Pe.x+=M.x,Pe.y+=M.y)}else{var ae=M.getBoundingRect().clone();ae.applyTransform(M.getComputedTransform());var He=(M.style.margin||0)+2.1;ae.y-=He/2,ae.height+=He,t.push({label:M,labelLine:P,position:I,len:K,len2:le,minTurnAngle:oe.get("minTurnAngle"),maxSurfaceAngle:oe.get("maxSurfaceAngle"),surfaceNormal:new D(O,q),linePoints:ze,textAlign:ue,labelDistance:Me,labelAlignTo:xe,edgeDistance:Ae,bleedMargin:La,rect:ae,unconstrainedWidth:ae.width,labelStyleWidth:M.style.width})}x.setTextConfig({inside:H})}}),!o&&a.get("avoidLabelOverlap")&&qt(t,e,r,v,u,g,s,h);for(var d=0;d<t.length;d++){var p=t[d],m=p.label,y=p.labelLine,b=isNaN(m.x)||isNaN(m.y);if(m){m.setStyle({align:p.textAlign}),b&&(re(m.states,c),m.ignore=!0);var _=m.states.select;_&&(_.x+=m.x,_.y+=m.y)}if(y){var C=p.linePoints;b||!C?(re(y.states,c),y.ignore=!0):(ha(C,p.minTurnAngle),Bt(C,p.surfaceNormal,p.maxSurfaceAngle),y.setShape({points:C}),m.__hostTarget.textGuideLineConfig={anchor:new D(C[0][0],C[0][1])})}}}function pe(a,i,t){var e=a.get("borderRadius");if(e==null)return t?{cornerRadius:0}:null;Ve(e)||(e=[e,e,e,e]);var r=Math.abs(i.r||0-i.r0||0);return{cornerRadius:qa(e,function(o){return Fa(o,r)})}}var Ht=function(a){Ge(i,a);function i(t,e,r){var o=a.call(this)||this;o.z2=2;var n=new Ha;return o.setTextContent(n),o.updateData(t,e,r,!0),o}return i.prototype.updateData=function(t,e,r,o){var n=this,l=t.hostModel,v=t.getItemModel(e),u=v.getModel("emphasis"),s=t.getItemLayout(e),h=Z(pe(v.getModel("itemStyle"),s,!0),s);if(isNaN(h.startAngle)){n.setShape(h);return}if(o){n.setShape(h);var g=l.getShallow("animationType");l.ecModel.ssr?(ie(n,{scaleX:0,scaleY:0},l,{dataIndex:e,isFrom:!0}),n.originX=h.cx,n.originY=h.cy):g==="scale"?(n.shape.r=s.r0,ie(n,{shape:{r:s.r}},l,e)):r!=null?(n.setShape({startAngle:r,endAngle:r}),ie(n,{shape:{startAngle:s.startAngle,endAngle:s.endAngle}},l,e)):(n.shape.endAngle=s.startAngle,be(n,{shape:{endAngle:s.endAngle}},l,e))}else Ua(n),be(n,{shape:h},l,e);n.useStyle(t.getItemVisual(e,"style")),ja(n,v);var c=(s.startAngle+s.endAngle)/2,f=l.get("selectedOffset"),d=Math.cos(c)*f,p=Math.sin(c)*f,m=v.getShallow("cursor");m&&n.attr("cursor",m),this._updateLabel(l,t,e),n.ensureState("emphasis").shape=Z({r:s.r+(u.get("scale")&&u.get("scaleSize")||0)},pe(u.getModel("itemStyle"),s)),Z(n.ensureState("select"),{x:d,y:p,shape:pe(v.getModel(["select","itemStyle"]),s)}),Z(n.ensureState("blur"),{shape:pe(v.getModel(["blur","itemStyle"]),s)});var y=n.getTextGuideLine(),b=n.getTextContent();y&&Z(y.ensureState("select"),{x:d,y:p}),Z(b.ensureState("select"),{x:d,y:p}),Za(this,u.get("focus"),u.get("blurScope"),u.get("disabled"))},i.prototype._updateLabel=function(t,e,r){var o=this,n=e.getItemModel(r),l=n.getModel("labelLine"),v=e.getItemVisual(r,"style"),u=v&&v.fill,s=v&&v.opacity;Wa(o,Ka(n),{labelFetcher:e.hostModel,labelDataIndex:r,inheritColor:u,defaultOpacity:s,defaultText:t.getFormattedLabel(r,"normal")||e.getName(r)});var h=o.getTextContent();o.setTextConfig({position:null,rotation:null}),h.attr({z2:10});var g=t.get(["label","position"]);if(g!=="outside"&&g!=="outer")o.removeTextGuideLine();else{var c=this.getTextGuideLine();c||(c=new la,this.setTextGuideLine(c)),da(this,pa(n),{stroke:u,opacity:Ja(l.get(["lineStyle","opacity"]),s,1)})}},i}(ua),Ut=function(a){Ge(i,a);function i(){var t=a!==null&&a.apply(this,arguments)||this;return t.ignoreLabelLineUpdate=!0,t}return i.prototype.render=function(t,e,r,o){var n=t.getData(),l=this._data,v=this.group,u;if(!l&&n.count()>0){for(var s=n.getItemLayout(0),h=1;isNaN(s&&s.startAngle)&&h<n.count();++h)s=n.getItemLayout(h);s&&(u=s.startAngle)}if(this._emptyCircleSector&&v.remove(this._emptyCircleSector),n.count()===0&&t.get("showEmptyCircle")){var g=new ua({shape:ya(t,r)});g.useStyle(t.getModel("emptyCircleStyle").getItemStyle()),this._emptyCircleSector=g,v.add(g)}n.diff(l).add(function(c){var f=new Ht(n,c,u);n.setItemGraphicEl(c,f),v.add(f)}).update(function(c,f){var d=l.getItemGraphicEl(f);d.updateData(n,c,u),d.off("click"),v.add(d),n.setItemGraphicEl(c,d)}).remove(function(c){var f=l.getItemGraphicEl(c);Qa(f,t,c)}).execute(),Ft(t),t.get("animationTypeUpdate")!=="expansion"&&(this._data=n)},i.prototype.dispose=function(){},i.prototype.containPoint=function(t,e){var r=e.getData(),o=r.getItemLayout(0);if(o){var n=t[0]-o.cx,l=t[1]-o.cy,v=Math.sqrt(n*n+l*l);return v<=o.r&&v>=o.r0}},i.type="pie",i}(et),jt=Ut,Zt=function(){function a(i,t){this._getDataWithEncodedVisual=i,this._getRawData=t}return a.prototype.getAllNames=function(){var i=this._getRawData();return i.mapArray(i.getName)},a.prototype.containName=function(i){var t=this._getRawData();return t.indexOfName(i)>=0},a.prototype.indexOfName=function(i){var t=this._getDataWithEncodedVisual();return t.indexOfName(i)},a.prototype.getItemVisual=function(i,t){var e=this._getDataWithEncodedVisual();return e.getItemVisual(i,t)},a}(),Wt=Zt,Kt=_e(),Jt=function(a){Ge(i,a);function i(){return a!==null&&a.apply(this,arguments)||this}return i.prototype.init=function(t){a.prototype.init.apply(this,arguments),this.legendVisualProvider=new Wt(ea(this.getData,this),ea(this.getRawData,this)),this._defaultLabelLine(t)},i.prototype.mergeOption=function(){a.prototype.mergeOption.apply(this,arguments)},i.prototype.getInitialData=function(){return gt(this,{coordDimensions:["value"],encodeDefaulter:fa(at,this)})},i.prototype.getDataParams=function(t){var e=this.getData(),r=Kt(e),o=r.seats;if(!o){var n=[];e.each(e.mapDimension("value"),function(v){n.push(v)}),o=r.seats=tt(n,e.hostModel.get("percentPrecision"))}var l=a.prototype.getDataParams.call(this,t);return l.percent=o[t]||0,l.$vars.push("percent"),l},i.prototype._defaultLabelLine=function(t){rt(t,"labelLine",["show"]);var e=t.labelLine,r=t.emphasis.labelLine;e.show=e.show&&t.label.show,r.show=r.show&&t.emphasis.label.show},i.type="series.pie",i.defaultOption={z:2,legendHoverLink:!0,colorBy:"data",center:["50%","50%"],radius:[0,"75%"],clockwise:!0,startAngle:90,minAngle:0,minShowLabelAngle:0,selectedOffset:10,percentPrecision:2,stillShowZeroSum:!0,left:0,top:0,right:0,bottom:0,width:null,height:null,label:{rotate:0,show:!0,overflow:"truncate",position:"outer",alignTo:"none",edgeDistance:"25%",bleedMargin:10,distanceToLabelLine:5},labelLine:{show:!0,length:15,length2:15,smooth:!1,minTurnAngle:90,maxSurfaceAngle:90,lineStyle:{width:1,type:"solid"}},itemStyle:{borderWidth:1,borderJoin:"round"},showEmptyCircle:!0,emptyCircleStyle:{color:"lightgray",opacity:1},labelLayout:{hideOverlap:!0},emphasis:{scale:!0,scaleSize:5},avoidLabelOverlap:!0,animationType:"expansion",animationDuration:1e3,animationTypeUpdate:"transition",animationEasingUpdate:"cubicInOut",animationDurationUpdate:500,animationEasing:"cubicInOut"},i}(nt),Qt=Jt;function er(a){return{seriesType:a,reset:function(i,t){var e=i.getData();e.filterSelf(function(r){var o=e.mapDimension("value"),n=e.get(o,r);return!(va(n)&&!isNaN(n)&&n<0)})}}}function ar(a){a.registerChartView(jt),a.registerSeriesModel(Qt),it("pie",a.registerAction),a.registerLayout(fa(zt,"pie")),a.registerProcessor(Yt("pie")),a.registerProcessor(er("pie"))}st([ar,lt,ct,vt,ut,ft,Gt]);const tr=oa({name:"BalanceChart",components:{"v-chart":ot},props:{currencies:{required:!0,type:Array},showTitle:{required:!1,type:Boolean}},setup(a){const i=_a();return{balanceChartOptions:me(()=>({title:{text:"Balance",show:a.showTitle},center:["50%","50%"],backgroundColor:"rgba(0, 0, 0, 0)",dataset:{dimensions:["balance","currency","est_stake","free","used","stake"],source:a.currencies},tooltip:{trigger:"item",formatter:e=>`${Ue(e.value.balance,e.value.currency,8)}<br />${e.percent}% (${Ue(e.value.est_stake,e.value.stake)})`},series:[{type:"pie",radius:["40%","70%"],encode:{value:"est_stake",itemName:"currency",tooltip:["balance","currency"]},label:{formatter:"{b} - {d}%"},tooltip:{show:!0}}]})),settingsStore:i}}});function rr(a,i,t,e,r,o){const n=W("v-chart");return a.currencies?(R(),ye(n,{key:0,option:a.balanceChartOptions,theme:a.settingsStore.chartTheme,autoresize:""},null,8,["option","theme"])):se("",!0)}var nr=Ce(tr,[["render",rr],["__scopeId","data-v-6f90a4a6"]]);const ir=oa({name:"Balance",components:{HideIcon:Lt,ShowIcon:Tt,BalanceChart:nr},setup(){const a=Ma(),i=xa(!0),t=me(()=>Number((.1**a.activeBot.stakeCurrencyDecimals).toFixed(8))),e=me(()=>{var n;return i.value?(n=a.activeBot.balance.currencies)==null?void 0:n.filter(l=>l.est_stake>=t.value):a.activeBot.balance.currencies}),r=me(()=>[{key:"currency",label:"Currency"},{key:"free",label:"Available",formatter:"formatCurrency"},{key:"est_stake",label:`in ${a.activeBot.balance.stake}`,formatter:"formatCurrency"}]);return{botStore:a,hideSmallBalances:i,formatPercent:Aa,smallBalance:t,balanceCurrencies:e,tableFields:r,formatCurrency:n=>n?n.toFixed(5):""}}}),sr={class:"mb-2"},or=N("label",{class:"me-auto h3"},"Balance",-1),lr={class:"float-end d-flex flex-row"},cr={key:0},vr=N("td",null,[N("strong",null,"Total")],-1),ur=["title"];function fr(a,i,t,e,r,o){const n=W("HideIcon"),l=W("ShowIcon"),v=W("b-button"),u=W("BalanceChart"),s=W("b-table");return R(),X("div",null,[N("div",sr,[or,N("div",lr,[De(v,{size:"sm",title:"Hide small balances",onClick:i[0]||(i[0]=h=>a.hideSmallBalances=!a.hideSmallBalances)},{default:ke(()=>[a.hideSmallBalances?(R(),ye(n,{key:0,size:16})):(R(),ye(l,{key:1,size:16}))]),_:1}),De(v,{class:"float-end",size:"sm",onClick:a.botStore.activeBot.getBalance},{default:ke(()=>[Ta("\u21BB")]),_:1},8,["onClick"])])]),a.balanceCurrencies?(R(),ye(u,{key:0,currencies:a.balanceCurrencies},null,8,["currencies"])):se("",!0),N("div",null,[a.botStore.activeBot.balance.note?(R(),X("p",cr,[N("strong",null,ne(a.botStore.activeBot.balance.note),1)])):se("",!0),De(s,{class:"table-sm",items:a.balanceCurrencies,fields:a.tableFields},{"custom-foot":ke(()=>[vr,N("td",null,[N("span",{class:"font-italic",title:`Increase over initial capital of ${a.formatCurrency(a.botStore.activeBot.balance.starting_capital)} ${a.botStore.activeBot.balance.stake}`},ne(a.formatPercent(a.botStore.activeBot.balance.starting_capital_ratio)),9,ur)]),N("td",null,[N("strong",null,ne(a.formatCurrency(a.botStore.activeBot.balance.total)),1)])]),_:1},8,["items","fields"])])])}var pr=Ce(ir,[["render",fr]]);export{pr as default};
//# sourceMappingURL=Balance.ac3751be.js.map
