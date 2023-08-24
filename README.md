# frameworkless-toss

프레임워크 없는 프론트엔드개발 프로젝트

# 라우터 설정

```
router
ㄴ router.js
ㄴ pages.js
```

# server.js 설정

npm run start 명령어로 실행 - localhost:3000에서 확인

vscode Liver server에서 설정하는 방법은 따로 없다고 해서 express 설정을 블로그 참고해서
세팅했습니다.

- /tech, /design 경로로 이동 후 새로고침했을 때 제대로 표시되었으나
- /article/title-id 이 경로로 이동 후 새로고침 했을 때 오류가 표시되어
  'express-history-api-fallback' 패키지 설치하여 해결하였습니다.

# view - template 활용한 렌더링 함수

## article - 상세 페이지

### 페이지 데이터 분석

- 데이터

```js
{
  thumb_img : 'url',
  article_id: 'article id (URL에 추가용도)',
  title : '제목',
  desc : '설명글',
  writer : {
    name : '이름',
    role : '역할',
    profile_img : '프로필이미지',
  },
  reg_dage : '2023.7.21',
  category : 'tech',
  content: 'content객체', // 이 부분 데이터로 처리
}
```

- content객체

```js
// content 내용 데이터 구조화
{
  {
    tag : 'h1',
    children : '텍스트'
  },
  {
    tag : 'p'
    children : '텍스트'
  }
}
```
- tag, children 내용에 맞게 DOM 요소가 렌더링 되도록 처리하기.


### 참고

[노션 링크참고](https://modacbull.notion.site/d88c5cb11863405faf37a2f39763dc95?pvs=4)
