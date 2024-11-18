import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAohh2q_qen4q8sIA1tflWFqg7THg693qc",
    authDomain: "projeto-rei-do-burger-3.firebaseapp.com",
    projectId: "projeto-rei-do-burger-3",
    storageBucket: "projeto-rei-do-burger-3.firebasestorage.app",
    messagingSenderId: "466772649670",
    appId: "1:466772649670:web:2dd6ed0f98a2adf06c59c7"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }