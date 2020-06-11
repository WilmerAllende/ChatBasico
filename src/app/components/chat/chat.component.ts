import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})
export class ChatComponent implements OnInit, OnDestroy {
  texto: string;
  mensajesSubscription: Subscription;
  mensajes: any[] = [];
  elemento: HTMLElement;
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.elemento = document.getElementById('chat-mensaje');
    this.mensajesSubscription = this.chatService
      .getMessages()
      .subscribe((msg) => {
        this.mensajes.push(msg);

        console.log('getmessage: ', this.mensajes);

        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 50);
      });
  }

  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

  enviar() {
    if (this.texto.trim().length === 0) {
      return;
    }
    console.log(this.texto);
    this.chatService.sendMessage(this.texto);
    this.texto = '';
  }
}
