import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Header from '../components/Header';
import './Detail.css';



export default function DetailPage() {



  return (
    <>
    <Header/>
    <Outlet/>
   </>
  )

  
}

