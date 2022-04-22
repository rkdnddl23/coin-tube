import * as app from './firebase';
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

export const addCreator = async (creatorInfo) => {
    const creatorCollection = collection(db, 'creators');

    const creator = await addDoc(creatorCollection, {
        channel_id : creatorInfo.channelId,
        channel_link : creatorInfo.channelLink,
        channel_name : creatorInfo.channelName,
        channel_thumbnail : creatorInfo.channelthumbnail,
        channel_description : creatorInfo.channeldescription,
        channel_banner : creatorInfo.channelBanner
    });

    return creator;
}

export const getCardInfos = async() => {
    const collections = query(collection(db, 'creators'));
    const response = await getDocs(collections);

    return response.docs.map((creator) => {
        return{
            channelId : creator.data().channel_id,
            channelBanner : creator.data().channel_banner,
            channelName : creator.data().channel_name
        }
    })
}