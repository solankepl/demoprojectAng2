import { Component, OnInit } from '@angular/core';
import { StudentdataService } from '../../services/studentdata.service';
import {Student} from '../../services/Student';
//import { SortinglistPipe } from '../../pipe/sortinglist.pipe';
@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
 // pipes: [SortinglistPipe]    
})
export class StudentlistComponent implements OnInit {
    students:Student[] = new Array<Student>();  
    isDesc: boolean = false;
    column: string = 'name';
     direction: number;
    
    constructor(private studentdataService:StudentdataService) { }
    
    ngOnInit() {
        this.students = this.studentdataService.getStudents();       
    }
    
    sort(property){
        this.isDesc = !this.isDesc;   
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };

}
