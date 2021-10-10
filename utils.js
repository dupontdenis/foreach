
/**
 * 
 * @param {Array} tab The collection to iterate over. 
 * @param {Function} iteratee The function invoked per iteration. 
 */
function forEach(tab, iteratee ) {
  for (let i = 0; i < tab.length; i++) {
    iteratee (tab[i], i, tab)
  }
}

/**
 * 
 * @param {Array} tab The collection to iterate over. 
 * @param {Function} iteratee The function invoked per iteration. 
 * @returns {Array} Returns the new filtered array.
 */
function filter(tab, iteratee ) {
  const tmp = [];
  for (let i = 0; i < tab.length; i++) {
    if (iteratee (tab[i])) {
      tmp.push(tab[i]);
    }
  }
  return tmp;
}

/**
 * export
 */
module.exports.forEach = forEach;
module.exports.filter = filter;

