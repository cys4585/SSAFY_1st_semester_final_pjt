import requests
import json


'''
get_movie_list.py를 실행하기 전에 이 파일을 실행해 주세요.

genre와 movie는 서로 mtm 관계설정이 되어있기 때문에, 
genre table을 먼저 만들어 둬야 movie 데이터를 가져올 때 문제가 발생하지 않습니다.
'''

URL = 'https://api.themoviedb.org/3'
# KEY 넣어주세요!
KEY = ''

url = f'{URL}/genre/movie/list?api_key={KEY}'
response = requests.get(url)
res_data = response.json()['genres']

data = []
for i in range(len(res_data)):
    genre = res_data[i]
    # DB에 넣을 수 있는 형태로 바꿔주기!
    tmp = {
        'model': 'movies.genre',
        'pk': genre['id'],
        'fields': {
            'name': genre['name']
        }
    }
    # print(tmp)
    data.append(tmp)


# 파일을 만들지 않아도 자동으로 생성해서 입력됩니다.
with open('movies.json', 'w') as f:
    json.dump(data, f, indent=4)

