from datetime import timezone
from django.db import models

# Create your models here.

class Trainer(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    bio = models.TextField()
    image = models.ImageField(upload_to='trainer/images/')
    twitter = models.URLField(blank=True)
    facebook = models.URLField(blank=True)
    instagram = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)

    def __str__(self):
        return self.name

class Course(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='courses/images/')
    instructor = models.ForeignKey(Trainer, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    available_seats = models.IntegerField()
    schedule = models.DateField(auto_now=True)
    likes = models.IntegerField()

    def __str__(self):
        return self.title
    
class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return self.name

