import React from "react"
import {Box, makeStyles} from "@material-ui/core"
import carouselImg from "../images/carousel.jpg"
const useStyle = makeStyles(theme => ({
    carousel : {
        position : "relative",
        backgroundImage:`url(${carouselImg})`,
        backgroundSize : "cover",
        backgroundRepeat : 'no-repeat',
        height : '100vh'
    }
}))
const Carousel = ({children}) => {
    let classes = useStyle()
    return (
        <Box className={classes.carousel}>
            {children}
        </Box>
    )
}

export default Carousel