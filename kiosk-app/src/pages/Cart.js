import React, { useState } from 'react';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteItem, deleteAllItem, plusCount, miusCount } from './store';
import {motion} from 'framer-motion';
import DeleteModal from '../components/DeleteModal';
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

const Delete = styled.button`
  width: 100px;
  border: 1px solid #eee;
  background-color: #e6e6e6;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 0;
  transition: all 0.3s;
  &:hover{
    background-color: violet;
    color: #fff;
  }
`

const DeleteAll = styled.button`
  width:150px;
  line-height: 40px;
  background-color: #fff;
  font-size: 20px;
  font-weight: 700;
  border:1px solid #000;
  transition: all.3s;
  &:hover{
    background-color: pink;
  }
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
