/* Settings */
export const select = {
  input: {
    calendar: '.calendar [class*="icon-calendar"]',
    startDate: '#start-date',
    endDate: '#end-date',
  },
  menu: '#menu',
  pageBody: '.main',
  pageTogglers: '.sidebar__elem:not(#manager)',
  pages: '.page',
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
  table: {
    banners: '#table-banners',
    links: '#table-links',
    row: 'tr',
    rowHeader: 'tr .section-header',
    rowBtn: '.table-products__btn',
  },
  templateOf: {
    tableElement: '#template-table-element',
  },
};

export const elements = {
  input: {
    calendar: document.querySelector(select.input.calendar),
    startDate: document.querySelector(select.input.startDate),
    endDate: document.querySelector(select.input.endDate),
  },
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
  },
  pageTogglers: document.querySelectorAll(select.pageTogglers),
  pages: document.querySelectorAll(select.pages),
  table: {
    banners: document.querySelector(select.table.banners),
    links: document.querySelector(select.table.links),
    row: document.querySelector(select.table.row),
    rowHeader: document.querySelector(select.table.rowHeader),
    rowBtn: document.querySelectorAll(select.table.rowBtn),
  },
  templateOf: {
    tableElement: document.querySelector(select.templateOf.tableElement),
  },
};

export const settings = {
  url: '//localhost:3131',
  links: 'links',
};

export const templates = {
  tableElement: Handlebars.compile(elements.templateOf.tableElement.innerHTML),
};
