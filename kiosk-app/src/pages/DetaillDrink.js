import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.css';

const DetailContent = styled.div`
  position: relative;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid violet;
`

export default function Detail(props) {

  const {icecreams} = props;
  const {id} = useParams();

  return (
    <>
    <DetailContent className='detail_box'>
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/spoon.png'} alt='spoon'/>
      </div>
      <h1>{icecreams[id].title}</h1>
      <p>{icecreams[id].desc}</p>
      
      <div className='img'>
        <img className='product_img' src={icecreams[id].image} alt='img'/>
      </div>

      <div className='cart'>
        <a href='#!'>찜하기</a>
      </div>
    </DetailContent>
   </>
  )
}
