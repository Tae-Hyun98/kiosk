import React from 'react'

export default function Modal({isOpen,closeModal,addCarts}) {
  return (
    <div style={{display:isOpen ? 'block':'none'}}>
      장바구니에 담으시겠습니까?

      <button onClick={addCarts}>확인</button>
      <button onClick={closeModal}>취소</button>
    </div>
  )
}
