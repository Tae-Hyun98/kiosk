import {configureStore, createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState:[],
  reducers:{
    addItem(state, action){
      const index = state.find((findId)=>{
        return findId.id===action.payload.id&&findId.option===action.payload.option
      }) //같은 id가 있을때 카운트
      const opindex = state.findIndex((findId)=>{
        return findId.option===action.payload.option
      }) //같은 옵션값이있을때 카운트
      const opindex1 = state.findIndex((findId)=>{
        return findId.option1===action.payload.option1
      })

      console.log(index)
      //같은id option잇으면 카운트올림, 
      if(index >-1&&opindex>-1&&opindex1>-1){
        state[index].count++
      }
      else{
        state.push(action.payload)
      }
      
    },

    deleteItem(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload
      })
      const opindex = state.findIndex((findId)=>{
        return findId.option===action.payload
      })
        state.splice(opindex, 1)
    },

    deleteAllItem(){ //전체삭제 배열을 공백으로 초기화
      return []
    },

    plusCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload
      })
      const opindex = state.findIndex((findId)=>{
        return findId.option===action.payload
      })
          state[opindex].count++
    },

    miusCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload
      })
      const opindex = state.findIndex((findId)=>{
        return findId.option===action.payload
      })
      if(state[opindex].count > 1){
      state[opindex].count--
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