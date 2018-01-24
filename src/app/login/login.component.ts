import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../node_modules/bulma/css/bulma.css', "../../../node_modules/font-awesome/css/font-awesome.css"],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.username = "";
    this.password = "";
  }

  onSubmit(username: string, password: string) {
    console.info(""+this.username); 
    console.info(""+this.password); 
    this.loginService.save(username, password);
  }
}
