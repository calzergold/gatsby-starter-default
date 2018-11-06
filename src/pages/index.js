import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Welcome to your easy to access Website.</h1>

    <p>
      This website will make your work experience searches easier. No need to
      fuss.
    </p>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
