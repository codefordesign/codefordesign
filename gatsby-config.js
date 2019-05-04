require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: 'Code for Design',
    description: 'Code for Design workshop'
  },
  pathPrefix: '/codefordesign',
  plugins: [
    'gatsby-plugin-stylus',
    'gatsby-plugin-react-helmet'
  ]
}
