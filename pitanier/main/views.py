from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect

# Create your views here.
def authorization (request):
    if request.method == 'GET':
        return render(request, template_name='main/vhod.html', status=200)
    if request.method == 'POST':
        #print(request.POST["PASS"])
        return redirect('reg')

def registration (request):
    return render(request, template_name='main/registration.html')

def home (request):
    return HttpResponse('Home Page')