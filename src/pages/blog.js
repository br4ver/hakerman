import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Button from '../examples/Button'

const blog = () => {
  return (
    <Layout>
      Hello from blog page
      <div>
      <Button>Hello</Button>  
      </div>
      
      <br></br>
      <Link to="/">To Home</Link>
    </Layout>
  )
}

export default blog
