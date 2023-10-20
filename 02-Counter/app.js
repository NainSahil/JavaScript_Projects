function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else throw new Error(`Selector "${selection}" does not exist`);
}

function Counter(element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector(".reset");
  this.incrementBtn = element.querySelector(".increment");
  this.decrementBtn = element.querySelector(".decrement");
  this.spanValue = element.querySelector(".value");
  this.spanValue.textContent = value;
  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  this.incrementBtn.addEventListener("click", this.increase);
  this.decrementBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
}

Counter.prototype.increase = function () {
  this.value++;
  this.spanValue.textContent = this.value;
};
Counter.prototype.decrease = function () {
  this.value--;
  this.spanValue.textContent = this.value;
};
Counter.prototype.reset = function () {
  this.value = 0;
  this.spanValue.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first"), 100);
const secondCounter = new Counter(getElement(".second"), 200);

secondCounter.reset();
