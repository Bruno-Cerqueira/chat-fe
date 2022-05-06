import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from './chat.service';
import { Room } from './int';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private chatService: ChatService){}
  title = 'chat-fe';
  roomName: string|null = null;
  room$: Observable<Room>|undefined;

  createRoom(){
    this.chatService.createRoom(this.roomName)
  }

  getUsers(){
    this.chatService.getUsers()
  }

  showRoom(room: any){
    this.room$ = this.chatService.getRoom(room.id)
  }
}
