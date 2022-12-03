import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExportservService } from 'src/app/services/exportserv.service';
import { ModuleserviceService } from 'src/app/services/moduleservice.service';
import {result} from "d:/project1/demo/src/app/model/result";

@Component({
  selector: 'app-outputdata',
  templateUrl: './outputdata.component.html',
  styleUrls: ['./outputdata.component.css']
})
export class OutputdataComponent implements OnInit {
  public res:result[]=[];
  @ViewChild('userTable') userTable!:ElementRef;

  constructor(public router:Router,public exportserv:ExportservService,public moduleserv:ModuleserviceService) { }
  //res:any;
  ngOnInit(): void {
    this.moduleserv.fetchtestdata().subscribe(
      data=>{
        console.log(data);
        this.res=data;
      }
    );
  }
  onsubmit(){
  }
  goBack(){
    this.router.navigate(['dashboard']);
  }
  eletoexcel():void{
    this.exportserv.exporttableeletoexcel(this.res,'user_data');
  }

}
