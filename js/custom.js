$(document).ready(function() {
    var min_height = $(window).height() - ($(".custom_header").height() + $(".custom_footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function() {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    let i = 0;
    if(i==0){
     $('.open-menu').on('click', function() {
         i=1;
         $('.overlay').addClass('open');
         console.log('i - 0');
     });
    }
    else if(i==1){
     $('.open-menu').on('click', function() {
         i=0;
         $('.overlay').removeClass('open');
         console.log('i - 1');
     });
    }

    $('.form-select2').select2({
        width: 'resolve'
    });

    $('.mega-all-btn').click(function() {
        var mega_Btn = $('.mega-all-btn');
        if (mega_Btn.hasClass('match-show')) {
            $('.mega-btn-text').text('All');
        } else {
            $('.mega-btn-text').text('Close');
        }
    });

    $(window).scroll(function() {
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > $('.home-section').height()) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top', navHeight + "px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top', 0);
        }
    });
    $('.jb_front_nav_close button').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    $(".btn-filter").click(function() {

        if ($(this).hasClass('match-show')) {
            $(this).removeClass('match-show');
        } else {
            $(this).addClass('match-show');
        }
        $(".matches").slideToggle(); //add only toggle when not want slide
    });
    // select2 dropdown set in all form control and placeholder
    var placeholder = $('.form-control-select2').data('placeholder');
    // var abc = "<span class='text-yellow'>*</span>";
    // var placcc = placeholder.append(abc);
    // console.log(placcc,"rw5rwsdsfv");

    // console.log(placeholder,"Fssdfgttttttt");

    // mousewheel scroll js start
    jQuery(function($) {
        $.fn.hScroll = function(amount) {
            amount = amount || 120;
            $(this).bind("DOMMouseScroll mousewheel", function(event) {
                var oEvent = event.originalEvent,
                    direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                    position = $(this).scrollLeft();
                position += direction > 0 ? -amount : amount;
                $(this).scrollLeft(position);
                event.preventDefault();
            })
        };
    });

    $(document).ready(function() {
        $('.mousewheel').hScroll(60); // You can pass (optionally) scrolling amount
    });
    // mousewheel scroll js start

    $('.form-control-select2').select2({
        placeholder: placeholder,
    });
    // select2 dropdown set in all form control and placeholder

    //SET MIN HEIGHT OF PAGE CONTENT

    // Display alert message after hiding paragraphs
    $(".hide-btn").click(function() {
        $(".search-band").hide("fast", function() {
            // Code to be executed
        });
    });

    // Display alert message after showing paragraphs
    $(".show-btn").click(function() {
        $(".search-band").show("fast", function() {
            // Code to be executed
            $('#dish_name').focus();
        });
    });
    // $(".hide-quantity").click(function(){
    //     $(".quantity").hide("slow", function(){
    //     });
    // });

    // Display alert message after showing paragraphs
    // $(".show-quantity").click(function(){
    //     $(".quantity").show("slow", function(){
    //         $(".show-quantity").hide();

    //     });
    // });
    $(".show-quantity").click(function() {
        $(".show-quantity").hide();
        $(".quantity").show();
    });
    $(".hide-quantity").click(function() {
        $(".show-quantity").show();
        $(".quantity").hide();
    });
    $('#file-upload').change(function() {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $('#filename').html(filename);    
    });
    // ------------------------------------ VIDEO JS START ------------------------------------

    // ------------------- CLICK EVENTS OF VIDEO POPUP START -------------------
    // // VIDEO PLAY/PAUSE BUTTON
    // $(".play-btn").click(function () {
    //     videoPlayPause();
    //     console.log("play-btn click called");
    // });

    // // VIDEO CLICK EVENT
    // $(".myVideo").click(function () {
    //     videoPlayPause();
    //     console.log("video click called");
    // });

    // // VIDEO PLAY ICON CLICK EVENT
    // $(".video-icon-content").click(function () {
    //     myVideo.play();
    //     console.log("on video play icon click called");
    //     $(".video-icon-content").css('display', 'none');
    //     $(".play-btn > i").addClass('pauseicon');
    //     $(".play-btn > i").removeClass('playicon');
    // });

    // // POPUP CLOSE BUTTON CLICK EVENT
    // $(".popupclosebutton").click(function () {
    //     myVideo.pause();
    //     console.log("popup close called click called");
    //     $(".play-btn > i").addClass('playicon');
    //     $(".play-btn > i").removeClass('pauseicon');
    // });

    // ------------------- CLICK EVENTS OF VIDEO POPUP END -------------------

    var vid = $('.myVideo')[0];

    vid.ontimeupdate = function() {
        var percentage = (vid.currentTime / vid.duration) * 100;
        $(".custom-seekbar span").css("width", percentage + "%");
        $(".current-video-time").text(parseInt(vid.currentTime));
        // 
        // function printCurrent() {
        var mind = vid.currentTime % (60 * 60);
        var minutes = Math.floor(mind / 60);
        if (minutes <= 9) {
            minutes = "0" + minutes;
        }
        var secd = mind % 60;
        var seconds = Math.ceil(secd);
        if (seconds <= 9) {
            seconds = "0" + seconds;
        }
        $(".current-video-time").text(minutes + ":" + seconds);
        // };
    };

    $(".custom-seekbar").on("click", function(e) {
        var offset = $(this).offset();
        var left = (e.pageX - offset.left);
        var totalWidth = $(".custom-seekbar").width();
        var percentage = (left / totalWidth);
        var vidTime = vid.duration * percentage;
        vid.currentTime = vidTime;
    });

    // ------------------------------------ VIDEO JS END ------------------------------------

});

function videoPlayPause() {
    if (myVideo.paused) {
        myVideo.play();
        $(".play-btn > i").addClass('pauseicon');
        $(".play-btn > i").removeClass('playicon');
        var vid = $('.myVideo')[0];
        var mind = vid.duration % (60 * 60);
        var minutes = Math.floor(mind / 60);
        var secd = mind % 60;
        var seconds = Math.ceil(secd);
        $(".duration-video-time").text(minutes + ":" + seconds);
        $(".video-icon-content").css('display', 'none');
    } else if (myVideo.play) {
        myVideo.pause();
        $(".play-btn > i").addClass('playicon');
        $(".play-btn > i").removeClass('pauseicon');
        $(".video-icon-content").css('display', 'block');
    }
}