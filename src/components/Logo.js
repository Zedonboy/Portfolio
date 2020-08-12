import React from "react"
import { Paper, makeStyles, Typography, Grid } from "@material-ui/core"
const useStyle = makeStyles(theme => ({
  root: {
    width: "100px",
    backgroundColor: theme.palette.primary.light,
    marginBottom : "8px"
  },

  imageRoot: {
    maxHeight: "80px",
    marginTop: "8px",
  },
}))
function Logo({ image, caption }) {
  let classes = useStyle()

  return (
    <Paper className={classes.root}>
      <Grid
        container
        xs={12}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <img className={classes.imageRoot} src={image}></img>
        <Typography variant="caption">{caption}</Typography>
      </Grid>
    </Paper>
  )
}

export default Logo
