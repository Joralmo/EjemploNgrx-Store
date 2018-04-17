import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: Http) {
    
  }

  get(url): Observable<any> {
    return this.http
      .get(url)
      .map((response: Response) => {
        return <any>response.json();
      })
      .catch((error:Response) => {
        return Observable.throw(error.statusText);
      })
  }

}
