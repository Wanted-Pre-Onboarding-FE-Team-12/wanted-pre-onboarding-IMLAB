# wanted-pre-onboarding-I.M.LAB 과제

<br/>

#### <a href='https://github.com/Wanted-Pre-Onboarding-FE-Team-12/wanted-pre-onboarding-IMLAB/wiki/wanted-pre-onboarding-IMLAB'>Wiki</a>

#### <a href='https://github.com/orgs/Wanted-Pre-Onboarding-FE-Team-12/projects/1'>Project</a>

# 목차

- [실행](#1-실행)
- [폴더구조](#2-폴더구조)
- [과제 달성 사항 및 해결 방법](#3과제-달성-사항-및-해결-방법)

<br/>
<br/>

## 팀원

| 이름                                        | 역할                                                       |
| ------------------------------------------- | ---------------------------------------------------------- |
| [김재훈](https://github.com/rmawogns)       | upcoming 페이지 구현                                       |
| [노기훈](https://github.com/ch4md0m)        | 초기 세팅, 상세 페이지 구현, 배포                          |
| [유지예](https://github.com/jiye-7)         | 검색 기능, 검색 페이지에서 쓰이는 무한 스크롤, 모달창 구현 |
| [이우윤](https://github.com/EEOOOO)         | 메인 페이지 구현                                           |
| [백광현](https://github.com/ghbaekdev)      | now playing 홈페이지 구현, 로딩컴포넌트 제작               |
| [정진우](https://github.com/jinux127)(팀장) | 공통 컴포넌트 제작 (로딩, 스크롤업), 순위페이지 구현       |
| [정현준](https://github.com/wjd2676)        | 개인 사정으로 불참                                         |

<br/>
<br/>

## Tech Stack

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
    <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img src="https://img.shields.io/badge/REACT_QUERY-764ABC?style=for-the-badge&logo=recoil&logoColor=white">
</div>

<br/>
<br/>
 
## 1. 실행
### 실행 방법

```sh
npm install

npm run start
```

<br/>

### 데모 링크

### [🚀🚀 데모 보러가기](http://wanted-team-12-imlab.s3-website.ap-northeast-2.amazonaws.com/)

<br/>
<br/>

## 2. 폴더구조

```
├── package-lock.json
├── package.json
├── public
│   ├── images
│   │   └── trpage.gif
│   └── index.html
└── src
    ├── App.js
    ├── api
    │   ├── index.js
    │   └── movieApi.js
    ├── assets
    │   ├── alternativeimage.jpeg
    │   ├── loading.gif
    │   └── loadingdark.gif
    ├── components
    │   ├── Footer
    │   │   ├── index.jsx
    │   │   └── style.js
    │   ├── Header
    │   │   ├── index.jsx
    │   │   └── style.js
    │   ├── Links
    │   │   ├── index.jsx
    │   │   └── style.js
    │   ├── Loading
    │   │   ├── index.jsx
    │   │   └── style.js
    │   ├── Loading2
    │   │   ├── index.jsx
    │   │   └── style.js
    │   ├── ScrollUp
    │   │   └── index.jsx
    │   └── Search
    │       ├── index.jsx
    │       └── style.js
    ├── hooks
    │   └── useInfiniteQueryWithObservation.js
    ├── index.js
    ├── layout
    │   ├── index.jsx
    │   └── style.js
    ├── pages
    │   ├── Detail
    │   │   └── index.jsx
    │   ├── Home
    │   │   ├── Components
    │   │   │   ├── MainThumbnail.jsx
    │   │   │   └── Movie.jsx
    │   │   └── index.jsx
    │   ├── NowPlaying
    │   │   ├── componenets
    │   │   │   └── Card
    │   │   │       └── NowPlayingCard.jsx
    │   │   ├── index.jsx
    │   │   └── style.js
    │   ├── Search
    │   │   ├── components
    │   │   │   ├── MovieCard.jsx
    │   │   │   └── MovieModal.jsx
    │   │   ├── index.jsx
    │   │   └── style.js
    │   ├── TopRated
    │   │   ├── components
    │   │   │   ├── Cell.jsx
    │   │   │   ├── Skeleton.jsx
    │   │   │   └── TopRated.jsx
    │   │   └── index.jsx
    │   └── Upcoming
    │       └── index.jsx
    ├── styles
    │   ├── globalStyle.js
    │   └── theme.js
    └── utils
        └── links.js
```

<br/>
<br/>

## 3.과제 달성 사항 및 해결 방법

### 3.1. 공통

1. Loading 상태표기
   - 공통 Loading 컴포넌트를 제작해 api가 Loading 상태이면 렌더링
2. Scroll Up 버튼
   - window 객체를 이용해 스크롤 여부를 판단하여 버튼 생성 및 이동
3. Infinite scroll
   - react-query 라이브러리 중 useInfiniteQuery훅을 이용하여 구현, 여러 페이지에서 동일한 로직이 사용됨을 파악해 커스텀 훅으로 공동 제작하여 loading과 옵저버 컴포넌트를 반환하여 사용하였음.
4. API Response 데이터 캐싱
   - api로 데이터를 호출하고 일정 시간안에 동일한 api를 호출하면 캐싱된 데이터로 처리함, react-query 라이브러리의 stale 과 cache 시간을 조절하여 처리함

<br/>
<br/>

### 3.2. 페이지

#### 1. home page

- 순위에 따라 인기 영화들을 카드 형태로 나열
- 포스터, 제목, 평점 표시
- 상위 20개 중 랜덤으로 영화 상단에 썸네일로 표시

<br/>

#### 2. now playing page

- 한번에 데이터 최대 20개 조회
- 제목, 포스터, 별점 표시
- 포스터 없는 경우, 대체 이미지 적용
- infinitescroll 구현

<br/>

#### 3. upcoming page

- 한번에 데이터 최대 20개 조회
- 제목, 포스터, 개봉 예정일 표시
- 포스터 없는 경우, 대체(no Image) 적용
- infinitescroll 구현

<br/>

#### 4. top-rated page

![image](/public/images/trpage.gif)

- 한번에 데이터 최대 20개 조회
- 제목, 포스터, 별점 표시
- 포스터 없는 경우, 대체 이미지 적용
- lazyLoading 구현
- 이미지 로딩 시 skeleton 으로 표현

<br/>

#### 5. 영화 상세 페이지

![image](/public/images/detailpage.gif)

- Modal 창으로 트레일러 재생
- 트레일러가 있을 경우만 트레일러 버튼 노출

<br/>

#### 6. 검색 페이지

![검색기능 구현](https://user-images.githubusercontent.com/62678492/189015291-e5db93c4-4990-4aee-bd47-0d7f4f89ac8f.gif)

- navigation에서 검색어 입력후, 돋보기 버튼 클릭 or enter로 검색 요청을 보낼 수 있도록 처리, 해당 검색어가 들어가는 모든 영화 정보 조회
- 한 페이지 당 20개의 데이터를 가져오도록 처리, useInfiniteQuery를 사용하여 다음 페이지에 대한 정보와 react-infinite-scroller사용하여 무한스크롤 구현
- useInfiniteQuery 데이터를 캐싱, 캐싱삭제를 위해 ['queryKey', 데이터 변경을 일으키는 state] 적용하여 캐싱 처리
- img url이 없을 때 img태그의 onError 속성이용하여 핸들링
- 검색페이지에서 영화의 제목, 포스터, 별점 표시 (별점이 없는 경우 선호도의 소숫점 한 자리수까지 표기(Number.toFixed())
- 검색페이지 결과에서 해당 영화 정보 클릭 시 모달로 영화의 정보를 보여주고, 닫기 버튼 외 영역에서는 상세페이지로 이동하도록 처리
