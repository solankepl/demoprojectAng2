import { Directive, ElementRef, NgZone, Inject, OnInit, AfterViewInit } from '@angular/core';
//import * as $ from 'jquery';
import "../assets/jslib/myPlugin.js";
declare var $:any;


@Directive({
  selector: '[appMyplugin]'   
})
export class MypluginDirective implements AfterViewInit{
      elementRef: ElementRef;

      constructor( @Inject(ElementRef) elementRef: ElementRef, private zone: NgZone) {
        this.elementRef = elementRef;
      }


      ngAfterViewInit() {
        
          console.log("in directives");
          console.log($(this.elementRef.nativeElement));
    console.log( this.zone); 
         
       $(this.elementRef.nativeElement).myFirstPlugin({
            text: "Directive Custum", 
            defaultColor:'#FF0F0F' ,
            overColor:'#FF00FF'
        });
      }
   

}



