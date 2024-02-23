import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import StorageServiceService from '../_services/storage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Change styleUrl to styleUrls
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Define a FormGroup for the login form

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = []; 

  constructor(
    private formBuilder: FormBuilder, // Inject the FormBuilder service
    private authService: AuthService,
    private storageService: StorageServiceService,
    private router: Router // Inject the Router service
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ // Use FormBuilder to create a FormGroup
      email: ['', Validators.required], // Add validation for required field
      password: ['', Validators.required] // Add validation for required field
    });

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
       const username = this.loginForm.get('email')!.value; // Ajout de ! pour indiquer que l'objet ne sera pas null
      const password = this.loginForm.get('password')!.value;

      this.authService.login(username, password).subscribe({
        next: data => {
          this.storageService.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.authService.setIsLoggedIn(true);
          this.roles = this.storageService.getUser().roles;
          this.router.navigate(['/accueil']); // Redirect to home page after successful login
        },
        error: err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      });
    }
    getIsLoggedIn(): boolean {
      return this.isLoggedIn;
    }
  
    setIsLoggedIn(value: boolean) {
      this.isLoggedIn = value;
    }
  
}
