import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import './Detail.css';



export default function DetailIcecream(props) {

  const {icecreams} = props;
  const {id} = useParams();

  const items =[
    {id:'1', label:'싱글레귤러', sub:'중량 115g', price:3500},
    {id:'2', label:'싱글킹', sub:'중량 145g', price:4500},
    {id:'3', label:'더블주니어', sub:'중량 150g', price:5500},
    {id:'4', label:'더블레귤러', sub:'중량 230g', price:6700}
  ]

  let total=0;
  const [opprice, setPrice] = useState(items[0])
  const onChangeOp = (e) =>{setPrice(e.target.value)}
  const [sum, setSum]=useState(0)
  const onChangeSum=(e)=>{total+=setSum(e.target.value)}



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
        <div>

    {
    items.map((item,i) => {
      return(
        <div className='select' key={i}>
          <label>
          <input type='radio' id={item.id} name='sele' value={item.price} onChange={onChangeSum} checked={sum===total}/>
            <img src={process.env.PUBLIC_URL + '/assets/images/single.gif'} alt='icon'/>
          <div>
            <h3 className='option_tit'>{item.label}</h3>
            <p className='option_desc'>{item.sub}</p>
            <p className='option_price'>{item.price.toLocaleString()}원</p>
          </div>

          </label>

         {/*  <input type='radio' id='select2' name='sele' value='3800'/>
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
 */}
        </div>
      
    )})
  }
 </div>

  </div>
    </div>
    <div className='total'>
      총금액 : <span>{sum}</span>원
    </div>
   </>
  )

  
}

