import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { articles } from '../Models/articles';
import { fetchapiservice } from '../Services/fetchService';

@Component({
  selector: 'app-adminreview',
  templateUrl: './adminreview.component.html',
  styleUrls: ['./adminreview.component.css']
})
export class AdminreviewComponent implements OnInit {

  constructor(private _apiservice: fetchapiservice, private _router: Router) { }

  listofarticles: articles[] = [];
  isSucc: string = "false";

  ngOnInit(): void {
    var userlevel = sessionStorage.getItem('userlevel');
    if (userlevel != "3") {
      alert("access denied");
      this._router.navigate(['/viewarticle'])
    }
    if (!this.checklogin())
      this.logout();
    console.log(sessionStorage.getItem('email'))
    console.log(sessionStorage.getItem('pass'))
    this._apiservice.getArticlesToReview(sessionStorage.getItem('email') || "", sessionStorage.getItem('pass') || "")
      .subscribe
      (
        data => {
          this.listofarticles = data;
        }
      );

    if (this.listofarticles == null || this.listofarticles.length == 0) {
      var art = new articles();
      art.articlename = "No articles to review yet !! enjoy"
      art.author = "Article Share"
      this.listofarticles.push(art);
    }
  }

  approve(art: articles): void {
    console.log("This is approve");
    this._apiservice.review(art.articleid, true)
      .subscribe
      (
        data => {
          this._router.navigate(['/fetch'])
            .then(() => {
              window.location.reload();
            });
        }
      );
  }

  reject(art: articles): void {
    console.log("This is reject");
    this._apiservice.review(art.articleid, false)
      .subscribe
      (
        data => {
          this._router.navigate(['/fetch'])
            .then(() => {
              window.location.reload();
            });
        }
      );
  }

  checklogin(): boolean {
    if (sessionStorage.getItem('email') == null || sessionStorage.getItem('pass') == null)
      return false;

    return true;
  }

  logout(): void {
    sessionStorage.clear();
  }

}
