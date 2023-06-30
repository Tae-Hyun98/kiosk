import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  z-index: 1;
`
const ModalBox = styled.div`
  position: relative;
  width: 50%;
  height: 300px;
  transform: translate(50%,50%);
  background-color: #fff;
  border: 2px solid #ccc;
`
const TextBox = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`
const Button = styled.button`
  width: 150px;
  height: 50px;
  cursor: pointer;
  border: 1px solid #ccc;

`

export default function Modal({isOpen,closeModal,addCarts}) {

  return (
    <ModalContainer style={{display:isOpen ? 'block':'none'}}>
      <ModalBox>
        <TextBox>
          <h2>장바구니에 담으시겠습니까?</h2>
          <div className='btn_box'>
            <Button onClick={addCarts}>확인</Button>
            <Button onClick={closeModal}>취소</Button>
          </div>
        </TextBox>
      </ModalBox>
    </ModalContainer>
  )
}
