import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import Content from './Content';

export default function Main() {
  return (
    <>
      <header className='header'>
        <Link to='/' className='logo'><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt='img'/></Link>
      </header>
      <Content/>
    </>
  )
}
