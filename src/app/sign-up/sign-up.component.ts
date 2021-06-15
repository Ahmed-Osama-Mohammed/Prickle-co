import { UsersDataService } from './../services/users-data.service';
import { User } from './../Shared/modules/user.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { validateExpression } from 'src/app/Shared/name.validation';
import {validatePassword} from 'src/app/Shared/password.validation'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../home/order-form/order-form.component.css','../Shared/regestration-form-style/style.css','./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  SignUpForm: FormGroup;
  constructor( private fb:FormBuilder ,private UsersDataService:UsersDataService) {
    this.SignUpForm=this.fb.group({
      firstName:[ "" , [Validators.required , Validators.minLength(3) ,validateExpression(/[0-9]/)]],
      lastName:[ "" , [Validators.minLength(3), validateExpression(/[0-9]/)]],
      email:[ "" ,[Validators.required ,Validators.minLength(5), Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],],
      password:[ "" ,[Validators.required ,Validators.minLength(6)]],
      confirmPassword:[ "" ,Validators.required],
      terms: [false, Validators.requiredTrue]
      
      
    }, {
      validator: validatePassword('password', 'confirmPassword')
    });
    
  }


  get f() { return this.SignUpForm.controls; }
  
  
  onSubmit(){
    this.newUserData()
    let info:any=document.getElementById("signup-info")
    let infoSucess:any=document.getElementById("sucess-signup")
    info.style.display="none"
    infoSucess.style.display="block"

  }  

  newUserData(){ 
    let newUser:User={
      name :this.SignUpForm.controls.firstName.value,
      password:this.SignUpForm.controls.password.value,
      email : this.SignUpForm.controls.email.value,
      imgUrl:"../../assets/Images/profile-pic-default.jpg",
      admin: false

    }  
    this.UsersDataService.getNewUser(newUser);
  }

  close(){
    let x:any=document.getElementById("signup");
    document.getElementsByTagName("body")[0].style.overflowY="scroll";
    x.style.display="none"
    console.log(this.SignUpForm.controls.email);
  }


  goLogIn(){
  let y:any=document.getElementById("login")
  let x:any=document.getElementById("signup")
  x.style.display="none"
  y.style.display="block"
  }




  checkExist(): ({[key: string]:boolean}|null){
    for(let i=0 ; i<=this.UsersDataService.data.length ; i++) {
      if(this.SignUpForm.controls.email.value == this.UsersDataService.data[i].email){
          
       this.SignUpForm.controls.email.setErrors( {emailExists: true})
      
      }
    }
    return null
  }



  ngOnInit(): void {
    
  }

}
