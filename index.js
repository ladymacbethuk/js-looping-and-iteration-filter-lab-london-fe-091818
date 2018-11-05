// Code your solution in this file
/*
function findMatching(d, s) {
  return d.filter(z=>z==s);
}
*/

function findMatching(d, s) {
  return d.filter(z=>z.localeCompare(s, 'en', {sensitivity: 'base'}));
}


/*
function fuzzyMatch(d, s) {
  console.log(d.localeCompare(s, 'en', {sensitivity: 'base'}));
}
*/