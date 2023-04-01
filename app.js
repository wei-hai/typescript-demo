var message = "hello world";
console.log(message);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("site");
    };
    return Site;
}());
var obj = new Site();
obj.name();
var var1 = 123;
var str1 = "abc";
var flag = true;
var arr = [1, 2, 3];
var arr1 = [1, 2];
var arr2 = ["1", "2", "3"];
var Color;
(function (Color) {
    Color[Color["r"] = 0] = "r";
    Color[Color["g"] = 1] = "g";
    Color[Color["b"] = 2] = "b";
})(Color || (Color = {}));
var c = Color.b;
function hello() {
    alert("hello");
}
