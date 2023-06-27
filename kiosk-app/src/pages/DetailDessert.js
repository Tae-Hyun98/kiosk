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
  justify-content: center;
  align-items: center;
  width: 200px;
  border: 3px solid #ccc;
  cursor: pointer;
  padding: 10px 0;
  margin-top: 15px;
  margin-right:2px;
  padding-left:30px;
  &:last-child{
    margin-right:0px
    }
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


export default function DetailCake(props) {
  const {desserts} = props;
  const {id} = useParams();
  const dispatch = useDispatch();

  const items =[
    {id:'1', label:'ICE', price:0},
    {id:'2', label:'HOT', price:0}
  ]

  const items1 =[
    {id:'1', label:'쇼트(Short)', price:0},
    {id:'2', label:'톨(Tall)', price:1500},
    {id:'3', label:'그란데(Grande)', price:2500},
    {id:'4', label:'벤티(Venti)', price:3500}
  ]

  let total=desserts[id].price
  const [opprice, setPrice] = useState(0)
  const [iceHot, seticeHot] = useState(items[0].label)
  const [size, setSize] = useState(items1[0].label)

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
  const onChangeIce = (iceHot) =>{seticeHot(iceHot)}
  const onChangeSize = (size) =>{setSize(size)}
  const onCheckOp = (checked) => {
    if(checked){
    }
  }

  //클릭시색변경
  let [Active, setActive] = useState(items[0].label);

  let [Active1, setActive1] = useState(items1[0].label);

  // const onChangeSum=(e)=>{setSum(parseInt((e.target.value)))}
  
  total=total+opprice;



  return (
    <>
    
    <DetailContent className='detail_box'>
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/spoon.png'} alt='spoon'/>
      </div>
      <h1>{desserts[id].title}</h1>
      <p>{desserts[id].desc}</p>
      
      <div className='img'>
        <img className='product_img' src={desserts[id].image} alt='img'/>
      </div>

      <div className='cart'>
        <Button onClick={()=>{dispatch(addItem({
          id:desserts[id].id, image:desserts[id].image, title:desserts[id].title, count:1, price:total, option:'옵션1 : '+iceHot, option1:'옵션2 : '+size
        }))
        }}>장바구니 담기</Button>
      </div>
    </DetailContent>

    <OptionBox className='option_box'>
      <div className='option1 option'>
        <h2>ICE & HOT</h2>

        <Option className='select'>

    {
    items.map((item, i) => {
      return(
          <Label className={Active===item.label ? 'active' : ''} onClick={()=>{setActive(item.label)}} key={i}>
          <input type='radio' id={item.id} name='sele' onChange={()=>{onChangeIce(item.label);}} defaultChecked={item[0]} checked={onCheckOp(item.checked)}/>

          <div>
            <h3 className='option_tit' style={{paddingBottom:10}}>{item.label}</h3>
            <p className='option_desc'>{item.sub}</p>
            <p className='option_price'>+{item.price.toLocaleString()}원</p>
          </div>

          </Label>
        
    )})
  }
    </Option>
  </div>

  <div className='option2 option'>
    <h2>SIZE</h2>

  <Option className='select2'>
  {
    items1.map((item,idx) => {
      return (
        //Acitve가 클릭한 item.label값이랑 같다면 active를 클래스추가
          <Label className={Active1===item.label ? 'active' : ''} onClick={()=>{setActive1(item.label)}} key={idx}>
          <input type='radio' id={item.id} name='sele1' value={item.price} onChange={(e)=>{onChangeOp(e.target.value); onChangeSize(item.label);}} checked={onCheckOp(item.checked)}/>

          <div>
            <h3 className='option_tit' style={{paddingBottom:10}}>{item.label}</h3>
            <p className='option_desc'>{item.sub}</p>
            <p className='option_price'>{item.price.toLocaleString()}원</p>
          </div>


          </Label>
      )
    })
  }
        </Option>
        </div>
    </OptionBox>

    <div className='total'>
      <h3>선택한 옵션 : <span>{iceHot}</span><br/>
       <span>{size}</span> <br/>
      총금액 : <span>{total.toLocaleString()}</span>원
      </h3>
    </div>
   </>
  )

  
}

