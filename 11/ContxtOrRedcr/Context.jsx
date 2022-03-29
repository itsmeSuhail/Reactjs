import { createContext, useContext, useReducer } from "react";
import Reducer, {intial} from "./REducer"

const shopContext=createContext(intial);
export const ShopProvider=({children})=>{
const [state,dispatch]=useReducer(Reducer,intial);
const add=()=>{
    dispatch({
        type:"A",payload:[...Array(10)]
    })
}
const add2=()=>{
    dispatch({
        type:"B",payload:[...Array(20)]
    })
}
const add3=()=>{
    dispatch({
        type:"C",payload:[...Array(30)]
    })
}
const values={
    add,add2,add3,state
}
return <shopContext.Provider value={values}>
{children}
</shopContext.Provider>
}
export const Useshop=()=>{
    const context=useContext(shopContext);
    return context;
}