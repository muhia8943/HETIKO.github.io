document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("pcHUloRmu0mYJJBbB");

  document
    .getElementById("quoteForm")
    .addEventListener("submit", async function (e) {

      e.preventDefault();

      const btn = document.querySelector(".form-submit");

      btn.disabled = true;
      btn.textContent = "Sending...";

      const templateParams = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        serviceType: document.getElementById("serviceType").value,
        message: document.getElementById("message").value
      };

      try {
        await emailjs.send(
          "service_s4zzipk",
          "template_1mt5py4",
          templateParams
        );

        btn.textContent = "Request Sent — We Will Be In Touch Shortly";
        document.getElementById("quoteForm").reset();

      } catch (error) {
        console.error(error);
        btn.disabled = false;
        btn.textContent = "Send Request";
        alert("Failed to send request. Please try again.");
      }

    });

});