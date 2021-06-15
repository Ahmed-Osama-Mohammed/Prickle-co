import { validateExpression } from 'src/app/Shared/name.validation';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  specialOrderForm:FormGroup;


  
  constructor( private fb:FormBuilder) {
    this.specialOrderForm = this.fb.group({
    firstName:[ "" , [Validators.required , Validators.minLength(3) ,validateExpression(/[0-9]/)]],
    lastName:[ "" , [Validators.required , Validators.minLength(3), validateExpression(/[0-9]/)]],
    email:[ "" ,[Validators.required ,Validators.minLength(1), Validators.email , Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phone:["",[ Validators.minLength(11), validateExpression(/[a-zA-z]/)]],
    massage:"",
  });
}
get firstName() {
  return this.specialOrderForm.get("firstName");
}
get lastName() {
  return this.specialOrderForm.get("lastName");
}
get email() {
  return this.specialOrderForm.get("email");
}
get phone() {
  return this.specialOrderForm.get("phone");
}
get massage() {
  return this.specialOrderForm.get("massage");
}

onSubmit(){
  console.log(this.specialOrderForm.value);

}

ngOnInit(): void {
}

}
