import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {


  login = {
    email: "",
    password: ""
  };
  messageSucces = "";
  messageEreurr = "";
  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  loginAdmin() {
    //implimentation spring boot important
    if (this.login.email != "admin@gmail.com" && this.login.password != "1234") {
      this.messageEreurr = "Mot de Pass ou Email incorrect";
    } else {
      // avec notification d'erreur
      localStorage.setItem('admin', JSON.stringify(this.login));
      //save to localstorage this.loginBrico
      this.messageSucces = "Bienvenue ! Dashboard ";
      return this._router.navigateByUrl('/dashboard');
    }
  }
}