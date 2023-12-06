from django.contrib import admin

from mentor.models import Trainer, Course, Contact

# Register your models here.
admin.site.register(Course)
admin.site.register(Trainer)
admin.site.register(Contact)

