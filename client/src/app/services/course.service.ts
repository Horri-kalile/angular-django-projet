import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses/`);
  }
  getCourseDetails(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/courses/${id}/`);
  }
  getPopularCourse(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses/popular/`);
  }
}
