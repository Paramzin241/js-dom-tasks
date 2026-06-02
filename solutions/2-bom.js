// BEGIN
export default function solution(url) {
  const userAgent = navigator.userAgent;
  
  window.location.href = url;

  return `${userAgent} ${url}`;
}
// END