const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const retypepassword = document.getElementById("retypepassword");

// untuk menghindari terjadi redirect halaman
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;

    // hilangkan class success
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = " ";

    // hilangkan class error
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// untuk pengecekan apakah email valid atau tidak
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const retypePasswordValue = retypepassword.value.trim();

    // cek email
    if (emailValue === "") {
        setError(email, "masukkan email");
    } else if (!isValidEmail(emailValue)) {
        // jika email tidak sesuai format
        setError(email, "email tidak valid");
    } else {
        setSuccess(email);
    }

    if (usernameValue === "") {
        setError(username, "masukkan username");
    } else if (usernameValue.length < 5) {
        setError(username, "username harus lebih dari 5 karakter");
    } else {
        setSuccess(username);
    }

    if (passwordValue === "") {
        setError(password, "masukkan password");
    } else if (passwordValue.length < 5) {
        setError(password, "password harus lebih dari 5 karakter");
    } else {
        setSuccess(password);
    }

    if (retypePasswordValue === "") {
        setError(retypepassword, "masukkan ulang password");
    } else if (retypePasswordValue !== passwordValue) {
        setError(retypepassword, "password tidak sama");
    } else {
        setSuccess(retypepassword);
    }
};
