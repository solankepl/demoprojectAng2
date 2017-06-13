import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
declare var $:any;
declare var CanvasJS:any;


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements AfterViewInit {
   
    
    constructor() { }
    
    ngOnInit() {
       
    }

    ngAfterViewInit(){
    //console.log(materialCharts);
      
       var chart = new CanvasJS.Chart("student", {
				title: {
					text: "Chart With Mark"
				},
                axisY:{
                   maximum: 100,
                },

                data: [{
					type: "column",
					dataPoints: [
					  { y: 77, label: "ENGLISH" },
					  { y: 70, label: "MATH" },
					  { y: 50, label: "HINDI" },					 
					]
				}]
			});
			chart.render();
    }

}


					
