from rest_framework import serializers
from .models import Trainer, Course, Contact

class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    instructor = TrainerSerializer()
    class Meta:
        model = Course
        fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
