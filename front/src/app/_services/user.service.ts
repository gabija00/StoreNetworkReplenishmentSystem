import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://prekiu-papildymo-sistema.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'prekes', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'prekes', { responseType: 'text' });
  }

  getOwnerBoard(): Observable<any> {
    return this.http.get(API_URL + 'parduotuves', { responseType: 'text' });
  }


  getManagerBoard(): Observable<any> {
    return this.http.get(API_URL + 'parduotuves', { responseType: 'text' });//manager turi tureti db savo parduotuves id
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'parduotuves', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'parduotuves', { responseType: 'text' });
  }
}
