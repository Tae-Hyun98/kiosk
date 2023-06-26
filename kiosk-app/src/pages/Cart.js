import React from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteItem, plusCount, miusCount } from './store';
import './Cart.css';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #777;
  font-size: 20px;
  cursor: pointer;
`

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


  return (
    <>
      <Header/>
        <Container>
          <div className='cart_wrap'>
          <h1 style={{textAlign:'center'}}>장바구니입니다.</h1>
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
                <p style={{fontWeight:'bold'}}>{item.title}<br/>
                <span>옵션 : {item.option}</span></p>
                <p>{(item.price*item.count).toLocaleString()}원</p>
                <div className='count_box'>
                  <Button onClick={()=>{
                    dispatch(miusCount(item.id))
                  }}>-</Button>
                  <p>{item.count}</p>
                  <Button onClick={()=>{
                    dispatch(plusCount(item.id))
                  }}>+</Button>
                </div>
                <p><Button style={{width:100,backgroundColor:'red'}} onClick={()=>dispatch(deleteItem(item.id))}>삭제</Button></p>

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
        
      
    </>
  )
}
