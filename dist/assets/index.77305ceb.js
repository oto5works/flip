import{m as k,a as I,c as B}from"./vuex.7030bcf8.js";import{g as j,j as h,o as l,k as d,l as s,t as g,m as L,q as $,v as u,x as v,y as b,z as M,A as z,F as y,B as C,C as G,D as O,E as V,G as U,H as R,T as X,I as H}from"./@vue.69bf86d1.js";import{a as J}from"./axios.a2e7c818.js";import"./firebase.d6297539.js";import{i as Q,g as Z,a as Y,c as q,q as ee,w as te,b as se,d as oe}from"./@firebase.e9023b40.js";import{c as ne,a as re}from"./vue-router.c5508e1d.js";import"./idb.13e98345.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const ie="modulepreload",le=function(e){return"/ankitoki/"+e},D={},ae=function(t,n,c){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=le(o),o in D)return;D[o]=!0;const i=o.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(!!c)for(let f=r.length-1;f>=0;f--){const w=r[f];if(w.href===o&&(!i||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const _=document.createElement("link");if(_.rel=i?"stylesheet":ie,i||(_.as="script",_.crossOrigin=""),_.href=o,document.head.appendChild(_),i)return new Promise((f,w)=>{_.addEventListener("load",f),_.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};const m=(e,t)=>{const n=e.__vccOpts||e;for(const[c,r]of t)n[c]=r;return n},de={components:{selectWords:j(()=>ae(()=>import("./selectWords.3ffb0049.js"),["assets/selectWords.3ffb0049.js","assets/vuex.7030bcf8.js","assets/@vue.69bf86d1.js","assets/axios.a2e7c818.js","assets/firebase.d6297539.js","assets/@firebase.e9023b40.js","assets/idb.13e98345.js","assets/vue-router.c5508e1d.js"]))},computed:{...k({selectWords:"state/getSelectWords"})},created(){},methods:{...I({setSelectWords:"state/setSelectWords"})}},ce={class:"app"};function ue(e,t,n,c,r,o){const i=h("selectWords"),p=h("RouterView");return l(),d("div",ce,[s("h1",{onClick:t[0]||(t[0]=a=>e.setSelectWords())},g(e.selectWords),1),e.selectWords?(l(),L(i,{key:0})):$("",!0),u(p)])}const _e=m(de,[["render",ue]]),pe=new Kuroshiro.default;async function he(){try{console.log("hello world!"),await pe.init(new KuromojiAnalyzer({dictPath:"https://oto5works.github.io/ankitoki/dict"}))}catch(e){throw console.error("Error occurred during Kuroshiro initialization:",e),e}}const me={namespaced:!0,state:{initialized:!1,showRuby:!1,showMean:!1,alwaysRuby:!1,alwaysMean:!1,selectWords:!1},mutations:{setInitialized(e,t){e.initialized=t},setShowRuby(e){e.showRuby=!e.showRuby},setShowMean(e){e.showMean=!e.showMean},setReset(e){e.showRuby=!1,e.showMean=!1},setSelectWords(e){e.selectWords=!e.selectWords}},actions:{async initialize({state:e,commit:t}){if(e.initialized){console.log("\uC774\uBBF8 Kuroshiro\uAC00 \uCD08\uAE30\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");return}console.log("Kuroshiro \uCD08\uAE30\uD654 \uC911...");try{await he(),console.log("Kuroshiro \uCD08\uAE30\uD654 \uC131\uACF5."),t("setInitialized",!0)}catch(n){throw console.error("\uCD08\uAE30\uD654 \uC911 \uC624\uB958 \uBC1C\uC0DD:",n),t("setInitialized",!1),n}},setShowRuby({commit:e}){e("setShowRuby")},setShowMean({commit:e}){e("setShowMean")},setReset({commit:e}){e("setReset")},setSelectWords({commit:e}){e("setSelectWords")}},getters:{getInitialized:e=>e.initialized,getSelectWords:e=>e.selectWords,getShowRuby:e=>e.showRuby,getShowMean:e=>e.showMean}},fe={apiKey:"AIzaSyC0961QpZqkQlchSbeAZ0dvywQh1my2hbE",authDomain:"ankitoki.firebaseapp.com",projectId:"ankitoki",storageBucket:"ankitoki.appspot.com",messagingSenderId:"873952892092",appId:"1:873952892092:web:e7c46b6b2846b05e126cb9",measurementId:"G-E19JLRGDNQ"},A=Q(fe);Z(A);const K=Y(A),we={namespaced:!0,state:{categoryOptions:["basic","n3","n2","n1","my"],category:null,part:null,words:[]},mutations:{setCategory(e,t){e.category=t},setPart(e,t){console.log("\uC9D1\uC5B4\uB123\uC5B4~",t),e.part=t},setWords(e,t){console.log("setWords \uC2DC\uC791",t),e.words=t}},actions:{async fetchWords({commit:e,state:t}){try{const n=q(K,"words"),c=ee(n,te("category","==",t.category)),o=(await se(c)).docs.map(i=>({id:i.id,...i.data()}));e("setWords",o)}catch(n){console.error("\uB2E8\uC5B4\uB97C \uAC00\uC838\uC624\uB294\uB370 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4:",n)}},setCategory({commit:e},t){e("setCategory",t)},setPart({commit:e,dispatch:t},n){console.log("\uBC1B\uC558\uC5B4~",n),e("setPart",n),t("filter/filterWords",null,{root:!0})}},getters:{getCategory:e=>e.category,getPart:e=>e.part,getWords:e=>e.words,getCategoryOptions:e=>e.categoryOptions}},P=new Kuroshiro.default;async function ge(){try{console.log("hello world!"),await P.init(new KuromojiAnalyzer({dictPath:"https://oto5works.github.io/assets/ankitoki/dict"}))}catch(e){throw console.error("Error occurred during Kuroshiro initialization:",e),e}}const ve={namespaced:!0,state:{initialized:!1,filteredWords:[],index:null,word:null,mean:null,examples:null},mutations:{setInitialized(e,t){e.initialized=t},setFilteredWords(e,t){e.filteredWords=t},setConvertedText(e,{word:t,mean:n}){e.mean=n,e.word=t},setExamples(e,t){e.examples=t},setIndex(e,t){e.index=t}},actions:{async initialize({state:e,commit:t}){if(e.initialized){console.log("\uC774\uBBF8 Kuroshiro\uAC00 \uCD08\uAE30\uD654\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");return}console.log("Kuroshiro \uCD08\uAE30\uD654 \uC911...");try{await ge(),console.log("Kuroshiro \uCD08\uAE30\uD654 \uC131\uACF5."),t("setInitialized",!0)}catch(n){throw console.error("\uCD08\uAE30\uD654 \uC911 \uC624\uB958 \uBC1C\uC0DD:",n),t("setInitialized",!1),n}},filterWords({commit:e,rootState:t}){const n=t.words.part,c=t.words.words,r=(n-1)*10,o=n*10,i=c.slice(r,o);e("setFilteredWords",i)},async convertToRuby({commit:e,state:t},{newIndex:n}){var c,r;console.log("convertToRuby");try{const o=(c=t.filteredWords[n])==null?void 0:c.word,i=(r=t.filteredWords[n])==null?void 0:r.mean;if(o){const p=await P.convert(o,{mode:"furigana",to:"hiragana"});e("setConvertedText",{word:p,mean:i})}else console.warn("\uD604\uC7AC \uC778\uB371\uC2A4\uC5D0 \uD574\uB2F9\uD558\uB294 \uB2E8\uC5B4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.")}catch(o){e("setConvertedText",o.message||"\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4."),console.error("Error:",o)}},async convertExamples({commit:e,state:t},{newIndex:n}){var c;console.log("convert Example Sentence");try{const r=(c=t.filteredWords[n])==null?void 0:c.examples;if(r&&Array.isArray(r)){const o=await Promise.all(r.map(async i=>i.sentence?{sentence:await P.convert(i.sentence,{mode:"furigana",to:"hiragana"}),translation:i.translation}:i));e("setExamples",o)}else console.warn("\uD604\uC7AC \uC778\uB371\uC2A4\uC5D0 \uD574\uB2F9\uD558\uB294 \uC608\uC81C\uAC00 \uC5C6\uAC70\uB098, \uC608\uC81C \uD615\uC2DD\uC774 \uBC30\uC5F4\uC774 \uC544\uB2D9\uB2C8\uB2E4.")}catch(r){console.error("Error:",r),e("setExamples",[])}},setConvertedText({commit:e},t){e("setConvertedText",t)},setNext({commit:e,state:t}){const n=t.index+1;n<t.filteredWords.length?e("setIndex",n):console.warn("Reached the end of the word list.")},setPrevious({commit:e,state:t}){const n=t.index-1;n>=0?e("setIndex",n):console.warn("Reached the beginning of the word list.")},setRandom({commit:e,state:t}){const n=Math.floor(Math.random()*t.filteredWords.length);e("setIndex",n)},setIndex({commit:e,dispatch:t},n){e("setIndex",n),t("convertToRuby",{newIndex:n}),t("convertExamples",{newIndex:n}),t("setReset")},setReset({dispatch:e}){e("state/setReset",null,{root:!0})}},getters:{getFilteredWords:e=>e.filteredWords,getIndex:e=>e.index,getWord:e=>e.word,getMean:e=>e.mean,getExamples:e=>e.examples}},ye=B({modules:{state:me,words:we,filter:ve}}),xe={data(){return{message:"",initializationProgress:0}},mounted(){this.handleInitialize()},computed:{...k({initialized:"filter/getInitialized"})},methods:{...I({initialize:"filter/initialize"}),async handleInitialize(){this.message="\uC0AC\uC804 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uACE0 \uC788\uC5B4\uC694.";let e=setInterval(()=>{this.initializationProgress>=100?clearInterval(e):this.initializationProgress+=30},500);try{await this.initialize(),this.message="\uC0AC\uC804 \uC815\uBCF4 \uBD88\uB7EC\uC624\uAE30 \uC644\uB8CC",this.initializationProgress=100}catch(t){console.error(t),this.message="\uC0AC\uC804 \uC815\uBCF4 \uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328"}},navigateToViewWords(){this.$router.push({name:"viewWords"})}}},$e={key:0};function be(e,t,n,c,r,o){return l(),d("div",null,[s("button",{style:{color:"white"},onClick:t[0]||(t[0]=(...i)=>o.navigateToViewWords&&o.navigateToViewWords(...i))}," Go to Kuromoji "),s("p",null,g(r.message),1),r.initializationProgress>0&&r.initializationProgress<100?(l(),d("p",$e," \uC9C4\uD589\uB960: "+g(r.initializationProgress)+"% ",1)):$("",!0)])}const Se=m(xe,[["render",be]]),We={},ke={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},Ie=s("polyline",{points:"208 96 128 176 48 96",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"16"},null,-1),Me=[Ie];function ze(e,t){return l(),d("svg",ke,Me)}const Ce=m(We,[["render",ze]]);const Re={components:{caretDown:Ce},computed:{...k({category:"words/getCategory",index:"filter/getIndex",filteredWords:"filter/getFilteredWords"})},methods:{...I({setSelectWords:"state/setSelectWords"})}},Ve={class:"header"},Pe={class:"index"};function Ee(e,t,n,c,r,o){const i=h("caretDown");return l(),d("div",Ve,[s("div",{class:"category",onClick:t[0]||(t[0]=p=>e.setSelectWords())},[s("h1",null,g(e.category),1),u(i)]),s("div",Pe,[s("h2",null,g(e.index+1),1),s("h3",null,"/"+g(e.filteredWords.length),1)])])}const Fe=m(Re,[["render",Ee],["__scopeId","data-v-87aba626"]]),Te={},De={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Le=s("path",{fill:"currentColor",d:"M10.998 1.58a2 2 0 0 1 2.004 0l7.5 4.342a2 2 0 0 1 .998 1.731v8.694a2 2 0 0 1-.998 1.73l-7.5 4.343a2 2 0 0 1-2.004 0l-7.5-4.342a2 2 0 0 1-.998-1.731V7.653a2 2 0 0 1 .998-1.73zM5.25 8.092a.5.5 0 0 0-.751.433v6.669a2 2 0 0 0 .998 1.73l5.751 3.33a.5.5 0 0 0 .751-.432v-6.669a2 2 0 0 0-.998-1.73zm10.517-2.575c-.478-.276-1.254-.276-1.732 0s-.478.724 0 1s1.254.276 1.732 0s.478-.724 0-1m-5.8 0c-.478-.276-1.254-.276-1.732 0s-.478.724 0 1s1.254.276 1.732 0c.479-.276.479-.724 0-1m7.025 10.328c.597-.345 1.082-1.184 1.082-1.875c0-.69-.485-.97-1.082-.625c-.598.345-1.083 1.185-1.083 1.875s.485.97 1.082.625M6.365 12.2c.478.277.866.053.866-.5c0-.552-.388-1.223-.866-1.5c-.478-.276-.866-.052-.866.5c0 .553.388 1.224.866 1.5m4.33 5.498c0 .552-.389.776-.867.5s-.866-.948-.866-1.5s.388-.776.866-.5s.866.948.866 1.5M7.231 15.7c0 .553-.388.777-.866.5c-.478-.276-.866-.947-.866-1.5c0-.552.388-.776.866-.5c.478.277.866.948.866 1.5m3.463-2c0 .553-.388.777-.866.5c-.479-.275-.866-.947-.866-1.5c0-.551.387-.775.866-.5c.478.277.866.949.866 1.5"},null,-1),qe=[Le];function Ae(e,t){return l(),d("svg",De,qe)}const Ke=m(Te,[["render",Ae]]),Ne={},Be={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},je=s("polyline",{points:"40 144 96 200 224 72",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"24"},null,-1),Ge=[je];function Oe(e,t){return l(),d("svg",Be,Ge)}const Ue=m(Ne,[["render",Oe]]);const Xe={components:{dice:Ke,check:Ue},computed:{...k({showRuby:"state/getShowRuby",showMean:"state/getShowMean"})},methods:{...I({setShowRuby:"state/setShowRuby",setShowMean:"state/setShowMean",setRandom:"filter/setRandom"})}},N=e=>(M("data-v-4a9dce28"),e=e(),z(),e),He={class:"buttonGroup"},Je=N(()=>s("span",null,"\uAC00",-1)),Qe=N(()=>s("span",null,"\u3042",-1));function Ze(e,t,n,c,r,o){const i=h("check"),p=h("btn"),a=h("dice");return l(),d("div",He,[u(p,{class:"show",onClick:t[0]||(t[0]=_=>e.setRandom())},{default:v(()=>[u(i)]),_:1}),u(p,{class:b(["show kr",{selected:e.showMean}]),onClick:t[1]||(t[1]=_=>e.setShowMean())},{default:v(()=>[Je]),_:1},8,["class"]),u(p,{class:b(["show jp",{selected:e.showRuby}]),onClick:t[2]||(t[2]=_=>e.setShowRuby())},{default:v(()=>[Qe]),_:1},8,["class"]),u(p,{class:"show selected",onClick:t[3]||(t[3]=_=>e.setRandom())},{default:v(()=>[u(a)]),_:1})])}const Ye=m(Xe,[["render",Ze],["__scopeId","data-v-4a9dce28"]]);const et={components:{buttonGroup:Ye,headers:Fe},mounted(){this.handleInitialize(),document.body.classList.add("no-scroll")},beforeDestroy(){document.body.classList.remove("no-scroll")},computed:{...k({showRuby:"state/getShowRuby",showMean:"state/getShowMean",word:"filter/getWord",mean:"filter/getMean",examples:"filter/getExamples"})},methods:{...I({initialize:"filter/initialize",setIndex:"filter/setIndex",setNext:"filter/setNext",setPrevious:"filter/setPrevious"}),async handleInitialize(){await this.initialize(),await this.setIndex(0)},startSwipe(e){this.swipeInProgress||(this.swipeInProgress=!0,this.swipeStartX=e.clientX||e.touches[0].clientX)},moveSwipe(e){if(this.swipeInProgress){const n=(e.clientX||e.touches[0].clientX)-this.swipeStartX;n>50?(this.setPrevious(),this.swipeInProgress=!1):n<-50&&(this.setNext(),this.swipeInProgress=!1)}},endSwipe(){this.swipeInProgress=!1}},data(){return{swipeStartX:null,swipeInProgress:!1}}},E=e=>(M("data-v-51658007"),e=e(),z(),e),tt=E(()=>s("div",{class:"spacing-1"},null,-1)),st=["innerHTML"],ot=E(()=>s("div",{class:"spacing-2"},null,-1)),nt={class:"kr"},rt=E(()=>s("div",{class:"spacing-2"},null,-1)),it={class:"example"},lt=["innerHTML"],at={key:0,class:"example-kr"};function dt(e,t,n,c,r,o){const i=h("headers"),p=h("buttonGroup");return l(),d("div",{class:"routerView",onTouchstart:t[0]||(t[0]=(...a)=>o.startSwipe&&o.startSwipe(...a)),onTouchmove:t[1]||(t[1]=(...a)=>o.moveSwipe&&o.moveSwipe(...a)),onTouchend:t[2]||(t[2]=(...a)=>o.endSwipe&&o.endSwipe(...a)),onMousedown:t[3]||(t[3]=(...a)=>o.startSwipe&&o.startSwipe(...a)),onMousemove:t[4]||(t[4]=(...a)=>o.moveSwipe&&o.moveSwipe(...a)),onMouseup:t[5]||(t[5]=(...a)=>o.endSwipe&&o.endSwipe(...a)),onMouseleave:t[6]||(t[6]=(...a)=>o.endSwipe&&o.endSwipe(...a))},[u(i),tt,s("div",{class:b(["jp",{ruby:e.showRuby}]),innerHTML:e.word},null,10,st),ot,s("div",nt,[(l(!0),d(y,null,C(e.mean,(a,_)=>(l(),d("div",{class:"kr-item",key:_},[s("h4",null,g(_+1)+".",1),s("h5",null,g(e.showMean?a:"\u25A1\u25A1\u25A1"),1)]))),128))]),rt,s("div",it,[(l(!0),d(y,null,C(e.examples,(a,_)=>(l(),d("div",{class:"example-item",key:_},[s("div",{class:b(["example-jp",{ruby:e.showRuby}]),innerHTML:a.sentence},null,10,lt),a.translation?(l(),d("div",at,g(e.showMean?a.translation:"\u25A1\u25A1\u25A1\u25A1\u25A1"),1)):$("",!0)]))),128))]),u(p)],32)}const ct=m(et,[["render",dt],["__scopeId","data-v-51658007"]]),ut={},_t=s("line",{x1:"40",y1:"128",x2:"216",y2:"128"},null,-1),pt=s("line",{x1:"128",y1:"40",x2:"128",y2:"216"},null,-1);function ht(e,t){return l(),d(y,null,[_t,pt],64)}const mt=m(ut,[["render",ht]]);const ft={components:{plus:mt},data(){return{newWord:{Word:"",mean:[""],examples:[],category:""}}},methods:{addMean(){this.newWord.mean.push("")},addExample(){this.newWord.examples.push({sentence:"",translation:""})},async addWord(){try{await oe(q(K,"words"),{word:this.newWord.word,mean:this.newWord.mean,examples:this.newWord.examples,category:this.newWord.category}),this.newWord.word="",this.newWord.mean=[""],this.newWord.examples=[],alert("\uB2E8\uC5B4\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.")}catch(e){console.error("Error adding document: ",e),alert("\uB2E8\uC5B4 \uCD94\uAC00\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.")}}}},x=e=>(M("data-v-90bc63fe"),e=e(),z(),e),wt={class:"routerView"},gt=x(()=>s("div",{class:"spacing-1"},null,-1)),vt=x(()=>s("h2",null,"\uB2E8\uC5B4 \u3142\u3148\u3147\u3142\u3148\u3147\u3142",-1)),yt={class:"width_100"},xt=x(()=>s("h1",null,"category",-1)),$t=U('<option disabled value="" data-v-90bc63fe>\uC120\uD0DD\uD574\uC8FC\uC138\uC694</option><option value="basic" data-v-90bc63fe>\uAE30\uBCF8</option><option value="n3" data-v-90bc63fe>JLPT N3</option><option value="n2" data-v-90bc63fe>JLPT N2</option><option value="n1" data-v-90bc63fe>JLPT N1</option>',5),bt=[$t],St={class:"width_100"},Wt=x(()=>s("h1",null,"word",-1)),kt={class:"width_100"},It=x(()=>s("div",null,[s("h1")],-1)),Mt=x(()=>s("div",{class:"spacing-2"},null,-1)),zt=x(()=>s("h1",null,"example sentence",-1)),Ct={class:"buttonGroup"},Rt=x(()=>s("span",null,"submit",-1));function Vt(e,t,n,c,r,o){const i=h("textField"),p=h("plus"),a=h("icon"),_=h("btn");return l(),d("div",wt,[gt,vt,s("div",yt,[xt,G(s("select",{id:"category","onUpdate:modelValue":t[0]||(t[0]=f=>r.newWord.category=f),required:""},bt,512),[[O,r.newWord.category]])]),s("div",St,[Wt,u(i,{label:"Enter Word",modelValue:r.newWord.word,"onUpdate:modelValue":t[1]||(t[1]=f=>r.newWord.word=f),type:"text",required:""},null,8,["modelValue"]),(l(!0),d(y,null,C(r.newWord.mean,(f,w)=>(l(),d("div",{key:w},[u(i,{label:`Enter Meaning ${w+1}`,modelValue:r.newWord.mean[w],"onUpdate:modelValue":W=>r.newWord.mean[w]=W,type:"text",required:""},null,8,["label","modelValue","onUpdate:modelValue"])]))),128)),u(_,{class:"word-button",type:"button",onClick:o.addMean},{default:v(()=>[u(a,null,{default:v(()=>[u(p)]),_:1})]),_:1},8,["onClick"])]),s("div",kt,[It,Mt,zt,(l(!0),d(y,null,C(r.newWord.examples,(f,w)=>(l(),d("div",{key:"example"+w},[u(i,{label:`Enter Sentence ${w+1}`,modelValue:f.sentence,"onUpdate:modelValue":W=>f.sentence=W,type:"text",required:""},null,8,["label","modelValue","onUpdate:modelValue"]),u(i,{label:`Enter Translation ${w+1}`,modelValue:f.translation,"onUpdate:modelValue":W=>f.translation=W,type:"text",required:""},null,8,["label","modelValue","onUpdate:modelValue"])]))),128)),u(_,{type:"button",onClick:o.addExample},{default:v(()=>[V("\uC608\uBB38 \uCD94\uAC00")]),_:1},8,["onClick"])]),s("div",Ct,[u(_,{class:"submit selected",type:"submit",onClick:o.addWord},{default:v(()=>[Rt]),_:1},8,["onClick"])])])}const Pt=m(ft,[["render",Vt],["__scopeId","data-v-90bc63fe"]]),Et=ne({history:re(),routes:[{path:"/",name:"main",component:Se},{path:"/viewWords",name:"viewWords",component:ct},{path:"/add",name:"add",component:Pt}]});const Ft={},F=e=>(M("data-v-4702619e"),e=e(),z(),e),Tt={class:"slot"},Dt=F(()=>s("div",{class:"overlay"},null,-1)),Lt=F(()=>s("div",{class:"underlay"},null,-1)),qt=F(()=>s("div",{class:"shadow"},null,-1));function At(e,t,n,c,r,o){return l(),d("button",null,[s("div",Tt,[R(e.$slots,"default",{},void 0,!0)]),Dt,Lt,qt])}const Kt=m(Ft,[["render",At],["__scopeId","data-v-4702619e"]]);const Nt={},Bt=s("circle",{cx:"128",cy:"180",r:"12",fill:"currentColor",stroke:"none"},null,-1),jt=s("path",{d:"M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4"},null,-1),Gt=s("circle",{cx:"128",cy:"128",r:"96"},null,-1);function Ot(e,t){return l(),d(y,null,[Bt,jt,Gt],64)}const Ut=m(Nt,[["render",Ot]]),Xt={},Ht=s("path",{d:"M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z"},null,-1),Jt=s("line",{x1:"128",y1:"144",x2:"128",y2:"104"},null,-1),Qt=s("circle",{cx:"128",cy:"180",r:"12",fill:"currentColor",stroke:"none"},null,-1);function Zt(e,t){return l(),d(y,null,[Ht,Jt,Qt],64)}const Yt=m(Xt,[["render",Zt]]);const es={components:{question:Ut,warning:Yt},props:{label:{type:String,required:!0},modelValue:{type:String,default:""},hint:{type:String,default:""},type:{type:String,default:"text"},rules:{type:[Array,String,Object],default:()=>[]}},data(){return{validationMessage:"",isFocused:!1,errorMessage:""}},methods:{handleInput(e){this.$emit("update:modelValue",e.target.value),this.validateInput()},async validateInput(){this.errorMessage="";for(const e of this.rules){const t=await e(this.modelValue);if(t!==!0){this.errorMessage=t;return}}}},computed:{isValid(){return this.errorMessage===""}}},S=e=>(M("data-v-373e91d5"),e=e(),z(),e),ts={class:"textField"},ss={class:"textField-flex"},os=S(()=>s("div",{class:"textField-space"},null,-1)),ns={class:"textField-input"},rs=["type","value"],is=S(()=>s("div",{class:"textField-space"},null,-1)),ls=S(()=>s("div",{class:"textField-overlay"},null,-1)),as={class:"textField-outline"},ds=S(()=>s("div",{class:"textField-outline__start"},null,-1)),cs={class:"textField-outline__notch"},us=S(()=>s("div",{class:"textField-outline__end"},null,-1)),_s=S(()=>s("div",{class:"textField-underline"},null,-1)),ps={class:"textField-details"},hs={key:0,class:"messages"},ms={key:1,class:"messages"},fs={key:0,class:"validation-message"};function ws(e,t,n,c,r,o){const i=h("warning"),p=h("icon"),a=h("question");return l(),d("div",{class:b(["form-field",{focus:r.isFocused,active:n.modelValue,invalid:!o.isValid}])},[s("div",ts,[s("div",ss,[os,s("div",ns,[s("input",{type:n.type,value:n.modelValue,onInput:t[0]||(t[0]=(..._)=>o.handleInput&&o.handleInput(..._)),onFocus:t[1]||(t[1]=_=>r.isFocused=!0),onBlur:t[2]||(t[2]=_=>r.isFocused=!1)},null,40,rs)]),R(e.$slots,"default",{},void 0,!0),is]),ls,s("div",as,[ds,s("div",cs,[s("label",null,g(n.label),1)]),us]),_s]),s("div",ps,[o.isValid?$("",!0):(l(),d("div",hs,[u(p,null,{default:v(()=>[u(i)]),_:1}),V(g(r.errorMessage),1)])),o.isValid&&n.hint?(l(),d("div",ms,[u(p,null,{default:v(()=>[u(a)]),_:1}),V(g(n.hint),1)])):$("",!0)]),r.validationMessage?(l(),d("p",fs)):$("",!0)],2)}const gs=m(es,[["render",ws],["__scopeId","data-v-373e91d5"]]);const vs={},ys={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 256 256",role:"presentation"};function xs(e,t,n,c,r,o){return l(),d("svg",ys,[s("g",null,[R(e.$slots,"default",{},void 0,!0)])])}const $s=m(vs,[["render",xs],["__scopeId","data-v-11b3338d"]]);const bs={},Ss=s("line",{x1:"200",y1:"56",x2:"56",y2:"200"},null,-1),Ws=s("line",{x1:"200",y1:"200",x2:"56",y2:"56"},null,-1);function ks(e,t){return l(),d(y,null,[Ss,Ws],64)}const Is=m(bs,[["render",ks]]),Ms={components:{x:Is},props:{dialog:{type:Boolean,default:!1},title:{type:String,default:""}},data(){return{loaded:!1}},mounted(){setTimeout(()=>{this.loaded=!0},1)},methods:{closeDialog(){this.$emit("update:dialog",!1)}}},zs={key:0,class:"overlay-container"},Cs={class:"overlay modalDialog"},Rs={class:"dialog"},Vs={class:"z-index_3 flex align-items_center justify-content_space-between gap_4 dialog-header"},Ps={class:"font-size_24"},Es={class:"dialog-content"};function Fs(e,t,n,c,r,o){const i=h("x"),p=h("icon");return l(),L(X,{to:"body"},[n.dialog?(l(),d("div",zs,[s("div",Cs,[s("div",{class:b(["overlay__scrim",{active:r.loaded}]),onClick:t[0]||(t[0]=(...a)=>o.closeDialog&&o.closeDialog(...a))},null,2),s("div",{class:b(["overlay__content",{active:r.loaded}])},[s("div",Rs,[s("div",Vs,[s("span",Ps,g(n.title),1),s("button",{class:"icon_48",onClick:t[1]||(t[1]=(...a)=>o.closeDialog&&o.closeDialog(...a))},[u(p,null,{default:v(()=>[u(i)]),_:1})])]),s("div",Es,[R(e.$slots,"default")])])],2)])])):$("",!0)])}const Ts=m(Ms,[["render",Fs]]);function Ds(e){e.use(ye).use(Et).component("btn",Kt).component("textField",gs).component("icon",$s).component("modalDialog",Ts)}const T=H(_e);T.config.globalProperties.$http=J;Ds(T);T.mount("#app");export{m as _};
