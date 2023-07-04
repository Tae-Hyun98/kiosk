import React from 'react';
import styled  from 'styled-components';

const DetailContent = styled.div`
  text-align: center;
`
const ProductImg = styled.img`
  width: 350px;
  margin-top: -10px;
  margin: 0 auto;
`
const DetailTitle = styled.h1`
  padding: 15px 0;
`

export default function DetailDesc({title, desc, image}) {
  return (
    <>
      <DetailContent className='detail_box'>
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/spoon.png'} alt='spoon'/>
      </div>

      <DetailTitle>{title}</DetailTitle>
      <p>{desc}</p>
      
      <div className='img'>
        <ProductImg  src={image} alt='img'/>
      </div>

    </DetailContent>
    </>
  )
}
