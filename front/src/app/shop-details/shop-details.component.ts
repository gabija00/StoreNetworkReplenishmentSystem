import { Component, OnInit } from '@angular/core';
import { ShopService } from '../_services/shop.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  currentShop = null;
  message = '';
  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getShop(this.route.snapshot.paramMap.get('id'));
  }

  getShop(id): void {
    this.shopService.get(id).subscribe(
        data => {
          this.currentShop = JSON.parse(data).data[0];
          console.log(JSON.parse(data).data);
        },
        error => {
          console.log(error);
        }); 
  }

  updateShop(): void {
    this.shopService.update(this.currentShop.id, this.currentShop)
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
