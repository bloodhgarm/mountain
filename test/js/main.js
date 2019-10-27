$(document).ready(function(){
    function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        return {
          'total': t,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }
      function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');
      
        function updateClock() {
          var t = getTimeRemaining(endtime);
      
          hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
          minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
          secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      
          if (t.total <= 0) {
            clearInterval(timeinterval);
          }
        }
      
        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
      }
      var deadline="January 01 2018 00:00:00 GMT+0300";
      var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
      initializeClock('countdown', deadline);
      $('.close').click(function () {
        $('.popup').hide();
      });
      
      function showModal() {
          $('#modal').css('display', 'flex').delay(10000).fadeOut('slow', function() {
              setTimeout(showModal,  10000);
              
          });
      }
      setTimeout(showModal, 10000);
      
  });