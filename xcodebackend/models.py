from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class ListOfTables(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE) 
    tablename = models.CharField(max_length=100, null=False, blank=False)
    tableschema = models.CharField(max_length=300)

    def __str__(self):
        return str(self.owner) + " == " + self.tablename