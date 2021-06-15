import { UsersDataService } from './../services/users-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['../home/order-form/order-form.component.css','../Shared/regestration-form-style/style.css','./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  ResetPasswordForm: FormGroup;

  constructor( private fb:FormBuilder ,private UsersDataService:UsersDataService) {
    this.ResetPasswordForm=this.fb.group({
      email:[ "" ,[Validators.required ,Validators.minLength(1), Validators.email , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]      
    })
   }
   get email() {
    return this.ResetPasswordForm.get("email");
  }
   
   onSubmit(){
    console.log(this.ResetPasswordForm);
  
  }
  close(){
    let x:any=document.getElementById("reset");
    document.getElementsByTagName("body")[0].style.overflowY="scroll";

    x.style.display="none"
  }


  checkExist(): ({[key: string]:boolean}|null){
    for(let i=0 ; i<=this.UsersDataService.data.length ; i++) {
      if(this.ResetPasswordForm.controls.email.value !== this.UsersDataService.data[i].email){
          
       this.ResetPasswordForm.controls.email.setErrors( {emailNotExists: true})
       console.log(this.ResetPasswordForm.controls.email);
      
      }
      
    }
    return null
  }



  ngOnInit(): void {
  }

}
