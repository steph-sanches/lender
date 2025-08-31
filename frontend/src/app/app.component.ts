import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HealthService} from './core/health.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';

  status='checking'


  constructor(private health : HealthService) {}

  ngOnInit(){
    this.health.ping().subscribe({
      next: r => this.status = r.status,
      error: _ => this.status = 'down'
    });
  }
}
