exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // if function invocation includes dirName argument, search the
    // file directory for the requested dirName
    var fileList = [];
    if (dirName) {
      if (data.dir === dirName) {
        fileList = fileList.concat(retrieveFiles(data));
      } else {
        _.each(data.files, function(item) {
          if (typeof item === "object") {
            fileList = fileList.concat(recursionAnswers.listFiles(item, dirName));
          }
        });
      }
    // if no dirName is provided, simply retrieve all files
    } else {
      fileList = fileList.concat(retrieveFiles(data));
    }
    return fileList;

    // retrieveFiles returns all file names in an array
    function retrieveFiles(data) {
      var fileList = [];
      _.each(data.files, function(item) {
        if (typeof item === "string") {
          fileList.push(item);
        } else {
          fileList = fileList.concat(recursionAnswers.listFiles(item));
        }
      });
      return fileList;
    }
  },

  permute: function(arr) {
    var permutations = [];
    findPermutations(arr, []);
    return permutations;

    function findPermutations(subArr, perm) {
      if (!subArr.length) {
        permutations.push(perm);
      } else {
        _.each(subArr, function(val, idx) {
          var newArr = subArr.slice(0, idx).concat(subArr.slice(idx+1, subArr.length));
          findPermutations(newArr, perm.concat(val));
        });
      }
    };
  },

  fibonacci: function(n) {
    if (n === 1 || n === 2) return 1;
    return recursionAnswers.fibonacci(n - 1) + recursionAnswers.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    var validSeqs = [];
    findSequences(1, 0, '(');
    return validSeqs;

    function findSequences(numLeftParens, numRightParens, sequence) {
      if (numLeftParens === n && numRightParens === n) {
        validSeqs.push(sequence);
      } else {
        if (numRightParens < numLeftParens) {
          findSequences(numLeftParens, numRightParens + 1, sequence + ')');
        }
        if (numLeftParens < n) {
          findSequences(numLeftParens + 1, numRightParens, sequence + '(');
        }
      }
    }
  }
};
