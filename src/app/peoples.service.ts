import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPeople } from './people';


@Injectable({
  providedIn: 'root'
})
export class PeoplesService {

  private _url: string = '/assets/data/people.json'

  constructor(private http: HttpClient) { 

  }

  getPeople(){

    return this.http.get<IPeople []>(this._url);

  }
}
