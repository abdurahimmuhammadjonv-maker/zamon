const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!validEmail) {
    emailInput.classList.add("invalid");
    message.textContent = "Please enter a valid email address.";
    emailInput.focus();
    return;
  }

  emailInput.classList.remove("invalid");
  message.style.color = "#218653";
  message.textContent = "Thanks for subscribing! Your email has been added.";
  form.reset();
});

emailInput.addEventListener("input", function () {
  emailInput.classList.remove("invalid");
  message.textContent = "";
  message.style.color = "";
});
