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
   - #### [동적라우팅](#5-2-상품-리뷰문의기능)
   - #### [장바구니 전역상태관리](#5-2-상품-리뷰문의기능)  
  ### 6. [느낀점](#6-느낀점-1)

<br/> 

## 1. 프로젝트 소개
- 베스킨라빈스를 참고하여 키오스크로 제작한 React 프로젝트입니다.

- 퍼블리싱 및 기능구현은 **개인 100%** 작업입니다.

- 제작된 프로젝트는 gh-pages라이브러리를 이용해 deploy한후 Github으로 배포를 하였습니다.

- 프로젝트는 리액트 18.2v으로 제작 및 전역 상태관리는 redux-toolkit을 사용하였습니다.

- 애니메이션 라이브러리는 framer motion을 사용하였고, CSS3와 Styled-Components를 사용하여 스타일을 입혔습니다.

- 주요기능으로는 **라우터를 이용한 페이지전환, 동적라우팅, redux-toolkit을 사용한 전역 상태관리, useState를 이용한 상태관리** 등이 있습니다.

- 재사용이 필요한 코드는 따로 컴포넌트로 분리하여 사용을 하였습니다.

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
  <a href="#!"><img src="https://img.shields.io/badge/FramerMotion-0055FF?style=flat&logo=framer&logoColor=white"/></a>
  
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

 #### 초기위치를 Main페이지로 지정하고 subpage와 detailpage는 중첩라우터를 구성하여 outlet을 이용해 경로에맞는 페이지를 렌더링하는 방식으로 구현하였으며, 잘못된 경로로 접속시 접근경로 오류페이지를 나타내도록 하였습니다.
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

#### Link를 이용하여 클릭시 해당 경로로 이동하도록 구현하였습니다.
```javascript
    <Link to='/subpage/icecream' />
    <Link to='/subpage/drink' />
    <Link to='/subpage/coffee' />
    <Link to='/subpage/beverage' />
    <Link to='/subpage/cake' />

    <Link to={`/detailpage/detailicecream/${index}`}>
    <Link to={`/detailpage/detaildrink/${index}`}>
    <Link to={`/detailpage/detailcoffee/${index}`}>
    <Link to={`/detailpage/detailbeverage/${index}`}>
    <Link to={`/detailpage/detailcake/${index}`}>
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

#### 동적 라우팅을 구성하기 위해 디테일페이지의 경로에 id를 추가하였습니다. 
```javascript
    <Route path='detailpage' element={<DetailPage/>}>
      <Route path='detailicecream/:id' element={<DetailIcecream icecreams={icecreams}/>}/>
      <Route path='detaildrink/:id' element={<DetailDrink drink={drink}/>}/>
      <Route path='detailcoffee/:id' element={<DetailCoffee coffees={coffees}/>}/>
      <Route path='detailcake/:id' element={<DetailCake cakes={cakes}/>}/>
      <Route path='detaildessert/:id' element={<DetailDessert desserts={desserts}/>}/>
    </Route>
```

 #### 서브페이지에서 나오는상품들은 map함수를 사용하여 화면에 렌더링시켰습니다. 각 상품박스에 key값을 부여하였고, 클릭시 디테일페이지로 넘어가는 링크경로의 id값을 상품의 index값으로 지정하여 클릭시 해당상품의 정보를 보여줄 수 있도록 구성하였습니다.
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



#### 디테일페이지에서는 상품의 데이터셋을 props로 받고, 서브페이지에서 클릭한 상품의 id를 useParams를 이용해 넘겨받아 id에 맞는 해당상품이 나오도록 구현하였습니다.
```javascript
  const {icecreams} = props;
  const {id} = useParams();

  <DetailContent className='detail_box'>
    <img src={process.env.PUBLIC_URL + '/assets/images/spoon.png'} alt='spoon'/>
    <h1>{icecreams[id].title}</h1>
    <p>{icecreams[id].desc}</p>
      
    <div className='imgs'>
      <img className='product_img' src={icecreams[id].image} alt='img'/>
    </div>
  </DetailContent>

```

</details>

<br/>

------------

### 5-3. 장바구니 전역상태관리 및 모달팝업
<img src="https://github.com/Tae-Hyun98/kiosk/assets/119056869/8f08b8a7-cd2b-4c1f-bd5e-3096d0774487" width=90%/>

#### 👇👇👇👇👇👇
<details>
 <summary>🔎 코드보기</summary>

#### 전역상태관리를 위해 먼저 cart컴포넌트를 만들어주었습니다. 해당 cart컴포넌트에서는 UI레이아웃을 잡고, 
```javascript
export default function Cart() {
  const state = useSelector((state)=>state)
  const dispatch = useDispatch();
  let total=0;
  let counter=0;
  state.cart.map((item)=>{
    return (
      total+=(item.price*item.count),
      counter+=item.count
    )
  })

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = ()=> setIsModalOpen(true)
  const closeModal = ()=> setIsModalOpen(false)
  const deleteCarts = ()=> {
    setIsModalOpen(false)
    dispatch(deleteAllItem(state.id))
    alert('전체 상품이 삭제되었습니다.')
  }

  if(state.cart.length===0){
    return(
    <>
      <Header/>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        exit={{opacity:0}}
      >
      <Container>
      <div className='cart_wrap'>
          <h1 style={{textAlign:'center',paddingTop:20}}>장바구니입니다.</h1>
          <div className='cart_pro'>
            <ul className='cart_tit'>
              <li>상품</li>
              <li>이름</li>
              <li>가격</li>
              <li>개수</li>
              <li>삭제</li>
            </ul>

            <h2 className='empty'>장바구니가 비어있습니다.</h2>
          </div>
      </div>
      </Container>
      </motion.div>
    </>
    )
  }


  return (
    <>
      <Header/>
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        exit={{opacity:0}}
      >

        <Container>
          <div className='cart_wrap'>
          <h1 style={{textAlign:'center', paddingTop:20}}>장바구니입니다.</h1>

          <div style={{textAlign:'right'}}>
            <DeleteAll onClick={openModal}>전체삭제</DeleteAll>
            <DeleteModal isOpen={isModalOpen} context={'전체상품을 삭제하시겠습니까?'} deleteCarts={deleteCarts} closeModal={closeModal} />
          </div>

          <div className='cart_pro'>
            <ul className='cart_tit'>
              <li>상품</li>
              <li>이름</li>
              <li>가격</li>
              <li>개수</li>
              <li>삭제</li>
            </ul>

          <ul className='cart_product'>
              
        {
          
          state.cart.map((item, i)=>{
            return (

              <li key={i}>
                <p className='image_box'>
                  <img src={item.image} alt='img'/>
                </p>
                <p className='option'>{item.title}<br/>
                <span>{item.option}</span><br/>
                <span>{item.option1}</span></p>
                <p>{(item.price*item.count).toLocaleString("KO-KR")}원</p>
                <div className='count_box'>
                  <Button onClick={()=>{
                    dispatch(miusCount({key:item.key, id:item.id, id1:item.id1}))
                  }}>-</Button>

                  <p>{item.count}</p>

                  <Button onClick={()=>{
                    dispatch(plusCount({key:item.key, id:item.id, id1:item.id1}))
                  }}>+</Button>
                </div>
                
                <p><Delete onClick={()=>dispatch(deleteItem({key:item.key, id:item.id, id1:item.id1}),alert('선택하신상품이 삭제되었습니다.'))}>삭제</Delete></p>
              </li>

            )
          })
        }
            </ul>
            </div>

            <div className='total'>
              <h3>총 수량 : {counter}개</h3>
              <h1>총 금액 : {total.toLocaleString()+'원'}</h1>
            </div>
          </div>

        </Container>
        </motion.div>
        
    </>
  )
}

```

 #### 디테일페이지에서 장바구니를 클릭하면 나오는 모달창입니다. 모달창은 삼항연산자를 사용하여 display가 true이면 block을 false면 none을 반환하도록 구성하였으며, 파라미터를 비구조화할당 문법을 사용하여 값들을 디테일페이지에서 값을 받아 작동하도록 구현하였습니다.
```javascript
  import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: 1;
`
const ModalBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 40%;
  padding: 60px 0;
  background-color: #fff;
  border: 2px solid #ccc;
`
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`

const ButtonBox = styled.div`
  padding-top: 30px;
`

const Button = styled.button`
  width: 150px;
  height: 50px;
  cursor: pointer;
  border: 1px solid #ccc;
  font-weight: bold;
  font-size: 20px;
  &:hover{
    background-color: blue;
    color: #fff;
  }
`

export default function Modal({isOpen,closeModal,addCarts}) {

  return (
    <ModalContainer style={{display:isOpen ? 'block':'none'}}>
      <ModalBox>
        <TextBox>
          <h2>장바구니에 추가하시겠습니까?</h2>

          <ButtonBox className='btn_box'>
            <Button onClick={addCarts}>확인</Button>
            <Button onClick={closeModal}>취소</Button>
          </ButtonBox>
        </TextBox>
      </ModalBox>
    </ModalContainer>
  )
}
```



#### 모달창은 처음에는 보이지않게 모달의 useState를 false로 상태를 정해놓고, 장바구니담기를 클릭시 모달의 state가 true로 변경되어 모달이 나타나며, 모달에서 확인클릭시 장바구니에 상품을 추가하는 addCars가 호출되며, 닫기클릭시 state가 false로되어 모달창이 닫히도록 구현하였습니다. 
```javascript
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = ()=> setIsModalOpen(true);
  const closeModal = ()=> setIsModalOpen(false);
  const addCarts = ()=> {
    setIsModalOpen(false)
    dispatch(addItem({
      key:icecreams[id].id ,id:options1[key1].id, id1:options2[key2].id, image:icecreams[id].image, title:icecreams[id].title,
      count:1, price:opprice, option:'옵션 : '+ name
  }))
  }

 <div className='cart'>
    <Button onClick={openModal}>장바구니 담기</Button>
    <Button>결재하기</Button>
 </div>

     <Modal isOpen={isModalOpen} addCarts={addCarts} closeModal={closeModal} />

```

</details>

<br/>

------------

## 6. 느낀점  
- 첫 리액트 프로젝트라 라우팅하는것과 재사용 컴포넌트를 추출하는것이 미흡하였지만, 이번 프로젝트를 통해 라우팅 경로설정과 재사용 컴포넌트를 추출하는 기초를 다졌습니다.

