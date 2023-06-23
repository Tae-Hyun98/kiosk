import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
`
export default function Header() {
  let navigate = useNavigate();
  
  return (
    <>
      <header className='header'>
        <Inner>
          <button className='back' onClick={() => {navigate(-1)}}>뒤로가기</button>
          <Link to='/' className='logo'><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt='img'/></Link>
          <Link to='/cart' className='cart'>장바구니⛱⛱☔</Link>
        </Inner>
      </header>
    </>
  )
}
