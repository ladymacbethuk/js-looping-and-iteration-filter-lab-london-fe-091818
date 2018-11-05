// Code your solution in this file
/*
function findMatching(d, s) {
  return d.filter(z=>z==s);
}
*/

function findMatching(d, s) {
  console.log (d.localeCompare(s, 'en', {sensitivity: 'base'}));
  return d.filter(z=>z==s);
}


/*
function fuzzyMatch(d, s) {
  console.log(d.localeCompare(s, 'en', {sensitivity: 'base'}));
}
*/