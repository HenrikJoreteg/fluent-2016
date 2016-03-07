export default (url) => {
  if (window.location.pathname !== url) {
    window.history.pushState({}, null, url)
  }
}
