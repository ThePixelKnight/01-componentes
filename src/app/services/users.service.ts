import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ComponentsIntf } from '../interfaces/Components';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private httpClient = inject(HttpClient);
  
  constructor() {}
  
  getUsers(){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
  }
  
  getMenu(){
    return this.httpClient.get<ComponentsIntf[]>(`assets/json/menu.json`);
  }
  
  getAlbums(){
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/albums`)
  }

  deleteUser(id: any) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}