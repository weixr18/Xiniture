import datetime
import json
from django.shortcuts import render
from django.forms import ModelForm
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import User, Record


def get_gamedata():
    pass


def get_sata_statistics():
    pass


@require_http_methods(['POST'])
def post_user_info(request):
    response = {}
    try:
        print(request.body)
        data = json.loads(request.body, strict=False)

        userName = ""  # will not be used
        nationality = data['user_nation']
        age = data['user_age']
        logTime = data['log_time']
        userID = hash((logTime, age, nationality))

        print("nationality: ", nationality)
        print("age: ", age)
        print("logTime: ", logTime)
        print("userID", userID)

        user = User()
        user.name = userName
        user.id = str(userID)[:40]
        user.nationality = nationality[:40]
        user.age = int(age)
        user.save()

        response['userID'] = userID
        response['msg'] = 'success'
        response['code'] = 200

    except Exception as e:
        import traceback
        tb = traceback.format_exc()
        print(tb)
        print(e)
        response['msg'] = str(tb) + str(e)
        response['code'] = 500

    return JsonResponse(response)

    pass


@require_http_methods(['POST'])
def post_user_action(request):
    response = {}
    try:
        data = json.loads(request.body, strict=False)

        userId = int(data['user_id'])
        logTime = int(data['log_time'])
        logTime = datetime.datetime.fromtimestamp(logTime/1000, None)
        clickTime = datetime.datetime.now()
        print("userId:", userId, "logTime:", logTime, "clickTime:", clickTime)

        current_page = data['current_page']
        user_choice = data['user_choice']
        date = data['date']
        ECO = int(data['ECO'])
        MIL = int(data['MIL'])
        CON = int(data['CON'])
        CUL = int(data['CUL'])
        SIN = int(data['SIN'])

        record = Record()
        record.userId = userId
        record.logTime = logTime
        record.clickTime = clickTime
        record.currentPageId = current_page["id"]
        record.currentPageType = current_page["type"][0]
        record.userChoice = user_choice
        record.date = date
        record.economy = ECO
        record.militancy = MIL
        record.consciousness = CON
        record.culture = CUL
        record.sinicization = SIN

        record.save()
        response['msg'] = 'success'
        response['code'] = 200

    except Exception as e:
        import traceback
        tb = traceback.format_exc()

        print(tb)
        print(e)

        response['msg'] = str(tb) + str(e)
        response['code'] = 500

    return JsonResponse(response)


"""
def client_info(request, client_id):
    
    # get client info
    # :param request: request object
    # :param id: client id
    # :return: json
    
    if request.method == 'GET':
        return JsonResponse(model_to_dict(Client.objects.get(id=client_id)))

"""
