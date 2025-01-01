import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class WorldService {

    constructor(private http: HttpClient){ }


    getData(id:string): Observable<any>  
    {

        let url=`https://api.worldbank.org/v2/country/${id}?format=json`;
        return this.http.get(url);
    }
}
