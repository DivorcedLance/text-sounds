from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from . import voicerss_tts
from text_sounds.settings import API_KEY

# Create your views here.
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def text_to_speech(request):
    if request.method == 'POST':
        json_data = json.loads(request.body)

        voice = voicerss_tts.speech({
            'key': API_KEY,
            'hl': json_data['hl'],
            'v': json_data['v'],
            'src': json_data['text'],
            'r': '0',
            'c': 'mp3',
            'f': '44khz_16bit_stereo',
            'ssml': 'false',
            'b64': 'true'
        })

        return JsonResponse({'audio': voice['response']}, safe=False)

    return JsonResponse({'error': 'Invalid method'}, status=405)