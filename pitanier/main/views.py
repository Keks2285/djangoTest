from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def authorization (request):
    return render(request, template_name='main/login.html')

def registration (request):
    return render(request, template_name='main/registration.html')

def home (request):
    return HttpResponse('Home Page')