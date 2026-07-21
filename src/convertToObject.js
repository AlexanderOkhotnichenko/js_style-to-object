'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const source = sourceString;
  const string = source.split(';').filter((item) => item.trim() !== '');
  const array = [];

  string.forEach((item) => array.push(item.split(':')));

  const arrayCorrected = array.map((item) => item.map((el) => el.trim()));

  const object = {};

  arrayCorrected.map(([key, value]) => (object[key] = value));

  return object;
}

module.exports = convertToObject;
