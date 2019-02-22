from django.shortcuts import render
from django.views.generic import View

# Create your views here.

class RegisterView(View):
    """
    用户注册
    """
    def get(self,request):
        return render(request,"Register.html")