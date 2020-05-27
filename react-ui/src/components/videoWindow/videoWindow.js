import React,{Component}from 'react'

import io from "socket.io-client";


import './videoWindow.css'

// export default function VideoWindow(){

//     return(
//         <video width="300" height="300" >

//             </video>
//     )
// }

export default class VideoWindow extends React.Component   {

    
    componentDidMount(){

       var current = io.connect("/");
       console.log("yoooo")


    }

    render(){

    return(
            <video width="300" height="300" style={{backgroundColor:"grey"}}>

            </video>


    )
    }

}
