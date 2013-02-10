module.exports = dictionary

var dictionary = function () {
  return new Dictionary();
};

var Dictionary = function () {
  this.values = {};
};

Dictionary.prototype.set = function (key, value) {
  this.values[key] = value;
  return this;
};

Dictionary.prototype.get = function (key) {
  return this.values[key];
};

Dictionary.prototype.has = function (key) {
  return has(this.values, key);
};

Dictionary.prototype.each = function (fn) {
  return each(this.values, fn);
};

Dictionary.prototype.keys = function () {
  var keys = [];
  each(this.values, function (value, key) {
    keys.push(key);
  });
  return keys;
};

var has = function (obj, prop) {
  return Object.prototype.propertyIsEnumerable.call(obj, prop);
};
  
var each = function (obj, fn) {
  for (var prop in obj) {
    if (has(obj, prop)) {
      fn(obj[prop], prop);
    }
  }
};
