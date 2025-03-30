import{a as m,S as u,i}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(t){if(t.ep)return;t.ep=!0;const l=a(t);fetch(t.href,l)}})();const f="https://pixabay.com/api/",h="49495202-279cad4ade428b3db0cc5c04a";async function g(e,o=1){try{return(await m.get(f,{params:{key:h,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:o}})).data}catch(a){throw console.error("API error:",a),new Error("Oops! Something went wrong. Please try again later.")}}const r={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more")},w=new u(".gallery a",{captionDelay:250,captionsData:"alt"});function b(e){const{webformatURL:o,largeImageURL:a,tags:c,likes:t,views:l,comments:n,downloads:p}=e;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img class="gallery-image" src="${o}" alt="${c}" />
      </a>
      <ul class="gallery-body">
        <li class="gallery-info">
          <h3>Likes:</h3>
          <p>${t}</p>
        </li>
        <li class="gallery-info">
          <h3>Views:</h3>
          <p>${l}</p>
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
    </li>`}function L(){r.gallery.innerHTML=""}function y(e){const o=e.hits.map(b).join(`
`);r.gallery.insertAdjacentHTML("beforeend",o),w.refresh()}let s=1,d="";r.loader.style.display="none";r.loadMoreBtn.style.display="none";function C(){const e=document.querySelectorAll(".gallery-item");if(e.length>0){const o=e[0].getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}r.form.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.target.elements["search-text"].value.trim(),s=1,!d){i.show({message:"Search query cannot be empty!",messageColor:"white",backgroundColor:"orange",position:"topRight"});return}r.loader.style.display="flex",r.loadMoreBtn.style.display="none",L();try{const o=await g(d,s);o.hits.length===0?i.show({message:"No images found. Try again!",messageColor:"white",backgroundColor:"red",position:"topRight"}):(y(o),o.totalHits>s*15&&(r.loadMoreBtn.style.display="block"))}catch(o){i.show({message:o.message,messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{r.loader.style.display="none"}e.target.reset()});r.loadMoreBtn.addEventListener("click",async()=>{s++,r.loader.style.display="flex",r.loadMoreBtn.style.display="none";try{const e=await g(d,s);y(e),C(),e.totalHits>s*15?r.loadMoreBtn.style.display="block":i.show({message:"No more images to load.",messageColor:"white",backgroundColor:"blue",position:"topRight"})}catch(e){i.show({message:e.message,messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{r.loader.style.display="none"}});
//# sourceMappingURL=index.js.map
