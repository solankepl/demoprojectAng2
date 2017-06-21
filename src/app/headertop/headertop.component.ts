import { Component, OnInit } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
@Component({
  selector: 'app-headertop',
  templateUrl: './headertop.component.html',
  styleUrls: ['./headertop.component.css']
})
export class HeadertopComponent implements OnInit {
  private currentRoute:any; 
  constructor(private router: Router) { 
      router.events.subscribe( (url:any) => { 
        this.currentRoute = url.url;
      });
     
  }

  ngOnInit() {
      
  }
}
