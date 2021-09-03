let sidebarTrigger = {};

sidebarTrigger.logo = document.querySelector('.sidebar__toggler');
sidebarTrigger.checkbox = document.getElementById('check');

const menu = document.querySelector('.menu__wrapper');
let sideBar = document.querySelector('.sidebar');

sidebarTrigger.logo.addEventListener('click', sidebarToggle);
sidebarTrigger.checkbox.addEventListener('click', sidebarToggle);

function sidebarToggle(event) {
  event.preventDefault();
  const sidebar = document.querySelector('.sidebar');
  const mainPage = document.querySelector('.main');

  sidebarTrigger.checkbox.checked ? sidebarTrigger.checkbox.checked = false : sidebarTrigger.checkbox.checked = true;

  sidebar.classList.toggle('active');
  mainPage.classList.toggle('active');
}

window.addEventListener('resize', function () {
  if (window.innerWidth < 768) {
    sideBar.appendChild(menu);
  }
});

