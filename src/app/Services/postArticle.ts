import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { articles } from "../Models/articles";

@Injectable()
export class postArticles{
    constructor(private _http : HttpClient){

    }
    uploadArticle(obj : articles) : Observable<any>{
        return this._http.post("https://localhost:7216/api/sharearticle/createArticle",obj);
    }
}