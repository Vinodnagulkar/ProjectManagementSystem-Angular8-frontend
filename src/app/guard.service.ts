import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  
  constructor(private authService:AuthenticationService) { }

  canActivate()
  {
    if(this.authService.isloggeduser()){
    return true;
    }
    else{
      alert('You are not Authorized Person');
      return false;
    }
    
  }

  
}
