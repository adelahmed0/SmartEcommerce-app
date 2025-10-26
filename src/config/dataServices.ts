import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebase';

export const getProductsData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map((doc) => doc.data());
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
