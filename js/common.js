$(document).ready(function () {

  function headerSticky() {
    if ($(window).scrollTop() > 200) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
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

  $('#all').on('click', function() {
    $('input[name="step"]').prop('checked', true);
  });

  $(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
    e.stopPropagation();
  });

});

