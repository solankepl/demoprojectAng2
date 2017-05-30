import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeadertopComponent } from './headertop/headertop.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },
  { path: '**', component: PageNotFoundComponentComponent }    
];



@NgModule({
  declarations: [
    AppComponent,
    HeadertopComponent,
    FooterBottomComponent,
    AboutComponent,
    FormComponent,
    HomeComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- installs Router routes, components and services-->
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
