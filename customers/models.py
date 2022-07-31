from django.db import models

class Customer(models.Model):
	first_name = models.CharField("First name", max_length=255)
	last_name = models.CharField("Last name", max_length=255)
	email = models.EmailField()
	language =  models.CharField("User language", max_length=5)
	
	def __str__(self):
		return self.first_name + " " + self.last_name + "(" + self.email + "): " + self.language