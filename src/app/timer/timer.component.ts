import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { timer } from 'rxjs';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Output() counterEvent = new EventEmitter();
  model = {val: 10};
  private startCount = 0;
  private pauseCount = 0;
  subscription;
  counter = 1000
  isPause = true;
  startTime: Date[] = [];
  constructor() { }

  ngOnInit() {

  }

  public startPause() {
    this.isPause = !this.isPause;
    this.startPauseTimer();
  }

  public restart() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
    this.counter = 1000;
    this.startTime = [];
    this.isPause = false;
    this.startCount =0;
    this.pauseCount=0;
    this.startPauseTimer();
  }

  private startPauseTimer () {
    if(this.isPause) {
      this.subscription.unsubscribe();
      this.pauseCount++;
      this.counterEvent.emit({counter: this.counter, startTime: this.startTime, count: {start: this.startCount, paused: this.pauseCount}});
      return;
    }
    this.startTime.push(new Date());
    this.startCount++;
    this.subscription = timer(0, this.counter).subscribe(() => {
       this.counterEvent.emit({counter: this.counter, startTime: this.startTime, count: {start: this.startCount, paused: this.pauseCount}});
       this.counter--;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}