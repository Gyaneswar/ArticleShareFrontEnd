import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class fetchapiservice{
    constructor(private _http : HttpClient){

    }
    getArticles(searchword : string,asc : boolean , desc : boolean) : Observable<any> {
        let params1 = new HttpParams().set('dateasc',asc)
        .set('datedesc',desc)
        .set('searchby',searchword);
        console.log({params:params1});
        return this._http.get("https://localhost:7216/api/sharearticle/fetcharticles",{params:params1});
    }
    getArticleLogs(articleid : number) : Observable<any> {
        let params1 = new HttpParams().set('articleId',articleid);
        console.log({params:params1});
        return this._http.get("https://localhost:7216/api/admin/fetchArticleLogs",{params:params1});
    }

    getArticlesToReview(email: string ,password : string) : Observable<any> {
        let params1 = new HttpParams().set('email',email)
        .set('password',password);

        console.log({params:params1});
        return this._http.get("https://localhost:7216/api/Admin/fetchArticlesToBeReviewed",{params:params1});
    }


    review(articleid : number , approve : boolean){
        let params1 = new HttpParams().set('articleid',articleid)
        .set('comments',!approve ? "Rejected :/":"Approved!")
        .set('approve',approve);

        console.log(params1);
        return this._http.get("https://localhost:7216/api/admin/review",{params:params1});
    }

}