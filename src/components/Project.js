import React from "react"
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
  Grid,
  Chip,
} from "@material-ui/core"
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.primary.light
  },
  media: {
    height: 80,
  },
}))

const Projekt = ({name, desc, tags, repoUrl, liveUrl}) => {
  let classes = useStyles()
  return (
    <Grid item lg={3} sm={12} md={3}>
      <Card color="primary" elevation={6} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" component="p">
              {desc}
            </Typography>
            <Grid direction="row" justify="flex-start" container>
              {tags.map(v => <Chip style={{marginLeft : "5px"}} label={v}></Chip>)}
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" href={liveUrl}>
            Live
          </Button>
          <Button size="small" href={repoUrl}>
            Repo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Projekt
