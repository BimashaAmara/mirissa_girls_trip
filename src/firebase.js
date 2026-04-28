import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLKwGvwTEuSrVgkiqDqljx_t0isyFs7K0",
  authDomain: "mirissa-girls-trip.firebaseapp.com",
  projectId: "mirissa-girls-trip",
  storageBucket: "mirissa-girls-trip.firebasestorage.app",
  messagingSenderId: "603294814733",
  appId: "1:603294814733:web:44b0bb833563fa12827b44",
  measurementId: "G-6Z89LKY7JN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
