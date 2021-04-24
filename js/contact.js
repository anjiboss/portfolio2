$("#contact").submit((e) => {
  e.preventDefault();
  fetch("http://localhost:5000/api/contact", {
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
      console.log("yeah");
    }
  });
});
