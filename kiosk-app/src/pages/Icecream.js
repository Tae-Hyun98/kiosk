import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import data from './IcecreamData';

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
`


export default function Icecream() {
  const [icecreams] = useState(data);

  return (
    <>
      <Product>

    {
      icecreams.map((icecream, index)=> {
        return(
            <div key={index} className='product_box'>
              <Link to={`/subpage/detail/${index}`}>
                <div className='img_box'>
                  <img className={icecream.id} src={icecream.image} alt='product_img'/>
                </div>
                <h3 className='tit'>{icecream.title}</h3>
                <p className='tag'>{icecream.tag}</p>
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
