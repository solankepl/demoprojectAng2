import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
declare var $: any;

import { DatePicker } from '../commancomponent/datepicker/date-picker.component';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',    
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy  {
    
    private sub: any;
    id: number;
   
    
    
    
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
    
    constructor(private router: Router, private route: ActivatedRoute) { }
    ngOnInit() {
       this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.selectListVal = this.dropeDownList[0].val;
       console.log(this.selectListVal);   
    });
    }

    navigateFormPage = function () {
        this.router.navigateByUrl('/form');
    };    

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
