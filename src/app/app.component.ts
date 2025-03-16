import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { inject } from "@vercel/analytics"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    inject()
  }
  showImages: boolean = true;
  images: string[] = [
    'assets/fp1.jpg',
    'assets/Screenshot_20250316_185805_M365 Copilot.jpg',
    'assets/fp2.jpg'
  ];

  
  closeImages() {
    this.showImages = false;
  }
  title = 'pvms';
  
}

