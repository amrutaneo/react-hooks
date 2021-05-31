import {useEffect} from "react";


function UseDocumentTitle (count) {
    
    useEffect(()=>{
        document.title=`you clicked ${count} times`
    },[count])
}

export default UseDocumentTitle;