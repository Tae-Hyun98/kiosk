import React from 'react'
import Header from '../components/Header'
import {Outlet} from 'react-router-dom';
import './Main/Main.css'

export default function SubPage() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}
