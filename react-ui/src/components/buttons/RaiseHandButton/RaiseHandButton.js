import React from 'react';
import PanToolIcon from '@material-ui/icons/PanTool';

const RaiseHand = (props) =>{
    if (props.raiseHand === true) {
        return (
          <PanToolIcon onClick={props.click}/>
        )
    }
    return( 
      <PanToolIcon color="primary" onClick={props.click} />
    )
}

    
export default RaiseHand;
