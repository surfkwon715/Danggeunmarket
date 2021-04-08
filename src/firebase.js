import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmZu5j8SnhgnB8YofpErLJXa0fxdRycDY",
    authDomain: "clone-danggeun.firebaseapp.com",
    projectId: "clone-danggeun",
    storageBucket: "clone-danggeun.appspot.com",
    messagingSenderId: "37870193688",
    appId: "1:37870193688:web:e2573cc220c606555e076d",
    measurementId: "G-Q5XM6T2H79"
};

firebase.initializeApp(firebaseConfig);

//여기서 firebase.auth()를 'auth'로 처리했기 때문에
//임포트하는 파일에서는 해당 부분을 그냥 auth로 쓰면 됨
const auth = firebase.auth();

//apiKey - firebaseConfig 중 이거만 따로 export
//apiKey는 firebase 인증키 (이것만 따로 갖다쓸 수 있도록)
const apiKey = firebaseConfig.apiKey;

const firestore = firebase.firestore();

export { auth, apiKey, firestore };
