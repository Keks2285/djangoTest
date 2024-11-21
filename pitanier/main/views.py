from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def authorization (request):
    if request.method == 'GET':
        return render(request, template_name='main/vhod.html')
    if request.method == 'POST':
        print(request.POST)
        return render(request, template_name='main/vhod.html')

def registration (request):
    return render(request, template_name='main/registration.html')

def home (request):
    return HttpResponse('Home Page')