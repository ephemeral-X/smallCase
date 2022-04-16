"use strict";

var size = 65; // 六列数字

var columns = Array.from(document.getElementsByClassName('column'));
var class_list = ['visible', 'near', 'far', 'far', 'distant', 'distant']; // 获取当前时间

function getClock() {
  var d = new Date();
  var hour = d.getHours();
  hour = hour < 10 ? '0' + hour : hour;
  var minute = d.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  var second = d.getSeconds();
  second = second < 10 ? '0' + second : second;
  return hour + '' + minute + '' + second;
} // 获取对应样式名


function getClass(n, i) {
  return class_list.find(function (element, index) {
    return i - index === n || i + index === n;
  }) || '';
} // 定时器


setInterval(function () {
  var c = getClock();
  columns.forEach(function (element, index) {
    var n = parseInt(c[index]);
    var offset = -n * size; // 偏移量

    element.style.transform = "translateY(calc(50vh + ".concat(offset, "px))"); // .colums的子元素转为数组遍历

    Array.from(element.children).forEach(function (ele, i) {
      var newName = getClass(n, i);
      ele.className = "num ".concat(newName);
    });
  });
}, 1000);