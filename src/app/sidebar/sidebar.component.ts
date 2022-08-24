import { Component, OnInit } from '@angular/core';
import { sidebarData } from './menu-data';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebarData:any;

  constructor() { 
    this.sidebarData = sidebarData;
  }

  ngOnInit(): void {
  }

  redirectUrl(item:any){
    console.log(item.url);
  }

}
