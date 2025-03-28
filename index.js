var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let mainEL = document.querySelector(`main`);
mainEL.style.backgroundColor = `var(--main-bg)`;
mainEL.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEL.classList.add(`flex-ctr`);

let topMenuEl = document.getElementById(`top-menu`);
topMenuEl.style.height = `100%`;
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;
topMenuEl.classList.add(`flex-around`);

menuLinks.forEach((menuLink) => {
  let linkEl = document.createElement(`a`);
  linkEl.setAttribute(`href`, menuLink.href);
  linkEl.textContent = menuLink.text;
  topMenuEl.appendChild(linkEl);
});

let subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;
subMenuEl.classList.add(`flex-around`);
subMenuEl.style.position = `absolute`;
subMenuEl.style.top = "0";

let topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", handleTopMenuEl);

function handleTopMenuEl(e) {
  e.preventDefault();

  if (e.target.tagName !== "A") {
    return;
  } else {
    console.log(`You clicked ${e.target.textContent}`);
  }

  topMenuLinks.forEach((element) => {
    element.classList.remove("active");
  });

  e.target.classList.toggle("active");
}
