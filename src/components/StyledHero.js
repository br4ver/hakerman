import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const StyledHero = ({ img, className, children, home }) => {
  const data = useStaticQuery(getImage)
  return (
    <BackgroundImage
      className={className}
      fluid={img || data.defaultBcg.childImageSharp.fluid}
      home={home}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "525px" : "500px")};
  background: ${props =>
    props.home
      ? "linear-gradient(0deg, #FFFFFF 0%, rgba(196, 196, 196, 0) 50.06%);"
      : "none"};
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: -1;
  position: absolute;
  @media (min-width: 479px) {
    min-height: ${props => (props.home ? "calc(100vh - 65px)" : "50vh")};
  }
`
