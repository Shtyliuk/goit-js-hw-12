import{a as u,S as m,i}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();const f="https://pixabay.com/api/",h="49495202-279cad4ade428b3db0cc5c04a";async function y(o,t=1){try{return(await u.get(f,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t}})).data}catch(l){throw console.error("API error:",l),new Error("Oops! Something went wrong. Please try again later.")}}const r={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},w=new m(".gallery a",{captionDelay:250,captionsData:"alt"});function b(o){const{webformatURL:t,largeImageURL:l,tags:c,likes:e,views:a,comments:n,downloads:p}=o;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${l}">
        <img class="gallery-image" src="${t}" alt="${c}" />
      </a>
      <ul class="gallery-body">
        <li class="gallery-info">
          <h3>Likes:</h3>
          <p>${e}</p>
        </li>
        <li class="gallery-info">
          <h3>Views:</h3>
          <p>${a}</p>
        </li>
        <li class="gallery-info">
          <h3>Comments:</h3>
          <p>${n}</p>
        </li>
        <li class="gallery-info">
          <h3>Downloads:</h3>
          <p>${p}</p>
        </li>
      </ul>
    </li>`}function L(){r.gallery.innerHTML=""}function g(o){const t=o.hits.map(b).join(`
`);r.gallery.insertAdjacentHTML("beforeend",t),w.refresh()}let s=1,d="";r.loader.style.display="none";r.loadMoreBtn.style.display="none";r.form.addEventListener("submit",async o=>{if(o.preventDefault(),d=o.target.elements["search-text"].value.trim(),s=1,!d){i.show({message:"Search query cannot be empty!",messageColor:"white",backgroundColor:"orange",position:"topRight"});return}r.loader.style.display="flex",r.loadMoreBtn.style.display="none",L();try{const t=await y(d,s);t.hits.length===0?i.show({message:"No images found. Try again!",messageColor:"white",backgroundColor:"red",position:"topRight"}):(g(t),t.totalHits>s*15&&(r.loadMoreBtn.style.display="block"))}catch(t){i.show({message:t.message,messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{r.loader.style.display="none"}o.target.reset()});r.loadMoreBtn.addEventListener("click",async()=>{s++,r.loader.style.display="flex",r.loadMoreBtn.style.display="none";try{const o=await y(d,s);g(o),o.totalHits>s*15?r.loadMoreBtn.style.display="block":i.show({message:"No more images to load.",messageColor:"white",backgroundColor:"blue",position:"topRight"})}catch(o){i.show({message:o.message,messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{r.loader.style.display="none"}});
//# sourceMappingURL=index.js.map
