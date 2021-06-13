import React from "react";
import RenderBoard from "../components/RenderBoard"

const  TrelloBoardRenderer = (props) => {
    return ( 
        <>
         <RenderBoard {...props}/>
        </>
    );
}
 
export default TrelloBoardRenderer;