import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://prekiu-papildymo-sistema.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  deleteData(id:any):Observable<any>
  {
    return this.http.delete(`${API_URL+ 'parduotuves'}/${id}`, { responseType: 'text' });
  }
  get(id): Observable<any> {
    return this.http.get(`${API_URL+ 'parduotuves'}/${id}`, { responseType: 'text' });
  }

  create(data): Observable<any> {
    return this.http.post(API_URL+ 'parduotuves', data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${API_URL+ 'parduotuves'}/${id}`, data);
  }
}
