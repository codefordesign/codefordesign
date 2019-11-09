import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from "gatsby"

import '../assets/styles/normalize.css'
import '../assets/styles/index.styl'
import logo from '../assets/images/logo.svg'

export const query = graphql`
  query {
    site {
      siteMetadata {
        title,
        description
      }
    }
  }
`

const index = ({ data }) => {
  const { title, description } = data.site.siteMetadata
  return (
    <main className='main'>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>

      <img src={logo} alt='Code for Design logo' />
    </main>
  )
}

export default index
