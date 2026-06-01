function checkPassword() {
  let pass = document.getElementById("password").value;
  if (pass === "1234") {
    switchPage("page1", "page2");
  } else {
    alert("Wrong password 💔");
  }
}

function switchPage(from, to) {
  document.getElementById(from).classList.remove("active");
  document.getElementById(to).classList.add("active");
}

function blowCandles() {
  let flame = document.getElementById("flame");

  flame.style.transition = "opacity 1s";
  flame.style.opacity = 0;

  setTimeout(() => {
    switchPage("page2", "page3");
  }, 1500);

  setTimeout(() => {
    switchPage("page3", "page4");
  }, 4000);
}

function openPage(page) {
  window.location.href = page;
}
