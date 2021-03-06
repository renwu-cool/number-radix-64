// Generated by CoffeeScript 2.5.0
(function() {
  var SYMBOL, SYMBOL_LEN, toString;

  SYMBOL = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_".split("");

  SYMBOL_LEN = SYMBOL.length;

  toString = Number.prototype.toString;

  Number.prototype.toString = function(radix) {
    var conversion, decimal;
    if (radix && radix > 36 && radix <= SYMBOL_LEN) {
      decimal = this;
      conversion = "";
      while (decimal >= 1) {
        conversion = SYMBOL[decimal - (radix * Math.floor(decimal / radix))] + conversion;
        decimal = Math.floor(decimal / radix);
      }
      return conversion;
    } else {
      return toString.call(this, radix);
    }
  };

  console.log(9123341..toString(64));

}).call(this);
