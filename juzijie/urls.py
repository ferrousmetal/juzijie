from django.conf.urls import url,include
from django.contrib import admin
from django.views.generic import View
from django.shortcuts import render, redirect
from django.urls import reverse

class IndexView(View):
    def get(self, request):
        user = request.user
        if user:
            print('11')
            return render(request, "index.html")
        else:
            print('22')
            return redirect(reverse("user:register"))


class JieTiaoView(View):
    def get(self, request):
        return render(request, "产品申请1.html")


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^jietiao', JieTiaoView.as_view()),
    url(r'^user/',include("user.urls",namespace='user')),
    url(r'^', IndexView.as_view()),

]
