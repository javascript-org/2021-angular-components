import { Component, OnInit } from '@angular/core';
import { Item } from './Items';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  firstName: string = 'john';
  lastName: string = 'doe';
  styleTextColor: string = 'red';
  imgUrl: string = 'https://i.picsum.photos/id/250/536/354.jpg?hmac=qb3khzryKWU1ECPob2_1mYZLumW5eJTLSmhJzi1VVSI';
  items: Item[] = [
    new Item("c1", "n1"),
    new Item("c2", "n2"),
    new Item("c3", "n3"),
  ];


  scriptContent = '<script>alert("You are hacked")</script>'
  divContent = '<div>this is a div</div>';
  employee={
    name:'john',
    code:null
  }
  

  constructor() { }

  ngOnInit(): void {
  }

  getSum(x: number, y: number): number {
    return x + y;
  }

}
