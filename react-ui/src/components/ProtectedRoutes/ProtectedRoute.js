import React from 'react'
import {Route,Redirect} from 'react-router-dom'

const ProtectedRoute=({path,isLoggedIn,component:Component,render,...rest})=>{
    return(
        <Route {...rest} exact render={(props)=>{
            // alert("inside")
            if(!isLoggedIn) return <Redirect to ="/signin"/>
              return Component? <Component {...props}/>:render();
          }} /> 
    );
}

export default ProtectedRoute;