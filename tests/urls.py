from django.conf.urls import patterns, include, url
from django.contrib import admin
from test_app.views import AllThemesListView, OneThemeDetailView, QuestionCreateView, ThemeCreateView, \
    ChangeThemeUpdateView, DeleteThemeDeleteView, UserCreateView, ResultCreateView, ResultDetailView

urlpatterns = patterns(

    '',
    url(r'^$', AllThemesListView.as_view(), name='all-themes'),
    url(r'^test/(?P<pk>\d+)/$', OneThemeDetailView.as_view(), name='one-theme'),
    url(r'^create_theme/$', ThemeCreateView.as_view(), name='create-theme'),
    url(r'^change_theme/(?P<pk>\d+)/$', ChangeThemeUpdateView.as_view(), name='change-theme'),
    url(r'^delete_theme/(?P<pk>\d+)/$', DeleteThemeDeleteView.as_view(), name='delete-theme'),

    url(r'^create_question/$', QuestionCreateView.as_view(), name='create-question'),

    url(r'^regme/$', UserCreateView.as_view(), name='registration'),

    url(r'^create_result/$', ResultCreateView.as_view(), name='create-result'),
    url(r'^results/$', ResultDetailView.as_view(), name='create-result'),


    # url(r'^answer_test/$', , name='answer-test'),

    url(r'^login/$', 'django.contrib.auth.views.login', name='login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': '/'}),

    url(r'^admin/', include(admin.site.urls)),
)
