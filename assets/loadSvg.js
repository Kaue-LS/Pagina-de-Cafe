const coffeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="inherit"
 height="inherit" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2"
   stroke-linecap="round" stroke-linejoin="round" 
   class="lucide lucide-coffee w-8 h-8" 
   data-fg-d5jy4="2.13:2.1698:/src/app/components/Header.tsx:14:13:542:30:e:Coffee::::::DRXG" 
   data-fgid-d5jy4=":r8:"><path d="M10 2v2"></path><path 
   d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 
   4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path 
   d="M6 2v2"></path></svg>
`;
const cartSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="inherit" 
height="inherit" viewBox="0 0 24 24" fill="none" 
stroke="currentColor" stroke-width="2" 
stroke-linecap="round" stroke-linejoin="round" 
class="lucide lucide-shopping-cart w-5 h-5" 
data-fg-d5jy15="2.13:2.1698:/src/app/components/Header.tsx:34:13:1292:36:e:ShoppingCart::::::BPYc" 
data-fgid-d5jy15=":rf:"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle>
<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
`;
const mugCoffecontainer = document.getElementById('mugCoffe-svg');
const cartContainer = document.getElementById('cart-svg');


cartContainer.innerHTML = cartSvg;
mugCoffecontainer.innerHTML = coffeSvg;