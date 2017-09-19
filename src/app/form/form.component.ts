import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import {Student} from '../services/Student';
import { StudentdataService } from '../services/studentdata.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    studentId:any;
    student:Student = {
            name : '',             
            english:'',
            math:'',
            hindi:''
    }    
    
    constructor(private studentdataService:StudentdataService, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {          
        //console.log(this.studentdataService.studentList);
       // let userId = params['userId'];
        //this.student = this.studentdataService.studentList[1];
        
         this.activatedRoute.queryParams.subscribe((params: Params) => {
                this.studentId = params['id'];
                if(this.studentId != 'blank'){
                    this.student = this.studentdataService.studentList[this.studentId];                
                }
                //console.log( this.studentId);
          });
    }
    
    postForm(studentform:Student){    
        //console.log(isEmpty(this.student));
        if(this.studentId == 'blank'){
            this.studentdataService.addStudentData(this.student);
        }else{
            this.studentdataService.updateStudentData(this.student, this.studentId);
        
        }
        
        
        this.router.navigateByUrl('/about');
    }
 

}
