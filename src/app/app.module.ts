import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CoursesService } from './courses.service';
//import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HotelListComponent } from './Hotel/hotel-list/hotel-list.component';
import { HotelAddComponent } from './Hotel/hotel-add/hotel-add.component';
import { AddHotelComponent } from './modules/Hotel/add-hotel/add-hotel.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { InputFormatDirective } from './input-format.directive';
import { UserpostsComponent } from './userposts/userposts.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { RequestResourceComponent } from './request-resource/request-resource.component';
import { ShowRequestComponent } from './show-request/show-request.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuditViewComponent } from './audit-view/audit-view.component';
import {} from 'ag-grid-angular';
import {} from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    //CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ContactFormComponent,
    HotelListComponent,
    HotelAddComponent,
    InputFormatDirective,
    UserpostsComponent,
    PostdetailsComponent,
    RequestResourceComponent,
    ShowRequestComponent,
    SignupFormComponent,
    AuditViewComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([

      {
        path:'posts',
        component:UserpostsComponent
      },

      {
        path:'authors',
        component:AuthorsComponent
      },

      {
        path:'contactform',
        component:ContactFormComponent
      },
      {
        path:'posts/:id',
        component:PostdetailsComponent
      },
      {
        path:'request-resource',
        component:RequestResourceComponent
      },
      {
        path:'show-request',
        component:ShowRequestComponent
      },
      {
        path:'audit-view',
        component:AuditViewComponent
      },

      {
        path:'**',
        component:ProductListComponent
      }

    ])
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
