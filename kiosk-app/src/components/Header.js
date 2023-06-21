import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
`
export default function Header() {
  return (
    <>
      <header className='header'>
        <Inner>
          <Link to='/' className='back'>뒤로가기</Link>
          <Link to='/' className='logo'><img src={process.env.PUBLIC_URL + './assets/images/logo.png'} alt='img'/></Link>
        </Inner>
      </header>

      <nav>
        <ul>
          <li><Link to='/icecream'>아이스크림</Link></li>
          <li><Link to='/drink'>음료</Link></li>
          <li><Link to='/coffee'>커피</Link></li>
          <li><Link to='/cake'>케이크</Link></li>
          <li><Link to='/dessert'>디저트</Link></li>
        </ul>
      </nav>
    </>
  )
}
