import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
public title:string = 'My first Angular app';
  public count: number = 10;

  increaseBy(value:number):number {
    return this.count +=value;
  }

  resetCounter():number {
    return this.count = 10;
  }
}

