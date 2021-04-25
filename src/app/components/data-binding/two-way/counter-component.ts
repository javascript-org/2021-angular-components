import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    count : {{countVal}}
   <button (click)="incrementCount()">Increment From Child</button>
  `
})
export class CounterComponent implements OnInit {

  @Input("countInput") countVal:number = 0;
  @Output("countOutput") countEvent:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  incrementCount()
  {
    this.countVal++;
    if(this.countVal % 2 ==0)
      this.countEvent.emit("even");
      else 
      this.countEvent.emit("odd");
  }

  increment()
  {
    this.countVal++;
  }

  decrement()
  {
    this.countVal--;
  }

}
