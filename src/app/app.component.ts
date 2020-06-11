import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private wsService: ChatService) {}

  ngOnInit() {
    this.wsService.getMessagesPrivate().subscribe((resp) => {
      console.log('mensaje app.component', resp);
    });
  }
}
