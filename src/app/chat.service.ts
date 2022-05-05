import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getUsers(){
    this.http.get('/api/users').subscribe(data => {
      console.log(data)
    })
  }
}
