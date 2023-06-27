import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled  from 'styled-components';
import { useDispatch } from 'react-redux';
import {motion} from 'framer-motion';
import { addItem, optionItem } from './store';
import './Detail.css';


const FlexBox = styled.div`
  display: flex;
  align-items: end;
  border-bottom: 3px solid violet;
`

const DetailContent = styled.div`
  position: relative;
  text-align: center;
  padding: 50px 50px 0 30px;
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
  padding: 15px 0;
  margin-top: 15px;
  margin-right:2px;
  padding-left:25px;
  &:last-child{
    margin-right:0px
    }
`

const Button = styled.button`
  color: black;
  background-color: #fff;
  font-weight: 700;
  display: inline-block;
  font-size: 20px;
  line-height: 60px;
  width: 200px;
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
  width: 60%;
  padding-bottom: 40px;
`


export default function DetailCake(props) {
  const {cakes} = props;
  const {id} = useParams();
  const dispatch = useDispatch();

  const items =[
    {id:'1', label:'Small', price:0},
    {id:'2', label:'Medium', price:3000},
    {id:'3', label:'Large', price:6000}
  ]


  let total=cakes[id].price
  const [opprice, setPrice] = useState(0)
  const [size, setSize] = useState(items[0].label)
 

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
  const onChangeSize = (size) =>{setSize(size)}
  const onCheckOp = (checked) => {
    if(checked){
    }
  }

  //클릭시색변경
  let [Active, setActive] = useState(items[0].label);



  // const onChangeSum=(e)=>{setSum(parseInt((e.target.value)))}
  
  total=total+opprice;



  return (
    <motion.div
      initial={{opacity:0, x:300}} 
      animate={{opacity:1, x:0}}
      transition={{duration:0.5}}
    >
    <FlexBox>
    <DetailContent className='detail_box'>
      <div>
        <img src={process.env.PUBLIC_URL + '/assets/images/spoon.png'} alt='spoon'/>
      </div>
      <h1>{cakes[id].title}</h1>
      <p>{cakes[id].desc}</p>
      
      <div className='img'>
        <img className='product_img' src={cakes[id].image} alt='img'/>
      </div>

      
    </DetailContent>

    <OptionBox className='option_box'>
      <div className='option1 option'>
        <h2>SIZE</h2>

        <Option className='select'>

    {
    items.map((item, i) => {
      return(
          <Label className={Active===item.label ? 'active' : ''} onClick={()=>{setActive(item.label)}} key={i}>
          <input type='radio' id={item.id} name='sele' value={item.price} onChange={(e)=>{onChangeSize(item.label); onChangeOp(e.target.value)}} defaultChecked={item[0]} checked={onCheckOp(item.checked)}/>

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

    </OptionBox>
    </FlexBox>
    <div className='total'>
      <h3>선택한 옵션 : <span>{size}</span><br/>
      총금액 : <span>{total.toLocaleString()}</span>원
      </h3>
    </div>

    <div className='cart'>
        <Button onClick={()=>{dispatch(addItem({
          id:cakes[id].id, image:cakes[id].image, title:cakes[id].title, count:1, price:total, option:'옵션 : '+size
        }))
        }}>장바구니 담기</Button>
      </div>
      </motion.div>
  )

  
}

