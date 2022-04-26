// Change color of clicked rating
var rates = document.querySelectorAll(".rating-part li");
var rateValue;

rates.forEach((rate) => {
  rate.onclick = () => {
    rates.forEach((rate) => rate.classList.remove("rating-clicked"));
    rate.classList.add("rating-clicked");
    rateValue = rate.textContent;
  };
});

// Change the page and transfer the rate value
var submitBtn = document.querySelector("button");
submitBtn.onclick = () => {
  localStorage.setItem("rateValue", rateValue);
};
