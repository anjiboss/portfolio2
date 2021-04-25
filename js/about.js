const intrText = document.querySelectorAll(".introduce p");
const hobbyText = document.querySelectorAll(".hobby p");
const techText = document.querySelectorAll(".technical p");

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
const outputWord = (target) => {
  anime({
    targets: target,
    opacity: ["0", "1"],
    easing: "easeInOutQuad",
    delay: function (el, i, l) {
      return i * 1000 + 1000;
    },
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
  borderRadius: ["0", "19"],
  duration: "500",
  easing: "easeInOutQuad",
  delay: "500",
});

outputWord(intrText);

introduce.click(() => {
  if (curDisplay !== _introduce) {
    go(curDisplay);
    curDisplay = _introduce;
    back(_introduce);
    outputWord(intrText);
  }
});

tech.click(() => {
  if (curDisplay !== _tech) {
    go(curDisplay);
    curDisplay = _tech;
    back(_tech);
    outputWord(techText);
  }
});
hobby.click(() => {
  if (curDisplay !== _hobby) {
    go(curDisplay);
    curDisplay = _hobby;
    back(_hobby);
    outputWord(hobbyText);
  }
});

const back = (target) => {
  anime({
    targets: target,
    translateX: "0px",
    duration: "500",
    easing: "easeInOutQuad",
  });
  anime({
    targets: target,
    borderRadius: ["0", "19px"],
    duration: "1500",
    easing: "easeInOutQuad",
  });
};
