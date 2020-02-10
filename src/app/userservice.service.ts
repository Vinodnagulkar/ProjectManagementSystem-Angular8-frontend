import { Injectable } from '@angular/core';
import { Userinterface } from './userinterface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private router:Router) { }

createUser(user:Userinterface){
console.log("User Object______________"+user.firstName);


this.router.navigate(['dashboard']);



}

}
