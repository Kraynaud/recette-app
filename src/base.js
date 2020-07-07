import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBLuZHNqgxZqxYSZMwQWrZWl6B4REPZi3o",
  authDomain: "recette-app-739e8.firebaseapp.com",
  databaseURL: "https://recette-app-739e8.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
