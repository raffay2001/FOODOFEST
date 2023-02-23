import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAl0dYEc8CLozaQcN36b0LHI8No-VMbY4o",
  authDomain: "restaurantapp-8b570.firebaseapp.com",
  databaseURL: "https://restaurantapp-8b570-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-8b570",
  storageBucket: "restaurantapp-8b570.appspot.com",
  messagingSenderId: "376557735375",
  appId: "1:376557735375:web:5cca4c0d033fa22c77d6ba",
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)
export { app, firestore, storage }
