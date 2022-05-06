import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from './chat.service';
import { Room, User } from './int';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private chatService: ChatService, private userService: UserService){}
  title = 'chat-fe';
  roomName: string|null = null;
  room$: Observable<Room>|undefined;
  user: User|null|undefined;

  ngOnInit(){
    this.userService.userSelected$.subscribe(user => {
      this.user = this.userService.getUser();
    })
  }

  createRoom(){
    this.chatService.createRoom(this.roomName, this.userService.getUser()?.id)
  }

  getUsers(){
    this.chatService.getUsers()
  }

  showRoom(room: any){
    this.room$ = this.chatService.getRoom(room.id)
  }
}
