/** @format */

// const
const menu = document.querySelector('.menu-btn');
const submenu = document.querySelector('.menu-btn-sub');
const menuToggleBtn = document.querySelector('.menu-hamburgar-div');
const navbar = document.querySelector('.container');
const mediaMaxWidth = 600;
const github = document.querySelector('#contact-github');
const velog = document.querySelector('#contact-velog');

// menu button event : scroll to each section area.
menu.addEventListener('click', (event) => {
  const section = event.target.dataset.link;
  let offsetTop = 0;
  if ('home' != section) {
    offsetTop = document.getElementById(section).offsetTop - 70;
  } else {
    //do nothing
  }

  window.scrollTo({
    top: offsetTop,
    left: 0,
    behavior: 'smooth'
  });

  if (window.innerWidth <= mediaMaxWidth) {
    hideMenu();
  } else {
    /* do nothing */
  }
});

menuToggleBtn.addEventListener('click', () => {
  if (menu.style.display === 'none') {
    showMenu();
    return false;
  } else {
    hideMenu();
    return false;
  }
});

function showMenu() {
  menu.style.display = 'block';
  submenu.style.display = 'flex';
  navbar.style.height = '100%';
}

function hideMenu() {
  menu.style.display = 'none';
  submenu.style.display = 'none';
  navbar.style.height = '70px';
}

const workingOnEvents = document.querySelectorAll('.image-event');
for (const workingOnEvent of workingOnEvents) {
  workingOnEvent.addEventListener('click', (e) => {
    e.preventDefault();
    let workingOnMessage = "Sorry, I'm working on this. ";
    userName = document.querySelector('#contact-name').value;
    if (userName) {
      alert(workingOnMessage + 'Please contact to "tladnjsen@gmail.com", Thank you, ' + userName + '.');
    } else {
      alert(workingOnMessage);
    }
  });
}

github.addEventListener('click', (event) => {
  window.open('https://github.com/pm1100tm', '_blank');
});
velog.addEventListener('click', (event) => {
  window.open('https://velog.io/@pm1100tm', '_blank');
});
// notion.addEventListener('click', (event) => {
//   window.open('https://www.notion.so/Backend-Developer-4366b9e6c43f4d84b59644b36d09445e', '_blank');
// });

const notion = document.querySelectorAll('.contact-notion');

notion.forEach((el) =>
  el.addEventListener('click', (event) => {
    window.open('https://www.notion.so/Backend-Developer-4366b9e6c43f4d84b59644b36d09445e', '_blank');
  })
);
