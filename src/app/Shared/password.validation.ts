import { FormGroup } from '@angular/forms';

export function validatePassword(control1:string,control2:string){
    return (formGroup:FormGroup):{[key:string]:boolean} | null => { 
        const password = formGroup.controls[control1];
        const confirmPassword = formGroup.controls[control2];
        if (password.dirty && confirmPassword.dirty && password.value!== confirmPassword.value){
            confirmPassword.setErrors({
                wrongPassword :  true });
        }
        return null;
    };
}