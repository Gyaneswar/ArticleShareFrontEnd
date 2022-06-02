import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { articles } from '../Models/articles';
import { fetchapiservice } from '../Services/fetchService';

@Component({
  selector: 'app-viewarticle',
  templateUrl: './viewarticle.component.html',
  styleUrls: ['./viewarticle.component.css']
})
export class ViewarticleComponent implements OnInit {

  constructor(private _apiservice : fetchapiservice,private _router : Router) { }

  articlename : string = ""
  articlecontent : string = ""
  articleauthor : string = ""
  articleid : number = 0;
  userlevel : number  = 0;

  listOfLogs : articles[] = [];


  ngOnInit(): void {
    if(!this.checklogin())
    this.logout();
    this.articlename  = sessionStorage.getItem('articlename') || ""
    this.articlecontent = sessionStorage.getItem('articlecontent') || ""
    this.articleauthor = sessionStorage.getItem('articleauthor') || ""
    this.articleid = Number(sessionStorage.getItem('articleid') || "0")
    this.userlevel = Number(sessionStorage.getItem('userlevel') || "0");
    this._apiservice.getArticleLogs(this.articleid)
    .subscribe
    (
      data => 
      {
          this.listOfLogs = data;
      }
    );
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
