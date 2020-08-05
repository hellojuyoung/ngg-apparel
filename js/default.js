//dimmed, layer-pop 화면 높이 적용
function settingHeight() {
    var windowH = $(window).height();

    //console.log(windowH);
    $(".layer-pop").css({
        height: windowH + "px"
    });
}

//layer pop close
function closeLayer() {
    $(".layer-pop.on").removeClass("on");
}



//run!
$(document).ready(function () {
    settingHeight();
});