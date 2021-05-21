# Final Project - 영화 추천 페이지 만들기



## 1. PPT (...기획......;; 초초초초 간략)

[google sheet](https://docs.google.com/presentation/d/1RvIF_9Ck6xDtpFSgp0mAvlZCa06VRVh04FstW-k7dxQ/edit?ts=60a36d48#slide=id.gd9446e4414_1_14)



## 2. ERD (Model)

![image-20210520211252198](README.assets/image-20210520211252198.png)







## 3. API URL

1. movies app

| HTTP verb | URL 패턴                                | 설명                       |
| --------- | --------------------------------------- | -------------------------- |
| GET       | movies/                                 | 전체 영화 목록 조회 페이지 |
| GET       | movies/recommend/                       | 영화 추천 페이지           |
| GET       | movies/<movie_id>/                      | 영화 상세(detail) 페이지   |
| POST      | movies/<movie_id>/likes/                | 영화 좋아요 / 취소         |
| POST      | movies/<movie_id>/comment/              | 영화 댓글 생성             |
| PUT       | movies/<movie_id>/comment/<comment_id>/ | 영화 댓글 수정             |
| DELETE    | movies/<movie_id>/comment/<comment_id>/ | 영화 댓글 삭제             |



2. community app

| HTTP verb | URL 패턴                                  | 설명                         |
| --------- | ----------------------------------------- | ---------------------------- |
| GET       | community/                                | 전체 게시글 목록 조회 페이지 |
| POST      | community/                                | 게시글 생성                  |
| GET       | community/<post_id>/                      | 게시글 상세(detail) 페이지   |
| PUT       | community/<post_id>/                      | 게시글 수정                  |
| DELETE    | community/<post_id>/                      | 게시글 삭제                  |
| POST      | community/<post_id>/likes/                | 게시글 좋아요 / 취소         |
| POST      | community/<post_id>/comment/              | 게시글 댓글 생성             |
| PUT       | community/<post_id>/comment/<comment_id>/ | 게시글 댓글 수정             |
| DELETE    | community/<post_id>/comment/<comment_id>/ | 게시글 댓글 삭제             |



3. Accounts

| HTTP verb | URL 패턴                 | 설명                          |
| --------- | ------------------------ | ----------------------------- |
| POST      | accounts/signup/         | 회원 가입                     |
| POST      | accounts/api-token-auth/ | 로그인 (JWT 얻기)             |
| -----     | -----                    | JWT 갱신 (공부해야함)         |
| GET       | accounts/<user_name>/    | 회원 정보 상세(detail) 페이지 |
| PUT       | accounts/<user_name>/    | 회원 정보 수정                |
| DELETE    | accounts/<user_name>/    | 회원 탈퇴                     |



## 4. 각자 맡은 작업

영수: 백엔드 + 프론트엔드

보람: 프론트엔드 + HTML/CSS



## 5. 일정

- 0520 (목)

  - 기획 및 모델링 

- 0521 (금)

  - page 구조 잡기(vue) / 페이지별 필요한 데이터 확인 및 구현(django) / 모델링 완성

  - movie 페이지 디자인, signup, login 페이지 디자인

- 0524 (월)

  - movie detail, recommend, community 페이지 디자인
  - 페이지별 데이터 무조건 가져올 수 있어야 한다.

- 0525 (화)

  - recommend 아이디에이션, 로직 구현
  - 부족한 페이지 더 완성도 높이기
  - 아마 추가할 작업이 있을 것 같음...

- 0526 (수)

  - 디버깅 (에러 0% 도전)

- 0527 (목)

  - ppt 및 발표준비

- 0528 (금)

  - 발표



## *프로젝트 중 공부한 내용들



### Git

- 항상 git은 vsCode로 관리합시다. (conflict 났을 때 merge를 쉽게 할 수 있음)

- git 순서
  - git add .
  - git commit -m " ~~~ "
  - git pull (local에 수정된 내용이 있다면 pull 전에 commit을 해줘야 한다.)
  - git push (push 하기 전에 git repository에 pull할 게 있다면 pull 해줘야 한다.)

- pull 할 때 conflict(충돌) 발생한 경우 
  - merge 하고 
  - git add .
  - git commit -m "merge : ~~~~"
  - git push



### 직렬화 & 역직렬화

- 직렬화(serializing) : python data -> JSON

- 역직렬화(deserializing) : JSON -> python data

- ```python
  # django restframework에서 제공하는 ModelSerializer 사용했을 때
  
  # 직렬화 (serializing)
  movies = Movie.objects.all()	# Python data 형태 (QuerySet)
  serializer = MovieSerializer(movies, many=True) 	# DB의 Movie table에서 모든 table들을 꺼내 직렬화한다.(JSON 형태로 만들어 준다.)
  													# QuerySet인 경우 -> many=True 를 해줘야한다.
      												# 단순히 Model instance인 경우 -> X
  # 역직렬화 (deserializing)
  data = request.data	# JSON 형태
  serializer = MovieSerializer(data=data)	# JSON 형태의 데이터를 역직렬화한다. (Python data 형태로 만들어준다.)
  if serializer.is_valid():	# 유효성 검사
      serializer.save()	# 역직렬화된 데이터(Python data 형태)를 DB의 Movie table에 저장한다.
      # serializer.save(user=request.user) 	# user를 넣어줘야 하는 경우 바로 넣어줄 수 있다.
  # db 수정 한번에 하는 법
  movie = Movie.objects.get(pk=1)	# model instance
  data = request.data		# JSON 형태
  serializer = MovieSerializer(movie, data=data)	# movie를 수정 (data로)
  if serializer.is_valie():	# 유효성 검사
      serializer.save()	# 저장
  ```

- 궁금한 부분

  - 역직렬화 할 때 
    - JSON data를 여러개를 (배열 형태로) 받아왔다면, 저장하는 법이 다른가?
      - many=True를 써서 한번에 저장하나?
      - 아님 알아서 그냥 저장이 되나?
      - 아님 하나씩 꺼내서 저장을 해줘야 하나?

