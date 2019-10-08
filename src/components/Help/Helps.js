import React from "react"
import HelpList from "./HelpList"
import { useStaticQuery, graphql } from "gatsby"

const getHelp = graphql`
  query {
    helps: allContentfulHelp {
      edges {
        node {
          title
          customer{
            question
            answer
          }
          contentful_id
          category
          slug
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
