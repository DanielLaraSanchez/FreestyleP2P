import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/Services/Models/userModel';
import { DataService } from 'src/app/Services/data.service';
import * as sweetAlert from 'sweetalert2'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userDetails: Object;

  constructor(public router: Router, public _dataService: DataService) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  ngOnInit() {
   this.resetLoginForm();
    
  }

  nextPage(){
    this.router.navigate(['general'])
  }

  goToLogin(){
    this.router.navigate(['']);
  }

  signUp(){
    const newUser: User = new User();
    newUser.Name = this.nameFormControl.value;
    newUser.EmailAddress = this.emailFormControl.value;
    newUser.Password = this.passwordFormControl.value;
    this._dataService.createUser(newUser).subscribe(x => {
      if(x){
        this.userDetails = x;
        sessionStorage.setItem("userDetails", JSON.stringify(x));
        this.router.navigate(['general']);
      
      }
    });
  }

  private resetLoginForm(){
    this.emailFormControl.clearValidators();
    this.passwordFormControl.clearValidators();
    this.emailFormControl.reset();
    this.passwordFormControl.reset();
   
  }





}
