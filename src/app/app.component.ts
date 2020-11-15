import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
})
export class AppComponent {
  private gridApi;
  private gridColumnApi;

  //public modules: Module[] = AllModules;
  //private defaultColDef;
  private columnDefs;
  private rowData;

  constructor() {
    // this.defaultColDef = {
    //   editable: true,
    //   resizable: true,
    //   minWidth: 100,
    //   flex: 1,
    // };
    this.columnDefs = [
      { field: 'make' },
      { field: 'model' },
      { field: 'price' },
    ];
    this.rowData = [
      {
        make: 'Toyota',
        model: 'Celica',
        price: 35000,
      },
      {
        make: 'Ford',
        model: 'Mondeo',
        price: 32000,
      },
      {
        make: 'Porsche',
        model: 'Boxter',
        price: 72000,
      },
    ];
  }

  onBtnExport() {
    var params = getParams();
    // if (params.suppressQuotes || params.columnSeparator) {
    //   alert(
    //     'NOTE: you are downloading a file with non-standard quotes or separators - it may not render correctly in Excel.'
    //   );
    // }
    this.gridApi.exportDataAsCsv(params);
  }

  onBtnUpdate() {
    // document.querySelector('#csvResult').value = this.gridApi.getDataAsCsv(
    //   getParams()
    // );
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
}



function getParams() {
  return {
    suppressQuotes:true,
    columnSeparator: '',
    customHeader: '',
    customFooter:'',
  };
}
