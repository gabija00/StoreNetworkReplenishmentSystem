import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://prekiu-papildymo-sistema.herokuapp.com/parduotuves';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAll(id:any): Observable<any> {
    return this.http.get(`${API_URL}/${id}/${'skyriai'}`, { responseType: 'text' });
  }
  deleteData(id:any, ids:any):Observable<any>
  {
    return this.http.delete(`${API_URL}/${id}/${'skyriai'}/${ids}`, { responseType: 'text' });
  }
  create(id:any, data): Observable<any> {
    return this.http.post(`${API_URL}/${id}/${'skyriai'}`, { responseType: 'text' });
  }
  update(id, data, ids): Observable<any> {
    return this.http.put(`${API_URL}/${id}/${'skyriai'}/${ids}`, { responseType: 'text' });
  }
  get(id, ids): Observable<any> {
    return this.http.get(`${API_URL}/${id}/${'skyriai'}/${ids}`, { responseType: 'text' });
  }
  //parduotuves 
}
