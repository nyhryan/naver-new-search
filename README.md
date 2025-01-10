# 네이버 뉴스 키워드 검색

키워드로 검색하여 관련된 뉴스를 봅니다.

React와 tailwindcss로 작성한 간단한 애플리케이션입니다.

## 개발 방법

1. 저장소 클론
2. `npm install / yarn install` 등으로 패키지 설치
3. `npm run dev / yarn run dev` 로 `vite`를 통한 로컬 프리뷰
   - Naver API에 등록하고 나서 프로젝트 루트에 `.env`파일을 생성해야 합니다.
   - [Naver Developers](https://developers.naver.com/main/) 로부터 API 키를 따와서 `.env` 파일에 `VITE_CLIENT_ID=<Client ID>`와 `VITE_CLIENT_SECRET=<Client Secret>` 로 각각 입력합니다.
