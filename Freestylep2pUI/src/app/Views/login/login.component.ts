import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/Services/Models/userModel';
import { DataService } from 'src/app/Services/data.service';
import * as sweetAlert from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userDetails: object = {};


  constructor(public router: Router, public _dataService: DataService) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
  }


  nextPage(){
    this.router.navigate(['signup'])
  }



  public login() {
    const user: User = new User();
    user.EmailAddress = this.emailFormControl.value;
    user.Password = this.passwordFormControl.value;
    console.log(user)

    this._dataService.logIn(user).subscribe(x => {
      if (x === null) {
        sweetAlert.default.fire({
          type: 'error',
          title: 'Oops...',
          text: 'The username or password you entered is incorrect. maybe both!',
        });
        console.log(x)
       this.resetLoginForm();
       
      } else {
        this.userDetails = x;
        sessionStorage.setItem("userDetails", JSON.stringify(x));
        this.router.navigate(['general'])
      }


      console.log(x)
    })
  }

  private resetLoginForm(){
    this.emailFormControl.clearValidators();
    this.passwordFormControl.clearValidators();
    this.emailFormControl.reset();
    this.passwordFormControl.reset();
   
  }

}
