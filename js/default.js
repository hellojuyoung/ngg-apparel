//dimmed, layer-pop 화면 높이 적용
function settingHeight() {
  var windowH = $(window).height();
  $(".layer-pop").css({
    height: windowH + "px",
  });
}

//header, footer-btn scroll 이벤트
$(window).scroll(function () {
  var windowScrollH = $(window).scrollTop();

  if (windowScrollH >= 1000) {
    $("#header").addClass("scroll");
    $(".footer-ico-group").addClass("scroll");
  } else {
    $("#header").removeClass("scroll");
    $(".footer-ico-group").removeClass("scroll");
  }

  //scrollTop
  $(".scroll-top-btn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );

    return false;
  });
});

//layer pop close
function closeLayer() {
  $(".layer-pop.on").removeClass("on");
}

//checkbox
function clickCheckbox() {
  $(".view-cart .list-table").find(".label-check").addClass("checked");

  $(".ico-check").on("click", function () {
    var findLabel = $(this).parent(".label-check");

    if (findLabel.hasClass("checked")) {
      findLabel.removeClass("checked");
      $(".all-select").removeClass("checked");
    } else {
      findLabel.addClass("checked");
    }
  });

  //전체선택
  $(".all-select .ico-check").on("click", function () {
    var allSelectCheckbox = $(this).parent(".all-select");
    var findAllCheckbox = $(this).parents().closest(".list-table").find(".label-check");

    allSelectCheckbox.toggleClass("checked");

    if (allSelectCheckbox.hasClass("checked")) {
      findAllCheckbox.removeClass("checked");
    } else {
      findAllCheckbox.addClass("checked");
    }
  });
}

//hamburger show & hide
function showHamburger() {
  $(".hamburger.icon").mouseover(function () {
    $(".hamburger-nav").addClass("on");
  });

  $(".hamburger-wrap").mouseleave(function () {
    $(".hamburger-nav").removeClass("on");
  });
}

//제품 수량 컨트롤
function controlQuantity(num, ths) {
  var thisQuantity = $(ths).siblings(".quantity");
  var thisValue = thisQuantity.val();
  var addQuantity = Number(thisValue) + num;

  if (thisValue >= 1) {
    thisValue = addQuantity;

    thisQuantity.val(thisValue);
  }
}

//run!
$(document).ready(function () {
  //href hash prevent
  $('a[href="#"]').click(function (event) {
    event.preventDefault();
  });

  settingHeight();
  clickCheckbox();
  showHamburger();
  //  controlQuantity();
});
