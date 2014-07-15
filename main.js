$(function () {

  $('.real-box').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    console.log(this);
  });


  setTimeout(function(){
    $('#box-1 .real-box').addClass('disable');
    $('#box-2 .real-box').addClass('running');
  }, 1000);

});