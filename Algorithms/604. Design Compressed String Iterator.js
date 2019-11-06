/**
 * Design and implement a data structure for a compressed string iterator. It should support the following operations: next and hasNext.
 *
 * The given compressed string will be in the form of each letter followed by a positive integer representing the number of this letter existing in the original uncompressed string.
 *
 * next() - if the original string still has uncompressed characters, return the next letter; Otherwise return a white space.
 * hasNext() - Judge whether there is any letter needs to be uncompressed.
 *
 * Note:
 * Please remember to RESET your class variables declared in StringIterator, as static/class variables are persisted across multiple test cases. Please see here for more details.
 *
 * Example:
 *
 * StringIterator iterator = new StringIterator("L1e2t1C1o1d1e1");
 *
 * iterator.next(); // return 'L'
 * iterator.next(); // return 'e'
 * iterator.next(); // return 'e'
 * iterator.next(); // return 't'
 * iterator.next(); // return 'C'
 * iterator.next(); // return 'o'
 * iterator.next(); // return 'd'
 * iterator.hasNext(); // return true
 * iterator.next(); // return 'e'
 * iterator.hasNext(); // return false
 * iterator.next(); // return ' '
 */

/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
  this.compressedString = compressedString;

  this.strs = compressedString.match(/[a-zA-Z]/g);
  this.numbers = compressedString.match(/\d+/g);

  this.index = 0;

  this.char = this.strs[0];
  this.number = parseInt(this.numbers[0], 10);

  this.counter = 0;
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {

  if( this.counter < this.number ) {
    this.counter += 1;

    return this.char;
  }

  // 跳下一个
  this.index += 1;

  if( this.index > this.numbers.length - 1 ) {
    return ' ';
  }

  this.char = this.strs[this.index];
  this.number = parseInt(this.numbers[this.index], 10);

  this.counter = 0;

  if( this.counter < this.number ) {
    this.counter += 1;

    return this.char;
  }
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
  if( this.index > this.numbers.length - 1 ) return false;

  if( this.index === this.numbers.length - 1 && this.counter >= this.number ) {
    return false;
  }

  return true;
};

/**
 * Your StringIterator object will be instantiated and called as such:
 * var obj = Object.create(StringIterator).createNew(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */


