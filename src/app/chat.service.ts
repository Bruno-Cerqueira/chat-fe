import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Message, Room, User } from './int';

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

  createRoom(name: string|null, userId: undefined|number|null){
    this.http.post('/api/room', { name, userId }).subscribe(data => {
      console.log(data);
    })
  }

  createMessage(message: string|null, authorId: undefined|number|null, roomId: undefined|number|null){
    this.http.post('/api/message', { message, authorId, roomId }).subscribe(data => {
      console.log(data);
    })
  }

  getMessages(roomId: number|undefined): Observable<Message[]>{
    return (this.http.get(`/api/messages/${roomId}`) as Observable<Message[]>).pipe(tap((data: Message[]) => console.log(data)));
  }
}
