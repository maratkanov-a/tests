from django.contrib.auth.models import User
from django.db import models


class Answer(models.Model):
    text = models.CharField(max_length=100)

    def __str__(self):
        return self.text


class Question(models.Model):
    name = models.CharField(max_length=100)
    what_question = models.ForeignKey(Answer)

    def __str__(self):
        return self.name


class Theme(models.Model):
    name = models.CharField(max_length=50, unique=True)
    what_question = models.ManyToManyField(Question)

    def __str__(self):
        return self.name


class Results(models.Model):
    which_user = models.ForeignKey(User)
    test_name = models.CharField(max_length=100)
    result = models.IntegerField()