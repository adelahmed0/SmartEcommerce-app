import { DocumentData } from 'firebase/firestore';

export interface Product extends DocumentData {
  id: string;
  price: number;
  title: string;
  imageURL: string;
}
