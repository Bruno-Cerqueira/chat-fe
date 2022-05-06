import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from '../chat.service';
import { User } from '../int';
import { UserService } from '../user.service';

@Component({
  selector: 'app-select-users',
  templateUrl: './select-users.component.html',
  styleUrls: ['./select-users.component.scss']
})
export class SelectUsersComponent implements OnInit {
  users$: Observable<User[]> | null = null;

  constructor(private chatService: ChatService, private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.chatService.getUsers();
  }

  selectuser(user: User) {
    return this.userService.setUser(user)
  }
}
