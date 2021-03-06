import { Injectable } from '@angular/core';
import {Student} from './Student';

@Injectable()
export class StudentdataService {
    studentList:Student[] = new Array<Student>();   
    constructor() {
        let p1 = new Student("Pavan Solanke","77","70","50");
        let p2 = new Student("Ram Kolhe","51","90","45");        
        this.studentList.push(p1);
        this.studentList.push(p2);    
    }
    
    addStudentData(obj):void{
        this.studentList.push(obj);
    }
    
    updateStudentData(obj, item):void{
        this.deleteStudentData(item);
        this.addStudentData(obj);
      //title?: string
    }
    
    deleteStudentData(item:number):void {
        let index = item;        
        //console.log("index == " + index);
        if (index === -1) {
            return;
        }
        this.studentList.splice(index,1);
    }
    
    editStudentData(item:number):void {
        console.log(this.studentList[item]);
    }
    
    getStudents():Student[]{
        return this.studentList;
    }
}
