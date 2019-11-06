/**
 * Created by paper on 2016/8/15.
 * 
 * Given two numbers represented as strings, return multiplication of the numbers as a string.
 * 
 * Note:
 *  The numbers can be arbitrarily large and are non-negative.
 *  Converting the input string to integer is NOT allowed.
 *  You should NOT use internal library such as BigInteger.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') return '0';
    if(num1 === '1') return num2;
    if(num2 === '1') return num1;

    var r1 = arrToInt( num1.split('') );
    var r2 = arrToInt( num2.split('') );

    var ret = [];
    var retTemp = [];

    var l1 = r1.length;

    for(var i=l1-1; i>=0; i--){

        var r1Value = r1[i];

        if( ret.length === 0 && retTemp.length === 0 ) {
            ret = multiplyArrByOneNumber(r1Value, r2);
        } else {
            retTemp = multiplyArrByOneNumber(r1Value, r2).concat(creatZeroArr( l1 - 1 - i ));
            ret = addByTwoArr(ret, retTemp);
        }
    }

    return ret.join('');

    // (8, [1,2,3]) => [9, 8, 4] 
    function multiplyArrByOneNumber(num, r) {
        if( num === 0 ) { return creatZeroArr(r.length); }
        if( num === 1 ) { return r; }

        var carry = 0; // 进位
        var l = r.length;
        var ret = [];
        var sum = 0;

        for(var i=l-1; i>=0; i--) {
            sum = r[i] * num + carry;

            carry = sum >= 10 ? ~~(sum/10) : 0;
            ret.unshift(sum - carry*10);
        }

        if( carry !== 0 ){
            ret.unshift(carry);
        }

        return ret;
    }

    // ([1,2,3], [4,5,6,1]) => [4,6,8,4]
    function addByTwoArr(r1, r2) {

        var l1 = r1.length;
        var l2 = r2.length;

        var minArr = [];
        var maxArr = [];

        if( l1 < l2 ) {
            minArr = r1;
            maxArr = r2;
        }else {
            minArr = r2;
            maxArr = r1;
        }

        minArr = creatZeroArr(maxArr.length - minArr.length).concat(minArr);

        var carry = 0; // 进位
        var ret = [];
        var sum = 0;

        for(var i=maxArr.length-1; i>=0; i--){
            sum = minArr[i] + maxArr[i] + carry;

            carry = sum >= 10 ? ~~(sum/10) : 0;
            ret.unshift(sum - carry*10);
        }

        if( carry !== 0 ){
            ret.unshift(carry);
        }

        return ret;
    }

    // n=2 => [0, 0]
    // n=3 => [0, 0, 0]
    function creatZeroArr(n){
        var r = [];

        for(var i=0; i<n; i++) {
            r.push(0);
        }

        return r;
    }

    // ['1','2'] => [1,2]
    function arrToInt(r) {
        var ret = [];

        r.forEach(function(v, i){
            ret[i] = parseInt(v, 10);
        });

        return ret;
    }
};