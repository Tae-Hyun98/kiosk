import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import Pagination from 'swiper';
import 'swiper/css';
import './common.css';


const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`


export default function SubPage() {
  return (
    <>
      <Header/>
          <Container>
            <Nav/>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
            >
              <SwiperSlide>
                <Outlet/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Outlet/>
              </SwiperSlide>
            </Swiper>
          </Container>
  
    </>
  )
}
