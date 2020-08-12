import React from "react"
import {
  Card,
  makeStyles,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: "16px",
    maxWidth: 345,
    padding: "8px",
    backgroundColor: theme.palette.primary.light,
  },
  media: {
    width: 200,
    height: 200,
  },
}))

function Role({ image, roleName, roleDesc }) {
  let classes = useStyles()
  return (
    <Card className={classes.root}>
      <Grid container justify="center" direction="row">
        <CardMedia className={classes.media} image={image} title="logo" />
      </Grid>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {roleName}
        </Typography>
        <Typography variant="body2" component="p">
          {roleDesc}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Role
