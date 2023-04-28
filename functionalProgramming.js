// This is a classical Example of Functional Programming

function mapForEach(arr, fn) {
  var newArr = []
  for(var i = 0;i<arr.length;i++) {
    newArr.push(fn(arr[i]));
  }

  return newArr;
}


var arr = [1,2,3];

console.log(arr);

var arr2 = mapForEach(arr, function (item) {
  return item*2;
})

console.log(arr2);

var arr3 = mapForEach(arr, function (item) {
  return item > 2;
})

console.log(arr3);


var checkPastLimit = function (limiter, item) {
  return item > limiter
}

var arr4 = mapForEach(arr, checkPastLimit.bind(this, 1))

console.log(arr4);

