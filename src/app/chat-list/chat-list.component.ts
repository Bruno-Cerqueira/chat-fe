import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';
import { Room, User } from '../int';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  @Output() selectedRoom = new EventEmitter<Room>()
  constructor(private chatService: ChatService, private userService: UserService) { }
  rooms$: Observable<Room[]> | undefined;
  user: null|User = null;

  roomSelected: Room|null = null;
  ngOnInit(): void {
    this.userService.userSelected$.subscribe(user => {
      this.user = this.userService.getUser();
      this.rooms$ = this.chatService.getRooms(user);
    })
  }

  selectRoom(room: Room) {
    this.selectedRoom.emit(room);
  }
}
