import { Component, OnInit } from '@angular/core';
import { ShopService } from '../_services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent implements OnInit {

  shop = {
    pavadinimas: '',
    adresas: '',
    parduotuves_vadovas: '',
    darbuotoju_kiekis: 0,
    prekiu_kiekis: 0,
    savininko_id: 0
  };
  submitted = false;
  constructor(private shopService: ShopService, private router:Router) { }

  ngOnInit(): void {
  }
  saveShop(): void {
    const data = {
      pavadinimas: this.shop.pavadinimas,
      adresas: this.shop.adresas,
      parduotuves_vadovas: this.shop.parduotuves_vadovas,
      darbuotoju_kiekis: this.shop.darbuotoju_kiekis,
      prekiu_kiekis: this.shop.prekiu_kiekis,
      savininko_id: this.shop.savininko_id
    };

    this.shopService.create(data)
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
    this.shop = {
      pavadinimas: '',
      adresas: '',
      parduotuves_vadovas: '',
      darbuotoju_kiekis: 0,
      prekiu_kiekis: 0,
      savininko_id: 0
    };
  }
  goBackToMain(){
    this.router.navigateByUrl('/home');
   }


}
