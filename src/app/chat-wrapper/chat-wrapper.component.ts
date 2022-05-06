import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Room } from '../int';

@Component({
  selector: 'app-chat-wrapper',
  templateUrl: './chat-wrapper.component.html',
  styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnInit {
  @Input() room: Room|null = null;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  getUsers() {
    this.chatService.getUsers()
  }
}
