import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Tabs, { Tab } from 'material-ui/Tabs'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    minHeight: '64px',
  },
  flex: {
    padding: '24px 0 24px 0',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
  },
}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
  }
  handleChange = (event, value) => {
    this.setState({ value })
  }
  render() {
    const { classes } = this.props
    const { value } = this.state
    return (
      <AppBar className={`${classes.root} container`}>
        <Typography variant="title" color="inherit" className={classes.flex}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
            Cloud Thoughts
          </Link>
        </Typography>
        <Tabs
          value={value}
          onChange={this.handleChange}
          className={classes.align}
          indicatorColor="primary"
        >
          <Tab label="Home" href="/" />
          <Tab label="About Us" href="/about-us" />
          <Tab label="Contact Us" href="/contact-us" />
        </Tabs>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: React.PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
