function register() {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email == "" || password == "") {
        window.alert("Enter all fields")
    } else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                window.alert("user register sucessfully")
                // Signed in 
                var user = userCredential.user;

                window.location.href= "../../index.html"

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert(errorMessage)
                // ..
            });
    }
}