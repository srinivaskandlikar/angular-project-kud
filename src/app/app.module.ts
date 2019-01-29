import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
 import { EmployeelistPipe } from './employee-list/employee-list.pipe';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes:Routes = [
{ path:'', redirectTo:'/home',pathMatch:'full' },
{ path:'home', component: HomeComponent },
{ path:'PagenotfoundComponent', component: PagenotfoundComponent },
{ path:'* *', component: PagenotfoundComponent },
{ path:'employeetrial', component: EmployeeComponent },


{ path:'EmployeeList', component: EmployeeListComponent },



];




@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
	EmployeeListComponent,
	EmployeelistPipe,
	EmployeeCountComponent,
	HomeComponent,
	PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
