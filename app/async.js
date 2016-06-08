exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve) {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(function(resolve, reject) {
      $.get('http://localhost:4444' + url, function(data) {
        var nameData = _.reduce(data.people, function(memo, obj) {
          return memo.concat(obj.name);
        }, []);
        resolve(_.sortBy(nameData));
      });
    });
  }
};
