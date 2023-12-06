import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
  providers: [CourseService, ]
})
export class CourseDetailsComponent implements OnInit {
  courseId: number = 0;
  course: Course = {} as Course;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = +params['id'];
      this.courseService.getCourseDetails(this.courseId).subscribe(
        (data) => {
          this.course = data;
        },
        (error) => {
          console.error('Error fetching course details:', error);
        }
      );
    });
  }
}
