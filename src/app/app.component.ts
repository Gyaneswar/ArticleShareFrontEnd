import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private _router : Router) { }
  title = 'ArticleShareFrontEnd';

  isloggedin : boolean = false;
  emailid : string = "";
  isAdmin : boolean = false;
  isSuperAdmin : boolean = false;
  searchkeyword : string = "";

  ngOnInit(): void {
    if(!this.checklogin())
      this.logout();
    this.isloggedin = this.checklogin()
    this.emailid = sessionStorage.getItem('email') || ""

    if(sessionStorage.getItem('userlevel') == "2"){                
      this.isAdmin = true;      
    }else if(sessionStorage.getItem('userlevel') == "3"){      
      this.isSuperAdmin = true;      
    }
  }


  asctrue():void{
    sessionStorage.setItem('asc','true');
    sessionStorage.setItem('desc','false');
  }

  clear():void{
    sessionStorage.removeItem('asc');
    sessionStorage.removeItem('desc');
    sessionStorage.removeItem('search');
  }

  desctrue():void{
    sessionStorage.setItem('desc','true');
    sessionStorage.setItem('asc','false');
  }

  search() : void{
    console.log(this.searchkeyword)    
    sessionStorage.setItem('search',this.searchkeyword)
    console.log("hitttttt")
    this._router.navigate(['/fetch'])
    .then(() => {
      window.location.reload();
    });
  }

  checklogin() : boolean{
    if(sessionStorage.getItem('email') == null || sessionStorage.getItem('pass') == null)
      return false;
    
    return true;
  }

  logout() : void{
    sessionStorage.clear();
  }
}
