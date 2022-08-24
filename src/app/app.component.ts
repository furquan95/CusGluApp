import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CusGluApp';

  constructor(){
    let skills = ["Java", "Angular", "CSS", "HTML", "JavaScript", "UI", "SQL", "React", "PHP","GIT", "AWS",
     "Python", "Django", "C", "C++", "C#", "Unity", "R", "AI", "NLP","Photoshop", "Nodejs"];

     localStorage.setItem('skills',JSON.stringify(skills))
  }
}
