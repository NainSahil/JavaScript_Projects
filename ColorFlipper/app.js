const colors = ["orange", "pink", "rgba(203,194,170)", "#f15336"];
const btn = document.querySelector(".btn");
const color = document.querySelector("span");
btn.addEventListener("click", function () {
  //to get random number between 0-3 to select element from colors array
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  //return number as 0.00011.. to 0.999..
  return Math.floor(Math.random() * colors.length);
}
