import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { fetchapiservice } from '../Services/fetchService';
import { articles } from '../Models/articles';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-fetcharticles',
  templateUrl: './fetcharticles.component.html',
  styleUrls: ['./fetcharticles.component.css']
})
export class FetcharticlesComponent implements OnInit {

  constructor(private _apiservice : fetchapiservice,private _router : Router) { }

  listofarticles: articles[] = [];
  asc : string = "";
  desc : string = "";
  searchWord : string = "";

  openarticle(article : articles) : void{
    console.log(article.articleid)
    sessionStorage.setItem('articlename', article.articlename);
    sessionStorage.setItem('articlecontent', article.articlecontent);
    sessionStorage.setItem('articleauthor', article.author);
    sessionStorage.setItem('articleid', String(article.articleid));
    this._router.navigate(['/viewarticle'])
  }


  ngOnInit(): void {   
    if(!this.checklogin())
      this.logout(); 
    this.asc = (sessionStorage.getItem('asc')) || "false";
    this.desc = sessionStorage.getItem('desc') || "false";
    this.searchWord = sessionStorage.getItem('search') || "";
    var ascc = this.asc == "true" ? true : false;
    var descc = this.desc == "true" ? true : false;
    this._apiservice.getArticles(this.searchWord,ascc,descc)
    .subscribe
    (
      data => 
      {
          this.listofarticles = data;
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

