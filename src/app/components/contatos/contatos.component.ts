import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login.service';
export interface Contatos {
  nome: string;
  id: number;
  email: string;
  telefone: string;
  userimg: string;
}
const data: Contatos[] = [
  {
    id: 0,
    nome: 'Ana Paula',
    email: 'anapaula.contato@email.com',
    telefone: '0800-121520',
    userimg: 'assets/images/userplaceholder.png',
  },
  {
    id:1,
    nome:'Cláudia Fernandes',
    email : 'claudia@email.com',
    telefone:'0800-12316',
    userimg:'assets/images/person-1.jpg'
  },
  {
    id:2,
    nome:'Mário',
    email : 'mario@email.com',
    telefone:'0800-12317',
    userimg:'assets/images/person-2.jpg'
  },

];

@Component({
  selector: 'spa-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
})
export class ContatosComponent implements OnInit {
  nome: string = '';
  dados: Contatos[] = [];
  show: boolean = false;
  isOpen:boolean = false;
  lastInsertId:number = 2;
  newContact = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl(''),
    userimg: new FormControl('')
  })

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.dados = data;
    if (this.loginService.username == '') {
      // this.router.navigate(['login'])
    } else {
      this.nome = this.loginService.username;
    }
  }

  remove(id: number) {
    console.log(this.lastInsertId);
    this.lastInsertId--;
    console.log(this.lastInsertId);
    this.dados.splice(id, 1);
    this.ngOnInit();
  }
  open(){
    this.isOpen = !this.isOpen;
  }

  addContact(){
    
    console.log(this.lastInsertId);
    this.lastInsertId++;
    
    console.log(this.lastInsertId);
    let newid:number = this.lastInsertId;
    this.dados.push({
      nome: this.newContact.value.nome,
      id: newid,
      email: this.newContact.value.email,
      telefone: this.newContact.value.telefone,
      userimg: this.newContact.value.userimg,
    })
  }
  
}
