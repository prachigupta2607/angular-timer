import { Component, Input } from '@angular/core';

interface Count{
  paused: number;
  start: number;
}

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})

export class CountComponent {
  @Input() count: Count;
}