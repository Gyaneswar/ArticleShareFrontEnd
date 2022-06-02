import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginservice } from '../Services/loginservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router : Router,private _apiservice : loginservice) { }

  email: string = "";
  password: string = "";
  userlevel: string = "-1";


  ngOnInit(): void {

  }

  loginUser() {
    this._apiservice.login(this.email,this.password)
    .subscribe
    (
      data => 
      {
          this.userlevel = data;
      }
    );      
    if(this.userlevel == "-1"){
      alert("Invalid credentials :/");
      return;
    }
    console.log(this.userlevel);
    sessionStorage.setItem('email',this.email)
    sessionStorage.setItem('pass',this.password)  
    sessionStorage.setItem('userlevel',this.userlevel)
    this._router.navigate(['/fetch'])
    .then(() => {
      window.location.reload();
    });
  }

}
