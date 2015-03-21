from django.contrib import admin

from test_app.models import Question, Theme, Answer, Results

admin.site.register(Question)
admin.site.register(Answer)
admin.site.register(Theme)
admin.site.register(Results)