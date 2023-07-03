# 키오스크 프로젝트 (개인프로젝트)
>  베스킨라빈스를 참고하여 키오스크로 제작한 React 프로젝트입니다.

<img src="https://github.com/Tae-Hyun98/kiosk/assets/119056869/94af1254-a81c-46e2-8364-7eea4a765c82"/>

## 목차
  ### 1. [프로젝트 소개](#1-프로젝트-소개)
  ### 2. [제작기간](#2-제작-기간--20230621--20230630)
  ### 3. [사용한 기술스택](#3-사용한-skills)
  ### 4. [페이지 구성](#4-페이지-구성-1)
  ### 5. [주요기능(코드)](#5-주요기능)   
   - #### [라우팅 페이지전환](#5-1-라우팅-페이지전환)  
   - #### [리뷰등록기능](#5-2-상품-리뷰문의기능)  
  ### 6. [느낀점](#6-느낀점-1)

<br/> 

## 1. 프로젝트 소개
- 베스킨라빈스를 참고하여 키오스크로 제작한 React 프로젝트입니다.

- 퍼블리싱 및 기능구현은 **개인 100%** 작업입니다.

- 제작된 프로젝트는 gh-pages라이브러리를 이용해 deploy한후 Github으로 배포를 하였습니다.

- 프로젝트는 리액트 18.2v으로 제작 및 전역 상태관리는 redux-toolkit을 사용하였습니다.

- 애니메이션 라이브러리는 framer motion을 사용하였고, 스타일은 CSS3와 Styled-Components를 사용하였습니다.

- 주요기능으로는 **라우터를 이용한 페이지전환, redux-toolkit 전역 상태관리, useState를 이용한 상태관리** 등이 있습니다.
  
- 프로젝트에 사용한 데이터들은 직접 DataSet을 임의로 구축하여 사용하였습니다.
  <details>
    <summary>🔎 DataSet 보기</summary>
  
    #### 객체 데이터의 구조는 id, image, title, tag, desc, price로 구성이 되어있습니다.
    <p><img src="https://github.com/Tae-Hyun98/kiosk/assets/119056869/3434675b-3b3b-4fa1-a9e0-034b54edf384" width:300px/></p>
    <img src="https://github.com/Tae-Hyun98/kiosk/assets/119056869/bcff7a30-3568-477f-998b-01e65c0c07f7"/>
    
    </details>

<br/>

## 2. 제작 기간 : 2023.06.21 ~ 2023.06.30

<br/>

## 3. 사용한 Skills  
  <a href="#!"><img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"/></a>

  <a href="#!"><img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat&logo=styledcomponents&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/gsap.js-88CE02?style=flat&logo=greensock&logoColor=white"/></a>
    
  <a href="#!"><img src="https://img.shields.io/badge/visual studio code-007ACC?style=flat&logo=visualstudiocode&logoColor=white"/></a>
  <a href="#!"><img src="https://img.shields.io/badge/github-181717?style=flat&logo=github&logoColor=white"/></a>

<br/>

## 4. 페이지 구성  
페이지는 **메인페이지, 서브페이지(종류별 상품표시), 디테일페이지(옵션선택), 장바구니페이지**로 구성되어있습니다.

<br/>

## 5. 주요기능  
### 5-1. 라우팅을 이용한 페이지전환
![라우팅](https://github.com/Tae-Hyun98/FILA-project/assets/119056869/9e3d8707-4ff0-4f31-a822-5b18112b7896)

<img src="https://github.com/Tae-Hyun98/FILA-project/assets/119056869/9e3d8707-4ff0-4f31-a822-5b18112b7896" width=90%/>

#### 👇👇👇👇👇👇
<details>
 <summary>🔎 코드보기</summary>

 #### 검색창의 Input을 통해 입력된값을 DataSet에서 입력된값이 포함된 이름을 필터하고 필터된 값들을 JSON형식으로 변환을하여 setItem으로 값을 search페이지로 전달합니다.  
```javascript
searchBtn.addEventListener('click', () => {
  let word = goInput.value.toLowerCase();
    
  if (word !== '') {
    let result = subData.filter(item => item.name.includes(word));
    goInput.innerHTML = ''
    location.href = 'search.html'
    localStorage.setItem('result', JSON.stringify(result))
    localStorage.setItem('word', word)
  } else if (word === '') {
    console.log('error')
  }
})
```

#### getItem으로 전달된 값을 받으면서 JSON형태의 데이터를 객체형태로 변환하여 저장합니다. 전달된 값이 없거나 length가 0이면 검색결과가 없다고 표시하며, 있다면 상품들을 출력하는 함수인 paginationFunc()함수로 상품들을 출력합니다.  
```javascript
const localData = JSON.parse(localStorage.getItem('result'));
let words = localStorage.getItem('word')

if (localData === '' || localData.length === 0) {
  productList.innerHTML = `<h1>검색결과 해당하는 상품이 없습니다.</h1>`
} else {
  paginationFunc(localData)
}
```

</details>

<br/>

------------
