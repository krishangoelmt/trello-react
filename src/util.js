
import { USER_IMAGE } from "./constant"

export const updatedArrayValues = (arr,payload) =>{
    return arr.reduce((acc,next) => { 
    const { id } = payload
     if(next.id === id){
         acc.push(payload)
     }else{
        acc.push(next)  
     }
     return acc
    },[])
}


export const getRandomUserImage = () =>{
   return USER_IMAGE[Math.floor(Math.random()*USER_IMAGE.length)]
}