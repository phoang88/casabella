import { Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  showText : boolean = false;

  constructor(public popup: MatDialog) { }

  ngOnInit() {
    setTimeout(() => this.popup.open(Popup, {
      width: '800px',
      height: '400px'
    }));
  }

  onToggleText(){
    this.showText = !this.showText;
  }
}

@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
})
export class Popup {

  constructor(
    public popupRef: MatDialogRef<Popup>) {}

  onNoClick(): void {
    this.popupRef.close();
  }

}