// Select DOM elements
const ratingsContainer = document.querySelector(".container");
const thank_youContainer = document.querySelector(".thank_you");
const ratingsBtnWrapper = document.querySelector(".ratings"); // the ratings button wrapper
const numOfRatings = document.getElementById("num");
const submitBtn = document.getElementById("submit-btn");

// Add event listeners to all ratings buttons
ratingsBtnWrapper.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.value;
    numOfRatings.textContent = value;

    // Deselect all buttons first
    ratingsBtnWrapper.querySelectorAll("button").forEach((btn) => {
      btn.classList.remove("selected");
    });

    // Select the clicked button
    button.classList.add("selected");
  });
});

submitBtn.addEventListener("click", function () {
  if (numOfRatings.textContent === "") {
    alert("Please select a rating!");
    return;
  }
  ratingsContainer.classList.add("d-none");
  thank_youContainer.classList.remove("d-none");
  thank_youContainer.classList.add("d-flex");
});
