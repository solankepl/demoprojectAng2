import { Injectable } from '@angular/core';
import {Student} from './Student';

@Injectable()
export class StudentdataService {
    studentList:Student[] = new Array<Student>();   
    constructor() {
        let p1 = new Student("Pavan Solanke","177","70");
        let p2 = new Student("ram kolhe","512","100");        
        this.studentList.push(p1);
        this.studentList.push(p2);    
    }
    
    addStudentData(obj):void{
        this.studentList.push(obj);
    }
    
    deleteStudentData(item:number):void {
        let index = item;        
        //console.log("index == " + index);
        if (index === -1) {
            return;
        }
        this.studentList.splice(index,1);
    }
    
    getStudents():Student[]{
        return this.studentList;
    }
}
