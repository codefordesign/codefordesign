import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import '../assets/styles/normalize.css'
import '../assets/styles/index.styl'
import logo from '../assets/images/logo.svg'

const index = () => {
  const {
    site: {
      siteMetadata: { title, description }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

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
