const firebaseConfig = {


    apiKey: "AIzaSyBNnWZ86R02OLfxLupHKyghmJUHlXPw0Yg",
    authDomain: "fir-quiz-3d402.firebaseapp.com",
    projectId: "fir-quiz-3d402",
    storageBucket: "fir-quiz-3d402.appspot.com",
    messagingSenderId: "274505695521",
    appId: "1:274505695521:web:cd0d7d548b9dd7c0397e60"

};
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

let db = firebase.firestore();