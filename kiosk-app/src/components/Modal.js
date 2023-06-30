import React from 'react';
import styled from 'styled-components';

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  z-index: 1;
`

const Button = styled.button`

`

export default function Modal({isOpen,closeModal,addCarts}) {

  return (
    <ModalBox style={{display:isOpen ? 'block':'none'}}>
      <h2>장바구니에 담으시겠습니까?</h2>

      <button onClick={addCarts}>확인</button>
      <button onClick={closeModal}>취소</button>
    </ModalBox>
  )
}
