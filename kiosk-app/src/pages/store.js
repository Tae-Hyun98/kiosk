import {configureStore, createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState:[],
  reducers:{
    addItem(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload.id
      })
      if(index >-1){
        state[index].count++
      }else{
        state.push(action.payload)
      }
    },

    deleteItem(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload
      })
        state.splice(index, 1)
    },

    plusCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload
      })
      state[index].count++
    },

    miusCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload
      })
      if(state[index].count > 1){
      state[index].count--
      }
    }
  }
})
export const {addItem, deleteItem, plusCount, miusCount} = cart.actions

export default configureStore({
  reducer:{
    cart:cart.reducer
  }
})