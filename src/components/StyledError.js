import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const StyledError = ({img, className, children, error}) => {
const data = useStaticQuery(getImage)
    return (
        <BackgroundImage className={className} fluid={img||data.defaultBcg.childImageSharp.fluid} error={error}>
            {children}
        </BackgroundImage>
    )
}

export default styled(StyledError)`
min-height: 95vh ;
background-position: center;
background-size: cover;
opacity: 1 !important;
display: flex;
justify-content: flex-start;
align-items: center;

`
