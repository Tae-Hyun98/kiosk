import {configureStore, createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState:[],
  reducers:{
    addItem(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id===action.payload.id
      }) //같은 id가 있을때 카운트
      const opindex = state.findIndex((findId)=>{
        return findId.option===action.payload.option
      }) //같은 옵션값이있을때 카운트
      //같은id option잇으면 카운트올림, 
      console.log(opindex)
      if(index >-1&&opindex>-1){
        state[index].count++
      } else{
        state.push(action.payload)
      }
    },

/*     optionItem(state, action){
      const index = state.findIndex((findId)=>{
        return findId.option===action.payload.option
      })

      if(index >-1){
        state[index].count++
      }else{
        state.push(action.payload)
      }
    },
 */
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
export const {addItem, deleteItem, plusCount, miusCount, optionItem} = cart.actions

export default configureStore({
  reducer:{
    cart:cart.reducer
  }
})