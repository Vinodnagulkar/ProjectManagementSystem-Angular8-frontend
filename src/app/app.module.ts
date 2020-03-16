import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { AddprojectComponent } from './addproject/addproject.component';
import { ProjectdiscriptionComponent } from './projectdiscription/projectdiscription.component';
import { ProjecttaskComponent } from './projecttask/projecttask.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { CustomsoftwaredevelopmentComponent } from './customsoftwaredevelopment/customsoftwaredevelopment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    ProjectComponent,
    AddprojectComponent,
    ProjectdiscriptionComponent,
    ProjecttaskComponent,
    UpdateprojectComponent,
    PagenotfoundComponent,
    ContactusComponent,
    FooterComponent,
    CustomsoftwaredevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
