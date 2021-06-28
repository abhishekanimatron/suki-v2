import { firebase } from "../lib/firebase";
//firebase utitlity functions
export async function doesEmailExist(emailAddress) {
  // go inside firebase's firestore's 'users' collection where emailAddress is equal to
  //the emailAddress passed in, we get some values of which if value is > 0 the emailAddress exists
  const result = await firebase
    .firestore()
    .collection("users")
    .where("emailAddress", "==", emailAddress)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}
