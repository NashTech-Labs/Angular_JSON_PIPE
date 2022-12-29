import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular_JSON_PIPE';

  products = [
    {
      Id: 1,
      Name: "Angular wiki"
    },
    {
      Id: 2,
      Name: "Typescript"
    }
  ];
}
