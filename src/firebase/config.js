import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_VuIUp6zWu3mFLMFHFl6jE-eYXoA1B-c",
    authDomain: "olx-clone-f4f78.firebaseapp.com",
    projectId: "olx-clone-f4f78",
    storageBucket: "olx-clone-f4f78.appspot.com",
    messagingSenderId: "805044659377",
    appId: "1:805044659377:web:12705d50a74a5f03822e90",
    measurementId: "G-NJK22P8WM9"
  };

 export default firebase.initializeApp(firebaseConfig)