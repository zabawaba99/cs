
function searchRecursive(arr, start, end, val) {
  // if we have an empty arr, the value is not found
  if (!arr || arr.length === 0) return -1;

  // if the end pointer is less than the start pointer then
  // we have exhausted our search
  if (end < start) return -1;

  const index = parseInt(start + (end-start) / 2, 10);
  // we found it!
  if (arr[index] === val) return index;
  // everything on the right side is going to be greater than `val`
  // ignore the right side of the list
  else if (arr[index] > val) return searchRecursive(arr, start, index-1, val);
  // everything on the left side is going to be smaller than val
  // ignore the left side of the list
  else return searchRecursive(arr, index+1, end, val);
}

function search(arr, val) {
  // if we have an empty arr, the value is not found
  if (!arr || arr.length === 0) return false;

  // if we only have one thing, check if it's what we want
  if (arr.length === 1) return arr[0] === val;

  let start = 0;
  let end = arr.length - 1;
  while(end >= start) {
    const index = parseInt(start + (end - start) / 2, 10);

    // we found it!
    if (arr[index] === val) return index;
    // everything on the right side is larger - ignore it
    else if (arr[index] > val) end = index - 1;
    // everything on the left side if larger - ignore it
    else start = index + 1;
  }
  return -1;
}

module.exports = {
  search,
  searchRecursive,
}
