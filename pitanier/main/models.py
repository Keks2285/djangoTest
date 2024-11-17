from django.db import models

# Create your models here.
class Person(models.Model):
    login = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    age = models.IntegerField()