window.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "Guest";
  document.querySelectorAll(".user").forEach((el) => {
    el.textContent = username;
  });

  const startBtn = document.getElementById("start-btn");
  startBtn.addEventListener("click", () => {
    const audio = document.getElementById("birthday-audio");
    audio.play().catch((err) => console.warn("Autoplay blocked:", err));
    startBtn.style.display = "none";

    function spawnBalloon() {
      const colors = [
        "#FF3FA4",
        "#FF8A5B",
        "#FFD93D",
        "#6BCB77",
        "#4D96FF",
        "#A66CFF"
      ];
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.background =
        colors[Math.floor(Math.random() * colors.length)];
      balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
      document.querySelector(".balloon-container").appendChild(balloon);
      setTimeout(() => balloon.remove(), 10000);
    }

    setInterval(spawnBalloon, 400);
  });

  // Copy Link button with custom message
  const copyLinkBtn = document.getElementById("copy-link-btn");
  const copyMessage = document.getElementById("copy-message");

  copyLinkBtn.addEventListener("click", () => {
    const url = window.location.href;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        // Show clickable link message
        copyMessage.innerHTML = `Link copied! <a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
        copyMessage.style.display = "block";

        // Hide after 4 seconds
        setTimeout(() => {
          copyMessage.style.display = "none";
        }, 4000);
      })
      .catch((err) => {
        copyMessage.textContent = "Failed to copy link: " + err;
        copyMessage.style.display = "block";

        setTimeout(() => {
          copyMessage.style.display = "none";
        }, 4000);
      });
  });
});
