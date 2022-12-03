import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExceptionManagementComponent } from './mycomponents/exception-management/exception-management.component';
import { ServiceOrderComponent } from './mycomponents/service-order/service-order.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './mycomponents/dashboard/dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarComponent } from './mycomponents/navbar/navbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http';
import { OutputdataComponent } from './mycomponents/outputdata/outputdata.component';

@NgModule({
  declarations: [
    AppComponent,
    ExceptionManagementComponent,
    ServiceOrderComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    OutputdataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
