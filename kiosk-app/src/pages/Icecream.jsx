import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import icecream from './dataset/IcecreamData';
import {motion} from 'framer-motion';


const Product = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`

const ProductList = styled(motion.div)`
  width: calc(25% - 11.3px);
  margin: 0 15px 20px 0px;
  border: 1px solid #ccc;
  overflow: hidden;
  &:nth-child(4n){
    margin-right: 0;
  }
`

const ProductTitle = styled.h3`
  font-size: 22px;
  letter-spacing: -1.5px;
  padding: 20px 0 10px 0;
  text-align: center;
`

const ProductTag = styled.p`
  color: #9d9d9d;
  font-size: 14px;
  padding-bottom: 20px;
  text-align: center;
`

const ProductPrice = styled.p`
  font-size: 25px;
  color: violet;
  font-weight: 700;
  border-top: 1px solid #ccc;
  padding: 10px 0;
  text-align: center;
`


export default function Icecream() {
  const [icecreams] = useState(icecream);
  const list = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden:{opacity:0,y:100},
    visible:{opacity:1,y:0},
  }
  return (
    <>
    <Product variants={list} initial="hidden" animate="visible" exit={{opacity:0}}>
    {
      icecreams.map((icecream, index)=> {
        return(
          <ProductList key={index} className='product_box' variants={item}>
          <Link to={`/detailpage/detailicecream/${index}`}>
            <div className='img_box'>
              <img className={icecream.id} src={icecream.image} alt='product_img'/>
            </div>
            <ProductTitle>{icecream.title}</ProductTitle>
            <ProductTag>{icecream.tag}</ProductTag>
            <ProductPrice>{icecream.price}원</ProductPrice>
          </Link>
        </ProductList>
        )
      })
    }
    </Product>
    </>
  )
}
