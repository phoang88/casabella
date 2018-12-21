import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showText : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onToggleText(){
    this.showText = !this.showText;
  }
}
