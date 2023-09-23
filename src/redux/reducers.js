import {createReducer} from '@reduxjs/toolkit'

export const CartReducer = createReducer({
    cartItem:[],
    subTotal : 0,
    shipping : 0,
    tax : 0,
    total : 0
},{
    addToCart : (state,action)=>{
        const item = action.payload
        const isItemExist = state.cartItem.find((i)=>i.id===item.id)
        if(isItemExist){
            state.cartItem.forEach(i=>{
                if(i.id===item.id){
                    i.qty+=1
                }
            })
        }
        else{
            state.cartItem.push(item)
        }
    },
    decrement : (state,action)=>{
        const item = state.cartItem.find((i)=>i.id===action.payload)
        if(item.qty>0){
            state.cartItem.forEach((i)=>{
                if(i.id===item.id){
                    i.qty-=1
                }
            })
        }
    },
    deleteHandler : (state,action)=>{
        state.cartItem = state.cartItem.filter((i)=>i.id!==action.payload)
    },
    total:(state)=>{
        let sum = 0
        state.cartItem.forEach(i=>sum= sum + i.price *i.qty)
        state.subTotal = sum
        state.shipping = state.subTotal>1000?0:200
        state.tax= +(state.subTotal * 0.18).toFixed()
        state.total= state.subTotal+ state.shipping + state.tax

        
    }


})