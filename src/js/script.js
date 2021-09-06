/* Settings */
const select = {
  menu: '#menu',
  pageBody: '.main',
  sidebar: {
    container: '.sidebar',
    logo: '.sidebar__toggler',
  },
  header: '#header',
  btnQuit: '#quit-label',
  manager: '#manager',
  wallet: '#wallet',
  notification: {
    element: '#notification',
    badge: '#notification__toggler > .notification__badge',
  },
  menuToggleSections: '.menu__elem.expanded',
};

const elements = {
  menuContainer: document.querySelector(select.menu),
  pageBody: document.querySelector(select.pageBody),
  sidebarContainer: document.querySelector(select.sidebar.container),
  headerContainer: document.querySelector(select.header),
  btnQuit: document.querySelector(select.btnQuit),
  managerContainer: document.querySelector(select.manager),
  walletContainer: document.querySelector(select.wallet),
  notificationContainer: document.querySelector(select.notification.element),
  notificationBadge: document.querySelector(select.notification.badge),
  sidebarTrigger: {
    logo: document.querySelector(select.sidebar.logo),
    checkbox: document.getElementById('check'),
  }
};

/* Init actions */
elements.sidebarTrigger.checkbox.checked = true;
adjustMenu();
addListeners();

/* Functions */
function adjustMenu() {
  if (window.innerWidth < 575) {
    elements.sidebarContainer.appendChild(elements.menuContainer);
    elements.btnQuit.innerHTML = 'Logout';
    elements.managerContainer.classList.remove('active');
  }
  else {
    elements.headerContainer.appendChild(elements.menuContainer);
    elements.btnQuit.innerHTML = '';
    elements.managerContainer.classList.add('active');
  }
}

function addListeners() {
  elements.sidebarTrigger.logo.addEventListener('click', function sidebarToggle(event) {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');

    elements.sidebarTrigger.checkbox.checked ? elements.sidebarTrigger.checkbox.checked = false : elements.sidebarTrigger.checkbox.checked = true;
    sidebar.classList.toggle('active');
    elements.pageBody.classList.toggle('active');
  });
  elements.walletContainer.addEventListener('click', toggleMenuSection);
  elements.notificationContainer.addEventListener('click', toggleMenuSection);
  window.addEventListener('resize', adjustMenu);
}

function toggleMenuSection() {
  const activeMenuSection = document.querySelector(select.menuToggleSections);
  this.classList.toggle('expanded');

  if (this !== activeMenuSection && activeMenuSection !== null) {
    activeMenuSection.classList.remove('expanded');
  }

  if (this.id == 'notification') {
    elements.notificationBadge.classList.toggle('active');
  }
}
