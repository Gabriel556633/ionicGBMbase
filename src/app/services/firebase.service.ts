import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { User } from '../models/user.model'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { getFirestore,setDoc, doc } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //constructor() { }
  // codigo mas moderno parainyectarclases

  auth = inject(AngularFireAuth);
  firestor = inject (AngularFirestore)

  // ACCEDER//
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }
  //-----Registrar-----
  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  //-----Registrar-----
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName })
  }

//-----------base de datos-----
//setear deocumento--------
setDocument(path:string,data:any){
  return setDoc(doc(getFirestore(),path),data);

}

}
