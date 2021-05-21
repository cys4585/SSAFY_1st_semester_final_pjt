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



2. posts app

| HTTP verb | URL 패턴                              | 설명                         |
| --------- | ------------------------------------- | ---------------------------- |
| GET       | posts/                                | 전체 게시글 목록 조회 페이지 |
| POST      | posts/                                | 게시글 생성                  |
| GET       | posts/<post_id>/                      | 게시글 상세(detail) 페이지   |
| PUT       | posts/<post_id>/                      | 게시글 수정                  |
| DELETE    | posts/<post_id>/                      | 게시글 삭제                  |
| POST      | posts/<post_id>/likes/                | 게시글 좋아요 / 취소         |
| POST      | posts/<post_id>/comment/              | 게시글 댓글 생성             |
| PUT       | posts/<post_id>/comment/<comment_id>/ | 게시글 댓글 수정             |
| DELETE    | posts/<post_id>/comment/<comment_id>/ | 게시글 댓글 삭제             |



3. Accounts

| HTTP verb | URL 패턴                 | 설명                          |
| --------- | ------------------------ | ----------------------------- |
| POST      | accounts/signup/         | 회원 가입                     |
| POST      | accounts/api-token-auth/ | 로그인 (JWT 얻기)             |
| -----     | -----                    | JWT 갱신 (공부해야함)         |
| GET       | accounts/<user_name>/    | 회원 정보 상세(detail) 페이지 |
| PUT       | accounts/<user_name>/    | 회원 정보 수정                |
| DELETE    | accounts/<user_name>/    | 회원 탈퇴                     |



- git 순서
  - git add .
  - git commit -m " ~~~ "
  - git pull (영수가 push한게 있으면 pull 꼭!!!)
  - git push



## 4. 각자 맡은 작업

영수: 백엔드 + 프론트엔드

보람: 프론트엔드 + HTML/CSS



## 5. 일정

- 0520 (목)

  - 기획 및 모델링 

- 0521 (금)

  - page 구조 잡기(vue) / 페이지별 필요한 데이터 확인 및 구현(django)

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

