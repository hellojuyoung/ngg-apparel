//dimmed, layer-pop 화면 높이 적용
function settingHeight() {
    var windowH = $(window).height();

    //console.log(windowH);
    $('.layer-pop').css({
        height: windowH + "px"
    });
}

$(document).ready(function () {
    settingHeight();

});