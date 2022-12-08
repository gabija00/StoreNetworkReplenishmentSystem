import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product = {
    pavadinimas: '',
    aprasymas: '',
    svoris_gramais: 0,
    savininko_id: 0
  };
  submitted = false;
  
  id:number;
  ids:number;

  constructor(private productService: ProductService, private activeroute:ActivatedRoute,private router: Router) { 
    this.activeroute.queryParams.subscribe(params => {
      this.id = params.id1;
      this.ids = params.id2;    
    });
  }



  ngOnInit(): void {
  }

  saveProduct(): void {
    const data = {
      pavadinimas: this.product.pavadinimas,
      aprasymas: this.product.aprasymas,
      svoris_gramais: this.product.svoris_gramais,
      savininko_id: this.product.savininko_id,
      skyrius_id:this.ids,
      parduotuve_id:this.id
    };
    console.log(data);

    this.productService.create(this.id, this.ids, data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newShop(): void {
    this.submitted = false;
    this.product = {
      pavadinimas: '',
      aprasymas: '',
      svoris_gramais: 0,
      savininko_id: 0
    };
  }
  goBackToMain(){
    this.router.navigateByUrl('/home');
   }

}
