import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const logInrequest = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const registerRequest = (auth, email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
