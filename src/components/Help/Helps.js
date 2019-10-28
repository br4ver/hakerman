import React from "react"
import HelpList from "./HelpList"
import { useStaticQuery, graphql } from "gatsby"

const getHelp = graphql`
  query {
    helps: allContentfulHelp(sort: { fields: sort, order: ASC }) {
      edges {
        node {
          title
          customer {
            question
            answer
          }
          contentful_id
          sort
          category
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Helps = () => {
  const { helps } = useStaticQuery(getHelp)

  return <HelpList helps={helps} />
}

export default Helps
