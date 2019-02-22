from django.conf.urls import url
from user.views import *


urlpatterns=[

    url(r'^register',RegisterView.as_view(),name="register"),
]