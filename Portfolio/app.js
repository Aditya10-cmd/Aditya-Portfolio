// Initialize EmailJS
(function () {
  emailjs.init("C_cGp3MsGAmhWR-SB"); // Replace with your EmailJS user ID
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const responseMsg = document.getElementById("response-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const params = {
      full_name: document.getElementById("full-name").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("adityashaw8621@gmail.com", "template_xIf7nnz", params)
      .then(function () {
        responseMsg.textContent = "✅ Message sent successfully!";
        responseMsg.style.color = "green";
        form.reset();
      }, function () {
        responseMsg.textContent = "❌ Failed to send message. Please try again.";
        responseMsg.style.color = "red";
      });
  });
});