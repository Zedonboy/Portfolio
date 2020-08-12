import React from "react"

import Layout from "../components/layout"
import Carousel from "../components/Carousel"
import Overlay from "../components/Overlay"
import ProjectSection from "../components/ProjectSection"
import Projekt from "../components/Project"
import {
  Grid,
  Divider,
  makeStyles,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core"
import "../components/contact.css"
import "../assets/typewriter_effect/typewriter.css"
import Logo from "../components/Logo"
import docker from "../images/docker.svg"
import kotlinseeklogo from "../images/kotlin-seeklogo.com.svg"
//import gatsbyicon from "../images/gatsby-icon.png"
import reactLogo from "../images/react.png"
import awslogo from "../images/aws-logo.svg"
import vuejsseeklogo from "../images/vuejs-seeklogo.com.svg"
import typescript from "../images/typescript.svg"
import nodejsseeklogo from "../images/nodejs-seeklogo.com.svg"
import cpp_logo from "../images/cpp_logo.svg"
//import awslambda from "../images/aws-lambda.svg"
import webpackicon from "../images/webpack-icon.svg"
//import awsec2 from "../images/aws-ec2.svg"
import graphqlSvg from "../images/graphql.svg"
import androidlogo from "../images/android-logo.svg"
import redux from "../images/redux.svg"
import k8s from "../images/kubernets.svg"
import Role from "../components/Role"
import backend from "../images/backend_dev.png"
import frontend from "../images/frontend_dev.png"
import androidDev from "../images/android_dev.png"
import { useStaticQuery, graphql } from "gatsby"

const logos = [
  {
    caption: "Android",
    image: androidlogo,
  },

  {
    caption: "Vue",
    image: vuejsseeklogo,
  },
  {
    caption: "React",
    image: reactLogo,
  },
  {
    caption: "Redux",
    image: redux,
  },
  {
    caption: "NodeJs",
    image: nodejsseeklogo,
  },
  {
    caption: "Typescript",
    image: typescript,
  },
  {
    caption: "Kotlin",
    image: kotlinseeklogo,
  },
  {
    caption: "C++",
    image: cpp_logo,
  },

  {
    caption: "Webpack",
    image: webpackicon,
  },

  {
    caption: "GraphQL",
    image: graphqlSvg,
  },

  {
    caption: "Docker",
    image: docker,
  },
  {
    caption: "Kubernets",
    image: k8s,
  },
  {
    caption: "AWS",
    image: awslogo,
  },
]

const roles = [
  {
    roleName: "Android Developer",
    image: androidDev,
    roleDesc:
      "I am committed Android Developer, always ready to learn new stuffs",
  },
  {
    roleName: "Frontend Developer",
    image: frontend,
    roleDesc: "I am team player in frontend development",
  },
  {
    roleName: "Backend Developer",
    image: backend,
    roleDesc: "Most times i use Microservice architechure(Big Projects)",
  },
]
const useStyles = makeStyles(theme => ({
  marginUp: {
    marginTop: "10px",
  },

  carouseText: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },

  overlayContent: {
    width: "100%",
    height: "100%",
  },
}))
const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            desc
            name
            repoUrl
            tags
            title
          }
        }
      }
    }
  `)
  let { nodes } = allMarkdownRemark
  let classes = useStyles()
  return (
    <Layout>
      <Carousel>
        <Overlay>
          <Grid
            className={classes.overlayContent}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div className="typewriter">
              <h1 className={classes.carouseText}>Let's Build Awesome Stuffs Together</h1>
            </div>
            <Button
              className={classes.marginUp}
              href="https://profile.codersrank.io/user/zedonboy"
              color="secondary"
              variant="outlined"
            >
              My Rank
            </Button>
          </Grid>
        </Overlay>
      </Carousel>

      <ProjectSection sectionTitle="Roles">
        <Grid
          container
          item
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {roles.map(({ roleName, image, roleDesc }) => (
            <Role roleName={roleName} image={image} roleDesc={roleDesc} />
          ))}
        </Grid>
      </ProjectSection>
      <ProjectSection sectionTitle="Tools/Frameworks">
        <Grid
          container
          item
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          {logos.map(({ caption, image }) => (
            <Logo caption={caption} image={image} />
          ))}
        </Grid>
      </ProjectSection>
      <ProjectSection sectionTitle="Projects">
        <>
          <Grid
            className={classes.marginUp}
            item
            spacing={3}
            direction="row"
            container
            xs={12}
          >
            {nodes.map(({ frontmatter }) => (
              <Projekt
                name={frontmatter.name}
                desc={frontmatter.desc}
                repoUrl={frontmatter.repoUrl}
                tags={frontmatter.tags}
              />
            ))}
          </Grid>
          {nodes.length > 4 ? (
            <Grid className={classes.marginUp} item container justify="center">
              <Button variant="outlined" color="secondary">
                More
              </Button>
            </Grid>
          ) : null}
        </>
      </ProjectSection>
      <ProjectSection sectionTitle="Contact">
        <Grid
          className={classes.marginUp}
          direction="row"
          spacing={3}
          justify="center"
          item
          container
        >
          <Grid item lg={5} md={5} sm={12}>
            <form
              action="mailto:zedonbiz@gmail.com"
              method="post"
              encType="text/plain"
            >
              <Grid spacing={3} container direction="column" justify="center">
                <TextField
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  margin="dense"
                  variant="outlined"
                />
                <TextField
                  required
                  name="message"
                  id="outlined-multiline-static"
                  label="Message"
                  type="text"
                  multiline
                  rows={4}
                  placeholder="Hello Professor, i want a RobotBoy i can love ...."
                  variant="outlined"
                />
                <Button type="submit" variant="outlined" color="secondary">
                  Send
                </Button>
              </Grid>
            </form>
          </Grid>
          <Grid
            lg={2}
            md={2}
            sm={0}
            container
            justify="center"
            direction="row"
            item
            xs={2}
          >
            <Divider orientation="vertical" />
          </Grid>
          <Grid item lg={5} md={5} sm={12}>
            <IconButton color="secondary" href="https://github.com/Zedonboy">
              <i class="fab github fa-3x fa-github-square"></i>
            </IconButton>
            <IconButton
              color="secondary"
              href="https://web.facebook.com/declan.nnadozie.3"
            >
              <i class="fab fb fa-3x fa-facebook-square"></i>
            </IconButton>
            <IconButton
              color="secondary"
              href="https://twitter.com/declannnadozie"
            >
              <i class="fab twitter fa-3x fa-twitter"></i>
            </IconButton>
            <IconButton color="secondary">
              <i class="fas email fa-3x fa-envelope"></i>
            </IconButton>
          </Grid>
        </Grid>
      </ProjectSection>
    </Layout>
  )
}

export default IndexPage
