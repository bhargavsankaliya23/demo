import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StorageKey, StorageService } from "app/shared/storage.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup | any;
  hide1 = false;
  get fLoginData() {
    return this.loginForm.controls;
  }
  submittedLoginData = false;

  constructor(private http: HttpClient, private router: Router, private fb: FormBuilder, public storageService: StorageService,) { }

  ngOnInit(): void {
    this.defaultloginForm();
  }

  defaultloginForm() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/),]],
      pwd: ["", [Validators.required]],
    });
  }

  login() {
    this.submittedLoginData = true;
    if (this.loginForm.invalid) {
      return;
    }
    
    this.router.navigate(["/admin/dashboard"]);
  }

}
