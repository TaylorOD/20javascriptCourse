const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  
  const small = formControl.querySelector('small');
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

const isValidEmail = (email) => {
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return re.test(String(email).toLocaleLowerCase());
}

const checkRequired = (inputArray) => {
  inputArray.forEach(function(input) {
    if(input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

const getFieldName = (input) => {
  return input.id[0].toUpperCase() + input.id.slice(1);
};

form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2])
  
  // Old Validations Below:
  // if (username.value === '') {
  //   showError(username, "Username is Required");
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === '') {
  //   showError(email, "Email is Required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Email is not valid");
	// } else {
	// 	showSuccess(email);
	// }
  
  // if (password.value === '') {
  //   showError(password, "Password is Required");
  // } else {
  //   showSuccess(password);
  // }

  // if (password2.value === '') {
  //   showError(password2, "Confirm password is the same as above");
  // } else {
  //   showSuccess(password2);
  // }
  
});