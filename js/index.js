/** @format */

/* const home = document.getElementById("menu-home");
home.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

const about = document.getElementById("menu-about");
about.addEventListener("click", function () {
  const section_about = this.dataset.link;
  window.scrollTo({
    top: document.getElementById(section_about).offsetTop - 70,
    left: 0,
    behavior: "smooth"
  });
});

const exp = document.getElementById("menu-experience");
exp.addEventListener("click", function () {
  const section_exp = this.dataset.link;
  window.scrollTo({
    top: document.getElementById(section_exp).offsetTop - 70,
    left: 0,
    behavior: "smooth"
  });
});

const interest = document.getElementById("menu-interest");
interest.addEventListener("click", function () {
  const section_interest = this.dataset.link;
  window.scrollTo({
    top: document.getElementById(section_interest).offsetTop - 70,
    left: 0,
    behavior: "smooth"
  });
});

const contact = document.getElementById("menu-contact");
contact.addEventListener("click", function () {
  const section_contact = this.dataset.link;
  window.scrollTo({
    top: document.getElementById(section_contact).offsetTop - 70,
    left: 0,
    behavior: "smooth"
  });
});
 */

const menu = document.querySelector(".menu-btn");
menu.addEventListener("click", (event) => {
  const section = event.target.dataset.link;
  let offsetTop = 0;
  if ("home" != section) {
    console.log("1");
    offsetTop = document.getElementById(section).offsetTop - 70;
  } else {
    //do nothing
  }

  window.scrollTo({
    top: offsetTop,
    left: 0,
    behavior: "smooth"
  });
});
