import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService} from '../_services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  id:any;
  ids:number;
  readData:any;
  content:any;
  constructor(private router:Router, private productService:ProductService, private activeroute:ActivatedRoute) {
    this.activeroute.queryParams.subscribe(params => {
      this.id = params.id1;
      this.ids = params.id2;    
    }
  );
  
   }

   ngOnInit(): void {
    this.getData();
  }

  getData()
  {
    this.productService.getAll(this.id, this.ids).subscribe(
      data => {
        this.readData = JSON.parse(data).data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );    
  }
  onDeleteProduct(id:any){
   this.productService.deleteData(this.id, this.ids, id).subscribe(
     data => {
       this.content = JSON.parse(data).message;
     },
     err => {
       this.content = JSON.parse(err.error).message;
     }
   );    
   this.getData();
  }
  onUpdateProduct(id:any){
    this.router.navigate(
      ['product-details', id],{queryParams:{id1:this.id, id2:this.ids, id3:id}});
   }
   onNewProduct(){
    this.router.navigate(
      ['create-product'],{queryParams:{id1:this.id, id2:this.ids}});
   }
   

}
