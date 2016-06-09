exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return str + ", " + str2;
    };
  },

  makeClosures: function(arr, fn) {
    return _.reduce(arr, function(memo, num) {
      return memo.concat(function() {
        return fn(num);
      });
    }, []);
  },

  partial: function(fn, str1, str2) {
    return fn.bind(null, str1, str2);
  },

  useArguments: function() {
    var args = Array.prototype.slice.call(arguments);
    return _.reduce(arguments, function(memo, num) {
      return memo + num;
    }, 0);
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments);
    return fn.apply(null, _.rest(args));
  },

  partialUsingArguments: function(fn) {
    var args1 = Array.prototype.slice.call(arguments);
    return function() {
      var args2 = Array.prototype.slice.call(arguments);
      return fn.apply(null, _.rest(args1).concat(args2));
    };
  },

  curryIt: function(fn) {
    var counter = fn.length;
    var args = [];
    return function curry(val) {
      counter--;
      args.push(val);
      if (counter === 0) {
        return fn.apply(null, args);
      } else {
        return curry;
      }
    };
  }
};
