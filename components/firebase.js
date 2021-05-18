import firebase from 'firebase';
import 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyCcah9ywt-A45pV485m6NqpvB_R2vPG51w",
    authDomain: "socialjs-a9db4.firebaseapp.com",
    projectId: "socialjs-a9db4",
    storageBucket: "socialjs-a9db4.appspot.com",
    messagingSenderId: "370277424806",
    appId: "1:370277424806:web:b1c00128edcecbf927de67"
  };

  const app = !firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();
  const db={
      photo:app.firestore().collection('photos'),
      videos:app.firestore().collection('videos')
  }
  const storage=firebase.storage();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp();

  export{db,storage,timestamp};