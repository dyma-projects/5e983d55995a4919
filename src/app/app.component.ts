import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public age: number = 26;

  constructor() {}

  addOneYear(): void {
    this.age += 1;
    console.log(this.age);
  }
}
