import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentProduct = null;
  data:any=null;
  message = '';
  id:any;
  ids:number;
  idp:number;
  readData:any;
  content:any;

  constructor(private productService: ProductService, private activeroute:ActivatedRoute,private router: Router) { 
      this.activeroute.queryParams.subscribe(params => {
        this.id = params.id1;
        this.ids = params.id2; 
        this.idp = params.id3;    
      });
    }

    ngOnInit(): void {
      this.message = '';
      this.getProduct(this.id, this.ids, this.idp);
    }
  
    getProduct(id, ids, idp): void {
      this.productService.get(id, ids, idp).subscribe(
          data => {
            this.currentProduct = JSON.parse(data).data[0];
            console.log(JSON.parse(data).data);
          },
          error => {
            console.log(error);
          }); 
    }
  
    updateProduct(): void {
      this.productService.update(this.id ,this.ids,this.idp, this.currentProduct)
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
