import { elements, templates } from './settings.js';
import { utils } from './utils.js';

class Table {
  constructor(id, data) {
    this.id = id;
    this.data = data;
    this.renderRow();
  }

  renderRow() {
    const generatedHTML = templates.tableElement(this.data);
    const element = utils.createDOMFromHTML(generatedHTML);
    const tableContainer = elements.table.links;
    tableContainer.appendChild(element);
  }
}

export default Table;
