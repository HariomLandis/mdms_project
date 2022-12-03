import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { handle } from 'src/app/model/handle';
import { MatSnackBar} from '@angular/material/snack-bar'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: handle=new handle();
  constructor(private router:Router,public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    console.log("hi initiated!!")
  }
  onsubmit(){
    console.log("login data is "+this.data.username+"  "+this.data.password);
    this.snackbar.open("login successful","dissmiss",{duration:1000,panelClass:['blue-snackbar']})
    this.router.navigate(['dashboard']);
  }
}
