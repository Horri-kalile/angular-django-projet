from django.urls import path

from .views import (
    ContactCretaeview,
    TrainerListView,
    CourseListView,
    CourseDetailView,
    CoursePopularListView
)

urlpatterns = [
    path('contact/', ContactCretaeview.as_view(), name='contact'),

    path('trainers/', TrainerListView.as_view(), name='trainer-list'),

    path('courses/', CourseListView.as_view(), name='course-list'),
    path('courses/<int:pk>/', CourseDetailView.as_view(), name='course-detail'),
    path('courses/popular/', CoursePopularListView.as_view(), name='course-popular-list'),
]
