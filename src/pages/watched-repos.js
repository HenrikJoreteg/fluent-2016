import React from 'react'

const WatchedReposPage = React.createClass({
  componentDidMount () {
    this.props.fetchRepos()
  },

  render () {
    // fetchhelper('/user/subscriptions')
    //const { repos } = this.props

    const repos = [
      {
        id: '1',
        full_name: 'repo1'
      },
      {
        id: '2',
        full_name: 'repo2'
      }
    ]

    let content

    if (repos.length) {
      content = (
        <div>
          {repos.map((repo) => {
            return <div key={repo.id}>hi {repo.full_name}</div>
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

export default WatchedReposPage
