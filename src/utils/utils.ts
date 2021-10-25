import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './firebase';

export const getFirestoreDB = async (collectionName: string) => {
  const resultCol = collection(db, collectionName);
  const resultSnapshot = await getDocs(resultCol);
  const resultList = resultSnapshot.docs.map((doc: any) => doc.data());
  return resultList;
};

export interface IDataType {
  id?:string;
  image: string;
  title: string;
  description: string;
}

export interface IRoute {
  key: string;
  name: string;
  params: any;
  path: any;
}