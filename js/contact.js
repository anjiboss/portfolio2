$("#contact").submit((e) => {
  e.preventDefault();
  fetch("https://anji-portfolio-server.herokuapp.com/api/contact", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: $("#name").val(),
      text: $("#text").val(),
    }),
  }).then((res) => {
    if (res.status == 200) {
      promptOut();
    } else {
      alert(
        "Something went wrong, please try again later or contact me through my SNS"
      );
    }
  });
});

const promptOut = () => {
  let time = 5;

  const timeOut = setInterval(() => {
    time--;
    $("#contact").html(`
    <h2>Mail Sent</h2>
    <h2>Thanks For Contacting Me</h2>
    <h2>Redirecting to home in ${time}</h2>
    `);
    if (time === 0) {
      clearInterval(timeOut);
      window.location.href = "/index.html";
    }
  }, 1000);
};
