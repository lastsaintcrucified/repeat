import { signInWithEmailAndPassword } from "firebase/auth";

export const logInrequest = (auth, email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
