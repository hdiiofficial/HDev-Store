import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const signInFirebase = (email, password) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => res)
    .catch(err => err);
};
const currentUser = () => {
  return auth().currentUser;
};
const saveDataPayment = data => {
  return firestore()
    .collection('payment')
    .add(data)
    .then(res => res)
    .catch(err => err);
};
export {signInFirebase, currentUser, saveDataPayment};
