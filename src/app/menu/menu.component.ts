import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links = [
    {label: 'Home', path: '/home'}, 
    {label: 'Serivces', path: '/services'},
    {label: 'Policies', path: '/policies'},
  ]
  activeLink = this.links[0].label;

  constructor() { }

  ngOnInit() {
  }

}
