class Settings {
  constructor() {
    this.initSelect();
    this.initElements();
    this.initUrlSettings();
    this.initTemplates();
  }

  initSelect() {
    this.select = {
      input: {
        calendar: '.calendar [class*="icon-calendar"]',
        startDate: '#start-date',
        endDate: '#end-date'
      },
      menu: '#menu',
      pageBody: '.main',
      pageTogglers: '.sidebar__elem:not(#manager)',
      pages: '.page',
      sidebar: {
        container: '.sidebar',
        toggler: '.sidebar__toggler',
        logo: '.sidebar__togger__logo'
      },
      header: '#header',
      btnQuit: '#quit-label',
      manager: '#manager',
      wallet: '#wallet',
      notification: {
        element: '#notification',
        badge: '#notification__toggler > .notification__badge'
      },
      menuToggleSections: '.menu__elem.expanded',
      table: {
        banners: '#table-banners',
        links: '#table-links',
        row: 'tr',
        rowHeader: 'tr .section-header',
        rowBtn: '.table-products__btn'
      },
      templateOf: {
        table: '#template-table'
      }
    };
  }

  initElements() {
    this.elements = {
      input: {
        calendar: document.querySelector(this.select.input.calendar),
        startDate: document.querySelector(this.select.input.startDate),
        endDate: document.querySelector(this.select.input.endDate)
      },
      menuContainer: document.querySelector(this.select.menu),
      menuToggleSections: document.querySelector(this.select.menuToggleSections),
      pageBody: document.querySelector(this.select.pageBody),
      sidebarContainer: document.querySelector(this.select.sidebar.container),
      headerContainer: document.querySelector(this.select.header),
      btnQuit: document.querySelector(this.select.btnQuit),
      managerContainer: document.querySelector(this.select.manager),
      walletContainer: document.querySelector(this.select.wallet),
      notificationContainer: document.querySelector(this.select.notification.element),
      notificationBadge: document.querySelector(this.select.notification.badge),
      sidebar: {
        container: document.querySelector(this.select.sidebar.container),
        toggler: document.querySelector(this.select.sidebar.toggler),
        logo: document.querySelector(this.select.sidebar.logo),
        hamburger: document.getElementById('check')
      },
      pageTogglers: document.querySelectorAll(this.select.pageTogglers),
      pages: document.querySelectorAll(this.select.pages),
      table: {
        banners: document.querySelector(this.select.table.banners),
        links: document.querySelector(this.select.table.links),
        row: document.querySelector(this.select.table.row),
        rowHeader: document.querySelector(this.select.table.rowHeader),
        rowBtn: document.querySelectorAll(this.select.table.rowBtn)
      },
      templateOf: {
        table: document.querySelector(this.select.templateOf.table)
      }
    };
  }

  initUrlSettings() {
    this.urlSettings = {
      url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
      dataEndpoint: 'tableData'
    };
  }

  initTemplates() {
    this.templates = {
      table: Handlebars.compile(this.elements.templateOf.table.innerHTML)
    };
  }
}

export default Settings;
