function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "" || password == "") {
        window.alert('Please Enter All Fields')
    } else {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                window.alert("login sucessfully")
                // Signed in
                var user = userCredential.user;
                localStorage.setItem('userId' , user.uid);

                window.location.href="../../home.html";
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                window.alert(errorMessage)
            });
    }

}