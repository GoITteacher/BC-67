import{v as c,b as l}from"./assets/vendor-2a142fa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class m{constructor(r,n,o){this.id=c(),this.username=r,this.email=n,this.text=o}toString(){return`<li class="box message" data-id="${this.id}">
    <h3>${this.username} - ${this.email}</h3>
    <div class="fb">
      <p class="message-desc">
       ${this.text}
      </p>
    </div>
    <button class="form-control" data-type="show">SHOW MODAL</button>
    <button class="form-control" data-type="delete">DELETE</button>
  </li>`}}const a={form:document.querySelector(".js-form"),container:document.querySelector(".js-messages")};a.form.addEventListener("submit",u);function u(s){s.preventDefault();const r=s.target.elements.username.value,n=s.target.elements.email.value,o=s.target.elements.message.value,e=new m(r,n,o);a.container.insertAdjacentHTML("afterbegin",e.toString()),s.target.reset()}a.container.addEventListener("click",s=>{if(!(s.target.dataset.type==="show"))return;const o=s.target.previousElementSibling.firstElementChild.textContent.trim();l.create(`
    <div class="modalka">
      <p>${o}</p>
    </div>
  `).show()});
//# sourceMappingURL=commonHelpers.js.map
