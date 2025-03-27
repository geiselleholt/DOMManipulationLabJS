// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

let mainEL = document.querySelector("main");
mainEL.style.backgroundColor = "var(--main-bg)";
mainEL.innerHTML = "<h1>DOM Manipulation</h1>";
mainEL.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach((menuLink) => {
  let linkEl = document.createElement("a");
  linkEl.setAttribute("href", menuLink.href);
  linkEl.textContent = menuLink.text;
  topMenuEl.appendChild(linkEl);
});
