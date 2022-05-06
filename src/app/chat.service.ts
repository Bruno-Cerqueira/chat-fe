import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room, User } from './int';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]>{
    return this.http.get('/api/users') as Observable<User[]>;
  }

  getRooms(user: User|null): Observable<Room[]>{
    return this.http.get(`/api/rooms/${user?.id}`) as Observable<Room[]>;
  }

  getRoom(id: number): Observable<Room>{
    const api = `api/room/${id}`;
    return this.http.get(api) as Observable<Room>;
  }

  createRoom(name: string|null){
    this.http.post('/api/room', { name }).subscribe(data => {
      console.log(data);
    })
  }
}
