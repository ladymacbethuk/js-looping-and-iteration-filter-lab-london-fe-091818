// Code your solution in this file
/*
function findMatching(d, s) {
  return d.filter(z=>z==s);
}
*/

function findMatching(d, s) {
  return d.filter(z=>z.toLowerCase().includes(term.toLowerCase()))
}


/*
function fuzzyMatch(d, s) {
  console.log(d.localeCompare(s, 'en', {sensitivity: 'base'}));
}
*/