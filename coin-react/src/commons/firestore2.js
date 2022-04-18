import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc,
    query,
    where,
    orderBy
} from 'firebase/firestore';
const db = getFirestore();

export async function addUser (uid, useremail, username, useraddress){
    const userCollection = collection(db, 'users');

    const user = await addDoc(userCollection, {
        uid,
        useremail,
        username,
        useraddress
    });
    return user;
}

export const getUser = async (uid) => {
    const usersCol = query(collection(db, 'users'), where('uid', '==', uid));
    const res = await getDocs(usersCol);
    return res;
};