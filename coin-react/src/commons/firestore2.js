import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
    orderBy
} from 'firebase/firestore';
const db = getFirestore();

async function addUser (uid, useremail, username, useraddress){
    const userCollection = collection(db, 'user');

    const user = await addDoc(userCollection, {
        uid,
        useremail,
        username,
        useraddress
    });
    return user;
}
