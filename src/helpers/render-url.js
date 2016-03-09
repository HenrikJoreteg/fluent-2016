import IS_BROWSER from './is-browser'

export default (url) => {
  if (IS_BROWSER && window.location.pathname !== url) {
    window.history.pushState({}, null, url)
  }
}
