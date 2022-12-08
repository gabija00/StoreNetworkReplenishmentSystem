import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../_services/department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  currentDepartment = null;
  data:any=null;
  message = '';
  id:any;
  ids:number;
  readData:any;
  content:any;

  constructor(private departmentService: DepartmentService,private activeroute:ActivatedRoute,private router: Router) { 
      this.activeroute.queryParams.subscribe(params => {
        this.id = params.id1;
        this.ids = params.id2;    
      });
    }

  ngOnInit(): void {
    this.message = '';
    this.getDepartment(this.id, this.ids);
  }

  getDepartment(id, ids): void {
    this.departmentService.get(id, ids).subscribe(
        data => {
          this.currentDepartment = JSON.parse(data).data[0];
          console.log(JSON.parse(data).data);
        },
        error => {
          console.log(error);
        }); 
  }

  updateDepartment(): void {
    this.departmentService.update(this.id ,this.ids, this.currentDepartment)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The shop was updated successfully!';
        },
        error => {
          console.log(error);
        });
        this.goBackToMain();
  }

  goBackToMain(){
    this.router.navigateByUrl('/home');
   }

}
