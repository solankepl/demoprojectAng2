import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StudentdataService } from '../../services/studentdata.service';
import {Student} from '../../services/Student';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
    students:Student[] = new Array<Student>();  
    isDesc: boolean = false;
    column: string = 'name';
    direction: number;
    @Output()notify:EventEmitter<string> = new EventEmitter<string>(); 
   
    constructor(private studentdataService:StudentdataService, private router: Router) { }
    
    ngOnInit() {
        this.students = this.studentdataService.getStudents();       
    }
    
    deleteReord(index){
       
        this.studentdataService.deleteStudentData(index);   
    }
    
    sort(property){
        console.log(property);     
        this.isDesc = !this.isDesc;   
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
    
    createChart(evt, obj):void{
        console.log( obj); 
        this.notify.emit(obj);
         var target = evt.target;
          if (target.checked) {
            //doSelected(target);    
          } else {
            //doUnSelected(this._prevSelected)
          }
    }
    
  

}
