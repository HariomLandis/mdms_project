import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog'
import { exceptionmanage } from 'src/app/model/exceptionmanage';
import { ExceptionManagementComponent } from '../exception-management/exception-management.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router:Router,private matdialog:MatDialog) { }

  ngOnInit(): void {
  }
  exceptionroute(){
    //this.router.navigate(['exceptionmodule']);
    //var date=new exceptionmanage("","");
    const mdg=new MatDialogConfig();
    mdg.autoFocus=false;
    mdg.disableClose=false;
    mdg.width="30%";
    mdg.data={};
    this.matdialog.open(ExceptionManagementComponent,mdg);
  }
  serviceorderroute(){
    this.router.navigate(['servicemodule']);
  }

}
