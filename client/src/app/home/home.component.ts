import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course.model';
import { Trainer } from '../model/trainer.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  courses: Course[] = [];
  trainers: Trainer[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getPopularCourse().subscribe(
      (data: Course[]) => {
        this.courses = data;
        this.trainers = this.extractTrainersFromCourses(data);
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }

  extractTrainersFromCourses(courses: Course[]): Trainer[] {
    return courses.map(course => course.instructor);
  }

}
