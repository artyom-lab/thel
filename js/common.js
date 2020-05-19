$(document).ready(function () {

  function headerSticky() {
    if ($(window).scrollTop() > 0) {
      $('.navbar.fixed-top').addClass("sticky");
    } else {
      $('.navbar.fixed-top').removeClass("sticky");
    }
  };

  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();

  Waves.attach('.btn', ['waves-dark']);
  Waves.init();

  $('#collapse-1').on('click', function() {
    $('#collapse-1-1').toggleClass('active');
  });

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

});

