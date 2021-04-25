import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  counter = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClickButton()
  {
    this.counter++;
  }

  value = "";
  handleInput(event:any) 
  {
    this.value = (event.target as HTMLInputElement).value;
  }

  handleInput1(elementRef:any) // element ref
  {
    this.value = elementRef.value;
  }

}
