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
    at: at,
    text: text
  };
}

/**
 * Parse the 'min' or 'max' string
 * @param  {String} minMaxString The string which will contain either 'min' or 'max'
 */
parse.parseMinMax = function(minMaxString) {

};

/**
 * Parse coefficients
 * @param  {Array} coeffList An array for storing coeeficients
 * @param  {String} monomial  The monomial which will be destructured into its coeffs
 */
parse.parseCoeffs = function(coeffList, monomial) {

  // Check which pattern matches. Valid are: (s)(n)lv
  // parenthesis indicate optional existence
  // s is + or - (absence means +)
  // n is a number (coefficient, absence means 1)
  // l is a lowercase latin letter (variable letter)
  // v is a number, probably incremental (variable number)

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

  var at; // current index
  var ch; // current character


};
