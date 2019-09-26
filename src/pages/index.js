import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimleHero from '../components/SimpleHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from "../components/Home/Services"
export default () => (
  <Layout>
    <SimleHero>
      <Banner
        title="Money"
        info="Pork belly selvage microdosing subway tile quinoa street art. Celiac meditation roof party, lo-fi tacos viral keytar etsy venmo microdosing. IPhone kickstarter fashion axe craft beer raw denim palo santo retro. Hexagon hell of roof party, drinking vinegar kombucha disrupt kickstarter. Tumblr taiyaki etsy cliche.">
        <Link to="/" className="btn-white">
          More Info
        </Link>
      </Banner>
    </SimleHero>
    <Services/>
    <About />
  </Layout>
)
