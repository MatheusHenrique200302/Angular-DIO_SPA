import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  username:string = "";
  senha:string = "";
  isLogged: boolean = false;

  doLogin(name:string,senha:string){
    this.username = name;
    this.senha = senha;
  }
}
