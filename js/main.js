// aos.js 
AOS.init({
  offset: 300,
  duration: 500,
  delay: 200,
  easing: 'ease-in',
  once: false,
  mirror: false,
  anchorPlacement: 'center-center',
});

// hamburger
$(function () {
  $('#js-hamburger').click(function () {
    $('body').toggleClass('is-drawerActive')
  
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', true)
      $('#js-header__menu').attr('area-hidden','false')
    } else {
      $(this).attr('aria-expanded', false)
      $('#js-header__menu').attr('area-hidden','true')
    }
  })
  $('#js-drawer-background').click(function () {
    $('body').removeClass('is-drawerActive')
    $('#js-hamburger').attr('aria-expanded','false')
    $('#js-header__menu').attr('area-hidden','true')
  })
  $('.header__list a[href]').on('click', function() {
    $('#js-hamburger').trigger('click');
  });

  // accordion
  $('.js-accordion__title').on('click', function () {
    $(this).next().toggleClass('is-open');
    $(this).toggleClass('is-active');
  });

  // go to thanks.html after sent form 
  $('.js-form').submit(function (event) {
    var formData = $('.js-form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc8ooKs5AYtVDn4GfA96xm6cwQxyiDRgOGzFovtSXBvuKgn8w/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          window.location.href = "thanks.html";
        },
        200: function () {
          $(".js-false").slideDown();
        }
      }
    });
    event.preventDefault();
  });

  // make it impossible to send if the contact form is blank
  const $submitBtn = $('.js-submit')
  $('.js-form input,.js-form textarea').on('change', function () {
    if (
      $('.js-form input[type="text"]').val() !== "" &&
      $('.js-form input[type="email"]').val() !== "" &&
      $('.js-form input[type="checkbox"]').val() !== "" &&
      $('.js-form #privacy-check').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

  // smooth scroll 
  $('a[href^="#"]').click(function(){
    var headerHight = 94;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - headerHight;

    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

