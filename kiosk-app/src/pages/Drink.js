import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {drink} from './ProductData';
import './common.css'


const Button = styled.button`
  width: 50%;
  height: 50px;
  background-color: #eee;
  border: 1px solid #ccc;
  transition: all.3s;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  &:hover{
    background-color:violet;
    color: #fff;
  }
`
const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
`


export default function Drink() {
  const [drinks] = useState(drink);

  return (
    <>
       <Product>

{
  drinks.map((drink, index)=> {
    return(
        <div key={index} className='product_box'>
          <Link to={`/subpage/detaildrink/${index}`}>
            <div>
              <img className={drink.id} src={drink.image} alt='product_img'/>
            </div>
            <h3 className='tit'>{drink.title}</h3>
            <p className='tag'>{drink.tag}</p>
          </Link>

          <Button>찜하기</Button>
          <Button>구매하기</Button>
        </div>
    )
  })
}
    </Product>
    </>
  )
}
