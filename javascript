document.getElementById('registrationForm').addEventListener('submit', registerUser);

function registerUser(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve user input
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Perform validation, if needed

  // Send user data to the server using AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/register', true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      if (response.success) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Please try again.');
      }
    }
  };

  var userData = {
    username: username,
    email: email,
    password: password
  };

  xhr.send(JSON.stringify(userData));
}
