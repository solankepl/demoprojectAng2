import { Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
//import * as $ from 'jquery';
import { MypluginDirective } from '../myplugin.directive.js';
declare var $:any;

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css'],
  //directives: [MypluginDirective]     
})
export class DragComponent implements AfterViewInit  {

  constructor() { }

  ngOnInit() {
      
   
  }
    
    
  ngAfterViewInit(){
      $(".jqueryUi").css({
          "background":"#cccccc",
          "min-height":"90vh",
          "padding":"15px"
      });
      
     $('h4').myFirstPlugin({
			text: "Mycustum Plugin add", 
			defaultColor:'#FF0F0F' ,
			overColor:'#FF00FF'
		});
  }    

}
