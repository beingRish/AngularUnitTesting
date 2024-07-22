import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularUnitTesting';
  btnText = "Subscribe";
  isSubscribed = false;
  marks = [97, 68, 83, 29, 75];

  subscribe(){
    setTimeout(() => {
      this.isSubscribed = true;
      this.btnText = "Subscribed";
    }, 3000)
  }

  showMessage(msg:string): string {
    return msg;
  }
}
