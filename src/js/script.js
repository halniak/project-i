import { utils } from './utils.js';
import Table from './Table.js';
import Settings from './settings.js';


export const app = {
  init: function () {
    settings.elements.sidebar.hamburger.checked = true;

    this.maxDate = new Date();
    this.minDate = utils.addDays(this.maxDate, -30);

    const initDates = {
      0: utils.dateToStr(this.minDate),
      1: utils.dateToStr(this.maxDate),
    };

    // eslint-disable-next-line no-undef
    flatpickr(settings.elements.input.calendar, {
      maxDate: this.maxDate,
      minDate: this.minDate,
      mode: 'range',
      onChange: function (selectedDates, dateStr) {
        const dateArray = dateStr.split(' to ');
        const dateObj = Object.assign({}, dateArray);
        app.updateDateRange(dateObj);
      },
    });

    app.initData();
    app.adjustMenu();
    //app.adjustTable();
    app.addListeners();
    app.updateDateRange(initDates);
  },

  initData: function () {
    const url = settings.urlSettings.url + '/' + settings.urlSettings.dataEndpoint;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        app.initTables(parsedResponse);
      });
  },

  initTables: function (tableData) {
    new Table(
      settings.elements.table.links,
      tableData[0]);

    new Table(
      settings.elements.table.banners,
      tableData[1]);
  },

  addListeners: function () {
    settings.elements.notificationContainer.addEventListener('click', app.toggleMenuSection);
    for (const pageToggler of settings.elements.pageTogglers) {
      pageToggler.addEventListener('click', app.pageToggle);
    }

    settings.elements.sidebar.toggler.addEventListener('click', function sidebarToggle(event) {
      event.preventDefault();

      settings.elements.sidebar.hamburger.checked ? settings.elements.sidebar.hamburger.checked = false : settings.elements.sidebar.hamburger.checked = true;
      settings.elements.sidebar.container.classList.toggle('active');
      settings.elements.pageBody.classList.toggle('active');
    });

    settings.elements.walletContainer.addEventListener('click', app.toggleMenuSection);
    window.addEventListener('DOMContentLoaded', () => {
      console.log('DOM fully loaded and parsed');
      app.adjustTable;
    });

    window.addEventListener('resize', function () {
      app.adjustMenu();
      //app.adjustTable();
    });
  },

  adjustMenu: function () {
    if (window.innerWidth < 575) {
      settings.elements.sidebarContainer.appendChild(settings.elements.menuContainer);
      settings.elements.btnQuit.innerHTML = 'Logout'; /* separate content from functionality! */
      settings.elements.managerContainer.classList.remove('active');
    }
    else {
      settings.elements.headerContainer.appendChild(settings.elements.menuContainer);
      settings.elements.btnQuit.innerHTML = '';
      settings.elements.managerContainer.classList.add('active');
    }
  },

  /*   adjustTable: function () {
      if (window.innerWidth < 575) {
        for (let i = 0; i < settings.elements.table.rowBtn.length; i++) {
          console.log(settings.elements.table.rowBtn[i]);

          settings.elements.table.rowHeader.appendChild(btn);
        }
      }
      else {
        for (const btn in settings.elements.table.rowBtn) {
          console.log(btn);
          console.log(settings.elements.table.rowBtn);
          settings.elements.table.rowHeader.appendChild(btn);
        }
      }
    }, */

  toggleMenuSection: function () {
    this.classList.toggle('expanded');

    if (this !== settings.elements.menuToggleSections && settings.elements.menuToggleSections !== null) {
      settings.elements.menuToggleSections.classList.remove('expanded');
    }

    if (this.id == 'notification') {
      settings.elements.notificationBadge.classList.toggle('active');
    }
  },

  pageToggle: function () {
    for (const page of settings.elements.pages) {
      if (this.id.includes(page.id)) {
        if (!page.classList.contains('active')) {
          page.classList.toggle('active');
          this.classList.toggle('active');
        }
      }
      else {
        page.classList.remove('active');
      }
    }

    for (const pageToggler of settings.elements.pageTogglers) {
      if (this.id !== pageToggler.id) {
        pageToggler.classList.remove('active');
      }
    }
  },

  updateDateRange: function (dates) {
    if (Object.keys(dates).length == 2) {
      settings.elements.input.startDate.innerHTML = dates[0];
      settings.elements.input.endDate.innerHTML = dates[1];
    }
  },
};

export const settings = new Settings();
app.init();
