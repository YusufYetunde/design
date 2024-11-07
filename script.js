function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simple validation for demonstration
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }
    
    // Here you could add more advanced validation or send the form data via AJAX
    
    alert("Message sent successfully!");
    this.reset(); // Reset form fields
});
