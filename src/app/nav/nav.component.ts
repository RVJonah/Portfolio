import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu;
  constructor() { }

  menuToggle() {
    this.menu.forEach(element => {
      if (element.style.display === 'block') {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    });
  }
  ngOnInit() {
    this.menu = document.querySelectorAll('.nav');
  }

}
