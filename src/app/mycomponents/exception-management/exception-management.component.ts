import { Component, Input, OnInit } from '@angular/core';
import { exceptionmanage } from 'src/app/model/exceptionmanage';
import { ModuleserviceService } from 'src/app/services/moduleservice.service';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exception-management',
  templateUrl: './exception-management.component.html',
  styleUrls: ['./exception-management.component.css']
})
export class ExceptionManagementComponent implements OnInit {
  public data=new exceptionmanage();
  res:any=String;

  constructor(private serv:ModuleserviceService,private snackbar:MatSnackBar,private router:Router,private dialogRef:MatDialogRef<ExceptionManagementComponent>) { }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log(this.data.from+" "+this.data.to);
    this.serv.exceptioncall().subscribe((result)=>{
        if(result!=null){
          console.log("result is :"+result.body);
          this.res=result;
          this.snackbar.open("data retrived successfylly","dissmiss",{duration:1000,panelClass:['blue-snackbar']});
          this.dialogRef.close();
          this.router.navigate(['datacomponent']);
        }else{
          console.log("no result retrived");
          this.snackbar.open("error!!","dissmiss",{duration:1000,panelClass:['blue-snackbar']})
        }
      }
    )
  }
}
