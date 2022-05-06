import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private chatService: ChatService){}
  title = 'chat-fe';
  roomName: string|null = null;

  createRoom(){
    this.chatService.createRoom(this.roomName)
  }

  getUsers(){
    this.chatService.getUsers()
  }

  showRoom(room: any){
    this.chatService.getRoom(room.id)
  }
}
