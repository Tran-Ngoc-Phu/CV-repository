var message = document.querySelector("h5");
message.textContent = `You selected ${localStorage.getItem(
  "rateValue"
)} out of 5`;
