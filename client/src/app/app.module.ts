import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { TrainersComponent } from './trainers/trainers.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ContactComponent } from './contact/contact.component';

import { ContactService } from './services/contact.service';
import { CourseService } from './services/course.service';
import { TrainersService } from './services/trainers.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    TrainersComponent,
    CourseDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ContactService,
    CourseService,
    TrainersService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
