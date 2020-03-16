import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ProjectdiscriptionComponent } from './projectdiscription/projectdiscription.component';
import { GuardService } from './guard.service';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomsoftwaredevelopmentComponent } from './customsoftwaredevelopment/customsoftwaredevelopment.component';

const routes: Routes = [

{path:'', component: LoginComponent},
{path: 'home', component: HomeComponent,canActivate:[GuardService]},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'dashboard',component:DashboardComponent,canActivate:[GuardService]},
{path:'logout',component:LoginComponent},
{path:'projects',component:ProjectComponent,canActivate:[GuardService]},
{path:'addproject',component:AddprojectComponent,canActivate:[GuardService]},
{path:'getproject/:pid',component:ProjectdiscriptionComponent,canActivate:[GuardService]},
{path:'projecttask',component:ProjecttaskComponent,canActivate:[GuardService]},
{path:'pagenotfound',component:PagenotfoundComponent,canActivate:[GuardService]},
{path:'contactus', component:ContactusComponent,canActivate:[GuardService]},
{path:'customsoftwaredevelopment',component:CustomsoftwaredevelopmentComponent,canActivate:[GuardService]},
{path:'**',component:PagenotfoundComponent,canActivate:[GuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
