
function searchRecursive(arr, val) {
  // if we have an empty arr, the value is not found
  if (!arr || arr.length === 0) return false;

  // if we only have one thing, check if it's what we want
  if (arr.length === 1) return arr[0] === val;

  const index = parseInt(arr.length / 2, 10);
  if (arr[index] > val) return searchRecursive(arr.slice(0, index), val);
  else return searchRecursive(arr.slice(index, arr.length), val);
}

function search(arr, val) {
  // if we have an empty arr, the value is not found
  if (!arr || arr.length === 0) return false;

  // if we only have one thing, check if it's what we want
  if (arr.length === 1) return arr[0] === val;

  let start = 0;
  let end = arr.length - 1;
  while(end >= start) {
    const index = parseInt(start + (end - start)/2);

    // move the index down
    // if (arr[end] < val) return false;
    if (arr[index] === val) return true;
    else if (arr[index] > val) end = index - 1;
    else start = index + 1;
  }
  return false;
}

module.exports = {
  search,
  searchRecursive,
}
