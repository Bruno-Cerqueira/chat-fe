import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './int';

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

  getRooms(): Observable<Room[]>{
    return this.http.get('/api/rooms') as Observable<Room[]>;
  }

  getRoom(id: number): Observable<Room>{
    const api = `api/room/${id}`
    return this.http.get(api) as Observable<Room>;
  }

  createRoom(name: string|null){
    this.http.post('/api/room', { name }).subscribe(data => {
      console.log(data);
    })
  }
}
