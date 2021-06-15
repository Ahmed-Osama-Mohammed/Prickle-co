import { AbstractControl , ValidatorFn } from "@angular/forms";

export function validateExpression(nameRegex: RegExp): ValidatorFn{
return  ( control : AbstractControl ):({[key: string]:boolean}|null) => {
    if(control.value.match(nameRegex)){
        return {invalidName:true};
    }
    return null
};
}
