/**
 * @fileOverview Parser for linear problems
 */

var parse = module.exports = {};

/**
 * Throws syntax error
 * @param  {String} msg The syntax error message
 */
parse.error = function(msg) {
  throw {
    name: 'SyntaxError',
    message: msg,
    at: parse.at,
    text: parse.dataString
  };
}

/**
 * Returns next character to be parsed
 * @param  {String}   character Character expected to be parsed
 */
parse.next = function(character) {

  // If a c parameter is provided, verify that it matches the current character.
  if (character && character !== parse.ch) {
    parse.error('Expected \'' + character + '\' instead of \'' + parse.ch + '\'');
  }

  // Get the next character. When there are no more characters,
  // return the empty string.
  parse.ch = parse.dataString.charAt(parse.at);
  parse.at += 1;
}

/**
 * Parse the 'min' or 'max' string
 * @param  {String} minMaxString The string which will contain either 'min' or 'max'
 */
parse.parseMinMax = function(minMaxString) {

  parse.next('m')
  switch(parse.ch) {
    case 'i':
      parse.next('i');
      parse.next('n');
      return 1;
    case 'a':
      parse.next('a');
      parse.next('x');
      return -1;
  }
  parse.error('Unexpected \'' + parse.ch + '\'');

};

/**
 * Parse coefficients
 * @param  {Array} coeffList An array for storing coeeficients
 * @param  {String} monomial  The monomial which will be destructured into its coeffs
 *
 * Check which pattern matches. Valid are: (s)(n)lv
 * parenthesis indicate optional existence
 * s is + or - (absence means +)
 * n is a number (coefficient, absence means 1)
 * l is a lowercase latin letter (variable letter)
 * v is a number, probably incremental (variable number)
 */
parse.parseCoeffs = function(coeffList, monomial) {

};

/**
 * Parse 'min' or 'max' keyword
 * @param  {Array} numArray  The array in which the number results will be added
 * @param  {Array} signArray The array in which the sign results will be added
 * @param  {String} string    The input string
 */
parse.parseConstants = function(numArray, signArray, string) {

};

/**
 * Main parse function. Parses linear problems of lp format
 * @param  {String} dataString A string which includes the input lp format
 * @return {Object} Returns an object with the parsed values
 */
parse.lpParser = function(dataString) {

  parse.dataString = dataString; // string to be parsed

  parse.at = 0; // current index
  parse.ch = parse.dataString.charAt(parse.at); // current character

  parse.parseMinMax(parse.dataString);

};
