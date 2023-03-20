function pageCount(n, p) {  
  const middle = n/2
  if (n-p > middle)
    return parseInt(p/2)
  else {
    return parseInt((n-p)/2)
  }
}
