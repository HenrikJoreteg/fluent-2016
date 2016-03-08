import React, { PropTypes } from 'react'

export default (Component) => {
  return React.createClass({
    propType: {
      me: PropTypes.object.isRequired
    },

    render () {
      if (this.props.me.token) {
        return (
          <Component {...this.props}/>
        )
      } else {
        return (
          <h1>Fetching your github user info</h1>
        )
      }
    }
  })
}
