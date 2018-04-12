import React from 'react'
import Helmet from 'react-helmet'
import Typography from 'material-ui/Typography'

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div className="blog-post-container container">
      <Helmet title={`Cloud Thoughts-${post.frontmatter.title}`} />

      <div className="blog-post">
        <Typography variant="display2" gutterBottom>
          {post.frontmatter.title}
        </Typography>
        <Typography variant="subheading" paragraph gutterBottom>
          {post.frontmatter.author} | {post.frontmatter.date}
        </Typography>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`
