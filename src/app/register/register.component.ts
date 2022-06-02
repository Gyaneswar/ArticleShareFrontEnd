import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User';
import { registerapiservice } from '../Services/RegisterService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSuccess: boolean = false;

  constructor(private _apiservice : registerapiservice,private _router : Router) { }

  ngOnInit(): void {
  }
  email : string = "";
  psw : string = "";
  pswrepeat : string = "";
  pswadmin : string = "";
  pswsuperadmin : string = "";  
  mobile : string = "";

  registeruser() : void{
    var user = new User();
    user.email = this.email;
    user.password = this.psw;
    user.adminpassword = this.pswadmin;
    user.superadminpassword = this.pswsuperadmin;
    user.mobile = this.mobile;
    this._apiservice.registerUser(user)
    .subscribe
    (
      data => 
      {
          this.isSuccess = data;
      }
    );         
      alert("Registration success !! login now !!")
      this._router.navigate(['/login']);    
  }

}
