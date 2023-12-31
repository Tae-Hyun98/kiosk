import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled  from 'styled-components';
import { useDispatch } from 'react-redux';
import {motion} from 'framer-motion';
import { addItem} from './store';
import Modal from '../components/Modal';
import DetailDesc from '../components/DetailDesc';


const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid violet;
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

const OptionBox = styled.div`
  width: 100%;
  padding-bottom: 30px;
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

const TotalBox = styled.div`
  padding: 20px 20px 20px 0;
  p{
    font-weight: 700;
    font-size: 22px;
    padding-bottom: 5px;
    &:last-child{
      padding-bottom: 0;
    }
  }
`


export default function Drink(props) {
  const {drink} = props;
  const {id} = useParams();
  const dispatch = useDispatch();

  const items =[
    {id:1, label:'ICE', price:0},
    {id:2, label:'HOT', price:0}
  ]

  const items1 =[
    {id:3, label:'쇼트(Short)', price:0},
    {id:4, label:'톨(Tall)', price:1500},
    {id:5, label:'그란데(Grande)', price:2500},
    {id:6, label:'벤티(Venti)', price:3500}
  ]

  let total=drink[id].price
  const [opprice, setPrice] = useState(0)
  const [iceHot, seticeHot] = useState(items[0].label)
  const [size, setSize] = useState(items1[0].label)


  const [key1, setKey1 ] = useState(0) //초기 키값
  const [key2, setKey2 ] = useState(0) //초기 키값
  
  //선택된 value값 받는거
  const onChangeKey = (key) =>{setKey1(parseInt(key))} //선택된 라벨 키값 버튼에 넘겨주는거
  const onChangeKey1 = (key) =>{setKey2(parseInt(key))} //선택된 라벨 키값 버튼에 넘겨주는거

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = ()=> setIsModalOpen(true)
  const closeModal = ()=> setIsModalOpen(false)
  const addCarts = ()=> {
    setIsModalOpen(false)
    dispatch(addItem({
      key:drink[id].id, id:items[key1].id, id1:items1[key2].id, image:drink[id].image, title:drink[id].title, count:1, price:total, option:'옵션1 : '+iceHot, option1:'옵션2 : '+size
  }))
  }

  total=total+opprice;


  return (
    <motion.div
      initial={{opacity:0, y:300}} 
      animate={{opacity:1, y:0}}
      transition={{duration:0.5}}
      style={{padding:50}}
      >
    <FlexBox>
    
    <DetailDesc title={drink[id].title} desc={drink[id].desc} image={drink[id].image}/>

    <OptionBox className='option_box'>
      <div className='option1 option'>
        <h2>ICE & HOT</h2>

        <Option className='select'>

    {
    items.map((item, i) => {
      return(
          <Label className={Active===item.label ? 'active' : ''} onClick={()=>{setActive(item.label); onChangeKey(i)}} key={i}>
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
          <Label className={Active1===item.label ? 'active' : ''} onClick={()=>{setActive1(item.label); onChangeKey1(idx)}} key={idx}>
          <input type='radio' id={item.id} name='sele1' value={item.price} onChange={(e)=>{onChangeOp(e.target.value); onChangeSize(item.label);}} checked={onCheckOp(item.checked)}/>

          <div>
            <h3 className='option_tit' style={{paddingBottom:10}}>{item.label}</h3>
            <p className='option_desc'>{item.sub}</p>
            <p className='option_price'>+{item.price.toLocaleString()}원</p>
          </div>


          </Label>
      )
    })
  }
        </Option>
        </div>
      </OptionBox>
    </FlexBox>

      <TotalBox className='total'>
        <p>옵션1 : {iceHot}</p>
        <p>옵션2 : {size}</p>
        <p>총금액 : {total.toLocaleString()}원</p>
      </TotalBox>

      <div className='cart'>
        <Button onClick={openModal}>장바구니 담기</Button>

        <Button>결재하기</Button>
      </div>

      <Modal isOpen={isModalOpen} addCarts={addCarts} closeModal={closeModal} />

    </motion.div>
  )

  
}

