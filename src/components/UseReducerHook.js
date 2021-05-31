import React, {useReducer} from "react"

const initialstate ={
    firstCounter : 0
} 

const reducer = (state,action)=>{
    switch(action.type){
        case 'increment':
            return { firstCounter:state.firstCounter +1 }
        case 'decrement':
            return { firstCounter:state.firstCounter -1 }
        case 'reset':
            return initialstate;
        default:
            return state
        
    }

}

function UseReducerHook() {
    const [count, dispatch] = useReducer(reducer,initialstate)
    return (
    <div>
        count : {count.firstCounter}
        <br/>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>

    </div>    
    )
}

export default UseReducerHook;
