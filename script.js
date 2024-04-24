//register
document.addEventListener("DOMContentLoaded", function() {
    var registerLink = document.getElementById("register-link");
    var popup = document.getElementById("popupregis");
    var closeButton = document.getElementById("close-popup-btn");
    var registerForm = document.getElementById("register-form");

    registerLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the link
        
        // Show the popup
        popup.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        // Close the popup when the close button is clicked
        popup.style.display = "none";
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission for this example

        // You can handle form submission here, such as sending data to a server
        alert("ลงทะเบียนสำเร็จ!");
        popup.style.display = "none"; // Close the popup after registration
    });
});

//login
document.addEventListener("DOMContentLoaded", function() {
    // Get the login link
    var loginLink = document.getElementById("login-link");
    
    // Get the login popup
    var popup = document.getElementById("popup");
    
    // Get the close button inside the popup
    var closeButton = document.getElementById("close-login-popup-btn");

    // Get the login form
    var loginForm = document.getElementById("login-form");

    // When the login link is clicked, display the popup
    loginLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action of the link
        popup.style.display = "block"; // Display the popup
    });

    // When the login form is submitted
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Here you can add your login logic, for now let's just display an alert
        alert("Login successful!"); // Display an alert for successful login

        // Close the popup after successful login
        popup.style.display = "none";
    });

    // Close the popup when the close button is clicked
    closeButton.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
$(document).ready(function(){
    // Function to handle window resize event
    function handleResize() {
        // Check if the window width is less than or equal to 1200px
        if ($(window).width() <= 1200) {
            // If yes, then hide the register link when the login link is clicked
            $("#login-link").click(function(){
                $("#register-link").hide();
                $("#refill-link").hide();
            });

            // If yes, then show the register link when the close button in the login popup is clicked
            $("#close-login-popup-btn").click(function(){
                $("#register-link").show();
                $("#refill-link").show();
            });
        } else {
            // If not, show the register link
            $("#register-link").show();
            $("#refill-link").show();
        }
    }

    // Call the handleResize function when the page loads
    handleResize();

    // Call the handleResize function when the window is resized
    $(window).resize(handleResize);
});
