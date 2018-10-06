$(document).ready(function(){
    var subDiv1Width =  $("#section1 > #subDiv1").width();
    
    section1SubDivSegment = $(".container").width() - (subDiv1Width + 60);

    $("#section1 > #subDiv2").css('width', section1SubDivSegment);
    $("#section3 > #subDiv2").css('width', section1SubDivSegment);

    //$('[data-toggle="tooltip"]').tooltip();

    var section2Segmentwidth = (($("#section1 > #subDiv2").width() + 20))/4;

    $("#section2 > .subDiv2").each(function() {
        $(this).css('width', section2Segmentwidth);
    });

    var len = section1SubDivSegment - (30 + parseInt($('.numberCircle').css('marginLeft').match(/\d+/)[0]) + $('.numberCircle').width() +parseInt($('.playBox').css('marginLeft').match(/\d+/)[0]) + $('.playBox').width() + parseInt($('.row1').css('marginLeft').match(/\d+/)[0]));
    $('.row1').css('width', len);

    var len = section1SubDivSegment - (30 + parseInt($('.numberCircle').css('marginLeft').match(/\d+/)[0]) + $('.numberCircle').width() + parseInt($('.row1').css('marginLeft').match(/\d+/)[0]));
    $('.row2').css('width', len);

});

$(window).resize(function() {
    var subDiv1Width =  $("#section1 > #subDiv1").width();
    console.log("width: " + subDiv1Width);
    section1SubDivSegment = $(".container").width() - (subDiv1Width + 60);

    $("#section1 > #subDiv2").css('width', section1SubDivSegment);
    $("#section3 > #subDiv2").css('width', section1SubDivSegment);

    var section2Segmentwidth = (($("#section1 > #subDiv2").width() + 20))/4;

    $("#section2 > .subDiv2").each(function() {
        $(this).css('width', section2Segmentwidth);
    });

    var len = section1SubDivSegment - (30 + parseInt($('.numberCircle').css('marginLeft').match(/\d+/)[0]) + $('.numberCircle').width() +parseInt($('.playBox').css('marginLeft').match(/\d+/)[0]) + $('.playBox').width() + parseInt($('.row1').css('marginLeft').match(/\d+/)[0]));
    $('.row1').css('width', len);

    debugger;

    var len = section1SubDivSegment - (30 + parseInt($('.numberCircle').css('marginLeft').match(/\d+/)[0]) + $('.numberCircle').width() + parseInt($('.row1').css('marginLeft').match(/\d+/)[0]));
    $('.row2').css('width', len);
    
});