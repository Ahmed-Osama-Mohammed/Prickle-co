import { SharedserviceService } from './../services/sharedservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
brand:any=[]
subscribeForm:FormGroup;


diplayer(){ 
 let x:any=  document.getElementById("map");
 x.style.display="none"

}
 constructor(SharedserviceService: SharedserviceService , private fb: FormBuilder) {
  this.brand = SharedserviceService.getBrandInfo();

this.subscribeForm = this.fb.group({
email:[ "" ,[Validators.required, Validators.minLength(1), Validators.email , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
})
}
get email() {
  return this.subscribeForm.get("email");
}


onSubmit(){
  console.log(this.subscribeForm.get("email"));

}



  ngOnInit(): void {
  }

}
