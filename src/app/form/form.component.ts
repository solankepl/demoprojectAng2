import { Component, OnInit } from '@angular/core';
import {User} from 'app/form/User';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
   user:User = {
            name : 'James',             
            phone:"1234",
            address:'India'
        
    }

    postForm(userform:User){
           alert("ssss"+ userform.name);
    }
 

}
