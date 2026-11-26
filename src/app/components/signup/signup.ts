import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-signup',
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  signupForm!:FormGroup;
  users:any[]=[];


  ngOnInit():void{
    this.signupForm = this.formBuilder.group({
      userName : ['', [Validators.required, Validators.minLength(3)]],
      email : ['', [Validators.required, Validators.email]],
      pwd : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      gender : ['', Validators.required],
      country: ['', Validators.required],
      clothes:[false],
      accessoires:[false]
    });
  }

  signup(){
    console.log(this.signupForm.value);

    const formValue =this.signupForm.value;
    let interests =[];
    if (formValue.clothes) interests.push('vetements');
    if (formValue.accessoires) interests.push('accessoires');

    // Créer l'obj final
    const userFinal= {
      userName : formValue.userName,
      emil : formValue.email,
      pwd : formValue.pwd,
      gender : formValue.gender,
      interests,
      country : formValue.country
    }
    console.log(userFinal);

    this.users = JSON.parse(localStorage.getItem('usersList') || '[]');
    this.users.push(userFinal);
    localStorage.setItem("usersList", JSON.stringify(this.users));
    this.signupForm.reset();
    this.router.navigate(["/signin"]);
    
  }
}
