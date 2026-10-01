const IP = "ydragonsmp.shockbyte.games";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => {
  document.querySelector("nav").classList.remove("open");
}));

document.querySelectorAll(".copy-ip").forEach(btn => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.ip || IP);
    } catch {
      const area = document.createElement("textarea");
      area.value = btn.dataset.ip || IP;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    const toast = document.getElementById("toast");
    toast.textContent = `${btn.dataset.ip || IP} copied!`;
    toast.classList.add("show");
    document.getElementById("copy-label").textContent = "Copied!";
    setTimeout(() => {
      toast.classList.remove("show");
      document.getElementById("copy-label").textContent = "Click to copy";
    }, 1800);
  });
});

async function updateStatus() {
  const statusText = document.getElementById("status-text");
  const statusDot = document.getElementById("status-dot");
  const players = document.getElementById("status-players");
  const heroPlayers = document.getElementById("player-count");

  try {
    const res = await fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(IP)}`, {cache:"no-store"});
    const data = await res.json();
    if (data.online) {
      statusText.textContent = "ONLINE";
      statusDot.style.background = "var(--accent)";
      statusDot.style.boxShadow = "0 0 10px var(--accent)";
      const online = data.players?.online ?? 0;
      const max = data.players?.max ?? "?";
      players.textContent = `${online}/${max}`;
      heroPlayers.textContent = online;
    } else {
      statusText.textContent = "OFFLINE";
      statusDot.style.background = "#ff5252";
      statusDot.style.boxShadow = "0 0 10px #ff5252";
      players.textContent = "0";
      heroPlayers.textContent = "0";
    }
  } catch {
    statusText.textContent = "UNAVAILABLE";
    statusDot.style.background = "#e6a33a";
    players.textContent = "—";
    heroPlayers.textContent = "—";
  }
}
updateStatus();
setInterval(updateStatus, 30000);

const rewardBtn = document.getElementById("reward-btn");
if (rewardBtn) {
  rewardBtn.addEventListener("click", () => {
    const message = document.getElementById("reward-message");
    message.textContent = "Ad provider not connected — connect one before enabling rewards.";
    message.style.color = "#ffcc66";
  });
}
