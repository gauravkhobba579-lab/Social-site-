
const likeButton = document.querySelector(".like-btn");
const likeCount = document.querySelector(".like-count");

let likes = 0;

likeButton.addEventListener("click", () => {
  const liked = likeButton.classList.toggle("liked");
  likes += liked ? 1 : -1;
  likeCount.textContent = likes;
  likeButton.textContent = liked ? "♥" : "♡";
});

document.querySelector(".comment-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const input = this.querySelector("input");
  const value = input.value.trim();

  if (!value) return;

  const comment = document.createElement("p");
  comment.textContent = "You: " + value;
  comment.style.padding = "8px 14px";

  document.querySelector(".comments").appendChild(comment);
  input.value = "";
});

function showMessage() {
  showToast("Welcome to G Connect!");
}

function showTab(tab) {
  showToast(tab + " section will be added soon!");
  document.querySelectorAll(".bottom-nav button").forEach(button => {
    button.classList.remove("active");
  });
  event.currentTarget.classList.add("active");
}

function showToast(message) {
  const toast = document.getElementById("message");
  toast.textContent = message;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2200);
}
