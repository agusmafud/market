import firebase from 'firebase/app';
import 'firebase/database';

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const pedidosRef = databaseRef.child("pedidos");
export const timestamp = firebase.database.ServerValue.TIMESTAMP;