import {Component, CUSTOM_ELEMENTS_SCHEMA, signal} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../Controllers/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'form-field-error-example',
  templateUrl: 'login.Component.html',
  styleUrl: 'login.Component.css',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class LoginComponent {
  hidePassword = true; // Default state password is hidden
  errorMessage: string = '';
  constructor(private router: Router,private authService: AuthService , private toastr: ToastrService,) {
  
  }
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  togglePasswordVisibility(event: MouseEvent): void {
    event.preventDefault(); 
    this.hidePassword = !this.hidePassword; 
  }
 
  authenticateUser(): boolean {
    if (this.form.value.email === "member@pps.com" && this.form.value.password ==='pps' ) {
        return true; // Access granted
    } 
    return false; // Access denied
}


  onSubmit() {
   
       if(this.authenticateUser())
{
  this.authService.login(); 

this.router.navigate(['/Dashboard'])
this.toastr.success("Welcome PPS member  to Notify 😉 ")
  
}
else{
  console.log("Fail")

}


    }
    
    
    
  }



