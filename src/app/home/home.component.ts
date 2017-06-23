import { Component, OnInit, OnDestroy, AfterViewInit,  NgZone} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
declare var $: any;

import { DatePicker } from '../commancomponent/datepicker/date-picker.component';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',    
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit  {
    
    private sub: any;
    private id: number;
    private currentTab:any; 
    
    
    
    private dropeDownList:any[] = [ {
            id: "1",
            val:"Item 1"
        },
        {
            id: "2",
            val:"Item 2"
        }
    ];
    
    private selectListVal:string; 
    
    constructor(private router: Router, private route: ActivatedRoute) { 
        router.events.subscribe((url:any) =>{
            this.currentTab = url.url;
            console.log(this.currentTab );
        })
    }
    ngOnInit() {
       /* this.sub = this.route.params.subscribe(params => {
          this.id = +params['id']; 
           this.selectListVal = this.dropeDownList[0].val;            
        });*/
        
    }
    
    ngAfterViewInit() {
         this.selectListVal = this.dropeDownList[0].val; 
        $.simpleSlideShow('#slideshow');
      }

    navigateFormPage = function () {
        this.router.navigateByUrl('/form');
    };    

    ngOnDestroy() {
        //this.sub.unsubscribe();
    }
    
    
    
    

}
