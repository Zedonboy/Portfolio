import React from "react"
import Layout from "../components/layout"
import ProjectSection from "../components/ProjectSection"
import { makeStyles, Grid } from "@material-ui/core"
import Projekt from "../components/Project"

const useStyles = makeStyles({
  marginUp: {
    marginTop: "10px",
  },
})
const Projects = () => {
  let classes = useStyles()

  return (
    <Layout>
      <ProjectSection sectionTitle="Projects">
        <Grid
          className={classes.marginUp}
          item
          spacing={3}
          direction="row"
          container
          xs={12}
        >
          <Projekt />
          <Projekt />
          <Projekt />
          <Projekt />
        </Grid>
      </ProjectSection>
    </Layout>
  )
}

export default Projects
