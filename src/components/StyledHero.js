import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.webp" }) {
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
    <div className="heroWrapper">
    <BackgroundImage
      className={className}
      fluid={img || data.defaultBcg.childImageSharp.fluid}
      home={home}
    >
      {children}
    </BackgroundImage> 
    </div>

  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh - 65px)" : "50vh")};
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
