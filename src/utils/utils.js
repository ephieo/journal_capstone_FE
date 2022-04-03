export function Capitalise(pathname) {
  return pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2);
}

export function refreshPage() {
  window.location.reload(false);
}
