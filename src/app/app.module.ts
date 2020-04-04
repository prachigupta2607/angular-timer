import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ShowComponent } from './show/show.component';
import { TimeComponent } from './time/time.component';
import { CountComponent } from './count/count.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ],
  declarations: [ AppComponent,  TimerComponent, ShowComponent, TimeComponent, CountComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
