import { UsersDataService } from './../services/users-data.service';
import { User } from './../Shared/modules/user.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../home/order-form/order-form.component.css','../Shared/regestration-form-style/style.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
 case:any
  allUsers:User[]=[]


  constructor( private fb:FormBuilder ,private UsersDataService:UsersDataService ) {
    this.LoginForm=this.fb.group({
      email:[ "" ,[Validators.required ,Validators.minLength(1), Validators.email , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:[ "" ,[Validators.required ,Validators.minLength(3)]]
      
    })
    this.allUsers= UsersDataService.getDataInfo()
        
  }
  
   get email() {
    return this.LoginForm.get("email");
  }
   get password() {
    return this.LoginForm.get("password");
  }


   onSubmit(){
    console.log(this.LoginForm);
  
  }
  close(){
    let x:any=document.getElementById("login");
    document.getElementsByTagName("body")[0].style.overflowY="scroll";
    x.style.display="none"
  }
  goSignUp(){
    let x:any=document.getElementById("login")
    let y:any=document.getElementById("signup")
    x.style.display="none"
    y.style.display="block"
  }
  restPassword(){
    let x:any=document.getElementById("login")
    let y:any=document.getElementById("reset")
    x.style.display="none"
    y.style.display="block"
  }

   logIn(){
     for(let i=0; i<=this.allUsers.length; i++){
     if(this.LoginForm.controls.email.value===this.allUsers[i].email && this.LoginForm.controls.password.value===this.allUsers[i].password){
     if(this.allUsers[i].admin=== true){
       this.case= {isAdmin:true}
       this.UsersDataService.getCase(this.case)
     }
     
     
      let x:any=document.getElementById("icon")
     let y:any=document.getElementById("nav-log")
     x.style.display="none"
     y.innerHTML="<img src='"+this.allUsers[i].imgUrl+" 'id='profile'>"
     let z:any=document.getElementById("profile")
     z.style.width="47px"
     z.style.verticalAlign="bottom"
     z.style.borderRadius="50%"
     let user:any=document.getElementById("user")
     user.innerText="Hi "+this.allUsers[i].name
     let login:any=document.getElementById("login-sucess")
     let info:any=document.getElementById("info")
     login.style.display="block"
     info.style.display="none"
     }
    }
   }  

  ngOnInit(): void {
  }

}
