// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyBLdnrlmIiTobvOfDxclALf-esNd5YT4FY",
  authDomain: "betting-tip-hub.firebaseapp.com",
  projectId: "betting-tip-hub",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
