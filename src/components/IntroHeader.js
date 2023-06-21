import React from 'react'
import {Link} from 'react-router-dom'

export default function IntroHeader() {
  return (
    <>
      <header className='header'>
      <Link to='/'><img src={process.env.PUBLIC_URL + './assets/images/logo.png'} alt='img'/></Link>
      </header>
    </>
  )
}
