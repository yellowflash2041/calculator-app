const container = document.querySelector(".container");
const toggleContainer = document.querySelector(".toggle");
let toggleIndex = 0;

toggleContainer.addEventListener("click", () => {
  if (++toggleIndex === 3) {
    toggleIndex = 0;
  }
  container.classList = "container";
  container.classList.add(`theme-${parseInt(toggleIndex + 1)}`);
  toggleContainer.children[0].style.transform = `translateX(${
    toggleIndex * 150
  }%)`;
});

// calculate
const input = document.querySelector(".input");
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    input.value = input.value.replaceAll("×", "*");
    if (key.textContent === "=") {
      calculate();
    } else if (key.textContent === "Reset") {
      reset();
    } else if (key.textContent === "Del") {
      const aTemp = input.value.split("");
      aTemp.pop();
      input.value = aTemp.join("");
    } else {
      input.value += key.textContent;
    }
  });
});

const reset = () => {
  input.value = "";
};

const calculate = () => {
  const notLocal = input.value.replaceAll(",", "");
  input.value = parseFloat(eval(notLocal)).toLocaleString();
};
