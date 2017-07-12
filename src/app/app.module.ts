import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import {BootsrapeModule} from 'bootstrap';

import { AppComponent } from './app.component';
import { HeadertopComponent } from './headertop/headertop.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { Subtab1Component } from './home/subtab/subtab1/subtab1.component';
import { Subtab2Component } from './home/subtab/subtab2/subtab2.component';
import { Subtab3Component } from './home/subtab/subtab3/subtab3.component';
import { Subtab4Component } from './home/subtab/subtab4/subtab4.component';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

import { StudentdataService } from './services/studentdata.service';
import { MapdataService } from './services/mapdata.service';

import { StudentlistComponent } from './commancomponent/studentlist/studentlist.component';
import { SortinglistPipe } from './pipes/sortinglist.pipe';
import { DragComponent } from './drag/drag.component';
import { MypluginDirective } from './custumdirective/myplugin.directive';

import {SlickCarouselComponent, SlickCarouselItem} from './drag/slick-carousel.component'

import { DatePicker } from './commancomponent/datepicker/date-picker.component';
import { BarchartComponent } from './commancomponent/barchart/barchart.component';

import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';

import { YoutubePlaylistService,HttpUtilService } from 'angular2-youtube';
import { YoutubePlayerMiniModule }  from 'ng2-youtube-player-mini'
import { YoutubeplayerComponent } from './commancomponent/youtubeplayer/youtubeplayer.component';
import { AddzeroPipe } from './pipes/addzero.pipe';
import { ZigsawpuzzleComponent } from './zigsawpuzzle/zigsawpuzzle.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'subtab1', pathMatch: 'full' },
      { path: 'subtab1', component: Subtab1Component},
      { path: 'subtab2', component: Subtab2Component },
      { path: 'subtab3', component: Subtab3Component },
      { path: 'subtab4', component: Subtab4Component},    
    ]     
   },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: 'jqueryui', component: DragComponent },    
  { path: 'puzzle', component: ZigsawpuzzleComponent },        
  { path: '**', component: PageNotFoundComponentComponent }    
];

@NgModule({
  declarations: [
    AppComponent,
    SortinglistPipe,  
    HeadertopComponent,
    FooterBottomComponent,
    AboutComponent,
    FormComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    Subtab1Component,
    Subtab2Component,
    Subtab3Component,
    Subtab4Component,  
    StudentlistComponent,
    DragComponent,
    SlickCarouselComponent, 
    SlickCarouselItem,
      DatePicker,
      BarchartComponent,
      MypluginDirective,
      YoutubeplayerComponent,
      AddzeroPipe,
      ZigsawpuzzleComponent
      
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    YoutubePlayerMiniModule,  
    HttpModule,
    RouterModule.forRoot(routes), // <-- installs Router routes, components and services-->
    AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCE8lSGYLtw4qX2wrUazXhmxc907Jd8vFc'
        })
   
  ],
  exports: [AgmCoreModule],    
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, StudentdataService, MapdataService, GoogleMapsAPIWrapper, YoutubePlaylistService,HttpUtilService ], 
  bootstrap: [AppComponent],
    
}) 
export class AppModule { }
