import{a as g,S as u,i as n}from"./assets/vendor-DEZpR2tN.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",m="49495202-279cad4ade428b3db0cc5c04a";function f(o){return g.get(d,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data).catch(r=>{throw console.error("API error:",r),new Error("Oops! Something went wrong. Please try again later.")})}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},y=new u(".gallery a",{captionDelay:250,captionsData:"alt"});function p(o){const{webformatURL:r,largeImageURL:l,tags:i,likes:e,views:t,comments:s,downloads:c}=o;return`
    <li class="gallery-item">
      <a class="gallery-link" href="${l}">
        <img class="gallery-image" src="${r}" alt="${i}" />
      </a>
      <ul class="gallery-body">
        <li class="gallery-info">
          <h3>Likes:</h3>
          <p>${e}</p>
        </li>
        <li class="gallery-info">
          <h3>Views:</h3>
          <p>${t}</p>
        </li>
        <li class="gallery-info">
          <h3>Comments:</h3>
          <p>${s}</p>
        </li>
        <li class="gallery-info">
          <h3>Downloads:</h3>
          <p>${c}</p>
        </li>
      </ul>
    </li>`}function h(){a.gallery.innerHTML=""}function w(o){const r=o.hits.map(p).join(`
`);a.gallery.insertAdjacentHTML("beforeend",r),y.refresh()}a.loader.style.display="none";a.form.addEventListener("submit",b);function b(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.show({message:"Search query cannot be empty. Please enter a keyword!",messageColor:"white",backgroundColor:"orange",position:"topRight"});return}a.loader.style.display="flex",h(),f(r).then(l=>{l.hits.length===0?n.show({message:"Sorry, no images found. Try again!",messageColor:"white",backgroundColor:"red",position:"topRight"}):w(l)}).catch(l=>{n.show({message:l.message,messageColor:"white",backgroundColor:"red",position:"topRight"})}).finally(()=>{a.loader.style.display="none"}),o.target.reset()}
//# sourceMappingURL=index.js.map
