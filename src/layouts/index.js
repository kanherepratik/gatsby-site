import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Header from '../components/header'

import './index.css'
import '../styles/layout-overide.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Cloud Thoughts"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'viewport', content: 'width=1024' },
      ]}
    />
    <Header />
    <div>
      <div className="container container-body">
        <div>{children()}</div>
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
