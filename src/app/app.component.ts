import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = 'Testing a simple counter';
  public counter: number = 0;

  private incrementCounter(): number {
    return this.counter++;
  }

  private decrementCounter(): number {
    return this.counter--;
  }

  private resetCounter(): number {
    return this.counter = 0;
  }
}
