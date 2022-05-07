import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';
import { Room, Message } from '../int';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnChanges {
  @Input() room: Room|null = null;
  messages$: Observable<Message[]>|undefined|null;
  message: string|null = null;
  
  constructor(private chatService: ChatService, private userService: UserService) { }

  ngOnChanges(){
    this.messages$ = !!this.room ? this.chatService.getMessages(this.room?.id) : null;
  }

  getUsers() {
    this.chatService.getUsers()
  }

  sendMessage(){
    this.chatService.createMessage(this.message, this.userService.getUser()?.id, this.room?.id)
  }
}
