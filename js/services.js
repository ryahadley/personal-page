angular.module('app').service('appService', function() {

  var comments = [];
  var storedComments;
  this.addText = function(message) {
      comments.push(message);
  }
  setInterval(function() {
  localStorage.setItem("storedComments", JSON.stringify(comments));
  storedComments = JSON.parse(localStorage.getItem("storedComments"));
  }, 500);

  this.showComments = function() {
    return comments;
  }

  this.typeout = function() {
      var str = 'Coming Soon...';
      var split = str.split('');
      var counter = 0;

      window.setTimeout(function() {
      var SI = setInterval(function() {

        var div = $('.coming-soon');

        div.append(split[counter])
        counter++;
        if(counter==str.length) {
          clearInterval(SI)
        }
      }, 200)
      }, 2000);
    }
})
