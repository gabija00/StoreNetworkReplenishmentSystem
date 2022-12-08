import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  submitted = false;
  department = {
    pavadinimas: '',
    prekiu_tipas: '',
    prekiu_kiekis: 0,
    parduotuve_id: 0,
    savininko_id: 0
  };
  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

  saveDepartment(): void {
    const data = {
      pavadinimas: this.department.pavadinimas,
      prekiu_kiekis: this.department.prekiu_kiekis,
      prekiu_tipas: this.department.prekiu_tipas,
      parduotuve_id:this.department.parduotuve_id,
      savininko_id: this.department.savininko_id
    };

    /*this.departmentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });*/
  }

  newShop(): void {
    this.submitted = false;
    this.department = {
      pavadinimas: '',
      prekiu_tipas: '',
      prekiu_kiekis: 0,
      parduotuve_id: 0,
      savininko_id: 0
    };
  }

}
