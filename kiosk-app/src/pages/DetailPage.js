import React from 'react';
import { Outlet} from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';
import './Detail.css';

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`

export default function DetailPage() {



  return (
    <>
    <Header/>
      <Container>
        <Outlet/>
      </Container>
   </>
  )

  
}

