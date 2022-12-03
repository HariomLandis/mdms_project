import * as filesaver from 'file-saver';
import { ElementRef, Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

const excel_extension='.xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportservService {
  [x: string]: any;

  constructor() { }
  /**
   * Creates excel from the table element reference.
   *
   * @param element DOM table element reference.
   * @param fileName filename to save as.
   */

  public exporttableeletoexcel(json:any[],fileName:string):void{
    const worksheet:XLSX.WorkSheet=XLSX.utils.json_to_sheet(json);
    //generate workbook and add to worksheet
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, fileName);
  }
private saveAsExcelFile(buffer: any, fileName: string): void {
   const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
   filesaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
}
   
}
