import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {
  counter: number;

  constructor(private store: Store<{ counter: {counter: number} }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter;
    });
  }
}
