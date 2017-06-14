import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { StudentdataService } from '../../services/studentdata.service';
import {Student} from '../../services/Student';
declare var $:any;
declare var CanvasJS:any;


@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements  OnInit, AfterViewInit {
    @Input() currentIndex:string;
    
   students:Student[] = new Array<Student>();  
    private chartConfig:any ;
    constructor(private studentdataService:StudentdataService) {
       this.chartConfig = {
                              title: {
                                text: "Chart With Mark"
                              },
                              axisY: {
                                maximum: 100
                              },
                              data: [
                                {
                                  type: "column",
                                  dataPoints: [
                                    {
                                      y: 77,
                                      label: "ENGLISH"
                                    },
                                    {
                                      y: 70,
                                      label: "MATH"
                                    },
                                    {
                                      y: 50,
                                      label: "HINDI"
                                    },

                                  ]
                                }
                              ]
        }
    }
    
    ngOnInit() {       
        this.students = this.studentdataService.getStudents();       
        
    }

    ngAfterViewInit(){ 
       this.currentIndex = "0";   
       this.drwaBarchart();    
    }
    
    ngOnChanges(changes) {   
       this.drwaBarchart();
    }  
    
    public drwaBarchart():void{
       
        let currentData = this.students[this.currentIndex];
        let title = 'Chart Of "';
            //console.log(currentData);
        let convertedData = new Array();
        let i = 0;
        $.each( currentData, function( key, value ) {           
              let temp = {
                  y:Number(value),
                  label:key.toUpperCase()
                };  
                if(i > 0){
                    convertedData.push(temp); 
                }else{
                     title = title + value + '" Mark';     
                }
                i++;
        });
        
        this.chartConfig.title.text = title;
        this.chartConfig.data[0].dataPoints = convertedData;  
       // this.drwaBarchart(this.chartConfig);      
        
        
        
       var chart = new CanvasJS.Chart("student", this.chartConfig);
		   chart.render();
    }

}


					
