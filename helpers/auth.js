import { ref, firebaseAuth } from '../config/constants'

export function auth () {
  return firebaseAuth().createUserWithEmailAndPassword()
    .then()
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}
