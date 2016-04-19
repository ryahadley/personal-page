  var movementSpeed = 30;
  var topMovementSpeed = 10;
  var navvv = $('.header');
  var character = $('.character').offset();

  var leftMarginLimit = parseInt($('.character').parent().css('width')) - 100 - parseInt($('.character').css('width'));
  var topMarginLimit = parseInt($('.character').parent().css('height')) - 20 - parseInt($('.character').css('height'));
  var bottomMarginLimit = parseInt(navvv.offset().top + parseInt(navvv.height()));

  var leftMargin = parseInt($('.character').css('margin-left'));
  var topMargin = parseInt($('.character').css('margin-top'));
  var bottomMargin = parseInt(character.top + parseInt($('.character').height()));

  $(document).keydown(function(key) {

      // LEFT
      if (key.which == 37)
      {
          leftMargin -=movementSpeed;
          if (leftMargin < 0){leftMargin = 0;}
          if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
          $('.character').css({'margin-left': leftMargin+'px'});
      }

      // RIGHT
      if (key.which == 39)
      {
          leftMargin +=movementSpeed;
          if (leftMargin < 0){leftMargin = 0;}
          if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
          $('.character').css({'margin-left': leftMargin+'px'});
      }

      // UP
      if (key.which == 38)
      {
          key.preventDefault();
          $(".character").finish().animate({
              top: "-=20"
          });
          // $('.character').css({'margin-top': topMargin+'px'});
      }

      // DOWN
      if (key.which == 40)
      {
          key.preventDefault();
          $(".character").finish().animate({
              top: "+=20"
          });
          // $('.character').css({'margin-bottom': bottomMargin+'px'});
      }
      if (key.which == 32)
      {
        key.preventDefault();
        $('.character').css({'top': '10px'})
        //$('.character').css({'left': '40px'});
      }
  });

var linksPosition = setInterval(function() {

function collision($div1, $div2) {
     var x1 = $div1.offset().left;
     var y1 = $div1.offset().top;
     var h1 = $div1.outerHeight(true);
     var w1 = $div1.outerWidth(true);
     var b1 = y1 + h1;
     var r1 = x1 + w1;
     var x2 = $div2.offset().left;
     var y2 = $div2.offset().top;
     var h2 = $div2.outerHeight(true);
     var w2 = $div2.outerWidth(true);
     var b2 = y2 + h2;
     var r2 = x2 + w2;

     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
     return true;
   }
var reset = function() {
  $('.character').css({'top': '10px'});
}

if( collision($('.character'), $('.aboutMe')) &&
    window.location.href !== "127.0.0.1:8080/#/aboutMe") {
    window.location.assign("http://127.0.0.1:8080/#/aboutMe");
    reset();
}
if( collision($('.character'), $('.projects'))  &&
    window.location.href !== "127.0.0.1:8080/#/projects") {
    window.location.assign("http://127.0.0.1:8080/#/projects");
    reset();
}
if( collision($('.character'), $('.interests'))  &&
    window.location.href !== "127.0.0.1:8080/#/interests") {
    window.location.assign("http://127.0.0.1:8080/#/interests");
    reset();
}
if( collision($('.character'), $('.goals'))  &&
    window.location.href !== "127.0.0.1:8080/#/goals") {
    window.location.assign("http://127.0.0.1:8080/#/goals");
    reset();
}
if( collision($('.character'), $('.contactMe'))  &&
    window.location.href !== "127.0.0.1:8080/#/contact") {
    window.location.assign("http://127.0.0.1:8080/#/contact");
    reset();
}
}, 500);
