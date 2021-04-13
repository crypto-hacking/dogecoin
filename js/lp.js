var usernames=[{id:"abesse0"},{id:"jgyorffy1"},{id:"zstebbings2"},{id:"rpakenham3"},{id:"vclempton4"},{id:"jlosselyong5"},{id:"tocorhane6"},{id:"pdradey7"},{id:"bosheeryne8"},{id:"akyndred9"},{id:"gmccaghana"},{id:"hcolhounb"},{id:"glampec"},{id:"raburrowd"},{id:"cbeckeye"},{id:"jleghornf"},{id:"agurnellg"},{id:"dtineh"},{id:"adawkinsi"},{id:"fdodsonj"},{id:"dcorkhillk"},{id:"ggraynel"},{id:"hzisnerosm"},{id:"rserjeantn"},{id:"llongmireo"},{id:"brobertsp"},{id:"jwatermanq"},{id:"dmarzelor"},{id:"lgoddmans"},{id:"kudallt"},{id:"dmccloyu"},{id:"jjakewayv"},{id:"abilbeew"},{id:"bdunstanx"},{id:"acaldery"},{id:"mendricciz"},{id:"bkeates10"},{id:"jgerrill11"},{id:"jfluit12"},{id:"wwhitsey13"},{id:"tbogaert14"},{id:"kcogar15"},{id:"lclemas16"},{id:"whadingham17"},{id:"amacieja18"},{id:"bmckendo19"},{id:"bcappineer1a"},{id:"amacgraith1b"},{id:"dklaesson1c"},{id:"ssor1d"},{id:"avowdon1e"},{id:"hsaxon1f"},{id:"lbingell1g"},{id:"ascurry1h"},{id:"vdrinkhall1i"},{id:"mklamp1j"},{id:"oflag1k"},{id:"mmacpadene1l"},{id:"showling1m"},{id:"btortice1n"},{id:"gpaddeley1o"},{id:"trustadge1p"},{id:"bmechic1q"},{id:"fweeks1r"},{id:"hbrower1s"},{id:"sgendricke1t"},{id:"escola1u"},{id:"bbadder1v"},{id:"kklaesson1w"},{id:"klistone1x"},{id:"cmerredy1y"},{id:"wkalb1z"},{id:"wkemmish20"},{id:"ctrout21"},{id:"fwestcarr22"},{id:"mapedaile23"},{id:"hlittlefair24"},{id:"bquickfall25"},{id:"dmacfadden26"},{id:"hlyes27"},{id:"vyemm28"},{id:"pwoodson29"},{id:"sbaldinotti2a"},{id:"csmallwood2b"},{id:"pthormann2c"},{id:"rrentelll2d"},{id:"lbarrick2e"},{id:"bcarr2f"},{id:"hcudbertson2g"},{id:"rswallow2h"},{id:"jlavens2i"},{id:"sshingler2j"},{id:"plebarr2k"},{id:"bgaish2l"},{id:"tleethem2m"},{id:"lvignal2n"},{id:"hdobey2o"},{id:"pbrigstock2p"},{id:"ijoontjes2q"},{id:"tkulis2r"}];

/**
 * Get random username
 * @return {[type]} [description]
 */
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
}

/**
 * Array of requancy times
 * @type {Array}
 */
var iFrequency = [3000, 5000, 2750, 4000, 4500, 3500];


function startLoop() {

    /**
     * Get random
     */
    var rand = iFrequency[Math.floor(Math.random() * iFrequency.length)];

    /**
     * Set interval with random time
     */
    myInterval = setInterval( "activity()", rand );  // run

}



function activity(){

    $('.activity').removeClass('hide-activity');

    $('.activity').html('<span class="usr">@' + usernames.randomElement().id + '</span> ' + activity_text);

    setTimeout(function() {
        $('.activity').addClass('hide-activity');
    }, 2000);

}

startLoop();

/**
 * Popup
 */
$('.generator').magnificPopup({
    delegate: 'button',
    type: 'inline',
    preloader: false,
    callbacks: {
      open: function(){

          LauncheGenerator()

      }
    }
});

/**
 * Move Progress Bar
 */
function moveProgressBar() {

      /**
       * Reset Progress Bar
       */
      $('.progress-bar').stop().animate({
          left: '0px'
      }, 1000);

      /**
       * Set progress bar 100% after delay
       */
      setTimeout(function() {

            var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
            var getProgressWrapWidth = $('.progress-wrap').width();
            var progressTotal = getPercent * getProgressWrapWidth;

            $('.progress-bar').stop().animate({
                left: progressTotal
            }, 2000);

      }, 1500);

}

var console_delay_freq = [4000, 5000, 5500, 3500, 4000];

/**
 * Launce Generator
 */
function LauncheGenerator(){

    console_delay = 0;

    console.log('console open');

    $.each(console_text, function(index, value){


        var username = $( "input[name='username']").val();

        var value = value.replace("{user}", "<span class='username-console'>" + username + "</span>");

        console.log(username);

        var console_delay_freq_random = console_delay_freq[Math.floor(Math.random() * console_delay_freq.length)];

        setTimeout(function() {

            $('.console_text').html(value);

            moveProgressBar();

        }, console_delay);



        console_delay += console_delay_freq_random;


        // redirect after last one
        if(index == console_text.length-1){

            setTimeout(function() {

                $.each(inputs, function(index, value){

                      if(value.name != "username"){
                          if(value.icon != null){

                              $('#pending-items').append('<li><img src="' + icon_preset + value.icon + '" class="icon-verify" /> ' + value.title + ': ' + $( "input[name=" + value.name + "]").val() + '</li>');

                          } else {

                              $('#pending-items').append('<li>' + value.title + ': ' + $( "input[name=" + value.name + "]").val() + '</li>');

                          }
                      }

                });

                $('.first').hide();
                $('.verify').show();

            }, console_delay + 1500);

        }

    });


}

/**
 * Get Date
 */
var date_now =  moment().format('dddd MMMM Do YYYY');

/**
 * Show date in div
 * @param  {[type]} show [description]
 * @return {[type]}      [description]
 */
$(".show-date").html(date_now);
