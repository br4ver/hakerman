import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
const getSitedata = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
const RegularHeader = () => {
    return (
        <StaticQuery query={getSitedata} render={(data)=>{
            console.log(data);
            
            return (
              <div>
                <h1>title:{data.site.siteMetadata.title}</h1>
                <h1>title:{data.site.siteMetadata.author}</h1>
              </div>
            )
        }} />
    )
}

export default RegularHeader
