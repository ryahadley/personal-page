$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $(".box").finish().animate({
            left: "-=50"
        });
        break;
    case 38:    //up arrow key
        $(".box").finish().animate({
            top: "-=10"
        });
        break;
    case 39:    //right arrow key
        $(".box").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    //bottom arrow key
        $('html, body').css({
        'overflow': 'hidden',
        'height': '100%'
        });
        
        $(".box").finish().animate({
            top: "+=10"
        });
        break;
    }
});

$(document).keyup(function(e) {
   $('html, body').css({
     'overflow': 'auto',
     'height': 'auto'
    });
});

var overlaps = (function () {
    function getPositions( elem ) {
        var pos, width, height;
        pos = $( elem ).position();
        width = $( elem ).width();
        height = $( elem ).height();
        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
    }

    function comparePositions( p1, p2 ) {
        var r1, r2;
        r1 = p1[0] < p2[0] ? p1 : p2;
        r2 = p1[0] < p2[0] ? p2 : p1;
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function ( a, b ) {
        var pos1 = getPositions( a ),
            pos2 = getPositions( b );
        return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
    };
})();

$(function () {
    var area = $( '.person-links' )[0],
        box = $( '.box' )[0],
        html;
    
    html = $( area ).children().not( box ).map( function ( i ) {
        return '<p>Red box + Box ' + ( i + 1 ) + ' = ' + overlaps( box, this ) + '</p>';
    }).get().join( '' );

    $( 'body' ).append( html );
});

