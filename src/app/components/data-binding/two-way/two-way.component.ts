import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from './counter-component';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  constructor() { }

  name = "";

  clear()
  {
    this.name ="";
  }

  fname="john";
  handleInput(event:any) 
  {
    this.name = (event.target as HTMLInputElement).value;
  }

  message ="even";
  handleOutput(event:any) 
  {
    this.message = event;
  }

  count:number=100;

  @ViewChild(CounterComponent) counterComponent!: CounterComponent;

  ngOnInit(): void {
  }

  increment()
  {
    this.counterComponent.increment();
  }

  decrement()
  {
    this.counterComponent.decrement();
  }
}
