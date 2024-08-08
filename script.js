var button = document.querySelector("#btn");
button.onclick = function() {
  document.querySelector(".loader").style.display = "block";
  button.style.display = "none";
 // document.querySelector(".error").style.display = "block"
};


document.getElementById("bar").style.display = "none"; // hide initially

setTimeout(function() {
  document.getElementById("bar").style.display = "block"; // show after 1s
  document.getElementById("bar").style.opacity = 0;
  var opacity = 0;
  var interval = setInterval(function() {
    if (opacity < 1) {
      opacity += 0.1;
      document.getElementById("bar").style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  }, 50); // slide down effect

  setTimeout(function() {
    var fadeOut = setInterval(function() {
      var opacity = document.getElementById("bar").style.opacity;
      if (opacity > 0) {
        document.getElementById("bar").style.opacity = opacity - 0.1;
      } else {
        clearInterval(fadeOut);
        document.getElementById("bar").style.display = "none"; // hide after fade out
      }
    }, 50); // fade out effect
  }, 4000); // wait 4s (1s show + 3s delay)
}, 1000); // initial delay

