import { getDocs, collection, getDoc, doc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { store } from '../store/store';

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

export const fetchUserOrders = async () => {
  try {
    const userIdFromRedux = (
      store.getState().userSlice.userData as { uid: string }
    ).uid;
    const userIdFromFirebase = auth.currentUser?.uid;

    if (!userIdFromFirebase) {
      throw new Error('No authenticated user found.');
    }
    const userOrderRef = collection(
      doc(db, 'users', userIdFromFirebase),
      'orders',
    );
    const ordersSnapshot = await getDocs(userOrderRef);
    return ordersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching user orders:', error);
    throw error;
  }
};
