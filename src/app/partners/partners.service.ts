import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {AppService} from '../app.service';

@Injectable()
export class PartnersService {

  constructor(private http: Http) {
  }

  becomeGuide(address: string, country: string, region: string,
              city: string, postalCode: number, phoneNumber: string,
              token: string, userId: string): Promise<any> {

    const url = AppService.entryPointUrl + '/guides';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    const options = new RequestOptions({headers: headers});

    const bodyJSON = JSON.stringify({
      'address': address,
      'country': country,
      'region': region,
      'city': city,
      'postalCode': postalCode,
      'phoneNumber': phoneNumber,
      'user': userId
    });

    return this.http
      .post(url, bodyJSON, options)
      .toPromise()
      .then()
      .catch(error => Promise.reject(error.message || error));
  }
}
