import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false; // Styr om menyn visas eller inte

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
