import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-hello',
  templateUrl: './component-hello.component.html',
  styleUrls: ['./component-hello.component.css']
})
export class ComponentHelloComponent implements OnInit {

  bookName: string = "rd sharma math book";
  constructor() { }

  ngOnInit(): void {
  }

}
