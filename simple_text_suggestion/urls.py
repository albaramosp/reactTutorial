from django.contrib import admin
from django.urls import re_path
from customers import views

urlpatterns = [
    re_path('admin/', admin.site.urls),
    re_path(r'^api/customers/$', views.customers_list),
	re_path(r'^api/customers/(?P<pk>[0-9]+)$', views.customers_detail),
]
