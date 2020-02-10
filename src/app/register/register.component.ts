import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
  formdata:FormGroup;
  constructor(private userService:UserserviceService,private router: Router) { }
  ngOnInit() {
    this.formdata=new FormGroup({
      firstName:new FormControl("",Validators.compose([Validators.required])),
      lastName:new FormControl("",Validators.compose([Validators.required])),
      mobile:new FormControl("",Validators.compose([Validators.required,Validators.minLength(10),Validators.maxLength(10)])),
      email:new FormControl("",Validators.compose([Validators.required,Validators.email])),
      password:new FormControl("",Validators.compose([Validators.required,Validators.minLength(5)]))
    })
  }

  onClickSubmit(data){
    console.log(data);
    this.userService.createUser(data);
    alert("Registration Successful");
  }
}
