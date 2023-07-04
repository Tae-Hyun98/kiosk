import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  z-index: 1;
`
const ModalBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 40%;
  padding: 60px 0;
  background-color: #fff;
  border: 2px solid #ccc;
`
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`

const ButtonBox = styled.div`
  padding-top: 30px;
`

const Button = styled.button`
  width: 150px;
  height: 50px;
  cursor: pointer;
  border: 1px solid #ccc;
  font-weight: bold;
  font-size: 20px;
  margin-right: 20px;
  &:hover{
    background-color: blue;
    color: #fff;
  }
  &:last-child{
    margin-right: 0;
  }
`

export default function Modal({isOpen,closeModal,addCarts}) {

  return (
    <ModalContainer style={{display:isOpen ? 'block':'none'}}>
      <ModalBox>
        <TextBox>
          <h2>장바구니에 추가하시겠습니까?</h2>

          <ButtonBox className='btn_box'>
            <Button onClick={addCarts}>확인</Button>
            <Button onClick={closeModal}>취소</Button>
          </ButtonBox>
        </TextBox>
      </ModalBox>
    </ModalContainer>
  )
}
