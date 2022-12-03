import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './mycomponents/dashboard/dashboard.component';
import { ExceptionManagementComponent } from './mycomponents/exception-management/exception-management.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { OutputdataComponent } from './mycomponents/outputdata/outputdata.component';
import { ServiceOrderComponent } from './mycomponents/service-order/service-order.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"exceptionmodule",component:ExceptionManagementComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"servicemodule",component:ServiceOrderComponent},
  {path:"datacomponent",component:OutputdataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
