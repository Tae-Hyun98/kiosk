import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';

const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
`
export default function Header() {
  let navigate = useNavigate();
  const state = useSelector((state)=>state)

  return (
    <>
      <motion.header className='header'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.8}}
      >
        <Inner>
          <button className='back' onClick={() => {navigate(-1)}}>뒤로가기</button>
          <Link to='/' className='logo'>
            <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt='img'/>
          </Link>

          <Link to='/cart' className='cart'>
            <img src={process.env.PUBLIC_URL + '/assets/images/cart_img.png'} alt='img'/>
            <span className='cart_count'>{state.cart.length}</span>

          </Link>
        </Inner>
      </motion.header>
    </>
  )
}
