import{u as S}from"./usePromotion-9fc4c1fa.js";import{H as j}from"./HeadTitleWrapper-68acb160.js";import{_ as Z}from"./Pagination.vue_vue_type_script_setup_true_lang-f1391e5c.js";import{T as z}from"./themeSetting-e6203c6a.js";import{i as T,r as v,P as A,j as U,k as W,o as n,l as P,m as b,q as t,u,v as o,y as s,x,n as G,p as K,aj as E,aq as M,ae as D,z as p,a0 as H,a3 as L,ai as $,at as R,au as q,aH as w}from"./vendor-749afd36.js";import{a as F}from"./promotion-a70e8dd5.js";import{g as I}from"./globSrc-3d0bc8ab.js";import{_ as N,t as X,r as B}from"./index-42c4f717.js";import{_ as J}from"./NoData.vue_vue_type_style_index_0_lang-ac250c10.js";const Q={class:"NAV_promotion"},Y={class:"pupop_content fadeIn animated"},oo={class:"popWrapper"},to=t("span",{class:"icon-iconCross"},null,-1),eo=[to],no={class:"title"},so={class:"content"},ao={class:"leftPic"},lo=["src"],io=["src"],co={class:"rightTxt"},ro=T({__name:"PromotionModal",props:{modalData:{type:[Object,String]}},emits:["close"],setup(r,{emit:_}){const l=r,d=v(!1),e=v(),g=v(l.modalData?.promotionId),m=v(l.modalData?.name),i=v(l.modalData?.promotionBanner);A(async()=>{d.value=!0;try{const c=await F({promotionId:g.value});e.value=c.Data}finally{d.value=!1}});const h=()=>{_("close",!1)};return(c,a)=>{const f=U("vue-final-modal"),k=W("dompurify-html");return n(),P(f,G(c.$attrs,{"hide-overlay":!0,"lock-scroll":!1,"esc-to-close":!0,onKeydown:K(h,["enter"])}),{default:b(()=>[t("div",Q,[t("div",Y,[t("div",oo,[t("h5",{class:"XX",onClick:h},eo),t("div",no,u(o(m)),1),t("div",so,[t("div",ao,[o(i)?.slice(-4)!="null"?(n(),s("img",{key:0,src:o(i)},null,8,lo)):(n(),s("img",{key:1,src:o(I)("/images/promotion/Event_pc.jpg")},null,8,io))]),x(t("div",co,null,512),[[k,o(e)]])])])])])]),_:1},16,["onKeydown"])}}}),_o={class:"tabZone"},uo=["onClick","onMouseenter"],mo={key:0,class:"tabIcon"},po=["src"],go=T({__name:"PromotionTab",props:{list:null},emits:["change-tab"],setup(r,{emit:_}){const{select:l,isSelected:d}=H("tabDispatch"),e=v(0),g=i=>{l(i),_("change-tab")},m=i=>e.value===i||d(i);return(i,h)=>(n(),s("div",_o,[t("ul",null,[(n(!0),s(E,null,M(r.list,(c,a)=>(n(),s("li",{key:a,class:D({active:o(d)(a)}),onClick:f=>g(a),onMouseenter:f=>e.value=a,onMouseleave:h[0]||(h[0]=f=>e.value=null)},[(m(a)?c.activeImage:c.defaultImage)?(n(),s("span",mo,[t("img",{src:m(a)?c.activeImage:c.defaultImage,alt:"tab-icon"},null,8,po)])):p("",!0),t("h4",null,u(c.name)+" ("+u(r.list[a]?.items.length??0)+") ",1)],42,uo))),128))])]))}});const ho=N(go,[["__scopeId","data-v-c619f736"]]),vo={class:"slotZone"},fo=["onClick"],yo=["src"],$o={key:1,class:"tag-new icon-tag"},bo=["src"],Po={key:2,class:"icon-tag tag-hot"},To=["src"],ko={class:"bottomZone"},Co={class:"txtFrame"},Io={key:0},Do={key:1},Lo=["onClick"],wo=T({__name:"PromotionTabPanel",props:{currentList:{type:Array,default(){return[]}}},setup(r){const{changeModal:_}=H("changeModalDispatch");return(l,d)=>(n(),s("div",vo,[t("ul",null,[t("li",{class:D(["slotLobby",{noData:r.currentList&&r.currentList.length==0}])},[t("ul",null,[(n(!0),s(E,null,M(r.currentList,(e,g)=>(n(),s("li",{key:`li_${g}`,class:"goPromotion",style:{visibility:"visible","animation-name":"fadeInUp"}},[t("div",{class:"upZone",onClick:m=>o(_)(!0,e)},[e.PromotionBanner?(n(),s("img",{key:0,src:o(X)({target:"CdnRedirect2",srcPath:`${e.PromotionBanner}`})},null,8,yo)):p("",!0),e.IsNew?(n(),s("div",$o,[t("img",{src:o(I)("/images/promotion/icon_eventNew.svg")},null,8,bo),L("NEW ")])):p("",!0),e.IsHot?(n(),s("div",Po,[t("img",{src:o(I)("/images/promotion/icon_eventHot.svg")},null,8,To),L("HOT ")])):p("",!0)],8,fo),t("div",ko,[t("div",Co,[t("h3",null,[t("span",null,u(e.Name),1)]),e.EndTime?(n(),s("h2",Io,u(o(B)(e.BeginTime))+" - "+u(o(B)(e.EndTime)),1)):p("",!0),e.EndTime?p("",!0):(n(),s("h2",Do,u(l.$t("Promotion.NoEndTime")),1))]),t("a",{class:"btnP goldLLineBtn blueLLineBtn goPromotion",onClick:m=>o(_)(!0,e)},u(l.$t("Promotion.BetailBtn")),9,Lo)])]))),128))]),r.currentList.length==0?(n(),P(J,{key:0})):p("",!0)],2)])]))}}),Bo={class:"v_deep_promotion"},Eo={class:"main_content_wrap main_content_wrap_notice main_content_wrap_promotion"},Mo={id:"un-lobby",class:"gameZoneA"},Ho=T({__name:"Promotion",setup(r){const _=v(9),l=z.SHOW_HOME_TITLE_LOGO,{changeModal:d,currentItems:e,currentPage:g,listData:m,loading:i,modalData:h,setCurrentPage:c,showModal:a,totalPage:f,useTab:k,onTabInitChange:V}=S({perPage:o(_)});return w("tabDispatch",k),w("changeModalDispatch",{changeModal:d}),(O,y)=>(n(),s("div",null,[$(j,{loading:o(i),"ani-frame":!1},{"header-icon":b(()=>[t("span",{class:D({"icon-iiconLogoB":o(l),Logo:!o(l)})},null,2)]),"header-title":b(()=>[t("span",null,u(O.$t("Promotion.EventTitle")),1)]),default:b(()=>[t("div",Bo,[t("div",Eo,[t("div",Mo,[$(ho,{list:o(m),onChangeTab:o(V)},null,8,["list","onChangeTab"]),$(wo,{"current-list":o(e),loading:o(i)},null,8,["current-list","loading"]),$(Z,{"current-page":o(g),"total-page":o(f),"page-size":o(_),onToPage:y[0]||(y[0]=C=>o(c)(C))},null,8,["current-page","total-page","page-size"])])])]),(n(),P(q,{to:"#app"},[o(a)?(n(),P(ro,{key:0,modelValue:o(a),"onUpdate:modelValue":y[1]||(y[1]=C=>R(a)?a.value=C:null),"modal-data":o(h),onClose:o(d)},null,8,["modelValue","modal-data","onClose"])):p("",!0)]))]),_:1},8,["loading"])]))}});const Wo=N(Ho,[["__scopeId","data-v-f788cc95"]]);export{Wo as default};