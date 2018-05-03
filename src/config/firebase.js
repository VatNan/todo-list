import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCx5Oy4XpfSfRuShyi_lHZKZJ9wEDv57Cw",
  authDomain: "todo-list-9ed46.firebaseapp.com",
  databaseURL: "https://todo-list-9ed46.firebaseio.com",
  projectId: "todo-list-9ed46",
  storageBucket: "todo-list-9ed46.appspot.com",
  messagingSenderId: "63859834062"
};

export default firebase.initializeApp(config);
