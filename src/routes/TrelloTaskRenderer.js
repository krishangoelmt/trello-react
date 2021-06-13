import React from "react"
import RenderTaskList from "../components/RenderTaskList"
const TrelloTaskRenderer = (props) => {
    return ( 
       <RenderTaskList {...props}/> 
     );
}
 
export default TrelloTaskRenderer ;