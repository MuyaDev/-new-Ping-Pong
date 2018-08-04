//Business-Logic//
var PingPong = function (num) {
    var resultArray = [];
    for (var num = 1; num <= num; num++) {
      if (index % 3 === 0) {
        resultArray.push("ping");
      } else if (index % 5 === 0) {
        resultArray.push("pong");
      } else if (index % 15 === 0) {
        resultArray.push("pingpong");
      } else {
        resultArray.push(num);
      } {
        return resultArray
      }
    }


    //User-Logic//
    $(document).ready(function () {
      $("form#Ping-Pong").submit(function (event) {
        event.preventDefault();
        $('ul#output').empty();
        var num = parseInt($("input#number").val());
        var resultArray = PingPong(num);
        $(".num").text(num);
        for (num = 0; num < resultArray.length; num += 1) {
          $("ul#uList").append('<li>' + resultArray[num] + ",/li>");
        }
      });
    });