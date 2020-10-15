import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCsWg7k-P9ja4CQwZ4-f_bQl01YMzYoXN8",
    authDomain: "facebook-hk-95127.firebaseapp.com",
    databaseURL: "https://facebook-hk-95127.firebaseio.com",
    projectId: "facebook-hk-95127",
    storageBucket: "facebook-hk-95127.appspot.com",
    messagingSenderId: "106877407494",
    appId: "1:106877407494:web:b16742d940735bf5ad4e87",
    measurementId: "G-VPJW8EDQWZ"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider};
  export default db ;
