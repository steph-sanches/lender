import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthService} from './core/health.service';
import { AuthService } from './core/auth.service';
import { Observable, of, switchMap } from 'rxjs';
import { LoansReadService, Loan } from './features/loans/loans-read.service';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  status='checking'
  loans$?: Observable<Loan[]>;


  constructor(private health : HealthService, public auth: AuthService,private loansRead: LoansReadService) {
    this.loans$ = this.auth.user$.pipe(
    switchMap(u => u ? this.loansRead.loans$(u.uid) : of([]))
  );
  }

  ngOnInit(){
    this.health.ping().subscribe({
      next: r => this.status = r.status,
      error: _ => this.status = 'down'
    });
  }
}


