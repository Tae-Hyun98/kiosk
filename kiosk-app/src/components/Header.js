import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
`
const BackBtn = styled.button`
  position: absolute;
  left: 0;
  top: 15px;
  font-size: 0;
  width: 60px;
  height: 60px;
  cursor: pointer;
  background-color: #fff;
  background-size: 30px;
  background-position: 50% 50%;
  border: 1px solid #ccc;
  border-radius: 50%;
`

export default function Header() {
  let navigate = useNavigate();
  const state = useSelector((state)=>state)

  return (
    <>
      <header className='header'>
        <Inner>
          <BackBtn className='back' onClick={() => {navigate(-1)}}>뒤로가기</BackBtn>
          
          <Link to='/' className='logo'>
            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt='img'/>
          </Link>

          <Link to='/cart' className='cart'>
            <img src={process.env.PUBLIC_URL + '/assets/images/cart_img.png'} alt='img'/>
            <span className='cart_count'>{state.cart.length}</span>

          </Link>
        </Inner>
      </header>
    </>
  )
}
