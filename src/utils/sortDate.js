export function newestDate(data) {
  return data.sort(function (a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function oldestDate(data) {
  return data.sort(function (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}
