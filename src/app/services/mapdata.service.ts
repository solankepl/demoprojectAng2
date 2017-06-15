import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MapdataService {
    private _url: string ="../../assets/data/mapdata.json";
    constructor(private _http:Http) { }
    getmapData(): Observable<any>{
        return this._http.get(this._url).map((response:Response) => response.json());
    }
}
