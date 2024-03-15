import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-ToggleWithRadioDiv';

  bgColorRed = "red";
  bgColorGreen = "green";
  data : number = -1;
  options : boolean = false;
  type:number=2;
}
