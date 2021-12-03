  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navLinks = document.getElementsByClassName('navlinks')[0]

  toggleButton.addEventListener('click', () => {
      navLinks.classList.toggle('active')
  })
  //slidcontainer//
  var slideIndex = 1;

  var myTimer;

  var slideshowContainer;

  window.addEventListener("load", function () {
      showSlides(slideIndex);
      myTimer = setInterval(function () {
          plusSlides(1)
      }, 4000);

      //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
      slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

      //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
      // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

      slideshowContainer.addEventListener('mouseenter', pause)
      slideshowContainer.addEventListener('mouseleave', resume)
  })

  // NEXT AND PREVIOUS CONTROL
  function plusSlides(n) {
      clearInterval(myTimer);
      if (n < 0) {
          showSlides(slideIndex -= 1);
      } else {
          showSlides(slideIndex += 1);
      }

      //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

      if (n === -1) {
          myTimer = setInterval(function () {
              plusSlides(n + 2)
          }, 4000);
      } else {
          myTimer = setInterval(function () {
              plusSlides(n + 1)
          }, 4000);
      }
  }

  //Controls the current slide and resets interval if needed
  function currentSlide(n) {
      clearInterval(myTimer);
      myTimer = setInterval(function () {
          plusSlides(n + 1)
      }, 4000);
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
          slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }
  //button//
  function openTab(url) {
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      link.remove();
  }


  //countdown//

  pause = () => {
      clearInterval(myTimer);
  }

  resume = () => {
      clearInterval(myTimer);
      myTimer = setInterval(function () {
          plusSlides(slideIndex)
      }, 4000);
  }
  let days = 202; //starting number of days
  let hours = 0; // starting number of hours
  let minutes = 2; // starting number of minutes
  let seconds = 5; // starting number of seconds

  // converts all to seconds
  let totalSeconds =
      days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

  //temporary seconds holder
  let tempSeconds = totalSeconds;

  // calculates number of days, hours, minutes and seconds from a given number of seconds
  const convert = (value, inSeconds) => {
      if (value > inSeconds) {
          let x = value % inSeconds;
          tempSeconds = x;
          return (value - x) / inSeconds;
      } else {
          return 0;
      }
  };

  //sets seconds
  const setSeconds = (s) => {
      document.querySelector("#seconds").textContent = s + "s";
  };

  //sets minutes
  const setMinutes = (m) => {
      document.querySelector("#minutes").textContent = m + "m";
  };

  //sets hours
  const setHours = (h) => {
      document.querySelector("#hours").textContent = h + "h";
  };

  //sets Days
  const setDays = (d) => {
      document.querySelector("#days").textContent = d + "d";
  };

  // Update the count down every 1 second
  var x = setInterval(() => {
      //clears countdown when all seconds are counted
      if (totalSeconds <= 0) {
          clearInterval(x);
      }
      setDays(convert(tempSeconds, 24 * 60 * 60));
      setHours(convert(tempSeconds, 60 * 60));
      setMinutes(convert(tempSeconds, 60));
      setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
      totalSeconds--;
      tempSeconds = totalSeconds;
  }, 1000);

   // buuton0//
   var modal = document.getElementById("myModal");
   var btn = document.getElementById("myBtn");
   var span = document.getElementsByClassName("close")[0];
   // When the user clicks the button, open the modal 
   btn.onclick = function () {
       modal.style.display = "block";
   }
   span.onclick = function () {
       modal.style.display = "none";
   }
   window.onclick = function (event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }

   // button1//
   var modal1 = document.getElementById("myModal1");
   // Get the button that opens the modal
   var btn1 = document.getElementById("myBtn1");
   // Get the <span> element that closes the modal
   var span1 = document.getElementsByClassName("close1")[0];
   // When the user clicks the button, open the modal 
   btn1.onclick = function () {
       modal1.style.display = "block";
   }
   // When the user clicks on <span> (x), close the modal
   span1.onclick = function () {
       modal1.style.display = "none";
   }

   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function (event) {
       if (event.target == modal1) {
           modal1.style.display = "none";
       }
   }
   // button2//s
   var modal2 = document.getElementById("myModal2");
   var btn2 = document.getElementById("myBtn2");
   var span2 = document.getElementsByClassName("close2")[0];
   btn2.onclick = function () {
       modal2.style.display = "block";
   }
   span2.onclick = function () {
       modal2.style.display = "none";
   }
   window.onclick = function (event) {
       if (event.target == modal2) {
           modal2.style.display = "none";
       }
   }

   // button3//
   var modal3 = document.getElementById("myModal3");

   var btn3 = document.getElementById("myBtn3");
   var span3 = document.getElementsByClassName("close3")[0];
   btn3.onclick = function () {
       modal3.style.display = "block";
   }
   span3.onclick = function () {
       modal3.style.display = "none";
   }
   window.onclick = function (event) {
       if (event.target == modal3) {
           modal3.style.display = "none";
       }
   }
   // button3//
   var modal4 = document.getElementById("myModal4");
   var btn4 = document.getElementById("myBtn4");
   var span4 = document.getElementsByClassName("close4")[0]; 
   btn4.onclick = function () {
       modal4.style.display = "block";
   }
   span4.onclick = function () {
       modal4.style.display = "none";
   }
   window.onclick = function (event) {
       if (event.target == modal4) {
           modal4.style.display = "none";
       }
   }
   // button3//
   var modal5 = document.getElementById("myModal5");
   var btn5 = document.getElementById("myBtn5");
   var span5 = document.getElementsByClassName("close5")[0]; 
   btn5.onclick = function () {
       modal5.style.display = "block";
   }
   span5.onclick = function () {
       modal5.style.display = "none";
   }
   window.onclick = function (event) {
       if (event.target == modal5) {
           modal5.style.display = "none";
       }
   }
   // button6//
   var modal6 = document.getElementById("myModal6");
   var btn6 = document.getElementById("myBtn6");
   var span6 = document.getElementsByClassName("close6")[0]; 
   btn6.onclick = function () {
       modal6.style.display = "block";
   }
   span6.onclick = function () {
       modal6.style.display = "none";
   }
   window.onclick = function (event) {
       if (event.target == modal6) {
           modal6.style.display = "none";
       }
   }
   // button7//
   var modal7 = document.getElementById("myModal7");
   var btn7 = document.getElementById("myBtn7");
   var span7 = document.getElementsByClassName("close7")[0];
   btn7.onclick = function () {
       modal7.style.display = "block";
   }
   span7.onclick = function () {
       modal7.style.display = "none";
   }
   window.onclick = function (event) {
       if (event.target == modal7) {
           modal7.style.display = "none";
       }
   }
