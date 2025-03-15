import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  showImages: boolean = true;
  images: string[] = [
    '\assets\fp1.jpg',
    '\assets\fp2.jpg'
  ];

  ngOnInit() {
    // Check if the user has already closed the images
    const hasClosed = localStorage.getItem('imagesClosed');
    if (hasClosed === 'true') {
      this.showImages = false; // Hide images
    }
  }

  closeImages() {
    this.showImages = false; // Hide images
    localStorage.setItem('imagesClosed', 'true'); // Remember that the user closed it
  }
  title = 'Website-v';
  
}

