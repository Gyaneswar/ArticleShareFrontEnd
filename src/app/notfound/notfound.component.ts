import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checklogin() : boolean{
    if(!this.checklogin())
      this.logout();
    if(sessionStorage.getItem('email') == null || sessionStorage.getItem('pass') == null)
      return false;
    
    return true;
  }

  logout() : void{
    sessionStorage.clear();
  }

}
