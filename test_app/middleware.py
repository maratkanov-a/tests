# coding=utf-8
from django.core.urlresolvers import reverse
from django.http.response import HttpResponseRedirect


class LoginAuthenticationMiddleware(object):
    """
    Middleware для постоянной проверки подлиности пользователя
    """
    def process_response(self, request, response):
        if request.path == reverse('login') or request.user.is_authenticated():
            return response
        else:
            return HttpResponseRedirect(reverse('login'))

