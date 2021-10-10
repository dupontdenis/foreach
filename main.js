
const { forEach } = require('./utils');

const fruits = ["Orange", "Banane", "Ananas", "Pamplemousse"];

/**
 * substring half the string and concat 🔪
 * 
 * @param {String} fruit The fruit to cut.
 * @param {number} i The index of the fruit.
 * @param {Array} fruits The collection. 
 * @example
 * 
 * fruit = 'Orange',
 * fruits[i] = Ora🔪
 * 
 */
function cut(fruit, i, fruits){
  fruits[i] = `${fruit.substring(0, fruit.length / 2)}\ud83d\udd2a`
};


forEach(fruits, console.log);
forEach(fruits, cut);
forEach(fruits, console.log);