import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCQqQlawOJBRKSBCaJpH9-5pdNPJm9yYRk",
    authDomain: "mnds-contact-book.firebaseapp.com",
    projectId: "mnds-contact-book",
    storageBucket: "mnds-contact-book.appspot.com",
    messagingSenderId: "455976664399",
    appId: "1:455976664399:web:7b226cbff35e59415ad93a"
  };

export default initializeApp(firebaseConfig)
