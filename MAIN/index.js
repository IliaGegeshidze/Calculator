const display = document.getElementById("display");
const buttons = [...document.querySelectorAll(".btn")];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "AC") {
      display.value = "0";
      return;
    }

    if (value === "=") {
      try {
        display.value = eval(
          display.value.replace(/×/g, "*").replace(/÷/g, "/"),
        );
      } catch (error) {
        display.value = "Error";
      }
      return;
    }

    if (display.value === "0" || display.value === "Error") {
      display.value = value;
    } else {
      display.value += value;
    }
  });
});
