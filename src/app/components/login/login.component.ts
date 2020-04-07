import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserEmail:string;
  title:string;
  UserPassword:string;
  constructor() { }

  ngOnInit(): void {
   
  }

  login()
  {
    if (this.UserEmail != '')
    {
      if(this.UserPassword =='summit')
      {
        let userName = this.UserEmail.substring(0,this.UserEmail.indexOf('@'));
        sessionStorage.setItem('userName',userName);
        sessionStorage.setItem('userEmail',this.UserEmail);
        alert('welcome '+userName);
      }
    }
  }
}
