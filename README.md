# 명세표

## 1. 장고







1. Movie

   | /            | 전체영화 목록 페이지 |
   | ------------ | -------------------- |
   | <movie_pk>/  | 상세 페이지          |
   | recommended/ |                      |

   

2. Community

| reviews/create                | 리뷰 생성          |
| ----------------------------- | ------------------ |
| reviews/                      | 전체 리뷰 목록     |
| reviews/<review_pk>/          | 단일 리뷰 상세조회 |
| reviews/<review_pk>/comments/ | 댓글 생성          |
| reviews/<review_pk>/like/     | 좋아요             |



3. Accounts

| signup/ | Form 표시 및 신규 사용자 생성 |
| ------- | ----------------------------- |
| login/  | Form 표시 및 기존 사용자 인증 |
| logout/ | 인증된 사용자 인증 해제       |

