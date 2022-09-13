import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import intervalToDuration from 'date-fns/intervalToDuration'

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy {

  private timerSub!: Subscription;
  dateTo: Date = new Date('2022-05-05T00:00:00');
  datesInterval!: any;

  constructor() { }

  ngOnInit(): void {
    this.timerSub = interval(1000).subscribe(a => {this.calculate()});
  }

  ngOnDestroy() {
    this.timerSub.unsubscribe();
  }

  calculate() {
    this.datesInterval = intervalToDuration({
      start: new Date(),
      end: this.dateTo
    })
  }

}
