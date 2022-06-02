import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { articles } from '../Models/articles';
import { postArticles } from '../Services/postArticle';

@Component({
  selector: 'app-createarticle',
  templateUrl: './createarticle.component.html',
  styleUrls: ['./createarticle.component.css']
})
export class CreatearticleComponent implements OnInit {

  constructor(private _apiservice : postArticles,private _router : Router) { }

  title : string = "";
  content : string = "";
  author : string = "";
  isSuccess : string = "";

  ngOnInit(): void {
    var userlevel = Number(sessionStorage.getItem('userlevel'));
    if (userlevel == 1) {
      alert("access denied");
      this._router.navigate(['/fetch'])
    }


    if(!this.checklogin())
    this.logout();

  }

  uploadcontent() : void{
    var article = new articles();
    article.articlename = this.title;
    article.articlecontent = this.content;
    article.author = this.author;
    article.email = sessionStorage.getItem('email') || "";

    this._apiservice.uploadArticle(article)
    .subscribe
    (
      data => 
      {
          this.isSuccess = data;
      }
    );

    if(this.isSuccess == "false"){
      alert("Post unsuccessful kindly post again , sorry for inconvinence");
    }else{
      alert("Upload success , review is pending , you will be able to see the article once approved");
      this._router.navigate(['/fetch'])
    }

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
