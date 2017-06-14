import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Student} from '../services/Student';
import { StudentdataService } from '../services/studentdata.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    student:Student = {
            name : '',             
            english:'',
            math:'',
            hindi:''
    }    
    
    constructor(private studentdataService:StudentdataService, private router: Router) { }

    ngOnInit() {          
    //console.log(this.studentdataService);    
    }
    
    postForm(studentform:Student){        
        this.studentdataService.addStudentData(this.student);
         this.router.navigateByUrl('/about');
    }
 

}
