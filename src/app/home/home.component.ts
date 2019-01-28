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
      width: '850px',
      height: '450px',
    }));
  }

  onToggleText(){
    this.showText = !this.showText;
  }
}

@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
  styleUrls: ['./home.component.css']
})
export class Popup {

  constructor(
    public popupRef: MatDialogRef<Popup>) {}

  onNoClick(): void {
    this.popupRef.close();
  }

}