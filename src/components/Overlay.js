import React from "react"
import { Box, makeStyles, Grid } from "@material-ui/core"

const usestyles = makeStyles(theme => ({

    overlay : {
        backgroundColor : "rgba(37, 42, 49, 0.8)",
        width : "inherit",
        height : "inherit",
    }
}))

const Overlay = ({children}) => {
    let classes = usestyles()
    return (
        <Box className={classes.overlay}>
            {children}
        </Box>
    )
}

export default Overlay