import { utils } from './utils.js';
import Table from './Table.js';
import { select, elements, settings } from './settings.js';


export const app = {
  init: function () {
    elements.sidebarTrigger.checkbox.checked = true;

    this.maxDate = new Date();
    this.minDate = utils.addDays(this.maxDate, -30);

    const initDates = {
      0: utils.dateToStr(this.minDate),
      1: utils.dateToStr(this.maxDate),
    };

    // eslint-disable-next-line no-undef
    flatpickr(elements.input.calendar, {
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
    app.adjustTable();
    app.addListeners();
    app.updateDateRange(initDates);
  },

  initData: function () {
    const url = settings.url + '/' + settings.links;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        app.initTables(parsedResponse);
      });
  },

  initTables: function (linksData) {
    for (const link in linksData) {
      new Table(
        linksData[link].id,
        linksData[link]
      );
    }
  },

  addListeners: function () {
    elements.notificationContainer.addEventListener('click', app.toggleMenuSection);
    for (const pageToggler of elements.pageTogglers) {
      pageToggler.addEventListener('click', app.pageToggle);
    }

    elements.sidebarTrigger.logo.addEventListener('click', function sidebarToggle(event) {
      event.preventDefault();
      const sidebar = document.querySelector(select.sidebar.container);

      elements.sidebarTrigger.checkbox.checked ? elements.sidebarTrigger.checkbox.checked = false : elements.sidebarTrigger.checkbox.checked = true;
      sidebar.classList.toggle('active');
      elements.pageBody.classList.toggle('active');
    });

    elements.walletContainer.addEventListener('click', app.toggleMenuSection);
    window.addEventListener('DOMContentLoaded', () => {
      console.log('DOM fully loaded and parsed');
      app.adjustTable;
    });

    window.addEventListener('resize', app.adjustTable /* () => {
      app.adjustMenu;
      app.adjustTable;
    } */);
  },

  adjustMenu: function () {
    if (window.innerWidth < 575) {
      elements.sidebarContainer.appendChild(elements.menuContainer);
      elements.btnQuit.innerHTML = 'Logout'; /* separate content from functionality! */
      elements.managerContainer.classList.remove('active');
    }
    else {
      elements.headerContainer.appendChild(elements.menuContainer);
      elements.btnQuit.innerHTML = '';
      elements.managerContainer.classList.add('active');
    }
  },

  adjustTable: function () {
    console.log(document.readyState);
    console.log(elements.table.rowBtn);
    if (window.innerWidth < 575) {
      for (let i = 0; i < elements.table.rowBtn.length; i++) {
        console.log(elements.table.rowBtn[i]);

        //elements.table.rowHeader.appendChild(btn);
      }
    }
    else {
      for (const btn in elements.table.rowBtn) {
        console.log(btn);
        console.log(elements.table.rowBtn);
        //elements.table.rowHeader.appendChild(btn);
      }
    }
  },

  toggleMenuSection: function () {
    const activeMenuSection = document.querySelector(select.menuToggleSections);
    this.classList.toggle('expanded');

    if (this !== activeMenuSection && activeMenuSection !== null) {
      activeMenuSection.classList.remove('expanded');
    }

    if (this.id == 'notification') {
      elements.notificationBadge.classList.toggle('active');
    }
  },

  pageToggle: function () {
    for (const page of elements.pages) {
      if (this.id.includes(page.id)) {
        page.classList.toggle('active');
        this.classList.toggle('active');
      }
    }
  },

  updateDateRange: function (dates) {
    if (Object.keys(dates).length == 2) {
      elements.input.startDate.innerHTML = dates[0];
      elements.input.endDate.innerHTML = dates[1];
    }
  },
};

app.init();
