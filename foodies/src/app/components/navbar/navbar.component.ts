import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
