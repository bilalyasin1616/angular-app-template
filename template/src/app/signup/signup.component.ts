import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  firstname:string="";
  lastname:string="";
  email:string="";
  password:string="";
  constructor() { }

  ngOnInit(): void {
  }

  Signup(){

  }

}
