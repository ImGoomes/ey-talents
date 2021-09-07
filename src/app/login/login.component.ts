import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private _service: AuthService,
    private _fb: FormBuilder,
    private _route: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });

    this.loginForm.patchValue({
      Email: null,
      Password: null
    });

    this._service.loggedIn.next(false);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.disable();
      this._service.getUsers().subscribe((user) => {
        const ususario = user.filter(x => x.username == this.loginForm.controls['Email'].value
          && x.password == this.loginForm.controls['Password'].value)
        if (ususario.length > 0) {
          this._service.loggedIn.next(true);
          this._route.navigate(['/dashboard']);
        } else {
          this._toastr.error('Verifique suas credenciais!', 'Email ou senha incorretos.');
          this.loginForm.enable();
        }
      }, erro => {
        this._toastr.error('Verifique suas credenciais!', 'Email ou senha incorretos.');
        this.loginForm.enable();
      }
      );
    }
  }

}
