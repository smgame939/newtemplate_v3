import{A as I,P as E}from"./autoplay-a99e23af.js";import{S as P,a as h,b as R}from"./swiper-vue-2d39ee25.js";import{u as B}from"./useSlideShow-39454064.js";import{S as N,t as q,x as T,_ as A}from"./index-42c4f717.js";import{i as U,r as l,P as $,o as i,y as m,ai as j,m as d,v as e,l as w,q as a,z as L,aj as M,aq as O,ae as V,af as H,X as W,ao as D,ap as F}from"./vendor-749afd36.js";const S=t=>(D("data-v-088df9a6"),t=t(),F(),t),G={href:"https://www.youtube.com/watch?v=8zC9iKo36yA&ab_channel=38_corp",target:"_blank"},K=S(()=>a("source",{src:"https://videos.lmtz2.com/videos/video_banner_web.webm",type:"video/webm"},null,-1)),X=S(()=>a("source",{src:"https://videos.lmtz2.com/videos/video_banner_web.mp4",type:"video/mp4"},null,-1)),J=[K,X],Q=["href"],Y=["src"],Z=U({__name:"SlideShow",props:{slidePageType:{type:Number,require:!0},sizes:{type:Object,require:!1,default:()=>({height:540,width:1620})},effect:{type:String,require:!1,default:"fade"},animated:{type:String,require:!1}},setup(t){const r=t;P.use([I,E]);const{fetchSlideShowData:y,slides:v,videoEl:g,onActiveIndexChange:c,videoOnEnd:p,onSwiper:b}=B(r.slidePageType),u=l(),o=l("auto"),n=l(0),z=N.SITE_NAME,x=W().currentRoute;$(()=>{y();const f=u.value.$el.swiper.size;o.value=Math.floor(f/(r.sizes.width/r.sizes.height))+"px"});const C=()=>{n.value===1||o.value==="auto"||(n.value=1,o.value="auto")};return(f,_)=>(i(),m("div",{class:"banner",style:H({height:e(o),opacity:e(n)})},[j(e(R),{ref_key:"swiperRef",ref:u,"slides-per-view":1,"initial-slide":0,autoplay:!0,loop:!0,effect:t.effect,pagination:{clickable:!0},"lazy-preload-prev-next":1,class:V([t.animated]),scrollspy:"false",onSwiper:e(b),onRealIndexChange:e(c),onPaginationUpdate:e(c)},{default:d(()=>[e(z)=="bet38"&&e(x).name=="Home"?(i(),w(e(h),{key:0},{default:d(()=>[a("a",G,[a("video",{ref_key:"videoEl",ref:g,class:"w-100% object-fill",autoplay:"",muted:"",onEnded:_[0]||(_[0]=(...s)=>e(p)&&e(p)(...s))},J,544)])]),_:1})):L("",!0),(i(!0),m(M,null,O(e(v),(s,k)=>(i(),w(e(h),{key:`image_${k}`},{default:d(()=>[a("a",{href:s.Link},[a("img",{class:"swiper-lazy",src:e(q)({target:"CdnRedirect2",srcPath:`${e(T)(s.Url)}`}),loading:"lazy",alt:"",onLoad:C},null,40,Y)],8,Q)]),_:2},1024))),128))]),_:1},8,["effect","class","onSwiper","onRealIndexChange","onPaginationUpdate"])],4))}});const re=A(Z,[["__scopeId","data-v-088df9a6"]]);export{re as S};
