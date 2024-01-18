(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class a{constructor(s,n,o){this.username=s,this.email=n,this.text=o}toString(){return`<li class="box message">
    <h3>${this.username} - ${this.email}</h3>
    <div class="fb">
      <p class="message-desc">
       ${this.text}
      </p>
    </div>
    <button class="form-control" data-type="delete">SHOW MODAL</button>
    <button class="form-control" data-type="delete">DELETE</button>
  </li>`}}const c={form:document.querySelector(".js-form"),container:document.querySelector(".js-messages")};c.form.addEventListener("submit",l);function l(r){r.preventDefault();const s=r.target.elements.username.value,n=r.target.elements.email.value,o=r.target.elements.message.value,e=new a(s,n,o);c.container.insertAdjacentHTML("afterbegin",e.toString())}
//# sourceMappingURL=commonHelpers.js.map
