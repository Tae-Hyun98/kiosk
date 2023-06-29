import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled  from 'styled-components';
import { useDispatch } from 'react-redux';
import {motion} from 'framer-motion';
import { addItem} from './store';
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 210px;
  border: 3px solid #ccc;
  cursor: pointer;
  padding: 10px 0;
  margin-top: 15px;
  margin-right:10px;
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
  &:last-child{
    margin-right: 0;
  }
`

const OptionBox = styled.div`
  width: 100%;
  padding-bottom: 30px;
`



export default function DetailIcecream(props) {
  const {icecreams} = props;
  const {id} = useParams();
  const dispatch = useDispatch();

  const items =[
    {id:0, label:'싱글레귤러', image: process.env.PUBLIC_URL + '/assets/images/single.gif', sub:'중량 115g', price:3500},
    {id:1, label:'싱글킹', image: process.env.PUBLIC_URL + '/assets/images/singleking.gif', sub:'중량 145g', price:4500},
    {id:2, label:'더블주니어', image: process.env.PUBLIC_URL + '/assets/images/doubleju.gif', sub:'중량 150g', price:5500},
    {id:4, label:'더블레귤러', image: process.env.PUBLIC_URL + '/assets/images/doublere.gif', sub:'중량 230g', price:6700},
    {id:5, label:'파인트', image: process.env.PUBLIC_URL + '/assets/images/pint.gif', sub:'중량 320g', price:8900},
    {id:6, label:'쿼터', image: process.env.PUBLIC_URL + '/assets/images/quarter.gif', sub:'중량 620g', price:17000},
    {id:7, label:'패밀리', image: process.env.PUBLIC_URL + '/assets/images/family.gif', sub:'중량 960g', price:24000},
    {id:8, label:'하프갤런', image: process.env.PUBLIC_URL + '/assets/images/half.gif', sub:'중량 1200g', price:29000}
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
  const [key1, setKey1 ] = useState(0) //초기 키값
  // const [sum, setSum] = useState(8900)
  //선택된 value값 받는거
  const onChangeOp = (price) =>{setPrice(parseInt(price))}
  const onChangeKey = (key) =>{setKey1(parseInt(key))} //선택된 라벨 키값 버튼에 넘겨주는거
  const onChangeNa = (names) =>{setName(names)}
  const onCheckOp = (checked) => {
    if(checked){
    }
  }

  //클릭시색변경
  let [Active, setActive] = useState(items[0].label);

  // const onChangeSum=(e)=>{setSum(parseInt((e.target.value)))}
  
  // let total=opprice;
  const onConfirm= ()=>{
    if(window.confirm('장바구니에 담으시겠습니까?')===true){
      alert('장바구니에 담겼습니다.')
      dispatch(addItem({
        key:icecreams[id].id ,id:items[key1].id, image:icecreams[id].image, title:icecreams[id].title, count:1, price:opprice, option:name
    }))
    }else{
      alert('취소되었습니다.')
    }
  }
  


  return (
    <motion.div
      initial={{opacity:0, y:100}} 
      animate={{opacity:1, y:0}}
      transition={{duration:0.5}}
      style={{padding:50, position:'relative'}}
    >
    <FlexBox>
    <DetailContent className='detail_box'>
      <img src={process.env.PUBLIC_URL + '/assets/images/spoon.png'} alt='spoon'/>
      <h1>{icecreams[id].title}</h1>
      <p>{icecreams[id].desc}</p>
      
      <div className='imgs'>
        <img className='product_img' src={icecreams[id].image} alt='img'/>
      </div>
    </DetailContent>

    <OptionBox className='option_box'>
      <div className='option1 option'>
        <h2>--- 옵션선택 ---</h2>

        <Option className='select'>

    {
    items.map((item, i) => {
      return(
        <>
          <Label className={Active===item.label ? 'active' : ''} onClick={()=>{setActive(item.label); onChangeKey(i)}} key={i}>
          <input type='radio' id={i} name='sele' value={item.price} onChange={(e)=>{onChangeOp(e.target.value); onChangeNa(item.label);}}  checked={onCheckOp(item.checked)}/>
            <img src={item.image} alt='icon'/>
          <div>
            <h3 className='option_tit'>{item.label}</h3>
            <p className='option_desc'>{item.sub}</p>
            <p className='option_price'>{item.price.toLocaleString()}원</p>
          </div>

          </Label>

          
      </>

    )})
  }
    </Option>
  </div>

  {/* <div className='option2 option'>
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

          </Label>
      )
    })
  }
        </Option>
        </div> */}
    </OptionBox>
    </FlexBox>

    <div className='total'>
        <p>선택한 옵션 : {name}</p>
        <p>총금액 : {opprice.toLocaleString()}원</p>
    </div>

    <div className='cart'>
          <Button onClick={()=>{
          onConfirm()}}>장바구니 담기</Button>

         <Button>결재하기</Button>
     </div>
   
      </motion.div>
  )

  
}

