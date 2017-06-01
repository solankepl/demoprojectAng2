import { Injectable } from '@angular/core';
import {Student} from './Student';

@Injectable()
export class StudentdataService {
    studentList:Student[] = new Array<Student>();   
    constructor() {
        let p1 = new Student("Luke Skywalker","177","70");
        let p2 = new Student("Han Solo","512","100");        
        this.studentList.push(p1);
        this.studentList.push(p2);    
    }
    
    addStudentData(obj):void{
        console.log(obj);
        this.studentList.push(obj);
    }
    
    getStudents():Student[]{
        return this.studentList;
    }
}
