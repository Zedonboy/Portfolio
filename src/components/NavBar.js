import React from "react"
import { AppBar, makeStyles, Toolbar, IconButton, Typography } from "@material-ui/core"
const appBarHeight = 64
const useStyles = makeStyles(theme => ({
  appBar: {
    height: `${appBarHeight}px`,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
}))
function NavBar() {
  let classes = useStyles()
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
            A
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Declan Codes
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
