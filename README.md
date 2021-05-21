# 명세표



## 1. PPT (...기획......;; 초초초초 간략)

[google sheet](https://docs.google.com/presentation/d/1RvIF_9Ck6xDtpFSgp0mAvlZCa06VRVh04FstW-k7dxQ/edit?ts=60a36d48#slide=id.gd9446e4414_1_14)







## 2. ERD

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



