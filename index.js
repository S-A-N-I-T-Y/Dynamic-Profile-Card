"use strict";

// Get form submission button
let submitButton = document.getElementById("submit");

// Get profile details
let profileName = document.querySelector(".profile-name");
let profileOccupation = document.querySelector(".profile-occupation");
let profileAbout = document.querySelector(".profile-about");
let profileImg = document.getElementById("profile-img");
let profileContainer = document.getElementById("profile-container");
let githubLink = document.getElementById("github-link");
let twitterLink = document.getElementById("twitter-link");

// A function to get form values upon submission.
function submitform() {
  let formName = document.querySelector(".form-name").value;
  let formOccupation = document.querySelector(".form-occupation").value;
  let formAbout = document.querySelector(".form-about").value;
  let formImage = document.querySelector(".form-img");
  let formGithub = document.querySelector(".form-github").value;
  let formTwitter = document.querySelector(".form-twitter").value;
  let formContainer = document.getElementById("form-container");

  formContainer.classList.add("hidden");
  profileContainer.classList.remove("hidden");

  // Updating the profile to the form values every second
  setTimeout(() => {
    let imgFile = formImage.files[0];

    if (imgFile) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImg.src = e.target.result;
        profileImg.style.display = "block";
      };
      reader.readAsDataURL(imgFile);
    }
    profileName.textContent = formName;
    profileOccupation.textContent = formOccupation;
    profileAbout.textContent = formAbout;
    githubLink.href = formGithub;
    twitterLink.href = formTwitter;
  }, 1000);
}

// Action to submit form
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  submitform();
});
