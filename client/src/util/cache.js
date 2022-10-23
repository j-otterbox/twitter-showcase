export function getCache() {
  return JSON.parse(localStorage.getItem("randomTweet"));
}

export function refreshCache(data) {
  const newCache = {
    data,
    expirationDate: getExpirationDate(),
  };
  localStorage.setItem("randomTweet", JSON.stringify(newCache));
}

function getExpirationDate() {
  const today = new Date();
  return new Date(today.setDate(today.getDate() + 1)); // expires in 24hrs
}

export function isExpired(date) {
  const today = new Date();
  const expirationDate = new Date(date);
  return today > expirationDate;
}
