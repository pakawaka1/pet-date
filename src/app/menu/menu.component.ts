import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'Pet-Date';
  items = Array();
  loggedin = null;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    console.log("a");
    this.loggedin = this.authService.getCurrentUser();
    console.log(this.loggedin);
    console.log("b");
    this.items.push({name:'home', path:'/'});
    this.items.push({name:'pets', path:'/pets'});
    this.items.push({name:'faq', path:'/faq'});
    console.log("c");
    console.log(this.loggedin.username == "");

    if(this.loggedin.username == "") {
      this.items.push({name:'login', path:'/login'});
      this.items.push({name:'signup', path:'/register'});
    } else {
      this.items.push({name:'logout', path:'/logout'});
    };
    console.log(this.loggedin);
  }

}
