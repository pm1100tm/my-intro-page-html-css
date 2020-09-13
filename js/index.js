/** @format */

// const
const menu = document.querySelector(".menu-btn");
const submenu = document.querySelector(".menu-btn-sub");
const menuToggleBtn = document.querySelector(".menu-hamburgar-div");
const navbar = document.querySelector(".container");

// menu button event : scroll to each section area.
menu.addEventListener("click", (event) => {
  const section = event.target.dataset.link;
  let offsetTop = 0;
  if ("home" != section) {
    offsetTop = document.getElementById(section).offsetTop - 70;
  } else {
    //do nothing
  }

  window.scrollTo({
    top: offsetTop,
    left: 0,
    behavior: "smooth"
  });

  hideMenu();
});

menuToggleBtn.addEventListener("click", () => {
  // console.log(menu.style.display);
  if (menu.style.display === "none") {
    showMenu();
    console.log("1");
    return false;
  } else {
    hideMenu();
    console.log("2");
    return false;
  }
  console.log("3");
});

function showMenu() {
  menu.style.display = "block";
  submenu.style.display = "flex";
  navbar.style.height = "100%";
}

function hideMenu() {
  menu.style.display = "none";
  submenu.style.display = "none";
  navbar.style.height = "70px";
}
