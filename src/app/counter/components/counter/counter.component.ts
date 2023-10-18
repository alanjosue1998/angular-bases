import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ count }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public title:string = 'My first Angular app';
  public count: number = 10;

  increaseBy(value:number):number {
    return this.count +=value;
  }

  resetCounter():number {
    return this.count = 10;
  }
}
