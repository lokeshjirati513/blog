import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./user-list/user-list.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { CountryListComponent } from './country-list/country-list.component';
import { LoginComponent } from "./user-auth/login/login.component";
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,UserListComponent, UserDashboardComponent, StudentListComponent, CountryListComponent, LoginComponent, HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'blog';
  data = 'lokesh';
  displayval='';
  disable = false;
  show=true;
  color = "green";
  user=['lokesh','jirai','ramesh','suresh'];
  getValue(){
    return 4*5;
  }
  getClicked(){
    alert("button clicked / function called");
  }
  getName(name : any)
  {
    alert(name);
  }
  getData(val : any)
  {
    console.log(val);
    this.displayval=val;
  }
  updateColor()
  {
    this.color = "yellow";
  }
  toggle()
  {
    this.show=!this.show;
  }

  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
