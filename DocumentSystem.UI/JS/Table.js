export default class Table {
    constructor() {
        this.columns = [];
    }

    AddColumn(column) {
        this.columns.push(column);
    }

    Build(data) {
        let table = document.createElement('table');
        table.classList.add('table', 'table-hover');

        table.appendChild(this.BuildHeader());
        table.appendChild(this.BuildBody(data));

        return table;
    }

    BuildHeader() {
        let tableHeader = document.createElement('thead');
        let headerRow = document.createElement('tr');

        tableHeader.classList.add('thead-light');

        tableHeader.appendChild(headerRow);

        for (let column of this.columns) {
            let headingTitle = document.createElement('th');
            headingTitle.innerText = column.title;

            headerRow.appendChild(headingTitle);
        }

        return tableHeader;
    }

    BuildBody(data) {
        let tableBody = document.createElement('tbody');

        for (let cell of data) {
            let tableRow = document.createElement('tr');

            tableRow.dataset.rowId = cell.Id;

            for (let column of this.columns) {
                let tableData = document.createElement('td');

                if (!column.field && column.builder) {
                    column.builder(tableData, cell);
                } else {
                    tableData.appendChild(new Text(cell[column.field]));
                }

                tableRow.appendChild(tableData);
            }

            tableBody.appendChild(tableRow);
        }

        return tableBody;
    }
}