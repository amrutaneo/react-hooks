import React, {useState,useEffect,useContext} from "react";
import { userContext } from "../App"

function HookCounter () {
    const [count, setCount] = useState(0)
    const user = useContext(userContext)
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    })
    return (
    <div>
        Welcome {user}
        <br/>
        <button onClick={()=>setCount(count + 1)}>Count {count}</button>
    </div>    
    )
}

export default HookCounter;