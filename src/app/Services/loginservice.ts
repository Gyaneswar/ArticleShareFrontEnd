import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class loginservice{
    constructor(private _http : HttpClient){

    }
    login(email : string,password : string) : Observable<any> {
        let params1 = new HttpParams()
        .set('email',email)
        .set('password',password);
        console.log({params:params1});
        return this._http.get("https://localhost:7216/api/login",{params:params1});
    }
}