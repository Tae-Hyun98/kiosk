import React, { useState } from 'react';
import coffees from '../../pages/CoffeeData';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';


const ProductList = styled(motion.div)`
  width: calc(25% - 11.3px);
  margin: 0 15px 20px 0px;
  border: 1px solid #ccc;
`
const Product = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  overflow: hidden;
`

export default function Coffee() {
  const [coffee] = useState(coffees);

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
        coffee.map((coffee, index) => {
          return (
            <ProductList key={index} className='product_box' variants={item}>
              <Link to={`/detailpage/detailcoffee/${index}`}>
              <div className='img'>
                <img className={coffee.id} src={coffee.image} alt='product_img'/>
                </div>
                <h3 className='tit'>{coffee.title}</h3>
                <p className='tag'>{coffee.tag}</p>
                <p className='price'>{coffee.price}원</p>
              </Link>
            </ProductList>
          )
        })
      }
      </Product>
    </>
  )
}
