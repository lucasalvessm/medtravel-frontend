import { Component } from '@angular/core';
import { AuthGuard } from './commons/auth.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(public authGuard: AuthGuard) {
  }
  
}
