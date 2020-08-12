import React from "react"
import { makeStyles, Typography, Grid } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  section: {
    padding: "1em",
    backgroundColor : theme.palette.primary.main,
    color : theme.palette.text.primary
  },

  title: {
    textAlign: "center",
  },
}))
const ProjectSection = ({ children, sectionTitle }) => {
  let classes = useStyles()

  return (
    <Grid container className={classes.section}>
      <Grid item alignItems="center" xs={12} justify="center">
        <Typography variant="h4">{sectionTitle}</Typography>
      </Grid>
      {children}
    </Grid>
  )
}

export default ProjectSection
