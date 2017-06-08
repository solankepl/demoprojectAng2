import { Component, OnInit, AfterViewInit} from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
   
  }
    
    
  ngAfterViewInit(){
      $(".jqueryUi").css({
          "background":"#cccccc",
          "min-height":"90vh",
          "padding":"15px"
      });
  }    

}
