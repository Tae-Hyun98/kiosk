import React, { useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import cake from './dataset/CakeData';


const ProductList = styled(motion.div)`
  width: calc(25% - 11.3px);
  margin: 0 15px 20px 0px;
  border: 1px solid #ccc;
  &:nth-child(4n){
    margin-right: 0;
  }
`
const Product = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  overflow: hidden;
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

export default function Cake() {
  const [cakes] = useState(cake);

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
    visible:{opacity:1,y:0}
  }

  return (
    <>
      <Product variants={list} initial="hidden" animate="visible">
      {
        cakes.map((cake, index) => {
          return (
            <ProductList key={index} className='product_box' variants={item}>
              <Link to={`/detailpage/detailcake/${index}`}>
                <div className='img'>
                  <img className={cake.id} src={cake.image} alt='product_img'/>
                </div>
                <ProductTitle>{cake.title}</ProductTitle>
                <ProductTag>{cake.tag}</ProductTag>
                <ProductPrice>{cake.price}원</ProductPrice>
              </Link>
            </ProductList>
          )
        })
      }
      </Product>
    </>
  )
}
