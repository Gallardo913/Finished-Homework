// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// 1.0

const mainEl = document.querySelector('main') 

// 1.1

mainEl.style.backgroundColor = "var(--main-bg)"

// 1.2

let h1 = document.createElement("h1")
h1.innerText = "SEI Rocks!"
mainEl.append(h1)

// 1.3

mainEl.classList.add("flex-ctr")

// 2.0

const topMenuEl = document.querySelector("#top-menu")
//console.log(topMenuEl)

// 2.1

topMenuEl.style.height = "100%"

// 2.2 

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

// 2.3

topMenuEl.classList.add("flex-around")

