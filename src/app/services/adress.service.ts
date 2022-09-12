import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adress } from '../classes/adress';

const baseUrl = 'http://localhost:8080/api/adress';
@Injectable({
  providedIn: 'root'
})
export class AdressService { 

  
  constructor(private http: HttpClient) { }
  
  
  getAll(){
    console.log(`${baseUrl}`);
    return this.http.get(`${baseUrl}`);
  }
  get(id) :Observable<Adress> {
    return this.http.get<Adress>(`${baseUrl}/${id}`);
  }
  create(data : Adress) {
    console.log("data create ");
    console.log(data);
    
    return this.http.post<Adress>(baseUrl, data);
  }
  update(id, data: Adress){
    return this.http.put<Adress>(`${baseUrl}/${id}`, data);
  }
  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll() {
    return this.http.delete(baseUrl);
  }
}
