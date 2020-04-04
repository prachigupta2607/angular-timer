import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  time: Date[];
  counter: number;
  count: {paused: number, start: number};
  
  public handleEvent(event: any) {
    this.counter = event.counter;
    this.time = event.startTime;
    this.count = event.count;
  }
}