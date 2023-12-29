import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
apiKey: "AIzaSyA1FE7ty9m03ilmmhKg2Q5_KTzrzN_sBjQ",
authDomain: "mobile-app-f3f7e.firebaseapp.com",
projectId: "mobile-app-f3f7e",
storageBucket: "mobile-app-f3f7e.appspot.com",
messagingSenderId: "1036376536766",
appId: "1:1036376536766:web:d7b9bdc3ad1648747950ef",
measurementId: "G-84P83XYS19"
};
// Initialize Firebase　初期化処理
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;
