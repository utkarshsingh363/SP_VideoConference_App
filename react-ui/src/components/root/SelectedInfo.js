import React from "react"
import Paper from "@material-ui/core/Paper";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

    SelectedInfoPaper:{
        gridArea:"s",
        border:"solid"
        
        
    }
})
);


function SelectedInfo(props){
    const classes=useStyles();
    const theme = useTheme();

        return(
            
            <Paper className={classes.SelectedInfoPaper}>
                
               

            
            </Paper>
            
        )

    
}

export default SelectedInfo