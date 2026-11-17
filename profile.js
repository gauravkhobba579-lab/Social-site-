
function editProfile() {
  const newName = prompt("Enter your name:");
  if (newName === null) return;

  const newBio = prompt("Enter your bio:");
  if (newBio === null) return;

  if (newName.trim()) {
    document.getElementById("name").textContent = newName.trim();
    document.getElementById("avatar").textContent =
      newName.trim().charAt(0).toUpperCase();
  }

  document.getElementById("bio").textContent = newBio.trim();
  showMessage("Profile updated for this session!");
}

function shareProfile() {
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: "My GrowSite Profile",
      text: "Check out my GrowSite profile!",
      url: url
    }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url)
      .then(() => showMessage("Profile link copied!"))
      .catch(() => showMessage("Copy link manually: " + url));
  } else {
    showMessage(url);
  }
}

function showTab(tab) {
  document.querySelectorAll(".tabs button").forEach(button => {
    button.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  const content = document.getElementById("content");

  if (tab === "posts") {
    content.innerHTML = `
      <div class="empty">
        <h3>Your posts will appear here</h3>
        <p>Start creating on GrowSite!</p>
      </div>`;
  } else if (tab === "saved") {
    content.innerHTML = `
      <div class="empty">
        <h3>Saved Posts</h3>
        <p>Your saved posts will appear here.</p>
      </div>`;
  } else {
    content.innerHTML = `
      <div class="empty">
        <h3>About GrowSite</h3>
        <p>Connect • Create • Grow</p>
      </div>`;
  }
}

function showMessage(message) {
  alert(message);
      }
