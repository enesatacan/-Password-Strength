const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strenght");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
  if (pass.value.length < 4) {
    str.innerHTML = "weak";
    pass.style.borderColor = "#ff5925";
    pass.style.color = "#ff5925";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "medium";
    pass.style.borderColor = "yellow";
    pass.style.color = "yellow";
  } else if (pass.value.length >= 8) {
    str.innerHTML = "hard";
    pass.style.borderColor = "#26d730";
    pass.style.color = "#26d730";
  }
});
