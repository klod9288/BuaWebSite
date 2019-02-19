import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onClickSubmit(feedBackForm: NgForm) {
    this.email = feedBackForm.value.emailString;
    console.log('email ==> ' + this.email);
    // fro password
    this.password = feedBackForm.value.passwordString;
    console.log('password ==> ' + this.password);

    if (this.checkEmailAnPass()) {
      console.log("Have Space");
      this.myAlertDialog('Have Space','Plaease Fial All Blanl');
    }else{
      console.log("NO Space");
    }
  }

  myAlertDialog(title: String, message: String): void{
    alert(title + "\n" + message);
  }

  checkEmailAnPass():boolean {
    var status = true;

    return ((this.email.length == 0) || (this.password.length == 0));
  }

}
