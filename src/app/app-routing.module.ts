import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ProjectdiscriptionComponent } from './projectdiscription/projectdiscription.component';
import { GuardService } from './guard.service';
import { ProjecttaskComponent } from './projecttask/projecttask.component';

const routes: Routes = [

{path:'', component: LoginComponent},
{path: 'home', component: HomeComponent,canActivate:[GuardService]},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'dashboard',component:DashboardComponent,canActivate:[GuardService]},
{path:'logout',component:LoginComponent},
{path:'dashboard/projects',component:ProjectComponent,canActivate:[GuardService]},
{path:'addproject',component:AddprojectComponent,canActivate:[GuardService]},
{path:'getproject/:project',component:ProjectdiscriptionComponent,canActivate:[GuardService]},
{path:'projecttask',component:ProjecttaskComponent,canActivate:[GuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
