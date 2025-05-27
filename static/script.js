document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();

    if (!username) {
      return;
    }

    // Save username in localStorage for use in flip-card page
    localStorage.setItem("username", username);

    alert(`Welcome, ${username}! You can now proceed.`);

    // Redirect to flip-card page after username is set
    window.location.href = "/flip-card";
  });
});
