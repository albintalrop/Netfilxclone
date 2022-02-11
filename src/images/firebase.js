import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyC1svEZiT6D9fzKfV3rl8XJq2hdsdZ4IWI",
    authDomain: "netflix-clone-bdaf2.firebaseapp.com",
    projectId: "netflix-clone-bdaf2",
    storageBucket: "netflix-clone-bdaf2.appspot.com",
    messagingSenderId: "632426212211",
    appId: "1:632426212211:web:c665eeb11c8e40c461f306"
  };
  const firebaseApp=  firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{ auth}
  export default db;