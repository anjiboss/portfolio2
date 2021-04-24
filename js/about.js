const mainText = document.querySelectorAll(".main p");

anime({
  targets: ".main",
  opacity: ["0", "1"],
  duration: "500",
  easing: "easeInOutQuad",
  delay: "500",
});

anime({
  targets: ".main",
  borderRadius: ["0", "19px"],
  duration: "5000",
  easing: "easeInOutQuad",
});

anime({
  targets: mainText,
  opacity: ["0", "1"],
  easing: "easeInOutQuad",
  delay: function (el, i, l) {
    return i * 1500 + 1000;
  },
});
anime({
  targets: ".main",
  translateX: "1000px",
  duration: "500",
  delay: "16000",
  easing: "easeInOutQuad",
});

let readMainFlag = true;
setTimeout(() => {
  $("#read-main").css("opacity", "1");
}, 16000);
$("#read-main").click(() => {
  readMainFlag = !readMainFlag;
  if (readMainFlag) {
    $("#read-main").html(`もう一度読む`);
    anime({
      targets: ".main",
      translateX: "1000px",
      duration: "1000",
      delay: "0",
      // easing: "easeInOutQuad",
    });
  } else {
    anime({
      targets: ".main",
      translateX: "0px",
      duration: "1000",
      delay: "0",
      // easing: "easeInOutQuad",
    });
    $("#read-main").html(`隠す`);
  }
});
