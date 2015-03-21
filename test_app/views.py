from debian.debtags import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.core.urlresolvers import reverse_lazy
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView, ListView, UpdateView, CreateView, FormView, DetailView, DeleteView
from test_app.models import Theme, Question, Answer, Results


class AllThemesListView(ListView):
    model = Theme


class OneThemeDetailView(DetailView):
    model = Theme


class ThemeCreateView(CreateView):
    model = Theme
    success_url = reverse_lazy('all-themes')


class ChangeThemeUpdateView(UpdateView):
    model = Theme
    success_url = reverse_lazy('all-themes')
    template_name_suffix = '_change_form'


class DeleteThemeDeleteView(DeleteView):
    model = Theme
    success_url = reverse_lazy('all-themes')


    # # @method_decorator(login_required)
    # def dispatch(self, request, *args, **kwargs):
    #     super().DeleteThemeDeleteView(self).post(request, *args, **kwargs)

class QuestionCreateView(CreateView):
    model = Question
    success_url = reverse_lazy('all-themes')


class UserCreateView(CreateView):
    model = User
    form_class = UserCreationForm
    success_url = reverse_lazy('all-themes')
    template_name_suffix = '_create_form'


class ResultCreateView(CreateView):
    model = Results
    success_url = reverse_lazy('all-themes')
    template_name_suffix = '_create_form'


class ResultDetailView(ListView):
    model = Results
    success_url = reverse_lazy('all-themes')


