(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e){if(t.type!==`childList`)continue;for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();const e=`modulepreload`,t=function(e){return`/front_6th_chapter1-1/`+e},n={},r=function(r,i,a){let o=Promise.resolve();if(i&&i.length>0){let r=document.getElementsByTagName(`link`),s=document.querySelector(`meta[property=csp-nonce]`),c=s?.nonce||s?.getAttribute(`nonce`);function l(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}o=l(i.map(i=>{if(i=t(i,a),i in n)return;n[i]=!0;let o=i.endsWith(`.css`),s=o?`[rel="stylesheet"]`:``,l=!!a;if(l)for(let e=r.length-1;e>=0;e--){let t=r[e];if(t.href===i&&(!o||t.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;let u=document.createElement(`link`);if(u.rel=o?`stylesheet`:e,o||(u.as=`script`),u.crossOrigin=``,u.href=i,c&&u.setAttribute(`nonce`,c),document.head.appendChild(u),o)return new Promise((e,t)=>{u.addEventListener(`load`,e),u.addEventListener(`error`,()=>t(Error(`Unable to preload CSS for ${i}`)))})}))}function s(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return o.then(e=>{for(let t of e||[]){if(t.status!==`rejected`)continue;s(t.reason)}return r().catch(s)})};function i(e){return`
  <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden product-card"
    data-product-id="${e.productId}">
<!-- 상품 이미지 -->
<div class="aspect-square bg-gray-100 overflow-hidden cursor-pointer product-image">
    <img src="${e.image}"
        alt="${e.title}"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        loading="lazy">
</div>
<!-- 상품 정보 -->
<div class="p-3">
    <div class="cursor-pointer product-info mb-3">
    <h3 class="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
        ${e.title}
    </h3>
    <p class="text-xs text-gray-500 mb-2">${e.brand}</p>
    <p class="text-lg font-bold text-gray-900">
        ${Number(e.lprice).toLocaleString()}원
    </p>
    </div>
    <!-- 장바구니 버튼 -->
    <button class="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md
            hover:bg-blue-700 transition-colors add-to-cart-btn" data-product-id="${e.productId}">
    장바구니 담기
    </button>
</div>
</div>`}const a=`<div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden animate-pulse">
<div class="aspect-square bg-gray-200"></div>
<div class="p-3">
    <div class="h-4 bg-gray-200 rounded mb-2"></div>
    <div class="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
    <div class="h-5 bg-gray-200 rounded w-1/2 mb-3"></div>
    <div class="h-8 bg-gray-200 rounded"></div>
</div>
</div>`,o=a.repeat(4);function s({products:e=[],total:t=0,loading:n=!1,loadingMore:r=!1,categories:i={},category1:a=``,category2:o=``}){return c(e,t,n,r,i,a,o)}const c=(e,t,n,r,a,s,c)=>`
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold text-gray-900">
              <a href="/" data-link="">쇼핑몰</a>
            </h1>
            <div class="flex items-center space-x-2">
              <!-- 장바구니 아이콘 -->
              <button id="cart-icon-btn" class="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main class="max-w-md mx-auto px-4 py-4">
        <!-- 검색 및 필터 -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-4">
          <!-- 검색창 -->
          <div class="mb-4">
            <div class="relative">
              <input type="text" id="search-input" placeholder="상품명을 검색해보세요..." value="" class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg
                          focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          <!-- 필터 옵션 -->
          <div class="space-y-3">
            <!-- 카테고리 필터 -->
            <div class="space-y-2">
              <!-- 브레드크럼 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">카테고리:</label>
                ${d(s,c)}
              </div>
              <!-- 1depth -->
              ${s?``:`<div class="flex flex-wrap gap-2">
                ${n?`<div class="text-sm text-gray-500 italic">카테고리 로딩 중...</div>`:l(a,s)}
                </div>`}
              <!-- 2depth -->
              ${s?`<div class="flex flex-wrap gap-2 mt-2">
                       ${u(a,s,c)}
                     </div>`:``}
            </div>
            <!-- 기존 필터들 -->
            <div class="flex gap-2 items-center justify-between">
              <!-- 페이지당 상품 수 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">개수:</label>
                <select id="limit-select"
                        class="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="10">
                    10개
                  </option>
                  <option value="20" selected="">
                    20개
                  </option>
                  <option value="50">
                    50개
                  </option>
                  <option value="100">
                    100개
                  </option>
                </select>
              </div>
              <!-- 정렬 -->
              <div class="flex items-center gap-2">
                <label class="text-sm text-gray-600">정렬:</label>
                <select id="sort-select" class="text-sm border border-gray-300 rounded px-2 py-1
                             focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                  <option value="price_asc" selected="">가격 낮은순</option>
                  <option value="price_desc">가격 높은순</option>
                  <option value="name_asc">이름순</option>
                  <option value="name_desc">이름 역순</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <!-- 상품 목록 -->
        <div class="mb-6">
          <div>
            ${n?``:`
            <div class="mb-4 text-sm text-gray-600">
              <span>총 </span><span class="font-medium text-gray-900">${t}</span><span>개의 상품</span>
            </div>
            `}
            <!-- 상품 그리드 -->
            <div class="grid grid-cols-2 gap-4 mb-6" id="products-grid">
              ${n?o:e.map(i).join(``)+(r?o:``)}
            </div>
            ${r?`<div class="text-center py-4">
                     <div class="inline-flex items-center">
                       <svg class="animate-spin h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24">
                         <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                         <path class="opacity-75" fill="currentColor"
                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                       </svg>
                       <span class="text-sm text-gray-600">상품을 불러오는 중...</span>
                     </div>
                   </div>`:``}
          </div>
        </div>
      </main>
      <footer class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-md mx-auto py-8 text-center text-gray-500">
          <p>© 2025 항해플러스 프론트엔드 쇼핑몰</p>
        </div>
      </footer>
    </div>
  `,l=(e,t)=>Object.keys(e).map(e=>`<button data-category1="${e}"
            class="category1-filter-btn px-3 py-2 text-sm rounded-md border
            ${t===e?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
            ${e}
          </button>`).join(``),u=(e,t,n)=>t&&e[t]?Object.keys(e[t]).map(e=>`<button data-category1="${t}" data-category2="${e}"
                  class="category2-filter-btn px-3 py-2 text-sm rounded-md border
                  ${n===e?`bg-blue-100 border-blue-300 text-blue-800`:`bg-white border-gray-300 text-gray-700 hover:bg-gray-50`}">
                  ${e}
                </button>`).join(``):``,d=(e,t)=>{let n=`<button data-breadcrumb="reset" class="text-xs hover:text-blue-800 hover:underline">전체</button>`;return e&&(n+=`<span class="text-xs text-gray-500">&gt;</span>
             <button data-breadcrumb="category1" data-category1="${e}"
               class="text-xs hover:text-blue-800 hover:underline">${e}</button>`),t&&(n+=`<span class="text-xs text-gray-500">&gt;</span>
             <span class="text-xs text-gray-600 cursor-default">${t}</span>`),n};async function f(e={}){let{limit:t=20,search:n=``,category1:r=``,category2:i=``,sort:a=`price_asc`}=e,o=e.current??e.page??1,s=new URLSearchParams({page:o.toString(),limit:t.toString(),...n&&{search:n},...r&&{category1:r},...i&&{category2:i},sort:a}),c=await fetch(`/api/products?${s}`);return await c.json()}async function p(e){let t=await fetch(`/api/products/${e}`);return await t.json()}async function m(){let e=await fetch(`/api/categories`);return await e.json()}var h=class{async getProducts(e={}){return await f(e)}async getProduct(e){return await p(e)}async getCategories(){return await m()}};const g=new h;var _=g;const v={success:`bg-green-600`,info:`bg-blue-600`,error:`bg-red-600`};function y(e,t=`success`,n=3e3){document.querySelectorAll(`.toast-notification`).forEach(e=>e.remove());let r=document.createElement(`div`);r.className=`toast-notification fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]`,r.innerHTML=`
    <div class="${v[t]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 max-w-sm">
      <div class="flex-shrink-0">
        ${t===`success`?` <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>`:t===`info`?` <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>`:` <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>`}
      </div>
      <p class="text-sm font-medium flex-1">${e}</p>
      <button class="toast-close-btn flex-shrink-0 ml-2">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>`,document.body.appendChild(r);let i=()=>r.remove();r.querySelector(`.toast-close-btn`).onclick=i,setTimeout(i,n)}var b=class{constructor(){this.cart={},this.loadFromStorage()}loadFromStorage(){try{let e=JSON.parse(localStorage.getItem(`shopping_cart`)||`{}`);Object.keys(this.cart).forEach(e=>delete this.cart[e]),Object.assign(this.cart,e)}catch{Object.keys(this.cart).forEach(e=>delete this.cart[e])}}saveToStorage(){localStorage.setItem(`shopping_cart`,JSON.stringify(this.cart))}updateBadge(){let e=document.querySelector(`#cart-icon-btn`);if(!e)return;e.querySelector(`span`)?.remove();let t=Object.keys(this.cart).length;if(t){let n=document.createElement(`span`);n.textContent=t,n.className=`absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`,e.appendChild(n)}}add(e,t=1){let{productId:n}=e;this.cart[n]?this.cart[n].quantity+=t:this.cart[n]={product:e,quantity:t},this.saveToStorage(),this.updateBadge(),y(`장바구니에 추가되었습니다`,`success`)}setQuantity(e,t){this.cart[e]&&(t<1||(this.cart[e].quantity=t,this.saveToStorage(),this.updateBadge()))}increase(e){this.cart[e]&&(this.cart[e].quantity+=1,this.saveToStorage(),this.updateBadge())}decrease(e){this.cart[e]&&this.cart[e].quantity!==1&&(--this.cart[e].quantity,this.saveToStorage(),this.updateBadge())}remove(e){this.cart[e]&&(delete this.cart[e],this.saveToStorage(),this.updateBadge())}clear(){Object.keys(this.cart).forEach(e=>delete this.cart[e]),this.saveToStorage(),this.updateBadge()}getCart(){return this.cart}getCount(){return Object.keys(this.cart).length}};const x=new b;var S=x;const C=S.getCart();function w(){S.loadFromStorage()}function T(){S.saveToStorage()}function E(){S.updateBadge()}function D(e,t=1){S.add(e,t)}const O=e=>`${Number(e).toLocaleString()}원`;function k(){let e=document.querySelector(`.cart-modal-overlay`);e&&e.remove();let t=document.createElement(`div`);t.className=`cart-modal-overlay fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4`,document.body.appendChild(t);let n=e=>{e.key===`Escape`&&r()};document.addEventListener(`keydown`,n),t.addEventListener(`click`,e=>{e.target===t&&r()}),i();function r(){t.remove(),document.removeEventListener(`keydown`,n)}function i(){t.innerHTML=``;let e=Object.values(C);if(e.length===0){t.innerHTML=`
          <div class="cart-modal relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden">
            <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <h2 class="text-lg font-bold text-gray-900 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                </svg>
                장바구니
              </h2>
              <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div class="flex-1 flex items-center justify-center p-8">
              <div class="text-center">
                <div class="text-gray-400 mb-4">
                  <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-gray-900 mb-2">장바구니가 비어있습니다</h3>
                <p class="text-gray-600">원하는 상품을 담아보세요!</p>
              </div>
            </div>
          </div>`,t.querySelector(`#cart-modal-close-btn`).onclick=r;return}let n=e.length,a=e.reduce((e,t)=>e+t.product.lprice*t.quantity,0),o=document.createElement(`div`);o.className=`cart-modal relative bg-white rounded-t-lg sm:rounded-lg shadow-xl w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-hidden`,t.appendChild(o),o.innerHTML=`
        <!-- 헤더 -->
        <div class="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h2 class="text-lg font-bold text-gray-900 flex items-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L6 2H3m4 11v6a1 1 0 001 1h1a1 1 0 001-1v-6M13 13v6a1 1 0 001 1h1a1 1 0 001-1v-6"></path>
            </svg>
            장바구니 <span class="text-sm text-gray-600 ml-1">(${n})</span>
          </h2>
          <button id="cart-modal-close-btn" class="text-gray-400 hover:text-gray-600 p-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
  
        <!-- 아이템 목록 -->
        <div class="flex flex-col max-h-[calc(90vh-120px)]">
          <div class="p-4 border-b border-gray-200 bg-gray-50">
            <label class="flex items-center text-sm text-gray-700">
              <input type="checkbox" id="cart-modal-select-all-checkbox"
                class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-2">
              전체선택 (${n}개)
            </label>
          </div>
          <div class="flex-1 overflow-y-auto">
            <div class="p-4 space-y-4">
              ${e.map(({product:e,quantity:t})=>`
                <div class="flex items-center py-3 border-b border-gray-100 cart-item" data-product-id="${e.productId}">
                  <label class="flex items-center mr-3">
                    <input type="checkbox" class="cart-item-checkbox w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" data-product-id="${e.productId}">
                  </label>
                  <div class="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                    <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover cursor-pointer cart-item-image">
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-medium text-gray-900 truncate">${e.title}</h4>
                    <p class="text-sm text-gray-600 mt-1">${O(e.lprice)}</p>
                    <div class="flex items-center mt-2">
                      <button class="quantity-decrease-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                      </button>
                      <input type="number" class="quantity-input w-12 h-7 text-center text-sm border-t border-b border-gray-300" value="${t}" min="1" disabled data-product-id="${e.productId}">
                      <button class="quantity-increase-btn w-7 h-7 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100" data-product-id="${e.productId}">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                      </button>
                    </div>
                  </div>
                  <div class="text-right ml-3">
                    <p class="text-sm font-medium text-gray-900 price-field" data-product-id="${e.productId}">${O(e.lprice*t)}</p>
                    <button class="cart-item-remove-btn mt-1 text-xs text-red-600 hover:text-red-800" data-product-id="${e.productId}">삭제</button>
                  </div>
                </div>`).join(``)}
            </div>
          </div>
  
          <!-- 하단 -->
          <div class="sticky bottom-0 bg-white border-t border-gray-200 p-4 space-y-2">
            <!-- 선택 요약 (초기 hidden) -->
            <div id="cart-modal-selected-summary" class="flex justify-between items-center text-sm hidden">
              <span class="text-gray-600">선택한 상품 (<span id="selected-count">0</span>개)</span>
              <span class="font-medium" id="selected-amount">0원</span>
            </div>
  
            <!-- 총 금액 -->
            <div class="flex justify-between items-center mb-1 text-sm">
              <span class="text-gray-600">총 금액</span>
              <span class="font-bold" id="cart-modal-total-amount">${O(a)}</span>
            </div>
  
            <!-- 액션 버튼 -->
            <button id="cart-modal-remove-selected-btn"
                    class="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm hidden">
              선택한 상품 삭제 (0개)
            </button>
  
            <div class="flex gap-2">
              <button id="cart-modal-clear-cart-btn"
                      class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors text-sm">
                전체 비우기
              </button>
              <button id="cart-modal-checkout-btn"
                      class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
                구매하기
              </button>
            </div>
          </div>
        </div>`,o.querySelector(`#cart-modal-close-btn`).onclick=r,o.querySelectorAll(`.quantity-increase-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.productId;C[t].quantity+=1,T();let n=o.querySelector(`.quantity-input[data-product-id="${t}"]`),r=o.querySelector(`.price-field[data-product-id="${t}"]`);n.value=C[t].quantity,r.textContent=O(C[t].quantity*C[t].product.lprice),o.querySelector(`#cart-modal-total-amount`).textContent=O(Object.values(C).reduce((e,t)=>e+t.product.lprice*t.quantity,0))}}),o.querySelectorAll(`.quantity-decrease-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.productId;if(C[t].quantity===1)return;--C[t].quantity,T();let n=o.querySelector(`.quantity-input[data-product-id="${t}"]`),r=o.querySelector(`.price-field[data-product-id="${t}"]`);n.value=C[t].quantity,r.textContent=O(C[t].quantity*C[t].product.lprice),o.querySelector(`#cart-modal-total-amount`).textContent=O(Object.values(C).reduce((e,t)=>e+t.product.lprice*t.quantity,0))}}),o.querySelectorAll(`.cart-item-remove-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.productId;delete C[t],T(),E(),i(),y(`삭제되었습니다`,`info`)}});let s=o.querySelector(`#cart-modal-select-all-checkbox`),c=o.querySelectorAll(`.cart-item-checkbox`),l=o.querySelector(`#cart-modal-remove-selected-btn`),u=()=>{let e=[...c].filter(e=>e.checked).length;s.checked=e===c.length,s.indeterminate=e>0&&e<c.length;let t=o.querySelector(`#cart-modal-selected-summary`),n=o.querySelector(`#selected-amount`),r=o.querySelector(`#cart-modal-remove-selected-btn`);if(e===0)t.classList.add(`hidden`),r.classList.add(`hidden`);else{let i=[...c].filter(e=>e.checked).reduce((e,t)=>{let n=t.dataset.productId;return e+C[n].product.lprice*C[n].quantity},0);t.classList.remove(`hidden`),r.classList.remove(`hidden`),t.querySelector(`#selected-count`).textContent=e,n.textContent=O(i),r.textContent=`선택한 상품 삭제 (${e}개)`}};s.onchange=()=>{c.forEach(e=>e.checked=s.checked),u()},c.forEach(e=>e.onchange=u),u(),l.onclick=()=>{let e=[...c].filter(e=>e.checked).map(e=>e.dataset.productId);e.forEach(e=>delete C[e]),T(),E(),i(),y(`선택한 상품이 삭제되었습니다`,`info`)},o.querySelector(`#cart-modal-clear-cart-btn`).onclick=()=>{Object.keys(C).forEach(e=>delete C[e]),T(),E(),i(),y(`장바구니를 비웠습니다`,`info`)}}}var A=class{constructor(){this.routes=[],this.notFoundHandler=null,this.BASE_PATH=`/front_6th_chapter1-1`,window.addEventListener(`popstate`,()=>{let e=this.getAppPath(window.location.pathname);this.handle(e)})}getAppPath(e=window.location.pathname){return e.startsWith(this.BASE_PATH)?e.slice(this.BASE_PATH.length)||`/`:e}getFullPath(e){return this.BASE_PATH+e}add(e,t){this.routes.push({pattern:e,handler:t})}setNotFound(e){this.notFoundHandler=e}navigate(e){let t=this.getAppPath();if(t===e)return;let n=this.getFullPath(e);history.pushState({},``,n),this.handle(e)}handle(e){for(let{pattern:t,handler:n}of this.routes){let r=this.match(t,e);if(r){n(r);return}}this.notFoundHandler&&this.notFoundHandler()}match(e,t){let n=e.split(`/`).filter(Boolean),r=t.split(`/`).filter(Boolean);if(n.length!==r.length)return null;let i={};for(let e=0;e<n.length;e++){let t=n[e],a=r[e];if(t.startsWith(`:`))i[t.slice(1)]=decodeURIComponent(a);else if(t!==a)return null}return i}getCurrentAppPath(){return this.getAppPath()}getCurrentFullPath(){return window.location.pathname}};const j=new A;var M=j,N=class{constructor(e,t={}){this.callback=e,this.threshold=t.threshold??200,this.loading=!1,this.attached=!1,this.onScroll=this.onScroll.bind(this)}attach(){this.attached||(window.addEventListener(`scroll`,this.onScroll),this.attached=!0)}detach(){this.attached&&(window.removeEventListener(`scroll`,this.onScroll),this.attached=!1)}async onScroll(){if(this.loading)return;let e=window.innerHeight+window.scrollY>=document.body.offsetHeight-this.threshold;if(e){this.loading=!0;try{await this.callback()}finally{this.loading=!1}}}},P=N,F=class{constructor(e=`#root`){this.rootEl=document.querySelector(e),this.state={products:[],total:0,loading:!1,loadingMore:!1,categories:{},limit:20,page:1,search:``,category1:``,category2:``,sort:`price_asc`},this.scrollManager=null,this.applyQueryParams()}applyQueryParams(){let e=new URLSearchParams(window.location.search);e.has(`sort`)&&(this.state.sort=e.get(`sort`)),e.has(`limit`)&&(this.state.limit=Number(e.get(`limit`))),e.has(`search`)&&(this.state.search=e.get(`search`)),e.has(`category1`)&&(this.state.category1=e.get(`category1`)),e.has(`category2`)&&(this.state.category2=e.get(`category2`))}updateQueryParams({replace:e=!1}={}){let t=new URLSearchParams;this.state.sort&&this.state.sort!==`price_asc`&&t.set(`sort`,this.state.sort),e&&this.state.limit===20||t.set(`limit`,String(this.state.limit)),this.state.search&&t.set(`search`,this.state.search),this.state.category1&&t.set(`category1`,this.state.category1),this.state.category2&&t.set(`category2`,this.state.category2);let n=t.toString(),r=n?`/?${n}`:`/`,i=e?`replaceState`:`pushState`;!e&&this.state.limit===20&&t.size===1&&t.has(`limit`)&&(i=`replaceState`),r!==window.location.pathname+window.location.search&&window.history[i]({},``,r)}async init(){this.state={products:[],total:0,loading:!1,loadingMore:!1,categories:{},limit:20,page:1,search:``,category1:``,category2:``,sort:`price_asc`},this.applyQueryParams(),w(),this.state.loading=!0,this.render();let[,e]=await Promise.all([this.fetchProducts(),_.getCategories().then(e=>e)]);this.state.categories=e,this.state.loading=!1,this.render(),this.setupInfiniteScroll(),this.updateQueryParams({replace:!0})}async fetchProducts(){let{products:e,pagination:t}=await _.getProducts({limit:this.state.limit,page:this.state.page,search:this.state.search,category1:this.state.category1,category2:this.state.category2,sort:this.state.sort});this.state.products=e,this.state.total=t.total}async loadMore(){this.state.loadingMore=!0,this.render();let e=this.state.page+1,{products:t,pagination:n}=await _.getProducts({limit:this.state.limit,page:e,search:this.state.search,category1:this.state.category1,category2:this.state.category2,sort:this.state.sort});this.state.products=[...this.state.products,...t],this.state.total=n.total,this.state.page=e,this.state.loadingMore=!1,this.render()}setupInfiniteScroll(){this.scrollManager||(this.scrollManager=new P(async()=>{!this.state.loading&&!this.state.loadingMore&&this.state.products.length<this.state.total&&await this.loadMore()}),this.scrollManager.attach())}render(){this.rootEl.innerHTML=s(this.state),this.attachEventListeners(),E()}attachEventListeners(){let{state:e}=this,t=document.querySelector(`#limit-select`);t&&(t.value=String(e.limit),t.onchange=async t=>{e.limit=Number(t.target.value),e.page=1,this.updateQueryParams(),await this.fetchProducts(),this.render()});let n=document.querySelector(`#search-input`);n&&(n.value=e.search,n.onkeydown=async t=>{if(t.key===`Enter`){let t=n.value.trim();e.search!==t&&(e.search=t,e.page=1,this.updateQueryParams(),await this.fetchProducts(),this.render())}}),document.querySelectorAll(`.add-to-cart-btn`).forEach(t=>{t.onclick=()=>{let n=e.products.find(e=>String(e.productId)===t.dataset.productId);n&&D(n)}}),document.querySelector(`#cart-icon-btn`)?.addEventListener(`click`,k),document.querySelectorAll(`.category1-filter-btn`).forEach(t=>{t.onclick=async()=>{e.category1=t.dataset.category1,e.category2=``,e.page=1,this.updateQueryParams(),await this.fetchProducts(),this.render()}}),document.querySelectorAll(`.category2-filter-btn`).forEach(t=>{t.onclick=async()=>{e.category1=t.dataset.category1,e.category2=t.dataset.category2,e.page=1,this.updateQueryParams(),await this.fetchProducts(),this.render()}}),document.querySelector(`[data-breadcrumb="reset"]`)?.addEventListener(`click`,async()=>{e.category1=``,e.category2=``,e.page=1,this.updateQueryParams(),await this.fetchProducts(),this.render()}),document.querySelector(`[data-breadcrumb="category1"]`)?.addEventListener(`click`,async t=>{e.category1=t.target.dataset.category1,e.category2=``,e.page=1,this.updateQueryParams(),await this.fetchProducts(),this.render()}),document.querySelectorAll(`.product-image, .product-info`).forEach(e=>{e.onclick=()=>{let t=e.closest(`.product-card`),n=t.dataset.productId;M.navigate(`/product/${n}`)}});let r=document.querySelector(`#sort-select`);r&&(r.value=e.sort,r.onchange=async t=>{e.sort=t.target.value,e.page=1,this.updateQueryParams(),await this.fetchProducts(),this.render()})}};const I=new F;var L=I;function R({loading:e=!0,product:t=null,related:n=[]}){return e||!t?`
    <div class="min-h-screen bg-gray-50 flex items-center justify-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>`:`
  <div class="min-h-screen bg-gray-50">
    <!-- 헤더 -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
      <div class="max-w-md mx-auto px-4 py-4 flex items-center space-x-3">
        <button onclick="history.back()" class="p-2 text-gray-700 hover:text-gray-900 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <h1 class="text-lg font-bold text-gray-900">상품 상세</h1>
      </div>
    </header>

    <main class="max-w-md mx-auto px-4 py-4">
      <div class="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div class="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover">
        </div>
        <h1 class="text-xl font-bold text-gray-900 mb-3">${t.title}</h1>

        <!-- 평점 및 리뷰 수 -->
        <div class="flex items-center mb-3">
          <div class="flex items-center">
            ${[1,2,3,4,5].map(e=>`<svg class="w-4 h-4 ${t.rating>=e?`text-yellow-400`:`text-gray-300`}" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                       </svg>`).join(``)}
          </div>
          <span class="ml-2 text-sm text-gray-600">${t.rating.toFixed(1)} (${t.reviewCount}개 리뷰)</span>
        </div>

        <p class="text-2xl font-bold text-blue-600 mb-4">${Number(t.lprice).toLocaleString()}원</p>

        <!-- 재고 -->
        <div class="text-sm text-gray-600 mb-4">재고 ${t.stock}개</div>

        <div class="flex items-center justify-between mb-4">
          <span class="text-sm font-medium text-gray-900">수량</span>
          <div class="flex items-center">
            <button id="quantity-decrease" class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
            </button>
            <input id="quantity-input" type="number" value="1" min="1" class="w-16 h-8 text-center text-sm border-t border-b border-gray-300">
            <button id="quantity-increase" class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-50 hover:bg-gray-100">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            </button>
          </div>
        </div>
        <button id="add-to-cart-btn" data-product-id="${t.productId}"
          class="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
          장바구니 담기
        </button>
      </div>

      <!-- 목록 돌아가기 -->
      <div class="mb-6">
        <button class="block w-full text-center bg-gray-100 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-200 transition-colors go-to-product-list">
          상품 목록으로 돌아가기
        </button>
      </div>

      ${n&&n.length?`
      <!-- 관련 상품 -->
      <div class="bg-white rounded-lg shadow-sm">
        <div class="p-4 border-b border-gray-200">
          <h2 class="text-lg font-bold text-gray-900">관련 상품</h2>
        </div>
        <div class="p-4 grid grid-cols-2 gap-3">
          ${n.map(e=>`
            <div class="bg-gray-50 rounded-lg p-3 related-product-card cursor-pointer" data-product-id="${e.productId}">
              <div class="aspect-square bg-white rounded-md overflow-hidden mb-2">
                <img src="${e.image}" alt="${e.title}" class="w-full h-full object-cover" loading="lazy">
              </div>
              <h3 class="text-sm font-medium text-gray-900 mb-1 line-clamp-2">${e.title}</h3>
              <p class="text-sm font-bold text-blue-600">${Number(e.lprice).toLocaleString()}원</p>
            </div>`).join(``)}
        </div>
      </div>`:``}
    </main>
  </div>`}var z=class{constructor(e=`#root`){this.rootEl=document.querySelector(e)}async show(e){this.rootEl.innerHTML=R({loading:!0});let t=await _.getProduct(e);this.rootEl.innerHTML=R({loading:!1,product:t,related:[]}),this.attachEvents(t),E();let{products:n}=await _.getProducts({limit:100}),r=n.filter(t=>t.productId!==e).slice(0,19);this.rootEl.innerHTML=R({loading:!1,product:t,related:r}),this.attachEvents(t),E()}attachEvents(e){let t=document.querySelector(`#quantity-input`);document.querySelector(`#quantity-increase`).onclick=()=>t.value=Number(t.value)+1,document.querySelector(`#quantity-decrease`).onclick=()=>{t.value>1&&(t.value=Number(t.value)-1)},document.querySelector(`#add-to-cart-btn`).onclick=()=>{let n=Number(t.value);D(e,n)},document.querySelectorAll(`.related-product-card`).forEach(e=>{e.onclick=()=>M.navigate(`/product/${e.dataset.productId}`)}),document.querySelector(`.go-to-product-list`)?.addEventListener(`click`,()=>{M.navigate(`/`)})}};const B=new z;var V=B;function H(){return`
      <main class="max-w-md mx-auto px-4 py-4">
        <div class="text-center my-4 py-20 shadow-md p-6 bg-white rounded-lg">
        <svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#4285f4;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#1a73e8;stop-opacity:1" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="8" flood-color="#000000" flood-opacity="0.1"/>
            </filter>
          </defs>
  
          <!-- 404 Numbers -->
          <text x="160" y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="48" font-weight="600" fill="url(#blueGradient)" text-anchor="middle">404</text>
  
          <!-- Icon decoration -->
          <circle cx="80" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
          <circle cx="240" cy="60" r="3" fill="#e8f0fe" opacity="0.8"/>
          <circle cx="90" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
          <circle cx="230" cy="45" r="2" fill="#4285f4" opacity="0.5"/>
  
          <!-- Message -->
          <text x="160" y="110" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="14" font-weight="400" fill="#5f6368" text-anchor="middle">페이지를 찾을 수 없습니다</text>
  
          <!-- Subtle bottom accent -->
          <rect x="130" y="130" width="60" height="2" rx="1" fill="url(#blueGradient)" opacity="0.3"/>
        </svg>
  
        <a href="/" data-link class="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">홈으로</a>
      </div>
      </main>
    `}const U=()=>r(async()=>{let{worker:e,workerOptions:t}=await import(`./browser-EepaDAeu.js`);return{worker:e,workerOptions:t}},[]).then(({worker:e,workerOptions:t})=>e.start(t));async function W(){M.handle(window.location.pathname)}U().then(W),M.add(M.BASE_PATH,()=>{L.init()}),M.add(M.BASE_PATH+`/product/:id`,async({id:e})=>{await V.show(e)}),M.setNotFound(()=>{document.querySelector(`#root`).innerHTML=H()});