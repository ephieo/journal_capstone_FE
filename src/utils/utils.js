export default function Capitalise(pathname) {
  return pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2);
}
