const ratingButtons = document.querySelectorAll("button");
const submitButton = document.querySelector("#submit");
const ratingSection = document.querySelector("#rating");
const thanksSection = document.querySelector("#thanks");
const ratingText = document.getElementById("rating_text");

let ratingScore = [];

for (let i = 0; i < ratingButtons.length; i++) {
  ratingButtons[i].addEventListener("click", () => {
    for (const btn of ratingButtons) {
      btn.classList.remove("active_state");
    }
    ratingButtons[i].classList.add("active_state");
    ratingScore = [i + 1];
  });
}

submitButton.addEventListener("click", () => {
  for (const btn of ratingButtons) {
    if (btn.classList.contains("active_state")) {
      ratingSection.classList.toggle("hidden");
      thanksSection.classList.toggle("hidden");
      ratingText.innerHTML = `You selected ${ratingScore} out of 5`;
    }
  }
});
