import {configureStore, createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState:[],
  reducers:{
    addItem(state, action){ //상품추가 완료
      
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload.id&&findId.key===action.payload.key&&findId.id1===action.payload.id1
      }) //같은 id가 있을때 카운트
      //같은id option잇으면 카운트올림, 
      
      if(index>-1){
        state[index].count++
      }else{
        state.push(action.payload)
      }
   
    },

    deleteItem(state, action){
      const index = state.findIndex((findId)=>{
        return findId.key===action.payload.key&&findId.id===action.payload.id&&findId.id1===action.payload.id1
      })
      if(index>-1){
        state.splice(index, 1)
      }
    },

    deleteAllItem(){ //전체삭제 배열을 공백으로 초기화
      return []
    },

    plusCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.key===action.payload.key&&findId.id===action.payload.id&&findId.id1===action.payload.id1
      })
      
      if(index>-1){
        state[index].count++
      }
        
    },

    miusCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.key===action.payload.key&&findId.id===action.payload.id&&findId.id1===action.payload.id1
      })
     
       if(state[index].count > 1&&index>-1){
        state[index].count--
      }
    }
  }
})

export const {addItem, deleteItem, deleteAllItem, plusCount, miusCount} = cart.actions

export default configureStore({
  reducer:{
    cart:cart.reducer
  }
})