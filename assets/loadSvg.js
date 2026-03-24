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
const lotsSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
lucide-award w-8 h-8 text-amber-900" data-fg-ekyy23="2.16:2.4434:/src/app/components/Home.tsx:39:17:1704:44:e:Award::::::B1kh" 
data-fgid-ekyy23=":r11:"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 
0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
`;
const truckSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck w-8 h-8 text-amber-900" 
data-fg-ekyy30="2.16:2.4434:/src/app/components/Home.tsx:46:17:2109:44:e:Truck::::::Dl9l" data-fgid-ekyy30=":r16:"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path>
<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17"
 cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
`;
const heartSbg = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
lucide-heart w-8 h-8 text-amber-900" data-fg-ekyy37="2.16:2.4434:/src/app/components/Home.tsx:53:17:2505:44:e:Heart::::::Bi8G" data-fgid-ekyy37=":r1b:">
<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
`;
const mugCoffecontainer = document.querySelectorAll('#mugCoffe-svg');
const cartContainer = document.querySelectorAll('#cart-svg');
const lotsContainer = document.querySelectorAll('#lots-svg');
const truckContainer = document.querySelectorAll('#truck-svg');
const heartContainer = document.querySelectorAll('#heart-svg');

cartContainer.forEach(element => { element.innerHTML = cartSvg });
mugCoffecontainer.forEach(element => { element.innerHTML = coffeSvg });
lotsContainer.forEach(element => { element.innerHTML = lotsSvg });
truckContainer.forEach(element => { element.innerHTML = truckSvg });
heartContainer.forEach(element => { element.innerHTML = heartSbg });