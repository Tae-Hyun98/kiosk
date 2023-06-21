import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'


export default function Header() {
  return (
    <>
      <header className='header'>
        <Link to='/'><img src={process.env.PUBLIC_URL + './assets/images/logo.png'} alt='img'/></Link>
      </header>
    </>
  )
}
