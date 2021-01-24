import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-white',
  templateUrl: './navbar-white.component.html',
  styleUrls: ['./navbar-white.component.scss']
})
export class NavbarWhiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Code to toggle menu
    const hamburger = document.querySelector('.hamburguer');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelector('.nav-links li');

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

  }

}
