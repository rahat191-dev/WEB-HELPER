window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
});

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw44pgiIogxQVZvvWUlgrfbZsMSp3Q9BEbcR-arDAfYDp9rvxJJFiylVWnnGBogeJfz/exec";

const form = document.getElementById("sheetForm");
const btn = document.getElementById("submitBtn");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email) {
    statusEl.textContent = "Name and Email are required.";
    return;
  }

  const payload = {
    name, email, phone, message,
    createdAt: new Date().toISOString(),
    userAgent: navigator.userAgent
  };

  btn.disabled = true;
  statusEl.textContent = "Sending...";

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    form.reset();
    statusEl.textContent = "Submitted! Thank you.";
  } catch (err) {
    console.error(err);
    statusEl.textContent = "Failed to send.";
  } finally {
    btn.disabled = false;
  }
});
