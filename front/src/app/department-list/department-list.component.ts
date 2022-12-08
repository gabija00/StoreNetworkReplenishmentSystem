import { Component, OnInit } from '@angular/core';
import { Router ,NavigationExtras} from '@angular/router';
import { DepartmentService} from '../_services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  data:any=null;
  content: string;
   readData : any;
  constructor(private router:Router, private departmentService:DepartmentService) {
    this.data = this.router.getCurrentNavigation().extras.state;
   }

   ngOnInit(): void {
     this.getData();
   }
 
   getData()
   {
     this.departmentService.getAll(this.data).subscribe(
       data => {
         this.content = JSON.parse(data).message;
         this.readData = JSON.parse(data).data;
       },
       err => {
         this.content = JSON.parse(err.error).message;
       }
     );    
   }
   onDeleteDepartment(id:any){
    this.departmentService.deleteData(id,id).subscribe(
      data => {
        this.content = JSON.parse(data).message;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );    
    this.getData();
   }
   
   onUpdateDepartment(id:any){
    this.router.navigate(
      ['department-details', id],{queryParams:{id1:this.data, id2:id}});
   }

   

   view(id:any){
    this.router.navigate(
      ['product-list'],{queryParams:{id1:this.data, id2:id}});
   }



}
