import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  activeLink;

  constructor(private router: Router) { 

  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
     let index: number = this.links.indexOf(this.links.find(tab => tab.path === this.router.url));
     if(index >= 0){
        this.activeLink = this.links[index]
     }
  });
  }

}
