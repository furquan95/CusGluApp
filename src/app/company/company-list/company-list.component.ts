import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements AfterViewInit {

  displayedColumns:any =[]
  companyColumns:any[] = [
    {display:'COMPANY NAME', name:'companyName'},
    {display:'Email', name:'email'},
    {display:'Phone Number', name:'phoneNumber'},
    {display:'Created At', name:'createdDate'},
    // {display:'Action', name:'action'}
  ]
    
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(){
    let companyData:any = localStorage.getItem('companyData');
    (companyData)?companyData=JSON.parse(companyData):''

    console.log(companyData)
    let filteredData:any = []
    if(companyData){
      companyData.forEach((el:any)=>{
        filteredData.push({
          companyName:el.companyName,
          email:el.email,
          phoneNumber:el.phoneNumber,
          createdDate:el.createdDate,
        })
      });
    }

    
    this.dataSource = new MatTableDataSource(filteredData)
    this.displayedColumns = this.companyColumns.map(col => col.name);
  }


  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
  }
}




