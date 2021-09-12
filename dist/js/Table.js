import { settings } from './script.js';
import { utils } from './utils.js';

class Table {
  constructor(tableContainer, data) {
    this.data = data;
    this.container = tableContainer;
    this.renderTable();
  }

  renderTable() {
    const generatedHTML = settings.templates.table(this.data);
    const element = utils.createDOMFromHTML(generatedHTML);
    this.container.appendChild(element);
  }
}

export default Table;
