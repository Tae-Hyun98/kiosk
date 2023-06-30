import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import '../styles/Sub.css';


const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`

export default function SubPage() {
  return (
    <>
      <Header/>
          <Container >
            <Nav/>
            <Outlet/>
          </Container>
  
    </>
  )
}
