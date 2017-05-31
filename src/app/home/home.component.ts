import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy  {
    
    private sub: any;
    id: number;
    
    constructor(private route: ActivatedRoute) { }
    ngOnInit() {
       this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
    }

    navigateFormPage = function () {
        this.route.navigateByUrl('/form');
    };    

    ngOnDestroy() {
        //this.sub.unsubscribe();
    }

}
