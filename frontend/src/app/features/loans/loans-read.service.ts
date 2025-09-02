import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Loan {
  id?: string;
  type: 'money' | 'item' | 'credential';
  label: string;
  status: 'open' | 'returned' | 'overdue';
  dueDate?: any;
}

@Injectable({ providedIn: 'root' })
export class LoansReadService {
  constructor(private fs: Firestore) {}
  loans$(uid: string): Observable<Loan[]> {
    const ref = collection(this.fs, `users/${uid}/loans`);
    return collectionData(ref, { idField: 'id' }) as Observable<Loan[]>;
  }
}
