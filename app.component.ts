import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'new-project2';

  private myCustomProp = 'VojtaJeAutak';
  private hidden = false;

  clickMe() {
    this.hidden = true;
  }


}
