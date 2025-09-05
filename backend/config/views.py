from django.http import JsonResponse

def hello_api(request):
    data = {
        "message": "Hello from Django!",
        "items": [1, 2, 3, 4, 5],
    }
    return JsonResponse(data)