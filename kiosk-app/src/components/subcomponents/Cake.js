import React, { useState } from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import cake from '../../pages/CakeData';


const ProductList = styled(motion.div)`
  width: calc(25% - 11.3px);
  margin: 0 15px 20px 0px;
  border: 1px solid #ccc;
`
const Product = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  overflow: hidden;
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
                <h3 className='tit'>{cake.title}</h3>
                <p className='tag'>{cake.tag}</p>
                <p className='price'>{cake.price}원</p>
              </Link>
            </ProductList>
          )
        })
      }
      </Product>
    </>
  )
}
