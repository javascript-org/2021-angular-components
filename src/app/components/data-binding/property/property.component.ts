import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  textContent = "welcome data app";

  textColor= "red";

  isDisabled = false
  isDisabled1 = true;

  // bind as style object
  styleObject={'color': 'green',
    'font-weight': 'bold',
    'font-size': '20px'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
