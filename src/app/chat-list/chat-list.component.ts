import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';
import { Room } from '../int';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  @Output() selectedRoom = new EventEmitter<Room>()
  constructor(private chatService: ChatService) { }
  rooms$: Observable<Room[]> | undefined;

  roomSelected: Room|null = null;
  ngOnInit(): void {
    this.rooms$ = this.chatService.getRooms();
  }

  selectRoom(room: Room) {
    this.selectedRoom.emit(room)
  }
}
