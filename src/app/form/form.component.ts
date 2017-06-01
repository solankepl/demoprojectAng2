import { Component, OnInit } from '@angular/core';
import {Student} from '../services/Student';
import { StudentdataService } from '../services/studentdata.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  student:Student = {
            name : 'James',             
            height:'1234',
            weight:'55'
    }    
    
    
  constructor(private studentdataService:StudentdataService) { }

  ngOnInit() {
          
    //console.log(this.studentdataService);
    
  }
    
   

    postForm(studentform:Student){        
        this.studentdataService.addStudentData(this.student);
        //alert("ssss"+ studentform.name);
    }
 

}
