import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/int';

@Component({
  selector: 'app-chat-card',
  templateUrl: './chat-card.component.html',
  styleUrls: ['./chat-card.component.scss']
})
export class ChatCardComponent implements OnInit {
  @Input() room: Room|null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
