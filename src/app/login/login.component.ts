import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginformdata;

  constructor(private router:Router, private authService:AuthenticationService) { }

  ngOnInit() {
    this.loginformdata=new FormGroup({
      email:new FormControl("",Validators.compose([Validators.required,])),
      password:new FormControl("",this.passwordValidator),
      
    })
    sessionStorage.clear();
  }

  onClickSubmit(data){
    console.log(data.email);
   if(this.authService.authenticate(data.email,data.password))
   {
      alert("Login Successful");
      sessionStorage.setItem("Authuser",data);
      this.router.navigate(['dashboard']);
   }
   else{
    alert("Invalid Crendentials");
   }
  }

  passwordValidator(formcontrol){
    if(formcontrol.value.length<5){
      return{"password":true};
    }
  }


  isloggeduser(){
    let user  = sessionStorage.getItem("Authuser");
    return!(user==null)
     }

}
