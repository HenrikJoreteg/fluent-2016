import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWatchedRepos } from '../actions'

const WatchedReposPage = React.createClass({
  propTypes: {
    loading: PropTypes.bool.isRequired,
    repos: PropTypes.array.isRequired,
    fetchWatchedRepos: PropTypes.func.isRequired
  },

  componentDidMount () {
    this.props.fetchWatchedRepos()
  },

  render () {
    const { repos, loading } = this.props

    let content

    if (loading) {
      content = (
        <h3>fetching repos...</h3>
      )
    } else if (repos.length) {
      content = (
        <div>
          {repos.map((repo) => {
            return <div key={repo.id}>{repo.full_name}</div>
          })}
        </div>
      )
    }

    return (
      <div>
        <h1>Watched Repos</h1>
        { content }
      </div>
    )
  }
})

const select = (state) => {
  return {
    repos: state.watchedRepos.data,
    loading: state.watchedRepos.loading
  }
}

const actionsToBind = {
  fetchWatchedRepos
}

export default connect(select, actionsToBind)(WatchedReposPage)
