import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { User } from "../Models/User";

@Injectable()
export class registerapiservice{
    constructor(private _http : HttpClient){

    }
    registerUser(obj : User) : Observable<any>{
        console.log(obj);
        return this._http.post("https://localhost:7216/api/register",obj);
    }
}