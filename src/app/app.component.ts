import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from './providers/chat.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public chats: Observable<any[]>;
  constructor(db: AngularFirestore,
              public _cs: ChatService ) {
//    this.chats = db.collection('chats').valueChanges();
// ya no es necesario esta sentencia de arriba ni el import de ANgularFiretore, ni el Observable, ni la variable db:
// porque ahora puedo llamar el servicio directamente porque lo inyecté el chatservice
  }
}
