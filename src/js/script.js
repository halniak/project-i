let sidebarTrigger = {};

sidebarTrigger.logo = document.querySelector('.sidebar__toggler');
sidebarTrigger.checkbox = document.getElementById('check');
sidebarTrigger.checkbox.checked = true;

const menuContainer = document.querySelector('#menu');
const pageBody = document.querySelector('.main');
let sidebarContainer = document.querySelector('.sidebar');
let headerContainer = document.querySelector('#header');
let btnQuit = document.querySelector('#quit-label');
let managerContainer = document.querySelector('#manager');

adjustMenu();

sidebarTrigger.logo.addEventListener('click', function sidebarToggle(event) {
  event.preventDefault();
  const sidebar = document.querySelector('.sidebar');

  sidebarTrigger.checkbox.checked ? sidebarTrigger.checkbox.checked = false : sidebarTrigger.checkbox.checked = true;
  sidebar.classList.toggle('active');
  pageBody.classList.toggle('active');
});

window.addEventListener('resize', adjustMenu);

function adjustMenu() {
  if (window.innerWidth < 575) {
    sidebarContainer.appendChild(menuContainer);
    btnQuit.innerHTML = 'Logout';
    managerContainer.classList.remove('active');
  }
  else {
    headerContainer.appendChild(menuContainer);
    btnQuit.innerHTML = '';
    managerContainer.classList.add('active');
  }
}
