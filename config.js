// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyB9Fy1wUrNw50Sv0fVqK_8y_WpOJ1lQi6g",
    authDomain: "awesomeproject-391615.firebaseapp.com",
    projectId: "awesomeproject-391615",
    storageBucket: "awesomeproject-391615.appspot.com",
    messagingSenderId: "1097228459773",
    appId: "1:1097228459773:web:e2747989d65fdaea6a2894",
    measurementId: "G-GES1B4QJHZ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);