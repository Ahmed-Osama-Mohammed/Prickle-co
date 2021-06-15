import { User } from './../Shared/modules/user.module';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  data:User[]=[{
    name:"Ahmed",
    password:"123456",
    email:"blackzerox966@gmail.com",
    imgUrl:"../../assets/Images/profile-pic.jpg",
    admin: true
  }]
  case:any=[{isAdmin:false}]
  constructor() {
    
  }
  getCase(adminCase:any){
   this.case[0]=adminCase
  }
  sendCase(){
    return this.case
  }


  getNewUser(newUser:User){
    this.data.push(newUser);
    
  }
  
  getDataInfo(){
    return this.data;
  }



}
