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
export class AppComponent  {
  showImages: boolean = true;
  images: string[] = [
    'assets/fp1.jpg',
    'assets/fp2.jpg'
  ];

  
  closeImages() {
    this.showImages = false;
  }
  title = 'Website-v';
  
}

