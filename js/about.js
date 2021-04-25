const mainText = document.querySelectorAll(".introduce p");
// const introduce = document.getElementById("intr-btn");
const introduce = $("#intr-btn");
const hobby = $("#hobby-btn");
const tech = $("#tech-btn");

const _introduce = document.getElementsByClassName("introduce");
const _hobby = document.getElementsByClassName("hobby");
const _tech = document.getElementsByClassName("technical");

const go = (target) => {
  anime({
    targets: target,
    translateX: "2000px",
    duration: "500",
    easing: "easeInOutQuad",
  });
};

let curDisplay = _introduce;
go([_hobby, _tech]);
anime({
  targets: [_hobby, _tech],
  opacity: ["0", "1"],
  delay: "500",
  duration: "1",
});

anime({
  targets: ".introduce",
  opacity: ["0", "1"],
  duration: "500",
  easing: "easeInOutQuad",
  delay: "500",
});

anime({
  targets: ".introduce",
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

introduce.click(() => {
  if (curDisplay !== _introduce) {
    go(curDisplay);
    curDisplay = _introduce;
    back(_introduce);
  }
});

tech.click(() => {
  if (curDisplay !== _tech) {
    go(curDisplay);
    curDisplay = _tech;
    back(_tech);
  }
});
hobby.click(() => {
  if (curDisplay !== _hobby) {
    go(curDisplay);
    curDisplay = _hobby;
    back(_hobby);
  }
});

const back = (target) => {
  anime({
    targets: target,
    translateX: "0px",
    duration: "500",
    easing: "easeInOutQuad",
  });
};
