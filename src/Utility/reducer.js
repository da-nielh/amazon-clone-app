import { useReducer } from "react"
import { Type } from "./action.type"

export const initialState = {
    baske:[]
}

export const reduser = (state, action) => {
    switch (action.type) {
        case Type.ADD_TO_BASKET:
            // check if the item exist
            const existingItem = state.baske.find((item) => item.id === action.item.id)
            if (!existingItem){
                return {
                    ...state,
                    baske: [...state.baske, {...action.item, amount:1}]
                }
            }else{
                const updatedBasket = state.baske.map((item) => {
                    return item.id === action.item.id? {...item, amount:item.amount + 1} : item
                })

                return {
                    ...state,
                    baske: updatedBasket
                }
            }
            case Type.REMOVE_FROM_BASKET:
                const index = state.baske.findIndex(item => item.id === action.id)
                const newBasket = [...state.baske]

                if (index > 0){
                    if (newBasket[index].amount > 1){
                        newBasket[index] = {...newBasket[index], amount:newBasket[index].amount - 1}
                    }else{
                        newBasket.splice(index, 1)
                    }
                }

                return{
                    ...state, 
                    baske: newBasket
                }

        default:
            return state
    }
}
