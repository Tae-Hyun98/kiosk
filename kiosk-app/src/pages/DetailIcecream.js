import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled  from 'styled-components';
import { useDispatch } from 'react-redux';
import {motion} from 'framer-motion';
import { addItem, optionItem } from './store';
import './Detail.css';


const DetailContent = styled.div`
  position: relative;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid violet;
`

const Option = styled.div`
  display: flex;
  justify-content: center;
`

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  border: 3px solid #ccc;
  cursor: pointer;
  padding: 10px 0;
  margin-top: 15px;
  margin-right:2px;
  &:last-child{margin-right:0px}
`

const Button = styled.button`
  color: black;
  background-color: #fff;
  font-weight: 700;
  display: inline-block;
  font-size: 18px;
  line-height: 50px;
  width: 178px;
  height: 50px;
  border-radius: 30px;
  border: 2px solid violet;
  transition: all 0.3s;
  cursor: pointer;
  &:hover{
    background-color: violet;
    color:#fff
  }
`

const OptionBox = styled.div`
  border-bottom: 3px solid violet;
  padding-bottom: 30px;
`



export default function DetailIcecream(props) {
  const {icecreams} = props;
  const {id} = useParams();
  const dispatch = useDispatch();

  const items =[
    {id:'1', label:'싱글레귤러', image: process.env.PUBLIC_URL + '/assets/images/single.gif', sub:'중량 115g', price:3500},
    {id:'2', label:'싱글킹', image: process.env.PUBLIC_URL + '/assets/images/singleking.gif', sub:'중량 145g', price:4500},
    {id:'3', label:'더블주니어', image: process.env.PUBLIC_URL + '/assets/images/doubleju.gif', sub:'중량 150g', price:5500},
    {id:'4', label:'더블레귤러', image: process.env.PUBLIC_URL + '/assets/images/doublere.gif', sub:'중량 230g', price:6700}
  ]

  const items1 =[
    {id:'1', label:'파인트', image: process.env.PUBLIC_URL + '/assets/images/pint.gif', sub:'중량 320g', price:8900},
    {id:'2', label:'쿼터', image: process.env.PUBLIC_URL + '/assets/images/quarter.gif', sub:'중량 620g', price:17000},
    {id:'3', label:'패밀리', image: process.env.PUBLIC_URL + '/assets/images/family.gif', sub:'중량 960g', price:24000},
    {id:'4', label:'하프갤런', image: process.env.PUBLIC_URL + '/assets/images/half.gif', sub:'중량 1200g', price:29000}
  ]

  const [opprice, setPrice] = useState(items[0].price)
  const [name, setName] = useState(items[0].label)

  /* const {name, price} = opprice

  const onChanges=(e,val)=>{
    const {value}=e.target;
    console.log(value)

    setPrice({
      ...opprice,
      [price]:value

    })
  
  } */
  // const [sum, setSum] = useState(8900)

  //선택된 value값 받는거
  const onChangeOp = (price) =>{setPrice(parseInt(price))}
  const onChangeNa = (names) =>{setName(names)}
  const onCheckOp = (checked) => {
    if(checked){
    }
  }

  //클릭시색변경
  let [Active, setActive] = useState(items[0].label);

  // const onChangeSum=(e)=>{setSum(parseInt((e.target.value)))}
  
  // let total=opprice;

 /*  inp.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
      if(inp[idx].checked){
        la[idx].style.borderColor='violet'
      }else{
        la.style.borderColor='#fff'
      }
    })
  }) */
  

  return (
    <>
    
    <DetailContent className='detail_box'>
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/spoon.png'} alt='spoon'/>
      </div>
      <h1>{icecreams[id].title}</h1>
      <p>{icecreams[id].desc}</p>
      
      <div className='imgs'>
        <img className='product_img' src={icecreams[id].image} alt='img'/>
      </div>

      <div className='cart'>
        <Button onClick={()=>{dispatch(addItem({
          id:icecreams[id].id, image:icecreams[id].image, title:icecreams[id].title, count:1, price:opprice, option:name
        }))
        }}>장바구니 담기</Button>
      </div>
    </DetailContent>

    <OptionBox className='option_box'>
      <div className='option1 option'>
        <h2>CONE & CUP</h2>

        <Option className='select'>

    {
    items.map((item, i) => {
      return(
          <Label className={Active===item.label ? 'active' : ''} onClick={()=>{setActive(item.label)}} key={i}>
          <input type='radio' id={item.id} name='sele' value={item.price} onChange={(e)=>{onChangeOp(e.target.value); onChangeNa(item.label);}} defaultChecked={item[0]} checked={onCheckOp(item.checked)}/>
            <img src={item.image} alt='icon'/>
          <div>
            <h3 className='option_tit'>{item.label}</h3>
            <p className='option_desc'>{item.sub}</p>
            <p className='option_price'>{item.price.toLocaleString()}원</p>
          </div>

          </Label>
        
    )})
  }
    </Option>
  </div>

  <div className='option2 option'>
    <h2>HAND PACK</h2>

  <Option className='select2'>
  {
    items1.map((item,idx) => {
      return (
        //Acitve가 클릭한 item.label값이랑 같다면 active를 클래스추가
          <Label className={Active===item.label ? 'active' : ''} onClick={()=>{setActive(item.label)}} key={idx}>
          <input type='radio' id={item.id} name='sele' value={item.price} onChange={(e)=>{onChangeOp(e.target.value); onChangeNa(item.label);}} checked={onCheckOp(item.checked)}/>
            <img src={item.image} alt='icon'/>

          <div>
            <h3 className='option_tit'>{item.label}</h3>
            <p className='option_desc'>{item.sub}</p>
            <p className='option_price'>{item.price.toLocaleString()}원</p>
          </div>

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
          </Label>
      )
    })
  }
        </Option>
        </div>
    </OptionBox>

    <div className='total'>
      <h3>선택한 옵션 : <span>{name}</span> <br/>
      총금액 : <span>{opprice.toLocaleString()}</span>원
      </h3>
    </div>
   </>
  )

  
}

