
// <!-- Setup and start animation! -->
var typed = new Typed('#element', {
    strings: ['Software Developer', 'Web Developer'],
    typeSpeed: 50,
});

// Function to redirect to the resume URL
document.getElementById("downloadBtn").addEventListener("click", function () {
    window.location.href = "URL_TO_RESUME";
});

// Function to redirect to the GitHub URL
document.getElementById("githubBtn").addEventListener("click", function () {
    window.location.href = "URL_TO_GITHUB";
});