$(document).ready(function(){

  if ( $(window).width() > 768 ) {
    new WOW().init();
  }
  $(".help").click(function(){
    $(".modal-info").addClass("active");
    $("body").toggleClass("scroll");
  })
  $(".district .button").click(function(){
    $(".modal-info").addClass("active");
    var sel = $("select#select").val();
    $(".modal-info .left img").attr("src", "img/map/" + sel + ".png");
    $("body").toggleClass("scroll");
  })
  $(".modal-info .close").click(function(){
    $(".modal-info").removeClass("active");
    $("body").toggleClass("scroll");
  })

  $(".form-trigger").click(function(){
    $(".popup-forma").addClass("active");
    $("body").toggleClass("scroll");
  });
  $(".form-trigger2").click(function(){
    $("#popup-forma").addClass("active");
    $("body").toggleClass("scroll");
  });
  $(".popup-forma .close-bg, .popup-forma .close").click(function(){
    $(".popup-forma").removeClass("active");
    $("body").toggleClass("scroll");
  });
  $(".pay_buy").click(function(){
    $(".payment").addClass("active");
    $("body").toggleClass("scroll");
  });
  $(".payment .close").click(function(){
    $(".payment").removeClass("active");
    $("body").toggleClass("scroll");
  });

  $(".product .help").click(function(){
    var img = $(this).parents(".product").find(".top .img").attr("src");
    var info = $(this).parents(".product").find(".modal-info1 .right").html();
    $(".modal-info .left img").attr("src", img);
    $(".modal-info .right").html(info);
  });

  $("body").on("click","a.button", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();

  //забираем идентификатор бока с атрибута href
  var id = $(this).attr('href'),

  //узнаем высоту от начала страницы до блока на который ссылается якорь
  top = $(id).offset().top;

  //анимируем переход на расстояние - top за 1500 мс
  $('body,html').animate({scrollTop: top}, 1500);
  });

  $(".popup-forma .button").click(function(){
    $(".load").addClass("load2");
    $(".popup-forma .bag").css("margin-left", "-100%");
    $(this).attr("form", "form");
  });
  $(".popup-forma .prev").click(function(){
    $(".load").removeClass("load2");
    $(".popup-forma .bag").css("margin-left", "0%");
    $(this).attr("form", "");
  });
  $(".product .bottom .button").click(function(){
    $(this).addClass("buy").find("span").text("✔");
    $(".basket").addClass("active");
  })
});