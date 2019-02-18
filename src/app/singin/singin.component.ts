import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  private email: String;
  private password: String;

  constructor() { }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  onClickSubmit() {
    console.log('You Click Submit');
  }

}
