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
