import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import icecream from '../../pages/IcecreamData';
import {motion} from 'framer-motion';

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

export default function Icecream() {
  const [icecreams] = useState(icecream);
  // const dispatch = useDispatch();
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
      icecreams.map((icecream, index)=> {
        return(
            <ProductList key={index} className='product_box'
              variants={item}
            >
              <Link to={`/detailpage/detailicecream/${index}`}>
                <div className='img_box'>
                  <img className={icecream.id} src={icecream.image} alt='product_img'/>
                </div>
                <h3 className='tit'>{icecream.title}</h3>
                <p className='tag'>{icecream.tag}</p>
                <p className='price'>{icecream.price}원</p>
              </Link>

              {/* <Button onClick={()=>{dispatch(addItem({id:icecream.id, image:icecream.image, title:icecream.title, count:1, option:'',price:icecream.price}))}}>찜하기</Button>
              
              <Button>구매하기</Button> */}
            </ProductList>
        )
      })
    }
    </Product>
    </>
  )
}
