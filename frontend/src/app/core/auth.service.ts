import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<import('firebase/auth').User | null>;
  constructor(private auth: Auth) {
    this.user$ = user(this.auth); // observable de l'utilisateur courant
  }
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logout() {
    return signOut(this.auth);
  }
}
