const profilePhoto = document.getElementById("profilePhoto");
const switchButton = document.getElementById("switchButton");
const photoDescription = document.getElementById("photoDescription");

let showingCasual = true;

switchButton.addEventListener("click", function () {

    profilePhoto.style.opacity = "0";

    setTimeout(function () {

        if (showingCasual) {

            profilePhoto.src = "assets/professional.jpg";
            profilePhoto.alt = "Shahd professional profile photo";

            photoDescription.textContent = "Professional Profile";

            showingCasual = false;

        } else {

            profilePhoto.src = "assets/casual.jpg";
            profilePhoto.alt = "Shahd casual profile photo";

            photoDescription.textContent = "Casual Profile";

            showingCasual = true;
        }

        profilePhoto.style.opacity = "1";

    }, 400);

});