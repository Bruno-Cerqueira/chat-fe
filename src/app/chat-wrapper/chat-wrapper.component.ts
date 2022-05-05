import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.chatService.getUsers()
  }
}
