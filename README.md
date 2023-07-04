# 키오스크 프로젝트 (개인프로젝트)
>  베스킨라빈스를 참고하여 키오스크로 제작한 React 프로젝트입니다.

<img width="1299" alt="baskin kiosk" src="https://github.com/Tae-Hyun98/kiosk/assets/119056869/a318784b-0579-49e6-a8f2-9c320b7de031">

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

- 주요기능으로는 **라우터를 이용한 페이지전환, 동적라우팅 ,redux-toolkit 전역 상태관리, useState를 이용한 상태관리** 등이 있습니다.
  
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
<img src="https://github.com/Tae-Hyun98/kiosk/assets/119056869/81459187-d27b-427b-b6dd-e933fd144789" width=90%/>

#### 👇👇👇👇👇👇
<details>
 <summary>🔎 코드보기</summary>

 #### 초기위치를 Main페이지로 지정하고 subpage와 detailpage는 중첩라우터를 구성하여 outlet을 이용해 경로에맞는 페이지를 랜더링하는 방식으로 구성하였습니다.
```javascript
<Routes>
  {/* 접근경로오류페이지 */}
  <Route path="*" element={<NotFound404 />}/> 
          
  <Route path='/' element={<Main/>}/>

  <Route path='subpage' element={<SubPage/>}>
    <Route path='icecream' element={<Icecream/>}/>
    <Route path='coffee' element={<Coffee/>}/>
    <Route path='drink' element={<Drink/>}/>
    <Route path='cake' element={<Cake/>}/>
    <Route path='dessert' element={<Dessert/>}/>
  </Route>
        
  <Route path='detailpage' element={<DetailPage/>}>
    <Route path='detailicecream/:id' element={<DetailIcecream icecreams={icecreams}/>}/>
    <Route path='detaildrink/:id' element={<DetailDrink drink={drink}/>}/>
    <Route path='detailcoffee/:id' element={<DetailCoffee coffees={coffees}/>}/>
    <Route path='detailcake/:id' element={<DetailCake cakes={cakes}/>}/>
    <Route path='detaildessert/:id' element={<DetailDessert desserts={desserts}/>}/>
  </Route>

  <Route path='cart' element={<CartPage/>}/>

</Routes>
```

#### Link를 이용하여 클릭시 해당 경로로 이동하도록 구성하였습니다.
```javascript
    <Link to='/subpage/icecream' />
    <Link to='/subpage/drink' />
    <Link to='/subpage/coffee' />
    <Link to='/subpage/beverage' />
    <Link to='/subpage/cake' />
```

#### 뒤로가기 버튼의 경우 useNavigate를 사용하여 버튼클릭시 히스토리를 지우지않고 전 페이지로 이동하도록 구현하였습니다.
```javascript
    <BackBtn className='back' onClick={() => {navigate(-1)} }>뒤로가기</BackBtn>
```

</details>

<br/>

------------

### 5-2. 동적라우팅
<img src="https://github.com/Tae-Hyun98/kiosk/assets/119056869/5881e71f-854e-493f-9704-d3d48750061a" width=90%/>

#### 👇👇👇👇👇👇
<details>
 <summary>🔎 코드보기</summary>

#### 동적 라우팅을 구성하기 위해 디테일페이지의 경로에 id값을 추가하였습니다. 
```javascript
    <Route path='detailpage' element={<DetailPage/>}>
      <Route path='detailicecream/:id' element={<DetailIcecream icecreams={icecreams}/>}/>
      <Route path='detaildrink/:id' element={<DetailDrink drink={drink}/>}/>
      <Route path='detailcoffee/:id' element={<DetailCoffee coffees={coffees}/>}/>
      <Route path='detailcake/:id' element={<DetailCake cakes={cakes}/>}/>
      <Route path='detaildessert/:id' element={<DetailDessert desserts={desserts}/>}/>
    </Route>
```

 #### 서브페이지에서 나오는상품들은 map함수를 사용하여 화면에 랜더링시켰습니다. 각 상품박스에 key값을 부여하였고, 클릭시 디테일페이지로 넘어가는 링크경로의 id값을 상품의 index값으로 지정하여 클릭시 해당상품의 정보를 보여줄 수 있도록 구성하였습니다.
```javascript
  icecreams.map((icecream, index)=> {
        return(
          <ProductList key={index} className='product_box' variants={item}>
          <Link to={`/detailpage/detailicecream/${index}`}>
            <div className='img_box'>
              <img className={icecream.id} src={icecream.image} alt='product_img'/>
            </div>
            <ProductTitle>{icecream.title}</ProductTitle>
            <ProductTag>{icecream.tag}</ProductTag>
            <ProductPrice>{icecream.price}원</ProductPrice>
          </Link>
        </ProductList>
        )
      })
```



#### 뒤로가기 버튼의 경우 useNavigate를 사용하여 버튼클릭시 히스토리를 지우지않고 전 페이지로 이동하도록 구현하였습니다.
```javascript
    <BackBtn className='back' onClick={() => {navigate(-1)} }>뒤로가기</BackBtn>
```

</details>

<br/>

------------

## 6. 느낀점  
- React에서 중요한기능인 page라우팅의 기능의 경로를 확실히 알게되었으며,  

