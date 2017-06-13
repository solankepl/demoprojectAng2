import { Component, OnInit } from '@angular/core';
import { BarchartComponent } from '../commancomponent/barchart/barchart.component';
//import "../../assets/jslib/material-charts.js";

declare var $:any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  constructor() { }    
    
  ngOnInit() {
  }

}
