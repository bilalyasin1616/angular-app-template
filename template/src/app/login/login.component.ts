import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // username:string="";
  // password:string="";
  constructor() { }

  ngOnInit(): void {
  }

  // btnLogin(){
  //   alert("username : "+this.username + " ,password : "+this.password);
  // }

}
