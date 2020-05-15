from django.urls import path
from .views import ListTodo, DetailTodo,list_view, detail_view

urlpatterns = [
    path('', list_view),
    path('<int:pk>/', detail_view),
]