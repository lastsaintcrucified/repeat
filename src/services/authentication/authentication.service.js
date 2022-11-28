import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.service";

export const logInrequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
