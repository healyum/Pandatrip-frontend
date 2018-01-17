import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Injectable } from '@angular/core';
import { VisitModel } from './visit/visit.model';
import { Http, Response } from '@angular/http';

@Injectable()
export class AppService {
  constructor(private http: Http) {}
  
  public static entryPointUrl: string = 'https://pandatrip.herokuapp.com/api';

  private endpointUrl = 'https://pandatrip.herokuapp.com/api/visits';

  getVisits(): Observable<VisitModel[]> {
    return this.http.get(this.endpointUrl)
      .map((response: Response) => {
        const result = response.json();
        return result;
      })
      .catch((error: Response | any) => {
        return Observable.throw(error.statusText);
      });
  }
}
