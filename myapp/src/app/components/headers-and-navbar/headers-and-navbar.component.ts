import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-headers-and-navbar',
  templateUrl: './headers-and-navbar.component.html',
  styleUrls: ['./headers-and-navbar.component.css']
})
export class HeadersAndNavbarComponent implements OnInit, OnDestroy {
  public daysUntil: string = '';
  private intervalId: number = 0;
  public collapseNavBar = true;
  public showSecondImage: boolean = false;
  
  toggleNavBar() {
    this.collapseNavBar = !this.collapseNavBar;
  }

  ngOnInit() {
    this.updateCountdown();
    this.intervalId = window.setInterval(() => {
      this.updateCountdown();
    }, 86400000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private updateCountdown() {
    const today = new Date();
    const weddingDate = new Date('2024-07-03T00:00:00');
    const timeDiff = weddingDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.daysUntil = `${daysDiff} DAYS TO GO!`;
  }
}
