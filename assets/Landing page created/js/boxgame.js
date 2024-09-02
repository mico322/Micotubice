
var boxRoot, count = 1,
intentos = 3,
puedo = !1;
! function () {
"use strict";
boxRoot = {
    _init: function () {
        setTimeout(function () {
            jQuery("#p_modal1").modal(modalOptions)
        }, 1e3), jQuery(".try").on("click", function () {
            puedo && count <= intentos && (jQuery(this).hasClass("abierta") || (puedo = !1, jQuery(".circle-loader").removeClass("load-complete"), jQuery(".checkmark").css("display", "none"), jQuery(this).addClass("abierta"), 2 == count ? (jQuery(this).addClass("premiazo"), setTimeout(function () {
                jQuery(".div_img_gift, .img_gift").fadeIn("slow", function () {
                    setTimeout(function () {
                        jQuery("#p_modal3").modal(modalOptions), jQuery(".circle-loader").addClass("load-complete"), jQuery(".checkmark").css("display", "block")
                    }, 1500)
                })
            }, 4e3)) : (count++ , intentos-- , jQuery("#num_intentos").html(intentos), setTimeout(function () {
                jQuery("#p_modal2").modal(modalOptions), setTimeout(function () {
                    jQuery(".circle-loader").addClass("load-complete"), jQuery(".checkmark").css("display", "block"), puedo = !0
                }, 1e3)
            }, 2e3))))
        }), jQuery("#p_modal_button1").on("click", function (e) {
            e.stopPropagation(), jQuery("#p_modal1").modal("hide"), puedo = !0
        }), jQuery("#p_modal_button2").on("click", function (e) {
            e.stopPropagation(), jQuery("#p_modal2").modal("hide")
        }), jQuery("#p_modal_button3").on("click", function (e) {
            e.stopPropagation(), jQuery("#p_modal3").modal("hide"), stepfinal(), goToUrlFinish()
        })
    }
}, jQuery(document).ready(function () {
    "undefined" == typeof box_ini && 0 < jQuery("#boxes").length && boxRoot._init()
})
}();

var attempts = 0;
$('.box').click(function(e) {
    e.preventDefault();
    attempts ++ ;
    if (attempts == 1) {
    $(this).addClass('box-open');
        setTimeout(function(){
            $('#p_modal2').modal('show');
            $(".circle-loader").addClass("load-complete");
            $(".checkmark").css("display", "block")
        },500)
    } else if (attempts == 2){
        $(this).addClass('box-win');
        setTimeout(function(){
            $('#p_modal3').modal('show');
        },800)
    }
});