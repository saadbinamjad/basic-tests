import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

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
