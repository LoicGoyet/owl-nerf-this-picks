import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBJvncxjVx9V9gTVsJK3MLe5JsORSVk_6g",
    authDomain: "nf-picks.firebaseapp.com",
    databaseURL: "https://nf-picks.firebaseio.com",
    projectId: "nf-picks",
    storageBucket: "",
    messagingSenderId: "952739711921"
}

firebase.initializeApp(config);
const database = firebase.database();

export default database;

