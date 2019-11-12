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
  height: 100%;
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
`
