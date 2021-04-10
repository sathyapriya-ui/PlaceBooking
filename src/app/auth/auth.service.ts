import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _UserIsAuthenticated = false;
  
  get userIsAuthenticated(){
    return this._UserIsAuthenticated;
  }

  constructor() { }

  login(){
    this._UserIsAuthenticated = true;
  }
  logout(){
    this._UserIsAuthenticated = false;
  }
}
