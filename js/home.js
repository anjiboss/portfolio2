const textP = document.querySelectorAll(".about-me p");

anime({
  targets: ".hi ",
  opacity: ["0", "1"],
  translateY: "10%",
  easing: "easeInOutQuad",
  duration: "500",
});
anime({
  targets: ".name",
  opacity: ["0", "1"],
  easing: "easeInOutQuad",
  translateY: "10%",
  delay: "1000",
  duration: "500",
});
anime({
  targets: ".welcome",
  opacity: ["0", "1"],
  easing: "easeInOutQuad",
  translateY: "10%",
  delay: "2000",
  duration: "500",
});

anime({
  targets: "#welcome-box",
  opacity: ["1", "0"],
  easing: "easeInOutQuad",
  delay: "4000",
  duration: "500",
});

anime({
  targets: textP,
  opacity: ["0", "1"],
  easing: "easeInOutQuad",
  delay: function (el, i, l) {
    return i * 800 + 4500;
  },
});

// Start the Back-end Server

fetch("https://anji-portfolio-server.herokuapp.com/kidoshitekure")
  .then((res) => res.text())
  .then((txt) => console.log(txt));
