exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    return _.reduce(Object.keys(obj), function(memo, key) {
      return memo.concat(key + ": " + obj[key]);
    }, []);
  }
};
