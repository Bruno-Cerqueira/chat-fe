import { Component, OnInit } from '@angular/core';
import { Room } from '../int';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  rooms: any[] = [{ name: 'as'}, { name: 'a'}];
  constructor() { }

  roomSelected: Room|null = null;
  ngOnInit(): void {
  }

}
