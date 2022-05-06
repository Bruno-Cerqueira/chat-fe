import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';
import { User } from '../int';

@Component({
  selector: 'app-select-users',
  templateUrl: './select-users.component.html',
  styleUrls: ['./select-users.component.scss']
})
export class SelectUsersComponent implements OnInit {
  users$: Observable<User[]> | null = null;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.users$ = this.chatService.getUsers();
  }

  selectuser() {
    return null
  }
}
