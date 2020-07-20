from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=20)
    id = models.CharField(primary_key=True, max_length=40)
    # id: name, 登录时间, 国籍, 年龄一起hash
    nationality = models.CharField(max_length=40)
    age = models.IntegerField()

    def __str__(self):
        return self.name
    pass


class Record(models.Model):
    userId = models.IntegerField()
    logTime = models.DateTimeField()
    clickTime = models.DateTimeField()
    currentPageId = models.IntegerField()
    currentPageType = models.CharField(max_length=1)
    # R-riot, I-information, E-event
    userChoice = models.CharField(max_length=1)
    date = models.CharField(max_length=8)
    economy = models.IntegerField()
    militancy = models.IntegerField()
    consciousness = models.IntegerField()
    culture = models.IntegerField()
    sinicization = models.IntegerField()

    class Meta:
        unique_together = ("userId", "logTime", "clickTime")

    def __str__(self):
        return self.userId.__str__() + self.logTime.__str__()
