import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 100,
  },
}

const Post = props => {
  const { edges: posts } = props.data.allMarkdownRemark
  const { classes } = props
  console.log(posts)

  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
          <Card className={classes.card} key={post.id}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h4">
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </Typography>
              <Typography component="p">{post.excerpt}</Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  )
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Post)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            author
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
