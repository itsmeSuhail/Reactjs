export const intial={
    total:0,
    products:[]
}
const Reducer=(state,action)=>{
    const {type,payload}=action;
    switch(type){
        case "A":return{...state,
        products:payload}
        case "B":return{...state,
        products:payload}
        case "c":return{...state,
        products:payload}
        default:return state;
    }
}
export default Reducer;