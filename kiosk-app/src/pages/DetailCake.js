import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled  from 'styled-components';
import { useDispatch } from 'react-redux';
import {motion} from 'framer-motion';
import { addItem, optionItem } from './store';
import './Detail.css';


const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid violet;
`

const DetailContent = styled.div`
  text-align: center;
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
  margin-right:10px;
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
  margin-right: 15px;
  &:hover{
    background-color: violet;
    color:#fff
  }
`

const OptionBox = styled.div`
  width: 100%;
  padding-bottom: 30px;
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
      initial={{opacity:0, y:200}} 
      animate={{opacity:1, y:0}}
      transition={{duration:0.5}}
      style={{padding:50}}
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
        <h2 style={{marginTop:30}}>SIZE</h2>

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
        <p>옵션 : {size}</p>
        <p>총금액 : {total.toLocaleString()}원</p>
    </div>

    <div className='cart'>
        <Button onClick={()=>{dispatch(addItem({
          id:cakes[id].id, image:cakes[id].image, title:cakes[id].title, count:1, price:total, option:'옵션 : '+size
        }))
        }}>장바구니 담기</Button>

        <Button>결재하기</Button>
    </div>
    </motion.div>
  )

  
}

