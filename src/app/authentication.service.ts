import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(email,password)
  {
    if(email=="vinodnagulkar1989@gmail.com" && password=="12345") {
      return true;
    }
    else{
      return false;
    }
  }
    isloggeduser()
    {
    let user  = sessionStorage.getItem("Authuser");
    return!(user==null)
    }
}
