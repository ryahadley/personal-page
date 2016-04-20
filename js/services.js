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

        var div = $('.typewriter-color');

        div.append(split[counter])
        counter++;
        if(counter==str.length) {
          clearInterval(SI)
        }
      }, 200)
      }, 2000);
  }

  this.flashyfuck = function() {
    var colors = ['green', 'red', 'blue', 'yellow', 'orange', 'black', 'white', 'purple'];
    var $container = $('.typewriter-color');
    window.setTimeout(function() {
    setInterval(function() {

        var rand = Math.floor(Math.random() * 10);

        $container.css("background", colors[rand]);

    }, 30);
  }, 8000);
}

    $(function() {
      $( ".character" ).draggable();
    })
});
