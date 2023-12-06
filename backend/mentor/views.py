from rest_framework import generics
from .models import Trainer, Course, Contact
from .serializers import ContactSerializer , TrainerSerializer, CourseSerializer


class ContactCretaeview(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class TrainerListView(generics.ListAPIView):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer

class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all().select_related('instructor')
    serializer_class = CourseSerializer

class CourseDetailView(generics.RetrieveAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CoursePopularListView(generics.ListAPIView):
    queryset = Course.objects.order_by('-likes')[:3].select_related('instructor')
    serializer_class = CourseSerializer

