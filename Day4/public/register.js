function validateForm() {
  const fname = document.forms["myForm"]["fname"].value;
  const lname = document.forms["myForm"]["lname"].value;
  const email = document.forms["myForm"]["email"].value;
  const phone = document.forms["myForm"]["phone"].value;
  const password = document.forms["myForm"]["password"].value;

  if (!fname || !lname || !email || !phone || !password) {
    alert("All fields must be filled out");
    return false;  // Prevent form submission
  }
  return true;  // Allow form submission
}



  document.addEventListener('DOMContentLoaded', function () {
    // Check if the URL has a query parameter to show the modal
    const urlParams = new URLSearchParams(window.location.search);
    const showModal = urlParams.get('showModal');
    
    if (showModal === 'true') {
      const modal = document.getElementById("successModal");
      const modalMessage = document.getElementById("modalMessage");
      
      // Set the message based on the page (register or login)
      modalMessage.innerText = window.location.pathname === '/register' ? 'Registration Successful!' : 'Login Successful!';
      
      // Display the modal
      modal.style.display = "block";
      
      // Close modal when the 'x' is clicked
      document.querySelector(".close").onclick = function() {
        modal.style.display = "none";
      };

      // Close modal if the user clicks outside of the modal
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  });
