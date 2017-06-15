import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MapdataService } from '../../../services/mapdata.service'

@Component({
    selector: 'app-subtab1',
    templateUrl: './subtab1.component.html',
    styleUrls: ['./subtab1.component.css']
})
export class Subtab1Component implements OnInit, AfterViewInit {  
    zoom:number = 5;
    lat: number = 18.5204;
    lng: number = 73.8567;
    markers:marker[];
    constructor(private _mapdataService:MapdataService) { }

    ngOnInit() {
        this._mapdataService.getmapData()
        .subscribe(resmpaData => {
            this.markers = resmpaData
             console.log(this.markers);
        });
       
    }
    
    ngAfterViewInit(){
       
    }

}

interface marker{
    city:string,
    lat:number,
    lng: number
}
