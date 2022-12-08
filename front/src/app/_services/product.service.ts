import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://prekiu-papildymo-sistema.herokuapp.com/parduotuves';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(id:any, ids:any): Observable<any> {
    return this.http.get(`${API_URL}/${id}/${'skyriai'}/${ids}/${'prekes'}`, { responseType: 'text' });
  }
  deleteData(id:any, ids:any, idp:any):Observable<any>
  {
    return this.http.delete(`${API_URL}/${id}/${'skyriai'}/${ids}/${'prekes'}/${idp}`, { responseType: 'text' });
  }
  get(id, ids, idp): Observable<any> {
    return this.http.get(`${API_URL}/${id}/${'skyriai'}/${ids}/${'prekes'}/${idp}`, { responseType: 'text' });
  }

  create(data, id, ids): Observable<any> {
    return this.http.post(`${API_URL}/${id}/${'skyriai'}/${ids}/${'prekes'}`, { responseType: 'text' });
  }

  update(id, data, ids, idp): Observable<any> {
    return this.http.put(`${API_URL}/${id}/${'skyriai'}/${ids}/${'prekes'}/${idp}`, { responseType: 'text' });;
  }
}
