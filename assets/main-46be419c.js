import"./app-3aee4d23.js";const a=""+new URL("javascript-8dac5379.svg",import.meta.url).href,s=""+new URL("../vite.svg",import.meta.url).href;function n(e){let t=0;const o=r=>{t=r,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>o(t+1)),o(0)}document.querySelector("#app").insertAdjacentHTML("beforeend",`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${s}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${a}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <a href="./users/index.html">Users </a>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`);n(document.querySelector("#counter"));
