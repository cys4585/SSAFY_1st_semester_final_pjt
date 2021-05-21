import requests
import json
from pprint import pprint

'''
기존에 genre list를 저장한 movies.json에
movie list를 추가해서 다시 저장하게 됩니다.
get_genre_list.py 를 먼저 run 한 후, 이 파일을 실행해 주세요.

genre / movie JSON 파일을 별도로 만들어도 상관없습니다.
하지만 이 경우에는 DB에 loaddata 할 때, genre.json을 먼저 해야 합니다.

popular 영화를 얻어오는 요청경로를 이용했습니다.

사람마다 Movie Model이 다르게 정의되었을 수 있기 때문에, 필드명을 수정해줘야 할 수도 있습니다.
저는 TMDB에서 받아온 이름과 동일하게 필드명을 만들어줬습니다. (일부 필드는 삭제했습니다.)

movies.json 파일이 생성되면,
movies app에 fixtures 폴더를 생성하고, 해당 폴더로 movies.json을 이동시킨 후,
bash창에 아래 명령어를 입력합니다.
$ python manage.py loaddata movies/fixtures/movies.json 
'''

# 파일 열기 ! (genre 데이터만 있는 상태에서 movie 데이터 추가하기 위해)
with open('movies.json', 'r+') as f:
    data = json.load(f)
# pprint(data)

URL = 'https://api.themoviedb.org/3'
# KEY 넣어주세요!
KEY = ''    

page = 25   
# page : 1 ~ 500
# page당 data 20개
# popular/ 경로의 page는 최대 500 page 까지 되는거 같습니다. (총 10000개 data 얻을 수 있을 듯?)
for i in range(1, page + 1):
    url = f'{URL}/movie/popular/?api_key={KEY}&page={i}'
    response = requests.get(url)
    res_data = response.json()['results']  
    print(response.json()['page'])      # 진행 상황을 알기위한 출력 :)

    for j in range(len(res_data)):
        movie = res_data[j]
        # release_date 가 없는 경우도 있어서... 이 경우는 continue를 해줍니다!
        # poster_path가 없는 경우도 continue를 해줍니다!
        if not movie.get('release_date') or not movie.get('poster_path'): 
            print('release_date is not exist : continue')
            continue
        # DB에 넣을 수 있는 형태로 만들어 주기!
        movie.pop('backdrop_path')  # 필요없을 거 같은 필드라 삭제했습니다.
        movie.pop('video')          # 삭제
        movie['like_users'] = []    # 필드 추가 (like 기능구현을 위해 user와 mtm 관게 설정한 필드)
        tmp = {
            'model': 'movies.movie',
            'pk': movie.pop('id'),
            'fields': movie,
        }
        # pprint(tmp)
        data.append(tmp)

# 파일을 만들지 않아도 자동으로 생성해서 입력됩니다.
with open('movies.json', 'w') as f:
    json.dump(data, f, indent=4)