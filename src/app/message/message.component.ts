import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../int';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: Message|null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
