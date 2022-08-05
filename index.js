var length = 1
function fn() {
  console.log(this.length)
}
var obj = {
  length: 100,
  action: function(callback) {
    callback();
    arguments[0]();
    var foo = arguments[0]
    foo()
    this.foo2 = arguments[0]
    this.foo2()
  }
}
var arr1 = [1, 2, 3, 4]
obj.action(fn, ...arr1)