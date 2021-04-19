import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login.service';
@Component({
  selector: 'spa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    nome: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  doLogin():void{
    this.loginService.doLogin(this.form.value.nome,this.form.value.senha);
    this.router.navigate(['contatos']);
  }

}
