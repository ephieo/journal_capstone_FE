export function newestDate(data) {
  return data.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });
}

export function oldestDate(data) {
  return data.sort(function (a, b) {
    return new Date(a.date) - new Date(b.date);
  });
}