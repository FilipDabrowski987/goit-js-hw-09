!function(){var e=document.querySelector(".form"),t=e.querySelector("button[promise-start]");function o(e,t){return new Promise((function(o,n){setTimeout((function(){Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}e.addEventListener("submit",(function(e){e.preventDefault(),t.setAttribute("disabled",!0);for(var n=Number(e.target.elements[2].value),i=Number(e.target.elements[1].value),r=Number(e.target.elements[0].value),a=0,u=0;u<n;u++)o(u,r+u*i).then((function(e){var o=e.position,i=e.delay;console.log("✅ Fulfilled promise ".concat(o+1," in ").concat(i,"ms")),++a===n&&t.removeAttribute("disabled")})).catch((function(e){var o=e.position,i=e.delay;console.log("❌ Rejected promise ".concat(o+1," in ").concat(i,"ms")),++a===n&&t.removeAttribute("disabled")}))}))}();
//# sourceMappingURL=03-promises.2dc45444.js.map