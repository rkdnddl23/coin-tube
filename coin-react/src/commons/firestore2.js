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
    const response = await getDocs(usersCol);
    return response;
};

export const findCreators = async (uid) => {
    const collections = query(collection(db, 'creators'), where('user_id', '==', uid));
    const response = await getDocs(collections);

    return response;
};