import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';



export default function Detail(props) {

  const {icecreams} = props;
  const {id} = useParams();

  const check = document.querySelectorAll('.select input');
    check.forEach((item,idx)=>{
      item.addEventListener('click',()=>{
        if(item.checked){
          let a = parseInt(check[idx].value)
          console.log(a)
          return a
        }
      })
      
    })
   
  return (
    <>
    <div className='detail_box'>
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/spoon.png'} alt='spoon'/>
      </div>
      <h1>{icecreams[id].title}</h1>
      <p>{icecreams[id].desc}</p>
      
      <div className='imgs'>
        <img className='product_img' src={icecreams[id].image} alt='img'/>
      </div>

      <div className='cart'>
        <a href='#!'>장바구니</a>
      </div>
    </div>

    <div className='option_box'>
      <div className='option1'>
        <h2>CONE & CUP</h2>
        <div className='select'>
          <input type='radio' id='select1' name='sele' value='3500'/>
          <label htmlFor='select1'>
            <img src={process.env.PUBLIC_URL + '/assets/images/single.gif'} alt='icon'/>

          <div>
            <h3 className='option_tit'>싱글레귤러</h3>
            <p className='option_desc'>중량 115g</p>
            <p className='option_price'>{icecreams[id].price}원</p>
          </div>

          </label>

          <input type='radio' id='select2' name='sele' value='3800'/>
          <label htmlFor='select2'>
            <img src={process.env.PUBLIC_URL + '/assets/images/singleking.gif'} alt='icon'/>

            <div>
            <h3 className='option_tit'>싱글킹</h3>
            <p className='option_desc'>중량 145g</p>
            <p className='option_price'>{icecreams[id].price}원</p>
            </div>
          </label>

          <input type='radio' name='sele' id='select3' value='4800'/>
          <label htmlFor='select3'>
            <img src={process.env.PUBLIC_URL + '/assets/images/doubleju.gif'} alt='icon'/>
            <div>
            <h3 className='option_tit'>더블주니어</h3>
            <p className='option_desc'>중량 150g</p>
            <p className='option_price'>{icecreams[id].price}원</p>
            </div>
          </label>

          <input type='radio' name='sele' id='select4' value='5000'></input>
          <label htmlFor='select4'>
            <img src={process.env.PUBLIC_URL + '/assets/images/doublere.gif'} alt='icon'/>
            <div>
            <h3 className='option_tit'>더블레귤러</h3>
            <p className='option_desc'>중량 230g</p>
            <p className='option_price'>6,700원</p>
            </div>
          </label>

        </div>
      </div>
    </div>

    <div className='total'>
      총금액 : <span></span>원
    </div>
   </>
  )

  
}

