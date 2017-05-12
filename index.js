'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: returns the value passed
 * 
 * @param {Value}: any value to be returned
 * 
 * Usage: 
 * 
 *      const val = 2;
 *      const action = each(val);
 *      console.log(action); // -> 2
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;

/**
 * typeOf: returns the type of the value passed
 * 
 * @param {Value}: any value 
 * 
 * Usage:
 * 
 *      typeOf(null); // -> 'null'
 *      typeOf({});   // -> 'object'
 *      typeOf([]);   // -> 'array'
 *      typeOf(2);    // -> 'number'
 *      typeOf('');   // -> 'string'
 */
 function typeOf(value) {
    if(Array.isArray(value)) {
        return 'array';
    } else if(null === value) {
        return 'null';
    }
    else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;

/**
 * first: return this first number of  in an array
 * 
 * @param: {Array}: an array with at least one value
 * @param: {Number}: a number value that is greater than 0 and less then or equal to the length of the array
 * 
 * Usage: 
 *      
 *      first([1, 2, 3], 1);     // -> 1
 *      first([1, 2, 3], 2);     // -> [1, 2]
 *      first([1, 2, 3], 'nan'); // -> 1 
 *      first([1, 2, 3]);        // -> 1     
 *      first([1, 2, 3], 4);     // -> []
 *      first(3, 1);             // -> []
 */
 function first(array, num) {
    if(!Array.isArray(array) || num < 0 || num > array.length) {
        return [];
    } else if(!num || typeof num !== 'number') {
        return array[0];
    } else {
        if(array.slice(0, num).length === 1) { 
            return array.slice(0, num)[0];
        }
        return array.slice(0, num);
    }
 }
 module.exports.first = first;

/**
 * last: returns the last <number> items of <array>
 * 
 * @param {Array}: array to take <number> of items from
 * @param {Number}: the amount of items the be given from <array>
 * 
 * Usage: 
 *      
 *      last([1, 2, 3], 2); // -> [2, 3]
 *      last([1, 2, 3, ' '); // -> 3
 */
function last(array, num) {
    if(!Array.isArray(array) || num < 0 || num > array.length) {
        return [];
    } else if(!num || typeof num !== 'number') {
        return array[array.length-1];
    } else {
        if(array.slice(array.length-num, array.length).length === 1) {
            return array.slice(array.length-num, array.length)[0];
        }
        return array.slice(array.length-num, array.length);
    }    
}
module.exports.last = last;

/**
 * each: iterate over a collection and call the function passed onto each element or value of a collection
 * 
 * @param {Collection}: An array or object to iterate over
 * @param {Function}: A function to call onto each element of the collection 
 *
 * Usage:
 *      
 *      each([1, 2, 3, 4], function(e, i, a) { console.log(e) });
 *          -> 1..2..3..4
 *      each({a: 'a', b: 'b', c: 'c'}, function(e, i, a) { console.log(e) });
 *          -> 'a'..'b'..'c'
 */
 function each(col, func) {
      if(Array.isArray(col)) {
      
      for(let i = 0; i < col.length; i++) {
          func(col[i], i, col);
      }
      
  } else if(typeof col === 'object') {
      
      for(let key in col) {
          func(col[key], key, col);
      }
  }
 }
module.exports.each = each;

/**
 * indexOf: find the first occurance of a <value> in an array
 * 
 * @param {Array}: array to find <value> in 
 * @param {Value}: value to find in array
 * 
 * Usage:
 *      
 *      indexOf([0, 1, 2], 2);         -> 2
 *      indexOf(['a', 'b', 'c'], 'b'); -> 1
 *      indexOf(1, 1);                 -> -1
 */
function indexOf(arr, val) {
    if(!Array.isArray(arr)) return -1;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * filter: call the function passed onto each element of an array and return a new array of all the elements in which the function call returned true
 * 
 * @param {Array}: array to transform based on the function passed
 * @param {Function}: function that returns a true or false value when called on each element of the array
 * 
 * Usage:
 *      
 *      filter([1, 2, 3, 4], function(e) { return e % 2 === 0}); -> [2, 4]
 */
 function filter(arr, fun) {
    let trues = [];
    for(let i = 0; i < arr.length; i++) {
        if(fun(arr[i], i, arr)) {
            trues.push(arr[i]);
        }
    }
    return trues; 
 }
 module.exports.filter = filter;
 
/**
 * reject: call the function passed onto each element of an array and return a new array of all the elements in which the function call returned false
 * 
 * @param {Array}: array to transform based on the function passed
 * @param {Function}: function that returns a true or false value when called on each element of the array
 */
 function reject(arr, fun) {
    let falses = [];
    for(let i = 0; i < arr.length; i++) {
        if(!fun(arr[i], i, arr)) {
            falses.push(arr[i]);
        }
    }
    return falses;
 }
 module.exports.reject = reject;
 
/**
 * partition: call the function on each element of an array and return a 2D array in which the first array holds the truthy values from the function call on the element and the second array holds the falsey values of the function call
 * 
 * @param {Array}: array to transform based on the function passed
 * @param {Function}: function that returns a true or false value when called on each element of the array
 */
 function partition(arr, fun) {
    const bools = [[],[]];
    for(let i = 0; i < arr.length; i++) {
      if(fun(arr[i], i, arr)) {
          bools[0].push(arr[i]);
      } else {
          bools[1].push(arr[i]);
      }
  }
  return bools;
 }
 module.exports.partition = partition;
 
/**
 * unique: returns a new array of all the duplicates removed from the <array>
 * 
 * @param {Array}: array to have the duplicates removed
 */
 function unique(arr) {
    const noDups = [];
    for(let i = 0; i < arr.length; i++) {
        if(indexOf(noDups, arr[i]) === -1) {
            noDups.push(arr[i])
        }
    }
    return noDups;
 }
 module.exports.unique = unique;
 
/**
 * map: call the function on each element of a collection and transform the collection based on the function call
 * 
 * @param {Collection}: collection to be transformed through the function call
 * @param {Function}: function the returns the element transformed
 */
 function map(col, fun) {
    let ar = [];
    each(col, function(e, i, a) {
        ar.push(fun(e, i, a));    
    });

    return ar;
     
 }
 module.exports.map = map;
 
/**
 * pluck: return an array of all the object <property> values 
 * 
 * @param {Array}: an array of objects
 * @param {Property}: property to find in each object in <array> to add to returning array
 */
 function pluck(arOfObs, prop) {
  const ar = [];
  
  for(let i = 0; i < arOfObs.length; i++) {
      ar.push(arOfObs[i][prop]);
  }
  
  return ar;
 }
 module.exports.pluck = pluck;
 
/**
 * contains: return true if <array> contains <value>
 * 
 * @param {Array}: array to looked for <value> in
 * @param {Value}: value to look for in <array>
 */
 function contains(arr, val) {
     return (indexOf(arr, val) !== -1 && val) ? true : false;
 }
 module.exports.contains = contains;
 
/**
 * every: call <function> for every element of <collection>
 *          if the call to the function to all the elements is true, return true, false otherwise
 * 
 * @param {Collection}: collection to iterate over its items and check each element's function call for true or false
 * @param {Function}: a function that returns true or false when given a value
 */
 function every(col, func) {
    let a = true;
    each(col, function(e, i, c) {
        if(func) {
            if(!func(e, i, c)) {
                a = false; 
            }
        } else { 
            if(!e) {
                a = false; 
            }
        }
    });
    return a;   
 }
 
/**
 * some: call <function> for every element of <collection>
 *       if the call to the function to at least one of the elements is true, return true, false otherwise
 * 
 * @param {Collection}: collection to iterate over its items and check each element's function call for true or false
 * @param {Function}: a function that returns true or false when given a value
 */
 function some(collection, func) {
   let a = false;
   each(collection, function(e, i, c) {
       if(func) {
           if(func(e, i, c)) {
               a = true; 
           }
       } else { 
           if(e) {
               a = true; 
           }
       }
   });
   return a;
 }
 module.exports.some = some;
 
/**
 * reduce: calls the function for every element in <collection>, setting the previousResult to equal the call to the function passing in the previous result, current element, and index into the function
 *              on the first iteration it will use seed as the previous result, if no seed is given it will use the array's first element
 *         on the final iteration call, the previousSum is returned
 * 
 * @param {Array}: array to iterate over
 * @param {Function}: function that recieves the previousSum, currentValue, and currentIndex
 * @param {Seed}: an object to start the first function call off 
 */
 function reduce(arr, func, seed) {
    let prevResult = (seed === undefined) ? arr[0] : seed;

    for(let i = 0; i < arr.length; i++) {
        if(i === 0 && !seed) {
            i++;
        }
        prevResult = func(prevResult, arr[i], i);
    }
    
    return prevResult;
 }
 module.exports.reduce = reduce;
 
/**
 * extend: takes in objects and adds all the properties to the first one recieved
 * 
 * @param {Object}: the first object to have the properies copied to
 * @params {...Objects}: the objects to have their properies copied into the first object
 */
 function extend(ob1, ob2) {
    var args = arguments;
    var allProps = ob1;

    each(args, (ele, index, col) => {
        Object.assign(allProps, ele);
        
    });
    
    return allProps;
 }
 module.exports.extend = extend;