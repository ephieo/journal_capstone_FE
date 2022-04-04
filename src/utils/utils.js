export function capitalise(pathname) {
  return pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2);
}

export function refreshPage(url) {
  window.location.assign(url);
}
