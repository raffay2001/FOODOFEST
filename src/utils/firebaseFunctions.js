import { setDoc, doc, getDocs, query, collection, orderBy } from "firebase/firestore"
import { firestore } from "../firebase.config"

// handler function for saving new item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, { merge: true })
}

// handler function for retrieving data from firebase backend
export const getAllFoodItems = async () => {
  const items = await getDocs(query(collection(firestore, "foodItems"), orderBy("id", "desc")))
  return items.docs.map((doc) => doc.data())
}
